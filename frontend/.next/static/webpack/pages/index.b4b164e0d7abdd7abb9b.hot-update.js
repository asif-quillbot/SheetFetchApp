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

  var result = _ref.results;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      page = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      careers = _useState2[0],
      setCareers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      flag = _useState3[0],
      setflag = _useState3[1]; //gpage=page


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
    }), console.log(flag), careers.length > 0 && flag.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ3BhZ2UiLCJIb21lIiwicmVzdWx0IiwicmVzdWx0cyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJjYXJlZXJzIiwic2V0Q2FyZWVycyIsImZsYWciLCJzZXRmbGFnIiwidXNlRWZmZWN0Iiwib25DbGlja0hhbmRsZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsImgyIiwibWFwIiwiZWxlbWVudCIsImlkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFKOztBQUVlLFNBQVNDLElBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQW5CQyxPQUFtQjs7QUFBQSxrQkFDeEJDLHNEQUFRLENBQUMsQ0FBRCxDQURnQjtBQUFBLE1BQ3pDQyxJQUR5QztBQUFBLE1BQ25DQyxPQURtQzs7QUFBQSxtQkFFbEJGLHNEQUFRLENBQUMsRUFBRCxDQUZVO0FBQUEsTUFFekNHLE9BRnlDO0FBQUEsTUFFaENDLFVBRmdDOztBQUFBLG1CQUd4Qkosc0RBQVEsQ0FBQyxFQUFELENBSGdCO0FBQUEsTUFHekNLLElBSHlDO0FBQUEsTUFHbkNDLE9BSG1DLGtCQUloRDs7O0FBRUFDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUjtBQUNBO0FBQ0E7QUFDQUgsc0JBQVUsd0dBQUtELE9BQUwsZ0dBQWlCTCxNQUFqQixHQUFWO0FBQ0FRLG1CQUFPLENBQUMsNkZBQUlSLE1BQUwsRUFBUCxDQUxRLENBTVI7O0FBTlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQU9OLENBQUNHLElBQUQsQ0FQTSxDQUFUOztBQVNBLE1BQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQk4sV0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVEsZ0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFFRTtBQUFJLFFBQUUsRUFBRUQsZ0VBQU0sQ0FBQ0UsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSSxRQUFFLEVBQUVGLGdFQUFNLENBQUNHLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixFQVFHVCxPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsMEJBQ1gscUVBQUMsNkRBQUQ7QUFBNkIsWUFBSSxFQUFFQTtBQUFuQyxTQUFpQkEsT0FBTyxDQUFDQyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaLENBUkgsRUFXR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlaLElBQVosQ0FYSCxFQVlHRixPQUFPLENBQUNlLE1BQVIsR0FBaUIsQ0FBakIsSUFBc0JiLElBQUksQ0FBQ2EsTUFBTCxHQUFjLENBQXBDLGlCQUF5QztBQUFRLGFBQU8sRUFBRVYsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBbkN1QlgsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGIxNjRlMGQ3YWJkZDdhYmI5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJlZXJJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvY2FyZWVySXRlbVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY3VzdG9tLm1vZHVsZS5jc3MnXG5cbmxldCBncGFnZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHJlc3VsdHM6IHJlc3VsdCB9KSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY2FyZWVycywgc2V0Q2FyZWVyc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2ZsYWcsIHNldGZsYWddID0gdXNlU3RhdGUoW10pXG4gIC8vZ3BhZ2U9cGFnZVxuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIC8vICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jYXJlZXI/cGFnZT0ke3BhZ2V9JmxpbWl0PTNgXG4gICAgLy8gKTtcbiAgICBzZXRDYXJlZXJzKFsuLi5jYXJlZXJzLCAuLi5yZXN1bHRdKTtcbiAgICBzZXRmbGFnKFsuLi5yZXN1bHRdKVxuICAgIC8vcmVzdWx0LmRhdGE+MCA/IHNldGZsYWcoMSkgOiBzZXRmbGFnKDApIDtcbiAgfSwgW3BhZ2VdKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgPGgxIGlkPXtzdHlsZXMuaDF9PlF1aWxsQm90PC9oMT5cbiAgICAgIDxoMiBpZD17c3R5bGVzLmgyfT5DYXJlZXJzPC9oMj5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIHtjYXJlZXJzLm1hcCgoZWxlbWVudCkgPT4gKFxuICAgICAgICA8Q2FyZWVySXRlbSBrZXk9e2VsZW1lbnQuaWR9IGRhdGE9e2VsZW1lbnR9IC8+XG4gICAgICApKX1cbiAgICAgIHtjb25zb2xlLmxvZyhmbGFnKX1cbiAgICAgIHtjYXJlZXJzLmxlbmd0aCA+IDAgJiYgZmxhZy5sZW5ndGggPiAwICYmIDxidXR0b24gb25DbGljaz17b25DbGlja0hhbmRsZXJ9PlZpZXcgTW9yZTwvYnV0dG9uPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2FyZWVyP3BhZ2U9MiZsaW1pdD0zYFxuICApO1xuXG4gIHJldHVybntcbiAgICBwcm9wczoge1xuICAgICAgcmVzdWx0czogcmVzdWx0LmRhdGFcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9