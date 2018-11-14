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
/* harmony import */ var _hooks_useProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useProgress */ "./pages/portfolio/hooks/useProgress.js");
/* harmony import */ var _hooks_useWindowScrollPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useWindowScrollPosition */ "./pages/portfolio/hooks/useWindowScrollPosition.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Button */ "./pages/portfolio/components/Button.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home */ "./pages/portfolio/components/Home.js");
/* harmony import */ var _components_Sections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Sections */ "./pages/portfolio/components/Sections.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Contact */ "./pages/portfolio/components/Contact.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Portfolio = function Portfolio() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      buttonOneOpacity = _useState2[0],
      setButtonOneOpacity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      clickedButtonOne = _useState4[0],
      setClickedButtonOne = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1);
  }, [clickedButtonOne]);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      sectionNavOpacity = _useState6[0],
      setSectionNavOpacity = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    clickedButtonOne ? setSectionNavOpacity(1) : setSectionNavOpacity(0);
  }, [clickedButtonOne]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.pageYOffset > 380 && window.pageYOffset < 600) {
      setSectionNavOpacity(1);
      setButtonOneOpacity(0);
    } else {
      setSectionNavOpacity(0);
      setButtonOneOpacity(1);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-890921222" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    opacity: buttonOneOpacity,
    id: "button",
    start: 0,
    end: 50,
    duration: 1000,
    icon: "\u02C5",
    scaleH: 1.25,
    scaleV: 1,
    klass: "down-arrow",
    action: function action() {
      window.scrollTo({
        top: 385,
        left: 0,
        behavior: 'smooth'
      });
      setTimeout(function () {
        setClickedButtonOne(true);
      }, 500);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "890921222",
    css: ".button-container{position:relative;z-index:10;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEQyQixBQUcrQixrQkFDUCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlUHJvZ3Jlc3MgZnJvbSAnLi9ob29rcy91c2VQcm9ncmVzcydcbmltcG9ydCB1c2VXaW5kb3dTY3JvbGxQb3NpdGlvbiBmcm9tICcuL2hvb2tzL3VzZVdpbmRvd1Njcm9sbFBvc2l0aW9uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbnMnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuXG5jb25zdCBQb3J0Zm9saW8gPSBmdW5jdGlvbigpIHtcblxuICBjb25zdCBbYnV0dG9uT25lT3BhY2l0eSwgc2V0QnV0dG9uT25lT3BhY2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NsaWNrZWRCdXR0b25PbmUsIHNldENsaWNrZWRCdXR0b25PbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY2xpY2tlZEJ1dHRvbk9uZSA/IHNldEJ1dHRvbk9uZU9wYWNpdHkoMCkgOiBzZXRCdXR0b25PbmVPcGFjaXR5KDEpXG4gICAgfSwgW2NsaWNrZWRCdXR0b25PbmVdXG4gICk7XG5cbiAgY29uc3QgW3NlY3Rpb25OYXZPcGFjaXR5LCBzZXRTZWN0aW9uTmF2T3BhY2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGNsaWNrZWRCdXR0b25PbmUgPyBzZXRTZWN0aW9uTmF2T3BhY2l0eSgxKSA6IHNldFNlY3Rpb25OYXZPcGFjaXR5KDApO1xuICAgIH0sIFtjbGlja2VkQnV0dG9uT25lXVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzgwICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IDYwMCkge1xuICAgICAgICBzZXRTZWN0aW9uTmF2T3BhY2l0eSgxKVxuICAgICAgICBzZXRCdXR0b25PbmVPcGFjaXR5KDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTZWN0aW9uTmF2T3BhY2l0eSgwKVxuICAgICAgICBzZXRCdXR0b25PbmVPcGFjaXR5KDEpXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncG9ydGZvbGlvJz5cbiAgICAgIDxIb21lIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWNvbnRhaW5lcic+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvcGFjaXR5PXtidXR0b25PbmVPcGFjaXR5fVxuICAgICAgICAgIGlkPSdidXR0b24nXG4gICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgZW5kPXs1MH1cbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBpY29uPScmIzcwOTsnXG4gICAgICAgICAgc2NhbGVIPXsxLjI1fVxuICAgICAgICAgIHNjYWxlVj17MX1cbiAgICAgICAgICBrbGFzcz0nZG93bi1hcnJvdydcbiAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wOiAzODUsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7c2V0Q2xpY2tlZEJ1dHRvbk9uZSh0cnVlKX0sIDUwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2VjdGlvbnNcbiAgICAgICAgb3BhY2l0eT17c2VjdGlvbk5hdk9wYWNpdHl9XG4gICAgICAvPlxuICAgICAgPENvbnRhY3QgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Sections__WEBPACK_IMPORTED_MODULE_6__["default"], {
    opacity: sectionNavOpacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
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
  var position = Object(_hooks_useProgress__WEBPACK_IMPORTED_MODULE_3__["default"])(props.start, props.end, props.duration);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, {
    className: "button-wrapper",
    style: {
      opacity: props.opacity
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
      right: "".concat(position, "%")
    },
    className: "jsx-2488589536" + " " + 'button',
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
    styleId: "2488589536",
    css: ".button-wrapper{z-index:10;position:relative;margin-top:-55px;cursor:pointer;-webkit-transition:opacity .5s;transition:opacity .5s;}.button{z-index:10;position:absolute;top:-25px;right:-50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3lCLEFBR3NCLEFBT0EsV0FOTyxBQU9BLGtCQU5ELEFBT1IsVUFDRSxPQVBJLEtBUWpCLFVBUHlCLHNEQUN6QiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcbmltcG9ydCB1c2VQcm9ncmVzcyBmcm9tICcuLi9ob29rcy91c2VQcm9ncmVzcydcbmltcG9ydCBwb3NlZCBmcm9tIFwicmVhY3QtcG9zZVwiO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gcG9zZWQuZGl2KHtcbiAgaWRsZTogeyBzY2FsZTogMSB9LFxuICBob3ZlcmVkOiB7IHNjYWxlOiAxLjEgfSxcbiAgcHJlc3NhYmxlOiB0cnVlLFxuICBpbml0OiB7IHNjYWxlOiAxIH0sXG4gIHByZXNzOiB7IHNjYWxlOiAwLjggfVxufSk7XG5cbiBjb25zdCBCdXR0b24gPSBmdW5jdGlvbihwcm9wcykge1xuICBsZXQgcG9zaXRpb24gPSB1c2VQcm9ncmVzcyhwcm9wcy5zdGFydCxwcm9wcy5lbmQscHJvcHMuZHVyYXRpb24pXG4gIGNvbnN0IFtob3ZlcmluZywgc2V0SG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbldyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT0nYnV0dG9uLXdyYXBwZXInXG4gICAgICBzdHlsZT17eyBvcGFjaXR5OiBwcm9wcy5vcGFjaXR5IH19XG4gICAgICBwb3NlPXtob3ZlcmluZyA/IFwiaG92ZXJlZFwiIDogXCJpZGxlXCJ9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyaW5nKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSl9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5hY3Rpb259XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgc3R5bGU9e3sgcmlnaHQ6IGAke3Bvc2l0aW9ufSVgIH19XG4gICAgICA+XG4gICAgICAgIDxDaXJjbGUgey4uLnByb3BzfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOi0yNXB4O1xuICAgICAgICAgIHJpZ2h0Oi01MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9CdXR0b25XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
    className: "jsx-258693318" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "transform": "scale(".concat(h, ",").concat(v, ")")
    },
    className: "jsx-258693318" + " " + (props.klass || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "258693318",
    css: ".circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}.circle:hover{box-shadow:0 5px 15px rgba(33,33,33,1);}.down-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;}.right-arrow{padding:9px 0 0 3px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;clear:both;}.left-arrow{padding:9px 0 0 0;margin:25px 0 0 0;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;clear:both;}.up-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNeUIsQUFHMEMsQUFTUSxBQUcxQixBQU1PLEFBT0YsQUFRTCxhQXBCVSxBQXFCQSxLQVJMLEVBUEssV0FsQlosS0FhSSxBQWFRLEFBUVIsR0F6QmpCLEdBUmMsQ0FrQkcsUUFMTyxBQXFCQSxHQWpDSixJQWtCSSxDQU9QLGFBeEJHLENBWXBCLEFBcUJBLENBUndCLE1BUFgsVUFqQmUsQ0FrQjVCLEtBT2EsV0FDYiwyQ0F6QjBCLHdEQUMxQiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9DaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjbGUocHJvcHMpIHtcbiAgbGV0IGggPSBwcm9wcy5zY2FsZUg7XG4gIGxldCB2ID0gcHJvcHMuc2NhbGVWO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmtsYXNzfSBzdHlsZT17e1widHJhbnNmb3JtXCIgOiBgc2NhbGUoJHtofSwke3Z9KWB9fT57cHJvcHMuaWNvbn08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGU6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgzMywzMywzMywxKTtcbiAgICAgICAgfVxuICAgICAgICAuZG93bi1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtYXJyb3cge1xuICAgICAgICAgIHBhZGRpbmc6IDlweCAwIDAgM3B4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0LWFycm93IHtcbiAgICAgICAgICBwYWRkaW5nOiA5cHggMCAwIDA7XG4gICAgICAgICAgbWFyZ2luOiAyNXB4IDAgMCAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgICAgIC51cC1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Circle.js */",
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



var _sections = [{
  'order': 0,
  'bg': 'linear-gradient(to bottom right, rgba(53,133,156,1), rgba(123,189,212,1))'
}, {
  'order': 1,
  'bg': 'linear-gradient(to bottom right, #000428, #004e92)'
}, {
  'order': 2,
  'bg': 'linear-gradient(to bottom right, rgba(86,171,47,1), rgba(168,224,99,1))'
}];

var Sections = function Sections(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      direction = _useState4[0],
      setDirection = _useState4[1];

  var prev = _sections[index - 1] || _sections[_sections.length - 1];
  var current = _sections[index];
  var next = _sections[index + 1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      width = _useState6[0],
      setWidth = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setWidth(window.innerWidth);
  }, [width]);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(width),
      _useState8 = _slicedToArray(_useState7, 2),
      horizontal = _useState8[0],
      setHorizontal = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var el = document.querySelector('div.sections'); //set scroll to current selection

    el.scrollLeft = horizontal;
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "width": width
    },
    className: "jsx-133916206" + " " + 'sections',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "opacity": props.opacity
    },
    className: "jsx-133916206" + " " + 'nav-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    start: 0,
    end: 50,
    duration: 1000,
    icon: "\u02C2",
    scaleH: 1,
    scaleV: 1.25,
    klass: "left-arrow",
    action: function action() {
      /*previous - subtract window width*/
      {
        setHorizontal(horizontal - width);
      }
      {
        setDirection('prev');
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-133916206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    start: 0,
    end: 50,
    duration: 1000,
    icon: "\u02C3",
    scaleH: 1,
    scaleV: 1.25,
    klass: "right-arrow",
    action: function action() {
      /*next - subtract window width*/
      {
        setHorizontal(horizontal + width);
      }
      {
        setDirection('next');
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "backgroundImage": "".concat(prev.bg),
      "width": width
    },
    className: "jsx-133916206" + " " + 'section sections-bg-prev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "backgroundImage": "".concat(current.bg),
      "width": width
    },
    className: "jsx-133916206" + " " + 'section sections-bg-current',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-133916206" + " " + 'section-description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-133916206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "This is the project description section")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-133916206" + " " + 'section-image-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1534521989089-2084a311b5be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4066a0e11e04fea188cf12f38dd68ee&auto=format&fit=crop&w=1509&q=80",
    className: "jsx-133916206" + " " + 'section-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "backgroundImage": "".concat(next.bg),
      "width": width
    },
    className: "jsx-133916206" + " " + 'section sections-bg-next',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "133916206",
    css: ".sections{height:650px;background:rgba(255,255,255,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:auto;position:relative;z-index:5;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}.section{height:450px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.nav-container{z-index:5;position:fixed;right:50px;top:250px;height:100px;width:50px;-webkit-transition:opacity 1.5s;transition:opacity 1.5s;}.section-description{width:50%;display:inline-block;text-align:center;color:rgba(255,255,255,.65);vertical-align:top;}.section-image-container{width:50%;display:inline-block;}.section-image{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL1NlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHeUIsQUFHd0IsQUFTQSxBQUlILEFBU0EsQUFPQSxBQUlBLFVBbkJLLEFBU00sQUFPQSxBQUl2QixHQWpDaUMsQUFTakIsWUFLSCxNQVNNLEFBT25CLEtBZlksUUFkRyxFQWVBLEdBUWUsVUFQakIsVUFQYixDQVEwQixPQU9MLG1CQUNyQixzQkF4QmtCLFFBaUJsQixRQWhCb0Isa0JBQ1QsVUFDYyw2R0FDekIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxubGV0IF9zZWN0aW9ucyA9IFtcbiAge1xuICAgICdvcmRlcic6IDAsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoNTMsMTMzLDE1NiwxKSwgcmdiYSgxMjMsMTg5LDIxMiwxKSknXG4gIH0sXG4gIHtcbiAgICAnb3JkZXInOiAxLFxuICAgICdiZyc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDAwNDI4LCAjMDA0ZTkyKSdcbiAgfSxcbiAge1xuICAgICdvcmRlcic6IDIsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoODYsMTcxLDQ3LDEpLCByZ2JhKDE2OCwyMjQsOTksMSkpJ1xuICB9LFxuXVxuXG5jb25zdCBTZWN0aW9ucyA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIGxldCBbIGluZGV4LCBzZXRJbmRleCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgbGV0IHByZXYgPSBfc2VjdGlvbnNbaW5kZXgtMV0gfHwgX3NlY3Rpb25zW19zZWN0aW9ucy5sZW5ndGgtMV07XG4gIGxldCBjdXJyZW50ID0gX3NlY3Rpb25zW2luZGV4XTtcbiAgbGV0IG5leHQgPSBfc2VjdGlvbnNbaW5kZXgrMV07XG5cbiAgY29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlKDApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gIH0sIFt3aWR0aF0pXG5cbiAgY29uc3QgWyBob3Jpem9udGFsLCBzZXRIb3Jpem9udGFsIF0gPSB1c2VTdGF0ZSh3aWR0aCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb25zJyk7XG4gICAgLy9zZXQgc2Nyb2xsIHRvIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgZWwuc2Nyb2xsTGVmdCA9IGhvcml6b250YWw7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25zJ1xuICAgICAgc3R5bGU9e3sgXCJ3aWR0aFwiIDogd2lkdGggfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcIm9wYWNpdHlcIiA6IHByb3BzLm9wYWNpdHksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICBlbmQ9ezUwfVxuICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxuICAgICAgICAgIGljb249JyYjNzA2OydcbiAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgc2NhbGVWPXsxLjI1fVxuICAgICAgICAgIGtsYXNzPSdsZWZ0LWFycm93J1xuICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgIC8qcHJldmlvdXMgLSBzdWJ0cmFjdCB3aW5kb3cgd2lkdGgqL1xuICAgICAgICAgICAgICB7c2V0SG9yaXpvbnRhbChob3Jpem9udGFsLXdpZHRoKX1cbiAgICAgICAgICAgICAge3NldERpcmVjdGlvbigncHJldicpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICBlbmQ9ezUwfVxuICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxuICAgICAgICAgIGljb249JyYjNzA3OydcbiAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgc2NhbGVWPXsxLjI1fVxuICAgICAgICAgIGtsYXNzPSdyaWdodC1hcnJvdydcbiAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAvKm5leHQgLSBzdWJ0cmFjdCB3aW5kb3cgd2lkdGgqL1xuICAgICAgICAgICAgICB7c2V0SG9yaXpvbnRhbChob3Jpem9udGFsK3dpZHRoKX1cbiAgICAgICAgICAgICAge3NldERpcmVjdGlvbignbmV4dCcpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uIHNlY3Rpb25zLWJnLXByZXYnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogYCR7cHJldi5iZ31gLFxuICAgICAgICAgIFwid2lkdGhcIiA6IHdpZHRoXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24gc2VjdGlvbnMtYmctY3VycmVudCdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOiBgJHtjdXJyZW50LmJnfWAsXG4gICAgICAgICAgXCJ3aWR0aFwiIDogd2lkdGhcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tZGVzY3JpcHRpb24nPlxuICAgICAgICAgIDxoMj5UaGlzIGlzIHRoZSBwcm9qZWN0IGRlc2NyaXB0aW9uIHNlY3Rpb248L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24taW1hZ2UtY29udGFpbmVyJz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc2VjdGlvbi1pbWFnZScgc3JjPSdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDUyMTk4OTA4OS0yMDg0YTMxMWI1YmU/aXhsaWI9cmItMC4zLjUmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZzPWM0MDY2YTBlMTFlMDRmZWExODhjZjEyZjM4ZGQ2OGVlJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTUwOSZxPTgwJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24gc2VjdGlvbnMtYmctbmV4dCdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOiBgJHtuZXh0LmJnfWAsXG4gICAgICAgICAgXCJ3aWR0aFwiIDogd2lkdGhcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc2VjdGlvbnMge1xuICAgICAgICAgIGhlaWdodDogNjUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6NTtcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjY1KTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24taW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uc1xuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Sections.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sections);

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

/***/ "./pages/portfolio/hooks/useWindowScrollPosition.js":
/*!**********************************************************!*\
  !*** ./pages/portfolio/hooks/useWindowScrollPosition.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(/*! react */ "react"),
    useState = _require.useState,
    useEffect = _require.useEffect;

var _ = __webpack_require__(/*! lodash */ "lodash");

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var defaultOptions = {
  throttle: 100
};

function useWindowScrollPosition(options) {
  var opts = Object.assign({}, defaultOptions, options);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  useEffect(function () {
    var handleScroll = _.throttle(function () {
      setPosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    }, opts.throttle);

    window.addEventListener('scroll', handleScroll, supportsPassive ? {
      passive: true
    } : false);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return position;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowScrollPosition);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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