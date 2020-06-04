#!/usr/bin/env node
import warden from '../../Framework/Controllers/warden';
import * as c from './Constants/application.constants';
import * as s from '../../Framework/Constants/system.constants';
import * as g from '../../Framework/Constants/generic.constants';
import * as b from '../../Framework/Constants/basic.constants';
const prompt = require('prompt-sync')();
var path = require('path');
var D = require('../../Framework/Resources/data');
global.appRoot = path.resolve(__dirname);
var rootPath = '';
var copyResult = false;

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cdeployApplication;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  var copyResult;
  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    copyResult = warden.deployApplication(c.cSourceResourcesPath, c.cBinaryResourcesPath);
    // console.log('Deployment was completed: ' + copyResult);
    warden.consoleLog(baseFileName + b.cDot + functionName, 'Deployment was completed: ' + copyResult);
    warden.setConfigurationSetting('deploymentCompleted', copyResult);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.creleaseApplication;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  var releaseResult;
  try {
    releaseResult = warden.releaseApplication(c.cBinaryRootPath, c.cBinaryReleasePath);
    warden.consoleLog(baseFileName + b.cDot + functionName, 'releaseResult is: ' + releaseResult);
  } catch (err) {
    console.error(err);
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

bootStrapApplicationDeployment();
deployApplication();
releaseApplication();
