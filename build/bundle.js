module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Webtask = __webpack_require__(1);

	// This is the entry-point for the Webpack build. We need to convert our module
	// (which is a simple Express server) into a Webtask-compatible function.
	module.exports = Webtask.fromExpress(__webpack_require__(2));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("webtask-tools");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(3);
	var express = __webpack_require__(4);

	var app = express();

	app.get('/meta', function (req, res) {
	    res.status(200).send();
	});

	app.post('/meta', function (req, res) {
	    res.status(200).send();
	});

	app.get('/meta', function (req, res) {
	    res.status(200).send(metadata);
	});

	module.exports = app;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"title": "OIE-Auth0 user update webhook test",
		"name": "oie-auth0-user-webhook-test",
		"version": "1.8.0",
		"author": "OIEngine",
		"description": "Web hook for updating user profile on OIE side",
		"type": "cron",
		"logoUrl": "https://cdn.auth0.com/extensions/auth0-webhooks/assets/logo.svg",
		"repository": "https://github.com/oiengine/oie-auth0-user-update-webhook",
		"keywords": [
			"auth0",
			"extension"
		],
		"schedule": "0 */1 * * * *",
		"secrets": {
			"BATCH_SIZE": {
				"description": "The ammount of logs to be read on each execution. Maximun is 100.",
				"default": 100
			}
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ }
/******/ ]);