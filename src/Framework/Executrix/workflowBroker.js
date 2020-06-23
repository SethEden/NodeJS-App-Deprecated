/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all of the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @function getWorkflow
 * @description Given the name of the workflow that is being requested,
 * get that workflow from the D-data structure workflows data hive.
 * @param {string} workflowName The name of the workflow we should get workflow data for.
 * @return {string} The workflow value, which ideally would be a list of commands and command parameters.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
function getWorkflow(workflowName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getWorkflow.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'workflowName is: ' + workflowName);
  let workflowValue = '';
  let arrayOfWorkflows = D[s.cCommandWorkflows][s.cWorkflow];
  for (let i = 0; i < arrayOfWorkflows.length; i++) {
    let currentWorkflow = arrayOfWorkflows[i];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentWorkflow is: ' + JSON.stringify(currentWorkflow));
    if (currentWorkflow[s.cname] === workflowName) {
      workflowValue = currentWorkflow[s.cvalue];
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'workflowValue is: ' + JSON.stringify(workflowValue));
      break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'workflowValue is: ' + workflowValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return workflowValue;
};

export default {
  getWorkflow
};