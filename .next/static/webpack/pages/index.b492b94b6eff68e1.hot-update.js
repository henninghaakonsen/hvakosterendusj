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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var vedlikehold = true;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref1[0], settDusjteller = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dusjtellerKroner = ref2[0], settDusjtellerKroner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref3[0], settBrukDusjteller = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n        });\n    }, []);\n    var dusjtellerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dusjteller);\n    dusjtellerRef.current = dusjteller;\n    var oppdaterDusjTeller = function() {\n        setTimeout(function() {\n            var dusjPerSekund = dusjenKoster / 10 / 60;\n            console.log(dusjPerSekund, dusjteller);\n            var kroner = dusjPerSekund * dusjtellerRef.current;\n            du;\n            console.log(kroner);\n            settDusjteller(dusjteller + 1);\n            settDusjtellerKroner(kroner);\n            if (brukDusjteller) {\n                oppdaterDusjTeller();\n            } else {\n                settDusjteller(1);\n                settDusjtellerKroner(0);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        oppdaterDusjTeller();\n    }, []);\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return dusjPerSekund * dusjteller;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 66,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster ? brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return settBrukDusjteller(!brukDusjteller);\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: function() {\n                            return settBrukDusjteller(!brukDusjteller);\n                        },\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Klarer ikke \\xe5 beregne dusjpris\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 107,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"UGOHHQ3gAr78Mz5p0lNh5YmH5V0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUFBOzs7Ozs7Ozs0QkFBQyxDQUNDOzRCQUFDLENBQUc7aUdBQ0xDLENBQUM7Z0NBQ0FOLElBQUksRUFDRixDQUE4RDs7Ozs7OzswQ0FFakUsQ0FFRDs7NEJBQUssQ0FBRzs0QkFBQyxDQUVYOzs7OztrRkFFRE8sQ0FBTTs7Ozs7Ozs7b0JBQUMsQ0FDSzt5RkFBQ0QsQ0FBQzt3QkFBQ04sSUFBSSxFQUFFLENBQXFDOzs7Ozs7O2tDQUFFLENBQU87O3lGQUNqRVEsQ0FBRTs7Ozs7Ozs7b0JBQ0QsQ0FBVSxlQUFtQ2xELE1BRTlDLENBRmFELGFBQWEsRUFBQyxDQUFpQixvQkFFM0MsTUFBc0IsQ0FGdUJDLFFBQVEsQ0FBQzhDLGNBQWMsQ0FDcEUsQ0FBTyxTQUNQLENBQXNCOzs7OztBQUloQyxDQUFDO0dBNUd1QnBELElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHZlZGxpa2Vob2xkID0gdHJ1ZTtcbiAgY29uc3QgW2R1c2plbktvc3Rlciwgc2V0dER1c2plbktvc3Rlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBLV2hfZm9yRW5EdXNqID0gNi41O1xuICBjb25zdCBuZXR0bGVpZSA9IDAuNTtcblxuICBjb25zdCBbZHVzanRlbGxlciwgc2V0dER1c2p0ZWxsZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtkdXNqdGVsbGVyS3JvbmVyLCBzZXR0RHVzanRlbGxlcktyb25lcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JydWtEdXNqdGVsbGVyLCBzZXR0QnJ1a0R1c2p0ZWxsZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWRhZyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0byA9IGlkYWcudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuICAgIGNvbnN0IHRpbWUgPSAoXCIwXCIgKyBpZGFnLmdldEhvdXJzKCkpLnNsaWNlKC0yKTtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly91cy1jZW50cmFsMS1odmFrb3N0ZXJlbmR1c2otYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvaGVudF9kYWdlbnNfc3Ryb21wcmlzZXJcIlxuICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCB0aW1la2V5ID0gZGF0byArIFwiVFwiICsgdGltZSArIFwiOjAwOjAwKzAxOjAwXCI7XG4gICAgICAgIGNvbnN0IHRpbWVzcHJpcyA9IGRhdGFbdGltZWtleV07XG5cbiAgICAgICAgc2V0dER1c2plbktvc3RlcihcbiAgICAgICAgICB0aW1lc3ByaXMuTk9LX3Blcl9rV2ggKiBLV2hfZm9yRW5EdXNqICsgS1doX2ZvckVuRHVzaiAqIG5ldHRsZWllXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGR1c2p0ZWxsZXJSZWYgPSB1c2VSZWYoZHVzanRlbGxlcik7XG4gIGR1c2p0ZWxsZXJSZWYuY3VycmVudCA9IGR1c2p0ZWxsZXI7XG5cbiAgY29uc3Qgb3BwZGF0ZXJEdXNqVGVsbGVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZHVzalBlclNla3VuZCA9IGR1c2plbktvc3RlciAvIDEwIC8gNjA7XG4gICAgICBjb25zb2xlLmxvZyhkdXNqUGVyU2VrdW5kLCBkdXNqdGVsbGVyKTtcbiAgICAgIGNvbnN0IGtyb25lciA9IGR1c2pQZXJTZWt1bmQgKiBkdXNqdGVsbGVyUmVmLmN1cnJlbnQ7XG4gICAgICBkdVxuXG4gICAgICBjb25zb2xlLmxvZyhrcm9uZXIpO1xuICAgICAgc2V0dER1c2p0ZWxsZXIoZHVzanRlbGxlciArIDEpO1xuICAgICAgc2V0dER1c2p0ZWxsZXJLcm9uZXIoa3JvbmVyKTtcbiAgICAgIGlmIChicnVrRHVzanRlbGxlcikge1xuICAgICAgICBvcHBkYXRlckR1c2pUZWxsZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHREdXNqdGVsbGVyKDEpO1xuICAgICAgICBzZXR0RHVzanRlbGxlcktyb25lcigwKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9wcGRhdGVyRHVzalRlbGxlcigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmVyZWduRHVzanRlbGxlcklLcm9uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZHVzalBlclNla3VuZCA9IGR1c2plbktvc3RlciAvIDEwIC8gNjA7XG4gICAgcmV0dXJuIGR1c2pQZXJTZWt1bmQgKiBkdXNqdGVsbGVyO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YEh2YSBrb3N0ZXIgZW4gZHVzaj9gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIdmEga29zdGVyIGVuIGR1c2o/XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge2R1c2plbktvc3RlciA/IChcbiAgICAgICAgICBicnVrRHVzanRlbGxlciA/IChcbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0dEJydWtEdXNqdGVsbGVyKCFicnVrRHVzanRlbGxlcil9XG4gICAgICAgICAgICA+e2BEdSBoYXIgYnJ1a3QgJHtiZXJlZ25EdXNqdGVsbGVySUtyb25lcigpLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgICBcIm5vLU5PXCJcbiAgICAgICAgICAgICl9IGtyIHDDpSDDpSBkdXNqZWB9PC9oMT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXR0QnJ1a0R1c2p0ZWxsZXIoIWJydWtEdXNqdGVsbGVyKX1cbiAgICAgICAgICAgID57YER1c2plbiBrb3N0ZXIgJHtkdXNqZW5Lb3N0ZXIudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICAgICAgKX0ga3IgcMOlIMO4c3RsYW5kZXQgKE5PMSlgfTwvaDE+XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+S2xhcmVyIGlra2Ugw6UgYmVyZWduZSBkdXNqcHJpczwvaDE+XG4gICAgICAgICl9XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNle1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5ub3JkcG9vbGdyb3VwLmNvbS90aGUtcG93ZXItbWFya2V0L0JpZGRpbmctYXJlYXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGhlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgZm9yIGluZm9ybWFzam9uIG9tIHNvbmVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBQb3dlcmVkIGJ5IDxhIGhyZWY9e1wiaHR0cHM6Ly9naXRodWIuY29tL2hlbm5pbmdoYWFrb25zZW5cIn0+SGVubmluZzwvYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtgQmFzZXJ0IHDDpSAke0tXaF9mb3JFbkR1c2p9IEtXaCBwZXIgZHVzaiBvZyAke25ldHRsZWllLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgIFwibm8tTk9cIlxuICAgICAgICApfSBrciBwZXIgS1doIGkgbmV0dGxlaWVgfVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIZWFkIiwic3R5bGVzIiwiSG9tZSIsInZlZGxpa2Vob2xkIiwidW5kZWZpbmVkIiwiZHVzamVuS29zdGVyIiwic2V0dER1c2plbktvc3RlciIsIktXaF9mb3JFbkR1c2oiLCJuZXR0bGVpZSIsImR1c2p0ZWxsZXIiLCJzZXR0RHVzanRlbGxlciIsImR1c2p0ZWxsZXJLcm9uZXIiLCJzZXR0RHVzanRlbGxlcktyb25lciIsImJydWtEdXNqdGVsbGVyIiwic2V0dEJydWtEdXNqdGVsbGVyIiwiaWRhZyIsIkRhdGUiLCJkYXRvIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJ0aW1lIiwiZ2V0SG91cnMiLCJzbGljZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aW1la2V5IiwidGltZXNwcmlzIiwiTk9LX3Blcl9rV2giLCJkdXNqdGVsbGVyUmVmIiwiY3VycmVudCIsIm9wcGRhdGVyRHVzalRlbGxlciIsInNldFRpbWVvdXQiLCJkdXNqUGVyU2VrdW5kIiwiY29uc29sZSIsImxvZyIsImtyb25lciIsImR1IiwiYmVyZWduRHVzanRlbGxlcklLcm9uZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwib25DbGljayIsInRvTG9jYWxlU3RyaW5nIiwicCIsImEiLCJmb290ZXIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});