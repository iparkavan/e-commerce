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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ \"(app-pages-browser)/./src/components/UI/icons.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageSlider = (param)=>{\n    let { imageUrl } = param;\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleLeft = ()=>{\n        setCurrentSlide(currentSlide === 0 ? imageUrl.length - 1 : currentSlide - 1);\n    };\n    const handleRight = ()=>{\n        setCurrentSlide(currentSlide === imageUrl.length - 1 ? 0 : currentSlide + 1);\n    };\n    console.log(imageUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-5 z-10 text-gray-500 drop-shadow-sm active:drop-shadow-xl cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500\",\n                        onClick: handleLeft,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.LeftArrowCircle, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-[450px] flex gap-3 overflow-hidden\",\n                        children: imageUrl && imageUrl.length && imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                // fill\n                                width: 1000,\n                                height: 500,\n                                src: image.url,\n                                alt: \"#product-image - \".concat(index + 1),\n                                className: currentSlide === index ? \"object-cover rounded-md translate-x-full\" : \"object-cover rounded-md\"\n                            }, index, false, {\n                                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-5 z-10 active:drop-shadow-xl text-gray-500 drop-shadow-sm cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500\",\n                        onClick: handleRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.RightArrowCircle, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-4\",\n                    children: imageUrl && imageUrl.length && imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            // fill\n                            width: 70,\n                            height: 70,\n                            src: image.url,\n                            alt: \"#product-image - \".concat(index + 1),\n                            onMouseMove: ()=>setCurrentSlide(index),\n                            className: currentSlide === index ? \"object-cover rounded-md ring-2 ring-blue-500 ring-offset-2\" : \"object-cover rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Portfolio Projects\\\\ecom-cli-ser\\\\client\\\\src\\\\components\\\\UI\\\\ImageSlider.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSlider, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VJL0ltYWdlU2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFDYztBQUNlO0FBVTVELE1BQU1LLGNBQTBDO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTyxhQUFhO1FBQ2pCRCxnQkFDRUQsaUJBQWlCLElBQUlELFNBQVNJLE1BQU0sR0FBRyxJQUFJSCxlQUFlO0lBRTlEO0lBRUEsTUFBTUksY0FBYztRQUNsQkgsZ0JBQ0VELGlCQUFpQkQsU0FBU0ksTUFBTSxHQUFHLElBQUksSUFBSUgsZUFBZTtJQUU5RDtJQUVBSyxRQUFRQyxHQUFHLENBQUNQO0lBQ1oscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTUDtrQ0FFVCw0RUFBQ04sbURBQWVBOzRCQUFDYyxNQUFNOzs7Ozs7Ozs7OztrQ0FFekIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNaVCxZQUNDQSxTQUFTSSxNQUFNLElBQ2ZKLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbkIsOERBQUNwQixtREFBS0E7Z0NBRUosT0FBTztnQ0FDUHFCLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUtKLE1BQU1LLEdBQUc7Z0NBQ2RDLEtBQUssb0JBQThCLE9BQVZMLFFBQVE7Z0NBQ2pDTCxXQUNFUixpQkFBaUJhLFFBQ1osNkNBQ0Q7K0JBVERBOzs7Ozs7Ozs7O2tDQWNiLDhEQUFDTjt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0w7a0NBRVQsNEVBQUNQLG9EQUFnQkE7NEJBQUNhLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaVCxZQUNDQSxTQUFTSSxNQUFNLElBQ2ZKLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbkIsOERBQUNwQixtREFBS0E7NEJBQ0osT0FBTzs0QkFDUHFCLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUtKLE1BQU1LLEdBQUc7NEJBQ2RDLEtBQUssb0JBQThCLE9BQVZMLFFBQVE7NEJBQ2pDTSxhQUFhLElBQU1sQixnQkFBZ0JZOzRCQUNuQ0wsV0FDRVIsaUJBQWlCYSxRQUNiLCtEQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRCO0dBMUVNZjtLQUFBQTtBQTRFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci50c3g/ZDRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEtleSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGVmdEFycm93Q2lyY2xlLCBSaWdodEFycm93Q2lyY2xlIH0gZnJvbSBcIi4vaWNvbnNcIjtcclxuXHJcbmludGVyZmFjZSBJbWFnZVNsaWRlclByb3BzIHtcclxuICBpbWFnZVVybDoge1xyXG4gICAgcHVibGljSWQ6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgX2lkOiBLZXk7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5jb25zdCBJbWFnZVNsaWRlcjogUmVhY3QuRkM8SW1hZ2VTbGlkZXJQcm9wcz4gPSAoeyBpbWFnZVVybCB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNsaWRlKFxyXG4gICAgICBjdXJyZW50U2xpZGUgPT09IDAgPyBpbWFnZVVybC5sZW5ndGggLSAxIDogY3VycmVudFNsaWRlIC0gMVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSaWdodCA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZShcclxuICAgICAgY3VycmVudFNsaWRlID09PSBpbWFnZVVybC5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRTbGlkZSArIDFcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNSB6LTEwIHRleHQtZ3JheS01MDAgZHJvcC1zaGFkb3ctc20gYWN0aXZlOmRyb3Atc2hhZG93LXhsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYWN0aXZlOnJpbmctMiByaW5nLWdyYXktNTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxlZnR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExlZnRBcnJvd0NpcmNsZSBzaXplPXsyNX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVs0NTBweF0gZmxleCBnYXAtMyBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIHtpbWFnZVVybCAmJlxyXG4gICAgICAgICAgICBpbWFnZVVybC5sZW5ndGggJiZcclxuICAgICAgICAgICAgaW1hZ2VVcmwubWFwKChpbWFnZSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIC8vIGZpbGxcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17YCNwcm9kdWN0LWltYWdlIC0gJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICA/IGBvYmplY3QtY292ZXIgcm91bmRlZC1tZCB0cmFuc2xhdGUteC1mdWxsYFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJvYmplY3QtY292ZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNSB6LTEwIGFjdGl2ZTpkcm9wLXNoYWRvdy14bCB0ZXh0LWdyYXktNTAwIGRyb3Atc2hhZG93LXNtIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYWN0aXZlOnJpbmctMiByaW5nLWdyYXktNTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJpZ2h0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSaWdodEFycm93Q2lyY2xlIHNpemU9ezI1fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgIHtpbWFnZVVybCAmJlxyXG4gICAgICAgICAgICBpbWFnZVVybC5sZW5ndGggJiZcclxuICAgICAgICAgICAgaW1hZ2VVcmwubWFwKChpbWFnZSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgLy8gZmlsbFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgI3Byb2R1Y3QtaW1hZ2UgLSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eygpID0+IHNldEN1cnJlbnRTbGlkZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIm9iamVjdC1jb3ZlciByb3VuZGVkLW1kIHJpbmctMiByaW5nLWJsdWUtNTAwIHJpbmctb2Zmc2V0LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJvYmplY3QtY292ZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGVyO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiTGVmdEFycm93Q2lyY2xlIiwiUmlnaHRBcnJvd0NpcmNsZSIsIkltYWdlU2xpZGVyIiwiaW1hZ2VVcmwiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJoYW5kbGVMZWZ0IiwibGVuZ3RoIiwiaGFuZGxlUmlnaHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNpemUiLCJtYXAiLCJpbWFnZSIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJ1cmwiLCJhbHQiLCJvbk1vdXNlTW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UI/ImageSlider.tsx\n"));

/***/ })

});