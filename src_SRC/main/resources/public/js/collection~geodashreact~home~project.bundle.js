(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["collection~geodashreact~home~project"],{

/***/ "./src/main/resources/public/js/mercator-openlayers.js":
/*!*************************************************************!*\
  !*** ./src/main/resources/public/js/mercator-openlayers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*****************************************************************************
***
*** Mercator-OpenLayers.js
***
*** Author: Gary W. Johnson
*** Copyright: 2017-2018 Spatial Informatics Group, LLC
*** License: LGPLv3
***
*** Description: This library provides a set of functions for
*** interacting with embedded web maps in an API agnostic manner. This
*** file contains the OpenLayers 3 implementation.
***
******************************************************************************
***
*** Toplevel namespace object
***
*****************************************************************************/
var mercator = {};
/*****************************************************************************
***
*** Lon/Lat Reprojection
***
*** The default map projection for most web maps (e.g., OpenLayers,
*** OpenStreetMap, Google Maps, MapQuest, and Bing Maps) is "Web
*** Mercator" (EPSG:3857).
***
*****************************************************************************/
// [Pure] Returns the passed in [longitude, latitude] values
// reprojected to Web Mercator as [x, y].

mercator.reprojectToMap = function (longitude, latitude) {
  return ol.proj.transform([Number(longitude), Number(latitude)], "EPSG:4326", "EPSG:3857");
}; // [Pure] Returns the passed in [x, y] values reprojected to WGS84 as
// [longitude, latitude].


mercator.reprojectFromMap = function (x, y) {
  return ol.proj.transform([Number(x), Number(y)], "EPSG:3857", "EPSG:4326");
}; // [Pure] Returns a bounding box for the globe in Web Mercator as
// [llx, lly, urx, ury].


mercator.getFullExtent = function () {
  var llxy = mercator.reprojectToMap(-180.0, -89.999999);
  var urxy = mercator.reprojectToMap(180.0, 90.0);
  return [llxy[0], llxy[1], urxy[0], urxy[1]];
}; // [Pure] Returns a bounding box for the current map view in WGS84
// lat/lon as [llx, lly, urx, ury].


mercator.getViewExtent = function (mapConfig) {
  var size = mapConfig.map.getSize();
  var extent = mapConfig.view.calculateExtent(size);
  return ol.proj.transformExtent(extent, "EPSG:3857", "EPSG:4326");
}; // [Pure] Returns the minimum distance in meters from the view center
// to the view extent.


mercator.getViewRadius = function (mapConfig) {
  var size = mapConfig.map.getSize();

  var _mapConfig$view$calcu = mapConfig.view.calculateExtent(size),
      _mapConfig$view$calcu2 = _slicedToArray(_mapConfig$view$calcu, 4),
      llx = _mapConfig$view$calcu2[0],
      lly = _mapConfig$view$calcu2[1],
      urx = _mapConfig$view$calcu2[2],
      ury = _mapConfig$view$calcu2[3];

  var width = Math.abs(urx - llx);
  var height = Math.abs(ury - lly);
  return Math.min(width, height) / 2.0;
};
/*****************************************************************************
***
*** Create map source and layer objects from JSON descriptions
***
*****************************************************************************/
// [Pure] Returns a new ol.source.* object or null if the sourceConfig
// is invalid.


mercator.createSource = function (sourceConfig) {
  if (sourceConfig.type == "DigitalGlobe") {
    return new ol.source.XYZ({
      url: "https://api.tiles.mapbox.com/v4/" + sourceConfig.imageryId + "/{z}/{x}/{y}.png?access_token=" + sourceConfig.accessToken,
      attribution: "© DigitalGlobe, Inc"
    });
  } else if (sourceConfig.type == "Planet") {
    return new ol.source.XYZ({
      url: "https://tiles{0-3}.planet.com/basemaps/v1/planet-tiles/global_monthly_" + sourceConfig.year + "_" + sourceConfig.month + "_mosaic/gmap/{z}/{x}/{y}.png?api_key=" + sourceConfig.accessToken,
      attribution: "© Planet Labs, Inc"
    });
  } else if (sourceConfig.type == "BingMaps") {
    return new ol.source.BingMaps({
      imagerySet: sourceConfig.imageryId,
      key: sourceConfig.accessToken,
      maxZoom: 19
    });
  } else if (sourceConfig.type == "GeoServer") {
    return new ol.source.TileWMS({
      serverType: "geoserver",
      url: sourceConfig.geoserverUrl,
      params: sourceConfig.geoserverParams
    });
  } else if (sourceConfig.type == "GeeGateway") {
    //get variables and make ajax call to get mapid and token
    //then add xyz layer
    //const fts = {'LANDSAT5': 'Landsat5Filtered', 'LANDSAT7': 'Landsat7Filtered', 'LANDSAT8':'Landsat8Filtered', 'Sentinel2': 'FilteredSentinel'};
    //const url = "http://collect.earth:8888/" + fts[sourceConfig.geeParams.filterType];
    var url = sourceConfig.geeUrl;
    var cloudVar = sourceConfig.geeParams.visParams.cloudLessThan ? parseInt(sourceConfig.geeParams.visParams.cloudLessThan) : '';
    var theJson = {
      dateFrom: sourceConfig.geeParams.startDate,
      dateTo: sourceConfig.geeParams.endDate,
      bands: sourceConfig.geeParams.visParams.bands,
      min: sourceConfig.geeParams.visParams.min,
      max: sourceConfig.geeParams.visParams.max,
      cloudLessThan: cloudVar,
      visParams: sourceConfig.geeParams.visParams
    };

    if (sourceConfig.geeParams.ImageAsset) {
      theJson.imageName = sourceConfig.geeParams.ImageAsset;
    }

    var theID = Math.random().toString(36).substr(2, 16) + '_' + Math.random().toString(36).substr(2, 9);
    var geeLayer = new ol.source.XYZ({
      url: "https://earthengine.googleapis.com/map/temp/{z}/{x}/{y}?token=",
      id: theID
    });
    geeLayer.setProperties({
      id: theID
    });
    var createtype = 'test';

    if (sourceConfig.create) {
      $.ajax({
        url: url,
        type: "POST",
        async: true,
        crossDomain: true,
        contentType: "application/json",
        mapConfig: sourceConfig,
        LayerId: theID,
        data: JSON.stringify(theJson)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.warn(jqXHR + textStatus + errorThrown);
      }).done(function (data, _textStatus, _jqXHR) {
        if (data.errMsg) {
          console.info(data.errMsg);
        } else {
          if (data.hasOwnProperty("mapid")) {
            var _geeLayer = new ol.source.XYZ({
              url: "https://earthengine.googleapis.com/map/" + data.mapid + "/{z}/{x}/{y}?token=" + data.token
            });

            var layer;
            var LayerId = this.LayerId;
            mercator.currentMap.getLayers().forEach(function (lyr) {
              if (LayerId && LayerId == lyr.getSource().get('id')) {
                layer = lyr;
                layer.setSource(_geeLayer);
              }
            });
          } else {
            console.warn("Wrong Data Returned");
          }
        }
      });
    }

    return geeLayer;
  } else {
    return null;
  }
}; // [Pure] Returns a new ol.layer.Tile object or null if the
// layerConfig is invalid.


mercator.createLayer = function (layerConfig) {
  layerConfig.sourceConfig.create = true;
  var source = mercator.createSource(layerConfig.sourceConfig);

  if (source == null) {
    return null;
  } else if (layerConfig.extent != null) {
    return new ol.layer.Tile({
      title: layerConfig.title,
      visible: false,
      extent: layerConfig.extent,
      source: source
    });
  } else {
    return new ol.layer.Tile({
      title: layerConfig.title,
      visible: false,
      source: source
    });
  }
};
/*****************************************************************************
***
*** Functions to verify map input arguments
***
*****************************************************************************/
// [Pure] Predicate


mercator.verifyDivName = function (divName) {
  return document.getElementById(divName) != null;
}; // [Pure] Predicate


mercator.verifyCenterCoords = function (centerCoords) {
  var lon = centerCoords[0];
  var lat = centerCoords[1];
  return lon >= -180 && lon <= 180 && lat >= -90 && lat <= 90;
}; // [Pure] Predicate


mercator.verifyZoomLevel = function (zoomLevel) {
  return zoomLevel >= 0 && zoomLevel <= 20;
}; // [Pure] Predicate


mercator.verifyLayerConfig = function (layerConfig) {
  var layerKeys = Object.keys(layerConfig);
  return layerKeys.includes("title") && layerKeys.includes("extent") && layerKeys.includes("sourceConfig") && mercator.createSource(layerConfig.sourceConfig) != null;
}; // [Pure] Predicate


mercator.verifyLayerConfigs = function (layerConfigs) {
  return layerConfigs.every(mercator.verifyLayerConfig);
};

mercator.currentMap = null; // [Pure] Returns the first error message generated while testing the
// input arguments or null if all tests pass.

mercator.verifyMapInputs = function (divName, centerCoords, zoomLevel, layerConfigs) {
  if (!mercator.verifyDivName(divName)) {
    return "Invalid divName -> " + divName;
  } else if (!mercator.verifyCenterCoords(centerCoords)) {
    return "Invalid centerCoords -> " + centerCoords;
  } else if (!mercator.verifyZoomLevel(zoomLevel)) {
    return "Invalid zoomLevel -> " + zoomLevel;
  } else if (!mercator.verifyLayerConfigs(layerConfigs)) {
    return "Invalid layerConfigs -> " + layerConfigs;
  } else {
    return null;
  }
};
/*****************************************************************************
***
*** Create a new map instance
***
*****************************************************************************/
// [Side Effects] Logs an error message to the console and returns
// null if the inputs are invalid. Otherwise, displays a map in the
// named div and returns its configuration object.
//
// Example call:
// var mapConfig = mercator.createMap("some-div-id", [102.0, 17.0], 5,
//                                    [{title: "DigitalGlobeRecentImagery",
//                                      extent: null,
//                                      sourceConfig: {type: "DigitalGlobe",
//                                                     imageryId: "digitalglobe.nal0g75k",
//                                                     accessToken: "your-digital-globe-access-token-here"}},
//                                     {title: "BingAerial",
//                                      extent: null,
//                                      sourceConfig: {type: "BingMaps",
//                                                     imageryId: "Aerial",
//                                                     accessToken: "your-bing-maps-access-token-here"}},
//                                     {title: "DigitalGlobeWMSImagery",
//                                      extent: null,
//                                      sourceConfig: {type: "GeoServer",
//                                                     geoserverUrl: "https://services.digitalglobe.com/mapservice/wmsaccess",
//                                                     geoserverParams: {VERSION: "1.1.1",
//                                                                       LAYERS: "DigitalGlobe:Imagery",
//                                                                       CONNECTID: "your-digital-globe-connect-id-here"}}}]);


mercator.createMap = function (divName, centerCoords, zoomLevel, layerConfigs) {
  var errorMsg = mercator.verifyMapInputs(divName, centerCoords, zoomLevel, layerConfigs);

  if (errorMsg) {
    console.error(errorMsg);
    return null;
  } else {
    // Create each of the layers that will be shown in the map from layerConfigs
    var layers = layerConfigs.map(mercator.createLayer); // Add a scale line to the default map controls

    var controls = ol.control.defaults().extend([new ol.control.ScaleLine()]); // Create the map view using the passed in centerCoords and zoomLevel

    var view = new ol.View({
      projection: "EPSG:3857",
      center: ol.proj.fromLonLat(centerCoords),
      extent: mercator.getFullExtent(),
      zoom: zoomLevel
    }); // Create the new map object

    var map = new ol.Map({
      target: divName,
      layers: layers,
      controls: controls,
      view: view
    });
    mercator.currentMap = map; // Return the map configuration object

    return {
      init: {
        divName: divName,
        centerCoords: centerCoords,
        zoomLevel: zoomLevel,
        layerConfigs: layerConfigs
      },
      layers: map.getLayers(),
      controls: controls,
      view: view,
      map: map
    };
  }
};
/*****************************************************************************
***
*** Destroy a map instance
***
*****************************************************************************/
// [Side Effects] Removes the mapConfig's map from its container div.
// Returns null.


mercator.destroyMap = function (mapConfig) {
  document.getElementById(mapConfig.init.divName).innerHTML = "";
  return null;
};
/*****************************************************************************
***
*** Reset a map instance to its initial state
***
*****************************************************************************/
// [Side Effects] Returns a new mapConfig object created with the
// initialization-time values of the passed-in mapConfig. Removes the
// original mapConfig's map from its container div and renders the new
// mapConfig's map into it instead.
//
// Example call:
// var newMapConfig = mercator.resetMap(mapConfig);


mercator.resetMap = function (mapConfig) {
  mercator.destroyMap(mapConfig);
  return mercator.createMap(mapConfig.init.divName, mapConfig.init.centerCoords, mapConfig.init.zoomLevel, mapConfig.init.layerConfigs);
};
/*****************************************************************************
***
*** Functions to switch the visible basemap imagery and zoom to a layer
***
*****************************************************************************/
// [Side Effects] Hides all raster layers in mapConfig except those
// with title == layerTitle.


mercator.setVisibleLayer = function (mapConfig, layerTitle) {
  mapConfig.layers.forEach(function (layer) {
    if (layer.getVisible() == true && layer instanceof ol.layer.Tile) {
      layer.setVisible(false);
    }

    if (layer.get("title") == layerTitle) {
      layer.setVisible(true);
    }
  });
  return mapConfig;
}; // [Pure] Returns the map layer with title == layerTitle or null if no
// such layer exists.


mercator.getLayerByTitle = function (mapConfig, layerTitle) {
  return mapConfig.layers.getArray().find(function (layer) {
    return layer.get("title") == layerTitle;
  });
}; // [Pure] Returns the initial layerConfig for the map layer with title
// == layerTitle or null if no such layer exists.


mercator.getLayerConfigByTitle = function (mapConfig, layerTitle) {
  return mapConfig.init.layerConfigs.find(function (layerConfig) {
    return layerConfig.title == layerTitle;
  });
}; // [Side Effects] Finds the map layer with title == layerTitle and
// applies transformer to its initial sourceConfig to create a new
// source for the layer.


mercator.updateLayerSource = function (mapConfig, layerTitle, transformer, caller) {
  var layer = mercator.getLayerByTitle(mapConfig, layerTitle);
  var layerConfig = mercator.getLayerConfigByTitle(mapConfig, layerTitle);

  if (layer && layerConfig) {
    layer.setSource(mercator.createSource(transformer.call(caller, layerConfig.sourceConfig)));
  }
}; // [Side Effects] Finds the map layer with title == layerTitle and
// appends newParams to its source's WMS params object.
//
// Example call:
// var mapConfig2 = mercator.updateLayerWmsParams(mapConfig,
//                                                "DigitalGlobeWMSImagery",
//                                                {COVERAGE_CQL_FILTER: "(acquisition_date>='" + imageryYear + "-01-01')"
//                                                                 + "AND(acquisition_date<='" + imageryYear + "-12-31')",
//                                                 FEATUREPROFILE: stackingProfile});


mercator.updateLayerWmsParams = function (mapConfig, layerTitle, newParams) {
  var layer = mercator.getLayerByTitle(mapConfig, layerTitle);

  if (layer) {
    var mergedParams = Object.assign({}, layer.getSource().getParams(), newParams);
    layer.getSource().updateParams(mergedParams);
  }

  return mapConfig;
}; // [Side Effects] Zooms the map view to contain the passed in extent.


mercator.zoomMapToExtent = function (mapConfig, extent, maxZoom) {
  mapConfig.view.fit(extent, mapConfig.map.getSize(), {
    maxZoom: maxZoom || 19
  });
  return mapConfig;
}; // [Side Effects] Zooms the map view to contain the layer with
// title == layerTitle.


mercator.zoomMapToLayer = function (mapConfig, layerTitle, maxZoom) {
  var layer = mercator.getLayerByTitle(mapConfig, layerTitle);

  if (layer) {
    mercator.zoomMapToExtent(mapConfig, layer.getSource().getExtent(), maxZoom);
  }

  return mapConfig;
};
/*****************************************************************************
***
*** Functions to create map styles
***
*****************************************************************************/
// [Pure] Returns a style object that displays the image at imageSrc.


mercator.getIconStyle = function (imageSrc) {
  return new ol.style.Style({
    image: new ol.style.Icon({
      src: imageSrc
    })
  });
}; // [Pure] Returns a style object that displays a circle with the
// specified radius, fillColor, borderColor, and borderWidth. If text
// and textFillColor are also passed, they will be used to overlay
// text on the circle.


mercator.getCircleStyle = function (radius, fillColor, borderColor, borderWidth, text, textFillColor) {
  if (text == null || textFillColor == null) {
    return new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: fillColor ? new ol.style.Fill({
          color: fillColor
        }) : null,
        stroke: new ol.style.Stroke({
          color: borderColor,
          width: borderWidth
        })
      })
    });
  } else {
    return new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: fillColor ? new ol.style.Fill({
          color: fillColor
        }) : null,
        stroke: new ol.style.Stroke({
          color: borderColor,
          width: borderWidth
        })
      }),
      text: new ol.style.Text({
        text: text.toString(),
        fill: new ol.style.Fill({
          color: textFillColor
        })
      })
    });
  }
}; // [Pure] Returns a style object that displays a shape with the
// specified number of points, radius, rotation, fillColor,
// borderColor, and borderWidth. A triangle has 3 points. A square has
// 4 points with rotation pi/4. A star has 5 points.


mercator.getRegularShapeStyle = function (radius, points, rotation, fillColor, borderColor, borderWidth) {
  return new ol.style.Style({
    image: new ol.style.RegularShape({
      radius: radius,
      points: points,
      rotation: rotation || 0,
      fill: fillColor ? new ol.style.Fill({
        color: fillColor
      }) : null,
      stroke: new ol.style.Stroke({
        color: borderColor,
        width: borderWidth
      })
    })
  });
}; // [Pure] Returns a style object that displays any shape to which it
// is applied wth the specified fillColor, borderColor, and
// borderWidth.


mercator.getPolygonStyle = function (fillColor, borderColor, borderWidth) {
  return new ol.style.Style({
    fill: fillColor ? new ol.style.Fill({
      color: fillColor
    }) : null,
    stroke: new ol.style.Stroke({
      color: borderColor,
      width: borderWidth
    })
  });
};

var ceoMapStyles = {
  icon: mercator.getIconStyle("favicon.ico"),
  ceoIcon: mercator.getIconStyle("ceoicon.png"),
  redPoint: mercator.getCircleStyle(5, null, "#8b2323", 2),
  bluePoint: mercator.getCircleStyle(5, null, "#23238b", 2),
  yellowPoint: mercator.getCircleStyle(5, null, "yellow", 2),
  redCircle: mercator.getCircleStyle(5, null, "red", 2),
  yellowCircle: mercator.getCircleStyle(5, null, "yellow", 2),
  greenCircle: mercator.getCircleStyle(5, null, "green", 2),
  redSquare: mercator.getRegularShapeStyle(5, 4, Math.PI / 4, null, "red", 2),
  yellowSquare: mercator.getRegularShapeStyle(5, 4, Math.PI / 4, null, "yellow", 2),
  greenSquare: mercator.getRegularShapeStyle(5, 4, Math.PI / 4, null, "green", 2),
  cluster: mercator.getCircleStyle(5, "#8b2323", "#ffffff", 1),
  polygon: mercator.getPolygonStyle(null, "yellow", 3)
};
/*****************************************************************************
***
*** Functions to draw project boundaries and plot buffers
***
*****************************************************************************/
// [Side Effects] Adds a new vector layer to the mapConfig's map object.

mercator.addVectorLayer = function (mapConfig, layerTitle, vectorSource, style) {
  var vectorLayer = new ol.layer.Vector({
    title: layerTitle,
    source: vectorSource,
    style: style
  });
  mapConfig.map.addLayer(vectorLayer);
  return mapConfig;
}; // [Side Effects] Removes the layer with title == layerTitle from
// mapConfig's map object.


mercator.removeLayerByTitle = function (mapConfig, layerTitle) {
  var layer = mercator.getLayerByTitle(mapConfig, layerTitle);

  if (layer) {
    mapConfig.map.removeLayer(layer);
  }

  return mapConfig;
}; // [Pure] Returns a geometry object representing the shape described
// in the passed in GeoJSON string. If reprojectToMap is true,
// reproject the created geometry from WGS84 to Web Mercator before
// returning.


mercator.parseGeoJson = function (geoJson, reprojectToMap) {
  var format = new ol.format.GeoJSON();
  var geometry = format.readGeometry(geoJson);

  if (reprojectToMap) {
    return geometry.transform("EPSG:4326", "EPSG:3857");
  } else {
    return geometry;
  }
}; // [Pure] Returns a new vector source containing the passed in geometry.


mercator.geometryToVectorSource = function (geometry) {
  return new ol.source.Vector({
    features: [new ol.Feature({
      geometry: geometry
    })]
  });
}; // [Pure] Returns a polygon geometry matching the passed in
// parameters.


mercator.getPlotPolygon = function (center, size, shape) {
  var coords = mercator.parseGeoJson(center, true).getCoordinates();
  var centerX = coords[0];
  var centerY = coords[1];
  var radius = size / 2;

  if (shape == "circle") {
    return new ol.geom.Circle([centerX, centerY], radius);
  } else {
    return ol.geom.Polygon.fromExtent([centerX - radius, centerY - radius, centerX + radius, centerY + radius]);
  }
}; // [Pure] Returns a bounding box for the plot in Web Mercator as [llx,
// lly, urx, ury].


mercator.getPlotExtent = function (center, size, shape) {
  var geometry = mercator.getPlotPolygon(center, size, shape);
  return ol.proj.transformExtent(geometry.getExtent(), "EPSG:3857", "EPSG:4326");
}; // [Pure] Returns a new vector source containing the passed in plots.
// Features are constructed from each plot using its id and center
// fields.


mercator.plotsToVectorSource = function (plots) {
  var features = plots.map(function (plot) {
    var geometry = mercator.parseGeoJson(plot.center, true);
    return new ol.Feature({
      plotId: plot.id,
      geometry: geometry
    });
  });
  return new ol.source.Vector({
    features: features
  });
}; // [Side Effects] Adds three vector layers to the mapConfig's map
// object: "flaggedPlots" in red, "analyzedPlots" in green, and
// "unanalyzedPlots" in yellow.


mercator.addPlotOverviewLayers = function (mapConfig, plots, shape) {
  mercator.addVectorLayer(mapConfig, "flaggedPlots", mercator.plotsToVectorSource(plots.filter(function (plot) {
    return plot.flagged == true;
  })), shape == "circle" ? ceoMapStyles.redCircle : ceoMapStyles.redSquare);
  mercator.addVectorLayer(mapConfig, "analyzedPlots", mercator.plotsToVectorSource(plots.filter(function (plot) {
    return plot.analyses > 0 && plot.flagged == false;
  })), shape == "circle" ? ceoMapStyles.greenCircle : ceoMapStyles.greenSquare);
  mercator.addVectorLayer(mapConfig, "unanalyzedPlots", mercator.plotsToVectorSource(plots.filter(function (plot) {
    return plot.analyses == 0 && plot.flagged == false;
  })), shape == "circle" ? ceoMapStyles.yellowCircle : ceoMapStyles.yellowSquare);
  return mapConfig;
};
/*****************************************************************************
***
*** Functions to setup select interactions for click and click-and-drag events
***
*****************************************************************************/
// [Pure] Returns the map interaction with title == interactionTitle
// or null if no such interaction exists.


mercator.getInteractionByTitle = function (mapConfig, interactionTitle) {
  return mapConfig.map.getInteractions().getArray().find(function (interaction) {
    return interaction.get("title") == interactionTitle;
  });
}; // [Side Effects] Removes the interaction with title == interactionTitle from
// mapConfig's map object.


mercator.removeInteractionByTitle = function (mapConfig, interactionTitle) {
  var interaction = mercator.getInteractionByTitle(mapConfig, interactionTitle);

  if (interaction) {
    mapConfig.map.removeInteraction(interaction);
  }

  return mapConfig;
}; // [Pure] Returns a new click select interaction with title =
// interactionTitle that is associated with the passed in layer. When
// a feature is selected, its style is stored in featureStyles and
// then cleared on the map. When a feature is deselected, its saved
// style is restored on the map.


mercator.makeClickSelect = function (interactionTitle, layer, featureStyles) {
  var select = new ol.interaction.Select({
    layers: [layer]
  });
  select.set("title", interactionTitle);

  var action = function action(event) {
    event.selected.forEach(function (feature) {
      featureStyles[feature] = feature.getStyle();
      feature.setStyle(null);
    });
    event.deselected.forEach(function (feature) {
      var savedStyle = featureStyles[feature];

      if (savedStyle != null) {
        feature.setStyle(savedStyle);
      }
    });
  };

  select.on("select", action);
  return select;
}; // [Pure] Returns a new dragBox select interaction with title =
// interactionTitle that is associated with the passed in layer. When
// a feature is selected, its style is stored in featureStyles and
// then cleared on the map. When a feature is deselected, its saved
// style is restored on the map.


mercator.makeDragBoxSelect = function (interactionTitle, layer, featureStyles, selectedFeatures) {
  var dragBox = new ol.interaction.DragBox({
    condition: ol.events.condition.platformModifierKeyOnly
  });
  dragBox.set("title", interactionTitle);

  var boxstartAction = function boxstartAction() {
    selectedFeatures.clear();
  };

  var boxendAction = function boxendAction() {
    var extent = dragBox.getGeometry().getExtent();

    var saveStyle = function saveStyle(feature) {
      selectedFeatures.push(feature);
      featureStyles[feature] = feature.getStyle();
      feature.setStyle(null);
      return false;
    };

    layer.getSource().forEachFeatureIntersectingExtent(extent, saveStyle);
  };

  dragBox.on("boxstart", boxstartAction);
  dragBox.on("boxend", boxendAction);
  return dragBox;
}; // [Side Effects] Adds a click select interaction and a dragBox select
// interaction to mapConfig's map object associated with the layer
// with title == layerTitle.


mercator.enableSelection = function (mapConfig, layerTitle) {
  var layer = mercator.getLayerByTitle(mapConfig, layerTitle);
  var featureStyles = {}; // holds saved styles for features selected by either interaction

  var clickSelect = mercator.makeClickSelect("clickSelect", layer, featureStyles);
  var selectedFeatures = clickSelect.getFeatures();
  var dragBoxSelect = mercator.makeDragBoxSelect("dragBoxSelect", layer, featureStyles, selectedFeatures);
  mapConfig.map.addInteraction(clickSelect);
  mapConfig.map.addInteraction(dragBoxSelect);
  return mapConfig;
}; // [Side Effects] Removes the click select and dragBox select
// interactions from mapConfig's map object.


mercator.disableSelection = function (mapConfig) {
  mercator.removeInteractionByTitle(mapConfig, "clickSelect");
  mercator.removeInteractionByTitle(mapConfig, "dragBoxSelect");
  return mapConfig;
};
/*****************************************************************************
***
*** Functions to draw sample points inside a plot
***
*****************************************************************************/
// [Side Effects] Adds a new vector layer called
// point:<longitude>:<latitude> to mapConfig's map object containing a
// single point geometry feature at the passed in coordinates.


mercator.addPointLayer = function (mapConfig, longitude, latitude) {
  mercator.addVectorLayer(mapConfig, "point:" + longitude + ":" + latitude, mercator.geometryToVectorSource(new ol.geom.Point(mercator.reprojectToMap(longitude, latitude))), ceoMapStyles.redPoint);
  return mapConfig;
}; // [Pure] Returns a new vector source containing the passed in
// samples. Features are constructed from each sample using its id,
// point, and geom fields.


mercator.samplesToVectorSource = function (samples) {
  var features = samples.map(function (sample) {
    return new ol.Feature({
      sampleId: sample.id,
      geometry: mercator.parseGeoJson(sample.geom || sample.point, true),
      shape: sample.geom ? "polygon" : "point"
    });
  });
  return new ol.source.Vector({
    features: features
  });
}; // [Pure] Returns an ol.Collection containing the features selected by
// the currently enabled click select and dragBox select interactions.


mercator.getSelectedSamples = function (mapConfig) {
  var clickSelect = mercator.getInteractionByTitle(mapConfig, "clickSelect");

  if (clickSelect) {
    return clickSelect.getFeatures();
  } else {
    return null;
  }
}; // [Side Effects] Sets the sample's style to be a circle with a black
// border and filled with the passed in color. If color is null, the
// circle will be filled with gray.


mercator.highlightSampleGeometry = function (sample, color) {
  if (sample.get("shape") == "point") {
    sample.setStyle(mercator.getCircleStyle(5, color || "#999999", "#000000", 2));
  } else {
    sample.setStyle(mercator.getPolygonStyle(color || "#999999", "#000000", 3));
  }

  return sample;
};
/*****************************************************************************
***
*** Bounding Box Selector for Admin Page
***
*****************************************************************************/
// [Pure] Returns a new dragBox draw interaction with title =
// interactionTitle that is associated with the passed in layer. When
// a new box is dragged on the map, any previous dragBox polygons are
// removed, and the current box is added to the map layer as a new
// feature. If a callBack function is provided, it will be called
// after the new box is added to the map layer.


mercator.makeDragBoxDraw = function (interactionTitle, layer, callBack) {
  var dragBox = new ol.interaction.DragBox({
    title: interactionTitle,
    condition: ol.events.condition.platformModifierKeyOnly
  });

  var boxendAction = function boxendAction() {
    layer.getSource().clear();
    layer.getSource().addFeature(new ol.Feature({
      geometry: dragBox.getGeometry()
    }));

    if (callBack != null) {
      callBack.call(null, dragBox);
    }
  };

  dragBox.on("boxend", boxendAction);
  return dragBox;
}; // [Side Effects] Adds a dragBox draw interaction to mapConfig's map
// object associated with a newly created empty vector layer called
// "dragBoxLayer".


mercator.enableDragBoxDraw = function (mapConfig, callBack) {
  var drawLayer = new ol.layer.Vector({
    title: "dragBoxLayer",
    source: new ol.source.Vector({
      features: []
    }),
    style: ceoMapStyles.polygon
  });
  var dragBox = mercator.makeDragBoxDraw("dragBoxDraw", drawLayer, callBack);
  mapConfig.map.addLayer(drawLayer);
  mapConfig.map.addInteraction(dragBox);
  return mapConfig;
}; // [Side Effects] Removes the dragBox draw interaction and its
// associated layer from mapConfig's map object.


mercator.disableDragBoxDraw = function (mapConfig) {
  mercator.removeInteractionByTitle(mapConfig, "dragBoxDraw");
  mercator.removeLayerByTitle(mapConfig, "dragBoxLayer");
  return mapConfig;
}; // [Pure] Returns the extent of the rectangle drawn by the passed-in
// dragBox in lat/lon coords (EPSG:4326).


mercator.getDragBoxExtent = function (dragBox) {
  return dragBox.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getExtent();
};
/*****************************************************************************
***
*** Functions to draw project markers on an overview map
***
*****************************************************************************/
// [Side Effects] Adds a new empty overlay to mapConfig's map object
// with id set to overlayTitle.


mercator.addOverlay = function (mapConfig, overlayTitle) {
  var overlay = new ol.Overlay({
    id: overlayTitle,
    element: document.createElement("div")
  });
  mapConfig.map.addOverlay(overlay);
  return mapConfig;
}; // [Pure] Returns the map overlay with id == overlayTitle or null if
// no such overlay exists.


mercator.getOverlayByTitle = function (mapConfig, overlayTitle) {
  return mapConfig.map.getOverlayById(overlayTitle);
}; // [Pure] Returns true if the feature is a cluster, false otherwise.


mercator.isCluster = function (feature) {
  return feature && feature.get("features") && feature.get("features").length > 0;
}; // [Pure] Returns a string of HTML representing several table rows
// that describe the passed in project.


mercator.makeRows = function (documentRoot, project) {
  var rowStart = "<tr class=\"d-flex\">";
  var rowEnd = "</tr>";
  var leftColStart = "<td class=\"small col-6 px-0 my-auto\">";
  var rightColStart = "<td class=\"small col-6 pr-0\">";
  var colEnd = "</td>";
  var linkStart = "<a href=\"" + documentRoot + "/collection/" + project.get("projectId") + "\" " + "class=\"btn btn-sm btn-block btn-outline-lightgreen\" " + "style=\"white-space:nowrap; overflow:hidden; text-overflow:ellipsis\">";
  var linkEnd = "</a>";
  return rowStart + leftColStart + "<h3 class=\"my-auto\">Name</h3>" + colEnd + rightColStart + linkStart + project.get("name") + linkEnd + colEnd + rowEnd + rowStart + leftColStart + "Description" + colEnd + rightColStart + (project.get("description") == "" ? "N/A" : project.get("description")) + colEnd + rowEnd + rowStart + leftColStart + "Number of plots" + colEnd + rightColStart + project.get("numPlots") + colEnd + rowEnd;
}; // [Pure] Returns the minimum extent that bounds all of the
// subfeatures in the passed in clusterFeature.


mercator.getClusterExtent = function (clusterFeature) {
  var clusterPoints = clusterFeature.get("features").map(function (subFeature) {
    return subFeature.getGeometry().getCoordinates();
  });
  return new ol.geom.LineString(clusterPoints).getExtent();
}; // [Pure] Returns a string of HTML to display in a popup box on the map.


mercator.getPopupContent = function (documentRoot, feature) {
  var title = "<div class=\"cTitle\"><h1>" + (mercator.isCluster(feature) ? "Cluster info" : "Project info") + "</h1></div>";
  var contentStart = "<div class=\"cContent\">";
  var tableStart = "<table class=\"table table-sm\"><tbody>";
  var tableRows = mercator.isCluster(feature) ? feature.get("features").map(mercator.makeRows.bind(null, documentRoot)).join("\n") : mercator.makeRows(documentRoot, feature);
  var tableEnd = "</tbody></table>";
  var contentEnd = "</div>";

  if (mercator.isCluster(feature) && feature.get("features").length > 1) {
    var zoomLink = "<button onclick=\"mercator.zoomMapToExtent(mapConfigMercator, [" + mercator.getClusterExtent(feature) + "])\" " + "class=\"mt-0 mb-0 btn btn-sm btn-block btn-outline-yellow\" style=\"cursor:pointer; min-width:350px;\">" + "<i class=\"fa fa-search-plus\"></i> Zoom to cluster</button>";
    return title + contentStart + tableStart + tableRows + tableEnd + zoomLink + contentEnd;
  } else {
    return title + contentStart + tableStart + tableRows + tableEnd + contentEnd;
  }
}; // [Side Effects] Updates the overlay element's innerHTML with fields
// containing the feature's name, description, and numPlots fields as
// well as a link to its data collection page and then displays the
// overlay on the map at the feature's coordinates.


mercator.showProjectPopup = function (overlay, documentRoot, feature) {
  overlay.getElement().innerHTML = mercator.getPopupContent(documentRoot, feature);
  overlay.setPosition(mercator.isCluster(feature) ? feature.get("features")[0].getGeometry().getCoordinates() : feature.getGeometry().getCoordinates());
}; // [Pure] Returns a new vector source containing points for each of
// the centers of the passed in projects. Features are constructed
// from each project using its id, name, description, and numPlots
// fields.


mercator.projectsToVectorSource = function (projects) {
  var features = projects.map(function (project) {
    var bounds = mercator.parseGeoJson(project.boundary, false).getExtent();
    var minX = bounds[0];
    var minY = bounds[1];
    var maxX = bounds[2];
    var maxY = bounds[3];
    var centerX = (minX + maxX) / 2;
    var centerY = (minY + maxY) / 2;
    var geometry = new ol.geom.Point([centerX, centerY]).transform("EPSG:4326", "EPSG:3857");
    return new ol.Feature({
      geometry: geometry,
      projectId: project.id,
      name: project.name,
      description: project.description,
      numPlots: project.numPlots
    });
  });
  return new ol.source.Vector({
    features: features
  });
}; // [Side Effects] Adds a new vector layer called "projectMarkers" to
// mapConfig's map object containing icons at each of the project's
// AOI centers. Also adds a dynamic overlay popup to the map which
// shows a brief project description whenever a project icon is
// clicked. If clusterDistance is not null, the new vector source will
// cluster the projects. Finally, zooms the map view to the new
// layer's extent.


mercator.addProjectMarkersAndZoom = function (mapConfig, projects, documentRoot, clusterDistance) {
  var projectSource = mercator.projectsToVectorSource(projects);

  if (clusterDistance == null) {
    mercator.addVectorLayer(mapConfig, "projectMarkers", projectSource, ceoMapStyles.ceoIcon);
  } else {
    var clusterSource = new ol.source.Cluster({
      source: projectSource,
      distance: clusterDistance
    });
    mercator.addVectorLayer(mapConfig, "projectMarkers", clusterSource, function (feature) {
      var numProjects = feature.get("features").length;
      return mercator.getCircleStyle(10, "#3399cc", "#ffffff", 1, numProjects, "#ffffff");
    });
  }

  mercator.addOverlay(mapConfig, "projectPopup");
  var overlay = mercator.getOverlayByTitle(mapConfig, "projectPopup");
  mapConfig.map.on("click", function (event) {
    if (mapConfig.map.hasFeatureAtPixel(event.pixel)) {
      mapConfig.map.forEachFeatureAtPixel(event.pixel, mercator.showProjectPopup.bind(null, overlay, documentRoot));
    } else {
      overlay.setPosition(undefined);
    }
  });
  mercator.zoomMapToExtent(mapConfig, projectSource.getExtent());
  return mapConfig;
}; // [Side Effects] Adds a new vector layer called "currentPlots" to
// mapConfig's map object that clusters the passed in plots. Clicking
// on clusters with more than one plot zooms the map view to the
// extent covered by these plots. If a cluster only contains one plot,
// the callBack function will be called on the cluster feature.


mercator.addPlotLayer = function (mapConfig, plots, callBack) {
  var plotSource = mercator.plotsToVectorSource(plots);
  var clusterSource = new ol.source.Cluster({
    source: plotSource,
    distance: 40
  });
  mercator.addVectorLayer(mapConfig, "currentPlots", clusterSource, function (feature) {
    var numPlots = feature.get("features").length;
    return mercator.getCircleStyle(10, "#3399cc", "#ffffff", 1, numPlots, "#ffffff");
  });

  var clickHandler = function clickHandler(event) {
    mapConfig.map.forEachFeatureAtPixel(event.pixel, function (feature) {
      if (mercator.isCluster(feature)) {
        if (feature.get("features").length > 1) {
          mercator.zoomMapToExtent(mapConfig, mercator.getClusterExtent(feature));
        } else {
          mercator.removeLayerByTitle(mapConfig, "currentPlots");
          mapConfig.map.un("click", clickHandler);
          callBack.call(null, feature);
        }
      }
    });
  };

  mapConfig.map.on("click", clickHandler);
  return mapConfig;
};
/*****************************************************************************
***
*** FIXMEs
***
*****************************************************************************/
//
// FIXME: Move ceoMapStyles out of Mercator.js
// FIXME: Move mercator.getPopupContent() out of Mercator.js (it is hard-coded to CEO's home page)
// FIXME: change calls from remove_plot_layer to mercator.removeLayerByTitle(mapConfig, layerTitle)
// FIXME: change calls from draw_polygon to:
//        mercator.removeLayerByTitle(mapConfig, "currentAOI");
//        mercator.addVectorLayer(mapConfig,
//                                "currentAOI",
//                                mercator.geometryToVectorSource(mercator.parseGeoJson(polygon, true)),
//                                ceoMapStyles.polygon);
//        mercator.zoomMapToLayer(mapConfig, "currentAOI");
// FIXME: change calls from polygon_extent to mercator.parseGeoJson(polygon, false).getExtent()
// FIXME: change calls from get_plot_extent to mercator.getPlotExtent
// FIXME: change calls from draw_plot to:
//        mercator.removeLayerByTitle(mapConfig, "currentPlot");
//        mercator.addVectorLayer(mapConfig,
//                                "currentPlot",
//                                mercator.geometryToVectorSource(mercator.getPlotPolygon(center, size, shape)),
//                                ceoMapStyles.polygon);
//        mercator.zoomMapToLayer(mapConfig, "currentPlot");
// FIXME: change calls from draw_plots to mercator.addPlotOverviewLayers
// FIXME: for plots shown with draw_plots, change references to their plot_id field to plotId
// FIXME: change calls from enable_selection to mercator.enableSelection
// FIXME: change calls from disable_selection to mercator.disableSelection
// FIXME: change calls from remove_sample_layer to mercator.removeLayerByTitle(mapConfig, "currentSamples");
// FIXME: change calls from remove_plots_layer to mercator.removeLayerByTitle(mapConfig, "currentPlots");
// FIXME: change calls from draw_points to:
//        mercator.disableSelection(mapConfig);
//        mercator.removeLayerByTitle(mapConfig, "currentSamples");
//        mercator.addVectorLayer(mapConfig,
//                                "currentSamples",
//                                mercator.samplesToVectorSource(samples),
//                                ceoMapStyles.redPoint);
//        mercator.enableSelection(mapConfig, "currentSamples");
//        mercator.zoomMapToLayer(mapConfig, "currentSamples");
// FIXME: change references for points created with draw_points from sample_id to sampleId
// FIXME: change calls from get_selected_samples to mercator.getSelectedSamples
// FIXME: change calls from highlight_sample to mercator.highlightSampleGeometry
// FIXME: change calls from enable_dragbox_draw to enableDragBoxDraw(mapConfig, displayDragBoxBounds)
// FIXME: change calls from disable_dragbox_draw to disableDragBoxDraw
// FIXME: change calls from draw_project_markers to:
//        mercator.addProjectMarkersAndZoom(mapConfig, projects, documentRoot, clusterDistance);
//        mercator.zoomMapToLayer(mapConfig, "projectMarkers");
// FIXME: change references to pID in home.js to projectId
// FIXME: change calls from draw_project_points to:
//        mercator.removeLayerByTitle(mapConfig, "currentPlots");
//        mercator.addPlotLayer(mapConfig, plots);


module.exports = {
  mercator: mercator,
  ceoMapStyles: ceoMapStyles
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvbWFpbi9yZXNvdXJjZXMvcHVibGljL2pzL21lcmNhdG9yLW9wZW5sYXllcnMuanMiXSwibmFtZXMiOlsibWVyY2F0b3IiLCJyZXByb2plY3RUb01hcCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwib2wiLCJwcm9qIiwidHJhbnNmb3JtIiwiTnVtYmVyIiwicmVwcm9qZWN0RnJvbU1hcCIsIngiLCJ5IiwiZ2V0RnVsbEV4dGVudCIsImxseHkiLCJ1cnh5IiwiZ2V0Vmlld0V4dGVudCIsIm1hcENvbmZpZyIsInNpemUiLCJtYXAiLCJnZXRTaXplIiwiZXh0ZW50IiwidmlldyIsImNhbGN1bGF0ZUV4dGVudCIsInRyYW5zZm9ybUV4dGVudCIsImdldFZpZXdSYWRpdXMiLCJsbHgiLCJsbHkiLCJ1cngiLCJ1cnkiLCJ3aWR0aCIsIk1hdGgiLCJhYnMiLCJoZWlnaHQiLCJtaW4iLCJjcmVhdGVTb3VyY2UiLCJzb3VyY2VDb25maWciLCJ0eXBlIiwic291cmNlIiwiWFlaIiwidXJsIiwiaW1hZ2VyeUlkIiwiYWNjZXNzVG9rZW4iLCJhdHRyaWJ1dGlvbiIsInllYXIiLCJtb250aCIsIkJpbmdNYXBzIiwiaW1hZ2VyeVNldCIsImtleSIsIm1heFpvb20iLCJUaWxlV01TIiwic2VydmVyVHlwZSIsImdlb3NlcnZlclVybCIsInBhcmFtcyIsImdlb3NlcnZlclBhcmFtcyIsImdlZVVybCIsImNsb3VkVmFyIiwiZ2VlUGFyYW1zIiwidmlzUGFyYW1zIiwiY2xvdWRMZXNzVGhhbiIsInBhcnNlSW50IiwidGhlSnNvbiIsImRhdGVGcm9tIiwic3RhcnREYXRlIiwiZGF0ZVRvIiwiZW5kRGF0ZSIsImJhbmRzIiwibWF4IiwiSW1hZ2VBc3NldCIsImltYWdlTmFtZSIsInRoZUlEIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJnZWVMYXllciIsImlkIiwic2V0UHJvcGVydGllcyIsImNyZWF0ZXR5cGUiLCJjcmVhdGUiLCIkIiwiYWpheCIsImFzeW5jIiwiY3Jvc3NEb21haW4iLCJjb250ZW50VHlwZSIsIkxheWVySWQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImNvbnNvbGUiLCJ3YXJuIiwiZG9uZSIsIl90ZXh0U3RhdHVzIiwiX2pxWEhSIiwiZXJyTXNnIiwiaW5mbyIsImhhc093blByb3BlcnR5IiwibWFwaWQiLCJ0b2tlbiIsImxheWVyIiwiY3VycmVudE1hcCIsImdldExheWVycyIsImZvckVhY2giLCJseXIiLCJnZXRTb3VyY2UiLCJnZXQiLCJzZXRTb3VyY2UiLCJjcmVhdGVMYXllciIsImxheWVyQ29uZmlnIiwiVGlsZSIsInRpdGxlIiwidmlzaWJsZSIsInZlcmlmeURpdk5hbWUiLCJkaXZOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZlcmlmeUNlbnRlckNvb3JkcyIsImNlbnRlckNvb3JkcyIsImxvbiIsImxhdCIsInZlcmlmeVpvb21MZXZlbCIsInpvb21MZXZlbCIsInZlcmlmeUxheWVyQ29uZmlnIiwibGF5ZXJLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwidmVyaWZ5TGF5ZXJDb25maWdzIiwibGF5ZXJDb25maWdzIiwiZXZlcnkiLCJ2ZXJpZnlNYXBJbnB1dHMiLCJjcmVhdGVNYXAiLCJlcnJvck1zZyIsImVycm9yIiwibGF5ZXJzIiwiY29udHJvbHMiLCJjb250cm9sIiwiZGVmYXVsdHMiLCJleHRlbmQiLCJTY2FsZUxpbmUiLCJWaWV3IiwicHJvamVjdGlvbiIsImNlbnRlciIsImZyb21Mb25MYXQiLCJ6b29tIiwiTWFwIiwidGFyZ2V0IiwiaW5pdCIsImRlc3Ryb3lNYXAiLCJpbm5lckhUTUwiLCJyZXNldE1hcCIsInNldFZpc2libGVMYXllciIsImxheWVyVGl0bGUiLCJnZXRWaXNpYmxlIiwic2V0VmlzaWJsZSIsImdldExheWVyQnlUaXRsZSIsImdldEFycmF5IiwiZmluZCIsImdldExheWVyQ29uZmlnQnlUaXRsZSIsInVwZGF0ZUxheWVyU291cmNlIiwidHJhbnNmb3JtZXIiLCJjYWxsZXIiLCJjYWxsIiwidXBkYXRlTGF5ZXJXbXNQYXJhbXMiLCJuZXdQYXJhbXMiLCJtZXJnZWRQYXJhbXMiLCJhc3NpZ24iLCJnZXRQYXJhbXMiLCJ1cGRhdGVQYXJhbXMiLCJ6b29tTWFwVG9FeHRlbnQiLCJmaXQiLCJ6b29tTWFwVG9MYXllciIsImdldEV4dGVudCIsImdldEljb25TdHlsZSIsImltYWdlU3JjIiwic3R5bGUiLCJTdHlsZSIsImltYWdlIiwiSWNvbiIsInNyYyIsImdldENpcmNsZVN0eWxlIiwicmFkaXVzIiwiZmlsbENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInRleHQiLCJ0ZXh0RmlsbENvbG9yIiwiQ2lyY2xlIiwiZmlsbCIsIkZpbGwiLCJjb2xvciIsInN0cm9rZSIsIlN0cm9rZSIsIlRleHQiLCJnZXRSZWd1bGFyU2hhcGVTdHlsZSIsInBvaW50cyIsInJvdGF0aW9uIiwiUmVndWxhclNoYXBlIiwiZ2V0UG9seWdvblN0eWxlIiwiY2VvTWFwU3R5bGVzIiwiaWNvbiIsImNlb0ljb24iLCJyZWRQb2ludCIsImJsdWVQb2ludCIsInllbGxvd1BvaW50IiwicmVkQ2lyY2xlIiwieWVsbG93Q2lyY2xlIiwiZ3JlZW5DaXJjbGUiLCJyZWRTcXVhcmUiLCJQSSIsInllbGxvd1NxdWFyZSIsImdyZWVuU3F1YXJlIiwiY2x1c3RlciIsInBvbHlnb24iLCJhZGRWZWN0b3JMYXllciIsInZlY3RvclNvdXJjZSIsInZlY3RvckxheWVyIiwiVmVjdG9yIiwiYWRkTGF5ZXIiLCJyZW1vdmVMYXllckJ5VGl0bGUiLCJyZW1vdmVMYXllciIsInBhcnNlR2VvSnNvbiIsImdlb0pzb24iLCJmb3JtYXQiLCJHZW9KU09OIiwiZ2VvbWV0cnkiLCJyZWFkR2VvbWV0cnkiLCJnZW9tZXRyeVRvVmVjdG9yU291cmNlIiwiZmVhdHVyZXMiLCJGZWF0dXJlIiwiZ2V0UGxvdFBvbHlnb24iLCJzaGFwZSIsImNvb3JkcyIsImdldENvb3JkaW5hdGVzIiwiY2VudGVyWCIsImNlbnRlclkiLCJnZW9tIiwiUG9seWdvbiIsImZyb21FeHRlbnQiLCJnZXRQbG90RXh0ZW50IiwicGxvdHNUb1ZlY3RvclNvdXJjZSIsInBsb3RzIiwicGxvdCIsInBsb3RJZCIsImFkZFBsb3RPdmVydmlld0xheWVycyIsImZpbHRlciIsImZsYWdnZWQiLCJhbmFseXNlcyIsImdldEludGVyYWN0aW9uQnlUaXRsZSIsImludGVyYWN0aW9uVGl0bGUiLCJnZXRJbnRlcmFjdGlvbnMiLCJpbnRlcmFjdGlvbiIsInJlbW92ZUludGVyYWN0aW9uQnlUaXRsZSIsInJlbW92ZUludGVyYWN0aW9uIiwibWFrZUNsaWNrU2VsZWN0IiwiZmVhdHVyZVN0eWxlcyIsInNlbGVjdCIsIlNlbGVjdCIsInNldCIsImFjdGlvbiIsImV2ZW50Iiwic2VsZWN0ZWQiLCJmZWF0dXJlIiwiZ2V0U3R5bGUiLCJzZXRTdHlsZSIsImRlc2VsZWN0ZWQiLCJzYXZlZFN0eWxlIiwib24iLCJtYWtlRHJhZ0JveFNlbGVjdCIsInNlbGVjdGVkRmVhdHVyZXMiLCJkcmFnQm94IiwiRHJhZ0JveCIsImNvbmRpdGlvbiIsImV2ZW50cyIsInBsYXRmb3JtTW9kaWZpZXJLZXlPbmx5IiwiYm94c3RhcnRBY3Rpb24iLCJjbGVhciIsImJveGVuZEFjdGlvbiIsImdldEdlb21ldHJ5Iiwic2F2ZVN0eWxlIiwicHVzaCIsImZvckVhY2hGZWF0dXJlSW50ZXJzZWN0aW5nRXh0ZW50IiwiZW5hYmxlU2VsZWN0aW9uIiwiY2xpY2tTZWxlY3QiLCJnZXRGZWF0dXJlcyIsImRyYWdCb3hTZWxlY3QiLCJhZGRJbnRlcmFjdGlvbiIsImRpc2FibGVTZWxlY3Rpb24iLCJhZGRQb2ludExheWVyIiwiUG9pbnQiLCJzYW1wbGVzVG9WZWN0b3JTb3VyY2UiLCJzYW1wbGVzIiwic2FtcGxlIiwic2FtcGxlSWQiLCJwb2ludCIsImdldFNlbGVjdGVkU2FtcGxlcyIsImhpZ2hsaWdodFNhbXBsZUdlb21ldHJ5IiwibWFrZURyYWdCb3hEcmF3IiwiY2FsbEJhY2siLCJhZGRGZWF0dXJlIiwiZW5hYmxlRHJhZ0JveERyYXciLCJkcmF3TGF5ZXIiLCJkaXNhYmxlRHJhZ0JveERyYXciLCJnZXREcmFnQm94RXh0ZW50IiwiY2xvbmUiLCJhZGRPdmVybGF5Iiwib3ZlcmxheVRpdGxlIiwib3ZlcmxheSIsIk92ZXJsYXkiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldE92ZXJsYXlCeVRpdGxlIiwiZ2V0T3ZlcmxheUJ5SWQiLCJpc0NsdXN0ZXIiLCJsZW5ndGgiLCJtYWtlUm93cyIsImRvY3VtZW50Um9vdCIsInByb2plY3QiLCJyb3dTdGFydCIsInJvd0VuZCIsImxlZnRDb2xTdGFydCIsInJpZ2h0Q29sU3RhcnQiLCJjb2xFbmQiLCJsaW5rU3RhcnQiLCJsaW5rRW5kIiwiZ2V0Q2x1c3RlckV4dGVudCIsImNsdXN0ZXJGZWF0dXJlIiwiY2x1c3RlclBvaW50cyIsInN1YkZlYXR1cmUiLCJMaW5lU3RyaW5nIiwiZ2V0UG9wdXBDb250ZW50IiwiY29udGVudFN0YXJ0IiwidGFibGVTdGFydCIsInRhYmxlUm93cyIsImJpbmQiLCJqb2luIiwidGFibGVFbmQiLCJjb250ZW50RW5kIiwiem9vbUxpbmsiLCJzaG93UHJvamVjdFBvcHVwIiwiZ2V0RWxlbWVudCIsInNldFBvc2l0aW9uIiwicHJvamVjdHNUb1ZlY3RvclNvdXJjZSIsInByb2plY3RzIiwiYm91bmRzIiwiYm91bmRhcnkiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwicHJvamVjdElkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibnVtUGxvdHMiLCJhZGRQcm9qZWN0TWFya2Vyc0FuZFpvb20iLCJjbHVzdGVyRGlzdGFuY2UiLCJwcm9qZWN0U291cmNlIiwiY2x1c3RlclNvdXJjZSIsIkNsdXN0ZXIiLCJkaXN0YW5jZSIsIm51bVByb2plY3RzIiwiaGFzRmVhdHVyZUF0UGl4ZWwiLCJwaXhlbCIsImZvckVhY2hGZWF0dXJlQXRQaXhlbCIsInVuZGVmaW5lZCIsImFkZFBsb3RMYXllciIsInBsb3RTb3VyY2UiLCJjbGlja0hhbmRsZXIiLCJ1biIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUlBLFFBQVEsR0FBRyxFQUFmO0FBRUE7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBQ0FBLFFBQVEsQ0FBQ0MsY0FBVCxHQUEwQixVQUFVQyxTQUFWLEVBQXFCQyxRQUFyQixFQUErQjtBQUNyRCxTQUFPQyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsU0FBUixDQUFrQixDQUFDQyxNQUFNLENBQUNMLFNBQUQsQ0FBUCxFQUFvQkssTUFBTSxDQUFDSixRQUFELENBQTFCLENBQWxCLEVBQ2tCLFdBRGxCLEVBRWtCLFdBRmxCLENBQVA7QUFHSCxDQUpELEMsQ0FNQTtBQUNBOzs7QUFDQUgsUUFBUSxDQUFDUSxnQkFBVCxHQUE0QixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDeEMsU0FBT04sRUFBRSxDQUFDQyxJQUFILENBQVFDLFNBQVIsQ0FBa0IsQ0FBQ0MsTUFBTSxDQUFDRSxDQUFELENBQVAsRUFBWUYsTUFBTSxDQUFDRyxDQUFELENBQWxCLENBQWxCLEVBQ2tCLFdBRGxCLEVBRWtCLFdBRmxCLENBQVA7QUFHSCxDQUpELEMsQ0FNQTtBQUNBOzs7QUFDQVYsUUFBUSxDQUFDVyxhQUFULEdBQXlCLFlBQVk7QUFDakMsTUFBSUMsSUFBSSxHQUFHWixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsQ0FBQyxLQUF6QixFQUFnQyxDQUFDLFNBQWpDLENBQVg7QUFDQSxNQUFJWSxJQUFJLEdBQUdiLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixFQUErQixJQUEvQixDQUFYO0FBQ0EsU0FBTyxDQUFDVyxJQUFJLENBQUMsQ0FBRCxDQUFMLEVBQVVBLElBQUksQ0FBQyxDQUFELENBQWQsRUFBbUJDLElBQUksQ0FBQyxDQUFELENBQXZCLEVB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QUEwQkQsWUFBMUI7QUFDQXJFLGtCQUFRLENBQUN4SSxJQUFULENBQWMsSUFBZCxFQUFvQm9HLE9BQXBCO0FBQ0g7QUFDSjtBQUNKLEtBWnJDO0FBYUgsR0FkRDs7QUFlQXhQLFdBQVMsQ0FBQ0UsR0FBVixDQUFjMlAsRUFBZCxDQUFpQixPQUFqQixFQUEwQm9HLFlBQTFCO0FBRUEsU0FBT2pXLFNBQVA7QUFDSCxDQS9CRDtBQWlDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQW1XLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiblgsVUFBUSxFQUFFQSxRQURHO0FBRWJ3TSxjQUFZLEVBQUVBO0FBRkQsQ0FBakIsQyIsImZpbGUiOiJjb2xsZWN0aW9ufmdlb2Rhc2hyZWFjdH5ob21lfnByb2plY3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qKipcbioqKiBNZXJjYXRvci1PcGVuTGF5ZXJzLmpzXG4qKipcbioqKiBBdXRob3I6IEdhcnkgVy4gSm9obnNvblxuKioqIENvcHlyaWdodDogMjAxNy0yMDE4IFNwYXRpYWwgSW5mb3JtYXRpY3MgR3JvdXAsIExMQ1xuKioqIExpY2Vuc2U6IExHUEx2M1xuKioqXG4qKiogRGVzY3JpcHRpb246IFRoaXMgbGlicmFyeSBwcm92aWRlcyBhIHNldCBvZiBmdW5jdGlvbnMgZm9yXG4qKiogaW50ZXJhY3Rpbmcgd2l0aCBlbWJlZGRlZCB3ZWIgbWFwcyBpbiBhbiBBUEkgYWdub3N0aWMgbWFubmVyLiBUaGlzXG4qKiogZmlsZSBjb250YWlucyB0aGUgT3BlbkxheWVycyAzIGltcGxlbWVudGF0aW9uLlxuKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIFRvcGxldmVsIG5hbWVzcGFjZSBvYmplY3RcbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBtZXJjYXRvciA9IHt9O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIExvbi9MYXQgUmVwcm9qZWN0aW9uXG4qKipcbioqKiBUaGUgZGVmYXVsdCBtYXAgcHJvamVjdGlvbiBmb3IgbW9zdCB3ZWIgbWFwcyAoZS5nLiwgT3BlbkxheWVycyxcbioqKiBPcGVuU3RyZWV0TWFwLCBHb29nbGUgTWFwcywgTWFwUXVlc3QsIGFuZCBCaW5nIE1hcHMpIGlzIFwiV2ViXG4qKiogTWVyY2F0b3JcIiAoRVBTRzozODU3KS5cbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBwYXNzZWQgaW4gW2xvbmdpdHVkZSwgbGF0aXR1ZGVdIHZhbHVlc1xuLy8gcmVwcm9qZWN0ZWQgdG8gV2ViIE1lcmNhdG9yIGFzIFt4LCB5XS5cbm1lcmNhdG9yLnJlcHJvamVjdFRvTWFwID0gZnVuY3Rpb24gKGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICByZXR1cm4gb2wucHJvai50cmFuc2Zvcm0oW051bWJlcihsb25naXR1ZGUpLCBOdW1iZXIobGF0aXR1ZGUpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFUFNHOjQzMjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFUFNHOjM4NTdcIik7XG59O1xuXG4vLyBbUHVyZV0gUmV0dXJucyB0aGUgcGFzc2VkIGluIFt4LCB5XSB2YWx1ZXMgcmVwcm9qZWN0ZWQgdG8gV0dTODQgYXNcbi8vIFtsb25naXR1ZGUsIGxhdGl0dWRlXS5cbm1lcmNhdG9yLnJlcHJvamVjdEZyb21NYXAgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiBvbC5wcm9qLnRyYW5zZm9ybShbTnVtYmVyKHgpLCBOdW1iZXIoeSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVQU0c6Mzg1N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVQU0c6NDMyNlwiKTtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgYm91bmRpbmcgYm94IGZvciB0aGUgZ2xvYmUgaW4gV2ViIE1lcmNhdG9yIGFzXG4vLyBbbGx4LCBsbHksIHVyeCwgdXJ5XS5cbm1lcmNhdG9yLmdldEZ1bGxFeHRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxseHkgPSBtZXJjYXRvci5yZXByb2plY3RUb01hcCgtMTgwLjAsIC04OS45OTk5OTkpO1xuICAgIHZhciB1cnh5ID0gbWVyY2F0b3IucmVwcm9qZWN0VG9NYXAoMTgwLjAsIDkwLjApO1xuICAgIHJldHVybiBbbGx4eVswXSwgbGx4eVsxXSwgdXJ4eVswXSwgdXJ4eVsxXV07XG59O1xuXG4vLyBbUHVyZV0gUmV0dXJucyBhIGJvdW5kaW5nIGJveCBmb3IgdGhlIGN1cnJlbnQgbWFwIHZpZXcgaW4gV0dTODRcbi8vIGxhdC9sb24gYXMgW2xseCwgbGx5LCB1cngsIHVyeV0uXG5tZXJjYXRvci5nZXRWaWV3RXh0ZW50ID0gZnVuY3Rpb24gKG1hcENvbmZpZykge1xuICAgIHZhciBzaXplID0gbWFwQ29uZmlnLm1hcC5nZXRTaXplKCk7XG4gICAgdmFyIGV4dGVudCA9IG1hcENvbmZpZy52aWV3LmNhbGN1bGF0ZUV4dGVudChzaXplKTtcbiAgICByZXR1cm4gb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBtaW5pbXVtIGRpc3RhbmNlIGluIG1ldGVycyBmcm9tIHRoZSB2aWV3IGNlbnRlclxuLy8gdG8gdGhlIHZpZXcgZXh0ZW50LlxubWVyY2F0b3IuZ2V0Vmlld1JhZGl1cyA9IGZ1bmN0aW9uIChtYXBDb25maWcpIHtcbiAgICB2YXIgc2l6ZSA9IG1hcENvbmZpZy5tYXAuZ2V0U2l6ZSgpO1xuICAgIHZhciBbbGx4LCBsbHksIHVyeCwgdXJ5XSA9IG1hcENvbmZpZy52aWV3LmNhbGN1bGF0ZUV4dGVudChzaXplKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLmFicyh1cnggLSBsbHgpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLmFicyh1cnkgLSBsbHkpO1xuICAgIHJldHVybiBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIuMDtcbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogQ3JlYXRlIG1hcCBzb3VyY2UgYW5kIGxheWVyIG9iamVjdHMgZnJvbSBKU09OIGRlc2NyaXB0aW9uc1xuKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gW1B1cmVdIFJldHVybnMgYSBuZXcgb2wuc291cmNlLiogb2JqZWN0IG9yIG51bGwgaWYgdGhlIHNvdXJjZUNvbmZpZ1xuLy8gaXMgaW52YWxpZC5cbm1lcmNhdG9yLmNyZWF0ZVNvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2VDb25maWcpIHtcbiAgICBpZiAoc291cmNlQ29uZmlnLnR5cGUgPT0gXCJEaWdpdGFsR2xvYmVcIikge1xuICAgICAgICByZXR1cm4gbmV3IG9sLnNvdXJjZS5YWVooe3VybDogXCJodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L1wiICsgc291cmNlQ29uZmlnLmltYWdlcnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj1cIiArIHNvdXJjZUNvbmZpZy5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbjogXCLCqSBEaWdpdGFsR2xvYmUsIEluY1wifSk7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VDb25maWcudHlwZSA9PSBcIlBsYW5ldFwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgb2wuc291cmNlLlhZWih7dXJsOiBcImh0dHBzOi8vdGlsZXN7MC0zfS5wbGFuZXQuY29tL2Jhc2VtYXBzL3YxL3BsYW5ldC10aWxlcy9nbG9iYWxfbW9udGhseV9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgc291cmNlQ29uZmlnLnllYXIgKyBcIl9cIiArIHNvdXJjZUNvbmZpZy5tb250aCArIFwiX21vc2FpYy9nbWFwL3t6fS97eH0ve3l9LnBuZz9hcGlfa2V5PVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBzb3VyY2VDb25maWcuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb246IFwiwqkgUGxhbmV0IExhYnMsIEluY1wifSk7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VDb25maWcudHlwZSA9PSBcIkJpbmdNYXBzXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvbC5zb3VyY2UuQmluZ01hcHMoe2ltYWdlcnlTZXQ6IHNvdXJjZUNvbmZpZy5pbWFnZXJ5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNvdXJjZUNvbmZpZy5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFpvb206IDE5fSk7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VDb25maWcudHlwZSA9PSBcIkdlb1NlcnZlclwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgb2wuc291cmNlLlRpbGVXTVMoe3NlcnZlclR5cGU6IFwiZ2Vvc2VydmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc291cmNlQ29uZmlnLmdlb3NlcnZlclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBzb3VyY2VDb25maWcuZ2Vvc2VydmVyUGFyYW1zfSk7XG4gICAgfWVsc2UgaWYgKHNvdXJjZUNvbmZpZy50eXBlID09IFwiR2VlR2F0ZXdheVwiKSB7XG4gICAgICAgIC8vZ2V0IHZhcmlhYmxlcyBhbmQgbWFrZSBhamF4IGNhbGwgdG8gZ2V0IG1hcGlkIGFuZCB0b2tlblxuICAgICAgICAvL3RoZW4gYWRkIHh5eiBsYXllclxuICAgICAgICAvL2NvbnN0IGZ0cyA9IHsnTEFORFNBVDUnOiAnTGFuZHNhdDVGaWx0ZXJlZCcsICdMQU5EU0FUNyc6ICdMYW5kc2F0N0ZpbHRlcmVkJywgJ0xBTkRTQVQ4JzonTGFuZHNhdDhGaWx0ZXJlZCcsICdTZW50aW5lbDInOiAnRmlsdGVyZWRTZW50aW5lbCd9O1xuICAgICAgICAvL2NvbnN0IHVybCA9IFwiaHR0cDovL2NvbGxlY3QuZWFydGg6ODg4OC9cIiArIGZ0c1tzb3VyY2VDb25maWcuZ2VlUGFyYW1zLmZpbHRlclR5cGVdO1xuICAgICAgICBjb25zdCB1cmwgPSBzb3VyY2VDb25maWcuZ2VlVXJsO1xuICAgICAgICBjb25zdCBjbG91ZFZhciA9IHNvdXJjZUNvbmZpZy5nZWVQYXJhbXMudmlzUGFyYW1zLmNsb3VkTGVzc1RoYW4gPyBwYXJzZUludChzb3VyY2VDb25maWcuZ2VlUGFyYW1zLnZpc1BhcmFtcy5jbG91ZExlc3NUaGFuKTogJyc7XG4gICAgICAgIGxldCB0aGVKc29uID0ge1xuICAgICAgICAgICAgZGF0ZUZyb206IHNvdXJjZUNvbmZpZy5nZWVQYXJhbXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZGF0ZVRvOiBzb3VyY2VDb25maWcuZ2VlUGFyYW1zLmVuZERhdGUsXG4gICAgICAgICAgICBiYW5kczogc291cmNlQ29uZmlnLmdlZVBhcmFtcy52aXNQYXJhbXMuYmFuZHMsXG4gICAgICAgICAgICBtaW46IHNvdXJjZUNvbmZpZy5nZWVQYXJhbXMudmlzUGFyYW1zLm1pbixcbiAgICAgICAgICAgIG1heDogc291cmNlQ29uZmlnLmdlZVBhcmFtcy52aXNQYXJhbXMubWF4LFxuICAgICAgICAgICAgY2xvdWRMZXNzVGhhbjogY2xvdWRWYXIsXG4gICAgICAgICAgICB2aXNQYXJhbXM6IHNvdXJjZUNvbmZpZy5nZWVQYXJhbXMudmlzUGFyYW1zXG4gICAgICAgIH07XG4gICAgICAgIGlmKHNvdXJjZUNvbmZpZy5nZWVQYXJhbXMuSW1hZ2VBc3NldClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhlSnNvbi5pbWFnZU5hbWUgPSBzb3VyY2VDb25maWcuZ2VlUGFyYW1zLkltYWdlQXNzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhlSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTYpICsgJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgICAgICBsZXQgZ2VlTGF5ZXIgPSBuZXcgb2wuc291cmNlLlhZWih7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9lYXJ0aGVuZ2luZS5nb29nbGVhcGlzLmNvbS9tYXAvdGVtcC97en0ve3h9L3t5fT90b2tlbj1cIixcbiAgICAgICAgICAgIGlkOiB0aGVJRFxuICAgICAgICB9KTtcbiAgICAgICAgZ2VlTGF5ZXIuc2V0UHJvcGVydGllcyh7aWQ6IHRoZUlEfSk7XG4gICAgICAgIGxldCBjcmVhdGV0eXBlID0gJ3Rlc3QnO1xuICAgICAgICBpZihzb3VyY2VDb25maWcuY3JlYXRlKSB7XG5cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgbWFwQ29uZmlnOiBzb3VyY2VDb25maWcsXG4gICAgICAgICAgICAgICAgTGF5ZXJJZDogdGhlSUQsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodGhlSnNvbilcbiAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihqcVhIUiArIHRleHRTdGF0dXMgKyBlcnJvclRocm93bik7XG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhLCBfdGV4dFN0YXR1cywgX2pxWEhSKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhkYXRhLmVyck1zZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJtYXBpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdlZUxheWVyID0gbmV3IG9sLnNvdXJjZS5YWVooe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2VhcnRoZW5naW5lLmdvb2dsZWFwaXMuY29tL21hcC9cIiArIGRhdGEubWFwaWQgKyBcIi97en0ve3h9L3t5fT90b2tlbj1cIiArIGRhdGEudG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTGF5ZXJJZCA9IHRoaXMuTGF5ZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLmN1cnJlbnRNYXAuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAobHlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExheWVySWQgJiYgTGF5ZXJJZCA9PSBseXIuZ2V0U291cmNlKCkuZ2V0KCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyID0gbHlyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5zZXRTb3VyY2UoZ2VlTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV3JvbmcgRGF0YSBSZXR1cm5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZWVMYXllcjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgbmV3IG9sLmxheWVyLlRpbGUgb2JqZWN0IG9yIG51bGwgaWYgdGhlXG4vLyBsYXllckNvbmZpZyBpcyBpbnZhbGlkLlxubWVyY2F0b3IuY3JlYXRlTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJDb25maWcpIHtcbiAgICBsYXllckNvbmZpZy5zb3VyY2VDb25maWcuY3JlYXRlID0gdHJ1ZTtcbiAgICB2YXIgc291cmNlID0gbWVyY2F0b3IuY3JlYXRlU291cmNlKGxheWVyQ29uZmlnLnNvdXJjZUNvbmZpZyk7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAobGF5ZXJDb25maWcuZXh0ZW50ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5UaWxlKHt0aXRsZTogbGF5ZXJDb25maWcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW50OiBsYXllckNvbmZpZy5leHRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IG9sLmxheWVyLlRpbGUoe3RpdGxlOiBsYXllckNvbmZpZy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZX0pO1xuICAgIH1cbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogRnVuY3Rpb25zIHRvIHZlcmlmeSBtYXAgaW5wdXQgYXJndW1lbnRzXG4qKipcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBbUHVyZV0gUHJlZGljYXRlXG5tZXJjYXRvci52ZXJpZnlEaXZOYW1lID0gZnVuY3Rpb24gKGRpdk5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSkgIT0gbnVsbDtcbn07XG5cbi8vIFtQdXJlXSBQcmVkaWNhdGVcbm1lcmNhdG9yLnZlcmlmeUNlbnRlckNvb3JkcyA9IGZ1bmN0aW9uIChjZW50ZXJDb29yZHMpIHtcbiAgICB2YXIgbG9uID0gY2VudGVyQ29vcmRzWzBdO1xuICAgIHZhciBsYXQgPSBjZW50ZXJDb29yZHNbMV07XG4gICAgcmV0dXJuIGxvbiA+PSAtMTgwICYmIGxvbiA8PSAxODAgJiYgbGF0ID49IC05MCAmJiBsYXQgPD0gOTA7XG59O1xuXG4vLyBbUHVyZV0gUHJlZGljYXRlXG5tZXJjYXRvci52ZXJpZnlab29tTGV2ZWwgPSBmdW5jdGlvbiAoem9vbUxldmVsKSB7XG4gICAgcmV0dXJuIHpvb21MZXZlbCA+PSAwICYmIHpvb21MZXZlbCA8PSAyMDtcbn07XG5cbi8vIFtQdXJlXSBQcmVkaWNhdGVcbm1lcmNhdG9yLnZlcmlmeUxheWVyQ29uZmlnID0gZnVuY3Rpb24gKGxheWVyQ29uZmlnKSB7XG4gICAgbGV0IGxheWVyS2V5cyA9IE9iamVjdC5rZXlzKGxheWVyQ29uZmlnKTtcbiAgICByZXR1cm4gbGF5ZXJLZXlzLmluY2x1ZGVzKFwidGl0bGVcIilcbiAgICAgICAgJiYgbGF5ZXJLZXlzLmluY2x1ZGVzKFwiZXh0ZW50XCIpXG4gICAgICAgICYmIGxheWVyS2V5cy5pbmNsdWRlcyhcInNvdXJjZUNvbmZpZ1wiKVxuICAgICAgICAmJiBtZXJjYXRvci5jcmVhdGVTb3VyY2UobGF5ZXJDb25maWcuc291cmNlQ29uZmlnKSAhPSBudWxsO1xufTtcblxuLy8gW1B1cmVdIFByZWRpY2F0ZVxubWVyY2F0b3IudmVyaWZ5TGF5ZXJDb25maWdzID0gZnVuY3Rpb24gKGxheWVyQ29uZmlncykge1xuICAgIHJldHVybiBsYXllckNvbmZpZ3MuZXZlcnkobWVyY2F0b3IudmVyaWZ5TGF5ZXJDb25maWcpO1xufTtcblxubWVyY2F0b3IuY3VycmVudE1hcCA9IG51bGw7XG4vLyBbUHVyZV0gUmV0dXJucyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBnZW5lcmF0ZWQgd2hpbGUgdGVzdGluZyB0aGVcbi8vIGlucHV0IGFyZ3VtZW50cyBvciBudWxsIGlmIGFsbCB0ZXN0cyBwYXNzLlxubWVyY2F0b3IudmVyaWZ5TWFwSW5wdXRzID0gZnVuY3Rpb24gKGRpdk5hbWUsIGNlbnRlckNvb3Jkcywgem9vbUxldmVsLCBsYXllckNvbmZpZ3MpIHtcbiAgICBpZiAoIW1lcmNhdG9yLnZlcmlmeURpdk5hbWUoZGl2TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBkaXZOYW1lIC0+IFwiICsgZGl2TmFtZTtcbiAgICB9IGVsc2UgaWYgKCFtZXJjYXRvci52ZXJpZnlDZW50ZXJDb29yZHMoY2VudGVyQ29vcmRzKSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNlbnRlckNvb3JkcyAtPiBcIiArIGNlbnRlckNvb3JkcztcbiAgICB9IGVsc2UgaWYgKCFtZXJjYXRvci52ZXJpZnlab29tTGV2ZWwoem9vbUxldmVsKSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIHpvb21MZXZlbCAtPiBcIiArIHpvb21MZXZlbDtcbiAgICB9IGVsc2UgaWYgKCFtZXJjYXRvci52ZXJpZnlMYXllckNvbmZpZ3MobGF5ZXJDb25maWdzKSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGxheWVyQ29uZmlncyAtPiBcIiArIGxheWVyQ29uZmlncztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIENyZWF0ZSBhIG5ldyBtYXAgaW5zdGFuY2VcbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFtTaWRlIEVmZmVjdHNdIExvZ3MgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgY29uc29sZSBhbmQgcmV0dXJuc1xuLy8gbnVsbCBpZiB0aGUgaW5wdXRzIGFyZSBpbnZhbGlkLiBPdGhlcndpc2UsIGRpc3BsYXlzIGEgbWFwIGluIHRoZVxuLy8gbmFtZWQgZGl2IGFuZCByZXR1cm5zIGl0cyBjb25maWd1cmF0aW9uIG9iamVjdC5cbi8vXG4vLyBFeGFtcGxlIGNhbGw6XG4vLyB2YXIgbWFwQ29uZmlnID0gbWVyY2F0b3IuY3JlYXRlTWFwKFwic29tZS1kaXYtaWRcIiwgWzEwMi4wLCAxNy4wXSwgNSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3t0aXRsZTogXCJEaWdpdGFsR2xvYmVSZWNlbnRJbWFnZXJ5XCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW50OiBudWxsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZzoge3R5cGU6IFwiRGlnaXRhbEdsb2JlXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeUlkOiBcImRpZ2l0YWxnbG9iZS5uYWwwZzc1a1wiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBcInlvdXItZGlnaXRhbC1nbG9iZS1hY2Nlc3MtdG9rZW4taGVyZVwifX0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6IFwiQmluZ0FlcmlhbFwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVudDogbnVsbCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWc6IHt0eXBlOiBcIkJpbmdNYXBzXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeUlkOiBcIkFlcmlhbFwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBcInlvdXItYmluZy1tYXBzLWFjY2Vzcy10b2tlbi1oZXJlXCJ9fSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTogXCJEaWdpdGFsR2xvYmVXTVNJbWFnZXJ5XCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW50OiBudWxsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZzoge3R5cGU6IFwiR2VvU2VydmVyXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2Vvc2VydmVyVXJsOiBcImh0dHBzOi8vc2VydmljZXMuZGlnaXRhbGdsb2JlLmNvbS9tYXBzZXJ2aWNlL3dtc2FjY2Vzc1wiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb3NlcnZlclBhcmFtczoge1ZFUlNJT046IFwiMS4xLjFcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMQVlFUlM6IFwiRGlnaXRhbEdsb2JlOkltYWdlcnlcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT05ORUNUSUQ6IFwieW91ci1kaWdpdGFsLWdsb2JlLWNvbm5lY3QtaWQtaGVyZVwifX19XSk7XG5tZXJjYXRvci5jcmVhdGVNYXAgPSBmdW5jdGlvbiAoZGl2TmFtZSwgY2VudGVyQ29vcmRzLCB6b29tTGV2ZWwsIGxheWVyQ29uZmlncykge1xuICAgIHZhciBlcnJvck1zZyA9IG1lcmNhdG9yLnZlcmlmeU1hcElucHV0cyhkaXZOYW1lLCBjZW50ZXJDb29yZHMsIHpvb21MZXZlbCwgbGF5ZXJDb25maWdzKTtcbiAgICBpZiAoZXJyb3JNc2cpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENyZWF0ZSBlYWNoIG9mIHRoZSBsYXllcnMgdGhhdCB3aWxsIGJlIHNob3duIGluIHRoZSBtYXAgZnJvbSBsYXllckNvbmZpZ3NcbiAgICAgICAgdmFyIGxheWVycyA9IGxheWVyQ29uZmlncy5tYXAobWVyY2F0b3IuY3JlYXRlTGF5ZXIpO1xuXG4gICAgICAgIC8vIEFkZCBhIHNjYWxlIGxpbmUgdG8gdGhlIGRlZmF1bHQgbWFwIGNvbnRyb2xzXG4gICAgICAgIHZhciBjb250cm9scyA9IG9sLmNvbnRyb2wuZGVmYXVsdHMoKS5leHRlbmQoW25ldyBvbC5jb250cm9sLlNjYWxlTGluZSgpXSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBtYXAgdmlldyB1c2luZyB0aGUgcGFzc2VkIGluIGNlbnRlckNvb3JkcyBhbmQgem9vbUxldmVsXG4gICAgICAgIHZhciB2aWV3ID0gbmV3IG9sLlZpZXcoe3Byb2plY3Rpb246IFwiRVBTRzozODU3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogb2wucHJvai5mcm9tTG9uTGF0KGNlbnRlckNvb3JkcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVudDogbWVyY2F0b3IuZ2V0RnVsbEV4dGVudCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB6b29tTGV2ZWx9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBtYXAgb2JqZWN0XG4gICAgICAgIHZhciBtYXAgPSBuZXcgb2wuTWFwKHt0YXJnZXQ6IGRpdk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM6IGxheWVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IHZpZXd9KTtcbiAgICAgICAgbWVyY2F0b3IuY3VycmVudE1hcCA9IG1hcDtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtYXAgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIHtpbml0OiB7ZGl2TmFtZTogZGl2TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyQ29vcmRzOiBjZW50ZXJDb29yZHMsXG4gICAgICAgICAgICAgICAgICAgICAgIHpvb21MZXZlbDogem9vbUxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICBsYXllckNvbmZpZ3M6IGxheWVyQ29uZmlnc30sXG4gICAgICAgICAgICAgICAgbGF5ZXJzOiBtYXAuZ2V0TGF5ZXJzKCksXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICAgICAgICAgIHZpZXc6IHZpZXcsXG4gICAgICAgICAgICAgICAgbWFwOiBtYXB9O1xuICAgIH1cbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogRGVzdHJveSBhIG1hcCBpbnN0YW5jZVxuKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gW1NpZGUgRWZmZWN0c10gUmVtb3ZlcyB0aGUgbWFwQ29uZmlnJ3MgbWFwIGZyb20gaXRzIGNvbnRhaW5lciBkaXYuXG4vLyBSZXR1cm5zIG51bGwuXG5tZXJjYXRvci5kZXN0cm95TWFwID0gZnVuY3Rpb24gKG1hcENvbmZpZykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcENvbmZpZy5pbml0LmRpdk5hbWUpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIFJlc2V0IGEgbWFwIGluc3RhbmNlIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4qKipcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBbU2lkZSBFZmZlY3RzXSBSZXR1cm5zIGEgbmV3IG1hcENvbmZpZyBvYmplY3QgY3JlYXRlZCB3aXRoIHRoZVxuLy8gaW5pdGlhbGl6YXRpb24tdGltZSB2YWx1ZXMgb2YgdGhlIHBhc3NlZC1pbiBtYXBDb25maWcuIFJlbW92ZXMgdGhlXG4vLyBvcmlnaW5hbCBtYXBDb25maWcncyBtYXAgZnJvbSBpdHMgY29udGFpbmVyIGRpdiBhbmQgcmVuZGVycyB0aGUgbmV3XG4vLyBtYXBDb25maWcncyBtYXAgaW50byBpdCBpbnN0ZWFkLlxuLy9cbi8vIEV4YW1wbGUgY2FsbDpcbi8vIHZhciBuZXdNYXBDb25maWcgPSBtZXJjYXRvci5yZXNldE1hcChtYXBDb25maWcpO1xubWVyY2F0b3IucmVzZXRNYXAgPSBmdW5jdGlvbiAobWFwQ29uZmlnKSB7XG4gICAgbWVyY2F0b3IuZGVzdHJveU1hcChtYXBDb25maWcpO1xuICAgIHJldHVybiBtZXJjYXRvci5jcmVhdGVNYXAobWFwQ29uZmlnLmluaXQuZGl2TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbmZpZy5pbml0LmNlbnRlckNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbmZpZy5pbml0Lnpvb21MZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbmZpZy5pbml0LmxheWVyQ29uZmlncyk7XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIEZ1bmN0aW9ucyB0byBzd2l0Y2ggdGhlIHZpc2libGUgYmFzZW1hcCBpbWFnZXJ5IGFuZCB6b29tIHRvIGEgbGF5ZXJcbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFtTaWRlIEVmZmVjdHNdIEhpZGVzIGFsbCByYXN0ZXIgbGF5ZXJzIGluIG1hcENvbmZpZyBleGNlcHQgdGhvc2Vcbi8vIHdpdGggdGl0bGUgPT0gbGF5ZXJUaXRsZS5cbm1lcmNhdG9yLnNldFZpc2libGVMYXllciA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGxheWVyVGl0bGUpIHtcbiAgICBtYXBDb25maWcubGF5ZXJzLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICAgICAgaWYgKGxheWVyLmdldFZpc2libGUoKSA9PSB0cnVlICYmIGxheWVyIGluc3RhbmNlb2Ygb2wubGF5ZXIuVGlsZSkge1xuICAgICAgICAgICAgICAgIGxheWVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxheWVyLmdldChcInRpdGxlXCIpID09IGxheWVyVGl0bGUpIHtcbiAgICAgICAgICAgICAgICBsYXllci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gbWFwQ29uZmlnO1xufTtcblxuLy8gW1B1cmVdIFJldHVybnMgdGhlIG1hcCBsYXllciB3aXRoIHRpdGxlID09IGxheWVyVGl0bGUgb3IgbnVsbCBpZiBub1xuLy8gc3VjaCBsYXllciBleGlzdHMuXG5tZXJjYXRvci5nZXRMYXllckJ5VGl0bGUgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBsYXllclRpdGxlKSB7XG4gICAgcmV0dXJuIG1hcENvbmZpZy5sYXllcnMuZ2V0QXJyYXkoKS5maW5kKFxuICAgICAgICBmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXllci5nZXQoXCJ0aXRsZVwiKSA9PSBsYXllclRpdGxlO1xuICAgICAgICB9XG4gICAgKTtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBpbml0aWFsIGxheWVyQ29uZmlnIGZvciB0aGUgbWFwIGxheWVyIHdpdGggdGl0bGVcbi8vID09IGxheWVyVGl0bGUgb3IgbnVsbCBpZiBubyBzdWNoIGxheWVyIGV4aXN0cy5cbm1lcmNhdG9yLmdldExheWVyQ29uZmlnQnlUaXRsZSA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGxheWVyVGl0bGUpIHtcbiAgICByZXR1cm4gbWFwQ29uZmlnLmluaXQubGF5ZXJDb25maWdzLmZpbmQoXG4gICAgICAgIGZ1bmN0aW9uIChsYXllckNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyQ29uZmlnLnRpdGxlID09IGxheWVyVGl0bGU7XG4gICAgICAgIH1cbiAgICApO1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gRmluZHMgdGhlIG1hcCBsYXllciB3aXRoIHRpdGxlID09IGxheWVyVGl0bGUgYW5kXG4vLyBhcHBsaWVzIHRyYW5zZm9ybWVyIHRvIGl0cyBpbml0aWFsIHNvdXJjZUNvbmZpZyB0byBjcmVhdGUgYSBuZXdcbi8vIHNvdXJjZSBmb3IgdGhlIGxheWVyLlxubWVyY2F0b3IudXBkYXRlTGF5ZXJTb3VyY2UgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBsYXllclRpdGxlLCB0cmFuc2Zvcm1lciwgY2FsbGVyKSB7XG4gICAgdmFyIGxheWVyID0gbWVyY2F0b3IuZ2V0TGF5ZXJCeVRpdGxlKG1hcENvbmZpZywgbGF5ZXJUaXRsZSk7XG4gICAgdmFyIGxheWVyQ29uZmlnID0gbWVyY2F0b3IuZ2V0TGF5ZXJDb25maWdCeVRpdGxlKG1hcENvbmZpZywgbGF5ZXJUaXRsZSk7XG4gICAgaWYgKGxheWVyICYmIGxheWVyQ29uZmlnKSB7XG4gICAgICAgIGxheWVyLnNldFNvdXJjZShtZXJjYXRvci5jcmVhdGVTb3VyY2UodHJhbnNmb3JtZXIuY2FsbChjYWxsZXIsIGxheWVyQ29uZmlnLnNvdXJjZUNvbmZpZykpKTtcbiAgICB9XG59O1xuXG4vLyBbU2lkZSBFZmZlY3RzXSBGaW5kcyB0aGUgbWFwIGxheWVyIHdpdGggdGl0bGUgPT0gbGF5ZXJUaXRsZSBhbmRcbi8vIGFwcGVuZHMgbmV3UGFyYW1zIHRvIGl0cyBzb3VyY2UncyBXTVMgcGFyYW1zIG9iamVjdC5cbi8vXG4vLyBFeGFtcGxlIGNhbGw6XG4vLyB2YXIgbWFwQ29uZmlnMiA9IG1lcmNhdG9yLnVwZGF0ZUxheWVyV21zUGFyYW1zKG1hcENvbmZpZyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEaWdpdGFsR2xvYmVXTVNJbWFnZXJ5XCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDT1ZFUkFHRV9DUUxfRklMVEVSOiBcIihhY3F1aXNpdGlvbl9kYXRlPj0nXCIgKyBpbWFnZXJ5WWVhciArIFwiLTAxLTAxJylcIlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJBTkQoYWNxdWlzaXRpb25fZGF0ZTw9J1wiICsgaW1hZ2VyeVllYXIgKyBcIi0xMi0zMScpXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRUFUVVJFUFJPRklMRTogc3RhY2tpbmdQcm9maWxlfSk7XG5tZXJjYXRvci51cGRhdGVMYXllcldtc1BhcmFtcyA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGxheWVyVGl0bGUsIG5ld1BhcmFtcykge1xuICAgIHZhciBsYXllciA9IG1lcmNhdG9yLmdldExheWVyQnlUaXRsZShtYXBDb25maWcsIGxheWVyVGl0bGUpO1xuICAgIGlmIChsYXllcikge1xuICAgICAgICB2YXIgbWVyZ2VkUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgbGF5ZXIuZ2V0U291cmNlKCkuZ2V0UGFyYW1zKCksIG5ld1BhcmFtcyk7XG4gICAgICAgIGxheWVyLmdldFNvdXJjZSgpLnVwZGF0ZVBhcmFtcyhtZXJnZWRQYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ29uZmlnO1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gWm9vbXMgdGhlIG1hcCB2aWV3IHRvIGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBleHRlbnQuXG5tZXJjYXRvci56b29tTWFwVG9FeHRlbnQgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBleHRlbnQsIG1heFpvb20pIHtcbiAgICBtYXBDb25maWcudmlldy5maXQoZXh0ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICBtYXBDb25maWcubWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAge21heFpvb206IG1heFpvb20gfHwgMTl9KTtcbiAgICByZXR1cm4gbWFwQ29uZmlnO1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gWm9vbXMgdGhlIG1hcCB2aWV3IHRvIGNvbnRhaW4gdGhlIGxheWVyIHdpdGhcbi8vIHRpdGxlID09IGxheWVyVGl0bGUuXG5tZXJjYXRvci56b29tTWFwVG9MYXllciA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGxheWVyVGl0bGUsIG1heFpvb20pIHtcbiAgICB2YXIgbGF5ZXIgPSBtZXJjYXRvci5nZXRMYXllckJ5VGl0bGUobWFwQ29uZmlnLCBsYXllclRpdGxlKTtcbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgbWVyY2F0b3Iuem9vbU1hcFRvRXh0ZW50KG1hcENvbmZpZywgbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RXh0ZW50KCksIG1heFpvb20pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ29uZmlnO1xufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qKipcbioqKiBGdW5jdGlvbnMgdG8gY3JlYXRlIG1hcCBzdHlsZXNcbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHRoYXQgZGlzcGxheXMgdGhlIGltYWdlIGF0IGltYWdlU3JjLlxubWVyY2F0b3IuZ2V0SWNvblN0eWxlID0gZnVuY3Rpb24gKGltYWdlU3JjKSB7XG4gICAgcmV0dXJuIG5ldyBvbC5zdHlsZS5TdHlsZSh7aW1hZ2U6IG5ldyBvbC5zdHlsZS5JY29uKHtzcmM6IGltYWdlU3JjfSl9KTtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHRoYXQgZGlzcGxheXMgYSBjaXJjbGUgd2l0aCB0aGVcbi8vIHNwZWNpZmllZCByYWRpdXMsIGZpbGxDb2xvciwgYm9yZGVyQ29sb3IsIGFuZCBib3JkZXJXaWR0aC4gSWYgdGV4dFxuLy8gYW5kIHRleHRGaWxsQ29sb3IgYXJlIGFsc28gcGFzc2VkLCB0aGV5IHdpbGwgYmUgdXNlZCB0byBvdmVybGF5XG4vLyB0ZXh0IG9uIHRoZSBjaXJjbGUuXG5tZXJjYXRvci5nZXRDaXJjbGVTdHlsZSA9IGZ1bmN0aW9uIChyYWRpdXMsIGZpbGxDb2xvciwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoLCB0ZXh0LCB0ZXh0RmlsbENvbG9yKSB7XG4gICAgaWYgKHRleHQgPT0gbnVsbCB8fCB0ZXh0RmlsbENvbG9yID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvbC5zdHlsZS5TdHlsZSh7aW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe3JhZGl1czogcmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbENvbG9yID8gbmV3IG9sLnN0eWxlLkZpbGwoe2NvbG9yOiBmaWxsQ29sb3J9KSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe2NvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJvcmRlcldpZHRofSl9KX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgb2wuc3R5bGUuU3R5bGUoe2ltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtyYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxDb2xvciA/IG5ldyBvbC5zdHlsZS5GaWxsKHtjb2xvcjogZmlsbENvbG9yfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtjb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBib3JkZXJXaWR0aH0pfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBvbC5zdHlsZS5UZXh0KHt0ZXh0OiB0ZXh0LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7Y29sb3I6IHRleHRGaWxsQ29sb3J9KX0pfSk7XG4gICAgfVxufTtcblxuLy8gW1B1cmVdIFJldHVybnMgYSBzdHlsZSBvYmplY3QgdGhhdCBkaXNwbGF5cyBhIHNoYXBlIHdpdGggdGhlXG4vLyBzcGVjaWZpZWQgbnVtYmVyIG9mIHBvaW50cywgcmFkaXVzLCByb3RhdGlvbiwgZmlsbENvbG9yLFxuLy8gYm9yZGVyQ29sb3IsIGFuZCBib3JkZXJXaWR0aC4gQSB0cmlhbmdsZSBoYXMgMyBwb2ludHMuIEEgc3F1YXJlIGhhc1xuLy8gNCBwb2ludHMgd2l0aCByb3RhdGlvbiBwaS80LiBBIHN0YXIgaGFzIDUgcG9pbnRzLlxubWVyY2F0b3IuZ2V0UmVndWxhclNoYXBlU3R5bGUgPSBmdW5jdGlvbiAocmFkaXVzLCBwb2ludHMsIHJvdGF0aW9uLCBmaWxsQ29sb3IsIGJvcmRlckNvbG9yLCBib3JkZXJXaWR0aCkge1xuICAgIHJldHVybiBuZXcgb2wuc3R5bGUuU3R5bGUoe2ltYWdlOiBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtyYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiBwb2ludHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiByb3RhdGlvbiB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsQ29sb3IgPyBuZXcgb2wuc3R5bGUuRmlsbCh7Y29sb3I6IGZpbGxDb2xvcn0pIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtjb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJvcmRlcldpZHRofSl9KX0pO1xufTtcblxuLy8gW1B1cmVdIFJldHVybnMgYSBzdHlsZSBvYmplY3QgdGhhdCBkaXNwbGF5cyBhbnkgc2hhcGUgdG8gd2hpY2ggaXRcbi8vIGlzIGFwcGxpZWQgd3RoIHRoZSBzcGVjaWZpZWQgZmlsbENvbG9yLCBib3JkZXJDb2xvciwgYW5kXG4vLyBib3JkZXJXaWR0aC5cbm1lcmNhdG9yLmdldFBvbHlnb25TdHlsZSA9IGZ1bmN0aW9uIChmaWxsQ29sb3IsIGJvcmRlckNvbG9yLCBib3JkZXJXaWR0aCkge1xuICAgIHJldHVybiBuZXcgb2wuc3R5bGUuU3R5bGUoe2ZpbGw6IGZpbGxDb2xvciA/IG5ldyBvbC5zdHlsZS5GaWxsKHtjb2xvcjogZmlsbENvbG9yfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7Y29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJvcmRlcldpZHRofSl9KTtcbn07XG5cbnZhciBjZW9NYXBTdHlsZXMgPSB7aWNvbjogICAgICAgICBtZXJjYXRvci5nZXRJY29uU3R5bGUoXCJmYXZpY29uLmljb1wiKSxcbiAgICAgICAgICAgICAgICAgICAgY2VvSWNvbjogICAgICBtZXJjYXRvci5nZXRJY29uU3R5bGUoXCJjZW9pY29uLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVkUG9pbnQ6ICAgICBtZXJjYXRvci5nZXRDaXJjbGVTdHlsZSg1LCBudWxsLCBcIiM4YjIzMjNcIiwgMiksXG4gICAgICAgICAgICAgICAgICAgIGJsdWVQb2ludDogICAgbWVyY2F0b3IuZ2V0Q2lyY2xlU3R5bGUoNSwgbnVsbCwgXCIjMjMyMzhiXCIsIDIpLFxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3dQb2ludDogIG1lcmNhdG9yLmdldENpcmNsZVN0eWxlKDUsIG51bGwsIFwieWVsbG93XCIsIDIpLFxuICAgICAgICAgICAgICAgICAgICByZWRDaXJjbGU6ICAgIG1lcmNhdG9yLmdldENpcmNsZVN0eWxlKDUsIG51bGwsIFwicmVkXCIsIDIpLFxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3dDaXJjbGU6IG1lcmNhdG9yLmdldENpcmNsZVN0eWxlKDUsIG51bGwsIFwieWVsbG93XCIsIDIpLFxuICAgICAgICAgICAgICAgICAgICBncmVlbkNpcmNsZTogIG1lcmNhdG9yLmdldENpcmNsZVN0eWxlKDUsIG51bGwsIFwiZ3JlZW5cIiwgMiksXG4gICAgICAgICAgICAgICAgICAgIHJlZFNxdWFyZTogICAgbWVyY2F0b3IuZ2V0UmVndWxhclNoYXBlU3R5bGUoNSwgNCwgTWF0aC5QSS80LCBudWxsLCBcInJlZFwiLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93U3F1YXJlOiBtZXJjYXRvci5nZXRSZWd1bGFyU2hhcGVTdHlsZSg1LCA0LCBNYXRoLlBJLzQsIG51bGwsIFwieWVsbG93XCIsIDIpLFxuICAgICAgICAgICAgICAgICAgICBncmVlblNxdWFyZTogIG1lcmNhdG9yLmdldFJlZ3VsYXJTaGFwZVN0eWxlKDUsIDQsIE1hdGguUEkvNCwgbnVsbCwgXCJncmVlblwiLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlcjogICAgICBtZXJjYXRvci5nZXRDaXJjbGVTdHlsZSg1LCBcIiM4YjIzMjNcIiwgXCIjZmZmZmZmXCIsIDEpLFxuICAgICAgICAgICAgICAgICAgICBwb2x5Z29uOiAgICAgIG1lcmNhdG9yLmdldFBvbHlnb25TdHlsZShudWxsLCBcInllbGxvd1wiLCAzKX07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogRnVuY3Rpb25zIHRvIGRyYXcgcHJvamVjdCBib3VuZGFyaWVzIGFuZCBwbG90IGJ1ZmZlcnNcbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFtTaWRlIEVmZmVjdHNdIEFkZHMgYSBuZXcgdmVjdG9yIGxheWVyIHRvIHRoZSBtYXBDb25maWcncyBtYXAgb2JqZWN0LlxubWVyY2F0b3IuYWRkVmVjdG9yTGF5ZXIgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBsYXllclRpdGxlLCB2ZWN0b3JTb3VyY2UsIHN0eWxlKSB7XG4gICAgdmFyIHZlY3RvckxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7dGl0bGU6IGxheWVyVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiB2ZWN0b3JTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlfSk7XG4gICAgbWFwQ29uZmlnLm1hcC5hZGRMYXllcih2ZWN0b3JMYXllcik7XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8vIFtTaWRlIEVmZmVjdHNdIFJlbW92ZXMgdGhlIGxheWVyIHdpdGggdGl0bGUgPT0gbGF5ZXJUaXRsZSBmcm9tXG4vLyBtYXBDb25maWcncyBtYXAgb2JqZWN0LlxubWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlID0gZnVuY3Rpb24gKG1hcENvbmZpZywgbGF5ZXJUaXRsZSkge1xuICAgIHZhciBsYXllciA9IG1lcmNhdG9yLmdldExheWVyQnlUaXRsZShtYXBDb25maWcsIGxheWVyVGl0bGUpO1xuICAgIGlmIChsYXllcikge1xuICAgICAgICBtYXBDb25maWcubWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgZ2VvbWV0cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc2hhcGUgZGVzY3JpYmVkXG4vLyBpbiB0aGUgcGFzc2VkIGluIEdlb0pTT04gc3RyaW5nLiBJZiByZXByb2plY3RUb01hcCBpcyB0cnVlLFxuLy8gcmVwcm9qZWN0IHRoZSBjcmVhdGVkIGdlb21ldHJ5IGZyb20gV0dTODQgdG8gV2ViIE1lcmNhdG9yIGJlZm9yZVxuLy8gcmV0dXJuaW5nLlxubWVyY2F0b3IucGFyc2VHZW9Kc29uID0gZnVuY3Rpb24gKGdlb0pzb24sIHJlcHJvamVjdFRvTWFwKSB7XG4gICAgdmFyIGZvcm1hdCA9IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpO1xuICAgIHZhciBnZW9tZXRyeSA9IGZvcm1hdC5yZWFkR2VvbWV0cnkoZ2VvSnNvbik7XG4gICAgaWYgKHJlcHJvamVjdFRvTWFwKSB7XG4gICAgICAgIHJldHVybiBnZW9tZXRyeS50cmFuc2Zvcm0oXCJFUFNHOjQzMjZcIiwgXCJFUFNHOjM4NTdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xuICAgIH1cbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgbmV3IHZlY3RvciBzb3VyY2UgY29udGFpbmluZyB0aGUgcGFzc2VkIGluIGdlb21ldHJ5LlxubWVyY2F0b3IuZ2VvbWV0cnlUb1ZlY3RvclNvdXJjZSA9IGZ1bmN0aW9uIChnZW9tZXRyeSkge1xuICAgIHJldHVybiBuZXcgb2wuc291cmNlLlZlY3Rvcih7ZmVhdHVyZXM6IFtcbiAgICAgICAgbmV3IG9sLkZlYXR1cmUoe2dlb21ldHJ5OiBnZW9tZXRyeX0pXG4gICAgXX0pO1xufTtcblxuLy8gW1B1cmVdIFJldHVybnMgYSBwb2x5Z29uIGdlb21ldHJ5IG1hdGNoaW5nIHRoZSBwYXNzZWQgaW5cbi8vIHBhcmFtZXRlcnMuXG5tZXJjYXRvci5nZXRQbG90UG9seWdvbiA9IGZ1bmN0aW9uIChjZW50ZXIsIHNpemUsIHNoYXBlKSB7XG4gICAgdmFyIGNvb3JkcyA9IG1lcmNhdG9yLnBhcnNlR2VvSnNvbihjZW50ZXIsIHRydWUpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIGNlbnRlclggPSBjb29yZHNbMF07XG4gICAgdmFyIGNlbnRlclkgPSBjb29yZHNbMV07XG4gICAgdmFyIHJhZGl1cyA9IHNpemUgLyAyO1xuICAgIGlmIChzaGFwZSA9PSBcImNpcmNsZVwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgb2wuZ2VvbS5DaXJjbGUoW2NlbnRlclgsIGNlbnRlclldLCByYWRpdXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvbC5nZW9tLlBvbHlnb24uZnJvbUV4dGVudChbY2VudGVyWCAtIHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJZIC0gcmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclggKyByYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyWSArIHJhZGl1c10pO1xuICAgIH1cbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgYm91bmRpbmcgYm94IGZvciB0aGUgcGxvdCBpbiBXZWIgTWVyY2F0b3IgYXMgW2xseCxcbi8vIGxseSwgdXJ4LCB1cnldLlxubWVyY2F0b3IuZ2V0UGxvdEV4dGVudCA9IGZ1bmN0aW9uIChjZW50ZXIsIHNpemUsIHNoYXBlKSB7XG4gICAgdmFyIGdlb21ldHJ5ID0gbWVyY2F0b3IuZ2V0UGxvdFBvbHlnb24oY2VudGVyLCBzaXplLCBzaGFwZSk7XG4gICAgcmV0dXJuIG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KGdlb21ldHJ5LmdldEV4dGVudCgpLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgbmV3IHZlY3RvciBzb3VyY2UgY29udGFpbmluZyB0aGUgcGFzc2VkIGluIHBsb3RzLlxuLy8gRmVhdHVyZXMgYXJlIGNvbnN0cnVjdGVkIGZyb20gZWFjaCBwbG90IHVzaW5nIGl0cyBpZCBhbmQgY2VudGVyXG4vLyBmaWVsZHMuXG5tZXJjYXRvci5wbG90c1RvVmVjdG9yU291cmNlID0gZnVuY3Rpb24gKHBsb3RzKSB7XG4gICAgdmFyIGZlYXR1cmVzID0gcGxvdHMubWFwKFxuICAgICAgICBmdW5jdGlvbiAocGxvdCkge1xuICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gbWVyY2F0b3IucGFyc2VHZW9Kc29uKHBsb3QuY2VudGVyLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgb2wuRmVhdHVyZSh7cGxvdElkOiBwbG90LmlkLCBnZW9tZXRyeTogZ2VvbWV0cnl9KTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtmZWF0dXJlczogZmVhdHVyZXN9KTtcbn07XG5cbi8vIFtTaWRlIEVmZmVjdHNdIEFkZHMgdGhyZWUgdmVjdG9yIGxheWVycyB0byB0aGUgbWFwQ29uZmlnJ3MgbWFwXG4vLyBvYmplY3Q6IFwiZmxhZ2dlZFBsb3RzXCIgaW4gcmVkLCBcImFuYWx5emVkUGxvdHNcIiBpbiBncmVlbiwgYW5kXG4vLyBcInVuYW5hbHl6ZWRQbG90c1wiIGluIHllbGxvdy5cbm1lcmNhdG9yLmFkZFBsb3RPdmVydmlld0xheWVycyA9IGZ1bmN0aW9uIChtYXBDb25maWcsIHBsb3RzLCBzaGFwZSkge1xuICAgIG1lcmNhdG9yLmFkZFZlY3RvckxheWVyKG1hcENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsYWdnZWRQbG90c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLnBsb3RzVG9WZWN0b3JTb3VyY2UocGxvdHMuZmlsdGVyKGZ1bmN0aW9uIChwbG90KSB7IHJldHVybiBwbG90LmZsYWdnZWQgPT0gdHJ1ZTsgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlID09IFwiY2lyY2xlXCIgPyBjZW9NYXBTdHlsZXMucmVkQ2lyY2xlIDogY2VvTWFwU3R5bGVzLnJlZFNxdWFyZSk7XG4gICAgbWVyY2F0b3IuYWRkVmVjdG9yTGF5ZXIobWFwQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5hbHl6ZWRQbG90c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLnBsb3RzVG9WZWN0b3JTb3VyY2UocGxvdHMuZmlsdGVyKGZ1bmN0aW9uIChwbG90KSB7IHJldHVybiBwbG90LmFuYWx5c2VzID4gMCAmJiBwbG90LmZsYWdnZWQgPT0gZmFsc2U7IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZSA9PSBcImNpcmNsZVwiID8gY2VvTWFwU3R5bGVzLmdyZWVuQ2lyY2xlIDogY2VvTWFwU3R5bGVzLmdyZWVuU3F1YXJlKTtcbiAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcihtYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmFuYWx5emVkUGxvdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJjYXRvci5wbG90c1RvVmVjdG9yU291cmNlKHBsb3RzLmZpbHRlcihmdW5jdGlvbiAocGxvdCkgeyByZXR1cm4gcGxvdC5hbmFseXNlcyA9PSAwICYmIHBsb3QuZmxhZ2dlZCA9PSBmYWxzZTsgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlID09IFwiY2lyY2xlXCIgPyBjZW9NYXBTdHlsZXMueWVsbG93Q2lyY2xlIDogY2VvTWFwU3R5bGVzLnllbGxvd1NxdWFyZSk7XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogRnVuY3Rpb25zIHRvIHNldHVwIHNlbGVjdCBpbnRlcmFjdGlvbnMgZm9yIGNsaWNrIGFuZCBjbGljay1hbmQtZHJhZyBldmVudHNcbioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBtYXAgaW50ZXJhY3Rpb24gd2l0aCB0aXRsZSA9PSBpbnRlcmFjdGlvblRpdGxlXG4vLyBvciBudWxsIGlmIG5vIHN1Y2ggaW50ZXJhY3Rpb24gZXhpc3RzLlxubWVyY2F0b3IuZ2V0SW50ZXJhY3Rpb25CeVRpdGxlID0gZnVuY3Rpb24gKG1hcENvbmZpZywgaW50ZXJhY3Rpb25UaXRsZSkge1xuICAgIHJldHVybiBtYXBDb25maWcubWFwLmdldEludGVyYWN0aW9ucygpLmdldEFycmF5KCkuZmluZChcbiAgICAgICAgZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJhY3Rpb24uZ2V0KFwidGl0bGVcIikgPT0gaW50ZXJhY3Rpb25UaXRsZTtcbiAgICAgICAgfVxuICAgICk7XG59O1xuXG4vLyBbU2lkZSBFZmZlY3RzXSBSZW1vdmVzIHRoZSBpbnRlcmFjdGlvbiB3aXRoIHRpdGxlID09IGludGVyYWN0aW9uVGl0bGUgZnJvbVxuLy8gbWFwQ29uZmlnJ3MgbWFwIG9iamVjdC5cbm1lcmNhdG9yLnJlbW92ZUludGVyYWN0aW9uQnlUaXRsZSA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGludGVyYWN0aW9uVGl0bGUpIHtcbiAgICB2YXIgaW50ZXJhY3Rpb24gPSBtZXJjYXRvci5nZXRJbnRlcmFjdGlvbkJ5VGl0bGUobWFwQ29uZmlnLCBpbnRlcmFjdGlvblRpdGxlKTtcbiAgICBpZiAoaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgbWFwQ29uZmlnLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBtYXBDb25maWc7XG59O1xuXG4vLyBbUHVyZV0gUmV0dXJucyBhIG5ldyBjbGljayBzZWxlY3QgaW50ZXJhY3Rpb24gd2l0aCB0aXRsZSA9XG4vLyBpbnRlcmFjdGlvblRpdGxlIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgaW4gbGF5ZXIuIFdoZW5cbi8vIGEgZmVhdHVyZSBpcyBzZWxlY3RlZCwgaXRzIHN0eWxlIGlzIHN0b3JlZCBpbiBmZWF0dXJlU3R5bGVzIGFuZFxuLy8gdGhlbiBjbGVhcmVkIG9uIHRoZSBtYXAuIFdoZW4gYSBmZWF0dXJlIGlzIGRlc2VsZWN0ZWQsIGl0cyBzYXZlZFxuLy8gc3R5bGUgaXMgcmVzdG9yZWQgb24gdGhlIG1hcC5cbm1lcmNhdG9yLm1ha2VDbGlja1NlbGVjdCA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvblRpdGxlLCBsYXllciwgZmVhdHVyZVN0eWxlcykge1xuICAgIHZhciBzZWxlY3QgPSBuZXcgb2wuaW50ZXJhY3Rpb24uU2VsZWN0KHtsYXllcnM6IFtsYXllcl19KTtcbiAgICBzZWxlY3Quc2V0KFwidGl0bGVcIiwgaW50ZXJhY3Rpb25UaXRsZSk7XG4gICAgdmFyIGFjdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zZWxlY3RlZC5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICBmZWF0dXJlU3R5bGVzW2ZlYXR1cmVdID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgZmVhdHVyZS5zZXRTdHlsZShudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LmRlc2VsZWN0ZWQuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgdmFyIHNhdmVkU3R5bGUgPSBmZWF0dXJlU3R5bGVzW2ZlYXR1cmVdO1xuICAgICAgICAgICAgaWYgKHNhdmVkU3R5bGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuc2V0U3R5bGUoc2F2ZWRTdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VsZWN0Lm9uKFwic2VsZWN0XCIsIGFjdGlvbik7XG4gICAgcmV0dXJuIHNlbGVjdDtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgbmV3IGRyYWdCb3ggc2VsZWN0IGludGVyYWN0aW9uIHdpdGggdGl0bGUgPVxuLy8gaW50ZXJhY3Rpb25UaXRsZSB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFzc2VkIGluIGxheWVyLiBXaGVuXG4vLyBhIGZlYXR1cmUgaXMgc2VsZWN0ZWQsIGl0cyBzdHlsZSBpcyBzdG9yZWQgaW4gZmVhdHVyZVN0eWxlcyBhbmRcbi8vIHRoZW4gY2xlYXJlZCBvbiB0aGUgbWFwLiBXaGVuIGEgZmVhdHVyZSBpcyBkZXNlbGVjdGVkLCBpdHMgc2F2ZWRcbi8vIHN0eWxlIGlzIHJlc3RvcmVkIG9uIHRoZSBtYXAuXG5tZXJjYXRvci5tYWtlRHJhZ0JveFNlbGVjdCA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvblRpdGxlLCBsYXllciwgZmVhdHVyZVN0eWxlcywgc2VsZWN0ZWRGZWF0dXJlcykge1xuICAgIHZhciBkcmFnQm94ID0gbmV3IG9sLmludGVyYWN0aW9uLkRyYWdCb3goe2NvbmRpdGlvbjogb2wuZXZlbnRzLmNvbmRpdGlvbi5wbGF0Zm9ybU1vZGlmaWVyS2V5T25seX0pO1xuICAgIGRyYWdCb3guc2V0KFwidGl0bGVcIiwgaW50ZXJhY3Rpb25UaXRsZSk7XG4gICAgdmFyIGJveHN0YXJ0QWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLmNsZWFyKCk7XG4gICAgfTtcbiAgICB2YXIgYm94ZW5kQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXh0ZW50ID0gZHJhZ0JveC5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpO1xuICAgICAgICB2YXIgc2F2ZVN0eWxlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgIGZlYXR1cmVTdHlsZXNbZmVhdHVyZV0gPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICAgICAgICBmZWF0dXJlLnNldFN0eWxlKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBsYXllci5nZXRTb3VyY2UoKS5mb3JFYWNoRmVhdHVyZUludGVyc2VjdGluZ0V4dGVudChleHRlbnQsIHNhdmVTdHlsZSk7XG4gICAgfTtcbiAgICBkcmFnQm94Lm9uKFwiYm94c3RhcnRcIiwgYm94c3RhcnRBY3Rpb24pO1xuICAgIGRyYWdCb3gub24oXCJib3hlbmRcIiwgYm94ZW5kQWN0aW9uKTtcbiAgICByZXR1cm4gZHJhZ0JveDtcbn07XG4vLyBbU2lkZSBFZmZlY3RzXSBBZGRzIGEgY2xpY2sgc2VsZWN0IGludGVyYWN0aW9uIGFuZCBhIGRyYWdCb3ggc2VsZWN0XG4vLyBpbnRlcmFjdGlvbiB0byBtYXBDb25maWcncyBtYXAgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgbGF5ZXJcbi8vIHdpdGggdGl0bGUgPT0gbGF5ZXJUaXRsZS5cbm1lcmNhdG9yLmVuYWJsZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGxheWVyVGl0bGUpIHtcbiAgICB2YXIgbGF5ZXIgPSBtZXJjYXRvci5nZXRMYXllckJ5VGl0bGUobWFwQ29uZmlnLCBsYXllclRpdGxlKTtcbiAgICB2YXIgZmVhdHVyZVN0eWxlcyA9IHt9OyAvLyBob2xkcyBzYXZlZCBzdHlsZXMgZm9yIGZlYXR1cmVzIHNlbGVjdGVkIGJ5IGVpdGhlciBpbnRlcmFjdGlvblxuICAgIHZhciBjbGlja1NlbGVjdCA9IG1lcmNhdG9yLm1ha2VDbGlja1NlbGVjdChcImNsaWNrU2VsZWN0XCIsIGxheWVyLCBmZWF0dXJlU3R5bGVzKTtcbiAgICB2YXIgc2VsZWN0ZWRGZWF0dXJlcyA9IGNsaWNrU2VsZWN0LmdldEZlYXR1cmVzKCk7XG4gICAgdmFyIGRyYWdCb3hTZWxlY3QgPSBtZXJjYXRvci5tYWtlRHJhZ0JveFNlbGVjdChcImRyYWdCb3hTZWxlY3RcIiwgbGF5ZXIsIGZlYXR1cmVTdHlsZXMsIHNlbGVjdGVkRmVhdHVyZXMpO1xuICAgIG1hcENvbmZpZy5tYXAuYWRkSW50ZXJhY3Rpb24oY2xpY2tTZWxlY3QpO1xuICAgIG1hcENvbmZpZy5tYXAuYWRkSW50ZXJhY3Rpb24oZHJhZ0JveFNlbGVjdCk7XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8vIFtTaWRlIEVmZmVjdHNdIFJlbW92ZXMgdGhlIGNsaWNrIHNlbGVjdCBhbmQgZHJhZ0JveCBzZWxlY3Rcbi8vIGludGVyYWN0aW9ucyBmcm9tIG1hcENvbmZpZydzIG1hcCBvYmplY3QuXG5tZXJjYXRvci5kaXNhYmxlU2VsZWN0aW9uID0gZnVuY3Rpb24gKG1hcENvbmZpZykge1xuICAgIG1lcmNhdG9yLnJlbW92ZUludGVyYWN0aW9uQnlUaXRsZShtYXBDb25maWcsIFwiY2xpY2tTZWxlY3RcIik7XG4gICAgbWVyY2F0b3IucmVtb3ZlSW50ZXJhY3Rpb25CeVRpdGxlKG1hcENvbmZpZywgXCJkcmFnQm94U2VsZWN0XCIpO1xuICAgIHJldHVybiBtYXBDb25maWc7XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIEZ1bmN0aW9ucyB0byBkcmF3IHNhbXBsZSBwb2ludHMgaW5zaWRlIGEgcGxvdFxuKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gW1NpZGUgRWZmZWN0c10gQWRkcyBhIG5ldyB2ZWN0b3IgbGF5ZXIgY2FsbGVkXG4vLyBwb2ludDo8bG9uZ2l0dWRlPjo8bGF0aXR1ZGU+IHRvIG1hcENvbmZpZydzIG1hcCBvYmplY3QgY29udGFpbmluZyBhXG4vLyBzaW5nbGUgcG9pbnQgZ2VvbWV0cnkgZmVhdHVyZSBhdCB0aGUgcGFzc2VkIGluIGNvb3JkaW5hdGVzLlxubWVyY2F0b3IuYWRkUG9pbnRMYXllciA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcihtYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludDpcIiArIGxvbmdpdHVkZSArIFwiOlwiICsgbGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyY2F0b3IuZ2VvbWV0cnlUb1ZlY3RvclNvdXJjZShuZXcgb2wuZ2VvbS5Qb2ludChtZXJjYXRvci5yZXByb2plY3RUb01hcChsb25naXR1ZGUsIGxhdGl0dWRlKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlb01hcFN0eWxlcy5yZWRQb2ludCk7XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgbmV3IHZlY3RvciBzb3VyY2UgY29udGFpbmluZyB0aGUgcGFzc2VkIGluXG4vLyBzYW1wbGVzLiBGZWF0dXJlcyBhcmUgY29uc3RydWN0ZWQgZnJvbSBlYWNoIHNhbXBsZSB1c2luZyBpdHMgaWQsXG4vLyBwb2ludCwgYW5kIGdlb20gZmllbGRzLlxubWVyY2F0b3Iuc2FtcGxlc1RvVmVjdG9yU291cmNlID0gZnVuY3Rpb24gKHNhbXBsZXMpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSBzYW1wbGVzLm1hcChcbiAgICAgICAgZnVuY3Rpb24gKHNhbXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBvbC5GZWF0dXJlKHtzYW1wbGVJZDogc2FtcGxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbWVyY2F0b3IucGFyc2VHZW9Kc29uKHNhbXBsZS5nZW9tIHx8IHNhbXBsZS5wb2ludCwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiBzYW1wbGUuZ2VvbSA/IFwicG9seWdvblwiIDogXCJwb2ludFwifSk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBuZXcgb2wuc291cmNlLlZlY3Rvcih7ZmVhdHVyZXM6IGZlYXR1cmVzfSk7XG59O1xuXG4vLyBbUHVyZV0gUmV0dXJucyBhbiBvbC5Db2xsZWN0aW9uIGNvbnRhaW5pbmcgdGhlIGZlYXR1cmVzIHNlbGVjdGVkIGJ5XG4vLyB0aGUgY3VycmVudGx5IGVuYWJsZWQgY2xpY2sgc2VsZWN0IGFuZCBkcmFnQm94IHNlbGVjdCBpbnRlcmFjdGlvbnMuXG5tZXJjYXRvci5nZXRTZWxlY3RlZFNhbXBsZXMgPSBmdW5jdGlvbiAobWFwQ29uZmlnKSB7XG4gICAgdmFyIGNsaWNrU2VsZWN0ID0gbWVyY2F0b3IuZ2V0SW50ZXJhY3Rpb25CeVRpdGxlKG1hcENvbmZpZywgXCJjbGlja1NlbGVjdFwiKTtcbiAgICBpZiAoY2xpY2tTZWxlY3QpIHtcbiAgICAgICAgcmV0dXJuIGNsaWNrU2VsZWN0LmdldEZlYXR1cmVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gU2V0cyB0aGUgc2FtcGxlJ3Mgc3R5bGUgdG8gYmUgYSBjaXJjbGUgd2l0aCBhIGJsYWNrXG4vLyBib3JkZXIgYW5kIGZpbGxlZCB3aXRoIHRoZSBwYXNzZWQgaW4gY29sb3IuIElmIGNvbG9yIGlzIG51bGwsIHRoZVxuLy8gY2lyY2xlIHdpbGwgYmUgZmlsbGVkIHdpdGggZ3JheS5cbm1lcmNhdG9yLmhpZ2hsaWdodFNhbXBsZUdlb21ldHJ5ID0gZnVuY3Rpb24gKHNhbXBsZSwgY29sb3IpIHtcbiAgICBpZiAoc2FtcGxlLmdldChcInNoYXBlXCIpID09IFwicG9pbnRcIikge1xuICAgICAgICBzYW1wbGUuc2V0U3R5bGUobWVyY2F0b3IuZ2V0Q2lyY2xlU3R5bGUoNSwgY29sb3IgfHwgXCIjOTk5OTk5XCIsIFwiIzAwMDAwMFwiLCAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlLnNldFN0eWxlKG1lcmNhdG9yLmdldFBvbHlnb25TdHlsZShjb2xvciB8fCBcIiM5OTk5OTlcIiwgXCIjMDAwMDAwXCIsIDMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHNhbXBsZTtcbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogQm91bmRpbmcgQm94IFNlbGVjdG9yIGZvciBBZG1pbiBQYWdlXG4qKipcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBbUHVyZV0gUmV0dXJucyBhIG5ldyBkcmFnQm94IGRyYXcgaW50ZXJhY3Rpb24gd2l0aCB0aXRsZSA9XG4vLyBpbnRlcmFjdGlvblRpdGxlIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgaW4gbGF5ZXIuIFdoZW5cbi8vIGEgbmV3IGJveCBpcyBkcmFnZ2VkIG9uIHRoZSBtYXAsIGFueSBwcmV2aW91cyBkcmFnQm94IHBvbHlnb25zIGFyZVxuLy8gcmVtb3ZlZCwgYW5kIHRoZSBjdXJyZW50IGJveCBpcyBhZGRlZCB0byB0aGUgbWFwIGxheWVyIGFzIGEgbmV3XG4vLyBmZWF0dXJlLiBJZiBhIGNhbGxCYWNrIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIGNhbGxlZFxuLy8gYWZ0ZXIgdGhlIG5ldyBib3ggaXMgYWRkZWQgdG8gdGhlIG1hcCBsYXllci5cbm1lcmNhdG9yLm1ha2VEcmFnQm94RHJhdyA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvblRpdGxlLCBsYXllciwgY2FsbEJhY2spIHtcbiAgICB2YXIgZHJhZ0JveCA9IG5ldyBvbC5pbnRlcmFjdGlvbi5EcmFnQm94KHt0aXRsZTogaW50ZXJhY3Rpb25UaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IG9sLmV2ZW50cy5jb25kaXRpb24ucGxhdGZvcm1Nb2RpZmllcktleU9ubHl9KTtcbiAgICB2YXIgYm94ZW5kQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsYXllci5nZXRTb3VyY2UoKS5jbGVhcigpO1xuICAgICAgICBsYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlKG5ldyBvbC5GZWF0dXJlKHtnZW9tZXRyeTogZHJhZ0JveC5nZXRHZW9tZXRyeSgpfSkpO1xuICAgICAgICBpZiAoY2FsbEJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2FsbEJhY2suY2FsbChudWxsLCBkcmFnQm94KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZHJhZ0JveC5vbihcImJveGVuZFwiLCBib3hlbmRBY3Rpb24pO1xuICAgIHJldHVybiBkcmFnQm94O1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gQWRkcyBhIGRyYWdCb3ggZHJhdyBpbnRlcmFjdGlvbiB0byBtYXBDb25maWcncyBtYXBcbi8vIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggYSBuZXdseSBjcmVhdGVkIGVtcHR5IHZlY3RvciBsYXllciBjYWxsZWRcbi8vIFwiZHJhZ0JveExheWVyXCIuXG5tZXJjYXRvci5lbmFibGVEcmFnQm94RHJhdyA9IGZ1bmN0aW9uIChtYXBDb25maWcsIGNhbGxCYWNrKSB7XG4gICAgdmFyIGRyYXdMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe3RpdGxlOiBcImRyYWdCb3hMYXllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtmZWF0dXJlczogW119KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGNlb01hcFN0eWxlcy5wb2x5Z29ufSk7XG4gICAgdmFyIGRyYWdCb3ggPSBtZXJjYXRvci5tYWtlRHJhZ0JveERyYXcoXCJkcmFnQm94RHJhd1wiLCBkcmF3TGF5ZXIsIGNhbGxCYWNrKTtcbiAgICBtYXBDb25maWcubWFwLmFkZExheWVyKGRyYXdMYXllcik7XG4gICAgbWFwQ29uZmlnLm1hcC5hZGRJbnRlcmFjdGlvbihkcmFnQm94KTtcbiAgICByZXR1cm4gbWFwQ29uZmlnO1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gUmVtb3ZlcyB0aGUgZHJhZ0JveCBkcmF3IGludGVyYWN0aW9uIGFuZCBpdHNcbi8vIGFzc29jaWF0ZWQgbGF5ZXIgZnJvbSBtYXBDb25maWcncyBtYXAgb2JqZWN0LlxubWVyY2F0b3IuZGlzYWJsZURyYWdCb3hEcmF3ID0gZnVuY3Rpb24gKG1hcENvbmZpZykge1xuICAgIG1lcmNhdG9yLnJlbW92ZUludGVyYWN0aW9uQnlUaXRsZShtYXBDb25maWcsIFwiZHJhZ0JveERyYXdcIik7XG4gICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKG1hcENvbmZpZywgXCJkcmFnQm94TGF5ZXJcIik7XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBleHRlbnQgb2YgdGhlIHJlY3RhbmdsZSBkcmF3biBieSB0aGUgcGFzc2VkLWluXG4vLyBkcmFnQm94IGluIGxhdC9sb24gY29vcmRzIChFUFNHOjQzMjYpLlxubWVyY2F0b3IuZ2V0RHJhZ0JveEV4dGVudCA9IGZ1bmN0aW9uIChkcmFnQm94KSB7XG4gICAgcmV0dXJuIGRyYWdCb3guZ2V0R2VvbWV0cnkoKS5jbG9uZSgpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKS5nZXRFeHRlbnQoKTtcbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKioqXG4qKiogRnVuY3Rpb25zIHRvIGRyYXcgcHJvamVjdCBtYXJrZXJzIG9uIGFuIG92ZXJ2aWV3IG1hcFxuKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gW1NpZGUgRWZmZWN0c10gQWRkcyBhIG5ldyBlbXB0eSBvdmVybGF5IHRvIG1hcENvbmZpZydzIG1hcCBvYmplY3Rcbi8vIHdpdGggaWQgc2V0IHRvIG92ZXJsYXlUaXRsZS5cbm1lcmNhdG9yLmFkZE92ZXJsYXkgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBvdmVybGF5VGl0bGUpIHtcbiAgICB2YXIgb3ZlcmxheSA9IG5ldyBvbC5PdmVybGF5KHtpZDogb3ZlcmxheVRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9KTtcbiAgICBtYXBDb25maWcubWFwLmFkZE92ZXJsYXkob3ZlcmxheSk7XG4gICAgcmV0dXJuIG1hcENvbmZpZztcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBtYXAgb3ZlcmxheSB3aXRoIGlkID09IG92ZXJsYXlUaXRsZSBvciBudWxsIGlmXG4vLyBubyBzdWNoIG92ZXJsYXkgZXhpc3RzLlxubWVyY2F0b3IuZ2V0T3ZlcmxheUJ5VGl0bGUgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBvdmVybGF5VGl0bGUpIHtcbiAgICByZXR1cm4gbWFwQ29uZmlnLm1hcC5nZXRPdmVybGF5QnlJZChvdmVybGF5VGl0bGUpO1xufTtcblxuLy8gW1B1cmVdIFJldHVybnMgdHJ1ZSBpZiB0aGUgZmVhdHVyZSBpcyBhIGNsdXN0ZXIsIGZhbHNlIG90aGVyd2lzZS5cbm1lcmNhdG9yLmlzQ2x1c3RlciA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoXCJmZWF0dXJlc1wiKSAmJiBmZWF0dXJlLmdldChcImZlYXR1cmVzXCIpLmxlbmd0aCA+IDA7XG59O1xuXG4vLyBbUHVyZV0gUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHJlcHJlc2VudGluZyBzZXZlcmFsIHRhYmxlIHJvd3Ncbi8vIHRoYXQgZGVzY3JpYmUgdGhlIHBhc3NlZCBpbiBwcm9qZWN0LlxubWVyY2F0b3IubWFrZVJvd3MgPSBmdW5jdGlvbiAoZG9jdW1lbnRSb290LCBwcm9qZWN0KSB7XG4gICAgdmFyIHJvd1N0YXJ0ID0gXCI8dHIgY2xhc3M9XFxcImQtZmxleFxcXCI+XCI7XG4gICAgdmFyIHJvd0VuZCA9IFwiPC90cj5cIjtcbiAgICB2YXIgbGVmdENvbFN0YXJ0ID0gXCI8dGQgY2xhc3M9XFxcInNtYWxsIGNvbC02IHB4LTAgbXktYXV0b1xcXCI+XCI7XG4gICAgdmFyIHJpZ2h0Q29sU3RhcnQgPSBcIjx0ZCBjbGFzcz1cXFwic21hbGwgY29sLTYgcHItMFxcXCI+XCI7XG4gICAgdmFyIGNvbEVuZCA9IFwiPC90ZD5cIjtcbiAgICB2YXIgbGlua1N0YXJ0ID0gXCI8YSBocmVmPVxcXCJcIiArIGRvY3VtZW50Um9vdCArIFwiL2NvbGxlY3Rpb24vXCIgKyBwcm9qZWN0LmdldChcInByb2plY3RJZFwiKSArIFwiXFxcIiBcIlxuICAgICAgICAgICAgICAgICAgKyBcImNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1ibG9jayBidG4tb3V0bGluZS1saWdodGdyZWVuXFxcIiBcIlxuICAgICAgICAgICAgICAgICAgKyBcInN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTpub3dyYXA7IG92ZXJmbG93OmhpZGRlbjsgdGV4dC1vdmVyZmxvdzplbGxpcHNpc1xcXCI+XCI7XG4gICAgdmFyIGxpbmtFbmQgPSBcIjwvYT5cIjtcbiAgICByZXR1cm4gcm93U3RhcnRcbiAgICAgICAgKyBsZWZ0Q29sU3RhcnQgKyBcIjxoMyBjbGFzcz1cXFwibXktYXV0b1xcXCI+TmFtZTwvaDM+XCIgKyBjb2xFbmRcbiAgICAgICAgKyByaWdodENvbFN0YXJ0ICsgbGlua1N0YXJ0ICsgcHJvamVjdC5nZXQoXCJuYW1lXCIpICsgbGlua0VuZCArIGNvbEVuZFxuICAgICAgICArIHJvd0VuZFxuICAgICAgICArIHJvd1N0YXJ0XG4gICAgICAgICsgbGVmdENvbFN0YXJ0ICsgXCJEZXNjcmlwdGlvblwiICsgY29sRW5kXG4gICAgICAgICsgcmlnaHRDb2xTdGFydCArIChwcm9qZWN0LmdldChcImRlc2NyaXB0aW9uXCIpID09IFwiXCIgPyBcIk4vQVwiIDogcHJvamVjdC5nZXQoXCJkZXNjcmlwdGlvblwiKSkgKyBjb2xFbmRcbiAgICAgICAgKyByb3dFbmRcbiAgICAgICAgKyByb3dTdGFydFxuICAgICAgICArIGxlZnRDb2xTdGFydCArIFwiTnVtYmVyIG9mIHBsb3RzXCIgKyBjb2xFbmRcbiAgICAgICAgKyByaWdodENvbFN0YXJ0ICsgcHJvamVjdC5nZXQoXCJudW1QbG90c1wiKSArIGNvbEVuZFxuICAgICAgICArIHJvd0VuZDtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIHRoZSBtaW5pbXVtIGV4dGVudCB0aGF0IGJvdW5kcyBhbGwgb2YgdGhlXG4vLyBzdWJmZWF0dXJlcyBpbiB0aGUgcGFzc2VkIGluIGNsdXN0ZXJGZWF0dXJlLlxubWVyY2F0b3IuZ2V0Q2x1c3RlckV4dGVudCA9IGZ1bmN0aW9uIChjbHVzdGVyRmVhdHVyZSkge1xuICAgIHZhciBjbHVzdGVyUG9pbnRzID0gY2x1c3RlckZlYXR1cmUuZ2V0KFwiZmVhdHVyZXNcIikubWFwKFxuICAgICAgICBmdW5jdGlvbiAoc3ViRmVhdHVyZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YkZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gKG5ldyBvbC5nZW9tLkxpbmVTdHJpbmcoY2x1c3RlclBvaW50cykpLmdldEV4dGVudCgpO1xufTtcblxuLy8gW1B1cmVdIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB0byBkaXNwbGF5IGluIGEgcG9wdXAgYm94IG9uIHRoZSBtYXAuXG5tZXJjYXRvci5nZXRQb3B1cENvbnRlbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnRSb290LCBmZWF0dXJlKSB7XG4gICAgdmFyIHRpdGxlID0gXCI8ZGl2IGNsYXNzPVxcXCJjVGl0bGVcXFwiPjxoMT5cIlxuICAgICAgICAgICAgICArIChtZXJjYXRvci5pc0NsdXN0ZXIoZmVhdHVyZSkgPyBcIkNsdXN0ZXIgaW5mb1wiIDogXCJQcm9qZWN0IGluZm9cIilcbiAgICAgICAgICAgICAgKyBcIjwvaDE+PC9kaXY+XCI7XG4gICAgdmFyIGNvbnRlbnRTdGFydCA9IFwiPGRpdiBjbGFzcz1cXFwiY0NvbnRlbnRcXFwiPlwiO1xuICAgIHZhciB0YWJsZVN0YXJ0ID0gXCI8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtXFxcIj48dGJvZHk+XCI7XG4gICAgdmFyIHRhYmxlUm93cyA9IG1lcmNhdG9yLmlzQ2x1c3RlcihmZWF0dXJlKVxuICAgICAgICA/IGZlYXR1cmUuZ2V0KFwiZmVhdHVyZXNcIikubWFwKG1lcmNhdG9yLm1ha2VSb3dzLmJpbmQobnVsbCwgZG9jdW1lbnRSb290KSkuam9pbihcIlxcblwiKVxuICAgICAgICA6IG1lcmNhdG9yLm1ha2VSb3dzKGRvY3VtZW50Um9vdCwgZmVhdHVyZSk7XG4gICAgdmFyIHRhYmxlRW5kID0gXCI8L3Rib2R5PjwvdGFibGU+XCI7XG4gICAgdmFyIGNvbnRlbnRFbmQgPSBcIjwvZGl2PlwiO1xuXG4gICAgaWYgKG1lcmNhdG9yLmlzQ2x1c3RlcihmZWF0dXJlKSAmJiBmZWF0dXJlLmdldChcImZlYXR1cmVzXCIpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIHpvb21MaW5rID0gXCI8YnV0dG9uIG9uY2xpY2s9XFxcIm1lcmNhdG9yLnpvb21NYXBUb0V4dGVudChtYXBDb25maWdNZXJjYXRvciwgW1wiXG4gICAgICAgICAgICArIG1lcmNhdG9yLmdldENsdXN0ZXJFeHRlbnQoZmVhdHVyZSkgKyBcIl0pXFxcIiBcIlxuICAgICAgICAgICAgKyBcImNsYXNzPVxcXCJtdC0wIG1iLTAgYnRuIGJ0bi1zbSBidG4tYmxvY2sgYnRuLW91dGxpbmUteWVsbG93XFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7IG1pbi13aWR0aDozNTBweDtcXFwiPlwiXG4gICAgICAgICAgICArIFwiPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaC1wbHVzXFxcIj48L2k+IFpvb20gdG8gY2x1c3RlcjwvYnV0dG9uPlwiO1xuICAgICAgICByZXR1cm4gdGl0bGUgKyBjb250ZW50U3RhcnQgKyB0YWJsZVN0YXJ0ICsgdGFibGVSb3dzICsgdGFibGVFbmQgKyB6b29tTGluayArIGNvbnRlbnRFbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRpdGxlICsgY29udGVudFN0YXJ0ICsgdGFibGVTdGFydCArIHRhYmxlUm93cyArIHRhYmxlRW5kICsgY29udGVudEVuZDtcbiAgICB9XG59O1xuXG4vLyBbU2lkZSBFZmZlY3RzXSBVcGRhdGVzIHRoZSBvdmVybGF5IGVsZW1lbnQncyBpbm5lckhUTUwgd2l0aCBmaWVsZHNcbi8vIGNvbnRhaW5pbmcgdGhlIGZlYXR1cmUncyBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIG51bVBsb3RzIGZpZWxkcyBhc1xuLy8gd2VsbCBhcyBhIGxpbmsgdG8gaXRzIGRhdGEgY29sbGVjdGlvbiBwYWdlIGFuZCB0aGVuIGRpc3BsYXlzIHRoZVxuLy8gb3ZlcmxheSBvbiB0aGUgbWFwIGF0IHRoZSBmZWF0dXJlJ3MgY29vcmRpbmF0ZXMuXG5tZXJjYXRvci5zaG93UHJvamVjdFBvcHVwID0gZnVuY3Rpb24gKG92ZXJsYXksIGRvY3VtZW50Um9vdCwgZmVhdHVyZSkge1xuICAgIG92ZXJsYXkuZ2V0RWxlbWVudCgpLmlubmVySFRNTCA9IG1lcmNhdG9yLmdldFBvcHVwQ29udGVudChkb2N1bWVudFJvb3QsIGZlYXR1cmUpO1xuICAgIG92ZXJsYXkuc2V0UG9zaXRpb24obWVyY2F0b3IuaXNDbHVzdGVyKGZlYXR1cmUpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZlYXR1cmUuZ2V0KFwiZmVhdHVyZXNcIilbMF0uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpKTtcbn07XG5cbi8vIFtQdXJlXSBSZXR1cm5zIGEgbmV3IHZlY3RvciBzb3VyY2UgY29udGFpbmluZyBwb2ludHMgZm9yIGVhY2ggb2Zcbi8vIHRoZSBjZW50ZXJzIG9mIHRoZSBwYXNzZWQgaW4gcHJvamVjdHMuIEZlYXR1cmVzIGFyZSBjb25zdHJ1Y3RlZFxuLy8gZnJvbSBlYWNoIHByb2plY3QgdXNpbmcgaXRzIGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIG51bVBsb3RzXG4vLyBmaWVsZHMuXG5tZXJjYXRvci5wcm9qZWN0c1RvVmVjdG9yU291cmNlID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgdmFyIGZlYXR1cmVzID0gcHJvamVjdHMubWFwKFxuICAgICAgICBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgdmFyIGJvdW5kcyA9IG1lcmNhdG9yLnBhcnNlR2VvSnNvbihwcm9qZWN0LmJvdW5kYXJ5LCBmYWxzZSkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICB2YXIgbWluWCA9IGJvdW5kc1swXTtcbiAgICAgICAgICAgIHZhciBtaW5ZID0gYm91bmRzWzFdO1xuICAgICAgICAgICAgdmFyIG1heFggPSBib3VuZHNbMl07XG4gICAgICAgICAgICB2YXIgbWF4WSA9IGJvdW5kc1szXTtcbiAgICAgICAgICAgIHZhciBjZW50ZXJYID0gKG1pblggKyBtYXhYKSAvIDI7XG4gICAgICAgICAgICB2YXIgY2VudGVyWSA9IChtaW5ZICsgbWF4WSkgLyAyO1xuICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gbmV3IG9sLmdlb20uUG9pbnQoW2NlbnRlclgsIGNlbnRlclldKS50cmFuc2Zvcm0oXCJFUFNHOjQzMjZcIiwgXCJFUFNHOjM4NTdcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IG9sLkZlYXR1cmUoe2dlb21ldHJ5OiAgICBnZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiAgIHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9qZWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1QbG90czogICAgcHJvamVjdC5udW1QbG90c30pO1xuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe2ZlYXR1cmVzOiBmZWF0dXJlc30pO1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gQWRkcyBhIG5ldyB2ZWN0b3IgbGF5ZXIgY2FsbGVkIFwicHJvamVjdE1hcmtlcnNcIiB0b1xuLy8gbWFwQ29uZmlnJ3MgbWFwIG9iamVjdCBjb250YWluaW5nIGljb25zIGF0IGVhY2ggb2YgdGhlIHByb2plY3Qnc1xuLy8gQU9JIGNlbnRlcnMuIEFsc28gYWRkcyBhIGR5bmFtaWMgb3ZlcmxheSBwb3B1cCB0byB0aGUgbWFwIHdoaWNoXG4vLyBzaG93cyBhIGJyaWVmIHByb2plY3QgZGVzY3JpcHRpb24gd2hlbmV2ZXIgYSBwcm9qZWN0IGljb24gaXNcbi8vIGNsaWNrZWQuIElmIGNsdXN0ZXJEaXN0YW5jZSBpcyBub3QgbnVsbCwgdGhlIG5ldyB2ZWN0b3Igc291cmNlIHdpbGxcbi8vIGNsdXN0ZXIgdGhlIHByb2plY3RzLiBGaW5hbGx5LCB6b29tcyB0aGUgbWFwIHZpZXcgdG8gdGhlIG5ld1xuLy8gbGF5ZXIncyBleHRlbnQuXG5tZXJjYXRvci5hZGRQcm9qZWN0TWFya2Vyc0FuZFpvb20gPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBwcm9qZWN0cywgZG9jdW1lbnRSb290LCBjbHVzdGVyRGlzdGFuY2UpIHtcbiAgICB2YXIgcHJvamVjdFNvdXJjZSA9IG1lcmNhdG9yLnByb2plY3RzVG9WZWN0b3JTb3VyY2UocHJvamVjdHMpO1xuXG4gICAgaWYgKGNsdXN0ZXJEaXN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgIG1lcmNhdG9yLmFkZFZlY3RvckxheWVyKG1hcENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9qZWN0TWFya2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW9NYXBTdHlsZXMuY2VvSWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsdXN0ZXJTb3VyY2UgPSBuZXcgb2wuc291cmNlLkNsdXN0ZXIoe3NvdXJjZTogICBwcm9qZWN0U291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IGNsdXN0ZXJEaXN0YW5jZX0pO1xuICAgICAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcihtYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvamVjdE1hcmtlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1Qcm9qZWN0cyA9IGZlYXR1cmUuZ2V0KFwiZmVhdHVyZXNcIikubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lcmNhdG9yLmdldENpcmNsZVN0eWxlKDEwLCBcIiMzMzk5Y2NcIiwgXCIjZmZmZmZmXCIsIDEsIG51bVByb2plY3RzLCBcIiNmZmZmZmZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lcmNhdG9yLmFkZE92ZXJsYXkobWFwQ29uZmlnLCBcInByb2plY3RQb3B1cFwiKTtcbiAgICB2YXIgb3ZlcmxheSA9IG1lcmNhdG9yLmdldE92ZXJsYXlCeVRpdGxlKG1hcENvbmZpZywgXCJwcm9qZWN0UG9wdXBcIik7XG4gICAgbWFwQ29uZmlnLm1hcC5vbihcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwQ29uZmlnLm1hcC5oYXNGZWF0dXJlQXRQaXhlbChldmVudC5waXhlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29uZmlnLm1hcC5mb3JFYWNoRmVhdHVyZUF0UGl4ZWwoZXZlbnQucGl4ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLnNob3dQcm9qZWN0UG9wdXAuYmluZChudWxsLCBvdmVybGF5LCBkb2N1bWVudFJvb3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnNldFBvc2l0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICBtZXJjYXRvci56b29tTWFwVG9FeHRlbnQobWFwQ29uZmlnLCBwcm9qZWN0U291cmNlLmdldEV4dGVudCgpKTtcbiAgICByZXR1cm4gbWFwQ29uZmlnO1xufTtcblxuLy8gW1NpZGUgRWZmZWN0c10gQWRkcyBhIG5ldyB2ZWN0b3IgbGF5ZXIgY2FsbGVkIFwiY3VycmVudFBsb3RzXCIgdG9cbi8vIG1hcENvbmZpZydzIG1hcCBvYmplY3QgdGhhdCBjbHVzdGVycyB0aGUgcGFzc2VkIGluIHBsb3RzLiBDbGlja2luZ1xuLy8gb24gY2x1c3RlcnMgd2l0aCBtb3JlIHRoYW4gb25lIHBsb3Qgem9vbXMgdGhlIG1hcCB2aWV3IHRvIHRoZVxuLy8gZXh0ZW50IGNvdmVyZWQgYnkgdGhlc2UgcGxvdHMuIElmIGEgY2x1c3RlciBvbmx5IGNvbnRhaW5zIG9uZSBwbG90LFxuLy8gdGhlIGNhbGxCYWNrIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBjbHVzdGVyIGZlYXR1cmUuXG5tZXJjYXRvci5hZGRQbG90TGF5ZXIgPSBmdW5jdGlvbiAobWFwQ29uZmlnLCBwbG90cywgY2FsbEJhY2spIHtcbiAgICB2YXIgcGxvdFNvdXJjZSA9IG1lcmNhdG9yLnBsb3RzVG9WZWN0b3JTb3VyY2UocGxvdHMpO1xuICAgIHZhciBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtzb3VyY2U6ICAgcGxvdFNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwfSk7XG5cbiAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcihtYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50UGxvdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1QbG90cyA9IGZlYXR1cmUuZ2V0KFwiZmVhdHVyZXNcIikubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVyY2F0b3IuZ2V0Q2lyY2xlU3R5bGUoMTAsIFwiIzMzOTljY1wiLCBcIiNmZmZmZmZcIiwgMSwgbnVtUGxvdHMsIFwiI2ZmZmZmZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHZhciBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbWFwQ29uZmlnLm1hcC5mb3JFYWNoRmVhdHVyZUF0UGl4ZWwoZXZlbnQucGl4ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVyY2F0b3IuaXNDbHVzdGVyKGZlYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KFwiZmVhdHVyZXNcIikubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJjYXRvci56b29tTWFwVG9FeHRlbnQobWFwQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyY2F0b3IuZ2V0Q2x1c3RlckV4dGVudChmZWF0dXJlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKG1hcENvbmZpZywgXCJjdXJyZW50UGxvdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbmZpZy5tYXAudW4oXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjay5jYWxsKG51bGwsIGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBtYXBDb25maWcubWFwLm9uKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcblxuICAgIHJldHVybiBtYXBDb25maWc7XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbioqKlxuKioqIEZJWE1Fc1xuKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vXG4vLyBGSVhNRTogTW92ZSBjZW9NYXBTdHlsZXMgb3V0IG9mIE1lcmNhdG9yLmpzXG4vLyBGSVhNRTogTW92ZSBtZXJjYXRvci5nZXRQb3B1cENvbnRlbnQoKSBvdXQgb2YgTWVyY2F0b3IuanMgKGl0IGlzIGhhcmQtY29kZWQgdG8gQ0VPJ3MgaG9tZSBwYWdlKVxuLy8gRklYTUU6IGNoYW5nZSBjYWxscyBmcm9tIHJlbW92ZV9wbG90X2xheWVyIHRvIG1lcmNhdG9yLnJlbW92ZUxheWVyQnlUaXRsZShtYXBDb25maWcsIGxheWVyVGl0bGUpXG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZHJhd19wb2x5Z29uIHRvOlxuLy8gICAgICAgIG1lcmNhdG9yLnJlbW92ZUxheWVyQnlUaXRsZShtYXBDb25maWcsIFwiY3VycmVudEFPSVwiKTtcbi8vICAgICAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcihtYXBDb25maWcsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50QU9JXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyY2F0b3IuZ2VvbWV0cnlUb1ZlY3RvclNvdXJjZShtZXJjYXRvci5wYXJzZUdlb0pzb24ocG9seWdvbiwgdHJ1ZSkpLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlb01hcFN0eWxlcy5wb2x5Z29uKTtcbi8vICAgICAgICBtZXJjYXRvci56b29tTWFwVG9MYXllcihtYXBDb25maWcsIFwiY3VycmVudEFPSVwiKTtcbi8vIEZJWE1FOiBjaGFuZ2UgY2FsbHMgZnJvbSBwb2x5Z29uX2V4dGVudCB0byBtZXJjYXRvci5wYXJzZUdlb0pzb24ocG9seWdvbiwgZmFsc2UpLmdldEV4dGVudCgpXG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZ2V0X3Bsb3RfZXh0ZW50IHRvIG1lcmNhdG9yLmdldFBsb3RFeHRlbnRcbi8vIEZJWE1FOiBjaGFuZ2UgY2FsbHMgZnJvbSBkcmF3X3Bsb3QgdG86XG4vLyAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKG1hcENvbmZpZywgXCJjdXJyZW50UGxvdFwiKTtcbi8vICAgICAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcihtYXBDb25maWcsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50UGxvdFwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLmdlb21ldHJ5VG9WZWN0b3JTb3VyY2UobWVyY2F0b3IuZ2V0UGxvdFBvbHlnb24oY2VudGVyLCBzaXplLCBzaGFwZSkpLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlb01hcFN0eWxlcy5wb2x5Z29uKTtcbi8vICAgICAgICBtZXJjYXRvci56b29tTWFwVG9MYXllcihtYXBDb25maWcsIFwiY3VycmVudFBsb3RcIik7XG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZHJhd19wbG90cyB0byBtZXJjYXRvci5hZGRQbG90T3ZlcnZpZXdMYXllcnNcbi8vIEZJWE1FOiBmb3IgcGxvdHMgc2hvd24gd2l0aCBkcmF3X3Bsb3RzLCBjaGFuZ2UgcmVmZXJlbmNlcyB0byB0aGVpciBwbG90X2lkIGZpZWxkIHRvIHBsb3RJZFxuLy8gRklYTUU6IGNoYW5nZSBjYWxscyBmcm9tIGVuYWJsZV9zZWxlY3Rpb24gdG8gbWVyY2F0b3IuZW5hYmxlU2VsZWN0aW9uXG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZGlzYWJsZV9zZWxlY3Rpb24gdG8gbWVyY2F0b3IuZGlzYWJsZVNlbGVjdGlvblxuLy8gRklYTUU6IGNoYW5nZSBjYWxscyBmcm9tIHJlbW92ZV9zYW1wbGVfbGF5ZXIgdG8gbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKG1hcENvbmZpZywgXCJjdXJyZW50U2FtcGxlc1wiKTtcbi8vIEZJWE1FOiBjaGFuZ2UgY2FsbHMgZnJvbSByZW1vdmVfcGxvdHNfbGF5ZXIgdG8gbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKG1hcENvbmZpZywgXCJjdXJyZW50UGxvdHNcIik7XG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZHJhd19wb2ludHMgdG86XG4vLyAgICAgICAgbWVyY2F0b3IuZGlzYWJsZVNlbGVjdGlvbihtYXBDb25maWcpO1xuLy8gICAgICAgIG1lcmNhdG9yLnJlbW92ZUxheWVyQnlUaXRsZShtYXBDb25maWcsIFwiY3VycmVudFNhbXBsZXNcIik7XG4vLyAgICAgICAgbWVyY2F0b3IuYWRkVmVjdG9yTGF5ZXIobWFwQ29uZmlnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudFNhbXBsZXNcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJjYXRvci5zYW1wbGVzVG9WZWN0b3JTb3VyY2Uoc2FtcGxlcyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VvTWFwU3R5bGVzLnJlZFBvaW50KTtcbi8vICAgICAgICBtZXJjYXRvci5lbmFibGVTZWxlY3Rpb24obWFwQ29uZmlnLCBcImN1cnJlbnRTYW1wbGVzXCIpO1xuLy8gICAgICAgIG1lcmNhdG9yLnpvb21NYXBUb0xheWVyKG1hcENvbmZpZywgXCJjdXJyZW50U2FtcGxlc1wiKTtcbi8vIEZJWE1FOiBjaGFuZ2UgcmVmZXJlbmNlcyBmb3IgcG9pbnRzIGNyZWF0ZWQgd2l0aCBkcmF3X3BvaW50cyBmcm9tIHNhbXBsZV9pZCB0byBzYW1wbGVJZFxuLy8gRklYTUU6IGNoYW5nZSBjYWxscyBmcm9tIGdldF9zZWxlY3RlZF9zYW1wbGVzIHRvIG1lcmNhdG9yLmdldFNlbGVjdGVkU2FtcGxlc1xuLy8gRklYTUU6IGNoYW5nZSBjYWxscyBmcm9tIGhpZ2hsaWdodF9zYW1wbGUgdG8gbWVyY2F0b3IuaGlnaGxpZ2h0U2FtcGxlR2VvbWV0cnlcbi8vIEZJWE1FOiBjaGFuZ2UgY2FsbHMgZnJvbSBlbmFibGVfZHJhZ2JveF9kcmF3IHRvIGVuYWJsZURyYWdCb3hEcmF3KG1hcENvbmZpZywgZGlzcGxheURyYWdCb3hCb3VuZHMpXG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZGlzYWJsZV9kcmFnYm94X2RyYXcgdG8gZGlzYWJsZURyYWdCb3hEcmF3XG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZHJhd19wcm9qZWN0X21hcmtlcnMgdG86XG4vLyAgICAgICAgbWVyY2F0b3IuYWRkUHJvamVjdE1hcmtlcnNBbmRab29tKG1hcENvbmZpZywgcHJvamVjdHMsIGRvY3VtZW50Um9vdCwgY2x1c3RlckRpc3RhbmNlKTtcbi8vICAgICAgICBtZXJjYXRvci56b29tTWFwVG9MYXllcihtYXBDb25maWcsIFwicHJvamVjdE1hcmtlcnNcIik7XG4vLyBGSVhNRTogY2hhbmdlIHJlZmVyZW5jZXMgdG8gcElEIGluIGhvbWUuanMgdG8gcHJvamVjdElkXG4vLyBGSVhNRTogY2hhbmdlIGNhbGxzIGZyb20gZHJhd19wcm9qZWN0X3BvaW50cyB0bzpcbi8vICAgICAgICBtZXJjYXRvci5yZW1vdmVMYXllckJ5VGl0bGUobWFwQ29uZmlnLCBcImN1cnJlbnRQbG90c1wiKTtcbi8vICAgICAgICBtZXJjYXRvci5hZGRQbG90TGF5ZXIobWFwQ29uZmlnLCBwbG90cyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG1lcmNhdG9yOiBtZXJjYXRvcixcbiAgICBjZW9NYXBTdHlsZXM6IGNlb01hcFN0eWxlc1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=