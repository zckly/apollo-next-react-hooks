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
    className: "jsx-891522919" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      right: "".concat(position, "%")
    },
    className: "jsx-891522919" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-891522919" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-891522919" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "891522919",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{position:absolute;top:-25px;right:-100px;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.down-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RnlCLEFBR3NCLEFBTVUsQUFHSCxBQUthLEFBT2xCLFdBcEJLLEVBcUJLLEtBWmQsVUFDRyxDQVRLLEVBYU4sS0FRSSxLQVhqQixDQUljLElBYkcsSUFJakIsQ0FpQnlCLEdBUEwsT0FicEIsV0Fjb0Isa0JBQ3BCLDZDQU13QixzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHRtbCwgYm9keSB7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vIH1cbi8vXG4vLyBib2R5IHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZDogMTAwcHggLyAxMDBweDtcbi8vICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuLy8gICBtYXJnaW46IDA7XG4vLyB9XG4vL1xuLy8gc3BhbiB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgYmFja2dyb3VuZDogdHVycXVvaXNlO1xuLy8gICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuLy8gfVxuXG4vLyBjb25zdCBnZXRQcm9ncmVzcyA9ICh7ZWxhcHNlZCwgdG90YWx9KSA9PlxuLy8gICBNYXRoLm1pbihlbGFwc2VkIC8gdG90YWwsIDEpO1xuLy9cbi8vIGNvbnN0IGVhc2VPdXQgPSBwcm9ncmVzcyA9PlxuLy8gICBNYXRoLnBvdygtLXByb2dyZXNzLCA1KSArIDE7XG4vL1xuLy8gY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuLy8gY29uc3QgZmluYWxQb3NpdGlvbiA9IDYwMDtcbi8vXG4vLyBjb25zdCB0aW1lID0ge1xuLy8gICBzdGFydDogcGVyZm9ybWFuY2Uubm93KCksXG4vLyAgIHRvdGFsOiAyMDAwXG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRpY2sgPSBub3cgPT4ge1xuLy8gICB0aW1lLmVsYXBzZWQgPSBub3cgLSB0aW1lLnN0YXJ0O1xuLy8gICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzKHRpbWUpO1xuLy8gICBjb25zdCBlYXNpbmcgPSBlYXNlT3V0KHByb2dyZXNzKTtcbi8vICAgY29uc3QgcG9zaXRpb24gPSBlYXNpbmcgKiBmaW5hbFBvc2l0aW9uO1xuLy8gICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvbn1weClgO1xuLy8gICBpZiAocHJvZ3Jlc3MgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4vLyB9O1xuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5sZXQgdXNlUHJvZ3Jlc3MgPSAoc3RhcnQsZW5kLGR1cmF0aW9uKSA9PiB7XG4gIGxldCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKHN0YXJ0KTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgY29uc3QgZ2V0UHJvZ3Jlc3MgPSAoe2VsYXBzZWQsIHRvdGFsfSkgPT4gTWF0aC5taW4oZWxhcHNlZCAvIHRvdGFsLCAxKTtcbiAgICAgIGNvbnN0IGVhc2VPdXQgPSBwcm9ncmVzcyA9PiBNYXRoLnBvdygtLXByb2dyZXNzLCA1KSArIDE7XG4gICAgICBjb25zdCB0aW1lID0ge1xuICAgICAgICBzdGFydDogcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgIHRvdGFsOiBkdXJhdGlvblxuICAgICAgfTtcbiAgICAgIGNvbnN0IGZpbmFsUG9zaXRpb24gPSA0Ny41O1xuICAgICAgbGV0IHJhZklkID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3RlcCA9IG5vdyA9PiB7XG4gICAgICAgICB0aW1lLmVsYXBzZWQgPSBub3cgLSB0aW1lLnN0YXJ0O1xuICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcyh0aW1lKTtcbiAgICAgICAgIGNvbnN0IGVhc2luZyA9IGVhc2VPdXQocHJvZ3Jlc3MpO1xuICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlYXNpbmcgKiBmaW5hbFBvc2l0aW9uO1xuICAgICAgICAgLy9lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvbn1weClgO1xuICAgICAgLy8gbGV0IHN0ZXAgPSB0aW1lc3RhbXAgPT4ge1xuICAgICAgLy8gICBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgIC8vICAgbGV0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICAgIHNldFByb2dyZXNzKHBvc2l0aW9uKjEwMDApO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XG4gICAgICAgICAgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XG4gICAgfSxcbiAgICBbc3RhcnQsZW5kLGR1cmF0aW9uXVxuICApO1xuXG4gIHJldHVybiBNYXRoLm1pbihwcm9ncmVzcyAvIGR1cmF0aW9uLCBkdXJhdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbiAoKSB7XG4gIGxldCBwb3NpdGlvbiA9IHVzZVByb2dyZXNzKDAsNTAsMTAwMCk7XG4gIGNvbnNvbGUubG9nKHBvc2l0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1jb250YWluZXInIHN0eWxlPXt7IG9wYWNpdHk6IGAke3Bvc2l0aW9uKi4wM31gIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgc3R5bGU9e3sgcmlnaHQ6IGAke3Bvc2l0aW9ufSVgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rvd24tYXJyb3cnPiYjNzA5Ozwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTU1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5yZW1vdmUtdW5kZXJsaW5lIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDotMjVweDtcbiAgICAgICAgICByaWdodDotMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZG93bi1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMjUsMSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
//# sourceMappingURL=index.js.7e7896944a1d20b42517.hot-update.js.map