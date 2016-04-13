(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rx"));
	else if(typeof define === 'function' && define.amd)
		define(["rx"], factory);
	else if(typeof exports === 'object')
		exports["cycleConnectionDriver"] = factory(require("rx"));
	else
		root["cycleConnectionDriver"] = factory(root["rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rx = __webpack_require__(1);
	
	function cycleConnectionDriver() {
	  var online$ = _rx.Observable.fromEvent(window, 'online').map(function () {
	    return 'online';
	  });
	  var offline$ = _rx.Observable.fromEvent(window, 'offline').map(function () {
	    return 'offline';
	  });
	
	  var currentStatus = window.navigator.onLine ? 'online' : 'offline';
	
	  var connectionStatus$ = _rx.Observable.merge(online$, offline$).startWith(currentStatus);
	
	  return connectionStatus$;
	}
	
	exports.default = cycleConnectionDriver;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cycle-connection-driver.js.map