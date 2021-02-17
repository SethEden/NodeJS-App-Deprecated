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
import configurator from '../../Executrix/configurator';
import ruleBroker from '../../BusinessRules/ruleBroker';
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as p from '../../Constants/phonics.constants';
import * as w from '../../Constants/word.constants';
import * as s from '../../Constants/system.constants';
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
export const validateConstants = function(inputData, inputMetaData) {
  let functionName = s.cvalidateConstants;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  // Phase 1 Constants Validation
  // BEGIN Phase 1 Constants Validation
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBeginPhase1ConstantsValidation);
  // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
  let constantsPath = configurator.getConfigurationSetting(s.cConstantsPath);
  // constantsPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconstantsPathIs + constantsPath);
  let rulesPhase1 = [];
  let rulesPhase2 = [];
  rulesPhase1[0] = s.cvalidateConstantsDataValidation;
  rulesPhase2[0] = s.cvalidateConstantsDataValues;

  let resolvedConstantsPath_Basic = path.resolve(constantsPath + b.cForwardSlash + s.cbasic_constants_js);
  // resolvedConstantsPath_Basic is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_BasicIs + resolvedConstantsPath_Basic);
  let resolvedConstantsPath_Color = path.resolve(constantsPath + b.cForwardSlash + s.ccolor_constants_js);
  // resolvedConstantsPath_Color is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_ColorIs + resolvedConstantsPath_Color);
  let resolvedConstantsPath_Element = path.resolve(constantsPath + b.cForwardSlash + s.celement_constants_js);
  // resolvedConstantsPath_Element is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_ElementIs + resolvedConstantsPath_Element);
  let resolvedConstantsPath_Generic = path.resolve(constantsPath + b.cForwardSlash + s.cgeneric_constants_js);
  // resolvedConstantsPath_Generic is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_GenericIs + resolvedConstantsPath_Generic);
  let resolvedConstantsPath_Isotope = path.resolve(constantsPath + b.cForwardSlash + s.cisotope_constants_js);
  // resolvedConstantsPath_Isotope is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_IsotopeIs + resolvedConstantsPath_Isotope);
  let resolvedConstantsPath_Numeric = path.resolve(constantsPath + b.cForwardSlash + s.cnumeric_constants_js);
  // resolvedConstantsPath_Numeric is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_NumericIs + resolvedConstantsPath_Numeric);
  let resolvedConstantsPath_Phonics = path.resolve(constantsPath + b.cForwardSlash + s.cphonics_constants_js);
  // resolvedConstantsPath_Phonics is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_PhonicsIs + resolvedConstantsPath_Phonics);
  let resolvedConstantsPath_Shape = path.resolve(constantsPath + b.cForwardSlash + s.cshape_constants_js);
  // resolvedConstantsPath_Shape is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_ShapeIs + resolvedConstantsPath_Shape);
  let resolvedConstantsPath_System = path.resolve(constantsPath + b.cForwardSlash + s.csystem_constants_js);
  // resolvedConstantsPath_System is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_SystemIs + resolvedConstantsPath_System);
  let resolvedConstantsPath_Units = path.resolve(constantsPath + b.cForwardSlash + s.cunits_constants_js);
  // resolvedConstantsPath_Units is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_UnitsIs + resolvedConstantsPath_Units);
  let resolvedConstantsPath_Words = path.resolve(constantsPath + b.cForwardSlash + s.cword_constants_js);
  // resolvedConstantsPath_Words is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedConstantsPath_WordsIs + resolvedConstantsPath_Words);

  let basicConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Basic, s.cBasicConstantsValidation, rulesPhase1);
  let colorConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Color, s.cColorConstantsValidation, rulesPhase1);
  let elementConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Element, s.cElementConstantsValidation, rulesPhase1);
  let genericConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Generic, s.cGenericConstantsValidation, rulesPhase1);
  let isotopeConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Isotope, s.cIsotopeConstantsValidation, rulesPhase1);
  let numericConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Numeric, s.cNumericConstantsValidation, rulesPhase1);
  let phonicsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Phonics, s.cPhonicsConstantsValidation, rulesPhase1);
  let shapeConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Shape, s.cShapeConstantsValidation, rulesPhase1);
  let systemConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_System, s.cSystemConstantsValidation, rulesPhase1);
  let unitsConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Units, s.cUnitsConstantsValidation, rulesPhase1);
  let wordConstantsValidationPhase1Result = ruleBroker.processRules(resolvedConstantsPath_Words, s.cWordConstantsValidation, rulesPhase1);
  // END Phase 1 Constants Validation
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEndPhase1ConstantsValidation);

  // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBeginPhase2ConstantsValidation);
  // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.
  let basicConstantsValidationPhase2Result = ruleBroker.processRules(s.cBasicConstantsValidation, '', rulesPhase2);
  let colorConstantsValidationPhase2Result = ruleBroker.processRules(s.cColorConstantsValidation, '', rulesPhase2);
  let elementConstantsValidationPhase2Result = ruleBroker.processRules(s.cElementConstantsValidation, '', rulesPhase2);
  let genericConstantsValidationPhase2Result = ruleBroker.processRules(s.cGenericConstantsValidation, '', rulesPhase2);
  let isotopeConstantsValidationPhase2Result = ruleBroker.processRules(s.cIsotopeConstantsValidation, '', rulesPhase2);
  let numericConstantsValidationPhase2Result = ruleBroker.processRules(s.cNumericConstantsValidation, '', rulesPhase2);
  let phonicsConstantsValidationPhase2Result = ruleBroker.processRules(s.cPhonicsConstantsValidation, '', rulesPhase2);
  let shapeConstantsValidationPhase2Result = ruleBroker.processRules(s.cShapeConstantsValidation, '', rulesPhase2);
  let systemConstantsValidationPhase2Result = ruleBroker.processRules(s.cSystemConstantsValidation, '', rulesPhase2);
  let unitsConstantsValidationPhase2Result = ruleBroker.processRules(s.cUnitsConstantsValidation, '', rulesPhase2);
  let wordConstantsValidationPhase2Result = ruleBroker.processRules(s.cWordConstantsValidation, '', rulesPhase2);
  // END Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEndPhase2ConstantsValidation);

  // Basic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cBasicConstantsPhase1Validation, basicConstantsValidationPhase1Result);
  // Color Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cColorConstantsPhase1Validation, colorConstantsValidationPhase1Result);
  // Element Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cElementConstantsPhase1Validation, elementConstantsValidationPhase1Result);
  // Generic Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cGenericConstantsPhase1Validation, genericConstantsValidationPhase1Result);
  // Isotope Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cIsotopeConstantsPhase1Validation, isotopeConstantsValidationPhase1Result);
  // Numerical Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cNumericalConstantsPhase1Validation, numericConstantsValidationPhase1Result);
  // Phonics Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cPhonicsConstantsPhase1Validation, phonicsConstantsValidationPhase1Result);
  // Shape Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cShapeConstantsPhase1Validation, shapeConstantsValidationPhase1Result);
  // System Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cSystemConstantsPhase1Validation, systemConstantsValidationPhase1Result);
  // Units Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cUnitsConstantsPhase1Validation, unitsConstantsValidationPhase1Result);
  // Word Constants Phase 1 Validation
  loggers.constantsValidationSummaryLog(s.cWordConstantsPhase1Validation, wordConstantsValidationPhase1Result);

  // Basic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cBasicConstantsPhase2Validation, basicConstantsValidationPhase2Result);
  // Color Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cColorConstantsPhase2Validation, colorConstantsValidationPhase2Result);
  // Element Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cElementConstantsPhase2Validation, elementConstantsValidationPhase2Result);
  // Generic Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cGenericConstantsPhase2Validation, genericConstantsValidationPhase2Result);
  // Isotope Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cIsotopeConstantsPhase2Validation, isotopeConstantsValidationPhase2Result);
  // Numerical Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cNumericalConstantsPhase2Validation, numericConstantsValidationPhase2Result);
  // Phonics Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cPhonicsConstantsPhase2Validation, phonicsConstantsValidationPhase2Result);
  // Shape Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cShapeConstantsPhase2Validation, shapeConstantsValidationPhase2Result);
  // System Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cSystemConstantsPhase2Validation, systemConstantsValidationPhase2Result);
  // Units Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cUnitsConstantsPhase2Validation, unitsConstantsValidationPhase2Result);
  // Word Constants Phase 2 Validation
  loggers.constantsValidationSummaryLog(s.cWordConstantsPhase2Validation, wordConstantsValidationPhase2Result);

  if (
    basicConstantsValidationPhase1Result === true &&
    colorConstantsValidationPhase1Result === true &&
    elementConstantsValidationPhase1Result === true &&
    genericConstantsValidationPhase1Result === true &&
    isotopeConstantsValidationPhase1Result === true &&
    numericConstantsValidationPhase1Result === true &&
    phonicsConstantsValidationPhase1Result === true &&
    shapeConstantsValidationPhase1Result === true &&
    systemConstantsValidationPhase1Result === true &&
    unitsConstantsValidationPhase1Result === true &&
    wordConstantsValidationPhase1Result === true &&
    basicConstantsValidationPhase2Result === true &&
    colorConstantsValidationPhase2Result === true &&
    elementConstantsValidationPhase2Result === true &&
    genericConstantsValidationPhase2Result === true &&
    isotopeConstantsValidationPhase2Result === true &&
    numericConstantsValidationPhase2Result === true &&
    phonicsConstantsValidationPhase2Result === true &&
    shapeConstantsValidationPhase2Result === true &&
    systemConstantsValidationPhase2Result === true &&
    unitsConstantsValidationPhase2Result === true &&
    wordConstantsValidationPhase2Result === true
  ) {
    configurator.setConfigurationSetting(s.cPassAllConstantsValidations, true);
  } else {
    configurator.setConfigurationSetting(s.cPassAllConstantsValidations, false);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  let functionName = s.cvalidateCommandAliases;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let allCommandAliases = D[s.cCommandsAliases][w.cCommand];
  let passedAllCommandAliasesDuplicateCheck = true;
  let rules = [];
  rules[0] = s.ccountDuplicateCommandAliases;
loop1:
  for (let i = 0; i < allCommandAliases.length; i++) {
    // BEGIN i-th loop:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithLoop + i);
    let currentCommand = allCommandAliases[i];
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
      let duplicateAliasCount = ruleBroker.processRules(currentAlias, allCommandAliases, rules);
      if (duplicateAliasCount > 1) {
        passedAllCommandAliasesDuplicateCheck = false;
      }
      // END j-th loop:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_jthLoop + i);
    }
    // END i-th loop:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithLoop + i);
  }
  if (passedAllCommandAliasesDuplicateCheck === true) {
    // PASSED: All duplicate command aliases validation tests!
    console.log(s.cvalidateCommandAliasesMessage1);
  }
  configurator.setConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};
