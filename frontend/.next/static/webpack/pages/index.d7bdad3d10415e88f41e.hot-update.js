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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJlc3VsdCIsInJlc3VsdHMiLCJncGFnZSIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJjYXJlZXJzIiwic2V0Q2FyZWVycyIsImZsYWciLCJzZXRmbGFnIiwidXNlRWZmZWN0Iiwib25DbGlja0hhbmRsZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsImgyIiwibWFwIiwiZWxlbWVudCIsImlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFJZSxTQUFTQSxJQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLE1BQWlCLFFBQTFCQyxPQUEwQjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFBQSxrQkFDL0JDLHNEQUFRLENBQUMsQ0FBRCxDQUR1QjtBQUFBLE1BQ2hEQyxJQURnRDtBQUFBLE1BQzFDQyxPQUQwQzs7QUFBQSxtQkFFekJGLHNEQUFRLENBQUMsRUFBRCxDQUZpQjtBQUFBLE1BRWhERyxPQUZnRDtBQUFBLE1BRXZDQyxVQUZ1Qzs7QUFBQSxtQkFHL0JKLHNEQUFRLENBQUMsRUFBRCxDQUh1QjtBQUFBLE1BR2hESyxJQUhnRDtBQUFBLE1BRzFDQyxPQUgwQzs7QUFJdkRQLE9BQUssR0FBQ0UsSUFBTjtBQUVBTSx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1I7QUFDQTtBQUNBO0FBQ0FILHNCQUFVLHdHQUFLRCxPQUFMLGdHQUFpQk4sTUFBakIsR0FBVjtBQUNBUyxtQkFBTyxDQUFDLDZGQUFJVCxNQUFMLEVBQVAsQ0FMUSxDQU1SOztBQU5RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFPTixDQUFDSSxJQUFELENBUE0sQ0FBVDs7QUFTQSxNQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JOLFdBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVRLGdFQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBRUU7QUFBSSxRQUFFLEVBQUVELGdFQUFNLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUksUUFBRSxFQUFFRixnRUFBTSxDQUFDRyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFRR1QsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsT0FBRDtBQUFBLDBCQUNYLHFFQUFDLDZEQUFEO0FBQTZCLFlBQUksRUFBRUE7QUFBbkMsU0FBaUJBLE9BQU8sQ0FBQ0MsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBWixDQVJILEVBWUdaLE9BQU8sQ0FBQ2EsTUFBUixHQUFpQixDQUFqQixJQUFzQlgsSUFBSSxDQUFDVyxNQUFMLEdBQWMsQ0FBcEMsaUJBQXlDO0FBQVEsYUFBTyxFQUFFUixjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVo1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0FuQ3VCWixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3YmRhZDNkMTA0MTVlODhmNDFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmVlckl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudC9jYXJlZXJJdGVtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jdXN0b20ubW9kdWxlLmNzcydcblxudmFyIGdwYWdlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzdWx0czogcmVzdWx0ICwgZ3BhZ2V9KSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY2FyZWVycywgc2V0Q2FyZWVyc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2ZsYWcsIHNldGZsYWddID0gdXNlU3RhdGUoW10pXG4gIGdwYWdlPXBhZ2VcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAvLyAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2FyZWVyP3BhZ2U9JHtwYWdlfSZsaW1pdD0zYFxuICAgIC8vICk7XG4gICAgc2V0Q2FyZWVycyhbLi4uY2FyZWVycywgLi4ucmVzdWx0XSk7XG4gICAgc2V0ZmxhZyhbLi4ucmVzdWx0XSlcbiAgICAvL3Jlc3VsdC5kYXRhPjAgPyBzZXRmbGFnKDEpIDogc2V0ZmxhZygwKSA7XG4gIH0sIFtwYWdlXSk7XG5cbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0UGFnZShwYWdlICsgMSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgIDxoMSBpZD17c3R5bGVzLmgxfT5RdWlsbEJvdDwvaDE+XG4gICAgICA8aDIgaWQ9e3N0eWxlcy5oMn0+Q2FyZWVyczwvaDI+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICB7Y2FyZWVycy5tYXAoKGVsZW1lbnQpID0+IChcbiAgICAgICAgPENhcmVlckl0ZW0ga2V5PXtlbGVtZW50LmlkfSBkYXRhPXtlbGVtZW50fSAvPlxuICAgICAgKSl9XG4gICAgICB7Lyoge2NvbnNvbGUubG9nKGZsYWcpfSAqL31cbiAgICAgIHtjYXJlZXJzLmxlbmd0aCA+IDAgJiYgZmxhZy5sZW5ndGggPiAwICYmIDxidXR0b24gb25DbGljaz17b25DbGlja0hhbmRsZXJ9PlZpZXcgTW9yZTwvYnV0dG9uPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhcmVlcj9wYWdlPSR7Z3BhZ2V9JmxpbWl0PTNgXG4gICk7XG4gIFxuICBjb25zb2xlLmxvZyhcImZyb20gc3NyXCIrZ3BhZ2UpXG5cbiAgcmV0dXJue1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRzOiByZXN1bHQuZGF0YVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=