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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var search = function(e) {\n        e.preventDefault();\n        var term = searchInputRef.current.value;\n        if (!term) {\n            return;\n        }\n        router.push(\"https://google.com/search?q=\" + term);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n            lineNumber: 30\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                    lineNumber: 31\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 32\n                        },\n                        __self: this,\n                        children: \"Google\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 33\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 34\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                className: \"flex w-full p-4 pt-3 justify-between text-sm text-gray-800\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                    lineNumber: 38\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex space-x-4 items-center ml-2\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 40\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 41\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    href: \"https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                        lineNumber: 42\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                            lineNumber: 43\n                                        },\n                                        __self: this,\n                                        children: \"About\"\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 46\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    href: \"https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                        lineNumber: 47\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                            lineNumber: 48\n                                        },\n                                        __self: this,\n                                        children: \"Store\"\n                                    })\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex space-x-4 items-center text-xs\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 55\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 56\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    href: \"https://mail.google.com/mail/?authuser=0&ogbl\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                        lineNumber: 57\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                            lineNumber: 58\n                                        },\n                                        __self: this,\n                                        children: \"Gmail\"\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 61\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    href: \"https://www.google.com/imghp?hl=en&authuser=0&ogbl\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                        lineNumber: 62\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                            lineNumber: 63\n                                        },\n                                        __self: this,\n                                        children: \"Images\"\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 68\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    href: \"https://workspace.google.com/marketplace?pann=ogb\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                        lineNumber: 69\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ViewGridIcon, {\n                                        className: \"h-9 w-9 p-2 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                            lineNumber: 70\n                                        },\n                                        __self: this\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                url: \"https://i0.wp.com/hipradar.net/wp-content/uploads/2018/05/usain-bolt.jpg?fit=1200%2C749&ssl=1\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 76\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                className: \"flex flex-col items-center mt-10 flex-grow w-4/5\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                    lineNumber: 81\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: \"object-cover\",\n                        src: \"/logo.png\",\n                        height: 100,\n                        width: 300,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 82\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-300 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 88\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {\n                                className: \"h-5 mr-3 pl-0 ml-0 text-gray-400\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 89\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                ref: searchInputRef,\n                                type: \"text\",\n                                className: \"focus:outline-none flex-1\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 91\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.MicrophoneIcon, {\n                                className: \"h-5 text-gray-500 hover:cursor-pointer\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 93\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex flex-col w-50% space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                            lineNumber: 96\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: search,\n                                className: \"btn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 97\n                                },\n                                __self: this,\n                                children: \"Google Search\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: search,\n                                className: \"btn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                                    lineNumber: 98\n                                },\n                                __self: this,\n                                children: \"I'm Feeling Lucky\"\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jakem\\\\Desktop\\\\myapps\\\\google-clone\\\\google-clone\\\\pages\\\\index.js\",\n                    lineNumber: 103\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(Home, \"Qdo3txEbC5fKQIcJP6faxeJxO74=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0M7Ozs7Ozs7OzswRkFHbkVELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUF5Rjs7Ozs7OztpR0FDckdrQixDQUFNO2dDQUFDQyxPQUFPLEVBQUUzQixNQUFNO2dDQUFFUSxTQUFTLEVBQUMsQ0FBSzs7Ozs7OzBDQUFDLENBQWE7O2lHQUNyRGtCLENBQU07Z0NBQUNDLE9BQU8sRUFBRTNCLE1BQU07Z0NBQUVRLFNBQVMsRUFBQyxDQUFLOzs7Ozs7MENBQUMsQ0FBaUI7Ozs7OztpRkFLN0RmLDBEQUFNOzs7Ozs7Ozs7QUFHYixDQUFDO0dBNUZ1QkksSUFBSTs7UUFFWEYsa0RBQVM7OztLQUZGRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vY29tcG9uZW50cy9hdmF0YXJcIjtcbmltcG9ydCB7XG4gIFZpZXdHcmlkSWNvbixcbiAgU2VhcmNoSWNvbixcbiAgTWljcm9waG9uZUljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc2VhcmNoSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgaWYgKCF0ZXJtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm91dGVyLnB1c2goXCJodHRwczovL2dvb2dsZS5jb20vc2VhcmNoP3E9XCIgKyB0ZXJtKTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Hb29nbGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIGhlYWRlciAqL31cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcC00IHB0LTMganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICB7LyogbGVmdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXIgbWwtMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9hYm91dC5nb29nbGUvP2ZnPTEmdXRtX3NvdXJjZT1nb29nbGUtVVMmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY2FtcGFpZ249aHAtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5BYm91dDwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vc3RvcmUuZ29vZ2xlLmNvbS9VUz91dG1fc291cmNlPWhwX2hlYWRlciZ1dG1fbWVkaXVtPWdvb2dsZV9vb28mdXRtX2NhbXBhaWduPUdTMTAwMDQyJmhsPWVuLVVTXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5TdG9yZTwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHJpZ2h0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlciB0ZXh0LXhzXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL21haWwuZ29vZ2xlLmNvbS9tYWlsLz9hdXRodXNlcj0wJm9nYmxcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPkdtYWlsPC9wPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWdocD9obD1lbiZhdXRodXNlcj0wJm9nYmxcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPkltYWdlczwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogaWNvbiAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd29ya3NwYWNlLmdvb2dsZS5jb20vbWFya2V0cGxhY2U/cGFubj1vZ2JcIj5cbiAgICAgICAgICAgICAgPFZpZXdHcmlkSWNvbiBjbGFzc05hbWU9XCJoLTkgdy05IHAtMiByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlclwiPjwvVmlld0dyaWRJY29uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuXG4gICAgICAgICAgey8qIHByb2ZpbGUgcGljICovfVxuICAgICAgICAgIDxBdmF0YXIgdXJsPVwiaHR0cHM6Ly9pMC53cC5jb20vaGlwcmFkYXIubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1L3VzYWluLWJvbHQuanBnP2ZpdD0xMjAwJTJDNzQ5JnNzbD0xXCI+PC9BdmF0YXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiBib2R5ICovfVxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMTAgZmxleC1ncm93IHctNC81XCI+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXG4gICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgPjwvSW1hZ2U+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtdC01IGhvdmVyOnNoYWRvdy1sZyBmb2N1cy13aXRoaW46c2hhZG93LWxnIG1heC13LW1kIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTUgcHktMiBpdGVtcy1jZW50ZXIgc206bWF4LXcteGwgbGc6bWF4LXctMnhsXCI+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IG1yLTMgcGwtMCBtbC0wIHRleHQtZ3JheS00MDBcIj48L1NlYXJjaEljb24+XG5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtzZWFyY2hJbnB1dFJlZn0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgZmxleC0xXCI+PC9pbnB1dD5cblxuICAgICAgICAgIDxNaWNyb3Bob25lSWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC1ncmF5LTUwMCBob3ZlcjpjdXJzb3ItcG9pbnRlclwiPjwvTWljcm9waG9uZUljb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTUwJSBzcGFjZS15LTIganVzdGlmeS1jZW50ZXIgbXQtOCBzbTpzcGFjZS15LTAgc206ZmxleC1yb3cgc206c3BhY2UteC00XCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2h9IGNsYXNzTmFtZT1cImJ0blwiPkdvb2dsZSBTZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaH0gY2xhc3NOYW1lPVwiYnRuXCI+SSdtIEZlZWxpbmcgTHVja3k8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHsvKiBmb290ZXIgKi99XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQXZhdGFyIiwiVmlld0dyaWRJY29uIiwiU2VhcmNoSWNvbiIsIk1pY3JvcGhvbmVJY29uIiwiSW1hZ2UiLCJGb290ZXIiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiSG9tZSIsInNlYXJjaElucHV0UmVmIiwicm91dGVyIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaGVhZGVyIiwicCIsInVybCIsImZvcm0iLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImlucHV0IiwicmVmIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});