"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n// This function can be marked `async` if using `await` inside\n// const protectedRoutes = ['/']\n// const publicRoutes = ['/login', '/signup']\nasync function middleware(request) {\n    const authToken = request.cookies.get(\"token\")?.value;\n    const userId = request.cookies.get(\"userId\")?.value;\n    // console.log(\"iserID\",userId)\n    const afterLoggedIn = request.nextUrl.pathname === \"/login\" || request.nextUrl.pathname === \"/signup\";\n    if (afterLoggedIn) {\n        if (authToken) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", request.url));\n        }\n    } else {\n        if (!authToken) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n        } else {\n            // verify\n            const res = await fetch(\"http://localhost:4000/api/auth/verify-token\", {\n                method: \"GET\",\n                headers: {\n                    Authorization: \"Bearer \" + authToken\n                }\n            });\n            const data = await res.json();\n            // console.log(\"middale\", data.userId)\n            if (data.userId !== userId) {\n                // console.log(request.cookies.delete(\"token\"),\n                // request.cookies.delete(\"userId\"))\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n            }\n        }\n    }\n// const path = request.nextUrl.pathname\n// const isProtectedRoute = protectedRoutes.includes(path)\n// const isPublicRoute = publicRoutes.includes(path)\n// const data = useValidateUser(token.value)\n// console.log(\"token verification\",data)\n// if (!token) {\n//    return NextResponse.redirect(new URL('/login', request.url))\n// }\n// if ( request.nextUrl.pathname === \"/\") {\n//   return NextResponse.redirect(new URL('/', request.url))\n// }\n// if ( request.nextUrl.pathname === \"/products\") {\n//   return NextResponse.redirect(new URL('/products', request.url))\n// }\n// if ( request.nextUrl.pathname === \"/shop\") {\n//   return NextResponse.redirect(new URL('/shop', request.url))\n// }\n}\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/login\",\n        \"/signup\",\n        \"/\",\n        \"/products\",\n        \"/products/:path*\",\n        \"/shop\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBTzFDLDhEQUE4RDtBQUU5RCxnQ0FBZ0M7QUFDaEMsNkNBQTZDO0FBRXRDLGVBQWVDLFdBQVlDLE9BQW9CO0lBR3BELE1BQU1DLFlBQVlELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDO0lBQ2hELE1BQU1DLFNBQVNMLFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVdDO0lBQzlDLCtCQUErQjtJQUUvQixNQUFNRSxnQkFBZ0JOLFFBQVFPLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLFlBQVlSLFFBQVFPLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLO0lBRTVGLElBQUlGLGVBQWU7UUFDakIsSUFBSUwsV0FBVztZQUNiLE9BQU9ILGtGQUFZQSxDQUFDVyxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLVixRQUFRVyxHQUFHO1FBQ3ZEO0lBQ0YsT0FBTztRQUNMLElBQUksQ0FBQ1YsV0FBVztZQUNkLE9BQU9ILGtGQUFZQSxDQUFDVyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixRQUFRVyxHQUFHO1FBQzVELE9BQU87WUFDTCxTQUFTO1lBQ1QsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLCtDQUErQztnQkFDckVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLGVBQWUsWUFBWWY7Z0JBQzdCO1lBQ0Y7WUFDQSxNQUFNZ0IsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO1lBQzNCLHNDQUFzQztZQUN0QyxJQUFJRCxLQUFLWixNQUFNLEtBQUtBLFFBQVM7Z0JBQzNCLCtDQUErQztnQkFDL0Msb0NBQW9DO2dCQUVwQyxPQUFPUCxrRkFBWUEsQ0FBQ1csUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVYsUUFBUVcsR0FBRztZQUM1RDtRQUNGO0lBQ0Y7QUFHQSx3Q0FBd0M7QUFDeEMsMERBQTBEO0FBQzFELG9EQUFvRDtBQUNwRCw0Q0FBNEM7QUFFNUMseUNBQXlDO0FBR3pDLGdCQUFnQjtBQUNoQixrRUFBa0U7QUFDbEUsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyw0REFBNEQ7QUFDNUQsSUFBSTtBQUVKLG1EQUFtRDtBQUNuRCxvRUFBb0U7QUFDcEUsSUFBSTtBQUVKLCtDQUErQztBQUMvQyxnRUFBZ0U7QUFDaEUsSUFBSTtBQUNOO0FBRUEsMkNBQTJDO0FBQ3BDLE1BQU1RLFNBQVM7SUFDcEJDLFNBQVM7UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtBQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgdXNlVmVyaWZ5VG9rZW4gfSBmcm9tICcuL2hvb2tzL2F1dGgtaG9va3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuIFxyXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBtYXJrZWQgYGFzeW5jYCBpZiB1c2luZyBgYXdhaXRgIGluc2lkZVxyXG5cclxuLy8gY29uc3QgcHJvdGVjdGVkUm91dGVzID0gWycvJ11cclxuLy8gY29uc3QgcHVibGljUm91dGVzID0gWycvbG9naW4nLCAnL3NpZ251cCddXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZSAocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuXHJcbiAgXHJcbiAgY29uc3QgYXV0aFRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldChcInRva2VuXCIpPy52YWx1ZVxyXG4gIGNvbnN0IHVzZXJJZCA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJ1c2VySWRcIik/LnZhbHVlXHJcbiAgLy8gY29uc29sZS5sb2coXCJpc2VySURcIix1c2VySWQpXHJcblxyXG4gIGNvbnN0IGFmdGVyTG9nZ2VkSW4gPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIgfHwgcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9zaWdudXBcIiBcclxuXHJcbiAgaWYgKGFmdGVyTG9nZ2VkSW4pIHtcclxuICAgIGlmIChhdXRoVG9rZW4pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWF1dGhUb2tlbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHZlcmlmeVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvYXV0aC92ZXJpZnktdG9rZW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGF1dGhUb2tlblxyXG4gICAgICAgIH0gXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibWlkZGFsZVwiLCBkYXRhLnVzZXJJZClcclxuICAgICAgaWYgKGRhdGEudXNlcklkICE9PSB1c2VySWQgKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdC5jb29raWVzLmRlbGV0ZShcInRva2VuXCIpLFxyXG4gICAgICAgIC8vIHJlcXVlc3QuY29va2llcy5kZWxldGUoXCJ1c2VySWRcIikpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC8vIGNvbnN0IHBhdGggPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWVcclxuICAvLyBjb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gcHJvdGVjdGVkUm91dGVzLmluY2x1ZGVzKHBhdGgpXHJcbiAgLy8gY29uc3QgaXNQdWJsaWNSb3V0ZSA9IHB1YmxpY1JvdXRlcy5pbmNsdWRlcyhwYXRoKVxyXG4gIC8vIGNvbnN0IGRhdGEgPSB1c2VWYWxpZGF0ZVVzZXIodG9rZW4udmFsdWUpXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwidG9rZW4gdmVyaWZpY2F0aW9uXCIsZGF0YSlcclxuXHJcblxyXG4gIC8vIGlmICghdG9rZW4pIHtcclxuICAvLyAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmICggcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9cIikge1xyXG4gIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvJywgcmVxdWVzdC51cmwpKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL3Byb2R1Y3RzXCIpIHtcclxuICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3Byb2R1Y3RzJywgcmVxdWVzdC51cmwpKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL3Nob3BcIikge1xyXG4gIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvc2hvcCcsIHJlcXVlc3QudXJsKSlcclxuICAvLyB9XHJcbn1cclxuIFxyXG4vLyBTZWUgXCJNYXRjaGluZyBQYXRoc1wiIGJlbG93IHRvIGxlYXJuIG1vcmVcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXHJcbiAgICBcIi9sb2dpblwiLCBcclxuICAgIFwiL3NpZ251cFwiLFxyXG4gICAgXCIvXCIsIFxyXG4gICAgXCIvcHJvZHVjdHNcIiwgXHJcbiAgICBcIi9wcm9kdWN0cy86cGF0aCpcIiwgXHJcbiAgICBcIi9zaG9wXCIsIFxyXG4gIF1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImF1dGhUb2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInVzZXJJZCIsImFmdGVyTG9nZ2VkSW4iLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwianNvbiIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});