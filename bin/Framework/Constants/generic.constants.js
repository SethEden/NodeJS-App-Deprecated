"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cLima = exports.cKilo = exports.cJuliett = exports.cIndia = exports.cHotel = exports.cGolf = exports.cFoxtrot = exports.cEcho = exports.cDelta = exports.cCharlie = exports.cBravo = exports.cAlfa = exports.cYYYY_MM_DD_HH_mm_ss_SSS = exports.cYYYYMMDD_HHmmss_SSS = exports.cYYYYMMDD_HHmmss = exports.cHHmmss_SSS = exports.cHHmmss = exports.cYYYYMMDD = exports.cSSS = exports.cYYYY = exports.cascii = exports.cDotJSON = exports.cDotJson = exports.cDotjson = exports.cDotXML = exports.cDotXml = exports.cDotxml = exports.cDotTXT = exports.cDotTxt = exports.cDottxt = exports.cDotZIP = exports.cDotZip = exports.cDotzip = exports.cDotCom = exports.cDotCSV = exports.cDotCsv = exports.cDotcsv = exports.cENV = exports.cEnv = exports.cenv = exports.cJSON = exports.cJson = exports.cjson = exports.cXML = exports.cXml = exports.cxml = exports.cCSV = exports.cCsv = exports.ccsv = exports.cTXT = exports.cTxt = exports.ctxt = exports.cZIP = exports.cZip = exports.czip = exports.cCOM = exports.cCom = exports.ccom = exports.cDOC = exports.cDoc = exports.cdoc = exports.cAllNumbers = exports.cUpperCaseEnglishAlphabet = exports.cLowerCaseEnglishAlphabet = exports.cRight = exports.cLeft = exports.cDown = exports.cFail = exports.cWarning = exports.cPass = exports.cNoteql = exports.cNotEql = exports.cnoteql = exports.cnotEql = exports.cNOTOK = exports.cNOTOk = exports.cNOTok = exports.cNotOK = exports.cNotOk = exports.cNotok = exports.cnotOK = exports.cnotOk = exports.cnotok = exports.cNOT = exports.cYES = exports.cNot = exports.cYes = exports.cnot = exports.cyes = exports.cOFF = exports.coff = exports.cOff = exports.cFALSE = exports.cTRUE = exports.cfalse = exports.ctrue = exports.cFalse = exports.cTrue = exports.cDotDotForwardSlash = exports.cDotDot = void 0;
exports.cConst = exports.cconst = exports.cDecember = exports.cOctober = exports.cSeptember = exports.cAugust = exports.cJuly = exports.cJune = exports.cMay = exports.cApril = exports.cMarch = exports.cFebuary = exports.cJanuary = exports.cOmega = exports.cPsi = exports.cChi = exports.cPhi = exports.cUpsilon = exports.cTau = exports.cSigma = exports.cRho = exports.cKoppa = exports.cSan = exports.cPi = exports.cOmicron = exports.cXi = exports.cNu = exports.cMu = exports.cLambda = exports.cKappa = exports.cIota = exports.cTheta = exports.cEta = exports.ceta = exports.cZeta = exports.cDigamma = exports.cEpsilon = exports.cGamma = exports.cBeta = exports.cAlpha = exports.cZulu = exports.cYankee = exports.cXray = exports.cWhiskey = exports.cVictor = exports.cUniform = exports.cTango = exports.cSierra = exports.cRomeo = exports.cQuebec = exports.cPapa = exports.cOscar = exports.cNovember = exports.cMike = void 0;

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
var cDotDot = b.cDot + b.cDot; // ..

exports.cDotDot = cDotDot;
var cDotDotForwardSlash = cDotDot + b.cForwardSlash; // ../
// Boolean strings

exports.cDotDotForwardSlash = cDotDotForwardSlash;
var cTrue = b.cT + p.crue; // True

exports.cTrue = cTrue;
var cFalse = b.cF + p.calse; // False

exports.cFalse = cFalse;
var ctrue = b.ct + p.crue; // true

exports.ctrue = ctrue;
var cfalse = b.cf + p.calse; // false

exports.cfalse = cfalse;
var cTRUE = b.cTR + b.cUE; // TRUE

exports.cTRUE = cTRUE;
var cFALSE = b.cFA + b.cLS + b.cE; // FALSE

exports.cFALSE = cFALSE;
var cOff = b.cO + b.cff; // Off

exports.cOff = cOff;
var coff = b.co + b.cff; // off

exports.coff = coff;
var cOFF = b.cOF + b.cF; // OFF

exports.cOFF = cOFF;
var cyes = b.cy + b.ces; // yes

exports.cyes = cyes;
var cnot = b.cno + b.ct; // not

exports.cnot = cnot;
var cYes = b.cY + b.ces; // Yes

exports.cYes = cYes;
var cNot = b.cNo + b.ct; // Not

exports.cNot = cNot;
var cYES = b.cYE + b.cS; // YES

exports.cYES = cYES;
var cNOT = 'NOT'; // b.c_NO + b.cT; // NOTE cNOT is some how a reserved word that is a variable.

exports.cNOT = cNOT;
var cnotok = cnot + b.cok; // notok

exports.cnotok = cnotok;
var cnotOk = cnot + b.cOk; // notOk

exports.cnotOk = cnotOk;
var cnotOK = cnot + b.cOK; // notOK

exports.cnotOK = cnotOK;
var cNotok = cNot + b.cok; // Notok

exports.cNotok = cNotok;
var cNotOk = cNot + b.cOk; // NotOk

exports.cNotOk = cNotOk;
var cNotOK = cNot + b.cOK; // NotOK

exports.cNotOK = cNotOK;
var cNOTok = 'NOTok'; // c_NOT = b.cok;

exports.cNOTok = cNOTok;
var cNOTOk = 'NOTOk'; // c_NOT = b.cOk;

exports.cNOTOk = cNOTOk;
var cNOTOK = 'NOTOK'; // c_NOT + b.cOK;

exports.cNOTOK = cNOTOK;
var cnotEql = cnot + p.cEql; // notEql

exports.cnotEql = cnotEql;
var cnoteql = cnot + p.ceql; // noteql

exports.cnoteql = cnoteql;
var cNotEql = cNot + p.cEql; // NotEql

exports.cNotEql = cNotEql;
var cNoteql = cNot + p.ceql; // Noteql
// Test Status

exports.cNoteql = cNoteql;
var cPass = b.cPa + b.css; // Pass

exports.cPass = cPass;
var cWarning = b.cWa + b.crn + b.cin + b.cg; // Warning

exports.cWarning = cWarning;
var cFail = b.cFa + b.cil; // Fail
// Directions

exports.cFail = cFail;
var cDown = b.cDo + b.cwn; // Down

exports.cDown = cDown;
var cLeft = b.cLe + b.cft; // Left

exports.cLeft = cLeft;
var cRight = b.cRi + b.cgh + b.ct; // Right
// Alphabets

exports.cRight = cRight;
var cLowerCaseEnglishAlphabet = b.cab + b.ccd + b.cef + b.cgh + b.cij + b.ckl + b.cmn + b.cop + b.cqr + b.cst + b.cuv + b.cwx + b.cyz; // abcdefghijklmnopqrstuvwxyz

exports.cLowerCaseEnglishAlphabet = cLowerCaseEnglishAlphabet;
var cUpperCaseEnglishAlphabet = b.cAB + b.cCD + b.cEF + b.cGH + b.cIJ + b.cKL + b.cMN + b.cOP + b.cQR + b.cST + b.cUV + b.cWX + b.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ

exports.cUpperCaseEnglishAlphabet = cUpperCaseEnglishAlphabet;
var cAllNumbers = n.c0 + n.c1 + n.c2 + n.c3 + n.c4 + n.c5 + n.c6 + n.c7 + n.c8 + n.c9; // 0123456789
// File Extensions

exports.cAllNumbers = cAllNumbers;
var cdoc = b.cdo + b.cc; // doc

exports.cdoc = cdoc;
var cDoc = b.cDo + b.cc; // Doc

exports.cDoc = cDoc;
var cDOC = b.cDO + b.cC; // DOC

exports.cDOC = cDOC;
var ccom = b.cco + b.cm; // com

exports.ccom = ccom;
var cCom = b.cCo + b.cm; // Com

exports.cCom = cCom;
var cCOM = b.cCO + b.cM; // COM

exports.cCOM = cCOM;
var czip = b.cz + b.cip; // zip

exports.czip = czip;
var cZip = b.cZ + b.cip; // Zip

exports.cZip = cZip;
var cZIP = b.cZ + b.cIP; // ZIP

exports.cZIP = cZIP;
var ctxt = b.ct + b.cxt; // txt

exports.ctxt = ctxt;
var cTxt = b.cT + b.cxt; // Txt

exports.cTxt = cTxt;
var cTXT = b.cT + b.cXT; // TXT

exports.cTXT = cTXT;
var ccsv = b.ccs + b.cv; // csv

exports.ccsv = ccsv;
var cCsv = b.cCs + b.cv; // Csv

exports.cCsv = cCsv;
var cCSV = b.cCS + b.cV; // CSV

exports.cCSV = cCSV;
var cxml = b.cxm + b.cl; // xml

exports.cxml = cxml;
var cXml = b.cXm + b.cl; // Xml

exports.cXml = cXml;
var cXML = b.cXM + b.cL; // XML

exports.cXML = cXML;
var cjson = b.cjs + b.con; // json

exports.cjson = cjson;
var cJson = b.cJs + b.con; // Json

exports.cJson = cJson;
var cJSON = b.cJS + b.cON; // JSON

exports.cJSON = cJSON;
var cenv = b.cen + b.cv; // env

exports.cenv = cenv;
var cEnv = b.cEn + b.cv; // Env

exports.cEnv = cEnv;
var cENV = b.cEN + b.cV; // ENV

exports.cENV = cENV;
var cDotcsv = b.cDot + ccsv; // .csv

exports.cDotcsv = cDotcsv;
var cDotCsv = b.cDot + cCsv; // .Csv

exports.cDotCsv = cDotCsv;
var cDotCSV = b.cDot + cCSV; // .CSV

exports.cDotCSV = cDotCSV;
var cDotCom = b.cDot + cCom; // .Com

exports.cDotCom = cDotCom;
var cDotzip = b.cDot + czip; // .zip

exports.cDotzip = cDotzip;
var cDotZip = b.cDot + cZip; // .Zip

exports.cDotZip = cDotZip;
var cDotZIP = b.cDot + cZIP; // .ZIP

exports.cDotZIP = cDotZIP;
var cDottxt = b.cDot + ctxt; // .txt

exports.cDottxt = cDottxt;
var cDotTxt = b.cDot + cTxt; // .Txt

exports.cDotTxt = cDotTxt;
var cDotTXT = b.cDot + cTXT; // .TXT

exports.cDotTXT = cDotTXT;
var cDotxml = b.cDot + cxml; // .xml

exports.cDotxml = cDotxml;
var cDotXml = b.cDot + cXml; // .Xml

exports.cDotXml = cDotXml;
var cDotXML = b.cDot + cXML; // .XML

exports.cDotXML = cDotXML;
var cDotjson = b.cDot + cjson; // .json

exports.cDotjson = cDotjson;
var cDotJson = b.cDot + cJson; // .Json

exports.cDotJson = cDotJson;
var cDotJSON = b.cDot + cJSON; // .JSON

exports.cDotJSON = cDotJSON;
var cascii = b.cas + b.cci + b.ci; // ascii
// Time Formatting

exports.cascii = cascii;
var cYYYY = b.cYY + b.cYY; // YYYY

exports.cYYYY = cYYYY;
var cSSS = b.cSS + b.cS; // SSS

exports.cSSS = cSSS;
var cYYYYMMDD = cYYYY + b.cMM + b.cDD; // YYYYMMDD

exports.cYYYYMMDD = cYYYYMMDD;
var cHHmmss = b.cHH + b.cmm + b.css; // HHmmss

exports.cHHmmss = cHHmmss;
var cHHmmss_SSS = cHHmmss + b.cDash + cSSS; // HHmmss_SSS

exports.cHHmmss_SSS = cHHmmss_SSS;
var cYYYYMMDD_HHmmss = cYYYYMMDD + b.cDash + cHHmmss; // YYYYMMDD_HHmmss

exports.cYYYYMMDD_HHmmss = cYYYYMMDD_HHmmss;
var cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS; // YYYYMMDD_HHmmss_SSS

exports.cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss_SSS;
var cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + b.cColon + b.cMM + b.cColon + b.cDD + b.cDash + b.cHH + b.cColon + b.cmm + b.cColon + b.css + b.cColon + cSSS; // YYYY_MM_DD_HH_mm_ss_SSS
// Naval & Military Codes

exports.cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY_MM_DD_HH_mm_ss_SSS;
var cAlfa = b.cAl + b.cfa; //  Alfa

exports.cAlfa = cAlfa;
var cBravo = b.cBr + b.cav + b.co; // Bravo

exports.cBravo = cBravo;
var cCharlie = b.cCh + b.car + b.cli + b.ce; // Charlie

exports.cCharlie = cCharlie;
var cDelta = b.cDe + b.clt + b.ca; // Delta

exports.cDelta = cDelta;
var cEcho = b.cEc + b.cho; // Echo

exports.cEcho = cEcho;
var cFoxtrot = b.cFo + b.cxt + b.cro + b.ct; // Foxtrot

exports.cFoxtrot = cFoxtrot;
var cGolf = b.cGo + b.clf; // Golf

exports.cGolf = cGolf;
var cHotel = b.cHo + b.cte + b.cl; // Hotel

exports.cHotel = cHotel;
var cIndia = b.cIn + b.cdi + b.ca; // India

exports.cIndia = cIndia;
var cJuliett = b.cJu + b.cli + b.cet + b.ct; // Juliett

exports.cJuliett = cJuliett;
var cKilo = b.cKi + b.clo; // Kilo

exports.cKilo = cKilo;
var cLima = b.cLi + b.cma; // Lima

exports.cLima = cLima;
var cMike = b.cMi + b.cke; // Mike

exports.cMike = cMike;
var cNovember = b.cNo + b.cv + p.cemb + b.cer; // November

exports.cNovember = cNovember;
var cOscar = b.cOs + b.cca + b.cr; // Oscar

exports.cOscar = cOscar;
var cPapa = b.cPa + b.cpa; // Papa

exports.cPapa = cPapa;
var cQuebec = b.cQu + b.ceb + b.cec; // Quebec

exports.cQuebec = cQuebec;
var cRomeo = b.cRo + b.cme + b.co; // Romeo

exports.cRomeo = cRomeo;
var cSierra = b.cSi + b.cer + b.cra; // Sierra

exports.cSierra = cSierra;
var cTango = b.cTa + b.cng + b.co; // Tango

exports.cTango = cTango;
var cUniform = b.cUn + b.cif + b.cor + b.cm; // Uniform

exports.cUniform = cUniform;
var cVictor = b.cVi + p.cctor; // Victor

exports.cVictor = cVictor;
var cWhiskey = b.cWh + b.cis + b.cke + b.cy; // Whiskey

exports.cWhiskey = cWhiskey;
var cXray = b.cXr + b.cay; // Xray

exports.cXray = cXray;
var cYankee = b.cYa + b.cnk + b.cee; // Yankee

exports.cYankee = cYankee;
var cZulu = b.cZu + b.clu; // Zulu

exports.cZulu = cZulu;
var cAlpha = b.cAl + b.cph + b.ca; // Alpha

exports.cAlpha = cAlpha;
var cBeta = b.cBe + b.cta; // Beta

exports.cBeta = cBeta;
var cGamma = b.cGa + b.cmm + b.ca; // Gamma

exports.cGamma = cGamma;
var cEpsilon = b.cEp + b.csi + b.clo + b.cn; // Epsilon

exports.cEpsilon = cEpsilon;
var cDigamma = b.cDi + b.cga + b.cmm + b.ca; // Digamma

exports.cDigamma = cDigamma;
var cZeta = b.cZe + b.cta; // Zeta

exports.cZeta = cZeta;
var ceta = b.cet + b.ca; // eta

exports.ceta = ceta;
var cEta = b.cEt + b.ca; // Eta

exports.cEta = cEta;
var cTheta = b.cTh + b.cet + b.ca; // Theta

exports.cTheta = cTheta;
var cIota = b.cIo + b.cta; // Iota

exports.cIota = cIota;
var cKappa = b.cKa + b.cpp + b.ca; // Kappa

exports.cKappa = cKappa;
var cLambda = b.cLa + b.cmb + b.cda; // Lambda

exports.cLambda = cLambda;
var cMu = b.cMu; // Mu

exports.cMu = cMu;
var cNu = b.cNu; // Nu

exports.cNu = cNu;
var cXi = b.cXi; // Xi

exports.cXi = cXi;
var cOmicron = b.cOm + b.cic + b.cro + b.cn; // Omicron

exports.cOmicron = cOmicron;
var cPi = b.cPi; // Pi

exports.cPi = cPi;
var cSan = b.cSa + b.cn; // San

exports.cSan = cSan;
var cKoppa = b.cKo + b.cpp + b.ca; // Koppa

exports.cKoppa = cKoppa;
var cRho = b.cRh + b.co; // Rho

exports.cRho = cRho;
var cSigma = b.cSi + b.cgm + b.ca; // Sigma

exports.cSigma = cSigma;
var cTau = b.cTa + b.cu; // Tau

exports.cTau = cTau;
var cUpsilon = b.cUp + b.csi + b.clo + b.cn; // Upsilon

exports.cUpsilon = cUpsilon;
var cPhi = b.cPh + b.ci; // Phi

exports.cPhi = cPhi;
var cChi = b.cCh + b.ci; // Chi

exports.cChi = cChi;
var cPsi = b.cPs + b.ci; // Psi

exports.cPsi = cPsi;
var cOmega = b.cOm + b.ceg + b.ca; // Omega
// Months Of The Year

exports.cOmega = cOmega;
var cJanuary = b.cJa + b.cn + p.cuary; // January

exports.cJanuary = cJanuary;
var cFebuary = b.cFe + b.cb + p.cuary; // Febuary

exports.cFebuary = cFebuary;
var cMarch = b.cMa + b.crc + b.ch; // March

exports.cMarch = cMarch;
var cApril = b.cAp + b.cri + b.cl; // April

exports.cApril = cApril;
var cMay = b.cMa + b.cy; // May

exports.cMay = cMay;
var cJune = b.cJu + b.cne; // June

exports.cJune = cJune;
var cJuly = b.cJu + b.cly; // July

exports.cJuly = cJuly;
var cAugust = b.cAu + b.cgu + b.cst; // August

exports.cAugust = cAugust;
var cSeptember = b.cSe + b.cpt + p.cemb + b.cer; // September

exports.cSeptember = cSeptember;
var cOctober = b.cOc + b.cto + b.cb + b.cer; // October
// cNovember = b.cNo + b.cv + b.cemb + b.cer; // November

exports.cOctober = cOctober;
var cDecember = b.cDe + b.cc + p.cemb + b.cer; // December
// Miscelanious

exports.cDecember = cDecember;
var cconst = p.ccon + b.cst;
exports.cconst = cconst;
var cConst = p.cCon + b.cst;
exports.cConst = cConst;