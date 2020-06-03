"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstTopLevelFolderFromPath = exports.removeXnumberOfFoldersFromEndOfPath = exports.replaceDoublePercentWithMessage = exports.parseSystemRootPath = exports.getKeywordNameFromDataContextName = exports.getDataCatagoryDetailNameFromDataContextName = exports.getDataCatagoryFromDataContextName = exports.doesArrayContainFilename = exports.ascertainMatchingFilenames = exports.doesArrayContainLowerCaseConsolidatedString = exports.compareSimplifiedAndConsolidatedStrings = exports.simplifyAndConsolidateString = exports.mapWordToCamelCaseWord = exports.convertArrayToCamelCaseString = exports.convertCamelCaseStringToArray = exports.aggregateNumericalDifferenceBetweenTwoStrings = exports.getValueFromAssignmentOperationString = exports.removeFileExtensionFromFileName = exports.getFileNameFromPath = exports.convertStringToUpperCase = exports.convertStringToLowerCase = exports.cleanCarriageReturnFromString = exports.replaceColonWithUnderscore = exports.replaceSpacesWithPlus = exports.getUserNameFromEmail = exports.swapDoubleBackSlashToSingleBackSlash = exports.swapDoubleForwardSlashToSingleForwardSlash = exports.swapBackSlashToForwardSlash = exports.swapForwardSlashToBackSlash = exports.singleQuoteSwapAfterEquals = exports.isString = exports.isFloat = exports.isInteger = exports.isBoolean = exports.determineObjectDataType = exports.stringToDataType = exports.stringToBoolean = void 0;

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../Constants/generic.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.
var _ = require('lodash');

var path = require('path');
/**
 * @name stringToBoolean
 * @description Converts a string to a boolean value
 * @param  {[String]} inputData A string that contains a truthy or a falsy value and should be converted to a boolean.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[Boolean]} A boolean value of either True or False according to the business rule conversion.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


var stringToBoolean = function stringToBoolean(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cstringToBoolean;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;

  switch (inputData.toLowerCase().trim()) {
    case g.ctrue:
    case g.cTrue:
    case g.cTRUE:
    case b.ct:
    case b.cT:
    case b.cy:
    case b.cY:
    case g.cyes:
    case g.cYes:
    case g.cYES:
    case b.con:
    case b.cOn:
    case b.cON:
      returnData = true;
      break;

    case g.cfalse:
    case g.cFalse:
    case g.cFALSE:
    case b.cf:
    case b.cF:
    case b.cn:
    case b.cN:
    case b.cno:
    case b.cNo:
    case b.cNO:
    case g.coff:
    case g.cOff:
    case g.cOFF:
      returnData = false;
      break;

    default:
      returnData = false;
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name stringToDataType
 * @description Converts a string to the appropriate data value.
 * So if it's a string value of "3.1415926535897932384626433832" then it will get converted to a float of the same value.
 * If it's a string value of "false" then it will get converted to a boolean of the same value.
 * If it's a string value of "12" then it will get converted to an integer of the same value.
 * If it's a string value of "Happy Birthday" it will get returned the same as the input, no change, since it's just a string.
 * If it's an array of strings, or collection object, it will get returned as the same as the input, no change.
 * @param  {[String]} inputData The string that should be converted to some value.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[Object/String/Boolean/Integer]} Returns a value of whatever type the string should be converted to as appropriate.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.stringToBoolean = stringToBoolean;

var stringToDataType = function stringToDataType(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cstringToDataType;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;
  var dataType = determineObjectDataType(inputData);

  switch (dataType) {
    case s.cBoolean:
      returnData = stringToBoolean(inputData);
      break;

    case s.cInteger:
      returnData = parseInt(inputData);
      break;

    case s.cFloat:
      returnData = parseFloat(inputData);
      break;

    case s.cString:
      returnData = inputData;
      break;

    default:
      // We don't know what kind of object this is, better return it the way it was.
      returnData = inputData;
      break;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name determineObjectDataType
 * @description Determines if the contents of a string are actually a Boolean, Integer, Float or String or something else.
 * @param  {[String]} inputData A string that contains some value that we should figure out what kind of data type that data is, Boolean, Integer, Float, String or something else.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string that indicates if the data type should be Boolean, Integer, Float or String or something else.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.stringToDataType = stringToDataType;

var determineObjectDataType = function determineObjectDataType(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cdetermineObjectDataType;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;

  if (isBoolean(inputData) === true) {
    returnData = s.cBoolean;
  } else if (isInteger(inputData) === true) {
    returnData = s.cInteger;
  } else if (isFloat(inputData) === true) {
    returnData = s.cFloat;
  } else if (isString(inputData) === true) {
    returnData = s.cString;
  } else {
    // Otherwise we cannot figure out what the data type is.
    // No real way to tell the difference between Short, Long and Double.
    // And we don't really need to tell the difference between all those complicated data types.
    // At least not yet!
    returnData = s.cObject;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name isBoolean
 * @description Determines if the input string is a boolean type of value, "true", "True", "TRUE", "t", "T", "y", "Y", "yes", "Yes", "YES", "1", "on", "On", "ON" or
 * "false", "False", "FALSE", "f", "F", "n", "N", "no", "No", "NO", "0"
 * @param  {[String]} inputData The string that should be checked if it is a Boolean style value or not, could be some form of "true" or "false".
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[Boolean]} A Boolean value of True or False to indicate if the input string is a Boolean or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.determineObjectDataType = determineObjectDataType;

var isBoolean = function isBoolean(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisBoolean;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;
  inputData = inputData.toLowerCase().trim();

  if (inputData === g.ctrue || inputData === b.ct || inputData === b.cy || inputData === g.cyes || inputData === b.con || inputData === g.cfalse || inputData === b.cf || inputData === b.cn || inputData === b.cno || inputData === g.coff) {
    returnData = true;
  } else {
    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name isInteger
 * @description Determines if the input string is an integer type of value -9007299254740992 to 9007199254740992
 * @param  {[String]} inputData The string that should be checked if it is an integer style value or not.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[Boolean]} A Boolean value of true or false to indicate if the input string is an integer or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isBoolean = isBoolean;

var isInteger = function isInteger(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisInteger;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;

  if (!isNaN(inputData) && inputData.indexOf(b.cDot) === -1) {
    returnData = true;
  } else {
    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name isFloat
 * @description Determines if the input string is a floating point type of value or not.
 * @param  {[String]} inputData The string that should be checked if it is an integer style value or not.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[Boolean]} A Boolean value of true or false to indicate if the input string is a floating point number or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isInteger = isInteger;

var isFloat = function isFloat(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisFloat;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;

  if (!isNaN(inputData) && inputData.indexOf(b.cDot) !== -1) {
    returnData = true;
  } else {
    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name isString
 * @description Determines if the input string is a string or not, by process of elimination, aka if it's not a Boolean, and not an Integer and not a Float then it must be a string.
 * @param  {[String]} inputData The string that should be checked if it is a string and not a Boolean, Integer or Float.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[Boolean]} A Boolean value of true or false to indicate if the input string is a string and not a Boolean, Integer or Float; or not (meaning it would be one of those 3 data types, discuised as a string).
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isFloat = isFloat;

var isString = function isString(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;

  if (isBoolean(inputData) === false && isInteger(inputData) === false && isFloat(inputData) === false && (typeof inputData == 'string' || inputData instanceof String)) {
    returnData = true; // If it's not a Boolean, and not an Integer, and not a Float, then it must be a string, especially given the type of the variable is a string!
  } else {
    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name singleQuoteSwapAfterEquals
 * @description Swaps single quote characters in the middle of the string with double quote characters in the middle of the string.
 * input: 'input[name='emailAddress'][class='username']'
 * output: 'input[name="emailAddress"][class="username"]'
 * @param  {[String]} inputData A string that ontains text with single quotes that should be swapped for double quotes.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string that contains text where single quotes have been exchanged for double quotes.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isString = isString;

var singleQuoteSwapAfterEquals = function singleQuoteSwapAfterEquals(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.csingleQuoteSwapAfterEquals;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  } // console.log('executing business rule: singleQuoteSwapAfterEquals');


  var returnData; // console.log('inputData is: ' + inputData);

  if (inputData.includes(b.cSingleQuote) === true) {
    // First replace all the quotes in the string with double quotes.
    returnData = inputData.replace(/'/g, b.cDoubleQuote); // Next replace the first and last double quote with single quote.

    if (returnData.indexOf(b.cDoubleQuote) === 0) {
      returnData = inputData.replace(b.cDoubleQuote, b.cSingleQuote);
    }

    if (returnData.charAt(returnData.length - 1) === b.cDoubleQuote) {
      returnData = returnData.slice(0, -1) + b.cSingleQuote;
    }
  } else {
    returnData = inputData;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name swapForwardSlashToBackSlash
 * @description Swaps all forward slash characters in a string for back slash characters.
 * @param  {[String]} inputData String that might contain some forward slashes.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string, just all forward slash characters
 * swapped for back slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.singleQuoteSwapAfterEquals = singleQuoteSwapAfterEquals;

var swapForwardSlashToBackSlash = function swapForwardSlashToBackSlash(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapForwardSlashToBackSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = replaceCharacterWithCharacter(inputData, /\//g, b.cBackSlash);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name swapBackSlashToForwardSlash
 * @description Swaps all back slash characters in a string for forward slash characters.
 * @param  {[String]} inputData String that might contain some back slashes.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string, just all back slash characters
 * swapped for forward slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.swapForwardSlashToBackSlash = swapForwardSlashToBackSlash;

var swapBackSlashToForwardSlash = function swapBackSlashToForwardSlash(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapBackSlashToForwardSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapBackSlashToForwardSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = replaceCharacterWithCharacter(inputData, /\\/g, b.cForwardSlash);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.swapBackSlashToForwardSlash function');


  return returnData;
};
/**
 * @name swapDoubleForwardSlashToSingleForwardSlash
 * @description Swaps all double forward slash characters for single forward slash characters.
 * @param  {[String]} inputData String that might contain some double forward slashes.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string, just all double forward slash characters
 * swapped for single forward slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.swapBackSlashToForwardSlash = swapBackSlashToForwardSlash;

var swapDoubleForwardSlashToSingleForwardSlash = function swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapDoubleForwardSlashToSingleForwardSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = replaceCharacterWithCharacter(inputData, /\/\//g, b.cForwardSlash);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name swapDoubleBackSlashToSingleBackSlash
 * @description Swaps all double back slash characters for single back slash characters.
 * @param  {[String]} inputData String that might contain some double back slashes.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string, just all double back slash characters
 * swapped for single back slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.swapDoubleForwardSlashToSingleForwardSlash = swapDoubleForwardSlashToSingleForwardSlash;

var swapDoubleBackSlashToSingleBackSlash = function swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapDoubleBackSlashToSingleBackSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapDoubleBackSlashToSingleBackSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = replaceCharacterWithCharacter(inputData, /\\\\/g, b.cBackSlash);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.swapDoubleBackSlashToSingleBackSlash function');


  return returnData;
};
/**
 * @name getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param  {[String]} inputData A string that contains an email address value.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.swapDoubleBackSlashToSingleBackSlash = swapDoubleBackSlashToSingleBackSlash;

var getUserNameFromEmail = function getUserNameFromEmail(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cgetUserNameFromEmail is resolving as: ' + s.cgetUserNameFromEmail);
  var functionName = s.cgetUserNameFromEmail;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'index of the ' + b.cAt + ' is: ' + inputData.indexOf(b.cAt));

  var returnData = inputData.substr(0, inputData.indexOf(b.cAt));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name replaceSpacesWithPlus
 * @description Replaces all spaces in the input string with plus symbols.
 * @param  {[String]} inputData A string that contains spaces that should be converted to plus symbols.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string but with space characters converted to plus symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getUserNameFromEmail = getUserNameFromEmail;

var replaceSpacesWithPlus = function replaceSpacesWithPlus(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.creplaceSpacesWithPlus is resolving as: ' + s.creplaceSpacesWithPlus);
  var functionName = s.creplaceSpacesWithPlus;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  } // var returnData = inputData.replace(/ /g, b.cPlus);


  var returnData = replaceCharacterWithCharacter(inputData, / /g, b.cPlus);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols
 * @param  {[String]} inputData A string that contains colons that should be converted to underscore symbols.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.replaceSpacesWithPlus = replaceSpacesWithPlus;

var replaceColonWithUnderscore = function replaceColonWithUnderscore(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.creplaceColonWithUnderscore is resolving as: ' + s.creplaceColonWithUnderscore);
  var functionName = s.creplaceColonWithUnderscore;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  } // var returnData == inputData.replace(/:/g, b.cUnderscore);


  var returnData = replaceCharacterWithCharacter(inputData, /:/g, b.cUnderscore);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name replaceCharacterWithCharacter
 * @description Replaces all of a specified character in the input data with another specified character.
 * @NOTE: This is NOT a public facing business rule, because the function signature cannot be made to match with the accepted business rules standards.
 * It actually could be made to match but we would have to combine the 2nd two parameters into one with a delimiter.
 * In practice this would be a mistake, but would be an acceptable solution if we find there are many additional needs for this kind of business rule.
 * @param  {[String]} inputData A string that may or may not contain the specified characters that should be converted to another specified character.
 * @param  {[String]} character2Find The character to be searched and replaced from the input string.
 * @param  {[String]} character2Replace The character that should be used to replace the character specified for replacement from the input data.
 * @return {[String]} The same as the input string but with specified characters converted to the other specified character.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.replaceColonWithUnderscore = replaceColonWithUnderscore;

var replaceCharacterWithCharacter = function replaceCharacterWithCharacter(inputData, character2Find, character2Replace) {
  // console.log('BEGIN stringParsing.replaceCharacterWithCharacter function');
  // console.log('inputData is: ' + inputData);
  // console.log('character2Find is: ' + character2Find);
  // console.log('character2Replace is: ' + character2Replace);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'replaceCharacterWithCharacter';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'character2Find is: ' + character2Find);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'character2Replace is: ' + character2Replace);

  if (!inputData && !character2Find && !character2Replace) {
    return false;
  }

  var returnData = inputData.replace(character2Find, character2Replace);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceCharacterWithCharacter function');


  return returnData;
};
/**
 * @name cleanCarriageReturnFromString
 * @description Cleans carriage return characters from the input data and trims off any leading or trailing spaces.
 * @param  {[String]} inputData The string that should be scrubbed for carriage returns.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same as the input string, but with all carriage return characters removed.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


var cleanCarriageReturnFromString = function cleanCarriageReturnFromString(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.ccleanCarriageReturnFromString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = inputData.replace(/\s+/g, ' ').trim();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name convertStringToLowerCase
 * @description Converts the input string to the same string but with no upper case letters.
 * @param  {[String]} inputData The string that should have all upper case letters changed to lower case letters.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The corrected string with all lower case letters.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.cleanCarriageReturnFromString = cleanCarriageReturnFromString;

var convertStringToLowerCase = function convertStringToLowerCase(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertStringToLowerCase is resolving as: ' + s.cconvertStringToLowerCase);
  var functionName = s.cconvertStringToLowerCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = inputData.toLowerCase();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name convertStringToUpperCase
 * @description Converts the input string to the same string but with no lower case letters.
 * @param  {[String]} inputData The string that should have all lower case letters changed to upper case letters.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The corrected string with all upper case letters.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.convertStringToLowerCase = convertStringToLowerCase;

var convertStringToUpperCase = function convertStringToUpperCase(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertStringToUpperCase is resolving as: ' + s.cconvertStringToUpperCase);
  var functionName = s.cconvertStringToUpperCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  } // console.log('String before is: ' + inputData);


  var returnData = inputData.toUpperCase();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name getFileNameFromPath
 * @description Gets the file name from a string that contains the path and the file name.
 * @param  {[String]} inputData The string that should have all the folders and path removed from it.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The file name and file extension string without the full path.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.convertStringToUpperCase = convertStringToUpperCase;

var getFileNameFromPath = function getFileNameFromPath(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetFileNameFromPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  } // Clean the path string for any double slashes.


  if (inputData.includes(b.cDoubleForwardSlash)) {
    inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
  }

  if (inputData.includes(b.cForwardSlash)) {
    inputData = swapForwardSlashToBackSlash(inputData, '');
  }

  var returnData = inputData.split(b.cBackSlash).pop().trim();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name removeFileExtensionFromFileName
 * @description Removes the file extension from the file name if it is there.
 * Otherwise it will remove all the characters after the last period in the file name.
 * @param  {[String]} inputData The string that should have all the characters after the last period in the file name removed.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The same input string bbut without the file extension or all the characters removed after the last dot.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getFileNameFromPath = getFileNameFromPath;

var removeFileExtensionFromFileName = function removeFileExtensionFromFileName(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cremoveFileExtensionFromFileName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = inputData.replace(/\.[^/.]+$/, '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param  {[String]} inputData The string that should be parsed for the value on the right side of the assignment operator.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The string value of whatever is on the right side of the assignment operator.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.removeFileExtensionFromFileName = removeFileExtensionFromFileName;

var getValueFromAssignmentOperationString = function getValueFromAssignmentOperationString(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cgetValueFromAssignmentOperationString is resolving as: ' + s.cgetValueFromAssignmentOperationString);
  var functionName = s.cgetValueFromAssignmentOperationString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var parsedString = inputData.split(b.cEqual);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'parsedString term 1 is: ' + parsedString[0]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'parsedString term 2 is: ' + parsedString[1]);

  var returnData = parsedString[1].replace(/['"]+/g, '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name aggregateNumericalDifferenceBetweenTwoStrings
 * @description Determines the delta difference between the two input strings and returns it as a number.
 * @param  {[String]} inputData String 1 to compare.
 * @param  {[String]} inputMetaData String 2 to compare.
 * @return {[Integer]} The delta difference between the two strings, expressed as a number.
 * @NOTE Duplicated from the BusinessRules.Rules.stringParsing function,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.getValueFromAssignmentOperationString = getValueFromAssignmentOperationString;

var aggregateNumericalDifferenceBetweenTwoStrings = function aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.caggregateNumericalDifferenceBetweenTwoStrings is resolving as: ' + s.caggregateNumericalDifferenceBetweenTwoStrings);
  var functionName = s.caggregateNumericalDifferenceBetweenTwoStrings;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData; // Convert the input strings to lower case and clean them up for parsing.

  var string1 = inputData.toLowerCase().replace(/\W/g, '');
  var string2 = inputMetaData.toLowerCase().replace(/\W/g, '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'string1 is: ' + string1);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'string2 is: ' + string2); // Build some arrays of variations on string 2, we will use these for doing the comparisons.


  var variation0 = Array(string2.length + 1).fill(0).map(function (v, i) {
    return i;
  });
  var variation1 = Array(string2.length + 1).fill(0);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'variation0 value is: ' + variation0);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'variation1 value is: ' + variation1);

  for (var i = 0; i < string1.length; i++) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'i value is: ' + i);

    variation1[0] = i + 1;

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'variation0 value is: ' + variation0);

    for (var j = 0; j < string2.length; j++) {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'j value is: ' + j);

      var deletionCost = variation0[j + 1] + 1;
      var insertionCost = variation1[j] + 1;
      var substitutionCost = void 0;

      if (string1[i] === string2[j]) {
        substitutionCost = variation0[j];
      } else {
        substitutionCost = variation0[j] + 1;
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'deletionCost is: ' + deletionCost);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'insertionCost is: ' + insertionCost);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'substitutionCost is: ' + substitutionCost);

      variation1[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'variation1 value is: ' + variation1);
    }

    var temp = variation1;
    variation1 = variation0;
    variation0 = temp;
  }

  returnData = variation0[string2.length];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {[String]} inputData String to decompose into an array.
 * @param {[String]} inputMetaData Not used for this business rule.
 * @return {[Array]} The array of words that were composed in the original string.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.aggregateNumericalDifferenceBetweenTwoStrings = aggregateNumericalDifferenceBetweenTwoStrings;

var convertCamelCaseStringToArray = function convertCamelCaseStringToArray(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertCamelCaseStringToArray is resolving as: ' + s.cconvertCamelCaseStringToArray);
  var functionName = s.cconvertCamelCaseStringToArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  var caps = [];

  for (var i = 1; i < inputData.length; i++) {
    if (g.cUpperCaseEnglishAlphabet.includes(str.charAt(i))) {
      caps.push(i);
    }
  }

  if (caps.length > 0) {
    var last = 0;
    var decomposedString = [];

    for (var j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.sice(last, caps[j]).toLowerCase());
      last = caps[j];
    }

    decomposedString.push(inputData.slice(last).toLowerCase());
    returnData = decomposedString;
  } else {
    returnData = [inputData.toLowerCase()];
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name convertArrayToCamelCaseString
 * @description Takes an array of words and returns a camelCase string of the input words.
 * @param {[Array]} inputData The array of words that should be strung together into a single long string.
 * @param {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A String that contains all of the words from the input array put together in sequential order.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.convertCamelCaseStringToArray = convertCamelCaseStringToArray;

var convertArrayToCamelCaseString = function convertArrayToCamelCaseString(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertArrayToCamelCaseString is resolving as: ' + s.cconvertArrayToCamelCaseString);
  var functionName = s.cconvertArrayToCamelCaseString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = inputData.map(function (key, index) {
    return mapWordToCamelCase(key, index);
  });

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name mapWordToCamelCase
 * @description Takes a String key and an indexed String value and maps the word to an upper case first letter word.
 * @param {[String]} inputData The string key/value that should be converted to a camel case word.
 * @param {[String]} inputMetaData The string index for the map to the value that should be used.
 * @return {[String]} A String where the word has been converted into a camel case word.
 * @author Seth Hollingsead
 * @data 2020/02/15
 */


exports.convertArrayToCamelCaseString = convertArrayToCamelCaseString;

var mapWordToCamelCaseWord = function mapWordToCamelCaseWord(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cmapWordToCamelCaseWord is resolving as: ' + s.cmapWordToCamelCaseWord);
  var functionName = s.cmapWordToCamelCaseWord;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (inputMetaData === 0) {
    returnData = inputData;
  } else {
    returnData = inputData.replace(/^./, function (character) {
      return character.toUpperCase();
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name simplifyAndConsolidateString
 * @description Takes a string, and returns a version of it converted to lowercase, with all digits and symbols and whitespace removed.
 * @param  {[String]} inputData The string that should be simplified and consolidated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string that has been simplified and consolidated by converting to lower case, removing all digits, symbols and white space.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.mapWordToCamelCaseWord = mapWordToCamelCaseWord;

var simplifyAndConsolidateString = function simplifyAndConsolidateString(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.csimplifyAndConsolidateString is resolving as: ' + s.csimplifyAndConsolidateString);
  var functionName = s.csimplifyAndConsolidateString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param  {[String]} inputData The first string to be compared.
 * @param  {[String]} inputMetaData The second string to be compared.
 * @return {[Boolean]} A Boolean value to indicate if the strings are virtually idential or not.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.simplifyAndConsolidateString = simplifyAndConsolidateString;

var compareSimplifiedAndConsolidatedStrings = function compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.ccompareSimplifiedAndConsolidatedStrings is resolving as: ' + s.ccompareSimplifiedAndConsolidatedStrings);
  var functionName = s.ccompareSimplifiedAndConsolidatedStrings;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = simplifyAndConsolidateString(inputData) === simplifyAndConsolidateString(inputMetaData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidateString().
 * @param  {[Array]} inputData The array of strings that should be checked if it contains the specified string.
 * @param  {[String]} inputMetaData The string we are looking for in the array.
 * @return {[Boolean]} A Boolean to indicate if the string is found in the array or not.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.compareSimplifiedAndConsolidatedStrings = compareSimplifiedAndConsolidatedStrings;

var doesArrayContainLowerCaseConsolidatedString = function doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cdoesArrayContainLowerCaseConsolidatedString is resolving as: ' + s.cdoesArrayContainLowerCaseConsolidatedString);
  var functionName = s.cdoesArrayContainLowerCaseConsolidatedString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  var stringDelta = function stringDelta(value1, value2) {
    return aggregateNumericalDifferenceBetweenTwoStrings(value1, value2) < 2;
  };

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'stringDelta value is: ' + stringDelta);

  returnData = doesArrayContainValue(inputData, inputMetaData, stringDelta);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param  {[String]} inputData The first filename and path that should be used in making the file name comparison.
 * @param  {[String]} inputMetaData The second filename and path that should be used in making the file name comparison.
 * @return {[Boolean]} A Boolean value to indicate if the file names are equavalent.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.doesArrayContainLowerCaseConsolidatedString = doesArrayContainLowerCaseConsolidatedString;

var ascertainMatchingFilenames = function ascertainMatchingFilenames(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cascertainMatchingFilenames is resolving as: ' + s.cascertainMatchingFilenames);
  var functionName = s.cascertainMatchingFilenames;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (path.basename(inputData) === path.basename(inputMetaData)) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Filenames match');

    returnData = true;
  } else {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Filenames do not match');

    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name doesArrayContainFilename
 * @description Checks if an array contains a filename, after stripping off the path.
 * @param  {[Array]} inputData The Array of file names that should be checked for the input file name we are looking for.
 * @param  {[String]} inputMetaData The file name we are looking for in the input Array.
 * @return {[Boolean]} A Boolean value to indicate if the file name was found or not.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.ascertainMatchingFilenames = ascertainMatchingFilenames;

var doesArrayContainFilename = function doesArrayContainFilename(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cdoesArrayContainFilename is resolving as: ' + s.cdoesArrayContainFilename);
  var functionName = s.cdoesArrayContainFilename;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = doesArrayContainValue(inputData, inputMetaData, ascertainMatchingFilenames);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}; // ******************************************************
// The following functions are more domain specific
// ******************************************************

/**
 * @name getDataCatagoryFromDataContextName
 * @description Gets the data catagory from the context name, E.g. Input: Page_ProjectList, data catagory is 'Page'.
 * @param  {[String]} inputData The data context name, which should also contain the data catagory seperated by underscore.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The data catagory, such as Page or Test.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.doesArrayContainFilename = doesArrayContainFilename;

var getDataCatagoryFromDataContextName = function getDataCatagoryFromDataContextName(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetDataCatagoryFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;
  var dataCatagory = inputData.split(b.cUnderscore);
  returnData = dataCatagory[0];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Data Catagory should be: ' + dataCatagory[0]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name getDataCatagoryDetailNameFromDataContextName
 * @description Gets the data catagory detail name from the context name, E.g. Input: Page_ProjectList, data catagory is 'ProjectList'.
 * @param  {[String]} inputData The data context name, which should also contain the data catagory and data catagory detail name seperated by an underscore.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The data catagory detail name, such as ProjectDetails or ProjectList.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getDataCatagoryFromDataContextName = getDataCatagoryFromDataContextName;

var getDataCatagoryDetailNameFromDataContextName = function getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetDataCatagoryDetailNameFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;
  var dataCatagoryDetailName = inputData.split(b.cUnderscore);
  returnData = dataCatagoryDetailName[0];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Data Catagory Detail Name should be: ' + dataCatagoryDetailName[1]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name getKeywordNameFromDataContextName
 * @description Gets the keyword name from the context name, E.g. Input: Keywords_ProjectDetails_DeleteEntireProject, keyword is: 'DeleteEntireProject'.
 * @param  {[String]} inputData The data context name, which should also contain the data catagory and data catagory detail name and keyword name seperated by an underscore.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The keyword name, such as DeleteEntireProject or EditProjectInfoClick.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getDataCatagoryDetailNameFromDataContextName = getDataCatagoryDetailNameFromDataContextName;

var getKeywordNameFromDataContextName = function getKeywordNameFromDataContextName(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetKeywordNameFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData;
  var dataCatagoryKeywordName = inputData.split(b.cUnderscore);
  returnData = dataCatagoryKeywordName[1];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Keyword Name should be: ' + dataCatagoryKeywordName[2]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name parseSystemRootPath
 * @description Parses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the CAFfeinated part of the path
 * and will parse that out to determine where on the hard drive this CAFfeinated folder is installed at.
 * @param  {[String]} inputData The root path as defined by calling path.resolve(__dirname);
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} A string with the path up to the application folder,
 * where ever that is installed on the local system executing the tests.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.getKeywordNameFromDataContextName = getKeywordNameFromDataContextName;

var parseSystemRootPath = function parseSystemRootPath(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.parseSystemRootPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cparseSystemRootPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = '';
  var pathElements = inputData.split(b.cBackSlash);

  loop1: for (var i = 0; i < pathElements.length; i++) {
    // console.log('BEGIN iteration i: ' + i);
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN iteration i: ' + i);

    var pathElement = pathElements[i]; // console.log('pathElement is ' + pathElement);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pathElement is: ' + pathElement);

    if (i === 0) {
      // console.log('case: i = 0');
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'case: i = 0');

      returnData = pathElement;
    } else if (pathElement === s.cCAFfeinated) {
      // console.log('case: pathElement = ' + s.cCAFfeinated);
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'case: pathElement = ' + s.cCAFfeinated);

      returnData = returnData + b.cBackSlash + pathElement + b.cBackSlash;
      break loop1;
    } else {
      // console.log('case else');
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'case else');

      returnData = returnData + b.cBackSlash + pathElement;
    } // console.log('returnData so far is: ' + returnData);
    // console.log('END iteration i: ' + i);


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData so far is: ' + returnData);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'END iteration i: ' + i);
  }

  returnData = swapDoubleBackSlashToSingleBackSlash(returnData, '');
  returnData = swapBackSlashToForwardSlash(returnData, '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.parseSystemRootPath function');


  return returnData;
};
/**
 * @name replaceDoublePercentWithMessage
 * @description Parses the input string and replaces any instance of a double percentage sign
 * with the input Meta Data string.
 * @param {[String]} inputData The string that might contain the double percentage signs.
 * @param {[String]} inputMetaData The string that should replace the double percentage signs.
 * @return {[String]} The modified string with the message inserted.
 * @author Seth Hollingsead
 * @date 2020/03/26
 * @NOTE The code that has been commented out below, is left as a memorial of what NOT TO DO!
 * Because it causes a circular dependency as noted in the note below.
 * If you need to debug this function, you'll need to uncomment the console.logs that are hard-coded below.
 */


exports.parseSystemRootPath = parseSystemRootPath;

var replaceDoublePercentWithMessage = function replaceDoublePercentWithMessage(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceDoublePercentWithMessage business rule');
  // NOTE: Cannot use the following code here, because it causes a circular dependency.
  // We just have to hard code everything and it won't be loged to the log file.
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.creplaceDoublePercentWithMessage;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = '';
  returnData = inputData.replace(b.cPercent + b.cPercent, inputMetaData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceDoublePercentWithMessage business rule');


  return returnData;
};
/**
 * @name removeXnumberOfFoldersFromEndOfPath
 * @description Removes X number of folders from the end of a path and returns the newly modified path.
 * @param  {[String]} inputData The path that should have the number of paths removed.
 * @param  {[Integer]} inputMetaData The number of paths that should be removed from the input path.
 * @return {[String]} The modified string with the folders removed from the input path.
 * @author Seth Hollingsead
 * @date 2020/06/01
 */


exports.replaceDoublePercentWithMessage = replaceDoublePercentWithMessage;

var removeXnumberOfFoldersFromEndOfPath = function removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cremoveXnumberOfFoldersFromEndOfPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData && math.isNumeric(inputMetaData) === false) {
    returnData = false;
  }

  var returnData = '';
  var pathArray;
  var pathAsForwardSlash;

  if (inputData.includes(b.cForwardSlash) === true) {
    pathArray = inputData.split(b.cForwardSlash);
    pathAsForwardSlash = true;
  } else if (inputData.includes(b.cBackSlash) === true) {
    pathArray = inputData.split(b.cBackSlash);
    pathAsForwardSlash = false;
  } else {
    pathAsForwardSlash = false;
    returnData = false;
  }

  if (returnData !== false) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pathArray is: ' + JSON.stringify(pathArray));

    for (var i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'current path element is: ' + pathArray[i]);

      if (i === 0) {
        returnData = pathArray[i];
      } else {
        if (pathAsForwardSlash === true) {
          returnData = returnData + b.cForwardSlash + pathArray[i];
        } else if (pathAsForwardSlash === false) {
          returnData = returnData + b.cBackSlash + pathArray[i];
        } else {
          returnData = false;
          break;
        }
      } // END else case

    } // END for-loop
    // We still need a trailing slash


    if (pathAsForwardSlash === true) {
      returnData = returnData + b.cForwardSlash;
    } else if (pathAsForwardSlash === false) {
      returnData = returnData + b.cBackSlash;
    } else {
      returnData = false;
    }
  } // END returnData !== false


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @name getFirstTopLevelFolderFromPath
 * @description Takes a path and returns the folder at the farthest right of that path.
 * @param  {[String]} inputData The path that should be evaluated.
 * @param  {[String]} inputMetaData Not used for this business rule.
 * @return {[String]} The folder at the far-right of the input path.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */


exports.removeXnumberOfFoldersFromEndOfPath = removeXnumberOfFoldersFromEndOfPath;

var getFirstTopLevelFolderFromPath = function getFirstTopLevelFolderFromPath(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.getFirstTopLevelFolderFromPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  var returnData = ''; // returnData = inputData; // Placeholder for the data processing we still need to do.

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}; // ******************************************************
// Internal functions
// ******************************************************

/**
 * @name doesArrayContainValue
 * @description Checks if an array contains a value, checking equality by function(val, arr[i])
 * @param  {[Array]} inputData The input array that should be searched for the given input value.
 * @param  {[String/Integer/Object]} inputMetaData The value that should be searched for in the input array.
 * @param  {[Function]} myFunction The function that should be used to do the search.
 * @return {[Boolean]} A Boolean value to indicate if the value was found in the array or not found.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getFirstTopLevelFolderFromPath = getFirstTopLevelFolderFromPath;

function doesArrayContainValue(array, value, myFunction) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'doesArrayContainValue';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'inputData value is: ' + JSON.stringify(array));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'inputMetaData value is: ' + value); // Not sure how this will output, would be good to also put some type checking on this input variable.


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'myFunction value is: ' + JSON.stringify(myFunction));

  var returnData;

  if (_.isArray(array) === false) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'array input object is not an array.');

    returnData = false;
  }

  if (!!array.find(function (i) {
    return myFunction(i, value);
  })) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'The value was found in the array.');

    returnData = true;
  } else {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'The value was NOT found in the array.');

    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

; // /**
//  * @name mostPopularNumber
//  * @description Parses through an array of integers and determine which value is the most popular.
//  * @param  {[Array]} inputArray The array that should be evaluated for most popular value.
//  * @param  {[Integer]} length The length of the array that was passed in.
//  * @return {[Integer]} The most popular value in the array.
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  * @NOTE: NOT TESTED!!!!
//  */
// function mostPopularNumber(inputArray, length) {
//   console.log('BEGIN mostPopularNumber function');
//   console.log('inputArray is: ' + JSON.stringify(inputArray));
//   console.log('length is: ' + length);
//   var returnData;
//   var i, j, instanceCounter = 0;
//   var tempArray1 = [];
//   var tempArray2 = [];
//
//   for (i = 0; i <= length; i++) {
//     for (j = 0; j <= length; j++) {
//       if (inputArray[i] === inputArray[j]) {
//         tempArray1[i] = inputArray[i];
//       }
//     }
//   }
//
//   for (i = 0; i <= tempArray1.length; i++) {
//     for (j = 0; j <= tempArray1.length; j++) {
//       if (tempArray1[i] === inputArray[j]) {
//         tempArray2[i] = ++instanceCounter;
//       }
//     }
//   }
//
//   for (i = 0; i <= tempArray2.length; i++) {
//     if (i = 0) {
//       returnData = tempArray2[i];
//     } else {
//       if (tempArray2[i] > tempArray2[i - 1]) {
//         returnData = tempArray2[i];
//       }
//     }
//   }
//
//   console.log('returnData is: ' + returnData);
//   console.log('END mostPopularNumber function');
//   return returnData;
// };
//
// /**
//  * @name isAlmostPalindrome
//  * @description Determines if the input string is almost a Palindrome string or not.
//  * That is to say if the word is reversable or not reversable and if it is at least within
//  * one character of being a palindrome string.
//  * @param  {[String]} inputData The string that should be evaluated to determine if it is a Palindrome string or not.
//  * @return {Boolean} True or False to indicate if the input string is a Palindrome or almost palindrome string or not.
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  * @NOTE: NOT TESTED!!!!
//  */
// function isAlmostPalindrome(inputData) {
//   console.log('BEGIN isAlmostPalindrome function');
//   console.log('inputData is: ' + inputData);
//   // s.charAt(i);
//   var returnData = false;
//   var i, misCompareCount;
//   misCompareCount = 0;
//   for (i = 0; i < inputData.length; i++) {
//     if (inputData.charAt(i) !== inputData.charAt(inputData.length - i)) {
//       misCompareCount += 1;
//     }
//   }
//   if (misCompareCount <= 1) {
//     returnData = true;
//   }
//   console.log('returnData is: ' + returnData);
//   console.log('END isAlmostPalindrome function');
//   return returnData;
// };
//
//
// // Implement a function to calculate the average distance between three points in a single plane,
// // where the coordinates of these points are (x1, y1), (x2, y2) and (x3, y3).
//
// /**
//  * @name threePointAverage
//  * @description Calculates the average of 3 coordinates in a 2-Dimensional plane.
//  * @param  {[Array]} point1 The coordinate for the first point.
//  * @param  {[Array]} point2 The coordinate for the second point.
//  * @param  {[Array]} point3 The coordinate for the third point.
//  * @return {[Array]} Returns the XY coordinate of the average point between all points.
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  * @NOTE: NOT TESTED!!!!
//  */
// function threePointAverage(point1, point2, point3) {
//   console.log('BEGIN threePointAverage function');
//   console.log('point1 is: ' + point1);
//   console.log('point2 is: ' + point2);
//   console.log('point3 is: ' + point3);
//   var returnData;
//   var xAverage, x1, x2, x3;
//   var yAverage, y1, y2, y3;
//
//   x1 = point1[0];
//   x2 = point2[0];
//   x3 = point3[0];
//   y1 = point1[1];
//   y2 = point2[1];
//   y3 = point3[1];
//
//   // Calculate the X-averages:
//   xAverage = (x1 + x2 + x3) / 3
//   yAverage = (y1 + y2 + y3) / 3
//   returnData = [xAverage, yAverage];
//   console.log('returnData is: ' + returnData);
//   console.log('END threePointAverage function');
//   return returnData;
// };
//
// /**
//  * @name arrayCounter
//  * @description Receives an array and a value, counts the number of occurances of that value in the array.
//  * @param  {[Array]} inputArray The array which should have it's values counted.
//  * @param  {[Integer/String/Object]} instance The instance that should be counted in the array.
//  * @return {[Integer]} The count of the objects/values that was found to match out of the array
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  */
// function arrayCounter(inputArray, instance) {
//   console.log('BEGIN arrayCounter function');
//   console.log('inputArray is: ' + inputArray);
//   console.log('instance is: ' + instance);
//   var i;
//   var returnData = 0;
//   for (i = 0; i <= inputArray.length(); i++) {
//     if (inputArray[i] === instance) {
//       returnData += 1;
//     }
//   }
//   console.log('returnData is: ' + returnData);
//   console.log('END arrayCounter function');
//   return returnData;
// };