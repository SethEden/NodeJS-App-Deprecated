import * as b from '../../../Framework/Constants/basic.constants';
import * as g from '../../../Framework/Constants/generic.constants';
import * as s from '../../../Framework/Constants/system.constants';

export const cConfigurationFilename = s.cConfiguration;
export const cApplicationName = 'NodeJS-App';

// Configuration Path
export const cConfigurationDataLookupPrefixPath = b.cForwardSlash + s.cResources + b.cForwardSlash;
export const cResourcesCommonPath = s.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash + s.cResources + b.cForwardSlash;

// Source Resources Path
export const cSourceResourcesPath = b.cForwardSlash + s.csrc + b.cForwardSlash + cResourcesCommonPath; // '/src/Application/NodeJS-App/Resources/';

// Binary Resources Path
export const cBinaryResourcesPath = b.cForwardSlash + s.cbin + b.cForwardSlash + cResourcesCommonPath; // '/bin/Application/NodeJS-App/Resources/'
export const cBinaryRootPath = b.cForwardSlash + s.cbin + b.cForwardSlash;
export const cBinaryReleasePath = b.cForwardSlash + s.cRelease + b.cForwardSlash;
