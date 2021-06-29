/**
 * @file configuration-constants-validation.js
 * @module configuration-constants-validation
 * @description Contains validations for configurations.
 * @requires module:configuration-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as cfg from '../../Constants/configuration.constants';

 /**
 * @function configurationConstantsValidation
 * @description Initializes the configuration constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/02/17
 */
 export const configurationConstantsValidation = [
   // Configuration Settings
   {Name: 'cmetaDataDotJson', Actual: cfg.cmetaDataDotJson, Expected: 'metaData.json'},
   {Name: 'cArgumentDrivenInterface', Actual: cfg.cArgumentDrivenInterface, Expected: 'ArgumentDrivenInterface'},
   {Name: 'cFigletFont', Actual: cfg.cFigletFont, Expected: 'FigletFont'},
   {Name: 'cPrimaryCommandDelimiter', Actual: cfg.cPrimaryCommandDelimiter, Expected: 'PrimaryCommandDelimiter'},
   {Name: 'cSecondaryCommandDelimiter', Actual: cfg.cSecondaryCommandDelimiter, Expected: 'SecondaryCommandDelimiter'},
   {Name: 'cTertiaryCommandDelimiter', Actual: cfg.cTertiaryCommandDelimiter, Expected: 'TertiaryCommandDelimiter'},
   {Name: 'cEnableBusinessRuleOutput', Actual: cfg.cEnableBusinessRuleOutput, Expected: 'EnableBusinessRuleOutput'},
   {Name: 'cEnableBusinessRulePerformanceMetrics', Actual: cfg.cEnableBusinessRulePerformanceMetrics, Expected: 'EnableBusinessRulePerformanceMetrics'},
   {Name: 'cEnableCommandPerformanceMetrics', Actual: cfg.cEnableCommandPerformanceMetrics, Expected: 'EnableCommandPerformanceMetrics'},
   {Name: 'cEnableConstantsValidation', Actual: cfg.cEnableConstantsValidation, Expected: 'EnableConstantsValidation'},
   {Name: 'cEnableConstantsPatternGeneration', Actual: cfg.cEnableConstantsPatternGeneration, Expected: 'EnableConstantsPatternGeneration'},
   {Name: 'cEnableDebugConfigurationSettings', Actual: cfg.cEnableDebugConfigurationSettings, Expected: 'EnableDebugConfigurationSettings'},
   {Name: 'cDebugSettings', Actual: cfg.cDebugSettings, Expected: 'DebugSettings'},
   {Name: 'cDisplayIndividualConstantsValidationPassMessages', Actual: cfg.cDisplayIndividualConstantsValidationPassMessages, Expected: 'DisplayIndividualConstantsValidationPassMessages'},
   {Name: 'cDisplayIndividualConstantsValidationFailMessages', Actual: cfg.cDisplayIndividualConstantsValidationFailMessages, Expected: 'DisplayIndividualConstantsValidationFailMessages'},
   {Name: 'cDisplaySummaryConstantsValidationPassMessages', Actual: cfg.cDisplaySummaryConstantsValidationPassMessages, Expected: 'DisplaySummaryConstantsValidationPassMessages'},
   {Name: 'cDisplaySummaryConstantsValidationFailMessages', Actual: cfg.cDisplaySummaryConstantsValidationFailMessages, Expected: 'DisplaySummaryConstantsValidationFailMessages'},
   {Name: 'cPassAllConstantsValidations', Actual: cfg.cPassAllConstantsValidations, Expected: 'PassAllConstantsValidations'},
   {Name: 'cPassedAllCommandAliasesDuplicateChecks', Actual: cfg.cPassedAllCommandAliasesDuplicateChecks, Expected: 'PassedAllCommandAliasesDuplicateChecks'},
   {Name: 'cdeploymentCompleted', Actual: cfg.cdeploymentCompleted, Expected: 'deploymentCompleted'},
   {Name: 'creleaseCompleted', Actual: cfg.creleaseCompleted, Expected: 'releaseCompleted'},
   {Name: 'cEnableColorizedConsoleLogs', Actual: cfg.cEnableColorizedConsoleLogs, Expected: 'EnableColorizedConsoleLogs'},

   // Test Time Tracking
   {Name: 'cBeginDateTimeStamp', Actual: cfg.cBeginDateTimeStamp, Expected: 'BeginDateTimeStamp'},
   {Name: 'cEndDateTimeStamp', Actual: cfg.cEndDateTimeStamp, Expected: 'EndDateTimeStamp'},
   {Name: 'cItemsIndividuallySynch', Actual: cfg.cItemsIndividuallySynch, Expected: 'ItemsIndividuallySynch'},
   {Name: 'cTimeStampVariableName', Actual: cfg.cTimeStampVariableName, Expected: 'TimeStampVariableName'},
   {Name: 'cBeginTimeStampVariableName', Actual: cfg.cBeginTimeStampVariableName, Expected: 'BeginTimeStampVariableName'},
   {Name: 'cEndTimeStampVariableName', Actual: cfg.cEndTimeStampVariableName, Expected: 'EndTimeStampVariableName'},
   {Name: 'cBusinessRulePerformanceTrackingStack', Actual: cfg.cBusinessRulePerformanceTrackingStack, Expected: 'BusinessRulePerformanceTrackingStack'},
   {Name: 'cBusinessRuleNamesPerformanceTrackingStack', Actual: cfg.cBusinessRuleNamesPerformanceTrackingStack, Expected: 'BusinessRuleNamesPerformanceTrackingStack'},
   {Name: 'cBusinessRulesPerformanceAnalysisStack', Actual: cfg.cBusinessRulesPerformanceAnalysisStack, Expected: 'BusinessRulesPerformanceAnalysisStack'},
   {Name: 'cClearBusinessRulesPerformanceDataAfterAnalysis', Actual: cfg.cClearBusinessRulesPerformanceDataAfterAnalysis, Expected: 'ClearBusinessRulesPerformanceDataAfterAnalysis'},
   {Name: 'cCommandPerformanceTrackingStack', Actual: cfg.cCommandPerformanceTrackingStack, Expected: 'CommandPerformanceTrackingStack'},
   {Name: 'cCommandNamesPerformanceTrackingStack', Actual: cfg.cCommandNamesPerformanceTrackingStack, Expected: 'CommandNamesPerformanceTrackingStack'},
   {Name: 'cCommandsPerformanceAnalysisStack', Actual: cfg.cCommandsPerformanceAnalysisStack, Expected: 'CommandsPerformanceAnalysisStack'},
   {Name: 'cClearCommandPerformanceDataAfterAnalysis', Actual: cfg.cClearCommandPerformanceDataAfterAnalysis, Expected: 'ClearCommandPerformanceDataAfterAnalysis'},
 ];
