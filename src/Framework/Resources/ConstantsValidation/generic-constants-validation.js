/**
 * @file generic-constants-validation.js
 * @module generic-constants-validation
 * @description Contains many validations for generic constants.
 * @requires module:generic-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as gen from '../../Constants/generic.constants';

 /**
 * @function genericConstantsValidation
 * @description Initializes the generic constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/23
 */
export const genericConstantsValidation = [
   {Name: 'cDotDot', Actual: gen.cDotDot, Expected: '..'},
   {Name: 'cDotDotForwardSlash', Actual: gen.cDotDotForwardSlash, Expected: '../'},

   // Boolean strings
   {Name: 'cTrue', Actual: gen.cTrue, Expected: 'True'},
   {Name: 'cFalse', Actual: gen.cFalse, Expected: 'False'},
   {Name: 'ctrue', Actual: gen.ctrue, Expected: 'true'},
   {Name: 'cfalse', Actual: gen.cfalse, Expected: 'false'},
   {Name: 'cTRUE', Actual: gen.cTRUE, Expected: 'TRUE'},
   {Name: 'cFALSE', Actual: gen.cFALSE, Expected: 'FALSE'},
   {Name: 'cOff', Actual: gen.cOff, Expected: 'Off'},
   {Name: 'coff', Actual: gen.coff, Expected: 'off'},
   {Name: 'cOFF', Actual: gen.cOFF, Expected: 'OFF'},
   {Name: 'cyes', Actual: gen.cyes, Expected: 'yes'},
   {Name: 'cnot', Actual: gen.cnot, Expected: 'not'},
   {Name: 'cYes', Actual: gen.cYes, Expected: 'Yes'},
   {Name: 'cNot', Actual: gen.cNot, Expected: 'Not'},
   {Name: 'cYES', Actual: gen.cYES, Expected: 'YES'},
   {Name: 'cNOT', Actual: gen.cNOT, Expected: 'NOT'}, // gen.c_NO + gen.cT, Expected: 'NOTE cNOT is some how a reserved word that is a variable.
   {Name: 'cnotok', Actual: gen.cnotok, Expected: 'notok'},
   {Name: 'cnotOk', Actual: gen.cnotOk, Expected: 'notOk'},
   {Name: 'cnotOK', Actual: gen.cnotOK, Expected: 'notOK'},
   {Name: 'cNotok', Actual: gen.cNotok, Expected: 'Notok'},
   {Name: 'cNotOk', Actual: gen.cNotOk, Expected: 'NotOk'},
   {Name: 'cNotOK', Actual: gen.cNotOK, Expected: 'NotOK'},
   {Name: 'cNOTok', Actual: gen.cNOTok, Expected: 'NOTok'}, // c_NOT', Actual: g.  gen.cok;
   {Name: 'cNOTOk', Actual: gen.cNOTOk, Expected: 'NOTOk'}, // c_NOT', Actual: g.  gen.cOk;
   {Name: 'cNOTOK', Actual: gen.cNOTOK, Expected: 'NOTOK'}, // c_NOT + gen.cOK;
   {Name: 'cnotEql', Actual: gen.cnotEql, Expected: 'notEql'},
   {Name: 'cnoteql', Actual: gen.cnoteql, Expected: 'noteql'},
   {Name: 'cNotEql', Actual: gen.cNotEql, Expected: 'NotEql'},
   {Name: 'cNoteql', Actual: gen.cNoteql, Expected: 'Noteql'},
   {Name: 'cmax', Actual: gen.cmax, Expected: 'max'},
   {Name: 'cMax', Actual: gen.cMax, Expected: 'Max'},
   {Name: 'cmin', Actual: gen.cmin, Expected: 'min'},
   {Name: 'cMin', Actual: gen.cMin, Expected: 'Min'},

   // Test Status
   {Name: 'cPass', Actual: gen.cPass, Expected: 'Pass'},
   {Name: 'cWarning', Actual: gen.cWarning, Expected: 'Warning'},
   {Name: 'cFail', Actual: gen.cFail, Expected: 'Fail'},

   // Directions
   {Name: 'cDown', Actual: gen.cDown, Expected: 'Down'},
   {Name: 'cLeft', Actual: gen.cLeft, Expected: 'Left'},
   {Name: 'cRight', Actual: gen.cRight, Expected: 'Right'},

   // Alphabets
   {Name: 'cLowerCaseEnglishAlphabet', Actual: gen.cLowerCaseEnglishAlphabet, Expected: 'abcdefghijklmnopqrstuvwxyz'},
   {Name: 'cUpperCaseEnglishAlphabet', Actual: gen.cUpperCaseEnglishAlphabet, Expected: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
   {Name: 'cAllNumbers', Actual: gen.cAllNumbers, Expected: '0123456789'},
   {Name: 'cMostSpecialCharacters', Actual: gen.cMostSpecialCharacters, Expected: '!@#$%^&*()_+{}|:"<>?.,~'},

   // File Extensions
   {Name: 'cexe', Actual: gen.cexe, Expected: 'exe'},
   {Name: 'cExe', Actual: gen.cExe, Expected: 'Exe'},
   {Name: 'cEXE', Actual: gen.cEXE, Expected: 'EXE'},
   {Name: 'cdoc', Actual: gen.cdoc, Expected: 'doc'},
   {Name: 'cDoc', Actual: gen.cDoc, Expected: 'Doc'},
   {Name: 'cDOC', Actual: gen.cDOC, Expected: 'DOC'},
   {Name: 'ccom', Actual: gen.ccom, Expected: 'com'},
   {Name: 'cCom', Actual: gen.cCom, Expected: 'Com'},
   {Name: 'cCOM', Actual: gen.cCOM, Expected: 'COM'},
   {Name: 'czip', Actual: gen.czip, Expected: 'zip'},
   {Name: 'cZip', Actual: gen.cZip, Expected: 'Zip'},
   {Name: 'cZIP', Actual: gen.cZIP, Expected: 'ZIP'},
   {Name: 'ctxt', Actual: gen.ctxt, Expected: 'txt'},
   {Name: 'cTxt', Actual: gen.cTxt, Expected: 'Txt'},
   {Name: 'cTXT', Actual: gen.cTXT, Expected: 'TXT'},
   {Name: 'ccsv', Actual: gen.ccsv, Expected: 'csv'},
   {Name: 'cCsv', Actual: gen.cCsv, Expected: 'Csv'},
   {Name: 'cCSV', Actual: gen.cCSV, Expected: 'CSV'},
   {Name: 'cxml', Actual: gen.cxml, Expected: 'xml'},
   {Name: 'cXml', Actual: gen.cXml, Expected: 'Xml'},
   {Name: 'cXML', Actual: gen.cXML, Expected: 'XML'},
   {Name: 'clog', Actual: gen.clog, Expected: 'log'},
   {Name: 'cLog', Actual: gen.cLog, Expected: 'Log'},
   {Name: 'cLOG', Actual: gen.cLOG, Expected: 'LOG'},
   {Name: 'cjson', Actual: gen.cjson, Expected: 'json'},
   {Name: 'cJson', Actual: gen.cJson, Expected: 'Json'},
   {Name: 'cJSON', Actual: gen.cJSON, Expected: 'JSON'},
   {Name: 'cenv', Actual: gen.cenv, Expected: 'env'},
   {Name: 'cEnv', Actual: gen.cEnv, Expected: 'Env'},
   {Name: 'cENV', Actual: gen.cENV, Expected: 'ENV'},

   {Name: 'cDotexe', Actual: gen.cDotexe, Expected: '.exe'},
   {Name: 'cDotExe', Actual: gen.cDotExe, Expected: '.Exe'},
   {Name: 'cDotEXE', Actual: gen.cDotEXE, Expected: '.EXE'},
   {Name: 'cDotcsv', Actual: gen.cDotcsv, Expected: '.csv'},
   {Name: 'cDotCsv', Actual: gen.cDotCsv, Expected: '.Csv'},
   {Name: 'cDotCSV', Actual: gen.cDotCSV, Expected: '.CSV'},
   {Name: 'cDotCom', Actual: gen.cDotCom, Expected: '.Com'},
   {Name: 'cDotzip', Actual: gen.cDotzip, Expected: '.zip'},
   {Name: 'cDotZip', Actual: gen.cDotZip, Expected: '.Zip'},
   {Name: 'cDotZIP', Actual: gen.cDotZIP, Expected: '.ZIP'},
   {Name: 'cDottxt', Actual: gen.cDottxt, Expected: '.txt'},
   {Name: 'cDotTxt', Actual: gen.cDotTxt, Expected: '.Txt'},
   {Name: 'cDotTXT', Actual: gen.cDotTXT, Expected: '.TXT'},
   {Name: 'cDotxml', Actual: gen.cDotxml, Expected: '.xml'},
   {Name: 'cDotXml', Actual: gen.cDotXml, Expected: '.Xml'},
   {Name: 'cDotXML', Actual: gen.cDotXML, Expected: '.XML'},
   {Name: 'cDotlog', Actual: gen.cDotlog, Expected: '.log'},
   {Name: 'cDotLog', Actual: gen.cDotLog, Expected: '.Log'},
   {Name: 'cDotLOG', Actual: gen.cDotLOG, Expected: '.LOG'},
   {Name: 'cDotjson', Actual: gen.cDotjson, Expected: '.json'},
   {Name: 'cDotJson', Actual: gen.cDotJson, Expected: '.Json'},
   {Name: 'cDotJSON', Actual: gen.cDotJSON, Expected: '.JSON'},
   {Name: 'cDotenv', Actual: gen.cDotenv, Expected: '.env'},
   {Name: 'cDotEnv', Actual: gen.cDotEnv, Expected: '.Env'},
   {Name: 'cDotENV', Actual: gen.cDotENV, Expected: '.ENV'},
   {Name: 'cascii', Actual: gen.cascii, Expected: 'ascii'},

   // Time Formatting
   {Name: 'cYYYY', Actual: gen.cYYYY, Expected: 'YYYY'},
   {Name: 'cSSS', Actual: gen.cSSS, Expected: 'SSS'},
   {Name: 'cYYYYMMDD', Actual: gen.cYYYYMMDD, Expected: 'YYYYMMDD'},
   {Name: 'cHHmmss', Actual: gen.cHHmmss, Expected: 'HHmmss'},
   {Name: 'cHHmmss_SSS', Actual: gen.cHHmmss_SSS, Expected: 'HHmmss-SSS'},
   {Name: 'cYYYYMMDD_HHmmss', Actual: gen.cYYYYMMDD_HHmmss, Expected: 'YYYYMMDD-HHmmss'},
   {Name: 'cYYYYMMDD_HHmmss_SSS', Actual: gen.cYYYYMMDD_HHmmss_SSS, Expected: 'YYYYMMDD-HHmmssSSS'},
   {Name: 'cYYYY_MM_DD_HH_mm_ss_SSS', Actual: gen.cYYYY_MM_DD_HH_mm_ss_SSS, Expected: 'YYYY:MM:DD-HH:mm:ss:SSS'},

   // Naval & Military Codes
   {Name: 'cAlfa', Actual: gen.cAlfa, Expected: 'Alfa'},
   {Name: 'cBravo', Actual: gen.cBravo, Expected: 'Bravo'},
   {Name: 'cCharlie', Actual: gen.cCharlie, Expected: 'Charlie'},
   {Name: 'cDelta', Actual: gen.cDelta, Expected: 'Delta'},
   {Name: 'cEcho', Actual: gen.cEcho, Expected: 'Echo'},
   {Name: 'cFoxtrot', Actual: gen.cFoxtrot, Expected: 'Foxtrot'},
   {Name: 'cGolf', Actual: gen.cGolf, Expected: 'Golf'},
   {Name: 'cHotel', Actual: gen.cHotel, Expected: 'Hotel'},
   {Name: 'cIndia', Actual: gen.cIndia, Expected: 'India'},
   {Name: 'cJuliett', Actual: gen.cJuliett, Expected: 'Juliett'},
   {Name: 'cKilo', Actual: gen.cKilo, Expected: 'Kilo'},
   {Name: 'cLima', Actual: gen.cLima, Expected: 'Lima'},
   {Name: 'cMike', Actual: gen.cMike, Expected: 'Mike'},
   {Name: 'cNovember', Actual: gen.cNovember, Expected: 'November'},
   {Name: 'cOscar', Actual: gen.cOscar, Expected: 'Oscar'},
   {Name: 'cPapa', Actual: gen.cPapa, Expected: 'Papa'},
   {Name: 'cQuebec', Actual: gen.cQuebec, Expected: 'Quebec'},
   {Name: 'cRomeo', Actual: gen.cRomeo, Expected: 'Romeo'},
   {Name: 'cSierra', Actual: gen.cSierra, Expected: 'Sierra'},
   {Name: 'cTango', Actual: gen.cTango, Expected: 'Tango'},
   {Name: 'cUniform', Actual: gen.cUniform, Expected: 'Uniform'},
   {Name: 'cVictor', Actual: gen.cVictor, Expected: 'Victor'},
   {Name: 'cWhiskey', Actual: gen.cWhiskey, Expected: 'Whiskey'},
   {Name: 'cXray', Actual: gen.cXray, Expected: 'Xray'},
   {Name: 'cYankee', Actual: gen.cYankee, Expected: 'Yankee'},
   {Name: 'cZulu', Actual: gen.cZulu, Expected: 'Zulu'},

   {Name: 'cAlpha', Actual: gen.cAlpha, Expected: 'Alpha'},
   {Name: 'cBeta', Actual: gen.cBeta, Expected: 'Beta'},
   {Name: 'cGamma', Actual: gen.cGamma, Expected: 'Gamma'},
   {Name: 'cEpsilon', Actual: gen.cEpsilon, Expected: 'Epsilon'},
   {Name: 'cDigamma', Actual: gen.cDigamma, Expected: 'Digamma'},
   {Name: 'cZeta', Actual: gen.cZeta, Expected: 'Zeta'},
   {Name: 'ceta', Actual: gen.ceta, Expected: 'eta'},
   {Name: 'cEta', Actual: gen.cEta, Expected: 'Eta'},
   {Name: 'cTheta', Actual: gen.cTheta, Expected: 'Theta'},
   {Name: 'cIota', Actual: gen.cIota, Expected: 'Iota'},
   {Name: 'cKappa', Actual: gen.cKappa, Expected: 'Kappa'},
   {Name: 'cLambda', Actual: gen.cLambda, Expected: 'Lambda'},
   {Name: 'cMu', Actual: gen.cMu, Expected: 'Mu'},
   {Name: 'cNu', Actual: gen.cNu, Expected: 'Nu'},
   {Name: 'cXi', Actual: gen.cXi, Expected: 'Xi'},
   {Name: 'cOmicron', Actual: gen.cOmicron, Expected: 'Omicron'},
   {Name: 'cPi', Actual: gen.cPi, Expected: 'Pi'},
   {Name: 'cSan', Actual: gen.cSan, Expected: 'San'},
   {Name: 'cKoppa', Actual: gen.cKoppa, Expected: 'Koppa'},
   {Name: 'cRho', Actual: gen.cRho, Expected: 'Rho'},
   {Name: 'cSigma', Actual: gen.cSigma, Expected: 'Sigma'},
   {Name: 'cTau', Actual: gen.cTau, Expected: 'Tau'},
   {Name: 'cUpsilon', Actual: gen.cUpsilon, Expected: 'Upsilon'},
   {Name: 'cPhi', Actual: gen.cPhi, Expected: 'Phi'},
   {Name: 'cChi', Actual: gen.cChi, Expected: 'Chi'},
   {Name: 'cPsi', Actual: gen.cPsi, Expected: 'Psi'},
   {Name: 'cOmega', Actual: gen.cOmega, Expected: 'Omega'},

   // Months Of The Year
   {Name: 'cJanuary', Actual: gen.cJanuary, Expected: 'January'},
   {Name: 'cFebuary', Actual: gen.cFebuary, Expected: 'Febuary'},
   {Name: 'cMarch', Actual: gen.cMarch, Expected: 'March'},
   {Name: 'cApril', Actual: gen.cApril, Expected: 'April'},
   {Name: 'cMay', Actual: gen.cMay, Expected: 'May'},
   {Name: 'cJune', Actual: gen.cJune, Expected: 'June'},
   {Name: 'cJuly', Actual: gen.cJuly, Expected: 'July'},
   {Name: 'cAugust', Actual: gen.cAugust, Expected: 'August'},
   {Name: 'cSeptember', Actual: gen.cSeptember, Expected: 'September'},
   {Name: 'cOctober', Actual: gen.cOctober, Expected: 'October'},
   // {Name: 'cNovember', Actual: gen.cNovember, Expected: 'November'},
   {Name: 'cDecember', Actual: gen.cDecember, Expected: 'December'},

   // Constants Abreviations
   {Name: 'cbas', Actual: gen.cbas, Expected: 'bas'},
   {Name: 'cbiz', Actual: gen.cbiz, Expected: 'biz'},
   {Name: 'cclr', Actual: gen.cclr, Expected: 'clr'},
   {Name: 'ccmd', Actual: gen.ccmd, Expected: 'cmd'},
   {Name: 'ccfg', Actual: gen.ccfg, Expected: 'cfg'},
   {Name: 'cctr', Actual: gen.cctr, Expected: 'ctr'},
   {Name: 'celm', Actual: gen.celm, Expected: 'elm'},
   {Name: 'cgen', Actual: gen.cgen, Expected: 'gen'},
   {Name: 'ciso', Actual: gen.ciso, Expected: 'iso'},
   {Name: 'ckts', Actual: gen.ckts, Expected: 'kts'},
   {Name: 'clng', Actual: gen.clng, Expected: 'lng'},
   {Name: 'cmsg', Actual: gen.cmsg, Expected: 'msg'},
   {Name: 'cnum', Actual: gen.cnum, Expected: 'num'},
   {Name: 'cphn', Actual: gen.cphn, Expected: 'phn'},
   {Name: 'cshp', Actual: gen.cshp, Expected: 'shp'},
   {Name: 'csys', Actual: gen.csys, Expected: 'sys'},
   {Name: 'cunt', Actual: gen.cunt, Expected: 'unt'},
   {Name: 'cwrd', Actual: gen.cwrd, Expected: 'wrd'},

   // Miscelanious
   {Name: 'cUTF8', Actual: gen.cUTF8, Expected: 'UTF8'},
   {Name: 'cconst', Actual: gen.cconst, Expected: 'const'},
   {Name: 'cConst', Actual: gen.cConst, Expected: 'Const'},
   {Name: 'cASAP', Actual: gen.cASAP, Expected: 'ASAP'},
   {Name: 'capp', Actual: gen.capp, Expected: 'app'},
   {Name: 'cApp', Actual: gen.cApp, Expected: 'App'},
   {Name: 'cAPP', Actual: gen.cAPP, Expected: 'APP'},
   {Name: 'carg', Actual: gen.carg, Expected: 'arg'},
   {Name: 'cArg', Actual: gen.cArg, Expected: 'Arg'},
   {Name: 'cargs', Actual: gen.cargs, Expected: 'args'},
   {Name: 'cArgs', Actual: gen.cArgs, Expected: 'Args'},
   {Name: 'chex', Actual: gen.chex, Expected: 'hex'},
   {Name: 'cHex', Actual: gen.cHex, Expected: 'Hex'},
   {Name: 'cregEx', Actual: gen.cregEx, Expected: 'regEx'},
   {Name: 'cRegEx', Actual: gen.cRegEx, Expected: 'RegEx'},
   {Name: 'cregExp', Actual: gen.cregExp, Expected: 'regExp'},
   {Name: 'cRegExp', Actual: gen.cRegExp, Expected: 'RegExp'},
   {Name: 'cbin', Actual: gen.cbin, Expected: 'bin'},
   {Name: 'cBin', Actual: gen.cBin, Expected: 'Bin'},
   {Name: 'cBIN', Actual: gen.cBIN, Expected: 'BIN'},
 ];
