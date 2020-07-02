/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:rulesLibrary
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as rules from './rulesLibrary';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @function bootStrapApplication
 * @description Captures all of the business rule string-to-function call map data in the rulesLibrary and migrates that data to the D-data structure.
 * This is important now because we are going to allow the client to define their own business rules seperate from the system defined business rules.
 * So we need a way to merge all client defined and system defined business rules into one location.
 * Then the rule broker will execute business rules from the D-Data structure and not the rules library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/10
 */
function bootStrapBusinessRules() {
  // console.log('BEGIN ruleBroker.bootStrapBusinessRules function');
  rules.initRulesLibrary();
  // console.log('END ruleBroker.bootStrapBusinessRules function');
};

/**
 * @function addClientRules
 * @description Merges client defined business rules with the system defined business rules.
 * @param {array<object>} clientRules The client rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/15
 */
function addClientRules(clientRules) {
  // console.log('BEGIN ruleBroker.addClientRules function');
  // console.log('clientRules is: ' + JSON.stringify(clientRules));
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = addClientRules.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'clientRules is: ' + JSON.stringify(clientRules));
  Object.assign(D[s.cBusinessRules], clientRules);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('END ruleBroker.addClientRules function');
};

/**
 * @function processRules
 * @description Parse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules are defined in the input rules map.
 * @param {string|integer|object|function} inputData The primary input data that should be processed by the business rule.
 * @param {string|integer|boolean|map} inputMetaData Additional meta-data that should be used when processing the business rule.
 * @param {map} rulesToExecute The name(s) of the rule(s) that should be executed for modding the input data.
 * @return {string|integer|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Seth Hollingsead
 * @date 2020/05/19
 * @NOTE: The code that has been commented out below, is left as a memorial of what NOT TO DO!
 * Because it causes a circular dependency as noted in the note below.
 * If you need to debug this function, you'll need to uncomment the console.logs that are hard-coded below.
 */
export const processRules = function(inputData, inputMetaData, rulesToExecute) {
  // NOTE Cannot call the Loggers.consoleLog from here because it causes a circular dependency.
  // We will have to hard-code the console logs and will not be able to write them to the log file.
  // console.log('BEGIN ruleBroker.processRules function');
  // console.log('inputData is: ' + JSON.stringify(inputData));
  // console.log('inputMetaData is: ' + JSON.stringify(inputMetaData));
  // console.log('rulesToExecute are: ' + JSON.stringify(rulesToExecute));
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = processRules';
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = inputData;
  for (let rule in rulesToExecute) {
    if (rulesToExecute.hasOwnProperty(rule)) {
      let key = rule;
      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'key is: ' + key);
      // console.log('key is: ' + key);
      let value = rulesToExecute[key];
      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
      // console.log('value is: ' + value);
      // returnData = rules.rulesLibrary[value](returnData, inputMetaData);
      returnData = D[s.cBusinessRules][value](returnData, inputMetaData);
    }
  }
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + JSON.stringify(returnData));
  // console.log('END ruleBroker.processRules function');
  return returnData;
};

export default {
  bootStrapBusinessRules,
  addClientRules,
  processRules
};
