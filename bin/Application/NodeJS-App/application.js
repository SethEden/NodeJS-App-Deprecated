#!/usr/bin/env node

/**
 * @file application.js
 * @module application
 * @description This is the main init for the application.
 * It contains the main program loop and/or basic argument parsing.
 * Of course most of the detailed work is handed off to the application framework.
 * @requires module:warden
 * @requires module:clientRulesLibrary
 * @requires module:clientCommandsLibrary
 * @requires module:all-client-constants-validation
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:command-constants
 * @requires module:configuration-constants
 * @requires module:message-constants
 * @requires module:application-constants
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

var _allClientConstantsValidation = _interopRequireDefault(require("./Resources/ConstantsValidation/all-client-constants-validation"));

var bas = _interopRequireWildcard(require("../../Framework/Constants/basic.constants"));

var wrd = _interopRequireWildcard(require("../../Framework/Constants/word.constants"));

var sys = _interopRequireWildcard(require("../../Framework/Constants/system.constants"));

var cmd = _interopRequireWildcard(require("../../Framework/Constants/command.constants"));

var cfg = _interopRequireWildcard(require("../../Framework/Constants/configuration.constants"));

var msg = _interopRequireWildcard(require("../../Framework/Constants/message.constants"));

var apc = _interopRequireWildcard(require("./Constants/application.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var NODE_ENV = process.env.NODE_ENV;

var prompt = require('prompt-sync')();

var path = require('path');

var D = require('../../Framework/Structures/data');

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
  if (NODE_ENV === wrd.cdevelopment) {
    rootPath = path.resolve(process.cwd()) + apc.cApplicationDevelopRootPath;
  } else if (NODE_ENV === wrd.cproduction) {
    rootPath = path.resolve(process.cwd()) + apc.cApplicationProductionRootPath;
  } else {
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(sys.cApplicationWarningMessage1a + sys.ccApplicationWarningMessage1b);
    rootPath = path.resolve(process.cwd()) + apc.cApplicationDevelopRootPath;
  } // console.log('rootPath is: ' + rootPath);


  rootPath = _warden["default"].processRootPath(rootPath); // console.log('processed rootPath is: ' + rootPath);

  _warden["default"].bootStrapApplication(rootPath + apc.cConfigurationDataLookupPrefixPath); // NOTE: We are passing all_clt_cv.initializeAllClientConstantsValidationData function as an object on the next line of code.
  // We are doing this because we have not yet evaluated the constants path based on the root path,
  // and we don't want the function to be evaluated immediately because it will need to get the root path as part of evaluating the path to the constants files for validation.


  _warden["default"].initApplicationSchema(rootPath, apc.cClientConstantsPathActual, _allClientConstantsValidation["default"].initializeAllClientConstantsValidationData);

  _warden["default"].mergeClientBusinessRules(_clientRulesLibrary["default"].initClientRulesLibrary());

  _warden["default"].mergeClientCommands(_clientCommandsLibrary["default"].initClientCommandsLibrary());

  if (NODE_ENV === wrd.cdevelopment) {
    _warden["default"].loadCommandAliases(cmd.cDevSystemCommandsAliasesActualPath, apc.cDevClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(cmd.cDevSystemWorkflowsActualPath, apc.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === wrd.cproduction) {
    _warden["default"].loadCommandAliases(cmd.cProdSystemCommandsAliasesActualPath, apc.cProdClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(cmd.cProdSystemWorkflowsActualPath, apc.cProdClientWorkflowsActualPath);
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
  var functionName = wrd.capplication;
  var argumentDrivenInterface = true;
  var commandInput;
  var commandResult;

  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // BEGIN main program loop


  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cApplicationMessage2); // BEGIN command parser


  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cApplicationMessage3);

  argumentDrivenInterface = _warden["default"].getConfigurationSetting(cfg.cArgumentDrivenInterface);

  _warden["default"].enqueueCommand(cmd.cStartupWorkflow); // NOTE: We are processing the argument driven interface first that way even if we are not in an argument driven interface,
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
    if (process.argv[2].includes(bas.cDash) === true || process.argv[2].includes(bas.cForwardSlash) === true || process.argv[2].includes(bas.cBackSlash) === true) {
      commandToExecute = _warden["default"].executeBusinessRule(biz.caggregateCommandArguments, process.argv, '');
    }

    _warden["default"].enqueueCommand(commandToExecute);

    while (_warden["default"].isCommandQueueEmpty() === false) {
      commandResult = _warden["default"].processCommandQueue();
    }
  } // NOW the application can continue with the interactive interface if the flag was set to false.


  if (argumentDrivenInterface === false) {
    while (programRunning === true) {
      if (_warden["default"].isCommandQueueEmpty() === true) {
        commandInput = prompt(bas.cGreaterThan);

        _warden["default"].enqueueCommand(commandInput);
      }

      commandResult = _warden["default"].processCommandQueue();

      if (commandResult === false) {
        // END command parser
        _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cApplicationMessage4);

        programRunning = false; // END main program loop

        _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cApplicationMessage5); // Exiting, Good bye, Have a nice day & stay safe!


        _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cApplicationExitMessage1 + msg.cApplicationExitMessage2);

        break;
      } else {// console.log('contents of D are: ' + JSON.stringify(D));
        // console.log(result);
      }
    }
  }

  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
}

; // Launch the application!!

var programRunning = false;
bootStrapApplication(); // Call to the function above to do initial pre-setup for the application.

programRunning = true;
application(); // Call to the function above to actually execute the application.