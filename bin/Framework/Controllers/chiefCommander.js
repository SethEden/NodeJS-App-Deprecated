"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefData = _interopRequireDefault(require("../Controllers/chiefData"));

var _commandBroker = _interopRequireDefault(require("../CommandsBlob/commandBroker"));

var _queue = _interopRequireDefault(require("../Resources/queue"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var w = _interopRequireWildcard(require("../Constants/word.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  var functionName = bootStrapCommands.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _commandBroker["default"].bootStrapCommands();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
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
  var functionName = loadCommandAliasesFromPath.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'commandAliasesFilePathConfigurationName is: ' + commandAliasesFilePathConfigurationName);

  var allCommandAliasesData = {};
  allCommandAliasesData = _chiefData["default"].setupAllXmlData(commandAliasesFilePathConfigurationName, s.cCommandsAliases);

  if (D[s.cCommandsAliases] === undefined) {
    // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[s.cCommandsAliases] = {};
    D[s.cCommandsAliases] = allCommandAliasesData[s.cCommandsAliases];
  } else {
    for (var i = 0; i < allCommandAliasesData[s.cCommandsAliases][w.cCommand].length; i++) {
      D[s.cCommandsAliases][w.cCommand].push(allCommandAliasesData[s.cCommandsAliases][w.cCommand][i]);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
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
  var functionName = enqueueCommand.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'command is: ' + command);

  if (D[s.cCommandQueue] === undefined) {
    _queue["default"].initQueue(s.cCommandQueue);
  }

  _queue["default"].enqueue(s.cCommandQueue, command);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function isCommandQueueEmpty
 * @description Determines if the command queue is empty or not empty.
 * @return {Boolean} A True or False value to indicate if the command queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

function isCommandQueueEmpty() {
  var functionName = isCommandQueueEmpty.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var returnValue = false;
  returnValue = _queue["default"].isEmpty(s.cCommandQueue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @function processCommandQueue
 * @description Pulls the command from the front of the command queue and executes it using the command broker.
 * @return {boolean} A True or False value to indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

function processCommandQueue() {
  var functionName = processCommandQueue.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var commandToExecute;
  var returnValue;
  commandToExecute = _queue["default"].dequeue(s.cCommandQueue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'commandToExecute is: ' + commandToExecute);

  returnValue = _commandBroker["default"].executeCommand(commandToExecute);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
var _default = {
  bootStrapCommands: bootStrapCommands,
  loadCommandAliasesFromPath: loadCommandAliasesFromPath,
  enqueueCommand: enqueueCommand,
  isCommandQueueEmpty: isCommandQueueEmpty,
  processCommandQueue: processCommandQueue
};
exports["default"] = _default;