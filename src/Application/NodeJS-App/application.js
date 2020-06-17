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
 * @requires module:system-constants
 * @requires module:generic-constants
 * @requires module:basic-constants
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import warden from '../../Framework/Controllers/warden';
import clientRules from './BusinessRules/clientRulesLibrary';
import * as c from './Constants/application.constants';
import * as s from '../../Framework/Constants/system.constants';
import * as g from '../../Framework/Constants/generic.constants';
import * as b from '../../Framework/Constants/basic.constants';
const prompt = require('prompt-sync')();
const figlet = require('figlet');
var path = require('path');
var D = require('../../Framework/Resources/data');
global.appRoot = path.resolve(__dirname);
var rootPath = '';

/**
 * @function bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
function bootStrapApplication() {
  rootPath = path.resolve(__dirname);
  rootPath = warden.processRootPath(rootPath);
  warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  warden.saveRootPath(rootPath);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
};

/**
 * @function application
 * @description This is the main program look, the init for the entire application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function application() {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.capplication;
  var argumentDrivenInterface = true;
  var commandInput;
  var commandResult;
  var applicationName;
  var figletFont;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN main program loop');
  warden.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN command parser');
  argumentDrivenInterface = warden.getConfigurationSetting(s.cArgumentDrivenInterface);
  applicationName = warden.getConfigurationSetting(s.cApplicationName);
  figletFont = warden.getConfigurationSetting(s.cFigletFont);
  console.log(figlet.textSync(applicationName, {font: figletFont, horizontalLayout: s.cfull }));

  console.log('**************************************************************************');
  console.log('Testing client business rule: ' + c.cmostPopularNumber);
  var inputData = 'an1na';
  var inputMetaData = '';
  warden.executeBusinessRule(c.cisAlmostPalindrome, inputData, inputMetaData);
  console.log('**************************************************************************');

  if (argumentDrivenInterface === false) {
    while(programRunning === true) {
      commandInput = prompt(b.cGreaterThan);
      commandResult = warden.processCommand(commandInput);
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
var programRunning = false;
bootStrapApplication() // Call to the function above to do initial pre-setup for the application.
programRunning = true;
application(); // Call to the function above to actually execute the application.
