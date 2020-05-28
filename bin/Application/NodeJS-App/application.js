#!/usr/bin/env node
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _loggers = _interopRequireDefault(require("../../Framework/Executrix/loggers"));

var _warden = _interopRequireDefault(require("../../Framework/Controllers/warden.js"));

var c = _interopRequireWildcard(require("./Constants/application.constants"));

var s = _interopRequireWildcard(require("../../Framework/Constants/system.constants"));

var g = _interopRequireWildcard(require("../../Framework/Constants/generic.constants"));

var b = _interopRequireWildcard(require("../../Framework/Constants/basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var prompt = require('prompt-sync')();

var path = require('path');

var D = require('../../Framework/Resources/data');

global.appRoot = path.resolve(__dirname);
var rootPath = '';
/**
 * @name bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */

function bootStrapApplication() {
  rootPath = path.resolve(__dirname);
  rootPath = _warden["default"].processRootPath(rootPath);

  _warden["default"].bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);

  _warden["default"].setConfigurationSetting(s.cApplicationRootPath, rootPath);
}

;
/**
 * @name application
 * @description This is the main program look, the init for the entire application.
 * @author Seth Hollingsead
 * @date 2020/05/21
 */

function application() {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.capplication;
  var argumentDrivenInterface = true;
  var commandInput;
  var commandResult;

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN main program loop');

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'BEGIN command parser');

  argumentDrivenInterface = _warden["default"].getConfigurationSetting(s.cArgumentDrivenInterface);

  if (argumentDrivenInterface === false) {
    while (programRunning === true) {
      commandInput = prompt(b.cGreaterThan);
      commandResult = _warden["default"].processCommand(commandInput);

      if (commandResult === false) {
        _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'END command parser');

        programRunning = false;

        _warden["default"].consoleLog(baseFileName + b.cDot + functionName, 'END main program loop');

        console.log('Exiting, Good bye, Have a nice day & stay safe!');
        break;
      } else {// console.log('contents of D are: ' + JSON.stringify(D));
        // console.log(result);
      }
    }
  } else {
    // argument driven interface / execution is handled here.
    console.log('argument driven execution');
  }

  _warden["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

; // Launch the application!!

var programRunning = false;
bootStrapApplication(); // Call to the function above to do initial pre-setup for the application.

programRunning = true;
application(); // Call to the function above to actually execute the application.