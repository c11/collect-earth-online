var project =
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
/******/ 		"project": 0
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
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/project.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor","collection~geodashreact~home~project"]);
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

/***/ "./src/main/resources/public/jsx/project.js":
/*!**************************************************!*\
  !*** ./src/main/resources/public/jsx/project.js ***!
  \**************************************************/
/*! exports provided: renderProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProjectPage", function() { return renderProjectPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/mercator-openlayers.js */ "./src/main/resources/public/js/mercator-openlayers.js");
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/utils.js */ "./src/main/resources/public/js/utils.js");
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_utils_js__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Project =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    var _this;

    _classCallCheck(this, Project);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Project).call(this, props));
    _this.state = {
      userId: _this.props.userId,
      projectId: _this.props.projectId,
      institutionId: _this.props.institutionId,
      details: null,
      stats: null,
      imageryList: null,
      mapConfig: null,
      plotList: null,
      lonMin: "",
      latMin: "",
      lonMax: "",
      latMax: "",
      newSurveyQuestionName: "",
      newValueEntry: {},
      projectList: null,
      templateId: "0",
      // FIXME: Add these attributes to the JSON database
      dateCreated: null,
      datePublished: null,
      dateClosed: null,
      dateArchived: null,
      stateTransitions: {
        nonexistent: "Create",
        unpublished: "Publish",
        published: "Close",
        closed: "Archive",
        archived: "Archive"
      }
    };
    _this.setPrivacyLevel = _this.setPrivacyLevel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setPlotDistribution = _this.setPlotDistribution.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setPlotShape = _this.setPlotShape.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSampleDistribution = _this.setSampleDistribution.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.configureGeoDash = _this.configureGeoDash.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.downloadPlotData = _this.downloadPlotData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.downloadSampleData = _this.downloadSampleData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeProject = _this.closeProject.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeAvailability = _this.changeAvailability.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setBaseMapSource = _this.setBaseMapSource.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addSurveyQuestion = _this.addSurveyQuestion.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeSurveyQuestion = _this.removeSurveyQuestion.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addSurveyQuestionRow = _this.addSurveyQuestionRow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getParentSurveyQuestions = _this.getParentSurveyQuestions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setProjectTemplate = _this.setProjectTemplate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getSurveyQuestionByName = _this.getSurveyQuestionByName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getParentSurveyQuestionAnswers = _this.getParentSurveyQuestionAnswers.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeSurveyQuestionRow = _this.removeSurveyQuestionRow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInputName = _this.handleInputName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInputColor = _this.handleInputColor.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInputParent = _this.handleInputParent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.topoSort = _this.topoSort.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createProject = _this.createProject.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getParentSurveyAnswers = _this.getParentSurveyAnswers.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Project, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialization(this.props.documentRoot, this.state.userId, this.state.projectId, this.state.institutionId);
    }
  }, {
    key: "initialization",
    value: function initialization(documentRoot, userId, projectId, institutionId) {
      if (this.state.details == null) {
        this.getProjectById(projectId);
      } else {
        if (this.state.details.id == 0) {
          this.state.details.privacyLevel = "private";
          this.state.details.projectDistribution = "random";
          this.state.details.plotShape = "circle";
          this.state.details.sampleDistribution = "random";
          this.getProjectList(userId, projectId);
        } else if (this.state.details.id != 0) {
          if (document.getElementById("num-plots") != null) {
            if (document.getElementById("plot-distribution-gridded").checked) document.getElementById("plot-design-text").innerHTML = "Description about gridded";
            if (document.getElementById("plot-distribution-random").checked) document.getElementById("plot-design-text").innerHTML = "Description about random";
            if (document.getElementById("plot-distribution-csv").checked) document.getElementById("plot-design-text").innerHTML = "Description about csv upload";
            if (document.getElementById("plot-distribution-shp").checked) document.getElementById("plot-design-text").innerHTML = "Description about shp upload";
            if (document.getElementById("sample-distribution-gridded").checked) document.getElementById("sample-design-text").innerHTML = "Description about gridded";
            if (document.getElementById("sample-distribution-random").checked) document.getElementById("sample-design-text").innerHTML = "Description about random";
            if (document.getElementById("sample-distribution-csv").checked) document.getElementById("sample-design-text").innerHTML = "Description about csv upload";
            if (document.getElementById("sample-distribution-shp").checked) document.getElementById("sample-design-text").innerHTML = "Description about shp upload";
          }

          this.getProjectStats(projectId);
        }

        if (this.state.imageryList == null) {
          this.getImageryList(institutionId);
        } else this.updateUnmanagedComponents(projectId);
      }
    } // var logFormData=function(formData)
    // {
    //     console.log(new Map(formData.entries()));
    // };

  }, {
    key: "createProject",
    value: function createProject() {
      if (confirm("Do you REALLY want to create this project?")) {
        _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].show_element("spinner");
        var formData = new FormData(document.getElementById("project-design-form"));
        formData.append("institution", this.props.institutionId);
        formData.append("plot-distribution-csv-file", document.getElementById("plot-distribution-csv-file").files[0]);
        formData.append("plot-distribution-shp-file", document.getElementById("plot-distribution-shp-file").files[0]);
        formData.append("sample-distribution-csv-file", document.getElementById("sample-distribution-csv-file").files[0]);
        formData.append("sample-distribution-shp-file", document.getElementById("sample-distribution-shp-file").files[0]);
        formData.append("sample-values", JSON.stringify(this.state.details.sampleValues));
        var ref = this;
        $.ajax({
          url: this.props.documentRoot + "/create-project",
          type: "POST",
          async: true,
          crossDomain: true,
          contentType: false,
          processData: false,
          data: formData
        }).fail(function () {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
          alert("Error creating project. See console for details.");
        }).done(function (data) {
          var detailsNew = ref.state.details;
          detailsNew.availability = "unpublished";
          ref.setState({
            details: detailsNew
          });
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
          var newProjectId = data;
          window.location = ref.props.documentRoot + "/project/" + newProjectId;
        });
      }
    }
  }, {
    key: "publishProject",
    value: function publishProject() {
      if (confirm("Do you REALLY want to publish this project?")) {
        _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].show_element("spinner");
        var ref = this;
        $.ajax({
          url: this.props.documentRoot + "/publish-project/" + this.state.details.id,
          type: "POST",
          async: true,
          crossDomain: true,
          contentType: "application/json"
        }).fail(function (response) {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
          console.log(response);
          alert("Error publishing project. See console for details.");
        }).done(function (data) {
          var detailsNew = ref.state.details;
          detailsNew.availability = "published";
          ref.setState({
            details: detailsNew
          });
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
        });
      }
    }
  }, {
    key: "closeProject",
    value: function closeProject() {
      if (confirm("Do you REALLY want to close this project?")) {
        _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].show_element("spinner");
        var ref = this;
        $.ajax({
          url: this.props.documentRoot + "/close-project/" + this.state.details.id,
          type: "POST",
          async: true,
          crossDomain: true,
          contentType: "application/json"
        }).fail(function (response) {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
          console.log(response);
          alert("Error closing project. See console for details.");
        }).done(function (data) {
          var detailsNew = ref.state.details;
          detailsNew.availability = "closed";
          ref.setState({
            details: detailsNew
          });
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
        });
      }
    }
  }, {
    key: "archiveProject",
    value: function archiveProject() {
      if (confirm("Do you REALLY want to archive this project?!")) {
        _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].show_element("spinner");
        var ref = this;
        $.ajax({
          url: this.props.documentRoot + "/archive-project/" + this.state.details.id,
          type: "POST",
          async: true,
          crossDomain: true,
          contentType: "application/json"
        }).fail(function (response) {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
          console.log(response);
          alert("Error archiving project. See console for details.");
        }).done(function (data) {
          var detailsNew = ref.state.details;
          detailsNew.availability = "archived";
          ref.setState({
            details: detailsNew
          });
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].hide_element("spinner");
          alert("Project " + ref.state.details.id + " has been archived.");
          window.location = ref.props.documentRoot + "/home";
        });
      }
    }
  }, {
    key: "changeAvailability",
    value: function changeAvailability() {
      if (this.state.details.availability == "nonexistent") {
        this.createProject();
      } else if (this.state.details.availability == "unpublished") {
        this.publishProject();
      } else if (this.state.details.availability == "published") {
        this.closeProject();
      } else if (this.state.details.availability == "closed") {
        this.archiveProject();
      }
    }
  }, {
    key: "configureGeoDash",
    value: function configureGeoDash() {
      if (this.state.plotList != null && this.state.details != null) {
        window.open(this.props.documentRoot + "/widget-layout-editor?editable=true&" + encodeURIComponent("institutionId=" + this.state.details.institution + "&pid=" + this.state.details.id), "_geo-dash");
      }
    }
  }, {
    key: "downloadPlotData",
    value: function downloadPlotData() {
      window.open(this.props.documentRoot + "/dump-project-aggregate-data/" + this.state.details.id, "_blank");
    }
  }, {
    key: "downloadSampleData",
    value: function downloadSampleData() {
      window.open(this.props.documentRoot + "/dump-project-raw-data/" + this.state.details.id, "_blank");
    }
  }, {
    key: "setProjectTemplate",
    value: function setProjectTemplate(event) {
      var _this2 = this;

      this.setState({
        templateId: event.target.value
      });
      var templateProject = this.state.projectList.find(function (project) {
        return project.id == event.target.value;
      }, this);
      var sv = JSON.parse(JSON.stringify(templateProject)).sampleValues;
      var newSV = [];
      var tempSQ = {
        id: -1,
        question: "",
        answers: [],
        parent_question: -1,
        parent_answer: -1
      };
      var dNew = this.state.newValueEntry;

      if (sv.length > 0) {
        sv.map(function (sq) {
          if (sq.name) {
            tempSQ.id = sq.id;
            tempSQ.question = sq.name;
            sq.values.map(function (sa) {
              if (sa.name) {
                if (sa.id > 0) {
                  tempSQ.answers.push({
                    id: sa.id,
                    answer: sa.name,
                    color: sa.color
                  });
                }
              } else {
                tempSQ.answers.push(sa);
              }
            });

            if (tempSQ.id > 0) {
              newSV.push(tempSQ);
              dNew[tempSQ.question] = {
                id: -1,
                answer: "",
                color: "#000000"
              };

              _this2.setState({
                newValueEntry: dNew
              });
            }
          } else {
            newSV.push(sq);
            dNew[sq.question] = {
              id: -1,
              answer: "",
              color: "#000000"
            };

            _this2.setState({
              newValueEntry: dNew
            });
          }
        });
      }

      templateProject.sampleValues = newSV;
      this.setState({
        details: JSON.parse(JSON.stringify(templateProject))
      }, function () {
        this.updateUnmanagedComponents(this.state.templateId);
      }); // clone project
    }
  }, {
    key: "setPrivacyLevel",
    value: function setPrivacyLevel(privacyLevel) {
      if (this.state.details != null) {
        var detailsNew = this.state.details;
        detailsNew.privacyLevel = privacyLevel;
        this.setState({
          details: detailsNew
        });
      }
    }
  }, {
    key: "setBaseMapSource",
    value: function setBaseMapSource() {
      var e = document.getElementById("base-map-source");
      var bms = e.options[e.selectedIndex].value;
      var detailsNew = this.state.details;
      detailsNew.baseMapSource = bms;
      this.setState({
        details: detailsNew
      });
      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].setVisibleLayer(this.state.mapConfig, this.state.details.baseMapSource);
    }
  }, {
    key: "setPlotDistribution",
    value: function setPlotDistribution(plotDistribution) {
      if (this.state.details != null) {
        var detailsNew = this.state.details;
        detailsNew.plotDistribution = plotDistribution;
        this.setState({
          details: detailsNew
        });

        if (document.getElementById("num-plots") != null) {
          if (plotDistribution == "random") {
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-size");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("num-plots");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-spacing");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-distribution-csv-file");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-distribution-shp-file");
            document.getElementById("plot-design-text").innerHTML = "Description about random";
          } else if (plotDistribution == "gridded") {
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-size");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("num-plots");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-spacing");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-distribution-csv-file");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-distribution-shp-file");
            document.getElementById("plot-design-text").innerHTML = "Description about gridded";
          } else if (plotDistribution == "csv") {
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-size");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("num-plots");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-spacing");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-distribution-shp-file");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-distribution-csv-file");
            document.getElementById("plot-design-text").innerHTML = "Description about csv upload";
          } else {
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-size");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("num-plots");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-spacing");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("plot-distribution-csv-file");
            _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-distribution-shp-file");
            document.getElementById("plot-design-text").innerHTML = "Description about shp upload";
          }
        }
      }
    }
  }, {
    key: "setPlotShape",
    value: function setPlotShape(plotShape) {
      if (this.state.details != null) {
        var detailsNew = this.state.details;
        detailsNew.plotShape = plotShape;
        this.setState({
          details: detailsNew
        });
      }
    }
  }, {
    key: "setSampleDistribution",
    value: function setSampleDistribution(sampleDistribution) {
      if (this.state.details != null) {
        var detailsNew = this.state.details;
        detailsNew.sampleDistribution = sampleDistribution;
        this.setState({
          details: detailsNew
        });
        if (document.getElementById("samples-per-plot") != null && document.getElementById("sample-resolution") != null) if (sampleDistribution == "random") {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("samples-per-plot");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-resolution");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-distribution-csv-file");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-distribution-shp-file");
          document.getElementById("sample-design-text").innerHTML = "Description about random";
        } else if (sampleDistribution == "gridded") {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("samples-per-plot");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("sample-resolution");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-distribution-csv-file");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-distribution-shp-file");
          document.getElementById("sample-design-text").innerHTML = "Description about gridded";
        } else if (sampleDistribution == "csv") {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("samples-per-plot");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-resolution");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-distribution-shp-file");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("sample-distribution-csv-file");
          document.getElementById("sample-design-text").innerHTML = "Description about csv upload";
        } else {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("samples-per-plot");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-resolution");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].disable_element("sample-distribution-csv-file");
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("sample-distribution-shp-file");
          document.getElementById("sample-design-text").innerHTML = "Description about shp upload";
        }
      }
    }
  }, {
    key: "getParentSurveyQuestions",
    value: function getParentSurveyQuestions(sampleSurvey) {
      return sampleSurvey.filter(function (surveyQuestion) {
        return surveyQuestion.parent_question == -1;
      });
    }
  }, {
    key: "getParentSurveyQuestionAnswers",
    value: function getParentSurveyQuestionAnswers(sampleSurvey) {
      var ans = [];
      sampleSurvey.map(function (sq) {
        var parent_value = document.getElementById("value-parent");

        if (parent_value != null) {
          var parent = parent_value.options[parent_value.selectedIndex].value;

          if (sq.id == parent) {
            ans = sq.answers;
          }
        }
      });
      return ans;
    }
  }, {
    key: "getParentSurveyAnswers",
    value: function getParentSurveyAnswers(sampleSurvey, question_id) {
      var ans = [];
      sampleSurvey.map(function (sq) {
        if (sq.id == question_id) {
          ans = sq.answers;
        }
      });
      return ans;
    }
  }, {
    key: "getChildSurveyQuestions",
    value: function getChildSurveyQuestions(sampleSurvey, parentSurveyQuestion) {
      return sampleSurvey.filter(function (surveyQuestion) {
        return surveyQuestion.parent_question == parentSurveyQuestion.id;
      });
    } // topoSort(sampleSurvey) {
    //     var parentSurveyQuestions = this.getParentSurveyQuestions(sampleSurvey);
    //     console.log(parentSurveyQuestions);
    //     var parentChildGroups = this.getParentChildGroups(parentSurveyQuestions,sampleSurvey);
    //     return parentChildGroups;
    // }
    // getParentChildGroups(parentSurveyQuestions,sampleSurvey){
    //     var parentChildGroups = parentSurveyQuestions.map(
    //         function (parentSurveyQuestion) {
    //             var childSurveyQuestions = sampleSurvey.filter(
    //                 function (sampleValue) {
    //                     return sampleValue.parent_question == parentSurveyQuestion.id && sampleValue.parent_question!=-1;
    //                 }
    //             );
    //             console.log("from topo");
    //             console.log((parentSurveyQuestions).concat(childSurveyQuestions));
    //             return (parentSurveyQuestions).concat(childSurveyQuestions);
    //         },
    //         this
    //     );
    //     return [].concat.apply([], parentChildGroups);
    //
    // }

  }, {
    key: "topoSort",
    value: function topoSort(sampleSurvey) {
      var parentSurveyQuestions = this.getParentSurveyQuestions(sampleSurvey);
      var parentChildGroups = parentSurveyQuestions.map(function (parentSurveyQuestion) {
        var childSurveyQuestions = sampleSurvey.filter(function (sampleValue) {
          return sampleValue.parent_question == parentSurveyQuestion.id;
        });
        return [parentSurveyQuestion].concat(childSurveyQuestions);
      }, this);
      return [].concat.apply([], parentChildGroups);
    }
  }, {
    key: "addSurveyQuestion",
    value: function addSurveyQuestion() {
      var _this3 = this;

      if (this.state.details != null) {
        var questionText = document.getElementById("surveyQuestionText").value;
        var parent_value = document.getElementById("value-parent");
        var parent = parent_value.options[parent_value.selectedIndex].value;
        var answer_value = document.getElementById("value-answer");
        var answer = answer_value.options[answer_value.selectedIndex].value;

        if (questionText != "") {
          var newValueEntryNew = this.state.newValueEntry;
          newValueEntryNew[questionText] = {
            id: -1,
            answer: "",
            color: "#000000"
          };
          var detailsNew = this.state.details;

          var _id = detailsNew.sampleValues.length + 1;

          var question_id = -1,
              answer_id = -1;
          detailsNew.sampleValues.map(function (sq) {
            if (sq.id == parent) {
              question_id = sq.id;

              _this3.getParentSurveyAnswers(detailsNew.sampleValues, question_id).map(function (ans) {
                if (ans.id == answer) {
                  answer_id = ans.id;
                }
              });
            }
          });
          detailsNew.sampleValues.push({
            id: _id,
            question: questionText,
            answers: [],
            parent_question: question_id,
            parent_answer: answer_id
          });
          this.setState({
            newValueEntry: newValueEntryNew,
            details: detailsNew,
            newSurveyQuestionName: ""
          });
          console.log("JSON object");
          console.log(this.state.details.sampleValues);
          document.getElementById("surveyQuestionText").value = "";
          parent_value.options[0].selected = true;
        } else {
          alert("Please enter a survey question first.");
        }
      }
    }
  }, {
    key: "removeSurveyQuestion",
    value: function removeSurveyQuestion(surveyQuestionName) {
      if (this.state.details != null) {
        var detailsNew = this.state.details;
        detailsNew.sampleValues = detailsNew.sampleValues.filter(function (surveyQuestion) {
          return surveyQuestion.question != surveyQuestionName;
        });
        this.setState({
          details: detailsNew
        });
      }
    }
  }, {
    key: "getSurveyQuestionByName",
    value: function getSurveyQuestionByName(surveyQuestionName) {
      return this.state.details.sampleValues.find(function (surveyQuestion) {
        return surveyQuestion.question == surveyQuestionName;
      });
    }
  }, {
    key: "removeSurveyQuestionRow",
    value: function removeSurveyQuestionRow(surveyQuestionText, _surveyAnswer) {
      var surveyQuestion = this.getSurveyQuestionByName(surveyQuestionText);
      surveyQuestion.answers = surveyQuestion.answers.filter(function (surveyAnswer) {
        return surveyAnswer.answer != _surveyAnswer;
      });
      this.setState({});
    }
  }, {
    key: "addSurveyQuestionRow",
    value: function addSurveyQuestionRow(surveyQuestionName) {
      var entry = this.state.newValueEntry[surveyQuestionName];

      if (entry.answer != "") {
        var surveyQuestion = this.getSurveyQuestionByName(surveyQuestionName);
        surveyQuestion.answers.push({
          id: surveyQuestion.answers.length + 1,
          answer: entry.answer,
          color: entry.color
        });
        entry.id = -1;
        entry.answer = "";
        entry.color = "#000000";
      } else {
        alert("A survey answer must possess both an answer and a color.");
      }

      var dNew = this.state.newValueEntry;
      dNew[surveyQuestionName] = entry;
      this.setState({
        newValueEntry: dNew
      });
    }
  }, {
    key: "getProjectById",
    value: function getProjectById(projectId) {
      var _this4 = this;

      fetch(this.props.documentRoot + "/get-project-by-id/" + projectId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the project info. See console for details.");
        }
      }).then(function (data) {
        if (data == "") {
          alert("No project found with ID " + projectId + ".");
          window.location = _this4.state.documentRoot + "/home";
        } else {
          var detailsNew = data;
          var sv = detailsNew.sampleValues;
          var newSV = [];
          var tempSQ = {
            id: -1,
            question: "",
            answers: [],
            parent_question: -1,
            parent_answer: -1
          };

          if (sv.length > 0) {
            sv.map(function (sq) {
              if (sq.name) {
                tempSQ.id = sq.id;
                tempSQ.question = sq.name;
                sq.values.map(function (sa) {
                  if (sa.name) {
                    if (sa.id > 0) {
                      tempSQ.answers.push({
                        id: sa.id,
                        answer: sa.name,
                        color: sa.color
                      });
                    }
                  } else {
                    tempSQ.answers.push(sa);
                  }
                });

                if (tempSQ.id > 0) {
                  newSV.push(tempSQ);
                }
              } else {
                newSV.push(sq);
              }
            });
          }

          detailsNew.sampleValues = newSV;

          _this4.setState({
            details: detailsNew
          });

          if (_this4.state.details.id == 0) {
            _this4.initialization(_this4.props.documentRoot, _this4.state.userId, projectId, _this4.state.institutionId);
          } else {
            _this4.initialization(_this4.props.documentRoot, _this4.state.userId, projectId, _this4.state.details.institution);
          }
        }
      });
    }
  }, {
    key: "getProjectList",
    value: function getProjectList(userId, projectId) {
      var _this5 = this;

      fetch(this.props.documentRoot + "/get-all-projects?userId=" + userId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the project list. See console for details.");
        }
      }).then(function (data) {
        _this5.setState({
          projectList: data
        });

        var projList = _this5.state.projectList;
        projList.unshift(JSON.parse(JSON.stringify(_this5.state.details)));

        _this5.setState({
          projectList: projList
        });

        _this5.setState({
          userId: userId
        });

        _this5.setState({
          projectId: "" + projectId
        });
      });
    }
  }, {
    key: "getProjectStats",
    value: function getProjectStats(projectId) {
      var _this6 = this;

      fetch(this.props.documentRoot + "/get-project-stats/" + projectId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving project stats. See console for details.");
        }
      }).then(function (data) {
        _this6.setState({
          stats: data
        });
      });
    }
  }, {
    key: "getImageryList",
    value: function getImageryList(institutionId) {
      var _this7 = this;

      fetch(this.props.documentRoot + "/get-all-imagery?institutionId=" + institutionId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the imagery list. See console for details.");
        }
      }).then(function (data) {
        _this7.setState({
          imageryList: data
        });

        _this7.initialization(_this7.props.documentRoot, _this7.props.userId, _this7.state.details.id, _this7.props.institutionId);
      });
    }
  }, {
    key: "getPlotList",
    value: function getPlotList(projectId, maxPlots) {
      var _this8 = this;

      fetch(this.props.documentRoot + "/get-project-plots/" + projectId + "/" + maxPlots).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving plot list. See console for details.");
        }
      }).then(function (data) {
        _this8.setState({
          plotList: data
        });

        _this8.showPlotCenters(projectId, maxPlots);
      });
    }
  }, {
    key: "showPlotCenters",
    value: function showPlotCenters(projectId, maxPlots) {
      if (this.state.plotList == null) {
        // Load the current project plots
        this.getPlotList(projectId, maxPlots);
      } else {
        // Draw the plot shapes on the map
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "flaggedPlots");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "analyzedPlots");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "unanalyzedPlots");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addPlotOverviewLayers(this.state.mapConfig, this.state.plotList, this.state.details.plotShape);
      }
    }
  }, {
    key: "showProjectMap",
    value: function showProjectMap(projectId) {
      // Initialize the basemap
      if (this.state.mapConfig == null) {
        this.setState({
          mapConfig: _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].createMap("project-map", [0.0, 0.0], 1, this.state.imageryList)
        });
      }

      _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].setVisibleLayer(this.state.mapConfig, this.state.details.baseMapSource);

      if (this.state.details.id == 0) {
        // Enable dragbox interaction if we are creating a new project
        var displayDragBoxBounds = function displayDragBoxBounds(dragBox) {
          var extent = dragBox.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getExtent(); // FIXME: Can we just set this.lonMin/lonMax/latMin/latMax instead?

          document.getElementById("lon-min").value = extent[0];
          document.getElementById("lat-min").value = extent[1];
          document.getElementById("lon-max").value = extent[2];
          document.getElementById("lat-max").value = extent[3];
        };

        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "currentAOI");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "flaggedPlots");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "analyzedPlots");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "unanalyzedPlots");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].disableDragBoxDraw(this.state.mapConfig);
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].enableDragBoxDraw(this.state.mapConfig, displayDragBoxBounds);
      } else {
        // Extract bounding box coordinates from the project boundary and show on the map
        var boundaryExtent = _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].parseGeoJson(this.state.details.boundary, false).getExtent();
        this.setState({
          lonMin: boundaryExtent[0]
        });
        this.setState({
          latMin: boundaryExtent[1]
        });
        this.setState({
          lonMax: boundaryExtent[2]
        });
        this.setState({
          latMax: boundaryExtent[3]
        }); // Display a bounding box with the project's AOI on the map and zoom to it

        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].removeLayerByTitle(this.state.mapConfig, "currentAOI");
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addVectorLayer(this.state.mapConfig, "currentAOI", _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].geometryToVectorSource(_js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].parseGeoJson(this.state.details.boundary, true)), _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["ceoMapStyles"].polygon);
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].zoomMapToLayer(this.state.mapConfig, "currentAOI"); // Force reloading of the plotList

        this.setState({
          plotList: null
        }); // Show the plot centers on the map (but constrain to <= 100 points)

        this.showPlotCenters(projectId, 100);
      }
    }
  }, {
    key: "updateUnmanagedComponents",
    value: function updateUnmanagedComponents(projectId) {
      if (this.state.details != null) {
        // Enable the input fields that are connected to the radio buttons if their values are not null
        if (this.state.details.plotDistribution == "gridded") {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("plot-spacing");
        }

        if (this.state.details.sampleDistribution == "gridded") {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_3__["utils"].enable_element("sample-resolution");
        }

        if (this.state.imageryList.length > 0) {
          var detailsNew = this.state.details;
          detailsNew.baseMapSource = this.state.details.baseMapSource || this.state.imageryList[0].title; // If baseMapSource isn't provided by the project, just use the first entry in the imageryList

          this.setState({
            details: detailsNew
          }, this.showProjectMap(projectId)); // Draw a map with the project AOI and a sampling of its plots
        }
      }
    }
  }, {
    key: "handleInputName",
    value: function handleInputName(surveyQuestion, event) {
      var newValueEntryNew = this.state.newValueEntry;

      if (newValueEntryNew[surveyQuestion]) {
        newValueEntryNew[surveyQuestion].answer = event.target.value;
        this.setState({
          newValueEntry: newValueEntryNew
        });
      } else this.setState({
        newValueEntry: {
          id: -1,
          answer: "",
          color: "#000000"
        }
      });
    }
  }, {
    key: "handleInputColor",
    value: function handleInputColor(surveyQuestion, event) {
      var newValueEntryNew = this.state.newValueEntry;
      newValueEntryNew[surveyQuestion].color = event.target.value;
      this.setState({
        newValueEntry: newValueEntryNew
      });
    }
  }, {
    key: "handleInputParent",
    value: function handleInputParent(event) {
      var detailsNew = this.state.details;
      this.setState({
        details: detailsNew
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var detailsNew = this.state.details;

      if (event.target.id == "project-name") {
        detailsNew.name = event.target.value;
      } else if (event.target.id = "project-description") {
        detailsNew.description = event.target.value;
      }

      this.setState({
        details: detailsNew
      });
    }
  }, {
    key: "render",
    value: function render() {
      var header;

      if (this.props.projectId == "0") {
        header = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Create Project");
      } else {
        header = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Review Project");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "project-design",
        className: "col-xl-6 col-lg-8 border bg-lightgray mb-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-darkgreen mb-3 no-container-margin"
      }, header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectStats, {
        project: this.state,
        project_stats_visibility: this.props.project_stats_visibility
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectDesignForm, {
        projectId: this.props.projectId,
        project: this.state,
        project_template_visibility: this.props.project_template_visibility,
        setProjectTemplate: this.setProjectTemplate,
        setPrivacyLevel: this.setPrivacyLevel,
        setSampleDistribution: this.setSampleDistribution,
        addSurveyQuestionRow: this.addSurveyQuestionRow,
        setBaseMapSource: this.setBaseMapSource,
        setPlotDistribution: this.setPlotDistribution,
        setPlotShape: this.setPlotShape,
        addSurveyQuestion: this.addSurveyQuestion,
        topoSort: this.topoSort,
        getParentSurveyQuestions: this.getParentSurveyQuestions,
        getParentSurveyQuestionAnswers: this.getParentSurveyQuestionAnswers,
        removeSurveyQuestion: this.removeSurveyQuestion,
        removeSurveyQuestionRow: this.removeSurveyQuestionRow,
        handleInputColor: this.handleInputColor,
        handleInputName: this.handleInputName,
        handleChange: this.handleChange,
        handleInputParent: this.handleInputParent
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectManagement, {
        project: this.state,
        projectId: this.props.projectId,
        configureGeoDash: this.configureGeoDash,
        downloadPlotData: this.downloadPlotData,
        downloadSampleData: this.downloadSampleData,
        changeAvailability: this.changeAvailability,
        createProject: this.createProject
      }));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function ProjectStats(props) {
  var project = props.project;

  if (project.stats != null) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "project-stats",
      className: "col " + props.project_stats_visibility
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-lightgreen btn-sm btn-block mb-1",
      "data-toggle": "collapse",
      href: "#project-stats-collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "project-stats-collapse"
    }, "Project Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collapse col-xl-12",
      id: "project-stats-collapse"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Members"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.stats.members), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Contributors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.stats.contributors)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Total Plots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.details.numPlots || 0), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.dateCreated)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Flagged Plots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.stats.flaggedPlots), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date Published"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.datePublished)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Analyzed Plots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.stats.analyzedPlots), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date Closed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.dateClosed)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Unanalyzed Plots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.stats.unanalyzedPlots), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date Archived"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, project.dateArchived)))))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

function ProjectDesignForm(props) {
  var addSurveyQuestionButton;

  if (props.projectId == "0") {
    addSurveyQuestionButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "value-SQ"
    }, "New Question:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "add-sample-value-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      id: "surveyQuestionText",
      autoComplete: "off",
      value: project.newSurveyQuestionName
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "button",
      className: "button",
      value: "Add Survey Question",
      onClick: props.addSurveyQuestion
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "project-design-form",
    className: "px-2 pb-2",
    method: "post",
    action: props.documentRoot + "/create-project",
    encType: "multipart/form-data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectTemplateVisibility, {
    project: props.project,
    setProjectTemplate: props.setProjectTemplate
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectInfo, {
    project: props.project,
    handleChange: props.handleChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectVisibility, {
    project: props.project,
    setPrivacyLevel: props.setPrivacyLevel
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectAOI, {
    projectId: props.projectId,
    project: props.project
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectImagery, {
    project: props.project,
    setBaseMapSource: props.setBaseMapSource
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlotDesign, {
    project: props.project,
    setPlotDistribution: props.setPlotDistribution,
    setPlotShape: props.setPlotShape
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SampleDesign, {
    project: props.project,
    setSampleDistribution: props.setSampleDistribution
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyDesign, {
    project: props.project,
    projectId: props.projectId,
    addSurveyQuestionRow: props.addSurveyQuestionRow,
    topoSort: props.topoSort,
    getParentSurveyQuestions: props.getParentSurveyQuestions,
    getParentSurveyQuestionAnswers: props.getParentSurveyQuestionAnswers,
    removeSurveyQuestion: props.removeSurveyQuestion,
    removeSurveyQuestionRow: props.removeSurveyQuestionRow,
    handleInputColor: props.handleInputColor,
    handleInputName: props.handleInputName,
    handleInputParent: props.handleInputParent,
    addSurveyQuestionButton: addSurveyQuestionButton
  }));
}

function ProjectTemplateVisibility(props) {
  var project = props.project;

  if (project.projectList != null) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row " + props.project_template_visibility
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Use Project Template (Optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "project-template-selector"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      htmlFor: "project-template"
    }, "Select Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control form-control-sm",
      id: "project-template",
      name: "project-template",
      size: "1",
      value: project.templateId,
      onChange: props.setProjectTemplate
    }, project.projectList.map(function (proj, uid) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: uid,
        value: proj.id
      }, proj.name);
    }))))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

function ProjectInfo(props) {
  var project = props.project;

  if (project.details != null) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Project Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "project-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      htmlFor: "project-name"
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-control form-control-sm",
      type: "text",
      id: "project-name",
      name: "name",
      autoComplete: "off",
      defaultValue: project.details.name,
      onChange: props.handleChange
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      htmlFor: "project-description"
    }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      className: "form-control form-control-sm",
      id: "project-description",
      name: "description",
      value: project.details.description,
      onChange: props.handleChange
    })))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

function ProjectVisibility(props) {
  if (props.project.details != null) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Project Visibility"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Privacy Level"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "project-visibility",
      className: "mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-check-input",
      type: "radio",
      id: "privacy-public",
      name: "privacy-level",
      value: "public",
      checked: props.project.details.privacyLevel === 'public',
      onChange: function onChange() {
        return props.setPrivacyLevel('public');
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label small",
      htmlFor: "privacy-public"
    }, "Public: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "All Users"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-check-input",
      type: "radio",
      id: "privacy-private",
      name: "privacy-level",
      value: "private",
      onChange: function onChange() {
        return props.setPrivacyLevel('private');
      },
      checked: props.project.details.privacyLevel === 'private'
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label small",
      htmlFor: "privacy-private"
    }, "Private: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Group Admins"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-check-input",
      type: "radio",
      id: "privacy-institution",
      name: "privacy-level",
      value: "institution",
      onChange: function onChange() {
        return props.setPrivacyLevel('institution');
      },
      checked: props.project.details.privacyLevel === 'institution'
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label small",
      htmlFor: "privacy-institution"
    }, "Institution: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Group Members"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-check form-check-inline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-check-input",
      type: "radio",
      id: "privacy-invitation",
      name: "privacy-level",
      value: "invitation",
      onChange: function onChange() {
        return props.setPrivacyLevel('invitation');
      },
      disabled: true,
      checked: props.project.details.privacyLevel === 'invitation'
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "form-check-label small",
      htmlFor: "privacy-invitation"
    }, "Invitation: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Coming Soon"))))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
}

function ProjectAOI(props) {
  var project = props.project;
  var msg = "";

  if (props.projectId == "0") {
    msg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col small text-center mb-2"
    }, "Hold CTRL and click-and-drag a bounding box on the map"));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header px-0"
  }, "Project AOI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "project-aoi"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "project-map"
  }), msg, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mx-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 offset-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control-sm",
    type: "number",
    id: "lat-max",
    name: "lat-max",
    defaultValue: project.latMax,
    placeholder: "North",
    autoComplete: "off",
    min: "-90.0",
    max: "90.0",
    step: "any"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control-sm",
    type: "number",
    id: "lon-min",
    name: "lon-min",
    defaultValue: project.lonMin,
    placeholder: "West",
    autoComplete: "off",
    min: "-180.0",
    max: "180.0",
    step: "any"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control-sm",
    type: "number",
    id: "lon-max",
    name: "lon-max",
    defaultValue: project.lonMax,
    placeholder: "East",
    autoComplete: "off",
    min: "-180.0",
    max: "180.0",
    step: "any"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 offset-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control-sm",
    type: "number",
    id: "lat-min",
    name: "lat-min",
    defaultValue: project.latMin,
    placeholder: "South",
    autoComplete: "off",
    min: "-90.0",
    max: "90.0",
    step: "any"
  })))))));
}

function ProjectImagery(props) {
  var project = props.project;

  if (project.imageryList != null) {
    if (project.details.baseMapSource == null) {
      project.details.baseMapSource = "";
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Project Imagery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "project-imagery"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      htmlFor: "base-map-source"
    }, "Basemap Source"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control form-control-sm",
      id: "base-map-source",
      name: "base-map-source",
      size: "1",
      value: project.details.baseMapSource,
      onChange: props.setBaseMapSource
    }, project.imageryList.map(function (imagery, uid) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: uid,
        value: imagery.title
      }, imagery.title);
    }))))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

var PlotDesign =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PlotDesign, _React$Component2);

  function PlotDesign(props) {
    _classCallCheck(this, PlotDesign);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlotDesign).call(this, props));
  }

  _createClass(PlotDesign, [{
    key: "encodeImageFileAsURL",
    value: function encodeImageFileAsURL(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        var base64Data = reader.result;
        console.log('RESULT', base64Data);
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var project = this.props.project;
      var plotshape = "";
      var txt = "";

      if (project.details != null) {
        if (project.details.plotShape == 'circle') {
          txt = 'Diameter (m)';
        } else txt = 'Width (m)';

        plotshape = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          htmlFor: "plot-size"
        }, txt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-control form-control-sm",
          type: "number",
          id: "plot-size",
          name: "plot-size",
          autoComplete: "off",
          min: "0.0",
          step: "any",
          defaultValue: project.details.plotSize
        }));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row mb-3"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "header px-0"
        }, "Plot Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "plot-design"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "plot-design-col1",
          className: "col"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Spatial Distribution"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "plot-distribution-random",
          name: "plot-distribution",
          value: "random",
          onChange: function onChange() {
            return _this9.props.setPlotDistribution('random');
          },
          checked: this.props.project.details.plotDistribution === 'random'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "form-check-label small",
          htmlFor: "plot-distribution-random"
        }, "Random")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "plot-distribution-gridded",
          name: "plot-distribution",
          defaultValue: "gridded",
          onChange: function onChange() {
            return _this9.props.setPlotDistribution('gridded');
          },
          checked: this.props.project.details.plotDistribution === 'gridded'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "form-check-label small",
          htmlFor: "plot-distribution-gridded"
        }, "Gridded")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "plot-distribution-csv",
          name: "plot-distribution",
          defaultValue: "csv",
          onChange: function onChange() {
            return _this9.props.setPlotDistribution('csv');
          },
          checked: this.props.project.details.plotDistribution === 'csv'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "btn btn-sm btn-block btn-outline-lightgreen btn-file py-0 my-0",
          id: "custom-csv-upload"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Upload CSV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "file",
          accept: "text/csv",
          id: "plot-distribution-csv-file",
          onChange: this.encodeImageFileAsURL,
          style: {
            display: "none"
          },
          disabled: true
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "plot-distribution-shp",
          name: "plot-distribution",
          defaultValue: "shp",
          onChange: function onChange() {
            return _this9.props.setPlotDistribution('shp');
          },
          checked: this.props.project.details.plotDistribution === 'shp'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "btn btn-sm btn-block btn-outline-lightgreen btn-file py-0 my-0",
          id: "custom-shp-upload"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Upload SHP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "file",
          accept: "application/zip",
          id: "plot-distribution-shp-file",
          onChange: this.encodeImageFileAsURL,
          style: {
            display: "none"
          },
          disabled: true
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          id: "plot-design-text"
        }, "Description about random"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group mb-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          htmlFor: "num-plots"
        }, "Number of plots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-control form-control-sm",
          type: "number",
          id: "num-plots",
          name: "num-plots",
          autoComplete: "off",
          min: "0",
          step: "1",
          defaultValue: project.details == null ? "" : project.details.numPlots
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group mb-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          htmlFor: "plot-spacing"
        }, "Plot spacing (m)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-control form-control-sm",
          type: "number",
          id: "plot-spacing",
          name: "plot-spacing",
          autoComplete: "off",
          min: "0.0",
          step: "any",
          defaultValue: project.details == null ? "" : project.details.plotSpacing,
          disabled: true
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "plot-design-col2",
          className: "col"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Plot Shape"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "plot-shape-circle",
          name: "plot-shape",
          defaultValue: "circle",
          onChange: function onChange() {
            return _this9.props.setPlotShape('circle');
          },
          checked: this.props.project.details.plotShape === 'circle'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "form-check-label small",
          htmlFor: "plot-shape-circle"
        }, "Circle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "plot-shape-square",
          name: "plot-shape",
          defaultValue: "square",
          onChange: function onChange() {
            return _this9.props.setPlotShape('square');
          },
          checked: this.props.project.details.plotShape === 'square'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "form-check-label small",
          htmlFor: "plot-shape-square"
        }, "Square")), plotshape)))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
      }
    }
  }]);

  return PlotDesign;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var SampleDesign =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SampleDesign, _React$Component3);

  function SampleDesign(props) {
    _classCallCheck(this, SampleDesign);

    return _possibleConstructorReturn(this, _getPrototypeOf(SampleDesign).call(this, props));
  }

  _createClass(SampleDesign, [{
    key: "encodeImageFileAsURL",
    value: function encodeImageFileAsURL(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        var base64Data = reader.result;
        console.log('RESULT', base64Data);
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var project = this.props.project;

      if (project.details != null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row mb-3"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "sample-design"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "header px-0"
        }, "Sample Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Spatial Distribution"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "sample-distribution-random",
          name: "sample-distribution",
          defaultValue: "random",
          onChange: function onChange() {
            return _this10.props.setSampleDistribution('random');
          },
          checked: this.props.project.details.sampleDistribution === 'random'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "form-check-label small",
          htmlFor: "sample-distribution-random"
        }, "Random")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "sample-distribution-gridded",
          name: "sample-distribution",
          defaultValue: "gridded",
          onChange: function onChange() {
            return _this10.props.setSampleDistribution('gridded');
          },
          checked: this.props.project.details.sampleDistribution === 'gridded'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "form-check-label small",
          htmlFor: "sample-distribution-gridded"
        }, "Gridded")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "sample-distribution-csv",
          name: "sample-distribution",
          defaultValue: "csv",
          onChange: function onChange() {
            return _this10.props.setSampleDistribution('csv');
          },
          checked: this.props.project.details.sampleDistribution === 'csv'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "btn btn-sm btn-block btn-outline-lightgreen btn-file py-0 my-0",
          id: "sample-custom-csv-upload"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Upload CSV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "file",
          accept: "text/csv",
          id: "sample-distribution-csv-file",
          onChange: this.encodeImageFileAsURL,
          style: {
            display: "none"
          },
          disabled: true
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-check form-check-inline"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          id: "sample-distribution-shp",
          name: "sample-distribution",
          defaultValue: "shp",
          onChange: function onChange() {
            return _this10.props.setSampleDistribution('shp');
          },
          checked: this.props.project.details.sampleDistribution === 'shp'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "btn btn-sm btn-block btn-outline-lightgreen btn-file py-0 my-0",
          id: "sample-custom-shp-upload"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Upload SHP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "file",
          accept: "application/zip",
          id: "sample-distribution-shp-file",
          onChange: this.encodeImageFileAsURL,
          style: {
            display: "none"
          },
          disabled: true
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          id: "sample-design-text"
        }, "Description about random"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group mb-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          htmlFor: "samples-per-plot"
        }, "Samples per plot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-control form-control-sm",
          type: "number",
          id: "samples-per-plot",
          name: "samples-per-plot",
          autoComplete: "off",
          min: "0",
          step: "1",
          defaultValue: project.details.samplesPerPlot
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group mb-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          htmlFor: "sample-resolution"
        }, "Sample resolution (m)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-control form-control-sm",
          type: "number",
          id: "sample-resolution",
          name: "sample-resolution",
          autoComplete: "off",
          min: "0.0",
          step: "any",
          defaultValue: project.details.sampleResolution,
          disabled: true
        })))));
      } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
    }
  }]);

  return SampleDesign;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function SurveyDesign(props) {
  if (props.project.details != null) {
    var answer_select = "";
    var dropdowns;
    var answers = props.getParentSurveyQuestionAnswers(props.project.details.sampleValues);

    if (answers.length > 0) {
      answer_select = props.getParentSurveyQuestionAnswers(props.project.details.sampleValues).map(function (parentSurveyQuestionAnswer, uid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: uid,
          value: parentSurveyQuestionAnswer.id
        }, parentSurveyQuestionAnswer.answer);
      });
    }

    if (props.projectId == "0") {
      dropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "value-parent"
      }, "Parent Question:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        id: "value-parent",
        className: "form-control form-control-sm",
        size: "1",
        onChange: function onChange(e) {
          return props.handleInputParent(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "None"), props.project.details.sampleValues.map(function (parentSurveyQuestion, uid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: uid,
          value: parentSurveyQuestion.id
        }, parentSurveyQuestion.question);
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "value-answer"
      }, "Parent Answer:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        id: "value-answer",
        className: "form-control form-control-sm",
        size: "1",
        onChange: function onChange(e) {
          return props.handleInputParent(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Any"), answer_select))));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "survey-design"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Survey Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyQuestionTree, {
      project: props.project,
      projectId: props.projectId,
      addSurveyQuestionRow: props.addSurveyQuestionRow,
      topoSort: props.topoSort,
      getParentSurveyQuestions: props.getParentSurveyQuestions,
      removeSurveyQuestion: props.removeSurveyQuestion,
      removeSurveyQuestionRow: props.removeSurveyQuestionRow,
      handleInputColor: props.handleInputColor,
      handleInputName: props.handleInputName,
      handleInputParent: props.handleInputParent
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, dropdowns, props.addSurveyQuestionButton)))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

var SurveyQuestionTree =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(SurveyQuestionTree, _React$Component4);

  function SurveyQuestionTree(props) {
    var _this11;

    _classCallCheck(this, SurveyQuestionTree);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(SurveyQuestionTree).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this11)), "getCurrent", function (node) {
      return _this11.props.project.details.sampleValues.filter(function (cNode) {
        return cNode.parent_question == node;
      }).map(function (cNode, uid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          key: "node_".concat(uid),
          style: {
            listStyleType: "none"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyQuestion, {
          prop: _this11.props,
          surveyQuestion: cNode
        }), _this11.getCurrent(cNode.id)));
      });
    });

    return _this11;
  }

  _createClass(SurveyQuestionTree, [{
    key: "render",
    value: function render() {
      var project = this.props.project;

      if (project.details != null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.getCurrent(-1));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
      }
    }
  }]);

  return SurveyQuestionTree;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function SurveyQuestion(properties) {
  var props = properties.prop;
  var project = props.project;

  if (properties.surveyQuestion.answers == null) {
    console.log("answers null");
  }

  if (project.details != null) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sample-value-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "header px-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RemoveSurveyQuestionButton, {
      projectId: props.projectId,
      removeSurveyQuestion: props.removeSurveyQuestion,
      surveyQuestion: properties.surveyQuestion
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " Survey Question: ", properties.surveyQuestion.question)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "Answer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, properties.surveyQuestion.answers.map(function (surveyAnswer, uid) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: uid
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RemoveSurveyQuestionRowButton, {
        projectId: props.projectId,
        removeSurveyQuestionRow: props.removeSurveyQuestionRow,
        surveyQuestion: properties.surveyQuestion,
        surveyAnswer: surveyAnswer
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, surveyAnswer.answer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "circle",
        style: {
          backgroundColor: surveyAnswer.color,
          border: "solid 1px"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\xA0"));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SurveyQuestionTable, {
      project: project,
      projectId: props.projectId,
      surveyQuestion: properties.surveyQuestion,
      getParentSurveyQuestions: props.getParentSurveyQuestions,
      addSurveyQuestionRow: props.addSurveyQuestionRow,
      handleInputName: props.handleInputName,
      handleInputColor: props.handleInputColor,
      handleInputParent: props.handleInputParent
    }))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

function RemoveSurveyQuestionButton(props) {
  if (props.projectId == "0") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "remove-sample-value-group",
      type: "button",
      className: "button",
      value: "-",
      onClick: function onClick() {
        return props.removeSurveyQuestion(props.surveyQuestion.question);
      }
    });
  } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
}

function RemoveSurveyQuestionRowButton(props) {
  if (props.projectId == "0") {
    if (props.surveyAnswer) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        className: "button",
        value: "-",
        onClick: function onClick() {
          return props.removeSurveyQuestionRow(props.surveyQuestion.question, props.surveyAnswer.answer);
        }
      });
    } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null);
  } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
}

function SurveyQuestionTable(props) {
  var project = props.project;
  var answer = "",
      color = "#000000";

  if (project.newValueEntry[props.surveyQuestion.question]) {
    answer = project.newValueEntry[props.surveyQuestion.question].answer;
    color = project.newValueEntry[props.surveyQuestion.question].color;
  }

  if (props.projectId == "0") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "button",
      className: "button",
      value: "+",
      onClick: function onClick() {
        return props.addSurveyQuestionRow(props.surveyQuestion.question);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "value-name",
      autoComplete: "off",
      value: answer,
      onChange: function onChange(e) {
        return props.handleInputName(props.surveyQuestion.question, e);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "color",
      className: "value-color",
      value: color,
      onChange: function onChange(e) {
        return props.handleInputColor(props.surveyQuestion.question, e);
      }
    })));
  } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null);
}

function ProjectManagement(props) {
  var project = props.project;
  var buttons = "";

  if (props.projectId == "0") {
    buttons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "button",
      id: "create-project",
      className: "btn btn-outline-danger btn-sm btn-block",
      name: "create-project",
      value: "Create Project",
      onClick: props.createProject
    });
  } else {
    if (project.details != null) {
      buttons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        id: "configure-geo-dash",
        className: "btn btn-outline-lightgreen btn-sm btn-block",
        name: "configure-geo-dash",
        value: "Configure Geo-Dash",
        onClick: props.configureGeoDash,
        style: {
          display: project.details.availability == 'unpublished' || project.details.availability == 'published' ? 'block' : 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        id: "download-plot-data",
        className: "btn btn-outline-lightgreen btn-sm btn-block",
        name: "download-plot-data",
        value: "Download Plot Data",
        onClick: props.downloadPlotData,
        style: {
          display: project.details.availability == 'published' || project.details.availability == 'closed' ? 'block' : 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        id: "download-sample-data",
        className: "btn btn-outline-lightgreen btn-sm btn-block",
        name: "download-sample-data",
        value: "Download Sample Data",
        onClick: props.downloadSampleData,
        style: {
          display: project.details.availability == 'published' || project.details.availability == 'closed' ? 'block' : 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        id: "change-availability",
        className: "btn btn-outline-danger btn-sm btn-block",
        name: "change-availability",
        value: project.stateTransitions[project.details.availability] + "Project",
        onClick: props.changeAvailability
      }));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "project-management",
    className: "col mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header px-0"
  }, "Project Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, buttons, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "spinner"
  })));
}

function renderProjectPage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
    documentRoot: args.documentRoot,
    userId: args.userId,
    projectId: args.projectId,
    institutionId: args.institutionId,
    project_stats_visibility: args.project_stats_visibility,
    project_template_visibility: args.project_template_visibility
  }), document.getElementById("project"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvbWFpbi9yZXNvdXJjZXMvcHVibGljL2pzeC9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbInV0aWxzIiwiZW5hYmxlX2VsZW1lbnQiLCJlbGVtZW50X2lkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsInN0eWxlIiwib3BhY2l0eSIsImRpc2FibGVfZWxlbWVudCIsInNob3dfZWxlbWVudCIsInZpc2liaWxpdHkiLCJoaWRlX2VsZW1lbnQiLCJoaWdobGlnaHRfYm9yZGVyIiwic2hhZG93X3N0eWxlIiwiYm94U2hhZG93IiwibG93bGlnaHRfYm9yZGVyIiwiYmxpbmtfYm9yZGVyIiwic2V0VGltZW91dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJQcm9qZWN0IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJJZCIsInByb2plY3RJZCIsImluc3RpdHV0aW9uSWQiLCJkZXRhaWxzIiwic3RhdHMiLCJpbWFnZXJ5TGlzdCIsIm1hcENvbmZpZyIsInBsb3RMaXN0IiwibG9uTWluIiwibGF0TWluIiwibG9uTWF4IiwibGF0TWF4IiwibmV3U3VydmV5UXVlc3Rpb25OYW1lIiwibmV3VmFsdWVFbnRyeSIsInByb2plY3RMaXN0IiwidGVtcGxhdGVJZCIsImRhdGVDcmVhdGVkIiwiZGF0ZVB1Ymxpc2hlZCIsImRhdGVDbG9zZWQiLCJkYXRlQXJjaGl2ZWQiLCJzdGF0ZVRyYW5zaXRpb25zIiwibm9uZXhpc3RlbnQiLCJ1bnB1Ymxpc2hlZCIsInB1Ymxpc2hlZCIsImNsb3NlZCIsImFyY2hpdmVkIiwic2V0UHJpdmFjeUxldmVsIiwiYmluZCIsInNldFBsb3REaXN0cmlidXRpb24iLCJzZXRQbG90U2hhcGUiLCJzZXRTYW1wbGVEaXN0cmlidXRpb24iLCJjb25maWd1cmVHZW9EYXNoIiwiZG93bmxvYWRQbG90RGF0YSIsImRvd25sb2FkU2FtcGxlRGF0YSIsImNsb3NlUHJvamVjdCIsImNoYW5nZUF2YWlsYWJpbGl0eSIsInNldEJhc2VNYXBTb3VyY2UiLCJhZGRTdXJ2ZXlRdWVzdGlvbiIsInJlbW92ZVN1cnZleVF1ZXN0aW9uIiwiYWRkU3VydmV5UXVlc3Rpb25Sb3ciLCJnZXRQYXJlbnRTdXJ2ZXlRdWVzdGlvbnMiLCJzZXRQcm9qZWN0VGVtcGxhdGUiLCJnZXRTdXJ2ZXlRdWVzdGlvbkJ5TmFtZSIsImdldFBhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2VycyIsInJlbW92ZVN1cnZleVF1ZXN0aW9uUm93IiwiaGFuZGxlSW5wdXROYW1lIiwiaGFuZGxlSW5wdXRDb2xvciIsImhhbmRsZUlucHV0UGFyZW50IiwiaGFuZGxlQ2hhbmdlIiwidG9wb1NvcnQiLCJjcmVhdGVQcm9qZWN0IiwiZ2V0UGFyZW50U3VydmV5QW5zd2VycyIsImluaXRpYWxpemF0aW9uIiwiZG9jdW1lbnRSb290IiwiZ2V0UHJvamVjdEJ5SWQiLCJpZCIsInByaXZhY3lMZXZlbCIsInByb2plY3REaXN0cmlidXRpb24iLCJwbG90U2hhcGUiLCJzYW1wbGVEaXN0cmlidXRpb24iLCJnZXRQcm9qZWN0TGlzdCIsImNoZWNrZWQiLCJpbm5lckhUTUwiLCJnZXRQcm9qZWN0U3RhdHMiLCJnZXRJbWFnZXJ5TGlzdCIsInVwZGF0ZVVubWFuYWdlZENvbXBvbmVudHMiLCJjb25maXJtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGVzIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhbXBsZVZhbHVlcyIsInJlZiIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImFzeW5jIiwiY3Jvc3NEb21haW4iLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiZGF0YSIsImZhaWwiLCJhbGVydCIsImRvbmUiLCJkZXRhaWxzTmV3IiwiYXZhaWxhYmlsaXR5Iiwic2V0U3RhdGUiLCJuZXdQcm9qZWN0SWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInB1Ymxpc2hQcm9qZWN0IiwiYXJjaGl2ZVByb2plY3QiLCJvcGVuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaW5zdGl0dXRpb24iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidGVtcGxhdGVQcm9qZWN0IiwiZmluZCIsInByb2plY3QiLCJzdiIsInBhcnNlIiwibmV3U1YiLCJ0ZW1wU1EiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJwYXJlbnRfcXVlc3Rpb24iLCJwYXJlbnRfYW5zd2VyIiwiZE5ldyIsImxlbmd0aCIsIm1hcCIsInNxIiwibmFtZSIsInZhbHVlcyIsInNhIiwicHVzaCIsImFuc3dlciIsImNvbG9yIiwiZSIsImJtcyIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiYmFzZU1hcFNvdXJjZSIsIm1lcmNhdG9yIiwic2V0VmlzaWJsZUxheWVyIiwicGxvdERpc3RyaWJ1dGlvbiIsInNhbXBsZVN1cnZleSIsImZpbHRlciIsInN1cnZleVF1ZXN0aW9uIiwiYW5zIiwicGFyZW50X3ZhbHVlIiwicGFyZW50IiwicXVlc3Rpb25faWQiLCJwYXJlbnRTdXJ2ZXlRdWVzdGlvbiIsInBhcmVudFN1cnZleVF1ZXN0aW9ucyIsInBhcmVudENoaWxkR3JvdXBzIiwiY2hpbGRTdXJ2ZXlRdWVzdGlvbnMiLCJzYW1wbGVWYWx1ZSIsImNvbmNhdCIsImFwcGx5IiwicXVlc3Rpb25UZXh0IiwiYW5zd2VyX3ZhbHVlIiwibmV3VmFsdWVFbnRyeU5ldyIsIl9pZCIsImFuc3dlcl9pZCIsInNlbGVjdGVkIiwic3VydmV5UXVlc3Rpb25OYW1lIiwic3VydmV5UXVlc3Rpb25UZXh0IiwiX3N1cnZleUFuc3dlciIsInN1cnZleUFuc3dlciIsImVudHJ5IiwiZmV0Y2giLCJ0aGVuIiwib2siLCJqc29uIiwicHJvakxpc3QiLCJ1bnNoaWZ0IiwibWF4UGxvdHMiLCJzaG93UGxvdENlbnRlcnMiLCJnZXRQbG90TGlzdCIsInJlbW92ZUxheWVyQnlUaXRsZSIsImFkZFBsb3RPdmVydmlld0xheWVycyIsImNyZWF0ZU1hcCIsImRpc3BsYXlEcmFnQm94Qm91bmRzIiwiZHJhZ0JveCIsImV4dGVudCIsImdldEdlb21ldHJ5IiwiY2xvbmUiLCJ0cmFuc2Zvcm0iLCJnZXRFeHRlbnQiLCJkaXNhYmxlRHJhZ0JveERyYXciLCJlbmFibGVEcmFnQm94RHJhdyIsImJvdW5kYXJ5RXh0ZW50IiwicGFyc2VHZW9Kc29uIiwiYm91bmRhcnkiLCJhZGRWZWN0b3JMYXllciIsImdlb21ldHJ5VG9WZWN0b3JTb3VyY2UiLCJjZW9NYXBTdHlsZXMiLCJwb2x5Z29uIiwiem9vbU1hcFRvTGF5ZXIiLCJ0aXRsZSIsInNob3dQcm9qZWN0TWFwIiwiZGVzY3JpcHRpb24iLCJoZWFkZXIiLCJwcm9qZWN0X3N0YXRzX3Zpc2liaWxpdHkiLCJwcm9qZWN0X3RlbXBsYXRlX3Zpc2liaWxpdHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb2plY3RTdGF0cyIsIm1lbWJlcnMiLCJjb250cmlidXRvcnMiLCJudW1QbG90cyIsImZsYWdnZWRQbG90cyIsImFuYWx5emVkUGxvdHMiLCJ1bmFuYWx5emVkUGxvdHMiLCJQcm9qZWN0RGVzaWduRm9ybSIsImFkZFN1cnZleVF1ZXN0aW9uQnV0dG9uIiwiUHJvamVjdFRlbXBsYXRlVmlzaWJpbGl0eSIsInByb2oiLCJ1aWQiLCJQcm9qZWN0SW5mbyIsIlByb2plY3RWaXNpYmlsaXR5IiwiUHJvamVjdEFPSSIsIm1zZyIsIlByb2plY3RJbWFnZXJ5IiwiaW1hZ2VyeSIsIlBsb3REZXNpZ24iLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJhc2U2NERhdGEiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicGxvdHNoYXBlIiwidHh0IiwicGxvdFNpemUiLCJlbmNvZGVJbWFnZUZpbGVBc1VSTCIsImRpc3BsYXkiLCJwbG90U3BhY2luZyIsIlNhbXBsZURlc2lnbiIsInNhbXBsZXNQZXJQbG90Iiwic2FtcGxlUmVzb2x1dGlvbiIsIlN1cnZleURlc2lnbiIsImFuc3dlcl9zZWxlY3QiLCJkcm9wZG93bnMiLCJwYXJlbnRTdXJ2ZXlRdWVzdGlvbkFuc3dlciIsIlN1cnZleVF1ZXN0aW9uVHJlZSIsIm5vZGUiLCJjTm9kZSIsImxpc3RTdHlsZVR5cGUiLCJnZXRDdXJyZW50IiwiU3VydmV5UXVlc3Rpb24iLCJwcm9wZXJ0aWVzIiwicHJvcCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIlJlbW92ZVN1cnZleVF1ZXN0aW9uQnV0dG9uIiwiUmVtb3ZlU3VydmV5UXVlc3Rpb25Sb3dCdXR0b24iLCJTdXJ2ZXlRdWVzdGlvblRhYmxlIiwiUHJvamVjdE1hbmFnZW1lbnQiLCJidXR0b25zIiwicmVuZGVyUHJvamVjdFBhZ2UiLCJhcmdzIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFD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QkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDcENDLGtEQUFRLENBQUNDLE1BQVQsQ0FDSSwyREFBQyxPQUFEO0FBQVMsZ0JBQVksRUFBRUYsSUFBSSxDQUFDck0sWUFBNUI7QUFBMEMsVUFBTSxFQUFFcU0sSUFBSSxDQUFDMVAsTUFBdkQ7QUFBK0QsYUFBUyxFQUFFMFAsSUFBSSxDQUFDelAsU0FBL0U7QUFBMEYsaUJBQWEsRUFBRXlQLElBQUksQ0FBQ3hQLGFBQTlHO0FBQ1MsNEJBQXdCLEVBQUV3UCxJQUFJLENBQUMzRCx3QkFEeEM7QUFFUywrQkFBMkIsRUFBRTJELElBQUksQ0FBQzFEO0FBRjNDLElBREosRUFJSXBOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUpKO0FBTUgsQyIsImZpbGUiOiJwcm9qZWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicHJvamVjdFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvcHJvamVjdC5qc1wiLFwidmVuZG9yc35hY2NvdW50fmNvbGxlY3Rpb25+Z2VvZGFzaHJlYWN0fmhvbWV+aW5zdGl0dXRpb25+cHJvamVjdH50aW1lc3luY353aWRnZXRsYXlvdXRlZGl0b3JcIixcImNvbGxlY3Rpb25+Z2VvZGFzaHJlYWN0fmhvbWV+cHJvamVjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICoqKlxuICoqKiBDcmVhdGUgdGhlIHV0aWxzIG9iamVjdCB0byBhY3QgYXMgYSBuYW1lc3BhY2UgZm9yIHRoaXMgZmlsZVxuICoqKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgdXRpbHMgPSB7fTtcblxudXRpbHMuZW5hYmxlX2VsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDEuMDtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmRpc2FibGVfZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG51dGlscy5zaG93X2VsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59O1xuXG51dGlscy5oaWRlX2VsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn07XG5cbnV0aWxzLmhpZ2hsaWdodF9ib3JkZXIgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgdmFyIHNoYWRvd19zdHlsZSA9IFwiMHB4IDBweCA0cHggNHB4IGJsYWNrIGluc2V0LCAwcHggMHB4IDRweCA0cHggd2hpdGUgaW5zZXRcIjtcbiAgICBlbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd19zdHlsZTtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmxvd2xpZ2h0X2JvcmRlciA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiaW5pdGlhbFwiO1xuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuYmxpbmtfYm9yZGVyID0gZnVuY3Rpb24gKGVsZW1lbnRfaWQpIHtcbiAgICB1dGlscy5oaWdobGlnaHRfYm9yZGVyKGVsZW1lbnRfaWQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB1dGlscy5sb3dsaWdodF9ib3JkZXIoZWxlbWVudF9pZCk7IH0sIDUwMCk7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB1dGlsczogdXRpbHNcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBtZXJjYXRvciwgY2VvTWFwU3R5bGVzIH0gZnJvbSBcIi4uL2pzL21lcmNhdG9yLW9wZW5sYXllcnMuanNcIjtcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL2pzL3V0aWxzLmpzXCI7XG5cbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5wcm9wcy51c2VySWQsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvcHMucHJvamVjdElkLFxuICAgICAgICAgICAgaW5zdGl0dXRpb25JZDogdGhpcy5wcm9wcy5pbnN0aXR1dGlvbklkLFxuICAgICAgICAgICAgZGV0YWlsczogbnVsbCxcbiAgICAgICAgICAgIHN0YXRzOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2VyeUxpc3Q6IG51bGwsXG4gICAgICAgICAgICBtYXBDb25maWc6IG51bGwsXG4gICAgICAgICAgICBwbG90TGlzdDogbnVsbCxcbiAgICAgICAgICAgIGxvbk1pbjogXCJcIixcbiAgICAgICAgICAgIGxhdE1pbjogXCJcIixcbiAgICAgICAgICAgIGxvbk1heDogXCJcIixcbiAgICAgICAgICAgIGxhdE1heDogXCJcIixcbiAgICAgICAgICAgIG5ld1N1cnZleVF1ZXN0aW9uTmFtZTogXCJcIixcbiAgICAgICAgICAgIG5ld1ZhbHVlRW50cnk6IHt9LFxuICAgICAgICAgICAgcHJvamVjdExpc3Q6IG51bGwsXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiBcIjBcIixcbiAgICAgICAgICAgIC8vIEZJWE1FOiBBZGQgdGhlc2UgYXR0cmlidXRlcyB0byB0aGUgSlNPTiBkYXRhYmFzZVxuICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBkYXRlUHVibGlzaGVkOiBudWxsLFxuICAgICAgICAgICAgZGF0ZUNsb3NlZDogbnVsbCxcbiAgICAgICAgICAgIGRhdGVBcmNoaXZlZDogbnVsbCxcbiAgICAgICAgICAgIHN0YXRlVHJhbnNpdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBub25leGlzdGVudDogXCJDcmVhdGVcIixcbiAgICAgICAgICAgICAgICB1bnB1Ymxpc2hlZDogXCJQdWJsaXNoXCIsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVkOiBcIkNsb3NlXCIsXG4gICAgICAgICAgICAgICAgY2xvc2VkOiBcIkFyY2hpdmVcIixcbiAgICAgICAgICAgICAgICBhcmNoaXZlZDogXCJBcmNoaXZlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJpdmFjeUxldmVsID0gdGhpcy5zZXRQcml2YWN5TGV2ZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRQbG90RGlzdHJpYnV0aW9uID0gdGhpcy5zZXRQbG90RGlzdHJpYnV0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0UGxvdFNoYXBlID0gdGhpcy5zZXRQbG90U2hhcGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTYW1wbGVEaXN0cmlidXRpb24gPSB0aGlzLnNldFNhbXBsZURpc3RyaWJ1dGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZUdlb0Rhc2ggPSB0aGlzLmNvbmZpZ3VyZUdlb0Rhc2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb3dubG9hZFBsb3REYXRhID0gdGhpcy5kb3dubG9hZFBsb3REYXRhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG93bmxvYWRTYW1wbGVEYXRhID0gdGhpcy5kb3dubG9hZFNhbXBsZURhdGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZVByb2plY3QgPSB0aGlzLmNsb3NlUHJvamVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUF2YWlsYWJpbGl0eSA9IHRoaXMuY2hhbmdlQXZhaWxhYmlsaXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0QmFzZU1hcFNvdXJjZSA9IHRoaXMuc2V0QmFzZU1hcFNvdXJjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZFN1cnZleVF1ZXN0aW9uID0gdGhpcy5hZGRTdXJ2ZXlRdWVzdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVN1cnZleVF1ZXN0aW9uID0gdGhpcy5yZW1vdmVTdXJ2ZXlRdWVzdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZFN1cnZleVF1ZXN0aW9uUm93ID0gdGhpcy5hZGRTdXJ2ZXlRdWVzdGlvblJvdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9ucyA9IHRoaXMuZ2V0UGFyZW50U3VydmV5UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0UHJvamVjdFRlbXBsYXRlID0gdGhpcy5zZXRQcm9qZWN0VGVtcGxhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRTdXJ2ZXlRdWVzdGlvbkJ5TmFtZSA9IHRoaXMuZ2V0U3VydmV5UXVlc3Rpb25CeU5hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRTdXJ2ZXlRdWVzdGlvbkFuc3dlcnM9dGhpcy5nZXRQYXJlbnRTdXJ2ZXlRdWVzdGlvbkFuc3dlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVTdXJ2ZXlRdWVzdGlvblJvdyA9IHRoaXMucmVtb3ZlU3VydmV5UXVlc3Rpb25Sb3cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dE5hbWUgPSB0aGlzLmhhbmRsZUlucHV0TmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q29sb3IgPSB0aGlzLmhhbmRsZUlucHV0Q29sb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dFBhcmVudCA9IHRoaXMuaGFuZGxlSW5wdXRQYXJlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvcG9Tb3J0ID0gdGhpcy50b3BvU29ydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QgPSB0aGlzLmNyZWF0ZVByb2plY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRTdXJ2ZXlBbnN3ZXJzPXRoaXMuZ2V0UGFyZW50U3VydmV5QW5zd2Vycy5iaW5kKHRoaXMpO1xuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvbih0aGlzLnByb3BzLmRvY3VtZW50Um9vdCwgdGhpcy5zdGF0ZS51c2VySWQsIHRoaXMuc3RhdGUucHJvamVjdElkLCB0aGlzLnN0YXRlLmluc3RpdHV0aW9uSWQpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemF0aW9uKGRvY3VtZW50Um9vdCwgdXNlcklkLCBwcm9qZWN0SWQsIGluc3RpdHV0aW9uSWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlscyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGV0YWlscy5wcml2YWN5TGV2ZWwgPSBcInByaXZhdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRldGFpbHMucHJvamVjdERpc3RyaWJ1dGlvbiA9IFwicmFuZG9tXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZXRhaWxzLnBsb3RTaGFwZSA9IFwiY2lyY2xlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZXRhaWxzLnNhbXBsZURpc3RyaWJ1dGlvbiA9IFwicmFuZG9tXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0TGlzdCh1c2VySWQsIHByb2plY3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bS1wbG90c1wiKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGlzdHJpYnV0aW9uLWdyaWRkZWRcIikuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxvdC1kZXNpZ24tdGV4dFwiKS5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uIGFib3V0IGdyaWRkZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxvdC1kaXN0cmlidXRpb24tcmFuZG9tXCIpLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbiBhYm91dCByYW5kb21cIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxvdC1kaXN0cmlidXRpb24tY3N2XCIpLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MID1cIkRlc2NyaXB0aW9uIGFib3V0IGNzdiB1cGxvYWRcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxvdC1kaXN0cmlidXRpb24tc2hwXCIpLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MID1cIkRlc2NyaXB0aW9uIGFib3V0IHNocCB1cGxvYWRcIjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLWdyaWRkZWRcIikuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRlc2lnbi10ZXh0XCIpLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb24gYWJvdXQgZ3JpZGRlZFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLXJhbmRvbVwiKS5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1wbGUtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbiBhYm91dCByYW5kb21cIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRpc3RyaWJ1dGlvbi1jc3ZcIikuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRlc2lnbi10ZXh0XCIpLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb24gYWJvdXQgY3N2IHVwbG9hZFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLXNocFwiKS5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1wbGUtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbiBhYm91dCBzaHAgdXBsb2FkXCI7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0U3RhdHMocHJvamVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmltYWdlcnlMaXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEltYWdlcnlMaXN0KGluc3RpdHV0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB0aGlzLnVwZGF0ZVVubWFuYWdlZENvbXBvbmVudHMocHJvamVjdElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhciBsb2dGb3JtRGF0YT1mdW5jdGlvbihmb3JtRGF0YSlcbiAgICAvLyB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG5ldyBNYXAoZm9ybURhdGEuZW50cmllcygpKSk7XG4gICAgLy8gfTtcbiAgICBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBpZiAoY29uZmlybShcIkRvIHlvdSBSRUFMTFkgd2FudCB0byBjcmVhdGUgdGhpcyBwcm9qZWN0P1wiKSkge1xuICAgICAgICAgICAgdXRpbHMuc2hvd19lbGVtZW50KFwic3Bpbm5lclwiKTtcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGVzaWduLWZvcm1cIikpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW5zdGl0dXRpb25cIiwgdGhpcy5wcm9wcy5pbnN0aXR1dGlvbklkKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBsb3QtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxvdC1kaXN0cmlidXRpb24tY3N2LWZpbGVcIikuZmlsZXNbMF0pO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGxvdC1kaXN0cmlidXRpb24tc2hwLWZpbGVcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbG90LWRpc3RyaWJ1dGlvbi1zaHAtZmlsZVwiKS5maWxlc1swXSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRpc3RyaWJ1dGlvbi1jc3YtZmlsZVwiKS5maWxlc1swXSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLXNocC1maWxlXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRpc3RyaWJ1dGlvbi1zaHAtZmlsZVwiKS5maWxlc1swXSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzYW1wbGUtdmFsdWVzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZGV0YWlscy5zYW1wbGVWYWx1ZXMpKTtcbiAgICAgICAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvY3JlYXRlLXByb2plY3RcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5oaWRlX2VsZW1lbnQoXCJzcGlubmVyXCIpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzTmV3ID0gcmVmLnN0YXRlLmRldGFpbHM7XG4gICAgICAgICAgICAgICAgZGV0YWlsc05ldy5hdmFpbGFiaWxpdHkgPSBcInVucHVibGlzaGVkXCI7XG4gICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtkZXRhaWxzOiBkZXRhaWxzTmV3fSk7XG4gICAgICAgICAgICAgICAgdXRpbHMuaGlkZV9lbGVtZW50KFwic3Bpbm5lclwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UHJvamVjdElkID0gZGF0YTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByZWYucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvcHJvamVjdC9cIiArIG5ld1Byb2plY3RJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGlzaFByb2plY3QoKSB7XG4gICAgICAgIGlmIChjb25maXJtKFwiRG8geW91IFJFQUxMWSB3YW50IHRvIHB1Ymxpc2ggdGhpcyBwcm9qZWN0P1wiKSkge1xuICAgICAgICAgICAgdXRpbHMuc2hvd19lbGVtZW50KFwic3Bpbm5lclwiKTtcbiAgICAgICAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvcHVibGlzaC1wcm9qZWN0L1wiICsgdGhpcy5zdGF0ZS5kZXRhaWxzLmlkLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuaGlkZV9lbGVtZW50KFwic3Bpbm5lclwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBwdWJsaXNoaW5nIHByb2plY3QuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlsc05ldyA9IHJlZi5zdGF0ZS5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIGRldGFpbHNOZXcuYXZhaWxhYmlsaXR5ID0gXCJwdWJsaXNoZWRcIjtcbiAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9KTtcbiAgICAgICAgICAgICAgICB1dGlscy5oaWRlX2VsZW1lbnQoXCJzcGlubmVyXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVByb2plY3QoKSB7XG4gICAgICAgIGlmIChjb25maXJtKFwiRG8geW91IFJFQUxMWSB3YW50IHRvIGNsb3NlIHRoaXMgcHJvamVjdD9cIikpIHtcbiAgICAgICAgICAgIHV0aWxzLnNob3dfZWxlbWVudChcInNwaW5uZXJcIik7XG4gICAgICAgICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2Nsb3NlLXByb2plY3QvXCIgKyB0aGlzLnN0YXRlLmRldGFpbHMuaWQsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5oaWRlX2VsZW1lbnQoXCJzcGlubmVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIGNsb3NpbmcgcHJvamVjdC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzTmV3ID0gcmVmLnN0YXRlLmRldGFpbHM7XG4gICAgICAgICAgICAgICAgZGV0YWlsc05ldy5hdmFpbGFiaWxpdHkgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgICAgIHJlZi5zZXRTdGF0ZSh7ZGV0YWlsczogZGV0YWlsc05ld30pO1xuICAgICAgICAgICAgICAgIHV0aWxzLmhpZGVfZWxlbWVudChcInNwaW5uZXJcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFyY2hpdmVQcm9qZWN0KCkge1xuICAgICAgICBpZiAoY29uZmlybShcIkRvIHlvdSBSRUFMTFkgd2FudCB0byBhcmNoaXZlIHRoaXMgcHJvamVjdD8hXCIpKSB7XG4gICAgICAgICAgICB1dGlscy5zaG93X2VsZW1lbnQoXCJzcGlubmVyXCIpO1xuICAgICAgICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9hcmNoaXZlLXByb2plY3QvXCIgKyB0aGlzLnN0YXRlLmRldGFpbHMuaWQsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5oaWRlX2VsZW1lbnQoXCJzcGlubmVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIGFyY2hpdmluZyBwcm9qZWN0LiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHNOZXcgPSByZWYuc3RhdGUuZGV0YWlscztcbiAgICAgICAgICAgICAgICBkZXRhaWxzTmV3LmF2YWlsYWJpbGl0eSA9IFwiYXJjaGl2ZWRcIjtcbiAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9KTtcbiAgICAgICAgICAgICAgICB1dGlscy5oaWRlX2VsZW1lbnQoXCJzcGlubmVyXCIpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBcIiArIHJlZi5zdGF0ZS5kZXRhaWxzLmlkICsgXCIgaGFzIGJlZW4gYXJjaGl2ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJlZi5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9ob21lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUF2YWlsYWJpbGl0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlscy5hdmFpbGFiaWxpdHkgPT0gXCJub25leGlzdGVudFwiKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuYXZhaWxhYmlsaXR5ID09IFwidW5wdWJsaXNoZWRcIikge1xuICAgICAgICAgICAgdGhpcy5wdWJsaXNoUHJvamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGV0YWlscy5hdmFpbGFiaWxpdHkgPT0gXCJwdWJsaXNoZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVByb2plY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuYXZhaWxhYmlsaXR5ID09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXJjaGl2ZVByb2plY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ3VyZUdlb0Rhc2goKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxvdExpc3QgIT0gbnVsbCAmJiB0aGlzLnN0YXRlLmRldGFpbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi93aWRnZXQtbGF5b3V0LWVkaXRvcj9lZGl0YWJsZT10cnVlJlwiXG4gICAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQoXCJpbnN0aXR1dGlvbklkPVwiICsgdGhpcy5zdGF0ZS5kZXRhaWxzLmluc3RpdHV0aW9uXG4gICAgICAgICAgICAgICAgICAgICsgXCImcGlkPVwiICsgdGhpcy5zdGF0ZS5kZXRhaWxzLmlkKSxcbiAgICAgICAgICAgICAgICBcIl9nZW8tZGFzaFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvd25sb2FkUGxvdERhdGEoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvZHVtcC1wcm9qZWN0LWFnZ3JlZ2F0ZS1kYXRhL1wiICsgdGhpcy5zdGF0ZS5kZXRhaWxzLmlkLCBcIl9ibGFua1wiKTtcbiAgICB9XG5cbiAgICBkb3dubG9hZFNhbXBsZURhdGEoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvZHVtcC1wcm9qZWN0LXJhdy1kYXRhL1wiICsgdGhpcy5zdGF0ZS5kZXRhaWxzLmlkLCBcIl9ibGFua1wiKTtcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0VGVtcGxhdGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGVtcGxhdGVJZDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlUHJvamVjdCA9IHRoaXMuc3RhdGUucHJvamVjdExpc3QuZmluZChcbiAgICAgICAgICAgIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3QuaWQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIHN2PShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRlbXBsYXRlUHJvamVjdCkpKS5zYW1wbGVWYWx1ZXM7XG4gICAgICAgIHZhciBuZXdTVj1bXTtcbiAgICAgICAgdmFyIHRlbXBTUT17aWQ6LTEscXVlc3Rpb246XCJcIixhbnN3ZXJzOltdLHBhcmVudF9xdWVzdGlvbjogLTEscGFyZW50X2Fuc3dlcjogLTF9O1xuICAgICAgICB2YXIgZE5ldyA9IHRoaXMuc3RhdGUubmV3VmFsdWVFbnRyeTtcblxuICAgICAgICBpZihzdi5sZW5ndGg+MCl7XG5cbiAgICAgICAgICAgIHN2Lm1hcCgoc3EpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHNxLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFNRLmlkPXNxLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFNRLnF1ZXN0aW9uPXNxLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcS52YWx1ZXMubWFwKChzYSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzYS5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2EuaWQ+MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU1EuYW5zd2Vycy5wdXNoKHtpZDpzYS5pZCxhbnN3ZXI6c2EubmFtZSxjb2xvcjpzYS5jb2xvcn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU1EuYW5zd2Vycy5wdXNoKHNhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVtcFNRLmlkPjApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NWLnB1c2godGVtcFNRKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkTmV3W3RlbXBTUS5xdWVzdGlvbl0gPXtpZDotMSxhbnN3ZXI6XCJcIixjb2xvcjpcIiMwMDAwMDBcIn07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3VmFsdWVFbnRyeTogZE5ld30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTVi5wdXNoKHNxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGROZXdbc3EucXVlc3Rpb25dID17aWQ6LTEsYW5zd2VyOlwiXCIsY29sb3I6XCIjMDAwMDAwXCJ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3VmFsdWVFbnRyeTogZE5ld30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBsYXRlUHJvamVjdC5zYW1wbGVWYWx1ZXM9bmV3U1Y7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGVtcGxhdGVQcm9qZWN0KSl9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVW5tYW5hZ2VkQ29tcG9uZW50cyh0aGlzLnN0YXRlLnRlbXBsYXRlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApOyAvLyBjbG9uZSBwcm9qZWN0XG5cbiAgICB9XG5cbiAgICBzZXRQcml2YWN5TGV2ZWwocHJpdmFjeUxldmVsKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGRldGFpbHNOZXcgPSB0aGlzLnN0YXRlLmRldGFpbHM7XG4gICAgICAgICAgICBkZXRhaWxzTmV3LnByaXZhY3lMZXZlbCA9IHByaXZhY3lMZXZlbDtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJhc2VNYXBTb3VyY2UoKSB7XG4gICAgICAgIHZhciBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLW1hcC1zb3VyY2VcIik7XG4gICAgICAgIHZhciBibXMgPSBlLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgdmFyIGRldGFpbHNOZXcgPSB0aGlzLnN0YXRlLmRldGFpbHM7XG4gICAgICAgIGRldGFpbHNOZXcuYmFzZU1hcFNvdXJjZSA9IGJtcztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBkZXRhaWxzTmV3fSk7XG4gICAgICAgIG1lcmNhdG9yLnNldFZpc2libGVMYXllcih0aGlzLnN0YXRlLm1hcENvbmZpZywgdGhpcy5zdGF0ZS5kZXRhaWxzLmJhc2VNYXBTb3VyY2UpO1xuICAgIH1cblxuICAgIHNldFBsb3REaXN0cmlidXRpb24ocGxvdERpc3RyaWJ1dGlvbikge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBkZXRhaWxzTmV3ID0gdGhpcy5zdGF0ZS5kZXRhaWxzO1xuICAgICAgICAgICAgZGV0YWlsc05ldy5wbG90RGlzdHJpYnV0aW9uID0gcGxvdERpc3RyaWJ1dGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9KTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bS1wbG90c1wiKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsb3REaXN0cmlidXRpb24gPT0gXCJyYW5kb21cIikge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInBsb3Qtc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZW5hYmxlX2VsZW1lbnQoXCJudW0tcGxvdHNcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInBsb3Qtc3BhY2luZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZGlzYWJsZV9lbGVtZW50KFwicGxvdC1kaXN0cmlidXRpb24tY3N2LWZpbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInBsb3QtZGlzdHJpYnV0aW9uLXNocC1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MPVwiRGVzY3JpcHRpb24gYWJvdXQgcmFuZG9tXCI7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsb3REaXN0cmlidXRpb24gPT0gXCJncmlkZGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZW5hYmxlX2VsZW1lbnQoXCJwbG90LXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcIm51bS1wbG90c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZW5hYmxlX2VsZW1lbnQoXCJwbG90LXNwYWNpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInBsb3QtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJwbG90LWRpc3RyaWJ1dGlvbi1zaHAtZmlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbG90LWRlc2lnbi10ZXh0XCIpLmlubmVySFRNTD1cIkRlc2NyaXB0aW9uIGFib3V0IGdyaWRkZWRcIjtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihwbG90RGlzdHJpYnV0aW9uID09IFwiY3N2XCIpe1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInBsb3Qtc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZGlzYWJsZV9lbGVtZW50KFwibnVtLXBsb3RzXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJwbG90LXNwYWNpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInBsb3QtZGlzdHJpYnV0aW9uLXNocC1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInBsb3QtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MPVwiRGVzY3JpcHRpb24gYWJvdXQgY3N2IHVwbG9hZFwiO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInBsb3Qtc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZGlzYWJsZV9lbGVtZW50KFwibnVtLXBsb3RzXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJwbG90LXNwYWNpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInBsb3QtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInBsb3QtZGlzdHJpYnV0aW9uLXNocC1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3QtZGVzaWduLXRleHRcIikuaW5uZXJIVE1MPVwiRGVzY3JpcHRpb24gYWJvdXQgc2hwIHVwbG9hZFwiO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UGxvdFNoYXBlKHBsb3RTaGFwZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBkZXRhaWxzTmV3ID0gdGhpcy5zdGF0ZS5kZXRhaWxzO1xuICAgICAgICAgICAgZGV0YWlsc05ldy5wbG90U2hhcGUgPSBwbG90U2hhcGU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBkZXRhaWxzTmV3fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTYW1wbGVEaXN0cmlidXRpb24oc2FtcGxlRGlzdHJpYnV0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGRldGFpbHNOZXcgPSB0aGlzLnN0YXRlLmRldGFpbHM7XG4gICAgICAgICAgICBkZXRhaWxzTmV3LnNhbXBsZURpc3RyaWJ1dGlvbiA9IHNhbXBsZURpc3RyaWJ1dGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9KTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbXBsZXMtcGVyLXBsb3RcIikgIT0gbnVsbCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbXBsZS1yZXNvbHV0aW9uXCIpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKHNhbXBsZURpc3RyaWJ1dGlvbiA9PSBcInJhbmRvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmVuYWJsZV9lbGVtZW50KFwic2FtcGxlcy1wZXItcGxvdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZGlzYWJsZV9lbGVtZW50KFwic2FtcGxlLXJlc29sdXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInNhbXBsZS1kaXN0cmlidXRpb24tY3N2LWZpbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInNhbXBsZS1kaXN0cmlidXRpb24tc2hwLWZpbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRlc2lnbi10ZXh0XCIpLmlubmVySFRNTD1cIkRlc2NyaXB0aW9uIGFib3V0IHJhbmRvbVwiO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHNhbXBsZURpc3RyaWJ1dGlvbiA9PSBcImdyaWRkZWRcIikge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJzYW1wbGVzLXBlci1wbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInNhbXBsZS1yZXNvbHV0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLXNocC1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbXBsZS1kZXNpZ24tdGV4dFwiKS5pbm5lckhUTUw9XCJEZXNjcmlwdGlvbiBhYm91dCBncmlkZGVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoc2FtcGxlRGlzdHJpYnV0aW9uID09IFwiY3N2XCIpe1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJzYW1wbGVzLXBlci1wbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJzYW1wbGUtcmVzb2x1dGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZGlzYWJsZV9lbGVtZW50KFwic2FtcGxlLWRpc3RyaWJ1dGlvbi1zaHAtZmlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuZW5hYmxlX2VsZW1lbnQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbXBsZS1kZXNpZ24tdGV4dFwiKS5pbm5lckhUTUw9XCJEZXNjcmlwdGlvbiBhYm91dCBjc3YgdXBsb2FkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInNhbXBsZXMtcGVyLXBsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInNhbXBsZS1yZXNvbHV0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5kaXNhYmxlX2VsZW1lbnQoXCJzYW1wbGUtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInNhbXBsZS1kaXN0cmlidXRpb24tc2hwLWZpbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlLWRlc2lnbi10ZXh0XCIpLmlubmVySFRNTD1cIkRlc2NyaXB0aW9uIGFib3V0IHNocCB1cGxvYWRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldFBhcmVudFN1cnZleVF1ZXN0aW9ucyhzYW1wbGVTdXJ2ZXkpIHtcbiAgICAgICAgcmV0dXJuIHNhbXBsZVN1cnZleS5maWx0ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbiAoc3VydmV5UXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VydmV5UXVlc3Rpb24ucGFyZW50X3F1ZXN0aW9uPT0tMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0UGFyZW50U3VydmV5UXVlc3Rpb25BbnN3ZXJzKHNhbXBsZVN1cnZleSkge1xuICAgICAgICB2YXIgYW5zID0gW107XG4gICAgICAgIHNhbXBsZVN1cnZleS5tYXAoKHNxKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF92YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsdWUtcGFyZW50XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyZW50X3ZhbHVlIT1udWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRfdmFsdWUub3B0aW9uc1twYXJlbnRfdmFsdWUuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcS5pZCA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFucyA9IHNxLmFuc3dlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhbnM7XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50U3VydmV5QW5zd2VycyhzYW1wbGVTdXJ2ZXkscXVlc3Rpb25faWQpIHtcbiAgICAgICAgdmFyIGFucyA9IFtdO1xuICAgICAgICBzYW1wbGVTdXJ2ZXkubWFwKChzcSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzcS5pZCA9PSBxdWVzdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgICAgICBhbnMgPSBzcS5hbnN3ZXJzO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhbnM7XG4gICAgfVxuXG5cbiAgICBnZXRDaGlsZFN1cnZleVF1ZXN0aW9ucyhzYW1wbGVTdXJ2ZXksIHBhcmVudFN1cnZleVF1ZXN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzYW1wbGVTdXJ2ZXkuZmlsdGVyKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHN1cnZleVF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cnZleVF1ZXN0aW9uLnBhcmVudF9xdWVzdGlvbiA9PSBwYXJlbnRTdXJ2ZXlRdWVzdGlvbi5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0b3BvU29ydChzYW1wbGVTdXJ2ZXkpIHtcbiAgICAvLyAgICAgdmFyIHBhcmVudFN1cnZleVF1ZXN0aW9ucyA9IHRoaXMuZ2V0UGFyZW50U3VydmV5UXVlc3Rpb25zKHNhbXBsZVN1cnZleSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHBhcmVudFN1cnZleVF1ZXN0aW9ucyk7XG4gICAgLy8gICAgIHZhciBwYXJlbnRDaGlsZEdyb3VwcyA9IHRoaXMuZ2V0UGFyZW50Q2hpbGRHcm91cHMocGFyZW50U3VydmV5UXVlc3Rpb25zLHNhbXBsZVN1cnZleSk7XG4gICAgLy8gICAgIHJldHVybiBwYXJlbnRDaGlsZEdyb3VwcztcbiAgICAvLyB9XG4gICAgLy8gZ2V0UGFyZW50Q2hpbGRHcm91cHMocGFyZW50U3VydmV5UXVlc3Rpb25zLHNhbXBsZVN1cnZleSl7XG4gICAgLy8gICAgIHZhciBwYXJlbnRDaGlsZEdyb3VwcyA9IHBhcmVudFN1cnZleVF1ZXN0aW9ucy5tYXAoXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiAocGFyZW50U3VydmV5UXVlc3Rpb24pIHtcbiAgICAvLyAgICAgICAgICAgICB2YXIgY2hpbGRTdXJ2ZXlRdWVzdGlvbnMgPSBzYW1wbGVTdXJ2ZXkuZmlsdGVyKFxuICAgIC8vICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc2FtcGxlVmFsdWUpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzYW1wbGVWYWx1ZS5wYXJlbnRfcXVlc3Rpb24gPT0gcGFyZW50U3VydmV5UXVlc3Rpb24uaWQgJiYgc2FtcGxlVmFsdWUucGFyZW50X3F1ZXN0aW9uIT0tMTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJmcm9tIHRvcG9cIik7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coKHBhcmVudFN1cnZleVF1ZXN0aW9ucykuY29uY2F0KGNoaWxkU3VydmV5UXVlc3Rpb25zKSk7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIChwYXJlbnRTdXJ2ZXlRdWVzdGlvbnMpLmNvbmNhdChjaGlsZFN1cnZleVF1ZXN0aW9ucyk7XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgdGhpc1xuICAgIC8vICAgICApO1xuICAgIC8vICAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCBwYXJlbnRDaGlsZEdyb3Vwcyk7XG4gICAgLy9cbiAgICAvLyB9XG4gICAgdG9wb1NvcnQoc2FtcGxlU3VydmV5KSB7XG4gICAgICAgIHZhciBwYXJlbnRTdXJ2ZXlRdWVzdGlvbnMgPSB0aGlzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9ucyhzYW1wbGVTdXJ2ZXkpO1xuICAgICAgICB2YXIgcGFyZW50Q2hpbGRHcm91cHMgPSBwYXJlbnRTdXJ2ZXlRdWVzdGlvbnMubWFwKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmVudFN1cnZleVF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkU3VydmV5UXVlc3Rpb25zID0gc2FtcGxlU3VydmV5LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNhbXBsZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2FtcGxlVmFsdWUucGFyZW50X3F1ZXN0aW9uID09IHBhcmVudFN1cnZleVF1ZXN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3BhcmVudFN1cnZleVF1ZXN0aW9uXS5jb25jYXQoY2hpbGRTdXJ2ZXlRdWVzdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgcGFyZW50Q2hpbGRHcm91cHMpO1xuICAgIH1cbiAgICBhZGRTdXJ2ZXlRdWVzdGlvbigpe1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleVF1ZXN0aW9uVGV4dFwiKS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRfdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbHVlLXBhcmVudFwiKTtcblxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHBhcmVudF92YWx1ZS5vcHRpb25zW3BhcmVudF92YWx1ZS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGFuc3dlcl92YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsdWUtYW5zd2VyXCIpO1xuXG4gICAgICAgICAgICB2YXIgYW5zd2VyID0gYW5zd2VyX3ZhbHVlLm9wdGlvbnNbYW5zd2VyX3ZhbHVlLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uVGV4dCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlRW50cnlOZXcgPSB0aGlzLnN0YXRlLm5ld1ZhbHVlRW50cnk7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVFbnRyeU5ld1txdWVzdGlvblRleHRdID0ge2lkOi0xLGFuc3dlcjogXCJcIiwgY29sb3I6IFwiIzAwMDAwMFwifTtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlsc05ldyA9IHRoaXMuc3RhdGUuZGV0YWlscztcbiAgICAgICAgICAgICAgICB2YXIgX2lkID0gZGV0YWlsc05ldy5zYW1wbGVWYWx1ZXMubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgcXVlc3Rpb25faWQgPSAtMSxhbnN3ZXJfaWQ9LTE7XG4gICAgICAgICAgICAgICAgZGV0YWlsc05ldy5zYW1wbGVWYWx1ZXMubWFwKChzcSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNxLmlkID09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uX2lkID0gc3EuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYXJlbnRTdXJ2ZXlBbnN3ZXJzKGRldGFpbHNOZXcuc2FtcGxlVmFsdWVzLHF1ZXN0aW9uX2lkKS5tYXAoKGFucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFucy5pZCA9PSBhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJfaWQgPSBhbnMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGRldGFpbHNOZXcuc2FtcGxlVmFsdWVzLnB1c2goe2lkOiBfaWQsIHF1ZXN0aW9uOiBxdWVzdGlvblRleHQsIGFuc3dlcnM6IFtdLCBwYXJlbnRfcXVlc3Rpb246IHF1ZXN0aW9uX2lkLHBhcmVudF9hbnN3ZXI6YW5zd2VyX2lkfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3VmFsdWVFbnRyeTogbmV3VmFsdWVFbnRyeU5ldywgZGV0YWlsczogZGV0YWlsc05ldywgbmV3U3VydmV5UXVlc3Rpb25OYW1lOiBcIlwifSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKU09OIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRldGFpbHMuc2FtcGxlVmFsdWVzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleVF1ZXN0aW9uVGV4dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcGFyZW50X3ZhbHVlLm9wdGlvbnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHN1cnZleSBxdWVzdGlvbiBmaXJzdC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVTdXJ2ZXlRdWVzdGlvbihzdXJ2ZXlRdWVzdGlvbk5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlscyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZGV0YWlsc05ldyA9IHRoaXMuc3RhdGUuZGV0YWlscztcbiAgICAgICAgICAgIGRldGFpbHNOZXcuc2FtcGxlVmFsdWVzID0gZGV0YWlsc05ldy5zYW1wbGVWYWx1ZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChzdXJ2ZXlRdWVzdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VydmV5UXVlc3Rpb24ucXVlc3Rpb24gIT0gc3VydmV5UXVlc3Rpb25OYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzTmV3XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN1cnZleVF1ZXN0aW9uQnlOYW1lKHN1cnZleVF1ZXN0aW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kZXRhaWxzLnNhbXBsZVZhbHVlcy5maW5kKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHN1cnZleVF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cnZleVF1ZXN0aW9uLnF1ZXN0aW9uID09IHN1cnZleVF1ZXN0aW9uTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW1vdmVTdXJ2ZXlRdWVzdGlvblJvdyhzdXJ2ZXlRdWVzdGlvblRleHQsIF9zdXJ2ZXlBbnN3ZXIpIHtcbiAgICAgICAgdmFyIHN1cnZleVF1ZXN0aW9uID0gdGhpcy5nZXRTdXJ2ZXlRdWVzdGlvbkJ5TmFtZShzdXJ2ZXlRdWVzdGlvblRleHQpO1xuICAgICAgICBzdXJ2ZXlRdWVzdGlvbi5hbnN3ZXJzID0gc3VydmV5UXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbiAoc3VydmV5QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cnZleUFuc3dlci5hbnN3ZXIgIT0gX3N1cnZleUFuc3dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgfVxuXG4gICAgYWRkU3VydmV5UXVlc3Rpb25Sb3coc3VydmV5UXVlc3Rpb25OYW1lKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuc3RhdGUubmV3VmFsdWVFbnRyeVtzdXJ2ZXlRdWVzdGlvbk5hbWVdO1xuICAgICAgICBpZiAoZW50cnkuYW5zd2VyICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHZhciBzdXJ2ZXlRdWVzdGlvbiA9IHRoaXMuZ2V0U3VydmV5UXVlc3Rpb25CeU5hbWUoc3VydmV5UXVlc3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHN1cnZleVF1ZXN0aW9uLmFuc3dlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6c3VydmV5UXVlc3Rpb24uYW5zd2Vycy5sZW5ndGgrMSxcbiAgICAgICAgICAgICAgICBhbnN3ZXI6IGVudHJ5LmFuc3dlcixcbiAgICAgICAgICAgICAgICBjb2xvcjogZW50cnkuY29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZW50cnkuaWQ9LTE7XG4gICAgICAgICAgICBlbnRyeS5hbnN3ZXIgPSBcIlwiO1xuICAgICAgICAgICAgZW50cnkuY29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQSBzdXJ2ZXkgYW5zd2VyIG11c3QgcG9zc2VzcyBib3RoIGFuIGFuc3dlciBhbmQgYSBjb2xvci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGROZXcgPSB0aGlzLnN0YXRlLm5ld1ZhbHVlRW50cnk7XG4gICAgICAgIGROZXdbc3VydmV5UXVlc3Rpb25OYW1lXSA9IGVudHJ5O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdWYWx1ZUVudHJ5OiBkTmV3fSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKSB7XG4gICAgICAgIGZldGNoKHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvZ2V0LXByb2plY3QtYnktaWQvXCIgKyBwcm9qZWN0SWQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgcmV0cmlldmluZyB0aGUgcHJvamVjdCBpbmZvLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJObyBwcm9qZWN0IGZvdW5kIHdpdGggSUQgXCIgKyBwcm9qZWN0SWQgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuc3RhdGUuZG9jdW1lbnRSb290ICsgXCIvaG9tZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzTmV3PWRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdj1kZXRhaWxzTmV3LnNhbXBsZVZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NWPVtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFNRPXtpZDotMSxxdWVzdGlvbjpcIlwiLGFuc3dlcnM6W10scGFyZW50X3F1ZXN0aW9uOiAtMSxwYXJlbnRfYW5zd2VyOiAtMX07XG4gICAgICAgICAgICAgICAgICAgIGlmKHN2Lmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Lm1hcCgoc3EpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNxLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFNRLmlkPXNxLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFNRLnF1ZXN0aW9uPXNxLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcS52YWx1ZXMubWFwKChzYSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzYS5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2EuaWQ+MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU1EuYW5zd2Vycy5wdXNoKHtpZDpzYS5pZCxhbnN3ZXI6c2EubmFtZSxjb2xvcjpzYS5jb2xvcn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU1EuYW5zd2Vycy5wdXNoKHNhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVtcFNRLmlkPjApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NWLnB1c2godGVtcFNRKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U1YucHVzaChzcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNOZXcuc2FtcGxlVmFsdWVzPW5ld1NWO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBkZXRhaWxzTmV3fSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvbih0aGlzLnByb3BzLmRvY3VtZW50Um9vdCwgdGhpcy5zdGF0ZS51c2VySWQsIHByb2plY3RJZCwgdGhpcy5zdGF0ZS5pbnN0aXR1dGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb24odGhpcy5wcm9wcy5kb2N1bWVudFJvb3QsIHRoaXMuc3RhdGUudXNlcklkLCBwcm9qZWN0SWQsIHRoaXMuc3RhdGUuZGV0YWlscy5pbnN0aXR1dGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TGlzdCh1c2VySWQsIHByb2plY3RJZCkge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1hbGwtcHJvamVjdHM/dXNlcklkPVwiICsgdXNlcklkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIHJldHJpZXZpbmcgdGhlIHByb2plY3QgbGlzdC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9qZWN0TGlzdDogZGF0YX0pO1xuICAgICAgICAgICAgICAgIHZhciBwcm9qTGlzdCA9IHRoaXMuc3RhdGUucHJvamVjdExpc3Q7XG4gICAgICAgICAgICAgICAgcHJvakxpc3QudW5zaGlmdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZGV0YWlscykpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9qZWN0TGlzdDogcHJvakxpc3R9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VySWQ6IHVzZXJJZH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2plY3RJZDogXCJcIiArIHByb2plY3RJZH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdFN0YXRzKHByb2plY3RJZCkge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1wcm9qZWN0LXN0YXRzL1wiICsgcHJvamVjdElkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIHJldHJpZXZpbmcgcHJvamVjdCBzdGF0cy4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0czogZGF0YX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VyeUxpc3QoaW5zdGl0dXRpb25JZCkge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1hbGwtaW1hZ2VyeT9pbnN0aXR1dGlvbklkPVwiICsgaW5zdGl0dXRpb25JZClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHRoZSBpbWFnZXJ5IGxpc3QuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VyeUxpc3Q6IGRhdGF9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemF0aW9uKHRoaXMucHJvcHMuZG9jdW1lbnRSb290LCB0aGlzLnByb3BzLnVzZXJJZCwgdGhpcy5zdGF0ZS5kZXRhaWxzLmlkLCB0aGlzLnByb3BzLmluc3RpdHV0aW9uSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UGxvdExpc3QocHJvamVjdElkLCBtYXhQbG90cykge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1wcm9qZWN0LXBsb3RzL1wiICsgcHJvamVjdElkICsgXCIvXCIgKyBtYXhQbG90cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHBsb3QgbGlzdC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwbG90TGlzdDogZGF0YX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Bsb3RDZW50ZXJzKHByb2plY3RJZCwgbWF4UGxvdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Bsb3RDZW50ZXJzKHByb2plY3RJZCwgbWF4UGxvdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxvdExpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gTG9hZCB0aGUgY3VycmVudCBwcm9qZWN0IHBsb3RzXG4gICAgICAgICAgICB0aGlzLmdldFBsb3RMaXN0KHByb2plY3RJZCwgbWF4UGxvdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRHJhdyB0aGUgcGxvdCBzaGFwZXMgb24gdGhlIG1hcFxuICAgICAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcImZsYWdnZWRQbG90c1wiKTtcbiAgICAgICAgICAgIG1lcmNhdG9yLnJlbW92ZUxheWVyQnlUaXRsZSh0aGlzLnN0YXRlLm1hcENvbmZpZywgXCJhbmFseXplZFBsb3RzXCIpO1xuICAgICAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcInVuYW5hbHl6ZWRQbG90c1wiKTtcbiAgICAgICAgICAgIG1lcmNhdG9yLmFkZFBsb3RPdmVydmlld0xheWVycyh0aGlzLnN0YXRlLm1hcENvbmZpZywgdGhpcy5zdGF0ZS5wbG90TGlzdCwgdGhpcy5zdGF0ZS5kZXRhaWxzLnBsb3RTaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UHJvamVjdE1hcChwcm9qZWN0SWQpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgYmFzZW1hcFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXBDb25maWcgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwQ29uZmlnOiBtZXJjYXRvci5jcmVhdGVNYXAoXCJwcm9qZWN0LW1hcFwiLCBbMC4wLCAwLjBdLCAxLCB0aGlzLnN0YXRlLmltYWdlcnlMaXN0KX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVyY2F0b3Iuc2V0VmlzaWJsZUxheWVyKHRoaXMuc3RhdGUubWFwQ29uZmlnLCB0aGlzLnN0YXRlLmRldGFpbHMuYmFzZU1hcFNvdXJjZSk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuaWQgPT0gMCkge1xuICAgICAgICAgICAgLy8gRW5hYmxlIGRyYWdib3ggaW50ZXJhY3Rpb24gaWYgd2UgYXJlIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgICAgIHZhciBkaXNwbGF5RHJhZ0JveEJvdW5kcyA9IGZ1bmN0aW9uIChkcmFnQm94KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dGVudCA9IGRyYWdCb3guZ2V0R2VvbWV0cnkoKS5jbG9uZSgpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKS5nZXRFeHRlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyBGSVhNRTogQ2FuIHdlIGp1c3Qgc2V0IHRoaXMubG9uTWluL2xvbk1heC9sYXRNaW4vbGF0TWF4IGluc3RlYWQ/XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb24tbWluXCIpLnZhbHVlID0gZXh0ZW50WzBdO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF0LW1pblwiKS52YWx1ZSA9IGV4dGVudFsxXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvbi1tYXhcIikudmFsdWUgPSBleHRlbnRbMl07XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXQtbWF4XCIpLnZhbHVlID0gZXh0ZW50WzNdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1lcmNhdG9yLnJlbW92ZUxheWVyQnlUaXRsZSh0aGlzLnN0YXRlLm1hcENvbmZpZywgXCJjdXJyZW50QU9JXCIpO1xuICAgICAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcImZsYWdnZWRQbG90c1wiKTtcbiAgICAgICAgICAgIG1lcmNhdG9yLnJlbW92ZUxheWVyQnlUaXRsZSh0aGlzLnN0YXRlLm1hcENvbmZpZywgXCJhbmFseXplZFBsb3RzXCIpO1xuICAgICAgICAgICAgbWVyY2F0b3IucmVtb3ZlTGF5ZXJCeVRpdGxlKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcInVuYW5hbHl6ZWRQbG90c1wiKTtcbiAgICAgICAgICAgIG1lcmNhdG9yLmRpc2FibGVEcmFnQm94RHJhdyh0aGlzLnN0YXRlLm1hcENvbmZpZyk7XG4gICAgICAgICAgICBtZXJjYXRvci5lbmFibGVEcmFnQm94RHJhdyh0aGlzLnN0YXRlLm1hcENvbmZpZywgZGlzcGxheURyYWdCb3hCb3VuZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRXh0cmFjdCBib3VuZGluZyBib3ggY29vcmRpbmF0ZXMgZnJvbSB0aGUgcHJvamVjdCBib3VuZGFyeSBhbmQgc2hvdyBvbiB0aGUgbWFwXG4gICAgICAgICAgICB2YXIgYm91bmRhcnlFeHRlbnQgPSBtZXJjYXRvci5wYXJzZUdlb0pzb24odGhpcy5zdGF0ZS5kZXRhaWxzLmJvdW5kYXJ5LCBmYWxzZSkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb25NaW46IGJvdW5kYXJ5RXh0ZW50WzBdfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXRNaW46IGJvdW5kYXJ5RXh0ZW50WzFdfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb25NYXg6IGJvdW5kYXJ5RXh0ZW50WzJdfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXRNYXg6IGJvdW5kYXJ5RXh0ZW50WzNdfSk7XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgYSBib3VuZGluZyBib3ggd2l0aCB0aGUgcHJvamVjdCdzIEFPSSBvbiB0aGUgbWFwIGFuZCB6b29tIHRvIGl0XG4gICAgICAgICAgICBtZXJjYXRvci5yZW1vdmVMYXllckJ5VGl0bGUodGhpcy5zdGF0ZS5tYXBDb25maWcsIFwiY3VycmVudEFPSVwiKTtcbiAgICAgICAgICAgIG1lcmNhdG9yLmFkZFZlY3RvckxheWVyKHRoaXMuc3RhdGUubWFwQ29uZmlnLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudEFPSVwiLFxuICAgICAgICAgICAgICAgIG1lcmNhdG9yLmdlb21ldHJ5VG9WZWN0b3JTb3VyY2UobWVyY2F0b3IucGFyc2VHZW9Kc29uKHRoaXMuc3RhdGUuZGV0YWlscy5ib3VuZGFyeSwgdHJ1ZSkpLFxuICAgICAgICAgICAgICAgIGNlb01hcFN0eWxlcy5wb2x5Z29uKTtcbiAgICAgICAgICAgIG1lcmNhdG9yLnpvb21NYXBUb0xheWVyKHRoaXMuc3RhdGUubWFwQ29uZmlnLCBcImN1cnJlbnRBT0lcIik7XG5cbiAgICAgICAgICAgIC8vIEZvcmNlIHJlbG9hZGluZyBvZiB0aGUgcGxvdExpc3RcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bsb3RMaXN0OiBudWxsfSk7XG5cbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHBsb3QgY2VudGVycyBvbiB0aGUgbWFwIChidXQgY29uc3RyYWluIHRvIDw9IDEwMCBwb2ludHMpXG4gICAgICAgICAgICB0aGlzLnNob3dQbG90Q2VudGVycyhwcm9qZWN0SWQsIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVVbm1hbmFnZWRDb21wb25lbnRzKHByb2plY3RJZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEVuYWJsZSB0aGUgaW5wdXQgZmllbGRzIHRoYXQgYXJlIGNvbm5lY3RlZCB0byB0aGUgcmFkaW8gYnV0dG9ucyBpZiB0aGVpciB2YWx1ZXMgYXJlIG5vdCBudWxsXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzLnBsb3REaXN0cmlidXRpb24gPT0gXCJncmlkZGVkXCIpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5lbmFibGVfZWxlbWVudChcInBsb3Qtc3BhY2luZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuc2FtcGxlRGlzdHJpYnV0aW9uID09IFwiZ3JpZGRlZFwiKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuZW5hYmxlX2VsZW1lbnQoXCJzYW1wbGUtcmVzb2x1dGlvblwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW1hZ2VyeUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzTmV3ID0gdGhpcy5zdGF0ZS5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIGRldGFpbHNOZXcuYmFzZU1hcFNvdXJjZSA9IHRoaXMuc3RhdGUuZGV0YWlscy5iYXNlTWFwU291cmNlIHx8IHRoaXMuc3RhdGUuaW1hZ2VyeUxpc3RbMF0udGl0bGU7XG4gICAgICAgICAgICAgICAgLy8gSWYgYmFzZU1hcFNvdXJjZSBpc24ndCBwcm92aWRlZCBieSB0aGUgcHJvamVjdCwganVzdCB1c2UgdGhlIGZpcnN0IGVudHJ5IGluIHRoZSBpbWFnZXJ5TGlzdFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9qZWN0TWFwKHByb2plY3RJZClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIERyYXcgYSBtYXAgd2l0aCB0aGUgcHJvamVjdCBBT0kgYW5kIGEgc2FtcGxpbmcgb2YgaXRzIHBsb3RzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dE5hbWUoc3VydmV5UXVlc3Rpb24sIGV2ZW50KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZUVudHJ5TmV3ID0gdGhpcy5zdGF0ZS5uZXdWYWx1ZUVudHJ5O1xuICAgICAgICBpZiAobmV3VmFsdWVFbnRyeU5ld1tzdXJ2ZXlRdWVzdGlvbl0pIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlRW50cnlOZXdbc3VydmV5UXVlc3Rpb25dLmFuc3dlciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld1ZhbHVlRW50cnk6bmV3VmFsdWVFbnRyeU5ld30pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld1ZhbHVlRW50cnk6e2lkOi0xLGFuc3dlcjogXCJcIiwgY29sb3I6IFwiIzAwMDAwMFwifX0pO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q29sb3Ioc3VydmV5UXVlc3Rpb24sIGV2ZW50KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZUVudHJ5TmV3ID0gdGhpcy5zdGF0ZS5uZXdWYWx1ZUVudHJ5O1xuICAgICAgICBuZXdWYWx1ZUVudHJ5TmV3W3N1cnZleVF1ZXN0aW9uXS5jb2xvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdWYWx1ZUVudHJ5OiBuZXdWYWx1ZUVudHJ5TmV3fSk7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dFBhcmVudChldmVudCkge1xuICAgICAgICB2YXIgZGV0YWlsc05ldyA9IHRoaXMuc3RhdGUuZGV0YWlscztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsczogZGV0YWlsc05ld30pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB2YXIgZGV0YWlsc05ldyA9IHRoaXMuc3RhdGUuZGV0YWlscztcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09IFwicHJvamVjdC1uYW1lXCIpIHtcbiAgICAgICAgICAgIGRldGFpbHNOZXcubmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPSBcInByb2plY3QtZGVzY3JpcHRpb25cIikge1xuICAgICAgICAgICAgZGV0YWlsc05ldy5kZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBkZXRhaWxzTmV3fSk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBoZWFkZXI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2plY3RJZCA9PSBcIjBcIikge1xuICAgICAgICAgICAgaGVhZGVyID0gPGgxPkNyZWF0ZSBQcm9qZWN0PC9oMT5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlciA9IDxoMT5SZXZpZXcgUHJvamVjdDwvaDE+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LWRlc2lnblwiIGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy04IGJvcmRlciBiZy1saWdodGdyYXkgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya2dyZWVuIG1iLTMgbm8tY29udGFpbmVyLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0U3RhdHMgcHJvamVjdD17dGhpcy5zdGF0ZX0gcHJvamVjdF9zdGF0c192aXNpYmlsaXR5PXt0aGlzLnByb3BzLnByb2plY3Rfc3RhdHNfdmlzaWJpbGl0eX0vPlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0RGVzaWduRm9ybSBwcm9qZWN0SWQ9e3RoaXMucHJvcHMucHJvamVjdElkfSBwcm9qZWN0PXt0aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0X3RlbXBsYXRlX3Zpc2liaWxpdHk9e3RoaXMucHJvcHMucHJvamVjdF90ZW1wbGF0ZV92aXNpYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9qZWN0VGVtcGxhdGU9e3RoaXMuc2V0UHJvamVjdFRlbXBsYXRlfSBzZXRQcml2YWN5TGV2ZWw9e3RoaXMuc2V0UHJpdmFjeUxldmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW1wbGVEaXN0cmlidXRpb249e3RoaXMuc2V0U2FtcGxlRGlzdHJpYnV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRTdXJ2ZXlRdWVzdGlvblJvdz17dGhpcy5hZGRTdXJ2ZXlRdWVzdGlvblJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFzZU1hcFNvdXJjZT17dGhpcy5zZXRCYXNlTWFwU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQbG90RGlzdHJpYnV0aW9uPXt0aGlzLnNldFBsb3REaXN0cmlidXRpb259IHNldFBsb3RTaGFwZT17dGhpcy5zZXRQbG90U2hhcGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN1cnZleVF1ZXN0aW9uPXt0aGlzLmFkZFN1cnZleVF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BvU29ydD17dGhpcy50b3BvU29ydH0gZ2V0UGFyZW50U3VydmV5UXVlc3Rpb25zPXt0aGlzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uc30gZ2V0UGFyZW50U3VydmV5UXVlc3Rpb25BbnN3ZXJzPXt0aGlzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3VydmV5UXVlc3Rpb249e3RoaXMucmVtb3ZlU3VydmV5UXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVN1cnZleVF1ZXN0aW9uUm93PXt0aGlzLnJlbW92ZVN1cnZleVF1ZXN0aW9uUm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENvbG9yPXt0aGlzLmhhbmRsZUlucHV0Q29sb3J9IGhhbmRsZUlucHV0TmFtZT17dGhpcy5oYW5kbGVJbnB1dE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZUlucHV0UGFyZW50PXt0aGlzLmhhbmRsZUlucHV0UGFyZW50fS8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RNYW5hZ2VtZW50IHByb2plY3Q9e3RoaXMuc3RhdGV9IHByb2plY3RJZD17dGhpcy5wcm9wcy5wcm9qZWN0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUdlb0Rhc2g9e3RoaXMuY29uZmlndXJlR2VvRGFzaH0gZG93bmxvYWRQbG90RGF0YT17dGhpcy5kb3dubG9hZFBsb3REYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFNhbXBsZURhdGE9e3RoaXMuZG93bmxvYWRTYW1wbGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VBdmFpbGFiaWxpdHk9e3RoaXMuY2hhbmdlQXZhaWxhYmlsaXR5fSBjcmVhdGVQcm9qZWN0PXt0aGlzLmNyZWF0ZVByb2plY3R9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvamVjdFN0YXRzKHByb3BzKSB7XG4gICAgdmFyIHByb2plY3QgPSBwcm9wcy5wcm9qZWN0O1xuICAgIGlmIChwcm9qZWN0LnN0YXRzICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3Qtc3RhdHNcIiBjbGFzc05hbWU9e1wiY29sIFwiICsgcHJvcHMucHJvamVjdF9zdGF0c192aXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tc20gYnRuLWJsb2NrIG1iLTFcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3Byb2plY3Qtc3RhdHMtY29sbGFwc2VcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicHJvamVjdC1zdGF0cy1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBTdGF0c1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBjb2wteGwtMTJcIiBpZD1cInByb2plY3Qtc3RhdHMtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NZW1iZXJzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9qZWN0LnN0YXRzLm1lbWJlcnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNvbnRyaWJ1dG9yczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvamVjdC5zdGF0cy5jb250cmlidXRvcnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsIFBsb3RzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9qZWN0LmRldGFpbHMubnVtUGxvdHMgfHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGF0ZSBDcmVhdGVkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9qZWN0LmRhdGVDcmVhdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GbGFnZ2VkIFBsb3RzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9qZWN0LnN0YXRzLmZsYWdnZWRQbG90c308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGF0ZSBQdWJsaXNoZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2plY3QuZGF0ZVB1Ymxpc2hlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QW5hbHl6ZWQgUGxvdHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2plY3Quc3RhdHMuYW5hbHl6ZWRQbG90c308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGF0ZSBDbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2plY3QuZGF0ZUNsb3NlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VW5hbmFseXplZCBQbG90czwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvamVjdC5zdGF0cy51bmFuYWx5emVkUGxvdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGUgQXJjaGl2ZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2plY3QuZGF0ZUFyY2hpdmVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb2plY3REZXNpZ25Gb3JtKHByb3BzKSB7XG4gICAgdmFyIGFkZFN1cnZleVF1ZXN0aW9uQnV0dG9uO1xuICAgIGlmIChwcm9wcy5wcm9qZWN0SWQgPT0gXCIwXCIpIHtcbiAgICAgICAgYWRkU3VydmV5UXVlc3Rpb25CdXR0b24gPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBodG1sRm9yPVwidmFsdWUtU1FcIj5OZXcgUXVlc3Rpb246PC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFkZC1zYW1wbGUtdmFsdWUtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3VydmV5UXVlc3Rpb25UZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdC5uZXdTdXJ2ZXlRdWVzdGlvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdmFsdWU9XCJBZGQgU3VydmV5IFF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmFkZFN1cnZleVF1ZXN0aW9ufS8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBpZD1cInByb2plY3QtZGVzaWduLWZvcm1cIiBjbGFzc05hbWU9XCJweC0yIHBiLTJcIiBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgYWN0aW9uPXtwcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9jcmVhdGUtcHJvamVjdFwifVxuICAgICAgICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgICAgICAgPFByb2plY3RUZW1wbGF0ZVZpc2liaWxpdHkgcHJvamVjdD17cHJvcHMucHJvamVjdH0gc2V0UHJvamVjdFRlbXBsYXRlPXtwcm9wcy5zZXRQcm9qZWN0VGVtcGxhdGV9Lz5cbiAgICAgICAgICAgIDxQcm9qZWN0SW5mbyBwcm9qZWN0PXtwcm9wcy5wcm9qZWN0fSBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPFByb2plY3RWaXNpYmlsaXR5IHByb2plY3Q9e3Byb3BzLnByb2plY3R9IHNldFByaXZhY3lMZXZlbD17cHJvcHMuc2V0UHJpdmFjeUxldmVsfS8+XG4gICAgICAgICAgICA8UHJvamVjdEFPSSBwcm9qZWN0SWQ9e3Byb3BzLnByb2plY3RJZH0gcHJvamVjdD17cHJvcHMucHJvamVjdH0vPlxuICAgICAgICAgICAgPFByb2plY3RJbWFnZXJ5IHByb2plY3Q9e3Byb3BzLnByb2plY3R9IHNldEJhc2VNYXBTb3VyY2U9e3Byb3BzLnNldEJhc2VNYXBTb3VyY2V9Lz5cbiAgICAgICAgICAgIDxQbG90RGVzaWduIHByb2plY3Q9e3Byb3BzLnByb2plY3R9IHNldFBsb3REaXN0cmlidXRpb249e3Byb3BzLnNldFBsb3REaXN0cmlidXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQbG90U2hhcGU9e3Byb3BzLnNldFBsb3RTaGFwZX0vPlxuICAgICAgICAgICAgPFNhbXBsZURlc2lnbiBwcm9qZWN0PXtwcm9wcy5wcm9qZWN0fSBzZXRTYW1wbGVEaXN0cmlidXRpb249e3Byb3BzLnNldFNhbXBsZURpc3RyaWJ1dGlvbn0vPlxuICAgICAgICAgICAgPFN1cnZleURlc2lnbiBwcm9qZWN0PXtwcm9wcy5wcm9qZWN0fSBwcm9qZWN0SWQ9e3Byb3BzLnByb2plY3RJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3VydmV5UXVlc3Rpb25Sb3c9e3Byb3BzLmFkZFN1cnZleVF1ZXN0aW9uUm93fSB0b3BvU29ydD17cHJvcHMudG9wb1NvcnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBhcmVudFN1cnZleVF1ZXN0aW9ucz17cHJvcHMuZ2V0UGFyZW50U3VydmV5UXVlc3Rpb25zfSBnZXRQYXJlbnRTdXJ2ZXlRdWVzdGlvbkFuc3dlcnM9e3Byb3BzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3VydmV5UXVlc3Rpb249e3Byb3BzLnJlbW92ZVN1cnZleVF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTdXJ2ZXlRdWVzdGlvblJvdz17cHJvcHMucmVtb3ZlU3VydmV5UXVlc3Rpb25Sb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q29sb3I9e3Byb3BzLmhhbmRsZUlucHV0Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TmFtZT17cHJvcHMuaGFuZGxlSW5wdXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dFBhcmVudD17cHJvcHMuaGFuZGxlSW5wdXRQYXJlbnR9IGFkZFN1cnZleVF1ZXN0aW9uQnV0dG9uPXthZGRTdXJ2ZXlRdWVzdGlvbkJ1dHRvbn0vPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0VGVtcGxhdGVWaXNpYmlsaXR5KHByb3BzKSB7XG4gICAgdmFyIHByb2plY3QgPSBwcm9wcy5wcm9qZWN0O1xuICAgIGlmIChwcm9qZWN0LnByb2plY3RMaXN0ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvdyBcIiArIHByb3BzLnByb2plY3RfdGVtcGxhdGVfdmlzaWJpbGl0eX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlciBweC0wXCI+VXNlIFByb2plY3QgVGVtcGxhdGUgKE9wdGlvbmFsKTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LXRlbXBsYXRlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgaHRtbEZvcj1cInByb2plY3QtdGVtcGxhdGVcIj5TZWxlY3QgUHJvamVjdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgaWQ9XCJwcm9qZWN0LXRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9qZWN0LXRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxXCIgdmFsdWU9e3Byb2plY3QudGVtcGxhdGVJZH0gb25DaGFuZ2U9e3Byb3BzLnNldFByb2plY3RUZW1wbGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdExpc3QubWFwKChwcm9qLHVpZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dWlkfSB2YWx1ZT17cHJvai5pZH0+e3Byb2oubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxzcGFuPjwvc3Bhbj4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvamVjdEluZm8ocHJvcHMpIHtcbiAgICB2YXIgcHJvamVjdCA9IHByb3BzLnByb2plY3Q7XG4gICAgaWYgKHByb2plY3QuZGV0YWlscyAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgcHgtMFwiPlByb2plY3QgSW5mbzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBodG1sRm9yPVwicHJvamVjdC1uYW1lXCI+TmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIiBkZWZhdWx0VmFsdWU9e3Byb2plY3QuZGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBodG1sRm9yPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIGlkPVwicHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LmRldGFpbHMuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoPHNwYW4+PC9zcGFuPik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBQcm9qZWN0VmlzaWJpbGl0eShwcm9wcykge1xuICAgIGlmIChwcm9wcy5wcm9qZWN0LmRldGFpbHMgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyIHB4LTBcIj5Qcm9qZWN0IFZpc2liaWxpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UHJpdmFjeSBMZXZlbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LXZpc2liaWxpdHlcIiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwicHJpdmFjeS1wdWJsaWNcIiBuYW1lPVwicHJpdmFjeS1sZXZlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwicHVibGljXCIgY2hlY2tlZD17cHJvcHMucHJvamVjdC5kZXRhaWxzLnByaXZhY3lMZXZlbCA9PT0gJ3B1YmxpYyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBwcm9wcy5zZXRQcml2YWN5TGV2ZWwoJ3B1YmxpYycpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgc21hbGxcIiBodG1sRm9yPVwicHJpdmFjeS1wdWJsaWNcIj5QdWJsaWM6IDxpPkFsbCBVc2VyczwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwicHJpdmFjeS1wcml2YXRlXCIgbmFtZT1cInByaXZhY3ktbGV2ZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInByaXZhdGVcIiBvbkNoYW5nZT17KCkgPT4gcHJvcHMuc2V0UHJpdmFjeUxldmVsKCdwcml2YXRlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLnByb2plY3QuZGV0YWlscy5wcml2YWN5TGV2ZWwgPT09ICdwcml2YXRlJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIHNtYWxsXCIgaHRtbEZvcj1cInByaXZhY3ktcHJpdmF0ZVwiPlByaXZhdGU6IDxpPkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkbWluczwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwicHJpdmFjeS1pbnN0aXR1dGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml2YWN5LWxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJpbnN0aXR1dGlvblwiIG9uQ2hhbmdlPXsoKSA9PiBwcm9wcy5zZXRQcml2YWN5TGV2ZWwoJ2luc3RpdHV0aW9uJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLnByb2plY3QuZGV0YWlscy5wcml2YWN5TGV2ZWwgPT09ICdpbnN0aXR1dGlvbid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBzbWFsbFwiIGh0bWxGb3I9XCJwcml2YWN5LWluc3RpdHV0aW9uXCI+SW5zdGl0dXRpb246IDxpPkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnM8L2k+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBpZD1cInByaXZhY3ktaW52aXRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml2YWN5LWxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJpbnZpdGF0aW9uXCIgb25DaGFuZ2U9eygpID0+IHByb3BzLnNldFByaXZhY3lMZXZlbCgnaW52aXRhdGlvbicpfSBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5wcm9qZWN0LmRldGFpbHMucHJpdmFjeUxldmVsID09PSAnaW52aXRhdGlvbid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBzbWFsbFwiIGh0bWxGb3I9XCJwcml2YWN5LWludml0YXRpb25cIj5JbnZpdGF0aW9uOiA8aT5Db21pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29vbjwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoPHNwYW4+PC9zcGFuPik7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RBT0kocHJvcHMpIHtcbiAgICB2YXIgcHJvamVjdCA9IHByb3BzLnByb2plY3Q7XG4gICAgdmFyIG1zZyA9IFwiXCI7XG4gICAgaWYgKHByb3BzLnByb2plY3RJZCA9PSBcIjBcIikge1xuICAgICAgICBtc2cgPSA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgc21hbGwgdGV4dC1jZW50ZXIgbWItMlwiPkhvbGQgQ1RSTCBhbmQgY2xpY2stYW5kLWRyYWcgYSBib3VuZGluZyBib3ggb24gdGhlIG1hcDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgcHgtMFwiPlByb2plY3QgQU9JPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdC1hb2lcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3QtbWFwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHttc2d9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJsYXQtbWF4XCIgbmFtZT1cImxhdC1tYXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9qZWN0LmxhdE1heH0gcGxhY2Vob2xkZXI9XCJOb3J0aFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG1pbj1cIi05MC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjkwLjBcIiBzdGVwPVwiYW55XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJsb24tbWluXCIgbmFtZT1cImxvbi1taW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9qZWN0Lmxvbk1pbn0gcGxhY2Vob2xkZXI9XCJXZXN0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbWluPVwiLTE4MC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjE4MC4wXCIgc3RlcD1cImFueVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgdHlwZT1cIm51bWJlclwiIGlkPVwibG9uLW1heFwiIG5hbWU9XCJsb24tbWF4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvamVjdC5sb25NYXh9IHBsYWNlaG9sZGVyPVwiRWFzdFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG1pbj1cIi0xODAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxODAuMFwiIHN0ZXA9XCJhbnlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cImxhdC1taW5cIiBuYW1lPVwibGF0LW1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb2plY3QubGF0TWlufSBwbGFjZWhvbGRlcj1cIlNvdXRoXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbWluPVwiLTkwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiOTAuMFwiIHN0ZXA9XCJhbnlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdEltYWdlcnkocHJvcHMpIHtcbiAgICB2YXIgcHJvamVjdCA9IHByb3BzLnByb2plY3Q7XG4gICAgaWYgKHByb2plY3QuaW1hZ2VyeUxpc3QgIT0gbnVsbCkge1xuaWYocHJvamVjdC5kZXRhaWxzLmJhc2VNYXBTb3VyY2U9PW51bGwpe1xuICAgIHByb2plY3QuZGV0YWlscy5iYXNlTWFwU291cmNlPVwiXCI7XG59XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlciBweC0wXCI+UHJvamVjdCBJbWFnZXJ5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3QtaW1hZ2VyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgaHRtbEZvcj1cImJhc2UtbWFwLXNvdXJjZVwiPkJhc2VtYXAgU291cmNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBpZD1cImJhc2UtbWFwLXNvdXJjZVwiIG5hbWU9XCJiYXNlLW1hcC1zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3QuZGV0YWlscy5iYXNlTWFwU291cmNlfSBvbkNoYW5nZT17cHJvcHMuc2V0QmFzZU1hcFNvdXJjZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5pbWFnZXJ5TGlzdC5tYXAoKGltYWdlcnksdWlkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dWlkfSB2YWx1ZT17aW1hZ2VyeS50aXRsZX0+e2ltYWdlcnkudGl0bGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxzcGFuPjwvc3Bhbj4pO1xuICAgIH1cbn1cblxuY2xhc3MgUGxvdERlc2lnbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH07XG5cbiAgICBlbmNvZGVJbWFnZUZpbGVBc1VSTChldmVudCkge1xuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgYmFzZTY0RGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVTVUxUJywgYmFzZTY0RGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHByb2plY3QgPSB0aGlzLnByb3BzLnByb2plY3Q7XG4gICAgICAgIHZhciBwbG90c2hhcGUgPSBcIlwiO1xuICAgICAgICB2YXIgdHh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHByb2plY3QuZGV0YWlscyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5kZXRhaWxzLnBsb3RTaGFwZSA9PSAnY2lyY2xlJykge1xuICAgICAgICAgICAgICAgIHR4dCA9ICdEaWFtZXRlciAobSknO1xuICAgICAgICAgICAgfSBlbHNlIHR4dCA9ICdXaWR0aCAobSknO1xuICAgICAgICAgICAgcGxvdHNoYXBlID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxwIGh0bWxGb3I9XCJwbG90LXNpemVcIj57dHh0fTwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cInBsb3Qtc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbG90LXNpemVcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBtaW49XCIwLjBcIiBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9qZWN0LmRldGFpbHMucGxvdFNpemV9Lz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgcHgtMFwiPlBsb3QgRGVzaWduPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbG90LWRlc2lnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbG90LWRlc2lnbi1jb2wxXCIgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U3BhdGlhbCBEaXN0cmlidXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBpZD1cInBsb3QtZGlzdHJpYnV0aW9uLXJhbmRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbG90LWRpc3RyaWJ1dGlvblwiIHZhbHVlPVwicmFuZG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuc2V0UGxvdERpc3RyaWJ1dGlvbigncmFuZG9tJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJvamVjdC5kZXRhaWxzLnBsb3REaXN0cmlidXRpb24gPT09ICdyYW5kb20nfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGxvdC1kaXN0cmlidXRpb24tcmFuZG9tXCI+UmFuZG9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBpZD1cInBsb3QtZGlzdHJpYnV0aW9uLWdyaWRkZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxvdC1kaXN0cmlidXRpb25cIiBkZWZhdWx0VmFsdWU9XCJncmlkZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuc2V0UGxvdERpc3RyaWJ1dGlvbignZ3JpZGRlZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnByb2plY3QuZGV0YWlscy5wbG90RGlzdHJpYnV0aW9uID09PSAnZ3JpZGRlZCd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwbG90LWRpc3RyaWJ1dGlvbi1ncmlkZGVkXCI+R3JpZGRlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJwbG90LWRpc3RyaWJ1dGlvbi1jc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxvdC1kaXN0cmlidXRpb25cIiBkZWZhdWx0VmFsdWU9XCJjc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRQbG90RGlzdHJpYnV0aW9uKCdjc3YnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5wcm9qZWN0LmRldGFpbHMucGxvdERpc3RyaWJ1dGlvbiA9PT0gJ2Nzdid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tYmxvY2sgYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tZmlsZSBweS0wIG15LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbS1jc3YtdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5VcGxvYWQgQ1NWPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwidGV4dC9jc3ZcIiBpZD1cInBsb3QtZGlzdHJpYnV0aW9uLWNzdi1maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVuY29kZUltYWdlRmlsZUFzVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19IGRpc2FibGVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwicGxvdC1kaXN0cmlidXRpb24tc2hwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsb3QtZGlzdHJpYnV0aW9uXCIgZGVmYXVsdFZhbHVlPVwic2hwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuc2V0UGxvdERpc3RyaWJ1dGlvbignc2hwJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJvamVjdC5kZXRhaWxzLnBsb3REaXN0cmlidXRpb24gPT09ICdzaHAnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLWZpbGUgcHktMCBteS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tc2hwLXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VXBsb2FkIFNIUDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImFwcGxpY2F0aW9uL3ppcFwiIGlkPVwicGxvdC1kaXN0cmlidXRpb24tc2hwLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW5jb2RlSW1hZ2VGaWxlQXNVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0gZGlzYWJsZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicGxvdC1kZXNpZ24tdGV4dFwiPkRlc2NyaXB0aW9uIGFib3V0IHJhbmRvbTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBodG1sRm9yPVwibnVtLXBsb3RzXCI+TnVtYmVyIG9mIHBsb3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtLXBsb3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bS1wbG90c1wiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG1pbj1cIjBcIiBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvamVjdC5kZXRhaWxzID09IG51bGwgPyBcIlwiIDogcHJvamVjdC5kZXRhaWxzLm51bVBsb3RzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaHRtbEZvcj1cInBsb3Qtc3BhY2luZ1wiPlBsb3Qgc3BhY2luZyAobSk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwbG90LXNwYWNpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxvdC1zcGFjaW5nXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbWluPVwiMC4wXCIgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvamVjdC5kZXRhaWxzID09IG51bGwgPyBcIlwiIDogcHJvamVjdC5kZXRhaWxzLnBsb3RTcGFjaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxvdC1kZXNpZ24tY29sMlwiIGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBsb3QgU2hhcGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBpZD1cInBsb3Qtc2hhcGUtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsb3Qtc2hhcGVcIiBkZWZhdWx0VmFsdWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRQbG90U2hhcGUoJ2NpcmNsZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnByb2plY3QuZGV0YWlscy5wbG90U2hhcGUgPT09ICdjaXJjbGUnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGxvdC1zaGFwZS1jaXJjbGVcIj5DaXJjbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwicGxvdC1zaGFwZS1zcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxvdC1zaGFwZVwiIGRlZmF1bHRWYWx1ZT1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnByb3BzLnNldFBsb3RTaGFwZSgnc3F1YXJlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJvamVjdC5kZXRhaWxzLnBsb3RTaGFwZSA9PT0gJ3NxdWFyZSd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwbG90LXNoYXBlLXNxdWFyZVwiPlNxdWFyZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbG90c2hhcGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoPHNwYW4+PC9zcGFuPik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFNhbXBsZURlc2lnbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfTtcbiAgICBlbmNvZGVJbWFnZUZpbGVBc1VSTChldmVudCkge1xuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgYmFzZTY0RGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVTVUxUJywgYmFzZTY0RGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgICByZW5kZXIoKVxuICAgIHtcbiAgICAgICAgdmFyIHByb2plY3QgPSB0aGlzLnByb3BzLnByb2plY3Q7XG4gICAgICAgIGlmIChwcm9qZWN0LmRldGFpbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2FtcGxlLWRlc2lnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgcHgtMFwiPlNhbXBsZSBEZXNpZ248L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TcGF0aWFsIERpc3RyaWJ1dGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJzYW1wbGUtZGlzdHJpYnV0aW9uLXJhbmRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtcGxlLWRpc3RyaWJ1dGlvblwiIGRlZmF1bHRWYWx1ZT1cInJhbmRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRTYW1wbGVEaXN0cmlidXRpb24oJ3JhbmRvbScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5wcm9qZWN0LmRldGFpbHMuc2FtcGxlRGlzdHJpYnV0aW9uID09PSAncmFuZG9tJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic2FtcGxlLWRpc3RyaWJ1dGlvbi1yYW5kb21cIj5SYW5kb208L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwic2FtcGxlLWRpc3RyaWJ1dGlvbi1ncmlkZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYW1wbGUtZGlzdHJpYnV0aW9uXCIgZGVmYXVsdFZhbHVlPVwiZ3JpZGRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRTYW1wbGVEaXN0cmlidXRpb24oJ2dyaWRkZWQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJvamVjdC5kZXRhaWxzLnNhbXBsZURpc3RyaWJ1dGlvbiA9PT0gJ2dyaWRkZWQnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzYW1wbGUtZGlzdHJpYnV0aW9uLWdyaWRkZWRcIj5HcmlkZGVkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBpZD1cInNhbXBsZS1kaXN0cmlidXRpb24tY3N2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYW1wbGUtZGlzdHJpYnV0aW9uXCIgZGVmYXVsdFZhbHVlPVwiY3N2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnByb3BzLnNldFNhbXBsZURpc3RyaWJ1dGlvbignY3N2Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnByb2plY3QuZGV0YWlscy5zYW1wbGVEaXN0cmlidXRpb24gPT09ICdjc3YnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1ibG9jayBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1maWxlIHB5LTAgbXktMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNhbXBsZS1jdXN0b20tY3N2LXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlVwbG9hZCBDU1Y8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwidGV4dC9jc3ZcIiBpZD1cInNhbXBsZS1kaXN0cmlidXRpb24tY3N2LWZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVuY29kZUltYWdlRmlsZUFzVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fSBkaXNhYmxlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJzYW1wbGUtZGlzdHJpYnV0aW9uLXNocFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtcGxlLWRpc3RyaWJ1dGlvblwiIGRlZmF1bHRWYWx1ZT1cInNocFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRTYW1wbGVEaXN0cmlidXRpb24oJ3NocCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5wcm9qZWN0LmRldGFpbHMuc2FtcGxlRGlzdHJpYnV0aW9uID09PSAnc2hwJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tYmxvY2sgYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tZmlsZSBweS0wIG15LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzYW1wbGUtY3VzdG9tLXNocC11cGxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5VcGxvYWQgU0hQPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImFwcGxpY2F0aW9uL3ppcFwiIGlkPVwic2FtcGxlLWRpc3RyaWJ1dGlvbi1zaHAtZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW5jb2RlSW1hZ2VGaWxlQXNVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19IGRpc2FibGVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNhbXBsZS1kZXNpZ24tdGV4dFwiPkRlc2NyaXB0aW9uIGFib3V0IHJhbmRvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBodG1sRm9yPVwic2FtcGxlcy1wZXItcGxvdFwiPlNhbXBsZXMgcGVyIHBsb3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgdHlwZT1cIm51bWJlclwiIGlkPVwic2FtcGxlcy1wZXItcGxvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtcGxlcy1wZXItcGxvdFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG1pbj1cIjBcIiBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb2plY3QuZGV0YWlscy5zYW1wbGVzUGVyUGxvdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGh0bWxGb3I9XCJzYW1wbGUtcmVzb2x1dGlvblwiPlNhbXBsZSByZXNvbHV0aW9uIChtKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJzYW1wbGUtcmVzb2x1dGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtcGxlLXJlc29sdXRpb25cIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBtaW49XCIwLjBcIiBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvamVjdC5kZXRhaWxzLnNhbXBsZVJlc29sdXRpb259IGRpc2FibGVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gKDxzcGFuPjwvc3Bhbj4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gU3VydmV5RGVzaWduKHByb3BzKXtcbiAgICBpZiAocHJvcHMucHJvamVjdC5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGFuc3dlcl9zZWxlY3QgPSBcIlwiO1xuICAgICAgICB2YXIgZHJvcGRvd25zO1xuICAgICAgICB2YXIgYW5zd2VycyA9IHByb3BzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2Vycyhwcm9wcy5wcm9qZWN0LmRldGFpbHMuc2FtcGxlVmFsdWVzKTtcbiAgICAgICAgaWYgKGFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYW5zd2VyX3NlbGVjdCA9IHByb3BzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2Vycyhwcm9wcy5wcm9qZWN0LmRldGFpbHMuc2FtcGxlVmFsdWVzKS5tYXAoKHBhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2VyLCB1aWQpID0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3VpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJlbnRTdXJ2ZXlRdWVzdGlvbkFuc3dlci5pZH0+e3BhcmVudFN1cnZleVF1ZXN0aW9uQW5zd2VyLmFuc3dlcn08L29wdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZihwcm9wcy5wcm9qZWN0SWQ9PVwiMFwiKSB7XG5cbiAgICAgICAgICAgIGRyb3Bkb3ducyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsdWUtcGFyZW50XCI+UGFyZW50IFF1ZXN0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ2YWx1ZS1wYXJlbnRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgc2l6ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLmhhbmRsZUlucHV0UGFyZW50KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnByb2plY3QuZGV0YWlscy5zYW1wbGVWYWx1ZXMpLm1hcCgocGFyZW50U3VydmV5UXVlc3Rpb24sIHVpZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJlbnRTdXJ2ZXlRdWVzdGlvbi5pZH0+e3BhcmVudFN1cnZleVF1ZXN0aW9uLnF1ZXN0aW9ufTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsdWUtYW5zd2VyXCI+UGFyZW50IEFuc3dlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidmFsdWUtYW5zd2VyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHNpemU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5oYW5kbGVJbnB1dFBhcmVudChlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFueTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbnN3ZXJfc2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdXJ2ZXktZGVzaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyIHB4LTBcIj5TdXJ2ZXkgRGVzaWduPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdXJ2ZXlRdWVzdGlvblRyZWUgcHJvamVjdD17cHJvcHMucHJvamVjdH0gcHJvamVjdElkPXtwcm9wcy5wcm9qZWN0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN1cnZleVF1ZXN0aW9uUm93PXtwcm9wcy5hZGRTdXJ2ZXlRdWVzdGlvblJvd30gdG9wb1NvcnQ9e3Byb3BzLnRvcG9Tb3J0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnRTdXJ2ZXlRdWVzdGlvbnM9e3Byb3BzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3VydmV5UXVlc3Rpb249e3Byb3BzLnJlbW92ZVN1cnZleVF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTdXJ2ZXlRdWVzdGlvblJvdz17cHJvcHMucmVtb3ZlU3VydmV5UXVlc3Rpb25Sb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q29sb3I9e3Byb3BzLmhhbmRsZUlucHV0Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TmFtZT17cHJvcHMuaGFuZGxlSW5wdXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dFBhcmVudD17cHJvcHMuaGFuZGxlSW5wdXRQYXJlbnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYWRkU3VydmV5UXVlc3Rpb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybig8c3Bhbj48L3NwYW4+KTtcbiAgICB9XG59XG5jbGFzcyBTdXJ2ZXlRdWVzdGlvblRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9O1xuICAgIGdldEN1cnJlbnQgPSAobm9kZSkgPT4gdGhpcy5wcm9wcy5wcm9qZWN0LmRldGFpbHMuc2FtcGxlVmFsdWVzLmZpbHRlcihjTm9kZSA9PiBjTm9kZS5wYXJlbnRfcXVlc3Rpb24gPT0gbm9kZSkubWFwKChjTm9kZSx1aWQpID0+IChcbiAgICAgICAgICAgIDx1bCAga2V5PXtgbm9kZV8ke3VpZH1gfSBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCJ9fT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgIDxTdXJ2ZXlRdWVzdGlvbiBwcm9wPXt0aGlzLnByb3BzfSBzdXJ2ZXlRdWVzdGlvbj17Y05vZGV9Lz5cbiAgICAgICAge3RoaXMuZ2V0Q3VycmVudChjTm9kZS5pZCl9XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPC91bD5cbiAgICApKVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHByb2plY3QgPSB0aGlzLnByb3BzLnByb2plY3Q7XG4gICBpZiAocHJvamVjdC5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q3VycmVudCgtMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gU3VydmV5UXVlc3Rpb24ocHJvcGVydGllcykge1xuICAgIHZhciBwcm9wcz1wcm9wZXJ0aWVzLnByb3A7XG4gICAgdmFyIHByb2plY3QgPSBwcm9wcy5wcm9qZWN0O1xuICAgIGlmKHByb3BlcnRpZXMuc3VydmV5UXVlc3Rpb24uYW5zd2Vycz09bnVsbCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VycyBudWxsXCIpO1xuICAgIH1cbiAgICBpZiAocHJvamVjdC5kZXRhaWxzICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbXBsZS12YWx1ZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXIgcHgtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZVN1cnZleVF1ZXN0aW9uQnV0dG9uIHByb2plY3RJZD17cHJvcHMucHJvamVjdElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3VydmV5UXVlc3Rpb249e3Byb3BzLnJlbW92ZVN1cnZleVF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VydmV5UXVlc3Rpb249e3Byb3BlcnRpZXMuc3VydmV5UXVlc3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gU3VydmV5IFF1ZXN0aW9uOiB7cHJvcGVydGllcy5zdXJ2ZXlRdWVzdGlvbi5xdWVzdGlvbn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFuc3dlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29sb3I8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiZuYnNwOzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wZXJ0aWVzLnN1cnZleVF1ZXN0aW9uLmFuc3dlcnMpLm1hcCgoc3VydmV5QW5zd2VyLCB1aWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17dWlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVTdXJ2ZXlRdWVzdGlvblJvd0J1dHRvbiBwcm9qZWN0SWQ9e3Byb3BzLnByb2plY3RJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVN1cnZleVF1ZXN0aW9uUm93PXtwcm9wcy5yZW1vdmVTdXJ2ZXlRdWVzdGlvblJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZleVF1ZXN0aW9uPXtwcm9wZXJ0aWVzLnN1cnZleVF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VydmV5QW5zd2VyPXtzdXJ2ZXlBbnN3ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VydmV5QW5zd2VyLmFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBzdXJ2ZXlBbnN3ZXIuY29sb3IsIGJvcmRlcjogXCJzb2xpZCAxcHhcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdXJ2ZXlRdWVzdGlvblRhYmxlIHByb2plY3Q9e3Byb2plY3R9IHByb2plY3RJZD17cHJvcHMucHJvamVjdElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VydmV5UXVlc3Rpb249e3Byb3BlcnRpZXMuc3VydmV5UXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnRTdXJ2ZXlRdWVzdGlvbnM9e3Byb3BzLmdldFBhcmVudFN1cnZleVF1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN1cnZleVF1ZXN0aW9uUm93PXtwcm9wcy5hZGRTdXJ2ZXlRdWVzdGlvblJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TmFtZT17cHJvcHMuaGFuZGxlSW5wdXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDb2xvcj17cHJvcHMuaGFuZGxlSW5wdXRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0UGFyZW50PXtwcm9wcy5oYW5kbGVJbnB1dFBhcmVudH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFJlbW92ZVN1cnZleVF1ZXN0aW9uQnV0dG9uKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLnByb2plY3RJZCA9PSBcIjBcIikge1xuICAgICAgICByZXR1cm4gKDxpbnB1dCBpZD1cInJlbW92ZS1zYW1wbGUtdmFsdWUtZ3JvdXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdmFsdWU9XCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMucmVtb3ZlU3VydmV5UXVlc3Rpb24ocHJvcHMuc3VydmV5UXVlc3Rpb24ucXVlc3Rpb24pfS8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbn1cblxuZnVuY3Rpb24gUmVtb3ZlU3VydmV5UXVlc3Rpb25Sb3dCdXR0b24ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMucHJvamVjdElkID09IFwiMFwiKSB7XG4gICAgICAgIGlmIChwcm9wcy5zdXJ2ZXlBbnN3ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXR0b25cIiB2YWx1ZT1cIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5yZW1vdmVTdXJ2ZXlRdWVzdGlvblJvdyhwcm9wcy5zdXJ2ZXlRdWVzdGlvbi5xdWVzdGlvbiwgcHJvcHMuc3VydmV5QW5zd2VyLmFuc3dlcil9Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gKDxoMT48L2gxPik7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbn1cblxuZnVuY3Rpb24gU3VydmV5UXVlc3Rpb25UYWJsZShwcm9wcykge1xuICAgIHZhciBwcm9qZWN0ID0gcHJvcHMucHJvamVjdDtcbiAgICB2YXIgYW5zd2VyID0gXCJcIiwgY29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICBpZiAocHJvamVjdC5uZXdWYWx1ZUVudHJ5W3Byb3BzLnN1cnZleVF1ZXN0aW9uLnF1ZXN0aW9uXSkge1xuICAgICAgICBhbnN3ZXIgPSBwcm9qZWN0Lm5ld1ZhbHVlRW50cnlbcHJvcHMuc3VydmV5UXVlc3Rpb24ucXVlc3Rpb25dLmFuc3dlcjtcbiAgICAgICAgY29sb3IgPSBwcm9qZWN0Lm5ld1ZhbHVlRW50cnlbcHJvcHMuc3VydmV5UXVlc3Rpb24ucXVlc3Rpb25dLmNvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMucHJvamVjdElkID09IFwiMFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIHZhbHVlPVwiK1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5hZGRTdXJ2ZXlRdWVzdGlvblJvdyhwcm9wcy5zdXJ2ZXlRdWVzdGlvbi5xdWVzdGlvbil9Lz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsdWUtbmFtZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17KGUpID0+IHByb3BzLmhhbmRsZUlucHV0TmFtZShwcm9wcy5zdXJ2ZXlRdWVzdGlvbi5xdWVzdGlvbiwgZSl9Lz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cInZhbHVlLWNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xvcn0gb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5oYW5kbGVJbnB1dENvbG9yKHByb3BzLnN1cnZleVF1ZXN0aW9uLnF1ZXN0aW9uLCBlKX0vPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHJldHVybiAoPHRyPjwvdHI+KTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdE1hbmFnZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgcHJvamVjdCA9IHByb3BzLnByb2plY3Q7XG4gICAgdmFyIGJ1dHRvbnMgPSBcIlwiO1xuICAgIGlmIChwcm9wcy5wcm9qZWN0SWQgPT0gXCIwXCIpIHtcbiAgICAgICAgYnV0dG9ucyA9IDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGUtcHJvamVjdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyZWF0ZS1wcm9qZWN0XCIgdmFsdWU9XCJDcmVhdGUgUHJvamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY3JlYXRlUHJvamVjdH0vPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9qZWN0LmRldGFpbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgYnV0dG9ucyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwiY29uZmlndXJlLWdlby1kYXNoXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLXNtIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maWd1cmUtZ2VvLWRhc2hcIiB2YWx1ZT1cIkNvbmZpZ3VyZSBHZW8tRGFzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNvbmZpZ3VyZUdlb0Rhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogcHJvamVjdC5kZXRhaWxzLmF2YWlsYWJpbGl0eSA9PSAndW5wdWJsaXNoZWQnIHx8IHByb2plY3QuZGV0YWlscy5hdmFpbGFiaWxpdHkgPT0gJ3B1Ymxpc2hlZCcgPyAnYmxvY2snIDogJ25vbmUnfX0vPlxuXG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwiZG93bmxvYWQtcGxvdC1kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLXNtIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkb3dubG9hZC1wbG90LWRhdGFcIiB2YWx1ZT1cIkRvd25sb2FkIFBsb3QgRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRvd25sb2FkUGxvdERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogcHJvamVjdC5kZXRhaWxzLmF2YWlsYWJpbGl0eSA9PSAncHVibGlzaGVkJyB8fCBwcm9qZWN0LmRldGFpbHMuYXZhaWxhYmlsaXR5ID09ICdjbG9zZWQnID8gJ2Jsb2NrJyA6ICdub25lJ319Lz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkb3dubG9hZC1zYW1wbGUtZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1zbSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZG93bmxvYWQtc2FtcGxlLWRhdGFcIiB2YWx1ZT1cIkRvd25sb2FkIFNhbXBsZSBEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuZG93bmxvYWRTYW1wbGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHByb2plY3QuZGV0YWlscy5hdmFpbGFiaWxpdHkgPT0gJ3B1Ymxpc2hlZCcgfHwgcHJvamVjdC5kZXRhaWxzLmF2YWlsYWJpbGl0eSA9PSAnY2xvc2VkJyA/ICdibG9jaycgOiAnbm9uZSd9fS8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cImNoYW5nZS1hdmFpbGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hhbmdlLWF2YWlsYWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LnN0YXRlVHJhbnNpdGlvbnNbcHJvamVjdC5kZXRhaWxzLmF2YWlsYWJpbGl0eV0gKyBcIlByb2plY3RcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2hhbmdlQXZhaWxhYmlsaXR5fS8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LW1hbmFnZW1lbnRcIiBjbGFzc05hbWU9XCJjb2wgbWItM1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlciBweC0wXCI+UHJvamVjdCBNYW5hZ2VtZW50PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNwaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoYXJncykge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPFByb2plY3QgZG9jdW1lbnRSb290PXthcmdzLmRvY3VtZW50Um9vdH0gdXNlcklkPXthcmdzLnVzZXJJZH0gcHJvamVjdElkPXthcmdzLnByb2plY3RJZH0gaW5zdGl0dXRpb25JZD17YXJncy5pbnN0aXR1dGlvbklkfVxuICAgICAgICAgICAgICAgICBwcm9qZWN0X3N0YXRzX3Zpc2liaWxpdHk9e2FyZ3MucHJvamVjdF9zdGF0c192aXNpYmlsaXR5fVxuICAgICAgICAgICAgICAgICBwcm9qZWN0X3RlbXBsYXRlX3Zpc2liaWxpdHk9e2FyZ3MucHJvamVjdF90ZW1wbGF0ZV92aXNpYmlsaXR5fS8+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIilcbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==