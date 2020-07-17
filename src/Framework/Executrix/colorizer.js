/**
 * @file colorizer.js
 * @module colorizer
 * @description Contains all of the functions needed to manage, parse and control font styles and font colors.
 * @requires module:configurator
 * @requires module:ruleBroker
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:color-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/09
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from './configurator';
import ruleBroker from '../BusinessRules/ruleBroker';
import * as b from '../Constants/basic.constants';
import * as w from '../Constants/word.constants';
import * as colr from '../Constants/color.constants';
import * as s from '../Constants/system.constants';
var chalk = require('chalk');
var D = require('../Resources/data');

/**
 * @function colorizeMessage
 * @description Applies color settings to various portions of the message according to the settings from the configuration system.
 * @param {string} message The message that should be formatted and returned to be logged to the console and/or loged to a log file.
 * @param {string} className The name of the module/file that made the log call.
 * @param {string} functionName The name of the function that made the log call.
 * @param {boolean} debugFilesSetting A TRUE or FALSE value to indicate if the log should happen according to the file/module name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} debugFunctionsSetting A TRUE or FALSE value to indicate if the log should happen according to the function/method name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} flatMessageLog A TRUE or FALSE value to indicate if we are logging a flat message or if we should do additional processing.
 * We will probably do some additional processing either way, but there is a difference in the workflows.
 * For one a non-flat message will certainly have to replace a "%%" with the class path (className.functionName),
 * and the associated formatting that goes with that according to the settings.
 * @return {String} A colorized version of the message.
 * @author Seth Hollingsead
 * @date 2020/06/05
 */
function colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog) {
  // console.log('BEGIN colorizer.colorizeMessage function');
  // console.log('message is: ' + message);
  // console.log('className is: ' + className);
  // console.log('functionName is: ' + functionName);
  // console.log('debugFileSetting is: ' + debugFilesSetting);
  // console.log('debugFunctionsSetting is: ' + debugFunctionsSetting);
  let colorizedMessage;
  let messageContent;
  let messageContentPrefix;
  let messageContentSuffix;
  let messageData;
  let processingMessageData = false;
  let debugFilesModuleFontStyleSetting = w.cDefault;
  let debugFilesFunctionFontStyleSetting = w.cDefault;
  let debugFilesMessageFontStyleSetting = w.cDefault;
  let debugFilesDataFontStyleSetting = w.cDefault;
  let debugFilesModuleFontColorSetting = w.cDefault;
  let debugFilesFunctionFontColorSetting = w.cDefault;
  let debugFilesMessageFontColorSetting = w.cDefault;
  let debugFilesDataFontColorSetting = w.cDefault;
  let debugFilesModuleFontBackgroundColorSetting = w.cDefault;
  let debugFilesFunctionFontBackgroundColorSetting = w.cDefault;
  let debugFilesMessageFontBackgroundColorSetting = w.cDefault;
  let debugFilesDataFontBackgroundColorSetting = w.cDefault;

  let debugFunctionsModuleFontStyleSetting = w.cDefault;
  let debugFunctionsFunctionFontStyleSetting = w.cDefault;
  let debugFunctionsMessageFontStyleSetting = w.cDefault;
  let debugFunctionsDataFontStyleSetting = w.cDefault;
  let debugFunctionsModuleFontColorSetting = w.cDefault;
  let debugFunctionsFunctionFontColorSetting = w.cDefault;
  let debugFunctionsMessageFontColorSetting = w.cDefault;
  let debugFunctionsDataFontColorSetting = w.cDefault;
  let debugFunctionsModuleFontBackgroundColorSetting = w.cDefault;
  let debugFunctionsFunctionFontBackgroundColorSetting = w.cDefault;
  let debugFunctionsMessageFontBackgroundColorSetting = w.cDefault;
  let debugFunctionsDataFontBackgroundColorSetting = w.cDefault;

  // We need a 3rd set of variables because we will need to aggregate these settings together to determine which ones are in effect.
  // One way is to aggregate each setting individually and let which ever one is defined be in effect.
  // Another way is to let the master debug functions and/or debug files setting be the controlling factor.
  // However if both of them are set to true then we should default to determine which one is in effect from either one.
  // This will also let us do additional processing on the values that come from the settings file.
  // Because some of those settings like the colors and the font styles might have multiple sub-settings.
  // The color setting will of course have R,G,B; And the style setting might have Bold|Underline, so we will of course have to parse those out.
  let aggregateModuleFontStyleUnderline = false;
  let aggregateModuleFontStyleBold = false;
  let aggregateFunctionFontStyleUnderline = false;
  let aggregateFunctionFontStyleBold = false;
  let aggregateMessageFontStyleUnderline = false;
  let aggregateMessageFontStyleBold = false;
  let aggregateDataFontStyleUnderline = false;
  let aggregateDataFontStyleBold = false;
  let aggregateModuleFontColorSetting = {};
  let aggregateFunctionFontColorSetting = {};
  let aggregateMessageFontColorSetting = {};
  let aggregateDataFontColorSetting = {};
  let aggregateModuleFontBackgroundColorSetting = {};
  let aggregateFunctionFontBackgroundColorSetting = {};
  let aggregateMessageFontBackgroundColorSetting = {};
  let aggregateDataFontBackgroundColorSetting = {};
  let aggregateUnderlineBoldArray = [];
  let messageBrokenDown = [];
  let rules = {};
  rules[1] = s.creplaceDoublePercentWithMessage;

  debugFilesModuleFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontStyle);
  // console.log('debugFilesModuleFontStyleSetting is: ' + debugFilesModuleFontStyleSetting);
  debugFilesFunctionFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontStyle);
  // console.log('debugFilesFunctionFontStyleSetting is: ' + debugFilesFunctionFontStyleSetting);
  debugFilesMessageFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontStyle);
  // console.log('debugFilesMessageFontStyleSetting is: ' + debugFilesMessageFontStyleSetting);
  debugFilesDataFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontStyle);
  // console.log('debugFilesDataFontStyleSetting is: ' + debugFilesDataFontStyleSetting);
  debugFilesModuleFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontColor);
  // console.log('debugFilesModuleFontColorSetting is: ' + debugFilesModuleFontColorSetting);
  debugFilesFunctionFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontColor);
  // console.log('debugFilesFunctionFontColorSetting is: ' + debugFilesFunctionFontColorSetting);
  debugFilesMessageFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontColor);
  // console.log('debugFilesMessageFontColorSetting is: ' + debugFilesMessageFontColorSetting);
  debugFilesDataFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontColor);
  // console.log('debugFilesDataFontColorSetting is: ' + debugFilesDataFontColorSetting);
  debugFilesModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontBackgroundColor);
  // console.log('debugFilesModuleFontBackgroundColorSetting is: ' + debugFilesModuleFontBackgroundColorSetting);
  debugFilesFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontBackgroundColor);
  // console.log('debugFilesFunctionFontBackgroundColorSetting is: ' + debugFilesFunctionFontBackgroundColorSetting);
  debugFilesMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontBackgroundColor);
  // console.log('debugFilesMessageFontBackgroundColorSetting is: ' + debugFilesMessageFontBackgroundColorSetting);
  debugFilesDataFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontBackgroundColor);
  // console.log('debugFilesDataFontBackgroundColorSetting is: ' + debugFilesDataFontBackgroundColorSetting);

  debugFunctionsModuleFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontStyle);
  // console.log('debugFunctionsModuleFontStyleSetting is: ' + debugFunctionsModuleFontStyleSetting);
  debugFunctionsFunctionFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontStyle);
  // console.log('debugFunctionsFunctionFontStyleSetting is: ' + debugFunctionsFunctionFontStyleSetting);
  debugFunctionsMessageFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontStyle);
  // console.log('debugFunctionsMessageFontStyleSetting is: ' + debugFunctionsMessageFontStyleSetting);
  debugFunctionsDataFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontStyle);
  // console.log('debugFunctionsDataFontStyleSetting is: ' + debugFunctionsDataFontStyleSetting);
  debugFunctionsModuleFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontColor);
  // console.log('debugFunctionsModuleFontColorSetting is: ' + debugFunctionsModuleFontColorSetting);
  debugFunctionsFunctionFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontColor);
  // console.log('debugFunctionsFunctionFontColorSetting is: ' + debugFunctionsFunctionFontColorSetting);
  debugFunctionsMessageFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontColor);
  // console.log('debugFunctionsMessageFontColorSetting is: ' + debugFunctionsMessageFontColorSetting);
  debugFunctionsDataFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontColor);
  // console.log('debugFunctionsDataFontColorSetting is: ' + debugFunctionsDataFontColorSetting);
  debugFunctionsModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontBackgroundColor);
  // console.log('debugFunctionsModuleFontBackgroundColorSetting is: ' + debugFunctionsModuleFontBackgroundColorSetting);
  debugFunctionsFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontBackgroundColor);
  // console.log('debugFunctionsFunctionFontBackgroundColorSetting is: ' + debugFunctionsFunctionFontBackgroundColorSetting);
  debugFunctionsMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontBackgroundColor);
  // console.log('debugFunctionsMessageFontBackgroundColorSetting is: ' + debugFunctionsMessageFontBackgroundColorSetting);
  debugFunctionsDataFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontBackgroundColor);
  // console.log('debugFunctionsDataFontBackgroundColorSetting is: ' + debugFunctionsDataFontBackgroundColorSetting);

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesModuleFontStyleSetting, debugFunctionsModuleFontStyleSetting, true);
  aggregateModuleFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateModuleFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesFunctionFontStyleSetting, debugFunctionsFunctionFontStyleSetting, true);
  aggregateFunctionFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateFunctionFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesMessageFontStyleSetting, debugFunctionsMessageFontStyleSetting, true);
  aggregateMessageFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateMessageFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesDataFontStyleSetting, debugFunctionsDataFontStyleSetting, true);
  aggregateDataFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateDataFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateModuleFontColorSetting = aggregateStyleSetting(debugFilesModuleFontColorSetting, debugFunctionsModuleFontColorSetting, false);
  aggregateFunctionFontColorSetting = aggregateStyleSetting(debugFilesFunctionFontColorSetting, debugFunctionsFunctionFontColorSetting, false);
  aggregateMessageFontColorSetting = aggregateStyleSetting(debugFilesMessageFontColorSetting, debugFunctionsMessageFontColorSetting, false);
  aggregateDataFontColorSetting = aggregateStyleSetting(debugFilesDataFontColorSetting, debugFunctionsDataFontColorSetting, false);
  aggregateModuleFontBackgroundColorSetting = aggregateStyleSetting(debugFilesModuleFontBackgroundColorSetting, debugFunctionsModuleFontBackgroundColorSetting, false);
  aggregateFunctionFontBackgroundColorSetting = aggregateStyleSetting(debugFilesFunctionFontBackgroundColorSetting, debugFunctionsFunctionFontBackgroundColorSetting, false);
  aggregateMessageFontBackgroundColorSetting = aggregateStyleSetting(debugFilesMessageFontBackgroundColorSetting, debugFunctionsMessageFontBackgroundColorSetting, false);
  aggregateDataFontBackgroundColorSetting = aggregateStyleSetting(debugFilesDataFontBackgroundColorSetting, debugFunctionsDataFontBackgroundColorSetting, false);

  if (message.includes(b.cColon) === true) {
    messageBrokenDown = message.split(/:(.+)/); // Use regular expression to split on the first instance of ":" ONLY!
    messageContent = messageBrokenDown[0];
    messageData = messageBrokenDown[1];
    processingMessageData = true;
  } else {
    messageContent = message;
    processingMessageData = false;
  }
  // "good_luck_buddy".split(/_(.+)/)[1]
  // @see https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character
  if (flatMessageLog === false) {
    // console.log('processing flatMessageLog === false');
    // var messageContentPrefix;
    // var messageContentSuffix;
    if (messageContent.includes(b.cPercent + b.cPercent) === true) {
      messageContentPrefix = messageContent.split(' ')[0];
      messageContentSuffix = messageContent.split(' ')[2];
    }

    className = setUnderlineFontStyleOnMessageComponentAccordingToSetting(className, aggregateModuleFontStyleUnderline);
    className = setBoldFontStyleOnMessageComponentAccordingToSetting(className, aggregateModuleFontStyleBold);
    // console.log('Done processing underline & bold settings: className is: ' + className);
    functionName = setUnderlineFontStyleOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontStyleUnderline);
    functionName = setBoldFontStyleOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontStyleBold);
    // console.log('Done processing underline & bold settings: functionName is: ' + functionName);

    if (messageContent.includes(b.cPercent + b.cPercent) === true) {
      messageContentPrefix = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontStyleUnderline);
      messageContentPrefix = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontStyleBold);

      messageContentSuffix = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontStyleUnderline);
      messageContentSuffix = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontStyleBold);

      messageContentPrefix = setFontForgroundColorOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontColorSetting);
      messageContentSuffix = setFontForgroundColorOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontColorSetting);

      messageContentPrefix = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontBackgroundColorSetting);
      messageContentSuffix = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontBackgroundColorSetting);
    } else {
      messageContent = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
      messageContent = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleBold);
      // console.log('Done processing underline & bold settings: messageContent is: ' + messageContent);

      if (processingMessageData === true) {
        messageData = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleUnderline);
        messageData = setBoldFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleBold);
      }

      messageContent = setFontForgroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontColorSetting);
      // console.log('Done processing foreground color settings: messageContent is: ' + messageContent);

      messageContent = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontBackgroundColorSetting);
      // console.log('Done processing background color settings: messageContent is: ' + messageContent);
    }
    className = setFontForgroundColorOnMessageComponentAccordingToSetting(className, aggregateModuleFontColorSetting);
    // console.log('Done processing foreground color settings: classname is: ' + className);
    functionName = setFontForgroundColorOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontColorSetting);
    // console.log('Done processing foreground color settings: functionName is: ' + functionName);

    className = setFontBackgroundColorOnMessageComponentAccordingToSetting(className, aggregateModuleFontBackgroundColorSetting);
    // console.log('Done processing background color settings: className is: ' + className);
    functionName = setFontBackgroundColorOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontBackgroundColorSetting);
    // console.log('Done processing background color settings: functionName is: ' + functionName);


    if (processingMessageData === true) {
      messageData = setFontForgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontColorSetting);
      messageData = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontBackgroundColorSetting);
    }

    if (messageContent.includes(b.cPercent + b.cPercent) === true) {
      colorizedMessage = messageContentPrefix + b.cSpace + className + b.cDot + functionName + b.cSpace + messageContentSuffix;
    } else if (messageData !== undefined) {
      colorizedMessage = messageContent + b.cColon + messageData;
    } else {
      colorizedMessage = messageContent;
    }
    // colorizedMessage = messageContent.replace('%%', className + b.cDot + functionName);
    // colorizedMessage = ruleBroker.processRules(messageContent, className + b.cDot + functionName, rules);
  } else if (flatMessageLog === true) {
    // TODO: Colorize the messageContent & messageData, since this is the sum-total of the message since it's a flat message.
    messageContent = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
    messageContent = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleBold);
    if (processingMessageData === true) {
      // console.log('Attempting to format the message data component of the message: ' + messageData);
      messageData = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleUnderline);
      messageData = setBoldFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleBold);
      messageData = setFontForgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontColorSetting);
      messageData = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontBackgroundColorSetting);
      // console.log('Done formatting all of the messageData: ' + messageData);
    }
    messageContent = setFontForgroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontColorSetting);
    messageContent = setFontBackgroundColorOnMessageComponentAccordingToSetting(functionName, aggregateMessageFontBackgroundColorSetting);
    colorizedMessage = messageContent + b.cColon + messageData;
  } else { // Just return the message as we got it and make sure it gets out!
    colorizedMessage = message; // Don't apply any colorizing to the default. We are not likely to hit this case anyway!!
  }

  // console.log('colorizedMessage is: ' + colorizedMessage);
  // console.log('END colorizer.colorizeMessage function');
  return colorizedMessage;
};

/**
 * @function aggregateStyleSetting
 * @description Compares the two input settings and determines which one of them is valuable or not valuable.
 * @param {string} settingValue1 The file level setting from the configuration file.
 * @param {string} settingValue2 The function level setting from the configuration file.
 * @param {boolean} processAsFontSetting A True or False value to indicate if we are processing True = font setting, False = color setting.
 * @return {array<boolean>} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function aggregateStyleSetting(settingValue1, settingValue2, processAsFontSetting) {
  // console.log('BEGIN colorizer.aggregateStyleSetting function');
  // console.log('settingValue1 is: ' + settingValue1);
  // console.log('settingValue2 is: ' + settingValue2);
  // console.log('processAsFontSetting is: ' + processAsFontSetting);
  let styles = [];
  if ((settingValue1 !== w.cDefault || settingValue2 !== w.cDefault) && (settingValue1 !== undefined || settingValue2 !== undefined)) {
    if ((settingValue1 !== w.cDefault && settingValue2 === w.cDefault) || (settingValue1 !== undefined && settingValue2 === undefined)) {
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue1);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue1);
      }
    } else if ((settingValue1 === w.cDefault && settingValue2 !== w.cDefault) || (settingValue1 === undefined && settingValue2 !== undefined)) {
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue2);
      }
    } else { // They both must be NOT default, so we set the aggregate value to the function setting.
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue2);
      }
    }
  }
  // console.log('fontStyles settings are: ' + JSON.stringify(styles));
  // console.log('END colorizer.aggregateFontStyleSetting function');
  return styles;
};

/**
 * @function getFontStyleSettingsFromSetting
 * @description Parses the font setting to determine if values should be set for bold and/or underline.
 * @param {string} settingValue The setting value that should be parsed.
 * @return {array<boolean>} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function getFontStyleSettingsFromSetting(settingValue) {
  // console.log('BEGIN colorizer.getFontStyleSettingsFromSetting function');
  // console.log('settingValue is: ' + settingValue);
  let fontStyles = [false, false];
  let aggregateUnderlineBoldArray = [];
  if (settingValue !== undefined) {
    if (settingValue.includes(b.cPipe) === true) {
      aggregateUnderlineBoldArray = settingValue.split(b.cPipe);
      // console.log('aggregateUnderlineBoldArray is: ' + JSON.stringify(aggregateUnderlineBoldArray));
      // console.log('aggregateUnderlineBoldArray[0] is: ' + aggregateUnderlineBoldArray[0]);
      // console.log('aggregateUnderlineBoldArray[1] is: ' + aggregateUnderlineBoldArray[1]);
      if (aggregateUnderlineBoldArray[0] === w.cUnderline && aggregateUnderlineBoldArray[1] === w.cBold) {
        // aggregateModuleFontStyleUnderline = true;
        // aggregateModuleFontStyleBold = true
        fontStyles[true, true];
      } else if (aggregateUnderlineBoldArray[0] === w.cBold && aggregateUnderlineBoldArray[1] === w.cUnderline) {
        // aggregateModuleFontStyleUnderline = true;
        // aggregateModuleFontStyleBold = true
        fontStyles[true, true];
      } else if (aggregateUnderlineBoldArray[0] === w.cUnderline && aggregateUnderlineBoldArray[1] !== w.cBold) {
        // aggregateModuleFontStyleUnderline = true;
        fontStyles[true, false];
      } else if (aggregateUnderlineBoldArray[0] === w.cBold && aggregateUnderlineBoldArray[1] !== w.cUnderline) {
        // aggregateModuleFontStyleBold = true
        fontStyles[false, true];
      }
    } else if (settingValue === w.cUnderline) {
      // aggregateModuleFontStyleUnderline = true;
      fontStyles[true, false];
    } else if (settingValue === w.cBold) {
      // aggregateModuleFontStyleBold = true
      fontStyles[false, true];
    }
  }
  // console.log('fontStyles settings are: ' + JSON.stringify(fontStyles));
  // console.log('END colorizer.getFontStyleSettingsFromSetting function');
  return fontStyles;
};

/**
 * @function getColorStyleSettingFromSetting
 * @description Parses the color setting to determine if the value should be parsed or loaded from the color data tables by unique color name.
 * @param {string} settingValue The setting value, which could be RGB as in R,G,B or it could be a string-name as in a unique color name.
 * @return {array<integer>} An array of integers that represent RGB values.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function getColorStyleSettingFromSetting(settingValue) {
  // console.log('BEGIN colorizer.getColorStyleSettingFromSetting function');
  // console.log('settingValue is ' + JSON.stringify(settingValue));
  let colorStyle = {Red: 0, Green: 0, Blue: 0};
  let aggregateColorArray = [];
  if (settingValue !== undefined) {
    if (settingValue.includes(b.cComa) === true) {
      aggregateColorArray = settingValue.split(b.cComa);
      colorStyle[colr.cRed] = aggregateColorArray[0];
      colorStyle[colr.cGreen] = aggregateColorArray[1];
      colorStyle[colr.cBlue] = aggregateColorArray[2];
    } else if (settingValue === w.cDefault) {
      colorStyle = false; // Do not apply any color settings of any kind!
    } else { // It must be a named color.
      colorStyle = getNamedColorData(settingValue);
    }
  } else {
    colorStyle = false;
  }
  // console.log('colorStyle settings are: ' + JSON.stringify(colorStyle));
  // console.log('END colorizer.getColorStyleSettingFromSetting function');
  return colorStyle;
};

/**
 * @function getNamedColorData
 * @description Queries the D-data structure for the named color data.
 * All of this data should have been loaded from the Colors.csv file.
 * @param {string} colorName The name of the color who's RGB value we should look up from the color data structure.
 * @return {array<integer>} An array of integers that represent RGB values.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function getNamedColorData(colorName) {
  // console.log('BEGIN colorizer.getNamedColorData function');
  // console.log('colorName is: ' + colorName);
  let returnColorData = {Red: 0, Green: 0, Blue: 0};
  if (D[w.cColors] !== undefined) {
    if (D[w.cColors][s.cColorData] !== undefined) {
      if (D[w.cColors][s.cColorData][colorName] !== undefined) {
        returnColorData[colr.cRed] = D[w.cColors][s.cColorData][colorName][colr.cRed];
        returnColorData[colr.cGreen] = D[w.cColors][s.cColorData][colorName][colr.cGreen];
        returnColorData[colr.cBlue] = D[w.cColors][s.cColorData][colorName][colr.cBlue];
      } else {
        returnColorData = {Red: 0, Green: 0, Blue: 0};
      }
    } else {
      returnColorData = {Red: 0, Green: 0, Blue: 0};
    }
  } else {
    returnColorData = {Red: 0, Green: 0, Blue: 0};
  }
  // console.log('returnColorData is: ' + JSON.stringify(returnColorData));
  // console.log('END colorizer.getNamedColorData function');
  return returnColorData;
};

/**
 * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting
 * @description Examins the underline setting value and determines if the underline font setting should be applied to the message component or not.
 * @param {string} messageComponent The message to which the underline font setting should be applied if the setting value calls for it.
 * @param {boolean} underlineSettingValue A True or False value to indicate is the underline font setting should be applied or not applied.
 * @return {string} The same as the input string, except perhaps it might have an underline setting applied to it.
 * @author Seth Hollingsead
 * @date 2020/06/10
 */
function setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue) {
  // console.log('BEGIN colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting function');
  // console.log('messageComponent is: ' + messageComponent);
  // console.log('underlineSettingValue is: ' + underlineSettingValue);
  let returnMessageComponent = messageComponent;
  if (underlineSettingValue === true) {
    returnMessageComponent = chalk.underline(returnMessageComponent);
  }
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log('END colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting function');
  return returnMessageComponent;
};

/**
 * @function setBoldFontStyleOnMessageComponentAccordingToSetting
 * @description Examins the bold setting value and determines if the bold font setting should be applied to the message component or not.
 * @param {string} messageComponent The message to which the bold font setting should be applied if the setting value calls for it.
 * @param {boolean} boldsettingValue A True or False value to indicate if the bold font setting should be applied or not applied.
 * @return {string} The same as the input string, except perhaps it might have a bold setting applied to it.
 * @author Seth Hollingsead
 * @date 2020/06/10
 */
function setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldsettingValue) {
  // console.log('BEGIN colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting function');
  // console.log('messageComponent is: ' + messageComponent);
  // console.log('boldSettingValue is: ' + boldsettingValue);
  let returnMessageComponent = messageComponent;
  if (boldsettingValue === true) {
    returnMessageComponent = chalk.bold(returnMessageComponent);
  }
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log('END colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting function');
  return returnMessageComponent;
};

/**
 * @function setFontForgroundColorOnMessageComponentAccordingToSetting
 * @description Examines the color setting to determine if it is False,
 * if not false then it is assumed to be an array of RGB values which are assigned to the message foreground component using chalk.
 * @param {string} messageComponent The message to which the foreground color setting should be applied if the color setting value != false.
 * @param {boolean|array<integer>} colorSettingValue A value of false or an array of integers for RGB values. False if no color should be applied.
 * @return {string} The same as the input string, except perhaps it might have a foreground color setting applied to it.
 * @author Seth Hollingsead
 * @date 2020/06/10
 */
function setFontForgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue) {
  // console.log('BEGIN colorizer.setFontForgroundColorOnMessageComponentAccordingToSetting function');
  // console.log('messageComponent is: ' + messageComponent);
  // console.log('colorSettingValue is: ' + JSON.stringify(colorSettingValue));
  let returnMessageComponent = messageComponent;
  if (colorSettingValue !== false && colorSettingValue !== undefined) {
    // console.log('Red color setting value is: ' + colorSettingValue[colr.cRed]);
    // console.log('Green color setting value is: ' + colorSettingValue[colr.cGreen]);
    // console.log('Blue color setting value is: ' + colorSettingValue[colr.cBlue]);
    // console.log('Before using chalk, returnMessageComponent is: ' + returnMessageComponent);
    if (colorSettingValue[colr.cRed] !== undefined && colorSettingValue[colr.cGreen] !== undefined && colorSettingValue[colr.cBlue] !== undefined) {
      returnMessageComponent = chalk.rgb(colorSettingValue[colr.cRed], colorSettingValue[colr.cGreen], colorSettingValue[colr.cBlue])(returnMessageComponent);
    }
    // console.log('After using chalk, returnMessageComponent is: ' + returnMessageComponent);
  }
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log('END colorizer.setFontForgroundColorOnMessageComponentAccordingToSetting function');
  return returnMessageComponent;
};

/**
 * @name setFontBackgroundColorOnMessageComponentAccordingToSetting
 * @description Examins the color setting to determine if it is false,
 * if not false then it is assumed to be an array of RGB values which are assigned to the message background using chalk.
 * @param {string} messageComponent The message to which the background color setting should be applied if the color setting value != false.
 * @param {boolean|array<integer>} colorSettingValue A value of false or an array of integers for RGB values. False if no color should be applied.
 * @return {string} The same as the input string, except perhaps it might have a background color setting applied to it.
 * @author Seth Hollingsead
 * @date 2020/06/10
 */
function setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue) {
  // console.log('BEGIN colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting function');
  // console.log('messageComponent is: ' + messageComponent);
  // console.log('colorSettingValue is: ' + JSON.stringify(colorSettingValue));
  let returnMessageComponent = messageComponent;
  if (colorSettingValue !== false && colorSettingValue !== undefined) {
    // console.log('Red color setting value is: ' + colorSettingValue[colr.cRed]);
    // console.log('Green color setting value is: ' + colorSettingValue[colr.cGreen]);
    // console.log('Blue color setting value is: ' + colorSettingValue[colr.cBlue]);
    // console.log('Before using chalk, returnMessageComponent is: ' + returnMessageComponent);
    if (colorSettingValue[colr.cRed] !== undefined && colorSettingValue[colr.cGreen] !== undefined && colorSettingValue[colr.cBlue] !== undefined) {
      returnMessageComponent = chalk.bgRgb(colorSettingValue[colr.cRed], colorSettingValue[colr.cGreen], colorSettingValue[colr.cBlue])(returnMessageComponent);
    }
    // console.log('After using chalk, returnMessageComponent is: ' + returnMessageComponent);
  }
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log('END colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting function');
  return returnMessageComponent;
};

export default {
  colorizeMessage,
  aggregateStyleSetting,
  getFontStyleSettingsFromSetting,
  getColorStyleSettingFromSetting,
  getNamedColorData,
  setUnderlineFontStyleOnMessageComponentAccordingToSetting,
  setBoldFontStyleOnMessageComponentAccordingToSetting,
  setFontForgroundColorOnMessageComponentAccordingToSetting,
  setFontBackgroundColorOnMessageComponentAccordingToSetting
};
