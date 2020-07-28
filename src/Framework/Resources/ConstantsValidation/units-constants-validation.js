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
import * as u from '../../../Constants/units.constants';

 /**
 * @function unitsConstantsValidation
 * @description Initializes the units constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/23
 */
export const unitsConstantsValidation = [
   // Units of Measure
   {Name: 'cFemto', Actual: b.cFemto, Expected: 'Femto'},
   {Name: 'cPico', Actual: b.cPico, Expected: 'Pico'},
   {Name: 'cNano', Actual: b.cNano, Expected: 'Nano'},
   {Name: 'cMicro', Actual: b.cMicro, Expected: 'Micro'},
   {Name: 'cMill', Actual: b.cMill, Expected: 'Mill'},
   {Name: 'cMilli', Actual: b.cMilli, Expected: 'Milli'},

   // Units of Time
   {Name: 'csecond', Actual: b.csecond, Expected: 'second'},
   {Name: 'cSecond', Actual: b.cSecond, Expected: 'Second'},
   {Name: 'cSeconds', Actual: b.cSeconds, Expected: 'Seconds'},
   {Name: 'cMinute', Actual: b.cMinute, Expected: 'Minute'},
   {Name: 'cMinutes', Actual: b.cMinutes, Expected: 'Minutes'},
   {Name: 'cHour', Actual: b.cHour, Expected: 'Hour'},
   {Name: 'cHours', Actual: b.cHours, Expected: 'Hours'},
   {Name: 'cDay', Actual: b.cDay, Expected: 'Day'},
   {Name: 'cDays', Actual: b.cDays, Expected: 'Days'},
   {Name: 'cWeek', Actual: b.cWeek, Expected: 'Week'},
   {Name: 'cWeeks', Actual: b.cWeeks, Expected: 'Weeks'},
   {Name: 'cMonth', Actual: b.cMonth, Expected: 'Month'},
   {Name: 'cMonths', Actual: b.cMonths, Expected: 'Months'},
   {Name: 'cYear', Actual: b.cYear, Expected: 'Year'},
   {Name: 'cYears', Actual: b.cYears, Expected: 'Years'},
   {Name: 'cDecade', Actual: b.cDecade, Expected: 'Decade'},
   {Name: 'cDecades', Actual: b.cDecades, Expected: 'Decades'},
   {Name: 'ccent', Actual: b.ccent, Expected: 'cent'},
   {Name: 'cCent', Actual: b.cCent, Expected: 'Cent'},
   {Name: 'cCentur', Actual: b.cCentur, Expected: 'Centur'},
   {Name: 'cCentury', Actual: b.cCentury, Expected: 'Century'},
   {Name: 'cCenturies', Actual: b.cCenturies, Expected: 'Centuries'},
   {Name: 'cMillennium', Actual: b.cMillennium, Expected: 'Millennium'}, // Millennium Falcon ;-)
   {Name: 'cMillenniums', Actual: b.cMillenniums, Expected: 'Millenniums'},
   {Name: 'cNanoSecond', Actual: b.cNanoSecond, Expected: 'NanoSecond'},
   {Name: 'cNanoSeconds', Actual: b.cNanoSeconds, Expected: 'NanoSeconds'},
   {Name: 'cMicroSecond', Actual: b.cMicroSecond, Expected: 'MicroSecond'},
   {Name: 'cMicroSeconds', Actual: b.cMicroSeconds, Expected: 'MicroSeconds'},
   {Name: 'cMilliSecond', Actual: b.cMilliSecond, Expected: 'MilliSecond'},
   {Name: 'cMilliSeconds', Actual: b.cMilliSeconds, Expected: 'MilliSeconds'},
   {Name: 'cPicoSecond', Actual: b.cPicoSecond, Expected: 'PicoSecond'},
   {Name: 'cPicoSeconds', Actual: b.cPicoSeconds, Expected: 'PicoSeconds'},
   {Name: 'cFemtoSecond', Actual: b.cFemtoSecond, Expected: 'FemtoSecond'},
   {Name: 'cFemtoSeconds', Actual: b.cFemtoSeconds, Expected: 'FemtoSeconds'}

   // Unit Conversions
   // Miles to Km
   // Celcius to Ferinheight
   // Liters to Gallons
 ];
