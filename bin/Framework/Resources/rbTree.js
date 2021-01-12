/**
 * @file rbTree.js
 * @module rbTree
 * @description Implements the various functions of a Red-Black Binary Searc Tree data structure,
 * using the specified name-space on the D-data structure.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:rbNode
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead, mikolalysenko Mikola Lysenko, mourner Vladimir Agafonkin, Lambdac0re
 * @date 2021/01/05
 * @copyright {@link https://github.com/mikolalysenko/functional-red-black-tree}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var _rbNode = _interopRequireDefault(require("./rbNode"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = require('path');

var D = require('./data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
var RED = 0;
var BLACK = 1;
var root = {};
var rbTreeCompare;
var protoTree = rbTree.prototype;
/**
 * @function cloneNode
 * @description Clones a given node and returns the object.
 * @param {object} node The tree node object that should be cloned.
 * @return {object} The newly cloned node object.
 * @author Seth Hollingsead
 * @date 2020/01/05
 */

function cloneNode(node) {
  var functionName = cloneNode.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'node is: ' + JSON.stringify(node));

  var returnData = false;

  if (node != undefined && node != null && node != '' && _typeof(node) === 'object') {
    returnData = _rbNode["default"].rbNodeConstructor(node.nodeColor, node.nodeKey, node.nodeValue, node.nodeLeft, node.nodeRight, node.nodeCount);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function repaint
 * @description Changes the color of a node.
 * @param {integer} color The color the node should be changed to.
 * @param {object} node The node that should have it's color changed.
 * @return {object} The new node with the color changed.
 * @author Seth Hollingsead
 * @date 2020/01/06
 */

function repaint(color, node) {
  var functionName = repaint.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'color is: ' + color);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'node is: ' + JSON.stringify(node));

  var returnData = false;

  if (node != undefined && node != null && node != '' && _typeof(node) === 'object') {
    returnData = _rbNode["default"].rbNodeConstructor(color, node.nodeKey, node.nodeValue, node.nodeLeft, node.nodeRight, node.nodeCount);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function recount
 * @description Count all of the child nodes for a given node.
 * @param {object} node The node who's total child node count should be re-computed.
 * @return {integer} A count for all the nodes under the node that is passed in.
 * @author Seth Hollingsead
 * @date 2020/01/06
 */

function recount(node) {
  var functionName = recount.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'node is: ' + JSON.stringify(node));

  var returnData = false;

  if (node != undefined && node != null && node != '' && _typeof(node) === 'object') {
    node.nodeCount = 1 + (node.nodeLeft ? node.nodeLeft.nodeCount : 0) + (node.nodeRight ? node.nodeRight.nodeCount : 0);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function rbTree
 * @description Builds a Red-Black binary search tree (RB-BST) with an optional custom compare method for comparing nodes.
 * @param {function} compare The function that should be used to compare node values.
 * @param {object} root The root node of the new tree.
 * @return {void} Nothing to return.
 * @author Seth Hollingsead
 * @date 2020/01/06
 */

function rbTree(compare, rootNode) {
  var functionName = rbTree.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'node is: ' + JSON.stringify(node));

  var returnData = false;
  root = rootNode;
  rbTreeCompare = compare;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
var _default = {
  cloneNode: cloneNode,
  repaint: repaint
};
exports["default"] = _default;