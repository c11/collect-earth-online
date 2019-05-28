var institution =
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
/******/ 		"institution": 0
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
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/institution.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor"]);
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

/***/ "./src/main/resources/public/jsx/institution.js":
/*!******************************************************!*\
  !*** ./src/main/resources/public/jsx/institution.js ***!
  \******************************************************/
/*! exports provided: renderInstitutionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderInstitutionPage", function() { return renderInstitutionPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/utils.js */ "./src/main/resources/public/js/utils.js");
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_utils_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Institution =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Institution, _React$Component);

  function Institution(props) {
    var _this;

    _classCallCheck(this, Institution);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Institution).call(this, props));
    _this.state = {
      pageMode: "view",
      details: {
        id: "-1",
        name: "",
        logo: "",
        url: "",
        description: "",
        admins: []
      },
      isAdmin: false,
      projectList: [],
      userList: [],
      userListComplete: [],
      imageryList: [],
      newUserEmail: "",
      nonPendingUsers: 0,
      imageryMode: "view",
      newImageryTitle: "",
      newImageryAttribution: "",
      newGeoServerURL: "",
      newLayerName: "",
      newGeoServerParams: "",
      userId: props.userId,
      documentRoot: props.documentRoot,
      institutionId: props.institutionId,
      of_users_api_url: props.of_users_api_url,
      role: props.role,
      storage: props.storage,
      institution: [],
      imagery: [],
      projects: [],
      users: []
    };
    _this.isInstitutionMember = _this.isInstitutionMember.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.togglePageMode = _this.togglePageMode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.deleteInstitution = _this.deleteInstitution.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleImageryMode = _this.toggleImageryMode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeImagery = _this.handleChangeImagery.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeUser = _this.handleChangeUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createProject = _this.createProject.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addUser = _this.addUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateUserInstitutionRole = _this.updateUserInstitutionRole.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.deleteImagery = _this.deleteImagery.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestMembership = _this.requestMembership.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Institution, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize(this.props.documentRoot, this.props.userId, this.props.institutionId);
    }
  }, {
    key: "getInstitutionDetails",
    value: function getInstitutionDetails(institutionId) {
      var _this2 = this;

      var ref = this; //get institutions

      fetch(this.state.documentRoot + "/get-institution-details/" + institutionId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the institution details. See console for details.");
        }
      }).then(function (data) {
        _this2.setState({
          details: data
        });

        if (ref.props.userId != "") {
          ref.setState({
            isAdmin: _this2.state.details.admins.includes(parseInt(ref.props.userId))
          });
        }
      });
    }
  }, {
    key: "getProjectList",
    value: function getProjectList(userId, institutionId) {
      var _this3 = this;

      //get projects
      fetch(this.state.documentRoot + "/get-all-projects?userId=" + userId + "&institutionId=" + institutionId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the project info. See console for details.");
        }
      }).then(function (data) {
        return _this3.setState({
          projects: data
        });
      });
    }
  }, {
    key: "getUserList",
    value: function getUserList(institutionId) {
      var _this4 = this;

      //get users
      fetch(this.state.documentRoot + "/get-all-users?institutionId=" + institutionId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the user list. See console for details.");
        }
      }).then(function (data) {
        _this4.setState({
          users: data
        });

        var count = _this4.state.users.filter(function (user) {
          return user.institutionRole != "pending";
        }).length;

        _this4.setState({
          nonPendingUsers: count
        });
      });
    }
  }, {
    key: "getUserListComplete",
    value: function getUserListComplete() {
      var _this5 = this;

      //get users complete list
      fetch(this.state.documentRoot + "/get-all-users").then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the complete user list. See console for details.");
        }
      }).then(function (data) {
        return _this5.setState({
          userListComplete: data
        });
      });
    }
  }, {
    key: "getImageryList",
    value: function getImageryList(institutionId) {
      var _this6 = this;

      //get imagery
      fetch(this.props.documentRoot + "/get-all-imagery?institutionId=" + institutionId).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          alert("Error retrieving the imagery list. See console for details.");
        }
      }).then(function (data) {
        return _this6.setState({
          imagery: data
        });
      });
    }
  }, {
    key: "initialize",
    value: function initialize(documentRoot, userId, institutionId) {
      // Make the current documentRoot, userId, and institution id globally available
      var detailsNew = this.state.details;
      detailsNew.id = institutionId;
      this.setState({
        details: detailsNew
      }); // If in Create Institution mode, show the institution editing view. Otherwise, load and show the institution details

      if (this.state.details.id == "0") {
        this.setState({
          pageMode: "edit"
        });
      } else {
        this.getInstitutionDetails(this.state.details.id); // Load the projectList

        this.getProjectList(this.state.userId, this.state.details.id); // Load the userList

        this.getUserList(this.state.details.id); // Load the complete userList

        this.getUserListComplete(); // Load the imageryList

        this.getImageryList(this.state.details.id);
      }
    }
  }, {
    key: "updateInstitution",
    value: function updateInstitution() {
      var formData = new FormData();
      formData.append("userid", this.props.userId);
      formData.append("institution-name", this.state.details.name);
      formData.append("institution-logo", document.getElementById("institution-logo").files[0]);
      formData.append("institution-url", this.state.details.url);
      formData.append("institution-description", this.state.details.description);
      var documentRoot = this.state.documentRoot;
      var institutionId = this.props.institutionId;
      var holdRef = this;
      $.ajax({
        url: documentRoot + "/update-institution/" + institutionId,
        type: "POST",
        async: true,
        crossDomain: true,
        contentType: false,
        processData: false,
        data: formData
      }).fail(function () {
        alert("Error updating institution details. See console for details.");
      }).done(function (data) {
        var parsedData = JSON.parse(data);

        if (holdRef.state.details.id == 0) {
          window.location = documentRoot + "/institution/" + parsedData.id;
        } else {
          var detailsNew = holdRef.state.details;
          detailsNew.id = parsedData.id;

          if (parsedData.logo != "") {
            detailsNew.logo = parsedData.logo;
          }

          holdRef.setState({
            details: detailsNew
          });
          holdRef.setState({
            isAdmin: true
          });
        }
      });
    }
  }, {
    key: "togglePageMode",
    value: function togglePageMode() {
      if (this.state.pageMode == "view") {
        this.setState({
          pageMode: "edit"
        });
      } else {
        this.updateInstitution();
        this.setState({
          pageMode: "view"
        });
      }
    }
  }, {
    key: "cancelChanges",
    value: function cancelChanges() {
      this.setState({
        pageMode: "view"
      });
    }
  }, {
    key: "deleteInstitution",
    value: function deleteInstitution() {
      var name = this.state.details.name;
      var documentRoot = this.props.documentRoot;
      var institutionId = this.state.details.id;

      if (confirm("Do you REALLY want to delete this institution?!")) {
        $.ajax({
          url: documentRoot + "/archive-institution/" + institutionId,
          type: "POST",
          async: true,
          crossDomain: true,
          contentType: false,
          processData: false
        }).fail(function () {
          alert("Error deleting institution. See console for details.");
        }).done(function () {
          alert("Institution " + name + " has been deleted.");
          window.location = documentRoot + "/home";
        });
      }
    }
  }, {
    key: "createProject",
    value: function createProject() {
      if (this.state.details.id == 0) {
        alert("Please finish creating the institution before adding projects to it.");
      } else if (this.state.details.id == -1) {
        alert("Projects cannot be created without first selecting an institution.");
      } else {
        window.location = this.props.documentRoot + "/project/0?institution=" + this.state.details.id;
      }
    }
  }, {
    key: "updateUserInstitutionRole",
    value: function updateUserInstitutionRole(userId, email, role, e) {
      var documentRoot = this.props.documentRoot;
      var institutionId = this.props.institutionId;
      var ref = this;

      if (e != undefined) {
        role = e.target.value;
      }

      var jsonStr = {
        userId: userId,
        institutionId: this.state.details.id,
        role: role
      };
      $.ajax({
        url: documentRoot + "/update-user-institution-role",
        type: "POST",
        async: true,
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify(jsonStr)
      }).fail(function () {
        alert("Error updating user institution role. See console for details.");
      }).done(function (data) {
        alert("User " + email + " has been given role '" + role + "'.");

        if (userId == ref.props.userId && role != "admin") {
          ref.setState({
            pageMode: "view"
          });
          ref.setState({
            isAdmin: false
          });
        }

        ref.getUserList(institutionId);
      });
    }
  }, {
    key: "findUserByEmail",
    value: function findUserByEmail(userList, email) {
      return userList.find(function (user) {
        return user.email == email;
      });
    }
  }, {
    key: "addUser",
    value: function addUser() {
      if (this.state.newUserEmail == "") {
        alert("Please enter an existing user's email address.");
      } else if (this.findUserByEmail(this.state.users, this.state.newUserEmail)) {
        alert(this.state.newUserEmail + " is already a member of this institution.");
      } else {
        var newUser = this.findUserByEmail(this.state.userListComplete, this.state.newUserEmail);

        if (newUser) {
          this.updateUserInstitutionRole(newUser.id, newUser.email, "member");
          this.setState({
            newUserEmail: ""
          });
        } else {
          alert(this.state.newUserEmail + " is not an existing user's email address.");
        }
      }
    }
  }, {
    key: "isInstitutionMember",
    value: function isInstitutionMember(userId) {
      return userId == 1 || this.state.users.some(function (user) {
        return user.id == userId;
      });
    }
  }, {
    key: "requestMembership",
    value: function requestMembership() {
      var ref = this;
      $.ajax({
        url: ref.props.documentRoot + "/request-institution-membership",
        type: "POST",
        async: true,
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify({
          institutionId: ref.state.details.id,
          userId: parseInt(ref.props.userId)
        })
      }).fail(function () {
        alert("Error requesting institution membership. See console for details.");
      }).done(function (data) {
        alert("Membership requested for user " + ref.props.userId + ".");
        _js_utils_js__WEBPACK_IMPORTED_MODULE_2__["utils"].disable_element("request-membership-button");
      });
    }
  }, {
    key: "deleteImagery",
    value: function deleteImagery(imageryId) {
      if (confirm("Do you REALLY want to delete this imagery?!")) {
        var ref = this;
        var institutionId = this.props.institutionId;
        $.ajax({
          url: ref.props.documentRoot + "/delete-institution-imagery",
          type: "POST",
          async: true,
          crossDomain: true,
          contentType: "application/json",
          data: JSON.stringify({
            institutionId: institutionId,
            imageryId: imageryId
          })
        }).fail(function () {
          alert("Error deleting imagery from institution. See console for details.");
        }).done(function (data) {
          alert("Imagery " + imageryId + " has been deleted from institution " + ref.state.details.name + ".");
          ref.getImageryList(institutionId);
        });
      }
    }
  }, {
    key: "addCustomImagery",
    value: function addCustomImagery() {
      var newImageryTitle = this.state.newImageryTitle;
      var institutionId = this.props.institutionId;
      var ref = this;
      $.ajax({
        url: this.props.documentRoot + "/add-institution-imagery",
        type: "POST",
        async: true,
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify({
          institutionId: this.state.details.id,
          imageryTitle: this.state.newImageryTitle,
          imageryAttribution: this.state.newImageryAttribution,
          geoserverURL: this.state.newGeoServerURL,
          layerName: this.state.newLayerName,
          geoserverParams: this.state.newGeoServerParams
        })
      }).fail(function () {
        alert("Error adding custom imagery to institution. See console for details.");
      }).done(function (data) {
        alert("Imagery " + newImageryTitle + " has been added to institution " + ref.state.details.name + ".");
        ref.setState({
          newImageryTitle: ""
        });
        ref.setState({
          newImageryAttribution: ""
        });
        ref.setState({
          newGeoServerURL: ""
        });
        ref.setState({
          newLayerName: ""
        });
        ref.setState({
          newGeoServerParams: ""
        });
        ref.getImageryList(institutionId);
      });
    }
  }, {
    key: "toggleImageryMode",
    value: function toggleImageryMode() {
      if (this.state.imageryMode == "view") {
        this.setState({
          imageryMode: "edit"
        });
      } else {
        this.addCustomImagery();
        this.setState({
          imageryMode: "view"
        });
      }
    }
  }, {
    key: "cancelAddCustomImagery",
    value: function cancelAddCustomImagery() {
      this.setState({
        imageryMode: "view"
      });
    }
  }, {
    key: "handleChangeImagery",
    value: function handleChangeImagery(event) {
      var target = event.target;
      var value = target.value;
      var name = target.id;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleChangeUser",
    value: function handleChangeUser(event) {
      var target = event.target;
      var value = target.value;
      this.setState({
        newUserEmail: value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      var value = target.value;
      var detailsNew = this.state.details;

      if (target.id == "institution-details-name") {
        detailsNew.name = value;
      }

      if (target.id == "institution-details-url") {
        detailsNew.url = value;
      }

      if (target.id == "institution-details-description") {
        detailsNew.description = value;
      }

      this.setState({
        details: detailsNew
      });
    }
  }, {
    key: "render",
    value: function render() {
      var imagery = this.state.imagery;
      var projects = this.state.projects;
      var users = this.state.users;
      var isAdmin = this.state.isAdmin;
      var usersLength = 0;

      if (isAdmin) {
        usersLength = users.length;
      } else usersLength = this.state.nonPendingUsers;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InstitutionDescription, {
        userId: this.props.userId,
        institution: this.state.institution,
        documentRoot: this.props.documentRoot,
        of_users_api_url: this.props.of_users_api_url,
        institutionId: this.props.institutionId,
        role: this.state.role,
        storage: this.state.storage,
        pageMode: this.state.pageMode,
        details: this.state.details,
        togglePageMode: this.togglePageMode,
        handleChange: this.handleChange,
        cancelChanges: this.cancelChanges,
        deleteInstitution: this.deleteInstitution
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "imagery-list",
        className: "col-lg-4 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "header"
      }, "Imagery ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge badge-pill badge-light"
      }, imagery.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageryList, {
        newImageryTitle: this.state.newImageryTitle,
        newImageryAttribution: this.state.newImageryAttribution,
        newGeoServerURL: this.state.newGeoServerURL,
        newLayerName: this.state.newLayerName,
        newGeoServerParams: this.state.newGeoServerParams,
        cancelAddCustomImagery: this.cancelAddCustomImagery,
        handleChangeImagery: this.handleChangeImagery,
        deleteImagery: this.deleteImagery,
        userId: this.props.userId,
        documentRoot: this.props.documentRoot,
        institution: this.state.institution,
        isAdmin: isAdmin,
        institutionId: this.state.institutionId,
        details: this.state.details,
        imagery: imagery,
        pageMode: this.state.pageMode,
        getImageryList: this.getImageryList,
        imageryMode: this.state.imageryMode,
        toggleImageryMode: this.toggleImageryMode
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "project-list",
        className: "col-lg-4 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "header"
      }, "Projects ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge badge-pill  badge-light"
      }, projects.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectList, {
        userId: this.props.userId,
        documentRoot: this.props.documentRoot,
        details: this.state.details,
        projects: this.state.projects,
        isAdmin: isAdmin,
        institutionId: this.props.institutionId,
        createProject: this.createProject
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "user-list",
        className: "col-lg-4 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "header"
      }, "Users ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge badge-pill  badge-light"
      }, usersLength)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
        userId: this.props.userId,
        documentRoot: this.props.documentRoot,
        institution: this.state.institution,
        institutionId: this.props.institutionId,
        users: this.state.users,
        isAdmin: isAdmin,
        usersCompleteList: this.state.userListComplete,
        pageMode: this.state.pageMode,
        getUsers: this.getUserList,
        updateUserInstitutionRole: this.updateUserInstitutionRole,
        handleChangeUser: this.handleChangeUser,
        addUser: this.addUser,
        newUserEmail: this.state.newUserEmail,
        isInstitutionMember: this.isInstitutionMember,
        requestMembership: this.requestMembership
      }))));
    }
  }]);

  return Institution;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var InstitutionDescription =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(InstitutionDescription, _React$Component2);

  function InstitutionDescription(props) {
    _classCallCheck(this, InstitutionDescription);

    return _possibleConstructorReturn(this, _getPrototypeOf(InstitutionDescription).call(this, props));
  }

  _createClass(InstitutionDescription, [{
    key: "renderComp",
    value: function renderComp(role, pageMode, details, isAdmin, togglePageMode, deleteInstitution) {
      if (role != "") {
        if (details.id > 0 && role == "admin" && pageMode == 'view') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row justify-content-center mb-2",
            id: "institution-controls"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-3"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            id: "edit-institution",
            type: "button",
            className: "btn btn-sm btn-outline-lightgreen btn-block mt-0",
            onClick: togglePageMode
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-edit"
          }), " Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-3"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            id: "delete-institution",
            type: "button",
            className: "btn btn-sm btn-outline-danger btn-block mt-0",
            onClick: deleteInstitution
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-trash-alt"
          }), " Delete")));
        }
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(institutionId) {
      if (institutionId > 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Edit  Institution"));
      } else if (institutionId == 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Create New Institution"));
      }
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(institutionId, pageMode, togglePageMode, cancelChanges) {
      if (pageMode == 'edit' && institutionId == 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          id: "create-institution",
          className: "btn btn-sm btn-outline-lightgreen btn-block mt-0",
          onClick: togglePageMode
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-plus-square"
        }), " Create Institution");
      } else if (pageMode == 'edit' && institutionId > 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-6"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-sm btn-outline-lightgreen btn-block mt-0",
          onClick: togglePageMode
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-save"
        }), " Save Changes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-6"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-sm btn-outline-danger btn-block mt-0",
          onClick: cancelChanges
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-ban"
        }), " Cancel Changes"))));
      }
    }
  }, {
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
      var _this$props = this.props,
          documentRoot = _this$props.documentRoot,
          institutionId = _this$props.institutionId,
          role = _this$props.role,
          of_users_api_url = _this$props.of_users_api_url,
          storage = _this$props.storage,
          isAdmin = _this$props.isAdmin,
          details = _this$props.details;
      var pageMode = this.props.pageMode;

      if (pageMode == "view") {
        if (storage != null && typeof storage == "string" && storage == "local") {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: "institution-details",
            className: "row justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: "institution-view",
            className: "col-xl-6 col-lg-8 "
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-md-3",
            id: "institution-logo-container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: details.url
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "img-fluid",
            src: documentRoot + "/" + details.logo,
            alt: "logo"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            className: "col-md-9"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: details.url
          }, details.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, details.description))))), this.renderComp(role, pageMode, details, isAdmin, this.props.togglePageMode, this.props.deleteInstitution));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: "institution-details",
            className: "row justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: "institution-view",
            className: "col-xl-6 col-lg-8 "
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-md-3",
            id: "institution-logo-container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: details.url
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "img-fluid",
            src: of_users_api_url + "/group/logo/" + details.id,
            alt: "logo"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            className: "col-md-9"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: details.url
          }, details.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, details.description))))), this.renderComp(role, pageMode, details, isAdmin, this.props.togglePageMode, this.props.deleteInstitution));
        }
      } else if (pageMode == 'edit') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "institution-details",
          className: "row justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "institution-edit",
          className: "col-xl-6 col-lg-6 border pb-3 mb-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderHeader(institutionId)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: "institution-name",
          htmlFor: "institution-details-name"
        }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "institution-details-name",
          className: "form-control mb-1 mr-sm-2",
          type: "text",
          defaultValue: details.name,
          onChange: this.props.handleChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: "institution-url",
          htmlFor: "institution-details-url"
        }, "URL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "institution-details-url",
          type: "text",
          className: "form-control mb-1 mr-sm-2",
          defaultValue: details.url,
          onChange: this.props.handleChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: "institution-logo-selector",
          htmlFor: "institution-logo"
        }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "institution-logo",
          className: "form-control mb-1 mr-sm-2",
          type: "file",
          accept: "image/*",
          onChange: this.encodeImageFileAsURL
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: "institution-description",
          htmlFor: "institution-details-description"
        }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          id: "institution-details-description",
          className: "form-control",
          rows: "4",
          defaultValue: details.description,
          onChange: this.props.handleChange
        })), this.renderButtons(institutionId, pageMode, this.props.togglePageMode, this.props.cancelChanges))));
      }
    }
  }]);

  return InstitutionDescription;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var ImageryList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ImageryList, _React$Component3);

  function ImageryList(props) {
    _classCallCheck(this, ImageryList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageryList).call(this, props));
  }

  _createClass(ImageryList, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var institution = this.props.institution;
      var isAdmin = this.props.isAdmin;
      var imageryMode = this.props.imageryMode;

      if (this.props.imagery.length > 0) {
        if (imageryMode == 'view') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageryButton, {
            toggleImageryMode: this.props.toggleImageryMode,
            isAdmin: isAdmin
          }), this.props.imagery.map(function (imageryItem, uid) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Imagery, {
              key: uid,
              title: imageryItem.title,
              isAdmin: isAdmin,
              deleteImagery: function deleteImagery() {
                return _this7.props.deleteImagery(imageryItem.id);
              }
            });
          }));
        } else if (isAdmin == true && imageryMode == 'edit') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row",
            id: "add-imagery"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
            className: "mb-2 p-2 border rounded"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "newImageryTitle"
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: "form-control",
            id: "newImageryTitle",
            type: "text",
            name: "imagery-title",
            autoComplete: "off",
            onChange: this.props.handleChangeImagery,
            defaultValue: this.props.newImageryTitle
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "newImageryAttribution"
          }, "Attribution"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: "form-control",
            id: "newImageryAttribution",
            type: "text",
            name: "imagery-attribution",
            autoComplete: "off",
            onChange: this.props.handleChangeImagery,
            defaultValue: this.props.newImageryAttribution
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "newGeoServerURL"
          }, "GeoServer URL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: "form-control",
            id: "newGeoServerURL",
            type: "text",
            name: "imagery-geoserver-url",
            autoComplete: "off",
            onChange: this.props.handleChangeImagery,
            defaultValue: this.props.newGeoServerURL
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "newLayerName"
          }, "GeoServer Layer Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: "form-control",
            id: "newLayerName",
            type: "text",
            name: "imagery-layer-name",
            autoComplete: "off",
            onChange: this.props.handleChangeImagery,
            defaultValue: this.props.newLayerName
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "form-group"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "newGeoServerParams"
          }, "GeoServer Params", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "(as JSON string)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: "form-control",
            id: "newGeoServerParams",
            type: "text",
            name: "imagery-geoserver-params",
            autoComplete: "off",
            onChange: this.props.handleChangeImagery,
            defaultValue: this.props.newGeoServerParams
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "btn-group-vertical btn-block"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            id: "add-imagery-button",
            className: "btn btn-sm btn-block btn-outline-yellow btn-group",
            onClick: function onClick() {
              return _this7.props.toggleImageryMode(imageryMode);
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-plus-square"
          }), " Add New Imagery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "btn btn-sm btn-block btn-outline-danger btn-group",
            onClick: function onClick() {
              return _this7.props.cancelAddCustomImagery;
            }
          }, "Cancel")))));
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
      }
    }
  }]);

  return ImageryList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function Imagery(props) {
  if (props.isAdmin == false) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-lightgreen btn-sm btn-block"
    }, props.title)));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-10 pr-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-lightgreen btn-sm btn-block"
    }, props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-2 pl-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-danger btn-sm btn-block",
      id: "delete-imagery",
      type: "button",
      onClick: props.deleteImagery
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-none d-xl-block"
    }, " Delete "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-xl-none"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-trash-alt"
    })))));
  }
}

function ImageryButton(props) {
  if (props.isAdmin == true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-12 mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      id: "add-imagery-button",
      className: "btn btn-sm btn-block btn-outline-yellow",
      onClick: props.toggleImageryMode
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-plus-square"
    }), "Add New Imagery")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

var ProjectList =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(ProjectList, _React$Component4);

  function ProjectList(props) {
    _classCallCheck(this, ProjectList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectList).call(this, props));
  }

  _createClass(ProjectList, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      var details = this.props.details;

      if (this.props.isAdmin == true) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectButton, {
          createProject: this.props.createProject
        }), this.props.projects.map(function (project, uid) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
            key: uid,
            documentRoot: _this8.props.documentRoot,
            proj: project,
            details: details,
            isAdmin: _this8.props.isAdmin
          });
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.props.projects.map(function (project, uid) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
            key: uid,
            documentRoot: _this8.props.documentRoot,
            proj: project,
            details: details,
            isAdmin: _this8.props.isAdmin
          });
        }));
      }
    }
  }]);

  return ProjectList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function Project(props) {
  var documentRoot = props.documentRoot;
  var project = props.proj;

  if (props.isAdmin == true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-9 pr-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-sm btn-outline-lightgreen btn-block",
      href: documentRoot + "/collection/" + project.id
    }, project.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-3 pl-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-sm btn-outline-lightgreen btn-block",
      href: documentRoot + "/project/" + project.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-xl-none"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-edit"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-none d-xl-block"
    }, " Review"))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col mb-1 pr-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-sm btn-outline-lightgreen btn-block",
      href: documentRoot + "/collection/" + project.id
    }, project.name)));
  }
}

function ProjectButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "create-project",
    type: "button",
    className: "btn btn-sm btn-block btn-outline-yellow",
    onClick: props.createProject
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-plus-square"
  }), " Create New Project")));
}

var UserList =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(UserList, _React$Component5);

  function UserList(props) {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserList).call(this, props));
  }

  _createClass(UserList, [{
    key: "render",
    value: function render() {
      var _this9 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserButton, {
        userId: this.props.userId,
        documentRoot: this.props.documentRoot,
        institutionId: this.props.institutionId,
        institution: this.props.institution,
        isAdmin: this.props.isAdmin,
        users: this.props.users,
        userListComplete: this.props.userListComplete,
        updateUserInstitutionRole: this.props.updateUserInstitutionRole,
        handleChangeUser: this.props.handleChangeUser,
        newUserEmail: this.props.newUserEmail,
        addUser: this.props.addUser,
        isInstitutionMember: this.props.isInstitutionMember,
        requestMembership: this.props.requestMembership
      }), this.props.users.map(function (user, uid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
          key: uid,
          documentRoot: _this9.props.documentRoot,
          user: user,
          institution: _this9.props.institution,
          isAdmin: _this9.props.isAdmin,
          institutionRole: user.institutionRole,
          pageMode: _this9.props.pageMode,
          updateUserInstitutionRole: _this9.props.updateUserInstitutionRole
        });
      }));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var User =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(User, _React$Component6);

  function User(props) {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).call(this, props));
  }

  _createClass(User, [{
    key: "render",
    value: function render() {
      var _this10 = this;

      var user = this.props.user;
      var documentRoot = this.props.documentRoot;

      if (this.props.isAdmin == false && user.institutionRole != 'pending') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col mb-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "btn btn-sm btn-outline-lightgreen btn-block",
          href: documentRoot + "/account/" + user.id
        }, user.email)));
      }

      if (this.props.isAdmin == true) {
        if (user.institutionRole == 'pending') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-lg-9 mb-1 pr-1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "btn btn-sm btn-outline-lightgreen btn-block",
            href: documentRoot + "/account/" + user.id
          }, user.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-lg-3 mb-1 pl-0"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
            value: user.institutionRole,
            className: "custom-select custom-select-sm",
            name: "user-institution-role",
            size: "1",
            onChange: function onChange(e) {
              return _this10.props.updateUserInstitutionRole(user.id, user.email, user.institutionRole, e);
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "pending"
          }, "Pending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "member"
          }, "Member"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "admin"
          }, "Admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "not-member"
          }, "Remove")))));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-lg-9 mb-1 pr-1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "btn btn-sm btn-outline-lightgreen btn-block",
            href: documentRoot + "/account/" + user.id
          }, user.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-lg-3 mb-1 pl-0"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
            value: user.institutionRole,
            className: "custom-select custom-select-sm",
            name: "user-institution-role",
            size: "1",
            onChange: function onChange(e) {
              return _this10.props.updateUserInstitutionRole(user.id, user.email, user.institutionRole, e);
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "member"
          }, "Member"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "admin"
          }, "Admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            value: "not-member"
          }, "Remove")))));
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
      }
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var UserButton =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(UserButton, _React$Component7);

  function UserButton(props) {
    _classCallCheck(this, UserButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserButton).call(this, props));
  }

  _createClass(UserButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddUser, {
        isAdmin: this.props.isAdmin,
        handleChangeUser: this.props.handleChangeUser,
        newUserEmail: this.props.newUserEmail,
        addUser: this.props.addUser
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequestMembership, {
        requestMembership: this.props.requestMembership,
        documentRoot: this.props.documentRoot,
        userId: this.props.userId,
        institutionId: this.props.institutionId,
        isInstitutionMember: this.props.isInstitutionMember(this.props.userId)
      }));
    }
  }]);

  return UserButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function AddUser(props) {
  if (props.isAdmin == true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-9 pr-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-control form-control-sm",
      type: "email",
      name: "new-institution-user",
      autoComplete: "off",
      placeholder: "Email",
      onChange: props.handleChangeUser,
      value: props.newUserEmail
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-3 pl-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-sm btn-outline-yellow btn-block",
      name: "add-institution-user",
      onClick: props.addUser
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-xl-none"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-plus-square"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-none d-xl-block"
    }, " Add User")))));
  } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
}

function RequestMembership(props) {
  if (props.userId != '' && props.institutionId > 0 && !props.isInstitutionMember) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-sm btn-outline-yellow btn-block mb-2",
      id: "request-membership-button",
      name: "request-membership-button",
      onClick: function onClick() {
        return props.requestMembership(props.userId, props.institutionId, props.documentRoot);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-plus-square"
    }), " Request membership")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
  }
}

function renderInstitutionPage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Institution, {
    documentRoot: args.documentRoot,
    userId: args.userId,
    institutionId: args.institutionId,
    of_users_api_url: args.of_users_api_url,
    role: args.role,
    storage: args.storage,
    nonPendingUsers: args.nonPendingUsers,
    pageMode: args.pageMode
  }), document.getElementById("institution"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvbWFpbi9yZXNvdXJjZXMvcHVibGljL2pzeC9pbnN0aXR1dGlvbi5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsImVuYWJsZV9lbGVtZW50IiwiZWxlbWVudF9pZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNhYmxlX2VsZW1lbnQiLCJzaG93X2VsZW1lbnQiLCJ2aXNpYmlsaXR5IiwiaGlkZV9lbGVtZW50IiwiaGlnaGxpZ2h0X2JvcmRlciIsInNoYWRvd19zdHlsZSIsImJveFNoYWRvdyIsImxvd2xpZ2h0X2JvcmRlciIsImJsaW5rX2JvcmRlciIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiSW5zdGl0dXRpb24iLCJwcm9wcyIsInN0YXRlIiwicGFnZU1vZGUiLCJkZXRhaWxzIiwiaWQiLCJuYW1lIiwibG9nbyIsInVybCIsImRlc2NyaXB0aW9uIiwiYWRtaW5zIiwiaXNBZG1pbiIsInByb2plY3RMaXN0IiwidXNlckxpc3QiLCJ1c2VyTGlzdENvbXBsZXRlIiwiaW1hZ2VyeUxpc3QiLCJuZXdVc2VyRW1haWwiLCJub25QZW5kaW5nVXNlcnMiLCJpbWFnZXJ5TW9kZSIsIm5ld0ltYWdlcnlUaXRsZSIsIm5ld0ltYWdlcnlBdHRyaWJ1dGlvbiIsIm5ld0dlb1NlcnZlclVSTCIsIm5ld0xheWVyTmFtZSIsIm5ld0dlb1NlcnZlclBhcmFtcyIsInVzZXJJZCIsImRvY3VtZW50Um9vdCIsImluc3RpdHV0aW9uSWQiLCJvZl91c2Vyc19hcGlfdXJsIiwicm9sZSIsInN0b3JhZ2UiLCJpbnN0aXR1dGlvbiIsImltYWdlcnkiLCJwcm9qZWN0cyIsInVzZXJzIiwiaXNJbnN0aXR1dGlvbk1lbWJlciIsImJpbmQiLCJ0b2dnbGVQYWdlTW9kZSIsImhhbmRsZUNoYW5nZSIsImRlbGV0ZUluc3RpdHV0aW9uIiwidG9nZ2xlSW1hZ2VyeU1vZGUiLCJoYW5kbGVDaGFuZ2VJbWFnZXJ5IiwiaGFuZGxlQ2hhbmdlVXNlciIsImNyZWF0ZVByb2plY3QiLCJhZGRVc2VyIiwidXBkYXRlVXNlckluc3RpdHV0aW9uUm9sZSIsImRlbGV0ZUltYWdlcnkiLCJyZXF1ZXN0TWVtYmVyc2hpcCIsImluaXRpYWxpemUiLCJyZWYiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImRhdGEiLCJzZXRTdGF0ZSIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJjb3VudCIsImZpbHRlciIsInVzZXIiLCJpbnN0aXR1dGlvblJvbGUiLCJsZW5ndGgiLCJkZXRhaWxzTmV3IiwiZ2V0SW5zdGl0dXRpb25EZXRhaWxzIiwiZ2V0UHJvamVjdExpc3QiLCJnZXRVc2VyTGlzdCIsImdldFVzZXJMaXN0Q29tcGxldGUiLCJnZXRJbWFnZXJ5TGlzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlcyIsImhvbGRSZWYiLCIkIiwiYWpheCIsInR5cGUiLCJhc3luYyIsImNyb3NzRG9tYWluIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImZhaWwiLCJkb25lIiwicGFyc2VkRGF0YSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwidXBkYXRlSW5zdGl0dXRpb24iLCJjb25maXJtIiwiZW1haWwiLCJlIiwidW5kZWZpbmVkIiwidGFyZ2V0IiwidmFsdWUiLCJqc29uU3RyIiwic3RyaW5naWZ5IiwiZmluZCIsImZpbmRVc2VyQnlFbWFpbCIsIm5ld1VzZXIiLCJzb21lIiwiaW1hZ2VyeUlkIiwiaW1hZ2VyeVRpdGxlIiwiaW1hZ2VyeUF0dHJpYnV0aW9uIiwiZ2Vvc2VydmVyVVJMIiwibGF5ZXJOYW1lIiwiZ2Vvc2VydmVyUGFyYW1zIiwiYWRkQ3VzdG9tSW1hZ2VyeSIsImV2ZW50IiwidXNlcnNMZW5ndGgiLCJjYW5jZWxDaGFuZ2VzIiwiY2FuY2VsQWRkQ3VzdG9tSW1hZ2VyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5zdGl0dXRpb25EZXNjcmlwdGlvbiIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFzZTY0RGF0YSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJyZW5kZXJDb21wIiwicmVuZGVySGVhZGVyIiwiZW5jb2RlSW1hZ2VGaWxlQXNVUkwiLCJyZW5kZXJCdXR0b25zIiwiSW1hZ2VyeUxpc3QiLCJtYXAiLCJpbWFnZXJ5SXRlbSIsInVpZCIsInRpdGxlIiwiSW1hZ2VyeSIsIkltYWdlcnlCdXR0b24iLCJQcm9qZWN0TGlzdCIsInByb2plY3QiLCJQcm9qZWN0IiwicHJvaiIsIlByb2plY3RCdXR0b24iLCJVc2VyTGlzdCIsIlVzZXIiLCJVc2VyQnV0dG9uIiwiQWRkVXNlciIsIlJlcXVlc3RNZW1iZXJzaGlwIiwicmVuZGVySW5zdGl0dXRpb25QYWdlIiwiYXJncyIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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RXlILElBQUksQ0FBQ3hILGdCQURwQztBQUNzRCxRQUFJLEVBQUV3SCxJQUFJLENBQUN2SCxJQURqRTtBQUN1RSxXQUFPLEVBQUV1SCxJQUFJLENBQUN0SCxPQURyRjtBQUM4RixtQkFBZSxFQUFFc0gsSUFBSSxDQUFDbEksZUFEcEg7QUFFYSxZQUFRLEVBQUVrSSxJQUFJLENBQUNoSjtBQUY1QixJQURKLEVBSUlwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FKSjtBQU1ILEMiLCJmaWxlIjoiaW5zdGl0dXRpb24uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbnN0aXR1dGlvblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvaW5zdGl0dXRpb24uanNcIixcInZlbmRvcnN+YWNjb3VudH5jb2xsZWN0aW9ufmdlb2Rhc2hyZWFjdH5ob21lfmluc3RpdHV0aW9ufnByb2plY3R+dGltZXN5bmN+d2lkZ2V0bGF5b3V0ZWRpdG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKioqXG4gKioqIENyZWF0ZSB0aGUgdXRpbHMgb2JqZWN0IHRvIGFjdCBhcyBhIG5hbWVzcGFjZSBmb3IgdGhpcyBmaWxlXG4gKioqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciB1dGlscyA9IHt9O1xuXG51dGlscy5lbmFibGVfZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMS4wO1xuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuZGlzYWJsZV9lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnRfaWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRfaWQpO1xuICAgIGVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLnNob3dfZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn07XG5cbnV0aWxzLmhpZGVfZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufTtcblxudXRpbHMuaGlnaGxpZ2h0X2JvcmRlciA9IGZ1bmN0aW9uIChlbGVtZW50X2lkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICB2YXIgc2hhZG93X3N0eWxlID0gXCIwcHggMHB4IDRweCA0cHggYmxhY2sgaW5zZXQsIDBweCAwcHggNHB4IDRweCB3aGl0ZSBpbnNldFwiO1xuICAgIGVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93X3N0eWxlO1xuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMubG93bGlnaHRfYm9yZGVyID0gZnVuY3Rpb24gKGVsZW1lbnRfaWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRfaWQpO1xuICAgIGVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCJpbml0aWFsXCI7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG51dGlscy5ibGlua19ib3JkZXIgPSBmdW5jdGlvbiAoZWxlbWVudF9pZCkge1xuICAgIHV0aWxzLmhpZ2hsaWdodF9ib3JkZXIoZWxlbWVudF9pZCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHV0aWxzLmxvd2xpZ2h0X2JvcmRlcihlbGVtZW50X2lkKTsgfSwgNTAwKTtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHV0aWxzOiB1dGlsc1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL2pzL3V0aWxzLmpzXCI7XG5cbmNsYXNzIEluc3RpdHV0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlTW9kZTogXCJ2aWV3XCIsXG4gICAgICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiLTFcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGxvZ286IFwiXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgIGFkbWluczogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0FkbWluOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2plY3RMaXN0OiBbXSxcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbXSxcbiAgICAgICAgICAgIHVzZXJMaXN0Q29tcGxldGU6IFtdLFxuICAgICAgICAgICAgaW1hZ2VyeUxpc3Q6IFtdLFxuICAgICAgICAgICAgbmV3VXNlckVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgbm9uUGVuZGluZ1VzZXJzOiAwLFxuICAgICAgICAgICAgaW1hZ2VyeU1vZGU6IFwidmlld1wiLFxuICAgICAgICAgICAgbmV3SW1hZ2VyeVRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgbmV3SW1hZ2VyeUF0dHJpYnV0aW9uOiBcIlwiLFxuICAgICAgICAgICAgbmV3R2VvU2VydmVyVVJMOiBcIlwiLFxuICAgICAgICAgICAgbmV3TGF5ZXJOYW1lOiBcIlwiLFxuICAgICAgICAgICAgbmV3R2VvU2VydmVyUGFyYW1zOiBcIlwiLFxuICAgICAgICAgICAgdXNlcklkOiBwcm9wcy51c2VySWQsXG4gICAgICAgICAgICBkb2N1bWVudFJvb3Q6IHByb3BzLmRvY3VtZW50Um9vdCxcbiAgICAgICAgICAgIGluc3RpdHV0aW9uSWQ6IHByb3BzLmluc3RpdHV0aW9uSWQsXG4gICAgICAgICAgICBvZl91c2Vyc19hcGlfdXJsOiBwcm9wcy5vZl91c2Vyc19hcGlfdXJsLFxuICAgICAgICAgICAgcm9sZTogcHJvcHMucm9sZSxcbiAgICAgICAgICAgIHN0b3JhZ2U6IHByb3BzLnN0b3JhZ2UsXG4gICAgICAgICAgICBpbnN0aXR1dGlvbjogW10sXG4gICAgICAgICAgICBpbWFnZXJ5OiBbXSxcbiAgICAgICAgICAgIHByb2plY3RzOiBbXSxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc0luc3RpdHV0aW9uTWVtYmVyPXRoaXMuaXNJbnN0aXR1dGlvbk1lbWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhZ2VNb2RlPXRoaXMudG9nZ2xlUGFnZU1vZGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2U9dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxldGVJbnN0aXR1dGlvbj10aGlzLmRlbGV0ZUluc3RpdHV0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlSW1hZ2VyeU1vZGU9dGhpcy50b2dnbGVJbWFnZXJ5TW9kZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUltYWdlcnk9dGhpcy5oYW5kbGVDaGFuZ2VJbWFnZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVXNlcj10aGlzLmhhbmRsZUNoYW5nZVVzZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0PXRoaXMuY3JlYXRlUHJvamVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZFVzZXI9dGhpcy5hZGRVc2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlVXNlckluc3RpdHV0aW9uUm9sZT10aGlzLnVwZGF0ZVVzZXJJbnN0aXR1dGlvblJvbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxldGVJbWFnZXJ5PXRoaXMuZGVsZXRlSW1hZ2VyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlcXVlc3RNZW1iZXJzaGlwPXRoaXMucmVxdWVzdE1lbWJlcnNoaXAuYmluZCh0aGlzKTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCwgdGhpcy5wcm9wcy51c2VySWQsIHRoaXMucHJvcHMuaW5zdGl0dXRpb25JZCk7XG4gICAgfVxuXG4gICAgZ2V0SW5zdGl0dXRpb25EZXRhaWxzKGluc3RpdHV0aW9uSWQpIHtcbiAgICAgICAgdmFyIHJlZj10aGlzO1xuICAgICAgICAvL2dldCBpbnN0aXR1dGlvbnNcbiAgICAgICAgZmV0Y2godGhpcy5zdGF0ZS5kb2N1bWVudFJvb3QgKyBcIi9nZXQtaW5zdGl0dXRpb24tZGV0YWlscy9cIiArIGluc3RpdHV0aW9uSWQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgcmV0cmlldmluZyB0aGUgaW5zdGl0dXRpb24gZGV0YWlscy4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZi5wcm9wcy51c2VySWQgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe2lzQWRtaW4gOiB0aGlzLnN0YXRlLmRldGFpbHMuYWRtaW5zLmluY2x1ZGVzKHBhcnNlSW50KHJlZi5wcm9wcy51c2VySWQpKX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFByb2plY3RMaXN0KHVzZXJJZCwgaW5zdGl0dXRpb25JZCkge1xuICAgICAgICAvL2dldCBwcm9qZWN0c1xuICAgICAgICBmZXRjaCh0aGlzLnN0YXRlLmRvY3VtZW50Um9vdCArIFwiL2dldC1hbGwtcHJvamVjdHM/dXNlcklkPVwiICsgdXNlcklkICsgXCImaW5zdGl0dXRpb25JZD1cIiArIGluc3RpdHV0aW9uSWQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgcmV0cmlldmluZyB0aGUgcHJvamVjdCBpbmZvLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoe3Byb2plY3RzOiBkYXRhfSkpO1xuICAgIH1cblxuICAgIGdldFVzZXJMaXN0KGluc3RpdHV0aW9uSWQpIHtcbiAgICAgICAgLy9nZXQgdXNlcnNcbiAgICAgICAgZmV0Y2godGhpcy5zdGF0ZS5kb2N1bWVudFJvb3QgKyBcIi9nZXQtYWxsLXVzZXJzP2luc3RpdHV0aW9uSWQ9XCIgKyBpbnN0aXR1dGlvbklkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIHJldHJpZXZpbmcgdGhlIHVzZXIgbGlzdC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyczogZGF0YX0pO1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUudXNlcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIuaW5zdGl0dXRpb25Sb2xlICE9IFwicGVuZGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9uUGVuZGluZ1VzZXJzOiBjb3VudH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckxpc3RDb21wbGV0ZSgpIHtcbiAgICAgICAgLy9nZXQgdXNlcnMgY29tcGxldGUgbGlzdFxuICAgICAgICBmZXRjaCh0aGlzLnN0YXRlLmRvY3VtZW50Um9vdCArIFwiL2dldC1hbGwtdXNlcnNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHRoZSBjb21wbGV0ZSB1c2VyIGxpc3QuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHt1c2VyTGlzdENvbXBsZXRlOiBkYXRhfSkpO1xuICAgIH1cblxuICAgIGdldEltYWdlcnlMaXN0KGluc3RpdHV0aW9uSWQpIHtcbiAgICAgICAgLy9nZXQgaW1hZ2VyeVxuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmRvY3VtZW50Um9vdCArIFwiL2dldC1hbGwtaW1hZ2VyeT9pbnN0aXR1dGlvbklkPVwiICsgaW5zdGl0dXRpb25JZClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIHRoZSBpbWFnZXJ5IGxpc3QuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHtpbWFnZXJ5OiBkYXRhfSkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoZG9jdW1lbnRSb290LCB1c2VySWQsIGluc3RpdHV0aW9uSWQpIHtcbiAgICAgICAgLy8gTWFrZSB0aGUgY3VycmVudCBkb2N1bWVudFJvb3QsIHVzZXJJZCwgYW5kIGluc3RpdHV0aW9uIGlkIGdsb2JhbGx5IGF2YWlsYWJsZVxuICAgICAgICBsZXQgZGV0YWlsc05ldyA9IHRoaXMuc3RhdGUuZGV0YWlscztcbiAgICAgICAgZGV0YWlsc05ldy5pZCA9IGluc3RpdHV0aW9uSWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHM6IGRldGFpbHNOZXd9KTtcblxuICAgICAgICAvLyBJZiBpbiBDcmVhdGUgSW5zdGl0dXRpb24gbW9kZSwgc2hvdyB0aGUgaW5zdGl0dXRpb24gZWRpdGluZyB2aWV3LiBPdGhlcndpc2UsIGxvYWQgYW5kIHNob3cgdGhlIGluc3RpdHV0aW9uIGRldGFpbHNcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlscy5pZCA9PSBcIjBcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZU1vZGU6IFwiZWRpdFwifSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEluc3RpdHV0aW9uRGV0YWlscyh0aGlzLnN0YXRlLmRldGFpbHMuaWQpO1xuXG4gICAgICAgICAgICAvLyBMb2FkIHRoZSBwcm9qZWN0TGlzdFxuICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0TGlzdCh0aGlzLnN0YXRlLnVzZXJJZCwgdGhpcy5zdGF0ZS5kZXRhaWxzLmlkKTtcblxuICAgICAgICAgICAgLy8gTG9hZCB0aGUgdXNlckxpc3RcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QodGhpcy5zdGF0ZS5kZXRhaWxzLmlkKTtcblxuICAgICAgICAgICAgLy8gTG9hZCB0aGUgY29tcGxldGUgdXNlckxpc3RcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3RDb21wbGV0ZSgpO1xuXG4gICAgICAgICAgICAvLyBMb2FkIHRoZSBpbWFnZXJ5TGlzdFxuICAgICAgICAgICAgdGhpcy5nZXRJbWFnZXJ5TGlzdCh0aGlzLnN0YXRlLmRldGFpbHMuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlSW5zdGl0dXRpb24oKSB7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VyaWRcIiwgdGhpcy5wcm9wcy51c2VySWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbnN0aXR1dGlvbi1uYW1lXCIsIHRoaXMuc3RhdGUuZGV0YWlscy5uYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW5zdGl0dXRpb24tbG9nb1wiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RpdHV0aW9uLWxvZ29cIikuZmlsZXNbMF0pO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbnN0aXR1dGlvbi11cmxcIiwgdGhpcy5zdGF0ZS5kZXRhaWxzLnVybCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImluc3RpdHV0aW9uLWRlc2NyaXB0aW9uXCIsIHRoaXMuc3RhdGUuZGV0YWlscy5kZXNjcmlwdGlvbik7XG4gICAgICAgIGxldCBkb2N1bWVudFJvb3QgPSB0aGlzLnN0YXRlLmRvY3VtZW50Um9vdDtcbiAgICAgICAgbGV0IGluc3RpdHV0aW9uSWQgPSB0aGlzLnByb3BzLmluc3RpdHV0aW9uSWQ7XG4gICAgICAgIHZhciBob2xkUmVmID0gdGhpcztcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogZG9jdW1lbnRSb290ICsgXCIvdXBkYXRlLWluc3RpdHV0aW9uL1wiICsgaW5zdGl0dXRpb25JZCxcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciB1cGRhdGluZyBpbnN0aXR1dGlvbiBkZXRhaWxzLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmIChob2xkUmVmLnN0YXRlLmRldGFpbHMuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRvY3VtZW50Um9vdCArIFwiL2luc3RpdHV0aW9uL1wiICsgcGFyc2VkRGF0YS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGRldGFpbHNOZXcgPSBob2xkUmVmLnN0YXRlLmRldGFpbHM7XG4gICAgICAgICAgICAgICAgZGV0YWlsc05ldy5pZCA9IHBhcnNlZERhdGEuaWQ7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZERhdGEubG9nbyAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNOZXcubG9nbyA9IHBhcnNlZERhdGEubG9nbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZFJlZi5zZXRTdGF0ZSh7ZGV0YWlsczogZGV0YWlsc05ld30pO1xuICAgICAgICAgICAgICAgIGhvbGRSZWYuc2V0U3RhdGUoe2lzQWRtaW46IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlUGFnZU1vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhZ2VNb2RlID09IFwidmlld1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlTW9kZTogXCJlZGl0XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdGl0dXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2VNb2RlOiBcInZpZXdcIn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZU1vZGU6IFwidmlld1wifSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSW5zdGl0dXRpb24oKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5zdGF0ZS5kZXRhaWxzLm5hbWU7XG4gICAgICAgIGxldCBkb2N1bWVudFJvb3QgPSB0aGlzLnByb3BzLmRvY3VtZW50Um9vdDtcbiAgICAgICAgbGV0IGluc3RpdHV0aW9uSWQgPSB0aGlzLnN0YXRlLmRldGFpbHMuaWQ7XG5cbiAgICAgICAgaWYgKGNvbmZpcm0oXCJEbyB5b3UgUkVBTExZIHdhbnQgdG8gZGVsZXRlIHRoaXMgaW5zdGl0dXRpb24/IVwiKSkge1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnRSb290ICsgXCIvYXJjaGl2ZS1pbnN0aXR1dGlvbi9cIiArIGluc3RpdHV0aW9uSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgZGVsZXRpbmcgaW5zdGl0dXRpb24uIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5zdGl0dXRpb24gXCIgKyBuYW1lICsgXCIgaGFzIGJlZW4gZGVsZXRlZC5cIik7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZG9jdW1lbnRSb290ICsgXCIvaG9tZVwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuaWQgPT0gMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmluaXNoIGNyZWF0aW5nIHRoZSBpbnN0aXR1dGlvbiBiZWZvcmUgYWRkaW5nIHByb2plY3RzIHRvIGl0LlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRldGFpbHMuaWQgPT0gLTEpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdHMgY2Fubm90IGJlIGNyZWF0ZWQgd2l0aG91dCBmaXJzdCBzZWxlY3RpbmcgYW4gaW5zdGl0dXRpb24uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9wcm9qZWN0LzA/aW5zdGl0dXRpb249XCIgKyB0aGlzLnN0YXRlLmRldGFpbHMuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVVc2VySW5zdGl0dXRpb25Sb2xlKHVzZXJJZCwgZW1haWwsIHJvbGUsZSkge1xuICAgICAgICBsZXQgZG9jdW1lbnRSb290ID0gdGhpcy5wcm9wcy5kb2N1bWVudFJvb3Q7XG4gICAgICAgIGxldCBpbnN0aXR1dGlvbklkID0gdGhpcy5wcm9wcy5pbnN0aXR1dGlvbklkO1xuXG4gICAgICAgIGxldCByZWYgPSB0aGlzO1xuICAgICAgICBpZiAoZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJvbGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIganNvblN0ciA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgaW5zdGl0dXRpb25JZDogdGhpcy5zdGF0ZS5kZXRhaWxzLmlkLFxuICAgICAgICAgICAgcm9sZTogcm9sZVxuICAgICAgICB9O1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBkb2N1bWVudFJvb3QgKyBcIi91cGRhdGUtdXNlci1pbnN0aXR1dGlvbi1yb2xlXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeVxuICAgICAgICAgICAgKGpzb25TdHIpXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciB1cGRhdGluZyB1c2VyIGluc3RpdHV0aW9uIHJvbGUuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgYWxlcnQoXCJVc2VyIFwiICsgZW1haWwgKyBcIiBoYXMgYmVlbiBnaXZlbiByb2xlICdcIiArIHJvbGUgKyBcIicuXCIpO1xuICAgICAgICAgICAgaWYgKHVzZXJJZCA9PSByZWYucHJvcHMudXNlcklkICYmIHJvbGUgIT0gXCJhZG1pblwiKSB7XG4gICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtwYWdlTW9kZTogXCJ2aWV3XCJ9KTtcbiAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe2lzQWRtaW46IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgcmVmLmdldFVzZXJMaXN0KGluc3RpdHV0aW9uSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kVXNlckJ5RW1haWwodXNlckxpc3QsIGVtYWlsKSB7XG4gICAgICAgIHJldHVybiB1c2VyTGlzdC5maW5kKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5lbWFpbCA9PSBlbWFpbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uZXdVc2VyRW1haWwgPT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYW4gZXhpc3RpbmcgdXNlcidzIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmluZFVzZXJCeUVtYWlsKHRoaXMuc3RhdGUudXNlcnMsIHRoaXMuc3RhdGUubmV3VXNlckVtYWlsKSkge1xuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5uZXdVc2VyRW1haWwgKyBcIiBpcyBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgaW5zdGl0dXRpb24uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1VzZXIgPSB0aGlzLmZpbmRVc2VyQnlFbWFpbCh0aGlzLnN0YXRlLnVzZXJMaXN0Q29tcGxldGUsIHRoaXMuc3RhdGUubmV3VXNlckVtYWlsKTtcbiAgICAgICAgICAgIGlmIChuZXdVc2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5zdGl0dXRpb25Sb2xlKG5ld1VzZXIuaWQsIG5ld1VzZXIuZW1haWwsIFwibWVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld1VzZXJFbWFpbDogXCJcIn0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLm5ld1VzZXJFbWFpbCArIFwiIGlzIG5vdCBhbiBleGlzdGluZyB1c2VyJ3MgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0luc3RpdHV0aW9uTWVtYmVyKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdXNlcklkID09IDFcbiAgICAgICAgICAgIHx8IHRoaXMuc3RhdGUudXNlcnMuc29tZShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5pZCA9PSB1c2VySWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0TWVtYmVyc2hpcCgpIHtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHJlZi5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9yZXF1ZXN0LWluc3RpdHV0aW9uLW1lbWJlcnNoaXBcIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5XG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbklkOiByZWYuc3RhdGUuZGV0YWlscy5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXJzZUludChyZWYucHJvcHMudXNlcklkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIHJlcXVlc3RpbmcgaW5zdGl0dXRpb24gbWVtYmVyc2hpcC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBhbGVydChcIk1lbWJlcnNoaXAgcmVxdWVzdGVkIGZvciB1c2VyIFwiICsgcmVmLnByb3BzLnVzZXJJZCArIFwiLlwiKTtcbiAgICAgICAgICAgIHV0aWxzLmRpc2FibGVfZWxlbWVudChcInJlcXVlc3QtbWVtYmVyc2hpcC1idXR0b25cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUltYWdlcnkoaW1hZ2VyeUlkKSB7XG4gICAgICAgIGlmIChjb25maXJtKFwiRG8geW91IFJFQUxMWSB3YW50IHRvIGRlbGV0ZSB0aGlzIGltYWdlcnk/IVwiKSkge1xuICAgICAgICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBpbnN0aXR1dGlvbklkPXRoaXMucHJvcHMuaW5zdGl0dXRpb25JZDtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiByZWYucHJvcHMuZG9jdW1lbnRSb290ICsgXCIvZGVsZXRlLWluc3RpdHV0aW9uLWltYWdlcnlcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbklkOiBpbnN0aXR1dGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXJ5SWQ6IGltYWdlcnlJZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIGRlbGV0aW5nIGltYWdlcnkgZnJvbSBpbnN0aXR1dGlvbi4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2VyeSBcIiArIGltYWdlcnlJZCArIFwiIGhhcyBiZWVuIGRlbGV0ZWQgZnJvbSBpbnN0aXR1dGlvbiBcIiArIHJlZi5zdGF0ZS5kZXRhaWxzLm5hbWUgKyBcIi5cIik7XG4gICAgICAgICAgICAgICByZWYuZ2V0SW1hZ2VyeUxpc3QoaW5zdGl0dXRpb25JZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEN1c3RvbUltYWdlcnkoKSB7XG5cbiAgICAgICAgbGV0IG5ld0ltYWdlcnlUaXRsZSA9IHRoaXMuc3RhdGUubmV3SW1hZ2VyeVRpdGxlO1xuICAgICAgICBjb25zdCBpbnN0aXR1dGlvbklkID0gdGhpcy5wcm9wcy5pbnN0aXR1dGlvbklkO1xuICAgICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9hZGQtaW5zdGl0dXRpb24taW1hZ2VyeVwiLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGluc3RpdHV0aW9uSWQ6IHRoaXMuc3RhdGUuZGV0YWlscy5pZCxcbiAgICAgICAgICAgICAgICBpbWFnZXJ5VGl0bGU6IHRoaXMuc3RhdGUubmV3SW1hZ2VyeVRpdGxlLFxuICAgICAgICAgICAgICAgIGltYWdlcnlBdHRyaWJ1dGlvbjogdGhpcy5zdGF0ZS5uZXdJbWFnZXJ5QXR0cmlidXRpb24sXG4gICAgICAgICAgICAgICAgZ2Vvc2VydmVyVVJMOiB0aGlzLnN0YXRlLm5ld0dlb1NlcnZlclVSTCxcbiAgICAgICAgICAgICAgICBsYXllck5hbWU6IHRoaXMuc3RhdGUubmV3TGF5ZXJOYW1lLFxuICAgICAgICAgICAgICAgIGdlb3NlcnZlclBhcmFtczogdGhpcy5zdGF0ZS5uZXdHZW9TZXJ2ZXJQYXJhbXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgY3VzdG9tIGltYWdlcnkgdG8gaW5zdGl0dXRpb24uIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2VyeSBcIiArIG5ld0ltYWdlcnlUaXRsZSArIFwiIGhhcyBiZWVuIGFkZGVkIHRvIGluc3RpdHV0aW9uIFwiICsgcmVmLnN0YXRlLmRldGFpbHMubmFtZSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe25ld0ltYWdlcnlUaXRsZTogXCJcIn0pO1xuICAgICAgICAgICAgICAgIHJlZi5zZXRTdGF0ZSh7bmV3SW1hZ2VyeUF0dHJpYnV0aW9uOiBcIlwifSk7XG4gICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtuZXdHZW9TZXJ2ZXJVUkw6IFwiXCJ9KTtcbiAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe25ld0xheWVyTmFtZTogXCJcIn0pO1xuICAgICAgICAgICAgICAgIHJlZi5zZXRTdGF0ZSh7bmV3R2VvU2VydmVyUGFyYW1zOiBcIlwifSk7XG4gICAgICAgICAgICAgICAgcmVmLmdldEltYWdlcnlMaXN0KGluc3RpdHV0aW9uSWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdG9nZ2xlSW1hZ2VyeU1vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltYWdlcnlNb2RlID09IFwidmlld1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWFnZXJ5TW9kZTogXCJlZGl0XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tSW1hZ2VyeSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VyeU1vZGU6IFwidmlld1wifSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5jZWxBZGRDdXN0b21JbWFnZXJ5KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWFnZXJ5TW9kZTogXCJ2aWV3XCJ9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VJbWFnZXJ5KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQuaWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VVc2VyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3VXNlckVtYWlsOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBkZXRhaWxzTmV3ID0gdGhpcy5zdGF0ZS5kZXRhaWxzO1xuICAgICAgICBpZiAodGFyZ2V0LmlkID09IFwiaW5zdGl0dXRpb24tZGV0YWlscy1uYW1lXCIpIHtcbiAgICAgICAgICAgIGRldGFpbHNOZXcubmFtZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQuaWQgPT0gXCJpbnN0aXR1dGlvbi1kZXRhaWxzLXVybFwiKSB7XG4gICAgICAgICAgICBkZXRhaWxzTmV3LnVybCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQuaWQgPT0gXCJpbnN0aXR1dGlvbi1kZXRhaWxzLWRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIGRldGFpbHNOZXcuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBkZXRhaWxzTmV3fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpbWFnZXJ5ID0gdGhpcy5zdGF0ZS5pbWFnZXJ5O1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuc3RhdGUucHJvamVjdHM7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zdGF0ZS51c2VycztcbiAgICAgICAgY29uc3QgaXNBZG1pbiA9IHRoaXMuc3RhdGUuaXNBZG1pbjtcbiAgICAgICAgdmFyIHVzZXJzTGVuZ3RoPTA7XG4gICAgICAgIGlmKGlzQWRtaW4pe1xuICAgICAgICAgICAgdXNlcnNMZW5ndGg9dXNlcnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgdXNlcnNMZW5ndGg9dGhpcy5zdGF0ZS5ub25QZW5kaW5nVXNlcnM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEluc3RpdHV0aW9uRGVzY3JpcHRpb24gdXNlcklkPXt0aGlzLnByb3BzLnVzZXJJZH0gaW5zdGl0dXRpb249e3RoaXMuc3RhdGUuaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZl91c2Vyc19hcGlfdXJsPXt0aGlzLnByb3BzLm9mX3VzZXJzX2FwaV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGl0dXRpb25JZD17dGhpcy5wcm9wcy5pbnN0aXR1dGlvbklkfSByb2xlPXt0aGlzLnN0YXRlLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZT17dGhpcy5zdGF0ZS5zdG9yYWdlfSBwYWdlTW9kZT17dGhpcy5zdGF0ZS5wYWdlTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXt0aGlzLnN0YXRlLmRldGFpbHN9IHRvZ2dsZVBhZ2VNb2RlPXt0aGlzLnRvZ2dsZVBhZ2VNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGNhbmNlbENoYW5nZXM9e3RoaXMuY2FuY2VsQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbnN0aXR1dGlvbj17dGhpcy5kZWxldGVJbnN0aXR1dGlvbn0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWFnZXJ5LWxpc3RcIiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj5JbWFnZXJ5IDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1saWdodFwiPntpbWFnZXJ5Lmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcnlMaXN0IG5ld0ltYWdlcnlUaXRsZT17dGhpcy5zdGF0ZS5uZXdJbWFnZXJ5VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW1hZ2VyeUF0dHJpYnV0aW9uPXt0aGlzLnN0YXRlLm5ld0ltYWdlcnlBdHRyaWJ1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHZW9TZXJ2ZXJVUkw9e3RoaXMuc3RhdGUubmV3R2VvU2VydmVyVVJMfSBuZXdMYXllck5hbWU9e3RoaXMuc3RhdGUubmV3TGF5ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dlb1NlcnZlclBhcmFtcz17dGhpcy5zdGF0ZS5uZXdHZW9TZXJ2ZXJQYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQWRkQ3VzdG9tSW1hZ2VyeT17dGhpcy5jYW5jZWxBZGRDdXN0b21JbWFnZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUltYWdlcnk9e3RoaXMuaGFuZGxlQ2hhbmdlSW1hZ2VyeX0gZGVsZXRlSW1hZ2VyeT17dGhpcy5kZWxldGVJbWFnZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17dGhpcy5wcm9wcy51c2VySWR9IGRvY3VtZW50Um9vdD17dGhpcy5wcm9wcy5kb2N1bWVudFJvb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGl0dXRpb249e3RoaXMuc3RhdGUuaW5zdGl0dXRpb259IGlzQWRtaW49e2lzQWRtaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGl0dXRpb25JZD17dGhpcy5zdGF0ZS5pbnN0aXR1dGlvbklkfSBkZXRhaWxzPXt0aGlzLnN0YXRlLmRldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeT17aW1hZ2VyeX0gcGFnZU1vZGU9e3RoaXMuc3RhdGUucGFnZU1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW1hZ2VyeUxpc3Q9e3RoaXMuZ2V0SW1hZ2VyeUxpc3R9IGltYWdlcnlNb2RlPXt0aGlzLnN0YXRlLmltYWdlcnlNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltYWdlcnlNb2RlPXt0aGlzLnRvZ2dsZUltYWdlcnlNb2RlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdC1saXN0XCIgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+UHJvamVjdHMgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsICBiYWRnZS1saWdodFwiPntwcm9qZWN0cy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0TGlzdCB1c2VySWQ9e3RoaXMucHJvcHMudXNlcklkfSBkb2N1bWVudFJvb3Q9e3RoaXMucHJvcHMuZG9jdW1lbnRSb290fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM9e3RoaXMuc3RhdGUuZGV0YWlsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cz17dGhpcy5zdGF0ZS5wcm9qZWN0c30gaXNBZG1pbj17aXNBZG1pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbklkPXt0aGlzLnByb3BzLmluc3RpdHV0aW9uSWR9IGNyZWF0ZVByb2plY3Q9e3RoaXMuY3JlYXRlUHJvamVjdH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVzZXItbGlzdFwiIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlclwiPlVzZXJzIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCAgYmFkZ2UtbGlnaHRcIj57dXNlcnNMZW5ndGh9PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckxpc3QgdXNlcklkPXt0aGlzLnByb3BzLnVzZXJJZH0gZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbj17dGhpcy5zdGF0ZS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbklkPXt0aGlzLnByb3BzLmluc3RpdHV0aW9uSWR9IHVzZXJzPXt0aGlzLnN0YXRlLnVzZXJzfSBpc0FkbWluPXtpc0FkbWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzQ29tcGxldGVMaXN0PXt0aGlzLnN0YXRlLnVzZXJMaXN0Q29tcGxldGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU1vZGU9e3RoaXMuc3RhdGUucGFnZU1vZGV9IGdldFVzZXJzPXt0aGlzLmdldFVzZXJMaXN0fSB1cGRhdGVVc2VySW5zdGl0dXRpb25Sb2xlPXt0aGlzLnVwZGF0ZVVzZXJJbnN0aXR1dGlvblJvbGV9IGhhbmRsZUNoYW5nZVVzZXI9e3RoaXMuaGFuZGxlQ2hhbmdlVXNlcn0gYWRkVXNlcj17dGhpcy5hZGRVc2VyfSBuZXdVc2VyRW1haWw9e3RoaXMuc3RhdGUubmV3VXNlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5zdGl0dXRpb25NZW1iZXI9e3RoaXMuaXNJbnN0aXR1dGlvbk1lbWJlcn0gcmVxdWVzdE1lbWJlcnNoaXA9e3RoaXMucmVxdWVzdE1lbWJlcnNoaXB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgSW5zdGl0dXRpb25EZXNjcmlwdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbXAocm9sZSwgcGFnZU1vZGUsIGRldGFpbHMsIGlzQWRtaW4sIHRvZ2dsZVBhZ2VNb2RlLCBkZWxldGVJbnN0aXR1dGlvbikge1xuICAgICAgICBpZiAocm9sZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAoZGV0YWlscy5pZCA+IDAgJiYgcm9sZSA9PSBcImFkbWluXCIgJiYgcGFnZU1vZGUgPT0gJ3ZpZXcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0yXCIgaWQ9XCJpbnN0aXR1dGlvbi1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlZGl0LWluc3RpdHV0aW9uXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLWJsb2NrIG10LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFnZU1vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCI+PC9pPiBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLWluc3RpdHV0aW9uXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tYmxvY2sgbXQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVJbnN0aXR1dGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLWFsdFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckhlYWRlcihpbnN0aXR1dGlvbklkKSB7XG4gICAgICAgIGlmIChpbnN0aXR1dGlvbklkID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVkaXQgIEluc3RpdHV0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluc3RpdHV0aW9uSWQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNyZWF0ZSBOZXcgSW5zdGl0dXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJCdXR0b25zKGluc3RpdHV0aW9uSWQsIHBhZ2VNb2RlLCB0b2dnbGVQYWdlTW9kZSwgY2FuY2VsQ2hhbmdlcykge1xuICAgICAgICBpZiAocGFnZU1vZGUgPT0gJ2VkaXQnICYmIGluc3RpdHV0aW9uSWQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlLWluc3RpdHV0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tYmxvY2sgbXQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYWdlTW9kZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtc3F1YXJlXCI+PC9pPiBDcmVhdGUgSW5zdGl0dXRpb25cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFnZU1vZGUgPT0gJ2VkaXQnICYmIGluc3RpdHV0aW9uSWQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tYmxvY2sgbXQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYWdlTW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNhdmVcIj48L2k+IFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tYmxvY2sgbXQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDaGFuZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFuXCI+PC9pPiBDYW5jZWwgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5jb2RlSW1hZ2VGaWxlQXNVUkwoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGJhc2U2NERhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFU1VMVCcsIGJhc2U2NERhdGEpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtkb2N1bWVudFJvb3QsIGluc3RpdHV0aW9uSWQsIHJvbGUsIG9mX3VzZXJzX2FwaV91cmwsIHN0b3JhZ2UsIGlzQWRtaW4sIGRldGFpbHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHBhZ2VNb2RlID0gdGhpcy5wcm9wcy5wYWdlTW9kZTtcbiAgICAgICAgaWYgKHBhZ2VNb2RlID09IFwidmlld1wiKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZSAhPSBudWxsICYmIHR5cGVvZihzdG9yYWdlKSA9PSBcInN0cmluZ1wiICYmIHN0b3JhZ2UgPT0gXCJsb2NhbFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5zdGl0dXRpb24tZGV0YWlsc1wiIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImluc3RpdHV0aW9uLXZpZXdcIiBjbGFzc05hbWU9XCJjb2wteGwtNiBjb2wtbGctOCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIiBpZD1cImluc3RpdHV0aW9uLWxvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGV0YWlscy51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZG9jdW1lbnRSb290ICsgXCIvXCIgKyBkZXRhaWxzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPjxhIGhyZWY9e2RldGFpbHMudXJsfT57ZGV0YWlscy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbXAocm9sZSwgcGFnZU1vZGUsIGRldGFpbHMsIGlzQWRtaW4sIHRoaXMucHJvcHMudG9nZ2xlUGFnZU1vZGUsIHRoaXMucHJvcHMuZGVsZXRlSW5zdGl0dXRpb24pfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnN0aXR1dGlvbi1kZXRhaWxzXCIgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5zdGl0dXRpb24tdmlld1wiIGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy04IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiIGlkPVwiaW5zdGl0dXRpb24tbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtkZXRhaWxzLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e29mX3VzZXJzX2FwaV91cmwgKyBcIi9ncm91cC9sb2dvL1wiICsgZGV0YWlscy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbC1tZC05XCI+PGEgaHJlZj17ZGV0YWlscy51cmx9PntkZXRhaWxzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29tcChyb2xlLCBwYWdlTW9kZSwgZGV0YWlscywgaXNBZG1pbiwgdGhpcy5wcm9wcy50b2dnbGVQYWdlTW9kZSwgdGhpcy5wcm9wcy5kZWxldGVJbnN0aXR1dGlvbil9XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYWdlTW9kZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImluc3RpdHV0aW9uLWRldGFpbHNcIiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5zdGl0dXRpb24tZWRpdFwiIGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGJvcmRlciBwYi0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57dGhpcy5yZW5kZXJIZWFkZXIoaW5zdGl0dXRpb25JZCl9PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGlkPVwiaW5zdGl0dXRpb24tbmFtZVwiIGh0bWxGb3I9XCJpbnN0aXR1dGlvbi1kZXRhaWxzLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5zdGl0dXRpb24tZGV0YWlscy1uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTEgbXItc20tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZGV0YWlscy5uYW1lfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGlkPVwiaW5zdGl0dXRpb24tdXJsXCIgaHRtbEZvcj1cImluc3RpdHV0aW9uLWRldGFpbHMtdXJsXCI+VVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5zdGl0dXRpb24tZGV0YWlscy11cmxcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0xIG1yLXNtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXRhaWxzLnVybH0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cImluc3RpdHV0aW9uLWxvZ28tc2VsZWN0b3JcIiBodG1sRm9yPVwiaW5zdGl0dXRpb24tbG9nb1wiPkxvZ288L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnN0aXR1dGlvbi1sb2dvXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTEgbXItc20tMlwiIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17dGhpcy5lbmNvZGVJbWFnZUZpbGVBc1VSTH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJpbnN0aXR1dGlvbi1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5zdGl0dXRpb24tZGV0YWlscy1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiaW5zdGl0dXRpb24tZGV0YWlscy1kZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGV0YWlscy5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9ucyhpbnN0aXR1dGlvbklkLCBwYWdlTW9kZSwgdGhpcy5wcm9wcy50b2dnbGVQYWdlTW9kZSwgdGhpcy5wcm9wcy5jYW5jZWxDaGFuZ2VzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBJbWFnZXJ5TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpbnN0aXR1dGlvbiA9IHRoaXMucHJvcHMuaW5zdGl0dXRpb247XG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSB0aGlzLnByb3BzLmlzQWRtaW47XG4gICAgICAgIGNvbnN0IGltYWdlcnlNb2RlID0gdGhpcy5wcm9wcy5pbWFnZXJ5TW9kZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2VyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2VyeU1vZGUgPT0gJ3ZpZXcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcnlCdXR0b24gdG9nZ2xlSW1hZ2VyeU1vZGU9e3RoaXMucHJvcHMudG9nZ2xlSW1hZ2VyeU1vZGV9IGlzQWRtaW49e2lzQWRtaW59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmltYWdlcnkubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1hZ2VyeUl0ZW0sdWlkKSA9PiA8SW1hZ2VyeSBrZXk9e3VpZH0gdGl0bGU9e2ltYWdlcnlJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluPXtpc0FkbWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbWFnZXJ5PXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZUltYWdlcnkoaW1hZ2VyeUl0ZW0uaWQpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0FkbWluID09IHRydWUgJiYgaW1hZ2VyeU1vZGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cImFkZC1pbWFnZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1iLTIgcC0yIGJvcmRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdJbWFnZXJ5VGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuZXdJbWFnZXJ5VGl0bGVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlcnktdGl0bGVcIiBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZUltYWdlcnl9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5uZXdJbWFnZXJ5VGl0bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdJbWFnZXJ5QXR0cmlidXRpb25cIj5BdHRyaWJ1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuZXdJbWFnZXJ5QXR0cmlidXRpb25cIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlcnktYXR0cmlidXRpb25cIiBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZUltYWdlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm5ld0ltYWdlcnlBdHRyaWJ1dGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld0dlb1NlcnZlclVSTFwiPkdlb1NlcnZlciBVUkw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmV3R2VvU2VydmVyVVJMXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZXJ5LWdlb3NlcnZlci11cmxcIiBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZUltYWdlcnl9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5uZXdHZW9TZXJ2ZXJVUkx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdMYXllck5hbWVcIj5HZW9TZXJ2ZXIgTGF5ZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuZXdMYXllck5hbWVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlcnktbGF5ZXItbmFtZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlSW1hZ2VyeX0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm5ld0xheWVyTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld0dlb1NlcnZlclBhcmFtc1wiPkdlb1NlcnZlciBQYXJhbXM8YnIvPihhcyBKU09OIHN0cmluZyk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmV3R2VvU2VydmVyUGFyYW1zXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZXJ5LWdlb3NlcnZlci1wYXJhbXNcIiBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZUltYWdlcnl9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5uZXdHZW9TZXJ2ZXJQYXJhbXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwLXZlcnRpY2FsIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1pbWFnZXJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXllbGxvdyBidG4tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZUltYWdlcnlNb2RlKGltYWdlcnlNb2RlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1cy1zcXVhcmVcIj48L2k+IEFkZCBOZXcgSW1hZ2VyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNhbmNlbEFkZEN1c3RvbUltYWdlcnl9PkNhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gSW1hZ2VyeShwcm9wcykge1xuICAgIGlmIChwcm9wcy5pc0FkbWluID09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1zbSBidG4tYmxvY2tcIj57cHJvcHMudGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1zbSBidG4tYmxvY2tcIj57cHJvcHMudGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gYnRuLWJsb2NrXCIgaWQ9XCJkZWxldGUtaW1hZ2VyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUltYWdlcnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtYmxvY2tcIj4gRGVsZXRlIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQteGwtbm9uZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLWFsdFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEltYWdlcnlCdXR0b24ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaXNBZG1pbiA9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIG1iLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZC1pbWFnZXJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tYmxvY2sgYnRuLW91dGxpbmUteWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy50b2dnbGVJbWFnZXJ5TW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzLXNxdWFyZVwiPjwvaT5BZGQgTmV3IEltYWdlcnlcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHRoaXMucHJvcHMuZGV0YWlscztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBZG1pbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RCdXR0b24gY3JlYXRlUHJvamVjdD17dGhpcy5wcm9wcy5jcmVhdGVQcm9qZWN0fS8+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9qZWN0cy5tYXAoKHByb2plY3QsdWlkKSA9PiA8UHJvamVjdCBrZXk9e3VpZH0gZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvaj17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscz17ZGV0YWlsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbj17dGhpcy5wcm9wcy5pc0FkbWlufS8+KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2plY3RzLm1hcCgocHJvamVjdCx1aWQpID0+IDxQcm9qZWN0IGtleT17dWlkfSBkb2N1bWVudFJvb3Q9e3RoaXMucHJvcHMuZG9jdW1lbnRSb290fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qPXtwcm9qZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXtkZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluPXt0aGlzLnByb3BzLmlzQWRtaW59Lz4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBQcm9qZWN0KHByb3BzKSB7XG4gICAgY29uc3QgZG9jdW1lbnRSb290ID0gcHJvcHMuZG9jdW1lbnRSb290O1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5wcm9qO1xuICAgIGlmIChwcm9wcy5pc0FkbWluID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05IHByLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2RvY3VtZW50Um9vdCArIFwiL2NvbGxlY3Rpb24vXCIgKyBwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIHBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2RvY3VtZW50Um9vdCtcIi9wcm9qZWN0L1wiKyBwcm9qZWN0LmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLXhsLW5vbmVcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCI+PC9pPjwvc3Bhbj48c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtYmxvY2tcIj4gUmV2aWV3PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1iLTEgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZG9jdW1lbnRSb290ICsgXCIvY29sbGVjdGlvbi9cIiArIHByb2plY3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBQcm9qZWN0QnV0dG9uKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZS1wcm9qZWN0XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5jcmVhdGVQcm9qZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1cy1zcXVhcmVcIj48L2k+IENyZWF0ZSBOZXcgUHJvamVjdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFVzZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPFVzZXJCdXR0b24gdXNlcklkPXt0aGlzLnByb3BzLnVzZXJJZH0gZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbklkPXt0aGlzLnByb3BzLmluc3RpdHV0aW9uSWR9IGluc3RpdHV0aW9uPXt0aGlzLnByb3BzLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW49e3RoaXMucHJvcHMuaXNBZG1pbn0gdXNlcnM9e3RoaXMucHJvcHMudXNlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RDb21wbGV0ZT17dGhpcy5wcm9wcy51c2VyTGlzdENvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVzZXJJbnN0aXR1dGlvblJvbGU9e3RoaXMucHJvcHMudXBkYXRlVXNlckluc3RpdHV0aW9uUm9sZX0gaGFuZGxlQ2hhbmdlVXNlcj17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2VVc2VyfSBuZXdVc2VyRW1haWw9e3RoaXMucHJvcHMubmV3VXNlckVtYWlsfSBhZGRVc2VyPXt0aGlzLnByb3BzLmFkZFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnN0aXR1dGlvbk1lbWJlcj17dGhpcy5wcm9wcy5pc0luc3RpdHV0aW9uTWVtYmVyfSByZXF1ZXN0TWVtYmVyc2hpcD17dGhpcy5wcm9wcy5yZXF1ZXN0TWVtYmVyc2hpcH0vPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2Vycy5tYXAoKHVzZXIsdWlkKSA9PiA8VXNlciBrZXk9e3VpZH0gZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH0gdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbj17dGhpcy5wcm9wcy5pbnN0aXR1dGlvbn0gaXNBZG1pbj17dGhpcy5wcm9wcy5pc0FkbWlufSBpbnN0aXR1dGlvblJvbGU9e3VzZXIuaW5zdGl0dXRpb25Sb2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VNb2RlPXt0aGlzLnByb3BzLnBhZ2VNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVzZXJJbnN0aXR1dGlvblJvbGU9e3RoaXMucHJvcHMudXBkYXRlVXNlckluc3RpdHV0aW9uUm9sZX0vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcjtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRSb290ID0gdGhpcy5wcm9wcy5kb2N1bWVudFJvb3Q7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWRtaW4gPT0gZmFsc2UgJiYgdXNlci5pbnN0aXR1dGlvblJvbGUgIT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZG9jdW1lbnRSb290ICsgXCIvYWNjb3VudC9cIiArIHVzZXIuaWR9Pnt1c2VyLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWRtaW4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHVzZXIuaW5zdGl0dXRpb25Sb2xlID09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOSBtYi0xIHByLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodGdyZWVuIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2RvY3VtZW50Um9vdCArIFwiL2FjY291bnQvXCIgKyB1c2VyLmlkfT57dXNlci5lbWFpbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBtYi0xIHBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dXNlci5pbnN0aXR1dGlvblJvbGV9IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3QgY3VzdG9tLXNlbGVjdC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItaW5zdGl0dXRpb24tcm9sZVwiIHNpemU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMudXBkYXRlVXNlckluc3RpdHV0aW9uUm9sZSh1c2VyLmlkLCB1c2VyLmVtYWlsLCB1c2VyLmluc3RpdHV0aW9uUm9sZSwgZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVtYmVyXCI+TWVtYmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdC1tZW1iZXJcIj5SZW1vdmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05IG1iLTEgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0Z3JlZW4gYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZG9jdW1lbnRSb290ICsgXCIvYWNjb3VudC9cIiArIHVzZXIuaWR9Pnt1c2VyLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIG1iLTEgcGwtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt1c2VyLmluc3RpdHV0aW9uUm9sZX0gY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdCBjdXN0b20tc2VsZWN0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1pbnN0aXR1dGlvbi1yb2xlXCIgc2l6ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy51cGRhdGVVc2VySW5zdGl0dXRpb25Sb2xlKHVzZXIuaWQsIHVzZXIuZW1haWwsIHVzZXIuaW5zdGl0dXRpb25Sb2xlLCBlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVtYmVyXCI+TWVtYmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdC1tZW1iZXJcIj5SZW1vdmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVXNlckJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxBZGRVc2VyIGlzQWRtaW49e3RoaXMucHJvcHMuaXNBZG1pbn0gaGFuZGxlQ2hhbmdlVXNlcj17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2VVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZXJFbWFpbD17dGhpcy5wcm9wcy5uZXdVc2VyRW1haWx9IGFkZFVzZXI9e3RoaXMucHJvcHMuYWRkVXNlcn0vPlxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0TWVtYmVyc2hpcCByZXF1ZXN0TWVtYmVyc2hpcD17dGhpcy5wcm9wcy5yZXF1ZXN0TWVtYmVyc2hpcH0gZG9jdW1lbnRSb290PXt0aGlzLnByb3BzLmRvY3VtZW50Um9vdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXt0aGlzLnByb3BzLnVzZXJJZH0gaW5zdGl0dXRpb25JZD17dGhpcy5wcm9wcy5pbnN0aXR1dGlvbklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luc3RpdHV0aW9uTWVtYmVyPXt0aGlzLnByb3BzLmlzSW5zdGl0dXRpb25NZW1iZXIodGhpcy5wcm9wcy51c2VySWQpfS8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gQWRkVXNlcihwcm9wcyl7XG4gICAgaWYgKHByb3BzLmlzQWRtaW4gPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOSBwci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJuZXctaW5zdGl0dXRpb24tdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5ld1VzZXJFbWFpbH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUteWVsbG93IGJ0bi1ibG9ja1wiIG5hbWU9XCJhZGQtaW5zdGl0dXRpb24tdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmFkZFVzZXJ9PjxzcGFuIGNsYXNzTmFtZT1cImQteGwtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtc3F1YXJlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC1ibG9ja1wiPiBBZGQgVXNlcjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHJldHVybig8c3Bhbj48L3NwYW4+KTtcbn1cblxuZnVuY3Rpb24gUmVxdWVzdE1lbWJlcnNoaXAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMudXNlcklkICE9ICcnICYmIHByb3BzLmluc3RpdHV0aW9uSWQgPiAwICYmICFwcm9wcy5pc0luc3RpdHV0aW9uTWVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXllbGxvdyBidG4tYmxvY2sgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXF1ZXN0LW1lbWJlcnNoaXAtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVxdWVzdC1tZW1iZXJzaGlwLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMucmVxdWVzdE1lbWJlcnNoaXAocHJvcHMudXNlcklkLCBwcm9wcy5pbnN0aXR1dGlvbklkLCBwcm9wcy5kb2N1bWVudFJvb3QpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtc3F1YXJlXCI+PC9pPiBSZXF1ZXN0IG1lbWJlcnNoaXBcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8c3Bhbj48L3NwYW4+KTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckluc3RpdHV0aW9uUGFnZShhcmdzKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8SW5zdGl0dXRpb24gZG9jdW1lbnRSb290PXthcmdzLmRvY3VtZW50Um9vdH0gdXNlcklkPXthcmdzLnVzZXJJZH0gaW5zdGl0dXRpb25JZD17YXJncy5pbnN0aXR1dGlvbklkfVxuICAgICAgICAgICAgICAgICAgICAgb2ZfdXNlcnNfYXBpX3VybD17YXJncy5vZl91c2Vyc19hcGlfdXJsfSByb2xlPXthcmdzLnJvbGV9IHN0b3JhZ2U9e2FyZ3Muc3RvcmFnZX0gbm9uUGVuZGluZ1VzZXJzPXthcmdzLm5vblBlbmRpbmdVc2Vyc31cbiAgICAgICAgICAgICAgICAgICAgIHBhZ2VNb2RlPXthcmdzLnBhZ2VNb2RlfS8+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RpdHV0aW9uXCIpXG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=