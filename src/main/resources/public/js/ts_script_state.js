


//set the bottom of the page length
$(document).ready(function () {
    configTimeSyncDash();
    setChipGalleryLength();
    toggleSpinner(false);
});




//////////DEFINE GLOBAL VARIABLES/////////////////////////////////////////////////////////
var specIndex = "TCW"; //default index to display - set again when a plot is clicked on
var rgbColor = [];
var allDataRGBcolor = [];
var data = { "Values": [] };
var allData = { "Values": [] };
var n_chips = 0;
var lastIndex = 0;
var origData = []; //FIXME: this variable can be elimiated!!!
//var userID = 9;
//var projectID = "";
//var plotID = "";
//var tsa = "999999";
var selectedCircles = [];
var lineDate = [];
var vertInfo = [];
var comment = '';
var isExample = 0;
var selectThese = [];
var lineData = [];
var chipstripwindow = null;//keep track of whether the chipstrip window is open or not so it is not opened in multiple new window on each chip click
var highLightColor = "#32CD32";
var activeRedSpecIndex = "TCB" //"TCB"; //default index to display - set again when a plot is clicked on
var activeGreenSpecIndex = "TCG" //"TCG"; //default index to display - set again when a plot is clicked on
var activeBlueSpecIndex = "TCW" //"TCW"; //default index to display - set again when a plot is clicked on
var ylabel = "";
var yearList = [];

var sessionInfo = {
    "userID": userID,
    "userName": userName,
    "projectID": "",
    "projectCode": "",
    "tsa": "999999",
    "plotID": "",
    "packet": -1,
    "isDirty": false,
    "plotSize": 1,
    //TSCEO workaround for CEO API.
    "numPlots": 1000,
    "tsStartYear": 1985,
    "tsEndYear": 2017,
    "tsTargetDay": 215,
    "currentLocation": { "coordinates": [0, 0] },
    "plots": []
}


var packetInfo = {}

var chipInfo = {
    useThisChip: [],
    canvasIDs: [],
    imgIDs: [],
    sxOrig: [],
    syOrig: [],
    sWidthOrig: [],
    sxZoom: [],
    syZoom: [],
    sWidthZoom: [],
    chipsInStrip: [],
    year: [],
    julday: [],
    src: [],
    sensor: []
};

var chipDisplayProps = {
    box: 1,
    boxZoom: 1,
    chipSize: 195,
    halfChipSize: 97.5,
    offset: 30,
    canvasHeight: 195, //212,
    zoomLevel: 20,
    plotColor: "#FFFFFF"
};

var minZoom = 0;
var maxZoom = 40;
var stopZoom = 40;
var sAdj = [0];
var lwAdj = [chipDisplayProps.box];
var zoomIn = 0;

var timeLapseIndex = 0;
var playTL;
var flickerTL;

var windowH = $(window).height();
var windowW = $(window).width();

//setup the domains
var date = new Date();
defaultDomain.year.max = date.getFullYear() + 1; //add one since the data displayed is a decimal if final year is 2016, point might be 2016.56 - need to include up to 2016.99999
var currentDomain = $.extend(true, {}, defaultDomain); //make a copy of the default domain that can be altered
currentDomain["dirty"] = 0; //need to add this since it is not in the default domain
/* YANG 2016.08.06
Yang: 2016.08.31: warren want to change it back to always local stretch */
currentDomain["hasCustomizedXY"] = 0;
/**/

var plotDrawn = 0; //global variable needed for the window resize

/*********************** BeginSetion 1. Retrieving TimeSync Interpretation **********************/

var tsServer = 'https://localhost:8080';
var geeServer = 'https://localhost:8888';
var osuServer = 'https://timesync.forestry.oregonstate.edu/_ts3';



/*********************** BeginSetion 2. Event Handler **********************/


//listener/action for when the body has loaded - append the projects to the projects list
$("#projectList").load(addProjectData(sessionInfo));

//if the comment area is typed in, then the session is dirty and should be saved
$('#commentInput').keypress(function () {
    sessionInfo.isDirty = true;
});

//TODO: TSCEO export timesync data
$('#exportBtn').click(function (event) {
    return;
    // var target = 'exportts.php?t=' + authHeader + '&pid=' + sessionInfo.projectID + '&uid=' + sessionInfo.userID;
    // if (sessionInfo.projectID == '') {
    //     return;
    // }
    // window.location.href=target;
});

$('#syncWithCEO').click(function (event) {
    console.log("TO BE IMPLEMENTED.");
});


//if the isExampleCheckbox is altered, then the session is dirty and should be saved, also the class of the #plotList li.selected needs to be updated
$('#isExampleCheckbox').change(function () {
    sessionInfo.isDirty = true;
    var thisPlotLi = $("#plotList li.selected");
    if (this.checked == true) {
        thisPlotLi.addClass("example");
    } else {
        thisPlotLi.removeClass("example");
    }
    //update the list
    if ($("#examplePlots").prop("checked") == true) {
        showHideExamples();
    }
});

//listener/action for when a project is clicked on - append plots to the plot list for that project
$("body").on("click", "#projectList li", function () {
    clearThePlotDisplay(sessionInfo, vertInfo) //vertInfo is null because it may not have been created yet if this is the first loading
    sessionInfo.projectID = $(this).val();
    sessionInfo.projectCode = $(this).text();
    sessionInfo.plotID = ""; //defaulted as "" when application is first opened, do this to reset to default if a new project is selected from the same session or else the plotID will still be assigned, but from the last project
    sessionInfo.plots = [];
    sessionInfo = { ...sessionInfo, ...$(this).data() };
    chipDisplayProps.box = $(this).data().size;

    var thesePackets = packetInfo[sessionInfo.projectID];
    $('#packetList').empty();
    //if no packet information is defined, autoload all plots and disable packet list
    if (thesePackets === null) {
        $('#packetBtn').prop('disabled', true);
        $("#packetBtn").empty().append('All<span class="caret projBtn"></span>');
        sessionInfo.packet = -1;
    }
    else {
        $('#packetBtn').prop('disabled', false);
        var packets = thesePackets.split(',').forEach(function (v, i) {
            $('#packetList').append('<li value="' + v + '">Packet ' + v + '</li>')
            if (i === 0) {
                $("#packetBtn").empty().append('Packet ' + v + '<span class="caret projBtn"></span>');
                sessionInfo.packet = v
            }
        });
    }
    appendPlots(sessionInfo);
});

//listener/action for when a project is clicked on - append plots to the plot list for that project
$("body").on("click", "#packetList li", function () {
    clearThePlotDisplay(sessionInfo, vertInfo) //vertInfo is null because it may not have been created yet if this is the first loading
    sessionInfo.packet = $(this).val();
    sessionInfo.plotID = ""; //defaulted as "" when application is first opened, do this to reset to default if a new project is selected from the same session or else the plotID will still be assigned, but from the last project

    $("#packetBtn").empty().append('Packet ' + sessionInfo.packet + '<span class="caret projBtn"></span>');
    appendPlots(sessionInfo);
});


//listener/handler for example plot check box
$("#examplePlots").change(function () {
    showHideExamples();
});



//listener/action for plot selection - load the data for the selected plot
$("body").on("click", "#plotList li", function (e) {
    if (e.originalEvent.detail > 1) { return; } //no double clicks, it populates the vertInfo structure twice

    var formerPlotID = sessionInfo.plotID

    //temp domain, not defined yet
    saveSetting(sessionInfo.projectID, formerPlotID, currentDomain);

    clearThePlotDisplay(sessionInfo, vertInfo); //remove all plot elements in prep for new plot

    //get and set the sessionInfo.plotID
    var index = $("#plotList li").index($(this));
    sessionInfo.plotID = $(this).text().trim();
    sessionInfo.currentLocation = $(this).data().center;
    // sessionInfo.packet = $(this).data().packet;

    currentDomain = getSetting(sessionInfo.projectID, sessionInfo.plotID, defaultDomain)
    currentDomain.dirty = 0; //need to reset this since it is "clean" now

    //checkPlot(sessionInfo, vertInfo); //this gets handled in the saveVertInfo function which gets called in the clearThePlotDisplay function call just 1 line above
    //var thisVertInfo = $("#plotList li").index($("#plotList li.selected"))
    //plotFormInfo[thisVertInfo] = vertInfo;

    $("#plotList li").removeClass("selected");
    $(this).addClass("selected");

    vertInfo = [] //plotFormInfo[index];

    specIndex = $("#indexList li.active").attr('id');
    ylabel = $("#" + specIndex).text() //check to see if this one needs to be passed to the getData function

    toggleSpinner(true);

    getData(sessionInfo, specIndex, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, ylabel)
});



//mechanism to reset the plot zoom
$("#btnResetGlobal").click(function () {
    svg.call(xzoom
        .x(xscale.domain([defaultDomain.year.min, defaultDomain.year.max])) //xmin and xmax are global variables that are set in the "plotInt" function
        .y(yscale.domain([defaultDomain[specIndex].min, defaultDomain[specIndex].max])) //domain is javascript object that comes from an outside file
        .event);
    svg.call(yzoom
        .x(xscale.domain([defaultDomain.year.min, defaultDomain.year.max])) //xmin and xmax are global variables that are set in the "plotInt" function
        .y(yscale.domain([defaultDomain[specIndex].min, defaultDomain[specIndex].max])) //domain is javascript object that comes from an outside file
        .event);
});

$("#btnResetLocal").click(function () {
    localStretch();
});



//resizes the trajectory plot when the browser window if resized - min width is 1150px
$(window).resize(function (r) {
    //windowH and windowW are global variables
    var newHeight = $(window).height()
    var newWidth = $(window).width();
    if (newHeight != windowH) {
        setChipGalleryLength();
    }
    if (newWidth != windowW && plotDrawn == 1) {
        $("#svg").empty(); //reset
        selectedCircles = []; //reset
        lineData = []; //reset
        plotInt(false); //redraw the plot
    }
});



//make the trajectory svg circles selectable
$(document).on("dblclick", "circle.data, .chipHolder.annual", function (e) { //need to use this style event binding for elements that don't exisit yet - these lines will run before the "circle" elements are created, alternatively could use the commented lines in the above jquery section
    sessionInfo.isDirty = true;
    if ($("tr").hasClass("active") == false) {
        e.preventDefault(); //make sure that default browser behaviour is prevented
        var nodeType = $(this).prop('nodeName');
        if (nodeType == "circle") {
            var seriesIndex = $("circle.data").index(this);
        } else {
            var seriesIndex = $(".chipHolder").index(this);
        }
        //if(seriesIndex != 0 &&  seriesIndex != lastIndex){changeSelectedClass(seriesIndex);}
        changeSelectedClass(seriesIndex);
    }
});


$(document).on({
    mouseenter: function () {
        var nodeType = $(this).prop('nodeName');
        if (nodeType == "circle") {
            var thisCircle = $(this);
            var thisIndex = $("circle.data").index(thisCircle)
            var thisChipHolder = $(".chipHolder.annual").eq(thisIndex)
        } else {
            var thisChipHolder = $(this); //store since it gets called multiple times
            var thisIndex = $(".chipHolder.annual").index(thisChipHolder) //get the index of the hovered .chipHolder.annual
            var thisCircle = $("circle.data").eq(thisIndex) //figure out what circle.data to highlight based on index of the hovered .chipHolder.annual
        }
        circleBorderColor = thisCircle.css("stroke"); //need to record the stroke so we know if the circle is selected or not - if selected there will be a stroke, if not stroke will be none
        circleBorderWidth = thisCircle.css("stroke-width"); //need to record the stroke width because it could be 2 or 5 depending on whether highlighting is turn on in the trajectory form
        thisCircle.css({ "stroke": highLightColor, "stroke-width": 5 }).attr("id", "hover"); //set the stroke and stroke-width of the circle
        thisChipHolder.addClass("hover"); //add hover class to the .chipHolder.annual so we know which one to turn off on mouseleave - TODO: could just record the index instead of mess with DOM
        borderColor = thisChipHolder.css("borderTopColor"); //record the chipHolder border color so we can return it on mouseleave
        thisChipHolder.css({ "borderTopColor": highLightColor, "borderRightColor": highLightColor, "borderBottomColor": highLightColor, "borderLeftColor": highLightColor, }); //ser the highlight border colors
    },
    mouseleave: function () {
        $("#hover").css({ "stroke": circleBorderColor, "stroke-width": circleBorderWidth }).removeAttr("id");
        $(".hover").css({ "borderTopColor": borderColor, "borderRightColor": borderColor, "borderBottomColor": borderColor, "borderLeftColor": borderColor, }).removeClass("hover");
    }
}, ".chipHolder.annual, circle.data")



//update the plot when buttons are clicked
$(document).ready(function () {
    $(".specPlot li").click(function () { //This will attach the function to all the input elements
        //figure out which dropdown was selected and change its active status
        var thisLi = $(this);
        var thisListID = thisLi.closest("ul").attr('id'),
            thisSpecIndexID = thisLi.attr('id'),
            newactive = "#" + thisListID + " #" + thisSpecIndexID,
            activesearch = "#" + thisListID + " .active",
            activeid = $(activesearch).attr('id'),
            oldactive = "#" + thisListID + " #" + activeid;

        $(oldactive).removeClass('active');
        $(newactive).addClass('active');

        if (thisLi.parent().hasClass("rgb")) {
            if (thisListID == "redList") { $("#btnRed div").replaceWith('<div><strong>R</strong><small>GB</small><br><small>' + $("#" + thisSpecIndexID).text() + '</small><span class="caret specPlot"></span></div>') }
            else if (thisListID == "greenList") { $("#btnGreen div").replaceWith('<div><small>R</small><strong>G</strong><small>B</small><br><small>' + $("#" + thisSpecIndexID).text() + '</small><span class="caret specPlot"></span></div>') }
            else if (thisListID == "blueList") { $("#btnBlue div").replaceWith('<div><small>RG</small><strong>B</strong><br><small>' + $("#" + thisSpecIndexID).text() + '</small><span class="caret specPlot"></span></div>') };

            rgbColor = scaledRGB(data, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, n_chips);
            allDataRGBcolor = scaledRGB(allData, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, allData.Values.length);
            updatePlotRGB();
        } else if (thisLi.parent().hasClass("indexList")) {
            $("#btnIndex div").replaceWith('<div><strong>Index:</strong><br><small>' + $("#" + thisSpecIndexID).text() + '</small><span class="caret specPlot"></span></div>');
            specIndex = $("#indexList li.active").attr('id')

            // localStretch();
            plotUpdate(data, specIndex, rgbColor, currentDomain);
            $("#specPlotIndex").text($("#" + specIndex).text());
        } else if (thisLi.parent().hasClass("chipSetList")) {
            var setText = $("#" + thisSpecIndexID).text()

            switch (setText) {
                case "TM TC":
                    activeRedSpecIndex = "TCB";
                    activeGreenSpecIndex = "TCG";
                    activeBlueSpecIndex = "TCW";
                    break;
                case "SWIR2,NIR,Red":
                    activeRedSpecIndex = "B7";
                    activeGreenSpecIndex = "B4";
                    activeBlueSpecIndex = "B3";
                    break;
                case "NIR,Red,Green":
                    activeRedSpecIndex = "B4";
                    activeGreenSpecIndex = "B3";
                    activeBlueSpecIndex = "B2";
                    break;
            }

            rgbColor = scaledRGB(data, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, n_chips);
            allDataRGBcolor = scaledRGB(allData, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, allData.Values.length);
            updatePlotRGB();

            $("#btnChipSet div").replaceWith('<div><strong>Chip Set:</strong><br><small>' + setText + '</small><span class="caret specPlot"></span></div>');
            $("#chip-gallery, #img-gallery").empty(); //reset
            appendSrcImg(); //append the src imgs
            appendChips("annual", selectThese); //append the chip div/canvas/img set
            drawAllChips("annual");

            var message = {
                "action": "change_chip_set",
                "thisChipSet": 'chipSetBGW' //YANG $("#chipSetList .active").attr("id")
            };

            if ((chipstripwindow != null) || (chipstripwindow.closed == false)) {      //if the window is open then send message to change the chip set
                chipstripwindow.postMessage(JSON.stringify(message), "*");
            }
        }
    });
});

//mechanism to display the selected points and line in the trajectory plot
$("#btnLine").click(function () {
    if ($("#lineDisplayThumb").attr("class") == "glyphicon glyphicon-thumbs-up") {
        $("#lineDisplayThumb").removeClass("glyphicon glyphicon-thumbs-up")
            .addClass("glyphicon glyphicon-thumbs-down");
        $("circle.selected").css("stroke-opacity", "0");
        $("circle.highlight").css("stroke-opacity", "0");
        $("#plotLine").css("stroke-opacity", "0");
    } else {
        $("#lineDisplayThumb").removeClass("glyphicon glyphicon-thumbs-down")
            .addClass("glyphicon glyphicon-thumbs-up");
        $("circle.selected").css("stroke-opacity", "1");
        $("circle.highlight").css("stroke-opacity", "1");
        $("#plotLine").css("stroke-opacity", "1");
    }
});

//mechanism to display all points trajectory plot
$("#btnPoints").click(function () {
    if ($("#allPointsDisplayThumb").attr("class") == "glyphicon glyphicon-thumbs-up") {
        $("#allPointsDisplayThumb").removeClass("glyphicon glyphicon-thumbs-up")
            .addClass("glyphicon glyphicon-thumbs-down");
        $("circle.allData").attr("visibility", "hidden");
        $("circle.data").css("fill-opacity", "1");
    } else {
        $("#allPointsDisplayThumb").removeClass("glyphicon glyphicon-thumbs-down")
            .addClass("glyphicon glyphicon-thumbs-up");
        $("circle.allData").attr("visibility", "visible");
        $("circle.data").css("fill-opacity", "0.5");
    }
});

//mechanism to display all points trajectory plot
$("#showAnomaly").click(function () {
    $("#svg").empty();
    lineData = [];
    plotInt(false);
});

$("#highlightColor").change(function () {
    setHighlightColor();
});

$("#selectedColor").change(function () {
    setSelectedColor()
});

$("#plotColor").change(function () {
    chipDisplayProps.plotColor = $("#plotColor").prop("value")
    drawAllChips("annual")
});


$(window).unload(function () { //catches refresh and url change
    saveVertInfo(sessionInfo, vertInfo);
    if ((chipstripwindow != null) && chipstripwindow.closed == false) {
        chipstripwindow.close();
    }
});

$(window).on("beforeunload", function () { //catches exist buttons
    saveVertInfo(sessionInfo, vertInfo);
    if ((chipstripwindow != null) && chipstripwindow.closed == false) {
        chipstripwindow.close();
    }
})


//saves the form info to the server
$("#saveBtn").click(function () {
    saveVertInfo(sessionInfo, vertInfo)
});



//copies right clicked td to younger siblings
var thisTRindex = 0; //global variable needed for context menu only
var thisTD = {}; //global variable needed for context menu only

//listener/handler for showing the context menu on right click of any td.formDrop and sets the "thisTRindex" and "thisTD"...
//variables needed by the next listener/handler that deals with selecting options from the cotext menu
$(document).ready(function () {
    document.oncontextmenu = function () { return false; };
    $(document).on("mousedown", "td.formDrop", function (e) {
        if (e.button == 2) {
            $("#contextMenu").css({
                "left": e.pageX - 115,
                "top": e.pageY
            }).show();
            thisTD = $(this);
            var thisTR = thisTD.closest("tr");
            thisTRindex = thisTR.index();
            return false;
        }
        return true;
    });
});

$("#contextMenuList li").click(function () {
    $("#contextMenu").hide();
    var thisLiID = $(this).attr("id");
    if (thisLiID == "fillDown") {
        if (thisTD.hasClass("changeProcessInput")) {
            if (thisTRindex + 1 >= vertInfo.length) { return }
            for (var i = thisTRindex + 1; i < vertInfo.length; i++) {
                vertInfo[i].change_process = $.extend(true, {}, vertInfo[thisTRindex].change_process);
            }
        } else if (thisTD.hasClass("landUseInput")) {
            for (var i = thisTRindex; i < vertInfo.length; i++) {
                vertInfo[i].landuse = $.extend(true, {}, vertInfo[thisTRindex - 1].landuse);
            }
        } else if (thisTD.hasClass("landCoverInput")) {
            for (var i = thisTRindex; i < vertInfo.length; i++) {
                vertInfo[i].landcover = $.extend(true, {}, vertInfo[thisTRindex - 1].landcover);
            }
        }
    } else if (thisLiID == "copyPrev") {
        if (thisTD.hasClass("changeProcessInput")) {
            if (thisTRindex >= vertInfo.length) { return }
            vertInfo[thisTRindex].change_process = $.extend(true, {}, vertInfo[thisTRindex - 1].change_process);
        } else if (thisTD.hasClass("landUseInput")) {
            vertInfo[thisTRindex - 1].landuse = $.extend(true, {}, vertInfo[thisTRindex - 2].landuse);
        } else if (thisTD.hasClass("landCoverInput")) {
            vertInfo[thisTRindex - 1].landcover = $.extend(true, {}, vertInfo[thisTRindex - 2].landcover);
        }
    }

    $(".segment, .vertex").remove(); //empty the current vertex and segment forms
    fillInForm(); //refill the forms with the copied info
});

//hide the context menu if it is open and something else is clicked
$("html").click(function () {
    if ($("#contextMenu").css("display") == "block") { $("#contextMenu").hide() }
});

//$("#contextMenu").click(function(e){
//    e.stopPropagation();
//});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//controls the trajectory form section tabs and tables
$("#segmentsFormTab").click(function () {
    var status = $("#segmentsFormTab").attr("class");
    if (status == "unselected") {
        highlightOff();
        closeDropAndRecord();
        $("#CommentsFormTab, #verticesFormTab").attr("class", "unselected");
        $("#CommentsFormDiv, #verticesFormDiv").hide();
        $("#segmentsFormTab").attr("class", "selected").show();
        $("#segmentsFormDiv").show();
    }
});
$("#verticesFormTab").click(function () {
    var status = $("#verticesFormTab").attr("class");
    if (status == "unselected") {
        highlightOff();
        closeDropAndRecord();
        $("#segmentsFormTab, #CommentsFormTab").attr("class", "unselected");
        $("#segmentsFormDiv, #CommentsFormDiv").hide();
        $("#verticesFormTab").attr("class", "selected").show();
        $("#verticesFormDiv").show();
    }
});
$("#CommentsFormTab").click(function () {
    var status = $("#CommentsFormTab").attr("class");
    if (status == "unselected") {
        highlightOff();
        closeDropAndRecord();
        $("#segmentsFormTab, #verticesFormTab").attr("class", "unselected");
        $("#segmentsFormDiv, #verticesFormDiv").hide();
        $("#CommentsFormTab").attr("class", "selected").show();
        $("#CommentsFormDiv").show();
    }
});


//INPUT DROP DOWNS AND HIGHLIGHTING CIRCLES PERTAINING TO THE SELECTED ROW//////////////////////
$(document).on("click", ".changeProcessInput", function (e) {        //, .landUseInput, .landCoverInput,
    highlightOff();
    closeDropAndRecord();
    var thisInput = $(this);
    thisInput.addClass("active"); //set this <td> as active so we know which <td> to place the dropdown selection in
    thisInput.closest("tr").addClass("active"); //set this <tr> as active so it will be highlighted
    $("#CPnotesList li").addClass("disabled")//.removeClass("selected") //reset the display
    $("#CPnotesList input").attr("disabled", true)
    $("#changeProcessList .selected").removeClass("selected");

    dropInputLists(thisInput, "changeProcessDiv", -1, -1, 1);
    var thisOne = $("tr.segment .changeProcessInput").index(thisInput) + 1;
    var selection = vertInfo[thisOne].change_process.changeProcess;

    appendCPnotes(selection);
    changeNoteIcon("#CPnotesList", thisOne, "changeProcess");
    highlightOn("segment", thisOne);
    e.stopPropagation(); //stop other actions from happening - what are the other actions??? - check
});

$(document).on("click", ".lulc", function (e) {
    highlightOff();
    closeDropAndRecord();
    //by default make all the li's disabled
    $("#LUnotesList li").addClass("disabled")//.removeClass("selected"); //reset the display
    $("#LUnotesListSec li").addClass("disabled")//.removeClass("selected"); //reset the display
    $("#LCnotesList li").addClass("disabled")//.removeClass("selected"); //reset the display
    //by default make all inputs disabled
    $("#LUnotesList input").attr("disabled", true)
    $("#LUnotesListSec input").attr("disabled", true)
    $("#LCnotesList input").attr("disabled", true)
    //by default remove all selected classes
    $("#landUseList .selected").removeClass("selected");
    $("#landUseListSec .selected").removeClass("selected");
    $("#landCoverList .selected").removeClass("selected");


    //var thisInput = ; //either lu or lc
    var thisInput = $(this);
    var thisRow = thisInput.closest("tr"); //which row
    var thisLU = thisRow.children(".landUseInput");
    var thisLC = thisRow.children(".landCoverInput");
    thisRow.addClass("active");
    thisLU.addClass("active");
    thisLC.addClass("active");

    var thisOne = $("tr.vertex").index(thisRow);
    highlightOn("vertex", thisOne);

    //change selected attributes to active
    var LUselection = vertInfo[thisOne].landuse.primary.landUse;
    var LUselectionSec = vertInfo[thisOne].landuse.secondary.landUse;
    var LCselection = vertInfo[thisOne].landcover.landCover;
    appendLUnotes(LUselection, "primary");
    appendLUnotes(LUselectionSec, "secondary");
    appendLCnotes(LCselection);

    changeNoteIcon("#LUnotesList", thisOne, "landUse");
    changeNoteIcon("#LUnotesListSec", thisOne, "landUseSec");
    changeNoteIcon("#LCnotesList", thisOne, "landCover");



    //position the dropdown
    var luPos = thisLU.position();
    var lcPos = thisLC.position();
    var bottomTop = luPos.top;
    var bottomLeft = luPos.left;
    var bottomHeight = thisLU[0].getBoundingClientRect().height;
    var luWidth = thisLU[0].getBoundingClientRect().width;
    var lcWidth = thisLC[0].getBoundingClientRect().width;
    var bottomWidth = luWidth + lcWidth;
    var xAdj = -1;
    var yAdj = -1;
    var widthAdj = 1;

    $("#landUseDiv").css("width", parseFloat(luWidth) - 6 + "px"); //widthAdj+
    $("#landCoverDiv").css("width", parseFloat(lcWidth) - 6 + "px"); //widthAdj+

    $("#lulc").css({
        position: "absolute",
        top: (bottomTop + parseFloat(bottomHeight) + yAdj),
        left: bottomLeft + xAdj,
        width: (parseFloat(bottomWidth) + widthAdj + "px")
    }).show();
});



$("#luLevelSwitchHolder li").click(function () {
    var levelID = $(this).attr("id")
    $("#luLevelSwitchHolder li").removeClass("selected").css({ "font-weight": "normal" })
    if (levelID == "LUprimaryTab") {
        $("#LUprimaryTab").addClass("selected").css({ "font-weight": "bold" })
        $("#landUseListSec").hide();
        $("#landUseList").show();
        $("#LUnotesListSec").hide();
        $("#LUnotesList").show();

    } else if (levelID == "LUsecondaryTab") {
        $("#LUsecondaryTab").addClass("selected").css({ "font-weight": "bold" })
        $("#landUseListSec li").addClass("disabled");
        var thisLIindex = $("#landUseList li").index($("#landUseList .selected"))
        if (thisLIindex != -1) {
            $("#landUseListSec li:lt(" + thisLIindex + ")").removeClass("disabled")
            $("#landUseListSec li:gt(" + thisLIindex + ")").removeClass("disabled")
        }

        $("#landUseList").hide();
        $("#landUseListSec").show();
        $("#LUnotesList").hide();
        $("#LUnotesListSec").show();
    }
})


///////////////////////////////////////////////////////////////////////////////////////////////////

//DROP THE SELECTION LISTS ON CLICK///////////////////////////////////////////////////////////////////
$("#changeProcessSelection").click(function (e) {            //, #landUseSelection, #landCoverSelection"
    var thisList = $(this).next("ul").attr("id")
    $("#" + thisList).show();
    e.stopPropagation();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////

$("#lulc, #changeProcessDiv, #formsDiv").mouseleave(function () {
    closeDropAndRecord();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////


//DISPLAY THE CONDITIONAL NOTES ONCE A CHANGE PROCESS HAS BEEN SELECTED/////////////////

$("#changeProcessList li").click(function () {    //, #landUseList li, #landCoverList li
    $("#CPnotesList li").addClass("disabled")//.removeClass("selected"); //reset display
    $("#CPnotesList input").attr("disabled", true)
    $("#CPnotesList input").prop("checked", false)
    $("#changeProcessList li").removeClass("selected");
    //$(this).addClass("selected");
    var selection = $(this).text();    //get the text from the list selection that was clicked
    $("td.active").text(selection);     //place the text in the active td
    appendCPnotes(selection);
});

$("#landUseList li").click(function () {
    $("#LUnotesList li").addClass("disabled")//.removeClass("selected"); //reset display
    $("#LUnotesList input").attr("disabled", true)
    $("#LUnotesList input").prop("checked", false)
    $("#landUseList li").removeClass("selected");
    //$(this).addClass("selected");
    var selection = $(this).text();    //get the text from the list selection that was clicked
    $("td.landUseInput.active").text(selection);     //place the text in the active td
    appendLUnotes(selection, "primary");
});

$("#landUseListSec li").click(function () {
    $("#LUnotesListSec li").addClass("disabled")//.removeClass("selected"); //reset display
    $("#LUnotesListSec input").attr("disabled", true)
    $("#LUnotesListSec input").prop("checked", false)

    if ($('#landUseListSec li.selected').text() === $(this).text()) {
        $("#landUseListSec li").removeClass("selected"); //remove any selected classes
        appendLUnotes('', "secondary");
    }
    else {
        $("#landUseListSec li").removeClass("selected"); //remove any selected classes
        $(this).addClass("selected"); //add the selected class to the clicked one
        var selection = $(this).text();    //get the text from the list selection that was clicked
        //$("td.landUseInput.active").text(selection);     //place the text in the active td
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% NEED TO HIGHLIGHT THE ONE THAT WAS SELECTED SINCE THERE IS NO LI TO PLACE IT IN
        appendLUnotes(selection, "secondary");
    }
});

$("#landCoverList li").click(function () {
    $("#LCnotesList li").addClass("disabled")//.removeClass("selected"); //reset display
    $("#LCnotesList input").attr("disabled", true)
    $("#LCnotesList input").prop("checked", false)
    $("#landCoverList li").removeClass("selected");
    //$(this).addClass("selected");
    var selection = $(this).text();    //get the text from the list selection that was clicked
    $("td.landCoverInput.active").text(selection);     //place the text in the active td
    appendLCnotes(selection);
});

//highlight selected circles, canvases, and input row when the magnifying glass is clicked
$(document).ready(function () {
    $(document).on("click", "td.highlightIt", function () {
        var thisTr = $(this).closest("tr");
        if (thisTr.hasClass("active")) {
            highlightOff();
            closeDropAndRecord();
        } else {
            highlightOff();
            closeDropAndRecord();
            thisTr.addClass("active");
            if (thisTr.hasClass("segment")) {
                thisOne = $("tr.segment").index(thisTr);
                highlightOn("segment", thisOne + 1);
            } else {
                thisOne = $("tr.vertex").index(thisTr);
                highlightOn("vertex", thisOne);
            }
        }
    });
});



///////////PLOT SIZE CHANGE///////////////////////////////////////////////////////////////////////////////
$("#plotSize").change(function () { //REACT IGNORED FUNCTION
    var plotSizeObject = $("#plotSize"),
        plotSize = parseInt(plotSizeObject.prop("value"));
    if ((plotSize % 2) == 0) { plotSize += 1 }
    plotSize = Math.min(plotSize, 5);
    plotSize = Math.max(plotSize, 1);
    plotSizeObject.prop("value", plotSize);
    //chipInfo.box = Math.sqrt(plotSize);
    chipDisplayProps.box = plotSize;
    $("#plotSizeList").hide();
    switch (chipDisplayProps.box) {
        case 1:
            stopZoom = 40;
            break;
        case 3:
            stopZoom = 32;
            break;
        case 5:
            stopZoom = 27;
            break;
    }
    updateChipInfo();
    drawAllChips("annual");
    var message = { "action": "plotSize", "chipDisplayProps": chipDisplayProps } //prepare zoom message

    if ((chipstripwindow != null) && chipstripwindow.closed == false) {
        chipstripwindow.postMessage(JSON.stringify(message), "*");
    }
    /*                 if ((expandedChipWindow != null) && expandedChipWindow.closed == false){
                        expandedChipWindow.postMessage(JSON.stringify(message),"*");
                    } */
});

///////////CHIP SIZE CHANGE///////////////////////////////////////////////////////////////////////////////
$("#chipSize").change(function () {
    var chipSizeObject = $("#chipSize");
    var chipSize = parseInt(chipSizeObject.prop("value"));
    if ((chipSize % 2) == 0) { chipSize += 1 }
    chipSize = Math.min(chipSize, 255);
    chipSize = Math.max(chipSize, 135);
    chipSizeObject.prop("value", chipSize);

    //redraw the canvases and img chips
    chipDisplayProps.chipSize = chipSize;
    chipDisplayProps.halfChipSize = chipSize / 2;
    chipDisplayProps.offset = (255 - chipSize) / 2; // - 1;  //YANG 2016.08.06
    chipDisplayProps.canvasHeight = chipSize//+17;

    $(".chipHolder").remove();
    appendChips("annual", selectThese);
    updateChipInfo();
    drawAllChips("annual");
    var message = { "action": "chipSize", "chipDisplayProps": chipDisplayProps } //prepare zoom message

    //send the zoom message
    if ((chipstripwindow != null) && chipstripwindow.closed == false) {
        chipstripwindow.postMessage(JSON.stringify(message), "*");
    }
    /*                 if ((expandedChipWindow != null) && expandedChipWindow.closed == false){
                        expandedChipWindow.postMessage(JSON.stringify(message),"*");
                    } */

});

///////////ZOOM SLIDER CHANGE///////////////////////////////////////////////////////////////////////////////
$("#zoomSize").change(function () {
    var zoomSizeObject = $("#zoomSize"),
        zoomSize = parseInt(zoomSizeObject.val());
    if (zoomSize > stopZoom) { zoomSize = stopZoom }
    if (zoomSize < minZoom) { zoomSize = minZoom }
    chipDisplayProps.zoomLevel = zoomSize;

    drawAllChips("annual"); //redraw the annual chips with the new zoom

    var message = { "action": "zoom", "chipDisplayProps": chipDisplayProps }

    //send the zoom array to the external window
    if ((chipstripwindow != null) && chipstripwindow.closed == false) {
        chipstripwindow.postMessage(JSON.stringify(message), "*");
    }
    /*                     if ((expandedChipWindow != null) && expandedChipWindow.closed == false){
                            expandedChipWindow.postMessage(JSON.stringify(zoomInfo),"*");
                        } */
});



$(document).on("mousewheel", ".chipImg", function (e) { //canvas.annual
    if (e.shiftKey) { //
        e.preventDefault(); //make sure that default browser behaviour is prevented

        //if(Math.abs(e.deltaY) <= 15) {return; } //{zoomIn = 1} else {zoomIn = 0}
        //if(Math.abs(e.deltaY) < 1) {return; }
        //if(e.deltaX <= -1 || e.deltaY >= 1){zoomIn = 1} else {zoomIn = 0}
        var delta = e.deltaY;
        // if (window.navigator.platform==='Win32' && window.navigator.product==='Gecko') {
        //     delta = e.deltaX;
        // }

        if (delta > 0) {
            if (chipDisplayProps.zoomLevel < maxZoom & chipDisplayProps.zoomLevel < stopZoom) { chipDisplayProps.zoomLevel++; }
        } else {
            if (chipDisplayProps.zoomLevel > minZoom) { chipDisplayProps.zoomLevel--; }
        }
        $("#zoomSize").val(chipDisplayProps.zoomLevel) //this initiates the img chip redraw for annual through jquery value change event handling

        var message = {
            "action": "zoom",
            "chipDisplayProps": chipDisplayProps
        }

        if ($(this).hasClass("annual")) {
            drawAllChips("annual"); //redraw the chips with the new zoom - since the event listener is attached to the .chipImg class it will try to run this in the intra-annual chip window and throw an undefined variable error because "annual" class chips do not exist there - not a problem the program continues
            if ((chipstripwindow != null) && chipstripwindow.closed == false) {
                chipstripwindow.postMessage(JSON.stringify(message), "*");
            }
            /*                         if((expandedChipWindow != null) && expandedChipWindow.closed == false){
                                        expandedChipWindow.postMessage(JSON.stringify(zoomInfo),"*");
                                    } */
        } else if ($(this).hasClass("intraAnnual")) {
            drawAllChips("intraAnnual"); //redraw the chips with the new zoom
            originURL.postMessage(JSON.stringify(message), "*"); //originURL is defined in the intraAnnual window
        }
    }
});




/////////////////// GET NEXT OR PREVIOUS CHIP /////////////////////
$("body").on("click", ".previousChip, .nextChip", function (e) { //need to use body because the canvases have probably not loaded yet
    let direction = $(this).hasClass('nextChip') ? 'next' : 'previous';
    let thisIndex = direction === 'next' ? $(".nextChip").index(this) : $(".previousChip").index(this);

    //get information for current image chip
    let target = data.Values[thisIndex];
    //get the next available image
    let candidate = getNextImage(allData.Values, target, direction);

    //TODO: no candidate image, need to inform user.
    if (candidate === null) return;

    sessionInfo.isDirty = true;

    //now replace the image chip
    let message = {
        "action": "replace_chip",
        "newSyOffset": 0, //tell the origin where to set the original offset for the chip
        "originChipIndex": thisIndex, //tell the origin which chip to set the original offset for (index)
        "useThisChip": 0, //canvasIDindex,//tell the origin what chip to use instead
        "src": {
            // chipSet432:origData[canvasIDindex].url_432,
            // chipSet743:origData[canvasIDindex].url_743,
            chipSetBGW: getImageChip(candidate.iid)
        },
        "data": candidate
    };

    //capture info to send to the server
    var oldDOY = target.image_julday;
    var newDOY = candidate.image_julday

    //fill in the data for the new image selection
    data.Values[thisIndex] = candidate;
    origData[thisIndex] = _.pick(candidate, ['B1', 'B2', 'B3', 'B4', 'B5', 'B7', 'cfmask', 'iid', 'image_julday', 'image_year']);
    chipInfo.src[thisIndex] = { ...message.src };
    chipInfo.julday[thisIndex] = candidate.image_julday;

    //FIXME: (YANG) this implementation is awkard! Should be replaced.
    //replace the chip
    replaceChip(message); //replace a chip with one selected in the remote window

    //prepare the color for the new selection
    rgbColor = scaledRGB(data, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, n_chips);

    //change the spectral plot
    changePlotPoint();

    //Is the replaced chip a vertex?
    vertexFound = _.find(vertInfo, ['image_year', target.image_year]);
    if (vertexFound !== undefined) {
        vertexFound.image_julday = candidate.image_julday;
    }

    //save the new image selection to the server so it will be the default in the future
    //TODO: NEXT HERE!!!!
    //FIXME: remove the changeDefaultChip logic with GEE implementation.
    // changeDefaultChip(sessionInfo, year=data.Values[remoteMessage.originChipIndex].image_year, newDOY=newDOY, oldDOY=oldDOY) //changeDefaultChip(sessionInfo, year=data.Values[remoteMessage.originChipIndex].Year, newDOY=remoteMessage.julday, oldDOY=data.Values[remoteMessage.originChipIndex].doy)

});

///////////////////OPEN THE REMOTE CHIP STRIP WINDOW AND SEND MESSAGES/////////////////////
//var originURL = null;
$("body").on("click", ".expandChipYear, .data", function (e) { //need to use body because the canvases have probably not loaded yet
    var nodeType = $(this).prop('nodeName');
    if (nodeType == "circle") {
        if (e.shiftKey) {
            var thisImg = $("circle.data").index(this);
        } else {
            return
        }
    } else if (nodeType == "SPAN") {
        var thisImg = $(".expandChipYear").index(this);
    }

    //if (e.ctrlKey) {
    //var thisImg = (parseInt($(this).attr("id").replace( /^\D+/g, ''))); //extract the chip index
    //var thisImg = $(".expandChipYear").index(this) //extract the chip index
    var selectedColor = $("#selectedColor").prop("value");
    var pass_data = {
        "action": "add_chips", //hard assign
        "n_chips": chipInfo.chipsInStrip[thisImg], //"n_chips":"40", //get this from the img metadata
        "src": chipInfo.src[thisImg], //"src":"chips/chips_2012.png", //get this from the id of the .chipholder clicked
        "chipIndex": thisImg,
        "chipDisplayProps": chipDisplayProps,
        "useThisChip": chipInfo.useThisChip[thisImg], //this is only needed if the chips are in strips
        "year": chipInfo.year[thisImg],
        "julday": chipInfo.julday[thisImg],
        "userID": sessionInfo.userID,
        "projectID": sessionInfo.projectID,
        "plotID": sessionInfo.plotID,
        "tsa": sessionInfo.tsa,
        "selectedColor": selectedColor,
        "yearList": yearList,
        "thisChipSet": 'chipSetBGW' //YANG $("#chipSetList .active").attr("id") //this is found one other time - could make it global
    };
    if ((chipstripwindow == null) || (chipstripwindow.closed)) {      //if the window is not loaded then load it and send the message after it is fully loaded
        chipstripwindow = window.open("./chip_qa.php?t=" + authHeader + "&a=" + Math.floor(Math.random() * 800000), "_blank", "width=1080px, height=840px", "toolbar=0", "titlebar=0", "menubar=0", "scrollbars=yes"); //open the remote chip strip window

        var pscall = setTimeout(function () {
            // console.log('sending message');
            chipstripwindow.postMessage(JSON.stringify(pass_data), "*");
        }, 1000);

        // $(chipstripwindow).on("load",function(){
        //     console.log("sending message");
        //     chipstripwindow.postMessage(JSON.stringify(pass_data),"*");
        // });
    } else {                                                         //else if the window is already loaded, just send the message - no need to wait
        chipstripwindow.postMessage(JSON.stringify(pass_data), "*");
    }
    //}
});


///////////////////OPEN THE REMOTE CHIP STRIP WINDOW AND SEND MESSAGES/////////////////////
var doyCalWindow = null;
$("#doyCalLi").click(function () {
    if ((doyCalWindow == null) || (doyCalWindow.closed)) {      //if the window is not loaded then load it and send the message after it is fully loaded
        doyCalWindow = window.open("./doy_calendar.html", "_blank", "width=900px, height=647px, toolbar=0, titlebar=0, menubar=0, scrollbars=yes"); //open the remote chip strip window
    }
});



$(window).on("message onmessage", function (e) {
    try {
        var remoteMessage = JSON.parse(e.originalEvent.data);
    }
    catch (e) {
        return;
    }

    if (remoteMessage.action == "replace_chip") {
        //capture info to send to the server
        var oldDOY = data.Values[remoteMessage.originChipIndex].image_julday
        var newDOY = remoteMessage.data.image_julday

        //fill in the data for the new image selection
        data.Values[remoteMessage.originChipIndex] = remoteMessage.data;
        data = calcDecDate(data);
        chipInfo.src[remoteMessage.originChipIndex] = remoteMessage.src;
        chipInfo.julday[remoteMessage.originChipIndex] = remoteMessage.data.image_julday //.julday; //newDOY

        //replace the chip
        replaceChip(remoteMessage); //replace a chip with one selected in the remote window

        //prepare the color for the new selection
        rgbColor = scaledRGB(data, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, n_chips);

        //change the spectral plot
        changePlotPoint();

        //save the new image selection to the server so it will be the default in the future
        changeDefaultChip(sessionInfo, year = data.Values[remoteMessage.originChipIndex].image_year, newDOY = newDOY, oldDOY = oldDOY) //changeDefaultChip(sessionInfo, year=data.Values[remoteMessage.originChipIndex].Year, newDOY=remoteMessage.julday, oldDOY=data.Values[remoteMessage.originChipIndex].doy)

    } else if (remoteMessage.action == "zoom") {
        chipDisplayProps = remoteMessage.chipDisplayProps
        $("#zoomSize").val(chipDisplayProps.zoomLevel)
        drawAllChips("annual");
    } else if (remoteMessage.action == "mouseEnter") {
        var thisPoint = allDecdate.indexOf(remoteMessage.data.decDate)
        $("circle.allData").eq(thisPoint).attr("r", 9)
        $("circle.allData").eq(thisPoint).css({ "stroke": "#19B5FE", "stroke-width": 5 })      //#ED2939
    } else if (remoteMessage.action == "mouseLeave") {
        var thisPoint = allDecdate.indexOf(remoteMessage.data.decDate)
        $("circle.allData").eq(thisPoint).attr("r", 3)
        $("circle.allData").eq(thisPoint).css({ "stroke-width": 0 })
    }

    //$("#message").append(e.originalEvent.data); //****need to use 'originalEvent' instead of 'event' since im using jquery to bind the event. the jquery event object is different from the javascript event object - originalEvent is a copied version of the original javascript event object
});


