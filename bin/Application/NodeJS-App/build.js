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
 * @requires module:application-constants
 * @requires module:system-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:basic-constants
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

var c = _interopRequireWildcard(require("./Constants/application.constants"));

var s = _interopRequireWildcard(require("../../Framework/Constants/system.constants"));

var g = _interopRequireWildcard(require("../../Framework/Constants/generic.constants"));

var w = _interopRequireWildcard(require("../../Framework/Constants/word.constants"));

var b = _interopRequireWildcard(require("../../Framework/Constants/basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var NODE_ENV = process.env.NODE_ENV;

var path = require('path');

var D = require('../../Framework/Resources/data');

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
  if (NODE_ENV === w.cdevelopment) {
    rootPath = path.resolve(process.cwd()) + c.cApplicationDevelopRootPath;
  } else if (NODE_ENV === w.cproduction) {
    rootPath = path.resolve(process.cwd()) + c.cApplicationProductionRootPath;
  } else {
    console.log('WARNING: No .env file found! going to default to the DEVELOPMENT ENVIRONMENT!!!!!!!!!');
    rootPath = path.resolve(process.cwd()) + c.cApplicationDevelopRootPath;
  } // console.log('rootPath is: ' + rootPath);


  rootPath = _warden["default"].processRootPath(rootPath); // console.log('processed rootPath is: ' + rootPath);

  _warden["default"].bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);

  _warden["default"].saveRootPath(rootPath);

  _warden["default"].mergeClientBusinessRules(_clientRulesLibrary["default"].initClientRulesLibrary());

  _warden["default"].mergeClientCommands(_clientCommandsLibrary["default"].initClientCommandsLibrary());

  if (NODE_ENV === w.cdevelopment) {
    _warden["default"].loadCommandAliases(s.cDevSystemCommandsAliasesActualPath, c.cDevClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(s.cDevSystemWorkflowsActualPath, c.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === w.cproduction) {
    _warden["default"].loadCommandAliases(s.cProdSystemCommandsAliasesActualPath, c.cProdClientCommandAliasesActualPath);

    _warden["default"].loadCommandWorkflows(s.cProdSystemWorkflowsActualPath, c.cProdClientWorkflowsActualPath);
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
  var functionName = s.cdeployApplication;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var copyResult;

  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    _warden["default"].setConfigurationSetting(s.cPassAllConstantsValidations, false);

    _warden["default"].setConfigurationSetting(s.cSourceResourcesPath, c.cDevelopResourcesPath);

    _warden["default"].setConfigurationSetting(s.cDestinationResourcesPath, c.cProductionResourcesPath);

    _warden["default"].enqueueCommand(s.cBuildWorkflow);

    var commandResult = true;

    while (_warden["default"].isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = _warden["default"].processCommandQueue();
    }

    var deploymentResult = _warden["default"].getConfigurationSetting(s.cdeploymentCompleted);

    console.log('Deployment was completed: ' + deploymentResult);
  } catch (err) {
    console.error(err);

    _warden["default"].setConfigurationSetting('deploymentCompleted', false);
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var functionName = s.creleaseApplication;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var releaseResult;

  try {
    _warden["default"].setConfigurationSetting(s.cPassAllConstantsValidations, false);

    _warden["default"].setConfigurationSetting(s.cBinaryRootPath, c.cProductionRootPath);

    _warden["default"].setConfigurationSetting(s.cBinaryReleasePath, c.cReleasePath);

    _warden["default"].enqueueCommand(s.cReleaseWorkflow);

    var commandResult = true;

    while (_warden["default"].isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = _warden["default"].processCommandQueue();
    }

    var _releaseResult = _warden["default"].getConfigurationSetting(s.creleaseCompleted);

    console.log('Release was completed: ' + _releaseResult);
  } catch (err) {
    console.error(err);
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
bootStrapApplicationDeployment();
deployApplication();
releaseApplication();