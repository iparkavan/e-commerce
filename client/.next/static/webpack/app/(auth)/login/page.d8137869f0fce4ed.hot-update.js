"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./src/store/features/authSlice.ts":
/*!*****************************************!*\
  !*** ./src/store/features/authSlice.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setJwtToken: function() { return /* binding */ setJwtToken; },\n/* harmony export */   setUserInfo: function() { return /* binding */ setUserInfo; },\n/* harmony export */   userSlice: function() { return /* binding */ userSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n// Define the initial state using that type\nconst initialState = {\n    token: \"\",\n    currentUser: undefined\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        setUserInfo: (state, action)=>{\n            if (action.payload) {\n                state.currentUser = action.payload;\n            }\n        },\n        setJwtToken: (state, action)=>{\n            state.token = action.payload;\n            console.log(state.token);\n        }\n    }\n});\nconst { setUserInfo, setJwtToken } = userSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQWU5QywyQ0FBMkM7QUFDM0MsTUFBTUMsZUFBMEI7SUFDOUJDLE9BQU87SUFDUEMsYUFBYUM7QUFDZjtBQUVPLE1BQU1DLFlBQVlMLDZEQUFXQSxDQUFDO0lBQ25DTSxNQUFNO0lBQ05MO0lBQ0FNLFVBQVU7UUFDUkMsYUFBYSxDQUFDQyxPQUFPQztZQUNuQixJQUFJQSxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2xCRixNQUFNTixXQUFXLEdBQUdPLE9BQU9DLE9BQU87WUFDcEM7UUFDRjtRQUNBQyxhQUFhLENBQUNILE9BQU9DO1lBQ25CRCxNQUFNUCxLQUFLLEdBQUdRLE9BQU9DLE9BQU87WUFDNUJFLFFBQVFDLEdBQUcsQ0FBQ0wsTUFBTVAsS0FBSztRQUN6QjtJQUNGO0FBQ0YsR0FBRTtBQUVLLE1BQU0sRUFBRU0sV0FBVyxFQUFFSSxXQUFXLEVBQUUsR0FBR1AsVUFBVVUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvYXV0aFNsaWNlLnRzPzcxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBzdGF0IH0gZnJvbSAnZnMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgdGhlIHNsaWNlIHN0YXRlXHJcbmludGVyZmFjZSBhdXRoU3RhdGUge1xyXG4gIHRva2VuOiBzdHJpbmdcclxuICBjdXJyZW50VXNlcjoge1xyXG4gICAgY2FydDoge2l0ZW1zOltdfVxyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgZW1haWw6IHN0cmluZ1xyXG4gICAgX2lkOnN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIHVzaW5nIHRoYXQgdHlwZVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IGF1dGhTdGF0ZSA9IHtcclxuICB0b2tlbjogXCJcIixcclxuICBjdXJyZW50VXNlcjogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3VzZXInLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXNlckluZm86IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRVc2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldEp3dFRva2VuOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRva2VuKVxyXG4gICAgfSwgXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVzZXJJbmZvLCBzZXRKd3RUb2tlbiB9ID0gdXNlclNsaWNlLmFjdGlvbnNcclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwiY3VycmVudFVzZXIiLCJ1bmRlZmluZWQiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VySW5mbyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEp3dFRva2VuIiwiY29uc29sZSIsImxvZyIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/authSlice.ts\n"));

/***/ })

});