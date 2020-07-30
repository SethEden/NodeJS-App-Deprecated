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
 * @requires module:basic-constants
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
import * as b from '../../Framework/Constants/basic.constants';
var path = require('path');
var D = require('../../Framework/Resources/data');
global.appRoot = path.resolve(__dirname);
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
  rootPath = path.resolve(__dirname);
  rootPath = warden.processRootPath(rootPath);
  warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  warden.saveRootPath(rootPath);
  warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  warden.loadCommandAliases(s.cSystemCommandsAliasesActualPath, c.cClientCommandAliasesActualPath);
  warden.loadCommandWorkflows(s.cSystemWorkflowsActualPath, c.cClientWorkflowsActualPath);
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
    warden.setConfigurationSetting(s.cPassAllConstantsValidations, false);
    warden.setConfigurationSetting(s.cSourceResourcesPath, c.cSourceResourcesPath);
    warden.setConfigurationSetting(s.cBinaryResourcesPath, c.cBinaryResourcesPath);
    warden.enqueueCommand(s.cBuildWorkflow);
    let commandResult = true;
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = warden.processCommandQueue();
    }
    // if (warden.getConfigurationSetting(s.cPassAllConstantsValidations) === true) {
    //   // console.log('SUCCESS: Constants Validation PASSED!!');
    //   // copyResult = warden.deployApplication(c.cSourceResourcesPath, c.cBinaryResourcesPath);
    //   // // console.log('Deployment was completed: ' + copyResult);
    //   // warden.consoleLog(baseFileName + b.cDot + functionName, 'Deployment was completed: ' + copyResult);
    //   // warden.setConfigurationSetting('deploymentCompleted', copyResult);
    // } else {
    //   console.log('ERROR: Build failed because of a failure in the constants validation system. Please fix ASAP before attempting another build.');
    // }
  } catch (err) {
    console.error(err);
    warden.setConfigurationSetting('deploymentCompleted', false);
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
    warden.setConfigurationSetting(s.cPassAllConstantsValidations, false);
    warden.setConfigurationSetting(s.cBinaryRootPath, c.cBinaryRootPath);
    warden.setConfigurationSetting(s.cBinaryReleasePath, c.cBinaryReleasePath);
    warden.enqueueCommand(s.cReleaseWorkflow);
    let commandResult = true;
    while(warden.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = warden.processCommandQueue();
    }
    // if (warden.getConfigurationSetting(s.cPassAllConstantsValidations) === true) {
    //   // console.log('SUCCESS: Constants Validation PASSED!!');
    //   // releaseResult = warden.releaseApplication(c.cBinaryRootPath, c.cBinaryReleasePath);
    //   // warden.consoleLog(baseFileName + b.cDot + functionName, 'releaseResult is: ' + releaseResult);
    // } else {
    //   console.log('ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.');
    // }
  } catch (err) {
    console.error(err);
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

bootStrapApplicationDeployment();
deployApplication();
releaseApplication();
