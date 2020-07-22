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

export const cDotDot = b.cDot + b.cDot;
export const cDotDotForwardSlash = cDotDot + b.cForwardSlash;

// Boolean strings
export const cTrue = b.cT + p.crue;
export const cFalse = b.cF + p.calse;
export const ctrue = b.ct + p.crue;
export const cfalse = b.cf + p.calse;
export const cTRUE = b.cTR + b.cUE;
export const cFALSE = b.cFA + b.cLS + b.cE;
export const cOff = b.cO + b.cff;
export const coff = b.co + b.cff;
export const cOFF = b.cOF + b.cF;
export const cyes = b.cy + b.ces;
export const cnot = b.cno + b.ct;
export const cYes = b.cY + b.ces;
export const cNot = b.cNo + b.ct;
export const cYES = b.cYE + b.cS;
export const cNOT = 'NOT'; // b.c_NO + b.cT; // NOTE cNOT is some how a reserved word that is a variable.
export const cnotok = cnot + b.cok;
export const cnotOk = cnot + b.cOk;
export const cnotOK = cnot + b.cOK;
export const cNotok = cNot + b.cok;
export const cNotOk = cNot + b.cOk;
export const cNotOK = cNot + b.cOK;
export const cNOTok = 'NOTok'; // c_NOT = b.cok;
export const cNOTOk = 'NOTOk'; // c_NOT = b.cOk;
export const cNOTOK = 'NOTOK'; // c_NOT + b.cOK;
export const cnotEql = cnot + p.cEql;
export const cnoteql = cnot + p.ceql;
export const cNotEql = cNot + p.cEql;
export const cNoteql = cNot + p.ceql;

// Test Status
export const cPass = b.cPa + b.css;
export const cWarning = b.cWa + b.crn + b.cin + b.cg;
export const cFail = b.cFa + b.cil;

// Directions
export const cDown = b.cDo + b.cwn;
export const cLeft = b.cLe + b.cft;
export const cRight = b.cRi + b.cgh + b.ct;

// Alphabets
export const cLowerCaseEnglishAlphabet = b.cab + b.ccd + b.cef + b.cgh + b.cij + b.ckl + b.cmn + b.cop + b.cqr + b.cst + b.cuv + b.cwx + b.cyz;
export const cUpperCaseEnglishAlphabet = b.cAB + b.cCD + b.cEF + b.cGH + b.cIJ + b.cKL + b.cMN + b.cOP + b.cQR + b.cST + b.cUV + b.cWX + b.cYZ;
export const cAllNumbers = n.c0 + n.c1 + n.c2 + n.c3 + n.c4 + n.c5 + n.c6 + n.c7 + n.c8 + n.c9;

// File Extensions
export const cdoc = b.cdo + b.cc;
export const cDoc = b.cDo + b.cc;
export const cDOC = b.cDO + b.cC;
export const ccom = b.cco + b.cm;
export const cCom = b.cCo + b.cm;
export const cCOM = b.cCO + b.cM;
export const czip = b.cz + b.cip;
export const cZip = b.cZ + b.cip;
export const cZIP = b.cZ + b.cIP;
export const ctxt = b.ct + b.cxt;
export const cTxt = b.cT + b.cxt;
export const cTXT = b.cT + b.cXT;
export const ccsv = b.ccs + b.cv;
export const cCsv = b.cCs + b.cv;
export const cCSV = b.cCS + b.cv;
export const cxml = b.cxm + b.cl;
export const cXml = b.cXm + b.cl;
export const cXML = b.cXM + b.cL;

export const cDotCSV = b.cDot + ccsv;
export const cDotCom = b.cDot + cCom;
export const cDotZip = b.cDot + cZip;
export const cDotzip = b.cDot + czip;
export const cDotTxt = b.cDot + cTxt;
export const cDotXml = b.cDot + cXml;
export const cDotxml = b.cDot + cxml;

// Time Formatting
export const cYYYY = b.cYY + b.cYY;
export const cSSS = b.cSS + b.cS;
export const cYYYYMMDD = cYYYY + b.cMM + b.cDD;
export const cHHmmss = b.cHH + b.cmm + b.css;
export const cHHmmss_SSS = cHHmmss + b.cDash + cSSS;
export const cYYYYMMDD_HHmmss  = cYYYYMMDD + b.cDash + cHHmmss;
export const cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS;
export const cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + b.cColon + b.cMM + b.cColon + b.cDD + b.cDash + b.cHH + b.cColon + b.cmm + b.cColon + b.css + b.cColon + cSSS;

// Naval & Military Codes
export const cAlfa = b.cAl + b.cfa; //  'Alfa';
export const cBravo = b.cBr + b.cav + b.co; // 'Bravo';
export const cCharlie = b.cCh + b.car + b.cli + b.ce; // 'Charlie';
export const cDelta = b.cDe + b.clt + b.ca;
export const cEcho = b.cEc + b.cho; // 'Echo';
export const cFoxtrot = b.cFo + b.cxt + b.cro + b.ct; // 'Foxtrot';
export const cGolf = b.cGo + b.clf; // 'Golf';
export const cHotel = b.cHo + b.cte + b.cl; // 'Hotel';
export const cIndia = b.cIn + b.cdi + b.ca; // 'India';
export const cJuliett = b.cJu + b.cli + b.cet + b.ct; // 'Juliett';
export const cKilo = b.cKi + b.clo; // 'Kilo';
export const cLima = b.cLi + b.cma; // 'Lima';
export const cMike = b.cMi + b.cke; // 'Mike';
export const cNovember = b.cNo + b.cv + p.cemb + b.cer;  // 'Nov' + cemb + cer;
export const cOscar = b.cOs + b.cca + b.cr; // 'Oscar';
export const cPapa = b.cPa + b.cpa; // 'Papa';
export const cQuebec = b.cQu + b.ceb + b.cec; // 'Quebec';
export const cRomeo = b.cRo + b.cme + b.co; // 'Romeo';
export const cSierra = b.cSi + b.cer + b.cra;
export const cTango = b.cTa + b.cng + b.co; // 'Tango';
export const cUniform = b.cUn + b.cif + b.cor + b.cm; // 'Uniform';
export const cVictor = b.cVi + p.cctor; // 'Victor';
export const cWhiskey = b.cWh + b.cis + b.cke + b.cy; // 'Whiskey';
export const cXray = b.cXr + b.cay; // 'Xray';
export const cYankee = b.cYa + b.cnk + b.cee; // 'Yankee';
export const cZulu = b.cZu + b.clu; // 'Zulu';

export const cAlpha = b.cAl + b.cph + b.ca; // 'Alpha';
export const cBeta = b.cBe + b.cta; // 'Beta';
export const cGamma = b.cGa + b.cmm + b.ca; // 'Gamma';
export const cEpsilon = b.cEp + b.csi + b.clo + b.cn; // 'Epsilon';
export const cDigamma = b.cDi + b.cga + b.cmm + b.ca; // 'Digamma';
export const cZeta = b.cZe + b.cta; // 'Zeta';
export const ceta = b.cet + b.ca;
export const cEta = b.cEt + b.ca; // 'Eta';
export const cTheta = b.cTh + b.cet + b.ca; // 'Theta';
export const cIota = b.cIo + b.cta; // 'Iota';
export const cKappa = b.cKa + b.cpp + b.ca; // 'Kappa';
export const cLambda = b.cLa + b.cmb + b.cda; // 'Lambda';
export const cMu = b.cMu;
export const cNu = b.cNu;
export const cXi = b.cXi;
export const cOmicron = b.cOm + b.cic + b.cro + b.cn; // 'Omicron';
export const cPi = b.cPi;
export const cSan = b.cSa + b.cn; // 'San';
export const cKoppa = b.cKo + b.cpp + b.ca; // 'Koppa';
export const cRho = b.cRh + b.co; // 'Rho';
export const cSigma = b.cSi + b.cgm + b.ca; // 'Sigma';
export const cTau = b.cTa + b.cu; // 'Tau';
export const cUpsilon = b.cUp + b.csi + b.clo + b.cn; // 'Upsilon';
export const cPhi = b.cPh + b.ci; // 'Phi';
export const cChi = b.cCh + b.ci; // 'Chi';
export const cPsi = b.cPs + b.ci; // 'Psi';
export const cOmega = b.cOm + b.ceg + b.ca; // 'Omega';

// Months Of The Year
export const cJanuary = b.cJa + b.cn + p.cuary; // 'January';
export const cFebuary = b.cFe + b.cb + p.cuary; // 'Febuary';
export const cMarch = b.cMa + b.crc + b.ch; // 'March';
export const cApril = b.cAp + b.cri + b.cl; // 'April';
export const cMay = b.cMa + b.cy; // 'May';
export const cJune = b.cJu + b.cne; // 'June';
export const cJuly = b.cJu + b.cly; // 'July';
export const cAugust = b.cAu + b.cgu + b.cst; // 'August';
export const cSeptember = b.cSe + b.cpt + p.cemb + b.cer; // 'Sept' + cemb + cer;
export const cOctober = b.cOc + b.cto + b.cb + b.cer; // 'Octob' + cer;
export const cDecember = b.cDe + b.cc + b.cemb + b.cer;

// Miscelanious
export const cress = b.cre + b.css;
