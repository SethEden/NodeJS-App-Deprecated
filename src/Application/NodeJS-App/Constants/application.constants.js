/**
 * @file application.constants.js
 * @module application-constants
 * @description A file to hold all of the client application specific constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as bas from '../../../Framework/Constants/basic.constants';
import * as phn from '../../../Framework/Constants/phonic.constants';
import * as gen from '../../../Framework/Constants/generic.constants';
import * as wrd from '../../../Framework/Constants/word.constants';
import * as sys from '../../../Framework/Constants/system.constants';

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

// Client Business Rules
export const cclientEcho = wrd.cclient + wrd.cEcho;
// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = wrd.ccustom + wrd.cEcho;
export const cmostPopularNumber = wrd.cmost + wrd.cPopular + wrd.cNumber;
export const cisAlmostPalindrome = wrd.cis + wrd.cAlmost + wrd.cPalindrom;
export const cthreePointAverage = gen.cthree + wrd.cPoint + wrd.cAverage;
export const carrayCounter = wrd.carray + wrd.cCounter;

// Client Commands
export const cDevClientCommandAliasesActualPath = cDevelopResourcesPath + wrd.cCommands + bas.cForwardSlash;
export const cDevClientWorkflowsActualPath = cDevelopResourcesPath + wrd.cWorkflows + bas.cForwardSlash;
export const cProdClientCommandAliasesActualPath = cProductionResourcesPath + wrd.cCommands + bas.cForwardSlash;
export const cProdClientWorkflowsActualPath = cProductionResourcesPath + wrd.cWorkflows + bas.cForwardSlash;
// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = wrd.ccustom + wrd.cEcho + wrd.cCommand; // customEchoCommand
export const cbossPanic = wrd.cboss + wrd.cPanic; // bossPanic
