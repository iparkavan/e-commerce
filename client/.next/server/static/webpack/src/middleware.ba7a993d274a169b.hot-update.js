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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(middleware)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n// This function can be marked `async` if using `await` inside\n// const protectedRoutes = ['/']\n// const publicRoutes = ['/login', '/signup']\nasync function middleware(request) {\n    const authToken = request.cookies.get(\"token\")?.value;\n    const userId = request.cookies.get(\"userId\")?.value;\n    // console.log(\"iserID\",userId)\n    const afterLoggedIn = request.nextUrl.pathname === \"/login\" || request.nextUrl.pathname === \"/signup\";\n    if (afterLoggedIn) {\n        if (authToken) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", request.url));\n        }\n    } else {\n        if (!authToken) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n        } else {\n            // verify\n            const res = await fetch(\"http://localhost:4000/api/auth/verify-token\", {\n                method: \"GET\",\n                headers: {\n                    Authorization: \"Bearer \" + authToken\n                }\n            });\n            const data = await res.json();\n            // console.log(\"middale\", data.userId)\n            if (data.userId !== userId) {\n                console.log(js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"token\"), js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"userId\"));\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n            }\n        }\n    }\n// const path = request.nextUrl.pathname\n// const isProtectedRoute = protectedRoutes.includes(path)\n// const isPublicRoute = publicRoutes.includes(path)\n// const data = useValidateUser(token.value)\n// console.log(\"token verification\",data)\n// if (!token) {\n//    return NextResponse.redirect(new URL('/login', request.url))\n// }\n// if ( request.nextUrl.pathname === \"/\") {\n//   return NextResponse.redirect(new URL('/', request.url))\n// }\n// if ( request.nextUrl.pathname === \"/products\") {\n//   return NextResponse.redirect(new URL('/products', request.url))\n// }\n// if ( request.nextUrl.pathname === \"/shop\") {\n//   return NextResponse.redirect(new URL('/shop', request.url))\n// }\n}\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/login\",\n        \"/signup\",\n        \"/\",\n        \"/products\",\n        \"/products/:path*\",\n        \"/shop\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUlWO0FBR2hDLDhEQUE4RDtBQUU5RCxnQ0FBZ0M7QUFDaEMsNkNBQTZDO0FBRXRDLGVBQWVFLFdBQVlDLE9BQW9CO0lBR3BELE1BQU1DLFlBQVlELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDO0lBQ2hELE1BQU1DLFNBQVNMLFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVdDO0lBQzlDLCtCQUErQjtJQUUvQixNQUFNRSxnQkFBZ0JOLFFBQVFPLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLFlBQVlSLFFBQVFPLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLO0lBRTVGLElBQUlGLGVBQWU7UUFDakIsSUFBSUwsV0FBVztZQUNiLE9BQU9KLGtGQUFZQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLVixRQUFRVyxHQUFHO1FBQ3ZEO0lBQ0YsT0FBTztRQUNMLElBQUksQ0FBQ1YsV0FBVztZQUNkLE9BQU9KLGtGQUFZQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixRQUFRVyxHQUFHO1FBQzVELE9BQU87WUFDTCxTQUFTO1lBQ1QsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLCtDQUErQztnQkFDckVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLGVBQWUsWUFBWWY7Z0JBQzdCO1lBQ0Y7WUFDQSxNQUFNZ0IsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO1lBQzNCLHNDQUFzQztZQUN0QyxJQUFJRCxLQUFLWixNQUFNLEtBQUtBLFFBQVM7Z0JBQzNCYyxRQUFRQyxHQUFHLENBQUN0QixpREFBT0EsQ0FBQ0ssR0FBRyxDQUFDLFVBQ3hCTCxpREFBT0EsQ0FBQ0ssR0FBRyxDQUFDO2dCQUNaLE9BQU9OLGtGQUFZQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixRQUFRVyxHQUFHO1lBQzVEO1FBQ0Y7SUFDRjtBQUdBLHdDQUF3QztBQUN4QywwREFBMEQ7QUFDMUQsb0RBQW9EO0FBQ3BELDRDQUE0QztBQUU1Qyx5Q0FBeUM7QUFHekMsZ0JBQWdCO0FBQ2hCLGtFQUFrRTtBQUNsRSxJQUFJO0FBRUosMkNBQTJDO0FBQzNDLDREQUE0RDtBQUM1RCxJQUFJO0FBRUosbURBQW1EO0FBQ25ELG9FQUFvRTtBQUNwRSxJQUFJO0FBRUosK0NBQStDO0FBQy9DLGdFQUFnRTtBQUNoRSxJQUFJO0FBQ047QUFFQSwyQ0FBMkM7QUFDcEMsTUFBTVUsU0FBUztJQUNwQkMsU0FBUztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0FBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyB1c2VWZXJpZnlUb2tlbiB9IGZyb20gJy4vaG9va3MvYXV0aC1ob29rcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG4gXHJcbi8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIG1hcmtlZCBgYXN5bmNgIGlmIHVzaW5nIGBhd2FpdGAgaW5zaWRlXHJcblxyXG4vLyBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbJy8nXVxyXG4vLyBjb25zdCBwdWJsaWNSb3V0ZXMgPSBbJy9sb2dpbicsICcvc2lnbnVwJ11cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlIChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG5cclxuICBcclxuICBjb25zdCBhdXRoVG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwidG9rZW5cIik/LnZhbHVlXHJcbiAgY29uc3QgdXNlcklkID0gcmVxdWVzdC5jb29raWVzLmdldChcInVzZXJJZFwiKT8udmFsdWVcclxuICAvLyBjb25zb2xlLmxvZyhcImlzZXJJRFwiLHVzZXJJZClcclxuXHJcbiAgY29uc3QgYWZ0ZXJMb2dnZWRJbiA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gXCIvbG9naW5cIiB8fCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL3NpZ251cFwiIFxyXG5cclxuICBpZiAoYWZ0ZXJMb2dnZWRJbikge1xyXG4gICAgaWYgKGF1dGhUb2tlbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghYXV0aFRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdmVyaWZ5XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9hdXRoL3ZlcmlmeS10b2tlblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgYXV0aFRva2VuXHJcbiAgICAgICAgfSBcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJtaWRkYWxlXCIsIGRhdGEudXNlcklkKVxyXG4gICAgICBpZiAoZGF0YS51c2VySWQgIT09IHVzZXJJZCApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb29raWVzLmdldChcInRva2VuXCIpLFxyXG4gICAgICAgIENvb2tpZXMuZ2V0KFwidXNlcklkXCIpKVxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAvLyBjb25zdCBwYXRoID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lXHJcbiAgLy8gY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9IHByb3RlY3RlZFJvdXRlcy5pbmNsdWRlcyhwYXRoKVxyXG4gIC8vIGNvbnN0IGlzUHVibGljUm91dGUgPSBwdWJsaWNSb3V0ZXMuaW5jbHVkZXMocGF0aClcclxuICAvLyBjb25zdCBkYXRhID0gdXNlVmFsaWRhdGVVc2VyKHRva2VuLnZhbHVlKVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcInRva2VuIHZlcmlmaWNhdGlvblwiLGRhdGEpXHJcblxyXG5cclxuICAvLyBpZiAoIXRva2VuKSB7XHJcbiAgLy8gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLycsIHJlcXVlc3QudXJsKSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmICggcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9wcm9kdWN0c1wiKSB7XHJcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9wcm9kdWN0cycsIHJlcXVlc3QudXJsKSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmICggcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9zaG9wXCIpIHtcclxuICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3Nob3AnLCByZXF1ZXN0LnVybCkpXHJcbiAgLy8gfVxyXG59XHJcbiBcclxuLy8gU2VlIFwiTWF0Y2hpbmcgUGF0aHNcIiBiZWxvdyB0byBsZWFybiBtb3JlXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1xyXG4gICAgXCIvbG9naW5cIiwgXHJcbiAgICBcIi9zaWdudXBcIixcclxuICAgIFwiL1wiLCBcclxuICAgIFwiL3Byb2R1Y3RzXCIsIFxyXG4gICAgXCIvcHJvZHVjdHMvOnBhdGgqXCIsIFxyXG4gICAgXCIvc2hvcFwiLCBcclxuICBdXHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiQ29va2llcyIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiYXV0aFRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwidXNlcklkIiwiYWZ0ZXJMb2dnZWRJbiIsIm5leHRVcmwiLCJwYXRobmFtZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});