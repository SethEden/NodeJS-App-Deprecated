"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cter = exports.cdate = exports.cate = exports.ctive = exports.cies = exports.cuary = exports.cide = exports.code = exports.cilter = exports.cisabled = exports.cttributes = exports.cttribute = exports.cibling = exports.child = exports.check = exports.coolean = exports.celector = exports.cctor = exports.ctor = exports.carent = exports.crent = exports.cith = exports.cisibility = exports.cibility = exports.cility = exports.cili = exports.cOperat = exports.cemb = exports.cEql = exports.ceql = exports.cype = exports.cctrl = exports.cctr = exports.click = exports.cnner = exports.celete = exports.cynch = exports.colid = exports.cPRE = exports.cPre = exports.cpre = exports.cMac = exports.cATA = exports.cata = exports.cbject = exports.ctring = exports.cING = exports.cing = exports.cALID = exports.calid = exports.cable = exports.cCon = exports.ccon = exports.clpha = exports.cExt = exports.cext = exports.cile = exports.came = exports.cABC = exports.chref = exports.ctemp = exports.c_lass = exports.chare = exports.cest = exports.cage = exports.cITION = exports.cition = exports.cmation = exports.cction = exports.cTION = exports.ction = exports.calse = exports.crue = exports.cillion = exports.cill = exports.csion = exports.cION = exports.cion = exports.chousand = exports.csand = exports.cand = exports.cundred = exports.cund = exports.cblue = exports.cgreen = exports.cred = exports.cifty = exports.chirty = exports.cwenty = exports.cigh = exports.chir = exports.cteen = exports.cwelve = exports.cleven = exports.cine = exports.cight = exports.ceven = exports.cive = exports.cour = exports.chree = void 0;
exports.cnon = exports.cHep = exports.chep = exports.cHex = exports.chex = exports.cgon = exports.cOct = exports.coct = exports.cRect = exports.crect = exports.cRec = exports.crec = exports.cTri = exports.ctri = exports.cgle = exports.cquare = exports.care = exports.ccle = exports.cCir = exports.ccir = exports.cegree = exports.cormal = exports.cmal = exports.cize = exports.cart = exports.cDot = exports.cdot = exports.cound = exports.cmel = exports.cray = exports.cose = exports.card = exports.cRROR = exports.crror = exports.carning = exports.carn = exports.create = exports.candom = exports.cdom = exports.cenerate = exports.crate = exports.convert = exports.cvert = exports.cVer = exports.cver = exports.clean = exports.ceplace = exports.clace = exports.cingle = exports.cetermine = exports.cmine = exports.cMax = exports.cmax = exports.cMin = exports.cmin = exports.cource = exports.cmis = exports.cMis = exports.ciary = exports.cary = exports.cung = exports.ceous = exports.cous = exports.cian = exports.cCel = exports.ccel = exports.cish = exports.cese = exports.cino = exports.cPRO = exports.cPro = exports.cpro = exports.cara = exports.cral = exports.cInv = exports.cinv = exports.cOPS = exports.cops = exports.caft = exports.cunt = exports.c_ASE = exports.c_ase = exports.cert = exports.ccore = exports.cCor = exports.ccor = exports.cder = exports.cace = exports.cete = exports.ciew = exports.cVar = exports.cvar = exports.cath = exports.cmed = exports.cInter = exports.cinter = exports.cime = exports.cMENT = exports.cment = exports.cTER = void 0;
exports.cCol = exports.ccol = exports.cMod = exports.cmod = exports.cull = exports.cont = exports.ctieth = exports.cieth = exports.ccond = exports.cumber = exports.cLOY = exports.cloy = exports.crive = exports.cArg = exports.carg = exports.cvent = exports.cVEN = exports.cven = exports.casic = exports.cPer = exports.cper = exports.cExe = exports.cexe = exports.cnal = exports.cPLE = exports.cple = exports.cMulti = exports.cmulti = exports.clti = exports.common = exports.cmon = exports.cemo = exports.cval = exports.cesh = exports.cait = exports.cule = exports.cusiness = exports.cness = exports.cavigate = exports.cENV = exports.clash = exports.cward = exports.cwap = exports.cARSE = exports.carse = exports.cars = exports.cRSE = exports.crse = exports.coot = exports.cAPP = exports.cApp = exports.capp = exports.cLICA = exports.clica = exports.chan = exports.chen = exports.ceat = exports.cress = exports.cRes = exports.cres = exports.cess = exports.cMap = exports.cmap = exports.cord = exports.cween = exports.ctch = exports.cain = exports.cence = exports.cenc = exports.cDiff = exports.cggregate = exports.cgate = exports.cduct = exports.couble = exports.cble = exports.chort = exports.cong = exports.cloat = exports.cnteger = exports.cideo = exports.cComp = exports.ccomp = exports.csol = exports.cplify = exports.cSim = exports.csim = exports.cort = exports.cation = exports.cLoc = exports.cloc = exports.cint = exports.cTrans = exports.ctrans = exports.cTra = exports.ctra = exports.cFra = exports.cfra = exports.czoid = exports.crap = exports.cNon = void 0;
exports.clay = exports.cAIL = exports.cail = exports.cSha = exports.csha = exports.cics = exports.cPhon = exports.cphon = exports.ctope = exports.cIso = exports.ciso = exports.cstant = exports.cbola = exports.cbol = exports.cHyper = exports.chyper = exports.cUni = exports.cuni = exports.cSec = exports.csec = exports.crtic = exports.cQua = exports.cqua = exports.curve = exports.cane = exports.cubic = exports.cCOM = exports.cCom = exports.ccom = exports.cLin = exports.clin = exports.cind = exports.cASS = exports.cass = exports.crgb = exports.cear = exports.crage = exports.csis = exports.cAna = exports.cana = exports.cPROD = exports.cProd = exports.cprod = exports.cDEV = exports.cDev = exports.cdev = exports.cack = exports.cric = exports.cMet = exports.cmet = exports.ctain = exports.cReg = exports.creg = exports.cAll = exports.call = exports.cdex = exports.cator = exports.cGen = exports.cgen = exports.crint = exports.cTart = exports.ctart = exports.cTar = exports.ctar = exports.cTert = exports.ctert = exports.cmit = exports.cmary = exports.cPri = exports.cpri = exports.cncer = exports.cSeq = exports.cseq = exports.cbout = exports.cias = exports.crame = exports.cram = exports.clob = exports.cMAND = exports.cmand = exports.cCust = exports.ccust = exports.cust = exports.centa = exports.cent = exports.cules = exports.cCli = exports.ccli = exports.cAve = exports.cave = exports.cdrom = exports.cular = exports.cost = exports.cANGE = exports.cange = exports.cang = exports.cite = exports.cyan = exports.clue = exports.creen = void 0;
exports.cted = exports.cmpt = exports.cnto = exports.ceak = exports.ciod = exports.cute = exports.ctit = exports.cSub = exports.csub = exports.csert = exports.cDel = exports.cdel = exports.cSym = exports.csym = exports.cure = exports.ctrol = exports.cTrad = exports.ctrad = exports.ctional = exports.cional = exports.cance = exports.cSuf = exports.csuf = exports.cific = exports.cfic = exports.cSpec = exports.cspec = exports.cger = exports.clete = exports.cAULT = exports.cault = exports.cULT = exports.cult = exports.cafe = exports.ctay = exports.cice = exports.cood = exports.coop = exports.ceed = exports.comb = exports.cerm = exports.cern = exports.cizer = exports.clon = exports.clus = exports.come = exports.cized = exports.cOpt = exports.copt = exports.cuto = exports.cFul = exports.cful = exports.cike = exports.could = exports.cExp = exports.cexp = exports.csive = exports.cCur = exports.ccur = exports.ceep = exports.colve = exports.colv = exports.cron = exports.crev = exports.cease = exports.ceas = exports.cere = exports.ccate = exports.cDup = exports.cdup = exports.cQue = exports.cque = exports.cEqu = exports.cequ = exports.cStor = exports.cstor = exports.cDest = exports.cdest = exports.cLOP = exports.clop = exports.cments = exports.cified = exports.cfied = exports.cied = exports.cual = exports.cshp = exports.ccolr = exports.cild = exports.cChi = exports.ccent = exports.ceta = exports.cnion = exports.cell = exports.croject = exports.cect = exports.cGest = exports.cgest = exports.cSug = exports.csug = exports.cLay = void 0;
exports.cgua = exports.cola = exports.crra = exports.cgeria = exports.ceria = exports.cria = exports.cania = exports.cnia = exports.cnistan = exports.cistan = exports.cstan = exports.ctan = exports.cuch = exports.cnly = exports.ctity = exports.ceaf = exports.clta = exports.cicon = exports.cical = exports.ccal = exports.cLex = exports.clex = exports.cket = exports.cBra = exports.cbra = exports.clyze = exports.clyz = exports.cccess = exports.copy = exports.camp = exports.cchiv = exports.cleas = exports.crit = exports.clat = exports.cRef = exports.cref = exports.cifies = exports.cSid = exports.csid = exports.cten = exports.cned = exports.cght = exports.cCau = exports.ccau = exports.clud = exports.clude = exports.cude = exports.cured = exports.cerg = exports.cERGE = exports.cerge = exports.cRGE = exports.crge = exports.coker = exports.cote = exports.cick = exports.cStd = exports.cstd = exports.core = exports.ceen = exports.cREA = exports.cRea = exports.crea = exports.cture = exports.cruc = exports.cAMPLE = exports.cample = exports.crgs = exports.cFin = exports.cfin = exports.cther = exports.cNom = exports.cnom = exports.cPara = exports.cpara = exports.cinal = exports.cOri = exports.cori = exports.cplac = exports.cSup = exports.csup = exports.cify = exports.clse = exports.cook = exports.cpand = exports.cMas = exports.cmas = exports.cemp = exports.cCESS = exports.ccess = exports.cvel = exports.cUSH = exports.cush = exports.cFORE = exports.cfore = exports.cera = exports.cison = exports.cson = exports.crch = exports.cist = void 0;
exports.ccium = exports.cassium = exports.cssium = exports.cinum = exports.cnum = exports.cesium = exports.csium = exports.codium = exports.cdium = exports.corine = exports.crine = exports.clorine = exports.cllium = exports.cthium = exports.chium = exports.celium = exports.clium = exports.cium = exports.crogen = exports.cogen = exports.cmen = exports.cnam = exports.cela = exports.ctes = exports.cates = exports.cnga = exports.cste = exports.cerland = exports.crland = exports.cudan = exports.cfrica = exports.crica = exports.cles = exports.canda = exports.cnda = exports.cgal = exports.cnes = exports.cuay = exports.cguay = exports.cama = exports.ckistan = exports.corea = exports.ciger = exports.caragua = exports.cragua = exports.cagua = exports.curu = exports.cmar = exports.cnmar = exports.cova = exports.cnds = exports.cands = exports.cslands = exports.cali = exports.ccar = exports.cati = exports.cdan = exports.cran = exports.conesia = exports.cnesia = exports.cesia = exports.csia = exports.celand = exports.citi = exports.cala = exports.crman = exports.cerman = exports.cambia = exports.cnce = exports.cini = exports.conia = exports.cuinea = exports.cinea = exports.cnea = exports.cador = exports.cdor = exports.cominica = exports.cminica = exports.cinica = exports.cnica = exports.cica = exports.congo = exports.cngo = exports.cmbia = exports.cbia = exports.cublic = exports.cblic = exports.clic = exports.cnada = exports.cada = exports.cdia = exports.cndi = exports.cvia = exports.crus = exports.cuda = exports.crain = exports.calia = exports.clia = exports.cenia = exports.cina = void 0;
exports.cean = exports.chimmer = exports.cimmer = exports.cmmer = exports.cmer = exports.cweet = exports.ceet = exports.cemon = exports.crown = exports.cown = exports.cistre = exports.cstre = exports.ctre = exports.ceige = exports.cige = exports.crey = exports.cowder = exports.cwder = exports.czure = exports.cado = exports.colin = exports.curn = exports.cangerine = exports.cngerine = exports.cgerine = exports.cerine = exports.cellow = exports.cllow = exports.coke = exports.carine = exports.cpricot = exports.cricot = exports.cicot = exports.ccot = exports.cnglish = exports.cglish = exports.clish = exports.chite = exports.cuby = exports.cuchsia = exports.cchsia = exports.chsia = exports.cronze = exports.conze = exports.cnze = exports.cyst = exports.cBer = exports.cber = exports.cmber = exports.curple = exports.crple = exports.cink = exports.cmaranth = exports.caranth = exports.cranth = exports.canth = exports.clmond = exports.cmond = exports.cond = exports.cnge = exports.cster = exports.ciolet = exports.colet = exports.cero = exports.covium = exports.cvium = exports.cicium = exports.corium = exports.cctinium = exports.ctinium = exports.cncium = exports.cuth = exports.clum = exports.cerbium = exports.crbium = exports.cinium = exports.ceodymium = exports.codymium = exports.cdymium = exports.cymium = exports.cerium = exports.carium = exports.curium = exports.chenium = exports.cetium = exports.cbium = exports.conium = exports.crium = exports.ctium = exports.cidium = exports.cton = exports.cenium = exports.cnic = exports.callium = exports.ckel = exports.cmium = exports.cadium = exports.cnium = exports.canium = exports.cndium = void 0;
exports.cimson = exports.cmson = exports.cream = exports.ceam = exports.catte = exports.ctte = exports.cobalt = exports.cbalt = exports.calt = exports.cilk = exports.corn = exports.cnny = exports.copper = exports.cpper = exports.catin = exports.ctin = exports.craditional = exports.caditional = exports.cditional = exports.citional = exports.conal = exports.champagne = exports.campagne = exports.cmpagne = exports.cpagne = exports.cagne = exports.cgne = exports.crost = exports.cerulean = exports.crulean = exports.culean = exports.cerise = exports.crise = exports.cise = exports.celadon = exports.cladon = exports.cadon = exports.cdon = exports.chest = exports.carmine = exports.crmine = exports.canary = exports.cnary = exports.cadet = exports.cdet = exports.cyzantium = exports.czantium = exports.cantium = exports.cntium = exports.cienna = exports.cenna = exports.cnna = exports.curgundy = exports.crgundy = exports.cgundy = exports.cundy = exports.cuff = exports.cugar = exports.cgar = exports.caroon = exports.croon = exports.coon = exports.cilac = exports.clac = exports.candy = exports.cndy = exports.cole = exports.conder = exports.cnder = exports.capphire = exports.cpphire = exports.cphire = exports.chire = exports.cire = exports.cans = exports.ceel = exports.cheel = exports.cRYB = exports.cigment = exports.cgment = exports.cantone = exports.cntone = exports.ctone = exports.cNCS = exports.cunsell = exports.cnsell = exports.csell = exports.crayola = exports.cayola = exports.cyola = exports.clive = exports.coral = exports.coffee = exports.cffee = exports.cfee = exports.chocolate = exports.cocolate = exports.ccolate = exports.colate = exports.clate = void 0;
exports.ctis = exports.carin = exports.ctee = exports.caize = exports.cany = exports.caze = exports.cake = exports.civid = exports.cvid = exports.cgan = exports.cinen = exports.cnen = exports.cinkle = exports.cnkle = exports.cier = exports.cloral = exports.culi = exports.ccha = exports.cobi = exports.cobe = exports.cade = exports.cris = exports.cpace = exports.cope = exports.cuin = exports.ctal = exports.cetal = exports.cllo = exports.cheen = exports.czard = exports.cpple = exports.colden = exports.clden = exports.cden = exports.cetallic = exports.ctallic = exports.callic = exports.cllic = exports.ciridian = exports.cridian = exports.cidian = exports.cdian = exports.cerry = exports.crry = exports.cauve = exports.cuve = exports.clame = exports.crick = exports.cawn = exports.candango = exports.cndango = exports.cdango = exports.cango = exports.crin = exports.cavender = exports.cvender = exports.cender = exports.cmerald = exports.cerald = exports.crald = exports.cald = exports.cndigo = exports.cdigo = exports.cigo = exports.chell = exports.cant = exports.cony = exports.cbony = exports.crab = exports.cesert = exports.cenim = exports.cnim = exports.caupe = exports.cupe = exports.ckle = exports.caffron = exports.cffron = exports.cfron = exports.curquoise = exports.crquoise = exports.cquoise = exports.cuoise = exports.coise = exports.calmon = exports.clmon = exports.crchid = exports.cchid = exports.chid = exports.cagenta = exports.cgenta = exports.cnta = exports.civer = exports.cava = exports.chaki = exports.caki = exports.camen = exports.cape = exports.crocess = exports.cocess = exports.crimson = void 0;
exports.cimum = exports.cmum = exports.cInc = exports.cinc = exports.ciss = exports.cries = exports.cuage = exports.cLang = exports.clang = exports.ceth = exports.cbing = exports.cded = exports.cclr = exports.comp = exports.chine = exports.cermilion = exports.crmilion = exports.cmilion = exports.cilion = exports.canilla = exports.cnilla = exports.cilla = exports.clla = exports.cuscan = exports.ccan = exports.corest = exports.crest = exports.cstle = exports.ctle = exports.craw = exports.ctraw = exports.ceal = exports.ctten = exports.cock = exports.chadow = exports.cpia = exports.cark = exports.cale = exports.cadder = exports.cdder = exports.cbon = exports.ceus = exports.creus = exports.cazz = exports.cavy = exports.csty = exports.ckin = exports.cune = exports.cstar = exports.cwer = exports.cower = exports.chio = exports.cree = exports.ceach = exports.cach = exports.chip = exports.clood = exports.cilver = exports.clver = exports.carrot = exports.crrot = exports.crot = exports.cystic = exports.cstic = exports.ctic = exports.cadow = exports.cdow = exports.coss = exports.caro = exports.celon = exports.cras = void 0;

var bas = _interopRequireWildcard(require("./basic.constants"));

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
var chree = bas.chr + bas.cee; // hree

exports.chree = chree;
var cour = bas.cou + bas.cr; // our

exports.cour = cour;
var cive = bas.civ + bas.ce; // ive

exports.cive = cive;
var ceven = bas.cev + bas.cen; // even

exports.ceven = ceven;
var cight = bas.cig + bas.cht; // ight

exports.cight = cight;
var cine = bas.cin + bas.ce; // ine

exports.cine = cine;
var cleven = bas.cl + bas.cev + bas.cen; // leven

exports.cleven = cleven;
var cwelve = bas.cwe + bas.clv + bas.ce; // welve

exports.cwelve = cwelve;
var cteen = bas.ct + bas.cee + bas.cn; // teen

exports.cteen = cteen;
var chir = bas.chi + bas.cr; // hir

exports.chir = chir;
var cigh = bas.cig + bas.ch; // igh

exports.cigh = cigh;
var cwenty = bas.cw + bas.cen + bas.cty; // wenty

exports.cwenty = cwenty;
var chirty = bas.chi + bas.cr + bas.cty; // hirty

exports.chirty = chirty;
var cifty = bas.cif + bas.cty; // ifty

exports.cifty = cifty;
var cred = bas.cre + bas.cd; // red

exports.cred = cred;
var cgreen = bas.cgr + bas.cee + bas.cn; // green

exports.cgreen = cgreen;
var cblue = bas.cbl + bas.cue; // blue

exports.cblue = cblue;
var cund = bas.cun + bas.cd; // und

exports.cund = cund;
var cundred = cund + cred; // undred

exports.cundred = cundred;
var cand = bas.can + bas.cd; // and

exports.cand = cand;
var csand = bas.cs + cand; // sand

exports.csand = csand;
var chousand = bas.cho + bas.cu + csand; // housand

exports.chousand = chousand;
var cion = bas.cio + bas.cn; // ion

exports.cion = cion;
var cION = bas.cIO + bas.cN; // ION

exports.cION = cION;
var csion = bas.cs + cion; // sion

exports.csion = csion;
var cill = bas.ci + bas.cll; // ill

exports.cill = cill;
var cillion = cill + cion; // illion

exports.cillion = cillion;
var crue = bas.cru + bas.ce; // rue

exports.crue = crue;
var calse = bas.cal + bas.cse; // alse

exports.calse = calse;
var ction = bas.ct + cion; // tion

exports.ction = ction;
var cTION = bas.cT + cION; // TION

exports.cTION = cTION;
var cction = bas.cc + ction; // ction

exports.cction = cction;
var cmation = bas.cma + ction; // mation

exports.cmation = cmation;
var cition = bas.ci + ction; // ition

exports.cition = cition;
var cITION = bas.cI + cTION; // ITION

exports.cITION = cITION;
var cage = bas.cag + bas.ce; // age

exports.cage = cage;
var cest = bas.ces + bas.ct; // est

exports.cest = cest;
var chare = bas.cha + bas.cre; // hare

exports.chare = chare;
var c_lass = bas.cla + bas.css; // lass

exports.c_lass = c_lass;
var ctemp = bas.cte + bas.cmp; // temp

exports.ctemp = ctemp;
var chref = bas.chr + bas.cef; // href

exports.chref = chref;
var cABC = bas.cAB + bas.cC; // ABC

exports.cABC = cABC;
var came = bas.cam + bas.ce; // ame

exports.came = came;
var cile = bas.cil + bas.ce; // ile

exports.cile = cile;
var cext = bas.cex + bas.ct; // ext

exports.cext = cext;
var cExt = bas.cEx + bas.ct; // Ext

exports.cExt = cExt;
var clpha = bas.clp + bas.cha; // lpha

exports.clpha = clpha;
var ccon = bas.cco + bas.cn; // con

exports.ccon = ccon;
var cCon = bas.cCo + bas.cn; // Con

exports.cCon = cCon;
var cable = bas.cab + bas.cle; // able

exports.cable = cable;
var calid = bas.cal + bas.cid; // alid

exports.calid = calid;
var cALID = bas.cAL + bas.cID; // ALID

exports.cALID = cALID;
var cing = bas.cin + bas.cg; // ing

exports.cing = cing;
var cING = bas.cIN + bas.cG; // ING

exports.cING = cING;
var ctring = bas.ctr + cing; // tring

exports.ctring = ctring;
var cbject = bas.cbj + bas.cec + bas.ct; // bject

exports.cbject = cbject;
var cata = bas.cat + bas.ca; // ata

exports.cata = cata;
var cATA = bas.cAT + bas.cA; // ATA

exports.cATA = cATA;
var cMac = bas.cMa + bas.cc; // Mac

exports.cMac = cMac;
var cpre = bas.cpr + bas.ce; // pre

exports.cpre = cpre;
var cPre = bas.cPr + bas.ce; // Pre

exports.cPre = cPre;
var cPRE = bas.cPR + bas.cE; // PRE

exports.cPRE = cPRE;
var colid = bas.col + bas.cid; // olid

exports.colid = colid;
var cynch = bas.cyn + bas.cch; // ynch

exports.cynch = cynch;
var celete = bas.cel + bas.cet + bas.ce; // elete

exports.celete = celete;
var cnner = bas.cnn + bas.cer; // nner

exports.cnner = cnner;
var click = bas.cli + bas.cck; // lick

exports.click = click;
var cctr = bas.cct + bas.cr; // ctr

exports.cctr = cctr;
var cctrl = cctr + bas.cl; // ctrl

exports.cctrl = cctrl;
var cype = bas.cyp + bas.ce; // ype

exports.cype = cype;
var ceql = bas.ce + bas.cql; // eql

exports.ceql = ceql;
var cEql = bas.cE + bas.cql; // Eql

exports.cEql = cEql;
var cemb = bas.cem + bas.cb; // emb

exports.cemb = cemb;
var cOperat = bas.cOp + bas.cer + bas.cat; // Operat

exports.cOperat = cOperat;
var cili = bas.cil + bas.ci; // ili

exports.cili = cili;
var cility = cili + bas.cty; // ility

exports.cility = cility;
var cibility = bas.cib + cility; // ibility

exports.cibility = cibility;
var cisibility = bas.cis + cibility; // isibility

exports.cisibility = cisibility;
var cith = bas.ci + bas.cth; // ith

exports.cith = cith;
var crent = bas.cre + bas.cnt; // rent

exports.crent = crent;
var carent = bas.ca + crent; // arent

exports.carent = carent;
var ctor = bas.cto + bas.cr; // tor

exports.ctor = ctor;
var cctor = bas.cc + ctor; // ctor

exports.cctor = cctor;
var celector = bas.cel + bas.cec + ctor; // elector

exports.celector = celector;
var coolean = bas.coo + bas.cle + bas.can; // oolean

exports.coolean = coolean;
var check = bas.che + bas.cck; // heck

exports.check = check;
var child = bas.chi + bas.cld; // hild

exports.child = child;
var cibling = bas.cib + bas.cl + cing; // ibling

exports.cibling = cibling;
var cttribute = bas.ctt + bas.cri + bas.cbu + bas.cte; //ttribute

exports.cttribute = cttribute;
var cttributes = cttribute + bas.cs; // ttributes

exports.cttributes = cttributes;
var cisabled = bas.cis + cable + bas.cd; // isabled

exports.cisabled = cisabled;
var cilter = bas.cil + bas.ct + bas.cer; // ilter

exports.cilter = cilter;
var code = bas.cod + bas.ce; // ode

exports.code = code;
var cide = bas.cid + bas.ce; // ide

exports.cide = cide;
var cuary = bas.cua + bas.cry; // uary

exports.cuary = cuary;
var cies = bas.cie + bas.cs; // ies

exports.cies = cies;
var ctive = bas.cti + bas.cve; // tive

exports.ctive = ctive;
var cate = bas.cat + bas.ce; // ate

exports.cate = cate;
var cdate = bas.cd + cate; // date

exports.cdate = cdate;
var cter = bas.cte + bas.cr; // ter

exports.cter = cter;
var cTER = bas.cTE + bas.cR; // TER

exports.cTER = cTER;
var cment = bas.cme + bas.cnt; // ment

exports.cment = cment;
var cMENT = bas.cME + bas.cNT; // MENT

exports.cMENT = cMENT;
var cime = bas.cim + bas.ce; // ime

exports.cime = cime;
var cinter = bas.cin + cter; // inter

exports.cinter = cinter;
var cInter = bas.cIn + cter; // Inter

exports.cInter = cInter;
var cmed = bas.cme + bas.cd; // med

exports.cmed = cmed;
var cath = bas.cat + bas.ch; // ath

exports.cath = cath;
var cvar = bas.cva + bas.cr; // var

exports.cvar = cvar;
var cVar = bas.cVa + bas.cr; // Var

exports.cVar = cVar;
var ciew = bas.cie + bas.cw; // iew

exports.ciew = ciew;
var cete = bas.cet + bas.ce; // ete

exports.cete = cete;
var cace = bas.cac + bas.ce; // ace

exports.cace = cace;
var cder = bas.cd + bas.cer; // der

exports.cder = cder;
var ccor = bas.cco + bas.cr; // cor

exports.ccor = ccor;
var cCor = bas.cCo + bas.cr; // Cor

exports.cCor = cCor;
var ccore = ccor + bas.ce; // core

exports.ccore = ccore;
var cert = bas.cer + bas.ct; // ert

exports.cert = cert;
var c_ase = bas.cas + bas.ce; // ase 'case' is a reserved word

exports.c_ase = c_ase;
var c_ASE = bas.cAS + bas.cE; // ASE

exports.c_ASE = c_ASE;
var cunt = bas.cun + bas.ct; // unt

exports.cunt = cunt;
var caft = bas.caf + bas.ct; // aft

exports.caft = caft;
var cops = bas.cop + bas.cs; // ops

exports.cops = cops;
var cOPS = bas.cOP + bas.cS; // OPS

exports.cOPS = cOPS;
var cinv = bas.cin + bas.cv; // inv

exports.cinv = cinv;
var cInv = bas.cIn + bas.cv; // Inv

exports.cInv = cInv;
var cral = bas.cra + bas.cl; // ral

exports.cral = cral;
var cara = bas.car + bas.ca; // ara

exports.cara = cara;
var cpro = bas.cpr + bas.co; // pro

exports.cpro = cpro;
var cPro = bas.cPr + bas.co; // Pro

exports.cPro = cPro;
var cPRO = bas.cPR + bas.cO; // PRO

exports.cPRO = cPRO;
var cino = bas.cin + bas.co; // ino

exports.cino = cino;
var cese = bas.ces + bas.ce; // ese

exports.cese = cese;
var cish = bas.cis + bas.ch; // ish

exports.cish = cish;
var ccel = bas.cce + bas.cl; // cel

exports.ccel = ccel;
var cCel = bas.cCe + bas.cl; // Cel

exports.cCel = cCel;
var cian = bas.cia + bas.cn; // ian

exports.cian = cian;
var cous = bas.cou + bas.cs; // ous

exports.cous = cous;
var ceous = bas.ce + cous; // eous

exports.ceous = ceous;
var cung = bas.cun + bas.cg; // ung

exports.cung = cung;
var cary = bas.car + bas.cy; // ary

exports.cary = cary;
var ciary = bas.ci + cary; // iary

exports.ciary = ciary;
var cMis = bas.cMi + bas.cs; // Mis

exports.cMis = cMis;
var cmis = bas.camai + bas.cs; // mis

exports.cmis = cmis;
var cource = bas.cou + bas.crc + bas.ce; // ource

exports.cource = cource;
var cmin = bas.camai + bas.cn; // min

exports.cmin = cmin;
var cMin = bas.cMi + bas.cn; // Min

exports.cMin = cMin;
var cmax = bas.cma + bas.cx; // max

exports.cmax = cmax;
var cMax = bas.cMa + bas.cx; // Max

exports.cMax = cMax;
var cmine = bas.camai + bas.cne; // mine
//b.cet + bas.cer + bas.cmi + bas.cne; //cmine;

exports.cmine = cmine;
var cetermine = bas.ce + bas.ct + bas.ce + bas.cr + bas.cm + bas.ci + bas.cn + bas.ce; // etermine

exports.cetermine = cetermine;
var cingle = bas.cin + bas.cgl + bas.ce; // ingle

exports.cingle = cingle;
var clace = bas.cla + bas.cce; // lace

exports.clace = clace;
var ceplace = bas.cep + clace; // eplace

exports.ceplace = ceplace;
var clean = bas.cle + bas.can; // lean

exports.clean = clean;
var cver = bas.cve + bas.cr; // ver

exports.cver = cver;
var cVer = bas.cVe + bas.cr; // Ver

exports.cVer = cVer;
var cvert = cver + bas.ct; // vert

exports.cvert = cvert;
var convert = bas.con + cvert; // onvert

exports.convert = convert;
var crate = bas.cra + bas.cte; // crate

exports.crate = crate;
var cenerate = bas.cen + bas.ce + crate; // enerate

exports.cenerate = cenerate;
var cdom = bas.cdo + bas.cm; // dom

exports.cdom = cdom;
var candom = bas.can + cdom; // andom

exports.candom = candom;
var create = bas.cre + cate; // reate

exports.create = create;
var carn = bas.car + bas.cn; // arn

exports.carn = carn;
var carning = carn + cing; // arning

exports.carning = carning;
var crror = bas.crr + bas.cor; // rror

exports.crror = crror;
var cRROR = bas.cRR + bas.cOR; // RROR

exports.cRROR = cRROR;
var card = bas.car + bas.cd; // ard

exports.card = card;
var cose = bas.cos + bas.ce; // ose

exports.cose = cose;
var cray = bas.cra + bas.cy; // ray

exports.cray = cray;
var cmel = bas.cme + bas.cl; // mel

exports.cmel = cmel;
var cound = bas.cou + bas.cnd; // ound

exports.cound = cound;
var cdot = bas.cd + bas.cot; // dot

exports.cdot = cdot;
var cDot = bas.cD + bas.cot; // Dot

exports.cDot = cDot;
var cart = bas.car + bas.ct; // art

exports.cart = cart;
var cize = bas.ciz + bas.ce; // ize

exports.cize = cize;
var cmal = bas.cma + bas.cl; // mal

exports.cmal = cmal;
var cormal = bas.cor + cmal; // ormal

exports.cormal = cormal;
var cegree = bas.ceg + bas.cre + bas.ce; // egree

exports.cegree = cegree;
var ccir = bas.cci + bas.cr; // cir

exports.ccir = ccir;
var cCir = bas.cCi + bas.cr; // Cir

exports.cCir = cCir;
var ccle = bas.ccl + bas.ce; // cle

exports.ccle = ccle;
var care = bas.car + bas.ce; // are

exports.care = care;
var cquare = bas.cqu + care; // quare

exports.cquare = cquare;
var cgle = bas.cgl + bas.ce; // gle

exports.cgle = cgle;
var ctri = bas.ctr + bas.ci; // tri

exports.ctri = ctri;
var cTri = bas.cTr + bas.ci; // Tri

exports.cTri = cTri;
var crec = bas.cre + bas.cc; // rec

exports.crec = crec;
var cRec = bas.cRe + bas.cc; // Rec

exports.cRec = cRec;
var crect = crec + bas.ct; // rect

exports.crect = crect;
var cRect = cRec + bas.ct; // Rect

exports.cRect = cRect;
var coct = bas.coc + bas.ct; // oct

exports.coct = coct;
var cOct = bas.cOc + bas.ct; // Oct

exports.cOct = cOct;
var cgon = bas.cgo + bas.cn; // gon

exports.cgon = cgon;
var chex = bas.che + bas.cx; // hex

exports.chex = chex;
var cHex = bas.cHe + bas.cx; // Hex

exports.cHex = cHex;
var chep = bas.che + bas.cp; // hep

exports.chep = chep;
var cHep = bas.cHe + bas.cp; // Hep

exports.cHep = cHep;
var cnon = bas.cno + bas.cn; // non

exports.cnon = cnon;
var cNon = bas.cNo + bas.cn; // Non

exports.cNon = cNon;
var crap = bas.cra + bas.cp; // rap

exports.crap = crap;
var czoid = bas.czo + bas.cid; // zoid

exports.czoid = czoid;
var cfra = bas.cfr + bas.ca; // fra

exports.cfra = cfra;
var cFra = bas.cFr + bas.ca; // Fra

exports.cFra = cFra;
var ctra = bas.ctr + bas.ca; // tra

exports.ctra = ctra;
var cTra = bas.cTr + bas.ca; // Tra

exports.cTra = cTra;
var ctrans = ctra + bas.cns; // trans

exports.ctrans = ctrans;
var cTrans = cTra + bas.cns; // Trans

exports.cTrans = cTrans;
var cint = bas.cin + bas.ct; // int

exports.cint = cint;
var cloc = bas.clo + bas.cc; // loc

exports.cloc = cloc;
var cLoc = bas.cLo + bas.cc; // Loc

exports.cLoc = cLoc;
var cation = bas.ca + ction; // ation

exports.cation = cation;
var cort = bas.cor + bas.ct; // ort

exports.cort = cort;
var csim = bas.csi + bas.cm; // sim

exports.csim = csim;
var cSim = bas.cSi + bas.cm; // Sim

exports.cSim = cSim;
var cplify = bas.cpl + bas.cif + bas.cy; // plify

exports.cplify = cplify;
var csol = bas.cso + bas.cl; // sol

exports.csol = csol;
var ccomp = bas.cco + bas.cmp; // comp

exports.ccomp = ccomp;
var cComp = bas.cCo + bas.cmp; // Comp

exports.cComp = cComp;
var cideo = bas.cid + bas.ceo; // ideo

exports.cideo = cideo;
var cnteger = bas.cnt + bas.ceg + bas.cer; // nteger

exports.cnteger = cnteger;
var cloat = bas.clo + bas.cat; // loat

exports.cloat = cloat;
var cong = bas.con + bas.cg; // ong

exports.cong = cong;
var chort = bas.ch + cort; // hort

exports.chort = chort;
var cble = bas.cbl + bas.ce; // ble

exports.cble = cble;
var couble = bas.cou + cble; // ouble

exports.couble = couble;
var cduct = bas.cdu + bas.cct; // duct

exports.cduct = cduct;
var cgate = bas.cga + bas.cte; // gate

exports.cgate = cgate;
var cggregate = bas.cgg + bas.cre + cgate; // ggregate

exports.cggregate = cggregate;
var cDiff = bas.cDi + bas.cff; // Diff

exports.cDiff = cDiff;
var cenc = bas.cen + bas.cc; // enc

exports.cenc = cenc;
var cence = cenc + bas.ce; // ence

exports.cence = cence;
var cain = bas.cai + bas.cn; // ain

exports.cain = cain;
var ctch = bas.ctc + bas.ch; // tch

exports.ctch = ctch;
var cween = bas.cwe + bas.cen; // ween

exports.cween = cween;
var cord = bas.cor + bas.cd; // ord

exports.cord = cord;
var cmap = bas.cma + bas.cp; // map

exports.cmap = cmap;
var cMap = bas.cMa + bas.cp; // Map

exports.cMap = cMap;
var cess = bas.ce + bas.css; // ess

exports.cess = cess;
var cres = bas.cre + bas.cs; // res

exports.cres = cres;
var cRes = bas.cRe + bas.cs; // Res

exports.cRes = cRes;
var cress = bas.cr + cess; // ress

exports.cress = cress;
var ceat = bas.ce + bas.cat; // eat

exports.ceat = ceat;
var chen = bas.ch + bas.cen; // hen

exports.chen = chen;
var chan = bas.ch + bas.can; // han

exports.chan = chan;
var clica = bas.cli + bas.cca; // lica

exports.clica = clica;
var cLICA = bas.cLI + bas.cCA; // LICA

exports.cLICA = cLICA;
var capp = bas.ca + bas.cpp; // app

exports.capp = capp;
var cApp = bas.cA + bas.cpp; // App

exports.cApp = cApp;
var cAPP = bas.cA + bas.cPP; // APP

exports.cAPP = cAPP;
var coot = bas.coo + bas.ct; // oot

exports.coot = coot;
var crse = bas.crs + bas.ce; // rse

exports.crse = crse;
var cRSE = bas.cRS + bas.cE; // RSE

exports.cRSE = cRSE;
var cars = bas.car + bas.cs; // ars

exports.cars = cars;
var carse = bas.ca + crse; // arse

exports.carse = carse;
var cARSE = bas.cA + cRSE; // ARSE

exports.cARSE = cARSE;
var cwap = bas.cwa + bas.cp; // wap

exports.cwap = cwap;
var cward = bas.cwa + bas.crd; // ward

exports.cward = cward;
var clash = bas.cla + bas.csh; // lash

exports.clash = clash;
var cENV = bas.cE + bas.cNV; // ENV

exports.cENV = cENV;
var cavigate = bas.cav + bas.cig + cate; // avigate

exports.cavigate = cavigate;
var cness = bas.cne + bas.css; // ness

exports.cness = cness;
var cusiness = bas.cus + bas.ci + cness; // usiness

exports.cusiness = cusiness;
var cule = bas.cul + bas.ce; // ule

exports.cule = cule;
var cait = bas.cai + bas.ct; // ait

exports.cait = cait;
var cesh = bas.ce + bas.csh; // esh

exports.cesh = cesh;
var cval = bas.cv + bas.cal; // val

exports.cval = cval;
var cemo = bas.ce + bas.cmo; // emo

exports.cemo = cemo;
var cmon = bas.cmo + bas.cn; // mon

exports.cmon = cmon;
var common = bas.com + cmon; // ommon

exports.common = common;
var clti = bas.clt + bas.ci; // lti

exports.clti = clti;
var cmulti = bas.cmu + clti; // multi

exports.cmulti = cmulti;
var cMulti = bas.cMu + clti; // Multi

exports.cMulti = cMulti;
var cple = bas.cpl + bas.ce; // ple

exports.cple = cple;
var cPLE = bas.cPL + bas.cE; // PLE

exports.cPLE = cPLE;
var cnal = bas.cna + bas.cl; // nal

exports.cnal = cnal;
var cexe = bas.cex + bas.ce; // exe

exports.cexe = cexe;
var cExe = bas.cEx + bas.ce; // Exe

exports.cExe = cExe;
var cper = bas.cpe + bas.cr; // per

exports.cper = cper;
var cPer = bas.cPe + bas.cr; // Per

exports.cPer = cPer;
var casic = bas.cas + bas.cic; // asic

exports.casic = casic;
var cven = bas.cve + bas.cn; // ven

exports.cven = cven;
var cVEN = bas.cVE + bas.cN; // VEN

exports.cVEN = cVEN;
var cvent = cven + bas.ct; // vent;

exports.cvent = cvent;
var carg = bas.car + bas.cg; // arg

exports.carg = carg;
var cArg = bas.cAr + bas.cg; // Arg

exports.cArg = cArg;
var crive = bas.cri + bas.cve; // rive

exports.crive = crive;
var cloy = bas.clo + bas.cy; // loy

exports.cloy = cloy;
var cLOY = bas.cLO + bas.cY; // LOY

exports.cLOY = cLOY;
var cumber = bas.cum + bas.cb + bas.cer; // umber

exports.cumber = cumber;
var ccond = bas.cco + bas.cnd; // cond

exports.ccond = ccond;
var cieth = bas.cie + bas.cth; // ieth

exports.cieth = cieth;
var ctieth = bas.ct + cieth; // tieth

exports.ctieth = ctieth;
var cont = bas.con + bas.ct; // ont

exports.cont = cont;
var cull = bas.cul + bas.cl; // ull

exports.cull = cull;
var cmod = bas.cmo + bas.cd; // mod

exports.cmod = cmod;
var cMod = bas.cMo + bas.cd; // Mod

exports.cMod = cMod;
var ccol = bas.cco + bas.cl; // col

exports.ccol = ccol;
var cCol = bas.cCo + bas.cl; // Col

exports.cCol = cCol;
var creen = bas.cre + bas.cen; // reen

exports.creen = creen;
var clue = bas.clu + bas.ce; // lue Referance to Tron here! :-P

exports.clue = clue;
var cyan = bas.cy + bas.can; // yan

exports.cyan = cyan;
var cite = bas.cit + bas.ce; // ite

exports.cite = cite;
var cang = bas.can + bas.cg; // ang

exports.cang = cang;
var cange = cang + bas.ce; // ange

exports.cange = cange;
var cANGE = bas.cAN + bas.cGE; // ANGE

exports.cANGE = cANGE;
var cost = bas.cos + bas.ct; // ost

exports.cost = cost;
var cular = bas.cul + bas.car; // ular

exports.cular = cular;
var cdrom = bas.cdr + bas.com; // drom

exports.cdrom = cdrom;
var cave = bas.cav + bas.ce; // ave

exports.cave = cave;
var cAve = bas.cAv + bas.ce; // Ave

exports.cAve = cAve;
var ccli = bas.ccl + bas.ci; // cli

exports.ccli = ccli;
var cCli = bas.cCl + bas.ci; // Cli

exports.cCli = cCli;
var cules = bas.cul + bas.ces; // ules

exports.cules = cules;
var cent = bas.cen + bas.ct; // ent

exports.cent = cent;
var centa = cent + bas.ca; // enta

exports.centa = centa;
var cust = bas.cus + bas.ct; // ust

exports.cust = cust;
var ccust = bas.cc + cust; // cust

exports.ccust = ccust;
var cCust = bas.cC + cust; // Cust

exports.cCust = cCust;
var cmand = bas.cma + bas.cnd; // mand

exports.cmand = cmand;
var cMAND = bas.cMA + bas.cND; // MAND

exports.cMAND = cMAND;
var clob = bas.clo + bas.cb; // lob

exports.clob = clob;
var cram = bas.cra + bas.cm; // ram

exports.cram = cram;
var crame = cram + bas.ce; // rame

exports.crame = crame;
var cias = bas.cia + bas.cs; // ias

exports.cias = cias;
var cbout = bas.cbo + bas.cut; // bout Bout time we added this one! LOL

exports.cbout = cbout;
var cseq = bas.cse + bas.cq; // seq

exports.cseq = cseq;
var cSeq = bas.cSe + bas.cq; // Seq

exports.cSeq = cSeq;
var cncer = bas.cnc + bas.cer; // ncer

exports.cncer = cncer;
var cpri = bas.cpr + bas.ci; // pri

exports.cpri = cpri;
var cPri = bas.cPr + bas.ci; // Pri

exports.cPri = cPri;
var cmary = bas.cma + bas.cry; // mary

exports.cmary = cmary;
var cmit = bas.camai + bas.ct; // mit

exports.cmit = cmit;
var ctert = bas.cte + bas.crt; // tert

exports.ctert = ctert;
var cTert = bas.cTe + bas.crt; // Tert

exports.cTert = cTert;
var ctar = bas.cta + bas.cr; // tar

exports.ctar = ctar;
var cTar = bas.cTa + bas.cr; // Tar

exports.cTar = cTar;
var ctart = ctar + bas.ct; // tart

exports.ctart = ctart;
var cTart = cTar + bas.ct; // Tart poptart....LOL

exports.cTart = cTart;
var crint = bas.cri + bas.cnt; // rint

exports.crint = crint;
var cgen = bas.cge + bas.cn; // gen

exports.cgen = cgen;
var cGen = bas.cGe + bas.cn; // Gen

exports.cGen = cGen;
var cator = bas.cat + bas.cor; // ator

exports.cator = cator;
var cdex = bas.cde + bas.cx; // dex

exports.cdex = cdex;
var call = bas.cal + bas.cl; // all

exports.call = call;
var cAll = bas.cAl + bas.cl; // All

exports.cAll = cAll;
var creg = bas.cre + bas.cg; // reg

exports.creg = creg;
var cReg = bas.cRe + bas.cg; // Reg

exports.cReg = cReg;
var ctain = bas.cta + bas.cin; // tain

exports.ctain = ctain;
var cmet = bas.cme + bas.ct; // met

exports.cmet = cmet;
var cMet = bas.cMe + bas.ct; // Met

exports.cMet = cMet;
var cric = bas.cri + bas.cc; // ric

exports.cric = cric;
var cack = bas.cac + bas.ck; // ack

exports.cack = cack;
var cdev = bas.cde + bas.cv; // dev

exports.cdev = cdev;
var cDev = bas.cDe + bas.cv; // Dev

exports.cDev = cDev;
var cDEV = bas.cDE + bas.cV; // DEV

exports.cDEV = cDEV;
var cprod = bas.cpr + bas.cod; // prod

exports.cprod = cprod;
var cProd = bas.cPr + bas.cod; // Prod

exports.cProd = cProd;
var cPROD = bas.cPR + bas.cOD; // PROD

exports.cPROD = cPROD;
var cana = bas.can + bas.ca; // ana

exports.cana = cana;
var cAna = bas.cAn + bas.ca; // Ana

exports.cAna = cAna;
var csis = bas.csi + bas.cs; // sis

exports.csis = csis;
var crage = bas.cra + bas.cge; // rage

exports.crage = crage;
var cear = bas.cea + bas.cr; // ear

exports.cear = cear;
var crgb = bas.crg + bas.cb; // rgb

exports.crgb = crgb;
var cass = bas.ca + bas.css; // ass

exports.cass = cass;
var cASS = bas.cA + bas.cSS; // ASS

exports.cASS = cASS;
var cind = bas.cin + bas.cd; // ind

exports.cind = cind;
var clin = bas.cli + bas.cn; // lin

exports.clin = clin;
var cLin = bas.cLi + bas.cn; // Lin

exports.cLin = cLin;
var ccom = bas.cco + bas.cm; // com

exports.ccom = ccom;
var cCom = bas.cCo + bas.cm; // Com

exports.cCom = cCom;
var cCOM = bas.cCO + bas.cM; // COM

exports.cCOM = cCOM;
var cubic = bas.cub + bas.cic; // ubic

exports.cubic = cubic;
var cane = bas.can + bas.ce; // ane

exports.cane = cane;
var curve = bas.cur + bas.cve; // urve

exports.curve = curve;
var cqua = bas.cqu + bas.ca; // qua

exports.cqua = cqua;
var cQua = bas.cQu + bas.ca; // Qua

exports.cQua = cQua;
var crtic = bas.crt + bas.cic; // rtic

exports.crtic = crtic;
var csec = bas.cse + bas.cc; // sec

exports.csec = csec;
var cSec = bas.cSe + bas.cc; // Sec

exports.cSec = cSec;
var cuni = bas.cun + bas.ci; // uni

exports.cuni = cuni;
var cUni = bas.cUn + bas.ci; // Uni

exports.cUni = cUni;
var chyper = bas.chy + cper; // hyper

exports.chyper = chyper;
var cHyper = bas.cHy + cper; // Hyper

exports.cHyper = cHyper;
var cbol = bas.cbo + bas.cl; // bol

exports.cbol = cbol;
var cbola = cbol + bas.ca; // bola

exports.cbola = cbola;
var cstant = bas.cst + bas.can + bas.ct; //stant

exports.cstant = cstant;
var ciso = bas.cis + bas.co; // iso

exports.ciso = ciso;
var cIso = bas.cIs + bas.co; // Iso

exports.cIso = cIso;
var ctope = bas.cto + bas.cpe; // tope

exports.ctope = ctope;
var cphon = bas.cph + bas.con; // phon

exports.cphon = cphon;
var cPhon = bas.cPh + bas.con; // Phon

exports.cPhon = cPhon;
var cics = bas.cic + bas.cs; // ics

exports.cics = cics;
var csha = bas.csh + bas.ca; // sha

exports.csha = csha;
var cSha = bas.cSh + bas.ca; // Sha

exports.cSha = cSha;
var cail = bas.cai + bas.cl; // ail

exports.cail = cail;
var cAIL = bas.cAI + bas.cL; // AIL

exports.cAIL = cAIL;
var clay = bas.cla + bas.cy; // lay

exports.clay = clay;
var cLay = bas.cLa + bas.cy; // Lay

exports.cLay = cLay;
var csug = bas.csu + bas.cg; // sug

exports.csug = csug;
var cSug = bas.cSu + bas.cg; // Sug

exports.cSug = cSug;
var cgest = bas.cge + bas.cst; // gest

exports.cgest = cgest;
var cGest = bas.cGe + bas.cst; // Gest

exports.cGest = cGest;
var cect = bas.cec + bas.ct; // ect

exports.cect = cect;
var croject = bas.cro + bas.cj + cect; // roject

exports.croject = croject;
var cell = bas.cel + bas.cl; // ell

exports.cell = cell;
var cnion = bas.cni + bas.con; // nion

exports.cnion = cnion;
var ceta = bas.cet + bas.ca; // eta

exports.ceta = ceta;
var ccent = bas.cce + bas.cnt; // cent

exports.ccent = ccent;
var cChi = bas.cCh + bas.ci; // Chi

exports.cChi = cChi;
var cild = bas.cil + bas.cd; // ild

exports.cild = cild;
var ccolr = bas.cco + bas.clr; // colr

exports.ccolr = ccolr;
var cshp = bas.csh + bas.cp; // shp

exports.cshp = cshp;
var cual = bas.cua + bas.cl; // ual

exports.cual = cual;
var cied = bas.cie + bas.cd; // ied

exports.cied = cied;
var cfied = bas.cf + cied; // fied

exports.cfied = cfied;
var cified = bas.cif + cied; // ified

exports.cified = cified;
var cments = cment + bas.cs; // ments

exports.cments = cments;
var clop = bas.clo + bas.cp; // lop

exports.clop = clop;
var cLOP = bas.cLO + bas.cP; // LOP

exports.cLOP = cLOP;
var cdest = bas.cde + bas.cst; // dest

exports.cdest = cdest;
var cDest = bas.cDe + bas.cst; // Dest

exports.cDest = cDest;
var cstor = bas.cst + bas.cor; // stor

exports.cstor = cstor;
var cStor = bas.cSt + bas.cor; // Stor

exports.cStor = cStor;
var cequ = bas.ceq + bas.cu; // equ

exports.cequ = cequ;
var cEqu = bas.cEq + bas.cu; // Equ

exports.cEqu = cEqu;
var cque = bas.cqu + bas.ce; // que

exports.cque = cque;
var cQue = bas.cQu + bas.ce; // Que

exports.cQue = cQue;
var cdup = bas.cdu + bas.cp; // dup

exports.cdup = cdup;
var cDup = bas.cDu + bas.cp; // Dup

exports.cDup = cDup;
var ccate = bas.cca + bas.cte; // cate

exports.ccate = ccate;
var cere = bas.cer + bas.ce; // ere

exports.cere = cere;
var ceas = bas.cea + bas.cs; // eas

exports.ceas = ceas;
var cease = ceas + bas.ce; // ease

exports.cease = cease;
var crev = bas.cre + bas.cv; // rev

exports.crev = crev;
var cron = bas.cro + bas.cn; // ron

exports.cron = cron;
var colv = bas.col + bas.cv; // olv

exports.colv = colv;
var colve = colv + bas.ce; // olve

exports.colve = colve;
var ceep = bas.cee + bas.cp; // eep

exports.ceep = ceep;
var ccur = bas.ccu + bas.cr; // cur

exports.ccur = ccur;
var cCur = bas.cCu + bas.cr; // Cur

exports.cCur = cCur;
var csive = bas.csi + bas.cve; // sive

exports.csive = csive;
var cexp = bas.cex + bas.cp; // exp

exports.cexp = cexp;
var cExp = bas.cEx + bas.cp; // Exp

exports.cExp = cExp;
var could = bas.cou + bas.cld; // ould

exports.could = could;
var cike = bas.cik + bas.ce; // ike

exports.cike = cike;
var cful = bas.cfu + bas.cl; // ful

exports.cful = cful;
var cFul = bas.cFu + bas.cl; // Ful

exports.cFul = cFul;
var cuto = bas.cut + bas.co; // uto

exports.cuto = cuto;
var copt = bas.cop + bas.ct; // opt

exports.copt = copt;
var cOpt = bas.cOp + bas.ct; // Opt

exports.cOpt = cOpt;
var cized = bas.ciz + bas.ced; // ized

exports.cized = cized;
var come = bas.com + bas.ce; // ome

exports.come = come;
var clus = bas.clu + bas.cs; // lus

exports.clus = clus;
var clon = bas.clo + bas.cn; // lon

exports.clon = clon;
var cizer = bas.ciz + bas.cer; // izer

exports.cizer = cizer;
var cern = bas.cer + bas.cn; // ern

exports.cern = cern;
var cerm = bas.cer + bas.cm; // erm

exports.cerm = cerm;
var comb = bas.com + bas.cb; // omb

exports.comb = comb;
var ceed = bas.cee + bas.cd; // eed

exports.ceed = ceed;
var coop = bas.coo + bas.cp; // oop

exports.coop = coop;
var cood = bas.coo + bas.cd; // ood

exports.cood = cood;
var cice = bas.cic + bas.ce; // ice

exports.cice = cice;
var ctay = bas.cta + bas.cy; // tay

exports.ctay = ctay;
var cafe = bas.caf + bas.ce; // afe

exports.cafe = cafe;
var cult = bas.cul + bas.ct; // ult

exports.cult = cult;
var cULT = bas.cUL + bas.cT; // ULT

exports.cULT = cULT;
var cault = bas.ca + cult; // ault

exports.cault = cault;
var cAULT = bas.cA + cULT; // AULT

exports.cAULT = cAULT;
var clete = bas.cle + bas.cte; // lete

exports.clete = clete;
var cger = bas.cge + bas.cr; // ger

exports.cger = cger;
var cspec = bas.csp + bas.cec; // spec

exports.cspec = cspec;
var cSpec = bas.cSp + bas.cec; // Spec

exports.cSpec = cSpec;
var cfic = bas.cfi + bas.cc; // fic

exports.cfic = cfic;
var cific = bas.ci + cfic; // ific

exports.cific = cific;
var csuf = bas.csu + bas.cf; // suf

exports.csuf = csuf;
var cSuf = bas.cSu + bas.cf; // Suf

exports.cSuf = cSuf;
var cance = bas.can + bas.cce; // ance

exports.cance = cance;
var cional = bas.cio + cnal; // ional

exports.cional = cional;
var ctional = bas.ct + cional; // tional

exports.ctional = ctional;
var ctrad = ctra + bas.cd; // trad - ad is some how a special reserved word of some kind.

exports.ctrad = ctrad;
var cTrad = cTra + bas.cd; // Trad - ad is some how a special reserved word of some kind.

exports.cTrad = cTrad;
var ctrol = bas.ctr + bas.col; // trol

exports.ctrol = ctrol;
var cure = bas.cur + bas.ce; // ure

exports.cure = cure;
var csym = bas.csy + bas.cm; // sym

exports.csym = csym;
var cSym = bas.cSy + bas.cm; // Sym

exports.cSym = cSym;
var cdel = bas.cde + bas.cl; // del

exports.cdel = cdel;
var cDel = bas.cDe + bas.cl; // Del

exports.cDel = cDel;
var csert = bas.cs + cert; // sert

exports.csert = csert;
var csub = bas.csu + bas.cb; // sub

exports.csub = csub;
var cSub = bas.cSu + bas.cb; // Sub

exports.cSub = cSub;
var ctit = bas.cti + bas.ct; // tit

exports.ctit = ctit;
var cute = bas.cut + bas.ce; // ute

exports.cute = cute;
var ciod = bas.cio + bas.cd; // iod

exports.ciod = ciod;
var ceak = bas.cea + bas.ck; // eak

exports.ceak = ceak;
var cnto = bas.cnt + bas.co; // nto

exports.cnto = cnto;
var cmpt = bas.cmp + bas.ct; // mpt

exports.cmpt = cmpt;
var cted = bas.cte + bas.cd; // ted

exports.cted = cted;
var cist = bas.cis + bas.ct; // ist

exports.cist = cist;
var crch = bas.crc + bas.ch; // rch

exports.crch = crch;
var cson = bas.cso + bas.cn; // son

exports.cson = cson;
var cison = bas.ci + cson; // ison

exports.cison = cison;
var cera = bas.cer + bas.ca; // era

exports.cera = cera;
var cfore = bas.cfo + bas.cre; // fore

exports.cfore = cfore;
var cFORE = bas.cFO + bas.cRE; // FORE

exports.cFORE = cFORE;
var cush = bas.cus + bas.ch; // ush

exports.cush = cush;
var cUSH = bas.cUS + bas.cH; // USH

exports.cUSH = cUSH;
var cvel = bas.cve + bas.cl; // vel

exports.cvel = cvel;
var ccess = bas.cce + bas.css; // cess

exports.ccess = ccess;
var cCESS = bas.cCE + bas.cSS; // CESS

exports.cCESS = cCESS;
var cemp = bas.cem + bas.cp; // emp

exports.cemp = cemp;
var cmas = bas.cma + bas.cs; // mas

exports.cmas = cmas;
var cMas = bas.cMa + bas.cs; // Mas

exports.cMas = cMas;
var cpand = bas.cpa + bas.cnd; // pand

exports.cpand = cpand;
var cook = bas.coo + bas.ck; // ook

exports.cook = cook;
var clse = bas.cls + bas.ce; // lse

exports.clse = clse;
var cify = bas.cif + bas.cy; // ify

exports.cify = cify;
var csup = bas.csu + bas.cp; // sup

exports.csup = csup;
var cSup = bas.cSu + bas.cp; // Sup

exports.cSup = cSup;
var cplac = bas.cpl + bas.cac; // plac

exports.cplac = cplac;
var cori = bas.cor + bas.ci; // ori

exports.cori = cori;
var cOri = bas.cOr + bas.ci; // Ori

exports.cOri = cOri;
var cinal = bas.cin + bas.cal; // inal

exports.cinal = cinal;
var cpara = bas.cpa + bas.cra; // para

exports.cpara = cpara;
var cPara = bas.cPa + bas.cra; // Para

exports.cPara = cPara;
var cnom = bas.cno + bas.cm; // nom

exports.cnom = cnom;
var cNom = bas.cNo + bas.cm; // Nom

exports.cNom = cNom;
var cther = bas.cth + bas.cer; // ther

exports.cther = cther;
var cfin = bas.cfi + bas.cn; // fin

exports.cfin = cfin;
var cFin = bas.cFi + bas.cn; // Fin

exports.cFin = cFin;
var crgs = bas.crg + bas.cs; // rgs

exports.crgs = crgs;
var cample = bas.cam + cple; // ample

exports.cample = cample;
var cAMPLE = bas.cAM + cPLE; // AMPLE

exports.cAMPLE = cAMPLE;
var cruc = bas.cru + bas.cc; // ruc

exports.cruc = cruc;
var cture = bas.ct + cure; // ture

exports.cture = cture;
var crea = bas.cre + bas.ca; // rea

exports.crea = crea;
var cRea = bas.cRe + bas.ca; // Rea

exports.cRea = cRea;
var cREA = bas.cRE + bas.cA; // REA

exports.cREA = cREA;
var ceen = bas.cee + bas.cn; // een

exports.ceen = ceen;
var core = bas.cor + bas.ce; // ore

exports.core = core;
var cstd = bas.cst + bas.cd; // std

exports.cstd = cstd;
var cStd = bas.cSt + bas.cd; // Std

exports.cStd = cStd;
var cick = bas.cic + bas.ck; // ick

exports.cick = cick;
var cote = bas.cot + bas.ce; // ote

exports.cote = cote;
var coker = bas.cok + bas.cer; // oker

exports.coker = coker;
var crge = bas.crg + bas.ce; // rge

exports.crge = crge;
var cRGE = bas.cRG + bas.cE; // RGE

exports.cRGE = cRGE;
var cerge = bas.ce + crge; // erge

exports.cerge = cerge;
var cERGE = bas.cE + cRGE; // ERGE

exports.cERGE = cERGE;
var cerg = bas.cer + bas.cg; // erg

exports.cerg = cerg;
var cured = bas.cu + cred; // ured

exports.cured = cured;
var cude = bas.cud + bas.ce; // ude

exports.cude = cude;
var clude = bas.cl + cude; // lude

exports.clude = clude;
var clud = bas.clu + bas.cd; // lud

exports.clud = clud;
var ccau = bas.cca + bas.cu; // cau

exports.ccau = ccau;
var cCau = bas.cCa + bas.cu; // Cau

exports.cCau = cCau;
var cght = bas.cgh + bas.ct; // ght

exports.cght = cght;
var cned = bas.cne + bas.cd; // ned

exports.cned = cned;
var cten = bas.cte + bas.cn; // ten // This is also defined in the numeric constants

exports.cten = cten;
var csid = bas.csi + bas.cd; // sid

exports.csid = csid;
var cSid = bas.cSi + bas.cd; // Sid

exports.cSid = cSid;
var cifies = bas.cif + cies; // ifies

exports.cifies = cifies;
var cref = bas.cre + bas.cf; // ref

exports.cref = cref;
var cRef = bas.cRe + bas.cf; // Ref

exports.cRef = cRef;
var clat = bas.cla + bas.ct; // lat

exports.clat = clat;
var crit = bas.cri + bas.ct; // rit

exports.crit = crit;
var cleas = bas.cl + ceas; // leas

exports.cleas = cleas;
var cchiv = bas.cch + bas.civ; // chiv

exports.cchiv = cchiv;
var camp = bas.cam + bas.cp; // amp

exports.camp = camp;
var copy = bas.cop + bas.cy; // opy

exports.copy = copy;
var cccess = bas.ccc + cess; // ccess

exports.cccess = cccess;
var clyz = bas.cly + bas.cz; // lyz

exports.clyz = clyz;
var clyze = clyz + bas.ce; // lyze

exports.clyze = clyze;
var cbra = bas.cbr + bas.ca; // bra

exports.cbra = cbra;
var cBra = bas.cBr + bas.ca; // Bra

exports.cBra = cBra;
var cket = bas.cke + bas.ct; // ket

exports.cket = cket;
var clex = bas.cle + bas.cx; // lex

exports.clex = clex;
var cLex = bas.cLe + bas.cx; // Lex

exports.cLex = cLex;
var ccal = bas.cca + bas.cl; // cal

exports.ccal = ccal;
var cical = bas.ci + ccal; // ical

exports.cical = cical;
var cicon = bas.ci + ccon; // icon

exports.cicon = cicon;
var clta = bas.clt + bas.ca; // lta

exports.clta = clta;
var ceaf = bas.cea + bas.cf; // eaf

exports.ceaf = ceaf;
var ctity = ctit + bas.cy; // tity

exports.ctity = ctity;
var cnly = bas.cnl + bas.cy; // nly

exports.cnly = cnly;
var cuch = bas.cuc + bas.ch; // uch

exports.cuch = cuch;
var ctan = bas.cta + bas.cn; // tan

exports.ctan = ctan;
var cstan = bas.cs + ctan; // stan

exports.cstan = cstan;
var cistan = cist + bas.can; // istan

exports.cistan = cistan;
var cnistan = bas.cn + cistan; // nistan

exports.cnistan = cnistan;
var cnia = bas.cni + bas.ca; // nia

exports.cnia = cnia;
var cania = bas.ca + cnia; // ania

exports.cania = cania;
var cria = bas.cri + bas.ca; // ria

exports.cria = cria;
var ceria = bas.ce + cria; // eria

exports.ceria = ceria;
var cgeria = cger + bas.cia; // geria

exports.cgeria = cgeria;
var crra = bas.crr + bas.ca; // rra

exports.crra = crra;
var cola = bas.col + bas.ca; // ola

exports.cola = cola;
var cgua = bas.cgu + bas.ca; // gua

exports.cgua = cgua;
var cina = bas.cin + bas.ca; // ina

exports.cina = cina;
var cenia = bas.cen + bas.cia; // enia

exports.cenia = cenia;
var clia = bas.cli + bas.ca; // lia

exports.clia = clia;
var calia = bas.ca + clia; // alia

exports.calia = calia;
var crain = bas.cra + bas.cin; // rain

exports.crain = crain;
var cuda = bas.cud + bas.ca; // uda

exports.cuda = cuda;
var crus = bas.cru + bas.cs; // rus

exports.crus = crus;
var cvia = bas.cvi + bas.ca; // via

exports.cvia = cvia;
var cndi = bas.cnd + bas.ci; // ndi

exports.cndi = cndi;
var cdia = bas.cdi + bas.ca; // dia

exports.cdia = cdia;
var cada = bas.ca + bas.cd + bas.ca; // ada

exports.cada = cada;
var cnada = bas.cn + cada; // nada

exports.cnada = cnada;
var clic = bas.cli + bas.cc; // lic

exports.clic = clic;
var cblic = bas.cb + clic; // blic

exports.cblic = cblic;
var cublic = bas.cu + cblic; // ublic

exports.cublic = cublic;
var cbia = bas.cbi + bas.ca; // bia

exports.cbia = cbia;
var cmbia = bas.cm + cbia; // mbia

exports.cmbia = cmbia;
var cngo = bas.cng + bas.co; // ngo

exports.cngo = cngo;
var congo = bas.co + cngo; // ongo

exports.congo = congo;
var cica = bas.cic + bas.ca; // ica

exports.cica = cica;
var cnica = bas.cn + cica; // nica

exports.cnica = cnica;
var cinica = bas.cin + cica; // inica

exports.cinica = cinica;
var cminica = bas.cm + bas.ci + cnica; // minica

exports.cminica = cminica;
var cominica = bas.co + cminica; // ominica

exports.cominica = cominica;
var cdor = bas.cdo + bas.cr; // dor

exports.cdor = cdor;
var cador = bas.ca + cdor; // ador

exports.cador = cador;
var cnea = bas.cne + bas.ca; // nea

exports.cnea = cnea;
var cinea = cine + bas.ca; // inea

exports.cinea = cinea;
var cuinea = bas.cu + cinea; // uinea

exports.cuinea = cuinea;
var conia = bas.con + bas.cia; // onia

exports.conia = conia;
var cini = bas.cin + bas.ci; // ini

exports.cini = cini;
var cnce = bas.cnc + bas.ce; // nce

exports.cnce = cnce;
var cambia = bas.cam + bas.cbi + bas.ca; // ambia

exports.cambia = cambia;
var cerman = cerm + bas.can; // erman

exports.cerman = cerman;
var crman = bas.crm + bas.can; // rman

exports.crman = crman;
var cala = bas.cal + bas.ca; // ala

exports.cala = cala;
var citi = bas.cit + bas.ci; // iti

exports.citi = citi;
var celand = bas.cel + cand; // eland

exports.celand = celand;
var csia = bas.csi + bas.ca; // sia

exports.csia = csia;
var cesia = bas.ce + csia; // esia

exports.cesia = cesia;
var cnesia = bas.cn + cesia; // nesia

exports.cnesia = cnesia;
var conesia = bas.co + cnesia; // onesia

exports.conesia = conesia;
var cran = bas.cra + bas.cn; // ran

exports.cran = cran;
var cdan = bas.cda + bas.cn; // dan

exports.cdan = cdan;
var cati = bas.cat + bas.ci; // eti

exports.cati = cati;
var ccar = bas.cca + bas.cr; // car

exports.ccar = ccar;
var cali = bas.cal + bas.ci; // ali

exports.cali = cali;
var cslands = bas.csl + cand + bas.cs; // slands

exports.cslands = cslands;
var cands = cand + bas.cs; // ands

exports.cands = cands;
var cnds = bas.cnd + bas.cs; // nds

exports.cnds = cnds;
var cova = bas.cov + bas.ca; // ova

exports.cova = cova;
var cnmar = bas.cnm + bas.car; // nmar

exports.cnmar = cnmar;
var cmar = bas.cma + bas.cr; // mar

exports.cmar = cmar;
var curu = bas.cur + bas.cu; // uru

exports.curu = curu;
var cagua = bas.cag + bas.cua; // agua

exports.cagua = cagua;
var cragua = bas.cr + cagua; // ragua

exports.cragua = cragua;
var caragua = cara + bas.cgu + bas.ca; // aragua

exports.caragua = caragua;
var ciger = bas.cig + bas.cer; // iger

exports.ciger = ciger;
var corea = core + bas.ca; // orea

exports.corea = corea;
var ckistan = bas.cki + bas.cst + bas.can; // kistan

exports.ckistan = ckistan;
var cama = bas.cam + bas.ca; // ama

exports.cama = cama;
var cguay = bas.cgu + bas.cay; // guay

exports.cguay = cguay;
var cuay = bas.cua + bas.cy; // uay

exports.cuay = cuay;
var cnes = bas.cne + bas.cs; // nes

exports.cnes = cnes;
var cgal = bas.cga + bas.cl; // gal

exports.cgal = cgal;
var cnda = bas.cnd + bas.ca; // nda

exports.cnda = cnda;
var canda = cand + bas.ca; // anda

exports.canda = canda;
var cles = bas.cle + bas.cs; // les

exports.cles = cles;
var crica = cric + bas.ca; // rica

exports.crica = crica;
var cfrica = bas.cf + crica; // frica

exports.cfrica = cfrica;
var cudan = bas.cud + bas.can; // udan

exports.cudan = cudan;
var crland = bas.crl + cand; // rland

exports.crland = crland;
var cerland = bas.ce + crland; // erland

exports.cerland = cerland;
var cste = bas.cst + bas.ce; // ste

exports.cste = cste;
var cnga = bas.cng + bas.ca; // nga

exports.cnga = cnga;
var cates = cate + bas.cs; // ates

exports.cates = cates;
var ctes = bas.cte + bas.cs; // tex

exports.ctes = ctes;
var cela = bas.cel + bas.ca; // ela

exports.cela = cela;
var cnam = bas.cna + bas.cm; // nam

exports.cnam = cnam;
var cmen = bas.cme + bas.cn; // men

exports.cmen = cmen;
var cogen = bas.cog + bas.cen; // ogen

exports.cogen = cogen;
var crogen = bas.cr + cogen; // rogen

exports.crogen = crogen;
var cium = bas.ciu + bas.cm; // ium

exports.cium = cium;
var clium = bas.cl + cium; // lium

exports.clium = clium;
var celium = bas.ce + clium; // elium

exports.celium = celium;
var chium = bas.chi + bas.cum; // hium

exports.chium = chium;
var cthium = bas.ct + chium; // thium

exports.cthium = cthium;
var cllium = bas.cll + bas.ciu + bas.cm; // llium

exports.cllium = cllium;
var clorine = bas.clo + bas.cri + bas.cne; // lorine

exports.clorine = clorine;
var crine = bas.cri + bas.cne; // rine

exports.crine = crine;
var corine = cori + bas.cne; // orine

exports.corine = corine;
var cdium = bas.cdi + bas.cum; // dium

exports.cdium = cdium;
var codium = bas.co + cdium; // odium

exports.codium = codium;
var csium = bas.csi + bas.cum; // sium

exports.csium = csium;
var cesium = bas.ce + csium; // esium

exports.cesium = cesium;
var cnum = bas.cnu + bas.cm; // num

exports.cnum = cnum;
var cinum = bas.ci + cnum; // inum

exports.cinum = cinum;
var cssium = bas.css + bas.ciu + bas.cm; // ssium

exports.cssium = cssium;
var cassium = cass + bas.ciu + bas.cm; // assium

exports.cassium = cassium;
var ccium = bas.cc + cium; // cium

exports.ccium = ccium;
var cndium = cndi + bas.cum; // ndium

exports.cndium = cndium;
var canium = bas.can + cium; // anium

exports.canium = canium;
var cnium = bas.cni + bas.cum; // nium

exports.cnium = cnium;
var cadium = bas.ca + bas.cd + bas.ciu + bas.cm; // adium

exports.cadium = cadium;
var cmium = bas.camai + bas.cum; // mium

exports.cmium = cmium;
var ckel = bas.cke + bas.cl; // kel

exports.ckel = ckel;
var callium = call + cium; // allium

exports.callium = callium;
var cnic = bas.cni + bas.cc; // nic

exports.cnic = cnic;
var cenium = bas.cen + cium; // enium

exports.cenium = cenium;
var cton = bas.cto + bas.cn; // ton

exports.cton = cton;
var cidium = bas.cid + cium; // idium

exports.cidium = cidium;
var ctium = bas.ct + cium; // tium

exports.ctium = ctium;
var crium = bas.cr + cium; // rium

exports.crium = crium;
var conium = bas.con + cium; // onium

exports.conium = conium;
var cbium = bas.cb + cium; // bium

exports.cbium = cbium;
var cetium = bas.cet + cium; // etium

exports.cetium = cetium;
var chenium = chen + cium; // henium

exports.chenium = chenium;
var curium = bas.cur + cium; // urium

exports.curium = curium;
var carium = bas.car + cium; // arium

exports.carium = carium;
var cerium = bas.cer + cium; // erium

exports.cerium = cerium;
var cymium = bas.cym + cium; // ymium

exports.cymium = cymium;
var cdymium = bas.cd + cymium; // dymium

exports.cdymium = cdymium;
var codymium = bas.co + cdymium; // odymium

exports.codymium = codymium;
var ceodymium = bas.ceo + cdymium; // eodymium

exports.ceodymium = ceodymium;
var cinium = cini + bas.cum; // inium

exports.cinium = cinium;
var crbium = bas.crb + cium; // rbium

exports.crbium = crbium;
var cerbium = bas.ce + crbium; // erbium

exports.cerbium = cerbium;
var clum = bas.clu + bas.cm; // clum

exports.clum = clum;
var cuth = bas.cut + bas.ch; // uth

exports.cuth = cuth;
var cncium = bas.cnc + cium; // ncium

exports.cncium = cncium;
var ctinium = bas.cti + bas.cni + bas.cum; // tiniium

exports.ctinium = ctinium;
var cctinium = bas.cc + ctinium; // ctinium

exports.cctinium = cctinium;
var corium = cori + bas.cum; // orium

exports.corium = corium;
var cicium = bas.cic + cium; // icium

exports.cicium = cicium;
var cvium = bas.cv + cium; // vium

exports.cvium = cvium;
var covium = bas.co + cvium; // ovium

exports.covium = covium;
var cero = bas.cer + bas.co; // ero

exports.cero = cero;
var colet = bas.col + bas.cet; // olet

exports.colet = colet;
var ciolet = bas.ci + colet; // iolet

exports.ciolet = ciolet;
var cster = cste + bas.cr; // ster

exports.cster = cster;
var cnge = bas.cng + bas.ce; // nge

exports.cnge = cnge;
var cond = bas.con + bas.cd; // ond

exports.cond = cond;
var cmond = bas.cm + cond; // mond

exports.cmond = cmond;
var clmond = bas.cl + cmond; // lmond

exports.clmond = clmond;
var canth = bas.can + bas.cth; // anth

exports.canth = canth;
var cranth = bas.cr + canth; // ranth

exports.cranth = cranth;
var caranth = bas.ca + cranth; // aranth

exports.caranth = caranth;
var cmaranth = bas.cm + caranth; // maranth

exports.cmaranth = cmaranth;
var cink = bas.cin + bas.ck; // ink

exports.cink = cink;
var crple = bas.crp + bas.cle; // rple

exports.crple = crple;
var curple = bas.cu + crple; // urple

exports.curple = curple;
var cmber = bas.cmb + bas.cer; // mber

exports.cmber = cmber;
var cber = bas.cbe + bas.cr; // ber

exports.cber = cber;
var cBer = bas.cBe + bas.cr; // Ber

exports.cBer = cBer;
var cyst = bas.cys + bas.ct; // yst

exports.cyst = cyst;
var cnze = bas.cnz + bas.ce; // nze

exports.cnze = cnze;
var conze = bas.co + cnze; // onze

exports.conze = conze;
var cronze = bas.cr + conze; // ronze

exports.cronze = cronze;
var chsia = bas.chs + bas.cia; // hsia

exports.chsia = chsia;
var cchsia = bas.cc + chsia; // chsia

exports.cchsia = cchsia;
var cuchsia = bas.cu + cchsia; // uchsia

exports.cuchsia = cuchsia;
var cuby = bas.cub + bas.cy; // uby

exports.cuby = cuby;
var chite = bas.chi + bas.cte; // hite

exports.chite = chite;
var clish = bas.cli + bas.csh; // lish

exports.clish = clish;
var cglish = bas.cg + clish; // glish

exports.cglish = cglish;
var cnglish = bas.cn + cglish; // nglish

exports.cnglish = cnglish;
var ccot = bas.cco + bas.ct; // cot

exports.ccot = ccot;
var cicot = bas.ci + ccot; // icot

exports.cicot = cicot;
var cricot = bas.cr + cicot; // ricot

exports.cricot = cricot;
var cpricot = bas.cp + cricot; // pricot

exports.cpricot = cpricot;
var carine = bas.car + cine; // arine

exports.carine = carine;
var coke = bas.cok + bas.ce; // oke

exports.coke = coke;
var cllow = bas.cll + bas.cow; // llow

exports.cllow = cllow;
var cellow = bas.ce + cllow; // ellow

exports.cellow = cellow;
var cerine = bas.cer + cine; // erine

exports.cerine = cerine;
var cgerine = bas.cg + cerine; // gerine

exports.cgerine = cgerine;
var cngerine = bas.cn + cgerine; // ngerine

exports.cngerine = cngerine;
var cangerine = cange + crine; // angerine

exports.cangerine = cangerine;
var curn = bas.cur + bas.cn; // urn

exports.curn = curn;
var colin = bas.col + bas.cin; // olin

exports.colin = colin;
var cado = bas.ca + bas.cdo; // ado

exports.cado = cado;
var czure = bas.czu + bas.cre; // zure

exports.czure = czure;
var cwder = bas.cw + cder; // wder

exports.cwder = cwder;
var cowder = bas.co + cwder; // owder

exports.cowder = cowder;
var crey = bas.cre + bas.cy; // rey

exports.crey = crey;
var cige = bas.cig + bas.ce; // ige

exports.cige = cige;
var ceige = bas.ce + cige; // eige

exports.ceige = ceige;
var ctre = bas.ctr + bas.ce; // tre

exports.ctre = ctre;
var cstre = bas.cs + ctre; // stre

exports.cstre = cstre;
var cistre = bas.ci + cstre; // istre

exports.cistre = cistre;
var cown = bas.cow + bas.cn; // own

exports.cown = cown;
var crown = bas.cr + cown; // rown

exports.crown = crown;
var cemon = cemo + bas.cn; // emon

exports.cemon = cemon;
var ceet = bas.cee + bas.ct; // eet

exports.ceet = ceet;
var cweet = bas.cw + ceet; // weet

exports.cweet = cweet;
var cmer = bas.cme + bas.cr; // mer

exports.cmer = cmer;
var cmmer = bas.cm + cmer; // mmer

exports.cmmer = cmmer;
var cimmer = bas.ci + cmmer; // immer

exports.cimmer = cimmer;
var chimmer = bas.ch + cimmer; // himmer

exports.chimmer = chimmer;
var cean = bas.cea + bas.cn; // ean

exports.cean = cean;
var clate = clat + bas.ce; // late

exports.clate = clate;
var colate = bas.co + clate; // olate

exports.colate = colate;
var ccolate = bas.cc + colate; // colate

exports.ccolate = ccolate;
var cocolate = bas.co + ccolate; // ocolate

exports.cocolate = cocolate;
var chocolate = bas.ch + cocolate; // hocolate

exports.chocolate = chocolate;
var cfee = bas.cfe + bas.ce; // fee

exports.cfee = cfee;
var cffee = bas.cf + cfee; // ffee

exports.cffee = cffee;
var coffee = bas.co + cffee; // offee

exports.coffee = coffee;
var coral = bas.cor + bas.cal; // oral

exports.coral = coral;
var clive = bas.cli + bas.cve; // live

exports.clive = clive;
var cyola = bas.cyo + bas.cla; // yola

exports.cyola = cyola;
var cayola = bas.ca + cyola; // ayola

exports.cayola = cayola;
var crayola = bas.cr + cayola; // rayola

exports.crayola = crayola;
var csell = bas.cse + bas.cll; // sell

exports.csell = csell;
var cnsell = bas.cn + csell; // nsell

exports.cnsell = cnsell;
var cunsell = bas.cu + cnsell; // unsell

exports.cunsell = cunsell;
var cNCS = bas.cNC + bas.cS; // NCS

exports.cNCS = cNCS;
var ctone = cton + bas.ce; // tone

exports.ctone = ctone;
var cntone = bas.cn + ctone; // ntone

exports.cntone = cntone;
var cantone = bas.ca + cntone; // antone

exports.cantone = cantone;
var cgment = bas.cgm + cent; // gment

exports.cgment = cgment;
var cigment = bas.ci + cgment; // igment

exports.cigment = cigment;
var cRYB = bas.cRY + bas.cB; // RYB

exports.cRYB = cRYB;
var cheel = bas.che + bas.cel; // heel

exports.cheel = cheel;
var ceel = bas.cee + bas.cl; // eel

exports.ceel = ceel;
var cans = bas.can + bas.cs; // ans

exports.cans = cans;
var cire = bas.cir + bas.ce; // ire

exports.cire = cire;
var chire = bas.ch + cire; // hire

exports.chire = chire;
var cphire = bas.cp + chire; // phire

exports.cphire = cphire;
var cpphire = bas.cp + cphire; // pphire

exports.cpphire = cpphire;
var capphire = bas.ca + cpphire; // apphire

exports.capphire = capphire;
var cnder = bas.cnd + bas.cer; // nder

exports.cnder = cnder;
var conder = bas.co + cnder; // onder

exports.conder = conder;
var cole = bas.col + bas.ce; // ole

exports.cole = cole;
var cndy = bas.cnd + bas.cy; // ndy

exports.cndy = cndy;
var candy = bas.ca + cndy; // andy

exports.candy = candy;
var clac = bas.cla + bas.cc; // lac

exports.clac = clac;
var cilac = bas.ci + clac; // ilac

exports.cilac = cilac;
var coon = bas.coo + bas.cn; // oon

exports.coon = coon;
var croon = bas.cr + coon; // roon

exports.croon = croon;
var caroon = bas.ca + croon; // aroon

exports.caroon = caroon;
var cgar = bas.cga + bas.cr; // gar

exports.cgar = cgar;
var cugar = bas.cu + cgar; // ugar

exports.cugar = cugar;
var cuff = bas.cuf + bas.cf; // uff

exports.cuff = cuff;
var cundy = cund + bas.cy; // undy

exports.cundy = cundy;
var cgundy = bas.cg + cundy; // gundy

exports.cgundy = cgundy;
var crgundy = bas.cr + cgundy; // rgundy

exports.crgundy = crgundy;
var curgundy = bas.cu + crgundy; // urgundy

exports.curgundy = curgundy;
var cnna = bas.cnn + bas.ca; // nna

exports.cnna = cnna;
var cenna = bas.ce + cnna; // enna

exports.cenna = cenna;
var cienna = bas.ci + cenna; // ienna

exports.cienna = cienna;
var cntium = bas.cnt + cium; // ntium

exports.cntium = cntium;
var cantium = bas.ca + cntium; // antium

exports.cantium = cantium;
var czantium = bas.cz + cantium; // zantium

exports.czantium = czantium;
var cyzantium = bas.cy + czantium; // yzantium

exports.cyzantium = cyzantium;
var cdet = bas.cde + bas.ct; // det

exports.cdet = cdet;
var cadet = bas.ca + cdet; // adet

exports.cadet = cadet;
var cnary = bas.cna + bas.cry; // nary

exports.cnary = cnary;
var canary = bas.ca + cnary; // anary

exports.canary = canary;
var crmine = bas.cr + cmine; // rmine

exports.crmine = crmine;
var carmine = bas.ca + crmine; // armine

exports.carmine = carmine;
var chest = bas.che + bas.cst; // hest

exports.chest = chest;
var cdon = bas.cdo + bas.cn; // don

exports.cdon = cdon;
var cadon = bas.ca + cdon; // adon

exports.cadon = cadon;
var cladon = bas.cl + cadon; // ladon

exports.cladon = cladon;
var celadon = bas.ce + cladon; // eladon

exports.celadon = celadon;
var cise = bas.cis + bas.ce; // ise

exports.cise = cise;
var crise = bas.cr + cise; // rise

exports.crise = crise;
var cerise = bas.ce + crise; // erise

exports.cerise = cerise;
var culean = cule + bas.can; // ulean

exports.culean = culean;
var crulean = bas.cr + culean; // rulean

exports.crulean = crulean;
var cerulean = bas.ce + crulean; // erulean

exports.cerulean = cerulean;
var crost = bas.cro + bas.cst; // rost

exports.crost = crost;
var cgne = bas.cgn + bas.ce; // gne

exports.cgne = cgne;
var cagne = bas.ca + cgne; // agne

exports.cagne = cagne;
var cpagne = bas.cp + cagne; // pagne

exports.cpagne = cpagne;
var cmpagne = bas.cm + cpagne; // mpagne

exports.cmpagne = cmpagne;
var campagne = bas.ca + cmpagne; // ampagne

exports.campagne = campagne;
var champagne = bas.ch + campagne; // hampagne

exports.champagne = champagne;
var conal = bas.con + bas.cal; // onal

exports.conal = conal;
var citional = citi + conal; // itional

exports.citional = citional;
var cditional = bas.cd + citional; // ditional

exports.cditional = cditional;
var caditional = bas.ca + cditional; // aditional

exports.caditional = caditional;
var craditional = bas.cr + caditional; // raditional

exports.craditional = craditional;
var ctin = bas.cti + bas.cn; // tin

exports.ctin = ctin;
var catin = bas.ca + ctin; // atin

exports.catin = catin;
var cpper = bas.cpp + bas.cer; // pper

exports.cpper = cpper;
var copper = bas.co + cpper; // opper

exports.copper = copper;
var cnny = bas.cnn + bas.cy; // nny

exports.cnny = cnny;
var corn = bas.cor + bas.cn; // orn

exports.corn = corn;
var cilk = bas.cil + bas.ck; // ilk

exports.cilk = cilk;
var calt = bas.cal + bas.ct; // alt

exports.calt = calt;
var cbalt = bas.cb + calt; // balt

exports.cbalt = cbalt;
var cobalt = bas.co + cbalt; // obalt

exports.cobalt = cobalt;
var ctte = bas.ctt + bas.ce; // tte

exports.ctte = ctte;
var catte = bas.ca + ctte; // atte

exports.catte = catte;
var ceam = bas.cea + bas.cm; // eam

exports.ceam = ceam;
var cream = bas.cr + ceam; // ream

exports.cream = cream;
var cmson = bas.cms + bas.con; // mson

exports.cmson = cmson;
var cimson = bas.ci + cmson; // imson

exports.cimson = cimson;
var crimson = bas.cr + cimson; // rimson

exports.crimson = crimson;
var cocess = bas.coc + cess; // ocess

exports.cocess = cocess;
var crocess = bas.cr + cocess; // rocess

exports.crocess = crocess;
var cape = bas.cap + bas.ce; // ape

exports.cape = cape;
var camen = came + bas.cn; // amen

exports.camen = camen;
var caki = bas.cak + bas.ci; // aki

exports.caki = caki;
var chaki = bas.ch + caki; // haki

exports.chaki = chaki;
var cava = bas.cav + bas.ca; // ava

exports.cava = cava;
var civer = cive + bas.cr; // iver

exports.civer = civer;
var cnta = bas.cnt + bas.ca; // nta

exports.cnta = cnta;
var cgenta = bas.cge + cnta; // genta

exports.cgenta = cgenta;
var cagenta = bas.ca + cgenta; // agenta

exports.cagenta = cagenta;
var chid = bas.chi + bas.cd; // hid

exports.chid = chid;
var cchid = bas.cc + chid; // chid

exports.cchid = cchid;
var crchid = bas.cr + cchid; // rchid

exports.crchid = crchid;
var clmon = bas.clm + bas.con; // lmon

exports.clmon = clmon;
var calmon = bas.ca + clmon; // almon

exports.calmon = calmon;
var coise = bas.coi + bas.cse; // oise

exports.coise = coise;
var cuoise = bas.cu + coise; // uoise

exports.cuoise = cuoise;
var cquoise = bas.cq + cuoise; // quoise

exports.cquoise = cquoise;
var crquoise = bas.cr + cquoise; // rquoise

exports.crquoise = crquoise;
var curquoise = bas.cu + crquoise; // urquoise

exports.curquoise = curquoise;
var cfron = bas.cf + cron; // fron

exports.cfron = cfron;
var cffron = bas.cf + cfron; // ffron

exports.cffron = cffron;
var caffron = bas.ca + cffron; // affron

exports.caffron = caffron;
var ckle = bas.ckl + bas.ce; // kle

exports.ckle = ckle;
var cupe = bas.cup + bas.ce; // upe

exports.cupe = cupe;
var caupe = bas.ca + cupe; // aupe

exports.caupe = caupe;
var cnim = bas.cni + bas.cm; // nim

exports.cnim = cnim;
var cenim = bas.ce + cnim; // enim

exports.cenim = cenim;
var cesert = cese + bas.crt; // esert

exports.cesert = cesert;
var crab = bas.cra + bas.cb; // rab

exports.crab = crab;
var cbony = bas.cbo + bas.cny; // bony

exports.cbony = cbony;
var cony = bas.con + bas.cy; // ony

exports.cony = cony;
var cant = bas.can + bas.ct; // ant

exports.cant = cant;
var chell = bas.che + bas.cll; // hell

exports.chell = chell;
var cigo = bas.cig + bas.co; // igo

exports.cigo = cigo;
var cdigo = bas.cd + cigo; // digo

exports.cdigo = cdigo;
var cndigo = bas.cn + cdigo; // ndigo

exports.cndigo = cndigo;
var cald = bas.cal + bas.cd; // ald

exports.cald = cald;
var crald = bas.cr + cald; // rald

exports.crald = crald;
var cerald = bas.ce + crald; // erald

exports.cerald = cerald;
var cmerald = bas.cm + cerald; // merald

exports.cmerald = cmerald;
var cender = bas.cen + cder; // ender

exports.cender = cender;
var cvender = bas.cv + cender; // vender

exports.cvender = cvender;
var cavender = bas.ca + cvender; // avender

exports.cavender = cavender;
var crin = bas.cri + bas.cn; // rin

exports.crin = crin;
var cango = bas.can + bas.cgo; // ango

exports.cango = cango;
var cdango = bas.cd + cango; // dango

exports.cdango = cdango;
var cndango = bas.cn + cdango; // ndango

exports.cndango = cndango;
var candango = bas.ca + cndango; // andango

exports.candango = candango;
var cawn = bas.caw + bas.cn; // awn

exports.cawn = cawn;
var crick = cric + bas.ck; // rick

exports.crick = crick;
var clame = bas.cla + bas.cme; // lame

exports.clame = clame;
var cuve = bas.cuv + bas.ce; // uve

exports.cuve = cuve;
var cauve = bas.ca + cuve; // auve

exports.cauve = cauve;
var crry = bas.crr + bas.cy; // rry

exports.crry = crry;
var cerry = bas.ce + crry; // erry

exports.cerry = cerry;
var cdian = cdia + bas.cn; // dian

exports.cdian = cdian;
var cidian = bas.ci + cdian; // idian

exports.cidian = cidian;
var cridian = bas.cr + cidian; // ridian

exports.cridian = cridian;
var ciridian = bas.ci + cridian; // iridian

exports.ciridian = ciridian;
var cllic = bas.cll + bas.cic; // llic

exports.cllic = cllic;
var callic = bas.ca + cllic; // allic

exports.callic = callic;
var ctallic = bas.ct + callic; // tallic

exports.ctallic = ctallic;
var cetallic = bas.ce + ctallic; // etallic

exports.cetallic = cetallic;
var cden = bas.cde + bas.cn; // den

exports.cden = cden;
var clden = bas.cl + cden; // lden

exports.clden = clden;
var colden = bas.co + clden; // olden

exports.colden = colden;
var cpple = bas.cpp + bas.cle; // pple

exports.cpple = cpple;
var czard = bas.cza + bas.crd; // zard

exports.czard = czard;
var cheen = bas.che + bas.cen; // heen

exports.cheen = cheen;
var cllo = bas.cll + bas.co; // llo

exports.cllo = cllo;
var cetal = bas.cet + bas.cal; // etal

exports.cetal = cetal;
var ctal = bas.cta + bas.cl; // tal

exports.ctal = ctal;
var cuin = bas.cui + bas.cn; // uin

exports.cuin = cuin;
var cope = bas.cop + bas.ce; // ope

exports.cope = cope;
var cpace = bas.cpa + bas.cce; // pace

exports.cpace = cpace;
var cris = bas.cri + bas.cs; // ris

exports.cris = cris;
var cade = bas.ca + bas.cde; // ade

exports.cade = cade;
var cobe = bas.cob + bas.ce; // obe

exports.cobe = cobe;
var cobi = bas.cob + bas.ci; // obi

exports.cobi = cobi;
var ccha = bas.cch + bas.ca; // cha

exports.ccha = ccha;
var culi = bas.cul + bas.ci; // uli

exports.culi = culi;
var cloral = bas.clo + cral; // loral

exports.cloral = cloral;
var cier = bas.cie + bas.cr; // ier

exports.cier = cier;
var cnkle = bas.cnk + bas.cle; // nkle

exports.cnkle = cnkle;
var cinkle = bas.ci + cnkle; // inkle

exports.cinkle = cinkle;
var cnen = bas.cne + bas.cn; // nen

exports.cnen = cnen;
var cinen = bas.ci + cnen; // inen

exports.cinen = cinen;
var cgan = bas.cga + bas.cn; // gan

exports.cgan = cgan;
var cvid = bas.cvi + bas.cd; // vid

exports.cvid = cvid;
var civid = bas.ci + cvid; // ivid

exports.civid = civid;
var cake = bas.cak + bas.ce; // ake

exports.cake = cake;
var caze = bas.caz + bas.ce; // aze

exports.caze = caze;
var cany = bas.can + bas.cy; // any

exports.cany = cany;
var caize = bas.cai + bas.cze; // aize

exports.caize = caize;
var ctee = bas.cte + bas.ce; // tee

exports.ctee = ctee;
var carin = bas.car + bas.cin; // arin

exports.carin = carin;
var ctis = bas.cti + bas.cs; // tis

exports.ctis = ctis;
var cras = bas.cra + bas.cs; // ras

exports.cras = cras;
var celon = bas.cel + bas.con; // elon

exports.celon = celon;
var caro = bas.car + bas.co; // aro

exports.caro = caro;
var coss = bas.cos + bas.cs; // oss

exports.coss = coss;
var cdow = bas.cdo + bas.cw; // dow

exports.cdow = cdow;
var cadow = bas.ca + cdow; // adow

exports.cadow = cadow;
var ctic = bas.cti + bas.cc; // tic

exports.ctic = ctic;
var cstic = bas.cs + ctic; // stic

exports.cstic = cstic;
var cystic = bas.cy + cstic; // ystic

exports.cystic = cystic;
var crot = bas.cro + bas.ct; // rot

exports.crot = crot;
var crrot = bas.cr + crot; // rrot

exports.crrot = crrot;
var carrot = bas.ca + crrot; // arrot

exports.carrot = carrot;
var clver = bas.clv + bas.cer; // lver

exports.clver = clver;
var cilver = bas.ci + clver; // ilver

exports.cilver = cilver;
var clood = bas.clo + bas.cod; // lood

exports.clood = clood;
var chip = bas.chi + bas.cp; // hip

exports.chip = chip;
var cach = bas.cac + bas.ch; // ach

exports.cach = cach;
var ceach = bas.ce + cach; // each

exports.ceach = ceach;
var cree = bas.cre + bas.ce; // ree

exports.cree = cree;
var chio = bas.chi + bas.co; // hio

exports.chio = chio;
var cower = bas.cow + bas.cer; // ower

exports.cower = cower;
var cwer = bas.cwe + bas.cr; // wer

exports.cwer = cwer;
var cstar = bas.cst + bas.car; // star

exports.cstar = cstar;
var cune = bas.cun + bas.ce; // une

exports.cune = cune;
var ckin = bas.cki + bas.cn; // kin

exports.ckin = ckin;
var csty = bas.cst + bas.cy; // sty

exports.csty = csty;
var cavy = bas.cav + bas.cy; // avy

exports.cavy = cavy;
var cazz = bas.caz + bas.cz; // azz

exports.cazz = cazz;
var creus = bas.cre + bas.cus; // reus

exports.creus = creus;
var ceus = bas.ceu + bas.cs; // eus

exports.ceus = ceus;
var cbon = bas.cbo + bas.cn; // bon

exports.cbon = cbon;
var cdder = bas.cdd + bas.cer; // dder

exports.cdder = cdder;
var cadder = bas.ca + cdder; // adder

exports.cadder = cadder;
var cale = bas.cal + bas.ce; // ale

exports.cale = cale;
var cark = bas.car + bas.ck; // ark

exports.cark = cark;
var cpia = bas.cpi + bas.ca; // pia

exports.cpia = cpia;
var chadow = bas.cha + cdow; // hadow

exports.chadow = chadow;
var cock = bas.coc + bas.ck; // ock

exports.cock = cock;
var ctten = bas.ctt + bas.cen; // tten

exports.ctten = ctten;
var ceal = bas.cea + bas.cl; // eal

exports.ceal = ceal;
var ctraw = ctra + bas.cw; // traw

exports.ctraw = ctraw;
var craw = bas.cra + bas.cw; // raw

exports.craw = craw;
var ctle = bas.ctl + bas.ce; // tle

exports.ctle = ctle;
var cstle = bas.cs + ctle; // stle

exports.cstle = cstle;
var crest = cres + bas.ct; // rest

exports.crest = crest;
var corest = bas.co + crest; // orest

exports.corest = corest;
var ccan = bas.cca + bas.cn; // can

exports.ccan = ccan;
var cuscan = bas.cus + ccan; // uscan

exports.cuscan = cuscan;
var clla = bas.cll + bas.ca; // lla

exports.clla = clla;
var cilla = bas.ci + clla; // illa

exports.cilla = cilla;
var cnilla = bas.cn + cilla; // nilla

exports.cnilla = cnilla;
var canilla = bas.ca + cnilla; // anilla

exports.canilla = canilla;
var cilion = cili + bas.con; // ilion

exports.cilion = cilion;
var cmilion = bas.cm + cilion; // milion

exports.cmilion = cmilion;
var crmilion = bas.cr + cmilion; // rmilion

exports.crmilion = crmilion;
var cermilion = bas.ce + crmilion; // ermilion

exports.cermilion = cermilion;
var chine = bas.chi + bas.cne; // hine

exports.chine = chine;
var comp = bas.com + bas.cp; // omp

exports.comp = comp;
var cclr = bas.ccl + bas.cr; // clr

exports.cclr = cclr;
var cded = bas.cde + bas.cd; // ded

exports.cded = cded;
var cbing = bas.cb + cing; // bing

exports.cbing = cbing;
var ceth = bas.cet + bas.ch; // eth

exports.ceth = ceth;
var clang = bas.cl + cang; // lang

exports.clang = clang;
var cLang = bas.cL + cang; // Lang

exports.cLang = cLang;
var cuage = bas.cu + cage; // uage

exports.cuage = cuage;
var cries = bas.cr + cies; // ries

exports.cries = cries;
var ciss = bas.cis + bas.cs; // iss

exports.ciss = ciss;
var cinc = bas.cin + bas.cc; // inc

exports.cinc = cinc;
var cInc = bas.cIn + bas.cc; // Inc

exports.cInc = cInc;
var cmum = bas.cmu + bas.cm; // mum

exports.cmum = cmum;
var cimum = bas.ci + cmum; // imum
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// NOTE: Additional Optimizations needed for the following
// These terms should support a future refactoring effort of the Shapes constants.
// The shapes constants is a really massive refactoring effort and not as functionally useful
// for current application needs. So this will be deferred for later and may be taken on
// in small chunks rather than all at once.
//////////////////////////////////////////////////////////////////
// smuggle something circle = bas.cir + p.ccle; // ircle
// smuggle something crcle = bas.crc + bas.cle; // rcle
// smuggle something cCircle = p.cCir + p.ccle; // Circle
// smuggle something cOval = bas.cOv + bas.cal; // Oval
// smuggle something cuare = bas.cua + bas.cre; // uare
// smuggle something criangle = p.cria + bas.cng + bas.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = bas.cng + bas.cle; // ngle
// smuggle something cectangle = p.cect + w.cangle; // ectangle
// smuggle something cctangle = bas.cct + w.cangle; // ctangle
// smuggle something ctangle = clr.ctan + p.cgle; // tangle
// smuggle something cctagon = bas.cct + bas.cag + bas.con; // ctagon
// smuggle something ctagon = w.ctag + bas.con; // tagon
// smuggle something cagon = bas.cag + bas.con; // agon
// smuggle something cexagon = bas.cex + bas.cag + bas.con; // exagon
// smuggle something cxagon = bas.cxa + p.cgon; // xagon
// smuggle something ceptagon = bas.cep + w.ctag + bas.con; // eptagon
// smuggle something cptagon = bas.cpt + bas.cag + bas.con; // ptagon
// smuggle something conagon = bas.con + bas.cag + bas.con; // onagon
// smuggle something cnagon = bas.cna + p.cgon; // nagon
// smuggle something crapezoid = p.crap + bas.cez + bas.coi + bas.cd; // rapezoid
// smuggle something capezoid = p.cape + p.czoid; // apezoid
// smuggle something cpezoid = bas.cpe + p.czoid; // pezoid
// smuggle something cezoid = bas.cez + bas.coi + bas.cd; // ezoid
// smuggle something coid = bas.coi + bas.cd; // oid
// smuggle something cube = bas.cub + bas.ce; // ube
// smuggle something ccubic = bas.ccu + bas.cbi + bas.cc; // cubic
// smuggle something cbic = bas.cbi + bas.cc; // bic
// smuggle something cCubic = bas.cCu + bas.cbi + bas.cc; // Cubic
// smuggle something cPlane = bas.cPl + p.cane; // Plane
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something cquartic = w.cquart + bas.cic; // quartic
// smuggle something cuartic = bas.cua + p.crtic; // uartic
// smuggle something cartic = p.cart + bas.cic; // artic
// smuggle something cQuartic = w.cQuart + bas.cic; // Quartic
// smuggle something cconic = p.ccon + bas.cic; // conic
// smuggle something conic = bas.con + bas.cic; // onic
// smuggle something cConic = p.cCon + bas.cic; // Conic
// Optimized constant definition for word: cubic = p.cubic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cbic = bas.cbi + bas.cc
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cic = bas.cic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cc = bas.cc
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// smuggle something cPlaneCurve = bas.cPl + p.cane + p.cCur + bas.cve; // PlaneCurve
// smuggle something claneCurve = w.clane + p.cCur + bas.cve; // laneCurve
// smuggle something caneCurve = p.cane + p.cCur + bas.cve; // aneCurve
// smuggle something cneCurve = bas.cne + p.cCur + bas.cve; // neCurve
// smuggle something ceCurve = bas.ceC + p.curve; // eCurve
// Optimized constant definition for word: cuartic = bas.cua + p.crtic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cartic = p.cart + bas.cic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: crtic = p.crtic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: ctic = p.ctic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// smuggle something conicSection = bas.con + bas.cic + w.cSection; // onicSection
// smuggle something cnicSection = p.cnic + w.cSection; // nicSection
// smuggle something cicSection = bas.cic + w.cSection; // icSection
// smuggle something ccSection = bas.ccS + p.cect + p.cion; // cSection
// smuggle something cection = p.cect + p.cion; // ection
// smuggle something cnitCircle = bas.cni + bas.ctC + bas.cir + p.ccle; // nitCircle
// smuggle something citCircle = bas.cit + p.cCir + p.ccle; // itCircle
// smuggle something ctCircle = bas.ctC + bas.cir + p.ccle; // tCircle
// smuggle something cnitHyperbola = bas.cni + bas.ctH + p.cype + bas.crb + p.cola; // nitHyperbola
// smuggle something citHyperbola = bas.cit + p.cHyper + p.cbola; // itHyperbola
// smuggle something ctHyperbola = bas.ctH + p.cype + bas.crb + p.cola; // tHyperbola
// smuggle something cHyperbola = p.cHyper + p.cbola; // Hyperbola
// smuggle something cyperbola = p.cype + bas.crb + p.cola; // yperbola
// smuggle something cperbola = p.cper + p.cbola; // perbola
// smuggle something cerbola = bas.cer + p.cbola; // erbola
// smuggle something crbola = bas.crb + p.cola; // rbola
// smuggle something choid = bas.cho + bas.cid; // hoid
// smuggle something cdCurve = bas.cdC + p.curve; // dCurve
// smuggle something coseCurve = p.cose + p.cCur + bas.cve; // oseCurve
// smuggle something cseCurve = bas.cse + p.cCur + bas.cve; // seCurve
// smuggle something cmCurve = bas.cmC + p.curve; // mCurve
// smuggle something cidCurve = bas.cid + p.cCur + bas.cve; // idCurve
// smuggle something csCurve = bas.csC + p.curve; // sCurve
// smuggle something cLimacon = g.cLima + p.ccon; // Limacon
// smuggle something cimacon = bas.cim + bas.cac + bas.con; // imacon
// smuggle something cmacon = bas.cma + p.ccon; // macon
// smuggle something cacon = bas.cac + bas.con; // acon
// smuggle something cTrisectrix = p.cTri + p.csec + p.ctri + bas.cx; // Trisectrix
// smuggle something crisectrix = p.crise + bas.cct + bas.cri + bas.cx; // risectrix
// smuggle something cisectrix = p.cise + bas.cct + bas.cri + bas.cx; // isectrix
// smuggle something csectrix = p.csec + p.ctri + bas.cx; // sectrix
// smuggle something cectrix = p.cect + bas.cri + bas.cx; // ectrix
// smuggle something cctrix = bas.cct + bas.cri + bas.cx; // ctrix
// smuggle something ctrix = p.ctri + bas.cx; // trix
// smuggle something crix = bas.cri + bas.cx; // rix
// smuggle something croid = bas.cro + bas.cid; // roid
// smuggle something cloid = bas.clo + bas.cid; // loid
// smuggle something crifolium = bas.cri + bas.cfo + p.clium; // rifolium
// smuggle something cifolium = bas.cif + bas.col + p.cium; // ifolium
// smuggle something cfolium = bas.cfo + p.clium; // folium
// smuggle something colium = bas.col + p.cium; // olium
// smuggle something ccycloid = bas.ccy + bas.ccl + bas.coi + bas.cd; // cycloid
// smuggle something cycloid = bas.cyc + bas.clo + bas.cid; // ycloid
// smuggle something ccloid = bas.ccl + bas.coi + bas.cd; // cloid
// smuggle something cpiral = bas.cpi + p.cral; // piral
// smuggle something ciral = bas.cir + bas.cal; // iral
// smuggle something cchoid = bas.cch + bas.coi + bas.cd; // choid
// smuggle something calCurve = bas.cal + p.cCur + bas.cve; // alCurve
// smuggle something clCurve = bas.clC + p.curve; // lCurve
// smuggle something cicCurve = bas.cic + p.cCur + bas.cve; // icCurve
// smuggle something ccCurve = bas.ccC + p.curve; // cCurve
// smuggle something cllipticCurve = bas.cll + bas.cip + p.ctic + p.cCur + bas.cve; // llipticCurve
// smuggle something clipticCurve = bas.cli + bas.cpt + bas.cic + p.cCur + bas.cve; // lipticCurve
// smuggle something cipticCurve = bas.cip + p.ctic + p.cCur + bas.cve; // ipticCurve
// smuggle something cpticCurve = bas.cpt + bas.cic + p.cCur + bas.cve; // pticCurve
// smuggle something cticCurve = p.ctic + p.cCur + bas.cve; // ticCurve
//
// smuggle something crCurve = bas.crC + p.curve; // rCurve
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cSurface = bas.cSu + bas.crf + p.cace; // Surface
// smuggle something curface = bas.cur + w.cface; // urface
// smuggle something crface = bas.crf + p.cace; // rface
// smuggle something ctCurve = bas.ctC + p.curve; // tCurve
// smuggle something cSpiral = bas.cSp + bas.cir + bas.cal; // Spiral
// smuggle something cpiral = bas.cpi + p.cral; // piral
// smuggle something ciral = bas.cir + bas.cal; // iral
// smuggle something ctochrone = bas.cto + bas.cch + p.cron + bas.ce; // tochrone
// smuggle something cochrone = bas.coc + bas.chr + n.cone; // ochrone
// smuggle something cchrone = bas.cch + p.cron + bas.ce; // chrone
// smuggle something chrone = bas.chr + n.cone; // hrone
// smuggle something crone = p.cron + bas.ce; // rone
// smuggle something coid = bas.coi + bas.cd; // oid
// smuggle something cloid = bas.clo + bas.cid; // loid
// smuggle something cIsochrone = p.cIso + bas.cch + p.cron + bas.ce; // Isochrone
// smuggle something csochrone = bas.cso + bas.cch + p.cron + bas.ce; // sochrone
// smuggle something ceCurve = bas.ceC + p.curve; // eCurve
// smuggle something csSpiral = bas.csS + bas.cpi + p.cral; // sSpiral
// smuggle something ctsSpiral = bas.cts + bas.cSp + bas.cir + bas.cal; // tsSpiral
// smuggle something cicSpiral = bas.cic + bas.cSp + bas.cir + bas.cal; // icSpiral
// smuggle something ccSpiral = bas.ccS + bas.cpi + p.cral; // cSpiral
// smuggle something cractrix = bas.cra + bas.cct + bas.cri + bas.cx; // ractrix
// smuggle something cactrix = w.cact + bas.cri + bas.cx; // actrix
// smuggle something cctrix = bas.cct + bas.cri + bas.cx; // ctrix
// smuggle something ctrix = p.ctri + bas.cx; // trix
// smuggle something crix = bas.cri + bas.cx; // rix
// smuggle something cchoid = bas.cch + bas.coi + bas.cd; // choid
// smuggle something choid = bas.cho + bas.cid; // hoid
// smuggle something cBSpline = bas.cBS + bas.cpl + p.cine; // BSpline
// smuggle something cSpline = bas.cSp + w.cline; // Spline
// smuggle something cpline = bas.cpl + p.cine; // pline
// smuggle something csCurve = bas.csC + p.curve; // sCurve
// smuggle something calCurve = bas.cal + p.cCur + bas.cve; // alCurve
// smuggle something clCurve = bas.clC + p.curve; // lCurve
// smuggle something cTriangle = p.cTri + w.cangle; // Triangle
// smuggle something criangle = p.cria + bas.cng + bas.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = bas.cng + bas.cle; // ngle
// smuggle something caustic = bas.cau + p.cstic; // austic
// smuggle something custic = p.cust + bas.cic; // ustic
// smuggle something cacaustic = bas.cac + bas.cau + p.cstic; // acaustic
// smuggle something ccaustic = p.ccau + p.cstic; // caustic
// smuggle something csoid = bas.cso + bas.cid; // soid
// smuggle something cvolute = bas.cvo + bas.clu + bas.cte; // volute
// smuggle something colute = bas.col + p.cute; // olute
// smuggle something clute = bas.clu + bas.cte; // lute
// smuggle something cette = bas.cet + bas.cte; // ette
// smuggle something coptic = p.copt + bas.cic; // optic
// smuggle something cptic = bas.cpt + bas.cic; // ptic
// smuggle something cmic = bas.camai + bas.cc; // mic
// smuggle something cPedalCurve = bas.cPe + bas.cda + bas.clC + p.curve; // PedalCurve
// smuggle something cedalCurve = bas.ced + bas.cal + p.cCur + bas.cve; // edalCurve
// smuggle something cdalCurve = bas.cda + bas.clC + p.curve; // dalCurve
// smuggle something celix = bas.cel + bas.cix; // elix
// smuggle something clix = bas.cli + bas.cx; // lix
// smuggle something cboloid = p.cbol + bas.coi + bas.cd; // boloid
// smuggle something coloid = bas.col + bas.coi + bas.cd; // oloid
//
// Optimized constant definition for word: cns = bas.cns
// Optimized constant definition for word: cMinimal = g.cMin + bas.cim + bas.cal
// Optimized constant definition for word: cSurface = bas.cSu + bas.crf + p.cace
// Optimized constant definition for word: cs = bas.cs
// Optimized constant definition for word: cMinimal = g.cMin + bas.cim + bas.cal
// Optimized constant definition for word: cSurface = bas.cSu + bas.crf + p.cace
// smuggle something cMinimalSurface = g.cMin + bas.cim + bas.cal + bas.cSu + bas.crf + p.cace; // MinimalSurface
// smuggle something cinimalSurface = p.cini + p.cmal + bas.cSu + bas.crf + p.cace; // inimalSurface
// smuggle something cnimalSurface = p.cnim + bas.cal + bas.cSu + bas.crf + p.cace; // nimalSurface
// smuggle something cimalSurface = bas.cim + bas.cal + bas.cSu + bas.crf + p.cace; // imalSurface
// smuggle something cmalSurface = p.cmal + bas.cSu + bas.crf + p.cace; // malSurface
// smuggle something calSurface = bas.cal + bas.cSu + bas.crf + p.cace; // alSurface
// smuggle something clSurface = bas.clS + bas.cur + w.cface; // lSurface
// smuggle something cSurface = bas.cSu + bas.crf + p.cace; // Surface
// smuggle something curface = bas.cur + w.cface; // urface
// smuggle something crface = bas.crf + p.cace; // rface
// smuggle something cnoid = bas.cno + bas.cid; // noid
// smuggle something coid = bas.coi + bas.cd; // oid
// smuggle something croid = bas.cro + bas.cid; // roid
// smuggle something csSurface = bas.csS + bas.cur + w.cface; // sSurface
// smuggle something cSheet = bas.cSh + p.ceet; // Sheet
// smuggle something cheet = bas.che + bas.cet; // heet
// smuggle something cboloid = p.cbol + bas.coi + bas.cd; // boloid
// smuggle something coloid = bas.col + bas.coi + bas.cd; // oloid
// smuggle something cloid = bas.clo + bas.cid; // loid
// smuggle something cphere = bas.cph + p.cere; // phere
// smuggle something chere = w.cher + bas.ce; // here
// smuggle something cCubic = bas.cCu + bas.cbi + bas.cc; // Cubic
// smuggle something cbic = bas.cbi + bas.cc; // bic
// smuggle something caddle = w.c_add + bas.cle; // addle
// smuggle something cddle = bas.cdd + bas.cle; // ddle
// smuggle something cdle = bas.cdl + bas.ce; // dle
// smuggle something ceCurve = bas.ceC + p.curve; // eCurve
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cract = bas.cra + bas.cct; // ract
// smuggle something cFractal = p.cFra + bas.cct + bas.cal; // Fractal
// smuggle something cractal = bas.cra + bas.cct + bas.cal; // ractal
// smuggle something cactal = w.cact + bas.cal; // actal
// smuggle something cctal = bas.cct + bas.cal; // ctal
// smuggle something cflake = bas.cfl + p.cake; // flake
// smuggle something clake = bas.cla + bas.cke; // lake
// smuggle something cAttractor = e.cAt + p.ctra + p.cctor; // Attractor
// smuggle something cttractor = bas.ctt + bas.cra + p.cctor; // ttractor
// smuggle something ctractor = p.ctra + p.cctor; // tractor
// smuggle something cractor = bas.cra + p.cctor; // ractor
// smuggle something cactor = w.cact + bas.cor; // actor
// smuggle something cystem = p.cyst + bas.cem; // ystem
// smuggle something cstem = p.cste + bas.cm; // stem
// smuggle something ctem = bas.cte + bas.cm; // tem
//
// smuggle something calTriangle = bas.cal + p.cTri + w.cangle; // alTriangle
// smuggle something clTriangle = bas.clT + p.cria + bas.cng + bas.cle; // lTriangle
// smuggle something cTriangle = p.cTri + w.cangle; // Triangle
// smuggle something criangle = p.cria + bas.cng + bas.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = bas.cng + bas.cle; // ngle
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cTiling = bas.cTi + p.clin + bas.cg; // Tiling
// smuggle something ciling = p.cili + bas.cng; // iling
// smuggle something cling = p.clin + bas.cg; // ling
// smuggle something cFractal = p.cFra + bas.cct + bas.cal; // Fractal
// smuggle something cractal = bas.cra + bas.cct + bas.cal; // ractal
// smuggle something cactal = w.cact + bas.cal; // actal
// smuggle something cctal = bas.cct + bas.cal; // ctal
// smuggle something ciCurve = bas.ciC + p.curve; // iCurve
// Optimized constant definition for word: cVon = bas.cVo + bas.cn
// Optimized constant definition for word: cKoch = bas.cKo + bas.cch
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: con = bas.con
// Optimized constant definition for word: cKoch = bas.cKo + bas.cch
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cn = bas.cn
// Optimized constant definition for word: cKoch = bas.cKo + bas.cch
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// smuggle something cKochCurve = bas.cKo + bas.cch + p.cCur + bas.cve; // KochCurve
// smuggle something cochCurve = bas.coc + bas.chC + p.curve; // ochCurve
// smuggle something cchCurve = bas.cch + p.cCur + bas.cve; // chCurve
// smuggle something chCurve = bas.chC + p.curve; // hCurve
// smuggle something cBrownianMotion = clr.cBrown + p.cian + bas.cMo + p.ction; // BrownianMotion
// smuggle something crownianMotion = p.crown + p.cian + bas.cMo + p.ction; // rownianMotion
// smuggle something cownianMotion = p.cown + p.cian + bas.cMo + p.ction; // ownianMotion
// smuggle something cwnianMotion = bas.cwn + p.cian + bas.cMo + p.ction; // wnianMotion
// smuggle something cnianMotion = p.cnia + bas.cnM + bas.cot + p.cion; // nianMotion
// smuggle something cianMotion = p.cian + bas.cMo + p.ction; // ianMotion
// smuggle something canMotion = bas.can + bas.cMo + p.ction; // anMotion
// smuggle something cnMotion = bas.cnM + bas.cot + p.cion; // nMotion
// smuggle something cMotion = bas.cMo + p.ction; // Motion
// smuggle something cotion = bas.cot + p.cion; // otion
// smuggle something cDPolymer = bas.cDP + bas.col + bas.cym + bas.cer; // DPolymer
// smuggle something cPolymer = bas.cPo + bas.cly + p.cmer; // Polymer
// smuggle something colymer = bas.col + bas.cym + bas.cer; // olymer
// smuggle something clymer = bas.cly + p.cmer; // lymer
// smuggle something cymer = bas.cym + bas.cer; // ymer
// Optimized constant definition for word: cion = p.cion
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: con = bas.con
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cn = bas.cn
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cront = p.cron + bas.ct
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cont = p.cont
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cnt = bas.cnt
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: ct = bas.ct
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// smuggle something cIn2D = bas.cIn + n.c2 + bas.cD; // In2D
// smuggle something cn2D = bas.cn + n.c2 + bas.cD; // n2D
// smuggle something c2DPercolationCluster = n.c2 + bas.cDP + bas.cer + p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // 2DPercolationCluster
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cPercolation = p.cPer + p.ccol + p.cation
// Optimized constant definition for word: cCluster = bas.cCl + p.cust + bas.cer
// smuggle something cPercolationCluster = p.cPer + p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // PercolationCluster
// smuggle something cercolationCluster = bas.cer + p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // ercolationCluster
// smuggle something crcolationCluster = bas.crc + p.cola + p.ction + bas.cCl + p.cust + bas.cer; // rcolationCluster
// smuggle something ccolationCluster = p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // colationCluster
// smuggle something colationCluster = p.cola + p.ction + bas.cCl + p.cust + bas.cer; // olationCluster
// smuggle something clationCluster = p.clat + p.cion + bas.cCl + p.cust + bas.cer; // lationCluster
// smuggle something cationCluster = p.cation + bas.cCl + p.cust + bas.cer; // ationCluster
// smuggle something ctionCluster = p.ction + bas.cCl + p.cust + bas.cer; // tionCluster
// smuggle something cionCluster = p.cion + bas.cCl + p.cust + bas.cer; // ionCluster
// smuggle something conCluster = bas.con + bas.cCl + p.cust + bas.cer; // onCluster
// smuggle something cnCluster = bas.cnC + p.clus + p.cter; // nCluster
// smuggle something cCluster = bas.cCl + p.cust + bas.cer; // Cluster
// smuggle something cluster = p.clus + p.cter; // luster
// smuggle something custer = p.cust + bas.cer; // uster
// smuggle something cPolygon = bas.cPo + bas.cly + p.cgon; // Polygon
// smuggle something colygon = bas.col + bas.cyg + bas.con; // olygon
// smuggle something clygon = bas.cly + p.cgon; // lygon
// smuggle something cygon = bas.cyg + bas.con; // ygon
// smuggle something cEquilateral = p.cEqu + bas.cil + p.cate + p.cral; // Equilateral
// smuggle something cquilateral = bas.cqu + bas.cil + p.cate + p.cral; // quilateral
// smuggle something cuilateral = bas.cui + p.clate + p.cral; // uilateral
// smuggle something cilateral = bas.cil + p.cate + p.cral; // ilateral
// smuggle something clateral = p.clate + p.cral; // lateral
// smuggle something cateral = p.cate + p.cral; // ateral
// smuggle something cteral = p.cter + bas.cal; // teral
// smuggle something ceral = p.cera + bas.cl; // eral
// smuggle something carPolygon = bas.car + bas.cPo + bas.cly + p.cgon; // arPolygon
// smuggle something crPolygon = bas.crP + bas.col + bas.cyg + bas.con; // rPolygon
// smuggle something ctagram = w.ctag + p.cram; // tagram
// smuggle something cagram = bas.cag + p.cram; // agram
// smuggle something cgram = bas.cgr + bas.cam; // gram
// smuggle something cagon = bas.cag + bas.con; // agon
// smuggle something cecagon = bas.cec + bas.cag + bas.con; // ecagon
// smuggle something ccagon = bas.cca + p.cgon; // cagon
// smuggle something cdecagon = bas.cde + bas.cca + p.cgon; // decagon
// smuggle something cadecagon = p.cade + bas.cca + p.cgon; // adecagon
// smuggle something ctadecagon = bas.cta + bas.cde + bas.cca + p.cgon; // tadecagon
// smuggle something cogon = bas.cog + bas.con; // ogon
//
// smuggle something cahedron = bas.cah + bas.ced + p.cron; // ahedron
// smuggle something chedron = bas.che + bas.cdr + bas.con; // hedron
// smuggle something cedron = bas.ced + p.cron; // edron
// smuggle something cdron = bas.cdr + bas.con; // dron
// smuggle something cDodecahedron = bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // Dodecahedron
// smuggle something codecahedron = p.code + bas.cca + bas.che + bas.cdr + bas.con; // odecahedron
// smuggle something cdecahedron = bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // decahedron
// smuggle something cecahedron = bas.cec + bas.cah + bas.ced + p.cron; // ecahedron
// smuggle something ccahedron = bas.cca + bas.che + bas.cdr + bas.con; // cahedron
// smuggle something cIcosahedron = bas.cIc + bas.cos + bas.cah + bas.ced + p.cron; // Icosahedron
// smuggle something ccosahedron = bas.cco + bas.csa + bas.che + bas.cdr + bas.con; // cosahedron
// smuggle something cosahedron = bas.cos + bas.cah + bas.ced + p.cron; // osahedron
// smuggle something csahedron = bas.csa + bas.che + bas.cdr + bas.con; // sahedron
// smuggle something cHosohedron = bas.cHo + bas.cso + bas.che + bas.cdr + bas.con; // Hosohedron
// smuggle something cosohedron = bas.cos + bas.coh + bas.ced + p.cron; // osohedron
// smuggle something csohedron = bas.cso + bas.che + bas.cdr + bas.con; // sohedron
// smuggle something cohedron = bas.coh + bas.ced + p.cron; // ohedron
// smuggle something cagon = bas.cag + bas.con; // agon
// smuggle something chedra = bas.che + bas.cdr + bas.ca; // hedra
// smuggle something cedra = bas.ced + bas.cra; // edra
// smuggle something cdra = bas.cdr + bas.ca; // dra
// smuggle something cStellatedDodecahedron = bas.cSt + p.cell + p.cate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // StellatedDodecahedron
// smuggle something ctellatedDodecahedron = bas.cte + p.clla + p.cted + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // tellatedDodecahedron
// smuggle something cellatedDodecahedron = p.cell + p.cate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // ellatedDodecahedron
// smuggle something cllatedDodecahedron = p.clla + p.cted + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // llatedDodecahedron
// smuggle something clatedDodecahedron = p.clate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // latedDodecahedron
// smuggle something catedDodecahedron = p.cate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // atedDodecahedron
// smuggle something ctedDodecahedron = p.cted + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // tedDodecahedron
// smuggle something cedDodecahedron = bas.ced + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // edDodecahedron
// smuggle something cdDodecahedron = bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // dDodecahedron
// smuggle something cSquareTiling = bas.cSq + bas.cua + bas.cre + bas.cTi + p.clin + bas.cg; // SquareTiling
// smuggle something cquareTiling = p.cquare + bas.cTi + p.clin + bas.cg; // quareTiling
// smuggle something cuareTiling = bas.cua + bas.cre + bas.cTi + p.clin + bas.cg; // uareTiling
// smuggle something careTiling = p.care + bas.cTi + p.clin + bas.cg; // areTiling
// smuggle something creTiling = bas.cre + bas.cTi + p.clin + bas.cg; // reTiling
// smuggle something ceTiling = bas.ceT + p.cili + bas.cng; // eTiling
// smuggle something cTiling = bas.cTi + p.clin + bas.cg; // Tiling
// smuggle something ciling = p.cili + bas.cng; // iling
// smuggle something cling = p.clin + bas.cg; // ling
// smuggle something cTriangularTiling = p.cTri + bas.can + bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // TriangularTiling
// smuggle something criangularTiling = p.cria + bas.cng + p.cular + bas.cTi + p.clin + bas.cg; // riangularTiling
// smuggle something ciangularTiling = p.cian + bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // iangularTiling
// smuggle something cangularTiling = bas.can + bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // angularTiling
// smuggle something cngularTiling = bas.cng + p.cular + bas.cTi + p.clin + bas.cg; // ngularTiling
// smuggle something cgularTiling = bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // gularTiling
// smuggle something cularTiling = p.cular + bas.cTi + p.clin + bas.cg; // ularTiling
// smuggle something clarTiling = bas.cla + bas.crT + p.cili + bas.cng; // larTiling
// smuggle something carTiling = bas.car + bas.cTi + p.clin + bas.cg; // arTiling
// smuggle something crTiling = bas.crT + p.cili + bas.cng; // rTiling
// smuggle something cHexagonalTiling = g.cHex + bas.cag + p.conal + bas.cTi + p.clin + bas.cg; // HexagonalTiling
// smuggle something cexagonalTiling = bas.cex + bas.cag + p.conal + bas.cTi + p.clin + bas.cg; // exagonalTiling
// smuggle something cxagonalTiling = bas.cxa + p.cgon + bas.cal + bas.cTi + p.clin + bas.cg; // xagonalTiling
// smuggle something cagonalTiling = bas.cag + p.conal + bas.cTi + p.clin + bas.cg; // agonalTiling
// smuggle something cgonalTiling = p.cgon + bas.cal + bas.cTi + p.clin + bas.cg; // gonalTiling
// smuggle something conalTiling = p.conal + bas.cTi + p.clin + bas.cg; // onalTiling
// smuggle something cnalTiling = p.cnal + bas.cTi + p.clin + bas.cg; // nalTiling
// smuggle something calTiling = bas.cal + bas.cTi + p.clin + bas.cg; // alTiling
// smuggle something clTiling = bas.clT + p.cili + bas.cng; // lTiling
// smuggle something cicTiling = bas.cic + bas.cTi + p.clin + bas.cg; // icTiling
// smuggle something ccTiling = bas.ccT + p.cili + bas.cng; // cTiling
// smuggle something cagrammicTiling = bas.cag + p.cram + bas.camai + bas.ccT + p.cili + bas.cng; // agrammicTiling
// smuggle something cgrammicTiling = bas.cgr + bas.cam + bas.camai + bas.ccT + p.cili + bas.cng; // grammicTiling
// smuggle something crammicTiling = p.cram + bas.camai + bas.ccT + p.cili + bas.cng; // rammicTiling
// smuggle something cammicTiling = bas.cam + bas.camai + bas.ccT + p.cili + bas.cng; // ammicTiling
// smuggle something cmmicTiling = bas.cmm + bas.cic + bas.cTi + p.clin + bas.cg; // mmicTiling
// smuggle something cmicTiling = bas.camai + bas.ccT + p.cili + bas.cng; // micTiling
// smuggle something c120Cell = n.c120 + w.cCell; // 120Cell
// smuggle something c20Cell = n.c20 + w.cCell; // 20Cell
// smuggle something c0Cell = n.c0 + w.cCell; // 0Cell
// smuggle something c600Cell = n.c600 + w.cCell; // 600Cell
// smuggle something c00Cell = n.c00 + w.cCell; // 00Cell
// smuggle something cSphere = bas.cSp + w.cher + bas.ce; // Sphere
// smuggle something cphere = bas.cph + p.cere; // phere
// smuggle something chere = w.cher + bas.ce; // here
// smuggle something cIcosahedral120Cell = bas.cIc + bas.cos + bas.cah + bas.ced + p.cral + n.c120 + w.cCell; // Icosahedral120Cell
// smuggle something ccosahedral120Cell = bas.cco + bas.csa + bas.che + bas.cdr + bas.cal + n.c120 + w.cCell; // cosahedral120Cell
// smuggle something cosahedral120Cell = bas.cos + bas.cah + bas.ced + p.cral + n.c120 + w.cCell; // osahedral120Cell
// smuggle something csahedral120Cell = bas.csa + bas.che + bas.cdr + bas.cal + n.c120 + w.cCell; // sahedral120Cell
// smuggle something cahedral120Cell = bas.cah + bas.ced + p.cral + n.c120 + w.cCell; // ahedral120Cell
// smuggle something chedral120Cell = bas.che + bas.cdr + bas.cal + n.c120 + w.cCell; // hedral120Cell
// smuggle something cedral120Cell = bas.ced + p.cral + n.c120 + w.cCell; // edral120Cell
// smuggle something cdral120Cell = bas.cdr + bas.cal + n.c120 + w.cCell; // dral120Cell
// smuggle something cral120Cell = p.cral + n.c120 + w.cCell; // ral120Cell
// smuggle something cal120Cell = bas.cal + n.c120 + w.cCell; // al120Cell
// smuggle something cl120Cell = bas.cl + n.c120 + w.cCell; // l120Cell
// smuggle something cStellated120Cell = bas.cSt + p.cell + p.cate + bas.cd + n.c120 + w.cCell; // Stellated120Cell
// smuggle something ctellated120Cell = bas.cte + p.clla + p.cted + n.c120 + w.cCell; // tellated120Cell
// smuggle something cellated120Cell = p.cell + p.cate + bas.cd + n.c120 + w.cCell; // ellated120Cell
// smuggle something cllated120Cell = p.clla + p.cted + n.c120 + w.cCell; // llated120Cell
// smuggle something clated120Cell = p.clate + bas.cd + n.c120 + w.cCell; // lated120Cell
// smuggle something cated120Cell = p.cate + bas.cd + n.c120 + w.cCell; // ated120Cell
// smuggle something cted120Cell = p.cted + n.c120 + w.cCell; // ted120Cell
// smuggle something ced120Cell = bas.ced + n.c120 + w.cCell; // ed120Cell
// smuggle something cd120Cell = bas.cd + n.c120 + w.cCell; // d120Cell
// smuggle something cGrand120Cell = bas.cGr + p.cand + n.c120 + w.cCell; // Grand120Cell
// smuggle something crand120Cell = p.cran + bas.cd + n.c120 + w.cCell; // rand120Cell
// smuggle something cand120Cell = p.cand + n.c120 + w.cCell; // and120Cell
// smuggle something cnd120Cell = bas.cnd + n.c120 + w.cCell; // nd120Cell
// Optimized constant definition for word: cGrand = bas.cGr + p.cand
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: crand = p.cran + bas.cd
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cand = p.cand
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cnd = bas.cnd
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cd = bas.cd
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// smuggle something cHoneycomb = w.cHoney + w.ccomb; // Honeycomb
// smuggle something coneycomb = n.cone + bas.cyc + p.comb; // oneycomb
// smuggle something cneycomb = bas.cne + bas.cyc + p.comb; // neycomb
// smuggle something ceycomb = bas.cey + w.ccomb; // eycomb
// smuggle something cycomb = bas.cyc + p.comb; // ycomb
// smuggle something cHosohedralHoneycomb = bas.cHo + bas.cso + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // HosohedralHoneycomb
// smuggle something cosohedralHoneycomb = bas.cos + bas.coh + bas.ced + p.cral + w.cHoney + w.ccomb; // osohedralHoneycomb
// smuggle something csohedralHoneycomb = bas.cso + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // sohedralHoneycomb
// smuggle something cohedralHoneycomb = bas.coh + bas.ced + p.cral + w.cHoney + w.ccomb; // ohedralHoneycomb
// smuggle something chedralHoneycomb = bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // hedralHoneycomb
// smuggle something cedralHoneycomb = bas.ced + p.cral + w.cHoney + w.ccomb; // edralHoneycomb
// smuggle something cdralHoneycomb = bas.cdr + bas.cal + w.cHoney + w.ccomb; // dralHoneycomb
// smuggle something cralHoneycomb = p.cral + w.cHoney + w.ccomb; // ralHoneycomb
// smuggle something calHoneycomb = bas.cal + w.cHoney + w.ccomb; // alHoneycomb
// smuggle something clHoneycomb = bas.clH + n.cone + bas.cyc + p.comb; // lHoneycomb
// smuggle something cTilingHoneycomb = bas.cTi + p.clin + bas.cgH + n.cone + bas.cyc + p.comb; // TilingHoneycomb
// smuggle something cilingHoneycomb = p.cili + bas.cng + w.cHoney + w.ccomb; // ilingHoneycomb
// smuggle something clingHoneycomb = p.clin + bas.cgH + n.cone + bas.cyc + p.comb; // lingHoneycomb
// smuggle something cingHoneycomb = p.cing + w.cHoney + w.ccomb; // ingHoneycomb
// smuggle something cngHoneycomb = bas.cng + w.cHoney + w.ccomb; // ngHoneycomb
// smuggle something cgHoneycomb = bas.cgH + n.cone + bas.cyc + p.comb; // gHoneycomb
// smuggle something cDodecahedralHoneycomb = bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // DodecahedralHoneycomb
// smuggle something codecahedralHoneycomb = p.code + bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // odecahedralHoneycomb
// smuggle something cdecahedralHoneycomb = bas.cde + bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // decahedralHoneycomb
// smuggle something cecahedralHoneycomb = bas.cec + bas.cah + bas.ced + p.cral + w.cHoney + w.ccomb; // ecahedralHoneycomb
// smuggle something ccahedralHoneycomb = bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // cahedralHoneycomb
// smuggle something cahedralHoneycomb = bas.cah + bas.ced + p.cral + w.cHoney + w.ccomb; // ahedralHoneycomb
//

exports.cimum = cimum;