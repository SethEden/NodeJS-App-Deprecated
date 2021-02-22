"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ccustomEchoCommand = exports.cProdClientWorkflowsActualPath = exports.cProdClientCommandAliasesActualPath = exports.cDevClientWorkflowsActualPath = exports.cDevClientCommandAliasesActualPath = exports.carrayCounter = exports.cthreePointAverage = exports.cisAlmostPalindrome = exports.cmostPopularNumber = exports.ccustomEcho = exports.cclientEcho = exports.cApplicationProductionRootPath = exports.cApplicationDevelopRootPath = exports.cReleasePath = exports.cProductionRootPath = exports.cDevelopRootPath = exports.cProductionResourcesPath = exports.cDevelopResourcesPath = exports.cResourcesCommonPath = exports.cConfigurationDataLookupPrefixPath = exports.cApplicationName = exports.cConfigurationFilename = void 0;

var bas = _interopRequireWildcard(require("../../../Framework/Constants/basic.constants"));

var gen = _interopRequireWildcard(require("../../../Framework/Constants/generic.constants"));

var wrd = _interopRequireWildcard(require("../../../Framework/Constants/word.constants"));

var sys = _interopRequireWildcard(require("../../../Framework/Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var cConfigurationFilename = wrd.cConfiguration;
exports.cConfigurationFilename = cConfigurationFilename;
var cApplicationName = 'NodeJS-App'; // Configuration Path

exports.cApplicationName = cApplicationName;
var cConfigurationDataLookupPrefixPath = bas.cForwardSlash + wrd.cResources + bas.cForwardSlash;
exports.cConfigurationDataLookupPrefixPath = cConfigurationDataLookupPrefixPath;
var cResourcesCommonPath = wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash + wrd.cResources + bas.cForwardSlash; // Source Resources Path

exports.cResourcesCommonPath = cResourcesCommonPath;
var cDevelopResourcesPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + cResourcesCommonPath; // '/src/Application/NodeJS-App/Resources/';
// Binary Resources Path

exports.cDevelopResourcesPath = cDevelopResourcesPath;
var cProductionResourcesPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash + wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash; // cResourcesCommonPath; // '/bin/Application/NodeJS-App/Resources/'

exports.cProductionResourcesPath = cProductionResourcesPath;
var cDevelopRootPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash;
exports.cDevelopRootPath = cDevelopRootPath;
var cProductionRootPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash;
exports.cProductionRootPath = cProductionRootPath;
var cReleasePath = bas.cForwardSlash + wrd.cRelease + bas.cForwardSlash;
exports.cReleasePath = cReleasePath;
var cApplicationDevelopRootPath = cDevelopRootPath + wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash;
exports.cApplicationDevelopRootPath = cApplicationDevelopRootPath;
var cApplicationProductionRootPath = cProductionRootPath + wrd.cApplication + bas.cForwardSlash + cApplicationName + bas.cForwardSlash; // Client Business Rules

exports.cApplicationProductionRootPath = cApplicationProductionRootPath;
var cclientEcho = wrd.cclient + sys.cEcho; // ********************************
// ClientStringParsing rules in order
// ********************************

exports.cclientEcho = cclientEcho;
var ccustomEcho = wrd.ccustom + sys.cEcho;
exports.ccustomEcho = ccustomEcho;
var cmostPopularNumber = wrd.cmost + wrd.cPopular + wrd.cNumber;
exports.cmostPopularNumber = cmostPopularNumber;
var cisAlmostPalindrome = wrd.cis + wrd.cAlmost + wrd.cPalindrom;
exports.cisAlmostPalindrome = cisAlmostPalindrome;
var cthreePointAverage = gen.cthree + wrd.cPoint + wrd.cAverage;
exports.cthreePointAverage = cthreePointAverage;
var carrayCounter = wrd.carray + wrd.cCounter; // Client Commands

exports.carrayCounter = carrayCounter;
var cDevClientCommandAliasesActualPath = cDevelopResourcesPath + wrd.cCommands + bas.cForwardSlash;
exports.cDevClientCommandAliasesActualPath = cDevClientCommandAliasesActualPath;
var cDevClientWorkflowsActualPath = cDevelopResourcesPath + wrd.cWorkflows + bas.cForwardSlash;
exports.cDevClientWorkflowsActualPath = cDevClientWorkflowsActualPath;
var cProdClientCommandAliasesActualPath = cProductionResourcesPath + wrd.cCommands + bas.cForwardSlash;
exports.cProdClientCommandAliasesActualPath = cProdClientCommandAliasesActualPath;
var cProdClientWorkflowsActualPath = cProductionResourcesPath + wrd.cWorkflows + bas.cForwardSlash; // ********************************
// Client Commands in order
// ********************************

exports.cProdClientWorkflowsActualPath = cProdClientWorkflowsActualPath;
var ccustomEchoCommand = wrd.ccustom + sys.cEcho + wrd.cCommand;
exports.ccustomEchoCommand = ccustomEchoCommand;