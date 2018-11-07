module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/components/App.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-1220614557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1220614557",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New',monospace,serif;font-weight:400;}body{margin:0;background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUlzRSxBQUlwRCxTQUNRLGlCQUNuQiwrR0FMb0IsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL2NvbXBvbmVudHMvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCAnTHVjaWRhIENvbnNvbGUnLCAnTGliZXJhdGlvbiBNb25vJywgJ0RlamFWdSBTYW5zIE1vbm8nLFxuICAgICAgICAgICdCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbWFpbj5cbilcbiAgICAvLyA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIC8vICAgKiB7XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCAnTHVjaWRhIENvbnNvbGUnLCAnTGliZXJhdGlvbiBNb25vJyxcbiAgICAvLyAgICAgICAnRGVqYVZ1IFNhbnMgTW9ubycsICdCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLFxuICAgIC8vICAgICAgIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgLy8gICB9XG4gICAgLy8gICBib2R5IHtcbiAgICAvLyAgICAgbWFyZ2luOiAwO1xuICAgIC8vICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gICAgLy8gICB9XG4gICAgLy8gICBhIHtcbiAgICAvLyAgICAgY29sb3I6ICMyMmJhZDk7XG4gICAgLy8gICB9XG4gICAgLy8gICBwIHtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGFydGljbGUge1xuICAgIC8vICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAvLyAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGJ1dHRvbiB7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmJhZDk7XG4gICAgLy8gICAgIGJvcmRlcjogMDtcbiAgICAvLyAgICAgY29sb3I6IHdoaXRlO1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgIC8vICAgfVxuICAgIC8vICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjlkYjc7XG4gICAgLy8gICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICAvLyAgIH1cbiAgICAvLyAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgLy8gICAgIG91dGxpbmU6IG5vbmU7XG4gICAgLy8gICB9XG4gICAgLy8gYH08L3N0eWxlPlxuLy8gICA8L21haW4+XG4vLyApXG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/components/App.js */",
    __self: this
  }));
}); // <style jsx global>{`
//   * {
//     font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
//       'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
//       monospace, serif;
//   }
//   body {
//     margin: 0;
//     padding: 25px 50px;
//   }
//   a {
//     color: #22bad9;
//   }
//   p {
//     font-size: 14px;
//     line-height: 24px;
//   }
//   article {
//     margin: 0 auto;
//     max-width: 650px;
//   }
//   button {
//     align-items: center;
//     background-color: #22bad9;
//     border: 0;
//     color: white;
//     display: flex;
//     padding: 5px 7px;
//   }
//   button:active {
//     background-color: #1b9db7;
//     transition: background-color 0.3s;
//   }
//   button:focus {
//     outline: none;
//   }
// `}</style>
//   </main>
// )

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/Portfolio */ "./pages/portfolio/Portfolio.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/index.js";


 // import CarouselApp from './carousel/CarouselApp';
// import Pose from './pose/Pose'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/portfolio/Portfolio.js":
/*!**************************************!*\
  !*** ./pages/portfolio/Portfolio.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Button */ "./pages/portfolio/components/Button.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./pages/portfolio/components/Home.js");
/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sections */ "./pages/portfolio/components/Sections.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Contact */ "./pages/portfolio/components/Contact.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js";





function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    start: 0,
    end: 50,
    duration: 1000,
    icon: "\u02C5",
    action: function action() {
      window.scrollTo({
        top: 385,
        left: 0,
        behavior: 'smooth'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sections__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/Button.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Button.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./pages/portfolio/components/Circle.js");
/* harmony import */ var _hooks_useProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useProgress */ "./pages/portfolio/hooks/useProgress.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ButtonWrapper = react_pose__WEBPACK_IMPORTED_MODULE_4___default.a.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.1
  }
});
function Button(props) {
  var position = Object(_hooks_useProgress__WEBPACK_IMPORTED_MODULE_3__["default"])(props.start, props.end, props.duration);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      opacity = _useState4[0],
      setOpacity = _useState4[1];

  var action = props.action;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, {
    className: "button-container",
    style: {
      opacity: "".concat(position * .03)
    },
    pose: hovering ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovering(false);
    },
    onClick: action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      right: "".concat(position, "%")
    },
    className: "jsx-1166425071" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1166425071",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.button{position:absolute;top:-25px;right:-100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3lCLEFBR3NCLEFBTU8sV0FMQSxPQU1ULFVBQ0csQ0FOSyxZQU9uQixLQU5pQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XG5cbmltcG9ydCB1c2VQcm9ncmVzcyBmcm9tICcuLi9ob29rcy91c2VQcm9ncmVzcydcbmltcG9ydCBwb3NlZCBmcm9tIFwicmVhY3QtcG9zZVwiO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gcG9zZWQuZGl2KHtcbiAgaWRsZTogeyBzY2FsZTogMSB9LFxuICBob3ZlcmVkOiB7IHNjYWxlOiAxLjEgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICBsZXQgcG9zaXRpb24gPSB1c2VQcm9ncmVzcyhwcm9wcy5zdGFydCxwcm9wcy5lbmQscHJvcHMuZHVyYXRpb24pXG4gIGNvbnN0IFtob3ZlcmluZywgc2V0SG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BhY2l0eSwgc2V0T3BhY2l0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgbGV0IGFjdGlvbiA9IHByb3BzLmFjdGlvbjtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25XcmFwcGVyXG4gICAgICBjbGFzc05hbWU9J2J1dHRvbi1jb250YWluZXInXG4gICAgICBzdHlsZT17eyBvcGFjaXR5OiBgJHtwb3NpdGlvbiouMDN9YCB9fVxuICAgICAgcG9zZT17aG92ZXJpbmcgPyBcImhvdmVyZWRcIiA6IFwiaWRsZVwifVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmluZyh0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJpbmcoZmFsc2UpfVxuICAgICAgb25DbGljaz17YWN0aW9ufVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgIHN0eWxlPXt7IHJpZ2h0OiBgJHtwb3NpdGlvbn0lYCB9fVxuICAgICAgPlxuICAgICAgICA8Q2lyY2xlIHsuLi5wcm9wc30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOi0yNXB4O1xuICAgICAgICAgIHJpZ2h0Oi0xMDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/Circle.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Circle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Circle.js";


function Circle(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3661733204" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3661733204" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3661733204",
    css: ".circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}.circle:hover{box-shadow:0 5px 15px rgba(33,33,33,1);}.down-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJeUIsQUFHMEMsQUFTUSxBQUcxQixhQUNVLGtCQVpaLEtBYUksR0FKakIsR0FSYyxTQWFXLEdBWkwsa0JBQ0Esa0JBQ1EsNkNBV0osZUFWRSxPQVcxQixpREFWQSIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9DaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjbGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb3duLWFycm93Jz57cHJvcHMuaWNvbn08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGU6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgzMywzMywzMywxKTtcbiAgICAgICAgfVxuICAgICAgICAuZG93bi1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMjUsMSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Circle.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/Contact.js":
/*!***********************************************!*\
  !*** ./pages/portfolio/components/Contact.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Contact.js";


function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "contact",
    className: "jsx-4181371719" + " " + 'contact-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4181371719",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4181371719",
    css: ".contact-container{background:rgba(0,0,0,.9);color:rgba(255,255,255,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXlCLEFBR3FDLDBCQUU3QiwwQkFBQyIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9Db250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0LWNvbnRhaW5lcic+XG4gICAgICA8cD5Db250YWN0PC9wPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC45KTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Contact.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/Home.js":
/*!********************************************!*\
  !*** ./pages/portfolio/components/Home.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Home.js";


function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2201009381" + " " + 'home',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2201009381" + " " + 'cat-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://s3-us-west-2.amazonaws.com/beb-ui/kitten_green.png",
    className: "jsx-2201009381" + " " + 'cat',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2201009381" + " " + 'headline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Hi! I'm", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2201009381" + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " Brian E. Bill")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2201009381" + " " + 'sub-headline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "UI/FE Designer from Bird Rock"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2201009381",
    css: ".home{text-align:center;z-index:-10;background:rgba(20,20,20,1);color:rgba(255,255,255,.9);height:500px;}.name{color:rgba(123,189,212,1);font-weight:200;}.cat-container{margin:auto;padding-top:80px;}.cat{width:200px;}.headline{font-size:26px;margin-top:10px;}.sub-headline{color:rgba(255,255,255,0.8);font-size:17px;margin-top:-10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3lCLEFBRzZCLEFBT1EsQUFJZCxBQUlBLEFBR0csQUFJYSxZQVZaLEFBSWxCLEdBR2tCLEdBbEJMLFFBT0ssRUFlRCxDQVZqQixDQVg4QixDQWtCOUIsV0FYQSxDQWVtQixlQXJCVSxFQXNCN0IseUJBckJlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXQtY29udGFpbmVyJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2NhdCcgc3JjPSdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2JlYi11aS9raXR0ZW5fZ3JlZW4ucG5nJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkbGluZSc+XG4gICAgICAgIEhpISBJJ21cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYW1lJz4gQnJpYW4gRS4gQmlsbDwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdzdWItaGVhZGxpbmUnPlVJL0ZFIERlc2lnbmVyIGZyb20gQmlyZCBSb2NrPC9oND5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5ob21lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDotMTA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMTIzLDE4OSwyMTIsMSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgfVxuICAgICAgICAuY2F0LWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhdCB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkbGluZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1oZWFkbGluZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Home.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/Sections.js":
/*!************************************************!*\
  !*** ./pages/portfolio/components/Sections.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sections; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./pages/portfolio/components/Button.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Sections.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SectionNav = function SectionNav(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 1),
      verticalScroll = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {});
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-678142912" + " " + 'nav-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    start: 0,
    end: 50,
    duration: 1000,
    icon: "\u02C5",
    action: function action() {
      window.scrollTo({
        top: 385,
        left: 0,
        behavior: 'smooth'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "678142912",
    css: ".nav-container{float:right;margin-right:50px;margin-top:150px;height:100px;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL1NlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCeUIsQUFHdUIsWUFDTSxrQkFDRCxpQkFDSixhQUNGLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jb25zdCBTZWN0aW9uTmF2ID0gKHByb3BzKSA9PiB7XG4gIGxldCBbIHZlcnRpY2FsU2Nyb2xsIF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdi1jb250YWluZXInPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzdGFydD17MH1cbiAgICAgICAgZW5kPXs1MH1cbiAgICAgICAgZHVyYXRpb249ezEwMDB9XG4gICAgICAgIGljb249JyYjNzA5OydcbiAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgdG9wOiAzODUsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxubGV0IF9zZWN0aW9ucyA9IFtcbiAge1xuICAgICdvcmRlcic6IDAsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoNTMsMTMzLDE1NiwxKSwgcmdiYSgxMjMsMTg5LDIxMiwxKSknXG4gIH0sXG4gIHtcbiAgICAnb3JkZXInOiAxLFxuICAgICdiZyc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDAwNDI4LCAjMDA0ZTkyKSdcbiAgfSxcbiAge1xuICAgICdvcmRlcic6IDIsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoODYsMTcxLDQ3LDEpLCByZ2JhKDE2OCwyMjQsOTksMSkpJ1xuICB9LFxuICB7XG4gICAgJ29yZGVyJzogMyxcbiAgICAnYmcnOiAnJ1xuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9ucyAocHJvcHMpIHtcbiAgbGV0IFsgaW5kZXgsIHNldEluZGV4IF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IHZpc2libGUgPSBfc2VjdGlvbnNbaW5kZXhdO1xuICBsZXQgbmV4dCA9IF9zZWN0aW9uc1tpbmRleF0rMTtcbiAgbGV0IHByZXYgPSBfc2VjdGlvbnNbaW5kZXhdLTE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25zJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWJnJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGAke3Zpc2libGUuYmd9YH19PlxuICAgICAgICA8U2VjdGlvbk5hdiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc2VjdGlvbnMge1xuICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tYmcge1xuICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Sections.js */",
    __self: this
  }));
};

var _sections = [{
  'order': 0,
  'bg': 'linear-gradient(to bottom right, rgba(53,133,156,1), rgba(123,189,212,1))'
}, {
  'order': 1,
  'bg': 'linear-gradient(to bottom right, #000428, #004e92)'
}, {
  'order': 2,
  'bg': 'linear-gradient(to bottom right, rgba(86,171,47,1), rgba(168,224,99,1))'
}, {
  'order': 3,
  'bg': ''
}];
function Sections(props) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var visible = _sections[index];
  var next = _sections[index] + 1;
  var prev = _sections[index] - 1;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3310860017" + " " + 'sections',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "".concat(visible.bg)
    },
    className: "jsx-3310860017" + " " + 'section-bg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3310860017",
    css: ".sections{height:600px;width:100%;margin-top:-18px;z-index:5;position:relative;}.section-bg{height:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL1NlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFeUIsQUFHd0IsQUFPQSxhQU5GLEFBT2IsV0FObUIsaUJBQ1AsVUFDUSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jb25zdCBTZWN0aW9uTmF2ID0gKHByb3BzKSA9PiB7XG4gIGxldCBbIHZlcnRpY2FsU2Nyb2xsIF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdi1jb250YWluZXInPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzdGFydD17MH1cbiAgICAgICAgZW5kPXs1MH1cbiAgICAgICAgZHVyYXRpb249ezEwMDB9XG4gICAgICAgIGljb249JyYjNzA5OydcbiAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgdG9wOiAzODUsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxubGV0IF9zZWN0aW9ucyA9IFtcbiAge1xuICAgICdvcmRlcic6IDAsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoNTMsMTMzLDE1NiwxKSwgcmdiYSgxMjMsMTg5LDIxMiwxKSknXG4gIH0sXG4gIHtcbiAgICAnb3JkZXInOiAxLFxuICAgICdiZyc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDAwNDI4LCAjMDA0ZTkyKSdcbiAgfSxcbiAge1xuICAgICdvcmRlcic6IDIsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoODYsMTcxLDQ3LDEpLCByZ2JhKDE2OCwyMjQsOTksMSkpJ1xuICB9LFxuICB7XG4gICAgJ29yZGVyJzogMyxcbiAgICAnYmcnOiAnJ1xuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9ucyAocHJvcHMpIHtcbiAgbGV0IFsgaW5kZXgsIHNldEluZGV4IF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IHZpc2libGUgPSBfc2VjdGlvbnNbaW5kZXhdO1xuICBsZXQgbmV4dCA9IF9zZWN0aW9uc1tpbmRleF0rMTtcbiAgbGV0IHByZXYgPSBfc2VjdGlvbnNbaW5kZXhdLTE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25zJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWJnJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGAke3Zpc2libGUuYmd9YH19PlxuICAgICAgICA8U2VjdGlvbk5hdiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc2VjdGlvbnMge1xuICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tYmcge1xuICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Sections.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/hooks/useProgress.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/hooks/useProgress.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useProgress = function useProgress(start, end, duration) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(start),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var getProgress = function getProgress(_ref) {
      var elapsed = _ref.elapsed,
          total = _ref.total;
      return Math.min(elapsed / total, 1);
    };

    var easeOut = function easeOut(progress) {
      return Math.pow(--progress, 5) + 1;
    };

    var time = {
      start: performance.now(),
      total: duration
    };
    var finalPosition = 47.5;
    var rafId = null;

    var step = function step(now) {
      time.elapsed = now - time.start;
      var progress = getProgress(time);
      var easing = easeOut(progress);
      var position = easing * finalPosition; //element.style.transform = `translate(${position}px)`;
      // let step = timestamp => {
      //   if (!start) start = timestamp;
      //   let progress = timestamp - start;

      setProgress(position * 1000);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return function () {
      return cancelAnimationFrame(rafId);
    };
  }, [start, end, duration]);
  return Math.min(progress / duration, duration);
};

/* harmony default export */ __webpack_exports__["default"] = (useProgress);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map