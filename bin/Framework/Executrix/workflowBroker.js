"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all of the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var D = require('../Resources/data');
/**
 * @function getWorkflow
 * @description Given the name of the workflow that is being requested,
 * get that workflow from the D-data structure workflows data hive.
 * @param {string} workflowName The name of the workflow we should get workflow data for.
 * @return {string} The workflow value, which ideally would be a list of commands and command parameters.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */


function getWorkflow(workflowName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getWorkflow.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'workflowName is: ' + workflowName);

  var workflowValue = '';
  var arrayOfWorkflows = D[s.cCommandWorkflows][s.cWorkflow];

  for (var i = 0; i < arrayOfWorkflows.length; i++) {
    var currentWorkflow = arrayOfWorkflows[i];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentWorkflow is: ' + JSON.stringify(currentWorkflow));

    if (currentWorkflow[s.cname] === workflowName) {
      workflowValue = currentWorkflow[s.cvalue];

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'workflowValue is: ' + JSON.stringify(workflowValue));

      break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'workflowValue is: ' + workflowValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return workflowValue;
}

;
var _default = {
  getWorkflow: getWorkflow
};
exports["default"] = _default;