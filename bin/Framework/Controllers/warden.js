"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefConfiguration = _interopRequireDefault(require("../Controllers/chiefConfiguration"));

var _chiefCommander = _interopRequireDefault(require("../Controllers/chiefCommander"));

var _commandBroker = _interopRequireDefault(require("../CommandsBlob/commandBroker"));

var _chiefWorkflow = _interopRequireDefault(require("../Controllers/chiefWorkflow"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _timers = _interopRequireDefault(require("../Executrix/timers"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _dataBroker = _interopRequireDefault(require("../Executrix/dataBroker"));

var _chiefData = _interopRequireDefault(require("./chiefData"));

var _fileBroker = _interopRequireDefault(require("../Executrix/fileBroker"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../Constants/generic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all of the application features & various functionality from a single entry point.
 * @requires module:chiefConfiguration
 * @requires module:chiefCommander
 * @requires module:commandBroker
 * @requires module:chiefWorkflow
 * @requires module:configurator
 * @requires module:timers
 * @requires module:ruleBroker
 * @requires module:dataBroker
 * @requires module:fileBroker
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// import chiefData from '../Controllers/chiefData';
var path = require('path');

var D = require('../Resources/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function deployApplication
 * @description Copys all non-source code files and folders from the source path to the destination path.
 * @param {string} source The path the non-code files should be copied from.
 * @param {string} destination The path the non-code files should be copied to.
 * @return {boolean} A TRUE or FALSE value to indicate if the deployment was successful or not.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function deployApplication(source, destination) {
  var functionName = deployApplication.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'destination is: ' + destination);

  var deploymentSuccessfull = false;
  deploymentSuccessfull = _fileBroker["default"].copyAllFilesAndFoldersFromFolderToFolder(source, destination);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'deploymentSuccessfull is: ' + deploymentSuccessfull);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return deploymentSuccessfull;
}

;
/**
 * @function releaseApplication
 * @description Scans the specified release folder path and determines if
 * there is a zip file for the current release or not. If there is not,
 * then the system will build a zip file from the bin folder excluding the release folder
 * and save the resulting archive to the release folder.
 * @param {string} source The path for the bin folder where the latest source code will have been deployed.
 * @param {string} release The path for the release folder where the release zip archive file should be saved.
 * @return {boolean} A TRUE or FALSE value to indicate if the zip archive was created successfully or not.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function releaseApplication(source, release) {
  var functionName = releaseApplication.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'release is: ' + release);

  var releaseSuccessfull = false;
  releaseSuccessfull = _fileBroker["default"].buildReleasePackage(source, release);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'releaseSuccessfull is: ' + releaseSuccessfull);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return releaseSuccessfull;
}

;
/**
 * @function bootStrapApplication
 * @description Do all of the activities to setup the application system to run whatever actions the application will run.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE The following code that uses the loggers.consoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 */

function bootStrapApplication(pathAndFilename) {
  // console.log('BEGIN warden.bootStrapApplication function');
  // console.log('pathAndFilename is: ' + pathAndFilename);
  var functionName = bootStrapApplication.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);

  _chiefConfiguration["default"].setupConfiguration(pathAndFilename); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D are: ' + JSON.stringify(D));
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('contents of D are: ' + JSON.stringify(D));
  // console.log('END warden.bootStrapApplication function');

}

;
/**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling: path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is C:/NodeJS-App/Application/NodeJS-App/
 * But what we really need for the root path is just C:/NodeJS-App/
 * @param {string} systemRootPath The root path as returned by calling: path.resolve(__dirname);
 * @return {string} The true root path of the application.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE: The following code that uses the loggers.consoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */

function processRootPath(systemRootPath) {
  // console.log('BEGIN warden.processRootPath function');
  // console.log('systemRootPath is: ' + systemRootPath);
  // var functionName = processRootPath.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'systemRootPath is: ' + systemRootPath);
  var rules = {};
  rules[1] = s.cparseSystemRootPath;

  _ruleBroker["default"].bootStrapBusinessRules();

  _chiefCommander["default"].bootStrapCommands();

  var rootPath = _ruleBroker["default"].processRules(systemRootPath, '', rules); // console.log('systemRootPath after business rule processing is: ' + rootPath);
  // console.log('END warden.processRootPath function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);


  return rootPath;
}

;
/**
 * @function saveRootPath
 * @description Saves the root path and also cleans the root path and saves the cleaned root path.
 * Also saves the current application version number and the application name.
 * @param {string} rootPath The root path of the application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function saveRootPath(rootPath) {
  // console.log('BEGIN warden.saveRootPath function');
  // console.log('rootPath is: ' + rootPath);
  var functionName = saveRootPath.name; // console.log('logging the BEGIN warden.saveRootPath function');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // console.log('logging the current rootPath input.');


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'rootPath is: ' + rootPath); // console.log('setting the configuration setting for the root path');


  _configurator["default"].setConfigurationSetting(s.cApplicationRootPath, rootPath);

  var cleanedRootPath; // console.log('calling file broker to clean the root path.');

  cleanedRootPath = _fileBroker["default"].cleanRootPath(rootPath); // console.log('set the cleaned root path as a configuration setting');

  _configurator["default"].setConfigurationSetting(s.cApplicationCleanedRootPath, cleanedRootPath); // console.log('set the application name as a configuration setting');


  _configurator["default"].setConfigurationSetting(s.cApplicationName, process.env.npm_package_name); // console.log('set the application version number as a configuration setting');


  _configurator["default"].setConfigurationSetting(s.cApplicationVersionNumber, process.env.npm_package_version); // console.log('set the application description as a configuration setting');


  _configurator["default"].setConfigurationSetting(s.cApplicationDescription, process.env.npm_package_description);

  if (_configurator["default"].getConfigurationSetting(s.cEnableConstantsValidation) === true) {
    _chiefData["default"].setupConstantsValidationData();

    _configurator["default"].setConfigurationSetting(s.cConstantsPath, cleanedRootPath + s.cConstantsPathActual);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('END warden.saveRootPath function');

}

;
/**
 * @function mergeClientBusinessRules
 * @description Merges the map of client defined business rule names and client defined business rule function calls
 * with the existing D-data structure that should already have all of the system defined business rules.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/10
 */

function mergeClientBusinessRules(clientBusinessRules) {
  // console.log('BEGIN warden.mergeClientBusinessRules function');
  // console.log('clientBusinessRules is: ' + JSON.stringify(clientBusinessRules));
  var functionName = mergeClientBusinessRules.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'clientBusinessRules are: ' + JSON.stringify(clientBusinessRules));

  _ruleBroker["default"].addClientRules(clientBusinessRules); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('END warden.mergeClientBusinessRules function');

}

;
/**
 * @function mergeClientCommands
 * @description Merges the map of client defined command names and client defined command function calls
 * with the existing D-data structure that should already have all of the system defined commands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/19
 */

function mergeClientCommands(clientCommands) {
  // console.log('BEGIN warden.mergeClientCommands function');
  var functionName = mergeClientCommands.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'clientCommands are: ' + JSON.stringify(clientCommands));


  _commandBroker["default"].addClientCommands(clientCommands); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('END warden.mergeClientCommands function');

}

;
/**
 * @function loadCommandAliases
 * @description Loads and merges both the system defined command aliases XML file & the client defined command aliases XML file.
 * @param {string} systemCommandsAliasesPath The path from the application root to the system defined commands aliases XML file.
 * @param {string} clientCommandsAliasesPath The path from the application root to the client defined commands aliases XML file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/21
 */

function loadCommandAliases(systemCommandsAliasesPath, clientCommandsAliasesPath) {
  var functionName = loadCommandAliases.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'systemCommandsAliasesPath is: ' + systemCommandsAliasesPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'clientCommandsAliasesPath is: ' + clientCommandsAliasesPath);

  var applicationRootPath = _configurator["default"].getConfigurationSetting(s.cApplicationCleanedRootPath);

  _configurator["default"].setConfigurationSetting(s.cSystemCommandsAliasesPath, applicationRootPath + systemCommandsAliasesPath);

  _configurator["default"].setConfigurationSetting(s.cClientCommandsAliasesPath, applicationRootPath + clientCommandsAliasesPath);

  _chiefCommander["default"].loadCommandAliasesFromPath(s.cSystemCommandsAliasesPath); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));


  _chiefCommander["default"].loadCommandAliasesFromPath(s.cClientCommandsAliasesPath); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function loadCommandWorkflows
 * @description Loads and merges both the system defined command workflows XML file & client defined command workflows XML file.
 * @param {string} systemWorkflowPath The path from the application root to the system defined command workflows XML file.
 * @param {string} clientWorkflowPath The path from the application root to the client defined command workflows XML file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/22
 */

function loadCommandWorkflows(systemWorkflowPath, clientWorkflowPath) {
  var functionName = loadCommandWorkflows.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'systemWorkflowPath is: ' + systemWorkflowPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'clientWorkflowPath is: ' + clientWorkflowPath);

  var applicationRootPath = _configurator["default"].getConfigurationSetting(s.cApplicationCleanedRootPath);

  _configurator["default"].setConfigurationSetting(s.cSystemWorkflowsPath, applicationRootPath + systemWorkflowPath);

  _configurator["default"].setConfigurationSetting(s.cClientWorkflowsPath, applicationRootPath + clientWorkflowPath);

  _chiefWorkflow["default"].loadCommandWorkflowsFromPath(s.cSystemWorkflowsPath);

  _chiefWorkflow["default"].loadCommandWorkflowsFromPath(s.cClientWorkflowsPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function executeBusinessRule
 * @description A wrapper to call a business rule from the application level code.
 * @param {string} businessRule The name of the business rule that should execute.
 * @param {string} ruleInput The input to the rule that is being called.
 * @param {string} ruleMetaData Additional data to input to the rule.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2020/06/15
 */

function executeBusinessRule(businessRule, ruleInput, ruleMetaData) {
  // console.log('BEGIN warden.executeBusinessRule function');
  // console.log('businessRule is: ' + JSON.stringify(businessRule));
  // console.log('ruleInput is: ' + JSON.stringify(ruleInput));
  // console.log('ruleMetaData is: ' + JSON.stringify(ruleMetaData));
  var functionName = executeBusinessRule.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'businessRule is: ' + JSON.stringify(businessRule));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'ruleInput is: ' + JSON.stringify(ruleInput));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'ruleMetaData is: ' + JSON.stringify(ruleMetaData));

  var rules = {};
  var returnData;
  rules[0] = businessRule;
  returnData = _ruleBroker["default"].processRules(ruleInput, ruleMetaData, rules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END warden.executeBusinessRule function');


  return returnData;
}

;
/**
 * @function enqueueCommand
 * @description Adds a command to the command queue.
 * It is worth noting that a command could actually load a whole workflow of commands.
 * So one command can spawn into many commands that cause
 * the command queue to be very full with a very complicated workflow.
 * This also acts as a wrapper for the chiefCommander.enqueueCommand function.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

function enqueueCommand(command) {
  // console.log('BEGIN warden.enqueueCommand function');
  // console.log('command is: ' + command);
  var functionName = enqueueCommand.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'command is: ' + command);

  _chiefCommander["default"].enqueueCommand(command);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('END warden.enqueueCommand function');

}

;
/**
 * @function isCommandQueueEmpty
 * @description This is a wrapper for the chiefCommander.isCommandQueueEmpty function.
 * Determines if the command queue is empty or not,
 * which also determines if the application should continue executing commands from the command queue
 * in sequential order or prompt for another command or exit.
 * @return {Boolean} True or False to indicate if command execution should continue or not.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

function isCommandQueueEmpty() {
  var functionName = isCommandQueueEmpty.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var returnValue = false;
  returnValue = _chiefCommander["default"].isCommandQueueEmpty();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @function processCommandQueue
 * @description This is just a wrapper for the chiefCommander.processCommandQueue function,
 * which will ultimately call chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main application loop.
 * @return {boolean} A TRUE or FALSE to indicate if the command loop should terminate when it's done.
 * @author Seth Hollingsead
 * @date 2020/05/27
 */

function processCommandQueue() {
  var functionName = processCommandQueue.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var returnValue = false;
  returnValue = _chiefCommander["default"].processCommandQueue();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnValue;
}

;
/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|boolean|integer|object} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @data 2020/05/26
 */

function setConfigurationSetting(configurationName, configurationValue) {
  // console.log('BEGIN warden.setConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  var functionName = setConfigurationSetting.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'configurationValue is: ' + configurationValue); // D[s.cConfiguration][configurationName] = configurationValue;


  _configurator["default"].setConfigurationSetting(configurationName, configurationValue); // console.log('END warden.setConfigurationSetting function');


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|object} The value of whatever was stored in the D[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/05/26
 */

function getConfigurationSetting(configurationName) {
  // console.log('BEGIN warden.getConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  var functionName = getConfigurationSetting.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName); // var returnConfigurationValue = D[s.cConfiguration][configurationName];


  var returnConfigurationValue = _configurator["default"].getConfigurationSetting(configurationName); // console.log('returnConfigurationValue is: ' + JSON.stringify(returnConfigurationValue));
  // console.log('END warden.getConfigurationSetting function');


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnConfigurationValue is: ' + returnConfigurationValue);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnConfigurationValue;
}

;
/**
 * @function consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string|boolean|integer|object} message The message or data content that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/26
 * @NOTE We cannot insturment this code with calls to loggers.consoleLog as it would introduce yet another ciruclar dependency.
 * We will have to stick with just hard coded console.logs in this case to debug at this level.
 */

function consoleLog(classPath, message) {
  // console.log('BEGIN warden.consoleLog function');
  // console.log('classPath is: ' + classPath);
  // console.log('message is: ' + JSON.stringify(message));
  _loggers["default"].consoleLog(classPath, message); // console.log('END warden.consoleLog function');

}

;
var _default = {
  deployApplication: deployApplication,
  releaseApplication: releaseApplication,
  bootStrapApplication: bootStrapApplication,
  processRootPath: processRootPath,
  saveRootPath: saveRootPath,
  mergeClientBusinessRules: mergeClientBusinessRules,
  mergeClientCommands: mergeClientCommands,
  loadCommandAliases: loadCommandAliases,
  loadCommandWorkflows: loadCommandWorkflows,
  executeBusinessRule: executeBusinessRule,
  enqueueCommand: enqueueCommand,
  isCommandQueueEmpty: isCommandQueueEmpty,
  processCommandQueue: processCommandQueue,
  setConfigurationSetting: setConfigurationSetting,
  getConfigurationSetting: getConfigurationSetting,
  consoleLog: consoleLog
};
exports["default"] = _default;