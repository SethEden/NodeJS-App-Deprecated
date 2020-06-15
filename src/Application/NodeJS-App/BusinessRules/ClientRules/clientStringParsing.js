// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file clientStringParsing.js
 * @module clientStringParsing
 * @description Contains all client defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

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
  console.log('BEGIN clientStringParsing.customEcho function');
  console.log('inputData is: ' + inputData);
  console.log('inputMetaData is: ' + inputMetaData);
  var returnData;
  returnData = inputData + ' clientStringParsing.customEcho';
  console.log('returnData is: ' + returnData);
  console.log('END clientStringParsing.customEcho function');
  return returnData;
};

/**
 * @function mostPopularNumber
 * @description Parses through an array of integers and determine which value is the most popular.
 * @param {array<integer>} inputArray The array that should be evaluated for most popular value.
 * @param {integer} length The length of the array that was passed in.
 * @return {integer} The most popular value in the array.
 * @author Seth Hollingsead
 * @date 2020/05/20
 * @NOTE: NOT TESTED!!!!
 */
function mostPopularNumber(inputArray, length) {
  console.log('BEGIN mostPopularNumber function');
  console.log('inputArray is: ' + JSON.stringify(inputArray));
  console.log('length is: ' + length);
  var returnData;
  var i, j, instanceCounter = 0;
  var tempArray1 = [];
  var tempArray2 = [];

  for (i = 0; i <= length; i++) {
    for (j = 0; j <= length; j++) {
      if (inputArray[i] === inputArray[j]) {
        tempArray1[i] = inputArray[i];
      }
    }
  }

  for (i = 0; i <= tempArray1.length; i++) {
    for (j = 0; j <= tempArray1.length; j++) {
      if (tempArray1[i] === inputArray[j]) {
        tempArray2[i] = ++instanceCounter;
      }
    }
  }

  for (i = 0; i <= tempArray2.length; i++) {
    if (i = 0) {
      returnData = tempArray2[i];
    } else {
      if (tempArray2[i] > tempArray2[i - 1]) {
        returnData = tempArray2[i];
      }
    }
  }

  console.log('returnData is: ' + returnData);
  console.log('END mostPopularNumber function');
  return returnData;
};

/**
 * @function isAlmostPalindrome
 * @description Determines if the input string is almost a Palindrome string or not.
 * That is to say if the word is reversable or not reversable and if it is at least within
 * one character of being a palindrome string.
 * @param {string} inputData The string that should be evaluated to determine if it is a Palindrome string or not.
 * @return {boolean} True or False to indicate if the input string is a Palindrome or almost palindrome string or not.
 * @author Seth Hollingsead
 * @date 2020/05/20
 * @NOTE: NOT TESTED!!!!
 */
function isAlmostPalindrome(inputData) {
  console.log('BEGIN isAlmostPalindrome function');
  console.log('inputData is: ' + inputData);
  // s.charAt(i);
  var returnData = false;
  var i, misCompareCount;
  misCompareCount = 0;
  for (i = 0; i < inputData.length; i++) {
    if (inputData.charAt(i) !== inputData.charAt(inputData.length - i)) {
      misCompareCount += 1;
    }
  }
  if (misCompareCount <= 1) {
    returnData = true;
  }
  console.log('returnData is: ' + returnData);
  console.log('END isAlmostPalindrome function');
  return returnData;
};


// Implement a function to calculate the average distance between three points in a single plane,
// where the coordinates of these points are (x1, y1), (x2, y2) and (x3, y3).

/**
 * @function threePointAverage
 * @description Calculates the average of 3 coordinates in a 2-Dimensional plane.
 * @param {array<integer|float|double>} point1 The coordinate for the first point.
 * @param {array<integer|float|double>} point2 The coordinate for the second point.
 * @param {array<integer|float|double>} point3 The coordinate for the third point.
 * @return {array<integer|float|double>} Returns the XY coordinate of the average point between all points.
 * @author Seth Hollingsead
 * @date 2020/05/20
 * @NOTE: NOT TESTED!!!!
 */
function threePointAverage(point1, point2, point3) {
  console.log('BEGIN threePointAverage function');
  console.log('point1 is: ' + point1);
  console.log('point2 is: ' + point2);
  console.log('point3 is: ' + point3);
  var returnData;
  var xAverage, x1, x2, x3;
  var yAverage, y1, y2, y3;

  x1 = point1[0];
  x2 = point2[0];
  x3 = point3[0];
  y1 = point1[1];
  y2 = point2[1];
  y3 = point3[1];

  // Calculate the X-averages:
  xAverage = (x1 + x2 + x3) / 3
  yAverage = (y1 + y2 + y3) / 3
  returnData = [xAverage, yAverage];
  console.log('returnData is: ' + returnData);
  console.log('END threePointAverage function');
  return returnData;
};

/**
 * @function arrayCounter
 * @description Receives an array and a value, counts the number of occurances of that value in the array.
 * @param {array<integer|string|object>} inputArray The array which should have it's values counted.
 * @param {integer|string|object} instance The instance that should be counted in the array.
 * @return {integer} The count of the objects/values that was found to match out of the array
 * @author Seth Hollingsead
 * @date 2020/05/20
 */
function arrayCounter(inputArray, instance) {
  console.log('BEGIN arrayCounter function');
  console.log('inputArray is: ' + inputArray);
  console.log('instance is: ' + instance);
  var i;
  var returnData = 0;
  for (i = 0; i <= inputArray.length(); i++) {
    if (inputArray[i] === instance) {
      returnData += 1;
    }
  }
  console.log('returnData is: ' + returnData);
  console.log('END arrayCounter function');
  return returnData;
};
