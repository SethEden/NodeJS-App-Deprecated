"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genericConstantsValidation = void 0;

var g = _interopRequireWildcard(require("../../../Constants/generic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file generic.constants-validation.js
 * @module generic-constants-validation
 * @description Contains many validations for generic constants.
 * @requires module:generic-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

/**
* @function genericConstantsValidation
* @description Initializes the generic constants validation data objects array.
* @return {void}
* @author Seth Hollingsead
* @date 2020/07/23
*/
var genericConstantsValidation = [{
  Actual: b.cDemo,
  Expected: 'Demo'
}];
exports.genericConstantsValidation = genericConstantsValidation;