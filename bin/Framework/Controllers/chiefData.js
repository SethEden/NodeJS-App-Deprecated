"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataBroker = _interopRequireDefault(require("../Executrix/dataBroker"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var msg = _interopRequireWildcard(require("../Constants/messages.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functions to manage the loading and processing of data,
 * such as XML files or CSV files. Additional file type processing should be added in this module.
 * @requires module:dataBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires module:messages-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function getAndProcessCsvData
 * @description Loads the specified file, parses it and converts all the data to the appropriate format.
 * @param {string} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @param {string} contextName The name that should be used when adding the objects to the D for data-sharing.
 * @return {object} A parsed CSV JSON object where all the values have been converted from their string representation into acutal values of appropriate type.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */

function getAndProcessCsvData(pathAndFilename, contextName) {
  var functionName = getAndProcessCsvData.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // cpathAndFilename is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cpathAndFilenameIs + pathAndFilename); // contextName is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.ccontextNameIs + contextName);

  pathAndFilename = path.resolve(pathAndFilename);

  var loadedData = _dataBroker["default"].getCsvData(pathAndFilename); // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...


  var allLoadedData = _dataBroker["default"].getAndProcessCsvData(testData, contextName);

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
}

;
/**
 * @function getAndProcessXmlData
 * @description Loads the specified file, parses it and converts all values into their appropriate data types.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @return {object} A parsed XML JSON object where all the values have been converted from their string representation into actual values as appropriate type.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function getAndProcessXmlData(pathAndFilename) {
  var functionName = getAndProcessXmlData.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // pathAndFilename is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cpathAndFilenameIs + pathAndFilename);

  pathAndFilename = path.resolve(pathAndFilename);

  var allSystemConfigurations = _dataBroker["default"].getXmlData(pathAndFilename); // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...


  allSystemConfigurations = _dataBroker["default"].processXmlData(allSystemConfigurations); // allSystemConfigurations is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.callSystemConfigurationsIs + JSON.stringify(allSystemConfigurations));

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return allSystemConfigurations;
}

;
/**
 * @function setupAllCsvData
 * @description Sets up all of the specified CSV data.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function setupAllCsvData(dataPathConfigurationName, contextName) {
  // console.log('BEGIN chiefData.setupAllCsvData function');
  // console.log('dataPathConfigurationName is: ' + dataPathConfigurationName);
  // console.log('contextName is: ' + contextName);
  var functionName = setupAllCsvData.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // dataPathConfigurationName is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName); // contextName is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.ccontextNameIs + contextName);

  var loadedAndMergedDataAllFiles = {};

  var dataPath = _configurator["default"].getConfigurationSetting(dataPathConfigurationName);

  dataPath = path.resolve(dataPath); // console.log('dataPath is: ' + dataPath);
  // dataPath is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cdataPathIs + dataPath);

  var filesToLoad = _dataBroker["default"].scanDataPath(dataPath); // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // filesToLoad is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));

  loadedAndMergedDataAllFiles = _dataBroker["default"].loadAllCsvData(filesToLoad, contextName); // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllCsvData function');
  // loadedAndMergedDataAllFiles is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergedDataAllFiles));

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);

  return loadedAndMergedDataAllFiles;
}

;
/**
 * @function setupAllXmlData
 * @description Sets up all of the specified XML data.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function setupAllXmlData(dataPathConfigurationName, contextName) {
  // console.log('BEGIN chiefData.setupAllXmlData function');
  // console.log('dataPathConfigurationName is: ' + dataPathConfigurationName);
  // console.log('contextName is: ' + contextName);
  var functionName = setupAllCsvData.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function); // dataPathConfigurationName is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName); // contextName is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.ccontextNameIs + contextName);

  var loadedAndMergedDataAllFiles = {};

  var dataPath = _configurator["default"].getConfigurationSetting(dataPathConfigurationName);

  dataPath = path.resolve(dataPath); // console.log('dataPath is: ' + dataPath);
  // dataPath is:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cdataPathIs + dataPath);

  var filesToLoad = _dataBroker["default"].scanDataPath(dataPath); // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // filesToLoad is:


  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));

  loadedAndMergedDataAllFiles = _dataBroker["default"].loadAllXmlData(filesToLoad, contextName); // loadedAndMergedDataAllFiles contents are:

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cloadedAndMergedDataAllFilesContentsAre + JSON.stringify(loadedAndMergedDataAllFiles));

  _loggers["default"].consoleLog(baseFileName = bas.cDot + functionName, msg.cEND_Function); // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllXmlData function');


  return loadedAndMergedDataAllFiles;
}

;
/**
 * @function setupConstantsValidationData
 * @description Calls the dataBroker to setup & initialize all of the constants verification data.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/27
 */

function setupConstantsValidationData() {
  var functionName = setupAllCsvData.name;

  _loggers["default"].consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  _dataBroker["default"].initializeConstantsValidationData();

  _loggers["default"].consoleLog(baseFileName = bas.cDot + functionName, msg.cEND_Function);
}

;
var _default = {
  getAndProcessCsvData: getAndProcessCsvData,
  getAndProcessXmlData: getAndProcessXmlData,
  setupAllCsvData: setupAllCsvData,
  setupAllXmlData: setupAllXmlData,
  setupConstantsValidationData: setupConstantsValidationData
};
exports["default"] = _default;