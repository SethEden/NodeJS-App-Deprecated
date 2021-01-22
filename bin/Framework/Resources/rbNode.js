/**
 * @file rbNode.js
 * @module rbNode
 * @description Implements the basic structure of a red-black binary search tree node.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead, mikolalysenko Mikola Lysenko, mourner Vladimir Agafonkin, Lambdac0re
 * @date 2021/01/05
 * @copyright {@link https://github.com/mikolalysenko/functional-red-black-tree}
 */
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

var path = require('path');

var D = require('./data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function rbNodeConstructor
 * @description The Red-Black Node object.
 * @param {integer} color The color of this node (Red or Black)
 * @param {string} key The key or unique name/ID for this node.
 * @param {string|integer|boolean|array|object} value The value or data-object stored with this node.
 * @param {object} left Referance to the left child from this node.
 * @param {object} right Referance to the right child from this node.
 * @param {integer} count The count of nodes under this node.
 * @returns {object} The node object that is created as a JSON object.
 * @author Seth Hollingsead
 * @date 2021/01/05
 */

function rbNodeConstructor(color, key, value, left, right, count) {
  var functionName = rbNodeConstructor.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'color is: ' + color);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'key is: ' + key);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'left is: ' + left);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'right is: ' + right);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'count is: ' + count);

  var returnData = {
    nodeColor: color,
    nodeKey: key,
    nodeValue: value,
    nodeLeft: left,
    nodeRight: right,
    nodeCount: count
  };

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
var _default = {
  rbNodeConstructor: rbNodeConstructor
};
exports["default"] = _default;