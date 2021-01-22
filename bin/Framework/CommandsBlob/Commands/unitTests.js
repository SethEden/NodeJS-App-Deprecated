"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCommandAliases = exports.validateConstants = void 0;

var _configurator = _interopRequireDefault(require("../../Executrix/configurator"));

var _ruleBroker = _interopRequireDefault(require("../../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var p = _interopRequireWildcard(require("../../Constants/phonics.constants"));

var w = _interopRequireWildcard(require("../../Constants/word.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

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
* @requires module:system-constants
* @requires {@link https://www.npmjs.com/package/path|path}
* @requires module:data
* @author Seth Hollingsead
* @date 2020/07/17
* @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
*/
var path = require('path');

var D = require('../../../Framework/Resources/data');

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
  var functionName = s.cvalidateConstants;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData); // Phase 1 Constants Validation


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN Phase 1 Constants Validation'); // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.


  var constantsPath = _configurator["default"].getConfigurationSetting(s.cConstantsPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'constantsPath is: ' + constantsPath);

  var rulesPhase1 = [];
  var rulesPhase2 = [];
  rulesPhase1[0] = s.cvalidateConstantsDataValidation;
  rulesPhase2[0] = s.cvalidateConstantsDataValues;
  var resolvedConstantsPath_Basic = path.resolve(constantsPath + b.cForwardSlash + s.cbasic_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Basic is: ' + resolvedConstantsPath_Basic);

  var resolvedConstantsPath_Color = path.resolve(constantsPath + b.cForwardSlash + s.ccolor_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Color is: ' + resolvedConstantsPath_Color);

  var resolvedConstantsPath_Element = path.resolve(constantsPath + b.cForwardSlash + s.celement_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Element is: ' + resolvedConstantsPath_Element);

  var resolvedConstantsPath_Generic = path.resolve(constantsPath + b.cForwardSlash + s.cgeneric_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Generic is: ' + resolvedConstantsPath_Generic);

  var resolvedConstantsPath_Isotope = path.resolve(constantsPath + b.cForwardSlash + s.cisotope_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Isotope is: ' + resolvedConstantsPath_Isotope);

  var resolvedConstantsPath_Numeric = path.resolve(constantsPath + b.cForwardSlash + s.cnumeric_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Numeric is: ' + resolvedConstantsPath_Numeric);

  var resolvedConstantsPath_Phonics = path.resolve(constantsPath + b.cForwardSlash + s.cphonics_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Phonics is: ' + resolvedConstantsPath_Phonics);

  var resolvedConstantsPath_Shape = path.resolve(constantsPath + b.cForwardSlash + s.cshape_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Shape is: ' + resolvedConstantsPath_Shape);

  var resolvedConstantsPath_System = path.resolve(constantsPath + b.cForwardSlash + s.csystem_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_System is: ' + resolvedConstantsPath_System);

  var resolvedConstantsPath_Units = path.resolve(constantsPath + b.cForwardSlash + s.cunits_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Units is: ' + resolvedConstantsPath_Units);

  var resolvedConstantsPath_Words = path.resolve(constantsPath + b.cForwardSlash + s.cword_constants_js);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Words is: ' + resolvedConstantsPath_Words);

  var basicConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Basic, s.cBasicConstantsValidation, rulesPhase1);

  var colorConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Color, s.cColorConstantsValidation, rulesPhase1);

  var elementConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Element, s.cElementConstantsValidation, rulesPhase1);

  var genericConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Generic, s.cGenericConstantsValidation, rulesPhase1);

  var isotopeConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Isotope, s.cIsotopeConstantsValidation, rulesPhase1);

  var numericConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Numeric, s.cNumericConstantsValidation, rulesPhase1);

  var phonicsConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Phonics, s.cPhonicsConstantsValidation, rulesPhase1);

  var shapeConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Shape, s.cShapeConstantsValidation, rulesPhase1);

  var systemConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_System, s.cSystemConstantsValidation, rulesPhase1);

  var unitsConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Units, s.cUnitsConstantsValidation, rulesPhase1);

  var wordConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Words, s.cWordConstantsValidation, rulesPhase1);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'END Phase 1 Constants Validation'); // Phase 2 Constants Validation


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN Phase 2 Constants Validation'); // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.


  var basicConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cBasicConstantsValidation, '', rulesPhase2);

  var colorConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cColorConstantsValidation, '', rulesPhase2);

  var elementConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cElementConstantsValidation, '', rulesPhase2);

  var genericConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cGenericConstantsValidation, '', rulesPhase2);

  var isotopeConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cIsotopeConstantsValidation, '', rulesPhase2);

  var numericConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cNumericConstantsValidation, '', rulesPhase2);

  var phonicsConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cPhonicsConstantsValidation, '', rulesPhase2);

  var shapeConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cShapeConstantsValidation, '', rulesPhase2);

  var systemConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cSystemConstantsValidation, '', rulesPhase2);

  var unitsConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cUnitsConstantsValidation, '', rulesPhase2);

  var wordConstantsValidationPhase2Result = _ruleBroker["default"].processRules(s.cWordConstantsValidation, '', rulesPhase2);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'END Phase 2 Constants Validation');

  _loggers["default"].constantsValidationSummaryLog('Basic Constants Phase 1 Validation', basicConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Color Constants Phase 1 Validation', colorConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Element Constants Phase 1 Validation', elementConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Generic Constants Phase 1 Validation', genericConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Isotope Constants Phase 1 Validation', isotopeConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Numerical Constants Phase 1 Validation', numericConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Phonics Constants Phase 1 Validation', phonicsConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Shape Constants Phase 1 Validation', shapeConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('System Constants Phase 1 Validation', systemConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Units Constants Phase 1 Validation', unitsConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Word Constants Phase 1 Validation', wordConstantsValidationPhase1Result);

  _loggers["default"].constantsValidationSummaryLog('Basic Constants Phase 2 Validation', basicConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Color Constants Phase 2 Validation', colorConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Element Constants Phase 2 Validation', elementConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Generic Constants Phase 2 Validation', genericConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Isotope Constants Phase 2 Validation', isotopeConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Numerical Constants Phase 2 Validation', numericConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Phonics Constants Phase 2 Validation', phonicsConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Shape Constants Phase 2 Validation', shapeConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('System Constants Phase 2 Validation', systemConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Units Constants Phase 2 Validation', unitsConstantsValidationPhase2Result);

  _loggers["default"].constantsValidationSummaryLog('Word Constants Phase 2 Validation', wordConstantsValidationPhase2Result);

  if (basicConstantsValidationPhase1Result === true && colorConstantsValidationPhase1Result === true && elementConstantsValidationPhase1Result === true && genericConstantsValidationPhase1Result === true && isotopeConstantsValidationPhase1Result === true && numericConstantsValidationPhase1Result === true && phonicsConstantsValidationPhase1Result === true && shapeConstantsValidationPhase1Result === true && systemConstantsValidationPhase1Result === true && unitsConstantsValidationPhase1Result === true && wordConstantsValidationPhase1Result === true && basicConstantsValidationPhase2Result === true && colorConstantsValidationPhase2Result === true && elementConstantsValidationPhase2Result === true && genericConstantsValidationPhase2Result === true && isotopeConstantsValidationPhase2Result === true && numericConstantsValidationPhase2Result === true && phonicsConstantsValidationPhase2Result === true && shapeConstantsValidationPhase2Result === true && systemConstantsValidationPhase2Result === true && unitsConstantsValidationPhase2Result === true && wordConstantsValidationPhase2Result === true) {
    _configurator["default"].setConfigurationSetting(s.cPassAllConstantsValidations, true);
  } else {
    _configurator["default"].setConfigurationSetting(s.cPassAllConstantsValidations, false);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var functionName = s.cvalidateCommandAliases;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var allCommandAliases = D[s.cCommandsAliases][w.cCommand];
  var passedAllCommandAliasesDuplicateCheck = true;
  var rules = [];
  rules[0] = s.ccountDuplicateCommandAliases;

  loop1: for (var i = 0; i < allCommandAliases.length; i++) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN i-th loop: ' + i);

    var currentCommand = allCommandAliases[i];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentCommand is: ' + JSON.stringify(currentCommand));

    var aliasList = currentCommand[w.cAliases];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'aliasList is: ' + aliasList);

    var arrayOfAliases = aliasList.split(b.cComa);

    loop2: for (var j = 0; j < arrayOfAliases.length; j++) {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN j-th loop: ' + i);

      var currentAlias = arrayOfAliases[j];

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentAlias is: ' + currentAlias);

      var duplicateAliasCount = _ruleBroker["default"].processRules(currentAlias, allCommandAliases, rules);

      if (duplicateAliasCount > 1) {
        passedAllCommandAliasesDuplicateCheck = false;
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'END j-th loop: ' + i);
    }

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'END i-th loop: ' + i);
  }

  if (passedAllCommandAliasesDuplicateCheck === true) {
    console.log('PASSED: All duplicate command aliases validation tests!');
  }

  _configurator["default"].setConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

exports.validateCommandAliases = validateCommandAliases;