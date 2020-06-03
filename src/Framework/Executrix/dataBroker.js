import ruleBroker from '../BusinessRules/ruleBroker';
import fileBroker from './fileBroker';
import configurator from './configurator';
import loggers from './loggers';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var Papa = require('papaparse');
// require('should'); // Not sure if this will really be needed or not.

/**
 * @name scanDataPath
 * @description Scans the specified path and returns a colleciton
 * of all the files contained recursively within that path and all sub-folders.
 * @param  {[String]} dataPath The path that should be recursively scanned for files in all the folders.
 * @return {[Object]} A collection of files with their paths at all levels of the specified path including sub-folders.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function scanDataPath(dataPath) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = scanDataPath.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);
  var rules = {};
  var filesFound = [];
  // rules[1] = s.cswapFowardSlashToBackSlash;
  rules[1] = s.cswapBackSlashToForwardSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  dataPath = ruleBroker.processRules(dataPath, '', rules);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath after business rules processing is: ' + dataPath);
  filesFound = fileBroker.readDirectoryContents(dataPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesFound is: ' + JSON.stringify(filesFound));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return filesFound;
};

/**
 * @name loadAllCsvData
 * @description Loads all the contents of all files and folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName_fileName.
 * @param  {[Object]} filesToLoad The data structure containing all of the files to load data from.
 * @param  {[String]} contextName The context name that should be used when adding data to the D data structure.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function loadAllCsvData(filesToLoad, contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = loadAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  var rules = {};
  rules[1] = s.cgetFileNameFromPath;
  rules[2] = s.cremoveFileExtensionFromFileName;

  for (var i = 0; i < filesToLoad.length; i++) {
    let filesToLoad = filesToLoad[i];
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + filesToLoad);
    // NOTE: We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
    contextName = contextName + b.cUnderscore + ruleBroker.processRules(filesToLoad, '', rules);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
    let dataFile = fileBroker.getCsvData(fileToLoad);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile));
    let parsedDataFile = processCsvData(dataFile, contextName);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name loadAllXmlData
 * @description Loads all the contents of all files and folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName_fileName.
 * @param  {[Object]} filesToLoad The data structure containing all of the files to load data from.
 * @param  {[String]} contextName The context name that should be used when adding data to the t.ctx data structure.
 * @return {[Object]} A JSON object that contains all of the data that was loaded and parsed from all the input files list.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function loadAllXmlData(filesToLoad, contextName) {
  // console.log('BEGIN dataBroker.loadAllXmlData function');
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // console.log('contextName is: ' + contextName);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = loadAllXmlData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  var multiMergedData = {};
  var parsedDataFile = {};
  var fileNameRules = {};
  var filePathRules = {};
  fileNameRules[1] = s.cgetFileNameFromPath;
  fileNameRules[2] = s.cremoveFileExtensionFromFileName;
  filePathRules[1] = s.cswapDoubleForwardSlashToSingleForwardSlash;
  for (var i = 0; i < filesToLoad.length; i++) {
    let fileToLoad = filesToLoad[i];
    // console.log('execute business rules: ' + JSON.stringify(filePathRules));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(filePathRules));
    fileToLoad = ruleBroker.processRules(fileToLoad, '', filePathRules);
    // console.log('File to Load is: ' + fileToLoad);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + fileToLoad);
    // NOTE We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.
    // console.log('execute business rules: ' + JSON.stringify(fileNameRules));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(fileNameRules));
    contextName = contextName + b.cUnderscore + ruleBroker.processRules(fileToLoad, '', fileNameRules);
    // console.log('contextName is: ' + contextName);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
    let dataFile = fileBroker.getXmlData(fileToLoad);
    // console.log('loaded file data is: ' + JSON.stringify(dataFile));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile));
    // console.log('BEGIN PROCESSING ADDITIONAL DATA');
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN PROCESSING ADDITIONAL DATA');
    if (i === 0) {
      multiMergedData = dataFile;
    } else {
      multiMergedData = mergeData(multiMergedData, s.cPage, '', 0, dataFile);
    }
    // console.log('DONE PROCESSING ADDITIONAL DATA');
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE PROCESSING ADDITIONAL DATA');
    // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'MERGED data is: ' + JSON.stringify(multiMergedData));
  }
  parsedDataFile = {}; // Clear it, so we can re-assign it to the merged locator data from all the files.
  parsedDataFile = multiMergedData;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllXmlData function');
  return parsedDataFile;
};

/**
 * @name processCsvData
 * @description Processes all of the CSV data into a usable format and executes any additional processing rules.
 * @param  {[Object]} data A JSON object that contains all of the data loaded from a CSV file.
 * @param  {[String]} contextName The name that should be used when adding the objects to the D for data-sharing.
 * @return {[Object]} A parsed and cleaned up JSON object where all of the CSV data is collated and organized and cleaned up ready for use.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function processCsvData(data, contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = processCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  var parsedData = extractDataFromPapaParseObject(data, contextName);
  var dataCatagory = getDataCatagoryFromContextName(contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);
  var dataCatagoryDetailName;
  if (contextName.includes(s.cWorkflow)) {
    // Processing a workflow
    Object.assign(D[s.cWorkflow], parsedData[contextName]);
  } else {
    // Processing all other kinds of files.
    if (typeof D[dataCatagory] !== 'undefined' && D[dataCatagory]) {
      Object.assign(D[dataCatagory], parsedData);
      mergeData(D, dataCatagory, '', 0, parsedData);
    } else {
      D[dataCatagory] = {};
      Object.assign(D[dataCatagory], parsedData);
      mergeData(D, dataCatagory, '', 0, parsedData);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'fully parsed data is: ' + JSON.stringify(parsedData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'D final merge is: ');
  loggers.consoleLog(baseFileName + b.cDot + functionName, JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

// function saveXmlData(unProcessedData) {
//
// };

// function unloadData(contextName) {
//
// };

/**
 * @name getDataCatagoryFromContextName
 * @description Gets the data catagory, give the context name.
 * @param  {[String]} contextName The cotext name which will be something like Application_xxxx or Script_nnnn or Command_yyyy
 * @return {[String]} The string before the first cUnderscore (Application, Script, Command, etc).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataCatagoryFromContextName(contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getDataCatagoryFromContextName.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  var rules = {};
  var dataCatagory = '';
  rules[1] = s.cgetDataCatagoryFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  dataCatagory = ruleBroker.processRules(contextName, '', rules);
  loggers.consoleLog(baseFileName, b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return dataCatagory;
};

/**
 * @name getDataCatagoryDetailNameFromContextName
 * @description Gets the data catagory detail name, given the context name.
 * @param  {[String]} contextName The name which will be something like Command_ApiPost or Script_ApiMacroX.
 * @return {[String]} The string after the first cUnderscore (ApiPost or ApiMacroX).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataCatagoryDetailNameFromContextName(contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getDataCatagoryDetailNameFromContextName.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  var rules = {};
  var dataCatagoryDetailName = '';
  rules[1] = s.cgetDataCatagoryDetailNameFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  dataCatagoryDetailName = ruleBroker.processRules(contextName, '', rules);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagoryDetailsName is: ' + dataCatagoryDetailName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return dataCatagoryDetailName;
};

/**
 * @name extractDataFromPapaParseObject
 * @description Extracts the parsed data from the papa parse data object.
 * @param  {[Object]} data Contains the full contents of the papa parse data object, for which we need to get data out of.
 * @param  {[String]} contextName The name of the context either Command, Macro from which data should be retrieved.
 * @return {[Object]} The fully parsed data that we intend to use for the application.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function extractDataFromPapaParseObject(data, contextName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = extractDataFromPapaParseObject.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));
  var cleanKeysRules = {};
  var tempData = {};
  var validDataAdded = false;
  tempData[contextName] = {};
  cleanKeysRules[1] = s.cCleanCarriageReturnFromString;
  var highLevelDataCount = Object.keys(data[s.cdata]).length;
  for (var i = 0; i<=highLevelDataCount; i++) {
    validDataAdded = false;
    var lowLevelTempData = {};
    for (var key in data[s.cdata][i]) {
      validDataAdded = true;
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
      var newKey = ruleBroker.processRules(key, '', cleanKeysRules);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
      lowLevelTempData[newKey] = ruleBroker.processRules(data[s.cdata][i][key], '', cleanKeysRules);
    }
    if (validDataAdded === true) {
      tempData[contextName][i] = {};
      if (i === 0) {
        tempData[contextName][i] = lowLevelTempData;
      } else {
        Object.assign(tempData[contextName][i], lowLevelTempData);
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'output data is: ' + JSON.stringify(tempData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return tempData;
};

/**
 * @name mergeData
 * @description Merge data with the D for the specified data catagory and optional name.
 * @param  {[Object]} targetData The target data object where the dataToMerge should be merged with.
 * @param  {[String]} dataCatagory Command or Script to indicate what catagory the test data should be used as.
 * @param  {[String]} pageName (Optional) The name of the page where the data should be merged under. Pass as empty string if nothing.
 * @param  {[Object]} dataToMerge The data to be merged.
 * @return {[Object]} A merged set of data combining all of the original data plust all the additional data from the dataToMerge data set.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function mergeData(targetData, dataCatagory, pageName, dataToMerge) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = mergeData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'data to Merge is: ' + JSON.stringify(dataToMerge));
  var dataToMergeElementCount = getDataElementCount(dataToMerge, '', rowNumber, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataToMergeElementCount is: ' + dataToMergeElementCount);
  if (dataToMergeElementCount === 1) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataToMergeElementCount is 1');
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'check if the pageName is not an empty string');
    if (pageName !== '') {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is not an empty string');
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Check if the dataCatagory is an empty string or not');
      if (dataCatagory !== '') {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is not an empty string!!');
        Object.assign(targetData[dataCatagory][pageName], dataToMerge);
      } else {
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory IS an empty string!!!!');
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'data to Merge is: ' + JSON.stringify(dataToMerge));
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'targetData content is: ' + JSON.stringify(targetData));
        Object.assign(targetData[pageName], dataToMerge);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'after attempt to merge, results are: ');
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'Merged data is: ' + JSON.stringify(dataToMerge));
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'targetData content is: ' + JSON.stringify(targetData));
      }
    } else {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is an empty string');
      Object.assign(targetData[dataCatagory], dataToMerge);
    }
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Caught the special case that we are merging a flat list.');
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'targetData content is: ' + JSON.stringify(targetData));
    for (var key in dataToMerge) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'inside the for-loop');
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'key is: ' + key);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
      targetData[pageName][key] = dataToMerge[key];
    }
  }

  loggers.consoleLog(baseFileName + b.cDot + functionName, 'targetData is modified in the input pass-by-reference variable content is: ' +
    JSON.stringify(targetData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return targetData;
};

/**
 * @name getDataElement
 * @description Gets the named value from the data object then cleans it from any carriage return characters.
 * @param  {[Object]} dataObject The data map with all data.
 * @param  {[String]} pageName The name of the page where the data should be found.
 * @param  {[String]} elementName The name of the data element that should be found for the given page.
 * @return {[String]} The data element with all carriage return characters removed from it.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataElement(dataObject, pageName, elementName) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getDataElement.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataObject value is: ' + JSON.stringify(dataObject));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'elementName is: ' + elementName);
  var returnString = dataObject[pageName][elementName];
  var rules = {};
  rules[1] = s.cCleanCarriageReturnFromString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  returnString = ruleBroker.processRules(returnString, '', rules);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnString is: ' + returnString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnString;
};

/**
 * @name getDataElementCount
 * @description Gets the count of the number of elements that match a given pattern,
 * if an empty string is passed in for the pattern then the count of the collection is returned with no pattern matching.
 * @param  {[Object]} dataObject The data map with all data.
 * @param  {[String]} pageName The name of the page were the data should be found.
 * @param  {[String]} elementNamePattern A string containing a pattern that should be matched in the object collection,
 * to establish a count of elements that match this pattern.
 * @return {[Integer]} A count of either the number of data elements in the object collection,
 * or a count for the number of data elements that match a pattern that is passed in.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataElementCount(dataObject, pageName, elementNamePattern) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getDataElementCount.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataObject is: ' + JSON.stringify(dataObject));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'elementNamePattern is: ' + elementNamePattern);
  var elementCollection;
  var elementCount = 0;
  if (pageName === '') {
    elementCollection = dataObject;
  } else {
    elementCollection = dataObject[pageName];
  }
  if (!elementNamePattern || elementNamePattern === '') {
    elementCount = Object.keys(elementCollection).length;
  } else {
    for (var key in elementCollection) {
      if (elementCollection.hasOwnProperty(key)) {
        if (key.includes(elementNamePattern)) {
          elementCount++;
        }
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'elementCount is: ' + elementCount);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return elementCount;
};

export default {
  scanDataPath,
  loadAllCsvData,
  loadAllXmlData,
  processCsvData
};