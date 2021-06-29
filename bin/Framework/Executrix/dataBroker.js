"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _fileBroker = _interopRequireDefault(require("./fileBroker"));

var _configurator = _interopRequireDefault(require("./configurator"));

var _loggers = _interopRequireDefault(require("./loggers"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var gen = _interopRequireWildcard(require("../Constants/generic.constants"));

var wrd = _interopRequireWildcard(require("../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var cfg = _interopRequireWildcard(require("../Constants/configuration.constants"));

var biz = _interopRequireWildcard(require("../Constants/business.constants"));

var msg = _interopRequireWildcard(require("../Constants/message.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * @requires module:configuration-constants
 * @requires module:business-constants
 * @requires module:message-constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var D = require('../Structures/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Framework.Executrix.dataBroker.

var namespacePrefix = sys.cFramework + bas.cDot + wrd.cExecutrix + bas.cDot + baseFileName + bas.cDot;
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
  var functionName = scanDataPath.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // dataPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);

  var rules = {};
  var filesFound = []; // rules[1] = biz.cswapFowardSlashToBackSlash;

  rules[1] = biz.cswapBackSlashToForwardSlash; // execute business rules:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(rules));

  dataPath = _ruleBroker["default"].processRules(dataPath, '', rules); // dataPath after business rules processing is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataPathAfterBusinessRulesProcessingIs + dataPath);

  filesFound = _fileBroker["default"].readDirectoryContents(dataPath); // cfilesFound is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfilesFoundIs + JSON.stringify(filesFound));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return filesFound;
}

;
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
  var functionName = loadAllCsvData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // filesToLoad is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cFileToLoadIs + JSON.stringify(filesToLoad)); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

  var rules = {};
  var fileExtensionRules = {};
  var parsedDataFile;
  rules[1] = biz.cgetFileNameFromPath;
  rules[2] = biz.cremoveFileExtensionFromFileName;
  fileExtensionRules[0] = biz.cgetFileExtension;
  fileExtensionRules[1] = biz.cremoveDotFromFileExtension;

  for (var i = 0; i < filesToLoad.length; i++) {
    var fileToLoad = filesToLoad[i]; // console.log('File to load is: ' + fileToLoad)
    // File to load is:

    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cFileToLoadIs + fileToLoad); // NOTE: We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.


    var fileExtension = _ruleBroker["default"].processRules(fileToLoad, '', fileExtensionRules); // console.log('fileExtension is: ' + fileExtension);
    // fileExtension is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfileExtensionIs + fileExtension);

    if (fileExtension === gen.ccsv || fileExtension === gen.cCsv || fileExtension === gen.cCSV) {
      // console.log('execute business rules: ' + JSON.stringify(rules));
      // execute business rules:
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(rules));

      contextName = contextName + bas.cUnderscore + _ruleBroker["default"].processRules(fileToLoad, '', rules); // console.log('contextName is: ' + contextName);
      // contextName is:

      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

      var dataFile = _fileBroker["default"].getCsvData(fileToLoad); // console.log('loaded file data is: ' + JSON.stringify(dataFile));
      // loaded file data is:


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cloadedFileDataIs + JSON.stringify(dataFile));

      parsedDataFile = processCsvData(dataFile, contextName);
    }
  } // parsedDataFile is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cparsedDataFileIs + JSON.stringify(parsedDataFile));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('parsedDataFile is: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllCsvData function');


  return parsedDataFile;
}

;
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
  var functionName = loadAllXmlData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // filesToLoad is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad)); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

  var j = 0;
  var multiMergedData = {};
  var parsedDataFile = {};
  var fileNameRules = {};
  var fileExtensionRules = {};
  var filePathRules = {};
  fileNameRules[0] = biz.cgetFileNameFromPath;
  fileNameRules[1] = biz.cremoveFileExtensionFromFileName;
  filePathRules[0] = biz.cswapDoubleForwardSlashToSingleForwardSlash;
  fileExtensionRules[0] = biz.cgetFileExtension;
  fileExtensionRules[1] = biz.cremoveDotFromFileExtension;

  for (var i = 0; i < filesToLoad.length; i++) {
    // console.log('****************************************************');
    // console.log('BEGIN i-th iteration of the loop: ' + i);
    // console.log('****************************************************');
    var fileToLoad = filesToLoad[i]; // console.log('execute business rules: ' + JSON.stringify(filePathRules));
    // execute business rules:

    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(filePathRules));

    fileToLoad = _ruleBroker["default"].processRules(fileToLoad, '', filePathRules); // console.log('File to Load is: ' + fileToLoad);
    // File to load is:

    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cFileToLoadIs + fileToLoad); // NOTE We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.


    var fileExtension = _ruleBroker["default"].processRules(fileToLoad, '', fileExtensionRules); // console.log('fileExtension is: ' + fileExtension);
    // fileExtension is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfileExtensionIs + fileExtension);

    if (fileExtension === gen.cxml || fileExtension === gen.cXml || fileExtension === gen.cXML) {
      // console.log('execute business rules: ' + JSON.stringify(fileNameRules));
      // execute business rules:
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(fileNameRules));

      contextName = contextName + bas.cUnderscore + _ruleBroker["default"].processRules(fileToLoad, '', fileNameRules); // console.log('contextName is: ' + contextName);
      // contextName is:

      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

      var dataFile = _fileBroker["default"].getXmlData(fileToLoad); // console.log('loaded file data is: ' + JSON.stringify(dataFile));
      // loaded file data is:


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cloadedFileDataIs + JSON.stringify(dataFile)); // console.log('BEGIN PROCESSING ADDITIONAL DATA');
      // BEGIN PROCESSING ADDITIONAL DATA


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_PROCESSING_ADDITIONAL_DATA); // console.log('j merge controller is: ' + j);


      if (j === 0) {
        j++;
        multiMergedData = dataFile;
      } else {
        j++;
        multiMergedData = mergeData(multiMergedData, wrd.cPage, '', dataFile);
      } // console.log('DONE PROCESSING ADDITIONAL DATA');
      // DONE PROCESSING ADDITIONAL DATA


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cDONE_PROCESSING_ADDITIONAL_DATA); // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));
      // MERGED data is:


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cMERGED_dataIs + JSON.stringify(multiMergedData));

      dataFile = {};
    } // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));
    // console.log('****************************************************');
    // console.log('END i-th iteration of the loop: ' + i);
    // console.log('****************************************************');

  }

  parsedDataFile = {}; // Clear it, so we can re-assign it to the merged locator data from all the files.

  parsedDataFile = multiMergedData; // parsedDataFile contents are:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cparsedDataFileContentsAre + JSON.stringify(parsedDataFile));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllXmlData function');


  return parsedDataFile;
}

;
/**
 * @function loadAllJsonData
 * @description Loads all the contents of all files and folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName.fileName.
 * @param {object} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the D-data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and parsed from all the input files list.
 * @author Seth Hollingsead
 * @date 2021/03/31
 */

function loadAllJsonData(filesToLoad, contextName) {
  // console.log('BEGIN dataBroker.loadAllJsonData function');
  // console.log('filesToLoad is: ' + JSON.stringify(filesToLoad));
  // console.log('contextName is: ' + contextName);
  var functionName = loadAllJsonData.name;
  var foundSystemData = false;
  var systemConfigFileName = wrd.csystem + gen.cDotjson;
  var multiMergedData = {};
  var parsedDataFile = {}; // Before we load all configuration data we need to FIRST load all the system configuration settings.
  // There will be a system configuration setting that will tell us if we need to load the debug settings or not.

  for (var i = 0; i < filesToLoad.length; i++) {
    // console.log('****************************************************');
    // console.log('BEGIN i-th iteration of the loop: ' + i);
    // console.log('****************************************************');
    var fileToLoad = filesToLoad[i]; // Look for the system configuration setting file. That is the one to load FIRST!

    if (fileToLoad.includes(systemConfigFileName)) {
      var dataFile = preprocessJsonFile(fileToLoad); // NOTE: In this case we have just loaded the system data and nothing else, so we can just assign the data to the multiMergedData.
      // We will need to merge all the other files, but there will be a setting here we should examin to determine if the rest of the data should even be loaded or not.
      // We will have a new setting that determins if all the extra debug settings should be loaded or not.
      // This way the application performance can be seriously optimized to greater levels of lean performance.
      // Adding all that extra debugging configuration settings can affect load times, and application performance to a much lesser degree.

      multiMergedData[wrd.csystem] = {};
      multiMergedData[wrd.csystem] = dataFile;
      foundSystemData = true;
    } // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));
    // console.log('****************************************************');
    // console.log('END i-th iteration of the loop: ' + i);
    // console.log('****************************************************');


    if (foundSystemData === true) {
      break;
    }
  } // Now we need to determine if we should load the rest of the data.


  if (multiMergedData[wrd.csystem][wrd.csystem + bas.cDot + cfg.cEnableDebugConfigurationSettings] === true || multiMergedData[wrd.csystem][wrd.csystem + bas.cDot + cfg.cEnableDebugConfigurationSettings].toUpperCase === gen.cTRUE) {
    for (var j = 0; j < filesToLoad.length; j++) {
      // console.log('****************************************************');
      // console.log('BEGIN i-th iteration of the loop: ' + j);
      // console.log('****************************************************');
      var _fileToLoad = filesToLoad[j]; // Look for the system configuration setting file. That is the one to load FIRST!

      if (!_fileToLoad.includes(systemConfigFileName) && _fileToLoad.toUpperCase().includes(gen.cDotJSON)) {
        var _dataFile = preprocessJsonFile(_fileToLoad); // NOTE: In this case we have just loaded the system data and nothing else, so we can just assign the data to the multiMergedData.
        // We will need to merge all the other files, but there will be a setting here we should examin to determine if the rest of the data should even be loaded or not.
        // We will have a new setting that determins if all the extra debug settings should be loaded or not.
        // This way the application performance can be seriously optimized to greater levels of lean performance.
        // Adding all that extra debugging configuration settings can affect load times, and application performance to a much lesser degree.


        if (!multiMergedData[cfg.cDebugSettings]) {
          multiMergedData[cfg.cDebugSettings] = {};
          multiMergedData[cfg.cDebugSettings] = _dataFile;
        } else {
          Object.assign(multiMergedData[cfg.cDebugSettings], _dataFile);
        }
      } // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));
      // console.log('****************************************************');
      // console.log('END i-th iteration of the loop: ' + j);
      // console.log('****************************************************');

    }
  }

  parsedDataFile = multiMergedData; // parsedDataFile contents are:
  // console.log('parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllJsonData function');

  return parsedDataFile;
}

;
/**
 * @function preprocessJsonFile
 * @description Load all of the data from a single JSON data file.
 * @param {string} fileToLoad The fully qualified path to the file that should be loaded.
 * @return {object} The JSON data object that was loaded from the specified JSON data file.
 * @author Seth Hollingsead
 * @date 05/11/2021
 */

function preprocessJsonFile(fileToLoad) {
  // console.log('BEGIN dataBroker.preprocessJsonFile function');
  // console.log('fileToLoad is: ' + fileToLoad);
  var filePathRules = {};
  filePathRules[0] = biz.cswapDoubleForwardSlashToSingleForwardSlash; // console.log('execute business rules: ' + JSON.stringify(filePathRules));

  var finalFileToLoad = _ruleBroker["default"].processRules(fileToLoad, '', filePathRules); // console.log('File to Load is: ' + finalFileToLoad);


  var dataFile = _fileBroker["default"].getJsonData(finalFileToLoad); // console.log('loaded file data is: ' + JSON.stringify(dataFile));
  // console.log('END dataBroker.preprocessJsonFile function');


  return dataFile;
}

;
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
  var functionName = processCsvData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // input data is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(data)); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

  var parsedData = extractDataFromPapaParseObject(data, contextName);
  var dataCatagory = getDataCatagoryFromContextName(contextName); // console.log('dataCatagory is: ' + dataCatagory);
  // dataCatagory is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory);

  var dataCatagoryDetailName;

  if (contextName.includes(wrd.cWorkflow)) {
    // Processing a workflow
    Object.assign(D[wrd.cWorkflow], parsedData[contextName]);
  } else if (contextName.includes(wrd.cColors)) {
    D[wrd.cColors] = {};
    Object.assign(D[wrd.cColors], parsedData);
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
  } // fully parsed data is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfullyParsedDataIs + JSON.stringify(parsedData)); // D final merge is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cD_finalMergeIs + JSON.stringify(D));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('fully parsed data is: ' + JSON.stringify(parsedData));
  // console.log('D final merge is: ' + JSON.stringify(D));
  // console.log('END dataBroker.processCsvData function');


  return parsedData;
}

; // function saveXmlData(unProcessedData) {
//
// };
// function unloadData(contextName) {
//
// };

/**
 * @function setupDataStorage
 * @description Does the initial setup of data storage on the D data structure.
 * @return {void} Nothing to return.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */

function setupDataStorage() {
  var functionName = storeData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  D[sys.cDataStorage] = {};

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function storeData
 * @description Stores some data in a data storage hive on the D data structure, under a caller specified sub-data storage hive name.
 * @param {string} dataStorageContextName The sub-data storage hive under-which the data should be stored.
 * @return {boolean} A True or False to indicate if the data storage was successfull or not.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */

function storeData(dataStorageContextName, dataToStore) {
  var functionName = storeData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // dataStorageContextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataStorageContextNameIs + dataStorageContextName); // dataToStore is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataToStoreIs + JSON.stringify(dataToStore));

  var returnData = false;
  D[sys.cDataStorage][dataStorageContextName] = {};
  D[sys.cDataStorage][dataStorageContextName] = dataToStore;
  returnData = true;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function getData
 * @description Gets some data from a caller specified sub-data storage hive name.
 * @param {string} dataStorageContextName The sub-data storage hive which should be retrieved.
 * @return {object} The data that is found, if any at the specified location on the data storage hive.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */

function getData(dataStorageContextName) {
  var functionName = storeData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // dataStorageContextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataStorageContextNameIs + dataStorageContextName);

  var returnData = false;

  if (D[sys.cDataStorage][dataStorageContextName] !== null && !!D[sys.cDataStorage][dataStorageContextName]) {
    returnData = D[sys.cDataStorage][dataStorageContextName];
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function clearData
 * @description Clears out all of the data stored in the DataStorage data hive of the D data structure.
 * @param {string} dataStorageContextName (OPTIONAL) The sub-data storage hive which should be cleared.
 * @return {void} Nothing to return.
 * @author Seth Hollingsead
 * @date 2020/12/29
 */

function clearData(dataStorageContextName) {
  var functionName = clearData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  if (D[sys.cDataStorage][dataStorageContextName] !== null && !!D[sys.cDataStorage][dataStorageContextName] && dataStorageContextName !== '') {
    D[sys.cDataStorage][dataStorageContextName] = {};
  } else {
    D[sys.cDataStorage] = {};
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function getDataCatagoryFromContextName
 * @description Gets the data catagory, give the context name.
 * @param {string} contextName The cotext name which will be something like Application_xxxx or Script_nnnn or Command_yyyy
 * @return {string} The string before the first cUnderscore (Application, Script, Command, etc).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function getDataCatagoryFromContextName(contextName) {
  var functionName = getDataCatagoryFromContextName.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

  var rules = {};
  var dataCatagory = '';
  rules[0] = biz.cgetDataCatagoryFromDataContextName; // execute business rules:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(rules));

  dataCatagory = _ruleBroker["default"].processRules(contextName, '', rules); // dataCatagory is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return dataCatagory;
}

;
/**
 * @function getDataCatagoryDetailNameFromContextName
 * @description Gets the data catagory detail name, given the context name.
 * @param {string} contextName The name which will be something like Command_ApiPost or Script_ApiMacroX.
 * @return {string} The string after the first cUnderscore (ApiPost or ApiMacroX).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function getDataCatagoryDetailNameFromContextName(contextName) {
  var functionName = getDataCatagoryDetailNameFromContextName.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);

  var rules = {};
  var dataCatagoryDetailName = '';
  rules[0] = biz.cgetDataCatagoryDetailNameFromDataContextName; // execute business rules:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(rules));

  dataCatagoryDetailName = _ruleBroker["default"].processRules(contextName, '', rules); // dataCatagoryDetailsName is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataCatagoryDetailsNameIs + dataCatagoryDetailName);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return dataCatagoryDetailName;
}

;
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
  var functionName = extractDataFromPapaParseObject.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName); // input data is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(data));

  var cleanKeysRules = {};
  var tempData = {};
  var validDataAdded = false;

  if (contextName === sys.cConfiguration_Colors) {
    contextName = sys.cColorData;
  }

  tempData[contextName] = {};
  cleanKeysRules[0] = biz.ccleanCarriageReturnFromString;
  var highLevelDataCount = Object.keys(data[wrd.cdata]).length;

  for (var i = 0; i <= highLevelDataCount; i++) {
    validDataAdded = false;
    var lowLevelTempData = {};

    if (contextName === sys.cColorData) {
      var colorName = '';

      for (var key in data[wrd.cdata][i]) {
        validDataAdded = true; // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(namespacePrefix + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('key is: ' + key);

        var newKey = _ruleBroker["default"].processRules(key, '', cleanKeysRules); // console.log('newKey is: ' + newKey);


        if (key === sys.cColorName) {
          colorName = data[wrd.cdata][i][key];
        } // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(namespacePrefix + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('data[wrd.cData][i][key] is: ' + data[wrd.cdata][i][key]);


        lowLevelTempData[newKey] = _ruleBroker["default"].processRules(data[wrd.cdata][i][key], '', cleanKeysRules); // console.log('lowLevelTempData is: ' + JSON.stringify(lowLevelTempData));
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

    } else {
      // Else-if (contextName === sys.cConfiguration_Colors)
      for (var _key in data[wrd.cdata][i]) {
        validDataAdded = true; // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(namespacePrefix + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('key is: ' + key);

        var _newKey = _ruleBroker["default"].processRules(_key, '', cleanKeysRules); // console.log('newKey is: ' + newKey);
        // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(namespacePrefix + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('data[wrd.cData][i][key] is: ' + data[wrd.cdata][i][key]);


        lowLevelTempData[_newKey] = _ruleBroker["default"].processRules(data[wrd.cdata][i][_key], '', cleanKeysRules); // console.log('lowLevelTempData is: ' + JSON.stringify(lowLevelTempData));
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
  // loggers.consoleLog(namespacePrefix + functionName, 'output data is: ' + JSON.stringify(tempData));
  // tempData is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ctempDataIs + tempData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('output data is: ' + JSON.stringify(tempData));
  // console.log('END dataBroker.extractDataFromPapaParseObject function');


  return tempData;
}

;
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
  var functionName = mergeData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // console.log('BEGIN dataBroker.mergeData function');
  // targetData is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ctargetDataIs + JSON.stringify(targetData)); // console.log('targetData is: ' + JSON.stringify(targetData));
  // dataCatagory is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory); // console.log('dataCatagory is: ' + dataCatagory);
  // pageName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName); // console.log('pageName is: ' + pageName);
  // data to Merge is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataToMergeIs + JSON.stringify(dataToMerge)); // console.log('data to Merge is: ' + JSON.stringify(dataToMerge));


  var dataToMergeElementCount = getDataElementCount(dataToMerge, '', ''); // dataToMergeElementCount is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataToMergeElementCountIs + dataToMergeElementCount); // console.log('dataToMergeElementCount is: ' + dataToMergeElementCount);


  if (dataToMergeElementCount === 1) {
    // dataToMergeElementCount is 1
    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataToMergeElementCountIs1); // console.log('dataToMergeElementCount is 1');
    // check if the pageName is not an empty string


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccheckIfThePageNameIsNotAnEmptyString); // console.log('check if the pageName is not an empty string');


    if (pageName !== '') {
      // pageName is not an empty string
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpageNameIsNotAnEmptyString); // console.log('pageName is not an empty string');
      // Check if the dataCatagory is an empty string or not


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cCheckIfTheDataCatagoryIsAnEmptyStringOrNot); // console.log('Check if the dataCatagory is an empty string or not');


      if (dataCatagory !== '') {
        // dataCatagory is not an empty string!
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIsNotAnEmptyString); // console.log('dataCatagory is not an empty string!');


        Object.assign(targetData[dataCatagory][pageName], dataToMerge);
      } else {
        // dataCatagory IS an empty string!
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIsAnEmptyString); // console.log('dataCatagory IS an empty string!');
        // data to Merge is:


        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataToMergeIs + JSON.stringify(dataToMerge)); // console.log('data to Merge is: ' + JSON.stringify(dataToMerge));
        // targetData content is:


        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ctargetDataContentIs + JSON.stringify(targetData)); // console.log('targetData content is: ' + JSON.stringify(targetData));


        Object.assign(targetData[pageName], dataToMerge); // after attempt to merge, results are:

        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cafterAttemptToMergeResultsAre); // console.log('after attempt to merge, results are: ');
        // Merged data is:


        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cMergedDataIs + JSON.stringify(dataToMerge)); // console.log('Merged data is: ' + JSON.stringify(dataToMerge));
        // targetData content is:


        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ctargetDataContentIs + JSON.stringify(targetData)); // console.log('targetData content is: ' + JSON.stringify(targetData));

      }
    } else {
      // pageName is an empty string
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpageNameIsAnEmptyString); // console.log('pageName is an empty string');


      if (targetData[dataCatagory] === undefined) {
        targetData[dataCatagory] = {}; // Make sure to create a landing place for it, before we attempt to dump the data over there.
      } // Otherwise it will just throw an error.


      Object.assign(targetData[dataCatagory], dataToMerge);
    }
  } else {
    // Caught the special case that we are merging a flat list.
    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cCaughtTheSpecialCaseThatWeAreMergingFlatList); // console.log('Caught the special case that we are merging a flat list.');
    // targetData content is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ctargetDataContentIs + JSON.stringify(targetData)); // console.log('targetData content is: ' + JSON.stringify(targetData));


    for (var key in dataToMerge) {
      // inside the for-loop
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinsideTheForLoop); // console.log('inside the for-loop');
      // key is:


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ckeyIs + key); // console.log('key is: ' + key);
      // pageName is:


      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName); // console.log('pageName is: ' + pageName);


      targetData[pageName][key] = dataToMerge[key];
    }
  } // targetData is modified in the input pass-by-reference variable content is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs + JSON.stringify(targetData)); // console.log('targetData is modified in the input pass-by-reference variable content is: ' + JSON.stringify(targetData));


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('END dataBroker.mergeData function');


  return targetData;
}

;
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
  var functionName = getDataElement.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // dataObject value is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataObjectValueIs + JSON.stringify(dataObject)); // pageName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName); // elementName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.celementNameIs + elementName);

  var returnData = dataObject[pageName][elementName];
  var rules = {};
  rules[0] = biz.cCleanCarriageReturnFromString; // execute business rules:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(rules));

  returnData = _ruleBroker["default"].processRules(returnData, '', rules);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
}

;
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
  var functionName = getDataElementCount.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // dataObject is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdataObjectIs + JSON.stringify(dataObject)); // pageName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName); // elementNamePattern is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.celementNamePatternIs + elementNamePattern);

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
  } // elementCount is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.celementCountIs + elementCount);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return elementCount;
}

;
/**
 * @function initializeConstantsValidationData
 * @description Initializes the constants validation data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/02/24
 */

function initializeConstantsValidationData() {
  var functionName = initializeConstantsValidationData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  D[sys.cConstantsValidationData] = {};
  D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  D[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  D[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function addConstantsValidationData
 * @description Adds a library of constants validation data to the existing constants validation data.
 * @param {array<array<string,object>>} constantLibraryData The array of data that should be added to the validation data set for the purpose of valdation.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/03/06
 */

function addConstantsValidationData(constantLibraryData) {
  var functionName = addConstantsValidationData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // constantLibraryData is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cconstantLibraryDataIs + JSON.stringify(constantLibraryData));

  for (var key1 in constantLibraryData[sys.cConstantsValidationData]) {
    if (constantLibraryData[sys.cConstantsValidationData].hasOwnProperty(key1)) {
      if (key1 === sys.cConstantsFilePaths || key1 === sys.cConstantsPhase1ValidationMessages || key1 === sys.cConstantsPhase2ValidationMessages || key1 === sys.cConstantsShortNames || key1 === sys.cConstantsFileNames || key1 === sys.cConstantsPrefix) {
        addDeeplyNestedConstantsValidationData(key1, constantLibraryData[sys.cConstantsValidationData][key1]);
      } else {
        var data1 = constantLibraryData[sys.cConstantsValidationData][key1];
        D[sys.cConstantsValidationData][key1] = [];
        Object.assign(D[sys.cConstantsValidationData][key1], data1);
      }
    }
  } // console.log('contents of the D-data structure are: ' + JSON.stringify(D));


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function addDeeplyNestedConstantsValidationData
 * @description Adds all the constants validation auxilary data that is deeply nested inside sub-data structures to the main D-data structure.
 * Such as file paths, and validation messages.
 * @param {string} contextName The name that should be used when accessing and also adding the data to the D-data structure.
 * @param {array<array<string,object>>} deeplyNestedData The actual data that should be added.
 * @author Seth Hollingsead
 * @date 2021/03/10
 */

function addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData) {
  var functionName = addDeeplyNestedConstantsValidationData.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // contextName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName); // deeplyNestedData is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdeeplyNestedDataIs + JSON.stringify(deeplyNestedData));

  var d_dataStructureConstantsFilePaths = D[sys.cConstantsValidationData][contextName];

  for (var key2 in deeplyNestedData) {
    if (deeplyNestedData.hasOwnProperty(key2)) {
      var data2 = deeplyNestedData[key2];
      D[sys.cConstantsValidationData][contextName][key2] = data2;
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
var _default = {
  scanDataPath: scanDataPath,
  loadAllCsvData: loadAllCsvData,
  loadAllXmlData: loadAllXmlData,
  loadAllJsonData: loadAllJsonData,
  processCsvData: processCsvData,
  setupDataStorage: setupDataStorage,
  storeData: storeData,
  getData: getData,
  clearData: clearData,
  initializeConstantsValidationData: initializeConstantsValidationData,
  addConstantsValidationData: addConstantsValidationData
};
exports["default"] = _default;