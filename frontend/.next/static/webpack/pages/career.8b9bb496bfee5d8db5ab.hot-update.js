webpackHotUpdate_N_E("pages/career",{

/***/ "./pages/career.js":
/*!*************************!*\
  !*** ./pages/career.js ***!
  \*************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_careerItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/careerItem */ "./component/careerItem.js");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/custom.module.css */ "./styles/custom.module.css");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\hp\\Desktop\\ASIF\\Development Files\\Projects\\SheetFetchApp\\frontend\\pages\\career.js",
    _s = $RefreshSig$();





var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var result = _ref.results,
      page = _ref.page;
  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      careers = _useState[0],
      setCareers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      flag = _useState2[0],
      setflag = _useState2[1];

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
    //setPage(page + 1);
    Router.push("career?page=".concat(+page + 1));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.h1,
      children: "QuillBot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.h2,
      children: "Careers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), careers.map(function (element) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_careerItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: element
      }, element.id, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this);
    }), careers.length > 0 && flag.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: onClickHandler,
      children: "View More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Home, "s/ML8XmFmAsY8wYj5d4ev/ChjYg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZWVyLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJyZXN1bHQiLCJyZXN1bHRzIiwicGFnZSIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2FyZWVycyIsInNldENhcmVlcnMiLCJmbGFnIiwic2V0ZmxhZyIsInVzZUVmZmVjdCIsIm9uQ2xpY2tIYW5kbGVyIiwicHVzaCIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwiaDIiLCJtYXAiLCJlbGVtZW50IiwiaWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQXlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLE1BQWdCLFFBQXpCQyxPQUF5QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0RCxNQUFNQyxNQUFNLEdBQUVDLDZEQUFTLEVBQXZCOztBQURzRCxrQkFFeEJDLHNEQUFRLENBQUMsRUFBRCxDQUZnQjtBQUFBLE1BRS9DQyxPQUYrQztBQUFBLE1BRXRDQyxVQUZzQzs7QUFBQSxtQkFHOUJGLHNEQUFRLENBQUMsRUFBRCxDQUhzQjtBQUFBLE1BRy9DRyxJQUgrQztBQUFBLE1BR3pDQyxPQUh5Qzs7QUFLdERDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUjtBQUNBO0FBQ0E7QUFDQUgsc0JBQVUsd0dBQUtELE9BQUwsZ0dBQWlCTixNQUFqQixHQUFWO0FBQ0FTLG1CQUFPLENBQUMsNkZBQUlULE1BQUwsRUFBUCxDQUxRLENBTVI7O0FBTlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQU9OLENBQUNFLElBQUQsQ0FQTSxDQUFUOztBQVNBLE1BQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjtBQUNBUixVQUFNLENBQUNTLElBQVAsdUJBQTJCLENBQUNWLElBQUQsR0FBTSxDQUFqQztBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVXLGdFQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0U7QUFBSSxRQUFFLEVBQUVELGdFQUFNLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUksUUFBRSxFQUFFRixnRUFBTSxDQUFDRyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFPR1YsT0FBTyxDQUFDVyxHQUFSLENBQVksVUFBQ0MsT0FBRDtBQUFBLDBCQUNYLHFFQUFDLDZEQUFEO0FBQTZCLFlBQUksRUFBRUE7QUFBbkMsU0FBaUJBLE9BQU8sQ0FBQ0MsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBWixDQVBILEVBV0diLE9BQU8sQ0FBQ2MsTUFBUixHQUFpQixDQUFqQixJQUFzQlosSUFBSSxDQUFDWSxNQUFMLEdBQWMsQ0FBcEMsaUJBQ0M7QUFBUSxhQUFPLEVBQUVULGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBcEN1QlosSTtVQUNSSyxxRDs7O0tBRFFMLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FyZWVyLjhiOWJiNDk2YmZlZTVkOGRiNWFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ2FyZWVySXRlbSBmcm9tIFwiLi4vY29tcG9uZW50L2NhcmVlckl0ZW1cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzdWx0czogcmVzdWx0LCBwYWdlIH0pIHtcclxuICBjb25zdCBSb3V0ZXI9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW2NhcmVlcnMsIHNldENhcmVlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmbGFnLCBzZXRmbGFnXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIC8vICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jYXJlZXI/cGFnZT0ke3BhZ2V9JmxpbWl0PTNgXHJcbiAgICAvLyApO1xyXG4gICAgc2V0Q2FyZWVycyhbLi4uY2FyZWVycywgLi4ucmVzdWx0XSk7XHJcbiAgICBzZXRmbGFnKFsuLi5yZXN1bHRdKTtcclxuICAgIC8vcmVzdWx0LmRhdGE+MCA/IHNldGZsYWcoMSkgOiBzZXRmbGFnKDApIDtcclxuICB9LCBbcGFnZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIC8vc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICBSb3V0ZXIucHVzaChgY2FyZWVyP3BhZ2U9JHsrcGFnZSsxfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMSBpZD17c3R5bGVzLmgxfT5RdWlsbEJvdDwvaDE+XHJcbiAgICAgIDxoMiBpZD17c3R5bGVzLmgyfT5DYXJlZXJzPC9oMj5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuXHJcbiAgICAgIHtjYXJlZXJzLm1hcCgoZWxlbWVudCkgPT4gKFxyXG4gICAgICAgIDxDYXJlZXJJdGVtIGtleT17ZWxlbWVudC5pZH0gZGF0YT17ZWxlbWVudH0gLz5cclxuICAgICAgKSl9XHJcbiAgICAgIHsvKiB7Y29uc29sZS5sb2coZmxhZyl9ICovfVxyXG4gICAgICB7Y2FyZWVycy5sZW5ndGggPiAwICYmIGZsYWcubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0+VmlldyBNb3JlPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhcmVlcj9wYWdlPSR7Y29udGV4dC5xdWVyeS5wYWdlfSZsaW1pdD0zYFxyXG4gICk7XHJcbiAgICBjb25zb2xlLmxvZygpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlc3VsdHM6IHJlc3VsdC5kYXRhLFxyXG4gICAgICBwYWdlOiBjb250ZXh0LnF1ZXJ5LnBhZ2UsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==