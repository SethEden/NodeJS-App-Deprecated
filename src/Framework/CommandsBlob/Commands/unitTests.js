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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN Phase 1 Constants Validation');
  // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
  let constantsPath = configurator.getConfigurationSetting(s.cConstantsPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'constantsPath is: ' + constantsPath);
  let rulesPhase1 = [];
  let rulesPhase2 = [];
  rulesPhase1[0] = s.cvalidateConstantsDataValidation;
  rulesPhase2[0] = s.cvalidateConstantsDataValues;

  let resolvedConstantsPath_Basic = path.resolve(constantsPath + b.cForwardSlash + s.cbasic_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Basic is: ' + resolvedConstantsPath_Basic);
  let resolvedConstantsPath_Color = path.resolve(constantsPath + b.cForwardSlash + s.ccolor_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Color is: ' + resolvedConstantsPath_Color);
  let resolvedConstantsPath_Element = path.resolve(constantsPath + b.cForwardSlash + s.celement_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Element is: ' + resolvedConstantsPath_Element);
  let resolvedConstantsPath_Generic = path.resolve(constantsPath + b.cForwardSlash + s.cgeneric_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Generic is: ' + resolvedConstantsPath_Generic);
  let resolvedConstantsPath_Isotope = path.resolve(constantsPath + b.cForwardSlash + s.cisotope_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Isotope is: ' + resolvedConstantsPath_Isotope);
  let resolvedConstantsPath_Numeric = path.resolve(constantsPath + b.cForwardSlash + s.cnumeric_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Numeric is: ' + resolvedConstantsPath_Numeric);
  let resolvedConstantsPath_Phonics = path.resolve(constantsPath + b.cForwardSlash + s.cphonics_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Phonics is: ' + resolvedConstantsPath_Phonics);
  let resolvedConstantsPath_Shape = path.resolve(constantsPath + b.cForwardSlash + s.cshape_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Shape is: ' + resolvedConstantsPath_Shape);
  let resolvedConstantsPath_System = path.resolve(constantsPath + b.cForwardSlash + s.csystem_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_System is: ' + resolvedConstantsPath_System);
  let resolvedConstantsPath_Units = path.resolve(constantsPath + b.cForwardSlash + s.cunits_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Units is: ' + resolvedConstantsPath_Units);
  let resolvedConstantsPath_Words = path.resolve(constantsPath + b.cForwardSlash + s.cword_constants_js);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'resolvedConstantsPath_Words is: ' + resolvedConstantsPath_Words);

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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'END Phase 1 Constants Validation');

  // Phase 2 Constants Validation
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN Phase 2 Constants Validation');
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'END Phase 2 Constants Validation');

  loggers.constantsValidationSummaryLog('Basic Constants Phase 1 Validation', basicConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Color Constants Phase 1 Validation', colorConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Element Constants Phase 1 Validation', elementConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Generic Constants Phase 1 Validation', genericConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Isotope Constants Phase 1 Validation', isotopeConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Numerical Constants Phase 1 Validation', numericConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Phonics Constants Phase 1 Validation', phonicsConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Shape Constants Phase 1 Validation', shapeConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('System Constants Phase 1 Validation', systemConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Units Constants Phase 1 Validation', unitsConstantsValidationPhase1Result);
  loggers.constantsValidationSummaryLog('Word Constants Phase 1 Validation', wordConstantsValidationPhase1Result);

  loggers.constantsValidationSummaryLog('Basic Constants Phase 2 Validation', basicConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Color Constants Phase 2 Validation', colorConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Element Constants Phase 2 Validation', elementConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Generic Constants Phase 2 Validation', genericConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Isotope Constants Phase 2 Validation', isotopeConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Numerical Constants Phase 2 Validation', numericConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Phonics Constants Phase 2 Validation', phonicsConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Shape Constants Phase 2 Validation', shapeConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('System Constants Phase 2 Validation', systemConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Units Constants Phase 2 Validation', unitsConstantsValidationPhase2Result);
  loggers.constantsValidationSummaryLog('Word Constants Phase 2 Validation', wordConstantsValidationPhase2Result);

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
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN i-th loop: ' + i);
      let currentCommand = allCommandAliases[i];
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentCommand is: ' + JSON.stringify(currentCommand));
      let aliasList = currentCommand[w.cAliases];
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'aliasList is: ' + aliasList);
      let arrayOfAliases = aliasList.split(b.cComa);
loop2:
      for (let j = 0; j < arrayOfAliases.length; j++) {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN j-th loop: ' + i);
        let currentAlias = arrayOfAliases[j];
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentAlias is: ' + currentAlias);
        let duplicateAliasCount = ruleBroker.processRules(currentAlias, allCommandAliases, rules);
        if (duplicateAliasCount > 1) {
          passedAllCommandAliasesDuplicateCheck = false;
        }
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'END j-th loop: ' + i);
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'END i-th loop: ' + i);
    }
  configurator.setConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};
