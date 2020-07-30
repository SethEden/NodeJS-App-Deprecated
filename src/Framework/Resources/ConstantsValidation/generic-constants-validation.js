/**
 * @file generic.constants-validation.js
 * @module generic-constants-validation
 * @description Contains many validations for generic constants.
 * @requires module:generic-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as g from '../../Constants/generic.constants';

 /**
 * @function genericConstantsValidation
 * @description Initializes the generic constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/23
 */
export const genericConstantsValidation = [
   {Name: 'cDotDot', Actual: g.cDotDot, Expected: '..'},
   {Name: 'cDotDotForwardSlash', Actual: g.cDotDotForwardSlash, Expected: '../'},

   // Boolean strings
   {Name: 'cTrue', Actual: g.cTrue, Expected: 'True'},
   {Name: 'cFalse', Actual: g.cFalse, Expected: 'False'},
   {Name: 'ctrue', Actual: g.ctrue, Expected: 'true'},
   {Name: 'cfalse', Actual: g.cfalse, Expected: 'false'},
   {Name: 'cTRUE', Actual: g.cTRUE, Expected: 'TRUE'},
   {Name: 'cFALSE', Actual: g.cFALSE, Expected: 'FALSE'},
   {Name: 'cOff', Actual: g.cOff, Expected: 'Off'},
   {Name: 'coff', Actual: g.coff, Expected: 'off'},
   {Name: 'cOFF', Actual: g.cOFF, Expected: 'OFF'},
   {Name: 'cyes', Actual: g.cyes, Expected: 'yes'},
   {Name: 'cnot', Actual: g.cnot, Expected: 'not'},
   {Name: 'cYes', Actual: g.cYes, Expected: 'Yes'},
   {Name: 'cNot', Actual: g.cNot, Expected: 'Not'},
   {Name: 'cYES', Actual: g.cYES, Expected: 'YES'},
   {Name: 'cNOT', Actual: g.cNOT, Expected: 'NOT'}, // g.c_NO + g.cT, Expected: 'NOTE cNOT is some how a reserved word that is a variable.
   {Name: 'cnotok', Actual: g.cnotok, Expected: 'notok'},
   {Name: 'cnotOk', Actual: g.cnotOk, Expected: 'notOk'},
   {Name: 'cnotOK', Actual: g.cnotOK, Expected: 'notOK'},
   {Name: 'cNotok', Actual: g.cNotok, Expected: 'Notok'},
   {Name: 'cNotOk', Actual: g.cNotOk, Expected: 'NotOk'},
   {Name: 'cNotOK', Actual: g.cNotOK, Expected: 'NotOK'},
   {Name: 'cNOTok', Actual: g.cNOTok, Expected: 'NOTok'}, // c_NOT', Actual: g.  g.cok;
   {Name: 'cNOTOk', Actual: g.cNOTOk, Expected: 'NOTOk'}, // c_NOT', Actual: g.  g.cOk;
   {Name: 'cNOTOK', Actual: g.cNOTOK, Expected: 'NOTOK'}, // c_NOT + g.cOK;
   {Name: 'cnotEql', Actual: g.cnotEql, Expected: 'notEql'},
   {Name: 'cnoteql', Actual: g.cnoteql, Expected: 'noteql'},
   {Name: 'cNotEql', Actual: g.cNotEql, Expected: 'NotEql'},
   {Name: 'cNoteql', Actual: g.cNoteql, Expected: 'Noteql'},

   // Test Status
   {Name: 'cPass', Actual: g.cPass, Expected: 'Pass'},
   {Name: 'cWarning', Actual: g.cWarning, Expected: 'Warning'},
   {Name: 'cFail', Actual: g.cFail, Expected: 'Fail'},

   // Directions
   {Name: 'cDown', Actual: g.cDown, Expected: 'Down'},
   {Name: 'cLeft', Actual: g.cLeft, Expected: 'Left'},
   {Name: 'cRight', Actual: g.cRight, Expected: 'Right'},

   // Alphabets
   {Name: 'cLowerCaseEnglishAlphabet', Actual: g.cLowerCaseEnglishAlphabet, Expected: 'abcdefghijklmnopqrstuvwxyz'},
   {Name: 'cUpperCaseEnglishAlphabet', Actual: g.cUpperCaseEnglishAlphabet, Expected: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
   {Name: 'cAllNumbers', Actual: g.cAllNumbers, Expected: '0123456789'},

   // File Extensions
   {Name: 'cdoc', Actual: g.cdoc, Expected: 'doc'},
   {Name: 'cDoc', Actual: g.cDoc, Expected: 'Doc'},
   {Name: 'cDOC', Actual: g.cDOC, Expected: 'DOC'},
   {Name: 'ccom', Actual: g.ccom, Expected: 'com'},
   {Name: 'cCom', Actual: g.cCom, Expected: 'Com'},
   {Name: 'cCOM', Actual: g.cCOM, Expected: 'COM'},
   {Name: 'czip', Actual: g.czip, Expected: 'zip'},
   {Name: 'cZip', Actual: g.cZip, Expected: 'Zip'},
   {Name: 'cZIP', Actual: g.cZIP, Expected: 'ZIP'},
   {Name: 'ctxt', Actual: g.ctxt, Expected: 'txt'},
   {Name: 'cTxt', Actual: g.cTxt, Expected: 'Txt'},
   {Name: 'cTXT', Actual: g.cTXT, Expected: 'TXT'},
   {Name: 'ccsv', Actual: g.ccsv, Expected: 'csv'},
   {Name: 'cCsv', Actual: g.cCsv, Expected: 'Csv'},
   {Name: 'cCSV', Actual: g.cCSV, Expected: 'CSV'},
   {Name: 'cxml', Actual: g.cxml, Expected: 'xml'},
   {Name: 'cXml', Actual: g.cXml, Expected: 'Xml'},
   {Name: 'cXML', Actual: g.cXML, Expected: 'XML'},

   {Name: 'cDotCSV', Actual: g.cDotCSV, Expected: '.csv'},
   {Name: 'cDotCom', Actual: g.cDotCom, Expected: '.Com'},
   {Name: 'cDotZip', Actual: g.cDotZip, Expected: '.Zip'},
   {Name: 'cDotzip', Actual: g.cDotzip, Expected: '.zip'},
   {Name: 'cDotTxt', Actual: g.cDotTxt, Expected: '.Txt'},
   {Name: 'cDotXml', Actual: g.cDotXml, Expected: '.Xml'},
   {Name: 'cDotxml', Actual: g.cDotxml, Expected: '.xml'},
   {Name: 'cascii', Actual: g.cascii, Expected: 'ascii'},

   // Time Formatting
   {Name: 'cYYYY', Actual: g.cYYYY, Expected: 'YYYY'},
   {Name: 'cSSS', Actual: g.cSSS, Expected: 'SSS'},
   {Name: 'cYYYYMMDD', Actual: g.cYYYYMMDD, Expected: 'YYYYMMDD'},
   {Name: 'cHHmmss', Actual: g.cHHmmss, Expected: 'HHmmss'},
   {Name: 'cHHmmss_SSS', Actual: g.cHHmmss_SSS, Expected: 'HHmmss-SSS'},
   {Name: 'cYYYYMMDD_HHmmss', Actual: g.cYYYYMMDD_HHmmss, Expected: 'YYYYMMDD-HHmmss'},
   {Name: 'cYYYYMMDD_HHmmss_SSS', Actual: g.cYYYYMMDD_HHmmss_SSS, Expected: 'YYYYMMDD-HHmmssSSS'},
   {Name: 'cYYYY_MM_DD_HH_mm_ss_SSS', Actual: g.cYYYY_MM_DD_HH_mm_ss_SSS, Expected: 'YYYY:MM:DD-HH:mm:ss:SSS'},

   // Naval & Military Codes
   {Name: 'cAlfa', Actual: g.cAlfa, Expected: 'Alfa'},
   {Name: 'cBravo', Actual: g.cBravo, Expected: 'Bravo'},
   {Name: 'cCharlie', Actual: g.cCharlie, Expected: 'Charlie'},
   {Name: 'cDelta', Actual: g.cDelta, Expected: 'Delta'},
   {Name: 'cEcho', Actual: g.cEcho, Expected: 'Echo'},
   {Name: 'cFoxtrot', Actual: g.cFoxtrot, Expected: 'Foxtrot'},
   {Name: 'cGolf', Actual: g.cGolf, Expected: 'Golf'},
   {Name: 'cHotel', Actual: g.cHotel, Expected: 'Hotel'},
   {Name: 'cIndia', Actual: g.cIndia, Expected: 'India'},
   {Name: 'cJuliett', Actual: g.cJuliett, Expected: 'Juliett'},
   {Name: 'cKilo', Actual: g.cKilo, Expected: 'Kilo'},
   {Name: 'cLima', Actual: g.cLima, Expected: 'Lima'},
   {Name: 'cMike', Actual: g.cMike, Expected: 'Mike'},
   {Name: 'cNovember', Actual: g.cNovember, Expected: 'November'},
   {Name: 'cOscar', Actual: g.cOscar, Expected: 'Oscar'},
   {Name: 'cPapa', Actual: g.cPapa, Expected: 'Papa'},
   {Name: 'cQuebec', Actual: g.cQuebec, Expected: 'Quebec'},
   {Name: 'cRomeo', Actual: g.cRomeo, Expected: 'Romeo'},
   {Name: 'cSierra', Actual: g.cSierra, Expected: 'Sierra'},
   {Name: 'cTango', Actual: g.cTango, Expected: 'Tango'},
   {Name: 'cUniform', Actual: g.cUniform, Expected: 'Uniform'},
   {Name: 'cVictor', Actual: g.cVictor, Expected: 'Victor'},
   {Name: 'cWhiskey', Actual: g.cWhiskey, Expected: 'Whiskey'},
   {Name: 'cXray', Actual: g.cXray, Expected: 'Xray'},
   {Name: 'cYankee', Actual: g.cYankee, Expected: 'Yankee'},
   {Name: 'cZulu', Actual: g.cZulu, Expected: 'Zulu'},

   {Name: 'cAlpha', Actual: g.cAlpha, Expected: 'Alpha'},
   {Name: 'cBeta', Actual: g.cBeta, Expected: 'Beta'},
   {Name: 'cGamma', Actual: g.cGamma, Expected: 'Gamma'},
   {Name: 'cEpsilon', Actual: g.cEpsilon, Expected: 'Epsilon'},
   {Name: 'cDigamma', Actual: g.cDigamma, Expected: 'Digamma'},
   {Name: 'cZeta', Actual: g.cZeta, Expected: 'Zeta'},
   {Name: 'ceta', Actual: g.ceta, Expected: 'eta'},
   {Name: 'cEta', Actual: g.cEta, Expected: 'Eta'},
   {Name: 'cTheta', Actual: g.cTheta, Expected: 'Theta'},
   {Name: 'cIota', Actual: g.cIota, Expected: 'Iota'},
   {Name: 'cKappa', Actual: g.cKappa, Expected: 'Kappa'},
   {Name: 'cLambda', Actual: g.cLambda, Expected: 'Lambda'},
   {Name: 'cMu', Actual: g.cMu, Expected: 'Mu'},
   {Name: 'cNu', Actual: g.cNu, Expected: 'Nu'},
   {Name: 'cXi', Actual: g.cXi, Expected: 'Xi'},
   {Name: 'cOmicron', Actual: g.cOmicron, Expected: 'Omicron'},
   {Name: 'cPi', Actual: g.cPi, Expected: 'Pi'},
   {Name: 'cSan', Actual: g.cSan, Expected: 'San'},
   {Name: 'cKoppa', Actual: g.cKoppa, Expected: 'Koppa'},
   {Name: 'cRho', Actual: g.cRho, Expected: 'Rho'},
   {Name: 'cSigma', Actual: g.cSigma, Expected: 'Sigma'},
   {Name: 'cTau', Actual: g.cTau, Expected: 'Tau'},
   {Name: 'cUpsilon', Actual: g.cUpsilon, Expected: 'Upsilon'},
   {Name: 'cPhi', Actual: g.cPhi, Expected: 'Phi'},
   {Name: 'cChi', Actual: g.cChi, Expected: 'Chi'},
   {Name: 'cPsi', Actual: g.cPsi, Expected: 'Psi'},
   {Name: 'cOmega', Actual: g.cOmega, Expected: 'Omega'},

   // Months Of The Year
   {Name: 'cJanuary', Actual: g.cJanuary, Expected: 'January'},
   {Name: 'cFebuary', Actual: g.cFebuary, Expected: 'Febuary'},
   {Name: 'cMarch', Actual: g.cMarch, Expected: 'March'},
   {Name: 'cApril', Actual: g.cApril, Expected: 'April'},
   {Name: 'cMay', Actual: g.cMay, Expected: 'May'},
   {Name: 'cJune', Actual: g.cJune, Expected: 'June'},
   {Name: 'cJuly', Actual: g.cJuly, Expected: 'July'},
   {Name: 'cAugust', Actual: g.cAugust, Expected: 'August'},
   {Name: 'cSeptember', Actual: g.cSeptember, Expected: 'September'},
   {Name: 'cOctober', Actual: g.cOctober, Expected: 'October'},
   // {Name: 'cNovember', Actual: g.cNovember, Expected: 'November'},
   {Name: 'cDecember', Actual: g.cDecember, Expected: 'December'},

   // Miscelanious
   {Name: 'cconst', Actual: g.cconst, Expected: 'const'},
   {Name: 'cConst', Actual: g.cConst, Expected: 'Const'}
 ];
