"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        fetch(\"https://norway-power.ffail.win/?zone=NO1&date=\".concat(idag.toISOString().substr(0, 10))).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(dato + idag.getHours() + \"0\");\n            var timespris = data;\n            console.log(timespris);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Create Next App\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 22\n                                },\n                                __self: this,\n                                children: \"Next.js!\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Get started by editing\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"code\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().code),\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"pages/index.js\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://nextjs.org/docs\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Documentation →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Find in-depth information about Next.js features and API.\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Learn →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Learn about Next.js in an interactive course with quizzes!\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://github.com/vercel/next.js/tree/master/examples\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Examples →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Discover and deploy boilerplate example Next.js projects.\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Deploy →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            __source: {\n                                fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16,\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"jJZmbdFnZFNs6vZQXRn5ZO2Uq34=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tEQUFDLENBQWE7O3lHQUNoQkwsQ0FBQzs7Ozs7OztrREFBQyxDQUVIOzs7Ozs7OztpRkFLTE0sQ0FBTTtnQkFBQ2xCLFNBQVMsRUFBRXBCLHVFQUFhOzs7Ozs7O2dHQUM3QitCLENBQUM7b0JBQ0FILElBQUksRUFBQyxDQUF3RztvQkFDN0dXLE1BQU0sRUFBQyxDQUFRO29CQUNmWixHQUFHLEVBQUMsQ0FBcUI7Ozs7Ozs7O3dCQUMxQixDQUNXO3dCQUFDLENBQUc7NkZBQ2JhLENBQUk7NEJBQUNwQixTQUFTLEVBQUVwQixxRUFBVzs7Ozs7OzsyR0FDekJELG1EQUFLO2dDQUFDMkMsR0FBRyxFQUFDLENBQWE7Z0NBQUNDLEdBQUcsRUFBQyxDQUFhO2dDQUFDQyxLQUFLLEVBQUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FBTTVFLENBQUM7R0FsRnVCNUMsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2R1c2plbktvc3Rlciwgc2V0dER1c2plbktvc3Rlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWRhZyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0byA9IGlkYWcudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vbm9yd2F5LXBvd2VyLmZmYWlsLndpbi8/em9uZT1OTzEmZGF0ZT0ke2lkYWdcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnN1YnN0cigwLCAxMCl9YFxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRvICsgaWRhZy5nZXRIb3VycygpICsgXCIwXCIpO1xuICAgICAgICBjb25zdCB0aW1lc3ByaXMgPSBkYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aW1lc3ByaXMpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5ne1wiIFwifVxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnBhZ2VzL2luZGV4LmpzPC9jb2RlPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3NcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5Eb2N1bWVudGF0aW9uICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkxlYXJuICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPkV4YW1wbGVzICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPkRlcGxveSAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJIb21lIiwidW5kZWZpbmVkIiwiZHVzamVuS29zdGVyIiwic2V0dER1c2plbktvc3RlciIsImlkYWciLCJEYXRlIiwiZGF0byIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRIb3VycyIsInRpbWVzcHJpcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwicCIsImRlc2NyaXB0aW9uIiwiY29kZSIsImdyaWQiLCJjYXJkIiwiaDIiLCJmb290ZXIiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});