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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var vedlikehold = true;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref1[0], settDusjteller = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dusjtellerKroner = ref2[0], settDusjtellerKroner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref3[0], settBrukDusjteller = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n        });\n    }, []);\n    var oppdaterDusjTeller = function() {\n        setTimeout(function() {\n            settDusjteller(dusjteller + 1);\n            var dusjPerSekund = dusjenKoster / 10 / 60;\n            console.log(dusjPerSekund, dusjteller);\n            var kroner = dusjPerSekund * dusjteller;\n            console.log(kroner);\n            if (brukDusjteller) {\n                oppdaterDusjTeller();\n            } else {\n                settDusjteller(1);\n                settDusjtellerKroner(0);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        oppdaterDusjTeller();\n    }, []);\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return dusjPerSekund * dusjteller;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 61,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster ? brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return settBrukDusjteller(!brukDusjteller);\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return settBrukDusjteller(!brukDusjteller);\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Klarer ikke \\xe5 beregne dusjpris\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 100,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 101,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 102,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"kGeI9+tsCu1oBfT2a0d/o8w0oYY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29CQUFDLENBQ0s7eUZBQUNELENBQUM7d0JBQUNOLElBQUksRUFBRSxDQUFxQzs7Ozs7OztrQ0FBRSxDQUFPOzt5RkFDakVRLENBQUU7Ozs7Ozs7O29CQUNELENBQVUsZUFBbUMvQyxNQUU5QyxDQUZhRCxhQUFhLEVBQUMsQ0FBaUIsb0JBRTNDLE1BQXNCLENBRnVCQyxRQUFRLENBQUMyQyxjQUFjLENBQ3BFLENBQU8sU0FDUCxDQUFzQjs7Ozs7QUFJaEMsQ0FBQztHQXZHdUJqRCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgdmVkbGlrZWhvbGQgPSB0cnVlO1xuICBjb25zdCBbZHVzamVuS29zdGVyLCBzZXR0RHVzamVuS29zdGVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IEtXaF9mb3JFbkR1c2ogPSA2LjU7XG4gIGNvbnN0IG5ldHRsZWllID0gMC41O1xuXG4gIGNvbnN0IFtkdXNqdGVsbGVyLCBzZXR0RHVzanRlbGxlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2R1c2p0ZWxsZXJLcm9uZXIsIHNldHREdXNqdGVsbGVyS3JvbmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYnJ1a0R1c2p0ZWxsZXIsIHNldHRCcnVrRHVzanRlbGxlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZGFnID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRvID0gaWRhZy50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7XG4gICAgY29uc3QgdGltZSA9IChcIjBcIiArIGlkYWcuZ2V0SG91cnMoKSkuc2xpY2UoLTIpO1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL3VzLWNlbnRyYWwxLWh2YWtvc3RlcmVuZHVzai1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9oZW50X2RhZ2Vuc19zdHJvbXByaXNlclwiXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVrZXkgPSBkYXRvICsgXCJUXCIgKyB0aW1lICsgXCI6MDA6MDArMDE6MDBcIjtcbiAgICAgICAgY29uc3QgdGltZXNwcmlzID0gZGF0YVt0aW1la2V5XTtcblxuICAgICAgICBzZXR0RHVzamVuS29zdGVyKFxuICAgICAgICAgIHRpbWVzcHJpcy5OT0tfcGVyX2tXaCAqIEtXaF9mb3JFbkR1c2ogKyBLV2hfZm9yRW5EdXNqICogbmV0dGxlaWVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb3BwZGF0ZXJEdXNqVGVsbGVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0dER1c2p0ZWxsZXIoZHVzanRlbGxlciArIDEpO1xuICAgICAgY29uc3QgZHVzalBlclNla3VuZCA9IGR1c2plbktvc3RlciAvIDEwIC8gNjA7XG4gICAgICBjb25zb2xlLmxvZyhkdXNqUGVyU2VrdW5kLCBkdXNqdGVsbGVyKTtcbiAgICAgIGNvbnN0IGtyb25lciA9IGR1c2pQZXJTZWt1bmQgKiBkdXNqdGVsbGVyO1xuXG4gICAgICBjb25zb2xlLmxvZyhrcm9uZXIpO1xuICAgICAgaWYgKGJydWtEdXNqdGVsbGVyKSB7XG4gICAgICAgIG9wcGRhdGVyRHVzalRlbGxlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dER1c2p0ZWxsZXIoMSk7XG4gICAgICAgIHNldHREdXNqdGVsbGVyS3JvbmVyKDApO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb3BwZGF0ZXJEdXNqVGVsbGVyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBiZXJlZ25EdXNqdGVsbGVySUtyb25lciA9ICgpID0+IHtcbiAgICBjb25zdCBkdXNqUGVyU2VrdW5kID0gZHVzamVuS29zdGVyIC8gMTAgLyA2MDtcbiAgICByZXR1cm4gZHVzalBlclNla3VuZCAqIGR1c2p0ZWxsZXI7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgSHZhIGtvc3RlciBlbiBkdXNqP2B9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkh2YSBrb3N0ZXIgZW4gZHVzaj9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7ZHVzamVuS29zdGVyID8gKFxuICAgICAgICAgIGJydWtEdXNqdGVsbGVyID8gKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXR0QnJ1a0R1c2p0ZWxsZXIoIWJydWtEdXNqdGVsbGVyKX1cbiAgICAgICAgICAgID57YER1IGhhciBicnVrdCAke2JlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyKCkudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICAgICAgKX0ga3IgcMOlIMOlIGR1c2plYH08L2gxPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldHRCcnVrRHVzanRlbGxlcighYnJ1a0R1c2p0ZWxsZXIpfVxuICAgICAgICAgICAgPntgRHVzamVuIGtvc3RlciAke2R1c2plbktvc3Rlci50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICAgICApfSBrciBww6Ugw7hzdGxhbmRldCAoTk8xKWB9PC9oMT5cbiAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5LbGFyZXIgaWtrZSDDpSBiZXJlZ25lIGR1c2pwcmlzPC9oMT5cbiAgICAgICAgKX1cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2V7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm5vcmRwb29sZ3JvdXAuY29tL3RoZS1wb3dlci1tYXJrZXQvQmlkZGluZy1hcmVhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICBmb3IgaW5mb3JtYXNqb24gb20gc29uZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIFBvd2VyZWQgYnkgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vaGVubmluZ2hhYWtvbnNlblwifT5IZW5uaW5nPC9hPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2BCYXNlcnQgcMOlICR7S1doX2ZvckVuRHVzan0gS1doIHBlciBkdXNqIG9nICR7bmV0dGxlaWUudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICl9IGtyIHBlciBLV2ggaSBuZXR0bGVpZWB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJzdHlsZXMiLCJIb21lIiwidmVkbGlrZWhvbGQiLCJ1bmRlZmluZWQiLCJkdXNqZW5Lb3N0ZXIiLCJzZXR0RHVzamVuS29zdGVyIiwiS1doX2ZvckVuRHVzaiIsIm5ldHRsZWllIiwiZHVzanRlbGxlciIsInNldHREdXNqdGVsbGVyIiwiZHVzanRlbGxlcktyb25lciIsInNldHREdXNqdGVsbGVyS3JvbmVyIiwiYnJ1a0R1c2p0ZWxsZXIiLCJzZXR0QnJ1a0R1c2p0ZWxsZXIiLCJpZGFnIiwiRGF0ZSIsImRhdG8iLCJ0b0lTT1N0cmluZyIsInN1YnN0ciIsInRpbWUiLCJnZXRIb3VycyIsInNsaWNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRpbWVrZXkiLCJ0aW1lc3ByaXMiLCJOT0tfcGVyX2tXaCIsIm9wcGRhdGVyRHVzalRlbGxlciIsInNldFRpbWVvdXQiLCJkdXNqUGVyU2VrdW5kIiwiY29uc29sZSIsImxvZyIsImtyb25lciIsImJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsIm9uQ2xpY2siLCJ0b0xvY2FsZVN0cmluZyIsInAiLCJhIiwiZm9vdGVyIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});