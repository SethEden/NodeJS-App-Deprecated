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
import * as b from '../constants/basic.constants';
import * as p from '../constants/phonics.constants';
import * as n from '../constants/numeric.constants';

// Units of Measure
export const cFemto = b.cFe + b.cmt + b.co; // Femto
export const cPico = b.cPi + b.cco; // Pico
export const cNano = b.cNa + b.cno; // Nano
export const cMicro = b.cMi + b.ccr + b.co; // Micro
export const cMill = b.cMi + b.cll; // Mill
export const cMilli = cMill + b.ci; // Milli

// Units of Time
export const csecond = b.cse + p.ccond; // second
export const cSecond = b.cSe + p.ccond; // Second
export const cSeconds = cSecond + b.cs; // Seconds
export const cMinute = b.cMi + b.cnu + b.cte; // Minute
export const cMinutes = cMinute + b.cs; // Minutes
export const cHour = b.cHo + b.cur; // Hour
export const cHours = cHour + b.cs; // Hours
export const cDay = b.cDa + b.cy; // Day
export const cDays = cDay + b.cs; // Days
export const cWeek = b.cW + b.cee + b.ck; // Week
export const cWeeks = cWeek + b.cs; // Weeks
export const cMonth = b.cMo + b.cn + b.cth; // Month
export const cMonths = cMonth + b.cs; // Months
export const cYear = b.cYe + b.car; // Year
export const cYears = cYear + b.cs; // Years
export const cDecade = b.cDe + b.cca + b.cde; // Decade
export const cDecades = cDecade + b.cs; // Decades
export const ccent = b.cc + p.cent; // cent
export const cCent = b.cC + p.cent; // Cent
export const cCentur = cCent + b.cur; // Centur
export const cCentury = cCentur + b.cy; // Century
export const cCenturies = cCentur + p.cies; // Centuries
export const cMillennium = cMill + b.cen + b.cni + b.cum; // Millennium // Millennium Falcon ;-)
export const cMillenniums = cMillennium + b.cs; // Millenniums
export const cNanoSecond = cNano + cSecond; // NanoSecond
export const cNanoSeconds = cNano + cSeconds; // NanoSeconds
export const cMicroSecond = cMicro + cSecond; // MicroSecond
export const cMicroSeconds = cMicro + cSeconds; // MicroSeconds
export const cMilliSecond = cMilli + cSecond; // MilliSecond
export const cMilliSeconds = cMilli + cSeconds; // MilliSeconds
export const cPicoSecond = cPico + cSecond; // PicoSecond
export const cPicoSeconds = cPico + cSeconds; // PicoSeconds
export const cFemtoSecond = cFemto + cSecond; // FemtoSecond
export const cFemtoSeconds = cFemto + cSeconds; // FemtoSeconds

// Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons
