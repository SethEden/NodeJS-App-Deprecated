// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file clientStringParsing.js
 * @module clientStringParsing
 * @description Contains all client defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:warden
 * @requires module:application-constants
 * @requires module:system-constants
 * @requires module:basic-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import warden from '../../../../Framework/Controllers/warden';
import * as c from '../../Constants/application.constants';
import * as s from '../../../../Framework/Constants/system.constants';
import * as b from '../../../../Framework/Constants/basic.constants';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function customEcho
 * @description A quick business rule to validate that the new dynamic data storage technique for business rules.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2020/06/15
 */
export const customEcho = function(inputData, inputMetaData) {
  // console.log('BEGIN clientStringParsing.customEcho function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = c.ccustomEcho;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  returnData = inputData + ' clientStringParsing.customEcho';
  warden.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END clientStringParsing.customEcho function');
  return returnData;
};

/**
 * @function mostPopularNumber
 * @description Parses through an array of integers and determine which value is the most popular.
 * @param {array<integer>} inputData The array that should be evaluated for most popular value.
 * @param {integer} inputMetaData The length of the array that was passed in.
 * @return {integer} The most popular value in the array.
 * @author Seth Hollingsead
 * @date 2020/05/20
 */
export const mostPopularNumber = function(inputData, inputMetaData) {
  // console.log('BEGIN mostPopularNumber function');
  // console.log('inputArray is: ' + JSON.stringify(inputArray));
  // console.log('length is: ' + length);
  let functionName = c.cmostPopularNumber;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  let i, j, instanceCounter = 0;
  let tempArray1 = [];
  let tempArray2 = [];

  // console.log('BEGIN first for-loop');
  for (i = 0; i <= inputMetaData; i++) {
    // console.log('BEGIN nested for-loop i = ' + i);
    for (j = 0; j <= inputMetaData; j++) {
      // console.log('BEGIN iteration j = ' + j);
      if (inputData[i] === inputData[j] && i !== j && i !== undefined && i !== null) {
        // console.log('FOUND a MATCH!!');
        // console.log('inputData[i] is: ' + JSON.stringify(inputData[i]));
        // console.log('inputData[j] is: ' + JSON.stringify(inputData[j]));
        tempArray1[i] = inputData[i];
        // console.log('contents of tempArray1 are: ' + JSON.stringify(tempArray1));
      }
      // console.log('END iteration j = ' + j);
    }
    // console.log('END nested for-loop i = ' + i);
  }
  // console.log('END first for-loop');

  // console.log('BEGIN second for-loop');
  for (i = 0; i <= tempArray1.length; i++) {
    // console.log('BEGIN nested for-loop i = ' + i);
    for (j = 0; j <= tempArray1.length; j++) {
      // console.log('BEGIN iteration j = ' + j);
      if (tempArray1[i] === inputData[j] && tempArray1[i] !== undefined && tempArray1[i] !== null && i !== j) {
        // console.log('FOUND a MATCH!!!');
        // console.log('tempArray1[i] is: ' + JSON.stringify(tempArray1[i]));
        // console.log('inputData[j] is: ' + JSON.stringify(inputData[j]));
        // console.log('instanceCounter before increment is: ' + instanceCounter);
        tempArray2[i] = ++instanceCounter;
        // console.log('instanceCounter after increment is: ' + instanceCounter);
        // console.log('contents of tempArray2 are: ' + JSON.stringify(tempArray2));
      }
      // console.log('END iteration j = ' + j);
    }
    // console.log('END nested for-loop i = ' + i);
  }
  // console.log('END second for-loop');

  // console.log('BEGIN third for-loop');
  // console.log('tempArray2.length is: ' + tempArray2.length);
  for (i = 0; i <= tempArray2.length; i++) {
    // console.log('BEGIN iteration i = ' + i);
    if (tempArray2[i] !== 0 && i === 0) {
      // console.log('if-condition i = 0 has been met! i = ' + i);
      returnData = inputData[i];
    } else {
      // console.log('if-condition-else i <> 0 has been met! i = ' + i);
      if (tempArray2[i] > returnData) {
        // console.log('found one greater');
        // console.log('tempArray2[i] is: ' + JSON.stringify(tempArray2[i]));
        // console.log('tempArray2[i - 1] is: ' + JSON.stringify(tempArray2[i-1]));
        returnData = inputData[i];
        // console.log('returnData is: ' + returnData);
      }
      // console.log('done setting the return data: i = ' + i);
    }
    i += 1;
    // console.log('END iteration i = ' + i);
  }
  // console.log('END third for-loop');

  warden.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END mostPopularNumber function');
  return returnData;
};

/**
 * @function isAlmostPalindrome
 * @description Determines if the input string is almost a Palindrome string or not.
 * That is to say if the word is reversable or not reversable and if it is at least within
 * one character of being a palindrome string.
 * @param {string} inputData The string that should be evaluated to determine if it is a Palindrome string or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a Palindrome or almost palindrome string or not.
 * @author Seth Hollingsead
 * @date 2020/05/20
 */
export const isAlmostPalindrome = function(inputData, inputMetaData) {
  // console.log('BEGIN isAlmostPalindrome function');
  // console.log('inputData is: ' + inputData);
  let functionName = c.cisAlmostPalindrome;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let misCompareCount;
  let startingPoint, endingPoint;
  misCompareCount = 0;
  // TODO: We need to enable additional types of comparisons. The below algorthim works for if the mis-compare is in the center of the string.
  // But if the mis-compare is at the beginning or the end of the string then it can throw off all the other comparisons resulting in a false positive result.
  // We actually need to check starting with the first character but also the first + 1 character and also,
  // We need to check ending with the last - 1 character.
  // Using a similar algorthim as below.
loop1:
  for (let i = 0; i < 3; i++) {
    // Setup the different start point & end points to do the comparison.
    warden.consoleLog(baseFileName + b.cDot + functionName, 'comparison iteration is: ' + i);
    if (i === 0) {
      startingPoint = 0;
      endingPoint = -1;
    } else if (i === 1) {
      startingPoint = 1;
      endingPoint = 0;
    } else if (i === 2) {
      startingPoint = 0;
      endingPoint = -2;
    } else { // We shouldn't get to this point, given the for-loop parameters defined above.
      returnData = false;
      break;
    }
    warden.consoleLog(baseFileName + b.cDot + functionName, 'startingPoint is: ' + startingPoint);
    warden.consoleLog(baseFileName + b.cDot + functionName, 'endingPoint is: ' + endingPoint);
loop2:
    for (let j = startingPoint; j < inputData.length; j++) {
      warden.consoleLog(baseFileName + b.cDot + functionName, 'j value is: ' + j);
      warden.consoleLog(baseFileName + b.cDot + functionName, 'inputData.charAt(j) is: ' + inputData.charAt(j));
      warden.consoleLog(baseFileName + b.cDot + functionName, 'inputData.chartAt(inputData.length - ' + j + ' + ' + endingPoint + ') is: ' +
        inputData.charAt(inputData.length - j + endingPoint));
      if (inputData.charAt(j) !== inputData.charAt(inputData.length - j + endingPoint)) {
        warden.consoleLog(baseFileName + b.cDot + functionName, 'We got a mismatch!');
        warden.consoleLog(baseFileName + b.cDot + functionName, 'misCompareCount before increment is: ' + misCompareCount);
        misCompareCount += 1;
        warden.consoleLog(baseFileName + b.cDot + functionName, 'misCompareCount post increment is: ' + misCompareCount);
        if (misCompareCount >= 2) {
          break loop2;
        }
      }
    }
    warden.consoleLog(baseFileName + b.cDot + functionName, 'misCompareCount after the for-loop is: ' + misCompareCount);
    if (i === 0) {
      if (misCompareCount <= 1) {
        returnData = true;
      }
    } else if (i > 0) {
      if (misCompareCount <= 1) {
        returnData = true;
      }
    }
    warden.consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + returnData);
    // If we got a positive result then we can break out of the function and return our positive result.
    if (returnData === true) {
      break;
    } else { // Otherwise proceed to the next comparison iteration and check if one of the other scenarios will yield a positive result.
      misCompareCount = 0; // Reset it for the next comparison iteration.
    }
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END isAlmostPalindrome function');
  return returnData;
};


// Implement a function to calculate the average distance between three points in a single plane,
// where the coordinates of these points are (x1, y1), (x2, y2) and (x3, y3).

/**
 * @function threePointAverage
 * @description Calculates the average of 3 coordinates in a 2-Dimensional plane.
 * @param {array<array<integer|float|double>>} inputData The coordinate for the first point.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<integer|float|double>} Returns the XY coordinate of the average point between all points.
 * @author Seth Hollingsead
 * @date 2020/05/20
 */
export const threePointAverage = function(inputData, inputMetaData) {
  // console.log('BEGIN threePointAverage function');
  // console.log('inputPointArray is: ' + inputPointArray);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = c.cthreePointAverage;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  let xAverage, x1, x2, x3;
  let yAverage, y1, y2, y3;

  x1 = inputData[0][0];
  x2 = inputData[1][0];
  x3 = inputData[2][0];
  y1 = inputData[0][1];
  y2 = inputData[1][1];
  y3 = inputData[2][1];

  // Calculate the X-averages:
  xAverage = (x1 + x2 + x3) / 3
  yAverage = (y1 + y2 + y3) / 3
  returnData = [xAverage, yAverage];
  warden.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END threePointAverage function');
  return returnData;
};

/**
 * @function arrayCounter
 * @description Receives an array and a value, counts the number of occurances of that value in the array.
 * @param {array<integer|string|object>} inputData The array which should have it's values counted.
 * @param {integer|string|object} inputMetaData The instance that should be counted in the array.
 * @return {integer} The count of the objects/values that was found to match out of the array
 * @author Seth Hollingsead
 * @date 2020/05/20
 */
export const arrayCounter = function(inputData, inputMetaData) {
  // console.log('BEGIN arrayCounter function');
  // console.log('inputArray is: ' + inputArray);
  // console.log('instance is: ' + instance);
  let functionName = c.carrayCounter;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  for (let i = 0; i <= inputData.length; i++) {
    if (inputData[i] === inputMetaData) {
      returnData += 1;
    }
  }
  warden.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END arrayCounter function');
  return returnData;
};
