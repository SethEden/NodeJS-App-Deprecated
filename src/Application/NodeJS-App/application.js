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
import warden from '../../Framework/Controllers/warden';
import clientRules from './BusinessRules/clientRulesLibrary';
import clientCommands from './Commands/clientCommandsLibrary';
import * as c from './Constants/application.constants';
import * as b from '../../Framework/Constants/basic.constants';
import * as g from '../../Framework/Constants/generic.constants';
import * as w from '../../Framework/Constants/word.constants';
import * as s from '../../Framework/Constants/system.constants';
require('dotenv').config();
const {NODE_ENV} = process.env;
const prompt = require('prompt-sync')();
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
    console.log('WARNING: No .env file found! going to default to the DEVELOPMENT ENVIRONMENT!!!!!!!!!')
    rootPath = path.resolve(process.cwd()) + c.cApplicationDevelopRootPath;
  }
  // console.log('rootPath is: ' + rootPath);
  rootPath = warden.processRootPath(rootPath);
  // console.log('processed rootPath is: ' + rootPath);
  warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  warden.saveRootPath(rootPath);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  if (NODE_ENV === w.cdevelopment) {
    warden.loadCommandAliases(s.cDevSystemCommandsAliasesActualPath, c.cDevClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(s.cDevSystemWorkflowsActualPath, c.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === w.cproduction) {
    warden.loadCommandAliases(s.cProdSystemCommandsAliasesActualPath, c.cProdClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(s.cProdSystemWorkflowsActualPath, c.cProdClientWorkflowsActualPath);
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
  let functionName = w.capplication;
  let argumentDrivenInterface = true;
  let commandInput;
  let commandResult;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN main program loop');
  warden.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN command parser');
  argumentDrivenInterface = warden.getConfigurationSetting(s.cArgumentDrivenInterface);
  warden.enqueueCommand(s.cStartupWorkflow);

  console.log('w.cRecognizer resolves as: ' + w.cRecognizer);
  console.log('w.cPattern resolves as: ' + w.cPattern);
  console.log('s.cconstantsPatternRecognizer resolves as: ' + s.cconstantsPatternRecognizer);

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
    if (process.argv[2].includes(b.cDash) === true ||
    process.argv[2].includes(b.cForwardSlash) === true ||
    process.argv[2].includes(b.cBackSlash) === true) {
      commandToExecute = warden.executeBusinessRule(s.caggregateCommandArguments, process.argv, '');
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
        commandInput = prompt(b.cGreaterThan);
        warden.enqueueCommand(commandInput);
      }
      commandResult = warden.processCommandQueue();
      if (commandResult === false) {
        warden.consoleLog(baseFileName + b.cDot + functionName, 'END command parser');
        programRunning = false;
        warden.consoleLog(baseFileName + b.cDot + functionName, 'END main program loop');
        // console.log('Exiting, Good bye, Have a nice day & stay safe!');
        warden.consoleLog(baseFileName + b.cDot + functionName, 'Exiting, Good bye, Have a nice day & stay safe!');
        break;
      } else {
        // console.log('contents of D are: ' + JSON.stringify(D));
        // console.log(result);
      }
    }
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

// Launch the application!!
let programRunning = false;
bootStrapApplication(); // Call to the function above to do initial pre-setup for the application.
programRunning = true;
application(); // Call to the function above to actually execute the application.
