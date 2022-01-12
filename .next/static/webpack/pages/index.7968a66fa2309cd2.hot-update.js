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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), henter = ref[0], settHenter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), feilmelding = ref1[0], settFeilmelding = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref2[0], settDusjenKoster = ref2[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref3[0], settDusjteller = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref4[0], settBrukDusjteller = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        settHenter(true);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n            settHenter(false);\n        }).catch();\n    }, []);\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startStopTimer = function() {\n        if (!timer.current) {\n            settBrukDusjteller(true);\n            timer.current = setInterval(function() {\n                settDusjteller(function(prevstate) {\n                    return prevstate + 1;\n                });\n            }, 1000);\n        } else {\n            settBrukDusjteller(false);\n            settDusjteller(0);\n            clearInterval(timer.current);\n            timer.current = null;\n        }\n    };\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return (dusjPerSekund * dusjteller).toFixed(2);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    henter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henter str\\xf8mpriser...\"\n                    }),\n                    dusjenKoster && !henter && (brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje i \").concat(dusjteller < 60 ? \"\".concat(dusjteller, \" sekunder\") : \"\".concat(Math.round(dusjteller / 60), \" minutter\"))\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toFixed(2).toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    })),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 100,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 101,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"kvmJNWX9PQ4PU5aznYXoxhalmBI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUV2QjtBQUNrQjs7QUFFL0IsUUFBUSxDQUFDSyxJQUFJLEdBQUcsQ0FBQzs7SUFDOUIsR0FBSyxDQUF3QkwsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBcENNLE1BQU0sR0FBZ0JOLEdBQWUsS0FBN0JPLFVBQVUsR0FBSVAsR0FBZTtJQUM1QyxHQUFLLENBQWtDQSxJQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ1EsU0FBUyxHQUFsREMsV0FBVyxHQUFxQlQsSUFBbUIsS0FBdENVLGVBQWUsR0FBSVYsSUFBbUI7SUFDMUQsR0FBSyxDQUFvQ0EsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUNRLFNBQVMsR0FBcERHLFlBQVksR0FBc0JYLElBQW1CLEtBQXZDWSxnQkFBZ0IsR0FBSVosSUFBbUI7SUFDNUQsR0FBSyxDQUFDYSxhQUFhLEdBQUcsR0FBRztJQUN6QixHQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHO0lBRXBCLEdBQUssQ0FBZ0NkLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXhDZSxVQUFVLEdBQW9CZixJQUFXLEtBQTdCZ0IsY0FBYyxHQUFJaEIsSUFBVztJQUNoRCxHQUFLLENBQXdDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFwRGlCLGNBQWMsR0FBd0JqQixJQUFlLEtBQXJDa0Isa0JBQWtCLEdBQUlsQixJQUFlO0lBRTVEQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ2tCLElBQUksR0FBRyxHQUFHLENBQUNDLElBQUk7UUFDckIsR0FBSyxDQUFDQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csV0FBVyxHQUFHQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDNUMsR0FBSyxDQUFDQyxJQUFJLElBQUksQ0FBRyxLQUFHTCxJQUFJLENBQUNNLFFBQVEsSUFBSUMsS0FBSyxFQUFFLENBQUM7UUFDN0NuQixVQUFVLENBQUMsSUFBSTtRQUNmb0IsS0FBSyxDQUNILENBQXdGLHlGQUV2RkMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztZQUNiLEdBQUssQ0FBQ0MsT0FBTyxHQUFHWCxJQUFJLEdBQUcsQ0FBRyxLQUFHRyxJQUFJLEdBQUcsQ0FBYztZQUNsRCxHQUFLLENBQUNTLFNBQVMsR0FBR0YsSUFBSSxDQUFDQyxPQUFPO1lBRTlCcEIsZ0JBQWdCLENBQ2RxQixTQUFTLENBQUNDLFdBQVcsR0FBR3JCLGFBQWEsR0FBR0EsYUFBYSxHQUFHQyxRQUFRO1lBRWxFUCxVQUFVLENBQUMsS0FBSztRQUNsQixDQUFDLEVBQUU0QixLQUFLO0lBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0MsS0FBSyxHQUFHbEMsNkNBQU0sQ0FBQyxJQUFJO0lBQ3pCLEdBQUssQ0FBQ21DLGNBQWMsR0FBRyxRQUN6QixHQUQrQixDQUFDO1FBQzVCLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxPQUFPLEVBQUUsQ0FBQztZQUNuQnBCLGtCQUFrQixDQUFDLElBQUk7WUFDdkJrQixLQUFLLENBQUNFLE9BQU8sR0FBR0MsV0FBVyxDQUFDLFFBQ2xDLEdBRHdDLENBQUM7Z0JBQ2pDdkIsY0FBYyxDQUFDd0IsUUFBUSxDQUFSQSxTQUFTO29CQUFJQSxNQUFNLENBQU5BLFNBQVMsR0FBRyxDQUFDOztZQUMzQyxDQUFDLEVBQUUsSUFBSTtRQUNULENBQUMsTUFBTSxDQUFDO1lBQ050QixrQkFBa0IsQ0FBQyxLQUFLO1lBQ3hCRixjQUFjLENBQUMsQ0FBQztZQUNoQnlCLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDRSxPQUFPO1lBQzNCRixLQUFLLENBQUNFLE9BQU8sR0FBRyxJQUFJO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDSSx1QkFBdUIsR0FBRyxRQUNsQyxHQUR3QyxDQUFDO1FBQ3JDLEdBQUssQ0FBQ0MsYUFBYSxHQUFHaEMsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQzVDLE1BQU0sRUFBRWdDLGFBQWEsR0FBRzVCLFVBQVUsRUFBRTZCLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRTFDLDBFQUFnQjs7Ozs7Ozs7a0ZBQzdCRCxrREFBSTs7Ozs7Ozs7eUZBQ0Y2QyxDQUFLOzs7Ozs7O2tDQUFHLENBQW1COzt5RkFDM0JDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBcUI7Ozs7Ozs7O3lGQUNyREMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTtnQkFBQ1QsU0FBUyxFQUFFMUMscUVBQVc7Ozs7Ozs7O29CQUN6QkUsTUFBTSx5RUFBS2tELENBQUU7d0JBQUNWLFNBQVMsRUFBRTFDLHNFQUFZOzs7Ozs7O2tDQUFFLENBQXFCOztvQkFDM0RPLFlBQVcsS0FDVkwsTUFBTSxLQUNOVyxjQUFjLHdFQUNadUMsQ0FBRTt3QkFDRFYsU0FBUyxFQUFFMUMsc0VBQVk7d0JBQ3ZCcUQsT0FBTyxFQUFFcEIsY0FBYzs7Ozs7OztrQ0FDdEIsQ0FBYSxlQUdkdEIsTUFFNkMsQ0FMN0IyQix1QkFBdUIsR0FBR2dCLGNBQWMsQ0FDeEQsQ0FBTyxTQUNQLENBQW1CLDBCQUlwQixPQUhDM0MsVUFBVSxHQUFHLEVBQUUsR0FDVixHQUFhLE1BQVMsQ0FBcEJBLFVBQVUsRUFBQyxDQUFTLGNBQ3RCLEdBQThCLE1BQVMsQ0FBckM0QyxJQUFJLENBQUNDLEtBQUssQ0FBQzdDLFVBQVUsR0FBRyxFQUFFLEdBQUUsQ0FBUzs4RkFHN0N5QyxDQUFFO3dCQUNEVixTQUFTLEVBQUUxQyxzRUFBWTt3QkFDdkJxRCxPQUFPLEVBQUVwQixjQUFjOzs7Ozs7O2tDQUN0QixDQUFjLGdCQUVVLE1BQXNCLENBRjlCMUIsWUFBWSxDQUM1QmlDLE9BQU8sQ0FBQyxDQUFDLEVBQ1RjLGNBQWMsQ0FBQyxDQUFPLFNBQUUsQ0FBd0I7OzBGQUVwREcsQ0FBRDs7Ozs7Ozs7NEJBQUMsQ0FDQzs0QkFBQyxDQUFHO2lHQUNMQyxDQUFDO2dDQUNBUixJQUFJLEVBQ0YsQ0FBOEQ7Ozs7Ozs7MENBRWpFLENBRUQ7OzRCQUFLLENBQUc7NEJBQUMsQ0FFWDs7Ozs7a0ZBRURTLENBQU07Ozs7Ozs7O29CQUFDLENBQ0s7eUZBQUNELENBQUM7d0JBQUNSLElBQUksRUFBRSxDQUFxQzs7Ozs7OztrQ0FBRSxDQUFPOzt5RkFDakVVLENBQUU7Ozs7Ozs7O29CQUNELENBQVUsZUFBbUNsRCxNQUU5QyxDQUZhRCxhQUFhLEVBQUMsQ0FBaUIsb0JBRTNDLE1BQXNCLENBRnVCQyxRQUFRLENBQUM0QyxjQUFjLENBQ3BFLENBQU8sU0FDUCxDQUFzQjs7Ozs7QUFJaEMsQ0FBQztHQXRHdUJyRCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaGVudGVyLCBzZXR0SGVudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZlaWxtZWxkaW5nLCBzZXR0RmVpbG1lbGRpbmddID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbZHVzamVuS29zdGVyLCBzZXR0RHVzamVuS29zdGVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IEtXaF9mb3JFbkR1c2ogPSA2LjU7XG4gIGNvbnN0IG5ldHRsZWllID0gMC41O1xuXG4gIGNvbnN0IFtkdXNqdGVsbGVyLCBzZXR0RHVzanRlbGxlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2JydWtEdXNqdGVsbGVyLCBzZXR0QnJ1a0R1c2p0ZWxsZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWRhZyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0byA9IGlkYWcudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgIGNvbnN0IHRpbWUgPSAoXCIwXCIgKyBpZGFnLmdldEhvdXJzKCkpLnNsaWNlKC0yKTtcbiAgICBzZXR0SGVudGVyKHRydWUpO1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL3VzLWNlbnRyYWwxLWh2YWtvc3RlcmVuZHVzai1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9oZW50X2RhZ2Vuc19zdHJvbXByaXNlclwiXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVrZXkgPSBkYXRvICsgXCJUXCIgKyB0aW1lICsgXCI6MDA6MDArMDE6MDBcIjtcbiAgICAgICAgY29uc3QgdGltZXNwcmlzID0gZGF0YVt0aW1la2V5XTtcblxuICAgICAgICBzZXR0RHVzamVuS29zdGVyKFxuICAgICAgICAgIHRpbWVzcHJpcy5OT0tfcGVyX2tXaCAqIEtXaF9mb3JFbkR1c2ogKyBLV2hfZm9yRW5EdXNqICogbmV0dGxlaWVcbiAgICAgICAgKTtcbiAgICAgICAgc2V0dEhlbnRlcihmYWxzZSk7XG4gICAgICB9KS5jYXRjaCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdGltZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHN0YXJ0U3RvcFRpbWVyID0gKCkgPT4ge1xuICAgIGlmICghdGltZXIuY3VycmVudCkge1xuICAgICAgc2V0dEJydWtEdXNqdGVsbGVyKHRydWUpO1xuICAgICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0dER1c2p0ZWxsZXIocHJldnN0YXRlID0+IHByZXZzdGF0ZSArIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldHRCcnVrRHVzanRlbGxlcihmYWxzZSk7XG4gICAgICBzZXR0RHVzanRlbGxlcigwKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIuY3VycmVudCk7XG4gICAgICB0aW1lci5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmVyZWduRHVzanRlbGxlcklLcm9uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZHVzalBlclNla3VuZCA9IGR1c2plbktvc3RlciAvIDEwIC8gNjA7XG4gICAgcmV0dXJuIChkdXNqUGVyU2VrdW5kICogZHVzanRlbGxlcikudG9GaXhlZCgyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2BIdmEga29zdGVyIGVuIGR1c2o/YH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSHZhIGtvc3RlciBlbiBkdXNqP1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtoZW50ZXIgJiYgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5IZW50ZXIgc3Ryw7htcHJpc2VyLi4uPC9oMT59XG4gICAgICAgIHtkdXNqZW5Lb3N0ZXIgJiZcbiAgICAgICAgICAhaGVudGVyICYmXG4gICAgICAgICAgKGJydWtEdXNqdGVsbGVyID8gKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFN0b3BUaW1lcn1cbiAgICAgICAgICAgID57YER1IGhhciBicnVrdCAke2JlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyKCkudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICAgICAgKX0ga3IgcMOlIMOlIGR1c2plIGkgJHtcbiAgICAgICAgICAgICAgZHVzanRlbGxlciA8IDYwXG4gICAgICAgICAgICAgICAgPyBgJHtkdXNqdGVsbGVyfSBzZWt1bmRlcmBcbiAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoZHVzanRlbGxlciAvIDYwKX0gbWludXR0ZXJgXG4gICAgICAgICAgICB9YH08L2gxPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0U3RvcFRpbWVyfVxuICAgICAgICAgICAgPntgRHVzamVuIGtvc3RlciAke2R1c2plbktvc3RlclxuICAgICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcoXCJuby1OT1wiKX0ga3IgcMOlIMO4c3RsYW5kZXQgKE5PMSlgfTwvaDE+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNle1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5ub3JkcG9vbGdyb3VwLmNvbS90aGUtcG93ZXItbWFya2V0L0JpZGRpbmctYXJlYXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGhlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgZm9yIGluZm9ybWFzam9uIG9tIHNvbmVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBQb3dlcmVkIGJ5IDxhIGhyZWY9e1wiaHR0cHM6Ly9naXRodWIuY29tL2hlbm5pbmdoYWFrb25zZW5cIn0+SGVubmluZzwvYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtgQmFzZXJ0IHDDpSAke0tXaF9mb3JFbkR1c2p9IEtXaCBwZXIgZHVzaiBvZyAke25ldHRsZWllLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICApfSBrciBwZXIgS1doIGkgbmV0dGxlaWVgfVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIZWFkIiwic3R5bGVzIiwiSG9tZSIsImhlbnRlciIsInNldHRIZW50ZXIiLCJ1bmRlZmluZWQiLCJmZWlsbWVsZGluZyIsInNldHRGZWlsbWVsZGluZyIsImR1c2plbktvc3RlciIsInNldHREdXNqZW5Lb3N0ZXIiLCJLV2hfZm9yRW5EdXNqIiwibmV0dGxlaWUiLCJkdXNqdGVsbGVyIiwic2V0dER1c2p0ZWxsZXIiLCJicnVrRHVzanRlbGxlciIsInNldHRCcnVrRHVzanRlbGxlciIsImlkYWciLCJEYXRlIiwiZGF0byIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwidGltZSIsImdldEhvdXJzIiwic2xpY2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGltZWtleSIsInRpbWVzcHJpcyIsIk5PS19wZXJfa1doIiwiY2F0Y2giLCJ0aW1lciIsInN0YXJ0U3RvcFRpbWVyIiwiY3VycmVudCIsInNldEludGVydmFsIiwicHJldnN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsImJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyIiwiZHVzalBlclNla3VuZCIsInRvRml4ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwib25DbGljayIsInRvTG9jYWxlU3RyaW5nIiwiTWF0aCIsInJvdW5kIiwicCIsImEiLCJmb290ZXIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});