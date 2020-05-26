import loggers from './loggers';
import * as s from '../Constants/system.constants';
var D = require('../Resources/data');
var path = require('path');
// NOTE: This file is needed to keep these lower level functions separate from the chiefConfiguration.
// Because having these functions in the chiefConfiguration can cause a circular dependency.

/**
 * @name setConfigurationSetting
 * @description Sets a configuration setting on the configuration sub-tree data structure stored on t.ctx.
 * @param {[String]} configurationName The key of the configuration setting.
 * @param {[String]} configurationValue The value of the configuration setting.
 * @author Seth Hollingsead
 * @date 2020/02/03
 * @NOTE We cannot do the usual logging here with the loggers.
 * The configuration system hasn't even been setup in some cases that this function gets called.
 * So again, we will have to rely on hard coded console logs.
 */
function setConfigurationSetting(configurationName, configurationValue) {
  // console.log('BEGIN configurator.setConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = setConfigurationSetting.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationValue is: ' + configurationValue);
  D[s.cConfiguration][configurationName] = configurationValue;
  // console.log('END configurator.setConfigurationSetting function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @name getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param  {[String]} configurationName The key of the configuration setting.
 * @return {[String/Integer/Boolean]} The value of whatever was stored in the t.ctx[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
function getConfigurationSetting(configurationName) {
  var returnConfigurationValue;
  // console.log('BEGIN configurator.getConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = getConfigurationSetting.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  if (D[s.cConfiguration] !== undefined) {
    if (D[s.cConfiguration][configurationName] !== undefined) {
      returnConfigurationValue = D[s.cConfiguration][configurationName];
    } else {
      returnConfigurationValue = undefined;
    }
  } else {
    returnConfigurationValue = undefined;
  }    
  // console.log('returnConfigurationValue is: ' + returnConfigurationValue);
  // console.log('END configurator.getConfigurationSetting function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnConfigurationValue is: ' + returnConfigurationValue);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnConfigurationValue;
};

export default {
  setConfigurationSetting,
  getConfigurationSetting
};
