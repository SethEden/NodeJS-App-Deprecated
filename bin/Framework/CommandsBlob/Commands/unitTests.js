"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCommandAliases = exports.validateConstants = void 0;

var _configurator = _interopRequireDefault(require("../../Executrix/configurator"));

var _ruleBroker = _interopRequireDefault(require("../../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var bas = _interopRequireWildcard(require("../../Constants/basic.constants"));

var wrd = _interopRequireWildcard(require("../../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../../Constants/system.constants"));

var biz = _interopRequireWildcard(require("../../Constants/business.constants"));

var cmd = _interopRequireWildcard(require("../../Constants/command.constants"));

var cfg = _interopRequireWildcard(require("../../Constants/configuration.constants"));

var msg = _interopRequireWildcard(require("../../Constants/message.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
* @file unitTests.js
* @module unitTests
* @description Contains all of the commands to validate various components of the system.
* @requires module:configurator
* @requires module:ruleBroker
* @requires module:loggers
* @requires module:basic-constants
* @requires module:word-constants
* @requires module:system-constants
* @requires module:business-constants
* @requires module:command-constants
* @requires module:message-constants
* @requires {@link https://www.npmjs.com/package/path|path}
* @requires module:data
* @author Seth Hollingsead
* @date 2020/07/17
* @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
*/
var path = require('path');

var D = require('../../../Framework/Structures/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function validateConstants
 * @description Validates all constants with a 2-phase verification process.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/09/11
 */

var validateConstants = function validateConstants(inputData, inputMetaData) {
  var functionName = cmd.cvalidateConstants;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData); // Get the array of keys and values for all the constants that need to be validated.


  var validationArray = D[sys.cConstantsValidationData][sys.cConstantsFilePaths]; // This will return an object with all the key-value pair attributes we need.

  var phase1FinalResult = true;
  var phase2FinalResult = true;
  var phase1ResultsArray = {};
  var phase2ResultsArray = {};
  var rulesPhase1 = [];
  var rulesPhase2 = [];
  rulesPhase1[0] = biz.cvalidateConstantsDataValidation;
  rulesPhase2[0] = biz.cvalidateConstantsDataValues; // Phase 1 Constants Validation
  // BEGIN Phase 1 Constants Validation

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase1ConstantsValidation); // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.


  for (var key1 in validationArray) {
    var _path = validationArray[key1];
    phase1ResultsArray[key1] = _ruleBroker["default"].processRules(_path, key1, rulesPhase1);
  } // END Phase 1 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase1ConstantsValidation); // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase2ConstantsValidation); // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.


  for (var key2 in validationArray) {
    phase2ResultsArray[key2] = _ruleBroker["default"].processRules(key2, '', rulesPhase2);
  } // END Phase 2 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase2ConstantsValidation);

  for (var key3 in phase1ResultsArray) {
    _loggers["default"].constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][key3], phase1ResultsArray[key3]);
  }

  for (var key4 in phase2ResultsArray) {
    _loggers["default"].constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][key4], phase2ResultsArray[key4]);
  }

  for (var key5 in phase1ResultsArray) {
    if (phase1ResultsArray[key5] === false) {
      phase1FinalResult = false;
      break;
    }
  }

  for (var key6 in phase2ResultsArray) {
    if (phase2ResultsArray[key6] === false) {
      phase2FinalResult = false;
      break;
    }
  }

  if (phase1FinalResult === true && phase2FinalResult === true) {
    _configurator["default"].setConfigurationSetting(cfg.cPassAllConstantsValidations, true);
  } else {
    _configurator["default"].setConfigurationSetting(cfg.cPassAllConstantsValidations, false);
  }

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
};
/**
 * @function validateCommandAliases
 * @description VAlidates all command aliases have no duplicates within a command, but also between commands.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/10/01
 */


exports.validateConstants = validateConstants;

var validateCommandAliases = function validateCommandAliases(inputData, inputMetaData) {
  var functionName = cmd.cvalidateCommandAliases;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);

  var allCommandAliases = D[sys.cCommandsAliases][wrd.cCommand];
  var passedAllCommandAliasesDuplicateCheck = true;
  var rules = [];
  rules[0] = biz.ccountDuplicateCommandAliases;

  loop1: for (var i = 0; i < allCommandAliases.length; i++) {
    // BEGIN i-th loop:
    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_ithLoop + i);

    var currentCommand = allCommandAliases[i]; // currentCommand is:

    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));

    var aliasList = currentCommand[wrd.cAliases]; // aliasList is:

    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.caliasListIs + aliasList);

    var arrayOfAliases = aliasList.split(bas.cComa);

    loop2: for (var j = 0; j < arrayOfAliases.length; j++) {
      // BEGIN j-th loop:
      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_jthLoop + i);

      var currentAlias = arrayOfAliases[j]; // currentAlias is:

      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.ccurrentAliasIs + currentAlias);

      var duplicateAliasCount = _ruleBroker["default"].processRules(currentAlias, allCommandAliases, rules);

      if (duplicateAliasCount > 1) {
        passedAllCommandAliasesDuplicateCheck = false;
      } // END j-th loop:


      _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_jthLoop + i);
    } // END i-th loop:


    _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_ithLoop + i);
  }

  if (passedAllCommandAliasesDuplicateCheck === true) {
    // PASSED: All duplicate command aliases validation tests!
    console.log(msg.cvalidateCommandAliasesMessage1);
  }

  _configurator["default"].setConfigurationSetting(cfg.cPassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
};

exports.validateCommandAliases = validateCommandAliases;