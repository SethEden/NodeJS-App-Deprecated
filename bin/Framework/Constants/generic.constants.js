"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cace = exports.cete = exports.ciew = exports.cVar = exports.cvar = exports.cath = exports.cmed = exports.cinter = exports.cInter = exports.cime = exports.cMENT = exports.cment = exports.cter = exports.cdate = exports.cate = exports.ctive = exports.cies = exports.cuary = exports.cide = exports.code = exports.cilter = exports.cisabled = exports.cttributes = exports.cibling = exports.child = exports.check = exports.coolean = exports.celector = exports.cctor = exports.ctor = exports.carent = exports.crent = exports.cith = exports.cisibility = exports.cibility = exports.cility = exports.cOperat = exports.cemb = exports.cEql = exports.ceql = exports.cype = exports.cctrl = exports.click = exports.cnner = exports.celete = exports.cynch = exports.colid = exports.cPRE = exports.cpre = exports.cPre = exports.cMac = exports.cata = exports.cbject = exports.ctring = exports.cing = exports.calid = exports.cable = exports.cCon = exports.ccon = exports.clpha = exports.cExt = exports.cext = exports.cile = exports.came = exports.cABC = exports.chref = exports.ctemp = exports.c_lass = exports.chare = exports.cest = exports.cage = exports.cction = exports.ction = exports.calse = exports.crue = exports.cillion = exports.cion = exports.chousand = exports.csand = exports.cand = exports.cundred = exports.cblue = exports.cgreen = exports.cred = exports.cifty = exports.chirty = exports.cwenty = exports.cigh = exports.chir = exports.cteen = exports.cwelve = exports.cleven = exports.cine = exports.cight = exports.ceven = exports.cive = exports.cour = exports.chree = exports.cDotDotForwardSlash = exports.cDotDot = void 0;
exports.cgate = exports.cduct = exports.couble = exports.cble = exports.chort = exports.cong = exports.cloat = exports.cnteger = exports.cideo = exports.cComp = exports.ccomp = exports.csol = exports.cplify = exports.cSim = exports.csim = exports.cort = exports.cation = exports.cLoc = exports.cloc = exports.cint = exports.cTrans = exports.ctrans = exports.cFra = exports.cfra = exports.czoid = exports.crap = exports.cNon = exports.cnon = exports.cHep = exports.chep = exports.cHex = exports.chex = exports.cgon = exports.cOct = exports.coct = exports.cRect = exports.crect = exports.cTri = exports.ctri = exports.cgle = exports.cquare = exports.care = exports.ccle = exports.cCir = exports.ccir = exports.cegree = exports.cormal = exports.cmal = exports.cize = exports.cart = exports.cDot = exports.cdot = exports.cound = exports.cmel = exports.cray = exports.cose = exports.card = exports.crror = exports.carning = exports.create = exports.candom = exports.cdom = exports.cenerate = exports.crate = exports.convert = exports.cvert = exports.clean = exports.ceplace = exports.clace = exports.cingle = exports.cetermine = exports.cmine = exports.cource = exports.cmis = exports.cMis = exports.cary = exports.cung = exports.ceous = exports.cous = exports.cian = exports.cCel = exports.ccel = exports.cish = exports.cese = exports.cino = exports.cPRO = exports.cPro = exports.cpro = exports.cara = exports.cral = exports.cInv = exports.cinv = exports.cOPS = exports.cops = exports.caft = exports.cunt = exports.c_ase = exports.cert = exports.ccore = exports.cder = void 0;
exports.cxml = exports.cXml = exports.cCsv = exports.ccsv = exports.ctxt = exports.cTxt = exports.czip = exports.cZip = exports.cCom = exports.cDoc = exports.cAllNumbers = exports.cUpperCaseEnglishAlphabet = exports.cLowerCaseEnglishAlphabet = exports.cRight = exports.cLeft = exports.cDown = exports.cFail = exports.cWarning = exports.cPass = exports.cNoteql = exports.cNotEql = exports.cnoteql = exports.cnotEql = exports.cNOTOK = exports.cNOTOk = exports.cNOTok = exports.cNotOK = exports.cNotOk = exports.cNotok = exports.cnotOK = exports.cnotOk = exports.cnotok = exports.cNOT = exports.cYES = exports.cNot = exports.cYes = exports.cnot = exports.cyes = exports.cOFF = exports.coff = exports.cOff = exports.cFALSE = exports.cTRUE = exports.cfalse = exports.ctrue = exports.cFalse = exports.cTrue = exports.cull = exports.cont = exports.ctieth = exports.ccond = exports.cumber = exports.cloy = exports.crive = exports.cArg = exports.carg = exports.cvent = exports.casic = exports.cPer = exports.cper = exports.cExe = exports.cexe = exports.cnal = exports.cple = exports.cMulti = exports.cmulti = exports.clti = exports.common = exports.cmon = exports.cemo = exports.cval = exports.cesh = exports.cait = exports.cule = exports.cusiness = exports.cness = exports.cavigate = exports.cENV = exports.clash = exports.cward = exports.cwap = exports.carse = exports.crse = exports.coot = exports.cApp = exports.capp = exports.clica = exports.chan = exports.chen = exports.ceat = exports.cess = exports.cMap = exports.cmap = exports.cord = exports.cween = exports.ctch = exports.cain = exports.cence = exports.cDiff = exports.cggregate = void 0;
exports.cthirteenth = exports.cTwelveth = exports.ctwelveth = exports.cEleventh = exports.celeventh = exports.cTenth = exports.ctenth = exports.cEighth = exports.ceighth = exports.cSeventh = exports.cseventh = exports.cSixth = exports.csixth = exports.cFifth = exports.cfifth = exports.cFourth = exports.cfourth = exports.cThird = exports.cthird = exports.cFirst = exports.cfirst = exports.cTrillion = exports.cBillion = exports.cMillion = exports.cThousand = exports.cHundred = exports.cNinety = exports.cEighty = exports.cSeventy = exports.cSixty = exports.cFifty = exports.cFourty = exports.cThirty = exports.cTwenty = exports.cNineteen = exports.cEighteen = exports.cSeventeen = exports.cSixteen = exports.cFifteen = exports.cFourteen = exports.cThirteen = exports.cTwelve = exports.cEleven = exports.cTen = exports.cNine = exports.cEight = exports.cSeven = exports.cSix = exports.cFive = exports.cFour = exports.cThree = exports.cTwo = exports.cOne = exports.ctrillion = exports.cbillion = exports.cmillion = exports.cthousand = exports.chundred = exports.cninety = exports.ceighty = exports.cseventy = exports.csixty = exports.cfifty = exports.cfourty = exports.cthirty = exports.ctwenty = exports.cnineteen = exports.ceighteen = exports.cseventeen = exports.csixteen = exports.cfifteen = exports.cfourteen = exports.cthirteen = exports.ctwelve = exports.celeven = exports.cten = exports.cnine = exports.ceight = exports.cseven = exports.csix = exports.cfive = exports.cfour = exports.cthree = exports.ctwo = exports.cone = exports.cYYYY_MM_DD_HH_mm_ss_SSS = exports.cYYYYMMDD_HHmmss_SSS = exports.cYYYYMMDD_HHmmss = exports.cHHmmss_SSS = exports.cHHmmss = exports.cYYYYMMDD = exports.cSSS = exports.cYYYY = exports.cDotxml = exports.cDotXml = exports.cDotTxt = exports.cDotzip = exports.cDotZip = exports.cDotCom = exports.cDotCSV = void 0;
exports.cXray = exports.cWhiskey = exports.cVictor = exports.cUniform = exports.cTango = exports.cSierra = exports.cRomeo = exports.cQuebec = exports.cPapa = exports.cOscar = exports.cNovember = exports.cMike = exports.cLima = exports.cKilo = exports.cJuliett = exports.cIndia = exports.cHotel = exports.cGolf = exports.cFoxtrot = exports.cEcho = exports.cDelta = exports.cCharlie = exports.cBravo = exports.cAlfa = exports.cPicoSeconds = exports.cPicoSecond = exports.cMilliSeconds = exports.cMilliSecond = exports.cMicroSeconds = exports.cMicroSecond = exports.cNanoSeconds = exports.cNanoSecond = exports.cMillenniums = exports.cMillennium = exports.cCenturies = exports.cCentury = exports.cCentur = exports.cCent = exports.ccent = exports.cDecades = exports.cDecade = exports.cYears = exports.cYear = exports.cMonths = exports.cMonth = exports.cWeeks = exports.cWeek = exports.cDays = exports.cDay = exports.cHours = exports.cHour = exports.cMinutes = exports.cMinute = exports.cSeconds = exports.cSecond = exports.csecond = exports.cMilli = exports.cMill = exports.cMicro = exports.cNano = exports.cPico = exports.cTrillionth = exports.ctrillionth = exports.cBillionth = exports.cbillionth = exports.cMillionth = exports.cmillionth = exports.cThousandth = exports.cthousandth = exports.cHundredth = exports.chundredth = exports.cNinetieth = exports.cninetieth = exports.cEightieth = exports.ceightieth = exports.cSeventieth = exports.cseventieth = exports.cSixtieth = exports.csixtieth = exports.cFiftieth = exports.cfiftieth = exports.cFourtieth = exports.cfourtieth = exports.cThirtieth = exports.cthirtieth = exports.cTwentieth = exports.ctwentieth = exports.cNineteenth = exports.cnineteenth = exports.cEighteenth = exports.ceighteenth = exports.cSeventeenth = exports.cseventeenth = exports.cSixteenth = exports.csixteenth = exports.cFifteenth = exports.cfifteenth = exports.cFourteenth = exports.cfourteenth = exports.cThirteenth = void 0;
exports.cress = exports.cDecember = exports.cOctober = exports.cSeptember = exports.cAugust = exports.cJuly = exports.cJune = exports.cMay = exports.cApril = exports.cMarch = exports.cFebuary = exports.cJanuary = exports.cOmega = exports.cPsi = exports.cChi = exports.cPhi = exports.cUpsilon = exports.cTau = exports.cSigma = exports.cRho = exports.cKoppa = exports.cSan = exports.cPi = exports.cOmicron = exports.cXi = exports.cNu = exports.cMu = exports.cLambda = exports.cKappa = exports.cIota = exports.cTheta = exports.cEta = exports.ceta = exports.cZeta = exports.cDigamma = exports.cEpsilon = exports.cGamma = exports.cBeta = exports.cAlpha = exports.cZulu = exports.cYankee = void 0;

var b = _interopRequireWildcard(require("../constants/basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var cDotDot = b.cDot + b.cDot;
exports.cDotDot = cDotDot;
var cDotDotForwardSlash = cDotDot + b.cForwardSlash; // Reusable Grammer

exports.cDotDotForwardSlash = cDotDotForwardSlash;
var chree = b.chr + b.cee;
exports.chree = chree;
var cour = b.cou + b.cr;
exports.cour = cour;
var cive = b.civ + b.ce;
exports.cive = cive;
var ceven = b.cev + b.cen;
exports.ceven = ceven;
var cight = b.cig + b.cht;
exports.cight = cight;
var cine = b.cin + b.ce;
exports.cine = cine;
var cleven = b.cl + b.cev + b.cen;
exports.cleven = cleven;
var cwelve = b.cwe + b.clv + b.ce;
exports.cwelve = cwelve;
var cteen = b.ct + b.cee + b.cn;
exports.cteen = cteen;
var chir = b.chi + b.cr;
exports.chir = chir;
var cigh = b.cig + b.ch;
exports.cigh = cigh;
var cwenty = b.cw + b.cen + b.cty;
exports.cwenty = cwenty;
var chirty = b.chi + b.cr + b.cty;
exports.chirty = chirty;
var cifty = b.cif + b.cty;
exports.cifty = cifty;
var cred = b.cre + b.cd;
exports.cred = cred;
var cgreen = b.cgr + b.cee + b.cn;
exports.cgreen = cgreen;
var cblue = b.cbl + b.cue;
exports.cblue = cblue;
var cundred = b.cun + b.cd + cred;
exports.cundred = cundred;
var cand = b.can + b.cd;
exports.cand = cand;
var csand = b.cs + b.cand;
exports.csand = csand;
var chousand = b.cho + b.cu + csand;
exports.chousand = chousand;
var cion = b.cio + b.cn;
exports.cion = cion;
var cillion = b.ci + b.cll + cion;
exports.cillion = cillion;
var crue = b.cru + b.ce;
exports.crue = crue;
var calse = b.cal + b.cse;
exports.calse = calse;
var ction = b.ct + cion;
exports.ction = ction;
var cction = b.cc + ction;
exports.cction = cction;
var cage = b.cag + b.ce;
exports.cage = cage;
var cest = b.ces + b.ct;
exports.cest = cest;
var chare = b.cha + b.cre;
exports.chare = chare;
var c_lass = b.cla + b.css;
exports.c_lass = c_lass;
var ctemp = b.cte + b.cmp;
exports.ctemp = ctemp;
var chref = b.chr + b.cef;
exports.chref = chref;
var cABC = b.cAB + b.cC;
exports.cABC = cABC;
var came = b.cam + b.ce;
exports.came = came;
var cile = b.cil + b.ce;
exports.cile = cile;
var cext = b.cex + b.ct;
exports.cext = cext;
var cExt = b.cEx + b.ct;
exports.cExt = cExt;
var clpha = b.clp + b.cha;
exports.clpha = clpha;
var ccon = b.cco + b.cn;
exports.ccon = ccon;
var cCon = b.cCo + b.cn;
exports.cCon = cCon;
var cable = b.cab + b.cle;
exports.cable = cable;
var calid = b.cal + b.cid;
exports.calid = calid;
var cing = b.cin + b.cg;
exports.cing = cing;
var ctring = b.ctr + cing;
exports.ctring = ctring;
var cbject = b.cbj + b.cec + b.ct;
exports.cbject = cbject;
var cata = b.cat + b.ca;
exports.cata = cata;
var cMac = b.cMa + b.cc;
exports.cMac = cMac;
var cPre = b.cPr + b.ce;
exports.cPre = cPre;
var cpre = b.cpr + b.ce;
exports.cpre = cpre;
var cPRE = b.cPR + b.cE;
exports.cPRE = cPRE;
var colid = b.col + b.cid;
exports.colid = colid;
var cynch = b.cyn + b.cch;
exports.cynch = cynch;
var celete = b.cel + b.cet + b.ce;
exports.celete = celete;
var cnner = b.cnn + b.cer;
exports.cnner = cnner;
var click = b.cli + b.cck;
exports.click = click;
var cctrl = b.cct + b.crl;
exports.cctrl = cctrl;
var cype = b.cyp + b.ce;
exports.cype = cype;
var ceql = b.ce + b.cql;
exports.ceql = ceql;
var cEql = b.cE + b.cql;
exports.cEql = cEql;
var cemb = b.cem + b.cb;
exports.cemb = cemb;
var cOperat = b.cOp + b.cer + b.cat;
exports.cOperat = cOperat;
var cility = b.cil + b.cit + b.cy;
exports.cility = cility;
var cibility = b.cib + cility;
exports.cibility = cibility;
var cisibility = b.cis + cibility;
exports.cisibility = cisibility;
var cith = b.ci + b.cth;
exports.cith = cith;
var crent = b.cre + b.cnt;
exports.crent = crent;
var carent = b.ca + crent;
exports.carent = carent;
var ctor = b.cto + b.cr;
exports.ctor = ctor;
var cctor = b.cc + ctor;
exports.cctor = cctor;
var celector = b.cel + b.cec + ctor;
exports.celector = celector;
var coolean = b.coo + b.cle + b.can;
exports.coolean = coolean;
var check = b.che + b.cck;
exports.check = check;
var child = b.chi + b.cld;
exports.child = child;
var cibling = b.cib + b.cl + cing;
exports.cibling = cibling;
var cttributes = b.ctt + b.cri + b.cbu + b.cte + b.cs;
exports.cttributes = cttributes;
var cisabled = b.cis + cable + b.cd;
exports.cisabled = cisabled;
var cilter = b.cil + b.ct + b.cer;
exports.cilter = cilter;
var code = b.cod + b.ce;
exports.code = code;
var cide = b.cid + b.ce;
exports.cide = cide;
var cuary = b.cua + b.cry;
exports.cuary = cuary;
var cies = b.cie + b.cs;
exports.cies = cies;
var ctive = b.cti + b.cve;
exports.ctive = ctive;
var cate = b.cat + b.ce;
exports.cate = cate;
var cdate = b.cd + cate;
exports.cdate = cdate;
var cter = b.cte + b.cr;
exports.cter = cter;
var cment = b.cme + b.cnt;
exports.cment = cment;
var cMENT = b.cME + b.cNT;
exports.cMENT = cMENT;
var cime = b.cim + b.ce;
exports.cime = cime;
var cInter = b.cIn + cter;
exports.cInter = cInter;
var cinter = b.cin + cter;
exports.cinter = cinter;
var cmed = b.cme + b.cd;
exports.cmed = cmed;
var cath = b.cat + b.ch;
exports.cath = cath;
var cvar = b.cva + b.cr;
exports.cvar = cvar;
var cVar = b.cVa + b.cr;
exports.cVar = cVar;
var ciew = b.cie + b.cw;
exports.ciew = ciew;
var cete = b.cet + b.ce;
exports.cete = cete;
var cace = b.cac + b.ce;
exports.cace = cace;
var cder = b.cd + b.cer;
exports.cder = cder;
var ccore = b.cco + b.cre;
exports.ccore = ccore;
var cert = b.cer + b.ct;
exports.cert = cert;
var c_ase = b.cas + b.ce; // 'case' is a reserved word

exports.c_ase = c_ase;
var cunt = b.cun + b.ct;
exports.cunt = cunt;
var caft = b.caf + b.ct;
exports.caft = caft;
var cops = b.cop + b.cs;
exports.cops = cops;
var cOPS = b.cOP + b.cS;
exports.cOPS = cOPS;
var cinv = b.cin + b.cv;
exports.cinv = cinv;
var cInv = b.cIn + b.cv;
exports.cInv = cInv;
var cral = b.cra + b.cl;
exports.cral = cral;
var cara = b.car + b.ca;
exports.cara = cara;
var cpro = b.cpr + b.co;
exports.cpro = cpro;
var cPro = b.cPr + b.co;
exports.cPro = cPro;
var cPRO = b.cPR + b.cO;
exports.cPRO = cPRO;
var cino = b.cin + b.co;
exports.cino = cino;
var cese = b.ces + b.ce;
exports.cese = cese;
var cish = b.cis + b.ch;
exports.cish = cish;
var ccel = b.cce + b.cl;
exports.ccel = ccel;
var cCel = b.cCe + b.cl;
exports.cCel = cCel;
var cian = b.cia + b.cn;
exports.cian = cian;
var cous = b.cou + b.cs;
exports.cous = cous;
var ceous = b.ce + cous;
exports.ceous = ceous;
var cung = b.cun + b.cg;
exports.cung = cung;
var cary = b.car + b.cy;
exports.cary = cary;
var cMis = b.cMi + b.cs;
exports.cMis = cMis;
var cmis = b.cmi = b.cs;
exports.cmis = cmis;
var cource = b.cou + b.crc + b.ce;
exports.cource = cource;
var cmine = b.cmi + b.cne; //b.cet + b.cer + b.cmi + b.cne; //cmine;

exports.cmine = cmine;
var cetermine = b.ce + b.ct + b.ce + b.cr + b.cm + b.ci + b.cn + b.ce;
exports.cetermine = cetermine;
var cingle = b.cin + b.cgl + b.ce;
exports.cingle = cingle;
var clace = b.cla + b.cce;
exports.clace = clace;
var ceplace = b.cep + clace;
exports.ceplace = ceplace;
var clean = b.cle + b.can;
exports.clean = clean;
var cvert = b.cve + b.crt;
exports.cvert = cvert;
var convert = b.con + cvert;
exports.convert = convert;
var crate = b.cra + b.cte;
exports.crate = crate;
var cenerate = b.cen + b.ce + crate;
exports.cenerate = cenerate;
var cdom = b.cdo + b.cm;
exports.cdom = cdom;
var candom = b.can + cdom;
exports.candom = candom;
var create = b.cre + cate;
exports.create = create;
var carning = b.car + b.cn + cing;
exports.carning = carning;
var crror = b.crr + b.cor;
exports.crror = crror;
var card = b.car + b.cd;
exports.card = card;
var cose = b.cos + b.ce;
exports.cose = cose;
var cray = b.cra + b.cy;
exports.cray = cray;
var cmel = b.cme + b.cl;
exports.cmel = cmel;
var cound = b.cou + b.cnd;
exports.cound = cound;
var cdot = b.cd + b.cot;
exports.cdot = cdot;
var cDot = b.cD + b.cot;
exports.cDot = cDot;
var cart = b.car + b.ct;
exports.cart = cart;
var cize = b.ciz + b.ce;
exports.cize = cize;
var cmal = b.cma + b.cl;
exports.cmal = cmal;
var cormal = b.cor + cmal;
exports.cormal = cormal;
var cegree = b.ceg + b.cre + b.ce;
exports.cegree = cegree;
var ccir = b.cci + b.cr;
exports.ccir = ccir;
var cCir = b.cCi + b.cr;
exports.cCir = cCir;
var ccle = b.ccl + b.ce;
exports.ccle = ccle;
var care = b.car + b.ce;
exports.care = care;
var cquare = b.cqu + care;
exports.cquare = cquare;
var cgle = b.cgl + b.ce;
exports.cgle = cgle;
var ctri = b.ctr + b.ci;
exports.ctri = ctri;
var cTri = b.cTr + b.ci;
exports.cTri = cTri;
var crect = b.cre + b.cct;
exports.crect = crect;
var cRect = b.cRe + b.cct;
exports.cRect = cRect;
var coct = b.coc + b.ct;
exports.coct = coct;
var cOct = b.cOc + b.ct;
exports.cOct = cOct;
var cgon = b.cgo + b.cn;
exports.cgon = cgon;
var chex = b.che + b.cx;
exports.chex = chex;
var cHex = b.cHe + b.cx;
exports.cHex = cHex;
var chep = b.che + b.cp;
exports.chep = chep;
var cHep = b.cHe + b.cp;
exports.cHep = cHep;
var cnon = b.cno + b.cn;
exports.cnon = cnon;
var cNon = b.cNo + b.cn;
exports.cNon = cNon;
var crap = b.cra + b.cp;
exports.crap = crap;
var czoid = b.czo + b.cid;
exports.czoid = czoid;
var cfra = b.cfr + b.ca;
exports.cfra = cfra;
var cFra = b.cFr + b.ca;
exports.cFra = cFra;
var ctrans = b.ctr + b.can + b.cs;
exports.ctrans = ctrans;
var cTrans = b.cTr + b.can + b.cs;
exports.cTrans = cTrans;
var cint = b.cin + b.ct;
exports.cint = cint;
var cloc = b.clo + b.cc;
exports.cloc = cloc;
var cLoc = b.cLo + b.cc;
exports.cLoc = cLoc;
var cation = b.ca + ction;
exports.cation = cation;
var cort = b.cor + b.ct;
exports.cort = cort;
var csim = b.csi + b.cm;
exports.csim = csim;
var cSim = b.cSi + b.cm;
exports.cSim = cSim;
var cplify = b.cpl + b.cif + b.cy;
exports.cplify = cplify;
var csol = b.cso + b.cl;
exports.csol = csol;
var ccomp = b.cco + b.cmp;
exports.ccomp = ccomp;
var cComp = b.cCo + b.cmp;
exports.cComp = cComp;
var cideo = b.cid + b.ceo;
exports.cideo = cideo;
var cnteger = b.cnt + b.ceg + b.cer;
exports.cnteger = cnteger;
var cloat = b.clo + b.cat;
exports.cloat = cloat;
var cong = b.con + b.cg;
exports.cong = cong;
var chort = b.ch + cort;
exports.chort = chort;
var cble = b.cbl + b.ce;
exports.cble = cble;
var couble = b.cou + cble;
exports.couble = couble;
var cduct = b.cdu + b.cct;
exports.cduct = cduct;
var cgate = b.cga + b.cte;
exports.cgate = cgate;
var cggregate = b.cgg + b.cre + cgate;
exports.cggregate = cggregate;
var cDiff = b.cDi + b.cff;
exports.cDiff = cDiff;
var cence = b.cen + b.cce;
exports.cence = cence;
var cain = b.cai + b.cn;
exports.cain = cain;
var ctch = b.ctc + b.ch;
exports.ctch = ctch;
var cween = b.cwe + b.cen;
exports.cween = cween;
var cord = b.cor + b.cd;
exports.cord = cord;
var cmap = b.cma + b.cp;
exports.cmap = cmap;
var cMap = b.cMa + b.cp;
exports.cMap = cMap;
var cess = b.ce + b.css;
exports.cess = cess;
var ceat = b.ce + b.cat;
exports.ceat = ceat;
var chen = b.ch + b.cen;
exports.chen = chen;
var chan = b.ch + b.can;
exports.chan = chan;
var clica = b.cli + b.cca;
exports.clica = clica;
var capp = b.ca + b.cpp;
exports.capp = capp;
var cApp = b.cA + b.cpp;
exports.cApp = cApp;
var coot = b.coo + b.ct;
exports.coot = coot;
var crse = b.crs + b.ce;
exports.crse = crse;
var carse = b.ca + crse;
exports.carse = carse;
var cwap = b.cwa + b.cp;
exports.cwap = cwap;
var cward = b.cwa + b.crd;
exports.cward = cward;
var clash = b.cla + b.csh;
exports.clash = clash;
var cENV = b.cE + b.cNV;
exports.cENV = cENV;
var cavigate = b.cav + b.cig + cate;
exports.cavigate = cavigate;
var cness = b.cne + b.css;
exports.cness = cness;
var cusiness = b.cus + b.ci + cness;
exports.cusiness = cusiness;
var cule = b.cul + b.ce;
exports.cule = cule;
var cait = b.cai + b.ct;
exports.cait = cait;
var cesh = b.ce + b.csh;
exports.cesh = cesh;
var cval = b.cv + b.cal;
exports.cval = cval;
var cemo = b.ce + b.cmo;
exports.cemo = cemo;
var cmon = b.cmo + b.cn;
exports.cmon = cmon;
var common = b.com + cmon;
exports.common = common;
var clti = b.clt + b.ci;
exports.clti = clti;
var cmulti = b.cmu + clti;
exports.cmulti = cmulti;
var cMulti = b.cMu + clti;
exports.cMulti = cMulti;
var cple = b.cpl + b.ce;
exports.cple = cple;
var cnal = b.cna + b.cl;
exports.cnal = cnal;
var cexe = b.cex + b.ce;
exports.cexe = cexe;
var cExe = b.cEx + b.ce;
exports.cExe = cExe;
var cper = b.cpe + b.cr;
exports.cper = cper;
var cPer = b.cPe + b.cr;
exports.cPer = cPer;
var casic = b.cas + b.cic;
exports.casic = casic;
var cvent = b.cve + b.cnt;
exports.cvent = cvent;
var carg = b.car + b.cg;
exports.carg = carg;
var cArg = b.cAr + b.cg;
exports.cArg = cArg;
var crive = b.cri + b.cve;
exports.crive = crive;
var cloy = b.clo + b.cy;
exports.cloy = cloy;
var cumber = b.cum + b.cb + b.cer;
exports.cumber = cumber;
var ccond = b.cco + b.cnd;
exports.ccond = ccond;
var ctieth = b.cti + b.ce + b.cth;
exports.ctieth = ctieth;
var cont = b.con + b.ct;
exports.cont = cont;
var cull = b.cul + b.cl; // Boolean strings

exports.cull = cull;
var cTrue = b.cT + crue;
exports.cTrue = cTrue;
var cFalse = b.cF + calse;
exports.cFalse = cFalse;
var ctrue = b.ct + crue;
exports.ctrue = ctrue;
var cfalse = b.cf + calse;
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
var cnotEql = cnot + cEql;
exports.cnotEql = cnotEql;
var cnoteql = cnot + ceql;
exports.cnoteql = cnoteql;
var cNotEql = cNot + cEql;
exports.cNotEql = cNotEql;
var cNoteql = cNot + ceql; // Test Status

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
var cDoc = b.cDo + b.cc;
exports.cDoc = cDoc;
var cCom = b.cCo + b.cm;
exports.cCom = cCom;
var cZip = b.cZ + b.cip;
exports.cZip = cZip;
var czip = b.cz + b.cip;
exports.czip = czip;
var cTxt = b.cT + b.cxt;
exports.cTxt = cTxt;
var ctxt = b.ct + b.cxt;
exports.ctxt = ctxt;
var ccsv = b.ccs + b.cv;
exports.ccsv = ccsv;
var cCsv = b.cCs + b.cv;
exports.cCsv = cCsv;
var cXml = b.cXm + b.cl;
exports.cXml = cXml;
var cxml = b.cxm + b.cl;
exports.cxml = cxml;
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
var cthree = b.ct + chree;
exports.cthree = cthree;
var cfour = b.cf + cour;
exports.cfour = cfour;
var cfive = b.cf + cive;
exports.cfive = cfive;
var csix = b.cs + b.cix;
exports.csix = csix;
var cseven = b.cs + ceven;
exports.cseven = cseven;
var ceight = b.ce + cight;
exports.ceight = ceight;
var cnine = b.cn + cine;
exports.cnine = cnine;
var cten = b.ct + b.cen;
exports.cten = cten;
var celeven = b.ce + cleven;
exports.celeven = celeven;
var ctwelve = b.ct + cwelve;
exports.ctwelve = ctwelve;
var cthirteen = b.ct + chir + cteen;
exports.cthirteen = cthirteen;
var cfourteen = cfour + cteen;
exports.cfourteen = cfourteen;
var cfifteen = b.cf + b.cif + cteen;
exports.cfifteen = cfifteen;
var csixteen = csix + cteen;
exports.csixteen = csixteen;
var cseventeen = cseven + cteen;
exports.cseventeen = cseventeen;
var ceighteen = b.ce + cigh + cteen;
exports.ceighteen = ceighteen;
var cnineteen = cnine + cteen;
exports.cnineteen = cnineteen;
var ctwenty = b.ct + cwenty;
exports.ctwenty = ctwenty;
var cthirty = b.ct + chirty;
exports.cthirty = cthirty;
var cfourty = cfour + b.cty;
exports.cfourty = cfourty;
var cfifty = b.cf + cifty;
exports.cfifty = cfifty;
var csixty = csix + b.cty;
exports.csixty = csixty;
var cseventy = cseven + b.cty;
exports.cseventy = cseventy;
var ceighty = ceight + b.cy;
exports.ceighty = ceighty;
var cninety = cnine + b.cty;
exports.cninety = cninety;
var chundred = b.ch + cundred;
exports.chundred = chundred;
var cthousand = b.ct + chousand;
exports.cthousand = cthousand;
var cmillion = b.cm + cillion;
exports.cmillion = cmillion;
var cbillion = b.cb + cillion;
exports.cbillion = cbillion;
var ctrillion = b.ctr + cillion;
exports.ctrillion = ctrillion;
var cOne = b.cO + b.cne;
exports.cOne = cOne;
var cTwo = b.cT + b.cwo;
exports.cTwo = cTwo;
var cThree = b.cT + chree;
exports.cThree = cThree;
var cFour = b.cF + cour;
exports.cFour = cFour;
var cFive = b.cF + cive;
exports.cFive = cFive;
var cSix = b.cS + b.cix;
exports.cSix = cSix;
var cSeven = b.cS + ceven;
exports.cSeven = cSeven;
var cEight = b.cE + cight;
exports.cEight = cEight;
var cNine = b.cN + cine;
exports.cNine = cNine;
var cTen = b.cT + b.cen;
exports.cTen = cTen;
var cEleven = b.cE + cleven;
exports.cEleven = cEleven;
var cTwelve = b.cT + cwelve;
exports.cTwelve = cTwelve;
var cThirteen = b.cT + chir + cteen;
exports.cThirteen = cThirteen;
var cFourteen = cFour + cteen;
exports.cFourteen = cFourteen;
var cFifteen = b.cF + b.cif + cteen;
exports.cFifteen = cFifteen;
var cSixteen = cSix + cteen;
exports.cSixteen = cSixteen;
var cSeventeen = cSeven + cteen;
exports.cSeventeen = cSeventeen;
var cEighteen = b.cE + cigh + cteen;
exports.cEighteen = cEighteen;
var cNineteen = cNine + cteen;
exports.cNineteen = cNineteen;
var cTwenty = b.cT + cwenty;
exports.cTwenty = cTwenty;
var cThirty = b.cT + chirty;
exports.cThirty = cThirty;
var cFourty = cFour + b.cty;
exports.cFourty = cFourty;
var cFifty = b.cF + cifty;
exports.cFifty = cFifty;
var cSixty = cSix + b.cty;
exports.cSixty = cSixty;
var cSeventy = cSeven + b.cty;
exports.cSeventy = cSeventy;
var cEighty = cEight + b.cy;
exports.cEighty = cEighty;
var cNinety = cNine + b.cty;
exports.cNinety = cNinety;
var cHundred = b.cH + cundred;
exports.cHundred = cHundred;
var cThousand = b.cT + chousand;
exports.cThousand = cThousand;
var cMillion = b.cM + cillion;
exports.cMillion = cMillion;
var cBillion = b.cB + cillion;
exports.cBillion = cBillion;
var cTrillion = b.cTr + cillion; // String Number Values

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
var ctwentieth = b.ctw + b.cen + ctieth;
exports.ctwentieth = ctwentieth;
var cTwentieth = b.cTw + b.cen + ctieth;
exports.cTwentieth = cTwentieth;
var cthirtieth = b.cth + b.cir + ctieth;
exports.cthirtieth = cthirtieth;
var cThirtieth = b.cTh + b.cir + ctieth;
exports.cThirtieth = cThirtieth;
var cfourtieth = cfour + ctieth;
exports.cfourtieth = cfourtieth;
var cFourtieth = cFour + ctieth;
exports.cFourtieth = cFourtieth;
var cfiftieth = b.cfi + b.cf + ctieth;
exports.cfiftieth = cfiftieth;
var cFiftieth = b.cFi + b.cf + ctieth;
exports.cFiftieth = cFiftieth;
var csixtieth = csix + ctieth;
exports.csixtieth = csixtieth;
var cSixtieth = cSix + ctieth;
exports.cSixtieth = cSixtieth;
var cseventieth = cseven + ctieth;
exports.cseventieth = cseventieth;
var cSeventieth = cSeven + ctieth;
exports.cSeventieth = cSeventieth;
var ceightieth = ceight + ctieth;
exports.ceightieth = ceightieth;
var cEightieth = cEight + ctieth;
exports.cEightieth = cEightieth;
var cninetieth = cnine + ctieth;
exports.cninetieth = cninetieth;
var cNinetieth = cNine + ctieth;
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
var csecond = b.cse + ccond;
exports.csecond = csecond;
var cSecond = b.cSe + ccond;
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
var ccent = b.cce + b.cnt;
exports.ccent = ccent;
var cCent = b.cCe + b.cnt;
exports.cCent = cCent;
var cCentur = cCent + b.cur; // b.cC + b.cen + b.ctu + b.cr; // 'Centur';

exports.cCentur = cCentur;
var cCentury = cCentur + b.cy;
exports.cCentury = cCentury;
var cCenturies = cCentur + cies;
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
var cNovember = b.cNo + b.cv + cemb + b.cer; // 'Nov' + cemb + cer;

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
var cVictor = b.cVi + cctor; // 'Victor';

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
var cJanuary = b.cJa + b.cn + cuary; // 'January';

exports.cJanuary = cJanuary;
var cFebuary = b.cFe + b.cb + cuary; // 'Febuary';

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
var cSeptember = b.cSe + b.cpt + cemb + b.cer; // 'Sept' + cemb + cer;

exports.cSeptember = cSeptember;
var cOctober = b.cOc + b.cto + b.cb + b.cer; // 'Octob' + cer;

exports.cOctober = cOctober;
var cDecember = b.cDe + b.cc + b.cemb + b.cer; // Miscelanious

exports.cDecember = cDecember;
var cress = b.cre + b.css;
exports.cress = cress;