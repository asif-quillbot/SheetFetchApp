webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_careerItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/careerItem */ "./component/careerItem.js");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/custom.module.css */ "./styles/custom.module.css");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\hp\\Desktop\\ASIF\\Development Files\\Projects\\SheetFetchApp\\frontend\\pages\\index.js",
    _s = $RefreshSig$();




var gpage;
var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var result = _ref.results,
      gpage = _ref.gpage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      page = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      careers = _useState2[0],
      setCareers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      flag = _useState3[0],
      setflag = _useState3[1];

  gpage = page;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const result = await axios.get(
            //   `http://localhost:5000/career?page=${page}&limit=3`
            // );
            setCareers([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(careers), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(result)));
            setflag(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(result)); //result.data>0 ? setflag(1) : setflag(0) ;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [page]);

  var onClickHandler = function onClickHandler() {
    setPage(page + 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.h1,
      children: "QuillBot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.h2,
      children: "Careers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), careers.map(function (element) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_careerItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: element
      }, element.id, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this);
    }), careers.length > 0 && flag.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: onClickHandler,
      children: "View More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 49
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Home, "XQZTDeSqmq5NotWQZZMTFWK+kxs=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ3BhZ2UiLCJIb21lIiwicmVzdWx0IiwicmVzdWx0cyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJjYXJlZXJzIiwic2V0Q2FyZWVycyIsImZsYWciLCJzZXRmbGFnIiwidXNlRWZmZWN0Iiwib25DbGlja0hhbmRsZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsImgyIiwibWFwIiwiZWxlbWVudCIsImlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7O0FBRWUsU0FBU0MsSUFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxNQUFpQixRQUExQkMsT0FBMEI7QUFBQSxNQUFSSCxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsa0JBQy9CSSxzREFBUSxDQUFDLENBQUQsQ0FEdUI7QUFBQSxNQUNoREMsSUFEZ0Q7QUFBQSxNQUMxQ0MsT0FEMEM7O0FBQUEsbUJBRXpCRixzREFBUSxDQUFDLEVBQUQsQ0FGaUI7QUFBQSxNQUVoREcsT0FGZ0Q7QUFBQSxNQUV2Q0MsVUFGdUM7O0FBQUEsbUJBRy9CSixzREFBUSxDQUFDLEVBQUQsQ0FIdUI7QUFBQSxNQUdoREssSUFIZ0Q7QUFBQSxNQUcxQ0MsT0FIMEM7O0FBSXZEVixPQUFLLEdBQUNLLElBQU47QUFFQU0seURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSO0FBQ0E7QUFDQTtBQUNBSCxzQkFBVSx3R0FBS0QsT0FBTCxnR0FBaUJMLE1BQWpCLEdBQVY7QUFDQVEsbUJBQU8sQ0FBQyw2RkFBSVIsTUFBTCxFQUFQLENBTFEsQ0FNUjs7QUFOUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBT04sQ0FBQ0csSUFBRCxDQVBNLENBQVQ7O0FBU0EsTUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCTixXQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFUSxnRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUVFO0FBQUksUUFBRSxFQUFFRCxnRUFBTSxDQUFDRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFJLFFBQUUsRUFBRUYsZ0VBQU0sQ0FBQ0csRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBUUdULE9BQU8sQ0FBQ1UsR0FBUixDQUFZLFVBQUNDLE9BQUQ7QUFBQSwwQkFDWCxxRUFBQyw2REFBRDtBQUE2QixZQUFJLEVBQUVBO0FBQW5DLFNBQWlCQSxPQUFPLENBQUNDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVosQ0FSSCxFQVlHWixPQUFPLENBQUNhLE1BQVIsR0FBaUIsQ0FBakIsSUFBc0JYLElBQUksQ0FBQ1csTUFBTCxHQUFjLENBQXBDLGlCQUF5QztBQUFRLGFBQU8sRUFBRVIsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBbkN1QlgsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTNhZGFhOGRkMGYzMzQ0ZGUzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJlZXJJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvY2FyZWVySXRlbVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY3VzdG9tLm1vZHVsZS5jc3MnXG5cbnZhciBncGFnZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHJlc3VsdHM6IHJlc3VsdCAsIGdwYWdlfSkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2NhcmVlcnMsIHNldENhcmVlcnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtmbGFnLCBzZXRmbGFnXSA9IHVzZVN0YXRlKFtdKVxuICBncGFnZT1wYWdlXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgLy8gICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhcmVlcj9wYWdlPSR7cGFnZX0mbGltaXQ9M2BcbiAgICAvLyApO1xuICAgIHNldENhcmVlcnMoWy4uLmNhcmVlcnMsIC4uLnJlc3VsdF0pO1xuICAgIHNldGZsYWcoWy4uLnJlc3VsdF0pXG4gICAgLy9yZXN1bHQuZGF0YT4wID8gc2V0ZmxhZygxKSA6IHNldGZsYWcoMCkgO1xuICB9LCBbcGFnZV0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXG4gICAgICA8aDEgaWQ9e3N0eWxlcy5oMX0+UXVpbGxCb3Q8L2gxPlxuICAgICAgPGgyIGlkPXtzdHlsZXMuaDJ9PkNhcmVlcnM8L2gyPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAge2NhcmVlcnMubWFwKChlbGVtZW50KSA9PiAoXG4gICAgICAgIDxDYXJlZXJJdGVtIGtleT17ZWxlbWVudC5pZH0gZGF0YT17ZWxlbWVudH0gLz5cbiAgICAgICkpfVxuICAgICAgey8qIHtjb25zb2xlLmxvZyhmbGFnKX0gKi99XG4gICAgICB7Y2FyZWVycy5sZW5ndGggPiAwICYmIGZsYWcubGVuZ3RoID4gMCAmJiA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5WaWV3IE1vcmU8L2J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIHZhciB4PTFcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2FyZWVyP3BhZ2U9JHt4fSZsaW1pdD0zYFxuICApO1xuICBcbiAgXG5cbiAgcmV0dXJue1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRzOiByZXN1bHQuZGF0YVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=