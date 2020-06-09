/**
 * @file colorizer.js
 * @module colorizer
 * @description Contains all of the functions needed to manage, parse and control font styles and font colors.
 * @author Seth Hollingsead
 * @date 2020/06/09
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from './configurator';

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
  console.log('BEGIN colorizer.colorizeMessage function');
  console.log('message is: ' + message);
  console.log('className is: ' + className);
  console.log('functionName is: ' + functionName);
  console.log('debugFileSetting is: ' + debugFilesSetting);
  console.log('debugFunctionsSetting is: ' + debugFunctionsSetting);
  var colorizedMessage;
  var messageContent;
  var messageData;
  var debugFilesModuleFontStyleSetting = s.cDefault;
  var debugFilesFunctionFontStyleSetting = s.cDefault;
  var debugFilesMessageFontStyleSetting = s.cDefault;
  var debugFilesDataFontStyleSetting = s.cDefault;
  var debugFilesModuleFontColorSetting = s.cDefault;
  var debugFilesFunctionFontColorSetting = s.cDefault;
  var debugFilesMessageFontColorSetting = s.cDefault;
  var debugFilesDataFontColorSetting = s.cDefault;
  var debugFilesModuleFontBackgroundColorSetting = s.cDefault;
  var debugFilesFunctionFontBackgroundColorSetting = s.cDefault;
  var debugFilesMessageFontBackgroundColorSetting = s.cDefault;
  var debugFilesDataFontBackgroundColorSetting = s.cDefault;

  var debugFunctionsModuleFontStyleSetting = s.cDefault;
  var debugFunctionsFunctionFontStyleSetting = s.cDefault;
  var debugFunctionsMessageFontStyleSetting = s.cDefault;
  var debugFunctionsDataFontStyleSetting = s.cDefault;
  var debugFunctionsModuleFontColorSetting = s.cDefault;
  var debugFunctionsFunctionFontColorSetting = s.cDefault;
  var debugFunctionsMessageFontColorSetting = s.cDefault;
  var debugFunctionsDataFontColorSetting = s.cDefault;
  var debugFunctionsModuleFontBackgroundColorSetting = s.cDefault;
  var debugFunctionsFunctionFontBackgroundColorSetting = s.cDefault;
  var debugFunctionsMessageFontBackgroundColorSetting = s.cDefault;
  var debugFunctionsDataFontBackgroundColorSetting = s.cDefault;

  // We need a 3rd set of variables because we will need to aggregate these settings together to determine which ones are in effect.
  // One way is to aggregate each setting individually and let which ever one is defined be in effect.
  // Another way is to let the master debug functions and/or debug files setting be the controlling factor.
  // However if both of them are set to true then we should default to determine which one is in effect from either one.
  // This will also let us do additional processing on the values that come from the settings file.
  // Because some of those settings like the colors and the font styles might have multiple sub-settings.
  // The color setting will of course have R,G,B; And the style setting might have Bold|Underline, so we will of course have to parse those out.
  var aggregateModuleFontStyleUnderline = false;
  var aggregateModuleFontStyleBold = false;
  var aggregateFunctionFontStyleUnderline = false;
  var aggregateFunctionFontStyleBold = false;
  var aggregateMessageFontStyleUnderline = false;
  var aggregateMessageFontStyleBold = false;
  var aggregateDataFontStyleUnderline = false;
  var aggregateDataFontStyleBold = false;
  var aggregateModuleFontColorSetting = {};
  var aggregateFunctionFontColorSetting = {};
  var aggregateMessageFontColorSetting = {};
  var aggregateDataFontColorSetting = {};
  var aggregateModuleFontBackgroundColorSetting = {};
  var aggregateFunctionFontBackgroundColorSetting = {};
  var aggregateMessageFontBackgroundColorSetting = {};
  var aggregateDataFontBackgroundColorSetting = {};
  var aggregateUnderlineBoldArray = [];
  var messageBrokenDown = [];

  debugFilesModuleFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontStyleSetting);
  debugFilesFunctionFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontStyleSetting);
  debugFilesMessageFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontStyleSetting);
  debugFilesDataFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontStyleSetting);
  debugFilesModuleFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontColorSetting);
  debugFilesFunctionFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontColorSetting);
  debugFilesMessageFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontColorSetting);
  debugFilesDataFontColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontColorSetting);
  debugFilesModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cModuleFontBackgroundColorSetting);
  debugFilesFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cFunctionFontBackgroundColorSetting);
  debugFilesMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cMessageFontBackgroundColorSetting);
  debugFilesDataFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFiles + b.cPipe + className + b.cAt + s.cDataFontBackgroundColorSetting);

  debugFunctionsModuleFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontStyleSetting);
  debugFunctionsFunctionFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontStyleSetting);
  debugFunctionsMessageFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontStyleSetting);
  debugFunctionsDataFontStyleSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontStyleSetting);
  debugFunctionsModuleFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontColorSetting);
  debugFunctionsFunctionFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontColorSetting);
  debugFunctionsMessageFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontColorSetting);
  debugFunctionsDataFontColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontColorSetting);
  debugFunctionsModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cModuleFontBackgroundColorSetting);
  debugFunctionsFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cFunctionFontBackgroundColorSetting);
  debugFunctionsMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cMessageFontBackgroundColorSetting);
  debugFunctionsDataFontBackgroundColorSetting = configurator.getConfigurationSetting(s.cDebugFunctions + b.cPipe + className + b.cDot + functionName + b.cAt + s.cDataFontBackgroundColorSetting);

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

  // "good_luck_buddy".split(/_(.+)/)[1]
  // @see https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character
  messageBrokenDown = message.split(/:(.+)/); // Use regular expression to split on the first instance of ":" ONLY!
  // var messageContent;
  // var messageData;
  messageContent = messageBrokenDown[0];
  messageData = messageBrokenDown[1];
  if (flatMessageLog === false) {
    // TODO: Colorize all the components of the message according to the various aggregate settings captured above.
    colorizedMessage = message;
  } else if (flatMessageLog === true) {
    // TODO: Colorize the messageContent & messageData, since this is the sum-total of the message since it's a flat message.
    colorizedMessage = message;
  } else { // Just return the message as we got it and make sure it gets out!
    colorizedMessage = message; // Don't apply any colorizing to the default. We are not likely to hit this case anyway!!
  }

  console.log('colorizedMessage is: ' + message);
  console.log('END colorizer.colorizeMessage function');
  return colorizedMessage;
};

/**
 * @function aggregateStyleSetting
 * @description Compares the two input settings and determines which one of them is valuable or not valuable.
 * @param {string} settingValue1 The file level setting from the configuration file.
 * @param {string} settingValue2 The function level setting from the configuration file.
 * @param {boolean} processAsFontSetting A True or False value to indicate if we are processing True = font setting, False = color setting.
 * @return {array[boolean]} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function aggregateStyleSetting(settingValue1, settingValue2, processAsFontSetting) {
  console.log('BEGIN colorizer.aggregateFontStyleSetting function');
  console.log('settingValue1 is: ' + settingValue1);
  console.log('settingValue2 is: ' + settingValue2);
  var styles = [];
  if (settingValue1 !== s.cDefault || settingValue2 !== s.cDefault) {
    if (settingValue1 !== s.cDefault && settingValue2 === s.cDefault) {
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue1);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue1);
      }
    } else if (settingValue1 === s.cDefault && settingValue2 !== s.cDefault) {
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue1);
      }
    } else { // They both must be NOT default, so we set the aggregate value to the function setting.
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue1);
      }
    }
  }
  console.log('fontStyles settings are: ' + JSON.stringify(fontStyles));
  console.log('END colorizer.aggregateFontStyleSetting function');
  return fontStyles;
};

/**
 * @function getFontStyleSettingsFromSetting
 * @description Parses the font setting to determine if values should be set for bold and/or underline.
 * @param {string} settingValue The setting value that should be parsed.
 * @return {array[boolean]} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function getFontStyleSettingsFromSetting(settingValue) {
  console.log('BEGIN colorizer.getFontStyleSettingsFromSetting function');
  console.log('settingValue is: ' + settingValue);
  var fontStyles = ['0': false, '1': false];
  var aggregateUnderlineBoldArray = [];
  if (settingValue.includes(b.cPipe) === true) {
    aggregateUnderlineBoldArray = settingValue.split(b.cPipe);
    if (aggregateUnderlineBoldArray[0] === s.cUnderline && aggregateUnderlineBoldArray[1] === s.cBold) {
      // aggregateModuleFontStyleUnderline = true;
      // aggregateModuleFontStyleBold = true
      fontStyles['0': true, '1': true];
    } else if (aggregateUnderlineBoldArray[0] === s.cBold && aggregateUnderlineBoldArray[1] === s.cUnderline) {
      // aggregateModuleFontStyleUnderline = true;
      // aggregateModuleFontStyleBold = true
      fontStyles['0': true, '1': true];
    } else if (aggregateUnderlineBoldArray[0] === s.cUnderline && aggregateUnderlineBoldArray[1] !== s.cBold) {
      // aggregateModuleFontStyleUnderline = true;
      fontStyles['0': true, '1': false];
    } else if (aggregateUnderlineBoldArray[0] === s.cBold && aggregateUnderlineBoldArray[1] !== s.cUnderline) {
      // aggregateModuleFontStyleBold = true
      fontStyles['0': false, '1': true];
    }
  } else if (debugFilesModuleFontStyleSetting === s.cUnderline) {
    // aggregateModuleFontStyleUnderline = true;
    fontStyles['0': true, '1': false];
  } else if (debugFilesModuleFontStyleSetting === s.cBold) {
    // aggregateModuleFontStyleBold = true
    fontStyles['0': false, '1': true];
  }
  console.log('fontStyles settings are: ' + JSON.stringify(fontStyles));
  console.log('END colorizer.getFontStyleSettingsFromSetting function');
  return fontStyles;
};

/**
 * @function getColorStyleSettingFromSetting
 * @description Parses the color setting to determine if the value should be parsed or loaded from the color data tables by unique color name.
 * @param {string} settingValue The setting value, which could be RGB as in R,G,B or it could be a string-name as in a unique color name.
 * @return {array[integer]} An array of integers that represent RGB values.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function getColorStyleSettingFromSetting(settingValue) {
  console.log('BEGIN colorizer.getColorStyleSettingFromSetting function');
  var colorStyle = [s.cRed: 0, s.cGreen: 0, s.cBlue: 0];
  var aggregateColorArray = [];
  if (settingValue.includes(b.cComa) === true) {
    aggregateColorArray = settingValue.split(b.cComa);
    colorStyle[s.cRed] = aggregateColorArray[0];
    colorStyle[s.cGreen] = aggregateColorArray[1];
    colorStyle[s.cBlue] = aggregateColorArray[2];
  } else { // It must be a named color.
    colorStyle = getNamedColorData(settingValue);
  }
  console.log('colorStyle settings are: ' + JSON.stringify(colorStyle));
  console.log('END colorizer.getColorStyleSettingFromSetting function');
  return colorStyle;
};

/**
 * @function getNamedColorData
 * @description Queries the D-data structure for the named color data.
 * All of this data should have been loaded from the Colors.csv file.
 * @param {string} colorName The name of the color who's RGB value we should look up from the color data structure.
 * @return {array[integer]} An array of integers that represent RGB values.
 * @author Seth Hollingsead
 * @date 2020/06/09
 */
function getNamedColorData(colorName) {
  console.log('BEGIN colorizer.getNamedColorData function');
  console.log('colorName is: ' + colorName);
  var returnColorData = [s.cRed: 0, s.cGreen: 0, s.cBlue: 0];
  if (D[s.cColors] !== undefined) {
    if (D[s.cColors][s.cColorData] !== undefined) {
      if (D[s.cColors][s.cColorData][colorName] !== undefined) {
        returnColorData[s.cRed] = D[s.cColors][s.cColorData][colorName][s.cRed];
        returnColorData[s.cGreen] = D[s.cColors][s.cColorData][colorName][s.cGreen];
        returnColorData[s.cBlue] = D[s.cColors][s.cColorData][colorName][s.cBlue];
      } else {
        returnColorData = [s.cRed: 0, s.cGreen: 0, s.cBlue: 0];
      }
    } else {
      returnColorData = [s.cRed: 0, s.cGreen: 0, s.cBlue: 0];
    }
  } else {
    returnColorData = [s.cRed: 0, s.cGreen: 0, s.cBlue: 0];;
  }
  console.log('returnColorData is: ' + JSON.stringify(returnColorData));
  console.log('END colorizer.getNamedColorData function');

};

export default {
  colorizeMessage,
  aggregateStyleSetting,
  getFontStyleSettingsFromSetting
};
