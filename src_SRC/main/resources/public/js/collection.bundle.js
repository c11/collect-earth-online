var collection =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"collection": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/collection.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor","collection~geodashreact~home~project"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/public/js/utils.js":
/*!***********************************************!*\
  !*** ./src/main/resources/public/js/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*****************************************************************************
 ***
 *** Create the utils object to act as a namespace for this file
 ***
 *****************************************************************************/
var utils = {};

utils.enable_element = function (element_id) {
  var element = document.getElementById(element_id);
  element.disabled = false;
  element.style.opacity = 1.0;
  return null;
};

utils.disable_element = function (element_id) {
  var element = document.getElementById(element_id);
  element.disabled = true;
  element.style.opacity = 0.5;
  return null;
};

utils.show_element = function (element_id) {
  var element = document.getElementById(element_id);
  element.style.visibility = "visible";
};

utils.hide_element = function (element_id) {
  var element = document.getElementById(element_id);
  element.style.visibility = "hidden";
};

utils.highlight_border = function (element_id) {
  var element = document.getElementById(element_id);
  var shadow_style = "0px 0px 4px 4px black inset, 0px 0px 4px 4px white inset";
  element.style.boxShadow = shadow_style;
  return null;
};

utils.lowlight_border = function (element_id) {
  var element = document.getElementById(element_id);
  element.style.boxShadow = "initial";
  return null;
};

utils.blink_border = function (element_id) {
  utils.highlight_border(element_id);
  setTimeout(function () {
    utils.lowlight_border(element_id);
  }, 500);
  return null;
};

module.exports = {
  utils: utils
};

/***/ }),

/***/ "./src/main/resources/public/jsx/collection.js":
/*!*****************************************************!*\
  !*** ./src/main/resources/public/jsx/collection.js ***!
  \*****************************************************/
/*! exports provided: renderCollectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCollectionPage", function() { return renderCollectionPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/mercator-openlayers.js */ "./src/main/resources/public/js/mercator-openlayers.js");
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/utils.js */ "./src/main/resources/public/js/utils.js");
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_utils_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Collection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection(props) {
    var _this;

    _classCallCheck(this, Collection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collection).call(this, props));
    _this.state = {
      currentProject: {
        sampleValues: []
      },
      stats: {},
      plotList: [],
      imageryList: [],
      mapConfig: null,
      currentImagery: null,
      imageryAttribution: "",
      imageryYearDG: 2009,
      stackingProfileDG: "Accuracy_Profile",
      imageryYearPlanet: 2018,
      imageryMonthPlanet: "03",
      projectPlotsShown: false,
      navButtonsShown: 1,
      newPlotButtonDisabled: false,
      flagPlotButtonDisabled: false,
      saveValuesButtonDisabled: true,
      surveyAnswersVisible: {},
      currentPlot: null,
      userSamples: {}
    };
    _this.setBaseMapSource = _this.setBaseMapSource.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setImageryYearDG = _this.setImageryYearDG.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setStackingProfileDG = _this.setStackingProfileDG.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setImageryYearPlanet = _this.setImageryYearPlanet.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setImageryMonthPlanet = _this.setImageryMonthPlanet.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getPlotData = _this.getPlotData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.nextPlot = _this.nextPlot.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.flagPlot = _this.flagPlot.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveValues = _this.saveValues.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hideShowAnswers = _this.hideShowAnswers.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setCurrentValue = _this.setCurrentValue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.redirectToHomePage = _this.redirectToHomePage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Collection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProjectById();
      this.getProjectStats();
      this.getProjectPlots();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.currentProject.institution && this.state.imageryList.length == 0) {
        this.getImageryList(this.state.currentProject.institution);
      }

      if (this.state.imageryList.length > 0 && this.state.mapConfig == null) {
        this.showProjectMap();
      }

      if (this.state.mapConfig && this.state.plotList.length > 0 && this.state.projectPlotsShown == false) {
        this.showProjectPlots();
      }

      if (this.state.mapConfig && this.state.currentImagery == null) {
        this.updateMapImagery(this.state.currentProject.baseMapSource);
      }
    }
  }, {
    key: "getProjectById",
    value: function getProjectById() {
      var _this2 = this;

      fetch(this.props.documentRoot + "/get-project-by-id/" + this.props.projectId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the project info. See console for details.");
          return new Promise(function (resolve) {
            return resolve(null);
          });
        }
      }).then(function (project) {
        if (project == null || project.id == 0) {
          alert("No project found with ID " + _this2.props.projectId + ".");
          window.location = _this2.props.documentRoot + "/home";
        } else {
          var surveyQuestions = _this2.convertSampleValuesToSurveyQuestions(project.sampleValues);

          console.log(surveyQuestions);
          project.sampleValues = surveyQuestions;

          _this2.setState({
            currentProject: project
          });
        }
      });
    }
  }, {
    key: "convertSampleValuesToSurveyQuestions",
    value: function convertSampleValuesToSurveyQuestions(sampleValues) {
      return sampleValues.map(function (sampleValue) {
        if (sampleValue.name && sampleValue.values) {
          var surveyQuestionAnswers = sampleValue.values.map(function (value) {
            if (value.name) {
              return {
                id: value.id,
                answer: value.name,
                color: value.color
              };
            } else {
              return value;
            }
          });
          return {
            id: sampleValue.id,
            question: sampleValue.name,
            answers: surveyQuestionAnswers,
            parent_question: -1,
            parent_answer: -1
          };
        } else {
          return sampleValue;
        }
      });
    }
  }, {
    key: "getProjectStats",
    value: function getProjectStats() {
      var _this3 = this;

      fetch(this.props.documentRoot + "/get-project-stats/" + this.props.projectId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error getting project stats. See console for details.");
          return new Promise(function (resolve) {
            return resolve(null);
          });
        }
      }).then(function (data) {
        _this3.setState({
          stats: data
        });
      });
    }
  }, {
    key: "getProjectPlots",
    value: function getProjectPlots() {
      var _this4 = this;

      fetch(this.props.documentRoot + "/get-project-plots/" + this.props.projectId + "/1000").then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error loading plot data. See console for details.");
          return new Promise(function (resolve) {
            return resolve(null);
          });
        }
      }).then(function (data) {
        _this4.setState({
          plotList: data
        });
      });
    }
  }, {
    key: "getImageryList",
    value: function getImageryList(institution) {
      var _this5 = this;

      fetch(this.props.documentRoot + "/get-all-imagery?institutionId=" + institution).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the imagery list. See console for details.");
          return new Promise(function (resolve) {
            return resolve(null);
          });
        }
      }).then(function (data) {
        _this5.setState({
          imageryList: data
        });
      });
    }
  }, {
    key: "showProjectMap",
    value: function showProjectMap() {
      var mapConfig = _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].createMap("image-analysis-pane", [0.0, 0.0], 1, this.state.imageryList);
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addVectorLayer(mapConfig, "currentAOI", _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].geometryToVectorSource(_js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].parseGeoJson(this.state.currentProject.boundary, true)), _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["ceoMapStyles"].polygon);
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].zoomMapToLayer(mapConfig, "currentAOI");
      this.setState({
        mapConfig: mapConfig
      });
    }
  }, {
    key: "showProjectPlots",
    value: function showProjectPlots() {
      var _this6 = this;

      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addPlotLayer(this.state.mapConfig, this.state.plotList, function (feature) {
        _this6.setState({
          navButtonsShown: 2,
          newPlotButtonDisabled: false,
          flagPlotButtonDisabled: false,
          saveValuesButtonDisabled: true
        });

        _this6.getPlotData(feature.get("features")[0].get("plotId"));
      });
      this.setState({
        projectPlotsShown: true
      });
    }
  }, {
    key: "setBaseMapSource",
    value: function setBaseMapSource(event) {
      var dropdown = event.target;
      var newBaseMapSource = dropdown.options[dropdown.selectedIndex].value;
      var proj = this.state.currentProject;
      proj.baseMapSource = newBaseMapSource;
      this.setState({
        currentProject: proj
      });
      this.updateMapImagery(newBaseMapSource);
    }
  }, {
    key: "setImageryYearDG",
    value: function setImageryYearDG(event) {
      var dropdown = event.target;
      var newImageryYearDG = dropdown.options[dropdown.selectedIndex].value;
      var currentImagery = this.getImageryByTitle(this.state.currentProject.baseMapSource);
      var newImageryAttribution = currentImagery.attribution + " | " + newImageryYearDG + " (" + this.state.stackingProfileDG + ")";
      this.setState({
        imageryYearDG: newImageryYearDG,
        imageryAttribution: newImageryAttribution
      });
      this.updateDGWMSLayer(newImageryYearDG, this.state.stackingProfileDG);
    }
  }, {
    key: "setStackingProfileDG",
    value: function setStackingProfileDG(event) {
      var dropdown = event.target;
      var newStackingProfileDG = dropdown.options[dropdown.selectedIndex].value;
      var currentImagery = this.getImageryByTitle(this.state.currentProject.baseMapSource);
      var newImageryAttribution = currentImagery.attribution + " | " + this.state.imageryYearDG + " (" + newStackingProfileDG + ")";
      this.setState({
        stackingProfileDG: newStackingProfileDG,
        imageryAttribution: newImageryAttribution
      });
      this.updateDGWMSLayer(this.state.imageryYearDG, newStackingProfileDG);
    }
  }, {
    key: "setImageryYearPlanet",
    value: function setImageryYearPlanet(event) {
      var dropdown = event.target;
      var newImageryYearPlanet = dropdown.options[dropdown.selectedIndex].value;
      var currentImagery = this.getImageryByTitle(this.state.currentProject.baseMapSource);
      var newImageryAttribution = currentImagery.attribution + " | " + newImageryYearPlanet + "-" + this.state.imageryMonthPlanet;
      this.setState({
        imageryYearPlanet: newImageryYearPlanet,
        imageryAttribution: newImageryAttribution
      });
      this.updatePlanetLayer(this.state.imageryMonthPlanet, newImageryYearPlanet);
    }
  }, {
    key: "setImageryMonthPlanet",
    value: function setImageryMonthPlanet(event) {
      var dropdown = event.target;
      var newImageryMonthPlanet = dropdown.options[dropdown.selectedIndex].value;
      var currentImagery = this.getImageryByTitle(this.state.currentProject.baseMapSource);
      var newImageryAttribution = currentImagery.attribution + " | " + this.state.imageryYearPlanet + "-" + newImageryMonthPlanet;
      this.setState({
        imageryMonthPlanet: newImageryMonthPlanet,
        imageryAttribution: newImageryAttribution
      });
      this.updatePlanetLayer(newImageryMonthPlanet, this.state.imageryYearPlanet);
    }
  }, {
    key: "updateMapImagery",
    value: function updateMapImagery(newBaseMapSource) {
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].setVisibleLayer(this.state.mapConfig, newBaseMapSource);
      var newImagery = this.getImageryByTitle(newBaseMapSource);
      var newImageryAttribution = newImagery.attribution;

      if (newBaseMapSource == "DigitalGlobeWMSImagery") {
        newImageryAttribution += " | " + this.state.imageryYearDG + " (" + this.state.stackingProfileDG + ")";
        this.updateDGWMSLayer(this.state.imageryYearDG, this.state.stackingProfileDG);
      } else if (newBaseMapSource == "PlanetGlobalMosaic") {
        newImageryAttribution += " | " + this.state.imageryYearPlanet + "-" + this.state.imageryMonthPlanet;
        this.updatePlanetLayer(this.state.imageryMonthPlanet, this.state.imageryYearPlanet);
      }

      this.setState({
        currentImagery: newImagery,
        imageryAttribution: newImageryAttribution
      });
    }
  }, {
    key: "getImageryByTitle",
    value: function getImageryByTitle(imageryTitle) {
      return this.state.imageryList.find(function (imagery) {
        return imagery.title == imageryTitle;
      });
    }
  }, {
    key: "updateDGWMSLayer",
    value: function updateDGWMSLayer(imageryYear, stackingProfile) {
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].updateLayerWmsParams(this.state.mapConfig, "DigitalGlobeWMSImagery", {
        COVERAGE_CQL_FILTER: "(acquisition_date>='" + imageryYear + "-01-01')" + "AND(acquisition_date<='" + imageryYear + "-12-31')",
        FEATUREPROFILE: stackingProfile
      });
    }
  }, {
    key: "updatePlanetLayer",
    value: function updatePlanetLayer(imageryMonth, imageryYear) {
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].updateLayerSource(this.state.mapConfig, "PlanetGlobalMosaic", function (sourceConfig) {
        sourceConfig.month = imageryMonth;
        sourceConfig.year = imageryYear;
        return sourceConfig;
      }, this);
    }
  }, {
    key: "getPlotData",
    value: function getPlotData(plotId) {
      var _this7 = this;

      var url = plotId == "random" ? this.props.documentRoot + "/get-unanalyzed-plot/" + this.props.projectId : this.props.documentRoot + "/get-unanalyzed-plot-by-id/" + this.props.projectId + "/" + plotId;
      fetch(url).then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          console.log(response);
          alert("Error retrieving plot data. See console for details.");
          return new Promise(function (resolve) {
            return resolve("error");
          });
        }
      }).then(function (data) {
        if (data == "done") {
          _this7.setState({
            currentPlot: null,
            userSamples: {}
          });

          var msg = plotId == "random" ? "All plots have been analyzed for this project." : "This plot has already been analyzed.";
          alert(msg);
        } else if (data == "not found") {
          _this7.setState({
            currentPlot: null,
            userSamples: {}
          });

          alert("No plot with ID " + plotId + " found.");
        } else if (data == "error") {
          _this7.setState({
            currentPlot: null,
            userSamples: {}
          });
        } else {
          var newPlot = JSON.parse(data);

          _this7.setState({
            currentPlot: newPlot,
            userSamples: {}
          });

          _this7.showProjectPlot(newPlot);

          _this7.showGeoDash(newPlot);

          _this7.showTimeSync(newPlot);
        }
      });
    }
  }, {
    key: "showProjectPlot",
    value: function showProjectPlot(plot) {
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].disableSelection(this.state.mapConfig);
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "currentPlots");
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "currentPlot");
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "currentSamples");
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addVectorLayer(this.state.mapConfig, "currentPlot", _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].geometryToVectorSource(plot.geom ? _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].parseGeoJson(plot.geom, true) : _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].getPlotPolygon(plot.center, this.state.currentProject.plotSize, this.state.currentProject.plotShape)), _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["ceoMapStyles"].polygon);
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addVectorLayer(this.state.mapConfig, "currentSamples", _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].samplesToVectorSource(plot.samples), plot.samples[0].geom ? _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["ceoMapStyles"].polygon : _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["ceoMapStyles"].yellowPoint);
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].enableSelection(this.state.mapConfig, "currentSamples");
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].zoomMapToLayer(this.state.mapConfig, "currentPlot");
    }
  }, {
    key: "showGeoDash",
    value: function showGeoDash(plot) {
      var plotRadius = this.state.currentProject.plotSize ? this.state.currentProject.plotSize / 2.0 : _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].getViewRadius(this.state.mapConfig);
      window.open(this.props.documentRoot + "/geo-dash?editable=false&" + encodeURIComponent("title=" + this.state.currentProject.name + "&pid=" + this.props.projectId + "&plotid=" + this.state.currentProject.id + "&plotshape=" + this.state.currentProject.plotShape + "&aoi=[" + _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].getViewExtent(this.state.mapConfig) + "]&daterange=&bcenter=" + plot.center + "&bradius=" + plotRadius), "_geo-dash");
    }
  }, {
    key: "showTimeSync",
    value: function showTimeSync(plot) {
      var message = {
        "projectID": this.props.projectId,
        "plotID": plot.id,
        "currentLocation": plot.center
      };
      window.open(this.props.documentRoot + "/timesync/".concat(this.props.userId, "?") + encodeURIComponent(JSON.stringify(message)), "_timesync-dash");
    }
  }, {
    key: "nextPlot",
    value: function nextPlot() {
      this.setState({
        navButtonsShown: 2,
        newPlotButtonDisabled: false,
        flagPlotButtonDisabled: false,
        saveValuesButtonDisabled: true
      });
      this.getPlotData("random");
    }
  }, {
    key: "flagPlot",
    value: function flagPlot() {
      var _this8 = this;

      if (this.state.currentPlot != null) {
        fetch(this.props.documentRoot + "/flag-plot", {
          method: "post",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            projectId: this.props.projectId,
            plotId: this.state.currentPlot.id,
            userId: this.props.userName
          })
        }).then(function (response) {
          if (response.ok) {
            var statistics = _this8.state.stats;
            statistics.flaggedPlots = statistics.flaggedPlots + 1;

            _this8.setState({
              stats: statistics
            });

            _this8.nextPlot();
          } else {
            console.log(response);
            alert("Error flagging plot as bad. See console for details.");
          }
        });
      }
    }
  }, {
    key: "saveValues",
    value: function saveValues() {
      var _this9 = this;

      fetch(this.props.documentRoot + "/add-user-samples", {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          projectId: this.props.projectId,
          plotId: this.state.currentPlot.id,
          userId: this.props.userName,
          userSamples: this.state.userSamples
        })
      }).then(function (response) {
        if (response.ok) {
          var statistics = _this9.state.stats;
          statistics.analyzedPlots = statistics.analyzedPlots + 1;

          _this9.setState({
            stats: statistics
          });

          _this9.nextPlot();
        } else {
          console.log(response);
          alert("Error saving your assignments to the database. See console for details.");
        }
      });
    }
  }, {
    key: "hideShowAnswers",
    value: function hideShowAnswers(surveyNodeId) {
      var surveyAnswersVisible = this.state.surveyAnswersVisible;

      if (surveyAnswersVisible[surveyNodeId]) {
        surveyAnswersVisible[surveyNodeId] = false;
      } else {
        surveyAnswersVisible[surveyNodeId] = true;
      }

      this.setState({
        surveyAnswersVisible: surveyAnswersVisible
      });
    }
  }, {
    key: "setCurrentValue",
    value: function setCurrentValue(questionText, answerId, answerText, answerColor) {
      var selectedFeatures = _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].getSelectedSamples(this.state.mapConfig);

      if (selectedFeatures && selectedFeatures.getLength() > 0) {
        var userSamples = this.state.userSamples;
        selectedFeatures.forEach(function (feature) {
          var sampleId = feature.get("sampleId");

          if (!userSamples[sampleId]) {
            userSamples[sampleId] = {};
          }

          userSamples[sampleId][questionText] = answerText;
          _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].highlightSampleGeometry(feature, answerColor);
        }, this); // necessary to pass outer scope into function

        this.setState({
          userSamples: userSamples
        });
        _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].blink_border(answerText + "_" + answerId);
        selectedFeatures.clear();
        this.checkIfAllSamplesAssigned();
      } else {
        alert("No samples selected. Please click some first.");
      }
    }
  }, {
    key: "checkIfAllSamplesAssigned",
    value: function checkIfAllSamplesAssigned() {
      var assignedSamples = Object.keys(this.state.userSamples);
      var assignedQuestions = Object.values(this.state.userSamples);
      var totalSamples = this.state.currentPlot.samples;
      var totalQuestions = this.state.currentProject.sampleValues;

      if (assignedSamples.length == totalSamples.length && assignedQuestions.every(function (assignments) {
        return Object.keys(assignments).length == totalQuestions.length;
      }, this)) {
        this.setState({
          saveValuesButtonDisabled: false
        });
      }
    }
  }, {
    key: "redirectToHomePage",
    value: function redirectToHomePage() {
      window.location = this.props.documentRoot + "/home";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageAnalysisPane, {
        imageryAttribution: this.state.imageryAttribution
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBar, {
        currentProject: this.state.currentProject,
        navButtonsShown: this.state.navButtonsShown,
        newPlotButtonDisabled: this.state.newPlotButtonDisabled,
        flagPlotButtonDisabled: this.state.flagPlotButtonDisabled,
        nextPlot: this.nextPlot,
        flagPlot: this.flagPlot,
        imageryList: this.state.imageryList,
        setBaseMapSource: this.setBaseMapSource,
        imageryYearDG: this.state.imageryYearDG,
        stackingProfileDG: this.state.stackingProfileDG,
        setImageryYearDG: this.setImageryYearDG,
        setStackingProfileDG: this.setStackingProfileDG,
        imageryYearPlanet: this.state.imageryYearPlanet,
        imageryMonthPlanet: this.state.imageryMonthPlanet,
        setImageryYearPlanet: this.setImageryYearPlanet,
        setImageryMonthPlanet: this.setImageryMonthPlanet,
        stats: this.state.stats,
        saveValues: this.saveValues,
        saveValuesButtonDisabled: this.state.saveValuesButtonDisabled,
        surveyAnswersVisible: this.state.surveyAnswersVisible,
        hideShowAnswers: this.hideShowAnswers,
        setCurrentValue: this.setCurrentValue
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuitMenu, {
        redirectToHomePage: this.redirectToHomePage
      }));
    }
  }]);

  return Collection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function ImageAnalysisPane(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "image-analysis-pane",
    className: "col-xl-9 col-lg-9 col-md-12 pl-0 pr-0 full-height"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "imagery-info",
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "col small"
  }, props.imageryAttribution)));
}

function SideBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar",
    className: "col-xl-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectName, {
    projectName: props.currentProject.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlotNavigation, {
    navButtonsShown: props.navButtonsShown,
    nextPlot: props.nextPlot,
    flagPlot: props.flagPlot,
    newPlotButtonDisabled: props.newPlotButtonDisabled,
    flagPlotButtonDisabled: props.flagPlotButtonDisabled
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageryOptions, {
    baseMapSource: props.currentProject.baseMapSource,
    setBaseMapSource: props.setBaseMapSource,
    imageryList: props.imageryList,
    imageryYearDG: props.imageryYearDG,
    stackingProfileDG: props.stackingProfileDG,
    setImageryYearDG: props.setImageryYearDG,
    setStackingProfileDG: props.setStackingProfileDG,
    imageryYearPlanet: props.imageryYearPlanet,
    imageryMonthPlanet: props.imageryMonthPlanet,
    setImageryYearPlanet: props.setImageryYearPlanet,
    setImageryMonthPlanet: props.setImageryMonthPlanet
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyQuestions, {
    surveyQuestions: props.currentProject.sampleValues,
    surveyAnswersVisible: props.surveyAnswersVisible,
    hideShowAnswers: props.hideShowAnswers,
    setCurrentValue: props.setCurrentValue
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 btn-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SaveValuesButton, {
    saveValues: props.saveValues,
    saveValuesButtonDisabled: props.saveValuesButtonDisabled
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectStats, {
    projectName: props.currentProject.name,
    numPlots: props.currentProject.numPlots,
    stats: props.stats
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuitButton, null))));
}

function ProjectName(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header"
  }, props.projectName || "");
}

function PlotNavigation(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: "mb-3 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Plot Navigation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.navButtonsShown == 1 ? "row" : "row d-none",
    id: "go-to-first-plot"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "go-to-first-plot-button",
    className: "btn btn-outline-lightgreen btn-sm btn-block",
    type: "button",
    name: "new-plot",
    value: "Go to first plot",
    onClick: props.nextPlot
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.navButtonsShown == 2 ? "row" : "row d-none",
    id: "plot-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 pr-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "new-plot-button",
    className: "btn btn-outline-lightgreen btn-sm btn-block",
    type: "button",
    name: "new-plot",
    value: "Skip",
    onClick: props.nextPlot,
    style: {
      opacity: props.newPlotButtonDisabled ? "0.5" : "1.0"
    },
    disabled: props.newPlotButtonDisabled
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 pl-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "flag-plot-button",
    className: "btn btn-outline-lightgreen btn-sm btn-block",
    type: "button",
    name: "flag-plot",
    value: "Flag Plot as Bad",
    onClick: props.flagPlot,
    style: {
      opacity: props.flagPlotButtonDisabled ? "0.5" : "1.0"
    },
    disabled: props.flagPlotButtonDisabled
  }))));
}

function ImageryOptions(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: "mb-3 justify-content-center text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Imagery Options"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control form-control-sm",
    id: "base-map-source",
    name: "base-map-source",
    size: "1",
    value: props.baseMapSource || "",
    onChange: props.setBaseMapSource
  }, props.imageryList.map(function (imagery, uid) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: uid,
      value: imagery.title
    }, imagery.title);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DigitalGlobeMenus, {
    baseMapSource: props.baseMapSource,
    imageryYearDG: props.imageryYearDG,
    stackingProfileDG: props.stackingProfileDG,
    setImageryYearDG: props.setImageryYearDG,
    setStackingProfileDG: props.setStackingProfileDG
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlanetMenus, {
    baseMapSource: props.baseMapSource,
    imageryYearPlanet: props.imageryYearPlanet,
    imageryMonthPlanet: props.imageryMonthPlanet,
    setImageryYearPlanet: props.setImageryYearPlanet,
    setImageryMonthPlanet: props.setImageryMonthPlanet
  }));
}

function range(start, stop, step) {
  return Array.from({
    length: (stop - start) / step
  }, function (_, i) {
    return start + i * step;
  });
}

function DigitalGlobeMenus(props) {
  if (props.baseMapSource == "DigitalGlobeWMSImagery") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control form-control-sm",
      id: "dg-imagery-year",
      name: "dg-imagery-year",
      size: "1",
      value: props.imageryYearDG,
      onChange: props.setImageryYearDG
    }, range(2018, 1999, -1).map(function (year) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: year,
        value: year
      }, year);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control form-control-sm",
      id: "dg-stacking-profile",
      name: "dg-stacking-profile",
      size: "1",
      value: props.stackingProfileDG,
      onChange: props.setStackingProfileDG
    }, ["Accuracy_Profile", "Cloud_Cover_Profile", "Global_Currency_Profile", "MyDG_Color_Consumer_Profile", "MyDG_Consumer_Profile"].map(function (profile) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: profile,
        value: profile
      }, profile);
    })));
  } else {
    return "";
  }
}

function PlanetMenus(props) {
  if (props.baseMapSource == "PlanetGlobalMosaic") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control form-control-sm",
      id: "planet-imagery-year",
      name: "planet-imagery-year",
      size: "1",
      value: props.imageryYearPlanet,
      onChange: props.setImageryYearPlanet
    }, range(2018, 2015, -1).map(function (year) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: year,
        value: year
      }, year);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control form-control-sm",
      id: "planet-imagery-month",
      name: "planet-imagery-month",
      size: "1",
      value: props.imageryMonthPlanet,
      onChange: props.setImageryMonthPlanet
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "01"
    }, "January"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "02"
    }, "February"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "03"
    }, "March"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "04"
    }, "April"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "05"
    }, "May"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "06"
    }, "June"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "07"
    }, "July"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "08"
    }, "August"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "09"
    }, "September"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "10"
    }, "October"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "11"
    }, "November"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "12"
    }, "December")));
  } else {
    return "";
  }
}

function SurveyQuestions(props) {
  var topLevelNodes = props.surveyQuestions.filter(function (surveyNode) {
    return surveyNode.parent_question == -1;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: "mb-3 justify-content-center text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Survey Questions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      fontSize: "small"
    }
  }, "(Click on a question to expand)"), topLevelNodes.map(function (surveyNode, uid) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyQuestionTree, {
      key: uid,
      surveyNode: surveyNode,
      surveyAnswersVisible: props.surveyAnswersVisible,
      surveyQuestions: props.surveyQuestions,
      hideShowAnswers: props.hideShowAnswers,
      setCurrentValue: props.setCurrentValue
    });
  }));
}

function SurveyQuestionTree(props) {
  var childNodes = props.surveyQuestions.filter(function (surveyNode) {
    return surveyNode.parent_question == props.surveyNode.id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: "mb-1 justify-content-center text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: props.surveyNode.question + "_" + props.surveyNode.id,
    className: "text-center btn btn-outline-lightgreen btn-sm btn-block",
    onClick: function onClick() {
      return props.hideShowAnswers(props.surveyNode.id);
    },
    style: {
      marginBottom: "10px"
    }
  }, "Survey Question: ", props.surveyNode.question), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "samplevalue justify-content-center" + (props.surveyAnswersVisible[props.surveyNode.id] ? "" : " d-none")
  }, props.surveyNode.answers.map(function (ans, uid) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyAnswer, {
      key: uid,
      question: props.surveyNode.question,
      id: ans.id,
      answer: ans.answer,
      color: ans.color,
      setCurrentValue: props.setCurrentValue
    });
  })), childNodes.map(function (surveyNode, uid) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyQuestionTree, {
      key: uid,
      surveyNode: surveyNode,
      surveyAnswersVisible: props.surveyAnswersVisible,
      surveyQuestions: props.surveyQuestions,
      hideShowAnswers: props.hideShowAnswers,
      setCurrentValue: props.setCurrentValue
    });
  }));
}

function SurveyAnswer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-outline-darkgray btn-sm btn-block pl-1",
    id: props.answer + "_" + props.id,
    name: props.answer + "_" + props.id,
    onClick: function onClick() {
      return props.setCurrentValue(props.question, props.id, props.answer, props.color);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle",
    style: {
      backgroundColor: props.color,
      border: "solid 1px",
      float: "left",
      marginTop: "4px"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small"
  }, props.answer)));
}

function SaveValuesButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "save-values-button",
    className: "btn btn-outline-lightgreen btn-sm btn-block",
    type: "button",
    name: "save-values",
    value: "Save",
    onClick: props.saveValues,
    style: {
      opacity: props.saveValuesButtonDisabled ? "0.5" : "1.0"
    },
    disabled: props.saveValuesButtonDisabled
  });
}

var ProjectStats =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProjectStats, _React$Component2);

  function ProjectStats() {
    _classCallCheck(this, ProjectStats);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectStats).apply(this, arguments));
  }

  _createClass(ProjectStats, [{
    key: "asPercentage",
    value: function asPercentage(part, total) {
      return part && total ? (100.0 * part / total).toFixed(2) : "0.00";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-lightgreen btn-sm btn-block mb-1",
        "data-toggle": "collapse",
        href: "#project-stats-collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "project-stats-collapse"
      }, "Project Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center mb-1 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
        id: "projStats",
        className: "text-center projNoStats"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse",
        id: "project-stats-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, "Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, this.props.projectName || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, "Plots Analyzed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, this.props.stats.analyzedPlots || "", "(", this.asPercentage(this.props.stats.analyzedPlots, this.props.numPlots), "%)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, "Plots Flagged"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, this.props.stats.flaggedPlots || "", "(", this.asPercentage(this.props.stats.flaggedPlots, this.props.numPlots), "%)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, "Plots Completed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, this.props.stats.analyzedPlots + this.props.stats.flaggedPlots || "", "(", this.asPercentage(this.props.stats.analyzedPlots + this.props.stats.flaggedPlots, this.props.numPlots), "%)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, "Plots Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "small"
      }, this.props.numPlots || "")))))))));
    }
  }]);

  return ProjectStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function QuitButton() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "collection-quit-button",
    className: "btn btn-outline-danger btn-block btn-sm",
    type: "button",
    name: "collection-quit",
    "data-toggle": "modal",
    "data-target": "#confirmation-quit"
  }, "Quit");
}

function QuitMenu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "confirmation-quit",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalCenterTitle",
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLongTitle"
  }, "Confirmation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, "Are you sure you want to stop collecting data?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-sm",
    "data-dismiss": "modal"
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn bg-lightgreen btn-sm",
    id: "quit-button",
    onClick: props.redirectToHomePage
  }, "OK")))));
}

function renderCollectionPage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collection, {
    documentRoot: args.documentRoot,
    userId: args.userId,
    userName: args.userName,
    projectId: args.projectId
  }), document.getElementById("collection"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvbWFpbi9yZXNvdXJjZXMvcHVibGljL2pzeC9jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwiZW5hYmxlX2VsZW1lbnQiLCJlbGVtZW50X2lkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsInN0eWxlIiwib3BhY2l0eSIsImRpc2FibGVfZWxlbWVudCIsInNob3dfZWxlbWVudCIsInZpc2liaWxpdHkiLCJoaWRlX2VsZW1lbnQiLCJoaWdobGlnaHRfYm9yZGVyIiwic2hhZG93X3N0eWxlIiwiYm94U2hhZG93IiwibG93bGlnaHRfYm9yZGVyIiwiYmxpbmtfYm9yZGVyIiwic2V0VGltZW91dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJDb2xsZWN0aW9uIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRQcm9qZWN0Iiwic2FtcGxlVmFsdWVzIiwic3RhdHMiLCJwbG90TGlzdCIsImltYWdlcnlMaXN0IiwibWFwQ29uZmlnIiwiY3VycmVudEltYWdlcnkiLCJpbWFnZXJ5QXR0cmlidXRpb24iLCJpbWFnZXJ5WWVhckRHIiwic3RhY2tpbmdQcm9maWxlREciLCJpbWFnZXJ5WWVhclBsYW5ldCIsImltYWdlcnlNb250aFBsYW5ldCIsInByb2plY3RQbG90c1Nob3duIiwibmF2QnV0dG9uc1Nob3duIiwibmV3UGxvdEJ1dHRvbkRpc2FibGVkIiwiZmxhZ1Bsb3RCdXR0b25EaXNhYmxlZCIsInNhdmVWYWx1ZXNCdXR0b25EaXNhYmxlZCIsInN1cnZleUFuc3dlcnNWaXNpYmxlIiwiY3VycmVudFBsb3QiLCJ1c2VyU2FtcGxlcyIsInNldEJhc2VNYXBTb3VyY2UiLCJiaW5kIiwic2V0SW1hZ2VyeVllYXJERyIsInNldFN0YWNraW5nUHJvZmlsZURHIiwic2V0SW1hZ2VyeVllYXJQbGFuZXQiLCJzZXRJbWFnZXJ5TW9udGhQbGFuZXQiLCJnZXRQbG90RGF0YSIsIm5leHRQbG90IiwiZmxhZ1Bsb3QiLCJzYXZlVmFsdWVzIiwiaGlkZVNob3dBbnN3ZXJzIiwic2V0Q3VycmVudFZhbHVlIiwicmVkaXJlY3RUb0hvbWVQYWdlIiwiZ2V0UHJvamVjdEJ5SWQiLCJnZXRQcm9qZWN0U3RhdHMiLCJnZXRQcm9qZWN0UGxvdHMiLCJpbnN0aXR1dGlvbiIsImxlbmd0aCIsImdldEltYWdlcnlMaXN0Iiwic2hvd1Byb2plY3RNYXAiLCJzaG93UHJvamVjdFBsb3RzIiwidXBkYXRlTWFwSW1hZ2VyeSIsImJhc2VNYXBTb3VyY2UiLCJmZXRjaCIsImRvY3VtZW50Um9vdCIsInByb2plY3RJZCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJvamVjdCIsImlkIiwid2luZG93IiwibG9jYXRpb24iLCJzdXJ2ZXlRdWVzdGlvbnMiLCJjb252ZXJ0U2FtcGxlVmFsdWVzVG9TdXJ2ZXlRdWVzdGlvbnMiLCJzZXRTdGF0ZSIsIm1hcCIsInNhbXBsZVZhbHVlIiwibmFtZSIsInZhbHVlcyIsInN1cnZleVF1ZXN0aW9uQW5zd2VycyIsInZhbHVlIiwiYW5zd2VyIiwiY29sb3IiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJwYXJlbnRfcXVlc3Rpb24iLCJwYXJlbnRfYW5zd2VyIiwiZGF0YSIsIm1lcmNhdG9yIiwiY3JlYXRlTWFwIiwiYWRkVmVjdG9yTGF5ZXIiLCJnZW9tZXRyeVRvVmVjdG9yU291cmNlIiwicGFyc2VHZW9Kc29uIiwiYm91bmRhcnkiLCJjZW9NYXBTdHlsZXMiLCJwb2x5Z29uIiwiem9vbU1hcFRvTGF5ZXIiLCJhZGRQbG90TGF5ZXIiLCJmZWF0dXJlIiwiZ2V0IiwiZXZlbnQiLCJkcm9wZG93biIsInRhcmdldCIsIm5ld0Jhc2VNYXBTb3VyY2UiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByb2oiLCJuZXdJbWFnZXJ5WWVhckRHIiwiZ2V0SW1hZ2VyeUJ5VGl0bGUiLCJuZXdJbWFnZXJ5QXR0cmlidXRpb24iLCJhdHRyaWJ1dGlvbiIsInVwZGF0ZURHV01TTGF5ZXIiLCJuZXdTdGFja2luZ1Byb2ZpbGVERyIsIm5ld0ltYWdlcnlZZWFyUGxhbmV0IiwidXBkYXRlUGxhbmV0TGF5ZXIiLCJuZXdJbWFnZXJ5TW9udGhQbGFuZXQiLCJzZXRWaXNpYmxlTGF5ZXIiLCJuZXdJbWFnZXJ5IiwiaW1hZ2VyeVRpdGxlIiwiZmluZCIsImltYWdlcnkiLCJ0aXRsZSIsImltYWdlcnlZZWFyIiwic3RhY2tpbmdQcm9maWxlIiwidXBkYXRlTGF5ZXJXbXNQYXJhbXMiLCJDT1ZFUkFHRV9DUUxfRklMVEVSIiwiRkVBVFVSRVBST0ZJTEUiLCJpbWFnZXJ5TW9udGgiLCJ1cGRhdGVMYXllclNvdXJjZSIsInNvdXJjZUNvbmZpZyIsIm1vbnRoIiwieWVhciIsInBsb3RJZCIsInVybCIsInRleHQiLCJtc2ciLCJuZXdQbG90IiwiSlNPTiIsInBhcnNlIiwic2hvd1Byb2plY3RQbG90Iiwic2hvd0dlb0Rhc2giLCJzaG93VGltZVN5bmMiLCJwbG90IiwiZGlzYWJsZVNlbGVjdGlvbiIsInJlbW92ZUxheWVyQnlUaXRsZSIsImdlb20iLCJnZXRQbG90UG9seWdvbiIsImNlbnRlciIsInBsb3RTaXplIiwicGxvdFNoYXBlIiwic2FtcGxlc1RvVmVjdG9yU291cmNlIiwic2FtcGxlcyIsInllbGxvd1BvaW50IiwiZW5hYmxlU2VsZWN0aW9uIiwicGxvdFJhZGl1cyIsImdldFZpZXdSYWRpdXMiLCJvcGVuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Vmlld0V4dGVudCIsIm1lc3NhZ2UiLCJ1c2VySWQiLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInVzZXJOYW1lIiwic3RhdGlzdGljcyIsImZsYWdnZWRQbG90cyIsImFuYWx5emVkUGxvdHMiLCJzdXJ2ZXlOb2RlSWQiLCJxdWVzdGlvblRleHQiLCJhbnN3ZXJJZCIsImFuc3dlclRleHQiLCJhbnN3ZXJDb2xvciIsInNlbGVjdGVkRmVhdHVyZXMiLCJnZXRTZWxlY3RlZFNhbXBsZXMiLCJnZXRMZW5ndGgiLCJmb3JFYWNoIiwic2FtcGxlSWQiLCJoaWdobGlnaHRTYW1wbGVHZW9tZXRyeSIsImNsZWFyIiwiY2hlY2tJZkFsbFNhbXBsZXNBc3NpZ25lZCIsImFzc2lnbmVkU2FtcGxlcyIsIk9iamVjdCIsImtleXMiLCJhc3NpZ25lZFF1ZXN0aW9ucyIsInRvdGFsU2FtcGxlcyIsInRvdGFsUXVlc3Rpb25zIiwiZXZlcnkiLCJhc3NpZ25tZW50cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2VBbmFseXNpc1BhbmUiLCJTaWRlQmFyIiwibnVtUGxvdHMiLCJQcm9qZWN0TmFtZSIsInByb2plY3ROYW1lIiwiUGxvdE5hdmlnYXRpb24iLCJJbWFnZXJ5T3B0aW9ucyIsInVpZCIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiRGlnaXRhbEdsb2JlTWVudXMiLCJwcm9maWxlIiwiUGxhbmV0TWVudXMiLCJTdXJ2ZXlRdWVzdGlvbnMiLCJ0b3BMZXZlbE5vZGVzIiwiZmlsdGVyIiwic3VydmV5Tm9kZSIsImZvbnRTaXplIiwiU3VydmV5UXVlc3Rpb25UcmVlIiwiY2hpbGROb2RlcyIsIm1hcmdpbkJvdHRvbSIsImFucyIsIlN1cnZleUFuc3dlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImZsb2F0IiwibWFyZ2luVG9wIiwiU2F2ZVZhbHVlc0J1dHRvbiIsIlByb2plY3RTdGF0cyIsInBhcnQiLCJ0b3RhbCIsInRvRml4ZWQiLCJhc1BlcmNlbnRhZ2UiLCJRdWl0QnV0dG9uIiwiUXVpdE1lbnUiLCJyZW5kZXJDb2xsZWN0aW9uUGFnZSIsImFyZ3MiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7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QUM7QUFBekQsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLG9CQURKLEVBRUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsT0FBaEM7QUFBd0Msb0JBQWEsT0FBckQ7QUFBNkQsa0JBQVc7QUFBeEUsS0FDSTtBQUFNLG1CQUFZO0FBQWxCLFlBREosQ0FGSixDQURKLEVBT0k7QUFBSyxhQUFTLEVBQUM7QUFBZixzREFQSixFQVVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQywwQkFBaEM7QUFBMkQsb0JBQWE7QUFBeEUsYUFESixFQUVJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLDBCQUFoQztBQUEyRCxNQUFFLEVBQUMsYUFBOUQ7QUFDUSxXQUFPLEVBQUVBLEtBQUssQ0FBQ2tDO0FBRHZCLFVBRkosQ0FWSixDQURKLENBRkosQ0FESjtBQXVCSDs7QUFFTSxTQUFTNEwsb0JBQVQsQ0FBOEJDLElBQTlCLEVBQW9DO0FBQ3ZDQyxrREFBUSxDQUFDQyxNQUFULENBQ0ksMkRBQUMsVUFBRDtBQUFZLGdCQUFZLEVBQUVGLElBQUksQ0FBQ2pMLFlBQS9CO0FBQTZDLFVBQU0sRUFBRWlMLElBQUksQ0FBQzFFLE1BQTFEO0FBQWtFLFlBQVEsRUFBRTBFLElBQUksQ0FBQ3JFLFFBQWpGO0FBQTJGLGFBQVMsRUFBRXFFLElBQUksQ0FBQ2hMO0FBQTNHLElBREosRUFFSWpFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUZKO0FBSUgsQyIsImZpbGUiOiJjb2xsZWN0aW9uLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29sbGVjdGlvblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvY29sbGVjdGlvbi5qc1wiLFwidmVuZG9yc35hY2NvdW50fmNvbGxlY3Rpb25+Z2VvZGFzaHJlYWN0fmhvbWV+aW5zdGl0dXRpb25+cHJvamVjdH50aW1lc3luY353aWRnZXRsYXlvdXRlZGl0b3JcIixcImNvbGxlY3Rpb25+Z2VvZGFzaHJlYWN0fmhvbWV+cHJvamVjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICoqKlxuICoqKiBDcmVhdGUgdGhlIHV0aWxzIG9iamVjdCB0byBhY3QgYXMgYSBuYW1lc3BhY2UgZm9yIHRoaXMgZmlsZVxuICoqKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgdXRpbHMgPSB7fTtcblxudXRpbHMuZW5hYmxlX2VsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmRpc2FibGVfZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG51dGlscy5zaG93X2VsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59O1xuXG51dGlscy5oaWRlX2VsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn07XG5cbnV0aWxzLmhpZ2hsaWdodF9ib3JkZXIgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgdmFyIHNoYWRvd19zdHlsZSA9IFwiMHB4IDBweCA0cHggNHB4IGJsYWNrIGluc2V0LCAwcHggMHB4IDRweCA0cHggd2hpdGUgaW5zZXRcIjtcbiAgICBlbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd19zdHlsZTtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmxvd2xpZ2h0X2JvcmRlciA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiaW5pdGlhbFwiO1xuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuYmxpbmtfYm9yZGVyID0gZnVuY3Rpb24gKGVsZW1lbnRfaWQpIHtcbiAgICB1dGlscy5oaWdobGlnaHRfYm9yZGVyKGVsZW1lbnRfaWQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB1dGlscy5sb3dsaWdodF9ib3JkZXIoZWxlbWVudF9pZCk7IH0sIDUwMCk7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB1dGlsczogdXRpbHNcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbWVyY2F0b3IsIGNlb01hcFN0eWxlcyB9IGZyb20gXCIuLi9qcy9tZXJjYXRvci1vcGVubGF5ZXJzLmpzXCI7XG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9qcy91dGlscy5qc1wiO1xuXG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdDoge3NhbXBsZVZhbHVlczogW119LFxuICAgICAgICAgICAgc3RhdHM6IHt9LFxuICAgICAgICAgICAgcGxvdExpc3Q6IFtdLFxuICAgICAgICAgICAgaW1hZ2VyeUxpc3Q6IFtdLFxuICAgICAgICAgICAgbWFwQ29uZmlnOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudEltYWdlcnk6IG51bGwsXG4gICAgICAgICAgICBpbWFnZXJ5QXR0cmlidXRpb246IFwiXCIsXG4gICAgICAgICAgICBpbWFnZXJ5WWVhckRHOiAyMDA5LFxuICAgICAgICAgICAgc3RhY2tpbmdQcm9maWxlREc6IFwiQWNjdXJhY3lfUHJvZmlsZVwiLFxuICAgICAgICAgICAgaW1hZ2VyeVllYXJQbGFuZXQ6IDIwMTgsXG4gICAgICAgICAgICBpbWFnZXJ5TW9udGhQbGFuZXQ6IFwiMDNcIixcbiAgICAgICAgICAgIHByb2plY3RQbG90c1Nob3duOiBmYWxzZSxcbiAgICAgICAgICAgIG5hdkJ1dHRvbnNTaG93bjogMSxcbiAgICAgICAgICAgIG5ld1Bsb3RCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBmbGFnUGxvdEJ1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNhdmVWYWx1ZXNCdXR0b25EaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHN1cnZleUFuc3dlcnNWaXNpYmxlOiB7fSxcbiAgICAgICAgICAgIGN1cnJlbnRQbG90OiBudWxsLFxuICAgICAgICAgICAgdXNlclNhbXBsZXM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QmFzZU1hcFNvdXJjZSAgICAgID0gdGhpcy5zZXRCYXNlTWFwU291cmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2VyeVllYXJERyAgICAgID0gdGhpcy5zZXRJbWFnZXJ5WWVhckRHLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhY2tpbmdQcm9maWxlREcgID0gdGhpcy5zZXRTdGFja2luZ1Byb2ZpbGVERy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldEltYWdlcnlZZWFyUGxhbmV0ICA9IHRoaXMuc2V0SW1hZ2VyeVllYXJQbGFuZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRJbWFnZXJ5TW9udGhQbGFuZXQgPSB0aGlzLnNldEltYWdlcnlNb250aFBsYW5ldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFBsb3REYXRhICAgICAgICAgICA9IHRoaXMuZ2V0UGxvdERhdGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXh0UGxvdCAgICAgICAgICAgICAgPSB0aGlzLm5leHRQbG90LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmxhZ1Bsb3QgICAgICAgICAgICAgID0gdGhpcy5mbGFnUGxvdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhdmVWYWx1ZXMgICAgICAgICAgICA9IHRoaXMuc2F2ZVZhbHVlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVTaG93QW5zd2VycyAgICAgICA9IHRoaXMuaGlkZVNob3dBbnN3ZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFZhbHVlICAgICAgID0gdGhpcy5zZXRDdXJyZW50VmFsdWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFRvSG9tZVBhZ2UgICAgPSB0aGlzLnJlZGlyZWN0VG9Ib21lUGFnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldFByb2plY3RCeUlkKCk7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdFN0YXRzKCk7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdFBsb3RzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UHJvamVjdC5pbnN0aXR1dGlvbiAmJiB0aGlzLnN0YXRlLmltYWdlcnlMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdldEltYWdlcnlMaXN0KHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QuaW5zdGl0dXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltYWdlcnlMaXN0Lmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5tYXBDb25maWcgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvamVjdE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1hcENvbmZpZyAmJiB0aGlzLnN0YXRlLnBsb3RMaXN0Lmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5wcm9qZWN0UGxvdHNTaG93biA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvamVjdFBsb3RzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWFwQ29uZmlnICYmIHRoaXMuc3RhdGUuY3VycmVudEltYWdlcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXBJbWFnZXJ5KHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QuYmFzZU1hcFNvdXJjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0QnlJZCgpIHtcbiAgICAgICAgZmV0Y2godGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9nZXQtcHJvamVjdC1ieS1pZC9cIiArIHRoaXMucHJvcHMucHJvamVjdElkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHRoZSBwcm9qZWN0IGluZm8uIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZShudWxsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0ID09IG51bGwgfHwgcHJvamVjdC5pZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm8gcHJvamVjdCBmb3VuZCB3aXRoIElEIFwiICsgdGhpcy5wcm9wcy5wcm9qZWN0SWQgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvaG9tZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cnZleVF1ZXN0aW9ucyA9IHRoaXMuY29udmVydFNhbXBsZVZhbHVlc1RvU3VydmV5UXVlc3Rpb25zKHByb2plY3Quc2FtcGxlVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VydmV5UXVlc3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5zYW1wbGVWYWx1ZXMgPSBzdXJ2ZXlRdWVzdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQcm9qZWN0OiBwcm9qZWN0fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29udmVydFNhbXBsZVZhbHVlc1RvU3VydmV5UXVlc3Rpb25zKHNhbXBsZVZhbHVlcykge1xuICAgICAgICByZXR1cm4gc2FtcGxlVmFsdWVzLm1hcChzYW1wbGVWYWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2FtcGxlVmFsdWUubmFtZSAmJiBzYW1wbGVWYWx1ZS52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJ2ZXlRdWVzdGlvbkFuc3dlcnMgPSBzYW1wbGVWYWx1ZS52YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IHZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YWx1ZS5jb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiBzYW1wbGVWYWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBzYW1wbGVWYWx1ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyczogc3VydmV5UXVlc3Rpb25BbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50X3F1ZXN0aW9uOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF9hbnN3ZXI6IC0xfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNhbXBsZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0U3RhdHMoKSB7XG4gICAgICAgIGZldGNoKHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvZ2V0LXByb2plY3Qtc3RhdHMvXCIgKyB0aGlzLnByb3BzLnByb2plY3RJZClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgZ2V0dGluZyBwcm9qZWN0IHN0YXRzLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUobnVsbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0czogZGF0YX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdFBsb3RzKCkge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1wcm9qZWN0LXBsb3RzL1wiICsgdGhpcy5wcm9wcy5wcm9qZWN0SWQgKyBcIi8xMDAwXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgcGxvdCBkYXRhLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUobnVsbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwbG90TGlzdDogZGF0YX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VyeUxpc3QoaW5zdGl0dXRpb24pIHtcbiAgICAgICAgZmV0Y2godGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9nZXQtYWxsLWltYWdlcnk/aW5zdGl0dXRpb25JZD1cIiArIGluc3RpdHV0aW9uKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHRoZSBpbWFnZXJ5IGxpc3QuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZShudWxsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltYWdlcnlMaXN0OiBkYXRhfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvamVjdE1hcCgpIHtcbiAgICAgICAgbGV0IG1hcENvbmZpZyA9IG1lcmNhdG9yLmNyZWF0ZU1hcChcImltYWdlLWFuYWx5c2lzLXBhbmVcIiwgWzAuMCwgMC4wXSwgMSwgdGhpcy5zdGF0ZS5pbWFnZXJ5TGlzdCk7XG4gICAgICAgIG1lcmNhdG9yLmFkZFZlY3RvckxheWVyKG1hcENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50QU9JXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLmdlb21ldHJ5VG9WZWN0b3JTb3VyY2UobWVyY2F0b3IucGFyc2VHZW9Kc29uKHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QuYm91bmRhcnksIHRydWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VvTWFwU3R5bGVzLnBvbHlnb24pO1xuICAgICAgICBtZXJjYXRvci56b29tTWFwVG9MYXllcihtYXBDb25maWcsIFwiY3VycmVudEFPSVwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwQ29uZmlnOiBtYXBDb25maWd9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvamVjdFBsb3RzKCkge1xuICAgICAgICBtZXJjYXRvci5hZGRQbG90TGF5ZXIodGhpcy5zdGF0ZS5tYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBsb3RMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2QnV0dG9uc1Nob3duOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ1Bsb3RCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVZhbHVlc0J1dHRvbkRpc2FibGVkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbG90RGF0YShmZWF0dXJlLmdldChcImZlYXR1cmVzXCIpWzBdLmdldChcInBsb3RJZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvamVjdFBsb3RzU2hvd246IHRydWV9KTtcbiAgICB9XG5cbiAgICBzZXRCYXNlTWFwU291cmNlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBuZXdCYXNlTWFwU291cmNlID0gZHJvcGRvd24ub3B0aW9uc1tkcm9wZG93bi5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgbGV0IHByb2ogPSB0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0O1xuICAgICAgICBwcm9qLmJhc2VNYXBTb3VyY2UgPSBuZXdCYXNlTWFwU291cmNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UHJvamVjdDogcHJvan0pO1xuICAgICAgICB0aGlzLnVwZGF0ZU1hcEltYWdlcnkobmV3QmFzZU1hcFNvdXJjZSk7XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VyeVllYXJERyhldmVudCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VyeVllYXJERyA9IGRyb3Bkb3duLm9wdGlvbnNbZHJvcGRvd24uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZXJ5ID0gdGhpcy5nZXRJbWFnZXJ5QnlUaXRsZSh0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0LmJhc2VNYXBTb3VyY2UpO1xuICAgICAgICBjb25zdCBuZXdJbWFnZXJ5QXR0cmlidXRpb24gPSBjdXJyZW50SW1hZ2VyeS5hdHRyaWJ1dGlvbiArIFwiIHwgXCIgKyBuZXdJbWFnZXJ5WWVhckRHICsgXCIgKFwiICsgdGhpcy5zdGF0ZS5zdGFja2luZ1Byb2ZpbGVERyArIFwiKVwiO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWFnZXJ5WWVhckRHOiBuZXdJbWFnZXJ5WWVhckRHLFxuICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXJ5QXR0cmlidXRpb246IG5ld0ltYWdlcnlBdHRyaWJ1dGlvbn0pO1xuICAgICAgICB0aGlzLnVwZGF0ZURHV01TTGF5ZXIobmV3SW1hZ2VyeVllYXJERywgdGhpcy5zdGF0ZS5zdGFja2luZ1Byb2ZpbGVERyk7XG4gICAgfVxuXG4gICAgc2V0U3RhY2tpbmdQcm9maWxlREcoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IG5ld1N0YWNraW5nUHJvZmlsZURHID0gZHJvcGRvd24ub3B0aW9uc1tkcm9wZG93bi5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgY29uc3QgY3VycmVudEltYWdlcnkgPSB0aGlzLmdldEltYWdlcnlCeVRpdGxlKHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QuYmFzZU1hcFNvdXJjZSk7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlcnlBdHRyaWJ1dGlvbiA9IGN1cnJlbnRJbWFnZXJ5LmF0dHJpYnV0aW9uICsgXCIgfCBcIiArIHRoaXMuc3RhdGUuaW1hZ2VyeVllYXJERyArIFwiIChcIiArIG5ld1N0YWNraW5nUHJvZmlsZURHICsgXCIpXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YWNraW5nUHJvZmlsZURHOiBuZXdTdGFja2luZ1Byb2ZpbGVERyxcbiAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeUF0dHJpYnV0aW9uOiBuZXdJbWFnZXJ5QXR0cmlidXRpb259KTtcbiAgICAgICAgdGhpcy51cGRhdGVER1dNU0xheWVyKHRoaXMuc3RhdGUuaW1hZ2VyeVllYXJERywgbmV3U3RhY2tpbmdQcm9maWxlREcpO1xuICAgIH1cblxuICAgIHNldEltYWdlcnlZZWFyUGxhbmV0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBuZXdJbWFnZXJ5WWVhclBsYW5ldCA9IGRyb3Bkb3duLm9wdGlvbnNbZHJvcGRvd24uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZXJ5ID0gdGhpcy5nZXRJbWFnZXJ5QnlUaXRsZSh0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0LmJhc2VNYXBTb3VyY2UpO1xuICAgICAgICBjb25zdCBuZXdJbWFnZXJ5QXR0cmlidXRpb24gPSBjdXJyZW50SW1hZ2VyeS5hdHRyaWJ1dGlvbiArIFwiIHwgXCIgKyBuZXdJbWFnZXJ5WWVhclBsYW5ldCArIFwiLVwiICsgdGhpcy5zdGF0ZS5pbWFnZXJ5TW9udGhQbGFuZXQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltYWdlcnlZZWFyUGxhbmV0OiBuZXdJbWFnZXJ5WWVhclBsYW5ldCxcbiAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeUF0dHJpYnV0aW9uOiBuZXdJbWFnZXJ5QXR0cmlidXRpb259KTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGFuZXRMYXllcih0aGlzLnN0YXRlLmltYWdlcnlNb250aFBsYW5ldCwgbmV3SW1hZ2VyeVllYXJQbGFuZXQpO1xuICAgIH1cblxuICAgIHNldEltYWdlcnlNb250aFBsYW5ldChldmVudCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VyeU1vbnRoUGxhbmV0ID0gZHJvcGRvd24ub3B0aW9uc1tkcm9wZG93bi5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgY29uc3QgY3VycmVudEltYWdlcnkgPSB0aGlzLmdldEltYWdlcnlCeVRpdGxlKHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QuYmFzZU1hcFNvdXJjZSk7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlcnlBdHRyaWJ1dGlvbiA9IGN1cnJlbnRJbWFnZXJ5LmF0dHJpYnV0aW9uICsgXCIgfCBcIiArIHRoaXMuc3RhdGUuaW1hZ2VyeVllYXJQbGFuZXQgKyBcIi1cIiArIG5ld0ltYWdlcnlNb250aFBsYW5ldDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VyeU1vbnRoUGxhbmV0OiBuZXdJbWFnZXJ5TW9udGhQbGFuZXQsXG4gICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnlBdHRyaWJ1dGlvbjogbmV3SW1hZ2VyeUF0dHJpYnV0aW9ufSk7XG4gICAgICAgIHRoaXMudXBkYXRlUGxhbmV0TGF5ZXIobmV3SW1hZ2VyeU1vbnRoUGxhbmV0LCB0aGlzLnN0YXRlLmltYWdlcnlZZWFyUGxhbmV0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXBJbWFnZXJ5KG5ld0Jhc2VNYXBTb3VyY2UpIHtcbiAgICAgICAgbWVyY2F0b3Iuc2V0VmlzaWJsZUxheWVyKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBuZXdCYXNlTWFwU291cmNlKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VyeSA9IHRoaXMuZ2V0SW1hZ2VyeUJ5VGl0bGUobmV3QmFzZU1hcFNvdXJjZSk7XG4gICAgICAgIGxldCBuZXdJbWFnZXJ5QXR0cmlidXRpb24gPSBuZXdJbWFnZXJ5LmF0dHJpYnV0aW9uO1xuICAgICAgICBpZiAobmV3QmFzZU1hcFNvdXJjZSA9PSBcIkRpZ2l0YWxHbG9iZVdNU0ltYWdlcnlcIikge1xuICAgICAgICAgICAgbmV3SW1hZ2VyeUF0dHJpYnV0aW9uICs9IFwiIHwgXCIgKyB0aGlzLnN0YXRlLmltYWdlcnlZZWFyREcgKyBcIiAoXCIgKyB0aGlzLnN0YXRlLnN0YWNraW5nUHJvZmlsZURHICsgXCIpXCI7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURHV01TTGF5ZXIodGhpcy5zdGF0ZS5pbWFnZXJ5WWVhckRHLCB0aGlzLnN0YXRlLnN0YWNraW5nUHJvZmlsZURHKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdCYXNlTWFwU291cmNlID09IFwiUGxhbmV0R2xvYmFsTW9zYWljXCIpIHtcbiAgICAgICAgICAgIG5ld0ltYWdlcnlBdHRyaWJ1dGlvbiArPSBcIiB8IFwiICsgdGhpcy5zdGF0ZS5pbWFnZXJ5WWVhclBsYW5ldCArIFwiLVwiICsgdGhpcy5zdGF0ZS5pbWFnZXJ5TW9udGhQbGFuZXQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYW5ldExheWVyKHRoaXMuc3RhdGUuaW1hZ2VyeU1vbnRoUGxhbmV0LCB0aGlzLnN0YXRlLmltYWdlcnlZZWFyUGxhbmV0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50SW1hZ2VyeTogbmV3SW1hZ2VyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeUF0dHJpYnV0aW9uOiBuZXdJbWFnZXJ5QXR0cmlidXRpb259KTtcbiAgICB9XG5cbiAgICBnZXRJbWFnZXJ5QnlUaXRsZShpbWFnZXJ5VGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaW1hZ2VyeUxpc3QuZmluZChpbWFnZXJ5ID0+IGltYWdlcnkudGl0bGUgPT0gaW1hZ2VyeVRpdGxlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVER1dNU0xheWVyKGltYWdlcnlZZWFyLCBzdGFja2luZ1Byb2ZpbGUpIHtcbiAgICAgICAgbWVyY2F0b3IudXBkYXRlTGF5ZXJXbXNQYXJhbXModGhpcy5zdGF0ZS5tYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGlnaXRhbEdsb2JlV01TSW1hZ2VyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT1ZFUkFHRV9DUUxfRklMVEVSOiBcIihhY3F1aXNpdGlvbl9kYXRlPj0nXCIgKyBpbWFnZXJ5WWVhciArIFwiLTAxLTAxJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJBTkQoYWNxdWlzaXRpb25fZGF0ZTw9J1wiICsgaW1hZ2VyeVllYXIgKyBcIi0xMi0zMScpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRUFUVVJFUFJPRklMRTogc3RhY2tpbmdQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVBsYW5ldExheWVyKGltYWdlcnlNb250aCwgaW1hZ2VyeVllYXIpIHtcbiAgICAgICAgbWVyY2F0b3IudXBkYXRlTGF5ZXJTb3VyY2UodGhpcy5zdGF0ZS5tYXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGxhbmV0R2xvYmFsTW9zYWljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWcubW9udGggPSBpbWFnZXJ5TW9udGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWcueWVhciA9IGltYWdlcnlZZWFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZUNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0UGxvdERhdGEocGxvdElkKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IChwbG90SWQgPT0gXCJyYW5kb21cIilcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9nZXQtdW5hbmFseXplZC1wbG90L1wiICsgdGhpcy5wcm9wcy5wcm9qZWN0SWRcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9nZXQtdW5hbmFseXplZC1wbG90LWJ5LWlkL1wiICsgdGhpcy5wcm9wcy5wcm9qZWN0SWQgKyBcIi9cIiArIHBsb3RJZDtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHBsb3QgZGF0YS4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKFwiZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBcImRvbmVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGxvdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNhbXBsZXM6IHt9fSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IChwbG90SWQgPT0gXCJyYW5kb21cIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBbGwgcGxvdHMgaGF2ZSBiZWVuIGFuYWx5emVkIGZvciB0aGlzIHByb2plY3QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJUaGlzIHBsb3QgaGFzIGFscmVhZHkgYmVlbiBhbmFseXplZC5cIjtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQobXNnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJub3QgZm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGxvdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNhbXBsZXM6IHt9fSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm8gcGxvdCB3aXRoIElEIFwiICsgcGxvdElkICsgXCIgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBsb3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTYW1wbGVzOiB7fX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bsb3QgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGxvdDogbmV3UGxvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNhbXBsZXM6IHt9fSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2plY3RQbG90KG5ld1Bsb3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dHZW9EYXNoKG5ld1Bsb3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUaW1lU3luYyhuZXdQbG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvamVjdFBsb3QocGxvdCkge1xuICAgICAgICBtZXJjYXRvci5kaXNhYmxlU2VsZWN0aW9uKHRoaXMuc3RhdGUubWFwQ29uZmlnKTtcbiAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcImN1cnJlbnRQbG90c1wiKTtcbiAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcImN1cnJlbnRQbG90XCIpO1xuICAgICAgICBtZXJjYXRvci5yZW1vdmVMYXllckJ5VGl0bGUodGhpcy5zdGF0ZS5tYXBDb25maWcsIFwiY3VycmVudFNhbXBsZXNcIik7XG4gICAgICAgIG1lcmNhdG9yLmFkZFZlY3RvckxheWVyKHRoaXMuc3RhdGUubWFwQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRQbG90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNhdG9yLmdlb21ldHJ5VG9WZWN0b3JTb3VyY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbG90Lmdlb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmNhdG9yLnBhcnNlR2VvSnNvbihwbG90Lmdlb20sIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtZXJjYXRvci5nZXRQbG90UG9seWdvbihwbG90LmNlbnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QucGxvdFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0LnBsb3RTaGFwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VvTWFwU3R5bGVzLnBvbHlnb24pO1xuICAgICAgICBtZXJjYXRvci5hZGRWZWN0b3JMYXllcih0aGlzLnN0YXRlLm1hcENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50U2FtcGxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJjYXRvci5zYW1wbGVzVG9WZWN0b3JTb3VyY2UocGxvdC5zYW1wbGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxvdC5zYW1wbGVzWzBdLmdlb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjZW9NYXBTdHlsZXMucG9seWdvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlb01hcFN0eWxlcy55ZWxsb3dQb2ludCk7XG4gICAgICAgIG1lcmNhdG9yLmVuYWJsZVNlbGVjdGlvbih0aGlzLnN0YXRlLm1hcENvbmZpZywgXCJjdXJyZW50U2FtcGxlc1wiKTtcbiAgICAgICAgbWVyY2F0b3Iuem9vbU1hcFRvTGF5ZXIodGhpcy5zdGF0ZS5tYXBDb25maWcsIFwiY3VycmVudFBsb3RcIik7XG4gICAgfVxuXG4gICAgc2hvd0dlb0Rhc2gocGxvdCkge1xuICAgICAgICBjb25zdCBwbG90UmFkaXVzID0gdGhpcy5zdGF0ZS5jdXJyZW50UHJvamVjdC5wbG90U2l6ZVxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0LnBsb3RTaXplIC8gMi4wXG4gICAgICAgICAgICA6IG1lcmNhdG9yLmdldFZpZXdSYWRpdXModGhpcy5zdGF0ZS5tYXBDb25maWcpO1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dlby1kYXNoP2VkaXRhYmxlPWZhbHNlJlwiXG4gICAgICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KFwidGl0bGU9XCIgKyB0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiZwaWQ9XCIgKyB0aGlzLnByb3BzLnByb2plY3RJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiJnBsb3RpZD1cIiArIHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiZwbG90c2hhcGU9XCIgKyB0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0LnBsb3RTaGFwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiJmFvaT1bXCIgKyBtZXJjYXRvci5nZXRWaWV3RXh0ZW50KHRoaXMuc3RhdGUubWFwQ29uZmlnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiXSZkYXRlcmFuZ2U9JmJjZW50ZXI9XCIgKyBwbG90LmNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiJmJyYWRpdXM9XCIgKyBwbG90UmFkaXVzKSxcbiAgICAgICAgICAgICAgICAgICAgXCJfZ2VvLWRhc2hcIik7XG4gICAgfVxuXG4gICAgc2hvd1RpbWVTeW5jKHBsb3QpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIFwicHJvamVjdElEXCI6IHRoaXMucHJvcHMucHJvamVjdElkLFxuICAgICAgICAgICAgXCJwbG90SURcIjogcGxvdC5pZCxcbiAgICAgICAgICAgIFwiY3VycmVudExvY2F0aW9uXCI6IHBsb3QuY2VudGVyXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIGAvdGltZXN5bmMvJHt0aGlzLnByb3BzLnVzZXJJZH0/YFxuICAgICAgICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSksXG4gICAgICAgICAgICAgICAgICAgIFwiX3RpbWVzeW5jLWRhc2hcIik7XG4gICAgfVxuXG4gICAgbmV4dFBsb3QoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25hdkJ1dHRvbnNTaG93bjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdEJ1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgZmxhZ1Bsb3RCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHNhdmVWYWx1ZXNCdXR0b25EaXNhYmxlZDogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmdldFBsb3REYXRhKFwicmFuZG9tXCIpO1xuICAgIH1cblxuICAgIGZsYWdQbG90KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGxvdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2ZsYWctcGxvdFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnByb3BzLnByb2plY3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxvdElkOiB0aGlzLnN0YXRlLmN1cnJlbnRQbG90LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXRpc3RpY3MgPSB0aGlzLnN0YXRlLnN0YXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljcy5mbGFnZ2VkUGxvdHMgPSBzdGF0aXN0aWNzLmZsYWdnZWRQbG90cyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0czogc3RhdGlzdGljc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0UGxvdCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBmbGFnZ2luZyBwbG90IGFzIGJhZC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlVmFsdWVzKCkge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2FkZC11c2VyLXNhbXBsZXNcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvcHMucHJvamVjdElkLFxuICAgICAgICAgICAgICAgICAgICAgIHBsb3RJZDogdGhpcy5zdGF0ZS5jdXJyZW50UGxvdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdXNlclNhbXBsZXM6IHRoaXMuc3RhdGUudXNlclNhbXBsZXNcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNzID0gdGhpcy5zdGF0ZS5zdGF0cztcbiAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljcy5hbmFseXplZFBsb3RzID0gc3RhdGlzdGljcy5hbmFseXplZFBsb3RzICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHM6IHN0YXRpc3RpY3N9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0UGxvdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBzYXZpbmcgeW91ciBhc3NpZ25tZW50cyB0byB0aGUgZGF0YWJhc2UuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlU2hvd0Fuc3dlcnMoc3VydmV5Tm9kZUlkKSB7XG4gICAgICAgIGxldCBzdXJ2ZXlBbnN3ZXJzVmlzaWJsZSA9IHRoaXMuc3RhdGUuc3VydmV5QW5zd2Vyc1Zpc2libGU7XG4gICAgICAgIGlmIChzdXJ2ZXlBbnN3ZXJzVmlzaWJsZVtzdXJ2ZXlOb2RlSWRdKSB7XG4gICAgICAgICAgICBzdXJ2ZXlBbnN3ZXJzVmlzaWJsZVtzdXJ2ZXlOb2RlSWRdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXJ2ZXlBbnN3ZXJzVmlzaWJsZVtzdXJ2ZXlOb2RlSWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdXJ2ZXlBbnN3ZXJzVmlzaWJsZTogc3VydmV5QW5zd2Vyc1Zpc2libGV9KTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VmFsdWUocXVlc3Rpb25UZXh0LCBhbnN3ZXJJZCwgYW5zd2VyVGV4dCwgYW5zd2VyQ29sb3IpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlcyA9IG1lcmNhdG9yLmdldFNlbGVjdGVkU2FtcGxlcyh0aGlzLnN0YXRlLm1hcENvbmZpZyk7XG4gICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmVzICYmIHNlbGVjdGVkRmVhdHVyZXMuZ2V0TGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdXNlclNhbXBsZXMgPSB0aGlzLnN0YXRlLnVzZXJTYW1wbGVzO1xuICAgICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUlkID0gZmVhdHVyZS5nZXQoXCJzYW1wbGVJZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXJTYW1wbGVzW3NhbXBsZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyU2FtcGxlc1tzYW1wbGVJZF0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXNlclNhbXBsZXNbc2FtcGxlSWRdW3F1ZXN0aW9uVGV4dF0gPSBhbnN3ZXJUZXh0O1xuICAgICAgICAgICAgICAgIG1lcmNhdG9yLmhpZ2hsaWdodFNhbXBsZUdlb21ldHJ5KGZlYXR1cmUsIGFuc3dlckNvbG9yKTtcbiAgICAgICAgICAgIH0sIHRoaXMpOyAvLyBuZWNlc3NhcnkgdG8gcGFzcyBvdXRlciBzY29wZSBpbnRvIGZ1bmN0aW9uXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyU2FtcGxlczogdXNlclNhbXBsZXN9KTtcbiAgICAgICAgICAgIHV0aWxzLmJsaW5rX2JvcmRlcihhbnN3ZXJUZXh0ICsgXCJfXCIgKyBhbnN3ZXJJZCk7XG4gICAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZBbGxTYW1wbGVzQXNzaWduZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTm8gc2FtcGxlcyBzZWxlY3RlZC4gUGxlYXNlIGNsaWNrIHNvbWUgZmlyc3QuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJZkFsbFNhbXBsZXNBc3NpZ25lZCgpIHtcbiAgICAgICAgY29uc3QgYXNzaWduZWRTYW1wbGVzICAgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnVzZXJTYW1wbGVzKTtcbiAgICAgICAgY29uc3QgYXNzaWduZWRRdWVzdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUudXNlclNhbXBsZXMpO1xuICAgICAgICBjb25zdCB0b3RhbFNhbXBsZXMgICAgICA9IHRoaXMuc3RhdGUuY3VycmVudFBsb3Quc2FtcGxlcztcbiAgICAgICAgY29uc3QgdG90YWxRdWVzdGlvbnMgICAgPSB0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0LnNhbXBsZVZhbHVlcztcbiAgICAgICAgaWYgKGFzc2lnbmVkU2FtcGxlcy5sZW5ndGggPT0gdG90YWxTYW1wbGVzLmxlbmd0aFxuICAgICAgICAgICAgJiYgYXNzaWduZWRRdWVzdGlvbnMuZXZlcnkoYXNzaWdubWVudHMgPT4gT2JqZWN0LmtleXMoYXNzaWdubWVudHMpLmxlbmd0aCA9PSB0b3RhbFF1ZXN0aW9ucy5sZW5ndGgsIHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzYXZlVmFsdWVzQnV0dG9uRGlzYWJsZWQ6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWRpcmVjdFRvSG9tZVBhZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvaG9tZVwiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW1hZ2VBbmFseXNpc1BhbmUgaW1hZ2VyeUF0dHJpYnV0aW9uPXt0aGlzLnN0YXRlLmltYWdlcnlBdHRyaWJ1dGlvbn0vPlxuICAgICAgICAgICAgICAgIDxTaWRlQmFyIGN1cnJlbnRQcm9qZWN0PXt0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkJ1dHRvbnNTaG93bj17dGhpcy5zdGF0ZS5uYXZCdXR0b25zU2hvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdEJ1dHRvbkRpc2FibGVkPXt0aGlzLnN0YXRlLm5ld1Bsb3RCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnUGxvdEJ1dHRvbkRpc2FibGVkPXt0aGlzLnN0YXRlLmZsYWdQbG90QnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBsb3Q9e3RoaXMubmV4dFBsb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ1Bsb3Q9e3RoaXMuZmxhZ1Bsb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeUxpc3Q9e3RoaXMuc3RhdGUuaW1hZ2VyeUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFzZU1hcFNvdXJjZT17dGhpcy5zZXRCYXNlTWFwU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnlZZWFyREc9e3RoaXMuc3RhdGUuaW1hZ2VyeVllYXJER31cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja2luZ1Byb2ZpbGVERz17dGhpcy5zdGF0ZS5zdGFja2luZ1Byb2ZpbGVER31cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXJ5WWVhckRHPXt0aGlzLnNldEltYWdlcnlZZWFyREd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhY2tpbmdQcm9maWxlREc9e3RoaXMuc2V0U3RhY2tpbmdQcm9maWxlREd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeVllYXJQbGFuZXQ9e3RoaXMuc3RhdGUuaW1hZ2VyeVllYXJQbGFuZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeU1vbnRoUGxhbmV0PXt0aGlzLnN0YXRlLmltYWdlcnlNb250aFBsYW5ldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXJ5WWVhclBsYW5ldD17dGhpcy5zZXRJbWFnZXJ5WWVhclBsYW5ldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXJ5TW9udGhQbGFuZXQ9e3RoaXMuc2V0SW1hZ2VyeU1vbnRoUGxhbmV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXt0aGlzLnN0YXRlLnN0YXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVWYWx1ZXM9e3RoaXMuc2F2ZVZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlVmFsdWVzQnV0dG9uRGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2F2ZVZhbHVlc0J1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZleUFuc3dlcnNWaXNpYmxlPXt0aGlzLnN0YXRlLnN1cnZleUFuc3dlcnNWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTaG93QW5zd2Vycz17dGhpcy5oaWRlU2hvd0Fuc3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlPXt0aGlzLnNldEN1cnJlbnRWYWx1ZX0vPlxuICAgICAgICAgICAgICAgIDxRdWl0TWVudSByZWRpcmVjdFRvSG9tZVBhZ2U9e3RoaXMucmVkaXJlY3RUb0hvbWVQYWdlfS8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gSW1hZ2VBbmFseXNpc1BhbmUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiaW1hZ2UtYW5hbHlzaXMtcGFuZVwiIGNsYXNzTmFtZT1cImNvbC14bC05IGNvbC1sZy05IGNvbC1tZC0xMiBwbC0wIHByLTAgZnVsbC1oZWlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWFnZXJ5LWluZm9cIiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wgc21hbGxcIj57cHJvcHMuaW1hZ2VyeUF0dHJpYnV0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTaWRlQmFyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIiBjbGFzc05hbWU9XCJjb2wteGwtM1wiPlxuICAgICAgICAgICAgPFByb2plY3ROYW1lIHByb2plY3ROYW1lPXtwcm9wcy5jdXJyZW50UHJvamVjdC5uYW1lfS8+XG4gICAgICAgICAgICA8UGxvdE5hdmlnYXRpb24gbmF2QnV0dG9uc1Nob3duPXtwcm9wcy5uYXZCdXR0b25zU2hvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBsb3Q9e3Byb3BzLm5leHRQbG90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdQbG90PXtwcm9wcy5mbGFnUGxvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90QnV0dG9uRGlzYWJsZWQ9e3Byb3BzLm5ld1Bsb3RCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnUGxvdEJ1dHRvbkRpc2FibGVkPXtwcm9wcy5mbGFnUGxvdEJ1dHRvbkRpc2FibGVkfS8+XG4gICAgICAgICAgICA8SW1hZ2VyeU9wdGlvbnMgYmFzZU1hcFNvdXJjZT17cHJvcHMuY3VycmVudFByb2plY3QuYmFzZU1hcFNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCYXNlTWFwU291cmNlPXtwcm9wcy5zZXRCYXNlTWFwU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnlMaXN0PXtwcm9wcy5pbWFnZXJ5TGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXJ5WWVhckRHPXtwcm9wcy5pbWFnZXJ5WWVhckRHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNraW5nUHJvZmlsZURHPXtwcm9wcy5zdGFja2luZ1Byb2ZpbGVER31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXJ5WWVhckRHPXtwcm9wcy5zZXRJbWFnZXJ5WWVhckRHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YWNraW5nUHJvZmlsZURHPXtwcm9wcy5zZXRTdGFja2luZ1Byb2ZpbGVER31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXJ5WWVhclBsYW5ldD17cHJvcHMuaW1hZ2VyeVllYXJQbGFuZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeU1vbnRoUGxhbmV0PXtwcm9wcy5pbWFnZXJ5TW9udGhQbGFuZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VyeVllYXJQbGFuZXQ9e3Byb3BzLnNldEltYWdlcnlZZWFyUGxhbmV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlcnlNb250aFBsYW5ldD17cHJvcHMuc2V0SW1hZ2VyeU1vbnRoUGxhbmV0fS8+XG4gICAgICAgICAgICA8U3VydmV5UXVlc3Rpb25zIHN1cnZleVF1ZXN0aW9ucz17cHJvcHMuY3VycmVudFByb2plY3Quc2FtcGxlVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlBbnN3ZXJzVmlzaWJsZT17cHJvcHMuc3VydmV5QW5zd2Vyc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTaG93QW5zd2Vycz17cHJvcHMuaGlkZVNob3dBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VmFsdWU9e3Byb3BzLnNldEN1cnJlbnRWYWx1ZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNhdmVWYWx1ZXNCdXR0b24gc2F2ZVZhbHVlcz17cHJvcHMuc2F2ZVZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVZhbHVlc0J1dHRvbkRpc2FibGVkPXtwcm9wcy5zYXZlVmFsdWVzQnV0dG9uRGlzYWJsZWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RTdGF0cyBwcm9qZWN0TmFtZT17cHJvcHMuY3VycmVudFByb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1QbG90cz17cHJvcHMuY3VycmVudFByb2plY3QubnVtUGxvdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHM9e3Byb3BzLnN0YXRzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxRdWl0QnV0dG9uLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0TmFtZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj57cHJvcHMucHJvamVjdE5hbWUgfHwgXCJcIn08L2gyPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFBsb3ROYXZpZ2F0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cIm1iLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMz5QbG90IE5hdmlnYXRpb248L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLm5hdkJ1dHRvbnNTaG93biA9PSAxID8gXCJyb3dcIiA6IFwicm93IGQtbm9uZVwifSBpZD1cImdvLXRvLWZpcnN0LXBsb3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJnby10by1maXJzdC1wbG90LWJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1zbSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJuZXctcGxvdFwiIHZhbHVlPVwiR28gdG8gZmlyc3QgcGxvdFwiIG9uQ2xpY2s9e3Byb3BzLm5leHRQbG90fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5uYXZCdXR0b25zU2hvd24gPT0gMiA/IFwicm93XCIgOiBcInJvdyBkLW5vbmVcIn0gaWQ9XCJwbG90LW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgcHItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctcGxvdC1idXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tc20gYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBuYW1lPVwibmV3LXBsb3RcIiB2YWx1ZT1cIlNraXBcIiBvbkNsaWNrPXtwcm9wcy5uZXh0UGxvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogcHJvcHMubmV3UGxvdEJ1dHRvbkRpc2FibGVkID8gXCIwLjVcIiA6IFwiMS4wXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLm5ld1Bsb3RCdXR0b25EaXNhYmxlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgcGwtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmbGFnLXBsb3QtYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLXNtIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImZsYWctcGxvdFwiIHZhbHVlPVwiRmxhZyBQbG90IGFzIEJhZFwiIG9uQ2xpY2s9e3Byb3BzLmZsYWdQbG90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiBwcm9wcy5mbGFnUGxvdEJ1dHRvbkRpc2FibGVkID8gXCIwLjVcIiA6IFwiMS4wXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmZsYWdQbG90QnV0dG9uRGlzYWJsZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIEltYWdlcnlPcHRpb25zKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cIm1iLTMganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgzPkltYWdlcnkgT3B0aW9uczwvaDM+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBpZD1cImJhc2UtbWFwLXNvdXJjZVwiIG5hbWU9XCJiYXNlLW1hcC1zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMVwiIHZhbHVlPXtwcm9wcy5iYXNlTWFwU291cmNlIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zZXRCYXNlTWFwU291cmNlfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmltYWdlcnlMaXN0Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbWFnZXJ5LCB1aWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3VpZH0gdmFsdWU9e2ltYWdlcnkudGl0bGV9PntpbWFnZXJ5LnRpdGxlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8RGlnaXRhbEdsb2JlTWVudXMgYmFzZU1hcFNvdXJjZT17cHJvcHMuYmFzZU1hcFNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXJ5WWVhckRHPXtwcm9wcy5pbWFnZXJ5WWVhckRHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNraW5nUHJvZmlsZURHPXtwcm9wcy5zdGFja2luZ1Byb2ZpbGVER31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXJ5WWVhckRHPXtwcm9wcy5zZXRJbWFnZXJ5WWVhckRHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YWNraW5nUHJvZmlsZURHPXtwcm9wcy5zZXRTdGFja2luZ1Byb2ZpbGVER30vPlxuICAgICAgICAgICAgPFBsYW5ldE1lbnVzIGJhc2VNYXBTb3VyY2U9e3Byb3BzLmJhc2VNYXBTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeVllYXJQbGFuZXQ9e3Byb3BzLmltYWdlcnlZZWFyUGxhbmV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnlNb250aFBsYW5ldD17cHJvcHMuaW1hZ2VyeU1vbnRoUGxhbmV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlcnlZZWFyUGxhbmV0PXtwcm9wcy5zZXRJbWFnZXJ5WWVhclBsYW5ldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXJ5TW9udGhQbGFuZXQ9e3Byb3BzLnNldEltYWdlcnlNb250aFBsYW5ldH0vPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogKHN0b3AgLSBzdGFydCkgLyBzdGVwfSwgKF8sIGkpID0+IHN0YXJ0ICsgKGkgKiBzdGVwKSk7XG59XG5cbmZ1bmN0aW9uIERpZ2l0YWxHbG9iZU1lbnVzKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmJhc2VNYXBTb3VyY2UgPT0gXCJEaWdpdGFsR2xvYmVXTVNJbWFnZXJ5XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZy1pbWFnZXJ5LXllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRnLWltYWdlcnkteWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW1hZ2VyeVllYXJER31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zZXRJbWFnZXJ5WWVhckRHfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UoMjAxOCwxOTk5LC0xKS5tYXAoeWVhciA9PiA8b3B0aW9uIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9Pnt5ZWFyfTwvb3B0aW9uPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRnLXN0YWNraW5nLXByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRnLXN0YWNraW5nLXByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnN0YWNraW5nUHJvZmlsZURHfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNldFN0YWNraW5nUHJvZmlsZURHfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW1wiQWNjdXJhY3lfUHJvZmlsZVwiLFwiQ2xvdWRfQ292ZXJfUHJvZmlsZVwiLFwiR2xvYmFsX0N1cnJlbmN5X1Byb2ZpbGVcIixcIk15REdfQ29sb3JfQ29uc3VtZXJfUHJvZmlsZVwiLFwiTXlER19Db25zdW1lcl9Qcm9maWxlXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChwcm9maWxlID0+IDxvcHRpb24ga2V5PXtwcm9maWxlfSB2YWx1ZT17cHJvZmlsZX0+e3Byb2ZpbGV9PC9vcHRpb24+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUGxhbmV0TWVudXMocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuYmFzZU1hcFNvdXJjZSA9PSBcIlBsYW5ldEdsb2JhbE1vc2FpY1wiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxhbmV0LWltYWdlcnkteWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhbmV0LWltYWdlcnkteWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW1hZ2VyeVllYXJQbGFuZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuc2V0SW1hZ2VyeVllYXJQbGFuZXR9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZSgyMDE4LDIwMTUsLTEpLm1hcCh5ZWFyID0+IDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+e3llYXJ9PC9vcHRpb24+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxhbmV0LWltYWdlcnktbW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYW5ldC1pbWFnZXJ5LW1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbWFnZXJ5TW9udGhQbGFuZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuc2V0SW1hZ2VyeU1vbnRoUGxhbmV0fT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAxXCI+SmFudWFyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDJcIj5GZWJydWFyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDNcIj5NYXJjaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDRcIj5BcHJpbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDVcIj5NYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA2XCI+SnVuZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDdcIj5KdWx5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwOFwiPkF1Z3VzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDlcIj5TZXB0ZW1iZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+T2N0b2Jlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTFcIj5Ob3ZlbWJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj5EZWNlbWJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFN1cnZleVF1ZXN0aW9ucyhwcm9wcykge1xuICAgIGNvbnN0IHRvcExldmVsTm9kZXMgPSBwcm9wcy5zdXJ2ZXlRdWVzdGlvbnMuZmlsdGVyKHN1cnZleU5vZGUgPT4gc3VydmV5Tm9kZS5wYXJlbnRfcXVlc3Rpb24gPT0gLTEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJtYi0zIGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMz5TdXJ2ZXkgUXVlc3Rpb25zPC9oMz5cbiAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6IFwic21hbGxcIn19PihDbGljayBvbiBhIHF1ZXN0aW9uIHRvIGV4cGFuZCk8L2k+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9wTGV2ZWxOb2Rlcy5tYXAoKHN1cnZleU5vZGUsIHVpZCkgPT4gPFN1cnZleVF1ZXN0aW9uVHJlZSBrZXk9e3VpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZleU5vZGU9e3N1cnZleU5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlBbnN3ZXJzVmlzaWJsZT17cHJvcHMuc3VydmV5QW5zd2Vyc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlRdWVzdGlvbnM9e3Byb3BzLnN1cnZleVF1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTaG93QW5zd2Vycz17cHJvcHMuaGlkZVNob3dBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlPXtwcm9wcy5zZXRDdXJyZW50VmFsdWV9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gU3VydmV5UXVlc3Rpb25UcmVlKHByb3BzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHByb3BzLnN1cnZleVF1ZXN0aW9ucy5maWx0ZXIoc3VydmV5Tm9kZSA9PiBzdXJ2ZXlOb2RlLnBhcmVudF9xdWVzdGlvbiA9PSBwcm9wcy5zdXJ2ZXlOb2RlLmlkKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwibWItMSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtwcm9wcy5zdXJ2ZXlOb2RlLnF1ZXN0aW9uICsgXCJfXCIgKyBwcm9wcy5zdXJ2ZXlOb2RlLmlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBidG4gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tc20gYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGlkZVNob3dBbnN3ZXJzKHByb3BzLnN1cnZleU5vZGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICBTdXJ2ZXkgUXVlc3Rpb246IHtwcm9wcy5zdXJ2ZXlOb2RlLnF1ZXN0aW9ufVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInNhbXBsZXZhbHVlIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiArIChwcm9wcy5zdXJ2ZXlBbnN3ZXJzVmlzaWJsZVtwcm9wcy5zdXJ2ZXlOb2RlLmlkXSA/IFwiXCIgOiBcIiBkLW5vbmVcIil9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3VydmV5Tm9kZS5hbnN3ZXJzLm1hcCgoYW5zLCB1aWQpID0+IDxTdXJ2ZXlBbnN3ZXIga2V5PXt1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtwcm9wcy5zdXJ2ZXlOb2RlLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YW5zLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e2Fucy5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXthbnMuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZT17cHJvcHMuc2V0Q3VycmVudFZhbHVlfS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlcy5tYXAoKHN1cnZleU5vZGUsIHVpZCkgPT4gPFN1cnZleVF1ZXN0aW9uVHJlZSBrZXk9e3VpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZleU5vZGU9e3N1cnZleU5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlBbnN3ZXJzVmlzaWJsZT17cHJvcHMuc3VydmV5QW5zd2Vyc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlRdWVzdGlvbnM9e3Byb3BzLnN1cnZleVF1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTaG93QW5zd2Vycz17cHJvcHMuaGlkZVNob3dBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlPXtwcm9wcy5zZXRDdXJyZW50VmFsdWV9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gU3VydmV5QW5zd2VyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrZ3JheSBidG4tc20gYnRuLWJsb2NrIHBsLTFcIlxuICAgICAgICAgICAgICAgICAgICBpZD17cHJvcHMuYW5zd2VyICsgXCJfXCIgKyBwcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMuYW5zd2VyICsgXCJfXCIgKyBwcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0Q3VycmVudFZhbHVlKHByb3BzLnF1ZXN0aW9uLCBwcm9wcy5pZCwgcHJvcHMuYW5zd2VyLCBwcm9wcy5jb2xvcil9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0cHhcIn19PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+e3Byb3BzLmFuc3dlcn08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTYXZlVmFsdWVzQnV0dG9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IGlkPVwic2F2ZS12YWx1ZXMtYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLXNtIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInNhdmUtdmFsdWVzXCIgdmFsdWU9XCJTYXZlXCIgb25DbGljaz17cHJvcHMuc2F2ZVZhbHVlc31cbiAgICAgICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogcHJvcHMuc2F2ZVZhbHVlc0J1dHRvbkRpc2FibGVkID8gXCIwLjVcIiA6IFwiMS4wXCJ9fVxuICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLnNhdmVWYWx1ZXNCdXR0b25EaXNhYmxlZH0vPlxuICAgICk7XG59XG5cbmNsYXNzIFByb2plY3RTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgYXNQZXJjZW50YWdlKHBhcnQsIHRvdGFsKSB7XG4gICAgICAgIHJldHVybiAocGFydCAmJiB0b3RhbClcbiAgICAgICAgICAgID8gKDEwMC4wICogcGFydCAvIHRvdGFsKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICA6IFwiMC4wMFwiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1zbSBidG4tYmxvY2sgbWItMVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwcm9qZWN0LXN0YXRzLWNvbGxhcHNlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicHJvamVjdC1zdGF0cy1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IFN0YXRzXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgaWQ9XCJwcm9qU3RhdHNcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwcm9qTm9TdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cInByb2plY3Qtc3RhdHMtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic21hbGxcIj5Qcm9qZWN0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9qZWN0TmFtZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic21hbGxcIj5QbG90cyBBbmFseXplZDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHMuYW5hbHl6ZWRQbG90cyB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHt0aGlzLmFzUGVyY2VudGFnZSh0aGlzLnByb3BzLnN0YXRzLmFuYWx5emVkUGxvdHMsIHRoaXMucHJvcHMubnVtUGxvdHMpfSUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzbWFsbFwiPlBsb3RzIEZsYWdnZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0YXRzLmZsYWdnZWRQbG90cyB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHt0aGlzLmFzUGVyY2VudGFnZSh0aGlzLnByb3BzLnN0YXRzLmZsYWdnZWRQbG90cywgdGhpcy5wcm9wcy5udW1QbG90cyl9JSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNtYWxsXCI+UGxvdHMgQ29tcGxldGVkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0cy5hbmFseXplZFBsb3RzICsgdGhpcy5wcm9wcy5zdGF0cy5mbGFnZ2VkUGxvdHMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7dGhpcy5hc1BlcmNlbnRhZ2UodGhpcy5wcm9wcy5zdGF0cy5hbmFseXplZFBsb3RzICsgdGhpcy5wcm9wcy5zdGF0cy5mbGFnZ2VkUGxvdHMsIHRoaXMucHJvcHMubnVtUGxvdHMpfSUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzbWFsbFwiPlBsb3RzIFRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5udW1QbG90cyB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUXVpdEJ1dHRvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGlkPVwiY29sbGVjdGlvbi1xdWl0LWJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLWJsb2NrIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJjb2xsZWN0aW9uLXF1aXRcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY29uZmlybWF0aW9uLXF1aXRcIj5cbiAgICAgICAgICAgIFF1aXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gUXVpdE1lbnUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImNvbmZpcm1hdGlvbi1xdWl0XCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbENlbnRlclRpdGxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTG9uZ1RpdGxlXCI+Q29uZmlybWF0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzdG9wIGNvbGxlY3RpbmcgZGF0YT9cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYmctbGlnaHRncmVlbiBidG4tc21cIiBpZD1cInF1aXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMucmVkaXJlY3RUb0hvbWVQYWdlfT5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sbGVjdGlvblBhZ2UoYXJncykge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPENvbGxlY3Rpb24gZG9jdW1lbnRSb290PXthcmdzLmRvY3VtZW50Um9vdH0gdXNlcklkPXthcmdzLnVzZXJJZH0gdXNlck5hbWU9e2FyZ3MudXNlck5hbWV9IHByb2plY3RJZD17YXJncy5wcm9qZWN0SWR9Lz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sbGVjdGlvblwiKVxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9