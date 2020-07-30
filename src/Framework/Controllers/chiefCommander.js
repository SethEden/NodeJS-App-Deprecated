/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Holds all of the functions that manage the command queue, and allows commands to be enqueued and dequeued from the command queue.
 * Also executes the command queue ultimately by making calls to the commandBroker to execute individual commands.
 * @requires module:chiefData
 * @requires module:commandBroker
 * @requires module:queue
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/18
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import chiefData from '../Controllers/chiefData';
import commandBroker from '../CommandsBlob/commandBroker';
import queue from '../Resources/queue';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as w from '../Constants/word.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function bootStrapCommands
 * @description Initializes all of the commands and gets them added to the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
function bootStrapCommands() {
  let functionName = bootStrapCommands.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  commandBroker.bootStrapCommands();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function loadCommandAliasesFromPath
 * @description Loads the command aliases XML file that is specified by the input.
 * The data is automatically saved on the D-data structure.
 * @param {string} commandAliasesFilePath The path and file name to the XML file that contains the command aliases definitions.
 * (Could be system command aliases or client command aliases)
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/21
 */
function loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName) {
  let functionName = loadCommandAliasesFromPath.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandAliasesFilePathConfigurationName is: ' + commandAliasesFilePathConfigurationName);
  let allCommandAliasesData = {};
  allCommandAliasesData = chiefData.setupAllXmlData(commandAliasesFilePathConfigurationName, s.cCommandsAliases);
  if (D[s.cCommandsAliases] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[s.cCommandsAliases] = {};
    D[s.cCommandsAliases] = allCommandAliasesData[s.cCommandsAliases];
  } else {
    for (let i=0; i<allCommandAliasesData[s.cCommandsAliases][w.cCommand].length; i++) {
      D[s.cCommandsAliases][w.cCommand].push(allCommandAliasesData[s.cCommandsAliases][w.cCommand][i])
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function enqueueCommand
 * @description Determines if the command queue has been setup or not,
 * if not then it is initialized, and the command is added to the command queue.
 * @param {string} command The command that should be added to the command queue.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'command is: ' + command);
  if (D[s.cCommandQueue] === undefined) {
    queue.initQueue(s.cCommandQueue);
  }
  queue.enqueue(s.cCommandQueue, command);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function isCommandQueueEmpty
 * @description Determines if the command queue is empty or not empty.
 * @return {Boolean} A True or False value to indicate if the command queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let returnValue = false;
  returnValue = queue.isEmpty(s.cCommandQueue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function processCommandQueue
 * @description Pulls the command from the front of the command queue and executes it using the command broker.
 * @return {boolean} A True or False value to indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
function processCommandQueue() {
  let functionName = processCommandQueue.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let commandToExecute;
  let returnValue;
  commandToExecute = queue.dequeue(s.cCommandQueue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandToExecute is: ' + commandToExecute);
  returnValue = commandBroker.executeCommand(commandToExecute);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

export default {
  bootStrapCommands,
  loadCommandAliasesFromPath,
  enqueueCommand,
  isCommandQueueEmpty,
  processCommandQueue
};
