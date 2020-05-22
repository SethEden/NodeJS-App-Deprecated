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
  console.log('BEGIN warden.bootStrapApplication function');
  console.log('pathAndFilename is: ' + pathAndFilename);
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = bootStrapApp.name;
  // loggers.consoleLog(baseFileName + b.cDot + fuctionName, s.cBEGIN_Function);
  chiefConfiguration.setupConfiguration(pathAndFilename);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  console.log('contents of D are: ' + JSON.stringify(D));
  console.log('END warden.bootStrapApplication function');
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

export default {
  bootStrapApplication,
  processRootPath
};
