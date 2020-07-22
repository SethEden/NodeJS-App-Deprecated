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
export const cPico = b.cPi + b.cco; // 'Pico';
export const cNano = b.cNa + b.cno; // 'Nano';
export const cMicro = b.cMi + b.ccr + b.co; // 'Micro';
export const cMill = b.cMi + b.cll // 'Mill';
export const cMilli = cMill + b.ci;

// Units of Time
export const csecond = b.cse + p.ccond;
export const cSecond = b.cSe + p.ccond;
export const cSeconds = cSecond + b.cs;
export const cMinute = b.cMi + b.cnu + b.cte; // 'Minute';
export const cMinutes = cMinute + b.cs;
export const cHour = b.cHo + b.cur; // 'Hour';
export const cHours = cHour + b.cs;
export const cDay = b.cDa + b.cy; // 'Day';
export const cDays = cDay + b.cs;
export const cWeek = b.cW + b.cee + b.ck; // 'Week';
export const cWeeks = cWeek + b.cs;
export const cMonth = b.cMo + b.cn + b.cth; // 'Month';
export const cMonths = cMonth + b.cs;
export const cYear = b.cYe + b.car; // 'Year';
export const cYears = cYear + b.cs;
export const cDecade = b.cDe + b.cca + b.cde;
export const cDecades = cDecade + b.cs;
export const ccent = b.cc + p.cent;
export const cCent = b.cC + p.cent;
export const cCentur = cCent + b.cur; // b.cC + b.cen + b.ctu + b.cr; // 'Centur';
export const cCentury = cCentur + b.cy;
export const cCenturies = cCentur + p.cies;
export const cMillennium = cMill + b.cen + b.cni + b.cum; // 'ennium'; // Millennium Falcon ;-)
export const cMillenniums = cMillennium + b.cs;
export const cNanoSecond = cNano + cSecond;
export const cNanoSeconds = cNano + cSeconds;
export const cMicroSecond = cMicro + cSecond;
export const cMicroSeconds = cMicro + cSeconds;
export const cMilliSecond = cMilli + cSecond;
export const cMilliSeconds = cMilli + cSeconds;
export const cPicoSecond = cPico + cSecond;
export const cPicoSeconds = cPico + cSeconds;

// Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons
