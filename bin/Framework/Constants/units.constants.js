"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cFemtoSeconds = exports.cFemtoSecond = exports.cPicoSeconds = exports.cPicoSecond = exports.cMilliSeconds = exports.cMilliSecond = exports.cMicroSeconds = exports.cMicroSecond = exports.cNanoSeconds = exports.cNanoSecond = exports.cMillenniums = exports.cMillennium = exports.cCenturies = exports.cCentury = exports.cCentur = exports.cCent = exports.ccent = exports.cDecades = exports.cDecade = exports.cYears = exports.cYear = exports.cMonths = exports.cMonth = exports.cWeeks = exports.cWeek = exports.cDays = exports.cDay = exports.cHours = exports.cHour = exports.cMinutes = exports.cMinute = exports.cSeconds = exports.cSecond = exports.csecond = exports.cMilli = exports.cMill = exports.cMicro = exports.cNano = exports.cPico = exports.cFemto = void 0;

var bas = _interopRequireWildcard(require("../constants/basic.constants"));

var phn = _interopRequireWildcard(require("../constants/phonics.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file units.constants.js
 * @module units-constants
 * @description Contains many unit & unit conversion constants.
 * Also included are units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @author Seth Hollingsead
 * @date 2020/07/21
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Units of Measure
var cFemto = bas.cFe + bas.cmt + bas.co; // Femto

exports.cFemto = cFemto;
var cPico = bas.cPi + bas.cco; // Pico

exports.cPico = cPico;
var cNano = bas.cNa + bas.cno; // Nano

exports.cNano = cNano;
var cMicro = bas.cMi + bas.ccr + bas.co; // Micro

exports.cMicro = cMicro;
var cMill = bas.cMi + bas.cll; // Mill

exports.cMill = cMill;
var cMilli = cMill + bas.ci; // Milli
// Units of Time

exports.cMilli = cMilli;
var csecond = bas.cse + phn.ccond; // second

exports.csecond = csecond;
var cSecond = bas.cSe + phn.ccond; // Second

exports.cSecond = cSecond;
var cSeconds = cSecond + bas.cs; // Seconds

exports.cSeconds = cSeconds;
var cMinute = bas.cMi + bas.cnu + bas.cte; // Minute

exports.cMinute = cMinute;
var cMinutes = cMinute + bas.cs; // Minutes

exports.cMinutes = cMinutes;
var cHour = bas.cHo + bas.cur; // Hour

exports.cHour = cHour;
var cHours = cHour + bas.cs; // Hours

exports.cHours = cHours;
var cDay = bas.cDa + bas.cy; // Day

exports.cDay = cDay;
var cDays = cDay + bas.cs; // Days

exports.cDays = cDays;
var cWeek = bas.cW + bas.cee + bas.ck; // Week

exports.cWeek = cWeek;
var cWeeks = cWeek + bas.cs; // Weeks

exports.cWeeks = cWeeks;
var cMonth = bas.cMo + bas.cn + bas.cth; // Month

exports.cMonth = cMonth;
var cMonths = cMonth + bas.cs; // Months

exports.cMonths = cMonths;
var cYear = bas.cYe + bas.car; // Year

exports.cYear = cYear;
var cYears = cYear + bas.cs; // Years

exports.cYears = cYears;
var cDecade = bas.cDe + bas.cca + bas.cde; // Decade

exports.cDecade = cDecade;
var cDecades = cDecade + bas.cs; // Decades

exports.cDecades = cDecades;
var ccent = bas.cc + phn.cent; // cent

exports.ccent = ccent;
var cCent = bas.cC + phn.cent; // Cent

exports.cCent = cCent;
var cCentur = cCent + bas.cur; // Centur

exports.cCentur = cCentur;
var cCentury = cCentur + bas.cy; // Century

exports.cCentury = cCentury;
var cCenturies = cCentur + phn.cies; // Centuries

exports.cCenturies = cCenturies;
var cMillennium = cMill + bas.cen + bas.cni + bas.cum; // Millennium // Millennium Falcon ;-)

exports.cMillennium = cMillennium;
var cMillenniums = cMillennium + bas.cs; // Millenniums

exports.cMillenniums = cMillenniums;
var cNanoSecond = cNano + cSecond; // NanoSecond

exports.cNanoSecond = cNanoSecond;
var cNanoSeconds = cNano + cSeconds; // NanoSeconds

exports.cNanoSeconds = cNanoSeconds;
var cMicroSecond = cMicro + cSecond; // MicroSecond

exports.cMicroSecond = cMicroSecond;
var cMicroSeconds = cMicro + cSeconds; // MicroSeconds

exports.cMicroSeconds = cMicroSeconds;
var cMilliSecond = cMilli + cSecond; // MilliSecond

exports.cMilliSecond = cMilliSecond;
var cMilliSeconds = cMilli + cSeconds; // MilliSeconds

exports.cMilliSeconds = cMilliSeconds;
var cPicoSecond = cPico + cSecond; // PicoSecond

exports.cPicoSecond = cPicoSecond;
var cPicoSeconds = cPico + cSeconds; // PicoSeconds

exports.cPicoSeconds = cPicoSeconds;
var cFemtoSecond = cFemto + cSecond; // FemtoSecond

exports.cFemtoSecond = cFemtoSecond;
var cFemtoSeconds = cFemto + cSeconds; // FemtoSeconds
// Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons

exports.cFemtoSeconds = cFemtoSeconds;