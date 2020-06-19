/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/19
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

 import loggers from '../../Executrix/loggers';
 import * as b from '../../Constants/basic.constants';
 import * as s from '../../Constants/system.constants';
 var path = require('path');

 /**
  * @function echoCommand
  * @description returns the input as the output without any changes.
  * @param {string} inputData String that should be echoed.
  * @param {string} inputMetaData Not used for this business rule.
  * @return {string} The same as the input string.
  * @author Seth Hollingsead
  * @date 2020/06/19
  */
 export const echoCommand = function(inputData, inputMetaData) {
   var baseFileName = path.basename(module.filename, path.extname(module.filename));
   var functionName = s.cechoCommand;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
   if (!inputData) {
     return false;
   }
   loggers.consoleLog(inputData);
   var returnData = true;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
   return returnData;
 };

/**
 * @function exit
 * @description Returns false so the entire application can exit.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
export const exit = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cechoCommand;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = false;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
