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


var useProgress = function useProgress(animate, time) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
  }, [time]);
  return animate ? Math.min(progress / time, time) : 0;
};

function Button() {
  var progress = useProgress(true, 1000);
  console.log(Math.floor(progress * 100 - 1));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: "".concat(progress * 100, "%")
    },
    className: "jsx-674387632" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginLeft: "".concat(progress * 48, "%")
    },
    className: "jsx-674387632" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-674387632" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-674387632" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "674387632",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{margin-left:100%;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.arrow{padding-top:12px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helveitica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRnlCLEFBR3NCLEFBTVUsQUFHSixBQUdjLEFBT2QsV0FsQkMsTUFTcEIsQUFVeUIsWUFsQk4sRUFXTixTQVFJLEVBUEgsSUFYRyxJQUlqQixJQVFvQixDQU9LLE1BbEJ6QixXQVlvQixrQkFDcEIsaURBTXlCLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodG1sLCBib2R5IHtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLy9cbi8vIGJvZHkge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkOiAxMDBweCAvIDEwMHB4O1xuLy8gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4vLyAgIG1hcmdpbjogMDtcbi8vIH1cbi8vXG4vLyBzcGFuIHtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7XG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4vLyB9XG5cbi8vIGNvbnN0IGdldFByb2dyZXNzID0gKHtlbGFwc2VkLCB0b3RhbH0pID0+XG4vLyAgIE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4vL1xuLy8gY29uc3QgZWFzZU91dCA9IHByb2dyZXNzID0+XG4vLyAgIE1hdGgucG93KC0tcHJvZ3Jlc3MsIDUpICsgMTtcbi8vXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4vLyBjb25zdCBmaW5hbFBvc2l0aW9uID0gNjAwO1xuLy9cbi8vIGNvbnN0IHRpbWUgPSB7XG4vLyAgIHN0YXJ0OiBwZXJmb3JtYW5jZS5ub3coKSxcbi8vICAgdG90YWw6IDIwMDBcbi8vIH07XG4vL1xuLy8gY29uc3QgdGljayA9IG5vdyA9PiB7XG4vLyAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4vLyAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModGltZSk7XG4vLyAgIGNvbnN0IGVhc2luZyA9IGVhc2VPdXQocHJvZ3Jlc3MpO1xuLy8gICBjb25zdCBwb3NpdGlvbiA9IGVhc2luZyAqIGZpbmFsUG9zaXRpb247XG4vLyAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9ufXB4KWA7XG4vLyAgIGlmIChwcm9ncmVzcyA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbi8vIH07XG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IHVzZVByb2dyZXNzID0gKGFuaW1hdGUsIHRpbWUpID0+IHtcbiAgbGV0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcblxuICAgICAgICBsZXQgcmFmSWQgPSBudWxsO1xuICAgICAgICBsZXQgc3RhcnQgPSBudWxsO1xuICAgICAgICBsZXQgc3RlcCA9IHRpbWVzdGFtcCA9PiB7XG4gICAgICAgICAgaWYgKCFzdGFydCkgc3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgbGV0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICAgICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgICAgICAgIGlmIChwcm9ncmVzcyA8IHRpbWUpIHtcbiAgICAgICAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XG5cbiAgICB9LFxuICAgIFt0aW1lXVxuICApO1xuXG4gIHJldHVybiBhbmltYXRlID8gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0aW1lLCB0aW1lKSA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbiAoKSB7XG4gIGxldCBwcm9ncmVzcyA9IHVzZVByb2dyZXNzKHRydWUsMTAwMCk7XG4gIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoKHByb2dyZXNzKjEwMCktMSkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWNvbnRhaW5lcicgc3R5bGU9e3sgb3BhY2l0eTogYCR7cHJvZ3Jlc3MgKiAxMDB9JWB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke3Byb2dyZXNzICogNDh9JWAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Rvd24tYXJyb3cnPiYjNzA5OzwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmVtb3ZlLXVuZGVybGluZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMjUsMSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZlaXRpY2E7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
//# sourceMappingURL=index.js.004c3e1adf8b4397168c.hot-update.js.map