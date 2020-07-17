"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chundred = exports.cninety = exports.ceighty = exports.cseventy = exports.csixty = exports.cfifty = exports.cfourty = exports.cthirty = exports.ctwenty = exports.cnineteen = exports.ceighteen = exports.cseventeen = exports.csixteen = exports.cfifteen = exports.cfourteen = exports.cthirteen = exports.ctwelve = exports.celeven = exports.cten = exports.cnine = exports.ceight = exports.cseven = exports.csix = exports.cfive = exports.cfour = exports.cthree = exports.ctwo = exports.cone = exports.cYYYY_MM_DD_HH_mm_ss_SSS = exports.cYYYYMMDD_HHmmss_SSS = exports.cYYYYMMDD_HHmmss = exports.cHHmmss_SSS = exports.cHHmmss = exports.cYYYYMMDD = exports.cSSS = exports.cYYYY = exports.cDotxml = exports.cDotXml = exports.cDotTxt = exports.cDotzip = exports.cDotZip = exports.cDotCom = exports.cDotCSV = exports.cXML = exports.cXml = exports.cxml = exports.cCSV = exports.cCsv = exports.ccsv = exports.cTXT = exports.cTxt = exports.ctxt = exports.cZIP = exports.cZip = exports.czip = exports.cCOM = exports.cCom = exports.ccom = exports.cDOC = exports.cDoc = exports.cdoc = exports.cAllNumbers = exports.cUpperCaseEnglishAlphabet = exports.cLowerCaseEnglishAlphabet = exports.cRight = exports.cLeft = exports.cDown = exports.cFail = exports.cWarning = exports.cPass = exports.cNoteql = exports.cNotEql = exports.cnoteql = exports.cnotEql = exports.cNOTOK = exports.cNOTOk = exports.cNOTok = exports.cNotOK = exports.cNotOk = exports.cNotok = exports.cnotOK = exports.cnotOk = exports.cnotok = exports.cNOT = exports.cYES = exports.cNot = exports.cYes = exports.cnot = exports.cyes = exports.cOFF = exports.coff = exports.cOff = exports.cFALSE = exports.cTRUE = exports.cfalse = exports.ctrue = exports.cFalse = exports.cTrue = exports.cDotDotForwardSlash = exports.cDotDot = void 0;
exports.cMill = exports.cMicro = exports.cNano = exports.cPico = exports.cTrillionth = exports.ctrillionth = exports.cBillionth = exports.cbillionth = exports.cMillionth = exports.cmillionth = exports.cThousandth = exports.cthousandth = exports.cHundredth = exports.chundredth = exports.cNinetieth = exports.cninetieth = exports.cEightieth = exports.ceightieth = exports.cSeventieth = exports.cseventieth = exports.cSixtieth = exports.csixtieth = exports.cFiftieth = exports.cfiftieth = exports.cFourtieth = exports.cfourtieth = exports.cThirtieth = exports.cthirtieth = exports.cTwentieth = exports.ctwentieth = exports.cNineteenth = exports.cnineteenth = exports.cEighteenth = exports.ceighteenth = exports.cSeventeenth = exports.cseventeenth = exports.cSixteenth = exports.csixteenth = exports.cFifteenth = exports.cfifteenth = exports.cFourteenth = exports.cfourteenth = exports.cThirteenth = exports.cthirteenth = exports.cTwelveth = exports.ctwelveth = exports.cEleventh = exports.celeventh = exports.cTenth = exports.ctenth = exports.cEighth = exports.ceighth = exports.cSeventh = exports.cseventh = exports.cSixth = exports.csixth = exports.cFifth = exports.cfifth = exports.cFourth = exports.cfourth = exports.cThird = exports.cthird = exports.cFirst = exports.cfirst = exports.cTrillion = exports.cBillion = exports.cMillion = exports.cThousand = exports.cHundred = exports.cNinety = exports.cEighty = exports.cSeventy = exports.cSixty = exports.cFifty = exports.cFourty = exports.cThirty = exports.cTwenty = exports.cNineteen = exports.cEighteen = exports.cSeventeen = exports.cSixteen = exports.cFifteen = exports.cFourteen = exports.cThirteen = exports.cTwelve = exports.cEleven = exports.cTen = exports.cNine = exports.cEight = exports.cSeven = exports.cSix = exports.cFive = exports.cFour = exports.cThree = exports.cTwo = exports.cOne = exports.ctrillion = exports.cbillion = exports.cmillion = exports.cthousand = void 0;
exports.cress = exports.cDecember = exports.cOctober = exports.cSeptember = exports.cAugust = exports.cJuly = exports.cJune = exports.cMay = exports.cApril = exports.cMarch = exports.cFebuary = exports.cJanuary = exports.cOmega = exports.cPsi = exports.cChi = exports.cPhi = exports.cUpsilon = exports.cTau = exports.cSigma = exports.cRho = exports.cKoppa = exports.cSan = exports.cPi = exports.cOmicron = exports.cXi = exports.cNu = exports.cMu = exports.cLambda = exports.cKappa = exports.cIota = exports.cTheta = exports.cEta = exports.ceta = exports.cZeta = exports.cDigamma = exports.cEpsilon = exports.cGamma = exports.cBeta = exports.cAlpha = exports.cZulu = exports.cYankee = exports.cXray = exports.cWhiskey = exports.cVictor = exports.cUniform = exports.cTango = exports.cSierra = exports.cRomeo = exports.cQuebec = exports.cPapa = exports.cOscar = exports.cNovember = exports.cMike = exports.cLima = exports.cKilo = exports.cJuliett = exports.cIndia = exports.cHotel = exports.cGolf = exports.cFoxtrot = exports.cEcho = exports.cDelta = exports.cCharlie = exports.cBravo = exports.cAlfa = exports.cPicoSeconds = exports.cPicoSecond = exports.cMilliSeconds = exports.cMilliSecond = exports.cMicroSeconds = exports.cMicroSecond = exports.cNanoSeconds = exports.cNanoSecond = exports.cMillenniums = exports.cMillennium = exports.cCenturies = exports.cCentury = exports.cCentur = exports.cCent = exports.ccent = exports.cDecades = exports.cDecade = exports.cYears = exports.cYear = exports.cMonths = exports.cMonth = exports.cWeeks = exports.cWeek = exports.cDays = exports.cDay = exports.cHours = exports.cHour = exports.cMinutes = exports.cMinute = exports.cSeconds = exports.cSecond = exports.csecond = exports.cMilli = void 0;

var b = _interopRequireWildcard(require("../constants/basic.constants"));

var p = _interopRequireWildcard(require("../constants/phonics.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many generic constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var cDotDot = b.cDot + b.cDot;
exports.cDotDot = cDotDot;
var cDotDotForwardSlash = cDotDot + b.cForwardSlash; // Boolean strings

exports.cDotDotForwardSlash = cDotDotForwardSlash;
var cTrue = b.cT + p.crue;
exports.cTrue = cTrue;
var cFalse = b.cF + p.calse;
exports.cFalse = cFalse;
var ctrue = b.ct + p.crue;
exports.ctrue = ctrue;
var cfalse = b.cf + p.calse;
exports.cfalse = cfalse;
var cTRUE = b.cTR + b.cUE;
exports.cTRUE = cTRUE;
var cFALSE = b.cFA + b.cLS + b.cE;
exports.cFALSE = cFALSE;
var cOff = b.cO + b.cff;
exports.cOff = cOff;
var coff = b.co + b.cff;
exports.coff = coff;
var cOFF = b.cOF + b.cF;
exports.cOFF = cOFF;
var cyes = b.cy + b.ces;
exports.cyes = cyes;
var cnot = b.cno + b.ct;
exports.cnot = cnot;
var cYes = b.cY + b.ces;
exports.cYes = cYes;
var cNot = b.cNo + b.ct;
exports.cNot = cNot;
var cYES = b.cYE + b.cS;
exports.cYES = cYES;
var cNOT = 'NOT'; // b.c_NO + b.cT; // NOTE cNOT is some how a reserved word that is a variable.

exports.cNOT = cNOT;
var cnotok = cnot + b.cok;
exports.cnotok = cnotok;
var cnotOk = cnot + b.cOk;
exports.cnotOk = cnotOk;
var cnotOK = cnot + b.cOK;
exports.cnotOK = cnotOK;
var cNotok = cNot + b.cok;
exports.cNotok = cNotok;
var cNotOk = cNot + b.cOk;
exports.cNotOk = cNotOk;
var cNotOK = cNot + b.cOK;
exports.cNotOK = cNotOK;
var cNOTok = 'NOTok'; // c_NOT = b.cok;

exports.cNOTok = cNOTok;
var cNOTOk = 'NOTOk'; // c_NOT = b.cOk;

exports.cNOTOk = cNOTOk;
var cNOTOK = 'NOTOK'; // c_NOT + b.cOK;

exports.cNOTOK = cNOTOK;
var cnotEql = cnot + p.cEql;
exports.cnotEql = cnotEql;
var cnoteql = cnot + p.ceql;
exports.cnoteql = cnoteql;
var cNotEql = cNot + p.cEql;
exports.cNotEql = cNotEql;
var cNoteql = cNot + p.ceql; // Test Status

exports.cNoteql = cNoteql;
var cPass = b.cPa + b.css;
exports.cPass = cPass;
var cWarning = b.cWa + b.crn + b.cin + b.cg;
exports.cWarning = cWarning;
var cFail = b.cFa + b.cil; // Directions

exports.cFail = cFail;
var cDown = b.cDo + b.cwn;
exports.cDown = cDown;
var cLeft = b.cLe + b.cft;
exports.cLeft = cLeft;
var cRight = b.cRi + b.cgh + b.ct; // Alphabets

exports.cRight = cRight;
var cLowerCaseEnglishAlphabet = b.cab + b.ccd + b.cef + b.cgh + b.cij + b.ckl + b.cmn + b.cop + b.cqr + b.cst + b.cuv + b.cwx + b.cyz;
exports.cLowerCaseEnglishAlphabet = cLowerCaseEnglishAlphabet;
var cUpperCaseEnglishAlphabet = b.cAB + b.cCD + b.cEF + b.cGH + b.cIJ + b.cKL + b.cMN + b.cOP + b.cQR + b.cST + b.cUV + b.cWX + b.cYZ;
exports.cUpperCaseEnglishAlphabet = cUpperCaseEnglishAlphabet;
var cAllNumbers = b.c0 + b.c1 + b.c2 + b.c3 + b.c4 + b.c5 + b.c6 + b.c7 + b.c8 + b.c9; // File Extensions

exports.cAllNumbers = cAllNumbers;
var cdoc = b.cdo + b.cc;
exports.cdoc = cdoc;
var cDoc = b.cDo + b.cc;
exports.cDoc = cDoc;
var cDOC = b.cDO + b.cC;
exports.cDOC = cDOC;
var ccom = b.cco + b.cm;
exports.ccom = ccom;
var cCom = b.cCo + b.cm;
exports.cCom = cCom;
var cCOM = b.cCO + b.cM;
exports.cCOM = cCOM;
var czip = b.cz + b.cip;
exports.czip = czip;
var cZip = b.cZ + b.cip;
exports.cZip = cZip;
var cZIP = b.cZ + b.cIP;
exports.cZIP = cZIP;
var ctxt = b.ct + b.cxt;
exports.ctxt = ctxt;
var cTxt = b.cT + b.cxt;
exports.cTxt = cTxt;
var cTXT = b.cT + b.cXT;
exports.cTXT = cTXT;
var ccsv = b.ccs + b.cv;
exports.ccsv = ccsv;
var cCsv = b.cCs + b.cv;
exports.cCsv = cCsv;
var cCSV = b.cCS + b.cv;
exports.cCSV = cCSV;
var cxml = b.cxm + b.cl;
exports.cxml = cxml;
var cXml = b.cXm + b.cl;
exports.cXml = cXml;
var cXML = b.cXM + b.cL;
exports.cXML = cXML;
var cDotCSV = b.cDot + ccsv;
exports.cDotCSV = cDotCSV;
var cDotCom = b.cDot + cCom;
exports.cDotCom = cDotCom;
var cDotZip = b.cDot + cZip;
exports.cDotZip = cDotZip;
var cDotzip = b.cDot + czip;
exports.cDotzip = cDotzip;
var cDotTxt = b.cDot + cTxt;
exports.cDotTxt = cDotTxt;
var cDotXml = b.cDot + cXml;
exports.cDotXml = cDotXml;
var cDotxml = b.cDot + cxml; // Time Formatting

exports.cDotxml = cDotxml;
var cYYYY = b.cYY + b.cYY;
exports.cYYYY = cYYYY;
var cSSS = b.cSS + b.cS;
exports.cSSS = cSSS;
var cYYYYMMDD = cYYYY + b.cMM + b.cDD;
exports.cYYYYMMDD = cYYYYMMDD;
var cHHmmss = b.cHH + b.cmm + b.css;
exports.cHHmmss = cHHmmss;
var cHHmmss_SSS = cHHmmss + b.cDash + cSSS;
exports.cHHmmss_SSS = cHHmmss_SSS;
var cYYYYMMDD_HHmmss = cYYYYMMDD + b.cDash + cHHmmss;
exports.cYYYYMMDD_HHmmss = cYYYYMMDD_HHmmss;
var cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS;
exports.cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss_SSS;
var cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + b.cColon + b.cMM + b.cColon + b.cDD + b.cDash + b.cHH + b.cColon + b.cmm + b.cColon + b.css + b.cColon + cSSS; // String Numbers

exports.cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY_MM_DD_HH_mm_ss_SSS;
var cone = b.co + b.cne;
exports.cone = cone;
var ctwo = b.ct + b.cwo;
exports.ctwo = ctwo;
var cthree = b.ct + p.chree;
exports.cthree = cthree;
var cfour = b.cf + p.cour;
exports.cfour = cfour;
var cfive = b.cf + p.cive;
exports.cfive = cfive;
var csix = b.cs + b.cix;
exports.csix = csix;
var cseven = b.cs + p.ceven;
exports.cseven = cseven;
var ceight = b.ce + p.cight;
exports.ceight = ceight;
var cnine = b.cn + p.cine;
exports.cnine = cnine;
var cten = b.ct + b.cen;
exports.cten = cten;
var celeven = b.ce + p.cleven;
exports.celeven = celeven;
var ctwelve = b.ct + p.cwelve;
exports.ctwelve = ctwelve;
var cthirteen = b.ct + p.chir + p.cteen;
exports.cthirteen = cthirteen;
var cfourteen = cfour + p.cteen;
exports.cfourteen = cfourteen;
var cfifteen = b.cf + b.cif + p.cteen;
exports.cfifteen = cfifteen;
var csixteen = csix + p.cteen;
exports.csixteen = csixteen;
var cseventeen = cseven + p.cteen;
exports.cseventeen = cseventeen;
var ceighteen = b.ce + p.cigh + p.cteen;
exports.ceighteen = ceighteen;
var cnineteen = cnine + p.cteen;
exports.cnineteen = cnineteen;
var ctwenty = b.ct + p.cwenty;
exports.ctwenty = ctwenty;
var cthirty = b.ct + p.chirty;
exports.cthirty = cthirty;
var cfourty = cfour + b.cty;
exports.cfourty = cfourty;
var cfifty = b.cf + p.cifty;
exports.cfifty = cfifty;
var csixty = csix + b.cty;
exports.csixty = csixty;
var cseventy = cseven + b.cty;
exports.cseventy = cseventy;
var ceighty = ceight + b.cy;
exports.ceighty = ceighty;
var cninety = cnine + b.cty;
exports.cninety = cninety;
var chundred = b.ch + p.cundred;
exports.chundred = chundred;
var cthousand = b.ct + p.chousand;
exports.cthousand = cthousand;
var cmillion = b.cm + p.cillion;
exports.cmillion = cmillion;
var cbillion = b.cb + p.cillion;
exports.cbillion = cbillion;
var ctrillion = b.ctr + p.cillion;
exports.ctrillion = ctrillion;
var cOne = b.cO + b.cne;
exports.cOne = cOne;
var cTwo = b.cT + b.cwo;
exports.cTwo = cTwo;
var cThree = b.cT + p.chree;
exports.cThree = cThree;
var cFour = b.cF + p.cour;
exports.cFour = cFour;
var cFive = b.cF + p.cive;
exports.cFive = cFive;
var cSix = b.cS + b.cix;
exports.cSix = cSix;
var cSeven = b.cS + p.ceven;
exports.cSeven = cSeven;
var cEight = b.cE + p.cight;
exports.cEight = cEight;
var cNine = b.cN + p.cine;
exports.cNine = cNine;
var cTen = b.cT + b.cen;
exports.cTen = cTen;
var cEleven = b.cE + p.cleven;
exports.cEleven = cEleven;
var cTwelve = b.cT + p.cwelve;
exports.cTwelve = cTwelve;
var cThirteen = b.cT + p.chir + p.cteen;
exports.cThirteen = cThirteen;
var cFourteen = cFour + p.cteen;
exports.cFourteen = cFourteen;
var cFifteen = b.cF + b.cif + p.cteen;
exports.cFifteen = cFifteen;
var cSixteen = cSix + p.cteen;
exports.cSixteen = cSixteen;
var cSeventeen = cSeven + p.cteen;
exports.cSeventeen = cSeventeen;
var cEighteen = b.cE + p.cigh + p.cteen;
exports.cEighteen = cEighteen;
var cNineteen = cNine + p.cteen;
exports.cNineteen = cNineteen;
var cTwenty = b.cT + p.cwenty;
exports.cTwenty = cTwenty;
var cThirty = b.cT + p.chirty;
exports.cThirty = cThirty;
var cFourty = cFour + b.cty;
exports.cFourty = cFourty;
var cFifty = b.cF + p.cifty;
exports.cFifty = cFifty;
var cSixty = cSix + b.cty;
exports.cSixty = cSixty;
var cSeventy = cSeven + b.cty;
exports.cSeventy = cSeventy;
var cEighty = cEight + b.cy;
exports.cEighty = cEighty;
var cNinety = cNine + b.cty;
exports.cNinety = cNinety;
var cHundred = b.cH + p.cundred;
exports.cHundred = cHundred;
var cThousand = b.cT + p.chousand;
exports.cThousand = cThousand;
var cMillion = b.cM + p.cillion;
exports.cMillion = cMillion;
var cBillion = b.cB + p.cillion;
exports.cBillion = cBillion;
var cTrillion = b.cTr + p.cillion; // String Number Values

exports.cTrillion = cTrillion;
var cfirst = b.cfi + b.crs + b.ct;
exports.cfirst = cfirst;
var cFirst = b.cFi + b.crs + b.ct; // Second - See below

exports.cFirst = cFirst;
var cthird = b.cth + b.cir + b.cd;
exports.cthird = cthird;
var cThird = b.cTh + b.cir + b.cd;
exports.cThird = cThird;
var cfourth = cfour + b.cth;
exports.cfourth = cfourth;
var cFourth = cFour + b.cth;
exports.cFourth = cFourth;
var cfifth = b.cfi + b.cft + b.ch;
exports.cfifth = cfifth;
var cFifth = b.cFi + b.cft + b.ch;
exports.cFifth = cFifth;
var csixth = csix + b.cth;
exports.csixth = csixth;
var cSixth = cSix + b.cth;
exports.cSixth = cSixth;
var cseventh = cseven + b.cth;
exports.cseventh = cseventh;
var cSeventh = cSeven + b.cth;
exports.cSeventh = cSeventh;
var ceighth = ceight + b.ch;
exports.ceighth = ceighth;
var cEighth = cEight + b.ch;
exports.cEighth = cEighth;
var ctenth = cten + b.cth;
exports.ctenth = ctenth;
var cTenth = cTen + b.cth;
exports.cTenth = cTenth;
var celeventh = celeven + b.cth;
exports.celeventh = celeventh;
var cEleventh = cEleven + b.cth;
exports.cEleventh = cEleventh;
var ctwelveth = ctwelve + b.cth;
exports.ctwelveth = ctwelveth;
var cTwelveth = cTwelve + b.cth;
exports.cTwelveth = cTwelveth;
var cthirteenth = cthirteen + b.cth;
exports.cthirteenth = cthirteenth;
var cThirteenth = cThirteen + b.cth;
exports.cThirteenth = cThirteenth;
var cfourteenth = cfourteen + b.cth;
exports.cfourteenth = cfourteenth;
var cFourteenth = cFourteen + b.cth;
exports.cFourteenth = cFourteenth;
var cfifteenth = cFifteen + b.cth;
exports.cfifteenth = cfifteenth;
var cFifteenth = cFifteen + b.cth;
exports.cFifteenth = cFifteenth;
var csixteenth = csixteen + b.cth;
exports.csixteenth = csixteenth;
var cSixteenth = cSixteen + b.cth;
exports.cSixteenth = cSixteenth;
var cseventeenth = cseventeen + b.cth;
exports.cseventeenth = cseventeenth;
var cSeventeenth = cSeventeen + b.cth;
exports.cSeventeenth = cSeventeenth;
var ceighteenth = ceighteen + b.cth;
exports.ceighteenth = ceighteenth;
var cEighteenth = cEighteen + b.cth;
exports.cEighteenth = cEighteenth;
var cnineteenth = cnineteen + b.cth;
exports.cnineteenth = cnineteenth;
var cNineteenth = cNineteen + b.cth;
exports.cNineteenth = cNineteenth;
var ctwentieth = b.ctw + b.cen + p.ctieth;
exports.ctwentieth = ctwentieth;
var cTwentieth = b.cTw + b.cen + p.ctieth;
exports.cTwentieth = cTwentieth;
var cthirtieth = b.cth + b.cir + p.ctieth;
exports.cthirtieth = cthirtieth;
var cThirtieth = b.cTh + b.cir + p.ctieth;
exports.cThirtieth = cThirtieth;
var cfourtieth = cfour + p.ctieth;
exports.cfourtieth = cfourtieth;
var cFourtieth = cFour + p.ctieth;
exports.cFourtieth = cFourtieth;
var cfiftieth = b.cfi + b.cf + p.ctieth;
exports.cfiftieth = cfiftieth;
var cFiftieth = b.cFi + b.cf + p.ctieth;
exports.cFiftieth = cFiftieth;
var csixtieth = csix + p.ctieth;
exports.csixtieth = csixtieth;
var cSixtieth = cSix + p.ctieth;
exports.cSixtieth = cSixtieth;
var cseventieth = cseven + p.ctieth;
exports.cseventieth = cseventieth;
var cSeventieth = cSeven + p.ctieth;
exports.cSeventieth = cSeventieth;
var ceightieth = ceight + p.ctieth;
exports.ceightieth = ceightieth;
var cEightieth = cEight + p.ctieth;
exports.cEightieth = cEightieth;
var cninetieth = cnine + p.ctieth;
exports.cninetieth = cninetieth;
var cNinetieth = cNine + p.ctieth;
exports.cNinetieth = cNinetieth;
var chundredth = chundred + b.cth;
exports.chundredth = chundredth;
var cHundredth = cHundred + b.cth;
exports.cHundredth = cHundredth;
var cthousandth = cthousand + b.cth;
exports.cthousandth = cthousandth;
var cThousandth = cThousand + b.cth;
exports.cThousandth = cThousandth;
var cmillionth = cmillion + b.cth;
exports.cmillionth = cmillionth;
var cMillionth = cMillion + b.cth;
exports.cMillionth = cMillionth;
var cbillionth = cbillion + b.cth;
exports.cbillionth = cbillionth;
var cBillionth = cBillion + b.cth;
exports.cBillionth = cBillionth;
var ctrillionth = ctrillion + b.cth;
exports.ctrillionth = ctrillionth;
var cTrillionth = cTrillion + b.cth; // Units of Measure

exports.cTrillionth = cTrillionth;
var cPico = b.cPi + b.cco; // 'Pico';

exports.cPico = cPico;
var cNano = b.cNa + b.cno; // 'Nano';

exports.cNano = cNano;
var cMicro = b.cMi + b.ccr + b.co; // 'Micro';

exports.cMicro = cMicro;
var cMill = b.cMi + b.cll; // 'Mill';

exports.cMill = cMill;
var cMilli = cMill + b.ci; // Units of Time

exports.cMilli = cMilli;
var csecond = b.cse + p.ccond;
exports.csecond = csecond;
var cSecond = b.cSe + p.ccond;
exports.cSecond = cSecond;
var cSeconds = cSecond + b.cs;
exports.cSeconds = cSeconds;
var cMinute = b.cMi + b.cnu + b.cte; // 'Minute';

exports.cMinute = cMinute;
var cMinutes = cMinute + b.cs;
exports.cMinutes = cMinutes;
var cHour = b.cHo + b.cur; // 'Hour';

exports.cHour = cHour;
var cHours = cHour + b.cs;
exports.cHours = cHours;
var cDay = b.cDa + b.cy; // 'Day';

exports.cDay = cDay;
var cDays = cDay + b.cs;
exports.cDays = cDays;
var cWeek = b.cW + b.cee + b.ck; // 'Week';

exports.cWeek = cWeek;
var cWeeks = cWeek + b.cs;
exports.cWeeks = cWeeks;
var cMonth = b.cMo + b.cn + b.cth; // 'Month';

exports.cMonth = cMonth;
var cMonths = cMonth + b.cs;
exports.cMonths = cMonths;
var cYear = b.cYe + b.car; // 'Year';

exports.cYear = cYear;
var cYears = cYear + b.cs;
exports.cYears = cYears;
var cDecade = b.cDe + b.cca + b.cde;
exports.cDecade = cDecade;
var cDecades = cDecade + b.cs;
exports.cDecades = cDecades;
var ccent = b.cc + p.cent;
exports.ccent = ccent;
var cCent = b.cC + p.cent;
exports.cCent = cCent;
var cCentur = cCent + b.cur; // b.cC + b.cen + b.ctu + b.cr; // 'Centur';

exports.cCentur = cCentur;
var cCentury = cCentur + b.cy;
exports.cCentury = cCentury;
var cCenturies = cCentur + p.cies;
exports.cCenturies = cCenturies;
var cMillennium = cMill + b.cen + b.cni + b.cum; // 'ennium'; // Millennium Falcon ;-)

exports.cMillennium = cMillennium;
var cMillenniums = cMillennium + b.cs;
exports.cMillenniums = cMillenniums;
var cNanoSecond = cNano + cSecond;
exports.cNanoSecond = cNanoSecond;
var cNanoSeconds = cNano + cSeconds;
exports.cNanoSeconds = cNanoSeconds;
var cMicroSecond = cMicro + cSecond;
exports.cMicroSecond = cMicroSecond;
var cMicroSeconds = cMicro + cSeconds;
exports.cMicroSeconds = cMicroSeconds;
var cMilliSecond = cMilli + cSecond;
exports.cMilliSecond = cMilliSecond;
var cMilliSeconds = cMilli + cSeconds;
exports.cMilliSeconds = cMilliSeconds;
var cPicoSecond = cPico + cSecond;
exports.cPicoSecond = cPicoSecond;
var cPicoSeconds = cPico + cSeconds; // Naval & Military Codes

exports.cPicoSeconds = cPicoSeconds;
var cAlfa = b.cAl + b.cfa; //  'Alfa';

exports.cAlfa = cAlfa;
var cBravo = b.cBr + b.cav + b.co; // 'Bravo';

exports.cBravo = cBravo;
var cCharlie = b.cCh + b.car + b.cli + b.ce; // 'Charlie';

exports.cCharlie = cCharlie;
var cDelta = b.cDe + b.clt + b.ca;
exports.cDelta = cDelta;
var cEcho = b.cEc + b.cho; // 'Echo';

exports.cEcho = cEcho;
var cFoxtrot = b.cFo + b.cxt + b.cro + b.ct; // 'Foxtrot';

exports.cFoxtrot = cFoxtrot;
var cGolf = b.cGo + b.clf; // 'Golf';

exports.cGolf = cGolf;
var cHotel = b.cHo + b.cte + b.cl; // 'Hotel';

exports.cHotel = cHotel;
var cIndia = b.cIn + b.cdi + b.ca; // 'India';

exports.cIndia = cIndia;
var cJuliett = b.cJu + b.cli + b.cet + b.ct; // 'Juliett';

exports.cJuliett = cJuliett;
var cKilo = b.cKi + b.clo; // 'Kilo';

exports.cKilo = cKilo;
var cLima = b.cLi + b.cma; // 'Lima';

exports.cLima = cLima;
var cMike = b.cMi + b.cke; // 'Mike';

exports.cMike = cMike;
var cNovember = b.cNo + b.cv + p.cemb + b.cer; // 'Nov' + cemb + cer;

exports.cNovember = cNovember;
var cOscar = b.cOs + b.cca + b.cr; // 'Oscar';

exports.cOscar = cOscar;
var cPapa = b.cPa + b.cpa; // 'Papa';

exports.cPapa = cPapa;
var cQuebec = b.cQu + b.ceb + b.cec; // 'Quebec';

exports.cQuebec = cQuebec;
var cRomeo = b.cRo + b.cme + b.co; // 'Romeo';

exports.cRomeo = cRomeo;
var cSierra = b.cSi + b.cer + b.cra;
exports.cSierra = cSierra;
var cTango = b.cTa + b.cng + b.co; // 'Tango';

exports.cTango = cTango;
var cUniform = b.cUn + b.cif + b.cor + b.cm; // 'Uniform';

exports.cUniform = cUniform;
var cVictor = b.cVi + p.cctor; // 'Victor';

exports.cVictor = cVictor;
var cWhiskey = b.cWh + b.cis + b.cke + b.cy; // 'Whiskey';

exports.cWhiskey = cWhiskey;
var cXray = b.cXr + b.cay; // 'Xray';

exports.cXray = cXray;
var cYankee = b.cYa + b.cnk + b.cee; // 'Yankee';

exports.cYankee = cYankee;
var cZulu = b.cZu + b.clu; // 'Zulu';

exports.cZulu = cZulu;
var cAlpha = b.cAl + b.cph + b.ca; // 'Alpha';

exports.cAlpha = cAlpha;
var cBeta = b.cBe + b.cta; // 'Beta';

exports.cBeta = cBeta;
var cGamma = b.cGa + b.cmm + b.ca; // 'Gamma';

exports.cGamma = cGamma;
var cEpsilon = b.cEp + b.csi + b.clo + b.cn; // 'Epsilon';

exports.cEpsilon = cEpsilon;
var cDigamma = b.cDi + b.cga + b.cmm + b.ca; // 'Digamma';

exports.cDigamma = cDigamma;
var cZeta = b.cZe + b.cta; // 'Zeta';

exports.cZeta = cZeta;
var ceta = b.cet + b.ca;
exports.ceta = ceta;
var cEta = b.cEt + b.ca; // 'Eta';

exports.cEta = cEta;
var cTheta = b.cTh + b.cet + b.ca; // 'Theta';

exports.cTheta = cTheta;
var cIota = b.cIo + b.cta; // 'Iota';

exports.cIota = cIota;
var cKappa = b.cKa + b.cpp + b.ca; // 'Kappa';

exports.cKappa = cKappa;
var cLambda = b.cLa + b.cmb + b.cda; // 'Lambda';

exports.cLambda = cLambda;
var cMu = b.cMu;
exports.cMu = cMu;
var cNu = b.cNu;
exports.cNu = cNu;
var cXi = b.cXi;
exports.cXi = cXi;
var cOmicron = b.cOm + b.cic + b.cro + b.cn; // 'Omicron';

exports.cOmicron = cOmicron;
var cPi = b.cPi;
exports.cPi = cPi;
var cSan = b.cSa + b.cn; // 'San';

exports.cSan = cSan;
var cKoppa = b.cKo + b.cpp + b.ca; // 'Koppa';

exports.cKoppa = cKoppa;
var cRho = b.cRh + b.co; // 'Rho';

exports.cRho = cRho;
var cSigma = b.cSi + b.cgm + b.ca; // 'Sigma';

exports.cSigma = cSigma;
var cTau = b.cTa + b.cu; // 'Tau';

exports.cTau = cTau;
var cUpsilon = b.cUp + b.csi + b.clo + b.cn; // 'Upsilon';

exports.cUpsilon = cUpsilon;
var cPhi = b.cPh + b.ci; // 'Phi';

exports.cPhi = cPhi;
var cChi = b.cCh + b.ci; // 'Chi';

exports.cChi = cChi;
var cPsi = b.cPs + b.ci; // 'Psi';

exports.cPsi = cPsi;
var cOmega = b.cOm + b.ceg + b.ca; // 'Omega';
// Months Of The Year

exports.cOmega = cOmega;
var cJanuary = b.cJa + b.cn + p.cuary; // 'January';

exports.cJanuary = cJanuary;
var cFebuary = b.cFe + b.cb + p.cuary; // 'Febuary';

exports.cFebuary = cFebuary;
var cMarch = b.cMa + b.crc + b.ch; // 'March';

exports.cMarch = cMarch;
var cApril = b.cAp + b.cri + b.cl; // 'April';

exports.cApril = cApril;
var cMay = b.cMa + b.cy; // 'May';

exports.cMay = cMay;
var cJune = b.cJu + b.cne; // 'June';

exports.cJune = cJune;
var cJuly = b.cJu + b.cly; // 'July';

exports.cJuly = cJuly;
var cAugust = b.cAu + b.cgu + b.cst; // 'August';

exports.cAugust = cAugust;
var cSeptember = b.cSe + b.cpt + p.cemb + b.cer; // 'Sept' + cemb + cer;

exports.cSeptember = cSeptember;
var cOctober = b.cOc + b.cto + b.cb + b.cer; // 'Octob' + cer;

exports.cOctober = cOctober;
var cDecember = b.cDe + b.cc + b.cemb + b.cer; // Miscelanious

exports.cDecember = cDecember;
var cress = b.cre + b.css;
exports.cress = cress;