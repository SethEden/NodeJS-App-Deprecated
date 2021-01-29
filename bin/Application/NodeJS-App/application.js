#!/usr/bin/env node

/**
 * @file application.js
 * @module application
 * @description This is the main init for the application.
 * It contains the main program loop and/or basic argument parsing.
 * Of course most of the detailed work is handed off to the application framework.
 * @requires module:warden
 * @requires module:clientRulesLibrary
 * @requires module:application-constants
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _warden = _interopRequireDefault(require("../../Framework/Controllers/warden"));

var _clientRulesLibrary = _interopRequireDefault(require("./BusinessRules/clientRulesLibrary"));

var _clientCommandsLibrary = _interopRequireDefault(require("./Commands/clientCommandsLibrary"));

var c = _interopRequireWildcard(require("./Constants/application.constants"));

var b = _interopRequireWildcard(require("../../Framework/Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../Framework/Constants/generic.constants"));

var w = _interopRequireWildcard(require("../../Framework/Constants/word.constants"));

var s = _interopRequireWildcard(require("../../Framework/Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var NODE_ENV = process.env.NODE_ENV;

var prompt = require('prompt-sync')();

var path = require('path');

var D = require('../../Framework/Resources/data');

global.appRoot = path.resolve(process.cwd());
var rootPath = '';
var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/01/30
 */

function bootStrapApplication() {
  if (NODE_ENV === w.cdevelopment) {
    rootPath = path.resolve(process.cwd()) + c.cApplicationDevelopRootPath;
  } else if (NODE_ENV === w.cproduction) {
    rootPath = path.resolve(process.cwd()) + c.cApplicationProductionRootPath;
  } else {
    console.log('WARNING: No .env file found! going to default to the DEVELOPMENT ENVIRONMENT!!!!!!!!!');
    rootPath = path.resolve(process.cwd()) + c.cApplicationDevelopRootPath;
  } // console.log('rootPath is: ' + rootPath);


  rootPath = _warden["default"].processRootPath(rootPath); // console.log('processed rootPath is: ' + rootPath);

  _warden["default"].bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);

  _warden["default"].saveRootPath(rootPath);

  _warden["default"].mergeClientBusinessRules(_clientRulesLibrary["default"].initClientRulesLibrary());

  _warden["default"].mergeClientCommands(_clientCommandsLibrary["default"].initClientCommandsLibrary());

  if (NODE_ENV === w.cdevelopment) {
    _warden["default"].loadCommandAliases(s.cDevSystemCommandsAliasesActualPath, c.cDevClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(s.cDevSystemWorkflowsActualPath, c.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === w.cproduction) {
    _warden["default"].loadCommandAliases(s.cProdSystemCommandsAliasesActualPath, c.cProdClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(s.cProdSystemWorkflowsActualPath, c.cProdClientWorkflowsActualPath);
  }
}

;
/**
 * @function application
 * @description This is the main program look, the init for the entire application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/21
 */

function application() {
  var functionName = w.capplication;
  var argumentDrivenInterface = true;
  var commandInput;
  var commandResult;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN main program loop');

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN command parser');

  argumentDrivenInterface = _warden["default"].getConfigurationSetting(s.cArgumentDrivenInterface);

  _warden["default"].enqueueCommand(s.cStartupWorkflow);

  console.log('w.cRecognizer resolves as: ' + w.cRecognizer);
  console.log('w.cPattern resolves as: ' + w.cPattern);
  console.log('s.cconstantsPatternRecognizer resolves as: ' + s.cconstantsPatternRecognizer); // NOTE: We are processing the argument driven interface first that way even if we are not in an argument driven interface,
  // arguments can still be passed in and they will be executed first, after the startup workflow is complete.
  //
  // console.log('argument driven execution');
  // console.log(process.argv);
  // console.log('command to execute is: ' + process.argv[2]);
  // We need to strip off the preceeding "--" before we try to process it as an actual command.
  // Also need to make sure that the command to execute actually contains the "--".

  var commandToExecute = ''; // Make sure we execute any and all commands so the command queue is empty before
  // we process the command args and add more commands to the command queue.
  // Really this is about getting out the application name, version and about message.

  while (_warden["default"].isCommandQueueEmpty() === false) {
    commandResult = _warden["default"].processCommandQueue();
  } // NOW process the command args and add them to the command queue for execution.


  if (!process.argv && process.argv.length > 0) {
    if (process.argv[2].includes(b.cDash) === true || process.argv[2].includes(b.cForwardSlash) === true || process.argv[2].includes(b.cBackSlash) === true) {
      commandToExecute = _warden["default"].executeBusinessRule(s.caggregateCommandArguments, process.argv, '');
    }

    _warden["default"].enqueueCommand(commandToExecute);

    while (_warden["default"].isCommandQueueEmpty() === false) {
      commandResult = _warden["default"].processCommandQueue();
    }
  } // NOW the application can continue with the interactive interface if the flag was set to false.


  if (argumentDrivenInterface === false) {
    while (programRunning === true) {
      if (_warden["default"].isCommandQueueEmpty() === true) {
        commandInput = prompt(b.cGreaterThan);

        _warden["default"].enqueueCommand(commandInput);
      }

      commandResult = _warden["default"].processCommandQueue();

      if (commandResult === false) {
        _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'END command parser');

        programRunning = false;

        _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'END main program loop'); // console.log('Exiting, Good bye, Have a nice day & stay safe!');


        _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'Exiting, Good bye, Have a nice day & stay safe!');

        break;
      } else {// console.log('contents of D are: ' + JSON.stringify(D));
        // console.log(result);
      }
    }
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

; // Launch the application!!

var programRunning = false;
bootStrapApplication(); // Call to the function above to do initial pre-setup for the application.

programRunning = true;
application(); // Call to the function above to actually execute the application.