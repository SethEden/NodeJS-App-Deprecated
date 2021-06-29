// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file characterGeneration.js
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * There are two versions of each function, an old implementation and a new implementation.
 * @NOTE Performance analysis was completed here are the results:
┌─────────┬─────────────────────────────────────────────────────────────────────────┬───────────┬────────────────────┐
│ (index) │                                  Name                                   │  Average  │ StandardDeviation  │
├─────────┼─────────────────────────────────────────────────────────────────────────┼───────────┼────────────────────┤
│    0    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter1'           │  1.6481   │ 2.233084501311769  │
│    1    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter1'           │  1.4741   │ 1.5680335423708824 │
│    2    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter1'           │  1.4857   │ 2.0624731537647225 │
│    3    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1'    │  1.9071   │ 2.016201773136808  │
│    4    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1'    │  1.7206   │ 1.8771615913393418 │
│    5    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1'    │   1.685   │ 1.6677454841792763 │
│    6    │            'randomlyGenerateMixedCaseAlphaNumericCharacter1'            │  1.6557   │ 2.3226186751167095 │
│    7    │            'randomlyGenerateUpperCaseAlphaNumericCharacter1'            │  1.4815   │ 1.9694308187900527 │
│    8    │            'randomlyGenerateLowerCaseAlphaNumericCharacter1'            │  1.4018   │  1.37177139494886  │
│    9    │                   'randomlyGenerateNumericCharacter1'                   │  0.9817   │ 1.5121392495402006 │
│   10    │                   'randomlyGenerateSpecialCharacter1'                   │  1.0919   │ 1.5030816311831114 │
│   11    │                    'randomlyGenerateNumberInRange1'                     │  0.8734   │ 1.030326375475245  │
│   12    │                     'randomlyGenerateBooleanValue1'                     │  0.4532   │ 0.7014340738800808 │
│   13    │             'randomlyGenerateMixedCaseAlphabeticCharacter1'             │  1.4898   │ 1.5096674998158248 │
│   14    │                   'randomlyGenerateLowerCaseLetter1'                    │  1.2216   │ 1.5000311463433034 │
│   15    │                   'randomlyGenerateUpperCaseLetter1'                    │  1.3521   │ 1.9987309949067644 │
│   16    │                 'generateRandomMixedCaseTextByLength1'                  │  99.6258  │ 22.32018311663247  │
│   17    │                 'generateRandomUpperCaseTextByLength1'                  │  73.0099  │ 20.22951808595531  │
│   18    │                 'generateRandomLowerCaseTextByLength1'                  │  71.8953  │ 14.889067731392686 │
│   19    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength1'       │ 107.3136  │ 23.303691875753202 │
│   20    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength1'       │  93.1208  │ 18.53444920573566  │
│   21    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength1'       │  93.3671  │ 20.090180128361254 │
│   22    │           'generateRandomMixedCaseAlphaNumericCodeByLength1'            │ 107.6398  │ 29.277114884495585 │
│   23    │           'generateRandomUpperCaseAlphaNumericCodeByLength1'            │  95.2911  │ 21.084467287318414 │
│   24    │           'generateRandomLowerCaseAlphaNumericCodeByLength1'            │  96.0526  │ 21.597380240205034 │
│   25    │                  'generateRandomNumericCodeByLength1'                   │  55.6532  │ 11.73260967389578  │
│   26    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 133.7189  │ 29.413097130190057 │
│   27    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 116.2205  │ 24.117957619790264 │
│   28    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 113.7952  │ 19.35579130286338  │
│   29    │              'generateRandomSpecialCharacterCodeByLength1'              │  56.7322  │ 14.975549511119663 │
│   30    │                          'generateValidEmail1'                          │ 121.29785 │ 25.637797007104464 │
│   31    │                         'generateInvalidEmail1'                         │ 60.34375  │ 58.054091035322394 │
└─────────┴─────────────────────────────────────────────────────────────────────────┴───────────┴────────────────────┘
┌─────────┬─────────────────────────────────────────────────────────────────────────┬─────────┬────────────────────┐
│ (index) │                                  Name                                   │ Average │ StandardDeviation  │
├─────────┼─────────────────────────────────────────────────────────────────────────┼─────────┼────────────────────┤
│    0    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter2'           │ 0.9326  │ 1.2736001099245762 │
│    1    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter2'           │ 1.1998  │ 1.3664113436297474 │
│    2    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter2'           │ 1.1721  │ 1.8551769699951877 │
│    3    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2'    │ 1.1196  │ 1.3541402586142757 │
│    4    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2'    │ 1.1351  │ 1.1274963370229159 │
│    5    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2'    │ 2.9792  │  2.89578441186493  │
│    6    │            'randomlyGenerateMixedCaseAlphaNumericCharacter2'            │ 3.2928  │  3.70214372492479  │
│    7    │            'randomlyGenerateUpperCaseAlphaNumericCharacter2'            │  2.846  │ 2.620931895338077  │
│    8    │            'randomlyGenerateLowerCaseAlphaNumericCharacter2'            │ 2.8454  │ 2.2431448548856245 │
│    9    │                   'randomlyGenerateNumericCharacter2'                   │ 2.8697  │ 2.6386970098896674 │
│   10    │                   'randomlyGenerateSpecialCharacter2'                   │ 2.6609  │ 2.6647910218251822 │
│   11    │                    'randomlyGenerateNumberInRange2'                     │ 1.9304  │ 2.191153997326579  │
│   12    │                     'randomlyGenerateBooleanValue2'                     │ 0.6266  │ 1.215965640961947  │
│   13    │             'randomlyGenerateMixedCaseAlphabeticCharacter2'             │ 2.9963  │ 3.2733295449741773 │
│   14    │                   'randomlyGenerateLowerCaseLetter2'                    │ 3.3398  │ 3.4043113782378844 │
│   15    │                   'randomlyGenerateUpperCaseLetter2'                    │ 3.0808  │ 2.926340950743783  │
│   16    │                 'generateRandomMixedCaseTextByLength2'                  │ 76.1137 │ 20.486546129350405 │
│   17    │                 'generateRandomUpperCaseTextByLength2'                  │ 69.4909 │ 14.787316091502174 │
│   18    │                 'generateRandomLowerCaseTextByLength2'                  │ 60.8439 │ 25.049577497235223 │
│   19    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength2'       │ 22.4851 │ 2.6385560426111554 │
│   20    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength2'       │ 22.3307 │  3.86180495494013  │
│   21    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength2'       │ 22.2457 │ 3.668723416939424  │
│   22    │           'generateRandomMixedCaseAlphaNumericCodeByLength2'            │ 22.4306 │ 3.988757154803981  │
│   23    │           'generateRandomUpperCaseAlphaNumericCodeByLength2'            │ 22.1302 │ 2.3636090962764222 │
│   24    │           'generateRandomLowerCaseAlphaNumericCodeByLength2'            │ 22.0949 │ 2.121813844332074  │
│   25    │                  'generateRandomNumericCodeByLength2'                   │ 22.3365 │ 4.541659140666275  │
│   26    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.0101 │ 2.2408029788451076 │
│   27    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.6002 │ 4.254639815542473  │
│   28    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.3309 │ 2.902827103015252  │
│   29    │              'generateRandomSpecialCharacterCodeByLength2'              │ 17.3891 │ 1.4044576141700058 │
│   30    │                          'generateValidEmail2'                          │ 21.2585 │ 4.866063886756967  │
│   31    │                         'generateInvalidEmail2'                         │ 11.1406 │ 10.721717756031204 │
└─────────┴─────────────────────────────────────────────────────────────────────────┴─────────┴────────────────────┘
 * @NOTE The results speak for themselves. The numbers do not lie. The above results were generated after running each business rule 10,000 times.
 * Each time a run-time was captured and using the business rule performance metrics system to average them all and compute the standard deviation.
 * Another test run was done with just 1,000 times for each business rule. Both results are also included with the NodeJS-App root folder in TXT files.
 * In summary all of the results clearly indicate that the 2nd version of these functions is significantly more performant, and where from 2-4 times as fast.
 * HOWEVER, I do not have the heart to remove all these functions from the code base. Since this NodeJS-App Framework/Platform is intended to be forked to build custom applications, I will leave the removal of these redundant functions as an exercise for the developer who chooses to inherit this code.
 * Future versions might have this redundant code removed, but I will leave it in for now.
 * At least we now have hard evidence, knowledge, and proof as to which algorthim performs better.
 * Because knowing is half the battle! Knowledge is power!! :-D
 * @NOTE This note is included with the test results in the both the characterGeneration.js file & stringGeneration.js file.
 * @requires module:loggers
 * @requires module:stringParsing
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../../Executrix/loggers';
import { stringToBoolean } from './stringParsing';
import * as bas from '../../Constants/basic.constants';
import * as gen from '../../Constants/generic.constants';
import * as num from '../../Constants/numeric.constants';
import * as wrd from '../../Constants/word.constants';
import * as sys from '../../Constants/system.constants';
import * as biz from '../../Constants/business.constants';
import * as msg from '../../Constants/message.constants';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Framework.BusinessRules.Rules.characterGeneration.
var namespacePrefix = sys.cFramework + bas.cDot + wrd.cBusiness + wrd.cRules + bas.cDot + wrd.cRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  if (typeToGenerate === true) {
    returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseLetterOrSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateUpperCaseLetterOrSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  if (typeToGenerate === true) {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateUpperCaseLetterOrSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + gen.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateLowerCaseLetterOrSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  if (typeToGenerate === true) {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateLowerCaseLetterOrSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randommly returns a random number, a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let typeToGenerate = -1;

  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c3 = num.c3;
  let c9 = num.c9;
  let cTrue = gen.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(num.c1, [num.c3, gen.cTrue, gen.cTrue]);
  // typeToGenerate is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cCharacterGenerationMessage1 + typeToGenerate);
  switch (typeToGenerate) {
    case 1: case num.c1: // Generate a number.
      loggers.consoleLog(namespacePrefix + functionName, msg.cCharacterGenerationMessage2);
      returnData = randomlyGenerateNumberInRange1(num.c0, [num.c9, gen.cTrue, gen.cTrue]);
      break;
    case 2: case num.c2: // Generate a random upper case or lower case letter.
      loggers.consoleLog(namespacePrefix + functionName, msg.cCharacterGenerationMessage3);
      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;
    case 3: case num.c3:// Generate a special character.
      loggers.consoleLog(namespacePrefix + functionName, msg.cCharacterGenerationMessage4);
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;
    default: // DEFAULT: Generate a random upper case or lower case letter.
      loggers.consoleLog(namespacePrefix + functionName, msg.cCharacterGenerationMessage5);
      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randommly returns a random number, a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let typeToGenerate = -1

  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c3 = num.c3;
  let c9 = num.c9;
  let cTrue = gen.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(num.c1, [num.c3, gen.cTrue, gen.cTrue]);
  switch (typeToGenerate) {
    case 1: case '1': // Generate a number.
      returnData = randomlyGenerateNumberInRange1(num.c0, [num.c9, gen.cTrue, gen.cTrue]);
      break;
    case 2: case '2': // Generate a random upper case letter.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
    case 3: case '3': // Generate a special character.
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;
    default: // Default to a random upper case letter as a fall-back.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + gen.cUpperCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randonly returns a random number, a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let typeToGenerate = -1;

  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c3 = num.c3;
  let c9 = num.c9;
  let cTrue = gen.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(num.c1, [num.c3, gen.cTrue, gen.cTrue]);
  switch (typeToGenerate) {
    case 1: case num.c1: // Generate a number.
      returnData = randomlyGenerateNumberInRange1(num.c0, [num.c9, gen.cTrue, gen.cTrue]);
      break;
    case 2: case num.c2: // Generate a random lower case letter.
      returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
      break;
    case 3: case num.c3: // Generate a special character.
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;
    default: // Default to a random lower case letter as a fall-back.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randonly returns a random number, a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter1
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateMixedCaseAlphaNumericCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateMixedCaseAlphaNumericCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number
  } else {
    returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter2
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseAlphaNumericCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateMixedCaseAlphaNumericCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter1
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateUpperCaseAlphaNumericCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateUpperCaseAlphaNumericCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number.
  } else {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter2
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateUpperCaseAlphaNumericCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateUpperCaseAlphaNumericCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cUpperCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter1
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateLowerCaseAlphaNumericCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateLowerCaseAlphaNumericCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number.
  } else {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter2
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateLowerCaseAlphaNumericCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateLowerCaseAlphaNumericCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumericCharacter1
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateNumericCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateNumericCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateNumberInRange1(num.c0, [num.c9, gen.cTrue, gen.cTrue]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumericCharacter2
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateNumericCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateNumericCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateSpecialCharacter1
 * @description Randommly select a special character from a list of allowable special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A special character randomly selected from the input list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateSpecialCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateSpecialCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let cTrue = gen.cTrue;
  if (inputData) {
	  let inputDataLength = inputData.length.toString();
	  let number = randomlyGenerateNumberInRange1(num.c1, [inputDataLength, gen.cTrue, gen.cTrue]);
	  // @NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.
	  returnData = inputData.substring(number - 1, number);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateSpecialCharacter2
 * @description Randommly select a special character from a list of allowable special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A special character randomly selected from the input list of allowable special characters.
 * @NOTE: NEW implementation.
 * @NOTE This is the same implementation as version 1.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateSpecialCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateSpecialCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let cTrue = gen.cTrue;
  if (inputData) {
	  let inputDataLength = inputData.length.toString();
	  let number = randomlyGenerateNumberInRange1(num.c1, [inputDataLength, gen.cTrue, gen.cTrue]);
	  // @NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.
	  returnData = inputData.substring(number - 1, number);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumberInRange1
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData an array with multiple input parameters:
 *  maximumValue - A string that contains the number with the maximum value.
 *  includeMaximum - A Boolean value that indicates if the maximum should be included or excluded from the range of allowable range of values to return from.
 *  addMinimum - A Boolean value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateNumberInRange1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateNumberInRange1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData && inputMetaData) {
	  let minimum = parseInt(inputData);
	  let maximum = parseInt(inputMetaData[0]);
	  let addOne = stringToBoolean(inputMetaData[1], '');
	  let addMinimum = stringToBoolean(inputMetaData[2], '');
	  if (addOne === true) {
		if (addMinimum === true) {
		  returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		} else {
		  returnData = Math.floor(Math.random() * (maximum - minimum + 1));
		}
	  } else {
		if (addMinimum === true) {
		  returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
		} else {
		  returnData = Math.floor(Math.random() * (maximum - minimum));
		}
	  }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData.toString();
};

/**
 * @function randomlyGenerateNumberInRange2
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData A map with multiple input parameters:
 *  maximumValue - A string that contains the number with the maximum value.
 *  includeMaximum - A Boolean value that indicates if the maximum should be included or excluded from the range of allowable range of values to return from.
 *  addMinimum - A Boolean value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @NOTE: NEW implementation.
 * @NOTE This is the same implementation as version 1.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateNumberInRange2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateNumberInRange2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
	  let minimum = parseInt(inputData);
	  let maximum = parseInt(inputMetaData[0]);
	  let addOne = stringToBoolean(inputMetaData[1]);
	  let addMinimum = stringToBoolean(inputMetaData[2]);
	  if (addOne === true) {
		if (addMinimum === true) {
		  returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		} else {
		  returnData = Math.floor(Math.random() * (maximum - minimum + 1));
		}
	  } else {
		if (addMinimum === true) {
		  returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
		} else {
		  returnData = Math.floor(Math.random() * (maximum - minimum));
		}
	  }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData.toString();
};

/**
 * @function randomlyGenerateBooleanValue1
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value that is either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateBooleanValue1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateBooleanValue1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = Math.random() >= 0.5;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateBooleanValue2
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value that is either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @NOTE: NEW implementation.
 * @NOTE This is the same implementation as version 1.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateBooleanValue2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateBooleanValue2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = Math.random() >= 0.5;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter1
 * @description Randomly generates either an upper case or lower case random alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z or A-Z.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateMixedCaseAlphabeticCharacter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateMixedCaseAlphabeticCharacter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter2
 * @description Randomly generates either an upper case or lower case random alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z or A-Z.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseAlphabeticCharacter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateMixedCaseAlphabeticCharacter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetter1
 * @description Randomly generates a lower case alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateLowerCaseLetter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateLowerCaseLetter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c26 = num.c2 + num.c6;
  let cTrue = gen.cTrue;
  returnData = convertNumberToLowerCaseLetter(randomlyGenerateNumberInRange1(num.c1, [num.c26, gen.cTrue, gen.cTrue]));
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetter2
 * @description Randomly generates a lower case alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateLowerCaseLetter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateLowerCaseLetter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetter1
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateUpperCaseLetter1 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateUpperCaseLetter1;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c26 = num.c2 + num.c6;
  let cTrue = gen.cTrue;
  returnData = convertNumberToUpperCaseLetter(randomlyGenerateNumberInRange1(num.c1, [num.c26, gen.cTrue, gen.cTrue]));
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetter2
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateUpperCaseLetter2 = function(inputData, inputMetaData) {
  let functionName = biz.crandomlyGenerateUpperCaseLetter2;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(gen.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertNumberToUpperCaseLetter
 * @description Converts a number from 1-26 into a upper case letter of the alphabet A-Z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that should be converted to an upper case letter of the alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter A-Z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const convertNumberToUpperCaseLetter = function(inputData, inputMetaData) {
  let functionName = biz.cconvertNumberToUpperCaseLetter;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
	  let number = parseInt(inputData);
	  number--;
	  // console.log('number is: ' + number.toString(10));
	  if (number > 25 || number < 0) {
		returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
	  } else {
		returnData = gen.cUpperCaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
	  }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertNumberToLowerCaseLetter
 * @description Converts a number from 1-26 into a lower case letter of the alphabet a-z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that should be converted to a lower case letter of the alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter a-z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const convertNumberToLowerCaseLetter = function(inputData, inputMetaData) {
  let functionName = biz.cconvertNumberToLowerCaseLetter;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
	  let number = parseInt(inputData);
	  number--;
	  // console.log('number is: ' + number.toString(10));
	  if (number > 25 || number < 0) {
		returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
	  } else {
		returnData = gen.cUpperCaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
	  }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
