import commandParser from '../../Framework/Controllers/commandBroker';
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
async function application() {

  console.log('BEGIN command parser');
  // Almost works
  D['data'] = {};
  D['data']['ctx'] = {};

  console.log('contents of D are: ' + JSON.stringify(D));
  while(programRunning === true) {
    var result = prompt('>');
    result = await commandParser.initCommandParser(result);
    if (result === false) {
      console.log('END command parser');
      programRunning = false;
      console.log('END main program loop');
      break;
    } else {
      console.log('contents of D are: ' + JSON.stringify(D));
      console.log(result);
    }
  }
};

// Launch the application!!
var programRunning = false;
bootStrapApplication() // Call to the function above to do initial pre-setup for the application.
console.log('BEGIN main program loop');
programRunning = true;
application(); // Call to the function above to actually execute the application.
console.log('Exiting, Good bye, Have a nice day & stay safe!');
