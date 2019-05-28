var geodashreact =
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
/******/ 		"geodashreact": 0
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
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/geodashreact.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor","collection~geodashreact~home~project"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/public/jsx/geodashreact.js":
/*!*******************************************************!*\
  !*** ./src/main/resources/public/jsx/geodashreact.js ***!
  \*******************************************************/
/*! exports provided: renderGeodashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGeodashPage", function() { return renderGeodashPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/mercator-openlayers.js */ "./src/main/resources/public/js/mercator-openlayers.js");
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var geeTimeout = {};

var Geodash =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Geodash, _React$Component);

  function Geodash(props) {
    var _this;

    _classCallCheck(this, Geodash);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Geodash).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFullScreen", function (widget, type) {
      var widgets = _toConsumableArray(_this.state.widgets);

      var index = widgets.indexOf(widget);
      widgets[index] = _objectSpread({}, widget);
      widgets[index].isFull = !widgets[index].isFull;

      _this.setState({
        widgets: widgets
      }, function () {
        updateSize(widget, type);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpacityChange", function (widget, id, evt) {
      var widgets = _toConsumableArray(_this.state.widgets);

      var index = widgets.indexOf(widget);
      widgets[index] = _objectSpread({}, widget);
      widgets[index].opacity = evt.target.value;
      setOpacity($("#rangeWidget_" + id).val(), 'widgetmap_' + id);

      _this.setState({
        widgets: widgets
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSliderChange", function (widget, id, evt) {
      var widgets = _toConsumableArray(_this.state.widgets);

      var index = widgets.indexOf(widget);
      widgets[index] = _objectSpread({}, widget);
      widgets[index].sliderType = widgets[index].sliderType == 'opacity' ? 'swipe' : 'opacity';

      _this.setState({
        widgets: widgets
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSwipeChange", function (widget, id, evt) {
      var widgets = _toConsumableArray(_this.state.widgets);

      var index = widgets.indexOf(widget);
      widgets[index] = _objectSpread({}, widget);
      widgets[index].swipeValue = evt.target.value;

      _this.setState({
        widgets: widgets
      });
    });

    _this.state = {
      widgets: [],
      callbackComplete: false
    };
    return _this;
  }

  _createClass(Geodash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(theURL + "/id/" + pid).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.widgets.map(function (widget) {
          widget.isFull = false;
          widget.opacity = '0.9';
          widget.sliderType = 'opacity';
          widget.swipeValue = '1.0';
          return widget;
        });
      }).then(function (data) {
        return _this2.setState({
          widgets: data,
          callbackComplete: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widgets, {
        widgets: this.state.widgets,
        projAOI: this.state.projAOI,
        onFullScreen: this.handleFullScreen,
        onOpacityChanged: this.handleOpacityChange,
        onSliderChange: this.handleSliderChange,
        onSwipeChange: this.handleSwipeChange,
        callbackComplete: this.state.callbackComplete
      }));
    }
  }]);

  return Geodash;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

$(window).resize(function () {
  if ($(".placeholder.fullwidget").length > 0) {
    var id = $(".placeholder.fullwidget")[0].childNodes[0].id.substring($(".placeholder.fullwidget")[0].childNodes[0].id.indexOf('_') + 1);

    if (graphWidgetArray["widgetgraph_" + id] != null) {
      graphWidgetArray['widgetgraph_' + id].setSize($('#widgetgraph_' + id).outerWidth(), $('#widgetgraph_' + id).outerHeight(), true);
    } else if (mapWidgetArray["widgetgraph_" + id] != null) {
      mapWidgetArray["widgetmap_" + id].updateSize();
    }
  }
});

function updateSize(which, type) {
  $('body').toggleClass('bodyfull');
  var doc = document.documentElement;

  if ((window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0) == 0 && (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) == 0) {
    window.scrollTo(left, ptop);
    left = 0;
    ptop = 0;
  } else {
    left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    ptop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    window.scrollTo(0, 0);
  }

  if (type === 'mapwidget') {
    mapWidgetArray["widgetmap_" + which.id].updateSize();
  } else if (type === 'graphwidget') {
    graphWidgetArray['widgetgraph_' + which.id].setSize($('#widgetgraph_' + which.id).outerWidth(), $('#widgetgraph_' + which.id).outerHeight(), true);
  }
}

var Widgets =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Widgets, _React$Component2);

  function Widgets() {
    _classCallCheck(this, Widgets);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widgets).apply(this, arguments));
  }

  _createClass(Widgets, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.widgets.length > 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row placeholders"
        }, this.props.widgets.map(function (widget) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widget, {
            key: widget.id,
            id: widget.id,
            widget: widget,
            onFullScreen: _this3.props.onFullScreen,
            onOpacityChanged: _this3.props.onOpacityChanged,
            opacityValue: _this3.props.opacityValue,
            onSliderChange: _this3.props.onSliderChange,
            onSwipeChange: _this3.props.onSwipeChange
          });
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row placeholders"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "placeholder columnSpan3 rowSpan2",
          style: {
            gridArea: "1 / 1 / span 2 / span 12"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          id: "noWidgetMessage",
          style: {
            display: this.props.callbackComplete == false ? 'none' : 'block'
          }
        }, "The Administrator has not configured any Geo-Dash Widgets for this project")));
      }
    }
  }]);

  return Widgets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Widget =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Widget, _React$Component3);

  function Widget(props) {
    var _this4;

    _classCallCheck(this, Widget);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Widget).call(this, props));
    _this4.imageCollectionList = ["ImageCollectionCustom", "addImageCollection", "ndviImageCollection", "ImageCollectionNDVI", "ImageCollectionEVI", "ImageCollectionEVI2", "ImageCollectionNDWI", "ImageCollectionNDMI", "ImageCollectionLANDSAT5", "ImageCollectionLANDSAT7", "ImageCollectionLANDSAT8", "ImageCollectionSentinel2"];
    _this4.graphControlList = ["customTimeSeries", "timeSeriesGraph", "ndviTimeSeries", "ndwiTimeSeries", "eviTimeSeries", "evi2TimeSeries", "ndmiTimeSeries"];
    return _this4;
  }

  _createClass(Widget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          widget = _this$props.widget,
          isFull = _this$props.isFull;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.getWidgetHtml(widget, this.props.onOpacityChanged, this.props.opacityValue, this.props.onSliderChange, this.props.onSwipeChange));
    }
  }, {
    key: "getWidgetHtml",
    value: function getWidgetHtml(widget, onOpacityChanged, opacityValue, onSliderChange, onSwipeChange) {
      var _this5 = this;

      if (widget.gridcolumn || widget.layout) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: this.getClassNames(widget.isFull, widget.gridcolumn != null ? widget.gridcolumn : '', widget.gridrow != null ? widget.gridrow : widget.layout != null ? 'span ' + widget.layout.h : ''),
          style: {
            gridColumn: widget.gridcolumn != null ? widget.gridcolumn : this.generategridcolumn(widget.layout.x, widget.layout.w),
            gridRow: widget.gridrow != null ? widget.gridrow : this.generategridrow(widget.layout.y, widget.layout.h)
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "panel panel-default",
          id: "widget_" + widget.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "panel-heading"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "list-inline panel-actions pull-right"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          style: {
            display: "inline"
          }
        }, widget.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          style: {
            display: "inline"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "list-inline panel-actions panel-fullscreen",
          onClick: function onClick() {
            return _this5.props.onFullScreen(_this5.props.widget, _this5.getWidgetType(widget));
          },
          role: "button",
          title: "Toggle Fullscreen"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-expand-arrows-alt",
          style: {
            color: "#31BAB0"
          }
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "widget-container_" + widget.id,
          className: "widget-container"
        }, this.getWidgetInnerHtml(widget, onOpacityChanged, opacityValue, onSliderChange, onSwipeChange))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: widget.isFull ? 'fullwidget columnSpan3 rowSpan1 placeholder' : 'columnSpan3 rowSpan1 placeholder'
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "panel panel-default",
          id: "widget_" + widget.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "panel-heading"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "list-inline panel-actions pull-right"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          style: {
            display: "inline"
          }
        }, widget.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          style: {
            display: "inline"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "list-inline panel-actions panel-fullscreen",
          onClick: function onClick() {
            return _this5.props.onFullScreen(_this5.props.widget, _this5.getWidgetType(widget));
          },
          role: "button",
          title: "Toggle Fullscreen"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-expand-arrows-alt",
          style: {
            color: "#31BAB0"
          }
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "widget-container_" + widget.id,
          className: "widget-container"
        }, this.getWidgetInnerHtml(widget, onOpacityChanged, opacityValue, onSliderChange, onSwipeChange))));
      }
    }
  }, {
    key: "generategridcolumn",
    value: function generategridcolumn(x, w) {
      return x + 1 + ' / span ' + w;
    }
  }, {
    key: "generategridrow",
    value: function generategridrow(x, h) {
      return x + 1 + ' / span ' + h;
    }
  }, {
    key: "getWidgetType",
    value: function getWidgetType(awidget) {
      if (awidget.dualImageCollection && awidget.dualImageCollection != null || awidget.ImageAsset && awidget.ImageAsset.length > 0) {
        return "mapwidget";
      }

      var wtext = awidget.properties[0];

      if (this.imageCollectionList.includes(wtext)) {
        return "mapwidget";
      } else if (this.graphControlList.includes(wtext)) {
        return "graphwidget";
      } else if (wtext === "getStats") {
        return "statswidget";
      } else {
        return "undefinedwidget";
      }
    }
  }, {
    key: "getClassNames",
    value: function getClassNames(fullState, c, r) {
      var classnames = 'placeholder';

      if (fullState) {
        classnames += " fullwidget";
      } else {
        classnames += c.includes("span 12") ? " fullcolumnspan" : c.includes("span 9") ? " columnSpan9" : c.includes("span 6") ? " columnSpan6" : " columnSpan3";
        classnames += r.includes("span 2") ? " rowSpan2" : r.includes("span 3") ? " rowSpan3" : " rowSpan1";
      }

      return classnames;
    }
  }, {
    key: "getWidgetInnerHtml",
    value: function getWidgetInnerHtml(widget, onOpacityChanged, opacityValue, onSliderChange, onSwipeChange) {
      var wtext = widget.properties[0];
      var control;
      var slider;

      if (this.imageCollectionList.includes(wtext) || widget.dualImageCollection && widget.dualImageCollection != null || widget.ImageAsset && widget.ImageAsset.length > 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "front"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapWidget, {
          widget: widget,
          onOpacityChange: onOpacityChanged,
          opacityValue: opacityValue,
          onSliderChange: onSliderChange,
          onSwipeChange: onSwipeChange
        }));
      } else if (this.graphControlList.includes(wtext)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "front"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GraphWidget, {
          widget: widget
        }));
      } else if (wtext === "getStats") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "front"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsWidget, {
          widget: widget
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
          width: "200",
          height: "200",
          className: "img-responsive"
        });
      }
    }
  }]);

  return Widget;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MapWidget =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(MapWidget, _React$Component4);

  function MapWidget() {
    _classCallCheck(this, MapWidget);

    return _possibleConstructorReturn(this, _getPrototypeOf(MapWidget).apply(this, arguments));
  }

  _createClass(MapWidget, [{
    key: "render",
    value: function render() {
      var widget = this.props.widget;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "widgetmap_" + widget.id,
        className: "minmapwidget",
        style: {
          width: "100%",
          minHeight: "200px"
        }
      }), this.getSliderControl());
    }
  }, {
    key: "getSliderControl",
    value: function getSliderControl() {
      var widget = this.props.widget;
      var onOpacityChange = this.props.onOpacityChange;
      var onSliderChange = this.props.onSliderChange;
      var onSwipeChange = this.props.onSwipeChange;
      var widgetId = "widgetmap_" + widget.id;

      if (widget.dualLayer || widget.dualImageCollection) {
        var oStyle = {
          display: widget.sliderType == 'opacity' ? 'block' : 'none'
        };
        var sStyle = {
          display: widget.sliderType == 'swipe' ? 'block' : 'none'
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "button",
          value: this.props.widget.sliderType == 'opacity' ? 'swipe' : 'opacity',
          style: {
            width: "80px",
            float: "left",
            margin: "8px 0 0 5px"
          },
          onClick: function onClick(evt) {
            return onSliderChange(widget, widget.id, evt);
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "range",
          className: "mapRange dual",
          id: "rangeWidget_" + widget.id,
          value: this.props.widget.opacity,
          min: "0",
          max: "1",
          step: ".01",
          onChange: function onChange(evt) {
            return onOpacityChange(widget, widget.id, evt);
          },
          onInput: function onInput(evt) {
            return onOpacityChange(widget, widget.id, evt);
          },
          style: oStyle
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "range",
          className: "mapRange dual",
          id: "swipeWidget_" + widget.id,
          min: "0",
          max: "1",
          step: ".01",
          value: this.props.widget.swipeValue,
          onChange: function onChange(evt) {
            return onSwipeChange(widget, widget.id, evt);
          },
          onInput: function onInput(evt) {
            return onSwipeChange(widget, widget.id, evt);
          },
          style: sStyle
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "range",
          className: "mapRange",
          id: "rangeWidget_" + widget.id,
          value: this.props.widget.opacity,
          min: "0",
          max: "1",
          step: ".01",
          onChange: function onChange(evt) {
            return onOpacityChange(widget, widget.id, evt);
          },
          onInput: function onInput(evt) {
            return onOpacityChange(widget, widget.id, evt);
          }
        });
      }
    }
  }, {
    key: "getRasterByBasemapConfig",
    value: function getRasterByBasemapConfig(basemap) {
      var raster;

      if (basemap == null || basemap.id == 'osm') {
        raster = new ol.layer.Tile({
          source: new ol.source.OSM()
        });
      } else {
        var source = _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].createSource(basemap.sourceConfig);
        raster = new ol.layer.Tile({
          source: source
        });
      }

      return raster;
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
      } else if ('ImageCollectionCustom' == widget.properties[0]) {
        url = "http://collect.earth:8888/meanImageByMosaicCollections";
      } else if (collectionName.trim().length > 0) {
        url = "http://collect.earth:8888/cloudMaskImageByMosaicCollection";
      } else {
        url = "http://collect.earth:8888/ImageCollectionbyIndex";
      }

      return url;
    }
  }, {
    key: "getImageParams",
    value: function getImageParams(widget) {
      var visParams;

      if (widget.visParams) {
        try {
          visParams = $.parseJSON(widget.visParams);
        } catch (e) {
          visParams = widget.visParams;
        }
      } else {
        var min;
        var max;

        try {
          if (widget.min > 0) {
            min = widget.min;
          }

          if (widget.max > 0) {
            max = widget.max;
          }
        } catch (e) {//alert(0);
        }

        visParams = {
          min: min,
          max: max,
          bands: widget.bands
        };
      }

      return visParams;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var widget = this.props.widget;
      var basemap = widget.baseMap;
      var raster = this.getRasterByBasemapConfig(basemap);
      var mapdiv = "widgetmap_" + widget.id;
      var map = new ol.Map({
        layers: [raster],
        target: mapdiv,
        view: new ol.View({
          center: [0, 0],
          projection: "EPSG:3857",
          zoom: 4
        }),
        id: "widgetmapobject_" + widget.id
      });
      map.getView().on('propertychange', onpropertychange);

      function onpropertychange() {
        map.dispatchEvent('movestart');
        var view = map.getView();
        view.un('propertychange', onpropertychange);
        map.on('moveend', function () {
          view.on('propertychange', onpropertychange);
        });
      }

      map.on("movestart", this.pauseGeeLayer);
      map.on("moveend", this.resumeGeeLayer);
      mapWidgetArray[mapdiv] = map;

      if (projAOI === "") {
        projAOI = [-108.30322265625, 21.33544921875, -105.347900390625, 23.53271484375];
      } else {
        if (typeof projAOI === "string") {
          projAOI = $.parseJSON(projAOI);
        }
      }

      if (projAOI) {
        mapWidgetArray["widgetmap_" + widget.id].getView().fit(ol.proj.transform([projAOI[0], projAOI[1]], "EPSG:4326", "EPSG:3857").concat(ol.proj.transform([projAOI[2], projAOI[3]], "EPSG:4326", "EPSG:3857")), mapWidgetArray["widgetmap_" + widget.id].getSize());
      } else {
        mapWidgetArray["widgetmap_" + widget.id].getView().fit(projAOI, mapWidgetArray["widgetmap_" + widget.id].getSize());
      }

      var postObject = {};
      var collectionName = '';
      var dateFrom = '';
      var dateTo = '';
      var requestedIndex = '';
      var url = '';
      var dualImageObject = null;
      var bands = "";

      if (widget.properties.length === 5) {
        bands = widget.properties[4];
      }

      widget.bands = bands;
      var min = "";
      var max = "0.3";
      var visParams;
      /*********************Check here if widget is dualImageCollection *********************/

      if (widget.dualImageCollection && widget.dualImageCollection != null) {
        //still have to make the same postObject, but set a different callback to recall for second layer
        // might be best to rewrite the other at the same time.
        //hmmmm, maybe i can handle all of this logic in the callback instead by setting a different variable
        var firstImage = widget.dualImageCollection[0];
        var secondImage = widget.dualImageCollection[1];
        collectionName = firstImage.collectionType;
        requestedIndex = collectionName === "ImageCollectionNDVI" ? 'NDVI' : collectionName === "ImageCollectionEVI" ? 'EVI' : collectionName === "ImageCollectionEVI2" ? 'EVI2' : collectionName === "ImageCollectionNDMI" ? 'NDMI' : collectionName === "ImageCollectionNDWI" ? 'NDWI' : '';
        collectionName = collectionName === "ImageCollectionNDVI" ? '' : collectionName === "ImageCollectionEVI" ? '' : collectionName === "ImageCollectionEVI2" ? '' : collectionName === "ImageCollectionNDMI" ? '' : collectionName === "ImageCollectionNDWI" ? '' : collectionName;
        dateFrom = firstImage.startDate;
        dateTo = firstImage.endDate;
        var shortWidget = {};
        shortWidget.filterType = firstImage.filterType;
        shortWidget.properties = [];
        shortWidget.properties.push(collectionName);
        url = this.getGatewayUrl(shortWidget, collectionName);
        shortWidget.visParams = firstImage.visParams;
        shortWidget.min = firstImage.min != null ? firstImage.min : '';
        shortWidget.max = firstImage.max != null ? firstImage.max : '';
        shortWidget.band = firstImage.band != null ? firstImage.band : '';
        postObject.visParams = this.getImageParams(shortWidget);

        if (postObject.visParams.cloudLessThan) {
          postObject.bands = postObject.visParams.bands;
          postObject.min = postObject.visParams.min;
          postObject.max = postObject.visParams.max;
          postObject.cloudLessThan = parseInt(postObject.visParams.cloudLessThan);
        } //Create the ajax object for the second call here


        dualImageObject = {};
        dualImageObject.collectionName = secondImage.collectionType;
        dualImageObject.index = dualImageObject.collectionName === "ImageCollectionNDVI" ? 'NDVI' : dualImageObject.collectionName === "ImageCollectionEVI" ? 'EVI' : dualImageObject.collectionName === "ImageCollectionEVI2" ? 'EVI2' : dualImageObject.collectionName === "ImageCollectionNDMI" ? 'NDMI' : dualImageObject.collectionName === "ImageCollectionNDWI" ? 'NDWI' : '';
        dualImageObject.collectionName = dualImageObject.collectionName === "ImageCollectionNDVI" ? '' : dualImageObject.collectionName === "ImageCollectionEVI" ? '' : dualImageObject.collectionName === "ImageCollectionEVI2" ? '' : dualImageObject.collectionName === "ImageCollectionNDMI" ? '' : dualImageObject.collectionName === "ImageCollectionNDWI" ? '' : dualImageObject.collectionName;
        dualImageObject.dateFrom = secondImage.startDate;
        dualImageObject.dateTo = secondImage.endDate;
        var shortWidget2 = {};
        shortWidget2.filterType = secondImage.filterType;
        shortWidget2.properties = [];
        shortWidget2.properties.push(dualImageObject.collectionName);
        dualImageObject.url = this.getGatewayUrl(shortWidget2, dualImageObject.collectionName);
        shortWidget2.visParams = secondImage.visParams;
        shortWidget2.min = secondImage.min != null ? secondImage.min : '';
        shortWidget2.max = secondImage.max != null ? secondImage.max : '';
        shortWidget2.band = secondImage.band != null ? secondImage.band : '';

        if (shortWidget2.visParams && shortWidget2.visParams.cloudLessThan != null) {
          dualImageObject.bands = shortWidget2.visParams.bands;
          dualImageObject.min = shortWidget2.visParams.min;
          dualImageObject.max = shortWidget2.visParams.max;
          dualImageObject.cloudLessThan = parseInt(shortWidget2.visParams.cloudLessThan);
        }

        dualImageObject.visParams = this.getImageParams(shortWidget2);
      } else {
        /***************This is what happens if not***********************/
        collectionName = widget.properties[1];
        dateFrom = widget.properties[2];
        dateTo = widget.properties[3];
        requestedIndex = widget.properties[0] === "ImageCollectionNDVI" ? 'NDVI' : widget.properties[0] === "ImageCollectionEVI" ? 'EVI' : widget.properties[0] === "ImageCollectionEVI2" ? 'EVI2' : widget.properties[0] === "ImageCollectionNDMI" ? 'NDMI' : widget.properties[0] === "ImageCollectionNDWI" ? 'NDWI' : '';
        url = this.getGatewayUrl(widget, collectionName);
        postObject.visParams = this.getImageParams(widget);

        if (postObject.visParams.cloudLessThan) {
          postObject.bands = postObject.visParams.bands;
          postObject.min = postObject.visParams.min;
          postObject.max = postObject.visParams.max;
          postObject.cloudLessThan = parseInt(postObject.visParams.cloudLessThan);
        }

        if (widget.ImageAsset) {
          postObject.imageName = widget.ImageAsset;
        }
      }

      postObject.collectionName = collectionName;
      postObject.dateFrom = dateFrom;
      postObject.dateTo = dateTo;
      postObject.geometry = $.parseJSON(projPairAOI);
      postObject.index = requestedIndex;
      $.ajax({
        url: url,
        type: "POST",
        async: true,
        indexVal: widget.id,
        dualLayer: widget.dualLayer,
        dualImageObject: JSON.stringify(dualImageObject),
        dualStart: widget.dualStart,
        dualEnd: widget.dualEnd,
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify(postObject),
        postObject: JSON.stringify(postObject)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.warn(jqXHR + textStatus + errorThrown);
      }).done(function (data, _textStatus, _jqXHR) {
        if (data.errMsg) {
          console.info(data.errMsg);
        } else {
          if (data.hasOwnProperty("mapid")) {
            var mapId = data.mapid;
            var token = data.token;
            var $this = this;
            var dualLayer = $this.dualLayer;
            var dualImage = $this.dualImageObject;
            addTileServer(mapId, token, "widgetmap_" + $this.indexVal);

            if (dualLayer) {
              var secondObject = JSON.parse($this.postObject);
              secondObject.dateFrom = $this.dualStart;
              secondObject.dateTo = $this.dualEnd;
              $.ajax({
                url: url,
                type: "POST",
                async: true,
                indexVal: $this.indexVal,
                crossDomain: true,
                contentType: "application/json",
                data: JSON.stringify(secondObject)
              }).fail(function (jqXHR, textStatus, errorThrown) {
                console.warn(jqXHR + textStatus + errorThrown);
              }).done(function (data, _textStatus, _jqXHR) {
                if (data.errMsg) {
                  console.info(data.errMsg);
                } else {
                  if (data.hasOwnProperty("mapid")) {
                    var mapId = data.mapid;
                    var token = data.token;
                    var $this = this;
                    var dualLayer = $this.dualLayer;
                    addDualLayer(mapId, token, "widgetmap_" + $this.indexVal);
                  } else {
                    console.warn("Wrong Data Returned");
                  }
                }
              });
            } else if (dualImage && dualImage != null) {
              var workingObject;

              try {
                workingObject = JSON.parse(dualImage);
              } catch (e) {
                workingObject = dualImage;
              }

              if (workingObject != null) {
                var secondObject = workingObject; //set url based on data type
                //set variables needed for data type, maybe do this above so i can just pass the dualImage thru...

                $.ajax({
                  url: workingObject.url,
                  type: "POST",
                  async: true,
                  indexVal: $this.indexVal,
                  crossDomain: true,
                  contentType: "application/json",
                  data: JSON.stringify(secondObject)
                }).fail(function (jqXHR, textStatus, errorThrown) {
                  console.warn(jqXHR + textStatus + errorThrown);
                }).done(function (data, _textStatus, _jqXHR) {
                  if (data.errMsg) {
                    console.info(data.errMsg);
                  } else {
                    if (data.hasOwnProperty("mapid")) {
                      var mapId = data.mapid;
                      var token = data.token;
                      var $this = this;
                      var dualLayer = $this.dualLayer;
                      addDualLayer(mapId, token, "widgetmap_" + $this.indexVal);
                    } else {
                      console.warn("Wrong Data Returned");
                    }
                  }
                });
              }
            }
          } else {
            console.warn("Wrong Data Returned");
          }
        }
      });
    }
  }, {
    key: "pauseGeeLayer",
    value: function pauseGeeLayer(e) {
      var layers = e.target.getLayers().getArray();
      layers.forEach(function (lyr) {
        if (lyr.get('id') && lyr.get('id').indexOf('widget') == 0) {
          lyr.setVisible(false);
        }
      });
    }
  }, {
    key: "resumeGeeLayer",
    value: function resumeGeeLayer(e) {
      if (geeTimeout[e.target.get('target')]) {
        window.clearTimeout(geeTimeout[e.target.get('target')]);
        delete geeTimeout[e.target.get('target')];
      }

      geeTimeout[e.target.get('target')] = window.setTimeout(function () {
        var layers = e.target.getLayers().getArray();
        layers.forEach(function (lyr) {
          if (lyr.get('id') && lyr.get('id').indexOf('widget') == 0) {
            lyr.setVisible(true);
          }
        });
      }, 1000);
    }
  }]);

  return MapWidget;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GraphWidget =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(GraphWidget, _React$Component5);

  function GraphWidget() {
    _classCallCheck(this, GraphWidget);

    return _possibleConstructorReturn(this, _getPrototypeOf(GraphWidget).apply(this, arguments));
  }

  _createClass(GraphWidget, [{
    key: "render",
    value: function render() {
      var widget = this.props.widget;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "widgetgraph_" + widget.id,
        className: "minmapwidget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "graphcontainer_" + widget.id,
        className: "minmapwidget graphwidget normal"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        id: "widgettitle_" + widget.id
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var widget = this.props.widget;
      var collectionName = widget.properties[1];
      var indexName = widget.properties[4];
      var date = new Date();
      var url = '';

      if (collectionName.trim().length > 0) {
        url = "http://collect.earth:8888/timeSeriesIndex";
      } else {
        url = "http://collect.earth:8888/timeSeriesIndex2";
      }

      $.ajax({
        url: url,
        type: "POST",
        async: true,
        indexVal: widget.id,
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify({
          collectionNameTimeSeries: widget.properties[1],
          polygon: $.parseJSON(projPairAOI),
          indexName: widget.properties[4],
          dateFromTimeSeries: widget.properties[2].trim().length == 10 ? widget.properties[2].trim() : '2000-01-01',
          dateToTimeSeries: widget.properties[3].trim().length == 10 ? widget.properties[3].trim() : date.yyyymmdd()
        })
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.warn(jqXHR + textStatus + errorThrown);
      }).done(function (data, _textStatus, _jqXHR) {
        if (data.errMsg) {
          console.warn(data.errMsg);
        } else {
          if (data.hasOwnProperty("timeseries")) {
            var timeseriesData = [];
            $.each(data.timeseries, function (ignore, value) {
              if (value[0] !== null) {
                timeseriesData.push([value[0], value[1]]);
              }
            });
            timeseriesData = timeseriesData.sort(sortData);
            var $this = this;
            graphWidgetArray["widgetgraph_" + $this.indexVal] = createChart($this.indexVal, indexName, timeseriesData);
            graphWidgetArray["widgetgraph_" + $this.indexVal].id = $this.indexVal;
          } else {
            console.warn("Wrong Data Returned");
          }
        }
      });
    }
  }]);

  return GraphWidget;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var StatsWidget =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(StatsWidget, _React$Component6);

  function StatsWidget() {
    _classCallCheck(this, StatsWidget);

    return _possibleConstructorReturn(this, _getPrototypeOf(StatsWidget).apply(this, arguments));
  }

  _createClass(StatsWidget, [{
    key: "render",
    value: function render() {
      var widget = this.props.widget;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "widgetstats_" + widget.id,
        className: "minmapwidget",
        style: {
          padding: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-addon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/icon-population.png",
        style: {
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "#31bab0"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "totalPop_" + widget.id,
        style: {
          color: "#787878",
          padding: "10px 20px"
        }
      }, "Total population"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        id: "totalPop_" + widget.id,
        style: {
          color: "#606060",
          fontSize: "16px",
          fontWeight: "bold",
          paddingTop: "12px"
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-addon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/icon-area.png",
        style: {
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "#31bab0"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "totalArea_" + widget.id,
        style: {
          color: "#787878",
          padding: "10px 20px"
        }
      }, "Area"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        id: "totalArea_" + widget.id,
        style: {
          color: "#606060",
          fontSize: "16px",
          fontWeight: "bold",
          paddingTop: "12px"
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-addon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/icon-elevation.png",
        style: {
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "#31bab0"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "elevationRange_" + widget.id,
        style: {
          color: "#787878",
          padding: "10px 20px"
        }
      }, "Elevation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        id: "elevationRange_" + widget.id,
        style: {
          color: "#606060",
          fontSize: "16px",
          fontWeight: "bold",
          paddingTop: "12px"
        }
      })))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var widget = this.props.widget;
      $.ajax({
        url: "http://collect.earth:8888/getStats",
        type: "POST",
        async: true,
        indexVal: widget.id,
        polyVal: $.parseJSON(projPairAOI),
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify({
          paramValue: $.parseJSON(projPairAOI)
        })
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.warn(jqXHR + textStatus + errorThrown);
      }).done(function (data, _textStatus, _jqXHR) {
        if (data.errMsg) {
          console.warn(e.message + _textStatus + _jqXHR);
        } else {
          var $this = this;
          $("#totalPop_" + $this.indexVal).text(numberWithCommas(data.pop));
          $("#totalArea_" + $this.indexVal).text(calculateArea($this.polyVal) + " ha");
          $("#elevationRange_" + $this.indexVal).text(numberWithCommas(data.minElev) + " - " + numberWithCommas(data.maxElev) + " m");
        }
      });
    }
  }]);

  return StatsWidget;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function sortData(a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
}

function createChart(wIndex, wText, wTimeseriesData) {
  "use strict";

  return Highcharts.chart("graphcontainer_" + wIndex, {
    chart: {
      zoomType: "x"
    },
    title: {
      text: ""
    },
    subtitle: {
      text: document.ontouchstart === undefined ? "Click and drag in the plot area to zoom in" : "Pinch the chart to zoom in"
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
          stops: [[0, "#31bab0"], [1, Highcharts.Color("#31bab0").setOpacity(0).get("rgba")]]
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
      data: wTimeseriesData,
      color: "#31bab0"
    }]
  }, function () {
    $("#widgettitle_" + wIndex).text(wText);
    $("#widgetgraph_" + wIndex + " .highcharts-yaxis").children()[0].innerHTML = wText;
  });
}

function numberWithCommas(x) {
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

function calculateArea(poly) {
  var sphere = new ol.Sphere(6378137);
  var coordinates = poly;
  var area_m = sphere.geodesicArea(coordinates);
  var area_ha = area_m / 10000;

  if (area_ha < 0) {
    area_ha = area_ha * -1;
  }

  area_ha = Math.round(area_ha * Math.pow(10, 4)) / Math.pow(10, 4);
  return numberWithCommas(area_ha);
}

function addTileServer(imageid, token, mapdiv, isDual) {
  var googleLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: "https://earthengine.googleapis.com/map/" + imageid + "/{z}/{x}/{y}?token=" + token
    }),
    id: mapdiv
  });
  mapWidgetArray[mapdiv].addLayer(googleLayer);

  if (!isDual) {
    addBuffer(mapWidgetArray[mapdiv]);
  }
}

;

function addDualLayer(imageid, token, mapdiv) {
  var googleLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: "https://earthengine.googleapis.com/map/" + imageid + "/{z}/{x}/{y}?token=" + token
    }),
    id: mapdiv + '_dual'
  });
  mapWidgetArray[mapdiv].addLayer(googleLayer);
  var swipe = document.getElementById('swipeWidget_' + mapdiv.replace('widgetmap_', ''));
  googleLayer.on('precompose', function (event) {
    var ctx = event.context;
    var width = ctx.canvas.width * swipe.value;
    ctx.save();
    ctx.beginPath();
    ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
    ctx.clip();
  });
  googleLayer.on('postcompose', function (event) {
    var ctx = event.context;
    ctx.restore();
  });
  swipe.addEventListener('input', function () {
    mapWidgetArray[mapdiv].render();
  }, false);
  addBuffer(mapWidgetArray[mapdiv]);
}

;

function setOpacity(value, layerID) {
  try {
    var id = layerID;
    var theLayers = mapWidgetArray[layerID].getLayers().forEach(function (lyr) {
      if (id == lyr.get('id') || id + '_dual' == lyr.get('id')) {
        lyr.setOpacity(value);
      }
    });
  } catch (e) {}
}

;

function addBuffer(whichMap) {
  "use strict";

  try {
    //check to see the shape here...
    if (plotshape && plotshape == 'square') {
      var centerPoint = new ol.geom.Point(ol.proj.transform(JSON.parse(bcenter).coordinates, "EPSG:4326", "EPSG:3857"));
      var pointFeature = new ol.Feature(centerPoint);
      var poitnExtent = pointFeature.getGeometry().getExtent();
      var bufferedExtent = new ol.extent.buffer(poitnExtent, parseInt(bradius));
      var bufferPolygon = new ol.geom.Polygon([[[bufferedExtent[0], bufferedExtent[1]], [bufferedExtent[0], bufferedExtent[3]], [bufferedExtent[2], bufferedExtent[3]], [bufferedExtent[2], bufferedExtent[1]], [bufferedExtent[0], bufferedExtent[1]]]]);
      var bufferedFeature = new ol.Feature(bufferPolygon); // vectorBuffers.getSource().addFeature(bufferedFeature);

      var vectorSource = new ol.source.Vector({});
      vectorSource.addFeatures([bufferedFeature]);
      var layer = new ol.layer.Vector({
        source: vectorSource,
        style: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "#8b2323",
            width: 2
          }),
          fill: null
        })]
      });
      whichMap.addLayer(layer);
    } else if (plotshape && plotshape == 'circle') {
      var circle = new ol.geom.Circle(ol.proj.transform(JSON.parse(bcenter).coordinates, "EPSG:4326", "EPSG:3857"), bradius * 1);
      var CircleFeature = new ol.Feature(circle);
      var vectorSource = new ol.source.Vector({});
      vectorSource.addFeatures([CircleFeature]);
      var layer = new ol.layer.Vector({
        source: vectorSource,
        style: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "#8b2323",
            width: 2
          }),
          fill: null
        })]
      });
      whichMap.addLayer(layer);
    } else {
      // fetch(theURL + "/id/" + pid,)
      //     .then(response => response.json())
      //     .then(function(_geojson_object){
      //         var vectorSource = new ol.source.Vector({
      //             features: (new ol.format.GeoJSON()).readFeatures(_geojson_object, { featureProjection: 'EPSG:3857' }) // this is important to know...
      //         });
      //
      //         vectorSource = new ol.layer.Vector({
      //             source: _geojson_vectorSource,
      //             style: [
      //                 new ol.style.Style({
      //                     stroke: new ol.style.Stroke({
      //                         color: "#8b2323",
      //                         width: 2
      //                     }),
      //                     fill: null
      //                 })
      //             ]
      //         });
      //         whichMap.addLayer(_geojson_vectorLayer);
      //     });
      $.ajax({
        url: theURL.replace('/geo-dash', '') + "/get-project-plot/" + projectID + "/" + plotID,
        type: "GET",
        async: true,
        theMap: whichMap,
        contentType: "application/json"
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.warn(jqXHR + textStatus + errorThrown);
      }).done(function (data, _textStatus, _jqXHR) {
        if (data.errMsg) {
          console.warn(e.message + _textStatus + _jqXHR);
        } else {
          var whichMap = this.theMap;

          var _geojson_object = typeof data == 'string' ? JSON.parse(data) : data;

          var vectorSource = new ol.source.Vector({
            features: new ol.format.GeoJSON().readFeatures(_geojson_object, {
              featureProjection: 'EPSG:4326'
            }) // this is important to know change to proper projection...

          });

          var _geojson_vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: [new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: "#8b2323",
                width: 2
              }),
              fill: null
            })]
          });

          whichMap.addLayer(_geojson_vectorLayer);
        }
      });
    }
  } catch (e) {
    console.warn("buffer failed: " + e.message);
  }
}

;

Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based

  var dd = this.getDate();
  return [this.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
};

var left = 0;
var ptop = 0;
var bradius = getParameterByName("bradius");
var bcenter = getParameterByName("bcenter");
var projAOI = getParameterByName("aoi");
var plotshape = getParameterByName("plotshape");
var projectID = getParameterByName("pid");
var plotID = getParameterByName("plotid");
var theSplit = decodeURI(projAOI).replace("[", "").replace("]", "").split(",");
var projPairAOI = "[[" + theSplit[0] + "," + theSplit[1] + "],[" + theSplit[2] + "," + theSplit[1] + "],[" + theSplit[2] + "," + theSplit[3] + "],[" + theSplit[0] + "," + theSplit[3] + "],[" + theSplit[0] + "," + theSplit[1] + "]]";
var mapWidgetArray = [];
var graphWidgetArray = [];
function renderGeodashPage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Geodash, null), document.getElementById("dashHolder"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvZ2VvZGFzaHJlYWN0LmpzIl0sIm5hbWVzIjpbImdlZVRpbWVvdXQiLCJHZW9kYXNoIiwicHJvcHMiLCJ3aWRnZXQiLCJ0eXBlIiwid2lkZ2V0cyIsInN0YXRlIiwiaW5kZXgiLCJpbmRleE9mIiwiaXNGdWxsIiwic2V0U3RhdGUiLCJ1cGRhdGVTaXplIiwiaWQiLCJldnQiLCJvcGFjaXR5IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRPcGFjaXR5IiwiJCIsInZhbCIsInNsaWRlclR5cGUiLCJzd2lwZVZhbHVlIiwiY2FsbGJhY2tDb21wbGV0ZSIsImZldGNoIiwidGhlVVJMIiwicGlkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtYXAiLCJwcm9qQU9JIiwiaGFuZGxlRnVsbFNjcmVlbiIsImhhbmRsZU9wYWNpdHlDaGFuZ2UiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJoYW5kbGVTd2lwZUNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93IiwicmVzaXplIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsInN1YnN0cmluZyIsImdyYXBoV2lkZ2V0QXJyYXkiLCJzZXRTaXplIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwibWFwV2lkZ2V0QXJyYXkiLCJ3aGljaCIsInRvZ2dsZUNsYXNzIiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJzY3JvbGxUbyIsImxlZnQiLCJwdG9wIiwiV2lkZ2V0cyIsIm9uRnVsbFNjcmVlbiIsIm9uT3BhY2l0eUNoYW5nZWQiLCJvcGFjaXR5VmFsdWUiLCJvblNsaWRlckNoYW5nZSIsIm9uU3dpcGVDaGFuZ2UiLCJncmlkQXJlYSIsImRpc3BsYXkiLCJXaWRnZXQiLCJpbWFnZUNvbGxlY3Rpb25MaXN0IiwiZ3JhcGhDb250cm9sTGlzdCIsImdldFdpZGdldEh0bWwiLCJncmlkY29sdW1uIiwibGF5b3V0IiwiZ2V0Q2xhc3NOYW1lcyIsImdyaWRyb3ciLCJoIiwiZ3JpZENvbHVtbiIsImdlbmVyYXRlZ3JpZGNvbHVtbiIsIngiLCJ3IiwiZ3JpZFJvdyIsImdlbmVyYXRlZ3JpZHJvdyIsInkiLCJuYW1lIiwiZ2V0V2lkZ2V0VHlwZSIsImNvbG9yIiwiZ2V0V2lkZ2V0SW5uZXJIdG1sIiwiYXdpZGdldCIsImR1YWxJbWFnZUNvbGxlY3Rpb24iLCJJbWFnZUFzc2V0Iiwid3RleHQiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJmdWxsU3RhdGUiLCJjIiwiciIsImNsYXNzbmFtZXMiLCJjb250cm9sIiwic2xpZGVyIiwiTWFwV2lkZ2V0Iiwid2lkdGgiLCJtaW5IZWlnaHQiLCJnZXRTbGlkZXJDb250cm9sIiwib25PcGFjaXR5Q2hhbmdlIiwid2lkZ2V0SWQiLCJkdWFsTGF5ZXIiLCJvU3R5bGUiLCJzU3R5bGUiLCJmbG9hdCIsIm1hcmdpbiIsImJhc2VtYXAiLCJyYXN0ZXIiLCJvbCIsImxheWVyIiwiVGlsZSIsInNvdXJjZSIsIk9TTSIsIm1lcmNhdG9yIiwiY3JlYXRlU291cmNlIiwic291cmNlQ29uZmlnIiwiY29sbGVjdGlvbk5hbWUiLCJ1cmwiLCJmaWx0ZXJUeXBlIiwiZnRzIiwidHJpbSIsInZpc1BhcmFtcyIsInBhcnNlSlNPTiIsImUiLCJtaW4iLCJtYXgiLCJiYW5kcyIsImJhc2VNYXAiLCJnZXRSYXN0ZXJCeUJhc2VtYXBDb25maWciLCJtYXBkaXYiLCJNYXAiLCJsYXllcnMiLCJ2aWV3IiwiVmlldyIsImNlbnRlciIsInByb2plY3Rpb24iLCJ6b29tIiwiZ2V0VmlldyIsIm9uIiwib25wcm9wZXJ0eWNoYW5nZSIsImRpc3BhdGNoRXZlbnQiLCJ1biIsInBhdXNlR2VlTGF5ZXIiLCJyZXN1bWVHZWVMYXllciIsImZpdCIsInByb2oiLCJ0cmFuc2Zvcm0iLCJjb25jYXQiLCJnZXRTaXplIiwicG9zdE9iamVjdCIsImRhdGVGcm9tIiwiZGF0ZVRvIiwicmVxdWVzdGVkSW5kZXgiLCJkdWFsSW1hZ2VPYmplY3QiLCJmaXJzdEltYWdlIiwic2Vjb25kSW1hZ2UiLCJjb2xsZWN0aW9uVHlwZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzaG9ydFdpZGdldCIsInB1c2giLCJnZXRHYXRld2F5VXJsIiwiYmFuZCIsImdldEltYWdlUGFyYW1zIiwiY2xvdWRMZXNzVGhhbiIsInBhcnNlSW50Iiwic2hvcnRXaWRnZXQyIiwiaW1hZ2VOYW1lIiwiZ2VvbWV0cnkiLCJwcm9qUGFpckFPSSIsImFqYXgiLCJhc3luYyIsImluZGV4VmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImR1YWxTdGFydCIsImR1YWxFbmQiLCJjcm9zc0RvbWFpbiIsImNvbnRlbnRUeXBlIiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsIndhcm4iLCJkb25lIiwiX3RleHRTdGF0dXMiLCJfanFYSFIiLCJlcnJNc2ciLCJpbmZvIiwiaGFzT3duUHJvcGVydHkiLCJtYXBJZCIsIm1hcGlkIiwidG9rZW4iLCIkdGhpcyIsImR1YWxJbWFnZSIsImFkZFRpbGVTZXJ2ZXIiLCJzZWNvbmRPYmplY3QiLCJwYXJzZSIsImFkZER1YWxMYXllciIsIndvcmtpbmdPYmplY3QiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImZvckVhY2giLCJseXIiLCJnZXQiLCJzZXRWaXNpYmxlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIkdyYXBoV2lkZ2V0IiwiaW5kZXhOYW1lIiwiZGF0ZSIsIkRhdGUiLCJjb2xsZWN0aW9uTmFtZVRpbWVTZXJpZXMiLCJwb2x5Z29uIiwiZGF0ZUZyb21UaW1lU2VyaWVzIiwiZGF0ZVRvVGltZVNlcmllcyIsInl5eXltbWRkIiwidGltZXNlcmllc0RhdGEiLCJlYWNoIiwidGltZXNlcmllcyIsImlnbm9yZSIsInNvcnQiLCJzb3J0RGF0YSIsImNyZWF0ZUNoYXJ0IiwiU3RhdHNXaWRnZXQiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZ1RvcCIsInBvbHlWYWwiLCJwYXJhbVZhbHVlIiwibWVzc2FnZSIsInRleHQiLCJudW1iZXJXaXRoQ29tbWFzIiwicG9wIiwiY2FsY3VsYXRlQXJlYSIsIm1pbkVsZXYiLCJtYXhFbGV2IiwiYSIsImIiLCJ3SW5kZXgiLCJ3VGV4dCIsIndUaW1lc2VyaWVzRGF0YSIsIkhpZ2hjaGFydHMiLCJjaGFydCIsInpvb21UeXBlIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm9udG91Y2hzdGFydCIsInVuZGVmaW5lZCIsInhBeGlzIiwieUF4aXMiLCJsZWdlbmQiLCJlbmFibGVkIiwicGxvdE9wdGlvbnMiLCJhcmVhIiwiZmlsbENvbG9yIiwibGluZWFyR3JhZGllbnQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0b3BzIiwiQ29sb3IiLCJtYXJrZXIiLCJyYWRpdXMiLCJsaW5lV2lkdGgiLCJzdGF0ZXMiLCJob3ZlciIsInRocmVzaG9sZCIsInRvb2x0aXAiLCJwb2ludEZvcm1hdCIsInNlcmllcyIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwicGFydHMiLCJ0b1N0cmluZyIsInNwbGl0IiwicmVwbGFjZSIsImpvaW4iLCJwb2x5Iiwic3BoZXJlIiwiU3BoZXJlIiwiY29vcmRpbmF0ZXMiLCJhcmVhX20iLCJnZW9kZXNpY0FyZWEiLCJhcmVhX2hhIiwiTWF0aCIsInJvdW5kIiwicG93IiwiaW1hZ2VpZCIsImlzRHVhbCIsImdvb2dsZUxheWVyIiwiWFlaIiwiYWRkTGF5ZXIiLCJhZGRCdWZmZXIiLCJzd2lwZSIsImdldEVsZW1lbnRCeUlkIiwiZXZlbnQiLCJjdHgiLCJjb250ZXh0IiwiY2FudmFzIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlY3QiLCJjbGlwIiwicmVzdG9yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJsYXllcklEIiwidGhlTGF5ZXJzIiwid2hpY2hNYXAiLCJwbG90c2hhcGUiLCJjZW50ZXJQb2ludCIsImdlb20iLCJQb2ludCIsImJjZW50ZXIiLCJwb2ludEZlYXR1cmUiLCJGZWF0dXJlIiwicG9pdG5FeHRlbnQiLCJnZXRHZW9tZXRyeSIsImdldEV4dGVudCIsImJ1ZmZlcmVkRXh0ZW50IiwiZXh0ZW50IiwiYnVmZmVyIiwiYnJhZGl1cyIsImJ1ZmZlclBvbHlnb24iLCJQb2x5Z29uIiwiYnVmZmVyZWRGZWF0dXJlIiwidmVjdG9yU291cmNlIiwiVmVjdG9yIiwiYWRkRmVhdHVyZXMiLCJzdHlsZSIsIlN0eWxlIiwic3Ryb2tlIiwiU3Ryb2tlIiwiZmlsbCIsImNpcmNsZSIsIkNpcmNsZSIsIkNpcmNsZUZlYXR1cmUiLCJwcm9qZWN0SUQiLCJwbG90SUQiLCJ0aGVNYXAiLCJfZ2VvanNvbl9vYmplY3QiLCJmZWF0dXJlcyIsImZvcm1hdCIsIkdlb0pTT04iLCJyZWFkRmVhdHVyZXMiLCJmZWF0dXJlUHJvamVjdGlvbiIsIl9nZW9qc29uX3ZlY3RvckxheWVyIiwicHJvdG90eXBlIiwibW0iLCJnZXRNb250aCIsImRkIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0UGFyYW1ldGVyQnlOYW1lIiwidGhlU3BsaXQiLCJkZWNvZGVVUkkiLCJyZW5kZXJHZW9kYXNoUGFnZSIsImFyZ3MiLCJSZWFjdERPTSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLEVBQWpCOztJQUNNQyxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsaUZBQU1BLEtBQU47O0FBRGUsK0ZBNEJBLFVBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFrQjtBQUNqQyxVQUFNQyxPQUFPLHNCQUFPLE1BQUtDLEtBQUwsQ0FBV0QsT0FBbEIsQ0FBYjs7QUFDQSxVQUFNRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkwsTUFBaEIsQ0FBZDtBQUNBRSxhQUFPLENBQUNFLEtBQUQsQ0FBUCxxQkFBc0JKLE1BQXRCO0FBQ0FFLGFBQU8sQ0FBQ0UsS0FBRCxDQUFQLENBQWVFLE1BQWYsR0FBd0IsQ0FBQ0osT0FBTyxDQUFDRSxLQUFELENBQVAsQ0FBZUUsTUFBeEM7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUVMLGVBQU8sRUFBUEE7QUFBRixPQUFkLEVBQ0ksWUFBVztBQUFFTSxrQkFBVSxDQUFDUixNQUFELEVBQVNDLElBQVQsQ0FBVjtBQUEwQixPQUQzQztBQUdILEtBcENrQjs7QUFBQSxrR0FxQ0csVUFBQ0QsTUFBRCxFQUFTUyxFQUFULEVBQWFDLEdBQWIsRUFBcUI7QUFDdkMsVUFBTVIsT0FBTyxzQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLENBQWI7O0FBQ0EsVUFBTUUsS0FBSyxHQUFHRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JMLE1BQWhCLENBQWQ7QUFDQUUsYUFBTyxDQUFDRSxLQUFELENBQVAscUJBQXNCSixNQUF0QjtBQUNBRSxhQUFPLENBQUNFLEtBQUQsQ0FBUCxDQUFlTyxPQUFmLEdBQXlCRCxHQUFHLENBQUNFLE1BQUosQ0FBV0MsS0FBcEM7QUFDQUMsZ0JBQVUsQ0FBQ0MsQ0FBQyxDQUFDLGtCQUFrQk4sRUFBbkIsQ0FBRCxDQUF3Qk8sR0FBeEIsRUFBRCxFQUFnQyxlQUFlUCxFQUEvQyxDQUFWOztBQUNBLFlBQUtGLFFBQUwsQ0FBYztBQUFFTCxlQUFPLEVBQVBBO0FBQUYsT0FBZDtBQUNILEtBNUNrQjs7QUFBQSxpR0E2Q0UsVUFBQ0YsTUFBRCxFQUFTUyxFQUFULEVBQWFDLEdBQWIsRUFBcUI7QUFDdEMsVUFBTVIsT0FBTyxzQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLENBQWI7O0FBQ0EsVUFBTUUsS0FBSyxHQUFHRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JMLE1BQWhCLENBQWQ7QUFDQUUsYUFBTyxDQUFDRSxLQUFELENBQVAscUJBQXNCSixNQUF0QjtBQUNBRSxhQUFPLENBQUNFLEtBQUQsQ0FBUCxDQUFlYSxVQUFmLEdBQTRCZixPQUFPLENBQUNFLEtBQUQsQ0FBUCxDQUFlYSxVQUFmLElBQTZCLFNBQTdCLEdBQXdDLE9BQXhDLEdBQWlELFNBQTdFOztBQUNBLFlBQUtWLFFBQUwsQ0FBYztBQUFFTCxlQUFPLEVBQVBBO0FBQUYsT0FBZDtBQUNILEtBbkRrQjs7QUFBQSxnR0FvREMsVUFBQ0YsTUFBRCxFQUFTUyxFQUFULEVBQWFDLEdBQWIsRUFBcUI7QUFDckMsVUFBTVIsT0FBTyxzQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLENBQWI7O0FBQ0EsVUFBTUUsS0FBSyxHQUFHRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JMLE1BQWhCLENBQWQ7QUFDQUUsYUFBTyxDQUFDRSxLQUFELENBQVAscUJBQXNCSixNQUF0QjtBQUNBRSxhQUFPLENBQUNFLEtBQUQsQ0FBUCxDQUFlYyxVQUFmLEdBQTRCUixHQUFHLENBQUNFLE1BQUosQ0FBV0MsS0FBdkM7O0FBQ0EsWUFBS04sUUFBTCxDQUFjO0FBQUVMLGVBQU8sRUFBUEE7QUFBRixPQUFkO0FBQ0gsS0ExRGtCOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUFFRCxhQUFPLEVBQUUsRUFBWDtBQUFnQmlCLHNCQUFnQixFQUFFO0FBQWxDLEtBQWI7QUFGZTtBQUdsQjs7Ozt3Q0FDbUI7QUFBQTs7QUFDaEJDLFdBQUssQ0FBQ0MsTUFBTSxHQUFHLE1BQVQsR0FBa0JDLEdBQW5CLENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLE9BRGxCLEVBRUtGLElBRkwsQ0FFVSxVQUFBRyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDeEIsT0FBTCxDQUFheUIsR0FBYixDQUFpQixVQUFTM0IsTUFBVCxFQUFnQjtBQUMzQ0EsZ0JBQU0sQ0FBQ00sTUFBUCxHQUFnQixLQUFoQjtBQUNBTixnQkFBTSxDQUFDVyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FYLGdCQUFNLENBQUNpQixVQUFQLEdBQW9CLFNBQXBCO0FBQ0FqQixnQkFBTSxDQUFDa0IsVUFBUCxHQUFvQixLQUFwQjtBQUNBLGlCQUFPbEIsTUFBUDtBQUFlLFNBTEwsQ0FBSjtBQUFBLE9BRmQsRUFRS3VCLElBUkwsQ0FRVSxVQUFBRyxJQUFJO0FBQUEsZUFBSSxNQUFJLENBQUNuQixRQUFMLENBQWM7QUFBRUwsaUJBQU8sRUFBRXdCLElBQVg7QUFBaUJQLDBCQUFnQixFQUFFO0FBQW5DLFNBQWQsQ0FBSjtBQUFBLE9BUmQ7QUFTSDs7OzZCQUNRO0FBQ0wsYUFBUywyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDTCwyREFBQyxPQUFEO0FBQ0ksZUFBTyxFQUFFLEtBQUtoQixLQUFMLENBQVdELE9BRHhCO0FBRUksZUFBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV3lCLE9BRnhCO0FBR0ksb0JBQVksRUFBSSxLQUFLQyxnQkFIekI7QUFJSSx3QkFBZ0IsRUFBSSxLQUFLQyxtQkFKN0I7QUFLSSxzQkFBYyxFQUFJLEtBQUtDLGtCQUwzQjtBQU1JLHFCQUFhLEVBQUksS0FBS0MsaUJBTjFCO0FBT0ksd0JBQWdCLEVBQUksS0FBSzdCLEtBQUwsQ0FBV2dCO0FBUG5DLFFBREssQ0FBVDtBQVdIOzs7O0VBNUJpQmMsNENBQUssQ0FBQ0MsUzs7QUE2RDVCbkIsQ0FBQyxDQUFFb0IsTUFBRixDQUFELENBQVlDLE1BQVosQ0FBbUIsWUFBVztBQUMxQixNQUFHckIsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJzQixNQUE3QixHQUFzQyxDQUF6QyxFQUNBO0FBQ0ksUUFBSTVCLEVBQUUsR0FBR00sQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIsQ0FBN0IsRUFBZ0N1QixVQUFoQyxDQUEyQyxDQUEzQyxFQUE4QzdCLEVBQTlDLENBQWlEOEIsU0FBakQsQ0FBMkR4QixDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QixDQUE3QixFQUFnQ3VCLFVBQWhDLENBQTJDLENBQTNDLEVBQThDN0IsRUFBOUMsQ0FBaURKLE9BQWpELENBQXlELEdBQXpELElBQWdFLENBQTNILENBQVQ7O0FBQ0EsUUFBR21DLGdCQUFnQixDQUFDLGlCQUFpQi9CLEVBQWxCLENBQWhCLElBQXlDLElBQTVDLEVBQ0E7QUFDSStCLHNCQUFnQixDQUFDLGlCQUFpQi9CLEVBQWxCLENBQWhCLENBQXNDZ0MsT0FBdEMsQ0FBOEMxQixDQUFDLENBQUMsa0JBQWtCTixFQUFuQixDQUFELENBQXdCaUMsVUFBeEIsRUFBOUMsRUFBb0YzQixDQUFDLENBQUMsa0JBQWtCTixFQUFuQixDQUFELENBQXdCa0MsV0FBeEIsRUFBcEYsRUFBMkgsSUFBM0g7QUFDSCxLQUhELE1BSUssSUFBR0MsY0FBYyxDQUFDLGlCQUFpQm5DLEVBQWxCLENBQWQsSUFBdUMsSUFBMUMsRUFBK0M7QUFDaERtQyxvQkFBYyxDQUFDLGVBQWVuQyxFQUFoQixDQUFkLENBQWtDRCxVQUFsQztBQUNIO0FBQ0o7QUFDSixDQVpEOztBQWFBLFNBQVNBLFVBQVQsQ0FBb0JxQyxLQUFwQixFQUEyQjVDLElBQTNCLEVBQ0E7QUFDSWMsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVK0IsV0FBVixDQUFzQixVQUF0QjtBQUNBLE1BQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxlQUFuQjs7QUFDQSxNQUFHLENBQUNkLE1BQU0sQ0FBQ2UsV0FBUCxJQUFzQkgsR0FBRyxDQUFDSSxVQUEzQixLQUEwQ0osR0FBRyxDQUFDSyxVQUFKLElBQWtCLENBQTVELEtBQWtFLENBQWxFLElBQXVFLENBQUNqQixNQUFNLENBQUNrQixXQUFQLElBQXNCTixHQUFHLENBQUNPLFNBQTNCLEtBQTBDUCxHQUFHLENBQUNRLFNBQUosSUFBaUIsQ0FBM0QsS0FBaUUsQ0FBM0ksRUFDQTtBQUNJcEIsVUFBTSxDQUFDcUIsUUFBUCxDQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCO0FBQ0FELFFBQUksR0FBRyxDQUFQO0FBQ0FDLFFBQUksR0FBRyxDQUFQO0FBQ0gsR0FMRCxNQU1JO0FBQ0FELFFBQUksR0FBRyxDQUFDdEIsTUFBTSxDQUFDZSxXQUFQLElBQXNCSCxHQUFHLENBQUNJLFVBQTNCLEtBQTBDSixHQUFHLENBQUNLLFVBQUosSUFBa0IsQ0FBNUQsQ0FBUDtBQUNBTSxRQUFJLEdBQUcsQ0FBQ3ZCLE1BQU0sQ0FBQ2tCLFdBQVAsSUFBc0JOLEdBQUcsQ0FBQ08sU0FBM0IsS0FBMENQLEdBQUcsQ0FBQ1EsU0FBSixJQUFpQixDQUEzRCxDQUFQO0FBQ0FwQixVQUFNLENBQUNxQixRQUFQLENBQWdCLENBQWhCLEVBQWtCLENBQWxCO0FBQ0g7O0FBQ0QsTUFBR3ZELElBQUksS0FBSyxXQUFaLEVBQXdCO0FBQ3hCMkMsa0JBQWMsQ0FBQyxlQUFlQyxLQUFLLENBQUNwQyxFQUF0QixDQUFkLENBQXdDRCxVQUF4QztBQUNDLEdBRkQsTUFHSyxJQUFHUCxJQUFJLEtBQUssYUFBWixFQUEwQjtBQUMzQnVDLG9CQUFnQixDQUFDLGlCQUFnQkssS0FBSyxDQUFDcEMsRUFBdkIsQ0FBaEIsQ0FBMkNnQyxPQUEzQyxDQUFtRDFCLENBQUMsQ0FBQyxrQkFBaUI4QixLQUFLLENBQUNwQyxFQUF4QixDQUFELENBQTZCaUMsVUFBN0IsRUFBbkQsRUFBOEYzQixDQUFDLENBQUMsa0JBQWlCOEIsS0FBSyxDQUFDcEMsRUFBeEIsQ0FBRCxDQUE2QmtDLFdBQTdCLEVBQTlGLEVBQTBJLElBQTFJO0FBQ0g7QUFDSjs7SUFHS2dCLE87Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFBQTs7QUFDTCxVQUFHLEtBQUs1RCxLQUFMLENBQVdHLE9BQVgsQ0FBbUJtQyxNQUFuQixHQUE0QixDQUEvQixFQUNBO0FBQ0EsZUFBUztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNKLEtBQUt0QyxLQUFMLENBQVdHLE9BQVgsQ0FBbUJ5QixHQUFuQixDQUF1QixVQUFBM0IsTUFBTTtBQUFBLGlCQUMxQiwyREFBQyxNQUFEO0FBQ0ksZUFBRyxFQUFFQSxNQUFNLENBQUNTLEVBRGhCO0FBRUksY0FBRSxFQUFFVCxNQUFNLENBQUNTLEVBRmY7QUFHSSxrQkFBTSxFQUFFVCxNQUhaO0FBSUksd0JBQVksRUFBRyxNQUFJLENBQUNELEtBQUwsQ0FBVzZELFlBSjlCO0FBS0ksNEJBQWdCLEVBQUksTUFBSSxDQUFDN0QsS0FBTCxDQUFXOEQsZ0JBTG5DO0FBTUksd0JBQVksRUFBSSxNQUFJLENBQUM5RCxLQUFMLENBQVcrRCxZQU4vQjtBQU9JLDBCQUFjLEVBQUksTUFBSSxDQUFDL0QsS0FBTCxDQUFXZ0UsY0FQakM7QUFRSSx5QkFBYSxFQUFJLE1BQUksQ0FBQ2hFLEtBQUwsQ0FBV2lFO0FBUmhDLFlBRDBCO0FBQUEsU0FBN0IsQ0FESSxDQUFUO0FBY0MsT0FoQkQsTUFpQkk7QUFDQSxlQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0w7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQWtELGVBQUssRUFBRTtBQUFDQyxvQkFBUSxFQUFFO0FBQVg7QUFBekQsV0FDSTtBQUFJLFlBQUUsRUFBQyxpQkFBUDtBQUF5QixlQUFLLEVBQUU7QUFBQ0MsbUJBQU8sRUFBRSxLQUFLbkUsS0FBTCxDQUFXb0IsZ0JBQVgsSUFBK0IsS0FBL0IsR0FBc0MsTUFBdEMsR0FBK0M7QUFBekQ7QUFBaEMsd0ZBREosQ0FESyxDQUFUO0FBS0g7QUFDSjs7OztFQTFCaUJjLDRDQUFLLENBQUNDLFM7O0lBNkJ0QmlDLE07Ozs7O0FBQ0Ysa0JBQVlwRSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsaUZBQU1BLEtBQU47QUFDQSxXQUFLcUUsbUJBQUwsR0FBMkIsQ0FBQyx1QkFBRCxFQUEwQixvQkFBMUIsRUFBZ0QscUJBQWhELEVBQXVFLHFCQUF2RSxFQUE4RixvQkFBOUYsRUFBb0gscUJBQXBILEVBQTJJLHFCQUEzSSxFQUFrSyxxQkFBbEssRUFBeUwseUJBQXpMLEVBQW9OLHlCQUFwTixFQUErTyx5QkFBL08sRUFBMFEsMEJBQTFRLENBQTNCO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsQ0FBQyxrQkFBRCxFQUFxQixpQkFBckIsRUFBd0MsZ0JBQXhDLEVBQTBELGdCQUExRCxFQUE0RSxlQUE1RSxFQUE2RixnQkFBN0YsRUFBK0csZ0JBQS9HLENBQXhCO0FBSGU7QUFJbEI7Ozs7NkJBQ1E7QUFBQSx3QkFDb0IsS0FBS3RFLEtBRHpCO0FBQUEsVUFDRUMsTUFERixlQUNFQSxNQURGO0FBQUEsVUFDVU0sTUFEVixlQUNVQSxNQURWO0FBRUwsYUFBWSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFBa0IsS0FBS2dFLGFBQUwsQ0FBbUJ0RSxNQUFuQixFQUEyQixLQUFLRCxLQUFMLENBQVc4RCxnQkFBdEMsRUFBd0QsS0FBSzlELEtBQUwsQ0FBVytELFlBQW5FLEVBQWlGLEtBQUsvRCxLQUFMLENBQVdnRSxjQUE1RixFQUE0RyxLQUFLaEUsS0FBTCxDQUFXaUUsYUFBdkgsQ0FBbEIsQ0FBWjtBQUNIOzs7a0NBQ2FoRSxNLEVBQVE2RCxnQixFQUFrQkMsWSxFQUFjQyxjLEVBQWdCQyxhLEVBQWM7QUFBQTs7QUFDaEYsVUFBR2hFLE1BQU0sQ0FBQ3VFLFVBQVAsSUFBcUJ2RSxNQUFNLENBQUN3RSxNQUEvQixFQUNBO0FBQ0ksZUFBUTtBQUFLLG1CQUFTLEVBQUcsS0FBS0MsYUFBTCxDQUFtQnpFLE1BQU0sQ0FBQ00sTUFBMUIsRUFBa0NOLE1BQU0sQ0FBQ3VFLFVBQVAsSUFBcUIsSUFBckIsR0FBMkJ2RSxNQUFNLENBQUN1RSxVQUFsQyxHQUE4QyxFQUFoRixFQUFvRnZFLE1BQU0sQ0FBQzBFLE9BQVAsSUFBa0IsSUFBbEIsR0FBd0IxRSxNQUFNLENBQUMwRSxPQUEvQixHQUF3QzFFLE1BQU0sQ0FBQ3dFLE1BQVAsSUFBaUIsSUFBakIsR0FBdUIsVUFBVXhFLE1BQU0sQ0FBQ3dFLE1BQVAsQ0FBY0csQ0FBL0MsR0FBa0QsRUFBOUssQ0FBakI7QUFDSSxlQUFLLEVBQUU7QUFBQ0Msc0JBQVUsRUFBQzVFLE1BQU0sQ0FBQ3VFLFVBQVAsSUFBcUIsSUFBckIsR0FBMkJ2RSxNQUFNLENBQUN1RSxVQUFsQyxHQUE4QyxLQUFLTSxrQkFBTCxDQUF3QjdFLE1BQU0sQ0FBQ3dFLE1BQVAsQ0FBY00sQ0FBdEMsRUFBeUM5RSxNQUFNLENBQUN3RSxNQUFQLENBQWNPLENBQXZELENBQTFEO0FBQXFIQyxtQkFBTyxFQUFDaEYsTUFBTSxDQUFDMEUsT0FBUCxJQUFrQixJQUFsQixHQUF3QjFFLE1BQU0sQ0FBQzBFLE9BQS9CLEdBQXdDLEtBQUtPLGVBQUwsQ0FBcUJqRixNQUFNLENBQUN3RSxNQUFQLENBQWNVLENBQW5DLEVBQXNDbEYsTUFBTSxDQUFDd0UsTUFBUCxDQUFjRyxDQUFwRDtBQUFySztBQURYLFdBRUo7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQXFDLFlBQUUsRUFBRSxZQUFZM0UsTUFBTSxDQUFDUztBQUE1RCxXQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFBSSxtQkFBUyxFQUFDO0FBQWQsV0FDSTtBQUFJLGVBQUssRUFBRTtBQUFDeUQsbUJBQU8sRUFBRTtBQUFWO0FBQVgsV0FBaUNsRSxNQUFNLENBQUNtRixJQUF4QyxDQURKLEVBRUk7QUFBSSxlQUFLLEVBQUU7QUFBQ2pCLG1CQUFPLEVBQUU7QUFBVjtBQUFYLFdBQWdDO0FBQUcsbUJBQVMsRUFBQyw0Q0FBYjtBQUEwRCxpQkFBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDbkUsS0FBTCxDQUFXNkQsWUFBWCxDQUF3QixNQUFJLENBQUM3RCxLQUFMLENBQVdDLE1BQW5DLEVBQTJDLE1BQUksQ0FBQ29GLGFBQUwsQ0FBbUJwRixNQUFuQixDQUEzQyxDQUFOO0FBQUEsV0FBbkU7QUFDRCxjQUFJLEVBQUMsUUFESjtBQUNhLGVBQUssRUFBQztBQURuQixXQUN1QztBQUFHLG1CQUFTLEVBQUMsMEJBQWI7QUFBd0MsZUFBSyxFQUFFO0FBQUNxRixpQkFBSyxFQUFFO0FBQVI7QUFBL0MsVUFEdkMsQ0FBaEMsQ0FGSixDQURKLENBREosRUFRSTtBQUFLLFlBQUUsRUFBRSxzQkFBc0JyRixNQUFNLENBQUNTLEVBQXRDO0FBQTBDLG1CQUFTLEVBQUM7QUFBcEQsV0FDUyxLQUFLNkUsa0JBQUwsQ0FBd0J0RixNQUF4QixFQUFnQzZELGdCQUFoQyxFQUFrREMsWUFBbEQsRUFBZ0VDLGNBQWhFLEVBQWdGQyxhQUFoRixDQURULENBUkosQ0FGSSxDQUFSO0FBZUgsT0FqQkQsTUFrQkk7QUFDQSxlQUFRO0FBQUssbUJBQVMsRUFBRWhFLE1BQU0sQ0FBQ00sTUFBUCxHQUFlLDZDQUFmLEdBQThEO0FBQTlFLFdBQ0o7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQXFDLFlBQUUsRUFBRSxZQUFZTixNQUFNLENBQUNTO0FBQTVELFdBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDSTtBQUFJLG1CQUFTLEVBQUM7QUFBZCxXQUNJO0FBQUksZUFBSyxFQUFFO0FBQUN5RCxtQkFBTyxFQUFFO0FBQVY7QUFBWCxXQUFpQ2xFLE1BQU0sQ0FBQ21GLElBQXhDLENBREosRUFFSTtBQUFJLGVBQUssRUFBRTtBQUFDakIsbUJBQU8sRUFBRTtBQUFWO0FBQVgsV0FBZ0M7QUFBRyxtQkFBUyxFQUFDLDRDQUFiO0FBQTBELGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNuRSxLQUFMLENBQVc2RCxZQUFYLENBQXdCLE1BQUksQ0FBQzdELEtBQUwsQ0FBV0MsTUFBbkMsRUFBMkMsTUFBSSxDQUFDb0YsYUFBTCxDQUFtQnBGLE1BQW5CLENBQTNDLENBQU47QUFBQSxXQUFuRTtBQUNHLGNBQUksRUFBQyxRQURSO0FBQ2lCLGVBQUssRUFBQztBQUR2QixXQUMyQztBQUFHLG1CQUFTLEVBQUMsMEJBQWI7QUFBd0MsZUFBSyxFQUFFO0FBQUNxRixpQkFBSyxFQUFFO0FBQVI7QUFBL0MsVUFEM0MsQ0FBaEMsQ0FGSixDQURKLENBREosRUFRSTtBQUFLLFlBQUUsRUFBRSxzQkFBc0JyRixNQUFNLENBQUNTLEVBQXRDO0FBQTBDLG1CQUFTLEVBQUM7QUFBcEQsV0FDSyxLQUFLNkUsa0JBQUwsQ0FBd0J0RixNQUF4QixFQUFnQzZELGdCQUFoQyxFQUFrREMsWUFBbEQsRUFBZ0VDLGNBQWhFLEVBQWdGQyxhQUFoRixDQURMLENBUkosQ0FESSxDQUFSO0FBY0g7QUFDSjs7O3VDQUNrQmMsQyxFQUFHQyxDLEVBQUU7QUFDcEIsYUFBUUQsQ0FBQyxHQUFHLENBQUwsR0FBVSxVQUFWLEdBQXVCQyxDQUE5QjtBQUNIOzs7b0NBQ2VELEMsRUFBR0gsQyxFQUFFO0FBQ2pCLGFBQVFHLENBQUMsR0FBRyxDQUFMLEdBQVUsVUFBVixHQUF1QkgsQ0FBOUI7QUFDSDs7O2tDQUNhWSxPLEVBQ2Q7QUFDSSxVQUFJQSxPQUFPLENBQUNDLG1CQUFSLElBQStCRCxPQUFPLENBQUNDLG1CQUFSLElBQStCLElBQS9ELElBQXlFRCxPQUFPLENBQUNFLFVBQVIsSUFBc0JGLE9BQU8sQ0FBQ0UsVUFBUixDQUFtQnBELE1BQW5CLEdBQTRCLENBQTlILEVBQ0E7QUFDSSxlQUFPLFdBQVA7QUFDSDs7QUFDRCxVQUFJcUQsS0FBSyxHQUFHSCxPQUFPLENBQUNJLFVBQVIsQ0FBbUIsQ0FBbkIsQ0FBWjs7QUFDQSxVQUFHLEtBQUt2QixtQkFBTCxDQUF5QndCLFFBQXpCLENBQWtDRixLQUFsQyxDQUFILEVBQ0E7QUFDSSxlQUFPLFdBQVA7QUFDSCxPQUhELE1BR00sSUFBSSxLQUFLckIsZ0JBQUwsQ0FBc0J1QixRQUF0QixDQUErQkYsS0FBL0IsQ0FBSixFQUEyQztBQUM3QyxlQUFPLGFBQVA7QUFDSCxPQUZLLE1BRUEsSUFBSUEsS0FBSyxLQUFLLFVBQWQsRUFBMEI7QUFDNUIsZUFBTyxhQUFQO0FBQ0gsT0FGSyxNQUdEO0FBQ0QsZUFBTyxpQkFBUDtBQUNIO0FBQ0o7OztrQ0FDYUcsUyxFQUFXQyxDLEVBQUdDLEMsRUFDNUI7QUFDSSxVQUFJQyxVQUFVLEdBQUcsYUFBakI7O0FBQ0EsVUFBR0gsU0FBSCxFQUNBO0FBQ0lHLGtCQUFVLElBQUksYUFBZDtBQUNILE9BSEQsTUFJSTtBQUNKQSxrQkFBVSxJQUFJRixDQUFDLENBQUNGLFFBQUYsQ0FBVyxTQUFYLElBQXVCLGlCQUF2QixHQUEwQ0UsQ0FBQyxDQUFDRixRQUFGLENBQVcsUUFBWCxJQUFzQixjQUF0QixHQUFzQ0UsQ0FBQyxDQUFDRixRQUFGLENBQVcsUUFBWCxJQUFzQixjQUF0QixHQUFzQyxjQUFwSTtBQUNBSSxrQkFBVSxJQUFJRCxDQUFDLENBQUNILFFBQUYsQ0FBVyxRQUFYLElBQXNCLFdBQXRCLEdBQW1DRyxDQUFDLENBQUNILFFBQUYsQ0FBVyxRQUFYLElBQXNCLFdBQXRCLEdBQW1DLFdBQXBGO0FBQ0M7O0FBQ0QsYUFBT0ksVUFBUDtBQUNIOzs7dUNBQ2tCaEcsTSxFQUFRNkQsZ0IsRUFBa0JDLFksRUFBY0MsYyxFQUFnQkMsYSxFQUFjO0FBQ3JGLFVBQUkwQixLQUFLLEdBQUcxRixNQUFNLENBQUMyRixVQUFQLENBQWtCLENBQWxCLENBQVo7QUFDQSxVQUFJTSxPQUFKO0FBQ0EsVUFBSUMsTUFBSjs7QUFDQSxVQUFHLEtBQUs5QixtQkFBTCxDQUF5QndCLFFBQXpCLENBQWtDRixLQUFsQyxLQUE2QzFGLE1BQU0sQ0FBQ3dGLG1CQUFQLElBQThCeEYsTUFBTSxDQUFDd0YsbUJBQVAsSUFBOEIsSUFBekcsSUFBbUh4RixNQUFNLENBQUN5RixVQUFQLElBQXFCekYsTUFBTSxDQUFDeUYsVUFBUCxDQUFrQnBELE1BQWxCLEdBQTJCLENBQXRLLEVBQ0E7QUFDSSxlQUFPO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQXVCLDJEQUFDLFNBQUQ7QUFBVyxnQkFBTSxFQUFFckMsTUFBbkI7QUFBMkIseUJBQWUsRUFBRTZELGdCQUE1QztBQUE4RCxzQkFBWSxFQUFFQyxZQUE1RTtBQUEwRix3QkFBYyxFQUFFQyxjQUExRztBQUEwSCx1QkFBYSxFQUFFQztBQUF6SSxVQUF2QixDQUFQO0FBR0gsT0FMRCxNQUtNLElBQUksS0FBS0ssZ0JBQUwsQ0FBc0J1QixRQUF0QixDQUErQkYsS0FBL0IsQ0FBSixFQUEyQztBQUM3QyxlQUFPO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQXVCLDJEQUFDLFdBQUQ7QUFBYSxnQkFBTSxFQUFFMUY7QUFBckIsVUFBdkIsQ0FBUDtBQUNILE9BRkssTUFFQSxJQUFJMEYsS0FBSyxLQUFLLFVBQWQsRUFBMEI7QUFDNUIsZUFBTztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUF1QiwyREFBQyxXQUFEO0FBQWEsZ0JBQU0sRUFBRTFGO0FBQXJCLFVBQXZCLENBQVA7QUFDSCxPQUZLLE1BR0Q7QUFDRCxlQUFPO0FBQUssYUFBRyxFQUFDLG9GQUFUO0FBQThGLGVBQUssRUFBRSxLQUFyRztBQUEyRyxnQkFBTSxFQUFFLEtBQW5IO0FBQXdILG1CQUFTLEVBQUM7QUFBbEksVUFBUDtBQUNIO0FBQ0o7Ozs7RUFyR2dCaUMsNENBQUssQ0FBQ0MsUzs7SUF3R3JCaUUsUzs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLFVBQU1uRyxNQUFNLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUExQjtBQUVBLGFBQVEsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0k7QUFBSyxVQUFFLEVBQUUsZUFBZUEsTUFBTSxDQUFDUyxFQUEvQjtBQUFtQyxpQkFBUyxFQUFDLGNBQTdDO0FBQTRELGFBQUssRUFBRTtBQUFDMkYsZUFBSyxFQUFDLE1BQVA7QUFBZUMsbUJBQVMsRUFBQztBQUF6QjtBQUFuRSxRQURKLEVBR0gsS0FBS0MsZ0JBQUwsRUFIRyxDQUFSO0FBS0g7Ozt1Q0FDaUI7QUFDZCxVQUFJdEcsTUFBTSxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsTUFBeEI7QUFDQSxVQUFNdUcsZUFBZSxHQUFHLEtBQUt4RyxLQUFMLENBQVd3RyxlQUFuQztBQUNBLFVBQU14QyxjQUFjLEdBQUcsS0FBS2hFLEtBQUwsQ0FBV2dFLGNBQWxDO0FBQ0EsVUFBTUMsYUFBYSxHQUFHLEtBQUtqRSxLQUFMLENBQVdpRSxhQUFqQztBQUVBLFVBQU13QyxRQUFRLEdBQUcsZUFBZXhHLE1BQU0sQ0FBQ1MsRUFBdkM7O0FBQ0EsVUFBR1QsTUFBTSxDQUFDeUcsU0FBUCxJQUFvQnpHLE1BQU0sQ0FBQ3dGLG1CQUE5QixFQUFrRDtBQUM5QyxZQUFJa0IsTUFBTSxHQUFHO0FBQUN4QyxpQkFBTyxFQUFFbEUsTUFBTSxDQUFDaUIsVUFBUCxJQUFxQixTQUFyQixHQUFnQyxPQUFoQyxHQUF5QztBQUFuRCxTQUFiO0FBQ0EsWUFBSTBGLE1BQU0sR0FBRztBQUFDekMsaUJBQU8sRUFBRWxFLE1BQU0sQ0FBQ2lCLFVBQVAsSUFBcUIsT0FBckIsR0FBOEIsT0FBOUIsR0FBdUM7QUFBakQsU0FBYjtBQUNELGVBQU8sd0VBQ0U7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmlCLFVBQWxCLElBQWdDLFNBQWhDLEdBQTJDLE9BQTNDLEdBQW9ELFNBQWhGO0FBQTJGLGVBQUssRUFBRTtBQUFDbUYsaUJBQUssRUFBRSxNQUFSO0FBQWdCUSxpQkFBSyxFQUFFLE1BQXZCO0FBQStCQyxrQkFBTSxFQUFFO0FBQXZDLFdBQWxHO0FBQXlKLGlCQUFPLEVBQUUsaUJBQUNuRyxHQUFEO0FBQUEsbUJBQVNxRCxjQUFjLENBQUMvRCxNQUFELEVBQVNBLE1BQU0sQ0FBQ1MsRUFBaEIsRUFBb0JDLEdBQXBCLENBQXZCO0FBQUE7QUFBbEssVUFERixFQUVFO0FBQU8sY0FBSSxFQUFHLE9BQWQ7QUFBc0IsbUJBQVMsRUFBRyxlQUFsQztBQUFrRCxZQUFFLEVBQUksaUJBQWlCVixNQUFNLENBQUNTLEVBQWhGO0FBQ08sZUFBSyxFQUFJLEtBQUtWLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlcsT0FEbEM7QUFFTyxhQUFHLEVBQUcsR0FGYjtBQUdPLGFBQUcsRUFBRyxHQUhiO0FBSU8sY0FBSSxFQUFHLEtBSmQ7QUFLTyxrQkFBUSxFQUFJLGtCQUFDRCxHQUFEO0FBQUEsbUJBQVM2RixlQUFlLENBQUN2RyxNQUFELEVBQVNBLE1BQU0sQ0FBQ1MsRUFBaEIsRUFBb0JDLEdBQXBCLENBQXhCO0FBQUEsV0FMbkI7QUFNTyxpQkFBTyxFQUFJLGlCQUFDQSxHQUFEO0FBQUEsbUJBQVM2RixlQUFlLENBQUN2RyxNQUFELEVBQVNBLE1BQU0sQ0FBQ1MsRUFBaEIsRUFBb0JDLEdBQXBCLENBQXhCO0FBQUEsV0FObEI7QUFPTyxlQUFLLEVBQUVnRztBQVBkLFVBRkYsRUFXSDtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLG1CQUFTLEVBQUMsZUFBOUI7QUFBOEMsWUFBRSxFQUFFLGlCQUFpQjFHLE1BQU0sQ0FBQ1MsRUFBMUU7QUFBOEUsYUFBRyxFQUFDLEdBQWxGO0FBQXNGLGFBQUcsRUFBQyxHQUExRjtBQUE4RixjQUFJLEVBQUMsS0FBbkc7QUFBeUcsZUFBSyxFQUFFLEtBQUtWLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmtCLFVBQWxJO0FBQ08sa0JBQVEsRUFBSSxrQkFBQ1IsR0FBRDtBQUFBLG1CQUFTc0QsYUFBYSxDQUFDaEUsTUFBRCxFQUFTQSxNQUFNLENBQUNTLEVBQWhCLEVBQW9CQyxHQUFwQixDQUF0QjtBQUFBLFdBRG5CO0FBRU8saUJBQU8sRUFBSSxpQkFBQ0EsR0FBRDtBQUFBLG1CQUFTc0QsYUFBYSxDQUFDaEUsTUFBRCxFQUFTQSxNQUFNLENBQUNTLEVBQWhCLEVBQW9CQyxHQUFwQixDQUF0QjtBQUFBLFdBRmxCO0FBR08sZUFBSyxFQUFFaUc7QUFIZCxVQVhHLENBQVA7QUFpQkYsT0FwQkQsTUFxQkk7QUFDQSxlQUFPO0FBQU8sY0FBSSxFQUFHLE9BQWQ7QUFBc0IsbUJBQVMsRUFBRyxVQUFsQztBQUE2QyxZQUFFLEVBQUksaUJBQWlCM0csTUFBTSxDQUFDUyxFQUEzRTtBQUNPLGVBQUssRUFBSSxLQUFLVixLQUFMLENBQVdDLE1BQVgsQ0FBa0JXLE9BRGxDO0FBRU8sYUFBRyxFQUFHLEdBRmI7QUFHTyxhQUFHLEVBQUcsR0FIYjtBQUlPLGNBQUksRUFBRyxLQUpkO0FBS08sa0JBQVEsRUFBSSxrQkFBQ0QsR0FBRDtBQUFBLG1CQUFTNkYsZUFBZSxDQUFDdkcsTUFBRCxFQUFTQSxNQUFNLENBQUNTLEVBQWhCLEVBQW9CQyxHQUFwQixDQUF4QjtBQUFBLFdBTG5CO0FBTU8saUJBQU8sRUFBSSxpQkFBQ0EsR0FBRDtBQUFBLG1CQUFTNkYsZUFBZSxDQUFDdkcsTUFBRCxFQUFTQSxNQUFNLENBQUNTLEVBQWhCLEVBQW9CQyxHQUFwQixDQUF4QjtBQUFBO0FBTmxCLFVBQVA7QUFRSDtBQUNKOzs7NkNBQ3dCb0csTyxFQUN6QjtBQUNJLFVBQUlDLE1BQUo7O0FBQ0EsVUFBR0QsT0FBTyxJQUFJLElBQVgsSUFBbUJBLE9BQU8sQ0FBQ3JHLEVBQVIsSUFBYyxLQUFwQyxFQUNBO0FBQ0lzRyxjQUFNLEdBQUcsSUFBSUMsRUFBRSxDQUFDQyxLQUFILENBQVNDLElBQWIsQ0FBa0I7QUFDdkJDLGdCQUFNLEVBQUUsSUFBSUgsRUFBRSxDQUFDRyxNQUFILENBQVVDLEdBQWQ7QUFEZSxTQUFsQixDQUFUO0FBR0gsT0FMRCxNQU1JO0FBQ0EsWUFBSUQsTUFBTSxHQUFHRSxtRUFBUSxDQUFDQyxZQUFULENBQXNCUixPQUFPLENBQUNTLFlBQTlCLENBQWI7QUFDQVIsY0FBTSxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUFiLENBQWtCO0FBQ3ZCQyxnQkFBTSxFQUFFQTtBQURlLFNBQWxCLENBQVQ7QUFHSDs7QUFDRCxhQUFPSixNQUFQO0FBQ0g7OztrQ0FDYS9HLE0sRUFBUXdILGMsRUFBZTtBQUNqQyxVQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFHekgsTUFBTSxDQUFDMEgsVUFBUCxJQUFxQixJQUFyQixJQUE2QjFILE1BQU0sQ0FBQzBILFVBQVAsQ0FBa0JyRixNQUFsQixHQUEyQixDQUEzRCxFQUE2RDtBQUN6RCxZQUFJc0YsR0FBRyxHQUFHO0FBQUMsc0JBQVksa0JBQWI7QUFBaUMsc0JBQVksa0JBQTdDO0FBQWlFLHNCQUFXLGtCQUE1RTtBQUFnRyx1QkFBYTtBQUE3RyxTQUFWO0FBQ0FGLFdBQUcsR0FBRywrQkFBK0JFLEdBQUcsQ0FBQzNILE1BQU0sQ0FBQzBILFVBQVIsQ0FBeEM7QUFDSCxPQUhELE1BSUssSUFBRzFILE1BQU0sQ0FBQ3lGLFVBQVAsSUFBcUJ6RixNQUFNLENBQUN5RixVQUFQLENBQWtCcEQsTUFBbEIsR0FBMkIsQ0FBbkQsRUFDTDtBQUNJb0YsV0FBRyxHQUFHLGlDQUFOO0FBQ0gsT0FISSxNQUlBLElBQUcsMkJBQTJCekgsTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixDQUE5QixFQUFtRDtBQUNwRDhCLFdBQUcsR0FBRyx3REFBTjtBQUNILE9BRkksTUFHQSxJQUFHRCxjQUFjLENBQUNJLElBQWYsR0FBc0J2RixNQUF0QixHQUErQixDQUFsQyxFQUNMO0FBQ0lvRixXQUFHLEdBQUcsNERBQU47QUFFSCxPQUpJLE1BS0Q7QUFDQUEsV0FBRyxHQUFHLGtEQUFOO0FBQ0g7O0FBQ0QsYUFBT0EsR0FBUDtBQUNIOzs7bUNBQ2N6SCxNLEVBQU87QUFDbEIsVUFBSTZILFNBQUo7O0FBQ0EsVUFBRzdILE1BQU0sQ0FBQzZILFNBQVYsRUFBcUI7QUFDakIsWUFBSTtBQUNBQSxtQkFBUyxHQUFHOUcsQ0FBQyxDQUFDK0csU0FBRixDQUFZOUgsTUFBTSxDQUFDNkgsU0FBbkIsQ0FBWjtBQUNILFNBRkQsQ0FHQSxPQUFPRSxDQUFQLEVBQVU7QUFDTkYsbUJBQVMsR0FBRzdILE1BQU0sQ0FBQzZILFNBQW5CO0FBQ0g7QUFDSixPQVBELE1BUUs7QUFDRCxZQUFJRyxHQUFKO0FBQ0EsWUFBSUMsR0FBSjs7QUFDQSxZQUFJO0FBQ0EsY0FBSWpJLE1BQU0sQ0FBQ2dJLEdBQVAsR0FBYSxDQUFqQixFQUFvQjtBQUNoQkEsZUFBRyxHQUFHaEksTUFBTSxDQUFDZ0ksR0FBYjtBQUNIOztBQUVELGNBQUloSSxNQUFNLENBQUNpSSxHQUFQLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEJBLGVBQUcsR0FBR2pJLE1BQU0sQ0FBQ2lJLEdBQWI7QUFDSDtBQUNKLFNBUkQsQ0FTQSxPQUFPRixDQUFQLEVBQVUsQ0FDTjtBQUNIOztBQUNERixpQkFBUyxHQUFHO0FBQ1JHLGFBQUcsRUFBRUEsR0FERztBQUVSQyxhQUFHLEVBQUVBLEdBRkc7QUFHUkMsZUFBSyxFQUFFbEksTUFBTSxDQUFDa0k7QUFITixTQUFaO0FBS0g7O0FBQ0QsYUFBT0wsU0FBUDtBQUNIOzs7d0NBRUQ7QUFDSSxVQUFNN0gsTUFBTSxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsTUFBMUI7QUFDQSxVQUFJOEcsT0FBTyxHQUFHOUcsTUFBTSxDQUFDbUksT0FBckI7QUFDQSxVQUFJcEIsTUFBTSxHQUFJLEtBQUtxQix3QkFBTCxDQUE4QnRCLE9BQTlCLENBQWQ7QUFFQSxVQUFJdUIsTUFBTSxHQUFHLGVBQWVySSxNQUFNLENBQUNTLEVBQW5DO0FBQ0EsVUFBSWtCLEdBQUcsR0FBRyxJQUFJcUYsRUFBRSxDQUFDc0IsR0FBUCxDQUFXO0FBQ2pCQyxjQUFNLEVBQUUsQ0FBQ3hCLE1BQUQsQ0FEUztBQUVqQm5HLGNBQU0sRUFBRXlILE1BRlM7QUFHakJHLFlBQUksRUFBRSxJQUFJeEIsRUFBRSxDQUFDeUIsSUFBUCxDQUFZO0FBQ2RDLGdCQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURNO0FBRWRDLG9CQUFVLEVBQUUsV0FGRTtBQUdkQyxjQUFJLEVBQUU7QUFIUSxTQUFaLENBSFc7QUFRakJuSSxVQUFFLEVBQUUscUJBQXFCVCxNQUFNLENBQUNTO0FBUmYsT0FBWCxDQUFWO0FBVUFrQixTQUFHLENBQUNrSCxPQUFKLEdBQWNDLEVBQWQsQ0FBaUIsZ0JBQWpCLEVBQW1DQyxnQkFBbkM7O0FBRUEsZUFBU0EsZ0JBQVQsR0FBMkI7QUFDdkJwSCxXQUFHLENBQUNxSCxhQUFKLENBQWtCLFdBQWxCO0FBQ0EsWUFBSVIsSUFBSSxHQUFHN0csR0FBRyxDQUFDa0gsT0FBSixFQUFYO0FBQ0FMLFlBQUksQ0FBQ1MsRUFBTCxDQUFRLGdCQUFSLEVBQTBCRixnQkFBMUI7QUFDQXBILFdBQUcsQ0FBQ21ILEVBQUosQ0FBTyxTQUFQLEVBQWtCLFlBQVc7QUFDekJOLGNBQUksQ0FBQ00sRUFBTCxDQUFRLGdCQUFSLEVBQTBCQyxnQkFBMUI7QUFDSCxTQUZEO0FBR0g7O0FBRURwSCxTQUFHLENBQUNtSCxFQUFKLENBQU8sV0FBUCxFQUFvQixLQUFLSSxhQUF6QjtBQUNBdkgsU0FBRyxDQUFDbUgsRUFBSixDQUFPLFNBQVAsRUFBa0IsS0FBS0ssY0FBdkI7QUFDQXZHLG9CQUFjLENBQUN5RixNQUFELENBQWQsR0FBeUIxRyxHQUF6Qjs7QUFFQSxVQUFJQyxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDaEJBLGVBQU8sR0FBRyxDQUFDLENBQUMsZUFBRixFQUFtQixjQUFuQixFQUFtQyxDQUFDLGdCQUFwQyxFQUFzRCxjQUF0RCxDQUFWO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBSSxPQUFPQSxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQzdCQSxpQkFBTyxHQUFHYixDQUFDLENBQUMrRyxTQUFGLENBQVlsRyxPQUFaLENBQVY7QUFDSDtBQUNKOztBQUNELFVBQUlBLE9BQUosRUFBYTtBQUNUZ0Isc0JBQWMsQ0FBQyxlQUFlNUMsTUFBTSxDQUFDUyxFQUF2QixDQUFkLENBQXlDb0ksT0FBekMsR0FBbURPLEdBQW5ELENBQ0lwQyxFQUFFLENBQUNxQyxJQUFILENBQVFDLFNBQVIsQ0FBa0IsQ0FBQzFILE9BQU8sQ0FBQyxDQUFELENBQVIsRUFBYUEsT0FBTyxDQUFDLENBQUQsQ0FBcEIsQ0FBbEIsRUFBNEMsV0FBNUMsRUFBeUQsV0FBekQsRUFBc0UySCxNQUF0RSxDQUE2RXZDLEVBQUUsQ0FBQ3FDLElBQUgsQ0FBUUMsU0FBUixDQUFrQixDQUFDMUgsT0FBTyxDQUFDLENBQUQsQ0FBUixFQUFhQSxPQUFPLENBQUMsQ0FBRCxDQUFwQixDQUFsQixFQUE0QyxXQUE1QyxFQUF5RCxXQUF6RCxDQUE3RSxDQURKLEVBRUlnQixjQUFjLENBQUMsZUFBZTVDLE1BQU0sQ0FBQ1MsRUFBdkIsQ0FBZCxDQUF5QytJLE9BQXpDLEVBRko7QUFJSCxPQUxELE1BS087QUFDSDVHLHNCQUFjLENBQUMsZUFBZTVDLE1BQU0sQ0FBQ1MsRUFBdkIsQ0FBZCxDQUF5Q29JLE9BQXpDLEdBQW1ETyxHQUFuRCxDQUNJeEgsT0FESixFQUVJZ0IsY0FBYyxDQUFDLGVBQWU1QyxNQUFNLENBQUNTLEVBQXZCLENBQWQsQ0FBeUMrSSxPQUF6QyxFQUZKO0FBSUg7O0FBRUQsVUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsVUFBSWpDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFVBQUlrQyxRQUFRLEdBQUcsRUFBZjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsVUFBSW5DLEdBQUcsR0FBRyxFQUFWO0FBQ0EsVUFBSW9DLGVBQWUsR0FBRyxJQUF0QjtBQUNBLFVBQUkzQixLQUFLLEdBQUcsRUFBWjs7QUFDQSxVQUFJbEksTUFBTSxDQUFDMkYsVUFBUCxDQUFrQnRELE1BQWxCLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2hDNkYsYUFBSyxHQUFHbEksTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixDQUFSO0FBQ0g7O0FBQ0QzRixZQUFNLENBQUNrSSxLQUFQLEdBQWVBLEtBQWY7QUFDQSxVQUFJRixHQUFHLEdBQUcsRUFBVjtBQUNBLFVBQUlDLEdBQUcsR0FBRyxLQUFWO0FBQ0EsVUFBSUosU0FBSjtBQUVBOztBQUNBLFVBQUc3SCxNQUFNLENBQUN3RixtQkFBUCxJQUErQnhGLE1BQU0sQ0FBQ3dGLG1CQUFQLElBQThCLElBQWhFLEVBQXFFO0FBRWpFO0FBQ0E7QUFDQTtBQUNBLFlBQUlzRSxVQUFVLEdBQUc5SixNQUFNLENBQUN3RixtQkFBUCxDQUEyQixDQUEzQixDQUFqQjtBQUNBLFlBQUl1RSxXQUFXLEdBQUcvSixNQUFNLENBQUN3RixtQkFBUCxDQUEyQixDQUEzQixDQUFsQjtBQUNBZ0Msc0JBQWMsR0FBR3NDLFVBQVUsQ0FBQ0UsY0FBNUI7QUFDQUosc0JBQWMsR0FBR3BDLGNBQWMsS0FBSyxxQkFBbkIsR0FBMkMsTUFBM0MsR0FBb0RBLGNBQWMsS0FBSyxvQkFBbkIsR0FBMEMsS0FBMUMsR0FBa0RBLGNBQWMsS0FBSyxxQkFBbkIsR0FBMkMsTUFBM0MsR0FBb0RBLGNBQWMsS0FBSyxxQkFBbkIsR0FBMkMsTUFBM0MsR0FBb0RBLGNBQWMsS0FBSyxxQkFBbkIsR0FBMkMsTUFBM0MsR0FBb0QsRUFBblI7QUFDQUEsc0JBQWMsR0FBR0EsY0FBYyxLQUFLLHFCQUFuQixHQUEyQyxFQUEzQyxHQUFnREEsY0FBYyxLQUFLLG9CQUFuQixHQUEwQyxFQUExQyxHQUErQ0EsY0FBYyxLQUFLLHFCQUFuQixHQUEyQyxFQUEzQyxHQUFnREEsY0FBYyxLQUFLLHFCQUFuQixHQUEyQyxFQUEzQyxHQUFnREEsY0FBYyxLQUFLLHFCQUFuQixHQUEyQyxFQUEzQyxHQUFnREEsY0FBaFE7QUFDQWtDLGdCQUFRLEdBQUdJLFVBQVUsQ0FBQ0csU0FBdEI7QUFDQU4sY0FBTSxHQUFHRyxVQUFVLENBQUNJLE9BQXBCO0FBRUEsWUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0FBLG1CQUFXLENBQUN6QyxVQUFaLEdBQXlCb0MsVUFBVSxDQUFDcEMsVUFBcEM7QUFDQXlDLG1CQUFXLENBQUN4RSxVQUFaLEdBQXlCLEVBQXpCO0FBQ0F3RSxtQkFBVyxDQUFDeEUsVUFBWixDQUF1QnlFLElBQXZCLENBQTRCNUMsY0FBNUI7QUFDQUMsV0FBRyxHQUFHLEtBQUs0QyxhQUFMLENBQW1CRixXQUFuQixFQUFnQzNDLGNBQWhDLENBQU47QUFDQTJDLG1CQUFXLENBQUN0QyxTQUFaLEdBQXdCaUMsVUFBVSxDQUFDakMsU0FBbkM7QUFDQXNDLG1CQUFXLENBQUNuQyxHQUFaLEdBQWtCOEIsVUFBVSxDQUFDOUIsR0FBWCxJQUFrQixJQUFsQixHQUF3QjhCLFVBQVUsQ0FBQzlCLEdBQW5DLEdBQXdDLEVBQTFEO0FBQ0FtQyxtQkFBVyxDQUFDbEMsR0FBWixHQUFrQjZCLFVBQVUsQ0FBQzdCLEdBQVgsSUFBa0IsSUFBbEIsR0FBd0I2QixVQUFVLENBQUM3QixHQUFuQyxHQUF3QyxFQUExRDtBQUNBa0MsbUJBQVcsQ0FBQ0csSUFBWixHQUFtQlIsVUFBVSxDQUFDUSxJQUFYLElBQW1CLElBQW5CLEdBQXlCUixVQUFVLENBQUNRLElBQXBDLEdBQTBDLEVBQTdEO0FBQ0FiLGtCQUFVLENBQUM1QixTQUFYLEdBQXVCLEtBQUswQyxjQUFMLENBQW9CSixXQUFwQixDQUF2Qjs7QUFFQSxZQUFHVixVQUFVLENBQUM1QixTQUFYLENBQXFCMkMsYUFBeEIsRUFBdUM7QUFDbkNmLG9CQUFVLENBQUN2QixLQUFYLEdBQW1CdUIsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkssS0FBeEM7QUFDQXVCLG9CQUFVLENBQUN6QixHQUFYLEdBQWlCeUIsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkcsR0FBdEM7QUFDQXlCLG9CQUFVLENBQUN4QixHQUFYLEdBQWlCd0IsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkksR0FBdEM7QUFDQXdCLG9CQUFVLENBQUNlLGFBQVgsR0FBMkJDLFFBQVEsQ0FBQ2hCLFVBQVUsQ0FBQzVCLFNBQVgsQ0FBcUIyQyxhQUF0QixDQUFuQztBQUNILFNBN0JnRSxDQWlDakU7OztBQUNBWCx1QkFBZSxHQUFHLEVBQWxCO0FBQ0FBLHVCQUFlLENBQUNyQyxjQUFoQixHQUFpQ3VDLFdBQVcsQ0FBQ0MsY0FBN0M7QUFDQUgsdUJBQWUsQ0FBQ3pKLEtBQWhCLEdBQXdCeUosZUFBZSxDQUFDckMsY0FBaEIsS0FBbUMscUJBQW5DLEdBQTJELE1BQTNELEdBQW9FcUMsZUFBZSxDQUFDckMsY0FBaEIsS0FBbUMsb0JBQW5DLEdBQTBELEtBQTFELEdBQWtFcUMsZUFBZSxDQUFDckMsY0FBaEIsS0FBbUMscUJBQW5DLEdBQTJELE1BQTNELEdBQW9FcUMsZUFBZSxDQUFDckMsY0FBaEIsS0FBbUMscUJBQW5DLEdBQTJELE1BQTNELEdBQW9FcUMsZUFBZSxDQUFDckMsY0FBaEIsS0FBbUMscUJBQW5DLEdBQTJELE1BQTNELEdBQW9FLEVBQTFXO0FBQ0FxQyx1QkFBZSxDQUFDckMsY0FBaEIsR0FBaUNxQyxlQUFlLENBQUNyQyxjQUFoQixLQUFtQyxxQkFBbkMsR0FBMkQsRUFBM0QsR0FBZ0VxQyxlQUFlLENBQUNyQyxjQUFoQixLQUFtQyxvQkFBbkMsR0FBMEQsRUFBMUQsR0FBK0RxQyxlQUFlLENBQUNyQyxjQUFoQixLQUFtQyxxQkFBbkMsR0FBMkQsRUFBM0QsR0FBZ0VxQyxlQUFlLENBQUNyQyxjQUFoQixLQUFtQyxxQkFBbkMsR0FBMkQsRUFBM0QsR0FBZ0VxQyxlQUFlLENBQUNyQyxjQUFoQixLQUFtQyxxQkFBbkMsR0FBMkQsRUFBM0QsR0FBZ0VxQyxlQUFlLENBQUNyQyxjQUFoWDtBQUNBcUMsdUJBQWUsQ0FBQ0gsUUFBaEIsR0FBMkJLLFdBQVcsQ0FBQ0UsU0FBdkM7QUFDQUosdUJBQWUsQ0FBQ0YsTUFBaEIsR0FBeUJJLFdBQVcsQ0FBQ0csT0FBckM7QUFDQyxZQUFJUSxZQUFZLEdBQUcsRUFBbkI7QUFDREEsb0JBQVksQ0FBQ2hELFVBQWIsR0FBMEJxQyxXQUFXLENBQUNyQyxVQUF0QztBQUNBZ0Qsb0JBQVksQ0FBQy9FLFVBQWIsR0FBMEIsRUFBMUI7QUFDQStFLG9CQUFZLENBQUMvRSxVQUFiLENBQXdCeUUsSUFBeEIsQ0FBNkJQLGVBQWUsQ0FBQ3JDLGNBQTdDO0FBRUFxQyx1QkFBZSxDQUFDcEMsR0FBaEIsR0FBc0IsS0FBSzRDLGFBQUwsQ0FBbUJLLFlBQW5CLEVBQWlDYixlQUFlLENBQUNyQyxjQUFqRCxDQUF0QjtBQUVBa0Qsb0JBQVksQ0FBQzdDLFNBQWIsR0FBeUJrQyxXQUFXLENBQUNsQyxTQUFyQztBQUNBNkMsb0JBQVksQ0FBQzFDLEdBQWIsR0FBbUIrQixXQUFXLENBQUMvQixHQUFaLElBQW1CLElBQW5CLEdBQXlCK0IsV0FBVyxDQUFDL0IsR0FBckMsR0FBMEMsRUFBN0Q7QUFDQTBDLG9CQUFZLENBQUN6QyxHQUFiLEdBQW1COEIsV0FBVyxDQUFDOUIsR0FBWixJQUFtQixJQUFuQixHQUF5QjhCLFdBQVcsQ0FBQzlCLEdBQXJDLEdBQTBDLEVBQTdEO0FBQ0F5QyxvQkFBWSxDQUFDSixJQUFiLEdBQW9CUCxXQUFXLENBQUNPLElBQVosSUFBb0IsSUFBcEIsR0FBMEJQLFdBQVcsQ0FBQ08sSUFBdEMsR0FBNEMsRUFBaEU7O0FBQ0EsWUFBR0ksWUFBWSxDQUFDN0MsU0FBYixJQUEwQjZDLFlBQVksQ0FBQzdDLFNBQWIsQ0FBdUIyQyxhQUF2QixJQUF3QyxJQUFyRSxFQUEyRTtBQUN2RVgseUJBQWUsQ0FBQzNCLEtBQWhCLEdBQXdCd0MsWUFBWSxDQUFDN0MsU0FBYixDQUF1QkssS0FBL0M7QUFDQTJCLHlCQUFlLENBQUM3QixHQUFoQixHQUFzQjBDLFlBQVksQ0FBQzdDLFNBQWIsQ0FBdUJHLEdBQTdDO0FBQ0E2Qix5QkFBZSxDQUFDNUIsR0FBaEIsR0FBc0J5QyxZQUFZLENBQUM3QyxTQUFiLENBQXVCSSxHQUE3QztBQUNBNEIseUJBQWUsQ0FBQ1csYUFBaEIsR0FBZ0NDLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDN0MsU0FBYixDQUF1QjJDLGFBQXhCLENBQXhDO0FBQ0g7O0FBSURYLHVCQUFlLENBQUNoQyxTQUFoQixHQUE0QixLQUFLMEMsY0FBTCxDQUFvQkcsWUFBcEIsQ0FBNUI7QUFHSCxPQS9ERCxNQWdFSztBQUVEO0FBRUFsRCxzQkFBYyxHQUFHeEgsTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixDQUFqQjtBQUNBK0QsZ0JBQVEsR0FBRzFKLE1BQU0sQ0FBQzJGLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBWDtBQUNBZ0UsY0FBTSxHQUFHM0osTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixDQUFUO0FBQ0FpRSxzQkFBYyxHQUFHNUosTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixNQUF5QixxQkFBekIsR0FBaUQsTUFBakQsR0FBMEQzRixNQUFNLENBQUMyRixVQUFQLENBQWtCLENBQWxCLE1BQXlCLG9CQUF6QixHQUFnRCxLQUFoRCxHQUF3RDNGLE1BQU0sQ0FBQzJGLFVBQVAsQ0FBa0IsQ0FBbEIsTUFBeUIscUJBQXpCLEdBQWlELE1BQWpELEdBQTBEM0YsTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixNQUF5QixxQkFBekIsR0FBaUQsTUFBakQsR0FBMEQzRixNQUFNLENBQUMyRixVQUFQLENBQWtCLENBQWxCLE1BQXlCLHFCQUF6QixHQUFpRCxNQUFqRCxHQUEwRCxFQUFqVDtBQUVBOEIsV0FBRyxHQUFHLEtBQUs0QyxhQUFMLENBQW1CckssTUFBbkIsRUFBMkJ3SCxjQUEzQixDQUFOO0FBQ0FpQyxrQkFBVSxDQUFDNUIsU0FBWCxHQUF1QixLQUFLMEMsY0FBTCxDQUFvQnZLLE1BQXBCLENBQXZCOztBQUVBLFlBQUd5SixVQUFVLENBQUM1QixTQUFYLENBQXFCMkMsYUFBeEIsRUFBdUM7QUFDbkNmLG9CQUFVLENBQUN2QixLQUFYLEdBQW1CdUIsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkssS0FBeEM7QUFDQXVCLG9CQUFVLENBQUN6QixHQUFYLEdBQWlCeUIsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkcsR0FBdEM7QUFDQXlCLG9CQUFVLENBQUN4QixHQUFYLEdBQWlCd0IsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkksR0FBdEM7QUFDQXdCLG9CQUFVLENBQUNlLGFBQVgsR0FBMkJDLFFBQVEsQ0FBQ2hCLFVBQVUsQ0FBQzVCLFNBQVgsQ0FBcUIyQyxhQUF0QixDQUFuQztBQUNIOztBQUNELFlBQUd4SyxNQUFNLENBQUN5RixVQUFWLEVBQ0E7QUFDSWdFLG9CQUFVLENBQUNrQixTQUFYLEdBQXVCM0ssTUFBTSxDQUFDeUYsVUFBOUI7QUFDSDtBQUNKOztBQUVEZ0UsZ0JBQVUsQ0FBQ2pDLGNBQVgsR0FBNEJBLGNBQTVCO0FBQ0FpQyxnQkFBVSxDQUFDQyxRQUFYLEdBQXNCQSxRQUF0QjtBQUNBRCxnQkFBVSxDQUFDRSxNQUFYLEdBQW1CQSxNQUFuQjtBQUNBRixnQkFBVSxDQUFDbUIsUUFBWCxHQUFxQjdKLENBQUMsQ0FBQytHLFNBQUYsQ0FBWStDLFdBQVosQ0FBckI7QUFDQXBCLGdCQUFVLENBQUNySixLQUFYLEdBQWtCd0osY0FBbEI7QUFHQTdJLE9BQUMsQ0FBQytKLElBQUYsQ0FBTztBQUNIckQsV0FBRyxFQUFFQSxHQURGO0FBRUh4SCxZQUFJLEVBQUUsTUFGSDtBQUdIOEssYUFBSyxFQUFFLElBSEo7QUFJSEMsZ0JBQVEsRUFBRWhMLE1BQU0sQ0FBQ1MsRUFKZDtBQUtIZ0csaUJBQVMsRUFBRXpHLE1BQU0sQ0FBQ3lHLFNBTGY7QUFNSG9ELHVCQUFlLEVBQUVvQixJQUFJLENBQUNDLFNBQUwsQ0FBZXJCLGVBQWYsQ0FOZDtBQU9Ic0IsaUJBQVMsRUFBRW5MLE1BQU0sQ0FBQ21MLFNBUGY7QUFRSEMsZUFBTyxFQUFFcEwsTUFBTSxDQUFDb0wsT0FSYjtBQVNIQyxtQkFBVyxFQUFFLElBVFY7QUFVSEMsbUJBQVcsRUFBRSxrQkFWVjtBQVdINUosWUFBSSxFQUFFdUosSUFBSSxDQUFDQyxTQUFMLENBQWV6QixVQUFmLENBWEg7QUFZSEEsa0JBQVUsRUFBRXdCLElBQUksQ0FBQ0MsU0FBTCxDQUFlekIsVUFBZjtBQVpULE9BQVAsRUFhRzhCLElBYkgsQ0FhUSxVQUFVQyxLQUFWLEVBQWlCQyxVQUFqQixFQUE2QkMsV0FBN0IsRUFBMEM7QUFDOUNDLGVBQU8sQ0FBQ0MsSUFBUixDQUFhSixLQUFLLEdBQUdDLFVBQVIsR0FBcUJDLFdBQWxDO0FBQ0gsT0FmRCxFQWVHRyxJQWZILENBZVEsVUFBVW5LLElBQVYsRUFBZ0JvSyxXQUFoQixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDekMsWUFBSXJLLElBQUksQ0FBQ3NLLE1BQVQsRUFBaUI7QUFDYkwsaUJBQU8sQ0FBQ00sSUFBUixDQUFhdkssSUFBSSxDQUFDc0ssTUFBbEI7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFJdEssSUFBSSxDQUFDd0ssY0FBTCxDQUFvQixPQUFwQixDQUFKLEVBQWtDO0FBQzlCLGdCQUFJQyxLQUFLLEdBQUd6SyxJQUFJLENBQUMwSyxLQUFqQjtBQUNBLGdCQUFJQyxLQUFLLEdBQUczSyxJQUFJLENBQUMySyxLQUFqQjtBQUNBLGdCQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBLGdCQUFJN0YsU0FBUyxHQUFHNkYsS0FBSyxDQUFDN0YsU0FBdEI7QUFDQSxnQkFBSThGLFNBQVMsR0FBR0QsS0FBSyxDQUFDekMsZUFBdEI7QUFDQTJDLHlCQUFhLENBQUNMLEtBQUQsRUFBUUUsS0FBUixFQUFlLGVBQWVDLEtBQUssQ0FBQ3RCLFFBQXBDLENBQWI7O0FBQ0EsZ0JBQUd2RSxTQUFILEVBQ0E7QUFDSSxrQkFBSWdHLFlBQVksR0FBR3hCLElBQUksQ0FBQ3lCLEtBQUwsQ0FBV0osS0FBSyxDQUFDN0MsVUFBakIsQ0FBbkI7QUFDQWdELDBCQUFZLENBQUMvQyxRQUFiLEdBQXdCNEMsS0FBSyxDQUFDbkIsU0FBOUI7QUFDQXNCLDBCQUFZLENBQUM5QyxNQUFiLEdBQXNCMkMsS0FBSyxDQUFDbEIsT0FBNUI7QUFDQXJLLGVBQUMsQ0FBQytKLElBQUYsQ0FBTztBQUNIckQsbUJBQUcsRUFBRUEsR0FERjtBQUVIeEgsb0JBQUksRUFBRSxNQUZIO0FBR0g4SyxxQkFBSyxFQUFFLElBSEo7QUFJSEMsd0JBQVEsRUFBRXNCLEtBQUssQ0FBQ3RCLFFBSmI7QUFLSEssMkJBQVcsRUFBRSxJQUxWO0FBTUhDLDJCQUFXLEVBQUUsa0JBTlY7QUFPSDVKLG9CQUFJLEVBQUV1SixJQUFJLENBQUNDLFNBQUwsQ0FBZXVCLFlBQWY7QUFQSCxlQUFQLEVBUUdsQixJQVJILENBUVEsVUFBVUMsS0FBVixFQUFpQkMsVUFBakIsRUFBNkJDLFdBQTdCLEVBQTBDO0FBQzlDQyx1QkFBTyxDQUFDQyxJQUFSLENBQWFKLEtBQUssR0FBR0MsVUFBUixHQUFxQkMsV0FBbEM7QUFDSCxlQVZELEVBVUdHLElBVkgsQ0FVUSxVQUFVbkssSUFBVixFQUFnQm9LLFdBQWhCLEVBQTZCQyxNQUE3QixFQUFxQztBQUN6QyxvQkFBSXJLLElBQUksQ0FBQ3NLLE1BQVQsRUFBaUI7QUFDYkwseUJBQU8sQ0FBQ00sSUFBUixDQUFhdkssSUFBSSxDQUFDc0ssTUFBbEI7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsc0JBQUl0SyxJQUFJLENBQUN3SyxjQUFMLENBQW9CLE9BQXBCLENBQUosRUFBa0M7QUFDOUIsd0JBQUlDLEtBQUssR0FBR3pLLElBQUksQ0FBQzBLLEtBQWpCO0FBQ0Esd0JBQUlDLEtBQUssR0FBRzNLLElBQUksQ0FBQzJLLEtBQWpCO0FBQ0Esd0JBQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0Esd0JBQUk3RixTQUFTLEdBQUc2RixLQUFLLENBQUM3RixTQUF0QjtBQUNBa0csZ0NBQVksQ0FBQ1IsS0FBRCxFQUFRRSxLQUFSLEVBQWUsZUFBZUMsS0FBSyxDQUFDdEIsUUFBcEMsQ0FBWjtBQUNILG1CQU5ELE1BTU87QUFDSFcsMkJBQU8sQ0FBQ0MsSUFBUixDQUFhLHFCQUFiO0FBQ0g7QUFDSjtBQUNKLGVBeEJEO0FBeUJILGFBOUJELE1BK0JLLElBQUdXLFNBQVMsSUFBSUEsU0FBUyxJQUFJLElBQTdCLEVBQWtDO0FBQ25DLGtCQUFJSyxhQUFKOztBQUNBLGtCQUFHO0FBQ0NBLDZCQUFhLEdBQUczQixJQUFJLENBQUN5QixLQUFMLENBQVdILFNBQVgsQ0FBaEI7QUFDSCxlQUZELENBR0EsT0FBTXhFLENBQU4sRUFBUTtBQUNKNkUsNkJBQWEsR0FBR0wsU0FBaEI7QUFDSDs7QUFDRCxrQkFBR0ssYUFBYSxJQUFJLElBQXBCLEVBQ0E7QUFDQSxvQkFBSUgsWUFBWSxHQUFHRyxhQUFuQixDQURBLENBRUE7QUFDQTs7QUFFQTdMLGlCQUFDLENBQUMrSixJQUFGLENBQU87QUFDSHJELHFCQUFHLEVBQUVtRixhQUFhLENBQUNuRixHQURoQjtBQUVIeEgsc0JBQUksRUFBRSxNQUZIO0FBR0g4Syx1QkFBSyxFQUFFLElBSEo7QUFJSEMsMEJBQVEsRUFBRXNCLEtBQUssQ0FBQ3RCLFFBSmI7QUFLSEssNkJBQVcsRUFBRSxJQUxWO0FBTUhDLDZCQUFXLEVBQUUsa0JBTlY7QUFPSDVKLHNCQUFJLEVBQUV1SixJQUFJLENBQUNDLFNBQUwsQ0FBZXVCLFlBQWY7QUFQSCxpQkFBUCxFQVFHbEIsSUFSSCxDQVFRLFVBQVVDLEtBQVYsRUFBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QixFQUEwQztBQUM5Q0MseUJBQU8sQ0FBQ0MsSUFBUixDQUFhSixLQUFLLEdBQUdDLFVBQVIsR0FBcUJDLFdBQWxDO0FBQ0gsaUJBVkQsRUFVR0csSUFWSCxDQVVRLFVBQVVuSyxJQUFWLEVBQWdCb0ssV0FBaEIsRUFBNkJDLE1BQTdCLEVBQXFDO0FBQ3pDLHNCQUFJckssSUFBSSxDQUFDc0ssTUFBVCxFQUFpQjtBQUNiTCwyQkFBTyxDQUFDTSxJQUFSLENBQWF2SyxJQUFJLENBQUNzSyxNQUFsQjtBQUNILG1CQUZELE1BRU87QUFFSCx3QkFBSXRLLElBQUksQ0FBQ3dLLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBSixFQUFrQztBQUM5QiwwQkFBSUMsS0FBSyxHQUFHekssSUFBSSxDQUFDMEssS0FBakI7QUFDQSwwQkFBSUMsS0FBSyxHQUFHM0ssSUFBSSxDQUFDMkssS0FBakI7QUFDQSwwQkFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSwwQkFBSTdGLFNBQVMsR0FBRzZGLEtBQUssQ0FBQzdGLFNBQXRCO0FBQ0FrRyxrQ0FBWSxDQUFDUixLQUFELEVBQVFFLEtBQVIsRUFBZSxlQUFlQyxLQUFLLENBQUN0QixRQUFwQyxDQUFaO0FBQ0gscUJBTkQsTUFNTztBQUNIVyw2QkFBTyxDQUFDQyxJQUFSLENBQWEscUJBQWI7QUFDSDtBQUNKO0FBQ0osaUJBekJEO0FBMkJDO0FBQ0o7QUFDSixXQWpGRCxNQWlGTztBQUNIRCxtQkFBTyxDQUFDQyxJQUFSLENBQWEscUJBQWI7QUFDSDtBQUNKO0FBQ0osT0F4R0Q7QUEwR0g7OztrQ0FDYTdELEMsRUFDZDtBQUNJLFVBQUlRLE1BQU0sR0FBR1IsQ0FBQyxDQUFDbkgsTUFBRixDQUFTaU0sU0FBVCxHQUFxQkMsUUFBckIsRUFBYjtBQUNBdkUsWUFBTSxDQUFDd0UsT0FBUCxDQUFlLFVBQVNDLEdBQVQsRUFBYTtBQUN4QixZQUFHQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxJQUFSLEtBQWlCRCxHQUFHLENBQUNDLEdBQUosQ0FBUSxJQUFSLEVBQWM1TSxPQUFkLENBQXNCLFFBQXRCLEtBQWtDLENBQXRELEVBQXdEO0FBQ3BEMk0sYUFBRyxDQUFDRSxVQUFKLENBQWUsS0FBZjtBQUNIO0FBQ0osT0FKRDtBQUtIOzs7bUNBQ2NuRixDLEVBQ2Y7QUFDSSxVQUFHbEksVUFBVSxDQUFDa0ksQ0FBQyxDQUFDbkgsTUFBRixDQUFTcU0sR0FBVCxDQUFhLFFBQWIsQ0FBRCxDQUFiLEVBQXNDO0FBQ2xDOUssY0FBTSxDQUFDZ0wsWUFBUCxDQUFvQnROLFVBQVUsQ0FBQ2tJLENBQUMsQ0FBQ25ILE1BQUYsQ0FBU3FNLEdBQVQsQ0FBYSxRQUFiLENBQUQsQ0FBOUI7QUFDQSxlQUFPcE4sVUFBVSxDQUFDa0ksQ0FBQyxDQUFDbkgsTUFBRixDQUFTcU0sR0FBVCxDQUFhLFFBQWIsQ0FBRCxDQUFqQjtBQUNIOztBQUNEcE4sZ0JBQVUsQ0FBQ2tJLENBQUMsQ0FBQ25ILE1BQUYsQ0FBU3FNLEdBQVQsQ0FBYSxRQUFiLENBQUQsQ0FBVixHQUFxQzlLLE1BQU0sQ0FBQ2lMLFVBQVAsQ0FBa0IsWUFBVTtBQUM3RCxZQUFJN0UsTUFBTSxHQUFHUixDQUFDLENBQUNuSCxNQUFGLENBQVNpTSxTQUFULEdBQXFCQyxRQUFyQixFQUFiO0FBQ0F2RSxjQUFNLENBQUN3RSxPQUFQLENBQWUsVUFBU0MsR0FBVCxFQUFhO0FBQ3hCLGNBQUdBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLElBQVIsS0FBaUJELEdBQUcsQ0FBQ0MsR0FBSixDQUFRLElBQVIsRUFBYzVNLE9BQWQsQ0FBc0IsUUFBdEIsS0FBa0MsQ0FBdEQsRUFBd0Q7QUFDcEQyTSxlQUFHLENBQUNFLFVBQUosQ0FBZSxJQUFmO0FBQ0g7QUFDSixTQUpEO0FBS0gsT0FQb0MsRUFPbEMsSUFQa0MsQ0FBckM7QUFRSDs7OztFQS9abUJqTCw0Q0FBSyxDQUFDQyxTOztJQWtheEJtTCxXOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsVUFBTXJOLE1BQU0sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE1BQTFCO0FBQ0EsYUFBTztBQUFLLFVBQUUsRUFBRSxpQkFBaUJBLE1BQU0sQ0FBQ1MsRUFBakM7QUFBcUMsaUJBQVMsRUFBQztBQUEvQyxTQUNIO0FBQUssVUFBRSxFQUFFLG9CQUFvQlQsTUFBTSxDQUFDUyxFQUFwQztBQUF3QyxpQkFBUyxFQUFDO0FBQWxELFFBREcsRUFHSDtBQUFJLFVBQUUsRUFBRSxpQkFBaUJULE1BQU0sQ0FBQ1M7QUFBaEMsUUFIRyxDQUFQO0FBS0g7Ozt3Q0FFRDtBQUNJLFVBQU1ULE1BQU0sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE1BQTFCO0FBQ0EsVUFBSXdILGNBQWMsR0FBR3hILE1BQU0sQ0FBQzJGLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBckI7QUFDQSxVQUFJMkgsU0FBUyxHQUFHdE4sTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixDQUFoQjtBQUNBLFVBQUk0SCxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsVUFBSS9GLEdBQUcsR0FBRyxFQUFWOztBQUNBLFVBQUdELGNBQWMsQ0FBQ0ksSUFBZixHQUFzQnZGLE1BQXRCLEdBQStCLENBQWxDLEVBQ0E7QUFDSW9GLFdBQUcsR0FBRywyQ0FBTjtBQUNILE9BSEQsTUFJSTtBQUNBQSxXQUFHLEdBQUcsNENBQU47QUFDSDs7QUFDRDFHLE9BQUMsQ0FBQytKLElBQUYsQ0FBTztBQUNIckQsV0FBRyxFQUFFQSxHQURGO0FBRUh4SCxZQUFJLEVBQUUsTUFGSDtBQUdIOEssYUFBSyxFQUFFLElBSEo7QUFJSEMsZ0JBQVEsRUFBRWhMLE1BQU0sQ0FBQ1MsRUFKZDtBQUtINEssbUJBQVcsRUFBRSxJQUxWO0FBTUhDLG1CQUFXLEVBQUUsa0JBTlY7QUFPSDVKLFlBQUksRUFBRXVKLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCdUMsa0NBQXdCLEVBQUV6TixNQUFNLENBQUMyRixVQUFQLENBQWtCLENBQWxCLENBRFQ7QUFFakIrSCxpQkFBTyxFQUFFM00sQ0FBQyxDQUFDK0csU0FBRixDQUFZK0MsV0FBWixDQUZRO0FBR2pCeUMsbUJBQVMsRUFBRXROLE1BQU0sQ0FBQzJGLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FITTtBQUlqQmdJLDRCQUFrQixFQUFFM04sTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixFQUFxQmlDLElBQXJCLEdBQTRCdkYsTUFBNUIsSUFBc0MsRUFBdEMsR0FBMkNyQyxNQUFNLENBQUMyRixVQUFQLENBQWtCLENBQWxCLEVBQXFCaUMsSUFBckIsRUFBM0MsR0FBeUUsWUFKNUU7QUFLakJnRywwQkFBZ0IsRUFBRTVOLE1BQU0sQ0FBQzJGLFVBQVAsQ0FBa0IsQ0FBbEIsRUFBcUJpQyxJQUFyQixHQUE0QnZGLE1BQTVCLElBQXNDLEVBQXRDLEdBQTJDckMsTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixDQUFsQixFQUFxQmlDLElBQXJCLEVBQTNDLEdBQTBFMkYsSUFBSSxDQUFDTSxRQUFMO0FBTDNFLFNBQWY7QUFQSCxPQUFQLEVBY0d0QyxJQWRILENBY1EsVUFBVUMsS0FBVixFQUFpQkMsVUFBakIsRUFBNkJDLFdBQTdCLEVBQTBDO0FBQzlDQyxlQUFPLENBQUNDLElBQVIsQ0FBYUosS0FBSyxHQUFHQyxVQUFSLEdBQXFCQyxXQUFsQztBQUNILE9BaEJELEVBZ0JHRyxJQWhCSCxDQWdCUSxVQUFVbkssSUFBVixFQUFnQm9LLFdBQWhCLEVBQTZCQyxNQUE3QixFQUFxQztBQUN6QyxZQUFJckssSUFBSSxDQUFDc0ssTUFBVCxFQUFpQjtBQUNiTCxpQkFBTyxDQUFDQyxJQUFSLENBQWFsSyxJQUFJLENBQUNzSyxNQUFsQjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUl0SyxJQUFJLENBQUN3SyxjQUFMLENBQW9CLFlBQXBCLENBQUosRUFBdUM7QUFFbkMsZ0JBQUk0QixjQUFjLEdBQUcsRUFBckI7QUFDQS9NLGFBQUMsQ0FBQ2dOLElBQUYsQ0FBT3JNLElBQUksQ0FBQ3NNLFVBQVosRUFBd0IsVUFBVUMsTUFBVixFQUFrQnBOLEtBQWxCLEVBQXlCO0FBQzdDLGtCQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsSUFBakIsRUFBdUI7QUFDbkJpTiw4QkFBYyxDQUFDMUQsSUFBZixDQUFvQixDQUFDdkosS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQixDQUFwQjtBQUNIO0FBQ0osYUFKRDtBQUtBaU4sMEJBQWMsR0FBR0EsY0FBYyxDQUFDSSxJQUFmLENBQW9CQyxRQUFwQixDQUFqQjtBQUNBLGdCQUFJN0IsS0FBSyxHQUFHLElBQVo7QUFDQTlKLDRCQUFnQixDQUFDLGlCQUFpQjhKLEtBQUssQ0FBQ3RCLFFBQXhCLENBQWhCLEdBQW9Eb0QsV0FBVyxDQUFDOUIsS0FBSyxDQUFDdEIsUUFBUCxFQUFpQnNDLFNBQWpCLEVBQTRCUSxjQUE1QixDQUEvRDtBQUNBdEwsNEJBQWdCLENBQUMsaUJBQWlCOEosS0FBSyxDQUFDdEIsUUFBeEIsQ0FBaEIsQ0FBa0R2SyxFQUFsRCxHQUF1RDZMLEtBQUssQ0FBQ3RCLFFBQTdEO0FBQ0gsV0FaRCxNQVlPO0FBQ0hXLG1CQUFPLENBQUNDLElBQVIsQ0FBYSxxQkFBYjtBQUNIO0FBQ0o7QUFDSixPQXBDRDtBQXFDSDs7OztFQTVEcUIzSiw0Q0FBSyxDQUFDQyxTOztJQStEMUJtTSxXOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsVUFBTXJPLE1BQU0sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE1BQTFCO0FBQ0ksYUFBTztBQUFLLFVBQUUsRUFBRSxpQkFBaUJBLE1BQU0sQ0FBQ1MsRUFBakM7QUFBcUMsaUJBQVMsRUFBQyxjQUEvQztBQUE4RCxhQUFLLEVBQUU7QUFBQzZOLGlCQUFPLEVBQUU7QUFBVjtBQUFyRSxTQUNLLHdFQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssV0FBRyxFQUFDLHlCQUFUO0FBQW1DLGFBQUssRUFBRTtBQUMxQ2xJLGVBQUssRUFBRSxNQURtQztBQUUxQ21JLGdCQUFNLEVBQUUsTUFGa0M7QUFHMUNDLHNCQUFZLEVBQUUsTUFINEI7QUFHcEJDLHlCQUFlLEVBQUU7QUFIRztBQUExQyxRQURKLENBREosRUFPSTtBQUFPLGVBQU8sRUFBRSxjQUFjek8sTUFBTSxDQUFDUyxFQUFyQztBQUF5QyxhQUFLLEVBQUU7QUFBQzRFLGVBQUssRUFBRSxTQUFSO0FBQW1CaUosaUJBQU8sRUFBRTtBQUE1QjtBQUFoRCw0QkFQSixFQVFJO0FBQUksVUFBRSxFQUFFLGNBQWN0TyxNQUFNLENBQUNTLEVBQTdCO0FBQWlDLGFBQUssRUFBRTtBQUNwQzRFLGVBQUssRUFBRSxTQUQ2QjtBQUVwQ3FKLGtCQUFRLEVBQUUsTUFGMEI7QUFFbEJDLG9CQUFVLEVBQUUsTUFGTTtBQUVFQyxvQkFBVSxFQUFFO0FBRmQ7QUFBeEMsUUFSSixDQURKLENBREosRUFlSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixhQUFLLEVBQUU7QUFDaEN4SSxlQUFLLEVBQUUsTUFEeUI7QUFFaENtSSxnQkFBTSxFQUFFLE1BRndCO0FBR2hDQyxzQkFBWSxFQUFFLE1BSGtCO0FBR1ZDLHlCQUFlLEVBQUU7QUFIUDtBQUFwQyxRQURKLENBREosRUFPSTtBQUFPLGVBQU8sRUFBRSxlQUFlek8sTUFBTSxDQUFDUyxFQUF0QztBQUEwQyxhQUFLLEVBQUU7QUFBQzRFLGVBQUssRUFBRSxTQUFSO0FBQW1CaUosaUJBQU8sRUFBRTtBQUE1QjtBQUFqRCxnQkFQSixFQVFBO0FBQUksVUFBRSxFQUFFLGVBQWV0TyxNQUFNLENBQUNTLEVBQTlCO0FBQWtDLGFBQUssRUFBRTtBQUNyQzRFLGVBQUssRUFBRSxTQUQ4QjtBQUVyQ3FKLGtCQUFRLEVBQUUsTUFGMkI7QUFFbkJDLG9CQUFVLEVBQUUsTUFGTztBQUVDQyxvQkFBVSxFQUFFO0FBRmI7QUFBekMsUUFSQSxDQURKLENBZkosRUE2Qkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxXQUFHLEVBQUMsd0JBQVQ7QUFBa0MsYUFBSyxFQUFFO0FBQ3JDeEksZUFBSyxFQUFFLE1BRDhCO0FBRXJDbUksZ0JBQU0sRUFBRSxNQUY2QjtBQUdyQ0Msc0JBQVksRUFBRSxNQUh1QjtBQUdmQyx5QkFBZSxFQUFFO0FBSEY7QUFBekMsUUFESixDQURKLEVBT0k7QUFBTyxlQUFPLEVBQUUsb0JBQW9Cek8sTUFBTSxDQUFDUyxFQUEzQztBQUErQyxhQUFLLEVBQUU7QUFBQzRFLGVBQUssRUFBRSxTQUFSO0FBQW1CaUosaUJBQU8sRUFBRTtBQUE1QjtBQUF0RCxxQkFQSixFQVFJO0FBQUksVUFBRSxFQUFFLG9CQUFvQnRPLE1BQU0sQ0FBQ1MsRUFBbkM7QUFBdUMsYUFBSyxFQUFFO0FBQUM0RSxlQUFLLEVBQUUsU0FBUjtBQUFtQnFKLGtCQUFRLEVBQUUsTUFBN0I7QUFBcUNDLG9CQUFVLEVBQUUsTUFBakQ7QUFBeURDLG9CQUFVLEVBQUU7QUFBckU7QUFBOUMsUUFSSixDQURKLENBN0JKLENBREwsQ0FBUDtBQTRDSDs7O3dDQUVlO0FBQ2hCLFVBQU01TyxNQUFNLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUExQjtBQUNBZSxPQUFDLENBQUMrSixJQUFGLENBQU87QUFDSHJELFdBQUcsRUFBRSxvQ0FERjtBQUVIeEgsWUFBSSxFQUFFLE1BRkg7QUFHSDhLLGFBQUssRUFBRSxJQUhKO0FBSUhDLGdCQUFRLEVBQUVoTCxNQUFNLENBQUNTLEVBSmQ7QUFLSG9PLGVBQU8sRUFBRTlOLENBQUMsQ0FBQytHLFNBQUYsQ0FBWStDLFdBQVosQ0FMTjtBQU1IUSxtQkFBVyxFQUFFLElBTlY7QUFPSEMsbUJBQVcsRUFBRSxrQkFQVjtBQVFINUosWUFBSSxFQUFFdUosSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakI0RCxvQkFBVSxFQUFFL04sQ0FBQyxDQUFDK0csU0FBRixDQUFZK0MsV0FBWjtBQURLLFNBQWY7QUFSSCxPQUFQLEVBV0dVLElBWEgsQ0FXUSxVQUFVQyxLQUFWLEVBQWlCQyxVQUFqQixFQUE2QkMsV0FBN0IsRUFBMEM7QUFDOUNDLGVBQU8sQ0FBQ0MsSUFBUixDQUFhSixLQUFLLEdBQUdDLFVBQVIsR0FBcUJDLFdBQWxDO0FBQ0gsT0FiRCxFQWFHRyxJQWJILENBYVEsVUFBVW5LLElBQVYsRUFBZ0JvSyxXQUFoQixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDekMsWUFBSXJLLElBQUksQ0FBQ3NLLE1BQVQsRUFBaUI7QUFDYkwsaUJBQU8sQ0FBQ0MsSUFBUixDQUFhN0QsQ0FBQyxDQUFDZ0gsT0FBRixHQUFZakQsV0FBWixHQUEwQkMsTUFBdkM7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFJTyxLQUFLLEdBQUcsSUFBWjtBQUNBdkwsV0FBQyxDQUFDLGVBQWV1TCxLQUFLLENBQUN0QixRQUF0QixDQUFELENBQWlDZ0UsSUFBakMsQ0FBc0NDLGdCQUFnQixDQUFDdk4sSUFBSSxDQUFDd04sR0FBTixDQUF0RDtBQUNBbk8sV0FBQyxDQUFDLGdCQUFnQnVMLEtBQUssQ0FBQ3RCLFFBQXZCLENBQUQsQ0FBa0NnRSxJQUFsQyxDQUF1Q0csYUFBYSxDQUFDN0MsS0FBSyxDQUFDdUMsT0FBUCxDQUFiLEdBQStCLEtBQXRFO0FBQ0E5TixXQUFDLENBQUMscUJBQXFCdUwsS0FBSyxDQUFDdEIsUUFBNUIsQ0FBRCxDQUF1Q2dFLElBQXZDLENBQTRDQyxnQkFBZ0IsQ0FBQ3ZOLElBQUksQ0FBQzBOLE9BQU4sQ0FBaEIsR0FBaUMsS0FBakMsR0FBeUNILGdCQUFnQixDQUFDdk4sSUFBSSxDQUFDMk4sT0FBTixDQUF6RCxHQUEwRSxJQUF0SDtBQUVIO0FBQ0osT0F2QkQ7QUF3Qkg7Ozs7RUEzRXFCcE4sNENBQUssQ0FBQ0MsUzs7QUE2RWhDLFNBQVNpTSxRQUFULENBQWtCbUIsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXVCO0FBRW5CLE1BQUlELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0MsQ0FBQyxDQUFDLENBQUQsQ0FBWixFQUFpQixPQUFPLENBQUMsQ0FBUjtBQUNqQixNQUFJRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9DLENBQUMsQ0FBQyxDQUFELENBQVosRUFBaUIsT0FBTyxDQUFQO0FBQ2pCLFNBQU8sQ0FBUDtBQUNIOztBQUNELFNBQVNuQixXQUFULENBQXNCb0IsTUFBdEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxlQUFyQyxFQUFzRDtBQUNsRDs7QUFDQSxTQUFPQyxVQUFVLENBQUNDLEtBQVgsQ0FBaUIsb0JBQW9CSixNQUFyQyxFQUE2QztBQUNoREksU0FBSyxFQUFFO0FBQ0hDLGNBQVEsRUFBRTtBQURQLEtBRHlDO0FBSWhEQyxTQUFLLEVBQUU7QUFDSGQsVUFBSSxFQUFFO0FBREgsS0FKeUM7QUFPaERlLFlBQVEsRUFBRTtBQUNOZixVQUFJLEVBQUVoTSxRQUFRLENBQUNnTixZQUFULEtBQTBCQyxTQUExQixHQUNBLDRDQURBLEdBRUE7QUFIQSxLQVBzQztBQVloREMsU0FBSyxFQUFFO0FBQ0hqUSxVQUFJLEVBQUU7QUFESCxLQVp5QztBQWVoRGtRLFNBQUssRUFBRTtBQUNITCxXQUFLLEVBQUU7QUFDSGQsWUFBSSxFQUFFUztBQURIO0FBREosS0FmeUM7QUFvQmhEVyxVQUFNLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREwsS0FwQndDO0FBdUJoREMsZUFBVyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQUNGQyxpQkFBUyxFQUFFO0FBQ1BDLHdCQUFjLEVBQUU7QUFDWkMsY0FBRSxFQUFFLENBRFE7QUFFWkMsY0FBRSxFQUFFLENBRlE7QUFHWkMsY0FBRSxFQUFFLENBSFE7QUFJWkMsY0FBRSxFQUFFO0FBSlEsV0FEVDtBQU9QQyxlQUFLLEVBQUUsQ0FDSCxDQUFDLENBQUQsRUFBSSxTQUFKLENBREcsRUFFSCxDQUFDLENBQUQsRUFBSW5CLFVBQVUsQ0FBQ29CLEtBQVgsQ0FBaUIsU0FBakIsRUFBNEJqUSxVQUE1QixDQUF1QyxDQUF2QyxFQUEwQ21NLEdBQTFDLENBQThDLE1BQTlDLENBQUosQ0FGRztBQVBBLFNBRFQ7QUFhRitELGNBQU0sRUFBRTtBQUNKQyxnQkFBTSxFQUFFO0FBREosU0FiTjtBQWdCRkMsaUJBQVMsRUFBRSxDQWhCVDtBQWlCRkMsY0FBTSxFQUFFO0FBQ0pDLGVBQUssRUFBRTtBQUNIRixxQkFBUyxFQUFFO0FBRFI7QUFESCxTQWpCTjtBQXNCRkcsaUJBQVMsRUFBRTtBQXRCVDtBQURHLEtBdkJtQztBQWlEaERDLFdBQU8sRUFBRTtBQUNMQyxpQkFBVyxFQUFFO0FBRFIsS0FqRHVDO0FBb0RoREMsVUFBTSxFQUFFLENBQUM7QUFDTHZSLFVBQUksRUFBRSxNQUREO0FBRUxrRixVQUFJLEVBQUVzSyxLQUZEO0FBR0wvTixVQUFJLEVBQUVnTyxlQUhEO0FBSUxySyxXQUFLLEVBQUU7QUFKRixLQUFEO0FBcER3QyxHQUE3QyxFQTBESixZQUFZO0FBQ1B0RSxLQUFDLENBQUMsa0JBQWlCeU8sTUFBbEIsQ0FBRCxDQUE0QlIsSUFBNUIsQ0FBaUNTLEtBQWpDO0FBQ0ExTyxLQUFDLENBQUMsa0JBQWtCeU8sTUFBbEIsR0FBMkIsb0JBQTVCLENBQUQsQ0FBbURpQyxRQUFuRCxHQUE4RCxDQUE5RCxFQUFpRUMsU0FBakUsR0FBNkVqQyxLQUE3RTtBQUVQLEdBOURNLENBQVA7QUErREg7O0FBR0QsU0FBU1IsZ0JBQVQsQ0FBMEJuSyxDQUExQixFQUE2QjtBQUN6QixNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN2QixRQUFJO0FBQ0EsVUFBSTZNLEtBQUssR0FBRzdNLENBQUMsQ0FBQzhNLFFBQUYsR0FBYUMsS0FBYixDQUFtQixHQUFuQixDQUFaO0FBQ0FGLFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0EsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxPQUFULENBQWlCLHVCQUFqQixFQUEwQyxHQUExQyxDQUFYO0FBQ0EsYUFBT0gsS0FBSyxDQUFDSSxJQUFOLENBQVcsR0FBWCxDQUFQO0FBQ0gsS0FKRCxDQUlFLE9BQU9oSyxDQUFQLEVBQVU7QUFDUjRELGFBQU8sQ0FBQ0MsSUFBUixDQUFhN0QsQ0FBQyxDQUFDZ0gsT0FBZjtBQUNIO0FBQ0o7O0FBQ0QsU0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBU0ksYUFBVCxDQUF3QjZDLElBQXhCLEVBQThCO0FBQzFCLE1BQUlDLE1BQU0sR0FBRyxJQUFJakwsRUFBRSxDQUFDa0wsTUFBUCxDQUFjLE9BQWQsQ0FBYjtBQUNBLE1BQUlDLFdBQVcsR0FBR0gsSUFBbEI7QUFDQSxNQUFJSSxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQkYsV0FBcEIsQ0FBYjtBQUNBLE1BQUlHLE9BQU8sR0FBR0YsTUFBTSxHQUFHLEtBQXZCOztBQUNBLE1BQUlFLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2JBLFdBQU8sR0FBR0EsT0FBTyxHQUFHLENBQUMsQ0FBckI7QUFDSDs7QUFDREEsU0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsT0FBTyxHQUFHQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxFQUFULEVBQWEsQ0FBYixDQUFyQixJQUF3Q0YsSUFBSSxDQUFDRSxHQUFMLENBQVMsRUFBVCxFQUFhLENBQWIsQ0FBbEQ7QUFDQSxTQUFPeEQsZ0JBQWdCLENBQUNxRCxPQUFELENBQXZCO0FBQ0g7O0FBQ0QsU0FBUzlGLGFBQVQsQ0FBd0JrRyxPQUF4QixFQUFpQ3JHLEtBQWpDLEVBQXdDaEUsTUFBeEMsRUFBZ0RzSyxNQUFoRCxFQUF3RDtBQUNwRCxNQUFJQyxXQUFXLEdBQUcsSUFBSTVMLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUFiLENBQWtCO0FBQ2hDQyxVQUFNLEVBQUUsSUFBSUgsRUFBRSxDQUFDRyxNQUFILENBQVUwTCxHQUFkLENBQWtCO0FBQ3RCcEwsU0FBRyxFQUFFLDRDQUE0Q2lMLE9BQTVDLEdBQXNELHFCQUF0RCxHQUE4RXJHO0FBRDdELEtBQWxCLENBRHdCO0FBSWhDNUwsTUFBRSxFQUFFNEg7QUFKNEIsR0FBbEIsQ0FBbEI7QUFNQXpGLGdCQUFjLENBQUN5RixNQUFELENBQWQsQ0FBdUJ5SyxRQUF2QixDQUFnQ0YsV0FBaEM7O0FBQ0EsTUFBRyxDQUFDRCxNQUFKLEVBQ0E7QUFDSUksYUFBUyxDQUFDblEsY0FBYyxDQUFDeUYsTUFBRCxDQUFmLENBQVQ7QUFDSDtBQUNKOztBQUFBOztBQUVELFNBQVNzRSxZQUFULENBQXVCK0YsT0FBdkIsRUFBZ0NyRyxLQUFoQyxFQUF1Q2hFLE1BQXZDLEVBQStDO0FBQzNDLE1BQUl1SyxXQUFXLEdBQUcsSUFBSTVMLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUFiLENBQWtCO0FBQ2hDQyxVQUFNLEVBQUUsSUFBSUgsRUFBRSxDQUFDRyxNQUFILENBQVUwTCxHQUFkLENBQWtCO0FBQ3RCcEwsU0FBRyxFQUFFLDRDQUE0Q2lMLE9BQTVDLEdBQXNELHFCQUF0RCxHQUE4RXJHO0FBRDdELEtBQWxCLENBRHdCO0FBSWhDNUwsTUFBRSxFQUFFNEgsTUFBTSxHQUFHO0FBSm1CLEdBQWxCLENBQWxCO0FBTUF6RixnQkFBYyxDQUFDeUYsTUFBRCxDQUFkLENBQXVCeUssUUFBdkIsQ0FBZ0NGLFdBQWhDO0FBQ0EsTUFBSUksS0FBSyxHQUFHaFEsUUFBUSxDQUFDaVEsY0FBVCxDQUF3QixpQkFBaUI1SyxNQUFNLENBQUN5SixPQUFQLENBQWUsWUFBZixFQUE2QixFQUE3QixDQUF6QyxDQUFaO0FBRUFjLGFBQVcsQ0FBQzlKLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQVNvSyxLQUFULEVBQWdCO0FBQ3pDLFFBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxPQUFoQjtBQUNBLFFBQUloTixLQUFLLEdBQUcrTSxHQUFHLENBQUNFLE1BQUosQ0FBV2pOLEtBQVgsR0FBb0I0TSxLQUFLLENBQUNuUyxLQUF0QztBQUNBc1MsT0FBRyxDQUFDRyxJQUFKO0FBQ0FILE9BQUcsQ0FBQ0ksU0FBSjtBQUNBSixPQUFHLENBQUNLLElBQUosQ0FBU3BOLEtBQVQsRUFBZ0IsQ0FBaEIsRUFBbUIrTSxHQUFHLENBQUNFLE1BQUosQ0FBV2pOLEtBQVgsR0FBbUJBLEtBQXRDLEVBQTZDK00sR0FBRyxDQUFDRSxNQUFKLENBQVc5RSxNQUF4RDtBQUNBNEUsT0FBRyxDQUFDTSxJQUFKO0FBQ0gsR0FQRDtBQVNBYixhQUFXLENBQUM5SixFQUFaLENBQWUsYUFBZixFQUE4QixVQUFTb0ssS0FBVCxFQUFnQjtBQUMxQyxRQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsT0FBaEI7QUFDQUQsT0FBRyxDQUFDTyxPQUFKO0FBQ0gsR0FIRDtBQUlBVixPQUFLLENBQUNXLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVc7QUFBQy9RLGtCQUFjLENBQUN5RixNQUFELENBQWQsQ0FBdUJ1TCxNQUF2QjtBQUFpQyxHQUE3RSxFQUErRSxLQUEvRTtBQUNBYixXQUFTLENBQUNuUSxjQUFjLENBQUN5RixNQUFELENBQWYsQ0FBVDtBQUNIOztBQUFBOztBQUVELFNBQVN2SCxVQUFULENBQXFCRCxLQUFyQixFQUE0QmdULE9BQTVCLEVBQXFDO0FBQ2pDLE1BQUc7QUFDSCxRQUFJcFQsRUFBRSxHQUFHb1QsT0FBVDtBQUNBLFFBQUlDLFNBQVMsR0FBR2xSLGNBQWMsQ0FBQ2lSLE9BQUQsQ0FBZCxDQUF3QmhILFNBQXhCLEdBQW9DRSxPQUFwQyxDQUE0QyxVQUFVQyxHQUFWLEVBQWU7QUFDdkUsVUFBSXZNLEVBQUUsSUFBSXVNLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLElBQVIsQ0FBTixJQUF1QnhNLEVBQUUsR0FBRyxPQUFMLElBQWdCdU0sR0FBRyxDQUFDQyxHQUFKLENBQVEsSUFBUixDQUEzQyxFQUEwRDtBQUN0REQsV0FBRyxDQUFDbE0sVUFBSixDQUFlRCxLQUFmO0FBQ0g7QUFDSixLQUplLENBQWhCO0FBS0MsR0FQRCxDQVFBLE9BQU1rSCxDQUFOLEVBQVEsQ0FBRTtBQUNiOztBQUFBOztBQUNELFNBQVNnTCxTQUFULENBQW9CZ0IsUUFBcEIsRUFBOEI7QUFDMUI7O0FBQ0EsTUFBSTtBQUNBO0FBQ0EsUUFBSUMsU0FBUyxJQUFJQSxTQUFTLElBQUksUUFBOUIsRUFBd0M7QUFDcEMsVUFBSUMsV0FBVyxHQUFHLElBQUlqTixFQUFFLENBQUNrTixJQUFILENBQVFDLEtBQVosQ0FBa0JuTixFQUFFLENBQUNxQyxJQUFILENBQVFDLFNBQVIsQ0FBa0IyQixJQUFJLENBQUN5QixLQUFMLENBQVcwSCxPQUFYLEVBQW9CakMsV0FBdEMsRUFBbUQsV0FBbkQsRUFBZ0UsV0FBaEUsQ0FBbEIsQ0FBbEI7QUFDQSxVQUFJa0MsWUFBWSxHQUFHLElBQUlyTixFQUFFLENBQUNzTixPQUFQLENBQWVMLFdBQWYsQ0FBbkI7QUFDQSxVQUFJTSxXQUFXLEdBQUdGLFlBQVksQ0FBQ0csV0FBYixHQUEyQkMsU0FBM0IsRUFBbEI7QUFDQSxVQUFJQyxjQUFjLEdBQUcsSUFBSTFOLEVBQUUsQ0FBQzJOLE1BQUgsQ0FBVUMsTUFBZCxDQUFxQkwsV0FBckIsRUFBaUM5SixRQUFRLENBQUNvSyxPQUFELENBQXpDLENBQXJCO0FBQ0EsVUFBSUMsYUFBYSxHQUFHLElBQUk5TixFQUFFLENBQUNrTixJQUFILENBQVFhLE9BQVosQ0FDaEIsQ0FDSSxDQUFDLENBQUNMLGNBQWMsQ0FBQyxDQUFELENBQWYsRUFBbUJBLGNBQWMsQ0FBQyxDQUFELENBQWpDLENBQUQsRUFDSSxDQUFDQSxjQUFjLENBQUMsQ0FBRCxDQUFmLEVBQW1CQSxjQUFjLENBQUMsQ0FBRCxDQUFqQyxDQURKLEVBRUksQ0FBQ0EsY0FBYyxDQUFDLENBQUQsQ0FBZixFQUFtQkEsY0FBYyxDQUFDLENBQUQsQ0FBakMsQ0FGSixFQUdJLENBQUNBLGNBQWMsQ0FBQyxDQUFELENBQWYsRUFBbUJBLGNBQWMsQ0FBQyxDQUFELENBQWpDLENBSEosRUFJSSxDQUFDQSxjQUFjLENBQUMsQ0FBRCxDQUFmLEVBQW1CQSxjQUFjLENBQUMsQ0FBRCxDQUFqQyxDQUpKLENBREosQ0FEZ0IsQ0FBcEI7QUFTQSxVQUFJTSxlQUFlLEdBQUcsSUFBSWhPLEVBQUUsQ0FBQ3NOLE9BQVAsQ0FBZVEsYUFBZixDQUF0QixDQWRvQyxDQWVyQzs7QUFFQyxVQUFJRyxZQUFZLEdBQUcsSUFBSWpPLEVBQUUsQ0FBQ0csTUFBSCxDQUFVK04sTUFBZCxDQUFxQixFQUFyQixDQUFuQjtBQUNBRCxrQkFBWSxDQUFDRSxXQUFiLENBQXlCLENBQUNILGVBQUQsQ0FBekI7QUFDQSxVQUFJL04sS0FBSyxHQUFHLElBQUlELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTaU8sTUFBYixDQUFvQjtBQUM1Qi9OLGNBQU0sRUFBRThOLFlBRG9CO0FBRTVCRyxhQUFLLEVBQUUsQ0FDSCxJQUFJcE8sRUFBRSxDQUFDb08sS0FBSCxDQUFTQyxLQUFiLENBQW1CO0FBQ2ZDLGdCQUFNLEVBQUUsSUFBSXRPLEVBQUUsQ0FBQ29PLEtBQUgsQ0FBU0csTUFBYixDQUFvQjtBQUN4QmxRLGlCQUFLLEVBQUUsU0FEaUI7QUFFeEJlLGlCQUFLLEVBQUU7QUFGaUIsV0FBcEIsQ0FETztBQUtmb1AsY0FBSSxFQUFFO0FBTFMsU0FBbkIsQ0FERztBQUZxQixPQUFwQixDQUFaO0FBWUF6QixjQUFRLENBQUNqQixRQUFULENBQWtCN0wsS0FBbEI7QUFDSCxLQWhDRCxNQWlDSyxJQUFHK00sU0FBUyxJQUFJQSxTQUFTLElBQUksUUFBN0IsRUFBdUM7QUFDeEMsVUFBSXlCLE1BQU0sR0FBRyxJQUFJek8sRUFBRSxDQUFDa04sSUFBSCxDQUFRd0IsTUFBWixDQUFtQjFPLEVBQUUsQ0FBQ3FDLElBQUgsQ0FBUUMsU0FBUixDQUFrQjJCLElBQUksQ0FBQ3lCLEtBQUwsQ0FBVzBILE9BQVgsRUFBb0JqQyxXQUF0QyxFQUFtRCxXQUFuRCxFQUFnRSxXQUFoRSxDQUFuQixFQUFpRzBDLE9BQU8sR0FBRyxDQUEzRyxDQUFiO0FBQ0EsVUFBSWMsYUFBYSxHQUFHLElBQUkzTyxFQUFFLENBQUNzTixPQUFQLENBQWVtQixNQUFmLENBQXBCO0FBQ0EsVUFBSVIsWUFBWSxHQUFHLElBQUlqTyxFQUFFLENBQUNHLE1BQUgsQ0FBVStOLE1BQWQsQ0FBcUIsRUFBckIsQ0FBbkI7QUFDQUQsa0JBQVksQ0FBQ0UsV0FBYixDQUF5QixDQUFDUSxhQUFELENBQXpCO0FBQ0EsVUFBSTFPLEtBQUssR0FBRyxJQUFJRCxFQUFFLENBQUNDLEtBQUgsQ0FBU2lPLE1BQWIsQ0FBb0I7QUFDNUIvTixjQUFNLEVBQUU4TixZQURvQjtBQUU1QkcsYUFBSyxFQUFFLENBQ0gsSUFBSXBPLEVBQUUsQ0FBQ29PLEtBQUgsQ0FBU0MsS0FBYixDQUFtQjtBQUNmQyxnQkFBTSxFQUFFLElBQUl0TyxFQUFFLENBQUNvTyxLQUFILENBQVNHLE1BQWIsQ0FBb0I7QUFDeEJsUSxpQkFBSyxFQUFFLFNBRGlCO0FBRXhCZSxpQkFBSyxFQUFFO0FBRmlCLFdBQXBCLENBRE87QUFLZm9QLGNBQUksRUFBRTtBQUxTLFNBQW5CLENBREc7QUFGcUIsT0FBcEIsQ0FBWjtBQVlBekIsY0FBUSxDQUFDakIsUUFBVCxDQUFrQjdMLEtBQWxCO0FBQ0gsS0FsQkksTUFtQkQ7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQWxHLE9BQUMsQ0FBQytKLElBQUYsQ0FBTztBQUNIckQsV0FBRyxFQUFFcEcsTUFBTSxDQUFDeVEsT0FBUCxDQUFlLFdBQWYsRUFBNEIsRUFBNUIsSUFBa0Msb0JBQWxDLEdBQXlEOEQsU0FBekQsR0FBcUUsR0FBckUsR0FBMkVDLE1BRDdFO0FBRUg1VixZQUFJLEVBQUUsS0FGSDtBQUdIOEssYUFBSyxFQUFFLElBSEo7QUFJSCtLLGNBQU0sRUFBRS9CLFFBSkw7QUFLSHpJLG1CQUFXLEVBQUU7QUFMVixPQUFQLEVBTUdDLElBTkgsQ0FNUSxVQUFVQyxLQUFWLEVBQWlCQyxVQUFqQixFQUE2QkMsV0FBN0IsRUFBMEM7QUFDOUNDLGVBQU8sQ0FBQ0MsSUFBUixDQUFhSixLQUFLLEdBQUdDLFVBQVIsR0FBcUJDLFdBQWxDO0FBQ0gsT0FSRCxFQVFHRyxJQVJILENBUVEsVUFBVW5LLElBQVYsRUFBZ0JvSyxXQUFoQixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDekMsWUFBSXJLLElBQUksQ0FBQ3NLLE1BQVQsRUFBaUI7QUFDYkwsaUJBQU8sQ0FBQ0MsSUFBUixDQUFhN0QsQ0FBQyxDQUFDZ0gsT0FBRixHQUFZakQsV0FBWixHQUEwQkMsTUFBdkM7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFJZ0ksUUFBUSxHQUFHLEtBQUsrQixNQUFwQjs7QUFDQSxjQUFJQyxlQUFlLEdBQUcsT0FBT3JVLElBQVAsSUFBZ0IsUUFBaEIsR0FBMEJ1SixJQUFJLENBQUN5QixLQUFMLENBQVdoTCxJQUFYLENBQTFCLEdBQTRDQSxJQUFsRTs7QUFFQSxjQUFJdVQsWUFBWSxHQUFHLElBQUlqTyxFQUFFLENBQUNHLE1BQUgsQ0FBVStOLE1BQWQsQ0FBcUI7QUFDcENjLG9CQUFRLEVBQUcsSUFBSWhQLEVBQUUsQ0FBQ2lQLE1BQUgsQ0FBVUMsT0FBZCxFQUFELENBQTBCQyxZQUExQixDQUF1Q0osZUFBdkMsRUFBd0Q7QUFBRUssK0JBQWlCLEVBQUU7QUFBckIsYUFBeEQsQ0FEMEIsQ0FDa0U7O0FBRGxFLFdBQXJCLENBQW5COztBQUlBLGNBQUlDLG9CQUFvQixHQUFHLElBQUlyUCxFQUFFLENBQUNDLEtBQUgsQ0FBU2lPLE1BQWIsQ0FBb0I7QUFDM0MvTixrQkFBTSxFQUFFOE4sWUFEbUM7QUFFM0NHLGlCQUFLLEVBQUUsQ0FDSCxJQUFJcE8sRUFBRSxDQUFDb08sS0FBSCxDQUFTQyxLQUFiLENBQW1CO0FBQ2ZDLG9CQUFNLEVBQUUsSUFBSXRPLEVBQUUsQ0FBQ29PLEtBQUgsQ0FBU0csTUFBYixDQUFvQjtBQUN4QmxRLHFCQUFLLEVBQUUsU0FEaUI7QUFFeEJlLHFCQUFLLEVBQUU7QUFGaUIsZUFBcEIsQ0FETztBQUtmb1Asa0JBQUksRUFBRTtBQUxTLGFBQW5CLENBREc7QUFGb0MsV0FBcEIsQ0FBM0I7O0FBWUF6QixrQkFBUSxDQUFDakIsUUFBVCxDQUFrQnVELG9CQUFsQjtBQUNIO0FBQ0osT0FqQ0Q7QUFrQ0g7QUFDSixHQW5IRCxDQW1IRSxPQUFPdE8sQ0FBUCxFQUFVO0FBQ1I0RCxXQUFPLENBQUNDLElBQVIsQ0FBYSxvQkFBb0I3RCxDQUFDLENBQUNnSCxPQUFuQztBQUNIO0FBQ0o7O0FBQUE7O0FBQ0R2QixJQUFJLENBQUM4SSxTQUFMLENBQWV6SSxRQUFmLEdBQTBCLFlBQVc7QUFDakMsTUFBSTBJLEVBQUUsR0FBRyxLQUFLQyxRQUFMLEtBQWtCLENBQTNCLENBRGlDLENBQ0g7O0FBQzlCLE1BQUlDLEVBQUUsR0FBRyxLQUFLQyxPQUFMLEVBQVQ7QUFFQSxTQUFPLENBQUMsS0FBS0MsV0FBTCxFQUFELEVBQ0gsQ0FBQ0osRUFBRSxHQUFDLENBQUgsR0FBTyxFQUFQLEdBQVksR0FBYixJQUFvQkEsRUFEakIsRUFFSCxDQUFDRSxFQUFFLEdBQUMsQ0FBSCxHQUFPLEVBQVAsR0FBWSxHQUFiLElBQW9CQSxFQUZqQixFQUdMMUUsSUFISyxDQUdBLEdBSEEsQ0FBUDtBQUlILENBUkQ7O0FBU0EsSUFBSXRPLElBQUksR0FBRyxDQUFYO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxJQUFJbVIsT0FBTyxHQUFHK0Isa0JBQWtCLENBQUMsU0FBRCxDQUFoQztBQUNBLElBQUl4QyxPQUFPLEdBQUd3QyxrQkFBa0IsQ0FBQyxTQUFELENBQWhDO0FBQ0EsSUFBSWhWLE9BQU8sR0FBR2dWLGtCQUFrQixDQUFDLEtBQUQsQ0FBaEM7QUFDQSxJQUFJNUMsU0FBUyxHQUFHNEMsa0JBQWtCLENBQUMsV0FBRCxDQUFsQztBQUNBLElBQUloQixTQUFTLEdBQUdnQixrQkFBa0IsQ0FBQyxLQUFELENBQWxDO0FBQ0EsSUFBSWYsTUFBTSxHQUFHZSxrQkFBa0IsQ0FBQyxRQUFELENBQS9CO0FBQ0EsSUFBSUMsUUFBUSxHQUFHQyxTQUFTLENBQUNsVixPQUFELENBQVQsQ0FBbUJrUSxPQUFuQixDQUEyQixHQUEzQixFQUFnQyxFQUFoQyxFQUFvQ0EsT0FBcEMsQ0FBNEMsR0FBNUMsRUFBaUQsRUFBakQsRUFBcURELEtBQXJELENBQTJELEdBQTNELENBQWY7QUFDQSxJQUFJaEgsV0FBVyxHQUFHLE9BQU9nTSxRQUFRLENBQUMsQ0FBRCxDQUFmLEdBQXFCLEdBQXJCLEdBQTJCQSxRQUFRLENBQUMsQ0FBRCxDQUFuQyxHQUF5QyxLQUF6QyxHQUFpREEsUUFBUSxDQUFDLENBQUQsQ0FBekQsR0FBK0QsR0FBL0QsR0FBcUVBLFFBQVEsQ0FBQyxDQUFELENBQTdFLEdBQW1GLEtBQW5GLEdBQTJGQSxRQUFRLENBQUMsQ0FBRCxDQUFuRyxHQUF5RyxHQUF6RyxHQUErR0EsUUFBUSxDQUFDLENBQUQsQ0FBdkgsR0FBNkgsS0FBN0gsR0FBcUlBLFFBQVEsQ0FBQyxDQUFELENBQTdJLEdBQW1KLEdBQW5KLEdBQXlKQSxRQUFRLENBQUMsQ0FBRCxDQUFqSyxHQUF1SyxLQUF2SyxHQUErS0EsUUFBUSxDQUFDLENBQUQsQ0FBdkwsR0FBNkwsR0FBN0wsR0FBbU1BLFFBQVEsQ0FBQyxDQUFELENBQTNNLEdBQWlOLElBQW5PO0FBQ0EsSUFBSWpVLGNBQWMsR0FBRyxFQUFyQjtBQUNBLElBQUlKLGdCQUFnQixHQUFHLEVBQXZCO0FBRU8sU0FBU3VVLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUNwQ0Msa0RBQVEsQ0FBQ3JELE1BQVQsQ0FDSSwyREFBQyxPQUFELE9BREosRUFFSTVRLFFBQVEsQ0FBQ2lRLGNBQVQsQ0FBd0IsWUFBeEIsQ0FGSjtBQUlILEMiLCJmaWxlIjoiZ2VvZGFzaHJlYWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiZ2VvZGFzaHJlYWN0XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi9yZXNvdXJjZXMvcHVibGljL2pzeC9nZW9kYXNocmVhY3QuanNcIixcInZlbmRvcnN+YWNjb3VudH5jb2xsZWN0aW9ufmdlb2Rhc2hyZWFjdH5ob21lfmluc3RpdHV0aW9ufnByb2plY3R+dGltZXN5bmN+d2lkZ2V0bGF5b3V0ZWRpdG9yXCIsXCJjb2xsZWN0aW9ufmdlb2Rhc2hyZWFjdH5ob21lfnByb2plY3RcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBtZXJjYXRvciB9IGZyb20gXCIuLi9qcy9tZXJjYXRvci1vcGVubGF5ZXJzLmpzXCI7XG5cbnZhciBnZWVUaW1lb3V0ID0ge307XG5jbGFzcyBHZW9kYXNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHdpZGdldHM6IFsgXSwgY2FsbGJhY2tDb21wbGV0ZTogZmFsc2UgfTtcbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCh0aGVVUkwgKyBcIi9pZC9cIiArIHBpZCwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGRhdGEud2lkZ2V0cy5tYXAoZnVuY3Rpb24od2lkZ2V0KXtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNGdWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2lkZ2V0Lm9wYWNpdHkgPSAnMC45JztcbiAgICAgICAgICAgICAgICB3aWRnZXQuc2xpZGVyVHlwZSA9ICdvcGFjaXR5JztcbiAgICAgICAgICAgICAgICB3aWRnZXQuc3dpcGVWYWx1ZSA9ICcxLjAnO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQ7fSkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoeyB3aWRnZXRzOiBkYXRhLCBjYWxsYmFja0NvbXBsZXRlOiB0cnVlfSkpO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8V2lkZ2V0c1xuICAgICAgICAgICAgICAgIHdpZGdldHM9e3RoaXMuc3RhdGUud2lkZ2V0c31cbiAgICAgICAgICAgICAgICBwcm9qQU9JPXt0aGlzLnN0YXRlLnByb2pBT0l9XG4gICAgICAgICAgICAgICAgb25GdWxsU2NyZWVuID0ge3RoaXMuaGFuZGxlRnVsbFNjcmVlbn1cbiAgICAgICAgICAgICAgICBvbk9wYWNpdHlDaGFuZ2VkID0ge3RoaXMuaGFuZGxlT3BhY2l0eUNoYW5nZX1cbiAgICAgICAgICAgICAgICBvblNsaWRlckNoYW5nZSA9IHt0aGlzLmhhbmRsZVNsaWRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICBvblN3aXBlQ2hhbmdlID0ge3RoaXMuaGFuZGxlU3dpcGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tDb21wbGV0ZSA9IHt0aGlzLnN0YXRlLmNhbGxiYWNrQ29tcGxldGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApO1xuICAgIH07XG4gICAgaGFuZGxlRnVsbFNjcmVlbiA9ICh3aWRnZXQsIHR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IFsuLi50aGlzLnN0YXRlLndpZGdldHNdO1xuICAgICAgICBjb25zdCBpbmRleCA9IHdpZGdldHMuaW5kZXhPZih3aWRnZXQpO1xuICAgICAgICB3aWRnZXRzW2luZGV4XSA9IHsgLi4ud2lkZ2V0IH07XG4gICAgICAgIHdpZGdldHNbaW5kZXhdLmlzRnVsbCA9ICF3aWRnZXRzW2luZGV4XS5pc0Z1bGw7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWRnZXRzIH0sXG4gICAgICAgICAgICBmdW5jdGlvbigpIHsgdXBkYXRlU2l6ZSh3aWRnZXQsIHR5cGUpO31cbiAgICAgICAgICk7XG4gICAgfTtcbiAgICBoYW5kbGVPcGFjaXR5Q2hhbmdlID0gKHdpZGdldCwgaWQsIGV2dCkgPT4ge1xuICAgICAgICBjb25zdCB3aWRnZXRzID0gWy4uLnRoaXMuc3RhdGUud2lkZ2V0c107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gd2lkZ2V0cy5pbmRleE9mKHdpZGdldCk7XG4gICAgICAgIHdpZGdldHNbaW5kZXhdID0geyAuLi53aWRnZXQgfTtcbiAgICAgICAgd2lkZ2V0c1tpbmRleF0ub3BhY2l0eSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldE9wYWNpdHkoJChcIiNyYW5nZVdpZGdldF9cIiArIGlkKS52YWwoKSwgJ3dpZGdldG1hcF8nICsgaWQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkZ2V0cyB9KTtcbiAgICB9O1xuICAgIGhhbmRsZVNsaWRlckNoYW5nZSA9ICh3aWRnZXQsIGlkLCBldnQpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IFsuLi50aGlzLnN0YXRlLndpZGdldHNdO1xuICAgICAgICBjb25zdCBpbmRleCA9IHdpZGdldHMuaW5kZXhPZih3aWRnZXQpO1xuICAgICAgICB3aWRnZXRzW2luZGV4XSA9IHsgLi4ud2lkZ2V0IH07XG4gICAgICAgIHdpZGdldHNbaW5kZXhdLnNsaWRlclR5cGUgPSB3aWRnZXRzW2luZGV4XS5zbGlkZXJUeXBlID09ICdvcGFjaXR5Jz8gJ3N3aXBlJzogJ29wYWNpdHknO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkZ2V0cyB9KTtcbiAgICB9O1xuICAgIGhhbmRsZVN3aXBlQ2hhbmdlID0gKHdpZGdldCwgaWQsIGV2dCkgPT4ge1xuICAgICAgICBjb25zdCB3aWRnZXRzID0gWy4uLnRoaXMuc3RhdGUud2lkZ2V0c107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gd2lkZ2V0cy5pbmRleE9mKHdpZGdldCk7XG4gICAgICAgIHdpZGdldHNbaW5kZXhdID0geyAuLi53aWRnZXQgfTtcbiAgICAgICAgd2lkZ2V0c1tpbmRleF0uc3dpcGVWYWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWRnZXRzIH0pO1xuICAgIH07XG59XG4kKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgaWYoJChcIi5wbGFjZWhvbGRlci5mdWxsd2lkZ2V0XCIpLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgICB2YXIgaWQgPSAkKFwiLnBsYWNlaG9sZGVyLmZ1bGx3aWRnZXRcIilbMF0uY2hpbGROb2Rlc1swXS5pZC5zdWJzdHJpbmcoJChcIi5wbGFjZWhvbGRlci5mdWxsd2lkZ2V0XCIpWzBdLmNoaWxkTm9kZXNbMF0uaWQuaW5kZXhPZignXycpICsgMSk7XG4gICAgICAgIGlmKGdyYXBoV2lkZ2V0QXJyYXlbXCJ3aWRnZXRncmFwaF9cIiArIGlkXSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBncmFwaFdpZGdldEFycmF5Wyd3aWRnZXRncmFwaF8nICsgaWRdLnNldFNpemUoJCgnI3dpZGdldGdyYXBoXycgKyBpZCkub3V0ZXJXaWR0aCgpLCAkKCcjd2lkZ2V0Z3JhcGhfJyArIGlkKS5vdXRlckhlaWdodCgpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG1hcFdpZGdldEFycmF5W1wid2lkZ2V0Z3JhcGhfXCIgKyBpZF0gIT0gbnVsbCl7XG4gICAgICAgICAgICBtYXBXaWRnZXRBcnJheVtcIndpZGdldG1hcF9cIiArIGlkXS51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbmZ1bmN0aW9uIHVwZGF0ZVNpemUod2hpY2gsIHR5cGUpXG57XG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdib2R5ZnVsbCcpO1xuICAgIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgaWYoKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2Muc2Nyb2xsTGVmdCkgLSAoZG9jLmNsaWVudExlZnQgfHwgMCkgPT0gMCAmJiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApICAtIChkb2MuY2xpZW50VG9wIHx8IDApID09IDApXG4gICAge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8obGVmdCwgcHRvcCk7XG4gICAgICAgIGxlZnQgPSAwO1xuICAgICAgICBwdG9wID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbGVmdCA9ICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jLnNjcm9sbExlZnQpIC0gKGRvYy5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgICBwdG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG4gICAgfVxuICAgIGlmKHR5cGUgPT09ICdtYXB3aWRnZXQnKXtcbiAgICBtYXBXaWRnZXRBcnJheVtcIndpZGdldG1hcF9cIiArIHdoaWNoLmlkXS51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZSA9PT0gJ2dyYXBod2lkZ2V0Jyl7XG4gICAgICAgIGdyYXBoV2lkZ2V0QXJyYXlbJ3dpZGdldGdyYXBoXycrIHdoaWNoLmlkXS5zZXRTaXplKCQoJyN3aWRnZXRncmFwaF8nKyB3aGljaC5pZCkub3V0ZXJXaWR0aCgpLCAkKCcjd2lkZ2V0Z3JhcGhfJysgd2hpY2guaWQpLm91dGVySGVpZ2h0KCksIHRydWUpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBXaWRnZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMud2lkZ2V0cy5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgIHJldHVybiAoIDxkaXYgY2xhc3NOYW1lPVwicm93IHBsYWNlaG9sZGVyc1wiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMud2lkZ2V0cy5tYXAod2lkZ2V0ID0+IChcbiAgICAgICAgICAgICAgICA8V2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgIGtleT17d2lkZ2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICBpZD17d2lkZ2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQ9e3dpZGdldH1cbiAgICAgICAgICAgICAgICAgICAgb25GdWxsU2NyZWVuID17dGhpcy5wcm9wcy5vbkZ1bGxTY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIG9uT3BhY2l0eUNoYW5nZWQgPSB7dGhpcy5wcm9wcy5vbk9wYWNpdHlDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VmFsdWUgPSB7dGhpcy5wcm9wcy5vcGFjaXR5VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uU2xpZGVyQ2hhbmdlID0ge3RoaXMucHJvcHMub25TbGlkZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3dpcGVDaGFuZ2UgPSB7dGhpcy5wcm9wcy5vblN3aXBlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+ICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoIDxkaXYgY2xhc3NOYW1lPVwicm93IHBsYWNlaG9sZGVyc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXIgY29sdW1uU3BhbjMgcm93U3BhbjJcIiBzdHlsZT17e2dyaWRBcmVhOiBcIjEgLyAxIC8gc3BhbiAyIC8gc3BhbiAxMlwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cIm5vV2lkZ2V0TWVzc2FnZVwiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5wcm9wcy5jYWxsYmFja0NvbXBsZXRlID09IGZhbHNlPyAnbm9uZScgOiAnYmxvY2snIH19PlRoZSBBZG1pbmlzdHJhdG9yIGhhcyBub3QgY29uZmlndXJlZCBhbnkgR2VvLURhc2ggV2lkZ2V0cyBmb3IgdGhpcyBwcm9qZWN0PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiApO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW1hZ2VDb2xsZWN0aW9uTGlzdCA9IFtcIkltYWdlQ29sbGVjdGlvbkN1c3RvbVwiLCBcImFkZEltYWdlQ29sbGVjdGlvblwiLCBcIm5kdmlJbWFnZUNvbGxlY3Rpb25cIiwgXCJJbWFnZUNvbGxlY3Rpb25ORFZJXCIsIFwiSW1hZ2VDb2xsZWN0aW9uRVZJXCIsIFwiSW1hZ2VDb2xsZWN0aW9uRVZJMlwiLCBcIkltYWdlQ29sbGVjdGlvbk5EV0lcIiwgXCJJbWFnZUNvbGxlY3Rpb25ORE1JXCIsIFwiSW1hZ2VDb2xsZWN0aW9uTEFORFNBVDVcIiwgXCJJbWFnZUNvbGxlY3Rpb25MQU5EU0FUN1wiLCBcIkltYWdlQ29sbGVjdGlvbkxBTkRTQVQ4XCIsIFwiSW1hZ2VDb2xsZWN0aW9uU2VudGluZWwyXCJdO1xuICAgICAgICB0aGlzLmdyYXBoQ29udHJvbExpc3QgPSBbXCJjdXN0b21UaW1lU2VyaWVzXCIsIFwidGltZVNlcmllc0dyYXBoXCIsIFwibmR2aVRpbWVTZXJpZXNcIiwgXCJuZHdpVGltZVNlcmllc1wiLCBcImV2aVRpbWVTZXJpZXNcIiwgXCJldmkyVGltZVNlcmllc1wiLCBcIm5kbWlUaW1lU2VyaWVzXCJdO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7d2lkZ2V0LCBpc0Z1bGx9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuICggICAgPFJlYWN0LkZyYWdtZW50PnsgdGhpcy5nZXRXaWRnZXRIdG1sKHdpZGdldCwgdGhpcy5wcm9wcy5vbk9wYWNpdHlDaGFuZ2VkLCB0aGlzLnByb3BzLm9wYWNpdHlWYWx1ZSwgdGhpcy5wcm9wcy5vblNsaWRlckNoYW5nZSwgdGhpcy5wcm9wcy5vblN3aXBlQ2hhbmdlKSB9PC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH07XG4gICAgZ2V0V2lkZ2V0SHRtbCh3aWRnZXQsIG9uT3BhY2l0eUNoYW5nZWQsIG9wYWNpdHlWYWx1ZSwgb25TbGlkZXJDaGFuZ2UsIG9uU3dpcGVDaGFuZ2Upe1xuICAgICAgICBpZih3aWRnZXQuZ3JpZGNvbHVtbiB8fCB3aWRnZXQubGF5b3V0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5nZXRDbGFzc05hbWVzKHdpZGdldC5pc0Z1bGwsIHdpZGdldC5ncmlkY29sdW1uICE9IG51bGw/IHdpZGdldC5ncmlkY29sdW1uOiAnJywgd2lkZ2V0LmdyaWRyb3cgIT0gbnVsbD8gd2lkZ2V0LmdyaWRyb3c6IHdpZGdldC5sYXlvdXQgIT0gbnVsbD8gJ3NwYW4gJyArIHdpZGdldC5sYXlvdXQuaDogJycpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Z3JpZENvbHVtbjp3aWRnZXQuZ3JpZGNvbHVtbiAhPSBudWxsPyB3aWRnZXQuZ3JpZGNvbHVtbjogdGhpcy5nZW5lcmF0ZWdyaWRjb2x1bW4od2lkZ2V0LmxheW91dC54LCB3aWRnZXQubGF5b3V0LncpLCBncmlkUm93OndpZGdldC5ncmlkcm93ICE9IG51bGw/IHdpZGdldC5ncmlkcm93OiB0aGlzLmdlbmVyYXRlZ3JpZHJvdyh3aWRnZXQubGF5b3V0LnksIHdpZGdldC5sYXlvdXQuaCl9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBpZD17XCJ3aWRnZXRfXCIgKyB3aWRnZXQuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZSBwYW5lbC1hY3Rpb25zIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0+e3dpZGdldC5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19PjxhIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIHBhbmVsLWFjdGlvbnMgcGFuZWwtZnVsbHNjcmVlblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25GdWxsU2NyZWVuKHRoaXMucHJvcHMud2lkZ2V0LCB0aGlzLmdldFdpZGdldFR5cGUod2lkZ2V0KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIiB0aXRsZT1cIlRvZ2dsZSBGdWxsc2NyZWVuXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCIgc3R5bGU9e3tjb2xvcjogXCIjMzFCQUIwXCJ9fT48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17XCJ3aWRnZXQtY29udGFpbmVyX1wiICsgd2lkZ2V0LmlkfSBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0V2lkZ2V0SW5uZXJIdG1sKHdpZGdldCwgb25PcGFjaXR5Q2hhbmdlZCwgb3BhY2l0eVZhbHVlLCBvblNsaWRlckNoYW5nZSwgb25Td2lwZUNoYW5nZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17d2lkZ2V0LmlzRnVsbD8gJ2Z1bGx3aWRnZXQgY29sdW1uU3BhbjMgcm93U3BhbjEgcGxhY2Vob2xkZXInOiAnY29sdW1uU3BhbjMgcm93U3BhbjEgcGxhY2Vob2xkZXInfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBpZD17XCJ3aWRnZXRfXCIgKyB3aWRnZXQuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZSBwYW5lbC1hY3Rpb25zIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0+e3dpZGdldC5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19PjxhIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIHBhbmVsLWFjdGlvbnMgcGFuZWwtZnVsbHNjcmVlblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25GdWxsU2NyZWVuKHRoaXMucHJvcHMud2lkZ2V0LCB0aGlzLmdldFdpZGdldFR5cGUod2lkZ2V0KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCJUb2dnbGUgRnVsbHNjcmVlblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiIHN0eWxlPXt7Y29sb3I6IFwiIzMxQkFCMFwifX0+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wid2lkZ2V0LWNvbnRhaW5lcl9cIiArIHdpZGdldC5pZH0gY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0V2lkZ2V0SW5uZXJIdG1sKHdpZGdldCwgb25PcGFjaXR5Q2hhbmdlZCwgb3BhY2l0eVZhbHVlLCBvblNsaWRlckNoYW5nZSwgb25Td2lwZUNoYW5nZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZ2VuZXJhdGVncmlkY29sdW1uKHgsIHcpe1xuICAgICAgICByZXR1cm4gKHggKyAxKSArICcgLyBzcGFuICcgKyB3O1xuICAgIH07XG4gICAgZ2VuZXJhdGVncmlkcm93KHgsIGgpe1xuICAgICAgICByZXR1cm4gKHggKyAxKSArICcgLyBzcGFuICcgKyBoO1xuICAgIH07XG4gICAgZ2V0V2lkZ2V0VHlwZShhd2lkZ2V0KVxuICAgIHtcbiAgICAgICAgaWYoKGF3aWRnZXQuZHVhbEltYWdlQ29sbGVjdGlvbiAmJiBhd2lkZ2V0LmR1YWxJbWFnZUNvbGxlY3Rpb24gIT0gbnVsbCkgfHwgKGF3aWRnZXQuSW1hZ2VBc3NldCAmJiBhd2lkZ2V0LkltYWdlQXNzZXQubGVuZ3RoID4gMCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBcIm1hcHdpZGdldFwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3dGV4dCA9IGF3aWRnZXQucHJvcGVydGllc1swXTtcbiAgICAgICAgaWYodGhpcy5pbWFnZUNvbGxlY3Rpb25MaXN0LmluY2x1ZGVzKHd0ZXh0KSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFwibWFwd2lkZ2V0XCI7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLmdyYXBoQ29udHJvbExpc3QuaW5jbHVkZXMod3RleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJncmFwaHdpZGdldFwiO1xuICAgICAgICB9ZWxzZSBpZiAod3RleHQgPT09IFwiZ2V0U3RhdHNcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwic3RhdHN3aWRnZXRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInVuZGVmaW5lZHdpZGdldFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBnZXRDbGFzc05hbWVzKGZ1bGxTdGF0ZSwgYywgcilcbiAgICB7XG4gICAgICAgIGxldCBjbGFzc25hbWVzID0gJ3BsYWNlaG9sZGVyJztcbiAgICAgICAgaWYoZnVsbFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc25hbWVzICs9IFwiIGZ1bGx3aWRnZXRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICBjbGFzc25hbWVzICs9IGMuaW5jbHVkZXMoXCJzcGFuIDEyXCIpPyBcIiBmdWxsY29sdW1uc3BhblwiOiBjLmluY2x1ZGVzKFwic3BhbiA5XCIpPyBcIiBjb2x1bW5TcGFuOVwiOiBjLmluY2x1ZGVzKFwic3BhbiA2XCIpPyBcIiBjb2x1bW5TcGFuNlwiOiBcIiBjb2x1bW5TcGFuM1wiO1xuICAgICAgICBjbGFzc25hbWVzICs9IHIuaW5jbHVkZXMoXCJzcGFuIDJcIik/IFwiIHJvd1NwYW4yXCI6IHIuaW5jbHVkZXMoXCJzcGFuIDNcIik/IFwiIHJvd1NwYW4zXCI6IFwiIHJvd1NwYW4xXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzbmFtZXM7XG4gICAgfTtcbiAgICBnZXRXaWRnZXRJbm5lckh0bWwod2lkZ2V0LCBvbk9wYWNpdHlDaGFuZ2VkLCBvcGFjaXR5VmFsdWUsIG9uU2xpZGVyQ2hhbmdlLCBvblN3aXBlQ2hhbmdlKXtcbiAgICAgICAgbGV0IHd0ZXh0ID0gd2lkZ2V0LnByb3BlcnRpZXNbMF07XG4gICAgICAgIGxldCBjb250cm9sO1xuICAgICAgICBsZXQgc2xpZGVyO1xuICAgICAgICBpZih0aGlzLmltYWdlQ29sbGVjdGlvbkxpc3QuaW5jbHVkZXMod3RleHQpIHx8ICh3aWRnZXQuZHVhbEltYWdlQ29sbGVjdGlvbiAmJiB3aWRnZXQuZHVhbEltYWdlQ29sbGVjdGlvbiAhPSBudWxsKSB8fCAod2lkZ2V0LkltYWdlQXNzZXQgJiYgd2lkZ2V0LkltYWdlQXNzZXQubGVuZ3RoID4gMCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZyb250XCI+PE1hcFdpZGdldCB3aWRnZXQ9e3dpZGdldH0gb25PcGFjaXR5Q2hhbmdlPXtvbk9wYWNpdHlDaGFuZ2VkfSBvcGFjaXR5VmFsdWU9e29wYWNpdHlWYWx1ZX0gb25TbGlkZXJDaGFuZ2U9e29uU2xpZGVyQ2hhbmdlfSBvblN3aXBlQ2hhbmdlPXtvblN3aXBlQ2hhbmdlfS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5ncmFwaENvbnRyb2xMaXN0LmluY2x1ZGVzKHd0ZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnRcIj48R3JhcGhXaWRnZXQgd2lkZ2V0PXt3aWRnZXR9Lz48L2Rpdj5cbiAgICAgICAgfWVsc2UgaWYgKHd0ZXh0ID09PSBcImdldFN0YXRzXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZyb250XCI+PFN0YXRzV2lkZ2V0IHdpZGdldD17d2lkZ2V0fS8+PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFIZDNkd0FBQUNINUJBQUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09XCIgd2lkdGggPVwiMjAwXCIgaGVpZ2h0ID1cIjIwMFwiY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiAvPjtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNsYXNzIE1hcFdpZGdldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB3aWRnZXQgPSB0aGlzLnByb3BzLndpZGdldDtcblxuICAgICAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17XCJ3aWRnZXRtYXBfXCIgKyB3aWRnZXQuaWR9IGNsYXNzTmFtZT1cIm1pbm1hcHdpZGdldFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIG1pbkhlaWdodDpcIjIwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RoaXMuZ2V0U2xpZGVyQ29udHJvbCgpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH07XG4gICAgZ2V0U2xpZGVyQ29udHJvbCgpe1xuICAgICAgICB2YXIgd2lkZ2V0ID0gdGhpcy5wcm9wcy53aWRnZXQ7XG4gICAgICAgIGNvbnN0IG9uT3BhY2l0eUNoYW5nZSA9IHRoaXMucHJvcHMub25PcGFjaXR5Q2hhbmdlO1xuICAgICAgICBjb25zdCBvblNsaWRlckNoYW5nZSA9IHRoaXMucHJvcHMub25TbGlkZXJDaGFuZ2U7XG4gICAgICAgIGNvbnN0IG9uU3dpcGVDaGFuZ2UgPSB0aGlzLnByb3BzLm9uU3dpcGVDaGFuZ2U7XG5cbiAgICAgICAgY29uc3Qgd2lkZ2V0SWQgPSBcIndpZGdldG1hcF9cIiArIHdpZGdldC5pZDtcbiAgICAgICAgaWYod2lkZ2V0LmR1YWxMYXllciB8fCB3aWRnZXQuZHVhbEltYWdlQ29sbGVjdGlvbil7XG4gICAgICAgICAgICB2YXIgb1N0eWxlID0ge2Rpc3BsYXk6IHdpZGdldC5zbGlkZXJUeXBlID09ICdvcGFjaXR5Jz8gJ2Jsb2NrJzogJ25vbmUnfTtcbiAgICAgICAgICAgIHZhciBzU3R5bGUgPSB7ZGlzcGxheTogd2lkZ2V0LnNsaWRlclR5cGUgPT0gJ3N3aXBlJz8gJ2Jsb2NrJzogJ25vbmUnfTtcbiAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e3RoaXMucHJvcHMud2lkZ2V0LnNsaWRlclR5cGUgPT0gJ29wYWNpdHknPyAnc3dpcGUnOiAnb3BhY2l0eSd9IHN0eWxlPXt7d2lkdGg6IFwiODBweFwiLCBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbjogXCI4cHggMCAwIDVweFwifX0gb25DbGljaz17KGV2dCkgPT4gb25TbGlkZXJDaGFuZ2Uod2lkZ2V0LCB3aWRnZXQuaWQsIGV2dCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInJhbmdlXCIgY2xhc3NOYW1lID0gXCJtYXBSYW5nZSBkdWFsXCIgaWQgPSB7XCJyYW5nZVdpZGdldF9cIiArIHdpZGdldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMucHJvcHMud2lkZ2V0Lm9wYWNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4gPSBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4ID0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBcIi4wMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZXZ0KSA9PiBvbk9wYWNpdHlDaGFuZ2Uod2lkZ2V0LCB3aWRnZXQuaWQsIGV2dCApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dCA9IHsoZXZ0KSA9PiBvbk9wYWNpdHlDaGFuZ2Uod2lkZ2V0LCB3aWRnZXQuaWQsIGV2dCApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e29TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzc05hbWU9XCJtYXBSYW5nZSBkdWFsXCIgaWQ9e1wic3dpcGVXaWRnZXRfXCIgKyB3aWRnZXQuaWR9IG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIi4wMVwiIHZhbHVlPXt0aGlzLnByb3BzLndpZGdldC5zd2lwZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhldnQpID0+IG9uU3dpcGVDaGFuZ2Uod2lkZ2V0LCB3aWRnZXQuaWQsIGV2dCApfVxuICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQgPSB7KGV2dCkgPT4gb25Td2lwZUNoYW5nZSh3aWRnZXQsIHdpZGdldC5pZCwgZXZ0ICl9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NTdHlsZX1cbiAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiA8aW5wdXQgdHlwZSA9IFwicmFuZ2VcIiBjbGFzc05hbWUgPSBcIm1hcFJhbmdlXCIgaWQgPSB7XCJyYW5nZVdpZGdldF9cIiArIHdpZGdldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5wcm9wcy53aWRnZXQub3BhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluID0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4ID0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcCA9IFwiLjAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGV2dCkgPT4gb25PcGFjaXR5Q2hhbmdlKHdpZGdldCwgd2lkZ2V0LmlkLCBldnQgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dCA9IHsoZXZ0KSA9PiBvbk9wYWNpdHlDaGFuZ2Uod2lkZ2V0LCB3aWRnZXQuaWQsIGV2dCApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgIH07XG4gICAgZ2V0UmFzdGVyQnlCYXNlbWFwQ29uZmlnKGJhc2VtYXApXG4gICAge1xuICAgICAgICBsZXQgcmFzdGVyO1xuICAgICAgICBpZihiYXNlbWFwID09IG51bGwgfHwgYmFzZW1hcC5pZCA9PSAnb3NtJylcbiAgICAgICAge1xuICAgICAgICAgICAgcmFzdGVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5PU00oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBtZXJjYXRvci5jcmVhdGVTb3VyY2UoYmFzZW1hcC5zb3VyY2VDb25maWcpXG4gICAgICAgICAgICByYXN0ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYXN0ZXI7XG4gICAgfTtcbiAgICBnZXRHYXRld2F5VXJsKHdpZGdldCwgY29sbGVjdGlvbk5hbWUpe1xuICAgICAgICB2YXIgdXJsID0gJyc7XG4gICAgICAgIGlmKHdpZGdldC5maWx0ZXJUeXBlICE9IG51bGwgJiYgd2lkZ2V0LmZpbHRlclR5cGUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZnRzID0geydMQU5EU0FUNSc6ICdMYW5kc2F0NUZpbHRlcmVkJywgJ0xBTkRTQVQ3JzogJ0xhbmRzYXQ3RmlsdGVyZWQnLCAnTEFORFNBVDgnOidMYW5kc2F0OEZpbHRlcmVkJywgJ1NlbnRpbmVsMic6ICdGaWx0ZXJlZFNlbnRpbmVsJ307XG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly9jb2xsZWN0LmVhcnRoOjg4ODgvXCIgKyBmdHNbd2lkZ2V0LmZpbHRlclR5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYod2lkZ2V0LkltYWdlQXNzZXQgJiYgd2lkZ2V0LkltYWdlQXNzZXQubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vY29sbGVjdC5lYXJ0aDo4ODg4L2ltYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZignSW1hZ2VDb2xsZWN0aW9uQ3VzdG9tJyA9PSB3aWRnZXQucHJvcGVydGllc1swXSl7XG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly9jb2xsZWN0LmVhcnRoOjg4ODgvbWVhbkltYWdlQnlNb3NhaWNDb2xsZWN0aW9uc1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29sbGVjdGlvbk5hbWUudHJpbSgpLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovL2NvbGxlY3QuZWFydGg6ODg4OC9jbG91ZE1hc2tJbWFnZUJ5TW9zYWljQ29sbGVjdGlvblwiO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovL2NvbGxlY3QuZWFydGg6ODg4OC9JbWFnZUNvbGxlY3Rpb25ieUluZGV4XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuICAgIGdldEltYWdlUGFyYW1zKHdpZGdldCl7XG4gICAgICAgIHZhciB2aXNQYXJhbXM7XG4gICAgICAgIGlmKHdpZGdldC52aXNQYXJhbXMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmlzUGFyYW1zID0gJC5wYXJzZUpTT04od2lkZ2V0LnZpc1BhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHZpc1BhcmFtcyA9IHdpZGdldC52aXNQYXJhbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWluO1xuICAgICAgICAgICAgdmFyIG1heDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldC5taW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHdpZGdldC5taW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldC5tYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHdpZGdldC5tYXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlzUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgICAgIGJhbmRzOiB3aWRnZXQuYmFuZHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZpc1BhcmFtcztcbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHdpZGdldCA9IHRoaXMucHJvcHMud2lkZ2V0O1xuICAgICAgICB2YXIgYmFzZW1hcCA9IHdpZGdldC5iYXNlTWFwO1xuICAgICAgICB2YXIgcmFzdGVyID0gIHRoaXMuZ2V0UmFzdGVyQnlCYXNlbWFwQ29uZmlnKGJhc2VtYXApO1xuXG4gICAgICAgIHZhciBtYXBkaXYgPSBcIndpZGdldG1hcF9cIiArIHdpZGdldC5pZDtcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBvbC5NYXAoe1xuICAgICAgICAgICAgbGF5ZXJzOiBbcmFzdGVyXSxcbiAgICAgICAgICAgIHRhcmdldDogbWFwZGl2LFxuICAgICAgICAgICAgdmlldzogbmV3IG9sLlZpZXcoe1xuICAgICAgICAgICAgICAgIGNlbnRlcjogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHByb2plY3Rpb246IFwiRVBTRzozODU3XCIsXG4gICAgICAgICAgICAgICAgem9vbTogNFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpZDogXCJ3aWRnZXRtYXBvYmplY3RfXCIgKyB3aWRnZXQuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcC5nZXRWaWV3KCkub24oJ3Byb3BlcnR5Y2hhbmdlJywgb25wcm9wZXJ0eWNoYW5nZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25wcm9wZXJ0eWNoYW5nZSgpe1xuICAgICAgICAgICAgbWFwLmRpc3BhdGNoRXZlbnQoJ21vdmVzdGFydCcpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuICAgICAgICAgICAgdmlldy51bigncHJvcGVydHljaGFuZ2UnLCBvbnByb3BlcnR5Y2hhbmdlKTtcbiAgICAgICAgICAgIG1hcC5vbignbW92ZWVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZpZXcub24oJ3Byb3BlcnR5Y2hhbmdlJywgb25wcm9wZXJ0eWNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5vbihcIm1vdmVzdGFydFwiLCB0aGlzLnBhdXNlR2VlTGF5ZXIpO1xuICAgICAgICBtYXAub24oXCJtb3ZlZW5kXCIsIHRoaXMucmVzdW1lR2VlTGF5ZXIpO1xuICAgICAgICBtYXBXaWRnZXRBcnJheVttYXBkaXZdID0gbWFwO1xuXG4gICAgICAgIGlmIChwcm9qQU9JID09PSBcIlwiKSB7XG4gICAgICAgICAgICBwcm9qQU9JID0gWy0xMDguMzAzMjIyNjU2MjUsIDIxLjMzNTQ0OTIxODc1LCAtMTA1LjM0NzkwMDM5MDYyNSwgMjMuNTMyNzE0ODQzNzVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9qQU9JID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcHJvakFPSSA9ICQucGFyc2VKU09OKHByb2pBT0kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9qQU9JKSB7XG4gICAgICAgICAgICBtYXBXaWRnZXRBcnJheVtcIndpZGdldG1hcF9cIiArIHdpZGdldC5pZF0uZ2V0VmlldygpLmZpdChcbiAgICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShbcHJvakFPSVswXSwgcHJvakFPSVsxXV0sIFwiRVBTRzo0MzI2XCIsIFwiRVBTRzozODU3XCIpLmNvbmNhdChvbC5wcm9qLnRyYW5zZm9ybShbcHJvakFPSVsyXSwgcHJvakFPSVszXV0sIFwiRVBTRzo0MzI2XCIsIFwiRVBTRzozODU3XCIpKSxcbiAgICAgICAgICAgICAgICBtYXBXaWRnZXRBcnJheVtcIndpZGdldG1hcF9cIiArIHdpZGdldC5pZF0uZ2V0U2l6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwV2lkZ2V0QXJyYXlbXCJ3aWRnZXRtYXBfXCIgKyB3aWRnZXQuaWRdLmdldFZpZXcoKS5maXQoXG4gICAgICAgICAgICAgICAgcHJvakFPSSxcbiAgICAgICAgICAgICAgICBtYXBXaWRnZXRBcnJheVtcIndpZGdldG1hcF9cIiArIHdpZGdldC5pZF0uZ2V0U2l6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvc3RPYmplY3QgPSB7fTtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIHZhciBkYXRlRnJvbSA9ICcnO1xuICAgICAgICB2YXIgZGF0ZVRvID0gJyc7XG4gICAgICAgIHZhciByZXF1ZXN0ZWRJbmRleCA9ICcnO1xuICAgICAgICB2YXIgdXJsID0gJyc7XG4gICAgICAgIHZhciBkdWFsSW1hZ2VPYmplY3QgPSBudWxsO1xuICAgICAgICB2YXIgYmFuZHMgPSBcIlwiO1xuICAgICAgICBpZiAod2lkZ2V0LnByb3BlcnRpZXMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBiYW5kcyA9IHdpZGdldC5wcm9wZXJ0aWVzWzRdO1xuICAgICAgICB9XG4gICAgICAgIHdpZGdldC5iYW5kcyA9IGJhbmRzO1xuICAgICAgICB2YXIgbWluID0gXCJcIjtcbiAgICAgICAgdmFyIG1heCA9IFwiMC4zXCI7XG4gICAgICAgIHZhciB2aXNQYXJhbXM7XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKkNoZWNrIGhlcmUgaWYgd2lkZ2V0IGlzIGR1YWxJbWFnZUNvbGxlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICBpZih3aWRnZXQuZHVhbEltYWdlQ29sbGVjdGlvbiAgJiYgd2lkZ2V0LmR1YWxJbWFnZUNvbGxlY3Rpb24gIT0gbnVsbCl7XG5cbiAgICAgICAgICAgIC8vc3RpbGwgaGF2ZSB0byBtYWtlIHRoZSBzYW1lIHBvc3RPYmplY3QsIGJ1dCBzZXQgYSBkaWZmZXJlbnQgY2FsbGJhY2sgdG8gcmVjYWxsIGZvciBzZWNvbmQgbGF5ZXJcbiAgICAgICAgICAgIC8vIG1pZ2h0IGJlIGJlc3QgdG8gcmV3cml0ZSB0aGUgb3RoZXIgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgICAgICAgIC8vaG1tbW0sIG1heWJlIGkgY2FuIGhhbmRsZSBhbGwgb2YgdGhpcyBsb2dpYyBpbiB0aGUgY2FsbGJhY2sgaW5zdGVhZCBieSBzZXR0aW5nIGEgZGlmZmVyZW50IHZhcmlhYmxlXG4gICAgICAgICAgICB2YXIgZmlyc3RJbWFnZSA9IHdpZGdldC5kdWFsSW1hZ2VDb2xsZWN0aW9uWzBdO1xuICAgICAgICAgICAgdmFyIHNlY29uZEltYWdlID0gd2lkZ2V0LmR1YWxJbWFnZUNvbGxlY3Rpb25bMV07XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGZpcnN0SW1hZ2UuY29sbGVjdGlvblR5cGU7XG4gICAgICAgICAgICByZXF1ZXN0ZWRJbmRleCA9IGNvbGxlY3Rpb25OYW1lID09PSBcIkltYWdlQ29sbGVjdGlvbk5EVklcIiA/ICdORFZJJyA6IGNvbGxlY3Rpb25OYW1lID09PSBcIkltYWdlQ29sbGVjdGlvbkVWSVwiID8gJ0VWSScgOiBjb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25FVkkyXCIgPyAnRVZJMicgOiBjb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORE1JXCIgPyAnTkRNSScgOiBjb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORFdJXCIgPyAnTkRXSScgOiAnJztcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgPT09IFwiSW1hZ2VDb2xsZWN0aW9uTkRWSVwiID8gJycgOiBjb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25FVklcIiA/ICcnIDogY29sbGVjdGlvbk5hbWUgPT09IFwiSW1hZ2VDb2xsZWN0aW9uRVZJMlwiID8gJycgOiBjb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORE1JXCIgPyAnJyA6IGNvbGxlY3Rpb25OYW1lID09PSBcIkltYWdlQ29sbGVjdGlvbk5EV0lcIiA/ICcnIDogY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICBkYXRlRnJvbSA9IGZpcnN0SW1hZ2Uuc3RhcnREYXRlO1xuICAgICAgICAgICAgZGF0ZVRvID0gZmlyc3RJbWFnZS5lbmREYXRlO1xuXG4gICAgICAgICAgICB2YXIgc2hvcnRXaWRnZXQgPSB7fTtcbiAgICAgICAgICAgIHNob3J0V2lkZ2V0LmZpbHRlclR5cGUgPSBmaXJzdEltYWdlLmZpbHRlclR5cGU7XG4gICAgICAgICAgICBzaG9ydFdpZGdldC5wcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICBzaG9ydFdpZGdldC5wcm9wZXJ0aWVzLnB1c2goY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRHYXRld2F5VXJsKHNob3J0V2lkZ2V0LCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICBzaG9ydFdpZGdldC52aXNQYXJhbXMgPSBmaXJzdEltYWdlLnZpc1BhcmFtcztcbiAgICAgICAgICAgIHNob3J0V2lkZ2V0Lm1pbiA9IGZpcnN0SW1hZ2UubWluICE9IG51bGw/IGZpcnN0SW1hZ2UubWluOiAnJztcbiAgICAgICAgICAgIHNob3J0V2lkZ2V0Lm1heCA9IGZpcnN0SW1hZ2UubWF4ICE9IG51bGw/IGZpcnN0SW1hZ2UubWF4OiAnJztcbiAgICAgICAgICAgIHNob3J0V2lkZ2V0LmJhbmQgPSBmaXJzdEltYWdlLmJhbmQgIT0gbnVsbD8gZmlyc3RJbWFnZS5iYW5kOiAnJztcbiAgICAgICAgICAgIHBvc3RPYmplY3QudmlzUGFyYW1zID0gdGhpcy5nZXRJbWFnZVBhcmFtcyhzaG9ydFdpZGdldCk7XG5cbiAgICAgICAgICAgIGlmKHBvc3RPYmplY3QudmlzUGFyYW1zLmNsb3VkTGVzc1RoYW4pIHtcbiAgICAgICAgICAgICAgICBwb3N0T2JqZWN0LmJhbmRzID0gcG9zdE9iamVjdC52aXNQYXJhbXMuYmFuZHM7XG4gICAgICAgICAgICAgICAgcG9zdE9iamVjdC5taW4gPSBwb3N0T2JqZWN0LnZpc1BhcmFtcy5taW47XG4gICAgICAgICAgICAgICAgcG9zdE9iamVjdC5tYXggPSBwb3N0T2JqZWN0LnZpc1BhcmFtcy5tYXg7XG4gICAgICAgICAgICAgICAgcG9zdE9iamVjdC5jbG91ZExlc3NUaGFuID0gcGFyc2VJbnQocG9zdE9iamVjdC52aXNQYXJhbXMuY2xvdWRMZXNzVGhhbik7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAvL0NyZWF0ZSB0aGUgYWpheCBvYmplY3QgZm9yIHRoZSBzZWNvbmQgY2FsbCBoZXJlXG4gICAgICAgICAgICBkdWFsSW1hZ2VPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSA9IHNlY29uZEltYWdlLmNvbGxlY3Rpb25UeXBlO1xuICAgICAgICAgICAgZHVhbEltYWdlT2JqZWN0LmluZGV4ID0gZHVhbEltYWdlT2JqZWN0LmNvbGxlY3Rpb25OYW1lID09PSBcIkltYWdlQ29sbGVjdGlvbk5EVklcIiA/ICdORFZJJyA6IGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25FVklcIiA/ICdFVkknIDogZHVhbEltYWdlT2JqZWN0LmNvbGxlY3Rpb25OYW1lID09PSBcIkltYWdlQ29sbGVjdGlvbkVWSTJcIiA/ICdFVkkyJyA6IGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORE1JXCIgPyAnTkRNSScgOiBkdWFsSW1hZ2VPYmplY3QuY29sbGVjdGlvbk5hbWUgPT09IFwiSW1hZ2VDb2xsZWN0aW9uTkRXSVwiID8gJ05EV0knIDogJyc7XG4gICAgICAgICAgICBkdWFsSW1hZ2VPYmplY3QuY29sbGVjdGlvbk5hbWUgPSBkdWFsSW1hZ2VPYmplY3QuY29sbGVjdGlvbk5hbWUgPT09IFwiSW1hZ2VDb2xsZWN0aW9uTkRWSVwiID8gJycgOiBkdWFsSW1hZ2VPYmplY3QuY29sbGVjdGlvbk5hbWUgPT09IFwiSW1hZ2VDb2xsZWN0aW9uRVZJXCIgPyAnJyA6IGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25FVkkyXCIgPyAnJyA6IGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORE1JXCIgPyAnJyA6IGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORFdJXCIgPyAnJyA6IGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIGR1YWxJbWFnZU9iamVjdC5kYXRlRnJvbSA9IHNlY29uZEltYWdlLnN0YXJ0RGF0ZTtcbiAgICAgICAgICAgIGR1YWxJbWFnZU9iamVjdC5kYXRlVG8gPSBzZWNvbmRJbWFnZS5lbmREYXRlO1xuICAgICAgICAgICAgIHZhciBzaG9ydFdpZGdldDIgPSB7fTtcbiAgICAgICAgICAgIHNob3J0V2lkZ2V0Mi5maWx0ZXJUeXBlID0gc2Vjb25kSW1hZ2UuZmlsdGVyVHlwZTtcbiAgICAgICAgICAgIHNob3J0V2lkZ2V0Mi5wcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICBzaG9ydFdpZGdldDIucHJvcGVydGllcy5wdXNoKGR1YWxJbWFnZU9iamVjdC5jb2xsZWN0aW9uTmFtZSk7XG5cbiAgICAgICAgICAgIGR1YWxJbWFnZU9iamVjdC51cmwgPSB0aGlzLmdldEdhdGV3YXlVcmwoc2hvcnRXaWRnZXQyLCBkdWFsSW1hZ2VPYmplY3QuY29sbGVjdGlvbk5hbWUpO1xuXG4gICAgICAgICAgICBzaG9ydFdpZGdldDIudmlzUGFyYW1zID0gc2Vjb25kSW1hZ2UudmlzUGFyYW1zO1xuICAgICAgICAgICAgc2hvcnRXaWRnZXQyLm1pbiA9IHNlY29uZEltYWdlLm1pbiAhPSBudWxsPyBzZWNvbmRJbWFnZS5taW46ICcnO1xuICAgICAgICAgICAgc2hvcnRXaWRnZXQyLm1heCA9IHNlY29uZEltYWdlLm1heCAhPSBudWxsPyBzZWNvbmRJbWFnZS5tYXg6ICcnO1xuICAgICAgICAgICAgc2hvcnRXaWRnZXQyLmJhbmQgPSBzZWNvbmRJbWFnZS5iYW5kICE9IG51bGw/IHNlY29uZEltYWdlLmJhbmQ6ICcnO1xuICAgICAgICAgICAgaWYoc2hvcnRXaWRnZXQyLnZpc1BhcmFtcyAmJiBzaG9ydFdpZGdldDIudmlzUGFyYW1zLmNsb3VkTGVzc1RoYW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGR1YWxJbWFnZU9iamVjdC5iYW5kcyA9IHNob3J0V2lkZ2V0Mi52aXNQYXJhbXMuYmFuZHM7XG4gICAgICAgICAgICAgICAgZHVhbEltYWdlT2JqZWN0Lm1pbiA9IHNob3J0V2lkZ2V0Mi52aXNQYXJhbXMubWluO1xuICAgICAgICAgICAgICAgIGR1YWxJbWFnZU9iamVjdC5tYXggPSBzaG9ydFdpZGdldDIudmlzUGFyYW1zLm1heDtcbiAgICAgICAgICAgICAgICBkdWFsSW1hZ2VPYmplY3QuY2xvdWRMZXNzVGhhbiA9IHBhcnNlSW50KHNob3J0V2lkZ2V0Mi52aXNQYXJhbXMuY2xvdWRMZXNzVGhhbik7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICBkdWFsSW1hZ2VPYmplY3QudmlzUGFyYW1zID0gdGhpcy5nZXRJbWFnZVBhcmFtcyhzaG9ydFdpZGdldDIpO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKlRoaXMgaXMgd2hhdCBoYXBwZW5zIGlmIG5vdCoqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IHdpZGdldC5wcm9wZXJ0aWVzWzFdO1xuICAgICAgICAgICAgZGF0ZUZyb20gPSB3aWRnZXQucHJvcGVydGllc1syXTtcbiAgICAgICAgICAgIGRhdGVUbyA9IHdpZGdldC5wcm9wZXJ0aWVzWzNdO1xuICAgICAgICAgICAgcmVxdWVzdGVkSW5kZXggPSB3aWRnZXQucHJvcGVydGllc1swXSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25ORFZJXCIgPyAnTkRWSScgOiB3aWRnZXQucHJvcGVydGllc1swXSA9PT0gXCJJbWFnZUNvbGxlY3Rpb25FVklcIiA/ICdFVkknIDogd2lkZ2V0LnByb3BlcnRpZXNbMF0gPT09IFwiSW1hZ2VDb2xsZWN0aW9uRVZJMlwiID8gJ0VWSTInIDogd2lkZ2V0LnByb3BlcnRpZXNbMF0gPT09IFwiSW1hZ2VDb2xsZWN0aW9uTkRNSVwiID8gJ05ETUknIDogd2lkZ2V0LnByb3BlcnRpZXNbMF0gPT09IFwiSW1hZ2VDb2xsZWN0aW9uTkRXSVwiID8gJ05EV0knIDogJyc7XG5cbiAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0R2F0ZXdheVVybCh3aWRnZXQsIGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHBvc3RPYmplY3QudmlzUGFyYW1zID0gdGhpcy5nZXRJbWFnZVBhcmFtcyh3aWRnZXQpO1xuXG4gICAgICAgICAgICBpZihwb3N0T2JqZWN0LnZpc1BhcmFtcy5jbG91ZExlc3NUaGFuKSB7XG4gICAgICAgICAgICAgICAgcG9zdE9iamVjdC5iYW5kcyA9IHBvc3RPYmplY3QudmlzUGFyYW1zLmJhbmRzO1xuICAgICAgICAgICAgICAgIHBvc3RPYmplY3QubWluID0gcG9zdE9iamVjdC52aXNQYXJhbXMubWluO1xuICAgICAgICAgICAgICAgIHBvc3RPYmplY3QubWF4ID0gcG9zdE9iamVjdC52aXNQYXJhbXMubWF4O1xuICAgICAgICAgICAgICAgIHBvc3RPYmplY3QuY2xvdWRMZXNzVGhhbiA9IHBhcnNlSW50KHBvc3RPYmplY3QudmlzUGFyYW1zLmNsb3VkTGVzc1RoYW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod2lkZ2V0LkltYWdlQXNzZXQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdE9iamVjdC5pbWFnZU5hbWUgPSB3aWRnZXQuSW1hZ2VBc3NldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBvc3RPYmplY3QuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgcG9zdE9iamVjdC5kYXRlRnJvbSA9IGRhdGVGcm9tO1xuICAgICAgICBwb3N0T2JqZWN0LmRhdGVUbz0gZGF0ZVRvO1xuICAgICAgICBwb3N0T2JqZWN0Lmdlb21ldHJ5PSAkLnBhcnNlSlNPTihwcm9qUGFpckFPSSk7XG4gICAgICAgIHBvc3RPYmplY3QuaW5kZXg9IHJlcXVlc3RlZEluZGV4O1xuXG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4VmFsOiB3aWRnZXQuaWQsXG4gICAgICAgICAgICBkdWFsTGF5ZXI6IHdpZGdldC5kdWFsTGF5ZXIsXG4gICAgICAgICAgICBkdWFsSW1hZ2VPYmplY3Q6IEpTT04uc3RyaW5naWZ5KGR1YWxJbWFnZU9iamVjdCksXG4gICAgICAgICAgICBkdWFsU3RhcnQ6IHdpZGdldC5kdWFsU3RhcnQsXG4gICAgICAgICAgICBkdWFsRW5kOiB3aWRnZXQuZHVhbEVuZCxcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocG9zdE9iamVjdCksXG4gICAgICAgICAgICBwb3N0T2JqZWN0OiBKU09OLnN0cmluZ2lmeShwb3N0T2JqZWN0KVxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihqcVhIUiArIHRleHRTdGF0dXMgKyBlcnJvclRocm93bik7XG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEsIF90ZXh0U3RhdHVzLCBfanFYSFIpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmVyck1zZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhkYXRhLmVyck1zZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwibWFwaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcElkID0gZGF0YS5tYXBpZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR1YWxMYXllciA9ICR0aGlzLmR1YWxMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR1YWxJbWFnZSA9ICR0aGlzLmR1YWxJbWFnZU9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgYWRkVGlsZVNlcnZlcihtYXBJZCwgdG9rZW4sIFwid2lkZ2V0bWFwX1wiICsgJHRoaXMuaW5kZXhWYWwpO1xuICAgICAgICAgICAgICAgICAgICBpZihkdWFsTGF5ZXIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWNvbmRPYmplY3QgPSBKU09OLnBhcnNlKCR0aGlzLnBvc3RPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kT2JqZWN0LmRhdGVGcm9tID0gJHRoaXMuZHVhbFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kT2JqZWN0LmRhdGVUbyA9ICR0aGlzLmR1YWxFbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4VmFsOiAkdGhpcy5pbmRleFZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoc2Vjb25kT2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGpxWEhSICsgdGV4dFN0YXR1cyArIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEsIF90ZXh0U3RhdHVzLCBfanFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGRhdGEuZXJyTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcIm1hcGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFwSWQgPSBkYXRhLm1hcGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVhbExheWVyID0gJHRoaXMuZHVhbExheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRHVhbExheWVyKG1hcElkLCB0b2tlbiwgXCJ3aWRnZXRtYXBfXCIgKyAkdGhpcy5pbmRleFZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXcm9uZyBEYXRhIFJldHVybmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihkdWFsSW1hZ2UgJiYgZHVhbEltYWdlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdvcmtpbmdPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZ09iamVjdCA9IEpTT04ucGFyc2UoZHVhbEltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdPYmplY3QgPSBkdWFsSW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3b3JraW5nT2JqZWN0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2Vjb25kT2JqZWN0ID0gd29ya2luZ09iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHVybCBiYXNlZCBvbiBkYXRhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHZhcmlhYmxlcyBuZWVkZWQgZm9yIGRhdGEgdHlwZSwgbWF5YmUgZG8gdGhpcyBhYm92ZSBzbyBpIGNhbiBqdXN0IHBhc3MgdGhlIGR1YWxJbWFnZSB0aHJ1Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB3b3JraW5nT2JqZWN0LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFZhbDogJHRoaXMuaW5kZXhWYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHNlY29uZE9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihqcVhIUiArIHRleHRTdGF0dXMgKyBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhLCBfdGV4dFN0YXR1cywgX2pxWEhSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhkYXRhLmVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcIm1hcGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFwSWQgPSBkYXRhLm1hcGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVhbExheWVyID0gJHRoaXMuZHVhbExheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRHVhbExheWVyKG1hcElkLCB0b2tlbiwgXCJ3aWRnZXRtYXBfXCIgKyAkdGhpcy5pbmRleFZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXcm9uZyBEYXRhIFJldHVybmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldyb25nIERhdGEgUmV0dXJuZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG4gICAgcGF1c2VHZWVMYXllcihlKVxuICAgIHtcbiAgICAgICAgdmFyIGxheWVycyA9IGUudGFyZ2V0LmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICAgIGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uKGx5cil7XG4gICAgICAgICAgICBpZihseXIuZ2V0KCdpZCcpICYmIGx5ci5nZXQoJ2lkJykuaW5kZXhPZignd2lkZ2V0JykgPT0wKXtcbiAgICAgICAgICAgICAgICBseXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcbiAgICByZXN1bWVHZWVMYXllcihlKVxuICAgIHtcbiAgICAgICAgaWYoZ2VlVGltZW91dFtlLnRhcmdldC5nZXQoJ3RhcmdldCcpXSl7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGdlZVRpbWVvdXRbZS50YXJnZXQuZ2V0KCd0YXJnZXQnKV0pO1xuICAgICAgICAgICAgZGVsZXRlIGdlZVRpbWVvdXRbZS50YXJnZXQuZ2V0KCd0YXJnZXQnKV07XG4gICAgICAgIH1cbiAgICAgICAgZ2VlVGltZW91dFtlLnRhcmdldC5nZXQoJ3RhcmdldCcpXSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbGF5ZXJzID0gZS50YXJnZXQuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgICAgICAgIGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uKGx5cil7XG4gICAgICAgICAgICAgICAgaWYobHlyLmdldCgnaWQnKSAmJiBseXIuZ2V0KCdpZCcpLmluZGV4T2YoJ3dpZGdldCcpID09MCl7XG4gICAgICAgICAgICAgICAgICAgIGx5ci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG59XG5cbmNsYXNzIEdyYXBoV2lkZ2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHdpZGdldCA9IHRoaXMucHJvcHMud2lkZ2V0O1xuICAgICAgICByZXR1cm4gPGRpdiBpZD17XCJ3aWRnZXRncmFwaF9cIiArIHdpZGdldC5pZH0gY2xhc3NOYW1lPVwibWlubWFwd2lkZ2V0XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPXtcImdyYXBoY29udGFpbmVyX1wiICsgd2lkZ2V0LmlkfSBjbGFzc05hbWU9XCJtaW5tYXB3aWRnZXQgZ3JhcGh3aWRnZXQgbm9ybWFsXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBpZD17XCJ3aWRnZXR0aXRsZV9cIiArIHdpZGdldC5pZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgfTtcbiAgICBjb21wb25lbnREaWRNb3VudCgpXG4gICAge1xuICAgICAgICBjb25zdCB3aWRnZXQgPSB0aGlzLnByb3BzLndpZGdldDtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gd2lkZ2V0LnByb3BlcnRpZXNbMV07XG4gICAgICAgIHZhciBpbmRleE5hbWUgPSB3aWRnZXQucHJvcGVydGllc1s0XTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgdXJsID0gJyc7XG4gICAgICAgIGlmKGNvbGxlY3Rpb25OYW1lLnRyaW0oKS5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly9jb2xsZWN0LmVhcnRoOjg4ODgvdGltZVNlcmllc0luZGV4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovL2NvbGxlY3QuZWFydGg6ODg4OC90aW1lU2VyaWVzSW5kZXgyXCI7XG4gICAgICAgIH1cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4VmFsOiB3aWRnZXQuaWQsXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZVRpbWVTZXJpZXM6IHdpZGdldC5wcm9wZXJ0aWVzWzFdLFxuICAgICAgICAgICAgICAgIHBvbHlnb246ICQucGFyc2VKU09OKHByb2pQYWlyQU9JKSxcbiAgICAgICAgICAgICAgICBpbmRleE5hbWU6IHdpZGdldC5wcm9wZXJ0aWVzWzRdLFxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVGltZVNlcmllczogd2lkZ2V0LnByb3BlcnRpZXNbMl0udHJpbSgpLmxlbmd0aCA9PSAxMCA/IHdpZGdldC5wcm9wZXJ0aWVzWzJdLnRyaW0oKSA6ICcyMDAwLTAxLTAxJyxcbiAgICAgICAgICAgICAgICBkYXRlVG9UaW1lU2VyaWVzOiB3aWRnZXQucHJvcGVydGllc1szXS50cmltKCkubGVuZ3RoID09IDEwID8gd2lkZ2V0LnByb3BlcnRpZXNbM10udHJpbSgpIDogIGRhdGUueXl5eW1tZGQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oanFYSFIgKyB0ZXh0U3RhdHVzICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhLCBfdGV4dFN0YXR1cywgX2pxWEhSKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJNc2cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZGF0YS5lcnJNc2cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInRpbWVzZXJpZXNcIikpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZXNlcmllc0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEudGltZXNlcmllcywgZnVuY3Rpb24gKGlnbm9yZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVswXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzZXJpZXNEYXRhLnB1c2goW3ZhbHVlWzBdLCB2YWx1ZVsxXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXNlcmllc0RhdGEgPSB0aW1lc2VyaWVzRGF0YS5zb3J0KHNvcnREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhXaWRnZXRBcnJheVtcIndpZGdldGdyYXBoX1wiICsgJHRoaXMuaW5kZXhWYWxdID0gY3JlYXRlQ2hhcnQoJHRoaXMuaW5kZXhWYWwsIGluZGV4TmFtZSwgdGltZXNlcmllc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBncmFwaFdpZGdldEFycmF5W1wid2lkZ2V0Z3JhcGhfXCIgKyAkdGhpcy5pbmRleFZhbF0uaWQgPSAkdGhpcy5pbmRleFZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXcm9uZyBEYXRhIFJldHVybmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuY2xhc3MgU3RhdHNXaWRnZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5wcm9wcy53aWRnZXQ7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBpZD17XCJ3aWRnZXRzdGF0c19cIiArIHdpZGdldC5pZH0gY2xhc3NOYW1lPVwibWlubWFwd2lkZ2V0XCIgc3R5bGU9e3twYWRkaW5nOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ljb24tcG9wdWxhdGlvbi5wbmdcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjMzFiYWIwXCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcInRvdGFsUG9wX1wiICsgd2lkZ2V0LmlkfSBzdHlsZT17e2NvbG9yOiBcIiM3ODc4NzhcIiwgcGFkZGluZzogXCIxMHB4IDIwcHhcIn19PlRvdGFsIHBvcHVsYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGlkPXtcInRvdGFsUG9wX1wiICsgd2lkZ2V0LmlkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2MDYwNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBwYWRkaW5nVG9wOiBcIjEycHhcIn19PjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaWNvbi1hcmVhLnBuZ1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiMzMWJhYjBcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1widG90YWxBcmVhX1wiICsgd2lkZ2V0LmlkfSBzdHlsZT17e2NvbG9yOiBcIiM3ODc4NzhcIiwgcGFkZGluZzogXCIxMHB4IDIwcHhcIn19PkFyZWE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9e1widG90YWxBcmVhX1wiICsgd2lkZ2V0LmlkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzYwNjA2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgcGFkZGluZ1RvcDogXCIxMnB4XCJ9fT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ljb24tZWxldmF0aW9uLnBuZ1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiMzMWJhYjBcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wiZWxldmF0aW9uUmFuZ2VfXCIgKyB3aWRnZXQuaWR9IHN0eWxlPXt7Y29sb3I6IFwiIzc4Nzg3OFwiLCBwYWRkaW5nOiBcIjEwcHggMjBweFwifX0+RWxldmF0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD17XCJlbGV2YXRpb25SYW5nZV9cIiArIHdpZGdldC5pZH0gc3R5bGU9e3tjb2xvcjogXCIjNjA2MDYwXCIsIGZvbnRTaXplOiBcIjE2cHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIHBhZGRpbmdUb3A6IFwiMTJweFwifX0+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5wcm9wcy53aWRnZXQ7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2NvbGxlY3QuZWFydGg6ODg4OC9nZXRTdGF0c1wiLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4VmFsOiB3aWRnZXQuaWQsXG4gICAgICAgICAgICBwb2x5VmFsOiAkLnBhcnNlSlNPTihwcm9qUGFpckFPSSksXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwYXJhbVZhbHVlOiAkLnBhcnNlSlNPTihwcm9qUGFpckFPSSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGpxWEhSICsgdGV4dFN0YXR1cyArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSwgX3RleHRTdGF0dXMsIF9qcVhIUikge1xuICAgICAgICAgICAgaWYgKGRhdGEuZXJyTXNnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSArIF90ZXh0U3RhdHVzICsgX2pxWEhSKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAkKFwiI3RvdGFsUG9wX1wiICsgJHRoaXMuaW5kZXhWYWwpLnRleHQobnVtYmVyV2l0aENvbW1hcyhkYXRhLnBvcCkpO1xuICAgICAgICAgICAgICAgICQoXCIjdG90YWxBcmVhX1wiICsgJHRoaXMuaW5kZXhWYWwpLnRleHQoY2FsY3VsYXRlQXJlYSgkdGhpcy5wb2x5VmFsKSArIFwiIGhhXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjZWxldmF0aW9uUmFuZ2VfXCIgKyAkdGhpcy5pbmRleFZhbCkudGV4dChudW1iZXJXaXRoQ29tbWFzKGRhdGEubWluRWxldikgKyBcIiAtIFwiICsgbnVtYmVyV2l0aENvbW1hcyhkYXRhLm1heEVsZXYpICsgXCIgbVwiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc29ydERhdGEoYSwgYil7XG5cbiAgICBpZiAoYVswXSA8IGJbMF0pIHJldHVybiAtMTtcbiAgICBpZiAoYVswXSA+IGJbMF0pIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlQ2hhcnQgKHdJbmRleCwgd1RleHQsIHdUaW1lc2VyaWVzRGF0YSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHJldHVybiBIaWdoY2hhcnRzLmNoYXJ0KFwiZ3JhcGhjb250YWluZXJfXCIgKyB3SW5kZXgsIHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHpvb21UeXBlOiBcInhcIlxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBzdWJ0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogZG9jdW1lbnQub250b3VjaHN0YXJ0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IFwiQ2xpY2sgYW5kIGRyYWcgaW4gdGhlIHBsb3QgYXJlYSB0byB6b29tIGluXCJcbiAgICAgICAgICAgICAgICA6IFwiUGluY2ggdGhlIGNoYXJ0IHRvIHpvb20gaW5cIlxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IHdUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGFyZWE6IHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyR3JhZGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB4MjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwgXCIjMzFiYWIwXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgWzEsIEhpZ2hjaGFydHMuQ29sb3IoXCIjMzFiYWIwXCIpLnNldE9wYWNpdHkoMCkuZ2V0KFwicmdiYVwiKV1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBwb2ludEZvcm1hdDogXCJWYWx1ZToge3BvaW50Lnl9XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJhcmVhXCIsXG4gICAgICAgICAgICBuYW1lOiB3VGV4dCxcbiAgICAgICAgICAgIGRhdGE6IHdUaW1lc2VyaWVzRGF0YSxcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMWJhYjBcIlxuICAgICAgICB9XVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIjd2lkZ2V0dGl0bGVfXCIgK3dJbmRleCApLnRleHQod1RleHQpO1xuICAgICAgICAgICAgJChcIiN3aWRnZXRncmFwaF9cIiArIHdJbmRleCArIFwiIC5oaWdoY2hhcnRzLXlheGlzXCIpLmNoaWxkcmVuKClbMF0uaW5uZXJIVE1MID0gd1RleHQ7XG5cbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHgudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiTi9BXCI7XG59XG5mdW5jdGlvbiBjYWxjdWxhdGVBcmVhIChwb2x5KSB7XG4gICAgdmFyIHNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gcG9seTtcbiAgICB2YXIgYXJlYV9tID0gc3BoZXJlLmdlb2Rlc2ljQXJlYShjb29yZGluYXRlcyk7XG4gICAgdmFyIGFyZWFfaGEgPSBhcmVhX20gLyAxMDAwMDtcbiAgICBpZiAoYXJlYV9oYSA8IDApIHtcbiAgICAgICAgYXJlYV9oYSA9IGFyZWFfaGEgKiAtMTtcbiAgICB9XG4gICAgYXJlYV9oYSA9IE1hdGgucm91bmQoYXJlYV9oYSAqIE1hdGgucG93KDEwLCA0KSkgLyBNYXRoLnBvdygxMCwgNCk7XG4gICAgcmV0dXJuIG51bWJlcldpdGhDb21tYXMoYXJlYV9oYSk7XG59XG5mdW5jdGlvbiBhZGRUaWxlU2VydmVyIChpbWFnZWlkLCB0b2tlbiwgbWFwZGl2LCBpc0R1YWwpIHtcbiAgICB2YXIgZ29vZ2xlTGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZWFydGhlbmdpbmUuZ29vZ2xlYXBpcy5jb20vbWFwL1wiICsgaW1hZ2VpZCArIFwiL3t6fS97eH0ve3l9P3Rva2VuPVwiICsgdG9rZW5cbiAgICAgICAgfSksXG4gICAgICAgIGlkOiBtYXBkaXZcbiAgICB9KTtcbiAgICBtYXBXaWRnZXRBcnJheVttYXBkaXZdLmFkZExheWVyKGdvb2dsZUxheWVyKTtcbiAgICBpZighaXNEdWFsKVxuICAgIHtcbiAgICAgICAgYWRkQnVmZmVyKG1hcFdpZGdldEFycmF5W21hcGRpdl0pO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFkZER1YWxMYXllciAoaW1hZ2VpZCwgdG9rZW4sIG1hcGRpdikge1xuICAgIHZhciBnb29nbGVMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWih7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9lYXJ0aGVuZ2luZS5nb29nbGVhcGlzLmNvbS9tYXAvXCIgKyBpbWFnZWlkICsgXCIve3p9L3t4fS97eX0/dG9rZW49XCIgKyB0b2tlblxuICAgICAgICB9KSxcbiAgICAgICAgaWQ6IG1hcGRpdiArICdfZHVhbCdcbiAgICB9KTtcbiAgICBtYXBXaWRnZXRBcnJheVttYXBkaXZdLmFkZExheWVyKGdvb2dsZUxheWVyKTtcbiAgICB2YXIgc3dpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpcGVXaWRnZXRfJyArIG1hcGRpdi5yZXBsYWNlKCd3aWRnZXRtYXBfJywgJycpKTtcblxuICAgIGdvb2dsZUxheWVyLm9uKCdwcmVjb21wb3NlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGN0eCA9IGV2ZW50LmNvbnRleHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IGN0eC5jYW52YXMud2lkdGggKiAoc3dpcGUudmFsdWUpO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KHdpZHRoLCAwLCBjdHguY2FudmFzLndpZHRoIC0gd2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsaXAoKTtcbiAgICB9KTtcblxuICAgIGdvb2dsZUxheWVyLm9uKCdwb3N0Y29tcG9zZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBjdHggPSBldmVudC5jb250ZXh0O1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH0pO1xuICAgIHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7bWFwV2lkZ2V0QXJyYXlbbWFwZGl2XS5yZW5kZXIoKTt9LCBmYWxzZSk7XG4gICAgYWRkQnVmZmVyKG1hcFdpZGdldEFycmF5W21hcGRpdl0pO1xufTtcblxuZnVuY3Rpb24gc2V0T3BhY2l0eSAodmFsdWUsIGxheWVySUQpIHtcbiAgICB0cnl7XG4gICAgdmFyIGlkID0gbGF5ZXJJRDtcbiAgICB2YXIgdGhlTGF5ZXJzID0gbWFwV2lkZ2V0QXJyYXlbbGF5ZXJJRF0uZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAobHlyKSB7XG4gICAgICAgIGlmIChpZCA9PSBseXIuZ2V0KCdpZCcpIHx8IGlkICsgJ19kdWFsJyA9PSBseXIuZ2V0KCdpZCcpKSB7XG4gICAgICAgICAgICBseXIuc2V0T3BhY2l0eSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goZSl7fVxufTtcbmZ1bmN0aW9uIGFkZEJ1ZmZlciAod2hpY2hNYXApIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB0cnkge1xuICAgICAgICAvL2NoZWNrIHRvIHNlZSB0aGUgc2hhcGUgaGVyZS4uLlxuICAgICAgICBpZiAocGxvdHNoYXBlICYmIHBsb3RzaGFwZSA9PSAnc3F1YXJlJykge1xuICAgICAgICAgICAgdmFyIGNlbnRlclBvaW50ID0gbmV3IG9sLmdlb20uUG9pbnQob2wucHJvai50cmFuc2Zvcm0oSlNPTi5wYXJzZShiY2VudGVyKS5jb29yZGluYXRlcywgXCJFUFNHOjQzMjZcIiwgXCJFUFNHOjM4NTdcIikpO1xuICAgICAgICAgICAgdmFyIHBvaW50RmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKGNlbnRlclBvaW50KTtcbiAgICAgICAgICAgIHZhciBwb2l0bkV4dGVudCA9IHBvaW50RmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlcmVkRXh0ZW50ID0gbmV3IG9sLmV4dGVudC5idWZmZXIocG9pdG5FeHRlbnQscGFyc2VJbnQoYnJhZGl1cykpO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlclBvbHlnb24gPSBuZXcgb2wuZ2VvbS5Qb2x5Z29uKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1tidWZmZXJlZEV4dGVudFswXSxidWZmZXJlZEV4dGVudFsxXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbYnVmZmVyZWRFeHRlbnRbMF0sYnVmZmVyZWRFeHRlbnRbM11dLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2J1ZmZlcmVkRXh0ZW50WzJdLGJ1ZmZlcmVkRXh0ZW50WzNdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtidWZmZXJlZEV4dGVudFsyXSxidWZmZXJlZEV4dGVudFsxXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbYnVmZmVyZWRFeHRlbnRbMF0sYnVmZmVyZWRFeHRlbnRbMV1dXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgYnVmZmVyZWRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoYnVmZmVyUG9seWdvbik7XG4gICAgICAgICAgIC8vIHZlY3RvckJ1ZmZlcnMuZ2V0U291cmNlKCkuYWRkRmVhdHVyZShidWZmZXJlZEZlYXR1cmUpO1xuXG4gICAgICAgICAgICB2YXIgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe30pO1xuICAgICAgICAgICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmVzKFtidWZmZXJlZEZlYXR1cmVdKTtcbiAgICAgICAgICAgIHZhciBsYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogdmVjdG9yU291cmNlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4YjIzMjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGljaE1hcC5hZGRMYXllcihsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbG90c2hhcGUgJiYgcGxvdHNoYXBlID09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgICB2YXIgY2lyY2xlID0gbmV3IG9sLmdlb20uQ2lyY2xlKG9sLnByb2oudHJhbnNmb3JtKEpTT04ucGFyc2UoYmNlbnRlcikuY29vcmRpbmF0ZXMsIFwiRVBTRzo0MzI2XCIsIFwiRVBTRzozODU3XCIpLCBicmFkaXVzICogMSk7XG4gICAgICAgICAgICB2YXIgQ2lyY2xlRmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKGNpcmNsZSk7XG4gICAgICAgICAgICB2YXIgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe30pO1xuICAgICAgICAgICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmVzKFtDaXJjbGVGZWF0dXJlXSk7XG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHZlY3RvclNvdXJjZSxcbiAgICAgICAgICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOGIyMzIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpY2hNYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG5cblxuICAgICAgICAgICAgLy8gZmV0Y2godGhlVVJMICsgXCIvaWQvXCIgKyBwaWQsKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC8vICAgICAudGhlbihmdW5jdGlvbihfZ2VvanNvbl9vYmplY3Qpe1xuICAgICAgICAgICAgLy8gICAgICAgICB2YXIgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmVhdHVyZXM6IChuZXcgb2wuZm9ybWF0Lkdlb0pTT04oKSkucmVhZEZlYXR1cmVzKF9nZW9qc29uX29iamVjdCwgeyBmZWF0dXJlUHJvamVjdGlvbjogJ0VQU0c6Mzg1NycgfSkgLy8gdGhpcyBpcyBpbXBvcnRhbnQgdG8ga25vdy4uLlxuICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIHZlY3RvclNvdXJjZSA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc291cmNlOiBfZ2VvanNvbl92ZWN0b3JTb3VyY2UsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOGIyMzIzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmlsbDogbnVsbFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBdXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgICAgICB3aGljaE1hcC5hZGRMYXllcihfZ2VvanNvbl92ZWN0b3JMYXllcik7XG4gICAgICAgICAgICAvLyAgICAgfSk7XG5cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoZVVSTC5yZXBsYWNlKCcvZ2VvLWRhc2gnLCAnJykgKyBcIi9nZXQtcHJvamVjdC1wbG90L1wiICsgcHJvamVjdElEICsgXCIvXCIgKyBwbG90SUQsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aGVNYXA6IHdoaWNoTWFwLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGpxWEhSICsgdGV4dFN0YXR1cyArIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEsIF90ZXh0U3RhdHVzLCBfanFYSFIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSArIF90ZXh0U3RhdHVzICsgX2pxWEhSKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2hpY2hNYXAgPSB0aGlzLnRoZU1hcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9nZW9qc29uX29iamVjdCA9IHR5cGVvZihkYXRhKSA9PSAnc3RyaW5nJz8gSlNPTi5wYXJzZShkYXRhKTogZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IChuZXcgb2wuZm9ybWF0Lkdlb0pTT04oKSkucmVhZEZlYXR1cmVzKF9nZW9qc29uX29iamVjdCwgeyBmZWF0dXJlUHJvamVjdGlvbjogJ0VQU0c6NDMyNicgfSkgLy8gdGhpcyBpcyBpbXBvcnRhbnQgdG8ga25vdyBjaGFuZ2UgdG8gcHJvcGVyIHByb2plY3Rpb24uLi5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IF9nZW9qc29uX3ZlY3RvckxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHZlY3RvclNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4YjIzMjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWNoTWFwLmFkZExheWVyKF9nZW9qc29uX3ZlY3RvckxheWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiYnVmZmVyIGZhaWxlZDogXCIgKyBlLm1lc3NhZ2UpO1xuICAgIH1cbn07XG5EYXRlLnByb3RvdHlwZS55eXl5bW1kZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtbSA9IHRoaXMuZ2V0TW9udGgoKSArIDE7IC8vIGdldE1vbnRoKCkgaXMgemVyby1iYXNlZFxuICAgIHZhciBkZCA9IHRoaXMuZ2V0RGF0ZSgpO1xuXG4gICAgcmV0dXJuIFt0aGlzLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIChtbT45ID8gJycgOiAnMCcpICsgbW0sXG4gICAgICAgIChkZD45ID8gJycgOiAnMCcpICsgZGRcbiAgICBdLmpvaW4oJy0nKTtcbn07XG52YXIgbGVmdCA9IDA7XG52YXIgcHRvcCA9IDA7XG52YXIgYnJhZGl1cyA9IGdldFBhcmFtZXRlckJ5TmFtZShcImJyYWRpdXNcIik7XG52YXIgYmNlbnRlciA9IGdldFBhcmFtZXRlckJ5TmFtZShcImJjZW50ZXJcIik7XG52YXIgcHJvakFPSSA9IGdldFBhcmFtZXRlckJ5TmFtZShcImFvaVwiKTtcbnZhciBwbG90c2hhcGUgPSBnZXRQYXJhbWV0ZXJCeU5hbWUoXCJwbG90c2hhcGVcIik7XG52YXIgcHJvamVjdElEID0gZ2V0UGFyYW1ldGVyQnlOYW1lKFwicGlkXCIpO1xudmFyIHBsb3RJRCA9IGdldFBhcmFtZXRlckJ5TmFtZShcInBsb3RpZFwiKTtcbnZhciB0aGVTcGxpdCA9IGRlY29kZVVSSShwcm9qQU9JKS5yZXBsYWNlKFwiW1wiLCBcIlwiKS5yZXBsYWNlKFwiXVwiLCBcIlwiKS5zcGxpdChcIixcIik7XG52YXIgcHJvalBhaXJBT0kgPSBcIltbXCIgKyB0aGVTcGxpdFswXSArIFwiLFwiICsgdGhlU3BsaXRbMV0gKyBcIl0sW1wiICsgdGhlU3BsaXRbMl0gKyBcIixcIiArIHRoZVNwbGl0WzFdICsgXCJdLFtcIiArIHRoZVNwbGl0WzJdICsgXCIsXCIgKyB0aGVTcGxpdFszXSArIFwiXSxbXCIgKyB0aGVTcGxpdFswXSArIFwiLFwiICsgdGhlU3BsaXRbM10gKyBcIl0sW1wiICsgdGhlU3BsaXRbMF0gKyBcIixcIiArIHRoZVNwbGl0WzFdICsgXCJdXVwiO1xudmFyIG1hcFdpZGdldEFycmF5ID0gW107XG52YXIgZ3JhcGhXaWRnZXRBcnJheSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2VvZGFzaFBhZ2UoYXJncykge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPEdlb2Rhc2gvPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoSG9sZGVyXCIpXG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=