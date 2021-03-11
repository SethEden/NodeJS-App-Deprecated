/**
 * @file application-message-constants-validation.js
 * @module application-message-constants-validation
 * @description Contains validations for named application message constants.
 * @requires module:application-message-constants
 * @author Seth Hollingsead
 * @date 2021/03/08
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as app_msg from '../../Constants/application.message.constants';

 /**
 * @function applicationMessageConstantsValidation
 * @description Initializes the application message constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/03/08
 */
export const applicationMessageConstantsValidation = [
  {Name: 'cclientStringParsingDotCustomEcho', Actual: app_msg.cclientStringParsingDotCustomEcho, Expected: 'clientStringParsing.CustomEcho'},
  {Name: 'ccomparisonIterationIs', Actual: app_msg.ccomparisonIterationIs, Expected: 'comparison iteration is: '},
  {Name: 'cstartingPointIs', Actual: app_msg.cstartingPointIs, Expected: 'startingPoint is: '},
  {Name: 'cendingPointIs', Actual: app_msg.cendingPointIs, Expected: 'endingPoint is: '},
  {Name: 'cinputDataDotCharAtJIs', Actual: app_msg.cinputDataDotCharAtJIs, Expected: 'inputData.charAt(j) is: '},
  {Name: 'cinputDataDotCharAtInputDataDotLengthDash', Actual: app_msg.cinputDataDotCharAtInputDataDotLengthDash, Expected: 'inputData.charAt(inputData.Length - '},
  {Name: 'cCloseParenthesisIs', Actual: app_msg.cCloseParenthesisIs, Expected: ') is: '},
  {Name: 'cWeGotMismatch', Actual: app_msg.cWeGotMismatch, Expected: 'We got a mismatch!'},
  {Name: 'cmisCompareCountBeforeIncrementIs', Actual: app_msg.cmisCompareCountBeforeIncrementIs, Expected: 'misCompareCount before increment is: '},
  {Name: 'cmisCompareCountPostIncrementIs', Actual: app_msg.cmisCompareCountPostIncrementIs, Expected: 'misCompareCount post increment is: '},
  {Name: 'cmisCompareCountAfterForLoopIs', Actual: app_msg.cmisCompareCountAfterForLoopIs, Expected: 'misCompareCount after the for-loop is: '},

  {Name: 'cresolvedConstantsPath_ApplicationBusinessIs', Actual: app_msg.cresolvedConstantsPath_ApplicationBusinessIs, Expected: 'resolvedConstantsPath_ApplicationBusiness is: '},
  {Name: 'cresolvedConstantsPath_ApplicationCommandIs', Actual: app_msg.cresolvedConstantsPath_ApplicationCommandIs, Expected: 'resolvedConstantsPath_ApplicationCommand is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConstantsIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConstantsIs, Expected: 'resolvedConstantsPath_ApplicationConstants is: '},
  {Name: 'cresolvedConstantsPath_ApplicationMessageIs', Actual: app_msg.cresolvedConstantsPath_ApplicationMessageIs, Expected: 'resolvedConstantsPath_ApplicationMessage is: '},
  {Name: 'callClientConstantsValidationDataIs', Actual: app_msg.callClientConstantsValidationDataIs, Expected: 'allClientConstantsValidationData is: '},

  {Name: 'cApplicationBusinessConstantsPhase1Validation', Actual: app_msg.cApplicationBusinessConstantsPhase1Validation, Expected: 'Application Business Constants Phase 1 Validation'},
  {Name: 'cApplicationCommandConstantsPhase1Validation', Actual: app_msg.cApplicationCommandConstantsPhase1Validation, Expected: 'Application Command Constants Phase 1 Validation'},
  {Name: 'cApplicationConstantsPhase1Validation', Actual: app_msg.cApplicationConstantsPhase1Validation, Expected: 'Application Constants Phase 1 Validation'},
  {Name: 'cApplicationMessageConstantsPhase1Validation', Actual: app_msg.cApplicationMessageConstantsPhase1Validation, Expected: 'Application Message Constants Phase 1 Validation'},

  {Name: 'cApplicationBusinessConstantsPhase2Validation', Actual: app_msg.cApplicationBusinessConstantsPhase2Validation, Expected: 'Application Business Constants Phase 2 Validation'},
  {Name: 'cApplicationCommandConstantsPhase2Validation', Actual: app_msg.cApplicationCommandConstantsPhase2Validation, Expected: 'Application Command Constants Phase 2 Validation'},
  {Name: 'cApplicationConstantsPhase2Validation', Actual: app_msg.cApplicationConstantsPhase2Validation, Expected: 'Application Constants Phase 2 Validation'},
  {Name: 'cApplicationMessageConstantsPhase2Validation', Actual: app_msg.cApplicationMessageConstantsPhase2Validation, Expected: 'Application Message Constants Phase 2 Validation'}
];
