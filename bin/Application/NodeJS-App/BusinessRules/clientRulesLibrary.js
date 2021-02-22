"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initClientRulesLibrary = void 0;

var clientStringParsing = _interopRequireWildcard(require("./ClientRules/clientStringParsing"));

var apc = _interopRequireWildcard(require("../Constants/application.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @function initClientRulesLibrary
 * @description Initializes an object map of client business rules and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
var initClientRulesLibrary = function initClientRulesLibrary() {
  var _ref;

  // console.log('BEGIN clientRulesLibrary.initClientRulesLibrary function');
  // console.log('END clientRulesLibrary.initClientRulesLibrary function');
  return _ref = {}, _defineProperty(_ref, apc.cclientEcho, function (inputData, inputMetaData) {
    return inputData, inputMetaData;
  }), _defineProperty(_ref, apc.ccustomEcho, function (inputData, inputMetaData) {
    return clientStringParsing.customEcho(inputData, inputMetaData);
  }), _defineProperty(_ref, apc.cmostPopularNumber, function (inputData, inputMetaData) {
    return clientStringParsing.mostPopularNumber(inputData, inputMetaData);
  }), _defineProperty(_ref, apc.cisAlmostPalindrome, function (inputData, inputMetaData) {
    return clientStringParsing.isAlmostPalindrome(inputData, inputMetaData);
  }), _defineProperty(_ref, apc.cthreePointAverage, function (inputData, inputMetaData) {
    return clientStringParsing.threePointAverage(inputData, inputMetaData);
  }), _defineProperty(_ref, apc.carrayCounter, function (inputData, inputMetaData) {
    return clientStringParsing.arrayCounter(inputData, inputMetaData);
  }), _ref;
};

exports.initClientRulesLibrary = initClientRulesLibrary;
var _default = {
  initClientRulesLibrary: initClientRulesLibrary
};
exports["default"] = _default;