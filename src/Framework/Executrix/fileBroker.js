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
 * @requires module:business-constants
 * @requires module:messages-constants
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/bestzip|bestzip}
 * @requires {@link https://www.npmjs.com/package/zip-a-folder|zip-a-folder}
 * @requires {@link https://www.npmjs.com/package/adm-zip|adm-zip}
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
import * as bas from '../Constants/basic.constants';
import * as gen from '../Constants/generic.constants';
import * as sys from '../Constants/system.constants';
import * as biz from '../Constants/business.constants';
import * as msg from '../Constants/messages.constants';
var fs = require('fs');
var path = require('path');
// var zip = require('bestzip');
// const zip-a-folder = require('zip-a-folder');
var AdmZip = require('adm-zip');
var D = require('../Structures/data');
var Papa = require('papaparse');
var xml2js = require('xml2js').Parser({
  parseNumbers: true,
  parseBooleans: true,
  explicitArray: false,
  mergeAttrs: true});
var filesCollection = [];
const directoriesToSkip = ['browser_components', 'node_modules', 'www', 'platforms', 'Release', 'Documentation', 'Recycle', 'Trash'];
var enableFilesListLimit = false;
var filesListLimit = -1;
var hitFileLimit = false;
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // pathAndFilename is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  let returnData;
  pathAndFilename = path.resolve(pathAndFilename); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  let data = fs.readFileSync(pathAndFilename, {encoding: gen.cUTF8 });
  let xml;
  xml2js.parseString(data,
    function(err, result) {
      if (err) {
        // ERROR:
        returnData = console.log(sys.cERROR_Colon + err);
        loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);
        loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
        return returnData;
      }
      xml = result;
    });
  returnData = xml;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // file and path to load from is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfileAndPathToLoadFromIs + pathAndFilename);
  pathAndFilename = path.resolve(pathAndFilename); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  let data = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let parsedData = Papa.parse(data, {
    delimiter: ',',
    newline: '/n',
    header: true,
    skipEmptyLines: true,
    encoding: gen.cUTF8
  });
  // DONE loading data from:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cDoneLoadingDataFrom + pathAndFilename);
  // Loaded data is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cLoadedDataIs + JSON.stringify(parsedData));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return parsedData;
};

/**
 * @function getJsonData
 * @description Loads the specified file and parses it into a JSON object(s).
 * @param {string} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processing.
 * @author Seth Hollingsead
 * @date 2020/12/18
 */
function getJsonData(pathAndFilename) {
  let functionName = getJsonData.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // file and path to load from is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfileAndPathToLoadFromIs + pathAndFilename);
  pathAndFilename = path.resolve(pathAndFilename); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  let rawData = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let parsedData = JSON.parse(rawData);
  // DONE loading data from:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cDoneLoadingDataFrom + pathAndFilename);
  // Loaded data is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cLoadedDataIs + JSON.stringify(parsedData));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return parsedData;
};

/**
 * @function writeJsonData
 * @description writes out JSON data to the specified file and path location, it will automatically over-write any existing file.
 * @param {string} pathAndFilename The path and file name for the file that should have data written to it.
 * @param {object} dataToWrite The data that should be written to the specified file.
 * @return {boolean} True or False to indicate if the file was written out successfully or not.
 * @author Seth Hollingsead
 * @date 2021/01/10
 */
function writeJsonData(pathAndFilename, dataToWrite) {
  let functionName = writeJsonData.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // file and path to write data to is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfileAndPathToWriteDataToIs + pathAndFilename);
  // data to write is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cdataToWriteIs + JSON.stringify(dataToWrite));
  let outputSuccess = false;
  try {
    fs.writeFileSync(pathAndFilename, JSON.stringify(dataToWrite, null, 2))
    outputSuccess = true;
  } catch (err) {
    // ERROR:
    console.error(sys.cERROR_Colon + err)
  }
  // Data was written to the file:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cDataWasWrittenToTheFile + outputSuccess);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // Path that should be scanned is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cPathThatShouldBeScannedIs + directory);
  let filesFound = [];
  directory = path.resolve(directory); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data into a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  // files found are:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfilesFoundAre + JSON.stringify(filesFound));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return filesFound;
};

/**
 * @function scanDirectoryContents
 * @description This function also acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * The difference between this function and the readDirectoryContents is that this function has an optional limit on the number of files to return.
 * Really this is used for scanning large volumes of data such as the entire C-Drive.
 * This way the user can control the number of files that are returned by the system.
 * The user might only want 10,000 files or just the first million files found. etc...
 * @param {string} directory The path that should be scanned for files including all sub-folders and all sub-files.
 * @param {boolean} enableLimit True or False to indicate if the boolean limit should be enabled or not.
 * @param {integer} filesLimit The number of files that should be limited when scanning, if the enableLimit is set to True.
 * @return {object} And object containing an array of all of the files in the folder up to the limit if specified.
 * @author Seth Hollingsead
 * @date 2021/02/22
 */
function scanDirectoryContents(directory, enableLimit, filesLimit) {
  let functionName = scanDirectoryContents.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // Path that should be scanned is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cPathThatShouldBeScannedIs + directory);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, 'enableLimit is: ' + enableLimit);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, 'filesLimit is: ' + filesLimit);
  let filesFound = [];
  directory = path.resolve(directory); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  enableFilesListLimit = enableLimit;
  filesListLimit = filesLimit;
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data into a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  enableFilesListLimit = false;
  filesListLimit = -1;
  hitFileLimit = false;
  // files found are:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfilesFoundAre + JSON.stringify(filesFound));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // directory is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cdirectorIs + directory);
  if (hitFileLimit === false) {
    directory = path.resolve(directory); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
    let currentDirectoryPath = directory;
    let currentDirectory = '';
    try {
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    } catch (e) {
      fs.mkdirSync(currentDirectoryPath);
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    }
    currentDirectory.forEach(file => {
      let filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
      let pathOfCurrentItem = directory +'/' + file;
      try {
        if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
          if (enableFilesListLimit === true && filesListLimit > 0) {
            if (filesCollection.length <= filesListLimit) {
              // console.log('Did not hit the file limit yet!');
              filesCollection.push(pathOfCurrentItem);
              // console.log('filesCollection is: ' + JSON.stringify(filesCollection));
            } else {
              // console.log('Hit the file limit!!');
              hitFileLimit = true;
              return;
            }
          } else {
            // console.log('adding the file the old fashioned way');
            filesCollection.push(pathOfCurrentItem);
          }
        } else if (!filesShouldBeSkipped) {
          // NOTE: There is a difference in how paths are handled in Windows VS Mac/Linux,
          // So for now I'm putting this code here like this to handle both situations.
          // The ideal solution would be to detect which OS the code is being run on.
          // Then handle each case appropriately.
          let directoryPath = '';
          directoryPath = path.resolve(directory + bas.cForwardSlash + file);
          // directoryPath is:
          loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cdirectoryPathIs + directoryPath);
          readDirectorySynchronously(directoryPath);
        }
      } catch (e) { // Catch the error in the hopes that we can continue scanning the file system.
        loggers.consoleLog(baseFileName + bas.cDot + functionName, 'ERROR: Invalid access to: ' + pathOfCurrentItem);
      }
    });
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
    // console.log('END dataBroker.readDirectorySynchronously function');
  }
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // sourceFolder is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.csourceFolderIs + sourceFolder);
  // destinationFolder is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cdestinationFolderIs + destinationFolder);
  let copySuccess = false;
  let rootPath = cleanRootPath();
  sourceFolder = rootPath + sourceFolder;
  sourceFolder = path.resolve(sourceFolder); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  destinationFolder = rootPath + destinationFolder
  destinationFolder = path.resolve(destinationFolder); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  // sourceFolder is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.csourceFolderIs + sourceFolder);
  // destinationFolder is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cdestinationFolderIs + destinationFolder);
  copySuccess = copyFolderRecursiveSync(sourceFolder, destinationFolder);
  // copySuccess is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ccopySuccessIs + copySuccess);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // sourceFolder is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.csourceFolderIs + sourceFolder);
  // destinationFolder is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cdestinationFolderIs + destinationFolder);
  let packageSuccess = false;
  let releaseFiles = [];
  let releasedArchiveFiles = [];
  let fileNameBusinessRules = {};
  let cleanFilePathsBusinessRules = {};
  fileNameBusinessRules[0] = biz.cgetFileNameFromPath;
  fileNameBusinessRules[1] = biz.cremoveFileExtensionFromFileName;
  cleanFilePathsBusinessRules[0] = biz.cswapDoubleForwardSlashToSingleForwardSlash;
  cleanFilePathsBusinessRules[1] = biz.cswapDoubleBackSlashToSingleBackSlash;
  cleanFilePathsBusinessRules[2] = biz.cswapForwardSlashToBackSlash;
  let rootPath = configurator.getConfigurationSetting(sys.cApplicationCleanedRootPath);
  let currentVersion = configurator.getConfigurationSetting(sys.cApplicationVersionNumber);
  let applicationName = configurator.getConfigurationSetting(sys.cApplicationName);
  let currentVersionReleased = false;
  let releaseDateTimeStamp;
  let originalSource, originalDestination;
  var zip = new AdmZip();
  // current version is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ccurrentVersionIs + currentVersion);
  originalSource = bas.cDot + sourceFolder;
  originalDestination = destinationFolder;
  sourceFolder = rootPath + sourceFolder;
  sourceFolder = path.resolve(sourceFolder); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  destinationFolder = rootPath + destinationFolder
  destinationFolder = path.resolve(destinationFolder); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
  releaseFiles = readDirectoryContents(sourceFolder);
  releasedArchiveFiles = readDirectoryContents(destinationFolder);
  // released archive files list is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.creleasedArchiveFilesListIs + JSON.stringify(releasedArchiveFiles));
  // Check if the current version number has already been released as a zip file in the Release folder.
  // If it has not been released, then we can build the zip file with the current release number and date-time stamp.
  for (let i = 0; i <= releasedArchiveFiles.length - 1; i++) {
    // file is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfileIs + releasedArchiveFiles[i]);
    let pathAndFileName = releasedArchiveFiles[i];
    let fileName = ruleBroker.processRules(pathAndFileName, '', fileNameBusinessRules);
    // fileName is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cfileNameIs + fileName);
    if (fileName.includes(currentVersion) === true) {
      currentVersionReleased = true;
    }
  }
  if (currentVersionReleased === false) {
    // release files list is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.creleaseFilesListIs + JSON.stringify(releaseFiles));
    releaseDateTimeStamp = timers.getNowMoment(configurator.getConfigurationSetting(sys.cDateTimeStamp));
    // release date-time stamp is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.creleaseDateTimeStampIs + releaseDateTimeStamp);
    // loggers.consoleLog(baseFileName + bas.cDot + functionName, 'contents of D are: ' + JSON.stringify(D));
    let releaseFileName = releaseDateTimeStamp + bas.cUnderscore + currentVersion + bas.cUnderscore + applicationName;
    // release fileName is:
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.creleaseFileNameIs + releaseFileName);
    let fullReleasePath = path.resolve(destinationFolder + bas.cForwardSlash + releaseFileName + gen.cDotzip);
    try {
      zip.addLocalFolder(sourceFolder, originalSource);
      zip.writeZip(fullReleasePath);
      // Done writing the zip file:
      loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cDoneWritingTheZipFile + fullReleasePath);
      // Set the return packageSuccess flag to TRUE
      loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cSetTheReturnPackageSuccessFlagToTrue);
      packageSuccess = true;
    } catch (err) {
      // ERROR: Zip package release failed:
      console.log(msg.cErrorZipPackageReleaseFailed);
      console.error(err.stack);
      process.exit(1);
    }
  } else {
    // current version already released
    loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ccurrentVersionAlreadyReleased);
  }
  // packageSuccess is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cpackageSuccessIs + packageSuccess);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  let functionName = cleanRootPath.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  let rootPath;
  rootPath = configurator.getConfigurationSetting(sys.cApplicationRootPath);
  let cleanRootPathRules = {};
  cleanRootPathRules[1] = biz.cremoveXnumberOfFoldersFromEndOfPath;
  // RootPath before processing is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cRootPathBeforeProcessingIs + rootPath);
  rootPath = ruleBroker.processRules(rootPath, 3, cleanRootPathRules);
  // RootPath after processing is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cRootPathAfterProcessingIs + rootPath);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // source is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cSourceIs + source);
  // target is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ctargetIs + target);
  let successfullCopy = false;
  let targetFile = target;

  // If target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }
  try {
    if (source.includes(bas.cDot + gen.cenv) === false) {
      // console.log('Did not detect the .env file, continue with copy operation, source is: ' + source);
      fs.writeFileSync(targetFile, fs.readFileSync(source));
      successfullCopy = true;
    } else {
      // console.log('Detected the .env file, and avoided it!');
    }
  } catch(err) {
    // ERROR: Could not copy file:
    console.log(msg.cErrorCouldNotCopyFile + source);
    successfullCopy = false;
  }
  // successfullCopy is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.csuccessfullCopyIs + successfullCopy);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
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
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  // source is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cSourceIs + source);
  // target is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.ctargetIs + target);
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
      // ERROR: Could not create folder:
      console.log(msg.cErrorCouldNotCreateFolder + targetFolder);
      // ERROR:
      console.log(msg.cERROR_Colon + err);
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
    // ERROR: Could not copy folder contents:
    console.log(msg.cErrorCouldNotCopyFolderContents + targetFolder);
    // ERROR:
    console.log(msg.cERROR_Colon + err);
    successfullCopy = false;
  }
  // successfullCopy is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.csuccessfullCopyIs + successfullCopy);
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return successfullCopy;
};

export default {
  getXmlData,
  getCsvData,
  getJsonData,
  writeJsonData,
  readDirectoryContents,
  scanDirectoryContents,
  copyAllFilesAndFoldersFromFolderToFolder,
  buildReleasePackage,
  cleanRootPath,
  copyFileSync,
  copyFolderRecursiveSync
};
