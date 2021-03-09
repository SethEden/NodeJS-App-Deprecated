/**
 * @file application.message.constants.js
 * @module application-message-constants
 * @description A file to hold all of the client application message constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2021/03/08
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
 import * as bas from '../../../Framework/Constants/basic.constants';
 import * as phn from '../../../Framework/Constants/phonic.constants';
 import * as wrd from '../../../Framework/Constants/word.constants';
 import * as sys from '../../../Framework/Constants/system.constants';

// Messages
export const cclientStringParsingDotCustomEcho = wrd.cclient + wrd.cString + wrd.cParsing + bas.cDot + wrd.cCustom + wrd.cEcho; // clientStringParsing.customEcho
export const ccomparisonIterationIs = wrd.ccomparison + bas.cSpace + wrd.citeration + sys.cSpaceIsColonSpace; // comparison iteration is:
export const cstartingPointIs = wrd.cstarting + wrd.cPoint + sys.cSpaceIsColonSpace; // startingPoint is:
export const cendingPointIs = wrd.cending + wrd.cPoint + sys.cSpaceIsColonSpace; // endingPoint is:
export const cinputDataDotCharAtJIs = wrd.cinput + wrd.cData + bas.cDot + wrd.cchar + wrd.cAt + bas.cOpenParenthesis + bas.cj + bas.cCloseParenthesis + sys.cSpaceIsColonSpace; // inputData.charAt(j) is:
export const cinputDataDotCharAtInputDataDotLengthDash = wrd.cinput + wrd.cData + bas.cDot + wrd.cchar + wrd.cAt + bas.cOpenParenthesis + wrd.cinput + wrd.cData + bas.cDot + wrd.cLength + bas.cSpace + bas.cDash + bas.cSpace; // inputData.chartAt(inputData.length -
export const cCloseParenthesisIs = bas.cCloseParenthesis + sys.cSpaceIsColonSpace; // ) is:
export const cWeGotMismatch = bas.cWe + bas.cSpace + wrd.cgot + bas.cSpace + bas.ca + bas.cSpace + phn.cmis + wrd.cmatch + bas.cExclamation; // We got a mismatch!
export const cmisCompareCountBeforeIncrementIs = phn.cmis + wrd.cCompare + wrd.cCount + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cincrement + sys.cSpaceIsColonSpace; // misCompareCount before increment is:
export const cmisCompareCountPostIncrementIs = phn.cmis + wrd.cCompare + wrd.cCount + bas.cSpace + wrd.cpost + bas.cSpace + wrd.cincrement + sys.cSpaceIsColonSpace; // misCompareCount post increment is:
export const cmisCompareCountAfterForLoopIs = phn.cmis + wrd.cCompare + wrd.cCount + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfor + bas.cDash + wrd.cloop + sys.cSpaceIsColonSpace; // misCompareCount after the for-loop is:
