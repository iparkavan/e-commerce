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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ \"(app-pages-browser)/./src/components/UI/icons.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageSlider = (param)=>{\n    let { imageUrl } = param;\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleLeft = ()=>{\n        setCurrentSlide(currentSlide === 0 ? imageUrl.length - 1 : currentSlide - 1);\n    };\n    const handleRight = ()=>{\n        setCurrentSlide(currentSlide === imageUrl.length - 1 ? 0 : currentSlide + 1);\n    };\n    console.log(imageUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-5 z-20 text-gray-500 drop-shadow-sm active:drop-shadow-xl cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500\",\n                        onClick: handleLeft,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.LeftArrowCircle, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex overflow-hidden\",\n                        children: imageUrl && imageUrl.length && imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                // fill\n                                width: 1500,\n                                height: 500,\n                                src: image.url,\n                                alt: \"#product-image - \".concat(index + 1),\n                                style: {\n                                    translate: \"\".concat(-100 * currentSlide, \"%\")\n                                },\n                                // className={`rounded-xl m-2 object-cover transition-all duration-300`}\n                                className: currentSlide === index ? \"object-cover rounded-md transition-all scale-105 z-10 duration-300\" : \"object-cover rounded-md transition-all duration-300 scale-95\"\n                            }, index, false, {\n                                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-5 z-20 active:drop-shadow-xl text-gray-500 drop-shadow-sm cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500\",\n                        onClick: handleRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.RightArrowCircle, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-4\",\n                    children: imageUrl && imageUrl.length && imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            // fill\n                            width: 70,\n                            height: 70,\n                            src: image.url,\n                            alt: \"#product-image - \".concat(index + 1),\n                            onMouseMove: ()=>setCurrentSlide(index),\n                            className: currentSlide === index ? \"object-cover rounded-md ring-2 w-[80px] h-[50px] ring-blue-500 ring-offset-2\" : \"object-cover rounded-md w-[80px] h-[50px]\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSlider, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VJL0ltYWdlU2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFDYztBQUNlO0FBVTVELE1BQU1LLGNBQTBDO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTyxhQUFhO1FBQ2pCRCxnQkFDRUQsaUJBQWlCLElBQUlELFNBQVNJLE1BQU0sR0FBRyxJQUFJSCxlQUFlO0lBRTlEO0lBRUEsTUFBTUksY0FBYztRQUNsQkgsZ0JBQ0VELGlCQUFpQkQsU0FBU0ksTUFBTSxHQUFHLElBQUksSUFBSUgsZUFBZTtJQUU5RDtJQUVBSyxRQUFRQyxHQUFHLENBQUNQO0lBQ1oscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTUDtrQ0FFVCw0RUFBQ04sbURBQWVBOzRCQUFDYyxNQUFNOzs7Ozs7Ozs7OztrQ0FHdkIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNaVCxZQUNDQSxTQUFTSSxNQUFNLElBQ2ZKLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbkIsOERBQUNwQixtREFBS0E7Z0NBRUosT0FBTztnQ0FDUHFCLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUtKLE1BQU1LLEdBQUc7Z0NBQ2RDLEtBQUssb0JBQThCLE9BQVZMLFFBQVE7Z0NBQ2pDTSxPQUFPO29DQUFFQyxXQUFXLEdBQXVCLE9BQXBCLENBQUMsTUFBTXBCLGNBQWE7Z0NBQUc7Z0NBQzlDLHdFQUF3RTtnQ0FDeEVRLFdBQ0VSLGlCQUFpQmEsUUFDYix1RUFDQTsrQkFYREE7Ozs7Ozs7Ozs7a0NBaUJmLDhEQUFDTjt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0w7a0NBRVQsNEVBQUNQLG9EQUFnQkE7NEJBQUNhLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaVCxZQUNDQSxTQUFTSSxNQUFNLElBQ2ZKLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbkIsOERBQUNwQixtREFBS0E7NEJBQ0osT0FBTzs0QkFDUHFCLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUtKLE1BQU1LLEdBQUc7NEJBQ2RDLEtBQUssb0JBQThCLE9BQVZMLFFBQVE7NEJBQ2pDUSxhQUFhLElBQU1wQixnQkFBZ0JZOzRCQUNuQ0wsV0FDRVIsaUJBQWlCYSxRQUNiLGlGQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRCO0dBOUVNZjtLQUFBQTtBQWdGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci50c3g/ZDRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEtleSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGVmdEFycm93Q2lyY2xlLCBSaWdodEFycm93Q2lyY2xlIH0gZnJvbSBcIi4vaWNvbnNcIjtcclxuXHJcbmludGVyZmFjZSBJbWFnZVNsaWRlclByb3BzIHtcclxuICBpbWFnZVVybDoge1xyXG4gICAgcHVibGljSWQ6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgX2lkOiBLZXk7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5jb25zdCBJbWFnZVNsaWRlcjogUmVhY3QuRkM8SW1hZ2VTbGlkZXJQcm9wcz4gPSAoeyBpbWFnZVVybCB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNsaWRlKFxyXG4gICAgICBjdXJyZW50U2xpZGUgPT09IDAgPyBpbWFnZVVybC5sZW5ndGggLSAxIDogY3VycmVudFNsaWRlIC0gMVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSaWdodCA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZShcclxuICAgICAgY3VycmVudFNsaWRlID09PSBpbWFnZVVybC5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRTbGlkZSArIDFcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNSB6LTIwIHRleHQtZ3JheS01MDAgZHJvcC1zaGFkb3ctc20gYWN0aXZlOmRyb3Atc2hhZG93LXhsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYWN0aXZlOnJpbmctMiByaW5nLWdyYXktNTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxlZnR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExlZnRBcnJvd0NpcmNsZSBzaXplPXsyNX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICB7aW1hZ2VVcmwgJiZcclxuICAgICAgICAgICAgICBpbWFnZVVybC5sZW5ndGggJiZcclxuICAgICAgICAgICAgICBpbWFnZVVybC5tYXAoKGltYWdlLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgLy8gZmlsbFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTUwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2AjcHJvZHVjdC1pbWFnZSAtICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zbGF0ZTogYCR7LTEwMCAqIGN1cnJlbnRTbGlkZX0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2Byb3VuZGVkLXhsIG0tMiBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1hbGwgc2NhbGUtMTA1IHotMTAgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJvYmplY3QtY292ZXIgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC01IHotMjAgYWN0aXZlOmRyb3Atc2hhZG93LXhsIHRleHQtZ3JheS01MDAgZHJvcC1zaGFkb3ctc20gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBhY3RpdmU6cmluZy0yIHJpbmctZ3JheS01MDBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmlnaHR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJpZ2h0QXJyb3dDaXJjbGUgc2l6ZT17MjV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAge2ltYWdlVXJsICYmXHJcbiAgICAgICAgICAgIGltYWdlVXJsLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBpbWFnZVVybC5tYXAoKGltYWdlLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAvLyBmaWxsXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2AjcHJvZHVjdC1pbWFnZSAtICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KCkgPT4gc2V0Q3VycmVudFNsaWRlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICA/IFwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgcmluZy0yIHctWzgwcHhdIGgtWzUwcHhdIHJpbmctYmx1ZS01MDAgcmluZy1vZmZzZXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIm9iamVjdC1jb3ZlciByb3VuZGVkLW1kIHctWzgwcHhdIGgtWzUwcHhdXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJMZWZ0QXJyb3dDaXJjbGUiLCJSaWdodEFycm93Q2lyY2xlIiwiSW1hZ2VTbGlkZXIiLCJpbWFnZVVybCIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUxlZnQiLCJsZW5ndGgiLCJoYW5kbGVSaWdodCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInVybCIsImFsdCIsInN0eWxlIiwidHJhbnNsYXRlIiwib25Nb3VzZU1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UI/ImageSlider.tsx\n"));

/***/ })

});