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

var arrayParsing = _interopRequireWildcard(require("./Rules/arrayParsing"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var biz = _interopRequireWildcard(require("../Constants/business.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var D = require('../Structures/data');
/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/15
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */


var initRulesLibrary = function initRulesLibrary() {
  var _D$sys$cBusinessRules;

  // console.log('BEGIN rulesLibrary.initRulesLibrary');
  D[sys.cBusinessRules] = {};
  D[sys.cBusinessRules] = (_D$sys$cBusinessRules = {}, _defineProperty(_D$sys$cBusinessRules, biz.cEcho, function (inputData, inputMetaData) {
    return inputData, inputMetaData;
  }), _defineProperty(_D$sys$cBusinessRules, biz.cstringToBoolean, function (inputData, inputMetaData) {
    return stringParsing.stringToBoolean(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cstringToDataType, function (inputData, inputMetaData) {
    return stringParsing.stringToDataType(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdetermineObjectDataType, function (inputData, inputMetaData) {
    return stringParsing.determineObjectDataType(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisBoolean, function (inputData, inputMetaData) {
    return stringParsing.isBoolean(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisInteger, function (inputData, inputMetaData) {
    return stringParsing.isInteger(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisFloat, function (inputData, inputMetaData) {
    return stringParsing.isFloat(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisString, function (inputData, inputMetaData) {
    return stringParsing.isString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.csingleQuoteSwapAfterEquals, function (inputData, inputMetaData) {
    return stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cswapForwardSlashToBackSlash, function (inputData, inputMetaData) {
    return stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cswapBackSlashToForwardSlash, function (inputData, inputMetaData) {
    return stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cswapDoubleForwardSlashToSingleForwardSlash, function (inputData, inputMetaData) {
    return stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cswapDoubleBackSlashToSingleBackSlash, function (inputData, inputMetaData) {
    return stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetUserNameFromEmail, function (inputData, inputMetaData) {
    return stringParsing.getUserNameFromEmail(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.creplaceSpacesWithPlus, function (inputData, inputMetaData) {
    return stringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.creplaceColonWithUnderscore, function (inputData, inputMetaData) {
    return stringParsing.replaceColonWithUnderscore(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.ccleanCarriageReturnFromString, function (inputData, inputMetaData) {
    return stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertStringToLowerCase, function (inputData, inputMetaData) {
    return stringParsing.convertStringToLowerCase(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertStringToUpperCase, function (inputData, inputMetaData) {
    return stringParsing.convertStringToUpperCase(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetFileNameFromPath, function (inputData, inputMetaData) {
    return stringParsing.getFileNameFromPath(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetFileExtension, function (inputData, inputMetaData) {
    return stringParsing.getFileExtension(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cremoveDotFromFileExtension, function (inputData, inputMetaData) {
    return stringParsing.removeDotFromFileExtension(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cremoveFileExtensionFromFileName, function (inputData, inputMetaData) {
    return stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetValueFromAssignmentOperationString, function (inputData, inputMetaData) {
    return stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.caggregateNumericalDifferenceBetweenTwoStrings, function (inputData, inputMetaData) {
    return stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.ccountCamelCaseWords, function (inputData, inputMetaData) {
    return stringParsing.countCamelCaseWords(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesStringContainAcronym, function (inputData, inputMetaData) {
    return stringParsing.doesStringContainAcronym(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.ccountDelimiterInString, function (inputData, inputMetaData) {
    return stringParsing.countDelimiterInString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdetermineWordDelimiter, function (inputData, inputMetaData) {
    return stringParsing.determineWordDelimiter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetWordCountInString, function (inputData, inputMetaData) {
    return stringParsing.getWordCountInString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesStringContainUpperCaseCharacter, function (inputData, inputMetaData) {
    return stringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesStringContainLowerCaseCharacter, function (inputData, inputMetaData) {
    return stringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisFirstCharacterLowerCase, function (inputData, inputMetaData) {
    return stringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisFirstCharacterUpperCase, function (inputData, inputMetaData) {
    return stringParsing.isFirstCharacterUpperCase(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisStringList, function (inputData, inputMetaData) {
    return stringParsing.isStringList(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisStringCamelCase, function (inputData, inputMetaData) {
    return stringParsing.isStringCamelCase(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cmapWordToCamelCaseWord, function (inputData, inputMetaData) {
    return stringParsing.mapWordToCamelCaseWord(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.csimplifyAndConsolidateString, function (inputData, inputMetaData) {
    return stringParsing.simplifyAndConsolidateString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.ccompareSimplifiedAndConsolidatedStrings, function (inputData, inputMetaData) {
    return stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cascertainMatchingFilenames, function (inputData, inputMetaData) {
    return stringParsing.ascertainMatchingFilenames(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cvalidateConstantsDataValidation, function (inputData, inputMetaData) {
    return stringParsing.validateConstantsDataValidation(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdetermineConstantsContextQualifiedPrefix, function (inputData, inputMetaData) {
    return stringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdetermineSuggestedConstantsValidationLineOfCode, function (inputData, inputMetaData) {
    return stringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cvalidateConstantsDataValidationLineItemName, function (inputData, inputMetaData) {
    return stringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesConstantExist, function (inputData, inputMetaData) {
    return stringParsing.doesConstantExist(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetConstantType, function (inputData, inputMetaData) {
    return stringParsing.getConstantType(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetConstantActualValue, function (inputData, inputMetaData) {
    return stringParsing.getConstantActualValue(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetConstantName, function (inputData, inputMetaData) {
    return stringParsing.getConstantName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cfindConstantName, function (inputData, inputMetaData) {
    return stringParsing.findConstantName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisConstantTypeValid, function (inputData, inputMetaData) {
    return stringParsing.isConstantTypeValid(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconstantsOptimizedFulfillmentSystem, function (inputData, inputMetaData) {
    return stringParsing.constantsOptimizedFulfillmentSystem(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertConstantTypeToConstantPrefix, function (inputData, inputMetaData) {
    return stringParsing.convertConstantTypeToConstantPrefix(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconstantsFulfillmentSystem, function (inputData, inputMetaData) {
    return stringParsing.constantsFulfillmentSystem(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cvalidateConstantsDataValues, function (inputData, inputMetaData) {
    return stringParsing.validateConstantsDataValues(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisValidCommandNameString, function (inputData, inputMetaData) {
    return stringParsing.isValidCommandNameString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisConstantValid, function (inputData, inputMetaData) {
    return stringParsing.isConstantValid(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.ccountDuplicateCommandAliases, function (inputData, inputMetaData) {
    return stringParsing.countDuplicateCommandAliases(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetLehmerCodeValue, function (inputData, inputMetaData) {
    return stringParsing.getLehmerCodeValue(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetDataCatagoryFromDataContextName, function (inputData, inputMetaData) {
    return stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetDataCatagoryDetailNameFromDataContextName, function (inputData, inputMetaData) {
    return stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetKeywordNameFromDataContextName, function (inputData, inputMetaData) {
    return stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cparseSystemRootPath, function (inputData, inputMetaData) {
    return stringParsing.parseSystemRootPath(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.creplaceDoublePercentWithMessage, function (inputData, inputMetaData) {
    return stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cremoveXnumberOfFoldersFromEndOfPath, function (inputData, inputMetaData) {
    return stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetFirstTopLevelFolderFromPath, function (inputData, inputMetaData) {
    return stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cloadDataFile, function (inputData, inputMetaData) {
    return stringParsing.loadDataFile(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.csupportedFileFormatsAre, function (inputData, inputMetaData) {
    return stringParsing.supportedFileFormatsAre(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetAttributeName, function (inputData, inputMetaData) {
    return stringParsing.getAttributeName(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetAttributeValue, function (inputData, inputMetaData) {
    return stringParsing.getAttributeValue(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisOdd, function (inputData, inputMetaData) {
    return stringParsing.isOdd(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisEven, function (inputData, inputMetaData) {
    return stringParsing.isEven(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.ccleanCommandInput, function (inputData, inputMetaData) {
    return stringParsing.cleanCommandInput(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.creplaceCharacterWithCharacter, function (inputData, inputMetaData) {
    return arrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertCamelCaseStringToArray, function (inputData, inputMetaData) {
    return arrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetWordsArrayFromString, function (inputData, inputMetaData) {
    return arrayParsing.getWordsArrayFromString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crecombineStringArrayWithSpaces, function (inputData, inputMetaData) {
    return arrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertArrayToCamelCaseString, function (inputData, inputMetaData) {
    return arrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesArrayContainLowerCaseConsolidatedString, function (inputData, inputMetaData) {
    return arrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesArrayContainCharacter, function (inputData, inputMetaData) {
    return arrayParsing.doesArrayContainCharacter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cremoveCharacterFromArray, function (inputData, inputMetaData) {
    return arrayParsing.removeCharacterFromArray(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cascertainMatchingElements, function (inputData, inputMetaData) {
    return arrayParsing.acertainMatchingElements(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cdoesArrayContainFilename, function (inputData, inputMetaData) {
    return arrayParsing.doesArrayContainFilename(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetLengthOfLongestStringInArray, function (inputData, inputMetaData) {
    return arrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.csearchForPatternsInStringArray, function (inputData, inputMetaData) {
    return arrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cvalidatePatternsThatNeedImplementation, function (inputData, inputMetaData) {
    return arrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.csolveLehmerCode, function (inputData, inputMetaData) {
    return arrayParsing.solveLehmerCode(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crecursiveArrayExpansion, function (inputData, inputMetaData) {
    return arrayParsing.recursiveArrayExpansion(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.carraysAreEqual, function (inputData, inputMetaData) {
    return arrayParsing.arraysAreEqual(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cstoreData, function (inputData, inputMetaData) {
    return arrayParsing.storeData(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetStoredData, function (inputData, inputMetaData) {
    return arrayParsing.getStoredData(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisObjectEmpty, function (inputData, inputMetaData) {
    return arrayParsing.isObjectEmpty(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisArrayEmpty, function (inputData, inputMetaData) {
    return arrayParsing.isArrayEmpty(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisObject, function (inputData, inputMetaData) {
    return arrayParsing.isObject(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisArray, function (inputData, inputMetaData) {
    return arrayParsing.isArray(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisArrayOrObject, function (inputData, inputMetaData) {
    return arrayParsing.isArrayOrObject(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cisNonZeroLengthArray, function (inputData, inputMetaData) {
    return arrayParsing.isNonZeroLengthArray(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.carrayDeepClone, function (inputData, inputMetaData) {
    return arrayParsing.arrayDeepClone(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.creplaceCharacterAtIndex, function (inputData, inputMetaData) {
    return arrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateCommandAliases, function (inputData, inputMetaData) {
    return arrayParsing.generateCommandAliases(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.caggregateCommandArguments, function (inputData, inputMetaData) {
    return arrayParsing.aggregateCommandArguments(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgetFileAndPathListForPath, function (inputData, inputMetaData) {
    return arrayParsing.getFileAndPathListForPath(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cparseColorRangeInputs, function (inputData, inputMetaData) {
    return arrayParsing.parseColorRangeInputs(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseTextByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseTextByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseTextByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseTextByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseTextByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseTextByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomNumericCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomNumericCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomNumericCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomNumericCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomSpecialCharacterCodeByLength1, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomSpecialCharacterCodeByLength2, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateValidEmail1, function (inputData, inputMetaData) {
    return stringGeneration.generateValidEmail1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateValidEmail2, function (inputData, inputMetaData) {
    return stringGeneration.generateValidEmail2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateInvalidEmail1, function (inputData, inputMetaData) {
    return stringGeneration.generateInvalidEmail1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateInvalidEmail2, function (inputData, inputMetaData) {
    return stringGeneration.generateInvalidEmail2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomBrightColor, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomBrightColor(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomDarkColor, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomDarkColor(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cgenerateRandomColor, function (inputData, inputMetaData) {
    return stringGeneration.generateRandomColor(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateMixedCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateMixedCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateUpperCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateUpperCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateLowerCaseAlphaNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateLowerCaseAlphaNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateNumericCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumericCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateNumericCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumericCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateSpecialCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateSpecialCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateSpecialCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateSpecialCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateNumberInRange1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumberInRange1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateNumberInRange2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateNumberInRange2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateBooleanValue1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateBooleanValue1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateBooleanValue2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateBooleanValue2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateMixedCaseAlphabeticCharacter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateMixedCaseAlphabeticCharacter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateLowerCaseLetter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateLowerCaseLetter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateUpperCaseLetter1, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.crandomlyGenerateUpperCaseLetter2, function (inputData, inputMetaData) {
    return characterGeneration.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertNumberToUpperCaseLetter, function (inputData, inputMetaData) {
    return characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.cconvertNumberToLowerCaseLetter, function (inputData, inputMetaData) {
    return characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData);
  }), _defineProperty(_D$sys$cBusinessRules, biz.chex2rgbConversion, function (inputData, inputMetaData) {
    return mathOperations.hex2rgbConversion(inputData, inputMetaData);
  }), _D$sys$cBusinessRules); // console.log('END rulesLibrary.initRulesLibrary function');
};

exports.initRulesLibrary = initRulesLibrary;