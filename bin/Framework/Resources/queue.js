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
 * @file queue.js
 * @module queue
 * @description Implements the various functions of a queue,
 * using the specified name-space on the D-data structure.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/18
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var D = require('./data');
/**
 * @function initQueue
 * @description Initializes the queue with the provided namespace.
 * @param  {string} queueNameSpace The namespace the Queue array should be created under.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */


function initQueue(queueNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = initQueue.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);

  D[queueNameSpace] = [];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function dequeue
 * @description Gets the entity at the front of the queue, removes it from the queue and returns that entity.
 * @param {string} queueNameSpace The namespace the queue array should be dequeued from.
 * @return {string} The item at the front of the queue and removes it from the queue.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */

function dequeue(queueNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = dequeue.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);

  var returnValue;
  returnValue = D[queueNameSpace].shift();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @function enqueue
 * @description Adds the value to the specified namespace queue.
 * @param {string} queueNameSpace The namespace the queue array should have a value added to.
 * @param {string} value The value that should be added to the specified queue array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */

function enqueue(queueNameSpace, value) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = enqueue.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);

  D[queueNameSpace].push(value);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function isEmpty
 * @description Determines if the queue is empty or not empty.
 * @param {string} queueNameSpace The namespace the queue array should have a value added to.
 * @return {Boolean} True or False to indicate if the queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */

function isEmpty(queueNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = isEmpty.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);

  var returnValue;

  if (D[queueNameSpace] === undefined) {
    returnValue = true;
  } else {
    returnValue = D[queueNameSpace].length === 0;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @function queueFront
 * @description Gets the entity at the front of the queue.
 * @param {string} queueNameSpace The namespace the queue array from which the front of the queue should be found.
 * @return {string} The entity at the front of the queue.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */

function queueFront(queueNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = queueFront.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);

  var returnValue;
  returnValue = D[queueNameSpace][0];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @function queueSize
 * @description Gets the current size of the queue.
 * @param {string} queueNameSpace The namespace of the queue array from which we should get the current queue size.
 * @return {integer} A count for the number of entities in the specified queue.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */

function queueSize(queueNameSpace) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = queueSize.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);

  var returnValue;
  returnValue = D[queueNameSpace].length;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
var _default = {
  initQueue: initQueue,
  dequeue: dequeue,
  enqueue: enqueue,
  isEmpty: isEmpty,
  queueFront: queueFront,
  queueSize: queueSize
};
exports["default"] = _default;