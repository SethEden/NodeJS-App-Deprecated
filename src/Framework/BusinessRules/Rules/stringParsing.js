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
 * @requires module:basic-constants
 * @requires module:generic-constants
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
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
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
    returnData = replaceCharacterWithCharacter(inputData, [/\//g, b.cBackSlash]);
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
    returnData = replaceCharacterWithCharacter(inputData, [/\\/g, b.cForwardSlash]);
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
    returnData = replaceCharacterWithCharacter(inputData, [/\/\//g, b.cForwardSlash]);
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
    returnData = replaceCharacterWithCharacter(inputData, [/\\\\/g, b.cBackSlash]);
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
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'index of the ' + b.cAt + ' is: ' + inputData.indexOf(b.cAt));
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
    returnData = replaceCharacterWithCharacter(inputData, [/ /g, b.cPlus]);
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
    returnData = replaceCharacterWithCharacter(inputData, [/:/g, b.cUnderscore]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of a specified character in the input data with another specified character.
 * @NOTE: This is NOT a public facing business rule, because the function signature cannot be made to match with the accepted business rules standards.
 * It actually could be made to match but we would have to combine the 2nd two parameters into one with a delimiter.
 * In practice this would be a mistake, but would be an acceptable solution if we find there are many additional needs for this kind of business rule.
 * @param {string} inputData A string that may or may not contain the specified characters that should be converted to another specified character.
 * @param {array<string,string>} inputMetaData An array of data that contains 2 additional string parameters:
 * inputMetaData[0] === character2Find - The character to be searched and replaced from the input string.
 * inputMetaData[1] === character2Replace - The character that should be used to replace the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specified characters converted to the other specified character.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const replaceCharacterWithCharacter = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceCharacterWithCharacter function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + JSON.stringify(inputMetaData));
  let functionName = s.creplaceCharacterWithCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let character2Find = inputMetaData[0];
  let character2Replace = inputMetaData[1];
  if (!inputData && !character2Find && !character2Replace) {
    returnData = false;
  } else {
    returnData = inputData.replace(character2Find, character2Replace);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceCharacterWithCharacter function');
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
  console.log('s.cgetValueFromAssignmentOperationString is resolving as: ' + s.cgetValueFromAssignmentOperationString);
  let functionName = s.cgetValueFromAssignmentOperationString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let parsedString = inputData.split(b.cEqual);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'parsedString term 1 is: ' + parsedString[0]);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'parsedString term 2 is: ' + parsedString[1]);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'string1 is: ' + string1);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'string2 is: ' + string2);

  // Build some arrays of variations on string 2, we will use these for doing the comparisons.
  let variation0 = Array(string2.length + 1).fill(0).map((v, i) => i);
  let variation1 = Array(string2.length + 1).fill(0);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation0 value is: ' + variation0);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation1 value is: ' + variation1);

  for (let i = 0; i < string1.length; i++) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'i value is: ' + i);
    variation1[0] = i + 1;
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation0 value is: ' + variation0);
    for (let j = 0; j < string2.length; j++) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'j value is: ' + j);
      let deletionCost = variation0[j + 1] + 1;
      let insertionCost = variation1[j] + 1;
      let substitutionCost;
      if (string1[i] === string2[j]) {
        substitutionCost = variation0[j];
      } else {
        substitutionCost = variation0[j] + 1;
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'deletionCost is: ' + deletionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'insertionCost is: ' + insertionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'substitutionCost is: ' + substitutionCost);
      variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation1 value is: ' + variation1);
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
 * @function convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {string} inputData String to decompose into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words that were composed in the original string.
 * @author Seth Hollingsead
 * @date 2020/02/10
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 */
export const convertCamelCaseStringToArray = function(inputData, inputMetaData) {
  let functionName = s.cconvertCamelCaseStringToArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  let caps = [];
  for (let i = 1; i < inputData.length; i++) {
    if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
  }
  if (caps.length > 0) {
    let last = 0;
    let decomposedString = [];
    for (let j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.slice(last, caps[j]));
      last = caps[j];
    }
    decomposedString.push(inputData.slice(last));
    returnData = decomposedString;
  } else {
    returnData = [inputData];
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
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
    // 4. Has a lower case first letter of the first word.
    if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&
    doesStringContainLowerCaseCharacter(inputData, '') && isFirstCharacterLowerCase(inputData, '')) {
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
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function convertArrayToCamelCaseString
 * @description Takes an array of words and returns a camelCase string of the input words.
 * @param {array<string>} inputData The array of words that should be strung together into a single long string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A String that contains all of the words from the input array put together in sequential order.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const convertArrayToCamelCaseString = function(inputData, inputMetaData) {
  let functionName = s.cconvertArrayToCamelCaseString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  returnData = inputData.map((key, index) => mapWordToCamelCaseWord(key, index));
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
  let returnData;
  returnData = inputData.replace(/^./, character => character.toUpperCase());
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
  let returnData;
  returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');
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
  let returnData;
  returnData = simplifyAndConsolidateString(inputData) === simplifyAndConsolidateString(inputMetaData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidateString().
 * @param {array} inputData The array of strings that should be checked if it contains the specified string.
 * @param {string} inputMetaData The string we are looking for in the array.
 * @return {boolean} A Boolean to indicate if the string is found in the array or not.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const doesArrayContainLowerCaseConsolidatedString = function(inputData, inputMetaData) {
  let functionName = s.cdoesArrayContainLowerCaseConsolidatedString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  let stringDelta = (value1, value2) => aggregateNumericalDifferenceBetweenTwoStrings(value1, value2) < 2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'stringDelta value is: ' + stringDelta);

  returnData = doesArrayContainValue(inputData, inputMetaData, stringDelta);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function doesArrayContainCharacter
 * @description Parses through all the elements of an array and determines if any one of them contains the input character.
 * @param {string|boolean|integer|object} inputData The character that should be searched for in the array of elements.
 * @param {array<string|boolean|integer|object>} inputMetaData The array that should be searched for the specified character/value/etc...
 * @return {boolean} True or False to indicate if the value was found or not found.
 * @author Seth Hollingsead
 * @date 2020/06/25
 */
export const doesArrayContainCharacter = function(inputData, inputMetaData) {
  let functionName = s.cdoesArrayContainCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData && !inputMetaData) {
    returnData = false;
  } else {
    for (let i = 0; i < inputMetaData.length; i++) {
      let arrayElement = inputMetaData[i];
      if (arrayElement.includes(inputData) === true) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function removeCharacterFromArray
 * @description Removes all instances of a character or value from all array elements.
 * @param {string|integer|boolean|float|object} inputData The character, integer, boolean, float or object
 * that should be removed from all instances of the input array.
 * @param {array<string|boolean|integer|object>} inputMetaData The array from which all instances of the input character, integer, etc... should be removed.
 * @return {array<string|boolean|integer|object>} The array after having the specified character removed from all elements of the input array.
 * @author Seth Hollingsead
 * @date 2020/06/25
 */
export const removeCharacterFromArray = function(inputData, inputMetaData) {
  let functionName = s.cremoveCharacterFromArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData && !inputMetaData) {
    return false;
  } else {
    for (let i = 0; i < inputMetaData.length; i++) {
      let arrayElement = inputMetaData[i];
      if (arrayElement.includes(inputData) === true) {
        // replaceCharacterWithCharacter Use this to parse the string and remove all characters that match.
        // replaceCharacterWithCharacter(inputData, [/:/g, b.cUnderscore]);
        inputMetaData[i] = replaceCharacterWithCharacter(arrayElement, [RegExp('\\' + inputData, b.cg), '']);
      }
    }
    returnData = inputMetaData;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
  let returnData;
  if (path.basename(inputData) === path.basename(inputMetaData)) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Filenames match');
    returnData = true;
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Filenames do not match');
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function acertainMatchingElements
 * @description Determines if two values are identical. Needed for completeness of comparison for nested arrays.
 * @param {array} inputData An array that should be compared for equality.
 * @param {array} inputMetaData Second array that should be compared for equality.
 * @return {boolean} True or False to indicate array equality or not.
 * @author Seth Hollingsead
 * @date 2021/01/21
 */
export const ascertainMatchingElements = function(inputData, inputMetaData) {
  let functionName = s.cascertainMatchingElements;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData === inputMetaData) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Array elements match');
    returnData = true;
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Array elements do not match');
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainFilename
 * @description Checks if an array contains a filename, after stripping off the path.
 * @param {array<string>} inputData The Array of file names that should be checked for the input file name we are looking for.
 * @param {string} inputMetaData The file name we are looking for in the input Array.
 * @return {boolean} A Boolean value to indicate if the file name was found or not.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const doesArrayContainFilename = function(inputData, inputMetaData) {
  let functionName = s.cdoesArrayContainFilename;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  // NOTE: This call doesn't actually work, it may have worked at one time, but it doesn't work now.
  // And I'm not going to spend the time trying to figure out why,
  // when it will be much simpler to just call that same function in a loop to figure out the result.
  returnData = doesArrayContainValue(inputData, inputMetaData, ascertainMatchingFilenames);

  // NOTE: The below code also works, I am going to attempt to re-enable the above code and see if it also works.
  // YES! This is a second way of doing the same thing. If the above code ever has a problem, we can fall back to this method.
  // for (let i = 0; i < inputData.length; i++) {
  //   if (ascertainMatchingFilenames(inputData[i], inputMetaData) === true) {
  //     returnData = true;
  //     break;
  //   }
  // }
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
  const liner = new lineByLine(inputData);
  let line;

  while (line = liner.next()) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, line.toString(g.cascii));
    let lineInCode = line.toString(g.cascii);
    let foundConstant = false;
    if (lineInCode.includes(s.cexportconst) === true) {
      let lineArray = lineInCode.split(b.cSpace);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'lineArray[2] is: ' + lineArray[2]);
      foundConstant = validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
      let qualifiedConstantsFilename = getFileNameFromPath(inputData, '');
      if (foundConstant === true) {
        if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationPassMessages) === true) {
          let passMessage = 'PASS: ' + lineArray[2] + ' PASS';
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(0,255,0)(passMessage);
          console.log(qualifiedConstantsFilename + b.cColon + b.cSpace + passMessage);
        }
      } else {
        if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationFailMessages) === true) {
          let failMessage = 'FAIL: ' + lineArray[2] + ' FAIL';
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
            console.log('Suggested line of code is: ' + suggestedLineOfCode);
          }
        }
        foundAFailure = true;
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
  let returnData = inputData;
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
    console.log('ERROR: Unknown constant file.');
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
  let returnData = inputData;
  // Input: cZZTopIntentionalFailure
  // Output: {Name: 'cZZTopIntentionalFailure', Actual: w.cZZTopIntentionalFailure, Expected: 'ZZTopIntentionalFailure'}
  if (inputData.charAt(0) === b.cc) {
    let literalValue = inputData.substr(1);
    returnData = `{Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
  } else {
    console.log('ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
    'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
    'Please reformat the constant correctly so a line of code can be generated for you.');
    returnData = '';
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
  for (let i = 0; i < D[s.cConstantsValidationData][inputMetaData].length; i++) {
    let validationLineItem = D[s.cConstantsValidationData][inputMetaData][i];
    if (inputData === validationLineItem.Name) {
      returnData = true;
      break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data specified by the input parameter and validates the content..
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
  for (let i = 0; i < D[s.cConstantsValidationData][inputData].length; i++) {
    let validationLineItem = D[s.cConstantsValidationData][inputData][i];
    if (validationLineItem.Actual === validationLineItem.Expected) {
      if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationPassMessages) === true) {
        let passMessage = `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
        passMessage = chalk.rgb(0,0,0)(passMessage);
        passMessage = chalk.bgRgb(0,255,0)(passMessage);
        console.log(passMessage);
      }
    } else {
      returnData = false;
      if (configurator.getConfigurationSetting(s.cDisplayIndividualConstantsValidationFailMessages) === true) {
        let passMessage = `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
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
  if (!inputData && !inputMetaData) {
    returnData = 0;
  } else {
loop1:
    for (let i = 0; i < inputMetaData.length; i++) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN i-th loop: ' + i);
      let currentCommand = inputMetaData[i];
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentCommand is: ' + JSON.stringify(currentCommand));
      let aliasList = currentCommand[w.cAliases];
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'aliasList is: ' + aliasList);
      let arrayOfAliases = aliasList.split(b.cComa);
loop2:
      for (let j = 0; j < arrayOfAliases.length; j++) {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN j-th loop: ' + i);
        let currentAlias = arrayOfAliases[j];
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentAlias is: ' + currentAlias);
        if (currentAlias === inputData) {
          returnData = returnData + 1;
        }
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'duplicateAliasCount is: ' + returnData);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'END j-th loop: ' + i);
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'END i-th loop: ' + i);
    }
  }
  if (returnData > 1) {
    let duplicateAliasCountMessage = 'duplicateAliasCount is: ' + returnData;
    duplicateAliasCountMessage = chalk.rgb(0,0,0)(duplicateAliasCountMessage);
    duplicateAliasCountMessage = chalk.bgRgb(255,0,0)(duplicateAliasCountMessage);
    console.log(duplicateAliasCountMessage);
    let duplicateAliasCommandMessage = 'duplicate command alias is: ' + inputData;
    duplicateAliasCommandMessage = chalk.rgb(0,0,0)(duplicateAliasCommandMessage);
    duplicateAliasCommandMessage = chalk.bgRgb(255,0,0)(duplicateAliasCommandMessage);
    console.log(duplicateAliasCommandMessage);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function generateCommandAliases
 * @description Generates all possible combinations of command aliases given a set of command words and command word abreviations.
 * @param {object} inputData An object containing all of the meta-data needed for command words and
 * command abreviations needed to generate every possible combination of command alias.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma-separated list of every possible combination of command aliases.
 * @author Seth Hollingsead
 * @date 2021/01/19
 */
export const generateCommandAliases = function(inputData, inputMetaData) {
  let functionName = s.cgenerateCommandAliases;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // {"wonder":"wondr,wundr,wndr","Woman":"wman,wmn,womn","Amazing":"amzing,amzng"}
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
    let commandDelimiter = '';
    let commandWordsKeys1 = Object.keys(inputData);
    let commandWordAliasesArray = [];
    let masterCommandWordAliasesArray = [commandWordsKeys1.length - 1];
    let masterArrayIndex = [commandWordsKeys1.length - 1];
    for (let i = 0; i < commandWordsKeys1.length; i++) {
    // commandWordsKeys1.forEach((key1) => {
      let key1 = commandWordsKeys1[i];
      let commandWordAliases = inputData[key1];
      if (commandWordAliases.includes(primaryCommandDelimiter)) {
        commandDelimiter = primaryCommandDelimiter;
      } else if (commandWordAliases.includes(secondaryCommandDelimiter)) {
        commandDelimiter = secondaryCommandDelimiter;
      } else if (commandWordAliases.includes(tertiaryCommandDelimiter)) {
        commandDelimiter = tertiaryCommandDelimiter;
      }
      commandWordAliases = commandWordAliases + commandDelimiter + key1;
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandWordAliases BEFORE CHANGE is: ' + commandWordAliases);
      commandWordAliasesArray = commandWordAliases.split(commandDelimiter);
      masterArrayIndex[i] = commandWordAliasesArray.length - 1;
      for (let j = 0; j < commandWordAliasesArray.length; j++) {
        let commandAliasWord = commandWordAliasesArray[j];
        if (isFirstCharacterLowerCase(commandAliasWord, '') === true) {
          let firstLetterOfCommandAliasWord = commandAliasWord.charAt(0).toUpperCase();
          commandAliasWord = replaceCharacterAtIndexOfString(commandAliasWord, 0, firstLetterOfCommandAliasWord);
          commandWordAliasesArray[j] = commandAliasWord; // Saved the changes back to array.
        }
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandWordAliasesArray AFTER CHANGE is: ' + JSON.stringify(commandWordAliasesArray));
      masterCommandWordAliasesArray[i] = commandWordAliasesArray; // Try to build an array of arrays (2D)
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'masterCommandWordAliasesArray is: ' + JSON.stringify(masterCommandWordAliasesArray));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'masterArrayIndex is: ' + JSON.stringify(masterArrayIndex));

    // NOTES: Console output is:
    // masterCommandWordAliasesArray is: [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // masterArrayIndex is: [4,4,3]
    //
    // We should be able to have 2 nested for-loops, and we will delcare a counter array initialized to [0,0,0] to match the masterArrayIndex above.
    // The counter array tells us which combination of words we should get.
    // We can simply push those combination of words as a string on a stack we will make for this business rule.
    // Then iterate the last array element as long as it's not greater than the number in the master array index and do the same things over again.
    // When the array index for the last element in the array reaches the masterArrayIndex for the same array index then we increment the second from the last array counter.
    // And start over again with the last element in the array counter.
    // This way we should be able to iterate over the entire 2D array and get every combination without having to create x number of nested for-loops.
    // Essentially we will be having 2-nested for-loops looping over the counter array. The top level loop will be looping over masterArrayIndex.length,
    // and the second loop will be iterating over the integers in the counter array.
    // The counter array will tell the algorthim which combination of words to put together and push on the stack.
    //
    // NOTE: The algorthim described above is called: Lehmer code
    // https://en.wikipedia.org/wiki/Lehmer_code
    let returnData = solveLehmerCode(masterArrayIndex, masterCommandWordAliasesArray);
    console.log('Command Aliases are: ' + returnData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function solveLehmerCode
 * @description Used the inputData as an addressable Lehmer Code to find all possible combinations of array elements.
 * @param {array<integer>} inputData The Lehmer code addressable index array we will use to permutate over all possible combinations.
 * @param {array<array<string>>} inputMetaData The nested array that contains all instances of strings that should be used when generating permutations.
 * @return {string} The delimited list of possible combinations generated by solving the Lehmer Code.
 * @author Seth Hollingsead
 * @date 2021/01/20
 * @NOTE: https://en.wikipedia.org/wiki/Lehmer_code
 */
export const solveLehmerCode = function(inputData, inputMetaData) {
  let functionName = s.csolveLehmerCode;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = '';
    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let lengthOfInputData = inputData.length;
    let expandedLehmerCodeArray = [];
    let tempArray = [];
    let lehmerCodeArray = Array.from(Array(lengthOfInputData), () => 0);
    expandedLehmerCodeArray = arrayDeepClone(recursiveArrayExpansion([0, lehmerCodeArray], inputData));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'expandedLehmerCodeArray is: ' + JSON.stringify(expandedLehmerCodeArray));

    // Now we just iterate over each array in expandedLehmerCodeArray and call: getLehmerCodeValue
    for (let i = 0; i < expandedLehmerCodeArray.length - 1; i++) {
      let lehmerCodeStringValue = getLehmerCodeValue(expandedLehmerCodeArray[i], inputMetaData);
      if (i === 0) {
        returnData = returnData + lehmerCodeStringValue;
      } else {
        returnData = returnData + b.cComa + lehmerCodeStringValue;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function recursiveArrayExpansion
 * @description Recursively expands all possible combinations of an input array given an index of expansion and returns the list of arrays.
 * @param {array<integer,array<integer>>} inputData The index of expansion and the array to be expanded as an array object.
 * @param {array<integer>} inputMetaData The Lehmer Codex that should be used to set the limit of expansion based on the index of expansion.
 * @return {array<array<integer>>} The final list of arrays after the array expansion has completed successfully.
 * @author Seth Hollingsead
 * @date 2021/01/21
 */
export const recursiveArrayExpansion = function(inputData, inputMetaData) {
  let functionName = s.crecursiveArrayExpansion;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [];
  if (inputData && inputMetaData && isArray(inputData) === true && isArray(inputMetaData) === true && inputData.length > 0 && inputMetaData.length > 0) {
    // Setup & parse the inputData & inputMetaData into a format we can use to actually do recursive array expansion.
    let indexOfExpansion = inputData[0];
    let arrayToBeExpanded = inputData[1];
    let limitOfExpansion = inputMetaData[indexOfExpansion];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'indexOfExpansion is: ' + indexOfExpansion);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'arrayToBeExpanded is: ' + JSON.stringify(arrayToBeExpanded));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'limitOfExpansion is: ' + limitOfExpansion);
    let masterTempReturnData = []; // When we are all done we will set the returnData back to the list of arrays in this array.

    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }

    // First level array expansion.
    for (let i = 0; i <= limitOfExpansion; i++) {
      let lehmerCodeArray1 = arrayDeepClone(arrayToBeExpanded, '');
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));
      lehmerCodeArray1[indexOfExpansion] = i;
      if (doesArrayContainValue(returnData, lehmerCodeArray1, ascertainMatchingElements) === false) {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'pushing lehmerCodeArray1 to returnData value: ' + JSON.stringify(lehmerCodeArray1));
        returnData.push(lehmerCodeArray1);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData after push is: ' + JSON.stringify(returnData));
      }
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData after Level 1 is: ' + JSON.stringify(returnData));

    // Second level array expansion, this is where we call recursively.
    // We need to determine if the index of expansion is equal to the length of the arrayToBeExpanded.
    // If it is then we have reached our recursive expansion limit.
    // If NOT then we need to recursively expand some more on each of the arrays that are now in the returnData array.
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'arrayToBeExpanded.length is: ' + arrayToBeExpanded.length);
    if (indexOfExpansion < arrayToBeExpanded.length - 1) {
      // We need to remove arrays from the returnData and recursively call the recursiveArrayExpansion with each array we remove.
      // The data we get back from each recursive call should be pushed back to masterTempReturnData array
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData.length is: ' + returnData.length);
      // Make sure we clone the array we will be removing array elements from,
      // because otherwise we would be looping over the same array we are removing elements from,
      // which would mean that we would never visit all of the elemtns.
      // https://stackoverflow.com/questions/54081930/why-array-foreach-array-pop-would-not-empty-the-array
      let returnDataTemp = arrayDeepClone(returnData, '');
      returnDataTemp.forEach(function(item) {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData BEFORE POP is: ' + JSON.stringify(returnData));
        let lehmerCodeArray2 = arrayDeepClone(returnData.pop(), '');
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData AFTER POP is: ' + JSON.stringify(returnData));
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'masterTempReturnData BEFORE recursive call is: ' + JSON.stringify(masterTempReturnData));
        let tempReturnData1 = arrayDeepClone(recursiveArrayExpansion([indexOfExpansion + 1, lehmerCodeArray2], inputMetaData), '');
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'tempReturnData1 is: ' + JSON.stringify(tempReturnData1));
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'tempReturnData1.length is: ' + tempReturnData1.length);
        for (let k = 0; k <= tempReturnData1.length - 1; k++) {
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN k-th iteration: ' + k);
          if (doesArrayContainValue(masterTempReturnData, tempReturnData1[k], ascertainMatchingElements) === false) {
            loggers.consoleLog(baseFileName + b.cDot + functionName, 'pushing tempReturnData1[k] value: ' + JSON.stringify(tempReturnData1[k]));
            masterTempReturnData.push(arrayDeepClone(tempReturnData1[k], ''));
          }
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'END k-th iteration: ' + k);
        }
        tempReturnData1 = null;
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'masterTempReturnData AFTER recursive call is: ' + JSON.stringify(masterTempReturnData));
      });
      returnData = arrayDeepClone(masterTempReturnData, '');
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function getLehmerCodeValue
 * @description Takes a Lehmer code array and an array of arrays and uses the Lehmer Code array to look up the corosponding values in the array of arrays.
 * @param {array<integer>} inputData The Lehmer code array with indices for values we should get & return.
 * @param {array<array<string>>} inputMetaData The nested array of arrays with the values we should get and combine then return as a single string.
 * @return {string} The joined string from each of the array element strings at the Lehmer code indices.
 * @author Seth Hollingsead
 * @date 2021/01/20
 */
export const getLehmerCodeValue = function(inputData, inputMetaData) {
  let functionName = s.cgetLehmerCodeValue;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let lengthOfInputData = inputData.length;
    returnData = '';
    for (let i = 0; i < lengthOfInputData; i++) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN i-th iteration: ' + i);
      let lookupIndex = inputData[i];
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'lookupIndex is: ' + lookupIndex);
      let lookupValue = inputMetaData[i][lookupIndex]
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'lookupValue is: ' + lookupValue);
      returnData = returnData + lookupValue;
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'END i-th iteration: ' + i);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function arraysAreEqual
 * @description Determines if a set of arrays are equal or not.
 * @param {array} inputData The first array that should be checked for equality.
 * @param {array} inputMetaData The second array that should be checked for equality.
 * @return {boolean} True or False to indicate if the arrays are equal or not equal.
 * @author Seth Hollingsead
 * @date 2021/01/20
 * @NOTE: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
 */
export const arraysAreEqual = function(inputData, inputMetaData) {
  let functionName = s.carraysAreEqual;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData && !inputMetaData) {
    returnData = false;
  } else {
    if (inputData === inputMetaData) { returnData = true; }
    if (inputData === null || inputMetaData === null) { returnData === false; }
    if (inputData.length !== inputMetaData.length) { returnData === false; }
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let dataCatagory = inputData.split(b.cUnderscore);
    returnData = dataCatagory[0];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Data Catagory should be: ' + dataCatagory[0]);
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let dataCatagoryDetailName = inputData.split(b.cUnderscore);
    returnData = dataCatagoryDetailName[1];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Data Catagory Detail Name should be: ' + dataCatagoryDetailName[1]);
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let dataCatagoryKeywordName = inputData.split(b.cUnderscore);
    returnData = dataCatagoryKeywordName[2];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Keyword Name should be: ' + dataCatagoryKeywordName[2]);
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
  if (!inputData) {
    returnData = false;
  } else {
    let applicationName = configurator.getConfigurationSetting(s.cApplicationName);
    let pathElements = inputData.split(b.cBackSlash);
    loop1:
      for (let i = 0; i < pathElements.length; i++) {
        // console.log('BEGIN iteration i: ' + i);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN iteration i: ' + i);
        let pathElement = pathElements[i];
        // console.log('pathElement is ' + pathElement);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathElement is: ' + pathElement);
        if (i === 0) {
          // console.log('case: i = 0');
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'case: i = 0');
          returnData = pathElement;
        } else if (pathElement === applicationName) {
          // console.log('case: pathElement = ' + s.cCAFfeinated);
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'case: pathElement = ' + applicationName);
          returnData = returnData + b.cBackSlash + pathElement + b.cBackSlash;
          break loop1;
        } else {
          // console.log('case else');
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'case else');
          returnData = returnData + b.cBackSlash + pathElement;
        }
        // console.log('returnData so far is: ' + returnData);
        // console.log('END iteration i: ' + i);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData so far is: ' + returnData);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'END iteration i: ' + i);
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
  if (!inputData) {
    returnData = false;
  } else {
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
  if (!inputData && math.isNumeric(inputMetaData) === false) {
    returnData = false;
  } else {
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
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathArray is: ' + JSON.stringify(pathArray));
      for (let i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'current path element is: ' + pathArray[i]);
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
  if (!inputData) {
    returnData = false;
  } else {
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
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathArray is: ' + JSON.stringify(pathArray));
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
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'WARNING: No data to load, please specify a valid path & filename!');
    returnData = false;
  } else {
    let loadedData = {};
    if (inputData.includes(g.cDotxml) || inputData.includes(g.cDotXml) || inputData.includes(g.cDotXML)) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Attempting to load XML data!');
      loadedData = fileBroker.getXmlData(inputData);
    } else if (inputData.includes(g.cDotcsv) || inputData.includes(g.cDotCsv) || inputData.includes(g.cDotCSV)) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Attempting to load CSV data!');
      loadedData = fileBroker.getCsvData(inputData);
    } else if (inputData.includes(g.cDotjson) || inputData.includes(g.cDotJson) || inputData.includes(g.cDotJSON)) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Attempting to load JSON data!');
      loadedData = fileBroker.getJsonData(inputData);
    } else {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'WARNING: Invalid file format, file formats supported are: XML, CSV, JSON');
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Loaded data is: ' + JSON.stringify(loadedData));
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
 * @function getStoredData
 * @description Gets the named data stored in the D data structure in the DataStorage data hive.
 * @param {string} inputData The name of the sub-data hive that should contain the stored data we are looking for.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} The data that was stored in the sub-data hive under the DataStorage data hive of the D data structure.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */
export const getStoredData = function(inputData, inputMetaData) {
  let functionName = s.cgetStoredData;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = dataBroker.getData(inputData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function storeData
 * @description Stores some data using the DataStorage data hive on the D data store.
 * @param {string} inputData The context name that the data should be stored with.
 * @param {string/integer/boolean/object/array} inputMetaData The data that should be stored.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/01/05
 */
export const storeData = function(inputData, inputMetaData) {
  let functionName = s.cstoreData;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (!inputData) {
    returnData = false;
  } else {
    dataBroker.storeData(inputData, inputMetaData);
    returnData = true;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isObjectEmpty
 * @description Determines if a JSON object is empty or not.
 * @param {object} inputData The object that should be checked for emptyness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the object is empty or not empty.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */
export const isObjectEmpty = function(inputData, inputMetaData) {
  let functionName = s.cisObjectEmpty;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  if (inputData) {
    for (var key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        returnData = false;
        // It may have a value, but is that value === null, if it is, reset back to true.
        if (inputData[key] === null) {
          returnData = true;
        }
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isArrayEmpty
 * @description Determines if a JSON array is empty or not.
 * @param {array} inputData The array that should be checked for emptyness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the array is empty or not empty.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */
export const isArrayEmpty = function(inputData, inputMetaData) {
  let functionName = s.cisArrayEmpty;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  if (inputData) {
    returnData = !Object.keys(inputData).length;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isArray
 * @description Determines if an object is an array or not.
 * @param {object} inputData The object that should be tested to see if is an array or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */
export const isArray = function(inputData, inputMetaData) {
  let functionName = s.cisArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  returnData = Array.isArray(inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isNonZeroLengthArray
 * @description Determines if an object is an array of length greater than or equal to one or not.
 * @param {object} inputData The object that should be tested to see if is an array of length greater than or equal to 1 or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array of length greater than equal to zero or not.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */
export const isNonZeroLengthArray = function(inputData, inputMetaData) {
  let functionName = s.cisNonZeroLengthArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (isArray(inputData) === true && inputData.length >= 1) {
    returnData = true;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function arrayDeepClone
 * @description Clones an array by using JSON.stringify & JSON.parse.
 * Almost all other methods of cloning an array will actually clone by referance which essentially just clones the pointer to the array.
 * @NOTE: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
 * @param {array} inputData The array that should be deeply cloned.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array} The new array object after being cloned deeply.
 * @author Seth Hollingsead
 * @date 2021/01/21
 */
export const arrayDeepClone = function(inputData, inputMetaData) {
  let functionName = s.carrayDeepClone;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData && isArray(inputData, '') === true && isArrayEmpty(inputData, '') === false) {
    returnData = JSON.parse(JSON.stringify(inputData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isObject
 * @description Determines if an object is a JSON object or not.
 * @param {object} inputData The object that should be tested to see if it is a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */
export const isObject = function(inputData, inputMetaData) {
  let functionName = s.cisObject;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (typeof inputData === 'object') {
    returnData = true;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function isArrayOrObject
 * @description Determines if an input object is either an array or a JSON object.
 * @param {object} inputData The object that should be tested to see if it is either an array or a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is either an array or a JSON object.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */
export const isArrayOrObject = function(inputData, inputMetaData) {
  let functionName = s.cisArrayOrObject;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (isObject(inputData, '') === true || isArray(inputData, '') === true) {
    returnData = true;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
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
  if (!inputData) {
    returnData = false;
  } else {
    let attributeArray = inputData.split(b.cColon);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'attributeArray is: ' + attributeArray);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'attributeArray[0] is: ' + attributeArray[0]);
    returnData = replaceCharacterWithCharacter(attributeArray[0], [/"/g, '']);
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
  if (!inputData) {
    returnData = false;
  } else {
    let attributeArray = inputData.split(b.cColon);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'attributeArray is: ' + attributeArray);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'attributeArray[0] is: ' + attributeArray[1]);
    returnData = replaceCharacterWithCharacter(attributeArray[1], [/"/g, '']);
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
  if (!inputData) {
    returnData = false;
  } else {
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
  if (!inputData) {
    returnData = false;
  } else {
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
 * @function replaceCharacterAtIndex
 * @description Replaces a character at the specified index with another character.
 * @param {string} inputData The string which should have the specified character changed, then returned.
 * @param {array<integer,string>} inputMetaData An array with an integer of what index the character should be replaced,
 * and a string with the character or characters that should be inserted at the specified index.
 * @return {string} The modified string.
 * @author Seth Hollingsead
 * @date 2020/06/24
 * {@link https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript}
 */
export const replaceCharacterAtIndex = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceCharacterAtIndex function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.creplaceCharacterAtIndex;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    returnData = false;
  } else {
    let indexOfReplacement;
    let stringToReplaceWith;
    if (inputMetaData.length === 2) {
      indexOfReplacement = inputMetaData[0];
      stringToReplaceWith = inputMetaData[1];
      let stringArray = inputData.split('');
      stringArray.splice(indexOfReplacement, 1, stringToReplaceWith);
      returnData = stringArray.join('');
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceCharacterAtIndex function');
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
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData;
    returnData = replaceCharacterWithCharacter(inputData, [/--/g, '']);
    returnData = replaceCharacterWithCharacter(returnData, [/\[/g, '']);
    returnData = replaceCharacterWithCharacter(returnData, [/\]/g, '']);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function aggregateCommandArguments
 * @description Combines all of the input arguments into a single command line to be executed by the command parser.
 * @param {array<string>} inputData An array of strings that represents the command and command parameters to execute.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single string command line of code that should be sent to the command parser.
 * @author Seth Hollingsead
 * @date 2020/12/21
 */
export const aggregateCommandArguments = function(inputData, inputMetaData) {
  let functionName = s.caggregateCommandArguments;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (!inputData) {
    returnData = false;
  } else {
    if (inputData.length > 3) {
      for (let i = 2; i < inputData.length; i++) {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN i-th iteration: ' + i);
        if (i === 2) {
          returnData = cleanCommandInput(inputData[i]);
        } else {
          returnData = returnData + b.cSpace + cleanCommandInput(inputData[i]);
        }
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'END i-th iteration: ' + i);
      }
    } else {
      returnData = cleanCommandInput(inputData[2]);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

// ******************************************************
// Internal functions
// ******************************************************
/**
 * @function doesArrayContainValue
 * @description Checks if an array contains a value, checking equality by function(val, arr[i])
 * @param {array<string|object|map>} inputData The input array that should be searched for the given input value.
 * @param {string|integer|object} inputMetaData The value that should be searched for in the input array.
 * @param {function} myFunction The function that should be used to do the search.
 * @return {boolean} A Boolean value to indicate if the value was found in the array or not found.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
function doesArrayContainValue(array, value, myFunction) {
  let functionName = 'doesArrayContainValue';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'inputData value is: ' + JSON.stringify(array));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'inputMetaData value is: ' + value);
  // Not sure how this will output, would be good to also put some type checking on this input variable.
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'myFunction value is: ' + JSON.stringify(myFunction));
  let returnData;
  if (_.isArray(array) === false) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'array input object is not an array.');
    returnData = false;
  }
  if (!!array.find(i => myFunction(i, value))) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'The value was found in the array.');
    returnData = true;
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'The value was NOT found in the array.');
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

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
  let functionName = 'replaceCharacterAtIndexOfString';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'originalString value is: ' + originalString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'index value is: ' + index);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'replacement value is: ' + replacement);
  let returnData;
  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
