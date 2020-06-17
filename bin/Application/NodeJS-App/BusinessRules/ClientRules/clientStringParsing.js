"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayCounter = exports.threePointAverage = exports.isAlmostPalindrome = exports.mostPopularNumber = exports.customEcho = void 0;

var _warden = _interopRequireDefault(require("../../../../Framework/Controllers/warden"));

var c = _interopRequireWildcard(require("../../Constants/application.constants"));

var s = _interopRequireWildcard(require("../../../../Framework/Constants/system.constants"));

var b = _interopRequireWildcard(require("../../../../Framework/Constants/basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file clientStringParsing.js
 * @module clientStringParsing
 * @description Contains all client defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:warden
 * @requires module:application-constants
 * @requires module:system-constants
 * @requires module:basic-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');
/**
 * @function customEcho
 * @description A quick business rule to validate that the new dynamic data storage technique for business rules.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2020/06/15
 */


var customEcho = function customEcho(inputData, inputMetaData) {
  // console.log('BEGIN clientStringParsing.customEcho function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = c.ccustomEcho;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = inputData + ' clientStringParsing.customEcho';

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END clientStringParsing.customEcho function');


  return returnData;
};
/**
 * @function mostPopularNumber
 * @description Parses through an array of integers and determine which value is the most popular.
 * @param {array<integer>} inputData The array that should be evaluated for most popular value.
 * @param {integer} inputMetaData The length of the array that was passed in.
 * @return {integer} The most popular value in the array.
 * @author Seth Hollingsead
 * @date 2020/05/20
 * @NOTE: NOT TESTED!!!!
 */


exports.customEcho = customEcho;

var mostPopularNumber = function mostPopularNumber(inputData, inputMetaData) {
  // console.log('BEGIN mostPopularNumber function');
  // console.log('inputArray is: ' + JSON.stringify(inputArray));
  // console.log('length is: ' + length);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = c.cmostPopularNumber;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  var i,
      j,
      instanceCounter = 0;
  var tempArray1 = [];
  var tempArray2 = [];
  console.log('BEGIN first for-loop');

  for (i = 0; i <= inputMetaData; i++) {
    console.log('BEGIN nested for-loop i = ' + i);

    for (j = 0; j <= inputMetaData; j++) {
      console.log('BEGIN iteration j = ' + j);

      if (inputData[i] === inputData[j]) {
        tempArray1[i] = inputData[i];
      }

      console.log('END iteration j = ' + j);
    }

    console.log('END nested for-loop i = ' + i);
  }

  console.log('END first for-loop');
  console.log('BEGIN second for-loop');

  for (i = 0; i <= tempArray1.length; i++) {
    console.log('BEGIN nested for-loop i = ' + i);

    for (j = 0; j <= tempArray1.length; j++) {
      console.log('BEGIN iteration j = ' + j);

      if (tempArray1[i] === inputData[j]) {
        tempArray2[i] = ++instanceCounter;
      }

      console.log('END iteration j = ' + j);
    }

    console.log('END nested for-loop i = ' + i);
  }

  console.log('END second for-loop');
  console.log('BEGIN third for-loop');
  console.log('tempArray2.length is: ' + tempArray2.length);

  for (i = 0; i <= tempArray2.length; i++) {
    console.log('BEGIN iteration i = ' + i);

    if (i === 0) {
      console.log('if-condition i = 0 has been met! i = ' + i);
      returnData = tempArray2[i];
    } else {
      console.log('if-condition-else i <> 0 has been met! i = ' + i);

      if (tempArray2[i] > tempArray2[i - 1]) {
        returnData = tempArray2[i];
      }

      console.log('done setting the return data: i = ' + i);
    }

    i += 1;
    console.log('END iteration i = ' + i);
  }

  console.log('END third for-loop');

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END mostPopularNumber function');


  return returnData;
};
/**
 * @function isAlmostPalindrome
 * @description Determines if the input string is almost a Palindrome string or not.
 * That is to say if the word is reversable or not reversable and if it is at least within
 * one character of being a palindrome string.
 * @param {string} inputData The string that should be evaluated to determine if it is a Palindrome string or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a Palindrome or almost palindrome string or not.
 * @author Seth Hollingsead
 * @date 2020/05/20
 * @NOTE: NOT TESTED!!!!
 */


exports.mostPopularNumber = mostPopularNumber;

var isAlmostPalindrome = function isAlmostPalindrome(inputData, inputMetaData) {
  // console.log('BEGIN isAlmostPalindrome function');
  // console.log('inputData is: ' + inputData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = c.cisAlmostPalindrome;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;
  var i, misCompareCount;
  misCompareCount = 0;

  for (i = 0; i < inputData.length; i++) {
    if (inputData.charAt(i) !== inputData.charAt(inputData.length - i)) {
      misCompareCount += 1;
    }
  }

  if (misCompareCount <= 1) {
    returnData = true;
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END isAlmostPalindrome function');


  return returnData;
}; // Implement a function to calculate the average distance between three points in a single plane,
// where the coordinates of these points are (x1, y1), (x2, y2) and (x3, y3).

/**
 * @function threePointAverage
 * @description Calculates the average of 3 coordinates in a 2-Dimensional plane.
 * @param {array<array<integer|float|double>>} inputPointArray The coordinate for the first point.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<integer|float|double>} Returns the XY coordinate of the average point between all points.
 * @author Seth Hollingsead
 * @date 2020/05/20
 * @NOTE: NOT TESTED!!!!
 */


exports.isAlmostPalindrome = isAlmostPalindrome;

var threePointAverage = function threePointAverage(inputPointArray, inputMetaData) {
  // console.log('BEGIN threePointAverage function');
  // console.log('inputPointArray is: ' + inputPointArray);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = c.cthreePointAverage;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  var xAverage, x1, x2, x3;
  var yAverage, y1, y2, y3;
  x1 = point1[0];
  x2 = point2[0];
  x3 = point3[0];
  y1 = point1[1];
  y2 = point2[1];
  y3 = point3[1]; // Calculate the X-averages:

  xAverage = (x1 + x2 + x3) / 3;
  yAverage = (y1 + y2 + y3) / 3;
  returnData = [xAverage, yAverage];

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END threePointAverage function');


  return returnData;
};
/**
 * @function arrayCounter
 * @description Receives an array and a value, counts the number of occurances of that value in the array.
 * @param {array<integer|string|object>} inputData The array which should have it's values counted.
 * @param {integer|string|object} inputMetaData The instance that should be counted in the array.
 * @return {integer} The count of the objects/values that was found to match out of the array
 * @author Seth Hollingsead
 * @date 2020/05/20
 */


exports.threePointAverage = threePointAverage;

var arrayCounter = function arrayCounter(inputData, inputMetaData) {
  // console.log('BEGIN arrayCounter function');
  // console.log('inputArray is: ' + inputArray);
  // console.log('instance is: ' + instance);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = c.carrayCounter;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var i;
  var returnData = 0;

  for (i = 0; i <= inputArray.length(); i++) {
    if (inputArray[i] === instance) {
      returnData += 1;
    }
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END arrayCounter function');


  return returnData;
};

exports.arrayCounter = arrayCounter;