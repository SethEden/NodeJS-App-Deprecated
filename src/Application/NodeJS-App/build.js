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
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:application-constants
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
import * as bas from '../../Framework/Constants/basic.constants';
import * as gen from '../../Framework/Constants/generic.constants';
import * as wrd from '../../Framework/Constants/word.constants';
import * as sys from '../../Framework/Constants/system.constants';
import * as apc from './Constants/application.constants';
require('dotenv').config();
var pjson = require('../../../package.json');
const {NODE_ENV} = process.env;
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
  }
  // console.log('rootPath is: ' + rootPath);
  rootPath = warden.processRootPath(rootPath);
  // console.log('processed rootPath is: ' + rootPath);
  warden.bootStrapApplication(rootPath + apc.cConfigurationDataLookupPrefixPath);
  warden.saveRootPath(rootPath);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  if (NODE_ENV === wrd.cdevelopment) {
    warden.loadCommandAliases(sys.cDevSystemCommandsAliasesActualPath, apc.cDevClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(sys.cDevSystemWorkflowsActualPath, apc.cDevClientWorkflowsActualPath);
  } else if (NODE_ENV === wrd.cproduction) {
    warden.loadCommandAliases(sys.cProdSystemCommandsAliasesActualPath, apc.cProdClientCommandAliasesActualPath);
    warden.loadCommandWorkflows(sys.cProdSystemWorkflowsActualPath, apc.cProdClientWorkflowsActualPath);
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
  let functionName = sys.cdeployApplication;
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cBEGIN_Function);
  let copyResult;
  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    warden.setConfigurationSetting(sys.creleaseCompleted, false);
    warden.setConfigurationSetting(sys.cPassAllConstantsValidations, false);
    warden.setConfigurationSetting(sys.cPassedAllCommandAliasesDuplicateChecks, false);
    warden.setConfigurationSetting(sys.cSourceResourcesPath, apc.cDevelopResourcesPath);
    warden.setConfigurationSetting(sys.cDestinationResourcesPath, apc.cProductionResourcesPath);
    let appName = bas.cDoubleQuote + wrd.cName + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + pjson.name + bas.cDoubleQuote;
    let appVersion = bas.cDoubleQuote + wrd.cVersion + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + pjson.version + bas.cDoubleQuote;
    let appDescription = bas.cDoubleQuote + wrd.cDescription + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + pjson.description + bas.cDoubleQuote;
    warden.enqueueCommand(sys.cdeployMetaData + bas.cSpace + appName + bas.cComa + appVersion + bas.cComa + appDescription);
    warden.enqueueCommand(sys.cBuildWorkflow);
    let commandResult = true;
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = warden.processCommandQueue();
    }
    let deploymentResult = warden.getConfigurationSetting(sys.cdeploymentCompleted);
    if (deploymentResult) {
      // Deployment was completed:
      console.log(sys.cBuildMessage1 + deploymentResult);
    } else {
      console.log(sys.cBuildMessage1 + gen.cFalse);
      warden.setConfigurationSetting(sys.cdeploymentCompleted, false);
    }
  } catch (err) {
    console.error(err);
    // deploymentCompleted
    warden.setConfigurationSetting(sys.cdeploymentCompleted, false);
  }
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cEND_Function);
};

/**
 * @function releaseApplication
 * @description Determines if the current version number is higher than the release archive of zip files.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */
function releaseApplication() {
  let functionName = sys.creleaseApplication;
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cBEGIN_Function);
  let releaseResult;
  try {
    warden.setConfigurationSetting(sys.creleaseCompleted, false);
    warden.setConfigurationSetting(sys.cPassAllConstantsValidations, false);
    warden.setConfigurationSetting(sys.cPassedAllCommandAliasesDuplicateChecks, false);
    warden.setConfigurationSetting(sys.cBinaryRootPath, apc.cProductionRootPath);
    warden.setConfigurationSetting(sys.cBinaryReleasePath, apc.cReleasePath);
    warden.enqueueCommand(sys.cReleaseWorkflow);
    let commandResult = true;
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = warden.processCommandQueue();
    }
    let releaseResult = warden.getConfigurationSetting(sys.creleaseCompleted);
    if (releaseResult) {
      // Release was completed
      console.log(sys.cBuildMessage1 + releaseResult);
    } else {
      console.log(sys.cBuildMessage1 + gen.cFalse);
    }
  } catch (err) {
    console.error(err);
  }
  warden.consoleLog(baseFileName + bas.cDot + functionName, sys.cEND_Function);
};

bootStrapApplicationDeployment();
deployApplication();
releaseApplication();
