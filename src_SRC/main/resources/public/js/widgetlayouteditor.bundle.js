var widgetlayouteditor =
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
/******/ 		"widgetlayouteditor": 0
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
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/geo-dash-widget-editor.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor","vendors~widgetlayouteditor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/public/jsx/geo-dash-widget-editor.js":
/*!*****************************************************************!*\
  !*** ./src/main/resources/public/jsx/geo-dash-widget-editor.js ***!
  \*****************************************************************/
/*! exports provided: renderWidgetEditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWidgetEditorPage", function() { return renderWidgetEditorPage; });
/* harmony import */ var lodash_reject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/reject */ "./node_modules/lodash/reject.js");
/* harmony import */ var lodash_reject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_reject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_6__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import ReactGridLayout from 'react-grid-layout';
//const RGL = ReactGridLayout.WidthProvider(ReactGridLayout);
// import PureRenderMixin from 'react-addons-pure-render-mixin';
// import GridLayout from 'react-grid-layout';
//import _ from 'lodash';
//import PropTypes from 'prop-types';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//const PureRenderMixin = require('react-addons-pure-render-mixin'); //React.addons.PureRenderMixin;
//import ReactGridLayout from 'react-grid-layout';
//const RGL = ReactGridLayout.WidthProvider(ReactGridLayout);
//import GridLayout from 'react-grid-layout';
//const GridLayout = require('react-grid-layout');
//


//import PureRenderMixin from 'react-addons-pure-render-mixin'

var ReactGridLayout = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_6__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_6___default.a); // import GridLayout from 'react-grid-layout';
//
// const RGL = GridLayout.WidthProvider(GridLayout);
// import {GridLayout} from 'react-grid-layout'
//const RGL = ReactGridLayout.WidthProvider(ReactGridLayout);
//import _ from 'lodash'

var debugreturn;
var theLayout = [];
var dashboardID;
var gObject;
var haveWidgets = false;
var backwidget;

var BasicLayout =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(BasicLayout, _React$PureComponent);

  function BasicLayout(props) {
    var _this;

    _classCallCheck(this, BasicLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicLayout).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetTypeSelectChanged", function (event, anything) {
      console.log(anything);

      _this.setState({
        selectedWidgetType: event.target.value,
        selectedDataType: '-1',
        WidgetTitle: '',
        imageCollection: '',
        imageParams: '',
        WidgetBaseMap: 'osm',
        dualLayer: false,
        startDate: '',
        endDate: '',
        startDate2: '',
        endDate2: '',
        widgetBands: '',
        widgetMin: '',
        widgetMax: '',
        widgetCloudScore: '',
        imageCollectionDual: '',
        imageParamsDual: '',
        startDateDual: '',
        endDateDual: '',
        widgetBandsDual: '',
        widgetMinDual: '',
        widgetMaxDual: '',
        widgetCloudScoreDual: '',
        FormReady: false,
        wizardStep: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragStart", function (e) {
      console.log('drag start');
      e.preventDefault();
      e.stopPropagation();

      _this.props.onMouseDown(e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragEnd", function (e) {
      console.log('drag end');
      e.preventDefault();
      e.stopPropagation();

      _this.props.onMouseUp(e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDataTypeSelectChanged", function (event) {
      _this.setState({
        selectedDataType: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCancelNewWidget", function (event) {
      console.log('need to reset form values to defaults');

      _this.setState({
        selectedWidgetType: '-1',
        isEditing: false,
        selectedDataType: '-1',
        WidgetTitle: '',
        imageCollection: '',
        imageParams: '',
        WidgetBaseMap: 'osm',
        dualLayer: false,
        startDate: '',
        endDate: '',
        startDate2: '',
        endDate2: '',
        widgetBands: '',
        widgetMin: '',
        widgetMax: '',
        widgetCloudScore: '',
        imageCollectionDual: '',
        imageParamsDual: '',
        startDateDual: '',
        endDateDual: '',
        widgetBandsDual: '',
        widgetMinDual: '',
        widgetMaxDual: '',
        widgetCloudScoreDual: '',
        FormReady: false,
        wizardStep: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNextWizardStep", function (event) {
      _this.setState({
        wizardStep: 2
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPrevWizardStep", function (event) {
      _this.setState({
        wizardStep: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCreateNewWidget", function (event) {
      var AddImageType = [];
      var widget = {};
      var id = _this.state.widgets.length > 0 ? Math.max.apply(Math, _this.state.widgets.map(function (o) {
        return o.id;
      })) + 1 : 0;
      var name = _this.state.WidgetTitle;
      widget.id = id;
      widget.name = name;
      var yval = Math.max.apply(Math, _this.state.widgets.map(function (o) {
        return o.layout.y != null ? o.layout.y : 0;
      })) + 1 > -1 ? Math.max.apply(Math, _this.state.widgets.map(function (o) {
        return o.layout.y != null ? o.layout.y : 0;
      })) + 1 : 0;
      widget.layout = {
        i: id.toString(),
        x: 0,
        y: yval,
        // puts it at the bottom
        w: 3,
        h: 1,
        minW: 3
      };
      widget.baseMap = _this.state.imagery.filter(function (imagery) {
        return imagery.id == _this.state.WidgetBaseMap;
      })[0];

      if (_this.state.selectedWidgetType == "DualImageCollection") {
        //console.log('build out the data structure for the widget from the state');
        widget.properties = ["", "", "", "", ""];
        widget.filterType = '';
        widget.visParams = {};
        widget.dualImageCollection = [];
        var img1 = {};
        var img2 = {};
        img1.collectionType = 'ImageCollection' + _this.state.selectedDataType;
        img2.collectionType = 'ImageCollection' + _this.state.selectedDataTypeDual;
        img1.startDate = _this.state.startDate;
        img1.endDate = _this.state.endDate;
        img2.startDate = _this.state.startDateDual;
        img2.endDate = _this.state.endDateDual;

        if (['LANDSAT5', 'LANDSAT7', 'LANDSAT8', 'Sentinel2'].includes(_this.state.selectedDataType)) {
          img1.filterType = _this.state.selectedDataType != null ? _this.state.selectedDataType : '';
          img1.visParams = {
            bands: _this.state.widgetBands,
            min: _this.state.widgetMin,
            max: _this.state.widgetMax,
            cloudLessThan: _this.state.widgetCloudScore
          };

          _this.addCustomImagery(_this.buildImageryObject(img1));
        }

        if (['LANDSAT5', 'LANDSAT7', 'LANDSAT8', 'Sentinel2'].includes(_this.state.selectedDataTypeDual)) {
          img2.filterType = _this.state.selectedDataTypeDual != null ? _this.state.selectedDataTypeDual : '';
          img2.visParams = {
            bands: _this.state.widgetBandsDual,
            min: _this.state.widgetMinDual,
            max: _this.state.widgetMaxDual,
            cloudLessThan: _this.state.widgetCloudScoreDual
          };

          _this.addCustomImagery(_this.buildImageryObject(img2));
        }

        widget.dualImageCollection.push(img1);
        widget.dualImageCollection.push(img2);
      } else if (_this.state.selectedWidgetType == "imageAsset") {
        widget.properties = ["", "", "", "", ""];
        widget.filterType = '';
        widget.visParams = _this.state.imageParams;
        widget.ImageAsset = _this.state.imageCollection;

        _this.addCustomImagery(_this.buildImageryObject({
          ImageAsset: widget.ImageAsset,
          startDate: '',
          endDate: '',
          filterType: '',
          visParams: widget.visParams
        }));
        /*
        collectionType: img.collectionType,
            startDate: img.startDate,
            endDate: img.endDate,
            filterType: img.filterType,
            visParams: img.visParams
        */
        //should add custom imagery here as well i assume

      } else {
        var wType = _this.state.selectedWidgetType == 'TimeSeries' ? _this.state.selectedDataType.toLowerCase() + _this.state.selectedWidgetType : _this.state.selectedWidgetType == 'ImageCollection' ? _this.state.selectedWidgetType + _this.state.selectedDataType : _this.state.selectedWidgetType == 'statistics' ? 'getStats' : 'custom';
        var prop1 = '';
        var properties = [];
        var prop4 = _this.state.selectedDataType != null ? _this.state.selectedDataType : '';

        if (_this.state.selectedDataType == 'Custom') {
          //more work to do to label the type and add
          prop1 = _this.state.imageCollection;
          widget.visParams = _this.state.imageParams;
        }

        properties[0] = wType;
        properties[1] = prop1;
        properties[2] = _this.state.startDate;
        properties[3] = _this.state.endDate;
        properties[4] = prop4;
        widget.properties = properties;

        if (['LANDSAT5', 'LANDSAT7', 'LANDSAT8', 'Sentinel2'].includes(_this.state.selectedDataType)) {
          widget.filterType = _this.state.selectedDataType;
          widget.visParams = {
            bands: _this.state.widgetBands,
            min: _this.state.widgetMin,
            max: _this.state.widgetMax,
            cloudLessThan: _this.state.widgetCloudScore
          };

          _this.addCustomImagery(_this.buildImageryObject({
            collectionType: 'ImageCollection' + _this.state.selectedDataType,
            startDate: _this.state.startDate,
            endDate: _this.state.endDate,
            filterType: widget.filterType,
            visParams: widget.visParams
          }));
        }

        widget.dualLayer = _this.state.dualLayer;

        if (widget.dualLayer) {
          widget.dualStart = _this.state.startDate2;
          widget.dualEnd = _this.state.endDate2;
        }
      }

      console.log(widget);

      var holdRef = _assertThisInitialized(_assertThisInitialized(_this));

      $.ajax({
        url: theURL + "/createwidget/widget",
        type: "get",
        dataType: "jsonp",
        widget: JSON.stringify(widget),
        data: {
          pID: pid,
          dashID: dashboardID,
          widgetJSON: JSON.stringify(widget)
        },
        success: function success() {
          var myWidget = JSON.parse(this.widget);
          backwidget = myWidget;
          holdRef.setState({
            widgets: holdRef.state.widgets.concat(myWidget),
            selectedWidgetType: '-1',
            isEditing: false,
            selectedDataType: '-1',
            WidgetTitle: '',
            imageCollection: '',
            imageParams: '',
            WidgetBaseMap: 'osm',
            dualLayer: false,
            startDate: '',
            endDate: '',
            startDate2: '',
            endDate2: '',
            widgetBands: '',
            widgetMin: '',
            widgetMax: '',
            widgetCloudScore: '',
            FormReady: false
          });
        },
        error: function error(xhr) {}
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDataBaseMapSelectChanged", function (event) {
      _this.setState({
        WidgetBaseMap: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetTitleChange", function (event) {
      _this.setState({
        WidgetTitle: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onImageCollectionChange", function (event) {
      _this.setState({
        imageCollection: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onImageParamsChange", function (event) {
      _this.setState({
        imageParams: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetDualLayerChange", function (event) {
      _this.setState({
        dualLayer: event.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetBandsChange", function (event) {
      _this.setState({
        widgetBands: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetMinChange", function (event) {
      _this.setState({
        widgetMin: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetMaxChange", function (event) {
      _this.setState({
        widgetMax: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onStartDateChanged", function (date) {
      if (date.target) {
        if (date.target.value) {
          _this.setState({
            startDate: date.target.value
          });
        } else {
          _this.setState({
            startDate: ''
          });
        }
      } else {
        _this.setState({
          startDate: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndDateChanged", function (date) {
      if (date.target) {
        if (date.target.value) {
          _this.setState({
            endDate: date.target.value
          });
        } else {
          _this.setState({
            endDate: ''
          });
        }
      } else {
        _this.setState({
          endDate: date
        });

        _this.checkDates();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetCloudScoreChange", function (event) {
      _this.setState({
        widgetCloudScore: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onImageCollectionChangeDual", function (event) {
      _this.setState({
        imageCollectionDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onImageParamsChangeDual", function (event) {
      _this.setState({
        imageParamsDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetBandsChangeDual", function (event) {
      _this.setState({
        widgetBandsDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetMinChangeDual", function (event) {
      _this.setState({
        widgetMinDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetMaxChangeDual", function (event) {
      _this.setState({
        widgetMaxDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWidgetCloudScoreChangeDual", function (event) {
      _this.setState({
        widgetCloudScoreDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onStartDateChangedDual", function (date) {
      if (date.target) {
        if (date.target.value) {
          _this.setState({
            startDateDual: date.target.value
          });
        } else {
          _this.setState({
            startDateDual: ''
          });
        }
      } else {
        _this.setState({
          startDateDual: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndDateChangedDual", function (date) {
      if (date.target) {
        if (date.target.value) {
          _this.setState({
            endDateDual: date.target.value
          });
        } else {
          _this.setState({
            endDateDual: ''
          });
        }
      } else {
        _this.setState({
          endDateDual: date
        });

        _this.checkDatesDual();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDataTypeSelectChangedDual", function (event) {
      _this.setState({
        selectedDataTypeDual: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onStartDate2Changed", function (date) {
      if (date.target) {
        if (date.target.value) {
          _this.setState({
            startDate2: date.target.value
          });
        } else {
          _this.setState({
            startDate2: ''
          });
        }
      } else {
        _this.setState({
          startDate2: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndDate2Changed", function (date) {
      if (date.target) {
        if (date.target.value) {
          _this.setState({
            endDate2: date.target.value
          });
        } else {
          _this.setState({
            endDate2: ''
          });
        }
      } else {
        _this.setState({
          endDate2: date
        });

        _this.checkDates();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLayoutChange", function (layout) {
      console.log('Widgets length: ' + _this.state.widgets.length);
      console.log('layouts length: ' + _this.state.layout.length);

      if (haveWidgets) {
        var w = _this.state.widgets;
        layout.forEach(function (lay, i) {
          w[i].layout = lay;
        });
        console.log('Post layout loop: ' + JSON.stringify(w[w.length - 1]));

        _this.setState({
          widgets: w,
          layout: layout
        }, _this.updateServerWidgets);
      } else {
        _this.setState({
          layout: layout
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddItem", function (evt) {
      _this.setState({
        isEditing: true
      });
    });

    console.log('here');
    _this.state = {
      layout: [],
      widgets: [],
      imagery: [],
      isEditing: false,
      selectedWidgetType: -1,
      selectedDataType: -1,
      WidgetTitle: '',
      imageCollection: '',
      imageParams: '',
      dualLayer: false,
      WidgetBaseMap: 'osm',
      startDate: '',
      endDate: '',
      startDate2: '',
      endDate2: '',
      widgetBands: '',
      widgetMin: '',
      widgetMax: '',
      widgetCloudScore: '',
      imageCollectionDual: '',
      imageParamsDual: '',
      startDateDual: '',
      endDateDual: '',
      widgetBandsDual: '',
      widgetMinDual: '',
      widgetMaxDual: '',
      widgetCloudScoreDual: '',
      FormReady: false,
      wizardStep: 1
    };
    gObject = _assertThisInitialized(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BasicLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("componentDidMount");
      fetch(theURL + "/id/" + pid).then(function (response) {
        return response.json();
      }).then(function (response) {
        dashboardID = response.dashboardID;
        return response;
      }).then(function (data) {
        return data.widgets.map(function (widget) {
          if (widget.layout) {
            if (widget.layout.y == null) {
              widget.layout.y = 0;
            }
          }

          return widget;
        });
      }).then(function (data) {
        return debugreturn = data;
      }) //.then(function(data){if(data){this.setState({ widgets: data})}  return response})
      .then(function (data) {
        return _this2.setState({
          widgets: data
        });
      }).then(function (data) {
        console.log('widgets should be updated');
        haveWidgets = true;
        return data;
      }).then(function (data) {
        return _this2.checkWidgetStructure();
      }).then(function (data) {
        return _this2.setState({
          layout: _this2.generateLayout()
        });
      });
      fetch(theRoot + "/get-all-imagery?institutionId=" + institutionID).then(function (response) {
        return response.json();
      }).then(function (data) {
        data.unshift({
          title: 'Open Street Maps',
          id: 'osm'
        });
        return data;
      }).then(function (data) {
        return _this2.setState({
          imagery: data,
          WidgetBaseMap: data[0].id
        });
      });
    }
  }, {
    key: "checkWidgetStructure",
    value: function checkWidgetStructure() {
      var widgets = this.state.widgets;
      console.log('I have ' + widgets.length + ' widgets to check');
      var changed = false;
      var row = 0;
      var column = 0;

      var sWidgets = lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(this.state.widgets, 'id', 'asc');

      widgets = lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(sWidgets, function (widget, i) {
        if (widget.layout) {
          if (widget['gridcolumn']) {
            delete widget['gridcolumn'];
          }

          if (widget['gridrow']) {
            delete widget['gridrow'];
          }

          widget.layout.i = i.toString();
          return widget;
        } else if (widget.gridcolumn) {
          changed = true;
          var x;
          var w;
          var y;
          var h;
          var layout; //do the x and w

          x = parseInt(widget.gridcolumn.split(' ')[0]) - 1;
          w = parseInt(widget.gridcolumn.split(' ')[3]);

          if (widget.gridrow) {
            //do the y and h
            y = parseInt(widget.gridrow.trim().split(' ')[0]) - 1;
            h = widget.gridrow.trim().split(' ')[3] != null ? parseInt(widget.gridrow.trim().split(' ')[3]) : 1;
          } // create .layout


          widget.layout = {
            x: x,
            y: y,
            w: w,
            h: h
          };
          delete widget['gridcolumn'];
          delete widget['gridrow'];
        } else if (widget.position) {
          changed = true;

          var _x;

          var _w;

          var _y;

          var _h = 1;

          var _layout;

          console.log('id: ' + widget.id);
          console.log('column: ' + column);
          console.log('widget.position: ' + widget.position);
          console.log('widget.width: ' + widget.width);
          console.log('row: ' + row);

          if (column + parseInt(widget.width) <= 12) {
            _x = column;
            column = column + parseInt(widget.width);
          } else {
            _x = 0;
            column = parseInt(widget.width);
            row += 1;
          }

          widget.layout = {
            x: _x,
            y: row,
            w: parseInt(widget.width),
            h: _h,
            i: i
          }; // Create a starter layout based on the i value
          // need to add both layout and gridcolumn/gridrow properties
        } else {
          changed = true;

          var _x2;

          var _w2;

          var _y2;

          var _h2 = 1;

          var _layout2;

          console.log('id: ' + widget.id);
          console.log('column: ' + column);
          console.log('widget.position: ' + widget.position);
          console.log('widget.width: ' + widget.width);
          console.log('row: ' + row);

          if (column + 3 <= 12) {
            _x2 = column;
            column = column + 3;
          } else {
            _x2 = 0;
            column = parseInt(widget.width);
            row += 1;
          }

          widget.layout = {
            x: _x2,
            y: row,
            w: parseInt(widget.width),
            h: _h2,
            i: i
          };
        }

        return widget;
      });
      console.log(changed);
      this.setState({
        widgets: widgets
      });

      if (changed) {
        this.updateServerWidgets();
      }
    }
  }, {
    key: "generategridcolumn",
    value: function generategridcolumn(x, w) {
      return x + 1 + ' / span ' + w;
    }
  }, {
    key: "generategridrow",
    value: function generategridrow(x, w) {
      return x + 1 + ' / span ' + w;
    }
  }, {
    key: "updateServerWidgets",
    value: function updateServerWidgets() {
      var holdRef = this;
      this.state.widgets.forEach(function (widget) {
        var ajaxurl = theURL + "/updatewidget/widget/" + widget.id;
        holdRef.serveItUp(ajaxurl, widget);
      });
    }
  }, {
    key: "serveItUp",
    value: function serveItUp(url, widget) {
      $.ajax({
        url: url,
        type: "get",
        dataType: "jsonp",
        indexVal: widget.id,
        data: {
          dashID: dashboardID,
          widgetJSON: JSON.stringify(widget)
        },
        success: function success() {// no action needed
        },
        error: function error(xhr) {
          console.log('it failed');
        }
      });
    }
  }, {
    key: "deleteWidgetFromServer",
    value: function deleteWidgetFromServer(widget) {
      var ajaxurl = theURL + "/deletewidget/widget/" + widget.id;
      this.serveItUp(ajaxurl, widget);
    }
  }, {
    key: "generateDOM",
    value: function generateDOM() {
      console.log('generateDOM');
      var layout = this.state.layout;
      var holdRef = this;
      return lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(this.state.widgets, function (widget, i) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          onDragStart: holdRef.onDragStart,
          onDragEnd: holdRef.onDragEnd,
          key: i,
          "data-grid": widget.layout,
          className: "front widgetEditor-widgetBackground",
          style: {
            backgroundImage: "url(" + holdRef.getImageByType(widget.properties[0]) + ")"
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
          className: "widgetEditor title"
        }, widget.name, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          onClick: function onClick(e) {
            e.stopPropagation();
            holdRef.onRemoveItem(i);
          },
          onMouseDown: function onMouseDown(e) {
            console.log('mousedown happened');
            e.stopPropagation();
          },
          className: "remove"
        }, "x")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "text text-danger"
        }, "Sample Image"));
      });
    }
  }, {
    key: "addCustomImagery",
    value: function addCustomImagery(imagery) {
      console.log(imagery);
      $.ajax({
        url: theURL.replace('/geo-dash', '') + "/add-geodash-imagery",
        type: "POST",
        async: true,
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify(imagery)
      }).fail(function () {
        console.log("Error adding custom imagery to institution. See console for details.");
      }).done(function (data) {
        console.log("imagery added");
      });
    }
  }, {
    key: "getGatewayUrl",
    value: function getGatewayUrl(widget, collectionName) {
      var url = '';

      if (widget.filterType != null && widget.filterType.length > 0) {
        var fts = {
          'LANDSAT5': 'Landsat5Filtered',
          'LANDSAT7': 'Landsat7Filtered',
          'LANDSAT8': 'Landsat8Filtered',
          'Sentinel2': 'FilteredSentinel'
        };
        url = "http://collect.earth:8888/" + fts[widget.filterType];
      } else if (widget.ImageAsset && widget.ImageAsset.length > 0) {
        url = "http://collect.earth:8888/image";
      } else if (widget.properties && 'ImageCollectionCustom' == widget.properties[0]) {
        url = "http://collect.earth:8888/meanImageByMosaicCollections";
      } else if (collectionName.trim().length > 0) {
        url = "http://collect.earth:8888/cloudMaskImageByMosaicCollection";
      } else {
        url = "http://collect.earth:8888/ImageCollectionbyIndex";
      }

      return url;
    }
  }, {
    key: "buildImageryObject",
    value: function buildImageryObject(img) {
      var gatewayUrl = this.getGatewayUrl(img);
      var title = img.filterType.replace(/\w\S*/g, function (word) {
        return word.charAt(0) + word.slice(1).toLowerCase();
      }) + ": " + img.startDate + " to " + img.endDate;
      var ImageAsset = img.ImageAsset ? img.ImageAsset : '';
      console.log('image asset: ' + ImageAsset);
      var iObject = {
        institutionId: institutionID,
        imageryTitle: title,
        imageryAttribution: "Google Earth Engine",
        geeUrl: gatewayUrl,
        geeParams: {
          collectionType: img.collectionType,
          startDate: img.startDate,
          endDate: img.endDate,
          filterType: img.filterType,
          visParams: img.visParams,
          ImageAsset: ImageAsset
        }
      };

      if (img.ImageAsset && img.ImageAsset.length > 0) {
        title = img.ImageAsset.substr(img.ImageAsset.lastIndexOf("/") + 1).replace(new RegExp('_', 'g'), ' ');
        iObject.imageryTitle = title;
        iObject.ImageAsset = img.ImageAsset;
      }

      return iObject;
    }
  }, {
    key: "checkDatesDual",
    value: function checkDatesDual() {
      var ed = new Date(this.state.endDateDual);
      var sd = new Date(this.state.startDateDual);

      if (!this.state.dualLayer) {
        if (ed > sd && this.state.FormReady != true) {
          this.setState({
            FormReady: true
          });
        } else if (ed < sd) {
          if (this.state.FormReady == true) {
            this.setState({
              FormReady: false
            });
          }
        }
      } else {
        var ed2 = new Date(this.state.endDate2);
        var sd2 = new Date(this.state.startDate2);

        if (ed > sd && ed2 > sd2 && this.state.FormReady != true) {
          this.setState({
            FormReady: true
          });
        } else if (ed < sd || ed2 < sd2) {
          if (this.state.FormReady == true) {
            this.setState({
              FormReady: false
            });
          }
        }
      }
    }
  }, {
    key: "checkDates",
    value: function checkDates() {
      var ed = new Date(this.state.endDate);
      var sd = new Date(this.state.startDate);

      if (!this.state.dualLayer) {
        if (ed > sd && this.state.FormReady != true) {
          this.setState({
            FormReady: true
          });
        } else if (ed < sd) {
          if (this.state.FormReady == true) {
            this.setState({
              FormReady: false
            });
          }
        }
      } else {
        var ed2 = new Date(this.state.endDate2);
        var sd2 = new Date(this.state.startDate2);

        if (ed > sd && ed2 > sd2 && this.state.FormReady != true) {
          this.setState({
            FormReady: true
          });
        } else if (ed < sd || ed2 < sd2) {
          if (this.state.FormReady == true) {
            this.setState({
              FormReady: false
            });
          }
        }
      }
    }
  }, {
    key: "getNewWidgetForm",
    value: function getNewWidgetForm() {
      var _this3 = this;

      if (this.state.isEditing) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal fade show",
          style: {
            display: 'block'
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-dialog",
          role: "document"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-content"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-header"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
          className: "modal-title",
          id: "exampleModalLabel"
        }, "Create Widget"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal",
          "aria-label": "Close",
          onClick: this.onCancelNewWidget
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-body"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "widgetTypeSelect"
        }, "Type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
          name: "widgetTypeSelect",
          className: "form-control",
          value: this.state.selectedWidgetType,
          id: "widgetTypeSelect",
          onChange: function onChange(e) {
            return _this3.onWidgetTypeSelectChanged(e, 'i am anything');
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          value: "-1"
        }, "Please select type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Image Collection",
          value: "ImageCollection"
        }, "Image Collection"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Time Series Graph",
          value: "TimeSeries"
        }, "Time Series Graph"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Statistics",
          value: "statistics"
        }, "Statistics"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Dual Image Collection",
          value: "DualImageCollection"
        }, "Dual Image Collection"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Image Asset",
          value: "imageAsset"
        }, "Image Asset"))), this.getBaseMapSelector(), this.getDataType(), this.getDataForm())), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-footer"
        }, this.getFormButtons())))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-backdrop fade show"
        }, " "));
      } else {
        return;
      }
    }
  }, {
    key: "getFormButtons",
    value: function getFormButtons() {
      //need to check if form is ready, if not just add the cancel button, or disable the create?
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        onClick: this.onCancelNewWidget
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.onCreateNewWidget,
        disabled: !this.state.FormReady
      }, "Create"));
    }
  }, {
    key: "getBaseMapSelector",
    value: function getBaseMapSelector() {
      if (this.state.selectedWidgetType == 'ImageCollection' || this.state.selectedWidgetType == 'DualImageCollection' || this.state.selectedWidgetType == 'imageAsset') {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "widgetIndicesSelect"
        }, "Basemap"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
          name: "widgetIndicesSelect",
          value: this.state.WidgetBaseMap,
          className: "form-control",
          id: "widgetIndicesSelect",
          onChange: this.onDataBaseMapSelectChanged
        }, this.baseMapOptions()));
      } else {
        return;
      }
    }
  }, {
    key: "baseMapOptions",
    value: function baseMapOptions() {
      var options = lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(this.state.imagery, function (imagery) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          key: imagery.id,
          value: imagery.id
        }, " ", imagery.title, " ");
      });

      return options;
    }
  }, {
    key: "getDataType",
    value: function getDataType() {
      console.log('getting datatype');

      if (this.state.selectedWidgetType == '-1') {
        console.log('Blank');
        return;
      } else if (this.state.selectedWidgetType == 'statistics') {
        if (this.state.FormReady != true) {
          this.setState({
            FormReady: true
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "widgetTitle"
        }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          type: "text",
          name: "widgetTitle",
          id: "widgetTitle",
          value: this.state.WidgetTitle,
          className: "form-control",
          onChange: this.onWidgetTitleChange
        })));
      } else if (this.state.selectedWidgetType == 'imageAsset') {
        if (this.state.FormReady != true) {
          this.setState({
            FormReady: true
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null);
      } else if (this.state.selectedWidgetType == 'ImageCollection') {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "widgetIndicesSelect"
        }, "Data"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
          name: "widgetIndicesSelect",
          value: this.state.selectedDataType,
          className: "form-control",
          id: "widgetIndicesSelect",
          onChange: this.onDataTypeSelectChanged
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          value: "-1",
          className: ""
        }, "Please select type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "NDVI",
          value: "NDVI"
        }, "NDVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "EVI",
          value: "EVI"
        }, "EVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "EVI 2",
          value: "EVI2"
        }, "EVI 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "NDMI",
          value: "NDMI"
        }, "NDMI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "NDWI",
          value: "NDWI"
        }, "NDWI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "LANDSAT 5",
          value: "LANDSAT5"
        }, "LANDSAT 5"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "LANDSAT 7",
          value: "LANDSAT7"
        }, "LANDSAT 7"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "LANDSAT 8",
          value: "LANDSAT8"
        }, "LANDSAT 8"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Sentinel-2",
          value: "Sentinel2"
        }, "Sentinel-2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Custom widget",
          value: "Custom"
        }, "Custom widget")));
      } else if (this.state.selectedWidgetType == 'DualImageCollection') {
        if (this.state.wizardStep == 1) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
            className: "mt-4 text-center text-info"
          }, "Dual imageCollection Step 1"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetIndicesSelect"
          }, "Data"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
            name: "widgetIndicesSelect",
            value: this.state.selectedDataType,
            className: "form-control",
            id: "widgetIndicesSelect",
            onChange: this.onDataTypeSelectChanged
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            value: "-1",
            className: ""
          }, "Please select type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "NDVI",
            value: "NDVI"
          }, "NDVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "EVI",
            value: "EVI"
          }, "EVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "EVI 2",
            value: "EVI2"
          }, "EVI 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "NDMI",
            value: "NDMI"
          }, "NDMI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "NDWI",
            value: "NDWI"
          }, "NDWI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "LANDSAT 5",
            value: "LANDSAT5"
          }, "LANDSAT 5"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "LANDSAT 7",
            value: "LANDSAT7"
          }, "LANDSAT 7"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "LANDSAT 8",
            value: "LANDSAT8"
          }, "LANDSAT 8"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "Sentinel-2",
            value: "Sentinel2"
          }, "Sentinel-2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "Custom widget",
            value: "Custom"
          }, "Custom widget")));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
            className: "mt-4 text-center text-info"
          }, "Dual imageCollection Step 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetIndicesSelect2"
          }, "Data 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
            name: "widgetIndicesSelect2",
            value: this.state.selectedDataTypeDual,
            className: "form-control",
            id: "widgetIndicesSelect",
            onChange: this.onDataTypeSelectChangedDual
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            value: "-1",
            className: ""
          }, "Please select type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "NDVI",
            value: "NDVI"
          }, "NDVI 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "EVI",
            value: "EVI"
          }, "EVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "EVI 2",
            value: "EVI2"
          }, "EVI 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "NDMI",
            value: "NDMI"
          }, "NDMI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "NDWI",
            value: "NDWI"
          }, "NDWI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "LANDSAT 5",
            value: "LANDSAT5"
          }, "LANDSAT 5"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "LANDSAT 7",
            value: "LANDSAT7"
          }, "LANDSAT 7"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "LANDSAT 8",
            value: "LANDSAT8"
          }, "LANDSAT 8"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "Sentinel-2",
            value: "Sentinel2"
          }, "Sentinel-2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
            label: "Custom widget",
            value: "Custom"
          }, "Custom widget")));
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "widgetIndicesSelect"
        }, "Data"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
          name: "widgetIndicesSelect",
          value: this.state.selectedDataType,
          className: "form-control",
          id: "widgetIndicesSelect",
          onChange: this.onDataTypeSelectChanged
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          value: "-1",
          className: ""
        }, "Please select type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "NDVI",
          value: "NDVI"
        }, "NDVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "EVI",
          value: "EVI"
        }, "EVI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "EVI 2",
          value: "EVI2"
        }, "EVI 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "NDMI",
          value: "NDMI"
        }, "NDMI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "NDWI",
          value: "NDWI"
        }, "NDWI"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          label: "Custom widget",
          value: "Custom"
        }, "Custom widget")));
      }
    }
  }, {
    key: "getDataForm",
    value: function getDataForm() {
      if (this.state.selectedWidgetType == 'imageAsset') {
        var _React$createElement;

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "widgetTitle"
        }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          type: "text",
          name: "widgetTitle",
          id: "widgetTitle",
          value: this.state.WidgetTitle,
          className: "form-control",
          onChange: this.onWidgetTitleChange
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "imageCollection"
        }, "GEE Image Asset"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
          type: "text",
          name: "imageCollection",
          id: "imageCollection",
          placeholder: "LANDSAT/LC8_L1T_TOA",
          value: this.state.imageCollection,
          className: "form-control",
          onChange: this.onImageCollectionChange
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
          htmlFor: "imageParams"
        }, "Image Parameters (json format)"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", (_React$createElement = {
          placeholder: "json format",
          rows: "1",
          className: "form-control"
        }, _defineProperty(_React$createElement, "placeholder", "{\"bands\": \"B4, B3, B2\", \n\"min\":0, \n\"max\": 0.3}"), _defineProperty(_React$createElement, "onChange", this.onImageParamsChange), _defineProperty(_React$createElement, "rows", "4"), _defineProperty(_React$createElement, "value", this.state.imageParams), _defineProperty(_React$createElement, "style", {
          overflow: 'hidden',
          overflowWrap: 'break-word',
          resize: 'vertical'
        }), _React$createElement))));
      } else if (this.state.selectedDataType == '-1') {
        console.log('Blank');
        return;
      } else {
        setTimeout(function () {
          $(".input-daterange input").each(function () {
            try {
              console.log('init: ' + this.id);
              var bindEvt = this.id == 'sDate_new_cookedDual' ? gObject.onStartDateChangedDual : this.id == 'eDate_new_cookedDual' ? gObject.onEndDateChangedDual : this.id == 'sDate_new_cooked' ? gObject.onStartDateChanged : this.id == 'eDate_new_cooked' ? gObject.onEndDateChanged : this.id == 'sDate_new_cooked2' ? gObject.onStartDate2Changed : gObject.onEndDate2Changed;
              $(this).datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: "yy-mm-dd",
                onSelect: function onSelect(dateText) {
                  console.log(dateText);
                  bindEvt(this.value);
                }
              });
            } catch (e) {
              console.warn(e.message);
            }
          });
        }, 250);

        if (['LANDSAT5', 'LANDSAT7', 'LANDSAT8', 'Sentinel2'].includes(this.state.selectedDataType) && this.state.wizardStep == 1) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetTitle"
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetTitle",
            id: "widgetTitle",
            value: this.state.WidgetTitle,
            className: "form-control",
            onChange: this.onWidgetTitleChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChanged,
            value: this.state.startDate,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChanged,
            value: this.state.endDate,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked"
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group",
            style: {
              display: this.state.selectedWidgetType == 'DualImageCollection' ? 'none' : 'block'
            }
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetDualLayer"
          }, "Dual time span"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "checkbox",
            name: "widgetDualLayer",
            id: "widgetDualLayer",
            checked: this.state.dualLayer,
            className: "form-control",
            onChange: this.onWidgetDualLayerChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            style: {
              display: this.state.dualLayer == true ? 'block' : 'none'
            }
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range for the top layer"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange",
            id: "range_new_cooked2"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDate2Changed,
            value: this.state.startDate2,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked2"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDate2Changed,
            value: this.state.endDate2,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked2"
          }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetBands"
          }, "Bands"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetBands",
            id: "widgetBands",
            value: this.state.widgetBands,
            className: "form-control",
            onChange: this.onWidgetBandsChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetMin"
          }, "Min"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetMin",
            id: "widgetMin",
            value: this.state.widgetMin,
            className: "form-control",
            onChange: this.onWidgetMinChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetMax"
          }, "Max"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetMax",
            id: "widgetMax",
            value: this.state.widgetMax,
            className: "form-control",
            onChange: this.onWidgetMaxChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetCloudScore"
          }, "Cloud Score"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetCloudScore",
            id: "widgetCloudScore",
            value: this.state.widgetCloudScore,
            className: "form-control",
            onChange: this.onWidgetCloudScoreChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: this.onNextWizardStep,
            style: {
              display: this.state.selectedWidgetType == 'DualImageCollection' ? 'block' : 'none'
            }
          }, "Step 2 \u21D2"));
        } else if (['LANDSAT5', 'LANDSAT7', 'LANDSAT8', 'Sentinel2'].includes(this.state.selectedDataTypeDual) && this.state.wizardStep == 2) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChangedDual,
            value: this.state.startDateDual,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cookedDual"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChangedDual,
            value: this.state.endDateDual,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cookedDual"
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetBands"
          }, "Bands"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetBands",
            id: "widgetBands",
            value: this.state.widgetBandsDual,
            className: "form-control",
            onChange: this.onWidgetBandsChangeDual
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetMin"
          }, "Min"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetMin",
            id: "widgetMin",
            value: this.state.widgetMinDual,
            className: "form-control",
            onChange: this.onWidgetMinChangeDual
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetMax"
          }, "Max"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetMax",
            id: "widgetMax",
            value: this.state.widgetMaxDual,
            className: "form-control",
            onChange: this.onWidgetMaxChangeDual
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetCloudScore"
          }, "Cloud Score"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetCloudScore",
            id: "widgetCloudScore",
            value: this.state.widgetCloudScoreDual,
            className: "form-control",
            onChange: this.onWidgetCloudScoreChangeDual
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: this.onPrevWizardStep
          }, "\u21D0 Step 1"));
        } else if ((this.state.selectedWidgetType == 'ImageCollection' || this.state.selectedWidgetType == 'DualImageCollection') && this.state.selectedDataType == 'Custom' && this.state.wizardStep == 1) {
          var _React$createElement2;

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetTitle"
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetTitle",
            id: "widgetTitle",
            value: this.state.WidgetTitle,
            className: "form-control",
            onChange: this.onWidgetTitleChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "imageCollection"
          }, "GEE Image Collection"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "imageCollection",
            id: "imageCollection",
            placeholder: "LANDSAT/LC8_L1T_TOA",
            value: this.state.imageCollection,
            className: "form-control",
            onChange: this.onImageCollectionChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "imageParams"
          }, "Image Parameters (json format)"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", (_React$createElement2 = {
            placeholder: "json format",
            rows: "1",
            className: "form-control"
          }, _defineProperty(_React$createElement2, "placeholder", "{\"bands\": \"B4, B3, B2\", \n\"min\":0, \n\"max\": 0.3}"), _defineProperty(_React$createElement2, "onChange", this.onImageParamsChange), _defineProperty(_React$createElement2, "rows", "4"), _defineProperty(_React$createElement2, "value", this.state.imageParams), _defineProperty(_React$createElement2, "style", {
            overflow: 'hidden',
            overflowWrap: 'break-word',
            resize: 'vertical'
          }), _React$createElement2))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange form-group",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChanged,
            value: this.state.startDate,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChanged,
            value: this.state.endDate,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked"
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: this.onNextWizardStep,
            style: {
              display: this.state.selectedWidgetType == 'DualImageCollection' ? 'block' : 'none'
            }
          }, "Step 2 \u21D2"));
        } else if ((this.state.selectedWidgetType == 'ImageCollection' || this.state.selectedWidgetType == 'DualImageCollection') && this.state.selectedDataTypeDual == 'Custom' && this.state.wizardStep == 2) {
          var _React$createElement3;

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "imageCollection"
          }, "GEE Image Collection"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "imageCollection",
            id: "imageCollection",
            placeholder: "LANDSAT/LC8_L1T_TOA",
            value: this.state.imageCollectionDual,
            className: "form-control",
            onChange: this.onImageCollectionChangeDual
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "imageParams"
          }, "Image Parameters (json format)"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", (_React$createElement3 = {
            placeholder: "json format",
            rows: "1",
            className: "form-control"
          }, _defineProperty(_React$createElement3, "placeholder", "{\"bands\": \"B4, B3, B2\", \n\"min\":0, \n\"max\": 0.3}"), _defineProperty(_React$createElement3, "onChange", this.onImageParamsChangeDual), _defineProperty(_React$createElement3, "rows", "4"), _defineProperty(_React$createElement3, "value", this.state.imageParamsDual), _defineProperty(_React$createElement3, "style", {
            overflow: 'hidden',
            overflowWrap: 'break-word',
            resize: 'vertical'
          }), _React$createElement3))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange form-group",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChangedDual,
            value: this.state.startDateDual,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cookedDual"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChangedDual,
            value: this.state.endDateDual,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cookedDual"
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: this.onPrevWizardStep
          }, "\u21D0 Step 1"));
        } else if ((this.state.selectedWidgetType == 'ImageCollection' || this.state.selectedWidgetType == 'DualImageCollection') && this.state.wizardStep == 1) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetTitle"
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetTitle",
            id: "widgetTitle",
            value: this.state.WidgetTitle,
            className: "form-control",
            onChange: this.onWidgetTitleChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange form-group",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChanged,
            value: this.state.startDate,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChanged,
            value: this.state.endDate,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked"
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group",
            style: {
              display: this.state.selectedWidgetType == 'DualImageCollection' ? 'none' : 'block'
            }
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetDualLayer"
          }, "Dual time span"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "checkbox",
            name: "widgetDualLayer",
            id: "widgetDualLayer",
            checked: this.state.dualLayer,
            className: "form-control",
            onChange: this.onWidgetDualLayerChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            style: {
              display: this.state.dualLayer == true ? 'block' : 'none'
            }
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange",
            id: "range_new_cooked2"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDate2Changed,
            value: this.state.startDate2,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked2"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDate2Changed,
            value: this.state.endDate2,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked2"
          }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: this.onNextWizardStep,
            style: {
              display: this.state.selectedWidgetType == 'DualImageCollection' ? 'block' : 'none'
            }
          }, "Step 2 \u21D2"));
        } else if ((this.state.selectedWidgetType == 'ImageCollection' || this.state.selectedWidgetType == 'DualImageCollection') && this.state.wizardStep == 2) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange form-group",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChangedDual,
            value: this.state.startDateDual,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cookedDual"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChangedDual,
            value: this.state.endDateDual,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cookedDual"
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: this.onPrevWizardStep
          }, "\u21D0 Step 1"));
        } else if (this.state.selectedWidgetType == 'TimeSeries' && this.state.selectedDataType == 'Custom') {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetTitle"
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetTitle",
            id: "widgetTitle",
            value: this.state.WidgetTitle,
            className: "form-control",
            onChange: this.onWidgetTitleChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "imageCollection"
          }, "GEE Image Collection"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "imageCollection",
            id: "imageCollection",
            placeholder: "LANDSAT/LC8_L1T_TOA",
            value: this.state.imageCollection,
            className: "form-control",
            onChange: this.onImageCollectionChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChanged,
            value: this.state.startDate,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChanged,
            value: this.state.endDate,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked"
          })));
        } else if (this.state.wizardStep == 2) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Secondary data form here"));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
            htmlFor: "widgetTitle"
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            name: "widgetTitle",
            id: "widgetTitle",
            value: this.state.WidgetTitle,
            className: "form-control",
            onChange: this.onWidgetTitleChange
          })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Select the Date Range you would like"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group input-daterange",
            id: "range_new_cooked"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onStartDateChanged,
            value: this.state.startDate,
            placeholder: "YYYY-MM-DD",
            id: "sDate_new_cooked"
          }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "input-group-addon"
          }, "to"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            onChange: this.onEndDateChanged,
            value: this.state.endDate,
            placeholder: "YYYY-MM-DD",
            id: "eDate_new_cooked"
          })));
        }
      }
    }
  }, {
    key: "onRemoveItem",
    value: function onRemoveItem(i) {
      console.log('i was here');

      var removedWidget = lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(this.state.widgets, function (w) {
        return w.layout.i == i.toString();
      });

      gremovedWidget = removedWidget;
      this.deleteWidgetFromServer(removedWidget[0]);
      this.setState({
        widgets: lodash_reject__WEBPACK_IMPORTED_MODULE_0___default()(this.state.widgets, function (widget) {
          return widget.layout.i == i.toString();
        }),
        layout: lodash_reject__WEBPACK_IMPORTED_MODULE_0___default()(this.state.layout, function (layout) {
          return layout.i == i.toString();
        })
      });
    }
  }, {
    key: "getImageByType",
    value: function getImageByType(which) {
      var theImage = "";

      if (which === "getStats") {
        theImage = "/img/statssample.gif";
      } else if (which.toLowerCase().includes("image") || which === '') {
        theImage = "/img/mapsample.gif";
      } else {
        console.log(which);
        theImage = "/img/graphsample.gif";
      }

      return theImage;
    }
  }, {
    key: "generateLayout",
    value: function generateLayout() {
      var w = this.state.widgets;
      var xrow = 0;
      var yrow = 0;
      return lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(w, function (item, i) {
        item.layout.i = i.toString();
        item.layout.minW = 3;
        item.layout.w = item.layout.w >= 3 ? item.layout.w : 3;
        return item.layout;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var layout = this.state.layout;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        id: "addWidget",
        onClick: this.onAddItem,
        className: "btn btn-outline-lightgreen btn-sm",
        style: {
          display: 'none'
        }
      }, "Add Widget"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ReactGridLayout, _extends({}, this.props, {
        layout: layout,
        onLayoutChange: this.onLayoutChange
      }), this.generateDOM()), this.getNewWidgetForm());
    }
  }]);

  return BasicLayout;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent);

_defineProperty(BasicLayout, "defaultProps", {
  isDraggable: true,
  isResizable: true,
  className: "layout",
  items: 0,
  rowHeight: 300,
  onLayoutChange: function onLayoutChange() {},
  cols: 12
});

var gremovedWidget; // BasicLayout.defaultProps = {
//     isDraggable: true,
//     isResizable: true,
//     className: "layout",
//     items: 2,
//     rowHeight: 300,
//     cols: 12
// }

function renderWidgetEditorPage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BasicLayout, null), document.getElementById('content'));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvZ2VvLWRhc2gtd2lkZ2V0LWVkaXRvci5qcyJdLCJuYW1lcyI6WyJSZWFjdEdyaWRMYXlvdXQiLCJXaWR0aFByb3ZpZGVyIiwiUkdMIiwiZGVidWdyZXR1cm4iLCJ0aGVMYXlvdXQiLCJkYXNoYm9hcmRJRCIsImdPYmplY3QiLCJoYXZlV2lkZ2V0cyIsImJhY2t3aWRnZXQiLCJCYXNpY0xheW91dCIsInByb3BzIiwiZXZlbnQiLCJhbnl0aGluZyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNlbGVjdGVkV2lkZ2V0VHlwZSIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0ZWREYXRhVHlwZSIsIldpZGdldFRpdGxlIiwiaW1hZ2VDb2xsZWN0aW9uIiwiaW1hZ2VQYXJhbXMiLCJXaWRnZXRCYXNlTWFwIiwiZHVhbExheWVyIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZTIiLCJlbmREYXRlMiIsIndpZGdldEJhbmRzIiwid2lkZ2V0TWluIiwid2lkZ2V0TWF4Iiwid2lkZ2V0Q2xvdWRTY29yZSIsImltYWdlQ29sbGVjdGlvbkR1YWwiLCJpbWFnZVBhcmFtc0R1YWwiLCJzdGFydERhdGVEdWFsIiwiZW5kRGF0ZUR1YWwiLCJ3aWRnZXRCYW5kc0R1YWwiLCJ3aWRnZXRNaW5EdWFsIiwid2lkZ2V0TWF4RHVhbCIsIndpZGdldENsb3VkU2NvcmVEdWFsIiwiRm9ybVJlYWR5Iiwid2l6YXJkU3RlcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiaXNFZGl0aW5nIiwiQWRkSW1hZ2VUeXBlIiwid2lkZ2V0IiwiaWQiLCJzdGF0ZSIsIndpZGdldHMiLCJsZW5ndGgiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJtYXAiLCJvIiwibmFtZSIsInl2YWwiLCJsYXlvdXQiLCJ5IiwiaSIsInRvU3RyaW5nIiwieCIsInciLCJoIiwibWluVyIsImJhc2VNYXAiLCJpbWFnZXJ5IiwiZmlsdGVyIiwicHJvcGVydGllcyIsImZpbHRlclR5cGUiLCJ2aXNQYXJhbXMiLCJkdWFsSW1hZ2VDb2xsZWN0aW9uIiwiaW1nMSIsImltZzIiLCJjb2xsZWN0aW9uVHlwZSIsInNlbGVjdGVkRGF0YVR5cGVEdWFsIiwiaW5jbHVkZXMiLCJiYW5kcyIsIm1pbiIsImNsb3VkTGVzc1RoYW4iLCJhZGRDdXN0b21JbWFnZXJ5IiwiYnVpbGRJbWFnZXJ5T2JqZWN0IiwicHVzaCIsIkltYWdlQXNzZXQiLCJ3VHlwZSIsInRvTG93ZXJDYXNlIiwicHJvcDEiLCJwcm9wNCIsImR1YWxTdGFydCIsImR1YWxFbmQiLCJob2xkUmVmIiwiJCIsImFqYXgiLCJ1cmwiLCJ0aGVVUkwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInBJRCIsInBpZCIsImRhc2hJRCIsIndpZGdldEpTT04iLCJzdWNjZXNzIiwibXlXaWRnZXQiLCJwYXJzZSIsImNvbmNhdCIsImVycm9yIiwieGhyIiwiY2hlY2tlZCIsImRhdGUiLCJjaGVja0RhdGVzIiwiY2hlY2tEYXRlc0R1YWwiLCJmb3JFYWNoIiwibGF5IiwidXBkYXRlU2VydmVyV2lkZ2V0cyIsImV2dCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNoZWNrV2lkZ2V0U3RydWN0dXJlIiwiZ2VuZXJhdGVMYXlvdXQiLCJ0aGVSb290IiwiaW5zdGl0dXRpb25JRCIsInVuc2hpZnQiLCJ0aXRsZSIsImNoYW5nZWQiLCJyb3ciLCJjb2x1bW4iLCJzV2lkZ2V0cyIsImdyaWRjb2x1bW4iLCJwYXJzZUludCIsInNwbGl0IiwiZ3JpZHJvdyIsInRyaW0iLCJwb3NpdGlvbiIsIndpZHRoIiwiYWpheHVybCIsInNlcnZlSXRVcCIsImluZGV4VmFsIiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRJbWFnZUJ5VHlwZSIsIm9uUmVtb3ZlSXRlbSIsInJlcGxhY2UiLCJhc3luYyIsImNyb3NzRG9tYWluIiwiY29udGVudFR5cGUiLCJmYWlsIiwiZG9uZSIsImNvbGxlY3Rpb25OYW1lIiwiZnRzIiwiaW1nIiwiZ2F0ZXdheVVybCIsImdldEdhdGV3YXlVcmwiLCJ3b3JkIiwiY2hhckF0Iiwic2xpY2UiLCJpT2JqZWN0IiwiaW5zdGl0dXRpb25JZCIsImltYWdlcnlUaXRsZSIsImltYWdlcnlBdHRyaWJ1dGlvbiIsImdlZVVybCIsImdlZVBhcmFtcyIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiUmVnRXhwIiwiZWQiLCJEYXRlIiwic2QiLCJlZDIiLCJzZDIiLCJkaXNwbGF5Iiwib25DYW5jZWxOZXdXaWRnZXQiLCJvbldpZGdldFR5cGVTZWxlY3RDaGFuZ2VkIiwiZ2V0QmFzZU1hcFNlbGVjdG9yIiwiZ2V0RGF0YVR5cGUiLCJnZXREYXRhRm9ybSIsImdldEZvcm1CdXR0b25zIiwib25DcmVhdGVOZXdXaWRnZXQiLCJvbkRhdGFCYXNlTWFwU2VsZWN0Q2hhbmdlZCIsImJhc2VNYXBPcHRpb25zIiwib3B0aW9ucyIsIm9uV2lkZ2V0VGl0bGVDaGFuZ2UiLCJvbkRhdGFUeXBlU2VsZWN0Q2hhbmdlZCIsIm9uRGF0YVR5cGVTZWxlY3RDaGFuZ2VkRHVhbCIsIm9uSW1hZ2VDb2xsZWN0aW9uQ2hhbmdlIiwib25JbWFnZVBhcmFtc0NoYW5nZSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dXcmFwIiwicmVzaXplIiwic2V0VGltZW91dCIsImVhY2giLCJiaW5kRXZ0Iiwib25TdGFydERhdGVDaGFuZ2VkRHVhbCIsIm9uRW5kRGF0ZUNoYW5nZWREdWFsIiwib25TdGFydERhdGVDaGFuZ2VkIiwib25FbmREYXRlQ2hhbmdlZCIsIm9uU3RhcnREYXRlMkNoYW5nZWQiLCJvbkVuZERhdGUyQ2hhbmdlZCIsImRhdGVwaWNrZXIiLCJjaGFuZ2VNb250aCIsImNoYW5nZVllYXIiLCJkYXRlRm9ybWF0Iiwib25TZWxlY3QiLCJkYXRlVGV4dCIsIndhcm4iLCJtZXNzYWdlIiwib25XaWRnZXREdWFsTGF5ZXJDaGFuZ2UiLCJvbldpZGdldEJhbmRzQ2hhbmdlIiwib25XaWRnZXRNaW5DaGFuZ2UiLCJvbldpZGdldE1heENoYW5nZSIsIm9uV2lkZ2V0Q2xvdWRTY29yZUNoYW5nZSIsIm9uTmV4dFdpemFyZFN0ZXAiLCJvbldpZGdldEJhbmRzQ2hhbmdlRHVhbCIsIm9uV2lkZ2V0TWluQ2hhbmdlRHVhbCIsIm9uV2lkZ2V0TWF4Q2hhbmdlRHVhbCIsIm9uV2lkZ2V0Q2xvdWRTY29yZUNoYW5nZUR1YWwiLCJvblByZXZXaXphcmRTdGVwIiwib25JbWFnZUNvbGxlY3Rpb25DaGFuZ2VEdWFsIiwib25JbWFnZVBhcmFtc0NoYW5nZUR1YWwiLCJyZW1vdmVkV2lkZ2V0IiwiZ3JlbW92ZWRXaWRnZXQiLCJkZWxldGVXaWRnZXRGcm9tU2VydmVyIiwid2hpY2giLCJ0aGVJbWFnZSIsInhyb3ciLCJ5cm93IiwiaXRlbSIsIm9uQWRkSXRlbSIsIm9uTGF5b3V0Q2hhbmdlIiwiZ2VuZXJhdGVET00iLCJnZXROZXdXaWRnZXRGb3JtIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiaXNEcmFnZ2FibGUiLCJpc1Jlc2l6YWJsZSIsImNsYXNzTmFtZSIsIml0ZW1zIiwicm93SGVpZ2h0IiwiY29scyIsInJlbmRlcldpZGdldEVkaXRvclBhZ2UiLCJhcmdzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0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QURGO0FBRUwsYUFDSSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDSTtBQUFRLFVBQUUsRUFBQyxXQUFYO0FBQXVCLGVBQU8sRUFBRSxLQUFLK0ssU0FBckM7QUFBZ0QsaUJBQVMsRUFBQyxtQ0FBMUQ7QUFBOEYsYUFBSyxFQUFFO0FBQUN6RCxpQkFBTyxFQUFFO0FBQVY7QUFBckcsc0JBREosRUFFSSwyREFBQyxlQUFELGVBQXFCLEtBQUsxSyxLQUExQjtBQUNpQixjQUFNLEVBQUVvRCxNQUR6QjtBQUVpQixzQkFBYyxFQUFFLEtBQUtnTDtBQUZ0QyxVQUtLLEtBQUtDLFdBQUwsRUFMTCxDQUZKLEVBU0ssS0FBS0MsZ0JBQUwsRUFUTCxDQURKO0FBYUg7Ozs7RUFsd0NxQkMsNENBQUssQ0FBQ0MsYTs7Z0JBQTFCek8sVyxrQkFDb0I7QUFDbEIwTyxhQUFXLEVBQUUsSUFESztBQUVsQkMsYUFBVyxFQUFFLElBRks7QUFHbEJDLFdBQVMsRUFBRSxRQUhPO0FBSWxCQyxPQUFLLEVBQUUsQ0FKVztBQUtsQkMsV0FBUyxFQUFFLEdBTE87QUFNbEJULGdCQUFjLEVBQUUsMEJBQVcsQ0FBRSxDQU5YO0FBT2xCVSxNQUFJLEVBQUU7QUFQWSxDOztBQW13QzFCLElBQUlsQixjQUFKLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNtQixzQkFBVCxDQUFnQ0MsSUFBaEMsRUFBc0M7QUFDekNDLGtEQUFRLENBQUNDLE1BQVQsQ0FDSSwyREFBQyxXQUFELE9BREosRUFFSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBRko7QUFJSCxDIiwiZmlsZSI6IndpZGdldGxheW91dGVkaXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIndpZGdldGxheW91dGVkaXRvclwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvZ2VvLWRhc2gtd2lkZ2V0LWVkaXRvci5qc1wiLFwidmVuZG9yc35hY2NvdW50fmNvbGxlY3Rpb25+Z2VvZGFzaHJlYWN0fmhvbWV+aW5zdGl0dXRpb25+cHJvamVjdH50aW1lc3luY353aWRnZXRsYXlvdXRlZGl0b3JcIixcInZlbmRvcnN+d2lkZ2V0bGF5b3V0ZWRpdG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG4vL2ltcG9ydCBQdXJlUmVuZGVyTWl4aW4gZnJvbSAncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJztcblxuLy9pbXBvcnQgUmVhY3RHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0Jztcbi8vY29uc3QgUkdMID0gUmVhY3RHcmlkTGF5b3V0LldpZHRoUHJvdmlkZXIoUmVhY3RHcmlkTGF5b3V0KTtcblxuLy8gaW1wb3J0IFB1cmVSZW5kZXJNaXhpbiBmcm9tICdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nO1xuLy8gaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xuXG4vL2ltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy9pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbic7XG5cbi8vaW1wb3J0IFB1cmVSZW5kZXJNaXhpbiBmcm9tICdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nO1xuLy9jb25zdCBQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nKTsgLy9SZWFjdC5hZGRvbnMuUHVyZVJlbmRlck1peGluO1xuLy9pbXBvcnQgUmVhY3RHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0Jztcbi8vY29uc3QgUkdMID0gUmVhY3RHcmlkTGF5b3V0LldpZHRoUHJvdmlkZXIoUmVhY3RHcmlkTGF5b3V0KTtcbi8vaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xuLy9jb25zdCBHcmlkTGF5b3V0ID0gcmVxdWlyZSgncmVhY3QtZ3JpZC1sYXlvdXQnKTtcblxuLy9cblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vL2ltcG9ydCBQdXJlUmVuZGVyTWl4aW4gZnJvbSAncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJ1xuXG5pbXBvcnQgUkdMLCB7IFdpZHRoUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1ncmlkLWxheW91dCdcbmNvbnN0IFJlYWN0R3JpZExheW91dCA9IFdpZHRoUHJvdmlkZXIoUkdMKTtcbi8vIGltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0Jztcbi8vXG4vLyBjb25zdCBSR0wgPSBHcmlkTGF5b3V0LldpZHRoUHJvdmlkZXIoR3JpZExheW91dCk7XG5cblxuLy8gaW1wb3J0IHtHcmlkTGF5b3V0fSBmcm9tICdyZWFjdC1ncmlkLWxheW91dCdcblxuLy9jb25zdCBSR0wgPSBSZWFjdEdyaWRMYXlvdXQuV2lkdGhQcm92aWRlcihSZWFjdEdyaWRMYXlvdXQpO1xuLy9pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbnZhciBkZWJ1Z3JldHVybjtcbnZhciB0aGVMYXlvdXQgPSBbXTtcbnZhciBkYXNoYm9hcmRJRDtcbnZhciBnT2JqZWN0O1xudmFyIGhhdmVXaWRnZXRzID0gZmFsc2U7XG52YXIgYmFja3dpZGdldDtcbmNsYXNzIEJhc2ljTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc0RyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaXNSZXNpemFibGU6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogXCJsYXlvdXRcIixcbiAgICAgICAgaXRlbXM6IDAsXG4gICAgICAgIHJvd0hlaWdodDogMzAwLFxuICAgICAgICBvbkxheW91dENoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgY29sczogMTJcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyAgbGF5b3V0OiBbXSxcbiAgICAgICAgICAgIHdpZGdldHM6IFsgXSxcbiAgICAgICAgICAgIGltYWdlcnk6IFtdLFxuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkV2lkZ2V0VHlwZTogLTEsXG4gICAgICAgICAgICBzZWxlY3RlZERhdGFUeXBlOiAtMSxcbiAgICAgICAgICAgIFdpZGdldFRpdGxlOiAnJyxcbiAgICAgICAgICAgIGltYWdlQ29sbGVjdGlvbjogJycsXG4gICAgICAgICAgICBpbWFnZVBhcmFtczogJycsXG4gICAgICAgICAgICBkdWFsTGF5ZXI6IGZhbHNlLFxuICAgICAgICAgICAgV2lkZ2V0QmFzZU1hcDogJ29zbScsXG4gICAgICAgICAgICBzdGFydERhdGU6JycsXG4gICAgICAgICAgICBlbmREYXRlOicnLFxuICAgICAgICAgICAgc3RhcnREYXRlMjonJyxcbiAgICAgICAgICAgIGVuZERhdGUyOicnLFxuICAgICAgICAgICAgd2lkZ2V0QmFuZHM6JycsXG4gICAgICAgICAgICB3aWRnZXRNaW46JycsXG4gICAgICAgICAgICB3aWRnZXRNYXg6JycsXG4gICAgICAgICAgICB3aWRnZXRDbG91ZFNjb3JlOicnLFxuICAgICAgICAgICAgaW1hZ2VDb2xsZWN0aW9uRHVhbDogJycsXG4gICAgICAgICAgICBpbWFnZVBhcmFtc0R1YWw6ICcnLFxuICAgICAgICAgICAgc3RhcnREYXRlRHVhbDonJyxcbiAgICAgICAgICAgIGVuZERhdGVEdWFsOicnLFxuICAgICAgICAgICAgd2lkZ2V0QmFuZHNEdWFsOicnLFxuICAgICAgICAgICAgd2lkZ2V0TWluRHVhbDonJyxcbiAgICAgICAgICAgIHdpZGdldE1heER1YWw6JycsXG4gICAgICAgICAgICB3aWRnZXRDbG91ZFNjb3JlRHVhbDonJyxcbiAgICAgICAgICAgIEZvcm1SZWFkeTogZmFsc2UsXG4gICAgICAgICAgICB3aXphcmRTdGVwOiAxXG5cbiAgICAgICAgfTtcbiAgICAgICAgZ09iamVjdCA9IHRoaXM7XG4gICAgfTtcblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkTW91bnRcIik7XG4gICAgICAgIGZldGNoKHRoZVVSTCArIFwiL2lkL1wiICsgcGlkLClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtkYXNoYm9hcmRJRCA9IHJlc3BvbnNlLmRhc2hib2FyZElEOyAgcmV0dXJuIHJlc3BvbnNlfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS53aWRnZXRzLm1hcChmdW5jdGlvbih3aWRnZXQpe1xuICAgICAgICAgICAgICAgIGlmKHdpZGdldC5sYXlvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldC5sYXlvdXQueSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGF5b3V0LnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQ7fSkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGRlYnVncmV0dXJuID0gZGF0YSlcbiAgICAgICAgICAgIC8vLnRoZW4oZnVuY3Rpb24oZGF0YSl7aWYoZGF0YSl7dGhpcy5zZXRTdGF0ZSh7IHdpZGdldHM6IGRhdGF9KX0gIHJldHVybiByZXNwb25zZX0pXG4gICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkZ2V0czogZGF0YX0pKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7IGNvbnNvbGUubG9nKCd3aWRnZXRzIHNob3VsZCBiZSB1cGRhdGVkJyk7IGhhdmVXaWRnZXRzID0gdHJ1ZTsgcmV0dXJuIGRhdGE7fSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy5jaGVja1dpZGdldFN0cnVjdHVyZSgpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHtsYXlvdXQ6IHRoaXMuZ2VuZXJhdGVMYXlvdXQoKX0pKVxuICAgICAgICA7XG4gICAgICAgIGZldGNoKHRoZVJvb3QgKyBcIi9nZXQtYWxsLWltYWdlcnk/aW5zdGl0dXRpb25JZD1cIiArIGluc3RpdHV0aW9uSUQgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7ZGF0YS51bnNoaWZ0KHt0aXRsZTogJ09wZW4gU3RyZWV0IE1hcHMnLCBpZDogJ29zbSd9KTsgcmV0dXJuIGRhdGE7fSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7IGltYWdlcnk6IGRhdGEsIFdpZGdldEJhc2VNYXA6IGRhdGFbMF0uaWR9KSlcblxuICAgIH1cbiAgICBjaGVja1dpZGdldFN0cnVjdHVyZSgpe1xuICAgICAgICBsZXQgd2lkZ2V0cyA9IHRoaXMuc3RhdGUud2lkZ2V0cztcbiAgICAgICAgY29uc29sZS5sb2coJ0kgaGF2ZSAnICsgd2lkZ2V0cy5sZW5ndGggKyAnIHdpZGdldHMgdG8gY2hlY2snKTtcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHJvdyA9IDA7XG4gICAgICAgIHZhciBjb2x1bW4gPSAwO1xuICAgICAgICB2YXIgc1dpZGdldHMgPSBfLm9yZGVyQnkodGhpcy5zdGF0ZS53aWRnZXRzLCAnaWQnLCAnYXNjJyk7XG4gICAgICAgIHdpZGdldHMgPSBfLm1hcChzV2lkZ2V0cywgZnVuY3Rpb24od2lkZ2V0LCBpKSB7XG4gICAgICAgICAgICBpZih3aWRnZXQubGF5b3V0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHdpZGdldFsnZ3JpZGNvbHVtbiddKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdpZGdldFsnZ3JpZGNvbHVtbiddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih3aWRnZXRbJ2dyaWRyb3cnXSl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3aWRnZXRbJ2dyaWRyb3cnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmxheW91dC5pID0gaS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHdpZGdldC5ncmlkY29sdW1uKXtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgeDtcbiAgICAgICAgICAgICAgICBsZXQgdztcbiAgICAgICAgICAgICAgICBsZXQgeTtcbiAgICAgICAgICAgICAgICBsZXQgaDtcbiAgICAgICAgICAgICAgICBsZXQgbGF5b3V0O1xuICAgICAgICAgICAgICAgIC8vZG8gdGhlIHggYW5kIHdcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQod2lkZ2V0LmdyaWRjb2x1bW4uc3BsaXQoJyAnKVswXSkgLSAxO1xuICAgICAgICAgICAgICAgIHcgPSBwYXJzZUludCh3aWRnZXQuZ3JpZGNvbHVtbi5zcGxpdCgnICcpWzNdKTtcbiAgICAgICAgICAgICAgICBpZih3aWRnZXQuZ3JpZHJvdyl7XG4gICAgICAgICAgICAgICAgICAgIC8vZG8gdGhlIHkgYW5kIGhcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KHdpZGdldC5ncmlkcm93LnRyaW0oKS5zcGxpdCgnICcpWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGggPSB3aWRnZXQuZ3JpZHJvdy50cmltKCkuc3BsaXQoJyAnKVszXSAhPSBudWxsPyBwYXJzZUludCh3aWRnZXQuZ3JpZHJvdy50cmltKCkuc3BsaXQoJyAnKVszXSk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSAubGF5b3V0XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmxheW91dCA9IHt4IDogeCwgeTogeSwgdzogdywgaDogaH07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHdpZGdldFsnZ3JpZGNvbHVtbiddO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB3aWRnZXRbJ2dyaWRyb3cnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYod2lkZ2V0LnBvc2l0aW9uKXtcblxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCB4O1xuICAgICAgICAgICAgICAgIGxldCB3O1xuICAgICAgICAgICAgICAgIGxldCB5O1xuICAgICAgICAgICAgICAgIGxldCBoID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbGF5b3V0O1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkOiAnICsgd2lkZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29sdW1uOiAnICsgY29sdW1uKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2lkZ2V0LnBvc2l0aW9uOiAnICsgd2lkZ2V0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2lkZ2V0LndpZHRoOiAnICsgd2lkZ2V0LndpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm93OiAnICsgcm93KTtcbiAgICAgICAgICAgICAgICBpZihjb2x1bW4gKyBwYXJzZUludCh3aWRnZXQud2lkdGgpIDw9IDEyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gY29sdW1uICsgcGFyc2VJbnQod2lkZ2V0LndpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHBhcnNlSW50KHdpZGdldC53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJvdyArPTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZGdldC5sYXlvdXQgPSB7eCA6IHgsIHk6IHJvdywgdzogcGFyc2VJbnQod2lkZ2V0LndpZHRoKSwgaDogaCwgaTppfTtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBzdGFydGVyIGxheW91dCBiYXNlZCBvbiB0aGUgaSB2YWx1ZVxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gYWRkIGJvdGggbGF5b3V0IGFuZCBncmlkY29sdW1uL2dyaWRyb3cgcHJvcGVydGllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgeDtcbiAgICAgICAgICAgICAgICBsZXQgdztcbiAgICAgICAgICAgICAgICBsZXQgeTtcbiAgICAgICAgICAgICAgICBsZXQgaCA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IGxheW91dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWQ6ICcgKyB3aWRnZXQuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2x1bW46ICcgKyBjb2x1bW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aWRnZXQucG9zaXRpb246ICcgKyB3aWRnZXQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aWRnZXQud2lkdGg6ICcgKyB3aWRnZXQud2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb3c6ICcgKyByb3cpO1xuICAgICAgICAgICAgICAgIGlmKGNvbHVtbiArIDMgPD0gMTIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4ID0gY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBjb2x1bW4gKyAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcGFyc2VJbnQod2lkZ2V0LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgcm93ICs9MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmxheW91dCA9IHt4IDogeCwgeTogcm93LCB3OiBwYXJzZUludCh3aWRnZXQud2lkdGgpLCBoOiBoLCBpOml9O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd2lkZ2V0O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWRnZXRzOiB3aWRnZXRzfSk7XG4gICAgICAgIGlmKGNoYW5nZWQpe1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2ZXJXaWRnZXRzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2VuZXJhdGVncmlkY29sdW1uKHgsIHcpe1xuICAgICAgICByZXR1cm4gKHggKyAxKSArICcgLyBzcGFuICcgKyB3O1xuICAgIH1cbiAgICBnZW5lcmF0ZWdyaWRyb3coeCwgdyl7XG4gICAgICAgIHJldHVybiAoeCArIDEpICsgJyAvIHNwYW4gJyArIHc7XG4gICAgfVxuICAgIHVwZGF0ZVNlcnZlcldpZGdldHMoKXtcbiAgICAgICAgdmFyIGhvbGRSZWYgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3aWRnZXQpIHtcbiAgICAgICAgICAgIGxldCBhamF4dXJsID0gdGhlVVJMICsgXCIvdXBkYXRld2lkZ2V0L3dpZGdldC9cIiArIHdpZGdldC5pZDtcbiAgICAgICAgICAgIGhvbGRSZWYuc2VydmVJdFVwKGFqYXh1cmwsIHdpZGdldCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlcnZlSXRVcCh1cmwsIHdpZGdldCApXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICAgICAgICAgIGluZGV4VmFsOiB3aWRnZXQuaWQsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZGFzaElEOiBkYXNoYm9hcmRJRCxcbiAgICAgICAgICAgICAgICB3aWRnZXRKU09OOiBKU09OLnN0cmluZ2lmeSh3aWRnZXQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIG5vIGFjdGlvbiBuZWVkZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdCBmYWlsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZVdpZGdldEZyb21TZXJ2ZXIod2lkZ2V0KVxuICAgIHtcbiAgICAgICAgbGV0IGFqYXh1cmwgPSB0aGVVUkwgKyBcIi9kZWxldGV3aWRnZXQvd2lkZ2V0L1wiICsgd2lkZ2V0LmlkO1xuICAgICAgICB0aGlzLnNlcnZlSXRVcChhamF4dXJsLCB3aWRnZXQpO1xuICAgIH07XG5cbiAgICBnZW5lcmF0ZURPTSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dlbmVyYXRlRE9NJyk7XG4gICAgICAgIHZhciBsYXlvdXQgPSB0aGlzLnN0YXRlLmxheW91dDtcbiAgICAgICAgdmFyIGhvbGRSZWYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5tYXAodGhpcy5zdGF0ZS53aWRnZXRzLCBmdW5jdGlvbih3aWRnZXQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IG9uRHJhZ1N0YXJ0PXtob2xkUmVmLm9uRHJhZ1N0YXJ0fSBvbkRyYWdFbmQ9e2hvbGRSZWYub25EcmFnRW5kfSBrZXk9e2l9IGRhdGEtZ3JpZD17d2lkZ2V0LmxheW91dH0gY2xhc3NOYW1lPVwiZnJvbnQgd2lkZ2V0RWRpdG9yLXdpZGdldEJhY2tncm91bmRcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBob2xkUmVmLmdldEltYWdlQnlUeXBlKHdpZGdldC5wcm9wZXJ0aWVzWzBdKSArXCIpXCJ9fT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2lkZ2V0RWRpdG9yIHRpdGxlXCI+e3dpZGdldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4ge2Uuc3RvcFByb3BhZ2F0aW9uKCk7IGhvbGRSZWYub25SZW1vdmVJdGVtKGkpfX0gb25Nb3VzZURvd249e2Z1bmN0aW9uKGUpe2NvbnNvbGUubG9nKCdtb3VzZWRvd24gaGFwcGVuZWQnKTsgZS5zdG9wUHJvcGFnYXRpb24oKX19IGNsYXNzTmFtZT1cInJlbW92ZVwiPlxuICAgICAgICAgICAgICAgICAgICB4XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0LWRhbmdlclwiPlNhbXBsZSBJbWFnZTwvc3Bhbj48L2Rpdj47XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYWRkQ3VzdG9tSW1hZ2VyeShpbWFnZXJ5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlcnkpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGVVUkwucmVwbGFjZSgnL2dlby1kYXNoJywgJycpICsgXCIvYWRkLWdlb2Rhc2gtaW1hZ2VyeVwiLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoaW1hZ2VyeSlcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGFkZGluZyBjdXN0b20gaW1hZ2VyeSB0byBpbnN0aXR1dGlvbi4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlcnkgYWRkZWRcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGdldEdhdGV3YXlVcmwod2lkZ2V0LCBjb2xsZWN0aW9uTmFtZSl7XG4gICAgICAgIHZhciB1cmwgPSAnJztcblxuICAgICAgICBpZih3aWRnZXQuZmlsdGVyVHlwZSAhPSBudWxsICYmIHdpZGdldC5maWx0ZXJUeXBlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyIGZ0cyA9IHsnTEFORFNBVDUnOiAnTGFuZHNhdDVGaWx0ZXJlZCcsICdMQU5EU0FUNyc6ICdMYW5kc2F0N0ZpbHRlcmVkJywgJ0xBTkRTQVQ4JzonTGFuZHNhdDhGaWx0ZXJlZCcsICdTZW50aW5lbDInOiAnRmlsdGVyZWRTZW50aW5lbCd9O1xuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vY29sbGVjdC5lYXJ0aDo4ODg4L1wiICsgZnRzW3dpZGdldC5maWx0ZXJUeXBlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHdpZGdldC5JbWFnZUFzc2V0ICYmIHdpZGdldC5JbWFnZUFzc2V0Lmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovL2NvbGxlY3QuZWFydGg6ODg4OC9pbWFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYod2lkZ2V0LnByb3BlcnRpZXMgJiYgJ0ltYWdlQ29sbGVjdGlvbkN1c3RvbScgPT0gd2lkZ2V0LnByb3BlcnRpZXNbMF0pe1xuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vY29sbGVjdC5lYXJ0aDo4ODg4L21lYW5JbWFnZUJ5TW9zYWljQ29sbGVjdGlvbnNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNvbGxlY3Rpb25OYW1lLnRyaW0oKS5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly9jb2xsZWN0LmVhcnRoOjg4ODgvY2xvdWRNYXNrSW1hZ2VCeU1vc2FpY0NvbGxlY3Rpb25cIjtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly9jb2xsZWN0LmVhcnRoOjg4ODgvSW1hZ2VDb2xsZWN0aW9uYnlJbmRleFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcbiAgICBidWlsZEltYWdlcnlPYmplY3QoaW1nKXtcbiAgICAgICAgbGV0IGdhdGV3YXlVcmwgPSB0aGlzLmdldEdhdGV3YXlVcmwoaW1nKTtcbiAgICAgICAgbGV0IHRpdGxlID0gaW1nLmZpbHRlclR5cGUucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO30pICsgXCI6IFwiICsgaW1nLnN0YXJ0RGF0ZSArIFwiIHRvIFwiICsgaW1nLmVuZERhdGU7XG4gICAgICAgIGxldCBJbWFnZUFzc2V0ID0gaW1nLkltYWdlQXNzZXQgPyBpbWcuSW1hZ2VBc3NldCA6ICcnO1xuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgYXNzZXQ6ICcgKyBJbWFnZUFzc2V0KTtcbiAgICAgICAgbGV0IGlPYmplY3QgPSAge1xuICAgICAgICAgICAgaW5zdGl0dXRpb25JZDogaW5zdGl0dXRpb25JRCxcbiAgICAgICAgICAgIGltYWdlcnlUaXRsZTogdGl0bGUsXG4gICAgICAgICAgICBpbWFnZXJ5QXR0cmlidXRpb246IFwiR29vZ2xlIEVhcnRoIEVuZ2luZVwiLFxuICAgICAgICAgICAgZ2VlVXJsOiBnYXRld2F5VXJsLFxuICAgICAgICAgICAgZ2VlUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvblR5cGU6IGltZy5jb2xsZWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6IGltZy5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogaW1nLmVuZERhdGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyVHlwZTogaW1nLmZpbHRlclR5cGUsXG4gICAgICAgICAgICAgICAgdmlzUGFyYW1zOiBpbWcudmlzUGFyYW1zLFxuICAgICAgICAgICAgICAgIEltYWdlQXNzZXQ6IEltYWdlQXNzZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYoaW1nLkltYWdlQXNzZXQgJiYgaW1nLkltYWdlQXNzZXQubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgPSBpbWcuSW1hZ2VBc3NldC5zdWJzdHIoaW1nLkltYWdlQXNzZXQubGFzdEluZGV4T2YoXCIvXCIpICsgMSkucmVwbGFjZShuZXcgUmVnRXhwKCdfJywgJ2cnKSwgJyAnKTtcbiAgICAgICAgICAgIGlPYmplY3QuaW1hZ2VyeVRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBpT2JqZWN0LkltYWdlQXNzZXQgPSBpbWcuSW1hZ2VBc3NldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaU9iamVjdDtcblxuICAgIH07XG4gICAgb25XaWRnZXRUeXBlU2VsZWN0Q2hhbmdlZCA9IChldmVudCwgYW55dGhpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYW55dGhpbmcpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkV2lkZ2V0VHlwZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0ZWREYXRhVHlwZTogJy0xJyxcbiAgICAgICAgICAgIFdpZGdldFRpdGxlOiAnJyxcbiAgICAgICAgICAgIGltYWdlQ29sbGVjdGlvbjogJycsXG4gICAgICAgICAgICBpbWFnZVBhcmFtczogJycsXG4gICAgICAgICAgICBXaWRnZXRCYXNlTWFwOiAnb3NtJyxcbiAgICAgICAgICAgIGR1YWxMYXllcjogZmFsc2UsXG4gICAgICAgICAgICBzdGFydERhdGU6JycsXG4gICAgICAgICAgICBlbmREYXRlOicnLFxuICAgICAgICAgICAgc3RhcnREYXRlMjonJyxcbiAgICAgICAgICAgIGVuZERhdGUyOicnLFxuICAgICAgICAgICAgd2lkZ2V0QmFuZHM6JycsXG4gICAgICAgICAgICB3aWRnZXRNaW46JycsXG4gICAgICAgICAgICB3aWRnZXRNYXg6JycsXG4gICAgICAgICAgICB3aWRnZXRDbG91ZFNjb3JlOicnLFxuICAgICAgICAgICAgaW1hZ2VDb2xsZWN0aW9uRHVhbDogJycsXG4gICAgICAgICAgICBpbWFnZVBhcmFtc0R1YWw6ICcnLFxuICAgICAgICAgICAgc3RhcnREYXRlRHVhbDonJyxcbiAgICAgICAgICAgIGVuZERhdGVEdWFsOicnLFxuICAgICAgICAgICAgd2lkZ2V0QmFuZHNEdWFsOicnLFxuICAgICAgICAgICAgd2lkZ2V0TWluRHVhbDonJyxcbiAgICAgICAgICAgIHdpZGdldE1heER1YWw6JycsXG4gICAgICAgICAgICB3aWRnZXRDbG91ZFNjb3JlRHVhbDonJyxcbiAgICAgICAgICAgIEZvcm1SZWFkeTogZmFsc2UsXG4gICAgICAgICAgICB3aXphcmRTdGVwOiAxXG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uRHJhZ1N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYWcgc3RhcnQnKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKGUpO1xuICAgIH1cblxuICAgIG9uRHJhZ0VuZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmFnIGVuZCcpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VzZVVwKGUpO1xuICAgIH1cblxuICAgIG9uRGF0YVR5cGVTZWxlY3RDaGFuZ2VkID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0YVR5cGU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25DYW5jZWxOZXdXaWRnZXQgPSBldmVudCA9PntcbiAgICAgICAgY29uc29sZS5sb2coJ25lZWQgdG8gcmVzZXQgZm9ybSB2YWx1ZXMgdG8gZGVmYXVsdHMnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZFdpZGdldFR5cGU6ICctMScsXG4gICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWREYXRhVHlwZTogJy0xJyxcbiAgICAgICAgICAgIFdpZGdldFRpdGxlOiAnJyxcbiAgICAgICAgICAgIGltYWdlQ29sbGVjdGlvbjogJycsXG4gICAgICAgICAgICBpbWFnZVBhcmFtczogJycsXG4gICAgICAgICAgICBXaWRnZXRCYXNlTWFwOiAnb3NtJyxcbiAgICAgICAgICAgIGR1YWxMYXllcjogZmFsc2UsXG4gICAgICAgICAgICBzdGFydERhdGU6JycsXG4gICAgICAgICAgICBlbmREYXRlOicnLFxuICAgICAgICAgICAgc3RhcnREYXRlMjonJyxcbiAgICAgICAgICAgIGVuZERhdGUyOicnLFxuICAgICAgICAgICAgd2lkZ2V0QmFuZHM6JycsXG4gICAgICAgICAgICB3aWRnZXRNaW46JycsXG4gICAgICAgICAgICB3aWRnZXRNYXg6JycsXG4gICAgICAgICAgICB3aWRnZXRDbG91ZFNjb3JlOicnLFxuICAgICAgICAgICAgaW1hZ2VDb2xsZWN0aW9uRHVhbDogJycsXG4gICAgICAgICAgICBpbWFnZVBhcmFtc0R1YWw6ICcnLFxuICAgICAgICAgICAgc3RhcnREYXRlRHVhbDonJyxcbiAgICAgICAgICAgIGVuZERhdGVEdWFsOicnLFxuICAgICAgICAgICAgd2lkZ2V0QmFuZHNEdWFsOicnLFxuICAgICAgICAgICAgd2lkZ2V0TWluRHVhbDonJyxcbiAgICAgICAgICAgIHdpZGdldE1heER1YWw6JycsXG4gICAgICAgICAgICB3aWRnZXRDbG91ZFNjb3JlRHVhbDonJyxcbiAgICAgICAgICAgIEZvcm1SZWFkeTogZmFsc2UsXG4gICAgICAgICAgICB3aXphcmRTdGVwOiAxXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgb25OZXh0V2l6YXJkU3RlcCA9IGV2ZW50ID0+e1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aXphcmRTdGVwOiAyfSk7XG4gICAgfVxuICAgIG9uUHJldldpemFyZFN0ZXAgPSBldmVudCA9PntcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2l6YXJkU3RlcDogMX0pO1xuICAgIH1cbiAgICBvbkNyZWF0ZU5ld1dpZGdldCA9IGV2ZW50ID0+e1xuICAgICAgICB2YXIgQWRkSW1hZ2VUeXBlID0gW107XG4gICAgICAgIHZhciB3aWRnZXQgPSB7fTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5zdGF0ZS53aWRnZXRzLmxlbmd0aCA+IDA/KE1hdGgubWF4LmFwcGx5KE1hdGgsIHRoaXMuc3RhdGUud2lkZ2V0cy5tYXAoZnVuY3Rpb24obykgeyByZXR1cm4gby5pZDsgfSkpKSArIDE6IDA7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5XaWRnZXRUaXRsZTtcbiAgICAgICAgd2lkZ2V0LmlkID0gaWQ7XG4gICAgICAgIHdpZGdldC5uYW1lID0gbmFtZTtcbiAgICAgICAgbGV0IHl2YWwgPSAoKE1hdGgubWF4LmFwcGx5KE1hdGgsIHRoaXMuc3RhdGUud2lkZ2V0cy5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmxheW91dC55ICE9IG51bGwgPyBvLmxheW91dC55IDogMDtcbiAgICAgICAgfSkpKSArIDEpID4gLTEgPyAoTWF0aC5tYXguYXBwbHkoTWF0aCwgdGhpcy5zdGF0ZS53aWRnZXRzLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIG8ubGF5b3V0LnkgIT0gbnVsbCA/IG8ubGF5b3V0LnkgOiAwO1xuICAgICAgICB9KSkpICsgMSA6IDA7XG5cbiAgICAgICAgd2lkZ2V0LmxheW91dCA9IHtcbiAgICAgICAgICAgIGk6IGlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogeXZhbCwgLy8gcHV0cyBpdCBhdCB0aGUgYm90dG9tXG4gICAgICAgICAgICB3OiAzLFxuICAgICAgICAgICAgaDogMSxcbiAgICAgICAgICAgIG1pblc6IDNcbiAgICAgICAgfVxuICAgICAgICB3aWRnZXQuYmFzZU1hcCA9ICh0aGlzLnN0YXRlLmltYWdlcnkuZmlsdGVyKGltYWdlcnkgPT4gaW1hZ2VyeS5pZCA9PSB0aGlzLnN0YXRlLldpZGdldEJhc2VNYXApKVswXTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gXCJEdWFsSW1hZ2VDb2xsZWN0aW9uXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1aWxkIG91dCB0aGUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHRoZSB3aWRnZXQgZnJvbSB0aGUgc3RhdGUnKTtcbiAgICAgICAgICAgIHdpZGdldC5wcm9wZXJ0aWVzID0gW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl07XG4gICAgICAgICAgICB3aWRnZXQuZmlsdGVyVHlwZSA9ICcnO1xuICAgICAgICAgICAgd2lkZ2V0LnZpc1BhcmFtcyA9IHt9O1xuICAgICAgICAgICAgd2lkZ2V0LmR1YWxJbWFnZUNvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIGxldCBpbWcxID0ge307XG4gICAgICAgICAgICBsZXQgaW1nMiA9IHt9O1xuICAgICAgICAgICAgaW1nMS5jb2xsZWN0aW9uVHlwZSA9ICdJbWFnZUNvbGxlY3Rpb24nICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlO1xuICAgICAgICAgICAgaW1nMi5jb2xsZWN0aW9uVHlwZSA9ICdJbWFnZUNvbGxlY3Rpb24nICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlRHVhbDtcbiAgICAgICAgICAgIGltZzEuc3RhcnREYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGU7XG4gICAgICAgICAgICBpbWcxLmVuZERhdGUgPSB0aGlzLnN0YXRlLmVuZERhdGU7XG4gICAgICAgICAgICBpbWcyLnN0YXJ0RGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlRHVhbDtcbiAgICAgICAgICAgIGltZzIuZW5kRGF0ZSA9IHRoaXMuc3RhdGUuZW5kRGF0ZUR1YWw7XG4gICAgICAgICAgICBpZiAoWydMQU5EU0FUNScsICdMQU5EU0FUNycsICdMQU5EU0FUOCcsICdTZW50aW5lbDInXS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaW1nMS5maWx0ZXJUeXBlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlICE9IG51bGwgPyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGUgOiAnJztcbiAgICAgICAgICAgICAgICBpbWcxLnZpc1BhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFuZHM6IHRoaXMuc3RhdGUud2lkZ2V0QmFuZHMsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogdGhpcy5zdGF0ZS53aWRnZXRNaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogdGhpcy5zdGF0ZS53aWRnZXRNYXgsXG4gICAgICAgICAgICAgICAgICAgIGNsb3VkTGVzc1RoYW46IHRoaXMuc3RhdGUud2lkZ2V0Q2xvdWRTY29yZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZEN1c3RvbUltYWdlcnkodGhpcy5idWlsZEltYWdlcnlPYmplY3QoaW1nMSkpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChbJ0xBTkRTQVQ1JywgJ0xBTkRTQVQ3JywgJ0xBTkRTQVQ4JywgJ1NlbnRpbmVsMiddLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhVHlwZUR1YWwpKSB7XG4gICAgICAgICAgICAgICAgaW1nMi5maWx0ZXJUeXBlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlRHVhbCAhPSBudWxsID8gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlRHVhbCA6ICcnO1xuICAgICAgICAgICAgICAgIGltZzIudmlzUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBiYW5kczogdGhpcy5zdGF0ZS53aWRnZXRCYW5kc0R1YWwsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogdGhpcy5zdGF0ZS53aWRnZXRNaW5EdWFsLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IHRoaXMuc3RhdGUud2lkZ2V0TWF4RHVhbCxcbiAgICAgICAgICAgICAgICAgICAgY2xvdWRMZXNzVGhhbjogdGhpcy5zdGF0ZS53aWRnZXRDbG91ZFNjb3JlRHVhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZEN1c3RvbUltYWdlcnkodGhpcy5idWlsZEltYWdlcnlPYmplY3QoaW1nMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkZ2V0LmR1YWxJbWFnZUNvbGxlY3Rpb24ucHVzaChpbWcxKTtcbiAgICAgICAgICAgIHdpZGdldC5kdWFsSW1hZ2VDb2xsZWN0aW9uLnB1c2goaW1nMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSBcImltYWdlQXNzZXRcIilcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkZ2V0LnByb3BlcnRpZXMgPSBbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXTtcbiAgICAgICAgICAgIHdpZGdldC5maWx0ZXJUeXBlID0gJyc7XG4gICAgICAgICAgICB3aWRnZXQudmlzUGFyYW1zID0gdGhpcy5zdGF0ZS5pbWFnZVBhcmFtcztcbiAgICAgICAgICAgIHdpZGdldC5JbWFnZUFzc2V0ID0gdGhpcy5zdGF0ZS5pbWFnZUNvbGxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmFkZEN1c3RvbUltYWdlcnkodGhpcy5idWlsZEltYWdlcnlPYmplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBJbWFnZUFzc2V0OiB3aWRnZXQuSW1hZ2VBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclR5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB2aXNQYXJhbXM6IHdpZGdldC52aXNQYXJhbXNcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb2xsZWN0aW9uVHlwZTogaW1nLmNvbGxlY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogaW1nLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBpbWcuZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJUeXBlOiBpbWcuZmlsdGVyVHlwZSxcbiAgICAgICAgICAgICAgICB2aXNQYXJhbXM6IGltZy52aXNQYXJhbXNcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vc2hvdWxkIGFkZCBjdXN0b20gaW1hZ2VyeSBoZXJlIGFzIHdlbGwgaSBhc3N1bWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB3VHlwZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdUaW1lU2VyaWVzJyA/IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhVHlwZS50b0xvd2VyQ2FzZSgpICsgdGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgOiB0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnSW1hZ2VDb2xsZWN0aW9uJyA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlIDogdGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ3N0YXRpc3RpY3MnID8gJ2dldFN0YXRzJyA6ICdjdXN0b20nO1xuICAgICAgICAgICAgdmFyIHByb3AxID0gJyc7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgdmFyIHByb3A0ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlICE9IG51bGwgPyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGUgOiAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGUgPT0gJ0N1c3RvbScpIHtcbiAgICAgICAgICAgICAgICAvL21vcmUgd29yayB0byBkbyB0byBsYWJlbCB0aGUgdHlwZSBhbmQgYWRkXG4gICAgICAgICAgICAgICAgcHJvcDEgPSB0aGlzLnN0YXRlLmltYWdlQ29sbGVjdGlvbjtcbiAgICAgICAgICAgICAgICB3aWRnZXQudmlzUGFyYW1zID0gdGhpcy5zdGF0ZS5pbWFnZVBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BlcnRpZXNbMF0gPSB3VHlwZTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNbMV0gPSBwcm9wMTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNbMl0gPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNbM10gPSB0aGlzLnN0YXRlLmVuZERhdGU7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzWzRdID0gcHJvcDQ7XG5cbiAgICAgICAgICAgIHdpZGdldC5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgICAgIGlmIChbJ0xBTkRTQVQ1JywgJ0xBTkRTQVQ3JywgJ0xBTkRTQVQ4JywgJ1NlbnRpbmVsMiddLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhVHlwZSkpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuZmlsdGVyVHlwZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhVHlwZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQudmlzUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBiYW5kczogdGhpcy5zdGF0ZS53aWRnZXRCYW5kcyxcbiAgICAgICAgICAgICAgICAgICAgbWluOiB0aGlzLnN0YXRlLndpZGdldE1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLnN0YXRlLndpZGdldE1heCxcbiAgICAgICAgICAgICAgICAgICAgY2xvdWRMZXNzVGhhbjogdGhpcy5zdGF0ZS53aWRnZXRDbG91ZFNjb3JlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tSW1hZ2VyeSh0aGlzLmJ1aWxkSW1hZ2VyeU9iamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25UeXBlOidJbWFnZUNvbGxlY3Rpb24nICsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhdGUuc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiB0aGlzLnN0YXRlLmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclR5cGU6IHdpZGdldC5maWx0ZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICB2aXNQYXJhbXM6IHdpZGdldC52aXNQYXJhbXNcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWRnZXQuZHVhbExheWVyID0gdGhpcy5zdGF0ZS5kdWFsTGF5ZXI7XG4gICAgICAgICAgICBpZiAod2lkZ2V0LmR1YWxMYXllcikge1xuICAgICAgICAgICAgICAgIHdpZGdldC5kdWFsU3RhcnQgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZTI7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmR1YWxFbmQgPSB0aGlzLnN0YXRlLmVuZERhdGUyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHdpZGdldCk7XG4gICAgICAgIHZhciBob2xkUmVmID0gdGhpcztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGVVUkwgKyBcIi9jcmVhdGV3aWRnZXQvd2lkZ2V0XCIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICAgICAgICAgIHdpZGdldDogSlNPTi5zdHJpbmdpZnkod2lkZ2V0KSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwSUQ6IHBpZCxcbiAgICAgICAgICAgICAgICBkYXNoSUQ6IGRhc2hib2FyZElELFxuICAgICAgICAgICAgICAgIHdpZGdldEpTT046IEpTT04uc3RyaW5naWZ5KHdpZGdldClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG15V2lkZ2V0ID0gSlNPTi5wYXJzZSh0aGlzLndpZGdldCk7XG4gICAgICAgICAgICAgICAgYmFja3dpZGdldCA9IG15V2lkZ2V0O1xuICAgICAgICAgICAgICAgIGhvbGRSZWYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXRzOiBob2xkUmVmLnN0YXRlLndpZGdldHMuY29uY2F0KG15V2lkZ2V0KSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRXaWRnZXRUeXBlOiAnLTEnLFxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGFUeXBlOiAnLTEnLFxuICAgICAgICAgICAgICAgICAgICBXaWRnZXRUaXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlQ29sbGVjdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlUGFyYW1zOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgV2lkZ2V0QmFzZU1hcDogJ29zbScsXG4gICAgICAgICAgICAgICAgICAgIGR1YWxMYXllcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTonJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTonJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlMjonJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTI6JycsXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJhbmRzOicnLFxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRNaW46JycsXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldE1heDonJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0Q2xvdWRTY29yZTonJyxcbiAgICAgICAgICAgICAgICAgICAgRm9ybVJlYWR5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcbiAgICBvbkRhdGFCYXNlTWFwU2VsZWN0Q2hhbmdlZCA9IGV2ZW50ID0+e1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtXaWRnZXRCYXNlTWFwOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uV2lkZ2V0VGl0bGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1dpZGdldFRpdGxlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uSW1hZ2VDb2xsZWN0aW9uQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWFnZUNvbGxlY3Rpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG4gICAgb25JbWFnZVBhcmFtc0NoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VQYXJhbXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG4gICAgb25XaWRnZXREdWFsTGF5ZXJDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2R1YWxMYXllcjogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KTtcbiAgICB9O1xuICAgIG9uV2lkZ2V0QmFuZHNDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZGdldEJhbmRzOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uV2lkZ2V0TWluQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWRnZXRNaW46IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG4gICAgb25XaWRnZXRNYXhDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZGdldE1heDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcbiAgICBvblN0YXJ0RGF0ZUNoYW5nZWQgPSBkYXRlID0+IHtcbiAgICAgICAgaWYoZGF0ZS50YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGRhdGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRlOiBkYXRlLnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFydERhdGU6ICcnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFydERhdGU6IGRhdGV9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgb25FbmREYXRlQ2hhbmdlZCA9IGRhdGUgPT4ge1xuICAgICAgICBpZihkYXRlLnRhcmdldClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoZGF0ZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmREYXRlOiBkYXRlLnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmREYXRlOiAnJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5kRGF0ZTogZGF0ZX0pO1xuICAgICAgICAgICAgdGhpcy5jaGVja0RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25XaWRnZXRDbG91ZFNjb3JlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWRnZXRDbG91ZFNjb3JlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uSW1hZ2VDb2xsZWN0aW9uQ2hhbmdlRHVhbCA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VDb2xsZWN0aW9uRHVhbDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcbiAgICBvbkltYWdlUGFyYW1zQ2hhbmdlRHVhbCA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VQYXJhbXNEdWFsOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uV2lkZ2V0QmFuZHNDaGFuZ2VEdWFsID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWRnZXRCYW5kc0R1YWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG4gICAgb25XaWRnZXRNaW5DaGFuZ2VEdWFsID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWRnZXRNaW5EdWFsOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uV2lkZ2V0TWF4Q2hhbmdlRHVhbCA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkZ2V0TWF4RHVhbDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcbiAgICBvbldpZGdldENsb3VkU2NvcmVDaGFuZ2VEdWFsID0gZXZlbnQgPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZGdldENsb3VkU2NvcmVEdWFsOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuICAgIG9uU3RhcnREYXRlQ2hhbmdlZER1YWwgPSBkYXRlID0+IHtcbiAgICAgICAgaWYoZGF0ZS50YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGRhdGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRlRHVhbDogZGF0ZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRlRHVhbDogJyd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0RGF0ZUR1YWw6IGRhdGV9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgb25FbmREYXRlQ2hhbmdlZER1YWwgPSBkYXRlID0+IHtcbiAgICAgICAgaWYoZGF0ZS50YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGRhdGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5kRGF0ZUR1YWw6IGRhdGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuZERhdGVEdWFsOiAnJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5kRGF0ZUR1YWw6IGRhdGV9KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEYXRlc0R1YWwoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgb25EYXRhVHlwZVNlbGVjdENoYW5nZWREdWFsID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0YVR5cGVEdWFsOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjaGVja0RhdGVzRHVhbCgpIHtcbiAgICAgICAgdmFyIGVkID0gbmV3IERhdGUodGhpcy5zdGF0ZS5lbmREYXRlRHVhbCk7XG4gICAgICAgIHZhciBzZCA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuc3RhcnREYXRlRHVhbCk7XG4gICAgICAgIGlmKCEgdGhpcy5zdGF0ZS5kdWFsTGF5ZXIpIHtcbiAgICAgICAgICAgIGlmIChlZCA+IHNkICYmIHRoaXMuc3RhdGUuRm9ybVJlYWR5ICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtGb3JtUmVhZHk6IHRydWV9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWQgPCBzZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLkZvcm1SZWFkeSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe0Zvcm1SZWFkeTogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdmFyIGVkMiA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuZW5kRGF0ZTIpO1xuICAgICAgICAgICAgdmFyIHNkMiA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuc3RhcnREYXRlMik7XG5cbiAgICAgICAgICAgIGlmIChlZCA+IHNkICYmIGVkMiA+IHNkMiAmJiB0aGlzLnN0YXRlLkZvcm1SZWFkeSAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Rm9ybVJlYWR5OiB0cnVlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVkIDwgc2QgfHwgZWQyIDwgc2QyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuRm9ybVJlYWR5ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Rm9ybVJlYWR5OiBmYWxzZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIG9uU3RhcnREYXRlMkNoYW5nZWQgPSBkYXRlID0+IHtcbiAgICAgICAgaWYoZGF0ZS50YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGRhdGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRlMjogZGF0ZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRlMjogJyd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0RGF0ZTI6IGRhdGV9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgb25FbmREYXRlMkNoYW5nZWQgPSBkYXRlID0+IHtcbiAgICAgICAgaWYoZGF0ZS50YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGRhdGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5kRGF0ZTI6IGRhdGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuZERhdGUyOiAnJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5kRGF0ZTI6IGRhdGV9KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEYXRlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGVja0RhdGVzKCkge1xuICAgICAgICB2YXIgZWQgPSBuZXcgRGF0ZSh0aGlzLnN0YXRlLmVuZERhdGUpO1xuICAgICAgICB2YXIgc2QgPSBuZXcgRGF0ZSh0aGlzLnN0YXRlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIGlmKCEgdGhpcy5zdGF0ZS5kdWFsTGF5ZXIpIHtcbiAgICAgICAgICAgIGlmIChlZCA+IHNkICYmIHRoaXMuc3RhdGUuRm9ybVJlYWR5ICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtGb3JtUmVhZHk6IHRydWV9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWQgPCBzZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLkZvcm1SZWFkeSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe0Zvcm1SZWFkeTogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdmFyIGVkMiA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuZW5kRGF0ZTIpO1xuICAgICAgICAgICAgdmFyIHNkMiA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuc3RhcnREYXRlMik7XG5cbiAgICAgICAgICAgIGlmIChlZCA+IHNkICYmIGVkMiA+IHNkMiAmJiB0aGlzLnN0YXRlLkZvcm1SZWFkeSAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Rm9ybVJlYWR5OiB0cnVlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVkIDwgc2QgfHwgZWQyIDwgc2QyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuRm9ybVJlYWR5ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Rm9ybVJlYWR5OiBmYWxzZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIGdldE5ld1dpZGdldEZvcm0oKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNFZGl0aW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGUgc2hvd1wiIHN0eWxlPXt7ZGlzcGxheTogJ2Jsb2NrJ319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkNyZWF0ZSBXaWRnZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17dGhpcy5vbkNhbmNlbE5ld1dpZGdldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRUeXBlU2VsZWN0XCI+VHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2lkZ2V0VHlwZVNlbGVjdFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZX0gaWQ9XCJ3aWRnZXRUeXBlU2VsZWN0XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uV2lkZ2V0VHlwZVNlbGVjdENoYW5nZWQoZSwgJ2kgYW0gYW55dGhpbmcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPlBsZWFzZSBzZWxlY3QgdHlwZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiSW1hZ2UgQ29sbGVjdGlvblwiIHZhbHVlPVwiSW1hZ2VDb2xsZWN0aW9uXCI+SW1hZ2UgQ29sbGVjdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiVGltZSBTZXJpZXMgR3JhcGhcIiB2YWx1ZT1cIlRpbWVTZXJpZXNcIj5UaW1lIFNlcmllcyBHcmFwaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiU3RhdGlzdGljc1wiIHZhbHVlPVwic3RhdGlzdGljc1wiPlN0YXRpc3RpY3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIkR1YWwgSW1hZ2UgQ29sbGVjdGlvblwiIHZhbHVlPVwiRHVhbEltYWdlQ29sbGVjdGlvblwiPkR1YWwgSW1hZ2UgQ29sbGVjdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiSW1hZ2UgQXNzZXRcIiB2YWx1ZT1cImltYWdlQXNzZXRcIj5JbWFnZSBBc3NldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRCYXNlTWFwU2VsZWN0b3IoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldERhdGFUeXBlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXREYXRhRm9ybSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRGb3JtQnV0dG9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93XCI+IDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Rm9ybUJ1dHRvbnMoKXtcbiAgICAgICAgLy9uZWVkIHRvIGNoZWNrIGlmIGZvcm0gaXMgcmVhZHksIGlmIG5vdCBqdXN0IGFkZCB0aGUgY2FuY2VsIGJ1dHRvbiwgb3IgZGlzYWJsZSB0aGUgY3JlYXRlP1xuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMub25DYW5jZWxOZXdXaWRnZXR9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vbkNyZWF0ZU5ld1dpZGdldH0gZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLkZvcm1SZWFkeX0+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICB9XG4gICAgZ2V0QmFzZU1hcFNlbGVjdG9yKCl7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdJbWFnZUNvbGxlY3Rpb24nIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdEdWFsSW1hZ2VDb2xsZWN0aW9uJyB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnaW1hZ2VBc3NldCcpIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRJbmRpY2VzU2VsZWN0XCI+QmFzZW1hcDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2lkZ2V0SW5kaWNlc1NlbGVjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLldpZGdldEJhc2VNYXB9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIndpZGdldEluZGljZXNTZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5vbkRhdGFCYXNlTWFwU2VsZWN0Q2hhbmdlZH0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmJhc2VNYXBPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7cmV0dXJuO31cbiAgICB9XG4gICAgYmFzZU1hcE9wdGlvbnMoKXtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IF8ubWFwKHRoaXMuc3RhdGUuaW1hZ2VyeSwgZnVuY3Rpb24oaW1hZ2VyeSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbWFnZXJ5LmlkfSB2YWx1ZT17aW1hZ2VyeS5pZH0+IHtpbWFnZXJ5LnRpdGxlfSA8L29wdGlvbj5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBnZXREYXRhVHlwZSgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBkYXRhdHlwZScpO1xuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnLTEnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQmxhbmsnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ3N0YXRpc3RpY3MnKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLkZvcm1SZWFkeSAhPSB0cnVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgRm9ybVJlYWR5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndpZGdldFRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2lkZ2V0VGl0bGVcIiBpZD1cIndpZGdldFRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUuV2lkZ2V0VGl0bGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0VGl0bGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnaW1hZ2VBc3NldCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuRm9ybVJlYWR5ICE9IHRydWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBGb3JtUmVhZHk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8YnIvPlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ0ltYWdlQ29sbGVjdGlvbicpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRJbmRpY2VzU2VsZWN0XCI+RGF0YTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2lkZ2V0SW5kaWNlc1NlbGVjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwid2lkZ2V0SW5kaWNlc1NlbGVjdFwiIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVR5cGVTZWxlY3RDaGFuZ2VkfSA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiIGNsYXNzTmFtZT1cIlwiID5QbGVhc2Ugc2VsZWN0IHR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIk5EVklcIiB2YWx1ZT1cIk5EVklcIj5ORFZJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJFVklcIiB2YWx1ZT1cIkVWSVwiPkVWSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiRVZJIDJcIiB2YWx1ZT1cIkVWSTJcIj5FVkkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTkRNSVwiIHZhbHVlPVwiTkRNSVwiPk5ETUk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIk5EV0lcIiB2YWx1ZT1cIk5EV0lcIj5ORFdJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJMQU5EU0FUIDVcIiB2YWx1ZT1cIkxBTkRTQVQ1XCI+TEFORFNBVCA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJMQU5EU0FUIDdcIiB2YWx1ZT1cIkxBTkRTQVQ3XCI+TEFORFNBVCA3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJMQU5EU0FUIDhcIiB2YWx1ZT1cIkxBTkRTQVQ4XCI+TEFORFNBVCA4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJTZW50aW5lbC0yXCIgdmFsdWU9XCJTZW50aW5lbDJcIj5TZW50aW5lbC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJDdXN0b20gd2lkZ2V0XCIgdmFsdWU9XCJDdXN0b21cIj5DdXN0b20gd2lkZ2V0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ0R1YWxJbWFnZUNvbGxlY3Rpb24nKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLndpemFyZFN0ZXAgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1wibXQtNCB0ZXh0LWNlbnRlciB0ZXh0LWluZm9cIn0+RHVhbCBpbWFnZUNvbGxlY3Rpb24gU3RlcCAxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRJbmRpY2VzU2VsZWN0XCI+RGF0YTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIndpZGdldEluZGljZXNTZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIndpZGdldEluZGljZXNTZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5vbkRhdGFUeXBlU2VsZWN0Q2hhbmdlZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCIgY2xhc3NOYW1lPVwiXCIgPlBsZWFzZSBzZWxlY3QgdHlwZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIk5EVklcIiB2YWx1ZT1cIk5EVklcIj5ORFZJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiRVZJXCIgdmFsdWU9XCJFVklcIj5FVkk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJFVkkgMlwiIHZhbHVlPVwiRVZJMlwiPkVWSSAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTkRNSVwiIHZhbHVlPVwiTkRNSVwiPk5ETUk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJORFdJXCIgdmFsdWU9XCJORFdJXCI+TkRXSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIkxBTkRTQVQgNVwiIHZhbHVlPVwiTEFORFNBVDVcIj5MQU5EU0FUIDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJMQU5EU0FUIDdcIiB2YWx1ZT1cIkxBTkRTQVQ3XCI+TEFORFNBVCA3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTEFORFNBVCA4XCIgdmFsdWU9XCJMQU5EU0FUOFwiPkxBTkRTQVQgODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIlNlbnRpbmVsLTJcIiB2YWx1ZT1cIlNlbnRpbmVsMlwiPlNlbnRpbmVsLTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJDdXN0b20gd2lkZ2V0XCIgdmFsdWU9XCJDdXN0b21cIj5DdXN0b20gd2lkZ2V0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17XCJtdC00IHRleHQtY2VudGVyIHRleHQtaW5mb1wifT5EdWFsIGltYWdlQ29sbGVjdGlvbiBTdGVwIDI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndpZGdldEluZGljZXNTZWxlY3QyXCI+RGF0YSAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2lkZ2V0SW5kaWNlc1NlbGVjdDJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlRHVhbH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ3aWRnZXRJbmRpY2VzU2VsZWN0XCIgb25DaGFuZ2U9e3RoaXMub25EYXRhVHlwZVNlbGVjdENoYW5nZWREdWFsfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIiBjbGFzc05hbWU9XCJcIiA+UGxlYXNlIHNlbGVjdCB0eXBlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTkRWSVwiIHZhbHVlPVwiTkRWSVwiPk5EVkkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIkVWSVwiIHZhbHVlPVwiRVZJXCI+RVZJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiRVZJIDJcIiB2YWx1ZT1cIkVWSTJcIj5FVkkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIk5ETUlcIiB2YWx1ZT1cIk5ETUlcIj5ORE1JPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTkRXSVwiIHZhbHVlPVwiTkRXSVwiPk5EV0k8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJMQU5EU0FUIDVcIiB2YWx1ZT1cIkxBTkRTQVQ1XCI+TEFORFNBVCA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTEFORFNBVCA3XCIgdmFsdWU9XCJMQU5EU0FUN1wiPkxBTkRTQVQgNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIkxBTkRTQVQgOFwiIHZhbHVlPVwiTEFORFNBVDhcIj5MQU5EU0FUIDg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJTZW50aW5lbC0yXCIgdmFsdWU9XCJTZW50aW5lbDJcIj5TZW50aW5lbC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiQ3VzdG9tIHdpZGdldFwiIHZhbHVlPVwiQ3VzdG9tXCI+Q3VzdG9tIHdpZGdldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRJbmRpY2VzU2VsZWN0XCI+RGF0YTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2lkZ2V0SW5kaWNlc1NlbGVjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwid2lkZ2V0SW5kaWNlc1NlbGVjdFwiIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVR5cGVTZWxlY3RDaGFuZ2VkfSA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiIGNsYXNzTmFtZT1cIlwiID5QbGVhc2Ugc2VsZWN0IHR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIk5EVklcIiB2YWx1ZT1cIk5EVklcIj5ORFZJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJFVklcIiB2YWx1ZT1cIkVWSVwiPkVWSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiRVZJIDJcIiB2YWx1ZT1cIkVWSTJcIj5FVkkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGxhYmVsPVwiTkRNSVwiIHZhbHVlPVwiTkRNSVwiPk5ETUk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBsYWJlbD1cIk5EV0lcIiB2YWx1ZT1cIk5EV0lcIj5ORFdJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbGFiZWw9XCJDdXN0b20gd2lkZ2V0XCIgdmFsdWU9XCJDdXN0b21cIj5DdXN0b20gd2lkZ2V0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgfVxuICAgIGdldERhdGFGb3JtKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdpbWFnZUFzc2V0JylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRUaXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndpZGdldFRpdGxlXCIgaWQ9XCJ3aWRnZXRUaXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLldpZGdldFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25XaWRnZXRUaXRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlQ29sbGVjdGlvblwiPkdFRSBJbWFnZSBBc3NldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWFnZUNvbGxlY3Rpb25cIiBpZD1cImltYWdlQ29sbGVjdGlvblwiIHBsYWNlaG9sZGVyPXtcIkxBTkRTQVQvTEM4X0wxVF9UT0FcIn0gdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VDb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25JbWFnZUNvbGxlY3Rpb25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVBhcmFtc1wiPkltYWdlIFBhcmFtZXRlcnMgKGpzb24gZm9ybWF0KTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cImpzb24gZm9ybWF0XCIgcm93cz1cIjFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj17XCJ7XFxcImJhbmRzXFxcIjogXFxcIkI0LCBCMywgQjJcXFwiLCBcXG5cXFwibWluXFxcIjowLCBcXG5cXFwibWF4XFxcIjogMC4zfVwifSBvbkNoYW5nZT17dGhpcy5vbkltYWdlUGFyYW1zQ2hhbmdlfSByb3dzPVwiNFwiIHZhbHVlPXt0aGlzLnN0YXRlLmltYWdlUGFyYW1zfSBzdHlsZT17e292ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIHJlc2l6ZTogJ3ZlcnRpY2FsJ319PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlID09ICctMScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCbGFuaycpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyQoXCIuaW5wdXQtZGF0ZXJhbmdlIGlucHV0XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbml0OiAnICsgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiaW5kRXZ0ID0gdGhpcy5pZCA9PSAnc0RhdGVfbmV3X2Nvb2tlZER1YWwnPyBnT2JqZWN0Lm9uU3RhcnREYXRlQ2hhbmdlZER1YWw6IHRoaXMuaWQgPT0gJ2VEYXRlX25ld19jb29rZWREdWFsJz8gZ09iamVjdC5vbkVuZERhdGVDaGFuZ2VkRHVhbDogdGhpcy5pZCA9PSAnc0RhdGVfbmV3X2Nvb2tlZCc/IGdPYmplY3Qub25TdGFydERhdGVDaGFuZ2VkOiB0aGlzLmlkID09ICdlRGF0ZV9uZXdfY29va2VkJz8gZ09iamVjdC5vbkVuZERhdGVDaGFuZ2VkOiB0aGlzLmlkICAgPT0gJ3NEYXRlX25ld19jb29rZWQyJz8gZ09iamVjdC5vblN0YXJ0RGF0ZTJDaGFuZ2VkIDogZ09iamVjdC5vbkVuZERhdGUyQ2hhbmdlZDtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbnRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXktbW0tZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbihkYXRlVGV4dCl7Y29uc29sZS5sb2coZGF0ZVRleHQpOyBiaW5kRXZ0KHRoaXMudmFsdWUpO31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTt9LDI1MCk7XG4gICAgICAgICAgICBpZihbJ0xBTkRTQVQ1JywgJ0xBTkRTQVQ3JywgJ0xBTkRTQVQ4JywgJ1NlbnRpbmVsMiddLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhVHlwZSkgJiYgdGhpcy5zdGF0ZS53aXphcmRTdGVwID09IDEpe1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRUaXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aWRnZXRUaXRsZVwiIGlkPVwid2lkZ2V0VGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5XaWRnZXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldFRpdGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHRoZSBEYXRlIFJhbmdlIHlvdSB3b3VsZCBsaWtlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1kYXRlcmFuZ2VcIiBpZD1cInJhbmdlX25ld19jb29rZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25TdGFydERhdGVDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGV9IHBsYWNlaG9sZGVyPXtcIllZWVktTU0tRERcIn0gaWQ9XCJzRGF0ZV9uZXdfY29va2VkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPnRvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbkVuZERhdGVDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbmREYXRlfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwiZURhdGVfbmV3X2Nvb2tlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ0R1YWxJbWFnZUNvbGxlY3Rpb24nPyAnbm9uZSc6ICdibG9jayd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2lkZ2V0RHVhbExheWVyXCI+RHVhbCB0aW1lIHNwYW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3aWRnZXREdWFsTGF5ZXJcIiBpZD1cIndpZGdldER1YWxMYXllclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHVhbExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0RHVhbExheWVyQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheSA6IHRoaXMuc3RhdGUuZHVhbExheWVyID09IHRydWU/ICdibG9jayc6ICdub25lJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCB0aGUgRGF0ZSBSYW5nZSBmb3IgdGhlIHRvcCBsYXllcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWRhdGVyYW5nZVwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZDJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZTJDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGUyfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwic0RhdGVfbmV3X2Nvb2tlZDJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPnRvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25FbmREYXRlMkNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmVuZERhdGUyfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwiZURhdGVfbmV3X2Nvb2tlZDJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRCYW5kc1wiPkJhbmRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aWRnZXRCYW5kc1wiIGlkPVwid2lkZ2V0QmFuZHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS53aWRnZXRCYW5kc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldEJhbmRzQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRNaW5cIj5NaW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndpZGdldE1pblwiIGlkPVwid2lkZ2V0TWluXCIgdmFsdWU9e3RoaXMuc3RhdGUud2lkZ2V0TWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0TWluQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2lkZ2V0TWF4XCI+TWF4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aWRnZXRNYXhcIiBpZD1cIndpZGdldE1heFwiIHZhbHVlPXt0aGlzLnN0YXRlLndpZGdldE1heH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldE1heENoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndpZGdldENsb3VkU2NvcmVcIj5DbG91ZCBTY29yZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2lkZ2V0Q2xvdWRTY29yZVwiIGlkPVwid2lkZ2V0Q2xvdWRTY29yZVwiIHZhbHVlPXt0aGlzLnN0YXRlLndpZGdldENsb3VkU2NvcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25XaWRnZXRDbG91ZFNjb3JlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5vbk5leHRXaXphcmRTdGVwfSBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdEdWFsSW1hZ2VDb2xsZWN0aW9uJz8gJ2Jsb2NrJzogJ25vbmUnfX0+U3RlcCAyICZyQXJyOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKFsnTEFORFNBVDUnLCAnTEFORFNBVDcnLCAnTEFORFNBVDgnLCAnU2VudGluZWwyJ10uaW5jbHVkZXModGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlRHVhbCkgJiYgdGhpcy5zdGF0ZS53aXphcmRTdGVwID09IDIpe1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgdGhlIERhdGUgUmFuZ2UgeW91IHdvdWxkIGxpa2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWRhdGVyYW5nZVwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZUNoYW5nZWREdWFsfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGVEdWFsfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwic0RhdGVfbmV3X2Nvb2tlZER1YWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+dG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uRW5kRGF0ZUNoYW5nZWREdWFsfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbmREYXRlRHVhbH0gcGxhY2Vob2xkZXI9e1wiWVlZWS1NTS1ERFwifSBpZD1cImVEYXRlX25ld19jb29rZWREdWFsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2lkZ2V0QmFuZHNcIj5CYW5kczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2lkZ2V0QmFuZHNcIiBpZD1cIndpZGdldEJhbmRzXCIgdmFsdWU9e3RoaXMuc3RhdGUud2lkZ2V0QmFuZHNEdWFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0QmFuZHNDaGFuZ2VEdWFsfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRNaW5cIj5NaW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndpZGdldE1pblwiIGlkPVwid2lkZ2V0TWluXCIgdmFsdWU9e3RoaXMuc3RhdGUud2lkZ2V0TWluRHVhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldE1pbkNoYW5nZUR1YWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRNYXhcIj5NYXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndpZGdldE1heFwiIGlkPVwid2lkZ2V0TWF4XCIgdmFsdWU9e3RoaXMuc3RhdGUud2lkZ2V0TWF4RHVhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldE1heENoYW5nZUR1YWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRDbG91ZFNjb3JlXCI+Q2xvdWQgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndpZGdldENsb3VkU2NvcmVcIiBpZD1cIndpZGdldENsb3VkU2NvcmVcIiB2YWx1ZT17dGhpcy5zdGF0ZS53aWRnZXRDbG91ZFNjb3JlRHVhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldENsb3VkU2NvcmVDaGFuZ2VEdWFsfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5vblByZXZXaXphcmRTdGVwfT4mbEFycjsgU3RlcCAxPC9idXR0b24+XG5cblxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCh0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnSW1hZ2VDb2xsZWN0aW9uJyB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnRHVhbEltYWdlQ29sbGVjdGlvbicpICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhVHlwZSA9PSAnQ3VzdG9tJyAgJiYgdGhpcy5zdGF0ZS53aXphcmRTdGVwID09IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndpZGdldFRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndpZGdldFRpdGxlXCIgaWQ9XCJ3aWRnZXRUaXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLldpZGdldFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0VGl0bGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZUNvbGxlY3Rpb25cIj5HRUUgSW1hZ2UgQ29sbGVjdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW1hZ2VDb2xsZWN0aW9uXCIgaWQ9XCJpbWFnZUNvbGxlY3Rpb25cIiBwbGFjZWhvbGRlcj17XCJMQU5EU0FUL0xDOF9MMVRfVE9BXCJ9IHZhbHVlPXt0aGlzLnN0YXRlLmltYWdlQ29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbkltYWdlQ29sbGVjdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlUGFyYW1zXCI+SW1hZ2UgUGFyYW1ldGVycyAoanNvbiBmb3JtYXQpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cImpzb24gZm9ybWF0XCIgcm93cz1cIjFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj17XCJ7XFxcImJhbmRzXFxcIjogXFxcIkI0LCBCMywgQjJcXFwiLCBcXG5cXFwibWluXFxcIjowLCBcXG5cXFwibWF4XFxcIjogMC4zfVwifSBvbkNoYW5nZT17dGhpcy5vbkltYWdlUGFyYW1zQ2hhbmdlfSByb3dzPVwiNFwiIHZhbHVlPXt0aGlzLnN0YXRlLmltYWdlUGFyYW1zfSBzdHlsZT17e292ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIHJlc2l6ZTogJ3ZlcnRpY2FsJ319PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW1hZ2VQYXJhbXNcIiBpZD1cImltYWdlUGFyYW1zXCIgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VQYXJhbXN9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25JbWFnZVBhcmFtc0NoYW5nZX0vPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCB0aGUgRGF0ZSBSYW5nZSB5b3Ugd291bGQgbGlrZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZGF0ZXJhbmdlIGZvcm0tZ3JvdXBcIiBpZD1cInJhbmdlX25ld19jb29rZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25TdGFydERhdGVDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGV9IHBsYWNlaG9sZGVyPXtcIllZWVktTU0tRERcIn0gaWQ9XCJzRGF0ZV9uZXdfY29va2VkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPnRvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbkVuZERhdGVDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbmREYXRlfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwiZURhdGVfbmV3X2Nvb2tlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLm9uTmV4dFdpemFyZFN0ZXB9IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ0R1YWxJbWFnZUNvbGxlY3Rpb24nPyAnYmxvY2snOiAnbm9uZSd9fT5TdGVwIDIgJnJBcnI7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoKHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdJbWFnZUNvbGxlY3Rpb24nIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdEdWFsSW1hZ2VDb2xsZWN0aW9uJykgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFUeXBlRHVhbCA9PSAnQ3VzdG9tJyAgJiYgdGhpcy5zdGF0ZS53aXphcmRTdGVwID09IDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlQ29sbGVjdGlvblwiPkdFRSBJbWFnZSBDb2xsZWN0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWFnZUNvbGxlY3Rpb25cIiBpZD1cImltYWdlQ29sbGVjdGlvblwiIHBsYWNlaG9sZGVyPXtcIkxBTkRTQVQvTEM4X0wxVF9UT0FcIn0gdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VDb2xsZWN0aW9uRHVhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbkltYWdlQ29sbGVjdGlvbkNoYW5nZUR1YWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVBhcmFtc1wiPkltYWdlIFBhcmFtZXRlcnMgKGpzb24gZm9ybWF0KTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJqc29uIGZvcm1hdFwiIHJvd3M9XCIxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9e1wie1xcXCJiYW5kc1xcXCI6IFxcXCJCNCwgQjMsIEIyXFxcIiwgXFxuXFxcIm1pblxcXCI6MCwgXFxuXFxcIm1heFxcXCI6IDAuM31cIn0gb25DaGFuZ2U9e3RoaXMub25JbWFnZVBhcmFtc0NoYW5nZUR1YWx9IHJvd3M9XCI0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VQYXJhbXNEdWFsfSBzdHlsZT17e292ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIHJlc2l6ZTogJ3ZlcnRpY2FsJ319PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW1hZ2VQYXJhbXNcIiBpZD1cImltYWdlUGFyYW1zXCIgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VQYXJhbXN9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbkltYWdlUGFyYW1zQ2hhbmdlfS8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHRoZSBEYXRlIFJhbmdlIHlvdSB3b3VsZCBsaWtlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1kYXRlcmFuZ2UgZm9ybS1ncm91cFwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZUNoYW5nZWREdWFsfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGVEdWFsfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwic0RhdGVfbmV3X2Nvb2tlZER1YWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+dG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uRW5kRGF0ZUNoYW5nZWREdWFsfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbmREYXRlRHVhbH0gcGxhY2Vob2xkZXI9e1wiWVlZWS1NTS1ERFwifSBpZD1cImVEYXRlX25ld19jb29rZWREdWFsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMub25QcmV2V2l6YXJkU3RlcH0+JmxBcnI7IFN0ZXAgMTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCh0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnSW1hZ2VDb2xsZWN0aW9uJ3x8IHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdEdWFsSW1hZ2VDb2xsZWN0aW9uJykgICYmIHRoaXMuc3RhdGUud2l6YXJkU3RlcCA9PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRUaXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aWRnZXRUaXRsZVwiIGlkPVwid2lkZ2V0VGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5XaWRnZXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldFRpdGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHRoZSBEYXRlIFJhbmdlIHlvdSB3b3VsZCBsaWtlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1kYXRlcmFuZ2UgZm9ybS1ncm91cFwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZUNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX0gcGxhY2Vob2xkZXI9e1wiWVlZWS1NTS1ERFwifSBpZD1cInNEYXRlX25ld19jb29rZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+dG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uRW5kRGF0ZUNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmVuZERhdGV9IHBsYWNlaG9sZGVyPXtcIllZWVktTU0tRERcIn0gaWQ9XCJlRGF0ZV9uZXdfY29va2VkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnRHVhbEltYWdlQ29sbGVjdGlvbicgPyAnbm9uZSc6ICdibG9jayd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2lkZ2V0RHVhbExheWVyXCI+RHVhbCB0aW1lIHNwYW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3aWRnZXREdWFsTGF5ZXJcIiBpZD1cIndpZGdldER1YWxMYXllclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHVhbExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0RHVhbExheWVyQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheSA6IHRoaXMuc3RhdGUuZHVhbExheWVyID09IHRydWU/ICdibG9jayc6ICdub25lJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCB0aGUgRGF0ZSBSYW5nZSB5b3Ugd291bGQgbGlrZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWRhdGVyYW5nZVwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZDJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uU3RhcnREYXRlMkNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZTJ9IHBsYWNlaG9sZGVyPXtcIllZWVktTU0tRERcIn0gaWQ9XCJzRGF0ZV9uZXdfY29va2VkMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+dG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbkVuZERhdGUyQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZW5kRGF0ZTJ9IHBsYWNlaG9sZGVyPXtcIllZWVktTU0tRERcIn0gaWQ9XCJlRGF0ZV9uZXdfY29va2VkMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMub25OZXh0V2l6YXJkU3RlcH0gc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnRHVhbEltYWdlQ29sbGVjdGlvbic/ICdibG9jayc6ICdub25lJ319PlN0ZXAgMiAmckFycjs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigodGhpcy5zdGF0ZS5zZWxlY3RlZFdpZGdldFR5cGUgPT0gJ0ltYWdlQ29sbGVjdGlvbid8fCB0aGlzLnN0YXRlLnNlbGVjdGVkV2lkZ2V0VHlwZSA9PSAnRHVhbEltYWdlQ29sbGVjdGlvbicpICAmJiB0aGlzLnN0YXRlLndpemFyZFN0ZXAgPT0gMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHRoZSBEYXRlIFJhbmdlIHlvdSB3b3VsZCBsaWtlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1kYXRlcmFuZ2UgZm9ybS1ncm91cFwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZUNoYW5nZWREdWFsfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGVEdWFsfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwic0RhdGVfbmV3X2Nvb2tlZER1YWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+dG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uRW5kRGF0ZUNoYW5nZWREdWFsfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbmREYXRlRHVhbH0gcGxhY2Vob2xkZXI9e1wiWVlZWS1NTS1ERFwifSBpZD1cImVEYXRlX25ld19jb29rZWREdWFsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMub25QcmV2V2l6YXJkU3RlcH0+JmxBcnI7IFN0ZXAgMTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRXaWRnZXRUeXBlID09ICdUaW1lU2VyaWVzJyAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YVR5cGUgPT0gJ0N1c3RvbScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWRnZXRUaXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aWRnZXRUaXRsZVwiIGlkPVwid2lkZ2V0VGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5XaWRnZXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vbldpZGdldFRpdGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VDb2xsZWN0aW9uXCI+R0VFIEltYWdlIENvbGxlY3Rpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltYWdlQ29sbGVjdGlvblwiIGlkPVwiaW1hZ2VDb2xsZWN0aW9uXCIgcGxhY2Vob2xkZXI9e1wiTEFORFNBVC9MQzhfTDFUX1RPQVwifSB2YWx1ZT17dGhpcy5zdGF0ZS5pbWFnZUNvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25JbWFnZUNvbGxlY3Rpb25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgdGhlIERhdGUgUmFuZ2UgeW91IHdvdWxkIGxpa2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWRhdGVyYW5nZVwiIGlkPVwicmFuZ2VfbmV3X2Nvb2tlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZUNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX0gcGxhY2Vob2xkZXI9e1wiWVlZWS1NTS1ERFwifSBpZD1cInNEYXRlX25ld19jb29rZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+dG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uRW5kRGF0ZUNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmVuZERhdGV9IHBsYWNlaG9sZGVyPXtcIllZWVktTU0tRERcIn0gaWQ9XCJlRGF0ZV9uZXdfY29va2VkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLndpemFyZFN0ZXAgPT0gMil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPHA+U2Vjb25kYXJ5IGRhdGEgZm9ybSBoZXJlPC9wPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2lkZ2V0VGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2lkZ2V0VGl0bGVcIiBpZD1cIndpZGdldFRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUuV2lkZ2V0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25XaWRnZXRUaXRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCB0aGUgRGF0ZSBSYW5nZSB5b3Ugd291bGQgbGlrZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZGF0ZXJhbmdlXCIgaWQ9XCJyYW5nZV9uZXdfY29va2VkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLm9uU3RhcnREYXRlQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnREYXRlfSBwbGFjZWhvbGRlcj17XCJZWVlZLU1NLUREXCJ9IGlkPVwic0RhdGVfbmV3X2Nvb2tlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj50bzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25FbmREYXRlQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZW5kRGF0ZX0gcGxhY2Vob2xkZXI9e1wiWVlZWS1NTS1ERFwifSBpZD1cImVEYXRlX25ld19jb29rZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uUmVtb3ZlSXRlbShpKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2kgd2FzIGhlcmUnKTtcbiAgICAgICAgdmFyIHJlbW92ZWRXaWRnZXQgPSBfLmZpbHRlcih0aGlzLnN0YXRlLndpZGdldHMsIGZ1bmN0aW9uKHcpe1xuICAgICAgICAgICAgcmV0dXJuIHcubGF5b3V0LmkgPT0gaS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JlbW92ZWRXaWRnZXQgPSByZW1vdmVkV2lkZ2V0O1xuICAgICAgICB0aGlzLmRlbGV0ZVdpZGdldEZyb21TZXJ2ZXIocmVtb3ZlZFdpZGdldFswXSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWRnZXRzOiBfLnJlamVjdCh0aGlzLnN0YXRlLndpZGdldHMsIGZ1bmN0aW9uKHdpZGdldCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldC5sYXlvdXQuaSA9PSBpLnRvU3RyaW5nKCk7IH0pLFxuICAgICAgICAgICAgbGF5b3V0OiBfLnJlamVjdCh0aGlzLnN0YXRlLmxheW91dCwgZnVuY3Rpb24obGF5b3V0KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0LmkgPT0gaS50b1N0cmluZygpOyB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbWFnZUJ5VHlwZSh3aGljaCl7XG4gICAgICAgIHZhciB0aGVJbWFnZSA9IFwiXCI7XG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJnZXRTdGF0c1wiKSB7XG4gICAgICAgICAgICB0aGVJbWFnZSA9IFwiL2ltZy9zdGF0c3NhbXBsZS5naWZcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aGljaC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiaW1hZ2VcIikgfHwgd2hpY2ggPT09ICcnKSB7XG4gICAgICAgICAgICB0aGVJbWFnZSA9IFwiL2ltZy9tYXBzYW1wbGUuZ2lmXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aGljaCk7XG4gICAgICAgICAgICB0aGVJbWFnZSA9IFwiL2ltZy9ncmFwaHNhbXBsZS5naWZcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGVJbWFnZTtcbiAgICB9XG4gICAgZ2VuZXJhdGVMYXlvdXQoKSB7XG4gICAgICAgIHZhciB3ID0gdGhpcy5zdGF0ZS53aWRnZXRzO1xuICAgICAgICB2YXIgeHJvdyA9IDA7XG4gICAgICAgIHZhciB5cm93ID0gMDtcbiAgICAgICAgcmV0dXJuIF8ubWFwKHcsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGl0ZW0ubGF5b3V0LmkgPSBpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpdGVtLmxheW91dC5taW5XID0gMztcbiAgICAgICAgICAgIGl0ZW0ubGF5b3V0LncgPSBpdGVtLmxheW91dC53ID49IDM/IGl0ZW0ubGF5b3V0Lnc6IDM7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYXlvdXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTGF5b3V0Q2hhbmdlID0gKGxheW91dCkgPT4ge1xuXG5cbiAgICAgICAgY29uc29sZS5sb2coJ1dpZGdldHMgbGVuZ3RoOiAnICsgdGhpcy5zdGF0ZS53aWRnZXRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXlvdXRzIGxlbmd0aDogJyArIHRoaXMuc3RhdGUubGF5b3V0Lmxlbmd0aCk7XG4gICAgICAgIGlmIChoYXZlV2lkZ2V0cykge1xuICAgICAgICAgICAgdmFyIHcgPSB0aGlzLnN0YXRlLndpZGdldHM7XG4gICAgICAgICAgICBsYXlvdXQuZm9yRWFjaChmdW5jdGlvbiAobGF5LCBpKSB7XG4gICAgICAgICAgICAgICAgd1tpXS5sYXlvdXQgPSBsYXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3N0IGxheW91dCBsb29wOiAnICsgSlNPTi5zdHJpbmdpZnkod1t3Lmxlbmd0aCAtMV0pKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZGdldHM6IHcsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiBsYXlvdXR9LHRoaXMudXBkYXRlU2VydmVyV2lkZ2V0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xheW91dDogbGF5b3V0fSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIG9uQWRkSXRlbSA9IChldnQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFZGl0aW5nIDogdHJ1ZX0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtsYXlvdXR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkV2lkZ2V0XCIgb25DbGljaz17dGhpcy5vbkFkZEl0ZW19IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1zbVwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+QWRkIFdpZGdldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxSZWFjdEdyaWRMYXlvdXQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTGF5b3V0Q2hhbmdlfT5cblxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlRE9NKCl9XG4gICAgICAgICAgICAgICAgPC9SZWFjdEdyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0TmV3V2lkZ2V0Rm9ybSgpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG52YXIgZ3JlbW92ZWRXaWRnZXQ7XG4vLyBCYXNpY0xheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4vLyAgICAgaXNEcmFnZ2FibGU6IHRydWUsXG4vLyAgICAgaXNSZXNpemFibGU6IHRydWUsXG4vLyAgICAgY2xhc3NOYW1lOiBcImxheW91dFwiLFxuLy8gICAgIGl0ZW1zOiAyLFxuLy8gICAgIHJvd0hlaWdodDogMzAwLFxuLy8gICAgIGNvbHM6IDEyXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaWRnZXRFZGl0b3JQYWdlKGFyZ3MpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxCYXNpY0xheW91dC8+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=