/**
 * @file commands.constants.js
 * @module commands-constants
 * @description Contains many re-usable commands constants.
 * @requires module:basic-constants
 * @requires module:business-constants
 * @requires module:word-constants
 * @reqiores module:system-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as bas from './basic.constants';
import * as biz from './business.constants';
import * as wrd from './word.constants';
import * as sys from './system.constants';

// Commands
export const cSystemCommandsAliasesActualPath = bas.cForwardSlash + sys.cFramework + bas.cForwardSlash + wrd.cResources + bas.cForwardSlash + wrd.cCommands + bas.cForwardSlash; // SystemCommandsAliasesActualPath
export const cSystemWorkflowsActualPath = bas.cForwardSlash + sys.cFramework + bas.cForwardSlash + wrd.cResources + bas.cForwardSlash + wrd.cWorkflows + bas.cForwardSlash; // SystemWorkflowsActualPath
export const cDevSystemCommandsAliasesActualPath = wrd.csrc + cSystemCommandsAliasesActualPath; // DevSystemCommandsAliasesActualPath
export const cDevSystemWorkflowsActualPath = wrd.csrc + cSystemWorkflowsActualPath; // DevSystemWorkflowsActualPath
export const cProdSystemCommandsAliasesActualPath = wrd.cbin + cSystemCommandsAliasesActualPath; // ProdSystemCommasAliasesActualPath
export const cProdSystemWorkflowsActualPath = wrd.cbin + cSystemWorkflowsActualPath; // ProdSystemWorkflowsActualPath
export const cSystemCommandsAliasesPath = wrd.cSystem + wrd.cCommands + wrd.cAliases + wrd.cPath; // SystemCommandsAliasesPath
export const cClientCommandsAliasesPath = wrd.cClient + wrd.cCommands + wrd.cAliases + wrd.cPath; // ClientCommandsAliasesPath
export const cSystemWorkflowsPath = wrd.cSystem + wrd.cWorkflows + wrd.cPath; // SystemWorkflowsPath
export const cClientWorkflowsPath = wrd.cClient + wrd.cWorkflows + wrd.cPath; // ClientWorkflowsPath
// ********************************
// Nominal Commands in order
// ********************************
export const cechoCommand = biz.cecho + wrd.cCommand; // echoCommand
export const cEchoCommand = biz.cEcho + wrd.cCommand; // EchoCommand
export const cclearScreen = wrd.cclear + wrd.cScreen; // clearScreen
export const cworkflowHelp = wrd.cworkflow + wrd.cHelp; // workflowHelp
export const ccommandSequencer = wrd.ccommand + wrd.cSequencer; // commandSequencer
export const cprintDataHive = wrd.cprint + wrd.cData + wrd.cHive; // printDataHive
export const cprintDataHiveAttributes = wrd.cprint + wrd.cData + wrd.cHive + wrd.cAttributes; // printDataHiveAttributes
export const cclearDataStorage = wrd.cclear + wrd.cData + wrd.cStorage; // clearDataStorage
export const ccommandGenerator = wrd.ccommand + wrd.cGenerator; // commandGenerator
export const ccommandAliasGenerator = wrd.ccommand + wrd.cAlias + wrd.cGenerator; // commandAliasGenerator
export const cconstantsGenerator = wrd.cconstants + wrd.cGenerator; // constantsGenerator
export const cconstantsGeneratorList = cconstantsGenerator + wrd.cList; // constantsGeneratorList
export const cconstantsPatternRecognizer = wrd.cconstants + wrd.cPattern + wrd.cRecognizer; // constantsPatternRecognizer
export const cbusinessRulesMetrics = wrd.cbusiness + wrd.cRules + wrd.cMetrics; // businessRulesMetrics
export const ccommandMetrics = wrd.ccommand + wrd.cMetrics; // commandMetrics
export const csaveConfiguration = wrd.csave + wrd.cConfiguration; // saveConfiguration
export const cconvertColors = wrd.cconvert + wrd.cColors; // convertColors
// ********************************
// Unit Test Constants commands in order
// ********************************
export const cvalidateConstants = wrd.cvalidate + wrd.cConstants; // validateConstants
export const cvalidateCommandAliases = wrd.cvalidate + wrd.cCommand + wrd.cAliases; // validateCommandAliases

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cstartup; // Workflow startup
export const cBuildWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cbuild; // Workflow build
export const cReleaseWorkflow = wrd.cWorkflow + bas.cSpace + wrd.crelease; // Workflow release
