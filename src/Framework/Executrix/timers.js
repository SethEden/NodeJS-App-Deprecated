/**
 * @file timers.js
 * @module timers
 * @description Contains all of the functions needed for generating time stamps,
 * reformatting time stamps and tracking time durations.
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from './configurator';
import loggers from './loggers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var moment = require('moment');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to return the value for the day, month, year, hour, minute, and second.
 * @return {string} A time stamp string that has been formatted according to the input format.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */
function getNowMoment(formatting) {
  let functionName = getNowMoment.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // formatting is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cformattingIs + formatting);
  let returnData = '';
  returnData = moment().format(formatting);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @name computeDeltaTime
 * @description Gets the names of the beginning time and ending time, looks up those variables in the testData,
 * converts them to moment objects and uses moment to compute a time difference between the two time stamps in seconds.
 * @param {string} startTime The start of the time period that should be computed.
 * @param {string} endTime The end of the time period that should be computed.
 * @return {integer} The difference between the beginning time and ending time in milliseconds.
 * @author Seth Hollingsead
 * @date 2020/03/04 - Refactored on 2020/06/30
 */
function computeDeltaTime(startTime, endTime) {
  // console.log('BEGIN timer.computeDeltaTime function');
  // console.log('level is: ' + level);
  let functionName = computeDeltaTime.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // startTime is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cstartTimeIs + startTime);
  // endTime is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cendTimeIs + endTime);
  let deltaTimeResult;
  startTime = moment(startTime, g.cYYYYMMDD_HHmmss_SSS);
  endTime = moment(endTime, g.cYYYYMMDD_HHmmss_SSS);
  deltaTimeResult = endTime.diff(startTime); // Should work in milliseconds out of the box!
  // console.log('deltaTimeResult is: ' + deltaTimeResult);
  // console.log('END timer.computeDeltaTime function');
  // deltaTimeResult is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdeltaTimeResultIs + deltaTimeResult);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return deltaTimeResult;
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
  let functionName = reformatDeltaTime.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // deltaTime is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cdeltaTimeIs + deltaTime);
  // format is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cformatIs + format);
  let returnDeltaTime = '';
  returnDeltaTime = moment.duration(deltaTime).format(format);
  // returnDeltaTime is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDeltaTimeIs + returnDeltaTime);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnDeltaTime;
};

/**
 * @function sleep
 * @description Causes the javascript code to wait for a period of time defined by the input.
 * @param {integer} sleepTime The number of milliseconds that the system should sleep for.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/30
 * {@link https://www.sitepoint.com/delay-sleep-pause-wait/}
 */
function sleep(sleepTime) {
  let functionName = reformatDeltaTime.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // sleepTime is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.csleepTimeIs + sleepTime);
  const date = moment();
  let currentDate = null;
  do {
    currentDate = moment();
  } while (currentDate - date < sleepTime);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

export default {
  getNowMoment,
  computeDeltaTime,
  reformatDeltaTime,
  sleep
};
