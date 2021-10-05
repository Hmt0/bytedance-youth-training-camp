/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./doc.md":
/*!****************!*\
  !*** ./doc.md ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../index.js):\\nError [ERR_REQUIRE_ESM]: Must use import to load ES Module: D:\\\\GitHubProject\\\\bytedance-youth-training-camp\\\\Day02\\\\learn-webpack\\\\06\\\\node_modules\\\\remark\\\\index.js\\nrequire() of ES modules is not supported.\\nrequire() of D:\\\\GitHubProject\\\\bytedance-youth-training-camp\\\\Day02\\\\learn-webpack\\\\06\\\\node_modules\\\\remark\\\\index.js from D:\\\\GitHubProject\\\\bytedance-youth-training-camp\\\\Day02\\\\learn-webpack\\\\06\\\\index.js is an ES module file as it is a .js file whose nearest parent package.json contains \\\"type\\\": \\\"module\\\" which defines all .js files in that package scope as ES modules.\\nInstead rename D:\\\\GitHubProject\\\\bytedance-youth-training-camp\\\\Day02\\\\learn-webpack\\\\06\\\\node_modules\\\\remark\\\\index.js to end in .cjs, change the requiring code to use import(), or remove \\\"type\\\": \\\"module\\\" from D:\\\\GitHubProject\\\\bytedance-youth-training-camp\\\\Day02\\\\learn-webpack\\\\06\\\\node_modules\\\\remark\\\\package.json.\\n\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1089:13)\\n    at Module.load (internal/modules/cjs/loader.js:937:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\\n    at Module.require (internal/modules/cjs/loader.js:961:19)\\n    at require (C:\\\\Users\\\\luna6\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack-cli\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at Object.<anonymous> (D:\\\\GitHubProject\\\\bytedance-youth-training-camp\\\\Day02\\\\learn-webpack\\\\06\\\\index.js:4:20)\\n    at Module._compile (C:\\\\Users\\\\luna6\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack-cli\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)\\n    at Module.load (internal/modules/cjs/loader.js:937:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\");\n\n//# sourceURL=webpack:///./doc.md?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _doc_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc.md */ \"./doc.md\");\n/* harmony import */ var _doc_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_doc_md__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// 加载了非js文件\r\nconsole.log(_doc_md__WEBPACK_IMPORTED_MODULE_0___default.a)\r\nconsole.log(\"main\")\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });