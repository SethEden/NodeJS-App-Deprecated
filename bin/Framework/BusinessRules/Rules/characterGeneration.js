"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertNumberToLowerCaseLetter = exports.convertNumberToUpperCaseLetter = exports.randomlyGenerateUpperCaseLetter2 = exports.randomlyGenerateUpperCaseLetter1 = exports.randomlyGenerateLowerCaseLetter2 = exports.randomlyGenerateLowerCaseLetter1 = exports.randomlyGenerateMixedCaseAlphabeticCharacter2 = exports.randomlyGenerateMixedCaseAlphabeticCharacter1 = exports.randomlyGenerateBooleanValue2 = exports.randomlyGenerateBooleanValue1 = exports.randomlyGenerateNumberInRange2 = exports.randomlyGenerateNumberInRange1 = exports.randomlyGenerateSpecialCharacter2 = exports.randomlyGenerateSpecialCharacter1 = exports.randomlyGenerateNumericCharacter2 = exports.randomlyGenerateNumericCharacter1 = exports.randomlyGenerateLowerCaseAlphaNumericCharacter2 = exports.randomlyGenerateLowerCaseAlphaNumericCharacter1 = exports.randomlyGenerateUpperCaseAlphaNumericCharacter2 = exports.randomlyGenerateUpperCaseAlphaNumericCharacter1 = exports.randomlyGenerateMixedCaseAlphaNumericCharacter2 = exports.randomlyGenerateMixedCaseAlphaNumericCharacter1 = exports.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = exports.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = exports.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = exports.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = exports.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = exports.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = exports.randomlyGenerateLowerCaseLetterOrSpecialCharacter2 = exports.randomlyGenerateLowerCaseLetterOrSpecialCharacter1 = exports.randomlyGenerateUpperCaseLetterOrSpecialCharacter2 = exports.randomlyGenerateUpperCaseLetterOrSpecialCharacter1 = exports.randomlyGenerateMixedCaseLetterOrSpecialCharacter2 = exports.randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = void 0;

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var _stringParsing = require("./stringParsing");

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../Constants/generic.constants"));

var n = _interopRequireWildcard(require("../../Constants/numeric.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file characterGeneration.js
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * There are two versions of each function, an old implementation and a new implementation.
 * @NOTE Performance analysis was completed here are the results:
┌─────────┬─────────────────────────────────────────────────────────────────────────┬───────────┬────────────────────┐
│ (index) │                                  Name                                   │  Average  │ StandardDeviation  │
├─────────┼─────────────────────────────────────────────────────────────────────────┼───────────┼────────────────────┤
│    0    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter1'           │  1.6481   │ 2.233084501311769  │
│    1    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter1'           │  1.4741   │ 1.5680335423708824 │
│    2    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter1'           │  1.4857   │ 2.0624731537647225 │
│    3    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1'    │  1.9071   │ 2.016201773136808  │
│    4    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1'    │  1.7206   │ 1.8771615913393418 │
│    5    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1'    │   1.685   │ 1.6677454841792763 │
│    6    │            'randomlyGenerateMixedCaseAlphaNumericCharacter1'            │  1.6557   │ 2.3226186751167095 │
│    7    │            'randomlyGenerateUpperCaseAlphaNumericCharacter1'            │  1.4815   │ 1.9694308187900527 │
│    8    │            'randomlyGenerateLowerCaseAlphaNumericCharacter1'            │  1.4018   │  1.37177139494886  │
│    9    │                   'randomlyGenerateNumericCharacter1'                   │  0.9817   │ 1.5121392495402006 │
│   10    │                   'randomlyGenerateSpecialCharacter1'                   │  1.0919   │ 1.5030816311831114 │
│   11    │                    'randomlyGenerateNumberInRange1'                     │  0.8734   │ 1.030326375475245  │
│   12    │                     'randomlyGenerateBooleanValue1'                     │  0.4532   │ 0.7014340738800808 │
│   13    │             'randomlyGenerateMixedCaseAlphabeticCharacter1'             │  1.4898   │ 1.5096674998158248 │
│   14    │                   'randomlyGenerateLowerCaseLetter1'                    │  1.2216   │ 1.5000311463433034 │
│   15    │                   'randomlyGenerateUpperCaseLetter1'                    │  1.3521   │ 1.9987309949067644 │
│   16    │                 'generateRandomMixedCaseTextByLength1'                  │  99.6258  │ 22.32018311663247  │
│   17    │                 'generateRandomUpperCaseTextByLength1'                  │  73.0099  │ 20.22951808595531  │
│   18    │                 'generateRandomLowerCaseTextByLength1'                  │  71.8953  │ 14.889067731392686 │
│   19    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength1'       │ 107.3136  │ 23.303691875753202 │
│   20    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength1'       │  93.1208  │ 18.53444920573566  │
│   21    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength1'       │  93.3671  │ 20.090180128361254 │
│   22    │           'generateRandomMixedCaseAlphaNumericCodeByLength1'            │ 107.6398  │ 29.277114884495585 │
│   23    │           'generateRandomUpperCaseAlphaNumericCodeByLength1'            │  95.2911  │ 21.084467287318414 │
│   24    │           'generateRandomLowerCaseAlphaNumericCodeByLength1'            │  96.0526  │ 21.597380240205034 │
│   25    │                  'generateRandomNumericCodeByLength1'                   │  55.6532  │ 11.73260967389578  │
│   26    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 133.7189  │ 29.413097130190057 │
│   27    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 116.2205  │ 24.117957619790264 │
│   28    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 113.7952  │ 19.35579130286338  │
│   29    │              'generateRandomSpecialCharacterCodeByLength1'              │  56.7322  │ 14.975549511119663 │
│   30    │                          'generateValidEmail1'                          │ 121.29785 │ 25.637797007104464 │
│   31    │                         'generateInvalidEmail1'                         │ 60.34375  │ 58.054091035322394 │
└─────────┴─────────────────────────────────────────────────────────────────────────┴───────────┴────────────────────┘
┌─────────┬─────────────────────────────────────────────────────────────────────────┬─────────┬────────────────────┐
│ (index) │                                  Name                                   │ Average │ StandardDeviation  │
├─────────┼─────────────────────────────────────────────────────────────────────────┼─────────┼────────────────────┤
│    0    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter2'           │ 0.9326  │ 1.2736001099245762 │
│    1    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter2'           │ 1.1998  │ 1.3664113436297474 │
│    2    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter2'           │ 1.1721  │ 1.8551769699951877 │
│    3    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2'    │ 1.1196  │ 1.3541402586142757 │
│    4    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2'    │ 1.1351  │ 1.1274963370229159 │
│    5    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2'    │ 2.9792  │  2.89578441186493  │
│    6    │            'randomlyGenerateMixedCaseAlphaNumericCharacter2'            │ 3.2928  │  3.70214372492479  │
│    7    │            'randomlyGenerateUpperCaseAlphaNumericCharacter2'            │  2.846  │ 2.620931895338077  │
│    8    │            'randomlyGenerateLowerCaseAlphaNumericCharacter2'            │ 2.8454  │ 2.2431448548856245 │
│    9    │                   'randomlyGenerateNumericCharacter2'                   │ 2.8697  │ 2.6386970098896674 │
│   10    │                   'randomlyGenerateSpecialCharacter2'                   │ 2.6609  │ 2.6647910218251822 │
│   11    │                    'randomlyGenerateNumberInRange2'                     │ 1.9304  │ 2.191153997326579  │
│   12    │                     'randomlyGenerateBooleanValue2'                     │ 0.6266  │ 1.215965640961947  │
│   13    │             'randomlyGenerateMixedCaseAlphabeticCharacter2'             │ 2.9963  │ 3.2733295449741773 │
│   14    │                   'randomlyGenerateLowerCaseLetter2'                    │ 3.3398  │ 3.4043113782378844 │
│   15    │                   'randomlyGenerateUpperCaseLetter2'                    │ 3.0808  │ 2.926340950743783  │
│   16    │                 'generateRandomMixedCaseTextByLength2'                  │ 76.1137 │ 20.486546129350405 │
│   17    │                 'generateRandomUpperCaseTextByLength2'                  │ 69.4909 │ 14.787316091502174 │
│   18    │                 'generateRandomLowerCaseTextByLength2'                  │ 60.8439 │ 25.049577497235223 │
│   19    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength2'       │ 22.4851 │ 2.6385560426111554 │
│   20    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength2'       │ 22.3307 │  3.86180495494013  │
│   21    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength2'       │ 22.2457 │ 3.668723416939424  │
│   22    │           'generateRandomMixedCaseAlphaNumericCodeByLength2'            │ 22.4306 │ 3.988757154803981  │
│   23    │           'generateRandomUpperCaseAlphaNumericCodeByLength2'            │ 22.1302 │ 2.3636090962764222 │
│   24    │           'generateRandomLowerCaseAlphaNumericCodeByLength2'            │ 22.0949 │ 2.121813844332074  │
│   25    │                  'generateRandomNumericCodeByLength2'                   │ 22.3365 │ 4.541659140666275  │
│   26    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.0101 │ 2.2408029788451076 │
│   27    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.6002 │ 4.254639815542473  │
│   28    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.3309 │ 2.902827103015252  │
│   29    │              'generateRandomSpecialCharacterCodeByLength2'              │ 17.3891 │ 1.4044576141700058 │
│   30    │                          'generateValidEmail2'                          │ 21.2585 │ 4.866063886756967  │
│   31    │                         'generateInvalidEmail2'                         │ 11.1406 │ 10.721717756031204 │
└─────────┴─────────────────────────────────────────────────────────────────────────┴─────────┴────────────────────┘
 * @NOTE The results speak for themselves. The numbers do not lie. The above results were generated after running each business rule 10,000 times.
 * Each time a run-time was captured and using the business rule performance metrics system to average them all and compute the standard deviation.
 * Another test run was done with just 1,000 times for each business rule. Both results are also included with the NodeJS-App root folder in TXT files.
 * In summary all of the results clearly indicate that the 2nd version of these functions is significantly more performant, and where from 2-4 times as fast.
 * HOWEVER, I do not have the heart to remove all these functions from the code base. Since this NodeJS-App Framework/Platform is intended to be forked to build custom applications, I will leave the removal of these redundant functions as an exercise for the developer who chooses to inherit this code.
 * Future versions might have this redundant code removed, but I will leave it in for now.
 * At least we now have hard evidence, knowledge, and proof as to which algorthim performs better.
 * Because knowing is half the battle! Knowledge is power!! :-D
 * @NOTE This note is included with the test results in the both the characterGeneration.js file & stringGeneration.js file.
 * @requires module:loggers
 * @requires module:stringParsing
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */

var randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = function randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);

  if (typeToGenerate === true) {
    returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = randomlyGenerateMixedCaseLetterOrSpecialCharacter1;

var randomlyGenerateMixedCaseLetterOrSpecialCharacter2 = function randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateMixedCaseLetterOrSpecialCharacter2 = randomlyGenerateMixedCaseLetterOrSpecialCharacter2;

var randomlyGenerateUpperCaseLetterOrSpecialCharacter1 = function randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);

  if (typeToGenerate === true) {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateUpperCaseLetterOrSpecialCharacter1 = randomlyGenerateUpperCaseLetterOrSpecialCharacter1;

var randomlyGenerateUpperCaseLetterOrSpecialCharacter2 = function randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateUpperCaseLetterOrSpecialCharacter2 = randomlyGenerateUpperCaseLetterOrSpecialCharacter2;

var randomlyGenerateLowerCaseLetterOrSpecialCharacter1 = function randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);

  if (typeToGenerate === true) {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateLowerCaseLetterOrSpecialCharacter1 = randomlyGenerateLowerCaseLetterOrSpecialCharacter1;

var randomlyGenerateLowerCaseLetterOrSpecialCharacter2 = function randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cLowerCaseEnglishAlphabet);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randommly returns a random number, a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateLowerCaseLetterOrSpecialCharacter2 = randomlyGenerateLowerCaseLetterOrSpecialCharacter2;

var randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = n.c3;
  var c9 = n.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(n.c1, [n.c3, g.cTrue, g.cTrue]); // typeToGenerate is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cCharacterGenerationMessage1 + typeToGenerate);

  switch (typeToGenerate) {
    case 1:
    case n.c1:
      // Generate a number.
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cCharacterGenerationMessage2);

      returnData = randomlyGenerateNumberInRange1(n.c0, [n.c9, g.cTrue, g.cTrue]);
      break;

    case 2:
    case n.c2:
      // Generate a random upper case or lower case letter.
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cCharacterGenerationMessage3);

      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;

    case 3:
    case n.c3:
      // Generate a special character.
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cCharacterGenerationMessage4);

      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;

    default:
      // DEFAULT: Generate a random upper case or lower case letter.
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cCharacterGenerationMessage5);

      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randommly returns a random number, a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;

var randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet + g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;

var randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = n.c3;
  var c9 = n.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(n.c1, [n.c3, g.cTrue, g.cTrue]);

  switch (typeToGenerate) {
    case 1:
    case '1':
      // Generate a number.
      returnData = randomlyGenerateNumberInRange1(n.c0, [n.c9, g.cTrue, g.cTrue]);
      break;

    case 2:
    case '2':
      // Generate a random upper case letter.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;

    case 3:
    case '3':
      // Generate a special character.
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;

    default:
      // Default to a random upper case letter as a fall-back.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;

var randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randonly returns a random number, a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;

var randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = n.c3;
  var c9 = n.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(n.c1, [n.c3, g.cTrue, g.cTrue]);

  switch (typeToGenerate) {
    case 1:
    case '1':
      // Generate a number.
      returnData = randomlyGenerateNumberInRange1(n.c0, [n.c9, g.cTrue, g.cTrue]);
      break;

    case 2:
    case '2':
      // Generate a random lower case letter.
      returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
      break;

    case 3:
    case '3':
      // Generate a special character.
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;

    default:
      // Default to a random lower case letter as a fall-back.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randonly returns a random number, a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;

var randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cLowerCaseEnglishAlphabet + g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter1
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;

var randomlyGenerateMixedCaseAlphaNumericCharacter1 = function randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateMixedCaseAlphaNumericCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number
  } else {
    returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter2
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateMixedCaseAlphaNumericCharacter1 = randomlyGenerateMixedCaseAlphaNumericCharacter1;

var randomlyGenerateMixedCaseAlphaNumericCharacter2 = function randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateMixedCaseAlphaNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet + g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter1
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateMixedCaseAlphaNumericCharacter2 = randomlyGenerateMixedCaseAlphaNumericCharacter2;

var randomlyGenerateUpperCaseAlphaNumericCharacter1 = function randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateUpperCaseAlphaNumericCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number.
  } else {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter2
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateUpperCaseAlphaNumericCharacter1 = randomlyGenerateUpperCaseAlphaNumericCharacter1;

var randomlyGenerateUpperCaseAlphaNumericCharacter2 = function randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateUpperCaseAlphaNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter1
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateUpperCaseAlphaNumericCharacter2 = randomlyGenerateUpperCaseAlphaNumericCharacter2;

var randomlyGenerateLowerCaseAlphaNumericCharacter1 = function randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number.
  } else {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter2
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateLowerCaseAlphaNumericCharacter1 = randomlyGenerateLowerCaseAlphaNumericCharacter1;

var randomlyGenerateLowerCaseAlphaNumericCharacter2 = function randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cLowerCaseEnglishAlphabet + g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateNumericCharacter1
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateLowerCaseAlphaNumericCharacter2 = randomlyGenerateLowerCaseAlphaNumericCharacter2;

var randomlyGenerateNumericCharacter1 = function randomlyGenerateNumericCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateNumericCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateNumberInRange1(n.c0, [n.c9, g.cTrue, g.cTrue]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateNumericCharacter2
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateNumericCharacter1 = randomlyGenerateNumericCharacter1;

var randomlyGenerateNumericCharacter2 = function randomlyGenerateNumericCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cAllNumbers);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateSpecialCharacter1
 * @description Randommly select a special character from a list of allowable special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A special character randomly selected from the input list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateNumericCharacter2 = randomlyGenerateNumericCharacter2;

var randomlyGenerateSpecialCharacter1 = function randomlyGenerateSpecialCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var cTrue = g.cTrue;

  if (inputData) {
    var inputDataLength = inputData.length.toString();
    var number = randomlyGenerateNumberInRange1(n.c1, [inputDataLength, g.cTrue, g.cTrue]); // @NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.

    returnData = inputData.substring(number - 1, number);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateSpecialCharacter2
 * @description Randommly select a special character from a list of allowable special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A special character randomly selected from the input list of allowable special characters.
 * @NOTE: NEW implementation.
 * @NOTE This is the same implementation as version 1.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateSpecialCharacter1 = randomlyGenerateSpecialCharacter1;

var randomlyGenerateSpecialCharacter2 = function randomlyGenerateSpecialCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var cTrue = g.cTrue;

  if (inputData) {
    var inputDataLength = inputData.length.toString();
    var number = randomlyGenerateNumberInRange1(n.c1, [inputDataLength, g.cTrue, g.cTrue]); // @NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.

    returnData = inputData.substring(number - 1, number);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateNumberInRange1
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData an array with multiple input parameters:
 *  maximumValue - A string that contains the number with the maximum value.
 *  includeMaximum - A Boolean value that indicates if the maximum should be included or excluded from the range of allowable range of values to return from.
 *  addMinimum - A Boolean value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateSpecialCharacter2 = randomlyGenerateSpecialCharacter2;

var randomlyGenerateNumberInRange1 = function randomlyGenerateNumberInRange1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateNumberInRange1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = '';

  if (inputData && inputMetaData) {
    var minimum = parseInt(inputData);
    var maximum = parseInt(inputMetaData[0]);
    var addOne = (0, _stringParsing.stringToBoolean)(inputMetaData[1], '');
    var addMinimum = (0, _stringParsing.stringToBoolean)(inputMetaData[2], '');

    if (addOne === true) {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1));
      }
    } else {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum));
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData.toString();
};
/**
 * @function randomlyGenerateNumberInRange2
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData A map with multiple input parameters:
 *  maximumValue - A string that contains the number with the maximum value.
 *  includeMaximum - A Boolean value that indicates if the maximum should be included or excluded from the range of allowable range of values to return from.
 *  addMinimum - A Boolean value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @NOTE: NEW implementation.
 * @NOTE This is the same implementation as version 1.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateNumberInRange1 = randomlyGenerateNumberInRange1;

var randomlyGenerateNumberInRange2 = function randomlyGenerateNumberInRange2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateNumberInRange2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData && inputMetaData) {
    var minimum = parseInt(inputData);
    var maximum = parseInt(inputMetaData[0]);
    var addOne = (0, _stringParsing.stringToBoolean)(inputMetaData[1]);
    var addMinimum = (0, _stringParsing.stringToBoolean)(inputMetaData[2]);

    if (addOne === true) {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1));
      }
    } else {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum));
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData.toString();
};
/**
 * @function randomlyGenerateBooleanValue1
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value that is either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateNumberInRange2 = randomlyGenerateNumberInRange2;

var randomlyGenerateBooleanValue1 = function randomlyGenerateBooleanValue1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateBooleanValue1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = Math.random() >= 0.5;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateBooleanValue2
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value that is either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @NOTE: NEW implementation.
 * @NOTE This is the same implementation as version 1.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateBooleanValue1 = randomlyGenerateBooleanValue1;

var randomlyGenerateBooleanValue2 = function randomlyGenerateBooleanValue2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateBooleanValue2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = Math.random() >= 0.5;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter1
 * @description Randomly generates either an upper case or lower case random alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z or A-Z.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateBooleanValue2 = randomlyGenerateBooleanValue2;

var randomlyGenerateMixedCaseAlphabeticCharacter1 = function randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter2
 * @description Randomly generates either an upper case or lower case random alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z or A-Z.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateMixedCaseAlphabeticCharacter1 = randomlyGenerateMixedCaseAlphabeticCharacter1;

var randomlyGenerateMixedCaseAlphabeticCharacter2 = function randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateLowerCaseLetter1
 * @description Randomly generates a lower case alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateMixedCaseAlphabeticCharacter2 = randomlyGenerateMixedCaseAlphabeticCharacter2;

var randomlyGenerateLowerCaseLetter1 = function randomlyGenerateLowerCaseLetter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateLowerCaseLetter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c26 = n.c2 + n.c6;
  var cTrue = g.cTrue;
  returnData = convertNumberToLowerCaseLetter(randomlyGenerateNumberInRange1(n.c1, [n.c26, g.cTrue, g.cTrue]));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateLowerCaseLetter2
 * @description Randomly generates a lower case alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateLowerCaseLetter1 = randomlyGenerateLowerCaseLetter1;

var randomlyGenerateLowerCaseLetter2 = function randomlyGenerateLowerCaseLetter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateLowerCaseLetter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cLowerCaseEnglishAlphabet);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateUpperCaseLetter1
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


exports.randomlyGenerateLowerCaseLetter2 = randomlyGenerateLowerCaseLetter2;

var randomlyGenerateUpperCaseLetter1 = function randomlyGenerateUpperCaseLetter1(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateUpperCaseLetter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c26 = n.c2 + n.c6;
  var cTrue = g.cTrue;
  returnData = convertNumberToUpperCaseLetter(randomlyGenerateNumberInRange1(n.c1, [n.c26, g.cTrue, g.cTrue]));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateUpperCaseLetter2
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateUpperCaseLetter1 = randomlyGenerateUpperCaseLetter1;

var randomlyGenerateUpperCaseLetter2 = function randomlyGenerateUpperCaseLetter2(inputData, inputMetaData) {
  var functionName = s.crandomlyGenerateUpperCaseLetter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertNumberToUpperCaseLetter
 * @description Converts a number from 1-26 into a upper case letter of the alphabet A-Z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that should be converted to an upper case letter of the alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter A-Z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateUpperCaseLetter2 = randomlyGenerateUpperCaseLetter2;

var convertNumberToUpperCaseLetter = function convertNumberToUpperCaseLetter(inputData, inputMetaData) {
  var functionName = s.cconvertNumberToUpperCaseLetter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var number = parseInt(inputData);
    number--; // console.log('number is: ' + number.toString(10));

    if (number > 25 || number < 0) {
      returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
    } else {
      returnData = g.cUpperCaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertNumberToLowerCaseLetter
 * @description Converts a number from 1-26 into a lower case letter of the alphabet a-z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that should be converted to a lower case letter of the alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter a-z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.convertNumberToUpperCaseLetter = convertNumberToUpperCaseLetter;

var convertNumberToLowerCaseLetter = function convertNumberToLowerCaseLetter(inputData, inputMetaData) {
  var functionName = s.cconvertNumberToLowerCaseLetter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var number = parseInt(inputData);
    number--; // console.log('number is: ' + number.toString(10));

    if (number > 25 || number < 0) {
      returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
    } else {
      returnData = g.cUpperCaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};

exports.convertNumberToLowerCaseLetter = convertNumberToLowerCaseLetter;