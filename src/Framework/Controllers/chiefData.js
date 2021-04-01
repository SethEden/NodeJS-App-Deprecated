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
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import dataBroker from '../Executrix/dataBroker';
import configurator from '../Executrix/configurator';
import loggers from '../Executrix/loggers';
import * as bas from '../Constants/basic.constants';
import * as sys from '../Constants/system.constants';
import * as msg from '../Constants/message.constants';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wrd.cFramework + bas.cDot + wrd.cControllers + bas.cDot; // Framework.Controllers.

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
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // cpathAndFilename is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  // contextName is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.ccontextNameIs + contextName);
  pathAndFilename = path.resolve(pathAndFilename);
  let loadedData = dataBroker.getCsvData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  let allLoadedData = dataBroker.getAndProcessCsvData(testData, contextName);
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // pathAndFilename is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  pathAndFilename = path.resolve(pathAndFilename);
  let allSystemConfigurations = dataBroker.getXmlData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  allSystemConfigurations = dataBroker.processXmlData(allSystemConfigurations);
  // allSystemConfigurations is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.callSystemConfigurationsIs + JSON.stringify(allSystemConfigurations));
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  // console.log('dataPath is: ' + dataPath);
  // dataPath is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllCsvData(filesToLoad, contextName);
  // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllCsvData function');
  // loadedAndMergedDataAllFiles is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  // console.log('dataPath is: ' + dataPath);
  // dataPath is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllXmlData(filesToLoad, contextName);
  // loadedAndMergedDataAllFiles contents are:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cloadedAndMergedDataAllFilesContentsAre + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cEND_Function);
  // console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  // console.log('END chiefData.setupAllXmlData function');
  return loadedAndMergedDataAllFiles;
};

/**
 * @function setupAllJsonConfigData
 * @description Sets up all of the JSON data at the specified configuration path.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2021/03/31
 */
function setupAllJsonConfigData(dataPathConfigurationName, contextName) {
  console.log('BEGIN chiefData.setupAllJsonConfigData function');
  console.log('dataPathConfigurationName is: ' + dataPathConfigurationName);
  console.log('contextName is: ' + contextName);
  let functionName = setupAllJsonConfigData.name;
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  console.log('dataPath is: ' + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllJsonData(filesToLoad, contextName);
  console.log('loadedAndMergedDataAllFiles is: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  console.log('END chiefData.setupAllJsonConfigData function');
  return loadedAndMergedDataAllFiles;
};

/**
 * @function initializeConstantsValidationData
 * @description Calls the dataBroker to initialize the constants verification data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/27
 */
function initializeConstantsValidationData() {
  let functionName = initializeConstantsValidationData.name;
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  dataBroker.initializeConstantsValidationData();
  loggers.consoleLog(namespacePrefix + baseFileName = bas.cDot + functionName, msg.cEND_Function);
};

/**
 * @function addConstantsValidationData
 * @description Calls the dataBroker to add constants validation data to the constants validation data structure.
 * @param {array<array<string,object>>} arrayValidationData And array of arrays that contains all of the constants library validation names and data objects.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/03/06
 */
function addConstantsValidationData(arrayValidationData) {
  let functionName = addConstantsValidationData.name;
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // arrayValidationData is:
  loggers.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.carrayValidationDataIs + JSON.stringify(arrayValidationData));
  dataBroker.addConstantsValidationData(arrayValidationData);
  loggers.consoleLog(namespacePrefix + baseFileName = bas.cDot + functionName, msg.cEND_Function);
};

export default {
  getAndProcessCsvData,
  getAndProcessXmlData,
  setupAllCsvData,
  setupAllXmlData,
  setupAllJsonConfigData,
  initializeConstantsValidationData,
  addConstantsValidationData
};
