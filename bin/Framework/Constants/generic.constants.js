"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cascii = exports.cDotENV = exports.cDotEnv = exports.cDotenv = exports.cDotJSON = exports.cDotJson = exports.cDotjson = exports.cDotLOG = exports.cDotLog = exports.cDotlog = exports.cDotXML = exports.cDotXml = exports.cDotxml = exports.cDotTXT = exports.cDotTxt = exports.cDottxt = exports.cDotZIP = exports.cDotZip = exports.cDotzip = exports.cDotCom = exports.cDotCSV = exports.cDotCsv = exports.cDotcsv = exports.cDotEXE = exports.cDotExe = exports.cDotexe = exports.cENV = exports.cEnv = exports.cenv = exports.cJSON = exports.cJson = exports.cjson = exports.cLOG = exports.cLog = exports.clog = exports.cXML = exports.cXml = exports.cxml = exports.cCSV = exports.cCsv = exports.ccsv = exports.cTXT = exports.cTxt = exports.ctxt = exports.cZIP = exports.cZip = exports.czip = exports.cCOM = exports.cCom = exports.ccom = exports.cDOC = exports.cDoc = exports.cdoc = exports.cEXE = exports.cExe = exports.cexe = exports.cMostSpecialCharacters = exports.cAllNumbers = exports.cUpperCaseEnglishAlphabet = exports.cLowerCaseEnglishAlphabet = exports.cRight = exports.cLeft = exports.cDown = exports.cFail = exports.cWarning = exports.cPass = exports.cMin = exports.cmin = exports.cMax = exports.cmax = exports.cNoteql = exports.cNotEql = exports.cnoteql = exports.cnotEql = exports.cNOTOK = exports.cNOTOk = exports.cNOTok = exports.cNotOK = exports.cNotOk = exports.cNotok = exports.cnotOK = exports.cnotOk = exports.cnotok = exports.cNOT = exports.cYES = exports.cNot = exports.cYes = exports.cnot = exports.cyes = exports.cOFF = exports.coff = exports.cOff = exports.cFALSE = exports.cTRUE = exports.cfalse = exports.ctrue = exports.cFalse = exports.cTrue = exports.cDotDotForwardSlash = exports.cDotDot = void 0;
exports.cargs = exports.cArg = exports.carg = exports.cAPP = exports.cApp = exports.capp = exports.cASAP = exports.cConst = exports.cconst = exports.cUTF8 = exports.cwrd = exports.cunt = exports.csys = exports.cshp = exports.cphn = exports.cnum = exports.cmsg = exports.clng = exports.ckts = exports.ciso = exports.cgen = exports.celm = exports.cctr = exports.ccfg = exports.ccmd = exports.cclr = exports.cbiz = exports.cbas = exports.cDecember = exports.cOctober = exports.cSeptember = exports.cAugust = exports.cJuly = exports.cJune = exports.cMay = exports.cApril = exports.cMarch = exports.cFebuary = exports.cJanuary = exports.cOmega = exports.cPsi = exports.cChi = exports.cPhi = exports.cUpsilon = exports.cTau = exports.cSigma = exports.cRho = exports.cKoppa = exports.cSan = exports.cPi = exports.cOmicron = exports.cXi = exports.cNu = exports.cMu = exports.cLambda = exports.cKappa = exports.cIota = exports.cTheta = exports.cEta = exports.ceta = exports.cZeta = exports.cDigamma = exports.cEpsilon = exports.cGamma = exports.cBeta = exports.cAlpha = exports.cZulu = exports.cYankee = exports.cXray = exports.cWhiskey = exports.cVictor = exports.cUniform = exports.cTango = exports.cSierra = exports.cRomeo = exports.cQuebec = exports.cPapa = exports.cOscar = exports.cNovember = exports.cMike = exports.cLima = exports.cKilo = exports.cJuliett = exports.cIndia = exports.cHotel = exports.cGolf = exports.cFoxtrot = exports.cEcho = exports.cDelta = exports.cCharlie = exports.cBravo = exports.cAlfa = exports.cYYYY_MM_DD_HH_mm_ss_SSS = exports.cYYYYMMDD_HHmmss_SSS = exports.cYYYYMMDD_HHmmss = exports.cHHmmss_SSS = exports.cHHmmss = exports.cYYYYMMDD = exports.cSSS = exports.cYYYY = void 0;
exports.cBIN = exports.cBin = exports.cbin = exports.cRegExp = exports.cregExp = exports.cRegEx = exports.cregEx = exports.cHex = exports.chex = exports.cArgs = void 0;

var bas = _interopRequireWildcard(require("../constants/basic.constants"));

var phn = _interopRequireWildcard(require("../constants/phonic.constants"));

var num = _interopRequireWildcard(require("../constants/numeric.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many generic constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:numeric-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var cDotDot = bas.cDot + bas.cDot; // ..

exports.cDotDot = cDotDot;
var cDotDotForwardSlash = cDotDot + bas.cForwardSlash; // ../
// Boolean strings

exports.cDotDotForwardSlash = cDotDotForwardSlash;
var cTrue = bas.cT + phn.crue; // True

exports.cTrue = cTrue;
var cFalse = bas.cF + phn.calse; // False

exports.cFalse = cFalse;
var ctrue = bas.ct + phn.crue; // true

exports.ctrue = ctrue;
var cfalse = bas.cf + phn.calse; // false

exports.cfalse = cfalse;
var cTRUE = bas.cTR + bas.cUE; // TRUE

exports.cTRUE = cTRUE;
var cFALSE = bas.cFA + bas.cLS + bas.cE; // FALSE

exports.cFALSE = cFALSE;
var cOff = bas.cO + bas.cff; // Off

exports.cOff = cOff;
var coff = bas.co + bas.cff; // off

exports.coff = coff;
var cOFF = bas.cOF + bas.cF; // OFF

exports.cOFF = cOFF;
var cyes = bas.cy + bas.ces; // yes

exports.cyes = cyes;
var cnot = bas.cno + bas.ct; // not

exports.cnot = cnot;
var cYes = bas.cY + bas.ces; // Yes

exports.cYes = cYes;
var cNot = bas.cNo + bas.ct; // Not

exports.cNot = cNot;
var cYES = bas.cYE + bas.cS; // YES

exports.cYES = cYES;
var cNOT = 'NOT'; // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.

exports.cNOT = cNOT;
var cnotok = cnot + bas.cok; // notok

exports.cnotok = cnotok;
var cnotOk = cnot + bas.cOk; // notOk

exports.cnotOk = cnotOk;
var cnotOK = cnot + bas.cOK; // notOK

exports.cnotOK = cnotOK;
var cNotok = cNot + bas.cok; // Notok

exports.cNotok = cNotok;
var cNotOk = cNot + bas.cOk; // NotOk

exports.cNotOk = cNotOk;
var cNotOK = cNot + bas.cOK; // NotOK

exports.cNotOK = cNotOK;
var cNOTok = 'NOTok'; // c_NOT = bas.cok;

exports.cNOTok = cNOTok;
var cNOTOk = 'NOTOk'; // c_NOT = bas.cOk;

exports.cNOTOk = cNOTOk;
var cNOTOK = 'NOTOK'; // c_NOT + bas.cOK;

exports.cNOTOK = cNOTOK;
var cnotEql = cnot + phn.cEql; // notEql

exports.cnotEql = cnotEql;
var cnoteql = cnot + phn.ceql; // noteql

exports.cnoteql = cnoteql;
var cNotEql = cNot + phn.cEql; // NotEql

exports.cNotEql = cNotEql;
var cNoteql = cNot + phn.ceql; // Noteql

exports.cNoteql = cNoteql;
var cmax = phn.cmax; // max

exports.cmax = cmax;
var cMax = phn.cMax; // Max

exports.cMax = cMax;
var cmin = phn.cmin; // min

exports.cmin = cmin;
var cMin = phn.cMin; // Min
// Test Status

exports.cMin = cMin;
var cPass = bas.cPa + bas.css; // Pass

exports.cPass = cPass;
var cWarning = bas.cWa + bas.crn + bas.cin + bas.cg; // Warning

exports.cWarning = cWarning;
var cFail = bas.cFa + bas.cil; // Fail
// Directions

exports.cFail = cFail;
var cDown = bas.cDo + bas.cwn; // Down

exports.cDown = cDown;
var cLeft = bas.cLe + bas.cft; // Left

exports.cLeft = cLeft;
var cRight = bas.cRi + bas.cgh + bas.ct; // Right
// Alphabets

exports.cRight = cRight;
var cLowerCaseEnglishAlphabet = bas.cab + bas.ccd + bas.cef + bas.cgh + bas.cij + bas.ckl + bas.cmn + bas.cop + bas.cqr + bas.cst + bas.cuv + bas.cwx + bas.cyz; // abcdefghijklmnopqrstuvwxyz

exports.cLowerCaseEnglishAlphabet = cLowerCaseEnglishAlphabet;
var cUpperCaseEnglishAlphabet = bas.cAB + bas.cCD + bas.cEF + bas.cGH + bas.cIJ + bas.cKL + bas.cMN + bas.cOP + bas.cQR + bas.cST + bas.cUV + bas.cWX + bas.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ

exports.cUpperCaseEnglishAlphabet = cUpperCaseEnglishAlphabet;
var cAllNumbers = num.c0 + num.c1 + num.c2 + num.c3 + num.c4 + num.c5 + num.c6 + num.c7 + num.c8 + num.c9; // 0123456789

exports.cAllNumbers = cAllNumbers;
var cMostSpecialCharacters = bas.cExclamation + bas.cAt + bas.cHash + bas.cDollar + bas.cPercent + bas.cCarrot + bas.cAndPersand + bas.cStar + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cUnderscore + bas.cPlus + bas.cOpenCurlyBrace + bas.cCloseCurlyBrace + bas.cPipe + bas.cColon + bas.cDoubleQuote + bas.cLessThan + bas.cGreaterThan + bas.cQuestion + bas.cDot + bas.cComa + bas.cTilde; // !@#$%^&*()_+{}|:"<>?.,~
// File Extensions

exports.cMostSpecialCharacters = cMostSpecialCharacters;
var cexe = bas.cex + bas.ce; // exe

exports.cexe = cexe;
var cExe = bas.cEx + bas.ce; // Exe

exports.cExe = cExe;
var cEXE = bas.cEX + bas.cE; // EXE

exports.cEXE = cEXE;
var cdoc = bas.cdo + bas.cc; // doc

exports.cdoc = cdoc;
var cDoc = bas.cDo + bas.cc; // Doc

exports.cDoc = cDoc;
var cDOC = bas.cDO + bas.cC; // DOC

exports.cDOC = cDOC;
var ccom = bas.cco + bas.cm; // com

exports.ccom = ccom;
var cCom = bas.cCo + bas.cm; // Com

exports.cCom = cCom;
var cCOM = bas.cCO + bas.cM; // COM

exports.cCOM = cCOM;
var czip = bas.cz + bas.cip; // zip

exports.czip = czip;
var cZip = bas.cZ + bas.cip; // Zip

exports.cZip = cZip;
var cZIP = bas.cZ + bas.cIP; // ZIP

exports.cZIP = cZIP;
var ctxt = bas.ct + bas.cxt; // txt

exports.ctxt = ctxt;
var cTxt = bas.cT + bas.cxt; // Txt

exports.cTxt = cTxt;
var cTXT = bas.cT + bas.cXT; // TXT

exports.cTXT = cTXT;
var ccsv = bas.ccs + bas.cv; // csv

exports.ccsv = ccsv;
var cCsv = bas.cCs + bas.cv; // Csv

exports.cCsv = cCsv;
var cCSV = bas.cCS + bas.cV; // CSV

exports.cCSV = cCSV;
var cxml = bas.cxm + bas.cl; // xml

exports.cxml = cxml;
var cXml = bas.cXm + bas.cl; // Xml

exports.cXml = cXml;
var cXML = bas.cXM + bas.cL; // XML

exports.cXML = cXML;
var clog = bas.clo + bas.cg; // log

exports.clog = clog;
var cLog = bas.cLo + bas.cg; // Log

exports.cLog = cLog;
var cLOG = bas.cLO + bas.cG; // LOG

exports.cLOG = cLOG;
var cjson = bas.cjs + bas.con; // json

exports.cjson = cjson;
var cJson = bas.cJs + bas.con; // Json

exports.cJson = cJson;
var cJSON = bas.cJS + bas.cON; // JSON

exports.cJSON = cJSON;
var cenv = bas.cen + bas.cv; // env

exports.cenv = cenv;
var cEnv = bas.cEn + bas.cv; // Env

exports.cEnv = cEnv;
var cENV = bas.cEN + bas.cV; // ENV

exports.cENV = cENV;
var cDotexe = bas.cDot + cexe; // .exe

exports.cDotexe = cDotexe;
var cDotExe = bas.cDot + cExe; // .Exe

exports.cDotExe = cDotExe;
var cDotEXE = bas.cDot + cEXE; // .EXE

exports.cDotEXE = cDotEXE;
var cDotcsv = bas.cDot + ccsv; // .csv

exports.cDotcsv = cDotcsv;
var cDotCsv = bas.cDot + cCsv; // .Csv

exports.cDotCsv = cDotCsv;
var cDotCSV = bas.cDot + cCSV; // .CSV

exports.cDotCSV = cDotCSV;
var cDotCom = bas.cDot + cCom; // .Com

exports.cDotCom = cDotCom;
var cDotzip = bas.cDot + czip; // .zip

exports.cDotzip = cDotzip;
var cDotZip = bas.cDot + cZip; // .Zip

exports.cDotZip = cDotZip;
var cDotZIP = bas.cDot + cZIP; // .ZIP

exports.cDotZIP = cDotZIP;
var cDottxt = bas.cDot + ctxt; // .txt

exports.cDottxt = cDottxt;
var cDotTxt = bas.cDot + cTxt; // .Txt

exports.cDotTxt = cDotTxt;
var cDotTXT = bas.cDot + cTXT; // .TXT

exports.cDotTXT = cDotTXT;
var cDotxml = bas.cDot + cxml; // .xml

exports.cDotxml = cDotxml;
var cDotXml = bas.cDot + cXml; // .Xml

exports.cDotXml = cDotXml;
var cDotXML = bas.cDot + cXML; // .XML

exports.cDotXML = cDotXML;
var cDotlog = bas.cDot + clog; // .log

exports.cDotlog = cDotlog;
var cDotLog = bas.cDot + cLog; // .Log

exports.cDotLog = cDotLog;
var cDotLOG = bas.cDot + cLOG; // .LOG

exports.cDotLOG = cDotLOG;
var cDotjson = bas.cDot + cjson; // .json

exports.cDotjson = cDotjson;
var cDotJson = bas.cDot + cJson; // .Json

exports.cDotJson = cDotJson;
var cDotJSON = bas.cDot + cJSON; // .JSON

exports.cDotJSON = cDotJSON;
var cDotenv = bas.cDot + cenv; // .env

exports.cDotenv = cDotenv;
var cDotEnv = bas.cDot + cEnv; // .Env

exports.cDotEnv = cDotEnv;
var cDotENV = bas.cDot + cENV; // .ENV

exports.cDotENV = cDotENV;
var cascii = bas.cas + bas.cci + bas.ci; // ascii
// Time Formatting

exports.cascii = cascii;
var cYYYY = bas.cYY + bas.cYY; // YYYY

exports.cYYYY = cYYYY;
var cSSS = bas.cSS + bas.cS; // SSS

exports.cSSS = cSSS;
var cYYYYMMDD = cYYYY + bas.cMM + bas.cDD; // YYYYMMDD

exports.cYYYYMMDD = cYYYYMMDD;
var cHHmmss = bas.cHH + bas.cmm + bas.css; // HHmmss

exports.cHHmmss = cHHmmss;
var cHHmmss_SSS = cHHmmss + bas.cDash + cSSS; // HHmmss_SSS

exports.cHHmmss_SSS = cHHmmss_SSS;
var cYYYYMMDD_HHmmss = cYYYYMMDD + bas.cDash + cHHmmss; // YYYYMMDD_HHmmss

exports.cYYYYMMDD_HHmmss = cYYYYMMDD_HHmmss;
var cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS; // YYYYMMDD_HHmmss_SSS

exports.cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss_SSS;
var cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + bas.cColon + bas.cMM + bas.cColon + bas.cDD + bas.cDash + bas.cHH + bas.cColon + bas.cmm + bas.cColon + bas.css + bas.cColon + cSSS; // YYYY_MM_DD_HH_mm_ss_SSS
// Naval & Military Codes

exports.cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY_MM_DD_HH_mm_ss_SSS;
var cAlfa = bas.cAl + bas.cfa; //  Alfa

exports.cAlfa = cAlfa;
var cBravo = bas.cBr + bas.cav + bas.co; // Bravo

exports.cBravo = cBravo;
var cCharlie = bas.cCh + bas.car + bas.cli + bas.ce; // Charlie

exports.cCharlie = cCharlie;
var cDelta = bas.cDe + bas.clt + bas.ca; // Delta

exports.cDelta = cDelta;
var cEcho = bas.cEc + bas.cho; // Echo

exports.cEcho = cEcho;
var cFoxtrot = bas.cFo + bas.cxt + bas.cro + bas.ct; // Foxtrot

exports.cFoxtrot = cFoxtrot;
var cGolf = bas.cGo + bas.clf; // Golf

exports.cGolf = cGolf;
var cHotel = bas.cHo + bas.cte + bas.cl; // Hotel

exports.cHotel = cHotel;
var cIndia = bas.cIn + bas.cdi + bas.ca; // India

exports.cIndia = cIndia;
var cJuliett = bas.cJu + bas.cli + bas.cet + bas.ct; // Juliett

exports.cJuliett = cJuliett;
var cKilo = bas.cKi + bas.clo; // Kilo

exports.cKilo = cKilo;
var cLima = bas.cLi + bas.cma; // Lima

exports.cLima = cLima;
var cMike = bas.cMi + bas.cke; // Mike

exports.cMike = cMike;
var cNovember = bas.cNo + bas.cv + phn.cemb + bas.cer; // November

exports.cNovember = cNovember;
var cOscar = bas.cOs + bas.cca + bas.cr; // Oscar

exports.cOscar = cOscar;
var cPapa = bas.cPa + bas.cpa; // Papa

exports.cPapa = cPapa;
var cQuebec = bas.cQu + bas.ceb + bas.cec; // Quebec

exports.cQuebec = cQuebec;
var cRomeo = bas.cRo + bas.cme + bas.co; // Romeo

exports.cRomeo = cRomeo;
var cSierra = bas.cSi + bas.cer + bas.cra; // Sierra

exports.cSierra = cSierra;
var cTango = bas.cTa + bas.cng + bas.co; // Tango

exports.cTango = cTango;
var cUniform = bas.cUn + bas.cif + bas.cor + bas.cm; // Uniform

exports.cUniform = cUniform;
var cVictor = bas.cVi + phn.cctor; // Victor

exports.cVictor = cVictor;
var cWhiskey = bas.cWh + bas.cis + bas.cke + bas.cy; // Whiskey

exports.cWhiskey = cWhiskey;
var cXray = bas.cXr + bas.cay; // Xray

exports.cXray = cXray;
var cYankee = bas.cYa + bas.cnk + bas.cee; // Yankee

exports.cYankee = cYankee;
var cZulu = bas.cZu + bas.clu; // Zulu

exports.cZulu = cZulu;
var cAlpha = bas.cAl + bas.cph + bas.ca; // Alpha

exports.cAlpha = cAlpha;
var cBeta = bas.cBe + bas.cta; // Beta

exports.cBeta = cBeta;
var cGamma = bas.cGa + bas.cmm + bas.ca; // Gamma

exports.cGamma = cGamma;
var cEpsilon = bas.cEp + bas.csi + bas.clo + bas.cn; // Epsilon

exports.cEpsilon = cEpsilon;
var cDigamma = bas.cDi + bas.cga + bas.cmm + bas.ca; // Digamma

exports.cDigamma = cDigamma;
var cZeta = bas.cZe + bas.cta; // Zeta

exports.cZeta = cZeta;
var ceta = bas.cet + bas.ca; // eta

exports.ceta = ceta;
var cEta = bas.cEt + bas.ca; // Eta

exports.cEta = cEta;
var cTheta = bas.cTh + bas.cet + bas.ca; // Theta

exports.cTheta = cTheta;
var cIota = bas.cIo + bas.cta; // Iota

exports.cIota = cIota;
var cKappa = bas.cKa + bas.cpp + bas.ca; // Kappa

exports.cKappa = cKappa;
var cLambda = bas.cLa + bas.cmb + bas.cda; // Lambda

exports.cLambda = cLambda;
var cMu = bas.cMu; // Mu

exports.cMu = cMu;
var cNu = bas.cNu; // Nu

exports.cNu = cNu;
var cXi = bas.cXi; // Xi

exports.cXi = cXi;
var cOmicron = bas.cOm + bas.cic + bas.cro + bas.cn; // Omicron

exports.cOmicron = cOmicron;
var cPi = bas.cPi; // Pi

exports.cPi = cPi;
var cSan = bas.cSa + bas.cn; // San

exports.cSan = cSan;
var cKoppa = bas.cKo + bas.cpp + bas.ca; // Koppa

exports.cKoppa = cKoppa;
var cRho = bas.cRh + bas.co; // Rho

exports.cRho = cRho;
var cSigma = bas.cSi + bas.cgm + bas.ca; // Sigma

exports.cSigma = cSigma;
var cTau = bas.cTa + bas.cu; // Tau

exports.cTau = cTau;
var cUpsilon = bas.cUp + bas.csi + bas.clo + bas.cn; // Upsilon

exports.cUpsilon = cUpsilon;
var cPhi = bas.cPh + bas.ci; // Phi

exports.cPhi = cPhi;
var cChi = bas.cCh + bas.ci; // Chi

exports.cChi = cChi;
var cPsi = bas.cPs + bas.ci; // Psi

exports.cPsi = cPsi;
var cOmega = bas.cOm + bas.ceg + bas.ca; // Omega
// Months Of The Year

exports.cOmega = cOmega;
var cJanuary = bas.cJa + bas.cn + phn.cuary; // January

exports.cJanuary = cJanuary;
var cFebuary = bas.cFe + bas.cb + phn.cuary; // Febuary

exports.cFebuary = cFebuary;
var cMarch = bas.cMa + bas.crc + bas.ch; // March

exports.cMarch = cMarch;
var cApril = bas.cAp + bas.cri + bas.cl; // April

exports.cApril = cApril;
var cMay = bas.cMa + bas.cy; // May

exports.cMay = cMay;
var cJune = bas.cJu + bas.cne; // June

exports.cJune = cJune;
var cJuly = bas.cJu + bas.cly; // July

exports.cJuly = cJuly;
var cAugust = bas.cAu + bas.cgu + bas.cst; // August

exports.cAugust = cAugust;
var cSeptember = bas.cSe + bas.cpt + phn.cemb + bas.cer; // September

exports.cSeptember = cSeptember;
var cOctober = bas.cOc + bas.cto + bas.cb + bas.cer; // October
// cNovember = bas.cNo + bas.cv + bas.cemb + bas.cer; // November

exports.cOctober = cOctober;
var cDecember = bas.cDe + bas.cc + phn.cemb + bas.cer; // December
// Constants Abreviations

exports.cDecember = cDecember;
var cbas = bas.cba + bas.cs; // bas

exports.cbas = cbas;
var cbiz = bas.cbi + bas.cz; // biz

exports.cbiz = cbiz;
var cclr = phn.cclr; // clr

exports.cclr = cclr;
var ccmd = bas.ccm + bas.cd; // cmd

exports.ccmd = ccmd;
var ccfg = bas.ccf + bas.cg; // cfg

exports.ccfg = ccfg;
var cctr = phn.cctr; // ctr

exports.cctr = cctr;
var celm = bas.cel + bas.cm; // elm

exports.celm = celm;
var cgen = phn.cgen; // gen

exports.cgen = cgen;
var ciso = phn.ciso; // iso

exports.ciso = ciso;
var ckts = bas.ckt + bas.cs; // kts

exports.ckts = ckts;
var clng = bas.cln + bas.cg; // lng

exports.clng = clng;
var cmsg = bas.cms + bas.cg; // msg

exports.cmsg = cmsg;
var cnum = phn.cnum; // num

exports.cnum = cnum;
var cphn = bas.cph + bas.cn; // phn

exports.cphn = cphn;
var cshp = phn.cshp; // shp

exports.cshp = cshp;
var csys = bas.csy + bas.cs; // sys

exports.csys = csys;
var cunt = phn.cunt; // unt

exports.cunt = cunt;
var cwrd = bas.cwr + bas.cd; // wrd
// Miscelanious

exports.cwrd = cwrd;
var cUTF8 = bas.cUT + bas.cF + num.c8; // UTF8

exports.cUTF8 = cUTF8;
var cconst = phn.ccon + bas.cst; // const

exports.cconst = cconst;
var cConst = phn.cCon + bas.cst; // Const

exports.cConst = cConst;
var cASAP = bas.cAS + bas.cAP; // ASAP

exports.cASAP = cASAP;
var capp = bas.cap + bas.cp; // app

exports.capp = capp;
var cApp = bas.cAp + bas.cp; // App

exports.cApp = cApp;
var cAPP = bas.cAP + bas.cP; // APP

exports.cAPP = cAPP;
var carg = bas.car + bas.cg; // arg

exports.carg = carg;
var cArg = bas.cAr + bas.cg; // Arg

exports.cArg = cArg;
var cargs = bas.ca + phn.crgs; // args

exports.cargs = cargs;
var cArgs = bas.cA + phn.crgs; // Args

exports.cArgs = cArgs;
var chex = bas.che + bas.cx; // hex

exports.chex = chex;
var cHex = bas.cHe + bas.cx; // Hex

exports.cHex = cHex;
var cregEx = phn.creg + bas.cEx; // regEx

exports.cregEx = cregEx;
var cRegEx = phn.cReg + bas.cEx; // RegEx

exports.cRegEx = cRegEx;
var cregExp = cregEx + bas.cp; // regExp

exports.cregExp = cregExp;
var cRegExp = cRegEx + bas.cp; // RegExp

exports.cRegExp = cRegExp;
var cbin = bas.cbi + bas.cn; // bin

exports.cbin = cbin;
var cBin = bas.cBi + bas.cn; // Bin

exports.cBin = cBin;
var cBIN = bas.cBI + bas.cN; // BIN

exports.cBIN = cBIN;