/**
 * @file application.business.constants.js
 * @module application-business-constants
 * @description A file to hold all of the client application business rules constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2021/03/08
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as gen from '../../../Framework/Constants/generic.constants';
import * as num from '../../../Framework/Constants/numeric.constants';
import * as wrd from '../../../Framework/Constants/word.constants';

// Client Business Rules
export const cclientEcho = wrd.cclient + wrd.cEcho;

// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = wrd.ccustom + wrd.cEcho;
export const cmostPopularNumber = wrd.cmost + wrd.cPopular + wrd.cNumber;
export const cisAlmostPalindrome = wrd.cis + wrd.cAlmost + wrd.cPalindrome;
export const cthreePointAverage = num.cthree + wrd.cPoint + wrd.cAverage;
export const carrayCounter = wrd.carray + wrd.cCounter;
