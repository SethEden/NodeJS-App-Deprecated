/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:messages-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import chiefData from '../Controllers/chiefData';
import loggers from '../Executrix/loggers';
import * as bas from '../Constants/basic.constants';
import * as wrd from '../Constants/word.constants';
import * as sys from '../Constants/system.constants';
import * as msg from '../Constants/messages.constants';
var path = require('path');
var D = require('../Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function loadCommandWorkflowsFromPath
 * @description Loads the command workflows XML file that is specified by the input.
 * @param {string} commandWorkflowFilePathConfigurationName The path and file name to the XML that contains the command workflows definitions.
 * (Could be system defined command workflows or client command defined command workflows)
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
function loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName) {
  let functionName = loadCommandWorkflowsFromPath.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // commandWorkflowFilePathConfigurationName is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ccommandWorkflowFilePathConfigurationNameIs + commandWorkflowFilePathConfigurationName);
  let allCommandWorkflowsData = {};
  allCommandWorkflowsData = chiefData.setupAllXmlData(commandWorkflowFilePathConfigurationName, sys.cCommandWorkflows);
  if (D[sys.cCommandWorkflows] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[sys.cCommandWorkflows] = {};
    D[sys.cCommandWorkflows] = allCommandWorkflowsData[sys.cCommandWorkflows];
  } else {
    for (let i=0; i<allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflow].length; i++) {
      D[sys.cCommandWorkflows][wrd.cWorkflow].push(allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflow][i])
    }
  }
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
};

export default {
  loadCommandWorkflowsFromPath
};
