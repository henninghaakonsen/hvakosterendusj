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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var vedlikehold = true;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), dusjenKoster = ref[0], settDusjenKoster = ref[1];\n    var KWh_forEnDusj = 6.5;\n    var nettleie = 0.5;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), dusjteller = ref1[0], settDusjteller = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), brukDusjteller = ref2[0], settBrukDusjteller = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var idag = new Date();\n        var dato = idag.toISOString().substr(0, 10);\n        var time = (\"0\" + idag.getHours()).slice(-2);\n        fetch(\"https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var timekey = dato + \"T\" + time + \":00:00+01:00\";\n            var timespris = data[timekey];\n            settDusjenKoster(timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie);\n        });\n    }, []);\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startStopTimer = function() {\n        console.log(timer.current);\n        if (!timer.current) {\n            settBrukDusjteller(true);\n            timer.current = setInterval(function() {\n                settDusjteller(function(prevstate) {\n                    return prevstate + 1;\n                });\n                console.log(dusjteller);\n            }, 1000);\n        } else {\n            settBrukDusjteller(false);\n            clearInterval(timer.current);\n            timer.current = null;\n        }\n    };\n    var beregnDusjtellerIKroner = function() {\n        var dusjPerSekund = dusjenKoster / 10 / 60;\n        return dusjPerSekund * dusjteller;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n            lineNumber: 55,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Hva koster en dusj?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Hva koster en dusj?\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    dusjenKoster ? brukDusjteller ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Du har brukt \".concat(beregnDusjtellerIKroner().toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xe5 dusje (\").concat(dusjteller, \" sekunder)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        onClick: startStopTimer,\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Dusjen koster \".concat(dusjenKoster.toLocaleString(\"no-NO\"), \" kr p\\xe5 \\xf8stlandet (NO1)\")\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Klarer ikke \\xe5 beregne dusjpris\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Se\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://www.nordpoolgroup.com/the-power-market/Bidding-areas\",\n                                __source: {\n                                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"her\"\n                            }),\n                            \" \",\n                            \"for informasjon om soner.\"\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered by \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://github.com/henninghaakonsen\",\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 20\n                        },\n                        __self: this,\n                        children: \"Henning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/henninghaakonsen/hobby/hvakosterendusj/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    \"Basert p\\xe5 \".concat(KWh_forEnDusj, \" KWh per dusj og \").concat(nettleie.toLocaleString(\"no-NO\"), \" kr per KWh i nettleie\")\n                ]\n            })\n        ]\n    }));\n};\n_s(Home, \"QaaCeMkzxb7b5E8dn7gCP5gMuOo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0MsTUFBc0IsQ0FGdUJDLFFBQVEsQ0FBQzRDLGNBQWMsQ0FDcEUsQ0FBTyxTQUNQLENBQXNCOzs7OztBQUloQyxDQUFDO0dBakd1QmxELElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHZlZGxpa2Vob2xkID0gdHJ1ZTtcbiAgY29uc3QgW2R1c2plbktvc3Rlciwgc2V0dER1c2plbktvc3Rlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBLV2hfZm9yRW5EdXNqID0gNi41O1xuICBjb25zdCBuZXR0bGVpZSA9IDAuNTtcblxuICBjb25zdCBbZHVzanRlbGxlciwgc2V0dER1c2p0ZWxsZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFticnVrRHVzanRlbGxlciwgc2V0dEJydWtEdXNqdGVsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkYWcgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdG8gPSBpZGFnLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcbiAgICBjb25zdCB0aW1lID0gKFwiMFwiICsgaWRhZy5nZXRIb3VycygpKS5zbGljZSgtMik7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtaHZha29zdGVyZW5kdXNqLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2hlbnRfZGFnZW5zX3N0cm9tcHJpc2VyXCJcbiAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgdGltZWtleSA9IGRhdG8gKyBcIlRcIiArIHRpbWUgKyBcIjowMDowMCswMTowMFwiO1xuICAgICAgICBjb25zdCB0aW1lc3ByaXMgPSBkYXRhW3RpbWVrZXldO1xuXG4gICAgICAgIHNldHREdXNqZW5Lb3N0ZXIoXG4gICAgICAgICAgdGltZXNwcmlzLk5PS19wZXJfa1doICogS1doX2ZvckVuRHVzaiArIEtXaF9mb3JFbkR1c2ogKiBuZXR0bGVpZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0aW1lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3RhcnRTdG9wVGltZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGltZXIuY3VycmVudCk7XG4gICAgaWYgKCF0aW1lci5jdXJyZW50KSB7XG4gICAgICBzZXR0QnJ1a0R1c2p0ZWxsZXIodHJ1ZSk7XG4gICAgICB0aW1lci5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXR0RHVzanRlbGxlcihwcmV2c3RhdGUgPT4gcHJldnN0YXRlICsgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1c2p0ZWxsZXIpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldHRCcnVrRHVzanRlbGxlcihmYWxzZSk7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyLmN1cnJlbnQpO1xuICAgICAgdGltZXIuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1c2pQZXJTZWt1bmQgPSBkdXNqZW5Lb3N0ZXIgLyAxMCAvIDYwO1xuICAgIHJldHVybiBkdXNqUGVyU2VrdW5kICogZHVzanRlbGxlcjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2BIdmEga29zdGVyIGVuIGR1c2o/YH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSHZhIGtvc3RlciBlbiBkdXNqP1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtkdXNqZW5Lb3N0ZXIgPyAoXG4gICAgICAgICAgYnJ1a0R1c2p0ZWxsZXIgPyAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0U3RvcFRpbWVyfVxuICAgICAgICAgICAgPntgRHUgaGFyIGJydWt0ICR7YmVyZWduRHVzanRlbGxlcklLcm9uZXIoKS50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICAgICApfSBrciBww6Ugw6UgZHVzamUgKCR7ZHVzanRlbGxlcn0gc2VrdW5kZXIpYH08L2gxPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0U3RvcFRpbWVyfVxuICAgICAgICAgICAgPntgRHVzamVuIGtvc3RlciAke2R1c2plbktvc3Rlci50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICAgICApfSBrciBww6Ugw7hzdGxhbmRldCAoTk8xKWB9PC9oMT5cbiAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5LbGFyZXIgaWtrZSDDpSBiZXJlZ25lIGR1c2pwcmlzPC9oMT5cbiAgICAgICAgKX1cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2V7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm5vcmRwb29sZ3JvdXAuY29tL3RoZS1wb3dlci1tYXJrZXQvQmlkZGluZy1hcmVhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICBmb3IgaW5mb3JtYXNqb24gb20gc29uZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIFBvd2VyZWQgYnkgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vaGVubmluZ2hhYWtvbnNlblwifT5IZW5uaW5nPC9hPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2BCYXNlcnQgcMOlICR7S1doX2ZvckVuRHVzan0gS1doIHBlciBkdXNqIG9nICR7bmV0dGxlaWUudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgXCJuby1OT1wiXG4gICAgICAgICl9IGtyIHBlciBLV2ggaSBuZXR0bGVpZWB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkhlYWQiLCJzdHlsZXMiLCJIb21lIiwidmVkbGlrZWhvbGQiLCJ1bmRlZmluZWQiLCJkdXNqZW5Lb3N0ZXIiLCJzZXR0RHVzamVuS29zdGVyIiwiS1doX2ZvckVuRHVzaiIsIm5ldHRsZWllIiwiZHVzanRlbGxlciIsInNldHREdXNqdGVsbGVyIiwiYnJ1a0R1c2p0ZWxsZXIiLCJzZXR0QnJ1a0R1c2p0ZWxsZXIiLCJpZGFnIiwiRGF0ZSIsImRhdG8iLCJ0b0lTT1N0cmluZyIsInN1YnN0ciIsInRpbWUiLCJnZXRIb3VycyIsInNsaWNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRpbWVrZXkiLCJ0aW1lc3ByaXMiLCJOT0tfcGVyX2tXaCIsInRpbWVyIiwic3RhcnRTdG9wVGltZXIiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNldEludGVydmFsIiwicHJldnN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsImJlcmVnbkR1c2p0ZWxsZXJJS3JvbmVyIiwiZHVzalBlclNla3VuZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJvbkNsaWNrIiwidG9Mb2NhbGVTdHJpbmciLCJwIiwiYSIsImZvb3RlciIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});