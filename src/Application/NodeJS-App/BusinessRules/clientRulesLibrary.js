/**
 * @file clientRulesLibrary.js
 * @module clientRulesLibrary
 * @description Contains all of the client defined business rules as a map between function names and function calls.
 * @requires module:clientStringParsing
 * @requires module:application-constants
 * @author Seth Hollingsead
 * @date 2020/06/10
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as clientStringParsing from './ClientRules/clientStringParsing';
import * as c from '../Constants/application.constants';

/**
 * @function initClientRulesLibrary
 * @description Initializes an object map of client business rules and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
export const initClientRulesLibrary = function() {
  // console.log('BEGIN clientRulesLibrary.initClientRulesLibrary function');
  // console.log('END clientRulesLibrary.initClientRulesLibrary function');
  return {
      [c.cclientEcho]: (inputData, inputMetaData) => (inputData, inputMetaData),

      // Client Business Rules
      // ********************************
      // ClientStringParsing rules in order
      // ********************************
      [c.ccustomEcho]: (inputData, inputMetaData) => clientStringParsing.customEcho(inputData, inputMetaData),
      [c.cmostPopularNumber]: (inputData, inputMetaData) => clientStringParsing.mostPopularNumber(inputData, inputMetaData),
      [c.cisAlmostPalindrome]: (inputData, inputMetaData) => clientStringParsing.isAlmostPalindrome(inputData, inputMetaData),
      [c.cthreePointAverage]: (inputData, inputMetaData) => clientStringParsing.threePointAverage(inputData, inputMetaData),
      [c.carrayCounter]: (inputData, inputMetaData) => clientStringParsing.arrayCounter(inputData, inputMetaData)
  };
};

export default {
  initClientRulesLibrary
};
