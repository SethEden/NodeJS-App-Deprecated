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
import dataBroker from '../Executrix/dataBroker';
import configurator from '../Executrix/configurator';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
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
  let functionName = getAndProcessCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input pathAndFilename is: ' + pathAndFilename);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  let loadedData = dataBroker.getCsvData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  let allLoadedData = dataBroker.getAndProcessCsvData(testData, contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function getAndProcessXmlData
 * @description Loads the specified file, parses it and converts all values into their appropriate data types.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @return {object} A parsed XML JSON object where all the values have been converted from their string representation into actual values as appropriate type.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getAndProcessXmlData(pathAndFilename) {
  let functionName = getAndProcessXmlData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input pathAndFilename is: ' + pathAndFilename);
  let allSystemConfigurations = dataBroker.getXmlData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  allSystemConfigurations = dataBroker.processXmlData(allSystemConfigurations);

  loggers.consoleLog(baseFileName + b.cDot + functionName, 'allSystemConfigurations is: ' + JSON.stringify(allSystemConfigurations));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return allSystemConfigurations;
};

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
  let functionName = setupAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPathConfigurationName is: ' + dataPathConfigurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  // console.log('dataPath is: ' + dataPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllCsvData(filesToLoad, contextName);
  // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllCsvData function');
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return loadedAndMergedDataAllFiles;
};

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
  let functionName = setupAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPathConfigurationName is: ' + dataPathConfigurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  // console.log('dataPath is: ' + dataPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllXmlData(filesToLoad, contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'loadedAndMergedDataAllFiles contents are: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(baseFileName = b.cDot + functionName, s.cEND_Function);
  // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllXmlData function');
  return loadedAndMergedDataAllFiles;
};

/**
 * @function setupConstantsValidationData
 * @description Calls the dataBroker to setup & initialize all of the constants verification data.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/27
 */
function setupConstantsValidationData() {
  let functionName = setupAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  dataBroker.initializeConstantsValidationData();
  loggers.consoleLog(baseFileName = b.cDot + functionName, s.cEND_Function);
};

export default {
  getAndProcessCsvData,
  getAndProcessXmlData,
  setupAllCsvData,
  setupAllXmlData,
  setupConstantsValidationData
};
