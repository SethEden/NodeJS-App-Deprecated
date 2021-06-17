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
import warden from '../../Framework/Controllers/warden';
import clientRules from './BusinessRules/clientRulesLibrary';
import clientCommands from './Commands/clientCommandsLibrary';
import all_clt_cv from './Resources/ConstantsValidation/all-client-constants-validation';
import * as bas from '../../Framework/Constants/basic.constants';
import * as wrd from '../../Framework/Constants/word.constants';
import * as sys from '../../Framework/Constants/system.constants';
import * as cmd from '../../Framework/Constants/command.constants';
import * as cfg from '../../Framework/Constants/configuration.constants';
import * as msg from '../../Framework/Constants/message.constants';
import * as apc from './Constants/application.constants';
require('dotenv').config();
const {NODE_ENV} = process.env;
const prompt = require('prompt-sync')();
var path = require('path');
var D = require('../../Framework/Structures/data');
global.appRoot = path.resolve(process.cwd());
var rootPath = '';
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Application.application.
var namespacePrefix = wrd.cApplication + bas.cDot + baseFileName + bas.cDot;

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
  }
  // console.log('rootPath is: ' + rootPath);
  rootPath = warden.processRootPath(rootPath);
  // console.log('processed rootPath is: ' + rootPath);
  warden.bootStrapApplication(rootPath + apc.cConfigurationDataLookupPrefixPath);
  // NOTE: We are passing all_clt_cv.initializeAllClientConstantsValidationData function as an object on the next line of code.
  // We are doing this because we have not yet evaluated the constants path based on the root path,
  // and we don't want the function to be evaluated immediately because it will need to get the root path as part of evaluating the path to the constants files for validation.
  warden.initApplicationSchema(rootPath, apc.cClientConstantsPathActual, all_clt_cv.initializeAllClientConstantsValidationData);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  if (NODE_ENV === wrd.cdevelopment) {
    warden.loadCommandAliases(cmd.cDevSystemCommandsAliasesActualPath, apc.cDevClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(cmd.cDevSystemWorkflowsActualPath, apc.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === wrd.cproduction) {
    warden.loadCommandAliases(cmd.cProdSystemCommandsAliasesActualPath, apc.cProdClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(cmd.cProdSystemWorkflowsActualPath, apc.cProdClientWorkflowsActualPath);
  }
};

/**
 * @function application
 * @description This is the main program look, the init for the entire application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function application() {
  let functionName = wrd.capplication;
  let argumentDrivenInterface = true;
  let commandInput;
  let commandResult;
  warden.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // BEGIN main program loop
  console.log('BEGIN main program loop');
  warden.consoleLog(namespacePrefix + functionName, msg.cApplicationMessage2);
  // BEGIN command parser
  console.log('BEGIN command parser');
  warden.consoleLog(namespacePrefix + functionName, msg.cApplicationMessage3);
  argumentDrivenInterface = warden.getConfigurationSetting(wrd.csystem, cfg.cArgumentDrivenInterface);
  console.log('argumentDrivenInterface is: ' + argumentDrivenInterface);
  console.log('starting warden.enqueueCommand(cmd.cStartupWorkflow)');
  warden.enqueueCommand(cmd.cStartupWorkflow);
  console.log('finished warden.enqueueCommand(cmd.cStartupWorkflow)');

  // NOTE: We are processing the argument driven interface first that way even if we are not in an argument driven interface,
  // arguments can still be passed in and they will be executed first, after the startup workflow is complete.
  //
  // console.log('argument driven execution');
  // console.log(process.argv);
  // console.log('command to execute is: ' + process.argv[2]);
  // We need to strip off the preceeding "--" before we try to process it as an actual command.
  // Also need to make sure that the command to execute actually contains the "--".
  let commandToExecute = '';
  // Make sure we execute any and all commands so the command queue is empty before
  // we process the command args and add more commands to the command queue.
  // Really this is about getting out the application name, version and about message.
  while(warden.isCommandQueueEmpty() === false) {
    commandResult = warden.processCommandQueue();
  }

  // NOW process the command args and add them to the command queue for execution.
  if (!process.argv && process.argv.length > 0) {
    if (process.argv[2].includes(bas.cDash) === true ||
    process.argv[2].includes(bas.cForwardSlash) === true ||
    process.argv[2].includes(bas.cBackSlash) === true) {
      commandToExecute = warden.executeBusinessRule(biz.caggregateCommandArguments, process.argv, '');
    }
    warden.enqueueCommand(commandToExecute);
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = warden.processCommandQueue();
    }
  }

  // NOW the application can continue with the interactive interface if the flag was set to false.
  if (argumentDrivenInterface === false) {
    while(programRunning === true) {
      if (warden.isCommandQueueEmpty() === true) {
        commandInput = prompt(bas.cGreaterThan);
        warden.enqueueCommand(commandInput);
      }
      commandResult = warden.processCommandQueue();
      if (commandResult === false) {
        // END command parser
        warden.consoleLog(namespacePrefix + functionName, msg.cApplicationMessage4);
        programRunning = false;
        // END main program loop
        warden.consoleLog(namespacePrefix + functionName, msg.cApplicationMessage5);
        // Exiting, Good bye, Have a nice day & stay safe!
        warden.consoleLog(namespacePrefix + functionName, msg.cApplicationExitMessage1 + msg.cApplicationExitMessage2);
        break;
      } else {
        // console.log('contents of D are: ' + JSON.stringify(D));
        // console.log(result);
      }
    }
  }
  warden.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

// Launch the application!!
let programRunning = false;
bootStrapApplication(); // Call to the function above to do initial pre-setup for the application.
programRunning = true;
application(); // Call to the function above to actually execute the application.
