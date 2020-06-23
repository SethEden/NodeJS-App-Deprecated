/**
 * @file application.constants.js
 * @module application-constants
 * @description A file to hold all of the client application specific constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from '../../../Framework/Constants/basic.constants';
import * as g from '../../../Framework/Constants/generic.constants';
import * as s from '../../../Framework/Constants/system.constants';

export const cConfigurationFilename = s.cConfiguration;
export const cApplicationName = 'NodeJS-App';

// Configuration Path
export const cConfigurationDataLookupPrefixPath = b.cForwardSlash + s.cResources + b.cForwardSlash;
export const cResourcesCommonPath = s.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash + s.cResources + b.cForwardSlash;

// Source Resources Path
export const cSourceResourcesPath = b.cForwardSlash + s.csrc + b.cForwardSlash +  cResourcesCommonPath; // '/src/Application/NodeJS-App/Resources/';

// Binary Resources Path
export const cBinaryResourcesPath = b.cForwardSlash + s.cbin + b.cForwardSlash + s.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash; // cResourcesCommonPath; // '/bin/Application/NodeJS-App/Resources/'
export const cBinaryRootPath = b.cForwardSlash + s.cbin + b.cForwardSlash;
export const cBinaryReleasePath = b.cForwardSlash + s.cRelease + b.cForwardSlash;

// Client Business Rules
export const cclientEcho = s.cclient + s.cEcho;
// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = s.ccustom + s.cEcho;
export const cmostPopularNumber = s.cmost + s.cPopular + s.cNumber;
export const cisAlmostPalindrome = b.cis + s.cAlmost + s.cPalindrom;
export const cthreePointAverage = g.cthree + s.cPoint + s.cAverage;
export const carrayCounter = s.carray + s.cCounter;

// Client Commands
export const cClientCommandAliasesActualPath = s.csrc + b.cForwardSlash + s.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash + s.cCommands + b.cForwardSlash;
export const cClientWorkflowsActualPath = cSourceResourcesPath + s.cWorkflows + b.cForwardSlash;
// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = s.ccustom + s.cEcho + s.cCommand;
