/**
 * @file commandBroker.js
 * @module commandBroker
 * @description Executes commands by calling the appropriate command-function from the commandLibrary,
 * which will actually be stored functions on the D-Data structure.
 * @requires module:configurator
 * @requires module:commandsLibrary
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/18
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

import configurator from '../Executrix/configurator';
import * as commands from './commandsLibrary';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @function bootStrapCommands
 * @description Captures all of the commands string-to-function call map data in the commandsLibrary and migrates that data to the D-data structure.
 * This is important now because we are going to allow the client to define their own commands seperate from the system defined commands.
 * So we need a way to merge all the client defined and system defined commands into one location.
 * Then the command broker will execute commands from the D-Data structure and not the commands library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
 function bootStrapCommands() {
   var baseFileName = path.basename(module.filename, path.extname(module.filename));
   var functionName = bootStrapCommands.name;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
   commands.initCommandsLibrary();
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
 };

/**
 * @function addClientCommands
 * @description Merges client defined commands with the system defined commands.
 * @param {array<object>} clientCommands The client rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
function addClientCommands(clientCommands) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = addClientCommands.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  Object.assign(D[s.cCommands], clientCommands);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function getValidCommand
 * @description Parses the command string and returns an array that can be used to
 * enqueue or execute that command. Useful for determining if a command is a valid command and
 * working with multiple levels of delimiters for nested command calls, looking up a command alias, etc...
 * @param {string} commandString The command string that should be parsed for a valid command.
 * @param {string} commandDelimiter The delimiter that should be used to parse the command line.
 * @return {boolean|string} False if the command is not valid, otherwise it returns the command string.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */
function getValidCommand(commandString, commandDelimiter) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getValidCommand.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandString is: ' + commandString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandDelimiter is: ' + commandDelimiter);
  var returnValue = false; // Assume it is not a valid command, until we prove that it is.
  let foundValidCommand = false;
  let foundSomeCommandArgs = false;
  let commandToExecute, commandArgs;
  let commandArgsDelimiter = commandDelimiter;
  if (commandDelimiter === null || commandDelimiter !== commandDelimiter || commandDelimiter === undefined) {
    commandArgsDelimiter = b.cSpace;
  }
  if (commandString.includes(commandArgsDelimiter) === true) {
    foundSomeCommandArgs = true;
    commandArgs = commandString.split(commandArgsDelimiter);
    commandToExecute = commandArgs[0];
  } else {
    commandToExecute = commandString;
  }

  if (D[s.cCommands][commandToExecute] !== undefined) {
    foundValidCommand = true;
    returnValue = commandToExecute;
  } else {
    // NOTE: It could be that the user entered a command alias, so we will need to search through all of the command aliases,
    // to see if we can find a match, then get the actual command that should be executed.
    var allCommandAliases = D[s.cCommandsAliases][s.cCommand];
loop1:
    for (let i = 0; i < allCommandAliases.length; i++) {
      // Iterate through all of the command aliases and see if we can find a
      // command alias that matches the command the user is trying to execute.
      let currentCommand = allCommandAliases[i];
      let aliasList = currentCommand[s.cAliases];
      let arrayOfAliases = aliasList.split(b.cComa);
loop2:
      for (let j = 0; j < arrayOfAliases.length; j++) {
        if (commandToExecute === arrayOfAliases[j]) {
          foundValidCommand = true;
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandToExecute before the Alias is: ' + commandToExecute);
          commandToExecute = currentCommand[s.cName];
          loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandToExecute after the Alias is: ' + commandToExecute);
          break loop1;
        }
      }
    }
    if (foundValidCommand === true) {
      if (D[s.cCommands][commandToExecute] !== undefined) {
        returnValue = commandToExecute;
      } else {
        console.log('WARNING: The specified command: ' + commandToExecute + ' does not exist, please try again!');
      }
    } else {
      console.log('WARNING: The specified command: ' + commandToExecute + ' does not exist, please try again!');
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function getCommandArgs
 * @description Gets the arguments of the current command.
 * @param {string} commandString The command string that should be parsed for command arguments.
 * @param {string} commandDelimiter The delimiter that should be used to parse the command line.
 * @return {array<boolean|string|integer>} An array of arguments, some times these might actually be nested command calls.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */
function getCommandArgs(commandString, commandDelimiter) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getCommandArgs.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandString is: ' + commandString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandDelimiter is: ' + commandDelimiter);
  let returnValue = false;
  let foundValidCommand = false;
  let commandArgsDelimiter = commandDelimiter;
  if (commandDelimiter === null || commandDelimiter !== commandDelimiter || commandDelimiter === undefined) {
    commandArgsDelimiter = b.cSpace;
  }
  if (commandString.includes(commandArgsDelimiter) === true) {
    returnValue = commandString.split(commandArgsDelimiter);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function executeCommand
 * @description Takes a command string with all its associated arguments, data & meta-data.
 * This function will parse all of that out of the command line variable that is passed in.
 * And finally pass all of that data on to execution of the actual command.
 * @param {string} commandString The command to execute along with all the associated command arguments, data & meta-data.
 * @return {boolean} A True or False value to indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */
 function executeCommand(commandString) {
  // Here we need to do all of the parsing for the command.
  // Might be a good idea to rely on business rules to do much of the parsing for us!
  // Also don't forget this is where we will need to implement the command performance
  // tracking & command results processing such as pass-fail,
  // so that when a chain of commands has completed execution we can evaluate command statistics and metrics.
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = executeCommand.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandString is: ' + commandString);
  let returnValue = false;
  let commandToExecute = getValidCommand(commandString, configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter));
  let commandArgs = getCommandArgs(commandString, configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter));
  if (commandToExecute !== false && commandArgs !== false) {
    returnValue = D[s.cCommands][commandToExecute](commandArgs, '');
  } else if (commandToExecute !== false && commandArgs === false) {
    // This could be a command without any arguments.
    returnValue = D[s.cCommands][commandToExecute]('', '');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

 export default {
   bootStrapCommands,
   addClientCommands,
   getValidCommand,
   getCommandArgs,
   executeCommand
 };

// ********************************************************************************************************
// EARLY Command parsing experimentation
// ********************************************************************************************************
// import {PythonShell} from 'python-shell';
// //var D = require('D');
//
// // Almost works
// // import { obj } from './data.js';
// // let D = obj();
//
// // Works
// var D = require('../Resources/data');
//
// function initCommandParser(dataInput) {
//   console.log('BEGIN commandParser.initCommandParser');
//   console.log('dataInput is: ' + dataInput);
//   var returnData;
//   if (dataInput.toUpperCase() === 'EXIT') {
//     returnData = false;
//   } else {
//     if (dataInput.includes('.py') === true) {
//       // Here we will need to execute a python script.
//       console.log('begin PythonShell run');
//       let pyshell = new PythonShell('./src/hello.py');
//       console.log('End PythonShell run');
//
//       pyshell.on('message', function (message) {
//         // received a message sent from the Python script (a simple "print" statement)
//         console.log(message);
//       });
//
//       // end the input stream and allow the process to exit
//       pyshell.end(function (err,code,signal) {
//         if (err) throw err;
//         console.log('The python exit code was: ' + code);
//         console.log('The python exit signal was: ' + signal);
//         console.log('python finished');
//       });
//     } else if (dataInput.includes('data') === true) {
//       console.log('contents of D are: ' + JSON.stringify(D));
//       console.log('adding a test data field to D');
//       D['data']['ctx']['testData'] = 'testData';
//     }
//      else {
//       console.log(dataInput);
//     }
//     returnData = true;
//   }
//   console.log('returnData is: ' + returnData);
//   console.log('END commandParser.initCommandParser');
//   return returnData;
// };
//
// function start() {
//   console.log('BEGIN commandParser.start function');
//   console.log('END commandParser.start function');
// };
//
// export default {
//   initCommandParser,
//   start
// };
