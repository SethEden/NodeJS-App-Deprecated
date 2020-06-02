"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _configurator = _interopRequireDefault(require("./configurator"));

var _loggers = _interopRequireDefault(require("./loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fs = require('fs');

var path = require('path');

var Papa = require('papaparse');

var xml2js = require('xml2js').Parser({
  parseNumbers: true,
  parseBooleans: true,
  explicitArray: false,
  mergeAttrs: true
});

var filesCollection = [];
var directoriesToSkip = ['browser_components', 'node_modules', 'www', 'platforms']; // require('should'); // Not sure if this will really be needed or not.

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPath is: ' + dataPath);

  var rules = {}; // rules[1] = s.cswapFowardSlashToBackSlash;

  rules[1] = s.cswapBackSlashToForwardSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

  dataPath = _ruleBroker["default"].processRules(dataPath, '', rules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataPath after business rules processing is: ' + dataPath);

  readDirectorySynchronously(dataPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesCollection is: ' + JSON.stringify(filesCollection));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return filesCollection;
}

;
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var rules = {};
  rules[1] = s.cgetFileNameFromPath;
  rules[2] = s.cremoveFileExtensionFromFileName;

  for (var i = 0; i < filesToLoad.length; i++) {
    var _filesToLoad = _filesToLoad[i];

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + _filesToLoad); // NOTE: We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(rules));

    contextName = contextName + b.cUnderscore + _ruleBroker["default"].processRules(_filesToLoad, '', rules);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

    var dataFile = getCsvData(fileToLoad);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile));

    var parsedDataFile = processCsvData(dataFile, contextName);
  } // Clear it so the next time we try to scan a folder and load a bunch of files, we don't have carry-over files listed.


  filesCollection = [];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'filesToLoad is: ' + JSON.stringify(filesToLoad));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var multiMergedData = {};
  var parsedDataFile = {};
  var fileNameRules = {};
  var filePathRules = {};
  fileNameRules[1] = s.cgetFileNameFromPath;
  fileNameRules[2] = s.cremoveFileExtensionFromFileName;
  filePathRules[1] = s.cswapDoubleForwardSlashToSingleForwardSlash;

  for (var i = 0; i < filesToLoad.length; i++) {
    var _fileToLoad = filesToLoad[i]; // console.log('execute business rules: ' + JSON.stringify(filePathRules));

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(filePathRules));

    _fileToLoad = _ruleBroker["default"].processRules(_fileToLoad, '', filePathRules); // console.log('File to Load is: ' + fileToLoad);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'File to load is: ' + _fileToLoad); // NOTE We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.
    // console.log('execute business rules: ' + JSON.stringify(fileNameRules));


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(fileNameRules));

    contextName = contextName + b.cUnderscore + _ruleBroker["default"].processRules(_fileToLoad, '', fileNameRules); // console.log('contextName is: ' + contextName);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

    var dataFile = getXmlData(_fileToLoad); // console.log('loaded file data is: ' + JSON.stringify(dataFile));

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'loaded file data is: ' + JSON.stringify(dataFile)); // console.log('BEGIN PROCESSING ADDITIONAL DATA');


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN PROCESSING ADDITIONAL DATA');

    if (i === 0) {
      multiMergedData = dataFile;
    } else {
      multiMergedData = mergeData(multiMergedData, s.cPage, '', 0, dataFile);
    } // console.log('DONE PROCESSING ADDITIONAL DATA');


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE PROCESSING ADDITIONAL DATA'); // console.log('MERGED data is: ' + JSON.stringify(multiMergedData));


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'MERGED data is: ' + JSON.stringify(multiMergedData));
  } // Clear it so the next time we try to scan a folder and load a bunch of files, we don't have carry-over files listed.


  filesCollection = [];
  parsedDataFile = {}; // Clear it, so we can re-assign it to the merged locator data from all the files.

  parsedDataFile = multiMergedData;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('parsedDataFile contents are: ' + JSON.stringify(parsedDataFile));
  // console.log('END dataBroker.loadAllXmlData function');


  return parsedDataFile;
}

;
/**
 * @name getCsvData
 * @description Loads the specified file and parses it into JSON objects.
 * @NOTE This function only does the loading and preliminary parsing.
 * Some clients might need their own parsing business rules so this might need to factor into things.
 * We want to keep everything as modular as possible to allow for this future proofing flexibility.
 * @param  {[String]} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @return {[Object]} The JSON object as it was loaded from the file with minimal to no additional processing.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function getCsvData(pathAndFilename) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getCsvData.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'file and path to load from is: ' + pathAndFilename);

  var data = fs.readFileSync(pathAndFilename, {
    encoding: 'UTF8'
  });
  var parsedData = Papa.parse(data, {
    delimiter: ',',
    newline: '/n',
    header: true,
    skipEmptyLines: true,
    encoding: 'UTF8'
  });

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'DONE loading data from: ' + pathAndFilename);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Loaded data is: ' + JSON.stringify(parsedData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return parsedData;
}

;
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'contextName is: ' + contextName);

  var parsedData = extractDataFromPapaParseObject(data, contextName);
  var dataCatagory = getDataCatagoryFromContextName(contextName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);

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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'fully parsed data is: ' + JSON.stringify(parsedData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'D final merge is: ');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, JSON.stringify(D));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @name getXmlData
 * @description Loads the specified file and parses it into JavaScript Objects, all strings.
 * @param  {[String]} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @return {[Object]} A parsed JSON object containing all of the data, meta-data, objects, values and attributes that were stored in the specified XML file.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */

function getXmlData(pathAndFilename) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getXmlData.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);

  var returnData;
  var data = fs.readFileSync(pathAndFilename, {
    encoding: 'UTF8'
  });
  var xml;
  xml2js.parseString(data, function (err, result) {
    if (err) {
      returnData = console.log('ERROR: ' + err);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

      return returnData;
    }

    xml = result;
  });
  returnData = xml;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

; // function saveXmlData(unProcessedData) {
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input contextName is: ' + contextName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'input data is: ' + JSON.stringify(data));

  var cleanKeysRules = {};
  var tempData = {};
  var validDataAdded = false;
  tempData[contextName] = {};
  cleanKeysRules[1] = s.cCleanCarriageReturnFromString;
  var highLevelDataCount = Object.keys(data[s.cdata]).length;

  for (var i = 0; i <= highLevelDataCount; i++) {
    validDataAdded = false;
    var lowLevelTempData = {};

    for (var key in data[s.cdata][i]) {
      validDataAdded = true;

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));

      var newKey = _ruleBroker["default"].processRules(key, '', cleanKeysRules);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'execute business rules: ' + JSON.stringify(cleanKeysRules));

      lowLevelTempData[newKey] = _ruleBroker["default"].processRules(data[s.cdata][i][key], '', cleanKeysRules);
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'output data is: ' + JSON.stringify(tempData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return tempData;
}

;
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

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'dataCatagory is: ' + dataCatagory);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pageName is: ' + pageName);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'data to Merge is: ' + JSON.stringify(dataToMerge));

  var dataToMergeElementCount = getDataElementCount(dataToMerge, '', rowNumber, '');

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
/**
 * @name readDirectorySynchronously
 * @description Recursively parses through all the sub-folders in a given path and loads all of the files contained in each sub-folder into a map.
 * @param  {[String]} directory The system path that should be scanned recursively for files.
 * @return {[Object]} A map of all the files contained in all levels of the specified path in all the folders and sub-folders.
 * @NOTE The function doesn't actually return anything, all the file data is stored in an external data collection.
 * @author wn050
 * @reference https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directores-nodejs
 * @date 2020/05/22
 */

function readDirectorySynchronously(directory) {
  // console.log('BEGIN dataBroker.readDirectorySynchronously function');
  // console.log('directory is: ' + directory);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = readDirectorySynchronously.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'directory is: ' + directory);

  var currentDirectoryPath = directory;
  var currentDirectory = fs.readdirSync(currentDirectoryPath, 'UTF8');
  currentDirectory.forEach(function (file) {
    var filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
    var pathOfCurrentItem = directory + '/' + file;

    if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
      filesCollection.push(pathOfCurrentItem);
    } else if (!filesShouldBeSkipped) {
      var directoryPath = path.join(directory + '\\' + file);
      readDirectorySynchronously(directoryPath);
    }
  });

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('END dataBroker.readDirectorySynchronously function');

}

;
/**
 * @name copyAllFilesAndFoldersFromFolderToFolder
 * @description Copies all of the files and folders recursively from the source folder to the destination folder.
 * @param  {[String]} sourceFolder The full source path where files and folders should be copied from.
 * @param  {[String]} destinationFolder The full destination path where files and folders should be copied.
 * @return {[Boolean]} A TRUE or FALSE to indicate if the full copy process is successful or not.
 * @author Seth Hollingsead
 * @date 2020/05/29
 * @NOTE: This is mainly used by the build system to execute a copy process for the
 * non-code files from the source folder to the bin folder.
 */

function copyAllFilesAndFoldersFromFolderToFolder(sourceFolder, destinationFolder) {
  // console.log('BEGIN dataBroker.copyAllFilesAndFoldersFromFolderToFolder function');
  // console.log('sourceFolder is: ' + sourceFolder);
  // console.log('destinationFolder is: ' + destinationFolder);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = copyAllFilesAndFoldersFromFolderToFolder.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'sourceFolder is: ' + sourceFolder);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'destinationFolder is: ' + destinationFolder);

  var copySuccess = false;

  var rootPath = _configurator["default"].getConfigurationSetting(s.cApplicationRootPath);

  var cleanRootPathRules = {};
  cleanRootPathRules[1] = s.cremoveXnumberOfFoldersFromEndOfPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'RootPath before processing is: ' + rootPath);

  rootPath = _ruleBroker["default"].processRules(rootPath, 3, cleanRootPathRules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'RootPath after processing is: ' + rootPath);

  sourceFolder = rootPath + sourceFolder;
  destinationFolder = rootPath + destinationFolder;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'sourceFolder is: ' + sourceFolder);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'destinationFolder is: ' + destinationFolder);

  copySuccess = copyFolderRecursiveSync(sourceFolder, destinationFolder);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'copySuccess is: ' + copySuccess);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('copySuccess is: ' + copySuccess);
  // console.log('END dataBroker.copyAllFilesAndFoldersFromFolderToFolder function');


  return copySuccess;
}

;
/**
 * @name buildReleasePackage
 * @description Add all the files from the sourceFolder into a zip file and
 * give a name to the file for the current date-time and release version, saving to the destination folder.
 * @param  {[String]} sourceFolder The folder that should be packaged up for the release zip file.
 * @param  {[String]} destinationFolder The folder where the zip file release package should be saved.
 * @return {[Boolean]} A TRUE or FALSE to indicate if the release package process is successful or not.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function buildReleasePackage(sourceFolder, destinationFolder) {
  // console.log('BEGIN dataBroker.buildReleasePackage function');
  // console.log('sourceFolder is: ' + sourceFolder);
  // console.log('destinationFolder is: ' + destinationFolder);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = buildReleasePackage.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'sourceFolder is: ' + sourceFolder);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'destinationFolder is: ' + destinationFolder);

  var packageSuccess = false;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'packageSuccess is: ' + packageSuccess);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('packageSuccess is: ' + packageSuccess);
  // console.log('END dataBroker.buildReleasePackage function');


  return packageSuccess;
}

;
/**
 * @name copyFileSync
 * @description Reads files from the source and copies them to the target.
 * @param  {[String]} source The source file that should be copied (read and then re-written to the destination).
 * @param  {[String]} target The target file that should be saved to.
 * @author Simon Zyx
 * @date 2014/09/25
 * @source https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js
 * @NOTE: This code is not actually coping the files, it is reading them and re-writing them to the target.
 * However, it should suffice for our needs. Meta-data in this case is not all that critical
 * since the original file is more important, and this is really just about the deployment of a build-release.
 */

function copyFileSync(source, target) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = copyFileSync.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'target is: ' + target);

  var successfullCopy = false;
  var targetFile = target; // If target is a directory a new file with the same name will be created

  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  try {
    fs.writeFileSync(targetFile, fs.readFileSync(source));
    successfullCopy = true;
  } catch (err) {
    console.log('ERROR: Could not copy file: ' + source);
    successfullCopy = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'successfullCopy is: ' + successfullCopy);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return successfullCopy;
}

;
/**
 * @name copyFolderRecursiveSync
 * @description Copies a folder and all of its files and sub-folders and sub-files recursively.
 * @param  {[String]} source The source path where all files and folders should be copied from.
 * @param  {[String]} target The target path where all the files and folders should be copied to.
 * @author Simon Zyx
 * @date 2014/09/25
 * @source https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js
 * @NOTE: This code is not actually coping the files, it is reading them and re-writing them to the target.
 * However, it should suffice for our needs. Meta-data in this case is not all that critical
 * since the original file is more important, and this is really just about the deployment of a build-release.
 */

function copyFolderRecursiveSync(source, target) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = copyFolderRecursiveSync.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'target is: ' + target);

  var successfullCopy = false;
  var files = []; // Check if folder needs to be created or integrated

  var targetFolder = target; // = path.join(target, path.basename(source));

  if (!fs.existsSync(targetFolder)) {
    try {
      fs.mkdirSync(targetFolder); // NOTE: Just because we complete the above code doesn't mean the entire copy process was a success.
      // But atleast we haven't errored out, so it wasn't a failure YET.
    } catch (err) {
      console.log('ERROR: Could not create folder: ' + targetFolder);
      console.log('ERROR: ' + err);
      successfullCopy = false;
    }
  } // Copy


  try {
    if (fs.lstatSync(source).isDirectory()) {
      files = fs.readdirSync(source);
      files.forEach(function (file) {
        var curSource = path.join(source, file);

        if (fs.lstatSync(curSource).isDirectory()) {
          successfullCopy = copyFolderRecursiveSync(curSource, targetFolder);
        } else {
          successfullCopy = copyFileSync(curSource, targetFolder);
        }
      });
    }
  } catch (err) {
    console.log('ERROR: Could not copy folder contents: ' + targetFolder);
    console.log('ERROR: ' + err);
    successfullCopy = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'successfullCopy is: ' + successfullCopy);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return successfullCopy;
}

;
var _default = {
  scanDataPath: scanDataPath,
  loadAllCsvData: loadAllCsvData,
  loadAllXmlData: loadAllXmlData,
  getCsvData: getCsvData,
  processCsvData: processCsvData,
  getXmlData: getXmlData,
  copyAllFilesAndFoldersFromFolderToFolder: copyAllFilesAndFoldersFromFolderToFolder,
  buildReleasePackage: buildReleasePackage
};
exports["default"] = _default;