"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cder = exports.cace = exports.cete = exports.ciew = exports.cVar = exports.cvar = exports.cath = exports.cmed = exports.cinter = exports.cInter = exports.cime = exports.cMENT = exports.cment = exports.cter = exports.cdate = exports.cate = exports.ctive = exports.cies = exports.cuary = exports.cide = exports.code = exports.cilter = exports.cisabled = exports.cttributes = exports.cibling = exports.child = exports.check = exports.coolean = exports.celector = exports.cctor = exports.ctor = exports.carent = exports.crent = exports.cith = exports.cisibility = exports.cibility = exports.cility = exports.cOperat = exports.cemb = exports.cEql = exports.ceql = exports.cype = exports.cctrl = exports.click = exports.cnner = exports.celete = exports.cynch = exports.colid = exports.cPRE = exports.cpre = exports.cPre = exports.cMac = exports.cata = exports.cbject = exports.ctring = exports.cing = exports.calid = exports.cable = exports.cCon = exports.ccon = exports.clpha = exports.cExt = exports.cext = exports.cile = exports.came = exports.cABC = exports.chref = exports.ctemp = exports.c_lass = exports.chare = exports.cest = exports.cage = exports.cction = exports.ction = exports.calse = exports.crue = exports.cillion = exports.csion = exports.cion = exports.chousand = exports.csand = exports.cand = exports.cundred = exports.cblue = exports.cgreen = exports.cred = exports.cifty = exports.chirty = exports.cwenty = exports.cigh = exports.chir = exports.cteen = exports.cwelve = exports.cleven = exports.cine = exports.cight = exports.ceven = exports.cive = exports.cour = exports.chree = void 0;
exports.couble = exports.cble = exports.chort = exports.cong = exports.cloat = exports.cnteger = exports.cideo = exports.cComp = exports.ccomp = exports.csol = exports.cplify = exports.cSim = exports.csim = exports.cort = exports.cation = exports.cLoc = exports.cloc = exports.cint = exports.cTrans = exports.ctrans = exports.cFra = exports.cfra = exports.czoid = exports.crap = exports.cNon = exports.cnon = exports.cHep = exports.chep = exports.cHex = exports.chex = exports.cgon = exports.cOct = exports.coct = exports.cRect = exports.crect = exports.cTri = exports.ctri = exports.cgle = exports.cquare = exports.care = exports.ccle = exports.cCir = exports.ccir = exports.cegree = exports.cormal = exports.cmal = exports.cize = exports.cart = exports.cDot = exports.cdot = exports.cound = exports.cmel = exports.cray = exports.cose = exports.card = exports.crror = exports.carning = exports.create = exports.candom = exports.cdom = exports.cenerate = exports.crate = exports.convert = exports.cvert = exports.cVer = exports.cver = exports.clean = exports.ceplace = exports.clace = exports.cingle = exports.cetermine = exports.cmine = exports.cource = exports.cmis = exports.cMis = exports.ciary = exports.cary = exports.cung = exports.ceous = exports.cous = exports.cian = exports.cCel = exports.ccel = exports.cish = exports.cese = exports.cino = exports.cPRO = exports.cPro = exports.cpro = exports.cara = exports.cral = exports.cInv = exports.cinv = exports.cOPS = exports.cops = exports.caft = exports.cunt = exports.c_ase = exports.cert = exports.ccore = void 0;
exports.cAll = exports.call = exports.cdex = exports.cator = exports.cGen = exports.cgen = exports.crint = exports.cTart = exports.ctart = exports.cTert = exports.ctert = exports.cmit = exports.cmary = exports.cPri = exports.cpri = exports.cncer = exports.cSeq = exports.cseq = exports.cbout = exports.cias = exports.crame = exports.clob = exports.cmand = exports.cCust = exports.ccust = exports.centa = exports.cent = exports.cules = exports.cCli = exports.ccli = exports.cAve = exports.cave = exports.cdrom = exports.cular = exports.cost = exports.cange = exports.cite = exports.cyan = exports.clue = exports.creen = exports.cCol = exports.ccol = exports.cMod = exports.cmod = exports.cull = exports.cont = exports.ctieth = exports.ccond = exports.cumber = exports.cloy = exports.crive = exports.cArg = exports.carg = exports.cvent = exports.cven = exports.casic = exports.cPer = exports.cper = exports.cExe = exports.cexe = exports.cnal = exports.cple = exports.cMulti = exports.cmulti = exports.clti = exports.common = exports.cmon = exports.cemo = exports.cval = exports.cesh = exports.cait = exports.cule = exports.cusiness = exports.cness = exports.cavigate = exports.cENV = exports.clash = exports.cward = exports.cwap = exports.carse = exports.crse = exports.coot = exports.cApp = exports.capp = exports.clica = exports.chan = exports.chen = exports.ceat = exports.cess = exports.cMap = exports.cmap = exports.cord = exports.cween = exports.ctch = exports.cain = exports.cence = exports.cDiff = exports.cggregate = exports.cgate = exports.cduct = void 0;
exports.cCom = exports.ccom = exports.cLin = exports.clin = exports.cind = exports.cass = exports.crgb = exports.cear = exports.crage = exports.csis = exports.cAna = exports.cana = exports.cDev = exports.cdev = exports.cack = exports.cric = exports.cMet = exports.cmet = exports.ctain = exports.cReg = exports.creg = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file phonics.constants.js
 * @module phonics-constants
 * @description Contains many re-usable phonetic constants and partial phrases and/or
 * partial words for re-usability, many of them derived from the basic-constants.
 * @requires module:basic-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Reusable Grammer
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
var csion = b.cs + cion;
exports.csion = csion;
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
var ciary = b.ci + cary;
exports.ciary = ciary;
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
var cver = b.cve + b.cr;
exports.cver = cver;
var cVer = b.cVe + b.cr;
exports.cVer = cVer;
var cvert = cver + b.ct;
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
var cven = b.cve + b.cn;
exports.cven = cven;
var cvent = cven + b.ct; // b.cve + b.cnt;

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
var cull = b.cul + b.cl;
exports.cull = cull;
var cmod = b.cmo + b.cd;
exports.cmod = cmod;
var cMod = b.cMo + b.cd;
exports.cMod = cMod;
var ccol = b.cco + b.cl;
exports.ccol = ccol;
var cCol = b.cCo + b.cl;
exports.cCol = cCol;
var creen = b.cre + b.cen;
exports.creen = creen;
var clue = b.clu + b.ce; // Referance to Tron here! :-P

exports.clue = clue;
var cyan = b.cy + b.can;
exports.cyan = cyan;
var cite = b.cit + b.ce;
exports.cite = cite;
var cange = b.can + b.cge;
exports.cange = cange;
var cost = b.cos + b.ct;
exports.cost = cost;
var cular = b.cul + b.car;
exports.cular = cular;
var cdrom = b.cdr + b.com;
exports.cdrom = cdrom;
var cave = b.cav + b.ce;
exports.cave = cave;
var cAve = b.cAv + b.ce;
exports.cAve = cAve;
var ccli = b.ccl + b.ci;
exports.ccli = ccli;
var cCli = b.cCl + b.ci;
exports.cCli = cCli;
var cules = b.cul + b.ces;
exports.cules = cules;
var cent = b.cen + b.ct;
exports.cent = cent;
var centa = cent + b.ca;
exports.centa = centa;
var ccust = b.ccu + b.cst;
exports.ccust = ccust;
var cCust = b.cCu + b.cst;
exports.cCust = cCust;
var cmand = b.cma + b.cnd;
exports.cmand = cmand;
var clob = b.clo + b.cb;
exports.clob = clob;
var crame = b.cra + b.cme;
exports.crame = crame;
var cias = b.cia + b.cs;
exports.cias = cias;
var cbout = b.cbo + b.cut; // Bout time we added this one! LOL

exports.cbout = cbout;
var cseq = b.cse + b.cq;
exports.cseq = cseq;
var cSeq = b.cSe + b.cq;
exports.cSeq = cSeq;
var cncer = b.cnc + b.cer;
exports.cncer = cncer;
var cpri = b.cpr + b.ci;
exports.cpri = cpri;
var cPri = b.cPr + b.ci;
exports.cPri = cPri;
var cmary = b.cma + b.cry;
exports.cmary = cmary;
var cmit = b.cmi + b.ct;
exports.cmit = cmit;
var ctert = b.cte + b.crt;
exports.ctert = ctert;
var cTert = b.cTe + b.crt;
exports.cTert = cTert;
var ctart = b.cta + b.crt;
exports.ctart = ctart;
var cTart = b.cTa + b.crt; // poptart....LOL

exports.cTart = cTart;
var crint = b.cri + b.cnt;
exports.crint = crint;
var cgen = b.cge + b.cn;
exports.cgen = cgen;
var cGen = b.cGe + b.cn;
exports.cGen = cGen;
var cator = b.cat + b.cor;
exports.cator = cator;
var cdex = b.cde + b.cx;
exports.cdex = cdex;
var call = b.cal + b.cl;
exports.call = call;
var cAll = b.cAl + b.cl;
exports.cAll = cAll;
var creg = b.cre + b.cg;
exports.creg = creg;
var cReg = b.cRe + b.cg;
exports.cReg = cReg;
var ctain = b.cta + b.cin;
exports.ctain = ctain;
var cmet = b.cme + b.ct;
exports.cmet = cmet;
var cMet = b.cMe + b.ct;
exports.cMet = cMet;
var cric = b.cri + b.cc;
exports.cric = cric;
var cack = b.cac + b.ck;
exports.cack = cack;
var cdev = b.cde + b.cv;
exports.cdev = cdev;
var cDev = b.cDe + b.cv;
exports.cDev = cDev;
var cana = b.can + b.ca;
exports.cana = cana;
var cAna = b.cAn + b.ca;
exports.cAna = cAna;
var csis = b.csi + b.cs;
exports.csis = csis;
var crage = b.cra + b.cge;
exports.crage = crage;
var cear = b.cea + b.cr;
exports.cear = cear;
var crgb = b.crg + b.cb;
exports.crgb = crgb;
var cass = b.ca + b.css;
exports.cass = cass;
var cind = b.cin + b.cd;
exports.cind = cind;
var clin = b.cli + b.cn;
exports.clin = clin;
var cLin = b.cLi + b.cn;
exports.cLin = cLin;
var ccom = b.cco + b.cm;
exports.ccom = ccom;
var cCom = b.cCo + b.cm;
exports.cCom = cCom;