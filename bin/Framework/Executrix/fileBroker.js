"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _configurator = _interopRequireDefault(require("./configurator"));

var _loggers = _interopRequireDefault(require("./loggers"));

var _timers = _interopRequireDefault(require("./timers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../Constants/generic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @module fileBroker
 * @description Contains all of the functions required to do file operations on a physical/virtual hard drive and/or mounted volume.
 * Including loading files, saving files, reloading files, resaving files, copying files, moving files, copy folders including copying folders recursively,
 * zipping files and saving zip-packages as part of a deployment/release process.
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:timers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/bestzip|bestzip}
 * @requires module:data
 * @requires xml2js
 * @author Seth Hollingsead
 * @date 2020/06/04
 */
var fs = require('fs');

var path = require('path');

var zip = require('bestzip');

var D = require('../Resources/data');

var xml2js = require('xml2js').Parser({
  parseNumbers: true,
  parseBooleans: true,
  explicitArray: false,
  mergeAttrs: true
});

var filesCollection = [];
var directoriesToSkip = ['browser_components', 'node_modules', 'www', 'platforms', 'Release', 'Documentation'];
/**
 * @function getXmlData
 * @description Loads the specified file and parses it into JavaScript Objects, all strings.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @return {object} A parsed JSON object containing all of the data, meta-data, objects, values and attributes that were stored in the specified XML file.
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

;
/**
 * @function getCsvData
 * @description Loads the specified file and parses it into JSON objects.
 * @NOTE This function only does the loading and preliminary parsing.
 * Some clients might need their own parsing business rules so this might need to factor into things.
 * We want to keep everything as modular as possible to allow for this future proofing flexibility.
 * @param {string} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processing.
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
 * @function readDirectoryContents
 * @description This function acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * Also that function doesn't technically return anything, it works with a global variable that
 * needs to be reset after the work is done with it. So these are the things that this wrapper function can do.
 * @param {string} directory The path that needs to be scanned.
 * @return {object} An object containing an array of all of the files in the folder and all sub-folders.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function readDirectoryContents(directory) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = readDirectoryContents.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Path that should be scanned is: ' + directory);

  var filesFound = [];
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data into a local variable first.

  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.

  filesCollection = [];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'files found are: ' + JSON.stringify(filesFound));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return filesFound;
}

;
/**
 * @function readDirectorySynchronously
 * @description Recursively parses through all the sub-folders in a given path and loads all of the files contained in each sub-folder into a map.
 * @param {string} directory The system path that should be scanned recursively for files.
 * @return {object} A map of all the files contained in all levels of the specified path in all the folders and sub-folders.
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
 * @function copyAllFilesAndFoldersFromFolderToFolder
 * @description Copies all of the files and folders recursively from the source folder to the destination folder.
 * @param {string} sourceFolder The full source path where files and folders should be copied from.
 * @param {string} destinationFolder The full destination path where files and folders should be copied.
 * @return {boolean} A TRUE or FALSE to indicate if the full copy process is successful or not.
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
  var rootPath = cleanRootPath();
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
 * @function buildReleasePackage
 * @description Add all the files from the sourceFolder into a zip file and
 * give a name to the file for the current date-time and release version, saving to the destination folder.
 * @param {string} sourceFolder The folder that should be packaged up for the release zip file.
 * @param {string} destinationFolder The folder where the zip file release package should be saved.
 * @return {boolean} A TRUE or FALSE to indicate if the release package process is successful or not.
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
  var releaseFiles = [];
  var releasedArchiveFiles = [];
  var fileNameBusinessRules = {};
  var cleanFilePathsBusinessRules = {};
  fileNameBusinessRules[0] = s.cgetFileNameFromPath;
  fileNameBusinessRules[1] = s.cremoveFileExtensionFromFileName;
  cleanFilePathsBusinessRules[0] = s.cswapDoubleForwardSlashToSingleForwardSlash;
  cleanFilePathsBusinessRules[1] = s.cswapDoubleBackSlashToSingleBackSlash;
  cleanFilePathsBusinessRules[2] = s.cswapForwardSlashToBackSlash;

  var rootPath = _configurator["default"].getConfigurationSetting(s.cApplicationCleanedRootPath);

  var currentVersion = _configurator["default"].getConfigurationSetting(s.cApplicationVersionNumber);

  var applicationName = _configurator["default"].getConfigurationSetting(s.cApplicationName);

  var currentVersionReleased = false;
  var releaseDateTimeStamp;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'current version is: ' + currentVersion);

  sourceFolder = rootPath + sourceFolder;
  destinationFolder = rootPath + destinationFolder;
  releaseFiles = readDirectoryContents(sourceFolder);
  releasedArchiveFiles = readDirectoryContents(destinationFolder);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'released archive files list is: ' + JSON.stringify(releasedArchiveFiles)); // Check if the current version number has already been released as a zip file in the Release folder.
  // If it has not been released, then we can build the zip file with the current release number and date-time stamp.


  for (var i = 0; i <= releasedArchiveFiles.length - 1; i++) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'file is: ' + releasedArchiveFiles[i]);

    var pathAndFileName = releasedArchiveFiles[i];

    var fileName = _ruleBroker["default"].processRules(pathAndFileName, '', fileNameBusinessRules);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'fileName is: ' + fileName);

    if (fileName.includes(currentVersion) === true) {
      currentVersionReleased = true;
    }
  }

  if (currentVersionReleased === false) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'release files list is: ' + JSON.stringify(releaseFiles));

    releaseDateTimeStamp = _timers["default"].getNowMoment(_configurator["default"].getConfigurationSetting(s.cDateTimeStamp));

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'release date-time stamp is: ' + releaseDateTimeStamp); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D are: ' + JSON.stringify(D));


    var releaseFileName = releaseDateTimeStamp + b.cUnderscore + currentVersion + b.cUnderscore + applicationName;

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'release fileName is: ' + releaseFileName);

    var fullReleasePath = destinationFolder + releaseFileName + g.cDotzip;
    zip({
      source: sourceFolder + '/*',
      destination: fullReleasePath
    }).then(function () {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Done writing the zip file: ' + fullReleasePath);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'Set the return packageSuccess flag to TRUE');

      packageSuccess = true;
    })["catch"](function (err) {
      console.error(err.stack);
      process.exit(1);
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'packageSuccess is: ' + packageSuccess);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('packageSuccess is: ' + packageSuccess);
  // console.log('END dataBroker.buildReleasePackage function');


  return packageSuccess;
}

;
/**
 * @function cleanRootPath
 * @description Takes the application root path and cleans it to give a real root path,
 * or top-level folder path for the application.
 * @return {string} The real root path or top-level path for the application.
 * @NOTE This has been problematic because often many of the init functions are contained in lower level folders,
 * not at the top-level. This gives much greater level of organization to the over all project and
 * helps with scalability & reusability.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function cleanRootPath() {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = buildReleasePackage.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  var rootPath;

  var rootPath = _configurator["default"].getConfigurationSetting(s.cApplicationRootPath);

  var cleanRootPathRules = {};
  cleanRootPathRules[1] = s.cremoveXnumberOfFoldersFromEndOfPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'RootPath before processing is: ' + rootPath);

  rootPath = _ruleBroker["default"].processRules(rootPath, 3, cleanRootPathRules);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'RootPath after processing is: ' + rootPath);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return rootPath;
}

;
/**
 * @function copyFileSync
 * @description Reads files from the source and copies them to the target.
 * @param {string} source The source file that should be copied (read and then re-written to the destination).
 * @param {string} target The target file that should be saved to.
 * @author Simon Zyx
 * @date 2014/09/25
 * {@link https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js}
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
 * @function copyFolderRecursiveSync
 * @description Copies a folder and all of its files and sub-folders and sub-files recursively.
 * @param {string} source The source path where all files and folders should be copied from.
 * @param {string} target The target path where all the files and folders should be copied to.
 * @return {boolean} A TRUE or FALSE value to indicate if the copy operation was a success or not.
 * @author Simon Zyx
 * @date 2014/09/25
 * {@link https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js}
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
  // var targetFolder = target;

  var targetFolder = path.join(target, path.basename(source));

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
  getCsvData: getCsvData,
  getXmlData: getXmlData,
  readDirectoryContents: readDirectoryContents,
  copyAllFilesAndFoldersFromFolderToFolder: copyAllFilesAndFoldersFromFolderToFolder,
  buildReleasePackage: buildReleasePackage,
  cleanRootPath: cleanRootPath,
  copyFileSync: copyFileSync,
  copyFolderRecursiveSync: copyFolderRecursiveSync
};
exports["default"] = _default;