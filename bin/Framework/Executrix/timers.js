"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configurator = _interopRequireDefault(require("./configurator"));

var _loggers = _interopRequireDefault(require("./loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../Constants/generic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file timers.js
 * @module timers
 * @description Contains all of the functions needed for generating time stamps,
 * reformatting time stamps and tracking time durations.
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var moment = require('moment');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to return the value for the day, month, year, hour, minute, and second.
 * @return {string} A time stamp string that has been formatted according to the input format.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */

function getNowMoment(formatting) {
  var functionName = getNowMoment.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // formatting is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cformattingIs + formatting);

  var returnData = '';
  returnData = moment().format(formatting);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @name computeDeltaTime
 * @description Gets the names of the beginning time and ending time, looks up those variables in the testData,
 * converts them to moment objects and uses moment to compute a time difference between the two time stamps in seconds.
 * @param {string} startTime The start of the time period that should be computed.
 * @param {string} endTime The end of the time period that should be computed.
 * @return {integer} The difference between the beginning time and ending time in milliseconds.
 * @author Seth Hollingsead
 * @date 2020/03/04 - Refactored on 2020/06/30
 */

function computeDeltaTime(startTime, endTime) {
  // console.log('BEGIN timer.computeDeltaTime function');
  // console.log('level is: ' + level);
  var functionName = computeDeltaTime.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // startTime is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cstartTimeIs + startTime); // endTime is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cendTimeIs + endTime);

  var deltaTimeResult;
  startTime = moment(startTime, g.cYYYYMMDD_HHmmss_SSS);
  endTime = moment(endTime, g.cYYYYMMDD_HHmmss_SSS);
  deltaTimeResult = endTime.diff(startTime); // Should work in milliseconds out of the box!
  // console.log('deltaTimeResult is: ' + deltaTimeResult);
  // console.log('END timer.computeDeltaTime function');
  // deltaTimeResult is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cdeltaTimeResultIs + deltaTimeResult);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return deltaTimeResult;
}

;
/**
 * @function reformatDeltaTime
 * @description Converts a time interval into a different kind of format.
 * @param {integer} deltaTime A time interval measured in microseconds.
 * @param {string} format The formatting template that should be used to format the time interval.
 * @return {string} A time interval formatted according to the input format template string.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */

function reformatDeltaTime(deltaTime, format) {
  var functionName = reformatDeltaTime.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // deltaTime is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cdeltaTimeIs + deltaTime); // format is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cformatIs + format);

  var returnDeltaTime = '';
  returnDeltaTime = moment.duration(deltaTime).format(format); // returnDeltaTime is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDeltaTimeIs + returnDeltaTime);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnDeltaTime;
}

;
/**
 * @function sleep
 * @description Causes the javascript code to wait for a period of time defined by the input.
 * @param {integer} sleepTime The number of milliseconds that the system should sleep for.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/30
 * {@link https://www.sitepoint.com/delay-sleep-pause-wait/}
 */

function sleep(sleepTime) {
  var functionName = reformatDeltaTime.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // sleepTime is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.csleepTimeIs + sleepTime);

  var date = moment();
  var currentDate = null;

  do {
    currentDate = moment();
  } while (currentDate - date < sleepTime);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
var _default = {
  getNowMoment: getNowMoment,
  computeDeltaTime: computeDeltaTime,
  reformatDeltaTime: reformatDeltaTime,
  sleep: sleep
};
exports["default"] = _default;