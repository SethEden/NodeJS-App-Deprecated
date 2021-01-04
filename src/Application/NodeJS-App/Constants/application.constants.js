/**
 * @file application.constants.js
 * @module application-constants
 * @description A file to hold all of the client application specific constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from '../../../Framework/Constants/basic.constants';
import * as g from '../../../Framework/Constants/generic.constants';
import * as n from '../../../Framework/Constants/numeric.constants';
import * as w from '../../../Framework/Constants/word.constants';
import * as s from '../../../Framework/Constants/system.constants';

export const cConfigurationFilename = w.cConfiguration;
export const cApplicationName = 'NodeJS-App';

// Configuration Path
export const cConfigurationDataLookupPrefixPath = b.cForwardSlash + w.cResources + b.cForwardSlash;
export const cResourcesCommonPath = w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash + w.cResources + b.cForwardSlash;

// Source Resources Path
export const cDevelopResourcesPath = b.cForwardSlash + w.csrc + b.cForwardSlash +  cResourcesCommonPath; // '/src/Application/NodeJS-App/Resources/';

// Binary Resources Path
export const cProductionResourcesPath = b.cForwardSlash + w.cbin + b.cForwardSlash + w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash; // cResourcesCommonPath; // '/bin/Application/NodeJS-App/Resources/'

export const cDevelopRootPath = b.cForwardSlash + w.csrc + b.cForwardSlash;
export const cProductionRootPath = b.cForwardSlash + w.cbin + b.cForwardSlash;
export const cReleasePath = b.cForwardSlash + w.cRelease + b.cForwardSlash;

export const cApplicationDevelopRootPath = cDevelopRootPath + w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash;
export const cApplicationProductionRootPath = cProductionRootPath + w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash;

// Client Business Rules
export const cclientEcho = w.cclient + s.cEcho;
// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = w.ccustom + s.cEcho;
export const cmostPopularNumber = w.cmost + w.cPopular + w.cNumber;
export const cisAlmostPalindrome = w.cis + w.cAlmost + w.cPalindrom;
export const cthreePointAverage = g.cthree + w.cPoint + w.cAverage;
export const carrayCounter = w.carray + w.cCounter;

// Client Commands
export const cDevClientCommandAliasesActualPath = cDevelopResourcesPath + w.cCommands + b.cForwardSlash;
export const cDevClientWorkflowsActualPath = cDevelopResourcesPath + w.cWorkflows + b.cForwardSlash;
export const cProdClientCommandAliasesActualPath = cProductionResourcesPath + w.cCommands + b.cForwardSlash;
export const cProdClientWorkflowsActualPath = cProductionResourcesPath + w.cWorkflows + b.cForwardSlash;
// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = w.ccustom + s.cEcho + w.cCommand;
