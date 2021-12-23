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

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odmFrb3N0ZXJlbmR1c2ovLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: dusjenKoster , 1: settDusjenKoster  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const KWh_forEnDusj = 6.5;\n    const nettleie = 0.5;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const idag = new Date();\n        const dato = idag.toISOString().substr(0, 10);\n        fetch(`https://norway-power.ffail.win/?zone=NO1&date=${idag.toISOString().substr(0, 10)}`).then((response)=>response.json()\n        ).then((data)=>{\n            const timekey = dato + \"T\" + idag.getHours() + \":00:00+01:00\";\n            const timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * (KWh_forEnDusj + nettleie));\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: `Hva koster en dusj?`\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: `Dusjen koster ${dusjenKoster.toLocaleString(\"no-NO\")} kr i sone NO1`\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Powered by\"\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBRWY7QUFDa0I7QUFFL0IsUUFBUSxDQUFDSSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLFlBQVksTUFBRUMsZ0JBQWdCLE1BQUlOLCtDQUFRLENBQUNPLFNBQVM7SUFDM0QsS0FBSyxDQUFDQyxhQUFhLEdBQUcsR0FBRztJQUN6QixLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHO0lBRXBCUixnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNTLElBQUksR0FBRyxHQUFHLENBQUNDLElBQUk7UUFDckIsS0FBSyxDQUFDQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csV0FBVyxHQUFHQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDNUNDLEtBQUssRUFDRiw4Q0FBOEMsRUFBRUwsSUFBSSxDQUNsREcsV0FBVyxHQUNYQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FFZEUsSUFBSSxFQUFDQyxRQUFRLEdBQUlBLFFBQVEsQ0FBQ0MsSUFBSTtVQUM5QkYsSUFBSSxFQUFDRyxJQUFJLEdBQUksQ0FBQztZQUNiLEtBQUssQ0FBQ0MsT0FBTyxHQUFHUixJQUFJLEdBQUcsQ0FBRyxLQUFHRixJQUFJLENBQUNXLFFBQVEsS0FBSyxDQUFjO1lBQzdELEtBQUssQ0FBQ0MsU0FBUyxHQUFHSCxJQUFJLENBQUNDLE9BQU87WUFFOUJkLGdCQUFnQixDQUFDZ0IsU0FBUyxDQUFDQyxXQUFXLElBQUlmLGFBQWEsR0FBR0MsUUFBUTtRQUNwRSxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hlLENBQUc7UUFBQ0MsU0FBUyxFQUFFdEIsMEVBQWdCOzs7Ozs7OztrRkFDN0JELGtEQUFJOzs7Ozs7Ozt5RkFDRnlCLENBQUs7Ozs7Ozs7bUNBQUcsbUJBQW1COzt5RkFDM0JDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7Ozs7O3lGQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTtnQkFBQ1QsU0FBUyxFQUFFdEIscUVBQVc7Ozs7Ozs7O29CQUN6QkUsWUFBWSx5RUFDVjhCLENBQUU7d0JBQ0RWLFNBQVMsRUFBRXRCLHNFQUFZOzs7Ozs7O21DQUN0QixjQUFjLEVBQUVFLFlBQVksQ0FBQytCLGNBQWMsQ0FDNUMsQ0FBTyxRQUNQLGNBQWM7OzBGQUVqQkMsQ0FBQzs7Ozs7Ozs7NEJBQUMsQ0FDQzs0QkFBQyxDQUFHO2lHQUNMQyxDQUFDO2dDQUNBTCxJQUFJLEVBQ0YsQ0FBOEQ7Ozs7Ozs7MENBRWpFLENBRUQ7OzRCQUFLLENBQUc7NEJBQUMsQ0FFWDs7Ozs7aUZBRURNLENBQU07Ozs7Ozs7MEJBQUMsQ0FBVTs7OztBQUd4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHZha29zdGVyZW5kdXNqLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2R1c2plbktvc3Rlciwgc2V0dER1c2plbktvc3Rlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBLV2hfZm9yRW5EdXNqID0gNi41O1xuICBjb25zdCBuZXR0bGVpZSA9IDAuNTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkYWcgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdG8gPSBpZGFnLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL25vcndheS1wb3dlci5mZmFpbC53aW4vP3pvbmU9Tk8xJmRhdGU9JHtpZGFnXG4gICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgIC5zdWJzdHIoMCwgMTApfWBcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgdGltZWtleSA9IGRhdG8gKyBcIlRcIiArIGlkYWcuZ2V0SG91cnMoKSArIFwiOjAwOjAwKzAxOjAwXCI7XG4gICAgICAgIGNvbnN0IHRpbWVzcHJpcyA9IGRhdGFbdGltZWtleV07XG5cbiAgICAgICAgc2V0dER1c2plbktvc3Rlcih0aW1lc3ByaXMuTk9LX3Blcl9rV2ggKiAoS1doX2ZvckVuRHVzaiArIG5ldHRsZWllKSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YEh2YSBrb3N0ZXIgZW4gZHVzaj9gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge2R1c2plbktvc3RlciAmJiAoXG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cbiAgICAgICAgICA+e2BEdXNqZW4ga29zdGVyICR7ZHVzamVuS29zdGVyLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICAgKX0ga3IgaSBzb25lIE5PMWB9PC9oMT5cbiAgICAgICAgKX1cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2V7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm5vcmRwb29sZ3JvdXAuY29tL3RoZS1wb3dlci1tYXJrZXQvQmlkZGluZy1hcmVhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICBmb3IgaW5mb3JtYXNqb24gb20gc29uZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+UG93ZXJlZCBieTwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsInN0eWxlcyIsIkhvbWUiLCJkdXNqZW5Lb3N0ZXIiLCJzZXR0RHVzamVuS29zdGVyIiwidW5kZWZpbmVkIiwiS1doX2ZvckVuRHVzaiIsIm5ldHRsZWllIiwiaWRhZyIsIkRhdGUiLCJkYXRvIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGltZWtleSIsImdldEhvdXJzIiwidGltZXNwcmlzIiwiTk9LX3Blcl9rV2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwidG9Mb2NhbGVTdHJpbmciLCJwIiwiYSIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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