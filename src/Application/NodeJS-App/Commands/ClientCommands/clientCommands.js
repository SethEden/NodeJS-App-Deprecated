/**
 * @file clientCommands
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:warden
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires module:application-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import warden from '../../../../Framework/Controllers/warden';
import * as bas from '../../../../Framework/Constants/basic.constants';
import * as sys from '../../../../Framework/Constants/system.constants';
import * as apc from '../../Constants/application.constants';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function customEchoCommand
 * @description A quick command to validate that the new dynamic data storage technique for client commands.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
export const customEchoCommand = function(inputData, inputMetaData) {
  // console.log('BEGIN clientStringParsing.customEchoCommand function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = apc.ccustomEchoCommand;
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cBEGIN_Function);
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cinputMetaDataIs + inputMetaData);
  let returnData;
  returnData = inputData + ' clientStringParsing.customEchoCommand';
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END clientStringParsing.customEcho function');
  return returnData;
};
