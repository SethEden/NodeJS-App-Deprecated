// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:configurator
 * @requires module:stack
 * @requires module:loggers
 * @requires module:dataBroker
 * @requires module:fileBroker
 * @requires module:arrayParsing
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/n-readlines|n-readlines}
 * @requires {@link https://www.npmjs.com/package/lodash|lodash}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from '../../Executrix/configurator';
import stack from '../../Resources/stack';
import loggers from '../../Executrix/loggers';
import dataBroker from '../../Executrix/dataBroker';
import fileBroker from '../../Executrix/fileBroker';
import * as aryParse from './arrayParsing';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as n from '../../Constants/numeric.constants';
import * as w from '../../Constants/word.constants';
import * as s from '../../Constants/system.constants';
const lineByLine = require('n-readlines');
const _ = require('lodash');
var path = require('path');
var math = require('mathjs');
var chalk = require('chalk');
var D = require('../../../Framework/Resources/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function stringToBoolean
 * @description Converts a string to a boolean value
 * @param {string} inputData A string that contains a truthy or a falsy value and should be converted to a boolean.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A boolean value of either True or False according to the business rule conversion.
 * @author Seth Hollingsead
 * @date 2020/01/30
 * @NOTE We cannot pass in a 1 or 0 to this function and expect it to evaluate as a True or False because:
 * We have another function that is passing strings into the function, and also part of that check to look for data-types is a check to see if a string is a number.
 * If we cause this function to evaluate a 0 or 1 to a boolean, then the integer function would never get a chance to evaluate.
 */
export const stringToBoolean = function(inputData, inputMetaData) {
  let functionName = s.cstringToBoolean;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    switch (inputData.toLowerCase().trim()) {
      case g.ctrue: case g.cTrue: case g.cTRUE: case b.ct: case b.cT: case b.cy: case b.cY: case g.cyes: case g.cYes: case g.cYES: case b.con: case b.cOn: case b.cON:
        returnData = true;
        break;
      case g.cfalse: case g.cFalse: case g.cFALSE: case b.cf: case b.cF: case b.cn: case b.cN: case b.cno: case b.cNo: case b.cNO: case g.coff: case g.cOff: case g.cOFF:
        returnData = false;
        break;
      default:
        returnData = false;
        break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function stringToDataType
 * @description Converts a string to the appropriate data value.
 * So if it's a string value of "3.1415926535897932384626433832" then it will get converted to a float of the same value.
 * If it's a string value of "false" then it will get converted to a boolean of the same value.
 * If it's a string value of "12" then it will get converted to an integer of the same value.
 * If it's a string value of "Happy Birthday" it will get returned the same as the input, no change, since it's just a string.
 * If it's an array of strings, or collection object, it will get returned as the same as the input, no change.
 * @param {string} inputData The string that should be converted to some value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object|string|boolean|integer} Returns a value of whatever type the string should be converted to as appropriate.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const stringToDataType = function(inputData, inputMetaData) {
  let functionName = s.cstringToDataType;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let dataType = determineObjectDataType(inputData);
    switch (dataType) {
      case w.cBoolean:
        returnData = stringToBoolean(inputData);
        break;
      case w.cInteger:
        returnData = parseInt(inputData);
        break;
      case w.cFloat:
        returnData = parseFloat(inputData);
        break;
      case w.cString:
        returnData = inputData;
        break;
      default: // We don't know what kind of object this is, better return it the way it was.
        returnData = inputData;
        break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function determineObjectDataType
 * @description Determines if the contents of a string are actually a Boolean, Integer, Float or String or something else.
 * @param {string} inputData A string that contains some value that we should figure out what kind of data type that data is, Boolean, Integer, Float, String or something else.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that indicates if the data type should be Boolean, Integer, Float or String or something else.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const determineObjectDataType = function(inputData, inputMetaData) {
  let functionName = s.cdetermineObjectDataType;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (isBoolean(inputData) === true) {
      returnData = w.cBoolean;
    } else if (isInteger(inputData) === true) {
      returnData = w.cInteger;
    } else if (isFloat(inputData) === true) {
      returnData = w.cFloat;
    } else if (isString(inputData) === true) {
      returnData = w.cString;
    } else { // Otherwise we cannot figure out what the data type is.
      // No real way to tell the difference between Short, Long and Double.
      // And we don't really need to tell the difference between all those complicated data types.
      // At least not yet!
      returnData = w.cObject;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isBoolean
 * @description Determines if the input string is a boolean type of value, "true", "True", "TRUE", "t", "T", "y", "Y", "yes", "Yes", "YES", "1", "on", "On", "ON" or
 * "false", "False", "FALSE", "f", "F", "n", "N", "no", "No", "NO", "0"
 * @param {string} inputData The string that should be checked if it is a Boolean style value or not, could be some form of "true" or "false".
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a Boolean or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const isBoolean = function(inputData, inputMetaData) {
  let functionName = s.cisBoolean;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    inputData = inputData.toLowerCase().trim();
    if (inputData === g.ctrue || inputData === b.ct || inputData === b.cy || inputData === g.cyes || inputData === b.con ||
    inputData === g.cfalse || inputData === b.cf || inputData === b.cn || inputData === b.cno || inputData === g.coff) {
      returnData = true;
    } else {
      returnData = false;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isInteger
 * @description Determines if the input string is an integer type of value -9007299254740992 to 9007199254740992
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is an integer or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const isInteger = function(inputData, inputMetaData) {
  let functionName = s.cisInteger;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // if (!isNaN(inputData) && inputData.indexOf(b.cDot) === -1) {
    // if (!isNaN(inputData) && inputData.includes(b.cDot) === false) { // Might work for strings, but not numbers.
    // // Technically this works, but we want to make sure we don't attempt to evaluate a string here, and also filter out string decimal points.
    // if (!isNaN(inputData) && inputData % 1 === 0) {
    if (!isNaN(inputData)) {
      if (inputData % 1 === 0) {
        // It's a whole number, aka: integer
        returnData = true;
      } else {
        // Might be a number, but not a whole number.
        returnData = false;
      }
    } else {
      returnData = false;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isFloat
 * @description Determines if the input string is a floating point type of value or not.
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is a floating point number or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const isFloat = function(inputData, inputMetaData) {
  let functionName = s.cisFloat;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (!isNaN(inputData) && inputData.indexOf(b.cDot) !== -1) {
      returnData = true;
    } else {
      returnData = false;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isString
 * @description Determines if the input string is a string or not, by process of elimination, aka if it's not a Boolean, and not an Integer and not a Float then it must be a string.
 * @param {string} inputData The string that should be checked if it is a string and not a Boolean, Integer or Float.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is a string and not a Boolean, Integer or Float; or not (meaning it would be one of those 3 data types, discuised as a string).
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const isString = function(inputData, inputMetaData) {
  let functionName = s.cisString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (isBoolean(inputData) === false && isInteger(inputData) === false && isFloat(inputData) === false && (typeof inputData == 'string' || inputData instanceof String)) {
      returnData = true; // If it's not a Boolean, and not an Integer, and not a Float, then it must be a string, especially given the type of the variable is a string!
    } else {
      returnData = false;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function singleQuoteSwapAfterEquals
 * @description Swaps single quote characters in the middle of the string with double quote characters in the middle of the string.
 * input: 'input[name='emailAddress'][class='username']'
 * output: 'input[name="emailAddress"][class="username"]'
 * @param {string} inputData A string that ontains text with single quotes that should be swapped for double quotes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where single quotes have been exchanged for double quotes.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const singleQuoteSwapAfterEquals = function(inputData, inputMetaData) {
  let functionName = s.csingleQuoteSwapAfterEquals;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // console.log('inputData is: ' + inputData);
    if (inputData.includes(b.cSingleQuote) === true) {
      // First replace all the quotes in the string with double quotes.
      returnData = inputData.replace(/'/g, b.cDoubleQuote);
      // Next replace the first and last double quote with single quote.
      if (returnData.indexOf(b.cDoubleQuote) === 0) {
        returnData = inputData.replace(b.cDoubleQuote, b.cSingleQuote);
      }
      if (returnData.charAt(returnData.length - 1) === b.cDoubleQuote) {
        returnData = returnData.slice(0, -1) + b.cSingleQuote;
      }
    } else {
      returnData = inputData;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function swapForwardSlashToBackSlash
 * @description Swaps all forward slash characters in a string for back slash characters.
 * @param {string} inputData String that might contain some forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all forward slash characters
 * swapped for back slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */
export const swapForwardSlashToBackSlash = function(inputData, inputMetaData) {
  let functionName = s.cswapForwardSlashToBackSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\//g, b.cBackSlash]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function swapBackSlashToForwardSlash
 * @description Swaps all back slash characters in a string for forward slash characters.
 * @param {string} inputData String that might contain some back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all back slash characters
 * swapped for forward slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */
export const swapBackSlashToForwardSlash = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapBackSlashToForwardSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.cswapBackSlashToForwardSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\\/g, b.cForwardSlash]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.swapBackSlashToForwardSlash function');
  return returnData;
};

/**
 * @function swapDoubleForwardSlashToSingleForwardSlash
 * @description Swaps all double forward slash characters for single forward slash characters.
 * @param {string} inputData String that might contain some double forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all double forward slash characters
 * swapped for single forward slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */
export const swapDoubleForwardSlashToSingleForwardSlash = function(inputData, inputMetaData) {
  let functionName = s.cswapDoubleForwardSlashToSingleForwardSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\/\//g, b.cForwardSlash]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function swapDoubleBackSlashToSingleBackSlash
 * @description Swaps all double back slash characters for single back slash characters.
 * @param {string} inputData String that might contain some double back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all double back slash characters
 * swapped for single back slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */
export const swapDoubleBackSlashToSingleBackSlash = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapDoubleBackSlashToSingleBackSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.cswapDoubleBackSlashToSingleBackSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\\\\/g, b.cBackSlash]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.swapDoubleBackSlashToSingleBackSlash function');
  return returnData;
};

/**
 * @function getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param {string} inputData A string that contains an email address value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const getUserNameFromEmail = function(inputData, inputMetaData) {
  let functionName = s.cgetUserNameFromEmail;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cIndexOfTheSpace + b.cAt + s.cSpaceIsColonSpace + inputData.indexOf(b.cAt));
    let returnData = inputData.substr(0, inputData.indexOf(b.cAt));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function replaceSpacesWithPlus
 * @description Replaces all spaces in the input string with plus symbols.
 * @param {string} inputData A string that contains spaces that should be converted to plus symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with space characters converted to plus symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const replaceSpacesWithPlus = function(inputData, inputMetaData) {
  let functionName = s.creplaceSpacesWithPlus;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // returnData = inputData.replace(/ /g, b.cPlus);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/ /g, b.cPlus]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols
 * @param {string} inputData A string that contains colons that should be converted to underscore symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const replaceColonWithUnderscore = function(inputData, inputMetaData) {
  let functionName = s.creplaceColonWithUnderscore;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // returnData == inputData.replace(/:/g, b.cUnderscore);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/:/g, b.cUnderscore]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};



/**
 * @function cleanCarriageReturnFromString
 * @description Cleans carriage return characters from the input data and trims off any leading or trailing spaces.
 * @param {string} inputData The string that should be scrubbed for carriage returns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, but with all carriage return characters removed.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const cleanCarriageReturnFromString = function(inputData, inputMetaData) {
  let functionName = s.ccleanCarriageReturnFromString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.replace(/\s+/g, ' ').trim();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function convertStringToLowerCase
 * @description Converts the input string to the same string but with no upper case letters.
 * @param {string} inputData The string that should have all upper case letters changed to lower case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all lower case letters.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const convertStringToLowerCase = function(inputData, inputMetaData) {
  let functionName = s.cconvertStringToLowerCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.toLowerCase();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function convertStringToUpperCase
 * @description Converts the input string to the same string but with no lower case letters.
 * @param {string} inputData The string that should have all lower case letters changed to upper case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all upper case letters.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const convertStringToUpperCase = function(inputData, inputMetaData) {
  let functionName = s.cconvertStringToUpperCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.toUpperCase();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getFileNameFromPath
 * @description Gets the file name from a string that contains the path and the file name.
 * @param {string} inputData The string that should have all the folders and path removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file name and file extension string without the full path.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const getFileNameFromPath = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.getFileNameFromPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.cgetFileNameFromPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // Clean the path string for any double slashes.
    if (inputData.includes(b.cDoubleForwardSlash)) {
      inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
    }
    if (inputData.includes(b.cForwardSlash)) {
      inputData = swapForwardSlashToBackSlash(inputData, '');
    }
    // console.log('inputData right before processing is: ' + inputData);
    returnData = inputData.split(b.cBackSlash).pop().trim();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getFileExtension
 * @description parses the file name and it may or may not also include the path,
 * but regardless it gets the file extension of the file.
 * @param {string} inputData The string that should contain the file name to which we want to get the file extension.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension such as txt, xml, csv, etc...
 * @author Seth Hollingsead
 * @date 2020/06/08
 */
export const getFileExtension = function(inputData, inputMetaData) {
  let functionName = s.cgetFileExtension;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = path.extname(inputData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function removeDotFromFileExtension
 * @description Removes the Dot from the file extension, such as if the input is ".txt", the return value will just be "txt".
 * @param {string} inputData The string that should contain the file extension that is being modified.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension without the dot prefix.
 * @author Seth Hollingsead
 * @date 2020/06/08
 */
export const removeDotFromFileExtension = function(inputData, inputMetaData) {
  let functionName = s.cremoveDotFromFileExtension;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.substring(1);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function removeFileExtensionFromFileName
 * @description Removes the file extension from the file name if it is there.
 * Otherwise it will remove all the characters after the last period in the file name.
 * @param {string} inputData The string that should have all the characters after the last period in the file name removed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same input string bbut without the file extension or all the characters removed after the last dot.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const removeFileExtensionFromFileName = function(inputData, inputMetaData) {
  let functionName = s.cremoveFileExtensionFromFileName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.replace(/\.[^/.]+$/, '');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param {string} inputData The string that should be parsed for the value on the right side of the assignment operator.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string value of whatever is on the right side of the assignment operator.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const getValueFromAssignmentOperationString = function(inputData, inputMetaData) {
  console.log('s.cgetValueFromAssignmentOperationString' + b.cSpace + s.cisResolvingAs + s.cgetValueFromAssignmentOperationString);
  let functionName = s.cgetValueFromAssignmentOperationString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let parsedString = inputData.split(b.cEqual);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cparsedStringSpaceTerm + b.cSpace + n.c1 + s.cSpaceIsColonSpace + parsedString[0]);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cparsedStringSpaceTerm + b.cSpace + n.c2 + s.cSpaceIsColonSpace + parsedString[1]);
    returnData = parsedString[1].replace(/['"]+/g, '');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function aggregateNumericalDifferenceBetweenTwoStrings
 * @description Determines the delta difference between the two input strings and returns it as a number.
 * @param {string} inputData String 1 to compare.
 * @param {string} inputMetaData String 2 to compare.
 * @return {integer} The delta difference between the two strings, expressed as a number.
 * @NOTE Duplicated from the BusinessRules.Rules.stringParsing function,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const aggregateNumericalDifferenceBetweenTwoStrings = function(inputData, inputMetaData) {
  let functionName = s.caggregateNumericalDifferenceBetweenTwoStrings;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  // Convert the input strings to lower case and clean them up for parsing.
  let string1 = inputData.toLowerCase().replace(/\W/g, '');
  let string2 = inputMetaData.toLowerCase().replace(/\W/g, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cstring1Is + string1);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cstring2Is + string2);

  // Build some arrays of variations on string 2, we will use these for doing the comparisons.
  let variation0 = Array(string2.length + 1).fill(0).map((v, i) => i);
  let variation1 = Array(string2.length + 1).fill(0);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cvariation0ValueIs + variation0);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cvariation1ValueIs + variation1);

  for (let i = 0; i < string1.length; i++) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ciValueIs + i);
    variation1[0] = i + 1;
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cvariation0ValueIs + variation0);
    for (let j = 0; j < string2.length; j++) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cjValueIs + j);
      let deletionCost = variation0[j + 1] + 1;
      let insertionCost = variation1[j] + 1;
      let substitutionCost;
      if (string1[i] === string2[j]) {
        substitutionCost = variation0[j];
      } else {
        substitutionCost = variation0[j] + 1;
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdeletionCostIs + deletionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinsertionCostIs + insertionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.csubstitutionCostIs + substitutionCost);
      variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cvariation1ValueIs + variation1);
    }
    let temp = variation1;
    variation1 = variation0;
    variation0 = temp;
  }
  returnData = variation0[string2.length];
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function countCamelCaseWords
 * @description Takes a string in camelCase and returns the number of words that it contains based on camel case rules.
 * @param {string} inputData String to count words from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of camel case words found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 * @NOTE Based on the above implementation for the business rule/function aryParse.convertCamelCaseStringToArray
 */
export const countCamelCaseWords = function(inputData, inputMetaData) {
  let functionName = s.ccountCamelCaseWords;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let caps = [];
    for (let i = 1; i < inputData.length; i++) {
      if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
    }
    returnData = caps.length;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainAcronym
 * @description Scans a string and determines if there are 2 or more immediately adjacent upper-case characters in the string.
 * Example: nodeJS where JS is an acronym for JavaScript.
 * @param {string} inputData The string that should be scanned to determine if it contains an acronym.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string contains an acronym.
 * @author Seth Hollingsead
 * @date 2021/01/28
 */
export const doesStringContainAcronym = function(inputData, inputMetaData) {
  let functionName = s.cdoesStringContainAcronym;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let lastCharacterWasUpperCase = false;
  let caps = [];
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      // If the last character was upper case and the current character is upper case then we have found an acronym and we can exit the loop.
      if (lastCharacterWasUpperCase === true && g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
      if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        lastCharacterWasUpperCase = true;
      } else {
        lastCharacterWasUpperCase = false;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function countDelimiterInString
 * @description Takes a string and returns the number of specified delimiters it contains.
 * @param {string} inputData String to count delimiters from.
 * @param {string} inputMetaData The delimiter that should be used when counting from the input string.
 * @return {integer} The number of delimiters found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 * @NOTE: https://stackoverflow.com/questions/35849174/count-spaces-in-a-string
 */
export const countDelimiterInString = function(inputData, inputMetaData) {
  let functionName = s.ccountDelimiterInString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData && inputMetaData) {
    returnData = (inputData.split(inputMetaData).length - 1);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function determineWordDelimiter
 * @description Determines what delimiter should be used to break a string up into words if possible.
 * @param {string} inputData The string that should be examined to determine what delimiter should be used to break it up into words.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The delimiter that should be used, or if camelCase then the function will return the string "CamelCase".
 * @author Seth Hollingsead
 * @date 2021/01/28
 */
export const determineWordDelimiter = function(inputData, inputMetaData) {
  let functionName = s.cdetermineWordDelimiter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let camelCaseWordCount = countCamelCaseWords(inputData, '');
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccamelCaseWordCountIs + camelCaseWordCount);
    let containsAcronym = doesStringContainAcronym(inputData, '');
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccontainsAcronymIs + containsAcronym);
    let spacesCount = countDelimiterInString(inputData, b.cSpace);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cspacesCountIs + spacesCount);
    let periodCount = countDelimiterInString(inputData, b.cDot);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cperiodCountIs + periodCount);
    let dashCount = countDelimiterInString(inputData, b.cDash);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdashCountIs + dashCount);
    let underscoreCount = countDelimiterInString(inputData, b.cUnderscore);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cunderscoreCountIs + underscoreCount);
    if (camelCaseWordCount > 0 && containsAcronym === false && spacesCount === 0 && periodCount === 0 && dashCount === 0 && underscoreCount === 0) {
      returnData = s.cCamelCase;
    // We haven't hit the case yet where we need to differenciate between all these extra cases, and there are several of them.
    // We could have multiple acronyms in a word, or in multiple words that are camelCase.
    // Each of these could be a really complex special case. If we get to that point we will handle those cases on a case by case basis to improve the algorithm.
    // } else if (camelCaseWordCount > 1 && containsAcronym === false)
    } else if (spacesCount > 0 && periodCount === 0 && dashCount === 0 && underscoreCount === 0) {
      returnData = b.cSpace;
    } else if (spacesCount === 0 && periodCount > 0 && dashCount === 0 && underscoreCount === 0) {
      returnData = b.cDot;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount > 0 && underscoreCount === 0) {
      returnData = b.cDash;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && underscoreCount > 0) {
      returnData = b.cUnderscore;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDetermineWordDelimiterMessage1 + s.cDetermineWordDelimiterMessage2 +
        s.cDetermineWordDelimiterMessage3 + s.cDetermineWordDelimiterMessage4);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getWordCountInString
 * @description Gets the number of words in a string, it expects words to be delimited by either camel-case, spaces, period, dash or underscore.
 * @param {string} inputData The string that words should be counted from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of words that were found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 */
export const getWordCountInString = function(inputData, inputMetaData) {
  let functionName = s.cgetWordCountInString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let wordDelimiter = determineWordDelimiter(inputData, inputMetaData);
    if (wordDelimiter === s.cCamelCase) {
      returnData = countCamelCaseWords(inputData, '');
    } else if (wordDelimiter != '') {
      returnData = inputData.split(wordDelimiter).length;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cGetWordCountInStringMessage1 + s.cGetWordCountInStringMessage2 + s.cGetWordCountInStringMessage3);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainUpperCaseCharacter
 * @description Determines if the input string contains at least one upper case character.
 * @param {string} inputData The string that should be checked for upper case characters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string contains at least one upper case character or more.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */
export const doesStringContainUpperCaseCharacter = function(inputData, inputMetaData) {
  let functionName = s.cdoesStringContainUpperCaseCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainLowerCaseCharacter
 * @description Determines if the input string contains at least one lower case character.
 * @param {string} inputData The string that should be checked for lower case characters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string contains at least one lower case character or more.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */
export const doesStringContainLowerCaseCharacter = function(inputData, inputMetaData) {
  let functionName = s.cdoesStringContainLowerCaseCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (g.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isFirstCharacterLowerCase
 * @description Determines if the first character of the string is a lower case character.
 * @param {string} inputData The string that should be checked to determine if the first character is lower case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is a lower case character or not.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */
export const isFirstCharacterLowerCase = function(inputData, inputMetaData) {
  let functionName = s.cisFirstCharacterLowerCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = g.cLowerCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isFirstCharacterUpperCase
 * @description Determines if the first character of the string is an upper case character.
 * @param {string} inputData The string that should be checked to determine if the first character is upper case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is an upper case character or not.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */
export const isFirstCharacterUpperCase = function(inputData, inputMetaData) {
  let functionName = s.cisFirstCharacterUpperCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isStringList
 * @description Determines if the input string is a list or not.
 * @param {string} inputData The string that should be checked if it is a list or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a list or not a list.
 * @author Seth Hollingsead
 * @date 2021/01/19
 */
export const isStringList = function(inputData, inputMetaData) {
  let functionName = s.cisStringList;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
    if (inputData.includes(primaryCommandDelimiter) === true ||
    inputData.includes(secondaryCommandDelimiter) === true ||
    inputData.includes(tertiaryCommandDelimiter) === true) {
      returnData = true;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isStringCamelCase
 * @description Determines if an input string is a camel case string or not.
 * @param {string} inputData The string that should be for camel case qualification.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is camel case or not.
 * @author Seth Hollingsead
 * @date 2021/01/15
 * @NOTE Even if we have an all upper case acronym at the end of the came case string,
 * The string itself is still considered camel case.
 * Valid examples:
 * myParsedXML
 * fireflyWonder1996
 * wonderWoman1984
 * covidMedicalCase
 * aBc
 */
export const isStringCamelCase = function(inputData, inputMetaData) {
  let functionName = s.cisStringCamelCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let foundFirstCapitalLetter = false;
    // First make sure the string meets the basic qualifications of a camel case string.
    // 1. Does not contain underscore or dash word seperators.
    // 2. Contains at least 1 lower case letter or more.
    // 3. Contains at least 1 upper case letter or more.
    // 4. Has a lower case or upper case first letter of the first word.
    if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&
    doesStringContainLowerCaseCharacter(inputData, '') &&
    (isFirstCharacterLowerCase(inputData, '') || isFirstCharacterUpperCase(inputData, ''))) {
      for (let i = 1; i < inputData.length; i++) {
        // Now check for the final qualification:
        // 3. Ensure that upper case letters are seperated by lower case letters
        // (numbers also allowed, but there should be at least some lower case letters)
        // NOTE: This for-loop is how we iterate over the characters of the string.

        // First we need to look for the first upper case letter.
        if (foundFirstCapitalLetter === false) {
          if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            // Found an upper case letter, ensure the next letter is lower case.
            foundFirstCapitalLetter = true;
          }
        } else if (foundFirstCapitalLetter === true) {
          if (g.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            returnData = true;
            break; // Sufficent evidence to prove this is a camel case string.
          }
        }
      } // End of the for-loop iterating over the characters in the string.
    } // End-if conditions on upperCase & lowerCase.
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function mapWordToCamelCase
 * @description Takes a String key and an indexed String value and maps the word to an upper case first letter word.
 * @param {string} inputData The string key/value that should be converted to a camel case word.
 * @param {string} inputMetaData The string index for the map to the value that should be used.
 * @return {string} A String where the word has been converted into a camel case word.
 * @author Seth Hollingsead
 * @data 2020/02/15
 */
export const mapWordToCamelCaseWord = function(inputData, inputMetaData) {
  let functionName = s.cmapWordToCamelCaseWord;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData.replace(/^./, character => character.toUpperCase());
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function simplifyAndConsolidateString
 * @description Takes a string, and returns a version of it converted to lowercase, with all digits and symbols and whitespace removed.
 * @param {string} inputData The string that should be simplified and consolidated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that has been simplified and consolidated by converting to lower case, removing all digits, symbols and white space.
 * @author Seth Hollingsead
 * @date 2020/02/10
 * @NOTE I think this function is not completely working as expected, probably something to do with that regular expression.
 * Input was: 11UpberDriver321CodeClearance0x#0000FF-akaBlue
 * Output was: 11upberdriver321codeclearance0x0000ffakablue
 * As you can see there are still some numbers coming through.
 * Might need to revisit this one when time allows, and if there is ever a business need again.
 */
export const simplifyAndConsolidateString = function(inputData, inputMetaData) {
  let functionName = s.csimplifyAndConsolidateString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param {string} inputData The first string to be compared.
 * @param {string} inputMetaData The second string to be compared.
 * @return {boolean} A Boolean value to indicate if the strings are virtually idential or not.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const compareSimplifiedAndConsolidatedStrings = function(inputData, inputMetaData) {
  let functionName = s.ccompareSimplifiedAndConsolidatedStrings;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    returnData = simplifyAndConsolidateString(inputData, '') === simplifyAndConsolidateString(inputMetaData, '');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param {string} inputData The first filename and path that should be used in making the file name comparison.
 * @param {string} inputMetaData The second filename and path that should be used in making the file name comparison.
 * @return {boolean} A Boolean value to indicate if the file names are equavalent.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const ascertainMatchingFilenames = function(inputData, inputMetaData) {
  let functionName = s.cascertainMatchingFilenames;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    if (path.basename(inputData) === path.basename(inputMetaData)) {
      // Filenames match
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cFilenamesMatch);
      returnData = true;
    } else {
      // Filenames do not match
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cFilenamesDoNotMatch);
      returnData = false;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData The path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2020/07/28
 */
export const validateConstantsDataValidation = function(inputData, inputMetaData) {
  let functionName = s.cvalidateConstantsDataValidation;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false; // Set it to false and we will prove if it should be true.
  let foundAFailure = false;
  if (inputData && inputMetaData) {
    const liner = new lineByLine(inputData);
    let line;

    while (line = liner.next()) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, line.toString(g.cascii));
      let lineInCode = line.toString(g.cascii);
      let foundConstant = false;
      if (lineInCode.includes(s.cexportconst) === true) {
        let lineArray = lineInCode.split(b.cSpace);
        // lineArray[2] is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.clineArray2Is + lineArray[2]);
        foundConstant = validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
        let qualifiedConstantsFilename = getFileNameFromPath(inputData, '');
        if (foundConstant === true) {
          if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationPassMessages) === true) {
            let passMessage = w.cPASS + b.cColon + b.cSpace + lineArray[2] + b.cSpace + w.cPASS;
            passMessage = chalk.rgb(0,0,0)(passMessage);
            passMessage = chalk.bgRgb(0,255,0)(passMessage);
            console.log(qualifiedConstantsFilename + b.cColon + b.cSpace + passMessage);
          }
        } else {
          if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationFailMessages) === true) {
            let failMessage = w.cFAIL + b.cColon + b.cSpace + lineArray[2] + b.cSpace + w.cFAIL;
            failMessage = chalk.rgb(0,0,0)(failMessage);
            failMessage = chalk.bgRgb(255,0,0)(failMessage);
            let qualifiedConstantsPrefix = determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
            console.log(qualifiedConstantsFilename + b.cColon + b.cSpace + failMessage);
            // loggers.consoleLog(baseFileName + b.cDot + functionName, w.cFAIL + b.cSpace + lineArray[2] + b.cSpace + w.cFAIL);
            // TODO: Make sure we craft a message for what the constant should be added to the constants validation data file.
            let suggestedLineOfCode = determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
            if (suggestedLineOfCode !== '') {
              suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
              suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
              // Suggested line of code is:
              console.log(s.cSuggestedLineOfCodeIs + suggestedLineOfCode);
            }
          }
          foundAFailure = true;
        }
      }
    }
  }
  if (foundAFailure === false) {
    returnData = true;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Takes the filename to a constants file and determines
 * the standard prefix that should be used in the code to referance that constants file.
 * @param {string} inputData The filename of the constants file or
 * the full path and file name of the constants file. (Should work just the same with either one)
 * @param {string} inputMetaData Not used for this one.
 * @return {string} A single character string that represents the standard character used in the code to referance a constants file.
 * @author Seth Hollingsead
 * @date 2020/12/18
 */
export const determineConstantsContextQualifiedPrefix = function(inputData, inputMetaData) {
  let functionName = s.cdetermineConstantsContextQualifiedPrefix;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    if (inputData.includes(w.cbasic) === true) {
      returnData = b.cb;
    } else if (inputData.includes(w.ccolor) === true) {
      returnData = p.ccolr;
    } else if (inputData.includes(w.celement) === true) {
      returnData = b.ce;
    } else if (inputData.includes(w.cgeneric) === true) {
      returnData = b.cg;
    } else if (inputData.includes(w.cisotope) === true) {
      returnData = b.ci;
    } else if (inputData.includes(w.cnumeric) === true) {
      returnData = b.cn;
    } else if (inputData.includes(w.cphonics) === true) {
      returnData = b.cp;
    } else if (inputData.includes(w.cshape) === true) {
      returnData = p.cshp;
    } else if (inputData.includes(w.csystem) === true) {
      returnData = b.cs;
    } else if (inputData.includes(w.cunits) === true) {
      returnData = b.cu;
    } else if (inputData.includes(w.cword) === true) {
      returnData = b.cw;
    } else {
      // ERROR: Unknown constant file.
      console.log(s.cErrorUnknownConstantFile);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Takes the name of the missing constant and determines a suggested line of code to add to the appropriate constants validation file.
 * This will make it really easy for developers to maintain the constants validation system.
 * @param {string} inputData The name of the constant that is missing and should have a line of code generated for it.
 * @param {string} inputMetaData The prefix used to referance the constants file in the code.
 * @return {string} The suggested line of code that should be added to the appropriate constants validation code file.
 * @author Seth Hollingsead
 * @date 2020/07/29
 */
export const determineSuggestedConstantsValidationLineOfCode = function(inputData, inputMetaData) {
  let functionName = s.cdetermineSuggestedConstantsValidationLineOfCode;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    returnData = inputData;
    // Input: cZZTopIntentionalFailure
    // Output: {Name: 'cZZTopIntentionalFailure', Actual: w.cZZTopIntentionalFailure, Expected: 'ZZTopIntentionalFailure'}
    if (inputData.charAt(0) === b.cc) {
      let literalValue = inputData.substr(1);
      // `Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
      returnData = b.cOpenCurlyBrace + w.cName + b.cColon + b.cSpace + b.cSingleQuote + inputData + b.cSingleQuote + b.cComa + b.cSpace + w.cActual + b.cColon + b.cSpace + inputMetaData +
      b.cDot + inputData + b.cComa + b.cSpace + w.cExpected + b.cColon + b.cSpace + b.cSingleQuote + literalValue + b.cSingleQuote + b.cCloseCurlyBrace;
    } else {
      // ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.
      console.log(s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 +
        s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 +
        s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 +
        s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 +
        s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 +
        s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constant definition can be found, or not found.
 * @param {string} inputData The constant definition that should be searched for.
 * @param {string} inputMetaData  The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2020/07/28
 */
export const validateConstantsDataValidationLineItemName = function(inputData, inputMetaData) {
  let functionName = s.cvalidateConstantsDataValidationLineItemName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < D[s.cConstantsValidationData][inputMetaData].length; i++) {
      let validationLineItem = D[s.cConstantsValidationData][inputMetaData][i];
      if (validationLineItem) {
        if (inputData === validationLineItem.Name) {
          returnData = true;
          break;
        }
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesConstantExist
 * @description Walks through all of the constants validation files and
 * checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */
export const doesConstantExist = function(inputData, inputMetaData) {
  let functionName = s.cdoesConstantExist;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[s.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = true;
          break loop1;
        }
      } // for-loop j-th iterator.
    } // for-loop i-th iterator.
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getConstantType
 * @description Determines what constant library a particular constant is defined in.
 * (This will aid developers who are trying to understand & develop under this complicated constants system.)
 * NOTE: Just because a constant is found we do not break the loop,
 * but this function will report back all constants libraries where a particular constant would be defined.
 * Passing in a True to the inputMetaData will cause the function to exit upon first discovered match.
 * @param {string} inputData The string value that should be searched in all of the constants libraries.
 * @param {boolean} inputMetaData True or False to indicate if the function should exit on first discovery or continue to discover all possible matches.
 * @return {string} A list of constants libraries where the constant was found to be defined in.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */
export const getConstantType = function(inputData, inputMetaData) {
  let functionName = s.cgetConstantType;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[s.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          if (returnData === '') {
            returnData = constantTypeKey;
            // NOTE: This is our first discovered match. Check the inputMetaData to see if we should exit or continue searching?
            if (inputMetaData === true) {
              // We are doing it this way so we can re-use this function as part of the optimized constants fulfillment system algorithm.
              break loop1;
            }
          } else {
            returnData = returnData + b.cComa + constantTypeKey;
          }
        }
      } // for-loop j-th iterator.
    } // for-loop i-th iterator.
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getConstantActualValue
 * @description Determines the actual value of the named constant given the constant type.
 * @param {string} inputData The name of the constant we are looking for to get the actual value of the constant.
 * @param {string} inputMetaData (OPTIONAL) The type or library where the constant should be found.
 * @return {string} The actual value of the string.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */
export const getConstantActualValue = function(inputData, inputMetaData) {
  let functionName = s.cgetConstantActualValue;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (isConstantTypeValid(inputMetaData, '') === true) {
      let constantTypeValues1 = D[s.cConstantsValidationData][inputMetaData];
      // 1 constantTypeValues is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues1));
      let constantsKeys1 = Object.keys(constantTypeValues1);
      // 1 constantsKeys is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantsKeysIs + JSON.stringify(constantsKeys1));
loop1:
      for (let i = 0; i < constantsKeys1.length; i++) {
        let constantKey1 = constantsKeys1[i];
        // 1 constantKey is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantKeyIs + JSON.stringify(constantKey1));
        let constantActualValue1 = constantTypeValues1[constantKey1];
        // 1 constantActualValue is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantActualValueIs + JSON.stringify(constantActualValue1));
        if (inputData === constantActualValue1.Name) {
          returnData = constantActualValue1.Actual;
        }
      } // for-loop j-th iterator.
    } else {
      let constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]);
      // constantsTypesKeys is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop2:
      for (let j = 0; j < constantsTypesKeys.length; j++) {
        let constantTypeKey = constantsTypesKeys[j];
        // constantTypeKey is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
        let constantTypeValues2 = D[s.cConstantsValidationData][constantTypeKey];
        // 2 constantTypeValues is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, n.c2 + b.cSpace + s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues2));
        let constantsKeys2 = Object.keys(constantTypeValues2);
        // 2 constantsKeys is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, n.c2 + b.cSpace + s.cconstantsKeysIs + JSON.stringify(constantsKeys2));
loop3:
        for (let k = 0; k < constantsKeys2.length; k++) {
          let constantKey2 = constantsKeys2[k];
          // 2 constantKey is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, n.c2 + b.cSpace + s.cconstantKeyIs + JSON.stringify(constantKey2));
          let constantActualValue1 = constantTypeValues2[constantKey2];
          // 1 constantActualValue is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantActualValueIs + JSON.stringify(constantActualValue1));
          if (inputData === constantActualValue1.Name) {
            returnData = constantActualValue1.Actual;
          }
        } // for-loop j-th iterator.
      } // for-loop i-th iterator.
    } // else clause for the case that inputMetaData did not match a valid constant type in the system.
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getConstantName
 * @description Gets the constant name given the constant value, or what the constant should resolve as. Can only return the first instance.
 * @param {string} inputData The constant string value that should be used when getting the constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant: eg: cSystem
 * @author Seth Hollingsead
 * @date 2021/01/26
 */
export const getConstantName = function(inputData, inputMetaData) {
  let functionName = s.cgetConstantName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[s.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = constantActualValue.Name;
          break loop1;
        }
      } // for-loop j-th iterator.
    } // for-loop i-th iterator.
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function findConstantName
 * @description Looks through a string and tries to weed out a constant name.
 * @param {string} inputData The string that should be searched for a constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant that was found.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */
export const findConstantName = function(inputData, inputMetaData) {
  let functionName = s.cfindConstantName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.includes(b.cDot)) {
      returnData = inputData.substr(inputData.lastIndexOf(b.cDot) + 1, inputData.length);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isConstantTypeValid
 * @description Determines if a string is a valid constant type/library or not.
 * @param {string} inputData The string that should be validated if it is a valid constant type or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is a valid constant type/library that exists within the system.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */
export const isConstantTypeValid = function(inputData, inputMetaData) {
  let functionName = s.cisConstantTypeValid;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    switch (inputData) {
      case s.cBasicConstantsValidation:
      case s.cColorConstantsValidation:
      case s.cElementConstantsValidation:
      case s.cGenericConstantsValidation:
      case s.cIsotopeConstantsValidation:
      case s.cNumericConstantsValidation:
      case s.cPhonicsConstantsValidation:
      case s.cShapeConstantsValidation:
      case s.cSystemConstantsValidation:
      case s.cUnitsConstantsValidation:
      case s.cWordConstantsValidation:
        returnData = true;
        break;
      default:
        returnData = false;
        break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Converts the constant type to a constant prefix so it can be used to assist with defining an optimized constant definition.
 * @param {string} inputData The constant type that should be used when converting to a constant prefix.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The appropriate constant prefix.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */
export const convertConstantTypeToConstantPrefix = function(inputData, inputMetaData) {
  let functionName = s.cconvertConstantTypeToConstantPrefix;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    switch (inputData) {
      case s.cBasicConstantsValidation:
        returnData = b.cb + b.cDot;
        break;
      case s.cColorConstantsValidation:
        returnData = s.ccolr + b.cDot;
        break;
      case s.cElementConstantsValidation:
        returnData = b.ce + b.cDot;
        break;
      case s.cGenericConstantsValidation:
        returnData = b.cg + b.cDot;
        break;
      case s.cIsotopeConstantsValidation:
        returnData = b.ci + b.cDot;
        break;
      case s.cNumericConstantsValidation:
        returnData = b.cn + b.cDot;
        break;
      case s.cPhonicsConstantsValidation:
        returnData = b.cp + b.cDot;
        break;
      case s.cShapeConstantsValidation:
        returnData = s.cshp + b.cDot;
        break;
      case s.cSystemConstantsValidation:
        returnData = b.cs + b.cDot;
        break;
      case s.cUnitsConstantsValidation:
        returnData = b.cu + b.cDot;
        break;
      case s.cWordConstantsValidation:
        returnData = b.cw + b.cDot;
        break;
      default:
        returnData = false;
        break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Determines what is the most optimized way to define a string using existing constant strings.
 * @param {string} inputData The string that should be determined or find a constant to fulfill part of the string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A constant that represents part of the input string.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */
export const constantsOptimizedFulfillmentSystem = function(inputData, inputMetaData) {
  let functionName = s.cconstantsOptimizedFulfillmentSystem;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantType = '';
  let constantName = '';
  if (inputData) {
    if (doesConstantExist(inputData, '') === false) {
      returnData = constantsOptimizedFulfillmentSystem(inputData.substring(0, inputData.length - 1), inputMetaData);
    } else {
      constantType = getConstantType(inputData, true);
      constantName = getConstantName(inputData, '');
      let constantPrefix = convertConstantTypeToConstantPrefix(constantType, '');
      returnData = constantPrefix + constantName;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function constantsFulfillmentSystem
 * @description Determines what is the most optimized way to define a new constant using existing constant strings.
 * @param {string} inputData The constant to be defined/fulfilled.
 * @param {string} inputMetaData The original user-defined constant to be fulfilled,
 * so the recursive algorithm can continue processing the rest of the string, after a first match is found.
 * @return {string} The fully optimized definition for the new constant.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */
export const constantsFulfillmentSystem = function(inputData, inputMetaData) {
  let functionName = s.cconstantsFulfillmentSystem;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantName = '';
  let constantType = '';
  if (inputData) {
    returnData = constantsOptimizedFulfillmentSystem(inputData, '');
    // We found the first part of the string, now lets continue processing the rest of the string!
    // First determine how many characters are being returned so we can determine what portion of the string we need to continue processing with.
    constantName = findConstantName(returnData, '');
    // constantName is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantNameIs + constantName);
    let constantValue = getConstantActualValue(constantName, '');
    // constantValue is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantValueIs + constantValue);

    let deltaLength = inputData.length - constantValue.length;
    // deltaLength is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdeltaLengthIs + deltaLength);
    if (deltaLength != 0) {
      let recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length);
      // recursiveSubString is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.crecursiveSubStringIs + recursiveSubString);
      returnData = returnData + b.cSpace + b.cPlus + b.cSpace + constantsFulfillmentSystem(recursiveSubString, inputData);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data specified by the input parameter and validates the content.
 * @param {string} inputData The name of the data-hive that should contain all of the validation data that should be used to execute the validation procedures.
 * @param {string} inputMetaData Not used for this function.
 * @return {boolean} True or False to indicate if the validation passed for the entire data hive or if it did not pass.
 * @author Seth Hollingsead
 * @date 2020/07/29
 */
export const validateConstantsDataValues = function(inputData, inputMetaData) {
  let functionName = s.cvalidateConstantsDataValues;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let passMessage = '';
  if (inputData) {
    for (let i = 0; i < D[s.cConstantsValidationData][inputData].length; i++) {
      passMessage = '';
      let validationLineItem = D[s.cConstantsValidationData][inputData][i];
      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = w.cPASS + b.cSpace + b.cDoubleDash + b.cSpace + inputData + b.cSpace + w.cActual + b.cColon + b.cSpace +
              validationLineItem.Actual + b.cComa + b.cSpace + w.cExpected + b.cColon + b.cSpace + validationLineItem.Expected + b.cbSpace + b.cDoubleDash + b.cSpace + w.cPASS;
            passMessage = chalk.rgb(0,0,0)(passMessage);
            passMessage = chalk.bgRgb(0,255,0)(passMessage);
            console.log(passMessage);
          }
        } else {
          returnData = false;
          if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = w.cFAIL + b.cSpace + b.cDoubleDash + b.cSpace + inputData + b.cSpace + w.cActual + b.cColon + b.cSpace +
              validationLineItem.Actual + b.cComa + b.cSpace + w.cExpected + b.cColon + b.cSpace + validationLineItem.Expected + b.cSpace + b.cDoubleDash + b.cSpace + w.cFAIL;
            passMessage = chalk.rgb(0,0,0)(passMessage);
            passMessage = chalk.bgRgb(255,0,0)(passMessage);
            console.log(passMessage);
          }
        }
      } else {
        // `FAIL -- ${inputData} -- FAIL`
        passMessage = w.cFAIL + b.cSpace + b.cDoubleDash + b.cSpace + inputData + b.cSpace + b.cDoubleDash + b.cSpace + w.cFAIL;
        passMessage = chalk.rgb(0,0,0)(passMessage);
        passMessage = chalk.bgRgb(255,0,0)(passMessage);
        console.log(passMessage);
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isValidCommandNameString
 * @description Determines if the command name is a valid command name or not.
 * @NOTE Not in the sense that it is checking if the command name exists in the system or not,
 * but is it formatted properly enough to be considered as a command name.
 * @param {string} inputData The string that should be evaluated if it is sufficently formatted such that it could qualify as a command name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is sufficently formatted to be considered as a command name in the system.
 * @author Seth Hollingsead
 * @date 2021/01/22
 */
export const isValidCommandNameString = function(inputData, inputMetaData) {
  let functionName = s.cisValidCommandNameString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    // NOTE: The below call to convert the string to a camel-case array doesn't garantee that the string is actually camel-case.
    // It could actually be a single word, but of course we want to make sure it's more than 3 characters long.
    // Less than that, shouldn't really be considered a valid word, but could be appropriate as a command alias/abreviation.
    if (inputData.length > 3) {
      let camelCaseArray = aryParse.convertCamelCaseStringToArray(inputData);
      if (camelCaseArray.length === 1) {
        if (isFirstCharacterLowerCase(inputData) === true) { returnData = true; }
      } else if (camelCaseArray.length > 1) {
        if (isStringCamelCase(inputData, '') === true) { returnData = true; }
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isConstantValid
 * @description Determines if the user entered some valid input constant string or not. User must have entered more than 4 characters.
 * @param {string} inputData The value of the constant as a string.
 * @param {string} inputMetaData Not used for this buisness rule.
 * @return {boolean} True or False to indicate if the user entered a valid constant or not.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */
export const isConstantValid = function(inputData, inputMetaData) {
  let functionName = s.cisConstantValid;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function countDuplicateCommandAliases
 * @description Counts the number of command aliases that match the input command alias.
 * @param {string} inputData The command alias that should be have duplicates counted.
 * @param {object} inputMetaData The data that contains all of the commands and command aliases,
 * we should use this to search for duplicate command aliases.
 * @return {integer} The count of command aliases that match the input command alias.
 * @author Seth Hollingsead
 * @date 2021/01/11
 */
export const countDuplicateCommandAliases = function(inputData, inputMetaData) {
  let functionName = s.ccountDuplicateCommandAliases;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = 0;
  if (inputData && inputMetaData) {
loop1:
    for (let i = 0; i < inputMetaData.length; i++) {
      // BEGIN i-th loop:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithLoop + i);
      let currentCommand = inputMetaData[i];
      // currentCommand is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentCommandIs + JSON.stringify(currentCommand));
      let aliasList = currentCommand[w.cAliases];
      // aliasList is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.caliasListIs + aliasList);
      let arrayOfAliases = aliasList.split(b.cComa);
loop2:
      for (let j = 0; j < arrayOfAliases.length; j++) {
        // BEGIN j-th loop:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_jthLoop + i);
        let currentAlias = arrayOfAliases[j];
        // currentAlias is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentAliasIs + currentAlias);
        if (currentAlias === inputData) {
          returnData = returnData + 1;
        }
        // duplicateAliasCount is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cduplicateAliasCountIs + returnData);
        // END j-th loop:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_jthLoop + i);
      }
      // END i-th loop:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithLoop + i);
    }
  }
  if (returnData > 1) {
    // duplicateAliasCount is:
    let duplicateAliasCountMessage = s.cduplicateAliasCountIs + returnData;
    duplicateAliasCountMessage = chalk.rgb(0,0,0)(duplicateAliasCountMessage);
    duplicateAliasCountMessage = chalk.bgRgb(255,0,0)(duplicateAliasCountMessage);
    console.log(duplicateAliasCountMessage);
    // duplicate command alias is:
    let duplicateAliasCommandMessage = s.cduplicateCommandAliasIs + inputData;
    duplicateAliasCommandMessage = chalk.rgb(0,0,0)(duplicateAliasCommandMessage);
    duplicateAliasCommandMessage = chalk.bgRgb(255,0,0)(duplicateAliasCommandMessage);
    console.log(duplicateAliasCommandMessage);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

// ******************************************************
// The following functions are more domain specific
// ******************************************************

/**
 * @function getDataCatagoryFromDataContextName
 * @description Gets the data catagory from the context name, E.g. Input: Page_ProjectList, data catagory is 'Page'.
 * @param {string} inputData The data context name, which should also contain the data catagory seperated by underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory, such as Page or Test.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const getDataCatagoryFromDataContextName = function(inputData, inputMetaData) {
  let functionName = s.cgetDataCatagoryFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagory = inputData.split(b.cUnderscore);
    returnData = dataCatagory[0];
    // Data Catagory should be:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDataCatagoryShouldBe + dataCatagory[0]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function getDataCatagoryDetailNameFromDataContextName
 * @description Gets the data catagory detail name from the context name, E.g. Input: Page_ProjectList, data catagory is 'ProjectList'.
 * @param {string} inputData The data context name, which should also contain the data catagory and data catagory detail name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory detail name, such as ProjectDetails or ProjectList.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const getDataCatagoryDetailNameFromDataContextName = function(inputData, inputMetaData) {
  let functionName = s.cgetDataCatagoryDetailNameFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryDetailName = inputData.split(b.cUnderscore);
    returnData = dataCatagoryDetailName[1];
    // Data Catagory Detail Name should be:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDataCatagoryDetailNameShouldBe + dataCatagoryDetailName[1]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function getKeywordNameFromDataContextName
 * @description Gets the keyword name from the context name, E.g. Input: Keywords_ProjectDetails_DeleteEntireProject, keyword is: 'DeleteEntireProject'.
 * @param {string} inputData The data context name, which should also contain the data catagory and data catagory detail name and keyword name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The keyword name, such as DeleteEntireProject or EditProjectInfoClick.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const getKeywordNameFromDataContextName = function(inputData, inputMetaData) {
  let functionName = s.cgetKeywordNameFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryKeywordName = inputData.split(b.cUnderscore);
    returnData = dataCatagoryKeywordName[2];
    // Keyword Name should be:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cKeywordNameShouldBe + dataCatagoryKeywordName[2]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function parseSystemRootPath
 * @description Parses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the "AppName" part of the path
 * and will parse that out to determine where on the hard drive this "AppName" folder is installed at.
 * @NOTE: The "AppName" is derived from the configuration setting called "ApplicationName"
 * which should have been set by the system when it was loaded.
 * @param {string} inputData The root path as defined by calling path.resolve(__dirname);
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string with the path up to the application folder,
 * where ever that is installed on the local system executing the tests.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */
export const parseSystemRootPath = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.parseSystemRootPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.cparseSystemRootPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let applicationName = configurator.getConfigurationSetting(s.cApplicationName);
    let pathElements = inputData.split(b.cBackSlash);
    loop1:
      for (let i = 0; i < pathElements.length; i++) {
        // console.log('BEGIN iteration i: ' + i);
        // BEGIN i-th iteration:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);
        let pathElement = pathElements[i];
        // console.log('pathElement is ' + pathElement);
        // pathElement is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cpathElementIs + pathElement);
        if (i === 0) {
          // console.log('case: i = 0');
          // case: i = 0
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccaseIEqual0);
          returnData = pathElement;
        } else if (pathElement === applicationName) {
          // console.log('case: pathElement = ' + s.cCAFfeinated);
          // case: pathElement =
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccasePathElementEqual + applicationName);
          returnData = returnData + b.cBackSlash + pathElement + b.cBackSlash;
          break loop1;
        } else {
          // console.log('case else');
          // case else
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccaseElse);
          returnData = returnData + b.cBackSlash + pathElement;
        }
        // console.log('returnData so far is: ' + returnData);
        // console.log('END iteration i: ' + i);
        // returnData so far is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataSoFarIs + returnData);
        // END i-th iteration:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
      }
    returnData = swapDoubleBackSlashToSingleBackSlash(returnData, '');
    returnData = swapBackSlashToForwardSlash(returnData, '');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.parseSystemRootPath function');
  return returnData;
};

/**
 * @function replaceDoublePercentWithMessage
 * @description Parses the input string and replaces any instance of a double percentage sign
 * with the input Meta Data string.
 * @param {string} inputData The string that might contain the double percentage signs.
 * @param {string} inputMetaData The string that should replace the double percentage signs.
 * @return {string} The modified string with the message inserted.
 * @author Seth Hollingsead
 * @date 2020/03/26
 * @NOTE The code that has been commented out below, is left as a memorial of what NOT TO DO!
 * Because it causes a circular dependency as noted in the note below.
 * If you need to debug this function, you'll need to uncomment the console.logs that are hard-coded below.
 */
export const replaceDoublePercentWithMessage = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceDoublePercentWithMessage business rule');
  // NOTE: Cannot use the following code here, because it causes a circular dependency.
  // We just have to hard code everything and it won't be loged to the log file.
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.creplaceDoublePercentWithMessage;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData.replace(b.cPercent + b.cPercent, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceDoublePercentWithMessage business rule');
  return returnData;
};

/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Removes X number of folders from the end of a path and returns the newly modified path.
 * @param {string} inputData The path that should have the number of folders removed.
 * @param {integer} inputMetaData The number of paths that should be removed from the input path.
 * @return {string} The modified string with the folders removed from the input path.
 * @author Seth Hollingsead
 * @date 2020/06/01
 */
export const removeXnumberOfFoldersFromEndOfPath = function(inputData, inputMetaData) {
  let functionName = s.cremoveXnumberOfFoldersFromEndOfPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && math.isNumeric(inputMetaData) === true) {
    let pathArray;
    let pathAsForwardSlash;
    if (inputData.includes(b.cForwardSlash) === true) {
      pathArray = inputData.split(b.cForwardSlash);
      pathAsForwardSlash = true;
    } else if (inputData.includes(b.cBackSlash) === true) {
      pathArray = inputData.split(b.cBackSlash);
      pathAsForwardSlash = false
    } else {
      pathAsForwardSlash = false;
      returnData = false;
    }
    if (returnData !== false) {
      // pathArray is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cpathArrayIs + JSON.stringify(pathArray));
      for (let i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
        // current path element is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentPathElementIs + pathArray[i]);
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
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getFirstTopLevelFolderFromPath
 * @description Takes a path and returns the folder at the farthest right of that path.
 * @param {string} inputData The path that should be evaluated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The folder at the far-right of the input path.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */
export const getFirstTopLevelFolderFromPath = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.getFirstTopLevelFolderFromPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.cgetFirstTopLevelFolderFromPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let pathArray;
    if (inputData.includes(b.cForwardSlash) === true) {
      pathArray = inputData.split(b.cForwardSlash);
    } else if (inputData.includes(b.cBackSlash) === true) {
      pathArray = inputData.split(b.cBackSlash);
    } else {
      returnData = false;
    }
    if (returnData !== false) {
      // console.log('pathArray is: ' + JSON.stringify(pathArray));
      // pathArray is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cpathArrayIs + JSON.stringify(pathArray));
      returnData = pathArray[pathArray.length - 2];
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.getFirstTopLevelFolderFromPath function');
  return returnData;
};

/**
 * @function loadDataFile
 * @description Loads data from a specified file and stores is in the specified data hive path.
 * @param {string} inputData The full path and file name for the file that should be loaded into memory.
 * @param {string} inputMetaData The data hive path where the data should be stored once it is loaded.
 * @return {boolean} A True or False to indicate if the data file was loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */
export const loadDataFile = function(inputData, inputMetaData) {
  let functionName = s.cloadDataFile;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    // WARNING: No data to load, please specify a valid path & filename!
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cLoadDataFileMessage1 + s.cLoadDataFileMessage2);
    returnData = false;
  } else {
    let loadedData = {};
    if (inputData.includes(g.cDotxml) || inputData.includes(g.cDotXml) || inputData.includes(g.cDotXML)) {
      // Attempting to load XML data!
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cAttemptingToLoadXmlData);
      loadedData = fileBroker.getXmlData(inputData);
    } else if (inputData.includes(g.cDotcsv) || inputData.includes(g.cDotCsv) || inputData.includes(g.cDotCSV)) {
      // Attempting to load CSV data!
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cAttemptingToLoadCsvData);
      loadedData = fileBroker.getCsvData(inputData);
    } else if (inputData.includes(g.cDotjson) || inputData.includes(g.cDotJson) || inputData.includes(g.cDotJSON)) {
      // Attempting to load JSON data!
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cAttemptingToLoadJsonData);
      loadedData = fileBroker.getJsonData(inputData);
    } else {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cloadDataFileMessage3 + supportedFileFormatsAre());
    }
    // Loaded data is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cLoadedDataIs + JSON.stringify(loadedData));
    if (loadedData !== null && loadedData) {
      returnData = true;
      dataBroker.storeData(inputMetaData, loadedData);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function supportedFileFormatsAre
 * @description Returns a list of supported file formats.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma seperated list of supported file formats. IE a list of file extensions.
 * @author Seth Hollingsead
 * @date 2021/02/06
 */
export const supportedFileFormatsAre = function(inputData, inputMetaData) {
  let functionName = s.csupportedFileFormatsAre;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  // NOTE: In the future it might be better to store this data in a configuration setting so it's easier to update.
  // This this function could just look up that data and return it as a list.
  let returnData = g.cXML + b.cComa + b.cSpace + g.cCSV + b.cComa + b.cSpace + g.cJSON;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getAttributeName
 * @description Takes a string representation of a JSON attribute and gets the name (left hand assignment key).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the attribute.
 * @author Seth Hollingsead
 * @date 2021/01/10
 */
export const getAttributeName = function(inputData, inputMetaData) {
  let functionName = s.cgetAttributeName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(b.cColon);
    // attributeArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cattributeArrayIs + attributeArray);
    // attributeArray[0] is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cattributeArray0Is + attributeArray[0]);
    returnData = aryParse.replaceCharacterWithCharacter(attributeArray[0], [/"/g, '']);
    returnData = returnData.trim();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getAttributeValue
 * @description Takes a string representation of a JSON attribute and gets the value (Right hand assignment value).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The value of the attribute.
 * @author Seth Hollingsead
 * @date 2021/01/10
 */
export const getAttributeValue = function(inputData, inputMetaData) {
  let functionName = s.cgetAttributeValue;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(b.cColon);
    // attributeArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cattributeArrayIs + attributeArray);
    // attributeArray[0] is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cattributeArray0Is + attributeArray[1]);
    returnData = aryParse.replaceCharacterWithCharacter(attributeArray[1], [/"/g, '']);
    returnData = returnData.trim();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isOdd
 * @description Determines if the input value is an odd number or not an odd number.
 * @param {string} inputData The value that should be evaluated to determine if it is odd or not odd.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the value passed in is an Odd value or not an odd value.
 * @author Seth Hollingsead
 * @date 2020/06/24
 * {@link https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript}
 */
export const isOdd = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.isOdd function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.cisOdd;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (isInteger(inputData, '') === true) {
      let inputValue = parseInt(inputData);
      let result = inputValue % 2;
      if (result === 1) {
        returnData = true;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.isOdd function');
  return returnData;
};

/**
 * @function isEven
 * @description Determines if the input value is an even number or not an even number.
 * @param {string} inputData The value that should be evaluated to determine if it is even or not even.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the value passed in is an even value or not an even value.
 * @author Seth Hollingsead
 * @date 2020/06/24
 * {@link https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript}
 * @NOTE This function isn't actually needed, as we can just invert our logic for calling isOdd, but I provided it here anyways for completeness.
 */
export const isEven = function(inputData, inputMetaData) {
  let functionName = s.cisEven;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (math.isNumeric(inputData) === true) {
      let inputValue = parseInt(inputData);
      let result = inputValue % 2;
      if (result === 0) {
        returnData = true;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function cleanCommandInput
 * @description Removes any "--" from the command to make it a valid command.
 * @param {string} inputData The string that should have the "--" removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input, but with the "--" removed.
 * @author Seth Hollingsead
 * @date 2020/12/21
 */
export const cleanCommandInput = function(inputData, inputMetaData) {
  let functionName = s.ccleanCommandInput;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/--/g, '']);
    returnData = aryParse.replaceCharacterWithCharacter(returnData, [/\[/g, '']);
    returnData = aryParse.replaceCharacterWithCharacter(returnData, [/\]/g, '']);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

// ******************************************************
// Internal functions
// ******************************************************

/**
 * @function replaceCharacterAtIndexOfString
 * @description Replaces the character at a specified index with another character.
 * @param {string} originalString The string where the replacement should be made.
 * @param {integer} index The index of the character where the replacement should be made.
 * @param {string} replacement The character or string that should be inserted at the specified index.
 * @return {string} The string after the replacement has been made.
 * @author Seth Hollingsead
 * @date 2021/01/19
 * @NOTE: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 */
export const replaceCharacterAtIndexOfString = function(originalString, index, replacement) {
  let functionName = s.replaceCharacterAtIndexOfString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // originalString is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.coriginalStringIs + originalString);
  // index is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cindexIs + index);
  // replacement is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creplacementIs + replacement);
  let returnData;
  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
