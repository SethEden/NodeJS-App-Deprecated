/**
* @file all-client-constants-validation.js
* @module all-client-constants-validation
* @description Contains validation for all client constants.
* @requires module:warden
* @requires module:basic-constants
* @requires module:system-constants
* @requires module:message-constants
* @requires module:application-constants
* @requires module:application-business-constants-validation
* @requires module:application-command-constants-validation
* @requires module:application-constants-validation
* @requires module:application-message-constants-validation
* @requires {@link https://www.npmjs.com/package/path|path}
* @author Seth Hollingsead
* @date 2021/03/08
* @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
*/
import warden from '../../../../Framework/Controllers/warden';
import * as bas from '../../../../Framework/Constants/basic.constants';
import * as sys from '../../../../Framework/Constants/system.constants';
import * as msg from '../../../../Framework/Constants/message.constants';
import * as apc from '../../Constants/application.constants';
import * as app_biz_cv from './application-business-constants-validation';
import * as app_cmd_cv from './application-command-constants-validation';
import * as app_cv from './application-constants-validation';
import * as app_msg_cv from './application-message-constants-validation';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function initializeAllClientConstantsValidationData
 * @description Initializes all of the client constants validation data so that it can be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/03/08
 */
function initializeAllClientConstantsValidationData() {
  let functionName = initializeAllClientConstantsValidationData.name;
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  let allClientConstantsValidationData = {};

  allClientConstantsValidationData[sys.cConstantsValidationData] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationBusinessConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationCommandConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationMessageConstantsValidation] = [];

  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationBusinessConstantsValidation] = app_biz_cv.applicationBusinessConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationCommandConstantsValidation] = app_cmd_cv.applicationCommandConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationConstantsValidation] = app_cv.applicationConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationMessageConstantsValidation] = app_msg_cv.applicationMessageConstantsValidation;
  // allSystemConstantsValidationData is:
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.callClientConstantsValidationDataIs + JSON.stringify(allClientConstantsValidationData));
  warden.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return allClientConstantsValidationData;
};

export default {
  initializeAllClientConstantsValidationData
};
