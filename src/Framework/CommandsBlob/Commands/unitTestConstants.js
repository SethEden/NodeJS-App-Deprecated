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
  let functionName = s.validateConstants;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  // Phase 1 Constants Validation
  console.log('BEGIN Phase 1 Constants Validation');
  // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
  let constantsPath = configurator.getConfigurationSetting(s.cConstantsPath);
  console.log('constantsPath is: ' + constantsPath);
  let rules = {};
  rules[0] = s.cvalidateConstantsDataValidation;

  let basicConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.cbasic_constants_js, s.cBasicConstantsValidation, rules);
  if (basicConstantsValidationPhase1Result === true) {
    console.log('PASSED -- Basic Constants Phase 1 Validation -- PASSED');
  } else {
    console.log('FAILED -- Basic Constants Pase 1 Validation -- FAILED');
  }

  let colorConstantsValidationPhase1Result = ruleBroker.processRules(constantsPath + s.ccolor_constants_js, s.cColorConstantsValidation, rules);
  if (colorConstantsValidationPhase1Result === true) {
    console.log('PASSED -- Color Constants Phase 1 Validation -- PASSED');
  } else {
    console.log('FAILED -- Color Constants Pase 1 Validation -- FAILED');
  }

  // export const cbasic_constants_js = w.cbasic + b.cDot + w.cconstants + b.cDot + b.cjs; // basic.constants.js
  // export const ccolor_constants_js = w.ccolor + b.cDot + w.cconstants + b.cDot + b.cjs; // color.constants.js
  // export const celement_constants_js = w.celement + b.cDot + w.cconstants + b.cDot + b.cjs; // element.constants.js
  // export const cgeneric_constants_js = w.cgeneric + b.cDot + w.cconstants + b.cDot + b.cjs; // generic.constants.js
  // export const cisotope_constants_js = w.cisotope + b.cDot + w.cconstants + b.cDot + b.cjs; // isotope.constants.js
  // export const cnumeric_constants_js = w.cnumeric + b.cDot + w.cconstants + b.cDot + b.cjs; // numeric.constants.js
  // export const cphonics_constants_js = w.cphonics + b.cDot + w.cconstants + b.cDot + b.cjs; // phonics.constants.js
  // export const cshape_constants_js = w.cshape + b.cDot + w.cconstants + b.cDot + b.cjs; // shape.constants.js
  // export const csystem_constants_js = w.csystem + b.cDot + w.cconstants + b.cDot + b.cjs; // system.constants.js
  // export const cunits_constants_js = w.cunits + b.cDot + w.cconstants + b.cDot + b.cjs; // units.constants.js
  // export const cword_constants_js = w.cword + b.cDot + w.cconstants + b.cDot + b.cjs; // word.constants.js
  //
  // export const cBasicConstantsValidation = w.cBasic + w.cConstants + w.cValidation; // BasicConstantsValidation
  // export const cColorConstantsValidation = w.cColor + w.cConstants + w.cValidation; // ColorConstantsValidation
  // export const cElementConstantsValidation = w.cElement + w.cConstants + w.cValidation; // ElementConstantsValidation
  // export const cGenericConstantsValidation = w.cGeneric + w.cConstants + w.cValidation; // GenericConstantsValidation
  // export const cIsotopeConstantsValidation = w.cIsotope + w.cConstants + w.cValidation; // IsotopeConstantsValidation
  // export const cNumericConstantsValidation = w.cNumeric + w.cConstants + w.cValidation; // NumericConstantsValidation
  // export const cPhonicsConstantsValidation = w.cPhonics + w.cConstants + w.cValidation; // PhonicsConstantsValidation
  // export const cShapeConstantsValidation = w.cShape + w.cConstants + w.cValidation; // ShapeConstantsValidation
  // export const cSystemConstantsValidation = w.cSystem + w.cConstants + w.cValidation; // SystemConstantsValidation
  // export const cUnitsConstantsValidation = w.cUnits + w.cConstants + w.cValidation; // UnitsConstantsValidation
  // export const cWordConstantsValidation = w.cWord + w.cConstants + w.cValidation; // WordConstantsValidation

  console.log('END Phase 1 Constants Validation');

  // Phase 2 Constants Validation
  console.log('BEGIN Phase 2 Constants Validation');
  // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.

  console.log('END Phase 2 Constants Validation');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};
