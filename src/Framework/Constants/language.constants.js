/**
 * @file language.constants.js
 * @module language-constants
 * @description Contains many re-usable language constants.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:word-constants
 * @requires module:country-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as wrd from './word.constants';
import * as ctr from './country.constants';

// Languages
export const cChinese = phn.cChi + bas.cn + phn.cese; // Chinese
export const cChineseSimplified = cChinese + wrd.cSimplified; // ChineseSimplified
export const cChineseTraditional = cChinese + wrd.cTraditional; // ChineseTraditional
export const cCzech = bas.cCz + bas.ce + bas.cch; // Czech
export const cEnglish = bas.cEn + bas.cgl + phn.cish; // English
export const cFrench = bas.cFr + bas.cen + bas.cch; // French
// cGerman = bas.cGe + bas.cr + cman; // German // Defined above in the countries section
export const cHungarian = wrd.cHung + bas.car + phn.cian; // Hungarian
export const cItalian = bas.cIt + bas.cal + phn.cian; // Italian
export const cJapanese = ctr.cJapan + phn.cese; // Japanese
export const cKorean = bas.cKo + bas.cre + bas.can; // Korean
export const cMiscellaneous = phn.cMis + wrd.ccell + bas.can + phn.ceous; // Miscellaneous
export const cPolish = bas.cPo + bas.cl + phn.cish; // Polish
export const cPortuguese = wrd.cPort + bas.cug + bas.cu + phn.cese; // Portuguese
export const cRussian = bas.cRu + bas.css + phn.cian; // Russian
export const cSpanish = bas.cSp + bas.can + phn.cish; // Spanish
