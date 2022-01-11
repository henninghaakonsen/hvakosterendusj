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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var vedlikehold = true;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref1[0], settDusjteller = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dusjtellerKroner = ref2[0], settDusjtellerKroner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref3[0], settBrukDusjteller = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n        });\n    }, []);\n    var dusjtellerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dusjteller);\n    dusjtellerRef.current;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            var dusjPerSekund = dusjenKoster / 10 / 60;\n            console.log(dusjPerSekund, dusjteller);\n            var kroner = dusjPerSekund * dusjteller;\n            console.log(kroner);\n            settDusjteller(dusjteller + 1);\n            settDusjtellerKroner(kroner);\n            if (brukDusjteller) {\n                oppdaterDusjTeller();\n            } else {\n                settDusjteller(1);\n                settDusjtellerKroner(0);\n            }\n        }, 1000);\n        return;\n    }, [\n        brukDusjteller\n    ]);\n    var oppdaterDusjTeller = function() {\n        setTimeout(function() {\n            var dusjPerSekund = dusjenKoster / 10 / 60;\n            console.log(dusjPerSekund, dusjteller);\n            var kroner = dusjPerSekund * dusjteller;\n            console.log(kroner);\n            settDusjteller(dusjteller + 1);\n            settDusjtellerKroner(kroner);\n            if (brukDusjteller) {\n                oppdaterDusjTeller();\n            } else {\n                settDusjteller(1);\n                settDusjtellerKroner(0);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        oppdaterDusjTeller();\n    }, []);\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return dusjPerSekund * dusjtellerRef.current;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 85,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster ? brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return settBrukDusjteller(!brukDusjteller);\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje (\").concat(dusjteller, \" sekunder)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return settBrukDusjteller(!brukDusjteller);\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Klarer ikke \\xe5 beregne dusjpris\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 112,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 124,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 126,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"7XVJ8j+R2kfJlVSDlg6nzIrjYOw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB2ZWRsaWtlaG9sZCA9IHRydWU7XG4gIGNvbnN0IFtkdXNqZW5Lb3N0ZXIsIHNldHREdXNqZW5Lb3N0ZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgS1doX2ZvckVuRHVzaiA9IDYuNTtcbiAgY29uc3QgbmV0dGxlaWUgPSAwLjU7XG5cbiAgY29uc3QgW2R1c2p0ZWxsZXIsIHNldHREdXNqdGVsbGVyXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZHVzanRlbGxlcktyb25lciwgc2V0dER1c2p0ZWxsZXJLcm9uZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFticnVrRHVzanRlbGxlciwgc2V0dEJydWtEdXNqdGVsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkYWcgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdG8gPSBpZGFnLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICBjb25zdCB0aW1lID0gKFwiMFwiICsgaWRhZy5nZXRIb3VycygpKS5zbGljZSgtMik7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtaHZha29zdGVyZW5kdXNqLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2hlbnRfZGFnZW5zX3N0cm9tcHJpc2VyXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgdGltZWtleSA9IGRhdG8gKyBcIlRcIiArIHRpbWUgKyBcIjowMDowMCswMTowMFwiO1xuICAgICAgICBjb25zdCB0aW1lc3ByaXMgPSBkYXRhW3RpbWVrZXldO1xuXG4gICAgICAgIHNldHREdXNqZW5Lb3N0ZXIoXG4gICAgICAgICAgdGltZXNwcmlzLk5PS19wZXJfa1doICogS1doX2ZvckVuRHVzaiArIEtXaF9mb3JFbkR1c2ogKiBuZXR0bGVpZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBkdXNqdGVsbGVyUmVmID0gdXNlUmVmKGR1c2p0ZWxsZXIpO1xuICBkdXNqdGVsbGVyUmVmLmN1cnJlbnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xuICAgICAgY29uc3QgZHVzalBlclNla3VuZCA9IGR1c2plbktvc3RlciAvIDEwIC8gNjA7XG4gICAgICBjb25zb2xlLmxvZyhkdXNqUGVyU2VrdW5kLCBkdXNqdGVsbGVyKTtcbiAgICAgIGNvbnN0IGtyb25lciA9IGR1c2pQZXJTZWt1bmQgKiBkdXNqdGVsbGVyO1xuXG4gICAgICBjb25zb2xlLmxvZyhrcm9uZXIpO1xuICAgICAgc2V0dER1c2p0ZWxsZXIoZHVzanRlbGxlciArIDEpO1xuICAgICAgc2V0dER1c2p0ZWxsZXJLcm9uZXIoa3JvbmVyKTtcbiAgICAgIGlmIChicnVrRHVzanRlbGxlcikge1xuICAgICAgICBvcHBkYXRlckR1c2pUZWxsZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHREdXNqdGVsbGVyKDEpO1xuICAgICAgICBzZXR0RHVzanRlbGxlcktyb25lcigwKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuXG4gICAgcmV0dXJuIFxuICB9LCBbYnJ1a0R1c2p0ZWxsZXJdKVxuXG4gIGNvbnN0IG9wcGRhdGVyRHVzalRlbGxlciA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGR1c2pQZXJTZWt1bmQgPSBkdXNqZW5Lb3N0ZXIgLyAxMCAvIDYwO1xuICAgICAgY29uc29sZS5sb2coZHVzalBlclNla3VuZCwgZHVzanRlbGxlcik7XG4gICAgICBjb25zdCBrcm9uZXIgPSBkdXNqUGVyU2VrdW5kICogZHVzanRlbGxlcjtcblxuICAgICAgY29uc29sZS5sb2coa3JvbmVyKTtcbiAgICAgIHNldHREdXNqdGVsbGVyKGR1c2p0ZWxsZXIgKyAxKTtcbiAgICAgIHNldHREdXNqdGVsbGVyS3JvbmVyKGtyb25lcik7XG4gICAgICBpZiAoYnJ1a0R1c2p0ZWxsZXIpIHtcbiAgICAgICAgb3BwZGF0ZXJEdXNqVGVsbGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0RHVzanRlbGxlcigxKTtcbiAgICAgICAgc2V0dER1c2p0ZWxsZXJLcm9uZXIoMCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvcHBkYXRlckR1c2pUZWxsZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1c2pQZXJTZWt1bmQgPSBkdXNqZW5Lb3N0ZXIgLyAxMCAvIDYwO1xuICAgIHJldHVybiBkdXNqUGVyU2VrdW5kICogZHVzanRlbGxlclJlZi5jdXJyZW50O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YEh2YSBrb3N0ZXIgZW4gZHVzaj9gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIdmEga29zdGVyIGVuIGR1c2o/XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge2R1c2plbktvc3RlciA/IChcbiAgICAgICAgICBicnVrRHVzanRlbGxlciA/IChcbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0dEJydWtEdXNqdGVsbGVyKCFicnVrRHVzanRlbGxlcil9XG4gICAgICAgICAgICA+e2BEdSBoYXIgYnJ1a3QgJHtiZXJlZ25EdXNqdGVsbGVySUtyb25lcigpLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgICBcIm5vLU5PXCJcbiAgICAgICAgICAgICl9IGtyIHDDpSDDpSBkdXNqZSAoJHtkdXNqdGVsbGVyfSBzZWt1bmRlcilgfTwvaDE+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0dEJydWtEdXNqdGVsbGVyKCFicnVrRHVzanRlbGxlcil9XG4gICAgICAgICAgICA+e2BEdXNqZW4ga29zdGVyICR7ZHVzamVuS29zdGVyLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgICBcIm5vLU5PXCJcbiAgICAgICAgICAgICl9IGtyIHDDpSDDuHN0bGFuZGV0IChOTzEpYH08L2gxPlxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PktsYXJlciBpa2tlIMOlIGJlcmVnbmUgZHVzanByaXM8L2gxPlxuICAgICAgICApfVxuICAgICAgICA8cD5cbiAgICAgICAgICBTZXtcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubm9yZHBvb2xncm91cC5jb20vdGhlLXBvd2VyLW1hcmtldC9CaWRkaW5nLWFyZWFzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBoZXJcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgIGZvciBpbmZvcm1hc2pvbiBvbSBzb25lci5cbiAgICAgICAgPC9wPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgUG93ZXJlZCBieSA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9oZW5uaW5naGFha29uc2VuXCJ9Pkhlbm5pbmc8L2E+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7YEJhc2VydCBww6UgJHtLV2hfZm9yRW5EdXNqfSBLV2ggcGVyIGR1c2ogb2cgJHtuZXR0bGVpZS50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICBcIm5vLU5PXCJcbiAgICAgICAgKX0ga3IgcGVyIEtXaCBpIG5ldHRsZWllYH1cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSGVhZCIsInN0eWxlcyIsIkhvbWUiLCJ2ZWRsaWtlaG9sZCIsInVuZGVmaW5lZCIsImR1c2plbktvc3RlciIsInNldHREdXNqZW5Lb3N0ZXIiLCJLV2hfZm9yRW5EdXNqIiwibmV0dGxlaWUiLCJkdXNqdGVsbGVyIiwic2V0dER1c2p0ZWxsZXIiLCJkdXNqdGVsbGVyS3JvbmVyIiwic2V0dER1c2p0ZWxsZXJLcm9uZXIiLCJicnVrRHVzanRlbGxlciIsInNldHRCcnVrRHVzanRlbGxlciIsImlkYWciLCJEYXRlIiwiZGF0byIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwidGltZSIsImdldEhvdXJzIiwic2xpY2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGltZWtleSIsInRpbWVzcHJpcyIsIk5PS19wZXJfa1doIiwiZHVzanRlbGxlclJlZiIsImN1cnJlbnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZHVzalBlclNla3VuZCIsImNvbnNvbGUiLCJsb2ciLCJrcm9uZXIiLCJvcHBkYXRlckR1c2pUZWxsZXIiLCJzZXRUaW1lb3V0IiwiYmVyZWduRHVzanRlbGxlcklLcm9uZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwib25DbGljayIsInRvTG9jYWxlU3RyaW5nIiwicCIsImEiLCJmb290ZXIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});