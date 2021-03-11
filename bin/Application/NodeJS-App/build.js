#!/usr/bin/env node

/**
 * @file build.js
 * @module build
 * @description This is the main init for the build processes for the application.
 * This includes the Build which uses Babel to transpile the code down from
 * ES6 (ECMA Script 6) syntax to JavaScript Common syntax, and all non-code files
 * including generated documentation are copied to the bin folder under the same nested folder structure.
 * It also includes the release process where the compiled code & non-code files (Configuration & Documentation)
 * is packaged up into a single zip file and saved in the Release folder.
 * @requires module:warden
 * @requires module:clientRulesLibrary
 * @requires module:clientCommandsLibrary
 * @requires module:all-client-constants-validation
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:command-constants
 * @requires module:configuration-constants
 * @requires module:message-constants
 * @requires module:application-constants
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _warden = _interopRequireDefault(require("../../Framework/Controllers/warden"));

var _clientRulesLibrary = _interopRequireDefault(require("./BusinessRules/clientRulesLibrary"));

var _clientCommandsLibrary = _interopRequireDefault(require("./Commands/clientCommandsLibrary"));

var _allClientConstantsValidation = _interopRequireDefault(require("./Resources/ConstantsValidation/all-client-constants-validation"));

var bas = _interopRequireWildcard(require("../../Framework/Constants/basic.constants"));

var gen = _interopRequireWildcard(require("../../Framework/Constants/generic.constants"));

var wrd = _interopRequireWildcard(require("../../Framework/Constants/word.constants"));

var sys = _interopRequireWildcard(require("../../Framework/Constants/system.constants"));

var cmd = _interopRequireWildcard(require("../../Framework/Constants/command.constants"));

var cfg = _interopRequireWildcard(require("../../Framework/Constants/configuration.constants"));

var msg = _interopRequireWildcard(require("../../Framework/Constants/message.constants"));

var apc = _interopRequireWildcard(require("./Constants/application.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var pjson = require('../../../package.json');

var NODE_ENV = process.env.NODE_ENV;

var path = require('path');

var D = require('../../Framework/Structures/data');

global.appRoot = path.resolve(process.cwd());
var rootPath = '';
var copyResult = false;
var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/01
 */

function bootStrapApplicationDeployment() {
  if (NODE_ENV === wrd.cdevelopment) {
    rootPath = path.resolve(process.cwd()) + apc.cApplicationDevelopRootPath;
  } else if (NODE_ENV === wrd.cproduction) {
    rootPath = path.resolve(process.cwd()) + apc.cApplicationProductionRootPath;
  } else {
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(sys.cApplicationWarningMessage1a + sys.ccApplicationWarningMessage1b);
    rootPath = path.resolve(process.cwd()) + apc.cApplicationDevelopRootPath;
  } // console.log('rootPath is: ' + rootPath);


  rootPath = _warden["default"].processRootPath(rootPath); // console.log('processed rootPath is: ' + rootPath);

  _warden["default"].bootStrapApplication(rootPath + apc.cConfigurationDataLookupPrefixPath); // NOTE: We are passing all_clt_cv.initializeAllClientConstantsValidationData function as an object on the next line of code.
  // We are doing this because we have not yet evaluated the constants path based on the root path,
  // and we don't want the function to be evaluated immediately because it will need to get the root path as part of evaluating the path to the constants files for validation.


  _warden["default"].initApplicationSchema(rootPath, apc.cClientConstantsPathActual, _allClientConstantsValidation["default"].initializeAllClientConstantsValidationData);

  _warden["default"].mergeClientBusinessRules(_clientRulesLibrary["default"].initClientRulesLibrary());

  _warden["default"].mergeClientCommands(_clientCommandsLibrary["default"].initClientCommandsLibrary());

  if (NODE_ENV === wrd.cdevelopment) {
    // console.log('development mode');
    _warden["default"].loadCommandAliases(cmd.cDevSystemCommandsAliasesActualPath, apc.cDevClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(cmd.cDevSystemWorkflowsActualPath, apc.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === wrd.cproduction) {
    // console.log('production mode');
    _warden["default"].loadCommandAliases(cmd.cProdSystemCommandsAliasesActualPath, apc.cProdClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(cmd.cProdSystemWorkflowsActualPath, apc.cProdClientWorkflowsActualPath);
  }
}

;
/**
 * @function deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/Application/<MyAppName>/Resources/ folder to the
 * bin/Application/<MyAppName>/Resources/ folder.
 * Finally all the tranpiled code and non-code files are packaged together into a zip file,
 * with the date-time stamp and version number. This forms either a patch or a release.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/01
 */

function deployApplication() {
  var functionName = sys.cdeployApplication;

  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  var copyResult;

  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    _warden["default"].setConfigurationSetting(cfg.creleaseCompleted, false);

    _warden["default"].setConfigurationSetting(cfg.cPassAllConstantsValidations, false);

    _warden["default"].setConfigurationSetting(cfg.cPassedAllCommandAliasesDuplicateChecks, false);

    _warden["default"].setConfigurationSetting(sys.cSourceResourcesPath, apc.cDevelopResourcesPath);

    _warden["default"].setConfigurationSetting(sys.cDestinationResourcesPath, apc.cProductionResourcesPath);

    var appName = bas.cDoubleQuote + wrd.cName + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + pjson.name + bas.cDoubleQuote;
    var appVersion = bas.cDoubleQuote + wrd.cVersion + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + pjson.version + bas.cDoubleQuote;
    var appDescription = bas.cDoubleQuote + wrd.cDescription + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + pjson.description + bas.cDoubleQuote;

    _warden["default"].enqueueCommand(sys.cdeployMetaData + bas.cSpace + appName + bas.cComa + appVersion + bas.cComa + appDescription);

    _warden["default"].enqueueCommand(cmd.cBuildWorkflow);

    var commandResult = true;

    while (_warden["default"].isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = _warden["default"].processCommandQueue();
    }

    var deploymentResult = _warden["default"].getConfigurationSetting(cfg.cdeploymentCompleted);

    if (deploymentResult) {
      // Deployment was completed:
      console.log(msg.cBuildMessage1 + deploymentResult);
    } else {
      console.log(msg.cBuildMessage1 + gen.cFalse);

      _warden["default"].setConfigurationSetting(cfg.cdeploymentCompleted, false);
    }
  } catch (err) {
    console.error(err); // deploymentCompleted

    _warden["default"].setConfigurationSetting(cfg.cdeploymentCompleted, false);
  }

  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
}

;
/**
 * @function releaseApplication
 * @description Determines if the current version number is higher than the release archive of zip files.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function releaseApplication() {
  var functionName = sys.creleaseApplication;

  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  var releaseResult;

  try {
    _warden["default"].setConfigurationSetting(cfg.creleaseCompleted, false);

    _warden["default"].setConfigurationSetting(cfg.cPassAllConstantsValidations, false);

    _warden["default"].setConfigurationSetting(cfg.cPassedAllCommandAliasesDuplicateChecks, false);

    _warden["default"].setConfigurationSetting(sys.cBinaryRootPath, apc.cProductionRootPath);

    _warden["default"].setConfigurationSetting(sys.cBinaryReleasePath, apc.cReleasePath);

    _warden["default"].enqueueCommand(cmd.cReleaseWorkflow);

    var commandResult = true;

    while (_warden["default"].isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = _warden["default"].processCommandQueue();
    }

    var _releaseResult = _warden["default"].getConfigurationSetting(cfg.creleaseCompleted);

    if (_releaseResult) {
      // Release was completed
      console.log(msg.cBuildMessage2 + _releaseResult);
    } else {
      console.log(msg.cBuildMessage2 + gen.cFalse);
    }
  } catch (err) {
    console.error(err);

    _warden["default"].setConfigurationSetting(cfg.creleaseCompleted, false);
  }

  _warden["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
}

;
bootStrapApplicationDeployment();
deployApplication();
releaseApplication();