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
import * as msg from '../../../../Framework/Constants/messages.constants';
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
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  returnData = inputData + ' clientStringParsing.customEchoCommand';
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END clientStringParsing.customEcho function');
  return returnData;
};

/**
 * @function bossPanic
 * @description Prints out the entire contents of all files and their full paths on the screen
 *  in a custom length loop that makes the screen look like it is doing something busy.
 *  So anybody who looks at the screen will think you are working on something super important like: "quantum" cryptography or artificial Intelligence.
 *  (As if putting the word "Quantum" in front of everything some how makes it smarter)
 *  Could also be used to turn a computer into a movie or TV-episode set-piece to make the people standing in front of the computer seem smarter.
 *  If someone does some fake typing on the keyboard and the BossPanic command is configured to run slowly then it might look like someone is writing code super fast!
 *  Like an expert hacker!
 * @param {string} inputData The string used to load the BossPanic configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the command should not exit when it is completed.
 * @author Seth Hollingsead
 * @date 2021/02/22
 */
export const bossPanic = function(inputData, inputMetaData) {
  let functionName = apc.cbossPanic;
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;

  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return returnData;
};
