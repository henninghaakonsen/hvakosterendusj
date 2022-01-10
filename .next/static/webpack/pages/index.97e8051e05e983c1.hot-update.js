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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var vedlikehold = true;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref1[0], settDusjteller = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref2[0], settBrukDusjteller = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n        });\n    }, []);\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startStopTimer = function() {\n        console.log(timer);\n        if (!timer.current) {\n            settBrukDusjteller(true);\n            timer.current = setInterval(function() {\n                settDusjteller(function(prevstate) {\n                    return prevstate + 1;\n                });\n                console.log(dusjteller);\n                if (brukDusjteller) {\n                    return;\n                } else {\n                    settDusjteller(1);\n                }\n            }, 1000);\n        } else {\n            settBrukDusjteller(false);\n            clearInterval(timer.current);\n            timer.current = null;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(brukDusjteller, dusjteller);\n        if (brukDusjteller) {\n            var interval = setInterval(function() {\n                settDusjteller(function(prevstate) {\n                    return prevstate + 1;\n                });\n                console.log(dusjteller);\n                if (brukDusjteller) {\n                    return;\n                } else {\n                    settDusjteller(1);\n                }\n            }, 1000);\n            return clearInterval(interval);\n        }\n    }, [\n        brukDusjteller\n    ]);\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return dusjPerSekund * dusjteller;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 77,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster ? brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return startStopTimer;\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje (\").concat(dusjteller, \" sekunder)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return startStopTimer;\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Klarer ikke \\xe5 beregne dusjpris\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 116,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 117,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 118,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"lG2MXN9iFIdpoeBzIe8jabHl8rY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkEsY0FBYzs7Ozs7Ozs7a0NBQzVCLENBQWEsZUFFSXJCLE1BQVksQ0FGZDZCLHVCQUF1QixHQUFHZSxjQUFjLENBQ3hELENBQU8sU0FDUCxDQUFrQix5QkFBYSxNQUFVLENBQXJCNUMsVUFBVSxFQUFDLENBQVU7OEZBRXhDMEMsQ0FBQTt3QkFDRFYsU0FBUyxFQUFFeEMsc0VBQVk7d0JBQ3ZCbUQsT0FBTyxFQUFFLFFBQVE7NEJBQUZ0QixNQUFNLENBQU5BLGNBQWM7Ozs7Ozs7O2tDQUM1QixDQUFjLGdCQUVmLE1BQXNCLENBRkx6QixZQUFZLENBQUNnRCxjQUFjLENBQzVDLENBQU8sU0FDUCxDQUF3Qjs4RkFHekJGLENBQUE7d0JBQUNWLFNBQVMsRUFBRXhDLHNFQUFZOzs7Ozs7O2tDQUFFLENBQThCOzswRkFFM0RxRCxDQUFBOzs7Ozs7Ozs0QkFBQyxDQUNDOzRCQUFDLENBQUc7aUdBQ0xDLENBQUM7Z0NBQ0FOLElBQUksRUFDRixDQUE4RDs7Ozs7OzswQ0FFakUsQ0FFRDs7NEJBQUssQ0FBRzs0QkFBQyxDQUVYOzs7OztrRkFFRE8sQ0FBTTs7Ozs7Ozs7b0JBQUMsQ0FDSzt5RkFBQ0QsQ0FBQzt3QkFBQ04sSUFBSSxFQUFFLENBQXFDOzs7Ozs7O2tDQUFFLENBQU87O3lGQUNqRVEsQ0FBRTs7Ozs7Ozs7b0JBQ0QsQ0FBVSxlQUFtQ2pELE1BRTlDLENBRmFELGFBQWEsRUFBQyxDQUFpQixvQkFFM0MsTUFBc0IsQ0FGdUJDLFFBQVEsQ0FBQzZDLGNBQWMsQ0FDcEUsQ0FBTyxTQUNQLENBQXNCOzs7OztBQUloQyxDQUFDO0dBdkh1Qm5ELElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHZlZGxpa2Vob2xkID0gdHJ1ZTtcbiAgY29uc3QgW2R1c2plbktvc3Rlciwgc2V0dER1c2plbktvc3Rlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBLV2hfZm9yRW5EdXNqID0gNi41O1xuICBjb25zdCBuZXR0bGVpZSA9IDAuNTtcblxuICBjb25zdCBbZHVzanRlbGxlciwgc2V0dER1c2p0ZWxsZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFticnVrRHVzanRlbGxlciwgc2V0dEJydWtEdXNqdGVsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkYWcgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdG8gPSBpZGFnLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICBjb25zdCB0aW1lID0gKFwiMFwiICsgaWRhZy5nZXRIb3VycygpKS5zbGljZSgtMik7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtaHZha29zdGVyZW5kdXNqLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2hlbnRfZGFnZW5zX3N0cm9tcHJpc2VyXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgdGltZWtleSA9IGRhdG8gKyBcIlRcIiArIHRpbWUgKyBcIjowMDowMCswMTowMFwiO1xuICAgICAgICBjb25zdCB0aW1lc3ByaXMgPSBkYXRhW3RpbWVrZXldO1xuXG4gICAgICAgIHNldHREdXNqZW5Lb3N0ZXIoXG4gICAgICAgICAgdGltZXNwcmlzLk5PS19wZXJfa1doICogS1doX2ZvckVuRHVzaiArIEtXaF9mb3JFbkR1c2ogKiBuZXR0bGVpZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0aW1lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3RhcnRTdG9wVGltZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGltZXIpXG4gICAgaWYgKCF0aW1lci5jdXJyZW50KSB7XG4gICAgICBzZXR0QnJ1a0R1c2p0ZWxsZXIodHJ1ZSk7XG4gICAgICB0aW1lci5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXR0RHVzanRlbGxlcihwcmV2c3RhdGUgPT4gcHJldnN0YXRlICsgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1c2p0ZWxsZXIpO1xuICAgICAgICBpZiAoYnJ1a0R1c2p0ZWxsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dER1c2p0ZWxsZXIoMSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXR0QnJ1a0R1c2p0ZWxsZXIoZmFsc2UpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lci5jdXJyZW50KTtcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGJydWtEdXNqdGVsbGVyLCBkdXNqdGVsbGVyKTtcbiAgICBpZiAoYnJ1a0R1c2p0ZWxsZXIpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXR0RHVzanRlbGxlcihwcmV2c3RhdGUgPT4gcHJldnN0YXRlICsgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1c2p0ZWxsZXIpO1xuICAgICAgICBpZiAoYnJ1a0R1c2p0ZWxsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dER1c2p0ZWxsZXIoMSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9LCBbYnJ1a0R1c2p0ZWxsZXJdKTtcblxuICBjb25zdCBiZXJlZ25EdXNqdGVsbGVySUtyb25lciA9ICgpID0+IHtcbiAgICBjb25zdCBkdXNqUGVyU2VrdW5kID0gZHVzamVuS29zdGVyIC8gMTAgLyA2MDtcbiAgICByZXR1cm4gZHVzalBlclNla3VuZCAqIGR1c2p0ZWxsZXI7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgSHZhIGtvc3RlciBlbiBkdXNqP2B9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkh2YSBrb3N0ZXIgZW4gZHVzaj9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7ZHVzamVuS29zdGVyID8gKFxuICAgICAgICAgIGJydWtEdXNqdGVsbGVyID8gKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydFN0b3BUaW1lcn1cbiAgICAgICAgICAgID57YER1IGhhciBicnVrdCAke2JlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyKCkudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICAgICAgKX0ga3IgcMOlIMOlIGR1c2plICgke2R1c2p0ZWxsZXJ9IHNla3VuZGVyKWB9PC9oMT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydFN0b3BUaW1lcn1cbiAgICAgICAgICAgID57YER1c2plbiBrb3N0ZXIgJHtkdXNqZW5Lb3N0ZXIudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICAgICAgKX0ga3IgcMOlIMO4c3RsYW5kZXQgKE5PMSlgfTwvaDE+XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+S2xhcmVyIGlra2Ugw6UgYmVyZWduZSBkdXNqcHJpczwvaDE+XG4gICAgICAgICl9XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNle1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5ub3JkcG9vbGdyb3VwLmNvbS90aGUtcG93ZXItbWFya2V0L0JpZGRpbmctYXJlYXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGhlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgZm9yIGluZm9ybWFzam9uIG9tIHNvbmVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBQb3dlcmVkIGJ5IDxhIGhyZWY9e1wiaHR0cHM6Ly9naXRodWIuY29tL2hlbm5pbmdoYWFrb25zZW5cIn0+SGVubmluZzwvYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtgQmFzZXJ0IHDDpSAke0tXaF9mb3JFbkR1c2p9IEtXaCBwZXIgZHVzaiBvZyAke25ldHRsZWllLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICApfSBrciBwZXIgS1doIGkgbmV0dGxlaWVgfVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIZWFkIiwic3R5bGVzIiwiSG9tZSIsInZlZGxpa2Vob2xkIiwidW5kZWZpbmVkIiwiZHVzamVuS29zdGVyIiwic2V0dER1c2plbktvc3RlciIsIktXaF9mb3JFbkR1c2oiLCJuZXR0bGVpZSIsImR1c2p0ZWxsZXIiLCJzZXR0RHVzanRlbGxlciIsImJydWtEdXNqdGVsbGVyIiwic2V0dEJydWtEdXNqdGVsbGVyIiwiaWRhZyIsIkRhdGUiLCJkYXRvIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJ0aW1lIiwiZ2V0SG91cnMiLCJzbGljZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aW1la2V5IiwidGltZXNwcmlzIiwiTk9LX3Blcl9rV2giLCJ0aW1lciIsInN0YXJ0U3RvcFRpbWVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsInByZXZzdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsImJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyIiwiZHVzalBlclNla3VuZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJvbkNsaWNrIiwidG9Mb2NhbGVTdHJpbmciLCJwIiwiYSIsImZvb3RlciIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});