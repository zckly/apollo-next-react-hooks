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
    className: "jsx-2590604936" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      right: "".concat(position, "%")
    },
    className: "jsx-2590604936" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2590604936" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2590604936" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2590604936",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{position:absolute;top:-25px;right:-100px;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.down-arrow{position:absolute;margin-top:18px;margin-left:18px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RnlCLEFBR3NCLEFBTVUsQUFHSCxBQUthLEFBT2IsV0FwQkEsT0FTVCxBQVlPLFVBWEosQ0FUSyxFQWFOLEdBUU0sT0FYbkIsQ0FJYyxJQWJHLElBSWpCLENBaUJ5QixHQVBMLE9BYnBCLFdBY29CLEVBT0gsZUFDUSxDQVB6QixtRkFRd0Isc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0bWwsIGJvZHkge1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG4vL1xuLy8gYm9keSB7XG4vLyAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgIGdyaWQ6IDEwMHB4IC8gMTAwcHg7XG4vLyAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuLy9cbi8vIHNwYW4ge1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIGJhY2tncm91bmQ6IHR1cnF1b2lzZTtcbi8vICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbi8vIH1cblxuLy8gY29uc3QgZ2V0UHJvZ3Jlc3MgPSAoe2VsYXBzZWQsIHRvdGFsfSkgPT5cbi8vICAgTWF0aC5taW4oZWxhcHNlZCAvIHRvdGFsLCAxKTtcbi8vXG4vLyBjb25zdCBlYXNlT3V0ID0gcHJvZ3Jlc3MgPT5cbi8vICAgTWF0aC5wb3coLS1wcm9ncmVzcywgNSkgKyAxO1xuLy9cbi8vIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbi8vIGNvbnN0IGZpbmFsUG9zaXRpb24gPSA2MDA7XG4vL1xuLy8gY29uc3QgdGltZSA9IHtcbi8vICAgc3RhcnQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuLy8gICB0b3RhbDogMjAwMFxuLy8gfTtcbi8vXG4vLyBjb25zdCB0aWNrID0gbm93ID0+IHtcbi8vICAgdGltZS5lbGFwc2VkID0gbm93IC0gdGltZS5zdGFydDtcbi8vICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcyh0aW1lKTtcbi8vICAgY29uc3QgZWFzaW5nID0gZWFzZU91dChwcm9ncmVzcyk7XG4vLyAgIGNvbnN0IHBvc2l0aW9uID0gZWFzaW5nICogZmluYWxQb3NpdGlvbjtcbi8vICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb259cHgpYDtcbi8vICAgaWYgKHByb2dyZXNzIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuLy8gfTtcblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxubGV0IHVzZVByb2dyZXNzID0gKHN0YXJ0LGVuZCxkdXJhdGlvbikgPT4ge1xuICBsZXQgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShzdGFydCk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IGdldFByb2dyZXNzID0gKHtlbGFwc2VkLCB0b3RhbH0pID0+IE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4gICAgICBjb25zdCBlYXNlT3V0ID0gcHJvZ3Jlc3MgPT4gTWF0aC5wb3coLS1wcm9ncmVzcywgNSkgKyAxO1xuICAgICAgY29uc3QgdGltZSA9IHtcbiAgICAgICAgc3RhcnQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICB0b3RhbDogZHVyYXRpb25cbiAgICAgIH07XG4gICAgICBjb25zdCBmaW5hbFBvc2l0aW9uID0gNDcuNTtcbiAgICAgIGxldCByYWZJZCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN0ZXAgPSBub3cgPT4ge1xuICAgICAgICAgdGltZS5lbGFwc2VkID0gbm93IC0gdGltZS5zdGFydDtcbiAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModGltZSk7XG4gICAgICAgICBjb25zdCBlYXNpbmcgPSBlYXNlT3V0KHByb2dyZXNzKTtcbiAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZWFzaW5nICogZmluYWxQb3NpdGlvbjtcbiAgICAgICAgIC8vZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb259cHgpYDtcbiAgICAgIC8vIGxldCBzdGVwID0gdGltZXN0YW1wID0+IHtcbiAgICAgIC8vICAgaWYgKCFzdGFydCkgc3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAvLyAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgICAgICBzZXRQcm9ncmVzcyhwb3NpdGlvbioxMDAwKTtcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xuICAgIH0sXG4gICAgW3N0YXJ0LGVuZCxkdXJhdGlvbl1cbiAgKTtcblxuICByZXR1cm4gTWF0aC5taW4ocHJvZ3Jlc3MgLyBkdXJhdGlvbiwgZHVyYXRpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24gKCkge1xuICBsZXQgcG9zaXRpb24gPSB1c2VQcm9ncmVzcygwLDUwLDEwMDApO1xuICBjb25zb2xlLmxvZyhwb3NpdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tY29udGFpbmVyJyBzdHlsZT17eyBvcGFjaXR5OiBgJHtwb3NpdGlvbiouMDN9YCB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nIHN0eWxlPXt7IHJpZ2h0OiBgJHtwb3NpdGlvbn0lYCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZSc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkb3duLWFycm93Jz4mIzcwOTs8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmVtb3ZlLXVuZGVybGluZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6LTI1cHg7XG4gICAgICAgICAgcmlnaHQ6LTEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRvd24tYXJyb3cge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
//# sourceMappingURL=index.js.ebedfe91be6652356181.hot-update.js.map