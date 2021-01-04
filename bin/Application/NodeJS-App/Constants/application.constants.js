"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ccustomEchoCommand = exports.cProdClientWorkflowsActualPath = exports.cProdClientCommandAliasesActualPath = exports.cDevClientWorkflowsActualPath = exports.cDevClientCommandAliasesActualPath = exports.carrayCounter = exports.cthreePointAverage = exports.cisAlmostPalindrome = exports.cmostPopularNumber = exports.ccustomEcho = exports.cclientEcho = exports.cApplicationProductionRootPath = exports.cApplicationDevelopRootPath = exports.cReleasePath = exports.cProductionRootPath = exports.cDevelopRootPath = exports.cProductionResourcesPath = exports.cDevelopResourcesPath = exports.cResourcesCommonPath = exports.cConfigurationDataLookupPrefixPath = exports.cApplicationName = exports.cConfigurationFilename = void 0;

var b = _interopRequireWildcard(require("../../../Framework/Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../../Framework/Constants/generic.constants"));

var n = _interopRequireWildcard(require("../../../Framework/Constants/numeric.constants"));

var w = _interopRequireWildcard(require("../../../Framework/Constants/word.constants"));

var s = _interopRequireWildcard(require("../../../Framework/Constants/system.constants"));

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
var cConfigurationFilename = w.cConfiguration;
exports.cConfigurationFilename = cConfigurationFilename;
var cApplicationName = 'NodeJS-App'; // Configuration Path

exports.cApplicationName = cApplicationName;
var cConfigurationDataLookupPrefixPath = b.cForwardSlash + w.cResources + b.cForwardSlash;
exports.cConfigurationDataLookupPrefixPath = cConfigurationDataLookupPrefixPath;
var cResourcesCommonPath = w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash + w.cResources + b.cForwardSlash; // Source Resources Path

exports.cResourcesCommonPath = cResourcesCommonPath;
var cDevelopResourcesPath = b.cForwardSlash + w.csrc + b.cForwardSlash + cResourcesCommonPath; // '/src/Application/NodeJS-App/Resources/';
// Binary Resources Path

exports.cDevelopResourcesPath = cDevelopResourcesPath;
var cProductionResourcesPath = b.cForwardSlash + w.cbin + b.cForwardSlash + w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash; // cResourcesCommonPath; // '/bin/Application/NodeJS-App/Resources/'

exports.cProductionResourcesPath = cProductionResourcesPath;
var cDevelopRootPath = b.cForwardSlash + w.csrc + b.cForwardSlash;
exports.cDevelopRootPath = cDevelopRootPath;
var cProductionRootPath = b.cForwardSlash + w.cbin + b.cForwardSlash;
exports.cProductionRootPath = cProductionRootPath;
var cReleasePath = b.cForwardSlash + w.cRelease + b.cForwardSlash;
exports.cReleasePath = cReleasePath;
var cApplicationDevelopRootPath = cDevelopRootPath + w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash;
exports.cApplicationDevelopRootPath = cApplicationDevelopRootPath;
var cApplicationProductionRootPath = cProductionRootPath + w.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash; // Client Business Rules

exports.cApplicationProductionRootPath = cApplicationProductionRootPath;
var cclientEcho = w.cclient + s.cEcho; // ********************************
// ClientStringParsing rules in order
// ********************************

exports.cclientEcho = cclientEcho;
var ccustomEcho = w.ccustom + s.cEcho;
exports.ccustomEcho = ccustomEcho;
var cmostPopularNumber = w.cmost + w.cPopular + w.cNumber;
exports.cmostPopularNumber = cmostPopularNumber;
var cisAlmostPalindrome = w.cis + w.cAlmost + w.cPalindrom;
exports.cisAlmostPalindrome = cisAlmostPalindrome;
var cthreePointAverage = g.cthree + w.cPoint + w.cAverage;
exports.cthreePointAverage = cthreePointAverage;
var carrayCounter = w.carray + w.cCounter; // Client Commands

exports.carrayCounter = carrayCounter;
var cDevClientCommandAliasesActualPath = cDevelopResourcesPath + w.cCommands + b.cForwardSlash;
exports.cDevClientCommandAliasesActualPath = cDevClientCommandAliasesActualPath;
var cDevClientWorkflowsActualPath = cDevelopResourcesPath + w.cWorkflows + b.cForwardSlash;
exports.cDevClientWorkflowsActualPath = cDevClientWorkflowsActualPath;
var cProdClientCommandAliasesActualPath = cProductionResourcesPath + w.cCommands + b.cForwardSlash;
exports.cProdClientCommandAliasesActualPath = cProdClientCommandAliasesActualPath;
var cProdClientWorkflowsActualPath = cProductionResourcesPath + w.cWorkflows + b.cForwardSlash; // ********************************
// Client Commands in order
// ********************************

exports.cProdClientWorkflowsActualPath = cProdClientWorkflowsActualPath;
var ccustomEchoCommand = w.ccustom + s.cEcho + w.cCommand;
exports.ccustomEchoCommand = ccustomEchoCommand;