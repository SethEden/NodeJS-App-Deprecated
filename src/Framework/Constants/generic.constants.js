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
import * as b from '../constants/basic.constants';
import * as p from '../constants/phonics.constants';
import * as n from '../constants/numeric.constants';

export const cDotDot = b.cDot + b.cDot; // ..
export const cDotDotForwardSlash = cDotDot + b.cForwardSlash; // ../

// Boolean strings
export const cTrue = b.cT + p.crue; // True
export const cFalse = b.cF + p.calse; // False
export const ctrue = b.ct + p.crue; // true
export const cfalse = b.cf + p.calse; // false
export const cTRUE = b.cTR + b.cUE; // TRUE
export const cFALSE = b.cFA + b.cLS + b.cE; // FALSE
export const cOff = b.cO + b.cff; // Off
export const coff = b.co + b.cff; // off
export const cOFF = b.cOF + b.cF; // OFF
export const cyes = b.cy + b.ces; // yes
export const cnot = b.cno + b.ct; // not
export const cYes = b.cY + b.ces; // Yes
export const cNot = b.cNo + b.ct; // Not
export const cYES = b.cYE + b.cS; // YES
export const cNOT = 'NOT'; // b.c_NO + b.cT; // NOTE cNOT is some how a reserved word that is a variable.
export const cnotok = cnot + b.cok; // notok
export const cnotOk = cnot + b.cOk; // notOk
export const cnotOK = cnot + b.cOK; // notOK
export const cNotok = cNot + b.cok; // Notok
export const cNotOk = cNot + b.cOk; // NotOk
export const cNotOK = cNot + b.cOK; // NotOK
export const cNOTok = 'NOTok'; // c_NOT = b.cok;
export const cNOTOk = 'NOTOk'; // c_NOT = b.cOk;
export const cNOTOK = 'NOTOK'; // c_NOT + b.cOK;
export const cnotEql = cnot + p.cEql; // notEql
export const cnoteql = cnot + p.ceql; // noteql
export const cNotEql = cNot + p.cEql; // NotEql
export const cNoteql = cNot + p.ceql; // Noteql

// Test Status
export const cPass = b.cPa + b.css; // Pass
export const cWarning = b.cWa + b.crn + b.cin + b.cg; // Warning
export const cFail = b.cFa + b.cil; // Fail

// Directions
export const cDown = b.cDo + b.cwn; // Down
export const cLeft = b.cLe + b.cft; // Left
export const cRight = b.cRi + b.cgh + b.ct; // Right

// Alphabets
export const cLowerCaseEnglishAlphabet = b.cab + b.ccd + b.cef + b.cgh + b.cij + b.ckl + b.cmn + b.cop + b.cqr + b.cst + b.cuv + b.cwx + b.cyz; // abcdefghijklmnopqrstuvwxyz
export const cUpperCaseEnglishAlphabet = b.cAB + b.cCD + b.cEF + b.cGH + b.cIJ + b.cKL + b.cMN + b.cOP + b.cQR + b.cST + b.cUV + b.cWX + b.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
export const cAllNumbers = n.c0 + n.c1 + n.c2 + n.c3 + n.c4 + n.c5 + n.c6 + n.c7 + n.c8 + n.c9; // 0123456789

// File Extensions
export const cdoc = b.cdo + b.cc; // doc
export const cDoc = b.cDo + b.cc; // Doc
export const cDOC = b.cDO + b.cC; // DOC
export const ccom = b.cco + b.cm; // com
export const cCom = b.cCo + b.cm; // Com
export const cCOM = b.cCO + b.cM; // COM
export const czip = b.cz + b.cip; // zip
export const cZip = b.cZ + b.cip; // Zip
export const cZIP = b.cZ + b.cIP; // ZIP
export const ctxt = b.ct + b.cxt; // txt
export const cTxt = b.cT + b.cxt; // Txt
export const cTXT = b.cT + b.cXT; // TXT
export const ccsv = b.ccs + b.cv; // csv
export const cCsv = b.cCs + b.cv; // Csv
export const cCSV = b.cCS + b.cV; // CSV
export const cxml = b.cxm + b.cl; // xml
export const cXml = b.cXm + b.cl; // Xml
export const cXML = b.cXM + b.cL; // XML

export const cDotCSV = b.cDot + ccsv; // .csv
export const cDotCom = b.cDot + cCom; // .Com
export const cDotZip = b.cDot + cZip; // .Zip
export const cDotzip = b.cDot + czip; // .zip
export const cDotTxt = b.cDot + cTxt; // .Txt
export const cDotXml = b.cDot + cXml; // .Xml
export const cDotxml = b.cDot + cxml; // .xml
export const cascii = b.cas + b.cci + b.ci; // ascii

// Time Formatting
export const cYYYY = b.cYY + b.cYY; // YYYY
export const cSSS = b.cSS + b.cS; // SSS
export const cYYYYMMDD = cYYYY + b.cMM + b.cDD; // YYYYMMDD
export const cHHmmss = b.cHH + b.cmm + b.css; // HHmmss
export const cHHmmss_SSS = cHHmmss + b.cDash + cSSS; // HHmmss_SSS
export const cYYYYMMDD_HHmmss  = cYYYYMMDD + b.cDash + cHHmmss; // YYYYMMDD_HHmmss
export const cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS; // YYYYMMDD_HHmmss_SSS
export const cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + b.cColon + b.cMM + b.cColon + b.cDD + b.cDash + b.cHH + b.cColon + b.cmm + b.cColon + b.css + b.cColon + cSSS; // YYYY_MM_DD_HH_mm_ss_SSS

// Naval & Military Codes
export const cAlfa = b.cAl + b.cfa; //  Alfa
export const cBravo = b.cBr + b.cav + b.co; // Bravo
export const cCharlie = b.cCh + b.car + b.cli + b.ce; // Charlie
export const cDelta = b.cDe + b.clt + b.ca; // Delta
export const cEcho = b.cEc + b.cho; // Echo
export const cFoxtrot = b.cFo + b.cxt + b.cro + b.ct; // Foxtrot
export const cGolf = b.cGo + b.clf; // Golf
export const cHotel = b.cHo + b.cte + b.cl; // Hotel
export const cIndia = b.cIn + b.cdi + b.ca; // India
export const cJuliett = b.cJu + b.cli + b.cet + b.ct; // Juliett
export const cKilo = b.cKi + b.clo; // Kilo
export const cLima = b.cLi + b.cma; // Lima
export const cMike = b.cMi + b.cke; // Mike
export const cNovember = b.cNo + b.cv + p.cemb + b.cer;  // November
export const cOscar = b.cOs + b.cca + b.cr; // Oscar
export const cPapa = b.cPa + b.cpa; // Papa
export const cQuebec = b.cQu + b.ceb + b.cec; // Quebec
export const cRomeo = b.cRo + b.cme + b.co; // Romeo
export const cSierra = b.cSi + b.cer + b.cra; // Sierra
export const cTango = b.cTa + b.cng + b.co; // Tango
export const cUniform = b.cUn + b.cif + b.cor + b.cm; // Uniform
export const cVictor = b.cVi + p.cctor; // Victor
export const cWhiskey = b.cWh + b.cis + b.cke + b.cy; // Whiskey
export const cXray = b.cXr + b.cay; // Xray
export const cYankee = b.cYa + b.cnk + b.cee; // Yankee
export const cZulu = b.cZu + b.clu; // Zulu

export const cAlpha = b.cAl + b.cph + b.ca; // Alpha
export const cBeta = b.cBe + b.cta; // Beta
export const cGamma = b.cGa + b.cmm + b.ca; // Gamma
export const cEpsilon = b.cEp + b.csi + b.clo + b.cn; // Epsilon
export const cDigamma = b.cDi + b.cga + b.cmm + b.ca; // Digamma
export const cZeta = b.cZe + b.cta; // Zeta
export const ceta = b.cet + b.ca; // eta
export const cEta = b.cEt + b.ca; // Eta
export const cTheta = b.cTh + b.cet + b.ca; // Theta
export const cIota = b.cIo + b.cta; // Iota
export const cKappa = b.cKa + b.cpp + b.ca; // Kappa
export const cLambda = b.cLa + b.cmb + b.cda; // Lambda
export const cMu = b.cMu; // Mu
export const cNu = b.cNu; // Nu
export const cXi = b.cXi; // Xi
export const cOmicron = b.cOm + b.cic + b.cro + b.cn; // Omicron
export const cPi = b.cPi; // Pi
export const cSan = b.cSa + b.cn; // San
export const cKoppa = b.cKo + b.cpp + b.ca; // Koppa
export const cRho = b.cRh + b.co; // Rho
export const cSigma = b.cSi + b.cgm + b.ca; // Sigma
export const cTau = b.cTa + b.cu; // Tau
export const cUpsilon = b.cUp + b.csi + b.clo + b.cn; // Upsilon
export const cPhi = b.cPh + b.ci; // Phi
export const cChi = b.cCh + b.ci; // Chi
export const cPsi = b.cPs + b.ci; // Psi
export const cOmega = b.cOm + b.ceg + b.ca; // Omega

// Months Of The Year
export const cJanuary = b.cJa + b.cn + p.cuary; // January
export const cFebuary = b.cFe + b.cb + p.cuary; // Febuary
export const cMarch = b.cMa + b.crc + b.ch; // March
export const cApril = b.cAp + b.cri + b.cl; // April
export const cMay = b.cMa + b.cy; // May
export const cJune = b.cJu + b.cne; // June
export const cJuly = b.cJu + b.cly; // July
export const cAugust = b.cAu + b.cgu + b.cst; // August
export const cSeptember = b.cSe + b.cpt + p.cemb + b.cer; // September
export const cOctober = b.cOc + b.cto + b.cb + b.cer; // October
// cNovember = b.cNo + b.cv + b.cemb + b.cer; // November
export const cDecember = b.cDe + b.cc + p.cemb + b.cer; // December

// Miscelanious
export const cconst = p.ccon + b.cst;
export const cConst = p.cCon + b.cst;
