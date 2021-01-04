"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customEchoCommand = void 0;

var _warden = _interopRequireDefault(require("../../../../Framework/Controllers/warden"));

var _queue = _interopRequireDefault(require("../../../../Framework/Resources/queue"));

var c = _interopRequireWildcard(require("../../Constants/application.constants"));

var s = _interopRequireWildcard(require("../../../../Framework/Constants/system.constants"));

var b = _interopRequireWildcard(require("../../../../Framework/Constants/basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file clientCommands
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:warden
 * @requires module:queue
 * @requires module:application-constants
 * @requires module:system-constants
 * @requires module:basic-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function customEchoCommand
 * @description A quick command to validate that the new dynamic data storage technique for client commands.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */

var customEchoCommand = function customEchoCommand(inputData, inputMetaData) {
  // console.log('BEGIN clientStringParsing.customEchoCommand function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = c.ccustomEchoCommand;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = inputData + ' clientStringParsing.customEchoCommand';

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END clientStringParsing.customEcho function');


  return returnData;
};

exports.customEchoCommand = customEchoCommand;