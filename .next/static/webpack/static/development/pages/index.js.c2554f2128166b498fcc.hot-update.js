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
    var time = {
      start: performance.now(),
      total: duration
    };

    var getProgress = function getProgress(_ref) {
      var elapsed = _ref.elapsed,
          total = _ref.total;
      return Math.min(elapsed / total, 1);
    };

    var rafId = null;
    var start = null;

    var step = function step(now) {
      time.elapsed = now - time.start;
      var progress = getProgress(time); // let step = timestamp => {
      //   if (!start) start = timestamp;
      //   let progress = timestamp - start;

      setProgress(progress);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return function () {
      return cancelAnimationFrame(rafId);
    };
  }, [time]);
  return Math.min(progress / time, time);
};

function Button() {
  var progress = useProgress(100, 50, 1000);
  console.log(progress);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: "".concat(progress * 100, "%")
    },
    className: "jsx-674387632" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginLeft: "".concat(progress * 48, "%")
    },
    className: "jsx-674387632" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-674387632" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-674387632" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "674387632",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{margin-left:100%;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.arrow{padding-top:12px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helveitica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RnlCLEFBR3NCLEFBTVUsQUFHSixBQUdjLEFBT2QsV0FsQkMsTUFTcEIsQUFVeUIsWUFsQk4sRUFXTixTQVFJLEVBUEgsSUFYRyxJQUlqQixJQVFvQixDQU9LLE1BbEJ6QixXQVlvQixrQkFDcEIsaURBTXlCLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodG1sLCBib2R5IHtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLy9cbi8vIGJvZHkge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkOiAxMDBweCAvIDEwMHB4O1xuLy8gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4vLyAgIG1hcmdpbjogMDtcbi8vIH1cbi8vXG4vLyBzcGFuIHtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7XG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4vLyB9XG5cbi8vIGNvbnN0IGdldFByb2dyZXNzID0gKHtlbGFwc2VkLCB0b3RhbH0pID0+XG4vLyAgIE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4vL1xuLy8gY29uc3QgZWFzZU91dCA9IHByb2dyZXNzID0+XG4vLyAgIE1hdGgucG93KC0tcHJvZ3Jlc3MsIDUpICsgMTtcbi8vXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4vLyBjb25zdCBmaW5hbFBvc2l0aW9uID0gNjAwO1xuLy9cbi8vIGNvbnN0IHRpbWUgPSB7XG4vLyAgIHN0YXJ0OiBwZXJmb3JtYW5jZS5ub3coKSxcbi8vICAgdG90YWw6IDIwMDBcbi8vIH07XG4vL1xuLy8gY29uc3QgdGljayA9IG5vdyA9PiB7XG4vLyAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4vLyAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModGltZSk7XG4vLyAgIGNvbnN0IGVhc2luZyA9IGVhc2VPdXQocHJvZ3Jlc3MpO1xuLy8gICBjb25zdCBwb3NpdGlvbiA9IGVhc2luZyAqIGZpbmFsUG9zaXRpb247XG4vLyAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9ufXB4KWA7XG4vLyAgIGlmIChwcm9ncmVzcyA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbi8vIH07XG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmxldCB1c2VQcm9ncmVzcyA9IChzdGFydCxlbmQsZHVyYXRpb24pID0+IHtcbiAgbGV0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoc3RhcnQpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lID0ge1xuICAgICAgICBzdGFydDogcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgIHRvdGFsOiBkdXJhdGlvblxuICAgICAgfTtcbiAgICAgIGNvbnN0IGdldFByb2dyZXNzID0gKHtlbGFwc2VkLCB0b3RhbH0pID0+IE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4gICAgICBsZXQgcmFmSWQgPSBudWxsO1xuICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3RlcCA9IG5vdyA9PiB7XG4gICAgICAgICB0aW1lLmVsYXBzZWQgPSBub3cgLSB0aW1lLnN0YXJ0O1xuICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcyh0aW1lKTtcbiAgICAgIC8vIGxldCBzdGVwID0gdGltZXN0YW1wID0+IHtcbiAgICAgIC8vICAgaWYgKCFzdGFydCkgc3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAvLyAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkKTtcbiAgICB9LFxuICAgIFt0aW1lXVxuICApO1xuXG4gIHJldHVybiBNYXRoLm1pbihwcm9ncmVzcyAvIHRpbWUsIHRpbWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24gKCkge1xuICBsZXQgcHJvZ3Jlc3MgPSB1c2VQcm9ncmVzcygxMDAsNTAsMTAwMCk7XG4gIGNvbnNvbGUubG9nKHByb2dyZXNzKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1jb250YWluZXInIHN0eWxlPXt7IG9wYWNpdHk6IGAke3Byb2dyZXNzICogMTAwfSVgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBgJHtwcm9ncmVzcyAqIDQ4fSVgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkb3duLWFycm93Jz4mIzcwOTs8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlbW92ZS11bmRlcmxpbmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjI1LDEpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZWl0aWNhO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
//# sourceMappingURL=index.js.c2554f2128166b498fcc.hot-update.js.map