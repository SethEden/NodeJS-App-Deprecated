/**
 * @file business.constants.js
 * @module business-constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as num from './numeric.constants';
import * as wrd from './word.constants';
import * as sys from './system.constants';

// Business Rules
export const cecho = wrd.cecho; // echo
export const cEcho = wrd.cEcho; // Echo
// ********************************
// StringParsing rules in order
// ********************************
export const cstringToBoolean = wrd.cstring + wrd.cTo + wrd.cBoolean; // stringToBoolean
export const cstringToDataType = wrd.cstring + wrd.cTo + wrd.cData + wrd.cType; // stringToDataType
export const cdetermineObjectDataType = wrd.cdetermine + wrd.cObject + wrd.cData + wrd.cType; // determineObjectDataType
export const cisBoolean = wrd.cis + wrd.cBoolean; // isBoolean
export const cisInteger = wrd.cis + wrd.cInteger; // isInteger
export const cisFloat = wrd.cis + wrd.cFloat; // isFloat
export const cisString = wrd.cis + wrd.cString; // isString
export const csingleQuoteSwapAfterEquals = wrd.csingle + wrd.cQuote + wrd.cSwap + wrd.cAfter + wrd.cEquals; // singleQuoteSwapAfterEquals
export const cswapForwardSlashToBackSlash = wrd.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwadSlashToBackSlash
export const cswapBackSlashToForwardSlash = wrd.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
export const cswapDoubleForwardSlashToSingleForwardSlash = wrd.cswap + wrd.cDouble + sys.cForwardSlash + bas.cTo + wrd.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
export const cswapDoubleBackSlashToSingleBackSlash = wrd.cswap + wrd.cDouble + sys.cBackSlash + bas.cTo + wrd.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash
export const cgetUserNameFromEmail = wrd.cget + wrd.cUser + wrd.cName + wrd.cFrom + wrd.cEmail; // getUserNameFromEmail
export const creplaceSpacesWithPlus = wrd.creplace + wrd.cSpaces + wrd.cWith + wrd.cPlus; // replaceSpacesWithPlus
export const creplaceColonWithUnderscore = wrd.creplace + wrd.cColon + wrd.cWith + sys.cUnderscore; // replaceColonWithUnderscore
export const ccleanCarriageReturnFromString = wrd.cclean + sys.cCarriageReturn + wrd.cFrom + wrd.cString; // cleanCarriageReturnFromString
export const cconvertStringToLowerCase = wrd.cconvert + wrd.cString + wrd.cTo + sys.cLowerCase; // convertStringToLowerCase
export const cconvertStringToUpperCase = wrd.cconvert + wrd.cString + wrd.cTo + sys.cUpperCase; // convertStringToUpperCase
export const cgetFileNameFromPath = wrd.cget + sys.cFileName + wrd.cFrom + wrd.cPath; // getFileNameFromPath
export const cgetFileExtension = wrd.cget + wrd.cFile + wrd.cExtension; // getFileExtension
export const cremoveDotFromFileExtension = wrd.cremove + phn.cDot + wrd.cFrom + wrd.cFile + wrd.cExtension; // removeDotFromFileExtension
export const cremoveFileExtensionFromFileName = wrd.cremove + wrd.cFile + wrd.cExtension + wrd.cFrom + sys.cFileName; // removeFileExtensionFromFileName
export const cgetValueFromAssignmentOperationString = wrd.cget + wrd.cValue + wrd.cFrom + wrd.cAssignment + wrd.cOperation + wrd.cString; // getValueFromAssignmentOperationString
export const caggregateNumericalDifferenceBetweenTwoStrings = wrd.caggregate + wrd.cNumerical + wrd.cDifference + wrd.cBetween + num.cTwo + wrd.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings
export const ccountCamelCaseWords = wrd.ccount + wrd.cCamel + wrd.cCase + wrd.cWords; // countCamelCaseWords
export const cdoesStringContainAcronym = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cAcronym; // doesStringContainAcronym
export const ccountDelimiterInString = wrd.ccount + wrd.cDelimiter + bas.cIn + wrd.cString; // countDelimiterInString
export const cdetermineWordDelimiter = wrd.cdetermine + wrd.cWord + wrd.cDelimiter; // determineWordDelimiter
export const cgetWordCountInString = wrd.cget + wrd.cWord + wrd.cCount + bas.cIn + wrd.cString; // getWordCountInString
export const cdoesStringContainUpperCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + sys.cUpperCase + wrd.cCharacter; // doesStringContainUpperCaseCharacter
export const cdoesStringContainLowerCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + sys.cLowerCase + wrd.cCharacter; // doesStringContainLowerCaseCharacter
export const cisFirstCharacterLowerCase = bas.cis + num.cFirst + wrd.cCharacter + sys.cLowerCase; // isFirstCharacterLowerCase
export const cisFirstCharacterUpperCase = bas.cis + num.cFirst + wrd.cCharacter + sys.cUpperCase; // isFirstCharacterUpperCase
export const cisStringList = bas.cis + wrd.cString + wrd.cList; // isStringList
export const cisStringCamelCase = bas.cis + wrd.cString + wrd.cCamel + wrd.cCase; // isStringCamelCase
export const cmapWordToCamelCaseWord = phn.cmap + wrd.cWord + bas.cTo + wrd.cCamel + wrd.cCase + wrd.cWord; // mapWordToCamelCaseWord
export const csimplifyAndConsolidateString = wrd.csimplify + wrd.cAnd + wrd.cConsolidate + wrd.cString; // simplifyAndConsolidateString
export const ccompareSimplifiedAndConsolidatedStrings = wrd.ccompare + wrd.cSimplified + wrd.cAnd + wrd.cConsolidated + wrd.cStrings; // compareSimplifiedAndConsolidatedStrings
export const cascertainMatchingFilenames = wrd.cascertain + wrd.cMatching + sys.cFilenames; // ascertainMatchingFilenames
export const cvalidateConstantsDataValidation = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValidation; // validateConstantsDataValidation
export const cdetermineConstantsContextQualifiedPrefix = wrd.cdetermine + wrd.cConstants + wrd.cContext + wrd.cQualified + wrd.cPrefix; // determineConstantsContextQualifiedPrefix
export const cdetermineSuggestedConstantsValidationLineOfCode = wrd.cdetermine + wrd.cSuggested + wrd.cConstants + wrd.cValidation + wrd.cLine + bas.cOf + wrd.cCode; // determineSuggestedConstantsValidationLineOfCode
export const cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidation + wrd.cLine + wrd.cItem + wrd.cName; // validateConstantsDataValidationLineItemName
export const cdoesConstantExist = wrd.cdoes + wrd.cConstant + wrd.cExist; // doesConstantExist
export const cgetConstantType = wrd.cget + wrd.cConstant + wrd.cType; // getConstantType
export const cgetConstantActualValue = wrd.cget + wrd.cConstant + wrd.cActual + wrd.cValue; // getConstantActualValue
export const cgetConstantName = wrd.cget + wrd.cConstant + wrd.cName; // getConstantName
export const cfindConstantName = wrd.cfind + wrd.cConstant + wrd.cName; // findConstantName
export const cisConstantTypeValid = bas.cis + wrd.cConstant + wrd.cType + wrd.cValid; // isConstantTypeValid
export const cconvertConstantTypeToConstantPrefix = wrd.cconvert + wrd.cConstant + wrd.cType + bas.cTo + wrd.cConstant + wrd.cPrefix; // convertConstantTypeToConstantPrefix
export const cconstantsOptimizedFulfillmentSystem = wrd.cconstants + wrd.cOptimized + wrd.cFulfillment + wrd.cSystem; // constantsOptimizedFulfillmentSystem
export const cconstantsFulfillmentSystem = wrd.cconstants + wrd.cFulfillment + wrd.cSystem; // constantsFulfillmentSystem
export const cvalidateConstantsDataValues = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValues; // validateConstantsDataValues
export const cisValidCommandNameString = bas.cis + wrd.cValid + wrd.cCommand + wrd.cName + wrd.cString; // isValidCommandNameString
export const cisConstantValid = bas.cis + wrd.cConstant + wrd.cValid; // isConstantValid
export const ccountDuplicateCommandAliases = wrd.ccount + wrd.cDuplicate + wrd.cCommand + wrd.cAliases; // countDuplicateCommandAliases
export const cgetDataCatagoryFromDataContextName = wrd.cget + wrd.cData + wrd.cCatagory + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getDataCatagoryFromDataContextName
export const cgetDataCatagoryDetailNameFromDataContextName = wrd.cget + wrd.cData + wrd.cCatagory + wrd.cDetail + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getDataCatagoryDetailNameFromDataContextName
export const cgetKeywordNameFromDataContextName = wrd.cget + wrd.cKeyword + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getKeywordNameFromDataContextName
export const cparseSystemRootPath = wrd.cparse + wrd.cSystem + wrd.cRoot + wrd.cPath; // parseSystemRootPath
export const creplaceDoublePercentWithMessage = wrd.creplace + wrd.cDouble + wrd.cPercent + wrd.cWith + wrd.cMessage; // replaceDoublePercentWithMessage
export const cremoveXnumberOfFoldersFromEndOfPath = wrd.cremove + bas.cX + wrd.cnumber + bas.cOf + wrd.cFolders + wrd.cFrom + wrd.cEnd + bas.cOf + wrd.cPath; // removeXnumberOfFoldersFromEndOfPath
export const cgetFirstTopLevelFolderFromPath = wrd.cget + num.cFirst + wrd.cTop + wrd.cLevel + wrd.cFolder + wrd.cFrom + wrd.cPath; // getFirstTopLevelFolderFromPath
export const cloadDataFile = wrd.cload + wrd.cData + wrd.cFile; // loadDataFile
export const csupportedFileFormatsAre = wrd.csupported + wrd.cFile + wrd.cFormats + wrd.cAre; // supportedFileFormatsAre
export const cgetAttributeName = wrd.cget + wrd.cAttribute + wrd.cName; // getAttributeName
export const cgetAttributeValue = wrd.cget + wrd.cAttribute + wrd.cValue; // getAttributeValue
export const cisOdd = bas.cis + wrd.cOdd; // isOdd
export const cisEven = bas.cis + wrd.cEven; // isEven
export const ccleanCommandInput = wrd.cclean + wrd.cCommand + wrd.cInput; // cleanCommandInput
export const creplaceCharacterAtIndexOfString = wrd.creplace + wrd.cCharacter + bas.cA + bas.ct + wrd.cIndex + bas.cOf + wrd.cString; // replaceCharacterAtIndexOfString

// *********************************
// ArrayParsing rules in order
// *********************************
export const creplaceCharacterWithCharacter = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter; // replaceCharacterWithCharacter
export const cconvertCamelCaseStringToArray = wrd.cconvert + wrd.cCamel + wrd.cCase + wrd.cString + bas.cTo + wrd.cArray; // convertCamelCaseStringToArray
export const cgetWordsArrayFromString = wrd.cget + wrd.cWords + wrd.cArray + wrd.cFrom + wrd.cString; // getWordsArrayFromString
export const crecombineStringArrayWithSpaces = wrd.crecombine + wrd.cString + wrd.cArray + wrd.cWith + wrd.cSpaces; // recombineStringArrayWithSpaces
export const cconvertArrayToCamelCaseString = wrd.cconvert + wrd.cArray + bas.cTo + wrd.cCamel + wrd.cCase + wrd.cString; // convertArrayToCamelCaseString
export const cdoesArrayContainLowerCaseConsolidatedString = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cConsolidated + wrd.cString; // doesArrayContainLowerCaseConsolidatedString
export const cdoesArrayContainCharacter = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = wrd.cremove + wrd.cCharacter + wrd.cFrom + wrd.cArray; // removeCharacterFromArray
export const cascertainMatchingElements = wrd.cascertain + wrd.cMatching + wrd.cElements; // acertainMatchingElements
export const cdoesArrayContainFilename = wrd.cdoes + wrd.cArray + wrd.cContain + sys.cFilename; // doesArrayContainFilename
export const cgetLengthOfLongestStringInArray = wrd.cget + wrd.cLength + bas.cOf + wrd.cLongest + wrd.cString + bas.cIn + wrd.cArray; // getLengthOfLongestStringInArray
export const csearchForPatternsInStringArray = wrd.csearch + wrd.cFor + wrd.cPatterns + bas.cIn + wrd.cString + wrd.cArray; // searchForPatternsInStringArray
export const cvalidatePatternsThatNeedImplementation = wrd.cvalidate + wrd.cPatterns + wrd.cThat + wrd.cNeed + wrd.cImplementation; // validatePatternsThatNeedImplementation
export const csolveLehmerCode = wrd.csolve + wrd.cLehmer + wrd.cCode; // solveLehmerCode
export const crecursiveArrayExpansion = wrd.crecursive + wrd.cArray + wrd.cExpansion; // recursiveArrayExpansion
export const cgetLehmerCodeValue = wrd.cget + wrd.cLehmer + wrd.cCode + wrd.cValue; // getLehmerCodeValue
export const carraysAreEqual = wrd.carrays + wrd.cAre + wrd.cEqual; // arraysAreEqual
export const cstoreData = wrd.cstore + wrd.cData; // storeData
export const cgetStoredData = wrd.cget + wrd.cStored + wrd.cData; // getStoredData
export const cisObjectEmpty = bas.cis + wrd.cObject + wrd.cEmpty; // isObjectEmpty
export const cisArrayEmpty = bas.cis + wrd.cArray + wrd.cEmpty; // isArrayEmpty
export const cisObject = bas.cis + wrd.cObject; // isObject
export const cisArray = bas.cis + wrd.cArray; // isArray
export const cisArrayOrObject = bas.cis + wrd.cArray + bas.cOr + wrd.cObject; // isArrayOrObject
export const cisNonZeroLengthArray = bas.cis + phn.cNon + num.cZero + wrd.cLength + wrd.cArray; // isNonZeroLengthArray
export const carrayDeepClone = wrd.carray + wrd.cDeep + wrd.cClone; // arrayDeepClone
export const creplaceCharacterAtIndex = wrd.creplace  + wrd.cCharacter + wrd.cAt + wrd.cIndex; // replaceCharacterAtIndex
export const cgenerateCommandAliases = wrd.cgenerate + wrd.cCommand + wrd.cAliases; // generateCommandAliases
export const caggregateCommandArguments = wrd.caggregate + wrd.cCommand + wrd.cArguments; // aggregateCommandArguments
export const cgetFileAndPathListForPath = wrd.cget + wrd.cFile + wrd.cAnd + wrd.cPath + wrd.cList + wrd.cFor + wrd.cPath; // getFileAndPathListForPath
export const cparseColorRangeInputs = wrd.cparse + wrd.cColor + wrd.cRange + wrd.cInputs; // parseColorRangeInputs
export const cdoesArrayContainValue = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cValue; // doesArrayContainValue

// *********************************
// StringGeneration rules in order
// *********************************
export const cgenerateRandomMixedCaseTextByLength1 = sys.cgenerateRandom  + sys.cMixedCase + sys.cTextByLength + num.c1; // generateRandomMixedCaseTextByLength1
export const cgenerateRandomMixedCaseTextByLength2 = sys.cgenerateRandom  + sys.cMixedCase + sys.cTextByLength + num.c2; // generateRandomMixedCaseTextByLength2
export const cgenerateRandomUpperCaseTextByLength1 = sys.cgenerateRandom  + sys.cUpperCase + sys.cTextByLength + num.c1; // generateRandomUpperCaseTextByLength1
export const cgenerateRandomUpperCaseTextByLength2 = sys.cgenerateRandom  + sys.cUpperCase + sys.cTextByLength + num.c2; // generateRandomUpperCaseTextByLength2
export const cgenerateRandomLowerCaseTextByLength1 = sys.cgenerateRandom  + sys.cLowerCase + sys.cTextByLength + num.c1; // generateRandomLowerCaseTextByLength1
export const cgenerateRandomLowerCaseTextByLength2 = sys.cgenerateRandom  + sys.cLowerCase + sys.cTextByLength + num.c2; // generateRandomLowerCaseTextByLength2
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = sys.cgenerateRandom  + sys.cMixedCase + sys.cTextWithSpecialCharactersByLength + num.c1; // generateRandomMixedCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = sys.cgenerateRandom  + sys.cMixedCase + sys.cTextWithSpecialCharactersByLength + num.c2; // generateRandomMixedCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = sys.cgenerateRandom  + sys.cUpperCase + sys.cTextWithSpecialCharactersByLength + num.c1; // generateRandomUpperCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = sys.cgenerateRandom  + sys.cUpperCase + sys.cTextWithSpecialCharactersByLength + num.c2; // generateRandomUpperCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = sys.cgenerateRandom  + sys.cLowerCase + sys.cTextWithSpecialCharactersByLength + num.c1; // generateRandomLowerCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = sys.cgenerateRandom  + sys.cLowerCase + sys.cTextWithSpecialCharactersByLength + num.c2; // generateRandomLowerCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = sys.cgenerateRandom  + sys.cMixedCase + sys.cAlphaNumericCodeByLength + num.c1; // generateRandomMixedCaseAlphaNumericCodeByLength1
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = sys.cgenerateRandom  + sys.cMixedCase + sys.cAlphaNumericCodeByLength + num.c2; // generateRandomMixedCaseAlphaNumericCodeByLength2
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = sys.cgenerateRandom  + sys.cUpperCase + sys.cAlphaNumericCodeByLength + num.c1; // generateRandomUpperCaseAlphaNumericCodeByLength1
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = sys.cgenerateRandom  + sys.cUpperCase + sys.cAlphaNumericCodeByLength + num.c2; // generateRandomUpperCaseAlphaNumericCodeByLength2
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = sys.cgenerateRandom  + sys.cLowerCase + sys.cAlphaNumericCodeByLength + num.c1; // generateRandomLowerCaseAlphaNumericCodeByLength1
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = sys.cgenerateRandom  + sys.cLowerCase + sys.cAlphaNumericCodeByLength + num.c2; // generateRandomLowerCaseAlphaNumericCodeByLength2
export const cgenerateRandomNumericCodeByLength1 = sys.cgenerateRandom  + sys.cNumericCodeByLength + num.c1; // generateRandomNumericCodeByLength1
export const cgenerateRandomNumericCodeByLength2 = sys.cgenerateRandom  + sys.cNumericCodeByLength + num.c2; // generateRandomNumericCodeByLength2
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = sys.cgenerateRandom  + sys.cMixedCase + sys.cAlphaNumericCodeWithSpecialCharactersByLength + num.c1; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = sys.cgenerateRandom  + sys.cMixedCase + sys.cAlphaNumericCodeWithSpecialCharactersByLength + num.c2; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = sys.cgenerateRandom  + sys.cUpperCase + sys.cAlphaNumericCodeWithSpecialCharactersByLength + num.c1; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = sys.cgenerateRandom  + sys.cUpperCase + sys.cAlphaNumericCodeWithSpecialCharactersByLength + num.c2; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = sys.cgenerateRandom  + sys.cLowerCase + sys.cAlphaNumericCodeWithSpecialCharactersByLength + num.c1; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = sys.cgenerateRandom  + sys.cLowerCase + sys.cAlphaNumericCodeWithSpecialCharactersByLength + num.c2; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomSpecialCharacterCodeByLength1 = sys.cgenerateRandom  + sys.cSpecialCharacterCodeByLength + num.c1; // generateRandomSpecialCharacterCodeByLength1
export const cgenerateRandomSpecialCharacterCodeByLength2 = sys.cgenerateRandom  + sys.cSpecialCharacterCodeByLength + num.c2; // generateRandomSpecialCharacterCodeByLength2
export const cgenerateValidEmail1 = sys.cgenerateValidEmail + num.c1; // generateValidEmail1
export const cgenerateValidEmail2 = sys.cgenerateValidEmail + num.c2; // generateValidEmail2
export const cgenerateInvalidEmail1 = sys.cgenerateInvalidEmail + num.c1; // generateInvalidEmail1
export const cgenerateInvalidEmail2 = sys.cgenerateInvalidEmail + num.c2; // generateInvalidEmail2
export const cgenerateValidEmailWithSpecificSuffixAndDomainName1 = sys.cgenerateValidEmail + sys.cWithSpecificSuffixAndDomainName + num.c1; // generateValidEmailWithSpecificSuffixAndDomainName1
export const cgenerateValidEmailWithSpecificSuffixAndDomainName2 = sys.cgenerateValidEmail + sys.cWithSpecificSuffixAndDomainName + num.c2; // generateValidEmailWithSpecificSuffixAndDomainName2
export const cgenerateRandomValidEmail1 = wrd.cgenerate + sys.cRandomValidEmail + num.c1; // generateRandomValidEmail1
export const cgenerateRandomValidEmail2 = wrd.cgenerate + sys.cRandomValidEmail + num.c2; // generateRandomValidEmail2
export const cgenerateInvalidEmailWithSpecificSuffixAndDomainName1 = sys.cgenerateInvalidEmail + sys.cWithSpecificSuffixAndDomainName + num.c1; // generateInvalidEmailWithSpecificSuffixAndDomainName1
export const cgenerateInvalidEmailWithSpecificSuffixAndDomainName2 = sys.cgenerateInvalidEmail + sys.cWithSpecificSuffixAndDomainName + num.c2; // generateInvalidEmailWithSpecificSuffixAndDomainName2
export const cgenerateRandomInvalidEmail1 = wrd.cgenerate + sys.cRandomInvalidEmail + num.c1; // generateRandomInvalidEmail1
export const cgenerateRandomInvalidEmail2 = wrd.cgenerate + sys.cRandomInvalidEmail + num.c2; // generateRandomInvalidEmail2
export const cgenerateRandomBrightColor = wrd.cgenerate + wrd.cRandom + wrd.cBright + wrd.cColor; // generateRandomBrightColor
export const cgenerateRandomDarkColor = wrd.cgenerate + wrd.cRandom + wrd.cDark + wrd.cColor; // generateRandomDarkColor
export const cgenerateRandomColor = wrd.cgenerate + wrd.cRandom + wrd.cColor; // generateRandomColor

// *********************************
// CharacterGeneration rules in order
// *********************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = sys.crandomlyGenerate + sys.cMixedCase + sys.cLetterOrSpecialCharacter + num.c1; // randomlyGenerateMixedCaseLetterOrSpecialCharacter1
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = sys.crandomlyGenerate + sys.cMixedCase + sys.cLetterOrSpecialCharacter + num.c2; // randomlyGenerateMixedCaseLetterOrSpecialCharacter2
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = sys.crandomlyGenerate + sys.cUpperCase + sys.cLetterOrSpecialCharacter + num.c1; // randomlyGenerateUpperCaseLetterOrSpecialCharacter1
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = sys.crandomlyGenerate + sys.cUpperCase + sys.cLetterOrSpecialCharacter + num.c2; // randomlyGenerateUpperCaseLetterOrSpecialCharacter2
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = sys.crandomlyGenerate + sys.cLowerCase + sys.cLetterOrSpecialCharacter + num.c1; // randomlyGenerateLowerCaseLetterOrSpecialCharacter1
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = sys.crandomlyGenerate + sys.cLowerCase + sys.cLetterOrSpecialCharacter + num.c2; // randomlyGenerateLowerCaseLetterOrSpecialCharacter2
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = sys.crandomlyGenerate + wrd.cEither + sys.cMixedCase + sys.cLetterOrNumberOrSpecialCharacter + num.c1; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = sys.crandomlyGenerate + wrd.cEither + sys.cMixedCase + sys.cLetterOrNumberOrSpecialCharacter + num.c2; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = sys.crandomlyGenerate + wrd.cEither + sys.cUpperCase + sys.cLetterOrNumberOrSpecialCharacter + num.c1; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = sys.crandomlyGenerate + wrd.cEither + sys.cUpperCase + sys.cLetterOrNumberOrSpecialCharacter + num.c2; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = sys.crandomlyGenerate + wrd.cEither + sys.cLowerCase + sys.cLetterOrNumberOrSpecialCharacter + num.c1; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = sys.crandomlyGenerate + wrd.cEither + sys.cLowerCase + sys.cLetterOrNumberOrSpecialCharacter + num.c2; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateMixedCaseAlphaNumericCharacter1 = sys.crandomlyGenerate + sys.cMixedCase + sys.cAlphaNumericCharacter + num.c1; // randomlyGenerateMixedCaseAlphaNumericCharacter1
export const crandomlyGenerateMixedCaseAlphaNumericCharacter2 = sys.crandomlyGenerate + sys.cMixedCase + sys.cAlphaNumericCharacter + num.c2; // randomlyGenerateMixedCaseAlphaNumericCharacter2
export const crandomlyGenerateUpperCaseAlphaNumericCharacter1 = sys.crandomlyGenerate + sys.cUpperCase + sys.cAlphaNumericCharacter + num.c1; // randomlyGenerateUpperCaseAlphaNumericCharacter1
export const crandomlyGenerateUpperCaseAlphaNumericCharacter2 = sys.crandomlyGenerate + sys.cUpperCase + sys.cAlphaNumericCharacter + num.c2; // randomlyGenerateUpperCaseAlphaNumericCharacter2
export const crandomlyGenerateLowerCaseAlphaNumericCharacter1 = sys.crandomlyGenerate + sys.cLowerCase + sys.cAlphaNumericCharacter + num.c1; // randomlyGenerateLowerCaseAlphaNumericCharacter1
export const crandomlyGenerateLowerCaseAlphaNumericCharacter2 = sys.crandomlyGenerate + sys.cLowerCase + sys.cAlphaNumericCharacter + num.c2; // randomlyGenerateLowerCaseAlphaNumericCharacter2
export const crandomlyGenerateNumericCharacter1 = sys.crandomlyGenerate + sys.cNumericCharacter + num.c1; // randomlyGenerateNumericCharacter1
export const crandomlyGenerateNumericCharacter2 = sys.crandomlyGenerate + sys.cNumericCharacter + num.c2; // randomlyGenerateNumericCharacter2
export const crandomlyGenerateSpecialCharacter1 = sys.crandomlyGenerate + sys.cSpecialCharacter + num.c1; // randomlyGenerateSpecialCharacter1
export const crandomlyGenerateSpecialCharacter2 = sys.crandomlyGenerate + sys.cSpecialCharacter + num.c2; // randomlyGenerateSpecialCharacter2
export const crandomlyGenerateNumberInRange1 = sys.crandomlyGenerate + sys.cNumberInRange + num.c1; // randomlyGenerateNumberInRange1
export const crandomlyGenerateNumberInRange2 = sys.crandomlyGenerate + sys.cNumberInRange + num.c2; // randomlyGenerateNumberInRange2
export const crandomlyGenerateBooleanValue1 = sys.crandomlyGenerate + sys.cBooleanValue + num.c1; // randomlyGenerateBooleanValue1
export const crandomlyGenerateBooleanValue2 = sys.crandomlyGenerate + sys.cBooleanValue + num.c2; // randomlyGenerateBooleanValue2
export const crandomlyGenerateMixedCaseAlphabeticCharacter1 = sys.crandomlyGenerate + sys.cMixedCase + sys.cAlphabeticCharacter + num.c1; // randomlyGenerateMixedCaseAlphabeticCharacter1
export const crandomlyGenerateMixedCaseAlphabeticCharacter2 = sys.crandomlyGenerate + sys.cMixedCase + sys.cAlphabeticCharacter + num.c2; // randomlyGenerateMixedCaseAlphabeticCharacter2
export const crandomlyGenerateLowerCaseLetter1 = sys.crandomlyGenerate + sys.cLowerCase + wrd.cLetter + num.c1; // randomlyGenerateLowerCaseLetter1
export const crandomlyGenerateLowerCaseLetter2 = sys.crandomlyGenerate + sys.cLowerCase + wrd.cLetter + num.c2; // randomlyGenerateLowerCaseLetter2
export const crandomlyGenerateUpperCaseLetter1 = sys.crandomlyGenerate + sys.cUpperCase + wrd.cLetter + num.c1; // randomlyGenerateUpperCaseLetter1
export const crandomlyGenerateUpperCaseLetter2 = sys.crandomlyGenerate + sys.cUpperCase + wrd.cLetter + num.c2; // randomlyGenerateUpperCaseLetter2
export const cconvertNumberToUpperCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + sys.cUpperCase + wrd.cLetter; // convertNumberToUpperCaseLetter
export const cconvertNumberToLowerCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + sys.cLowerCase + wrd.cLetter; // convertNumberToLowerCaseLetter

// *********************************
// mathOperations rules in order
// *********************************
export const chex2rgbConversion = phn.chex + num.c2 + phn.crgb + wrd.cConversion; // hex2rgbConversion
