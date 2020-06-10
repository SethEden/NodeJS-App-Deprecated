"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataBroker = _interopRequireDefault(require("../Executrix/dataBroker"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

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
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getAndProcessCsvData.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input pathAndFilename is: ' + pathAndFilename);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);

  var loadedData = _dataBroker["default"].getCsvData(pathAndFilename); // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...


  var allLoadedData = _dataBroker["default"].getAndProcessCsvData(testData, contextName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getAndProcessXmlData.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input pathAndFilename is: ' + pathAndFilename);

  var allSystemConfigurations = _dataBroker["default"].getXmlData(pathAndFilename); // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...


  allSystemConfigurations = _dataBroker["default"].processXmlData(allSystemConfigurations);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'allSystemConfigurations is: ' + JSON.stringify(allSystemConfigurations));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = setupAllCsvData.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPathConfigurationName is: ' + dataPathConfigurationName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var loadedAndMergedDataAllFiles = {};

  var dataPath = _configurator["default"].getConfigurationSetting(dataPathConfigurationName); // console.log('dataPath is: ' + dataPath);


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);

  var filesToLoad = _dataBroker["default"].scanDataPath(dataPath); // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));

  loadedAndMergedDataAllFiles = _dataBroker["default"].loadAllCsvData(filesToLoad, contextName); // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllCsvData function');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = setupAllCsvData.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPathConfigurationName is: ' + dataPathConfigurationName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var loadedAndMergedDataAllFiles = {};

  var dataPath = _configurator["default"].getConfigurationSetting(dataPathConfigurationName); // console.log('dataPath is: ' + dataPath);


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);

  var filesToLoad = _dataBroker["default"].scanDataPath(dataPath); // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));

  loadedAndMergedDataAllFiles = _dataBroker["default"].loadAllXmlData(filesToLoad, contextName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'loadedAndMergedDataAllFiles contents are: ' + JSON.stringify(loadedAndMergedDataAllFiles));

  _loggers["default"].consoleLog(baseFileName = b.cDot + functionName, s.cEND_Function); // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllXmlData function');


  return loadedAndMergedDataAllFiles;
}

;
var _default = {
  getAndProcessCsvData: getAndProcessCsvData,
  getAndProcessXmlData: getAndProcessXmlData,
  setupAllCsvData: setupAllCsvData,
  setupAllXmlData: setupAllXmlData
};
exports["default"] = _default;