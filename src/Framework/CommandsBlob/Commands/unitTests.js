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
* @requires module:commands-constants
* @requires module:messages-constants
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
import * as cmd from '../../Constants/commands.constants';
import * as cfg from '../../Constants/configurations.constants';
import * as msg from '../../Constants/messages.constants';
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
  let resolvedConstantsPath_Commands = path.resolve(constantsPath + bas.cForwardSlash + sys.ccommands_constants_js);
  // resolvedConstantsPath_Commands is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_CommandsIs + resolvedConstantsPath_Commands);
  let resolvedConstantsPath_Configurations = path.resolve(constantsPath + bas.cForwardSlash + sys.cconfigurations_constants_js);
  // resolvedConstantsPath_Configurations is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ConfigurationsIs + resolvedConstantsPath_Configurations);
  let resolvedConstantsPath_Countries = path.resolve(constantsPath + bas.cForwardSlash + sys.ccountries_constants_js);
  // resolvedConstantsPath_Countries is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_CountriesIs + resolvedConstantsPath_Countries);
  let resolvedConstantsPath_Element = path.resolve(constantsPath + bas.cForwardSlash + sys.celement_constants_js);
  // resolvedConstantsPath_Element is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ElementIs + resolvedConstantsPath_Element);
  let resolvedConstantsPath_Generic = path.resolve(constantsPath + bas.cForwardSlash + sys.cgeneric_constants_js);
  // resolvedConstantsPath_Generic is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_GenericIs + resolvedConstantsPath_Generic);
  let resolvedConstantsPath_Isotope = path.resolve(constantsPath + bas.cForwardSlash + sys.cisotope_constants_js);
  // resolvedConstantsPath_Isotope is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_IsotopeIs + resolvedConstantsPath_Isotope);
  let resolvedConstantsPath_Knots = path.resolve(constantsPath + bas.cForwardSlash + sys.cknots_constants_js);
  // resolvedConstantsPath_Knots is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_KnotsIs + resolvedConstantsPath_Knots);
  let resolvedConstantsPath_Languages = path.resolve(constantsPath + bas.cForwardSlash + sys.clanguages_constants_js);
  // resolvedConstantsPath_Languages is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_LanguagesIs + resolvedConstantsPath_Languages);
  let resolvedConstantsPath_Messages = path.resolve(constantsPath + bas.cForwardSlash + sys.cmessages_constants_js);
  // resolvedConstantsPath_Messages is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_MessagesIs + resolvedConstantsPath_Messages);
  let resolvedConstantsPath_Numeric = path.resolve(constantsPath + bas.cForwardSlash + sys.cnumeric_constants_js);
  // resolvedConstantsPath_Numeric is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_NumericIs + resolvedConstantsPath_Numeric);
  let resolvedConstantsPath_Phonics = path.resolve(constantsPath + bas.cForwardSlash + sys.cphonics_constants_js);
  // resolvedConstantsPath_Phonics is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_PhonicsIs + resolvedConstantsPath_Phonics);
  let resolvedConstantsPath_Shape = path.resolve(constantsPath + bas.cForwardSlash + sys.cshape_constants_js);
  // resolvedConstantsPath_Shape is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_ShapeIs + resolvedConstantsPath_Shape);
  let resolvedConstantsPath_System = path.resolve(constantsPath + bas.cForwardSlash + sys.csystem_constants_js);
  // resolvedConstantsPath_System is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_SystemIs + resolvedConstantsPath_System);
  let resolvedConstantsPath_Units = path.resolve(constantsPath + bas.cForwardSlash + sys.cunits_constants_js);
  // resolvedConstantsPath_Units is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_UnitsIs + resolvedConstantsPath_Units);
  let resolvedConstantsPath_Words = path.resolve(constantsPath + bas.cForwardSlash + sys.cword_constants_js);
  // resolvedConstantsPath_Words is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cresolvedConstantsPath_WordsIs + resolvedConstantsPath_Words);

  let basicConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Basic, sys.cBasicConstantsValidation, rulesPhase1);
  let businessConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Business, sys.cBusinessConstantsValidation, rulesPhase1);
  let colorConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Color, sys.cColorConstantsValidation, rulesPhase1);
  let commandsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Commands, sys.cCommandsConstantsValidation, rulesPhase1);
  let configurationsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Configurations, sys.cConfigurationsConstantsValidation, rulesPhase1);
  let countriesConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Countries, sys.cCountriesConstantsValidation, rulesPhase1);
  let elementConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Element, sys.cElementConstantsValidation, rulesPhase1);
  let genericConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Generic, sys.cGenericConstantsValidation, rulesPhase1);
  let isotopeConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Isotope, sys.cIsotopeConstantsValidation, rulesPhase1);
  let knotsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Knots, sys.cKnotsConstantsValidation, rulesPhase1);
  let languagesConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Languages, sys.cLanguagesConstantsValidation, rulesPhase1);
  let messagesConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Messages, sys.cMessagesConstantsValidation, rulesPhase1);
  let numericConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Numeric, sys.cNumericConstantsValidation, rulesPhase1);
  let phonicsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Phonics, sys.cPhonicsConstantsValidation, rulesPhase1);
  let shapeConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Shape, sys.cShapeConstantsValidation, rulesPhase1);
  let systemConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_System, sys.cSystemConstantsValidation, rulesPhase1);
  let unitsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Units, sys.cUnitsConstantsValidation, rulesPhase1);
  let wordConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Words, sys.cWordConstantsValidation, rulesPhase1);
  // END Phase 1 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase1ConstantsValidation);

  // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBeginPhase2ConstantsValidation);
  // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.
  let basicConstantsValidationPhase2Result = ruleBroker.processRules(sys.cBasicConstantsValidation, '', rulesPhase2);
  let businessConstantsValidationPhase2Result = ruleBroker.processRules(sys.cBusinessConstantsValidation, '', rulesPhase2);
  let colorConstantsValidationPhase2Result = ruleBroker.processRules(sys.cColorConstantsValidation, '', rulesPhase2);
  let commandsConstantsValidationPhase2Result = ruleBroker.processRules(sys.cCommandsConstantsValidation, '', rulesPhase2);
  let configurationsConstantsValidationPhase2Result = ruleBroker.processRules(sys.cConfigurationsConstantsValidation, '', rulesPhase2);
  let countriesConstantsValidationPhase2Result = ruleBroker.processRules(sys.cCountriesConstantsValidation, '', rulesPhase2);
  let elementConstantsValidationPhase2Result = ruleBroker.processRules(sys.cElementConstantsValidation, '', rulesPhase2);
  let genericConstantsValidationPhase2Result = ruleBroker.processRules(sys.cGenericConstantsValidation, '', rulesPhase2);
  let isotopeConstantsValidationPhase2Result = ruleBroker.processRules(sys.cIsotopeConstantsValidation, '', rulesPhase2);
  let knotsConstantsValidationPhase2Result = ruleBroker.processRules(sys.cKnotsConstantsValidation, '', rulesPhase2);
  let languagesConstantsValidationPhase2Result = ruleBroker.processRules(sys.cLanguagesConstantsValidation, '', rulesPhase2);
  let messagesConstantsValidationPhase2Result = ruleBroker.processRules(sys.cMessagesConstantsValidation, '', rulesPhase2);
  let numericConstantsValidationPhase2Result = ruleBroker.processRules(sys.cNumericConstantsValidation, '', rulesPhase2);
  let phonicsConstantsValidationPhase2Result = ruleBroker.processRules(sys.cPhonicsConstantsValidation, '', rulesPhase2);
  let shapeConstantsValidationPhase2Result = ruleBroker.processRules(sys.cShapeConstantsValidation, '', rulesPhase2);
  let systemConstantsValidationPhase2Result = ruleBroker.processRules(sys.cSystemConstantsValidation, '', rulesPhase2);
  let unitsConstantsValidationPhase2Result = ruleBroker.processRules(sys.cUnitsConstantsValidation, '', rulesPhase2);
  let wordConstantsValidationPhase2Result = ruleBroker.processRules(sys.cWordConstantsValidation, '', rulesPhase2);
  // END Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEndPhase2ConstantsValidation);

  // Basic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cBasicConstantsPhase1Validation, basicConstantsValidationPhase1Result);
  // Business Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cBusinessConstantsPhase1Validation, businessConstantsValidationPhase1Result);
  // Color Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cColorConstantsPhase1Validation, colorConstantsValidationPhase1Result);
  // Commands Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cCommandsConstantsPhase1Validation, commandsConstantsValidationPhase1Result);
  // Configurations Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cConfigurationsConstantsPhase1Validation, configurationsConstantsValidationPhase1Result);
  // Countries Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cCountriesConstantsPhase1Validation, countriesConstantsValidationPhase1Result);
  // Element Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cElementConstantsPhase1Validation, elementConstantsValidationPhase1Result);
  // Generic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cGenericConstantsPhase1Validation, genericConstantsValidationPhase1Result);
  // Isotope Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cIsotopeConstantsPhase1Validation, isotopeConstantsValidationPhase1Result);
  // Knots Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cKnotsConstantsPhase1Validation, knotsConstantsValidationPhase1Result);
  // Languages Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cLanguagesConstantsPhase1Validation, languagesConstantsValidationPhase1Result);
  // Messages Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cMessagesConstantsPhase1Validation, messagesConstantsValidationPhase1Result);
  // Numerical Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cNumericalConstantsPhase1Validation, numericConstantsValidationPhase1Result);
  // Phonics Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cPhonicsConstantsPhase1Validation, phonicsConstantsValidationPhase1Result);
  // Shape Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cShapeConstantsPhase1Validation, shapeConstantsValidationPhase1Result);
  // System Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cSystemConstantsPhase1Validation, systemConstantsValidationPhase1Result);
  // Units Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cUnitsConstantsPhase1Validation, unitsConstantsValidationPhase1Result);
  // Word Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(msg.cWordConstantsPhase1Validation, wordConstantsValidationPhase1Result);

  // Basic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cBasicConstantsPhase2Validation, basicConstantsValidationPhase2Result);
  // Business Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cBusinessConstantsPhase2Validation, businessConstantsValidationPhase2Result);
  // Color Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cColorConstantsPhase2Validation, colorConstantsValidationPhase2Result);
  // Commands Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cCommandsConstantsPhase2Validation, commandsConstantsValidationPhase2Result);
  // Configurations Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cConfigurationsConstantsPhase2Validation, configurationsConstantsValidationPhase2Result);
  // Countries Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cCountriesConstantsPhase2Validation, countriesConstantsValidationPhase2Result);
  // Element Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cElementConstantsPhase2Validation, elementConstantsValidationPhase2Result);
  // Generic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cGenericConstantsPhase2Validation, genericConstantsValidationPhase2Result);
  // Isotope Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cIsotopeConstantsPhase2Validation, isotopeConstantsValidationPhase2Result);
  // Knots Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cKnotsConstantsPhase2Validation, knotsConstantsValidationPhase2Result);
  // Languages Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cLanguagesConstantsPhase2Validation, languagesConstantsValidationPhase2Result);
  // Messages Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cMessagesConstantsPhase2Validation, messagesConstantsValidationPhase2Result);
  // Numerical Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cNumericalConstantsPhase2Validation, numericConstantsValidationPhase2Result);
  // Phonics Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cPhonicsConstantsPhase2Validation, phonicsConstantsValidationPhase2Result);
  // Shape Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cShapeConstantsPhase2Validation, shapeConstantsValidationPhase2Result);
  // System Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cSystemConstantsPhase2Validation, systemConstantsValidationPhase2Result);
  // Units Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cUnitsConstantsPhase2Validation, unitsConstantsValidationPhase2Result);
  // Word Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(msg.cWordConstantsPhase2Validation, wordConstantsValidationPhase2Result);

  if (
    basicConstantsValidationPhase1Result === true &&
    businessConstantsValidationPhase1Result === true &&
    colorConstantsValidationPhase1Result === true &&
    commandsConstantsValidationPhase1Result === true &&
    configurationsConstantsValidationPhase1Result === true &&
    countriesConstantsValidationPhase1Result === true &&
    elementConstantsValidationPhase1Result === true &&
    genericConstantsValidationPhase1Result === true &&
    isotopeConstantsValidationPhase1Result === true &&
    knotsConstantsValidationPhase1Result === true &&
    languagesConstantsValidationPhase1Result === true &&
    messagesConstantsValidationPhase1Result === true &&
    numericConstantsValidationPhase1Result === true &&
    phonicsConstantsValidationPhase1Result === true &&
    shapeConstantsValidationPhase1Result === true &&
    systemConstantsValidationPhase1Result === true &&
    unitsConstantsValidationPhase1Result === true &&
    wordConstantsValidationPhase1Result === true &&
    basicConstantsValidationPhase2Result === true &&
    businessConstantsValidationPhase2Result === true &&
    colorConstantsValidationPhase2Result === true &&
    commandsConstantsValidationPhase2Result === true &&
    configurationsConstantsValidationPhase2Result === true &&
    countriesConstantsValidationPhase2Result === true &&
    elementConstantsValidationPhase2Result === true &&
    genericConstantsValidationPhase2Result === true &&
    isotopeConstantsValidationPhase2Result === true &&
    knotsConstantsValidationPhase2Result === true &&
    languagesConstantsValidationPhase2Result === true &&
    messagesConstantsValidationPhase2Result === true &&
    numericConstantsValidationPhase2Result === true &&
    phonicsConstantsValidationPhase2Result === true &&
    shapeConstantsValidationPhase2Result === true &&
    systemConstantsValidationPhase2Result === true &&
    unitsConstantsValidationPhase2Result === true &&
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
