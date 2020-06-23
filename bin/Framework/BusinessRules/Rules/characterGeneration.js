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

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');
/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */


var randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = function randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = randomlyGenerateMixedCaseLetterOrSpecialCharacter1;

var randomlyGenerateMixedCaseLetterOrSpecialCharacter2 = function randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + b.cLowerCaseEnglishAlphabet);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = b.c3;
  var c9 = b.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(b.c1, [b.c3, g.cTrue, g.cTrue]);

  switch (typeToGenerate) {
    case 1:
      // Generate a number.
      returnData = randomlyGenerateNumberInRange1(b.c0, [b.c9, g.cTrue, g.cTrue]);
      break;

    case 2:
      // Generate a random upper case or lower case letter.
      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;

    case 3:
      // Generate a special characters.
      returnData = randommlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;

    default:
      // Default to a random upper case or lower case letter as a fall-back.
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet + b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = b.c3;
  var c9 = b.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(b.c1, [b.c3, g.cTrue, g.cTrue]);

  switch (typeToGenerate) {
    case 1:
      // Generate a number.
      returnData = randomlyGenerateNumberInRange1(b.c0, [b.c9, g.cTrue, g.cTrue]);
      break;

    case 2:
      // Generate a random upper case letter.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;

    case 3:
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var typeToGenerate = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = b.c3;
  var c9 = b.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(b.c1, [b.c3, g.cTrue, g.cTrue]);

  switch (typeToGenerate) {
    case 1:
      // Generate a number.
      returnData = randomlyGenerateNumberInRange1(b.c0, [b.c9, g.cTrue, g.cTrue]);
      break;

    case 2:
      // Generate a random lower case letter.
      returnData = randomlyGenerateLowerCaseLetter(inputData, inputMetaData);
      break;

    case 3:
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + b.cLowerCaseEnglishAlphabet + b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphaNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet + b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseAlphaNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (randomlyGenerateBooleanValueu(inputData, inputMetaData) === true) {
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(b.cLowerCaseEnglishAlphabet + b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumericCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c9 = b.c9;
  var cTrue = g.cTrue;
  returnData = randomlyGenerateNumberInRange(b.c0, _defineProperty({
    c9: c9,
    cTrue: cTrue
  }, "cTrue", cTrue));

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumericCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(b.cAllNumbers);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateSpecialCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var cTrue = g.cTrue;
  var inputDataLength = inputData.length.toString();
  var number = randomlyGenerateNumberInRange1(b.c1, [inputDataLength, g.cTrue, g.cTrue]); // @NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.

  returnData = inputData.substring(number - 1, number);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateSpecialCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var cTrue = g.cTrue;
  var inputDataLength = inputData.length.toString();
  var number = randomlyGenerateNumberInRange1(b.c1, [inputDataLength, g.cTrue, g.cTrue]); // @NOTE: The STring.length() above is a 1-base count, the STring.substring is zero-based.

  returnData = inputData.substring(number - 1, number);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function randomlyGenerateNumberInRange1
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {map} inputMetaData A map with multiple input parameters:
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumberInRange1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = '';
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData.toString();
};
/**
 * @function randomlyGenerateNumberInRange2
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {map} inputMetaData A map with multiple input parameters:
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumberInRange2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var minimum = parseInt(inputData);
  var maximum = parseInt(inputMetaData[0]);
  var addOne = StringToBoolean(inputMetaData[1]);
  var addMinimum = StringToBoolean(inputMetaData[2]);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateBooleanValue1(inputData, inputMetaData);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c26 = b.c2 + b.c6;
  var cTrue = g.cTrue;
  returnData = convertNumberToLowerCaseLetter(randomlyGenerateNumberInRange1(b.c1, [b.c26, g.cTrue, g.cTrue]));

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetter2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(b.cLowerCaseEnglishAlphabet);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseLetter1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = ''; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c26 = b.c2 + b.c6;
  var cTrue = g.cTrue;
  returnData = convertNumberToUpperCaseLetter(randomlyGenerateNumberInRange1(b.c1, [b.c26, g.cTrue, g.cTrue]));

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cconvertNumberToUpperCaseLetter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var number = parseInt(inputData);
  number--; // console.log('number is: ' + number.toString(10));

  if (number > 25 || number < 0) {
    returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
  } else {
    returnData = g.cUpperCaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cconvertNumberToLowerCaseLetter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var number = parseInt(inputData);
  number--; // console.log('number is: ' + number.toString(10));

  if (number > 25 || number < 0) {
    returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
  } else {
    returnData = g.cUpperCaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};

exports.convertNumberToLowerCaseLetter = convertNumberToLowerCaseLetter;