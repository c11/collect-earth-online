var account =
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
/******/ 		"account": 0
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
/******/ 	deferredModules.push(["./src/main/resources/public/jsx/account.js","vendors~account~collection~geodashreact~home~institution~project~timesync~widgetlayouteditor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/public/jsx/account.js":
/*!**************************************************!*\
  !*** ./src/main/resources/public/jsx/account.js ***!
  \**************************************************/
/*! exports provided: renderAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAccountPage", function() { return renderAccountPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function Account(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-darkgreen mb-3 no-container-margin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Your account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStats, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountForm, {
    documentRoot: props.documentRoot,
    userId: props.userId,
    accountId: props.accountId,
    userName: props.userName
  }));
}

function UserStats() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "user-stats",
    className: "col",
    style: {
      display: "None"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header px-0"
  }, "Here is your progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-lightgreen"
  }, "Level 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress w3-light-grey mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-striped bg-lightgreen",
    role: "progressbar",
    style: {
      width: "33%"
    },
    "aria-valuenow": "10",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "myBar",
    className: "w3-container w3-blue w3-center",
    style: {
      width: "33%"
    }
  }, "33%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You need to complete", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-lightgreen"
  }, "15"), "more plots to reach", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-lightgreen"
  }, "Level 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "user-stats-table",
    className: "table table-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "w-80"
  }, "Projects Worked So Far"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "w-20 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Speed Score Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "205"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Plots Completed Per Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "8"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Accuracy Score Per Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "10"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Plots Completed Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "16"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Accuracy Score Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "10"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Speed Score Per Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill bg-lightgreen"
  }, "205"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    style: {
      visibility: "visible"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Congratulations!"), "You are ranked", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-lightgreen"
  }, "#3"), " overall and", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-lightgreen"
  }, "#1"), " in your organization."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "d-block d-sm-none"
  }));
}

function AccountForm(props) {
  if (props.userId == props.accountId) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "account-form",
      className: "col mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Account Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      action: props.documentRoot + "/account/" + props.accountId,
      method: "post"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Reset email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoComplete: "off",
      id: "email",
      name: "email",
      placeholder: "New email",
      defaultValue: "",
      type: "email",
      className: "form-control"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password"
    }, "Reset password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoComplete: "off",
      id: "password",
      name: "password",
      placeholder: "New password",
      defaultValue: "",
      type: "password",
      className: "form-control mb-1"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoComplete: "off",
      id: "password-confirmation",
      name: "password-confirmation",
      placeholder: "New password confirmation",
      defaultValue: "",
      type: "password",
      className: "form-control"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "current-password"
    }, "Verify your identity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoComplete: " off",
      id: "current-password",
      name: "current-password",
      placeholder: "Current password",
      defaultValue: "",
      type: "password",
      className: "form-control"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "btn btn-outline-lightgreen btn-block",
      name: "update-account",
      defaultValue: "Update account settings",
      type: "submit"
    })));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "account-form",
      className: "col mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "header px-0"
    }, "Account Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.userName));
  }
}

function renderAccountPage(args) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Account, {
    documentRoot: args.documentRoot,
    userId: args.userId,
    accountId: args.accountId,
    userName: args.userName
  }), document.getElementById("account"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL21haW4vcmVzb3VyY2VzL3B1YmxpYy9qc3gvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJkb2N1bWVudFJvb3QiLCJ1c2VySWQiLCJhY2NvdW50SWQiLCJ1c2VyTmFtZSIsIlVzZXJTdGF0cyIsImRpc3BsYXkiLCJ3aWR0aCIsInZpc2liaWxpdHkiLCJBY2NvdW50Rm9ybSIsInJlbmRlckFjY291bnRQYWdlIiwiYXJncyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsU0FDSSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksc0ZBREosQ0FESixFQUlJLDJEQUFDLFNBQUQsT0FKSixFQUtJLDJEQUFDLFdBQUQ7QUFBYSxnQkFBWSxFQUFFQSxLQUFLLENBQUNDLFlBQWpDO0FBQStDLFVBQU0sRUFBRUQsS0FBSyxDQUFDRSxNQUE3RDtBQUNhLGFBQVMsRUFBRUYsS0FBSyxDQUFDRyxTQUQ5QjtBQUN5QyxZQUFRLEVBQUVILEtBQUssQ0FBQ0k7QUFEekQsSUFMSixDQURKO0FBVUg7O0FBRUQsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixTQUNJO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBUyxFQUFDLEtBQS9CO0FBQXFDLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUM7QUFBVDtBQUE1QyxLQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsNkJBREosRUFFSSx1RUFBSTtBQUFNLGFBQVMsRUFBQztBQUFoQixlQUFKLENBRkosRUFHSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFDSyxRQUFJLEVBQUMsYUFEVjtBQUN3QixTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FEL0I7QUFFSyxxQkFBYyxJQUZuQjtBQUV3QixxQkFBYyxHQUZ0QztBQUUwQyxxQkFBYztBQUZ4RCxJQURKLEVBSUk7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixhQUFTLEVBQUMsZ0NBQTFCO0FBQTJELFNBQUssRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUjtBQUFsRSxXQUpKLENBSEosRUFTSSw4RkFFSTtBQUFNLGFBQVMsRUFBQztBQUFoQixVQUZKLHlCQUlJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGVBSkosQ0FUSixFQWVJO0FBQU8sTUFBRSxFQUFDLGtCQUFWO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxLQUNJLDBFQUNJLHVFQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsOEJBREosRUFFSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQWlDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFNBQWpDLENBRkosQ0FESixFQUtJLHVFQUNJLDJGQURKLEVBRUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUE0QjtBQUFNLGFBQVMsRUFBQztBQUFoQixXQUE1QixDQUZKLENBTEosRUFTSSx1RUFDSSxxR0FESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBNEI7QUFBTSxhQUFTLEVBQUM7QUFBaEIsU0FBNUIsQ0FGSixDQVRKLEVBYUksdUVBQ0ksb0dBREosRUFFSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTRCO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFVBQTVCLENBRkosQ0FiSixFQWlCSSx1RUFDSSwrRkFESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBNEI7QUFBTSxhQUFTLEVBQUM7QUFBaEIsVUFBNUIsQ0FGSixDQWpCSixFQXFCSSx1RUFDSSw4RkFESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBNEI7QUFBTSxhQUFTLEVBQUM7QUFBaEIsVUFBNUIsQ0FGSixDQXJCSixFQXlCSSx1RUFDSSxpR0FESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBNEI7QUFBTSxhQUFTLEVBQUM7QUFBaEIsV0FBNUIsQ0FGSixDQXpCSixDQURKLENBZkosRUErQ0k7QUFBTSxTQUFLLEVBQUU7QUFBQ0MsZ0JBQVUsRUFBRTtBQUFiO0FBQWIsS0FDSSw2RUFDSSw4RkFESixvQkFHSTtBQUFNLGFBQVMsRUFBQztBQUFoQixVQUhKLGtCQUlJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFVBSkosMkJBREosRUFPSSxnRkFQSixDQS9DSixFQXdESTtBQUFJLGFBQVMsRUFBQztBQUFkLElBeERKLENBREo7QUE0REg7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQlQsS0FBckIsRUFBNEI7QUFDeEIsTUFBSUEsS0FBSyxDQUFDRSxNQUFOLElBQWdCRixLQUFLLENBQUNHLFNBQTFCLEVBQXFDO0FBQ2pDLFdBQ0k7QUFBSyxRQUFFLEVBQUMsY0FBUjtBQUF1QixlQUFTLEVBQUM7QUFBakMsT0FDSTtBQUFJLGVBQVMsRUFBQztBQUFkLDBCQURKLEVBRUksdUVBQUtILEtBQUssQ0FBQ0ksUUFBWCxDQUZKLEVBR0k7QUFBTSxZQUFNLEVBQUVKLEtBQUssQ0FBQ0MsWUFBTixHQUFxQixXQUFyQixHQUFtQ0QsS0FBSyxDQUFDRyxTQUF2RDtBQUFrRSxZQUFNLEVBQUM7QUFBekUsT0FDSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBTyxhQUFPLEVBQUM7QUFBZixxQkFESixFQUVJO0FBQU8sa0JBQVksRUFBQyxLQUFwQjtBQUEwQixRQUFFLEVBQUMsT0FBN0I7QUFBcUMsVUFBSSxFQUFDLE9BQTFDO0FBQWtELGlCQUFXLEVBQUMsV0FBOUQ7QUFBMEUsa0JBQVksRUFBQyxFQUF2RjtBQUNPLFVBQUksRUFBQyxPQURaO0FBRU8sZUFBUyxFQUFDO0FBRmpCLE1BRkosQ0FESixFQU9JO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFPLGFBQU8sRUFBQztBQUFmLHdCQURKLEVBRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFPLGtCQUFZLEVBQUMsS0FBcEI7QUFBMEIsUUFBRSxFQUFDLFVBQTdCO0FBQXdDLFVBQUksRUFBQyxVQUE3QztBQUF3RCxpQkFBVyxFQUFDLGNBQXBFO0FBQ08sa0JBQVksRUFBQyxFQURwQjtBQUVPLFVBQUksRUFBQyxVQUZaO0FBRXVCLGVBQVMsRUFBQztBQUZqQyxNQURKLENBREosRUFNSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBTyxrQkFBWSxFQUFDLEtBQXBCO0FBQTBCLFFBQUUsRUFBQyx1QkFBN0I7QUFBcUQsVUFBSSxFQUFDLHVCQUExRDtBQUNPLGlCQUFXLEVBQUMsMkJBRG5CO0FBQytDLGtCQUFZLEVBQUMsRUFENUQ7QUFDK0QsVUFBSSxFQUFDLFVBRHBFO0FBRU8sZUFBUyxFQUFDO0FBRmpCLE1BREosQ0FOSixDQUZKLENBUEosRUFzQkk7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQU8sYUFBTyxFQUFHO0FBQWpCLDhCQURKLEVBRUk7QUFBTyxrQkFBWSxFQUFDLE1BQXBCO0FBQTJCLFFBQUUsRUFBQyxrQkFBOUI7QUFBaUQsVUFBSSxFQUFDLGtCQUF0RDtBQUNPLGlCQUFXLEVBQUMsa0JBRG5CO0FBQ3NDLGtCQUFZLEVBQUMsRUFEbkQ7QUFDc0QsVUFBSSxFQUFDLFVBRDNEO0FBQ3NFLGVBQVMsRUFBQztBQURoRixNQUZKLENBdEJKLEVBMkJJO0FBQU8sZUFBUyxFQUFDLHNDQUFqQjtBQUF3RCxVQUFJLEVBQUMsZ0JBQTdEO0FBQ08sa0JBQVksRUFBQyx5QkFEcEI7QUFDOEMsVUFBSSxFQUFDO0FBRG5ELE1BM0JKLENBSEosQ0FESjtBQW9DSCxHQXJDRCxNQXFDTztBQUNILFdBQ0k7QUFBSyxRQUFFLEVBQUMsY0FBUjtBQUF1QixlQUFTLEVBQUM7QUFBakMsT0FDSTtBQUFJLGVBQVMsRUFBQztBQUFkLDBCQURKLEVBRUksdUVBQUtILEtBQUssQ0FBQ0ksUUFBWCxDQUZKLENBREo7QUFNSDtBQUNKOztBQUVNLFNBQVNNLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUNwQ0Msa0RBQVEsQ0FBQ0MsTUFBVCxDQUNJLDJEQUFDLE9BQUQ7QUFBUyxnQkFBWSxFQUFFRixJQUFJLENBQUNWLFlBQTVCO0FBQTBDLFVBQU0sRUFBRVUsSUFBSSxDQUFDVCxNQUF2RDtBQUErRCxhQUFTLEVBQUVTLElBQUksQ0FBQ1IsU0FBL0U7QUFBMEYsWUFBUSxFQUFFUSxJQUFJLENBQUNQO0FBQXpHLElBREosRUFFSVUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBRko7QUFJSCxDIiwiZmlsZSI6ImFjY291bnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhY2NvdW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi9yZXNvdXJjZXMvcHVibGljL2pzeC9hY2NvdW50LmpzXCIsXCJ2ZW5kb3JzfmFjY291bnR+Y29sbGVjdGlvbn5nZW9kYXNocmVhY3R+aG9tZX5pbnN0aXR1dGlvbn5wcm9qZWN0fnRpbWVzeW5jfndpZGdldGxheW91dGVkaXRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmZ1bmN0aW9uIEFjY291bnQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmtncmVlbiBtYi0zIG5vLWNvbnRhaW5lci1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8aDE+WW91ciBhY2NvdW50PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFVzZXJTdGF0cy8+XG4gICAgICAgICAgICA8QWNjb3VudEZvcm0gZG9jdW1lbnRSb290PXtwcm9wcy5kb2N1bWVudFJvb3R9IHVzZXJJZD17cHJvcHMudXNlcklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZD17cHJvcHMuYWNjb3VudElkfSB1c2VyTmFtZT17cHJvcHMudXNlck5hbWV9Lz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBVc2VyU3RhdHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInVzZXItc3RhdHNcIiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17e2Rpc3BsYXk6XCJOb25lXCJ9fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgcHgtMFwiPkhlcmUgaXMgeW91ciBwcm9ncmVzczwvaDI+XG4gICAgICAgICAgICA8aDE+PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmctbGlnaHRncmVlblwiPkxldmVsIDE8L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdzMtbGlnaHQtZ3JleSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgYmctbGlnaHRncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT17e3dpZHRoOiBcIjMzJVwifX1cbiAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9XCIxMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJteUJhclwiIGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1ibHVlIHczLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6IFwiMzMlXCJ9fT4zMyU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgWW91IG5lZWQgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiZy1saWdodGdyZWVuXCI+MTU8L3NwYW4+XG4gICAgICAgICAgICAgICAgbW9yZSBwbG90cyB0byByZWFjaFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLWxpZ2h0Z3JlZW5cIj5MZXZlbCAyPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHRhYmxlIGlkPVwidXNlci1zdGF0cy10YWJsZVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtXCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidy04MFwiPlByb2plY3RzIFdvcmtlZCBTbyBGYXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInctMjAgdGV4dC1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJnLWxpZ2h0Z3JlZW5cIj4yPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TcGVlZCBTY29yZSBUb3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJnLWxpZ2h0Z3JlZW5cIj4yMDU8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBsb3RzIENvbXBsZXRlZCBQZXIgUHJvamVjdDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJnLWxpZ2h0Z3JlZW5cIj44PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BY2N1cmFjeSBTY29yZSBQZXIgUHJvamVjdDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJnLWxpZ2h0Z3JlZW5cIj4xMDwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGxvdHMgQ29tcGxldGVkIFRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmctbGlnaHRncmVlblwiPjE2PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BY2N1cmFjeSBTY29yZSBUb3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJnLWxpZ2h0Z3JlZW5cIj4xMDwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3BlZWQgU2NvcmUgUGVyIFByb2plY3Q8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiZy1saWdodGdyZWVuXCI+MjA1PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8Zm9ybSBzdHlsZT17e3Zpc2liaWxpdHk6IFwidmlzaWJsZVwifX0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbmdyYXR1bGF0aW9ucyE8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgWW91IGFyZSByYW5rZWRcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmctbGlnaHRncmVlblwiPiMzPC9zcGFuPiBvdmVyYWxsIGFuZFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiZy1saWdodGdyZWVuXCI+IzE8L3NwYW4+IGluIHlvdXIgb3JnYW5pemF0aW9uLlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImQtYmxvY2sgZC1zbS1ub25lXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBBY2NvdW50Rm9ybShwcm9wcykge1xuICAgIGlmIChwcm9wcy51c2VySWQgPT0gcHJvcHMuYWNjb3VudElkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3VudC1mb3JtXCIgY2xhc3NOYW1lPVwiY29sIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyIHB4LTBcIj5BY2NvdW50IFNldHRpbmdzPC9oMj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLnVzZXJOYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXtwcm9wcy5kb2N1bWVudFJvb3QgKyBcIi9hY2NvdW50L1wiICsgcHJvcHMuYWNjb3VudElkfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlJlc2V0IGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhdXRvQ29tcGxldGU9XCJvZmZcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJOZXcgZW1haWxcIiBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UmVzZXQgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhdXRvQ29tcGxldGU9XCJvZmZcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJOZXcgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0xXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhdXRvQ29tcGxldGU9XCJvZmZcIiBpZD1cInBhc3N3b3JkLWNvbmZpcm1hdGlvblwiIG5hbWU9XCJwYXNzd29yZC1jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uXCIgZGVmYXVsdFZhbHVlPVwiXCIgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiY3VycmVudC1wYXNzd29yZFwiPlZlcmlmeSB5b3VyIGlkZW50aXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhdXRvQ29tcGxldGU9XCIgb2ZmXCIgaWQ9XCJjdXJyZW50LXBhc3N3b3JkXCIgbmFtZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3VycmVudCBwYXNzd29yZFwiIGRlZmF1bHRWYWx1ZT1cIlwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRncmVlbiBidG4tYmxvY2tcIiBuYW1lPVwidXBkYXRlLWFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiVXBkYXRlIGFjY291bnQgc2V0dGluZ3NcIiB0eXBlPVwic3VibWl0XCIvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3VudC1mb3JtXCIgY2xhc3NOYW1lPVwiY29sIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyIHB4LTBcIj5BY2NvdW50IFNldHRpbmdzPC9oMj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLnVzZXJOYW1lfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBY2NvdW50UGFnZShhcmdzKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8QWNjb3VudCBkb2N1bWVudFJvb3Q9e2FyZ3MuZG9jdW1lbnRSb290fSB1c2VySWQ9e2FyZ3MudXNlcklkfSBhY2NvdW50SWQ9e2FyZ3MuYWNjb3VudElkfSB1c2VyTmFtZT17YXJncy51c2VyTmFtZX0vPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpXG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=