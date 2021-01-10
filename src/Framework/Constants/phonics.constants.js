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
import * as b from './basic.constants';

// Reusable Grammer
export const chree = b.chr + b.cee; // hree
export const cour = b.cou + b.cr; // our
export const cive = b.civ + b.ce; // ive
export const ceven = b.cev + b.cen; // even
export const cight = b.cig + b.cht; // ight
export const cine = b.cin + b.ce; // ine
export const cleven = b.cl + b.cev + b.cen; // leven
export const cwelve = b.cwe + b.clv + b.ce; // welve
export const cteen = b.ct + b.cee + b.cn; // teen
export const chir = b.chi + b.cr; // hir
export const cigh = b.cig + b.ch; // igh
export const cwenty = b.cw + b.cen + b.cty; // wenty
export const chirty = b.chi + b.cr + b.cty; // hirty
export const cifty = b.cif + b.cty; // ifty
export const cred = b.cre + b.cd; // red
export const cgreen = b.cgr + b.cee + b.cn; // green
export const cblue = b.cbl + b.cue; // blue
export const cundred = b.cun + b.cd + cred; // undred
export const cand = b.can + b.cd; // and
export const csand = b.cs + cand; // sand
export const chousand = b.cho + b.cu + csand; // housand
export const cion = b.cio + b.cn; // ion
export const cION = b.cIO + b.cN; // ION
export const csion = b.cs + cion; // sion
export const cillion = b.ci + b.cll + cion; // illion
export const crue = b.cru + b.ce; // rue
export const calse = b.cal + b.cse; // alse
export const ction = b.ct + cion; // tion
export const cTION = b.cT + cION; // TION
export const cction = b.cc + ction; // ction
export const cage = b.cag + b.ce; // age
export const cest = b.ces + b.ct; // est
export const chare = b.cha + b.cre; // hare
export const c_lass = b.cla + b.css; // lass
export const ctemp = b.cte + b.cmp; // temp
export const chref = b.chr + b.cef; // href
export const cABC = b.cAB + b.cC; // ABC
export const came = b.cam + b.ce; // ame
export const cile = b.cil + b.ce; // ile
export const cext = b.cex + b.ct; // ext
export const cExt = b.cEx + b.ct; // Ext
export const clpha = b.clp + b.cha; // lpha
export const ccon = b.cco + b.cn; // con
export const cCon = b.cCo + b.cn; // Con
export const cable = b.cab + b.cle; // able
export const calid = b.cal + b.cid; // alid
export const cing = b.cin + b.cg; // ing
export const ctring = b.ctr + cing; // tring
export const cbject = b.cbj + b.cec + b.ct; // bject
export const cata = b.cat + b.ca; // ata
export const cMac = b.cMa + b.cc; // Mac
export const cpre = b.cpr + b.ce; // pre
export const cPre = b.cPr + b.ce; // Pre
export const cPRE = b.cPR + b.cE; // PRE
export const colid = b.col + b.cid; // olid
export const cynch = b.cyn + b.cch; // ynch
export const celete = b.cel + b.cet + b.ce; // elete
export const cnner = b.cnn + b.cer; // nner
export const click = b.cli + b.cck; // lick
export const cctrl = b.cct + b.crl; // ctrl
export const cype = b.cyp + b.ce; // ype
export const ceql = b.ce + b.cql; // eql
export const cEql = b.cE + b.cql; // Eql
export const cemb = b.cem + b.cb; // emb
export const cOperat = b.cOp + b.cer + b.cat; // Operat
export const cility = b.cil + b.cit + b.cy; // ility
export const cibility = b.cib + cility; // ibility
export const cisibility = b.cis + cibility; // isibility
export const cith = b.ci + b.cth; // ith
export const crent = b.cre + b.cnt; // rent
export const carent = b.ca + crent; // arent
export const ctor = b.cto + b.cr; // tor
export const cctor = b.cc + ctor; // ctor
export const celector = b.cel + b.cec + ctor; // elector
export const coolean = b.coo + b.cle + b.can; // oolean
export const check = b.che + b.cck; // heck
export const child = b.chi + b.cld; // hild
export const cibling = b.cib + b.cl + cing; // ibling
export const cttributes = b.ctt + b.cri + b.cbu + b.cte + b.cs; // ttributes
export const cisabled = b.cis + cable + b.cd; // isabled
export const cilter = b.cil + b.ct + b.cer; // ilter
export const code = b.cod + b.ce; // ode
export const cide = b.cid + b.ce; // ide
export const cuary = b.cua + b.cry; // uary
export const cies = b.cie + b.cs; // ies
export const ctive = b.cti + b.cve; // tive
export const cate = b.cat + b.ce; // ate
export const cdate = b.cd + cate; // date
export const cter = b.cte + b.cr; // ter
export const cment = b.cme + b.cnt; // ment
export const cMENT = b.cME + b.cNT; // MENT
export const cime = b.cim + b.ce; // ime
export const cinter = b.cin + cter; // inter
export const cInter = b.cIn + cter; // Inter
export const cmed = b.cme + b.cd; // med
export const cath = b.cat + b.ch; // ath
export const cvar = b.cva + b.cr; // var
export const cVar = b.cVa + b.cr; // Var
export const ciew = b.cie + b.cw; // iew
export const cete = b.cet + b.ce; // ete
export const cace = b.cac + b.ce; // ace
export const cder = b.cd + b.cer; // der
export const ccore = b.cco + b.cre; // core
export const cert = b.cer + b.ct; // ert
export const c_ase = b.cas + b.ce; // ase 'case' is a reserved word
export const cunt = b.cun + b.ct; // unt
export const caft = b.caf + b.ct; // aft
export const cops = b.cop + b.cs; // ops
export const cOPS = b.cOP + b.cS; // OPS
export const cinv = b.cin + b.cv; // inv
export const cInv = b.cIn + b.cv; // Inv
export const cral = b.cra + b.cl; // ral
export const cara = b.car + b.ca; // ara
export const cpro = b.cpr + b.co; // pro
export const cPro = b.cPr + b.co; // Pro
export const cPRO = b.cPR + b.cO; // PRO
export const cino = b.cin + b.co; // ino
export const cese = b.ces + b.ce; // ese
export const cish = b.cis + b.ch; // ish
export const ccel = b.cce + b.cl; // cel
export const cCel = b.cCe + b.cl; // Cel
export const cian = b.cia + b.cn; // ian
export const cous = b.cou + b.cs; // ous
export const ceous = b.ce + cous; // eous
export const cung = b.cun + b.cg; // ung
export const cary = b.car + b.cy; // ary
export const ciary = b.ci + cary; // iary
export const cMis = b.cMi + b.cs; // Mis
export const cmis = b.camai + b.cs; // mis
export const cource = b.cou + b.crc + b.ce; // ource
export const cmine = b.camai + b.cne; // mine
//b.cet + b.cer + b.cmi + b.cne; //cmine;
export const cetermine = b.ce + b.ct + b.ce + b.cr + b.cm + b.ci + b.cn + b.ce; // etermine
export const cingle = b.cin + b.cgl + b.ce; // ingle
export const clace = b.cla + b.cce; // lace
export const ceplace = b.cep + clace; // eplace
export const clean = b.cle + b.can; // lean
export const cver = b.cve + b.cr; // ver
export const cVer = b.cVe + b.cr; // Ver
export const cvert = cver + b.ct; // vert
export const convert = b.con + cvert; // onvert
export const crate = b.cra + b.cte; // crate
export const cenerate = b.cen + b.ce + crate; // enerate
export const cdom = b.cdo + b.cm; // dom
export const candom = b.can + cdom; // andom
export const create = b.cre + cate; // reate
export const carn = b.car + b.cn; // arn
export const carning = carn + cing; // arning
export const crror = b.crr + b.cor; // rror
export const card = b.car + b.cd; // ard
export const cose = b.cos + b.ce; // ose
export const cray = b.cra + b.cy; // ray
export const cmel = b.cme + b.cl; // mel
export const cound = b.cou + b.cnd; // ound
export const cdot = b.cd + b.cot; // dot
export const cDot = b.cD + b.cot; // Dot
export const cart = b.car + b.ct; // art
export const cize = b.ciz + b.ce; // ize
export const cmal = b.cma + b.cl; // mal
export const cormal = b.cor + cmal; // ormal
export const cegree = b.ceg + b.cre + b.ce; // egree
export const ccir = b.cci + b.cr; // cir
export const cCir = b.cCi + b.cr; // Cir
export const ccle = b.ccl + b.ce; // cle
export const care = b.car + b.ce; // are
export const cquare = b.cqu + care; // quare
export const cgle = b.cgl + b.ce; // gle
export const ctri = b.ctr + b.ci; // tri
export const cTri = b.cTr + b.ci; // Tri
export const crect = b.cre + b.cct; // rect
export const cRect = b.cRe + b.cct; // Rect
export const coct = b.coc + b.ct; // oct
export const cOct = b.cOc + b.ct; // Oct
export const cgon = b.cgo + b.cn; // gon
export const chex = b.che + b.cx; // hex
export const cHex = b.cHe + b.cx; // Hex
export const chep = b.che + b.cp; // hep
export const cHep = b.cHe + b.cp; // Hep
export const cnon = b.cno + b.cn; // non
export const cNon = b.cNo + b.cn; // Non
export const crap = b.cra + b.cp; // rap
export const czoid = b.czo + b.cid; // zoid
export const cfra = b.cfr + b.ca; // fra
export const cFra = b.cFr + b.ca; // Fra
export const ctrans = b.ctr + b.can + b.cs; // trans
export const cTrans = b.cTr + b.can + b.cs; // Trans
export const cint = b.cin + b.ct; // int
export const cloc = b.clo + b.cc; // loc
export const cLoc = b.cLo + b.cc; // Loc
export const cation = b.ca + ction; // ation
export const cort = b.cor + b.ct; // ort
export const csim = b.csi + b.cm; // sim
export const cSim = b.cSi + b.cm; // Sim
export const cplify = b.cpl + b.cif + b.cy; // plify
export const csol = b.cso + b.cl; // sol
export const ccomp = b.cco + b.cmp; // comp
export const cComp = b.cCo + b.cmp; // Comp
export const cideo = b.cid + b.ceo; // ideo
export const cnteger = b.cnt + b.ceg + b.cer; // nteger
export const cloat = b.clo + b.cat; // loat
export const cong = b.con + b.cg; // ong
export const chort = b.ch + cort; // hort
export const cble = b.cbl + b.ce; // ble
export const couble = b.cou + cble; // ouble
export const cduct = b.cdu + b.cct; // duct
export const cgate = b.cga + b.cte; // gate
export const cggregate = b.cgg + b.cre + cgate; // ggregate
export const cDiff = b.cDi + b.cff; // Diff
export const cence = b.cen + b.cce; // ence
export const cain = b.cai + b.cn; // ain
export const ctch = b.ctc + b.ch; // tch
export const cween = b.cwe + b.cen; // ween
export const cord = b.cor + b.cd; // ord
export const cmap = b.cma + b.cp; // map
export const cMap = b.cMa + b.cp; // Map
export const cess = b.ce + b.css; // ess
export const cress = b.cr + cess; // ress
export const ceat = b.ce + b.cat; // eat
export const chen = b.ch + b.cen; // hen
export const chan = b.ch + b.can; // han
export const clica = b.cli + b.cca; // lica
export const capp = b.ca + b.cpp; // app
export const cApp = b.cA + b.cpp; // App
export const coot = b.coo + b.ct; // oot
export const crse = b.crs + b.ce; // rse
export const carse = b.ca + crse; // arse
export const cwap = b.cwa + b.cp; // wap
export const cward = b.cwa + b.crd; // ward
export const clash = b.cla + b.csh; // lash
export const cENV = b.cE + b.cNV; // ENV
export const cavigate = b.cav + b.cig + cate; // avigate
export const cness = b.cne + b.css; // ness
export const cusiness = b.cus + b.ci + cness; // usiness
export const cule = b.cul + b.ce; // ule
export const cait = b.cai + b.ct; // ait
export const cesh = b.ce + b.csh; // esh
export const cval = b.cv + b.cal; // val
export const cemo = b.ce + b.cmo; // emo
export const cmon = b.cmo + b.cn; // mon
export const common = b.com + cmon; // ommon
export const clti = b.clt + b.ci; // lti
export const cmulti = b.cmu + clti; // multi
export const cMulti = b.cMu + clti; // Multi
export const cple = b.cpl + b.ce; // ple
export const cnal = b.cna + b.cl; // nal
export const cexe = b.cex + b.ce; // exe
export const cExe = b.cEx + b.ce; // Exe
export const cper = b.cpe + b.cr; // per
export const cPer = b.cPe + b.cr; // Per
export const casic = b.cas + b.cic; // asic
export const cven = b.cve + b.cn; // ven
export const cvent = cven + b.ct; // vent;
export const carg = b.car + b.cg; // arg
export const cArg = b.cAr + b.cg; // Arg
export const crive = b.cri + b.cve; // rive
export const cloy = b.clo + b.cy; // loy
export const cumber = b.cum + b.cb + b.cer; // umber
export const ccond = b.cco + b.cnd; // cond
export const cieth = b.cie + b.cth; // ieth
export const ctieth = b.ct + cieth; // tieth
export const cont = b.con + b.ct; // ont
export const cull = b.cul + b.cl; // ull
export const cmod = b.cmo + b.cd; // mod
export const cMod = b.cMo + b.cd; // Mod
export const ccol = b.cco + b.cl; // col
export const cCol = b.cCo + b.cl; // Col
export const creen = b.cre + b.cen; // reen
export const clue = b.clu + b.ce; // lue Referance to Tron here! :-P
export const cyan = b.cy + b.can; // yan
export const cite = b.cit + b.ce; // ite
export const cange = b.can + b.cge; // ange
export const cost = b.cos + b.ct; // ost
export const cular = b.cul + b.car; // ular
export const cdrom = b.cdr + b.com; // drom
export const cave = b.cav + b.ce; // ave
export const cAve = b.cAv + b.ce; // Ave
export const ccli = b.ccl + b.ci; // cli
export const cCli = b.cCl + b.ci; // Cli
export const cules = b.cul + b.ces; // ules
export const cent = b.cen + b.ct; // ent
export const centa = cent + b.ca; // enta
export const ccust = b.ccu + b.cst; // cust
export const cCust = b.cCu + b.cst; // Cust
export const cmand = b.cma + b.cnd; // mand
export const clob = b.clo + b.cb; // lob
export const crame = b.cra + b.cme; // rame
export const cias = b.cia + b.cs; // ias
export const cbout = b.cbo + b.cut; // bout Bout time we added this one! LOL
export const cseq = b.cse + b.cq; // seq
export const cSeq = b.cSe + b.cq; // Seq
export const cncer = b.cnc + b.cer; // ncer
export const cpri = b.cpr + b.ci; // pri
export const cPri = b.cPr + b.ci; // Pri
export const cmary = b.cma + b.cry; // mary
export const cmit = b.camai + b.ct; // mit
export const ctert = b.cte + b.crt; // tert
export const cTert = b.cTe + b.crt; // Tert
export const ctart = b.cta + b.crt; // tart
export const cTart = b.cTa + b.crt; // Tart poptart....LOL
export const crint = b.cri + b.cnt; // rint
export const cgen = b.cge + b.cn; // gen
export const cGen = b.cGe + b.cn; // Gen
export const cator = b.cat + b.cor; // ator
export const cdex = b.cde + b.cx; // dex
export const call = b.cal + b.cl; // all
export const cAll = b.cAl + b.cl; // All
export const creg = b.cre + b.cg; // reg
export const cReg = b.cRe + b.cg; // Reg
export const ctain = b.cta + b.cin; // tain
export const cmet = b.cme + b.ct; // met
export const cMet = b.cMe + b.ct; // Met
export const cric = b.cri + b.cc; // ric
export const cack = b.cac + b.ck; // ack
export const cdev = b.cde + b.cv; // dev
export const cDev = b.cDe + b.cv; // Dev
export const cDEV = b.cDE + b.cV; // DEV
export const cprod = b.cpr + b.cod; // prod
export const cProd = b.cPr + b.cod; // Prod
export const cPROD = b.cPR + b.cOD; // PROD
export const cana = b.can + b.ca; // ana
export const cAna = b.cAn + b.ca; // Ana
export const csis = b.csi + b.cs; // sis
export const crage = b.cra + b.cge; // rage
export const cear = b.cea + b.cr; // ear
export const crgb = b.crg + b.cb; // rgb
export const cass = b.ca + b.css; // ass
export const cASS = b.cA + b.cSS; // ASS
export const cind = b.cin + b.cd; // ind
export const clin = b.cli + b.cn; // lin
export const cLin = b.cLi + b.cn; // Lin
export const ccom = b.cco + b.cm; // com
export const cCom = b.cCo + b.cm; // Com
export const cubic = b.cub + b.cic; // ubic
export const cane = b.can + b.ce; // ane
export const curve = b.cur + b.cve; // urve
export const cqua = b.cqu + b.ca; // qua
export const cQua = b.cQu + b.ca; // Qua
export const crtic = b.crt + b.cic; // rtic
export const csec = b.cse + b.cc; // sec
export const cSec = b.cSe + b.cc; // Sec
export const cuni = b.cun + b.ci; // uni
export const cUni = b.cUn + b.ci; // Uni
export const chyper = b.chy + cper; // hyper
export const cHyper = b.cHy + cper; // Hyper
export const cbola = b.cbo + b.cla; // bola
export const cstant = b.cst + b.can + b.ct; //stant
export const ciso = b.cis + b.co; // iso
export const cIso = b.cIs + b.co; // Iso
export const ctope = b.cto + b.cpe; // tope
export const cphon = b.cph + b.con; // phon
export const cPhon = b.cPh + b.con; // Phon
export const cics = b.cic + b.cs; // ics
export const csha = b.csh + b.ca; // sha
export const cSha = b.cSh + b.ca; // Sha
export const cail = b.cai + b.cl; // ail
export const cAIL = b.cAI + b.cL; // AIL
export const clay = b.cla + b.cy; // lay
export const cLay = b.cLa + b.cy; // Lay
export const csug = b.csu + b.cg; // sug
export const cSug = b.cSu + b.cg; // Sug
export const cgest = b.cge + b.cst; // gest
export const cGest = b.cGe + b.cst; // Gest
export const cect = b.cec + b.ct; // ect
export const croject = b.cro + b.cj + cect; // roject
export const cell = b.cel + b.cl; // ell
export const cnion = b.cni + b.con; // nion
export const ceta = b.cet + b.ca; // eta
export const ccent = b.cce + b.cnt; // cent
export const cChi = b.cCh + b.ci; // Chi
export const cild = b.cil + b.cd; // ild
export const ccolr = b.cco + b.clr; // colr
export const cshp = b.csh + b.cp; // shp
export const cual = b.cua + b.cl; // ual
export const cied = b.cie + b.cd; // ied
export const cified = b.cif + cied; // ified
export const cments = cment + b.cs; // ments
export const clop = b.clo + b.cp; // lop
export const cLOP = b.cLO + b.cP; // LOP
export const cdest = b.cde + b.cst; // dest
export const cDest = b.cDe + b.cst; // Dest
export const cstor = b.cst + b.cor; // stor
export const cStor = b.cSt + b.cor; // Stor
export const cequ = b.ceq + b.cu; // equ
export const cEqu = b.cEq + b.cu; // Equ
