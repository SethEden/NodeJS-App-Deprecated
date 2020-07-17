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
import * as b from '../Constants/basic.constants';
import * as w from '../Constants/word.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

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
  // console.log('BEGIN chiefConfiguration.setupConfiguration function');
  // console.log('pathAndFilename is: ' + pathAndFilename);
  let functionName = 'setupTestConfiguration';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);
  let rules = {};
  rules[1] = s.cswapBackSlashToForwardSlash;
  D[w.cConfiguration] = {};
  pathAndFilename = ruleBroker.processRules(pathAndFilename, '', rules);
  configurator.setConfigurationSetting(s.cConfigurationPath, pathAndFilename);
  let allConfigurationData = {};
  allConfigurationData = chiefData.setupAllXmlData(s.cConfigurationPath, w.cConfiguration);
  parseLoadedConfigurationData(allConfigurationData);
  allConfigurationData = {};
  allConfigurationData = chiefData.setupAllCsvData(s.cConfigurationPath, w.cConfiguration);
  // parseLoadedConfigurationData(allConfigurationData);

  // Get the operating system envrionment variable here and setup how to setup the log files.
  loggers.consoleLog(s.cLogFileEnabled, configurator.getConfigurationSetting(s.cDateTimeSTamp));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log(configurator.getConfigurationSetting(s.cDateTimeSTamp));
  // console.log('END chiefConfiguration.setupTestConfiguration function');
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
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'allConfigurationData is: ' + JSON.stringify(allConfigurationData));
  let highLevelConfigurationContainer = {};
  let allConfigurations = {};
  let allSubConfigurations = {};
  let configurations = {};
  let singleConfigurationFile = {};
  let rules = {};
  let configurationsName; // This is the top level name for all of these configuration elements.
  let configurationsVersion;
  let configurationElement;
  // NOTE We are probably only going to have one nested level deep of configuration settings.
  // So there-fore I will hard-code the Sub-Element rather than
  // trying to add complexity to make this function recursive. That just makes things WAY to difficult.
  // If there is a business need to have many many levels deep of configurations and settings,
  // Then we can reconsider that and solve the problems to make it recursive at that time.
  // It just doesn't make sense at this time.
  let configurationSubElement;
  let name;
  let type;
  let value;
  let version;
  let advancedDebugSettingPrefix;
  rules[1] = s.cstringToDataType;

  // First we need to pull out all the high level configuration meta-data
  // about the rest of the cofiguration elements we are about to process.
  highLevelConfigurationContainer = allConfigurationData[w.cApplication][w.cConfigurations][w.cConfiguration];
  configurationsName = highLevelConfigurationContainer[s.cConfigurationName];
  // console.log('configurationsName is: ' + configurationsName);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationsName is: ' + configurationsName);
  if (highLevelConfigurationContainer[w.cCommon][s.cConfigurationElement][w.cName] === s.cVersionControl) {
    configurationsVersion = highLevelConfigurationContainer[w.cCommon][s.cConfigurationElement][w.cValue];
    configurationsVersion = ruleBroker.processRules(configurationsVersion, '', rules);
  }
  // console.log('configurationsVersion is: ' + configurationsVersion);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationsVersion is: ' + configurationsVersion);
  allConfigurations = highLevelConfigurationContainer[s.cConfigurationElements][s.cConfigurationElement];
  // console.log('allConfigurationData.length is: ' + Object.keys(allConfigurations).length);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'allConfigurationData.length is: ' + Object.keys(allConfigurations).length);

  if (configurationsVersion !== undefined && configurationsVersion !== '' &&
  configurationsName !== undefined && configurationsName !== '' &&
  !!allConfigurations && Object.keys(allConfigurations).length > 0) {
    // NOTE: Right now this is only being tested with a single configuration file.
    // but it should work with more than one configuration file.
    // I'm trying my best here to pre-design it for working with more than one configuration file.
    // But I'll probably need to revisit this code when we do
    // acutally start working with more than one configuration file.
    // Although we might actually not have more than one configuration file.
    for (let key in allConfigurations) {
      // console.log('single configurationElement is: ' + JSON.stringify(allConfigurations[key]));
      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'single configurationElement is: ' + JSON.stringify(allConfigurations[key]));
      configurationElement = allConfigurations[key];
      name = '';
      type = '';
      value = '';
      version = '';
      advancedDebugSettingPrefix = '';
      configurationSubElement = undefined;
      allSubConfigurations = {};
      if (!!configurationElement) {
        name = configurationElement[w.cName];
        type = configurationElement[w.cType];
        value = configurationElement[w.cValue];
        version = configurationElement[w.cVersion];
        version = ruleBroker.processRules(version, '', rules);
        if (name !== '' && type !== '' && value !== '' && version !== '') {
          if (type === configurationsName && version == configurationsVersion) {
            if ((name === s.cDebugFunctions || name === s.cDebugFiles) && value === w.cMultiple) {
              // console.log('configurationElement is: ' + JSON.stringify(configurationElement));
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationElement is: ' + JSON.stringify(configurationElement));
              allSubConfigurations = configurationElement[s.cConfigurationElement];
              // console.log('allSubConfigurations is: ' + JSON.stringify(allSubConfigurations));
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'allSubConfigurations is: ' + JSON.stringify(allSubConfigurations));
              advancedDebugSettingPrefix = name;
              for (let subKey in allSubConfigurations) {
                name = '';
                type = '';
                value = '';
                version = '';
                configurationSubElement = allSubConfigurations[subKey];
                if (!!configurationSubElement) {
                  name = configurationSubElement[w.cName];
                  type = configurationSubElement[w.cType];
                  value = configurationSubElement[w.cValue];
                  version = configurationSubElement[w.cVersion];
                  version = ruleBroker.processRules(version, '', rules);
                  if (name !== '' && type !== '' && value !== '' && version !== '') {
                    if (type === configurationsName && version === configurationsVersion) {
                      // console.log('process advanced configuration setting: ');
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'process advanced configuration setting: ');
                      // console.log('name is: ' + name);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'name is: ' + name);
                      // console.log('type is: ' + type);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'type is: ' + type);
                      // console.log('value is: ' + value);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
                      // console.log('version is: ' + version);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'version is: ' + version);
                      value = ruleBroker.processRules(value, '', rules);
                      configurator.setConfigurationSetting(advancedDebugSettingPrefix + b.cPipe + name, value);
                    }
                  }
                }
              }
            } else { // We are not processing any of the advanced debugging configuration settings.
              // These are just the regular configuration settings, and some basic debug settings.
              value = processConfigurationRules(name, value);
              value = ruleBroker.processRules(value, '', rules);
              // console.log('setting the configuration name: ' + name);
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'setting the configuration name: ' + name);
              // console.log('setting the configuration value: ' + value);
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'setting the configuration value: ' + value);
              configurator.setConfigurationSetting(name, value);
            }
          }
        }
      }
    }
  }
  // console.log('full contents of the D are: ' + JSON.stringify(D));
  // console.log('END chiefConfiguration.parseLoadedConfigurationData function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'full contents of the D are: ' + JSON.stringify(D));
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function processConfigurationRules
 * @description Processes a name and value to execute required code and convert string values to actual data objects needed by the configuration system.
 * @param {string} name The name of the configuration variable.
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
function processConfigurationRules(name, value) {
  // console.log('BEGIN chiefConfiguration.processConfigurationRules function');
  // console.log('name is: ' + name);
  // console.log('value is: ' + value);
  // var functionName = parseLoadedConfigurationData.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'name is: ' + name);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
  let returnValue;
  switch (name) {
    case s.cDateTimeStamp: case s.cDateStamp: case s.cTimeStamp:
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
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnValue is: ' + returnValue);
  // console.log('END chiefConfiguration.processConfigurationRules function');
  return returnValue;
};

export default {
  setupConfiguration
};
