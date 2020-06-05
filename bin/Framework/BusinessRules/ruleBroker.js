"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.processRules = void 0;

var rules = _interopRequireWildcard(require("./rulesLibrary"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:rulesLibrary
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');
/**
 * @function processRules
 * @description Parse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules are defined in the input rules map.
 * @param {string|integer|object|function} inputData The primary input data that should be processed by the business rule.
 * @param {string|integer|boolean|map} inputMetaData Additional meta-data that should be used when processing the business rule.
 * @param {map} rulesToExecute The name(s) of the rule(s) that should be executed for modding the input data.
 * @return {string|integer|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Seth Hollingsead
 * @date 2020/05/19
 * @NOTE: The code that has been commented out below, is left as a memorial of what NOT TO DO!
 * Because it causes a circular dependency as noted in the note below.
 * If you need to debug this function, you'll need to uncomment the console.logs that are hard-coded below.
 */


var processRules = function processRules(inputData, inputMetaData, rulesToExecute) {
  // NOTE Cannot call the Loggers.consoleLog from here because it causes a circular dependency.
  // We will have to hard-code the console logs and will not be able to write them to the log file.
  // consoe.log('BEGIN ruleBroker.processRules function');
  // console.log('inputData is: ' + JSON.stringify(inputData));
  // console.log('inputMetaData is: ' + JSON.stringify(inputMetaData));
  // console.log('rulesToExecute are: ' + JSON.stringify(rulesToExecute));
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = processRules';
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = inputData;

  for (var rule in rulesToExecute) {
    if (rulesToExecute.hasOwnProperty(rule)) {
      var key = rule; // loggers.consoleLog(baseFileName + b.cDot + functionName, 'key is: ' + key);
      // console.log('key is: ' + key);

      var value = rulesToExecute[key]; // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
      // console.log('value is: ' + value);

      returnData = rules.rulesLibrary[value](returnData, inputMetaData);
    }
  } // loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + JSON.stringify(returnData));
  // console.log('END ruleBroker.processRules function');


  return returnData;
};

exports.processRules = processRules;
var _default = {
  processRules: processRules
};
exports["default"] = _default;