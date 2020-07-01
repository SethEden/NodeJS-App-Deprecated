"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file stack.js
 * @module stack
 * @description Implements the various functions of a stack data structure,
 * using the specified name-space on the D-data structure.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/30
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var D = require('./data');
/**
 * @function initStack
 * @description Initializes the stack with the provided namespace.
 * @param {string} stackNameSpace The namespace the Stack array should be created under.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/30
 */


function initStack(stackNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = initStack.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  if (D[stackNameSpace] === undefined) {
    D[stackNameSpace] = [];
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' ALREADY exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function clearStack
 * @description Clears all contents of the stack so it can start fresh. It does not delete the stack completely!
 * @param {string} stackNameSpace The namespace for the stack that should be cleared.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function clearStack(stackNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = clearStack.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  if (D[stackNameSpace] !== undefined) {
    D[stackNameSpace] = [];
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function push
 * @description Pushes some data on the stack identified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace of the stack that should be used to push the data onto.
 * @param {string|integer|boolean|object|array} value The data that should be pushed on the stack.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function push(stackNameSpace, value) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = push.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);

  if (D[stackNameSpace] !== undefined) {
    D[stackNameSpace].push(value);
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function pop
 * @description Pops some data off the stack identified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace of the stack that should be used to pop the data and return it.
 * @return {string|integer|boolean|object|array} Whatever data was stored at the top of the stack.
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function pop(stackNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = pop.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  var returnData;

  if (D[stackNameSpace] !== undefined) {
    if (D[stackNameSpace].length === 0) {
      returnData = 'WARNING: Stack: ' + stackNameSpace + ' is empty!!';
      console.log(returnData);
    } else {
      returnData = D[stackNameSpace].pop();
    }
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function isEmpty
 * @description Determines if the stack specified by the namespace parameter is empty or not empty.
 * @param {string} stackNameSpace The namespace of the stack that should be checked if it is empty or not empty.
 * @return {Boolean} True or False to indicate if the specified stack is empty or not empty.
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function isEmpty(stackNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = isEmpty.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  var returnData = false;

  if (D[stackNameSpace] !== undefined) {
    if (D[stackNameSpace].length === 0) {
      returnData = true;
    }
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function length
 * @description Gets the length of the stack specified by the namespace parameter.
 * @param {string} stackNameSpace The namespace of the stack that should return a length property.
 * @return {integer} A value that represents a count of the number of entities on the specified stack.
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function length(stackNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = length.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  var returnData = -1;

  if (D[stackNameSpace] !== undefined) {
    returnData = D[stackNameSpace].length;
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function contains
 * @description Determines if the specified stack contains the specified value.
 * @param {string} stackNameSpace The namespace of the stack that should be searched for the specified value.
 * @param {string|integer|object|array} value The value/object that should be searched to see if it exists on the specified stack or does not exist.
 * @return {boolean} True or False to indicate if the value/object exists or does not exist.
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function contains(stackNameSpace, value) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = contains.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);

  var returnData = false;
  var containsRule = [];
  containsRule[0] = s.cdoesArrayContainCharacter;

  if (D[stackNameSpace] !== undefined) {
    returnData = _ruleBroker["default"].processRules(value, D[stackNameSpace], containsRule);
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function print
 * @description Prints out the stack as specified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace that should be used to print out the contents of the stack on the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/30
 */

function print(stackNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = contains.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stackNameSpace is: ' + stackNameSpace);

  if (D[stackNameSpace] !== undefined) {
    console.log('Contents of the stack namespace: ' + stackNameSpace + ' is: ' + JSON.stringify(D[stackNameSpace]));
  } else {
    console.log('WARNING: Stack: ' + stackNameSpace + ' does not exist!!');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
var _default = {
  initStack: initStack,
  clearStack: clearStack,
  push: push,
  pop: pop,
  isEmpty: isEmpty,
  length: length,
  contains: contains,
  print: print
};
exports["default"] = _default;