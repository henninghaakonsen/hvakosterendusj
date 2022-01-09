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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var vedlikehold = true;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dusjteller = ref1[0], settDusjteller = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), brukDusjteller = ref2[0], settBrukDusjteller = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        fetch(\"https://norway-power.ffail.win/?zone=NO1&date=\".concat(idag.toISOString().substr(0, 10))).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n        });\n    }, []);\n    var oppdaterDusjTeller = function() {\n        setTimeout(function() {\n            settDusjteller(dusjteller + 1);\n            if (brukDusjteller) {\n                oppdaterDusjTeller();\n            } else {\n                settDusjteller(0);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        oppdaterDusjTeller();\n    }, []);\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return dusjPerSekund * dusjteller;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster ? brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Klarer ikke \\xe5 beregne dusjpris\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"lVx0Oi6JIkNqhrC8t+n55NAKl7Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7a0ZBR3JDQyxDQUFJO2dCQUFDVCxTQUFTLEVBQUVqQyxxRUFBVzs7Ozs7Ozs7b0JBQ3pCSSxZQUFZLEdBQ1hNLGNBQWMsd0VBQ1hpQyxDQUFFO3dCQUNEVixTQUFTLEVBQUVqQyxzRUFBWTs7Ozs7OztrQ0FDdEIsQ0FBYSxlQUVkLE1BQWMsQ0FGRThCLHVCQUF1QixHQUFHYyxjQUFjLENBQ3hELENBQU8sU0FDUCxDQUFnQjs4RkFFZkQsQ0FBQTt3QkFDRFYsU0FBUyxFQUFFakMsc0VBQVk7Ozs7Ozs7a0NBQ3RCLENBQWMsZ0JBRWYsTUFBc0IsQ0FGTEksWUFBWSxDQUFDd0MsY0FBYyxDQUM1QyxDQUFPLFNBQ1AsQ0FBd0I7OEZBR3pCRCxDQUFBO3dCQUFDVixTQUFTLEVBQUVqQyxzRUFBWTs7Ozs7OztrQ0FBRSxDQUE4Qjs7MEZBRTNENkMsQ0FBQTs7Ozs7Ozs7NEJBQUMsQ0FDQzs0QkFBQyxDQUFHO2lHQUNMQyxDQUFDO2dDQUNBTCxJQUFJLEVBQ0YsQ0FBOEQ7Ozs7Ozs7MENBRWpFLENBRUQ7OzRCQUFLLENBQUc7NEJBQUMsQ0FFWDs7Ozs7a0ZBRURNLENBQU07Ozs7Ozs7O29CQUFDLENBQ0s7eUZBQUNELENBQUM7d0JBQUNMLElBQUksRUFBRSxDQUFxQzs7Ozs7OztrQ0FBRSxDQUFPOzt5RkFDakVPLENBQUU7Ozs7Ozs7O29CQUNELENBQVUsZUFBbUN6QyxNQUU5QyxDQUZhRCxhQUFhLEVBQUMsQ0FBaUIsb0JBRTNDLE1BQXNCLENBRnVCQyxRQUFRLENBQUNxQyxjQUFjLENBQ3BFLENBQU8sU0FDUCxDQUFzQjs7Ozs7QUFJaEMsQ0FBQztHQWpHdUIzQyxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgdmVkbGlrZWhvbGQgPSB0cnVlO1xuICBjb25zdCBbZHVzamVuS29zdGVyLCBzZXR0RHVzamVuS29zdGVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IEtXaF9mb3JFbkR1c2ogPSA2LjU7XG4gIGNvbnN0IG5ldHRsZWllID0gMC41O1xuXG4gIGNvbnN0IFtkdXNqdGVsbGVyLCBzZXR0RHVzanRlbGxlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JydWtEdXNqdGVsbGVyLCBzZXR0QnJ1a0R1c2p0ZWxsZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZGFnID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRvID0gaWRhZy50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7XG4gICAgY29uc3QgdGltZSA9IChcIjBcIiArIGlkYWcuZ2V0SG91cnMoKSkuc2xpY2UoLTIpO1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vbm9yd2F5LXBvd2VyLmZmYWlsLndpbi8/em9uZT1OTzEmZGF0ZT0ke2lkYWdcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnN1YnN0cigwLCAxMCl9YFxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCB0aW1la2V5ID0gZGF0byArIFwiVFwiICsgdGltZSArIFwiOjAwOjAwKzAxOjAwXCI7XG4gICAgICAgIGNvbnN0IHRpbWVzcHJpcyA9IGRhdGFbdGltZWtleV07XG5cbiAgICAgICAgc2V0dER1c2plbktvc3RlcihcbiAgICAgICAgICB0aW1lc3ByaXMuTk9LX3Blcl9rV2ggKiBLV2hfZm9yRW5EdXNqICsgS1doX2ZvckVuRHVzaiAqIG5ldHRsZWllXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9wcGRhdGVyRHVzalRlbGxlciA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldHREdXNqdGVsbGVyKGR1c2p0ZWxsZXIgKyAxKTtcblxuICAgICAgaWYgKGJydWtEdXNqdGVsbGVyKSB7XG4gICAgICAgIG9wcGRhdGVyRHVzalRlbGxlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dER1c2p0ZWxsZXIoMCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvcHBkYXRlckR1c2pUZWxsZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1c2pQZXJTZWt1bmQgPSBkdXNqZW5Lb3N0ZXIgLyAxMCAvIDYwO1xuICAgIHJldHVybiBkdXNqUGVyU2VrdW5kICogZHVzanRlbGxlcjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2BIdmEga29zdGVyIGVuIGR1c2o/YH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSHZhIGtvc3RlciBlbiBkdXNqP1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtkdXNqZW5Lb3N0ZXIgPyAoXG4gICAgICAgICAgYnJ1a0R1c2p0ZWxsZXIgPyAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICA+e2BEdSBoYXIgYnJ1a3QgJHtiZXJlZ25EdXNqdGVsbGVySUtyb25lcigpLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgICBcIm5vLU5PXCJcbiAgICAgICAgICAgICl9IGtyIHDDpSDDpSBkdXNqZWB9PC9oMT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgPntgRHVzamVuIGtvc3RlciAke2R1c2plbktvc3Rlci50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICAgICApfSBrciBww6Ugw7hzdGxhbmRldCAoTk8xKWB9PC9oMT5cbiAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5LbGFyZXIgaWtrZSDDpSBiZXJlZ25lIGR1c2pwcmlzPC9oMT5cbiAgICAgICAgKX1cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2V7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm5vcmRwb29sZ3JvdXAuY29tL3RoZS1wb3dlci1tYXJrZXQvQmlkZGluZy1hcmVhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICBmb3IgaW5mb3JtYXNqb24gb20gc29uZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIFBvd2VyZWQgYnkgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vaGVubmluZ2hhYWtvbnNlblwifT5IZW5uaW5nPC9hPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2BCYXNlcnQgcMOlICR7S1doX2ZvckVuRHVzan0gS1doIHBlciBkdXNqIG9nICR7bmV0dGxlaWUudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICl9IGtyIHBlciBLV2ggaSBuZXR0bGVpZWB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJzdHlsZXMiLCJIb21lIiwidmVkbGlrZWhvbGQiLCJ1bmRlZmluZWQiLCJkdXNqZW5Lb3N0ZXIiLCJzZXR0RHVzamVuS29zdGVyIiwiS1doX2ZvckVuRHVzaiIsIm5ldHRsZWllIiwiZHVzanRlbGxlciIsInNldHREdXNqdGVsbGVyIiwiYnJ1a0R1c2p0ZWxsZXIiLCJzZXR0QnJ1a0R1c2p0ZWxsZXIiLCJpZGFnIiwiRGF0ZSIsImRhdG8iLCJ0b0lTT1N0cmluZyIsInN1YnN0ciIsInRpbWUiLCJnZXRIb3VycyIsInNsaWNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRpbWVrZXkiLCJ0aW1lc3ByaXMiLCJOT0tfcGVyX2tXaCIsIm9wcGRhdGVyRHVzalRlbGxlciIsInNldFRpbWVvdXQiLCJiZXJlZ25EdXNqdGVsbGVySUtyb25lciIsImR1c2pQZXJTZWt1bmQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwidG9Mb2NhbGVTdHJpbmciLCJwIiwiYSIsImZvb3RlciIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});