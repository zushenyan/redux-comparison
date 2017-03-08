/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar fetchData = exports.fetchData = function fetchData(_ref) {\n  var onSuccess = _ref.onSuccess,\n      onError = _ref.onError,\n      onAbort = _ref.onAbort,\n      onProgress = _ref.onProgress;\n\n  var xhr = new XMLHttpRequest();\n  xhr.addEventListener(\"load\", onSuccess);\n  xhr.addEventListener(\"progress\", onProgress);\n  xhr.addEventListener(\"error\", onError);\n  xhr.addEventListener(\"abort\", onAbort);\n  xhr.open(\"GET\", window.location.origin + \"/api\");\n  return xhr;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/api.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/api.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _api = __webpack_require__(0);\n\n(0, _api.fetchData)({\n  onSuccess: function onSuccess(data) {\n    console.log(data);\n  },\n  onError: function onError(error) {\n    console.log(error);\n  },\n  onProgress: function onProgress(data) {\n    console.log(data);\n  },\n  onAbort: function onAbort(event) {\n    console.log(event);\n  }\n}).send();\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/example1.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/example1.js?");

/***/ })
/******/ ]);