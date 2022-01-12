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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), henter = ref[0], settHenter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"undefined\"), feilmelding = ref1[0], settFeilmelding = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref2[0], settDusjenKoster = ref2[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref3[0], settDusjteller = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref4[0], settBrukDusjteller = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        settHenter(true);\n        //settFeilmelding(undefined);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n            settHenter(false);\n        }).catch(function() {\n            settFeilmelding(\"Klarer ikke \\xe5 beregne dusjpris\");\n        });\n    }, []);\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startStopTimer = function() {\n        if (!timer.current) {\n            settBrukDusjteller(true);\n            timer.current = setInterval(function() {\n                settDusjteller(function(prevstate) {\n                    return prevstate + 1;\n                });\n            }, 1000);\n        } else {\n            settBrukDusjteller(false);\n            settDusjteller(0);\n            clearInterval(timer.current);\n            timer.current = null;\n        }\n    };\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return (dusjPerSekund * dusjteller).toFixed(2);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 61,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    henter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henter str\\xf8mpriser...\"\n                    }),\n                    feilmelding !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: feilmelding\n                    }),\n                    dusjenKoster && !henter && (brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje i \").concat(dusjteller < 60 ? \"\".concat(dusjteller, \" sekunder\") : \"\".concat(Math.round(dusjteller / 60), \" minutter\"))\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toFixed(2).toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    })),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 106,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 107,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 108,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"FSqJV/TgF9IKHmW90ElXqM2dC58=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUssQ0FBQzdDLFVBQVUsR0FBRyxFQUFFLEdBQUUsQ0FBUzs4RkFHN0N5QyxDQUFFO3dCQUNEVixTQUFTLEVBQUUxQyxzRUFBWTt3QkFDdkJxRCxPQUFPLEVBQUVwQixjQUFjOzs7Ozs7O2tDQUN0QixDQUFjLGdCQUVVLE1BQXNCLENBRjlCMUIsWUFBWSxDQUM1QmlDLE9BQU8sQ0FBQyxDQUFDLEVBQ1RjLGNBQWMsQ0FBQyxDQUFPLFNBQUUsQ0FBd0I7OzBGQUVwREcsQ0FBRDs7Ozs7Ozs7NEJBQUMsQ0FDQzs0QkFBQyxDQUFHO2lHQUNMQyxDQUFDO2dDQUNBUixJQUFJLEVBQ0YsQ0FBOEQ7Ozs7Ozs7MENBRWpFLENBRUQ7OzRCQUFLLENBQUc7NEJBQUMsQ0FFWDs7Ozs7a0ZBRURTLENBQU07Ozs7Ozs7O29CQUFDLENBQ0s7eUZBQUNELENBQUM7d0JBQUNSLElBQUksRUFBRSxDQUFxQzs7Ozs7OztrQ0FBRSxDQUFPOzt5RkFDakVVLENBQUU7Ozs7Ozs7O29CQUNELENBQVUsZUFBbUNsRCxNQUU5QyxDQUZhRCxhQUFhLEVBQUMsQ0FBaUIsb0JBRTNDLE1BQXNCLENBRnVCQyxRQUFRLENBQUM0QyxjQUFjLENBQ3BFLENBQU8sU0FDUCxDQUFzQjs7Ozs7QUFJaEMsQ0FBQztHQTdHdUJyRCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaGVudGVyLCBzZXR0SGVudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZlaWxtZWxkaW5nLCBzZXR0RmVpbG1lbGRpbmddID0gdXNlU3RhdGUoXCJ1bmRlZmluZWRcIik7XG4gIGNvbnN0IFtkdXNqZW5Lb3N0ZXIsIHNldHREdXNqZW5Lb3N0ZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgS1doX2ZvckVuRHVzaiA9IDYuNTtcbiAgY29uc3QgbmV0dGxlaWUgPSAwLjU7XG5cbiAgY29uc3QgW2R1c2p0ZWxsZXIsIHNldHREdXNqdGVsbGVyXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYnJ1a0R1c2p0ZWxsZXIsIHNldHRCcnVrRHVzanRlbGxlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZGFnID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRvID0gaWRhZy50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7XG4gICAgY29uc3QgdGltZSA9IChcIjBcIiArIGlkYWcuZ2V0SG91cnMoKSkuc2xpY2UoLTIpO1xuICAgIHNldHRIZW50ZXIodHJ1ZSk7XG4gICAgLy9zZXR0RmVpbG1lbGRpbmcodW5kZWZpbmVkKTtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly91cy1jZW50cmFsMS1odmFrb3N0ZXJlbmR1c2otYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvaGVudF9kYWdlbnNfc3Ryb21wcmlzZXJcIlxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCB0aW1la2V5ID0gZGF0byArIFwiVFwiICsgdGltZSArIFwiOjAwOjAwKzAxOjAwXCI7XG4gICAgICAgIGNvbnN0IHRpbWVzcHJpcyA9IGRhdGFbdGltZWtleV07XG5cbiAgICAgICAgc2V0dER1c2plbktvc3RlcihcbiAgICAgICAgICB0aW1lc3ByaXMuTk9LX3Blcl9rV2ggKiBLV2hfZm9yRW5EdXNqICsgS1doX2ZvckVuRHVzaiAqIG5ldHRsZWllXG4gICAgICAgICk7XG4gICAgICAgIHNldHRIZW50ZXIoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldHRGZWlsbWVsZGluZyhcIktsYXJlciBpa2tlIMOlIGJlcmVnbmUgZHVzanByaXNcIik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdGFydFN0b3BUaW1lciA9ICgpID0+IHtcbiAgICBpZiAoIXRpbWVyLmN1cnJlbnQpIHtcbiAgICAgIHNldHRCcnVrRHVzanRlbGxlcih0cnVlKTtcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldHREdXNqdGVsbGVyKHByZXZzdGF0ZSA9PiBwcmV2c3RhdGUgKyAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXR0QnJ1a0R1c2p0ZWxsZXIoZmFsc2UpO1xuICAgICAgc2V0dER1c2p0ZWxsZXIoMCk7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyLmN1cnJlbnQpO1xuICAgICAgdGltZXIuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1c2pQZXJTZWt1bmQgPSBkdXNqZW5Lb3N0ZXIgLyAxMCAvIDYwO1xuICAgIHJldHVybiAoZHVzalBlclNla3VuZCAqIGR1c2p0ZWxsZXIpLnRvRml4ZWQoMik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgSHZhIGtvc3RlciBlbiBkdXNqP2B9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkh2YSBrb3N0ZXIgZW4gZHVzaj9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7aGVudGVyICYmIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SGVudGVyIHN0csO4bXByaXNlci4uLjwvaDE+fVxuICAgICAgICB7ZmVpbG1lbGRpbmcgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZmVpbG1lbGRpbmd9PC9oMT5cbiAgICAgICAgKX1cbiAgICAgICAge2R1c2plbktvc3RlciAmJlxuICAgICAgICAgICFoZW50ZXIgJiZcbiAgICAgICAgICAoYnJ1a0R1c2p0ZWxsZXIgPyAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0U3RvcFRpbWVyfVxuICAgICAgICAgICAgPntgRHUgaGFyIGJydWt0ICR7YmVyZWduRHVzanRlbGxlcklLcm9uZXIoKS50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICAgICApfSBrciBww6Ugw6UgZHVzamUgaSAke1xuICAgICAgICAgICAgICBkdXNqdGVsbGVyIDwgNjBcbiAgICAgICAgICAgICAgICA/IGAke2R1c2p0ZWxsZXJ9IHNla3VuZGVyYFxuICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChkdXNqdGVsbGVyIC8gNjApfSBtaW51dHRlcmBcbiAgICAgICAgICAgIH1gfTwvaDE+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRTdG9wVGltZXJ9XG4gICAgICAgICAgICA+e2BEdXNqZW4ga29zdGVyICR7ZHVzamVuS29zdGVyXG4gICAgICAgICAgICAgIC50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIC50b0xvY2FsZVN0cmluZyhcIm5vLU5PXCIpfSBrciBww6Ugw7hzdGxhbmRldCAoTk8xKWB9PC9oMT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2V7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm5vcmRwb29sZ3JvdXAuY29tL3RoZS1wb3dlci1tYXJrZXQvQmlkZGluZy1hcmVhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICBmb3IgaW5mb3JtYXNqb24gb20gc29uZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIFBvd2VyZWQgYnkgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vaGVubmluZ2hhYWtvbnNlblwifT5IZW5uaW5nPC9hPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2BCYXNlcnQgcMOlICR7S1doX2ZvckVuRHVzan0gS1doIHBlciBkdXNqIG9nICR7bmV0dGxlaWUudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICl9IGtyIHBlciBLV2ggaSBuZXR0bGVpZWB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkhlYWQiLCJzdHlsZXMiLCJIb21lIiwiaGVudGVyIiwic2V0dEhlbnRlciIsImZlaWxtZWxkaW5nIiwic2V0dEZlaWxtZWxkaW5nIiwidW5kZWZpbmVkIiwiZHVzamVuS29zdGVyIiwic2V0dER1c2plbktvc3RlciIsIktXaF9mb3JFbkR1c2oiLCJuZXR0bGVpZSIsImR1c2p0ZWxsZXIiLCJzZXR0RHVzanRlbGxlciIsImJydWtEdXNqdGVsbGVyIiwic2V0dEJydWtEdXNqdGVsbGVyIiwiaWRhZyIsIkRhdGUiLCJkYXRvIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJ0aW1lIiwiZ2V0SG91cnMiLCJzbGljZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aW1la2V5IiwidGltZXNwcmlzIiwiTk9LX3Blcl9rV2giLCJjYXRjaCIsInRpbWVyIiwic3RhcnRTdG9wVGltZXIiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJwcmV2c3RhdGUiLCJjbGVhckludGVydmFsIiwiYmVyZWduRHVzanRlbGxlcklLcm9uZXIiLCJkdXNqUGVyU2VrdW5kIiwidG9GaXhlZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJvbkNsaWNrIiwidG9Mb2NhbGVTdHJpbmciLCJNYXRoIiwicm91bmQiLCJwIiwiYSIsImZvb3RlciIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});