"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configurator = _interopRequireDefault(require("./configurator"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("./loggers"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var wrd = _interopRequireWildcard(require("../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var biz = _interopRequireWildcard(require("../Constants/business.constants"));

var cfg = _interopRequireWildcard(require("../Constants/configurations.constants"));

var msg = _interopRequireWildcard(require("../Constants/messages.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file lexical.js
 * @module lexical
 * @description Contains all functions used for parsing command arguments and/or business rule arguments.
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:configurations-constants
 * @requires module:messages-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/026
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function parseBusinessRuleArgument
 * @description parses a single business rule argument and returns it after cleaning it up or
 * doing required operations on it to convert it to valid input for a command as necessary.
 * @param {string|array<string|integer|boolean|object>} argumentValue The value of the argument, could be an array or a string.
 * @param {integer} index The index of the argument (1, 2, 3).
 * @param {boolean} consolidatedArgumentMode A True or False to indicate if the argument should be parsed in consolidated mode or not.
 * If we are in consolidated mode then all of the arguments will have been passed into the argumentValue input parameter.
 * If we are not in consolidated mode then the contents of argumentValue is specific to the argument index that was passed in.
 * This is necessary, because there are cases where we would want to combine all arguments from 2-n into a single array,
 * which will ultimately be passed as input to the business rule.
 * @return {string|array<string|integer|boolean|object>} The value of the argument as it should be passed into the business rule call.
 * @author Seth Hollingsead
 * @date 2020/06/26
 */

function parseBusinessRuleArgument(argumentValue, index, consolidatedArgumentMode) {
  var functionName = parseBusinessRuleArgument.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // argumentValue is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue)); // index is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cindexIs + index); // consolidatedArgumentMode is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cconsolidatedArgumentModeIs + consolidatedArgumentMode);

  var returnData;

  if (index === 1) {
    // Pushing the argumentValue to the returnData as an array element
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cPushingArgumentValueToReturnDataAsArrayElement);

    returnData = [];
    returnData.push(argumentValue);
  } else if (index === 2 && consolidatedArgumentMode === false) {
    // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse);

    returnData = analyzeArgument(argumentValue);
  } else if (index === 2 && consolidatedArgumentMode === true) {
    // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue);

    if (argumentValue.length > 0) {
      returnData = []; // argumentValue.length > 0

      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueLengthGreaterThanZero);

      for (var i = 1; i < argumentValue.length; i++) {
        // Combine all arguments into a single array on the returnData
        returnData.push(argumentValue[i]);
      }
    } else {
      // Return the argumentValue the same as it was passed in.
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cReturnArgumentValueSameAsItWasPassedIn);

      returnData = argumentValue;
    }
  } else if (index === 3 && consolidatedArgumentMode === false) {
    // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse);

    returnData = analyzeArgument(argumentValue);
  } else {
    // WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function! Please adjust inputs and try again.
    console.log(msg.cparseBusinessRuleArgumentMessage1 + msg.cparseBusinessRuleArgumentMessage2);
  }

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function analyzeArgument
 * @description Does additional parsing of an individual argument.
 * Identifies the case that the argument needs to be treated as an array,
 * then the function will clean the array string tags and split the string into an array and return it.
 * This function can also identify the case that an agrument contains a regular expression that must be formally created,
 * using the RegExp constructor, then the RegExp object will be returned as part of the return object.
 * @param {string} argumentValue The argument string that needs additional parsing.
 * @return {string|array<string|integer|boolean|object>} The argument that should be returned and used
 * by the system after all necessary parsing.
 * @author Seth Hollingsead
 * @date 2020/06/26
 */

function analyzeArgument(argumentValue) {
  var functionName = analyzeArgument.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // argumentValue is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));

  var returnData;
  var argsArrayContainsCharacterRule = [];
  var removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;

  var secondaryCommandArgsDelimiter = _configurator["default"].getConfigurationSetting(cfg.cSecondaryCommandDelimiter);

  if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
    // Check if there are brackets or no brackets.
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cCheckIfThereAreBracketsOrNoBrackets);

    var argsArrayContainsOpenBracket = _ruleBroker["default"].processRules(bas.cOpenBracket, argumentValue, argsArrayContainsCharacterRule);

    var argsArrayContainsCloseBracket = _ruleBroker["default"].processRules(bas.cCloseBracket, argumentValue, argsArrayContainsCharacterRule);

    if (argsArrayContainsOpenBracket === false || argsArrayContainsCloseBracket === false) {
      // Brackets were found
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBracketsWereFound); // Check if there is a Regular Expression or not.


      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);

      if (analyzeForRegularExpression(argumentValue) === true) {
        // A regular expression was found!
        _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cRegularExpressionWasFound);

        returnData = parseArgumentAsRegularExpression(argumentValue);
      } else {
        // No regular expression, just return the argument as it was passed in, no additional processing required.
        // NO RegExp found!
        _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cNoRegExpFound);

        returnData = argumentValue;
      }
    } else {
      // There are Brackets, so treat the argument as an array.
      // Brackets ARE found!
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBracketsAreFound);

      returnData = parseArgumentAsArray(argumentValue);
    }
  } else {
    // The argumentValue does not contain a secondaryCommandArgsDelimiter
    // NO secondary command argument delimiters.
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cNoSecondaryCommandArgumentDelimiters); // Check if there is any regular expression or no regular expression
    // Check if there is a Regular Expression or not.


    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);

    if (analyzeForRegularExpression(argumentValue) === true) {
      // A regular expression was found!
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cRegularExpressionWasFound);

      returnData = parseArgumentAsRegularExpression(argumentValue);
    } else {
      // No regular expression, just return the argument as it was passed in, no additional processing required.
      // NO RegExp found!
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cNoRegExpFound);

      returnData = argumentValue;
    }
  }

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function analyzeForRegularExpression
 * @description Analyzes the argument value to determine if it includes a regular expression or no regular expression.
 * @param {string} argumentValue The business rule argument that should be analyzed to determine if it includes a regular expression or no regular expression.
 * @return {boolean} True or False to indicate if the argument contains a regular expression or no regular expression.
 * @author Seth Hollingsead
 * @date 2020/06/26
 */

function analyzeForRegularExpression(argumentValue) {
  var functionName = analyzeForRegularExpression.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // argumentValue is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));

  var returnData = false;
  var argsArrayContainsCharacterRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;

  var argsArrayContainsRegEx1 = _ruleBroker["default"].processRules(wrd.cregEx, argumentValue, argsArrayContainsCharacterRule);

  var argsArrayContainsRegEx2 = _ruleBroker["default"].processRules(wrd.cRegEx, argumentValue, argsArrayContainsCharacterRule);

  var argsArrayContainsColon = _ruleBroker["default"].processRules(bas.cColon, argumentValue, argsArrayContainsCharacterRule);

  if ((argsArrayContainsRegEx1 === true || argsArrayContainsRegEx2 === true) && argsArrayContainsColon === true) {
    returnData = true;
  }

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function parseArgumentAsRegularExpression
 * @description Parses the argument as a regular expression and returns a new RegExp object.
 * @param {string} argumentValue The argument string that should be parsed as a RegExp.
 * @return {object} A RegExp object.
 * @author Seth Hollingsead
 * @date 2020/06/26
 */

function parseArgumentAsRegularExpression(argumentValue) {
  var functionName = parseArgumentAsRegularExpression.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // argumentValue is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));

  var returnData;
  var regExValue, regExFlags;
  var regExArray = argumentValue.split(bas.cColon);

  for (var k = 0; k < regExArray.length; k++) {
    if (regExArray[k] === wrd.cregEx || regExArray[k] === wrd.cRegEx) {
      k++; // regular expression is:

      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cregularExpressionIs + regExArray[k]);

      regExValue = regExArray[k]; // regExValue is:

      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cregExValueIs + regExValue);
    } else if (regExArray[k] === wrd.cflags || regExArray[k] === wrd.cFlags) {
      k++; // regular expression flags are:

      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cregularExpressionFlagsAre + regExArray[k]);

      regExFlags = regExArray[k]; // regExFlags is:

      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cregExFlagsIs + regExFlags);
    }
  }

  var regularExpression = new RegExp(regExValue, regExFlags);
  returnData.push(regularExpression);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function parseArgumentAsArray
 * @description Parses the argument as an array and return the array.
 * @param {string} argumentValue A string that contains an array, we will use the secondary command delimiter to split the array.
 * @return {array<string>} An array of strings.
 * @author Seth Hollingsead
 * @date 2020/06/26
 */

function parseArgumentAsArray(argumentValue) {
  var functionName = parseArgumentAsArray.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // argumentValue is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));

  var returnData;
  var isArray = false;

  var secondaryCommandArgsDelimiter = _configurator["default"].getConfigurationSetting(cfg.cSecondaryCommandDelimiter);

  var argsArrayContainsCharacterRule = [];
  var removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;
  var argsArrayContainsOpenBracket = false;
  var argsArrayContainsCloseBracket = false;

  if (Array.isArray(argumentValue) === true) {
    argsArrayContainsOpenBracket = _ruleBroker["default"].processRules(bas.cOpenBracket, argumentValue, argsArrayContainsCharacterRule);
    argsArrayContainsCloseBracket = _ruleBroker["default"].processRules(bas.cCloseBracket, argumentValue, argsArrayContainsCharacterRule);
    isArray = true;
  } else {
    argsArrayContainsOpenBracket = argumentValue.includes(bas.cOpenBracket);
    argsArrayContainsCloseBracket = argumentValue.includes(bas.cCloseBracket);
    isArray = false;
  }

  if (isArray === false) {
    if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
      // argumentValue contains the delimiter, lets split it!
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueContainsTheDelimiterLetsSplitIt);

      argumentValue = argumentValue.split(secondaryCommandArgsDelimiter);
    }
  }

  if (argsArrayContainsOpenBracket === true) {
    argumentValue = _ruleBroker["default"].processRules(bas.cOpenBracket, argumentValue, removeBracketsFromArgsArrayRule); // argumentValue after attempting to remove a open bracket from all array elements is:

    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
  }

  if (argsArrayContainsCloseBracket === true) {
    argumentValue = _ruleBroker["default"].processRules(bas.cCloseBracket, argumentValue, removeBracketsFromArgsArrayRule); // argumentValue after attempting to remove a close bracket from all array elements is:

    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
  } // secondaryCommandArgsDelimiter is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.csecondaryCommandArgsDelimiterIs + secondaryCommandArgsDelimiter);

  if (isArray === true) {
    if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
      // argumentValue contains the delimiter, lets split it!
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentValueContainsTheDelimiterLetsSplitIt);

      returnData = argumentValue.split(secondaryCommandArgsDelimiter);
    }
  } else {
    returnData = argumentValue;
  }

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function removeStringLiteralTagsFromArray
 * @description Removes all string literal tags from all the argument array elements passed as input to the function.
 * @param {array<string>} argumentArray The argument array that should have the string literal tags removed.
 * The string literal tag is the tilde character.
 * @return {array<string>} The same as the input, but just with the string literal tags removed from all array elements.
 * @author Seth Hollingsead
 * @date 2020/06/28
 */

function removeStringLiteralTagsFromArray(argumentArray) {
  var functionName = parseArgumentAsRegularExpression.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // argumentArray is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cargumentArrayIs + JSON.stringify(argumentArray));

  var returnData;
  var removeCharacterRule = [];
  removeCharacterRule[0] = biz.cremoveCharacterFromArray;
  returnData = _ruleBroker["default"].processRules(bas.cTilde, argumentArray, removeCharacterRule);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return returnData;
}

;
var _default = {
  parseBusinessRuleArgument: parseBusinessRuleArgument,
  removeStringLiteralTagsFromArray: removeStringLiteralTagsFromArray
};
exports["default"] = _default;