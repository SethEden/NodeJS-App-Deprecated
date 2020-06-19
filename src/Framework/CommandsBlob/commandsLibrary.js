/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the system defined commands as a map between function names and function calls.
 * @requires module:nominal
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

import * as nominalCommands from './Commands/nominal';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
export const initCommandsLibrary = function() {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = initCommandsLibrary.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  D[s.cCommands] = {};
  D[s.cCommands] = {
    // Commands
    // ********************************
    // Nominal commands in order
    // ********************************
    [s.cechoCommand]: (inputData, inputMetaData) => nominalCommands.echoCommand(inputData, inputMetaData),
    [s.cexit]: (inputData, inputMetaData) => nominalCommands.exit(inputData, inputMetaData)
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};
