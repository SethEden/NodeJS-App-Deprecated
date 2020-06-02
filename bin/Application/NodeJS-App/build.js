#!/usr/bin/env node
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _warden = _interopRequireDefault(require("../../Framework/Controllers/warden"));

var _dataBroker = _interopRequireDefault(require("../../Framework/Executrix/dataBroker"));

var c = _interopRequireWildcard(require("./Constants/application.constants"));

var s = _interopRequireWildcard(require("../../Framework/Constants/system.constants"));

var g = _interopRequireWildcard(require("../../Framework/Constants/generic.constants"));

var b = _interopRequireWildcard(require("../../Framework/Constants/basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var prompt = require('prompt-sync')();

var path = require('path');

var D = require('../../Framework/Resources/data');

global.appRoot = path.resolve(__dirname);
var rootPath = '';
var copyResult = false;
/**
 * @name bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @author Seth Hollingsead
 * @date 2020/06/01
 */

function bootStrapApplicationDeployment() {
  rootPath = path.resolve(__dirname);
  rootPath = _warden["default"].processRootPath(rootPath);

  _warden["default"].bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);

  console.log('rootPath resolves as: ' + rootPath);

  _warden["default"].setConfigurationSetting(s.cApplicationRootPath, rootPath);
}

;
/**
 * @name deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/Application/<MyAppName>/Resources/ folder to the
 * bin/Application/<MyAppName>/Resources/ folder.
 * Finally all the tranpiled code and non-code files are packaged together into a zip file,
 * with the date-time stamp and version number. This forms either a patch or a release.
 * @author Seth Hollingsead
 * @date 2020/06/01
 */

function deployApplication() {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cdeployApplication;
  var argumentDrivenInterface = true;
  var commandInput;
  var commandResult;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  argumentDrivenInterface = _warden["default"].getConfigurationSetting(s.cArgumentDrivenInterface); // Sync:

  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    console.log('c.cSourceResourcesPath resolves as: ' + c.cSourceResourcesPath);
    console.log('c.cBinaryResourcesPath resolves as: ' + c.cBinaryResourcesPath);
    console.log('c.cResourcesCommonPath resolves as: ' + c.cResourcesCommonPath);
    console.log('c.cConfigurationDataLookupPrefixPath resolves as: ' + c.cConfigurationDataLookupPrefixPath);
    copyResult = _dataBroker["default"].copyAllFilesAndFoldersFromFolderToFolder(+c.cSourceResourcesPath, rootPath + c.cBinaryResourcesPath);
    console.log('Deployment was completed: ' + copyResult);

    _warden["default"].setConfigurationSetting('deploymentCompleted', copyResult);
  } catch (err) {
    console.error(err);

    _warden["default"].setConfigurationSetting('deploymentCompleted', false);
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
bootStrapApplicationDeployment();
deployApplication();