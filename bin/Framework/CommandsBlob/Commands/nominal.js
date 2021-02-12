"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColors = exports.commandMetrics = exports.businessRulesMetrics = exports.constantsPatternRecognizer = exports.constantsGeneratorList = exports.constantsGenerator = exports.commandAliasGenerator = exports.commandGenerator = exports.businessRule = exports.clearDataStorage = exports.printDataHive = exports.workflow = exports.commandSequencer = exports.workflowHelp = exports.help = exports.releaseApplication = exports.deployMetaData = exports.deployApplication = exports.clearScreen = exports.name = exports.about = exports.version = exports.exit = exports.echoCommand = void 0;

var _configurator = _interopRequireDefault(require("../../Executrix/configurator"));

var _lexical = _interopRequireDefault(require("../../Executrix/lexical"));

var _commandBroker = _interopRequireDefault(require("../commandBroker"));

var _ruleBroker = _interopRequireDefault(require("../../BusinessRules/ruleBroker"));

var _fileBroker = _interopRequireDefault(require("../../Executrix/fileBroker"));

var _dataBroker = _interopRequireDefault(require("../../Executrix/dataBroker"));

var _workflowBroker = _interopRequireDefault(require("../../Executrix/workflowBroker"));

var _queue = _interopRequireDefault(require("../../Resources/queue"));

var _stack = _interopRequireDefault(require("../../Resources/stack"));

var _timers = _interopRequireDefault(require("../../Executrix/timers"));

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../Constants/generic.constants"));

var n = _interopRequireWildcard(require("../../Constants/numeric.constants"));

var w = _interopRequireWildcard(require("../../Constants/word.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:configurator
 * @requires module:lexical
 * @requires module:fileBroker
 * @requires module:dataBroker
 * @requires module:commandBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:queue
 * @requires module:stack
 * @requires module:timers
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/19
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var prompt = require('prompt-sync')();

var figlet = require('figlet');

var path = require('path');

var math = require('mathjs');

var D = require('../../../Framework/Resources/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function echoCommand
 * @description returns the input as the output without any changes.
 * @param {array<boolean|string|integer>} inputData String that should be echoed.
 * inputData[0] === 'echoCommand'
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */

var echoCommand = function echoCommand(inputData, inputMetaData) {
  var functionName = s.cechoCommand;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  if (!inputData) {
    return false;
  }

  _loggers["default"].consoleLog(inputData);

  var returnData = true;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function exit
 * @description Returns false so the entire application can exit.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'exit'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} False to indicate that the application should exit.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */


exports.echoCommand = echoCommand;

var exit = function exit(inputData, inputMetaData) {
  var functionName = w.cexit;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function version
 * @description Displays the current version number for the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'version'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */


exports.exit = exit;

var version = function version(inputData, inputMetaData) {
  var functionName = w.cversion;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  console.log(_configurator["default"].getConfigurationSetting(s.cApplicationVersionNumber));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function about
 * @description Displays the message about the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'about'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */


exports.version = version;

var about = function about(inputData, inputMetaData) {
  var functionName = w.cabout;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  console.log(_configurator["default"].getConfigurationSetting(s.cApplicationDescription));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function name
 * @description Displays the name of the current application in standard font format, nothing special.
 * @param {array<boolean|string|integer>} inputData An array that could really contain anything depending
 * on what the user entered, but the function converts and filters out for a boolean
 * True or False value internally to the function.
 * inputData[0] === 'name'
 * inputData[1] === 'true|false' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */


exports.about = about;

var name = function name(inputData, inputMetaData) {
  var functionName = w.cname;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  var applicationName = _configurator["default"].getConfigurationSetting(s.cApplicationName);

  var figletFont = _configurator["default"].getConfigurationSetting(s.cFigletFont);

  var useFancyFont = false;
  var rules = {};
  rules[0] = s.cstringToDataType;
  useFancyFont = _ruleBroker["default"].processRules(inputData[1], '', rules);

  if (useFancyFont === true) {
    figletFont = _configurator["default"].getConfigurationSetting(s.cFigletFont);
    console.log(figlet.textSync(applicationName, {
      font: figletFont,
      horizontalLayout: s.cfull
    }));
  } else {
    console.log(applicationName);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function clearScreen
 * @description Clears all data from the console cache by printing a bunch of blank lines to the screen.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/01/22
 */


exports.name = name;

var clearScreen = function clearScreen(inputData, inputMetaData) {
  var functionName = s.cclearScreen;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  console.clear();

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function deployApplication
 * @description Executes the deployment of the application, part of the build-deploy-release cycle.
 * @param {string} inputData The path the non-code files should be copied from. (SOURCE)
 * @param {string} inputMetaData The path the non-code files should be copied to. (DESTINATION)
 * @return {boolean} A TRUE or FALSE value to indicate if the deployment was successful or not.
 * @author Seth Hollingsead
 * @date 2020/07/30
 */


exports.clearScreen = clearScreen;

var deployApplication = function deployApplication(inputData, inputMetaData) {
  var functionName = s.cdeployApplication;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  if (_configurator["default"].getConfigurationSetting(s.cPassAllConstantsValidations) === true && _configurator["default"].getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === true) {
    // DEPLOY APPLICATION
    console.log(s.cDEPLOY_APPLICATION);

    var sourcePath = _configurator["default"].getConfigurationSetting(s.cSourceResourcesPath);

    var destinationPath = _configurator["default"].getConfigurationSetting(s.cDestinationResourcesPath);

    var deploymentStatus = _fileBroker["default"].copyAllFilesAndFoldersFromFolderToFolder(sourcePath, destinationPath); // console.log('Deployment was completed: ' + deploymentStatus);


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDeploymentWasCompleted + true);

    _configurator["default"].setConfigurationSetting(s.cdeploymentCompleted, true);
  } else {
    if (_configurator["default"].getConfigurationSetting(s.cPassAllConstantsValidations) === false) {
      // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1a + s.cdeployApplicationMessage2a);
    }

    if (_configurator["default"].getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === false) {
      // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1b + s.cdeployApplicationMessage2a);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function deployMetaData
 * @description Copies application meta-data from the source to the destination.
 * @param {object} inputData The data that should be transfered to the output file & path.
 * @param {string} inputMetaData The path the data should be written out to.
 * @return {boolean} A TRUE or FALSE value to indicate if the data was copied succesful or not.
 * @author Seth Hollingsead
 * @date 2021/01/08
 */


exports.deployApplication = deployApplication;

var deployMetaData = function deployMetaData(inputData, inputMetaData) {
  var functionName = s.cdeployMetaData;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  returnData = true;

  if (!inputData) {
    returnData = false;
  } else {
    var aggregateCommandString = '';
    var getAttributeNameRule = [];
    var getAttributeValueRule = [];
    getAttributeNameRule[0] = s.cgetAttributeName;
    getAttributeValueRule[0] = s.cgetAttributeValue; // for (let i = 1; i < inputData.length; i++) {
    //   // BEGIN i-th iteration:
    //   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);
    //   // inputData[i] is:
    //   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIis + inputData[i]);
    //   aggregateCommandString = aggregateCommandString + inputData[i] + b.cSpace;
    //   // aggregateCommandString is:
    //   loggers.consoleLog(baseFileName + b.cDot + functionName, s.caggregateCommandStringIs + aggregateCommandString);
    //   // END i-th iteration:
    //   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
    // }

    inputData.shift();
    var metaDataParameters = inputData.join(b.cSpace).split(b.cComa); // aggregateCommandString.split(b.cComa);
    // metaDataParameters is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmetaDataParametersIs + JSON.stringify(metaDataParameters)); // metaDataParameters length is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmetaDataParametersLengthIs + metaDataParameters.length);

    var metaDataOutput = {};

    for (var i = 0; i < metaDataParameters.length; i++) {
      var attributeJsonString = metaDataParameters[i]; // attributeJsonString is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cattributeJsonStringIs + attributeJsonString);

      var appAttributeName = _ruleBroker["default"].processRules(attributeJsonString, '', getAttributeNameRule); // appAttributeName is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cappAttributeNameIs + appAttributeName);

      var appAttributeValue = _ruleBroker["default"].processRules(attributeJsonString, '', getAttributeValueRule); // appAttributeValue is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cappAttributeValueIs + appAttributeValue);

      if (appAttributeName.includes(w.cName) === true) {
        _configurator["default"].setConfigurationSetting(s.cApplicationName, appAttributeValue);
      } else if (appAttributeName.includes(w.cVersion) === true) {
        _configurator["default"].setConfigurationSetting(s.cApplicationVersionNumber, appAttributeValue);
      } else if (appAttributeName.includes(w.cDescription) === true) {
        _configurator["default"].setConfigurationSetting(s.cApplicationDescription, appAttributeValue);
      } else {
        _configurator["default"].setConfigurationSetting(appAttributeName, appAttributeValue);
      }

      metaDataOutput[appAttributeName] = appAttributeValue;
    }

    var metaDataPathAndFilename = _configurator["default"].getConfigurationSetting(s.cConfigurationPath);

    metaDataPathAndFilename = path.resolve(metaDataPathAndFilename + s.cmetaDataDotJson); // metaDataPathAndFilename is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmetaDataPathAndFilenameIs + metaDataPathAndFilename);

    _fileBroker["default"].writeJsonData(metaDataPathAndFilename, metaDataOutput);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function releaseApplication
 * @description Executes the release of the application, part of the build-deploy-release cycle.
 * Scans the specified release folder path and determines if
 * there is a zip file for the current release or not. If there is not,
 * then the system will build a zip file from the bin folder excluding the release folder
 * and save the resulting archive to the release folder.
 * @param {string} inputData The path for the bin folder where the latest source code will have been deployed. (SOURCE)
 * @param {string} inputMetaData The path for the release folder where the release zip archive file should be saved. (RELEASE)
 * @return {boolean} A TRUE or FALSE value to indicate if the zip archive was created successfully or not.
 * @author Seth Hollingsead
 * @date 2020/07/30
 */


exports.deployMetaData = deployMetaData;

var releaseApplication = function releaseApplication(inputData, inputMetaData) {
  var functionName = s.creleaseApplication;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  if (_configurator["default"].getConfigurationSetting(s.cPassAllConstantsValidations) === true && _configurator["default"].getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === true) {
    // RELEASE APPLICATION
    console.log(s.cRELEASE_APPLICATION);

    var sourcePath = _configurator["default"].getConfigurationSetting(s.cBinaryRootPath);

    var destinationPath = _configurator["default"].getConfigurationSetting(s.cBinaryReleasePath);

    var releaseResult = _fileBroker["default"].buildReleasePackage(sourcePath, destinationPath); // console.log('Release was completed: ' + releaseResult);


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBuildMessage2 + true);

    _configurator["default"].setConfigurationSetting(s.creleaseCompleted, true);
  } else {
    if (_configurator["default"].getConfigurationSetting(s.cPassAllConstantsValidations) === false) {
      // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1a + s.cdeployApplicationMessage2a);
    }

    if (_configurator["default"].getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === false) {
      // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1b + s.cdeployApplicationMessage2a);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function help
 * @description Displays all the information about all of the commands in the system,
 * including both system defined commands & client defined commands.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'help'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */


exports.releaseApplication = releaseApplication;

var help = function help(inputData, inputMetaData) {
  var functionName = w.chelp;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  _loggers["default"].consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandsAliases][w.cCommand], [w.cName, w.cDescription]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function workflowHelp
 * @description Displays all the information about all the workflows in the system,
 * including both system defined workflows & client defined commands.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'workflowHelp'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */


exports.help = help;

var workflowHelp = function workflowHelp(inputData, inputMetaData) {
  var functionName = s.cworkflowHelp;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  _loggers["default"].consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandWorkflows][w.cWorkflow], [w.cName]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function commandSequencer
 * @description Takes an arguments array where the second array object would contain a list of
 * commands that should enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of commands that should be enqueued to the command queue.
 * inputData[0] === 'commandSequencer'
 * inputData[1] === command string 1
 * inputData[2] === command string 2
 * inputData[n] === command string n
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */


exports.workflowHelp = workflowHelp;

var commandSequencer = function commandSequencer(inputData, inputMetaData) {
  var functionName = s.ccommandSequencer;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  for (var i = 1; i < inputData.length; i++) {
    var commandString = inputData[i]; // b.cli + b.cmi + b.ct;

    var primaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cPrimaryCommandDelimiter); // console.log('primaryCommandDelimiter is: ' + primaryCommandDelimiter);


    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = b.cSpace;
    }

    var secondaryCommandArgsDelimiter = _configurator["default"].getConfigurationSetting(s.cSecondaryCommandDelimiter); // console.log('secondaryCommandDelimiter is: ' + secondaryCommandArgsDelimiter);


    var tertiaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cTertiaryCommandDelimiter); // console.log('tertiaryCommandDelimiter is: ' + tertiaryCommandDelimiter);
    // Replace 2nd & 3rd level delimiters and down-increment them so we are dealing with command strings that can actually be executed.


    commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
    commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);

    var currentCommand = _commandBroker["default"].getValidCommand(commandString, primaryCommandDelimiter);

    var commandArgs = _commandBroker["default"].getCommandArgs(commandString, primaryCommandDelimiter); // We need to recompose the command arguments for the current command using the s.cPrimaryCommandDelimiter.


    if (currentCommand !== false) {
      for (var j = 1; j < commandArgs.length; j++) {
        currentCommand = currentCommand + primaryCommandDelimiter + commandArgs[j];
      }

      _queue["default"].enqueue(s.cCommandQueue, currentCommand);
    } else {
      // WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.
      console.log(s.ccommandSequencerMessage1 + s.ccommandSequencerMessage2);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function workflow
 * @description Takes an arguments array where the second array object would contain a workflow name.
 * We will look up the named workflow in the D-data structure and send that workflow to a call to the command sequencer.
 * Which will in-turn convert the list of commands in that workflow into commands that are enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a workflow name, that we should use to look up the workflow in the D-data structure.
 * inputData[0] === 'workflow'
 * inputData[1] === workflowName
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */


exports.commandSequencer = commandSequencer;

var workflow = function workflow(inputData, inputMetaData) {
  var functionName = w.cworkflow;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var workflowName = inputData[1];

  var workflowValue = _workflowBroker["default"].getWorkflow(workflowName);

  if (workflowValue !== false) {
    _queue["default"].enqueue(s.cCommandQueue, workflowValue);
  } else {
    console.log(s.cworkflowMessage1 + workflowName + b.cComa + s.cworkflowMessage2 + s.cworkflowMessage3);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function printDataHive
 * @description Prints out all the data contents of a particular data hive in the D-data structure.
 * If no hive is specified then the entire D-data structure will be printed.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data hive name at the top level of the D-data structure.
 * Examples: Configuration, Workflows, Colors, Commands, etc...
 * inputData[0] === 'printDataHive'
 * inputData[1] === dataHiveName
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */


exports.workflow = workflow;

var printDataHive = function printDataHive(inputData, inputMetaData) {
  var functionName = s.cprintDataHive;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  if (D[inputData[1]] !== undefined) {
    // contents are:
    console.log(inputData[1] + ' contents are: ' + JSON.stringify(D[inputData[1]]));
  } else {
    // contents of D are:
    console.log('contents of D are: ' + JSON.stringify(D));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function clearDataStorage
 * @description Completely wipes out all the data stored in the DataStorage data hive of the D data structure.
 * @param {string} inputData     [description]
 * @param {string} inputMetaData [description]
 * @return {boolean} True to indicate that the application should not exit.
 */


exports.printDataHive = printDataHive;

var clearDataStorage = function clearDataStorage(inputData, inputMetaData) {
  var functionName = s.cclearDataStorage;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  _dataBroker["default"].clearData('');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function businessRule
 * @description Executes a user specified business rule with some input.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a business rule name and perhaps some rule inputs.
 * inputData[0] === 'businessRule'
 * inputData[1] === rule 1 (including arguments with secondary delimiter)
 * inputData[2] === rule 2 (including arguments with secondary delimiter)
 * inputData[n] === rule n (including arguments with secondary delimiter)
 * NOTE: There are 2 ways this system can work, the user can either call each rule with it's own inputs,
 * or the user can leverage the rule system itself to pass the outputs from rule 1 as inputs to rule 2, etc...
 * This command will only always take the arguments for the first business rule as inputs and let the business rules system
 * pass the outputs as inputs as discussed above.
 * It is assumed if the user wanted to execute a sequence of business rules each with their own inputs,
 * Then the user should use the command sequencer in combination with this function
 * to call a series of business rules each with their own inputs.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */


exports.clearDataStorage = clearDataStorage;

var businessRule = function businessRule(inputData, inputMetaData) {
  var functionName = s.cbusinessRule;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  var secondaryCommandArgsDelimiter = _configurator["default"].getConfigurationSetting(s.cSecondaryCommandDelimiter);

  var rules = [];
  var ruleInputData, ruleInputMetaData;
  var ruleOutput = '';
  var argsArrayContainsCharacterRule = [];
  var removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = s.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = s.cremoveCharacterFromArray;
  var addedARule = false;

  var businessRuleOutput = _configurator["default"].getConfigurationSetting(s.cEnableBusinessRuleOutput);

  var businessRuleMetricsEnabled = _configurator["default"].getConfigurationSetting(s.cEnableBusinessRulePerformanceMetrics);

  var businessRuleStartTime = '';
  var businessRuleEndTime = '';
  var businessRuleDeltaTime = ''; // First go through each rule that should be executed and determine if
  // there are any inputs that need to be passed into the business rule.

  for (var i = 1; i < inputData.length; i++) {
    // Begin the i-th iteration of the inputData array. i is:
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIterationOfInputDataArray + i);

    var currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.
    // currentRule is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentRuleIs + JSON.stringify(currentRuleArg));

    var ruleArgs = [];

    if (i === 1) {
      rules = _lexical["default"].parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 2 && inputData.length <= 4) {
      ruleInputData = _lexical["default"].parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 2 && inputData.length > 4) {
      ruleInputData = _lexical["default"].parseBusinessRuleArgument(inputData, i, true);
    } else if (i === 3 && inputData.length <= 4) {
      ruleInputMetaData = _lexical["default"].parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 3 && inputData.length > 4) {
      // In this case all of the arguments will have been combined into a single array and added to the ruleInputData.
      ruleInputMetaData = '';
    }
  } // rules is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.crulesIs + JSON.stringify(rules)); // ruleInputData is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cruleInputDataIs + ruleInputData); // ruleInputMetaData is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cruleInputMetaData + JSON.stringify(ruleInputMetaData));

  if (businessRuleMetricsEnabled === true) {
    // Here we will capture the start time of the business rule we are about to execute.
    // After executing we will capture the end time and then
    // compute the difference to determine how many milliseconds it took to run the business rule.
    businessRuleStartTime = _timers["default"].getNowMoment(g.cYYYYMMDD_HHmmss_SSS); // Business Rule Start time is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBusinessRuleStartTimeIs + businessRuleStartTime);
  }

  ruleOutput = _ruleBroker["default"].processRules(ruleInputData, ruleInputMetaData, rules);

  if (businessRuleMetricsEnabled === true) {
    var performanceTrackingObject = {};
    businessRuleEndTime = _timers["default"].getNowMoment(g.cYYYYMMDD_HHmmss_SSS); // BusinessRule End time is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBusinessRuleEndTimeIs + businessRuleEndTime); // Now compute the delta time so we know how long it took to run that business rule.


    businessRuleDeltaTime = _timers["default"].computeDeltaTime(businessRuleStartTime, businessRuleEndTime); // BusinessRule run-time is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBusinessRuleRunTimeIs + businessRuleDeltaTime); // Check to make sure the business rule performance tracking stack exists or does not exist.


    if (D[s.cBusinessRulePerformanceTrackingStack] === undefined) {
      _stack["default"].initStack(s.cBusinessRulePerformanceTrackingStack);
    }

    if (D[s.cBusinessRuleNamesPerformanceTrackingStack] === undefined) {
      _stack["default"].initStack(s.cBusinessRuleNamesPerformanceTrackingStack);
    }

    performanceTrackingObject = {
      Name: rules[0],
      RunTime: businessRuleDeltaTime
    };

    if (_stack["default"].contains(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]) === false) {
      _stack["default"].push(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]);
    }

    _stack["default"].push(s.cBusinessRulePerformanceTrackingStack, performanceTrackingObject); // stack.print(s.cBusinessRulePerformanceTrackingStack);
    // stack.print(s.cBusinessRuleNamesPerformanceTrackingStack);

  }

  if (businessRuleOutput === true) {
    // Rule output is:
    console.log(s.cRuleOutputIs + JSON.stringify(ruleOutput));
  }

  businessRuleStartTime = '';
  businessRuleEndTime = '';
  businessRuleDeltaTime = '';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function commandGenerator
 * @description Takes a set of input parameters such as a command and the number of times it should be executed.
 * Then this command will enqueue that command that number of times to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the command that should be executed and the number of times it should be executed.
 * inputData[0] === 'commandGenerator'
 * inputData[1] === command String
 * inputData[2] === number of times to enqueue the above command string
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */


exports.businessRule = businessRule;

var commandGenerator = function commandGenerator(inputData, inputMetaData) {
  var functionName = s.ccommandGenerator;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var replaceCharacterWithCharacterRule = [];
  replaceCharacterWithCharacterRule[0] = s.creplaceCharacterWithCharacter;

  var primaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cPrimaryCommandDelimiter);

  if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
    primaryCommandDelimiter = b.cSpace;
  }

  var secondaryCommandArgsDelimiter = _configurator["default"].getConfigurationSetting(s.cSecondaryCommandDelimiter);

  var tertiaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cTertiaryCommandDelimiter);

  var commandString = inputData[1]; // NOTE: The str.replace only replaces the first instance of a string value, not all values.
  // but we might have another issue in the sense that if the string begins and ends with "[" & "]" respectively,
  // we might not want to replace those characters.
  // Because it might be that the command should take responsibility for that in such a special case,
  // i.e. treating the whole block as a single array and doing it's own split operation.
  // commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
  // commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
  // commandString before attempted delimiter swap is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandStringBeforeAttemptedDelimiterSwapIs + commandString); // replaceCharacterWithCharacterRule is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creplaceCharacterWithCharacterRuleIs + JSON.stringify(replaceCharacterWithCharacterRule));

  var secondaryCommandDelimiterRegEx = new RegExp('\\' + secondaryCommandArgsDelimiter, 'g');
  commandString = _ruleBroker["default"].processRules(commandString, [secondaryCommandDelimiterRegEx, primaryCommandDelimiter], replaceCharacterWithCharacterRule); // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandGeneratorMessage1 + commandString);

  var tertiaryCommandDelimiterRegEx = new RegExp('\\' + tertiaryCommandDelimiter, 'g');
  commandString = _ruleBroker["default"].processRules(commandString, [tertiaryCommandDelimiterRegEx, secondaryCommandArgsDelimiter], replaceCharacterWithCharacterRule); // After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandGeneratorMessage2 + commandString);

  var currentCommand = _commandBroker["default"].getValidCommand(commandString, primaryCommandDelimiter);

  var commandArgs = _commandBroker["default"].getCommandArgs(commandString, primaryCommandDelimiter);

  if (currentCommand !== false) {
    if (isNaN(inputData[2]) === false) {
      // Make sure the user passed in a number for the second argument.
      var numberOfCommands = parseInt(inputData[2]);

      if (numberOfCommands > 0) {
        for (var i = 0; i < numberOfCommands; i++) {
          _queue["default"].enqueue(s.cCommandQueue, commandString);
        }
      } else {
        // WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
        console.log(s.ccommandGeneratorMessage3 + numberOfCommands);
      }
    } else {
      // WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
      console.log(s.ccommandGeneratorMessage4 + inputData[2]);
    }
  } else {
    // WARNING: nominal.commandGenerator: The specified command:
    // was not found, please enter a valid command and try again.
    console.log(s.ccommandGeneratorMessage5 + commandString + s.ccommandGeneratorMessage6);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function commandAliasGenerator
 * @description Requests a set of inputs from the users for a command name, and a series of command words and a list of command word acronyms.
 * The command then calls a series of business rules to in-turn generate all possible combinations of command words and command word acronyms.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/01/14
 * @NOTE Test String for argument driven interface for this command:
 * {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
 */


exports.commandGenerator = commandGenerator;

var commandAliasGenerator = function commandAliasGenerator(inputData, inputMetaData) {
  var functionName = s.ccommandAliasGenerator;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var commandName = '';
  var commandWordAliasList = '';
  var validCommandName = false;
  var validCommandWordAliasList = false;
  var validCommandInput = false;
  var commandAliasDataStructure = {};
  var commandNameParsingRule = [];
  var camelCaseToArrayRule = [];
  var commandWordAliasListParsingRule = [];
  var generateCommandAliasesRule = [];
  commandNameParsingRule[0] = s.cisValidCommandNameString;
  camelCaseToArrayRule[0] = s.cconvertCamelCaseStringToArray;
  commandWordAliasListParsingRule[0] = s.cisStringList;
  generateCommandAliasesRule[0] = s.cgenerateCommandAliases; // Command can be called by passing parameters and bypass the prompt system.

  console.log(s.ccommandAliasGeneratorMessage1); // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}

  console.log(s.ccommandAliasGeneratorMessage2);

  if (inputData.length === 0) {
    while (validCommandName === false) {
      console.log(s.cCommandNamePrompt1);
      console.log(s.cCommandNamePrompt2);
      console.log(s.cCommandNamePrompt3);
      console.log(s.cCommandNamePrompt4);
      console.log(s.cCommandNamePrompt5);
      commandName = prompt(b.cGreaterThan);
      validCommandName = _ruleBroker["default"].processRules(commandName, '', commandNameParsingRule);

      if (validCommandName === false) {
        // INVALID INPUT: Please enter a valid camel-case command name.
        console.log(s.ccommandAliasGeneratorMessage3);
      }
    }

    var camelCaseCommandNameArray = _ruleBroker["default"].processRules(commandName, '', camelCaseToArrayRule); // camelCaseCommandNameArray is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccamelCaseCommandNameArrayIs + JSON.stringify(camelCaseCommandNameArray));

    for (var i = 0; i < camelCaseCommandNameArray.length; i++) {
      var commandWord = camelCaseCommandNameArray[i]; // current commandWord is:

      console.log(s.ccurrentCommandWordIs + commandWord);
      validCommandWordAliasList = false;

      if (commandWord != '') {
        commandAliasDataStructure[commandWord] = {};

        while (validCommandWordAliasList === false) {
          console.log(s.cCommandWordAliasPrompt1);
          console.log(s.cCommandWordAliasPrompt2);
          console.log(s.cCommandWordAliasPrompt3 + b.cSpace + commandWord);
          commandWordAliasList = prompt(b.cGreaterThan);
          validCommandWordAliasList = _ruleBroker["default"].processRules(commandWordAliasList, '', commandWordAliasListParsingRule);

          if (validCommandWordAliasList === false) {
            // INVALID INPUT: Please enter a valid command word alias list.
            console.log(s.ccommandAliasGeneratorMessage4);
          } else if (commandWordAliasList != '') {
            // As long as the user entered something we should be able to proceed!
            validCommandWordAliasList = true;
          }
        } // End while-loop: validCommandWordAliasList


        commandAliasDataStructure[commandWord] = commandWordAliasList;
        validCommandInput = true;
      }
    }
  } else if (inputData.length === 2) {
    try {
      commandAliasDataStructure = JSON.parse(inputData[1]);
      validCommandInput = true;
    } catch (e) {
      // PARSER ERROR:
      console.log(s.cPARSER_ERROR + e.message); // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.

      console.log(s.ccommandAliasGeneratorMessage5); // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}

      console.log(s.ccommandAliasGeneratorMessage2);
    }
  } else {
    // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
    console.log(s.ccommandAliasGeneratorMessage5); // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}

    console.log(s.ccommandAliasGeneratorMessage2);
  }

  if (validCommandInput === true) {
    // ccommandAliasDataStructure is:
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandAliasDataStructureIs + JSON.stringify(commandAliasDataStructure)); // At this point the user should have entered all valid data and we should be ready to proceed.
    // TODO: Start generating all the possible combinations of the command words and command word aliases.
    // Pass the data object to a business rule to do the above task.


    var commandAliases = _ruleBroker["default"].processRules(commandAliasDataStructure, '', generateCommandAliasesRule);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function constantsGenerator
 * @description Requests a string input the user would like to have converted into a constant,
 * while determining the most optimized way to define the new constant based on existing constants.
 * Also checks to see if that new constant is already defined in the constants system.
 * @param {string} inputData Parameterized constant to generate for.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/01/22
 */


exports.commandAliasGenerator = commandAliasGenerator;

var constantsGenerator = function constantsGenerator(inputData, inputMetaData) {
  var functionName = s.cconstantsGenerator;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var validEntry = false;
  var userDefinedConstant = '';
  var validConstantRule = [];
  var doesConstantExistRule = [];
  var getConstantTypeRule = [];
  var constantsFulfillmentSystemRule = [];
  var wordsCountRule = [];
  var wordsArrayRule = [];
  var recombineArrayInputRule = [];
  validConstantRule[0] = s.cisConstantValid;
  doesConstantExistRule[0] = s.cdoesConstantExist;
  getConstantTypeRule[0] = s.cgetConstantType;
  constantsFulfillmentSystemRule[0] = s.cconstantsFulfillmentSystem;
  wordsCountRule[0] = s.cgetWordCountInString;
  wordsArrayRule[0] = s.cgetWordsArrayFromString;
  recombineArrayInputRule[0] = s.crecombineStringArrayWithSpaces;

  if (inputData.length === 0) {
    while (validEntry === false) {
      console.log(s.cConstantPrompt1);
      console.log(s.cConstantPrompt2);
      console.log(s.cConstantPrompt3);
      userDefinedConstant = prompt(b.cGreaterThan);
      validEntry = _ruleBroker["default"].processRules(userDefinedConstant, '', validConstantRule);

      if (validEntry === false) {
        // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
        console.log(s.cconstantsGeneratorMessage1);
      }
    }
  } else if (inputData.length === 2) {
    userDefinedConstant = inputData[1];
  } else {
    // We need to recombine all of the array elements after the 0-th element into a single string with spaces inbetween.
    userDefinedConstant = _ruleBroker["default"].processRules(inputData, '', recombineArrayInputRule);
  } // userDefinedConstant is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantIs + userDefinedConstant); // First lets check if the constant is already defined, so we can warn the user.
  // NOTE: It could be that the developer is just looking to optimize the existing constant,
  // but if not, a warning to the user would be a good idea!


  var doesConstantExist = _ruleBroker["default"].processRules(userDefinedConstant, '', doesConstantExistRule);

  if (doesConstantExist === true) {
    var constantType = _ruleBroker["default"].processRules(userDefinedConstant, '', getConstantTypeRule); // WARNING: The constant has already been defined in the following library(ies):


    console.log(s.cconstantsGeneratorMessage2 + constantType);
  }

  userDefinedConstant = userDefinedConstant.trim();

  var wordCount = _ruleBroker["default"].processRules(userDefinedConstant, '', wordsCountRule); // wordCount is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cwordCountIs + wordCount); // Now begin the fulfillment algorithm.


  if (wordCount > 1) {
    var wordsArray = _ruleBroker["default"].processRules(userDefinedConstant, '', wordsArrayRule); // wordsArray is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cwordsArrayIs + JSON.stringify(wordsArray));

    for (var j = 0; j < wordsArray.length; j++) {
      // Optimized constant definition for word:
      console.log(s.cOptimizedConstantDefinitionForWord + b.cc + wordsArray[j] + b.cSpace + b.cEqual + b.cSpace + _ruleBroker["default"].processRules(wordsArray[j].trim(), wordsArray[j].trim(), constantsFulfillmentSystemRule));
    }
  } else {
    console.log(b.cc + userDefinedConstant + b.cSpace + b.cEqual + b.cSpace + _ruleBroker["default"].processRules(userDefinedConstant, userDefinedConstant, constantsFulfillmentSystemRule));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function constantsGeneratorList
 * @description Calls the constantsGenerator command to iterate over a list of constants and generate many constants sequentially.
 * @NOTE This function will also walk the list and determine if there are any common strings
 * internal to the list that could be defined as new constants to help with the optimization process.
 * @NOTE Testing string: constGenL somethingXML,whatever that is,A basic NodeJS template App,that can easily
 * @param {string} inputData Parameterized coma delimited list of constants to be auto-generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/01/27
 */


exports.constantsGenerator = constantsGenerator;

var constantsGeneratorList = function constantsGeneratorList(inputData, inputMetaData) {
  var functionName = s.cconstantsGeneratorList;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var validEntry = false;
  var userDefinedConstantList = '';
  var validConstantRule = [];
  var recombineArrayInputRule = [];
  validConstantRule[0] = s.cisConstantValid;
  recombineArrayInputRule[0] = s.crecombineStringArrayWithSpaces;

  if (inputData.length === 0) {
    while (validEntry === false) {
      console.log(s.cConstantsListPrompt1);
      console.log(s.cConstantsListPrompt2);
      console.log(s.cConstantsListPrompt3);
      userDefinedConstantList = prompt(b.cGreaterThan);
      validEntry = _ruleBroker["default"].processRules(userDefinedConstantList, '', validConstantRule);

      if (validEntry === false) {
        // INVALID INPUT: Please enter a valid constant list.
        console.log(s.cconstantsGeneratorListMessage1);
      }
    }
  } else if (inputData.length === 2) {
    userDefinedConstantList = inputData[1];
  } else {
    // Combine all of the input parameters back into a single string then we will parse it for coma's into an array.
    // The array elements will then be used to enqueue the command constantsGenerator.
    userDefinedConstantList = _ruleBroker["default"].processRules(inputData, '', recombineArrayInputRule);
  } // userDefinedConstantList is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantListIs + userDefinedConstantList);

  if (userDefinedConstantList.includes(b.cComa) === true) {
    // userDefinedConstantList contains comas
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantListContainsComas);

    var userDefinedConstantsListArray = userDefinedConstantList.split(b.cComa); // userDefinedConstantsListArray is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantsListArrayIs + JSON.stringify(userDefinedConstantsListArray));

    if (userDefinedConstantsListArray.length > 1) {
      for (var i = 0; i < userDefinedConstantsListArray.length; i++) {
        _queue["default"].enqueue(s.cCommandQueue, s.cconstantsGenerator + b.cSpace + userDefinedConstantsListArray[i].trim());
      }
    } else if (userDefinedConstantsListArray.length === 1) {
      // Just enqueue the constants Generator command with the input directly.
      _queue["default"].enqueue(s.cCommandQueue, s.cconstantsGenerator + b.cSpace + userDefinedConstantsListArray[0].trim());
    }
  } else {
    // userDefinedConstantList DOES NOT contain comas
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantsListDoesNotContainComas); // Just enqueue the constants Generator command with the input directly.


    _queue["default"].enqueue(s.cCommandQueue, s.cconstantsGenerator + b.cSpace + userDefinedConstantList.trim());
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function constantsPatternRecognizer
 * @description Walks through a list of constants looking for patterns internal to the strings.
 * @param {string} inputData Parameterized coma delimited list of constants to be
 * passed through pattern recognition to find common strings among them.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/01/29
 */


exports.constantsGeneratorList = constantsGeneratorList;

var constantsPatternRecognizer = function constantsPatternRecognizer(inputData, inputMetaData) {
  var functionName = s.cconstantsPatternRecognizer;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var validEntry = false;
  var userDefinedConstantList = '';
  var validConstantRule = [];
  var recombineArrayInputRule = [];
  var wordsArrayFromStringRule = [];
  var searchForPatternsInStringArrayRule = [];
  var validatePatternsNeedImplementationRule = [];
  var wordsArray = [];
  var commonPatternsArray = [];
  validConstantRule[0] = s.cisConstantValid;
  recombineArrayInputRule[0] = s.crecombineStringArrayWithSpaces;
  wordsArrayFromStringRule[0] = s.cgetWordsArrayFromString;
  searchForPatternsInStringArrayRule[0] = s.csearchForPatternsInStringArray;
  validatePatternsNeedImplementationRule[0] = s.cvalidatePatternsThatNeedImplementation;

  if (inputData.length === 0) {
    while (validEntry === false) {
      console.log(s.cConstantsListPatternSearchPrompt1);
      console.log(s.cConstantsListPatternSearchPrompt2);
      console.log(s.cConstantsListPatternSearchPrompt3);
      userDefinedConstantList = prompt(b.cGreaterThan);
      validEntry = _ruleBroker["default"].processRules(userDefinedConstantList, '', validConstantRule);

      if (validEntry === false) {
        // INVALID INPUT: Please enter a valid constant list.
        console.log(s.cconstantsGeneratorListMessage1);
      }
    }
  } else if (inputData.length === 2) {
    userDefinedConstantList = inputData[1];
  } else {
    // Combine all of the input parameters back into a single string then we will parse it for coma's into an array.
    // The array elements will then be used to enqueue the command constantsGenerator.
    userDefinedConstantList = _ruleBroker["default"].processRules(inputData, '', recombineArrayInputRule);
  } // userDefinedConstantList is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantListIs + userDefinedConstantList);

  if (userDefinedConstantList.includes(b.cComa) === true) {
    wordsArray = userDefinedConstantList.split(b.cComa);
  } else {
    // userDefinedConstantList DOES NOT contain comas
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantsListDoesNotContainComas); // Check and see if there is another delimiter we can use to break up the string into an array,
    // such as a space character, Maybe the user entered a sentence and would like all the words of the sentence to be optimized.


    wordsArray = _ruleBroker["default"].processRules(userDefinedConstantList, '', wordsArrayFromStringRule);
  } // wordsArray is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cwordsArrayIs + JSON.stringify(wordsArray));

  commonPatternsArray = _ruleBroker["default"].processRules(wordsArray, '', searchForPatternsInStringArrayRule); // commonPatternsArray is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommonPatternsArrayIs + JSON.stringify(commonPatternsArray)); // This next call will compare the identified string patterns with existing constants, and highlight which ones are not yet implemented.


  _ruleBroker["default"].processRules(commonPatternsArray, '', validatePatternsNeedImplementationRule);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function businessRulesMetrics
 * @description A command to compute business rule metrics for each of the business rules that were called in a sequence of call(s) or workflow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/30
 */


exports.constantsPatternRecognizer = constantsPatternRecognizer;

var businessRulesMetrics = function businessRulesMetrics(inputData, inputMetaData) {
  var functionName = s.cbusinessRulesMetrics;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  var businessRuleMetricsEnabled = _configurator["default"].getConfigurationSetting(s.cEnableBusinessRulePerformanceMetrics);

  if (businessRuleMetricsEnabled === true) {
    var businessRuleCounter = 0;
    var businessRulePerformanceSum = 0;
    var businessRulePerformanceStdSum = 0;
    var average = 0;
    var standardDev = 0; // Here we iterate over all of the business rules that were added to the s.cBusinessRulePerformanceTrackingStack.

    for (var i = 0; i < _stack["default"].length(s.cBusinessRuleNamesPerformanceTrackingStack); i++) {
      businessRuleCounter = 0; // Reset it to zero, because we are beginning again with another business rule name.

      businessRulePerformanceSum = 0;
      businessRulePerformanceStdSum = 0;
      average = 0;
      standardDev = 0; // Here we will now iterate over all of the contents of all of the business rule performance numbers and
      // do the necessary math for each business rule according to the parent loop.

      var currentBusinessRuleName = D[s.cBusinessRuleNamesPerformanceTrackingStack][i];

      for (var j = 0; j < _stack["default"].length(s.cBusinessRulePerformanceTrackingStack); j++) {
        if (D[s.cBusinessRulePerformanceTrackingStack][j][w.cName] === currentBusinessRuleName) {
          businessRuleCounter = businessRuleCounter + 1; // businessRuleCounter is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRuleCounterIs + businessRuleCounter);

          businessRulePerformanceSum = businessRulePerformanceSum + D[s.cBusinessRulePerformanceTrackingStack][j][s.cRunTime]; // businessRulePerformanceSum is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRulePerformanceSumIs + businessRulePerformanceSum);
        }
      } // DONE! businessRulePerformanceSum is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDoneBusinessRulePerformanceSumIs + businessRulePerformanceSum);

      average = businessRulePerformanceSum / businessRuleCounter; // average is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.caverageIs + average); // Now go back through them all so we can compute the standard deviation


      for (var _j = 0; _j < _stack["default"].length(s.cBusinessRulePerformanceTrackingStack); _j++) {
        if (D[s.cBusinessRulePerformanceTrackingStack][_j][w.cName] === currentBusinessRuleName) {
          businessRulePerformanceStdSum = businessRulePerformanceStdSum + math.pow(D[s.cBusinessRulePerformanceTrackingStack][_j][s.cRunTime] - average, 2); // businessRulePerformanceStdSum is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
        }
      } // DONE! businessRulePerformanceStdSum is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDoneBusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);

      standardDev = math.sqrt(businessRulePerformanceStdSum / businessRuleCounter); // standardDev is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cstandardDevIs + standardDev);

      if (D[s.cBusinessRulesPerformanceAnalysisStack] === undefined) {
        _stack["default"].initStack(s.cBusinessRulesPerformanceAnalysisStack);
      }

      _stack["default"].push(s.cBusinessRulesPerformanceAnalysisStack, {
        Name: currentBusinessRuleName,
        Average: average,
        StandardDeviation: standardDev
      });
    }

    _loggers["default"].consoleTableLog('', D[s.cBusinessRulesPerformanceAnalysisStack], [w.cName, w.cAverage, s.cStandardDeviation]);

    _stack["default"].clearStack(s.cBusinessRulesPerformanceAnalysisStack); // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
    // It might be that the user wants to do something else with this data in memory after it's done.


    if (_configurator["default"].getConfigurationSetting(s.cClearBusinessRulesPerformanceDataAfterAnalysis) === true) {
      _stack["default"].clearStack(s.cBusinessRulePerformanceTrackingStack);

      _stack["default"].clearStack(s.cBusinessRuleNamesPerformanceTrackingStack);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function commandMetrics
 * @description A command to compute command metrics for each of the commands that were called in a sequence of call(s) or workflow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/30
 */


exports.businessRulesMetrics = businessRulesMetrics;

var commandMetrics = function commandMetrics(inputData, inputMetaData) {
  var functionName = s.ccommandMetrics;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  var commandMetricsEnabled = _configurator["default"].getConfigurationSetting(s.cEnableCommandPerformanceMetrics);

  if (commandMetricsEnabled === true) {
    var commandCounter = 0;
    var commandPerformanceSum = 0;
    var commandPerformanceStdSum = 0;
    var average = 0;
    var standardDev = 0; // Here we iterate over all of the commands that were added to the s.cCommandPerformanceTrackingStack.

    for (var i = 0; i < _stack["default"].length(s.cCommandNamesPerformanceTrackingStack); i++) {
      commandCounter = 0;
      commandPerformanceSum = 0;
      commandPerformanceStdSum = 0;
      average = 0;
      standardDev = 0; // Here we will now iterate over all of the contents of all the command performance numbers and
      // do the necessary math for each command according to the parent loop.

      var currentCommandName = D[s.cCommandNamesPerformanceTrackingStack][i];

      for (var j = 0; j < _stack["default"].length(s.cCommandPerformanceTrackingStack); j++) {
        if (D[s.cCommandPerformanceTrackingStack][j][w.cName] === currentCommandName) {
          commandCounter = commandCounter + 1; // commandCounter is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandCounterIs + commandCounter);

          commandPerformanceSum = commandPerformanceSum + D[s.cCommandPerformanceTrackingStack][j][s.cRunTime]; // commandPerformanceSum is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandPerformanceSumIs + commandPerformanceSum);
        }
      } // DONE! commandPerformanceSum is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDoneCommandPerformanceSumIs + commandPerformanceSum);

      average = commandPerformanceSum / commandCounter; // average is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.caverageIs + average); // Now go back through them all so we can compute the standard deviation


      for (var _j2 = 0; _j2 < _stack["default"].length(s.cCommandPerformanceTrackingStack); _j2++) {
        if (D[s.cCommandPerformanceTrackingStack][_j2][w.cName] === currentCommandName) {
          commandPerformanceStdSum = commandPerformanceStdSum + math.pow(D[s.cCommandPerformanceTrackingStack][_j2][s.cRunTime] - average, 2); // commandPerformanceStdSum is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandPerformanceStdSumIs + commandPerformanceStdSum);
        }
      } // DONE! commandPerformanceStdSum is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDoneCommandPerformanceStdSumIs + commandPerformanceStdSum);

      standardDev = math.sqrt(commandPerformanceStdSum / commandCounter); // standardDev is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cstandardDevIs + standardDev);

      if (D[s.cCommandsPerformanceAnalysisStack] === undefined) {
        _stack["default"].initStack(s.cCommandsPerformanceAnalysisStack);
      }

      _stack["default"].push(s.cCommandsPerformanceAnalysisStack, {
        Name: currentCommandName,
        Average: average,
        StandardDeviation: standardDev
      });
    }

    _loggers["default"].consoleTableLog('', D[s.cCommandsPerformanceAnalysisStack], [w.cName, w.cAverage, s.cStandardDeviation]);

    _stack["default"].clearStack(s.cCommandsPerformanceAnalysisStack); // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
    // It might be that the user wants to do something else with this data in memory after it's done.


    if (_configurator["default"].getConfigurationSetting(s.cClearCommandPerformanceDataAfterAnalysis) === true) {
      _stack["default"].clearStack(s.cCommandPerformanceTrackingStack);

      _stack["default"].clearStack(s.cCommandNamesPerformanceTrackingStack);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertColors
 * @description Converts all of the color hexidecimal values into RGB color values.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/07/01
 * {@link: https://github.com/paularmstrong/normalizr/issues/15}
 */


exports.commandMetrics = commandMetrics;

var convertColors = function convertColors(inputData, inputMetaData) {
  var functionName = s.cconvertColors;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var colorConvertionRule = [];
  colorConvertionRule[0] = s.creplaceCharacterWithCharacter;
  colorConvertionRule[1] = s.chex2rgbConversion;
  var colorKeys = Object.keys(D[s.cColors][s.cColorData]); // colorKeys is:

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccolorKeysIs + JSON.stringify(colorKeys));

  for (var i = 0; i < colorKeys.length; i++) {
    var currentColorName = colorKeys[i]; // currentColorName is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentColorNameIs + currentColorName);

    var currentColorObject = D[w.cColors][s.cColorData][currentColorName]; // currentColorObject is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentColorObjectIs + JSON.stringify(currentColorObject));

    var currentColorHexValue = currentColorObject[s.cHexValue]; // currentColorHexValue is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentColorHexValueIs + currentColorHexValue);

    var ruleOutput = _ruleBroker["default"].processRules(currentColorHexValue, [b.cHash, ''], colorConvertionRule); // ruleOutput is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cruleOutputIs + ruleOutput);

    console.log(currentColorName + b.cComa + currentColorHexValue + b.cComa + ruleOutput[0] + b.cComa + ruleOutput[1] + b.cComa + ruleOutput[2]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};

exports.convertColors = convertColors;