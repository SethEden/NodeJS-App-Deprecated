// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file mathOperations
 * @module mathOperations
 * @description Contains all of the business rule functions for doing math operations and conversions.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/07/01
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as s from '../../Constants/system.constants';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function hex2rgbConversion
 * @description Converts an hexidecimal color value to an RGB color value.
 * @param {string} inputData The hexidecimal value that should be converted to an RGB value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<integer,integer,integer>} The RGB value.
 * @author Seth Hollingsead
 * @date 2020/07/01
 * {@link: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb}
 */
export const hex2rgbConversion = function(inputData, inputMetaData) {
  let functionName = s.chex2rgbConversion;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    return false;
  }
  // A few different ways to implement this business rule, see link above.
  // Personally I like the version that doesn't have a big ugly regular expression that is impossible to understand and debug.
  // But that is just a personal/professional opinion,
  // I am sure others have their own reasons to choose the regular expression technique,
  // perhaps performance constraints, etc...
  // I am including the alternate algorthim below as reference in case someone ever wants/needs it,
  // as an alternative to the below implementation.

  // function hexToRgb(hex) {
  //   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //   return result ? {
  //     r: parseInt(result[1], 16),
  //     g: parseInt(result[2], 16),
  //     b: parseInt(result[3], 16)
  //   } : null;
  // }

  let bigInteger = parseInt(inputData, 16);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'bigInteger is: ' + bigInteger);
  let red = (bigInteger >> 16) & 255;
  let green = (bigInteger >> 8) & 255;
  let blue = bigInteger & 255;
  returnData = [red, green, blue];
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
