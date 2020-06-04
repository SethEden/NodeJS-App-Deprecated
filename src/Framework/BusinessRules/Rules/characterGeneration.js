// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * There are two versions of each function, an old implementation and a new implementation.
 * @todo There is a need to evaluate performance of each version of these functions and
 * determine which version is more performant before they are cleaned up.
 * @author Seth Hollingsead
 * @date 2020/06/04
 */
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as s from '../../Constants/system.constants';
var path = require('path');

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter1
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateMixedCaseLetterOrSpecialCharacter1 = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  if (typeToGenerate === true) {
    returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter2
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @NOTE: NEW implementation.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseLetterOrSpecialCharacter2 = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  if (typeToGenerate === true) {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var typeToGenerate = -1;
  typeToGenerate = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  if (typeToGenerate === true) {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + b.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var typeToGenerate = -1;

  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var c3 = b.c3;
  var c9 = b.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(b.c1, {c3, cTrue, cTrue});
  switch (typeToGenerate) {
    case 1: // Generate a number.
      returnData = randomlyGenerateNumberInRange1(b.c0, {c9, cTrue, cTrue});
      break;
    case 2: // Generate a random upper case or lower case letter.
      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;
    case 3: // Generate a special characters.
      returnData = randommlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;
    default: // Default to a random upper case or lower case letter as a fall-back.
      returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
      break;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet + b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var typeToGenerate = -1

  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var c3 = b.c3;
  var c9 = b.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(b.c1, {c3, cTrue, cTrue});
  switch (typeToGenerate) {
    case 1: // Generate a number.
      returnData = randomlyGenerateNumberInRange1(b.c0, {c9, cTrue, cTrue});
      break;
    case 2: // Generate a random upper case letter.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
    case 3: // Generate a special character.
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;
    default: // Default to a random upper case letter as a fall-back.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + g.cUpperCaseEnglishAlphabet + b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var typeToGenerate = -1;

  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var c3 = b.c3;
  var c9 = b.c9;
  var cTrue = g.cTrue;
  typeToGenerate = randomlyGenerateNumberInRange1(b.c1, {c3, cTrue, cTrue});
  switch (typeToGenerate) {
    case 1: // Generate a number.
      returnData = randomlyGenerateNumberInRange1(b.c0, {c9, cTrue, cTrue});
      break;
    case 2: // Generate a random lower case letter.
      returnData = randomlyGenerateLowerCaseLetter(inputData, inputMetaData);
      break;
    case 3: // Generate a special character.
      returnData = randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
      break;
    default: // Default to a random lower case letter as a fall-back.
      returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
      break;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(inputData + b.cLowerCaseEnglishAlphabet + b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphaNumericCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number
  } else {
    returnData = randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphaNumericCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet + b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseAlphaNumericCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number.
  } else {
    returnData = randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseAlphaNumericCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  if (randomlyGenerateBooleanValueu(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateNumericCharacter1(inputData, inputMetaData); // Generate a number.
  } else {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(b.cLowerCaseEnglishAlphabet + b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumericCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var c9 = b.c9;
  var cTrue = g.cTrue;
  returnData = randomlyGenerateNumberInRange(b.c0, {c9, cTrue, cTrue});
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumericCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(b.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateSpecialCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var cTrue = g.cTrue;
  var inputDataLength = inputData.length.toString();
  var number = randomlyGenerateNumberInRange1(b.c1, {inputDataLength, cTrue, cTrue});
  // @NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.
  returnData = inputData.substring(number - 1, number);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateSpecialCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var cTrue = g.cTrue;
  var inputDataLength = inputData.length.toString();
  var number = randomlyGenerateNumberInRange1(b.c1, {inputDataLength, cTrue, cTrue});
  // @NOTE: The STring.length() above is a 1-base count, the STring.substring is zero-based.
  returnData = inputData.substring(number - 1, number);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumberInRange1
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {map} inputMetaData A map with multiple input parameters:
 *  maximumValue - A string that contains the number with the maximum value.
 *  includeMaximum - A Boolean value that indicates if the maximum should be included or excluded from the range of allowable range of values to return from.
 *  addMinimum - A Boolean value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/05
 */
export const randomlyGenerateNumberInRange1 = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumberInRange1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var minimum = parseInt(inputData);
  var maximum = parseInt(inputMetaData[0]);
  var addOne = StringToBoolean(inputMetaData[1]);
  var addMinimum = StringToBoolean(inputMetaData[2]);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData.toString();
};

/**
 * @function randomlyGenerateNumberInRange2
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {map} inputMetaData A map with multiple input parameters:
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateNumberInRange2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var minimum = parseInt(inputData);
  var maximum = parseInt(inputMetaData[0]);
  var addOne = StringToBoolean(inputMetaData[1]);
  var addMinimum = StringToBoolean(inputMetaData[2]);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateBooleanValue1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = Math.random() >= 0.5;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateBooleanValue2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = Math.random() >= 0.5;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  if (randomlyGenerateBooleanValue1(inputData, inputMetaData) === true) {
    returnData = randomlyGenerateBooleanValue1(inputData, inputMetaData);
  } else {
    returnData = randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet + b.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var c26 = b.c2 + b.c6;
  var cTrue = g.cTrue;
  returnData = convertNumberToLowerCaseLetter(randomlyGenerateNumberInRange1(b.c1, {c26, cTrue, cTrue}));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateLowerCaseLetter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(b.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseLetter1;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  var c26 = b.c2 + b.c6;
  var cTrue = g.cTrue;
  returnData = convertNumberToUpperCaseLetter(randomlyGenerateNumberInRange1(b.c1, {c26, cTrue, cTrue}));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.crandomlyGenerateUpperCaseLetter2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  returnData = randomlyGenerateSpecialCharacter2(g.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cconvertNumberToUpperCaseLetter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var number = parseInt(inputData);
  number--;
  // console.log('number is: ' + number.toString(10));
  if (number > 25 || number < 0) {
    returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
  } else {
    returnData = g.cUppercaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cconvertNumberToLowerCaseLetter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = '';
  var number = parseInt(inputData);
  number--;
  // console.log('number is: ' + number.toString(10));
  if (number > 25 || number < 0) {
    returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
  } else {
    returnData = g.cUppercaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
