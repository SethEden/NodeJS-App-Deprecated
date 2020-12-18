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
const prompt = require('prompt-sync')();
var path = require('path');
var D = require('../../Framework/Resources/data');
// global.appRoot = path.resolve(__dirname);
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
  // rootPath = path.resolve(__dirname);
  rootPath = path.resolve(process.cwd()) + c.cApplicationBinaryRootPath;
  console.log('rootPath is: ' + rootPath);
  rootPath = warden.processRootPath(rootPath);
  console.log('processed rootPath is: ' + rootPath);
  warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  warden.saveRootPath(rootPath);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  warden.loadCommandAliases(s.cSystemCommandsAliasesActualPath, c.cClientCommandAliasesActualPath);
  warden.loadCommandWorkflows(s.cSystemWorkflowsActualPath, c.cClientWorkflowsActualPath);
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
  } else { // argument driven interface / execution is handled here.
    console.log('argument driven execution');

  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

// Launch the application!!
let programRunning = false;
bootStrapApplication() // Call to the function above to do initial pre-setup for the application.
programRunning = true;
application(); // Call to the function above to actually execute the application.
