/**
 * @file commands-constants-validation.js
 * @module commands-constants-validation
 * @description Contains validations for commands.
 * @requires module:commands-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as cmd from '../../Constants/commands.constants';

 /**
 * @function commandsConstantsValidation
 * @description Initializes the commands constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/02/17
 */
 export const commandsConstantsValidation = [
   // Commands
   {Name: 'cSystemCommandsAliasesActualPath', Actual: cmd.cSystemCommandsAliasesActualPath, Expected: '/Framework/Resources/Commands/'},
   {Name: 'cSystemWorkflowsActualPath', Actual: cmd.cSystemWorkflowsActualPath, Expected: '/Framework/Resources/Workflows/'},
   {Name: 'cDevSystemCommandsAliasesActualPath', Actual: cmd.cDevSystemCommandsAliasesActualPath, Expected: 'src/Framework/Resources/Commands/'},
   {Name: 'cDevSystemWorkflowsActualPath', Actual: cmd.cDevSystemWorkflowsActualPath, Expected: 'src/Framework/Resources/Workflows/'},
   {Name: 'cProdSystemCommandsAliasesActualPath', Actual: cmd.cProdSystemCommandsAliasesActualPath, Expected: 'bin/Framework/Resources/Commands/'},
   {Name: 'cProdSystemWorkflowsActualPath', Actual: cmd.cProdSystemWorkflowsActualPath, Expected: 'bin/Framework/Resources/Workflows/'},
   {Name: 'cSystemCommandsAliasesPath', Actual: cmd.cSystemCommandsAliasesPath, Expected: 'SystemCommandsAliasesPath'},
   {Name: 'cClientCommandsAliasesPath', Actual: cmd.cClientCommandsAliasesPath, Expected: 'ClientCommandsAliasesPath'},
   {Name: 'cSystemWorkflowsPath', Actual: cmd.cSystemWorkflowsPath, Expected: 'SystemWorkflowsPath'},
   {Name: 'cClientWorkflowsPath', Actual: cmd.cClientWorkflowsPath, Expected: 'ClientWorkflowsPath'},
   // ********************************
   // Nominal Commands in order
   // ********************************
   {Name: 'cechoCommand', Actual: cmd.cechoCommand, Expected: 'echoCommand'},
   {Name: 'cEchoCommand', Actual: cmd.cEchoCommand, Expected: 'EchoCommand'},
   {Name: 'cclearScreen', Actual: cmd.cclearScreen, Expected: 'clearScreen'},
   {Name: 'cworkflowHelp', Actual: cmd.cworkflowHelp, Expected: 'workflowHelp'},
   {Name: 'ccommandSequencer', Actual: cmd.ccommandSequencer, Expected: 'commandSequencer'},
   {Name: 'cprintDataHive', Actual: cmd.cprintDataHive, Expected: 'printDataHive'},
   {Name: 'cprintDataHiveAttributes', Actual: cmd.cprintDataHiveAttributes, Expected: 'printDataHiveAttributes'},
   {Name: 'cclearDataStorage', Actual: cmd.cclearDataStorage, Expected: 'clearDataStorage'},
   {Name: 'ccommandGenerator', Actual: cmd.ccommandGenerator, Expected: 'commandGenerator'},
   {Name: 'ccommandAliasGenerator', Actual: cmd.ccommandAliasGenerator, Expected: 'commandAliasGenerator'},
   {Name: 'cconstantsGenerator', Actual: cmd.cconstantsGenerator, Expected: 'constantsGenerator'},
   {Name: 'cconstantsGeneratorList', Actual: cmd.cconstantsGeneratorList, Expected: 'constantsGeneratorList'},
   {Name: 'cconstantsPatternRecognizer', Actual: cmd.cconstantsPatternRecognizer, Expected: 'constantsPatternRecognizer'},
   {Name: 'cbusinessRulesMetrics', Actual: cmd.cbusinessRulesMetrics, Expected: 'businessRulesMetrics'},
   {Name: 'ccommandMetrics', Actual: cmd.ccommandMetrics, Expected: 'commandMetrics'},
   {Name: 'cconvertColors', Actual: cmd.cconvertColors, Expected: 'convertColors'},

   // ********************************
   // Unit Test Constants commands in order
   // ********************************
   {Name: 'cvalidateConstants', Actual: cmd.cvalidateConstants, Expected: 'validateConstants'},
   {Name: 'cvalidateCommandAliases', Actual: cmd.cvalidateCommandAliases, Expected: 'validateCommandAliases'},

   // ********************************
   // System defined workflows
   // ********************************
   {Name: 'cStartupWorkflow', Actual: cmd.cStartupWorkflow, Expected: 'Workflow startup'},
   {Name: 'cBuildWorkflow', Actual: cmd.cBuildWorkflow, Expected: 'Workflow build'},
   {Name: 'cReleaseWorkflow', Actual: cmd.cReleaseWorkflow, Expected: 'Workflow release'}
 ];
