/**
* @file unitTests.js
* @module unitTests
* @description Contains all of the commands to validate various components of the system.
* @requires module:configurator
* @requires module:ruleBroker
* @requires module:loggers
* @requires module:basic-constants
* @requires module:word-constants
* @requires module:system-constants
* @requires module:business-constants
* @requires module:command-constants
* @requires module:message-constants
* @requires {@link https://www.npmjs.com/package/path|path}
* @requires module:data
* @author Seth Hollingsead
* @date 2020/07/17
* @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
*/
import configurator from '../../Executrix/configurator';
import ruleBroker from '../../BusinessRules/ruleBroker';
import loggers from '../../Executrix/loggers';
import * as bas from '../../Constants/basic.constants';
import * as wrd from '../../Constants/word.constants';
import * as sys from '../../Constants/system.constants';
import * as biz from '../../Constants/business.constants';
import * as cmd from '../../Constants/command.constants';
import * as cfg from '../../Constants/configuration.constants';
import * as msg from '../../Constants/message.constants';
var path = require('path');
var D = require('../../../Framework/Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Framework.CommandsBlob.Commands.unitTests.
var namespacePrefix = sys.cFramework + bas.cDot + wrd.cCommands + wrd.cBlob + bas.cDot + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstants
 * @description Validates all constants with a 2-phase verification process.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/09/11
 */
export const validateConstants = function(inputData, inputMetaData) {
  let functionName = cmd.cvalidateConstants;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  // Get the array of keys and values for all the constants that need to be validated.
  let validationArray = D[sys.cConstantsValidationData][sys.cConstantsFilePaths]; // This will return an object with all the key-value pair attributes we need.
  let phase1FinalResult = true;
  let phase2FinalResult = true;
  let phase1ResultsArray = {};
  let phase2ResultsArray = {};
  let rulesPhase1 = [];
  let rulesPhase2 = [];
  rulesPhase1[0] = biz.cvalidateConstantsDataValidation;
  rulesPhase2[0] = biz.cvalidateConstantsDataValues;

  // Phase 1 Constants Validation
  // BEGIN Phase 1 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase1ConstantsValidation);
  // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
  for (let key1 in validationArray) {
    let path = validationArray[key1];
    phase1ResultsArray[key1] = ruleBroker.processRules(path, key1, rulesPhase1);
  }
  // END Phase 1 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase1ConstantsValidation);

  // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase2ConstantsValidation);
  // Now verify that the values of the contants are what they are expected to be by using the constants validation data to validate.
  for (let key2 in validationArray) {
    phase2ResultsArray[key2] = ruleBroker.processRules(key2, '', rulesPhase2);
  }
  // END Phase 2 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase2ConstantsValidation);

  for (let key3 in phase1ResultsArray) {
    loggers.constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][key3], phase1ResultsArray[key3]);
  }

  for (let key4 in phase2ResultsArray) {
    loggers.constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][key4], phase2ResultsArray[key4]);
  }

  for (let key5 in phase1ResultsArray) {
    if (phase1ResultsArray[key5] === false) {
      phase1FinalResult = false;
      break;
    }
  }

  for (let key6 in phase2ResultsArray) {
    if (phase2ResultsArray[key6] === false) {
      phase2FinalResult = false;
      break;
    }
  }

  if (phase1FinalResult === true && phase2FinalResult === true) {
    configurator.setConfigurationSetting(wrd.csystem, cfg.cPassAllConstantsValidations, true);
  } else {
    configurator.setConfigurationSetting(wrd.csystem, cfg.cPassAllConstantsValidations, false);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function validateCommandAliases
 * @description VAlidates all command aliases have no duplicates within a command, but also between commands.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2021/10/01
 */
export const validateCommandAliases = function(inputData, inputMetaData) {
  let functionName = cmd.cvalidateCommandAliases;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let allCommandAliases = D[sys.cCommandsAliases][wrd.cCommand];
  let passedAllCommandAliasesDuplicateCheck = true;
  let rules = [];
  rules[0] = biz.ccountDuplicateCommandAliases;
loop1:
  for (let i = 0; i < allCommandAliases.length; i++) {
    // BEGIN i-th loop:
    loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithLoop + i);
    let currentCommand = allCommandAliases[i];
    // currentCommand is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
    let aliasList = currentCommand[wrd.cAliases];
    // aliasList is:
    loggers.consoleLog(namespacePrefix + functionName, msg.caliasListIs + aliasList);
    let arrayOfAliases = aliasList.split(bas.cComa);
loop2:
    for (let j = 0; j < arrayOfAliases.length; j++) {
      // BEGIN j-th loop:
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_jthLoop + i);
      let currentAlias = arrayOfAliases[j];
      // currentAlias is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentAliasIs + currentAlias);
      let duplicateAliasCount = ruleBroker.processRules(currentAlias, allCommandAliases, rules);
      if (duplicateAliasCount > 1) {
        passedAllCommandAliasesDuplicateCheck = false;
      }
      // END j-th loop:
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_jthLoop + i);
    }
    // END i-th loop:
    loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithLoop + i);
  }
  if (passedAllCommandAliasesDuplicateCheck === true) {
    // PASSED: All duplicate command aliases validation tests!
    console.log(msg.cvalidateCommandAliasesMessage1);
  }
  configurator.setConfigurationSetting(wrd.csystem, cfg.cPassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};
