"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefConfiguration = _interopRequireDefault(require("../Controllers/chiefConfiguration"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _timers = _interopRequireDefault(require("../Executrix/timers"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _dataBroker = _interopRequireDefault(require("../Executrix/dataBroker"));

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
// import chiefWorkflow from '../Controllers/chiefWorkflow';
var path = require('path');

var D = require('../Resources/data');
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = deployApplication.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'destination is: ' + destination);

  var deploymentSuccessfull;
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = releaseApplication.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'release is: ' + release);

  var releaseSuccessfull;
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = bootStrapApplication.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);

  _chiefConfiguration["default"].setupConfiguration(pathAndFilename); // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('contents of D are: ' + JSON.stringify(D));
  // console.log('END warden.bootStrapApplication function');


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contents of D are: ' + JSON.stringify(D));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = processRootPath.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'systemRootPath is: ' + systemRootPath);
  var rules = {};
  rules[1] = s.cparseSystemRootPath;

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = saveRootPath.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'rootPath is: ' + rootPath);

  _configurator["default"].setConfigurationSetting(s.cApplicationRootPath, rootPath);

  var cleanedRootPath;
  cleanedRootPath = _fileBroker["default"].cleanRootPath(rootPath);

  _configurator["default"].setConfigurationSetting(s.cApplicationCleanedRootPath, cleanedRootPath);

  _configurator["default"].setConfigurationSetting(s.cApplicationName, process.env.npm_package_name);

  _configurator["default"].setConfigurationSetting(s.cApplicationVersionNumber, process.env.npm_package_version);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function processCommand
 * @description This is just a wrapper for the chiefCommander.processCommand function.
 * @param {string} command The command string and all of the arguments that should be processed for the command.
 * @return {boolean} A TRUE or FALSE to indicate if the command loop should terminate when it's done.
 * @author Seth Hollingsead
 * @date 2020/05/27
 */

function processCommand(command) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = processCommand.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'command is: ' + command);

  var returnValue = false;

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
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
  processCommand: processCommand,
  setConfigurationSetting: setConfigurationSetting,
  getConfigurationSetting: getConfigurationSetting,
  consoleLog: consoleLog
};
exports["default"] = _default;