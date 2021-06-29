"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bossPanic = exports.customEchoCommand = void 0;

var _warden = _interopRequireDefault(require("../../../../Framework/Controllers/warden"));

var bas = _interopRequireWildcard(require("../../../../Framework/Constants/basic.constants"));

var gen = _interopRequireWildcard(require("../../../../Framework/Constants/generic.constants"));

var num = _interopRequireWildcard(require("../../../../Framework/Constants/numeric.constants"));

var wrd = _interopRequireWildcard(require("../../../../Framework/Constants/word.constants"));

var sys = _interopRequireWildcard(require("../../../../Framework/Constants/system.constants"));

var biz = _interopRequireWildcard(require("../../../../Framework/Constants/business.constants"));

var cfg = _interopRequireWildcard(require("../../../../Framework/Constants/configuration.constants"));

var msg = _interopRequireWildcard(require("../../../../Framework/Constants/message.constants"));

var app_cmd = _interopRequireWildcard(require("../../Constants/application.command.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file clientCommands
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:warden
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:message-constants
 * @requires module:application-command-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var chalk = require('chalk');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Application.Commands.ClientCommands.clientCommands.

var namespacePrefix = wrd.cApplication + bas.cDot + wrd.cCommands + bas.cDot + wrd.cClient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;
/**
 * @function customEchoCommand
 * @description A quick command to validate that the new dynamic data storage technique for client commands.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */

var customEchoCommand = function customEchoCommand(inputData, inputMetaData) {
  // console.log('BEGIN clientStringParsing.customEchoCommand function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = app_cmd.ccustomEchoCommand;

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData;
  returnData = inputData + ' clientStringParsing.customEchoCommand';

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END clientStringParsing.customEcho function');


  return returnData;
};
/**
 * @function bossPanic
 * @description Prints out the entire contents of all files and their full paths on the screen
 *  in a custom length loop that makes the screen look like it is doing something busy.
 *  So anybody who looks at the screen will think you are working on something super important like: "quantum" cryptography or artificial Intelligence.
 *  (As if putting the word "Quantum" in front of everything some how makes it smarter)
 *  Could also be used to turn a computer into a movie or TV-episode set-piece to make the people standing in front of the computer seem smarter.
 *  If someone does some fake typing on the keyboard and the BossPanic command is configured to run slowly then it might look like someone is writing code super fast!
 *  Like an expert hacker!
 * @param {string} inputData The string used to load the BossPanic configuration setting.
 * This command can work with no arguments or with the any of the following optional arguments.
 * They are all numbers so if you want the 3rd one you need to provide the first 2 parameters as well.
 * inputData[1] = PerformanceIndex - This is the number of milliseconds t hat should be delayed between running each loop iteration.
 * inputData[2] = Maximum line length - The maximum number of characters that should be generated for printing on the screen.
 * inputData[3] = Maximum number of no-colored sequential lines, a smaller number means more colores lines will be generated over all.
 * inputData[4] = Maximum number of colored sequential lines, a smaller number means less colored lines will be generated sequentially.
 * inputData[5] = Boolean True or False to indicate if typing individual characters should be enabled.
 * inputData[6] = Speed-Typing Performance Index, time-out in milliseconds between typing each character.
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the command should not exit when it is completed.
 * @author Seth Hollingsead
 * @date 2021/02/22
 * @NOTE This is an INFINITE LOOP function, so press control+C to exit from the application when you want to exit.
 */


exports.customEchoCommand = customEchoCommand;

var bossPanic = function bossPanic(inputData, inputMetaData) {
  var functionName = app_cmd.cbossPanic;

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var stringLength = 0;
  var colorBreakPoint = 0;
  var stringToPrint = '';
  var subString1 = '';
  var subString2 = '';
  var brightColor1 = [];
  var darkColor1 = [];
  var brightColor2 = [];
  var darkColor2 = [];
  var colorMode1 = false;
  var colorMode2 = false;
  var enableColoredLine = false;
  var noColoredLineCount = 0;
  var coloredLineCount = 0;
  var performanceIndex = 0; // Zero is as fast as possible, this will be the delay between loop iterations in milliseconds.

  var lineLength = 10;
  var noColoredLinesMaxLength = 30;
  var coloredLinesMaxLength = 20;
  var fastTypingOutput = false;
  var speedTypingPerformanceIndex = 100; // Default to a fast typing speed.

  var systemColorLogsEnabled = _warden["default"].getConfigurationSetting(wrd.csystem, cfg.cEnableColorizedConsoleLogs); // Rather than doing the above, I'll just call the business rule to generate a random number between 1 and 100.
  // Then I can call the string generator to generate a random string of characters to match that length.
  // And we can build up each line of code that way.
  // In such a way we can have much finer control over how strings are generated and colorized without going into scanning the hard drive.


  if (inputData && inputData.length > 1) {
    performanceIndex = parseInt(inputData[1]);

    if (performanceIndex < 0) {
      performanceIndex = Math.abs(performanceIndex);
    }

    if (inputData.length > 2) {
      lineLength = parseInt(inputData[2]);

      if (lineLength < 0) {
        lineLength = Math.abs(lineLength);
      }
    }

    if (inputData.length > 3) {
      noColoredLinesMaxLength = parseInt(inputData[3]);

      if (noColoredLinesMaxLength < 0) {
        noColoredLinesMaxLength = Math.abs(noColoredLinesMaxLength);
      }
    }

    if (inputData.length > 4) {
      coloredLinesMaxLength = parseInt(inputData[4]);

      if (coloredLinesMaxLength < 0) {
        coloredLinesMaxLength = Math.abs(coloredLinesMaxLength);
      }
    }

    if (inputData.length > 5) {
      fastTypingOutput = _warden["default"].executeBusinessRule(biz.cstringToBoolean, inputData[5], '');
    }

    if (inputData.length > 6) {
      speedTypingPerformanceIndex = parseInt(inputData[6]);

      if (speedTypingPerformanceIndex < 0) {
        speedTypingPerformanceIndex = Math.abs(speedTypingPerformanceIndex);
      }
    }
  }

  while (true) {
    if (noColoredLineCount <= 0 && enableColoredLine === false) {
      noColoredLineCount = _warden["default"].executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [noColoredLinesMaxLength, false, false]);
      enableColoredLine = true;
    }

    if (coloredLineCount <= 0 && enableColoredLine === true) {
      coloredLineCount = _warden["default"].executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [coloredLinesMaxLength, false, false]);
      enableColoredLine = false;
    }

    stringLength = _warden["default"].executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [lineLength, false, false]); // Now we will generate a number between 0 and the string length, this will be the color limit so we can break the line up randomly into a beginning segement and an ending segment.
    // Each segment of the line will get a different random foreground font color and random background font color.

    colorBreakPoint = _warden["default"].executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [stringLength, false, false]);
    stringToPrint = _warden["default"].executeBusinessRule(biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2, stringLength, gen.cMostSpecialCharacters);

    if (enableColoredLine === true && systemColorLogsEnabled === true) {
      subString1 = stringToPrint.substr(0, colorBreakPoint);
      subString2 = stringToPrint.substr(colorBreakPoint, stringToPrint.length); // Determine if the first part of the string will have a light foreground and dark background or dark foreground and light background.

      if (_warden["default"].executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '') === true) {
        brightColor1 = _warden["default"].executeBusinessRule(biz.cgenerateRandomBrightColor, 200, 255);
        darkColor1 = _warden["default"].executeBusinessRule(biz.cgenerateRandomDarkColor, 0, 60);
        colorMode1 = _warden["default"].executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '');

        if (colorMode1 === true) {
          subString1 = chalk.rgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
          subString1 = chalk.bgRgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
        } else {
          subString1 = chalk.rgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
          subString1 = chalk.bgRgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
        }
      }

      if (_warden["default"].executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '') === true) {
        brightColor2 = _warden["default"].executeBusinessRule(biz.cgenerateRandomBrightColor, 200, 255);
        darkColor2 = _warden["default"].executeBusinessRule(biz.cgenerateRandomDarkColor, 0, 60);
        colorMode2 = _warden["default"].executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '');

        if (colorMode2 === true) {
          subString2 = chalk.rgb(brightColor2[0], brightColor2[1], brightColor2[2])(subString2);
          subString2 = chalk.bgRgb(darkColor2[0], darkColor2[1], darkColor2[2])(subString2);
        } else {
          subString2 = chalk.rgb(darkColor2[0], darkColor2[1], darkColor2[2])(subString2);
          subString2 = chalk.bgRgb(brightColor2[0], brightColor2[1], brightColor2[2])(subString2);
        }
      } // Now colorize the different string segments and we will recombine them before printing out to the screen.


      stringToPrint = subString1 + subString2;
      coloredLineCount--;
    } else {
      noColoredLineCount--;
    }

    if (fastTypingOutput === true) {
      for (var i = 0; i < stringToPrint.length; i++) {
        process.stdout.write(stringToPrint.charAt(i));

        _warden["default"].sleep(speedTypingPerformanceIndex);
      }

      console.log('\r');
    } else {
      console.log(stringToPrint);
    }

    _warden["default"].sleep(performanceIndex);
  }

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _warden["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};

exports.bossPanic = bossPanic;