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
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./pages/portfolio/components/Home.js");
/* harmony import */ var _components_HomeSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HomeSpacer */ "./pages/portfolio/components/HomeSpacer.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/projects */ "./pages/portfolio/data/projects.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Project */ "./pages/portfolio/components/Project.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Button */ "./pages/portfolio/components/Button.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Header */ "./pages/portfolio/components/Header.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Contact */ "./pages/portfolio/components/Contact.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import useWindowScrollPosition from './hooks/useWindowScrollPosition'









var Portfolio = function Portfolio() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "NEXT":
        return _objectSpread({}, state, {
          currentIndex: (state.currentIndex + 1 + _data_projects__WEBPACK_IMPORTED_MODULE_4__["default"].length) % _data_projects__WEBPACK_IMPORTED_MODULE_4__["default"].length // isPlaying: false

        });

      case "PREV":
        return _objectSpread({}, state, {
          currentIndex: (state.currentIndex - 1 + _data_projects__WEBPACK_IMPORTED_MODULE_4__["default"].length) % _data_projects__WEBPACK_IMPORTED_MODULE_4__["default"].length // isPlaying: false

        });

      default:
        return state;
    }
  }, {
    currentIndex: 0
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "app",
    className: "jsx-1195221473",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HomeSpacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "projects",
    style: {
      "height": "640px",
      "zIndex": "1",
      "background": "rgba(255,255,255,1)",
      "position": "relative"
    },
    className: "jsx-1195221473",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    top: "-45px",
    action: function action() {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), _data_projects__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (project, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      id: "project-".concat(index),
      bg: project.bg,
      img: project.img,
      description: project.description,
      isCurrent: index === state.currentIndex,
      ariaHidden: (index != state.currentIndex).toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
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
    className: "jsx-1195221473" + " " + 'nav-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    opacity: ".8",
    icon: "\u02C2",
    scaleH: 1,
    scaleV: 1.25,
    klass: "left-arrow",
    top: "90px",
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
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    opacity: ".8",
    icon: "\u02C5",
    scaleH: 1.25,
    scaleV: 1,
    klass: "down-arrow",
    top: "280px",
    action: function action() {
      window.scrollTo({
        top: 1050,
        left: 0,
        behavior: 'smooth'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1195221473",
    css: "#app{position:absolute;overflow:hidden;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0p5QixBQUc2QixrQkFDRixnQkFDTixXQUNaIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9Qb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmXG59IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHVzZVdpbmRvd1Njcm9sbFBvc2l0aW9uIGZyb20gJy4vaG9va3MvdXNlV2luZG93U2Nyb2xsUG9zaXRpb24nXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgSG9tZVNwYWNlciBmcm9tICcuL2NvbXBvbmVudHMvSG9tZVNwYWNlcic7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdCc7XG5cbmNvbnN0IFBvcnRmb2xpbyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJORVhUXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAoc3RhdGUuY3VycmVudEluZGV4ICsgMSArIHByb2plY3RzLmxlbmd0aCkgJSBwcm9qZWN0cy5sZW5ndGgsXG4gICAgICAgICAgICAvLyBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjYXNlIFwiUFJFVlwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogKHN0YXRlLmN1cnJlbnRJbmRleCAtIDEgKyBwcm9qZWN0cy5sZW5ndGgpICUgcHJvamVjdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAvLyBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICB9XG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcblxuICAgIH0sIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgPEhlYWRlci8+XG4gICAgICA8SG9tZS8+XG4gICAgICA8SG9tZVNwYWNlci8+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0ncHJvamVjdHMnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJoZWlnaHRcIiA6IFwiNjQwcHhcIixcbiAgICAgICAgICBcInpJbmRleFwiOiBcIjFcIixcbiAgICAgICAgICBcImJhY2tncm91bmRcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9wYWNpdHk9ezF9XG4gICAgICAgICAgaWQ9J2J1dHRvbidcbiAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICBlbmQ9ezUwfVxuICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxuICAgICAgICAgIGljb249JyYjNzA5OydcbiAgICAgICAgICBzY2FsZUg9ezEuMjV9XG4gICAgICAgICAgc2NhbGVWPXsxfVxuICAgICAgICAgIGtsYXNzPSdkb3duLWFycm93J1xuICAgICAgICAgIHBvc2l0aW9uPSdhYnNvbHV0ZSdcbiAgICAgICAgICBsZWZ0PSc0OC41JSdcbiAgICAgICAgICB6SW5kZXg9ezV9XG4gICAgICAgICAgdG9wPVwiLTQ1cHhcIlxuICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvamVjdFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XG4gICAgICAgICAgICBiZz17cHJvamVjdC5iZ31cbiAgICAgICAgICAgIGltZz17cHJvamVjdC5pbWd9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGlzQ3VycmVudD17aW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleH1cbiAgICAgICAgICAgIGFyaWFIaWRkZW49eyhpbmRleCAhPSBzdGF0ZS5jdXJyZW50SW5kZXgpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcidcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgXCJ6SW5kZXhcIiA6IFwiNVwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBcInJpZ2h0XCI6IFwiNzVweFwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogXCIxMjBweFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgICAgICBpY29uPScmIzcwNjsnXG4gICAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgICAgICBrbGFzcz0nbGVmdC1hcnJvdydcbiAgICAgICAgICAgIHRvcD0nOTBweCdcbiAgICAgICAgICAgIGFjdGlvbj17KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUFJFVlwiIH0pO1xuICAgICAgICAgICAgICAgIC8vZ2V0IGluZGV4XG4gICAgICAgICAgICAgICAgLy9wb3NpdGlvbiBwcmV2aW91cyBwcm9qZWN0IChpbmRleC0xIHVubGVzcyBpbmRleCA9PT0gMCkgdG8gbGVmdFxuICAgICAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBwb3NpdGlvbiBiZXR3ZWVuIGN1cnJlbnQgcHJvamVjdCBhbmQgcHJldmlvdXNcbiAgICAgICAgICAgICAgICAvL3RyYW5zaXRpb24gYmcgY29sb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgICAgICBpY29uPScmIzcwNzsnXG4gICAgICAgICAgICBzY2FsZUg9ezF9XG4gICAgICAgICAgICBzY2FsZVY9ezEuMjV9XG4gICAgICAgICAgICBrbGFzcz0ncmlnaHQtYXJyb3cnXG4gICAgICAgICAgICB0b3A9JzI1cHgnXG4gICAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk5FWFRcIiB9KTtcbiAgICAgICAgICAgICAgICAvL2dldCBpbmRleFxuICAgICAgICAgICAgICAgIC8vcG9zaXRpb24gbmV4dCBwcm9qZWN0IHRvIHJpZ2h0XG4gICAgICAgICAgICAgICAgLy90cmFuc2l0aW9uIHBvc2l0aW9uIGJldHdlZW4gY3VycmVudCBwcm9qZWN0IGFuZCBuZXh0XG4gICAgICAgICAgICAgICAgLy90cmFuc2l0aW9uIGJnIGNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9wYWNpdHk9XCIuOFwiXG4gICAgICAgICAgICBpY29uPScmIzcwOTsnXG4gICAgICAgICAgICBzY2FsZUg9ezEuMjV9XG4gICAgICAgICAgICBzY2FsZVY9ezF9XG4gICAgICAgICAgICBrbGFzcz0nZG93bi1hcnJvdydcbiAgICAgICAgICAgIHRvcD0nMjgwcHgnXG4gICAgICAgICAgICBhY3Rpb249eygoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgIHRvcDogMTA1MCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q29udGFjdCAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI2FwcCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/Portfolio.js */",
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "./pages/portfolio/components/Circle.js");
/* harmony import */ var _hooks_useProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useProgress */ "./pages/portfolio/hooks/useProgress.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ButtonWrapper = react_pose__WEBPACK_IMPORTED_MODULE_3___default.a.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.01
  },
  pressable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.99
  }
});

var Button = function Button(props) {
  // console.log(props)
  // let position = useProgress(props.start,props.end,props.duration)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
    className: "button-wrapper",
    style: {
      "opacity": props.opacity,
      "zIndex": props.zIndex,
      "cursor": "pointer"
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button",
    style: {
      opacity: props.opacity,
      position: 'absolute',
      bottom: props.bottom,
      left: props.left,
      top: props.top,
      marginTop: props.marginTop
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))));
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
    className: "jsx-3678573002" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "transform": "scale(".concat(h, ",").concat(v, ")")
    },
    className: "jsx-3678573002" + " " + (props.klass || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3678573002" + " " + 'noselect',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.icon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3678573002",
    css: ".circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}.circle:hover{box-shadow:0 2px 5px rgba(33,33,33,1);}.down-arrow{padding-top:13px;padding-left:1px;color:rgba(20,20,20,1);font-size:30px;font-family:helvetica;}.right-arrow{padding-top:11px;padding-left:4px;color:rgba(20,20,20,1);font-size:30px;font-family:helvetica;clear:both;}.left-arrow{padding-top:11px;margin-left:-4px;color:rgba(20,20,20,1);font-size:30px;font-family:helvetica;clear:both;}.up-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;font-family:helvetica;}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHMEMsQUFTTyxBQUdyQixBQU9BLEFBUUEsQUFRSixBQU1jLGFBTEosSUF2Qk4sQUFPQSxBQVFBLFVBY1EsSUF6Q2QsR0FhWSxBQU9BLEFBUUEsRUFRUixFQTNCakIsSUFSYyxTQW9DVSxDQUtFLEVBeENOLEdBWUgsQUFPQSxBQVFBLGVBMUJHLEFBWUksQUFPQSxBQVFBLENBUXhCLEdBS3dCLGNBdkNJLElBWTVCLEFBT2EsQUFRQSxJQWFVLE9BcEJ2QixBQVFBLGNBYW1CLCtCQXhDTyxzREF5QzFCLEVBeENBIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmNsZShwcm9wcykge1xuICBsZXQgaCA9IHByb3BzLnNjYWxlSDtcbiAgbGV0IHYgPSBwcm9wcy5zY2FsZVY7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZSc+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMua2xhc3N9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJ0cmFuc2Zvcm1cIiA6IGBzY2FsZSgke2h9LCR7dn0pYCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdub3NlbGVjdCc+e3Byb3BzLmljb259PC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgzMywzMywzMywxKTtcbiAgICAgICAgfVxuICAgICAgICAuZG93bi1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEzcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LWFycm93IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIH1cbiAgICAgICAgLnVwLWFycm93IHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICB9XG4gICAgICAgIC5ub3NlbGVjdCB7XG4gICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Circle.js */",
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
    style: {
      "zIndex": 3,
      "backgroundColor": "rgba(0,0,0,1)",
      "position": "relative",
      "marginTop": "-20px",
      "paddingTop": "170px",
      "textAlign": "center"
    },
    className: "jsx-1431666204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1431666204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Contact Brian"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      "marginTop": "-15px"
    },
    className: "jsx-1431666204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Full Stack Engineer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1431666204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "310-490-2250"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1431666204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "lumeo@me.com"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-1431666204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Download resum\xE9"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1431666204",
    css: "#contact{height:500px;width:100%;color:rgba(255,255,255,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J5QixBQUd3QixhQUNGLFdBQ2UsMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0ICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD0nY29udGFjdCdcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIFwiekluZGV4XCIgOiAzLFxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMSlcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiLTIwcHhcIixcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IFwiMTcwcHhcIixcbiAgICAgICAgXCJ0ZXh0QWxpZ25cIiA6IFwiY2VudGVyXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgyPkNvbnRhY3QgQnJpYW48L2gyPlxuICAgICAgPGgzXG4gICAgICAgIHN0eWxlPXt7IFwibWFyZ2luVG9wXCI6IFwiLTE1cHhcIn19XG4gICAgICA+XG4gICAgICAgIEZ1bGwgU3RhY2sgRW5naW5lZXJcbiAgICAgIDwvaDM+XG4gICAgICA8cD4zMTAtNDkwLTIyNTA8L3A+XG4gICAgICA8cD5sdW1lb0BtZS5jb208L3A+XG4gICAgICA8YSBocmVmPVwiI1wiPkRvd25sb2FkIHJlc3Vtw6k8L2E+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjY29udGFjdCB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Contact.js */",
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
/* harmony import */ var _links_Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links/Github */ "./pages/portfolio/components/links/Github.js");
/* harmony import */ var _links_LinkedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links/LinkedIn */ "./pages/portfolio/components/links/LinkedIn.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Header.js";




function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "nav",
    style: {
      "top": "0px",
      "box-shadow": "rgba(0,0,0,.24) 0px 2px 6px 0px"
    },
    className: "jsx-1911702393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "logo",
    href: "#home",
    className: "jsx-1911702393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://s3-us-west-2.amazonaws.com/beb-ui/helmet.gif",
    style: {
      "width": "100%",
      "height": "100%"
    },
    className: "jsx-1911702393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1911702393" + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.github.com",
    className: "jsx-1911702393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_links_Github__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com",
    className: "jsx-1911702393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_links_LinkedIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1911702393",
    css: "#nav{display:block;position:fixed;height:70px;z-index:7;width:100%;clear:both;background:#212121;}#logo{height:40px;width:40px;display:block;position:absolute;left:20px;padding:15px;}.links{float:right;padding-right:40px;padding-top:10px;height:35px;width:250px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnlCLEFBR3lCLEFBU0YsQUFRQSxZQVBELEFBUVEsRUFqQkosU0FVRCxNQVRGLEVBaUJLLE1BUEMsSUFUUixPQWlCRSxHQWhCRCxJQVNELEtBUUUsRUFoQkQsR0FTRSxPQVFmLENBaEJxQixLQVNyQixjQVJBIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHaXRodWIgZnJvbSAnLi9saW5rcy9HaXRodWInO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJy4vbGlua3MvTGlua2VkSW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIgKCkge1xuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGlkPSduYXYnXG4gICAgICBzdHlsZT17e1xuICAgICAgICBcInRvcFwiOiBcIjBweFwiLFxuICAgICAgICBcImJveC1zaGFkb3dcIiA6IFwicmdiYSgwLDAsMCwuMjQpIDBweCAycHggNnB4IDBweFwiXG4gICAgICB9fVxuICAgID5cbiAgICA8YSBpZD1cImxvZ29cIiBocmVmPVwiI2hvbWVcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9iZWItdWkvaGVsbWV0LmdpZlwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCJ3aWR0aFwiIDogXCIxMDAlXCIsXG4gICAgICAgICAgXCJoZWlnaHRcIiA6IFwiMTAwJVwiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvYT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb21cIj48R2l0aHViIC8+PC9hPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbVwiPjxMaW5rZWRJbiAvPjwvYT5cbiAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgei1pbmRleDogNztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICAgICAgICB9XG4gICAgICAgICNsb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Header.js */",
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
/* harmony import */ var _Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rocket */ "./pages/portfolio/components/Rocket.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Home.js";


 // <img className='cat' src='https://s3-us-west-2.amazonaws.com/beb-ui/kitten_green.png' />

function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "home",
    style: {
      "height": "570px"
    },
    className: "jsx-3341029135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "top": "171px"
    },
    className: "jsx-3341029135" + " " + 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Rocket__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3341029135" + " " + 'headline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Hi! I'm", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3341029135" + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " Brian E. Bill")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3341029135" + " " + 'sub-headline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Technophile \u2022\u2022 Science Fiction Geek")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3341029135",
    css: "#home{position:fixed;text-align:center;z-index:0;background:rgba(20,20,20,1);color:rgba(255,255,255,.9);width:100%;}.name{color:#6694BD;font-weight:200;}.text{margin:auto;position:absolute;width:100%;}.cat{width:200px;}.headline{font-size:26px;margin-top:20px;}.sub-headline{color:#3271A7;font-size:15.78px;margin-top:-17px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J5QixBQUcwQixBQVFELEFBSUYsQUFLQSxBQUdHLEFBSUQsWUFYSSxBQUtwQixFQVRrQixBQWdCRSxDQXhCQSxBQW9CRixlQVhsQixBQUlhLENBUWIsQ0FJbUIsQ0F4QlIsUUFhWCxFQVo4QixNQXdCOUIsc0JBdkI2QiwyQkFDaEIsV0FDYiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvY2tldCBmcm9tICcuL1JvY2tldCc7XG5cbi8vIDxpbWcgY2xhc3NOYW1lPSdjYXQnIHNyYz0naHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9iZWItdWkva2l0dGVuX2dyZWVuLnBuZycgLz5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J2hvbWUnXG4gICAgICBzdHlsZT17eyBcImhlaWdodFwiOiBcIjU3MHB4XCIgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0ndGV4dCdcbiAgICAgICAgc3R5bGU9e3sgXCJ0b3BcIiA6IFwiMTcxcHhcIn19XG4gICAgICA+XG4gICAgICAgIDxSb2NrZXQgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0naGVhZGxpbmUnPlxuICAgICAgICAgIEhpISBJJ21cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hbWUnPiBCcmlhbiBFLiBCaWxsPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPSdzdWItaGVhZGxpbmUnPlRlY2hub3BoaWxlIOKAouKAoiBTY2llbmNlIEZpY3Rpb24gR2VlazwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNob21lIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHotaW5kZXg6MDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgY29sb3I6ICM2Njk0QkQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2F0IHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWhlYWRsaW5lIHtcbiAgICAgICAgICBjb2xvcjogIzMyNzFBNztcbiAgICAgICAgICBmb250LXNpemU6IDE1Ljc4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Home.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./pages/portfolio/components/HomeSpacer.js":
/*!**************************************************!*\
  !*** ./pages/portfolio/components/HomeSpacer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/HomeSpacer.js";



function HomeSpacer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "home-spacer",
    style: {
      "height": "500px"
    },
    className: "jsx-105545318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "105545318",
    css: "#home-spacer{position:relative;overflow:hidden;z-index:1;max-width:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0hvbWVTcGFjZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTXlCLEFBRzZCLGtCQUNGLGdCQUNOLFVBQ0ksY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvSG9tZVNwYWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhvbWVTcGFjZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImhvbWUtc3BhY2VyXCJcbiAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCIgOiBcIjUwMHB4XCIgfX1cbiAgICA+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjaG9tZS1zcGFjZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lU3BhY2VyXG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/HomeSpacer.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeSpacer);

/***/ }),

/***/ "./pages/portfolio/components/Project.js":
/*!***********************************************!*\
  !*** ./pages/portfolio/components/Project.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Project.js";



//import { useState, useEffect } from "react";
var Project = function Project(_ref) {
  var isCurrent = _ref.isCurrent,
      img = _ref.img,
      bg = _ref.bg,
      description = _ref.description,
      id = _ref.id;

  if (isCurrent) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "holder",
      style: {
        "height": "520px",
        "boxShadow": "rgba(0,0,0,.24) 0px 2px 6px 0px",
        "background": bg,
        "overflow": "visible",
        "opacity": isCurrent ? 1 : 0,
        "zIndex": isCurrent ? 1 : -1,
        "width": "100%"
      },
      className: "jsx-3100604222",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: id,
      style: {
        "width": '100%',
        "top": 0,
        "left": 0,
        "zIndex": '0'
      },
      className: "jsx-3100604222" + " " + 'project',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3100604222" + " " + 'project-description',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3100604222" + " " + 'project-description-text',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3100604222",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, description))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3100604222" + " " + 'project-image-container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: img,
      style: {
        "height": "100%"
      },
      className: "jsx-3100604222" + " " + 'project-image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3100604222",
      css: "{.project-image display:block;vertical-align:middle;border:0;}.project{height:640px;overflow:hidden;-webkit-transition:opacity 1s;transition:opacity 1s;}.project-description{width:40%;height:640px;color:rgba(255,255,255,.65);position:absolute;left:0;}.project-description-text{top:166px;padding-left:20%;padding-right:5%;position:absolute;width:100%;}.project-image-container{width:60%;position:absolute;left:40%;height:640px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0MyQixBQUcwQixBQUtILEFBT0EsQUFPQSxBQU1JLFVBbkJELEFBT0ksQUFPQyxHQW5CRixVQU1ZLElBT1gsQ0FPUixDQW5CYSxBQXdCQSxRQUpULE9BUEssTUFRcEIsQ0Fmb0IsQUFtQlQsU0FFYixFQWJlLE9BUEosSUFRVCxHQVBBLEtBUEEiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24oe1xuICBpc0N1cnJlbnQsXG4gIGltZyxcbiAgYmcsXG4gIGRlc2NyaXB0aW9uLFxuICBpZFxufSkge1xuICBpZiAoaXNDdXJyZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9J2hvbGRlcidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcImhlaWdodFwiIDogXCI1MjBweFwiLFxuICAgICAgICAgIFwiYm94U2hhZG93XCIgOiBcInJnYmEoMCwwLDAsLjI0KSAwcHggMnB4IDZweCAwcHhcIixcbiAgICAgICAgICBcImJhY2tncm91bmRcIiA6IGJnLFxuICAgICAgICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgXCJvcGFjaXR5XCIgOiBpc0N1cnJlbnQgPyAxIDogMCxcbiAgICAgICAgICBcInpJbmRleFwiIDogaXNDdXJyZW50ID8gMSA6IC0xLFxuICAgICAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3QnXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcIndpZHRoXCIgOiAnMTAwJScsXG4gICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAnMCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyaXB0aW9uLXRleHQnPlxuICAgICAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1pbWFnZS1jb250YWluZXInPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3QtaW1hZ2UnXG4gICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICBzdHlsZT17eyBcImhlaWdodFwiIDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42NSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHRvcDogMTY2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtaW1hZ2VcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Project.js */",
      __self: this
    }));
  } else {
    return false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./pages/portfolio/components/Rocket.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Rocket.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Rocket.js";



var Rocket = function Rocket() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // a few helper functions...
    // for creating the inner elements of an SVG, https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
    var createSVGElement = function createSVGElement(s) {
      return document.createElementNS("http://www.w3.org/2000/svg", s);
    }; // alias the querySelector


    var $ = function $(s) {
      return document.querySelector(s);
    }; // used to easily give a number between x and y


    var randomRange = function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }; // generate a <circle> element with a random radius and x and y position


    var createCircle = function createCircle() {
      var $circle = createSVGElement("circle");
      $circle.setAttribute("r", randomRange(0.5, 2));
      $circle.setAttribute("fill", "#AAB7C4");
      $circle.setAttribute("cx", randomRange(0, 75));
      $circle.setAttribute("cy", randomRange(0, 75));
      return $circle;
    }; // grab some of the DOM elements needed


    var $rocket = $("#rocket-icon");
    var $top = $rocket.querySelector("*");
    var $flame = $(".flame"); // generate a set of a transforms that randomly scales the width and height
    // of the rocket’s flame

    var flicker = Array.from({
      length: 20
    }).map(function () {
      return {
        transform: "scale(".concat(randomRange(0.9, 1.2), ", ").concat(randomRange(0.9, 1.2), ")")
      };
    });
    $flame.animate(flicker, {
      duration: 750,
      iterations: Infinity
    }); // create and insert the stars (circles) to the SVG

    var $stars = Array.from({
      length: 10
    }).map(function () {
      return createCircle();
    });
    $stars.forEach(function ($star) {
      return $rocket.insertBefore($star, $top);
    }); // animate the stars

    var across = [{
      cx: "75px",
      fillOpacity: 0
    }, {
      fillOpacity: 1
    }, {
      cx: "0",
      fillOpacity: 0
    }];
    $stars.forEach(function ($star) {
      var duration = randomRange(1000, 2000);
      $star.animate(across, {
        duration: duration,
        iterations: Infinity
      });
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "rocket",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    id: "rocket-icon",
    viewBox: "0 0 75 75",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon", {
    fill: "#3271A7",
    points: "18 21 35 21 44 30 27 30",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon", {
    fill: "#3271a7",
    points: "27 45 44 45 35 54 18 54",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#3271a7",
    d: "M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#6694BD",
    d: "M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#3271a7",
    d: "M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#6694BD",
    d: "M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#ECFAFF",
    d: "M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FCFEFF",
    d: "M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "49.5",
    cy: "37.5",
    r: "3.5",
    fill: "#3271a7",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#6694BD",
    d: "M46 37.5h7a3.5 3.5 0 0 0-7 0z",
    className: "jsx-908409071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "orange",
    d: "M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z",
    className: "jsx-908409071" + " " + "flame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "908409071",
    css: "#rocket{height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(20,20,20,1);}#rocket-icon{width:100px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.flame{-webkit-transform-origin:15px 37.5px;-ms-transform-origin:15px 37.5px;transform-origin:15px 37.5px;}a{color:rgb(104,212,248);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL1JvY2tldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXlCLEFBR3dCLEFBUUQsQUFLaUIsQUFJSixZQVJBLENBUlosVUFpQmYsZ0VBaEJxQixZQVFyQixBQUlBLGlGQVh5QixtR0FDVyxrQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvUm9ja2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG59IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSb2NrZXQgPSBmdW5jdGlvbigpIHtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgLy8gYSBmZXcgaGVscGVyIGZ1bmN0aW9ucy4uLlxuICAgICAgLy8gZm9yIGNyZWF0aW5nIHRoZSBpbm5lciBlbGVtZW50cyBvZiBhbiBTVkcsIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9jcmVhdGVFbGVtZW50TlNcbiAgICAgIGNvbnN0IGNyZWF0ZVNWR0VsZW1lbnQgPSBzID0+XG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHMpO1xuXG4gICAgICAvLyBhbGlhcyB0aGUgcXVlcnlTZWxlY3RvclxuICAgICAgY29uc3QgJCA9IHMgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzKTtcblxuICAgICAgLy8gdXNlZCB0byBlYXNpbHkgZ2l2ZSBhIG51bWJlciBiZXR3ZWVuIHggYW5kIHlcbiAgICAgIGNvbnN0IHJhbmRvbVJhbmdlID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbiAgICAgIC8vIGdlbmVyYXRlIGEgPGNpcmNsZT4gZWxlbWVudCB3aXRoIGEgcmFuZG9tIHJhZGl1cyBhbmQgeCBhbmQgeSBwb3NpdGlvblxuICAgICAgY29uc3QgY3JlYXRlQ2lyY2xlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2lyY2xlID0gY3JlYXRlU1ZHRWxlbWVudChcImNpcmNsZVwiKTtcbiAgICAgICAgJGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIHJhbmRvbVJhbmdlKDAuNSwgMikpO1xuICAgICAgICAkY2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjQUFCN0M0XCIpO1xuICAgICAgICAkY2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIHJhbmRvbVJhbmdlKDAsIDc1KSk7XG4gICAgICAgICRjaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgcmFuZG9tUmFuZ2UoMCwgNzUpKTtcbiAgICAgICAgcmV0dXJuICRjaXJjbGU7XG4gICAgICB9O1xuXG4gICAgICAvLyBncmFiIHNvbWUgb2YgdGhlIERPTSBlbGVtZW50cyBuZWVkZWRcbiAgICAgIGNvbnN0ICRyb2NrZXQgPSAkKFwiI3JvY2tldC1pY29uXCIpO1xuICAgICAgY29uc3QgJHRvcCA9ICRyb2NrZXQucXVlcnlTZWxlY3RvcihcIipcIik7XG4gICAgICBjb25zdCAkZmxhbWUgPSAkKFwiLmZsYW1lXCIpO1xuXG4gICAgICAvLyBnZW5lcmF0ZSBhIHNldCBvZiBhIHRyYW5zZm9ybXMgdGhhdCByYW5kb21seSBzY2FsZXMgdGhlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgIC8vIG9mIHRoZSByb2NrZXTigJlzIGZsYW1lXG4gICAgICBjb25zdCBmbGlja2VyID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMjAgfSkubWFwKCgpID0+ICh7XG4gICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7cmFuZG9tUmFuZ2UoMC45LCAxLjIpfSwgJHtyYW5kb21SYW5nZSgwLjksIDEuMil9KWAsXG4gICAgICB9KSk7XG4gICAgICAkZmxhbWUuYW5pbWF0ZShmbGlja2VyLCB7IGR1cmF0aW9uOiA3NTAsIGl0ZXJhdGlvbnM6IEluZmluaXR5IH0pO1xuXG4gICAgICAvLyBjcmVhdGUgYW5kIGluc2VydCB0aGUgc3RhcnMgKGNpcmNsZXMpIHRvIHRoZSBTVkdcbiAgICAgIGNvbnN0ICRzdGFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0pLm1hcCgoKSA9PiBjcmVhdGVDaXJjbGUoKSk7XG4gICAgICAkc3RhcnMuZm9yRWFjaCgkc3RhciA9PlxuICAgICAgICAkcm9ja2V0Lmluc2VydEJlZm9yZSgkc3RhciwgJHRvcClcbiAgICAgICk7XG5cbiAgICAgIC8vIGFuaW1hdGUgdGhlIHN0YXJzXG4gICAgICBjb25zdCBhY3Jvc3MgPSBbXG4gICAgICAgIHsgY3g6IFwiNzVweFwiLCBmaWxsT3BhY2l0eTogMCB9LFxuICAgICAgICB7IGZpbGxPcGFjaXR5OiAxIH0sXG4gICAgICAgIHsgY3g6IFwiMFwiLCBmaWxsT3BhY2l0eTogMCB9LFxuICAgICAgXTtcbiAgICAgICRzdGFycy5mb3JFYWNoKCRzdGFyID0+IHtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSByYW5kb21SYW5nZSgxMDAwLCAyMDAwKTtcbiAgICAgICAgJHN0YXIuYW5pbWF0ZShhY3Jvc3MsIHsgZHVyYXRpb24sIGl0ZXJhdGlvbnM6IEluZmluaXR5IH0pO1xuICAgICAgfSk7XG4gICAgfSwgW11cbiAgKTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicm9ja2V0XCI+XG4gICAgICA8c3ZnIGlkPVwicm9ja2V0LWljb25cIiB2aWV3Qm94PVwiMCAwIDc1IDc1XCI+PHBvbHlnb24gZmlsbD1cIiMzMjcxQTdcIiBwb2ludHM9XCIxOCAyMSAzNSAyMSA0NCAzMCAyNyAzMFwiLz48cG9seWdvbiBmaWxsPVwiIzMyNzFhN1wiIHBvaW50cz1cIjI3IDQ1IDQ0IDQ1IDM1IDU0IDE4IDU0XCIvPjxwYXRoIGZpbGw9XCIjMzI3MWE3XCIgZD1cIk0zMC45NCA0Ny43Yy0zLjc5LS45My02Ljk4LTIuMzUtOS4yNS00LjA3YTE0Ljg4IDE0Ljg4IDAgMCAwIDAtMTIuMjZjMi4yNy0xLjcyIDUuNDYtMy4xNCA5LjI1LTQuMDhBMTQuNzIgMTQuNzIgMCAwIDEgMzUgMzcuNWMwIDMuOTgtMS41NSA3LjU5LTQuMDYgMTAuMnpcIi8+PHBhdGggZmlsbD1cIiM2Njk0QkRcIiBkPVwiTTMwLjk0IDI3LjNjLTMuNzkuOTMtNi45OCAyLjM1LTkuMjUgNC4wNy44NCAxLjg2IDEuMzEgMy45NCAxLjMxIDYuMTNoMTJjMC0zLjk4LTEuNTUtNy41OS00LjA2LTEwLjJ6XCIvPjxwYXRoIGZpbGw9XCIjMzI3MWE3XCIgZD1cIk01Ny4wNiAzMC4xM0M2Mi41IDMzLjEgNjYgMzYuNzMgNjYgMzcuNWMwIC43Ny0zLjQ5IDQuNC04Ljk0IDcuMzdBMTQuODMgMTQuODMgMCAwIDAgNTkgMzcuNWMwLTIuNy0uNy01LjIxLTEuOTQtNy4zN3pcIi8+PHBhdGggZmlsbD1cIiM2Njk0QkRcIiBkPVwiTTU3LjA2IDMwLjEzQzYyLjUgMzMuMSA2NiAzNi43MyA2NiAzNy41aC03YzAtMi43LS43LTUuMjEtMS45NC03LjM3elwiLz48cGF0aCBmaWxsPVwiI0VDRkFGRlwiIGQ9XCJNNTcuMDYgNDQuODdDNTIuOTQgNDcuMTIgNDcuNyA0OSA0MiA0OWMtMy45OSAwLTcuNzUtLjQ3LTExLjA2LTEuM0ExNC43MiAxNC43MiAwIDAgMCAzNSAzNy41YzAtMy45OC0xLjU1LTcuNTktNC4wNi0xMC4yQzM0LjI1IDI2LjQ2IDM4LjAxIDI2IDQyIDI2YzUuNyAwIDEwLjk0IDEuODggMTUuMDYgNC4xM0ExNC44MyAxNC44MyAwIDAgMSA1OSAzNy41YzAgMi43LS43IDUuMjEtMS45NCA3LjM3elwiLz48cGF0aCBmaWxsPVwiI0ZDRkVGRlwiIGQ9XCJNNTcuMDYgMzAuMTNDNTIuOTQgMjcuODggNDcuNyAyNiA0MiAyNmMtMy45OSAwLTcuNzUuNDctMTEuMDYgMS4zQTE0LjcyIDE0LjcyIDAgMCAxIDM1IDM3LjVoMjRjMC0yLjctLjctNS4yMS0xLjk0LTcuMzd6XCIvPjxjaXJjbGUgY3g9XCI0OS41XCIgY3k9XCIzNy41XCIgcj1cIjMuNVwiIGZpbGw9XCIjMzI3MWE3XCIvPjxwYXRoIGZpbGw9XCIjNjY5NEJEXCIgZD1cIk00NiAzNy41aDdhMy41IDMuNSAwIDAgMC03IDB6XCIvPjxwYXRoIGZpbGw9XCJvcmFuZ2VcIiBkPVwiTTIxIDM3LjVjMC0xMC4wNC0xMSAwLTEyIDAgMSAwIDEyIDEwLjA0IDEyIDB6XCIgY2xhc3NOYW1lPVwiZmxhbWVcIi8+PC9zdmc+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNyb2NrZXQge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgIH1cblxuICAgICAgICAjcm9ja2V0LWljb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsYW1lIHtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxNXB4IDM3LjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiByZ2IoMTA0LCAyMTIsIDI0OCk7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldFxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Rocket.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Rocket);

/***/ }),

/***/ "./pages/portfolio/components/links/Github.js":
/*!****************************************************!*\
  !*** ./pages/portfolio/components/links/Github.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/links/Github.js";



var Github = function Github() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "github",
    className: "jsx-1706931772",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 16 16",
    version: "1.1",
    "aria-hidden": "true",
    className: "jsx-1706931772",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "rgba(240,240,240,1)",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    className: "jsx-1706931772",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1706931772",
    css: "#github{float:right;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL2xpbmtzL0dpdGh1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNeUIsQUFHdUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvbGlua3MvR2l0aHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2l0aHViID0gZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZ2l0aHViXCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB2ZXJzaW9uPVwiMS4xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZmlsbD1cInJnYmEoMjQwLDI0MCwyNDAsMSlcIiBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCI+PC9wYXRoPjwvc3ZnPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjZ2l0aHViIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViXG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/links/Github.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Github);

/***/ }),

/***/ "./pages/portfolio/components/links/LinkedIn.js":
/*!******************************************************!*\
  !*** ./pages/portfolio/components/links/LinkedIn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/links/LinkedIn.js";



var LinkedIn = function LinkedIn() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "linkedin",
    className: "jsx-3702879799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 400 400",
    className: "jsx-3702879799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "rgba(240,240,240,1)",
    d: "M223.1,312c-17.2,0-32.5,0-49,0c0-51.4,0-102.4,0-154.4c15,0,29.8,0,45.4,0c0.5,4.5,1.1,9,1.7,14.9 c13.9-13.1,28.9-21.6,48.2-21.1c31.9,0.7,51.4,14.8,53.5,46.4c2.5,37.6,0.6,75.4,0.6,114c-16.5,0-32.2,0-49.5,0 c0-19,0.2-37.3-0.1-55.7c-0.2-12.6-1.3-25.1-1.6-37.7c-0.3-11.7-5.6-19.2-17.1-21.6c-10.7-2.2-23.6,4.6-27,16.1 c-3.2,11.1-4.5,23-5,34.6C222.6,268.5,223.1,289.5,223.1,312z",
    className: "jsx-3702879799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "rgba(240,240,240,1)",
    d: "M143.7,311.9c-15.7,0-31.1,0-47.6,0c0-51.2,0-102.4,0-154.5c15.7,0,31.1,0,47.6,0 C143.7,208.6,143.7,259.9,143.7,311.9z",
    className: "jsx-3702879799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "rgba(240,240,240,1)",
    d: "M120.3,138.5c-17.7,0.2-30.3-12.1-30.5-29.5c-0.1-17.5,12.4-30.4,29.5-30.6c17.3-0.1,30.3,12.5,30.5,29.7 C150.2,125.6,137.7,138.3,120.3,138.5z",
    className: "jsx-3702879799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3702879799",
    css: "#linkedin{margin-right:10px;margin-top:5px;float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL2xpbmtzL0xpbmtlZEluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF5QixBQUc2QixrQkFDSCxlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvbGlua3MvTGlua2VkSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaW5rZWRJbiA9IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxpbmtlZGluXCI+XG5cbiAgICAgIDxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCA0MDAgNDAwXCI+PHBhdGggZmlsbD1cInJnYmEoMjQwLDI0MCwyNDAsMSlcIiBkPVwiTTIyMy4xLDMxMmMtMTcuMiwwLTMyLjUsMC00OSwwYzAtNTEuNCwwLTEwMi40LDAtMTU0LjRjMTUsMCwyOS44LDAsNDUuNCwwYzAuNSw0LjUsMS4xLDksMS43LDE0LjkgYzEzLjktMTMuMSwyOC45LTIxLjYsNDguMi0yMS4xYzMxLjksMC43LDUxLjQsMTQuOCw1My41LDQ2LjRjMi41LDM3LjYsMC42LDc1LjQsMC42LDExNGMtMTYuNSwwLTMyLjIsMC00OS41LDAgYzAtMTksMC4yLTM3LjMtMC4xLTU1LjdjLTAuMi0xMi42LTEuMy0yNS4xLTEuNi0zNy43Yy0wLjMtMTEuNy01LjYtMTkuMi0xNy4xLTIxLjZjLTEwLjctMi4yLTIzLjYsNC42LTI3LDE2LjEgYy0zLjIsMTEuMS00LjUsMjMtNSwzNC42QzIyMi42LDI2OC41LDIyMy4xLDI4OS41LDIyMy4xLDMxMnpcIi8+PHBhdGggZmlsbD1cInJnYmEoMjQwLDI0MCwyNDAsMSlcIiBkPVwiTTE0My43LDMxMS45Yy0xNS43LDAtMzEuMSwwLTQ3LjYsMGMwLTUxLjIsMC0xMDIuNCwwLTE1NC41YzE1LjcsMCwzMS4xLDAsNDcuNiwwIEMxNDMuNywyMDguNiwxNDMuNywyNTkuOSwxNDMuNywzMTEuOXpcIi8+PHBhdGggZmlsbD1cInJnYmEoMjQwLDI0MCwyNDAsMSlcIiBkPVwiTTEyMC4zLDEzOC41Yy0xNy43LDAuMi0zMC4zLTEyLjEtMzAuNS0yOS41Yy0wLjEtMTcuNSwxMi40LTMwLjQsMjkuNS0zMC42YzE3LjMtMC4xLDMwLjMsMTIuNSwzMC41LDI5LjcgQzE1MC4yLDEyNS42LDEzNy43LDEzOC4zLDEyMC4zLDEzOC41elwiLz48L3N2Zz5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjbGlua2VkaW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkSW5cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/links/LinkedIn.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkedIn);

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