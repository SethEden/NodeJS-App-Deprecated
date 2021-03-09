/**
 * @file application.constants.js
 * @module application-constants
 * @description A file to hold all of the client application specific constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:basic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as bas from '../../../Framework/Constants/basic.constants';
import * as wrd from '../../../Framework/Constants/word.constants';

export const cConfigurationFilename = wrd.cConfiguration;
export const cApplicationName = 'NodeJS-App';

// Configuration Path
export const cConfigurationDataLookupPrefixPath = bas.cForwardSlash + wrd.cResources + bas.cForwardSlash;
export const cResourcesCommonPath = wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash + wrd.cResources + bas.cForwardSlash;

// Source Resources Path
export const cDevelopResourcesPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash +  cResourcesCommonPath; // '/src/Application/NodeJS-App/Resources/';

// Binary Resources Path
export const cProductionResourcesPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash + wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash; // cResourcesCommonPath; // '/bin/Application/NodeJS-App/Resources/'

export const cDevelopRootPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash;
export const cProductionRootPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash;
export const cReleasePath = bas.cForwardSlash + wrd.cRelease + bas.cForwardSlash;

export const cApplicationDevelopRootPath = cDevelopRootPath + wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash;
export const cApplicationProductionRootPath = cProductionRootPath + wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash;

// Client Commands
export const cDevClientCommandAliasesActualPath = cDevelopResourcesPath + wrd.cCommands + bas.cForwardSlash;
export const cDevClientWorkflowsActualPath = cDevelopResourcesPath + wrd.cWorkflows + bas.cForwardSlash;
export const cProdClientCommandAliasesActualPath = cProductionResourcesPath + wrd.cCommands + bas.cForwardSlash;
export const cProdClientWorkflowsActualPath = cProductionResourcesPath + wrd.cWorkflows + bas.cForwardSlash;

export const capplicationBusinessConstantsValidation = wrd.capplication + bas.cDash + wrd.cbusiness + bas.cDash + wrd.cconstants + bas.cDash + wrd.cvalidation; // application-business-constants-validation
export const capplicationCommandConstantsValidation = wrd.capplication + bas.cDash + wrd.ccommand + bas.cDash + wrd.cconstants + bas.cDash + wrd.cvalidation; // application-command-constants-validation
export const capplicationConstantsValidation = wrd.capplication + bas.cDash + wrd.cconstants + bas.cDash + wrd.cvalidation; // application-constants-validation
export const capplicationMessageConstantsValidation = wrd.capplication + bas.cDash + wrd.cmessage + bas.cDash + wrd.cconstants + bas.cDash + wrd.cvalidation; // application-message-constants-validation
