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

var moment = require('moment');

var path = require('path');
/**
 * @name getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param  {[String]} formatting The formatting string, that tells moment in what format to return the value for the day, month, year, hour, minute, and second.
 * @return {[String]} A time stamp string that has been formatted according to the input format.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */


function getNowMoment(formatting) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getNowMoment.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input formatting value is: ' + formatting);

  var returnValue = moment().format(formatting);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @name reformatDeltaTime
 * @description Converts a time interval into a different kind of format.
 * @param  {[Integer]} deltaTime A time interval measured in microseconds.
 * @param {[String]} format The formatting template that should be used to format the time interval.
 * @return {[String]} A time interval formatted according to the input format template string.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */

function reformatDeltaTime(deltaTime, format) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = reformatDeltaTime.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'deltaTime is: ' + deltaTime);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'format is: ' + format);

  var returnDeltaTime;
  returnDeltaTime = moment.duration(deltaTime).format(format);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnDeltaTime is: ' + returnDeltaTime);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnDeltaTime;
}

;
var _default = {
  getNowMoment: getNowMoment,
  reformatDeltaTime: reformatDeltaTime
};
exports["default"] = _default;