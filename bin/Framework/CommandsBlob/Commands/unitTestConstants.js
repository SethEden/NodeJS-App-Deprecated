"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateConstants = void 0;

var _configurator = _interopRequireDefault(require("../../Executrix/configurator"));

var _ruleBroker = _interopRequireDefault(require("../../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
* @file nominal.js
* @module nominal
* @description Contains all of the commands to validate constants.
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

  var basicConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cbasic_constants_js, s.cBasicConstantsValidation, rulesPhase1);

  var colorConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.ccolor_constants_js, s.cColorConstantsValidation, rulesPhase1);

  var elementConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.celement_constants_js, s.cElementConstantsValidation, rulesPhase1);

  var genericConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cgeneric_constants_js, s.cGenericConstantsValidation, rulesPhase1);

  var isotopeConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cisotope_constants_js, s.cIsotopeConstantsValidation, rulesPhase1);

  var numericConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cnumeric_constants_js, s.cNumericConstantsValidation, rulesPhase1);

  var phonicsConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cphonics_constants_js, s.cPhonicsConstantsValidation, rulesPhase1);

  var shapeConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cshape_constants_js, s.cShapeConstantsValidation, rulesPhase1);

  var systemConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.csystem_constants_js, s.cSystemConstantsValidation, rulesPhase1);

  var unitsConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cunits_constants_js, s.cUnitsConstantsValidation, rulesPhase1);

  var wordConstantsValidationPhase1Result = _ruleBroker["default"].processRules(constantsPath + s.cword_constants_js, s.cWordConstantsValidation, rulesPhase1);

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

exports.validateConstants = validateConstants;