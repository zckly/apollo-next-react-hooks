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
    className: "jsx-4008978741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4008978741",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New',monospace,serif;font-weight:400;}body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUlzRSxBQUlwRCxTQUNYLGdJQUpvQixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtYWluPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sICdMdWNpZGEgQ29uc29sZScsICdMaWJlcmF0aW9uIE1vbm8nLCAnRGVqYVZ1IFNhbnMgTW9ubycsXG4gICAgICAgICAgJ0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L21haW4+XG4pXG4gICAgLy8gPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAvLyAgICoge1xuICAgIC8vICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsXG4gICAgLy8gICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAvLyAgICAgICBtb25vc3BhY2UsIHNlcmlmO1xuICAgIC8vICAgfVxuICAgIC8vICAgYm9keSB7XG4gICAgLy8gICAgIG1hcmdpbjogMDtcbiAgICAvLyAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgIC8vICAgfVxuICAgIC8vICAgYSB7XG4gICAgLy8gICAgIGNvbG9yOiAjMjJiYWQ5O1xuICAgIC8vICAgfVxuICAgIC8vICAgcCB7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgLy8gICB9XG4gICAgLy8gICBhcnRpY2xlIHtcbiAgICAvLyAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgLy8gICB9XG4gICAgLy8gICBidXR0b24ge1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgIC8vICAgICBib3JkZXI6IDA7XG4gICAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGJ1dHRvbjphY3RpdmUge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgIC8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgLy8gICB9XG4gICAgLy8gICBidXR0b246Zm9jdXMge1xuICAgIC8vICAgICBvdXRsaW5lOiBub25lO1xuICAgIC8vICAgfVxuICAgIC8vIGB9PC9zdHlsZT5cbi8vICAgPC9tYWluPlxuLy8gKVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/components/App.js */",
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

/***/ "./pages/carousel/CarouselApp.js":
/*!***************************************!*\
  !*** ./pages/carousel/CarouselApp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselApp; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _whatevs_slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whatevs/slides */ "./pages/carousel/whatevs/slides.js");
/* harmony import */ var _useProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useProgress */ "./pages/carousel/useProgress.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/CarouselApp.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var SLIDE_DURATION = 3000;

function Carousel(props) {
  if (typeof window == 'undefined') {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", _extends({
    className: "Carousel"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

function Slides(props) {
  if (typeof window == 'undefined') {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1660901647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", _extends({}, props, {
    className: "jsx-1660901647" + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1660901647",
    css: "*{box-sizing:border-box;}body{margin:0;padding:0;font-family:sans-serif;background:#ddd;}a{color:blue;}[aria-current=\"page\"]{color:red;}.Carousel{position:absolute;left:0;right:0;top:0;bottom:0;}.SlideNav{position:absolute;bottom:36px;left:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style-type:none;}.Controls{position:absolute;right:20px;bottom:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL2Nhcm91c2VsL0Nhcm91c2VsQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCeUIsQUFHaUMsQUFJYixBQU9FLEFBSUQsQUFJUSxBQU9BLEFBU0EsU0E5QlIsQ0FXWixDQUpBLE9BUVMsQUFPSyxBQVNELENBOUJZLEdBTHpCLEdBb0JVLElBZ0JJLENBVEYsR0FOSixNQUNHLENBTUksQ0FTQSxDQS9CRyxNQWlCbEIsVUFoQkEsd0RBc0JZLENBU2EsU0FSQSwwRkFTekIsU0FSdUIscUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL2Nhcm91c2VsL0Nhcm91c2VsQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VSZWR1Y2VyLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZlxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgRmFQbGF5LFxuICBGYVBhdXNlLFxuICBGYUZvcndhcmQsXG4gIEZhQmFja3dhcmRcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmltcG9ydCBzbGlkZXMgZnJvbSBcIi4vd2hhdGV2cy9zbGlkZXNcIjtcbmltcG9ydCB1c2VQcm9ncmVzcyBmcm9tIFwiLi91c2VQcm9ncmVzc1wiO1xuXG5sZXQgU0xJREVfRFVSQVRJT04gPSAzMDAwO1xuXG5mdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQ2Fyb3VzZWxcIiB7Li4ucHJvcHN9IC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNsaWRlcyhwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCB7Li4ucHJvcHN9IC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuQ2Fyb3VzZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLlNsaWRlTmF2IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAzNnB4O1xuICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuQ29udHJvbHMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFNsaWRlKHtcbiAgICBpc0N1cnJlbnQsXG4gICAgdGFrZUZvY3VzLFxuICAgIGltYWdlLFxuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGNoaWxkcmVuXG4gIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICBsZXQgcmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChpc0N1cnJlbnQgJiYgdGFrZUZvY3VzKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNDdXJyZW50LCB0YWtlRm9jdXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIHJlZj17cmVmfVxuICAgICAgYXJpYS1oaWRkZW49eyFpc0N1cnJlbnR9XG4gICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT17aWR9XG4gICAgICBjbGFzc05hbWU9XCJTbGlkZVwiXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2xpZGVDb250ZW50XCI+XG4gICAgICAgIDxoMiBpZD17aWR9Pnt0aXRsZX08L2gyPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5TbGlkZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuU2xpZGVbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIwMG1zO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLlNsaWRlQ29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggaHNsYSgwLCAwJSwgMCUsIDEpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNsaWRlTmF2KHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJTbGlkZU5hdlwiIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIFNsaWRlTmF2SXRlbSh7IGlzQ3VycmVudCwgLi4ucHJvcHMgfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIlNsaWRlTmF2SXRlbVwiPlxuICAgICAgPGJ1dHRvbiB7Li4ucHJvcHN9IGFyaWEtY3VycmVudD17aXNDdXJyZW50fT5cbiAgICAgICAgPHNwYW4gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uIHtcbiAgICAgICAgICAgIGFsbDogdW5zZXQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5TbGlkZU5hdkl0ZW0gPiBidXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuMzMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5TbGlkZU5hdkl0ZW0gPiBidXR0b24gPiBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4yNSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uW2FyaWEtY3VycmVudD1cInRydWVcIl0gPiBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC43NSk7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xzKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRyb2xzXCIgey4uLnByb3BzfSAvPlxuICApXG59XG5cbmZ1bmN0aW9uIEljb25CdXR0b24ocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIHsuLi5wcm9wc30gY2xhc3NOYW1lPVwiSWNvbkJ1dHRvblwiIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuSWNvbkJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjUpO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLkljb25CdXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gICAgICAgICAgY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC43NSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjMzKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcih7IGFuaW1hdGUsIHRpbWUgfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIGxldCBwcm9ncmVzcyA9IHVzZVByb2dyZXNzKGFuaW1hdGUsIHRpbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJQcm9ncmVzc0JhclwiPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3MgKiAxMDB9JWAgfX1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuUHJvZ3Jlc3NCYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9ncmVzc0JhciA+IGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjI1KTtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbEFwcCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICBsZXQgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJORVhUXCI6XG4gICAgICAgIGNhc2UgXCJQUk9HUkVTU1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzUGxheWluZzogYWN0aW9uLnR5cGUgPT09IFwiUFJPR1JFU1NcIixcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDpcbiAgICAgICAgICAgICAgKHN0YXRlLmN1cnJlbnRJbmRleCArIDEpICVcbiAgICAgICAgICAgICAgc2xpZGVzLmxlbmd0aFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJQQVVTRVwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUExBWVwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzUGxheWluZzogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJQUkVWXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OlxuICAgICAgICAgICAgICAoc3RhdGUuY3VycmVudEluZGV4IC1cbiAgICAgICAgICAgICAgICAxICtcbiAgICAgICAgICAgICAgICBzbGlkZXMubGVuZ3RoKSAlXG4gICAgICAgICAgICAgIHNsaWRlcy5sZW5ndGgsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIkdPVE9cIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0YWtlRm9jdXM6IHRydWUsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJVTlNFVF9GT0NVU1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRha2VGb2N1czogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICAgIGlzUGxheWluZzogZmFsc2UsXG4gICAgICB0YWtlRm9jdXM6IGZhbHNlXG4gICAgfVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuaXNQbGF5aW5nKSB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBST0dSRVNTXCIgfSk7XG4gICAgICAgIH0sIFNMSURFX0RVUkFUSU9OKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzdGF0ZS5jdXJyZW50SW5kZXgsIHN0YXRlLmlzUGxheWluZ11cbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnRha2VGb2N1cykge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiVU5TRVRfRk9DVVNcIiB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzdGF0ZS50YWtlRm9jdXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWwgYXJpYS1sYWJlbD1cIkltYWdlcyBmcm9tIFNwYWNlXCI+XG4gICAgICA8U2xpZGVzPlxuICAgICAgICB7c2xpZGVzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNsaWRlXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaWQ9e2BpbWFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgICBpbWFnZT17aW1hZ2UuaW1nfVxuICAgICAgICAgICAgdGl0bGU9e2ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgaXNDdXJyZW50PXtpbmRleCA9PT0gc3RhdGUuY3VycmVudEluZGV4fVxuICAgICAgICAgICAgdGFrZUZvY3VzPXtzdGF0ZS50YWtlRm9jdXN9XG4gICAgICAgICAgICBjaGlsZHJlbj17aW1hZ2UuY29udGVudH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVzPlxuXG4gICAgICA8U2xpZGVOYXY+XG4gICAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2xpZGVOYXZJdGVtXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaXNDdXJyZW50PXtpbmRleCA9PT0gc3RhdGUuY3VycmVudEluZGV4fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YFNsaWRlICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJHT1RPXCIsIGluZGV4IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVOYXY+XG5cbiAgICAgIDxDb250cm9scz5cbiAgICAgICAge3N0YXRlLmlzUGxheWluZyA/IChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhdXNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBBVVNFXCIgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hpbGRyZW49ezxGYVBhdXNlIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBMQVlcIiB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGlsZHJlbj17PEZhUGxheSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBTbGlkZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBSRVZcIiB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNoaWxkcmVuPXs8RmFCYWNrd2FyZCAvPn1cbiAgICAgICAgLz5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCBTbGlkZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk5FWFRcIiB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNoaWxkcmVuPXs8RmFGb3J3YXJkIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Db250cm9scz5cblxuICAgICAgPFByb2dyZXNzQmFyXG4gICAgICAgIGtleT17c3RhdGUuY3VycmVudEluZGV4ICsgc3RhdGUuaXNQbGF5aW5nfVxuICAgICAgICB0aW1lPXtTTElERV9EVVJBVElPTn1cbiAgICAgICAgYW5pbWF0ZT17c3RhdGUuaXNQbGF5aW5nfVxuICAgICAgLz5cblxuICAgIDwvQ2Fyb3VzZWw+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/CarouselApp.js */",
    __self: this
  }));
}

function Slide(_ref) {
  var isCurrent = _ref.isCurrent,
      takeFocus = _ref.takeFocus,
      image = _ref.image,
      id = _ref.id,
      title = _ref.title,
      children = _ref.children;

  if (typeof window == 'undefined') {
    return null;
  }

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isCurrent && takeFocus) {
      ref.current.focus();
    }
  }, [isCurrent, takeFocus]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    ref: ref,
    "aria-hidden": !isCurrent,
    tabIndex: "-1",
    "aria-labelledby": id,
    style: {
      backgroundImage: "url(".concat(image, ")")
    },
    className: "jsx-334710445" + " " + "Slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-334710445" + " " + "SlideContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    id: id,
    className: "jsx-334710445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, title), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "334710445",
    css: ".Slide{opacity:1;position:absolute;top:0;left:0;right:0;bottom:0;list-style-type:none;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;background-size:cover;background-repeat:no-repeat;background-position:center center;}.Slide[aria-hidden=\"true\"]{opacity:0;-webkit-transition-delay:200ms;transition-delay:200ms;z-index:-1;}.SlideContent{background:hsla(0,0%,0%,0.5);font-weight:100;text-shadow:0px 0px 5px hsla(0,0%,0%,1);color:white;max-width:500px;padding:20px;margin-left:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL2Nhcm91c2VsL0Nhcm91c2VsQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIeUIsQUFHcUIsQUFjQSxBQU1zQixVQW5CZCxBQWNLLGtCQWJqQixDQW1CVSxLQWxCVCxPQUNDLElBa0JtQyxJQWpCbEMsU0FDWSxNQVVWLFdBQ2IsSUFWZ0MsTUFnQmxCLFlBQ0ksZ0JBQ0gsYUFDSSxpQkFDRCxJQW5CTSxZQW9CeEIsVUFuQjhCLDRCQUNNLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9jYXJvdXNlbC9DYXJvdXNlbEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlUmVkdWNlcixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWZcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEZhUGxheSxcbiAgRmFQYXVzZSxcbiAgRmFGb3J3YXJkLFxuICBGYUJhY2t3YXJkXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgc2xpZGVzIGZyb20gXCIuL3doYXRldnMvc2xpZGVzXCI7XG5pbXBvcnQgdXNlUHJvZ3Jlc3MgZnJvbSBcIi4vdXNlUHJvZ3Jlc3NcIjtcblxubGV0IFNMSURFX0RVUkFUSU9OID0gMzAwMDtcblxuZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkNhcm91c2VsXCIgey4uLnByb3BzfSAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgey4uLnByb3BzfSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLkNhcm91c2VsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5TbGlkZU5hdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMzZweDtcbiAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLkNvbnRyb2xzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBTbGlkZSh7XG4gICAgaXNDdXJyZW50LFxuICAgIHRha2VGb2N1cyxcbiAgICBpbWFnZSxcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBjaGlsZHJlblxuICB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IHJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaXNDdXJyZW50ICYmIHRha2VGb2N1cykge1xuICAgICAgICByZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2lzQ3VycmVudCwgdGFrZUZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFyaWEtaGlkZGVuPXshaXNDdXJyZW50fVxuICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2lkfVxuICAgICAgY2xhc3NOYW1lPVwiU2xpZGVcIlxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNsaWRlQ29udGVudFwiPlxuICAgICAgICA8aDIgaWQ9e2lkfT57dGl0bGV9PC9oMj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuU2xpZGUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLlNsaWRlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5TbGlkZUNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGhzbGEoMCwgMCUsIDAlLCAxKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBTbGlkZU5hdihwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiU2xpZGVOYXZcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBTbGlkZU5hdkl0ZW0oeyBpc0N1cnJlbnQsIC4uLnByb3BzIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJTbGlkZU5hdkl0ZW1cIj5cbiAgICAgIDxidXR0b24gey4uLnByb3BzfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudH0+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvbiB7XG4gICAgICAgICAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uOmZvY3VzLXZpc2libGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjMzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uID4gc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuMjUpO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvblthcmlhLWN1cnJlbnQ9XCJ0cnVlXCJdID4gc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNzUpO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250cm9scyhwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250cm9sc1wiIHsuLi5wcm9wc30gLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBJY29uQnV0dG9uKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cIkljb25CdXR0b25cIiAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkljb25CdXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC41KTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5JY29uQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICAgICAgICAgIGNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4zMyk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoeyBhbmltYXRlLCB0aW1lIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICBsZXQgcHJvZ3Jlc3MgPSB1c2VQcm9ncmVzcyhhbmltYXRlLCB0aW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZ3Jlc3NCYXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzICogMTAwfSVgIH19XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLlByb2dyZXNzQmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZ3Jlc3NCYXIgPiBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4yNSk7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxBcHAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiTkVYVFwiOlxuICAgICAgICBjYXNlIFwiUFJPR1JFU1NcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGFjdGlvbi50eXBlID09PSBcIlBST0dSRVNTXCIsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6XG4gICAgICAgICAgICAgIChzdGF0ZS5jdXJyZW50SW5kZXggKyAxKSAlXG4gICAgICAgICAgICAgIHNsaWRlcy5sZW5ndGhcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUEFVU0VcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIlBMQVlcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUFJFVlwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDpcbiAgICAgICAgICAgICAgKHN0YXRlLmN1cnJlbnRJbmRleCAtXG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgc2xpZGVzLmxlbmd0aCkgJVxuICAgICAgICAgICAgICBzbGlkZXMubGVuZ3RoLFxuICAgICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJHT1RPXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdGFrZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiVU5TRVRfRk9DVVNcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0YWtlRm9jdXM6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgdGFrZUZvY3VzOiBmYWxzZVxuICAgIH1cbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmlzUGxheWluZykge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUk9HUkVTU1wiIH0pO1xuICAgICAgICB9LCBTTElERV9EVVJBVElPTik7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RhdGUuY3VycmVudEluZGV4LCBzdGF0ZS5pc1BsYXlpbmddXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50YWtlRm9jdXMpIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUX0ZPQ1VTXCIgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RhdGUudGFrZUZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsIGFyaWEtbGFiZWw9XCJJbWFnZXMgZnJvbSBTcGFjZVwiPlxuICAgICAgPFNsaWRlcz5cbiAgICAgICAge3NsaWRlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTbGlkZVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtgaW1hZ2UtJHtpbmRleH1gfVxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlLmltZ31cbiAgICAgICAgICAgIHRpdGxlPXtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIHRha2VGb2N1cz17c3RhdGUudGFrZUZvY3VzfVxuICAgICAgICAgICAgY2hpbGRyZW49e2ltYWdlLmNvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcz5cblxuICAgICAgPFNsaWRlTmF2PlxuICAgICAgICB7c2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNsaWRlTmF2SXRlbVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTbGlkZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiR09UT1wiLCBpbmRleCB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlTmF2PlxuXG4gICAgICA8Q29udHJvbHM+XG4gICAgICAgIHtzdGF0ZS5pc1BsYXlpbmcgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXVzZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQQVVTRVwiIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXs8RmFQYXVzZSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGxheVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQTEFZXCIgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hpbGRyZW49ezxGYVBsYXkgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgU2xpZGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUkVWXCIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17PEZhQmFja3dhcmQgLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgU2xpZGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJORVhUXCIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17PEZhRm9yd2FyZCAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udHJvbHM+XG5cbiAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICBrZXk9e3N0YXRlLmN1cnJlbnRJbmRleCArIHN0YXRlLmlzUGxheWluZ31cbiAgICAgICAgdGltZT17U0xJREVfRFVSQVRJT059XG4gICAgICAgIGFuaW1hdGU9e3N0YXRlLmlzUGxheWluZ31cbiAgICAgIC8+XG5cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/CarouselApp.js */",
    __self: this
  }));
}

function SlideNav(props) {
  if (typeof window == 'undefined') {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", _extends({
    className: "SlideNav"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }));
}

function SlideNavItem(_ref2) {
  var isCurrent = _ref2.isCurrent,
      props = _objectWithoutProperties(_ref2, ["isCurrent"]);

  if (typeof window == 'undefined') {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-491599592" + " " + "SlideNavItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", _extends({}, props, {
    "aria-current": isCurrent,
    className: "jsx-491599592" + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-491599592",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "491599592",
    css: ".SlideNavItem>button{all:unset;cursor:pointer;border-radius:50%;height:2em;width:2rem;margin:5px;outline:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:transparent;}.SlideNavItem>button:focus-visible{background-color:hsla(0,100%,100%,0.33);}.SlideNavItem>button>span{background:hsla(0,100%,100%,0.25);display:inline-block;border-radius:50%;height:1rem;width:1rem;}.SlideNavItem>button[aria-current=\"true\"]>span{background:hsla(0,100%,100%,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL2Nhcm91c2VsL0Nhcm91c2VsQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLeUIsQUFHdUIsQUFjaUMsQUFJTixBQVFBLFVBekJ0QixlQUNHLFNBaUJHLEFBUXZCLE1BWkEsR0FaYSxXQUNBLENBZ0JPLFVBZlAsUUFnQkMsR0FmQyxTQWdCRixJQWZFLE9BZ0JmLG1FQWZxQiw2RkFDSSxtR0FDTSw2QkFDL0IiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvY2Fyb3VzZWwvQ2Fyb3VzZWxBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmXG59IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBGYVBsYXksXG4gIEZhUGF1c2UsXG4gIEZhRm9yd2FyZCxcbiAgRmFCYWNrd2FyZFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuaW1wb3J0IHNsaWRlcyBmcm9tIFwiLi93aGF0ZXZzL3NsaWRlc1wiO1xuaW1wb3J0IHVzZVByb2dyZXNzIGZyb20gXCIuL3VzZVByb2dyZXNzXCI7XG5cbmxldCBTTElERV9EVVJBVElPTiA9IDMwMDA7XG5cbmZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJDYXJvdXNlbFwiIHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2xpZGVzKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsIHsuLi5wcm9wc30gLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5DYXJvdXNlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICAuU2xpZGVOYXYge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDM2cHg7XG4gICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5Db250cm9scyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gU2xpZGUoe1xuICAgIGlzQ3VycmVudCxcbiAgICB0YWtlRm9jdXMsXG4gICAgaW1hZ2UsXG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgY2hpbGRyZW5cbiAgfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIGxldCByZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKGlzQ3VycmVudCAmJiB0YWtlRm9jdXMpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0N1cnJlbnQsIHRha2VGb2N1c11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxsaVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBhcmlhLWhpZGRlbj17IWlzQ3VycmVudH1cbiAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtpZH1cbiAgICAgIGNsYXNzTmFtZT1cIlNsaWRlXCJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTbGlkZUNvbnRlbnRcIj5cbiAgICAgICAgPGgyIGlkPXtpZH0+e3RpdGxlfTwvaDI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLlNsaWRlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5TbGlkZVthcmlhLWhpZGRlbj1cInRydWVcIl0ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICAuU2xpZGVDb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAwJSwgMC41KTtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBoc2xhKDAsIDAlLCAwJSwgMSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2xpZGVOYXYocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cIlNsaWRlTmF2XCIgey4uLnByb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gU2xpZGVOYXZJdGVtKHsgaXNDdXJyZW50LCAuLi5wcm9wcyB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiU2xpZGVOYXZJdGVtXCI+XG4gICAgICA8YnV0dG9uIHsuLi5wcm9wc30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnR9PlxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5TbGlkZU5hdkl0ZW0gPiBidXR0b24ge1xuICAgICAgICAgICAgYWxsOiB1bnNldDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4zMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvbiA+IHNwYW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjI1KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5TbGlkZU5hdkl0ZW0gPiBidXR0b25bYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSA+IHNwYW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjc1KTtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbHMocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udHJvbHNcIiB7Li4ucHJvcHN9IC8+XG4gIClcbn1cblxuZnVuY3Rpb24gSWNvbkJ1dHRvbihwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gey4uLnByb3BzfSBjbGFzc05hbWU9XCJJY29uQnV0dG9uXCIgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5JY29uQnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNSk7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuSWNvbkJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgICBjb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjc1KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuMzMpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFByb2dyZXNzQmFyKHsgYW5pbWF0ZSwgdGltZSB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IHByb2dyZXNzID0gdXNlUHJvZ3Jlc3MoYW5pbWF0ZSwgdGltZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2dyZXNzQmFyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzcyAqIDEwMH0lYCB9fVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5Qcm9ncmVzc0JhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2dyZXNzQmFyID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuMjUpO1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsQXBwKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIk5FWFRcIjpcbiAgICAgICAgY2FzZSBcIlBST0dSRVNTXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNQbGF5aW5nOiBhY3Rpb24udHlwZSA9PT0gXCJQUk9HUkVTU1wiLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OlxuICAgICAgICAgICAgICAoc3RhdGUuY3VycmVudEluZGV4ICsgMSkgJVxuICAgICAgICAgICAgICBzbGlkZXMubGVuZ3RoXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIlBBVVNFXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJQTEFZXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIlBSRVZcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6XG4gICAgICAgICAgICAgIChzdGF0ZS5jdXJyZW50SW5kZXggLVxuICAgICAgICAgICAgICAgIDEgK1xuICAgICAgICAgICAgICAgIHNsaWRlcy5sZW5ndGgpICVcbiAgICAgICAgICAgICAgc2xpZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiR09UT1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRha2VGb2N1czogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIlVOU0VUX0ZPQ1VTXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdGFrZUZvY3VzOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcbiAgICAgIHRha2VGb2N1czogZmFsc2VcbiAgICB9XG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5pc1BsYXlpbmcpIHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUFJPR1JFU1NcIiB9KTtcbiAgICAgICAgfSwgU0xJREVfRFVSQVRJT04pO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3N0YXRlLmN1cnJlbnRJbmRleCwgc3RhdGUuaXNQbGF5aW5nXVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGFrZUZvY3VzKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVTlNFVF9GT0NVU1wiIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3N0YXRlLnRha2VGb2N1c11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbCBhcmlhLWxhYmVsPVwiSW1hZ2VzIGZyb20gU3BhY2VcIj5cbiAgICAgIDxTbGlkZXM+XG4gICAgICAgIHtzbGlkZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2xpZGVcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpZD17YGltYWdlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgIGltYWdlPXtpbWFnZS5pbWd9XG4gICAgICAgICAgICB0aXRsZT17aW1hZ2UudGl0bGV9XG4gICAgICAgICAgICBpc0N1cnJlbnQ9e2luZGV4ID09PSBzdGF0ZS5jdXJyZW50SW5kZXh9XG4gICAgICAgICAgICB0YWtlRm9jdXM9e3N0YXRlLnRha2VGb2N1c31cbiAgICAgICAgICAgIGNoaWxkcmVuPXtpbWFnZS5jb250ZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TbGlkZXM+XG5cbiAgICAgIDxTbGlkZU5hdj5cbiAgICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTbGlkZU5hdkl0ZW1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpc0N1cnJlbnQ9e2luZGV4ID09PSBzdGF0ZS5jdXJyZW50SW5kZXh9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgU2xpZGUgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkdPVE9cIiwgaW5kZXggfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TbGlkZU5hdj5cblxuICAgICAgPENvbnRyb2xzPlxuICAgICAgICB7c3RhdGUuaXNQbGF5aW5nID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGF1c2VcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUEFVU0VcIiB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGlsZHJlbj17PEZhUGF1c2UgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBsYXlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUExBWVwiIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXs8RmFQbGF5IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIFNsaWRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUFJFVlwiIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2hpbGRyZW49ezxGYUJhY2t3YXJkIC8+fVxuICAgICAgICAvPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IFNsaWRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTkVYVFwiIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2hpbGRyZW49ezxGYUZvcndhcmQgLz59XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRyb2xzPlxuXG4gICAgICA8UHJvZ3Jlc3NCYXJcbiAgICAgICAga2V5PXtzdGF0ZS5jdXJyZW50SW5kZXggKyBzdGF0ZS5pc1BsYXlpbmd9XG4gICAgICAgIHRpbWU9e1NMSURFX0RVUkFUSU9OfVxuICAgICAgICBhbmltYXRlPXtzdGF0ZS5pc1BsYXlpbmd9XG4gICAgICAvPlxuXG4gICAgPC9DYXJvdXNlbD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/CarouselApp.js */",
    __self: this
  }));
}

function Controls(props) {
  if (typeof window == 'undefined') {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
    className: "Controls"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }));
}

function IconButton(props) {
  if (typeof window == 'undefined') {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2779654683",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", _extends({}, props, {
    className: "jsx-2779654683" + " " + "IconButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2779654683",
    css: ".IconButton{border:none;background:none;display:inline-block;padding:0;width:3rem;height:3rem;line-height:1.8rem;font-size:2rem;text-align:center;background-color:transparent;color:hsla(0,100%,100%,0.5);outline:none;}button:active{position:relative;top:1px;left:1px;}.IconButton:focus-visible{color:hsla(0,100%,100%,0.75);background-color:hsla(0,100%,100%,0.33);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL2Nhcm91c2VsL0Nhcm91c2VsQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStNeUIsQUFHdUIsQUFlTSxBQU1jLFlBcEJoQixNQWVSLFFBQ0MsRUFmWSxDQW9Cc0IsTUFKN0MsY0FmWSxVQUNDLFVBbUJiLENBbEJjLFlBQ08sbUJBQ0osZUFDRyxrQkFDVyw2QkFDRSw0QkFDbEIsYUFDZiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9jYXJvdXNlbC9DYXJvdXNlbEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlUmVkdWNlcixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWZcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEZhUGxheSxcbiAgRmFQYXVzZSxcbiAgRmFGb3J3YXJkLFxuICBGYUJhY2t3YXJkXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgc2xpZGVzIGZyb20gXCIuL3doYXRldnMvc2xpZGVzXCI7XG5pbXBvcnQgdXNlUHJvZ3Jlc3MgZnJvbSBcIi4vdXNlUHJvZ3Jlc3NcIjtcblxubGV0IFNMSURFX0RVUkFUSU9OID0gMzAwMDtcblxuZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkNhcm91c2VsXCIgey4uLnByb3BzfSAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgey4uLnByb3BzfSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLkNhcm91c2VsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5TbGlkZU5hdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMzZweDtcbiAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLkNvbnRyb2xzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBTbGlkZSh7XG4gICAgaXNDdXJyZW50LFxuICAgIHRha2VGb2N1cyxcbiAgICBpbWFnZSxcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBjaGlsZHJlblxuICB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IHJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaXNDdXJyZW50ICYmIHRha2VGb2N1cykge1xuICAgICAgICByZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2lzQ3VycmVudCwgdGFrZUZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFyaWEtaGlkZGVuPXshaXNDdXJyZW50fVxuICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2lkfVxuICAgICAgY2xhc3NOYW1lPVwiU2xpZGVcIlxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNsaWRlQ29udGVudFwiPlxuICAgICAgICA8aDIgaWQ9e2lkfT57dGl0bGV9PC9oMj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuU2xpZGUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLlNsaWRlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5TbGlkZUNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGhzbGEoMCwgMCUsIDAlLCAxKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBTbGlkZU5hdihwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiU2xpZGVOYXZcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBTbGlkZU5hdkl0ZW0oeyBpc0N1cnJlbnQsIC4uLnByb3BzIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJTbGlkZU5hdkl0ZW1cIj5cbiAgICAgIDxidXR0b24gey4uLnByb3BzfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudH0+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvbiB7XG4gICAgICAgICAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uOmZvY3VzLXZpc2libGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjMzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uID4gc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuMjUpO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvblthcmlhLWN1cnJlbnQ9XCJ0cnVlXCJdID4gc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNzUpO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250cm9scyhwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250cm9sc1wiIHsuLi5wcm9wc30gLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBJY29uQnV0dG9uKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cIkljb25CdXR0b25cIiAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkljb25CdXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC41KTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5JY29uQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICAgICAgICAgIGNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4zMyk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoeyBhbmltYXRlLCB0aW1lIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICBsZXQgcHJvZ3Jlc3MgPSB1c2VQcm9ncmVzcyhhbmltYXRlLCB0aW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZ3Jlc3NCYXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzICogMTAwfSVgIH19XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLlByb2dyZXNzQmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZ3Jlc3NCYXIgPiBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4yNSk7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxBcHAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiTkVYVFwiOlxuICAgICAgICBjYXNlIFwiUFJPR1JFU1NcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGFjdGlvbi50eXBlID09PSBcIlBST0dSRVNTXCIsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6XG4gICAgICAgICAgICAgIChzdGF0ZS5jdXJyZW50SW5kZXggKyAxKSAlXG4gICAgICAgICAgICAgIHNsaWRlcy5sZW5ndGhcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUEFVU0VcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIlBMQVlcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUFJFVlwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDpcbiAgICAgICAgICAgICAgKHN0YXRlLmN1cnJlbnRJbmRleCAtXG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgc2xpZGVzLmxlbmd0aCkgJVxuICAgICAgICAgICAgICBzbGlkZXMubGVuZ3RoLFxuICAgICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJHT1RPXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdGFrZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiVU5TRVRfRk9DVVNcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0YWtlRm9jdXM6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgdGFrZUZvY3VzOiBmYWxzZVxuICAgIH1cbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmlzUGxheWluZykge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUk9HUkVTU1wiIH0pO1xuICAgICAgICB9LCBTTElERV9EVVJBVElPTik7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RhdGUuY3VycmVudEluZGV4LCBzdGF0ZS5pc1BsYXlpbmddXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50YWtlRm9jdXMpIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUX0ZPQ1VTXCIgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RhdGUudGFrZUZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsIGFyaWEtbGFiZWw9XCJJbWFnZXMgZnJvbSBTcGFjZVwiPlxuICAgICAgPFNsaWRlcz5cbiAgICAgICAge3NsaWRlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTbGlkZVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtgaW1hZ2UtJHtpbmRleH1gfVxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlLmltZ31cbiAgICAgICAgICAgIHRpdGxlPXtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIHRha2VGb2N1cz17c3RhdGUudGFrZUZvY3VzfVxuICAgICAgICAgICAgY2hpbGRyZW49e2ltYWdlLmNvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcz5cblxuICAgICAgPFNsaWRlTmF2PlxuICAgICAgICB7c2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNsaWRlTmF2SXRlbVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTbGlkZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiR09UT1wiLCBpbmRleCB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlTmF2PlxuXG4gICAgICA8Q29udHJvbHM+XG4gICAgICAgIHtzdGF0ZS5pc1BsYXlpbmcgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXVzZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQQVVTRVwiIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXs8RmFQYXVzZSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGxheVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQTEFZXCIgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hpbGRyZW49ezxGYVBsYXkgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgU2xpZGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUkVWXCIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17PEZhQmFja3dhcmQgLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgU2xpZGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJORVhUXCIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17PEZhRm9yd2FyZCAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udHJvbHM+XG5cbiAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICBrZXk9e3N0YXRlLmN1cnJlbnRJbmRleCArIHN0YXRlLmlzUGxheWluZ31cbiAgICAgICAgdGltZT17U0xJREVfRFVSQVRJT059XG4gICAgICAgIGFuaW1hdGU9e3N0YXRlLmlzUGxheWluZ31cbiAgICAgIC8+XG5cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/CarouselApp.js */",
    __self: this
  }));
}

function ProgressBar(_ref3) {
  var animate = _ref3.animate,
      time = _ref3.time;

  if (typeof window == 'undefined') {
    return null;
  }

  var progress = Object(_useProgress__WEBPACK_IMPORTED_MODULE_4__["default"])(animate, time);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3653892205" + " " + "ProgressBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "".concat(progress * 100, "%")
    },
    className: "jsx-3653892205",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3653892205",
    css: ".ProgressBar{position:absolute;bottom:0;left:0;right:0;}.ProgressBar>div{background-color:hsla(0,100%,100%,0.25);height:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL2Nhcm91c2VsL0Nhcm91c2VsQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVQeUIsQUFHNkIsQUFPeUIsa0JBTmxDLFNBQ0YsT0FDQyxNQUtJLEVBSmQsVUFLQSIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9jYXJvdXNlbC9DYXJvdXNlbEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlUmVkdWNlcixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWZcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEZhUGxheSxcbiAgRmFQYXVzZSxcbiAgRmFGb3J3YXJkLFxuICBGYUJhY2t3YXJkXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgc2xpZGVzIGZyb20gXCIuL3doYXRldnMvc2xpZGVzXCI7XG5pbXBvcnQgdXNlUHJvZ3Jlc3MgZnJvbSBcIi4vdXNlUHJvZ3Jlc3NcIjtcblxubGV0IFNMSURFX0RVUkFUSU9OID0gMzAwMDtcblxuZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkNhcm91c2VsXCIgey4uLnByb3BzfSAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMocHJvcHMpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgey4uLnByb3BzfSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLkNhcm91c2VsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5TbGlkZU5hdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMzZweDtcbiAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLkNvbnRyb2xzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBTbGlkZSh7XG4gICAgaXNDdXJyZW50LFxuICAgIHRha2VGb2N1cyxcbiAgICBpbWFnZSxcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBjaGlsZHJlblxuICB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IHJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaXNDdXJyZW50ICYmIHRha2VGb2N1cykge1xuICAgICAgICByZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2lzQ3VycmVudCwgdGFrZUZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFyaWEtaGlkZGVuPXshaXNDdXJyZW50fVxuICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2lkfVxuICAgICAgY2xhc3NOYW1lPVwiU2xpZGVcIlxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNsaWRlQ29udGVudFwiPlxuICAgICAgICA8aDIgaWQ9e2lkfT57dGl0bGV9PC9oMj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuU2xpZGUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLlNsaWRlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5TbGlkZUNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGhzbGEoMCwgMCUsIDAlLCAxKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBTbGlkZU5hdihwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiU2xpZGVOYXZcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBTbGlkZU5hdkl0ZW0oeyBpc0N1cnJlbnQsIC4uLnByb3BzIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJTbGlkZU5hdkl0ZW1cIj5cbiAgICAgIDxidXR0b24gey4uLnByb3BzfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudH0+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvbiB7XG4gICAgICAgICAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uOmZvY3VzLXZpc2libGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAxMDAlLCAxMDAlLCAwLjMzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU2xpZGVOYXZJdGVtID4gYnV0dG9uID4gc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuMjUpO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLlNsaWRlTmF2SXRlbSA+IGJ1dHRvblthcmlhLWN1cnJlbnQ9XCJ0cnVlXCJdID4gc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNzUpO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250cm9scyhwcm9wcykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250cm9sc1wiIHsuLi5wcm9wc30gLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBJY29uQnV0dG9uKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cIkljb25CdXR0b25cIiAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkljb25CdXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC41KTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5JY29uQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICAgICAgICAgIGNvbG9yOiBoc2xhKDAsIDEwMCUsIDEwMCUsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4zMyk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoeyBhbmltYXRlLCB0aW1lIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIG51bGwgfVxuICBsZXQgcHJvZ3Jlc3MgPSB1c2VQcm9ncmVzcyhhbmltYXRlLCB0aW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZ3Jlc3NCYXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzICogMTAwfSVgIH19XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLlByb2dyZXNzQmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZ3Jlc3NCYXIgPiBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTAwJSwgMTAwJSwgMC4yNSk7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxBcHAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiTkVYVFwiOlxuICAgICAgICBjYXNlIFwiUFJPR1JFU1NcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGFjdGlvbi50eXBlID09PSBcIlBST0dSRVNTXCIsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6XG4gICAgICAgICAgICAgIChzdGF0ZS5jdXJyZW50SW5kZXggKyAxKSAlXG4gICAgICAgICAgICAgIHNsaWRlcy5sZW5ndGhcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUEFVU0VcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIlBMQVlcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc1BsYXlpbmc6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiUFJFVlwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDpcbiAgICAgICAgICAgICAgKHN0YXRlLmN1cnJlbnRJbmRleCAtXG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgc2xpZGVzLmxlbmd0aCkgJVxuICAgICAgICAgICAgICBzbGlkZXMubGVuZ3RoLFxuICAgICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJHT1RPXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdGFrZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiVU5TRVRfRk9DVVNcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0YWtlRm9jdXM6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgdGFrZUZvY3VzOiBmYWxzZVxuICAgIH1cbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmlzUGxheWluZykge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUk9HUkVTU1wiIH0pO1xuICAgICAgICB9LCBTTElERV9EVVJBVElPTik7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RhdGUuY3VycmVudEluZGV4LCBzdGF0ZS5pc1BsYXlpbmddXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50YWtlRm9jdXMpIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUX0ZPQ1VTXCIgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RhdGUudGFrZUZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsIGFyaWEtbGFiZWw9XCJJbWFnZXMgZnJvbSBTcGFjZVwiPlxuICAgICAgPFNsaWRlcz5cbiAgICAgICAge3NsaWRlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTbGlkZVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtgaW1hZ2UtJHtpbmRleH1gfVxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlLmltZ31cbiAgICAgICAgICAgIHRpdGxlPXtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIHRha2VGb2N1cz17c3RhdGUudGFrZUZvY3VzfVxuICAgICAgICAgICAgY2hpbGRyZW49e2ltYWdlLmNvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcz5cblxuICAgICAgPFNsaWRlTmF2PlxuICAgICAgICB7c2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNsaWRlTmF2SXRlbVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTbGlkZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiR09UT1wiLCBpbmRleCB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlTmF2PlxuXG4gICAgICA8Q29udHJvbHM+XG4gICAgICAgIHtzdGF0ZS5pc1BsYXlpbmcgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXVzZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQQVVTRVwiIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXs8RmFQYXVzZSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGxheVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQTEFZXCIgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hpbGRyZW49ezxGYVBsYXkgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgU2xpZGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUkVWXCIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17PEZhQmFja3dhcmQgLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgU2xpZGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJORVhUXCIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17PEZhRm9yd2FyZCAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udHJvbHM+XG5cbiAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICBrZXk9e3N0YXRlLmN1cnJlbnRJbmRleCArIHN0YXRlLmlzUGxheWluZ31cbiAgICAgICAgdGltZT17U0xJREVfRFVSQVRJT059XG4gICAgICAgIGFuaW1hdGU9e3N0YXRlLmlzUGxheWluZ31cbiAgICAgIC8+XG5cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/CarouselApp.js */",
    __self: this
  }));
}

function CarouselApp() {
  if (typeof window == 'undefined') {
    return null;
  }

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "NEXT":
      case "PROGRESS":
        return _objectSpread({}, state, {
          isPlaying: action.type === "PROGRESS",
          currentIndex: (state.currentIndex + 1) % _whatevs_slides__WEBPACK_IMPORTED_MODULE_3__["default"].length
        });

      case "PAUSE":
        return _objectSpread({}, state, {
          isPlaying: false
        });

      case "PLAY":
        return _objectSpread({}, state, {
          isPlaying: true
        });

      case "PREV":
        return _objectSpread({}, state, {
          currentIndex: (state.currentIndex - 1 + _whatevs_slides__WEBPACK_IMPORTED_MODULE_3__["default"].length) % _whatevs_slides__WEBPACK_IMPORTED_MODULE_3__["default"].length,
          isPlaying: false
        });

      case "GOTO":
        return _objectSpread({}, state, {
          takeFocus: true,
          currentIndex: action.index
        });

      case "UNSET_FOCUS":
        return _objectSpread({}, state, {
          takeFocus: false
        });

      default:
        return state;
    }
  }, {
    currentIndex: 0,
    isPlaying: false,
    takeFocus: false
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.isPlaying) {
      var timeout = setTimeout(function () {
        dispatch({
          type: "PROGRESS"
        });
      }, SLIDE_DURATION);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [state.currentIndex, state.isPlaying]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.takeFocus) {
      dispatch({
        type: "UNSET_FOCUS"
      });
    }
  }, [state.takeFocus]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Carousel, {
    "aria-label": "Images from Space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slides, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, _whatevs_slides__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (image, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slide, {
      key: index,
      id: "image-".concat(index),
      image: image.img,
      title: image.title,
      isCurrent: index === state.currentIndex,
      takeFocus: state.takeFocus,
      children: image.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SlideNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, _whatevs_slides__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (slide, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SlideNavItem, {
      key: index,
      isCurrent: index === state.currentIndex,
      "aria-label": "Slide ".concat(index + 1),
      onClick: function onClick() {
        dispatch({
          type: "GOTO",
          index: index
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Controls, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, state.isPlaying ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    "aria-label": "Pause",
    onClick: function onClick() {
      dispatch({
        type: "PAUSE"
      });
    },
    children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPause"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    "aria-label": "Play",
    onClick: function onClick() {
      dispatch({
        type: "PLAY"
      });
    },
    children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlay"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    "aria-label": "Previous Slide",
    onClick: function onClick() {
      dispatch({
        type: "PREV"
      });
    },
    children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBackward"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    "aria-label": "Next Slide",
    onClick: function onClick() {
      dispatch({
        type: "NEXT"
      });
    },
    children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaForward"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProgressBar, {
    key: state.currentIndex + state.isPlaying,
    time: SLIDE_DURATION,
    animate: state.isPlaying,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/carousel/useProgress.js":
/*!***************************************!*\
  !*** ./pages/carousel/useProgress.js ***!
  \***************************************/
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



var useProgress = function useProgress(animate, time) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (animate) {
      var rafId = null;
      var start = null;

      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        setProgress(progress);

        if (progress < time) {
          rafId = requestAnimationFrame(step);
        }
      };

      rafId = requestAnimationFrame(step);
      return function () {
        return cancelAnimationFrame(rafId);
      };
    }
  }, [animate, time]);
  return animate ? Math.min(progress / time, time) : 0;
};

/* harmony default export */ __webpack_exports__["default"] = (useProgress);

/***/ }),

/***/ "./pages/carousel/whatevs/slides.js":
/*!******************************************!*\
  !*** ./pages/carousel/whatevs/slides.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/carousel/whatevs/slides.js";

/* harmony default export */ __webpack_exports__["default"] = ([{
  img: "https://s3-us-west-2.amazonaws.com/beb-ui/1.jpg",
  title: "Lagoon Nebula (Visible-light View)",
  content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "At the center of the photo, a monster young star 200,000 times brighter than our Sun is blasting powerful ultraviolet radiation and hurricane-like stellar winds, carving out a fantasy landscape of ridges, cavities, and mountains of gas and dust.")
}, {
  img: "https://s3-us-west-2.amazonaws.com/beb-ui/2.jpg",
  title: "Bubble Nebula (NGC 7635)",
  content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "For the 26th birthday of NASA's Hubble Space Telescope, astronomers are highlighting a Hubble image of an enormous bubble being blown into space by a super-hot, massive star. The Hubble image of the Bubble Nebula, or NGC 7635, was chosen to mark the 26th anniversary of the launch of Hubble into Earth orbit by the STS-31 space shuttle crew on April 24, 1990.")
}, {
  img: "https://s3-us-west-2.amazonaws.com/beb-ui/3.jpg",
  title: "Eagle Nebula",
  content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "The Eagle Nebula pillars are bathed in the blistering ultraviolet light from a grouping of young, massive stars located off the top of the image. Streamers of gas can be seen bleeding off the pillars as the intense radiation heats and evaporates it into space. Denser regions of the pillars are shadowing material beneath them from the powerful radiation. Stars are being born deep inside the pillars, which are made of cold hydrogen gas laced with dust. The pillars are part of a small region of the Eagle Nebula, a vast star-forming region 6,500 light-years from Earth.")
}]);

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
/* harmony import */ var _carousel_CarouselApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/CarouselApp */ "./pages/carousel/CarouselApp.js");
/* harmony import */ var _pose_Pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pose/Pose */ "./pages/pose/Pose.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/index.js";




 // <CarouselApp />

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ "./pages/portfolio/components/Home.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Button */ "./pages/portfolio/components/Button.js");
/* harmony import */ var _components_sections_Sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sections/Sections */ "./pages/portfolio/components/sections/Sections.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Contact */ "./pages/portfolio/components/Contact.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js";





function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    start: 100,
    end: 50,
    time: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sections_Sections__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// html, body {
//   height: 100%;
// }
//
// body {
//   display: grid;
//   grid: 100px / 100px;
//   align-content: center;
//   margin: 0;
// }
//
// span {
//   border-radius: 50%;
//   background: turquoise;
//   will-change: transform;
// }
// const getProgress = ({elapsed, total}) =>
//   Math.min(elapsed / total, 1);
//
// const easeOut = progress =>
//   Math.pow(--progress, 5) + 1;
//
// const element = document.querySelector("span");
// const finalPosition = 600;
//
// const time = {
//   start: performance.now(),
//   total: 2000
// };
//
// const tick = now => {
//   time.elapsed = now - time.start;
//   const progress = getProgress(time);
//   const easing = easeOut(progress);
//   const position = easing * finalPosition;
//   element.style.transform = `translate(${position}px)`;
//   if (progress < 1) requestAnimationFrame(tick);
// };
// requestAnimationFrame(tick);


var useProgress = function useProgress(start, end, duration) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(start),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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

function Button() {
  var position = useProgress(0, 50, 1000);
  console.log(position);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: "".concat(position * .03)
    },
    className: "jsx-3671427441" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      right: "".concat(position, "%")
    },
    className: "jsx-3671427441" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3671427441" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3671427441" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3671427441",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{position:absolute;top:-40px;right:-100px;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.arrow{padding-top:12px;color:rgba(20,20,20,1);font-size:48px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helveitica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RnlCLEFBR3NCLEFBTVUsQUFHSCxBQUthLEFBT2QsV0FwQkMsTUFxQkssQ0FaZCxVQUNHLENBVEssRUFhTixTQVFJLENBWGpCLENBSWMsSUFiRyxJQUlqQixJQVVvQixDQU9LLE1BcEJ6QixXQWNvQixrQkFDcEIsaURBTXlCLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodG1sLCBib2R5IHtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLy9cbi8vIGJvZHkge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkOiAxMDBweCAvIDEwMHB4O1xuLy8gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4vLyAgIG1hcmdpbjogMDtcbi8vIH1cbi8vXG4vLyBzcGFuIHtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7XG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4vLyB9XG5cbi8vIGNvbnN0IGdldFByb2dyZXNzID0gKHtlbGFwc2VkLCB0b3RhbH0pID0+XG4vLyAgIE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4vL1xuLy8gY29uc3QgZWFzZU91dCA9IHByb2dyZXNzID0+XG4vLyAgIE1hdGgucG93KC0tcHJvZ3Jlc3MsIDUpICsgMTtcbi8vXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4vLyBjb25zdCBmaW5hbFBvc2l0aW9uID0gNjAwO1xuLy9cbi8vIGNvbnN0IHRpbWUgPSB7XG4vLyAgIHN0YXJ0OiBwZXJmb3JtYW5jZS5ub3coKSxcbi8vICAgdG90YWw6IDIwMDBcbi8vIH07XG4vL1xuLy8gY29uc3QgdGljayA9IG5vdyA9PiB7XG4vLyAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4vLyAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModGltZSk7XG4vLyAgIGNvbnN0IGVhc2luZyA9IGVhc2VPdXQocHJvZ3Jlc3MpO1xuLy8gICBjb25zdCBwb3NpdGlvbiA9IGVhc2luZyAqIGZpbmFsUG9zaXRpb247XG4vLyAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9ufXB4KWA7XG4vLyAgIGlmIChwcm9ncmVzcyA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbi8vIH07XG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmxldCB1c2VQcm9ncmVzcyA9IChzdGFydCxlbmQsZHVyYXRpb24pID0+IHtcbiAgbGV0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoc3RhcnQpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRQcm9ncmVzcyA9ICh7ZWxhcHNlZCwgdG90YWx9KSA9PiBNYXRoLm1pbihlbGFwc2VkIC8gdG90YWwsIDEpO1xuICAgICAgY29uc3QgZWFzZU91dCA9IHByb2dyZXNzID0+IE1hdGgucG93KC0tcHJvZ3Jlc3MsIDUpICsgMTtcbiAgICAgIGNvbnN0IHRpbWUgPSB7XG4gICAgICAgIHN0YXJ0OiBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdG90YWw6IGR1cmF0aW9uXG4gICAgICB9O1xuICAgICAgY29uc3QgZmluYWxQb3NpdGlvbiA9IDQ3LjU7XG4gICAgICBsZXQgcmFmSWQgPSBudWxsO1xuXG4gICAgICBjb25zdCBzdGVwID0gbm93ID0+IHtcbiAgICAgICAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4gICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzKHRpbWUpO1xuICAgICAgICAgY29uc3QgZWFzaW5nID0gZWFzZU91dChwcm9ncmVzcyk7XG4gICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGVhc2luZyAqIGZpbmFsUG9zaXRpb247XG4gICAgICAgICAvL2VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9ufXB4KWA7XG4gICAgICAvLyBsZXQgc3RlcCA9IHRpbWVzdGFtcCA9PiB7XG4gICAgICAvLyAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xuICAgICAgLy8gICBsZXQgcHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgICAgc2V0UHJvZ3Jlc3MocG9zaXRpb24qMTAwMCk7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkKTtcbiAgICB9LFxuICAgIFtzdGFydCxlbmQsZHVyYXRpb25dXG4gICk7XG5cbiAgcmV0dXJuIE1hdGgubWluKHByb2dyZXNzIC8gZHVyYXRpb24sIGR1cmF0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uICgpIHtcbiAgbGV0IHBvc2l0aW9uID0gdXNlUHJvZ3Jlc3MoMCw1MCwxMDAwKTtcbiAgY29uc29sZS5sb2cocG9zaXRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWNvbnRhaW5lcicgc3R5bGU9e3sgb3BhY2l0eTogYCR7cG9zaXRpb24qLjAzfWAgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBzdHlsZT17eyByaWdodDogYCR7cG9zaXRpb259JWAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb3duLWFycm93Jz4mIzcwOTs8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTU1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5yZW1vdmUtdW5kZXJsaW5lIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDotNDBweDtcbiAgICAgICAgICByaWdodDotMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYXJyb3cge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmVpdGljYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
  }, "Front End/UI Developer from San Diego"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2201009381",
    css: ".home{text-align:center;z-index:-10;background:rgba(20,20,20,1);color:rgba(255,255,255,.9);height:500px;}.name{color:rgba(123,189,212,1);font-weight:200;}.cat-container{margin:auto;padding-top:80px;}.cat{width:200px;}.headline{font-size:26px;margin-top:10px;}.sub-headline{color:rgba(255,255,255,0.8);font-size:17px;margin-top:-10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3lCLEFBRzZCLEFBT1EsQUFJZCxBQUlBLEFBR0csQUFJYSxZQVZaLEFBSWxCLEdBR2tCLEdBbEJMLFFBT0ssRUFlRCxDQVZqQixDQVg4QixDQWtCOUIsV0FYQSxDQWVtQixlQXJCVSxFQXNCN0IseUJBckJlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXQtY29udGFpbmVyJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2NhdCcgc3JjPSdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2JlYi11aS9raXR0ZW5fZ3JlZW4ucG5nJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkbGluZSc+XG4gICAgICAgIEhpISBJJ21cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYW1lJz4gQnJpYW4gRS4gQmlsbDwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdzdWItaGVhZGxpbmUnPkZyb250IEVuZC9VSSBEZXZlbG9wZXIgZnJvbSBTYW4gRGllZ288L2g0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmhvbWUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4Oi0xMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KTtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgxMjMsMTg5LDIxMiwxKTtcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXQtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgcGFkZGluZy10b3A6ODBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2F0IHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWhlYWRsaW5lIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Home.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/sections/One.js":
/*!****************************************************!*\
  !*** ./pages/portfolio/components/sections/One.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return One; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/One.js";


function One() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3729576069" + " " + 'one',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3729576069" + " " + 'one-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3729576069" + " " + 'one-background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3729576069",
    css: ".one{margin-top:-25px;}.one-container{height:600px;}.one-background{background-image:linear-gradient(to bottom right,rgba(53,133,156,1),rgba(123,189,212,1));height:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL09uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFReUIsQUFHNEIsQUFHSixBQUc4RSxhQUY3RixJQUhBLHdFQU1lLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvc2VjdGlvbnMvT25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25lICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb25lJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvbmUtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J29uZS1iYWNrZ3JvdW5kJz5cbiAgICAgICAgICBIZXJlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAub25lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgfVxuICAgICAgICAub25lLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgfVxuICAgICAgICAub25lLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoNTMsMTMzLDE1NiwxKSwgcmdiYSgxMjMsMTg5LDIxMiwxKSk7XG4gICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/One.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/sections/Sections.js":
/*!*********************************************************!*\
  !*** ./pages/portfolio/components/sections/Sections.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sections; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _One__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./One */ "./pages/portfolio/components/sections/One.js");
/* harmony import */ var _Two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Two */ "./pages/portfolio/components/sections/Two.js");
/* harmony import */ var _Three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Three */ "./pages/portfolio/components/sections/Three.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Sections.js";





function Sections() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "sections",
    className: "jsx-3303864230" + " " + 'sections',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_One__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Two__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Three__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3303864230",
    css: ".sections{height:500px;width:100%;margin-top:-18px;z-index:5;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV5QixBQUd3QixhQUNGLFdBQ00saUJBQ1AsVUFDUSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT25lIGZyb20gJy4vT25lJ1xuaW1wb3J0IFR3byBmcm9tICcuL1R3bydcbmltcG9ydCBUaHJlZSBmcm9tICcuL1RocmVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9ucyAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nc2VjdGlvbnMnIGNsYXNzTmFtZT0nc2VjdGlvbnMnPlxuICAgICAgPE9uZSAvPlxuICAgICAgPFR3byAvPlxuICAgICAgPFRocmVlIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc2VjdGlvbnMge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Sections.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/sections/Three.js":
/*!******************************************************!*\
  !*** ./pages/portfolio/components/sections/Three.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Three; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Three.js";


function Three() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2048116175" + " " + 'three',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2048116175" + " " + 'three-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2048116175" + " " + 'three-background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2048116175",
    css: ".three-container{height:600px;}.three-background{background-image:linear-gradient(to bottom right,rgba(86,171,47,1),rgba(168,224,99,1));height:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL1RocmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF5QixBQUd3QixBQUc0RSxhQUYzRiwwRUFHZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL1RocmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhyZWUgKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0aHJlZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGhyZWUtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RocmVlLWJhY2tncm91bmQnPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAudGhyZWUtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aHJlZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDg2LDE3MSw0NywxKSwgcmdiYSgxNjgsMjI0LDk5LDEpKTtcbiAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Three.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/sections/Two.js":
/*!****************************************************!*\
  !*** ./pages/portfolio/components/sections/Two.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Two; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Two.js";


function Two() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1279317705" + " " + 'two',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1279317705" + " " + 'two-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1279317705" + " " + 'two-background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1279317705",
    css: ".two-container{height:600px;}.two-background{background-image:linear-gradient(to bottom right,#000428,#004e92);height:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL1R3by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFReUIsQUFHd0IsQUFHdUQsYUFGdEUscURBR2UsYUFDZiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9zZWN0aW9ucy9Ud28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUd28gKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0d28nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3R3by1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHdvLWJhY2tncm91bmQnPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnR3by1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnR3by1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDAwNDI4LCAjMDA0ZTkyKTtcbiAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Two.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/pose/Pose.js":
/*!****************************!*\
  !*** ./pages/pose/Pose.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pose; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/pose/Pose.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Box = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.5
  }
});

function Square() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, {
    className: "box",
    pose: hovering ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovering(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3381916768",
    css: ".box{width:100px;height:100px;background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3Bvc2UvUG9zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnlCLEFBR3VCLFlBQ0MsYUFDRSxlQUNqQiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3NlL1Bvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBvc2VkIGZyb20gXCJyZWFjdC1wb3NlXCI7XG5cbmNvbnN0IEJveCA9IHBvc2VkLmRpdih7XG4gIGlkbGU6IHsgc2NhbGU6IDEgfSxcbiAgaG92ZXJlZDogeyBzY2FsZTogMS41IH1cbn0pO1xuXG5mdW5jdGlvbiBTcXVhcmUoKSB7XG4gIGNvbnN0IFtob3ZlcmluZywgc2V0SG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY2xhc3NOYW1lPSdib3gnXG4gICAgICBwb3NlPXtob3ZlcmluZyA/IFwiaG92ZXJlZFwiIDogXCJpZGxlXCJ9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyaW5nKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSl9XG4gICAgPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNxdWFyZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/pose/Pose.js */",
    __self: this
  }));
}

function Pose() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Square, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}

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

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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