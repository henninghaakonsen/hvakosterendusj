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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), henter = ref[0], settHenter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), feilmelding = ref1[0], settFeilmelding = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref2[0], settDusjenKoster = ref2[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref3[0], settDusjteller = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref4[0], settBrukDusjteller = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        settHenter(true);\n        settFeilmelding(undefined);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n            settHenter(false);\n        }).catch(function() {\n            settFeilmelding(\"Klarer ikke \\xe5 beregne dusjpris\");\n        });\n    }, []);\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startStopTimer = function() {\n        if (!timer.current) {\n            settBrukDusjteller(true);\n            timer.current = setInterval(function() {\n                settDusjteller(function(prevstate) {\n                    return prevstate + 1;\n                });\n            }, 1000);\n        } else {\n            settBrukDusjteller(false);\n            settDusjteller(0);\n            clearInterval(timer.current);\n            timer.current = null;\n        }\n    };\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return (dusjPerSekund * dusjteller).toFixed(2);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 61,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    henter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henter str\\xf8mpriser...\"\n                    }),\n                    feilmelding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        },\n                        __self: this,\n                        children: feilmelding\n                    }),\n                    dusjenKoster && !henter && (brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje i \").concat(dusjteller < 60 ? \"\".concat(dusjteller, \" sekunder\") : \"\".concat(Math.round(dusjteller / 60), \" minutter\"))\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toFixed(2).toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    })),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 104,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 105,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"kvmJNWX9PQ4PU5aznYXoxhalmBI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUssQ0FBQzdDLFVBQVUsR0FBRyxFQUFFLEdBQUUsQ0FBUzs4RkFHN0N5QyxDQUFFO3dCQUNEVixTQUFTLEVBQUUxQyxzRUFBWTt3QkFDdkJxRCxPQUFPLEVBQUVwQixjQUFjOzs7Ozs7O2tDQUN0QixDQUFjLGdCQUVVLE1BQXNCLENBRjlCMUIsWUFBWSxDQUM1QmlDLE9BQU8sQ0FBQyxDQUFDLEVBQ1RjLGNBQWMsQ0FBQyxDQUFPLFNBQUUsQ0FBd0I7OzBGQUVwREcsQ0FBRDs7Ozs7Ozs7NEJBQUMsQ0FDQzs0QkFBQyxDQUFHO2lHQUNMQyxDQUFDO2dDQUNBUixJQUFJLEVBQ0YsQ0FBOEQ7Ozs7Ozs7MENBRWpFLENBRUQ7OzRCQUFLLENBQUc7NEJBQUMsQ0FFWDs7Ozs7a0ZBRURTLENBQU07Ozs7Ozs7O29CQUFDLENBQ0s7eUZBQUNELENBQUM7d0JBQUNSLElBQUksRUFBRSxDQUFxQzs7Ozs7OztrQ0FBRSxDQUFPOzt5RkFDakVVLENBQUU7Ozs7Ozs7O29CQUNELENBQVUsZUFBbUNsRCxNQUU5QyxDQUZhRCxhQUFhLEVBQUMsQ0FBaUIsb0JBRTNDLE1BQXNCLENBRnVCQyxRQUFRLENBQUM0QyxjQUFjLENBQ3BFLENBQU8sU0FDUCxDQUFzQjs7Ozs7QUFJaEMsQ0FBQztHQTNHdUJyRCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaGVudGVyLCBzZXR0SGVudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZlaWxtZWxkaW5nLCBzZXR0RmVpbG1lbGRpbmddID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2R1c2plbktvc3Rlciwgc2V0dER1c2plbktvc3Rlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBLV2hfZm9yRW5EdXNqID0gNi41O1xuICBjb25zdCBuZXR0bGVpZSA9IDAuNTtcblxuICBjb25zdCBbZHVzanRlbGxlciwgc2V0dER1c2p0ZWxsZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFticnVrRHVzanRlbGxlciwgc2V0dEJydWtEdXNqdGVsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkYWcgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdG8gPSBpZGFnLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICBjb25zdCB0aW1lID0gKFwiMFwiICsgaWRhZy5nZXRIb3VycygpKS5zbGljZSgtMik7XG4gICAgc2V0dEhlbnRlcih0cnVlKTtcbiAgICBzZXR0RmVpbG1lbGRpbmcodW5kZWZpbmVkKTtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly91cy1jZW50cmFsMS1odmFrb3N0ZXJlbmR1c2otYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvaGVudF9kYWdlbnNfc3Ryb21wcmlzZXJcIlxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCB0aW1la2V5ID0gZGF0byArIFwiVFwiICsgdGltZSArIFwiOjAwOjAwKzAxOjAwXCI7XG4gICAgICAgIGNvbnN0IHRpbWVzcHJpcyA9IGRhdGFbdGltZWtleV07XG5cbiAgICAgICAgc2V0dER1c2plbktvc3RlcihcbiAgICAgICAgICB0aW1lc3ByaXMuTk9LX3Blcl9rV2ggKiBLV2hfZm9yRW5EdXNqICsgS1doX2ZvckVuRHVzaiAqIG5ldHRsZWllXG4gICAgICAgICk7XG4gICAgICAgIHNldHRIZW50ZXIoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldHRGZWlsbWVsZGluZyhcIktsYXJlciBpa2tlIMOlIGJlcmVnbmUgZHVzanByaXNcIik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdGFydFN0b3BUaW1lciA9ICgpID0+IHtcbiAgICBpZiAoIXRpbWVyLmN1cnJlbnQpIHtcbiAgICAgIHNldHRCcnVrRHVzanRlbGxlcih0cnVlKTtcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldHREdXNqdGVsbGVyKHByZXZzdGF0ZSA9PiBwcmV2c3RhdGUgKyAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXR0QnJ1a0R1c2p0ZWxsZXIoZmFsc2UpO1xuICAgICAgc2V0dER1c2p0ZWxsZXIoMCk7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyLmN1cnJlbnQpO1xuICAgICAgdGltZXIuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1c2pQZXJTZWt1bmQgPSBkdXNqZW5Lb3N0ZXIgLyAxMCAvIDYwO1xuICAgIHJldHVybiAoZHVzalBlclNla3VuZCAqIGR1c2p0ZWxsZXIpLnRvRml4ZWQoMik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgSHZhIGtvc3RlciBlbiBkdXNqP2B9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkh2YSBrb3N0ZXIgZW4gZHVzaj9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7aGVudGVyICYmIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SGVudGVyIHN0csO4bXByaXNlci4uLjwvaDE+fVxuICAgICAgICB7ZmVpbG1lbGRpbmcgJiYgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZmVpbG1lbGRpbmd9PC9oMT59XG4gICAgICAgIHtkdXNqZW5Lb3N0ZXIgJiZcbiAgICAgICAgICAhaGVudGVyICYmXG4gICAgICAgICAgKGJydWtEdXNqdGVsbGVyID8gKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFN0b3BUaW1lcn1cbiAgICAgICAgICAgID57YER1IGhhciBicnVrdCAke2JlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyKCkudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICAgICAgKX0ga3IgcMOlIMOlIGR1c2plIGkgJHtcbiAgICAgICAgICAgICAgZHVzanRlbGxlciA8IDYwXG4gICAgICAgICAgICAgICAgPyBgJHtkdXNqdGVsbGVyfSBzZWt1bmRlcmBcbiAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoZHVzanRlbGxlciAvIDYwKX0gbWludXR0ZXJgXG4gICAgICAgICAgICB9YH08L2gxPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0U3RvcFRpbWVyfVxuICAgICAgICAgICAgPntgRHVzamVuIGtvc3RlciAke2R1c2plbktvc3RlclxuICAgICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcoXCJuby1OT1wiKX0ga3IgcMOlIMO4c3RsYW5kZXQgKE5PMSlgfTwvaDE+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNle1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5ub3JkcG9vbGdyb3VwLmNvbS90aGUtcG93ZXItbWFya2V0L0JpZGRpbmctYXJlYXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGhlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgZm9yIGluZm9ybWFzam9uIG9tIHNvbmVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBQb3dlcmVkIGJ5IDxhIGhyZWY9e1wiaHR0cHM6Ly9naXRodWIuY29tL2hlbm5pbmdoYWFrb25zZW5cIn0+SGVubmluZzwvYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtgQmFzZXJ0IHDDpSAke0tXaF9mb3JFbkR1c2p9IEtXaCBwZXIgZHVzaiBvZyAke25ldHRsZWllLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICApfSBrciBwZXIgS1doIGkgbmV0dGxlaWVgfVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIZWFkIiwic3R5bGVzIiwiSG9tZSIsImhlbnRlciIsInNldHRIZW50ZXIiLCJ1bmRlZmluZWQiLCJmZWlsbWVsZGluZyIsInNldHRGZWlsbWVsZGluZyIsImR1c2plbktvc3RlciIsInNldHREdXNqZW5Lb3N0ZXIiLCJLV2hfZm9yRW5EdXNqIiwibmV0dGxlaWUiLCJkdXNqdGVsbGVyIiwic2V0dER1c2p0ZWxsZXIiLCJicnVrRHVzanRlbGxlciIsInNldHRCcnVrRHVzanRlbGxlciIsImlkYWciLCJEYXRlIiwiZGF0byIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwidGltZSIsImdldEhvdXJzIiwic2xpY2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGltZWtleSIsInRpbWVzcHJpcyIsIk5PS19wZXJfa1doIiwiY2F0Y2giLCJ0aW1lciIsInN0YXJ0U3RvcFRpbWVyIiwiY3VycmVudCIsInNldEludGVydmFsIiwicHJldnN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsImJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyIiwiZHVzalBlclNla3VuZCIsInRvRml4ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwib25DbGljayIsInRvTG9jYWxlU3RyaW5nIiwiTWF0aCIsInJvdW5kIiwicCIsImEiLCJmb290ZXIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});