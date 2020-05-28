"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateInvalidEmail2 = exports.generateInvalidEmail1 = exports.generateValidEmail2 = exports.generateValidEmail1 = exports.generateRandomSpecialCharacterCodeByLength2 = exports.generateRandomSpecialCharacterCodeByLength1 = exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.generateRandomNumericCodeByLength2 = exports.generateRandomNumericCodeByLength1 = exports.generateRandomLowerCaseAlphaNumericCodeByLength2 = exports.generateRandomLowerCaseAlphaNumericCodeByLength1 = exports.generateRandomUpperCaseAlphaNumericCodeByLength2 = exports.generateRandomUpperCaseAlphaNumericCodeByLength1 = exports.generateRandomMixedCaseAlphaNumericCodeByLength2 = exports.generateRandomMixedCaseAlphaNumericCodeByLength1 = exports.generateRandomLowerCaseTextWithSpecialCharactersByLength2 = exports.generateRandomLowerCaseTextWithSpecialCharactersByLength1 = exports.generateRandomUpperCaseTextWithSpecialCharactersByLength2 = exports.generateRandomUpperCaseTextWithSpecialCharactersByLength1 = exports.generateRandomMixedCaseTextWithSpecialCharactersByLength2 = exports.generateRandomMixedCaseTextWithSpecialCharactersByLength1 = exports.generateRandomLowerCaseTextByLength2 = exports.generateRandomLowerCaseTextByLength1 = exports.generateRandomUpperCaseTextByLength2 = exports.generateRandomUpperCaseTextByLength1 = exports.generateRandomMixedCaseTextByLength2 = exports.generateRandomMixedCaseTextByLength1 = void 0;

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var _stringParsing = require("./stringParsing");

var cg = _interopRequireWildcard(require("./characterGeneration"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../Constants/generic.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path'); // NOTE: The original implementation of the following functions was in bad need of a refactoring two major reasons:
// 1. All of the function signatures needed to be standardized with the new business rule standard of two input parameters.
// 2. How the functions are implemented needed to be simplified, however, after further analysis of this re-implementation effort it was discovered that:
//
// The old implementation might also still be useful, so both implementations will be supported and indicated with a 1 or 2.
// This will make it clear to the caller which function implmentation is done with with version of the function.
// It would be interesting to call all of these functions in a loop and do a performance analysis to determine which version of the implementation runs faster.
// I speculate that version 2 might run faster just because it's less code to execute and could be more efficient.
//
// Once we have identified which API is the most efficient this code can be decreased by half and we can get rid of the obsolete API.

/**
 * @name generateRandomMixedCaseTextByLength1
 * @description Parse the input string, and determine how many mixed case alphabetic characters should be generated, generate them and string them together.
 * @param  {[String]} inputData The string that contains a number or how many randomly generated mixed case alphabetic characters should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated mixed case letters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateRandomMixedCaseTextByLength1 = function generateRandomMixedCaseTextByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseTextByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseTextByLength2
 * @description Parse the input string, and determine how many mixed case alphabetic characters should be generated, generate them and string them together.
 * @param  {[String]} inputData The string that contains a number or how many randomly generated mixed case alphabetic characters should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated mixed case letters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseTextByLength1 = generateRandomMixedCaseTextByLength1;

var generateRandomMixedCaseTextByLength2 = function generateRandomMixedCaseTextByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseTextByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseTextByLength1
 * @description Parse the input string, and determine how many upper case alphabetic characters should be generated, generate them and string them together.
 * @param  {[String]} inputData The string that contains a number for how many randomly generated upper case alphabetic characters should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated upper case letters where the length of the string is defined by the input parameter
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseTextByLength2 = generateRandomMixedCaseTextByLength2;

var generateRandomUpperCaseTextByLength1 = function generateRandomUpperCaseTextByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseTextByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseTextByLength2
 * @description Parse the input string, and determine how many upper case alphabetic characters should be generated, generate them and string them together.
 * @param  {[String]} inputData The string that contains a number for how many randomly generated upper case alphabetic characters should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated upper case letters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseTextByLength1 = generateRandomUpperCaseTextByLength1;

var generateRandomUpperCaseTextByLength2 = function generateRandomUpperCaseTextByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseTextByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseTextByLength1
 * @description Parse the input string, and determine how many lower case alphabetic characters should be generated, generate them and string them together.
 * @param  {[String]} inputData The string that contains a number for how many randomly generated lower case alphabetic characters that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated lower case letters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseTextByLength2 = generateRandomUpperCaseTextByLength2;

var generateRandomLowerCaseTextByLength1 = function generateRandomLowerCaseTextByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseTextByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseTextByLength2
 * @description Parse the input string, and determine how many lower case alphabetic characters should be generated, generate them and string them together.
 * @param  {[String]} inputData The string that contains a number for how many randomly generated lower case alphabetic characters that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated lower case letters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseTextByLength1 = generateRandomLowerCaseTextByLength1;

var generateRandomLowerCaseTextByLength2 = function generateRandomLowerCaseTextByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseTextByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseTextWithSpecialCharactersByLength1
 * @description Generate the specified number of random mixed case letters and/or special characters and string them together.
 * @param  {[String]} inputData The number of randomly generated mixed case letters and/or special characters to generate the output string.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated mixed case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseTextByLength2 = generateRandomLowerCaseTextByLength2;

var generateRandomMixedCaseTextWithSpecialCharactersByLength1 = function generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseTextWithSpecialCharactersByLength2
 * @description Generate the specified number of random mixed case letters and/or special characters and string them together.
 * @param  {[String]} inputData The number of randomly generated mixed case letters and/or special characters to generate the output string.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated mixed case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseTextWithSpecialCharactersByLength1 = generateRandomMixedCaseTextWithSpecialCharactersByLength1;

var generateRandomMixedCaseTextWithSpecialCharactersByLength2 = function generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseTextWithSpecialCharactersByLength1
 * @description Generate the specified number of random upper case letters and/or special characters and string them together.
 * @param  {[String]} inputData The number of randomly generated upper case letters and/or special characters to generate.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generate process.
 * @return {[String]} A string of randomly generated upper case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseTextWithSpecialCharactersByLength2 = generateRandomMixedCaseTextWithSpecialCharactersByLength2;

var generateRandomUpperCaseTextWithSpecialCharactersByLength1 = function generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseTextWithSpecialCharactersByLength2
 * @description Generate the specified number of random upper case letters and/or special characters and string them together.
 * @param  {[String]} inputData The number of randomly generated upper case letters and/or special characters to generate.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generate process.
 * @return {[String]} A string of randomly generated upper case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseTextWithSpecialCharactersByLength1 = generateRandomUpperCaseTextWithSpecialCharactersByLength1;

var generateRandomUpperCaseTextWithSpecialCharactersByLength2 = function generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseTextWithSpecialCharactersByLength1
 * @description Generate the specified number of random lower case letters and/or special characters and string them together.
 * @param  {[String]} inputData The number of randomly generated lower case letters and/or special characters to generate.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated lower case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseTextWithSpecialCharactersByLength2 = generateRandomUpperCaseTextWithSpecialCharactersByLength2;

var generateRandomLowerCaseTextWithSpecialCharactersByLength1 = function generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseTextWithSpecialCharactersByLength2
 * @description Generate the specified number of random lower case letters and/or special characters and string them together.
 * @param  {[String]} inputData The number of randomly generated lower case letters and/or special characters to generate.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated lower case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseTextWithSpecialCharactersByLength1 = generateRandomLowerCaseTextWithSpecialCharactersByLength1;

var generateRandomLowerCaseTextWithSpecialCharactersByLength2 = function generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseAlphaNumericCodeByLength1
 * @description Generate the specified number of random mixed case letters and/or numeric characters and string them together.
 * @param  {[String]} inputData The number of randomly generated mixed case letters and/or numbers that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated mixed case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseTextWithSpecialCharactersByLength2 = generateRandomLowerCaseTextWithSpecialCharactersByLength2;

var generateRandomMixedCaseAlphaNumericCodeByLength1 = function generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseAlphaNumericCodeByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseAlphaNumericCodeByLength2
 * @description Generate the specified number of random mixed case letters and/or numeric characters and string them together.
 * @param  {[String]} inputData The number of randomly generated mixed case letters and/or numbers that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated mixed case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseAlphaNumericCodeByLength1 = generateRandomMixedCaseAlphaNumericCodeByLength1;

var generateRandomMixedCaseAlphaNumericCodeByLength2 = function generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseAlphaNumericCodeByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseAlphaNumericCodeByLength1
 * @description Generate the specified number of random upper case letters and/or numeric characters and string them together.
 * @param  {[String]} inputData The string that contains a number for how many randomly generated upper case letters and/or numbers that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated upper case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseAlphaNumericCodeByLength2 = generateRandomMixedCaseAlphaNumericCodeByLength2;

var generateRandomUpperCaseAlphaNumericCodeByLength1 = function generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseAlphaNumericCodeByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseAlphaNumericCodeByLength2
 * @description Generate the specified number of random upper case letters and/or numeric characters and string them together.
 * @param  {[String]} inputData The string that contains a number for how many randomly generated upper case letters and/or numbers that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated upper case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseAlphaNumericCodeByLength1 = generateRandomUpperCaseAlphaNumericCodeByLength1;

var generateRandomUpperCaseAlphaNumericCodeByLength2 = function generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseAlphaNumericCodeByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseAlphaNumericCodeByLength1
 * @description Generate the specified number of random lower case letters and/or numeric characters and string them together.
 * @param  {[String]} inputData The number of randomly generated lower case letters and/or numbers that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated lower case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseAlphaNumericCodeByLength2 = generateRandomUpperCaseAlphaNumericCodeByLength2;

var generateRandomLowerCaseAlphaNumericCodeByLength1 = function generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseAlphaNumericCodeByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseAlphaNumericCodeByLength2
 * @description Generate the specified number of random lower case letters and/or numeric characters and string them together.
 * @param  {[String]} inputData The number of randomly generated lower case letters and/or numbers that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated lower case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseAlphaNumericCodeByLength1 = generateRandomLowerCaseAlphaNumericCodeByLength1;

var generateRandomLowerCaseAlphaNumericCodeByLength2 = function generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseAlphaNumericCodeByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomNumericCodeByLength1
 * @description Generate the specified number of random numberic characters and string them together.
 * @param  {[String]} inputData The number of randomly generated numeric characters that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated numeric characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseAlphaNumericCodeByLength2 = generateRandomLowerCaseAlphaNumericCodeByLength2;

var generateRandomNumericCodeByLength1 = function generateRandomNumericCodeByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomNumericCodeByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateNumericCharacter1(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomNumericCodeByLength2
 * @description Generate the specified number of random numberic characters and string them together.
 * @param  {[String]} inputData The number of randomly generated numeric characters that should be generated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string of randomly generated numeric characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomNumericCodeByLength1 = generateRandomNumericCodeByLength1;

var generateRandomNumericCodeByLength2 = function generateRandomNumericCodeByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomNumericCodeByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateNumericCharacter2(inputData, inputMetaData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1
 * @description Generate a random selection of mixed case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated letters, numeric characters and special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomNumericCodeByLength2 = generateRandomNumericCodeByLength2;

var generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2
 * @description Generate a random selection of mixed case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated letters, numeric characters and special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1;

var generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1
 * @description Generate a random selection of upper case letters, numeric characters and special characters from a list of alloable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated upper case letters, numeric characters and special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[Strhing]} A string of randomly generated upper case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2;

var generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2
 * @description Generate a random selection of upper case letters, numeric characters and special characters from a list of alloable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated upper case letters, numeric characters and special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[Strhing]} A string of randomly generated upper case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1;

var generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1
 * @description Generate a random selection of lower case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated, generate them ans string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated lower case letters, numeric characters and special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated lower case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2;

var generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2
 * @description Generate a random selection of lower case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated, generate them ans string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated lower case letters, numeric characters and special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated lower case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1;

var generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomSpecialCharacterCodeByLength1
 * @description Generate a random selection of characters from the input allowable alphabet of characters, generate them and string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated characters from the list of allowable special characters that are passed in where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2;

var generateRandomSpecialCharacterCodeByLength1 = function generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomSpecialCharacterCodeByLength1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateSpecialCharacter1(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomSpecialCharacterCodeByLength2
 * @description Generate a random selection of characters from the input allowable alphabet of characters, generate them and string them together to the specified length.
 * @param  {[String]} inputData The number of randomly generated special characters that should be generated.
 * @param  {[String]} inputMetaData The list of special characters that should be used during the generation process.
 * @return {[String]} A string of randomly generated characters from the list of allowable special characters that are passed in where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomSpecialCharacterCodeByLength1 = generateRandomSpecialCharacterCodeByLength1;

var generateRandomSpecialCharacterCodeByLength2 = function generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomSpecialCharacterCodeByLength2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var numberOfCharactersToGenerate = parseInt(inputData);

  for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateSpecialCharacter2(inputMetaData, ''));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateValidEmail1
 * @description Generate a valid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[String]} inputData The string that contains the number of characters to generate.
 * @param  {[Map]} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomSpecialCharacterCodeByLength2 = generateRandomSpecialCharacterCodeByLength2;

var generateValidEmail1 = function generateValidEmail1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateValidEmail1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateValidEmailWithSpecificSuffixAndDomainName1(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters,
        specifiedSuffixAndDomain: specifiedSuffixAndDomain
      });
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomValidEmail1(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters
      });
    } else {
      returnData = GenerateRandomValidEmail1(inputData, {
        bFalse: bFalse,
        sEmpty: sEmpty
      });
    }
  } else {
    returnData = GenerateRandomValidEmail1(inputData, {
      bFalse: bFalse,
      sEmpty: sEmpty
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateValidEmail2
 * @description Generate a valid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[String]} inputData The string that contains the number of characters to generate.
 * @param  {[Map]} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateValidEmail1 = generateValidEmail1;

var generateValidEmail2 = function generateValidEmail2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateValidEmail2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateValidEmailWithSpecificSuffixAndDomainName2(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters,
        specifiedSuffixAndDomain: specifiedSuffixAndDomain
      });
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomValidEmail2(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters
      });
    } else {
      returnData = GenerateRandomValidEmail2(inputData, {
        bFalse: bFalse,
        sEmpty: sEmpty
      });
    }
  } else {
    returnData = GenerateRandomValidEmail2(inputData, {
      bFalse: bFalse,
      sEmpty: sEmpty
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateInvalidEmail1
 * @description Generate an invalid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated, generate them and string them together to the specified length.
 * @param  {[String]} inputData The string that contains the number of characters to generate.
 * @param  {[Map]} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and
 * optionally special characters where the length of the string is also defined as one of the input parameters, formeatted as an email: "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateValidEmail2 = generateValidEmail2;

var generateInvalidEmail1 = function generateInvalidEmail1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateInvalidEmail1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateInvalidEmailWithSpecificSuffixAndDomainName1(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters,
        specifiedSuffixAndDomain: specifiedSuffixAndDomain
      });
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomInvalidEmail1(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters
      });
    } else {
      returnData = GenerateRandomInvalidEmail1(inputData, {
        bFalse: bFalse,
        sEmpty: sEmpty
      });
    }
  } else {
    returnData = GenerateRandomInvalidEmail1(inputData, {
      bFalse: bFalse,
      sEmpty: sEmpty
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateInvalidEmail2
 * @description Generate an invalid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated, generate them and string them together to the specified length.
 * @param  {[String]} inputData The string that contains the number of characters to generate.
 * @param  {[Map]} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and
 * optionally special characters where the length of the string is also defined as one of the input parameters, formeatted as an email: "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateInvalidEmail1 = generateInvalidEmail1;

var generateInvalidEmail2 = function generateInvalidEmail2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateInvalidEmail2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateInvalidEmailWithSpecificSuffixAndDomainName2(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters,
        specifiedSuffixAndDomain: specifiedSuffixAndDomain
      });
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.StringToBoolean)(inputMetaData[0]);
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomInvalidEmail2(inputData, {
        generateSpecialCharacters: generateSpecialCharacters,
        allowableSpecialCharacters: allowableSpecialCharacters
      });
    } else {
      returnData = GenerateRandomInvalidEmail2(inputData, {
        bFalse: bFalse,
        sEmpty: sEmpty
      });
    }
  } else {
    returnData = GenerateRandomInvalidEmail2(inputData, {
      bFalse: bFalse,
      sEmpty: sEmpty
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateValidEmailWithSpecificSuffixAndDomainName1
 * @description Generate a valid eamil composed of a random selection of mmixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @param  {[String]} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {j@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateInvalidEmail2 = generateInvalidEmail2;

var generateValidEmailWithSpecificSuffixAndDomainName1 = function generateValidEmailWithSpecificSuffixAndDomainName1(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'generateValidEmailWithSpecificSuffixAndDomainName1';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'specifiedSuffixAndDomain is: ' + specifiedSuffixAndDomain);

  var returnData = '';
  var prefix = '';

  if (numberOfCharactersToGenerate >= specifiedSuffixAndDomain.length + 2 && numberOfCharactersToGenerate >= 6 && specifiedSuffixAndDomain.includes(b.cDot)) {
    // @NOTE We cannot have less then 6 characters, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated....and the "." should have already been passed in.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know we are already going to be reserved, the "@" symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;

    if (generateSpecialCharacters === false) {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfCharactersToGenerate, '');
    } else {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfCharactersToGenerate, allowableSpecialCharacters);
    }

    returnData = prefix + b.cAt + specifiedSuffixAndDomain;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateValidEmailWithSpecificSuffixAndDomainName2
 * @description Generate a valid eamil composed of a random selection of mmixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @param  {[String]} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {j@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateValidEmailWithSpecificSuffixAndDomainName2 = function generateValidEmailWithSpecificSuffixAndDomainName2(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateValidEmailWithSpecificSuffixAndDomainName2;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var prefix = '';

  if (numberOfCharactersToGenerate >= specifiedSuffixAndDomain.length + 2 && numberOfCharactersToGenerate >= 6 && specifiedSuffixAndDomain.includes(b.cDot)) {
    // @NOTE We cannot have less then 6 characters, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated....and the "." should have already been passed in.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know we are already going to be reserved, the "@" symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;

    if (generateSpecialCharacters === false) {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfCharactersToGenerate, '');
    } else {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfCharactersToGenerate, allowableSpecialCharacters);
    }

    returnData = prefix + b.cAt + specifiedSuffixAndDomain;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomValidEmail1
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateRandomValidEmail1 = function generateRandomValidEmail1(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'generateRandomValidEmail1';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0; // console.log('Started the execution of the business rule generateRandomValidEmail1');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);

  if (numberOfCharactersToGenerate >= 6) {
    // @NOTE We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know are already going to be reserved,  the "@" symbol and the "." symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2; // Consider that the number of characters in the domain must be either 2 or 3. (according to IpV5, IpV6 is a whole other ball of wax!!)
    // So let us first figure that out, then the rest of the available characters that we must provide can be divided up betwee the prefix and suffix.

    if (numberOfCharactersToGenerate === 4) {
      // Stick with a 2-character domain name.
      if (generateSpecialCharacters === false) {
        domainName = cg.generateRandomMixedCaseTextByLength1(b.c2, '');
      } else {
        domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
      }
    } else if (numberOfCharactersToGenerate >= 5) {
      // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
      // but need to decide now so we can get it done and be fair.
      // (That is generate 2-character domains roughtly equal to the times we generate a 3-character domain.)
      if (cg.randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = cg.generateRandomMixedCaseTextByLength1(b.c2, '');
        } else {
          domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
      } else {
        // Do a 3-characterdomain name.
        if (generateSpecialCharacters === false) {
          domainName = cg.generateRandomMixedCaseTextByLength1(b.c3, '');
        } else {
          domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c3, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 3;
      }
    } else {
      // @NOTE We should never actually get here, because the {@code numberOfCharactersToGenerate} cannot be less than 6 and 6-2 must be >= 4.
      // Just generate the minimum domain and try to proceed as best as possible as a matter of completeness of the code.
      if (generateSpecialCharacters === false) {
        domainName = cg.generateRandomMixedCaseTextByLength1(b.c2, '');
      } else {
        domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
      }

      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // Remaining number of characters that we must provide to the e-mail must be divided by 2, or the prefix and suffix.


    if (numberOfCharactersToGenerate % 2 === 0) {
      // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    } else if (numberOfCharactersToGenerate % 2 === 1) {
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
    } else {
      // Should also never get here, as all numbers are either divisible by 2 or not with a remainder of 1.
      // Just do something to see if we can survive, again as a matter of completness of code logic.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    }

    if (generateSpecialCharacters === false) {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters, '');
    } else {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfPrefixCharacters, allowableSpecialCharacters);
    }

    if (generateSpecialCharacters === false) {
      suffix = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfSuffixCharacters, '');
    } else {
      suffix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfSuffixCharacters, allowableSpecialCharacters);
    }

    returnData = prefix + b.cAt + suffix + b.cDot + domainName;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomValidEmail2
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateRandomValidEmail2 = function generateRandomValidEmail2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'generateRandomValidEmail2';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0;

  if (numberOfCharactersToGenerate >= 6) {
    // @NOTE We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know are already going to be reserved,  the "@" symbol and the "." symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2; // Consider that the number of characters in the domain must be either 2 or 3. (according to IpV5, IpV6 is a whole other ball of wax!!)
    // So let us first figure that out, then the rest of the available characters that we must provide can be divided up betwee the prefix and suffix.

    if (numberOfCharactersToGenerate === 4) {
      // Stick with a 2-character domain name.
      if (generateSpecialCharacters === false) {
        domainName = cg.generateRandomMixedCaseTextByLength2(b.c2, '');
      } else {
        domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c2, allowableSpecialCharacters);
      }
    } else if (numberOfCharactersToGenerate >= 5) {
      // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
      // but need to decide now so we can get it done and be fair.
      // (That is generate 2-character domains roughtly equal to the times we generate a 3-character domain.)
      if (cg.randomlyGenerateBooleanValue2(inputData, inputMetaData) === true) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = cg.generateRandomMixedCaseTextByLength2(b.c2, '');
        } else {
          domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c2, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
      } else {
        // Do a 3-characterdomain name.
        if (generateSpecialCharacters === false) {
          domainName = cg.generateRandomMixedCaseTextByLength2(b.c3, '');
        } else {
          domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c3, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 3;
      }
    } else {
      // @NOTE We should never actually get here, because the {@code numberOfCharactersToGenerate} cannot be less than 6 and 6-2 must be >= 4.
      // Just generate the minimum domain and try to proceed as best as possible as a matter of completeness of the code.
      if (generateSpecialCharacters === false) {
        domainName = cg.generateRandomMixedCaseTextByLength2(b.c2, '');
      } else {
        domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c2, allowableSpecialCharacters);
      }

      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // Remaining number of characters that we must provide to the e-mail must be divided by 2, or the prefix and suffix.


    if (numberOfCharactersToGenerate % 2 === 0) {
      // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    } else if (numberOfCharactersToGenerate % 2 === 1) {
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
    } else {
      // Should also never get here, as all numbers are either divisible by 2 or not with a remainder of 1.
      // Just do something to see if we can survive, again as a matter of completness of code logic.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    }

    if (generateSpecialCharacters === false) {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters, '');
    } else {
      prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfPrefixCharacters, allowableSpecialCharacters);
    }

    if (generateSpecialCharacters === false) {
      suffix = cg.generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfSuffixCharacters, '');
    } else {
      suffix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfSuffixCharacters, allowableSpecialCharacters);
    }

    returnData = prefix + b.cAt + suffix + b.cDot + domainName;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateInvalidEmailWithSpecificSuffixAndDomainName1
 * @description Generate an invalid email composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TREUE}.
 * @param  {[String]} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateInvalidEmailWithSpecificSuffixAndDomainName1 = function generateInvalidEmailWithSpecificSuffixAndDomainName1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateInvalidEmailWithSpecificSuffixAndDomainName1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var prefix = '';
  var numberOfPrefixCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = b.c3;
  var cTrue = g.cTrue; // console.log('Started the execution of the business rule generateInvalidEmailWithSpecificSuffixAndDomainName1');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);
  // console.log('Specified suffix and domain are: ' + specifiedSuffixAndDomain);

  failureMode = cg.randomlyGenerateNumberInRange1(b.c1, _defineProperty({
    c3: c3,
    cTrue: cTrue
  }, "cTrue", cTrue)); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the prefix
  // 3 - Without the "@" & Prefix
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.

  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "x" symbol, the rest of the characters must be generated.
    // first need to figure out how many characters of each we must generate to get the desired final length.
    switch (failureMode) {
      case 1:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - (specifiedSuffixAndDomain.length + 1);
        break;

      case 2:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
        break;

      case 3:
        numberOfCharactersToGenerate = 0;
        break;

      default:
        numberOfCharactersToGenerate = 0;
        break;
    } // This is a pretty dumb and stupid way of doing it, but we only have 3 failure modes for this rule.
    // There are basically with and without the prefix, and we've ractored in all the other cases already above.


    numberOfPrefixCharacters = numberOfCharactersToGenerate;

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    }

    switch (failureMode) {
      case 1:
        // Without the "@" symbol
        returnData = prefix + specifiedSuffixAndDomain;
        break;

      case 2:
        // Without the prefix
        returnData = b.cAt + specifiedSuffixAndDomain;
        break;

      case 3:
        // Without the "@" & Prefix
        returnData = specifiedSuffixAndDomain;
        break;

      default:
        returnData = specifiedSuffixAndDomain;
        break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateInvalidEmailWithSpecificSuffixAndDomainName2
 * @description Generate an invalid email composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TREUE}.
 * @param  {[String]} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateInvalidEmailWithSpecificSuffixAndDomainName2 = function generateInvalidEmailWithSpecificSuffixAndDomainName2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'generateInvalidEmailWithSpecificSuffixAndDomainName2';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'specifiedSuffixAndDomain is: ' + specifiedSuffixAndDomain);

  var returnData = '';
  var prefix = '';
  var numberOfPrefixCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = b.c3;
  var cTrue = g.cTrue; // console.log('Started the execution of the business rule generateInvalidEmailWithSpecificSuffixAndDomainName2');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);
  // console.log('Specified suffix and domain are: ' + specifiedSuffixAndDomain);

  failureMode = cg.randomlyGenerateNumberInRange2(b.c1, _defineProperty({
    c3: c3,
    cTrue: cTrue
  }, "cTrue", cTrue)); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the prefix
  // 3 - Without the "@" & Prefix
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.

  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "x" symbol, the rest of the characters must be generated.
    // first need to figure out how many characters of each we must generate to get the desired final length.
    switch (failureMode) {
      case 1:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - (specifiedSuffixAndDomain.length + 1);
        break;

      case 2:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
        break;

      case 3:
        numberOfCharactersToGenerate = 0;
        break;

      default:
        numberOfCharactersToGenerate = 0;
        break;
    } // This is a pretty dumb and stupid way of doing it, but we only have 3 failure modes for this rule.
    // There are basically with and without the prefix, and we've ractored in all the other cases already above.


    numberOfPrefixCharacters = numberOfCharactersToGenerate;

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    }

    switch (failureMode) {
      case 1:
        // Without the "@" symbol
        returnData = prefix + specifiedSuffixAndDomain;
        break;

      case 2:
        // Without the prefix
        returnData = b.cAt + specifiedSuffixAndDomain;
        break;

      case 3:
        // Without the "@" & Prefix
        returnData = specifiedSuffixAndDomain;
        break;

      default:
        returnData = specifiedSuffixAndDomain;
        break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomInvalidEmail1
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateRandomInvalidEmail1 = function generateRandomInvalidEmail1(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgenerateRandomInvalidEmail1;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0;
  var numberOfDomainNameCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c28 = b.c2 + b.c8;
  var cTrue = g.cTrue;
  failureMode = cg.randomlyGenerateNumberInRange1(b.c1, _defineProperty({
    c28: c28,
    cTrue: cTrue
  }, "cTrue", cTrue)); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the "." symbol
  // 3 - Without both the "@" & "." symbols
  // 4 - Without the domain name
  // 5 - Without the "@" & domain name
  // 6 - Without the "." & domain name
  // 7 - Without the "@", "." & domain name
  // 8 - Without the prefix
  // 9 - Without the suffix
  // 10- Without the "@" & Prefix
  // 11- Without the "." & Prefix
  // 12- Without the "@" & Suffix
  // 13- Without the "." & Suffix
  // 14- Without the "@", "." & Prefix
  // 15- Without the "@", "." & Suffix
  // 16- Without the "@", ".", Prefix, & Suffix
  // 17- Without the Prefix & domain name
  // 18- Without the Suffix & domain name
  // 19- Without the Prefix & Suffix
  // 20- Without the Prefix, Suffix & domain name
  // 21- Without the "@", Prefix & domain name
  // 22- Without the ".", Prefix & domain name
  // 23- Without the "@", Suffix & domain name
  // 24- Without the ".", Suffix & domain name
  // 25- Without the "@", Prefix, Suffix & domain name
  // 26- Without the ".", Prefix, Suffix & domain name
  // 27- Without the Prefix, Suffix & "@"
  // 28- Without the Prefix, Suffix & "."
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.

  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less than 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbo, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol, according to the failure mode.
    if (failureMode === 1 || failureMode === 2 || failureMode === 5 || failureMode === 6 || failureMode === 10 || failureMode === 11 || failureMode === 12 || failureMode === 13 || failureMode >= 21) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    } else if (failureMode === 3 || failureMode === 7 || failureMode === 14 || failureMode === 15 || failureMode === 16) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // Only work generating the domain name if we are not going to be building our invalid email on a missing domain name.


    if (failureMode === 1 || failureMode === 2 || failureMode === 3 || failureMode >= 8 && failureMode <= 16 || failureMode === 19 || failureMode > 27) {
      // Consider that the number of characters in the domain must be either 2 or 3 (according to IpV5, I'm not going to even try touching IpV6!!)
      // So lets first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
      if (numberOfCharactersToGenerate === 4) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = cg.generateRandomMixedCaseTextByLength1(b.c2, ''); // domainName = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(b.c2, '');
        } else {
          // domainName = cg.generateRandomMixedCaseTextWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
          domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
      } else if (numberOfCharactersToGenerate >= 5) {
        // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
        // but need to decide now so we can get it done and be fair.
        // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
        if (cg.randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
          // Stick with a 2-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = cg.generateRandomMixedCaseTextByLength1(b.c2, '');
          } else {
            domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
        } else {
          // Do a 3-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = cg.generateRandomMixedCaseTextByLength1(b.c3, '');
          } else {
            domainNme = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(b.c3, allowableSpecialCharacters);
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 3;
        }
      }
    } // ONLY do suffix and prefix if our failure modes do not exclude both.


    if (failureMode >= 1 && failureMode <= 7) {
      // Remaining number of characters that we must provide to the e-mail must be divided by 2, for the prefix and suffix.
      if (numberOfCharactersToGenerate % 2 === 0) {
        // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters;
      } else if (numberOfCharactersToGenerate % 2 === 1) {
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
      }
    } else if (failureMode === 8 || failureMode === 10 || failureMode === 11 || failureMode == 14 || failureMode === 17 || failureMode === 21 || failureMode === 22) {
      // Excluding the Prefix
      numberOfSuffixCharacters = numberOfCharactersToGenerate; // Suffix get the remainder!

      numberOfPrefixCharacters = 0;
    } else if (failureMode === 9 || failureMode === 12 || failureMode === 13 || failureMode === 15 || failureMode === 18 || failureMode === 23 || failureMode === 24) {
      // Excluding the Suffix
      numberOfPrefixCharacters = numberOfCharactersToGenerate; // Prefix gets the remainder!

      numberOfSuffixCharacters = 0;
    }

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    }

    if (numberOfSuffixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        suffix = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfSuffixCharacters.toString(), '');
      } else {
        suffix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfSuffixCharacters.toString(), allowableSpecialCharacters);
      }
    }
  }

  switch (failureMode) {
    case 1:
      // Without the "@" symbol
      returnData = prefix + suffix + genConst.cDot + domainName;
      break;

    case 2:
      // Without the "." symbol
      returnData = prefix + genConst.cAt + suffix + domainName;
      break;

    case 3:
      // Without both the "@" & "." symbols
      returnData = prefix + suffix + domainName;
      break;

    case 4:
      // Without the domain name
      returnData = prefix + genConst.cAt + suffix + genConst.cDot;
      break;

    case 5:
      // Without the "@" & domain name
      returnData = prefix + suffix + genConst.cDot + domainName;
      break;

    case 6:
      // Without the "." & domain name
      returnData = prefix + genConst.cAt + suffix;
      break;

    case 7:
      // Without the "@", "." & domain name
      returnData = prefix + suffix;
      break;

    case 8:
      // Without the Prefix
      returnData = genConst.cAt + suffix + genConst.cDot + domainName;
      break;

    case 9:
      // Without the Suffix
      returnData = prefix + genConst.cAt + genConst.cDot + domainName;
      break;

    case 10:
      // Without the "@" & Prefix
      returnData = suffix + genConst.cDot + domainName;
      break;

    case 11:
      // Without the "." & Prefix
      returnData = genConst.cAt + suffix + domainName;
      break;

    case 12:
      // Without the "@" & Suffix
      returnData = prefix + genConst.cDot + domainName;
      break;

    case 13:
      // Without the "." & Suffix
      returnData = prefix + genConst.cAt + domainName;
      break;

    case 14:
      // Without the "@", "." & Prefix
      returnData = suffix + domainName;
      break;

    case 15:
      // Without the "@", "." & Suffix
      returnData = prefix + domainName;
      break;

    case 16:
      // Without the "@", ".", Prefix, & Suffix
      returnData = domainName;
      break;

    case 17:
      // Without the Prefix & domain name
      returnData = genConst.cAt + suffix + genConst.cDot;
      break;

    case 18:
      // Without the Suffix & domain name
      returnData = prefix + genConst.cAt + genConst.cDot;
      break;

    case 19:
      // Without the Prefix & suffix
      returnData = genConst.cAt + genConst.cDot + domainName;
      break;

    case 20:
      // Without the Prefix, Suffix & domain name
      returnData = genConst.cAt + genConst.cDot;
      break;

    case 21:
      // Without the "@", Prefix & domain name
      returnData = suffix + genConst.cDot;
      break;

    case 22:
      // Without the ".", Prefix & domain name
      returnData = genConst.cAt + suffix;
      break;

    case 23:
      // Without the "@", Suffix & domain name
      returnData = prefix + genConst.cDot;
      break;

    case 24:
      // Without the ".", Suffix & domain name
      returnData = prefix + genConst.cAt + genConst.cDot;
      break;

    case 25:
      // Without the "@", Prefix, Suffix & domain name
      returnData = genConst.cDot;
      break;

    case 26:
      // Without the ".", Prefix, Suffix & domain name
      returnData = genConst.cAt;
      break;

    case 27:
      // Without the Prefix, Suffix & "@"
      returnData = genConst.cDot + domainName;
      break;

    case 28:
      // Without the Prefix, Suffix & "."
      returnData = genConst.cAt + domainName;
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name generateRandomInvalidEmail2
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param  {[Integer]} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param  {[Boolean]} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param  {[String]} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {[String]} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateRandomInvalidEmail2 = function generateRandomInvalidEmail2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'generateRandomInvalidEmail2';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0;
  var numberOfDomainNameCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c28 = b.c2 + b.c8;
  var cTrue = g.cTrue;
  failureMode = cg.randomlyGenerateNumberInRange2(b.c1, _defineProperty({
    c28: c28,
    cTrue: cTrue
  }, "cTrue", cTrue)); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the "." symbol
  // 3 - Without both the "@" & "." symbols
  // 4 - Without the domain name
  // 5 - Without the "@" & domain name
  // 6 - Without the "." & domain name
  // 7 - Without the "@", "." & domain name
  // 8 - Without the prefix
  // 9 - Without the suffix
  // 10- Without the "@" & Prefix
  // 11- Without the "." & Prefix
  // 12- Without the "@" & Suffix
  // 13- Without the "." & Suffix
  // 14- Without the "@", "." & Prefix
  // 15- Without the "@", "." & Suffix
  // 16- Without the "@", ".", Prefix, & Suffix
  // 17- Without the Prefix & domain name
  // 18- Without the Suffix & domain name
  // 19- Without the Prefix & Suffix
  // 20- Without the Prefix, Suffix & domain name
  // 21- Without the "@", Prefix & domain name
  // 22- Without the ".", Prefix & domain name
  // 23- Without the "@", Suffix & domain name
  // 24- Without the ".", Suffix & domain name
  // 25- Without the "@", Prefix, Suffix & domain name
  // 26- Without the ".", Prefix, Suffix & domain name
  // 27- Without the Prefix, Suffix & "@"
  // 28- Without the Prefix, Suffix & "."
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.

  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less than 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbo, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol, according to the failure mode.
    if (failureMode === 1 || failureMode === 2 || failureMode === 5 || failureMode === 6 || failureMode === 10 || failureMode === 11 || failureMode === 12 || failureMode === 13 || failureMode >= 21) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    } else if (failureMode === 3 || failureMode === 7 || failureMode === 14 || failureMode === 15 || failureMode === 16) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // Only work generating the domain name if we are not going to be building our invalid email on a missing domain name.


    if (failureMode === 1 || failureMode === 2 || failureMode === 3 || failureMode >= 8 && failureMode <= 16 || failureMode === 19 || failureMode > 27) {
      // Consider that the number of characters in the domain must be either 2 or 3 (according to IpV5, I'm not going to even try touching IpV6!!)
      // So lets first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
      if (numberOfCharactersToGenerate === 4) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = cg.generateRandomMixedCaseTextByLength2(b.c2, ''); // domainName = cg.generateRandomMixedCaseAlphaNumericCodeByLength1(b.c2, '');
        } else {
          // domainName = cg.generateRandomMixedCaseTextWithSpecialCharactersByLength1(b.c2, allowableSpecialCharacters);
          domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c2, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
      } else if (numberOfCharactersToGenerate >= 5) {
        // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
        // but need to decide now so we can get it done and be fair.
        // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
        if (cg.randomlyGenerateBooleanValue2(inputData, inputMetaData) === true) {
          // Stick with a 2-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = cg.generateRandomMixedCaseTextByLength2(b.c2, '');
          } else {
            domainName = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c2, allowableSpecialCharacters);
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
        } else {
          // Do a 3-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = cg.generateRandomMixedCaseTextByLength2(b.c3, '');
          } else {
            domainNme = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(b.c3, allowableSpecialCharacters);
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 3;
        }
      }
    } // ONLY do suffix and prefix if our failure modes do not exclude both.


    if (failureMode >= 1 && failureMode <= 7) {
      // Remaining number of characters that we must provide to the e-mail must be divided by 2, for the prefix and suffix.
      if (numberOfCharactersToGenerate % 2 === 0) {
        // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters;
      } else if (numberOfCharactersToGenerate % 2 === 1) {
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
      }
    } else if (failureMode === 8 || failureMode === 10 || failureMode === 11 || failureMode == 14 || failureMode === 17 || failureMode === 21 || failureMode === 22) {
      // Excluding the Prefix
      numberOfSuffixCharacters = numberOfCharactersToGenerate; // Suffix get the remainder!

      numberOfPrefixCharacters = 0;
    } else if (failureMode === 9 || failureMode === 12 || failureMode === 13 || failureMode === 15 || failureMode === 18 || failureMode === 23 || failureMode === 24) {
      // Excluding the Suffix
      numberOfPrefixCharacters = numberOfCharactersToGenerate; // Prefix gets the remainder!

      numberOfSuffixCharacters = 0;
    }

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    }

    if (numberOfSuffixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        suffix = cg.generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfSuffixCharacters.toString(), '');
      } else {
        suffix = cg.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfSuffixCharacters.toString(), allowableSpecialCharacters);
      }
    }
  }

  switch (failureMode) {
    case 1:
      // Without the "@" symbol
      returnData = prefix + suffix + genConst.cDot + domainName;
      break;

    case 2:
      // Without the "." symbol
      returnData = prefix + genConst.cAt + suffix + domainName;
      break;

    case 3:
      // Without both the "@" & "." symbols
      returnData = prefix + suffix + domainName;
      break;

    case 4:
      // Without the domain name
      returnData = prefix + genConst.cAt + suffix + genConst.cDot;
      break;

    case 5:
      // Without the "@" & domain name
      returnData = prefix + suffix + genConst.cDot + domainName;
      break;

    case 6:
      // Without the "." & domain name
      returnData = prefix + genConst.cAt + suffix;
      break;

    case 7:
      // Without the "@", "." & domain name
      returnData = prefix + suffix;
      break;

    case 8:
      // Without the Prefix
      returnData = genConst.cAt + suffix + genConst.cDot + domainName;
      break;

    case 9:
      // Without the Suffix
      returnData = prefix + genConst.cAt + genConst.cDot + domainName;
      break;

    case 10:
      // Without the "@" & Prefix
      returnData = suffix + genConst.cDot + domainName;
      break;

    case 11:
      // Without the "." & Prefix
      returnData = genConst.cAt + suffix + domainName;
      break;

    case 12:
      // Without the "@" & Suffix
      returnData = prefix + genConst.cDot + domainName;
      break;

    case 13:
      // Without the "." & Suffix
      returnData = prefix + genConst.cAt + domainName;
      break;

    case 14:
      // Without the "@", "." & Prefix
      returnData = suffix + domainName;
      break;

    case 15:
      // Without the "@", "." & Suffix
      returnData = prefix + domainName;
      break;

    case 16:
      // Without the "@", ".", Prefix, & Suffix
      returnData = domainName;
      break;

    case 17:
      // Without the Prefix & domain name
      returnData = genConst.cAt + suffix + genConst.cDot;
      break;

    case 18:
      // Without the Suffix & domain name
      returnData = prefix + genConst.cAt + genConst.cDot;
      break;

    case 19:
      // Without the Prefix & suffix
      returnData = genConst.cAt + genConst.cDot + domainName;
      break;

    case 20:
      // Without the Prefix, Suffix & domain name
      returnData = genConst.cAt + genConst.cDot;
      break;

    case 21:
      // Without the "@", Prefix & domain name
      returnData = suffix + genConst.cDot;
      break;

    case 22:
      // Without the ".", Prefix & domain name
      returnData = genConst.cAt + suffix;
      break;

    case 23:
      // Without the "@", Suffix & domain name
      returnData = prefix + genConst.cDot;
      break;

    case 24:
      // Without the ".", Suffix & domain name
      returnData = prefix + genConst.cAt + genConst.cDot;
      break;

    case 25:
      // Without the "@", Prefix, Suffix & domain name
      returnData = genConst.cDot;
      break;

    case 26:
      // Without the ".", Prefix, Suffix & domain name
      returnData = genConst.cAt;
      break;

    case 27:
      // Without the Prefix, Suffix & "@"
      returnData = genConst.cDot + domainName;
      break;

    case 28:
      // Without the Prefix, Suffix & "."
      returnData = genConst.cAt + domainName;
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};