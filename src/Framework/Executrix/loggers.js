/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:configurator
 * @requires module:ruleBroker
 * @requires module:system-constants
 * @requires module:basic-constants
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from './configurator';
import ruleBroker from '../BusinessRules/ruleBroker';
import * as s from '../Constants/system.constants';
import * as b from '../Constants/basic.constants';
var fs = require('fs');
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
    var logFile = configurator.getConfigurationSetting(s.cApplicationRootPath);
    if (logFile !== undefined) {
      // console.log('logFile is !== undefined');
      var debugSetting = false;
      var outputMessage = '';
      var rules = {};
      rules[1] = s.creplaceDoublePercentWithMessage;
      logFile = logFile + configurator.getConfigurationSetting(s.cLogFilePathAndName);
      // console.log('determine if there is a configuration setting for the class path');
      debugSetting = configurator.getConfigurationSetting(classPath);
      // console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');
      if (logFile.indexOf('txt') !== -1) { // If we have a log file then we will log it to the console & file.
        consoleLogProcess(debugSetting, logFile, classPath, message, true);
      } else { // No text log file specified, proceed with the same process for console only.
        consoleLogProcess(debugSetting, undefined, classPath, message, false);
      }
    }
  }
};

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
        printMessageToFile(logFile, outputMessage);
        // console.log('done printing the message to the logfile');
      }
    }
    // console.log('Past the block of code that checks if the setting is true or not.');
  } else if (configurator.getConfigurationSetting(s.cDebugTestExhaustive) === true) {
    // console.log('else-block the DebugTestExhaustive setting is true');
    outputMessage = ruleBroker.processRules(message, classPath, rules);
    // Debug Exhaustive is probably not the best, we might want to consider another configuration setting to
    // enable or disable the console specifically. Right now there is no real business need for it.
    // If you really wanted to disable it just comment it out here.
    console.log(outputMessage);
    if (loggingToFileAndConsole === true) {
      printMessageToFile(logFile, outputMessage);
      // console.log('done printing the message to the logfile');
    }
  } else {
    // console.log('else-block we will parse the ClassPath');
    outputMessage = parseClassPath(logFile, classPath, message);
    // console.log('outputMessage is: ' + outputMessage);
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
      printMessageToFile(logFile, outputMessage);
      // console.log('DONE printing the message to the logFile');
    }

    // else {
    //   // NOTE: We should always stringify the message, because even if it's a string already,
    //   // it won't hurt to attempt to stringify it again.
    //   // But if it's some kind of an object then it's absolutely critical that we stringify it.
    //   outputMessage = JSON.stringify(message);
    //   console.log(outputMessage);
    // }
  }
  // console.log('Past all of the if-else-if-else blocks of code.');
  // console.log('END loggers.consoleLogProcess function');
  // printMessageToFile(logFile, 'END loggers.consoleLog function (File & Console)');
};

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
  var returnValue = false;

  // if (outputMessage !== false && outputMessage !== message) {
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
  }
  // console.log('returnValue is: ' + returnValue);
  // console.log('END loggers.validMessage');
  return returnValue;
};

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
  var className = '';
  var functionName = '';
  var debugFunctionsSetting = false;
  var debugFilesSetting = false;
  var classPathArray = {};
  var rules = {};
  rules[1] = s.creplaceDoublePercentWithMessage;

  classPathArray = classPath.split(b.cDot);
  // printMessageToFile(logFile, 'classPathArray contents are: ' + JSON.stringify(classPathArray));
  // printMessageToFile(logFile, 'classPathArray.length is: ' + Object.keys(classPathArray).length);
  if (Object.keys(classPathArray).length > 3) {
    // printMessageToFile(logFile, 'ERROR: Advanced debugging capability more than 3 not supported at all!');
  } else if (Object.keys(classPathArray).length === 3 ) {
    className = classPathArray[0] + b.cDot + classPathArray[1];

    // printMessageToFile(logFile, 'classPathArray contents are: ' + JSON.stringify(classPathArray));
    // printMessageToFile(logFile, 'className is: ' + className);
    functionName = classPathArray[2];
    // printMessageToFile(logFile, 'functionName is: ' + functionName);
  } else if (Object.keys(classPathArray).length === 2) {
    className = classPathArray[0];
    // printMessageToFile(logFile, 'className is: ' + className);
    functionName = classPathArray[1];
    // printMessageToFile(logFile, 'functionName is: ' + functionName);
  } else if (Object.keys(classPathArray).length === 1) {
    className = classPathArray[0];
    // printMessageToFile(logFile, 'className is: ' + className);
  } else {
    // printMessageToFile(logFile, 'ERROR: No class data, just print the message as is.');
  }
  // printMessageToFile(logFile, 'getting configuration setting value for: ' + s.cDebugFunctions + b.cPipe + className + b.cDot + functionName);
  debugFunctionsSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName);
  // printMessageToFile(logFile, 'configuration setting debugFunctionsSetting is: ' + debugFunctionsSetting);
  debugFilesSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className);
  // printMessageToFile(logFile, 'configuration setting debugFilesSetting is: ' + debugFilesSetting);
  if (debugFunctionsSetting === true || debugFilesSetting === true) {
    // message = chalk.white(message);
    // className = chalk.red.bold(className);
    // functionName = chalk.red.bold(functionName);
    // // message = message.replace('%%', className + b.cDot + functionName);
    // return ruleBroker.processRules(message, className + b.cDot + functionName, rules);
    message = colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, false);
  } else if ((debugFunctionsSetting === undefined && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === undefined && debugFilesSetting === false) ||
  (debugFunctionsSetting === false && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === false && debugFilesSetting === false)) {
    return false;
  } else {
    message = colorizeMessage(message, className, functionName, undefined, undefined, true);
    return message;
  }
};

/**
 * @function colorizeMessage
 * @description Applies color settings to various portions of the message according to the settings from the configuration system.
 * @param {string} message The message that should be formatted and returned to be logged to the console and/or loged to a log file.
 * @param {string} className The name of the module/file that made the log call.
 * @param {string} functionName The name of the function that made the log call.
 * @param {boolean} debugFilesSetting A TRUE or FALSE value to indicate if the log should happen according to the file/module name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} debugFunctionsSetting A TRUE or FALSE value to indicate if the log should happen according to the function/method name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} flatMessageLog A TRUE or FALSE value to indicate if we are logging a flat message or if we should do additional processing.
 * We will probably do some additional processing either way, but there is a difference in the workflows.
 * For one a non-flat message will certainly have to replace a "%%" with the class path (className.functionName),
 * and the associated formatting that goes with that according to the settings.
 * @return {String} A colorized version of the message.
 * @author Seth Hollingsead
 * @date 2020/06/05
 */
function colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog) {
  console.log('BEGIN loggers.colorizeMessage function');
  console.log('message is: ' + message);
  console.log('className is: ' + className);
  console.log('functionName is: ' + functionName);
  console.log('debugFileSetting is: ' + debugFilesSetting);
  console.log('debugFunctionsSetting is: ' debugFunctionsSetting);
  var colorizedMessage;
  var debugFilesModuleFontStyleSetting = "Default";
  var debugFilesFunctionFontStyleSetting = "Default";
  var debugFilesMessageFontStyleSetting = "Default";
  var debugFilesDataFontStyleSetting = "Default";
  var debugFilesModuleFontColorSetting = "Default";
  var debugFilesFunctionFontColorSetting = "Default";
  var debugFilesMessageFontColorSetting = "Default";
  var debugFilesDataFontColorSetting = "Default";
  var debugFilesModuleFontBackgroundColorSetting = "Default";
  var debugFilesFunctionFontBackgroundColorSetting = "Default";
  var debugFilesMessageFontBackgroundColorSetting = "Default";
  var debugFilesDataFontBackgroundColorSetting = "Default";

  var debugFunctionsModuleFontStyleSetting = "Default";
  var debugFunctionsFunctionFontStyleSetting = "Default";
  var debugFunctionsMessageFontStyleSetting = "Default";
  var debugFunctionsDataFontStyleSetting = "Default";
  var debugFunctionsModuleFontColorSetting = "Default";
  var debugFunctionsFunctionFontColorSetting = "Default";
  var debugFunctionsMessageFontColorSetting = "Default";
  var debugFunctionsDataFontColorSetting = "Default";
  var debugFunctionsModuleFontBackgroundColorSetting = "Default";
  var debugFunctionsFunctionFontBackgroundColorSetting = "Default";
  var debugFunctionsMessageFontBackgroundColorSetting = "Default";
  var debugFunctionsDataFontBackgroundColorSetting = "Default";

  // We need a 3rd set of variables because we will need to aggregate these settings together to determine which ones are in effect.
  // One way is to aggregate each setting individually and let which ever one is defined be in effect.
  // Another way is to let the master debug functions and/or debug files setting be the controlling factor.
  // However if both of them are set to true then we should default to determine which one is in effect from either one.
  // This will also let us do additional processing on the values that come from the settings file.
  // Because some of those settings like the colors and the font styles might have multiple sub-settings.
  // The color setting will of course have R,G,B; And the style setting might have Bold|Underline, so we will of course have to parse those out.
  var aggregateModuleFontStyleUnderline = false;
  var aggregateModuleFontStyleBold = false;
  var aggregateFunctionFontStyleUnderline = false;
  var aggregateFunctionFontStyleBold = false;
  var aggregateMessageFontStyleUnderline = false;
  var aggregateMessageFontStyleBold = false;
  var aggregateDataFontStyleUnderline = false;
  var aggregateDataFontStyleBold = false;
  var aggregateModuleFontColorSetting = {: };
  var aggregateFunctionFontColorSetting = {};
  var aggregateMessageFontColorSetting = {};
  var aggregateDataFontColorSetting = {};
  var aggregateModuleFontBackgroundColorSetting = {};
  var aggregateFunctionFontBackgroundColorSetting = {};
  var aggregateMessageFontBackgroundColorSetting = {};
  var aggregateDataFontBackgroundColorSetting = {};

  debugFilesModuleFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontStyleSetting);
  debugFilesFunctionFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontStyleSetting);
  debugFilesMessageFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontStyleSetting);
  debugFilesDataFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontStyleSetting);
  debugFilesModuleFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontColorSetting);
  debugFilesFunctionFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontColorSetting);
  debugFilesMessageFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontColorSetting);
  debugFilesDataFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontColorSetting);
  debugFilesModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontBackgroundColorSetting);
  debugFilesFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontBackgroundColorSetting);
  debugFilesMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontBackgroundColorSetting);
  debugFilesDataFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontBackgroundColorSetting);

  debugFunctionsModuleFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontStyleSetting);
  debugFunctionsFunctionFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontStyleSetting);
  debugFunctionsMessageFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontStyleSetting);
  debugFunctionsDataFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontStyleSetting);
  debugFunctionsModuleFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontColorSetting);
  debugFunctionsFunctionFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontColorSetting);
  debugFunctionsMessageFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontColorSetting);
  debugFunctionsDataFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontColorSetting);
  debugFunctionsModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontBackgroundColorSetting);
  debugFunctionsFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontBackgroundColorSetting);
  debugFunctionsMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontBackgroundColorSetting);
  debugFunctionsDataFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontBackgroundColorSetting);

  if (flatMessageLog === false) {

  } else if (flatMessageLog === true) {

  } else { // Just return the message as we got it and make sure it gets out!
    colorizedMessage = message;
  }

  console.log('colorizedMessage is: ' + message);
  console.log('END loggers.colorizeMessage function');
  return colorizedMessage;
};

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
  console.log(message);
  let fd;
  var currentOS = configurator.getConfigurationSetting(s.cOperatingSystem);
  if (currentOS === s.cWindows || currentOS === s.cLinux) {
    if (configurator.getConfigurationSetting(s.cLogFileEnabled) === true) {
      try {
        fd = fs.openSync(file, 'a');
        fs.appendFileSync(fd, message + b.cCarriageReturn + b.cNewLine, 'utf8');
      } catch (err) {
        return console.log(err);
      } finally {
        if (fd !== undefined) {
          fs.closeSync(fd);
        }
      }
      // // console.log('writing message to file: ' + file + ' message: ' + message);
      // fs.appendFile(file, message + b.cCarriageReturn + b.cNewLine, 'utf8', function(err) {
      //   // fs.writeFileSync(file, message, 'utf8', { 'flags': 'a' }); // DO NOT UNCOMMENT, will over-write the log file!
      //   if (err) { return console.log(err); }
      // });
    } else {
      // console.log('ERROR: Failure to log to file: ' + file);
    }
  } else { console.log('ERROR: Invalid OS: ' + currentOS); }
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
};

export default {
  consoleLog
};
