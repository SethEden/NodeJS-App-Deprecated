/**
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @author Seth Hollingsead
 * @date 2020/06/04
 */
import * as rules from './rulesLibrary';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');

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
  // consoe.log('BEGIN ruleBroker.processRules function');
  // console.log('inputData is: ' + JSON.stringify(inputData));
  // console.log('inputMetaData is: ' + JSON.stringify(inputMetaData));
  // console.log('rulesToExecute are: ' + JSON.stringify(rulesToExecute));
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = processRules';
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = inputData;
  for (var rule in rulesToExecute) {
    if (rulesToExecute.hasOwnProperty(rule)) {
      var key = rule;
      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'key is: ' + key);
      // console.log('key is: ' + key);
      var value = rulesToExecute[key];
      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
      // console.log('value is: ' + value);
      returnData = rules.rulesLibrary[value](returnData, inputMetaData);
    }
  }
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + JSON.stringify(returnData));
  // console.log('END ruleBroker.processRules function');
  return returnData;
};

export default {
  processRules
};
