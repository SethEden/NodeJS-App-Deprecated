"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCommandsLibrary = void 0;

var nominalCommands = _interopRequireWildcard(require("./Commands/nominal"));

var unitTests = _interopRequireWildcard(require("./Commands/unitTests"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var w = _interopRequireWildcard(require("../Constants/word.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');

var D = require('../Resources/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

var initCommandsLibrary = function initCommandsLibrary() {
  var _D$w$cCommands;

  var functionName = initCommandsLibrary.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  D[w.cCommands] = {};
  D[w.cCommands] = (_D$w$cCommands = {}, _defineProperty(_D$w$cCommands, s.cechoCommand, function (inputData, inputMetaData) {
    return nominalCommands.echoCommand(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, w.cexit, function (inputData, inputMetaData) {
    return nominalCommands.exit(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, w.cversion, function (inputData, inputMetaData) {
    return nominalCommands.version(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, w.cabout, function (inputData, inputMetaData) {
    return nominalCommands.about(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, w.cname, function (inputData, inputMetaData) {
    return nominalCommands.name(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cclearScreen, function (inputData, inputMetaData) {
    return nominalCommands.clearScreen(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cdeployApplication, function (inputData, inputMetaData) {
    return nominalCommands.deployApplication(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cdeployMetaData, function (inputData, inputMetaData) {
    return nominalCommands.deployMetaData(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.creleaseApplication, function (inputData, inputMetaData) {
    return nominalCommands.releaseApplication(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, w.chelp, function (inputData, inputMetaData) {
    return nominalCommands.help(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cworkflowHelp, function (inputData, inputMetaData) {
    return nominalCommands.workflowHelp(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.ccommandSequencer, function (inputData, inputMetaData) {
    return nominalCommands.commandSequencer(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, w.cworkflow, function (inputData, inputMetaData) {
    return nominalCommands.workflow(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cprintDataHive, function (inputData, inputMetaData) {
    return nominalCommands.printDataHive(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cclearDataStorage, function (inputData, inputMetaData) {
    return nominalCommands.clearDataStorage(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cbusinessRule, function (inputData, inputMetaData) {
    return nominalCommands.businessRule(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.ccommandGenerator, function (inputData, inputMetaData) {
    return nominalCommands.commandGenerator(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.ccommandAliasGenerator, function (inputData, inputMetaData) {
    return nominalCommands.commandAliasGenerator(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cconstantsGenerator, function (inputData, inputMetaData) {
    return nominalCommands.constantsGenerator(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cconstantsGeneratorList, function (inputData, inputMetaData) {
    return nominalCommands.constantsGeneratorList(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cconstantsPatternRecognizer, function (inputData, inputMetaData) {
    return nominalCommands.constantsPatternRecognizer(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cbusinessRulesMetrics, function (inputData, inputMetaData) {
    return nominalCommands.businessRulesMetrics(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.ccommandMetrics, function (inputData, inputMetaData) {
    return nominalCommands.commandMetrics(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cconvertColors, function (inputData, inputMetaData) {
    return nominalCommands.convertColors(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cvalidateConstants, function (inputData, inputMetaData) {
    return unitTests.validateConstants(inputData, inputMetaData);
  }), _defineProperty(_D$w$cCommands, s.cvalidateCommandAliases, function (inputData, inputMetaData) {
    return unitTests.validateCommandAliases(inputData, inputMetaData);
  }), _D$w$cCommands);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

exports.initCommandsLibrary = initCommandsLibrary;