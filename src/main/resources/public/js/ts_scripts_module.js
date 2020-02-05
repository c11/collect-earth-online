

/////INITIAL PAGE SETUP////////////////////////////////////////////////////////////////////
export function configTimeSyncDash() {
    if (tsDashMessage === undefined) {
        return;
    }
    else {
        //hide plot list
        $('#plotSelectionDiv').hide();
        $('#topSection').hide();

        let ceoPlot = JSON.parse(tsDashMessage);
        ceoPlot.currentLocation = JSON.parse(ceoPlot.currentLocation);
        sessionInfo = { ...sessionInfo, ...ceoPlot };

        console.log('[configTimeSyncDash]', ceoPlot, sessionInfo);
        getData(sessionInfo, specIndex, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, ylabel);
    }
}

export function setChipGalleryLength() {
    var max = $(document).height() - $('#chip-gallery').offset().top - 5;
    $('#chip-gallery').css('height', max);
}

//convert data value to d3 color
export function scaleByStretch(data, specIndex, stretch, n_stdev) {
    var v = ((data[specIndex] - stretch[specIndex].min) / (stretch[specIndex].max - stretch[specIndex].min)) * 255;
    v = v < 0 ? 0 : v;
    v = v > 255 ? 255 : v;
    return v;
}

export function dataRGB(data, RspecIndex, GspecIndex, BspecIndex, stretch, n_stdev) {
    var r = scaleByStretch(data, RspecIndex, stretch, n_stdev);
    var g = scaleByStretch(data, GspecIndex, stretch, n_stdev);
    var b = scaleByStretch(data, BspecIndex, stretch, n_stdev);
    return d3.rgb(r, g, b);
}



/************************************************************************************************/

/**
 * FIXME: disect this funtion into fuction for each url.
 * @param {*} sessionInfo
 * @param {*} year
 */
export function getUrls(sessionInfo, year) {
    var tsServer = 'https://localhost:8080';
    var geeServer = 'https://localhost:8888';
    var osuServer = 'https://timesync.forestry.oregonstate.edu/_ts3';

    var urls = {
        // "annualSpec":   `${geeServer}/ts/spectrals/year/${year}/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}`,
        "allSpec": `${geeServer}/ts/spectrals/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}`,
        "selectedSpec": `${geeServer}/ts/spectrals/day/${sessionInfo.tsTargetDay}/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}`,
        "projectList": `${tsServer}/get-all-projects`,
        "plotList": `${tsServer}/get-project-plots/${sessionInfo.projectID}/${sessionInfo.numPlots}`,
        "vertInfoSave": `${tsServer}/timesync/vertex/save`,
        "vertices": `${tsServer}/timesync/vertex/${sessionInfo.userID}/${sessionInfo.projectID}/${sessionInfo.plotID}/${sessionInfo.packet}`,

        "plotInterp": osuServer + '/index.php/vertex/' + sessionInfo.userID + '/' + sessionInfo.projectID + '/' + sessionInfo.tsa + '/' + sessionInfo.plotID,
        "plotComment": osuServer + '/comment/' + sessionInfo.userID + '/' + sessionInfo.projectID + '/' + sessionInfo.tsa + '/' + sessionInfo.plotID,
        "respDesign": osuServer + '/config/response/' + sessionInfo.projectID,
        "chipOverRide": osuServer + '/image/override',
        // "vertInfoSave": osuServer + '/vertex/save',
        "commentSave": osuServer + '/comment/save'
    }
    return urls;
}

/**
 * process annual spectral data with or without interpretation
 * NOTE: this is not a pure function.
 *
 * called by getData()
 *
 * @param {*} tsdata
 */
export function processAnnualSpectrals(tsdata) {
    //reset global variables
    let keepProps = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7', 'cfmask', 'iid', 'image_julday', 'image_year'];
    origData = tsdata.map(v => _.pick(v, keepProps));
    n_chips = origData.length;
    lastIndex = n_chips - 1;
    data = { "Values": [] };
    // allData = {"Values": []};
    chipInfo = {
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

    for (let i = 0; i < n_chips; i++) {
        // data.Values.push(parseSpectralData(origData, i));
        data.Values.push({ ...origData[i] });
        yearList.push(origData[i].image_year);
    }

    var maxXdomain = d3.max(yearList) + 1;
    var minXdomain = d3.min(yearList) - 1;
    defaultDomain.year.max = maxXdomain;
    currentDomain.year.max = maxXdomain;
    defaultDomain.year.min = minXdomain;
    currentDomain.year.min = minXdomain;

    data = calcIndices(data); //reset global - calculate the spectral indices
    rgbColor = scaledRGB(data, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, n_chips); //reset global - calculate the rbg color
    data = calcDecDate(data); //could wrap this into data appending push function
    /*	YANG: 2016.08.06: warren want to change it to global stretch
    Yang: 2016.08.31: warren want to change it back to always local stretch */
    if (!currentDomain.hasCustomizedXY) {
        updateStretch();
    }
}

/**
 * parse spectral data retrieved from database
 *
 *
 * @param tsdata
 */
export function processAnnualSpectralsFromDB(tsdata) {
    processAnnualSpectrals(tsdata.map(v => JSON.parse(v.reflectance.value)));
}

/**
 * parse all spectral data
 *
 * //FIXME: improve efficienc in to avoid unnecessary loop.
 * @param {*} dat
 */
export function processAllSpectrals(dat) {
    allData = { "Values": [] };
    dat.forEach((v, i) => {
        // allData.Values.push(parseSpectralData(dat, i));
        allData.Values.push({ ...dat[i] });
    });
    //make sure that all of the urls have been added to "allData" before getting the plot interps and plotting the points
    // - need "selectThese" to be determined first - any other way and asynchronous loading will mess it up
    allData = calcIndices(allData); //reset global - calculate the spectral indices
    allDataRGBcolor = scaledRGB(allData, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2, allData.Values.length); //reset global - calculate the rbg color
    allData = calcDecDate(allData); //could wrap this into data appending push function
    allDecdate = [];

    allData.Values.forEach(function (v) {
        allDecdate.push(v.decDate);
    });
    plotInt(true);
    $("#btnPoints").attr('disabled', false); //reenable all plots button
}

/**
 * extract previous interpretation
 * NOTE: this is not a pure function.
 *
 * @param {*} tsdata
 */
export function extractInterpretation(tsdata, comment, isExample) {
    vertInfo = [];

    comment = comment; //tsdata.comment===undefined ? "" : tsdata.comment;
    isExample = isExample; //tsdata.isExample;

    tsdata.forEach((v, i) => {
        if (v.is_vertex) {
            //TODO: is shallow copying ok here.
            v.index = i;
            vertInfo.push(_.pick(v, ['image_year', 'image_julday', 'index', 'landuse', 'landcover', 'change_process', 'is_vertex']));
            // vertInfo.push(_.pick(v, ['image_year', 'image_julday', 'index', 'landUse', 'landCover', 'changeProcess', 'isVertex']));
        }
    })

    //check to see if vert info has been filled in for this plot
    if (vertInfo.length != 0) {
        for (var i = 0; i < vertInfo.length; i++) {
            selectThese.push(vertInfo[i].index); //reset global
        }
    } else {
        selectThese = [0, tsdata.length - 1];
        for (var i = 0; i < selectThese.length; i++) {
            vertInfo.push({
                image_year: origData[selectThese[i]].image_year, image_julday: origData[selectThese[i]].image_julday, index: selectThese[i], iid: origData[selectThese[i]].iid, is_vertex: true, landuse: {
                    primary: { landUse: "", notes: { wetland: false, mining: false, rowCrop: false, orchardTreeFarm: false, vineyardsOtherWoody: false } },
                    secondary: { landUse: "", notes: { wetland: false, mining: false, rowCrop: false, orchardTreeFarm: false, vineyardsOtherWoody: false } }
                }, landcover: { landCover: "", other: { trees: false, shrubs: false, grassForbHerb: false, impervious: false, naturalBarren: false, snowIce: false, water: false } }, change_process: { changeProcess: "", notes: { natural: false, prescribed: false, sitePrepFire: false, airphotoOnly: false, clearcut: false, thinning: false, flooding: false, reserviorLakeFlux: false, wetlandDrainage: false } }
            })
        }
    }
}

export function toggleSpinner(show) {
    console.log('[toggleSpinner]', show)
    if (show) {
        $('#spinner').removeClass('stop');
        $('#spinner').show();
    }
    else {
        $('#spinner').addClass('stop');
        $('#spinner').hide();
    }
}

export function updateUI() {
    //update UI
    fillInForm() //fill out the form inputs
    $("#commentInput").val(comment);
    $("#isExampleCheckbox").prop("checked", isExample == 1);
    plotInt(false); //draw the points
    makeChipInfo("json", origData)
    appendSrcImg(); //append the src imgs
    appendChips("annual", selectThese); //append the chip div/canvas/img set
    //once the imgs have loaded make the chip info and draw the img to the canvas and display the time-lapse feature
    $("#img-gallery").imagesLoaded(function () {
        //makeChipInfo("json", origData);
        //chip info array gets set in "appendChips"
        //gets filled out here because we have to wait
        //until the imgs have loaded to get their height
        //(used when chip strip is the src - not needed when chips are singles)
        drawAllChips("annual");	//draw the imgs to the canvas
        toggleSpinner(false);
    });
}

/**
 * Previous implementation in a hierachical approach:
 *  load annual spectral data -> load all spectral data -> load interpretation -> load comments
 * Each of the steps above requires successful execution of the previous step.
 *
 * In the new implementation, it is restructed as:
 *  - load interpretation and selected annual image selection
 *  - if there is no interpretation saved
 *      + load spectral data from GEE
 *      + populate image chip
 *    else
 *      + use stored data to build trajectory
 *      + populate image chip with previously selected image id
 *      + update interface with existing interpretation
 *  - load all spectral data
 *
 * @param {*} sessionInfo
 * @param {*} specIndex
 * @param {*} activeRedSpecIndex
 * @param {*} activeGreenSpecIndex
 * @param {*} activeBlueSpecIndex
 * @param {*} ylabel
 */
export function getData(sessionInfo, specIndex, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, ylabel) {
    let urls = getUrls(sessionInfo);

    //load interpretation
    fetch(urls.vertices)
        .then(res => res.json())
        .then(tsdata => {
            console.log(tsdata);

            //TODO: is it possible that there is no timeSync property in the data?
            if (tsdata.length==0) {
                throw("No interpretation found, fetching from GEE");
            }

            //parse nested json object
            tsdata.forEach(v => {
                if (v.is_vertex) {
                    v.landuse = JSON.parse(v.landuse.value);
                    v.landcover = JSON.parse(v.landcover.value);
                    v.change_process = JSON.parse(v.change_process.value);
                }
            });

            processAnnualSpectralsFromDB(tsdata);
            extractInterpretation(tsdata, tsdata.comment === undefined ? "" : tsdata.comment, tsdata.isExample===undefined ? false : tsdata.isExample);
            updateUI();
            //get all spectral data
            //update ui
        })
        .catch(error => {
            //no interpretation has been saved
            //get data from GEE
            fetch(urls.selectedSpec)
                .then(res => res.json())
                .then(tsdata => {
                    processAnnualSpectrals(tsdata.timeseries);
                    extractInterpretation(tsdata.timeseries, "", 0);
                    updateUI();
                })
                .catch(err => {
                    console.log(err);
                    alert("Error retrieving plot spectral data.");
                });
        });

    //YANG: Oct. 2019, disable all spectral data
    //retrieve all spectral data
    if (false) {
        $("#btnPoints").attr('disabled', true); //disable all points button
        fetch(urls.allSpec)
            .then(res => res.json())
            .then(dat => processAllSpectrals(dat.timeseries));
    }
}

/**
 * Populate the project list when #projectList element finishes loading
 *
 * @param {*} sessionInfo
 */
export function addProjectData(sessionInfo) {
    if (tsDashMessage !== undefined) {
        //no need to load project list in dash mode
        return;
    }
    $.getJSON(getUrls(sessionInfo).projectList).done(function (object) {
        console.log(object);
        packetInfo = {};
        for (var i = 0; i < object.length; i++) {
            /*TSCEO
                1. add ts_plot_size, ts_target_day, ts_start_year, ts_end_year
            */
            var tsConfig = {
                'tsPlotSize': 1,
                'tsTargetDay': 215,
                'tsStartYear': 1985,
                'tsEndYear': 2017,
                'numPlots': object[i].numPlots
            }

            var prjItem = `<li value="${object[i].id}" 
                                data-size="1" 
                                data-ts-target-day="${tsConfig.tsTargetDay}" 
                                data-ts-start-year="${tsConfig.tsStartYear}"
                                data-ts-end-year="${tsConfig.tsEndYear}"
                                data-num-plots="${tsConfig.numPlots}">${object[i].name}</li>`;

            $("#projectList").append(prjItem);
            packetInfo[object[i].id] = object[i].packet_ids === undefined ? null : object[i].packet_ids;
        }
    });
}

/*********************** End Setion 1. Retrieving TimeSync Interpretation ***********************/
/************************************************************************************************/



//function to check if plots are done and add a class to them that changes their background color if they are
export function checkPlot(sessionInfo, vertInfo) {
    var nVerts = vertInfo.length
    if (nVerts == 0 | sessionInfo.plotID == "") { return } //if it has never been clicked on before then leave, else check if it is a complete interpretation
    var total = 0;
    vertInfo.forEach(function (v) {
        total = total + (v.change_process.changeProcess != "" ? 1 : 0);
        total = total + (v.landuse.primary.landUse != "" ? 1 : 0);
        total = total + (v.landcover.landCover != "" ? 1 : 0);
    });

    //find the li that we're working with if is hasn't be supplied (after clicking to a new )
    var thisPlotLi = $("#plotList li.selected");

    //if(typeof thisPlotLi === "undefined"){
    //	$("#plotList li").each(function(){
    //		if($(this).text() == sessionInfo.plotID){
    //			thisPlotLi = $(this)
    //			return
    //		}
    //	});
    //}
    var done = false;
    if (total + 1 == nVerts * 3) {
        //thisPlotLi.addClass("done")
        thisPlotLi.find("span").removeClass().addClass("glyphicon glyphicon-ok")
        done = true;
    } else {
        //thisPlotLi.removeClass("done")
        thisPlotLi.find("span").removeClass().addClass("glyphicon glyphicon-none")
    }
    return done;
}


//function to clear all plot elements in preparation for a new plot display - gets called when a new plot is selected or a new project is selected
export function clearThePlotDisplay(sessionInfo, vertInfo) {
    //console.log(vertInfo);
    saveVertInfo(sessionInfo, vertInfo); //save any info from the current plot selection
    $("#chip-gallery, #img-gallery, #svg").empty(); //reset
    $(".segment, .vertex").remove(); //empty the current vertex and segment forms
    $("#commentInput").val("")
    $("#isExampleCheckbox").prop("checked", false)
    if ((chipstripwindow != null) && chipstripwindow.closed == false) {
        var message = { "action": "clearChips" }
        chipstripwindow.postMessage(JSON.stringify(message), "*");
    }
    //tlctx.clearRect(0, 0, 235, 235); //reset this is for the time lapse video - not used
    timeLapseIndex = 0; //reset
    selectedCircles = []; //reset
    lineData = []; //reset
    selectThese = []; //reset
    vertInfo = [];
}

//function to load and append plots when a project is clicked on
export function appendPlots(sessionInfo) {
    $("#projBtn").empty().append(sessionInfo.projectCode + '<span class="caret projBtn"></span>');
    $("#plotList").empty();

    $.getJSON(getUrls(sessionInfo).plotList).done(function (object) {
        console.log(object);
        //TSCEO keep a copy of the plots list
        sessionInfo.plots = object;

        preCache();

        for (var i = 0; i < object.length; i++) {
            //TSCEO: temporaly force to have value for is_complete and is_example
            object[i].is_complete = 0;
            object[i].is_example = 0;

            let center = object[i].center;

            if (object[i].is_complete == 1) {
                //$("#plotList").append('<li class="done">'+object[i].plotid+'</li>');
                if (object[i].is_example != 1) {
                    let pLi = `<li style="display:none" data-center='${center}'>
                                    <small>
                                        <span class="glyphicon glyphicon-ok" style="margin-right:3px"></span>
                                    </small>${object[i].id}</li>`;
                    $("#plotList").append(pLi);
                } else {
                    let pLi = `<li style="display:none" class="example" data-center='${center}'>
                    <small>
                        <span class="glyphicon glyphicon-ok" style="margin-right:3px"></span>
                    </small>${object[i].id}</li>`;
                    $("#plotList").append(pLi);
                }
            } else {
                //$("#plotList").append('<li>'+object[i].plotid+'</li>');
                if (object[i].is_example != 1) {
                    let pLi = `<li style="display:none" data-center='${center}'>
                                    <small>
                                        <span class="glyphicon glyphicon-none" style="margin-right:3px"></span>
                                    </small>${object[i].id}</li>`;
                    $("#plotList").append(pLi);
                } else {
                    let pLi = `<li style="display:none" class="example" data-center='${center}'>
                                    <small>
                                        <span class="glyphicon glyphicon-none" style="margin-right:3px"></span>
                                    </small>${object[i].id}</li>`;
                    $("#plotList").append(pLi);
                }
            }
        }

        //show the plot in the list - depends on the status of the exmaplePlots checkbox
        if ($("#examplePlots").prop("checked")) {
            $(".example").show()
        } else {
            $("#plotList li").show()
        }

        //checkAllPlots(sessionInfo);
        //append the tooltips
        if ($("#toolTipsCheck").hasClass("glyphicon-ok")) {
            $("#plotList li").prop("title", "This is a plot selector. Clicking on it will load the plot's spectral time series data and the corresponding image chips. Each time you select a new plot the display properties of the previous plot will be saved for the session. Segmentation and vertex interpretations will also be saved.")
            $("#plotList li").find("span").prop("title", "This is a plot complete indicator. A checkmark will appear when a plot's interpretation is complete.")
        }
    })
}

//handler for turning example plots on and off in the plot list
export function showHideExamples() {
    clearThePlotDisplay(sessionInfo, vertInfo); //remove all plot elements in prep for new plot
    $("#plotList li").removeClass("selected");
    if ($("#examplePlots").prop("checked") == true) {
        $("#plotList li").not(".example").hide();
    } else {
        $("#plotList li").show();
    }
}

export function saveSetting(projectID, plotID, domain) {
    if (domain.dirty == 1) { localStorage.setItem(projectID + '.' + plotID, JSON.stringify(domain)); }
}

export function getSetting(projectID, plotID, defaultDomain) {
    var currentDomain = JSON.parse(localStorage.getItem(projectID + '.' + plotID));
    if (currentDomain === null) {
        currentDomain = $.extend(true, {}, defaultDomain);
        /* YANG 20160806 currentDomain["hasCustomizedXY"] = 0; */
    }
    return currentDomain
}

////////////////////////////////////////FROM YANG///////////////////////////////////////////////////////////////////////
//Parse Land Use, Land Cover, and Change Process notes * @param note* @param category* @returns {*}

export function parseNote(note, category) {
    var landuseNote = { wetland: false, mining: false, rowCrop: false, orchardTreeFarm: false, vineyardsOtherWoody: false };
    var landcoverNote = { trees: false, shrubs: false, grassForbHerb: false, impervious: false, naturalBarren: false, snowIce: false, water: false };
    var processNote = { natural: false, prescribed: false, sitePrepFire: false, airphotoOnly: false, clearcut: false, thinning: false, flooding: false, reserviorLakeFlux: false, wetlandDrainage: false };

    var result = landuseNote;
    if (category == 'landcover') {
        result = landcoverNote;
    }
    else if (category == 'process') {
        result = processNote;
    }
    if (note.trim() == '') {
        return result;
    }

    var items = note.split("|");
    items.forEach(function (item) {
        result[item] = true;
    })
    return result;
}

//define function to update the zoom behaviors
export function zoomUpdate() {
    xyzoom = d3.behavior.zoom()
        .scaleExtent([1, 1])
        .y(yscale)
        .x(xscale)
        .on("zoom", zoomDraw);

    xzoom = d3.behavior.zoom()
        .x(xscale)
        .on("zoom", zoomDraw);
    yzoom = d3.behavior.zoom()
        .y(yscale)
        .on("zoom", zoomDraw);

    xybox.call(xyzoom).on("dblclick.zoom", null); //svg.
    xbox.call(xzoom).on("dblclick.zoom", null); //svg.
    ybox.call(yzoom).on("dblclick.zoom", null);	//svg.

    currentDomain[specIndex].min = xscale.domain()[0];
    currentDomain[specIndex].max = xscale.domain()[1];
    currentDomain[specIndex].min = yscale.domain()[0];
    currentDomain[specIndex].max = yscale.domain()[1];
    currentDomain.year.min = xscale.domain()[0];
    currentDomain.year.max = xscale.domain()[1];
    currentDomain.dirty = 1;
    /* YANG 2016.08.06
    Yang: 2016.08.31: warren want to change it back to always local stretch */
    currentDomain.hasCustomizedXY = 1;
    /**/
}

//define function to redraw the points and update the zoom behavior is invoked
export function zoomDraw() {

    svg.select('.y.axis').call(yaxis);
    svg.selectAll("circle")
        .attr("cx", function (d) { return xscale(d.decDate); })
        .attr("cy", function (d) { return yscale(d[specIndex]); });
    //svg.selectAll("circle.data")
    //	.attr("cx", function(d){return xscale(d.decDate);})
    //	.attr("cy", function(d){return yscale(d[specIndex]);});
    //svg.selectAll("circle.allData")
    //	.attr("cx", function(d){return xscale(d.decDate);})
    //	.attr("cy", function(d){return yscale(d[specIndex]);});

    //draw the x axis - draw this afte the points so that their ticks marks don't draw over it
    svg.select('.x.axis').call(xaxis);


    svg.selectAll("#plotLine").attr("d", lineFunction(lineData));
    svg.selectAll(".vline")
        .attr("x1", function (d) { return xscale(d) }) //d.Year
        .attr("x2", function (d) { return xscale(d) }) //d.Year
    zoomUpdate();
};

//define function to initialize the spectral trajectory
// var plotDrawn = 0; //global variable needed for the window resize
export function plotInt(allDataOnly) {
    plotDrawn = 1
    //get the range of the x values
    var showPoints = $("#allPointsDisplayThumb").hasClass("glyphicon-thumbs-down");
    if (showPoints == false) {
        var pointDisplay = "visible";
        var opacity = 0.5;
    } else {
        var pointDisplay = "hidden"
        var opacity = 1;
    }

    var w = $("#plot").width()

    //make an array of ticks and lables
    //var year //i think this is an abandoned line
    var xLabels = [];
    //for(var i=0;i<=yearmax-yearmin;i+=2){xLabels.push(yearmin+i+0.49)}
    for (var i = 0; i < defaultDomain.year.max - defaultDomain.year.min; i += 2) { xLabels.push(defaultDomain.year.min + i + 0.49) }

    //make an array of vertcal line x positions
    var xGrid = [];
    for (var i = defaultDomain.year.min; i <= defaultDomain.year.max; i++) { xGrid.push(i) }
    //for(var i=0;i<=currentDomain.year.max-currentDomain.year.min;i++){xGrid.push(currentDomain.year.min+i)}

    //define the width of the svg plot area
    //var w = 740,//
    var h = 250;

    //define the plot margins
    var pt = 10, //plot top
        pr = 15, //plot right
        pl = 65, //plot left
        pb = 28; //plot bottom 37

    //define the x scale
    xscale = d3.scale.linear() //NEEDS TO BE A GLOBAL VARIABLE - IS USED HERE AND IN THE UPDATE FUNCTION
        .domain([currentDomain.year.min, currentDomain.year.max])
        .range([pl, w - pr]);

    //define the y scale
    yscale = d3.scale.linear() //NEEDS TO BE A GLOBAL VARIABLE - IS USED HERE AND IN THE UPDATE FUNCTION
        .domain([currentDomain[specIndex].min, currentDomain[specIndex].max]) //domain is a global variable defined in an outside .js file - specIndex is also global variable
        .range([h - pb, pt]);

    //define the x axis
    xaxis = d3.svg.axis()
        .scale(xscale)
        .orient("bottom")
        .tickValues(xLabels)
        .tickFormat(d3.format(".4r"))
        .outerTickSize(0);
    //.tickFormat(d3.format("d"));

    //define the x axis
    yaxis = d3.svg.axis() //NEEDS TO BE A GLOBAL VARIABLE - IS USED HERE AND IN THE UPDATE FUNCTION
        .tickSize((-w + pr + pl), 0)
        .scale(yscale)
        .orient("left");

    //define the zoom behavior
    xyzoom = d3.behavior.zoom()
        .scaleExtent([1, 1])
        .y(yscale)
        .x(xscale)
        .on("zoom", zoomDraw); //zoomed

    xzoom = d3.behavior.zoom()
        .x(xscale)
        .on("zoom", zoomDraw);
    yzoom = d3.behavior.zoom()
        .y(yscale)
        .on("zoom", zoomDraw);

    //retrieve the svg reference
    svg = d3.select("#svg");

    //make the default line data
    //lineData = [ //needs to be local variable
    //	{"x":yearmin ,"y":data.Values[0][specIndex]},
    //	{"x":yearmax ,"y":data.Values[len-1][specIndex]}
    //];

    //make the line function to convert the xy object to svg path syntax
    lineFunction = d3.svg.line() //global because it gets used when selecting new points
        .x(function (d) { return xscale(d.x); })
        .y(function (d) { return yscale(d.y); })
        .interpolate("linear");

    //append an xy box
    xybox = svg.append("rect")
        .attr("class", "zoom xy box")
        .attr("id", "xybox")
        .attr("x", pl) //70
        .attr("y", pt) //10
        .attr("width", w - pl - pr)
        .attr("height", h - pt - pb)
        .style("visibility", "hidden")
        .attr("pointer-events", "all")
        .call(xyzoom)
        .on("dblclick.zoom", null)

    var vline = svg.selectAll(".vline")
        .data(xGrid) //.data(data.Values)
        .enter()
        .append("line")
        .attr("x1", function (d) { return xscale(d) }) //d.Year
        .attr("x2", function (d) { return xscale(d) }) //d.Year
        .attr("y1", function (d) { return -20000 })
        .attr("y2", function (d) { return 20000 })
        .attr("class", "vline")

    //append all the points
    allCircles = svg.selectAll(".allData")
        .data(allData.Values)
        .enter()
        .append("circle")
        .filter(function (d) {
            if ($('#showAnomaly').prop('checked')) {
                return d.cfmask < 3; //3: shadow, 4: cloud
            }
            else {
                return true;
            }
        })
        //.style("fill-opacity",0.25) //0.25
        .attr("visibility", pointDisplay) //"hidden"
        .style("fill", function (d) { return dataRGB(d, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2); })
        // .style("fill",function(d,i){return allDataRGBcolor[i];})
        .attr("cx", function (d) { return xscale(d.decDate); }) //d.decDate
        .attr("cy", function (d) { return yscale(d[specIndex]); })
        .attr("r", 3)
        .attr("class", "allData");

    if (allDataOnly) {
        return;
    }

    //draw the y axis
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + pl + ",0)")
        .call(yaxis);

    //append the representative points
    var rad = w * 0.0085;
    circles = svg.selectAll(".data")
        .data(data.Values)
        .enter()
        .append("circle")
        .style("fill-opacity", opacity)
        .style("fill", function (d, i) { return rgbColor[i]; })
        .attr("cx", function (d) { return xscale(d.decDate); })
        .attr("cy", function (d) { return yscale(d[specIndex]); })
        .attr("r", rad)
        .attr("class", "data unselected");

    //draw the x axis - draw this afte the points so that their ticks marks don't draw over it
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (h - pb) + ")")
        .call(xaxis)

    //add label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", (h - pb) / -2)
        .attr("y", 15)
        .style("text-anchor", "middle")
        .text(ylabel) //"TC Wetness"
        .attr("id", "specPlotIndex");

    //define clip path so that circles don't go outside the axes
    svg.append("defs")
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("x", 70)
        .attr("y", 10)
        .attr("width", w - pr - pl)
        .attr("height", h - pb - pt);

    //append an x box
    xbox = svg.append("rect")
        .attr("class", "zoom x box")
        .attr("id", "xbox")
        .attr("x", pl)
        .attr("y", h - pb)
        .attr("width", w - pl - pr)
        .attr("height", pb)
        .style("visibility", "hidden")
        .attr("pointer-events", "all")
        .call(xzoom)
        .on("dblclick.zoom", null)

    //append a y box
    ybox = svg.append("rect")
        .attr("class", "zoom y box")
        .attr("id", "ybox")
        .attr("y", pt)
        .attr("width", pl)
        .attr("height", h - pt - pb)
        .style("visibility", "hidden")
        .attr("pointer-events", "all")
        .call(yzoom)
        .on("dblclick.zoom", null)

    //append title for tooltips
    if ($("#toolTipsCheck").hasClass("glyphicon glyphicon-ok")) {
        d3.selectAll("circle.data").append("svg:title").text("This is an annual spectral time series point. It is the spectral return for the pixel at the plot center for the day selected to represent this year in the annual time series. Hovering over it will activate a green highlight outline that corresponds to the green highlight outline of the matched image chip in the chip gallery. The highlighting feature makes it easy to know which point belongs to which image chip. Doubling clicking the point will toggle it as a vertex. The first and last points cannot be toggled.")
        d3.selectAll("circle.allData").append("svg:title").text("This is an intra-annual spectral time series point. It is the spectral return for the pixel at the plot center for one of all days selected to represent a year in the annual time series. It will be highlighted blue when hovering over an image chip in the intra-annual chip window as a correspondence marking feature. These points are helpful for determining the intra-annual variability of plots and can help make a more informed decision about whether to place a vertex or change the default annual point/image chip.")
        d3.selectAll("#xbox").append("svg:title").text("This is the x-axis. Click and hold to drag the scale to the left or right and mouse wheel to zoom in and out.")
        d3.selectAll("#ybox").append("svg:title").text("This is the y-axis. Click and hold to drag the scale up or down and mouse wheel to zoom in and out.")
    } else {
        d3.selectAll("circle.data").append("svg:title").text("")
        d3.selectAll("circle.allData").append("svg:title").text("")
        d3.selectAll("#xbox").append("svg:title").text("")
        d3.selectAll("#ybox").append("svg:title").text("")
    }

    //default the first and last circles to class "selected"
    var dataCircles = $("circle.data");
    for (var i = 0; i < selectThese.length; i++) {
        dataCircles.eq(selectThese[i]).attr("class", "data selected");
        lineData.push({ "x": data.Values[selectThese[i]].decDate, "y": data.Values[selectThese[i]][specIndex] }) //.Year
    }

    //add the default line
    var lineGraph = svg.append("path") //local because it will get overwritten
        .attr("d", lineFunction(lineData))
        //.style("stroke", $("#selectedColor").prop("value"))
        .attr("id", "plotLine");

    //Define the svg text element for the DOY tooltip
    var doyTxt = svg.append("text")
        .attr("id", "doyTxt")
        .attr("text-anchor", "middle")
        .style("opacity", 0);

    //show doy on hover
    allCircles.on("mouseover", function (d) {
        doyTxt.text(d.image_julday)
            .attr("x", xscale(d.decDate))
            .attr("y", yscale(d[specIndex]) - 10)
            .style("opacity", 1);
    })
        .on("mouseout", function (d) {
            doyTxt.style("opacity", 0);
        });

    //show doy on hover
    circles.on("mouseover", function (d) {
        doyTxt.text(d.image_julday)
            .attr("x", xscale(d.decDate))
            .attr("y", yscale(d[specIndex]) - 20)
            .style("opacity", 1);
    })
        .on("mouseout", function (d) {
            doyTxt.style("opacity", 0);
        });

    //add the path to the circles to activate the clipping
    circles.attr("clip-path", "url(#clip)");
    allCircles.attr("clip-path", "url(#clip)");
    lineGraph.attr("clip-path", "url(#clip)");
    vline.attr("clip-path", "url(#clip)");

    //fill in the global selectedCircles variable for the first time
    var selectedCirclesTemp = $("circle.data.selected");
    selectedCircles = [];
    for (var i = 0; i < selectedCirclesTemp.length; i++) {
        selectedCircles.push(dataCircles.index(selectedCirclesTemp[i]));
    }
    setSelectedColor(); //set the selected color of the line and the circles
    //updateSegmentForm();

    //if the line and vertices are set to "no show" then make them transparent
    if ($("#lineDisplayThumb").attr("class") == "glyphicon glyphicon-thumbs-down") {
        $("circle.selected").css("stroke-opacity", "0");
        $("circle.highlight").css("stroke-opacity", "0");
        $("#plotLine").css("stroke-opacity", "0");
    }


}
/* YANG 2016.
Yang: 2016.08.31: warren want to change it back to always local stretch */
export function updateStretch() {
    var specs = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7', 'TCB', 'TCG', 'TCW', 'TCA', 'NDVI', 'NBR'];
    specs.map(function (specIndex) {
        var localMin = d3.min(data.Values, function (d) { return d[specIndex]; }); //get the local min
        var localMax = d3.max(data.Values, function (d) { return d[specIndex]; }); //get the local max
        var buffer = (localMax - localMin) * 0.1; //calulate a buffer to add to the min and max so that the point is not cut off
        localMin -= buffer; //adjust the min by the buffer
        localMax += buffer; //adjust the max by the buffer

        currentDomain[specIndex].min = localMin; //set the currentDomain min for the specIndex
        currentDomain[specIndex].max = localMax; //set the currentDomain max for the specIndex
    });
}
/**/

//define function to update the D3 scatterplot when new selection are made
export function plotUpdate(data, specIndex, rgbColor, currentDomain) {
    //reset the y domain based on new spectral index
    yscale.domain([currentDomain[specIndex].min, currentDomain[specIndex].max]); //yscale was defined in the plotInt function

    //update the zoom since the y axis domain has changed
    zoomUpdate()

    //update the circles with new data
    svg.selectAll("circle.allData") //svg was defined in the plotInt function
        // .data(allData.Values)
        .transition()
        .duration(500)
        //.attr("cx", function(d){return xscale(d.decDate);})
        .attr("cy", function (d) { return yscale(d[specIndex]); })
        .style("fill", function (d) { return dataRGB(d, activeRedSpecIndex, activeGreenSpecIndex, activeBlueSpecIndex, stretch, 2); })
    // .style("fill",function(d,i){return allDataRGBcolor[i]})

    svg.selectAll("circle.data") //svg was defined in the plotInt function
        .data(data.Values)
        .transition()
        .duration(500)
        //.attr("cx", function(d){return xscale(d.decDate);})
        .attr("cy", function (d) { return yscale(d[specIndex]); })
        .style("fill", function (d, i) { return rgbColor[i] })

    //make a new line
    lineData = [];
    for (var i = 0; i < selectedCircles.length; i++) {
        var thisone = selectedCircles[i];
        lineData[i] = ({ "x": data.Values[thisone].decDate, "y": data.Values[thisone][specIndex] }); //.push
    }

    //update the line
    svg.selectAll("#plotLine") //local because it will get overwritten
        .transition()
        .duration(500)
        .attr("d", lineFunction(lineData));

    //update y axis
    svg.select(".y.axis") //svg was defined in the plotInt function
        .transition()
        .duration(500)
        .call(yaxis);
}

export function updatePlotRGB() {
    svg.selectAll("circle.data") //svg was defined in the plotInt function
        .transition()
        .duration(500)
        .style("fill", function (d, i) { return rgbColor[i] })

    svg.selectAll("circle.allData") //svg was defined in the plotInt function
        .transition()
        .duration(500)
        .style("fill", function (d, i) { return allDataRGBcolor[i] })
}

export function changePlotPoint() {
    svg.selectAll("circle.data") //svg was defined in the plotInt function
        .data(data.Values) //data value changed so need to rebind the data
        .transition()
        .duration(500)
        .attr("cx", function (d) { return xscale(d.decDate); })
        .attr("cy", function (d) { return yscale(d[specIndex]); })
        .style("fill", function (d, i) { return rgbColor[i] })

    //make a new line in case the point is also a vertex
    lineData = [];
    for (var i = 0; i < selectedCircles.length; i++) {
        var thisone = selectedCircles[i];
        lineData.push({ "x": data.Values[thisone].decDate, "y": data.Values[thisone][specIndex] })
        //lineData[i] = ({"x":data.Values[thisone].decDate, "y":data.Values[thisone][specIndex]}); //.push
    }
    //update the line
    svg.selectAll("#plotLine")
        .transition()
        .duration(500)
        .attr("d", lineFunction(lineData));
}


//define function to add and remove line segments
export function changePlotLine() {
    var selectedCirclesTemp = $("circle.selected");
    lineData = [] //reset lineData
    selectedCircles = []; //reset selectedCircles
    for (var i = 0; i < selectedCirclesTemp.length; i++) {
        var thisone = $("circle.data").index(selectedCirclesTemp[i]);
        selectedCircles.push(thisone);
        lineData.push({ "x": data.Values[thisone].decDate, "y": data.Values[thisone][specIndex] });
    }

    $("#plotLine").remove(); //remove the line

    lineGraph = svg.append("path") //redraw the line
        .attr("d", lineFunction(lineData))
        .attr("id", "plotLine")
        .attr("clip-path", "url(#clip)");

    //updateSegmentForm();
}


export function localStretch() {
    var localMin = d3.min(data.Values, function (d) { return d[specIndex]; }); //get the local min
    var localMax = d3.max(data.Values, function (d) { return d[specIndex]; }); //get the local max
    var buffer = (localMax - localMin) * 0.1; //calulate a buffer to add to the min and max so that the point is not cut off
    localMin -= buffer; //adjust the min by the buffer
    localMax += buffer; //adjust the max by the buffer

    currentDomain[specIndex].min = localMin; //set the currentDomain min for the specIndex
    currentDomain[specIndex].max = localMax; //set the currentDomain max for the specIndex

    svg.call(xzoom
        .x(xscale.domain([defaultDomain.year.min, defaultDomain.year.max])) //xmin and xmax are global variables that are set in the "plotInt" function
        .y(yscale.domain([currentDomain[specIndex].min, currentDomain[specIndex].max])) //domain is javascript object that comes from an outside file
        .event);
    svg.call(yzoom
        .x(xscale.domain([defaultDomain.year.min, defaultDomain.year.max])) //xmin and xmax are global variables that are set in the "plotInt" function
        .y(yscale.domain([currentDomain[specIndex].min, currentDomain[specIndex].max])) //domain is javascript object that comes from an outside file
        .event);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


//define function to update the circle selection
export function changeSelectedClass(seriesIndex) {
    var thisCircle = $("circle.data").eq(seriesIndex);
    var thisChipHolder = $(".chipHolder").eq(seriesIndex); //thisCanvas
    var status = thisCircle.attr("class");
    if (status == "data unselected") { //add a vertex
        thisCircle.attr("class", "data selected");
        thisChipHolder.addClass("selected");
        updateSegmentForm(seriesIndex, "add")
    } else { //remove a vertex
        thisCircle.attr("class", "data unselected");
        thisCircle.css("stroke", "none");
        thisChipHolder.removeClass("selected");
        thisChipHolder.css("border-color", "white");
        updateSegmentForm(seriesIndex, "remove")
    }
    changePlotLine(); //update the plotline
    //updateSegmentForm(); //update the segment forms

    setSelectedColor();
    circleBorderColor = thisCircle.css("stroke");
    //circleBorderWidth = thisCircle.css("stroke-width");
    thisCircle.css({ "stroke": highLightColor, "stroke-width": 5 }).attr("id", "hover")
    thisChipHolder.addClass("hover")
    borderColor = thisChipHolder.css("borderTopColor");
    thisChipHolder.css({ "borderTopColor": highLightColor, "borderRightColor": highLightColor, "borderBottomColor": highLightColor, "borderLeftColor": highLightColor, });
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

//define function to calculate stretched 8-bit color array by spectral index
export function calcColor(data, specIndex, stretch, n_stdev, len) {
    var dataC = $.extend(true, {}, data); //make a copy the data so the original is not altered by the min/max setting
    //var minv = stretch[specIndex].mean - (stretch[specIndex].stdev * n_stdev) //calcuate the min value for the stretch
    //var maxv = stretch[specIndex].mean + (stretch[specIndex].stdev * n_stdev) //calcuate the max value for the stretch
    var color = []; //make a empty array to hold the color weight for each data point
    for (var i = 0; i < len; i++) { //loop through all the data points
        //if(dataC.Values[i][specIndex] < minv) dataC.Values[i][specIndex] = minv; //if the point value is less than the min strech value, then set to min - in-function data copy only!
        //if(dataC.Values[i][specIndex] > maxv) dataC.Values[i][specIndex] = maxv; //if the point value is greater than the max strech value, then set to max  - infunction data copy only!
        if (dataC.Values[i][specIndex] < stretch[specIndex].min) dataC.Values[i][specIndex] = stretch[specIndex].min; //if the point value is less than the min strech value, then set to min - in-function data copy only!
        if (dataC.Values[i][specIndex] > stretch[specIndex].max) dataC.Values[i][specIndex] = stretch[specIndex].max; //if the point value is greater than the max strech value, then set to max  - infunction data copy only!
        //color[i] = ((dataC.Values[i][specIndex] - minv) / (maxv - minv)) * 256; //set the 8-bit color weight for each point
        color[i] = ((dataC.Values[i][specIndex] - stretch[specIndex].min) / (stretch[specIndex].max - stretch[specIndex].min)) * 256; //set the 8-bit color weight for each point
    }
    return color; //return the color weights
}

//define function to return scaled color arrays as RGB color
export function scaledRGB(data, RspecIndex, GspecIndex, BspecIndex, stretch, n_stdev, len) {
    var colorR = calcColor(data, RspecIndex, stretch, n_stdev, len);
    var colorG = calcColor(data, GspecIndex, stretch, n_stdev, len);
    var colorB = calcColor(data, BspecIndex, stretch, n_stdev, len);
    var color = [];
    for (var i = 0; i < len; i++) { color[i] = d3.rgb(colorR[i], colorG[i], colorB[i]); }
    return color;
}

//define function to calculate spectral indices from the raw band data
export function calcIndices(data) {
    //define and initialize variables
    var n_obj = data.Values.length, //this is already calc
        b1 = 0,
        b2 = 0,
        b3 = 0,
        b4 = 0,
        b5 = 0,
        b7 = 0,
        bcoef = [0.2043, 0.4158, 0.5524, 0.5741, 0.3124, 0.2303],
        gcoef = [-0.1603, -0.2819, -0.4934, 0.7940, -0.0002, -0.1446],
        wcoef = [0.0315, 0.2021, 0.3102, 0.1594, -0.6806, -0.6109],
        i = 0;

    //calculate indices and include them in the json object
    for (i; i < n_obj; i++) {
        //pull out the values by band from json object so we don't have to deal with the long json text to
        //call a value when calculating indices

        b1 = data.Values[i].B1;
        b2 = data.Values[i].B2;
        b3 = data.Values[i].B3;
        b4 = data.Values[i].B4;
        b5 = data.Values[i].B5;
        b7 = data.Values[i].B7;

        //calculate indices
        data.Values[i]["TCB"] = (b1 * bcoef[0]) + (b2 * bcoef[1]) + (b3 * bcoef[2]) + (b4 * bcoef[3]) + (b5 * bcoef[4]) + (b7 * bcoef[5]);
        data.Values[i]["TCG"] = (b1 * gcoef[0]) + (b2 * gcoef[1]) + (b3 * gcoef[2]) + (b4 * gcoef[3]) + (b5 * gcoef[4]) + (b7 * gcoef[5]);
        data.Values[i]["TCW"] = (b1 * wcoef[0]) + (b2 * wcoef[1]) + (b3 * wcoef[2]) + (b4 * wcoef[3]) + (b5 * wcoef[4]) + (b7 * wcoef[5]);
        data.Values[i]["TCA"] = Math.atan(data.Values[i].TCG / data.Values[i].TCB) * (180 / Math.PI); // * 100;
        data.Values[i]["NBR"] = (b4 - b7) / (b4 + b7);
        data.Values[i]["NDVI"] = (b4 - b3) / (b4 + b3);
    }
    return data
}


//define function to determine if leap year
export function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

export function calcDecDate(trajData) {
    for (var i = 0; i < trajData.Values.length; i++) {
        var thisYear = trajData.Values[i].image_year;
        if (leapYear(thisYear)) {
            var n_days = 367
        } else {
            var n_days = 366
        }
        var decDate = thisYear + (trajData.Values[i].image_julday / n_days);
        trajData.Values[i]["decDate"] = decDate
    }
    return trajData
}

export function setHighlightColor() {
    //var color = $("#highlightColor").prop("value");
    highLightColor = $("#highlightColor").prop("value");
    $("circle.highlight").css({ "stroke": highLightColor, "stroke-width": 5 });
    $(".chipHolder.highlight").css("border-color", highLightColor);
    $("tr.active").css("background-color", highLightColor);
}

export function setSelectedColor() {
    var color = $("#selectedColor").prop("value");
    $("circle.selected").css("stroke", color);
    $("#plotLine").css("stroke", color);
    $(".chipHolder.selected").css("border-color", color);
}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//EVENT LISTENERS///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


//function to prepare vert info to be posted to the server
function saveVertInfo(sessionInfo, vertInfo) {
    //first deal with the vertInfo
    //package up the vert info
    if (typeof vertInfo === 'undefined' | sessionInfo.projectID == "" | sessionInfo.plotID == "") { return }

    if (!sessionInfo.isDirty) {
        return;
    }

    let tsSave = {
        projectId: sessionInfo.projectID,
        plotId: sessionInfo.plotID,
        packet: -1, //always -1 for current implementation.
        userId: sessionInfo.userID,
        userName: sessionInfo.userName,
        isExample: $("#isExampleCheckbox").prop("checked") == true ? 1 : 0,
        isComplete: checkPlot(sessionInfo, vertInfo) == true ? 1 : 0,
        comment: $("#commentInput").val()
    }

    let timeSync = origData.map(d => {
        let dv = _.find(vertInfo, v => v.image_year === d.image_year && v.image_julday === d.image_julday)
        if (dv === undefined) return { ...d };
        // let info = _.pick(dv, ['landUse', 'landCover', 'changeProcess', 'isVertex']);
        let info = _.pick(dv, ['landuse', 'landcover', 'change_process', 'is_vertex']);
        return { ...d, ..._.cloneDeep(info) };
    })

    tsSave.timeSync = timeSync;

    //NOW Save it
    fetch(getUrls(sessionInfo).vertInfoSave, {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tsSave)
    })
        .then(response => {
            if (response.ok) {
                sessionInfo.isDirty = false;
            }
            else {
                console.log(response);
                alert("Error saving TimeSync interpretation.");
            }
        });
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////CONTEXT MENU/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//UNIQUE FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//APPEND NOTES TO THE NOTES DIV///////////////////////////////////////////////////////////////////
//change process
function appendCPnotes(selection) {
    //$("#CPnotesList").empty();
    switch (selection) {
        case "Fire":
            //$("#CPnotesList").append('<li class="natural">Natural</li><li class="prescribed">Prescribed</li><li class="sitePrepFire">Site-prep fire</li><li class="airphotoOnly">Airphoto only</li>');
            $("#fire").addClass("selected");
            $(".forFire").closest("li").removeClass("disabled");
            $(".forFire").attr("disabled", false);
            break;
        case "Harvest":
            //$("#CPnotesList").append('<li class="clearcut">Clearcut</li><li class="thinning">Thinning</li><li class="sitePrepFire">Site-prep fire</li><li class="airphotoOnly">Airphoto only</li>');
            $("#harvest").addClass("selected");
            $(".forHarvest").closest("li").removeClass("disabled");
            $(".forHarvest").attr("disabled", false);
            break;
        // case "Decline":
        // 	//$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
        // 	$("#decline").addClass("selected");
        // 	$(".forDecline").closest("li").removeClass("disabled");
        // 	$(".forDecline").attr("disabled", false);
        // 	break;
        case "Acute Decline":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#acuteDecline").addClass("selected");
            $(".forAcuteDecline").closest("li").removeClass("disabled");
            $(".forAcuteDecline").attr("disabled", false);
            break;
        case "Condition Decline":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#conditionDecline").addClass("selected");
            $(".forConditionDecline").closest("li").removeClass("disabled");
            $(".forConditionDecline").attr("disabled", false);
            break;
        case "Wind":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#wind").addClass("selected");
            $(".forWind").closest("li").removeClass("disabled");
            $(".forWind").attr("disabled", false);
            break;
        case "Hydrology":
            //$("#CPnotesList").append('<li class="flooding">Flooding</li><li class="reserviorLakeFlux">Reservoir/Lake flux</li><li class="airphotoOnly">Airphoto only</li>');
            $("#hydro").addClass("selected");
            $(".forHydro").closest("li").removeClass("disabled");
            $(".forHydro").attr("disabled", false);
            break;
        case "Debris":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#debris").addClass("selected");
            $(".forDebris").closest("li").removeClass("disabled");
            $(".forDebris").attr("disabled", false);
            break;
        case "Growth/Recovery":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#growth").addClass("selected");
            $(".forGrowth").closest("li").removeClass("disabled");
            $(".forGrowth").attr("disabled", false);
            break;
        case "Stable":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#stable").addClass("selected");
            $(".forStable").closest("li").removeClass("disabled");
            $(".forStable").attr("disabled", false);
            break;
        case "Mechanical":
            //$("#CPnotesList").append('<li class="wetlandDrainage">Wetland drainage</li><li class="airphotoOnly">Airphoto only</li>');
            $("#mechanical").addClass("selected");
            $(".forMechanical").closest("li").removeClass("disabled");
            $(".forMecahnical").attr("disabled", false);
            break;
        case "Other":
            //$("#CPnotesList").append('<li class="airphotoOnly">Airphoto only</li>');
            $("#otherCP").addClass("selected");
            $(".forOther").closest("li").removeClass("disabled");
            $(".forOther").attr("disabled", false);
            break;
    }
}

//land use
function appendLUnotes(selection, level) {
    switch (selection) {
        case "Forest":
            if (level == "primary") {
                //$("#LUnotesList").append('<li class="wetland">Wetland</li>');
                $("#landUseList .forest").addClass("selected");
                //$(".forForest").removeClass("disabled")

                $("#LUnotesList .forForest").attr("disabled", false);
                $("#LUnotesList .forForest").closest("li").removeClass("disabled");
            } else {
                $("#landUseListSec .forest").addClass("selected");
                $("#LUnotesListSec .forForest").attr("disabled", false);
                $("#LUnotesListSec .forForest").closest("li").removeClass("disabled");
            }
            break;
        case "Developed":
            if (level == "primary") {
                //$("#LUnotesList").append('<li class="mining">Mining</li>');
                $("#landUseList .developed").addClass("selected");
                //$(".forDeveloped").removeClass("disabled")
                $("#LUnotesList .forDeveloped").attr("disabled", false);
                $("#LUnotesList .forDeveloped").closest("li").removeClass("disabled");
            } else {
                $("#landUseListSec .developed").addClass("selected");
                $("#LUnotesListSec .forDeveloped").attr("disabled", false);
                $("#LUnotesListSec .forDeveloped").closest("li").removeClass("disabled");
            }
            break;
        case "Agriculture":
            if (level == "primary") {
                //$("#LUnotesList").append('<li class="rowCrop">Row crop</li><li class="orchardTreeFarm">Orchard/Tree farm</li><li class="vineyardsOtherWoody">Vineyard/Other woody</li>');
                $("#landUseList .ag").addClass("selected");
                //$(".forAg").removeClass("disabled");
                $("#LUnotesList .forAg").attr("disabled", false);
                $("#LUnotesList .forAg").closest("li").removeClass("disabled");
            } else {
                $("#landUseListSec .ag").addClass("selected");
                $("#LUnotesListSec .forAg").attr("disabled", false);
                $("#LUnotesListSec .forAg").closest("li").removeClass("disabled");
            }
            break;

        case "Non-forest Wetland":
            if (level == "primary") {
                //$("#LUnotesList").append('<li class="wetland">Wetland</li>');
                $("#landUseList .nonForWet").addClass("selected");
                //$(".forForest").removeClass("disabled");
                $("#LUnotesList .forForest").attr("disabled", true);
                // $("#LUnotesList .forForest").closest("li").removeClass("disabled");
            } else {
                $("#landUseListSec .nonForWet").addClass("selected");
                $("#LUnotesListSec .forForest").attr("disabled", true);
                // $("#LUnotesListSec .forForest").closest("li").removeClass("disabled");
            }
            break;
        case "Rangeland":
            if (level == "primary") {
                //$("#LUnotesList").append('<li class="mining">Mining</li>');
                $("#landUseList .rangeland").addClass("selected");
                //$(".forDeveloped").removeClass("disabled");
                $("#LUnotesList .forDeveloped").attr("disabled", true);
                // $("#LUnotesList .forDeveloped").closest("li").removeClass("disabled");
            } else {
                $("#landUseListSec .rangeland").addClass("selected");
                $("#LUnotesListSec .forDeveloped").attr("disabled", true);
                // $("#LUnotesListSec .forDeveloped").closest("li").removeClass("disabled");
            }
            break;
        case "Other":
            if (level == "primary") {
                //$("#LUnotesList").append('<li class="rowCrop">Row crop</li><li class="orchardTreeFarm">Orchard/Tree farm</li><li class="vineyardsOtherWoody">Vineyard/Other woody</li>');
                $("#landUseList .otherLU").addClass("selected");
                //$(".forAg").removeClass("disabled");
                $("#LUnotesList .forAg").attr("disabled", true);
                // $("#LUnotesList .forAg").closest("li").removeClass("disabled");
            } else {
                $("#landUseListSec .otherLU").addClass("selected");
                $("#LUnotesListSec .forAg").attr("disabled", true);
                // $("#LUnotesListSec .forAg").closest("li").removeClass("disabled");
            }
            break;
        default:
            if (level == "primary") {
                $("#LUnotesList li").attr("disabled", true);
            } else {
                $("#LUnotesListSec li").attr("disabled", true);
            }
            break;
    }
}

//land cover
function appendLCnotes(selection) {
    switch (selection) {
        case "Trees": ;
            $("#treesLC").addClass("selected");
            $("#shrubs,#grassForbHerb,#impervious,#naturalBarren,#snowIce,#water").closest("li").removeClass("disabled");
            $("#shrubs,#grassForbHerb,#impervious,#naturalBarren,#snowIce,#water").attr("disabled", false);
            break;
        case "Shrubs":
            $("#shrubsLC").addClass("selected");
            $("#trees,#grassForbHerb,#impervious,#naturalBarren,#snowIce,#water").closest("li").removeClass("disabled");
            $("#trees,#grassForbHerb,#impervious,#naturalBarren,#snowIce,#water").attr("disabled", false);
            break;
        case "Grass/forb/herb":
            $("#gfhLC").addClass("selected");
            $("#trees,#shrubs,#impervious,#naturalBarren,#snowIce,#water").closest("li").removeClass("disabled");
            $("#trees,#shrubs,#impervious,#naturalBarren,#snowIce,#water").attr("disabled", false);
            break;
        case "Impervious":
            $("#imperviousLC").addClass("selected");
            $("#trees,#shrubs,#grassForbHerb,#naturalBarren,#snowIce,#water").closest("li").removeClass("disabled");
            $("#trees,#shrubs,#grassForbHerb,#naturalBarren,#snowIce,#water").attr("disabled", false);
            break;
        case "Barren":
            $("#natBarLC").addClass("selected");
            $("#trees,#shrubs,#impervious,#grassForbHerb,#snowIce,#water").closest("li").removeClass("disabled");
            $("#trees,#shrubs,#impervious,#grassForbHerb,#snowIce,#water").attr("disabled", false);
            break;
        case "Snow/ice":
            $("#snowIceLC").addClass("selected");
            $("#trees,#shrubs,#impervious,#naturalBarren,#grassForbHerb,#water").closest("li").removeClass("disabled");
            $("#trees,#shrubs,#impervious,#naturalBarren,#grassForbHerb,#water").attr("disabled", false);
            break;
        case "Water":
            $("#waterLC").addClass("selected");
            $("#trees,#shrubs,#impervious,#naturalBarren,#snowIce,#grassForbHerb").closest("li").removeClass("disabled");
            $("#trees,#shrubs,#impervious,#naturalBarren,#snowIce,#grassForbHerb").attr("disabled", false);
            break;
    }
}


//DONE BUTTON FUNCTION TO CLOSE DROPDOWN MENUS AND RECORD INFO FROM THE FORM INPUTS TO THE LINEINFO OBJECT

function changeProcessDoneBtn() {
    $("#changeProcessDiv").hide();
    //$("#changeProcessList").hide();

    //remove the highlighted circle class - could find the highlighted class and only change that one (current implementation) or just reset all selected circles (commented out)
    highlightOff();

    //fill in the lineInfo object
    var thisOne = $(".changeProcessInput").index($(".changeProcessInput.active")) + 1;
    var selection = $("td.changeProcessInput.active").text();

    vertInfo[thisOne].change_process.changeProcess = selection;
    vertInfo[thisOne].change_process.notes.natural = $("#natural").prop("checked");
    vertInfo[thisOne].change_process.notes.prescribed = $("#prescribed").prop("checked");
    vertInfo[thisOne].change_process.notes.sitePrepFire = $("#sitePrepFire").prop("checked");
    vertInfo[thisOne].change_process.notes.airphotoOnly = $("#airphotoOnly").prop("checked");
    vertInfo[thisOne].change_process.notes.clearcut = $("#clearcut").prop("checked");
    vertInfo[thisOne].change_process.notes.thinning = $("#thinning").prop("checked");
    vertInfo[thisOne].change_process.notes.flooding = $("#flooding").prop("checked");
    vertInfo[thisOne].change_process.notes.reserviorLakeFlux = $("#reserviorLakeFlux").prop("checked");
    vertInfo[thisOne].change_process.notes.wetlandDrainage = $("#wetlandDrainage").prop("checked");
}

//land use
function landUseDoneBtn() {
    //$("#landUseDiv").hide(); //hide the dropdown
    //$("#landUseList").hide();

    //remove the highlighted circle class - could find the highlighted class and only change that one (current implementation) or just reset all selected circles (commented out)
    highlightOff();

    //fill in the lineInfo object
    var thisOne = $(".landUseInput").index($(".landUseInput.active"));

    vertInfo[thisOne].landuse.primary.landUse = $("td.landUseInput.active").text();

    var thisSelectedSecLU = $("#landUseListSec .selected")
    vertInfo[thisOne].landuse.secondary.landUse = thisSelectedSecLU.text() //get the text from the selected class
    thisSelectedSecLU.removeClass("selected"); //then make sure to get rid of the selected class so it can be set dynamically

    vertInfo[thisOne].landuse.primary.notes.wetland = $("#LUnotesList .wetland").prop("checked");
    vertInfo[thisOne].landuse.primary.notes.mining = $("#LUnotesList .mining").prop("checked");
    vertInfo[thisOne].landuse.primary.notes.rowCrop = $("#LUnotesList .rowCrop").prop("checked");
    vertInfo[thisOne].landuse.primary.notes.orchardTreeFarm = $("#LUnotesList .orchardTreeFarm").prop("checked");
    vertInfo[thisOne].landuse.primary.notes.vineyardsOtherWoody = $("#LUnotesList .vineyardsOtherWoody").prop("checked");
    vertInfo[thisOne].landuse.secondary.notes.wetland = $("#LUnotesListSec .wetland").prop("checked");
    vertInfo[thisOne].landuse.secondary.notes.mining = $("#LUnotesListSec .mining").prop("checked");
    vertInfo[thisOne].landuse.secondary.notes.rowCrop = $("#LUnotesListSec .rowCrop").prop("checked");
    vertInfo[thisOne].landuse.secondary.notes.orchardTreeFarm = $("#LUnotesListSec .orchardTreeFarm").prop("checked");
    vertInfo[thisOne].landuse.secondary.notes.vineyardsOtherWoody = $("#LUnotesListSec .vineyardsOtherWoody").prop("checked");
}

//land cover
function landCoverDoneBtn() {
    //$("#landCoverDiv").hide(); //hide the dropdown
    //$("#landCoverList").hide();

    //remove the highlighted circle class - could find the highlighted class and only change that one (current implementation) or just reset all selected circles (commented out)
    highlightOff();

    //fill in the lineInfo object
    var thisOne = $(".landCoverInput").index($(".landCoverInput.active"));
    var selection = $("td.landCoverInput.active").text();

    vertInfo[thisOne].landcover.landCover = selection;

    //non checkbox
    //vertInfo[thisOne].landCover.other.trees = $("#trees").hasClass("selected")
    //vertInfo[thisOne].landCover.other.shrubs = $("#shrubs").hasClass("selected")
    //vertInfo[thisOne].landCover.other.grassForbHerb = $("#grassForbHerb").hasClass("selected")
    //vertInfo[thisOne].landCover.other.impervious = $("#impervious").hasClass("selected")
    //vertInfo[thisOne].landCover.other.naturalBarren = $("#naturalBarren").hasClass("selected")
    //vertInfo[thisOne].landCover.other.snowIce = $("#snowIce").hasClass("selected")
    //vertInfo[thisOne].landCover.other.water = $("#water").hasClass("selected")

    //checkbox
    vertInfo[thisOne].landcover.other.trees = $("#trees").prop("checked");
    vertInfo[thisOne].landcover.other.shrubs = $("#shrubs").prop("checked");
    vertInfo[thisOne].landcover.other.grassForbHerb = $("#grassForbHerb").prop("checked");
    vertInfo[thisOne].landcover.other.impervious = $("#impervious").prop("checked");
    vertInfo[thisOne].landcover.other.naturalBarren = $("#naturalBarren").prop("checked");
    vertInfo[thisOne].landcover.other.snowIce = $("#snowIce").prop("checked");
    vertInfo[thisOne].landcover.other.water = $("#water").prop("checked");


    //fillInNotes("#LCnotesList .selected",thisOne,"trees","landCover");
    //fillInNotes("#LCnotesList .selected",thisOne,"shrubs","landCover");
    //fillInNotes("#LCnotesList .selected",thisOne,"grassForbHerb","landCover");
    //fillInNotes("#LCnotesList .selected",thisOne,"impervious","landCover");
    //fillInNotes("#LCnotesList .selected",thisOne,"naturalBarren","landCover");
    //fillInNotes("#LCnotesList .selected",thisOne,"snowIce","landCover");
    //fillInNotes("#LCnotesList .selected",thisOne,"water","landCover");

    $("#LCnotesList .selected").removeClass("selected");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//SHARED FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
function fillInForm() {
    var len = selectThese.length;
    $('.segment, vertex').remove();

    //fill in segment form
    for (var i = 0; i < len - 1; i++) {
        var yearStart = vertInfo[i].image_year;
        var yearEnd = vertInfo[i + 1].image_year;
        $("#segmentsFormTbl").append('<tr class="segment"><td class="highlightIt"><span class="glyphicon glyphicon-search"></span></td><td>' + yearStart + '</td><td>' + yearEnd + '</td><td class="changeProcessInput formDrop"></td></tr>');
        $(".changeProcessInput").eq(i).text(vertInfo[i + 1].change_process.changeProcess);
    }
    //fill in vertex form
    for (i = 0; i < len; i++) {
        yearStart = vertInfo[i].image_year;
        $("#verticesFormTbl").append('<tr class="vertex"><td class="highlightIt"><span class="glyphicon glyphicon-search"></span></td><td>' + yearStart + '</td><td class="landUseInput formDrop lulc"></td><td class="landCoverInput formDrop lulc"></td></tr>');
        $(".landUseInput").eq(i).text(vertInfo[i].landuse.primary.landUse);
        $(".landCoverInput").eq(i).text(vertInfo[i].landcover.landCover);
    }
}


//function to sync the segments form to the selected vertices
function updateSegmentForm(seriesIndex, addRemove) {
    if (addRemove == "add") {
        //figure out where to insert the new vertInfo object - compare the index of the selected year against those already selected and recorded in the vertInfo array
        for (var i = 0; i < vertInfo.length; i++) {
            if (vertInfo[i].index > seriesIndex) { break } //where it breaks out is the index (i) to splice the new vertInfo object
        }

        //make a vertInfo object to splice into the vertInfo array
        var spliceVertInfo = {
            image_year: data.Values[seriesIndex].image_year, //fill in for the selected point
            image_julday: data.Values[seriesIndex].image_julday,
            index: seriesIndex, //fill in for the selected point
            iid: data.Values[seriesIndex].iid,
            is_vertex: true,
            landuse: {
                primary: {
                    landUse: "",
                    notes: {
                        wetland: false,
                        mining: false,
                        rowCrop: false,
                        orchardTreeFarm: false,
                        vineyardsOtherWoody: false
                    }
                },
                secondary: {
                    landUse: "",
                    notes: {
                        wetland: false,
                        mining: false,
                        rowCrop: false,
                        orchardTreeFarm: false,
                        vineyardsOtherWoody: false
                    }
                }
            },
            landcover: {
                landCover: "",
                other: {
                    trees: false,
                    shrubs: false,
                    grassForbHerb: false,
                    impervious: false,
                    naturalBarren: false,
                    snowIce: false,
                    water: false
                }
            },
            change_process: {
                changeProcess: "",
                notes: {
                    natural: false,
                    prescribed: false,
                    sitePrepFire: false,
                    airphotoOnly: false,
                    clearcut: false,
                    thinning: false,
                    flooding: false,
                    reserviorLakeFlux: false,
                    wetlandDrainage: false
                }
            }
        }

        vertInfo.splice(i, 0, spliceVertInfo) //splice the new vertInfo object into the vertInfo array at the location found above (i)
        selectThese.splice(i, 0, seriesIndex) //insert the seriesIndex in the "selectThese" array so that highlighting and form filling reflects the change


    } else if (addRemove == "remove") { //remove a vertex
        var thisVertIndex = selectThese.indexOf(seriesIndex); //get the vertexInfo array index of the selected point
        vertInfo.splice(thisVertIndex, 1); //remove the vertInfo object at the index found one line above
        selectThese.splice(thisVertIndex, 1); //remove the series index from the selectThese array at the index found one line above
    }

    $(".segment").remove(); //empty the current segment form
    $(".vertex").remove(); //empty the current vertex form
    fillInForm(); //append new forms and fill them in from the altered vertInfo array
}


//function to show a dropdown for the land use and change process inputs
function dropInputLists(thisInput, thisList, xAdj, yAdj, widthAdj) {
    var rowPos = thisInput.position(),
        bottomTop = rowPos.top,
        bottomLeft = rowPos.left,
        bottomWidth = thisInput[0].getBoundingClientRect().width,
        bottomHeight = thisInput[0].getBoundingClientRect().height

    //drop its dropdown based on the position of the clicked element
    $("#" + thisList).css({
        position: "absolute",
        top: (bottomTop + parseFloat(bottomHeight) + yAdj),
        left: bottomLeft + xAdj,
        width: (parseFloat(bottomWidth) + widthAdj + "px")
    }).show();
}

//function to change the note icon depending on whether the note is selected or not
function changeNoteIcon(notesList, thisOne, inputType) {
    //theseLi = $(notesList+" li")
    //theseLi.each(function(i){
    //var thisLi = $(this)
    //var noteClass = thisLi.attr("id");

    switch (inputType) {
        case "landUse":
            $("#LUnotesList .wetland").prop("checked", vertInfo[thisOne].landuse.primary.notes.wetland);
            $("#LUnotesList .mining").prop("checked", vertInfo[thisOne].landuse.primary.notes.mining);
            $("#LUnotesList .rowCrop").prop("checked", vertInfo[thisOne].landuse.primary.notes.rowCrop);
            $("#LUnotesList .orchardTreeFarm").prop("checked", vertInfo[thisOne].landuse.primary.notes.orchardTreeFarm);
            $("#LUnotesList .vineyardsOtherWoody").prop("checked", vertInfo[thisOne].landuse.primary.notes.vineyardsOtherWoody);
            //noteNull = vertInfo[thisOne].landUse.primary.notes[noteClass];
            break;
        case "landUseSec":
            $("#LUnotesListSec .wetland").prop("checked", vertInfo[thisOne].landuse.secondary.notes.wetland);
            $("#LUnotesListSec .mining").prop("checked", vertInfo[thisOne].landuse.secondary.notes.mining);
            $("#LUnotesListSec .rowCrop").prop("checked", vertInfo[thisOne].landuse.secondary.notes.rowCrop);
            $("#LUnotesListSec .orchardTreeFarm").prop("checked", vertInfo[thisOne].landuse.secondary.notes.orchardTreeFarm);
            $("#LUnotesListSec .vineyardsOtherWoody").prop("checked", vertInfo[thisOne].landuse.secondary.notes.vineyardsOtherWoody);
            //noteNull = vertInfo[thisOne].landUse.primary.notes[noteClass];
            break;
        case "landCover":
            $("#trees").prop("checked", vertInfo[thisOne].landcover.other.trees);
            $("#shrubs").prop("checked", vertInfo[thisOne].landcover.other.shrubs);
            $("#grassForbHerb").prop("checked", vertInfo[thisOne].landcover.other.grassForbHerb);
            $("#impervious").prop("checked", vertInfo[thisOne].landcover.other.impervious);
            $("#naturalBarren").prop("checked", vertInfo[thisOne].landcover.other.naturalBarren);
            $("#snowIce").prop("checked", vertInfo[thisOne].landcover.other.snowIce);
            $("#water").prop("checked", vertInfo[thisOne].landcover.other.water);
            //noteNull = vertInfo[thisOne].landCover.other[noteClass];
            break;
        case "changeProcess":
            $("#natural").prop("checked", vertInfo[thisOne].change_process.notes.natural);
            $("#prescribed").prop("checked", vertInfo[thisOne].change_process.notes.prescribed);
            $("#sitePrepFire").prop("checked", vertInfo[thisOne].change_process.notes.sitePrepFire);
            $("#airphotoOnly").prop("checked", vertInfo[thisOne].change_process.notes.airphotoOnly);
            $("#clearcut").prop("checked", vertInfo[thisOne].change_process.notes.clearcut);
            $("#thinning").prop("checked", vertInfo[thisOne].change_process.notes.thinning);
            $("#flooding").prop("checked", vertInfo[thisOne].change_process.notes.flooding);
            $("#reserviorLakeFlux").prop("checked", vertInfo[thisOne].change_process.notes.reserviorLakeFlux);
            $("#wetlandDrainage").prop("checked", vertInfo[thisOne].change_process.notes.wetlandDrainage);
            //noteNull = vertInfo[thisOne].changeProcess.notes[noteClass];
            break;
    }
}

//turn highlighting off
function highlightOff() {
    $("circle.data.highlight").attr("class", "data selected").css({ "stroke": highLightColor, "stroke-width": 2 });
    $(".chipHolder.highlight").addClass("selected").removeClass("highlight");
    $("tr.active").removeClass("active").css("background-color", "white"); //only needed when using the color options
    $("circle").css("cursor", "pointer");
    $(".chipImg").css("cursor", "pointer");
    setSelectedColor();
}

//turn highlighting on
function highlightOn(linePart, thisOne) {
    switch (linePart) {
        case "vertex":
            var thisIndex = vertInfo[thisOne].index;
            $("circle.data:eq(" + thisIndex + ")").attr("class", "data highlight");
            $(".chipHolder:eq(" + thisIndex + ")").removeClass("selected").addClass("highlight");
            break;
        case "segment":
            var startIndex = vertInfo[thisOne - 1].index; //pull out the start index for the selected row
            var endIndex = vertInfo[thisOne].index; //pull out the end index for the selected row
            $("circle.data:eq(" + startIndex + ")").attr("class", "data highlight"); //highlight the start circle for the selected row (segment)
            $("circle.data:eq(" + endIndex + ")").attr("class", "data highlight"); //highlight the end circle for the selected row (segment)
            $(".chipHolder:eq(" + startIndex + ")").removeClass("selected").addClass("highlight"); //highlight the start canvas for the selected row (segment)
            $(".chipHolder:eq(" + endIndex + ")").removeClass("selected").addClass("highlight"); //highlight the end canvas for the selected row (segment)
            break;
    }
    $("circle").css("cursor", "not-allowed");
    $(".chipImg").css("cursor", "not-allowed");
    setHighlightColor(); //only needed when using the color options
}

//figure out which dropdown to close and what info to record
function closeDropAndRecord() {
    $("#luLevelSwitchHolder li").removeClass("selected").css({ "font-weight": "normal" });
    $("#LUprimaryTab").addClass("selected").css({ "font-weight": "bold" });
    $("#landUseListSec").hide();
    $("#landUseList").show();
    $("#LUnotesListSec").hide();
    $("#LUnotesList").show();
    var tdActive = $("td.active");
    if (tdActive.length != 0) { //only perform closeDropAndRecord if there is an active td
        sessionInfo.isDirty = true;
        if (tdActive.hasClass("changeProcessInput")) {
            changeProcessDoneBtn();
        } else if (tdActive.hasClass("lulc")) { //landUseInput
            $("#lulc").hide();
            landUseDoneBtn();
            landCoverDoneBtn();
        } //else if(tdActive.hasClass("landCoverInput")){
        //landCoverDoneBtn();
        //}
        tdActive.removeClass("active");
    }
}
/////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////BELOW ARE CHIP SCRIPTS///////////////////////////////////////////////////////
//////////////BELOW ARE CHIP SCRIPTS////////////////////////////////////////BELOW ARE CHIP SCRIPTS//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////BELOW ARE CHIP SCRIPTS//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////BELOW ARE CHIP SCRIPTS///////////////////////
////////////////////////////BELOW ARE CHIP SCRIPTS//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////BELOW ARE CHIP SCRIPTS/////////////////////////////////BELOW ARE CHIP SCRIPTS////



///////////DEFINE THE FUNCTION TO ADD THE CANVAS AND IMAGE FOR EACH CHIP ON-THE-FLY////////////
function appendSrcImg() {
    for (var i = 0; i < n_chips; i++) {
        //chipInfo.imgIDs[i] = ("img"+i);
        //var appendThisImg = '<img class="chipImgSrc" id="'+chipInfo.imgIDs[i]+'"src="'+origData[i].url+'">';
        //YANG var thisChipSet = $("#chipSetList .active").attr("id");
        var thisChipSet = 'chipSetBGW';
        var appendThisImg = '<img class="chipImgSrc" id="' + chipInfo.imgIDs[i] + '"src="' + chipInfo.src[i][thisChipSet] + '">';
        $("#img-gallery").append(appendThisImg);
    }
}

function appendChips(window, selected, color) { //this function is handling the appending of the main chips and the remote chips, though it might be better to separate them
    for (var i = 0; i < n_chips; i++) {
        chipInfo.canvasIDs[i] = ("chip" + i);
        var appendThisCanvas = '<div id="' + chipInfo.canvasIDs[i] + '" class="chipHolder">' +
            '<canvas class="chipImg" width="' + chipDisplayProps.chipSize + '" height="' + chipDisplayProps.canvasHeight + '"></canvas>' +
            '<div class="chipDate">&nbsp;</div>' + //'<span class="glyphicon glyphicon-new-window expandChipYear" aria-hidden="true" style="float:right; margin-right:5px"></span>'+
            '</div>';
        $("#chip-gallery").append(appendThisCanvas);
    }
    if (window == "annual") {
        $(".chipHolder, .chipImg, .chipImgSrc").addClass("annual")
        for (var i = 0; i < selected.length; i++) { $(".chipHolder").eq(selected[i]).addClass("selected"); }
        setSelectedColor()
    } else if (window == "intraAnnual") {
        $(".chipHolder, .chipImg, .chipImgSrc").addClass("intraAnnual")
        for (var i = 0; i < selected.length; i++) { $(".chipHolder").eq(selected[i]).addClass("selected"); }
    }

    if ($("#toolTipsCheck").hasClass("glyphicon glyphicon-ok")) {
        $("canvas.chipImg.annual").prop("title", "This is an annual image chip. It represents the 255 x 255 pixel image subset centered on the plot. There is one image per year and the center pixel outlined in white corresponds to a spectral point in the pixel time series. The correspondence between this image chip and its mathcing point in the spectral point time series is marked by shared green highlighting on hover. Holding the shift key while mouse wheeling on an image chip will change the scale. Double clicking on an image chip will toggle a vertex on and off. Image chips that are outlined in red represent vertices.")
        $("span.expandChipYear").prop("title", "This is intra-annual image chip window icon. Clicking it will open a new window and/or load all image chips for the year. In the intra-annual image chip window, all chips have a corresponding intra-annual spectral point in the time series plot. Hovering over any of the image chips while the Show Points (show intra-annual points) toggle is active (thumbs up), the corresponding point will be highlighted in blue. This will help you make a decision about which point is best suited to represent the year. Clicking on any of the image chips will set that chip as the new data for the year. The data will immediately change in the main chip gallery and in the spectral time series plot.")
        $(".chipDate").prop("title", "This is the year and day of the image chip and corresponding point in the spectral time series plot. The day is defined by day-of-year. In the Help button dropdown menu there is a conversion calendar that links day-of-year to month-day to help interpret when the image was recorded.")
    }
}




////////////////DEFINE FUNCTION TO INITIALLY POPULATE CHIPINFO OBJECT/////////////////////////////////////
function fetchUrlFromStore(chip_url) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const chipInfo = JSON.parse(localStorage.getItem(chip_url));
    //TODO: restore these
    //YANG: temporarily disable caching
    // if (chipInfo && new Date(chipInfo.lastGatewayUpdate) > currentDate) {
    //     return chipInfo.chip_url;
    // }
    return '';
}

function getImageChip(iid) {
    //Either use https://localhost:8888/ts/chip/:lng/:lat/:year/:day/:vis
    // or https://localhost:8888/ts/image_chip/:lng/:lat/:iid/:vis/:size
    //TODO: note the hard coded tc and 255

    // return `${geeServer}/ts/image_chip/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}/${iid}/tc/255`;

    //on initial run, defaultUrl is always used and subsequent calls will use cached urls.
    // let defaultUrl = `${geeServer}/ts/image_chip/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}/${iid}/tc/255`;
    // let chipUrl = `${geeServer}/ts/image_chip_url/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}/${iid}/tc/255`;
    let defaultUrl = `${geeServer}/ts/image_chip/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}/${iid}/b543/255`;
    let chipUrl = `${geeServer}/ts/image_chip_url/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}/${iid}/b543/255`;

    let needFetch = true;

    // let resultUrl = chipUrl;
    //have storage support
    if (typeof (Storage) !== 'undefined') {
        const chipinfo = fetchUrlFromStore(chipUrl);
        if (chipinfo !== '') {
            return chipinfo;
        }
    }

    if (needFetch) {
        fetch(chipUrl).then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                Promise.reject();
            }
        }).then(data => {
            console.log(JSON.stringify(data));
            data.lastGatewayUpdate = new Date();
            localStorage.setItem(chipUrl, JSON.stringify(data));
        })
    }
    return defaultUrl;
}

function makeChipInfo(selection, origData) {
    for (var i = 0; i < n_chips; i++) {
        if (selection == "random") {
            //randomly select a chip from a strip to display - not needed once we have json file to tell us
            var useThisChip = Math.floor((Math.random() * thisManyChips));
        } else if (selection == "ordered") {
            var useThisChip = i;
        } else if (selection == "json") { //YANG: only support this for now.
            var useThisChip = 0;
            var year = origData[i].image_year
            var julday = origData[i].image_julday
            var src = { chipSetBGW: getImageChip(origData[i].iid) }
            // chipSet743:origData[i].url_743,
            // chipSet432:origData[i].url_432}
            var sensor = origData[i].iid.substring(8, 12);
        }

        chipInfo.chipsInStrip[i] = 1 //thisManyChips;
        chipInfo.useThisChip[i] = useThisChip;
        chipInfo.year[i] = year;
        chipInfo.julday[i] = julday;
        chipInfo.src[i] = src;
        chipInfo.sensor[i] = sensor;
        chipInfo.imgIDs[i] = ("img" + i);
    }
    updateChipInfo();
}

////////////////DEFINE FUNCTION TO UPDATE THE CHIPINFO OBJECT WHEN A NEW CHIP SIZE IS SELECTED////////////
function updateChipInfo() {
    for (var i = 0; i < n_chips; i++) {
        //define/store some other info needed for zooming
        chipInfo.sxOrig[i] = chipDisplayProps.offset;	//0 chipInfo.offset set/push the original source x offset to the sxOrig array
        chipInfo.syOrig[i] = (255 * chipInfo.useThisChip[i]) + chipDisplayProps.offset; // +chipInfo.offset   set/push the original source y offset to the syOrig array
        chipInfo.sWidthOrig[i] = chipDisplayProps.chipSize; //255  set/push the original source x width to the sWidthOrig array
        chipInfo.sxZoom[i] = chipInfo.sxOrig[i];
        chipInfo.syZoom[i] = chipInfo.syOrig[i];
        chipInfo.sWidthZoom[i] = chipInfo.sWidthOrig[i];
    }

    var starter = chipDisplayProps.halfChipSize,
        lwstarter = chipDisplayProps.box;

    //console.log(sAdj);
    for (var i = 1; i < maxZoom + 1; i++) {
        starter *= 0.9
        sAdj[i] = (chipDisplayProps.halfChipSize - starter);
        lwstarter /= 0.9;
        lwAdj[i] = lwstarter;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////DEFINE FUNCTION TO DRAW ALL THE IMAGE CHIPS TO THE CANVASES/////////////////////
//var plotColor = $("#plotColor").prop("value") //global variable
function drawAllChips(window) {

    updateZoom();
    for (var i = 0; i < n_chips; i++) { drawOneChip(i, window) }
}

////////////DEFINE FUNCTION TO DRAW A NEW IMAGE SECTION TO A CANVAS////////////////////////////
function drawOneChip(thisChip, window) {
    var timgID = $('.chipImgSrc.' + window).eq(thisChip)[0];
    var canvasID = $('.chipImg.' + window).eq(thisChip)[0];
    var ctx = canvasID.getContext("2d");

    var img = new Image;
    img.onload = function () {
        try {
            ctx.clearRect(0, 0, canvasID.width, canvasID.height);
            ctx.mozImageSmoothingEnabled = false;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.msImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(
                img,
                chipInfo.sxZoom[thisChip],
                chipInfo.syZoom[thisChip],
                chipInfo.sWidthZoom[thisChip],
                chipInfo.sWidthZoom[thisChip],
                0, 0, chipDisplayProps.chipSize, chipDisplayProps.chipSize
            ); //chipInfo.offset,chipInfo.offset
            ctx.strokeStyle = chipDisplayProps.plotColor; //"#FF0000"
            ctx.lineWidth = 1;
            ctx.lineCap = 'square';
            ctx.strokeRect(chipDisplayProps.halfChipSize - (chipDisplayProps.boxZoom / 2), chipDisplayProps.halfChipSize - (chipDisplayProps.boxZoom / 2), chipDisplayProps.boxZoom, chipDisplayProps.boxZoom);
        }
        catch (e) { }
    }

    img.src = timgID.src;

    if (window == "annual") {
        $(".chipDate").eq(thisChip).empty().append(
            '<span class="glyphicon glyphicon-triangle-left previousChip" aria-hidden="true" style="float:left; margin-left:5px"></span>'
            + chipInfo.year[thisChip] + "-" + chipInfo.julday[thisChip]
            + " "
            + chipInfo.sensor[thisChip]
            + '<span class="glyphicon glyphicon-new-window expandChipYear" aria-hidden="true" style="float:right; margin-right:5px"></span>'
            + '<span class="glyphicon glyphicon-triangle-right nextChip" aria-hidden="true" style="float:right; margin-right:5px"></span>'
        );

        if ($("#toolTipsCheck").hasClass("glyphicon glyphicon-ok")) {
            $("span.expandChipYear").prop("title", "This is intra-annual image chip window icon. Clicking it will open a new window and/or load all image chips for the year. In the intra-annual image chip window, all chips have a corresponding intra-annual spectral point in the time series plot. Hovering over any of the image chips while the Show Points (show intra-annual points) toggle is active (thumbs up), the corresponding point will be highlighted in blue. This will help you make a decision about which point is best suited to represent the year. Clicking on any of the image chips will set that chip as the new data for the year. The data will immediately change in the main chip gallery and in the spectral time series plot.")
        }

    } else if (window == "intraAnnual") {
        $(".chipDate").eq(thisChip).empty().append(chipInfo.year[thisChip] + "-" + chipInfo.julday[thisChip] + " " + chipInfo.sensor[thisChip])
    }
}

////////////REPLACE A CHIP WITH ONE SELECTED IN THE REMOTE WINDOW//////////////////////////////
function replaceChip(pass_data) {
    //adjust the chip offset for the orig
    var replaceThisChip = pass_data.originChipIndex
    var thisImg = $(".chipImgSrc").eq(replaceThisChip);
    //YANG var thisChipSet = $("#chipSetList .active").attr("id"); //this could be global -it gets used in "appendSrcImg()"
    var thisChipSet = 'chipSetBGW';
    thisImg.attr("src", chipInfo.src[replaceThisChip][thisChipSet]);
    chipInfo.useThisChip[replaceThisChip] = pass_data.useThisChip;
    chipInfo.syOrig[replaceThisChip] = (255 * chipInfo.useThisChip[replaceThisChip]) + chipDisplayProps.offset; // +chipInfo.offset   set/push the original source y offset to the syOrig array
    chipInfo.syZoom[replaceThisChip] = chipInfo.syOrig[replaceThisChip] + sAdj[chipDisplayProps.zoomLevel];
    //draw the chip - need to call updateZoom first since not running drawAllChips
    //updateZoom() //don't need to run since the syZoom was updated a line up

    //thisImg.on("load",function(){
    //	drawOneChip(replaceThisChip)
    //}).attr("src",chipInfo.src[replaceThisChip]);


    //thisImg.on("load",function(){
    drawOneChip(replaceThisChip, "annual")
    //});
}
/////////////////////////////////////////////////////////////////////////////////////////////////


function updateZoom() {
    for (var i = 0; i < n_chips; i++) {
        chipInfo.sxZoom[i] = chipInfo.sxOrig[i] + sAdj[chipDisplayProps.zoomLevel];
        chipInfo.syZoom[i] = chipInfo.syOrig[i] + sAdj[chipDisplayProps.zoomLevel];
        chipInfo.sWidthZoom[i] = chipInfo.sWidthOrig[i] - (sAdj[chipDisplayProps.zoomLevel] * 2);
    }
    chipDisplayProps.boxZoom = lwAdj[chipDisplayProps.zoomLevel];
}



/** helper function to find the immediate neighboring image */
function getNextImage(dataArray, target, direction) {
    let candidate = dataArray.findIndex(d => d.image_year === target.image_year && d.image_julday === target.image_julday);
    //find the next one
    if (direction === 'next') {
        if (candidate < dataArray.length - 1) {
            result = dataArray[candidate + 1]
            //only return image from the same year
            return result.image_year === target.image_year ? { ...result } : null;
        }
    }
    else {
        if (candidate > 0) {
            result = dataArray[candidate - 1]
            //only return image from the same year
            return result.image_year === target.image_year ? { ...result } : null;
        }
    }
    return null
}

//////////////////////////GET MESSAGES FROM REMOTE////////////////////////////////////////////
//receive messages from the origin window
function changeDefaultChip(sessionInfo, year, newDOY, oldDOY) {
    var imagePreference = {
        "projectID": sessionInfo.projectID,
        "tsa": sessionInfo.tsa,
        "plotID": sessionInfo.plotID,
        "userID": sessionInfo.userID,
        "year": year,
        "julday": newDOY,
        "oldJulday": oldDOY
    }

    imagePreference = JSON.stringify(imagePreference);
    $.post(getUrls(sessionInfo).chipOverRide, { "imagePreference": imagePreference })
        .fail(function () {
            alert("Failed to save image preference");
        });
}

function IsJsonString(json) {
    var str = json.toString();
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }

    return true;
}
