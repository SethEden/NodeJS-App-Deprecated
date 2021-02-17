"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cTER = exports.cter = exports.cdate = exports.cate = exports.ctive = exports.cies = exports.cuary = exports.cide = exports.code = exports.cilter = exports.cisabled = exports.cttributes = exports.cttribute = exports.cibling = exports.child = exports.check = exports.coolean = exports.celector = exports.cctor = exports.ctor = exports.carent = exports.crent = exports.cith = exports.cisibility = exports.cibility = exports.cility = exports.cili = exports.cOperat = exports.cemb = exports.cEql = exports.ceql = exports.cype = exports.cctrl = exports.click = exports.cnner = exports.celete = exports.cynch = exports.colid = exports.cPRE = exports.cPre = exports.cpre = exports.cMac = exports.cATA = exports.cata = exports.cbject = exports.ctring = exports.cING = exports.cing = exports.cALID = exports.calid = exports.cable = exports.cCon = exports.ccon = exports.clpha = exports.cExt = exports.cext = exports.cile = exports.came = exports.cABC = exports.chref = exports.ctemp = exports.c_lass = exports.chare = exports.cest = exports.cage = exports.cITION = exports.cition = exports.cmation = exports.cction = exports.cTION = exports.ction = exports.calse = exports.crue = exports.cillion = exports.cill = exports.csion = exports.cION = exports.cion = exports.chousand = exports.csand = exports.cand = exports.cundred = exports.cund = exports.cblue = exports.cgreen = exports.cred = exports.cifty = exports.chirty = exports.cwenty = exports.cigh = exports.chir = exports.cteen = exports.cwelve = exports.cleven = exports.cine = exports.cight = exports.ceven = exports.cive = exports.cour = exports.chree = void 0;
exports.cFra = exports.cfra = exports.czoid = exports.crap = exports.cNon = exports.cnon = exports.cHep = exports.chep = exports.cHex = exports.chex = exports.cgon = exports.cOct = exports.coct = exports.cRect = exports.crect = exports.cRec = exports.crec = exports.cTri = exports.ctri = exports.cgle = exports.cquare = exports.care = exports.ccle = exports.cCir = exports.ccir = exports.cegree = exports.cormal = exports.cmal = exports.cize = exports.cart = exports.cDot = exports.cdot = exports.cound = exports.cmel = exports.cray = exports.cose = exports.card = exports.cRROR = exports.crror = exports.carning = exports.carn = exports.create = exports.candom = exports.cdom = exports.cenerate = exports.crate = exports.convert = exports.cvert = exports.cVer = exports.cver = exports.clean = exports.ceplace = exports.clace = exports.cingle = exports.cetermine = exports.cmine = exports.cource = exports.cmis = exports.cMis = exports.ciary = exports.cary = exports.cung = exports.ceous = exports.cous = exports.cian = exports.cCel = exports.ccel = exports.cish = exports.cese = exports.cino = exports.cPRO = exports.cPro = exports.cpro = exports.cara = exports.cral = exports.cInv = exports.cinv = exports.cOPS = exports.cops = exports.caft = exports.cunt = exports.c_ASE = exports.c_ase = exports.cert = exports.ccore = exports.cCor = exports.ccor = exports.cder = exports.cace = exports.cete = exports.ciew = exports.cVar = exports.cvar = exports.cath = exports.cmed = exports.cInter = exports.cinter = exports.cime = exports.cMENT = exports.cment = void 0;
exports.cANGE = exports.cange = exports.cite = exports.cyan = exports.clue = exports.creen = exports.cCol = exports.ccol = exports.cMod = exports.cmod = exports.cull = exports.cont = exports.ctieth = exports.cieth = exports.ccond = exports.cumber = exports.cLOY = exports.cloy = exports.crive = exports.cArg = exports.carg = exports.cvent = exports.cVEN = exports.cven = exports.casic = exports.cPer = exports.cper = exports.cExe = exports.cexe = exports.cnal = exports.cPLE = exports.cple = exports.cMulti = exports.cmulti = exports.clti = exports.common = exports.cmon = exports.cemo = exports.cval = exports.cesh = exports.cait = exports.cule = exports.cusiness = exports.cness = exports.cavigate = exports.cENV = exports.clash = exports.cward = exports.cwap = exports.cARSE = exports.carse = exports.cRSE = exports.crse = exports.coot = exports.cAPP = exports.cApp = exports.capp = exports.cLICA = exports.clica = exports.chan = exports.chen = exports.ceat = exports.cress = exports.cRes = exports.cres = exports.cess = exports.cMap = exports.cmap = exports.cord = exports.cween = exports.ctch = exports.cain = exports.cence = exports.cenc = exports.cDiff = exports.cggregate = exports.cgate = exports.cduct = exports.couble = exports.cble = exports.chort = exports.cong = exports.cloat = exports.cnteger = exports.cideo = exports.cComp = exports.ccomp = exports.csol = exports.cplify = exports.cSim = exports.csim = exports.cort = exports.cation = exports.cLoc = exports.cloc = exports.cint = exports.cTrans = exports.ctrans = exports.cTra = exports.ctra = void 0;
exports.croject = exports.cect = exports.cGest = exports.cgest = exports.cSug = exports.csug = exports.cLay = exports.clay = exports.cAIL = exports.cail = exports.cSha = exports.csha = exports.cics = exports.cPhon = exports.cphon = exports.ctope = exports.cIso = exports.ciso = exports.cstant = exports.cbola = exports.cbol = exports.cHyper = exports.chyper = exports.cUni = exports.cuni = exports.cSec = exports.csec = exports.crtic = exports.cQua = exports.cqua = exports.curve = exports.cane = exports.cubic = exports.cCOM = exports.cCom = exports.ccom = exports.cLin = exports.clin = exports.cind = exports.cASS = exports.cass = exports.crgb = exports.cear = exports.crage = exports.csis = exports.cAna = exports.cana = exports.cPROD = exports.cProd = exports.cprod = exports.cDEV = exports.cDev = exports.cdev = exports.cack = exports.cric = exports.cMet = exports.cmet = exports.ctain = exports.cReg = exports.creg = exports.cAll = exports.call = exports.cdex = exports.cator = exports.cGen = exports.cgen = exports.crint = exports.cTart = exports.ctart = exports.cTar = exports.ctar = exports.cTert = exports.ctert = exports.cmit = exports.cmary = exports.cPri = exports.cpri = exports.cncer = exports.cSeq = exports.cseq = exports.cbout = exports.cias = exports.crame = exports.cram = exports.clob = exports.cMAND = exports.cmand = exports.cCust = exports.ccust = exports.cust = exports.centa = exports.cent = exports.cules = exports.cCli = exports.ccli = exports.cAve = exports.cave = exports.cdrom = exports.cular = exports.cost = void 0;
exports.cFORE = exports.cfore = exports.cera = exports.cison = exports.cson = exports.crch = exports.cist = exports.cted = exports.cmpt = exports.cnto = exports.ceak = exports.ciod = exports.cute = exports.ctit = exports.cSub = exports.csub = exports.csert = exports.cDel = exports.cdel = exports.cSym = exports.csym = exports.cure = exports.ctrol = exports.cTrad = exports.ctrad = exports.ctional = exports.cional = exports.cance = exports.cSuf = exports.csuf = exports.cific = exports.cfic = exports.cSpec = exports.cspec = exports.cger = exports.clete = exports.cAULT = exports.cault = exports.cULT = exports.cult = exports.cafe = exports.ctay = exports.cice = exports.cood = exports.coop = exports.ceed = exports.comb = exports.cerm = exports.cern = exports.cizer = exports.clon = exports.clus = exports.come = exports.cized = exports.cOpt = exports.copt = exports.cuto = exports.cFul = exports.cful = exports.cike = exports.could = exports.cExp = exports.cexp = exports.csive = exports.cCur = exports.ccur = exports.ceep = exports.colve = exports.colv = exports.cron = exports.crev = exports.cease = exports.ceas = exports.cere = exports.ccate = exports.cDup = exports.cdup = exports.cQue = exports.cque = exports.cEqu = exports.cequ = exports.cStor = exports.cstor = exports.cDest = exports.cdest = exports.cLOP = exports.clop = exports.cments = exports.cified = exports.cfied = exports.cied = exports.cual = exports.cshp = exports.ccolr = exports.cild = exports.cChi = exports.ccent = exports.ceta = exports.cnion = exports.cell = void 0;
exports.cvia = exports.crus = exports.cuda = exports.crain = exports.calia = exports.clia = exports.cenia = exports.cina = exports.cgua = exports.cola = exports.crra = exports.cgeria = exports.ceria = exports.cria = exports.cania = exports.cnia = exports.cnistan = exports.cistan = exports.cstan = exports.ctan = exports.cuch = exports.cnly = exports.ctity = exports.ceaf = exports.clta = exports.cicon = exports.cical = exports.ccal = exports.cLex = exports.clex = exports.cket = exports.cBra = exports.cbra = exports.clyze = exports.clyz = exports.cccess = exports.copy = exports.camp = exports.cchiv = exports.cleas = exports.crit = exports.clat = exports.cRef = exports.cref = exports.cifies = exports.cSid = exports.csid = exports.cten = exports.cned = exports.cght = exports.cCau = exports.ccau = exports.clud = exports.clude = exports.cude = exports.cured = exports.cerg = exports.cERGE = exports.cerge = exports.cRGE = exports.crge = exports.coker = exports.cote = exports.cick = exports.cStd = exports.cstd = exports.core = exports.ceen = exports.cRea = exports.crea = exports.cture = exports.cruc = exports.cAMPLE = exports.cample = exports.crgs = exports.cFin = exports.cfin = exports.cther = exports.cNom = exports.cnom = exports.cPara = exports.cpara = exports.cinal = exports.cOri = exports.cori = exports.cplac = exports.cSup = exports.csup = exports.cify = exports.clse = exports.cook = exports.cpand = exports.cMas = exports.cmas = exports.cemp = exports.cCESS = exports.ccess = exports.cvel = exports.cUSH = exports.cush = void 0;
exports.cnic = exports.callium = exports.ckel = exports.cmium = exports.cadium = exports.cnium = exports.canium = exports.cndium = exports.ccium = exports.cassium = exports.cssium = exports.cinum = exports.cnum = exports.cesium = exports.csium = exports.codium = exports.cdium = exports.corine = exports.crine = exports.clorine = exports.cllium = exports.cthium = exports.chium = exports.celium = exports.clium = exports.cium = exports.crogen = exports.cogen = exports.cmen = exports.cnam = exports.cela = exports.ctes = exports.cates = exports.cnga = exports.cste = exports.cerland = exports.crland = exports.cudan = exports.cfrica = exports.crica = exports.cles = exports.canda = exports.cnda = exports.cgal = exports.cnes = exports.cuay = exports.cguay = exports.cama = exports.ckistan = exports.corea = exports.ciger = exports.caragua = exports.cragua = exports.cagua = exports.curu = exports.cmar = exports.cnmar = exports.cova = exports.cnds = exports.cands = exports.cslands = exports.cali = exports.ccar = exports.cati = exports.cdan = exports.cran = exports.conesia = exports.cnesia = exports.cesia = exports.csia = exports.celand = exports.citi = exports.cala = exports.crman = exports.cerman = exports.cambia = exports.cnce = exports.cini = exports.conia = exports.cuinea = exports.cinea = exports.cnea = exports.cador = exports.cdor = exports.cominica = exports.cminica = exports.cinica = exports.cnica = exports.cica = exports.congo = exports.cngo = exports.cmbia = exports.cbia = exports.cublic = exports.cblic = exports.clic = exports.cnada = exports.cada = exports.cdia = exports.cndi = void 0;
exports.coffee = exports.cffee = exports.cfee = exports.chocolate = exports.cocolate = exports.ccolate = exports.colate = exports.clate = exports.cean = exports.chimmer = exports.cimmer = exports.cmmer = exports.cmer = exports.cweet = exports.ceet = exports.cemon = exports.crown = exports.cown = exports.cistre = exports.cstre = exports.ctre = exports.ceige = exports.cige = exports.crey = exports.cowder = exports.cwder = exports.czure = exports.cado = exports.colin = exports.curn = exports.cangerine = exports.cngerine = exports.cgerine = exports.cerine = exports.cellow = exports.cllow = exports.coke = exports.carine = exports.cpricot = exports.cricot = exports.cicot = exports.ccot = exports.cnglish = exports.cglish = exports.clish = exports.chite = exports.cuby = exports.cuchsia = exports.cchsia = exports.chsia = exports.cronze = exports.conze = exports.cnze = exports.cyst = exports.cBer = exports.cber = exports.cmber = exports.curple = exports.crple = exports.cink = exports.cmaranth = exports.caranth = exports.cranth = exports.canth = exports.clmond = exports.cmond = exports.cond = exports.cnge = exports.cster = exports.ciolet = exports.colet = exports.cero = exports.covium = exports.cvium = exports.cicium = exports.corium = exports.cctinium = exports.ctinium = exports.cncium = exports.cuth = exports.clum = exports.cerbium = exports.crbium = exports.cinium = exports.ceodymium = exports.codymium = exports.cdymium = exports.cymium = exports.cerium = exports.carium = exports.curium = exports.chenium = exports.cetium = exports.cbium = exports.conium = exports.crium = exports.ctium = exports.cidium = exports.cton = exports.cenium = void 0;
exports.cava = exports.chaki = exports.caki = exports.camen = exports.cape = exports.crocess = exports.cocess = exports.crimson = exports.cimson = exports.cmson = exports.cream = exports.ceam = exports.catte = exports.ctte = exports.cobalt = exports.cbalt = exports.calt = exports.cilk = exports.corn = exports.cnny = exports.copper = exports.cpper = exports.catin = exports.ctin = exports.craditional = exports.caditional = exports.cditional = exports.citional = exports.conal = exports.champagne = exports.campagne = exports.cmpagne = exports.cpagne = exports.cagne = exports.cgne = exports.crost = exports.cerulean = exports.crulean = exports.culean = exports.cerise = exports.crise = exports.cise = exports.celadon = exports.cladon = exports.cadon = exports.cdon = exports.chest = exports.carmine = exports.crmine = exports.canary = exports.cnary = exports.cadet = exports.cdet = exports.cyzantium = exports.czantium = exports.cantium = exports.cntium = exports.cienna = exports.cenna = exports.cnna = exports.curgundy = exports.crgundy = exports.cgundy = exports.cundy = exports.cuff = exports.cugar = exports.cgar = exports.caroon = exports.croon = exports.coon = exports.cilac = exports.clac = exports.candy = exports.cndy = exports.cole = exports.conder = exports.cnder = exports.capphire = exports.cpphire = exports.cphire = exports.chire = exports.cire = exports.cans = exports.ceel = exports.cheel = exports.cRYB = exports.cigment = exports.cgment = exports.cantone = exports.cntone = exports.ctone = exports.cNCS = exports.cunsell = exports.cnsell = exports.csell = exports.crayola = exports.cayola = exports.cyola = exports.clive = exports.coral = void 0;
exports.cstic = exports.ctic = exports.cadow = exports.cdow = exports.coss = exports.caro = exports.celon = exports.cras = exports.ctis = exports.carin = exports.ctee = exports.caize = exports.cany = exports.caze = exports.cake = exports.civid = exports.cvid = exports.cgan = exports.cinen = exports.cnen = exports.cinkle = exports.cnkle = exports.cier = exports.cloral = exports.culi = exports.ccha = exports.cobi = exports.cobe = exports.cade = exports.cris = exports.cpace = exports.cope = exports.cuin = exports.ctal = exports.cetal = exports.cllo = exports.cheen = exports.czard = exports.cpple = exports.colden = exports.clden = exports.cden = exports.cetallic = exports.ctallic = exports.callic = exports.cllic = exports.ciridian = exports.cridian = exports.cidian = exports.cdian = exports.cerry = exports.crry = exports.cauve = exports.cuve = exports.clame = exports.crick = exports.cawn = exports.candango = exports.cndango = exports.cdango = exports.cango = exports.crin = exports.cavender = exports.cvender = exports.cender = exports.cmerald = exports.cerald = exports.crald = exports.cald = exports.cndigo = exports.cdigo = exports.cigo = exports.chell = exports.cant = exports.cony = exports.cbony = exports.crab = exports.cesert = exports.cenim = exports.cnim = exports.caupe = exports.cupe = exports.ckle = exports.caffron = exports.cffron = exports.cfron = exports.curquoise = exports.crquoise = exports.cquoise = exports.cuoise = exports.coise = exports.calmon = exports.clmon = exports.crchid = exports.cchid = exports.chid = exports.cagenta = exports.cgenta = exports.cnta = exports.civer = void 0;
exports.ceth = exports.cbing = exports.cded = exports.cclr = exports.comp = exports.chine = exports.cermilion = exports.crmilion = exports.cmilion = exports.cilion = exports.canilla = exports.cnilla = exports.cilla = exports.clla = exports.cuscan = exports.ccan = exports.corest = exports.crest = exports.cstle = exports.ctle = exports.craw = exports.ctraw = exports.ceal = exports.ctten = exports.cock = exports.chadow = exports.cpia = exports.cark = exports.cale = exports.cadder = exports.cdder = exports.cbon = exports.ceus = exports.creus = exports.cazz = exports.cavy = exports.csty = exports.ckin = exports.cune = exports.cstar = exports.cwer = exports.cower = exports.chio = exports.cree = exports.ceach = exports.cach = exports.chip = exports.clood = exports.cilver = exports.clver = exports.carrot = exports.crrot = exports.crot = exports.cystic = void 0;

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
var ceas = b.cea + b.cs; // eas

exports.ceas = ceas;
var cease = ceas + b.ce; // ease

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
var crit = b.cri + b.ct; // rit

exports.crit = crit;
var cleas = b.cl + ceas; // leas

exports.cleas = cleas;
var cchiv = b.cch + b.civ; // chiv

exports.cchiv = cchiv;
var camp = b.cam + b.cp; // amp

exports.camp = camp;
var copy = b.cop + b.cy; // opy

exports.copy = copy;
var cccess = b.ccc + cess; // ccess

exports.cccess = cccess;
var clyz = b.cly + b.cz; // lyz

exports.clyz = clyz;
var clyze = clyz + b.ce; // lyze

exports.clyze = clyze;
var cbra = b.cbr + b.ca; // bra

exports.cbra = cbra;
var cBra = b.cBr + b.ca; // Bra

exports.cBra = cBra;
var cket = b.cke + b.ct; // ket

exports.cket = cket;
var clex = b.cle + b.cx; // lex

exports.clex = clex;
var cLex = b.cLe + b.cx; // Lex

exports.cLex = cLex;
var ccal = b.cca + b.cl; // cal

exports.ccal = ccal;
var cical = b.ci + ccal; // ical

exports.cical = cical;
var cicon = b.ci + ccon; // icon

exports.cicon = cicon;
var clta = b.clt + b.ca; // lta

exports.clta = clta;
var ceaf = b.cea + b.cf; // eaf

exports.ceaf = ceaf;
var ctity = ctit + b.cy; // tity

exports.ctity = ctity;
var cnly = b.cnl + b.cy; // nly

exports.cnly = cnly;
var cuch = b.cuc + b.ch; // uch

exports.cuch = cuch;
var ctan = b.cta + b.cn; // tan

exports.ctan = ctan;
var cstan = b.cs + ctan; // stan

exports.cstan = cstan;
var cistan = cist + b.can; // istan

exports.cistan = cistan;
var cnistan = b.cn + cistan; // nistan

exports.cnistan = cnistan;
var cnia = b.cni + b.ca; // nia

exports.cnia = cnia;
var cania = b.ca + cnia; // ania

exports.cania = cania;
var cria = b.cri + b.ca; // ria

exports.cria = cria;
var ceria = b.ce + cria; // eria

exports.ceria = ceria;
var cgeria = cger + b.cia; // geria

exports.cgeria = cgeria;
var crra = b.crr + b.ca; // rra

exports.crra = crra;
var cola = b.col + b.ca; // ola

exports.cola = cola;
var cgua = b.cgu + b.ca; // gua

exports.cgua = cgua;
var cina = b.cin + b.ca; // ina

exports.cina = cina;
var cenia = b.cen + b.cia; // enia

exports.cenia = cenia;
var clia = b.cli + b.ca; // lia

exports.clia = clia;
var calia = b.ca + clia; // alia

exports.calia = calia;
var crain = b.cra + b.cin; // rain

exports.crain = crain;
var cuda = b.cud + b.ca; // uda

exports.cuda = cuda;
var crus = b.cru + b.cs; // rus

exports.crus = crus;
var cvia = b.cvi + b.ca; // via

exports.cvia = cvia;
var cndi = b.cnd + b.ci; // ndi

exports.cndi = cndi;
var cdia = b.cdi + b.ca; // dia

exports.cdia = cdia;
var cada = b.ca + b.cd + b.ca; // ada

exports.cada = cada;
var cnada = b.cn + cada; // nada

exports.cnada = cnada;
var clic = b.cli + b.cc; // lic

exports.clic = clic;
var cblic = b.cb + clic; // blic

exports.cblic = cblic;
var cublic = b.cu + cblic; // ublic

exports.cublic = cublic;
var cbia = b.cbi + b.ca; // bia

exports.cbia = cbia;
var cmbia = b.cm + cbia; // mbia

exports.cmbia = cmbia;
var cngo = b.cng + b.co; // ngo

exports.cngo = cngo;
var congo = b.co + cngo; // ongo

exports.congo = congo;
var cica = b.cic + b.ca; // ica

exports.cica = cica;
var cnica = b.cn + cica; // nica

exports.cnica = cnica;
var cinica = b.cin + cica; // inica

exports.cinica = cinica;
var cminica = b.cm + b.ci + cnica; // minica

exports.cminica = cminica;
var cominica = b.co + cminica; // ominica

exports.cominica = cominica;
var cdor = b.cdo + b.cr; // dor

exports.cdor = cdor;
var cador = b.ca + cdor; // ador

exports.cador = cador;
var cnea = b.cne + b.ca; // nea

exports.cnea = cnea;
var cinea = cine + b.ca; // inea

exports.cinea = cinea;
var cuinea = b.cu + cinea; // uinea

exports.cuinea = cuinea;
var conia = b.con + b.cia; // onia

exports.conia = conia;
var cini = b.cin + b.ci; // ini

exports.cini = cini;
var cnce = b.cnc + b.ce; // nce

exports.cnce = cnce;
var cambia = b.cam + b.cbi + b.ca; // ambia

exports.cambia = cambia;
var cerman = cerm + b.can; // erman

exports.cerman = cerman;
var crman = b.crm + b.can; // rman

exports.crman = crman;
var cala = b.cal + b.ca; // ala

exports.cala = cala;
var citi = b.cit + b.ci; // iti

exports.citi = citi;
var celand = b.cel + cand; // eland

exports.celand = celand;
var csia = b.csi + b.ca; // sia

exports.csia = csia;
var cesia = b.ce + csia; // esia

exports.cesia = cesia;
var cnesia = b.cn + cesia; // nesia

exports.cnesia = cnesia;
var conesia = b.co + cnesia; // onesia

exports.conesia = conesia;
var cran = b.cra + b.cn; // ran

exports.cran = cran;
var cdan = b.cda + b.cn; // dan

exports.cdan = cdan;
var cati = b.cat + b.ci; // eti

exports.cati = cati;
var ccar = b.cca + b.cr; // car

exports.ccar = ccar;
var cali = b.cal + b.ci; // ali

exports.cali = cali;
var cslands = b.csl + cand + b.cs; // slands

exports.cslands = cslands;
var cands = cand + b.cs; // ands

exports.cands = cands;
var cnds = b.cnd + b.cs; // nds

exports.cnds = cnds;
var cova = b.cov + b.ca; // ova

exports.cova = cova;
var cnmar = b.cnm + b.car; // nmar

exports.cnmar = cnmar;
var cmar = b.cma + b.cr; // mar

exports.cmar = cmar;
var curu = b.cur + b.cu; // uru

exports.curu = curu;
var cagua = b.cag + b.cua; // agua

exports.cagua = cagua;
var cragua = b.cr + cagua; // ragua

exports.cragua = cragua;
var caragua = cara + b.cgu + b.ca; // aragua

exports.caragua = caragua;
var ciger = b.cig + b.cer; // iger

exports.ciger = ciger;
var corea = core + b.ca; // orea

exports.corea = corea;
var ckistan = b.cki + b.cst + b.can; // kistan

exports.ckistan = ckistan;
var cama = b.cam + b.ca; // ama

exports.cama = cama;
var cguay = b.cgu + b.cay; // guay

exports.cguay = cguay;
var cuay = b.cua + b.cy; // uay

exports.cuay = cuay;
var cnes = b.cne + b.cs; // nes

exports.cnes = cnes;
var cgal = b.cga + b.cl; // gal

exports.cgal = cgal;
var cnda = b.cnd + b.ca; // nda

exports.cnda = cnda;
var canda = cand + b.ca; // anda

exports.canda = canda;
var cles = b.cle + b.cs; // les

exports.cles = cles;
var crica = cric + b.ca; // rica

exports.crica = crica;
var cfrica = b.cf + crica; // frica

exports.cfrica = cfrica;
var cudan = b.cud + b.can; // udan

exports.cudan = cudan;
var crland = b.crl + cand; // rland

exports.crland = crland;
var cerland = b.ce + crland; // erland

exports.cerland = cerland;
var cste = b.cst + b.ce; // ste

exports.cste = cste;
var cnga = b.cng + b.ca; // nga

exports.cnga = cnga;
var cates = cate + b.cs; // ates

exports.cates = cates;
var ctes = b.cte + b.cs; // tex

exports.ctes = ctes;
var cela = b.cel + b.ca; // ela

exports.cela = cela;
var cnam = b.cna + b.cm; // nam

exports.cnam = cnam;
var cmen = b.cme + b.cn; // men

exports.cmen = cmen;
var cogen = b.cog + b.cen; // ogen

exports.cogen = cogen;
var crogen = b.cr + cogen; // rogen

exports.crogen = crogen;
var cium = b.ciu + b.cm; // ium

exports.cium = cium;
var clium = b.cl + cium; // lium

exports.clium = clium;
var celium = b.ce + clium; // elium

exports.celium = celium;
var chium = b.chi + b.cum; // hium

exports.chium = chium;
var cthium = b.ct + chium; // thium

exports.cthium = cthium;
var cllium = b.cll + b.ciu + b.cm; // llium

exports.cllium = cllium;
var clorine = b.clo + b.cri + b.cne; // lorine

exports.clorine = clorine;
var crine = b.cri + b.cne; // rine

exports.crine = crine;
var corine = cori + b.cne; // orine

exports.corine = corine;
var cdium = b.cdi + b.cum; // dium

exports.cdium = cdium;
var codium = b.co + cdium; // odium

exports.codium = codium;
var csium = b.csi + b.cum; // sium

exports.csium = csium;
var cesium = b.ce + csium; // esium

exports.cesium = cesium;
var cnum = b.cnu + b.cm; // num

exports.cnum = cnum;
var cinum = b.ci + cnum; // inum

exports.cinum = cinum;
var cssium = b.css + b.ciu + b.cm; // ssium

exports.cssium = cssium;
var cassium = cass + b.ciu + b.cm; // assium

exports.cassium = cassium;
var ccium = b.cc + cium; // cium

exports.ccium = ccium;
var cndium = cndi + b.cum; // ndium

exports.cndium = cndium;
var canium = b.can + cium; // anium

exports.canium = canium;
var cnium = b.cni + b.cum; // nium

exports.cnium = cnium;
var cadium = b.ca + b.cd + b.ciu + b.cm; // adium

exports.cadium = cadium;
var cmium = b.camai + b.cum; // mium

exports.cmium = cmium;
var ckel = b.cke + b.cl; // kel

exports.ckel = ckel;
var callium = call + cium; // allium

exports.callium = callium;
var cnic = b.cni + b.cc; // nic

exports.cnic = cnic;
var cenium = b.cen + cium; // enium

exports.cenium = cenium;
var cton = b.cto + b.cn; // ton

exports.cton = cton;
var cidium = b.cid + cium; // idium

exports.cidium = cidium;
var ctium = b.ct + cium; // tium

exports.ctium = ctium;
var crium = b.cr + cium; // rium

exports.crium = crium;
var conium = b.con + cium; // onium

exports.conium = conium;
var cbium = b.cb + cium; // bium

exports.cbium = cbium;
var cetium = b.cet + cium; // etium

exports.cetium = cetium;
var chenium = chen + cium; // henium

exports.chenium = chenium;
var curium = b.cur + cium; // urium

exports.curium = curium;
var carium = b.car + cium; // arium

exports.carium = carium;
var cerium = b.cer + cium; // erium

exports.cerium = cerium;
var cymium = b.cym + cium; // ymium

exports.cymium = cymium;
var cdymium = b.cd + cymium; // dymium

exports.cdymium = cdymium;
var codymium = b.co + cdymium; // odymium

exports.codymium = codymium;
var ceodymium = b.ceo + cdymium; // eodymium

exports.ceodymium = ceodymium;
var cinium = cini + b.cum; // inium

exports.cinium = cinium;
var crbium = b.crb + cium; // rbium

exports.crbium = crbium;
var cerbium = b.ce + crbium; // erbium

exports.cerbium = cerbium;
var clum = b.clu + b.cm; // clum

exports.clum = clum;
var cuth = b.cut + b.ch; // uth

exports.cuth = cuth;
var cncium = b.cnc + cium; // ncium

exports.cncium = cncium;
var ctinium = b.cti + b.cni + b.cum; // tiniium

exports.ctinium = ctinium;
var cctinium = b.cc + ctinium; // ctinium

exports.cctinium = cctinium;
var corium = cori + b.cum; // orium

exports.corium = corium;
var cicium = b.cic + cium; // icium

exports.cicium = cicium;
var cvium = b.cv + cium; // vium

exports.cvium = cvium;
var covium = b.co + cvium; // ovium

exports.covium = covium;
var cero = b.cer + b.co; // ero

exports.cero = cero;
var colet = b.col + b.cet; // olet

exports.colet = colet;
var ciolet = b.ci + colet; // iolet

exports.ciolet = ciolet;
var cster = cste + b.cr; // ster

exports.cster = cster;
var cnge = b.cng + b.ce; // nge

exports.cnge = cnge;
var cond = b.con + b.cd; // ond

exports.cond = cond;
var cmond = b.cm + cond; // mond

exports.cmond = cmond;
var clmond = b.cl + cmond; // lmond

exports.clmond = clmond;
var canth = b.can + b.cth; // anth

exports.canth = canth;
var cranth = b.cr + canth; // ranth

exports.cranth = cranth;
var caranth = b.ca + cranth; // aranth

exports.caranth = caranth;
var cmaranth = b.cm + caranth; // maranth

exports.cmaranth = cmaranth;
var cink = b.cin + b.ck; // ink

exports.cink = cink;
var crple = b.crp + b.cle; // rple

exports.crple = crple;
var curple = b.cu + crple; // urple

exports.curple = curple;
var cmber = b.cmb + b.cer; // mber

exports.cmber = cmber;
var cber = b.cbe + b.cr; // ber

exports.cber = cber;
var cBer = b.cBe + b.cr; // Ber

exports.cBer = cBer;
var cyst = b.cys + b.ct; // yst

exports.cyst = cyst;
var cnze = b.cnz + b.ce; // nze

exports.cnze = cnze;
var conze = b.co + cnze; // onze

exports.conze = conze;
var cronze = b.cr + conze; // ronze

exports.cronze = cronze;
var chsia = b.chs + b.cia; // hsia

exports.chsia = chsia;
var cchsia = b.cc + chsia; // chsia

exports.cchsia = cchsia;
var cuchsia = b.cu + cchsia; // uchsia

exports.cuchsia = cuchsia;
var cuby = b.cub + b.cy; // uby

exports.cuby = cuby;
var chite = b.chi + b.cte; // hite

exports.chite = chite;
var clish = b.cli + b.csh; // lish

exports.clish = clish;
var cglish = b.cg + clish; // glish

exports.cglish = cglish;
var cnglish = b.cn + cglish; // nglish

exports.cnglish = cnglish;
var ccot = b.cco + b.ct; // cot

exports.ccot = ccot;
var cicot = b.ci + ccot; // icot

exports.cicot = cicot;
var cricot = b.cr + cicot; // ricot

exports.cricot = cricot;
var cpricot = b.cp + cricot; // pricot

exports.cpricot = cpricot;
var carine = b.car + cine; // arine

exports.carine = carine;
var coke = b.cok + b.ce; // oke

exports.coke = coke;
var cllow = b.cll + b.cow; // llow

exports.cllow = cllow;
var cellow = b.ce + cllow; // ellow

exports.cellow = cellow;
var cerine = b.cer + cine; // erine

exports.cerine = cerine;
var cgerine = b.cg + cerine; // gerine

exports.cgerine = cgerine;
var cngerine = b.cn + cgerine; // ngerine

exports.cngerine = cngerine;
var cangerine = cange + crine; // angerine

exports.cangerine = cangerine;
var curn = b.cur + b.cn; // urn

exports.curn = curn;
var colin = b.col + b.cin; // olin

exports.colin = colin;
var cado = b.ca + b.cdo; // ado

exports.cado = cado;
var czure = b.czu + b.cre; // zure

exports.czure = czure;
var cwder = b.cw + cder; // wder

exports.cwder = cwder;
var cowder = b.co + cwder; // owder

exports.cowder = cowder;
var crey = b.cre + b.cy; // rey

exports.crey = crey;
var cige = b.cig + b.ce; // ige

exports.cige = cige;
var ceige = b.ce + cige; // eige

exports.ceige = ceige;
var ctre = b.ctr + b.ce; // tre

exports.ctre = ctre;
var cstre = b.cs + ctre; // stre

exports.cstre = cstre;
var cistre = b.ci + cstre; // istre

exports.cistre = cistre;
var cown = b.cow + b.cn; // own

exports.cown = cown;
var crown = b.cr + cown; // rown

exports.crown = crown;
var cemon = cemo + b.cn; // emon

exports.cemon = cemon;
var ceet = b.cee + b.ct; // eet

exports.ceet = ceet;
var cweet = b.cw + ceet; // weet

exports.cweet = cweet;
var cmer = b.cme + b.cr; // mer

exports.cmer = cmer;
var cmmer = b.cm + cmer; // mmer

exports.cmmer = cmmer;
var cimmer = b.ci + cmmer; // immer

exports.cimmer = cimmer;
var chimmer = b.ch + cimmer; // himmer

exports.chimmer = chimmer;
var cean = b.cea + b.cn; // ean

exports.cean = cean;
var clate = clat + b.ce; // late

exports.clate = clate;
var colate = b.co + clate; // olate

exports.colate = colate;
var ccolate = b.cc + colate; // colate

exports.ccolate = ccolate;
var cocolate = b.co + ccolate; // ocolate

exports.cocolate = cocolate;
var chocolate = b.ch + cocolate; // hocolate

exports.chocolate = chocolate;
var cfee = b.cfe + b.ce; // fee

exports.cfee = cfee;
var cffee = b.cf + cfee; // ffee

exports.cffee = cffee;
var coffee = b.co + cffee; // offee

exports.coffee = coffee;
var coral = b.cor + b.cal; // oral

exports.coral = coral;
var clive = b.cli + b.cve; // live

exports.clive = clive;
var cyola = b.cyo + b.cla; // yola

exports.cyola = cyola;
var cayola = b.ca + cyola; // ayola

exports.cayola = cayola;
var crayola = b.cr + cayola; // rayola

exports.crayola = crayola;
var csell = b.cse + b.cll; // sell

exports.csell = csell;
var cnsell = b.cn + csell; // nsell

exports.cnsell = cnsell;
var cunsell = b.cu + cnsell; // unsell

exports.cunsell = cunsell;
var cNCS = b.cNC + b.cS; // NCS

exports.cNCS = cNCS;
var ctone = cton + b.ce; // tone

exports.ctone = ctone;
var cntone = b.cn + ctone; // ntone

exports.cntone = cntone;
var cantone = b.ca + cntone; // antone

exports.cantone = cantone;
var cgment = b.cgm + cent; // gment

exports.cgment = cgment;
var cigment = b.ci + cgment; // igment

exports.cigment = cigment;
var cRYB = b.cRY + b.cB; // RYB

exports.cRYB = cRYB;
var cheel = b.che + b.cel; // heel

exports.cheel = cheel;
var ceel = b.cee + b.cl; // eel

exports.ceel = ceel;
var cans = b.can + b.cs; // ans

exports.cans = cans;
var cire = b.cir + b.ce; // ire

exports.cire = cire;
var chire = b.ch + cire; // hire

exports.chire = chire;
var cphire = b.cp + chire; // phire

exports.cphire = cphire;
var cpphire = b.cp + cphire; // pphire

exports.cpphire = cpphire;
var capphire = b.ca + cpphire; // apphire

exports.capphire = capphire;
var cnder = b.cnd + b.cer; // nder

exports.cnder = cnder;
var conder = b.co + cnder; // onder

exports.conder = conder;
var cole = b.col + b.ce; // ole

exports.cole = cole;
var cndy = b.cnd + b.cy; // ndy

exports.cndy = cndy;
var candy = b.ca + cndy; // andy

exports.candy = candy;
var clac = b.cla + b.cc; // lac

exports.clac = clac;
var cilac = b.ci + clac; // ilac

exports.cilac = cilac;
var coon = b.coo + b.cn; // oon

exports.coon = coon;
var croon = b.cr + coon; // roon

exports.croon = croon;
var caroon = b.ca + croon; // aroon

exports.caroon = caroon;
var cgar = b.cga + b.cr; // gar

exports.cgar = cgar;
var cugar = b.cu + cgar; // ugar

exports.cugar = cugar;
var cuff = b.cuf + b.cf; // uff

exports.cuff = cuff;
var cundy = cund + b.cy; // undy

exports.cundy = cundy;
var cgundy = b.cg + cundy; // gundy

exports.cgundy = cgundy;
var crgundy = b.cr + cgundy; // rgundy

exports.crgundy = crgundy;
var curgundy = b.cu + crgundy; // urgundy

exports.curgundy = curgundy;
var cnna = b.cnn + b.ca; // nna

exports.cnna = cnna;
var cenna = b.ce + cnna; // enna

exports.cenna = cenna;
var cienna = b.ci + cenna; // ienna

exports.cienna = cienna;
var cntium = b.cnt + cium; // ntium

exports.cntium = cntium;
var cantium = b.ca + cntium; // antium

exports.cantium = cantium;
var czantium = b.cz + cantium; // zantium

exports.czantium = czantium;
var cyzantium = b.cy + czantium; // yzantium

exports.cyzantium = cyzantium;
var cdet = b.cde + b.ct; // det

exports.cdet = cdet;
var cadet = b.ca + cdet; // adet

exports.cadet = cadet;
var cnary = b.cna + b.cry; // nary

exports.cnary = cnary;
var canary = b.ca + cnary; // anary

exports.canary = canary;
var crmine = b.cr + cmine; // rmine

exports.crmine = crmine;
var carmine = b.ca + crmine; // armine

exports.carmine = carmine;
var chest = b.che + b.cst; // hest

exports.chest = chest;
var cdon = b.cdo + b.cn; // don

exports.cdon = cdon;
var cadon = b.ca + cdon; // adon

exports.cadon = cadon;
var cladon = b.cl + cadon; // ladon

exports.cladon = cladon;
var celadon = b.ce + cladon; // eladon

exports.celadon = celadon;
var cise = b.cis + b.ce; // ise

exports.cise = cise;
var crise = b.cr + cise; // rise

exports.crise = crise;
var cerise = b.ce + crise; // erise

exports.cerise = cerise;
var culean = cule + b.can; // ulean

exports.culean = culean;
var crulean = b.cr + culean; // rulean

exports.crulean = crulean;
var cerulean = b.ce + crulean; // erulean

exports.cerulean = cerulean;
var crost = b.cro + b.cst; // rost

exports.crost = crost;
var cgne = b.cgn + b.ce; // gne

exports.cgne = cgne;
var cagne = b.ca + cgne; // agne

exports.cagne = cagne;
var cpagne = b.cp + cagne; // pagne

exports.cpagne = cpagne;
var cmpagne = b.cm + cpagne; // mpagne

exports.cmpagne = cmpagne;
var campagne = b.ca + cmpagne; // ampagne

exports.campagne = campagne;
var champagne = b.ch + campagne; // hampagne

exports.champagne = champagne;
var conal = b.con + b.cal; // onal

exports.conal = conal;
var citional = citi + conal; // itional

exports.citional = citional;
var cditional = b.cd + citional; // ditional

exports.cditional = cditional;
var caditional = b.ca + cditional; // aditional

exports.caditional = caditional;
var craditional = b.cr + caditional; // raditional

exports.craditional = craditional;
var ctin = b.cti + b.cn; // tin

exports.ctin = ctin;
var catin = b.ca + ctin; // atin

exports.catin = catin;
var cpper = b.cpp + b.cer; // pper

exports.cpper = cpper;
var copper = b.co + cpper; // opper

exports.copper = copper;
var cnny = b.cnn + b.cy; // nny

exports.cnny = cnny;
var corn = b.cor + b.cn; // orn

exports.corn = corn;
var cilk = b.cil + b.ck; // ilk

exports.cilk = cilk;
var calt = b.cal + b.ct; // alt

exports.calt = calt;
var cbalt = b.cb + calt; // balt

exports.cbalt = cbalt;
var cobalt = b.co + cbalt; // obalt

exports.cobalt = cobalt;
var ctte = b.ctt + b.ce; // tte

exports.ctte = ctte;
var catte = b.ca + ctte; // atte

exports.catte = catte;
var ceam = b.cea + b.cm; // eam

exports.ceam = ceam;
var cream = b.cr + ceam; // ream

exports.cream = cream;
var cmson = b.cms + b.con; // mson

exports.cmson = cmson;
var cimson = b.ci + cmson; // imson

exports.cimson = cimson;
var crimson = b.cr + cimson; // rimson

exports.crimson = crimson;
var cocess = b.coc + cess; // ocess

exports.cocess = cocess;
var crocess = b.cr + cocess; // rocess

exports.crocess = crocess;
var cape = b.cap + b.ce; // ape

exports.cape = cape;
var camen = came + b.cn; // amen

exports.camen = camen;
var caki = b.cak + b.ci; // aki

exports.caki = caki;
var chaki = b.ch + caki; // haki

exports.chaki = chaki;
var cava = b.cav + b.ca; // ava

exports.cava = cava;
var civer = cive + b.cr; // iver

exports.civer = civer;
var cnta = b.cnt + b.ca; // nta

exports.cnta = cnta;
var cgenta = b.cge + cnta; // genta

exports.cgenta = cgenta;
var cagenta = b.ca + cgenta; // agenta

exports.cagenta = cagenta;
var chid = b.chi + b.cd; // hid

exports.chid = chid;
var cchid = b.cc + chid; // chid

exports.cchid = cchid;
var crchid = b.cr + cchid; // rchid

exports.crchid = crchid;
var clmon = b.clm + b.con; // lmon

exports.clmon = clmon;
var calmon = b.ca + clmon; // almon

exports.calmon = calmon;
var coise = b.coi + b.cse; // oise

exports.coise = coise;
var cuoise = b.cu + coise; // uoise

exports.cuoise = cuoise;
var cquoise = b.cq + cuoise; // quoise

exports.cquoise = cquoise;
var crquoise = b.cr + cquoise; // rquoise

exports.crquoise = crquoise;
var curquoise = b.cu + crquoise; // urquoise

exports.curquoise = curquoise;
var cfron = b.cf + cron; // fron

exports.cfron = cfron;
var cffron = b.cf + cfron; // ffron

exports.cffron = cffron;
var caffron = b.ca + cffron; // affron

exports.caffron = caffron;
var ckle = b.ckl + b.ce; // kle

exports.ckle = ckle;
var cupe = b.cup + b.ce; // upe

exports.cupe = cupe;
var caupe = b.ca + cupe; // aupe

exports.caupe = caupe;
var cnim = b.cni + b.cm; // nim

exports.cnim = cnim;
var cenim = b.ce + cnim; // enim

exports.cenim = cenim;
var cesert = cese + b.crt; // esert

exports.cesert = cesert;
var crab = b.cra + b.cb; // rab

exports.crab = crab;
var cbony = b.cbo + b.cny; // bony

exports.cbony = cbony;
var cony = b.con + b.cy; // ony

exports.cony = cony;
var cant = b.can + b.ct; // ant

exports.cant = cant;
var chell = b.che + b.cll; // hell

exports.chell = chell;
var cigo = b.cig + b.co; // igo

exports.cigo = cigo;
var cdigo = b.cd + cigo; // digo

exports.cdigo = cdigo;
var cndigo = b.cn + cdigo; // ndigo

exports.cndigo = cndigo;
var cald = b.cal + b.cd; // ald

exports.cald = cald;
var crald = b.cr + cald; // rald

exports.crald = crald;
var cerald = b.ce + crald; // erald

exports.cerald = cerald;
var cmerald = b.cm + cerald; // merald

exports.cmerald = cmerald;
var cender = b.cen + cder; // ender

exports.cender = cender;
var cvender = b.cv + cender; // vender

exports.cvender = cvender;
var cavender = b.ca + cvender; // avender

exports.cavender = cavender;
var crin = b.cri + b.cn; // rin

exports.crin = crin;
var cango = b.can + b.cgo; // ango

exports.cango = cango;
var cdango = b.cd + cango; // dango

exports.cdango = cdango;
var cndango = b.cn + cdango; // ndango

exports.cndango = cndango;
var candango = b.ca + cndango; // andango

exports.candango = candango;
var cawn = b.caw + b.cn; // awn

exports.cawn = cawn;
var crick = cric + b.ck; // rick

exports.crick = crick;
var clame = b.cla + b.cme; // lame

exports.clame = clame;
var cuve = b.cuv + b.ce; // uve

exports.cuve = cuve;
var cauve = b.ca + cuve; // auve

exports.cauve = cauve;
var crry = b.crr + b.cy; // rry

exports.crry = crry;
var cerry = b.ce + crry; // erry

exports.cerry = cerry;
var cdian = cdia + b.cn; // dian

exports.cdian = cdian;
var cidian = b.ci + cdian; // idian

exports.cidian = cidian;
var cridian = b.cr + cidian; // ridian

exports.cridian = cridian;
var ciridian = b.ci + cridian; // iridian

exports.ciridian = ciridian;
var cllic = b.cll + b.cic; // llic

exports.cllic = cllic;
var callic = b.ca + cllic; // allic

exports.callic = callic;
var ctallic = b.ct + callic; // tallic

exports.ctallic = ctallic;
var cetallic = b.ce + ctallic; // etallic

exports.cetallic = cetallic;
var cden = b.cde + b.cn; // den

exports.cden = cden;
var clden = b.cl + cden; // lden

exports.clden = clden;
var colden = b.co + clden; // olden

exports.colden = colden;
var cpple = b.cpp + b.cle; // pple

exports.cpple = cpple;
var czard = b.cza + b.crd; // zard

exports.czard = czard;
var cheen = b.che + b.cen; // heen

exports.cheen = cheen;
var cllo = b.cll + b.co; // llo

exports.cllo = cllo;
var cetal = b.cet + b.cal; // etal

exports.cetal = cetal;
var ctal = b.cta + b.cl; // tal

exports.ctal = ctal;
var cuin = b.cui + b.cn; // uin

exports.cuin = cuin;
var cope = b.cop + b.ce; // ope

exports.cope = cope;
var cpace = b.cpa + b.cce; // pace

exports.cpace = cpace;
var cris = b.cri + b.cs; // ris

exports.cris = cris;
var cade = b.ca + b.cde; // ade

exports.cade = cade;
var cobe = b.cob + b.ce; // obe

exports.cobe = cobe;
var cobi = b.cob + b.ci; // obi

exports.cobi = cobi;
var ccha = b.cch + b.ca; // cha

exports.ccha = ccha;
var culi = b.cul + b.ci; // uli

exports.culi = culi;
var cloral = b.clo + cral; // loral

exports.cloral = cloral;
var cier = b.cie + b.cr; // ier

exports.cier = cier;
var cnkle = b.cnk + b.cle; // nkle

exports.cnkle = cnkle;
var cinkle = b.ci + cnkle; // inkle

exports.cinkle = cinkle;
var cnen = b.cne + b.cn; // nen

exports.cnen = cnen;
var cinen = b.ci + cnen; // inen

exports.cinen = cinen;
var cgan = b.cga + b.cn; // gan

exports.cgan = cgan;
var cvid = b.cvi + b.cd; // vid

exports.cvid = cvid;
var civid = b.ci + cvid; // ivid

exports.civid = civid;
var cake = b.cak + b.ce; // ake

exports.cake = cake;
var caze = b.caz + b.ce; // aze

exports.caze = caze;
var cany = b.can + b.cy; // any

exports.cany = cany;
var caize = b.cai + b.cze; // aize

exports.caize = caize;
var ctee = b.cte + b.ce; // tee

exports.ctee = ctee;
var carin = b.car + b.cin; // arin

exports.carin = carin;
var ctis = b.cti + b.cs; // tis

exports.ctis = ctis;
var cras = b.cra + b.cs; // ras

exports.cras = cras;
var celon = b.cel + b.con; // elon

exports.celon = celon;
var caro = b.car + b.co; // aro

exports.caro = caro;
var coss = b.cos + b.cs; // oss

exports.coss = coss;
var cdow = b.cdo + b.cw; // dow

exports.cdow = cdow;
var cadow = b.ca + cdow; // adow

exports.cadow = cadow;
var ctic = b.cti + b.cc; // tic

exports.ctic = ctic;
var cstic = b.cs + ctic; // stic

exports.cstic = cstic;
var cystic = b.cy + cstic; // ystic

exports.cystic = cystic;
var crot = b.cro + b.ct; // rot

exports.crot = crot;
var crrot = b.cr + crot; // rrot

exports.crrot = crrot;
var carrot = b.ca + crrot; // arrot

exports.carrot = carrot;
var clver = b.clv + b.cer; // lver

exports.clver = clver;
var cilver = b.ci + clver; // ilver

exports.cilver = cilver;
var clood = b.clo + b.cod; // lood

exports.clood = clood;
var chip = b.chi + b.cp; // hip

exports.chip = chip;
var cach = b.cac + b.ch; // ach

exports.cach = cach;
var ceach = b.ce + cach; // each

exports.ceach = ceach;
var cree = b.cre + b.ce; // ree

exports.cree = cree;
var chio = b.chi + b.co; // hio

exports.chio = chio;
var cower = b.cow + b.cer; // ower

exports.cower = cower;
var cwer = b.cwe + b.cr; // wer

exports.cwer = cwer;
var cstar = b.cst + b.car; // star

exports.cstar = cstar;
var cune = b.cun + b.ce; // une

exports.cune = cune;
var ckin = b.cki + b.cn; // kin

exports.ckin = ckin;
var csty = b.cst + b.cy; // sty

exports.csty = csty;
var cavy = b.cav + b.cy; // avy

exports.cavy = cavy;
var cazz = b.caz + b.cz; // azz

exports.cazz = cazz;
var creus = b.cre + b.cus; // reus

exports.creus = creus;
var ceus = b.ceu + b.cs; // eus

exports.ceus = ceus;
var cbon = b.cbo + b.cn; // bon

exports.cbon = cbon;
var cdder = b.cdd + b.cer; // dder

exports.cdder = cdder;
var cadder = b.ca + cdder; // adder

exports.cadder = cadder;
var cale = b.cal + b.ce; // ale

exports.cale = cale;
var cark = b.car + b.ck; // ark

exports.cark = cark;
var cpia = b.cpi + b.ca; // pia

exports.cpia = cpia;
var chadow = b.cha + cdow; // hadow

exports.chadow = chadow;
var cock = b.coc + b.ck; // ock

exports.cock = cock;
var ctten = b.ctt + b.cen; // tten

exports.ctten = ctten;
var ceal = b.cea + b.cl; // eal

exports.ceal = ceal;
var ctraw = ctra + b.cw; // traw

exports.ctraw = ctraw;
var craw = b.cra + b.cw; // raw

exports.craw = craw;
var ctle = b.ctl + b.ce; // tle

exports.ctle = ctle;
var cstle = b.cs + ctle; // stle

exports.cstle = cstle;
var crest = cres + b.ct; // rest

exports.crest = crest;
var corest = b.co + crest; // orest

exports.corest = corest;
var ccan = b.cca + b.cn; // can

exports.ccan = ccan;
var cuscan = b.cus + ccan; // uscan

exports.cuscan = cuscan;
var clla = b.cll + b.ca; // lla

exports.clla = clla;
var cilla = b.ci + clla; // illa

exports.cilla = cilla;
var cnilla = b.cn + cilla; // nilla

exports.cnilla = cnilla;
var canilla = b.ca + cnilla; // anilla

exports.canilla = canilla;
var cilion = cili + b.con; // ilion

exports.cilion = cilion;
var cmilion = b.cm + cilion; // milion

exports.cmilion = cmilion;
var crmilion = b.cr + cmilion; // rmilion

exports.crmilion = crmilion;
var cermilion = b.ce + crmilion; // ermilion

exports.cermilion = cermilion;
var chine = b.chi + b.cne; // hine

exports.chine = chine;
var comp = b.com + b.cp; // omp

exports.comp = comp;
var cclr = b.ccl + b.cr; // clr

exports.cclr = cclr;
var cded = b.cde + b.cd; // ded

exports.cded = cded;
var cbing = b.cb + cing; // bing

exports.cbing = cbing;
var ceth = b.cet + b.ch; // eth
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// NOTE: Additional Optimizations needed for the following
// These terms should support a future refactoring effort of the Shapes constants.
// The shapes constants is a really massive refactoring effort and not as functionally useful
// for current application needs. So this will be deferred for later and may be taken on
// in small chunks rather than all at once.
//////////////////////////////////////////////////////////////////
// smuggle something circle = b.cir + p.ccle; // ircle
// smuggle something crcle = b.crc + b.cle; // rcle
// smuggle something cCircle = p.cCir + p.ccle; // Circle
// smuggle something cOval = b.cOv + b.cal; // Oval
// smuggle something cuare = b.cua + b.cre; // uare
// smuggle something criangle = p.cria + b.cng + b.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = b.cng + b.cle; // ngle
// smuggle something cectangle = p.cect + w.cangle; // ectangle
// smuggle something cctangle = b.cct + w.cangle; // ctangle
// smuggle something ctangle = clr.ctan + p.cgle; // tangle
// smuggle something cctagon = b.cct + b.cag + b.con; // ctagon
// smuggle something ctagon = w.ctag + b.con; // tagon
// smuggle something cagon = b.cag + b.con; // agon
// smuggle something cexagon = b.cex + b.cag + b.con; // exagon
// smuggle something cxagon = b.cxa + p.cgon; // xagon
// smuggle something ceptagon = b.cep + w.ctag + b.con; // eptagon
// smuggle something cptagon = b.cpt + b.cag + b.con; // ptagon
// smuggle something conagon = b.con + b.cag + b.con; // onagon
// smuggle something cnagon = b.cna + p.cgon; // nagon
// smuggle something crapezoid = p.crap + b.cez + b.coi + b.cd; // rapezoid
// smuggle something capezoid = p.cape + p.czoid; // apezoid
// smuggle something cpezoid = b.cpe + p.czoid; // pezoid
// smuggle something cezoid = b.cez + b.coi + b.cd; // ezoid
// smuggle something coid = b.coi + b.cd; // oid
// smuggle something cube = b.cub + b.ce; // ube
// smuggle something ccubic = b.ccu + b.cbi + b.cc; // cubic
// smuggle something cbic = b.cbi + b.cc; // bic
// smuggle something cCubic = b.cCu + b.cbi + b.cc; // Cubic
// smuggle something cPlane = b.cPl + p.cane; // Plane
// smuggle something crve = b.crv + b.ce; // rve
// smuggle something cCurve = p.cCur + b.cve; // Curve
// smuggle something cquartic = w.cquart + b.cic; // quartic
// smuggle something cuartic = b.cua + p.crtic; // uartic
// smuggle something cartic = p.cart + b.cic; // artic
// smuggle something cQuartic = w.cQuart + b.cic; // Quartic
// smuggle something cconic = p.ccon + b.cic; // conic
// smuggle something conic = b.con + b.cic; // onic
// smuggle something cConic = p.cCon + b.cic; // Conic
// Optimized constant definition for word: cubic = p.cubic
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: cbic = b.cbi + b.cc
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: cic = b.cic
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: cc = b.cc
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// smuggle something cPlaneCurve = b.cPl + p.cane + p.cCur + b.cve; // PlaneCurve
// smuggle something claneCurve = w.clane + p.cCur + b.cve; // laneCurve
// smuggle something caneCurve = p.cane + p.cCur + b.cve; // aneCurve
// smuggle something cneCurve = b.cne + p.cCur + b.cve; // neCurve
// smuggle something ceCurve = b.ceC + p.curve; // eCurve
// Optimized constant definition for word: cuartic = b.cua + p.crtic
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: cartic = p.cart + b.cic
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: crtic = p.crtic
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: ctic = p.ctic
// Optimized constant definition for word: cPlane = b.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// smuggle something conicSection = b.con + b.cic + w.cSection; // onicSection
// smuggle something cnicSection = p.cnic + w.cSection; // nicSection
// smuggle something cicSection = b.cic + w.cSection; // icSection
// smuggle something ccSection = b.ccS + p.cect + p.cion; // cSection
// smuggle something cection = p.cect + p.cion; // ection
// smuggle something cnitCircle = b.cni + b.ctC + b.cir + p.ccle; // nitCircle
// smuggle something citCircle = b.cit + p.cCir + p.ccle; // itCircle
// smuggle something ctCircle = b.ctC + b.cir + p.ccle; // tCircle
// smuggle something cnitHyperbola = b.cni + b.ctH + p.cype + b.crb + p.cola; // nitHyperbola
// smuggle something citHyperbola = b.cit + p.cHyper + p.cbola; // itHyperbola
// smuggle something ctHyperbola = b.ctH + p.cype + b.crb + p.cola; // tHyperbola
// smuggle something cHyperbola = p.cHyper + p.cbola; // Hyperbola
// smuggle something cyperbola = p.cype + b.crb + p.cola; // yperbola
// smuggle something cperbola = p.cper + p.cbola; // perbola
// smuggle something cerbola = b.cer + p.cbola; // erbola
// smuggle something crbola = b.crb + p.cola; // rbola
// smuggle something choid = b.cho + b.cid; // hoid
// smuggle something cdCurve = b.cdC + p.curve; // dCurve
// smuggle something coseCurve = p.cose + p.cCur + b.cve; // oseCurve
// smuggle something cseCurve = b.cse + p.cCur + b.cve; // seCurve
// smuggle something cmCurve = b.cmC + p.curve; // mCurve
// smuggle something cidCurve = b.cid + p.cCur + b.cve; // idCurve
// smuggle something csCurve = b.csC + p.curve; // sCurve
// smuggle something cLimacon = g.cLima + p.ccon; // Limacon
// smuggle something cimacon = b.cim + b.cac + b.con; // imacon
// smuggle something cmacon = b.cma + p.ccon; // macon
// smuggle something cacon = b.cac + b.con; // acon
// smuggle something cTrisectrix = p.cTri + p.csec + p.ctri + b.cx; // Trisectrix
// smuggle something crisectrix = p.crise + b.cct + b.cri + b.cx; // risectrix
// smuggle something cisectrix = p.cise + b.cct + b.cri + b.cx; // isectrix
// smuggle something csectrix = p.csec + p.ctri + b.cx; // sectrix
// smuggle something cectrix = p.cect + b.cri + b.cx; // ectrix
// smuggle something cctrix = b.cct + b.cri + b.cx; // ctrix
// smuggle something ctrix = p.ctri + b.cx; // trix
// smuggle something crix = b.cri + b.cx; // rix
// smuggle something croid = b.cro + b.cid; // roid
// smuggle something cloid = b.clo + b.cid; // loid
// smuggle something crifolium = b.cri + b.cfo + p.clium; // rifolium
// smuggle something cifolium = b.cif + b.col + p.cium; // ifolium
// smuggle something cfolium = b.cfo + p.clium; // folium
// smuggle something colium = b.col + p.cium; // olium
// smuggle something ccycloid = b.ccy + b.ccl + b.coi + b.cd; // cycloid
// smuggle something cycloid = b.cyc + b.clo + b.cid; // ycloid
// smuggle something ccloid = b.ccl + b.coi + b.cd; // cloid
// smuggle something cpiral = b.cpi + p.cral; // piral
// smuggle something ciral = b.cir + b.cal; // iral
// smuggle something cchoid = b.cch + b.coi + b.cd; // choid
// smuggle something calCurve = b.cal + p.cCur + b.cve; // alCurve
// smuggle something clCurve = b.clC + p.curve; // lCurve
// smuggle something cicCurve = b.cic + p.cCur + b.cve; // icCurve
// smuggle something ccCurve = b.ccC + p.curve; // cCurve
// smuggle something cllipticCurve = b.cll + b.cip + p.ctic + p.cCur + b.cve; // llipticCurve
// smuggle something clipticCurve = b.cli + b.cpt + b.cic + p.cCur + b.cve; // lipticCurve
// smuggle something cipticCurve = b.cip + p.ctic + p.cCur + b.cve; // ipticCurve
// smuggle something cpticCurve = b.cpt + b.cic + p.cCur + b.cve; // pticCurve
// smuggle something cticCurve = p.ctic + p.cCur + b.cve; // ticCurve
//
// smuggle something crCurve = b.crC + p.curve; // rCurve
// smuggle something cCurve = p.cCur + b.cve; // Curve
// smuggle something crve = b.crv + b.ce; // rve
// smuggle something cSurface = b.cSu + b.crf + p.cace; // Surface
// smuggle something curface = b.cur + w.cface; // urface
// smuggle something crface = b.crf + p.cace; // rface
// smuggle something ctCurve = b.ctC + p.curve; // tCurve
// smuggle something cSpiral = b.cSp + b.cir + b.cal; // Spiral
// smuggle something cpiral = b.cpi + p.cral; // piral
// smuggle something ciral = b.cir + b.cal; // iral
// smuggle something ctochrone = b.cto + b.cch + p.cron + b.ce; // tochrone
// smuggle something cochrone = b.coc + b.chr + n.cone; // ochrone
// smuggle something cchrone = b.cch + p.cron + b.ce; // chrone
// smuggle something chrone = b.chr + n.cone; // hrone
// smuggle something crone = p.cron + b.ce; // rone
// smuggle something coid = b.coi + b.cd; // oid
// smuggle something cloid = b.clo + b.cid; // loid
// smuggle something cIsochrone = p.cIso + b.cch + p.cron + b.ce; // Isochrone
// smuggle something csochrone = b.cso + b.cch + p.cron + b.ce; // sochrone
// smuggle something ceCurve = b.ceC + p.curve; // eCurve
// smuggle something csSpiral = b.csS + b.cpi + p.cral; // sSpiral
// smuggle something ctsSpiral = b.cts + b.cSp + b.cir + b.cal; // tsSpiral
// smuggle something cicSpiral = b.cic + b.cSp + b.cir + b.cal; // icSpiral
// smuggle something ccSpiral = b.ccS + b.cpi + p.cral; // cSpiral
// smuggle something cractrix = b.cra + b.cct + b.cri + b.cx; // ractrix
// smuggle something cactrix = w.cact + b.cri + b.cx; // actrix
// smuggle something cctrix = b.cct + b.cri + b.cx; // ctrix
// smuggle something ctrix = p.ctri + b.cx; // trix
// smuggle something crix = b.cri + b.cx; // rix
// smuggle something cchoid = b.cch + b.coi + b.cd; // choid
// smuggle something choid = b.cho + b.cid; // hoid
// smuggle something cBSpline = b.cBS + b.cpl + p.cine; // BSpline
// smuggle something cSpline = b.cSp + w.cline; // Spline
// smuggle something cpline = b.cpl + p.cine; // pline
// smuggle something csCurve = b.csC + p.curve; // sCurve
// smuggle something calCurve = b.cal + p.cCur + b.cve; // alCurve
// smuggle something clCurve = b.clC + p.curve; // lCurve
// smuggle something cTriangle = p.cTri + w.cangle; // Triangle
// smuggle something criangle = p.cria + b.cng + b.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = b.cng + b.cle; // ngle
// smuggle something caustic = b.cau + p.cstic; // austic
// smuggle something custic = p.cust + b.cic; // ustic
// smuggle something cacaustic = b.cac + b.cau + p.cstic; // acaustic
// smuggle something ccaustic = p.ccau + p.cstic; // caustic
// smuggle something csoid = b.cso + b.cid; // soid
// smuggle something cvolute = b.cvo + b.clu + b.cte; // volute
// smuggle something colute = b.col + p.cute; // olute
// smuggle something clute = b.clu + b.cte; // lute
// smuggle something cette = b.cet + b.cte; // ette
// smuggle something coptic = p.copt + b.cic; // optic
// smuggle something cptic = b.cpt + b.cic; // ptic
// smuggle something cmic = b.camai + b.cc; // mic
// smuggle something cPedalCurve = b.cPe + b.cda + b.clC + p.curve; // PedalCurve
// smuggle something cedalCurve = b.ced + b.cal + p.cCur + b.cve; // edalCurve
// smuggle something cdalCurve = b.cda + b.clC + p.curve; // dalCurve
// smuggle something celix = b.cel + b.cix; // elix
// smuggle something clix = b.cli + b.cx; // lix
// smuggle something cboloid = p.cbol + b.coi + b.cd; // boloid
// smuggle something coloid = b.col + b.coi + b.cd; // oloid
//
// Optimized constant definition for word: cns = b.cns
// Optimized constant definition for word: cMinimal = g.cMin + b.cim + b.cal
// Optimized constant definition for word: cSurface = b.cSu + b.crf + p.cace
// Optimized constant definition for word: cs = b.cs
// Optimized constant definition for word: cMinimal = g.cMin + b.cim + b.cal
// Optimized constant definition for word: cSurface = b.cSu + b.crf + p.cace
// smuggle something cMinimalSurface = g.cMin + b.cim + b.cal + b.cSu + b.crf + p.cace; // MinimalSurface
// smuggle something cinimalSurface = p.cini + p.cmal + b.cSu + b.crf + p.cace; // inimalSurface
// smuggle something cnimalSurface = p.cnim + b.cal + b.cSu + b.crf + p.cace; // nimalSurface
// smuggle something cimalSurface = b.cim + b.cal + b.cSu + b.crf + p.cace; // imalSurface
// smuggle something cmalSurface = p.cmal + b.cSu + b.crf + p.cace; // malSurface
// smuggle something calSurface = b.cal + b.cSu + b.crf + p.cace; // alSurface
// smuggle something clSurface = b.clS + b.cur + w.cface; // lSurface
// smuggle something cSurface = b.cSu + b.crf + p.cace; // Surface
// smuggle something curface = b.cur + w.cface; // urface
// smuggle something crface = b.crf + p.cace; // rface
// smuggle something cnoid = b.cno + b.cid; // noid
// smuggle something coid = b.coi + b.cd; // oid
// smuggle something croid = b.cro + b.cid; // roid
// smuggle something csSurface = b.csS + b.cur + w.cface; // sSurface
// smuggle something cSheet = b.cSh + p.ceet; // Sheet
// smuggle something cheet = b.che + b.cet; // heet
// smuggle something cboloid = p.cbol + b.coi + b.cd; // boloid
// smuggle something coloid = b.col + b.coi + b.cd; // oloid
// smuggle something cloid = b.clo + b.cid; // loid
// smuggle something cphere = b.cph + p.cere; // phere
// smuggle something chere = w.cher + b.ce; // here
// smuggle something cCubic = b.cCu + b.cbi + b.cc; // Cubic
// smuggle something cbic = b.cbi + b.cc; // bic
// smuggle something caddle = w.c_add + b.cle; // addle
// smuggle something cddle = b.cdd + b.cle; // ddle
// smuggle something cdle = b.cdl + b.ce; // dle
// smuggle something ceCurve = b.ceC + p.curve; // eCurve
// smuggle something cCurve = p.cCur + b.cve; // Curve
// smuggle something crve = b.crv + b.ce; // rve
// smuggle something cract = b.cra + b.cct; // ract
// smuggle something cFractal = p.cFra + b.cct + b.cal; // Fractal
// smuggle something cractal = b.cra + b.cct + b.cal; // ractal
// smuggle something cactal = w.cact + b.cal; // actal
// smuggle something cctal = b.cct + b.cal; // ctal
// smuggle something cflake = b.cfl + p.cake; // flake
// smuggle something clake = b.cla + b.cke; // lake
// smuggle something cAttractor = e.cAt + p.ctra + p.cctor; // Attractor
// smuggle something cttractor = b.ctt + b.cra + p.cctor; // ttractor
// smuggle something ctractor = p.ctra + p.cctor; // tractor
// smuggle something cractor = b.cra + p.cctor; // ractor
// smuggle something cactor = w.cact + b.cor; // actor
// smuggle something cystem = p.cyst + b.cem; // ystem
// smuggle something cstem = p.cste + b.cm; // stem
// smuggle something ctem = b.cte + b.cm; // tem
//
// smuggle something calTriangle = b.cal + p.cTri + w.cangle; // alTriangle
// smuggle something clTriangle = b.clT + p.cria + b.cng + b.cle; // lTriangle
// smuggle something cTriangle = p.cTri + w.cangle; // Triangle
// smuggle something criangle = p.cria + b.cng + b.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = b.cng + b.cle; // ngle
// smuggle something cCurve = p.cCur + b.cve; // Curve
// smuggle something crve = b.crv + b.ce; // rve
// smuggle something cTiling = b.cTi + p.clin + b.cg; // Tiling
// smuggle something ciling = p.cili + b.cng; // iling
// smuggle something cling = p.clin + b.cg; // ling
// smuggle something cFractal = p.cFra + b.cct + b.cal; // Fractal
// smuggle something cractal = b.cra + b.cct + b.cal; // ractal
// smuggle something cactal = w.cact + b.cal; // actal
// smuggle something cctal = b.cct + b.cal; // ctal
// smuggle something ciCurve = b.ciC + p.curve; // iCurve
// Optimized constant definition for word: cVon = b.cVo + b.cn
// Optimized constant definition for word: cKoch = b.cKo + b.cch
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: con = b.con
// Optimized constant definition for word: cKoch = b.cKo + b.cch
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// Optimized constant definition for word: cn = b.cn
// Optimized constant definition for word: cKoch = b.cKo + b.cch
// Optimized constant definition for word: cCurve = p.cCur + b.cve
// smuggle something cKochCurve = b.cKo + b.cch + p.cCur + b.cve; // KochCurve
// smuggle something cochCurve = b.coc + b.chC + p.curve; // ochCurve
// smuggle something cchCurve = b.cch + p.cCur + b.cve; // chCurve
// smuggle something chCurve = b.chC + p.curve; // hCurve
// smuggle something cBrownianMotion = clr.cBrown + p.cian + b.cMo + p.ction; // BrownianMotion
// smuggle something crownianMotion = p.crown + p.cian + b.cMo + p.ction; // rownianMotion
// smuggle something cownianMotion = p.cown + p.cian + b.cMo + p.ction; // ownianMotion
// smuggle something cwnianMotion = b.cwn + p.cian + b.cMo + p.ction; // wnianMotion
// smuggle something cnianMotion = p.cnia + b.cnM + b.cot + p.cion; // nianMotion
// smuggle something cianMotion = p.cian + b.cMo + p.ction; // ianMotion
// smuggle something canMotion = b.can + b.cMo + p.ction; // anMotion
// smuggle something cnMotion = b.cnM + b.cot + p.cion; // nMotion
// smuggle something cMotion = b.cMo + p.ction; // Motion
// smuggle something cotion = b.cot + p.cion; // otion
// smuggle something cDPolymer = b.cDP + b.col + b.cym + b.cer; // DPolymer
// smuggle something cPolymer = b.cPo + b.cly + p.cmer; // Polymer
// smuggle something colymer = b.col + b.cym + b.cer; // olymer
// smuggle something clymer = b.cly + p.cmer; // lymer
// smuggle something cymer = b.cym + b.cer; // ymer
// Optimized constant definition for word: cion = p.cion
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: con = b.con
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: cn = b.cn
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: cront = p.cron + b.ct
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: cont = p.cont
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: cnt = b.cnt
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: ct = b.ct
// Optimized constant definition for word: cIn2 = b.cIn + n.c2
// Optimized constant definition for word: cD = b.cD
// smuggle something cIn2D = b.cIn + n.c2 + b.cD; // In2D
// smuggle something cn2D = b.cn + n.c2 + b.cD; // n2D
// smuggle something c2DPercolationCluster = n.c2 + b.cDP + b.cer + p.ccol + p.cation + b.cCl + p.cust + b.cer; // 2DPercolationCluster
// Optimized constant definition for word: cD = b.cD
// Optimized constant definition for word: cPercolation = p.cPer + p.ccol + p.cation
// Optimized constant definition for word: cCluster = b.cCl + p.cust + b.cer
// smuggle something cPercolationCluster = p.cPer + p.ccol + p.cation + b.cCl + p.cust + b.cer; // PercolationCluster
// smuggle something cercolationCluster = b.cer + p.ccol + p.cation + b.cCl + p.cust + b.cer; // ercolationCluster
// smuggle something crcolationCluster = b.crc + p.cola + p.ction + b.cCl + p.cust + b.cer; // rcolationCluster
// smuggle something ccolationCluster = p.ccol + p.cation + b.cCl + p.cust + b.cer; // colationCluster
// smuggle something colationCluster = p.cola + p.ction + b.cCl + p.cust + b.cer; // olationCluster
// smuggle something clationCluster = p.clat + p.cion + b.cCl + p.cust + b.cer; // lationCluster
// smuggle something cationCluster = p.cation + b.cCl + p.cust + b.cer; // ationCluster
// smuggle something ctionCluster = p.ction + b.cCl + p.cust + b.cer; // tionCluster
// smuggle something cionCluster = p.cion + b.cCl + p.cust + b.cer; // ionCluster
// smuggle something conCluster = b.con + b.cCl + p.cust + b.cer; // onCluster
// smuggle something cnCluster = b.cnC + p.clus + p.cter; // nCluster
// smuggle something cCluster = b.cCl + p.cust + b.cer; // Cluster
// smuggle something cluster = p.clus + p.cter; // luster
// smuggle something custer = p.cust + b.cer; // uster
// smuggle something cPolygon = b.cPo + b.cly + p.cgon; // Polygon
// smuggle something colygon = b.col + b.cyg + b.con; // olygon
// smuggle something clygon = b.cly + p.cgon; // lygon
// smuggle something cygon = b.cyg + b.con; // ygon
// smuggle something cEquilateral = p.cEqu + b.cil + p.cate + p.cral; // Equilateral
// smuggle something cquilateral = b.cqu + b.cil + p.cate + p.cral; // quilateral
// smuggle something cuilateral = b.cui + p.clate + p.cral; // uilateral
// smuggle something cilateral = b.cil + p.cate + p.cral; // ilateral
// smuggle something clateral = p.clate + p.cral; // lateral
// smuggle something cateral = p.cate + p.cral; // ateral
// smuggle something cteral = p.cter + b.cal; // teral
// smuggle something ceral = p.cera + b.cl; // eral
// smuggle something carPolygon = b.car + b.cPo + b.cly + p.cgon; // arPolygon
// smuggle something crPolygon = b.crP + b.col + b.cyg + b.con; // rPolygon
// smuggle something ctagram = w.ctag + p.cram; // tagram
// smuggle something cagram = b.cag + p.cram; // agram
// smuggle something cgram = b.cgr + b.cam; // gram
// smuggle something cagon = b.cag + b.con; // agon
// smuggle something cecagon = b.cec + b.cag + b.con; // ecagon
// smuggle something ccagon = b.cca + p.cgon; // cagon
// smuggle something cdecagon = b.cde + b.cca + p.cgon; // decagon
// smuggle something cadecagon = p.cade + b.cca + p.cgon; // adecagon
// smuggle something ctadecagon = b.cta + b.cde + b.cca + p.cgon; // tadecagon
// smuggle something cogon = b.cog + b.con; // ogon
//
// smuggle something cahedron = b.cah + b.ced + p.cron; // ahedron
// smuggle something chedron = b.che + b.cdr + b.con; // hedron
// smuggle something cedron = b.ced + p.cron; // edron
// smuggle something cdron = b.cdr + b.con; // dron
// smuggle something cDodecahedron = b.cDo + b.cde + b.cca + b.che + b.cdr + b.con; // Dodecahedron
// smuggle something codecahedron = p.code + b.cca + b.che + b.cdr + b.con; // odecahedron
// smuggle something cdecahedron = b.cde + b.cca + b.che + b.cdr + b.con; // decahedron
// smuggle something cecahedron = b.cec + b.cah + b.ced + p.cron; // ecahedron
// smuggle something ccahedron = b.cca + b.che + b.cdr + b.con; // cahedron
// smuggle something cIcosahedron = b.cIc + b.cos + b.cah + b.ced + p.cron; // Icosahedron
// smuggle something ccosahedron = b.cco + b.csa + b.che + b.cdr + b.con; // cosahedron
// smuggle something cosahedron = b.cos + b.cah + b.ced + p.cron; // osahedron
// smuggle something csahedron = b.csa + b.che + b.cdr + b.con; // sahedron
// smuggle something cHosohedron = b.cHo + b.cso + b.che + b.cdr + b.con; // Hosohedron
// smuggle something cosohedron = b.cos + b.coh + b.ced + p.cron; // osohedron
// smuggle something csohedron = b.cso + b.che + b.cdr + b.con; // sohedron
// smuggle something cohedron = b.coh + b.ced + p.cron; // ohedron
// smuggle something cagon = b.cag + b.con; // agon
// smuggle something chedra = b.che + b.cdr + b.ca; // hedra
// smuggle something cedra = b.ced + b.cra; // edra
// smuggle something cdra = b.cdr + b.ca; // dra
// smuggle something cStellatedDodecahedron = b.cSt + p.cell + p.cate + b.cdD + p.code + b.cca + b.che + b.cdr + b.con; // StellatedDodecahedron
// smuggle something ctellatedDodecahedron = b.cte + p.clla + p.cted + b.cDo + b.cde + b.cca + b.che + b.cdr + b.con; // tellatedDodecahedron
// smuggle something cellatedDodecahedron = p.cell + p.cate + b.cdD + p.code + b.cca + b.che + b.cdr + b.con; // ellatedDodecahedron
// smuggle something cllatedDodecahedron = p.clla + p.cted + b.cDo + b.cde + b.cca + b.che + b.cdr + b.con; // llatedDodecahedron
// smuggle something clatedDodecahedron = p.clate + b.cdD + p.code + b.cca + b.che + b.cdr + b.con; // latedDodecahedron
// smuggle something catedDodecahedron = p.cate + b.cdD + p.code + b.cca + b.che + b.cdr + b.con; // atedDodecahedron
// smuggle something ctedDodecahedron = p.cted + b.cDo + b.cde + b.cca + b.che + b.cdr + b.con; // tedDodecahedron
// smuggle something cedDodecahedron = b.ced + b.cDo + b.cde + b.cca + b.che + b.cdr + b.con; // edDodecahedron
// smuggle something cdDodecahedron = b.cdD + p.code + b.cca + b.che + b.cdr + b.con; // dDodecahedron
// smuggle something cSquareTiling = b.cSq + b.cua + b.cre + b.cTi + p.clin + b.cg; // SquareTiling
// smuggle something cquareTiling = p.cquare + b.cTi + p.clin + b.cg; // quareTiling
// smuggle something cuareTiling = b.cua + b.cre + b.cTi + p.clin + b.cg; // uareTiling
// smuggle something careTiling = p.care + b.cTi + p.clin + b.cg; // areTiling
// smuggle something creTiling = b.cre + b.cTi + p.clin + b.cg; // reTiling
// smuggle something ceTiling = b.ceT + p.cili + b.cng; // eTiling
// smuggle something cTiling = b.cTi + p.clin + b.cg; // Tiling
// smuggle something ciling = p.cili + b.cng; // iling
// smuggle something cling = p.clin + b.cg; // ling
// smuggle something cTriangularTiling = p.cTri + b.can + b.cgu + b.cla + b.crT + p.cili + b.cng; // TriangularTiling
// smuggle something criangularTiling = p.cria + b.cng + p.cular + b.cTi + p.clin + b.cg; // riangularTiling
// smuggle something ciangularTiling = p.cian + b.cgu + b.cla + b.crT + p.cili + b.cng; // iangularTiling
// smuggle something cangularTiling = b.can + b.cgu + b.cla + b.crT + p.cili + b.cng; // angularTiling
// smuggle something cngularTiling = b.cng + p.cular + b.cTi + p.clin + b.cg; // ngularTiling
// smuggle something cgularTiling = b.cgu + b.cla + b.crT + p.cili + b.cng; // gularTiling
// smuggle something cularTiling = p.cular + b.cTi + p.clin + b.cg; // ularTiling
// smuggle something clarTiling = b.cla + b.crT + p.cili + b.cng; // larTiling
// smuggle something carTiling = b.car + b.cTi + p.clin + b.cg; // arTiling
// smuggle something crTiling = b.crT + p.cili + b.cng; // rTiling
// smuggle something cHexagonalTiling = g.cHex + b.cag + p.conal + b.cTi + p.clin + b.cg; // HexagonalTiling
// smuggle something cexagonalTiling = b.cex + b.cag + p.conal + b.cTi + p.clin + b.cg; // exagonalTiling
// smuggle something cxagonalTiling = b.cxa + p.cgon + b.cal + b.cTi + p.clin + b.cg; // xagonalTiling
// smuggle something cagonalTiling = b.cag + p.conal + b.cTi + p.clin + b.cg; // agonalTiling
// smuggle something cgonalTiling = p.cgon + b.cal + b.cTi + p.clin + b.cg; // gonalTiling
// smuggle something conalTiling = p.conal + b.cTi + p.clin + b.cg; // onalTiling
// smuggle something cnalTiling = p.cnal + b.cTi + p.clin + b.cg; // nalTiling
// smuggle something calTiling = b.cal + b.cTi + p.clin + b.cg; // alTiling
// smuggle something clTiling = b.clT + p.cili + b.cng; // lTiling
// smuggle something cicTiling = b.cic + b.cTi + p.clin + b.cg; // icTiling
// smuggle something ccTiling = b.ccT + p.cili + b.cng; // cTiling
// smuggle something cagrammicTiling = b.cag + p.cram + b.camai + b.ccT + p.cili + b.cng; // agrammicTiling
// smuggle something cgrammicTiling = b.cgr + b.cam + b.camai + b.ccT + p.cili + b.cng; // grammicTiling
// smuggle something crammicTiling = p.cram + b.camai + b.ccT + p.cili + b.cng; // rammicTiling
// smuggle something cammicTiling = b.cam + b.camai + b.ccT + p.cili + b.cng; // ammicTiling
// smuggle something cmmicTiling = b.cmm + b.cic + b.cTi + p.clin + b.cg; // mmicTiling
// smuggle something cmicTiling = b.camai + b.ccT + p.cili + b.cng; // micTiling
// smuggle something c120Cell = n.c120 + w.cCell; // 120Cell
// smuggle something c20Cell = n.c20 + w.cCell; // 20Cell
// smuggle something c0Cell = n.c0 + w.cCell; // 0Cell
// smuggle something c600Cell = n.c600 + w.cCell; // 600Cell
// smuggle something c00Cell = n.c00 + w.cCell; // 00Cell
// smuggle something cSphere = b.cSp + w.cher + b.ce; // Sphere
// smuggle something cphere = b.cph + p.cere; // phere
// smuggle something chere = w.cher + b.ce; // here
// smuggle something cIcosahedral120Cell = b.cIc + b.cos + b.cah + b.ced + p.cral + n.c120 + w.cCell; // Icosahedral120Cell
// smuggle something ccosahedral120Cell = b.cco + b.csa + b.che + b.cdr + b.cal + n.c120 + w.cCell; // cosahedral120Cell
// smuggle something cosahedral120Cell = b.cos + b.cah + b.ced + p.cral + n.c120 + w.cCell; // osahedral120Cell
// smuggle something csahedral120Cell = b.csa + b.che + b.cdr + b.cal + n.c120 + w.cCell; // sahedral120Cell
// smuggle something cahedral120Cell = b.cah + b.ced + p.cral + n.c120 + w.cCell; // ahedral120Cell
// smuggle something chedral120Cell = b.che + b.cdr + b.cal + n.c120 + w.cCell; // hedral120Cell
// smuggle something cedral120Cell = b.ced + p.cral + n.c120 + w.cCell; // edral120Cell
// smuggle something cdral120Cell = b.cdr + b.cal + n.c120 + w.cCell; // dral120Cell
// smuggle something cral120Cell = p.cral + n.c120 + w.cCell; // ral120Cell
// smuggle something cal120Cell = b.cal + n.c120 + w.cCell; // al120Cell
// smuggle something cl120Cell = b.cl + n.c120 + w.cCell; // l120Cell
// smuggle something cStellated120Cell = b.cSt + p.cell + p.cate + b.cd + n.c120 + w.cCell; // Stellated120Cell
// smuggle something ctellated120Cell = b.cte + p.clla + p.cted + n.c120 + w.cCell; // tellated120Cell
// smuggle something cellated120Cell = p.cell + p.cate + b.cd + n.c120 + w.cCell; // ellated120Cell
// smuggle something cllated120Cell = p.clla + p.cted + n.c120 + w.cCell; // llated120Cell
// smuggle something clated120Cell = p.clate + b.cd + n.c120 + w.cCell; // lated120Cell
// smuggle something cated120Cell = p.cate + b.cd + n.c120 + w.cCell; // ated120Cell
// smuggle something cted120Cell = p.cted + n.c120 + w.cCell; // ted120Cell
// smuggle something ced120Cell = b.ced + n.c120 + w.cCell; // ed120Cell
// smuggle something cd120Cell = b.cd + n.c120 + w.cCell; // d120Cell
// smuggle something cGrand120Cell = b.cGr + p.cand + n.c120 + w.cCell; // Grand120Cell
// smuggle something crand120Cell = p.cran + b.cd + n.c120 + w.cCell; // rand120Cell
// smuggle something cand120Cell = p.cand + n.c120 + w.cCell; // and120Cell
// smuggle something cnd120Cell = b.cnd + n.c120 + w.cCell; // nd120Cell
// Optimized constant definition for word: cGrand = b.cGr + p.cand
// Optimized constant definition for word: cStellated120 = b.cSt + p.cell + p.cate + b.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: crand = p.cran + b.cd
// Optimized constant definition for word: cStellated120 = b.cSt + p.cell + p.cate + b.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cand = p.cand
// Optimized constant definition for word: cStellated120 = b.cSt + p.cell + p.cate + b.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cnd = b.cnd
// Optimized constant definition for word: cStellated120 = b.cSt + p.cell + p.cate + b.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cd = b.cd
// Optimized constant definition for word: cStellated120 = b.cSt + p.cell + p.cate + b.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// smuggle something cHoneycomb = w.cHoney + w.ccomb; // Honeycomb
// smuggle something coneycomb = n.cone + b.cyc + p.comb; // oneycomb
// smuggle something cneycomb = b.cne + b.cyc + p.comb; // neycomb
// smuggle something ceycomb = b.cey + w.ccomb; // eycomb
// smuggle something cycomb = b.cyc + p.comb; // ycomb
// smuggle something cHosohedralHoneycomb = b.cHo + b.cso + b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // HosohedralHoneycomb
// smuggle something cosohedralHoneycomb = b.cos + b.coh + b.ced + p.cral + w.cHoney + w.ccomb; // osohedralHoneycomb
// smuggle something csohedralHoneycomb = b.cso + b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // sohedralHoneycomb
// smuggle something cohedralHoneycomb = b.coh + b.ced + p.cral + w.cHoney + w.ccomb; // ohedralHoneycomb
// smuggle something chedralHoneycomb = b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // hedralHoneycomb
// smuggle something cedralHoneycomb = b.ced + p.cral + w.cHoney + w.ccomb; // edralHoneycomb
// smuggle something cdralHoneycomb = b.cdr + b.cal + w.cHoney + w.ccomb; // dralHoneycomb
// smuggle something cralHoneycomb = p.cral + w.cHoney + w.ccomb; // ralHoneycomb
// smuggle something calHoneycomb = b.cal + w.cHoney + w.ccomb; // alHoneycomb
// smuggle something clHoneycomb = b.clH + n.cone + b.cyc + p.comb; // lHoneycomb
// smuggle something cTilingHoneycomb = b.cTi + p.clin + b.cgH + n.cone + b.cyc + p.comb; // TilingHoneycomb
// smuggle something cilingHoneycomb = p.cili + b.cng + w.cHoney + w.ccomb; // ilingHoneycomb
// smuggle something clingHoneycomb = p.clin + b.cgH + n.cone + b.cyc + p.comb; // lingHoneycomb
// smuggle something cingHoneycomb = p.cing + w.cHoney + w.ccomb; // ingHoneycomb
// smuggle something cngHoneycomb = b.cng + w.cHoney + w.ccomb; // ngHoneycomb
// smuggle something cgHoneycomb = b.cgH + n.cone + b.cyc + p.comb; // gHoneycomb
// smuggle something cDodecahedralHoneycomb = b.cDo + b.cde + b.cca + b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // DodecahedralHoneycomb
// smuggle something codecahedralHoneycomb = p.code + b.cca + b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // odecahedralHoneycomb
// smuggle something cdecahedralHoneycomb = b.cde + b.cca + b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // decahedralHoneycomb
// smuggle something cecahedralHoneycomb = b.cec + b.cah + b.ced + p.cral + w.cHoney + w.ccomb; // ecahedralHoneycomb
// smuggle something ccahedralHoneycomb = b.cca + b.che + b.cdr + b.cal + w.cHoney + w.ccomb; // cahedralHoneycomb
// smuggle something cahedralHoneycomb = b.cah + b.ced + p.cral + w.cHoney + w.ccomb; // ahedralHoneycomb
//

exports.ceth = ceth;