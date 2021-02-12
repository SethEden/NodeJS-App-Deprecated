"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cTER = exports.cter = exports.cdate = exports.cate = exports.ctive = exports.cies = exports.cuary = exports.cide = exports.code = exports.cilter = exports.cisabled = exports.cttributes = exports.cttribute = exports.cibling = exports.child = exports.check = exports.coolean = exports.celector = exports.cctor = exports.ctor = exports.carent = exports.crent = exports.cith = exports.cisibility = exports.cibility = exports.cility = exports.cili = exports.cOperat = exports.cemb = exports.cEql = exports.ceql = exports.cype = exports.cctrl = exports.click = exports.cnner = exports.celete = exports.cynch = exports.colid = exports.cPRE = exports.cPre = exports.cpre = exports.cMac = exports.cATA = exports.cata = exports.cbject = exports.ctring = exports.cING = exports.cing = exports.cALID = exports.calid = exports.cable = exports.cCon = exports.ccon = exports.clpha = exports.cExt = exports.cext = exports.cile = exports.came = exports.cABC = exports.chref = exports.ctemp = exports.c_lass = exports.chare = exports.cest = exports.cage = exports.cITION = exports.cition = exports.cmation = exports.cction = exports.cTION = exports.ction = exports.calse = exports.crue = exports.cillion = exports.cill = exports.csion = exports.cION = exports.cion = exports.chousand = exports.csand = exports.cand = exports.cundred = exports.cund = exports.cblue = exports.cgreen = exports.cred = exports.cifty = exports.chirty = exports.cwenty = exports.cigh = exports.chir = exports.cteen = exports.cwelve = exports.cleven = exports.cine = exports.cight = exports.ceven = exports.cive = exports.cour = exports.chree = void 0;
exports.cFra = exports.cfra = exports.czoid = exports.crap = exports.cNon = exports.cnon = exports.cHep = exports.chep = exports.cHex = exports.chex = exports.cgon = exports.cOct = exports.coct = exports.cRect = exports.crect = exports.cRec = exports.crec = exports.cTri = exports.ctri = exports.cgle = exports.cquare = exports.care = exports.ccle = exports.cCir = exports.ccir = exports.cegree = exports.cormal = exports.cmal = exports.cize = exports.cart = exports.cDot = exports.cdot = exports.cound = exports.cmel = exports.cray = exports.cose = exports.card = exports.cRROR = exports.crror = exports.carning = exports.carn = exports.create = exports.candom = exports.cdom = exports.cenerate = exports.crate = exports.convert = exports.cvert = exports.cVer = exports.cver = exports.clean = exports.ceplace = exports.clace = exports.cingle = exports.cetermine = exports.cmine = exports.cource = exports.cmis = exports.cMis = exports.ciary = exports.cary = exports.cung = exports.ceous = exports.cous = exports.cian = exports.cCel = exports.ccel = exports.cish = exports.cese = exports.cino = exports.cPRO = exports.cPro = exports.cpro = exports.cara = exports.cral = exports.cInv = exports.cinv = exports.cOPS = exports.cops = exports.caft = exports.cunt = exports.c_ASE = exports.c_ase = exports.cert = exports.ccore = exports.cCor = exports.ccor = exports.cder = exports.cace = exports.cete = exports.ciew = exports.cVar = exports.cvar = exports.cath = exports.cmed = exports.cInter = exports.cinter = exports.cime = exports.cMENT = exports.cment = void 0;
exports.cANGE = exports.cange = exports.cite = exports.cyan = exports.clue = exports.creen = exports.cCol = exports.ccol = exports.cMod = exports.cmod = exports.cull = exports.cont = exports.ctieth = exports.cieth = exports.ccond = exports.cumber = exports.cLOY = exports.cloy = exports.crive = exports.cArg = exports.carg = exports.cvent = exports.cVEN = exports.cven = exports.casic = exports.cPer = exports.cper = exports.cExe = exports.cexe = exports.cnal = exports.cPLE = exports.cple = exports.cMulti = exports.cmulti = exports.clti = exports.common = exports.cmon = exports.cemo = exports.cval = exports.cesh = exports.cait = exports.cule = exports.cusiness = exports.cness = exports.cavigate = exports.cENV = exports.clash = exports.cward = exports.cwap = exports.cARSE = exports.carse = exports.cRSE = exports.crse = exports.coot = exports.cAPP = exports.cApp = exports.capp = exports.cLICA = exports.clica = exports.chan = exports.chen = exports.ceat = exports.cress = exports.cRes = exports.cres = exports.cess = exports.cMap = exports.cmap = exports.cord = exports.cween = exports.ctch = exports.cain = exports.cence = exports.cenc = exports.cDiff = exports.cggregate = exports.cgate = exports.cduct = exports.couble = exports.cble = exports.chort = exports.cong = exports.cloat = exports.cnteger = exports.cideo = exports.cComp = exports.ccomp = exports.csol = exports.cplify = exports.cSim = exports.csim = exports.cort = exports.cation = exports.cLoc = exports.cloc = exports.cint = exports.cTrans = exports.ctrans = exports.cTra = exports.ctra = void 0;
exports.croject = exports.cect = exports.cGest = exports.cgest = exports.cSug = exports.csug = exports.cLay = exports.clay = exports.cAIL = exports.cail = exports.cSha = exports.csha = exports.cics = exports.cPhon = exports.cphon = exports.ctope = exports.cIso = exports.ciso = exports.cstant = exports.cbola = exports.cbol = exports.cHyper = exports.chyper = exports.cUni = exports.cuni = exports.cSec = exports.csec = exports.crtic = exports.cQua = exports.cqua = exports.curve = exports.cane = exports.cubic = exports.cCOM = exports.cCom = exports.ccom = exports.cLin = exports.clin = exports.cind = exports.cASS = exports.cass = exports.crgb = exports.cear = exports.crage = exports.csis = exports.cAna = exports.cana = exports.cPROD = exports.cProd = exports.cprod = exports.cDEV = exports.cDev = exports.cdev = exports.cack = exports.cric = exports.cMet = exports.cmet = exports.ctain = exports.cReg = exports.creg = exports.cAll = exports.call = exports.cdex = exports.cator = exports.cGen = exports.cgen = exports.crint = exports.cTart = exports.ctart = exports.cTar = exports.ctar = exports.cTert = exports.ctert = exports.cmit = exports.cmary = exports.cPri = exports.cpri = exports.cncer = exports.cSeq = exports.cseq = exports.cbout = exports.cias = exports.crame = exports.cram = exports.clob = exports.cMAND = exports.cmand = exports.cCust = exports.ccust = exports.cust = exports.centa = exports.cent = exports.cules = exports.cCli = exports.ccli = exports.cAve = exports.cave = exports.cdrom = exports.cular = exports.cost = void 0;
exports.cush = exports.cFORE = exports.cfore = exports.cera = exports.cison = exports.cson = exports.crch = exports.cist = exports.cted = exports.cmpt = exports.cnto = exports.ceak = exports.ciod = exports.cute = exports.ctit = exports.cSub = exports.csub = exports.csert = exports.cDel = exports.cdel = exports.cSym = exports.csym = exports.cure = exports.ctrol = exports.cTrad = exports.ctrad = exports.ctional = exports.cional = exports.cance = exports.cSuf = exports.csuf = exports.cific = exports.cfic = exports.cSpec = exports.cspec = exports.cger = exports.clete = exports.cAULT = exports.cault = exports.cULT = exports.cult = exports.cafe = exports.ctay = exports.cice = exports.cood = exports.coop = exports.ceed = exports.comb = exports.cerm = exports.cern = exports.cizer = exports.clon = exports.clus = exports.come = exports.cized = exports.cOpt = exports.copt = exports.cuto = exports.cFul = exports.cful = exports.cike = exports.could = exports.cExp = exports.cexp = exports.csive = exports.cCur = exports.ccur = exports.ceep = exports.colve = exports.colv = exports.cron = exports.crev = exports.cease = exports.cere = exports.ccate = exports.cDup = exports.cdup = exports.cQue = exports.cque = exports.cEqu = exports.cequ = exports.cStor = exports.cstor = exports.cDest = exports.cdest = exports.cLOP = exports.clop = exports.cments = exports.cified = exports.cfied = exports.cied = exports.cual = exports.cshp = exports.ccolr = exports.cild = exports.cChi = exports.ccent = exports.ceta = exports.cnion = exports.cell = void 0;
exports.clat = exports.cRef = exports.cref = exports.cifies = exports.cSid = exports.csid = exports.cten = exports.cned = exports.cght = exports.cCau = exports.ccau = exports.clud = exports.clude = exports.cude = exports.cured = exports.cerg = exports.cERGE = exports.cerge = exports.cRGE = exports.crge = exports.coker = exports.cote = exports.cick = exports.cStd = exports.cstd = exports.core = exports.ceen = exports.cRea = exports.crea = exports.cture = exports.cruc = exports.cAMPLE = exports.cample = exports.crgs = exports.cFin = exports.cfin = exports.cther = exports.cNom = exports.cnom = exports.cPara = exports.cpara = exports.cinal = exports.cOri = exports.cori = exports.cplac = exports.cSup = exports.csup = exports.cify = exports.clse = exports.cook = exports.cpand = exports.cMas = exports.cmas = exports.cemp = exports.cCESS = exports.ccess = exports.cvel = exports.cUSH = void 0;

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
var chree = b.chr + b.cee; // hree

exports.chree = chree;
var cour = b.cou + b.cr; // our

exports.cour = cour;
var cive = b.civ + b.ce; // ive

exports.cive = cive;
var ceven = b.cev + b.cen; // even

exports.ceven = ceven;
var cight = b.cig + b.cht; // ight

exports.cight = cight;
var cine = b.cin + b.ce; // ine

exports.cine = cine;
var cleven = b.cl + b.cev + b.cen; // leven

exports.cleven = cleven;
var cwelve = b.cwe + b.clv + b.ce; // welve

exports.cwelve = cwelve;
var cteen = b.ct + b.cee + b.cn; // teen

exports.cteen = cteen;
var chir = b.chi + b.cr; // hir

exports.chir = chir;
var cigh = b.cig + b.ch; // igh

exports.cigh = cigh;
var cwenty = b.cw + b.cen + b.cty; // wenty

exports.cwenty = cwenty;
var chirty = b.chi + b.cr + b.cty; // hirty

exports.chirty = chirty;
var cifty = b.cif + b.cty; // ifty

exports.cifty = cifty;
var cred = b.cre + b.cd; // red

exports.cred = cred;
var cgreen = b.cgr + b.cee + b.cn; // green

exports.cgreen = cgreen;
var cblue = b.cbl + b.cue; // blue

exports.cblue = cblue;
var cund = b.cun + b.cd; // und

exports.cund = cund;
var cundred = cund + cred; // undred

exports.cundred = cundred;
var cand = b.can + b.cd; // and

exports.cand = cand;
var csand = b.cs + cand; // sand

exports.csand = csand;
var chousand = b.cho + b.cu + csand; // housand

exports.chousand = chousand;
var cion = b.cio + b.cn; // ion

exports.cion = cion;
var cION = b.cIO + b.cN; // ION

exports.cION = cION;
var csion = b.cs + cion; // sion

exports.csion = csion;
var cill = b.ci + b.cll; // ill

exports.cill = cill;
var cillion = cill + cion; // illion

exports.cillion = cillion;
var crue = b.cru + b.ce; // rue

exports.crue = crue;
var calse = b.cal + b.cse; // alse

exports.calse = calse;
var ction = b.ct + cion; // tion

exports.ction = ction;
var cTION = b.cT + cION; // TION

exports.cTION = cTION;
var cction = b.cc + ction; // ction

exports.cction = cction;
var cmation = b.cma + ction; // mation

exports.cmation = cmation;
var cition = b.ci + ction; // ition

exports.cition = cition;
var cITION = b.cI + cTION; // ITION

exports.cITION = cITION;
var cage = b.cag + b.ce; // age

exports.cage = cage;
var cest = b.ces + b.ct; // est

exports.cest = cest;
var chare = b.cha + b.cre; // hare

exports.chare = chare;
var c_lass = b.cla + b.css; // lass

exports.c_lass = c_lass;
var ctemp = b.cte + b.cmp; // temp

exports.ctemp = ctemp;
var chref = b.chr + b.cef; // href

exports.chref = chref;
var cABC = b.cAB + b.cC; // ABC

exports.cABC = cABC;
var came = b.cam + b.ce; // ame

exports.came = came;
var cile = b.cil + b.ce; // ile

exports.cile = cile;
var cext = b.cex + b.ct; // ext

exports.cext = cext;
var cExt = b.cEx + b.ct; // Ext

exports.cExt = cExt;
var clpha = b.clp + b.cha; // lpha

exports.clpha = clpha;
var ccon = b.cco + b.cn; // con

exports.ccon = ccon;
var cCon = b.cCo + b.cn; // Con

exports.cCon = cCon;
var cable = b.cab + b.cle; // able

exports.cable = cable;
var calid = b.cal + b.cid; // alid

exports.calid = calid;
var cALID = b.cAL + b.cID; // ALID

exports.cALID = cALID;
var cing = b.cin + b.cg; // ing

exports.cing = cing;
var cING = b.cIN + b.cG; // ING

exports.cING = cING;
var ctring = b.ctr + cing; // tring

exports.ctring = ctring;
var cbject = b.cbj + b.cec + b.ct; // bject

exports.cbject = cbject;
var cata = b.cat + b.ca; // ata

exports.cata = cata;
var cATA = b.cAT + b.cA; // ATA

exports.cATA = cATA;
var cMac = b.cMa + b.cc; // Mac

exports.cMac = cMac;
var cpre = b.cpr + b.ce; // pre

exports.cpre = cpre;
var cPre = b.cPr + b.ce; // Pre

exports.cPre = cPre;
var cPRE = b.cPR + b.cE; // PRE

exports.cPRE = cPRE;
var colid = b.col + b.cid; // olid

exports.colid = colid;
var cynch = b.cyn + b.cch; // ynch

exports.cynch = cynch;
var celete = b.cel + b.cet + b.ce; // elete

exports.celete = celete;
var cnner = b.cnn + b.cer; // nner

exports.cnner = cnner;
var click = b.cli + b.cck; // lick

exports.click = click;
var cctrl = b.cct + b.crl; // ctrl

exports.cctrl = cctrl;
var cype = b.cyp + b.ce; // ype

exports.cype = cype;
var ceql = b.ce + b.cql; // eql

exports.ceql = ceql;
var cEql = b.cE + b.cql; // Eql

exports.cEql = cEql;
var cemb = b.cem + b.cb; // emb

exports.cemb = cemb;
var cOperat = b.cOp + b.cer + b.cat; // Operat

exports.cOperat = cOperat;
var cili = b.cil + b.ci; // ili

exports.cili = cili;
var cility = cili + b.cty; // ility

exports.cility = cility;
var cibility = b.cib + cility; // ibility

exports.cibility = cibility;
var cisibility = b.cis + cibility; // isibility

exports.cisibility = cisibility;
var cith = b.ci + b.cth; // ith

exports.cith = cith;
var crent = b.cre + b.cnt; // rent

exports.crent = crent;
var carent = b.ca + crent; // arent

exports.carent = carent;
var ctor = b.cto + b.cr; // tor

exports.ctor = ctor;
var cctor = b.cc + ctor; // ctor

exports.cctor = cctor;
var celector = b.cel + b.cec + ctor; // elector

exports.celector = celector;
var coolean = b.coo + b.cle + b.can; // oolean

exports.coolean = coolean;
var check = b.che + b.cck; // heck

exports.check = check;
var child = b.chi + b.cld; // hild

exports.child = child;
var cibling = b.cib + b.cl + cing; // ibling

exports.cibling = cibling;
var cttribute = b.ctt + b.cri + b.cbu + b.cte; //ttribute

exports.cttribute = cttribute;
var cttributes = cttribute + b.cs; // ttributes

exports.cttributes = cttributes;
var cisabled = b.cis + cable + b.cd; // isabled

exports.cisabled = cisabled;
var cilter = b.cil + b.ct + b.cer; // ilter

exports.cilter = cilter;
var code = b.cod + b.ce; // ode

exports.code = code;
var cide = b.cid + b.ce; // ide

exports.cide = cide;
var cuary = b.cua + b.cry; // uary

exports.cuary = cuary;
var cies = b.cie + b.cs; // ies

exports.cies = cies;
var ctive = b.cti + b.cve; // tive

exports.ctive = ctive;
var cate = b.cat + b.ce; // ate

exports.cate = cate;
var cdate = b.cd + cate; // date

exports.cdate = cdate;
var cter = b.cte + b.cr; // ter

exports.cter = cter;
var cTER = b.cTE + b.cR; // TER

exports.cTER = cTER;
var cment = b.cme + b.cnt; // ment

exports.cment = cment;
var cMENT = b.cME + b.cNT; // MENT

exports.cMENT = cMENT;
var cime = b.cim + b.ce; // ime

exports.cime = cime;
var cinter = b.cin + cter; // inter

exports.cinter = cinter;
var cInter = b.cIn + cter; // Inter

exports.cInter = cInter;
var cmed = b.cme + b.cd; // med

exports.cmed = cmed;
var cath = b.cat + b.ch; // ath

exports.cath = cath;
var cvar = b.cva + b.cr; // var

exports.cvar = cvar;
var cVar = b.cVa + b.cr; // Var

exports.cVar = cVar;
var ciew = b.cie + b.cw; // iew

exports.ciew = ciew;
var cete = b.cet + b.ce; // ete

exports.cete = cete;
var cace = b.cac + b.ce; // ace

exports.cace = cace;
var cder = b.cd + b.cer; // der

exports.cder = cder;
var ccor = b.cco + b.cr; // cor

exports.ccor = ccor;
var cCor = b.cCo + b.cr; // Cor

exports.cCor = cCor;
var ccore = ccor + b.ce; // core

exports.ccore = ccore;
var cert = b.cer + b.ct; // ert

exports.cert = cert;
var c_ase = b.cas + b.ce; // ase 'case' is a reserved word

exports.c_ase = c_ase;
var c_ASE = b.cAS + b.cE; // ASE

exports.c_ASE = c_ASE;
var cunt = b.cun + b.ct; // unt

exports.cunt = cunt;
var caft = b.caf + b.ct; // aft

exports.caft = caft;
var cops = b.cop + b.cs; // ops

exports.cops = cops;
var cOPS = b.cOP + b.cS; // OPS

exports.cOPS = cOPS;
var cinv = b.cin + b.cv; // inv

exports.cinv = cinv;
var cInv = b.cIn + b.cv; // Inv

exports.cInv = cInv;
var cral = b.cra + b.cl; // ral

exports.cral = cral;
var cara = b.car + b.ca; // ara

exports.cara = cara;
var cpro = b.cpr + b.co; // pro

exports.cpro = cpro;
var cPro = b.cPr + b.co; // Pro

exports.cPro = cPro;
var cPRO = b.cPR + b.cO; // PRO

exports.cPRO = cPRO;
var cino = b.cin + b.co; // ino

exports.cino = cino;
var cese = b.ces + b.ce; // ese

exports.cese = cese;
var cish = b.cis + b.ch; // ish

exports.cish = cish;
var ccel = b.cce + b.cl; // cel

exports.ccel = ccel;
var cCel = b.cCe + b.cl; // Cel

exports.cCel = cCel;
var cian = b.cia + b.cn; // ian

exports.cian = cian;
var cous = b.cou + b.cs; // ous

exports.cous = cous;
var ceous = b.ce + cous; // eous

exports.ceous = ceous;
var cung = b.cun + b.cg; // ung

exports.cung = cung;
var cary = b.car + b.cy; // ary

exports.cary = cary;
var ciary = b.ci + cary; // iary

exports.ciary = ciary;
var cMis = b.cMi + b.cs; // Mis

exports.cMis = cMis;
var cmis = b.camai + b.cs; // mis

exports.cmis = cmis;
var cource = b.cou + b.crc + b.ce; // ource

exports.cource = cource;
var cmine = b.camai + b.cne; // mine
//b.cet + b.cer + b.cmi + b.cne; //cmine;

exports.cmine = cmine;
var cetermine = b.ce + b.ct + b.ce + b.cr + b.cm + b.ci + b.cn + b.ce; // etermine

exports.cetermine = cetermine;
var cingle = b.cin + b.cgl + b.ce; // ingle

exports.cingle = cingle;
var clace = b.cla + b.cce; // lace

exports.clace = clace;
var ceplace = b.cep + clace; // eplace

exports.ceplace = ceplace;
var clean = b.cle + b.can; // lean

exports.clean = clean;
var cver = b.cve + b.cr; // ver

exports.cver = cver;
var cVer = b.cVe + b.cr; // Ver

exports.cVer = cVer;
var cvert = cver + b.ct; // vert

exports.cvert = cvert;
var convert = b.con + cvert; // onvert

exports.convert = convert;
var crate = b.cra + b.cte; // crate

exports.crate = crate;
var cenerate = b.cen + b.ce + crate; // enerate

exports.cenerate = cenerate;
var cdom = b.cdo + b.cm; // dom

exports.cdom = cdom;
var candom = b.can + cdom; // andom

exports.candom = candom;
var create = b.cre + cate; // reate

exports.create = create;
var carn = b.car + b.cn; // arn

exports.carn = carn;
var carning = carn + cing; // arning

exports.carning = carning;
var crror = b.crr + b.cor; // rror

exports.crror = crror;
var cRROR = b.cRR + b.cOR; // RROR

exports.cRROR = cRROR;
var card = b.car + b.cd; // ard

exports.card = card;
var cose = b.cos + b.ce; // ose

exports.cose = cose;
var cray = b.cra + b.cy; // ray

exports.cray = cray;
var cmel = b.cme + b.cl; // mel

exports.cmel = cmel;
var cound = b.cou + b.cnd; // ound

exports.cound = cound;
var cdot = b.cd + b.cot; // dot

exports.cdot = cdot;
var cDot = b.cD + b.cot; // Dot

exports.cDot = cDot;
var cart = b.car + b.ct; // art

exports.cart = cart;
var cize = b.ciz + b.ce; // ize

exports.cize = cize;
var cmal = b.cma + b.cl; // mal

exports.cmal = cmal;
var cormal = b.cor + cmal; // ormal

exports.cormal = cormal;
var cegree = b.ceg + b.cre + b.ce; // egree

exports.cegree = cegree;
var ccir = b.cci + b.cr; // cir

exports.ccir = ccir;
var cCir = b.cCi + b.cr; // Cir

exports.cCir = cCir;
var ccle = b.ccl + b.ce; // cle

exports.ccle = ccle;
var care = b.car + b.ce; // are

exports.care = care;
var cquare = b.cqu + care; // quare

exports.cquare = cquare;
var cgle = b.cgl + b.ce; // gle

exports.cgle = cgle;
var ctri = b.ctr + b.ci; // tri

exports.ctri = ctri;
var cTri = b.cTr + b.ci; // Tri

exports.cTri = cTri;
var crec = b.cre + b.cc; // rec

exports.crec = crec;
var cRec = b.cRe + b.cc; // Rec

exports.cRec = cRec;
var crect = crec + b.ct; // rect

exports.crect = crect;
var cRect = cRec + b.ct; // Rect

exports.cRect = cRect;
var coct = b.coc + b.ct; // oct

exports.coct = coct;
var cOct = b.cOc + b.ct; // Oct

exports.cOct = cOct;
var cgon = b.cgo + b.cn; // gon

exports.cgon = cgon;
var chex = b.che + b.cx; // hex

exports.chex = chex;
var cHex = b.cHe + b.cx; // Hex

exports.cHex = cHex;
var chep = b.che + b.cp; // hep

exports.chep = chep;
var cHep = b.cHe + b.cp; // Hep

exports.cHep = cHep;
var cnon = b.cno + b.cn; // non

exports.cnon = cnon;
var cNon = b.cNo + b.cn; // Non

exports.cNon = cNon;
var crap = b.cra + b.cp; // rap

exports.crap = crap;
var czoid = b.czo + b.cid; // zoid

exports.czoid = czoid;
var cfra = b.cfr + b.ca; // fra

exports.cfra = cfra;
var cFra = b.cFr + b.ca; // Fra

exports.cFra = cFra;
var ctra = b.ctr + b.ca; // tra

exports.ctra = ctra;
var cTra = b.cTr + b.ca; // Tra

exports.cTra = cTra;
var ctrans = ctra + b.cns; // trans

exports.ctrans = ctrans;
var cTrans = cTra + b.cns; // Trans

exports.cTrans = cTrans;
var cint = b.cin + b.ct; // int

exports.cint = cint;
var cloc = b.clo + b.cc; // loc

exports.cloc = cloc;
var cLoc = b.cLo + b.cc; // Loc

exports.cLoc = cLoc;
var cation = b.ca + ction; // ation

exports.cation = cation;
var cort = b.cor + b.ct; // ort

exports.cort = cort;
var csim = b.csi + b.cm; // sim

exports.csim = csim;
var cSim = b.cSi + b.cm; // Sim

exports.cSim = cSim;
var cplify = b.cpl + b.cif + b.cy; // plify

exports.cplify = cplify;
var csol = b.cso + b.cl; // sol

exports.csol = csol;
var ccomp = b.cco + b.cmp; // comp

exports.ccomp = ccomp;
var cComp = b.cCo + b.cmp; // Comp

exports.cComp = cComp;
var cideo = b.cid + b.ceo; // ideo

exports.cideo = cideo;
var cnteger = b.cnt + b.ceg + b.cer; // nteger

exports.cnteger = cnteger;
var cloat = b.clo + b.cat; // loat

exports.cloat = cloat;
var cong = b.con + b.cg; // ong

exports.cong = cong;
var chort = b.ch + cort; // hort

exports.chort = chort;
var cble = b.cbl + b.ce; // ble

exports.cble = cble;
var couble = b.cou + cble; // ouble

exports.couble = couble;
var cduct = b.cdu + b.cct; // duct

exports.cduct = cduct;
var cgate = b.cga + b.cte; // gate

exports.cgate = cgate;
var cggregate = b.cgg + b.cre + cgate; // ggregate

exports.cggregate = cggregate;
var cDiff = b.cDi + b.cff; // Diff

exports.cDiff = cDiff;
var cenc = b.cen + b.cc; // enc

exports.cenc = cenc;
var cence = cenc + b.ce; // ence

exports.cence = cence;
var cain = b.cai + b.cn; // ain

exports.cain = cain;
var ctch = b.ctc + b.ch; // tch

exports.ctch = ctch;
var cween = b.cwe + b.cen; // ween

exports.cween = cween;
var cord = b.cor + b.cd; // ord

exports.cord = cord;
var cmap = b.cma + b.cp; // map

exports.cmap = cmap;
var cMap = b.cMa + b.cp; // Map

exports.cMap = cMap;
var cess = b.ce + b.css; // ess

exports.cess = cess;
var cres = b.cre + b.cs; // res

exports.cres = cres;
var cRes = b.cRe + b.cs; // Res

exports.cRes = cRes;
var cress = b.cr + cess; // ress

exports.cress = cress;
var ceat = b.ce + b.cat; // eat

exports.ceat = ceat;
var chen = b.ch + b.cen; // hen

exports.chen = chen;
var chan = b.ch + b.can; // han

exports.chan = chan;
var clica = b.cli + b.cca; // lica

exports.clica = clica;
var cLICA = b.cLI + b.cCA; // LICA

exports.cLICA = cLICA;
var capp = b.ca + b.cpp; // app

exports.capp = capp;
var cApp = b.cA + b.cpp; // App

exports.cApp = cApp;
var cAPP = b.cA + b.cPP; // APP

exports.cAPP = cAPP;
var coot = b.coo + b.ct; // oot

exports.coot = coot;
var crse = b.crs + b.ce; // rse

exports.crse = crse;
var cRSE = b.cRS + b.cE; // RSE

exports.cRSE = cRSE;
var carse = b.ca + crse; // arse

exports.carse = carse;
var cARSE = b.cA + cRSE; // ARSE

exports.cARSE = cARSE;
var cwap = b.cwa + b.cp; // wap

exports.cwap = cwap;
var cward = b.cwa + b.crd; // ward

exports.cward = cward;
var clash = b.cla + b.csh; // lash

exports.clash = clash;
var cENV = b.cE + b.cNV; // ENV

exports.cENV = cENV;
var cavigate = b.cav + b.cig + cate; // avigate

exports.cavigate = cavigate;
var cness = b.cne + b.css; // ness

exports.cness = cness;
var cusiness = b.cus + b.ci + cness; // usiness

exports.cusiness = cusiness;
var cule = b.cul + b.ce; // ule

exports.cule = cule;
var cait = b.cai + b.ct; // ait

exports.cait = cait;
var cesh = b.ce + b.csh; // esh

exports.cesh = cesh;
var cval = b.cv + b.cal; // val

exports.cval = cval;
var cemo = b.ce + b.cmo; // emo

exports.cemo = cemo;
var cmon = b.cmo + b.cn; // mon

exports.cmon = cmon;
var common = b.com + cmon; // ommon

exports.common = common;
var clti = b.clt + b.ci; // lti

exports.clti = clti;
var cmulti = b.cmu + clti; // multi

exports.cmulti = cmulti;
var cMulti = b.cMu + clti; // Multi

exports.cMulti = cMulti;
var cple = b.cpl + b.ce; // ple

exports.cple = cple;
var cPLE = b.cPL + b.cE; // PLE

exports.cPLE = cPLE;
var cnal = b.cna + b.cl; // nal

exports.cnal = cnal;
var cexe = b.cex + b.ce; // exe

exports.cexe = cexe;
var cExe = b.cEx + b.ce; // Exe

exports.cExe = cExe;
var cper = b.cpe + b.cr; // per

exports.cper = cper;
var cPer = b.cPe + b.cr; // Per

exports.cPer = cPer;
var casic = b.cas + b.cic; // asic

exports.casic = casic;
var cven = b.cve + b.cn; // ven

exports.cven = cven;
var cVEN = b.cVE + b.cN; // VEN

exports.cVEN = cVEN;
var cvent = cven + b.ct; // vent;

exports.cvent = cvent;
var carg = b.car + b.cg; // arg

exports.carg = carg;
var cArg = b.cAr + b.cg; // Arg

exports.cArg = cArg;
var crive = b.cri + b.cve; // rive

exports.crive = crive;
var cloy = b.clo + b.cy; // loy

exports.cloy = cloy;
var cLOY = b.cLO + b.cY; // LOY

exports.cLOY = cLOY;
var cumber = b.cum + b.cb + b.cer; // umber

exports.cumber = cumber;
var ccond = b.cco + b.cnd; // cond

exports.ccond = ccond;
var cieth = b.cie + b.cth; // ieth

exports.cieth = cieth;
var ctieth = b.ct + cieth; // tieth

exports.ctieth = ctieth;
var cont = b.con + b.ct; // ont

exports.cont = cont;
var cull = b.cul + b.cl; // ull

exports.cull = cull;
var cmod = b.cmo + b.cd; // mod

exports.cmod = cmod;
var cMod = b.cMo + b.cd; // Mod

exports.cMod = cMod;
var ccol = b.cco + b.cl; // col

exports.ccol = ccol;
var cCol = b.cCo + b.cl; // Col

exports.cCol = cCol;
var creen = b.cre + b.cen; // reen

exports.creen = creen;
var clue = b.clu + b.ce; // lue Referance to Tron here! :-P

exports.clue = clue;
var cyan = b.cy + b.can; // yan

exports.cyan = cyan;
var cite = b.cit + b.ce; // ite

exports.cite = cite;
var cange = b.can + b.cge; // ange

exports.cange = cange;
var cANGE = b.cAN + b.cGE; // ANGE

exports.cANGE = cANGE;
var cost = b.cos + b.ct; // ost

exports.cost = cost;
var cular = b.cul + b.car; // ular

exports.cular = cular;
var cdrom = b.cdr + b.com; // drom

exports.cdrom = cdrom;
var cave = b.cav + b.ce; // ave

exports.cave = cave;
var cAve = b.cAv + b.ce; // Ave

exports.cAve = cAve;
var ccli = b.ccl + b.ci; // cli

exports.ccli = ccli;
var cCli = b.cCl + b.ci; // Cli

exports.cCli = cCli;
var cules = b.cul + b.ces; // ules

exports.cules = cules;
var cent = b.cen + b.ct; // ent

exports.cent = cent;
var centa = cent + b.ca; // enta

exports.centa = centa;
var cust = b.cus + b.ct; // ust

exports.cust = cust;
var ccust = b.cc + cust; // cust

exports.ccust = ccust;
var cCust = b.cC + cust; // Cust

exports.cCust = cCust;
var cmand = b.cma + b.cnd; // mand

exports.cmand = cmand;
var cMAND = b.cMA + b.cND; // MAND

exports.cMAND = cMAND;
var clob = b.clo + b.cb; // lob

exports.clob = clob;
var cram = b.cra + b.cm; // ram

exports.cram = cram;
var crame = cram + b.ce; // rame

exports.crame = crame;
var cias = b.cia + b.cs; // ias

exports.cias = cias;
var cbout = b.cbo + b.cut; // bout Bout time we added this one! LOL

exports.cbout = cbout;
var cseq = b.cse + b.cq; // seq

exports.cseq = cseq;
var cSeq = b.cSe + b.cq; // Seq

exports.cSeq = cSeq;
var cncer = b.cnc + b.cer; // ncer

exports.cncer = cncer;
var cpri = b.cpr + b.ci; // pri

exports.cpri = cpri;
var cPri = b.cPr + b.ci; // Pri

exports.cPri = cPri;
var cmary = b.cma + b.cry; // mary

exports.cmary = cmary;
var cmit = b.camai + b.ct; // mit

exports.cmit = cmit;
var ctert = b.cte + b.crt; // tert

exports.ctert = ctert;
var cTert = b.cTe + b.crt; // Tert

exports.cTert = cTert;
var ctar = b.cta + b.cr; // tar

exports.ctar = ctar;
var cTar = b.cTa + b.cr; // Tar

exports.cTar = cTar;
var ctart = ctar + b.ct; // tart

exports.ctart = ctart;
var cTart = cTar + b.ct; // Tart poptart....LOL

exports.cTart = cTart;
var crint = b.cri + b.cnt; // rint

exports.crint = crint;
var cgen = b.cge + b.cn; // gen

exports.cgen = cgen;
var cGen = b.cGe + b.cn; // Gen

exports.cGen = cGen;
var cator = b.cat + b.cor; // ator

exports.cator = cator;
var cdex = b.cde + b.cx; // dex

exports.cdex = cdex;
var call = b.cal + b.cl; // all

exports.call = call;
var cAll = b.cAl + b.cl; // All

exports.cAll = cAll;
var creg = b.cre + b.cg; // reg

exports.creg = creg;
var cReg = b.cRe + b.cg; // Reg

exports.cReg = cReg;
var ctain = b.cta + b.cin; // tain

exports.ctain = ctain;
var cmet = b.cme + b.ct; // met

exports.cmet = cmet;
var cMet = b.cMe + b.ct; // Met

exports.cMet = cMet;
var cric = b.cri + b.cc; // ric

exports.cric = cric;
var cack = b.cac + b.ck; // ack

exports.cack = cack;
var cdev = b.cde + b.cv; // dev

exports.cdev = cdev;
var cDev = b.cDe + b.cv; // Dev

exports.cDev = cDev;
var cDEV = b.cDE + b.cV; // DEV

exports.cDEV = cDEV;
var cprod = b.cpr + b.cod; // prod

exports.cprod = cprod;
var cProd = b.cPr + b.cod; // Prod

exports.cProd = cProd;
var cPROD = b.cPR + b.cOD; // PROD

exports.cPROD = cPROD;
var cana = b.can + b.ca; // ana

exports.cana = cana;
var cAna = b.cAn + b.ca; // Ana

exports.cAna = cAna;
var csis = b.csi + b.cs; // sis

exports.csis = csis;
var crage = b.cra + b.cge; // rage

exports.crage = crage;
var cear = b.cea + b.cr; // ear

exports.cear = cear;
var crgb = b.crg + b.cb; // rgb

exports.crgb = crgb;
var cass = b.ca + b.css; // ass

exports.cass = cass;
var cASS = b.cA + b.cSS; // ASS

exports.cASS = cASS;
var cind = b.cin + b.cd; // ind

exports.cind = cind;
var clin = b.cli + b.cn; // lin

exports.clin = clin;
var cLin = b.cLi + b.cn; // Lin

exports.cLin = cLin;
var ccom = b.cco + b.cm; // com

exports.ccom = ccom;
var cCom = b.cCo + b.cm; // Com

exports.cCom = cCom;
var cCOM = b.cCO + b.cM; // COM

exports.cCOM = cCOM;
var cubic = b.cub + b.cic; // ubic

exports.cubic = cubic;
var cane = b.can + b.ce; // ane

exports.cane = cane;
var curve = b.cur + b.cve; // urve

exports.curve = curve;
var cqua = b.cqu + b.ca; // qua

exports.cqua = cqua;
var cQua = b.cQu + b.ca; // Qua

exports.cQua = cQua;
var crtic = b.crt + b.cic; // rtic

exports.crtic = crtic;
var csec = b.cse + b.cc; // sec

exports.csec = csec;
var cSec = b.cSe + b.cc; // Sec

exports.cSec = cSec;
var cuni = b.cun + b.ci; // uni

exports.cuni = cuni;
var cUni = b.cUn + b.ci; // Uni

exports.cUni = cUni;
var chyper = b.chy + cper; // hyper

exports.chyper = chyper;
var cHyper = b.cHy + cper; // Hyper

exports.cHyper = cHyper;
var cbol = b.cbo + b.cl; // bol

exports.cbol = cbol;
var cbola = cbol + b.ca; // bola

exports.cbola = cbola;
var cstant = b.cst + b.can + b.ct; //stant

exports.cstant = cstant;
var ciso = b.cis + b.co; // iso

exports.ciso = ciso;
var cIso = b.cIs + b.co; // Iso

exports.cIso = cIso;
var ctope = b.cto + b.cpe; // tope

exports.ctope = ctope;
var cphon = b.cph + b.con; // phon

exports.cphon = cphon;
var cPhon = b.cPh + b.con; // Phon

exports.cPhon = cPhon;
var cics = b.cic + b.cs; // ics

exports.cics = cics;
var csha = b.csh + b.ca; // sha

exports.csha = csha;
var cSha = b.cSh + b.ca; // Sha

exports.cSha = cSha;
var cail = b.cai + b.cl; // ail

exports.cail = cail;
var cAIL = b.cAI + b.cL; // AIL

exports.cAIL = cAIL;
var clay = b.cla + b.cy; // lay

exports.clay = clay;
var cLay = b.cLa + b.cy; // Lay

exports.cLay = cLay;
var csug = b.csu + b.cg; // sug

exports.csug = csug;
var cSug = b.cSu + b.cg; // Sug

exports.cSug = cSug;
var cgest = b.cge + b.cst; // gest

exports.cgest = cgest;
var cGest = b.cGe + b.cst; // Gest

exports.cGest = cGest;
var cect = b.cec + b.ct; // ect

exports.cect = cect;
var croject = b.cro + b.cj + cect; // roject

exports.croject = croject;
var cell = b.cel + b.cl; // ell

exports.cell = cell;
var cnion = b.cni + b.con; // nion

exports.cnion = cnion;
var ceta = b.cet + b.ca; // eta

exports.ceta = ceta;
var ccent = b.cce + b.cnt; // cent

exports.ccent = ccent;
var cChi = b.cCh + b.ci; // Chi

exports.cChi = cChi;
var cild = b.cil + b.cd; // ild

exports.cild = cild;
var ccolr = b.cco + b.clr; // colr

exports.ccolr = ccolr;
var cshp = b.csh + b.cp; // shp

exports.cshp = cshp;
var cual = b.cua + b.cl; // ual

exports.cual = cual;
var cied = b.cie + b.cd; // ied

exports.cied = cied;
var cfied = b.cf + cied; // fied

exports.cfied = cfied;
var cified = b.cif + cied; // ified

exports.cified = cified;
var cments = cment + b.cs; // ments

exports.cments = cments;
var clop = b.clo + b.cp; // lop

exports.clop = clop;
var cLOP = b.cLO + b.cP; // LOP

exports.cLOP = cLOP;
var cdest = b.cde + b.cst; // dest

exports.cdest = cdest;
var cDest = b.cDe + b.cst; // Dest

exports.cDest = cDest;
var cstor = b.cst + b.cor; // stor

exports.cstor = cstor;
var cStor = b.cSt + b.cor; // Stor

exports.cStor = cStor;
var cequ = b.ceq + b.cu; // equ

exports.cequ = cequ;
var cEqu = b.cEq + b.cu; // Equ

exports.cEqu = cEqu;
var cque = b.cqu + b.ce; // que

exports.cque = cque;
var cQue = b.cQu + b.ce; // Que

exports.cQue = cQue;
var cdup = b.cdu + b.cp; // dup

exports.cdup = cdup;
var cDup = b.cDu + b.cp; // Dup

exports.cDup = cDup;
var ccate = b.cca + b.cte; // cate

exports.ccate = ccate;
var cere = b.cer + b.ce; // ere

exports.cere = cere;
var cease = b.cea + b.cse; // ease

exports.cease = cease;
var crev = b.cre + b.cv; // rev

exports.crev = crev;
var cron = b.cro + b.cn; // ron

exports.cron = cron;
var colv = b.col + b.cv; // olv

exports.colv = colv;
var colve = colv + b.ce; // olve

exports.colve = colve;
var ceep = b.cee + b.cp; // eep

exports.ceep = ceep;
var ccur = b.ccu + b.cr; // cur

exports.ccur = ccur;
var cCur = b.cCu + b.cr; // Cur

exports.cCur = cCur;
var csive = b.csi + b.cve; // sive

exports.csive = csive;
var cexp = b.cex + b.cp; // exp

exports.cexp = cexp;
var cExp = b.cEx + b.cp; // Exp

exports.cExp = cExp;
var could = b.cou + b.cld; // ould

exports.could = could;
var cike = b.cik + b.ce; // ike

exports.cike = cike;
var cful = b.cfu + b.cl; // ful

exports.cful = cful;
var cFul = b.cFu + b.cl; // Ful

exports.cFul = cFul;
var cuto = b.cut + b.co; // uto

exports.cuto = cuto;
var copt = b.cop + b.ct; // opt

exports.copt = copt;
var cOpt = b.cOp + b.ct; // Opt

exports.cOpt = cOpt;
var cized = b.ciz + b.ced; // ized

exports.cized = cized;
var come = b.com + b.ce; // ome

exports.come = come;
var clus = b.clu + b.cs; // lus

exports.clus = clus;
var clon = b.clo + b.cn; // lon

exports.clon = clon;
var cizer = b.ciz + b.cer; // izer

exports.cizer = cizer;
var cern = b.cer + b.cn; // ern

exports.cern = cern;
var cerm = b.cer + b.cm; // erm

exports.cerm = cerm;
var comb = b.com + b.cb; // omb

exports.comb = comb;
var ceed = b.cee + b.cd; // eed

exports.ceed = ceed;
var coop = b.coo + b.cp; // oop

exports.coop = coop;
var cood = b.coo + b.cd; // ood

exports.cood = cood;
var cice = b.cic + b.ce; // ice

exports.cice = cice;
var ctay = b.cta + b.cy; // tay

exports.ctay = ctay;
var cafe = b.caf + b.ce; // afe

exports.cafe = cafe;
var cult = b.cul + b.ct; // ult

exports.cult = cult;
var cULT = b.cUL + b.cT; // ULT

exports.cULT = cULT;
var cault = b.ca + cult; // ault

exports.cault = cault;
var cAULT = b.cA + cULT; // AULT

exports.cAULT = cAULT;
var clete = b.cle + b.cte; // lete

exports.clete = clete;
var cger = b.cge + b.cr; // ger

exports.cger = cger;
var cspec = b.csp + b.cec; // spec

exports.cspec = cspec;
var cSpec = b.cSp + b.cec; // Spec

exports.cSpec = cSpec;
var cfic = b.cfi + b.cc; // fic

exports.cfic = cfic;
var cific = b.ci + cfic; // ific

exports.cific = cific;
var csuf = b.csu + b.cf; // suf

exports.csuf = csuf;
var cSuf = b.cSu + b.cf; // Suf

exports.cSuf = cSuf;
var cance = b.can + b.cce; // ance

exports.cance = cance;
var cional = b.cio + cnal; // ional

exports.cional = cional;
var ctional = b.ct + cional; // tional

exports.ctional = ctional;
var ctrad = ctra + b.cd; // trad - ad is some how a special reserved word of some kind.

exports.ctrad = ctrad;
var cTrad = cTra + b.cd; // Trad - ad is some how a special reserved word of some kind.

exports.cTrad = cTrad;
var ctrol = b.ctr + b.col; // trol

exports.ctrol = ctrol;
var cure = b.cur + b.ce; // ure

exports.cure = cure;
var csym = b.csy + b.cm; // sym

exports.csym = csym;
var cSym = b.cSy + b.cm; // Sym

exports.cSym = cSym;
var cdel = b.cde + b.cl; // del

exports.cdel = cdel;
var cDel = b.cDe + b.cl; // Del

exports.cDel = cDel;
var csert = b.cs + cert; // sert

exports.csert = csert;
var csub = b.csu + b.cb; // sub

exports.csub = csub;
var cSub = b.cSu + b.cb; // Sub

exports.cSub = cSub;
var ctit = b.cti + b.ct; // tit

exports.ctit = ctit;
var cute = b.cut + b.ce; // ute

exports.cute = cute;
var ciod = b.cio + b.cd; // iod

exports.ciod = ciod;
var ceak = b.cea + b.ck; // eak

exports.ceak = ceak;
var cnto = b.cnt + b.co; // nto

exports.cnto = cnto;
var cmpt = b.cmp + b.ct; // mpt

exports.cmpt = cmpt;
var cted = b.cte + b.cd; // ted

exports.cted = cted;
var cist = b.cis + b.ct; // ist

exports.cist = cist;
var crch = b.crc + b.ch; // rch

exports.crch = crch;
var cson = b.cso + b.cn; // son

exports.cson = cson;
var cison = b.ci + cson; // ison

exports.cison = cison;
var cera = b.cer + b.ca; // era

exports.cera = cera;
var cfore = b.cfo + b.cre; // fore

exports.cfore = cfore;
var cFORE = b.cFO + b.cRE; // FORE

exports.cFORE = cFORE;
var cush = b.cus + b.ch; // ush

exports.cush = cush;
var cUSH = b.cUS + b.cH; // USH

exports.cUSH = cUSH;
var cvel = b.cve + b.cl; // vel

exports.cvel = cvel;
var ccess = b.cce + b.css; // cess

exports.ccess = ccess;
var cCESS = b.cCE + b.cSS; // CESS

exports.cCESS = cCESS;
var cemp = b.cem + b.cp; // emp

exports.cemp = cemp;
var cmas = b.cma + b.cs; // mas

exports.cmas = cmas;
var cMas = b.cMa + b.cs; // Mas

exports.cMas = cMas;
var cpand = b.cpa + b.cnd; // pand

exports.cpand = cpand;
var cook = b.coo + b.ck; // ook

exports.cook = cook;
var clse = b.cls + b.ce; // lse

exports.clse = clse;
var cify = b.cif + b.cy; // ify

exports.cify = cify;
var csup = b.csu + b.cp; // sup

exports.csup = csup;
var cSup = b.cSu + b.cp; // Sup

exports.cSup = cSup;
var cplac = b.cpl + b.cac; // plac

exports.cplac = cplac;
var cori = b.cor + b.ci; // ori

exports.cori = cori;
var cOri = b.cOr + b.ci; // Ori

exports.cOri = cOri;
var cinal = b.cin + b.cal; // inal

exports.cinal = cinal;
var cpara = b.cpa + b.cra; // para

exports.cpara = cpara;
var cPara = b.cPa + b.cra; // Para

exports.cPara = cPara;
var cnom = b.cno + b.cm; // nom

exports.cnom = cnom;
var cNom = b.cNo + b.cm; // Nom

exports.cNom = cNom;
var cther = b.cth + b.cer; // ther

exports.cther = cther;
var cfin = b.cfi + b.cn; // fin

exports.cfin = cfin;
var cFin = b.cFi + b.cn; // Fin

exports.cFin = cFin;
var crgs = b.crg + b.cs; // rgs

exports.crgs = crgs;
var cample = b.cam + cple; // ample

exports.cample = cample;
var cAMPLE = b.cAM + cPLE; // AMPLE

exports.cAMPLE = cAMPLE;
var cruc = b.cru + b.cc; // ruc

exports.cruc = cruc;
var cture = b.ct + cure; // ture

exports.cture = cture;
var crea = b.cre + b.ca; // rea

exports.crea = crea;
var cRea = b.cRe + b.ca; // Rea

exports.cRea = cRea;
var ceen = b.cee + b.cn; // een

exports.ceen = ceen;
var core = b.cor + b.ce; // ore

exports.core = core;
var cstd = b.cst + b.cd; // std

exports.cstd = cstd;
var cStd = b.cSt + b.cd; // Std

exports.cStd = cStd;
var cick = b.cic + b.ck; // ick

exports.cick = cick;
var cote = b.cot + b.ce; // ote

exports.cote = cote;
var coker = b.cok + b.cer; // oker

exports.coker = coker;
var crge = b.crg + b.ce; // rge

exports.crge = crge;
var cRGE = b.cRG + b.cE; // RGE

exports.cRGE = cRGE;
var cerge = b.ce + crge; // erge

exports.cerge = cerge;
var cERGE = b.cE + cRGE; // ERGE

exports.cERGE = cERGE;
var cerg = b.cer + b.cg; // erg

exports.cerg = cerg;
var cured = b.cu + cred; // ured

exports.cured = cured;
var cude = b.cud + b.ce; // ude

exports.cude = cude;
var clude = b.cl + cude; // lude

exports.clude = clude;
var clud = b.clu + b.cd; // lud

exports.clud = clud;
var ccau = b.cca + b.cu; // cau

exports.ccau = ccau;
var cCau = b.cCa + b.cu; // Cau

exports.cCau = cCau;
var cght = b.cgh + b.ct; // ght

exports.cght = cght;
var cned = b.cne + b.cd; // ned

exports.cned = cned;
var cten = b.cte + b.cn; // ten // This is also defined in the numeric constants

exports.cten = cten;
var csid = b.csi + b.cd; // sid

exports.csid = csid;
var cSid = b.cSi + b.cd; // Sid

exports.cSid = cSid;
var cifies = b.cif + cies; // ifies

exports.cifies = cifies;
var cref = b.cre + b.cf; // ref

exports.cref = cref;
var cRef = b.cRe + b.cf; // Ref

exports.cRef = cRef;
var clat = b.cla + b.ct; // lat

exports.clat = clat;