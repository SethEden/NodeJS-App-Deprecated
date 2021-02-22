"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitsConstantsValidation = void 0;

var unt = _interopRequireWildcard(require("../../Constants/units.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file units-constants-validation.js
 * @module units-constants-validation
 * @description Contains validations for many unit & unit conversion constants.
 * Also included are validations for units of measurement, units of time, etc...
 * @requires module:units-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

/**
* @function unitsConstantsValidation
* @description Initializes the units constants validation data objects array.
* @return {void}
* @author Seth Hollingsead
* @date 2020/07/23
*/
var unitsConstantsValidation = [// Units of Measure
{
  Name: 'cFemto',
  Actual: unt.cFemto,
  Expected: 'Femto'
}, {
  Name: 'cPico',
  Actual: unt.cPico,
  Expected: 'Pico'
}, {
  Name: 'cNano',
  Actual: unt.cNano,
  Expected: 'Nano'
}, {
  Name: 'cMicro',
  Actual: unt.cMicro,
  Expected: 'Micro'
}, {
  Name: 'cMill',
  Actual: unt.cMill,
  Expected: 'Mill'
}, {
  Name: 'cMilli',
  Actual: unt.cMilli,
  Expected: 'Milli'
}, // Units of Time
{
  Name: 'csecond',
  Actual: unt.csecond,
  Expected: 'second'
}, {
  Name: 'cSecond',
  Actual: unt.cSecond,
  Expected: 'Second'
}, {
  Name: 'cSeconds',
  Actual: unt.cSeconds,
  Expected: 'Seconds'
}, {
  Name: 'cMinute',
  Actual: unt.cMinute,
  Expected: 'Minute'
}, {
  Name: 'cMinutes',
  Actual: unt.cMinutes,
  Expected: 'Minutes'
}, {
  Name: 'cHour',
  Actual: unt.cHour,
  Expected: 'Hour'
}, {
  Name: 'cHours',
  Actual: unt.cHours,
  Expected: 'Hours'
}, {
  Name: 'cDay',
  Actual: unt.cDay,
  Expected: 'Day'
}, {
  Name: 'cDays',
  Actual: unt.cDays,
  Expected: 'Days'
}, {
  Name: 'cWeek',
  Actual: unt.cWeek,
  Expected: 'Week'
}, {
  Name: 'cWeeks',
  Actual: unt.cWeeks,
  Expected: 'Weeks'
}, {
  Name: 'cMonth',
  Actual: unt.cMonth,
  Expected: 'Month'
}, {
  Name: 'cMonths',
  Actual: unt.cMonths,
  Expected: 'Months'
}, {
  Name: 'cYear',
  Actual: unt.cYear,
  Expected: 'Year'
}, {
  Name: 'cYears',
  Actual: unt.cYears,
  Expected: 'Years'
}, {
  Name: 'cDecade',
  Actual: unt.cDecade,
  Expected: 'Decade'
}, {
  Name: 'cDecades',
  Actual: unt.cDecades,
  Expected: 'Decades'
}, {
  Name: 'ccent',
  Actual: unt.ccent,
  Expected: 'cent'
}, {
  Name: 'cCent',
  Actual: unt.cCent,
  Expected: 'Cent'
}, {
  Name: 'cCentur',
  Actual: unt.cCentur,
  Expected: 'Centur'
}, {
  Name: 'cCentury',
  Actual: unt.cCentury,
  Expected: 'Century'
}, {
  Name: 'cCenturies',
  Actual: unt.cCenturies,
  Expected: 'Centuries'
}, {
  Name: 'cMillennium',
  Actual: unt.cMillennium,
  Expected: 'Millennium'
}, // Millennium Falcon ;-)
{
  Name: 'cMillenniums',
  Actual: unt.cMillenniums,
  Expected: 'Millenniums'
}, {
  Name: 'cNanoSecond',
  Actual: unt.cNanoSecond,
  Expected: 'NanoSecond'
}, {
  Name: 'cNanoSeconds',
  Actual: unt.cNanoSeconds,
  Expected: 'NanoSeconds'
}, {
  Name: 'cMicroSecond',
  Actual: unt.cMicroSecond,
  Expected: 'MicroSecond'
}, {
  Name: 'cMicroSeconds',
  Actual: unt.cMicroSeconds,
  Expected: 'MicroSeconds'
}, {
  Name: 'cMilliSecond',
  Actual: unt.cMilliSecond,
  Expected: 'MilliSecond'
}, {
  Name: 'cMilliSeconds',
  Actual: unt.cMilliSeconds,
  Expected: 'MilliSeconds'
}, {
  Name: 'cPicoSecond',
  Actual: unt.cPicoSecond,
  Expected: 'PicoSecond'
}, {
  Name: 'cPicoSeconds',
  Actual: unt.cPicoSeconds,
  Expected: 'PicoSeconds'
}, {
  Name: 'cFemtoSecond',
  Actual: unt.cFemtoSecond,
  Expected: 'FemtoSecond'
}, {
  Name: 'cFemtoSeconds',
  Actual: unt.cFemtoSeconds,
  Expected: 'FemtoSeconds'
} // Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons
];
exports.unitsConstantsValidation = unitsConstantsValidation;