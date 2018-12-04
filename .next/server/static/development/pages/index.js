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



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "105545318",
    css: "#home-spacer{position:relative;overflow:hidden;z-index:1;max-width:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3lCLEFBRzZCLGtCQUNGLGdCQUNOLFVBQ0ksY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL1BvcnRmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB1c2VXaW5kb3dTY3JvbGxQb3NpdGlvbiBmcm9tICcuL2hvb2tzL3VzZVdpbmRvd1Njcm9sbFBvc2l0aW9uJ1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL2RhdGEvcHJvamVjdHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuXG5mdW5jdGlvbiBIb21lU3BhY2VyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJob21lLXNwYWNlclwiXG4gICAgICBzdHlsZT17eyBcImhlaWdodFwiIDogXCI1NzBweFwiIH19XG4gICAgPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI2hvbWUtc3BhY2VyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIG1heC13aWR0aDogMXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdwcm9qZWN0J1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgXCJ3aWR0aFwiIDogJzEwMCUnLFxuICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICAgICAgXCJ6SW5kZXhcIjogJzAnLFxuICAgICAgICBcImJhY2tncm91bmRcIiA6IHByb3BzLmJnXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QtZGVzY3JpcHRpb24tdGV4dCc+XG4gICAgICAgICAgPGgyPntwcm9wcy5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QtaW1hZ2UtY29udGFpbmVyJz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZSdcbiAgICAgICAgICBzcmM9e3Byb3BzLmltZ31cbiAgICAgICAgICBzdHlsZT17eyBcImhlaWdodFwiIDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucHJvamVjdCB7XG4gICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogNjQwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjY1KTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgICB0b3A6IDE2NnB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICBoZWlnaHQ6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWltYWdlXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBTZWN0aW9uTmF2ID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgLyogYnV0dG9uIHRvcCAtPiBwcm9qZWN0cyAqL1xuICAvKiBidXR0b24gcHJldmlvdXMgLT4gIyAqL1xuICAvKiBidXR0b24gbmV4dCAtPiAjcHJvamVjdHMgKi9cbiAgLyogYnV0dG9uIGJvdHRvbSAtPiAjY29udGFjdCAqL1xuICAvKiBzZWN0aW9uIGNvbnRhY3QgKi9cbiAgLyogYnV0dG9uIGJvdHRvbSAtPiAjaG9tZSAqL1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSduYXYtY29udGFpbmVyJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgXCJvcGFjaXR5XCIgOiBwcm9wcy5vcGFjaXR5LFxuICAgICAgICBcInpJbmRleFwiIDogXCI1XCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBcInJpZ2h0XCI6IFwiNzVweFwiLFxuICAgICAgICBcInRvcFwiOiBcIjEyMHB4XCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvcGFjaXR5PVwiLjhcIlxuICAgICAgICBpY29uPScmIzcwNjsnXG4gICAgICAgIHNjYWxlSD17MX1cbiAgICAgICAgc2NhbGVWPXsxLjI1fVxuICAgICAgICBrbGFzcz0nbGVmdC1hcnJvdydcbiAgICAgICAgdG9wPScxMDBweCdcbiAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgLy9nZXQgaW5kZXhcbiAgICAgICAgICAgIC8vcG9zaXRpb24gcHJldmlvdXMgcHJvamVjdCAoaW5kZXgtMSB1bmxlc3MgaW5kZXggPT09IDApIHRvIGxlZnRcbiAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBwb3NpdGlvbiBiZXR3ZWVuIGN1cnJlbnQgcHJvamVjdCBhbmQgcHJldmlvdXNcbiAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBiZyBjb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgIGljb249JyYjNzA3OydcbiAgICAgICAgc2NhbGVIPXsxfVxuICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgIGtsYXNzPSdyaWdodC1hcnJvdydcbiAgICAgICAgdG9wPScyNXB4J1xuICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgLy9wb3NpdGlvbiBuZXh0IHByb2plY3QgdG8gcmlnaHRcbiAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBwb3NpdGlvbiBiZXR3ZWVuIGN1cnJlbnQgcHJvamVjdCBhbmQgbmV4dFxuICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQb3J0Zm9saW8gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYnV0dG9uT25lT3BhY2l0eSwgc2V0QnV0dG9uT25lT3BhY2l0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2NsaWNrZWRCdXR0b25PbmUsIHNldENsaWNrZWRCdXR0b25PbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY2xpY2tlZEJ1dHRvbk9uZSA/IHNldEJ1dHRvbk9uZU9wYWNpdHkoMCkgOiBzZXRCdXR0b25PbmVPcGFjaXR5KDEpXG4gICAgfSwgW2NsaWNrZWRCdXR0b25PbmVdXG4gICk7XG5cbiAgY29uc3QgW3Byb2plY3RzTmF2T3BhY2l0eSwgc2V0UHJvamVjdHNOYXZPcGFjaXR5XSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgY2xpY2tlZEJ1dHRvbk9uZSA/IHNldFByb2plY3RzTmF2T3BhY2l0eSgxKSA6IHNldFByb2plY3RzTmF2T3BhY2l0eSgwKTtcbiAgICB9LCBbXVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzIwICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IDYwMCkge1xuICAgICAgICBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMSlcbiAgICAgICAgc2V0QnV0dG9uT25lT3BhY2l0eSgwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UHJvamVjdHNOYXZPcGFjaXR5KDApXG4gICAgICAgIHNldEJ1dHRvbk9uZU9wYWNpdHkoMSlcbiAgICAgIH1cbiAgICB9LCBbXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgPEhlYWRlci8+XG4gICAgICA8SG9tZS8+XG4gICAgICA8SG9tZVNwYWNlci8+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0ncHJvamVjdHMnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJoZWlnaHRcIiA6IFwiNjQwcHhcIixcbiAgICAgICAgICBcInpJbmRleFwiOiBcIjBcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb3BhY2l0eT17YnV0dG9uT25lT3BhY2l0eX1cbiAgICAgICAgICBpZD0nYnV0dG9uJ1xuICAgICAgICAgIHN0YXJ0PXswfVxuICAgICAgICAgIGVuZD17NTB9XG4gICAgICAgICAgZHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgaWNvbj0nJiM3MDk7J1xuICAgICAgICAgIHNjYWxlSD17MS4yNX1cbiAgICAgICAgICBzY2FsZVY9ezF9XG4gICAgICAgICAga2xhc3M9J2Rvd24tYXJyb3cnXG4gICAgICAgICAgcG9zaXRpb249J2Fic29sdXRlJ1xuICAgICAgICAgIGxlZnQ9JzQ4LjUlJ1xuICAgICAgICAgIHpJbmRleD17NX1cbiAgICAgICAgICBtYXJnaW5Ub3A9Jy0yNXB4J1xuICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtzZXRDbGlja2VkQnV0dG9uT25lKHRydWUpfSwgNTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2hvbGRlcidcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgXCJib3hTaGFkb3dcIiA6IFwicmdiYSgwLDAsMCwuMjQpIDBweCAycHggNnB4IDBweFwiLFxuICAgICAgICAgICAgXCJ6SW5kZXhcIjogJy0xJyxcbiAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IFwiLTUwcHhcIixcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpZD17YHByb2plY3QtJHtpbmRleH1gfVxuICAgICAgICAgICAgICBpbWc9e3Byb2plY3QuaW1nfVxuICAgICAgICAgICAgICBiZz17cHJvamVjdC5iZ31cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IGN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFNlY3Rpb25OYXZcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleD17Y3VycmVudEluZGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI2FwcCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgICAgICAjcHJvamVjdHMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgei1pbmRleDo2O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaG9sZGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
    __self: this
  }));
}

var Project = function Project(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "width": '100%',
      "left": 0,
      "display": "block",
      "zIndex": '0',
      "background": props.bg
    },
    className: "jsx-416406795" + " " + 'project',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-416406795" + " " + 'project-description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-416406795" + " " + 'project-description-text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-416406795",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, props.description))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-416406795" + " " + 'project-image-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.img,
    style: {
      "height": "100%"
    },
    className: "jsx-416406795" + " " + 'project-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "416406795",
    css: "{.project-image display:block;vertical-align:middle;border:0;}.project{height:640px;overflow:hidden;}.project-description{width:40%;height:640px;color:rgba(255,255,255,.65);position:absolute;left:0;}.project-description-text{top:166px;padding-left:20%;padding-right:5%;position:absolute;width:100%;}.project-image-container{width:60%;position:absolute;left:40%;height:640px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUR5QixBQUd3QixBQUlILEFBT0EsQUFPQSxBQU1JLFVBbkJELEFBT0ksQUFPQyxHQWxCRixVQUtZLElBT1gsQ0FPUixDQWxCWCxBQXVCd0IsUUFKVCxPQVBLLE1BUXBCLENBZm9CLEFBbUJULFNBRWIsRUFiZSxPQVBKLElBUVQsR0FQQSIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vUG9ydGZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHVzZVdpbmRvd1Njcm9sbFBvc2l0aW9uIGZyb20gJy4vaG9va3MvdXNlV2luZG93U2Nyb2xsUG9zaXRpb24nXG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdCc7XG5cbmZ1bmN0aW9uIEhvbWVTcGFjZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImhvbWUtc3BhY2VyXCJcbiAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjU3MHB4XCIgfX1cbiAgICA+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjaG9tZS1zcGFjZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J3Byb2plY3QnXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcIndpZHRoXCIgOiAnMTAwJScsXG4gICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgICAgICBcInpJbmRleFwiOiAnMCcsXG4gICAgICAgIFwiYmFja2dyb3VuZFwiIDogcHJvcHMuYmdcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QtZGVzY3JpcHRpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1kZXNjcmlwdGlvbi10ZXh0Jz5cbiAgICAgICAgICA8aDI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZS1jb250YWluZXInPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9qZWN0LWltYWdlJ1xuICAgICAgICAgIHNyYz17cHJvcHMuaW1nfVxuICAgICAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjEwMCVcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICBoZWlnaHQ6IDY0MHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjUpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uLXRleHQge1xuICAgICAgICAgIHRvcDogMTY2cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgIGhlaWdodDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtaW1hZ2VcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFNlY3Rpb25OYXYgPSBmdW5jdGlvbihwcm9wcykge1xuICAvKiBidXR0b24gdG9wIC0+IHByb2plY3RzICovXG4gIC8qIGJ1dHRvbiBwcmV2aW91cyAtPiAjICovXG4gIC8qIGJ1dHRvbiBuZXh0IC0+ICNwcm9qZWN0cyAqL1xuICAvKiBidXR0b24gYm90dG9tIC0+ICNjb250YWN0ICovXG4gIC8qIHNlY3Rpb24gY29udGFjdCAqL1xuICAvKiBidXR0b24gYm90dG9tIC0+ICNob21lICovXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J25hdi1jb250YWluZXInXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcIm9wYWNpdHlcIiA6IHByb3BzLm9wYWNpdHksXG4gICAgICAgIFwiekluZGV4XCIgOiBcIjVcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgIFwicmlnaHRcIjogXCI3NXB4XCIsXG4gICAgICAgIFwidG9wXCI6IFwiMTIwcHhcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgIGljb249JyYjNzA2OydcbiAgICAgICAgc2NhbGVIPXsxfVxuICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgIGtsYXNzPSdsZWZ0LWFycm93J1xuICAgICAgICB0b3A9JzEwMHB4J1xuICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgLy9wb3NpdGlvbiBwcmV2aW91cyBwcm9qZWN0IChpbmRleC0xIHVubGVzcyBpbmRleCA9PT0gMCkgdG8gbGVmdFxuICAgICAgICAgICAgLy90cmFuc2l0aW9uIHBvc2l0aW9uIGJldHdlZW4gY3VycmVudCBwcm9qZWN0IGFuZCBwcmV2aW91c1xuICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb3BhY2l0eT1cIi44XCJcbiAgICAgICAgaWNvbj0nJiM3MDc7J1xuICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgIHNjYWxlVj17MS4yNX1cbiAgICAgICAga2xhc3M9J3JpZ2h0LWFycm93J1xuICAgICAgICB0b3A9JzI1cHgnXG4gICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgIC8vZ2V0IGluZGV4XG4gICAgICAgICAgICAvL3Bvc2l0aW9uIG5leHQgcHJvamVjdCB0byByaWdodFxuICAgICAgICAgICAgLy90cmFuc2l0aW9uIHBvc2l0aW9uIGJldHdlZW4gY3VycmVudCBwcm9qZWN0IGFuZCBuZXh0XG4gICAgICAgICAgICAvL3RyYW5zaXRpb24gYmcgY29sb3JcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFBvcnRmb2xpbyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtidXR0b25PbmVPcGFjaXR5LCBzZXRCdXR0b25PbmVPcGFjaXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY2xpY2tlZEJ1dHRvbk9uZSwgc2V0Q2xpY2tlZEJ1dHRvbk9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjbGlja2VkQnV0dG9uT25lID8gc2V0QnV0dG9uT25lT3BhY2l0eSgwKSA6IHNldEJ1dHRvbk9uZU9wYWNpdHkoMSlcbiAgICB9LCBbY2xpY2tlZEJ1dHRvbk9uZV1cbiAgKTtcblxuICBjb25zdCBbcHJvamVjdHNOYXZPcGFjaXR5LCBzZXRQcm9qZWN0c05hdk9wYWNpdHldID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjbGlja2VkQnV0dG9uT25lID8gc2V0UHJvamVjdHNOYXZPcGFjaXR5KDEpIDogc2V0UHJvamVjdHNOYXZPcGFjaXR5KDApO1xuICAgIH0sIFtdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMjAgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgNjAwKSB7XG4gICAgICAgIHNldFByb2plY3RzTmF2T3BhY2l0eSgxKVxuICAgICAgICBzZXRCdXR0b25PbmVPcGFjaXR5KDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMClcbiAgICAgICAgc2V0QnV0dG9uT25lT3BhY2l0eSgxKVxuICAgICAgfVxuICAgIH0sIFtdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxIb21lLz5cbiAgICAgIDxIb21lU3BhY2VyLz5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSdwcm9qZWN0cydcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcImhlaWdodFwiIDogXCI2NDBweFwiLFxuICAgICAgICAgIFwiekluZGV4XCI6IFwiMFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvcGFjaXR5PXtidXR0b25PbmVPcGFjaXR5fVxuICAgICAgICAgIGlkPSdidXR0b24nXG4gICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgZW5kPXs1MH1cbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBpY29uPScmIzcwOTsnXG4gICAgICAgICAgc2NhbGVIPXsxLjI1fVxuICAgICAgICAgIHNjYWxlVj17MX1cbiAgICAgICAgICBrbGFzcz0nZG93bi1hcnJvdydcbiAgICAgICAgICBwb3NpdGlvbj0nYWJzb2x1dGUnXG4gICAgICAgICAgbGVmdD0nNDguNSUnXG4gICAgICAgICAgekluZGV4PXs1fVxuICAgICAgICAgIG1hcmdpblRvcD0nLTI1cHgnXG4gICAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogNTAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3NldENsaWNrZWRCdXR0b25PbmUodHJ1ZSl9LCA1MDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0naG9sZGVyJ1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcImJveFNoYWRvd1wiIDogXCJyZ2JhKDAsMCwwLC4yNCkgMHB4IDJweCA2cHggMHB4XCIsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAnLTEnLFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCItNTBweFwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIGltZz17cHJvamVjdC5pbWd9XG4gICAgICAgICAgICAgIGJnPXtwcm9qZWN0LmJnfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaXNDdXJyZW50PXtpbmRleCA9PT0gY3VycmVudEluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8U2VjdGlvbk5hdlxuICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW5kZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjYXBwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgICAgICNwcm9qZWN0cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB6LWluZGV4OjY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5ob2xkZXIge1xuICAgICAgICAgIGhlaWdodDogNTEycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
    __self: this
  }));
};

var SectionNav = function SectionNav(props) {
  /* button top -> projects */

  /* button previous -> # */

  /* button next -> #projects */

  /* button bottom -> #contact */

  /* section contact */

  /* button bottom -> #home */
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nav-container",
    style: {
      "opacity": props.opacity,
      "zIndex": "5",
      "position": "absolute",
      "right": "75px",
      "top": "120px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    opacity: ".8",
    icon: "\u02C2",
    scaleH: 1,
    scaleV: 1.25,
    klass: "left-arrow",
    top: "100px",
    action: function action() {//get index
      //position previous project (index-1 unless index === 0) to left
      //transition position between current project and previous
      //transition bg color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    opacity: ".8",
    icon: "\u02C3",
    scaleH: 1,
    scaleV: 1.25,
    klass: "right-arrow",
    top: "25px",
    action: function action() {//get index
      //position next project to right
      //transition position between current project and next
      //transition bg color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }));
};

var Portfolio = function Portfolio() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonOneOpacity = _useState4[0],
      setButtonOneOpacity = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      clickedButtonOne = _useState6[0],
      setClickedButtonOne = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1);
  }, [clickedButtonOne]);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      projectsNavOpacity = _useState8[0],
      setProjectsNavOpacity = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    clickedButtonOne ? setProjectsNavOpacity(1) : setProjectsNavOpacity(0);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.pageYOffset > 320 && window.pageYOffset < 600) {
      setProjectsNavOpacity(1);
      setButtonOneOpacity(0);
    } else {
      setProjectsNavOpacity(0);
      setButtonOneOpacity(1);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "app",
    className: "jsx-1096373184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomeSpacer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "projects",
    style: {
      "height": "640px",
      "zIndex": "0"
    },
    className: "jsx-1096373184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    opacity: buttonOneOpacity,
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
      setTimeout(function () {
        setClickedButtonOne(true);
      }, 500);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "boxShadow": "rgba(0,0,0,.24) 0px 2px 6px 0px",
      "zIndex": '-1',
      "marginTop": "-50px",
      "position": "relative"
    },
    className: "jsx-1096373184" + " " + 'holder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Project, {
      key: index,
      id: "project-".concat(index),
      img: project.img,
      bg: project.bg,
      description: project.description,
      isCurrent: index === currentIndex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionNav, {
    currentIndex: currentIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1096373184",
    css: "#app{position:absolute;overflow:hidden;width:100%;}#projects{background:rgba(255,255,255,1);z-index:6;position:relative;}.holder{height:512px;position:relative;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbU95QixBQUc2QixBQUthLEFBS2xCLGFBQ0ssS0FWRixhQUtQLEFBTUUsR0FWRCxPQUtRLENBTXBCLEdBVkEsY0FLQSIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vUG9ydGZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHVzZVdpbmRvd1Njcm9sbFBvc2l0aW9uIGZyb20gJy4vaG9va3MvdXNlV2luZG93U2Nyb2xsUG9zaXRpb24nXG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdCc7XG5cbmZ1bmN0aW9uIEhvbWVTcGFjZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImhvbWUtc3BhY2VyXCJcbiAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjU3MHB4XCIgfX1cbiAgICA+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjaG9tZS1zcGFjZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J3Byb2plY3QnXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcIndpZHRoXCIgOiAnMTAwJScsXG4gICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgICAgICBcInpJbmRleFwiOiAnMCcsXG4gICAgICAgIFwiYmFja2dyb3VuZFwiIDogcHJvcHMuYmdcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QtZGVzY3JpcHRpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1kZXNjcmlwdGlvbi10ZXh0Jz5cbiAgICAgICAgICA8aDI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZS1jb250YWluZXInPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9qZWN0LWltYWdlJ1xuICAgICAgICAgIHNyYz17cHJvcHMuaW1nfVxuICAgICAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjEwMCVcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICBoZWlnaHQ6IDY0MHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjUpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uLXRleHQge1xuICAgICAgICAgIHRvcDogMTY2cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgIGhlaWdodDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtaW1hZ2VcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFNlY3Rpb25OYXYgPSBmdW5jdGlvbihwcm9wcykge1xuICAvKiBidXR0b24gdG9wIC0+IHByb2plY3RzICovXG4gIC8qIGJ1dHRvbiBwcmV2aW91cyAtPiAjICovXG4gIC8qIGJ1dHRvbiBuZXh0IC0+ICNwcm9qZWN0cyAqL1xuICAvKiBidXR0b24gYm90dG9tIC0+ICNjb250YWN0ICovXG4gIC8qIHNlY3Rpb24gY29udGFjdCAqL1xuICAvKiBidXR0b24gYm90dG9tIC0+ICNob21lICovXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J25hdi1jb250YWluZXInXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcIm9wYWNpdHlcIiA6IHByb3BzLm9wYWNpdHksXG4gICAgICAgIFwiekluZGV4XCIgOiBcIjVcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgIFwicmlnaHRcIjogXCI3NXB4XCIsXG4gICAgICAgIFwidG9wXCI6IFwiMTIwcHhcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgIGljb249JyYjNzA2OydcbiAgICAgICAgc2NhbGVIPXsxfVxuICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgIGtsYXNzPSdsZWZ0LWFycm93J1xuICAgICAgICB0b3A9JzEwMHB4J1xuICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgLy9wb3NpdGlvbiBwcmV2aW91cyBwcm9qZWN0IChpbmRleC0xIHVubGVzcyBpbmRleCA9PT0gMCkgdG8gbGVmdFxuICAgICAgICAgICAgLy90cmFuc2l0aW9uIHBvc2l0aW9uIGJldHdlZW4gY3VycmVudCBwcm9qZWN0IGFuZCBwcmV2aW91c1xuICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb3BhY2l0eT1cIi44XCJcbiAgICAgICAgaWNvbj0nJiM3MDc7J1xuICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgIHNjYWxlVj17MS4yNX1cbiAgICAgICAga2xhc3M9J3JpZ2h0LWFycm93J1xuICAgICAgICB0b3A9JzI1cHgnXG4gICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgIC8vZ2V0IGluZGV4XG4gICAgICAgICAgICAvL3Bvc2l0aW9uIG5leHQgcHJvamVjdCB0byByaWdodFxuICAgICAgICAgICAgLy90cmFuc2l0aW9uIHBvc2l0aW9uIGJldHdlZW4gY3VycmVudCBwcm9qZWN0IGFuZCBuZXh0XG4gICAgICAgICAgICAvL3RyYW5zaXRpb24gYmcgY29sb3JcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFBvcnRmb2xpbyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtidXR0b25PbmVPcGFjaXR5LCBzZXRCdXR0b25PbmVPcGFjaXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY2xpY2tlZEJ1dHRvbk9uZSwgc2V0Q2xpY2tlZEJ1dHRvbk9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjbGlja2VkQnV0dG9uT25lID8gc2V0QnV0dG9uT25lT3BhY2l0eSgwKSA6IHNldEJ1dHRvbk9uZU9wYWNpdHkoMSlcbiAgICB9LCBbY2xpY2tlZEJ1dHRvbk9uZV1cbiAgKTtcblxuICBjb25zdCBbcHJvamVjdHNOYXZPcGFjaXR5LCBzZXRQcm9qZWN0c05hdk9wYWNpdHldID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjbGlja2VkQnV0dG9uT25lID8gc2V0UHJvamVjdHNOYXZPcGFjaXR5KDEpIDogc2V0UHJvamVjdHNOYXZPcGFjaXR5KDApO1xuICAgIH0sIFtdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMjAgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgNjAwKSB7XG4gICAgICAgIHNldFByb2plY3RzTmF2T3BhY2l0eSgxKVxuICAgICAgICBzZXRCdXR0b25PbmVPcGFjaXR5KDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQcm9qZWN0c05hdk9wYWNpdHkoMClcbiAgICAgICAgc2V0QnV0dG9uT25lT3BhY2l0eSgxKVxuICAgICAgfVxuICAgIH0sIFtdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxIb21lLz5cbiAgICAgIDxIb21lU3BhY2VyLz5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSdwcm9qZWN0cydcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcImhlaWdodFwiIDogXCI2NDBweFwiLFxuICAgICAgICAgIFwiekluZGV4XCI6IFwiMFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvcGFjaXR5PXtidXR0b25PbmVPcGFjaXR5fVxuICAgICAgICAgIGlkPSdidXR0b24nXG4gICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgZW5kPXs1MH1cbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBpY29uPScmIzcwOTsnXG4gICAgICAgICAgc2NhbGVIPXsxLjI1fVxuICAgICAgICAgIHNjYWxlVj17MX1cbiAgICAgICAgICBrbGFzcz0nZG93bi1hcnJvdydcbiAgICAgICAgICBwb3NpdGlvbj0nYWJzb2x1dGUnXG4gICAgICAgICAgbGVmdD0nNDguNSUnXG4gICAgICAgICAgekluZGV4PXs1fVxuICAgICAgICAgIG1hcmdpblRvcD0nLTI1cHgnXG4gICAgICAgICAgYWN0aW9uPXsoKCkgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogNTAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3NldENsaWNrZWRCdXR0b25PbmUodHJ1ZSl9LCA1MDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0naG9sZGVyJ1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcImJveFNoYWRvd1wiIDogXCJyZ2JhKDAsMCwwLC4yNCkgMHB4IDJweCA2cHggMHB4XCIsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAnLTEnLFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCItNTBweFwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIGltZz17cHJvamVjdC5pbWd9XG4gICAgICAgICAgICAgIGJnPXtwcm9qZWN0LmJnfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaXNDdXJyZW50PXtpbmRleCA9PT0gY3VycmVudEluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8U2VjdGlvbk5hdlxuICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW5kZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjYXBwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgICAgICNwcm9qZWN0cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB6LWluZGV4OjY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5ob2xkZXIge1xuICAgICAgICAgIGhlaWdodDogNTEycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
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
    scale: 1.1
  },
  pressable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.8
  }
});

var Button = function Button(props) {
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
      lineNumber: 19
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
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "828797162",
    css: ".button-wrapper{cursor:pointer;-webkit-transition:opacity .5s;transition:opacity .5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3lCLEFBRzBCLGVBQ1Esc0RBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xuaW1wb3J0IHVzZVByb2dyZXNzIGZyb20gJy4uL2hvb2tzL3VzZVByb2dyZXNzJ1xuaW1wb3J0IHBvc2VkIGZyb20gXCJyZWFjdC1wb3NlXCI7XG5cbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBwb3NlZC5kaXYoe1xuICBpZGxlOiB7IHNjYWxlOiAxIH0sXG4gIGhvdmVyZWQ6IHsgc2NhbGU6IDEuMSB9LFxuICBwcmVzc2FibGU6IHRydWUsXG4gIGluaXQ6IHsgc2NhbGU6IDEgfSxcbiAgcHJlc3M6IHsgc2NhbGU6IDAuOCB9XG59KTtcblxuIGNvbnN0IEJ1dHRvbiA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIC8vIGxldCBwb3NpdGlvbiA9IHVzZVByb2dyZXNzKHByb3BzLnN0YXJ0LHByb3BzLmVuZCxwcm9wcy5kdXJhdGlvbilcbiAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPSdidXR0b24td3JhcHBlcidcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIFwib3BhY2l0eVwiOiBwcm9wcy5vcGFjaXR5LFxuICAgICAgfX1cbiAgICAgIHBvc2U9e2hvdmVyaW5nID8gXCJob3ZlcmVkXCIgOiBcImlkbGVcIn1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJpbmcodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyaW5nKGZhbHNlKX1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLmFjdGlvbn1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG9wYWNpdHk6IHByb3BzLm9wYWNpdHksXG4gICAgICAgICAgekluZGV4OiBwcm9wcy56SW5kZXgsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6IHByb3BzLm1hcmdpblRvcCxcbiAgICAgICAgICBsZWZ0OiBwcm9wcy5sZWZ0LFxuICAgICAgICAgIHRvcDogcHJvcHMudG9wXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDaXJjbGUgey4uLnByb3BzfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9CdXR0b25XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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