"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefData = _interopRequireDefault(require("../Controllers/chiefData"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var wrd = _interopRequireWildcard(require("../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var biz = _interopRequireWildcard(require("../Constants/business.constants"));

var cfg = _interopRequireWildcard(require("../Constants/configuration.constants"));

var msg = _interopRequireWildcard(require("../Constants/message.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as loading, setup, parsing & processing.
 * @requires module:chiefData
 * @requires module:configurator
 * @requires module:ruleBroker
 * @requires module:loggers
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
var path = require('path');

var D = require('../Structures/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Framework.Controllers.chiefCommander.

var namespacePrefix = sys.cFramework + bas.cDot + wrd.cControllers + bas.cDot + baseFileName + bas.cDot;
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
  var functionName = setupConfiguration.name; // 'setupConfiguration';

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);

  var rules = {};
  rules[0] = biz.cswapBackSlashToForwardSlash; // D[wrd.cConfiguration] = {};

  pathAndFilename = _ruleBroker["default"].processRules(pathAndFilename, '', rules); // console.log('pathAndFilename is: ' + pathAndFilename);

  _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cConfigurationPath, pathAndFilename);

  var allConfigurationData = {}; // allConfigurationData = chiefData.setupAllXmlData(sys.cConfigurationPath, wrd.cConfiguration);

  allConfigurationData = _chiefData["default"].setupAllJsonConfigData(sys.cConfigurationPath, wrd.cConfiguration);
  parseLoadedConfigurationData(allConfigurationData);
  allConfigurationData = {};
  allConfigurationData = _chiefData["default"].setupAllCsvData(sys.cConfigurationPath, wrd.cConfiguration); // parseLoadedConfigurationData(allConfigurationData);
  // Get the operating system envrionment variable here and setup how to setup the log files.
  // loggers.consoleLog(msg.cLogFileEnabled, configurator.getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp));
  // loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('configurator.getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp)');
  // console.log('contents of D are: ' + JSON.stringify(D));
  // console.log(configurator.getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp));
  // console.log('END chiefConfiguration.setupTestConfiguration function');
}

;
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
  var highLevelSystemConfigurationContainer = {};
  var highLevelDebugConfigurationContainer = {};
  var allSystemConfigurations = {};
  var rules = {};
  var configurationElement;
  var configurationSubElement;
  var fullyQualifiedName;
  var namespace;
  var name;
  var type;
  var value;
  var version;
  var advancedDebugSettingPrefix;
  rules[0] = biz.cstringToDataType;
  highLevelSystemConfigurationContainer = allConfigurationData[wrd.csystem];
  highLevelDebugConfigurationContainer = allConfigurationData[cfg.cDebugSettings];

  for (var key in highLevelSystemConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelSystemConfigurationContainer[key];

    if (!!value || value === false) {
      fullyQualifiedName = key;
      name = _configurator["default"].processConfigurationNameRules(fullyQualifiedName);
      namespace = _configurator["default"].processConfigurationNamespaceRules(fullyQualifiedName);
      value = _configurator["default"].processConfigurationValueRules(name, value);
      value = _ruleBroker["default"].processRules(value, '', rules); // console.log('setting the configuration namespace: ' + namespace);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration namespace: ' + namespace);
      // console.log('setting the configuration name: ' + name);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration name: ' + name);
      // console.log('setting the configuration value: ' + value);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration value: ' + value);

      _configurator["default"].setConfigurationSetting(namespace, name, value); // console.log('contents of D are: ' + JSON.stringify(D));
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

  for (var _key in highLevelDebugConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelDebugConfigurationContainer[_key];

    if (!!value || value === false) {
      fullyQualifiedName = _key;
      name = _configurator["default"].processConfigurationNameRules(fullyQualifiedName);
      namespace = _configurator["default"].processConfigurationNamespaceRules(fullyQualifiedName);
      value = _configurator["default"].processConfigurationValueRules(name, value);
      value = _ruleBroker["default"].processRules(value, '', rules); // console.log('setting the configuration namespace: ' + namespace);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration namespace: ' + namespace);
      // console.log('setting the configuration name: ' + name);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration name: ' + name);
      // console.log('setting the configuration value: ' + value);
      // loggers.consoleLog(namespacePrefix + functionName, 'setting the configuration value: ' + value);

      _configurator["default"].setConfigurationSetting(namespace, name, value);
    }
  } // console.log('full contents of the D are: ' + JSON.stringify(D));
  // console.log('END chiefConfiguration.parseLoadedConfigurationData function');
  // loggers.consoleLog(namespacePrefix + functionName, 'full contents of the D are: ' + JSON.stringify(D));
  // loggers.consoleLog(namespacePrefix + functionName, sys.cEND_Function);

}

;
var _default = {
  setupConfiguration: setupConfiguration
};
exports["default"] = _default;