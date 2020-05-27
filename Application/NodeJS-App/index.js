import loggers from '../../Framework/Executrix/loggers';
import warden from '../../Framework/Controllers/warden.js';
import * as c from './Constants/application.constants';
import * as s from '../../Framework/Constants/system.constants';
import * as g from '../../Framework/Constants/generic.constants';
import * as b from '../../Framework/Constants/basic.constants';
const prompt = require('prompt-sync')();
var path = require('path');
var D = require('../../Framework/Resources/data');
global.appRoot = path.resolve(__dirname);
var rootPath = '';

/**
 * @name bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
function bootStrapApplication() {
  rootPath = path.resolve(__dirname);
  rootPath = warden.processRootPath(rootPath);
  warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  warden.setConfigurationSetting(s.cApplicationRootPath, rootPath);
};

/**
 * @name application
 * @description This is the main program look, the init for the entire application.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function application() {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.capplication;
  var argumentDrivenInterface = true;
  var commandInput;
  var commandResult;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN main program loop');
  warden.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN command parser');
  argumentDrivenInterface = warden.getConfigurationSetting(s.cArgumentDrivenInterface);
  if (argumentDrivenInterface === false) {
    while(programRunning === true) {
      commandInput = prompt(b.cGreaterThan);
      commandResult = warden.processCommand(commandInput);
      if (commandResult === false) {
        warden.consoleLog(baseFileName + b.cDot + functionName, 'END command parser');
        programRunning = false;
        warden.consoleLog(baseFileName + b.cDot + functionName, 'END main program loop');
        console.log('Exiting, Good bye, Have a nice day & stay safe!');
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
