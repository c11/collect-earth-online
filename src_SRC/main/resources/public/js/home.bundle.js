var home =
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
/******/ 		"home": 0
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
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/home.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor","collection~geodashreact~home~project"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/public/jsx/home.js":
/*!***********************************************!*\
  !*** ./src/main/resources/public/jsx/home.js ***!
  \***********************************************/
/*! exports provided: renderHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHomePage", function() { return renderHomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/mercator-openlayers.js */ "./src/main/resources/public/js/mercator-openlayers.js");
/* harmony import */ var _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      projects: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Fetch projects
      fetch(this.props.documentRoot + "/get-all-projects?userId=" + this.props.userId).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          projects: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "bcontainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "mobilespan"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row tog-effect"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBar, {
        documentRoot: this.props.documentRoot,
        userName: this.props.userName,
        projects: this.state.projects
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapPanel, {
        documentRoot: this.props.documentRoot,
        userId: this.props.userId,
        projects: this.state.projects
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MapPanel =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MapPanel, _React$Component2);

  function MapPanel(props) {
    var _this3;

    _classCallCheck(this, MapPanel);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MapPanel).call(this, props));
    _this3.state = {
      imagery: [],
      mapConfig: null
    };
    return _this3;
  }

  _createClass(MapPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      // Fetch imagery
      fetch(this.props.documentRoot + "/get-all-imagery").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this4.setState({
          imagery: data
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.mapConfig == null && this.state.imagery.length > 0) {
        var mapConfig = _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].createMap("home-map-pane", [0.0, 0.0], 1, this.state.imagery.slice(0, 1));
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].setVisibleLayer(mapConfig, this.state.imagery[0].title);
        this.setState({
          mapConfig: mapConfig
        });
      }

      if (this.state.mapConfig != null && this.props.projects.length > 0) {
        _js_mercator_openlayers_js__WEBPACK_IMPORTED_MODULE_2__["mercator"].addProjectMarkersAndZoom(this.state.mapConfig, this.props.projects, this.props.documentRoot, 40); // clusterDistance = 40, use null to disable clustering
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "mapPanel",
        className: "col-lg-9 col-md-12 pl-0 pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row no-gutters ceo-map-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "togbutton",
        className: "button col-xl-1 bg-lightgray d-none d-xl-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row h-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12 my-auto no-gutters text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "tog-symb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-caret-left"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xl-11 mr-0 ml-0 bg-lightgray"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "home-map-pane",
        style: {
          width: "100%",
          height: "100%",
          position: "fixed"
        }
      }))));
    }
  }]);

  return MapPanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function SideBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "lPanel",
    className: "col-lg-3 pr-0 pl-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-darkgreen"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "tree_label",
    id: "panelTitle"
  }, "Institutions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "tree"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateInstitutionButton, {
    userName: props.userName,
    documentRoot: props.documentRoot
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InstitutionList, {
    projects: props.projects,
    documentRoot: props.documentRoot
  })));
}

function CreateInstitutionButton(props) {
  if (props.userName != "") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "create-institution",
      href: props.documentRoot + "/institution/0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "bg-yellow text-center p-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-file"
    }), " Create New Institution"));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

var InstitutionList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(InstitutionList, _React$Component3);

  function InstitutionList(props) {
    var _this5;

    _classCallCheck(this, InstitutionList);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(InstitutionList).call(this, props));
    _this5.state = {
      institutions: []
    };
    return _this5;
  }

  _createClass(InstitutionList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      // Fetch institutions
      fetch(this.props.documentRoot + "/get-all-institutions").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this6.setState({
          institutions: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return this.state.institutions.map(function (institution, uid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Institution, {
          key: uid,
          id: institution.id,
          name: institution.name,
          documentRoot: _this7.props.documentRoot,
          projects: _this7.props.projects.filter(function (project) {
            return project.institution == institution.id;
          })
        });
      });
    }
  }]);

  return InstitutionList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function Institution(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn bg-lightgreen btn-block m-0 p-2 rounded-0",
    "data-toggle": "collapse",
    href: "#collapse" + props.id,
    role: "button",
    "aria-expanded": "false"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10 my-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tree_label text-white m-0",
    htmlFor: "c" + props.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "d-none",
    id: "c" + props.id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: ""
  }, props.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "institution_info btn btn-sm btn-outline-lightgreen",
    href: props.documentRoot + "/institution/" + props.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-info",
    style: {
      color: "white"
    }
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectList, {
    id: props.id,
    projects: props.projects,
    documentRoot: props.documentRoot
  }));
}

function ProjectList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse",
    id: "collapse" + props.id
  }, props.projects.map(function (project, uid) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
      key: uid,
      id: project.id,
      institutionId: props.id,
      editable: project.editable,
      name: project.name,
      documentRoot: props.documentRoot
    });
  }));
}

function Project(props) {
  if (props.editable == true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-lightgrey text-center p-1 row px-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-8 pr-lg-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "view-project btn btn-sm btn-outline-lightgreen btn-block",
      href: props.documentRoot + "/collection/" + props.id
    }, props.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-4 pl-lg-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "edit-project btn btn-sm btn-outline-yellow btn-block",
      href: props.documentRoot + "/project/" + props.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-edit"
    }), " Review")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-lightgrey text-center p-1 row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col mb-1 mx-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-sm btn-outline-lightgreen btn-block",
      href: props.documentRoot + "/collection/" + props.id
    }, props.name)));
  }
}

function renderHomePage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Home, {
    documentRoot: args.documentRoot,
    userId: args.userId,
    userName: args.userName
  }), document.getElementById("home"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJzdGF0ZSIsInByb2plY3RzIiwiZmV0Y2giLCJkb2N1bWVudFJvb3QiLCJ1c2VySWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwidXNlck5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk1hcFBhbmVsIiwiaW1hZ2VyeSIsIm1hcENvbmZpZyIsImxlbmd0aCIsIm1lcmNhdG9yIiwiY3JlYXRlTWFwIiwic2xpY2UiLCJzZXRWaXNpYmxlTGF5ZXIiLCJ0aXRsZSIsImFkZFByb2plY3RNYXJrZXJzQW5kWm9vbSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJTaWRlQmFyIiwiQ3JlYXRlSW5zdGl0dXRpb25CdXR0b24iLCJJbnN0aXR1dGlvbkxpc3QiLCJpbnN0aXR1dGlvbnMiLCJtYXAiLCJpbnN0aXR1dGlvbiIsInVpZCIsImlkIiwibmFtZSIsImZpbHRlciIsInByb2plY3QiLCJJbnN0aXR1dGlvbiIsImNvbG9yIiwiUHJvamVjdExpc3QiLCJlZGl0YWJsZSIsIlByb2plY3QiLCJyZW5kZXJIb21lUGFnZSIsImFyZ3MiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFD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QUFTLEVBQUMsNkNBQWI7QUFDRyxVQUFJLEVBQUVsQyxLQUFLLENBQUNJLFlBQU4sR0FBcUIsY0FBckIsR0FBc0NKLEtBQUssQ0FBQ2tDO0FBRHJELE9BRUtsQyxLQUFLLENBQUNtQyxJQUZYLENBREosQ0FESixDQURKO0FBVUg7QUFDSjs7QUFFTSxTQUFTUSxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUNqQ0Msa0RBQVEsQ0FBQ0MsTUFBVCxDQUNJLDJEQUFDLElBQUQ7QUFBTSxnQkFBWSxFQUFFRixJQUFJLENBQUN4QyxZQUF6QjtBQUF1QyxVQUFNLEVBQUV3QyxJQUFJLENBQUN2QyxNQUFwRDtBQUE0RCxZQUFRLEVBQUV1QyxJQUFJLENBQUNqQztBQUEzRSxJQURKLEVBRUlvQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSjtBQUlILEMiLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImhvbWVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluL3Jlc291cmNlcy9wdWJsaWMvanN4L2hvbWUuanNcIixcInZlbmRvcnN+YWNjb3VudH5jb2xsZWN0aW9ufmdlb2Rhc2hyZWFjdH5ob21lfmluc3RpdHV0aW9ufnByb2plY3R+dGltZXN5bmN+d2lkZ2V0bGF5b3V0ZWRpdG9yXCIsXCJjb2xsZWN0aW9ufmdlb2Rhc2hyZWFjdH5ob21lfnByb2plY3RcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbWVyY2F0b3IgfSBmcm9tIFwiLi4vanMvbWVyY2F0b3Itb3BlbmxheWVycy5qc1wiO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9qZWN0czogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gRmV0Y2ggcHJvamVjdHNcbiAgICAgICAgZmV0Y2godGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9nZXQtYWxsLXByb2plY3RzP3VzZXJJZD1cIiArIHRoaXMucHJvcHMudXNlcklkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHtwcm9qZWN0czogZGF0YX0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYmNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibW9iaWxlc3BhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdG9nLWVmZmVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXIgZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lPXt0aGlzLnByb3BzLnVzZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHM9e3RoaXMuc3RhdGUucHJvamVjdHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBQYW5lbCBkb2N1bWVudFJvb3Q9e3RoaXMucHJvcHMuZG9jdW1lbnRSb290fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17dGhpcy5wcm9wcy51c2VySWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHM9e3RoaXMuc3RhdGUucHJvamVjdHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE1hcFBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWFnZXJ5OiBbXSxcbiAgICAgICAgICAgIG1hcENvbmZpZzogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyBGZXRjaCBpbWFnZXJ5XG4gICAgICAgIGZldGNoKHRoaXMucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvZ2V0LWFsbC1pbWFnZXJ5XCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoe2ltYWdlcnk6IGRhdGF9KSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXBDb25maWcgPT0gbnVsbCAmJiB0aGlzLnN0YXRlLmltYWdlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbWFwQ29uZmlnID0gbWVyY2F0b3IuY3JlYXRlTWFwKFwiaG9tZS1tYXAtcGFuZVwiLCBbMC4wLCAwLjBdLCAxLCB0aGlzLnN0YXRlLmltYWdlcnkuc2xpY2UoMCwxKSk7XG4gICAgICAgICAgICBtZXJjYXRvci5zZXRWaXNpYmxlTGF5ZXIobWFwQ29uZmlnLCB0aGlzLnN0YXRlLmltYWdlcnlbMF0udGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwQ29uZmlnOiBtYXBDb25maWd9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXBDb25maWcgIT0gbnVsbCAmJiB0aGlzLnByb3BzLnByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lcmNhdG9yLmFkZFByb2plY3RNYXJrZXJzQW5kWm9vbSh0aGlzLnN0YXRlLm1hcENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZG9jdW1lbnRSb290LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwKTsgLy8gY2x1c3RlckRpc3RhbmNlID0gNDAsIHVzZSBudWxsIHRvIGRpc2FibGUgY2x1c3RlcmluZ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFBhbmVsXCIgY2xhc3NOYW1lPVwiY29sLWxnLTkgY29sLW1kLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgY2VvLW1hcC10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRvZ2J1dHRvblwiIGNsYXNzTmFtZT1cImJ1dHRvbiBjb2wteGwtMSBiZy1saWdodGdyYXkgZC1ub25lIGQteGwtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgbXktYXV0byBuby1ndXR0ZXJzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidG9nLXN5bWJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1sZWZ0XCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTEgbXItMCBtbC0wIGJnLWxpZ2h0Z3JheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImhvbWUtbWFwLXBhbmVcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gU2lkZUJhcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJsUGFuZWxcIiBjbGFzc05hbWU9XCJjb2wtbGctMyBwci0wIHBsLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya2dyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRyZWVfbGFiZWxcIiBpZD1cInBhbmVsVGl0bGVcIj5JbnN0aXR1dGlvbnM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZVwiPlxuICAgICAgICAgICAgICAgIDxDcmVhdGVJbnN0aXR1dGlvbkJ1dHRvbiB1c2VyTmFtZT17cHJvcHMudXNlck5hbWV9IGRvY3VtZW50Um9vdD17cHJvcHMuZG9jdW1lbnRSb290fS8+XG4gICAgICAgICAgICAgICAgPEluc3RpdHV0aW9uTGlzdCBwcm9qZWN0cz17cHJvcHMucHJvamVjdHN9IGRvY3VtZW50Um9vdD17cHJvcHMuZG9jdW1lbnRSb290fS8+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIENyZWF0ZUluc3RpdHV0aW9uQnV0dG9uKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLnVzZXJOYW1lICE9IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNyZWF0ZS1pbnN0aXR1dGlvblwiIGhyZWY9e3Byb3BzLmRvY3VtZW50Um9vdCArIFwiL2luc3RpdHV0aW9uLzBcIn0+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJnLXllbGxvdyB0ZXh0LWNlbnRlciBwLTJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlXCI+PC9pPiBDcmVhdGUgTmV3IEluc3RpdHV0aW9uPC9saT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgSW5zdGl0dXRpb25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbnN0aXR1dGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIEZldGNoIGluc3RpdHV0aW9uc1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1hbGwtaW5zdGl0dXRpb25zXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoe2luc3RpdHV0aW9uczogZGF0YX0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmluc3RpdHV0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgKGluc3RpdHV0aW9uLCB1aWQpID0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnN0aXR1dGlvbiBrZXk9e3VpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpbnN0aXR1dGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2luc3RpdHV0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFJvb3Q9e3RoaXMucHJvcHMuZG9jdW1lbnRSb290fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHM9e3RoaXMucHJvcHMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pbnN0aXR1dGlvbiA9PSBpbnN0aXR1dGlvbi5pZCl9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEluc3RpdHV0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYmctbGlnaHRncmVlbiBidG4tYmxvY2sgbS0wIHAtMiByb3VuZGVkLTBcIlxuICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgaHJlZj17XCIjY29sbGFwc2VcIiArIHByb3BzLmlkfVxuICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgbXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJlZV9sYWJlbCB0ZXh0LXdoaXRlIG0tMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtcImNcIiArIHByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZC1ub25lXCIgaWQ9e1wiY1wiICsgcHJvcHMuaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57cHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbnN0aXR1dGlvbl9pbmZvIGJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9pbnN0aXR1dGlvbi9cIiArIHByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvXCIgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwifX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFByb2plY3RMaXN0IGlkPXtwcm9wcy5pZH0gcHJvamVjdHM9e3Byb3BzLnByb2plY3RzfSBkb2N1bWVudFJvb3Q9e3Byb3BzLmRvY3VtZW50Um9vdH0vPlxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtcImNvbGxhcHNlXCIgKyBwcm9wcy5pZH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMucHJvamVjdHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAocHJvamVjdCwgdWlkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3Qga2V5PXt1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RpdHV0aW9uSWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e3Byb2plY3QuZWRpdGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFJvb3Q9e3Byb3BzLmRvY3VtZW50Um9vdH0vPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdChwcm9wcykge1xuICAgIGlmIChwcm9wcy5lZGl0YWJsZSA9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0Z3JleSB0ZXh0LWNlbnRlciBwLTEgcm93IHB4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IHByLWxnLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidmlldy1wcm9qZWN0IGJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9jb2xsZWN0aW9uL1wiICsgcHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHBsLWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWRpdC1wcm9qZWN0IGJ0biBidG4tc20gYnRuLW91dGxpbmUteWVsbG93IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmRvY3VtZW50Um9vdCArIFwiL3Byb2plY3QvXCIgKyBwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCI+PC9pPiBSZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHRncmV5IHRleHQtY2VudGVyIHAtMSByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtYi0xIG14LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmRvY3VtZW50Um9vdCArIFwiL2NvbGxlY3Rpb24vXCIgKyBwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoYXJncykge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPEhvbWUgZG9jdW1lbnRSb290PXthcmdzLmRvY3VtZW50Um9vdH0gdXNlcklkPXthcmdzLnVzZXJJZH0gdXNlck5hbWU9e2FyZ3MudXNlck5hbWV9Lz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKVxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9