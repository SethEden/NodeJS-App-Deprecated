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
import configurator from '../../Executrix/configurator';
import ruleBroker from '../../BusinessRules/ruleBroker';
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
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

  let basicConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cbasic_constants_js, s.cBasicConstantsValidation, rulesPhase1);
  let colorConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.ccolor_constants_js, s.cColorConstantsValidation, rulesPhase1);
  let elementConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.celement_constants_js, s.cElementConstantsValidation, rulesPhase1);
  let genericConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cgeneric_constants_js, s.cGenericConstantsValidation, rulesPhase1);
  let isotopeConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cisotope_constants_js, s.cIsotopeConstantsValidation, rulesPhase1);
  let numericConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cnumeric_constants_js, s.cNumericConstantsValidation, rulesPhase1);
  let phonicsConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cphonics_constants_js, s.cPhonicsConstantsValidation, rulesPhase1);
  let shapeConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cshape_constants_js, s.cShapeConstantsValidation, rulesPhase1);
  let systemConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.csystem_constants_js, s.cSystemConstantsValidation, rulesPhase1);
  let unitsConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cunits_constants_js, s.cUnitsConstantsValidation, rulesPhase1);
  let wordConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cword_constants_js, s.cWordConstantsValidation, rulesPhase1);
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
