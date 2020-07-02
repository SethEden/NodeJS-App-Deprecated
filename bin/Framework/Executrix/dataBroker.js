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

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../Constants/generic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

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
 * @requires module:system-constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
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
  var functionName = scanDataPath.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);

  var rules = {};
  var filesFound = []; // rules[1] = s.cswapFowardSlashToBackSlash;

  rules[1] = s.cswapBackSlashToForwardSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

  dataPath = _ruleBroker["default"].processRules(dataPath, '', rules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPath after business rules processing is: ' + dataPath);

  filesFound = _fileBroker["default"].readDirectoryContents(dataPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesFound is: ' + JSON.stringify(filesFound));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var rules = {};
  var fileExtensionRules = {};
  var parsedDataFile;
  rules[1] = s.cgetFileNameFromPath;
  rules[2] = s.cremoveFileExtensionFromFileName;
  fileExtensionRules[0] = s.cgetFileExtension;
  fileExtensionRules[1] = s.cremoveDotFromFileExtension;

  for (var i = 0; i < filesToLoad.length; i++) {
    var fileToLoad = filesToLoad[i]; // console.log('File to load is: ' + fileToLoad)

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + fileToLoad); // NOTE: We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.


    var fileExtension = _ruleBroker["default"].processRules(fileToLoad, '', fileExtensionRules); // console.log('fileExtension is: ' + fileExtension);


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'fileExtension is: ' + fileExtension);

    if (fileExtension === g.ccsv || fileExtension === g.cCsv || fileExtension === g.cCSV) {
      // console.log('execute business rules: ' + JSON.stringify(rules));
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

      contextName = contextName + b.cUnderscore + _ruleBroker["default"].processRules(fileToLoad, '', rules); // console.log('contextName is: ' + contextName);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

      var dataFile = _fileBroker["default"].getCsvData(fileToLoad); // console.log('loaded file data is: ' + JSON.stringify(dataFile));


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile));

      parsedDataFile = processCsvData(dataFile, contextName);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'parsedDataFile is: ' + JSON.stringify(parsedDataFile));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('parsedDataFile is: ' + JSON.stringify(parsedDataFile));
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var j = 0;
  var multiMergedData = {};
  var parsedDataFile = {};
  var fileNameRules = {};
  var fileExtensionRules = {};
  var filePathRules = {};
  fileNameRules[1] = s.cgetFileNameFromPath;
  fileNameRules[2] = s.cremoveFileExtensionFromFileName;
  filePathRules[1] = s.cswapDoubleForwardSlashToSingleForwardSlash;
  fileExtensionRules[0] = s.cgetFileExtension;
  fileExtensionRules[1] = s.cremoveDotFromFileExtension;

  for (var i = 0; i < filesToLoad.length; i++) {
    var fileToLoad = filesToLoad[i]; // console.log('execute business rules: ' + JSON.stringify(filePathRules));

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(filePathRules));

    fileToLoad = _ruleBroker["default"].processRules(fileToLoad, '', filePathRules); // console.log('File to Load is: ' + fileToLoad);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + fileToLoad); // NOTE We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.


    var fileExtension = _ruleBroker["default"].processRules(fileToLoad, '', fileExtensionRules); // console.log('fileExtension is: ' + fileExtension);


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'fileExtension is: ' + fileExtension);

    if (fileExtension === g.cxml || fileExtension === g.cXml || fileExtension === g.cXML) {
      // console.log('execute business rules: ' + JSON.stringify(fileNameRules));
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(fileNameRules));

      contextName = contextName + b.cUnderscore + _ruleBroker["default"].processRules(fileToLoad, '', fileNameRules); // console.log('contextName is: ' + contextName);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

      var dataFile = _fileBroker["default"].getXmlData(fileToLoad); // console.log('loaded file data is: ' + JSON.stringify(dataFile));


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile)); // console.log('BEGIN PROCESSING ADDITIONAL DATA');


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN PROCESSING ADDITIONAL DATA');

      if (j === 0) {
        j++;
        multiMergedData = dataFile;
      } else {
        j++;
        multiMergedData = mergeData(multiMergedData, s.cPage, '', 0, dataFile);
      } // console.log('DONE PROCESSING ADDITIONAL DATA');


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE PROCESSING ADDITIONAL DATA'); // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'MERGED data is: ' + JSON.stringify(multiMergedData));
    }
  }

  parsedDataFile = {}; // Clear it, so we can re-assign it to the merged locator data from all the files.

  parsedDataFile = multiMergedData;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllXmlData function');


  return parsedDataFile;
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var parsedData = extractDataFromPapaParseObject(data, contextName);
  var dataCatagory = getDataCatagoryFromContextName(contextName); // console.log('dataCatagory is: ' + dataCatagory);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);

  var dataCatagoryDetailName;

  if (contextName.includes(s.cWorkflow)) {
    // Processing a workflow
    Object.assign(D[s.cWorkflow], parsedData[contextName]);
  } else if (contextName.includes(s.cColors)) {
    D[s.cColors] = {};
    Object.assign(D[s.cColors], parsedData);
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'fully parsed data is: ' + JSON.stringify(parsedData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'D final merge is: ' + JSON.stringify(D));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('fully parsed data is: ' + JSON.stringify(parsedData));
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
 * @function getDataCatagoryFromContextName
 * @description Gets the data catagory, give the context name.
 * @param {string} contextName The cotext name which will be something like Application_xxxx or Script_nnnn or Command_yyyy
 * @return {string} The string before the first cUnderscore (Application, Script, Command, etc).
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function getDataCatagoryFromContextName(contextName) {
  var functionName = getDataCatagoryFromContextName.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);

  var rules = {};
  var dataCatagory = '';
  rules[1] = s.cgetDataCatagoryFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

  dataCatagory = _ruleBroker["default"].processRules(contextName, '', rules);

  _loggers["default"].consoleLog(baseFileName, b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);

  var rules = {};
  var dataCatagoryDetailName = '';
  rules[1] = s.cgetDataCatagoryDetailNameFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

  dataCatagoryDetailName = _ruleBroker["default"].processRules(contextName, '', rules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagoryDetailsName is: ' + dataCatagoryDetailName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));

  var cleanKeysRules = {};
  var tempData = {};
  var validDataAdded = false;

  if (contextName === s.cConfiguration_Colors) {
    contextName = s.cColorData;
  }

  tempData[contextName] = {};
  cleanKeysRules[1] = s.ccleanCarriageReturnFromString;
  var highLevelDataCount = Object.keys(data[s.cdata]).length;

  for (var i = 0; i <= highLevelDataCount; i++) {
    validDataAdded = false;
    var lowLevelTempData = {};

    if (contextName === s.cColorData) {
      var colorName = '';

      for (var key in data[s.cdata][i]) {
        validDataAdded = true; // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('key is: ' + key);

        var newKey = _ruleBroker["default"].processRules(key, '', cleanKeysRules); // console.log('newKey is: ' + newKey);


        if (key === s.cColorName) {
          colorName = data[s.cdata][i][key];
        } // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('data[s.cData][i][key] is: ' + data[s.cdata][i][key]);


        lowLevelTempData[newKey] = _ruleBroker["default"].processRules(data[s.cdata][i][key], '', cleanKeysRules); // console.log('lowLevelTempData is: ' + JSON.stringify(lowLevelTempData));
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
      // Else-if (contextName === s.cConfiguration_Colors)
      for (var _key in data[s.cdata][i]) {
        validDataAdded = true; // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('key is: ' + key);

        var _newKey = _ruleBroker["default"].processRules(_key, '', cleanKeysRules); // console.log('newKey is: ' + newKey);
        // console.log('execute business rules: ' + JSON.stringify(cleanKeysRules));
        // loggers.consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));
        // console.log('data[s.cData][i][key] is: ' + data[s.cdata][i][key]);


        lowLevelTempData[_newKey] = _ruleBroker["default"].processRules(data[s.cdata][i][_key], '', cleanKeysRules); // console.log('lowLevelTempData is: ' + JSON.stringify(lowLevelTempData));
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


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('output data is: ' + JSON.stringify(tempData));
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'data to Merge is: ' + JSON.stringify(dataToMerge));

  var dataToMergeElementCount = getDataElementCount(dataToMerge, '', '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataToMergeElementCount is: ' + dataToMergeElementCount);

  if (dataToMergeElementCount === 1) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataToMergeElementCount is 1');

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'check if the pageName is not an empty string');

    if (pageName !== '') {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is not an empty string');

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Check if the dataCatagory is an empty string or not');

      if (dataCatagory !== '') {
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is not an empty string!!');

        Object.assign(targetData[dataCatagory][pageName], dataToMerge);
      } else {
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory IS an empty string!!!!');

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'data to Merge is: ' + JSON.stringify(dataToMerge));

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'targetData content is: ' + JSON.stringify(targetData));

        Object.assign(targetData[pageName], dataToMerge);

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'after attempt to merge, results are: ');

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Merged data is: ' + JSON.stringify(dataToMerge));

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'targetData content is: ' + JSON.stringify(targetData));
      }
    } else {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is an empty string');

      Object.assign(targetData[dataCatagory], dataToMerge);
    }
  } else {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Caught the special case that we are merging a flat list.');

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'targetData content is: ' + JSON.stringify(targetData));

    for (var key in dataToMerge) {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'inside the for-loop');

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'key is: ' + key);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);

      targetData[pageName][key] = dataToMerge[key];
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'targetData is modified in the input pass-by-reference variable content is: ' + JSON.stringify(targetData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataObject value is: ' + JSON.stringify(dataObject));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'elementName is: ' + elementName);

  var returnString = dataObject[pageName][elementName];
  var rules = {};
  rules[1] = s.cCleanCarriageReturnFromString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

  returnString = _ruleBroker["default"].processRules(returnString, '', rules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnString is: ' + returnString);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnString;
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataObject is: ' + JSON.stringify(dataObject));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'elementNamePattern is: ' + elementNamePattern);

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'elementCount is: ' + elementCount);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return elementCount;
}

;
var _default = {
  scanDataPath: scanDataPath,
  loadAllCsvData: loadAllCsvData,
  loadAllXmlData: loadAllXmlData,
  processCsvData: processCsvData
};
exports["default"] = _default;