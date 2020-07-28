/**
 * @file units.constants-validation.js
 * @module units-constants-validation
 * @description Contains validations for many unit & unit conversion constants.
 * Also included are validations for units of measurement, units of time, etc...
 * @requires module:units-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as u from '../../Constants/units.constants';

 /**
 * @function unitsConstantsValidation
 * @description Initializes the units constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/23
 */
export const unitsConstantsValidation = [
   // Units of Measure
   {Name: 'cFemto', Actual: u.cFemto, Expected: 'Femto'},
   {Name: 'cPico', Actual: u.cPico, Expected: 'Pico'},
   {Name: 'cNano', Actual: u.cNano, Expected: 'Nano'},
   {Name: 'cMicro', Actual: u.cMicro, Expected: 'Micro'},
   {Name: 'cMill', Actual: u.cMill, Expected: 'Mill'},
   {Name: 'cMilli', Actual: u.cMilli, Expected: 'Milli'},

   // Units of Time
   {Name: 'csecond', Actual: u.csecond, Expected: 'second'},
   {Name: 'cSecond', Actual: u.cSecond, Expected: 'Second'},
   {Name: 'cSeconds', Actual: u.cSeconds, Expected: 'Seconds'},
   {Name: 'cMinute', Actual: u.cMinute, Expected: 'Minute'},
   {Name: 'cMinutes', Actual: u.cMinutes, Expected: 'Minutes'},
   {Name: 'cHour', Actual: u.cHour, Expected: 'Hour'},
   {Name: 'cHours', Actual: u.cHours, Expected: 'Hours'},
   {Name: 'cDay', Actual: u.cDay, Expected: 'Day'},
   {Name: 'cDays', Actual: u.cDays, Expected: 'Days'},
   {Name: 'cWeek', Actual: u.cWeek, Expected: 'Week'},
   {Name: 'cWeeks', Actual: u.cWeeks, Expected: 'Weeks'},
   {Name: 'cMonth', Actual: u.cMonth, Expected: 'Month'},
   {Name: 'cMonths', Actual: u.cMonths, Expected: 'Months'},
   {Name: 'cYear', Actual: u.cYear, Expected: 'Year'},
   {Name: 'cYears', Actual: u.cYears, Expected: 'Years'},
   {Name: 'cDecade', Actual: u.cDecade, Expected: 'Decade'},
   {Name: 'cDecades', Actual: u.cDecades, Expected: 'Decades'},
   {Name: 'ccent', Actual: u.ccent, Expected: 'cent'},
   {Name: 'cCent', Actual: u.cCent, Expected: 'Cent'},
   {Name: 'cCentur', Actual: u.cCentur, Expected: 'Centur'},
   {Name: 'cCentury', Actual: u.cCentury, Expected: 'Century'},
   {Name: 'cCenturies', Actual: u.cCenturies, Expected: 'Centuries'},
   {Name: 'cMillennium', Actual: u.cMillennium, Expected: 'Millennium'}, // Millennium Falcon ;-)
   {Name: 'cMillenniums', Actual: u.cMillenniums, Expected: 'Millenniums'},
   {Name: 'cNanoSecond', Actual: u.cNanoSecond, Expected: 'NanoSecond'},
   {Name: 'cNanoSeconds', Actual: u.cNanoSeconds, Expected: 'NanoSeconds'},
   {Name: 'cMicroSecond', Actual: u.cMicroSecond, Expected: 'MicroSecond'},
   {Name: 'cMicroSeconds', Actual: u.cMicroSeconds, Expected: 'MicroSeconds'},
   {Name: 'cMilliSecond', Actual: u.cMilliSecond, Expected: 'MilliSecond'},
   {Name: 'cMilliSeconds', Actual: u.cMilliSeconds, Expected: 'MilliSeconds'},
   {Name: 'cPicoSecond', Actual: u.cPicoSecond, Expected: 'PicoSecond'},
   {Name: 'cPicoSeconds', Actual: u.cPicoSeconds, Expected: 'PicoSeconds'},
   {Name: 'cFemtoSecond', Actual: u.cFemtoSecond, Expected: 'FemtoSecond'},
   {Name: 'cFemtoSeconds', Actual: u.cFemtoSeconds, Expected: 'FemtoSeconds'}

   // Unit Conversions
   // Miles to Km
   // Celcius to Ferinheight
   // Liters to Gallons
 ];
