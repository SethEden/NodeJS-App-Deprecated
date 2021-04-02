/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all of the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../Executrix/loggers';
import * as bas from '../Constants/basic.constants';
import * as wrd from '../Constants/word.constants';
import * as sys from '../Constants/system.constants';
import * as msg from '../Constants/message.constants';
var path = require('path');
var D = require('../Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Framework.Executrix.workflowBroker.
var namespacePrefix = wrd.cFramework + bas.cDot + wrd.cExecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getWorkflow
 * @description Given the name of the workflow that is being requested,
 * get that workflow from the D-data structure workflows data hive.
 * @param {string} workflowName The name of the workflow we should get workflow data for.
 * @return {string|boolean} The workflow value, which ideally would be a list of commands and command parameters.
 * False if no workflow by the specified name was found.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
function getWorkflow(workflowName) {
  let functionName = getWorkflow.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowValue = false;
  let arrayOfWorkflows = D[sys.cCommandWorkflows][wrd.cWorkflow];
  for (let i = 0; i < arrayOfWorkflows.length; i++) {
    let currentWorkflow = arrayOfWorkflows[i];
    // currentWorkflow is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));
    if (currentWorkflow[wrd.cName] === workflowName) {
      workflowValue = currentWorkflow[wrd.cValue];
      // workflowValue is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + JSON.stringify(workflowValue));
      break;
    }
  }
  // workflowValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + workflowValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowValue;
};

export default {
  getWorkflow
};
