"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCommandsLibrary = void 0;

var nominalCommands = _interopRequireWildcard(require("./Commands/nominal"));

var unitTests = _interopRequireWildcard(require("./Commands/unitTests"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var wrd = _interopRequireWildcard(require("../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var msg = _interopRequireWildcard(require("../Constants/message.constants"));

var cmd = _interopRequireWildcard(require("../Constants/command.constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');

var D = require('../Structures/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Framework.CommandsBlob.commandsLibrary.

var namespacePrefix = sys.cFramework + bas.cDot + wrd.cCommands + wrd.cBlob + bas.cDot + baseFileName + bas.cDot;
/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */

var initCommandsLibrary = function initCommandsLibrary() {
  var _D$wrd$cCommands;

  var functionName = initCommandsLibrary.name; // console.log('BEGIN commandsLibrary.initCommandsLibrary');

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  D[wrd.cCommands] = {};
  D[wrd.cCommands] = (_D$wrd$cCommands = {}, _defineProperty(_D$wrd$cCommands, cmd.cechoCommand, function (inputData, inputMetaData) {
    return nominalCommands.echoCommand(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, wrd.cexit, function (inputData, inputMetaData) {
    return nominalCommands.exit(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, wrd.cversion, function (inputData, inputMetaData) {
    return nominalCommands.version(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, wrd.cabout, function (inputData, inputMetaData) {
    return nominalCommands.about(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, wrd.cname, function (inputData, inputMetaData) {
    return nominalCommands.name(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cclearScreen, function (inputData, inputMetaData) {
    return nominalCommands.clearScreen(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, sys.cdeployApplication, function (inputData, inputMetaData) {
    return nominalCommands.deployApplication(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, sys.cdeployMetaData, function (inputData, inputMetaData) {
    return nominalCommands.deployMetaData(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, sys.creleaseApplication, function (inputData, inputMetaData) {
    return nominalCommands.releaseApplication(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, wrd.chelp, function (inputData, inputMetaData) {
    return nominalCommands.help(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cworkflowHelp, function (inputData, inputMetaData) {
    return nominalCommands.workflowHelp(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.ccommandSequencer, function (inputData, inputMetaData) {
    return nominalCommands.commandSequencer(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, wrd.cworkflow, function (inputData, inputMetaData) {
    return nominalCommands.workflow(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cprintDataHive, function (inputData, inputMetaData) {
    return nominalCommands.printDataHive(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cprintDataHiveAttributes, function (inputData, inputMetaData) {
    return nominalCommands.printDataHiveAttributes(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cclearDataStorage, function (inputData, inputMetaData) {
    return nominalCommands.clearDataStorage(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, sys.cbusinessRule, function (inputData, inputMetaData) {
    return nominalCommands.businessRule(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.ccommandGenerator, function (inputData, inputMetaData) {
    return nominalCommands.commandGenerator(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.ccommandAliasGenerator, function (inputData, inputMetaData) {
    return nominalCommands.commandAliasGenerator(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cconstantsGenerator, function (inputData, inputMetaData) {
    return nominalCommands.constantsGenerator(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cconstantsGeneratorList, function (inputData, inputMetaData) {
    return nominalCommands.constantsGeneratorList(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cconstantsPatternRecognizer, function (inputData, inputMetaData) {
    return nominalCommands.constantsPatternRecognizer(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cbusinessRulesMetrics, function (inputData, inputMetaData) {
    return nominalCommands.businessRulesMetrics(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.ccommandMetrics, function (inputData, inputMetaData) {
    return nominalCommands.commandMetrics(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.csaveConfiguration, function (inputData, inputMetaData) {
    return nominalCommands.saveConfiguration(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cconvertColors, function (inputData, inputMetaData) {
    return nominalCommands.convertColors(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cvalidateConstants, function (inputData, inputMetaData) {
    return unitTests.validateConstants(inputData, inputMetaData);
  }), _defineProperty(_D$wrd$cCommands, cmd.cvalidateCommandAliases, function (inputData, inputMetaData) {
    return unitTests.validateCommandAliases(inputData, inputMetaData);
  }), _D$wrd$cCommands); // console.log('END commandsLibrary.initCommandsLibrary');

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

exports.initCommandsLibrary = initCommandsLibrary;