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
 * @requires module:phonic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:configuration-constants
 * @requires module:message-constants
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
import stack from '../../Structures/stack';
import loggers from '../../Executrix/loggers';
import dataBroker from '../../Executrix/dataBroker';
import fileBroker from '../../Executrix/fileBroker';
import * as aryParse from './arrayParsing';
import * as bas from '../../Constants/basic.constants';
import * as phn from '../../Constants/phonic.constants';
import * as gen from '../../Constants/generic.constants';
import * as num from '../../Constants/numeric.constants';
import * as wrd from '../../Constants/word.constants';
import * as sys from '../../Constants/system.constants';
import * as biz from '../../Constants/business.constants';
import * as cfg from '../../Constants/configuration.constants';
import * as msg from '../../Constants/message.constants';
const lineByLine = require('n-readlines');
const _ = require('lodash');
var path = require('path');
var math = require('mathjs');
var chalk = require('chalk');
var D = require('../../../Framework/Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Framework.BusinessRules.Rules.stringParsing.
var namespacePrefix = sys.cFramework + bas.cDot + wrd.cBusiness + wrd.cRules + bas.cDot + wrd.cRules + bas.cDot + baseFileName + bas.cDot;

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
  let functionName = biz.cstringToBoolean;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (inputData === true || inputData === false) {
      returnData = inputData;
    } else {
      switch (inputData.toLowerCase().trim()) {
        case gen.ctrue: case gen.cTrue: case gen.cTRUE: case bas.ct: case bas.cT: case bas.cy: case bas.cY: case gen.cyes: case gen.cYes: case gen.cYES: case bas.con: case bas.cOn: case bas.cON:
          returnData = true;
          break;
        case gen.cfalse: case gen.cFalse: case gen.cFALSE: case bas.cf: case bas.cF: case bas.cn: case bas.cN: case bas.cno: case bas.cNo: case bas.cNO: case gen.coff: case gen.cOff: case gen.cOFF:
          returnData = false;
          break;
        default:
          returnData = false;
          break;
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cstringToDataType;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let dataType = determineObjectDataType(inputData);
    switch (dataType) {
      case wrd.cBoolean:
        returnData = stringToBoolean(inputData);
        break;
      case wrd.cInteger:
        returnData = parseInt(inputData);
        break;
      case wrd.cFloat:
        returnData = parseFloat(inputData);
        break;
      case wrd.cString:
        returnData = inputData;
        break;
      default: // We don't know what kind of object this is, better return it the way it was.
        returnData = inputData;
        break;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdetermineObjectDataType;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (isBoolean(inputData) === true) {
      returnData = wrd.cBoolean;
    } else if (isInteger(inputData) === true) {
      returnData = wrd.cInteger;
    } else if (isFloat(inputData) === true) {
      returnData = wrd.cFloat;
    } else if (isString(inputData) === true) {
      returnData = wrd.cString;
    } else { // Otherwise we cannot figure out what the data type is.
      // No real way to tell the difference between Short, Long and Double.
      // And we don't really need to tell the difference between all those complicated data types.
      // At least not yet!
      returnData = wrd.cObject;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisBoolean;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (inputData === true || inputData === false) {
      returnData = true;
    } else {
      inputData = inputData.toLowerCase().trim();
      if (inputData === gen.ctrue || inputData === bas.ct || inputData === bas.cy || inputData === gen.cyes || inputData === bas.con ||
      inputData === gen.cfalse || inputData === bas.cf || inputData === bas.cn || inputData === bas.cno || inputData === gen.coff) {
        returnData = true;
      } else {
        returnData = false;
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisInteger;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // if (!isNaN(inputData) && inputData.indexOf(bas.cDot) === -1) {
    // if (!isNaN(inputData) && inputData.includes(bas.cDot) === false) { // Might work for strings, but not numbers.
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisFloat;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (!isNaN(inputData) && inputData.indexOf(bas.cDot) !== -1) {
      returnData = true;
    } else {
      returnData = false;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.csingleQuoteSwapAfterEquals;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // console.log('inputData is: ' + inputData);
    if (inputData.includes(bas.cSingleQuote) === true) {
      // First replace all the quotes in the string with double quotes.
      returnData = inputData.replace(/'/g, bas.cDoubleQuote);
      // Next replace the first and last double quote with single quote.
      if (returnData.indexOf(bas.cDoubleQuote) === 0) {
        returnData = inputData.replace(bas.cDoubleQuote, bas.cSingleQuote);
      }
      if (returnData.charAt(returnData.length - 1) === bas.cDoubleQuote) {
        returnData = returnData.slice(0, -1) + bas.cSingleQuote;
      }
    } else {
      returnData = inputData;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cswapForwardSlashToBackSlash;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\//g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cswapBackSlashToForwardSlash;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\\/g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cswapDoubleForwardSlashToSingleForwardSlash;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\/\//g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cswapDoubleBackSlashToSingleBackSlash;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\\\\/g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetUserNameFromEmail;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    loggers.consoleLog(namespacePrefix + functionName, msg.cIndexOfTheSpace + bas.cAt + msg.cSpaceIsColonSpace + inputData.indexOf(bas.cAt));
    let returnData = inputData.substr(0, inputData.indexOf(bas.cAt));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.creplaceSpacesWithPlus;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // returnData = inputData.replace(/ /g, bas.cPlus);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/ /g, bas.cPlus]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols.
 * @param {string} inputData A string that contains colons that should be converted to underscore symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
export const replaceColonWithUnderscore = function(inputData, inputMetaData) {
  let functionName = biz.creplaceColonWithUnderscore;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // returnData == inputData.replace(/:/g, bas.cUnderscore);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/:/g, bas.cUnderscore]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.ccleanCarriageReturnFromString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.replace(/\s+/g, ' ').trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cconvertStringToLowerCase;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.toLowerCase();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cconvertStringToUpperCase;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.toUpperCase();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetFileNameFromPath;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    // Clean the path string for any double slashes.
    if (inputData.includes(bas.cDoubleForwardSlash)) {
      inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
    }
    if (inputData.includes(bas.cForwardSlash)) {
      inputData = swapForwardSlashToBackSlash(inputData, '');
    }
    // console.log('inputData right before processing is: ' + inputData);
    returnData = inputData.split(bas.cBackSlash).pop().trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetFileExtension;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = path.extname(inputData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cremoveDotFromFileExtension;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.substring(1);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cremoveFileExtensionFromFileName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.replace(/\.[^/.]+$/, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetValueFromAssignmentOperationString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    let parsedString = inputData.split(bas.cEqual);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c1 + msg.cSpaceIsColonSpace + parsedString[0]);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c2 + msg.cSpaceIsColonSpace + parsedString[1]);
    returnData = parsedString[1].replace(/['"]+/g, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.caggregateNumericalDifferenceBetweenTwoStrings;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  // Convert the input strings to lower case and clean them up for parsing.
  let string1 = inputData.toLowerCase().replace(/\W/g, '');
  let string2 = inputMetaData.toLowerCase().replace(/\W/g, '');
  loggers.consoleLog(namespacePrefix + functionName, msg.cstring1Is + string1);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstring2Is + string2);

  // Build some arrays of variations on string 2, we will use these for doing the comparisons.
  let variation0 = Array(string2.length + 1).fill(0).map((v, i) => i);
  let variation1 = Array(string2.length + 1).fill(0);
  loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
  loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);

  for (let i = 0; i < string1.length; i++) {
    loggers.consoleLog(namespacePrefix + functionName, msg.ciValueIs + i);
    variation1[0] = i + 1;
    loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
    for (let j = 0; j < string2.length; j++) {
      loggers.consoleLog(namespacePrefix + functionName, msg.cjValueIs + j);
      let deletionCost = variation0[j + 1] + 1;
      let insertionCost = variation1[j] + 1;
      let substitutionCost;
      if (string1[i] === string2[j]) {
        substitutionCost = variation0[j];
      } else {
        substitutionCost = variation0[j] + 1;
      }
      loggers.consoleLog(namespacePrefix + functionName, msg.cdeletionCostIs + deletionCost);
      loggers.consoleLog(namespacePrefix + functionName, msg.cinsertionCostIs + insertionCost);
      loggers.consoleLog(namespacePrefix + functionName, msg.csubstitutionCostIs + substitutionCost);
      variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);
      loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);
    }
    let temp = variation1;
    variation1 = variation0;
    variation0 = temp;
  }
  returnData = variation0[string2.length];
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.ccountCamelCaseWords;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let caps = [];
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
    }
    returnData = caps.length;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdoesStringContainAcronym;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let lastCharacterWasUpperCase = false;
  let caps = [];
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      // If the last character was upper case and the current character is upper case then we have found an acronym and we can exit the loop.
      if (lastCharacterWasUpperCase === true && gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        lastCharacterWasUpperCase = true;
      } else {
        lastCharacterWasUpperCase = false;
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.ccountDelimiterInString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData && inputMetaData) {
    returnData = (inputData.split(inputMetaData).length - 1);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdetermineWordDelimiter;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let camelCaseWordCount = countCamelCaseWords(inputData, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccamelCaseWordCountIs + camelCaseWordCount);
    let containsAcronym = doesStringContainAcronym(inputData, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccontainsAcronymIs + containsAcronym);
    let spacesCount = countDelimiterInString(inputData, bas.cSpace);
    loggers.consoleLog(namespacePrefix + functionName, msg.cspacesCountIs + spacesCount);
    let periodCount = countDelimiterInString(inputData, bas.cDot);
    loggers.consoleLog(namespacePrefix + functionName, msg.cperiodCountIs + periodCount);
    let dashCount = countDelimiterInString(inputData, bas.cDash);
    loggers.consoleLog(namespacePrefix + functionName, msg.cdashCountIs + dashCount);
    let comaCount = countDelimiterInString(inputData, bas.cComa);
    loggers.consoleLog(namespacePrefix + functionName, msg.ccomaCountIs + comaCount);
    let underscoreCount = countDelimiterInString(inputData, bas.cUnderscore);
    loggers.consoleLog(namespacePrefix + functionName, msg.cunderscoreCountIs + underscoreCount);
    if (camelCaseWordCount > 0 && containsAcronym === false && spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0) {
      returnData = sys.cCamelCase;
    // We haven't hit the case yet where we need to differenciate between all these extra cases, and there are several of them.
    // We could have multiple acronyms in a word, or in multiple words that are camelCase.
    // Each of these could be a really complex special case. If we get to that point we will handle those cases on a case by case basis to improve the algorithm.
    // } else if (camelCaseWordCount > 1 && containsAcronym === false)
    } else if (spacesCount > 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0) {
      returnData = bas.cSpace;
    } else if (spacesCount === 0 && periodCount > 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0) {
      returnData = bas.cDot;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount > 0 && comaCount === 0 && underscoreCount === 0) {
      returnData = bas.cDash;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount > 0 && underscoreCount === 0) {
      returnData = bas.cComa;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount > 0) {
      returnData = bas.cUnderscore;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
      loggers.consoleLog(namespacePrefix + functionName, msg.cDetermineWordDelimiterMessage1 + msg.cDetermineWordDelimiterMessage2 +
        msg.cDetermineWordDelimiterMessage3 + msg.cDetermineWordDelimiterMessage4);
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetWordCountInString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let wordDelimiter = determineWordDelimiter(inputData, inputMetaData);
    if (wordDelimiter === sys.cCamelCase) {
      returnData = countCamelCaseWords(inputData, '');
    } else if (wordDelimiter != '') {
      returnData = inputData.split(wordDelimiter).length;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
      loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordCountInStringMessage1 + msg.cGetWordCountInStringMessage2 + msg.cGetWordCountInStringMessage3);
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdoesStringContainUpperCaseCharacter;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdoesStringContainLowerCaseCharacter;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisFirstCharacterLowerCase;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisFirstCharacterUpperCase;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisStringList;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let primaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cPrimaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cTertiaryCommandDelimiter);
    if (inputData.includes(primaryCommandDelimiter) === true ||
    inputData.includes(secondaryCommandDelimiter) === true ||
    inputData.includes(tertiaryCommandDelimiter) === true) {
      returnData = true;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisStringCamelCase;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
          if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            // Found an upper case letter, ensure the next letter is lower case.
            foundFirstCapitalLetter = true;
          }
        } else if (foundFirstCapitalLetter === true) {
          if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            returnData = true;
            break; // Sufficent evidence to prove this is a camel case string.
          }
        }
      } // End of the for-loop iterating over the characters in the string.
    } // End-if conditions on upperCase & lowerCase.
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cmapWordToCamelCaseWord;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData.replace(/^./, character => character.toUpperCase());
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.csimplifyAndConsolidateString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param {string} inputData The first string to be compared.
 * @param {string} inputMetaData The second string to be compared.
 * @return {boolean} A Boolean value to indicate if the strings are virtually identical or not.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const compareSimplifiedAndConsolidatedStrings = function(inputData, inputMetaData) {
  let functionName = biz.ccompareSimplifiedAndConsolidatedStrings;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    returnData = simplifyAndConsolidateString(inputData, '') === simplifyAndConsolidateString(inputMetaData, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cascertainMatchingFilenames;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    if (path.basename(inputData) === path.basename(inputMetaData)) {
      // Filenames match
      loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesMatch);
      returnData = true;
    } else {
      // Filenames do not match
      loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesDoNotMatch);
      returnData = false;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cvalidateConstantsDataValidation;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false; // Set it to false and we will prove if it should be true.
  let foundAFailure = false;
  if (inputData && inputMetaData) {
    const liner = new lineByLine(inputData);
    let line;
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableColorizedConsoleLogs);

    while (line = liner.next()) {
      // console.log('namespacePrefix is: ' + namespacePrefix);
      // console.log('functionName is: ' + functionName);
      loggers.consoleLog(namespacePrefix + functionName, 'constants line is: ' + line.toString(gen.cascii));
      let lineInCode = line.toString(gen.cascii);
      let foundConstant = false;
      if (lineInCode.includes(sys.cexportconst) === true) {
        let lineArray = lineInCode.split(bas.cSpace);
        // lineArray[2] is:
        loggers.consoleLog(namespacePrefix + functionName, msg.clineArray2Is + lineArray[2]);
        foundConstant = validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
        let qualifiedConstantsFilename = getFileNameFromPath(inputData, '');
        if (foundConstant === true) {
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true) {
            let passMessage = wrd.cPASS + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + passMessage);
          }
        } else {
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationFailMessages) === true) {
            let failMessage = wrd.cFAIL + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              failMessage = chalk.rgb(0,0,0)(failMessage);
              failMessage = chalk.bgRgb(255,0,0)(failMessage);
            }
            let qualifiedConstantsPrefix = determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + failMessage);
            // loggers.consoleLog(namespacePrefix + functionName, wrd.cFAIL + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL);
            // TODO: Make sure we craft a message for what the constant should be added to the constants validation data file.
            let suggestedLineOfCode = determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
            if (suggestedLineOfCode !== '') {
              if (colorizeLogsEnabled === true) {
                suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
                suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
              }
              // Suggested line of code is:
              console.log(msg.cSuggestedLineOfCodeIs + suggestedLineOfCode);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdetermineConstantsContextQualifiedPrefix;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let inputDataAsArray = inputData.split(bas.cDot);
    let constantsFileNames = D[sys.cConstantsValidationData][sys.cConstantsFileNames];
    let constantsShortNames = D[sys.cConstantsValidationData][sys.cConstantsShortNames];
    for (let key in constantsFileNames) {
      if (inputData === constantsFileNames[key]) {
        returnData = constantsShortNames[key];
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdetermineSuggestedConstantsValidationLineOfCode;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    returnData = inputData;
    // Input: cZZTopIntentionalFailure
    // Output: {Name: 'cZZTopIntentionalFailure', Actual: wrd.cZZTopIntentionalFailure, Expected: 'ZZTopIntentionalFailure'}
    if (inputData.charAt(0) === bas.cc) {
      let literalValue = inputData.substr(1);
      // `{Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
      returnData = bas.cOpenCurlyBrace + wrd.cName + bas.cColon + bas.cSpace + bas.cSingleQuote + inputData + bas.cSingleQuote + bas.cComa + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace + inputMetaData +
      bas.cDot + inputData + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + bas.cSingleQuote + literalValue + bas.cSingleQuote + bas.cCloseCurlyBrace;
    } else {
      // 'ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.'
      console.log(msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constant definition can be found, or not found.
 * @param {string} inputData The constant definition that should be searched for.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2020/07/28
 */
export const validateConstantsDataValidationLineItemName = function(inputData, inputMetaData) {
  let functionName = biz.cvalidateConstantsDataValidationLineItemName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < D[sys.cConstantsValidationData][inputMetaData].length; i++) {
      let validationLineItem = D[sys.cConstantsValidationData][inputMetaData][i];
      if (validationLineItem) {
        if (inputData === validationLineItem.Name) {
          returnData = true;
          break;
        }
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cdoesConstantExist;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = true;
          break loop1;
        }
      } // for-loop j-th iterator.
    } // for-loop i-th iterator.
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetConstantType;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          if (returnData === '') {
            returnData = constantTypeKey;
            // NOTE: This is our first discovered match. Check the inputMetaData to see if we should exit or continue searching?
            if (inputMetaData === true) {
              // We are doing it this way so we can re-use this function as part of the optimized constants fulfillment system algorithm.
              break loop1;
            }
          } else {
            returnData = returnData + bas.cComa + constantTypeKey;
          }
        }
      } // for-loop j-th iterator.
    } // for-loop i-th iterator.
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetConstantActualValue;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (isConstantTypeValid(inputMetaData, '') === true) {
      let constantTypeValues1 = D[sys.cConstantsValidationData][inputMetaData];
      // 1 constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues1));
      let constantsKeys1 = Object.keys(constantTypeValues1);
      // 1 constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys1));
loop1:
      for (let i = 0; i < constantsKeys1.length; i++) {
        let constantKey1 = constantsKeys1[i];
        // 1 constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey1));
        let constantActualValue1 = constantTypeValues1[constantKey1];
        // 1 constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
        if (inputData === constantActualValue1.Name) {
          returnData = constantActualValue1.Actual;
        }
      } // for-loop j-th iterator.
    } else {
      let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
      // constantsTypesKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop2:
      for (let j = 0; j < constantsTypesKeys.length; j++) {
        let constantTypeKey = constantsTypesKeys[j];
        // constantTypeKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
        let constantTypeValues2 = D[sys.cConstantsValidationData][constantTypeKey];
        // 2 constantTypeValues is:
        loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues2));
        let constantsKeys2 = Object.keys(constantTypeValues2);
        // 2 constantsKeys is:
        loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys2));
loop3:
        for (let k = 0; k < constantsKeys2.length; k++) {
          let constantKey2 = constantsKeys2[k];
          // 2 constantKey is:
          loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey2));
          let constantActualValue1 = constantTypeValues2[constantKey2];
          // 1 constantActualValue is:
          loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
          if (inputData === constantActualValue1.Name) {
            returnData = constantActualValue1.Actual;
          }
        } // for-loop j-th iterator.
      } // for-loop i-th iterator.
    } // else clause for the case that inputMetaData did not match a valid constant type in the system.
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetConstantName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = constantActualValue.Name;
          break loop1;
        }
      } // for-loop j-th iterator.
    } // for-loop i-th iterator.
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cfindConstantName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.includes(bas.cDot)) {
      returnData = inputData.substr(inputData.lastIndexOf(bas.cDot) + 1, inputData.length);
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisConstantTypeValid;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsShortNames = D[sys.cConstantsValidationData][sys.cConstantsShortNames];
    for (let key in constantsShortNames) {
      if (inputData === key || inputData === constantsShortNames[key]) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cconvertConstantTypeToConstantPrefix;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let constantsPrefixData = D[sys.cConstantsValidationData][sys.cConstantsPrefix];
    for (let key in constantsPrefixData) {
      if (inputData === key) {
        returnData = constantsPrefixData[key];
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cconstantsOptimizedFulfillmentSystem;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cconstantsFulfillmentSystem;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantName = '';
  let constantType = '';
  if (inputData) {
    returnData = constantsOptimizedFulfillmentSystem(inputData, '');
    // We found the first part of the string, now lets continue processing the rest of the string!
    // First determine how many characters are being returned so we can determine what portion of the string we need to continue processing with.
    constantName = findConstantName(returnData, '');
    // constantName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNameIs + constantName);
    let constantValue = getConstantActualValue(constantName, '');
    // constantValue is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValueIs + constantValue);

    let deltaLength = inputData.length - constantValue.length;
    // deltaLength is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaLengthIs + deltaLength);
    if (deltaLength != 0) {
      let recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length);
      // recursiveSubString is:
      loggers.consoleLog(namespacePrefix + functionName, msg.crecursiveSubStringIs + recursiveSubString);
      returnData = returnData + bas.cSpace + bas.cPlus + bas.cSpace + constantsFulfillmentSystem(recursiveSubString, inputData);
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cvalidateConstantsDataValues;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let passMessage = '';
  if (inputData) {
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableColorizedConsoleLogs);
    for (let i = 0; i < D[sys.cConstantsValidationData][inputData].length; i++) {
      passMessage = '';
      let validationLineItem = D[sys.cConstantsValidationData][inputData][i];
      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = wrd.cPASS + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(passMessage);
          }
        } else {
          returnData = false;
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(255,0,0)(passMessage);
            }
            console.log(passMessage);
          }
        }
      } else {
        // `FAIL -- ${inputData} -- FAIL`
        passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(255,0,0)(passMessage);
        }
        console.log(passMessage);
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisValidCommandNameString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    // NOTE: The below call to convert the string to a camel-case array doesn't garantee that the string is actually camel-case.
    // It could actually be a single word, but of course we want to make sure it's more than 3 characters long.
    // Less than that, shouldn't really be considered a valid word, but could be appropriate as a command alias/abreviation.
    if (inputData.length > 3) {
      let camelCaseArray = aryParse.convertCamelCaseStringToArray(inputData, '');
      if (camelCaseArray.length === 1) {
        if (isFirstCharacterLowerCase(inputData) === true) { returnData = true; }
      } else if (camelCaseArray.length > 1) {
        if (isStringCamelCase(inputData, '') === true) { returnData = true; }
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisConstantValid;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.ccountDuplicateCommandAliases;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = 0;
  if (inputData && inputMetaData) {
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableColorizedConsoleLogs);
loop1:
    for (let i = 0; i < inputMetaData.length; i++) {
      // BEGIN i-th loop:
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithLoop + i);
      let currentCommand = inputMetaData[i];
      // currentCommand is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
      let aliasList = currentCommand[wrd.cAliases];
      // aliasList is:
      loggers.consoleLog(namespacePrefix + functionName, msg.caliasListIs + aliasList);
      let arrayOfAliases = aliasList.split(bas.cComa);
loop2:
      for (let j = 0; j < arrayOfAliases.length; j++) {
        // BEGIN j-th loop:
        loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_jthLoop + j);
        let currentAlias = arrayOfAliases[j];
        // currentAlias is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentAliasIs + currentAlias);
        if (currentAlias === inputData) {
          returnData = returnData + 1;
        }
        // duplicateAliasCount is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cduplicateAliasCountIs + returnData);
        // END j-th loop:
        loggers.consoleLog(namespacePrefix + functionName, msg.cEND_jthLoop + j);
      }
      // END i-th loop:
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithLoop + i);
    }
  }
  if (returnData > 1) {
    // duplicateAliasCount is:
    let duplicateAliasCountMessage = msg.cduplicateAliasCountIs + returnData;
    if (colorizeLogsEnabled === true) {
      duplicateAliasCountMessage = chalk.rgb(0,0,0)(duplicateAliasCountMessage);
      duplicateAliasCountMessage = chalk.bgRgb(255,0,0)(duplicateAliasCountMessage);
    }
    console.log(duplicateAliasCountMessage);
    // duplicate command alias is:
    let duplicateAliasCommandMessage = msg.cduplicateCommandAliasIs + inputData;
    if (colorizeLogsEnabled === true) {
      duplicateAliasCommandMessage = chalk.rgb(0,0,0)(duplicateAliasCommandMessage);
      duplicateAliasCommandMessage = chalk.bgRgb(255,0,0)(duplicateAliasCommandMessage);
    }
    console.log(duplicateAliasCommandMessage);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetDataCatagoryFromDataContextName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagory = inputData.split(bas.cUnderscore);
    returnData = dataCatagory[0];
    // Data Catagory should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDataCatagoryShouldBe + dataCatagory[0]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetDataCatagoryDetailNameFromDataContextName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryDetailName = inputData.split(bas.cUnderscore);
    returnData = dataCatagoryDetailName[1];
    // Data Catagory Detail Name should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDataCatagoryDetailNameShouldBe + dataCatagoryDetailName[1]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetKeywordNameFromDataContextName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryKeywordName = inputData.split(bas.cUnderscore);
    returnData = dataCatagoryKeywordName[2];
    // Keyword Name should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cKeywordNameShouldBe + dataCatagoryKeywordName[2]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cparseSystemRootPath;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let applicationName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    let pathElements = inputData.split(bas.cBackSlash);
    loop1:
      for (let i = 0; i < pathElements.length; i++) {
        // console.log('BEGIN iteration i: ' + i);
        // BEGIN i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
        let pathElement = pathElements[i];
        // console.log('pathElement is ' + pathElement);
        // pathElement is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cpathElementIs + pathElement);
        if (i === 0) {
          // console.log('case: i = 0');
          // case: i = 0
          loggers.consoleLog(namespacePrefix + functionName, msg.ccaseIEqual0);
          returnData = pathElement;
        } else if (pathElement === applicationName) {
          // console.log('case: pathElement = ' + sys.cCAFfeinated);
          // case: pathElement =
          loggers.consoleLog(namespacePrefix + functionName, msg.ccasePathElementEqual + applicationName);
          returnData = returnData + bas.cBackSlash + pathElement + bas.cBackSlash;
          break loop1;
        } else {
          // console.log('case else');
          // case else
          loggers.consoleLog(namespacePrefix + functionName, msg.ccaseElse);
          returnData = returnData + bas.cBackSlash + pathElement;
        }
        // console.log('returnData so far is: ' + returnData);
        // console.log('END iteration i: ' + i);
        // returnData so far is:
        loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataSoFarIs + returnData);
        // END i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
      }
    returnData = swapDoubleBackSlashToSingleBackSlash(returnData, '');
    returnData = swapBackSlashToForwardSlash(returnData, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  // let functionName = biz.creplaceDoublePercentWithMessage;
  // loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData.replace(bas.cDoublePercent, inputMetaData);
  }
  // loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cremoveXnumberOfFoldersFromEndOfPath;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && math.isNumeric(inputMetaData) === true) {
    let pathArray;
    let pathAsForwardSlash;
    if (inputData.includes(bas.cForwardSlash) === true) {
      pathArray = inputData.split(bas.cForwardSlash);
      pathAsForwardSlash = true;
    } else if (inputData.includes(bas.cBackSlash) === true) {
      pathArray = inputData.split(bas.cBackSlash);
      pathAsForwardSlash = false
    } else {
      pathAsForwardSlash = false;
      returnData = false;
    }
    if (returnData !== false) {
      // pathArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpathArrayIs + JSON.stringify(pathArray));
      for (let i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
        // current path element is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentPathElementIs + pathArray[i]);
        if (i === 0) {
            returnData = pathArray[i];
        } else {
          if (pathAsForwardSlash === true) {
            returnData = returnData + bas.cForwardSlash + pathArray[i];
          } else if (pathAsForwardSlash === false) {
            returnData = returnData + bas.cBackSlash + pathArray[i];
          } else {
            returnData = false;
            break;
          }
        } // END else case
      } // END for-loop
      // We still need a trailing slash
      if (pathAsForwardSlash === true) {
        returnData = returnData + bas.cForwardSlash;
      } else if (pathAsForwardSlash === false) {
        returnData = returnData + bas.cBackSlash;
      } else {
        returnData = false;
      }
    } // END returnData !== false
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetFirstTopLevelFolderFromPath;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let pathArray;
    if (inputData.includes(bas.cForwardSlash) === true) {
      pathArray = inputData.split(bas.cForwardSlash);
    } else if (inputData.includes(bas.cBackSlash) === true) {
      pathArray = inputData.split(bas.cBackSlash);
    } else {
      returnData = false;
    }
    if (returnData !== false) {
      // console.log('pathArray is: ' + JSON.stringify(pathArray));
      // pathArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpathArrayIs + JSON.stringify(pathArray));
      returnData = pathArray[pathArray.length - 2];
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.getFirstTopLevelFolderFromPath function');
  return returnData;
};

/**
 * @function loadDataFile
 * @description Loads data from a specified file and stores it in the specified data hive path.
 * @param {string} inputData The full path and file name for the file that should be loaded into memory.
 * @param {string} inputMetaData The data hive path where the data should be stored once it is loaded.
 * @return {boolean} A True or False to indicate if the data file was loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */
export const loadDataFile = function(inputData, inputMetaData) {
  let functionName = biz.cloadDataFile;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    // WARNING: No data to load, please specify a valid path & filename!
    loggers.consoleLog(namespacePrefix + functionName, msg.cLoadDataFileMessage1 + msg.cLoadDataFileMessage2);
    returnData = false;
  } else {
    let loadedData = {};
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // Attempting to load XML data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadXmlData);
      loadedData = fileBroker.getXmlData(inputData);
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // Attempting to load CSV data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadCsvData);
      loadedData = fileBroker.getCsvData(inputData);
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      // Attempting to load JSON data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadJsonData);
      loadedData = fileBroker.getJsonData(inputData);
    } else {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadDataFileMessage3 + supportedFileFormatsAre());
    }
    // Loaded data is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cLoadedDataIs + JSON.stringify(loadedData));
    if (loadedData !== null && loadedData) {
      returnData = true;
      dataBroker.storeData(inputMetaData, loadedData);
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.csupportedFileFormatsAre;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  // NOTE: In the future it might be better to store this data in a configuration setting so it's easier to update.
  // This this function could just look up that data and return it as a list.
  let returnData = gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetAttributeName;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + JSON.stringify(attributeArray));
    // attributeArray[0] is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray0Is + attributeArray[0]);
    returnData = aryParse.replaceCharacterWithCharacter(attributeArray[0], [/"/g, '']);
    returnData = returnData.trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cgetAttributeValue;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + attributeArray);
    // attributeArray[0] is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray1Is + attributeArray[1]);
    returnData = aryParse.replaceCharacterWithCharacter(attributeArray[1], [/"/g, '']);
    returnData = returnData.trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisOdd;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.cisEven;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.ccleanCommandInput;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/--/g, '']);
    returnData = aryParse.replaceCharacterWithCharacter(returnData, [/\[/g, '']);
    returnData = aryParse.replaceCharacterWithCharacter(returnData, [/\]/g, '']);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = biz.creplaceCharacterAtIndexOfString;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // originalString is:
  loggers.consoleLog(namespacePrefix + functionName, msg.coriginalStringIs + originalString);
  // index is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cindexIs + index);
  // replacement is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creplacementIs + replacement);
  let returnData;
  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
