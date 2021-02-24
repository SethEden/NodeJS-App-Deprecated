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

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData); // Phase 1 Constants Validation
  // BEGIN Phase 1 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase1ConstantsValidation); // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.


  var constantsPath = _configurator["default"].getConfigurationSetting(sys.cConstantsPath); // constantsPath is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cconstantsPathIs + constantsPath);

  var rulesPhase1 = [];
  var rulesPhase2 = [];
  rulesPhase1[0] = biz.cvalidateConstantsDataValidation;
  rulesPhase2[0] = biz.cvalidateConstantsDataValues;
  var resolvedConstantsPath_Basic = path.resolve(constantsPath + bas.cForwardSlash + sys.cbasic_constants_js); // resolvedConstantsPath_Basic is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_BasicIs + resolvedConstantsPath_Basic);

  var resolvedConstantsPath_Business = path.resolve(constantsPath + bas.cForwardSlash + sys.cbusiness_constants_js); // resolvedConstantsPath_Business is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_BusinessIs + resolvedConstantsPath_Business);

  var resolvedConstantsPath_Color = path.resolve(constantsPath + bas.cForwardSlash + sys.ccolor_constants_js); // resolvedConstantsPath_Color is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ColorIs + resolvedConstantsPath_Color);

  var resolvedConstantsPath_Command = path.resolve(constantsPath + bas.cForwardSlash + sys.ccommand_constants_js); // resolvedConstantsPath_Command is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_CommandIs + resolvedConstantsPath_Command);

  var resolvedConstantsPath_Configuration = path.resolve(constantsPath + bas.cForwardSlash + sys.cconfiguration_constants_js); // resolvedConstantsPath_Configuration is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ConfigurationIs + resolvedConstantsPath_Configuration);

  var resolvedConstantsPath_Country = path.resolve(constantsPath + bas.cForwardSlash + sys.ccountry_constants_js); // resolvedConstantsPath_Country is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_CountryIs + resolvedConstantsPath_Country);

  var resolvedConstantsPath_Element = path.resolve(constantsPath + bas.cForwardSlash + sys.celement_constants_js); // resolvedConstantsPath_Element is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ElementIs + resolvedConstantsPath_Element);

  var resolvedConstantsPath_Generic = path.resolve(constantsPath + bas.cForwardSlash + sys.cgeneric_constants_js); // resolvedConstantsPath_Generic is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_GenericIs + resolvedConstantsPath_Generic);

  var resolvedConstantsPath_Isotope = path.resolve(constantsPath + bas.cForwardSlash + sys.cisotope_constants_js); // resolvedConstantsPath_Isotope is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_IsotopeIs + resolvedConstantsPath_Isotope);

  var resolvedConstantsPath_Knot = path.resolve(constantsPath + bas.cForwardSlash + sys.cknot_constants_js); // resolvedConstantsPath_Knot is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_KnotIs + resolvedConstantsPath_Knot);

  var resolvedConstantsPath_Language = path.resolve(constantsPath + bas.cForwardSlash + sys.clanguage_constants_js); // resolvedConstantsPath_Language is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_LanguagesIs + resolvedConstantsPath_Language);

  var resolvedConstantsPath_Message = path.resolve(constantsPath + bas.cForwardSlash + sys.cmessage_constants_js); // resolvedConstantsPath_Message is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_MessageIs + resolvedConstantsPath_Message);

  var resolvedConstantsPath_Numeric = path.resolve(constantsPath + bas.cForwardSlash + sys.cnumeric_constants_js); // resolvedConstantsPath_Numeric is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_NumericIs + resolvedConstantsPath_Numeric);

  var resolvedConstantsPath_Phonic = path.resolve(constantsPath + bas.cForwardSlash + sys.cphonic_constants_js); // resolvedConstantsPath_Phonic is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_PhonicIs + resolvedConstantsPath_Phonic);

  var resolvedConstantsPath_Shape = path.resolve(constantsPath + bas.cForwardSlash + sys.cshape_constants_js); // resolvedConstantsPath_Shape is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ShapeIs + resolvedConstantsPath_Shape);

  var resolvedConstantsPath_System = path.resolve(constantsPath + bas.cForwardSlash + sys.csystem_constants_js); // resolvedConstantsPath_System is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_SystemIs + resolvedConstantsPath_System);

  var resolvedConstantsPath_Unit = path.resolve(constantsPath + bas.cForwardSlash + sys.cunit_constants_js); // resolvedConstantsPath_Unit is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_UnitIs + resolvedConstantsPath_Unit);

  var resolvedConstantsPath_Word = path.resolve(constantsPath + bas.cForwardSlash + sys.cword_constants_js); // resolvedConstantsPath_Word is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_WordIs + resolvedConstantsPath_Word);

  var basicConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Basic, sys.cBasicConstantsValidation, rulesPhase1);

  var businessConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Business, sys.cBusinessConstantsValidation, rulesPhase1);

  var colorConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Color, sys.cColorConstantsValidation, rulesPhase1);

  var commandConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Command, sys.ccommandConstantsValidation, rulesPhase1);

  var configurationConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Configuration, sys.cconfigurationConstantsValidation, rulesPhase1);

  var countryConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Country, sys.ccountryConstantsValidation, rulesPhase1);

  var elementConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Element, sys.cElementConstantsValidation, rulesPhase1);

  var genericConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Generic, sys.cGenericConstantsValidation, rulesPhase1);

  var isotopeConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Isotope, sys.cIsotopeConstantsValidation, rulesPhase1);

  var knotConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Knot, sys.cknotConstantsValidation, rulesPhase1);

  var languageConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Language, sys.clanguageConstantsValidation, rulesPhase1);

  var messageConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Message, sys.cmessageConstantsValidation, rulesPhase1);

  var numericConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Numeric, sys.cNumericConstantsValidation, rulesPhase1);

  var phonicConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Phonic, sys.cphonicConstantsValidation, rulesPhase1);

  var shapeConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Shape, sys.cShapeConstantsValidation, rulesPhase1);

  var systemConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_System, sys.cSystemConstantsValidation, rulesPhase1);

  var unitConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Unit, sys.cunitConstantsValidation, rulesPhase1);

  var wordConstantsValidationPhase1Result = _ruleBroker["default"].processRules(resolvedConstantsPath_Word, sys.cWordConstantsValidation, rulesPhase1); // END Phase 1 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase1ConstantsValidation); // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase2ConstantsValidation); // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.


  var basicConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cBasicConstantsValidation, '', rulesPhase2);

  var businessConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cBusinessConstantsValidation, '', rulesPhase2);

  var colorConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cColorConstantsValidation, '', rulesPhase2);

  var commandConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.ccommandConstantsValidation, '', rulesPhase2);

  var configurationConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cconfigurationConstantsValidation, '', rulesPhase2);

  var countryConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.ccountryConstantsValidation, '', rulesPhase2);

  var elementConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cElementConstantsValidation, '', rulesPhase2);

  var genericConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cGenericConstantsValidation, '', rulesPhase2);

  var isotopeConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cIsotopeConstantsValidation, '', rulesPhase2);

  var knotConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cknotConstantsValidation, '', rulesPhase2);

  var languageConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.clanguageConstantsValidation, '', rulesPhase2);

  var messageConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cmessageConstantsValidation, '', rulesPhase2);

  var numericConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cNumericConstantsValidation, '', rulesPhase2);

  var phonicConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cphonicConstantsValidation, '', rulesPhase2);

  var shapeConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cShapeConstantsValidation, '', rulesPhase2);

  var systemConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cSystemConstantsValidation, '', rulesPhase2);

  var unitConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cunitConstantsValidation, '', rulesPhase2);

  var wordConstantsValidationPhase2Result = _ruleBroker["default"].processRules(sys.cWordConstantsValidation, '', rulesPhase2); // END Phase 2 Constants Validation


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase2ConstantsValidation); // Basic Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cBasicConstantsPhase1Validation, basicConstantsValidationPhase1Result); // Business Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cBusinessConstantsPhase1Validation, businessConstantsValidationPhase1Result); // Color Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cColorConstantsPhase1Validation, colorConstantsValidationPhase1Result); // Command Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cCommandConstantsPhase1Validation, commandConstantsValidationPhase1Result); // Configuration Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cConfigurationConstantsPhase1Validation, configurationConstantsValidationPhase1Result); // Country Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cCountryConstantsPhase1Validation, countryConstantsValidationPhase1Result); // Element Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cElementConstantsPhase1Validation, elementConstantsValidationPhase1Result); // Generic Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cGenericConstantsPhase1Validation, genericConstantsValidationPhase1Result); // Isotope Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cIsotopeConstantsPhase1Validation, isotopeConstantsValidationPhase1Result); // Knot Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cKnotConstantsPhase1Validation, knotConstantsValidationPhase1Result); // Language Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cLanguageConstantsPhase1Validation, languageConstantsValidationPhase1Result); // Message Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cMessageConstantsPhase1Validation, messageConstantsValidationPhase1Result); // Numerical Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cNumericalConstantsPhase1Validation, numericConstantsValidationPhase1Result); // Phonic Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cPhonicConstantsPhase1Validation, phonicConstantsValidationPhase1Result); // Shape Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cShapeConstantsPhase1Validation, shapeConstantsValidationPhase1Result); // System Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cSystemConstantsPhase1Validation, systemConstantsValidationPhase1Result); // Unit Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cUnitConstantsPhase1Validation, unitConstantsValidationPhase1Result); // Word Constants Phase 1 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cWordConstantsPhase1Validation, wordConstantsValidationPhase1Result); // Basic Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cBasicConstantsPhase2Validation, basicConstantsValidationPhase2Result); // Business Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cBusinessConstantsPhase2Validation, businessConstantsValidationPhase2Result); // Color Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cColorConstantsPhase2Validation, colorConstantsValidationPhase2Result); // Command Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cCommandConstantsPhase2Validation, commandConstantsValidationPhase2Result); // Configuration Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cConfigurationConstantsPhase2Validation, configurationConstantsValidationPhase2Result); // Country Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cCountryConstantsPhase2Validation, countryConstantsValidationPhase2Result); // Element Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cElementConstantsPhase2Validation, elementConstantsValidationPhase2Result); // Generic Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cGenericConstantsPhase2Validation, genericConstantsValidationPhase2Result); // Isotope Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cIsotopeConstantsPhase2Validation, isotopeConstantsValidationPhase2Result); // Knot Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cKnotConstantsPhase2Validation, knotConstantsValidationPhase2Result); // Language Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cLanguageConstantsPhase2Validation, languageConstantsValidationPhase2Result); // Message Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cMessageConstantsPhase2Validation, messageConstantsValidationPhase2Result); // Numerical Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cNumericalConstantsPhase2Validation, numericConstantsValidationPhase2Result); // Phonic Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cPhonicConstantsPhase2Validation, phonicConstantsValidationPhase2Result); // Shape Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cShapeConstantsPhase2Validation, shapeConstantsValidationPhase2Result); // System Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cSystemConstantsPhase2Validation, systemConstantsValidationPhase2Result); // Unit Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cUnitConstantsPhase2Validation, unitConstantsValidationPhase2Result); // Word Constants Phase 2 Validation


  _loggers["default"].constantsValidationSummaryLog(msg.cWordConstantsPhase2Validation, wordConstantsValidationPhase2Result);

  if (basicConstantsValidationPhase1Result === true && businessConstantsValidationPhase1Result === true && colorConstantsValidationPhase1Result === true && commandConstantsValidationPhase1Result === true && configurationConstantsValidationPhase1Result === true && countryConstantsValidationPhase1Result === true && elementConstantsValidationPhase1Result === true && genericConstantsValidationPhase1Result === true && isotopeConstantsValidationPhase1Result === true && knotConstantsValidationPhase1Result === true && languageConstantsValidationPhase1Result === true && messageConstantsValidationPhase1Result === true && numericConstantsValidationPhase1Result === true && phonicConstantsValidationPhase1Result === true && shapeConstantsValidationPhase1Result === true && systemConstantsValidationPhase1Result === true && unitConstantsValidationPhase1Result === true && wordConstantsValidationPhase1Result === true && basicConstantsValidationPhase2Result === true && businessConstantsValidationPhase2Result === true && colorConstantsValidationPhase2Result === true && commandConstantsValidationPhase2Result === true && configurationConstantsValidationPhase2Result === true && countryConstantsValidationPhase2Result === true && elementConstantsValidationPhase2Result === true && genericConstantsValidationPhase2Result === true && isotopeConstantsValidationPhase2Result === true && knotConstantsValidationPhase2Result === true && languageConstantsValidationPhase2Result === true && messageConstantsValidationPhase2Result === true && numericConstantsValidationPhase2Result === true && phonicConstantsValidationPhase2Result === true && shapeConstantsValidationPhase2Result === true && systemConstantsValidationPhase2Result === true && unitConstantsValidationPhase2Result === true && wordConstantsValidationPhase2Result === true) {
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