module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/careerItem.js":
/*!*********************************!*\
  !*** ./component/careerItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/custom.module.css */ "./styles/custom.module.css");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\ASIF\\Development Files\\My projects\\SheetFetchApp\\frontend\\component\\careerItem.js";



function careerItem({
  data
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.h3,
      children: data.position
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p,
      children: data.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (careerItem);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_careerItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/careerItem */ "./component/careerItem.js");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/custom.module.css */ "./styles/custom.module.css");
/* harmony import */ var _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\ASIF\\Development Files\\My projects\\SheetFetchApp\\frontend\\pages\\index.js";




function Home() {
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const {
    0: careers,
    1: setCareers
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: flag,
    1: setflag
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(async () => {
    const result = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://localhost:5000/career?page=${page}&limit=3`);
    setCareers([...careers, ...result.data]);
    setflag([...result.data]); //result.data>0 ? setflag(1) : setflag(0) ;
  }, [page]);

  const onClickHandler = () => {
    setPage(page + 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.h1,
      children: "QuillBot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      id: _styles_custom_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.h2,
      children: "Careers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), careers.map(element => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_careerItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: element
    }, element.id, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)), console.log(flag), careers.length > 0 && flag.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: onClickHandler,
      children: "View More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 49
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/custom.module.css":
/*!**********************************!*\
  !*** ./styles/custom.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "custom_container__3vCIQ",
	"h1": "custom_h1__2THEM",
	"h2": "custom_h2__3reEY",
	"h3": "custom_h3__3ByYO",
	"p": "custom_p__6sb7s"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NhcmVlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2N1c3RvbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjYXJlZXJJdGVtIiwiZGF0YSIsInN0eWxlcyIsImgzIiwicG9zaXRpb24iLCJwIiwiZGVzY3JpcHRpb24iLCJIb21lIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VTdGF0ZSIsImNhcmVlcnMiLCJzZXRDYXJlZXJzIiwiZmxhZyIsInNldGZsYWciLCJ1c2VFZmZlY3QiLCJyZXN1bHQiLCJheGlvcyIsImdldCIsIm9uQ2xpY2tIYW5kbGVyIiwiY29udGFpbmVyIiwiaDEiLCJoMiIsIm1hcCIsImVsZW1lbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jdXN0b20ubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gY2FyZWVySXRlbSh7ZGF0YX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMyBpZD17c3R5bGVzLmgzfT57ZGF0YS5wb3NpdGlvbn08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FyZWVySXRlbVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJlZXJJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvY2FyZWVySXRlbVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY3VzdG9tLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY2FyZWVycywgc2V0Q2FyZWVyc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2ZsYWcsIHNldGZsYWddID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhcmVlcj9wYWdlPSR7cGFnZX0mbGltaXQ9M2BcbiAgICApO1xuICAgIHNldENhcmVlcnMoWy4uLmNhcmVlcnMsIC4uLnJlc3VsdC5kYXRhXSk7XG4gICAgc2V0ZmxhZyhbLi4ucmVzdWx0LmRhdGFdKVxuICAgIC8vcmVzdWx0LmRhdGE+MCA/IHNldGZsYWcoMSkgOiBzZXRmbGFnKDApIDtcbiAgfSwgW3BhZ2VdKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgPGgxIGlkPXtzdHlsZXMuaDF9PlF1aWxsQm90PC9oMT5cbiAgICAgIDxoMiBpZD17c3R5bGVzLmgyfT5DYXJlZXJzPC9oMj5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIHtjYXJlZXJzLm1hcCgoZWxlbWVudCkgPT4gKFxuICAgICAgICA8Q2FyZWVySXRlbSBrZXk9e2VsZW1lbnQuaWR9IGRhdGE9e2VsZW1lbnR9IC8+XG4gICAgICApKX1cbiAgICAgIHtjb25zb2xlLmxvZyhmbGFnKX1cbiAgICAgIHtjYXJlZXJzLmxlbmd0aCA+IDAgJiYgZmxhZy5sZW5ndGggPiAwICYmIDxidXR0b24gb25DbGljaz17b25DbGlja0hhbmRsZXJ9PlZpZXcgTW9yZTwvYnV0dG9uPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImN1c3RvbV9jb250YWluZXJfXzN2Q0lRXCIsXG5cdFwiaDFcIjogXCJjdXN0b21faDFfXzJUSEVNXCIsXG5cdFwiaDJcIjogXCJjdXN0b21faDJfXzNyZUVZXCIsXG5cdFwiaDNcIjogXCJjdXN0b21faDNfXzNCeVlPXCIsXG5cdFwicFwiOiBcImN1c3RvbV9wX182c2I3c1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=