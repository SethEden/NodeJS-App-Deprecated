"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemConstantsValidation = void 0;

var s = _interopRequireWildcard(require("../../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file system.constants-validation.js
 * @module system-constants-validation
 * @description Contains validations for system defined acronyms, many of them derived from the basic-constants.
 * Also included are validations for other constants like countries, named spoken languages.
 * Also included are validations for common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

/**
* @function systemConstantsValidation
* @description Initializes the basic constants validation data objects array.
* @return {void}
* @author Seth Hollingsead
* @date 2020/07/23
*/
var systemConstantsValidation = [{
  Actual: b.cDemo,
  Expected: 'Demo'
}];
exports.systemConstantsValidation = systemConstantsValidation;