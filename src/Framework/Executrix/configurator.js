/**
 * @file configurator.js
 * @module configurator
 * @description Contains the functions necessary to set and get configuration settings from the shared data structure.
 * @requires module:loggers
 * @requires module:timers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * @NOTE This file is needed to keep these lower level functions separate from the chiefConfiguration.
 * Because having these functions in the chiefConfiguration can cause a circular dependency.
 */
import loggers from './loggers';
import timers from './timers';
import * as bas from '../Constants/basic.constants';
import * as wrd from '../Constants/word.constants';
import * as sys from '../Constants/system.constants';
var path = require('path');
var D = require('../Structures/data');
// var namespacePrefix = sys.cFramework + bas.cDot + wrd.cExecutrix + bas.cDot + baseFileName + bas.cDot;
// var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration sub-tree data structure stored on D-data structure.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the configuration setting should be set.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/02/03
 * @NOTE We cannot do the usual logging here with the loggers.
 * The configuration system hasn't even been setup in some cases that this function gets called.
 * So again, we will have to rely on hard coded console logs.
 */
function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  // console.log('BEGIN configurator.setConfigurationSetting function');
  // console.log('configurationNamespace is: ' + JSON.stringify(configurationNamespace));
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  // let functionName = setConfigurationSetting.name;
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationValue is: ' + configurationValue);
  // D[wrd.cConfiguration][configurationName] = configurationValue;
  let namespaceConfigObject = getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  if (namespaceConfigObject) {
    namespaceConfigObject[configurationNamespace + bas.cDot + configurationName] = configurationValue;
  }
  // console.log('END configurator.setConfigurationSetting function');
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cEND_Function);
};

/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean} The value of whatever was stored in the D[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
function getConfigurationSetting(configurationNamespace, configurationName) {
  let returnConfigurationValue;
  // console.log('BEGIN configurator.getConfigurationSetting function');
  // console.log('configurationNamespace is: ' + configurationNamespace);
  // console.log('configurationName is: ' + configurationName);
  // let functionName = getConfigurationSetting.name;
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationNamespace is: ' + configurationNamespace);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  let namespaceConfigObject = undefined;
  namespaceConfigObject = getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  // console.log('namespaceConfigObject is: ' + JSON.stringify(namespaceConfigObject));
  if (namespaceConfigObject) {
    returnConfigurationValue = namespaceConfigObject[configurationNamespace + bas.cDot + configurationName];
  }
  // if (D[wrd.cConfiguration] !== undefined) {
  //   if (D[wrd.cConfiguration][configurationName] !== undefined) {
  //     returnConfigurationValue = D[wrd.cConfiguration][configurationName];
  //   } else {
  //     returnConfigurationValue = undefined;
  //   }
  // } else {
  //   returnConfigurationValue = undefined;
  // }
  // console.log('returnConfigurationValue is: ' + returnConfigurationValue);
  // console.log('END configurator.getConfigurationSetting function');
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'returnConfigurationValue is: ' + returnConfigurationValue);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cEND_Function);
  return returnConfigurationValue;
};

/**
 * @function processConfigurationNameRules
 * @description Processes a fully qualified name and extracts the configuration name without the namespace.
 * @param {string} fullyQualifiedName The fully qualified name with the namespace included.
 * @return {string} The name of the configuration setting without the namespace.
 * @author Seth Hollingsead
 * @date 2021/06/16
 * @NOTE: The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */
function processConfigurationNameRules(fullyQualifiedName) {
  // console.log('BEGIN configurator.processConfigurationNameRules function');
  // console.log('fullyQualifiedName is: ' + fullyQualifiedName);
  // var functionName = processConfigurationNameRules.name;
  // loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, 'fullyQualifiedName is: ' + fullyQualifiedName);
  let returnValue;
  let fullyQualifiedNameArray = fullyQualifiedName.split(bas.cDot);
  returnValue = fullyQualifiedNameArray[fullyQualifiedNameArray.length - 1];

  // loggers.consoleLog(namespacePrefix + functionName, 'returnValue is: ' + returnValue);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('returnValue is: ' + returnValue);
  // console.log('END configurator.processConfigurationNameRules function');
  return returnValue;
};

/**
 * @function processConfigurationNamespaceRules
 * @description Processes a fully qualified name and extracts the namespace.
 * @param {string} fullyQualifiedName The fully qualified name with the namespace included.
 * @return {string} The namespace of the configuration setting, without the configuration name.
 * @author Seth Hollingsead
 * @date 2021/06/16
 * @NOTE: The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */
function processConfigurationNamespaceRules(fullyQualifiedName) {
  // console.log('BEGIN configurator.processConfigurationNamespaceRules function');
  // console.log('fullyQualifiedName is: ' + fullyQualifiedName);
  // var functionName = processConfigurationNamespaceRules.name;
  // loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, 'fullyQualifiedName is: ' + fullyQualifiedName);
  let returnValue;
  returnValue = fullyQualifiedName.substr(0, fullyQualifiedName.lastIndexOf(bas.cDot));
  if (returnValue.includes(sys.cDebugFunctions) || returnValue.includes(sys.cDebugFiles)) {
    // We need to strip off the "DebugFunctions" & "DebugFiles" prefixes along with the pipe that delimits them.
    // At some point we might need these as seperate designations, like for the colorizer logic, but for now, until there is a business need I will keep them unified.
    // Everything to the right all falls under the designation of "DebugSettings" so that as the base for the namespace tree should work perfectly.
    let parsedDebugSettingsNamespace = returnValue.split(bas.cPipe);
    returnValue = parsedDebugSettingsNamespace[1];
  }
  // loggers.consoleLog(namespacePrefix + functionName, 'returnValue is: ' + returnValue);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('returnValue is: ' + returnValue);
  // console.log('END configurator.processConfigurationNameRules function');
  return returnValue;
};

/**
 * @function processConfigurationValueRules
 * @description Processes a name and value to execute required code and convert string values to actual data objects needed by the configuration system.
 * @param {string} name The name of the configuration variable, without the namespace.
 * @param {string} value The value of the configuration variable.
 * @return {string|boolean|integer|float|object} A value that is appropriately processed.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE: The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */
function processConfigurationValueRules(name, value) {
  // console.log('BEGIN configurator.processConfigurationValueRules function');
  // console.log('name is: ' + name);
  // console.log('value is: ' + value);
  // var functionName = processConfigurationValueRules.name;
  // loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, 'name is: ' + name);
  // loggers.consoleLog(namespacePrefix + functionName, 'value is: ' + value);
  let returnValue;
  switch (name) {
    case sys.cDateTimeStamp: case sys.cDateStamp: case sys.cTimeStamp:
      // NOTE: All of these three configurations are processed exactly the same way.
      // As long as what is stored in the configuration file is correct, then they should be processed correctly here.
      // return moment().format(value);0
      returnValue = timers.getNowMoment(value);
      break;
    default: // We don't know what the value is.
      // We have to just return the value as it was passed in, no processing.
      // We don't want to corrupt the other data that may be passed into this function.
      returnValue = value;
      break;
  }
  // loggers.consoleLog(namespacePrefix + functionName, 'returnValue is: ' + returnValue);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('returnValue is: ' + returnValue);
  // console.log('END configurator.processConfigurationValueRules function');
  return returnValue;
};

/**
 * @function getConfigurationNamespaceObject
 * @description Navigates the configuration JSON data object tree to find the namespace of configuration settings.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the configuration setting should be set.
 * @return {object|boolean} The object found at the specified namespace address in the configuration data object, or False if nothing was found.
 * @author Seth Hollingsead
 * @date 2021/03/31
 */
function getConfigurationNamespaceObject(configurationNamespace) {
  console.log('BEGIN configurator.getConfigurationNamespaceObject function');
  console.log('configurationNamespace is: ' + JSON.stringify(configurationNamespace));
  let returnValue = true; // Assume there will be a return value;
  let configurationDataRoot = D[wrd.cConfiguration];
  let configurationPathObject = configurationDataRoot;
  if (!configurationPathObject) { // Need to handle the case that the configuration data object doesn't even exist at all!
    D[wrd.cConfiguration] = {};
    configurationDataRoot = D[wrd.cConfiguration];
    configurationPathObject = configurationDataRoot;
  }
  for (let i = 0; i < configurationNamespace.length; i++) {
    // if (i === configurationNamespace.length - 1) {
      // We are dealing with a leaf-node.
      if (!configurationPathObject[configurationNamespace[i]]) {
        // It doesn't exist yet, so lets make it.
        configurationPathObject[configurationNamespace[i]] = {};
      }
      configurationPathObject = configurationPathObject[configurationNamespace[i]];
    // }
    // else {
    //   // So if it exists then we package it up, if not then return false, because the path doesn't exist.
    //   if (configurationPathObject[configurationNamespace[i]]) {
    //     configurationPathObject = configurationPathObject[configurationNamespace[i]];
    //   } else {
    //     returnValue = false;
    //     break; // End the for-loop, the entire namespace address was not found.
    //   }
    // }
  } // End for-loop (let i = 0; i < configurationNamespace.length; i++)
  if (returnValue === true) {
    returnValue = configurationPathObject
  }
  console.log('returnValue is: ' + JSON.stringify(returnValue));
  console.log('END configurator.getConfigurationNamespaceObject function');
  return returnValue;
};

export default {
  setConfigurationSetting,
  getConfigurationSetting,
  processConfigurationNameRules,
  processConfigurationNamespaceRules,
  processConfigurationValueRules
};
