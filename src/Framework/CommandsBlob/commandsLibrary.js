/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the system defined commands as a map between function names and function calls.
 * @requires module:nominal
 * @requires module:unitTests
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:messages-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as nominalCommands from './Commands/nominal';
import * as unitTests from './Commands/unitTests';
import loggers from '../Executrix/loggers';
import * as bas from '../Constants/basic.constants';
import * as wrd from '../Constants/word.constants';
import * as sys from '../Constants/system.constants';
import * as msg from '../Constants/messages.constants';
import * as cmd from '../Constants/commands.constants';
var path = require('path');
var D = require('../Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */
export const initCommandsLibrary = function() {
  let functionName = initCommandsLibrary.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  D[wrd.cCommands] = {};
  D[wrd.cCommands] = {
    // Commands
    // ********************************
    // Nominal commands in order
    // ********************************
    [cmd.cechoCommand]: (inputData, inputMetaData) => nominalCommands.echoCommand(inputData, inputMetaData),
    [wrd.cexit]: (inputData, inputMetaData) => nominalCommands.exit(inputData, inputMetaData),
    [wrd.cversion]: (inputData, inputMetaData) => nominalCommands.version(inputData, inputMetaData),
    [wrd.cabout]: (inputData, inputMetaData) => nominalCommands.about(inputData, inputMetaData),
    [wrd.cname]: (inputData, inputMetaData) => nominalCommands.name(inputData, inputMetaData),
    [cmd.cclearScreen]: (inputData, inputMetaData) => nominalCommands.clearScreen(inputData, inputMetaData),
    [cmd.cdeployApplication]: (inputData, inputMetaData) => nominalCommands.deployApplication(inputData, inputMetaData),
    [cmd.cdeployMetaData]: (inputData, inputMetaData) => nominalCommands.deployMetaData(inputData, inputMetaData),
    [cmd.creleaseApplication]: (inputData, inputMetaData) => nominalCommands.releaseApplication(inputData, inputMetaData),
    [wrd.chelp]: (inputData, inputMetaData) => nominalCommands.help(inputData, inputMetaData),
    [cmd.cworkflowHelp]: (inputData, inputMetaData) => nominalCommands.workflowHelp(inputData, inputMetaData),
    [cmd.ccommandSequencer]: (inputData, inputMetaData) => nominalCommands.commandSequencer(inputData, inputMetaData),
    [wrd.cworkflow]: (inputData, inputMetaData) => nominalCommands.workflow(inputData, inputMetaData),
    [cmd.cprintDataHive]: (inputData, inputMetaData) => nominalCommands.printDataHive(inputData, inputMetaData),
    [cmd.cprintDataHiveAttributes]: (inputData, inputMetaData) => nominalCommands.printDataHiveAttributes(inputData, inputMetaData),
    [cmd.cclearDataStorage]: (inputData, inputMetaData) => nominalCommands.clearDataStorage(inputData, inputMetaData),
    [sys.cbusinessRule]: (inputData, inputMetaData) => nominalCommands.businessRule(inputData, inputMetaData),
    [cmd.ccommandGenerator]: (inputData, inputMetaData) => nominalCommands.commandGenerator(inputData, inputMetaData),
    [cmd.ccommandAliasGenerator]: (inputData, inputMetaData) => nominalCommands.commandAliasGenerator(inputData, inputMetaData),
    [cmd.cconstantsGenerator]: (inputData, inputMetaData) => nominalCommands.constantsGenerator(inputData, inputMetaData),
    [cmd.cconstantsGeneratorList]: (inputData, inputMetaData) => nominalCommands.constantsGeneratorList(inputData, inputMetaData),
    [cmd.cconstantsPatternRecognizer]: (inputData, inputMetaData) => nominalCommands.constantsPatternRecognizer(inputData, inputMetaData),
    [cmd.cbusinessRulesMetrics]: (inputData, inputMetaData) => nominalCommands.businessRulesMetrics(inputData, inputMetaData),
    [cmd.ccommandMetrics]: (inputData, inputMetaData) => nominalCommands.commandMetrics(inputData, inputMetaData),
    [cmd.cconvertColors]: (inputData, inputMetaData) => nominalCommands.convertColors(inputData, inputMetaData),

    // ********************************
    // Unit Test Constants commands in order
    // ********************************
    [cmd.cvalidateConstants]: (inputData, inputMetaData) => unitTests.validateConstants(inputData, inputMetaData),
    [cmd.cvalidateCommandAliases]: (inputData, inputMetaData) => unitTests.validateCommandAliases(inputData, inputMetaData)
  }
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
};
