import chiefConfiguration from '../Controllers/chiefConfiguration';
// import chiefData from '../Controllers/chiefData';
// import chiefWorkflow from '../Controllers/chiefWorkflow';
import configurator from '../Executrix/configurator';
import timer from '../Executrix/timers';
import ruleBroker from '../BusinessRules/ruleBroker';
import loggers from '../Executrix/loggers';
import * as s from '../Constants/system.constants';
import * as g from '../Constants/generic.constants';
import * as b from '../Constants/basic.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @name bootStrapApplication
 * @description Do all of the activities to setup the application system to run whatever actions the application will run.
 * @param  {[String]} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);
  chiefConfiguration.setupConfiguration(pathAndFilename);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('contents of D are: ' + JSON.stringify(D));
  // console.log('END warden.bootStrapApplication function');
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D are: ' + JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling: path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is C:/NodeJS-App/Application/NodeJS-App/
 * But what we really need for the root path is just C:/NodeJS-App/
 * @param  {[String]} systemRootPath The root path as returned by calling: path.resolve(__dirname);
 * @return {[String]} The true root path of the application.
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
  let rootPath = ruleBroker.processRules(systemRootPath, '', rules);
  // console.log('systemRootPath after business rule processing is: ' + rootPath);
  // console.log('END warden.processRootPath function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return rootPath;
};

/**
 * @name processCommand
 * @description This is just a wrapper for the chiefCommander.processCommand function.
 * @param  {[String]} command The command string and all of the arguments that should be processed for the command.
 * @return {[Boolean]} A TRUE or FALSE to indicate if the command loop should terminate when it's done.
 * @author Seth Hollingsead
 * @date 2020/05/27
 */
function processCommand(command) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = processCommand.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'command is: ' + command);
  var returnValue = false;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @name setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {[String]} configurationName The key of the configuration setting.
 * @param {[String/Boolean/Integer/Object]} configurationValue The value of the configuration setting.
 * @author Seth Hollingsead
 * @data 2020/05/26
 */
function setConfigurationSetting(configurationName, configurationValue) {
  // console.log('BEGIN warden.setConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = setConfigurationSetting.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationValue is: ' + configurationValue);
  // D[s.cConfiguration][configurationName] = configurationValue;
  configurator.setConfigurationSetting(configurationName, configurationValue);
  // console.log('END warden.setConfigurationSetting function');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param  {[String]} configurationName The key of the configuration setting.
 * @return {[String/Integer/Boolean/Object]} The value of whatever was stored in the D[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/05/26
 */
function getConfigurationSetting(configurationName) {
// console.log('BEGIN warden.getConfigurationSetting function');
// console.log('configurationName is: ' + configurationName);
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var functionName = getConfigurationSetting.name;
loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
// var returnConfigurationValue = D[s.cConfiguration][configurationName];
var returnConfigurationValue = configurator.getConfigurationSetting(configurationName);
// console.log('returnConfigurationValue is: ' + JSON.stringify(returnConfigurationValue));
// console.log('END warden.getConfigurationSetting function');
loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnConfigurationValue is: ' + returnConfigurationValue);
loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
return returnConfigurationValue;
};

/**
 * @name consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param  {[String]} classPath The class path for the caller of this function file.function or class.method.
 * @param  {[String/Boolean/Integer/Object]} message The message or data content that should be dumped to the output.
 * @author Seth Hollingsead
 * @date 2020/05/26
 * @NOTE We cannot insturment this code with calls to loggers.consoleLog as it would introduce yet another ciruclar dependency.
 * We will have to stick with just hard coded console.logs in this case to debug at this level.
 */
function consoleLog(classPath, message) {
  // console.log('BEGIN warden.consoleLog function');
  // console.log('classPath is: ' + classPath);
  // console.log('message is: ' + JSON.stringify(message));
  loggers.consoleLog(classPath, message);
  // console.log('END warden.consoleLog function');
};

export default {
  bootStrapApplication,
  processRootPath,
  processCommand,
  setConfigurationSetting,
  getConfigurationSetting,
  consoleLog
};
