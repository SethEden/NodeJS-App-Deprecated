"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColors = exports.commandMetrics = exports.businessRulesMetrics = exports.commandGenerator = exports.businessRule = exports.printDataHive = exports.workflow = exports.commandSequencer = exports.workflowHelp = exports.help = exports.name = exports.about = exports.version = exports.exit = exports.echoCommand = void 0;

var _configurator = _interopRequireDefault(require("../../Executrix/configurator"));

var _lexical = _interopRequireDefault(require("../../Executrix/lexical"));

var _commandBroker = _interopRequireDefault(require("../commandBroker"));

var _ruleBroker = _interopRequireDefault(require("../../BusinessRules/ruleBroker"));

var _workflowBroker = _interopRequireDefault(require("../../Executrix/workflowBroker"));

var _queue = _interopRequireDefault(require("../../Resources/queue"));

var _stack = _interopRequireDefault(require("../../Resources/stack"));

var _timers = _interopRequireDefault(require("../../Executrix/timers"));

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../Constants/generic.constants"));

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
 * @requires module:commandBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:queue
 * @requires module:stack
 * @requires module:timers
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/19
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
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
 * @return {string} The same as the input string.
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
  var functionName = s.cexit;

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
  var functionName = s.cversion;

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
  var functionName = s.cabout;

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
  var functionName = s.cname;

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


exports.name = name;

var help = function help(inputData, inputMetaData) {
  var functionName = s.chelp;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;

  _loggers["default"].consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandsAliases][s.cCommand], [s.cName, s.cDescription]);

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

  _loggers["default"].consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandWorkflows][s.cWorkflow], [s.cName]);

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
    var commandString = inputData[i];

    var primaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cPrimaryCommandDelimiter);

    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = b.cSpace;
    }

    var secondaryCommandArgsDelimiter = _configurator["default"].getConfigurationSetting(s.cSecondaryCommandDelimiter);

    var tertiaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cTertiaryCommandDelimiter); // Replace 2nd & 3rd level delimiters and down-increment them so we are dealing with command strings that can actually be executed.


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
      console.log('WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.');
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
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */


exports.commandSequencer = commandSequencer;

var workflow = function workflow(inputData, inputMetaData) {
  var functionName = s.cworkflow;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var workflowName = inputData[1];

  var workflowValue = _workflowBroker["default"].getWorkflow(workflowName);

  if (workflowValue !== false) {
    _queue["default"].enqueue(s.cCommandQueue, workflowValue);
  } else {
    console.log('WARNING: nominal.workflow: The specified workflow: ' + workflowName + b.cComa + ' was not found in either the system defined workflows, or client defined workflows.' + ' Please enter a valid workflow name and try again.');
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
 * @return {Boolean} True to indicate that the application should not exit.
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
    console.log(inputData[1] + ' contents are: ' + JSON.stringify(D[inputData[1]]));
  } else {
    console.log('contents of D are: ' + JSON.stringify(D));
  }

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
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */


exports.printDataHive = printDataHive;

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
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Begin the i-th iteration of the inputData array. i is: ' + i);

    var currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentRule is: ' + JSON.stringify(currentRuleArg));

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
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'rules is: ' + JSON.stringify(rules));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'ruleInputData is: ' + ruleInputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'ruleInputMetaData is: ' + JSON.stringify(ruleInputMetaData));

  if (businessRuleMetricsEnabled === true) {
    // Here we will capture the start time of the business rule we are about to execute.
    // After executing we will capture the end time and then
    // compute the difference to determine how many milliseconds it took to run the business rule.
    businessRuleStartTime = _timers["default"].getNowMoment(g.cYYYYMMDD_HHmmss_SSS);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Business Rule Start time is: ' + businessRuleStartTime);
  }

  ruleOutput = _ruleBroker["default"].processRules(ruleInputData, ruleInputMetaData, rules);

  if (businessRuleMetricsEnabled === true) {
    var performanceTrackingObject = {};
    businessRuleEndTime = _timers["default"].getNowMoment(g.cYYYYMMDD_HHmmss_SSS);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BusinessRule End time is: ' + businessRuleEndTime); // Now compute the delta time so we know how long it took to run that business rule.


    businessRuleDeltaTime = _timers["default"].computeDeltaTime(businessRuleStartTime, businessRuleEndTime);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BusinessRule run-time is: ' + businessRuleDeltaTime); // Check to make sure the business rule performance tracking stack exists or does not exist.


    if (D[s.cBusinessRulePerformanceTrackingStack] === undefined) {
      _stack["default"].initStack(s.cBusinessRulePerformanceTrackingStack);
    }

    if (D[s.cBusinessRuleNamesPerformanceTrackingStack] === undefined) {
      _stack["default"].initStack(s.cBusinessRuleNamesPerformanceTrackingStack);
    }

    performanceTrackingObject = {
      'Name': rules[0],
      'RunTime': businessRuleDeltaTime
    };

    if (_stack["default"].contains(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]) === false) {
      _stack["default"].push(s.cBusinessRuleNamesPerformanceTrackingStack, rules[0]);
    }

    _stack["default"].push(s.cBusinessRulePerformanceTrackingStack, performanceTrackingObject); // stack.print(s.cBusinessRulePerformanceTrackingStack);
    // stack.print(s.cBusinessRuleNamesPerformanceTrackingStack);

  }

  if (businessRuleOutput === true) {
    console.log('Rule output is: ' + JSON.stringify(ruleOutput));
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
 * @return {Boolean} True to indicate that the application should not exit.
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'commandString before attempted delimiter swap is: ' + commandString);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'replaceCharacterWithCharacterRule is: ' + JSON.stringify(replaceCharacterWithCharacterRule));

  var secondaryCommandDelimiterRegEx = new RegExp('\\' + secondaryCommandArgsDelimiter, 'g');
  commandString = _ruleBroker["default"].processRules(commandString, [secondaryCommandDelimiterRegEx, primaryCommandDelimiter], replaceCharacterWithCharacterRule);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is: ' + commandString);

  var tertiaryCommandDelimiterRegEx = new RegExp('\\' + tertiaryCommandDelimiter, 'g');
  commandString = _ruleBroker["default"].processRules(commandString, [tertiaryCommandDelimiterRegEx, secondaryCommandArgsDelimiter], replaceCharacterWithCharacterRule);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is: ' + commandString);

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
        console.log('WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered: ' + numberOfCommands);
      }
    } else {
      console.log('WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number: ' + inputData[2]);
    }
  } else {
    console.log('WARNING: nominal.commandGenerator: The specified command: ' + commandString + ' was not found, please enter a valid command and try again.');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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


exports.commandGenerator = commandGenerator;

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
        if (D[s.cBusinessRulePerformanceTrackingStack][j][s.cName] === currentBusinessRuleName) {
          businessRuleCounter = businessRuleCounter + 1;

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'businessRuleCounter is: ' + businessRuleCounter);

          businessRulePerformanceSum = businessRulePerformanceSum + D[s.cBusinessRulePerformanceTrackingStack][j][s.cRunTime];

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'businessRulePerformanceSum is: ' + businessRulePerformanceSum);
        }
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!!! businessRulePerformanceSum is: ' + businessRulePerformanceSum);

      average = businessRulePerformanceSum / businessRuleCounter;

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'average is: ' + average); // Now go back through them all so we can compute the standard deviation


      for (var _j = 0; _j < _stack["default"].length(s.cBusinessRulePerformanceTrackingStack); _j++) {
        if (D[s.cBusinessRulePerformanceTrackingStack][_j][s.cName] === currentBusinessRuleName) {
          businessRulePerformanceStdSum = businessRulePerformanceStdSum + math.pow(D[s.cBusinessRulePerformanceTrackingStack][_j][s.cRunTime] - average, 2);

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'businessRulePerformanceStdSum is: ' + businessRulePerformanceStdSum);
        }
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!! businessRulePerformanceStdSum is: ' + businessRulePerformanceStdSum);

      standardDev = math.sqrt(businessRulePerformanceStdSum / businessRuleCounter);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'standardDev is: ' + standardDev);

      if (D[s.cBusinessRulesPerformanceAnalysisStack] === undefined) {
        _stack["default"].initStack(s.cBusinessRulesPerformanceAnalysisStack);
      }

      _stack["default"].push(s.cBusinessRulesPerformanceAnalysisStack, {
        'Name': currentBusinessRuleName,
        'Average': average,
        'StandardDeviation': standardDev
      });
    }

    _loggers["default"].consoleTableLog('', D[s.cBusinessRulesPerformanceAnalysisStack], [s.cName, s.cAverage, s.cStandardDeviation]);

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
 * @return {void}
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
        if (D[s.cCommandPerformanceTrackingStack][j][s.cName] === currentCommandName) {
          commandCounter = commandCounter + 1;

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'commandCounter is: ' + commandCounter);

          commandPerformanceSum = commandPerformanceSum + D[s.cCommandPerformanceTrackingStack][j][s.cRunTime];

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'commandPerformanceSum is: ' + commandPerformanceSum);
        }
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!!! commandPerformanceSum is: ' + commandPerformanceSum);

      average = commandPerformanceSum / commandCounter;

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'average is: ' + average); // Now go back through them all so we can compute the standard deviation


      for (var _j2 = 0; _j2 < _stack["default"].length(s.cCommandPerformanceTrackingStack); _j2++) {
        if (D[s.cCommandPerformanceTrackingStack][_j2][s.cName] === currentCommandName) {
          commandPerformanceStdSum = commandPerformanceStdSum + math.pow(D[s.cCommandPerformanceTrackingStack][_j2][s.cRunTime] - average, 2);

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'commandPerformanceStdSum is: ' + commandPerformanceStdSum);
        }
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE!!!!!! commandPerformanceStdSum is: ' + commandPerformanceStdSum);

      standardDev = math.sqrt(commandPerformanceStdSum / commandCounter);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'standardDev is: ' + standardDev);

      if (D[s.cCommandsPerformanceAnalysisStack] === undefined) {
        _stack["default"].initStack(s.cCommandsPerformanceAnalysisStack);
      }

      _stack["default"].push(s.cCommandsPerformanceAnalysisStack, {
        'Name': currentCommandName,
        'Average': average,
        'StandardDeviation': standardDev
      });
    }

    _loggers["default"].consoleTableLog('', D[s.cCommandsPerformanceAnalysisStack], [s.cName, s.cAverage, s.cStandardDeviation]);

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
 * @return {void}
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
  var colorKeys = Object.keys(D[s.cColors][s.cColorData]);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'colorKeys is: ' + JSON.stringify(colorKeys));

  for (var i = 0; i < colorKeys.length; i++) {
    var currentColorName = colorKeys[i];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentColorName is: ' + currentColorName);

    var currentColorObject = D[s.cColors][s.cColorData][currentColorName];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentColorObject is: ' + JSON.stringify(currentColorObject));

    var currentColorHexValue = currentColorObject[s.cHexValue];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'currentColorHexValue is: ' + currentColorHexValue);

    var ruleOutput = _ruleBroker["default"].processRules(currentColorHexValue, [b.cHash, ''], colorConvertionRule);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'ruleOutput is: ' + ruleOutput);

    console.log(currentColorName + b.cComa + currentColorHexValue + b.cComa + ruleOutput[0] + b.cComa + ruleOutput[1] + b.cComa + ruleOutput[2]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};

exports.convertColors = convertColors;