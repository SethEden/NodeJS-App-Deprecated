/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the system defined commands as a map between function names and function calls.
 * @requires module:nominal
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as nominalCommands from './Commands/nominal';
import * as unitTestConstants from './Commands/unitTestConstants';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as w from '../Constants/word.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
export const initCommandsLibrary = function() {
  let functionName = initCommandsLibrary.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  D[w.cCommands] = {};
  D[w.cCommands] = {
    // Commands
    // ********************************
    // Nominal commands in order
    // ********************************
    [s.cechoCommand]: (inputData, inputMetaData) => nominalCommands.echoCommand(inputData, inputMetaData),
    [w.cexit]: (inputData, inputMetaData) => nominalCommands.exit(inputData, inputMetaData),
    [w.cversion]: (inputData, inputMetaData) => nominalCommands.version(inputData, inputMetaData),
    [w.cabout]: (inputData, inputMetaData) => nominalCommands.about(inputData, inputMetaData),
    [w.cname]: (inputData, inputMetaData) => nominalCommands.name(inputData, inputMetaData),
    [s.cdeployApplication]: (inputData, inputMetaData) => nominalCommands.deployApplication(inputData, inputMetaData),
    [s.creleaseApplication]: (inputData, inputMetaData) => nominalCommands.releaseApplication(inputData, inputMetaData),
    [w.chelp]: (inputData, inputMetaData) => nominalCommands.help(inputData, inputMetaData),
    [s.cworkflowHelp]: (inputData, inputMetaData) => nominalCommands.workflowHelp(inputData, inputMetaData),
    [s.ccommandSequencer]: (inputData, inputMetaData) => nominalCommands.commandSequencer(inputData, inputMetaData),
    [w.cworkflow]: (inputData, inputMetaData) => nominalCommands.workflow(inputData, inputMetaData),
    [s.cprintDataHive]: (inputData, inputMetaData) => nominalCommands.printDataHive(inputData, inputMetaData),
    [s.cbusinessRule]: (inputData, inputMetaData) => nominalCommands.businessRule(inputData, inputMetaData),
    [s.ccommandGenerator]: (inputData, inputMetaData) => nominalCommands.commandGenerator(inputData, inputMetaData),
    [s.cbusinessRulesMetrics]: (inputData, inputMetaData) => nominalCommands.businessRulesMetrics(inputData, inputMetaData),
    [s.ccommandMetrics]: (inputData, inputMetaData) => nominalCommands.commandMetrics(inputData, inputMetaData),
    [s.cconvertColors]: (inputData, inputMetaData) => nominalCommands.convertColors(inputData, inputMetaData),

    // ********************************
    // Unit Test Constants commands in order
    // ********************************
    [s.cvalidateConstants]: (inputData, inputMetaData) => unitTestConstants.validateConstants(inputData, inputMetaData)
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};
