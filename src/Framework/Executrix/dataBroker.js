/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains all of the lower level data processing functions,
 * and also acts as an interface for calling the fileBroker to do actual file IO - Input-Output operations.
 * @requires module:ruleBroker
 * @requires module:fileBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module.generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:basic-constants-validation
 * @requires module:color-constants-validation
 * @requires module:element-constants-validation
 * @requires module:generic-constants-validation
 * @requires module:isotope-constants-validation
 * @requires module:numeric-constants-validation
 * @requires module:phonics-constants-validation
 * @requires module:shape-constants-validation
 * @requires module:system-constants-validation
 * @requires module:units-constants-validation
 * @requires module:word-constants-validation
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import ruleBroker from '../BusinessRules/ruleBroker';
import fileBroker from './fileBroker';
import configurator from './configurator';
import loggers from './loggers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as w from '../Constants/word.constants';
import * as s from '../Constants/system.constants';
import * as bcv from '../Resources/ConstantsValidation/basic-constants-validation';
import * as ccv from '../Resources/ConstantsValidation/color-constants-validation';
import * as ecv from '../Resources/ConstantsValidation/element-constants-validation';
import * as gcv from '../Resources/ConstantsValidation/generic-constants-validation';
import * as icv from '../Resources/ConstantsValidation/isotope-constants-validation';
import * as ncv from '../Resources/ConstantsValidation/numeric-constants-validation';
import * as pcv from '../Resources/ConstantsValidation/phonics-constants-validation';
import * as shcv from '../Resources/ConstantsValidation/shape-constants-validation';
import * as scv from '../Resources/ConstantsValidation/system-constants-validation';
import * as ucv from '../Resources/ConstantsValidation/units-constants-validation';
import * as wcv from '../Resources/ConstantsValidation/word-constants-validation';
var D = require('../Resources/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function scanDataPath
 * @description Scans the specified path and returns a colleciton
 * of all the files contained recursively within that path and all sub-folders.
 * @param {string} dataPath The path that should be recursively scanned for files in all the folders.
 * @return {object} A collection of files with their paths at all levels of the specified path including sub-folders.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function scanDataPath(dataPath) {
  let functionName = scanDataPath.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);
  let rules = {};
  let filesFound = [];
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
 * @function loadAllCsvData
 * @description Loads all the contents of all files and folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName_fileName.
 * @param {object} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function loadAllCsvData(filesToLoad, contextName) {
  // console.log('BEGIN dataBroker.loadAllCsvData function');
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // console.log('contextName is: ' + contextName);
  let functionName = loadAllCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  let rules = {};
  let fileExtensionRules = {};
  let parsedDataFile;
  rules[1] = s.cgetFileNameFromPath;
  rules[2] = s.cremoveFileExtensionFromFileName;
  fileExtensionRules[0] = s.cgetFileExtension;
  fileExtensionRules[1] = s.cremoveDotFromFileExtension;
  for (let i = 0; i < filesToLoad.length; i++) {
    let fileToLoad = filesToLoad[i];
    // console.log('File to load is: ' + fileToLoad)
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + fileToLoad);
    // NOTE: We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.
    let fileExtension = ruleBroker.processRules(fileToLoad, '', fileExtensionRules);
    // console.log('fileExtension is: ' + fileExtension);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'fileExtension is: ' + fileExtension);
    if (fileExtension === g.ccsv || fileExtension === g.cCsv || fileExtension === g.cCSV) {
      // console.log('execute business rules: ' + JSON.stringify(rules));
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
      contextName = contextName + b.cUnderscore + ruleBroker.processRules(fileToLoad, '', rules);
      // console.log('contextName is: ' + contextName);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
      let dataFile = fileBroker.getCsvData(fileToLoad);
      // console.log('loaded file data is: ' + JSON.stringify(dataFile));
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile));
      parsedDataFile = processCsvData(dataFile, contextName);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'parsedDataFile is: ' + JSON.stringify(parsedDataFile));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('parsedDataFile is: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllCsvData function');
  return parsedDataFile;
};

/**
 * @function loadAllXmlData
 * @description Loads all the contents of all files and folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName_fileName.
 * @param {object} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the t.ctx data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and parsed from all the input files list.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function loadAllXmlData(filesToLoad, contextName) {
  // console.log('BEGIN dataBroker.loadAllXmlData function');
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // console.log('contextName is: ' + contextName);
  let functionName = loadAllXmlData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  let j = 0;
  let multiMergedData = {};
  let parsedDataFile = {};
  let fileNameRules = {};
  let fileExtensionRules = {};
  let filePathRules = {};
  fileNameRules[1] = s.cgetFileNameFromPath;
  fileNameRules[2] = s.cremoveFileExtensionFromFileName;
  filePathRules[1] = s.cswapDoubleForwardSlashToSingleForwardSlash;
  fileExtensionRules[0] = s.cgetFileExtension;
  fileExtensionRules[1] = s.cremoveDotFromFileExtension;
  for (let i = 0; i < filesToLoad.length; i++) {
    let fileToLoad = filesToLoad[i];
    // console.log('execute business rules: ' + JSON.stringify(filePathRules));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(filePathRules));
    fileToLoad = ruleBroker.processRules(fileToLoad, '', filePathRules);
    // console.log('File to Load is: ' + fileToLoad);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + fileToLoad);
    // NOTE We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.
    let fileExtension = ruleBroker.processRules(fileToLoad, '', fileExtensionRules);
    // console.log('fileExtension is: ' + fileExtension);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'fileExtension is: ' + fileExtension);
    if (fileExtension === g.cxml || fileExtension === g.cXml || fileExtension === g.cXML) {
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
      if (j === 0) {
        j++;
        multiMergedData = dataFile;
      } else {
        j++;
        multiMergedData = mergeData(multiMergedData, w.cPage, '', 0, dataFile);
      }
      // console.log('DONE PROCESSING ADDITIONAL DATA');
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE PROCESSING ADDITIONAL DATA');
      // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'MERGED data is: ' + JSON.stringify(multiMergedData));
    }
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
 * @function processCsvData
 * @description Processes all of the CSV data into a usable format and executes any additional processing rules.
 * @param {object} data A JSON object that contains all of the data loaded from a CSV file.
 * @param {string} contextName The name that should be used when adding the objects to the D for data-sharing.
 * @return {object} A parsed and cleaned up JSON object where all of the CSV data is collated and organized and cleaned up ready for use.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function processCsvData(data, contextName) {
  // console.log('BEGIN dataBroker.processCsvData function');
  // console.log('input data is: ' + JSON.stringify(data));
  // console.log('contextName is: ' + contextName);
  let functionName = processCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);
  let parsedData = extractDataFromPapaParseObject(data, contextName);
  let dataCatagory = getDataCatagoryFromContextName(contextName);
  // console.log('dataCatagory is: ' + dataCatagory);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);
  let dataCatagoryDetailName;
  if (contextName.includes(w.cWorkflow)) {
    // Processing a workflow
    Object.assign(D[w.cWorkflow], parsedData[contextName]);
  } else if (contextName.includes(w.cColors)) {
    D[w.cColors] = {};
    Object.assign(D[w.cColors], parsedData);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'D final merge is: ' + JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('fully parsed data is: ' + JSON.stringify(parsedData));
  // console.log('D final merge is: ' + JSON.stringify(D));
  // console.log('END dataBroker.processCsvData function');
  return parsedData;
};

// function saveXmlData(unProcessedData) {
//
// };

// function unloadData(contextName) {
//
// };

/**
 * @function getDataCatagoryFromContextName
 * @description Gets the data catagory, give the context name.
 * @param {string} contextName The cotext name which will be something like Application_xxxx or Script_nnnn or Command_yyyy
 * @return {string} The string before the first cUnderscore (Application, Script, Command, etc).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataCatagoryFromContextName(contextName) {
  let functionName = getDataCatagoryFromContextName.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  let rules = {};
  let dataCatagory = '';
  rules[1] = s.cgetDataCatagoryFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  dataCatagory = ruleBroker.processRules(contextName, '', rules);
  loggers.consoleLog(baseFileName, b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return dataCatagory;
};

/**
 * @function getDataCatagoryDetailNameFromContextName
 * @description Gets the data catagory detail name, given the context name.
 * @param {string} contextName The name which will be something like Command_ApiPost or Script_ApiMacroX.
 * @return {string} The string after the first cUnderscore (ApiPost or ApiMacroX).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataCatagoryDetailNameFromContextName(contextName) {
  let functionName = getDataCatagoryDetailNameFromContextName.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  let rules = {};
  let dataCatagoryDetailName = '';
  rules[1] = s.cgetDataCatagoryDetailNameFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  dataCatagoryDetailName = ruleBroker.processRules(contextName, '', rules);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagoryDetailsName is: ' + dataCatagoryDetailName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return dataCatagoryDetailName;
};

/**
 * @function extractDataFromPapaParseObject
 * @description Extracts the parsed data from the papa parse data object.
 * @param {object} data Contains the full contents of the papa parse data object, for which we need to get data out of.
 * @param {string} contextName The name of the context either Command, Macro from which data should be retrieved.
 * @return {object} The fully parsed data that we intend to use for the application.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function extractDataFromPapaParseObject(data, contextName) {
  // console.log('BEGIN dataBroker.extractDataFromPapaParseObject function');
  // console.log('input contextName is: ' + contextName);
  // console.log('data is: ' + JSON.stringify(data));
  let functionName = extractDataFromPapaParseObject.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));
  let cleanKeysRules = {};
  let tempData = {};
  let validDataAdded = false;
  if (contextName === s.cConfiguration_Colors) {
    contextName = s.cColorData;
  }
  tempData[contextName] = {};
  cleanKeysRules[1] = s.ccleanCarriageReturnFromString;
  let highLevelDataCount = Object.keys(data[w.cdata]).length;
  for (let i = 0; i<=highLevelDataCount; i++) {
    validDataAdded = false;
    let lowLevelTempData = {};
    if (contextName === s.cColorData) {
      let colorName = '';
      for (let key in data[w.cdata][i]) {
        validDataAdded = true;
        // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('key is: ' + key);
        let newKey = ruleBroker.processRules(key, '', cleanKeysRules);
        // console.log('newKey is: ' + newKey);
        if (key === s.cColorName) {
          colorName = data[w.cdata][i][key];
        }
        // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('data[w.cData][i][key] is: ' + data[w.cdata][i][key]);
        lowLevelTempData[newKey] = ruleBroker.processRules(data[w.cdata][i][key], '', cleanKeysRules);
        // console.log('lowLevelTempData is: ' + JSON.stringify(lowLevelTempData));
      }
      if (validDataAdded === true) {
        // console.log('colorName is: ' + colorName);
        tempData[contextName][colorName] = {};
        if (i === 0) {
          tempData[contextName][colorName] = lowLevelTempData;
        } else {
          Object.assign(tempData[contextName][colorName], lowLevelTempData);
        }
      } // End-if validDataAdd === true
    } else { // Else-if (contextName === s.cConfiguration_Colors)
      for (let key in data[w.cdata][i]) {
        validDataAdded = true;
        // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('key is: ' + key);
        let newKey = ruleBroker.processRules(key, '', cleanKeysRules);
        // console.log('newKey is: ' + newKey);
        // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('data[w.cData][i][key] is: ' + data[w.cdata][i][key]);
        lowLevelTempData[newKey] = ruleBroker.processRules(data[w.cdata][i][key], '', cleanKeysRules);
        // console.log('lowLevelTempData is: ' + JSON.stringify(lowLevelTempData));
      }
      if (validDataAdded === true) {
        tempData[contextName][i] = {};
        if (i === 0) {
          tempData[contextName][i] = lowLevelTempData;
        } else {
          Object.assign(tempData[contextName][i], lowLevelTempData);
        }
      } // End-if validDataAdd === true
    } // End-else
  } // End-for (var i = 0; i<=highLevelDataCount; i++)
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'output data is: ' + JSON.stringify(tempData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('output data is: ' + JSON.stringify(tempData));
  // console.log('END dataBroker.extractDataFromPapaParseObject function');
  return tempData;
};

/**
 * @function mergeData
 * @description Merge data with the D for the specified data catagory and optional name.
 * @param {object} targetData The target data object where the dataToMerge should be merged with.
 * @param {string} dataCatagory Command or Script to indicate what catagory the test data should be used as.
 * @param {string} pageName (Optional) The name of the page where the data should be merged under. Pass as empty string if nothing.
 * @param {object} dataToMerge The data to be merged.
 * @return {object} A merged set of data combining all of the original data plust all the additional data from the dataToMerge data set.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function mergeData(targetData, dataCatagory, pageName, dataToMerge) {
  let functionName = mergeData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'data to Merge is: ' + JSON.stringify(dataToMerge));
  let dataToMergeElementCount = getDataElementCount(dataToMerge, '', '');
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
    for (let key in dataToMerge) {
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
 * @function getDataElement
 * @description Gets the named value from the data object then cleans it from any carriage return characters.
 * @param {object} dataObject The data map with all data.
 * @param {string} pageName The name of the page where the data should be found.
 * @param {string} elementName The name of the data element that should be found for the given page.
 * @return {string} The data element with all carriage return characters removed from it.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataElement(dataObject, pageName, elementName) {
  let functionName = getDataElement.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataObject value is: ' + JSON.stringify(dataObject));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'elementName is: ' + elementName);
  let returnString = dataObject[pageName][elementName];
  let rules = {};
  rules[1] = s.cCleanCarriageReturnFromString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));
  returnString = ruleBroker.processRules(returnString, '', rules);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnString is: ' + returnString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnString;
};

/**
 * @function getDataElementCount
 * @description Gets the count of the number of elements that match a given pattern,
 * if an empty string is passed in for the pattern then the count of the collection is returned with no pattern matching.
 * @param {object} dataObject The data map with all data.
 * @param {string} pageName The name of the page were the data should be found.
 * @param {string} elementNamePattern A string containing a pattern that should be matched in the object collection,
 * to establish a count of elements that match this pattern.
 * @return {integer} A count of either the number of data elements in the object collection,
 * or a count for the number of data elements that match a pattern that is passed in.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getDataElementCount(dataObject, pageName, elementNamePattern) {
  let functionName = getDataElementCount.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'dataObject is: ' + JSON.stringify(dataObject));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'elementNamePattern is: ' + elementNamePattern);
  let elementCollection;
  let elementCount = 0;
  if (pageName === '') {
    elementCollection = dataObject;
  } else {
    elementCollection = dataObject[pageName];
  }
  if (!elementNamePattern || elementNamePattern === '') {
    elementCount = Object.keys(elementCollection).length;
  } else {
    for (let key in elementCollection) {
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

/**
 * @function initializeConstantsValidationData
 * @description Initializes all of the constants validation data so that it can be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/28
 */
function initializeConstantsValidationData() {
  let functionName = getDataElementCount.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  D[s.cConstantsValidationData] = {};
  D[s.cConstantsValidationData][s.cBasicConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cColorConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cElementConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cGenericConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cIsotopeConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cNumericConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cPhonicsConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cShapeConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cSystemConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cUnitsConstantsValidation] = [];
  D[s.cConstantsValidationData][s.cWordConstantsValidation] = [];

  D[s.cConstantsValidationData][s.cBasicConstantsValidation] = bcv.basicConstantsValidation;
  D[s.cConstantsValidationData][s.cColorConstantsValidation] = ccv.colorConstantsValidation;
  D[s.cConstantsValidationData][s.cElementConstantsValidation] = ecv.elementConstantsValidation;
  D[s.cConstantsValidationData][s.cGenericConstantsValidation] = gcv.genericConstantsValidation;
  D[s.cConstantsValidationData][s.cIsotopeConstantsValidation] = icv.isotopeConstantsValidation;
  D[s.cConstantsValidationData][s.cNumericConstantsValidation] = ncv.numericConstantsValidation;
  D[s.cConstantsValidationData][s.cPhonicsConstantsValidation] = pcv.phonicsConstantsValidation;
  D[s.cConstantsValidationData][s.cShapeConstantsValidation] = shcv.shapeConstantsValidation;
  D[s.cConstantsValidationData][s.cSystemConstantsValidation] = scv.systemConstantsValidation;
  D[s.cConstantsValidationData][s.cUnitsConstantsValidation] = ucv.unitsConstantsValidation;
  D[s.cConstantsValidationData][s.cWordConstantsValidation] = wcv.wordConstantsValidation;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

export default {
  scanDataPath,
  loadAllCsvData,
  loadAllXmlData,
  processCsvData,
  initializeConstantsValidationData
};
