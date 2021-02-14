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
import configurator from '../../Executrix/configurator';
import lexical from '../../Executrix/lexical';
import commandBroker from '../commandBroker';
import ruleBroker from '../../BusinessRules/ruleBroker';
import fileBroker from '../../Executrix/fileBroker';
import dataBroker from '../../Executrix/dataBroker';
import workflowBroker from '../../Executrix/workflowBroker';
import queue from '../../Resources/queue';
import stack from '../../Resources/stack';
import timers from '../../Executrix/timers';
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as n from '../../Constants/numeric.constants';
import * as w from '../../Constants/word.constants';
import * as s from '../../Constants/system.constants';
const prompt = require('prompt-sync')();
const figlet = require('figlet');
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
 export const echoCommand = function(inputData, inputMetaData) {
   let functionName = s.cechoCommand;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
   if (!inputData) {
     return false;
   }
   loggers.consoleLog(inputData);
   let returnData = true;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const exit = function(inputData, inputMetaData) {
  let functionName = w.cexit;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const version = function(inputData, inputMetaData) {
  let functionName = w.cversion;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  console.log(configurator.getConfigurationSetting(s.cApplicationVersionNumber));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const about = function(inputData, inputMetaData) {
  let functionName = w.cabout;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  console.log(configurator.getConfigurationSetting(s.cApplicationDescription));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const name = function(inputData, inputMetaData) {
  let functionName = w.cname;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let applicationName = configurator.getConfigurationSetting(s.cApplicationName);
  let figletFont = configurator.getConfigurationSetting(s.cFigletFont);
  let useFancyFont = false;
  let rules = {};
  rules[0] = s.cstringToDataType;
  useFancyFont = ruleBroker.processRules(inputData[1], '', rules);
  if (useFancyFont === true) {
    figletFont = configurator.getConfigurationSetting(s.cFigletFont);
    console.log(figlet.textSync(applicationName, {font: figletFont, horizontalLayout: s.cfull }));
  } else {
    console.log(applicationName);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const clearScreen = function(inputData, inputMetaData) {
  let functionName = s.cclearScreen;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  // console.clear(); // This will clear the screen, but not the cache, you can still scroll up and see the previous commands.
  // process.stdout.write('\u001B[2J\u001B[0;0f'); // Same as above
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const deployApplication = function(inputData, inputMetaData) {
  let functionName = s.cdeployApplication;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (configurator.getConfigurationSetting(s.cPassAllConstantsValidations) === true &&
  configurator.getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === true) {
    // DEPLOY APPLICATION
    console.log(s.cDEPLOY_APPLICATION);
    let sourcePath = configurator.getConfigurationSetting(s.cSourceResourcesPath);
    let destinationPath = configurator.getConfigurationSetting(s.cDestinationResourcesPath);
    let deploymentStatus = fileBroker.copyAllFilesAndFoldersFromFolderToFolder(sourcePath, destinationPath);
    // console.log('Deployment was completed: ' + deploymentStatus);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDeploymentWasCompleted + true);
    configurator.setConfigurationSetting(s.cdeploymentCompleted, true);
  } else {
    if (configurator.getConfigurationSetting(s.cPassAllConstantsValidations) === false) {
      // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1a + s.cdeployApplicationMessage2a);
    }
    if (configurator.getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === false) {
      // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1b + s.cdeployApplicationMessage2a);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const deployMetaData = function(inputData, inputMetaData) {
  let functionName = s.cdeployMetaData;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  returnData = true;
  if (!inputData) {
    returnData = false;
  } else {
    let aggregateCommandString = '';
    let getAttributeNameRule = [];
    let getAttributeValueRule = [];
    getAttributeNameRule[0] = s.cgetAttributeName;
    getAttributeValueRule[0] = s.cgetAttributeValue;
    inputData.shift(); // Remove the first element of the array, because that is what is used to call this command.
    let metaDataParameters = inputData.join(b.cSpace).split(b.cComa);
    // metaDataParameters is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmetaDataParametersIs + JSON.stringify(metaDataParameters));
    // metaDataParameters length is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmetaDataParametersLengthIs + metaDataParameters.length);

    let metaDataOutput = {};
    for (let i = 0; i < metaDataParameters.length; i++) {
      let attributeJsonString = metaDataParameters[i];
      // attributeJsonString is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cattributeJsonStringIs + attributeJsonString);
      let appAttributeName = ruleBroker.processRules(attributeJsonString, '', getAttributeNameRule);
      // appAttributeName is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cappAttributeNameIs + appAttributeName);
      let appAttributeValue = ruleBroker.processRules(attributeJsonString, '', getAttributeValueRule);
      // appAttributeValue is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cappAttributeValueIs + appAttributeValue);
      if (appAttributeName.includes(w.cName) === true) {
        configurator.setConfigurationSetting(s.cApplicationName, appAttributeValue);
      } else if (appAttributeName.includes(w.cVersion) === true) {
        configurator.setConfigurationSetting(s.cApplicationVersionNumber, appAttributeValue);
      } else if (appAttributeName.includes(w.cDescription) === true) {
        configurator.setConfigurationSetting(s.cApplicationDescription, appAttributeValue);
      } else {
        configurator.setConfigurationSetting(appAttributeName, appAttributeValue);
      }
      metaDataOutput[appAttributeName] = appAttributeValue;
    }
    let metaDataPathAndFilename = configurator.getConfigurationSetting(s.cConfigurationPath);
    metaDataPathAndFilename = path.resolve(metaDataPathAndFilename + s.cmetaDataDotJson);
    // metaDataPathAndFilename is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmetaDataPathAndFilenameIs + metaDataPathAndFilename);
    fileBroker.writeJsonData(metaDataPathAndFilename, metaDataOutput);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const releaseApplication = function(inputData, inputMetaData) {
  let functionName = s.creleaseApplication;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (configurator.getConfigurationSetting(s.cPassAllConstantsValidations) === true &&
  configurator.getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === true) {
    // RELEASE APPLICATION
    console.log(s.cRELEASE_APPLICATION);
    let sourcePath = configurator.getConfigurationSetting(s.cBinaryRootPath);
    let destinationPath = configurator.getConfigurationSetting(s.cBinaryReleasePath);
    let releaseResult = fileBroker.buildReleasePackage(sourcePath, destinationPath);
    // console.log('Release was completed: ' + releaseResult);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBuildMessage2 + true);
    configurator.setConfigurationSetting(s.creleaseCompleted, true);
  } else {
    if (configurator.getConfigurationSetting(s.cPassAllConstantsValidations) === false) {
      // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1a + s.cdeployApplicationMessage2a);
    }
    if (configurator.getConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks) === false) {
      // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
      console.log(s.cdeployApplicationMessage1b + s.cdeployApplicationMessage2a);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const help = function(inputData, inputMetaData) {
  let functionName = w.chelp;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  loggers.consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandsAliases][w.cCommand], [w.cName, w.cDescription]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const workflowHelp = function(inputData, inputMetaData) {
  let functionName = s.cworkflowHelp;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  loggers.consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandWorkflows][w.cWorkflow], [w.cName]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const commandSequencer = function(inputData, inputMetaData) {
  let functionName = s.ccommandSequencer;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  for (let i = 1; i < inputData.length; i++) {
    let commandString = inputData[i];
    // b.cli + b.cmi + b.ct;
    let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
    // console.log('primaryCommandDelimiter is: ' + primaryCommandDelimiter);
    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = b.cSpace;
    }
    let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
    // console.log('secondaryCommandDelimiter is: ' + secondaryCommandArgsDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
    // console.log('tertiaryCommandDelimiter is: ' + tertiaryCommandDelimiter);
    // Replace 2nd & 3rd level delimiters and down-increment them so we are dealing with command strings that can actually be executed.
    commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
    commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
    let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
    let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
    // We need to recompose the command arguments for the current command using the s.cPrimaryCommandDelimiter.
    if (currentCommand !== false) {
      for (let j = 1; j < commandArgs.length; j++) {
        currentCommand = currentCommand + primaryCommandDelimiter + commandArgs[j];
      }
      queue.enqueue(s.cCommandQueue, currentCommand);
    } else {
      // WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.
      console.log(s.ccommandSequencerMessage1 + s.ccommandSequencerMessage2);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const workflow = function(inputData, inputMetaData) {
  let functionName = w.cworkflow;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let workflowName = inputData[1];
  let workflowValue = workflowBroker.getWorkflow(workflowName);
  if (workflowValue !== false) {
    queue.enqueue(s.cCommandQueue, workflowValue);
  } else {
    console.log(s.cworkflowMessage1 + workflowName + b.cComa + s.cworkflowMessage2 + s.cworkflowMessage3);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
 * @NOTE This function is now going to support printing specific child data-hives.
 * Example: ConstantsValidationData.ColorConstantsValidation
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
export const printDataHive = function(inputData, inputMetaData) {
  let functionName = s.cprintDataHive;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData[1].includes(b.cDot) === true) {
    let dataHivePathArray = inputData[1].split(b.cDot);
    let leafDataHiveElement = D;
    // dataHivePathArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
    // This for-loop should let us drill down in the D-Data structure following the path that was provided.
    // This assumes the namespace style path provided is a valid heirarchy in the D-Data Structure.
    for (let i = 0; i < dataHivePathArray.length; i++) {
      // BEGIN i-th iteration:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);
      leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
      // contents of leafDataHiveElement is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
      // END i-th iteration:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
    }
    console.log(inputData[1] + b.cSpace + s.ccontentsAre + JSON.stringify(leafDataHiveElement));
  } else {
    if (D[inputData[1]] !== undefined) {
      // contents are:
      console.log(inputData[1] + b.cSpace + s.ccontentsAre + JSON.stringify(D[inputData[1]]));
    } else {
      // contents of D are:
      console.log(s.ccontentsOfDare + JSON.stringify(D));
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function printDataHiveAttributes
 * @description Prints out all of the attributes for a given specified data-set from the D-data structure.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data hive or leaf data structure in the heirarchy and
 * a name of an attribute where all values should be printed.
 * Examples ConstantsValidationData.ColorConstantsValidation.Actual
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/02/12
 */
export const printDataHiveAttributes = function(inputData, inputMetaData) {
  let functionName = s.cprintDataHiveAttributes;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData[1].includes(b.cDot) === true) {
    let dataHivePathArray = inputData[1].split(b.cDot);
    let leafDataHiveElement = D;
    // dataHivePathArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
    // This for-loop should let us drill down in the D-Data structure following the path that was provided.
    // This assumes the namespace style path provided is a valid heirarchy in the D-Data Structure.
    // Make sure we don't try to grab the very last term of the namespace. See note below.
    for (let i = 0; i < dataHivePathArray.length - 1; i++) {
      // BEGIN i-th iteration:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);
      leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
      // contents of leafDataHiveElement is:
      // loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
      // END i-th iteration:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, inputData[1] + b.cSpace + s.ccontentsAre + JSON.stringify(leafDataHiveElement));
    let attributeName = dataHivePathArray[dataHivePathArray.length - 1];
    if (leafDataHiveElement && leafDataHiveElement.length > 0) {
      let leafDataHiveElementKeys1 = Object.keys(leafDataHiveElement);
      for (let j = 0; j < leafDataHiveElement.length; j++) {
        let dataEntry = leafDataHiveElement[j];
        if (dataEntry) {
          if (attributeName.toLowerCase() === w.centity) {
            console.log('entry is: ' + JSON.stringify(dataEntry));
          } else {
            if (dataEntry[attributeName]) {
              console.log('attributeValue is: ' + dataEntry[attributeName]);
            }
          }
        }
      }
    } else {
      let leafDataHiveElementKeys2 = Object.keys(leafDataHiveElement);
      leafDataHiveElementKeys2.forEach((key2) => {
        if (attributeName.toLowerCase() === w.ckey) {
          console.log('key2 is: ' + key2);
        } else if (attributeName.toLowerCase() === w.centity) {
          console.log('entity is: ' + JSON.stringify(leafDataHiveElement[key2]));
        } else {
          let dataEntry2 = leafDataHiveElement[key2];
          if (dataEntry2) {
            console.log('attributeValue is: ' + dataEntry2[attributeName]);
          }
        }
      });
    }
  } else {
    // This is the case that the user has probably just specified a single data hive
    // that might not have specific attribute names such as the configuration data.
    console.log('Caught the case that the user may have only specified a single data have, such as the configuration data hive.')
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function clearDataStorage
 * @description Completely wipes out all the data stored in the DataStorage data hive of the D data structure.
 * @param {string} inputData     [description]
 * @param {string} inputMetaData [description]
 * @return {boolean} True to indicate that the application should not exit.
 */
export const clearDataStorage = function(inputData, inputMetaData) {
  let functionName = s.cclearDataStorage;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  dataBroker.clearData('');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const businessRule = function(inputData, inputMetaData) {
  let functionName = s.cbusinessRule;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
  let rules = [];
  let ruleInputData, ruleInputMetaData;
  let ruleOutput = '';

  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = s.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = s.cremoveCharacterFromArray;
  let addedARule = false;
  let businessRuleOutput = configurator.getConfigurationSetting(s.cEnableBusinessRuleOutput);
  let businessRuleMetricsEnabled = configurator.getConfigurationSetting(s.cEnableBusinessRulePerformanceMetrics);
  let businessRuleStartTime = '';
  let businessRuleEndTime = '';
  let businessRuleDeltaTime = '';

  // First go through each rule that should be executed and determine if
  // there are any inputs that need to be passed into the business rule.
  for (let i = 1; i < inputData.length; i++) {
    // Begin the i-th iteration of the inputData array. i is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIterationOfInputDataArray + i);
    let currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.
    // currentRule is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentRuleIs + JSON.stringify(currentRuleArg));
    let ruleArgs = [];
    if (i === 1) {
      rules = lexical.parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 2 && inputData.length <= 4) {
      ruleInputData = lexical.parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 2 && inputData.length > 4) {
      ruleInputData = lexical.parseBusinessRuleArgument(inputData, i, true);
    } else if (i === 3 && inputData.length <= 4) {
      ruleInputMetaData = lexical.parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 3 && inputData.length > 4) {
      // In this case all of the arguments will have been combined into a single array and added to the ruleInputData.
      ruleInputMetaData = '';
    }
  }
  // rules is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.crulesIs + JSON.stringify(rules));
  // ruleInputData is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cruleInputDataIs + ruleInputData);
  // ruleInputMetaData is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cruleInputMetaData + JSON.stringify(ruleInputMetaData));
  if (businessRuleMetricsEnabled === true) {
    // Here we will capture the start time of the business rule we are about to execute.
    // After executing we will capture the end time and then
    // compute the difference to determine how many milliseconds it took to run the business rule.
    businessRuleStartTime = timers.getNowMoment(g.cYYYYMMDD_HHmmss_SSS);
    // Business Rule Start time is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBusinessRuleStartTimeIs + businessRuleStartTime);
  }
  ruleOutput = ruleBroker.processRules(ruleInputData, ruleInputMetaData, rules);
  if (businessRuleMetricsEnabled === true) {
    let performanceTrackingObject = {};
    businessRuleEndTime = timers.getNowMoment(g.cYYYYMMDD_HHmmss_SSS);
    // BusinessRule End time is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBusinessRuleEndTimeIs + businessRuleEndTime);
    // Now compute the delta time so we know how long it took to run that business rule.
    businessRuleDeltaTime = timers.computeDeltaTime(businessRuleStartTime, businessRuleEndTime);
    // BusinessRule run-time is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBusinessRuleRunTimeIs + businessRuleDeltaTime);
    // Check to make sure the business rule performance tracking stack exists or does not exist.
    if (D[s.cBusinessRulePerformanceTrackingStack] === undefined) {
      stack.initStack(s.cBusinessRulePerformanceTrackingStack);
    }
    if (D[s.cBusinessRuleNamesPerformanceTrackingStack] === undefined) {
      stack.initStack(s.cBusinessRuleNamesPerformanceTrackingStack)
    }
    performanceTrackingObject = {Name: rules[0], RunTime: businessRuleDeltaTime};
    if (stack.contains(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]) === false) {
      stack.push(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]);
    }
    stack.push(s.cBusinessRulePerformanceTrackingStack, performanceTrackingObject);
    // stack.print(s.cBusinessRulePerformanceTrackingStack);
    // stack.print(s.cBusinessRuleNamesPerformanceTrackingStack);
  }
  if (businessRuleOutput === true) {
    // Rule output is:
    console.log(s.cRuleOutputIs + JSON.stringify(ruleOutput));
  }
  businessRuleStartTime = '';
  businessRuleEndTime = '';
  businessRuleDeltaTime = '';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const commandGenerator = function(inputData, inputMetaData) {
  let functionName = s.ccommandGenerator;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let replaceCharacterWithCharacterRule = [];
  replaceCharacterWithCharacterRule[0] = s.creplaceCharacterWithCharacter;
  let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
  if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
    primaryCommandDelimiter = b.cSpace;
  }
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
  let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
  let commandString = inputData[1];
  // NOTE: The str.replace only replaces the first instance of a string value, not all values.
  // but we might have another issue in the sense that if the string begins and ends with "[" & "]" respectively,
  // we might not want to replace those characters.
  // Because it might be that the command should take responsibility for that in such a special case,
  // i.e. treating the whole block as a single array and doing it's own split operation.
  // commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
  // commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
  // commandString before attempted delimiter swap is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandStringBeforeAttemptedDelimiterSwapIs + commandString);
  // replaceCharacterWithCharacterRule is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creplaceCharacterWithCharacterRuleIs + JSON.stringify(replaceCharacterWithCharacterRule));
  let secondaryCommandDelimiterRegEx = new RegExp('\\' + secondaryCommandArgsDelimiter, 'g');
  commandString = ruleBroker.processRules(commandString, [secondaryCommandDelimiterRegEx, primaryCommandDelimiter], replaceCharacterWithCharacterRule);
  // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandGeneratorMessage1 + commandString);
  let tertiaryCommandDelimiterRegEx = new RegExp('\\' + tertiaryCommandDelimiter, 'g');
  commandString = ruleBroker.processRules(commandString, [tertiaryCommandDelimiterRegEx, secondaryCommandArgsDelimiter], replaceCharacterWithCharacterRule);
  // After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandGeneratorMessage2 + commandString);
  let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
  let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
  if (currentCommand !== false) {
    if (isNaN(inputData[2]) === false) { // Make sure the user passed in a number for the second argument.
      let numberOfCommands = parseInt(inputData[2]);
      if (numberOfCommands > 0) {
        for (let i = 0; i < numberOfCommands; i++) {
          queue.enqueue(s.cCommandQueue, commandString);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const commandAliasGenerator = function(inputData, inputMetaData) {
  let functionName = s.ccommandAliasGenerator;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let commandName = '';
  let commandWordAliasList = '';
  let validCommandName = false;
  let validCommandWordAliasList = false;
  let validCommandInput = false;
  let commandAliasDataStructure = {};
  let commandNameParsingRule = [];
  let camelCaseToArrayRule = [];
  let commandWordAliasListParsingRule = [];
  let generateCommandAliasesRule = [];
  commandNameParsingRule[0] = s.cisValidCommandNameString;
  camelCaseToArrayRule[0] = s.cconvertCamelCaseStringToArray;
  commandWordAliasListParsingRule[0] = s.cisStringList;
  generateCommandAliasesRule[0] = s.cgenerateCommandAliases;
  // Command can be called by passing parameters and bypass the prompt system.
  console.log(s.ccommandAliasGeneratorMessage1);
  // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
  console.log(s.ccommandAliasGeneratorMessage2);

  if (inputData.length === 0) {
    while(validCommandName === false) {
      console.log(s.cCommandNamePrompt1);
      console.log(s.cCommandNamePrompt2);
      console.log(s.cCommandNamePrompt3);
      console.log(s.cCommandNamePrompt4);
      console.log(s.cCommandNamePrompt5);
      commandName = prompt(b.cGreaterThan);
      validCommandName = ruleBroker.processRules(commandName, '', commandNameParsingRule);
      if (validCommandName === false) {
        // INVALID INPUT: Please enter a valid camel-case command name.
        console.log(s.ccommandAliasGeneratorMessage3);
      }
    }

    let camelCaseCommandNameArray = ruleBroker.processRules(commandName, '', camelCaseToArrayRule);
    // camelCaseCommandNameArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccamelCaseCommandNameArrayIs + JSON.stringify(camelCaseCommandNameArray));

    for (let i = 0; i < camelCaseCommandNameArray.length; i++) {
      let commandWord = camelCaseCommandNameArray[i];
      // current commandWord is:
      console.log(s.ccurrentCommandWordIs + commandWord);
      validCommandWordAliasList = false;
      if (commandWord != '') {
        commandAliasDataStructure[commandWord] = {};
        while(validCommandWordAliasList === false) {
          console.log(s.cCommandWordAliasPrompt1);
          console.log(s.cCommandWordAliasPrompt2);
          console.log(s.cCommandWordAliasPrompt3 + b.cSpace + commandWord);
          commandWordAliasList = prompt(b.cGreaterThan);
          validCommandWordAliasList = ruleBroker.processRules(commandWordAliasList, '', commandWordAliasListParsingRule);
          if (validCommandWordAliasList === false) {
            // INVALID INPUT: Please enter a valid command word alias list.
            console.log(s.ccommandAliasGeneratorMessage4);
          } else if (commandWordAliasList != '') { // As long as the user entered something we should be able to proceed!
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
      console.log(s.cPARSER_ERROR + e.message);
      // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
      console.log(s.ccommandAliasGeneratorMessage5);
      // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
      console.log(s.ccommandAliasGeneratorMessage2);
    }
  } else {
    // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
    console.log(s.ccommandAliasGeneratorMessage5);
    // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
    console.log(s.ccommandAliasGeneratorMessage2);
  }

  if (validCommandInput === true) {
    // ccommandAliasDataStructure is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandAliasDataStructureIs + JSON.stringify(commandAliasDataStructure));
    // At this point the user should have entered all valid data and we should be ready to proceed.
    // TODO: Start generating all the possible combinations of the command words and command word aliases.
    // Pass the data object to a business rule to do the above task.
    let commandAliases = ruleBroker.processRules(commandAliasDataStructure, '', generateCommandAliasesRule);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const constantsGenerator = function(inputData, inputMetaData) {
  let functionName = s.cconstantsGenerator;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let validEntry = false;
  let userDefinedConstant = '';
  let validConstantRule = [];
  let doesConstantExistRule = [];
  let getConstantTypeRule = [];
  let constantsFulfillmentSystemRule = [];
  let wordsCountRule = [];
  let wordsArrayRule = [];
  let recombineArrayInputRule = [];
  validConstantRule[0] = s.cisConstantValid;
  doesConstantExistRule[0] = s.cdoesConstantExist;
  getConstantTypeRule[0] = s.cgetConstantType;
  constantsFulfillmentSystemRule[0] = s.cconstantsFulfillmentSystem;
  wordsCountRule[0] = s.cgetWordCountInString;
  wordsArrayRule[0] = s.cgetWordsArrayFromString;
  recombineArrayInputRule[0] = s.crecombineStringArrayWithSpaces;

  if (inputData.length === 0) {
    while(validEntry === false) {
      console.log(s.cConstantPrompt1);
      console.log(s.cConstantPrompt2);
      console.log(s.cConstantPrompt3);
      userDefinedConstant = prompt(b.cGreaterThan);
      validEntry = ruleBroker.processRules(userDefinedConstant, '', validConstantRule);
      if (validEntry === false) {
        // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
        console.log(s.cconstantsGeneratorMessage1);
      }
    }
  } else if (inputData.length === 2) {
    userDefinedConstant = inputData[1];
  } else {
    // We need to recombine all of the array elements after the 0-th element into a single string with spaces inbetween.
    userDefinedConstant = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
  }
  // userDefinedConstant is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantIs + userDefinedConstant);

  // First lets check if the constant is already defined, so we can warn the user.
  // NOTE: It could be that the developer is just looking to optimize the existing constant,
  // but if not, a warning to the user would be a good idea!
  let doesConstantExist = ruleBroker.processRules(userDefinedConstant, '', doesConstantExistRule);
  if (doesConstantExist === true) {
    let constantType = ruleBroker.processRules(userDefinedConstant, '', getConstantTypeRule);
    // WARNING: The constant has already been defined in the following library(ies):
    console.log(s.cconstantsGeneratorMessage2 + constantType);
  }
  userDefinedConstant = userDefinedConstant.trim();
  let wordCount = ruleBroker.processRules(userDefinedConstant, '', wordsCountRule);
  // wordCount is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cwordCountIs + wordCount);
  // Now begin the fulfillment algorithm.
  if (wordCount > 1) {
    let wordsArray = ruleBroker.processRules(userDefinedConstant, '', wordsArrayRule);
    // wordsArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cwordsArrayIs + JSON.stringify(wordsArray));
    for(let j = 0; j < wordsArray.length; j++) {
      // Optimized constant definition for word:
      console.log(s.cOptimizedConstantDefinitionForWord + b.cc + wordsArray[j] + b.cSpace + b.cEqual + b.cSpace +
      ruleBroker.processRules(wordsArray[j].trim(), wordsArray[j].trim(), constantsFulfillmentSystemRule));
    }
  } else {
    console.log(b.cc + userDefinedConstant + b.cSpace + b.cEqual + b.cSpace + ruleBroker.processRules(userDefinedConstant, userDefinedConstant, constantsFulfillmentSystemRule));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const constantsGeneratorList = function(inputData, inputMetaData) {
  let functionName = s.cconstantsGeneratorList;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let validEntry = false;
  let userDefinedConstantList = '';
  let validConstantRule = [];
  let recombineArrayInputRule = [];
  validConstantRule[0] = s.cisConstantValid;
  recombineArrayInputRule[0] = s.crecombineStringArrayWithSpaces;
  if (inputData.length === 0) {
    while(validEntry === false) {
      console.log(s.cConstantsListPrompt1);
      console.log(s.cConstantsListPrompt2);
      console.log(s.cConstantsListPrompt3);
      userDefinedConstantList = prompt(b.cGreaterThan);
      validEntry = ruleBroker.processRules(userDefinedConstantList, '', validConstantRule);
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
    userDefinedConstantList = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
  }
  // userDefinedConstantList is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantListIs + userDefinedConstantList);
  if (userDefinedConstantList.includes(b.cComa) === true) {
    // userDefinedConstantList contains comas
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantListContainsComas);
    let userDefinedConstantsListArray = userDefinedConstantList.split(b.cComa);
    // userDefinedConstantsListArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantsListArrayIs + JSON.stringify(userDefinedConstantsListArray));
    if (userDefinedConstantsListArray.length > 1) {
      for (let i = 0; i < userDefinedConstantsListArray.length; i++) {
        queue.enqueue(s.cCommandQueue, s.cconstantsGenerator + b.cSpace + userDefinedConstantsListArray[i].trim());
      }
    } else if (userDefinedConstantsListArray.length === 1) {
      // Just enqueue the constants Generator command with the input directly.
      queue.enqueue(s.cCommandQueue, s.cconstantsGenerator + b.cSpace + userDefinedConstantsListArray[0].trim());
    }
  } else {
    // userDefinedConstantList DOES NOT contain comas
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantsListDoesNotContainComas);
    // Just enqueue the constants Generator command with the input directly.
    queue.enqueue(s.cCommandQueue, s.cconstantsGenerator + b.cSpace + userDefinedConstantList.trim());
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const constantsPatternRecognizer = function(inputData, inputMetaData) {
  let functionName = s.cconstantsPatternRecognizer;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let validEntry = false;
  let userDefinedConstantList = '';
  let validConstantRule = [];
  let recombineArrayInputRule = [];
  let wordsArrayFromStringRule = [];
  let searchForPatternsInStringArrayRule = [];
  let validatePatternsNeedImplementationRule = [];
  let wordsArray = [];
  let commonPatternsArray = [];
  validConstantRule[0] = s.cisConstantValid;
  recombineArrayInputRule[0] = s.crecombineStringArrayWithSpaces;
  wordsArrayFromStringRule[0] = s.cgetWordsArrayFromString;
  searchForPatternsInStringArrayRule[0] = s.csearchForPatternsInStringArray;
  validatePatternsNeedImplementationRule[0] = s.cvalidatePatternsThatNeedImplementation;
  if (inputData.length === 0) {
    while(validEntry === false) {
      console.log(s.cConstantsListPatternSearchPrompt1);
      console.log(s.cConstantsListPatternSearchPrompt2);
      console.log(s.cConstantsListPatternSearchPrompt3);
      userDefinedConstantList = prompt(b.cGreaterThan);
      validEntry = ruleBroker.processRules(userDefinedConstantList, '', validConstantRule);
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
    userDefinedConstantList = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
  }
  // userDefinedConstantList is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantListIs + userDefinedConstantList);
  if (userDefinedConstantList.includes(b.cComa) === true) {
    wordsArray = userDefinedConstantList.split(b.cComa);
  } else {
    // userDefinedConstantList DOES NOT contain comas
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cuserDefinedConstantsListDoesNotContainComas);
    // Check and see if there is another delimiter we can use to break up the string into an array,
    // such as a space character, Maybe the user entered a sentence and would like all the words of the sentence to be optimized.
    wordsArray = ruleBroker.processRules(userDefinedConstantList, '', wordsArrayFromStringRule);
  }
  // wordsArray is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cwordsArrayIs + JSON.stringify(wordsArray));
  commonPatternsArray = ruleBroker.processRules(wordsArray, '', searchForPatternsInStringArrayRule);
  // commonPatternsArray is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommonPatternsArrayIs + JSON.stringify(commonPatternsArray));
  // This next call will compare the identified string patterns with existing constants, and highlight which ones are not yet implemented.
  ruleBroker.processRules(commonPatternsArray, '', validatePatternsNeedImplementationRule);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const businessRulesMetrics = function(inputData, inputMetaData) {
  let functionName = s.cbusinessRulesMetrics;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let businessRuleMetricsEnabled = configurator.getConfigurationSetting(s.cEnableBusinessRulePerformanceMetrics);
  if (businessRuleMetricsEnabled === true) {
    let businessRuleCounter = 0;
    let businessRulePerformanceSum = 0;
    let businessRulePerformanceStdSum = 0;
    let average = 0;
    let standardDev = 0;
    // Here we iterate over all of the business rules that were added to the s.cBusinessRulePerformanceTrackingStack.
    for (let i = 0; i < stack.length(s.cBusinessRuleNamesPerformanceTrackingStack); i++) {
      businessRuleCounter = 0; // Reset it to zero, because we are beginning again with another business rule name.
      businessRulePerformanceSum = 0;
      businessRulePerformanceStdSum = 0;
      average = 0;
      standardDev = 0;
      // Here we will now iterate over all of the contents of all of the business rule performance numbers and
      // do the necessary math for each business rule according to the parent loop.
      let currentBusinessRuleName = D[s.cBusinessRuleNamesPerformanceTrackingStack][i];
      for (let j = 0; j < stack.length(s.cBusinessRulePerformanceTrackingStack); j++) {
        if (D[s.cBusinessRulePerformanceTrackingStack][j][w.cName] === currentBusinessRuleName) {
          businessRuleCounter = businessRuleCounter + 1;
          // businessRuleCounter is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRuleCounterIs + businessRuleCounter);
          businessRulePerformanceSum = businessRulePerformanceSum + D[s.cBusinessRulePerformanceTrackingStack][j][s.cRunTime];
          // businessRulePerformanceSum is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRulePerformanceSumIs + businessRulePerformanceSum);
        }
      }
      // DONE! businessRulePerformanceSum is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDoneBusinessRulePerformanceSumIs + businessRulePerformanceSum);
      average = businessRulePerformanceSum / businessRuleCounter;
      // average is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.caverageIs + average);
      // Now go back through them all so we can compute the standard deviation
      for (let j = 0; j < stack.length(s.cBusinessRulePerformanceTrackingStack); j++) {
        if (D[s.cBusinessRulePerformanceTrackingStack][j][w.cName] === currentBusinessRuleName) {
          businessRulePerformanceStdSum = businessRulePerformanceStdSum + math.pow((D[s.cBusinessRulePerformanceTrackingStack][j][s.cRunTime] - average), 2);
          // businessRulePerformanceStdSum is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
        }
      }
      // DONE! businessRulePerformanceStdSum is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDoneBusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
      standardDev = math.sqrt(businessRulePerformanceStdSum / businessRuleCounter);
      // standardDev is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cstandardDevIs + standardDev);
      if (D[s.cBusinessRulesPerformanceAnalysisStack] === undefined) {
        stack.initStack(s.cBusinessRulesPerformanceAnalysisStack);
      }
      stack.push(s.cBusinessRulesPerformanceAnalysisStack, {Name: currentBusinessRuleName, Average: average, StandardDeviation: standardDev});
    }
    loggers.consoleTableLog('', D[s.cBusinessRulesPerformanceAnalysisStack], [w.cName, w.cAverage, s.cStandardDeviation]);
    stack.clearStack(s.cBusinessRulesPerformanceAnalysisStack);
    // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
    // It might be that the user wants to do something else with this data in memory after it's done.
    if (configurator.getConfigurationSetting(s.cClearBusinessRulesPerformanceDataAfterAnalysis) === true) {
      stack.clearStack(s.cBusinessRulePerformanceTrackingStack);
      stack.clearStack(s.cBusinessRuleNamesPerformanceTrackingStack);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const commandMetrics = function(inputData, inputMetaData) {
  let functionName = s.ccommandMetrics;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let commandMetricsEnabled = configurator.getConfigurationSetting(s.cEnableCommandPerformanceMetrics);
  if (commandMetricsEnabled === true) {
    let commandCounter = 0;
    let commandPerformanceSum = 0;
    let commandPerformanceStdSum = 0;
    let average = 0;
    let standardDev = 0;
    // Here we iterate over all of the commands that were added to the s.cCommandPerformanceTrackingStack.
    for (let i = 0; i < stack.length(s.cCommandNamesPerformanceTrackingStack); i++) {
      commandCounter = 0;
      commandPerformanceSum = 0;
      commandPerformanceStdSum = 0;
      average = 0;
      standardDev = 0;
      // Here we will now iterate over all of the contents of all the command performance numbers and
      // do the necessary math for each command according to the parent loop.
      let currentCommandName = D[s.cCommandNamesPerformanceTrackingStack][i];
      for (let j = 0; j < stack.length(s.cCommandPerformanceTrackingStack); j++) {
        if (D[s.cCommandPerformanceTrackingStack][j][w.cName] === currentCommandName) {
          commandCounter = commandCounter + 1;
          // commandCounter is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandCounterIs + commandCounter);
          commandPerformanceSum = commandPerformanceSum + D[s.cCommandPerformanceTrackingStack][j][s.cRunTime];
          // commandPerformanceSum is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandPerformanceSumIs + commandPerformanceSum);
        }
      }
      // DONE! commandPerformanceSum is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDoneCommandPerformanceSumIs + commandPerformanceSum);
      average = commandPerformanceSum / commandCounter;
      // average is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.caverageIs + average);
      // Now go back through them all so we can compute the standard deviation
      for (let j = 0; j < stack.length(s.cCommandPerformanceTrackingStack); j++) {
        if (D[s.cCommandPerformanceTrackingStack][j][w.cName] === currentCommandName) {
          commandPerformanceStdSum = commandPerformanceStdSum + math.pow((D[s.cCommandPerformanceTrackingStack][j][s.cRunTime] - average), 2);
          // commandPerformanceStdSum is:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandPerformanceStdSumIs + commandPerformanceStdSum);
        }
      }
      // DONE! commandPerformanceStdSum is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cDoneCommandPerformanceStdSumIs + commandPerformanceStdSum);
      standardDev = math.sqrt(commandPerformanceStdSum / commandCounter);
      // standardDev is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cstandardDevIs + standardDev);
      if (D[s.cCommandsPerformanceAnalysisStack] === undefined) {
        stack.initStack(s.cCommandsPerformanceAnalysisStack);
      }
      stack.push(s.cCommandsPerformanceAnalysisStack, {Name: currentCommandName, Average: average, StandardDeviation: standardDev});
    }
    loggers.consoleTableLog('', D[s.cCommandsPerformanceAnalysisStack], [w.cName, w.cAverage, s.cStandardDeviation]);
    stack.clearStack(s.cCommandsPerformanceAnalysisStack);
    // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
    // It might be that the user wants to do something else with this data in memory after it's done.
    if (configurator.getConfigurationSetting(s.cClearCommandPerformanceDataAfterAnalysis) === true) {
      stack.clearStack(s.cCommandPerformanceTrackingStack);
      stack.clearStack(s.cCommandNamesPerformanceTrackingStack);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const convertColors = function(inputData, inputMetaData) {
  let functionName = s.cconvertColors;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let colorConvertionRule = [];
  colorConvertionRule[0] = s.creplaceCharacterWithCharacter;
  colorConvertionRule[1] = s.chex2rgbConversion;

  let colorKeys = Object.keys(D[s.cColors][s.cColorData]);
  // colorKeys is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccolorKeysIs + JSON.stringify(colorKeys));
  for (let i = 0; i < colorKeys.length; i++) {
    let currentColorName = colorKeys[i];
    // currentColorName is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentColorNameIs + currentColorName);
    let currentColorObject = D[w.cColors][s.cColorData][currentColorName];
    // currentColorObject is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentColorObjectIs + JSON.stringify(currentColorObject));
    let currentColorHexValue = currentColorObject[s.cHexValue];
    // currentColorHexValue is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentColorHexValueIs + currentColorHexValue);
    let ruleOutput = ruleBroker.processRules(currentColorHexValue, [b.cHash, ''], colorConvertionRule);
    // ruleOutput is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cruleOutputIs + ruleOutput);
    console.log(currentColorName + b.cComa + currentColorHexValue + b.cComa + ruleOutput[0] + b.cComa + ruleOutput[1] + b.cComa + ruleOutput[2]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
