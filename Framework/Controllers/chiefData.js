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
 * @description
 * @param  {[type]} pathAndFilename [description]
 * @return {[type]}                 [description]
 */
function getAndProcessXmlData(pathAndFilename) {

};
