"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cPicoSeconds = exports.cPicoSecond = exports.cMilliSeconds = exports.cMilliSecond = exports.cMicroSeconds = exports.cMicroSecond = exports.cNanoSeconds = exports.cNanoSecond = exports.cMillenniums = exports.cMillennium = exports.cCenturies = exports.cCentury = exports.cCentur = exports.cCent = exports.ccent = exports.cDecades = exports.cDecade = exports.cYears = exports.cYear = exports.cMonths = exports.cMonth = exports.cWeeks = exports.cWeek = exports.cDays = exports.cDay = exports.cHours = exports.cHour = exports.cMinutes = exports.cMinute = exports.cSeconds = exports.cSecond = exports.csecond = exports.cMilli = exports.cMill = exports.cMicro = exports.cNano = exports.cPico = void 0;

var b = _interopRequireWildcard(require("../constants/basic.constants"));

var p = _interopRequireWildcard(require("../constants/phonics.constants"));

var n = _interopRequireWildcard(require("../constants/numeric.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file units.constants.js
 * @module units-constants
 * @description Contains many unit & unit conversion constants.
 * Also included are units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:numeric-constants
 * @author Seth Hollingsead
 * @date 2020/07/21
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Units of Measure
var cPico = b.cPi + b.cco; // 'Pico';

exports.cPico = cPico;
var cNano = b.cNa + b.cno; // 'Nano';

exports.cNano = cNano;
var cMicro = b.cMi + b.ccr + b.co; // 'Micro';

exports.cMicro = cMicro;
var cMill = b.cMi + b.cll; // 'Mill';

exports.cMill = cMill;
var cMilli = cMill + b.ci; // Units of Time

exports.cMilli = cMilli;
var csecond = b.cse + p.ccond;
exports.csecond = csecond;
var cSecond = b.cSe + p.ccond;
exports.cSecond = cSecond;
var cSeconds = cSecond + b.cs;
exports.cSeconds = cSeconds;
var cMinute = b.cMi + b.cnu + b.cte; // 'Minute';

exports.cMinute = cMinute;
var cMinutes = cMinute + b.cs;
exports.cMinutes = cMinutes;
var cHour = b.cHo + b.cur; // 'Hour';

exports.cHour = cHour;
var cHours = cHour + b.cs;
exports.cHours = cHours;
var cDay = b.cDa + b.cy; // 'Day';

exports.cDay = cDay;
var cDays = cDay + b.cs;
exports.cDays = cDays;
var cWeek = b.cW + b.cee + b.ck; // 'Week';

exports.cWeek = cWeek;
var cWeeks = cWeek + b.cs;
exports.cWeeks = cWeeks;
var cMonth = b.cMo + b.cn + b.cth; // 'Month';

exports.cMonth = cMonth;
var cMonths = cMonth + b.cs;
exports.cMonths = cMonths;
var cYear = b.cYe + b.car; // 'Year';

exports.cYear = cYear;
var cYears = cYear + b.cs;
exports.cYears = cYears;
var cDecade = b.cDe + b.cca + b.cde;
exports.cDecade = cDecade;
var cDecades = cDecade + b.cs;
exports.cDecades = cDecades;
var ccent = b.cc + p.cent;
exports.ccent = ccent;
var cCent = b.cC + p.cent;
exports.cCent = cCent;
var cCentur = cCent + b.cur; // b.cC + b.cen + b.ctu + b.cr; // 'Centur';

exports.cCentur = cCentur;
var cCentury = cCentur + b.cy;
exports.cCentury = cCentury;
var cCenturies = cCentur + p.cies;
exports.cCenturies = cCenturies;
var cMillennium = cMill + b.cen + b.cni + b.cum; // 'ennium'; // Millennium Falcon ;-)

exports.cMillennium = cMillennium;
var cMillenniums = cMillennium + b.cs;
exports.cMillenniums = cMillenniums;
var cNanoSecond = cNano + cSecond;
exports.cNanoSecond = cNanoSecond;
var cNanoSeconds = cNano + cSeconds;
exports.cNanoSeconds = cNanoSeconds;
var cMicroSecond = cMicro + cSecond;
exports.cMicroSecond = cMicroSecond;
var cMicroSeconds = cMicro + cSeconds;
exports.cMicroSeconds = cMicroSeconds;
var cMilliSecond = cMilli + cSecond;
exports.cMilliSecond = cMilliSecond;
var cMilliSeconds = cMilli + cSeconds;
exports.cMilliSeconds = cMilliSeconds;
var cPicoSecond = cPico + cSecond;
exports.cPicoSecond = cPicoSecond;
var cPicoSeconds = cPico + cSeconds; // Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons

exports.cPicoSeconds = cPicoSeconds;