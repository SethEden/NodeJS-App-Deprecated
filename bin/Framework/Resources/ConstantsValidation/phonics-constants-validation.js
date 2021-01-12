"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phonicsConstantsValidation = void 0;

var p = _interopRequireWildcard(require("../../Constants/phonics.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file phonics.constants-validation.js
 * @module phonics-constants-validation
 * @description Contains many validations for re-usable phonetic constants and partial phrases and/or
 * partial words for re-usability, many of them derived from the basic-constants.
 * @requires module:phonics-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

/**
* @function phonicsConstantsValidation
* @description Initializes the phonics constants validation data objects array.
* @return {void}
* @author Seth Hollingsead
* @date 2020/07/23
*/
var phonicsConstantsValidation = [// Reusable Grammer
{
  Name: 'chree',
  Actual: p.chree,
  Expected: 'hree'
}, {
  Name: 'cour',
  Actual: p.cour,
  Expected: 'our'
}, {
  Name: 'cive',
  Actual: p.cive,
  Expected: 'ive'
}, {
  Name: 'ceven',
  Actual: p.ceven,
  Expected: 'even'
}, {
  Name: 'cight',
  Actual: p.cight,
  Expected: 'ight'
}, {
  Name: 'cine',
  Actual: p.cine,
  Expected: 'ine'
}, {
  Name: 'cleven',
  Actual: p.cleven,
  Expected: 'leven'
}, {
  Name: 'cwelve',
  Actual: p.cwelve,
  Expected: 'welve'
}, {
  Name: 'cteen',
  Actual: p.cteen,
  Expected: 'teen'
}, {
  Name: 'chir',
  Actual: p.chir,
  Expected: 'hir'
}, {
  Name: 'cigh',
  Actual: p.cigh,
  Expected: 'igh'
}, {
  Name: 'cwenty',
  Actual: p.cwenty,
  Expected: 'wenty'
}, {
  Name: 'chirty',
  Actual: p.chirty,
  Expected: 'hirty'
}, {
  Name: 'cifty',
  Actual: p.cifty,
  Expected: 'ifty'
}, {
  Name: 'cred',
  Actual: p.cred,
  Expected: 'red'
}, {
  Name: 'cgreen',
  Actual: p.cgreen,
  Expected: 'green'
}, {
  Name: 'cblue',
  Actual: p.cblue,
  Expected: 'blue'
}, {
  Name: 'cundred',
  Actual: p.cundred,
  Expected: 'undred'
}, {
  Name: 'cand',
  Actual: p.cand,
  Expected: 'and'
}, {
  Name: 'csand',
  Actual: p.csand,
  Expected: 'sand'
}, {
  Name: 'chousand',
  Actual: p.chousand,
  Expected: 'housand'
}, {
  Name: 'cion',
  Actual: p.cion,
  Expected: 'ion'
}, {
  Name: 'cION',
  Actual: p.cION,
  Expected: 'ION'
}, {
  Name: 'csion',
  Actual: p.csion,
  Expected: 'sion'
}, {
  Name: 'cillion',
  Actual: p.cillion,
  Expected: 'illion'
}, {
  Name: 'crue',
  Actual: p.crue,
  Expected: 'rue'
}, {
  Name: 'calse',
  Actual: p.calse,
  Expected: 'alse'
}, {
  Name: 'ction',
  Actual: p.ction,
  Expected: 'tion'
}, {
  Name: 'cTION',
  Actual: p.cTION,
  Expected: 'TION'
}, {
  Name: 'cction',
  Actual: p.cction,
  Expected: 'ction'
}, {
  Name: 'cage',
  Actual: p.cage,
  Expected: 'age'
}, {
  Name: 'cest',
  Actual: p.cest,
  Expected: 'est'
}, {
  Name: 'chare',
  Actual: p.chare,
  Expected: 'hare'
}, {
  Name: 'c_lass',
  Actual: p.c_lass,
  Expected: 'lass'
}, {
  Name: 'ctemp',
  Actual: p.ctemp,
  Expected: 'temp'
}, {
  Name: 'chref',
  Actual: p.chref,
  Expected: 'href'
}, {
  Name: 'cABC',
  Actual: p.cABC,
  Expected: 'ABC'
}, {
  Name: 'came',
  Actual: p.came,
  Expected: 'ame'
}, {
  Name: 'cile',
  Actual: p.cile,
  Expected: 'ile'
}, {
  Name: 'cext',
  Actual: p.cext,
  Expected: 'ext'
}, {
  Name: 'cExt',
  Actual: p.cExt,
  Expected: 'Ext'
}, {
  Name: 'clpha',
  Actual: p.clpha,
  Expected: 'lpha'
}, {
  Name: 'ccon',
  Actual: p.ccon,
  Expected: 'con'
}, {
  Name: 'cCon',
  Actual: p.cCon,
  Expected: 'Con'
}, {
  Name: 'cable',
  Actual: p.cable,
  Expected: 'able'
}, {
  Name: 'calid',
  Actual: p.calid,
  Expected: 'alid'
}, {
  Name: 'cing',
  Actual: p.cing,
  Expected: 'ing'
}, {
  Name: 'ctring',
  Actual: p.ctring,
  Expected: 'tring'
}, {
  Name: 'cbject',
  Actual: p.cbject,
  Expected: 'bject'
}, {
  Name: 'cata',
  Actual: p.cata,
  Expected: 'ata'
}, {
  Name: 'cMac',
  Actual: p.cMac,
  Expected: 'Mac'
}, {
  Name: 'cpre',
  Actual: p.cpre,
  Expected: 'pre'
}, {
  Name: 'cPre',
  Actual: p.cPre,
  Expected: 'Pre'
}, {
  Name: 'cPRE',
  Actual: p.cPRE,
  Expected: 'PRE'
}, {
  Name: 'colid',
  Actual: p.colid,
  Expected: 'olid'
}, {
  Name: 'cynch',
  Actual: p.cynch,
  Expected: 'ynch'
}, {
  Name: 'celete',
  Actual: p.celete,
  Expected: 'elete'
}, {
  Name: 'cnner',
  Actual: p.cnner,
  Expected: 'nner'
}, {
  Name: 'click',
  Actual: p.click,
  Expected: 'lick'
}, {
  Name: 'cctrl',
  Actual: p.cctrl,
  Expected: 'ctrl'
}, {
  Name: 'cype',
  Actual: p.cype,
  Expected: 'ype'
}, {
  Name: 'ceql',
  Actual: p.ceql,
  Expected: 'eql'
}, {
  Name: 'cEql',
  Actual: p.cEql,
  Expected: 'Eql'
}, {
  Name: 'cemb',
  Actual: p.cemb,
  Expected: 'emb'
}, {
  Name: 'cOperat',
  Actual: p.cOperat,
  Expected: 'Operat'
}, {
  Name: 'cility',
  Actual: p.cility,
  Expected: 'ility'
}, {
  Name: 'cibility',
  Actual: p.cibility,
  Expected: 'ibility'
}, {
  Name: 'cisibility',
  Actual: p.cisibility,
  Expected: 'isibility'
}, {
  Name: 'cith',
  Actual: p.cith,
  Expected: 'ith'
}, {
  Name: 'crent',
  Actual: p.crent,
  Expected: 'rent'
}, {
  Name: 'carent',
  Actual: p.carent,
  Expected: 'arent'
}, {
  Name: 'ctor',
  Actual: p.ctor,
  Expected: 'tor'
}, {
  Name: 'cctor',
  Actual: p.cctor,
  Expected: 'ctor'
}, {
  Name: 'celector',
  Actual: p.celector,
  Expected: 'elector'
}, {
  Name: 'coolean',
  Actual: p.coolean,
  Expected: 'oolean'
}, {
  Name: 'check',
  Actual: p.check,
  Expected: 'heck'
}, {
  Name: 'child',
  Actual: p.child,
  Expected: 'hild'
}, {
  Name: 'cibling',
  Actual: p.cibling,
  Expected: 'ibling'
}, {
  Name: 'cttribute',
  Actual: p.cttribute,
  Expected: 'ttribute'
}, {
  Name: 'cttributes',
  Actual: p.cttributes,
  Expected: 'ttributes'
}, {
  Name: 'cisabled',
  Actual: p.cisabled,
  Expected: 'isabled'
}, {
  Name: 'cilter',
  Actual: p.cilter,
  Expected: 'ilter'
}, {
  Name: 'code',
  Actual: p.code,
  Expected: 'ode'
}, {
  Name: 'cide',
  Actual: p.cide,
  Expected: 'ide'
}, {
  Name: 'cuary',
  Actual: p.cuary,
  Expected: 'uary'
}, {
  Name: 'cies',
  Actual: p.cies,
  Expected: 'ies'
}, {
  Name: 'ctive',
  Actual: p.ctive,
  Expected: 'tive'
}, {
  Name: 'cate',
  Actual: p.cate,
  Expected: 'ate'
}, {
  Name: 'cdate',
  Actual: p.cdate,
  Expected: 'date'
}, {
  Name: 'cter',
  Actual: p.cter,
  Expected: 'ter'
}, {
  Name: 'cment',
  Actual: p.cment,
  Expected: 'ment'
}, {
  Name: 'cMENT',
  Actual: p.cMENT,
  Expected: 'MENT'
}, {
  Name: 'cime',
  Actual: p.cime,
  Expected: 'ime'
}, {
  Name: 'cinter',
  Actual: p.cinter,
  Expected: 'inter'
}, {
  Name: 'cInter',
  Actual: p.cInter,
  Expected: 'Inter'
}, {
  Name: 'cmed',
  Actual: p.cmed,
  Expected: 'med'
}, {
  Name: 'cath',
  Actual: p.cath,
  Expected: 'ath'
}, {
  Name: 'cvar',
  Actual: p.cvar,
  Expected: 'var'
}, {
  Name: 'cVar',
  Actual: p.cVar,
  Expected: 'Var'
}, {
  Name: 'ciew',
  Actual: p.ciew,
  Expected: 'iew'
}, {
  Name: 'cete',
  Actual: p.cete,
  Expected: 'ete'
}, {
  Name: 'cace',
  Actual: p.cace,
  Expected: 'ace'
}, {
  Name: 'cder',
  Actual: p.cder,
  Expected: 'der'
}, {
  Name: 'ccore',
  Actual: p.ccore,
  Expected: 'core'
}, {
  Name: 'cert',
  Actual: p.cert,
  Expected: 'ert'
}, {
  Name: 'c_ase',
  Actual: p.c_ase,
  Expected: 'ase'
}, // 'case' is a reserved word
{
  Name: 'cunt',
  Actual: p.cunt,
  Expected: 'unt'
}, {
  Name: 'caft',
  Actual: p.caft,
  Expected: 'aft'
}, {
  Name: 'cops',
  Actual: p.cops,
  Expected: 'ops'
}, {
  Name: 'cOPS',
  Actual: p.cOPS,
  Expected: 'OPS'
}, {
  Name: 'cinv',
  Actual: p.cinv,
  Expected: 'inv'
}, {
  Name: 'cInv',
  Actual: p.cInv,
  Expected: 'Inv'
}, {
  Name: 'cral',
  Actual: p.cral,
  Expected: 'ral'
}, {
  Name: 'cara',
  Actual: p.cara,
  Expected: 'ara'
}, {
  Name: 'cpro',
  Actual: p.cpro,
  Expected: 'pro'
}, {
  Name: 'cPro',
  Actual: p.cPro,
  Expected: 'Pro'
}, {
  Name: 'cPRO',
  Actual: p.cPRO,
  Expected: 'PRO'
}, {
  Name: 'cino',
  Actual: p.cino,
  Expected: 'ino'
}, {
  Name: 'cese',
  Actual: p.cese,
  Expected: 'ese'
}, {
  Name: 'cish',
  Actual: p.cish,
  Expected: 'ish'
}, {
  Name: 'ccel',
  Actual: p.ccel,
  Expected: 'cel'
}, {
  Name: 'cCel',
  Actual: p.cCel,
  Expected: 'Cel'
}, {
  Name: 'cian',
  Actual: p.cian,
  Expected: 'ian'
}, {
  Name: 'cous',
  Actual: p.cous,
  Expected: 'ous'
}, {
  Name: 'ceous',
  Actual: p.ceous,
  Expected: 'eous'
}, {
  Name: 'cung',
  Actual: p.cung,
  Expected: 'ung'
}, {
  Name: 'cary',
  Actual: p.cary,
  Expected: 'ary'
}, {
  Name: 'ciary',
  Actual: p.ciary,
  Expected: 'iary'
}, {
  Name: 'cMis',
  Actual: p.cMis,
  Expected: 'Mis'
}, {
  Name: 'cmis',
  Actual: p.cmis,
  Expected: 'mis'
}, {
  Name: 'cource',
  Actual: p.cource,
  Expected: 'ource'
}, {
  Name: 'cmine',
  Actual: p.cmine,
  Expected: 'mine'
}, //p.cet + p.cer + p.cmi + p.cne; //cmine;
{
  Name: 'cetermine',
  Actual: p.cetermine,
  Expected: 'etermine'
}, {
  Name: 'cingle',
  Actual: p.cingle,
  Expected: 'ingle'
}, {
  Name: 'clace',
  Actual: p.clace,
  Expected: 'lace'
}, {
  Name: 'ceplace',
  Actual: p.ceplace,
  Expected: 'eplace'
}, {
  Name: 'clean',
  Actual: p.clean,
  Expected: 'lean'
}, {
  Name: 'cver',
  Actual: p.cver,
  Expected: 'ver'
}, {
  Name: 'cVer',
  Actual: p.cVer,
  Expected: 'Ver'
}, {
  Name: 'cvert',
  Actual: p.cvert,
  Expected: 'vert'
}, {
  Name: 'convert',
  Actual: p.convert,
  Expected: 'onvert'
}, {
  Name: 'crate',
  Actual: p.crate,
  Expected: 'rate'
}, {
  Name: 'cenerate',
  Actual: p.cenerate,
  Expected: 'enerate'
}, {
  Name: 'cdom',
  Actual: p.cdom,
  Expected: 'dom'
}, {
  Name: 'candom',
  Actual: p.candom,
  Expected: 'andom'
}, {
  Name: 'create',
  Actual: p.create,
  Expected: 'reate'
}, {
  Name: 'carn',
  Actual: p.carn,
  Expected: 'arn'
}, {
  Name: 'carning',
  Actual: p.carning,
  Expected: 'arning'
}, {
  Name: 'crror',
  Actual: p.crror,
  Expected: 'rror'
}, {
  Name: 'card',
  Actual: p.card,
  Expected: 'ard'
}, {
  Name: 'cose',
  Actual: p.cose,
  Expected: 'ose'
}, {
  Name: 'cray',
  Actual: p.cray,
  Expected: 'ray'
}, {
  Name: 'cmel',
  Actual: p.cmel,
  Expected: 'mel'
}, {
  Name: 'cound',
  Actual: p.cound,
  Expected: 'ound'
}, {
  Name: 'cdot',
  Actual: p.cdot,
  Expected: 'dot'
}, {
  Name: 'cDot',
  Actual: p.cDot,
  Expected: 'Dot'
}, {
  Name: 'cart',
  Actual: p.cart,
  Expected: 'art'
}, {
  Name: 'cize',
  Actual: p.cize,
  Expected: 'ize'
}, {
  Name: 'cmal',
  Actual: p.cmal,
  Expected: 'mal'
}, {
  Name: 'cormal',
  Actual: p.cormal,
  Expected: 'ormal'
}, {
  Name: 'cegree',
  Actual: p.cegree,
  Expected: 'egree'
}, {
  Name: 'ccir',
  Actual: p.ccir,
  Expected: 'cir'
}, {
  Name: 'cCir',
  Actual: p.cCir,
  Expected: 'Cir'
}, {
  Name: 'ccle',
  Actual: p.ccle,
  Expected: 'cle'
}, {
  Name: 'care',
  Actual: p.care,
  Expected: 'are'
}, {
  Name: 'cquare',
  Actual: p.cquare,
  Expected: 'quare'
}, {
  Name: 'cgle',
  Actual: p.cgle,
  Expected: 'gle'
}, {
  Name: 'ctri',
  Actual: p.ctri,
  Expected: 'tri'
}, {
  Name: 'cTri',
  Actual: p.cTri,
  Expected: 'Tri'
}, {
  Name: 'crect',
  Actual: p.crect,
  Expected: 'rect'
}, {
  Name: 'cRect',
  Actual: p.cRect,
  Expected: 'Rect'
}, {
  Name: 'coct',
  Actual: p.coct,
  Expected: 'oct'
}, {
  Name: 'cOct',
  Actual: p.cOct,
  Expected: 'Oct'
}, {
  Name: 'cgon',
  Actual: p.cgon,
  Expected: 'gon'
}, {
  Name: 'chex',
  Actual: p.chex,
  Expected: 'hex'
}, {
  Name: 'cHex',
  Actual: p.cHex,
  Expected: 'Hex'
}, {
  Name: 'chep',
  Actual: p.chep,
  Expected: 'hep'
}, {
  Name: 'cHep',
  Actual: p.cHep,
  Expected: 'Hep'
}, {
  Name: 'cnon',
  Actual: p.cnon,
  Expected: 'non'
}, {
  Name: 'cNon',
  Actual: p.cNon,
  Expected: 'Non'
}, {
  Name: 'crap',
  Actual: p.crap,
  Expected: 'rap'
}, {
  Name: 'czoid',
  Actual: p.czoid,
  Expected: 'zoid'
}, {
  Name: 'cfra',
  Actual: p.cfra,
  Expected: 'fra'
}, {
  Name: 'cFra',
  Actual: p.cFra,
  Expected: 'Fra'
}, {
  Name: 'ctrans',
  Actual: p.ctrans,
  Expected: 'trans'
}, {
  Name: 'cTrans',
  Actual: p.cTrans,
  Expected: 'Trans'
}, {
  Name: 'cint',
  Actual: p.cint,
  Expected: 'int'
}, {
  Name: 'cloc',
  Actual: p.cloc,
  Expected: 'loc'
}, {
  Name: 'cLoc',
  Actual: p.cLoc,
  Expected: 'Loc'
}, {
  Name: 'cation',
  Actual: p.cation,
  Expected: 'ation'
}, {
  Name: 'cort',
  Actual: p.cort,
  Expected: 'ort'
}, {
  Name: 'csim',
  Actual: p.csim,
  Expected: 'sim'
}, {
  Name: 'cSim',
  Actual: p.cSim,
  Expected: 'Sim'
}, {
  Name: 'cplify',
  Actual: p.cplify,
  Expected: 'plify'
}, {
  Name: 'csol',
  Actual: p.csol,
  Expected: 'sol'
}, {
  Name: 'ccomp',
  Actual: p.ccomp,
  Expected: 'comp'
}, {
  Name: 'cComp',
  Actual: p.cComp,
  Expected: 'Comp'
}, {
  Name: 'cideo',
  Actual: p.cideo,
  Expected: 'ideo'
}, {
  Name: 'cnteger',
  Actual: p.cnteger,
  Expected: 'nteger'
}, {
  Name: 'cloat',
  Actual: p.cloat,
  Expected: 'loat'
}, {
  Name: 'cong',
  Actual: p.cong,
  Expected: 'ong'
}, {
  Name: 'chort',
  Actual: p.chort,
  Expected: 'hort'
}, {
  Name: 'cble',
  Actual: p.cble,
  Expected: 'ble'
}, {
  Name: 'couble',
  Actual: p.couble,
  Expected: 'ouble'
}, {
  Name: 'cduct',
  Actual: p.cduct,
  Expected: 'duct'
}, {
  Name: 'cgate',
  Actual: p.cgate,
  Expected: 'gate'
}, {
  Name: 'cggregate',
  Actual: p.cggregate,
  Expected: 'ggregate'
}, {
  Name: 'cDiff',
  Actual: p.cDiff,
  Expected: 'Diff'
}, {
  Name: 'cence',
  Actual: p.cence,
  Expected: 'ence'
}, {
  Name: 'cain',
  Actual: p.cain,
  Expected: 'ain'
}, {
  Name: 'ctch',
  Actual: p.ctch,
  Expected: 'tch'
}, {
  Name: 'cween',
  Actual: p.cween,
  Expected: 'ween'
}, {
  Name: 'cord',
  Actual: p.cord,
  Expected: 'ord'
}, {
  Name: 'cmap',
  Actual: p.cmap,
  Expected: 'map'
}, {
  Name: 'cMap',
  Actual: p.cMap,
  Expected: 'Map'
}, {
  Name: 'cess',
  Actual: p.cess,
  Expected: 'ess'
}, {
  Name: 'cress',
  Actual: p.cress,
  Expected: 'ress'
}, {
  Name: 'ceat',
  Actual: p.ceat,
  Expected: 'eat'
}, {
  Name: 'chen',
  Actual: p.chen,
  Expected: 'hen'
}, {
  Name: 'chan',
  Actual: p.chan,
  Expected: 'han'
}, {
  Name: 'clica',
  Actual: p.clica,
  Expected: 'lica'
}, {
  Name: 'capp',
  Actual: p.capp,
  Expected: 'app'
}, {
  Name: 'cApp',
  Actual: p.cApp,
  Expected: 'App'
}, {
  Name: 'coot',
  Actual: p.coot,
  Expected: 'oot'
}, {
  Name: 'crse',
  Actual: p.crse,
  Expected: 'rse'
}, {
  Name: 'carse',
  Actual: p.carse,
  Expected: 'arse'
}, {
  Name: 'cwap',
  Actual: p.cwap,
  Expected: 'wap'
}, {
  Name: 'cward',
  Actual: p.cward,
  Expected: 'ward'
}, {
  Name: 'clash',
  Actual: p.clash,
  Expected: 'lash'
}, {
  Name: 'cENV',
  Actual: p.cENV,
  Expected: 'ENV'
}, {
  Name: 'cavigate',
  Actual: p.cavigate,
  Expected: 'avigate'
}, {
  Name: 'cness',
  Actual: p.cness,
  Expected: 'ness'
}, {
  Name: 'cusiness',
  Actual: p.cusiness,
  Expected: 'usiness'
}, {
  Name: 'cule',
  Actual: p.cule,
  Expected: 'ule'
}, {
  Name: 'cait',
  Actual: p.cait,
  Expected: 'ait'
}, {
  Name: 'cesh',
  Actual: p.cesh,
  Expected: 'esh'
}, {
  Name: 'cval',
  Actual: p.cval,
  Expected: 'val'
}, {
  Name: 'cemo',
  Actual: p.cemo,
  Expected: 'emo'
}, {
  Name: 'cmon',
  Actual: p.cmon,
  Expected: 'mon'
}, {
  Name: 'common',
  Actual: p.common,
  Expected: 'ommon'
}, {
  Name: 'clti',
  Actual: p.clti,
  Expected: 'lti'
}, {
  Name: 'cmulti',
  Actual: p.cmulti,
  Expected: 'multi'
}, {
  Name: 'cMulti',
  Actual: p.cMulti,
  Expected: 'Multi'
}, {
  Name: 'cple',
  Actual: p.cple,
  Expected: 'ple'
}, {
  Name: 'cnal',
  Actual: p.cnal,
  Expected: 'nal'
}, {
  Name: 'cexe',
  Actual: p.cexe,
  Expected: 'exe'
}, {
  Name: 'cExe',
  Actual: p.cExe,
  Expected: 'Exe'
}, {
  Name: 'cper',
  Actual: p.cper,
  Expected: 'per'
}, {
  Name: 'cPer',
  Actual: p.cPer,
  Expected: 'Per'
}, {
  Name: 'casic',
  Actual: p.casic,
  Expected: 'asic'
}, {
  Name: 'cven',
  Actual: p.cven,
  Expected: 'ven'
}, {
  Name: 'cvent',
  Actual: p.cvent,
  Expected: 'vent'
}, {
  Name: 'carg',
  Actual: p.carg,
  Expected: 'arg'
}, {
  Name: 'cArg',
  Actual: p.cArg,
  Expected: 'Arg'
}, {
  Name: 'crive',
  Actual: p.crive,
  Expected: 'rive'
}, {
  Name: 'cloy',
  Actual: p.cloy,
  Expected: 'loy'
}, {
  Name: 'cumber',
  Actual: p.cumber,
  Expected: 'umber'
}, {
  Name: 'ccond',
  Actual: p.ccond,
  Expected: 'cond'
}, {
  Name: 'cieth',
  Actual: p.cieth,
  Expected: 'ieth'
}, {
  Name: 'ctieth',
  Actual: p.ctieth,
  Expected: 'tieth'
}, {
  Name: 'cont',
  Actual: p.cont,
  Expected: 'ont'
}, {
  Name: 'cull',
  Actual: p.cull,
  Expected: 'ull'
}, {
  Name: 'cmod',
  Actual: p.cmod,
  Expected: 'mod'
}, {
  Name: 'cMod',
  Actual: p.cMod,
  Expected: 'Mod'
}, {
  Name: 'ccol',
  Actual: p.ccol,
  Expected: 'col'
}, {
  Name: 'cCol',
  Actual: p.cCol,
  Expected: 'Col'
}, {
  Name: 'creen',
  Actual: p.creen,
  Expected: 'reen'
}, {
  Name: 'clue',
  Actual: p.clue,
  Expected: 'lue'
}, // Referance to Tron here! :-P
{
  Name: 'cyan',
  Actual: p.cyan,
  Expected: 'yan'
}, {
  Name: 'cite',
  Actual: p.cite,
  Expected: 'ite'
}, {
  Name: 'cange',
  Actual: p.cange,
  Expected: 'ange'
}, {
  Name: 'cost',
  Actual: p.cost,
  Expected: 'ost'
}, {
  Name: 'cular',
  Actual: p.cular,
  Expected: 'ular'
}, {
  Name: 'cdrom',
  Actual: p.cdrom,
  Expected: 'drom'
}, {
  Name: 'cave',
  Actual: p.cave,
  Expected: 'ave'
}, {
  Name: 'cAve',
  Actual: p.cAve,
  Expected: 'Ave'
}, {
  Name: 'ccli',
  Actual: p.ccli,
  Expected: 'cli'
}, {
  Name: 'cCli',
  Actual: p.cCli,
  Expected: 'Cli'
}, {
  Name: 'cules',
  Actual: p.cules,
  Expected: 'ules'
}, {
  Name: 'cent',
  Actual: p.cent,
  Expected: 'ent'
}, {
  Name: 'centa',
  Actual: p.centa,
  Expected: 'enta'
}, {
  Name: 'ccust',
  Actual: p.ccust,
  Expected: 'cust'
}, {
  Name: 'cCust',
  Actual: p.cCust,
  Expected: 'Cust'
}, {
  Name: 'cmand',
  Actual: p.cmand,
  Expected: 'mand'
}, {
  Name: 'clob',
  Actual: p.clob,
  Expected: 'lob'
}, {
  Name: 'crame',
  Actual: p.crame,
  Expected: 'rame'
}, {
  Name: 'cias',
  Actual: p.cias,
  Expected: 'ias'
}, {
  Name: 'cbout',
  Actual: p.cbout,
  Expected: 'bout'
}, // Bout time we added this one! LOL
{
  Name: 'cseq',
  Actual: p.cseq,
  Expected: 'seq'
}, {
  Name: 'cSeq',
  Actual: p.cSeq,
  Expected: 'Seq'
}, {
  Name: 'cncer',
  Actual: p.cncer,
  Expected: 'ncer'
}, {
  Name: 'cpri',
  Actual: p.cpri,
  Expected: 'pri'
}, {
  Name: 'cPri',
  Actual: p.cPri,
  Expected: 'Pri'
}, {
  Name: 'cmary',
  Actual: p.cmary,
  Expected: 'mary'
}, {
  Name: 'cmit',
  Actual: p.cmit,
  Expected: 'mit'
}, {
  Name: 'ctert',
  Actual: p.ctert,
  Expected: 'tert'
}, {
  Name: 'cTert',
  Actual: p.cTert,
  Expected: 'Tert'
}, {
  Name: 'ctart',
  Actual: p.ctart,
  Expected: 'tart'
}, {
  Name: 'cTart',
  Actual: p.cTart,
  Expected: 'Tart'
}, // poptart....LOL
{
  Name: 'crint',
  Actual: p.crint,
  Expected: 'rint'
}, {
  Name: 'cgen',
  Actual: p.cgen,
  Expected: 'gen'
}, {
  Name: 'cGen',
  Actual: p.cGen,
  Expected: 'Gen'
}, {
  Name: 'cator',
  Actual: p.cator,
  Expected: 'ator'
}, {
  Name: 'cdex',
  Actual: p.cdex,
  Expected: 'dex'
}, {
  Name: 'call',
  Actual: p.call,
  Expected: 'all'
}, {
  Name: 'cAll',
  Actual: p.cAll,
  Expected: 'All'
}, {
  Name: 'creg',
  Actual: p.creg,
  Expected: 'reg'
}, {
  Name: 'cReg',
  Actual: p.cReg,
  Expected: 'Reg'
}, {
  Name: 'ctain',
  Actual: p.ctain,
  Expected: 'tain'
}, {
  Name: 'cmet',
  Actual: p.cmet,
  Expected: 'met'
}, {
  Name: 'cMet',
  Actual: p.cMet,
  Expected: 'Met'
}, {
  Name: 'cric',
  Actual: p.cric,
  Expected: 'ric'
}, {
  Name: 'cack',
  Actual: p.cack,
  Expected: 'ack'
}, {
  Name: 'cdev',
  Actual: p.cdev,
  Expected: 'dev'
}, {
  Name: 'cDev',
  Actual: p.cDev,
  Expected: 'Dev'
}, {
  Name: 'cDEV',
  Actual: p.cDEV,
  Expected: 'DEV'
}, {
  Name: 'cprod',
  Actual: p.cprod,
  Expected: 'prod'
}, {
  Name: 'cProd',
  Actual: p.cProd,
  Expected: 'Prod'
}, {
  Name: 'cPROD',
  Actual: p.cPROD,
  Expected: 'PROD'
}, {
  Name: 'cana',
  Actual: p.cana,
  Expected: 'ana'
}, {
  Name: 'cAna',
  Actual: p.cAna,
  Expected: 'Ana'
}, {
  Name: 'csis',
  Actual: p.csis,
  Expected: 'sis'
}, {
  Name: 'crage',
  Actual: p.crage,
  Expected: 'rage'
}, {
  Name: 'cear',
  Actual: p.cear,
  Expected: 'ear'
}, {
  Name: 'crgb',
  Actual: p.crgb,
  Expected: 'rgb'
}, {
  Name: 'cass',
  Actual: p.cass,
  Expected: 'ass'
}, {
  Name: 'cASS',
  Actual: p.cASS,
  Expected: 'ASS'
}, {
  Name: 'cind',
  Actual: p.cind,
  Expected: 'ind'
}, {
  Name: 'clin',
  Actual: p.clin,
  Expected: 'lin'
}, {
  Name: 'cLin',
  Actual: p.cLin,
  Expected: 'Lin'
}, {
  Name: 'ccom',
  Actual: p.ccom,
  Expected: 'com'
}, {
  Name: 'cCom',
  Actual: p.cCom,
  Expected: 'Com'
}, {
  Name: 'cubic',
  Actual: p.cubic,
  Expected: 'ubic'
}, {
  Name: 'cane',
  Actual: p.cane,
  Expected: 'ane'
}, {
  Name: 'curve',
  Actual: p.curve,
  Expected: 'urve'
}, {
  Name: 'cqua',
  Actual: p.cqua,
  Expected: 'qua'
}, {
  Name: 'cQua',
  Actual: p.cQua,
  Expected: 'Qua'
}, {
  Name: 'crtic',
  Actual: p.crtic,
  Expected: 'rtic'
}, {
  Name: 'csec',
  Actual: p.csec,
  Expected: 'sec'
}, {
  Name: 'cSec',
  Actual: p.cSec,
  Expected: 'Sec'
}, {
  Name: 'cuni',
  Actual: p.cuni,
  Expected: 'uni'
}, {
  Name: 'cUni',
  Actual: p.cUni,
  Expected: 'Uni'
}, {
  Name: 'chyper',
  Actual: p.chyper,
  Expected: 'hyper'
}, {
  Name: 'cHyper',
  Actual: p.cHyper,
  Expected: 'Hyper'
}, {
  Name: 'cbola',
  Actual: p.cbola,
  Expected: 'bola'
}, {
  Name: 'cstant',
  Actual: p.cstant,
  Expected: 'stant'
}, {
  Name: 'ciso',
  Actual: p.ciso,
  Expected: 'iso'
}, {
  Name: 'cIso',
  Actual: p.cIso,
  Expected: 'Iso'
}, {
  Name: 'ctope',
  Actual: p.ctope,
  Expected: 'tope'
}, {
  Name: 'cphon',
  Actual: p.cphon,
  Expected: 'phon'
}, {
  Name: 'cPhon',
  Actual: p.cPhon,
  Expected: 'Phon'
}, {
  Name: 'cics',
  Actual: p.cics,
  Expected: 'ics'
}, {
  Name: 'csha',
  Actual: p.csha,
  Expected: 'sha'
}, {
  Name: 'cSha',
  Actual: p.cSha,
  Expected: 'Sha'
}, {
  Name: 'cail',
  Actual: p.cail,
  Expected: 'ail'
}, {
  Name: 'cAIL',
  Actual: p.cAIL,
  Expected: 'AIL'
}, {
  Name: 'clay',
  Actual: p.clay,
  Expected: 'lay'
}, {
  Name: 'cLay',
  Actual: p.cLay,
  Expected: 'Lay'
}, {
  Name: 'csug',
  Actual: p.csug,
  Expected: 'sug'
}, {
  Name: 'cSug',
  Actual: p.cSug,
  Expected: 'Sug'
}, {
  Name: 'cgest',
  Actual: p.cgest,
  Expected: 'gest'
}, {
  Name: 'cGest',
  Actual: p.cGest,
  Expected: 'Gest'
}, {
  Name: 'cect',
  Actual: p.cect,
  Expected: 'ect'
}, {
  Name: 'croject',
  Actual: p.croject,
  Expected: 'roject'
}, {
  Name: 'cell',
  Actual: p.cell,
  Expected: 'ell'
}, {
  Name: 'cnion',
  Actual: p.cnion,
  Expected: 'nion'
}, {
  Name: 'ceta',
  Actual: p.ceta,
  Expected: 'eta'
}, {
  Name: 'ccent',
  Actual: p.ccent,
  Expected: 'cent'
}, {
  Name: 'cChi',
  Actual: p.cChi,
  Expected: 'Chi'
}, {
  Name: 'cild',
  Actual: p.cild,
  Expected: 'ild'
}, {
  Name: 'ccolr',
  Actual: p.ccolr,
  Expected: 'colr'
}, {
  Name: 'cshp',
  Actual: p.cshp,
  Expected: 'shp'
}, {
  Name: 'cual',
  Actual: p.cual,
  Expected: 'ual'
}, {
  Name: 'cied',
  Actual: p.cied,
  Expected: 'ied'
}, {
  Name: 'cified',
  Actual: p.cified,
  Expected: 'ified'
}, {
  Name: 'cments',
  Actual: p.cments,
  Expected: 'ments'
}, {
  Name: 'clop',
  Actual: p.clop,
  Expected: 'lop'
}, {
  Name: 'cLOP',
  Actual: p.cLOP,
  Expected: 'LOP'
}, {
  Name: 'cdest',
  Actual: p.cdest,
  Expected: 'dest'
}, {
  Name: 'cDest',
  Actual: p.cDest,
  Expected: 'Dest'
}, {
  Name: 'cstor',
  Actual: p.cstor,
  Expected: 'stor'
}, {
  Name: 'cStor',
  Actual: p.cStor,
  Expected: 'Stor'
}, {
  Name: 'cequ',
  Actual: p.cequ,
  Expected: 'equ'
}, {
  Name: 'cEqu',
  Actual: p.cEqu,
  Expected: 'Equ'
}, {
  Name: 'cdup',
  Actual: p.cdup,
  Expected: 'dup'
}, {
  Name: 'cDup',
  Actual: p.cDup,
  Expected: 'Dup'
}, {
  Name: 'ccate',
  Actual: p.ccate,
  Expected: 'cate'
}];
exports.phonicsConstantsValidation = phonicsConstantsValidation;