"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./src/app/(root)/layout.tsx":
/*!***********************************!*\
  !*** ./src/app/(root)/layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ \"(app-pages-browser)/./src/store/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_common_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/sidebar */ \"(app-pages-browser)/./src/components/common/sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    // console.log(\"sercives\", token)\n    const { currentUser } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.user);\n    // const { data: verifyData } = useVerifyToken(token);\n    // useEffect(() => {\n    //   // const accessToken = localStorage.getItem(\"token\");\n    //   if (pathname) {\n    //     const tokenId = Cookies.get(\"token\");\n    //     console.log(tokenId);\n    //   }\n    // }, [pathname]);\n    // useEffect(() => {\n    //   if (currentUser) {\n    //     if (currentUser._id !== verifyData?.userId) {\n    //       console.log(currentUser);\n    //       console.log(\"Fake User\");\n    //       return router.push(\"/login\");\n    //     }\n    //   }\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-64 left-3 bg-white/70 backdrop-blur-md rounded-xl min-h-[745px] fixed\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\(root)\\\\layout.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\(root)\\\\layout.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-[280px] mx-3\",\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\(root)\\\\layout.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\app\\\\(root)\\\\layout.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"mE9ppmTscISz5pcMBAk4sYV8TUs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHJvb3QpL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV5RDtBQUNVO0FBQ3ZCO0FBQ1U7QUFFdkMsU0FBU0ssV0FBVyxLQUlsQztRQUprQyxFQUNqQ0MsUUFBUSxFQUdULEdBSmtDOztJQUtqQyxNQUFNQyxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTU8sV0FBV1IsNERBQVdBO0lBQzVCLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsaUNBQWlDO0lBRWpDLE1BQU0sRUFBRVUsV0FBVyxFQUFFLEdBQUdYLDREQUFjQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1DLElBQUk7SUFFNUQsc0RBQXNEO0lBRXRELG9CQUFvQjtJQUNwQiwwREFBMEQ7SUFDMUQsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLGtCQUFrQjtJQUVsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9EQUFvRDtJQUNwRCxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsTUFBTTtJQUNOLFVBQVU7SUFFVixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDYixrRUFBT0E7Ozs7Ozs7Ozs7MEJBRVYsOERBQUNZO2dCQUFJQyxXQUFVOzBCQUFtQlg7Ozs7Ozs7Ozs7OztBQUd4QztHQXpDd0JEOztRQUtQSixzREFBU0E7UUFDUEQsd0RBQVdBO1FBS0pFLHdEQUFjQTs7O0tBWGhCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhyb290KS9sYXlvdXQudHN4Pzg4MzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmUvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwic2VyY2l2ZXNcIiwgdG9rZW4pXHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vIGNvbnN0IHsgZGF0YTogdmVyaWZ5RGF0YSB9ID0gdXNlVmVyaWZ5VG9rZW4odG9rZW4pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8gY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIC8vICAgaWYgKHBhdGhuYW1lKSB7XHJcbiAgLy8gICAgIGNvbnN0IHRva2VuSWQgPSBDb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyh0b2tlbklkKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcGF0aG5hbWVdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChjdXJyZW50VXNlcikge1xyXG4gIC8vICAgICBpZiAoY3VycmVudFVzZXIuX2lkICE9PSB2ZXJpZnlEYXRhPy51c2VySWQpIHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJGYWtlIFVzZXJcIik7XHJcbiAgLy8gICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGxlZnQtMyBiZy13aGl0ZS83MCBiYWNrZHJvcC1ibHVyLW1kIHJvdW5kZWQteGwgbWluLWgtWzc0NXB4XSBmaXhlZFwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLVsyODBweF0gbXgtM1wiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VTdGF0ZSIsIlNpZGViYXIiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJwYXRobmFtZSIsInVzZXJJZCIsInNldFVzZXJJZCIsInRva2VuIiwic2V0VG9rZW4iLCJjdXJyZW50VXNlciIsInN0YXRlIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(root)/layout.tsx\n"));

/***/ })

});