/**
 * @file fileBroker.js
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
 * @requires {@link https://www.npmjs.com/package/papaparse|papaparse}
 * @requires xml2js
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import ruleBroker from '../BusinessRules/ruleBroker';
import configurator from './configurator';
import loggers from './loggers';
import timers from './timers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as s from '../Constants/system.constants';
var fs = require('fs');
var path = require('path');
var zip = require('bestzip');
var D = require('../Resources/data');
var Papa = require('papaparse');
var xml2js = require('xml2js').Parser({
  parseNumbers: true,
  parseBooleans: true,
  explicitArray: false,
  mergeAttrs: true});
var filesCollection = [];
const directoriesToSkip = ['browser_components', 'node_modules', 'www', 'platforms', 'Release', 'Documentation'];
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function getXmlData
 * @description Loads the specified file and parses it into JavaScript Objects, all strings.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @return {object} A parsed JSON object containing all of the data, meta-data, objects, values and attributes that were stored in the specified XML file.
 * @author Seth Hollingsead
 * @date 2020/05/22
 */
function getXmlData(pathAndFilename) {
  let functionName = getXmlData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);
  let returnData;
  let data = fs.readFileSync(pathAndFilename, {encoding: 'UTF8' });
  let xml;
  xml2js.parseString(data,
    function(err, result) {
      if (err) {
        returnData = console.log('ERROR: ' + err);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
        return returnData;
      }
      xml = result;
    });
  returnData = xml;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

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
  let functionName = getCsvData.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'file and path to load from is: ' + pathAndFilename);
  let data = fs.readFileSync(pathAndFilename, { encoding: 'UTF8' });
  let parsedData = Papa.parse(data, {
    delimiter: ',',
    newline: '/n',
    header: true,
    skipEmptyLines: true,
    encoding: 'UTF8'
  });
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'DONE loading data from: ' + pathAndFilename);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'Loaded data is: ' + JSON.stringify(parsedData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return parsedData;
};

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
  let functionName = readDirectoryContents.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'Path that should be scanned is: ' + directory);
  let filesFound = [];
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data into a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'files found are: ' + JSON.stringify(filesFound));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return filesFound;
};

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
  let functionName = readDirectorySynchronously.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'directory is: ' + directory);
  let currentDirectoryPath = directory;
  let currentDirectory = fs.readdirSync(currentDirectoryPath, 'UTF8');
  currentDirectory.forEach(file => {
    let filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
    let pathOfCurrentItem = directory +'/' + file;
    if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
      filesCollection.push(pathOfCurrentItem);
    } else if (!filesShouldBeSkipped) {
      let directoryPath = path.join(directory + '\\' + file);
      readDirectorySynchronously(directoryPath);
    }
  });
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('END dataBroker.readDirectorySynchronously function');
};

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
  let functionName = copyAllFilesAndFoldersFromFolderToFolder.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'sourceFolder is: ' + sourceFolder);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'destinationFolder is: ' + destinationFolder);
  let copySuccess = false;
  let rootPath = cleanRootPath();
  sourceFolder = rootPath + sourceFolder;
  destinationFolder = rootPath + destinationFolder
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'sourceFolder is: ' + sourceFolder);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'destinationFolder is: ' + destinationFolder);
  copySuccess = copyFolderRecursiveSync(sourceFolder, destinationFolder);

  loggers.consoleLog(baseFileName + b.cDot + functionName, 'copySuccess is: ' + copySuccess);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('copySuccess is: ' + copySuccess);
  // console.log('END dataBroker.copyAllFilesAndFoldersFromFolderToFolder function');
  return copySuccess;
};

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
  let functionName = buildReleasePackage.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'sourceFolder is: ' + sourceFolder);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'destinationFolder is: ' + destinationFolder);
  let packageSuccess = false;
  let releaseFiles = [];
  let releasedArchiveFiles = [];
  let fileNameBusinessRules = {};
  let cleanFilePathsBusinessRules = {};
  fileNameBusinessRules[0] = s.cgetFileNameFromPath;
  fileNameBusinessRules[1] = s.cremoveFileExtensionFromFileName;
  cleanFilePathsBusinessRules[0] = s.cswapDoubleForwardSlashToSingleForwardSlash;
  cleanFilePathsBusinessRules[1] = s.cswapDoubleBackSlashToSingleBackSlash;
  cleanFilePathsBusinessRules[2] = s.cswapForwardSlashToBackSlash;
  let rootPath = configurator.getConfigurationSetting(s.cApplicationCleanedRootPath);
  let currentVersion = configurator.getConfigurationSetting(s.cApplicationVersionNumber);
  let applicationName = configurator.getConfigurationSetting(s.cApplicationName);
  let currentVersionReleased = false;
  let releaseDateTimeStamp;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'current version is: ' + currentVersion);
  sourceFolder = rootPath + sourceFolder;
  destinationFolder = rootPath + destinationFolder
  releaseFiles = readDirectoryContents(sourceFolder);
  releasedArchiveFiles = readDirectoryContents(destinationFolder);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'released archive files list is: ' + JSON.stringify(releasedArchiveFiles));
  // Check if the current version number has already been released as a zip file in the Release folder.
  // If it has not been released, then we can build the zip file with the current release number and date-time stamp.
  for (let i = 0; i <= releasedArchiveFiles.length - 1; i++) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'file is: ' + releasedArchiveFiles[i]);
    let pathAndFileName = releasedArchiveFiles[i];
    let fileName = ruleBroker.processRules(pathAndFileName, '', fileNameBusinessRules);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'fileName is: ' + fileName);
    if (fileName.includes(currentVersion) === true) {
      currentVersionReleased = true;
    }
  }
  if (currentVersionReleased === false) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'release files list is: ' + JSON.stringify(releaseFiles));
    releaseDateTimeStamp = timers.getNowMoment(configurator.getConfigurationSetting(s.cDateTimeStamp));
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'release date-time stamp is: ' + releaseDateTimeStamp);
    // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D are: ' + JSON.stringify(D));
    let releaseFileName = releaseDateTimeStamp + b.cUnderscore + currentVersion + b.cUnderscore + applicationName;
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'release fileName is: ' + releaseFileName);
    let fullReleasePath = destinationFolder + releaseFileName + g.cDotzip;
    zip({
      source: sourceFolder + '/*',
      destination: fullReleasePath
    }).then(function() {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Done writing the zip file: ' + fullReleasePath);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Set the return packageSuccess flag to TRUE');
      packageSuccess = true;
    }).catch(function(err) {
      console.error(err.stack);
      process.exit(1);
    });
  } else {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'current version already released');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'packageSuccess is: ' + packageSuccess);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('packageSuccess is: ' + packageSuccess);
  // console.log('END dataBroker.buildReleasePackage function');
  return packageSuccess;
};

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
  let functionName = buildReleasePackage.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let rootPath;
  rootPath = configurator.getConfigurationSetting(s.cApplicationRootPath);
  let cleanRootPathRules = {};
  cleanRootPathRules[1] = s.cremoveXnumberOfFoldersFromEndOfPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'RootPath before processing is: ' + rootPath);
  rootPath = ruleBroker.processRules(rootPath, 3, cleanRootPathRules);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'RootPath after processing is: ' + rootPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return rootPath;
};

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
  let functionName = copyFileSync.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'target is: ' + target);
  let successfullCopy = false;
  let targetFile = target;

  // If target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }
  try {
    fs.writeFileSync(targetFile, fs.readFileSync(source));
    successfullCopy = true;
  } catch(err) {
    console.log('ERROR: Could not copy file: ' + source);
    successfullCopy = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'successfullCopy is: ' + successfullCopy);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return successfullCopy;
};

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
  let functionName = copyFolderRecursiveSync.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'source is: ' + source);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'target is: ' + target);
  let successfullCopy = false;
  let files = [];

  // Check if folder needs to be created or integrated
  // var targetFolder = target;
  let targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    try {
      fs.mkdirSync(targetFolder);
      // NOTE: Just because we complete the above code doesn't mean the entire copy process was a success.
      // But atleast we haven't errored out, so it wasn't a failure YET.
    } catch(err) {
      console.log('ERROR: Could not create folder: ' + targetFolder);
      console.log('ERROR: ' + err);
      successfullCopy = false;
    }
  }

  // Copy
  try {
    if (fs.lstatSync(source).isDirectory()) {
      files = fs.readdirSync(source);
      files.forEach(function(file) {
        let curSource = path.join(source, file);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'successfullCopy is: ' + successfullCopy);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return successfullCopy;
};

export default {
  getCsvData,
  getXmlData,
  readDirectoryContents,
  copyAllFilesAndFoldersFromFolderToFolder,
  buildReleasePackage,
  cleanRootPath,
  copyFileSync,
  copyFolderRecursiveSync
};
