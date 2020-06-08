/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many re-usable string constants and partial phrases and/or
 * partial words for re-usability, many of them derived from the basic-constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from '../constants/basic.constants';

export const cDotDot = b.cDot + b.cDot;
export const cDotDotForwardSlash = cDotDot + b.cForwardSlash;

// Reusable Grammer
export const chree = b.chr + b.cee;
export const cour = b.cou + b.cr;
export const cive = b.civ + b.ce;
export const ceven = b.cev + b.cen;
export const cight = b.cig + b.cht;
export const cine = b.cin + b.ce;
export const cleven = b.cl + b.cev + b.cen;
export const cwelve = b.cwe + b.clv + b.ce;
export const cteen = b.ct + b.cee + b.cn;
export const chir = b.chi + b.cr;
export const cigh = b.cig + b.ch;
export const cwenty = b.cw + b.cen + b.cty;
export const chirty = b.chi + b.cr + b.cty;
export const cifty = b.cif + b.cty;
export const cred = b.cre + b.cd;
export const cgreen = b.cgr + b.cee + b.cn;
export const cblue = b.cbl + b.cue;
export const cundred = b.cun + b.cd + cred;
export const cand = b.can + b.cd;
export const csand = b.cs + b.cand;
export const chousand = b.cho + b.cu + csand;
export const cion = b.cio + b.cn;
export const cillion = b.ci + b.cll + cion;
export const crue = b.cru + b.ce;
export const calse = b.cal + b.cse;
export const ction = b.ct + cion;
export const cction = b.cc + ction;
export const cage = b.cag + b.ce;
export const cest = b.ces + b.ct;
export const chare = b.cha + b.cre;
export const c_lass = b.cla + b.css;
export const ctemp = b.cte + b.cmp;
export const chref = b.chr + b.cef;
export const cABC = b.cAB + b.cC;
export const came = b.cam + b.ce;
export const cile = b.cil + b.ce;
export const cext = b.cex + b.ct;
export const cExt = b.cEx + b.ct;
export const clpha = b.clp + b.cha;
export const ccon = b.cco + b.cn;
export const cCon = b.cCo + b.cn;
export const cable = b.cab + b.cle;
export const calid = b.cal + b.cid;
export const cing = b.cin + b.cg;
export const ctring = b.ctr + cing;
export const cbject = b.cbj + b.cec + b.ct;
export const cata = b.cat + b.ca;
export const cMac = b.cMa + b.cc;
export const cPre = b.cPr + b.ce;
export const cpre = b.cpr + b.ce;
export const cPRE = b.cPR + b.cE;
export const colid = b.col + b.cid;
export const cynch = b.cyn + b.cch;
export const celete = b.cel + b.cet + b.ce;
export const cnner = b.cnn + b.cer;
export const click = b.cli + b.cck;
export const cctrl = b.cct + b.crl;
export const cype = b.cyp + b.ce;
export const ceql = b.ce + b.cql;
export const cEql = b.cE + b.cql;
export const cemb = b.cem + b.cb;
export const cOperat = b.cOp + b.cer + b.cat;
export const cility = b.cil + b.cit + b.cy;
export const cibility = b.cib + cility;
export const cisibility = b.cis + cibility;
export const cith = b.ci + b.cth;
export const crent = b.cre + b.cnt;
export const carent = b.ca + crent;
export const ctor = b.cto + b.cr;
export const cctor = b.cc + ctor;
export const celector = b.cel + b.cec + ctor;
export const coolean = b.coo + b.cle + b.can;
export const check = b.che + b.cck;
export const child = b.chi + b.cld;
export const cibling = b.cib + b.cl + cing;
export const cttributes = b.ctt + b.cri + b.cbu + b.cte + b.cs;
export const cisabled = b.cis + cable + b.cd;
export const cilter = b.cil + b.ct + b.cer;
export const code = b.cod + b.ce;
export const cide = b.cid + b.ce;
export const cuary = b.cua + b.cry;
export const cies = b.cie + b.cs;
export const ctive = b.cti + b.cve;
export const cate = b.cat + b.ce;
export const cdate = b.cd + cate;
export const cter = b.cte + b.cr;
export const cment = b.cme + b.cnt;
export const cMENT = b.cME + b.cNT;
export const cime = b.cim + b.ce;
export const cInter = b.cIn + cter;
export const cinter = b.cin + cter;
export const cmed = b.cme + b.cd;
export const cath = b.cat + b.ch;
export const cvar = b.cva + b.cr;
export const cVar = b.cVa + b.cr;
export const ciew = b.cie + b.cw;
export const cete = b.cet + b.ce;
export const cace = b.cac + b.ce;
export const cder = b.cd + b.cer;
export const ccore = b.cco + b.cre;
export const cert = b.cer + b.ct;
export const c_ase = b.cas + b.ce; // 'case' is a reserved word
export const cunt = b.cun + b.ct;
export const caft = b.caf + b.ct;
export const cops = b.cop + b.cs;
export const cOPS = b.cOP + b.cS;
export const cinv = b.cin + b.cv;
export const cInv = b.cIn + b.cv;
export const cral = b.cra + b.cl;
export const cara = b.car + b.ca;
export const cpro = b.cpr + b.co;
export const cPro = b.cPr + b.co;
export const cPRO = b.cPR + b.cO;
export const cino = b.cin + b.co;
export const cese = b.ces + b.ce;
export const cish = b.cis + b.ch;
export const ccel = b.cce + b.cl;
export const cCel = b.cCe + b.cl;
export const cian = b.cia + b.cn;
export const cous = b.cou + b.cs;
export const ceous = b.ce + cous;
export const cung = b.cun + b.cg;
export const cary = b.car + b.cy;
export const cMis = b.cMi + b.cs;
export const cmis = b.cmi = b.cs;
export const cource = b.cou + b.crc + b.ce;
export const cmine = b.cmi + b.cne;
//b.cet + b.cer + b.cmi + b.cne; //cmine;
export const cetermine = b.ce + b.ct + b.ce + b.cr + b.cm + b.ci + b.cn + b.ce;
export const cingle = b.cin + b.cgl + b.ce;
export const clace = b.cla + b.cce;
export const ceplace = b.cep + clace;
export const clean = b.cle + b.can;
export const cvert = b.cve + b.crt;
export const convert = b.con + cvert;
export const crate = b.cra + b.cte;
export const cenerate = b.cen + b.ce + crate;
export const cdom = b.cdo + b.cm;
export const candom = b.can + cdom;
export const create = b.cre + cate;
export const carning = b.car + b.cn + cing;
export const crror = b.crr + b.cor;
export const card = b.car + b.cd;
export const cose = b.cos + b.ce;
export const cray = b.cra + b.cy;
export const cmel = b.cme + b.cl;
export const cound = b.cou + b.cnd;
export const cdot = b.cd + b.cot;
export const cDot = b.cD + b.cot;
export const cart = b.car + b.ct;
export const cize = b.ciz + b.ce;
export const cmal = b.cma + b.cl;
export const cormal = b.cor + cmal;
export const cegree = b.ceg + b.cre + b.ce;
export const ccir = b.cci + b.cr;
export const cCir = b.cCi + b.cr;
export const ccle = b.ccl + b.ce;
export const care = b.car + b.ce;
export const cquare = b.cqu + care;
export const cgle = b.cgl + b.ce;
export const ctri = b.ctr + b.ci;
export const cTri = b.cTr + b.ci;
export const crect = b.cre + b.cct;
export const cRect = b.cRe + b.cct;
export const coct = b.coc + b.ct;
export const cOct = b.cOc + b.ct;
export const cgon = b.cgo + b.cn;
export const chex = b.che + b.cx;
export const cHex = b.cHe + b.cx;
export const chep = b.che + b.cp;
export const cHep = b.cHe + b.cp;
export const cnon = b.cno + b.cn;
export const cNon = b.cNo + b.cn;
export const crap = b.cra + b.cp;
export const czoid = b.czo + b.cid;
export const cfra = b.cfr + b.ca;
export const cFra = b.cFr + b.ca;
export const ctrans = b.ctr + b.can + b.cs;
export const cTrans = b.cTr + b.can + b.cs;
export const cint = b.cin + b.ct;
export const cloc = b.clo + b.cc;
export const cLoc = b.cLo + b.cc;
export const cation = b.ca + ction;
export const cort = b.cor + b.ct;
export const csim = b.csi + b.cm;
export const cSim = b.cSi + b.cm;
export const cplify = b.cpl + b.cif + b.cy;
export const csol = b.cso + b.cl;
export const ccomp = b.cco + b.cmp;
export const cComp = b.cCo + b.cmp;
export const cideo = b.cid + b.ceo;
export const cnteger = b.cnt + b.ceg + b.cer;
export const cloat = b.clo + b.cat;
export const cong = b.con + b.cg;
export const chort = b.ch + cort;
export const cble = b.cbl + b.ce;
export const couble = b.cou + cble;
export const cduct = b.cdu + b.cct;
export const cgate = b.cga + b.cte;
export const cggregate = b.cgg + b.cre + cgate;
export const cDiff = b.cDi + b.cff;
export const cence = b.cen + b.cce;
export const cain = b.cai + b.cn;
export const ctch = b.ctc + b.ch;
export const cween = b.cwe + b.cen;
export const cord = b.cor + b.cd;
export const cmap = b.cma + b.cp;
export const cMap = b.cMa + b.cp;
export const cess = b.ce + b.css;
export const ceat = b.ce + b.cat;
export const chen = b.ch + b.cen;
export const chan = b.ch + b.can;
export const clica = b.cli + b.cca;
export const capp = b.ca + b.cpp;
export const cApp = b.cA + b.cpp;
export const coot = b.coo + b.ct;
export const crse = b.crs + b.ce;
export const carse = b.ca + crse;
export const cwap = b.cwa + b.cp;
export const cward = b.cwa + b.crd;
export const clash = b.cla + b.csh;
export const cENV = b.cE + b.cNV;
export const cavigate = b.cav + b.cig + cate;
export const cness = b.cne + b.css;
export const cusiness = b.cus + b.ci + cness;
export const cule = b.cul + b.ce;
export const cait = b.cai + b.ct;
export const cesh = b.ce + b.csh;
export const cval = b.cv + b.cal;
export const cemo = b.ce + b.cmo;
export const cmon = b.cmo + b.cn;
export const common = b.com + cmon;
export const clti = b.clt + b.ci;
export const cmulti = b.cmu + clti;
export const cMulti = b.cMu + clti;
export const cple = b.cpl + b.ce;
export const cnal = b.cna + b.cl;
export const cexe = b.cex + b.ce;
export const cExe = b.cEx + b.ce;
export const cper = b.cpe + b.cr;
export const cPer = b.cPe + b.cr;
export const casic = b.cas + b.cic;
export const cvent = b.cve + b.cnt;
export const carg = b.car + b.cg;
export const cArg = b.cAr + b.cg;
export const crive = b.cri + b.cve;
export const cloy = b.clo + b.cy;
export const cumber = b.cum + b.cb + b.cer;
export const ccond = b.cco + b.cnd;
export const ctieth = b.cti + b.ce + b.cth;
export const cont = b.con + b.ct;
export const cull = b.cul + b.cl;
export const cmod = b.cmo + b.cd;
export const ccol = b.cco + b.cl;
export const cCol = b.cCo + b.cl;
export const creen = b.cre + b.cen;
export const clue = b.clu + b.ce; // Referance to Tron here! :-P
export const cyan = b.cy + b.can;
export const centa = b.cen + b.cta;
export const cite = b.cit + b.ce;
export const cange = b.can + b.cge;


// Boolean strings
export const cTrue = b.cT + crue;
export const cFalse = b.cF + calse;
export const ctrue = b.ct + crue;
export const cfalse = b.cf + calse;
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
export const cnotEql = cnot + cEql;
export const cnoteql = cnot + ceql;
export const cNotEql = cNot + cEql;
export const cNoteql = cNot + ceql;

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
export const cAllNumbers = b.c0 + b.c1 + b.c2 + b.c3 + b.c4 + b.c5 + b.c6 + b.c7 + b.c8 + b.c9;

// File Extensions
export const cDoc = b.cDo + b.cc;
export const cCom = b.cCo + b.cm;
export const cZip = b.cZ + b.cip;
export const czip = b.cz + b.cip;
export const cTxt = b.cT + b.cxt;
export const ctxt = b.ct + b.cxt;
export const ccsv = b.ccs + b.cv;
export const cCsv = b.cCs + b.cv;
export const cXml = b.cXm + b.cl;
export const cxml = b.cxm + b.cl;

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

// String Numbers
export const cone = b.co + b.cne;
export const ctwo = b.ct + b.cwo;
export const cthree = b.ct + chree;
export const cfour = b.cf + cour;
export const cfive = b.cf + cive;
export const csix = b.cs + b.cix;
export const cseven = b.cs + ceven;
export const ceight = b.ce + cight;
export const cnine = b.cn + cine;
export const cten = b.ct + b.cen;
export const celeven = b.ce + cleven;
export const ctwelve = b.ct + cwelve;
export const cthirteen = b.ct + chir + cteen;
export const cfourteen = cfour + cteen;
export const cfifteen = b.cf + b.cif + cteen;
export const csixteen = csix + cteen;
export const cseventeen = cseven + cteen;
export const ceighteen = b.ce + cigh + cteen;
export const cnineteen = cnine + cteen;
export const ctwenty = b.ct + cwenty;
export const cthirty = b.ct + chirty;
export const cfourty = cfour + b.cty;
export const cfifty = b.cf + cifty;
export const csixty = csix + b.cty;
export const cseventy = cseven + b.cty;
export const ceighty = ceight + b.cy;
export const cninety = cnine + b.cty;
export const chundred = b.ch + cundred;
export const cthousand = b.ct + chousand;
export const cmillion = b.cm + cillion;
export const cbillion = b.cb + cillion;
export const ctrillion = b.ctr + cillion;
export const cOne = b.cO + b.cne;
export const cTwo = b.cT + b.cwo;
export const cThree = b.cT + chree;
export const cFour = b.cF + cour;
export const cFive = b.cF + cive;
export const cSix = b.cS + b.cix;
export const cSeven = b.cS + ceven;
export const cEight = b.cE + cight;
export const cNine = b.cN + cine;
export const cTen = b.cT + b.cen;
export const cEleven = b.cE + cleven;
export const cTwelve = b.cT + cwelve;
export const cThirteen = b.cT + chir + cteen;
export const cFourteen = cFour + cteen;
export const cFifteen = b.cF + b.cif + cteen;
export const cSixteen = cSix + cteen;
export const cSeventeen = cSeven + cteen;
export const cEighteen = b.cE + cigh + cteen;
export const cNineteen = cNine + cteen;
export const cTwenty = b.cT + cwenty;
export const cThirty = b.cT + chirty;
export const cFourty = cFour + b.cty;
export const cFifty = b.cF + cifty;
export const cSixty = cSix + b.cty;
export const cSeventy = cSeven + b.cty;
export const cEighty = cEight + b.cy;
export const cNinety = cNine + b.cty;
export const cHundred = b.cH + cundred;
export const cThousand = b.cT + chousand;
export const cMillion = b.cM + cillion;
export const cBillion = b.cB + cillion;
export const cTrillion = b.cTr + cillion;

// String Number Values
export const cfirst = b.cfi + b.crs + b.ct;
export const cFirst = b.cFi + b.crs + b.ct;
// Second - See below
export const cthird = b.cth + b.cir + b.cd;
export const cThird = b.cTh + b.cir + b.cd;
export const cfourth = cfour + b.cth;
export const cFourth = cFour + b.cth;
export const cfifth = b.cfi + b.cft + b.ch;
export const cFifth = b.cFi + b.cft + b.ch;
export const csixth = csix + b.cth;
export const cSixth = cSix + b.cth;
export const cseventh = cseven + b.cth;
export const cSeventh = cSeven + b.cth;
export const ceighth = ceight + b.ch;
export const cEighth = cEight + b.ch;
export const ctenth = cten + b.cth;
export const cTenth = cTen + b.cth;
export const celeventh = celeven + b.cth;
export const cEleventh = cEleven + b.cth;
export const ctwelveth = ctwelve + b.cth;
export const cTwelveth = cTwelve + b.cth;
export const cthirteenth = cthirteen + b.cth;
export const cThirteenth = cThirteen + b.cth;
export const cfourteenth = cfourteen + b.cth;
export const cFourteenth = cFourteen + b.cth;
export const cfifteenth = cFifteen + b.cth;
export const cFifteenth = cFifteen + b.cth;
export const csixteenth = csixteen + b.cth;
export const cSixteenth = cSixteen + b.cth;
export const cseventeenth = cseventeen + b.cth;
export const cSeventeenth = cSeventeen + b.cth;
export const ceighteenth = ceighteen + b.cth;
export const cEighteenth = cEighteen + b.cth;
export const cnineteenth = cnineteen + b.cth;
export const cNineteenth = cNineteen + b.cth;
export const ctwentieth = b.ctw + b.cen + ctieth;
export const cTwentieth = b.cTw + b.cen + ctieth;
export const cthirtieth = b.cth + b.cir + ctieth;
export const cThirtieth = b.cTh + b.cir + ctieth;
export const cfourtieth = cfour + ctieth;
export const cFourtieth = cFour + ctieth;
export const cfiftieth = b.cfi + b.cf + ctieth;
export const cFiftieth = b.cFi + b.cf + ctieth;
export const csixtieth = csix + ctieth;
export const cSixtieth = cSix + ctieth;
export const cseventieth = cseven + ctieth;
export const cSeventieth = cSeven + ctieth;
export const ceightieth = ceight + ctieth;
export const cEightieth = cEight + ctieth;
export const cninetieth = cnine + ctieth;
export const cNinetieth = cNine + ctieth;
export const chundredth = chundred + b.cth;
export const cHundredth = cHundred + b.cth;
export const cthousandth = cthousand + b.cth;
export const cThousandth = cThousand + b.cth;
export const cmillionth = cmillion + b.cth;
export const cMillionth = cMillion + b.cth;
export const cbillionth = cbillion + b.cth;
export const cBillionth = cBillion + b.cth;
export const ctrillionth = ctrillion + b.cth;
export const cTrillionth = cTrillion + b.cth;

// Units of Measure
export const cPico = b.cPi + b.cco; // 'Pico';
export const cNano = b.cNa + b.cno; // 'Nano';
export const cMicro = b.cMi + b.ccr + b.co; // 'Micro';
export const cMill = b.cMi + b.cll // 'Mill';
export const cMilli = cMill + b.ci;

// Units of Time
export const csecond = b.cse + ccond;
export const cSecond = b.cSe + ccond;
export const cSeconds = cSecond + b.cs;
export const cMinute = b.cMi + b.cnu + b.cte; // 'Minute';
export const cMinutes = cMinute + b.cs;
export const cHour = b.cHo + b.cur; // 'Hour';
export const cHours = cHour + b.cs;
export const cDay = b.cDa + b.cy; // 'Day';
export const cDays = cDay + b.cs;
export const cWeek = b.cW + b.cee + b.ck; // 'Week';
export const cWeeks = cWeek + b.cs;
export const cMonth = b.cMo + b.cn + b.cth; // 'Month';
export const cMonths = cMonth + b.cs;
export const cYear = b.cYe + b.car; // 'Year';
export const cYears = cYear + b.cs;
export const cDecade = b.cDe + b.cca + b.cde;
export const cDecades = cDecade + b.cs;
export const ccent = b.cce + b.cnt;
export const cCent = b.cCe + b.cnt;
export const cCentur = cCent + b.cur; // b.cC + b.cen + b.ctu + b.cr; // 'Centur';
export const cCentury = cCentur + b.cy;
export const cCenturies = cCentur + cies;
export const cMillennium = cMill + b.cen + b.cni + b.cum; // 'ennium'; // Millennium Falcon ;-)
export const cMillenniums = cMillennium + b.cs;
export const cNanoSecond = cNano + cSecond;
export const cNanoSeconds = cNano + cSeconds;
export const cMicroSecond = cMicro + cSecond;
export const cMicroSeconds = cMicro + cSeconds;
export const cMilliSecond = cMilli + cSecond;
export const cMilliSeconds = cMilli + cSeconds;
export const cPicoSecond = cPico + cSecond;
export const cPicoSeconds = cPico + cSeconds;

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
export const cNovember = b.cNo + b.cv + cemb + b.cer;  // 'Nov' + cemb + cer;
export const cOscar = b.cOs + b.cca + b.cr; // 'Oscar';
export const cPapa = b.cPa + b.cpa; // 'Papa';
export const cQuebec = b.cQu + b.ceb + b.cec; // 'Quebec';
export const cRomeo = b.cRo + b.cme + b.co; // 'Romeo';
export const cSierra = b.cSi + b.cer + b.cra;
export const cTango = b.cTa + b.cng + b.co; // 'Tango';
export const cUniform = b.cUn + b.cif + b.cor + b.cm; // 'Uniform';
export const cVictor = b.cVi + cctor; // 'Victor';
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
export const cJanuary = b.cJa + b.cn + cuary; // 'January';
export const cFebuary = b.cFe + b.cb + cuary; // 'Febuary';
export const cMarch = b.cMa + b.crc + b.ch; // 'March';
export const cApril = b.cAp + b.cri + b.cl; // 'April';
export const cMay = b.cMa + b.cy; // 'May';
export const cJune = b.cJu + b.cne; // 'June';
export const cJuly = b.cJu + b.cly; // 'July';
export const cAugust = b.cAu + b.cgu + b.cst; // 'August';
export const cSeptember = b.cSe + b.cpt + cemb + b.cer; // 'Sept' + cemb + cer;
export const cOctober = b.cOc + b.cto + b.cb + b.cer; // 'Octob' + cer;
export const cDecember = b.cDe + b.cc + b.cemb + b.cer;

// Miscelanious
export const cress = b.cre + b.css;
