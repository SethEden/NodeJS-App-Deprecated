var moment = require('moment');
import configurator from './configurator';
import loggers from './loggers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to return the value for the day, month, year, hour, minute, and second.
 * @return {string} A time stamp string that has been formatted according to the input format.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function getNowMoment(formatting) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = getNowMoment.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'input formatting value is: ' + formatting);
  var returnValue = moment().format(formatting);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function reformatDeltaTime
 * @description Converts a time interval into a different kind of format.
 * @param {integer} deltaTime A time interval measured in microseconds.
 * @param {string} format The formatting template that should be used to format the time interval.
 * @return {string} A time interval formatted according to the input format template string.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function reformatDeltaTime(deltaTime, format) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = reformatDeltaTime.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'deltaTime is: ' + deltaTime);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'format is: ' + format);
  var returnDeltaTime;
  returnDeltaTime = moment.duration(deltaTime).format(format);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnDeltaTime is: ' + returnDeltaTime);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnDeltaTime;
};

export default {
  getNowMoment,
  reformatDeltaTime
};
