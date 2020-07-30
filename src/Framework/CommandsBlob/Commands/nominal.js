/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:configurator
 * @requires module:lexical
 * @requires module:fileBroker
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
import workflowBroker from '../../Executrix/workflowBroker';
import queue from '../../Resources/queue';
import stack from '../../Resources/stack';
import timers from '../../Executrix/timers';
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as w from '../../Constants/word.constants';
import * as s from '../../Constants/system.constants';
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
  * @return {string} The same as the input string.
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
  if (configurator.getConfigurationSetting(s.cPassAllConstantsValidations) === true) {
    console.log('DEPLOY APPLICATION');
    let sourcePath = configurator.getConfigurationSetting(s.cSourceResourcesPath);
    let destinationPath = configurator.getConfigurationSetting(s.cBinaryResourcesPath);
    let deploymentStatus = fileBroker.copyAllFilesAndFoldersFromFolderToFolder(sourcePath, destinationPath);
    // console.log('Deployment was completed: ' + deploymentStatus);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Deployment was completed: ' + true);
    configurator.setConfigurationSetting(s.cdeploymentCompleted, true);
  } else {
    console.log('ERROR: Build failed because of a failure in the constants validation system. Please fix ASAP before attempting another build.');
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
  if (configurator.getConfigurationSetting(s.cPassAllConstantsValidations) === true) {
    console.log('RELEASE APPLICATION');
    let sourcePath = configurator.getConfigurationSetting(s.cBinaryRootPath);
    let destinationPath = configurator.getConfigurationSetting(s.cBinaryReleasePath);
    let releaseResult = fileBroker.buildReleasePackage(sourcePath, destinationPath);
    // console.log('Release was completed: ' + releaseResult);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Release was completed: ' + true);
    configurator.setConfigurationSetting(s.creleaseCompleted, true);
  } else {
    console.log('ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.');
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
      console.log('WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.');
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
 * @return {Boolean} True to indicate that the application should not exit.
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
    console.log('WARNING: nominal.workflow: The specified workflow: ' + workflowName + b.cComa +
    ' was not found in either the system defined workflows, or client defined workflows.' +
    ' Please enter a valid workflow name and try again.');
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
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
export const printDataHive = function(inputData, inputMetaData) {
  let functionName = s.cprintDataHive;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (D[inputData[1]] !== undefined) {
    console.log(inputData[1] + ' contents are: ' + JSON.stringify(D[inputData[1]]));
  } else {
    console.log('contents of D are: ' + JSON.stringify(D));
  }
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
 * @return {Boolean} True to indicate that the application should not exit.
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
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Begin the i-th iteration of the inputData array. i is: ' + i);
    let currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentRule is: ' + JSON.stringify(currentRuleArg));
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

  loggers.consoleLog(baseFileName + b.cDot + functionName, 'rules is: ' + JSON.stringify(rules));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'ruleInputData is: ' + ruleInputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'ruleInputMetaData is: ' + JSON.stringify(ruleInputMetaData));
  if (businessRuleMetricsEnabled === true) {
    // Here we will capture the start time of the business rule we are about to execute.
    // After executing we will capture the end time and then
    // compute the difference to determine how many milliseconds it took to run the business rule.
    businessRuleStartTime = timers.getNowMoment(g.cYYYYMMDD_HHmmss_SSS);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Business Rule Start time is: ' + businessRuleStartTime);
  }
  ruleOutput = ruleBroker.processRules(ruleInputData, ruleInputMetaData, rules);
  if (businessRuleMetricsEnabled === true) {
    let performanceTrackingObject = {};
    businessRuleEndTime = timers.getNowMoment(g.cYYYYMMDD_HHmmss_SSS);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'BusinessRule End time is: ' + businessRuleEndTime);
    // Now compute the delta time so we know how long it took to run that business rule.
    businessRuleDeltaTime = timers.computeDeltaTime(businessRuleStartTime, businessRuleEndTime);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'BusinessRule run-time is: ' + businessRuleDeltaTime);
    // Check to make sure the business rule performance tracking stack exists or does not exist.
    if (D[s.cBusinessRulePerformanceTrackingStack] === undefined) {
      stack.initStack(s.cBusinessRulePerformanceTrackingStack);
    }
    if (D[s.cBusinessRuleNamesPerformanceTrackingStack] === undefined) {
      stack.initStack(s.cBusinessRuleNamesPerformanceTrackingStack)
    }
    performanceTrackingObject = {'Name': rules[0], 'RunTime': businessRuleDeltaTime};
    if (stack.contains(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]) === false) {
      stack.push(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]);
    }
    stack.push(s.cBusinessRulePerformanceTrackingStack, performanceTrackingObject);
    // stack.print(s.cBusinessRulePerformanceTrackingStack);
    // stack.print(s.cBusinessRuleNamesPerformanceTrackingStack);
  }
  if (businessRuleOutput === true) {
    console.log('Rule output is: ' + JSON.stringify(ruleOutput));
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
 * @return {Boolean} True to indicate that the application should not exit.
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandString before attempted delimiter swap is: ' + commandString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'replaceCharacterWithCharacterRule is: ' + JSON.stringify(replaceCharacterWithCharacterRule));
  let secondaryCommandDelimiterRegEx = new RegExp('\\' + secondaryCommandArgsDelimiter, 'g');
  commandString = ruleBroker.processRules(commandString, [secondaryCommandDelimiterRegEx, primaryCommandDelimiter], replaceCharacterWithCharacterRule);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is: ' + commandString);
  let tertiaryCommandDelimiterRegEx = new RegExp('\\' + tertiaryCommandDelimiter, 'g');
  commandString = ruleBroker.processRules(commandString, [tertiaryCommandDelimiterRegEx, secondaryCommandArgsDelimiter], replaceCharacterWithCharacterRule);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is: ' + commandString);
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
        console.log('WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered: ' + numberOfCommands);
      }
    } else {
      console.log('WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number: ' + inputData[2]);
    }
  } else {
    console.log('WARNING: nominal.commandGenerator: The specified command: ' + commandString +
    ' was not found, please enter a valid command and try again.');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function businessRulesMetrics
 * @description A command to compute business rule metrics for each of the business rules that were called in a sequence of call(s) or workflow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {void}
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
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'businessRuleCounter is: ' + businessRuleCounter);
          businessRulePerformanceSum = businessRulePerformanceSum + D[s.cBusinessRulePerformanceTrackingStack][j][s.cRunTime];
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'businessRulePerformanceSum is: ' + businessRulePerformanceSum);
        }
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!!! businessRulePerformanceSum is: ' + businessRulePerformanceSum);
      average = businessRulePerformanceSum / businessRuleCounter;
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'average is: ' + average);
      // Now go back through them all so we can compute the standard deviation
      for (let j = 0; j < stack.length(s.cBusinessRulePerformanceTrackingStack); j++) {
        if (D[s.cBusinessRulePerformanceTrackingStack][j][w.cName] === currentBusinessRuleName) {
          businessRulePerformanceStdSum = businessRulePerformanceStdSum + math.pow((D[s.cBusinessRulePerformanceTrackingStack][j][s.cRunTime] - average), 2);
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'businessRulePerformanceStdSum is: ' + businessRulePerformanceStdSum);
        }
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!! businessRulePerformanceStdSum is: ' + businessRulePerformanceStdSum);
      standardDev = math.sqrt(businessRulePerformanceStdSum / businessRuleCounter);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'standardDev is: ' + standardDev);
      if (D[s.cBusinessRulesPerformanceAnalysisStack] === undefined) {
        stack.initStack(s.cBusinessRulesPerformanceAnalysisStack);
      }
      stack.push(s.cBusinessRulesPerformanceAnalysisStack, {'Name': currentBusinessRuleName, 'Average': average, 'StandardDeviation': standardDev});
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
 * @return {void}
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
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandCounter is: ' + commandCounter);
          commandPerformanceSum = commandPerformanceSum + D[s.cCommandPerformanceTrackingStack][j][s.cRunTime];
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandPerformanceSum is: ' + commandPerformanceSum);
        }
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!!! commandPerformanceSum is: ' + commandPerformanceSum);
      average = commandPerformanceSum / commandCounter;
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'average is: ' + average);
      // Now go back through them all so we can compute the standard deviation
      for (let j = 0; j < stack.length(s.cCommandPerformanceTrackingStack); j++) {
        if (D[s.cCommandPerformanceTrackingStack][j][w.cName] === currentCommandName) {
          commandPerformanceStdSum = commandPerformanceStdSum + math.pow((D[s.cCommandPerformanceTrackingStack][j][s.cRunTime] - average), 2);
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandPerformanceStdSum is: ' + commandPerformanceStdSum);
        }
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!!! commandPerformanceStdSum is: ' + commandPerformanceStdSum);
      standardDev = math.sqrt(commandPerformanceStdSum / commandCounter);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'standardDev is: ' + standardDev);
      if (D[s.cCommandsPerformanceAnalysisStack] === undefined) {
        stack.initStack(s.cCommandsPerformanceAnalysisStack);
      }
      stack.push(s.cCommandsPerformanceAnalysisStack, {'Name': currentCommandName, 'Average': average, 'StandardDeviation': standardDev});
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
 * @return {void}
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'colorKeys is: ' + JSON.stringify(colorKeys));
  for (let i = 0; i < colorKeys.length; i++) {
    let currentColorName = colorKeys[i];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentColorName is: ' + currentColorName);
    let currentColorObject = D[w.cColors][s.cColorData][currentColorName];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentColorObject is: ' + JSON.stringify(currentColorObject));
    let currentColorHexValue = currentColorObject[s.cHexValue];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentColorHexValue is: ' + currentColorHexValue);
    let ruleOutput = ruleBroker.processRules(currentColorHexValue, [b.cHash, ''], colorConvertionRule);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'ruleOutput is: ' + ruleOutput);
    console.log(currentColorName + b.cComa + currentColorHexValue + b.cComa + ruleOutput[0] + b.cComa + ruleOutput[1] + b.cComa + ruleOutput[2]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
