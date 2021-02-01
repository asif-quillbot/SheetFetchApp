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





var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
    page = _useState[0],
    setPage = _useState[1];

var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var result = _ref.results;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      careers = _useState2[0],
      setCareers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      flag = _useState3[0],
      setflag = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const result = await axios.get(
            //   `http://localhost:5000/career?page=${page}&limit=3`
            // );
            setCareers([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(careers), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(result)));
            setflag(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(result.data)); //result.data>0 ? setflag(1) : setflag(0) ;

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

_s(Home, "UPzUTJRp7NLxvR9toS4EynrQU/4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsIkhvbWUiLCJyZXN1bHQiLCJyZXN1bHRzIiwiY2FyZWVycyIsInNldENhcmVlcnMiLCJmbGFnIiwic2V0ZmxhZyIsInVzZUVmZmVjdCIsImRhdGEiLCJvbkNsaWNrSGFuZGxlciIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwiaDIiLCJtYXAiLCJlbGVtZW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Z0JBR3dCQSxzREFBUSxDQUFDLENBQUQsQztJQUF6QkMsSTtJQUFNQyxPOzs7QUFFRSxTQUFTQyxJQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFuQkMsT0FBbUI7O0FBQUEsbUJBRWxCTCxzREFBUSxDQUFDLEVBQUQsQ0FGVTtBQUFBLE1BRXpDTSxPQUZ5QztBQUFBLE1BRWhDQyxVQUZnQzs7QUFBQSxtQkFHeEJQLHNEQUFRLENBQUMsRUFBRCxDQUhnQjtBQUFBLE1BR3pDUSxJQUh5QztBQUFBLE1BR25DQyxPQUhtQzs7QUFLaERDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUjtBQUNBO0FBQ0E7QUFDQUgsc0JBQVUsd0dBQUtELE9BQUwsZ0dBQWlCRixNQUFqQixHQUFWO0FBQ0FLLG1CQUFPLENBQUMsNkZBQUlMLE1BQU0sQ0FBQ08sSUFBWixFQUFQLENBTFEsQ0FNUjs7QUFOUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBT04sQ0FBQ1YsSUFBRCxDQVBNLENBQVQ7O0FBU0EsTUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCVixXQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFWSxnRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUVFO0FBQUksUUFBRSxFQUFFRCxnRUFBTSxDQUFDRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFJLFFBQUUsRUFBRUYsZ0VBQU0sQ0FBQ0csRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBUUdWLE9BQU8sQ0FBQ1csR0FBUixDQUFZLFVBQUNDLE9BQUQ7QUFBQSwwQkFDWCxxRUFBQyw2REFBRDtBQUE2QixZQUFJLEVBQUVBO0FBQW5DLFNBQWlCQSxPQUFPLENBQUNDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVosQ0FSSCxFQVdHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBWixDQVhILEVBWUdGLE9BQU8sQ0FBQ2dCLE1BQVIsR0FBaUIsQ0FBakIsSUFBc0JkLElBQUksQ0FBQ2MsTUFBTCxHQUFjLENBQXBDLGlCQUF5QztBQUFRLGFBQU8sRUFBRVYsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBbEN1QlQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NzhkMWU2MTY2MDBlYWJkZGU0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJlZXJJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvY2FyZWVySXRlbVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY3VzdG9tLm1vZHVsZS5jc3MnXG5cblxuY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyByZXN1bHRzOiByZXN1bHQgfSkge1xuICBcbiAgY29uc3QgW2NhcmVlcnMsIHNldENhcmVlcnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtmbGFnLCBzZXRmbGFnXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIC8vICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jYXJlZXI/cGFnZT0ke3BhZ2V9JmxpbWl0PTNgXG4gICAgLy8gKTtcbiAgICBzZXRDYXJlZXJzKFsuLi5jYXJlZXJzLCAuLi5yZXN1bHRdKTtcbiAgICBzZXRmbGFnKFsuLi5yZXN1bHQuZGF0YV0pXG4gICAgLy9yZXN1bHQuZGF0YT4wID8gc2V0ZmxhZygxKSA6IHNldGZsYWcoMCkgO1xuICB9LCBbcGFnZV0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXG4gICAgICA8aDEgaWQ9e3N0eWxlcy5oMX0+UXVpbGxCb3Q8L2gxPlxuICAgICAgPGgyIGlkPXtzdHlsZXMuaDJ9PkNhcmVlcnM8L2gyPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAge2NhcmVlcnMubWFwKChlbGVtZW50KSA9PiAoXG4gICAgICAgIDxDYXJlZXJJdGVtIGtleT17ZWxlbWVudC5pZH0gZGF0YT17ZWxlbWVudH0gLz5cbiAgICAgICkpfVxuICAgICAge2NvbnNvbGUubG9nKGZsYWcpfVxuICAgICAge2NhcmVlcnMubGVuZ3RoID4gMCAmJiBmbGFnLmxlbmd0aCA+IDAgJiYgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0+VmlldyBNb3JlPC9idXR0b24+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jYXJlZXI/cGFnZT0ke2NvbnRleHQucGFyYW1zLnBhZ2V9JmxpbWl0PTNgXG4gICk7XG5cbiAgcmV0dXJue1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRzOiByZXN1bHQuZGF0YVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=