/**
* @file all-client-constants-validation.js
* @module all-client-constants-validation
* @description Contains validation for all client constants.
* @requires module:warden
* @requires module:basic-constants
* @requires module:generic-constants
* @requires module:word-constants
* @requires module:system-constants
* @requires module:message-constants
* @requires module:application-constants
* @requires module:application-message-constants
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
import * as gen from '../../../../Framework/Constants/generic.constants';
import * as wrd from '../../../../Framework/Constants/word.constants';
import * as sys from '../../../../Framework/Constants/system.constants';
import * as msg from '../../../../Framework/Constants/message.constants';
import * as apc from '../../Constants/application.constants';
import * as app_msg from '../../Constants/application.message.constants';
import * as app_biz_cv from './application-business-constants-validation';
import * as app_cmd_cv from './application-command-constants-validation';
import * as app_cv from './application-constants-validation';
import * as app_msg_cv from './application-message-constants-validation';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Application.Resources.ConstantsValidation.all-client-constants-validation.
var namespacePrefix = wrd.cApplication + bas.cDot + wrd.cResources + bas.cDot + wrd.cConstants + wrd.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeAllClientConstantsValidationData
 * @description Initializes all of the client constants validation data so that it can be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/03/08
 */
function initializeAllClientConstantsValidationData() {
  let functionName = initializeAllClientConstantsValidationData.name;
  warden.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let constantsPath = warden.getConfigurationSetting(wrd.csystem, sys.cClientConstantsPath);
  // constantsPath is:
  console.log('constantsPath is: ' + constantsPath);
  warden.consoleLog(namespacePrefix + functionName, msg.cconstantsPathIs + constantsPath);

  let allClientConstantsValidationData = {};
  allClientConstantsValidationData[sys.cConstantsValidationData] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationBusinessConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationCommandConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationMessageConstantsValidation] = [];

  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationBusinessConstantsValidation] = app_biz_cv.applicationBusinessConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationCommandConstantsValidation] = app_cmd_cv.applicationCommandConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationConstantsValidation] = app_cv.applicationConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][apc.capplicationMessageConstantsValidation] = app_msg_cv.applicationMessageConstantsValidation;

  // Setup all the paths to the constants files.
  let resolvedConstantsPath_ApplicationBusiness = path.resolve(constantsPath + bas.cForwardSlash + apc.capplication_business_constants_js);
  // resolvedConstantsPath_ApplicationBusiness is:
  warden.consoleLog(namespacePrefix + functionName, app_msg.cresolvedConstantsPath_ApplicationBusinessIs + resolvedConstantsPath_ApplicationBusiness);
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][apc.capplicationBusinessConstantsValidation] = resolvedConstantsPath_ApplicationBusiness;

  let resolvedConstantsPath_ApplicationCommand = path.resolve(constantsPath + bas.cForwardSlash + apc.capplication_command_constants_js);
  // resolvedConstantsPath_ApplicationCommand is:
  warden.consoleLog(namespacePrefix + functionName, app_msg.cresolvedConstantsPath_ApplicationCommandIs + resolvedConstantsPath_ApplicationCommand);
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][apc.capplicationCommandConstantsValidation] = resolvedConstantsPath_ApplicationCommand;

  let resolvedConstantsPath_ApplicationConstants = path.resolve(constantsPath + bas.cForwardSlash + apc.capplication_constants_js);
  // resolvedConstantsPath_ApplicationConstants is:
  warden.consoleLog(namespacePrefix + functionName, app_msg.cresolvedConstantsPath_ApplicationConstantsIs + resolvedConstantsPath_ApplicationConstants);
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][apc.capplicationConstantsValidation] = resolvedConstantsPath_ApplicationConstants;

  let resolvedConstantsPath_ApplicationMessage = path.resolve(constantsPath + bas.cForwardSlash + apc.capplication_message_constants_js);
  // resolvedConstantsPath_ApplicationMessage is:
  warden.consoleLog(namespacePrefix + functionName, app_msg.cresolvedConstantsPath_ApplicationMessageIs + resolvedConstantsPath_ApplicationMessage);
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][apc.capplicationMessageConstantsValidation] = resolvedConstantsPath_ApplicationMessage;

  // Application Business Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][apc.capplicationBusinessConstantsValidation] = app_msg.cApplicationBusinessConstantsPhase1Validation;
  // Application Command Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][apc.capplicationCommandConstantsValidation] = app_msg.cApplicationCommandConstantsPhase1Validation;
  // Application Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][apc.capplicationConstantsValidation] = app_msg.cApplicationConstantsPhase1Validation;
  // Application Message Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][apc.capplicationMessageConstantsValidation] = app_msg.cApplicationMessageConstantsPhase1Validation;

  // Application Business Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][apc.capplicationBusinessConstantsValidation] = app_msg.cApplicationBusinessConstantsPhase2Validation;
  // Application Command Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][apc.capplicationCommandConstantsValidation] = app_msg.cApplicationCommandConstantsPhase2Validation;
  // Application Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][apc.capplicationConstantsValidation] = app_msg.cApplicationConstantsPhase2Validation;
  // Application Message Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][apc.capplicationMessageConstantsValidation] = app_msg.cApplicationMessageConstantsPhase2Validation;

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][apc.capplicationBusinessConstantsValidation] = gen.capp + bas.cUnderscore + gen.cbiz;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][apc.capplicationCommandConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccmd;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][apc.capplicationConstantsValidation] = gen.capc;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][apc.capplicationMessageConstantsValidation] = gen.capp + bas.cUnderscore + gen.cmsg;

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][apc.capplicationBusinessConstantsValidation] = apc.capplication_business_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][apc.capplicationCommandConstantsValidation] = apc.capplication_command_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][apc.capplicationConstantsValidation] = apc.capplication_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][apc.capplicationMessageConstantsValidation] = apc.capplication_message_constants_js;

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][apc.capplicationBusinessConstantsValidation] = gen.capp + bas.cUnderscore + gen.cbiz + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][apc.capplicationCommandConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccmd + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][apc.capplicationConstantsValidation] = gen.capc + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][apc.capplicationMessageConstantsValidation] = gen.capp + bas.cUnderscore + gen.cmsg + bas.cDot;

  // allClientConstantsValidationData is:
  warden.consoleLog(namespacePrefix + functionName, app_msg.callClientConstantsValidationDataIs + JSON.stringify(allClientConstantsValidationData));
  warden.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allClientConstantsValidationData;
};

export default {
  initializeAllClientConstantsValidationData
};
