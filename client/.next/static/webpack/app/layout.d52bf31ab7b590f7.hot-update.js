"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1a6415284469\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/Y2FiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFhNjQxNTI4NDQ2OVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _components_common_user_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/user-layout */ \"(app-pages-browser)/./src/components/common/user-layout.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/query-core/build/modern/queryClient.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"(app-pages-browser)/./node_modules/@tanstack/react-query-devtools/build/modern/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst metadata = {\n    title: \"Create Next App\",\n    description: \"Generated by create next app\"\n};\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // const accessToken = localStorage.getItem(\"token\");\n        // const userId = localStorage.getItem(\"userId\");\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"isLoggedIn\");\n        // if (isLoggedIn) {\n        //   setToken(isLoggedIn);\n        // }\n        if (token) {\n            const verifyToken = async ()=>{\n                const data = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/verify-token\", {\n                    headers: {\n                        Authorization: \"Bearer \" + token\n                    }\n                });\n                console.log(data);\n            };\n            verifyToken();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.QueryClientProvider, {\n                client: queryClient,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex min-h-screen min-w-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"overlays\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_10__.Provider, {\n                                store: _store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_user_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"photo-picker-element\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_11__.ReactQueryDevtools, {\n                        initialIsOpen: false,\n                        buttonPosition: \"bottom-left\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"SSLzquenZQzOMzU62DrezfOo2pU=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNNQTtBQVZpQjtBQUNtQztBQUNlO0FBQ0w7QUFDN0I7QUFDQTtBQUNLO0FBQ1o7QUFDTjtBQUkxQixNQUFNVyxXQUFxQjtJQUN6QkMsT0FBTztJQUNQQyxhQUFhO0FBQ2Y7QUFFZSxTQUFTQyxXQUFXLEtBSWxDO1FBSmtDLEVBQ2pDQyxRQUFRLEVBR1QsR0FKa0M7O0lBS2pDLE1BQU1DLGNBQWMsSUFBSWQsOERBQVdBO0lBRW5DLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixxREFBcUQ7UUFDckQsaURBQWlEO1FBQ2pELE1BQU1VLFFBQVFSLGlEQUFPQSxDQUFDVSxHQUFHLENBQUM7UUFDMUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixJQUFJO1FBRUosSUFBSUYsT0FBTztZQUNULE1BQU1HLGNBQWM7Z0JBQ2xCLE1BQU1DLE9BQU8sTUFBTVgsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyxpQkFBaUI7b0JBQzVDRyxTQUFTO3dCQUNQQyxlQUFlLFlBQVlOO29CQUM3QjtnQkFDRjtnQkFFQU8sUUFBUUMsR0FBRyxDQUFDSjtZQUNkO1lBQ0FEO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBS0MsTUFBSztrQkFDVCw0RUFBQ0M7WUFBS0MsV0FBVzdCLCtKQUFlO3NCQUM5Qiw0RUFBQ0csc0VBQW1CQTtnQkFBQzJCLFFBQVFkOztrQ0FDM0IsOERBQUNlO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUlDLElBQUc7Ozs7OzswQ0FDUiw4REFBQzNCLGtEQUFRQTtnQ0FBQ0MsT0FBT0EsK0NBQUtBOzBDQUNwQiw0RUFBQ0wsc0VBQVVBOzhDQUFFYzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2pCLDhEQUFDZ0I7d0JBQUlDLElBQUc7Ozs7OztrQ0FDUiw4REFBQzVCLCtFQUFrQkE7d0JBQ2pCNkIsZUFBZTt3QkFDZkMsZ0JBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0I7R0FsRHdCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB0eXBlIHsgTWV0YWRhdGEgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFVzZXJMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3VzZXItbGF5b3V0XCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiQ3JlYXRlIE5leHQgQXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pIHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIC8vIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJpc0xvZ2dlZEluXCIpO1xuICAgIC8vIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgLy8gICBzZXRUb2tlbihpc0xvZ2dlZEluKTtcbiAgICAvLyB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3ZlcmlmeS10b2tlblwiLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH07XG4gICAgICB2ZXJpZnlUb2tlbigpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbWluLWgtc2NyZWVuIG1pbi13LXNjcmVlblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlzXCIgLz5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICA8VXNlckxheW91dD57Y2hpbGRyZW59PC9Vc2VyTGF5b3V0PlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwicGhvdG8tcGlja2VyLWVsZW1lbnRcIj48L2Rpdj5cbiAgICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzXG4gICAgICAgICAgICBpbml0aWFsSXNPcGVuPXtmYWxzZX1cbiAgICAgICAgICAgIGJ1dHRvblBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJVc2VyTGF5b3V0IiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwiUHJvdmlkZXIiLCJzdG9yZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsImF4aW9zIiwibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwicXVlcnlDbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwiZ2V0IiwidmVyaWZ5VG9rZW4iLCJkYXRhIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImxhbmciLCJib2R5IiwiY2xhc3NOYW1lIiwiY2xpZW50IiwiZGl2IiwiaWQiLCJpbml0aWFsSXNPcGVuIiwiYnV0dG9uUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});