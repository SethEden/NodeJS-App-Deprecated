/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as loading, setup, parsing & processing.
 * @requires module:chiefData
 * @requires module:configurator
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:timers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import chiefData from '../Controllers/chiefData';
import configurator from '../Executrix/configurator';
import ruleBroker from '../BusinessRules/ruleBroker';
import loggers from '../Executrix/loggers';
import timers from '../Executrix/timers';
import * as bas from '../Constants/basic.constants';
import * as wrd from '../Constants/word.constants';
import * as sys from '../Constants/system.constants';
import * as biz from '../Constants/business.constants';
import * as cfg from '../Constants/configuration.constants';
import * as msg from '../Constants/message.constants';
var path = require('path');
var D = require('../Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Framework.Controllers.chiefCommander.
var namespacePrefix = wrd.cFramework + bas.cDot + wrd.cControllers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setupConfiguration
 * @description Sets up all of the system configuration data.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE: The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 */
function setupConfiguration(pathAndFilename) {
  console.log('BEGIN chiefConfiguration.setupConfiguration function');
  // console.log('pathAndFilename is: ' + pathAndFilename);
  let functionName = setupConfiguration.name; // 'setupConfiguration';
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  let rules = {};
  rules[0] = biz.cswapBackSlashToForwardSlash;
  // D[wrd.cConfiguration] = {};
  pathAndFilename = ruleBroker.processRules(pathAndFilename, '', rules);
  // console.log('pathAndFilename is: ' + pathAndFilename);
  configurator.setConfigurationSetting(wrd.csystem, sys.cConfigurationPath, pathAndFilename);
  let allConfigurationData = {};
  // allConfigurationData = chiefData.setupAllXmlData(sys.cConfigurationPath, wrd.cConfiguration);
  allConfigurationData = chiefData.setupAllJsonConfigData(sys.cConfigurationPath, wrd.cConfiguration);
  parseLoadedConfigurationData(allConfigurationData);
  allConfigurationData = {};
  allConfigurationData = chiefData.setupAllCsvData(sys.cConfigurationPath, wrd.cConfiguration);
  // parseLoadedConfigurationData(allConfigurationData);

  // Get the operating system envrionment variable here and setup how to setup the log files.
  // loggers.consoleLog(msg.cLogFileEnabled, configurator.getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp));
  // loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('configurator.getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp)');
  // console.log('contents of D are: ' + JSON.stringify(D));
  console.log(configurator.getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp));
  console.log('END chiefConfiguration.setupTestConfiguration function');
};

/**
 * @function parseLoadedConfigurationData
 * @description Parses through all of the configuration data that we just loaded from the XML files and
 * adds that data to the correct data-structures in the d.[Configuration] data hive.
 * @param {object} allConfigurationData A JSON data structure object that contains all configuration meta-data
 * @return {void}
 * loaded from the Configuration XML files.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */
function parseLoadedConfigurationData(allConfigurationData) {
  // console.log('BEGIN chiefConfiguration.parseLoadedConfigurationData function');
  // console.log('allConfigurationData contents are: ' + JSON.stringify(allConfigurationData));
  // var functionName = parseLoadedConfigurationData.name;
  // loggers.consoleLog(namespacePrefix + functionName, sys.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, 'allConfigurationData is: ' + JSON.stringify(allConfigurationData));
  let highLevelSystemConfigurationContainer = {};
  let highLevelDebugConfigurationContainer = {};
  let allSystemConfigurations = {};
  let rules = {};
  let configurationElement;

  let configurationSubElement;
  let fullyQualifiedName;
  let namespace;
  let name;
  let type;
  let value;
  let version;
  let advancedDebugSettingPrefix;
  rules[0] = biz.cstringToDataType;

  highLevelSystemConfigurationContainer = allConfigurationData[wrd.csystem];
  highLevelDebugConfigurationContainer = allConfigurationData[cfg.cDebugSettings];

  for (let key in highLevelSystemConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelSystemConfigurationContainer[key];
    if (!!value || value === false) {
      fullyQualifiedName = key;

      name = processConfigurationNameRules(fullyQualifiedName);
      namespace = processConfigurationNamespaceRules(fullyQualifiedName);
      value = processConfigurationValueRules(name, value);
      value = ruleBroker.processRules(value, '', rules);
      // console.log('setting the configuration namespace: ' + namespace);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration namespace: ' + namespace);
      // console.log('setting the configuration name: ' + name);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration name: ' + name);
      // console.log('setting the configuration value: ' + value);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration value: ' + value);
      configurator.setConfigurationSetting(namespace, name, value);

      // if ((name === sys.cDebugFunctions || name === sys.cDebugFiles) && value === wrd.cMultiple) {
      //   // console.log('configurationElement is: ' + JSON.stringify(configurationElement));
      //   // loggers.consoleLog(namespacePrefix + functionName, 'configurationElement is: ' + JSON.stringify(configurationElement));
      //   allSubConfigurations = configurationElement[sys.cConfigurationElement];
      //   // console.log('allSubConfigurations is: ' + JSON.stringify(allSubConfigurations));
      //   // loggers.consoleLog(namespacePrefix + functionName, 'allSubConfigurations is: ' + JSON.stringify(allSubConfigurations));
      //   advancedDebugSettingPrefix = name;
      //   for (let subKey in allSubConfigurations) {
      //     name = '';
      //     type = '';
      //     value = '';
      //     version = '';
      //     configurationSubElement = allSubConfigurations[subKey];
      //     if (!!configurationSubElement) {
      //       name = configurationSubElement[wrd.cName];
      //       type = configurationSubElement[wrd.cType];
      //       value = configurationSubElement[wrd.cValue];
      //       version = configurationSubElement[wrd.cVersion];
      //       version = ruleBroker.processRules(version, '', rules);
      //       if (name !== '' && type !== '' && value !== '' && version !== '') {
      //         if (type === configurationsName && version === configurationsVersion) {
      //           // console.log('process advanced configuration setting: ');
      //           // loggers.consoleLog(namespacePrefix + functionName, 'process advanced configuration setting: ');
      //           // console.log('name is: ' + name);
      //           // loggers.consoleLog(namespacePrefix + functionName, 'name is: ' + name);
      //           // console.log('type is: ' + type);
      //           // loggers.consoleLog(namespacePrefix + functionName, 'type is: ' + type);
      //           // console.log('value is: ' + value);
      //           // loggers.consoleLog(namespacePrefix + functionName, 'value is: ' + value);
      //           // console.log('version is: ' + version);
      //           // loggers.consoleLog(namespacePrefix + functionName, 'version is: ' + version);
      //           value = ruleBroker.processRules(value, '', rules);
      //           configurator.setConfigurationSetting(advancedDebugSettingPrefix + bas.cPipe + name, value);
      //         }
      //       }
      //     }
      //   }
      // } else { // We are not processing any of the advanced debugging configuration settings.
      //   // These are just the regular configuration settings, and some basic debug settings.
      //   value = processConfigurationRules(name, value);
      //   value = ruleBroker.processRules(value, '', rules);
      //   // console.log('setting the configuration name: ' + name);
      //   // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration name: ' + name);
      //   // console.log('setting the configuration value: ' + value);
      //   // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration value: ' + value);
      //   configurator.setConfigurationSetting(name, value);
      // }
    }
  }

  for (let key in highLevelDebugConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelDebugConfigurationContainer[key];
    if (!!value || value === false) {
      fullyQualifiedName = key;

      name = processConfigurationNameRules(fullyQualifiedName);
      namespace = processConfigurationNamespaceRules(fullyQualifiedName);
      value = processConfigurationValueRules(name, value);
      value = ruleBroker.processRules(value, '', rules);
      // console.log('setting the configuration namespace: ' + namespace);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration namespace: ' + namespace);
      // console.log('setting the configuration name: ' + name);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration name: ' + name);
      // console.log('setting the configuration value: ' + value);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration value: ' + value);
      configurator.setConfigurationSetting(namespace, name, value);
    }
  }
  // console.log('full contents of the D are: ' + JSON.stringify(D));
  // console.log('END chiefConfiguration.parseLoadedConfigurationData function');
  // loggers.consoleLog(namespacePrefix + functionName, 'full contents of the D are: ' + JSON.stringify(D));
  // loggers.consoleLog(namespacePrefix + functionName, sys.cEND_Function);
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
  // console.log('BEGIN chiefConfiguration.processConfigurationNameRules function');
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
  // console.log('END chiefConfiguration.processConfigurationNameRules function');
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
  // console.log('BEGIN chiefConfiguration.processConfigurationNamespaceRules function');
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
  // console.log('END chiefConfiguration.processConfigurationNameRules function');
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
  // console.log('BEGIN chiefConfiguration.processConfigurationValueRules function');
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
  // console.log('END chiefConfiguration.processConfigurationValueRules function');
  return returnValue;
};

export default {
  setupConfiguration
};
