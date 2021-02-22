/**
 * @file configurations.constants.js
 * @module configurations-constants
 * @description Contains many re-usable configurations constants.
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as bas from './basic.constants';
import * as gen from './generic.constants';
import * as wrd from './word.constants';
import * as sys from './system.constants';

// Configuration Settings
export const cmetaDataDotJson = wrd.cmetaData + bas.cDot + gen.cjson; // metaData.json
export const cArgumentDrivenInterface = wrd.cArgument + wrd.cDriven + wrd.cInterface; // ArgumentDrivenInterface
export const cFigletFont = wrd.cFiglet + wrd.cFont; // FigletFont
export const cPrimaryCommandDelimiter = wrd.cPrimary + wrd.cCommand + wrd.cDelimiter; // PrimaryCommandDelimiter
export const cSecondaryCommandDelimiter = wrd.cSecondary + wrd.cCommand + wrd.cDelimiter; // SecondaryCommandDelimiter
export const cTertiaryCommandDelimiter = wrd.cTertiary + wrd.cCommand + wrd.cDelimiter; // TertiaryCommandDelimiter
export const cEnableBusinessRuleOutput = wrd.cEnable + wrd.cBusiness + wrd.cRule + wrd.cOutput; // EnableBusinessRuleOutput
export const cEnableBusinessRulePerformanceMetrics = wrd.cEnable + wrd.cBusiness + wrd.cRule + wrd.cPerformance + wrd.cMetrics; // EnableBusinessRulePerformanceMetrics
export const cEnableCommandPerformanceMetrics = wrd.cEnable + wrd.cCommand + wrd.cPerformance + wrd.cMetrics; // EnableCommandPerformanceMetrics
export const cEnableConstantsValidation = wrd.cEnable + wrd.cConstants + wrd.cValidation; // EnableConstantsValidation
export const cEnableConstantsPatternGeneration = wrd.cEnable + wrd.cConstants + wrd.cPattern + wrd.cGeneration; // EnableConstantsPatternGeneration
export const cDisplayIndividualConstantsValidationPassMessages = wrd.cDisplay + wrd.cIndividual + wrd.cConstants + wrd.cValidation + wrd.cPass + wrd.cMessages; // DisplayIndividualConstantsValidationPassMessages
export const cDisplayIndividualConstantsValidationFailMessages = wrd.cDisplay + wrd.cIndividual + wrd.cConstants + wrd.cValidation + wrd.cFail + wrd.cMessages; // DisplayIndividualConstantsValidationFailMessages
export const cDisplaySummaryConstantsValidationPassMessages = wrd.cDisplay + wrd.cSummary + wrd.cConstants + wrd.cValidation + wrd.cPass + wrd.cMessages; // DisplaySummaryConstantsValidationPassMessages
export const cDisplaySummaryConstantsValidationFailMessages = wrd.cDisplay + wrd.cSummary + wrd.cConstants + wrd.cValidation + wrd.cFail + wrd.cMessages; // DisplaySummaryConstantsValidationFailMessages
export const cPassAllConstantsValidations = wrd.cPass + wrd.cAll + wrd.cConstants + wrd.cValidations; // PassAllConstantsValidations
export const cPassedAllCommandAliasesDuplicateChecks = wrd.cPassed + wrd.cAll + wrd.cCommand + wrd.cAliases + wrd.cDuplicate + wrd.cChecks
export const cdeploymentCompleted = wrd.cdeployment + wrd.cCompleted; // deploymentCompleted
export const creleaseCompleted = wrd.crelease + wrd.cCompleted; // releaseCompleted
export const cEnableColorizedConsoleLogs = wrd.cEnable + wrd.cColorized + wrd.cConsole + wrd.cLogs; // EnableColorizedConsoleLogs

// Test Time Tracking
export const cBeginDateTimeStamp = wrd.cBegin + sys.cDateTimeStamp; // BeginDateTimeStamp
export const cEndDateTimeStamp = wrd.cEnd + sys.cDateTimeStamp; // EndDateTimeStamp
export const cItemsIndividuallySynch = wrd.cItems + wrd.cIndividually + wrd.cSynch; // ItemsIndividuallySynch
export const cTimeStampVariableName = sys.cTimeStamp + wrd.cVariable + wrd.cName; // TimeStampVariableName
export const cBeginTimeStampVariableName = wrd.cBegin + cTimeStampVariableName; // BeginTimeStampVariableName
export const cEndTimeStampVariableName = wrd.cEnd + cTimeStampVariableName; // EndTimeStampVariableName
export const cBusinessRulePerformanceTrackingStack = wrd.cBusiness + wrd.cRule + wrd.cPerformance + wrd.cTracking + wrd.cStack; // BusinessRulePerformanceTrackingStack
export const cBusinessRuleNamesPerformanceTrackingStack = wrd.cBusiness + wrd.cRule + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack; // BusinessRuleNamesPerformanceTrackingStack
export const cBusinessRulesPerformanceAnalysisStack = wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cAnalysis + wrd.cStack; // BusinessRulesPerformanceAnalysisStack
export const cClearBusinessRulesPerformanceDataAfterAnalysis = wrd.cClear + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cData + wrd.cAfter + wrd.cAnalysis; // ClearBusinessRulesPerformanceDataAfterAnalysis
export const cCommandPerformanceTrackingStack = wrd.cCommand + wrd.cPerformance + wrd.cTracking + wrd.cStack; // CommandPerformanceTrackingStack
export const cCommandNamesPerformanceTrackingStack = wrd.cCommand + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack; // CommandNamesPerformanceTrackingStack
export const cCommandsPerformanceAnalysisStack = wrd.cCommands + wrd.cPerformance + wrd.cAnalysis + wrd.cStack; // CommandsPerformanceAnalysisStack
export const cClearCommandPerformanceDataAfterAnalysis = wrd.cClear + wrd.cCommand + wrd.cPerformance + wrd.cData + wrd.cAfter + wrd.cAnalysis; // ClearCommandPerformanceDataAfterAnalysis
