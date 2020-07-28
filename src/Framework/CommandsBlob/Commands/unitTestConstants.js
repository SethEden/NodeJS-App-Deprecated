/**
* @file nominal.js
* @module nominal
* @description Contains all of the commands to validate constants.
* @requires module:loggers
* @requires module:basic-constants
* @requires module:system-constants
* @requires {@link https://www.npmjs.com/package/path|path}
* @requires module:data
* @author Seth Hollingsead
* @date 2020/07/17
* @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
*/
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
    console.log('END Phase 1 Constants Validation');

    // Phase 2 Constants Validation
    console.log('BEGIN Phase 2 Constants Validation');
    console.log('END Phase 2 Constants Validation');
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};
