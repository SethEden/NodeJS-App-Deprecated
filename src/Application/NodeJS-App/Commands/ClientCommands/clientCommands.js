/**
 * @file clientCommands
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:warden
 * @requires module:basic-constants
 * @requires module:numeric-constants
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
import warden from '../../../../Framework/Controllers/warden';
import * as bas from '../../../../Framework/Constants/basic.constants';
import * as gen from '../../../../Framework/Constants/generic.constants';
import * as num from '../../../../Framework/Constants/numeric.constants';
import * as sys from '../../../../Framework/Constants/system.constants';
import * as biz from '../../../../Framework/Constants/business.constants';
import * as cfg from '../../../../Framework/Constants/configuration.constants';
import * as msg from '../../../../Framework/Constants/message.constants';
import * as app_cmd from '../../Constants/application.command.constants';

var path = require('path');
var chalk = require('chalk');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wrd.cApplication + bas.cDot + wrd.cCommands + bas.cDot + wrd.cClient + wrd.cCommands + bas.cDot; // Application.Commands.ClientCommands.

/**
 * @function customEchoCommand
 * @description A quick command to validate that the new dynamic data storage technique for client commands.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
export const customEchoCommand = function(inputData, inputMetaData) {
  // console.log('BEGIN clientStringParsing.customEchoCommand function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = app_cmd.ccustomEchoCommand;
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cinputDataIs + inputData);
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  returnData = inputData + ' clientStringParsing.customEchoCommand';
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cEND_Function);
  // console.log('returnData is: ' + returnData);
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
export const bossPanic = function(inputData, inputMetaData) {
  let functionName = app_cmd.cbossPanic;
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cinputDataIs + inputData);
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let stringLength = 0;
  let colorBreakPoint = 0;
  let stringToPrint = '';
  let subString1 = '';
  let subString2 = '';
  let brightColor1 = [];
  let darkColor1 = [];
  let brightColor2 = [];
  let darkColor2 = [];
  let colorMode1 = false;
  let colorMode2 = false;
  let enableColoredLine = false;
  let noColoredLineCount = 0;
  let coloredLineCount = 0;
  let performanceIndex = 0; // Zero is as fast as possible, this will be the delay between loop iterations in milliseconds.
  let lineLength = 10;
  let noColoredLinesMaxLength = 30;
  let coloredLinesMaxLength = 20;
  let fastTypingOutput = false;
  let speedTypingPerformanceIndex = 100; // Default to a fast typing speed.
  let systemColorLogsEnabled = warden.getConfigurationSetting(cfg.cEnableColorizedConsoleLogs);

  // Rather than doing the above, I'll just call the business rule to generate a random number between 1 and 100.
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
      fastTypingOutput = warden.executeBusinessRule(biz.cstringToBoolean, inputData[5], '');
    }
    if (inputData.length > 6) {
      speedTypingPerformanceIndex = parseInt(inputData[6]);
      if (speedTypingPerformanceIndex < 0) {
        speedTypingPerformanceIndex = Math.abs(speedTypingPerformanceIndex);
      }
    }
  }
  while(true) {
    if (noColoredLineCount <= 0 && enableColoredLine === false) {
      noColoredLineCount = warden.executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [noColoredLinesMaxLength, false, false]);
      enableColoredLine = true;
    }
    if (coloredLineCount <= 0 && enableColoredLine === true) {
      coloredLineCount = warden.executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [coloredLinesMaxLength, false, false]);
      enableColoredLine = false;
    }
    stringLength = warden.executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [lineLength, false, false]);
    // Now we will generate a number between 0 and the string length, this will be the color limit so we can break the line up randomly into a beginning segement and an ending segment.
    // Each segment of the line will get a different random foreground font color and random background font color.
    colorBreakPoint = warden.executeBusinessRule(biz.crandomlyGenerateNumberInRange2, num.c1, [stringLength, false, false]);
    stringToPrint = warden.executeBusinessRule(biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2, stringLength, gen.cMostSpecialCharacters);
    if (enableColoredLine === true && systemColorLogsEnabled === true) {
      subString1 = stringToPrint.substr(0, colorBreakPoint);
      subString2 = stringToPrint.substr(colorBreakPoint, stringToPrint.length);
      // Determine if the first part of the string will have a light foreground and dark background or dark foreground and light background.

      if (warden.executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '') === true) {
        brightColor1 = warden.executeBusinessRule(biz.cgenerateRandomBrightColor, 200, 255);
        darkColor1 = warden.executeBusinessRule(biz.cgenerateRandomDarkColor, 0, 60);
        colorMode1 = warden.executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '');
        if (colorMode1 === true) {
          subString1 = chalk.rgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
          subString1 = chalk.bgRgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
        } else {
          subString1 = chalk.rgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
          subString1 = chalk.bgRgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
        }
      }
      if (warden.executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '') === true) {
        brightColor2 = warden.executeBusinessRule(biz.cgenerateRandomBrightColor, 200, 255);
        darkColor2 = warden.executeBusinessRule(biz.cgenerateRandomDarkColor, 0, 60);
        colorMode2 = warden.executeBusinessRule(biz.crandomlyGenerateBooleanValue1, '', '');
        if (colorMode2 === true) {
          subString2 = chalk.rgb(brightColor2[0], brightColor2[1], brightColor2[2])(subString2);
          subString2 = chalk.bgRgb(darkColor2[0], darkColor2[1], darkColor2[2])(subString2);
        } else {
          subString2 = chalk.rgb(darkColor2[0], darkColor2[1], darkColor2[2])(subString2);
          subString2 = chalk.bgRgb(brightColor2[0], brightColor2[1], brightColor2[2])(subString2);
        }
      }
      // Now colorize the different string segments and we will recombine them before printing out to the screen.
      stringToPrint = subString1 + subString2;
      coloredLineCount--;
    } else {
      noColoredLineCount--;
    }
    if (fastTypingOutput === true) {
      for (let i = 0; i < stringToPrint.length; i++) {
        process.stdout.write(stringToPrint.charAt(i));
        warden.sleep(speedTypingPerformanceIndex);
      }
      console.log('\r');
    } else {
      console.log(stringToPrint);
    }
    warden.sleep(performanceIndex);
  }

  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.creturnDataIs + returnData);
  warden.consoleLog(namespacePrefix + baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return returnData;
};
