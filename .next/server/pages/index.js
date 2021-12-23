/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"a\": \"Home_a__yA5yC\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h2YWtvc3RlcmVuZHVzai8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImFcIjogXCJIb21lX2FfX3lBNXlDXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: dusjenKoster , 1: settDusjenKoster  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const KWh_forEnDusj = 6.5;\n    const nettleie = 0.5;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const idag = new Date();\n        const dato = idag.toISOString().substr(0, 10);\n        fetch(`https://norway-power.ffail.win/?zone=NO1&date=${idag.toISOString().substr(0, 10)}`).then((response)=>response.json()\n        ).then((data)=>{\n            const timekey = dato + \"T\" + idag.getHours() + \":00:00+01:00\";\n            const timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * (KWh_forEnDusj + nettleie));\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: `Hva koster en dusj?`\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: `Dusjen koster ${dusjenKoster.toLocaleString(\"no-NO\")} kr i sone NO1`\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBRWY7QUFDa0I7QUFFL0IsUUFBUSxDQUFDSSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLFlBQVksTUFBRUMsZ0JBQWdCLE1BQUlOLCtDQUFRLENBQUNPLFNBQVM7SUFDM0QsS0FBSyxDQUFDQyxhQUFhLEdBQUcsR0FBRztJQUN6QixLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHO0lBRXBCUixnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNTLElBQUksR0FBRyxHQUFHLENBQUNDLElBQUk7UUFDckIsS0FBSyxDQUFDQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csV0FBVyxHQUFHQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDNUNDLEtBQUssRUFDRiw4Q0FBOEMsRUFBRUwsSUFBSSxDQUNsREcsV0FBVyxHQUNYQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FFZEUsSUFBSSxFQUFDQyxRQUFRLEdBQUlBLFFBQVEsQ0FBQ0MsSUFBSTtVQUM5QkYsSUFBSSxFQUFDRyxJQUFJLEdBQUksQ0FBQztZQUNiLEtBQUssQ0FBQ0MsT0FBTyxHQUFHUixJQUFJLEdBQUcsQ0FBRyxLQUFHRixJQUFJLENBQUNXLFFBQVEsS0FBSyxDQUFjO1lBQzdELEtBQUssQ0FBQ0MsU0FBUyxHQUFHSCxJQUFJLENBQUNDLE9BQU87WUFFOUJkLGdCQUFnQixDQUFDZ0IsU0FBUyxDQUFDQyxXQUFXLElBQUlmLGFBQWEsR0FBR0MsUUFBUTtRQUNwRSxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hlLENBQUc7UUFBQ0MsU0FBUyxFQUFFdEIsMEVBQWdCOzs7Ozs7OztrRkFDN0JELGtEQUFJOzs7Ozs7Ozt5RkFDRnlCLENBQUs7Ozs7Ozs7bUNBQUcsbUJBQW1COzt5RkFDM0JDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7Ozs7O3lGQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTtnQkFBQ1QsU0FBUyxFQUFFdEIscUVBQVc7Ozs7Ozs7O29CQUN6QkUsWUFBWSx5RUFDVjhCLENBQUU7d0JBQ0RWLFNBQVMsRUFBRXRCLHNFQUFZOzs7Ozs7O21DQUN0QixjQUFjLEVBQUVFLFlBQVksQ0FBQytCLGNBQWMsQ0FDNUMsQ0FBTyxRQUNQLGNBQWM7OzBGQUVqQkMsQ0FBQzs7Ozs7Ozs7NEJBQUMsQ0FDQzs0QkFBQyxDQUFHO2lHQUNMQyxDQUFDO2dDQUNBTCxJQUFJLEVBQ0YsQ0FBOEQ7Ozs7Ozs7MENBRWpFLENBRUQ7OzRCQUFLLENBQUc7NEJBQUMsQ0FFWDs7Ozs7OztBQUlSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odmFrb3N0ZXJlbmR1c2ovLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZHVzamVuS29zdGVyLCBzZXR0RHVzamVuS29zdGVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IEtXaF9mb3JFbkR1c2ogPSA2LjU7XG4gIGNvbnN0IG5ldHRsZWllID0gMC41O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWRhZyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0byA9IGlkYWcudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vbm9yd2F5LXBvd2VyLmZmYWlsLndpbi8/em9uZT1OTzEmZGF0ZT0ke2lkYWdcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnN1YnN0cigwLCAxMCl9YFxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCB0aW1la2V5ID0gZGF0byArIFwiVFwiICsgaWRhZy5nZXRIb3VycygpICsgXCI6MDA6MDArMDE6MDBcIjtcbiAgICAgICAgY29uc3QgdGltZXNwcmlzID0gZGF0YVt0aW1la2V5XTtcblxuICAgICAgICBzZXR0RHVzamVuS29zdGVyKHRpbWVzcHJpcy5OT0tfcGVyX2tXaCAqIChLV2hfZm9yRW5EdXNqICsgbmV0dGxlaWUpKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgSHZhIGtvc3RlciBlbiBkdXNqP2B9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7ZHVzamVuS29zdGVyICYmIChcbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgID57YER1c2plbiBrb3N0ZXIgJHtkdXNqZW5Lb3N0ZXIudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICBcIm5vLU5PXCJcbiAgICAgICAgICApfSBrciBpIHNvbmUgTk8xYH08L2gxPlxuICAgICAgICApfVxuICAgICAgICA8cD5cbiAgICAgICAgICBTZXtcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubm9yZHBvb2xncm91cC5jb20vdGhlLXBvd2VyLW1hcmtldC9CaWRkaW5nLWFyZWFzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBoZXJcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgIGZvciBpbmZvcm1hc2pvbiBvbSBzb25lci5cbiAgICAgICAgPC9wPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsInN0eWxlcyIsIkhvbWUiLCJkdXNqZW5Lb3N0ZXIiLCJzZXR0RHVzamVuS29zdGVyIiwidW5kZWZpbmVkIiwiS1doX2ZvckVuRHVzaiIsIm5ldHRsZWllIiwiaWRhZyIsIkRhdGUiLCJkYXRvIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGltZWtleSIsImdldEhvdXJzIiwidGltZXNwcmlzIiwiTk9LX3Blcl9rV2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwidG9Mb2NhbGVTdHJpbmciLCJwIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();