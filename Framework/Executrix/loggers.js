import configurator from './configurator';
import ruleBroker from '../BusinessRules/ruleBroker';
import * as s from '../Constants/system.constants';
import * as b from '../Constants/basic.constants';
var D = require('../Resources/data');
var fs = require('fs');

/**
 * @name consoleLog
 * @description compares the class path to a series of configuration settings to determine
 * if we should log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @NOTE When it comes to dumping large amounts of data out of a script the console will not do,
 * and dumping data to an output log file is critical to debugging certain tests and workflows.
 * @param {[String]} classPath The class path for the caller of this funciton file.function or class.method.
 * @param {[String]} message The message or data contents that should be dumped to the output.
 * @author Seth Hollingsead
 * @date 2020/03/11
 */
function consoleLog(classPath, message) {
  if (Object.keys(D).length !== 0) {
    var logFile = configurator.getConfigurationSetting(s.cApplicationRootPath);
    if (logFile !== undefined) {
      logFile = logFile + configurator.getConfigurationSetting(s.cLogFilePathAndName);
      if (logFile.indexOf('txt') !== -1) {
        // printMessageToFile(logFile, 'BEGIN loggers.consoleLog function');
        // printMessageToFile(logFile, 'classPath is: ' + classPath);
        // printMessageToFile(logFile, 'message is: ' + message);
        var debugSetting = false;
        var outputMessage = '';
        var rules = {};
        rules[1] = s.creplaceDoublePercentWithMessage;

        // console.log('determine if there is a configuration setting for the class path');
        debugSetting = configurator.getConfigurationSetting(classPath);
        // console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');
        if (debugSetting !== undefined) {
          // console.log('the debugSetting is not undefined, now check if it is true or not');
          if (debugSetting === true) {
            // console.log('the debugSetting is true now stringify it');
            outputMessage = JSON.stringify(message);
            // console.log(outputMessage);
            printMessageToFile(logFile, outputMessage);
          }
          // console.log('Past the block of code that checks if the setting is true or not.');
        } else if (configurator.getConfigurationSetting(s.cDebugTestExhaustive) === true) {
          // console.log('else-block the DebugTestExhaustive setting is true');
          outputMessage = ruleBroker.processRules(message, classPath, rules);
          printMessageToFile(logFile, outputMessage);
          // console.log('done printing the message to the logfile');
        } else {
          // console.log('else-block we will parse the ClassPath');
          outputMessage = parseClassPath(logFile, classPath, message);
          if (outputMessage !== false) {
              printMessageToFile(logFile, outputMessage);
          }
          // console.log('DONE printing the message to the logFile');
          // else {
          //   // NOTE: We should always stringify the message, because even if it's a string already,
          //   // it won't hurt to attempt to stringify it again.
          //   // But if it's some kind of an object then it's absolutely critical that we stringify it.
          //   outputMessage = JSON.stringify(message);
          //   console.log(outputMessage);
          // }
        }
        // console.log('Past all of the if-else-if-else blocks of code');
        // printMessageToFile(logFile, 'END loggers.consoleLog function');
      }
    }
  }
};

/**
 * @name parseClassPath
 * @description parses the class path and message pulling it apart for logging and looking at custom debug settings.
 * @param {[String]} logFile The file name and path to the log file were the data should be printed.
 * @param {[String]} classPath The class path for the caller of this funciton file.function or class.method.
 * @param {[String]} message The message or data contents that should be dumped to the output.
 * @return {[String]} Returns the message that should be printed out to the console and logged to the log file.
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
    return message.replace('%%', className + b.cDot + functionName);
    return ruleBroker.processRules(message, className + b.cDot + functionName, rules);
  } else if ((debugFunctionsSetting === undefined && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === undefined && debugFilesSetting === false) ||
  (debugFunctionsSetting === false && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === false && debugFilesSetting === false)) {
    return false;
  } else {
    return message;
  }
};

/**
 * @name printMessageToFile
 * @description Prints a message to a log text file.
 * @param {[String]} file The file path and file name where message data should be printed.
 * @param {[String]} message The message that should be logged to the log file if the specific flag is true.
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
