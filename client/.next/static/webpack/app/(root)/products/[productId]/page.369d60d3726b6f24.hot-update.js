"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/products/[productId]/page",{

/***/ "(app-pages-browser)/./src/components/UI/ImageSlider.tsx":
/*!*******************************************!*\
  !*** ./src/components/UI/ImageSlider.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ \"(app-pages-browser)/./src/components/UI/icons.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageSlider = (param)=>{\n    let { imageUrl } = param;\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleLeft = ()=>{\n        setCurrentSlide(currentSlide === 0 ? imageUrl.length - 1 : currentSlide - 1);\n    };\n    const handleRight = ()=>{\n        setCurrentSlide(currentSlide === imageUrl.length - 1 ? 0 : currentSlide + 1);\n    };\n    console.log(imageUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-5 z-10 text-gray-500 drop-shadow-sm active:drop-shadow-xl cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500\",\n                        onClick: handleLeft,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.LeftArrowCircle, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-[450px] flex overflow-hidden\",\n                        children: imageUrl && imageUrl.length && imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                // fill\n                                width: 700,\n                                height: 500,\n                                src: image.url,\n                                alt: \"#product-image - \".concat(index + 1),\n                                style: {\n                                    translate: \"\".concat(-100 * currentSlide, \"%\"),\n                                    width: \"\"\n                                },\n                                className: \"rounded-xl m-2 transition-all duration-300\"\n                            }, index, false, {\n                                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-5 z-10 active:drop-shadow-xl text-gray-500 drop-shadow-sm cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500\",\n                        onClick: handleRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.RightArrowCircle, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-4\",\n                    children: imageUrl && imageUrl.length && imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            // fill\n                            width: 70,\n                            height: 70,\n                            src: image.url,\n                            alt: \"#product-image - \".concat(index + 1),\n                            onMouseMove: ()=>setCurrentSlide(index),\n                            className: currentSlide === index ? \"object-cover rounded-md ring-2 w-[80px] h-[50px] ring-blue-500 ring-offset-2\" : \"object-cover rounded-md w-[80px] h-[50px]\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSlider, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VJL0ltYWdlU2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFDYztBQUNlO0FBVTVELE1BQU1LLGNBQTBDO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTyxhQUFhO1FBQ2pCRCxnQkFDRUQsaUJBQWlCLElBQUlELFNBQVNJLE1BQU0sR0FBRyxJQUFJSCxlQUFlO0lBRTlEO0lBRUEsTUFBTUksY0FBYztRQUNsQkgsZ0JBQ0VELGlCQUFpQkQsU0FBU0ksTUFBTSxHQUFHLElBQUksSUFBSUgsZUFBZTtJQUU5RDtJQUVBSyxRQUFRQyxHQUFHLENBQUNQO0lBQ1oscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTUDtrQ0FFVCw0RUFBQ04sbURBQWVBOzRCQUFDYyxNQUFNOzs7Ozs7Ozs7OztrQ0FFekIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNaVCxZQUNDQSxTQUFTSSxNQUFNLElBQ2ZKLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbkIsOERBQUNwQixtREFBS0E7Z0NBRUosT0FBTztnQ0FDUHFCLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUtKLE1BQU1LLEdBQUc7Z0NBQ2RDLEtBQUssb0JBQThCLE9BQVZMLFFBQVE7Z0NBQ2pDTSxPQUFPO29DQUFFQyxXQUFXLEdBQXVCLE9BQXBCLENBQUMsTUFBTXBCLGNBQWE7b0NBQUljLE9BQU87Z0NBQUc7Z0NBQ3pETixXQUFZOytCQVBQSzs7Ozs7Ozs7OztrQ0FnQmIsOERBQUNOO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTTDtrQ0FFVCw0RUFBQ1Asb0RBQWdCQTs0QkFBQ2EsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDSDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pULFlBQ0NBLFNBQVNJLE1BQU0sSUFDZkosU0FBU1ksR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNuQiw4REFBQ3BCLG1EQUFLQTs0QkFDSixPQUFPOzRCQUNQcUIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBS0osTUFBTUssR0FBRzs0QkFDZEMsS0FBSyxvQkFBOEIsT0FBVkwsUUFBUTs0QkFDakNRLGFBQWEsSUFBTXBCLGdCQUFnQlk7NEJBQ25DTCxXQUNFUixpQkFBaUJhLFFBQ2IsaUZBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEI7R0E1RU1mO0tBQUFBO0FBOEVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL0ltYWdlU2xpZGVyLnRzeD9kNGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgS2V5LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMZWZ0QXJyb3dDaXJjbGUsIFJpZ2h0QXJyb3dDaXJjbGUgfSBmcm9tIFwiLi9pY29uc1wiO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlU2xpZGVyUHJvcHMge1xyXG4gIGltYWdlVXJsOiB7XHJcbiAgICBwdWJsaWNJZDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBfaWQ6IEtleTtcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlU2xpZGVyOiBSZWFjdC5GQzxJbWFnZVNsaWRlclByb3BzPiA9ICh7IGltYWdlVXJsIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxlZnQgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U2xpZGUoXHJcbiAgICAgIGN1cnJlbnRTbGlkZSA9PT0gMCA/IGltYWdlVXJsLmxlbmd0aCAtIDEgOiBjdXJyZW50U2xpZGUgLSAxXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNsaWRlKFxyXG4gICAgICBjdXJyZW50U2xpZGUgPT09IGltYWdlVXJsLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudFNsaWRlICsgMVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC01IHotMTAgdGV4dC1ncmF5LTUwMCBkcm9wLXNoYWRvdy1zbSBhY3RpdmU6ZHJvcC1zaGFkb3cteGwgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBhY3RpdmU6cmluZy0yIHJpbmctZ3JheS01MDBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTGVmdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGVmdEFycm93Q2lyY2xlIHNpemU9ezI1fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzQ1MHB4XSBmbGV4IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAge2ltYWdlVXJsICYmXHJcbiAgICAgICAgICAgIGltYWdlVXJsLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBpbWFnZVVybC5tYXAoKGltYWdlLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgLy8gZmlsbFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezcwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2AjcHJvZHVjdC1pbWFnZSAtICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2xhdGU6IGAkey0xMDAgKiBjdXJyZW50U2xpZGV9JWAsIHdpZHRoOiBcIlwiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLXhsIG0tMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIC8vICAgY3VycmVudFNsaWRlID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gICAgID8gXCJvYmplY3QtY292ZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgOiBcIm9iamVjdC1jb3ZlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC01IHotMTAgYWN0aXZlOmRyb3Atc2hhZG93LXhsIHRleHQtZ3JheS01MDAgZHJvcC1zaGFkb3ctc20gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBhY3RpdmU6cmluZy0yIHJpbmctZ3JheS01MDBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmlnaHR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJpZ2h0QXJyb3dDaXJjbGUgc2l6ZT17MjV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAge2ltYWdlVXJsICYmXHJcbiAgICAgICAgICAgIGltYWdlVXJsLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBpbWFnZVVybC5tYXAoKGltYWdlLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAvLyBmaWxsXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2AjcHJvZHVjdC1pbWFnZSAtICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KCkgPT4gc2V0Q3VycmVudFNsaWRlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICA/IFwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgcmluZy0yIHctWzgwcHhdIGgtWzUwcHhdIHJpbmctYmx1ZS01MDAgcmluZy1vZmZzZXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIm9iamVjdC1jb3ZlciByb3VuZGVkLW1kIHctWzgwcHhdIGgtWzUwcHhdXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJMZWZ0QXJyb3dDaXJjbGUiLCJSaWdodEFycm93Q2lyY2xlIiwiSW1hZ2VTbGlkZXIiLCJpbWFnZVVybCIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUxlZnQiLCJsZW5ndGgiLCJoYW5kbGVSaWdodCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInVybCIsImFsdCIsInN0eWxlIiwidHJhbnNsYXRlIiwib25Nb3VzZU1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UI/ImageSlider.tsx\n"));

/***/ })

});