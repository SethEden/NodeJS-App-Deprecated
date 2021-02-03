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
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import warden from '../../Framework/Controllers/warden';
import clientRules from './BusinessRules/clientRulesLibrary';
import clientCommands from './Commands/clientCommandsLibrary';
import * as c from './Constants/application.constants';
import * as s from '../../Framework/Constants/system.constants';
import * as g from '../../Framework/Constants/generic.constants';
import * as w from '../../Framework/Constants/word.constants';
import * as b from '../../Framework/Constants/basic.constants';
require('dotenv').config();
var pjson = require('../../../package.json');
const {NODE_ENV} = process.env;
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
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(s.cApplicationWarningMessage1a + s.ccApplicationWarningMessage1b);
    rootPath = path.resolve(process.cwd()) + c.cApplicationDevelopRootPath;
  }
  // console.log('rootPath is: ' + rootPath);
  rootPath = warden.processRootPath(rootPath);
  // console.log('processed rootPath is: ' + rootPath);
  warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  warden.saveRootPath(rootPath);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  if (NODE_ENV === w.cdevelopment) {
    warden.loadCommandAliases(s.cDevSystemCommandsAliasesActualPath, c.cDevClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(s.cDevSystemWorkflowsActualPath, c.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === w.cproduction) {
    warden.loadCommandAliases(s.cProdSystemCommandsAliasesActualPath, c.cProdClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(s.cProdSystemWorkflowsActualPath, c.cProdClientWorkflowsActualPath);
  }
};

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
  let functionName = s.cdeployApplication;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let copyResult;
  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    warden.setConfigurationSetting(s.creleaseCompleted, false);
    warden.setConfigurationSetting(s.cPassAllConstantsValidations, false);
    warden.setConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks, false);
    warden.setConfigurationSetting(s.cSourceResourcesPath, c.cDevelopResourcesPath);
    warden.setConfigurationSetting(s.cDestinationResourcesPath, c.cProductionResourcesPath);
    let appName = b.cDoubleQuote + w.cName + b.cDoubleQuote + b.cColon + b.cSpace + b.cDoubleQuote + pjson.name + b.cDoubleQuote;
    let appVersion = b.cDoubleQuote + w.cVersion + b.cDoubleQuote + b.cColon + b.cSpace + b.cDoubleQuote + pjson.version + b.cDoubleQuote;
    let appDescription = b.cDoubleQuote + w.cDescription + b.cDoubleQuote + b.cColon + b.cSpace + b.cDoubleQuote + pjson.description + b.cDoubleQuote;
    warden.enqueueCommand(s.cdeployMetaData + b.cSpace + appName + b.cComa + appVersion + b.cComa + appDescription);
    warden.enqueueCommand(s.cBuildWorkflow);
    let commandResult = true;
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = warden.processCommandQueue();
    }
    let deploymentResult = warden.getConfigurationSetting(s.cdeploymentCompleted);
    // Deployment was completed:
    console.log(s.cBuildMessage1 + deploymentResult);
  } catch (err) {
    console.error(err);
    // deploymentCompleted
    warden.setConfigurationSetting(s.cdeploymentCompleted, false);
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function releaseApplication
 * @description Determines if the current version number is higher than the release archive of zip files.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */
function releaseApplication() {
  let functionName = s.creleaseApplication;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let releaseResult;
  try {
    warden.setConfigurationSetting(s.creleaseCompleted, false);
    warden.setConfigurationSetting(s.cPassAllConstantsValidations, false);
    warden.setConfigurationSetting(s.cPassedAllCommandAliasesDuplicateChecks, false);
    warden.setConfigurationSetting(s.cBinaryRootPath, c.cProductionRootPath);
    warden.setConfigurationSetting(s.cBinaryReleasePath, c.cReleasePath);
    warden.enqueueCommand(s.cReleaseWorkflow);
    let commandResult = true;
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = warden.processCommandQueue();
    }
    let releaseResult = warden.getConfigurationSetting(s.creleaseCompleted);
    // Release was completed
    console.log(s.cBuildMessage2 + releaseResult);
  } catch (err) {
    console.error(err);
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

bootStrapApplicationDeployment();
deployApplication();
releaseApplication();
