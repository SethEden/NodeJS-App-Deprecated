"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cBeta = exports.cAlpha = exports.cZulu = exports.cYankee = exports.cXray = exports.cWhiskey = exports.cVictor = exports.cUniform = exports.cTango = exports.cSierra = exports.cRomeo = exports.cQuebec = exports.cPapa = exports.cOscar = exports.cNovember = exports.cMike = exports.cLima = exports.cKilo = exports.cJuliett = exports.cIndia = exports.cHotel = exports.cGolf = exports.cFoxtrot = exports.cEcho = exports.cDelta = exports.cCharlie = exports.cBravo = exports.cAlfa = exports.cYYYY_MM_DD_HH_mm_ss_SSS = exports.cYYYYMMDD_HHmmss_SSS = exports.cYYYYMMDD_HHmmss = exports.cHHmmss_SSS = exports.cHHmmss = exports.cYYYYMMDD = exports.cSSS = exports.cYYYY = exports.cDotxml = exports.cDotXml = exports.cDotTxt = exports.cDotzip = exports.cDotZip = exports.cDotCom = exports.cDotCSV = exports.cXML = exports.cXml = exports.cxml = exports.cCSV = exports.cCsv = exports.ccsv = exports.cTXT = exports.cTxt = exports.ctxt = exports.cZIP = exports.cZip = exports.czip = exports.cCOM = exports.cCom = exports.ccom = exports.cDOC = exports.cDoc = exports.cdoc = exports.cAllNumbers = exports.cUpperCaseEnglishAlphabet = exports.cLowerCaseEnglishAlphabet = exports.cRight = exports.cLeft = exports.cDown = exports.cFail = exports.cWarning = exports.cPass = exports.cNoteql = exports.cNotEql = exports.cnoteql = exports.cnotEql = exports.cNOTOK = exports.cNOTOk = exports.cNOTok = exports.cNotOK = exports.cNotOk = exports.cNotok = exports.cnotOK = exports.cnotOk = exports.cnotok = exports.cNOT = exports.cYES = exports.cNot = exports.cYes = exports.cnot = exports.cyes = exports.cOFF = exports.coff = exports.cOff = exports.cFALSE = exports.cTRUE = exports.cfalse = exports.ctrue = exports.cFalse = exports.cTrue = exports.cDotDotForwardSlash = exports.cDotDot = void 0;
exports.cress = exports.cDecember = exports.cOctober = exports.cSeptember = exports.cAugust = exports.cJuly = exports.cJune = exports.cMay = exports.cApril = exports.cMarch = exports.cFebuary = exports.cJanuary = exports.cOmega = exports.cPsi = exports.cChi = exports.cPhi = exports.cUpsilon = exports.cTau = exports.cSigma = exports.cRho = exports.cKoppa = exports.cSan = exports.cPi = exports.cOmicron = exports.cXi = exports.cNu = exports.cMu = exports.cLambda = exports.cKappa = exports.cIota = exports.cTheta = exports.cEta = exports.ceta = exports.cZeta = exports.cDigamma = exports.cEpsilon = exports.cGamma = void 0;

var b = _interopRequireWildcard(require("../constants/basic.constants"));

var p = _interopRequireWildcard(require("../constants/phonics.constants"));

var n = _interopRequireWildcard(require("../constants/numeric.constants"));

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
 * @requires module:numeric-constants
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
var cAllNumbers = n.c0 + n.c1 + n.c2 + n.c3 + n.c4 + n.c5 + n.c6 + n.c7 + n.c8 + n.c9; // File Extensions

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
var cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + b.cColon + b.cMM + b.cColon + b.cDD + b.cDash + b.cHH + b.cColon + b.cmm + b.cColon + b.css + b.cColon + cSSS; // Naval & Military Codes

exports.cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY_MM_DD_HH_mm_ss_SSS;
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