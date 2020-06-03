"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rulesLibrary = void 0;

var characterGeneration = _interopRequireWildcard(require("./Rules/characterGeneration"));

var stringGeneration = _interopRequireWildcard(require("./Rules/stringGeneration"));

var stringParsing = _interopRequireWildcard(require("./Rules/stringParsing"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

var _rulesLibrary;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name rulesLibrary
 * @description The map of rules and rule names that is available to be executed iteratively.
 * @param {[String/Integer/Boolean/Map]} inputData Primary data source needed by the rule to perform its function.
 * @param {[String/Integer/Boolean/Map]} inputMetaData Additional data usually helps as giving context to the primary input or additional settings for a function.
 * @NOTE: For selector construction and selector string construction: We should not change the constant that maps to the function,
 * because we want the attribute in the XML to remain the same, However there is the possibility that the function, if named the same as the XML attribute,
 * would be a reserved word like "Parent" or "Sibling".
 * If the function is a reserved word then calling it would result in an error, and we don't want that!
 * So we should stick to the naming convention of AddXxxxx because that is in line with the purpose of the function,
 * to add Xxxxx function call to the selectorObject.
 * @author Seth Hollingsead
 * @date 2017/12/08
 */
var rulesLibrary = (_rulesLibrary = {}, _defineProperty(_rulesLibrary, s.cEcho, function (inputData, inputMetaData) {
  return inputData, inputMetaData;
}), _defineProperty(_rulesLibrary, s.cstringToBoolean, function (inputData, inputMetaData) {
  return stringParsing.stringToBoolean(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cstringToDataType, function (inputData, inputMetaData) {
  return stringParsing.stringToDataType(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cdetermineObjectDataType, function (inputData, inputMetaData) {
  return stringParsing.determineObjectDataType(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cisBoolean, function (inputData, inputMetaData) {
  return stringParsing.isBoolean(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cisInteger, function (inputData, inputMetaData) {
  return stringParsing.isInteger(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cisFloat, function (inputData, inputMetaData) {
  return stringParsing.isFloat(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cisString, function (inputData, inputMetaData) {
  return stringParsing.isString(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.csingleQuoteSwapAfterEquals, function (inputData, inputMetaData) {
  return stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cswapForwardSlashToBackSlash, function (inputData, inputMetaData) {
  return stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cswapBackSlashToForwardSlash, function (inputData, inputMetaData) {
  return stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cswapDoubleForwardSlashToSingleForwardSlash, function (inputData, inputMetaData) {
  return stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cswapDoubleBackSlashToSingleBackSlash, function (inputData, inputMetaData) {
  return stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetUserNameFromEmail, function (inputData, inputMetaData) {
  return stringParsing.getUserNameFromEmail(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.creplaceSpacesWithPlus, function (inputData, inputMetaData) {
  return stringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.creplaceColonWithUnderscore, function (inputData, inputMetaData) {
  return stringParsing.replaceColonWithUnderscore(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.creplaceCharacterWithCharacter, function (inputData, inputMetaData) {
  return stringParsing.replaceCharacterWithCharacter(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.ccleanCarriageReturnFromString, function (inputData, inputMetaData) {
  return stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cconvertStringToLowerCase, function (inputData, inputMetaData) {
  return stringParsing.convertStringToLowerCase(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cconvertStringToUpperCase, function (inputData, inputMetaData) {
  return stringParsing.convertStringToUpperCase(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetFileNameFromPath, function (inputData, inputMetaData) {
  return stringParsing.getFileNameFromPath(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cremoveFileExtensionFromFileName, function (inputData, inputMetaData) {
  return stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetValueFromAssignmentOperationString, function (inputData, inputMetaData) {
  return stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.caggregateNumericalDifferenceBetweenTwoStrings, function (inputData, inputMetaData) {
  return stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cconvertCamelCaseStringToArray, function (inputData, inputMetaData) {
  return stringParsing.convertCamelCaseStringToArray(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cconvertArrayToCamelCaseString, function (inputData, inputMetaData) {
  return stringParsing.convertArrayToCamelCaseString(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cmapWordToCamelCase, function (inputData, inputMetaData) {
  return stringParsing.mapWordToCamelCase(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.csimplifyAndConsolidateString, function (inputData, inputMetaData) {
  return stringParsing.simplifyAndConsolidateString(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.ccompareSimplifiedAndConsolidatedStrings, function (inputData, inputMetaData) {
  return stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cdoesArrayContainLowerCaseConsolidatedString, function (inputData, inputMetaData) {
  return stringParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cascertainMatchingFilenames, function (inputData, inputMetaData) {
  return stringParsing.ascertainMatchingFilenames(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cdoesArrayContainFilename, function (inputData, inputMetaData) {
  return stringParsing.doesArrayContainFilename(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetDataCatagoryFromDataContextName, function (inputData, inputMetaData) {
  return stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetDataCatagoryDetailNameFromDataContextName, function (inputData, inputMetaData) {
  return stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetKeywordNameFromDataContextName, function (inputData, inputMetaData) {
  return stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cparseSystemRootPath, function (inputData, inputMetaData) {
  return stringParsing.parseSystemRootPath(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.creplaceDoublePercentWithMessage, function (inputData, inputMetaData) {
  return stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cremoveXnumberOfFoldersFromEndOfPath, function (inputData, inputMetaData) {
  return stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgetFirstTopLevelFolderFromPath, function (inputData, inputMetaData) {
  return stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.ccreateNdigitStringFromNumber, function (inputData, inputMetaData) {
  return stringGeneration.createNdigitStringFromNumber(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseTextByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseTextByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseTextByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseTextByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseTextByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseTextByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseTextByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseTextByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseTextByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseTextByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseTextByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseTextByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomNumericCodeByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomNumericCodeByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomNumericCodeByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomNumericCodeByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomSpecialCharacterCodeByLength1, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateRandomSpecialCharacterCodeByLength2, function (inputData, inputMetaData) {
  return stringGeneration.generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateValidEmail1, function (inputData, inputMetaData) {
  return stringGeneration.generateValidEmail1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateValidEmail2, function (inputData, inputMetaData) {
  return stringGeneration.generateValidEmail2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateInvalidEmail1, function (inputData, inputMetaData) {
  return stringGeneration.generateInvalidEmail1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cgenerateInvalidEmail2, function (inputData, inputMetaData) {
  return stringGeneration.generateInvalidEmail2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateMixedCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateMixedCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateUpperCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateUpperCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateLowerCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateLowerCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateNumericCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateNumericCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateNumericCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateNumericCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateSpecialCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateSpecialCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateSpecialCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateNumberInRange1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateNumberInRange1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateNumberInRange2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateNumberInRange2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateBooleanValue1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateBooleanValue1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateBooleanValue2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateBooleanValue2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateMixedCaseAlphabeticCharacter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateMixedCaseAlphabeticCharacter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateLowerCaseLetter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateLowerCaseLetter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateUpperCaseLetter1, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.crandomlyGenerateUpperCaseLetter2, function (inputData, inputMetaData) {
  return characterGeneration.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cconvertNumberToUpperCaseLetter, function (inputData, inputMetaData) {
  return characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData);
}), _defineProperty(_rulesLibrary, s.cconvertNumberToLowerCaseLetter, function (inputData, inputMetaData) {
  return characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData);
}), _rulesLibrary);
exports.rulesLibrary = rulesLibrary;