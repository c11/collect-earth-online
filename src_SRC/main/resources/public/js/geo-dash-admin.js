var gmodcdash;

angular.module("geodashadmin", []).controller("GeodashAdminController", ["$http" , "$scope", function GeodashController($http, $scope,  $compile) {

    this.theURL = "geo-dash/";
    this.prodGateway = "http://gateway.servirglobal.net:8888";
	this.devGateway = "http://127.0.0.1:8888";
    //this.wCount = 0;
    //this.wLoaded = 0;
    this.projAOI;
    this.projPairAOI;
    this.wStateFull = false;
    this.theSplit;
    this.ajaxurl = "";
    this.title = "";
    this.dashboardID;
    this.bradius;
    this.bcenter;
    this.mapWidgetArray = {};
    this.graphWidgetArray = {};

    this.pageWidgets = [];
    this.icameback;
    this.textStatus;
    this.jqXHR;
    this.dialog;
    this.test
    this.form;
    this.theDash;
    this.panelList;
    this.changedList = [];

    this.updateList;
    this.statcameback;
    this.isAdmin = true;
    this.updatingWidget;
    var geodash = this;
    this.maxHeight = 0;
    this.sHeight = 0;
    var debugme;
    gmodcdash = this;
    this.cooked = true;
    this.cookedStats = false;
    this.cookedImage = true;
    this.cookedGraph = false;
    this.cookedNDVIImage = false;
    this.cookedEVIImage = false;
    this.cookedEVI2Image = false;
    this.cookedNDMIImage = false;
    this.cookedNDWIImage = false;
    this.cookedNDVIGraph = false;
    this.cookedEVIGraph = false;
    this.cookedEVI2Graph = false;
    this.cookedNDMIGraph = false;
    this.cookedNDWIGraph = false;
    this.mainWidgetTypes = [{id:"ImageCollectionNDVI", name:"NDVI Image Collection"},
                                    {id:"NDVItimeSeriesGraph", name:"NDVI Graph"},
                                    {id:"ImageCollectionEVI", name:"EVI Image Collection"},
                                    {id:"EVItimeSeriesGraph", name:"EVI Graph"},
                                    {id:"ImageCollectionEVI2", name:"EVI2 Image Collection"},
                                    {id:"EVI2timeSeriesGraph", name:"EVI2 Graph"},
                                    {id:"ImageCollectionNDMI", name:"NDMI Image Collection"},
                                    {id:"NDMItimeSeriesGraph", name:"NDMI Graph"},
                                    {id:"ImageCollectionNDWI", name:"NDWI Image Collection"},
                                    {id:"NDWItimeSeriesGraph", name:"NDWI Graph"},
                                    {id:"getStats", name:"Statistics"},
                                    {id:"custom", name:"Custom widget"}];
    this.imageCollectionList = ["addImageCollection","ndviImageCollection","ImageCollectionNDVI","ImageCollectionEVI","ImageCollectionEVI2","ImageCollectionNDWI","ImageCollectionNDMI"];
    this.graphCollectionList = ["timeSeriesGraph", "ndviTimeSeries", "eviTimeSeries","evi2TimeSeries", "ndmiTimeSeries", "ndwiTimeSeries"];
    this.initialize = function () {
        "use strict";

        var pid = this.getParameterByName("pid");
        this.title = this.getParameterByName("title");
        this.projAOI = this.getParameterByName("aoi");
        this.bradius = this.getParameterByName("bradius");
        this.bcenter = this.getParameterByName("bcenter");
        if (this.projAOI) {
            try {
                this.theSplit = decodeURI(this.projAOI).replace("[", "").replace("]", "").split(",");
                this.projPairAOI = "[[" + this.theSplit[0] + "," + this.theSplit[1] + "],[" + this.theSplit[2] + "," + this.theSplit[1] + "],[" + this.theSplit[2] + "," + this.theSplit[3] + "],[" + this.theSplit[0] + "," + this.theSplit[3] + "],[" + this.theSplit[0] + "," + this.theSplit[1] + "]]";
            } catch (e) {
                console.warn("missing projAOI" + e.message);
            }
        }
        var absUrl = $(location).attr('href');
        if( 
        		absUrl.indexOf("127.0.0.1") !== -1 || 
        		absUrl.indexOf("localhost") !== -1  || 
        		absUrl.indexOf("0.0.0.0") !== -1  ){
        	this.gateway =  this.devGateway;
        }else{
        	this.gateway = this.prodGateway;
        }
        
        
        this.ajaxurl = this.theURL + "id/" + pid;
        $.ajax({
            url: this.ajaxurl,
            type: "get",
            dataType: "jsonp",
            data: {
                title: this.title
            },
            success: function (response) {
                debugme = response;
                try {
                    geodash.fillDashboard(response);
                }
                catch (e) {
                    console.debug(e.message);
                }
                geodash.makeAdjustable();
            },
            error: function (xhr) {
                debugme = xhr;
            }

        });

        this.test = "who is here?";
        $("#widgetType").change(function () {
            if (this.value === "getStats") {
                if ($("#mainform").is(":visible")) {
                    $("#mainform").hide();
                }
                $("#statsform").show();
            } else {
                if ($("#statsform").is(":visible")) {
                    $("#statsform").hide();
                }
                $("#mainform").show();
            }
        });
        angular.element(document).ready(function () {
            gmodcdash.setupDialog();
        });
        angular.element(document).ready(function () {
            $(".input-daterange input").each(function () {
                try {
                    $(this).datepicker({
                        changeMonth: true,
                        changeYear: true,
                        dateFormat: "yy-mm-dd"
                    });
                } catch (e) {
                    console.warn(e.message);
                }
            });
            $("#btnNewWidget").show();
        });
        //window.setTimeout('gmodcdash.setupDialog()', 500);


        this.mainwidgetTypeSelected = this.mainWidgetTypes[0];
        this.cookedNDVIImage = true;
    };
    this.updatemainwidgetType = function(item){
        this.resetMainTypes()
        if(item.id === 'custom'){
        this.cooked = false;
        }
        else{
            this.cooked = true;
            if(item.id === 'ImageCollectionNDVI'){
                this.cookedNDVIImage = true;
                this.cookedImage = true;
            }
            else  if(item.id === 'ImageCollectionNDWI'){
                this.cookedNDWIImage = true;
                this.cookedImage = true;
            }
            else  if(item.id === 'ImageCollectionEVI'){
                this.cookedEVIImage = true;
                this.cookedImage = true;
            }
            else  if(item.id === 'ImageCollectionEVI2'){
                this.cookedEVI2Image = true;
                this.cookedImage = true;
            }
            else  if(item.id === 'ImageCollectionNDMI'){
                this.cookedNDMIImage = true;
                this.cookedImage = true;
            }
            else  if(item.id === 'NDVItimeSeriesGraph'){
                this.cookedNDVIGraph = true;
                this.cookedGraph = true;
            }
            else  if(item.id === 'NDWItimeSeriesGraph'){
                this.cookedNDWIGraph = true;
                this.cookedGraph = true;
            }
            else  if(item.id === 'EVItimeSeriesGraph'){
                this.cookedEVIGraph = true;
                this.cookedGraph = true;
            }
            else  if(item.id === 'EVI2timeSeriesGraph'){
                this.cookedEVI2Graph = true;
                this.cookedGraph = true;
            }
            else  if(item.id === 'NDMItimeSeriesGraph'){
                this.cookedNDMIGraph = true;
                this.cookedGraph = true;
            }
            else  if(item.id === 'getStats'){
                this.cookedStats = true;
            }
        }
     };
     this.resetMainTypes = function(){
        this.cookedStats = false;
        this.cookedNDVIImage = false;
        this.cookedEVIImage = false;
        this.cookedEVI2Image = false;
        this.cookedNDMIImage = false;
        this.cookedNDWIImage = false;
        this.cookedNDVIGraph = false;
        this.cookedEVIGraph = false;
        this.cookedEVI2Graph = false;
        this.cookedNDMIGraph = false;
        this.cookedNDWIGraph = false;
        this.cookedGraph = false;
        this.cookedImage = false;
     }
    this.completeGraph = function () {
        "use strict";
        this.pageWidgets.forEach(function (widget, index) {
            if (widget.properties[0] === "timeSeriesGraph") {
                try {
                    $("#widgetgraph_" + widget.id + " .highcharts-title").children()[0].innerHTML = widget.properties[4];
                    $("#widgetgraph_" + widget.id + " .highcharts-yaxis").children()[0].innerHTML = widget.properties[4];
                } catch (e) {
                    console.debug("Graph failed for: " + index + e.message);
                }
            }
        });
    }
    this.setupDialog = function () {
        geodash.dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: [{
                text: "Create widget",
                "class": "btn btn-primary",
                click: geodash.createUserWidget
            },
                    {
                        text: "Cancel",
                        "class": "btn btn-primary",
                        click: function () {
                            geodash.dialog.dialog("close");
                        }
                    }],
            close: function () {
                geodash.form[0].reset();
                $("#widgetType").trigger("change");
                //allFields.removeClass("ui-state-error");
            }
        });
        geodash.form = this.dialog.find("form");

    };
    this.addBuffer = function (whichMap) {
        "use strict";
        try {
            var circle = new ol.geom.Circle(ol.proj.transform(JSON.parse(this.bcenter).coordinates, "EPSG:4326", "EPSG:3857"), this.bradius * 1); //bradius / 1000);

            var CircleFeature = new ol.Feature(circle);


            var vectorSource = new ol.source.Vector({});

            vectorSource.addFeatures([CircleFeature]);


            var layer = new ol.layer.Vector({
                source: vectorSource,
                style: [
                    new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "#8b2323",
                            width: 2
                        }),
                        fill: null
                    })
                ]
            });
            whichMap.addLayer(layer);
        } catch (e) {
            console.warn("buffer failed: " + e.message);
        }
    }
    this.createChart = function (wIndex, wText, wTimeseriesData) {
        "use strict";
        return Highcharts.chart("graphcontainer_" + wIndex, {
            chart: {
                zoomType: "x"
            },
            title: {
                text: wText
            },
            subtitle: {
                text: document.ontouchstart === undefined
                    ? "Click and drag in the plot area to zoom in"
                    : "Pinch the chart to zoom in"
            },
            xAxis: {
                type: "datetime"
            },
            yAxis: {
                title: {
                    text: wText
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            tooltip: {
                pointFormat: "Value: {point.y}"
            },
            series: [{
                type: "area",
                name: wText,
                data: wTimeseriesData
            }]
        }, function () {
            geodash.completeGraph();
        });
    }
    this.numberWithCommas = function (x) {
        "use strict";
        if (typeof x === "number") {
            try {
                var parts = x.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return parts.join(".");
            } catch (e) {
                console.warn(e.message);
            }
        }
        return "N/A";
    }
    this.calculateArea = function (poly) {
        "use strict";
        var sphere = new ol.Sphere(6378137);
        var coordinates = poly;
        var area_m = sphere.geodesicArea(coordinates);
        var area_ha = area_m / 10000;
        if (area_ha < 0) {
            area_ha = area_ha * -1;
        }
        return this.numberWithCommas(area_ha);
    }
    this.flipme = function (which) {
        "use strict";
        $("#" + which).flip("toggle");
        $("#" + which + " .back div.ctr").toggle();

    }
    this.upDateOpacity = function(what, which)
    {
        var id = "widgetmap_" + which;
        var theLayer = gmodcdash.mapWidgetArray[id].getLayer(id)

        	theLayer.setOpacity(what.value)
    }
    this.setOpacity = function(value, layerID)
    {
        //var layer;
        var id = layerID; //"widgetmap_2";
        var theLayers = this.mapWidgetArray[layerID].getLayers().forEach(function (lyr) {
        if (id == lyr.get('id')) {
                lyr.setOpacity(value);
            }
        });
    };
    this.getEditForm = function (which, bandsupport) {
        "use strict";
        var theForm = $("<div />", {
            "class": "ctr"
        });
        var displayType = "block";
        if(which.properties[0] == "addImageCollection" || which.properties[0] == "timeSeriesGraph"){}
        else{
        displayType = "none";
        }
        var titlegroup = " <div class=\"form-group\"><label for=\"title_" + which.id + "\">Title:</label><input type=\"text\" class=\"form-control\" id=\"title_" + which.id + "\" value=\"" + which.name + "\" placeholder=\"Title\"></div>";
        var collectiongroup = "<div style='display:"+ displayType+";'=\"form-group\"><label for=\"collection_" + which.id + "\">Image Collection:</label><input type=\"text\" class=\"form-control\" id=\"collection_" + which.id + "\" placeholder=\"Image Collection\" value=\"" + which.properties[1] + "\"> </div>";
        var rangegroup = "<div style='display:"+ displayType+";' class=\"input-group input-daterange\" id=\"range_" + which.id + "\"><input type=\"text\" class=\"form-control\"  value=\"" + which.properties[2] + "\" id=\"sDate_" + which.id + "\"><div class=\"input-group-addon\">to</div><input type=\"text\" class=\"form-control\" value=\"" + which.properties[3] + "\" id=\"eDate_" + which.id + "\">";
        var bandsgroup = "";
        if (bandsupport) {
            bandsgroup = "<div style='display:"+ displayType+";' class=\"form-group\"><label for=\"bands_" + which.id + "\">Bands:(optional)</label> <input type=\"text\" placeholder=\"Bands\" id=\"bands_" + which.id + "\" name=\"bands_" + which.id + "\" value=\"" + which.properties[4] + "\" class=\"form-control\">";
        }
        /**********************************working here***************************************/
        if (!which.min) {
            which.min = "";
        }
        if (!which.max) {
            which.max = "0.3";
        }
        var minMax = "<div style='display:"+ displayType+";' class=\"form-group\"><label for=\"min_" + which.id + "\">Min:(optional)</label> <input type=\"text\" class=\"form-control\"  value=\"" + which.min + "\" id=\"min_" + which.id + "\"></div><div style='display:"+ displayType+";' class=\"form-group\"><label for=\"max_" + which.id + "\">Max:(optional)</label><input type=\"text\" class=\"form-control\" value=\"" + which.max + "\" id=\"max_" + which.id + "\">";
        var columns = 3;
        if (which.width) {
            columns = which.width;
        }
        var options = this.getOptionsString(columns);
        var columnsgroup = "<div class=\"form-group\"><label for=\"columns_" + which.id + "\">Columns:</label><select id=\"columns_" + which.id + "\" name=\"columns_" + which.id + "\" class=\"form-control\">"+options+"</select>";
        // var columnsgroup = "<div class=\"form-group\"><label for=\"columns_" + which.id + "\">Columns:</label><input type=\"text\" placeholder=\"Columns\" id=\"columns_" + which.id + "\" name=\"columns_" + which.id + "\" value=\"" + columns + "\" class=\"form-control\">";
        if (bandsgroup) {
            theForm.append(titlegroup).append(collectiongroup).append(minMax).append(rangegroup).append(bandsgroup).append(columnsgroup);
        } else {
            theForm.append(titlegroup).append(collectiongroup).append(minMax).append(rangegroup).append(columnsgroup);
        }

        theForm.append("<br><input type=\"submit\" id=\"savebutton_" + which.id + "\" value=\"Save\" class=\"btn btn-primary\" onclick=\"gmodcdash.updatewidget(this)\"/> <input type=\"submit\" id=\"deletebutton_" + which.id + "\" value=\"Delete\" class=\"btn btn-primary\" onclick=\"gmodcdash.deleteWidget(this)\"/>");

        return theForm;
    }
    this.getStatsForm = function (which) {
        "use strict";
        var theForm = $("<div />", {
            "class": "ctr"
        });
        var titlegroup = " <div class=\"form-group\"><label for=\"title_" + which.id + "\">Title:</label><input type=\"text\" class=\"form-control\" id=\"title_" + which.id + "\" value=\"" + which.name + "\" placeholder=\"Title\"></div>";
        var columns = 3;
        if (which.width) {
            columns = which.width;
        }
        var options = this.getOptionsString(columns);
        var columnsgroup = "<div class=\"form-group\"><label for=\"columns_" + which.id + "\">Columns:</label><select id=\"columns_" + which.id + "\" name=\"columns_" + which.id + "\" class=\"form-control\">"+options+"</select>";
        theForm.append(titlegroup).append(columnsgroup);
        theForm.append("<br><input type=\"submit\" id=\"savebutton_" + which.id + "\" value=\"Save\" class=\"btn btn-primary\" onclick=\"gmodcdash.updatewidget(this)\"/> <input type=\"submit\" id=\"deletebutton_" + which.id + "\" value=\"Delete\" class=\"btn btn-primary\" onclick=\"gmodcdash.deleteWidget(this)\"/>");
        return theForm;
    }
    this.getOptionsString = function(selectedVal){
        var outOpts = '';
        for(r = 3; r<12; r++){
            var selected = "";
            if(r == selectedVal){
            selected = 'selected';
            }
            outOpts = outOpts+'<option '+selected+' value=\"'+ r +'\">'+r+'</option>';
        }
        return outOpts;
    }
    this.getTimeSeriesGraphForm = function (which) {
        "use strict";
        return this.getEditForm(which, true);
    }
    this.getImageCollectionForm = function (which) {
        "use strict";
        return this.getEditForm(which, true);
    }
    this.addWidget = function (widget) {
        "use strict";
        var awidget = $("<div/>", {
            "class": "col-xs-6 col-sm-3 placeholder"
        });
        if (widget.width) {
            awidget = $("<div/>", {
                "class": "col-xs-6 col-sm-" + widget.width + " placeholder"
            });
        }
        var panel = $("<div/>", {
            "class": "panel panel-default"
        });
        panel.attr("id", "widget_" + widget.id);
        var panHead = $("<div/>", {
            "class": "panel-heading"
        });
        var toolsholder = $("<ul/>", {
            "class": "list-inline panel-actions pull-right"
        });
        var clickcommand = "gmodcdash.flipme(\"flip-container_" + widget.id + "\")";
        var toolfliptog = $("<li/>");
        var theflipbutton = $("<a/>", {
            "class": "list-inline panel-actions panel-flip",
            "onclick": clickcommand
        });
        var theflipicon = $("<i/>", {
            "class": "glyphicon glyphicon-cog"
        });
        theflipbutton.append(theflipicon);
        theflipbutton.attr("role", "button");
        theflipbutton.attr("title", "Toggle flip");
        toolfliptog.append(theflipbutton);
        toolsholder.append(toolfliptog);

        var toolmaxtog = $("<li/>");
        var thebutton = $("<a/>", {
            "class": "list-inline panel-actions panel-fullscreen"
        });
        var theicon = $("<i/>", {
            "class": "glyphicon glyphicon-resize-full"
        });
        thebutton.append(theicon);
        thebutton.attr("role", "button");
        thebutton.attr("title", "Toggle Fullscreen");
        toolmaxtog.append(thebutton);
        toolsholder.append(toolmaxtog);
        panHead.append(toolsholder);
        panel.append(panHead);
        var img;
        var wtext = "I had no property";
        if (widget.properties[0]) {
            var front = "";
            var back = "";
            var flippercontainer = "";

            flippercontainer = $("<div />", {
                "id": "flip-container_" + widget.id,
                "class": "flip-container"
            });
            front = $("<div />").addClass("front");
            back = $("<div />").addClass("back").html("this is the Admin side which will contain a form");

            wtext = widget.properties[0];
            var widgettitle = $("<h4 />", {
                "id": "widgettitle_" + widget.id
            }).html(widget.name);
            var sub = $("<br />");
            //if (wtext === "addImageCollection" || wtext === "ndviImageCollection" || wtext === "ImageCollectionNDVI" || wtext === "ImageCollectionEVI" || wtext === "ImageCollectionEVI2" || wtext === "ImageCollectionNDWI" || wtext === "ImageCollectionNDMI") {
            if(this.imageCollectionList.includes(wtext)){
                var maddiv = $("<div/>", {
                    "id": "widgetmap_" + widget.id,
                    "class": "minmapwidget"
                });
                /**********************i need to add an opacity slider here*********************/



                var opacityControl = $('<input />',
                {
                    "type":"range",
                    "class":"mapRange",
                    "id":"rangeWidget_" + widget.id,
                    "value": ".9",
                    "min":"0",
                    "max":"1",
                    "step":".01",
                    "onchange":"gmodcdash.setOpacity(this.value, 'widgetmap_" +widget.id+"')",
                    "oninput":"gmodcdash.setOpacity(this.value, 'widgetmap_" +widget.id+"')"
                }
                );



                maddiv.attr("style", "width:100%; min-height:200px;");
                front.append(maddiv).append(widgettitle).append(opacityControl).append(sub);
                flippercontainer.append(front);
                back.html("");
                back.append(this.getImageCollectionForm(widget));
                flippercontainer.append(back);
                panel.append(flippercontainer);
            } else if (wtext === "timeSeriesGraph" || wtext === "ndviTimeSeries" || wtext === "ndwiTimeSeries" || wtext === "eviTimeSeries" || wtext === "evi2TimeSeries" || wtext === "ndmiTimeSeries") {
                var graphdiv = $("<div/>", {
                    "id": "widgetgraph_" + widget.id,
                    "class": "minmapwidget"
                });
                var graphcontainer = $("<div/>", {
                    "id": "graphcontainer_" + widget.id,
                    "class": "minmapwidget graphwidget"
                });
                graphdiv.append(graphcontainer);
                graphdiv.append(widgettitle).append(sub);
                front.append(graphdiv);
                flippercontainer.append(front);
                back.html("");
                back.append(this.getTimeSeriesGraphForm(widget));
                flippercontainer.append(back);
                panel.append(flippercontainer);
            } else if (wtext === "getStats") {//create edit - Width

                var statsDiv = $("<div/>", {
                    "id": "widgetstats_" + widget.id,
                    "class": "minmapwidget"
                });
                var content = "<div><div class=\"form-group\"><div class=\"input-group\"><div class=\"input-group-addon\"><img src=\"img/icon-population.png\" style=\"width: 50px; height: 50px; border-radius: 25px; background-color: rgb(226, 132, 58);\"></div>";
                content += "  <label for=\"totalPop_" + widget.id + "\" style=\"color:#787878\">Total population</label>";
                content += "<h4 id=\"totalPop_" + widget.id + "\" style=\"color: #606060; font-size: 16px; font-weight: bold; \"></h4><img src=\"img/loading.gif\" id=\"loading-indicator-1\" style=\"display:none\" /></div></div>";
                content += "<div class=\"form-group\"><div class=\"input-group\"><div class=\"input-group-addon\"><img src=\"img/icon-area.png\" style=\"width: 50px; height: 50px; border-radius: 25px; background-color: rgb(226, 132, 58);\"></div>";
                content += "<label for=\"totalArea_" + widget.id + "\" style=\"color:#787878\">Area</label>";
                content += "<h4 id=\"totalArea_" + widget.id + "\" style=\"color: #606060; font-size: 16px; font-weight: bold; \"></h4><img src=\"img/loading.gif\" id=\"loading-indicator-1\" style=\"display:none\" /></div></div>";
                content += "<div class=\"form-group\"><div class=\"input-group\"><div class=\"input-group-addon\"><img src=\"img/icon-elevation.png\" style=\"width: 50px; height: 50px; border-radius: 25px; background-color: rgb(226, 132, 58);\"></div>";
                content += "<label for=\"elevationRange_" + widget.id + "\" style=\"color:#787878\">Elevation</label>";
                content += "<h4 id=\"elevationRange_" + widget.id + "\" style=\"color: #606060; font-size: 16px; font-weight: bold; \"></h4><img src=\"img/loading.gif\" id=\"loading-indicator-1\" style=\"display:none\" /></div></div>";

                statsDiv.append(content);
                front.append(statsDiv);
                flippercontainer.append(front);
                back.html("");
                back.append(this.getStatsForm(widget));
                flippercontainer.append(back);
                panel.append(flippercontainer);
            } else {
                img = $("<img>");
                img.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==");
                img.attr("width", "200");
                img.attr("height", "200");
                img.addClass("img-responsive");
                panel.append(img).append(this.title).append(sub);
            }
        }
        awidget.append(panel);
        return awidget;
    }
    this.enableMapWidget = function (mapdiv) {
        "use strict";
        var raster = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        var map = new ol.Map({
            layers: [raster],
            target: mapdiv,
            view: new ol.View({
                center: [0, 0],
                projection: "EPSG:3857",
                zoom: 4
            })
        });
        this.mapWidgetArray[mapdiv] = map;
    }
    this.addTileServer = function (imageid, token, mapdiv) {
        "use strict";
        var googleLayer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "https://earthengine.googleapis.com/map/" + imageid + "/{z}/{x}/{y}?token=" + token
            }),
            id: mapdiv
        });
        this.mapWidgetArray[mapdiv].addLayer(googleLayer);
        this.addBuffer(this.mapWidgetArray[mapdiv]);
    }
    this.imageCollectionAJAX = function (url, id, collectionName, visParams, dateFrom, dateTo) {
        "use strict";
        $.ajax({
            url: url,
            type: "POST",
            async: true,
            indexVal: id,
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify({
                collectionName: collectionName,
                visParams: visParams,
                dateFrom: dateFrom,
                dateTo: dateTo
            })
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.warn("error from imageCollection: " + jqXHR + textStatus + errorThrown);
        }).done(function (data, _textStatus, _jqXHR) {
            if (data.errMsg) {
                console.warn("error from imageCollection: " + data.errMsg);
            } else {
                if (data.hasOwnProperty("mapid")) {
                    geodash.icameback = data;
                    geodash.textStatus = _textStatus;
                    geodash.jqXHR = _jqXHR;
                    var mapId = data.mapid;
                    var token = data.token;
                    geodash.addTileServer(mapId, token, "widgetmap_" + this.indexVal);
                } else {
                    console.warn("Wrong Data Returned");
                }
            }
        });
    }
    this.debugwidget;
    this.makeAjax = function (parameters, donefunction) {
        "use strict";
        $.ajax(parameters).fail(function (jqXHR, textStatus, errorThrown) {
            console.warn("error from ajax call: " + jqXHR + textStatus + errorThrown);
        }).done(donefunction);
    };
    this.initWidget = function (widget) {
        "use strict";
        this.debugwidget = widget;

        var collectionName;
        var timeseriesData;
        var text;
        try {
            $("#flip-container_" + widget.id).flip({
                trigger: "manual"
            });
        } catch (e) {
            console.info("widget flip issue: " + e.message);
        }
        try {
            $(".back").height($("#widget_" + widget.id).height() + 50);
        } catch (e2) {
            console.info("widget flip issue: " + e2.message);
        }
        if (widget.properties[0] === "addImageCollection") {
            this.enableMapWidget("widgetmap_" + widget.id);
            if (gmodcdash.projAOI === "") {
                gmodcdash.projAOI = [-108.30322265625, 21.33544921875, -105.347900390625, 23.53271484375];
            } else {
                if (typeof gmodcdash.projAOI === "string") {
                    gmodcdash.projAOI = $.parseJSON(gmodcdash.projAOI);
                }
            }

            if (gmodcdash.projAOI) {
                gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getView().fit(
                    ol.proj.transform([gmodcdash.projAOI[0], gmodcdash.projAOI[1]], "EPSG:4326", "EPSG:3857").concat(ol.proj.transform([gmodcdash.projAOI[2], gmodcdash.projAOI[3]], "EPSG:4326", "EPSG:3857")),
                    gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getSize()
                );
            } else {
                gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getView().fit(
                    gmodcdash.projAOI,
                    gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getSize()
                );
            }
            collectionName = widget.properties[1];
            var dateFrom = widget.properties[2];
            var dateTo = widget.properties[3];
            var url = gmodcdash.gateway + "/imageByMosaicCollection";
            var bands = "";
            if (widget.properties.length === 5) {
                bands = widget.properties[4];
            }
            /********************/
            var min = "";
            var max = "0.3";
            try {
                if (widget.min > 0) {
                    min = widget.min;
                }

                if (widget.max > 0) {
                    max = widget.max;
                }
            }
            catch (e) { //alert(0);
            }
            var visParams = {
                min: min,
                max: max,
                bands: bands
            };
            //alert(visParams.min + " - " + visParams.max);
            $.ajax({
                url: url,
                type: "POST",
                async: true,
                indexVal: widget.id,
                crossDomain: true,
                contentType: "application/json",
                data: JSON.stringify({
                    collectionName: collectionName,
                    visParams: visParams,
                    dateFrom: dateFrom,
                    dateTo: dateTo
                })
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.info(jqXHR + textStatus + errorThrown);
            }).done(function (data, _textStatus, _jqXHR) {
                if (data.errMsg) {
                    console.info(data.errMsg);
                } else {
                    if (data.hasOwnProperty("mapid")) {
                        geodash.icameback = data;
                        geodash.textStatus = _textStatus;
                        geodash.jqXHR = _jqXHR;
                        var mapId = data.mapid;
                        var token = data.token;
                        var $this = this;
                        geodash.addTileServer(mapId, token, "widgetmap_" + $this.indexVal);
                    } else {
                        console.warn("Wrong Data Returned");
                    }
                }
            });
        } else if (widget.properties[0] === "timeSeriesGraph") {
            collectionName = widget.properties[1];
            var indexName = widget.properties[4];
            $.ajax({
                url: this.gateway + "/timeSeriesIndex",
                type: "POST",
                async: true,
                indexVal: widget.id,
                crossDomain: true,
                contentType: "application/json",
                data: JSON.stringify({
                    collectionNameTimeSeries: widget.properties[1],
                    polygon: $.parseJSON(this.projPairAOI),
                    indexName: widget.properties[4],
                    dateFromTimeSeries: widget.properties[2],
                    dateToTimeSeries: widget.properties[3]
                })
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.warn(jqXHR + textStatus + errorThrown);
            }).done(function (data, _textStatus, _jqXHR) {
                if (data.errMsg) {
                    console.warn(data.errMsg);
                } else {
                    if (data.hasOwnProperty("timeseries")) {
                        geodash.icameback = data;
                        geodash.textStatus = _textStatus;
                        geodash.jqXHR = _jqXHR;
                        timeseriesData = [];
                        $.each(data.timeseries, function (ignore, value) {
                            if (value[0] !== null) {
                                timeseriesData.push([value[0], value[1]]);
                            }
                        });
                        var $this = this;
                        text = indexName;
                        geodash.graphWidgetArray["widgetgraph_" + $this.indexVal] = geodash.createChart($this.indexVal, text, timeseriesData);
                    } else {
                        console.warn("Wrong Data Returned");
                    }
                }
            });
        } else if (widget.properties[0] === "getStats") {
            $.ajax({
                url: this.gateway + "/getStats",
                type: "POST",
                async: true,
                indexVal: widget.id,
                polyVal: $.parseJSON(this.projPairAOI),
                crossDomain: true,
                contentType: "application/json",
                data: JSON.stringify({
                    paramType: collectionName,
                    paramValue: $.parseJSON(this.projPairAOI)
                })
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.warn(jqXHR + textStatus + errorThrown);
            }).done(function (data, _textStatus, _jqXHR) {
                geodash.statcameback = data;
                if (data.errMsg) {
                    console.warn(e.message + _textStatus + _jqXHR);
                } else {
                    var $this = this;
                    $("#totalPop_" + $this.indexVal).text(geodash.numberWithCommas(data.pop));
                    $("#totalArea_" + $this.indexVal).text(geodash.calculateArea($this.polyVal) + " ha");
                    $("#elevationRange_" + $this.indexVal).text(geodash.numberWithCommas(data.minElev) + " - " + geodash.numberWithCommas(data.maxElev) + " m");

                }
            });
        }
        else if (widget.properties[0] === "ndviImageCollection") {
                        this.enableMapWidget("widgetmap_" + widget.id);
                        if (this.projAOI === "") {
                            this.projAOI = [-108.30322265625, 21.33544921875, -105.347900390625, 23.53271484375];
                        } else {
                            if (typeof this.projAOI === "string") {
                                this.projAOI = $.parseJSON(this.projAOI);
                            }
                        }
                        if (this.projAOI) {
                            this.mapWidgetArray["widgetmap_" + widget.id].getView().fit(
                                ol.proj.transform([this.projAOI[0], this.projAOI[1]], "EPSG:4326", "EPSG:3857").concat(ol.proj.transform([this.projAOI[2], this.projAOI[3]], "EPSG:4326", "EPSG:3857")),
                                this.mapWidgetArray["widgetmap_" + widget.id].getSize()
                            );
                        } else {
                            this.mapWidgetArray["widgetmap_" + widget.id].getView().fit(
                                this.projAOI,
                                this.mapWidgetArray["widgetmap_" + widget.id].getSize()
                            );
                        }
                        var dateFrom = widget.properties[2];
                            var dateTo = widget.properties[3];
                    this.makeAjax({
                                url: this.gateway + "/ndviImageCollection",
                                //url: this.gateway + "/ImageCollectionbyIndex",
                                type: "POST",
                                async: true,
                                indexVal: widget.id,
                                //index: 'ndvi',
                                crossDomain: true,
                                contentType: "application/json",
                                data: JSON.stringify({
                                    dateFrom: dateFrom,
                                    dateTo: dateTo
                                })
                            }, function (data, _textStatus, _jqXHR) {
                                if (data.errMsg) {
                                    console.warn(data.errMsg + " " + _textStatus + _jqXHR);
                                } else {
                                   if (data.hasOwnProperty("mapid")) {
                                       var mapId = data.mapid;
                                       var token = data.token;
                                       var $this = this;
                                       geodash.addTileServer(mapId, token, "widgetmap_" + $this.indexVal);
                                   } else {
                                       console.warn("Wrong Data Returned");
                                   }
                                }
                            });
                }
                else if(widget.properties[0] === "ndviTimeSeries"){
                    this.getTimeSeriesByIndex('NDVI', widget);
                }
                else if(widget.properties[0] === "eviTimeSeries"){
                    this.getTimeSeriesByIndex('EVI', widget);
                }
                else if(widget.properties[0] === "evi2TimeSeries"){
                    this.getTimeSeriesByIndex('EVI2', widget);
                }
                else if(widget.properties[0] === "ndmiTimeSeries"){
                    this.getTimeSeriesByIndex('NDMI', widget);
                }else if(widget.properties[0] === "ndwiTimeSeries"){
                    this.getTimeSeriesByIndex('NDWI', widget);
                }
                else if (widget.properties[0] === "ImageCollectionNDVI") {
                    this.getImageCollectionByIndex('ndvi', widget);
                }
                else if (widget.properties[0] === "ImageCollectionEVI") {
                    this.getImageCollectionByIndex('evi', widget);
                }
                else if (widget.properties[0] === "ImageCollectionEVI2") {
                    this.getImageCollectionByIndex('evi2', widget);
                }
                else if (widget.properties[0] === "ImageCollectionNDMI") {
                    this.getImageCollectionByIndex('ndmi', widget);
                }
                else if (widget.properties[0] === "ImageCollectionNDWI") {
                    this.getImageCollectionByIndex('ndwi', widget);
                }

    }
    this.getImageCollectionByIndex = function(which, widget){
        this.enableMapWidget("widgetmap_" + widget.id);
                 if (gmodcdash.projAOI === "") {
                     gmodcdash.projAOI = [-108.30322265625, 21.33544921875, -105.347900390625, 23.53271484375];
                 } else {
                     if (typeof gmodcdash.projAOI === "string") {
                         gmodcdash.projAOI = $.parseJSON(gmodcdash.projAOI);
                     }
                 }

                 if (gmodcdash.projAOI) {
                     gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getView().fit(
                         ol.proj.transform([gmodcdash.projAOI[0], gmodcdash.projAOI[1]], "EPSG:4326", "EPSG:3857").concat(ol.proj.transform([gmodcdash.projAOI[2], gmodcdash.projAOI[3]], "EPSG:4326", "EPSG:3857")),
                         gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getSize()
                     );
                 } else {
                     gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getView().fit(
                         gmodcdash.projAOI,
                         gmodcdash.mapWidgetArray["widgetmap_" + widget.id].getSize()
                     );
                 }
                 collectionName = widget.properties[1];
                 var dateFrom = widget.properties[2];
                 var dateTo = widget.properties[3];
                 //var url = gmodcdash.gateway + "/"+which+"ImageCollection";
                 var url = gmodcdash.gateway + "/ImageCollectionbyIndex";
                 var bands = "";
                 if (widget.properties.length === 5) {
                     bands = widget.properties[4];
                 }
                 /********************/
                 var min = "";
                 var max = "0.3";
                 try {
                     if (widget.min > 0) {
                         min = widget.min;
                     }

                     if (widget.max > 0) {
                         max = widget.max;
                     }
                 }
                 catch (e) { alert(0);}
                 var visParams = {
                     min: min,
                     max: max,
                     bands: bands
                 };
                 //alert(visParams.min + " - " + visParams.max);
                 var theGeometry = []

                 for(var p = 0; p < gmodcdash.projAOI.length; p++)
                 {

                    var nextIndex = 0;
                    if(p < gmodcdash.projAOI.length -1)
                    {
                        nextIndex = p + 1;
                    }
                    var aPoint = []
                    aPoint.push(gmodcdash.projAOI[p])
                    aPoint.push(gmodcdash.projAOI[nextIndex])
                    theGeometry.push(aPoint)
                 }
                 var fPoint = [];
                 fPoint.push(gmodcdash.projAOI[0]);
                 fPoint.push(gmodcdash.projAOI[1]);
                 theGeometry.push(fPoint);

                 $.ajax({
                     url: url,
                     type: "POST",
                     async: true,
                     indexVal: widget.id,
                     crossDomain: true,
                     contentType: "application/json",
                     data: JSON.stringify({
                         collectionName: collectionName,
                         visParams: visParams,
                         dateFrom: dateFrom,
                         dateTo: dateTo,
                         index: which,
                         geometry: theGeometry
                     })
                 }).fail(function (jqXHR, textStatus, errorThrown) {
                     console.info(jqXHR + textStatus + errorThrown);
                 }).done(function (data, _textStatus, _jqXHR) {
                     if (data.errMsg) {
                         console.info(data.errMsg);
                     } else {
                         if (data.hasOwnProperty("mapid")) {
                             geodash.icameback = data;
                             geodash.textStatus = _textStatus;
                             geodash.jqXHR = _jqXHR;
                             var mapId = data.mapid;
                             var token = data.token;
                             var $this = this;
                             geodash.addTileServer(mapId, token, "widgetmap_" + $this.indexVal);
                         } else {
                             console.warn("Wrong Data Returned");
                         }
                     }
                 });

    };
    this.getTimeSeriesByIndex = function(which, widget)
    {
        $.ajax({
            url: this.gateway + "/timeSeriesIndex2",
            type: "POST",
            async: true,
            indexVal: widget.id,
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify({
                collectionNameTimeSeries: widget.properties[1],
                geometry: $.parseJSON(this.projPairAOI),
                indexName: which,
                dateFromTimeSeries: widget.properties[2],
                dateToTimeSeries: widget.properties[3]
            })
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.warn(jqXHR + textStatus + errorThrown);
        }).done(function (data, _textStatus, _jqXHR) {
            if (data.errMsg) {
                console.warn(data.errMsg);
            } else {
                if (data.hasOwnProperty("timeseries")) {
                    geodash.icameback = data;
                    geodash.textStatus = _textStatus;
                    geodash.jqXHR = _jqXHR;
                    timeseriesData = [];
                    $.each(data.timeseries, function (ignore, value) {
                        if (value[0] !== null) {
                            timeseriesData.push([value[0], value[1]]);
                        }
                    });
                    console.info('wow, wow, wow');
                    timeseriesData = timeseriesData.sort(geodash.sortData);
                    var $this = this;
                    text = which;
                    geodash.graphWidgetArray["widgetgraph_" + $this.indexVal] = geodash.createChart($this.indexVal, text, timeseriesData);
                } else {
                    console.warn("Wrong Data Returned");
                }
            }
        });
    };
    this.sortData = function(a, b){

       if (a[0] < b[0]) return -1;
       if (a[0] > b[0]) return 1;
       return 0;

    }
    this.updateWidgetUI = function (which) {
        "use strict";
        var widgetID = which;
        var collectionName;
        var updateWidth = false;
        this.pageWidgets.forEach(function (widget) {
            if (parseInt(widget.id) === parseInt(widgetID)) {
                geodash.updatingWidget = widget;
                return;
            }
        });
        updateWidth = parseInt($("#columns_" + widgetID).val()) !== parseInt(this.updatingWidget.width);
        if (updateWidth) {
            $("#widget_" + widgetID).parent().removeClass(function (ignore, className) {
                return (className.match(/(^|\s)col-sm-\S+/g) || []).join(" ");
            });
            $("#widget_" + widgetID).parent().addClass("col-sm-" + $("#columns_" + widgetID).val());
            this.updatingWidget.width = $("#columns_" + widgetID).val();
        }
        if (this.updatingWidget.properties[0] === "addImageCollection") {
            var themap = this.mapWidgetArray["widgetmap_" + widgetID];
            themap.removeLayer(themap.getLayers().getArray()[1]);
            collectionName = $("#iCollection_" + widgetID).val();
            var dateFrom = $("#sDate_" + widgetID).val();
            var dateTo = $("#eDate_" + widgetID).val();
            var url = this.gateway + "/imageByMosaicCollection";
            var bands = "";
            if ($("#bands_" + widgetID).val().length > 1) {
                bands = $("#bands_" + widgetID).val();
            }
            var min = "";
            if ($("#min_" + widgetID).val().length > 0) {
                min = $("#min_" + widgetID).val();
            }
            var max = "0.3";
            if ($("#max_" + widgetID).val().length > 0) {
                max = $("#max_" + widgetID).val();
            }
            var visParams = {
                min: min,
                max: max,
                bands: bands
            };
            $("#widgettitle_" + widgetID).html($("#title_" + widgetID).val());
            this.imageCollectionAJAX(url, widgetID, collectionName, visParams, dateFrom, dateTo);
            this.mapWidgetArray["widgetmap_" + widgetID].updateSize();
        }
         else if(this.imageCollectionList.includes(this.updatingWidget.properties[0]))
         {
            this.mapWidgetArray["widgetmap_" + widgetID].updateSize();
         }
         else if (this.updatingWidget.properties[0] === "timeSeriesGraph") {
            collectionName = $("#collection_" + widgetID).val();
             this.updatingWidget.properties[2] = $("#sDate_" + widgetID).val();
             this.updatingWidget.properties[3] = $("#eDate_" + widgetID).val();
             var wtitle = $("#title_" + widgetID).val();
             collectionName = collectionName;
             this.updatingWidget.properties[1] = collectionName;
             this.updatingWidget.properties[4] = $("#bands_" + widgetID).val();;
             $.ajax({
                 url: this.gateway + "/timeSeriesIndex",
                 type: "POST",
                 async: true,
                 indexVal: this.updatingWidget.id,
                 crossDomain: true,
                 contentType: "application/json",
                 data: JSON.stringify({
                     collectionNameTimeSeries: this.updatingWidget.properties[1],
                     polygon: $.parseJSON(this.projPairAOI),
                     indexName: this.updatingWidget.properties[4],
                     dateFromTimeSeries: this.updatingWidget.properties[2],
                     dateToTimeSeries: this.updatingWidget.properties[3]
                 })
             }).fail(function (jqXHR, textStatus, errorThrown) {
                 console.warn(jqXHR + textStatus + errorThrown);
             }).done(function (data, _textStatus, _jqXHR) {
                 if (data.errMsg) {
                     console.warn(data.errMsg);
                 } else {
                     if (data.hasOwnProperty("timeseries")) {
                         geodash.icameback = data;
                         geodash.textStatus = _textStatus;
                         geodash.jqXHR = _jqXHR;
                         var timeseriesData = [];

                         $.each(data.timeseries, function (ignore, value) {
                             if (value[0] !== null) {
                                 timeseriesData.push([value[0], value[1]]);
                             }
                         });
                         var $this = this;
                         geodash.graphWidgetArray["widgetgraph_" + $this.indexVal].series[0].setData(timeseriesData, true);// = createChart($this.indexVal, text, timeseriesData);
                     } else {
                         console.warn("Wrong Data Returned");
                     }
                 }
             });
         }
         else if(this.graphCollectionList.includes(this.updatingWidget.properties[0])){

            collectionName = $("#collection_" + widgetID).val();
            this.updatingWidget.properties[2] = $("#sDate_" + widgetID).val();
            this.updatingWidget.properties[3] = $("#eDate_" + widgetID).val();
            var wtitle = $("#title_" + widgetID).val();
            collectionName = collectionName;
            this.updatingWidget.properties[1] = collectionName;

            $.ajax({
                url: this.gateway + "/timeSeriesIndex2",
                type: "POST",
                async: true,
                indexVal: this.updatingWidget.id,
                crossDomain: true,
                contentType: "application/json",
                data: JSON.stringify({
                    collectionNameTimeSeries: '',
                    geometry: $.parseJSON(this.projPairAOI),
                    indexName: this.updatingWidget.properties[4],
                    dateFromTimeSeries: this.updatingWidget.properties[2],
                    dateToTimeSeries: this.updatingWidget.properties[3]
                })
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.warn(jqXHR + textStatus + errorThrown);
            }).done(function (data, _textStatus, _jqXHR) {
                if (data.errMsg) {
                    console.warn(data.errMsg);
                } else {
                    if (data.hasOwnProperty("timeseries")) {
                        geodash.icameback = data;
                        geodash.textStatus = _textStatus;
                        geodash.jqXHR = _jqXHR;
                        var timeseriesData = [];

                        timeseriesData = [];
                        $.each(data.timeseries, function (ignore, value) {
                            if (value[0] !== null) {
                                timeseriesData.push([value[0], value[1]]);
                            }
                        });
                        console.info('wow2, wow, wow');
                        timeseriesData = timeseriesData.sort(geodash.sortData);
                        var $this = this;
                        geodash.graphWidgetArray["widgetgraph_" + $this.indexVal].series[0].setData(timeseriesData, true);
                    } else {
                        console.warn("Wrong Data Returned");
                    }
                }
            });
            try {
                this.graphWidgetArray["widgetgraph_" + widgetID].setSize($("#graphcontainer_" + widgetID).outerWidth(), $("#graphcontainer_" + widgetID).outerHeight(), true);
            } catch (e) {
                console.debug(e.message);
            }
            try {
                this.completeGraph();
            } catch (e2) {
                console.debug(e2.message);
            }
        }
    }
    this.fillOutGraph = function()
    {
         $($('.graphwidget')).height("250px");
        for (var key in gmodcdash.graphWidgetArray) {
            var hashkey = "#" + key;
            $(hashkey).outerHeight($(hashkey).outerHeight() + 50);
            gmodcdash.graphWidgetArray[key].setSize($(hashkey).outerWidth(), $(hashkey).outerHeight(), true);
        }
    }
    this.sendUpdate = function (id, wjson, onlyPosition) {
        "use strict";
        this.ajaxurl = this.theURL + "updatewidget/widget/" + id;
        $.ajax({
            url: this.ajaxurl,
            type: "get",
            dataType: "jsonp",
            indexVal: id,
            data: {
                dashID: this.dashboardID,
                widgetJSON: wjson
            },
            success: function () {
                if(!onlyPosition)
                {
                    geodash.updateWidgetUI(this.indexVal);
                }
                else{
                    if(geodash.graphWidgetArray["widgetgraph_" + this.indexVal] != null ){
                        geodash.graphWidgetArray["widgetgraph_" + this.indexVal].setSize($("#graphcontainer_" + this.indexVal).outerWidth(), $("#graphcontainer_" + this.indexVal).outerHeight(), true);
                    }
                }
            },
            error: function (xhr) {
                debugme = xhr;
            }
        });
    }
    this.updatePosition = function (listObject) {
        "use strict";
        var positionedList = [];
        this.changedList = [];
        this.pageWidgets.forEach(function (widget) {
            if (widget.position !== listObject[widget.id]) {
                widget.position = listObject[widget.id];
                positionedList.push(widget);
                geodash.changedList.push(widget);
            }
            widget.position = listObject[widget.id];
            positionedList.push(widget);
        });
        this.pageWidgets = positionedList.sort(function (a, b) {
            return parseFloat(a.position) - parseFloat(b.position);
        });
        this.changedList.forEach(function (widget) {
            geodash.sendUpdate(widget.id, JSON.stringify(widget), true);
        });
    }
    this.makeDragable = function () {
        "use strict";
        this.panelList = $(".row.placeholders");
        this.panelList.sortable({
            handle: ".panel-heading",
            update: function () {
                geodash.updateList = [];
                $(".placeholder", geodash.panelList).each(function (index, elem) {
                    var $listItem = $(elem);
                    var newIndex = $listItem.index();
                    geodash.updateList[$(elem)["0"].firstChild.id.substring($(elem)["0"].firstChild.id.indexOf("_") + 1)] = newIndex;
                });
                geodash.updatePosition(geodash.updateList);
            }
        });
    }
    this.fillDashboard = function (dashboard) {
        "use strict";

        $("#projectTitle").text(dashboard.projectTitle);
        //wCount = 0;
        this.theDash = dashboard;
        this.dashboardID = dashboard.dashboardID;
        if (typeof this.theDash.widgets[0].id === "undefined" || this.theDash.widgets[0].id === null) {
            try {
                dashboard.widgets = JSON.parse(dashboard.widgets);
            } catch (e) {
                console.warn("dashboard failed: " + e.message);
            }
        }
        dashboard.widgets.sort(function (a, b) {
            return parseFloat(a.position) - parseFloat(b.position);
        });
        if (dashboard.widgets !== null && dashboard.widgets.length > 0) {
            var rowDiv = null;
            dashboard.widgets.forEach(function (widget) {
                if (!rowDiv) {
                    rowDiv = $("<div/>", {
                        "class": "row placeholders"
                    });
                }
                rowDiv.append(geodash.addWidget(widget));
                geodash.pageWidgets.push(widget);
                //wCount += 1;
            });
            if (rowDiv) {
                $("#dashHolder").append(rowDiv);
            }
        }
        this.pageWidgets.forEach(function (widget) {
            geodash.initWidget(widget);
        });

        $(".input-daterange input").each(function () {
            try {
                $(this).datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat: "yy-mm-dd"
                });
            } catch (e) {
                console.warn(e.message);
            }
        });
        this.makeDragable();

        $("#btnNewWidget").show();

    }
    this.updatewidget = function (which) {
        "use strict";
        var widgetID = which.id.replace("savebutton_", "");
        var outWidget;
        this.pageWidgets.forEach(function (widget) {
            if (parseInt(widget.id) === parseInt(widgetID)) {
                geodash.updatingWidget = widget;
                return;
            }
        });
        if (this.updatingWidget.properties[0] === "getStats") {
            if (parseInt(this.updatingWidget.width) !== parseInt($("#columns_" + widgetID).val())) {
                var newObject = $.extend(true, {}, this.updatingWidget);
                newObject.width = $("#columns_" + widgetID).val();
                this.sendUpdate(this.updatingWidget.id, JSON.stringify(newObject));
            }
        } else {

        /******************May have to rework what is updatable*********************/

            var newProperties = [];
            outWidget = {};
            newProperties.push(this.updatingWidget.properties[0]);
            var collection = $("#iCollection_" + widgetID).val();
            if(collection == null   || collection == "")
            {
                collection = $("#collection_" + widgetID).val();
            }
            newProperties.push(collection);
            var startDate = $("#sDate_" + widgetID).val();
            newProperties.push(startDate);
            var endDate = $("#eDate_" + widgetID).val();
            newProperties.push(endDate);
            var wtitle = $("#title_" + widgetID).val();

            var bands = $("#bands_" + widgetID).val();
            newProperties.push(bands);
            var columns = $("#columns_" + widgetID).val();
            outWidget.id = parseInt(widgetID);
            outWidget.name = wtitle;
            outWidget.properties = newProperties;
            /* add min and max here */
            outWidget.min = $("#min_" + widgetID).val();
            outWidget.max = $("#max_" + widgetID).val();
            outWidget.width = columns;
            outWidget.position = this.updatingWidget.position;
            var wjson = JSON.stringify(outWidget);
            this.sendUpdate(widgetID, wjson);
        }
    }
    this.removeWidgetFromUI = function (wID) {
        "use strict";
        wID = parseInt(wID);
        if (this.pageWidgets.grabElement("id", wID).properties[0] === "addImageCollection") {
            delete this.graphWidgetArray["widgetmap_" + wID];
        } else if (this.pageWidgets.grabElement("id", wID).properties[0] === "timeSeriesGraph") {
            delete this.graphWidgetArray["widgetgraph_" + wID];
        }
        $("#widget_" + wID).parent().remove();
        this.pageWidgets.removeValue("id", wID);
    }
    this.deleteWidget = function (which) {
        "use strict";
        var widgetID = which.id.replace("deletebutton_", "");
        this.removeWidgetFromUI(widgetID);
        this.ajaxurl = this.theURL + "deletewidget/widget/" + widgetID;
        $.ajax({
            url: this.ajaxurl,
            type: "get",
            dataType: "jsonp",
            data: {
                dashID: this.dashboardID
            },
            success: function (xhr) {
                debugme = xhr;
            },
            error: function (xhr) {
                debugme = xhr;
            }
        });
    }
    this.createNewWidget = function () {
        "use strict";
       // geodash.resetMainTypes();
        //this.cookedNDVIImage = true;

        geodash.dialog.dialog("open");

        document.getElementById("mainType").value = geodash.mainwidgetTypeSelected.$$hashKey;
        //$scope.$digest(function(){ this.updatemainwidgetType({id:'imageCollectionNDVI'}); });
        //this.updatemainwidgetType({id:'imageCollectionNDVI'});
    }
    this.getParameterByName = function (name, url) {
        "use strict";
        if (!url) {
            url = window.location.href;
        }
        url = decodeURIComponent(url);
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return "";
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    this.swapElements = function (obj1, obj2) {
        "use strict";
        obj1 = obj1.get(0);
        var temp = document.createElement("div");
        if (obj1.parentNode) {
            obj1.parentNode.insertBefore(temp, obj1);
        } else {
            obj1.parent().insertBefore(temp, obj1);
        }
        if (obj2.parentNode) {
            obj2.parentNode.insertBefore(obj1, obj2);
        } else {
            obj2.parent().insertBefore(obj1, obj2);
        }
        if (temp.parentNode) {
            temp.parentNode.insertBefore(obj2, temp);
            temp.parentNode.removeChild(temp);
        } else {
            temp.parent().insertBefore(obj2, temp);
            temp.parent().removeChild(temp);
        }
    }
    this.fixGraphSize = function(which)
    {
    console.info(which.id);
        width = $(which).outerWidth();
        height = $(which).outerHeight();
        console.info(width);
        geodash.graphWidgetArray[which.id].setSize(width, height, true)
    }
    this.makeAdjustable = function () {
        "use strict";
        $(".panel-fullscreen").click(function (e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.children("i").hasClass("glyphicon-resize-full")) {
                $this.children("i").removeClass("glyphicon-resize-full");
                $this.children("i").addClass("glyphicon-resize-small");
            } else if ($this.children("i").hasClass("glyphicon-resize-small")) {
                $this.children("i").removeClass("glyphicon-resize-small");
                $this.children("i").addClass("glyphicon-resize-full");
            }
            $this.closest(".panel").toggleClass("panel-fullscreen");
            var theWidget = $this.parent().parent().parent().parent();
            geodash.swapElements(theWidget, document.getElementById("fullholder"));
            var width = 0;
            var height = 0;
            if (geodash.wStateFull) {
                $("section#content").css('overflow', 'auto')
            }
            else{
                $("section#content").css('overflow', 'hidden')
            }
            if (theWidget.children().children().children()[2].id.includes("widgetmap_")) {
                var mapdivid = "widgetmap_" + $(theWidget).attr("id").substring(7);
                if (geodash.wStateFull) {

                    $(theWidget).css("height", "auto");
                    $("#fulldiv").css("z-index", "0");
                    $(theWidget).css("margin-bottom", "20px");
                    $("#" + mapdivid).removeClass("fullmapwidget");
                    $("#" + mapdivid).addClass("minmapwidget");
                    $(theWidget.children()[1]).height("auto");
                } else {

                    $("#content").scrollTop(0);
                    $("#fulldiv").css("z-index", "1031");
                    $(theWidget).css("height", "100%");
                    $(theWidget).css("margin-bottom", "0");
                    $("#" + mapdivid).removeClass("minmapwidget");
                    $("#" + mapdivid).addClass("fullmapwidget");
                    $(theWidget.children()[1]).height("100%");
                }
                geodash.wStateFull = !geodash.wStateFull;
                geodash.mapWidgetArray[mapdivid].updateSize();
            } else if (theWidget.children().children().children()[2].id.includes("widgetgraph_")) {
                var graphdivid = "widgetgraph_" + $(theWidget).attr("id").substring(7);
                if (geodash.wStateFull) {
                 /*************add graphwidget class back to graphcontainer_ + ID****************/
                 $('#' + graphdivid).addClass("graphwidget");
                    $(theWidget).css("height", "auto");
                    $("#fulldiv").css("z-index", "0");
                    $(theWidget).css("margin-bottom", "20px");
                    $("#" + graphdivid).removeClass("fullmapwidget");
                    $("#" + graphdivid).addClass("minmapwidget");
                    $(theWidget.children()[1]).height("auto");
                } else {
                 /*************remove graphwidget class from graphcontainer_ + ID****************/
                  $('#' + graphdivid).removeClass("graphwidget");
                    $("#content").scrollTop(0);
                    $("#fulldiv").css("z-index", "1031");
                    $(theWidget).css("height", "100%");
                    $(theWidget).css("margin-bottom", "0");
                    $("#" + graphdivid).removeClass("minmapwidget");
                    $("#" + graphdivid).addClass("fullmapwidget");
                    $(theWidget.children()[1]).height("100%");
                }
                width = $("#" + graphdivid).outerWidth();
                height = $("#" + graphdivid).outerHeight();
                geodash.wStateFull = !geodash.wStateFull;
                geodash.graphWidgetArray[graphdivid].setSize(width, height, true);
                window.setTimeout('gmodcdash.fixGraphSize('+graphdivid+')', 550);
               // geodash.completeGraph();
            } else if (theWidget.children().children().children()[2].id.includes("widgetstats_")) {
                var statsdivid = "widgetstats_" + $(theWidget).attr("id").substring(7);
                if (geodash.wStateFull) {
                    $(theWidget).css("height", "auto");
                    $("#fulldiv").css("z-index", "0");
                    $(theWidget).css("margin-bottom", "20px");
                    $("#" + statsdivid).removeClass("fullmapwidget");
                    $("#" + statsdivid).addClass("minmapwidget");
                } else {
                    $("#content").scrollTop(0);
                    $("#fulldiv").css("z-index", "1031");
                    $(theWidget).css("height", "100%");
                    $(theWidget).css("margin-bottom", "0");
                    $("#" + statsdivid).removeClass("minmapwidget");
                    $("#" + statsdivid).addClass("fullmapwidget");
                }
                width = $("#" + statsdivid).outerWidth();
                height = $("#" + statsdivid).outerHeight();
                geodash.wStateFull = !geodash.wStateFull;
            }
        });
    }
    this.createWidget = function (which) {
        "use strict";
        this.ajaxurl = this.theURL + "createwidget/widget";
        $.ajax({
            url: this.ajaxurl,
            type: "get",
            dataType: "jsonp",
            widget: JSON.stringify(which),
            data: {
                dashID: this.dashboardID,
                widgetJSON: JSON.stringify(which)
            },
            success: function () {
                var myWidget = JSON.parse(this.widget);
                superWidget = myWidget;
                if ($(".row.placeholders").length > 0) {
                    $(".row.placeholders")[0].append(geodash.addWidget(myWidget)[0]);
                }
                else {
                    var rowDiv = $("<div/>", {
                        "class": "row placeholders"
                    });

                    rowDiv.append(geodash.addWidget(myWidget));


                    $("#dashHolder").append(rowDiv);
                }

                geodash.pageWidgets.push(myWidget);
                //geodash.pageWidgets.push(myWidget);
                geodash.initWidget(geodash.pageWidgets[geodash.pageWidgets.length - 1]);
                geodash.makeAdjustable();
                gmodcdash.makeDragable();
            },
            error: function (xhr) {
                debugme = xhr;
            }
        });
    }
    this.createUserWidget = function () {
        "use strict";
        var newWidget = {};
        var newid = 0;
        var newposition = 0;
        var readyToGo = false;
        if (geodash.pageWidgets.length > 0) {
            geodash.pageWidgets.sort(function (a, b) {
                return parseInt(a.id) - parseInt(b.id);
            });
            newid = geodash.pageWidgets[geodash.pageWidgets.length - 1].id + 1;

            geodash.pageWidgets.sort(function (a, b) {
                return parseInt(a.position) - parseInt(b.position);
            });
            var newposition = geodash.pageWidgets[geodash.pageWidgets.length - 1].position + 1;
        }

        if ($("#mainform").is(":visible")) {

            newWidget.name = $("#title").val();
            newWidget.width = $("#columns").val();
            newWidget.id = newid;
            newWidget.properties = [$("#widgetType").val(), $("#iCollection").val(), $("#sDate_new").val(), $("#eDate_new").val(), $("#bands").val()];
            newWidget.position = newposition;
            readyToGo = true;
        } else if (geodash.cookedStats === true) {

            newWidget.name = $("#stattitle").val();
            newWidget.width = $("#statcolumns").val();
            newWidget.id = newid;
            newWidget.properties = ["getStats", "poly", ""];
            newWidget.position = newposition;
            readyToGo = true;
        }
        else if(geodash.cookedImage === true)
        {
            newWidget.name = $("#cookedImageTitle").val();
            newWidget.width = $("#cookedImageColumns").val();
            newWidget.id = newid;
            newWidget.position = newposition;
            readyToGo = true;
            if(geodash.cookedNDVIImage === true){
                newWidget.properties = ['ImageCollectionNDVI', ' ', $("#sDate_new").val(), $("#eDate_new").val(), 'NDVI'];
            }
            else if(geodash.cookedEVIImage === true){
                    newWidget.properties = ['ImageCollectionEVI', ' ', $("#sDate_new").val(), $("#eDate_new").val(), 'EVI'];
            }
            else if(geodash.cookedEVI2Image === true){
                newWidget.properties = ['ImageCollectionEVI2', ' ', $("#sDate_new").val(), $("#eDate_new").val(), 'EVI2'];
            }
            else if(geodash.cookedNDMIImage === true){
                    newWidget.properties = ['ImageCollectionNDMI', ' ', $("#sDate_new").val(), $("#eDate_new").val(), 'NDMI'];
            }
            else if(geodash.cookedNDWIImage === true){
                    newWidget.properties = ['ImageCollectionNDWI', ' ', $("#sDate_new").val(), $("#eDate_new").val(), 'NDWI'];
            }
        }
         else if(geodash.cookedGraph === true){
            newWidget.name = $("#cookedGraphTitle").val();
            newWidget.width = $("#cookedGraphColumns").val();
            newWidget.id = newid;
            newWidget.position = newposition;
            readyToGo = true;
            if(geodash.cookedNDVIGraph === true){
             newWidget.properties = ['ndviTimeSeries', ' ', $("#sDate_new_cooked_graph").val(), $("#eDate_new_cooked_graph").val(), 'NDVI'];
            }
            else if(geodash.cookedEVIGraph === true){
                newWidget.properties = ['eviTimeSeries', ' ', $("#sDate_new_cooked_graph").val(), $("#eDate_new_cooked_graph").val(), 'EVI'];
            }
            else if(geodash.cookedEVI2Graph === true){
                newWidget.properties = ['evi2TimeSeries', ' ', $("#sDate_new_cooked_graph").val(), $("#eDate_new_cooked_graph").val(), 'EVI2'];
            }
            else if(geodash.cookedNDMIGraph === true){
                newWidget.properties = ['ndmiTimeSeries', ' ', $("#sDate_new_cooked_graph").val(), $("#eDate_new_cooked_graph").val(), 'NDMI'];
            }
            else if(geodash.cookedNDWIGraph === true){
                newWidget.properties = ['ndwiTimeSeries', ' ', $("#sDate_new_cooked_graph").val(), $("#eDate_new_cooked_graph").val(), 'NDWI'];
            }
        }
        if(readyToGo === true)
        {
            geodash.createWidget(newWidget);
        }
        geodash.dialog.dialog("close");
    }



    this.tryMeNow = function () {
        "use strict";
        $.ajax({
            url: this.ajaxurl,
            type: "post",
            dataType: "jsonp",
            data: {
                title: this.title
            },
            success: function (response) {
                debugme = response;
                geodash.fillDashboard(response);
                geodash.makeAdjustable();
            },
            error: function (xhr) {
                debugme = xhr;
                console.warn("error" + debugme);
            }
        });
    }
}]);

angular.module("geodashadmin").factory('svc', function () {
    var msg = "original...";
    return {
        setMessage: function (x) {
            msg = x;
        },
        getMessage: function () {
            return msg;
        }
    };
});
Array.prototype.removeValue = function (name, value) {
    "use strict";
    var array = $.map(this, function (v, ignore) {
        return v[name] === value
            ? null
            : v;
    });
    this.length = 0;
    this.push.apply(this, array);
};
Array.prototype.grabElement = function (name, value) {
    "use strict";
    var array = $.map(this, function (v, ignore) {
        return v[name] === value
            ? v
            : null;
    });
    return array[0];
};
var superWidget;
