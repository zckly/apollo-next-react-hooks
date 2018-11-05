webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/portfolio/components/Button.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Button.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useProgress = function useProgress(animate, time) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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

function Button() {
  var progress = useProgress(true, 1000);
  console.log(Math.floor(progress * 100 - 1));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: "".concat(progress * 100, "%")
    },
    className: "jsx-486220899" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginLeft: "".concat(progress * 48, "%")
    },
    className: "jsx-486220899" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-486220899" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-486220899" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "486220899",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;opacity:0;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{margin-left:100%;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.arrow{padding-top:12px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helveitica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3lCLEFBR3NCLEFBT1UsQUFHSixBQUdjLEFBT2QsV0FuQkMsTUFVcEIsQUFVeUIsWUFuQk4sRUFZTixTQVFJLEVBUEgsSUFaRyxJQUtqQixJQVFvQixDQU9LLE1BbkJiLFVBQ1osQ0FZb0Isa0JBQ3BCLGlEQU15Qix1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgdXNlUHJvZ3Jlc3MgPSAoYW5pbWF0ZSwgdGltZSkgPT4ge1xuICBsZXQgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgbGV0IHJhZklkID0gbnVsbDtcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aW1lc3RhbXAgPT4ge1xuICAgICAgICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgICAgICAgIHNldFByb2dyZXNzKHByb2dyZXNzKTtcbiAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCB0aW1lKSB7XG4gICAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2FuaW1hdGUsIHRpbWVdXG4gICk7XG5cbiAgcmV0dXJuIGFuaW1hdGUgPyBNYXRoLm1pbihwcm9ncmVzcyAvIHRpbWUsIHRpbWUpIDogMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uICgpIHtcbiAgbGV0IHByb2dyZXNzID0gdXNlUHJvZ3Jlc3ModHJ1ZSwxMDAwKTtcbiAgY29uc29sZS5sb2coTWF0aC5mbG9vcigocHJvZ3Jlc3MqMTAwKS0xKSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tY29udGFpbmVyJyBzdHlsZT17eyBvcGFjaXR5OiBgJHtwcm9ncmVzcyAqIDEwMH0lYH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgc3R5bGU9e3sgbWFyZ2luTGVmdDogYCR7cHJvZ3Jlc3MgKiA0OH0lYCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZSc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZG93bi1hcnJvdyc+JiM3MDk7PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTU1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnJlbW92ZS11bmRlcmxpbmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjI1LDEpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZWl0aWNhO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
    __self: this
  }));
}
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio/components/Button")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.fbdf463a970fb4d748f4.hot-update.js.map