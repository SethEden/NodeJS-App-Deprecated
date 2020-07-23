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
 * @description Contains named elements & isotopes.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * {@link https://en.wikipedia.org/wiki/List_of_mathematical_shapes}
 */
var cH = b.cH; // Hydrogen

exports.cH = cH;
var cHe = b.cHe; // Helium

exports.cHe = cHe;
var cLi = b.cLi; // Lithium

exports.cLi = cLi;
var cBe = b.cBe; // Beryllium

exports.cBe = cBe;
var cB = b.cB; // Boron

exports.cB = cB;
var cC = b.cC; // Carbon

exports.cC = cC;
var cN = b.cN; // Nitrogen

exports.cN = cN;
var cO = b.cO; // Oxygen

exports.cO = cO;
var cF = b.cF; // Florine

exports.cF = cF;
var cNe = b.cNe; // Neon

exports.cNe = cNe;
var cNa = b.cNa; // Sodium

exports.cNa = cNa;
var cMg = b.cMg; // Magnesium

exports.cMg = cMg;
var cAl = b.cAl; // Aluminum

exports.cAl = cAl;
var cSi = b.cSi; // Silicon

exports.cSi = cSi;
var cP = b.cP; // Phosphorus

exports.cP = cP;
var cS = b.cS; // Sulfur

exports.cS = cS;
var cCl = b.cCl; // Clorine

exports.cCl = cCl;
var cAr = b.cAr; // Argon

exports.cAr = cAr;
var cK = b.cK; // Potassium

exports.cK = cK;
var cCa = b.cCa; // Calcium

exports.cCa = cCa;
var cSc = b.cSc; // Scandium

exports.cSc = cSc;
var cTi = b.cTi; // Titanium

exports.cTi = cTi;
var cV = b.cV; // Vanadium

exports.cV = cV;
var cCr = b.cCr; // Chromium

exports.cCr = cCr;
var cMn = b.cMn; // Manganese

exports.cMn = cMn;
var cFe = b.cFe; // Iron

exports.cFe = cFe;
var cCo = b.cCo; // Cobalt

exports.cCo = cCo;
var cNi = b.cNi; // Nickel

exports.cNi = cNi;
var cCu = b.cCu; // Copper

exports.cCu = cCu;
var cZn = b.cZn; // Zinc

exports.cZn = cZn;
var cGa = b.cGa; // Gallium

exports.cGa = cGa;
var cGe = b.cGe; // Germanium

exports.cGe = cGe;
var cAs = b.cAs; // Arsenic

exports.cAs = cAs;
var cSe = b.cSe; // Selenium

exports.cSe = cSe;
var cBr = b.cBr; // Bromine

exports.cBr = cBr;
var cKr = b.cKr; // Krypton

exports.cKr = cKr;
var cRb = b.cRb; // Rubidium

exports.cRb = cRb;
var cSr = b.cSr; // Strontium

exports.cSr = cSr;
var cY = b.cY; // Yttrium

exports.cY = cY;
var cZr = b.cZr; // Zirconium

exports.cZr = cZr;
var cNb = b.cNb; // Niobium

exports.cNb = cNb;
var cMo = b.cMo; // Molybdenum

exports.cMo = cMo;
var cTc = b.cTc; // Technetium

exports.cTc = cTc;
var cRu = b.cRu; // Ruthenium

exports.cRu = cRu;
var cRh = b.cRh; // Rhodium

exports.cRh = cRh;
var cPd = b.cPd; // Palladium

exports.cPd = cPd;
var cAg = b.cAg; // Silver

exports.cAg = cAg;
var cCd = b.cCd; // Cadmium

exports.cCd = cCd;
var cIn = b.cIn; // Indium

exports.cIn = cIn;
var cSn = b.cSn; // Tin

exports.cSn = cSn;
var cSb = b.cSb; // Antimony

exports.cSb = cSb;
var cTe = b.cTe; // Tellurium

exports.cTe = cTe;
var cI = b.cI; // Iodine

exports.cI = cI;
var cXe = b.cXe; // Xenon

exports.cXe = cXe;
var cCs = b.cCs; // Cesium

exports.cCs = cCs;
var cBa = b.cBa; // Barium

exports.cBa = cBa;
var cLa = b.cLa; // Lanthanum

exports.cLa = cLa;
var cCe = b.cCe; // Cerium

exports.cCe = cCe;
var cPr = b.cPr; // Praseodymium

exports.cPr = cPr;
var cNd = b.cNd; // Neodymium

exports.cNd = cNd;
var cPm = b.cPm; // Promethium

exports.cPm = cPm;
var cSm = b.cSm; // Samarium

exports.cSm = cSm;
var cEu = b.cEu; // Europium

exports.cEu = cEu;
var cGd = b.cGd; // Gadolinium

exports.cGd = cGd;
var cTb = b.cTb; // Terbium

exports.cTb = cTb;
var cDy = b.cDy; // Dysprosium

exports.cDy = cDy;
var cHo = b.cHo; // Holmium

exports.cHo = cHo;
var cEr = b.cEr; // Erbium

exports.cEr = cEr;
var cTm = b.cTm; // Thulium

exports.cTm = cTm;
var cYb = b.cYb; // Ytterbium

exports.cYb = cYb;
var cLu = b.cLu; // Lutetium

exports.cLu = cLu;
var cHf = b.cHf; // Hafnium

exports.cHf = cHf;
var cTa = b.cTa; // Tantalum

exports.cTa = cTa;
var cW = b.cW; // Tungsten

exports.cW = cW;
var cRe = b.cRe; // Rhenium

exports.cRe = cRe;
var cOs = b.cOs; // Osmium

exports.cOs = cOs;
var cIr = b.cIr; // Iridium

exports.cIr = cIr;
var cPt = b.cPt; // Platinum

exports.cPt = cPt;
var cAu = b.cAu; // Gold

exports.cAu = cAu;
var cHg = b.cHg; // Mercury

exports.cHg = cHg;
var cTl = b.cTl; // Thallium

exports.cTl = cTl;
var cPb = b.cPb; // Lead

exports.cPb = cPb;
var cBi = b.cBi; // Bismuth

exports.cBi = cBi;
var cPo = b.cPo; // Polonium

exports.cPo = cPo;
var cAt = b.cAt; // Astatine

exports.cAt = cAt;
var cRn = b.cRn; // Radon

exports.cRn = cRn;
var cFr = b.cFr; // Francium

exports.cFr = cFr;
var cRa = b.cRa; // Radium

exports.cRa = cRa;
var cAc = b.cAc; // Actinium

exports.cAc = cAc;
var cTh = b.cTh; // Thorium

exports.cTh = cTh;
var cPa = b.cPa; // Protactinium

exports.cPa = cPa;
var cU = b.cU; // Uranium

exports.cU = cU;
var cNp = b.cNp; // Neptunium

exports.cNp = cNp;
var cPu = b.cPu; // Plutonium

exports.cPu = cPu;
var cAm = b.cAm; // Americium

exports.cAm = cAm;
var cCm = b.cCm; // Curium

exports.cCm = cCm;
var cBk = b.cBk; // Berkelium

exports.cBk = cBk;
var cCf = b.cCf; // Californium

exports.cCf = cCf;
var cEs = b.cEs; // Einsteinium

exports.cEs = cEs;
var cFm = b.cFm; // Fermium

exports.cFm = cFm;
var cMd = b.cMd; // Mendelevium

exports.cMd = cMd;
var cNo = b.cNo; // Nobelium

exports.cNo = cNo;
var cLr = b.cLr; // Lawrencium

exports.cLr = cLr;
var cRf = b.cRf; // Rutherfordium

exports.cRf = cRf;
var cDb = b.cDb; // Dubnium

exports.cDb = cDb;
var cSg = b.cSg; // Seaborgium

exports.cSg = cSg;
var cBh = b.cBh; // Bohrium

exports.cBh = cBh;
var cHs = b.cHs; // Hassium

exports.cHs = cHs;
var cMt = b.cMt; // Meitnerium

exports.cMt = cMt;
var cDs = b.cDs; // Darmstatium

exports.cDs = cDs;
var cRg = b.cRg; // Roentgenium

exports.cRg = cRg;
var cCn = b.cCn; // Copernicium

exports.cCn = cCn;
var cNh = b.cNh; // Nihonium

exports.cNh = cNh;
var cFl = b.cFl; // Flerovium

exports.cFl = cFl;
var cMc = b.cMc; // Moscovium

exports.cMc = cMc;
var cLv = b.cLv; // Livermorium

exports.cLv = cLv;
var cTs = b.cTs; // Tennessine

exports.cTs = cTs;
var cOg = b.cOg; // Oganesson
// *****************************************************

exports.cOg = cOg;
var cHydrogen = 'Hydrogen'; // H

exports.cHydrogen = cHydrogen;
var cHelium = 'Helium'; // He

exports.cHelium = cHelium;
var cLithium = 'Lithium'; // Li

exports.cLithium = cLithium;
var cBeryllium = 'Beryllium'; // Be

exports.cBeryllium = cBeryllium;
var cBoron = 'Boron'; // B

exports.cBoron = cBoron;
var cCarbon = 'Carbon'; // C

exports.cCarbon = cCarbon;
var cNitrogen = 'Nitrogen'; // N

exports.cNitrogen = cNitrogen;
var cOxygen = 'Oxygen'; // O

exports.cOxygen = cOxygen;
var cFlorine = 'Florine'; // F

exports.cFlorine = cFlorine;
var cNeon = 'Neon'; // Ne

exports.cNeon = cNeon;
var cSodium = 'Sodium'; // Na

exports.cSodium = cSodium;
var cMagnesium = 'Magnesium'; // Mg

exports.cMagnesium = cMagnesium;
var cAluminum = 'Aluminum'; // Al

exports.cAluminum = cAluminum;
var cSilicon = 'Silicon'; // Si

exports.cSilicon = cSilicon;
var cPhosphorus = 'Phosphorus'; // P

exports.cPhosphorus = cPhosphorus;
var cSulfur = 'Sulfur'; // S

exports.cSulfur = cSulfur;
var cClorine = 'Clorine'; // Cl

exports.cClorine = cClorine;
var cArgon = 'Argon'; // Ar

exports.cArgon = cArgon;
var cPotassium = 'Potassium'; // K

exports.cPotassium = cPotassium;
var cCalcium = 'Calcium'; // Ca

exports.cCalcium = cCalcium;
var cScandium = 'Scandium'; // Sc

exports.cScandium = cScandium;
var cTitanium = 'Titanium'; // Ti

exports.cTitanium = cTitanium;
var cVanadium = 'Vanadium'; // V

exports.cVanadium = cVanadium;
var cChromium = 'Chromium'; // Cr

exports.cChromium = cChromium;
var cManganese = 'Manganese'; // Mn

exports.cManganese = cManganese;
var cIron = 'Iron'; // Fe

exports.cIron = cIron;
var cCobalt = 'Cobalt'; // Co

exports.cCobalt = cCobalt;
var cNickel = 'Nickel'; // Ni

exports.cNickel = cNickel;
var cCopper = 'Copper'; // Cu

exports.cCopper = cCopper;
var cZinc = 'Zinc'; // Zn

exports.cZinc = cZinc;
var cGallium = 'Gallium'; // Ga

exports.cGallium = cGallium;
var cGermanium = 'Germanium'; // Ge

exports.cGermanium = cGermanium;
var cArsenic = 'Arsenic'; // As

exports.cArsenic = cArsenic;
var cSelenium = 'Selenium'; // Se

exports.cSelenium = cSelenium;
var cBromine = 'Bromine'; // Br

exports.cBromine = cBromine;
var cKrypton = 'Krypton'; // Kr

exports.cKrypton = cKrypton;
var cRubidium = 'Rubidium'; // Rb

exports.cRubidium = cRubidium;
var cStrontium = 'Strontium'; // Sr

exports.cStrontium = cStrontium;
var cYttrium = 'Yttrium'; // Y

exports.cYttrium = cYttrium;
var cZirconium = 'Zirconium'; // Zr

exports.cZirconium = cZirconium;
var cNiobium = 'Niobium'; // Nb

exports.cNiobium = cNiobium;
var cMolybdenum = 'Molybdenum'; // Mo

exports.cMolybdenum = cMolybdenum;
var cTechnetium = 'Technetium'; // Tc

exports.cTechnetium = cTechnetium;
var cRuthenium = 'Ruthenium'; // Ru

exports.cRuthenium = cRuthenium;
var cRhodium = 'Rhodium'; // Rh

exports.cRhodium = cRhodium;
var cPalladium = 'Palladium'; // Pd

exports.cPalladium = cPalladium;
var cSilver = 'Silver'; // Ag

exports.cSilver = cSilver;
var cCadmium = 'Cadmium'; // Cd

exports.cCadmium = cCadmium;
var cIndium = 'Indium'; // In

exports.cIndium = cIndium;
var cTin = 'Tin'; // Sn

exports.cTin = cTin;
var cAntimony = 'Antimony'; // Sb

exports.cAntimony = cAntimony;
var cTellurium = 'Tellurium'; // Te

exports.cTellurium = cTellurium;
var cIodine = 'Iodine'; // I

exports.cIodine = cIodine;
var cXenon = 'Xenon'; // Xe

exports.cXenon = cXenon;
var cCesium = 'Cesium'; // Cs

exports.cCesium = cCesium;
var cBarium = 'Barium'; // Ba

exports.cBarium = cBarium;
var cLanthanum = 'Lanthanum'; // La

exports.cLanthanum = cLanthanum;
var cCerium = 'Cerium'; // Ce

exports.cCerium = cCerium;
var cPraseodymium = 'Praseodymium'; // Pr

exports.cPraseodymium = cPraseodymium;
var cNeodymium = 'Neodymium'; // Nd

exports.cNeodymium = cNeodymium;
var cPromethium = 'Promethium'; // Pm

exports.cPromethium = cPromethium;
var cSamarium = 'Samarium'; // Sm

exports.cSamarium = cSamarium;
var cEuropium = 'Europium'; // Eu

exports.cEuropium = cEuropium;
var cGadolinium = 'Gadolinium'; // Gd

exports.cGadolinium = cGadolinium;
var cTerbium = 'Terbium'; // Tb

exports.cTerbium = cTerbium;
var cDysprosium = 'Dysprosium'; // Dy

exports.cDysprosium = cDysprosium;
var cHolmium = 'Holmium'; // Ho

exports.cHolmium = cHolmium;
var cErbium = 'Erbium'; // Er

exports.cErbium = cErbium;
var cThulium = 'Thulium'; // Tm

exports.cThulium = cThulium;
var cYtterbium = 'Ytterbium'; // Yb

exports.cYtterbium = cYtterbium;
var cLutetium = 'Lutetium'; // Lu

exports.cLutetium = cLutetium;
var cHafnium = 'Hafnium'; // Hf

exports.cHafnium = cHafnium;
var cTantalum = 'Tantalum'; // Ta

exports.cTantalum = cTantalum;
var cTungsten = 'Tungsten'; // W

exports.cTungsten = cTungsten;
var cRhenium = 'Rhenium'; // Re

exports.cRhenium = cRhenium;
var cOsmium = 'Osmium'; // Os

exports.cOsmium = cOsmium;
var cIridium = 'Iridium'; // Ir

exports.cIridium = cIridium;
var cPlatinum = 'Platinum'; // Pt

exports.cPlatinum = cPlatinum;
var cGold = 'Gold'; // Au

exports.cGold = cGold;
var cMercury = 'Mercury'; // Hg

exports.cMercury = cMercury;
var cThallium = 'Thallium'; // Tl

exports.cThallium = cThallium;
var cLead = 'Lead'; // Pb

exports.cLead = cLead;
var cBismuth = 'Bismuth'; // Bi

exports.cBismuth = cBismuth;
var cPolonium = 'Polonium'; // Po

exports.cPolonium = cPolonium;
var cAstatine = 'Astatine'; // At

exports.cAstatine = cAstatine;
var cRadon = 'Radon'; // Rn

exports.cRadon = cRadon;
var cFrancium = 'Francium'; // Fr

exports.cFrancium = cFrancium;
var cRadium = 'Radium'; // Ra

exports.cRadium = cRadium;
var cActinium = 'Actinium'; // Ac

exports.cActinium = cActinium;
var cThorium = 'Thorium'; // Th

exports.cThorium = cThorium;
var cProtactinium = 'Protactinium'; // Pa

exports.cProtactinium = cProtactinium;
var cUranium = 'Uranium'; // U

exports.cUranium = cUranium;
var cNeptunium = 'Neptunium'; // Np

exports.cNeptunium = cNeptunium;
var cPlutonium = 'Plutonium'; // Pu

exports.cPlutonium = cPlutonium;
var cAmericium = 'Americium'; // Am

exports.cAmericium = cAmericium;
var cCurium = 'Curium'; // Cm

exports.cCurium = cCurium;
var cBerkelium = 'Berkelium'; // Bk

exports.cBerkelium = cBerkelium;
var cCalifornium = 'Californium'; // Cf

exports.cCalifornium = cCalifornium;
var cEinsteinium = 'Einsteinium'; // Es

exports.cEinsteinium = cEinsteinium;
var cFermium = 'Fermium'; // Fm

exports.cFermium = cFermium;
var cMendelevium = 'Mendelevium'; // Md

exports.cMendelevium = cMendelevium;
var cNobelium = 'Nobelium'; // No

exports.cNobelium = cNobelium;
var cLawrencium = 'Lawrencium'; // Lr

exports.cLawrencium = cLawrencium;
var cRutherfordium = 'Rutherfordium'; // Rf

exports.cRutherfordium = cRutherfordium;
var cDubnium = 'Dubnium'; // Db

exports.cDubnium = cDubnium;
var cSeaborgium = 'Seaborgium'; // Sg

exports.cSeaborgium = cSeaborgium;
var cBohrium = 'Bohrium'; // Bh

exports.cBohrium = cBohrium;
var cHassium = 'Hassium'; // Hs

exports.cHassium = cHassium;
var cMeitnerium = 'Meitnerium'; // Mt

exports.cMeitnerium = cMeitnerium;
var cDarmstatium = 'Darmstatium'; // Ds

exports.cDarmstatium = cDarmstatium;
var cRoentgenium = 'Roentgenium'; // Rg

exports.cRoentgenium = cRoentgenium;
var cCopernicium = 'Copernicium'; // Cn

exports.cCopernicium = cCopernicium;
var cNihonium = 'Nihonium'; // Nh

exports.cNihonium = cNihonium;
var cFlerovium = 'Flerovium'; // Fl

exports.cFlerovium = cFlerovium;
var cMoscovium = 'Moscovium'; // Mc

exports.cMoscovium = cMoscovium;
var cLivermorium = 'Livermorium'; // Lv

exports.cLivermorium = cLivermorium;
var cTennessine = 'Tennessine'; // Ts

exports.cTennessine = cTennessine;
var cOganesson = 'Oganesson'; // Og
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

exports.cOganesson = cOganesson;