"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRulesLibrary = void 0;

var characterGeneration = _interopRequireWildcard(require("./Rules/characterGeneration"));

var stringGeneration = _interopRequireWildcard(require("./Rules/stringGeneration"));

var stringParsing = _interopRequireWildcard(require("./Rules/stringParsing"));

var mathOperations = _interopRequireWildcard(require("./Rules/mathOperations"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var D = require('../Resources/data');
/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/15
 */


var initRulesLibrary = function initRulesLibrary() {
  var _D$s$cBusinessRules;

  // console.log('BEGIN rulesLibrary.initRulesLibrary');
  D[s.cBusinessRules] = {};
  D[s.cBusinessRules] = (_D$s$cBusinessRules = {}, _defineProperty(_D$s$cBusinessRules, s.cEcho, function (inputData, inputMetaData) {
    return inputData, inputMetaData;
  }), _defineProperty(_D$s$cBusinessRules, s.cstringToBoolean, function (inputData, inputMetaData) {
    return stringParsing.stringToBoolean(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cstringToDataType, function (inputData, inputMetaData) {
    return stringParsing.stringToDataType(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdetermineObjectDataType, function (inputData, inputMetaData) {
    return stringParsing.determineObjectDataType(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisBoolean, function (inputData, inputMetaData) {
    return stringParsing.isBoolean(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisInteger, function (inputData, inputMetaData) {
    return stringParsing.isInteger(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisFloat, function (inputData, inputMetaData) {
    return stringParsing.isFloat(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisString, function (inputData, inputMetaData) {
    return stringParsing.isString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.csingleQuoteSwapAfterEquals, function (inputData, inputMetaData) {
    return stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cswapForwardSlashToBackSlash, function (inputData, inputMetaData) {
    return stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cswapBackSlashToForwardSlash, function (inputData, inputMetaData) {
    return stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cswapDoubleForwardSlashToSingleForwardSlash, function (inputData, inputMetaData) {
    return stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cswapDoubleBackSlashToSingleBackSlash, function (inputData, inputMetaData) {
    return stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetUserNameFromEmail, function (inputData, inputMetaData) {
    return stringParsing.getUserNameFromEmail(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.creplaceSpacesWithPlus, function (inputData, inputMetaData) {
    return stringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.creplaceColonWithUnderscore, function (inputData, inputMetaData) {
    return stringParsing.replaceColonWithUnderscore(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.creplaceCharacterWithCharacter, function (inputData, inputMetaData) {
    return stringParsing.replaceCharacterWithCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.ccleanCarriageReturnFromString, function (inputData, inputMetaData) {
    return stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertStringToLowerCase, function (inputData, inputMetaData) {
    return stringParsing.convertStringToLowerCase(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertStringToUpperCase, function (inputData, inputMetaData) {
    return stringParsing.convertStringToUpperCase(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetFileNameFromPath, function (inputData, inputMetaData) {
    return stringParsing.getFileNameFromPath(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetFileExtension, function (inputData, inputMetaData) {
    return stringParsing.getFileExtension(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cremoveDotFromFileExtension, function (inputData, inputMetaData) {
    return stringParsing.removeDotFromFileExtension(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cremoveFileExtensionFromFileName, function (inputData, inputMetaData) {
    return stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetValueFromAssignmentOperationString, function (inputData, inputMetaData) {
    return stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.caggregateNumericalDifferenceBetweenTwoStrings, function (inputData, inputMetaData) {
    return stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertCamelCaseStringToArray, function (inputData, inputMetaData) {
    return stringParsing.convertCamelCaseStringToArray(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdoesStringContainUpperCaseCharacter, function (inputData, inputMetaData) {
    return stringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdoesStringContainLowerCaseCharacter, function (inputData, inputMetaData) {
    return stringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisFirstCharacterLowerCase, function (inputData, inputMetaData) {
    return stringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisFirstCharacterUpperCase, function (inputData, inputMetaData) {
    return stringParsing.isFirstCharacterUpperCase(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisStringList, function (inputData, inputMetaData) {
    return stringParsing.isStringList(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisStringCamelCase, function (inputData, inputMetaData) {
    return stringParsing.isStringCamelCase(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertArrayToCamelCaseString, function (inputData, inputMetaData) {
    return stringParsing.convertArrayToCamelCaseString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cmapWordToCamelCaseWord, function (inputData, inputMetaData) {
    return stringParsing.mapWordToCamelCaseWord(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.csimplifyAndConsolidateString, function (inputData, inputMetaData) {
    return stringParsing.simplifyAndConsolidateString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.ccompareSimplifiedAndConsolidatedStrings, function (inputData, inputMetaData) {
    return stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdoesArrayContainLowerCaseConsolidatedString, function (inputData, inputMetaData) {
    return stringParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdoesArrayContainCharacter, function (inputData, inputMetaData) {
    return stringParsing.doesArrayContainCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cremoveCharacterFromArray, function (inputData, inputMetaData) {
    return stringParsing.removeCharacterFromArray(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cascertainMatchingFilenames, function (inputData, inputMetaData) {
    return stringParsing.ascertainMatchingFilenames(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cascertainMatchingElements, function (inputData, inputMetaData) {
    return stringParsing.acertainMatchingElements(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdoesArrayContainFilename, function (inputData, inputMetaData) {
    return stringParsing.doesArrayContainFilename(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cvalidateConstantsDataValidation, function (inputData, inputMetaData) {
    return stringParsing.validateConstantsDataValidation(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdetermineConstantsContextQualifiedPrefix, function (inputData, inputMetaData) {
    return stringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdetermineSuggestedConstantsValidationLineOfCode, function (inputData, inputMetaData) {
    return stringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cvalidateConstantsDataValidationLineItemName, function (inputData, inputMetaData) {
    return stringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cdoesConstantExist, function (inputData, inputMetaData) {
    return stringParsing.doesConstantExist(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetConstantType, function (inputData, inputMetaData) {
    return stringParsing.getConstantType(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetConstantActualValue, function (inputData, inputMetaData) {
    return stringParsing.getConstantActualValue(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetConstantName, function (inputData, inputMetaData) {
    return stringParsing.getConstantName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cfindConstantName, function (inputData, inputMetaData) {
    return stringParsing.findConstantName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisConstantTypeValid, function (inputData, inputMetaData) {
    return stringParsing.isConstantTypeValid(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconstantsOptimizedFulfillmentSystem, function (inputData, inputMetaData) {
    return stringParsing.constantsOptimizedFulfillmentSystem(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertConstantTypeToConstantPrefix, function (inputData, inputMetaData) {
    return stringParsing.convertConstantTypeToConstantPrefix(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconstantsFulfillmentSystem, function (inputData, inputMetaData) {
    return stringParsing.constantsFulfillmentSystem(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cvalidateConstantsDataValues, function (inputData, inputMetaData) {
    return stringParsing.validateConstantsDataValues(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisValidCommandNameString, function (inputData, inputMetaData) {
    return stringParsing.isValidCommandNameString(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisConstantValid, function (inputData, inputMetaData) {
    return stringParsing.isConstantValid(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.ccountDuplicateCommandAliases, function (inputData, inputMetaData) {
    return stringParsing.countDuplicateCommandAliases(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetDataCatagoryFromDataContextName, function (inputData, inputMetaData) {
    return stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetDataCatagoryDetailNameFromDataContextName, function (inputData, inputMetaData) {
    return stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetKeywordNameFromDataContextName, function (inputData, inputMetaData) {
    return stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cparseSystemRootPath, function (inputData, inputMetaData) {
    return stringParsing.parseSystemRootPath(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.creplaceDoublePercentWithMessage, function (inputData, inputMetaData) {
    return stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cremoveXnumberOfFoldersFromEndOfPath, function (inputData, inputMetaData) {
    return stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetFirstTopLevelFolderFromPath, function (inputData, inputMetaData) {
    return stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cloadDataFile, function (inputData, inputMetaData) {
    return stringParsing.loadDataFile(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetStoredData, function (inputData, inputMetaData) {
    return stringParsing.getStoredData(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cstoreData, function (inputData, inputMetaData) {
    return stringParsing.storeData(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisObjectEmpty, function (inputData, inputMetaData) {
    return stringParsing.isObjectEmpty(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisArrayEmpty, function (inputData, inputMetaData) {
    return stringParsing.isArrayEmpty(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisArray, function (inputData, inputMetaData) {
    return stringParsing.isArray(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisNonZeroLengthArray, function (inputData, inputMetaData) {
    return stringParsing.isNonZeroLengthArray(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.carrayDeepClone, function (inputData, inputMetaData) {
    return stringParsing.arrayDeepClone(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisObject, function (inputData, inputMetaData) {
    return stringParsing.isObject(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisArrayOrObject, function (inputData, inputMetaData) {
    return stringParsing.isArrayOrObject(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetAttributeName, function (inputData, inputMetaData) {
    return stringParsing.getAttributeName(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetAttributeValue, function (inputData, inputMetaData) {
    return stringParsing.getAttributeValue(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisOdd, function (inputData, inputMetaData) {
    return stringParsing.isOdd(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cisEven, function (inputData, inputMetaData) {
    return stringParsing.isEven(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.creplaceCharacterAtIndex, function (inputData, inputMetaData) {
    return stringParsing.replaceCharacterAtIndex(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.ccleanCommandInput, function (inputData, inputMetaData) {
    return stringParsing.cleanCommandInput(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.caggregateCommandArguments, function (inputData, inputMetaData) {
    return stringParsing.aggregateCommandArguments(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateCommandAliases, function (inputData, inputMetaData) {
    return stringParsing.generateCommandAliases(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.csolveLehmerCode, function (inputData, inputMetaData) {
    return stringParsing.solveLehmerCode(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crecursiveArrayExpansion, function (inputData, inputMetaData) {
    return stringParsing.recursiveArrayExpansion(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgetLehmerCodeValue, function (inputData, inputMetaData) {
    return stringParsing.getLehmerCodeValue(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.carraysAreEqual, function (inputData, inputMetaData) {
    return stringParsing.arraysAreEqual(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseTextByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseTextByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseTextByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseTextByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseTextByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseTextByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomSpecialCharacterCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateRandomSpecialCharacterCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateValidEmail1, function (inputData, inputMetaData) {
    return stringGeneration.generateValidEmail1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateValidEmail2, function (inputData, inputMetaData) {
    return stringGeneration.generateValidEmail2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateInvalidEmail1, function (inputData, inputMetaData) {
    return stringGeneration.generateInvalidEmail1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cgenerateInvalidEmail2, function (inputData, inputMetaData) {
    return stringGeneration.generateInvalidEmail2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateMixedCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateMixedCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateUpperCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateUpperCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateLowerCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateLowerCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateNumberInRange1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumberInRange1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateNumberInRange2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumberInRange2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateBooleanValue1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateBooleanValue1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateBooleanValue2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateBooleanValue2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateMixedCaseAlphabeticCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateMixedCaseAlphabeticCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateLowerCaseLetter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateLowerCaseLetter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateUpperCaseLetter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.crandomlyGenerateUpperCaseLetter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertNumberToUpperCaseLetter, function (inputData, inputMetaData) {
    return characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.cconvertNumberToLowerCaseLetter, function (inputData, inputMetaData) {
    return characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData);
  }), _defineProperty(_D$s$cBusinessRules, s.chex2rgbConversion, function (inputData, inputMetaData) {
    return mathOperations.hex2rgbConversion(inputData, inputMetaData);
  }), _D$s$cBusinessRules); // console.log('END rulesLibrary.initRulesLibrary function');
};

exports.initRulesLibrary = initRulesLibrary;