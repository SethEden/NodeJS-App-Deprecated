"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cFm = exports.cEs = exports.cCf = exports.cBk = exports.cCm = exports.cAm = exports.cPu = exports.cNp = exports.cU = exports.cPa = exports.cTh = exports.cAc = exports.cRa = exports.cFr = exports.cRn = exports.cAt = exports.cPo = exports.cBi = exports.cPb = exports.cTl = exports.cHg = exports.cAu = exports.cPt = exports.cIr = exports.cOs = exports.cRe = exports.cW = exports.cTa = exports.cHf = exports.cLu = exports.cYb = exports.cTm = exports.cEr = exports.cHo = exports.cDy = exports.cTb = exports.cGd = exports.cEu = exports.cSm = exports.cPm = exports.cNd = exports.cPr = exports.cCe = exports.cLa = exports.cBa = exports.cCs = exports.cXe = exports.cI = exports.cTe = exports.cSb = exports.cSn = exports.cIn = exports.cCd = exports.cAg = exports.cPd = exports.cRh = exports.cRu = exports.cTc = exports.cMo = exports.cNb = exports.cZr = exports.cY = exports.cSr = exports.cRb = exports.cKr = exports.cBr = exports.cSe = exports.cAs = exports.cGe = exports.cGa = exports.cZn = exports.cCu = exports.cNi = exports.cCo = exports.cFe = exports.cMn = exports.cCr = exports.cV = exports.cTi = exports.cSc = exports.cCa = exports.cK = exports.cAr = exports.cCl = exports.cS = exports.cP = exports.cSi = exports.cAl = exports.cMg = exports.cNa = exports.cNe = exports.cF = exports.cO = exports.cN = exports.cC = exports.cB = exports.cBe = exports.cLi = exports.cHe = exports.cH = void 0;
exports.cLead = exports.cThallium = exports.cMercury = exports.cGold = exports.cPlatinum = exports.cIridium = exports.cOsmium = exports.cRhenium = exports.cTungsten = exports.cTantalum = exports.cHafnium = exports.cLutetium = exports.cYtterbium = exports.cThulium = exports.cErbium = exports.cHolmium = exports.cDysprosium = exports.cTerbium = exports.cGadolinium = exports.cEuropium = exports.cSamarium = exports.cPromethium = exports.cNeodymium = exports.cPraseodymium = exports.cCerium = exports.cLanthanum = exports.cBarium = exports.cCesium = exports.cXenon = exports.cIodine = exports.cTellurium = exports.cAntimony = exports.cTin = exports.cIndium = exports.cCadmium = exports.cSilver = exports.cPalladium = exports.cRhodium = exports.cRuthenium = exports.cTechnetium = exports.cMolybdenum = exports.cNiobium = exports.cZirconium = exports.cYttrium = exports.cStrontium = exports.cRubidium = exports.cKrypton = exports.cBromine = exports.cSelenium = exports.cArsenic = exports.cGermanium = exports.cGallium = exports.cZinc = exports.cCopper = exports.cNickel = exports.cCobalt = exports.cIron = exports.cManganese = exports.cChromium = exports.cVanadium = exports.cTitanium = exports.cScandium = exports.cCalcium = exports.cPotassium = exports.cArgon = exports.cClorine = exports.cSulfur = exports.cPhosphorus = exports.cSilicon = exports.cAluminum = exports.cMagnesium = exports.cSodium = exports.cNeon = exports.cFlorine = exports.cOxygen = exports.cNitrogen = exports.cCarbon = exports.cBoron = exports.cBeryllium = exports.cLithium = exports.cHelium = exports.cHydrogen = exports.cOg = exports.cTs = exports.cLv = exports.cMc = exports.cFl = exports.cNh = exports.cCn = exports.cRg = exports.cDs = exports.cMt = exports.cHs = exports.cBh = exports.cSg = exports.cDb = exports.cRf = exports.cLr = exports.cNo = exports.cMd = void 0;
exports.cOganesson = exports.cTennessine = exports.cLivermorium = exports.cMoscovium = exports.cFlerovium = exports.cNihonium = exports.cCopernicium = exports.cRoentgenium = exports.cDarmstatium = exports.cMeitnerium = exports.cHassium = exports.cBohrium = exports.cSeaborgium = exports.cDubnium = exports.cRutherfordium = exports.cLawrencium = exports.cNobelium = exports.cMendelevium = exports.cFermium = exports.cEinsteinium = exports.cCalifornium = exports.cBerkelium = exports.cCurium = exports.cAmericium = exports.cPlutonium = exports.cNeptunium = exports.cUranium = exports.cProtactinium = exports.cThorium = exports.cActinium = exports.cRadium = exports.cFrancium = exports.cRadon = exports.cAstatine = exports.cPolonium = exports.cBismuth = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var n = _interopRequireWildcard(require("./numeric.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var w = _interopRequireWildcard(require("./word.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file element.constants.js
 * @module element-constants
 * @description Contains named elements.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * {@link https://en.wikipedia.org/wiki/List_of_mathematical_shapes}
 */
var cH = b.cH; // H

exports.cH = cH;
var cHe = b.cHe; // He

exports.cHe = cHe;
var cLi = b.cLi; // Li

exports.cLi = cLi;
var cBe = b.cBe; // Be

exports.cBe = cBe;
var cB = b.cB; // B

exports.cB = cB;
var cC = b.cC; // C

exports.cC = cC;
var cN = b.cN; // N

exports.cN = cN;
var cO = b.cO; // O

exports.cO = cO;
var cF = b.cF; // F

exports.cF = cF;
var cNe = b.cNe; // Ne

exports.cNe = cNe;
var cNa = b.cNa; // Na

exports.cNa = cNa;
var cMg = b.cMg; // Mg

exports.cMg = cMg;
var cAl = b.cAl; // Al

exports.cAl = cAl;
var cSi = b.cSi; // Si

exports.cSi = cSi;
var cP = b.cP; // P

exports.cP = cP;
var cS = b.cS; // S

exports.cS = cS;
var cCl = b.cCl; // Cl

exports.cCl = cCl;
var cAr = b.cAr; // Ar

exports.cAr = cAr;
var cK = b.cK; // K

exports.cK = cK;
var cCa = b.cCa; // Ca

exports.cCa = cCa;
var cSc = b.cSc; // Sc

exports.cSc = cSc;
var cTi = b.cTi; // Ti

exports.cTi = cTi;
var cV = b.cV; // V

exports.cV = cV;
var cCr = b.cCr; // Cr

exports.cCr = cCr;
var cMn = b.cMn; // Mn

exports.cMn = cMn;
var cFe = b.cFe; // Fe

exports.cFe = cFe;
var cCo = b.cCo; // Co

exports.cCo = cCo;
var cNi = b.cNi; // Ni

exports.cNi = cNi;
var cCu = b.cCu; // Cu

exports.cCu = cCu;
var cZn = b.cZn; // Zn

exports.cZn = cZn;
var cGa = b.cGa; // Ga

exports.cGa = cGa;
var cGe = b.cGe; // Ge

exports.cGe = cGe;
var cAs = b.cAs; // As

exports.cAs = cAs;
var cSe = b.cSe; // Se

exports.cSe = cSe;
var cBr = b.cBr; // Br

exports.cBr = cBr;
var cKr = b.cKr; // Kr

exports.cKr = cKr;
var cRb = b.cRb; // Rb

exports.cRb = cRb;
var cSr = b.cSr; // Sr

exports.cSr = cSr;
var cY = b.cY; // Y

exports.cY = cY;
var cZr = b.cZr; // Zr

exports.cZr = cZr;
var cNb = b.cNb; // Nb

exports.cNb = cNb;
var cMo = b.cMo; // Mo

exports.cMo = cMo;
var cTc = b.cTc; // Tc

exports.cTc = cTc;
var cRu = b.cRu; // Ru

exports.cRu = cRu;
var cRh = b.cRh; // Rh

exports.cRh = cRh;
var cPd = b.cPd; // Pd

exports.cPd = cPd;
var cAg = b.cAg; // Ag

exports.cAg = cAg;
var cCd = b.cCd; // Cd

exports.cCd = cCd;
var cIn = b.cIn; // In

exports.cIn = cIn;
var cSn = b.cSn; // Sn

exports.cSn = cSn;
var cSb = b.cSb; // Sb

exports.cSb = cSb;
var cTe = b.cTe; // Te

exports.cTe = cTe;
var cI = b.cI; // I

exports.cI = cI;
var cXe = b.cXe; // Xe

exports.cXe = cXe;
var cCs = b.cCs; // Cs

exports.cCs = cCs;
var cBa = b.cBa; // Ba

exports.cBa = cBa;
var cLa = b.cLa; // La

exports.cLa = cLa;
var cCe = b.cCe; // Ce

exports.cCe = cCe;
var cPr = b.cPr; // Pr

exports.cPr = cPr;
var cNd = b.cNd; // Nd

exports.cNd = cNd;
var cPm = b.cPm; // Pm

exports.cPm = cPm;
var cSm = b.cSm; // Sm

exports.cSm = cSm;
var cEu = b.cEu; // Eu

exports.cEu = cEu;
var cGd = b.cGd; // Gd

exports.cGd = cGd;
var cTb = b.cTb; // Tb

exports.cTb = cTb;
var cDy = b.cDy; // Dy

exports.cDy = cDy;
var cHo = b.cHo; // Ho

exports.cHo = cHo;
var cEr = b.cEr; // Er

exports.cEr = cEr;
var cTm = b.cTm; // Tm

exports.cTm = cTm;
var cYb = b.cYb; // Yb

exports.cYb = cYb;
var cLu = b.cLu; // Lu

exports.cLu = cLu;
var cHf = b.cHf; // Hf

exports.cHf = cHf;
var cTa = b.cTa; // Ta

exports.cTa = cTa;
var cW = b.cW; // W

exports.cW = cW;
var cRe = b.cRe; // Re

exports.cRe = cRe;
var cOs = b.cOs; // Os

exports.cOs = cOs;
var cIr = b.cIr; // Ir

exports.cIr = cIr;
var cPt = b.cPt; // Pt

exports.cPt = cPt;
var cAu = b.cAu; // Au

exports.cAu = cAu;
var cHg = b.cHg; // Hg

exports.cHg = cHg;
var cTl = b.cTl; // Tl

exports.cTl = cTl;
var cPb = b.cPb; // Pb

exports.cPb = cPb;
var cBi = b.cBi; // Bi

exports.cBi = cBi;
var cPo = b.cPo; // Po

exports.cPo = cPo;
var cAt = b.cA + b.ct; // At

exports.cAt = cAt;
var cRn = b.cRn; // Rn

exports.cRn = cRn;
var cFr = b.cFr; // Fr

exports.cFr = cFr;
var cRa = b.cRa; // Ra

exports.cRa = cRa;
var cAc = b.cAc; // Ac

exports.cAc = cAc;
var cTh = b.cTh; // Th

exports.cTh = cTh;
var cPa = b.cPa; // Pa

exports.cPa = cPa;
var cU = b.cU; // U

exports.cU = cU;
var cNp = b.cNp; // Np

exports.cNp = cNp;
var cPu = b.cPu; // Pu

exports.cPu = cPu;
var cAm = b.cAm; // Am

exports.cAm = cAm;
var cCm = b.cCm; // Cm

exports.cCm = cCm;
var cBk = b.cBk; // Bk

exports.cBk = cBk;
var cCf = b.cCf; // Cf

exports.cCf = cCf;
var cEs = b.cEs; // Es

exports.cEs = cEs;
var cFm = b.cFm; // Fm

exports.cFm = cFm;
var cMd = b.cMd; // Md

exports.cMd = cMd;
var cNo = b.cNo; // No

exports.cNo = cNo;
var cLr = b.cLr; // Lr

exports.cLr = cLr;
var cRf = b.cRf; // Rf

exports.cRf = cRf;
var cDb = b.cDb; // Db

exports.cDb = cDb;
var cSg = b.cSg; // Sg

exports.cSg = cSg;
var cBh = b.cBh; // Bh

exports.cBh = cBh;
var cHs = b.cHs; // Hs

exports.cHs = cHs;
var cMt = b.cMt; // Mt

exports.cMt = cMt;
var cDs = b.cDs; // Ds

exports.cDs = cDs;
var cRg = b.cRg; // Rg

exports.cRg = cRg;
var cCn = b.cCn; // Cn

exports.cCn = cCn;
var cNh = b.cNh; // Nh

exports.cNh = cNh;
var cFl = b.cFl; // Fl

exports.cFl = cFl;
var cMc = b.cMc; // Mc

exports.cMc = cMc;
var cLv = b.cLv; // Lv

exports.cLv = cLv;
var cTs = b.cTs; // Ts

exports.cTs = cTs;
var cOg = b.cOg; // Og
// *****************************************************

exports.cOg = cOg;
var cHydrogen = 'Hydrogen'; // Hydrogen

exports.cHydrogen = cHydrogen;
var cHelium = 'Helium'; // Helium

exports.cHelium = cHelium;
var cLithium = 'Lithium'; // Lithium

exports.cLithium = cLithium;
var cBeryllium = 'Beryllium'; // Beryllium

exports.cBeryllium = cBeryllium;
var cBoron = 'Boron'; // Boron

exports.cBoron = cBoron;
var cCarbon = 'Carbon'; // Carbon

exports.cCarbon = cCarbon;
var cNitrogen = 'Nitrogen'; // Nitrogen

exports.cNitrogen = cNitrogen;
var cOxygen = 'Oxygen'; // Oxygen

exports.cOxygen = cOxygen;
var cFlorine = 'Florine'; // Florine

exports.cFlorine = cFlorine;
var cNeon = 'Neon'; // Neon

exports.cNeon = cNeon;
var cSodium = 'Sodium'; // Sodium

exports.cSodium = cSodium;
var cMagnesium = 'Magnesium'; // Magnesium

exports.cMagnesium = cMagnesium;
var cAluminum = 'Aluminum'; // Aluminum

exports.cAluminum = cAluminum;
var cSilicon = 'Silicon'; // Silicon

exports.cSilicon = cSilicon;
var cPhosphorus = 'Phosphorus'; // Phosphorus

exports.cPhosphorus = cPhosphorus;
var cSulfur = 'Sulfur'; // Sulfur

exports.cSulfur = cSulfur;
var cClorine = 'Clorine'; // Clorine

exports.cClorine = cClorine;
var cArgon = 'Argon'; // Argon

exports.cArgon = cArgon;
var cPotassium = 'Potassium'; // Potassium

exports.cPotassium = cPotassium;
var cCalcium = 'Calcium'; // Calcium

exports.cCalcium = cCalcium;
var cScandium = 'Scandium'; // Scandium

exports.cScandium = cScandium;
var cTitanium = 'Titanium'; // Titanium

exports.cTitanium = cTitanium;
var cVanadium = 'Vanadium'; // Vanadium

exports.cVanadium = cVanadium;
var cChromium = 'Chromium'; // Chromium

exports.cChromium = cChromium;
var cManganese = 'Manganese'; // Manganese

exports.cManganese = cManganese;
var cIron = 'Iron'; // Iron

exports.cIron = cIron;
var cCobalt = 'Cobalt'; // Cobalt

exports.cCobalt = cCobalt;
var cNickel = 'Nickel'; // Nickel

exports.cNickel = cNickel;
var cCopper = 'Copper'; // Copper

exports.cCopper = cCopper;
var cZinc = 'Zinc'; // Zinc

exports.cZinc = cZinc;
var cGallium = 'Gallium'; // Gallium

exports.cGallium = cGallium;
var cGermanium = 'Germanium'; // Germanium

exports.cGermanium = cGermanium;
var cArsenic = 'Arsenic'; // Arsenic

exports.cArsenic = cArsenic;
var cSelenium = 'Selenium'; // Selenium

exports.cSelenium = cSelenium;
var cBromine = 'Bromine'; // Bromine

exports.cBromine = cBromine;
var cKrypton = 'Krypton'; // Krypton

exports.cKrypton = cKrypton;
var cRubidium = 'Rubidium'; // Rubidium

exports.cRubidium = cRubidium;
var cStrontium = 'Strontium'; // Strontium

exports.cStrontium = cStrontium;
var cYttrium = 'Yttrium'; // Yttrium

exports.cYttrium = cYttrium;
var cZirconium = 'Zirconium'; // Zirconium

exports.cZirconium = cZirconium;
var cNiobium = 'Niobium'; // Niobium

exports.cNiobium = cNiobium;
var cMolybdenum = 'Molybdenum'; // Molybdenum

exports.cMolybdenum = cMolybdenum;
var cTechnetium = 'Technetium'; // Technetium

exports.cTechnetium = cTechnetium;
var cRuthenium = 'Ruthenium'; // Ruthenium

exports.cRuthenium = cRuthenium;
var cRhodium = 'Rhodium'; // Rhodium

exports.cRhodium = cRhodium;
var cPalladium = 'Palladium'; // Palladium

exports.cPalladium = cPalladium;
var cSilver = 'Silver'; // Silver

exports.cSilver = cSilver;
var cCadmium = 'Cadmium'; // Cadmium

exports.cCadmium = cCadmium;
var cIndium = 'Indium'; // Indium

exports.cIndium = cIndium;
var cTin = 'Tin'; // Tin

exports.cTin = cTin;
var cAntimony = 'Antimony'; // Antimony

exports.cAntimony = cAntimony;
var cTellurium = 'Tellurium'; // Tellurium

exports.cTellurium = cTellurium;
var cIodine = 'Iodine'; // Iodine

exports.cIodine = cIodine;
var cXenon = 'Xenon'; // Xenon

exports.cXenon = cXenon;
var cCesium = 'Cesium'; // Cesium

exports.cCesium = cCesium;
var cBarium = 'Barium'; // Barium

exports.cBarium = cBarium;
var cLanthanum = 'Lanthanum'; // Lanthanum

exports.cLanthanum = cLanthanum;
var cCerium = 'Cerium'; // Cerium

exports.cCerium = cCerium;
var cPraseodymium = 'Praseodymium'; // Praseodymium

exports.cPraseodymium = cPraseodymium;
var cNeodymium = 'Neodymium'; // Neodymium

exports.cNeodymium = cNeodymium;
var cPromethium = 'Promethium'; // Promethium

exports.cPromethium = cPromethium;
var cSamarium = 'Samarium'; // Samarium

exports.cSamarium = cSamarium;
var cEuropium = 'Europium'; // Europium

exports.cEuropium = cEuropium;
var cGadolinium = 'Gadolinium'; // Gadolinium

exports.cGadolinium = cGadolinium;
var cTerbium = 'Terbium'; // Terbium

exports.cTerbium = cTerbium;
var cDysprosium = 'Dysprosium'; // Dysprosium

exports.cDysprosium = cDysprosium;
var cHolmium = 'Holmium'; // Holmium

exports.cHolmium = cHolmium;
var cErbium = 'Erbium'; // Erbium

exports.cErbium = cErbium;
var cThulium = 'Thulium'; // Thulium

exports.cThulium = cThulium;
var cYtterbium = 'Ytterbium'; // Ytterbium

exports.cYtterbium = cYtterbium;
var cLutetium = 'Lutetium'; // Lutetium

exports.cLutetium = cLutetium;
var cHafnium = 'Hafnium'; // Hafnium

exports.cHafnium = cHafnium;
var cTantalum = 'Tantalum'; // Tantalum

exports.cTantalum = cTantalum;
var cTungsten = 'Tungsten'; // Tungsten

exports.cTungsten = cTungsten;
var cRhenium = 'Rhenium'; // Rhenium

exports.cRhenium = cRhenium;
var cOsmium = 'Osmium'; // Osmium

exports.cOsmium = cOsmium;
var cIridium = 'Iridium'; // Iridium

exports.cIridium = cIridium;
var cPlatinum = 'Platinum'; // Platinum

exports.cPlatinum = cPlatinum;
var cGold = 'Gold'; // Gold

exports.cGold = cGold;
var cMercury = 'Mercury'; // Mercury

exports.cMercury = cMercury;
var cThallium = 'Thallium'; // Thallium

exports.cThallium = cThallium;
var cLead = 'Lead'; // Lead

exports.cLead = cLead;
var cBismuth = 'Bismuth'; // Bismuth

exports.cBismuth = cBismuth;
var cPolonium = 'Polonium'; // Polonium

exports.cPolonium = cPolonium;
var cAstatine = 'Astatine'; // Astatine

exports.cAstatine = cAstatine;
var cRadon = 'Radon'; // Radon

exports.cRadon = cRadon;
var cFrancium = 'Francium'; // Francium

exports.cFrancium = cFrancium;
var cRadium = 'Radium'; // Radium

exports.cRadium = cRadium;
var cActinium = 'Actinium'; // Actinium

exports.cActinium = cActinium;
var cThorium = 'Thorium'; // Thorium

exports.cThorium = cThorium;
var cProtactinium = 'Protactinium'; // Protactinium

exports.cProtactinium = cProtactinium;
var cUranium = 'Uranium'; // Uranium

exports.cUranium = cUranium;
var cNeptunium = 'Neptunium'; // Neptunium

exports.cNeptunium = cNeptunium;
var cPlutonium = 'Plutonium'; // Plutonium

exports.cPlutonium = cPlutonium;
var cAmericium = 'Americium'; // Americium

exports.cAmericium = cAmericium;
var cCurium = 'Curium'; // Curium

exports.cCurium = cCurium;
var cBerkelium = 'Berkelium'; // Berkelium

exports.cBerkelium = cBerkelium;
var cCalifornium = 'Californium'; // Californium

exports.cCalifornium = cCalifornium;
var cEinsteinium = 'Einsteinium'; // Einsteinium

exports.cEinsteinium = cEinsteinium;
var cFermium = 'Fermium'; // Fermium

exports.cFermium = cFermium;
var cMendelevium = 'Mendelevium'; // Mendelevium

exports.cMendelevium = cMendelevium;
var cNobelium = 'Nobelium'; // Nobelium

exports.cNobelium = cNobelium;
var cLawrencium = 'Lawrencium'; // Lawrencium

exports.cLawrencium = cLawrencium;
var cRutherfordium = 'Rutherfordium'; // Rutherfordium

exports.cRutherfordium = cRutherfordium;
var cDubnium = 'Dubnium'; // Dubnium

exports.cDubnium = cDubnium;
var cSeaborgium = 'Seaborgium'; // Seaborgium

exports.cSeaborgium = cSeaborgium;
var cBohrium = 'Bohrium'; // Bohrium

exports.cBohrium = cBohrium;
var cHassium = 'Hassium'; // Hassium

exports.cHassium = cHassium;
var cMeitnerium = 'Meitnerium'; // Meitnerium

exports.cMeitnerium = cMeitnerium;
var cDarmstatium = 'Darmstatium'; // Darmstatium

exports.cDarmstatium = cDarmstatium;
var cRoentgenium = 'Roentgenium'; // Roentgenium

exports.cRoentgenium = cRoentgenium;
var cCopernicium = 'Copernicium'; // Copernicium

exports.cCopernicium = cCopernicium;
var cNihonium = 'Nihonium'; // Nihonium

exports.cNihonium = cNihonium;
var cFlerovium = 'Flerovium'; // Flerovium

exports.cFlerovium = cFlerovium;
var cMoscovium = 'Moscovium'; // Moscovium

exports.cMoscovium = cMoscovium;
var cLivermorium = 'Livermorium'; // Livermorium

exports.cLivermorium = cLivermorium;
var cTennessine = 'Tennessine'; // Tennessine

exports.cTennessine = cTennessine;
var cOganesson = 'Oganesson'; // Oganesson

exports.cOganesson = cOganesson;