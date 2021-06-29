"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cFuchsia = exports.cfuchsia = exports.cFandango = exports.cfandango = exports.cSienna = exports.csienna = exports.cOlive = exports.colive = exports.cCrimson = exports.ccrimson = exports.cCherry = exports.ccherry = exports.cBeige = exports.cbeige = exports.cAzure = exports.cazure = exports.cAmaranth = exports.camaranth = exports.cAmethyst = exports.camethyst = exports.cAmber = exports.camber = exports.cAqua = exports.caqua = exports.cAero = exports.caero = exports.cVanilla = exports.cvanilla = exports.cUmber = exports.cumber = exports.cTangerine = exports.ctangerine = exports.cTurquoise = exports.cturquoise = exports.cDrab = exports.cdrab = exports.cTaupe = exports.ctaupe = exports.cTeal = exports.cteal = exports.cSapphire = exports.csapphire = exports.cPlatnium = exports.cplatnium = exports.cCadmium = exports.ccadmium = exports.cTitanium = exports.ctitanium = exports.cTan = exports.ctan = exports.cCobalt = exports.ccobalt = exports.cCopper = exports.ccopper = exports.cSilver = exports.csilver = exports.cGold = exports.cgold = exports.cRuby = exports.cruby = exports.cScarlet = exports.cscarlet = exports.cRose = exports.crose = exports.cMaroon = exports.cmaroon = exports.cLilac = exports.clilac = exports.cViolet = exports.cviolet = exports.cPurple = exports.cpurple = exports.cLavender = exports.clavender = exports.cPink = exports.cpink = exports.cGray = exports.cgray = exports.cGrey = exports.cgrey = exports.cBrown = exports.cbrown = exports.cOrange = exports.corange = exports.cWhite = exports.cwhite = exports.cBlack = exports.cblack = exports.cYellow = exports.cyellow = exports.cMagenta = exports.cmagenta = exports.cCyan = exports.ccyan = exports.cBlue = exports.cblue = exports.cGreen = exports.cgreen = exports.cRed = exports.cred = void 0;
exports.cVermilion = exports.cvermilion = exports.cViridian = exports.cviridian = exports.cTuscan = exports.ctuscan = exports.cPlum = exports.cplum = exports.cPeach = exports.cpeach = exports.cMauve = exports.cmauve = exports.cLemon = exports.clemon = exports.cIndigo = exports.cindigo = exports.cLime = exports.clime = void 0;

var bas = _interopRequireWildcard(require("./basic.constants"));

var phn = _interopRequireWildcard(require("./phonic.constants"));

var gen = _interopRequireWildcard(require("./generic.constants"));

var num = _interopRequireWildcard(require("./numeric.constants"));

var wrd = _interopRequireWildcard(require("./word.constants"));

var lng = _interopRequireWildcard(require("./language.constants"));

var ctr = _interopRequireWildcard(require("./country.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file color.constants.js
 * @module color-constants
 * @description Contains all named colors.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:language-constants
 * @requires module:country-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// NOTE: I changed e-x-p-o-r-t c-o-n-s-t => smuggle something,
// because the constants validation system is scanning these files looking for that keyword and
// if it finds it then it will use that line for validation pruposes.
// So to reverse this, just do a find replace and change // s.muggle something back into the other e-x-p-o-r-t c-o-n-s-t string.
// The current state of the application doesn't need all of these, but future applications will most definately need them.
// So they are left here as a matter of future-proofing.
// Colors
// Primary Colors
var cred = bas.cr + bas.ced; // red

exports.cred = cred;
var cRed = bas.cR + bas.ced; // Red

exports.cRed = cRed;
var cgreen = bas.cg + phn.creen; // green

exports.cgreen = cgreen;
var cGreen = bas.cG + phn.creen; // Green

exports.cGreen = cGreen;
var cblue = bas.cb + phn.clue; // blue

exports.cblue = cblue;
var cBlue = bas.cB + phn.clue; // Blue
// Secondary Colors CMYK

exports.cBlue = cBlue;
var ccyan = bas.cc + phn.cyan; // cyan

exports.ccyan = ccyan;
var cCyan = bas.cC + phn.cyan; // Cyan

exports.cCyan = cCyan;
var cmagenta = bas.cm + bas.cag + phn.centa; // magenta

exports.cmagenta = cmagenta;
var cMagenta = bas.cM + bas.cag + phn.centa; // Magenta

exports.cMagenta = cMagenta;
var cyellow = wrd.cyell + bas.cow; // yellow

exports.cyellow = cyellow;
var cYellow = wrd.cYell + bas.cow; // Yellow

exports.cYellow = cYellow;
var cblack = bas.cb + wrd.clack; // black

exports.cblack = cblack;
var cBlack = bas.cB + wrd.clack; // Black

exports.cBlack = cBlack;
var cwhite = bas.cwh + phn.cite; // white

exports.cwhite = cwhite;
var cWhite = bas.cWh + phn.cite; // White

exports.cWhite = cWhite;
var corange = bas.cor + phn.cange; // orange

exports.corange = corange;
var cOrange = bas.cOr + phn.cange; // Orange
// Common Colors

exports.cOrange = cOrange;
var cbrown = bas.cbr + phn.cown; // brown

exports.cbrown = cbrown;
var cBrown = bas.cBr + phn.cown; // Brown

exports.cBrown = cBrown;
var cgrey = bas.cg + phn.crey; // grey

exports.cgrey = cgrey;
var cGrey = bas.cG + phn.crey; // Grey

exports.cGrey = cGrey;
var cgray = bas.cg + phn.cray; // gray

exports.cgray = cgray;
var cGray = bas.cG + phn.cray; // Gray

exports.cGray = cGray;
var cpink = bas.cp + phn.cink; // pink

exports.cpink = cpink;
var cPink = bas.cP + phn.cink; // Pink

exports.cPink = cPink;
var clavender = bas.cl + phn.cavender; // lavender

exports.clavender = clavender;
var cLavender = bas.cL + phn.cavender; // Lavender

exports.cLavender = cLavender;
var cpurple = bas.cp + phn.curple; // purple

exports.cpurple = cpurple;
var cPurple = bas.cP + phn.curple; // Purple

exports.cPurple = cPurple;
var cviolet = bas.cv + phn.ciolet; // violet

exports.cviolet = cviolet;
var cViolet = bas.cV + phn.ciolet; // Violet

exports.cViolet = cViolet;
var clilac = bas.cl + phn.cilac; // lilac

exports.clilac = clilac;
var cLilac = bas.cL + phn.cilac; // Lilac

exports.cLilac = cLilac;
var cmaroon = bas.cm + phn.caroon; // maroon

exports.cmaroon = cmaroon;
var cMaroon = bas.cM + phn.caroon; // Maroon

exports.cMaroon = cMaroon;
var crose = bas.cr + phn.cose; // rose

exports.crose = crose;
var cRose = bas.cR + phn.cose; // Rose

exports.cRose = cRose;
var cscarlet = bas.csc + bas.car + wrd.clet; // scarlet

exports.cscarlet = cscarlet;
var cScarlet = bas.cSc + bas.car + wrd.clet; // Scarlet

exports.cScarlet = cScarlet;
var cruby = bas.cr + phn.cuby; // ruby

exports.cruby = cruby;
var cRuby = bas.cR + phn.cuby; // Ruby

exports.cRuby = cRuby;
var cgold = bas.cg + wrd.cold; // gold

exports.cgold = cgold;
var cGold = bas.cG + wrd.cold; // Gold

exports.cGold = cGold;
var csilver = bas.cs + phn.cilver; // silver

exports.csilver = csilver;
var cSilver = bas.cS + phn.cilver; // Silver

exports.cSilver = cSilver;
var ccopper = bas.cc + phn.copper; // copper

exports.ccopper = ccopper;
var cCopper = bas.cC + phn.copper; // Copper

exports.cCopper = cCopper;
var ccobalt = bas.cc + phn.cobalt; // cobalt

exports.ccobalt = ccobalt;
var cCobalt = bas.cC + phn.cobalt; // Cobalt

exports.cCobalt = cCobalt;
var ctan = bas.cta + bas.cn; // tan

exports.ctan = ctan;
var cTan = bas.cTa + bas.cn; // Tan

exports.cTan = cTan;
var ctitanium = bas.cti + ctan + phn.cium; // titanium

exports.ctitanium = ctitanium;
var cTitanium = bas.cTi + ctan + phn.cium; // Titanium

exports.cTitanium = cTitanium;
var ccadmium = bas.cca + bas.cd + phn.cmium; // cadmium

exports.ccadmium = ccadmium;
var cCadmium = bas.cCa + bas.cd + phn.cmium; // Cadmium

exports.cCadmium = cCadmium;
var cplatnium = bas.cpl + bas.cat + phn.cnium; // platnium

exports.cplatnium = cplatnium;
var cPlatnium = bas.cPl + bas.cat + phn.cnium; // Platnium

exports.cPlatnium = cPlatnium;
var csapphire = wrd.csap + phn.cphire; // sapphire

exports.csapphire = csapphire;
var cSapphire = wrd.cSap + phn.cphire; // Sapphire

exports.cSapphire = cSapphire;
var cteal = bas.ct + phn.ceal; // teal

exports.cteal = cteal;
var cTeal = bas.cT + phn.ceal; // Teal

exports.cTeal = cTeal;
var ctaupe = bas.ct + phn.caupe; // taupe

exports.ctaupe = ctaupe;
var cTaupe = bas.cT + phn.caupe; // Taupe

exports.cTaupe = cTaupe;
var cdrab = bas.cd + phn.crab; // drab

exports.cdrab = cdrab;
var cDrab = bas.cD + phn.crab; // Drab

exports.cDrab = cDrab;
var cturquoise = bas.ctu + phn.crquoise; // turquoise

exports.cturquoise = cturquoise;
var cTurquoise = bas.cTu + phn.crquoise; // Turquoise

exports.cTurquoise = cTurquoise;
var ctangerine = ctan + phn.cgerine; // tangerine

exports.ctangerine = ctangerine;
var cTangerine = cTan + phn.cgerine; // Tangerine

exports.cTangerine = cTangerine;
var cumber = bas.cu + phn.cmber; // umber

exports.cumber = cumber;
var cUmber = bas.cU + phn.cmber; // Umber

exports.cUmber = cUmber;
var cvanilla = wrd.cvan + phn.cilla; // vanilla

exports.cvanilla = cvanilla;
var cVanilla = wrd.cVan + phn.cilla; // Vanilla

exports.cVanilla = cVanilla;
var caero = bas.ca + phn.cero; // aero

exports.caero = caero;
var cAero = bas.cA + phn.cero; // Aero

exports.cAero = cAero;
var caqua = bas.ca + phn.cqua; // aqua

exports.caqua = caqua;
var cAqua = bas.cA + phn.cqua; // Aqua

exports.cAqua = cAqua;
var camber = bas.ca + phn.cmber; // amber

exports.camber = camber;
var cAmber = bas.cA + phn.cmber; // Amber

exports.cAmber = cAmber;
var camethyst = bas.cam + phn.ceth + phn.cyst; // amethyst

exports.camethyst = camethyst;
var cAmethyst = bas.cAm + phn.ceth + phn.cyst; // Amethyst

exports.cAmethyst = cAmethyst;
var camaranth = bas.ca + phn.cmaranth; // amaranth

exports.camaranth = camaranth;
var cAmaranth = bas.cA + phn.cmaranth; // Amaranth

exports.cAmaranth = cAmaranth;
var cazure = bas.caz + phn.cure; // azure

exports.cazure = cazure;
var cAzure = bas.cAz + phn.cure; // Azure

exports.cAzure = cAzure;
var cbeige = bas.cbe + phn.cige; // beige

exports.cbeige = cbeige;
var cBeige = bas.cBe + phn.cige; // Beige

exports.cBeige = cBeige;
var ccherry = bas.cch + phn.cerry; // cherry

exports.ccherry = ccherry;
var cCherry = bas.cCh + phn.cerry; // Cherry

exports.cCherry = cCherry;
var ccrimson = bas.cc + phn.crimson; // crimson

exports.ccrimson = ccrimson;
var cCrimson = bas.cC + phn.crimson; // Crimson

exports.cCrimson = cCrimson;
var colive = bas.co + phn.clive; // olive

exports.colive = colive;
var cOlive = bas.cO + phn.clive; // Olive

exports.cOlive = cOlive;
var csienna = bas.cs + phn.cienna; // sienna

exports.csienna = csienna;
var cSienna = bas.cS + phn.cienna; // Sienna

exports.cSienna = cSienna;
var cfandango = bas.cf + phn.candango; // fandango

exports.cfandango = cfandango;
var cFandango = bas.cF + phn.candango; // Fandango

exports.cFandango = cFandango;
var cfuchsia = bas.cf + phn.cuchsia; // fuchsia

exports.cfuchsia = cfuchsia;
var cFuchsia = bas.cF + phn.cuchsia; // Fuchsia

exports.cFuchsia = cFuchsia;
var clime = bas.cl + phn.cime; // lime

exports.clime = clime;
var cLime = bas.cL + phn.cime; // Lime

exports.cLime = cLime;
var cindigo = bas.ci + phn.cndigo; // indigo

exports.cindigo = cindigo;
var cIndigo = bas.cI + phn.cndigo; // Indigo

exports.cIndigo = cIndigo;
var clemon = bas.cl + phn.cemon; // lemon

exports.clemon = clemon;
var cLemon = bas.cL + phn.cemon; // Lemon

exports.cLemon = cLemon;
var cmauve = bas.cm + phn.cauve; // mauve

exports.cmauve = cmauve;
var cMauve = bas.cM + phn.cauve; // Mauve

exports.cMauve = cMauve;
var cpeach = bas.cp + phn.ceach; // peach

exports.cpeach = cpeach;
var cPeach = bas.cP + phn.ceach; // Peach

exports.cPeach = cPeach;
var cplum = bas.cp + phn.clum; // plum

exports.cplum = cplum;
var cPlum = bas.cP + phn.clum; // Plum

exports.cPlum = cPlum;
var ctuscan = bas.ct + phn.cuscan; // tuscan

exports.ctuscan = ctuscan;
var cTuscan = bas.cT + phn.cuscan; // Tuscan

exports.cTuscan = cTuscan;
var cviridian = bas.cv + phn.ciridian; // viridian

exports.cviridian = cviridian;
var cViridian = bas.cV + phn.ciridian; // Viridian

exports.cViridian = cViridian;
var cvermilion = bas.cv + phn.cermilion; // vermilion

exports.cvermilion = cvermilion;
var cVermilion = bas.cV + phn.cermilion; // Vermilion
// Tertiary Named Colors
// https://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F
// https://en.wikipedia.org/wiki/List_of_colors:_G%E2%80%93M
// https://en.wikipedia.org/wiki/List_of_colors:_N%E2%80%93Z
// smuggle something cAbsoluteZero = wrd.cAbsolute + num.cZero; // AbsoluteZero
// smuggle something cAcidGreen = wrd.cAcid + cGreen; // AcidGreen
// smuggle something cAeroBlue = cAero + cBlue; // AeroBlue
// smuggle something cAfricanViolet = wrd.cAfrican + cViolet; // AfricanViolet
// smuggle something cAirSuperiorityBlue = wrd.cAir + wrd.cSuperiority + cBlue; // AirSuperiorityBlue
// smuggle something cAliceBlue = wrd.cAlice + cBlue; // AliceBlue
// smuggle something cAlloyOrange = wrd.cAlloy + cOrange; // AlloyOrange
// smuggle something cAlmond = bas.cAl + phn.cmond; // Almond
// smuggle something cAmaranthMP = cAmaranth + bas.cMP; // AmaranthMP
// smuggle something cAmaranthPink = cAmaranth + cPink; // AmaranthPink
// smuggle something cAmaranthPurple = cAmaranth + cPurple; // AmaranthPurple
// smuggle something cAmaranthRed = cAmaranth + cRed; // AmaranthRed
// smuggle something cAmazon = bas.cAm + bas.caz + bas.con; // Amazon
// smuggle something cAmberSAEECE = cAmber + bas.cSA + bas.cEE + bas.cCE; // AmberSAEECE
// smuggle something cAndroidGreen = wrd.cAndroid + cGreen; // AndroidGreen
// smuggle something cAntiqueBrass = wrd.cAntique + wrd.cBrass; // AntiqueBrass
// smuggle something cAntiqueBronze = wrd.cAntique + wrd.cBronze; // AntiqueBronze
// smuggle something cAntiqueFuchsia = wrd.cAntique + cFuchsia; // AntiqueFuchsia
// smuggle something cAntiqueRuby = wrd.cAntique + cRuby; // AntiqueRuby
// smuggle something cAntiqueWhite = wrd.cAntique + cWhite; // AntiqueWhite
// smuggle something cAoEnglish = bas.cAo + lng.cEnglish; // AoEnglish
// smuggle something cAppleGreen = wrd.cApple + cGreen; // AppleGreen
// smuggle something cAquamarine = cAqua + phn.cmar + phn.cine; // Aquamarine
// smuggle something cArcticLime = wrd.cArctic + cLime; // ArcticLime
// smuggle something cArmyGreen = wrd.cArmy + cGreen; // ArmyGreen
// smuggle something cArtichoke = bas.cAr + phn.ctic + bas.cho + bas.cke; // Artichoke
// smuggle something cArylideYellow = wrd.cArylide + cYellow; // ArylideYellow
// smuggle something cAshGray = wrd.cAsh + cGray; // AshGray
// smuggle something cAsparagus = bas.cAs + phn.cpara + bas.cgu + bas.cs; // Asparagus
// smuggle something cAtomicTangerine = wrd.cAtomic + cTangerine; // AtomicTangerine
// smuggle something cAuburn = bas.cAu + bas.cbu + bas.crn; // Auburn
// smuggle something cAureolin = bas.cAu + bas.cre + phn.colin; // Aureolin
// smuggle something cAvocado = bas.cAv + bas.coc + phn.cado; // Avocado
// smuggle something cAzureWeb = cAzure + wrd.cWeb; // AzureWeb
// smuggle something cBabyBlue = wrd.cBaby + cBlue; // BabyBlue
// smuggle something cBabyBlueEyes = wrd.cBaby + cBlue + wrd.cEyes; // BabyBlueEyes
// smuggle something cBabyPink = wrd.cBaby + cPink; // BabyPink
// smuggle something cBabyPowder = wrd.cBaby + wrd.cPowder; // BabyPowder
// smuggle something cBakerMillerPink = wrd.cBaker + wrd.cMiller + cPink; // BakerMillerPink
// smuggle something cBananaMania = wrd.cBanana + wrd.cMania; // BananaMania
// smuggle something cBarbiePink = wrd.cBarbie + cPink; // BarbiePink
// smuggle something cBarnRed = wrd.cBarn + cRed; // BarnRed
// smuggle something cBattleshipGrey = wrd.cBattleship + cGrey; // BattleshipGrey
// smuggle something cBeauBlue = wrd.cBeau + cBlue; // BeauBlue
// smuggle something cBeaver = bas.cBe + phn.cave + bas.cr; // Beaver
// smuggle something cBDazzledBlue = bas.cB + wrd.cDazzled + cBlue; // BDazzledBlue
// smuggle something cBigDipORuby = wrd.cBig + bas.cDi + bas.cpO + cRuby; // BigDipORuby
// smuggle something cBisque = bas.cBi + bas.csq + bas.cue; // Bisque
// smuggle something cBistreBrown = wrd.cBistre + cBrown; // BistreBrown
// smuggle something cBitterLemon = wrd.cBitter + cLemon; // BitterLemon
// smuggle something cBitterLime = wrd.cBitter + cLime; // BitterLime
// smuggle something cBittersweet = wrd.cBittersweet; // Bittersweet
// smuggle something cBittersweetShimmer = wrd.cBittersweet + wrd.cShimmer; // BittersweetShimmer
// smuggle something cBlackBean = cBlack + wrd.cBean; // BlackBean
// smuggle something cBlackChocolate = cBlack + wrd.cChocolate; // BlackChocolate
// smuggle something cBlackCoffee = cBlack + wrd.cCoffee; // BlackCoffee
// smuggle something cBlackCoral = cBlack + wrd.cCoral; // BlackCoral
// smuggle something cBlackOlive = cBlack + cOlive; // BlackOlive
// smuggle something cBlackShadows = cBlack + wrd.cShadows; // BlackShadows
// smuggle something cBlanchedAlmond = wrd.cBlanched + bas.cAl + phn.cmond; // BlanchedAlmond
// smuggle something cBlastOffBronze = wrd.cBlast + gen.cOff + wrd.cBronze; // BlastOffBronze
// smuggle something cBleuDeFrance = bas.cBl + bas.ceu + bas.cDe + ctr.cFrance; // BleuDeFrance
// smuggle something cBlizzardBlue = wrd.cBlizzard + cBlue; // BlizzardBlue
// smuggle something cBlond = bas.cBl + phn.cond; // Blond
// smuggle something cBloodRed = wrd.cBlood + cRed; // BloodRed
// smuggle something cBlueCrayola = cBlue + wrd.cCrayola; // BlueCrayola
// smuggle something cBlueMunsell = cBlue + wrd.cMunsell; // BlueMunsell
// smuggle something cBlueNCS = cBlue + phn.cNCS; // BlueNCS
// smuggle something cBluePantone = cBlue + wrd.cPantone; // BluePantone
// smuggle something cBluePigment = cBlue + wrd.cPigment; // BluePigment
// smuggle something cBlueRYB = cBlue + phn.cRYB; // BlueRYB
// smuggle something cBlueBell = cBlue + wrd.cBell; // BlueBell
// smuggle something cBlueGray = cBlue + cGray; // BlueGray
// smuggle something cBlueGreen = cBlue + cGreen; // BlueGreen
// smuggle something cBlueGreenColorWheel = cBlue + cGreen + wrd.cColor + wrd.cWheel; // BlueGreenColorWheel
// smuggle something cBlueJeans = cBlue + wrd.cJeans; // BlueJeans
// smuggle something cBlueSapphire = cBlue + cSapphire; // BlueSapphire
// smuggle something cBlueViolet = cBlue + cViolet; // BlueViolet
// smuggle something cBlueVioletCrayola = cBlue + cViolet + wrd.cCrayola; // BlueVioletCrayola
// smuggle something cBlueVioletColorWheel = cBlue + cViolet + wrd.cColor + wrd.cWheel; // BlueVioletColorWheel
// smuggle something cBlueYonder = cBlue + wrd.cYonder; // BlueYonder
// smuggle something cBluetiful = cBlue + bas.cti + phn.cful; // Bluetiful
// smuggle something cBlush = wrd.cBlush; // Blush
// smuggle something cBole = bas.cBo + bas.cle; // Bole
// smuggle something cBone = bas.cBo + bas.cne; // Bone
// smuggle something cBottleGreen = wrd.cBottle + cGreen; // BottleGreen
// smuggle something cBrandy = phn.cBra + phn.cndy; // Brandy
// smuggle something cBrickRed = wrd.cBrick + cRed; // BrickRed
// smuggle something cBrightGreen = wrd.cBright + cGreen; // BrightGreen
// smuggle something cBrightLilac = wrd.cBright + cLilac; // BrightLilac
// smuggle something cBrightMaroon = wrd.cBright + cMaroon; // BrightMaroon
// smuggle something cBrightNavyBlue = wrd.cBright + wrd.cNavy + cBlue; // BrightNavyBlue
// smuggle something cBrightYellowCrayola = wrd.cBright + cYellow + wrd.cCrayola; // BrightYellowCrayola
// smuggle something cBrilliantRose = wrd.cBrilliant + cRose; // BrilliantRose
// smuggle something cBrinkPink = bas.cBr + phn.cink + cPink; // BrinkPink
// smuggle something cBritishRacingGreen = bas.cBr + phn.citi + bas.csh + wrd.cRacing + cGreen; // BritishRacingGreen
// smuggle something cBronze = wrd.cBronze; // Bronze
// smuggle something cBrownSugar = cBrown + wrd.cSugar; // BrownSugar
// smuggle something cBrunswickGreen = wrd.cBrunswick + cGreen; // BrunswickGreen
// smuggle something cBudGreen = wrd.cBud + cGreen; // BudGreen
// smuggle something cBuff = bas.cBu + bas.cff; // Buff
// smuggle something cBurgundy = bas.cBu + phn.crgundy; // Burgundy
// smuggle something cBurlywood = wrd.cBurly + wrd.cwood; // Burlywood
// smuggle something cBurnishedBrown = wrd.cBurnished + cBrown; // BurnishedBrown
// smuggle something cBurntOrange = wrd.cBurnt + cOrange; // BurntOrange
// smuggle something cBurntSienna = wrd.cBurnt + cSienna; // BurntSienna
// smuggle something cBurntUmber = wrd.cBurnt + cUmber; // BurntUmber
// smuggle something cByzantine = bas.cBy + bas.cza + bas.cnt + phn.cine; // Byzantine
// smuggle something cByzantium = wrd.cByzantium; // Byzantium
// smuggle something cCadet = wrd.cCadet; // Cadet
// smuggle something cCadetBlue = wrd.cCadet + cBlue; // CadetBlue
// smuggle something cCadetBlueCrayola = wrd.cCadet + cBlue + wrd.cCrayola; // CadetBlueCrayola
// smuggle something cCadetGrey = wrd.cCadet + cGrey; // CadetGrey
// smuggle something cCadmiumGreen = cCadmium + cGreen; // CadmiumGreen
// smuggle something cCadmiumOrange = cCadmium + cOrange; // CadmiumOrange
// smuggle something cCadmiumRed = cCadmium + cRed; // CadmiumRed
// smuggle something cCadmiumYellow = cCadmium + cYellow; // CadmiumYellow
// smuggle something cCafeAuLait = wrd.cCafe + bas.cAu + bas.cLa + bas.cit; // CafeAuLait
// smuggle something cCafeNoir = wrd.cCafe + bas.cNo + bas.cir; // CafeNoir
// smuggle something cCambridgeBlue = wrd.cCambridge + cBlue; // CambridgeBlue
// smuggle something cCameoPink = wrd.cCameo + cPink; // CameoPink
// smuggle something cCanary = wrd.cCan + phn.cary; // Canary
// smuggle something cCanaryYellow = wrd.cCan + phn.cary + cYellow; // CanaryYellow
// smuggle something cCandyAppleRed = wrd.cCan + bas.cdy + wrd.cApple + cRed; // CandyAppleRed
// smuggle something cCandyPink = wrd.cCan + bas.cdy + cPink; // CandyPink
// smuggle something cCapri = bas.cCa + phn.cpri; // Capri
// smuggle something cCaputMortuum = wrd.cCaput + wrd.cMortuum; // CaputMortuum
// smuggle something cCardinal = bas.cCa + bas.crd + phn.cinal; // Cardinal
// smuggle something cCaribbeanGreen = wrd.cCaribbean + cGreen; // CaribbeanGreen
// smuggle something cCarmine = wrd.cCarmine; // Carmine
// smuggle something cCarmineMP = wrd.cCarmine + bas.cMP; // CarmineMP
// smuggle something cCarnationPink = wrd.cCarnation + cPink; // CarnationPink
// smuggle something cCarnelian = bas.cCa + bas.crn + bas.cel + phn.cian; // Carnelian
// smuggle something cCarolinaBlue = bas.cCa + bas.cro + phn.clin + bas.caB + phn.clue; // CarolinaBlue
// smuggle something cCarrotOrange = wrd.cCarrot + cOrange; // CarrotOrange
// smuggle something cCastletonGreen = wrd.cCastleton + cGreen; // CastletonGreen
// smuggle something cCatawba = bas.cCa + bas.cta + bas.cwb + bas.ca; // Catawba
// smuggle something cCedarChest = wrd.cCedar + wrd.cChest; // CedarChest
// smuggle something cCeladon = wrd.cCeladon; // Celadon
// smuggle something cCeladonBlue = wrd.cCeladon + cBlue; // CeladonBlue
// smuggle something cCeladonGreen = wrd.cCeladon + cGreen; // CeladonGreen
// smuggle something cCeleste = phn.cCel + phn.cest + bas.ce; // Celeste
// smuggle something cCelticBlue = wrd.cCeltic + cBlue; // CelticBlue
// smuggle something cCerise = wrd.cCerise; // Cerise
// smuggle something cCerulean = bas.cCe + phn.crulean; // Cerulean
// smuggle something cCeruleanBlue = bas.cCe + phn.crulean + cBlue; // CeruleanBlue
// smuggle something cCeruleanFrost = bas.cCe + phn.crulean + wrd.cFrost; // CeruleanFrost
// smuggle something cCeruleanCrayola = bas.cCe + phn.crulean + wrd.cCrayola; // CeruleanCrayola
// smuggle something cCGBlue = bas.cCG + cBlue; // CGBlue
// smuggle something cCGRed = bas.cCG + cRed; // CGRed
// smuggle something cChampagne = bas.cCh + phn.campagne; // Champagne
// smuggle something cChampagnePink = bas.cCh + phn.campagne + cPink; // ChampagnePink
// smuggle something cCharcoal = wrd.cChar + bas.cco + bas.cal; // Charcoal
// smuggle something cCharlestonGreen = wrd.cCharleston + cGreen; // CharlestonGreen
// smuggle something cCharmPink = wrd.cCharm + cPink; // CharmPink
// smuggle something cChartreuseTraditional = wrd.cChartreuse + wrd.cTraditional; // ChartreuseTraditional
// smuggle something cChartreuseWeb = wrd.cChartreuse + wrd.cWeb; // ChartreuseWeb
// smuggle something cCherryBlossomPink = cCherry + wrd.cBlossom + cPink; // CherryBlossomPink
// smuggle something cChestnut = wrd.cChestnut; // Chestnut
// smuggle something cChinaPink = ctr.cChina + cPink; // ChinaPink
// smuggle something cChinaRose = ctr.cChina + cRose; // ChinaRose
// smuggle something cChineseRed = lng.cChinese + cRed; // ChineseRed
// smuggle something cChineseViolet = lng.cChinese + cViolet; // ChineseViolet
// smuggle something cChineseYellow = lng.cChinese + cYellow; // ChineseYellow
// smuggle something cChocolateTraditional = wrd.cChocolate + wrd.cTraditional; // ChocolateTraditional
// smuggle something cChocolateWeb = wrd.cChocolate + wrd.cWeb; // ChocolateWeb
// smuggle something cChromeYellow = wrd.cChrome + cYellow; // ChromeYellow
// smuggle something cCinereous = bas.cCi + bas.cne + bas.cre + phn.cous; // Cinereous
// smuggle something cCinnabar = bas.cCi + phn.cnna + bas.cba + bas.cr; // Cinnabar
// smuggle something cCinnamonSatin = wrd.cCinnamon + wrd.cSatin; // CinnamonSatin
// smuggle something cCitrine = bas.cCi + phn.ctri + bas.cne; // Citrine
// smuggle something cCitron = bas.cCi + bas.ctr + bas.con; // Citron
// smuggle something cClaret = bas.cCl + phn.care + bas.ct; // Claret
// smuggle something cCobaltBlue = cCobalt + cBlue; // CobaltBlue
// smuggle something cCocoaBrown = wrd.cCocoa + cBrown; // CocoaBrown
// smuggle something cCoffee = wrd.cCoffee; // Coffee
// smuggle something cColumbiaBlue = wrd.cColumbia + cBlue; // ColumbiaBlue
// smuggle something cCongoPink = ctr.cCongo + cPink; // CongoPink
// smuggle something cCoolGrey = wrd.cCool + cGrey; // CoolGrey
// smuggle something cCopperCrayola = cCopper + wrd.cCrayola; // CopperCrayola
// smuggle something cCopperPenny = cCopper + wrd.cPen + bas.cny; // CopperPenny
// smuggle something cCopperRed = cCopper + cRed; // CopperRed
// smuggle something cCopperRose = cCopper + cRose; // CopperRose
// smuggle something cCoquelicot = bas.cCo + phn.cque + phn.clic + bas.cot; // Coquelicot
// smuggle something cCoral = wrd.cCoral; // Coral
// smuggle something cCoralPink = wrd.cCoral + cPink; // CoralPink
// smuggle something cCordovan = phn.cCor + bas.cdo + wrd.cvan; // Cordovan
// smuggle something cCorn = phn.cCor + bas.cn; // Corn
// smuggle something cCornflowerBlue = phn.cCor + bas.cnf + wrd.clower + cBlue; // CornflowerBlue
// smuggle something cCornsilk = phn.cCor + bas.cns + phn.cilk; // Cornsilk
// smuggle something cCosmicCobalt = wrd.cCosmic + cCobalt; // CosmicCobalt
// smuggle something cCosmicLatte = wrd.cCosmic + wrd.cLatte; // CosmicLatte
// smuggle something cCoyoteBrown = wrd.cCoyote + cBrown; // CoyoteBrown
// smuggle something cCottonCandy = wrd.cCotton + wrd.cCan + bas.cdy; // CottonCandy
// smuggle something cCream = bas.cCr + phn.ceam; // Cream
// smuggle something cCrimsonUA = cCrimson + bas.cUA; // CrimsonUA
// smuggle something cCultured = bas.cCu + bas.clt + phn.cured; // Cultured
// smuggle something cCyanProcess = cCyan + wrd.cProcess; // CyanProcess
// smuggle something cCyberGrape = wrd.cCyber + bas.cGr + phn.cape; // CyberGrape
// smuggle something cCyberYellow = wrd.cCyber + cYellow; // CyberYellow
// smuggle something cCyclamen = bas.cCy + bas.ccl + phn.camen; // Cyclamen
// smuggle something cDarkBlueGray = wrd.cDark + cBlue + cGray; // DarkBlueGray
// smuggle something cDarkBrown = wrd.cDark + cBrown; // DarkBrown
// smuggle something cDarkByzantium = wrd.cDark + wrd.cByzantium; // DarkByzantium
// smuggle something cDarkCornflowerBlue = wrd.cDark + phn.cCor + bas.cnf + wrd.clower + cBlue; // DarkCornflowerBlue
// smuggle something cDarkCyan = wrd.cDark + cCyan; // DarkCyan
// smuggle something cDarkElectricBlue = wrd.cDark + wrd.cElectric + cBlue; // DarkElectricBlue
// smuggle something cDarkGoldenrod = wrd.cDark + cGold + bas.cen + bas.cro + bas.cd; // DarkGoldenrod
// smuggle something cDarkGreen = wrd.cDark + cGreen; // DarkGreen
// smuggle something cDarkGreenX11 = wrd.cDark + cGreen + bas.cX + num.c11; // DarkGreenX11
// smuggle something cDarkJungleGreen = wrd.cDark + bas.cJu + bas.cng + bas.cle + cGreen; // DarkJungleGreen
// smuggle something cDarkKhaki = wrd.cDark + wrd.cKhaki; // DarkKhaki
// smuggle something cDarkLava = wrd.cDark + bas.cLa + bas.cva; // DarkLava
// smuggle something cDarkLiver = wrd.cDark + wrd.cLiver; // DarkLiver
// smuggle something cDarkLiverHorses = wrd.cDark + wrd.cLiver + wrd.cHorses; // DarkLiverHorses
// smuggle something cDarkMagenta = wrd.cDark + cMagenta; // DarkMagenta
// smuggle something cDarkMossGreen = wrd.cDark + wrd.cMoss + cGreen; // DarkMossGreen
// smuggle something cDarkOliveGreen = wrd.cDark + cOlive + cGreen; // DarkOliveGreen
// smuggle something cDarkOrange = wrd.cDark + cOrange; // DarkOrange
// smuggle something cDarkOrchid = wrd.cDark + bas.cOr + phn.cchid; // DarkOrchid
// smuggle something cDarkPastelGreen = wrd.cDark + wrd.cPastel + cGreen; // DarkPastelGreen
// smuggle something cDarkPurple = wrd.cDark + cPurple; // DarkPurple
// smuggle something cDarkRed = wrd.cDark + cRed; // DarkRed
// smuggle something cDarkSalmon = wrd.cDark + bas.cSa + phn.clmon; // DarkSalmon
// smuggle something cDarkSeaGreen = wrd.cDark + wrd.cSea + cGreen; // DarkSeaGreen
// smuggle something cDarkSienna = wrd.cDark + cSienna; // DarkSienna
// smuggle something cDarkSkyBlue = wrd.cDark + wrd.cSky + cBlue; // DarkSkyBlue
// smuggle something cDarkSlateBlue = wrd.cDark + wrd.cSlate + cBlue; // DarkSlateBlue
// smuggle something cDarkSlateGray = wrd.cDark + wrd.cSlate + cGray; // DarkSlateGray
// smuggle something cDarkSpringGreen = wrd.cDark + wrd.cSpring + cGreen; // DarkSpringGreen
// smuggle something cDarkTurquoise = wrd.cDark + cTurquoise; // DarkTurquoise
// smuggle something cDarkViolet = wrd.cDark + cViolet; // DarkViolet
// smuggle something cDartmouthGreen = wrd.cDartmouth + cGreen; // DartmouthGreen
// smuggle something cDavysGrey = wrd.cDavys + cGrey; // DavysGrey
// smuggle something cDeepCerise = wrd.cDeep + wrd.cCerise; // DeepCerise
// smuggle something cDeepChampagne = wrd.cDeep + bas.cCh + phn.campagne; // DeepChampagne
// smuggle something cDeepChestnut = wrd.cDeep + wrd.cChestnut; // DeepChestnut
// smuggle something cDeepJungleGreen = wrd.cDeep + bas.cJu + bas.cng + bas.cle + cGreen; // DeepJungleGreen
// smuggle something cDeepPink = wrd.cDeep + cPink; // DeepPink
// smuggle something cDeepSaffron = wrd.cDeep + bas.cSa + phn.cffron; // DeepSaffron
// smuggle something cDeepSkyBlue = wrd.cDeep + wrd.cSky + cBlue; // DeepSkyBlue
// smuggle something cDeepSpaceSparkle = wrd.cDeep + wrd.cSpace + wrd.cSparkle; // DeepSpaceSparkle
// smuggle something cDeepTaupe = wrd.cDeep + cTaupe; // DeepTaupe
// smuggle something cDenim = bas.cDe + phn.cnim; // Denim
// smuggle something cDenimBlue = bas.cDe + phn.cnim + cBlue; // DenimBlue
// smuggle something cDesert = bas.cDe + phn.csert; // Desert
// smuggle something cDesertSand = bas.cDe + phn.csert + gen.cSan + bas.cd; // DesertSand
// smuggle something cDimGray = wrd.cDim + cGray; // DimGray
// smuggle something cDodgerBlue = wrd.cDodger + cBlue; // DodgerBlue
// smuggle something cDogwoodRose = wrd.cDogwood + cRose; // DogwoodRose
// smuggle something cDukeBlue = wrd.cDuke + cBlue; // DukeBlue
// smuggle something cDutchWhite = wrd.cDutch + cWhite; // DutchWhite
// smuggle something cEarthYellow = wrd.cEarth + cYellow; // EarthYellow
// smuggle something cEbony = wrd.cEbony; // Ebony
// smuggle something cEcru = bas.cEc + bas.cru; // Ecru
// smuggle something cEerieBlack = wrd.cEerie + cBlack; // EerieBlack
// smuggle something cEggplant = wrd.cEgg + bas.cpl + phn.cant; // Eggplant
// smuggle something cEggshell = wrd.cEgg + wrd.cshell; // Eggshell
// smuggle something cEgyptianBlue = ctr.cEgypt + phn.cian + cBlue; // EgyptianBlue
// smuggle something cElectricBlue = wrd.cElectric + cBlue; // ElectricBlue
// smuggle something cElectricGreen = wrd.cElectric + cGreen; // ElectricGreen
// smuggle something cElectricIndigo = wrd.cElectric + cIndigo; // ElectricIndigo
// smuggle something cElectricLime = wrd.cElectric + cLime; // ElectricLime
// smuggle something cElectricPurple = wrd.cElectric + cPurple; // ElectricPurple
// smuggle something cElectricViolet = wrd.cElectric + cViolet; // ElectricViolet
// smuggle something cEmerald = bas.cEm + phn.cerald; // Emerald
// smuggle something cEminence = bas.cEm + phn.cinen + bas.cce; // Eminence
// smuggle something cEnglishGreen = lng.cEnglish + cGreen; // EnglishGreen
// smuggle something cEnglishLavender = lng.cEnglish + cLavender; // EnglishLavender
// smuggle something cEnglishRed = lng.cEnglish + cRed; // EnglishRed
// smuggle something cEnglishVermillion = lng.cEnglish + phn.cVer + num.cmillion; // EnglishVermillion
// smuggle something cEnglishViolet = lng.cEnglish + cViolet; // EnglishViolet
// smuggle something cErin = bas.cEr + bas.cin; // Erin
// smuggle something cEtonBlue = wrd.cEton + cBlue; // EtonBlue
// smuggle something cFallow = bas.cFa + phn.cllow; // Fallow
// smuggle something cFaluRed = wrd.cFalu + cRed; // FaluRed
// smuggle something cFandangoPink = cFandango + cPink; // FandangoPink
// smuggle something cFashionFuchsia = wrd.cFashion + cFuchsia; // FashionFuchsia
// smuggle something cFawn = bas.cFa + bas.cwn; // Fawn
// smuggle something cFeldgrau = bas.cFe + bas.cld + bas.cgr + bas.cau; // Feldgrau
// smuggle something cFernGreen = wrd.cFern + cGreen; // FernGreen
// smuggle something cFieldDrab = wrd.cField + cDrab; // FieldDrab
// smuggle something cFieryRose = wrd.cFiery + cRose; // FieryRose
// smuggle something cFirebrick = wrd.cFire + wrd.cbrick; // Firebrick
// smuggle something cFireEngineRed = wrd.cFire + wrd.cEngine + cRed; // FireEngineRed
// smuggle something cFireOpal = wrd.cFire + bas.cOp + bas.cal; // FireOpal
// smuggle something cFlame = bas.cFl + phn.came; // Flame
// smuggle something cFlax = bas.cFl + bas.cax; // Flax
// smuggle something cFlirt = bas.cFl + bas.cir + bas.ct; // Flirt
// smuggle something cFloralWhite = wrd.cFloral + cWhite; // FloralWhite
// smuggle something cFluorescentBlue = wrd.cFluorescent + cBlue; // FluorescentBlue
// smuggle something cForestGreenCrayola = wrd.cForest + cGreen + wrd.cCrayola; // ForestGreenCrayola
// smuggle something cForestGreenTraditional = wrd.cForest + cGreen + wrd.cTraditional; // ForestGreenTraditional
// smuggle something cForestGreenWeb = wrd.cForest + cGreen + wrd.cWeb; // ForestGreenWeb
// smuggle something cFrenchBeige = lng.cFrench + cBeige; // FrenchBeige
// smuggle something cFrenchBistre = lng.cFrench + wrd.cBistre; // FrenchBistre
// smuggle something cFrenchBlue = lng.cFrench + cBlue; // FrenchBlue
// smuggle something cFrenchFuchsia = lng.cFrench + cFuchsia; // FrenchFuchsia
// smuggle something cFrenchLilac = lng.cFrench + cLilac; // FrenchLilac
// smuggle something cFrenchLime = lng.cFrench + cLime; // FrenchLime
// smuggle something cFrenchMauve = lng.cFrench + cMauve; // FrenchMauve
// smuggle something cFrenchPink = lng.cFrench + cPink; // FrenchPink
// smuggle something cFrenchRaspberry = lng.cFrench + bas.cRa + bas.csp + wrd.cberry; // FrenchRaspberry
// smuggle something cFrenchRose = lng.cFrench + cRose; // FrenchRose
// smuggle something cFrenchSkyBlue = lng.cFrench + wrd.cSky + cBlue; // FrenchSkyBlue
// smuggle something cFrenchViolet = lng.cFrench + cViolet; // FrenchViolet
// smuggle something cFrostbite = wrd.cFrost + wrd.cbite; // Frostbite
// smuggle something cFuchsiaCrayola = cFuchsia + wrd.cCrayola; // FuchsiaCrayola
// smuggle something cFuchsiaPurple = cFuchsia + cPurple; // FuchsiaPurple
// smuggle something cFuchsiaRose = cFuchsia + cRose; // FuchsiaRose
// smuggle something cFulvous = phn.cFul + bas.cvo + bas.cus; // Fulvous
// smuggle something cFuzzyWuzzy = wrd.cFuzzy + wrd.cWuzzy; // FuzzyWuzzy
// smuggle something cGainsboro = wrd.cGain + bas.csb + bas.cor + bas.co; // Gainsboro
// smuggle something cGamboge = bas.cGa + bas.cmb + bas.cog + bas.ce; // Gamboge
// smuggle something cGenericViridian = wrd.cGeneric + cViridian; // GenericViridian
// smuggle something cGhostWhite = wrd.cGhost + cWhite; // GhostWhite
// smuggle something cGlaucous = bas.cGl + bas.cau + bas.cco + bas.cus; // Glaucous
// smuggle something cGlossyGrape = wrd.cGlossy + bas.cGr + phn.cape; // GlossyGrape
// smuggle something cGOGreen = bas.cGO + cGreen; // GOGreen
// smuggle something cGoldMetallic = cGold + wrd.cMetallic; // GoldMetallic
// smuggle something cGoldWebGolden = cGold + wrd.cWeb + cGold + bas.cen; // GoldWebGolden
// smuggle something cGoldCrayola = cGold + wrd.cCrayola; // GoldCrayola
// smuggle something cGoldFusion = cGold + wrd.cFusion; // GoldFusion
// smuggle something cGoldenBrown = cGold + bas.cen + cBrown; // GoldenBrown
// smuggle something cGoldenPoppy = cGold + bas.cen + wrd.cPoppy; // GoldenPoppy
// smuggle something cGoldenYellow = cGold + bas.cen + cYellow; // GoldenYellow
// smuggle something cGoldenrod = cGold + bas.cen + bas.cro + bas.cd; // Goldenrod
// smuggle something cGraniteGray = wrd.cGranite + cGray; // GraniteGray
// smuggle something cGrannySmithApple = wrd.cGranny + wrd.cSmith + wrd.cApple; // GrannySmithApple
// smuggle something cGrayWeb = cGray + wrd.cWeb; // GrayWeb
// smuggle something cGrayX11 = cGray + bas.cX + num.c11; // GrayX11
// smuggle something cGreenCrayola = cGreen + wrd.cCrayola; // GreenCrayola
// smuggle something cGreenWeb = cGreen + wrd.cWeb; // GreenWeb
// smuggle something cGreenMunsell = cGreen + wrd.cMunsell; // GreenMunsell
// smuggle something cGreenNCS = cGreen + phn.cNCS; // GreenNCS
// smuggle something cGreenPantone = cGreen + wrd.cPantone; // GreenPantone
// smuggle something cGreenPigment = cGreen + wrd.cPigment; // GreenPigment
// smuggle something cGreenRYB = cGreen + phn.cRYB; // GreenRYB
// smuggle something cGreenBlue = cGreen + cBlue; // GreenBlue
// smuggle something cGreenBlueCrayola = cGreen + cBlue + wrd.cCrayola; // GreenBlueCrayola
// smuggle something cGreenCyan = cGreen + cCyan; // GreenCyan
// smuggle something cGreenLizard = cGreen + wrd.cLizard; // GreenLizard
// smuggle something cGreenSheen = cGreen + wrd.cSheen; // GreenSheen
// smuggle something cGreenYellow = cGreen + cYellow; // GreenYellow
// smuggle something cGreenYellowCrayola = cGreen + cYellow + wrd.cCrayola; // GreenYellowCrayola
// smuggle something cGrullo = bas.cGr + phn.cull + bas.co; // Grullo
// smuggle something cGunmetal = wrd.cGun + wrd.cmeta + bas.cl; // Gunmetal
// smuggle something cHanBlue = bas.cHa + bas.cnB + phn.clue; // HanBlue
// smuggle something cHanPurple = bas.cHa + bas.cnP + phn.curple; // HanPurple
// smuggle something cHansaYellow = bas.cHa + bas.cns + bas.caY + phn.cellow; // HansaYellow
// smuggle something cHarlequin = bas.cHa + bas.crl + phn.cequ + bas.cin; // Harlequin
// smuggle something cHarvestGold = wrd.cHarvest + cGold; // HarvestGold
// smuggle something cHeatWave = wrd.cHeat + wrd.cWave; // HeatWave
// smuggle something cHeliotrope = bas.cHe + bas.cli + bas.cot + bas.cro + bas.cpe; // Heliotrope
// smuggle something cHeliotropeGray = bas.cHe + bas.cli + bas.cot + bas.cro + bas.cpe + cGray; // HeliotropeGray
// smuggle something cHollywoodCerise = wrd.cHollywood + wrd.cCerise; // HollywoodCerise
// smuggle something cHoneydew = wrd.cHoney + wrd.cdew; // Honeydew
// smuggle something cHonoluluBlue = wrd.cHonolulu + cBlue; // HonoluluBlue
// smuggle something cHookersGreen = wrd.cHookers + cGreen; // HookersGreen
// smuggle something cHotMagenta = wrd.cHot + cMagenta; // HotMagenta
// smuggle something cHotPink = wrd.cHot + cPink; // HotPink
// smuggle something cHunterGreen = wrd.cHunter + cGreen; // HunterGreen
// smuggle something cIceberg = wrd.cIce + phn.cber + bas.cg; // Iceberg
// smuggle something cIcterine = bas.cIc + phn.cter + phn.cine; // Icterine
// smuggle something cIlluminatingEmerald = wrd.cIlluminating + bas.cEm + phn.cerald; // IlluminatingEmerald
// smuggle something cImperialRed = wrd.cImperial + cRed; // ImperialRed
// smuggle something cInchworm = bas.cIn + bas.cch + wrd.cworm; // Inchworm
// smuggle something cIndependence = wrd.cIndependence; // Independence
// smuggle something cIndiaGreen = gen.cIndia + cGreen; // IndiaGreen
// smuggle something cIndianRed = wrd.cIndian + cRed; // IndianRed
// smuggle something cIndianYellow = wrd.cIndian + cYellow; // IndianYellow
// smuggle something cIndigoDye = cIndigo + wrd.cDye; // IndigoDye
// smuggle something cInternationalOrangeAerospace = wrd.cInternational + cOrange + wrd.cAerospace; // InternationalOrangeAerospace
// smuggle something cInternationalOrangeEngineering = wrd.cInternational + cOrange + wrd.cEngineering; // InternationalOrangeEngineering
// smuggle something cInternationalOrangeGoldenGateBridge = wrd.cInternational + cOrange + cGold + bas.cen + wrd.cGate + wrd.cBridge; // InternationalOrangeGoldenGateBridge
// smuggle something cIris = bas.cIr + bas.cis; // Iris
// smuggle something cIrresistible = bas.cIr + phn.cres + phn.cist + bas.cib + bas.cle; // Irresistible
// smuggle something cIsabelline = bas.cIs + bas.cab + phn.cell + phn.cine; // Isabelline
// smuggle something cItalianSkyBlue = lng.cItalian + wrd.cSky + cBlue; // ItalianSkyBlue
// smuggle something cIvory = bas.cIv + bas.cor + bas.cy; // Ivory
// smuggle something cJade = bas.cJa + bas.cde; // Jade
// smuggle something cJapaneseCarmine = lng.cJapanese + wrd.cCarmine; // JapaneseCarmine
// smuggle something cJapaneseViolet = lng.cJapanese + cViolet; // JapaneseViolet
// smuggle something cJasmine = bas.cJa + bas.csm + phn.cine; // Jasmine
// smuggle something cJazzberryJam = wrd.cJazz + wrd.cberry + wrd.cJam; // JazzberryJam
// smuggle something cJet = bas.cJe + bas.ct; // Jet
// smuggle something cJonquil = bas.cJo + bas.cnq + bas.cui + bas.cl; // Jonquil
// smuggle something cJuneBud = gen.cJune + wrd.cBud; // JuneBud
// smuggle something cJungleGreen = bas.cJu + bas.cng + bas.cle + cGreen; // JungleGreen
// smuggle something cKellyGreen = wrd.cKelly + cGreen; // KellyGreen
// smuggle something cKeppel = bas.cKe + bas.cpp + bas.cel; // Keppel
// smuggle something cKeyLime = wrd.cKey + cLime; // KeyLime
// smuggle something cKhakiWeb = wrd.cKhaki + wrd.cWeb; // KhakiWeb
// smuggle something cKhakiX11 = wrd.cKhaki + bas.cX + num.c11; // KhakiX11
// smuggle something cKobe = bas.cKo + bas.cbe; // Kobe
// smuggle something cKobi = bas.cKo + bas.cbi; // Kobi
// smuggle something cKobicha = bas.cKo + bas.cbi + phn.ccha; // Kobicha
// smuggle something cKombuGreen = wrd.cKombu + cGreen; // KombuGreen
// smuggle something cKSUPurple = bas.cKS + bas.cUP + phn.curple; // KSUPurple
// smuggle something cLanguidLavender = wrd.cLanguid + cLavender; // LanguidLavender
// smuggle something cLapisLazuli = wrd.cLapis + wrd.cLazuli; // LapisLazuli
// smuggle something cLaserLemon = wrd.cLaser + cLemon; // LaserLemon
// smuggle something cLaurelGreen = wrd.cLaurel + cGreen; // LaurelGreen
// smuggle something cLava = bas.cLa + bas.cva; // Lava
// smuggle something cLavenderFloral = cLavender + wrd.cFloral; // LavenderFloral
// smuggle something cLavenderWeb = cLavender + wrd.cWeb; // LavenderWeb
// smuggle something cLavenderBlue = cLavender + cBlue; // LavenderBlue
// smuggle something cLavenderBlush = cLavender + wrd.cBlush; // LavenderBlush
// smuggle something cLavenderGray = cLavender + cGray; // LavenderGray
// smuggle something cLawnGreen = wrd.cLawn + cGreen; // LawnGreen
// smuggle something cLemonChiffon = cLemon + gen.cChi + bas.cff + bas.con; // LemonChiffon
// smuggle something cLemonCurry = cLemon + wrd.cCurry; // LemonCurry
// smuggle something cLemonGlacier = cLemon + wrd.cGlacier; // LemonGlacier
// smuggle something cLemonMeringue = cLemon + wrd.cMeringue; // LemonMeringue
// smuggle something cLemonYellow = cLemon + cYellow; // LemonYellow
// smuggle something cLemonYellowCrayola = cLemon + cYellow + wrd.cCrayola; // LemonYellowCrayola
// smuggle something cLiberty = bas.cLi + phn.cber + bas.cty; // Liberty
// smuggle something cLightBlue = wrd.cLight + cBlue; // LightBlue
// smuggle something cLightCoral = wrd.cLight + wrd.cCoral; // LightCoral
// smuggle something cLightCornflowerBlue = wrd.cLight + phn.cCor + bas.cnf + wrd.clower + cBlue; // LightCornflowerBlue
// smuggle something cLightCyan = wrd.cLight + cCyan; // LightCyan
// smuggle something cLightFrenchBeige = wrd.cLight + lng.cFrench + cBeige; // LightFrenchBeige
// smuggle something cLightGoldenrodYellow = wrd.cLight + cGold + bas.cen + bas.cro + bas.cd + cYellow; // LightGoldenrodYellow
// smuggle something cLightGray = wrd.cLight + cGray; // LightGray
// smuggle something cLightGreen = wrd.cLight + cGreen; // LightGreen
// smuggle something cLightOrange = wrd.cLight + cOrange; // LightOrange
// smuggle something cLightPeriwinkle = wrd.cLight + phn.cPer + bas.ciw + phn.cinkle; // LightPeriwinkle
// smuggle something cLightPink = wrd.cLight + cPink; // LightPink
// smuggle something cLightSalmon = wrd.cLight + bas.cSa + phn.clmon; // LightSalmon
// smuggle something cLightSeaGreen = wrd.cLight + wrd.cSea + cGreen; // LightSeaGreen
// smuggle something cLightSkyBlue = wrd.cLight + wrd.cSky + cBlue; // LightSkyBlue
// smuggle something cLightSlateGray = wrd.cLight + wrd.cSlate + cGray; // LightSlateGray
// smuggle something cLightSteelBlue = wrd.cLight + wrd.cSteel + cBlue; // LightSteelBlue
// smuggle something cLightYellow = wrd.cLight + cYellow; // LightYellow
// smuggle something cLilacLuster = cLilac + wrd.cLuster; // LilacLuster
// smuggle something cLimeColorWheel = cLime + wrd.cColor + wrd.cWheel; // LimeColorWheel
// smuggle something cLimeWeb = cLime + wrd.cWeb; // LimeWeb
// smuggle something cLimeGreen = cLime + cGreen; // LimeGreen
// smuggle something cLincolnGreen = wrd.cLincoln + cGreen; // LincolnGreen
// smuggle something cLinen = wrd.cLine + bas.cn; // Linen
// smuggle something cLion = bas.cLi + bas.con; // Lion
// smuggle something cLiseranPurple = wrd.cLiseran + cPurple; // LiseranPurple
// smuggle something cLittleBoyBlue = wrd.cLittle + wrd.cBoy + cBlue; // LittleBoyBlue
// smuggle something cLiver = wrd.cLiver; // Liver
// smuggle something cLiverDogs = wrd.cLiver + wrd.cDogs; // LiverDogs
// smuggle something cLiverOrgan = wrd.cLiver + wrd.cOrgan; // LiverOrgan
// smuggle something cLiverChestnut = wrd.cLiver + wrd.cChestnut; // LiverChestnut
// smuggle something cLivid = bas.cLi + phn.cvid; // Livid
// smuggle something cMacaroniAndCheese = wrd.cMacaroni + wrd.cAnd + wrd.cCheese; // MacaroniAndCheese
// smuggle something cMadderLake = wrd.cMadder + wrd.cLake; // MadderLake
// smuggle something cMagentaCrayola = cMagenta + wrd.cCrayola; // MagentaCrayola
// smuggle something cMagentaDye = cMagenta + wrd.cDye; // MagentaDye
// smuggle something cMagentaPantone = cMagenta + wrd.cPantone; // MagentaPantone
// smuggle something cMagentaProcess = cMagenta + wrd.cProcess; // MagentaProcess
// smuggle something cMagentaHaze = cMagenta + wrd.cHaze; // MagentaHaze
// smuggle something cMagicMint = wrd.cMagic + gen.cMin + bas.ct; // MagicMint
// smuggle something cMagnolia = bas.cMa + bas.cgn + bas.col + bas.cia; // Magnolia
// smuggle something cMahogany = bas.cMa + bas.cho + phn.cgan + bas.cy; // Mahogany
// smuggle something cMaize = bas.cMa + phn.cize; // Maize
// smuggle something cMaizeCrayola = bas.cMa + phn.cize + wrd.cCrayola; // MaizeCrayola
// smuggle something cMajorelleBlue = wrd.cMajorelle + cBlue; // MajorelleBlue
// smuggle something cMalachite = bas.cMa + phn.clac + phn.chite; // Malachite
// smuggle something cManatee = wrd.cMan + phn.cate + bas.ce; // Manatee
// smuggle something cMandarin = wrd.cMan + bas.cda + phn.crin; // Mandarin
// smuggle something cMango = wrd.cMan + bas.cgo; // Mango
// smuggle something cMangoTango = wrd.cMan + bas.cgo + gen.cTango; // MangoTango
// smuggle something cMantis = wrd.cMan + phn.ctis; // Mantis
// smuggle something cMardiGras = bas.cMa + bas.crd + bas.ciG + phn.cras; // MardiGras
// smuggle something cMarigold = bas.cMa + bas.cri + cgold; // Marigold
// smuggle something cMaroonCrayola = cMaroon + wrd.cCrayola; // MaroonCrayola
// smuggle something cMaroonWeb = cMaroon + wrd.cWeb; // MaroonWeb
// smuggle something cMaroonX11 = cMaroon + bas.cX + num.c11; // MaroonX11
// smuggle something cMauveTaupe = cMauve + cTaupe; // MauveTaupe
// smuggle something cMauvelous = cMauve + bas.clo + bas.cus; // Mauvelous
// smuggle something cMaximumBlue = wrd.cMaximum + cBlue; // MaximumBlue
// smuggle something cMaximumBlueGreen = wrd.cMaximum + cBlue + cGreen; // MaximumBlueGreen
// smuggle something cMaximumBluePurple = wrd.cMaximum + cBlue + cPurple; // MaximumBluePurple
// smuggle something cMaximumGreen = wrd.cMaximum + cGreen; // MaximumGreen
// smuggle something cMaximumGreenYellow = wrd.cMaximum + cGreen + cYellow; // MaximumGreenYellow
// smuggle something cMaximumPurple = wrd.cMaximum + cPurple; // MaximumPurple
// smuggle something cMaximumRed = wrd.cMaximum + cRed; // MaximumRed
// smuggle something cMaximumRedPurple = wrd.cMaximum + cRed + cPurple; // MaximumRedPurple
// smuggle something cMaximumYellow = wrd.cMaximum + cYellow; // MaximumYellow
// smuggle something cMaximumYellowRed = wrd.cMaximum + cYellow + cRed; // MaximumYellowRed
// smuggle something cMayGreen = gen.cMay + cGreen; // MayGreen
// smuggle something cMayaBlue = wrd.cMaya + cBlue; // MayaBlue
// smuggle something cMediumAquamarine = wrd.cMedium + cAqua + phn.cmar + phn.cine; // MediumAquamarine
// smuggle something cMediumBlue = wrd.cMedium + cBlue; // MediumBlue
// smuggle something cMediumCandyAppleRed = wrd.cMedium + wrd.cCan + bas.cdy + wrd.cApple + cRed; // MediumCandyAppleRed
// smuggle something cMediumCarmine = wrd.cMedium + wrd.cCarmine; // MediumCarmine
// smuggle something cMediumChampagne = wrd.cMedium + bas.cCh + phn.campagne; // MediumChampagne
// smuggle something cMediumOrchid = wrd.cMedium + bas.cOr + phn.cchid; // MediumOrchid
// smuggle something cMediumPurple = wrd.cMedium + cPurple; // MediumPurple
// smuggle something cMediumSeaGreen = wrd.cMedium + wrd.cSea + cGreen; // MediumSeaGreen
// smuggle something cMediumSlateBlue = wrd.cMedium + wrd.cSlate + cBlue; // MediumSlateBlue
// smuggle something cMediumSpringGreen = wrd.cMedium + wrd.cSpring + cGreen; // MediumSpringGreen
// smuggle something cMediumTurquoise = wrd.cMedium + cTurquoise; // MediumTurquoise
// smuggle something cMediumVioletRed = wrd.cMedium + cViolet + cRed; // MediumVioletRed
// smuggle something cMellowApricot = wrd.cMellow + wrd.cApricot; // MellowApricot
// smuggle something cMellowYellow = wrd.cMellow + cYellow; // MellowYellow
// smuggle something cMelon = bas.cMe + phn.clon; // Melon
// smuggle something cMetallicGold = wrd.cMetallic + cGold; // MetallicGold
// smuggle something cMetallicSeaweed = wrd.cMetallic + wrd.cSeaweed; // MetallicSeaweed
// smuggle something cMetallicSunburst = wrd.cMetallic + wrd.cSunburst; // MetallicSunburst
// smuggle something cMexicanPink = wrd.cMexican + cPink; // MexicanPink
// smuggle something cMiddleBlue = wrd.cMiddle + cBlue; // MiddleBlue
// smuggle something cMiddleBlueGreen = wrd.cMiddle + cBlue + cGreen; // MiddleBlueGreen
// smuggle something cMiddleBluePurple = wrd.cMiddle + cBlue + cPurple; // MiddleBluePurple
// smuggle something cMiddleGrey = wrd.cMiddle + cGrey; // MiddleGrey
// smuggle something cMiddleGreen = wrd.cMiddle + cGreen; // MiddleGreen
// smuggle something cMiddleGreenYellow = wrd.cMiddle + cGreen + cYellow; // MiddleGreenYellow
// smuggle something cMiddlePurple = wrd.cMiddle + cPurple; // MiddlePurple
// smuggle something cMiddleRed = wrd.cMiddle + cRed; // MiddleRed
// smuggle something cMiddleRedPurple = wrd.cMiddle + cRed + cPurple; // MiddleRedPurple
// smuggle something cMiddleYellow = wrd.cMiddle + cYellow; // MiddleYellow
// smuggle something cMiddleYellowRed = wrd.cMiddle + cYellow + cRed; // MiddleYellowRed
// smuggle something cMidnight = bas.cMi + bas.cdn + phn.cight; // Midnight
// smuggle something cMidnightBlue = bas.cMi + bas.cdn + phn.cight + cBlue; // MidnightBlue
// smuggle something cMidnightGreen = bas.cMi + bas.cdn + phn.cight + cGreen; // MidnightGreen
// smuggle something cMikadoYellow = wrd.cMikado + cYellow; // MikadoYellow
// smuggle something cMimiPink = wrd.cMimi + cPink; // MimiPink
// smuggle something cMindaro = gen.cMin + bas.cda + bas.cro; // Mindaro
// smuggle something cMing = gen.cMin + bas.cg; // Ming
// smuggle something cMinionYellow = wrd.cMinion + cYellow; // MinionYellow
// smuggle something cMint = gen.cMin + bas.ct; // Mint
// smuggle something cMintCream = gen.cMin + bas.ctC + phn.cream; // MintCream
// smuggle something cMintGreen = gen.cMin + bas.ctG + phn.creen; // MintGreen
// smuggle something cMistyMoss = wrd.cMisty + wrd.cMoss; // MistyMoss
// smuggle something cMistyRose = wrd.cMisty + cRose; // MistyRose
// smuggle something cModeBeige = wrd.cMode + cBeige; // ModeBeige
// smuggle something cMorningBlue = wrd.cMorning + cBlue; // MorningBlue
// smuggle something cMossGreen = wrd.cMoss + cGreen; // MossGreen
// smuggle something cMountainMeadow = wrd.cMountain + wrd.cMeadow; // MountainMeadow
// smuggle something cMountbattenPink = wrd.cMount + wrd.cbatten + cPink; // MountbattenPink
// smuggle something cMSUGreen = bas.cMS + bas.cUG + phn.creen; // MSUGreen
// smuggle something cMulberry = wrd.cMulberry; // Mulberry
// smuggle something cMulberryCrayola = wrd.cMulberry + wrd.cCrayola; // MulberryCrayola
// smuggle something cMustard = wrd.cMust + phn.card; // Mustard
// smuggle something cMyrtleGreen = wrd.cMyrtle + cGreen; // MyrtleGreen
// smuggle something cMystic = bas.cMy + phn.cstic; // Mystic
// smuggle something cMysticMaroon = bas.cMy + phn.cstic + cMaroon; // MysticMaroon
// smuggle something cNadeshikoPink = wrd.cNadeshiko + cPink; // NadeshikoPink
// smuggle something cNaplesYellow = wrd.cNaples + cYellow; // NaplesYellow
// smuggle something cNavajoWhite = wrd.cNavajo + cWhite; // NavajoWhite
// smuggle something cNavyBlue = wrd.cNavy + cBlue; // NavyBlue
// smuggle something cNavyBlueCrayola = wrd.cNavy + cBlue + wrd.cCrayola; // NavyBlueCrayola
// smuggle something cNeonBlue = wrd.cNeon + cBlue; // NeonBlue
// smuggle something cNeonCarrot = wrd.cNeon + wrd.cCarrot; // NeonCarrot
// smuggle something cNeonGreen = wrd.cNeon + cGreen; // NeonGreen
// smuggle something cNeonFuchsia = wrd.cNeon + cFuchsia; // NeonFuchsia
// smuggle something cNewYorkPink = wrd.cNew + wrd.cYork + cPink; // NewYorkPink
// smuggle something cNickel = bas.cNi + bas.cc + phn.ckel; // Nickel
// smuggle something cNonPhotoBlue = phn.cNon + wrd.cPhoto + cBlue; // NonPhotoBlue
// smuggle something cNyanza = bas.cNy + bas.can + bas.cza; // Nyanza
// smuggle something cOceanBlue = wrd.cOcean + cBlue; // OceanBlue
// smuggle something cOceanGreen = wrd.cOcean + cGreen; // OceanGreen
// smuggle something cOchre = bas.cOc + bas.chr + bas.ce; // Ochre
// smuggle something cOldBurgundy = wrd.cOld + bas.cBu + phn.crgundy; // OldBurgundy
// smuggle something cOldGold = wrd.cOld + cGold; // OldGold
// smuggle something cOldLace = wrd.cOld + wrd.cLace; // OldLace
// smuggle something cOldLavender = wrd.cOld + cLavender; // OldLavender
// smuggle something cOldMauve = wrd.cOld + cMauve; // OldMauve
// smuggle something cOldRose = wrd.cOld + cRose; // OldRose
// smuggle something cOldSilver = wrd.cOld + cSilver; // OldSilver
// smuggle something cOliveDrab3 = cOlive + cDrab + num.c3; // OliveDrab3
// smuggle something cOliveDrab7 = cOlive + cDrab + num.c7; // OliveDrab7
// smuggle something cOliveGreen = cOlive + cGreen; // OliveGreen
// smuggle something cOlivine = bas.cOl + bas.civ + phn.cine; // Olivine
// smuggle something cOnyx = bas.cOn + bas.cyx; // Onyx
// smuggle something cOpal = bas.cOp + bas.cal; // Opal
// smuggle something cOperaMauve = wrd.cOpera + cMauve; // OperaMauve
// smuggle something cOrangeCrayola = cOrange + wrd.cCrayola; // OrangeCrayola
// smuggle something cOrangePantone = cOrange + wrd.cPantone; // OrangePantone
// smuggle something cOrangeWeb = cOrange + wrd.cWeb; // OrangeWeb
// smuggle something cOrangePeel = cOrange + wrd.cPeel; // OrangePeel
// smuggle something cOrangeRed = cOrange + cRed; // OrangeRed
// smuggle something cOrangeRedCrayola = cOrange + cRed + wrd.cCrayola; // OrangeRedCrayola
// smuggle something cOrangeSoda = cOrange + wrd.cSoda; // OrangeSoda
// smuggle something cOrangeYellow = cOrange + cYellow; // OrangeYellow
// smuggle something cOrangeYellowCrayola = cOrange + cYellow + wrd.cCrayola; // OrangeYellowCrayola
// smuggle something cOrchid = bas.cOr + phn.cchid; // Orchid
// smuggle something cOrchidPink = bas.cOr + phn.cchid + cPink; // OrchidPink
// smuggle something cOrchidCrayola = bas.cOr + phn.cchid + wrd.cCrayola; // OrchidCrayola
// smuggle something cOuterSpaceCrayola = wrd.cOuter + wrd.cSpace + wrd.cCrayola; // OuterSpaceCrayola
// smuggle something cOutrageousOrange = wrd.cOutrageous + cOrange; // OutrageousOrange
// smuggle something cOxBlood = bas.cOx + wrd.cBlood; // OxBlood
// smuggle something cOxfordBlue = wrd.cOxford + cBlue; // OxfordBlue
// smuggle something cOUCrimsonRed = bas.cOU + cCrimson + cRed; // OUCrimsonRed
// smuggle something cPacificBlue = wrd.cPacific + cBlue; // PacificBlue
// smuggle something cPakistanGreen = ctr.cPakistan + cGreen; // PakistanGreen
// smuggle something cPalatinatePurple = wrd.cPalatinate + cPurple; // PalatinatePurple
// smuggle something cPaleAqua = wrd.cPale + cAqua; // PaleAqua
// smuggle something cPaleCerulean = wrd.cPale + bas.cCe + phn.crulean; // PaleCerulean
// smuggle something cPalePink = wrd.cPale + cPink; // PalePink
// smuggle something cPalePurplePantone = wrd.cPale + cPurple + wrd.cPantone; // PalePurplePantone
// smuggle something cPaleSilver = wrd.cPale + cSilver; // PaleSilver
// smuggle something cPaleSpringBud = wrd.cPale + wrd.cSpring + wrd.cBud; // PaleSpringBud
// smuggle something cPansyPurple = wrd.cPansy + cPurple; // PansyPurple
// smuggle something cPaoloVeroneseGreen = wrd.cPaolo + wrd.cVeronese + cGreen; // PaoloVeroneseGreen
// smuggle something cPapayaWhip = wrd.cPapaya + wrd.cWhip; // PapayaWhip
// smuggle something cParadisePink = wrd.cParadise + cPink; // ParadisePink
// smuggle something cParisGreen = wrd.cParis + cGreen; // ParisGreen
// smuggle something cPastelPink = wrd.cPastel + cPink; // PastelPink
// smuggle something cPatriarch = wrd.cPat + phn.cria + phn.crch; // Patriarch
// smuggle something cPaynesGrey = wrd.cPaynes + cGrey; // PaynesGrey
// smuggle something cPeachCrayola = cPeach + wrd.cCrayola; // PeachCrayola
// smuggle something cPeachPuff = cPeach + wrd.cPuff; // PeachPuff
// smuggle something cPear = bas.cPe + bas.car; // Pear
// smuggle something cPearlyPurple = wrd.cPearly + cPurple; // PearlyPurple
// smuggle something cPeriwinkle = phn.cPer + bas.ciw + phn.cinkle; // Periwinkle
// smuggle something cPeriwinkleCrayola = phn.cPer + bas.ciw + phn.cinkle + wrd.cCrayola; // PeriwinkleCrayola
// smuggle something cPermanentGeraniumLake = wrd.cPermanent + wrd.cGeranium + wrd.cLake; // PermanentGeraniumLake
// smuggle something cPersianBlue = wrd.cPersian + cBlue; // PersianBlue
// smuggle something cPersianGreen = wrd.cPersian + cGreen; // PersianGreen
// smuggle something cPersianIndigo = wrd.cPersian + cIndigo; // PersianIndigo
// smuggle something cPersianOrange = wrd.cPersian + cOrange; // PersianOrange
// smuggle something cPersianPink = wrd.cPersian + cPink; // PersianPink
// smuggle something cPersianPlum = wrd.cPersian + cPlum; // PersianPlum
// smuggle something cPersianRed = wrd.cPersian + cRed; // PersianRed
// smuggle something cPersianRose = wrd.cPersian + cRose; // PersianRose
// smuggle something cPersimmon = phn.cPer + phn.csim + phn.cmon; // Persimmon
// smuggle something cPewterBlue = wrd.cPewter + cBlue; // PewterBlue
// smuggle something cPhlox = bas.cPh + bas.clo + bas.cx; // Phlox
// smuggle something cPhthaloBlue = wrd.cPhthalo + cBlue; // PhthaloBlue
// smuggle something cPhthaloGreen = wrd.cPhthalo + cGreen; // PhthaloGreen
// smuggle something cPicoteeBlue = wrd.cPicotee + cBlue; // PicoteeBlue
// smuggle something cPictorialCarmine = wrd.cPictorial + wrd.cCarmine; // PictorialCarmine
// smuggle something cPiggyPink = wrd.cPiggy + cPink; // PiggyPink
// smuggle something cPineGreen = wrd.cPine + cGreen; // PineGreen
// smuggle something cPineTree = wrd.cPine + wrd.cTree; // PineTree
// smuggle something cPinkPantone = cPink + wrd.cPantone; // PinkPantone
// smuggle something cPinkFlamingo = cPink + wrd.cFlamingo; // PinkFlamingo
// smuggle something cPinkLace = cPink + wrd.cLace; // PinkLace
// smuggle something cPinkLavender = cPink + cLavender; // PinkLavender
// smuggle something cPinkSherbet = cPink + wrd.cSherbet; // PinkSherbet
// smuggle something cPistachio = bas.cPi + bas.cst + phn.cach + bas.cio; // Pistachio
// smuggle something cPlumWeb = cPlum + wrd.cWeb; // PlumWeb
// smuggle something cPlumpPurple = wrd.cPlump + cPurple; // PlumpPurple
// smuggle something cPolishedPine = wrd.cPolished + wrd.cPine; // PolishedPine
// smuggle something cPompAndPower = wrd.cPomp + wrd.cAnd + wrd.cPower; // PompAndPower
// smuggle something cPopstar = wrd.cPop + phn.cstar; // Popstar
// smuggle something cPortlandOrange = wrd.cPortland + cOrange; // PortlandOrange
// smuggle something cPowderBlue = wrd.cPowder + cBlue; // PowderBlue
// smuggle something cPrincetonOrange = wrd.cPrinceton + cOrange; // PrincetonOrange
// smuggle something cPrune = bas.cPr + phn.cune; // Prune
// smuggle something cPrussianBlue = wrd.cPrussian + cBlue; // PrussianBlue
// smuggle something cPsychedelicPurple = wrd.cPsychedelic + cPurple; // PsychedelicPurple
// smuggle something cPuce = bas.cPu + bas.cce; // Puce
// smuggle something cPullmanBrown = wrd.cPullman + cBrown; // PullmanBrown
// smuggle something cPumpkin = bas.cPu + bas.cmp + phn.ckin; // Pumpkin
// smuggle something cPurpleWeb = cPurple + wrd.cWeb; // PurpleWeb
// smuggle something cPurpleMunsell = cPurple + wrd.cMunsell; // PurpleMunsell
// smuggle something cPurpleX11 = cPurple + bas.cX + num.c11; // PurpleX11
// smuggle something cPurpleMountainMajesty = cPurple + wrd.cMountain + wrd.cMajesty; // PurpleMountainMajesty
// smuggle something cPurpleNavy = cPurple + wrd.cNavy; // PurpleNavy
// smuggle something cPurplePizzazz = cPurple + wrd.cPizzazz; // PurplePizzazz
// smuggle something cPurplePlum = cPurple + cPlum; // PurplePlum
// smuggle something cPurpureus = bas.cPu + bas.crp + phn.cure + bas.cus; // Purpureus
// smuggle something cQueenBlue = wrd.cQueen + cBlue; // QueenBlue
// smuggle something cQueenPink = wrd.cQueen + cPink; // QueenPink
// smuggle something cQuickSilver = wrd.cQuick + cSilver; // QuickSilver
// smuggle something cQuinacridoneMagenta = wrd.cQuinacridone + cMagenta; // QuinacridoneMagenta
// smuggle something cRadicalRed = wrd.cRadical + cRed; // RadicalRed
// smuggle something cRaisinBlack = wrd.cRaisin + cBlack; // RaisinBlack
// smuggle something cRajah = bas.cRa + bas.cja + bas.ch; // Rajah
// smuggle something cRaspberry = bas.cRa + bas.csp + wrd.cberry; // Raspberry
// smuggle something cRaspberryGlace = bas.cRa + bas.csp + wrd.cberry + wrd.cGlace; // RaspberryGlace
// smuggle something cRaspberryRose = bas.cRa + bas.csp + wrd.cberry + cRose; // RaspberryRose
// smuggle something cRawSienna = wrd.cRaw + cSienna; // RawSienna
// smuggle something cRawUmber = wrd.cRaw + cUmber; // RawUmber
// smuggle something cRazzleDazzleRose = wrd.cRazzle + wrd.cDazzle + cRose; // RazzleDazzleRose
// smuggle something cRazzmatazz = bas.cRa + bas.czz + wrd.cmat + phn.cazz; // Razzmatazz
// smuggle something cRazzmicBerry = wrd.cRazzmic + wrd.cBerry; // RazzmicBerry
// smuggle something cRebeccaPurple = wrd.cRebecca + cPurple; // RebeccaPurple
// smuggle something cRedCrayola = cRed + wrd.cCrayola; // RedCrayola
// smuggle something cRedMunsell = cRed + wrd.cMunsell; // RedMunsell
// smuggle something cRedNCS = cRed + phn.cNCS; // RedNCS
// smuggle something cRedPantone = cRed + wrd.cPantone; // RedPantone
// smuggle something cRedPigment = cRed + wrd.cPigment; // RedPigment
// smuggle something cRedRYB = cRed + phn.cRYB; // RedRYB
// smuggle something cRedOrange = cRed + cOrange; // RedOrange
// smuggle something cRedOrangeCrayola = cRed + cOrange + wrd.cCrayola; // RedOrangeCrayola
// smuggle something cRedOrangeColorWheel = cRed + cOrange + wrd.cColor + wrd.cWheel; // RedOrangeColorWheel
// smuggle something cRedPurple = cRed + cPurple; // RedPurple
// smuggle something cRedSalsa = cRed + wrd.cSalsa; // RedSalsa
// smuggle something cRedViolet = cRed + cViolet; // RedViolet
// smuggle something cRedVioletCrayola = cRed + cViolet + wrd.cCrayola; // RedVioletCrayola
// smuggle something cRedVioletColorWheel = cRed + cViolet + wrd.cColor + wrd.cWheel; // RedVioletColorWheel
// smuggle something cRedwood = cRed + wrd.cwood; // Redwood
// smuggle something cResolutionBlue = wrd.cResolution + cBlue; // ResolutionBlue
// smuggle something cRhythm = bas.cRh + bas.cyt + bas.chm; // Rhythm
// smuggle something cRichBlack = wrd.cRich + cBlack; // RichBlack
// smuggle something cRichBlackFOGRA29 = wrd.cRich + cBlack + bas.cFO + bas.cGR + bas.cA + num.c29; // RichBlackFOGRA29
// smuggle something cRichBlackFOGRA39 = wrd.cRich + cBlack + bas.cFO + bas.cGR + bas.cA + num.c39; // RichBlackFOGRA39
// smuggle something cRifleGreen = wrd.cRifle + cGreen; // RifleGreen
// smuggle something cRobinEggBlue = wrd.cRobin + wrd.cEgg + cBlue; // RobinEggBlue
// smuggle something cRocketMetallic = wrd.cRocket + wrd.cMetallic; // RocketMetallic
// smuggle something cRomanSilver = wrd.cRoman + cSilver; // RomanSilver
// smuggle something cRoseBonbon = cRose + wrd.cBonbon; // RoseBonbon
// smuggle something cRoseDust = cRose + wrd.cDust; // RoseDust
// smuggle something cRoseEbony = cRose + wrd.cEbony; // RoseEbony
// smuggle something cRoseMadder = cRose + wrd.cMadder; // RoseMadder
// smuggle something cRosePink = cRose + cPink; // RosePink
// smuggle something cRoseQuartz = cRose + wrd.cQuartz; // RoseQuartz
// smuggle something cRoseRed = cRose + cRed; // RoseRed
// smuggle something cRoseTaupe = cRose + cTaupe; // RoseTaupe
// smuggle something cRoseVale = cRose + wrd.cVale; // RoseVale
// smuggle something cRosewood = cRose + wrd.cwood; // Rosewood
// smuggle something cRossoCorsa = wrd.cRosso + wrd.cCorsa; // RossoCorsa
// smuggle something cRosyBrown = wrd.cRosy + cBrown; // RosyBrown
// smuggle something cRoyalBlueDark = wrd.cRoyal + cBlue + wrd.cDark; // RoyalBlueDark
// smuggle something cRoyalBlueLight = wrd.cRoyal + cBlue + wrd.cLight; // RoyalBlueLight
// smuggle something cRoyalPurple = wrd.cRoyal + cPurple; // RoyalPurple
// smuggle something cRoyalYellow = wrd.cRoyal + cYellow; // RoyalYellow
// smuggle something cRuber = wrd.cRub + bas.cer; // Ruber
// smuggle something cRubineRed = wrd.cRubine + cRed; // RubineRed
// smuggle something cRubyRed = cRuby + cRed; // RubyRed
// smuggle something cRufous = bas.cRu + bas.cfo + bas.cus; // Rufous
// smuggle something cRusset = bas.cRu + bas.css + bas.cet; // Russet
// smuggle something cRussianGreen = lng.cRussian + cGreen; // RussianGreen
// smuggle something cRussianViolet = lng.cRussian + cViolet; // RussianViolet
// smuggle something cRust = bas.cRu + bas.cst; // Rust
// smuggle something cRustyRed = bas.cRu + phn.csty + cRed; // RustyRed
// smuggle something cSacramentoStateGreen = wrd.cSacramento + wrd.cState + cGreen; // SacramentoStateGreen
// smuggle something cSaddleBrown = wrd.cSaddle + cBrown; // SaddleBrown
// smuggle something cSafetyOrange = wrd.cSafety + cOrange; // SafetyOrange
// smuggle something cBlazeOrange = wrd.cBlaze + cOrange; // BlazeOrange
// smuggle something cSafetyYellow = wrd.cSafety + cYellow; // SafetyYellow
// smuggle something cSaffron = bas.cSa + phn.cffron; // Saffron
// smuggle something cSage = bas.cSa + bas.cge; // Sage
// smuggle something cStPatricksBlue = bas.cSt + wrd.cPatricks + cBlue; // StPatricksBlue
// smuggle something cSalmon = bas.cSa + phn.clmon; // Salmon
// smuggle something cSalmonPink = bas.cSa + phn.clmon + cPink; // SalmonPink
// smuggle something cSand = gen.cSan + bas.cd; // Sand
// smuggle something cSandDune = gen.cSan + bas.cdD + phn.cune; // SandDune
// smuggle something cSandyBrown = wrd.cSandy + cBrown; // SandyBrown
// smuggle something cSapGreen = wrd.cSap + cGreen; // SapGreen
// smuggle something cSapphireBlue = cSapphire + cBlue; // SapphireBlue
// smuggle something cSapphireCrayola = cSapphire + wrd.cCrayola; // SapphireCrayola
// smuggle something cSatinSheenGold = wrd.cSatin + wrd.cSheen + cGold; // SatinSheenGold
// smuggle something cSchaussPink = wrd.cSchauss + cPink; // SchaussPink
// smuggle something cSchoolBusYellow = wrd.cSchool + wrd.cBus + cYellow; // SchoolBusYellow
// smuggle something cScreaminGreen = wrd.cScreamin + cGreen; // ScreaminGreen
// smuggle something cSeaGreen = wrd.cSea + cGreen; // SeaGreen
// smuggle something cSeaGreenCrayola = wrd.cSea + cGreen + wrd.cCrayola; // SeaGreenCrayola
// smuggle something cSealBrown = wrd.cSeal + cBrown; // SealBrown
// smuggle something cSeashell = wrd.cSea + wrd.cshell; // Seashell
// smuggle something cSelectiveYellow = wrd.cSelective + cYellow; // SelectiveYellow
// smuggle something cSepia = bas.cSe + phn.cpia; // Sepia
// smuggle something cShadow = phn.cSha + phn.cdow; // Shadow
// smuggle something cShadowBlue = phn.cSha + phn.cdow + cBlue; // ShadowBlue
// smuggle something cShamrockGreen = wrd.cShamrock + cGreen; // ShamrockGreen
// smuggle something cSheenGreen = wrd.cSheen + cGreen; // SheenGreen
// smuggle something cShimmeringBlush = wrd.cShimmering + wrd.cBlush; // ShimmeringBlush
// smuggle something cShinyShamrock = wrd.cShiny + wrd.cShamrock; // ShinyShamrock
// smuggle something cShockingPink = wrd.cShocking + cPink; // ShockingPink
// smuggle something cShockingPinkCrayola = wrd.cShocking + cPink + wrd.cCrayola; // ShockingPinkCrayola
// smuggle something cSilverCrayola = cSilver + wrd.cCrayola; // SilverCrayola
// smuggle something cSilverMetallic = cSilver + wrd.cMetallic; // SilverMetallic
// smuggle something cSilverChalice = cSilver + wrd.cChalice; // SilverChalice
// smuggle something cSilverPink = cSilver + cPink; // SilverPink
// smuggle something cSilverSand = cSilver + gen.cSan + bas.cd; // SilverSand
// smuggle something cSinopia = bas.cSi + bas.cno + phn.cpia; // Sinopia
// smuggle something cSizzlingRed = wrd.cSizzling + cRed; // SizzlingRed
// smuggle something cSizzlingSunrise = wrd.cSizzling + wrd.cSunrise; // SizzlingSunrise
// smuggle something cSkobeloff = bas.cSk + phn.cobe + bas.clo + bas.cff; // Skobeloff
// smuggle something cSkyBlue = wrd.cSky + cBlue; // SkyBlue
// smuggle something cSkyBlueCrayola = wrd.cSky + cBlue + wrd.cCrayola; // SkyBlueCrayola
// smuggle something cSkyMagenta = wrd.cSky + cMagenta; // SkyMagenta
// smuggle something cSlateBlue = wrd.cSlate + cBlue; // SlateBlue
// smuggle something cSlateGray = wrd.cSlate + cGray; // SlateGray
// smuggle something cSlimyGreen = wrd.cSlimy + cGreen; // SlimyGreen
// smuggle something cSmitten = bas.cSm + bas.cit + num.cten; // Smitten
// smuggle something cSmokyBlack = wrd.cSmoky + cBlack; // SmokyBlack
// smuggle something cSnow = bas.cSn + bas.cow; // Snow
// smuggle something cSolidPink = wrd.cSolid + cPink; // SolidPink
// smuggle something cSonicSilver = wrd.cSonic + cSilver; // SonicSilver
// smuggle something cSpaceCadet = wrd.cSpace + wrd.cCadet; // SpaceCadet
// smuggle something cSpanishBistre = lng.cSpanish + wrd.cBistre; // SpanishBistre
// smuggle something cSpanishBlue = lng.cSpanish + cBlue; // SpanishBlue
// smuggle something cSpanishCarmine = lng.cSpanish + wrd.cCarmine; // SpanishCarmine
// smuggle something cSpanishGray = lng.cSpanish + cGray; // SpanishGray
// smuggle something cSpanishGreen = lng.cSpanish + cGreen; // SpanishGreen
// smuggle something cSpanishOrange = lng.cSpanish + cOrange; // SpanishOrange
// smuggle something cSpanishPink = lng.cSpanish + cPink; // SpanishPink
// smuggle something cSpanishRed = lng.cSpanish + cRed; // SpanishRed
// smuggle something cSpanishSkyBlue = lng.cSpanish + wrd.cSky + cBlue; // SpanishSkyBlue
// smuggle something cSpanishViolet = lng.cSpanish + cViolet; // SpanishViolet
// smuggle something cSpanishViridian = lng.cSpanish + cViridian; // SpanishViridian
// smuggle something cSpringBud = wrd.cSpring + wrd.cBud; // SpringBud
// smuggle something cSpringFrost = wrd.cSpring + wrd.cFrost; // SpringFrost
// smuggle something cSpringGreen = wrd.cSpring + cGreen; // SpringGreen
// smuggle something cSpringGreenCrayola = wrd.cSpring + cGreen + wrd.cCrayola; // SpringGreenCrayola
// smuggle something cStarCommandBlue = wrd.cStar + wrd.cCommand + cBlue; // StarCommandBlue
// smuggle something cSteelBlue = wrd.cSteel + cBlue; // SteelBlue
// smuggle something cSteelPink = wrd.cSteel + cPink; // SteelPink
// smuggle something cSteelTeal = wrd.cSteel + cTeal; // SteelTeal
// smuggle something cStilDeGrainYellow = wrd.cStil + bas.cDe + wrd.cGrain + cYellow; // StilDeGrainYellow
// smuggle something cStraw = bas.cSt + phn.craw; // Straw
// smuggle something cSugarPlum = wrd.cSugar + cPlum; // SugarPlum
// smuggle something cSunglow = wrd.cSun + wrd.cglow; // Sunglow
// smuggle something cSunray = wrd.cSun + phn.cray; // Sunray
// smuggle something cSunset = wrd.cSuns + bas.cet; // Sunset
// smuggle something cSuperPink = wrd.cSuper + cPink; // SuperPink
// smuggle something cSweetBrown = wrd.cSweet + cBrown; // SweetBrown
// smuggle something cTanCrayola = cTan + wrd.cCrayola; // TanCrayola
// smuggle something cTangoPink = gen.cTango + cPink; // TangoPink
// smuggle something cTartOrange = phn.cTart + cOrange; // TartOrange
// smuggle something cTaupeGray = cTaupe + cGray; // TaupeGray
// smuggle something cTeaGreen = wrd.cTea + cGreen; // TeaGreen
// smuggle something cTeaRose = wrd.cTea + cRose; // TeaRose
// smuggle something cTeaRoseWeb = wrd.cTea + cRose + wrd.cWeb; // TeaRoseWeb
// smuggle something cTealBlue = cTeal + cBlue; // TealBlue
// smuggle something cTelemagenta = bas.cTe + bas.cle + cmagenta; // Telemagenta
// smuggle something cTawny = bas.cTa + bas.cwn + bas.cy; // Tawny
// smuggle something cTerraCotta = wrd.cTerra + wrd.cCotta; // TerraCotta
// smuggle something cThistle = wrd.cThis + phn.ctle; // Thistle
// smuggle something cThulianPink = wrd.cThulian + cPink; // ThulianPink
// smuggle something cTickleMePink = wrd.cTickle + bas.cMe + cPink; // TickleMePink
// smuggle something cTiffanyBlue = wrd.cTiffany + cBlue; // TiffanyBlue
// smuggle something cTimberwolf = wrd.cTimber + wrd.cwolf; // Timberwolf
// smuggle something cTitaniumYellow = cTitanium + cYellow; // TitaniumYellow
// smuggle something cTomato = bas.cTo + wrd.cmat + bas.co; // Tomato
// smuggle something cTropicalRainforest = wrd.cTropical + wrd.cRain + phn.cfore + bas.cst; // TropicalRainforest
// smuggle something cTrueBlue = gen.cTrue + cBlue; // TrueBlue
// smuggle something cTrypanBlue = wrd.cTrypan + cBlue; // TrypanBlue
// smuggle something cTuftsBlue = wrd.cTufts + cBlue; // TuftsBlue
// smuggle something cTumbleweed = wrd.cTumble + wrd.cweed; // Tumbleweed
// smuggle something cTurquoiseBlue = cTurquoise + cBlue; // TurquoiseBlue
// smuggle something cTurquoiseGreen = cTurquoise + cGreen; // TurquoiseGreen
// smuggle something cTurtleGreen = bas.cTu + bas.crt + bas.cle + cGreen; // TurtleGreen
// smuggle something cTuscanBrown = cTuscan + cBrown; // TuscanBrown
// smuggle something cTuscanRed = cTuscan + cRed; // TuscanRed
// smuggle something cTuscanTan = cTuscan + cTan; // TuscanTan
// smuggle something cTuscany = cTuscan + bas.cy; // Tuscany
// smuggle something cTwilightLavender = wrd.cTwilight + cLavender; // TwilightLavender
// smuggle something cTyrianPurple = wrd.cTyrian + cPurple; // TyrianPurple
// smuggle something cUABlue = bas.cUA + cBlue; // UABlue
// smuggle something cUARed = bas.cUA + cRed; // UARed
// smuggle something cUltramarine = wrd.cUltra + phn.cmar + phn.cine; // Ultramarine
// smuggle something cUltramarineBlue = wrd.cUltra + phn.cmar + phn.cine + cBlue; // UltramarineBlue
// smuggle something cUltraPink = wrd.cUltra + cPink; // UltraPink
// smuggle something cUltraRed = wrd.cUltra + cRed; // UltraRed
// smuggle something cUnbleachedSilk = wrd.cUnbleached + wrd.cSilk; // UnbleachedSilk
// smuggle something cUnitedNationsBlue = wrd.cUnited + wrd.cNations + cBlue; // UnitedNationsBlue
// smuggle something cUnmellowYellow = bas.cUn + phn.cmel + wrd.clow + cYellow; // UnmellowYellow
// smuggle something cUPForestGreen = bas.cUP + wrd.cForest + cGreen; // UPForestGreen
// smuggle something cUPMaroon = bas.cUP + cMaroon; // UPMaroon
// smuggle something cUpsdellRed = wrd.cUpsdell + cRed; // UpsdellRed
// smuggle something cUranianBlue = wrd.cUranian + cBlue; // UranianBlue
// smuggle something cUSAFABlue = bas.cUS + bas.cAF + bas.cAB + phn.clue; // USAFABlue
// smuggle something cVanDykeBrown = wrd.cVan + wrd.cDyke + cBrown; // VanDykeBrown
// smuggle something cVanillaIce = cVanilla + wrd.cIce; // VanillaIce
// smuggle something cVegasGold = wrd.cVegas + cGold; // VegasGold
// smuggle something cVenetianRed = wrd.cVenetian + cRed; // VenetianRed
// smuggle something cVerdigris = phn.cVer + wrd.cdig + phn.cris; // Verdigris
// smuggle something cVermilionWeb = cVermilion + wrd.cWeb; // VermilionWeb
// smuggle something cVeronica = phn.cVer + bas.con + phn.cica; // Veronica
// smuggle something cVioletColorWheel = cViolet + wrd.cColor + wrd.cWheel; // VioletColorWheel
// smuggle something cVioletCrayola = cViolet + wrd.cCrayola; // VioletCrayola
// smuggle something cVioletRYB = cViolet + phn.cRYB; // VioletRYB
// smuggle something cVioletWeb = cViolet + wrd.cWeb; // VioletWeb
// smuggle something cVioletBlue = cViolet + cBlue; // VioletBlue
// smuggle something cVioletBlueCrayola = cViolet + cBlue + wrd.cCrayola; // VioletBlueCrayola
// smuggle something cVioletRed = cViolet + cRed; // VioletRed
// smuggle something cViridianGreen = cViridian + cGreen; // ViridianGreen
// smuggle something cVividBurgundy = wrd.cVivid + bas.cBu + phn.crgundy; // VividBurgundy
// smuggle something cVividSkyBlue = wrd.cVivid + wrd.cSky + cBlue; // VividSkyBlue
// smuggle something cVividTangerine = wrd.cVivid + cTangerine; // VividTangerine
// smuggle something cVividViolet = wrd.cVivid + cViolet; // VividViolet
// smuggle something cVolt = bas.cVo + bas.clt; // Volt
// smuggle something cWarmBlack = wrd.cWarm + cBlack; // WarmBlack
// smuggle something cWheat = bas.cWh + phn.ceat; // Wheat
// smuggle something cWildBlueYonder = wrd.cWild + cBlue + wrd.cYonder; // WildBlueYonder
// smuggle something cWildOrchid = wrd.cWild + bas.cOr + phn.cchid; // WildOrchid
// smuggle something cWildStrawberry = wrd.cWild + bas.cSt + phn.craw + wrd.cberry; // WildStrawberry
// smuggle something cWildWatermelon = wrd.cWild + bas.cWa + wrd.cterm + phn.celon; // WildWatermelon
// smuggle something cWindsorTan = wrd.cWindsor + cTan; // WindsorTan
// smuggle something cWine = bas.cWi + bas.cne; // Wine
// smuggle something cWineDregs = bas.cWi + bas.cne + wrd.cDregs; // WineDregs
// smuggle something cWinterSky = wrd.cWinter + wrd.cSky; // WinterSky
// smuggle something cWintergreenDream = wrd.cWinter + cgreen + wrd.cDream; // WintergreenDream
// smuggle something cWisteria = bas.cWi + phn.cster + bas.cia; // Wisteria
// smuggle something cWoodBrown = bas.cWo + bas.cod + cBrown; // WoodBrown
// smuggle something cXanthic = bas.cXa + wrd.cnth + bas.cic; // Xanthic
// smuggle something cXanadu = bas.cXa + bas.cna + bas.cdu; // Xanadu
// smuggle something cYaleBlue = wrd.cYale + cBlue; // YaleBlue
// smuggle something cYellowCrayola = cYellow + wrd.cCrayola; // YellowCrayola
// smuggle something cYellowMunsell = cYellow + wrd.cMunsell; // YellowMunsell
// smuggle something cYellowNCS = cYellow + phn.cNCS; // YellowNCS
// smuggle something cYellowPantone = cYellow + wrd.cPantone; // YellowPantone
// smuggle something cYellowProcess = cYellow + wrd.cProcess; // YellowProcess
// smuggle something cYellowRYB = cYellow + phn.cRYB; // YellowRYB
// smuggle something cYellowGreen = cYellow + cGreen; // YellowGreen
// smuggle something cYellowGreenCrayola = cYellow + cGreen + wrd.cCrayola; // YellowGreenCrayola
// smuggle something cYellowGreenColorWheel = cYellow + cGreen + wrd.cColor + wrd.cWheel; // YellowGreenColorWheel
// smuggle something cYellowOrange = cYellow + cOrange; // YellowOrange
// smuggle something cYellowOrangeColorWheel = cYellow + cOrange + wrd.cColor + wrd.cWheel; // YellowOrangeColorWheel
// smuggle something cYellowSunshine = cYellow + wrd.cSuns + phn.chine; // YellowSunshine
// smuggle something cYInMnBlue = bas.cY + bas.cIn + bas.cMn + cBlue; // YInMnBlue
// smuggle something cZaffre = bas.cZa + bas.cff + bas.cre; // Zaffre
// smuggle something cZomp = bas.cZo + bas.cmp; // Zomp

exports.cVermilion = cVermilion;