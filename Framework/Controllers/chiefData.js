import dataBroker from '../Executrix/dataBroker';
import configurator from '../Executrix/configurator';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');

/**
 * @name getAndProcessCsvData
 * @description Loads the specified file, parses it and converts all the data to the appropriate format.
 * @param  {[String]} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @param  {[String]} contextName The name that should be used when adding the objects to the D for data-sharing.
 * @return {[Object]} A parsed CSV JSON object where all the values have been converted from their string representation into acutal values of appropriate type.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function getAndProcessCsvData(pathAndFilename, contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getAndProcessCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input pathAndFilename is: ' + pathAndFilename);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  var loadedData = dataBroker.getCsvData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  var allLoadedData = dataBroker.getAndProcessCsvData(testData, contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name getAndProcessXmlData
 * @description Loads the specified file, parses it and converts all values into their appropriate data types.
 * @param  {[String]} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @return {[Object]} A parsed XML JSON object where all the values have been converted from their string representation into actual values as appropriate type.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getAndProcessXmlData(pathAndFilename) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getAndProcessXmlData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input pathAndFilename is: ' + pathAndFilename);
  var allSystemConfigurations = dataBroker.getXmlData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  allSystemConfigurations = dataBroker.processXmlData(allSystemConfigurations);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name setupAllCsvData
 * @description Sets up all of the specified CSV data.
 * @param  {[String]} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param  {[String]} contextName The context name that should be used when adding data to the D.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function setupAllCsvData(dataPathConfigurationName, contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = setupAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPathConfigurationName is: ' + dataPathConfigurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  var dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);
  var filesToLoad = dataBroker.scanDataPath(dataPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  dataBroker.loadAllCsvData(filesToLoad, contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name setupAllXmlData
 * @description Sets up all of the specified XML data.
 * @param  {[String]} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param  {[String]} contextName The context name that should be used when adding data to the D.
 * @return {[Object]} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function setupAllXmlData(dataPathConfigurationName, contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = setupAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPathConfigurationName is: ' + dataPathConfigurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  var loadedAndMergedDataAllFiles = {};
  var dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);
  var filesToLoad = dataBroker.scanDataPath(dataPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllXmlData(filesToLoad, contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'loadedAndMergedDataAllFiles contents are: ' + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(baseFileName = b.cDot + functionName, s.cEND_Function);
  return loadedAndMergedDataAllFiles;
};

export default {
  getAndProcessCsvData,
  getAndProcessXmlData,
  setupAllCsvData,
  setupAllXmlData
};
