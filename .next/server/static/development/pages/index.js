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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/projects */ "./pages/portfolio/data/projects.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Button */ "./pages/portfolio/components/Button.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ "./pages/portfolio/components/Header.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home */ "./pages/portfolio/components/Home.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Contact */ "./pages/portfolio/components/Contact.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import useWindowScrollPosition from './hooks/useWindowScrollPosition'







function HomeSpacer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "home-spacer",
    style: {
      "height": "570px"
    },
    className: "jsx-105545318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "105545318",
    css: "#home-spacer{position:relative;overflow:hidden;z-index:1;max-width:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ5QixBQUc2QixrQkFDRixnQkFDTixVQUNJLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmXG59IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHVzZVdpbmRvd1Njcm9sbFBvc2l0aW9uIGZyb20gJy4vaG9va3MvdXNlV2luZG93U2Nyb2xsUG9zaXRpb24nXG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdCc7XG5cbmZ1bmN0aW9uIEhvbWVTcGFjZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImhvbWUtc3BhY2VyXCJcbiAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjU3MHB4XCIgfX1cbiAgICA+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjaG9tZS1zcGFjZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24oe1xuICBpc0N1cnJlbnQsXG4gIGltZyxcbiAgYmcsXG4gIGRlc2NyaXB0aW9uLFxuICBpZFxufSkge1xuICBpZiAoaXNDdXJyZW50KSB7XG4gICAgY29uc29sZS5sb2coYmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdob2xkZXInXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJoZWlnaHRcIiA6IFwiNTIwcHhcIixcbiAgICAgICAgICBcImJveFNoYWRvd1wiIDogXCJyZ2JhKDAsMCwwLC4yNCkgMHB4IDJweCA2cHggMHB4XCIsXG4gICAgICAgICAgXCJ6SW5kZXhcIjogJy0xJyxcbiAgICAgICAgICBcIm1hcmdpblRvcFwiOiBcIi01MHB4XCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBiZyxcbiAgICAgICAgICBcIm92ZXJmbG93XCI6IFwidmlzaWJsZVwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3QnXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcIndpZHRoXCIgOiAnMTAwJScsXG4gICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIFwiekluZGV4XCI6ICcwJyxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiIDogaXNDdXJyZW50ID8gMSA6IDAsXG4gICAgICAgICAgICBcInpJbmRleFwiIDogaXNDdXJyZW50ID8gMSA6IC0xXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uLXRleHQnPlxuICAgICAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZS1jb250YWluZXInPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3QtaW1hZ2UnXG4gICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICBzdHlsZT17eyBcImhlaWdodFwiIDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB6LWluZGV4IDFzLCBkaXNwbGF5IDFzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42NSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHRvcDogMTY2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtaW1hZ2VcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbn1cblxuY29uc3QgUG9ydGZvbGlvID0gZnVuY3Rpb24oKSB7XG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIk5FWFRcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IChzdGF0ZS5jdXJyZW50SW5kZXggKyAxICsgcHJvamVjdHMubGVuZ3RoKSAlIHByb2plY3RzLmxlbmd0aCxcbiAgICAgICAgICAgIC8vIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNhc2UgXCJQUkVWXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4OiAoc3RhdGUuY3VycmVudEluZGV4IC0gMSArIHByb2plY3RzLmxlbmd0aCkgJSBwcm9qZWN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgIC8vIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gY2FzZSBcIlBST0dSRVNTXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNQbGF5aW5nOiBhY3Rpb24udHlwZSA9PT0gXCJQUk9HUkVTU1wiLFxuICAgICAgICAvLyAgICAgY3VycmVudEluZGV4OiAoc3RhdGUuY3VycmVudEluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoXG4gICAgICAgIC8vICAgfTtcbiAgICAgICAgLy8gY2FzZSBcIlBBVVNFXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAvLyAgIH07XG4gICAgICAgIC8vIGNhc2UgXCJQTEFZXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgICAgIC8vICAgfTtcblxuICAgICAgICAvLyBjYXNlIFwiR09UT1wiOlxuICAgICAgICAvLyAgIHJldHVybiB7XG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gICAgIHRha2VGb2N1czogdHJ1ZSxcbiAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIC8vICAgfTtcbiAgICAgICAgLy8gY2FzZSBcIlVOU0VUX0ZPQ1VTXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgdGFrZUZvY3VzOiBmYWxzZVxuICAgICAgICAvLyAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgLy8gaXNQbGF5aW5nOiBmYWxzZSxcbiAgICAgIC8vIHRha2VGb2N1czogZmFsc2VcblxuICAgIH1cbiAgKTtcblxuICAvLyBjb25zdCBbYnV0dG9uT25lT3BhY2l0eSwgc2V0QnV0dG9uT25lT3BhY2l0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgLy8gY29uc3QgW2NsaWNrZWRCdXR0b25PbmUsIHNldENsaWNrZWRCdXR0b25PbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgY2xpY2tlZEJ1dHRvbk9uZSA/IHNldEJ1dHRvbk9uZU9wYWNpdHkoMCkgOiBzZXRCdXR0b25PbmVPcGFjaXR5KDEpXG4gIC8vICAgfSwgW2NsaWNrZWRCdXR0b25PbmVdXG4gIC8vICk7XG4gIC8vXG4gIC8vIGNvbnN0IFtwcm9qZWN0c05hdk9wYWNpdHksIHNldFByb2plY3RzTmF2T3BhY2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gdXNlRWZmZWN0KFxuICAvLyAgICgpID0+IHtcbiAgLy8gICAgIGNsaWNrZWRCdXR0b25PbmUgPyBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMSkgOiBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMCk7XG4gIC8vICAgfSwgW11cbiAgLy8gKTtcbiAgLy9cbiAgLy8gdXNlRWZmZWN0KFxuICAvLyAgICgpID0+IHtcbiAgLy8gICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMjAgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgNjAwKSB7XG4gIC8vICAgICAgIHNldFByb2plY3RzTmF2T3BhY2l0eSgxKVxuICAvL1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0UHJvamVjdHNOYXZPcGFjaXR5KDApXG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfSwgW11cbiAgLy8gKVxuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICB9LCBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nYXBwJz5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPEhvbWUvPlxuICAgICAgPEhvbWVTcGFjZXIvPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J3Byb2plY3RzJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIFwiaGVpZ2h0XCIgOiBcIjY0MHB4XCIsXG4gICAgICAgICAgXCJ6SW5kZXhcIjogXCIwXCJcbiAgICAgICAgfX1cbiAgICAgID5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb3BhY2l0eT17MX1cbiAgICAgICAgICBpZD0nYnV0dG9uJ1xuICAgICAgICAgIHN0YXJ0PXswfVxuICAgICAgICAgIGVuZD17NTB9XG4gICAgICAgICAgZHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgaWNvbj0nJiM3MDk7J1xuICAgICAgICAgIHNjYWxlSD17MS4yNX1cbiAgICAgICAgICBzY2FsZVY9ezF9XG4gICAgICAgICAga2xhc3M9J2Rvd24tYXJyb3cnXG4gICAgICAgICAgcG9zaXRpb249J2Fic29sdXRlJ1xuICAgICAgICAgIGxlZnQ9JzQ4LjUlJ1xuICAgICAgICAgIHpJbmRleD17NX1cbiAgICAgICAgICBtYXJnaW5Ub3A9Jy0yNXB4J1xuICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XG4gICAgICAgICAgICBiZz17cHJvamVjdC5iZ31cbiAgICAgICAgICAgIGltZz17cHJvamVjdC5pbWd9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIGFyaWFIaWRkZW49eyhpbmRleCAhPSBzdGF0ZS5jdXJyZW50SW5kZXgpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcidcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgXCJ6SW5kZXhcIiA6IFwiNVwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBcInJpZ2h0XCI6IFwiNzVweFwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogXCIxMjBweFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgICAgICBpY29uPScmIzcwNjsnXG4gICAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgICAgICBrbGFzcz0nbGVmdC1hcnJvdydcbiAgICAgICAgICAgIHRvcD0nMTAwcHgnXG4gICAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBSRVZcIiB9KTtcbiAgICAgICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgICAgIC8vcG9zaXRpb24gcHJldmlvdXMgcHJvamVjdCAoaW5kZXgtMSB1bmxlc3MgaW5kZXggPT09IDApIHRvIGxlZnRcbiAgICAgICAgICAgICAgICAvL3RyYW5zaXRpb24gcG9zaXRpb24gYmV0d2VlbiBjdXJyZW50IHByb2plY3QgYW5kIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvcGFjaXR5PVwiLjhcIlxuICAgICAgICAgICAgaWNvbj0nJiM3MDc7J1xuICAgICAgICAgICAgc2NhbGVIPXsxfVxuICAgICAgICAgICAgc2NhbGVWPXsxLjI1fVxuICAgICAgICAgICAga2xhc3M9J3JpZ2h0LWFycm93J1xuICAgICAgICAgICAgdG9wPScyNXB4J1xuICAgICAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJORVhUXCIgfSk7XG4gICAgICAgICAgICAgICAgLy9nZXQgaW5kZXhcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uIG5leHQgcHJvamVjdCB0byByaWdodFxuICAgICAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBwb3NpdGlvbiBiZXR3ZWVuIGN1cnJlbnQgcHJvamVjdCBhbmQgbmV4dFxuICAgICAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBiZyBjb2xvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjYXBwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgICAgICNwcm9qZWN0cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB6LWluZGV4OjY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogNTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhvbGRlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
    __self: this
  }));
}

var Project = function Project(_ref) {
  var isCurrent = _ref.isCurrent,
      img = _ref.img,
      bg = _ref.bg,
      description = _ref.description,
      id = _ref.id;

  if (isCurrent) {
    console.log(bg);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        "height": "520px",
        "boxShadow": "rgba(0,0,0,.24) 0px 2px 6px 0px",
        "zIndex": '-1',
        "marginTop": "-50px",
        "position": "relative",
        "background": bg,
        "overflow": "visible"
      },
      className: "jsx-694158980" + " " + 'holder',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: id,
      style: _defineProperty({
        "width": '100%',
        "top": 0,
        "left": 0,
        "position": "absolute",
        "zIndex": '0',
        "opacity": isCurrent ? 1 : 0
      }, "zIndex", isCurrent ? 1 : -1),
      className: "jsx-694158980" + " " + 'project',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-694158980" + " " + 'project-description',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-694158980" + " " + 'project-description-text',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-694158980",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, description))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-694158980" + " " + 'project-image-container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: img,
      style: {
        "height": "100%"
      },
      className: "jsx-694158980" + " " + 'project-image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "694158980",
      css: "{.project-image display:block;vertical-align:middle;border:0;}.project{height:640px;overflow:hidden;-webkit-transition:opacity 1s,z-index 1s,display 1s;transition:opacity 1s,z-index 1s,display 1s;}.project-description{width:40%;height:640px;color:rgba(255,255,255,.65);position:absolute;left:0;}.project-description-text{top:166px;padding-left:20%;padding-right:5%;position:absolute;width:100%;}.project-image-container{width:60%;position:absolute;left:40%;height:640px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0YyQixBQUcwQixBQUtILEFBT0EsQUFPQSxBQU1JLFVBbkJELEFBT0ksQUFPQyxHQW5CRixVQU1ZLElBT1gsQ0FPUixDQW5CcUMsQUF3QnhCLFFBSlQsT0FQSyxNQVFwQixDQWZvQixBQW1CVCxTQUViLEVBYmUsT0FQSixJQVFULEdBUEEsaURBUEEiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL1BvcnRmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlUmVkdWNlcixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWZcbn0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgdXNlV2luZG93U2Nyb2xsUG9zaXRpb24gZnJvbSAnLi9ob29rcy91c2VXaW5kb3dTY3JvbGxQb3NpdGlvbidcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9kYXRhL3Byb2plY3RzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0JztcblxuZnVuY3Rpb24gSG9tZVNwYWNlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiaG9tZS1zcGFjZXJcIlxuICAgICAgc3R5bGU9e3sgXCJoZWlnaHRcIiA6IFwiNTcwcHhcIiB9fVxuICAgID5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNob21lLXNwYWNlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDFweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbih7XG4gIGlzQ3VycmVudCxcbiAgaW1nLFxuICBiZyxcbiAgZGVzY3JpcHRpb24sXG4gIGlkXG59KSB7XG4gIGlmIChpc0N1cnJlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhiZylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2hvbGRlcidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcImhlaWdodFwiIDogXCI1MjBweFwiLFxuICAgICAgICAgIFwiYm94U2hhZG93XCIgOiBcInJnYmEoMCwwLDAsLjI0KSAwcHggMnB4IDZweCAwcHhcIixcbiAgICAgICAgICBcInpJbmRleFwiOiAnLTEnLFxuICAgICAgICAgIFwibWFyZ2luVG9wXCI6IFwiLTUwcHhcIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBcImJhY2tncm91bmRcIiA6IGJnLFxuICAgICAgICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvamVjdCdcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIFwid2lkdGhcIiA6ICcxMDAlJyxcbiAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgXCJ6SW5kZXhcIjogJzAnLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCIgOiBpc0N1cnJlbnQgPyAxIDogMCxcbiAgICAgICAgICAgIFwiekluZGV4XCIgOiBpc0N1cnJlbnQgPyAxIDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QtZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QtZGVzY3JpcHRpb24tdGV4dCc+XG4gICAgICAgICAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWltYWdlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZSdcbiAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucHJvamVjdCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHotaW5kZXggMXMsIGRpc3BsYXkgMXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0MHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjY1KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uLXRleHQge1xuICAgICAgICAgICAgdG9wOiAxNjZweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1pbWFnZVxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgeyByZXR1cm4gZmFsc2UgfVxufVxuXG5jb25zdCBQb3J0Zm9saW8gPSBmdW5jdGlvbigpIHtcbiAgbGV0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiTkVYVFwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogKHN0YXRlLmN1cnJlbnRJbmRleCArIDEgKyBwcm9qZWN0cy5sZW5ndGgpICUgcHJvamVjdHMubGVuZ3RoLFxuICAgICAgICAgICAgLy8gaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgICAgY2FzZSBcIlBSRVZcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IChzdGF0ZS5jdXJyZW50SW5kZXggLSAxICsgcHJvamVjdHMubGVuZ3RoKSAlIHByb2plY3RzLmxlbmd0aCxcbiAgICAgICAgICAgICAgLy8gaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBjYXNlIFwiUFJPR1JFU1NcIjpcbiAgICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vICAgICBpc1BsYXlpbmc6IGFjdGlvbi50eXBlID09PSBcIlBST0dSRVNTXCIsXG4gICAgICAgIC8vICAgICBjdXJyZW50SW5kZXg6IChzdGF0ZS5jdXJyZW50SW5kZXggKyAxKSAlIHNsaWRlcy5sZW5ndGhcbiAgICAgICAgLy8gICB9O1xuICAgICAgICAvLyBjYXNlIFwiUEFVU0VcIjpcbiAgICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgIC8vICAgfTtcbiAgICAgICAgLy8gY2FzZSBcIlBMQVlcIjpcbiAgICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vICAgICBpc1BsYXlpbmc6IHRydWVcbiAgICAgICAgLy8gICB9O1xuXG4gICAgICAgIC8vIGNhc2UgXCJHT1RPXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgdGFrZUZvY3VzOiB0cnVlLFxuICAgICAgICAvLyAgICAgY3VycmVudEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgLy8gICB9O1xuICAgICAgICAvLyBjYXNlIFwiVU5TRVRfRk9DVVNcIjpcbiAgICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vICAgICB0YWtlRm9jdXM6IGZhbHNlXG4gICAgICAgIC8vICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICAvLyBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgLy8gdGFrZUZvY3VzOiBmYWxzZVxuXG4gICAgfVxuICApO1xuXG4gIC8vIGNvbnN0IFtidXR0b25PbmVPcGFjaXR5LCBzZXRCdXR0b25PbmVPcGFjaXR5XSA9IHVzZVN0YXRlKDEpO1xuICAvLyBjb25zdCBbY2xpY2tlZEJ1dHRvbk9uZSwgc2V0Q2xpY2tlZEJ1dHRvbk9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBjbGlja2VkQnV0dG9uT25lID8gc2V0QnV0dG9uT25lT3BhY2l0eSgwKSA6IHNldEJ1dHRvbk9uZU9wYWNpdHkoMSlcbiAgLy8gICB9LCBbY2xpY2tlZEJ1dHRvbk9uZV1cbiAgLy8gKTtcbiAgLy9cbiAgLy8gY29uc3QgW3Byb2plY3RzTmF2T3BhY2l0eSwgc2V0UHJvamVjdHNOYXZPcGFjaXR5XSA9IHVzZVN0YXRlKDApO1xuICAvLyB1c2VFZmZlY3QoXG4gIC8vICAgKCkgPT4ge1xuICAvLyAgICAgY2xpY2tlZEJ1dHRvbk9uZSA/IHNldFByb2plY3RzTmF2T3BhY2l0eSgxKSA6IHNldFByb2plY3RzTmF2T3BhY2l0eSgwKTtcbiAgLy8gICB9LCBbXVxuICAvLyApO1xuICAvL1xuICAvLyB1c2VFZmZlY3QoXG4gIC8vICAgKCkgPT4ge1xuICAvLyAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMyMCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCA2MDApIHtcbiAgLy8gICAgICAgc2V0UHJvamVjdHNOYXZPcGFjaXR5KDEpXG4gIC8vXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMClcbiAgLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9LCBbXVxuICAvLyApXG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIH0sIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgPEhlYWRlci8+XG4gICAgICA8SG9tZS8+XG4gICAgICA8SG9tZVNwYWNlci8+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0ncHJvamVjdHMnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJoZWlnaHRcIiA6IFwiNjQwcHhcIixcbiAgICAgICAgICBcInpJbmRleFwiOiBcIjBcIlxuICAgICAgICB9fVxuICAgICAgPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvcGFjaXR5PXsxfVxuICAgICAgICAgIGlkPSdidXR0b24nXG4gICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgZW5kPXs1MH1cbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBpY29uPScmIzcwOTsnXG4gICAgICAgICAgc2NhbGVIPXsxLjI1fVxuICAgICAgICAgIHNjYWxlVj17MX1cbiAgICAgICAgICBrbGFzcz0nZG93bi1hcnJvdydcbiAgICAgICAgICBwb3NpdGlvbj0nYWJzb2x1dGUnXG4gICAgICAgICAgbGVmdD0nNDguNSUnXG4gICAgICAgICAgekluZGV4PXs1fVxuICAgICAgICAgIG1hcmdpblRvcD0nLTI1cHgnXG4gICAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogNTAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cblxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaWQ9e2Bwcm9qZWN0LSR7aW5kZXh9YH1cbiAgICAgICAgICAgIGJnPXtwcm9qZWN0LmJnfVxuICAgICAgICAgICAgaW1nPXtwcm9qZWN0LmltZ31cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaXNDdXJyZW50PXtpbmRleCA9PT0gc3RhdGUuY3VycmVudEluZGV4fVxuICAgICAgICAgICAgYXJpYUhpZGRlbj17KGluZGV4ICE9IHN0YXRlLmN1cnJlbnRJbmRleCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSduYXYtY29udGFpbmVyJ1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcInpJbmRleFwiIDogXCI1XCIsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIFwicmlnaHRcIjogXCI3NXB4XCIsXG4gICAgICAgICAgICBcInRvcFwiOiBcIjEyMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb3BhY2l0eT1cIi44XCJcbiAgICAgICAgICAgIGljb249JyYjNzA2OydcbiAgICAgICAgICAgIHNjYWxlSD17MX1cbiAgICAgICAgICAgIHNjYWxlVj17MS4yNX1cbiAgICAgICAgICAgIGtsYXNzPSdsZWZ0LWFycm93J1xuICAgICAgICAgICAgdG9wPScxMDBweCdcbiAgICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUFJFVlwiIH0pO1xuICAgICAgICAgICAgICAgIC8vZ2V0IGluZGV4XG4gICAgICAgICAgICAgICAgLy9wb3NpdGlvbiBwcmV2aW91cyBwcm9qZWN0IChpbmRleC0xIHVubGVzcyBpbmRleCA9PT0gMCkgdG8gbGVmdFxuICAgICAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBwb3NpdGlvbiBiZXR3ZWVuIGN1cnJlbnQgcHJvamVjdCBhbmQgcHJldmlvdXNcbiAgICAgICAgICAgICAgICAvL3RyYW5zaXRpb24gYmcgY29sb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgICAgICBpY29uPScmIzcwNzsnXG4gICAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgICAgICBrbGFzcz0ncmlnaHQtYXJyb3cnXG4gICAgICAgICAgICB0b3A9JzI1cHgnXG4gICAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk5FWFRcIiB9KTtcbiAgICAgICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgICAgIC8vcG9zaXRpb24gbmV4dCBwcm9qZWN0IHRvIHJpZ2h0XG4gICAgICAgICAgICAgICAgLy90cmFuc2l0aW9uIHBvc2l0aW9uIGJldHdlZW4gY3VycmVudCBwcm9qZWN0IGFuZCBuZXh0XG4gICAgICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNhcHAge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgI3Byb2plY3RzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIHotaW5kZXg6NjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiA1MTJweDtcbiAgICAgICAgfVxuICAgICAgICAuaG9sZGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
      __self: this
    }));
  } else {
    return false;
  }
};

var Portfolio = function Portfolio() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "NEXT":
        return _objectSpread({}, state, {
          currentIndex: (state.currentIndex + 1 + _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].length) % _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].length // isPlaying: false

        });

      case "PREV":
        return _objectSpread({}, state, {
          currentIndex: (state.currentIndex - 1 + _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].length) % _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].length // isPlaying: false

        });
      // case "PROGRESS":
      //   return {
      //     ...state,
      //     isPlaying: action.type === "PROGRESS",
      //     currentIndex: (state.currentIndex + 1) % slides.length
      //   };
      // case "PAUSE":
      //   return {
      //     ...state,
      //     isPlaying: false
      //   };
      // case "PLAY":
      //   return {
      //     ...state,
      //     isPlaying: true
      //   };
      // case "GOTO":
      //   return {
      //     ...state,
      //     takeFocus: true,
      //     currentIndex: action.index
      //   };
      // case "UNSET_FOCUS":
      //   return {
      //     ...state,
      //     takeFocus: false
      //   };

      default:
        return state;
    }
  }, {
    currentIndex: 0 // isPlaying: false,
    // takeFocus: false

  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; // const [buttonOneOpacity, setButtonOneOpacity] = useState(1);
  // const [clickedButtonOne, setClickedButtonOne] = useState(false);
  // useEffect(() => {
  //     clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1)
  //   }, [clickedButtonOne]
  // );
  //
  // const [projectsNavOpacity, setProjectsNavOpacity] = useState(0);
  // useEffect(
  //   () => {
  //     clickedButtonOne ? setProjectsNavOpacity(1) : setProjectsNavOpacity(0);
  //   }, []
  // );
  //
  // useEffect(
  //   () => {
  //     if (window.pageYOffset > 320 && window.pageYOffset < 600) {
  //       setProjectsNavOpacity(1)
  //
  //     } else {
  //       setProjectsNavOpacity(0)
  //
  //     }
  //   }, []
  // )


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(state);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "app",
    className: "jsx-1757618692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomeSpacer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "projects",
    style: {
      "height": "640px",
      "zIndex": "0"
    },
    className: "jsx-1757618692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    opacity: 1,
    id: "button",
    start: 0,
    end: 50,
    duration: 1000,
    icon: "\u02C5",
    scaleH: 1.25,
    scaleV: 1,
    klass: "down-arrow",
    position: "absolute",
    left: "48.5%",
    zIndex: 5,
    marginTop: "-25px",
    action: function action() {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Project, {
      key: index,
      id: "project-".concat(index),
      bg: project.bg,
      img: project.img,
      description: project.description,
      isCurrent: index === state.currentIndex,
      ariaHidden: (index != state.currentIndex).toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "zIndex": "5",
      "position": "absolute",
      "right": "75px",
      "top": "120px"
    },
    className: "jsx-1757618692" + " " + 'nav-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    opacity: ".8",
    icon: "\u02C2",
    scaleH: 1,
    scaleV: 1.25,
    klass: "left-arrow",
    top: "100px",
    action: function action() {
      dispatch({
        type: "PREV"
      }); //get index
      //position previous project (index-1 unless index === 0) to left
      //transition position between current project and previous
      //transition bg color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    opacity: ".8",
    icon: "\u02C3",
    scaleH: 1,
    scaleV: 1.25,
    klass: "right-arrow",
    top: "25px",
    action: function action() {
      dispatch({
        type: "NEXT"
      }); //get index
      //position next project to right
      //transition position between current project and next
      //transition bg color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1757618692",
    css: "#app{position:absolute;overflow:hidden;width:100%;}#projects{background:rgba(255,255,255,1);z-index:6;position:relative;height:512px;}.holder{height:512px;position:relative;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMlN5QixBQUc2QixBQUthLEFBTWxCLGFBQ0ssS0FYRixhQUtQLEFBT0UsR0FYRCxPQUtRLENBT3BCLEdBWEEsY0FLZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmXG59IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHVzZVdpbmRvd1Njcm9sbFBvc2l0aW9uIGZyb20gJy4vaG9va3MvdXNlV2luZG93U2Nyb2xsUG9zaXRpb24nXG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdCc7XG5cbmZ1bmN0aW9uIEhvbWVTcGFjZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImhvbWUtc3BhY2VyXCJcbiAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjU3MHB4XCIgfX1cbiAgICA+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjaG9tZS1zcGFjZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24oe1xuICBpc0N1cnJlbnQsXG4gIGltZyxcbiAgYmcsXG4gIGRlc2NyaXB0aW9uLFxuICBpZFxufSkge1xuICBpZiAoaXNDdXJyZW50KSB7XG4gICAgY29uc29sZS5sb2coYmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdob2xkZXInXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJoZWlnaHRcIiA6IFwiNTIwcHhcIixcbiAgICAgICAgICBcImJveFNoYWRvd1wiIDogXCJyZ2JhKDAsMCwwLC4yNCkgMHB4IDJweCA2cHggMHB4XCIsXG4gICAgICAgICAgXCJ6SW5kZXhcIjogJy0xJyxcbiAgICAgICAgICBcIm1hcmdpblRvcFwiOiBcIi01MHB4XCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBiZyxcbiAgICAgICAgICBcIm92ZXJmbG93XCI6IFwidmlzaWJsZVwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3QnXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcIndpZHRoXCIgOiAnMTAwJScsXG4gICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIFwiekluZGV4XCI6ICcwJyxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiIDogaXNDdXJyZW50ID8gMSA6IDAsXG4gICAgICAgICAgICBcInpJbmRleFwiIDogaXNDdXJyZW50ID8gMSA6IC0xXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uLXRleHQnPlxuICAgICAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZS1jb250YWluZXInPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3QtaW1hZ2UnXG4gICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICBzdHlsZT17eyBcImhlaWdodFwiIDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB6LWluZGV4IDFzLCBkaXNwbGF5IDFzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42NSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHRvcDogMTY2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtaW1hZ2VcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbn1cblxuY29uc3QgUG9ydGZvbGlvID0gZnVuY3Rpb24oKSB7XG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIk5FWFRcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IChzdGF0ZS5jdXJyZW50SW5kZXggKyAxICsgcHJvamVjdHMubGVuZ3RoKSAlIHByb2plY3RzLmxlbmd0aCxcbiAgICAgICAgICAgIC8vIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNhc2UgXCJQUkVWXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4OiAoc3RhdGUuY3VycmVudEluZGV4IC0gMSArIHByb2plY3RzLmxlbmd0aCkgJSBwcm9qZWN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgIC8vIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gY2FzZSBcIlBST0dSRVNTXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNQbGF5aW5nOiBhY3Rpb24udHlwZSA9PT0gXCJQUk9HUkVTU1wiLFxuICAgICAgICAvLyAgICAgY3VycmVudEluZGV4OiAoc3RhdGUuY3VycmVudEluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoXG4gICAgICAgIC8vICAgfTtcbiAgICAgICAgLy8gY2FzZSBcIlBBVVNFXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAvLyAgIH07XG4gICAgICAgIC8vIGNhc2UgXCJQTEFZXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgICAgIC8vICAgfTtcblxuICAgICAgICAvLyBjYXNlIFwiR09UT1wiOlxuICAgICAgICAvLyAgIHJldHVybiB7XG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gICAgIHRha2VGb2N1czogdHJ1ZSxcbiAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIC8vICAgfTtcbiAgICAgICAgLy8gY2FzZSBcIlVOU0VUX0ZPQ1VTXCI6XG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgdGFrZUZvY3VzOiBmYWxzZVxuICAgICAgICAvLyAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgLy8gaXNQbGF5aW5nOiBmYWxzZSxcbiAgICAgIC8vIHRha2VGb2N1czogZmFsc2VcblxuICAgIH1cbiAgKTtcblxuICAvLyBjb25zdCBbYnV0dG9uT25lT3BhY2l0eSwgc2V0QnV0dG9uT25lT3BhY2l0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgLy8gY29uc3QgW2NsaWNrZWRCdXR0b25PbmUsIHNldENsaWNrZWRCdXR0b25PbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgY2xpY2tlZEJ1dHRvbk9uZSA/IHNldEJ1dHRvbk9uZU9wYWNpdHkoMCkgOiBzZXRCdXR0b25PbmVPcGFjaXR5KDEpXG4gIC8vICAgfSwgW2NsaWNrZWRCdXR0b25PbmVdXG4gIC8vICk7XG4gIC8vXG4gIC8vIGNvbnN0IFtwcm9qZWN0c05hdk9wYWNpdHksIHNldFByb2plY3RzTmF2T3BhY2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gdXNlRWZmZWN0KFxuICAvLyAgICgpID0+IHtcbiAgLy8gICAgIGNsaWNrZWRCdXR0b25PbmUgPyBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMSkgOiBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMCk7XG4gIC8vICAgfSwgW11cbiAgLy8gKTtcbiAgLy9cbiAgLy8gdXNlRWZmZWN0KFxuICAvLyAgICgpID0+IHtcbiAgLy8gICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMjAgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgNjAwKSB7XG4gIC8vICAgICAgIHNldFByb2plY3RzTmF2T3BhY2l0eSgxKVxuICAvL1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0UHJvamVjdHNOYXZPcGFjaXR5KDApXG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfSwgW11cbiAgLy8gKVxuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICB9LCBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nYXBwJz5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPEhvbWUvPlxuICAgICAgPEhvbWVTcGFjZXIvPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J3Byb2plY3RzJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIFwiaGVpZ2h0XCIgOiBcIjY0MHB4XCIsXG4gICAgICAgICAgXCJ6SW5kZXhcIjogXCIwXCJcbiAgICAgICAgfX1cbiAgICAgID5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb3BhY2l0eT17MX1cbiAgICAgICAgICBpZD0nYnV0dG9uJ1xuICAgICAgICAgIHN0YXJ0PXswfVxuICAgICAgICAgIGVuZD17NTB9XG4gICAgICAgICAgZHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgaWNvbj0nJiM3MDk7J1xuICAgICAgICAgIHNjYWxlSD17MS4yNX1cbiAgICAgICAgICBzY2FsZVY9ezF9XG4gICAgICAgICAga2xhc3M9J2Rvd24tYXJyb3cnXG4gICAgICAgICAgcG9zaXRpb249J2Fic29sdXRlJ1xuICAgICAgICAgIGxlZnQ9JzQ4LjUlJ1xuICAgICAgICAgIHpJbmRleD17NX1cbiAgICAgICAgICBtYXJnaW5Ub3A9Jy0yNXB4J1xuICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XG4gICAgICAgICAgICBiZz17cHJvamVjdC5iZ31cbiAgICAgICAgICAgIGltZz17cHJvamVjdC5pbWd9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIGFyaWFIaWRkZW49eyhpbmRleCAhPSBzdGF0ZS5jdXJyZW50SW5kZXgpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcidcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgXCJ6SW5kZXhcIiA6IFwiNVwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBcInJpZ2h0XCI6IFwiNzVweFwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogXCIxMjBweFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgICAgICBpY29uPScmIzcwNjsnXG4gICAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgICAgICBrbGFzcz0nbGVmdC1hcnJvdydcbiAgICAgICAgICAgIHRvcD0nMTAwcHgnXG4gICAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBSRVZcIiB9KTtcbiAgICAgICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgICAgIC8vcG9zaXRpb24gcHJldmlvdXMgcHJvamVjdCAoaW5kZXgtMSB1bmxlc3MgaW5kZXggPT09IDApIHRvIGxlZnRcbiAgICAgICAgICAgICAgICAvL3RyYW5zaXRpb24gcG9zaXRpb24gYmV0d2VlbiBjdXJyZW50IHByb2plY3QgYW5kIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvcGFjaXR5PVwiLjhcIlxuICAgICAgICAgICAgaWNvbj0nJiM3MDc7J1xuICAgICAgICAgICAgc2NhbGVIPXsxfVxuICAgICAgICAgICAgc2NhbGVWPXsxLjI1fVxuICAgICAgICAgICAga2xhc3M9J3JpZ2h0LWFycm93J1xuICAgICAgICAgICAgdG9wPScyNXB4J1xuICAgICAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJORVhUXCIgfSk7XG4gICAgICAgICAgICAgICAgLy9nZXQgaW5kZXhcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uIG5leHQgcHJvamVjdCB0byByaWdodFxuICAgICAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBwb3NpdGlvbiBiZXR3ZWVuIGN1cnJlbnQgcHJvamVjdCBhbmQgbmV4dFxuICAgICAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBiZyBjb2xvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjYXBwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgICAgICNwcm9qZWN0cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB6LWluZGV4OjY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogNTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhvbGRlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./pages/portfolio/components/Button.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Button.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    scale: 1.02
  },
  pressable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.98
  }
});

var Button = function Button(props) {
  // console.log(props)
  // let position = useProgress(props.start,props.end,props.duration)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, {
    className: "button-wrapper",
    style: {
      "opacity": props.opacity
    },
    pose: hovering ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovering(false);
    },
    onClick: props.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: props.opacity,
      zIndex: props.zIndex,
      position: 'absolute',
      display: 'block',
      marginTop: props.marginTop,
      left: props.left,
      top: props.top
    },
    className: "jsx-828797162" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "828797162",
    css: ".button-wrapper{cursor:pointer;-webkit-transition:opacity .5s;transition:opacity .5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3lCLEFBRzBCLGVBQ1Esc0RBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xuaW1wb3J0IHVzZVByb2dyZXNzIGZyb20gJy4uL2hvb2tzL3VzZVByb2dyZXNzJ1xuaW1wb3J0IHBvc2VkIGZyb20gXCJyZWFjdC1wb3NlXCI7XG5cbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBwb3NlZC5kaXYoe1xuICBpZGxlOiB7IHNjYWxlOiAxIH0sXG4gIGhvdmVyZWQ6IHsgc2NhbGU6IDEuMDIgfSxcbiAgcHJlc3NhYmxlOiB0cnVlLFxuICBpbml0OiB7IHNjYWxlOiAxIH0sXG4gIHByZXNzOiB7IHNjYWxlOiAwLjk4IH1cbn0pO1xuXG4gY29uc3QgQnV0dG9uID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAvLyBsZXQgcG9zaXRpb24gPSB1c2VQcm9ncmVzcyhwcm9wcy5zdGFydCxwcm9wcy5lbmQscHJvcHMuZHVyYXRpb24pXG4gIGNvbnN0IFtob3ZlcmluZywgc2V0SG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbldyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT0nYnV0dG9uLXdyYXBwZXInXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcIm9wYWNpdHlcIjogcHJvcHMub3BhY2l0eSxcbiAgICAgIH19XG4gICAgICBwb3NlPXtob3ZlcmluZyA/IFwiaG92ZXJlZFwiIDogXCJpZGxlXCJ9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyaW5nKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSl9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5hY3Rpb259XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiBwcm9wcy5vcGFjaXR5LFxuICAgICAgICAgIHpJbmRleDogcHJvcHMuekluZGV4LFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgbWFyZ2luVG9wOiBwcm9wcy5tYXJnaW5Ub3AsXG4gICAgICAgICAgbGVmdDogcHJvcHMubGVmdCxcbiAgICAgICAgICB0b3A6IHByb3BzLnRvcFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2lyY2xlIHsuLi5wcm9wc30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

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
  var h = props.scaleH;
  var v = props.scaleV;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-866422465" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "transform": "scale(".concat(h, ",").concat(v, ")")
    },
    className: "jsx-866422465" + " " + (props.klass || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "866422465",
    css: ".circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}.circle:hover{box-shadow:0 5px 5px rgba(33,33,33,1);}.down-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;}.right-arrow{padding:9px 0 0 3px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;clear:both;}.left-arrow{padding:9px 0 0 0;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;clear:both;}.up-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNeUIsQUFHMEMsQUFTTyxBQUd6QixBQU1PLEFBT0YsQUFPTCxhQW5CVSxBQW9CQSxLQVBBLEVBUEEsV0FsQlosS0FhSSxBQW9CQSxFQXhCakIsR0FpQmlCLENBekJILENBa0JHLFFBTE8sQUFvQkEsR0FoQ0osRUF5QkksRUFQQSxjQWpCSixDQVlwQixBQW9CQSxLQVBhLEVBUEEsU0FRYixDQXpCNEIsQ0FrQjVCLDJEQWpCMEIsd0RBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmNsZShwcm9wcykge1xuICBsZXQgaCA9IHByb3BzLnNjYWxlSDtcbiAgbGV0IHYgPSBwcm9wcy5zY2FsZVY7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMua2xhc3N9IHN0eWxlPXt7XCJ0cmFuc2Zvcm1cIiA6IGBzY2FsZSgke2h9LCR7dn0pYH19Pntwcm9wcy5pY29ufTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZTpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMzMsMzMsMzMsMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmRvd24tYXJyb3cge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LWFycm93IHtcbiAgICAgICAgICBwYWRkaW5nOiA5cHggMCAwIDNweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZzogOXB4IDAgMCAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgICAgIC51cC1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Circle.js */",
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

/***/ "./pages/portfolio/components/Header.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Header.js";


function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "nav",
    style: {
      "top": "0px",
      "box-shadow": "rgba(0,0,0,.24) 0px 2px 6px 0px"
    },
    className: "jsx-3126398432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "logo",
    href: "#home",
    className: "jsx-3126398432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://s3-us-west-2.amazonaws.com/beb-ui/danger-cat.gif",
    style: {
      "width": "70px",
      "height": "70px"
    },
    className: "jsx-3126398432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3126398432",
    css: "#nav{display:block;position:fixed;height:70px;z-index:7;width:100%;clear:both;background:#212121;}#logo{height:70px;width:70px;display:block;position:absolute;left:50%;margin-left:-35px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFleUIsQUFHeUIsQUFTRixZQUNELEVBVEksU0FVRCxNQVRGLFFBVU0sSUFUUixVQUNDLElBU0YsT0FSRSxFQVNPLFNBUkMsU0FTckIsVUFSQSIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIgKCkge1xuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGlkPSduYXYnXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcInRvcFwiOiBcIjBweFwiLFxuICAgICAgICBcImJveC1zaGFkb3dcIiA6IFwicmdiYSgwLDAsMCwuMjQpIDBweCAycHggNnB4IDBweFwiXG4gICAgICB9fVxuICAgID5cbiAgICA8YSBpZD1cImxvZ29cIiBocmVmPVwiI2hvbWVcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9iZWItdWkvZGFuZ2VyLWNhdC5naWZcIlxuICAgICAgICBzdHlsZT17eyBcIndpZHRoXCIgOiBcIjcwcHhcIiwgXCJoZWlnaHRcIiA6IFwiNzBweFwiIH19XG4gICAgICAvPlxuICAgIDwvYT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgei1pbmRleDogNztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICAgICAgICB9XG4gICAgICAgICNsb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Header.js */",
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "home",
    style: {
      "height": "570px"
    },
    className: "jsx-4036179166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "top": "171px"
    },
    className: "jsx-4036179166" + " " + 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://s3-us-west-2.amazonaws.com/beb-ui/kitten_green.png",
    className: "jsx-4036179166" + " " + 'cat',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4036179166" + " " + 'headline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Hi! I'm", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4036179166" + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " Brian E. Bill")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-4036179166" + " " + 'sub-headline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "UX/UI Designer from Bird Rock")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4036179166",
    css: "#home{position:fixed;text-align:center;z-index:0;background:rgba(20,20,20,1);color:rgba(255,255,255,.9);width:100%;}.name{color:rgba(123,189,212,1);font-weight:200;}.text{margin:auto;position:absolute;width:100%;}.cat{width:200px;}.headline{font-size:26px;margin-top:10px;}.sub-headline{color:rgba(255,255,255,0.8);font-size:17px;margin-top:-10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QixBQUcwQixBQVFXLEFBSWQsQUFLQSxBQUdHLEFBSWEsWUFYVixBQUtwQixHQWpCb0IsQUFvQkYsV0FaQSxFQWdCRCxFQVhKLENBUWIsRUFwQlcsUUFhWCxDQUxBLENBUDhCLEFBdUJYLGlCQUNuQixXQXZCNkIsMkJBQ2hCLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0naG9tZSdcbiAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IFwiNTcwcHhcIiB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0J1xuICAgICAgICBzdHlsZT17eyBcInRvcFwiIDogXCIxNzFweFwifX1cbiAgICAgID5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2NhdCcgc3JjPSdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2JlYi11aS9raXR0ZW5fZ3JlZW4ucG5nJyAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkbGluZSc+XG4gICAgICAgICAgSGkhIEknbVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbmFtZSc+IEJyaWFuIEUuIEJpbGw8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9J3N1Yi1oZWFkbGluZSc+VVgvVUkgRGVzaWduZXIgZnJvbSBCaXJkIFJvY2s8L2g0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjaG9tZSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OjA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDEyMywxODksMjEyLDEpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhdCB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkbGluZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1oZWFkbGluZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Home.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/data/projects.js":
/*!******************************************!*\
  !*** ./pages/portfolio/data/projects.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  'order': 0,
  'bg': 'linear-gradient(to bottom right, #000428, #004e92)',
  'img': 'https://archive.evilrabb.it/app/img/projects/grabbit.png',
  'description': 'Project description zero'
}, {
  'order': 1,
  'bg': 'linear-gradient(to bottom right, rgba(53,133,156,1), rgba(123,189,212,1))',
  'img': 'https://archive.evilrabb.it/app/img/projects/posto7.png',
  'description': 'Project description one'
}, {
  'order': 2,
  'bg': 'linear-gradient(to bottom right, rgba(86,171,47,1), rgba(168,224,99,1))',
  'img': 'https://archive.evilrabb.it/app/img/projects/popcorntime.png',
  'description': 'Project description two'
}]);

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