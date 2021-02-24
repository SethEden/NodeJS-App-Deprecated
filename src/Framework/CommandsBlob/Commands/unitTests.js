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
import configurator from '../../Executrix/configurator';
import ruleBroker from '../../BusinessRules/ruleBroker';
import loggers from '../../Executrix/loggers';
import * as bas from '../../Constants/basic.constants';
import * as wrd from '../../Constants/word.constants';
import * as sys from '../../Constants/system.constants';
import * as biz from '../../Constants/business.constants';
import * as cmd from '../../Constants/command.constants';
import * as cfg from '../../Constants/configuration.constants';
import * as msg from '../../Constants/message.constants';
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
export const validateConstants = function(inputData, inputMetaData) {
  let functionName = cmd.cvalidateConstants;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);
  // Phase 1 Constants Validation
  // BEGIN Phase 1 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase1ConstantsValidation);
  // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
  let constantsPath = configurator.getConfigurationSetting(sys.cConstantsPath);
  // constantsPath is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cconstantsPathIs + constantsPath);
  let rulesPhase1 = [];
  let rulesPhase2 = [];
  rulesPhase1[0] = biz.cvalidateConstantsDataValidation;
  rulesPhase2[0] = biz.cvalidateConstantsDataValues;

  let resolvedConstantsPath_Basic = path.resolve(constantsPath + bas.cForwardSlash + sys.cbasic_constants_js);
  // resolvedConstantsPath_Basic is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_BasicIs + resolvedConstantsPath_Basic);
  let resolvedConstantsPath_Business = path.resolve(constantsPath + bas.cForwardSlash + sys.cbusiness_constants_js);
  // resolvedConstantsPath_Business is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_BusinessIs + resolvedConstantsPath_Business);
  let resolvedConstantsPath_Color = path.resolve(constantsPath + bas.cForwardSlash + sys.ccolor_constants_js);
  // resolvedConstantsPath_Color is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ColorIs + resolvedConstantsPath_Color);
  let resolvedConstantsPath_Command = path.resolve(constantsPath + bas.cForwardSlash + sys.ccommand_constants_js);
  // resolvedConstantsPath_Command is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_CommandIs + resolvedConstantsPath_Command);
  let resolvedConstantsPath_Configuration = path.resolve(constantsPath + bas.cForwardSlash + sys.cconfiguration_constants_js);
  // resolvedConstantsPath_Configuration is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ConfigurationIs + resolvedConstantsPath_Configuration);
  let resolvedConstantsPath_Country = path.resolve(constantsPath + bas.cForwardSlash + sys.ccountry_constants_js);
  // resolvedConstantsPath_Country is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_CountryIs + resolvedConstantsPath_Country);
  let resolvedConstantsPath_Element = path.resolve(constantsPath + bas.cForwardSlash + sys.celement_constants_js);
  // resolvedConstantsPath_Element is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ElementIs + resolvedConstantsPath_Element);
  let resolvedConstantsPath_Generic = path.resolve(constantsPath + bas.cForwardSlash + sys.cgeneric_constants_js);
  // resolvedConstantsPath_Generic is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_GenericIs + resolvedConstantsPath_Generic);
  let resolvedConstantsPath_Isotope = path.resolve(constantsPath + bas.cForwardSlash + sys.cisotope_constants_js);
  // resolvedConstantsPath_Isotope is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_IsotopeIs + resolvedConstantsPath_Isotope);
  let resolvedConstantsPath_Knot = path.resolve(constantsPath + bas.cForwardSlash + sys.cknot_constants_js);
  // resolvedConstantsPath_Knot is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_KnotIs + resolvedConstantsPath_Knot);
  let resolvedConstantsPath_Language = path.resolve(constantsPath + bas.cForwardSlash + sys.clanguage_constants_js);
  // resolvedConstantsPath_Language is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_LanguagesIs + resolvedConstantsPath_Language);
  let resolvedConstantsPath_Message = path.resolve(constantsPath + bas.cForwardSlash + sys.cmessage_constants_js);
  // resolvedConstantsPath_Message is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_MessageIs + resolvedConstantsPath_Message);
  let resolvedConstantsPath_Numeric = path.resolve(constantsPath + bas.cForwardSlash + sys.cnumeric_constants_js);
  // resolvedConstantsPath_Numeric is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_NumericIs + resolvedConstantsPath_Numeric);
  let resolvedConstantsPath_Phonic = path.resolve(constantsPath + bas.cForwardSlash + sys.cphonic_constants_js);
  // resolvedConstantsPath_Phonic is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_PhonicIs + resolvedConstantsPath_Phonic);
  let resolvedConstantsPath_Shape = path.resolve(constantsPath + bas.cForwardSlash + sys.cshape_constants_js);
  // resolvedConstantsPath_Shape is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ShapeIs + resolvedConstantsPath_Shape);
  let resolvedConstantsPath_System = path.resolve(constantsPath + bas.cForwardSlash + sys.csystem_constants_js);
  // resolvedConstantsPath_System is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_SystemIs + resolvedConstantsPath_System);
  let resolvedConstantsPath_Unit = path.resolve(constantsPath + bas.cForwardSlash + sys.cunit_constants_js);
  // resolvedConstantsPath_Unit is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_UnitIs + resolvedConstantsPath_Unit);
  let resolvedConstantsPath_Word = path.resolve(constantsPath + bas.cForwardSlash + sys.cword_constants_js);
  // resolvedConstantsPath_Word is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_WordIs + resolvedConstantsPath_Word);

  let basicConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Basic, sys.cBasicConstantsValidation, rulesPhase1);
  let businessConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Business, sys.cBusinessConstantsValidation, rulesPhase1);
  let colorConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Color, sys.cColorConstantsValidation, rulesPhase1);
  let commandConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Command, sys.ccommandConstantsValidation, rulesPhase1);
  let configurationConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Configuration, sys.cconfigurationConstantsValidation, rulesPhase1);
  let countryConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Country, sys.ccountryConstantsValidation, rulesPhase1);
  let elementConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Element, sys.cElementConstantsValidation, rulesPhase1);
  let genericConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Generic, sys.cGenericConstantsValidation, rulesPhase1);
  let isotopeConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Isotope, sys.cIsotopeConstantsValidation, rulesPhase1);
  let knotConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Knot, sys.cknotConstantsValidation, rulesPhase1);
  let languageConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Language, sys.clanguageConstantsValidation, rulesPhase1);
  let messageConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Message, sys.cmessageConstantsValidation, rulesPhase1);
  let numericConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Numeric, sys.cNumericConstantsValidation, rulesPhase1);
  let phonicConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Phonic, sys.cphonicConstantsValidation, rulesPhase1);
  let shapeConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Shape, sys.cShapeConstantsValidation, rulesPhase1);
  let systemConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_System, sys.cSystemConstantsValidation, rulesPhase1);
  let unitConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Unit, sys.cunitConstantsValidation, rulesPhase1);
  let wordConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Word, sys.cWordConstantsValidation, rulesPhase1);
  // END Phase 1 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase1ConstantsValidation);

  // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase2ConstantsValidation);
  // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.
  let basicConstantsValidationPhase2Result = ruleBroker.processRules(sys.cBasicConstantsValidation, '', rulesPhase2);
  let businessConstantsValidationPhase2Result = ruleBroker.processRules(sys.cBusinessConstantsValidation, '', rulesPhase2);
  let colorConstantsValidationPhase2Result = ruleBroker.processRules(sys.cColorConstantsValidation, '', rulesPhase2);
  let commandConstantsValidationPhase2Result = ruleBroker.processRules(sys.ccommandConstantsValidation, '', rulesPhase2);
  let configurationConstantsValidationPhase2Result = ruleBroker.processRules(sys.cconfigurationConstantsValidation, '', rulesPhase2);
  let countryConstantsValidationPhase2Result = ruleBroker.processRules(sys.ccountryConstantsValidation, '', rulesPhase2);
  let elementConstantsValidationPhase2Result = ruleBroker.processRules(sys.cElementConstantsValidation, '', rulesPhase2);
  let genericConstantsValidationPhase2Result = ruleBroker.processRules(sys.cGenericConstantsValidation, '', rulesPhase2);
  let isotopeConstantsValidationPhase2Result = ruleBroker.processRules(sys.cIsotopeConstantsValidation, '', rulesPhase2);
  let knotConstantsValidationPhase2Result = ruleBroker.processRules(sys.cknotConstantsValidation, '', rulesPhase2);
  let languageConstantsValidationPhase2Result = ruleBroker.processRules(sys.clanguageConstantsValidation, '', rulesPhase2);
  let messageConstantsValidationPhase2Result = ruleBroker.processRules(sys.cmessageConstantsValidation, '', rulesPhase2);
  let numericConstantsValidationPhase2Result = ruleBroker.processRules(sys.cNumericConstantsValidation, '', rulesPhase2);
  let phonicConstantsValidationPhase2Result = ruleBroker.processRules(sys.cphonicConstantsValidation, '', rulesPhase2);
  let shapeConstantsValidationPhase2Result = ruleBroker.processRules(sys.cShapeConstantsValidation, '', rulesPhase2);
  let systemConstantsValidationPhase2Result = ruleBroker.processRules(sys.cSystemConstantsValidation, '', rulesPhase2);
  let unitConstantsValidationPhase2Result = ruleBroker.processRules(sys.cunitConstantsValidation, '', rulesPhase2);
  let wordConstantsValidationPhase2Result = ruleBroker.processRules(sys.cWordConstantsValidation, '', rulesPhase2);
  // END Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase2ConstantsValidation);

  // Basic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cBasicConstantsPhase1Validation, basicConstantsValidationPhase1Result);
  // Business Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cBusinessConstantsPhase1Validation, businessConstantsValidationPhase1Result);
  // Color Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cColorConstantsPhase1Validation, colorConstantsValidationPhase1Result);
  // Command Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cCommandConstantsPhase1Validation, commandConstantsValidationPhase1Result);
  // Configuration Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cConfigurationConstantsPhase1Validation, configurationConstantsValidationPhase1Result);
  // Country Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cCountryConstantsPhase1Validation, countryConstantsValidationPhase1Result);
  // Element Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cElementConstantsPhase1Validation, elementConstantsValidationPhase1Result);
  // Generic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cGenericConstantsPhase1Validation, genericConstantsValidationPhase1Result);
  // Isotope Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cIsotopeConstantsPhase1Validation, isotopeConstantsValidationPhase1Result);
  // Knot Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cKnotConstantsPhase1Validation, knotConstantsValidationPhase1Result);
  // Language Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cLanguageConstantsPhase1Validation, languageConstantsValidationPhase1Result);
  // Message Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cMessageConstantsPhase1Validation, messageConstantsValidationPhase1Result);
  // Numerical Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cNumericalConstantsPhase1Validation, numericConstantsValidationPhase1Result);
  // Phonic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cPhonicConstantsPhase1Validation, phonicConstantsValidationPhase1Result);
  // Shape Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cShapeConstantsPhase1Validation, shapeConstantsValidationPhase1Result);
  // System Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cSystemConstantsPhase1Validation, systemConstantsValidationPhase1Result);
  // Unit Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cUnitConstantsPhase1Validation, unitConstantsValidationPhase1Result);
  // Word Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cWordConstantsPhase1Validation, wordConstantsValidationPhase1Result);

  // Basic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cBasicConstantsPhase2Validation, basicConstantsValidationPhase2Result);
  // Business Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cBusinessConstantsPhase2Validation, businessConstantsValidationPhase2Result);
  // Color Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cColorConstantsPhase2Validation, colorConstantsValidationPhase2Result);
  // Command Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cCommandConstantsPhase2Validation, commandConstantsValidationPhase2Result);
  // Configuration Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cConfigurationConstantsPhase2Validation, configurationConstantsValidationPhase2Result);
  // Country Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cCountryConstantsPhase2Validation, countryConstantsValidationPhase2Result);
  // Element Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cElementConstantsPhase2Validation, elementConstantsValidationPhase2Result);
  // Generic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cGenericConstantsPhase2Validation, genericConstantsValidationPhase2Result);
  // Isotope Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cIsotopeConstantsPhase2Validation, isotopeConstantsValidationPhase2Result);
  // Knot Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cKnotConstantsPhase2Validation, knotConstantsValidationPhase2Result);
  // Language Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cLanguageConstantsPhase2Validation, languageConstantsValidationPhase2Result);
  // Message Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cMessageConstantsPhase2Validation, messageConstantsValidationPhase2Result);
  // Numerical Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cNumericalConstantsPhase2Validation, numericConstantsValidationPhase2Result);
  // Phonic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cPhonicConstantsPhase2Validation, phonicConstantsValidationPhase2Result);
  // Shape Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cShapeConstantsPhase2Validation, shapeConstantsValidationPhase2Result);
  // System Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cSystemConstantsPhase2Validation, systemConstantsValidationPhase2Result);
  // Unit Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cUnitConstantsPhase2Validation, unitConstantsValidationPhase2Result);
  // Word Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cWordConstantsPhase2Validation, wordConstantsValidationPhase2Result);

  if (
    basicConstantsValidationPhase1Result === true &&
    businessConstantsValidationPhase1Result === true &&
    colorConstantsValidationPhase1Result === true &&
    commandConstantsValidationPhase1Result === true &&
    configurationConstantsValidationPhase1Result === true &&
    countryConstantsValidationPhase1Result === true &&
    elementConstantsValidationPhase1Result === true &&
    genericConstantsValidationPhase1Result === true &&
    isotopeConstantsValidationPhase1Result === true &&
    knotConstantsValidationPhase1Result === true &&
    languageConstantsValidationPhase1Result === true &&
    messageConstantsValidationPhase1Result === true &&
    numericConstantsValidationPhase1Result === true &&
    phonicConstantsValidationPhase1Result === true &&
    shapeConstantsValidationPhase1Result === true &&
    systemConstantsValidationPhase1Result === true &&
    unitConstantsValidationPhase1Result === true &&
    wordConstantsValidationPhase1Result === true &&
    basicConstantsValidationPhase2Result === true &&
    businessConstantsValidationPhase2Result === true &&
    colorConstantsValidationPhase2Result === true &&
    commandConstantsValidationPhase2Result === true &&
    configurationConstantsValidationPhase2Result === true &&
    countryConstantsValidationPhase2Result === true &&
    elementConstantsValidationPhase2Result === true &&
    genericConstantsValidationPhase2Result === true &&
    isotopeConstantsValidationPhase2Result === true &&
    knotConstantsValidationPhase2Result === true &&
    languageConstantsValidationPhase2Result === true &&
    messageConstantsValidationPhase2Result === true &&
    numericConstantsValidationPhase2Result === true &&
    phonicConstantsValidationPhase2Result === true &&
    shapeConstantsValidationPhase2Result === true &&
    systemConstantsValidationPhase2Result === true &&
    unitConstantsValidationPhase2Result === true &&
    wordConstantsValidationPhase2Result === true
  ) {
    configurator.setConfigurationSetting(cfg.cPassAllConstantsValidations, true);
  } else {
    configurator.setConfigurationSetting(cfg.cPassAllConstantsValidations, false);
  }
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
export const validateCommandAliases = function(inputData, inputMetaData) {
  let functionName = cmd.cvalidateCommandAliases;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);
  let allCommandAliases = D[sys.cCommandsAliases][wrd.cCommand];
  let passedAllCommandAliasesDuplicateCheck = true;
  let rules = [];
  rules[0] = biz.ccountDuplicateCommandAliases;
loop1:
  for (let i = 0; i < allCommandAliases.length; i++) {
    // BEGIN i-th loop:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_ithLoop + i);
    let currentCommand = allCommandAliases[i];
    // currentCommand is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
    let aliasList = currentCommand[wrd.cAliases];
    // aliasList is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.caliasListIs + aliasList);
    let arrayOfAliases = aliasList.split(bas.cComa);
loop2:
    for (let j = 0; j < arrayOfAliases.length; j++) {
      // BEGIN j-th loop:
      loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_jthLoop + i);
      let currentAlias = arrayOfAliases[j];
      // currentAlias is:
      loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ccurrentAliasIs + currentAlias);
      let duplicateAliasCount = ruleBroker.processRules(currentAlias, allCommandAliases, rules);
      if (duplicateAliasCount > 1) {
        passedAllCommandAliasesDuplicateCheck = false;
      }
      // END j-th loop:
      loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_jthLoop + i);
    }
    // END i-th loop:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_ithLoop + i);
  }
  if (passedAllCommandAliasesDuplicateCheck === true) {
    // PASSED: All duplicate command aliases validation tests!
    console.log(msg.cvalidateCommandAliasesMessage1);
  }
  configurator.setConfigurationSetting(cfg.cPassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
};
