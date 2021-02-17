"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configurator = _interopRequireDefault(require("./configurator"));

var _colorizer = _interopRequireDefault(require("./colorizer"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _timers = _interopRequireDefault(require("./timers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var g = _interopRequireWildcard(require("../Constants/generic.constants"));

var w = _interopRequireWildcard(require("../Constants/word.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:configurator
 * @requires module:colorizer
 * @requires module:ruleBroker
 * @requires module:timers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var fs = require('fs');

var path = require('path');

var chalk = require('chalk');

var D = require('../Resources/data');
/**
 * @function consoleLog
 * @description compares the class path to a series of configuration settings to determine
 * if we should log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @NOTE When it comes to dumping large amounts of data out of a script the console will not do,
 * and dumping data to an output log file is critical to debugging certain tests and workflows.
 * @param {string} classPath The class path for the caller of this funciton file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/03/11
 */


function consoleLog(classPath, message) {
  if (Object.keys(D).length !== 0) {
    var logFile = _configurator["default"].getConfigurationSetting(s.cApplicationCleanedRootPath);

    if (logFile !== undefined) {
      logFile = logFile + b.cForwardSlash + w.clogs; // console.log('logFile is !== undefined');

      var debugSetting = false;
      var outputMessage = '';
      var _rules = {};
      _rules[1] = s.creplaceDoublePercentWithMessage;
      logFile = path.resolve(logFile + b.cForwardSlash + _configurator["default"].getConfigurationSetting(s.cLogFilePathAndName)); // console.log('determine if there is a configuration setting for the class path');

      debugSetting = _configurator["default"].getConfigurationSetting(classPath); // console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');

      if (logFile.toUpperCase().includes(g.cLOG) || logFile.toUpperCase().includes(g.cTXT)) {
        // If we have a log file then we will log it to the console & file.
        consoleLogProcess(debugSetting, logFile, classPath, message, true);
      } else {
        // No text log file specified, proceed with the same process for console only.
        consoleLogProcess(debugSetting, undefined, classPath, message, false);
      }
    }
  }
}

;
/**
 * @function consoleTableLog
 * @description Prints out a table with the data provided in the input tableDataArray.
 * @param {string} classPath The class path for the caller of this funciton file.function or class.method.
 * @param {array<object>} tableData An array of objects that should be printed to the console as if it was data.
 * @param {array<string>} columnNames An array of column names that should be used when outputting the table.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/22
 */

function consoleTableLog(classPath, tableData, columnNames) {
  console.table(tableData, columnNames);
}

;
/**
 * @function constantsValidationSummaryLog
 * @description Displays a constants log validation summary pass-fail result depending on the appropriate settings flag, which is passed in by the caller.
 * @param {string} message The message that should be displayed, if the setting determines that it should be displayed.
 * @param {boolean} passFail True or False to indicate if the pass or fail message should be displayed to the console log.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/29
 */

function constantsValidationSummaryLog(message, passFail) {
  var outputMessage = '';

  if (passFail === true) {
    if (_configurator["default"].getConfigurationSetting(s.cDisplaySummaryConstantsValidationPassMessages) === true) {
      outputMessage = w.cPASSED + b.cSpace + b.cDoubleDash + b.cSpace + message + b.cSpace + b.cDoubleDash + b.cSpace + w.cPASSED; // `PASSED -- ${message} -- PASSED`;

      outputMessage = chalk.rgb(0, 0, 0)(outputMessage);
      outputMessage = chalk.bgRgb(0, 255, 0)(outputMessage);
      console.log(outputMessage);
    }
  } else {
    if (_configurator["default"].getConfigurationSetting(s.cDisplaySummaryConstantsValidationFailMessages) === true) {
      outputMessage = w.cFAILED + b.cSpace + b.cDoubleDash + b.cSpace + message + b.cSpace + b.cDoubleDash + b.cSpace + w.cFAILED; // `FAILED -- ${message} -- FAILED`;

      outputMessage = chalk.rgb(0, 0, 0)(outputMessage);
      outputMessage = chalk.bgRgb(255, 0, 0)(outputMessage);
      console.log(outputMessage);
    }
  }
}

;
/**
 * @function consoleLogProcess
 * @description A function to refactor functionality that will print a message to a log file and the console, or just the console.
 * The output depends on if there was a txt log file specified or not.
 * @param {boolean} debugSetting A TRUE or FALSE value to indicate if the log action is enabled or not.
 * @param {string} logFile The path to the log file where the message should be logged.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output (log file and/or console).
 * @param {boolean} loggingToFileAndConsole A TRUE or FALSE value to indicate if the log should be done to the specified log file and the console.
 * If no log file is specified by the caller/settings system then this will be FALSE and only the console will be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/27
 */

function consoleLogProcess(debugSetting, logFile, classPath, message, loggingToFileAndConsole) {
  // console.log('BEGIN loggers.consoleLogProcess function');
  // console.log('debugSetting is: ' + debugSetting);
  // console.log('logFile is: ' + logFile);
  // console.log('classPath is: ' + classPath);
  // console.log('message is: ' + message);
  // console.log('loggingToFileAndConsole is: ' + loggingToFileAndConsole);
  var outputMessage = '';
  var messageIsValid = false;

  if (debugSetting !== undefined) {
    // console.log('The debugSetting is not undefined, now check if it is true or not.');
    if (debugSetting === true) {
      // console.log('The debugSetting is true now stringify it');
      outputMessage = JSON.stringify(message);
      console.log(outputMessage);

      if (loggingToFileAndConsole === true) {
        printMessageToFile(logFile, outputMessage); // console.log('done printing the message to the logfile');
      }
    } // console.log('Past the block of code that checks if the setting is true or not.');

  } else if (_configurator["default"].getConfigurationSetting(s.cDebugTestExhaustive) === true) {
    // console.log('else-block the DebugTestExhaustive setting is true');
    outputMessage = _ruleBroker["default"].processRules(message, classPath, rules); // Debug Exhaustive is probably not the best, we might want to consider another configuration setting to
    // enable or disable the console specifically. Right now there is no real business need for it.
    // If you really wanted to disable it just comment it out here.

    console.log(outputMessage);

    if (loggingToFileAndConsole === true) {
      printMessageToFile(logFile, outputMessage); // console.log('done printing the message to the logfile');
    }
  } else {
    // console.log('else-block we will parse the ClassPath');
    outputMessage = parseClassPath(logFile, classPath, message); // console.log('outputMessage is: ' + outputMessage);
    // console.log('message is: ' + message);
    // if (outputMessage !== false && outputMessage !== message) {
    //   console.log(outputMessage);
    // }
    // if (outputMessage !== false && outputMessage !== message && loggingToFileAndConsole === true) {
    //     printMessageToFile(logFile, outputMessage);
    //     console.log('DONE printing the message to the logFile');
    // }

    messageIsValid = validMessage(outputMessage, message);

    if (messageIsValid === true) {
      console.log(outputMessage);
    }

    if (messageIsValid === true && loggingToFileAndConsole === true) {
      printMessageToFile(logFile, outputMessage); // console.log('DONE printing the message to the logFile');
    } // else {
    //   // NOTE: We should always stringify the message, because even if it's a string already,
    //   // it won't hurt to attempt to stringify it again.
    //   // But if it's some kind of an object then it's absolutely critical that we stringify it.
    //   outputMessage = JSON.stringify(message);
    //   console.log(outputMessage);
    // }

  } // console.log('Past all of the if-else-if-else blocks of code.');
  // console.log('END loggers.consoleLogProcess function');
  // printMessageToFile(logFile, 'END loggers.consoleLog function (File & Console)');

}

;
/**
 * @function validMessage
 * @description Looks at the parsed / processed output message and the original message
 * to determine if the message is a valid message to dump to the console and/or the log file (if specified).
 * @param {string|integer|boolean|object} outputMessage The message that has been parsed/processed.
 * @param {string|integer|boolean|object} originalMessage The original message passed in before processing/parsing.
 * @return {boolean} A TRUE or FALSE to indicate if the output message should be dumped to the log file and/or the console.
 * @author Seth Hollingsead
 * @date 2020/05/27
 */

function validMessage(outputMessage, originalMessage) {
  // console.log('BEGIN loggers.validMessage function');
  // console.log('outputMessage is: ' + outputMessage);
  // console.log('originalMessage is: ' + originalMessage);
  var returnValue = false; // if (outputMessage !== false && outputMessage !== message) {
  //   console.log(outputMessage);
  // }
  // if (outputMessage !== false && outputMessage !== message && loggingToFileAndConsole === true) {
  //     printMessageToFile(logFile, outputMessage);
  //     console.log('DONE printing the message to the logFile');
  // }

  if (outputMessage !== false && outputMessage !== originalMessage) {
    returnValue = true;
  } else if (outputMessage !== false && outputMessage.includes(b.cPercent + b.cPercent) === false) {
    returnValue = true;
  } // console.log('returnValue is: ' + returnValue);
  // console.log('END loggers.validMessage');


  return returnValue;
}

;
/**
 * @function parseClassPath
 * @description parses the class path and message pulling it apart for logging and looking at custom debug settings.
 * @param {string} logFile The file name and path to the log file were the data should be printed.
 * @param {string} classPath The class path for the caller of this funciton file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {string} Returns the message that should be printed out to the console and logged to the log file.
 * @author Seth Hollingsead
 * @date 2020/03/26
 */

function parseClassPath(logFile, classPath, message) {
  // console.log('BEGIN loggers.parseClassPath function');
  // console.log('logFile is: ' + logFile);
  // console.log('classPath is: ' + classPath);
  // console.log('message is: ' + message);
  var className = '';
  var functionName = '';
  var debugFunctionsSetting = false;
  var debugFilesSetting = false;
  var classPathArray = {};
  var returnData = '';
  classPathArray = classPath.split(b.cDot); // printMessageToFile(logFile, 'classPathArray contents are: ' + JSON.stringify(classPathArray));
  // printMessageToFile(logFile, 'classPathArray.length is: ' + Object.keys(classPathArray).length);
  // console.log('classPathArray contents are: ' + JSON.stringify(classPathArray));
  // console.log('classPathArray.length is: ' + Object.keys(classPathArray).length);

  if (Object.keys(classPathArray).length > 3) {// printMessageToFile(logFile, 'ERROR: Advanced debugging capability more than 3 not supported at all!');
    // console.log('ERROR: Advanced debugging capability more than 3 not supported at all!');
  } else if (Object.keys(classPathArray).length === 3) {
    className = classPathArray[0] + b.cDot + classPathArray[1]; // printMessageToFile(logFile, 'classPathArray contents are: ' + JSON.stringify(classPathArray));
    // printMessageToFile(logFile, 'className is: ' + className);
    // console.log('classPathArray contents are: ' + JSON.stringify(classPathArray));
    // console.log('className is: ' + className);

    functionName = classPathArray[2]; // printMessageToFile(logFile, 'functionName is: ' + functionName);
    // console.log('functionName is: ' + functionName);
  } else if (Object.keys(classPathArray).length === 2) {
    className = classPathArray[0]; // printMessageToFile(logFile, 'className is: ' + className);
    // console.log('className is: ' + className);

    functionName = classPathArray[1]; // printMessageToFile(logFile, 'functionName is: ' + functionName);
    // console.log('functionName is: ' + functionName);
  } else if (Object.keys(classPathArray).length === 1) {
    className = classPathArray[0]; // printMessageToFile(logFile, 'className is: ' + className);
    // console.log('className is: ' + className);
  } else {} // printMessageToFile(logFile, 'ERROR: No class data, just print the message as is.');
    // console.log('ERROR: No class data, just print the message as is.');
    // printMessageToFile(logFile, 'getting configuration setting value for: ' + s.cDebugFunctions + b.cPipe + className + b.cDot + functionName);
    // console.log('getting configuration setting value for: ' + s.cDebugFunctions + b.cPipe + className + b.cDot + functionName);


  debugFunctionsSetting = _configurator["default"].getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName); // printMessageToFile(logFile, 'configuration setting debugFunctionsSetting is: ' + debugFunctionsSetting);
  // console.log('configuration setting debugFunctionsSetting is: ' + debugFunctionsSetting);

  debugFilesSetting = _configurator["default"].getConfigurationSetting(s.cDebugFiles + b.cPipe + className); // printMessageToFile(logFile, 'configuration setting debugFilesSetting is: ' + debugFilesSetting);
  // console.log('configuration setting debugFilesSetting is: ' + debugFilesSetting);

  if (debugFunctionsSetting === true || debugFilesSetting === true) {
    // message = chalk.white(message);
    // className = chalk.red.bold(className);
    // functionName = chalk.red.bold(functionName);
    // // message = message.replace('%%', className + b.cDot + functionName);
    // return ruleBroker.processRules(message, className + b.cDot + functionName, rules);
    // console.log('both true, call colorizer.colorizeMessage with the false flag');
    message = _colorizer["default"].colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, false);
    returnData = message;
  } else if (debugFunctionsSetting === undefined && debugFilesSetting === undefined || debugFunctionsSetting === undefined && debugFilesSetting === false || debugFunctionsSetting === false && debugFilesSetting === undefined || debugFunctionsSetting === false && debugFilesSetting === false) {
    // console.log('Something is undefined && false or some combination of both, return false');
    returnData = false;
  } else {
    // console.log('something is true, call the colorizer.colorizeMessage with true flag');
    message = _colorizer["default"].colorizeMessage(message, className, functionName, undefined, undefined, true);
    returnData = message;
  } // console.log('returnData is: ' + returnData);
  // console.log('END loggers.parseClassPath function');


  return returnData;
}

;
/**
 * @function printMessageToFile
 * @description Prints a message to a log text file.
 * @param {string} file The file path and file name where message data should be printed.
 * @param {string} message The message that should be logged to the log file if the specific flag is true.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/03/23
 */

function printMessageToFile(file, message) {
  // console.log('BEGIN loggers.printMessageToFile function');
  // console.log('file is: ' + file);
  // console.log(message);
  var fd;
  var dateTimeStamp = ''; // let currentOS = configurator.getConfigurationSetting(s.cOperatingSystem);
  // if (currentOS === w.cWindows || currentOS === w.cLinux) {

  if (_configurator["default"].getConfigurationSetting(s.cLogFileEnabled) === true) {
    // console.log('LogFileEnabled = true');
    message = _colorizer["default"].removeFontStyles(message);

    if (_configurator["default"].getConfigurationSetting(s.cIncludeDateTimeStampInLogFiles) === true) {
      // Individual messages need to have a time stamp on them. So lets sign the message with a time stamp.
      dateTimeStamp = _timers["default"].getNowMoment(g.cYYYY_MM_DD_HH_mm_ss_SSS); // console.log('dateTimeStamp is: ' + dateTimeStamp);

      message = dateTimeStamp + b.cColon + b.cSpace + message;
    } // console.log('final Message is: ' + message);


    try {
      fd = fs.openSync(file, 'a');
      fs.appendFileSync(fd, message + b.cCarriageReturn + b.cNewLine, g.cUTF8);
    } catch (err) {
      return console.log(err);
    } finally {
      if (fd !== undefined) {
        fs.closeSync(fd);
      }
    } // // console.log('writing message to file: ' + file + ' message: ' + message);
    // fs.appendFile(file, message + b.cCarriageReturn + b.cNewLine, 'utf8', function(err) {
    //   // fs.writeFileSync(file, message, 'utf8', { 'flags': 'a' }); // DO NOT UNCOMMENT, will over-write the log file!
    //   if (err) { return console.log(err); }
    // });

  } else {} // console.log('ERROR: Failure to log to file: ' + file);
    // } else { console.log('ERROR: Invalid OS: ' + currentOS); }
    // console.log('END loggers.printMessageToFile function');
    // let fd;
    // try {
    //   fd = fs.openSync('message.txt', 'a');
    //   fs.appendFileSync(fd, 'data to append', 'utf8');
    // } catch (err) {
    //   /* Handle the error */
    // } finally {
    //   if (fd !== undefined)
    //     fs.closeSync(fd);
    // }

}

;
var _default = {
  consoleLog: consoleLog,
  consoleTableLog: consoleTableLog,
  constantsValidationSummaryLog: constantsValidationSummaryLog
};
exports["default"] = _default;