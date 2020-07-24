"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cBlueBell = exports.cBlueRYB = exports.cBluePigment = exports.cBluePantone = exports.cBlueNCS = exports.cBlueMunsell = exports.cBlueCrayola = exports.cBloodRed = exports.cBlond = exports.cBlizzardBlue = exports.cBleuDeFrance = exports.cBlastOffBronze = exports.cBlanchedAlmond = exports.cBlackShadows = exports.cBlackOlive = exports.cBlackCoral = exports.cBlackCoffee = exports.cBlackChocolate = exports.cBlackBean = exports.cBittersweetShimmer = exports.cBittersweet = exports.cBitterLime = exports.cBitterLemon = exports.cBistreBrown = exports.cBistre = exports.cBisque = exports.cBigDipORuby = exports.cBDazzledBlue = exports.cBeige = exports.cBeaver = exports.cBeauBlue = exports.cBattleshipGrey = exports.cBarnRed = exports.cBarbiePink = exports.cBananaMania = exports.cBakerMillerPink = exports.cBabyPowder = exports.cBabyPink = exports.cBabyBlueEyes = exports.cBabyBlue = exports.cAzureWeb = exports.cAzure = exports.cAvocado = exports.cAureolin = exports.cAuburn = exports.cAtomicTangerine = exports.cAsparagus = exports.cAshGray = exports.cArylideYellow = exports.cArtichoke = exports.cArmyGreen = exports.cArcticLime = exports.cAquamarine = exports.cAqua = exports.cApricot = exports.cAppleGreen = exports.cAoEnglish = exports.cAntiqueWhite = exports.cAntiqueRuby = exports.cAntiqueFuchsia = exports.cAntiqueBronze = exports.cAntiqueBrass = exports.cAndroidGreen = exports.cAmethyst = exports.cAmberSAEECE = exports.cAmber = exports.cAmazon = exports.cAmaranthRed = exports.cAmaranthPurple = exports.cAmaranthPink = exports.cAmaranthMP = exports.cAmaranth = exports.cAlmond = exports.cAlloyOrange = exports.cAliceBlue = exports.cAlabaster = exports.cAirSuperiorityBlue = exports.cAfricanViolet = exports.cAeroBlue = exports.cAero = exports.cAcidGreen = exports.cAbsoluteZero = exports.cOrange = exports.corange = exports.cWhite = exports.cwhite = exports.cBlack = exports.cblack = exports.cYellow = exports.cyellow = exports.cMagenta = exports.cmagenta = exports.cCyan = exports.ccyan = exports.cBlue = exports.cblue = exports.cGreen = exports.cgreen = exports.cRed = exports.cred = void 0;
exports.cCitrine = exports.cCinnamonSatin = exports.cCinnabar = exports.cCinereous = exports.cChromeYellow = exports.cChocolateWeb = exports.cChocolateTraditional = exports.cChineseYellow = exports.cChineseViolet = exports.cChineseRed = exports.cChinaRose = exports.cChinaPink = exports.cChestnut = exports.cCherryBlossomPink = exports.cChartreuseWeb = exports.cChartreuseTraditional = exports.cCharmPink = exports.cCharlestonGreen = exports.cCharcoal = exports.cChampagnePink = exports.cChampagne = exports.cCGRed = exports.cCGBlue = exports.cCeruleanCrayola = exports.cCeruleanFrost = exports.cCeruleanBlue = exports.cCerulean = exports.cCerise = exports.cCelticBlue = exports.cCeleste = exports.cCeladonGreen = exports.cCeladonBlue = exports.cCeladon = exports.cCedarChest = exports.cCatawba = exports.cCastletonGreen = exports.cCarrotOrange = exports.cCarolinaBlue = exports.cCarnelian = exports.cCarnationPink = exports.cCarmineMP = exports.cCarmine = exports.cCaribbeanGreen = exports.cCardinal = exports.cCaputMortuum = exports.cCapri = exports.cCandyPink = exports.cCandyAppleRed = exports.cCanaryYellow = exports.cCanary = exports.cCameoPink = exports.cCambridgeBlue = exports.cCafeNoir = exports.cCafeAuLait = exports.cCadmiumYellow = exports.cCadmiumRed = exports.cCadmiumOrange = exports.cCadmiumGreen = exports.cCadetGrey = exports.cCadetBlueCrayola = exports.cCadetBlue = exports.cCadet = exports.cByzantium = exports.cByzantine = exports.cBurntUmber = exports.cBurntSienna = exports.cBurntOrange = exports.cBurnishedBrown = exports.cBurlywood = exports.cBurgundy = exports.cBuff = exports.cBudGreen = exports.cBrunswickGreen = exports.cBrownSugar = exports.cBrown = exports.cBronze = exports.cBritishRacingGreen = exports.cBrinkPink = exports.cBrilliantRose = exports.cBrightYellowCrayola = exports.cBrightNavyBlue = exports.cBrightMaroon = exports.cBrightLilac = exports.cBrightGreen = exports.cBrickRed = exports.cBrandy = exports.cBottleGreen = exports.cBone = exports.cBole = exports.cBlush = exports.cBluetiful = exports.cBlueYonder = exports.cBlueVioletColorWheel = exports.cBlueVioletCrayola = exports.cBlueViolet = exports.cBlueSapphire = exports.cBlueJeans = exports.cBlueGreenColorWheel = exports.cBlueGreen = exports.cBlueGray = void 0;
exports.cEnglishGreen = exports.cEminence = exports.cEmerald = exports.cElectricViolet = exports.cElectricPurple = exports.cElectricLime = exports.cElectricIndigo = exports.cElectricGreen = exports.cElectricBlue = exports.cEgyptianBlue = exports.cEggshell = exports.cEggplant = exports.cEerieBlack = exports.cEcru = exports.cEbony = exports.cEarthYellow = exports.cDutchWhite = exports.cDukeBlue = exports.cDrab = exports.cDogwoodRose = exports.cDodgerBlue = exports.cDimGray = exports.cDesertSand = exports.cDesert = exports.cDenimBlue = exports.cDenim = exports.cDeepTaupe = exports.cDeepSpaceSparkle = exports.cDeepSkyBlue = exports.cDeepSaffron = exports.cDeepPink = exports.cDeepJungleGreen = exports.cDeepChestnut = exports.cDeepChampagne = exports.cDeepCerise = exports.cDavysGrey = exports.cDartmouthGreen = exports.cDarkViolet = exports.cDarkTurquoise = exports.cDarkSpringGreen = exports.cDarkSlateGray = exports.cDarkSlateBlue = exports.cDarkSkyBlue = exports.cDarkSienna = exports.cDarkSeaGreen = exports.cDarkSalmon = exports.cDarkRed = exports.cDarkPurple = exports.cDarkPastelGreen = exports.cDarkOrchid = exports.cDarkOrange = exports.cDarkOliveGreen = exports.cDarkMossGreen = exports.cDarkMagenta = exports.cDarkLiverHorses = exports.cDarkLiver = exports.cDarkLava = exports.cDarkKhaki = exports.cDarkJungleGreen = exports.cDarkGreenX11 = exports.cDarkGreen = exports.cDarkGoldenrod = exports.cDarkElectricBlue = exports.cDarkCyan = exports.cDarkCornflowerBlue = exports.cDarkByzantium = exports.cDarkBrown = exports.cDarkBlueGray = exports.cCyclamen = exports.cCyberYellow = exports.cCyberGrape = exports.cCyanProcess = exports.cCultured = exports.cCrimsonUA = exports.cCrimson = exports.cCream = exports.cCottonCandy = exports.cCoyoteBrown = exports.cCosmicLatte = exports.cCosmicCobalt = exports.cCornsilk = exports.cCornflowerBlue = exports.cCorn = exports.cCordovan = exports.cCoralPink = exports.cCoral = exports.cCoquelicot = exports.cCopperRose = exports.cCopperRed = exports.cCopperPenny = exports.cCopperCrayola = exports.cCopper = exports.cCoolGrey = exports.cCongoPink = exports.cColumbiaBlue = exports.cCoffee = exports.cCocoaBrown = exports.cCobaltBlue = exports.cClaret = exports.cCitron = void 0;
exports.cIlluminatingEmerald = exports.cIcterine = exports.cIceberg = exports.cHunterGreen = exports.cHotPink = exports.cHotMagenta = exports.cHookersGreen = exports.cHonoluluBlue = exports.cHoneydew = exports.cHollywoodCerise = exports.cHeliotropeGray = exports.cHeliotrope = exports.cHeatWave = exports.cHarvestGold = exports.cHarlequin = exports.cHansaYellow = exports.cHanPurple = exports.cHanBlue = exports.cGunmetal = exports.cGrullo = exports.cGreenYellowCrayola = exports.cGreenYellow = exports.cGreenSheen = exports.cGreenLizard = exports.cGreenCyan = exports.cGreenBlueCrayola = exports.cGreenBlue = exports.cGreenRYB = exports.cGreenPigment = exports.cGreenPantone = exports.cGreenNCS = exports.cGreenMunsell = exports.cGreenWeb = exports.cGreenCrayola = exports.cGrayX11 = exports.cGrayWeb = exports.cGrannySmithApple = exports.cGraniteGray = exports.cGoldenrod = exports.cGoldenYellow = exports.cGoldenPoppy = exports.cGoldenBrown = exports.cGoldFusion = exports.cGoldCrayola = exports.cGoldWebGolden = exports.cGoldMetallic = exports.cGold = exports.cGOGreen = exports.cGlossyGrape = exports.cGlaucous = exports.cGhostWhite = exports.cGenericViridian = exports.cGamboge = exports.cGainsboro = exports.cFuzzyWuzzy = exports.cFulvous = exports.cFuchsiaRose = exports.cFuchsiaPurple = exports.cFuchsiaCrayola = exports.cFuchsia = exports.cFrostbite = exports.cFrenchViolet = exports.cFrenchSkyBlue = exports.cFrenchRose = exports.cFrenchRaspberry = exports.cFrenchPink = exports.cFrenchMauve = exports.cFrenchLime = exports.cFrenchLilac = exports.cFrenchFuchsia = exports.cFrenchBlue = exports.cFrenchBistre = exports.cFrenchBeige = exports.cForestGreenWeb = exports.cForestGreenTraditional = exports.cForestGreenCrayola = exports.cFluorescentBlue = exports.cFloralWhite = exports.cFlirt = exports.cFlax = exports.cFlame = exports.cFireOpal = exports.cFireEngineRed = exports.cFirebrick = exports.cFieryRose = exports.cFieldDrab = exports.cFernGreen = exports.cFeldgrau = exports.cFawn = exports.cFashionFuchsia = exports.cFandangoPink = exports.cFandango = exports.cFaluRed = exports.cFallow = exports.cEtonBlue = exports.cErin = exports.cEnglishViolet = exports.cEnglishVermillion = exports.cEnglishRed = exports.cEnglishLavender = void 0;
exports.cMalachite = exports.cMajorelleBlue = exports.cMaizeCrayola = exports.cMaize = exports.cMahogany = exports.cMagnolia = exports.cMagicMint = exports.cMagentaHaze = exports.cMagentaProcess = exports.cMagentaPantone = exports.cMagentaDye = exports.cMagentaCrayola = exports.cMadderLake = exports.cMacaroniAndCheese = exports.cLivid = exports.cLiverChestnut = exports.cLiverOrgan = exports.cLiverDogs = exports.cLiver = exports.cLittleBoyBlue = exports.cLiseranPurple = exports.cLion = exports.cLinen = exports.cLincolnGreen = exports.cLimeGreen = exports.cLimeWeb = exports.cLimeColorWheel = exports.cLilacLuster = exports.cLilac = exports.cLightYellow = exports.cLightSteelBlue = exports.cLightSlateGray = exports.cLightSkyBlue = exports.cLightSeaGreen = exports.cLightSalmon = exports.cLightPink = exports.cLightPeriwinkle = exports.cLightOrange = exports.cLightGreen = exports.cLightGray = exports.cLightGoldenrodYellow = exports.cLightFrenchBeige = exports.cLightCyan = exports.cLightCornflowerBlue = exports.cLightCoral = exports.cLightBlue = exports.cLiberty = exports.cLemonYellowCrayola = exports.cLemonYellow = exports.cLemonMeringue = exports.cLemonGlacier = exports.cLemonCurry = exports.cLemonChiffon = exports.cLemon = exports.cLawnGreen = exports.cLavenderGray = exports.cLavenderBlush = exports.cLavenderBlue = exports.cLavenderWeb = exports.cLavenderFloral = exports.cLava = exports.cLaurelGreen = exports.cLaserLemon = exports.cLapisLazuli = exports.cLanguidLavender = exports.cKSUPurple = exports.cKombuGreen = exports.cKobicha = exports.cKobi = exports.cKobe = exports.cKhakiX11 = exports.cKhakiWeb = exports.cKeyLime = exports.cKeppel = exports.cKellyGreen = exports.cJungleGreen = exports.cJuneBud = exports.cJonquil = exports.cJet = exports.cJazzberryJam = exports.cJasmine = exports.cJapaneseViolet = exports.cJapaneseCarmine = exports.cJade = exports.cIvory = exports.cItalianSkyBlue = exports.cIsabelline = exports.cIrresistible = exports.cIris = exports.cInternationalOrangeGoldenGateBridge = exports.cInternationalOrangeEngineering = exports.cInternationalOrangeAerospace = exports.cIndigoDye = exports.cIndigo = exports.cIndianYellow = exports.cIndianRed = exports.cIndiaGreen = exports.cIndependence = exports.cInchworm = exports.cImperialRed = void 0;
exports.cOldLavender = exports.cOldLace = exports.cOldGold = exports.cOldBurgundy = exports.cOchre = exports.cOceanGreen = exports.cOceanBlue = exports.cNyanza = exports.cNonPhotoBlue = exports.cNickel = exports.cNewYorkPink = exports.cNeonFuchsia = exports.cNeonGreen = exports.cNeonCarrot = exports.cNeonBlue = exports.cNavyBlueCrayola = exports.cNavyBlue = exports.cNavajoWhite = exports.cNaplesYellow = exports.cNadeshikoPink = exports.cMysticMaroon = exports.cMystic = exports.cMyrtleGreen = exports.cMustard = exports.cMulberryCrayola = exports.cMulberry = exports.cMSUGreen = exports.cMountbattenPink = exports.cMountainMeadow = exports.cMossGreen = exports.cMorningBlue = exports.cModeBeige = exports.cMistyRose = exports.cMistyMoss = exports.cMintGreen = exports.cMintCream = exports.cMint = exports.cMinionYellow = exports.cMing = exports.cMindaro = exports.cMimiPink = exports.cMikadoYellow = exports.cMidnightGreen = exports.cMidnightBlue = exports.cMidnight = exports.cMiddleYellowRed = exports.cMiddleYellow = exports.cMiddleRedPurple = exports.cMiddleRed = exports.cMiddlePurple = exports.cMiddleGreenYellow = exports.cMiddleGreen = exports.cMiddleGrey = exports.cMiddleBluePurple = exports.cMiddleBlueGreen = exports.cMiddleBlue = exports.cMexicanPink = exports.cMetallicSunburst = exports.cMetallicSeaweed = exports.cMetallicGold = exports.cMelon = exports.cMellowYellow = exports.cMellowApricot = exports.cMediumVioletRed = exports.cMediumTurquoise = exports.cMediumSpringGreen = exports.cMediumSlateBlue = exports.cMediumSeaGreen = exports.cMediumPurple = exports.cMediumOrchid = exports.cMediumChampagne = exports.cMediumCarmine = exports.cMediumCandyAppleRed = exports.cMediumBlue = exports.cMediumAquamarine = exports.cMayaBlue = exports.cMayGreen = exports.cMaximumYellowRed = exports.cMaximumYellow = exports.cMaximumRedPurple = exports.cMaximumRed = exports.cMaximumPurple = exports.cMaximumGreenYellow = exports.cMaximumGreen = exports.cMaximumBluePurple = exports.cMaximumBlueGreen = exports.cMaximumBlue = exports.cMauvelous = exports.cMauveTaupe = exports.cMauve = exports.cMaroonX11 = exports.cMaroonWeb = exports.cMaroonCrayola = exports.cMarigold = exports.cMardiGras = exports.cMantis = exports.cMangoTango = exports.cMango = exports.cMandarin = exports.cManatee = void 0;
exports.cPurpleNavy = exports.cPurpleMountainMajesty = exports.cPurpleX11 = exports.cPurpleMunsell = exports.cPurpleWeb = exports.cPurple = exports.cPumpkin = exports.cPullmanBrown = exports.cPuce = exports.cPsychedelicPurple = exports.cPrussianBlue = exports.cPrune = exports.cPrincetonOrange = exports.cPowderBlue = exports.cPortlandOrange = exports.cPopstar = exports.cPompAndPower = exports.cPolishedPine = exports.cPlumpPurple = exports.cPlumWeb = exports.cPlum = exports.cPlatinum = exports.cPistachio = exports.cPinkSherbet = exports.cPinkLavender = exports.cPinkLace = exports.cPinkFlamingo = exports.cPinkPantone = exports.cPink = exports.cPineTree = exports.cPineGreen = exports.cPiggyPink = exports.cPictorialCarmine = exports.cPicoteeBlue = exports.cPhthaloGreen = exports.cPhthaloBlue = exports.cPhlox = exports.cPewterBlue = exports.cPersimmon = exports.cPersianRose = exports.cPersianRed = exports.cPersianPlum = exports.cPersianPink = exports.cPersianOrange = exports.cPersianIndigo = exports.cPersianGreen = exports.cPersianBlue = exports.cPermanentGeraniumLake = exports.cPeriwinkleCrayola = exports.cPeriwinkle = exports.cPearlyPurple = exports.cPear = exports.cPeachPuff = exports.cPeachCrayola = exports.cPeach = exports.cPaynesGrey = exports.cPatriarch = exports.cPastelPink = exports.cParisGreen = exports.cParadisePink = exports.cPapayaWhip = exports.cPaoloVeroneseGreen = exports.cPansyPurple = exports.cPaleSpringBud = exports.cPaleSilver = exports.cPalePurplePantone = exports.cPalePink = exports.cPaleCerulean = exports.cPaleAqua = exports.cPalatinatePurple = exports.cPakistanGreen = exports.cPacificBlue = exports.cOUCrimsonRed = exports.cOxfordBlue = exports.cOxBlood = exports.cOutrageousOrange = exports.cOuterSpaceCrayola = exports.cOrchidCrayola = exports.cOrchidPink = exports.cOrchid = exports.cOrangeYellowCrayola = exports.cOrangeYellow = exports.cOrangeSoda = exports.cOrangeRedCrayola = exports.cOrangeRed = exports.cOrangePeel = exports.cOrangeWeb = exports.cOrangePantone = exports.cOrangeCrayola = exports.cOperaMauve = exports.cOpal = exports.cOnyx = exports.cOlivine = exports.cOliveGreen = exports.cOliveDrab7 = exports.cOliveDrab3 = exports.cOlive = exports.cOldSilver = exports.cOldRose = exports.cOldMauve = void 0;
exports.cShadowBlue = exports.cShadow = exports.cSepia = exports.cSelectiveYellow = exports.cSeashell = exports.cSealBrown = exports.cSeaGreenCrayola = exports.cSeaGreen = exports.cScreaminGreen = exports.cSchoolBusYellow = exports.cSchaussPink = exports.cScarlet = exports.cSatinSheenGold = exports.cSapphireCrayola = exports.cSapphireBlue = exports.cSapphire = exports.cSapGreen = exports.cSandyBrown = exports.cSandDune = exports.cSand = exports.cSalmonPink = exports.cSalmon = exports.cStPatricksBlue = exports.cSage = exports.cSaffron = exports.cSafetyYellow = exports.cBlazeOrange = exports.cSafetyOrange = exports.cSaddleBrown = exports.cSacramentoStateGreen = exports.cRustyRed = exports.cRust = exports.cRussianViolet = exports.cRussianGreen = exports.cRusset = exports.cRufous = exports.cRubyRed = exports.cRuby = exports.cRubineRed = exports.cRuber = exports.cRoyalYellow = exports.cRoyalPurple = exports.cRoyalBlueLight = exports.cRoyalBlueDark = exports.cRosyBrown = exports.cRossoCorsa = exports.cRosewood = exports.cRoseVale = exports.cRoseTaupe = exports.cRoseRed = exports.cRoseQuartz = exports.cRosePink = exports.cRoseMadder = exports.cRoseEbony = exports.cRoseDust = exports.cRoseBonbon = exports.cRose = exports.cRomanSilver = exports.cRocketMetallic = exports.cRobinEggBlue = exports.cRifleGreen = exports.cRichBlackFOGRA39 = exports.cRichBlackFOGRA29 = exports.cRichBlack = exports.cRhythm = exports.cResolutionBlue = exports.cRedwood = exports.cRedVioletColorWheel = exports.cRedVioletCrayola = exports.cRedViolet = exports.cRedSalsa = exports.cRedPurple = exports.cRedOrangeColorWheel = exports.cRedOrangeCrayola = exports.cRedOrange = exports.cRedRYB = exports.cRedPigment = exports.cRedPantone = exports.cRedNCS = exports.cRedMunsell = exports.cRedCrayola = exports.cRebeccaPurple = exports.cRazzmicBerry = exports.cRazzmatazz = exports.cRazzleDazzleRose = exports.cRawUmber = exports.cRawSienna = exports.cRaspberryRose = exports.cRaspberryGlace = exports.cRaspberry = exports.cRajah = exports.cRaisinBlack = exports.cRadicalRed = exports.cQuinacridoneMagenta = exports.cQuickSilver = exports.cQueenPink = exports.cQueenBlue = exports.cPurpureus = exports.cPurplePlum = exports.cPurplePizzazz = void 0;
exports.cUltraRed = exports.cUltraPink = exports.cUltramarineBlue = exports.cUltramarine = exports.cUARed = exports.cUABlue = exports.cTyrianPurple = exports.cTwilightLavender = exports.cTuscany = exports.cTuscanTan = exports.cTuscanRed = exports.cTuscanBrown = exports.cTuscan = exports.cTurtleGreen = exports.cTurquoiseGreen = exports.cTurquoiseBlue = exports.cTurquoise = exports.cTumbleweed = exports.cTuftsBlue = exports.cTrypanBlue = exports.cTrueBlue = exports.cTropicalRainforest = exports.cTomato = exports.cTitaniumYellow = exports.cTimberwolf = exports.cTiffanyBlue = exports.cTickleMePink = exports.cThulianPink = exports.cThistle = exports.cTerraCotta = exports.cTawny = exports.cTelemagenta = exports.cTealBlue = exports.cTeal = exports.cTeaRoseWeb = exports.cTeaRose = exports.cTeaGreen = exports.cTaupeGray = exports.cTaupe = exports.cTartOrange = exports.cTangoPink = exports.cTangerine = exports.cTanCrayola = exports.cTan = exports.cSweetBrown = exports.cSuperPink = exports.cSunset = exports.cSunray = exports.cSunglow = exports.cSugarPlum = exports.cStraw = exports.cStilDeGrainYellow = exports.cSteelTeal = exports.cSteelPink = exports.cSteelBlue = exports.cStarCommandBlue = exports.cSpringGreenCrayola = exports.cSpringGreen = exports.cSpringFrost = exports.cSpringBud = exports.cSpanishViridian = exports.cSpanishViolet = exports.cSpanishSkyBlue = exports.cSpanishRed = exports.cSpanishPink = exports.cSpanishOrange = exports.cSpanishGreen = exports.cSpanishGray = exports.cSpanishCarmine = exports.cSpanishBlue = exports.cSpanishBistre = exports.cSpaceCadet = exports.cSonicSilver = exports.cSolidPink = exports.cSnow = exports.cSmokyBlack = exports.cSmitten = exports.cSlimyGreen = exports.cSlateGray = exports.cSlateBlue = exports.cSkyMagenta = exports.cSkyBlueCrayola = exports.cSkyBlue = exports.cSkobeloff = exports.cSizzlingSunrise = exports.cSizzlingRed = exports.cSinopia = exports.cSilverSand = exports.cSilverPink = exports.cSilverChalice = exports.cSilverMetallic = exports.cSilverCrayola = exports.cSilver = exports.cSienna = exports.cShockingPinkCrayola = exports.cShockingPink = exports.cShinyShamrock = exports.cShimmeringBlush = exports.cSheenGreen = exports.cShamrockGreen = void 0;
exports.cZomp = exports.cZaffre = exports.cYInMnBlue = exports.cYellowSunshine = exports.cYellowOrangeColorWheel = exports.cYellowOrange = exports.cYellowGreenColorWheel = exports.cYellowGreenCrayola = exports.cYellowGreen = exports.cYellowRYB = exports.cYellowProcess = exports.cYellowPantone = exports.cYellowNCS = exports.cYellowMunsell = exports.cYellowCrayola = exports.cYaleBlue = exports.cXanadu = exports.cXanthic = exports.cWoodBrown = exports.cWisteria = exports.cWintergreenDream = exports.cWinterSky = exports.cWineDregs = exports.cWine = exports.cWindsorTan = exports.cWildWatermelon = exports.cWildStrawberry = exports.cWildOrchid = exports.cWildBlueYonder = exports.cWheat = exports.cWarmBlack = exports.cVolt = exports.cVividViolet = exports.cVividTangerine = exports.cVividSkyBlue = exports.cVividBurgundy = exports.cViridianGreen = exports.cViridian = exports.cVioletRed = exports.cVioletBlueCrayola = exports.cVioletBlue = exports.cVioletWeb = exports.cVioletRYB = exports.cVioletCrayola = exports.cVioletColorWheel = exports.cViolet = exports.cVeronica = exports.cVermilionWeb = exports.cVermilion = exports.cVerdigris = exports.cVenetianRed = exports.cVegasGold = exports.cVanillaIce = exports.cVanilla = exports.cVanDykeBrown = exports.cUSAFABlue = exports.cUranianBlue = exports.cUpsdellRed = exports.cUPMaroon = exports.cUPForestGreen = exports.cUnmellowYellow = exports.cUnitedNationsBlue = exports.cUnbleachedSilk = exports.cUmber = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var w = _interopRequireWildcard(require("./word.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file color.constants.js
 * @module color-constants
 * @description Contains all named colors.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Colors
// Primary Colors
var cred = b.cr + b.ced; // red

exports.cred = cred;
var cRed = b.cR + b.ced; // Red

exports.cRed = cRed;
var cgreen = b.cg + p.creen; // green

exports.cgreen = cgreen;
var cGreen = b.cG + p.creen; // Green

exports.cGreen = cGreen;
var cblue = b.cb + p.clue; // blue

exports.cblue = cblue;
var cBlue = b.cB + p.clue; // Blue
// Secondary Colors CMYK

exports.cBlue = cBlue;
var ccyan = b.cc + p.cyan; // cyan

exports.ccyan = ccyan;
var cCyan = b.cC + p.cyan; // Cyan

exports.cCyan = cCyan;
var cmagenta = b.cm + b.cag + p.centa; // magenta

exports.cmagenta = cmagenta;
var cMagenta = b.cM + b.cag + p.centa; // Magenta

exports.cMagenta = cMagenta;
var cyellow = w.cyell + b.cow; // yellow

exports.cyellow = cyellow;
var cYellow = w.cYell + b.cow; // Yellow

exports.cYellow = cYellow;
var cblack = b.cb + w.clack; // black

exports.cblack = cblack;
var cBlack = b.cB + w.clack; // Black

exports.cBlack = cBlack;
var cwhite = b.cwh + p.cite; // white

exports.cwhite = cwhite;
var cWhite = b.cWh + p.cite; // White

exports.cWhite = cWhite;
var corange = b.cor + p.cange; // orange

exports.corange = corange;
var cOrange = b.cOr + p.cange; // Orange
// Tertiary Named Colors
// https://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F

exports.cOrange = cOrange;
var cAbsoluteZero = 'AbsoluteZero'; // AbsoluteZero

exports.cAbsoluteZero = cAbsoluteZero;
var cAcidGreen = 'AcidGreen'; // AcidGreen

exports.cAcidGreen = cAcidGreen;
var cAero = 'Aero'; // Aero

exports.cAero = cAero;
var cAeroBlue = 'AeroBlue'; // AeroBlue

exports.cAeroBlue = cAeroBlue;
var cAfricanViolet = 'AfricanViolet'; // AfricanViolet

exports.cAfricanViolet = cAfricanViolet;
var cAirSuperiorityBlue = 'AirSuperiorityBlue'; // AirSuperiorityBlue

exports.cAirSuperiorityBlue = cAirSuperiorityBlue;
var cAlabaster = 'Alabaster'; // Alabaster

exports.cAlabaster = cAlabaster;
var cAliceBlue = 'AliceBlue'; // AliceBlue

exports.cAliceBlue = cAliceBlue;
var cAlloyOrange = 'AlloyOrange'; // AlloyOrange

exports.cAlloyOrange = cAlloyOrange;
var cAlmond = 'Almond'; // Almond

exports.cAlmond = cAlmond;
var cAmaranth = 'Amaranth'; // Amaranth

exports.cAmaranth = cAmaranth;
var cAmaranthMP = 'AmaranthMP'; // AmaranthMP

exports.cAmaranthMP = cAmaranthMP;
var cAmaranthPink = 'AmaranthPink'; // AmaranthPink

exports.cAmaranthPink = cAmaranthPink;
var cAmaranthPurple = 'AmaranthPurple'; // AmaranthPurple

exports.cAmaranthPurple = cAmaranthPurple;
var cAmaranthRed = 'AmaranthRed'; // AmaranthRed

exports.cAmaranthRed = cAmaranthRed;
var cAmazon = 'Amazon'; // Amazon

exports.cAmazon = cAmazon;
var cAmber = 'Amber'; // Amber

exports.cAmber = cAmber;
var cAmberSAEECE = 'AmberSAEECE'; // AmberSAEECE

exports.cAmberSAEECE = cAmberSAEECE;
var cAmethyst = 'Amethyst'; // Amethyst

exports.cAmethyst = cAmethyst;
var cAndroidGreen = 'AndroidGreen'; // AndroidGreen

exports.cAndroidGreen = cAndroidGreen;
var cAntiqueBrass = 'AntiqueBrass'; // AntiqueBrass

exports.cAntiqueBrass = cAntiqueBrass;
var cAntiqueBronze = 'AntiqueBronze'; // AntiqueBronze

exports.cAntiqueBronze = cAntiqueBronze;
var cAntiqueFuchsia = 'AntiqueFuchsia'; // AntiqueFuchsia

exports.cAntiqueFuchsia = cAntiqueFuchsia;
var cAntiqueRuby = 'AntiqueRuby'; // AntiqueRuby

exports.cAntiqueRuby = cAntiqueRuby;
var cAntiqueWhite = 'AntiqueWhite'; // AntiqueWhite

exports.cAntiqueWhite = cAntiqueWhite;
var cAoEnglish = 'AoEnglish'; // AoEnglish

exports.cAoEnglish = cAoEnglish;
var cAppleGreen = 'AppleGreen'; // AppleGreen

exports.cAppleGreen = cAppleGreen;
var cApricot = 'Apricot'; // Apricot

exports.cApricot = cApricot;
var cAqua = 'Aqua'; // Aqua

exports.cAqua = cAqua;
var cAquamarine = 'Aquamarine'; // Aquamarine

exports.cAquamarine = cAquamarine;
var cArcticLime = 'ArcticLime'; // ArcticLime

exports.cArcticLime = cArcticLime;
var cArmyGreen = 'ArmyGreen'; // ArmyGreen

exports.cArmyGreen = cArmyGreen;
var cArtichoke = 'Artichoke'; // Artichoke

exports.cArtichoke = cArtichoke;
var cArylideYellow = 'ArylideYellow'; // ArylideYellow

exports.cArylideYellow = cArylideYellow;
var cAshGray = 'AshGray'; // AshGray

exports.cAshGray = cAshGray;
var cAsparagus = 'Asparagus'; // Asparagus

exports.cAsparagus = cAsparagus;
var cAtomicTangerine = 'AtomicTangerine'; // AtomicTangerine

exports.cAtomicTangerine = cAtomicTangerine;
var cAuburn = 'Auburn'; // Auburn

exports.cAuburn = cAuburn;
var cAureolin = 'Aureolin'; // Aureolin

exports.cAureolin = cAureolin;
var cAvocado = 'Avocado'; // Avocado

exports.cAvocado = cAvocado;
var cAzure = 'Azure'; // Azure

exports.cAzure = cAzure;
var cAzureWeb = 'AzureWeb'; // AzureWeb

exports.cAzureWeb = cAzureWeb;
var cBabyBlue = 'BabyBlue'; // BabyBlue

exports.cBabyBlue = cBabyBlue;
var cBabyBlueEyes = 'BabyBlueEyes'; // BabyBlueEyes

exports.cBabyBlueEyes = cBabyBlueEyes;
var cBabyPink = 'BabyPink'; // BabyPink

exports.cBabyPink = cBabyPink;
var cBabyPowder = 'BabyPowder'; // BabyPowder

exports.cBabyPowder = cBabyPowder;
var cBakerMillerPink = 'BakerMillerPink'; // BakerMillerPink

exports.cBakerMillerPink = cBakerMillerPink;
var cBananaMania = 'BananaMania'; // BananaMania

exports.cBananaMania = cBananaMania;
var cBarbiePink = 'BarbiePink'; // BarbiePink

exports.cBarbiePink = cBarbiePink;
var cBarnRed = 'BarnRed'; // BarnRed

exports.cBarnRed = cBarnRed;
var cBattleshipGrey = 'BattleshipGrey'; // BattleshipGrey

exports.cBattleshipGrey = cBattleshipGrey;
var cBeauBlue = 'BeauBlue'; // BeauBlue

exports.cBeauBlue = cBeauBlue;
var cBeaver = 'Beaver'; // Beaver

exports.cBeaver = cBeaver;
var cBeige = 'Beige'; // Beige

exports.cBeige = cBeige;
var cBDazzledBlue = 'BDazzledBlue'; // BDazzledBlue

exports.cBDazzledBlue = cBDazzledBlue;
var cBigDipORuby = 'BigDipORuby'; // BigDipORuby

exports.cBigDipORuby = cBigDipORuby;
var cBisque = 'Bisque'; // Bisque

exports.cBisque = cBisque;
var cBistre = 'Bistre'; // Bistre

exports.cBistre = cBistre;
var cBistreBrown = 'BistreBrown'; // BistreBrown

exports.cBistreBrown = cBistreBrown;
var cBitterLemon = 'BitterLemon'; // BitterLemon

exports.cBitterLemon = cBitterLemon;
var cBitterLime = 'BitterLime'; // BitterLime

exports.cBitterLime = cBitterLime;
var cBittersweet = 'Bittersweet'; // Bittersweet

exports.cBittersweet = cBittersweet;
var cBittersweetShimmer = 'BittersweetShimmer'; // BittersweetShimmer

exports.cBittersweetShimmer = cBittersweetShimmer;
var cBlackBean = 'BlackBean'; // BlackBean

exports.cBlackBean = cBlackBean;
var cBlackChocolate = 'BlackChocolate'; // BlackChocolate

exports.cBlackChocolate = cBlackChocolate;
var cBlackCoffee = 'BlackCoffee'; // BlackCoffee

exports.cBlackCoffee = cBlackCoffee;
var cBlackCoral = 'BlackCoral'; // BlackCoral

exports.cBlackCoral = cBlackCoral;
var cBlackOlive = 'BlackOlive'; // BlackOlive

exports.cBlackOlive = cBlackOlive;
var cBlackShadows = 'BlackShadows'; // BlackShadows

exports.cBlackShadows = cBlackShadows;
var cBlanchedAlmond = 'BlanchedAlmond'; // BlanchedAlmond

exports.cBlanchedAlmond = cBlanchedAlmond;
var cBlastOffBronze = 'BlastOffBronze'; // BlastOffBronze

exports.cBlastOffBronze = cBlastOffBronze;
var cBleuDeFrance = 'BleuDeFrance'; // BleuDeFrance

exports.cBleuDeFrance = cBleuDeFrance;
var cBlizzardBlue = 'BlizzardBlue'; // BlizzardBlue

exports.cBlizzardBlue = cBlizzardBlue;
var cBlond = 'Blond'; // Blond

exports.cBlond = cBlond;
var cBloodRed = 'BloodRed'; // BloodRed

exports.cBloodRed = cBloodRed;
var cBlueCrayola = 'BlueCrayola'; // BlueCrayola

exports.cBlueCrayola = cBlueCrayola;
var cBlueMunsell = 'BlueMunsell'; // BlueMunsell

exports.cBlueMunsell = cBlueMunsell;
var cBlueNCS = 'BlueNCS'; // BlueNCS

exports.cBlueNCS = cBlueNCS;
var cBluePantone = 'BluePantone'; // BluePantone

exports.cBluePantone = cBluePantone;
var cBluePigment = 'BluePigment'; // BluePigment

exports.cBluePigment = cBluePigment;
var cBlueRYB = 'BlueRYB'; // BlueRYB

exports.cBlueRYB = cBlueRYB;
var cBlueBell = 'BlueBell'; // BlueBell

exports.cBlueBell = cBlueBell;
var cBlueGray = 'BlueGray'; // BlueGray

exports.cBlueGray = cBlueGray;
var cBlueGreen = 'BlueGreen'; // BlueGreen

exports.cBlueGreen = cBlueGreen;
var cBlueGreenColorWheel = 'BlueGreenColorWheel'; // BlueGreenColorWheel

exports.cBlueGreenColorWheel = cBlueGreenColorWheel;
var cBlueJeans = 'BlueJeans'; // BlueJeans

exports.cBlueJeans = cBlueJeans;
var cBlueSapphire = 'BlueSapphire'; // BlueSapphire

exports.cBlueSapphire = cBlueSapphire;
var cBlueViolet = 'BlueViolet'; // BlueViolet

exports.cBlueViolet = cBlueViolet;
var cBlueVioletCrayola = 'BlueVioletCrayola'; // BlueVioletCrayola

exports.cBlueVioletCrayola = cBlueVioletCrayola;
var cBlueVioletColorWheel = 'BlueVioletColorWheel'; // BlueVioletColorWheel

exports.cBlueVioletColorWheel = cBlueVioletColorWheel;
var cBlueYonder = 'BlueYonder'; // BlueYonder

exports.cBlueYonder = cBlueYonder;
var cBluetiful = 'Bluetiful'; // Bluetiful

exports.cBluetiful = cBluetiful;
var cBlush = 'Blush'; // Blush

exports.cBlush = cBlush;
var cBole = 'Bole'; // Bole

exports.cBole = cBole;
var cBone = 'Bone'; // Bone

exports.cBone = cBone;
var cBottleGreen = 'BottleGreen'; // BottleGreen

exports.cBottleGreen = cBottleGreen;
var cBrandy = 'Brandy'; // Brandy

exports.cBrandy = cBrandy;
var cBrickRed = 'BrickRed'; // BrickRed

exports.cBrickRed = cBrickRed;
var cBrightGreen = 'BrightGreen'; // BrightGreen

exports.cBrightGreen = cBrightGreen;
var cBrightLilac = 'BrightLilac'; // BrightLilac

exports.cBrightLilac = cBrightLilac;
var cBrightMaroon = 'BrightMaroon'; // BrightMaroon

exports.cBrightMaroon = cBrightMaroon;
var cBrightNavyBlue = 'BrightNavyBlue'; // BrightNavyBlue

exports.cBrightNavyBlue = cBrightNavyBlue;
var cBrightYellowCrayola = 'BrightYellowCrayola'; // BrightYellowCrayola

exports.cBrightYellowCrayola = cBrightYellowCrayola;
var cBrilliantRose = 'BrilliantRose'; // BrilliantRose

exports.cBrilliantRose = cBrilliantRose;
var cBrinkPink = 'BrinkPink'; // BrinkPink

exports.cBrinkPink = cBrinkPink;
var cBritishRacingGreen = 'BritishRacingGreen'; // BritishRacingGreen

exports.cBritishRacingGreen = cBritishRacingGreen;
var cBronze = 'Bronze'; // Bronze

exports.cBronze = cBronze;
var cBrown = 'Brown'; // Brown

exports.cBrown = cBrown;
var cBrownSugar = 'BrownSugar'; // BrownSugar

exports.cBrownSugar = cBrownSugar;
var cBrunswickGreen = 'BrunswickGreen'; // BrunswickGreen

exports.cBrunswickGreen = cBrunswickGreen;
var cBudGreen = 'BudGreen'; // BudGreen

exports.cBudGreen = cBudGreen;
var cBuff = 'Buff'; // Buff

exports.cBuff = cBuff;
var cBurgundy = 'Burgundy'; // Burgundy

exports.cBurgundy = cBurgundy;
var cBurlywood = 'Burlywood'; // Burlywood

exports.cBurlywood = cBurlywood;
var cBurnishedBrown = 'BurnishedBrown'; // BurnishedBrown

exports.cBurnishedBrown = cBurnishedBrown;
var cBurntOrange = 'BurntOrange'; // BurntOrange

exports.cBurntOrange = cBurntOrange;
var cBurntSienna = 'BurntSienna'; // BurntSienna

exports.cBurntSienna = cBurntSienna;
var cBurntUmber = 'BurntUmber'; // BurntUmber

exports.cBurntUmber = cBurntUmber;
var cByzantine = 'Byzantine'; // Byzantine

exports.cByzantine = cByzantine;
var cByzantium = 'Byzantium'; // Byzantium

exports.cByzantium = cByzantium;
var cCadet = 'Cadet'; // Cadet

exports.cCadet = cCadet;
var cCadetBlue = 'CadetBlue'; // CadetBlue

exports.cCadetBlue = cCadetBlue;
var cCadetBlueCrayola = 'CadetBlueCrayola'; // CadetBlueCrayola

exports.cCadetBlueCrayola = cCadetBlueCrayola;
var cCadetGrey = 'CadetGrey'; // CadetGrey

exports.cCadetGrey = cCadetGrey;
var cCadmiumGreen = 'CadmiumGreen'; // CadmiumGreen

exports.cCadmiumGreen = cCadmiumGreen;
var cCadmiumOrange = 'CadmiumOrange'; // CadmiumOrange

exports.cCadmiumOrange = cCadmiumOrange;
var cCadmiumRed = 'CadmiumRed'; // CadmiumRed

exports.cCadmiumRed = cCadmiumRed;
var cCadmiumYellow = 'CadmiumYellow'; // CadmiumYellow

exports.cCadmiumYellow = cCadmiumYellow;
var cCafeAuLait = 'CafeAuLait'; // CafeAuLait

exports.cCafeAuLait = cCafeAuLait;
var cCafeNoir = 'CafeNoir'; // CafeNoir

exports.cCafeNoir = cCafeNoir;
var cCambridgeBlue = 'CambridgeBlue'; // CambridgeBlue

exports.cCambridgeBlue = cCambridgeBlue;
var cCameoPink = 'CameoPink'; // CameoPink

exports.cCameoPink = cCameoPink;
var cCanary = 'Canary'; // Canary

exports.cCanary = cCanary;
var cCanaryYellow = 'CanaryYellow'; // CanaryYellow

exports.cCanaryYellow = cCanaryYellow;
var cCandyAppleRed = 'CandyAppleRed'; // CandyAppleRed

exports.cCandyAppleRed = cCandyAppleRed;
var cCandyPink = 'CandyPink'; // CandyPink

exports.cCandyPink = cCandyPink;
var cCapri = 'Capri'; // Capri

exports.cCapri = cCapri;
var cCaputMortuum = 'CaputMortuum'; // CaputMortuum

exports.cCaputMortuum = cCaputMortuum;
var cCardinal = 'Cardinal'; // Cardinal

exports.cCardinal = cCardinal;
var cCaribbeanGreen = 'CaribbeanGreen'; // CaribbeanGreen

exports.cCaribbeanGreen = cCaribbeanGreen;
var cCarmine = 'Carmine'; // Carmine

exports.cCarmine = cCarmine;
var cCarmineMP = 'CarmineMP'; // CarmineMP

exports.cCarmineMP = cCarmineMP;
var cCarnationPink = 'CarnationPink'; // CarnationPink

exports.cCarnationPink = cCarnationPink;
var cCarnelian = 'Carnelian'; // Carnelian

exports.cCarnelian = cCarnelian;
var cCarolinaBlue = 'CarolinaBlue'; // CarolinaBlue

exports.cCarolinaBlue = cCarolinaBlue;
var cCarrotOrange = 'CarrotOrange'; // CarrotOrange

exports.cCarrotOrange = cCarrotOrange;
var cCastletonGreen = 'CastletonGreen'; // CastletonGreen

exports.cCastletonGreen = cCastletonGreen;
var cCatawba = 'Catawba'; // Catawba

exports.cCatawba = cCatawba;
var cCedarChest = 'CedarChest'; // CedarChest

exports.cCedarChest = cCedarChest;
var cCeladon = 'Celadon'; // Celadon

exports.cCeladon = cCeladon;
var cCeladonBlue = 'CeladonBlue'; // CeladonBlue

exports.cCeladonBlue = cCeladonBlue;
var cCeladonGreen = 'CeladonGreen'; // CeladonGreen

exports.cCeladonGreen = cCeladonGreen;
var cCeleste = 'Celeste'; // Celeste

exports.cCeleste = cCeleste;
var cCelticBlue = 'CelticBlue'; // CelticBlue

exports.cCelticBlue = cCelticBlue;
var cCerise = 'Cerise'; // Cerise

exports.cCerise = cCerise;
var cCerulean = 'Cerulean'; // Cerulean

exports.cCerulean = cCerulean;
var cCeruleanBlue = 'CeruleanBlue'; // CeruleanBlue

exports.cCeruleanBlue = cCeruleanBlue;
var cCeruleanFrost = 'CeruleanFrost'; // CeruleanFrost

exports.cCeruleanFrost = cCeruleanFrost;
var cCeruleanCrayola = 'CeruleanCrayola'; // CeruleanCrayola

exports.cCeruleanCrayola = cCeruleanCrayola;
var cCGBlue = 'CGBlue'; // CGBlue

exports.cCGBlue = cCGBlue;
var cCGRed = 'CGRed'; // CGRed

exports.cCGRed = cCGRed;
var cChampagne = 'Champagne'; // Champagne

exports.cChampagne = cChampagne;
var cChampagnePink = 'ChampagnePink'; // ChampagnePink

exports.cChampagnePink = cChampagnePink;
var cCharcoal = 'Charcoal'; // Charcoal

exports.cCharcoal = cCharcoal;
var cCharlestonGreen = 'CharlestonGreen'; // CharlestonGreen

exports.cCharlestonGreen = cCharlestonGreen;
var cCharmPink = 'CharmPink'; // CharmPink

exports.cCharmPink = cCharmPink;
var cChartreuseTraditional = 'ChartreuseTraditional'; // ChartreuseTraditional

exports.cChartreuseTraditional = cChartreuseTraditional;
var cChartreuseWeb = 'ChartreuseWeb'; // ChartreuseWeb

exports.cChartreuseWeb = cChartreuseWeb;
var cCherryBlossomPink = 'CherryBlossomPink'; // CherryBlossomPink

exports.cCherryBlossomPink = cCherryBlossomPink;
var cChestnut = 'Chestnut'; // Chestnut

exports.cChestnut = cChestnut;
var cChinaPink = 'ChinaPink'; // ChinaPink

exports.cChinaPink = cChinaPink;
var cChinaRose = 'ChinaRose'; // ChinaRose

exports.cChinaRose = cChinaRose;
var cChineseRed = 'ChineseRed'; // ChineseRed

exports.cChineseRed = cChineseRed;
var cChineseViolet = 'ChineseViolet'; // ChineseViolet

exports.cChineseViolet = cChineseViolet;
var cChineseYellow = 'ChineseYellow'; // ChineseYellow

exports.cChineseYellow = cChineseYellow;
var cChocolateTraditional = 'ChocolateTraditional'; // ChocolateTraditional

exports.cChocolateTraditional = cChocolateTraditional;
var cChocolateWeb = 'ChocolateWeb'; // ChocolateWeb

exports.cChocolateWeb = cChocolateWeb;
var cChromeYellow = 'ChromeYellow'; // ChromeYellow

exports.cChromeYellow = cChromeYellow;
var cCinereous = 'Cinereous'; // Cinereous

exports.cCinereous = cCinereous;
var cCinnabar = 'Cinnabar'; // Cinnabar

exports.cCinnabar = cCinnabar;
var cCinnamonSatin = 'CinnamonSatin'; // CinnamonSatin

exports.cCinnamonSatin = cCinnamonSatin;
var cCitrine = 'Citrine'; // Citrine

exports.cCitrine = cCitrine;
var cCitron = 'Citron'; // Citron

exports.cCitron = cCitron;
var cClaret = 'Claret'; // Claret

exports.cClaret = cClaret;
var cCobaltBlue = 'CobaltBlue'; // CobaltBlue

exports.cCobaltBlue = cCobaltBlue;
var cCocoaBrown = 'CocoaBrown'; // CocoaBrown

exports.cCocoaBrown = cCocoaBrown;
var cCoffee = 'Coffee'; // Coffee

exports.cCoffee = cCoffee;
var cColumbiaBlue = 'ColumbiaBlue'; // ColumbiaBlue

exports.cColumbiaBlue = cColumbiaBlue;
var cCongoPink = 'CongoPink'; // CongoPink

exports.cCongoPink = cCongoPink;
var cCoolGrey = 'CoolGrey'; // CoolGrey

exports.cCoolGrey = cCoolGrey;
var cCopper = 'Copper'; // Copper

exports.cCopper = cCopper;
var cCopperCrayola = 'CopperCrayola'; // CopperCrayola

exports.cCopperCrayola = cCopperCrayola;
var cCopperPenny = 'CopperPenny'; // CopperPenny

exports.cCopperPenny = cCopperPenny;
var cCopperRed = 'CopperRed'; // CopperRed

exports.cCopperRed = cCopperRed;
var cCopperRose = 'CopperRose'; // CopperRose

exports.cCopperRose = cCopperRose;
var cCoquelicot = 'Coquelicot'; // Coquelicot

exports.cCoquelicot = cCoquelicot;
var cCoral = 'Coral'; // Coral

exports.cCoral = cCoral;
var cCoralPink = 'CoralPink'; // CoralPink

exports.cCoralPink = cCoralPink;
var cCordovan = 'Cordovan'; // Cordovan

exports.cCordovan = cCordovan;
var cCorn = 'Corn'; // Corn

exports.cCorn = cCorn;
var cCornflowerBlue = 'CornflowerBlue'; // CornflowerBlue

exports.cCornflowerBlue = cCornflowerBlue;
var cCornsilk = 'Cornsilk'; // Cornsilk

exports.cCornsilk = cCornsilk;
var cCosmicCobalt = 'CosmicCobalt'; // CosmicCobalt

exports.cCosmicCobalt = cCosmicCobalt;
var cCosmicLatte = 'CosmicLatte'; // CosmicLatte

exports.cCosmicLatte = cCosmicLatte;
var cCoyoteBrown = 'CoyoteBrown'; // CoyoteBrown

exports.cCoyoteBrown = cCoyoteBrown;
var cCottonCandy = 'CottonCandy'; // CottonCandy

exports.cCottonCandy = cCottonCandy;
var cCream = 'Cream'; // Cream

exports.cCream = cCream;
var cCrimson = 'Crimson'; // Crimson

exports.cCrimson = cCrimson;
var cCrimsonUA = 'CrimsonUA'; // CrimsonUA

exports.cCrimsonUA = cCrimsonUA;
var cCultured = 'Cultured'; // Cultured

exports.cCultured = cCultured;
var cCyanProcess = 'CyanProcess'; // CyanProcess

exports.cCyanProcess = cCyanProcess;
var cCyberGrape = 'CyberGrape'; // CyberGrape

exports.cCyberGrape = cCyberGrape;
var cCyberYellow = 'CyberYellow'; // CyberYellow

exports.cCyberYellow = cCyberYellow;
var cCyclamen = 'Cyclamen'; // Cyclamen

exports.cCyclamen = cCyclamen;
var cDarkBlueGray = 'DarkBlueGray'; // DarkBlueGray

exports.cDarkBlueGray = cDarkBlueGray;
var cDarkBrown = 'DarkBrown'; // DarkBrown

exports.cDarkBrown = cDarkBrown;
var cDarkByzantium = 'DarkByzantium'; // DarkByzantium

exports.cDarkByzantium = cDarkByzantium;
var cDarkCornflowerBlue = 'DarkCornflowerBlue'; // DarkCornflowerBlue

exports.cDarkCornflowerBlue = cDarkCornflowerBlue;
var cDarkCyan = 'DarkCyan'; // DarkCyan

exports.cDarkCyan = cDarkCyan;
var cDarkElectricBlue = 'DarkElectricBlue'; // DarkElectricBlue

exports.cDarkElectricBlue = cDarkElectricBlue;
var cDarkGoldenrod = 'DarkGoldenrod'; // DarkGoldenrod

exports.cDarkGoldenrod = cDarkGoldenrod;
var cDarkGreen = 'DarkGreen'; // DarkGreen

exports.cDarkGreen = cDarkGreen;
var cDarkGreenX11 = 'DarkGreenX11'; // DarkGreenX11

exports.cDarkGreenX11 = cDarkGreenX11;
var cDarkJungleGreen = 'DarkJungleGreen'; // DarkJungleGreen

exports.cDarkJungleGreen = cDarkJungleGreen;
var cDarkKhaki = 'DarkKhaki'; // DarkKhaki

exports.cDarkKhaki = cDarkKhaki;
var cDarkLava = 'DarkLava'; // DarkLava

exports.cDarkLava = cDarkLava;
var cDarkLiver = 'DarkLiver'; // DarkLiver

exports.cDarkLiver = cDarkLiver;
var cDarkLiverHorses = 'DarkLiverHorses'; // DarkLiverHorses

exports.cDarkLiverHorses = cDarkLiverHorses;
var cDarkMagenta = 'DarkMagenta'; // DarkMagenta

exports.cDarkMagenta = cDarkMagenta;
var cDarkMossGreen = 'DarkMossGreen'; // DarkMossGreen

exports.cDarkMossGreen = cDarkMossGreen;
var cDarkOliveGreen = 'DarkOliveGreen'; // DarkOliveGreen

exports.cDarkOliveGreen = cDarkOliveGreen;
var cDarkOrange = 'DarkOrange'; // DarkOrange

exports.cDarkOrange = cDarkOrange;
var cDarkOrchid = 'DarkOrchid'; // DarkOrchid

exports.cDarkOrchid = cDarkOrchid;
var cDarkPastelGreen = 'DarkPastelGreen'; // DarkPastelGreen

exports.cDarkPastelGreen = cDarkPastelGreen;
var cDarkPurple = 'DarkPurple'; // DarkPurple

exports.cDarkPurple = cDarkPurple;
var cDarkRed = 'DarkRed'; // DarkRed

exports.cDarkRed = cDarkRed;
var cDarkSalmon = 'DarkSalmon'; // DarkSalmon

exports.cDarkSalmon = cDarkSalmon;
var cDarkSeaGreen = 'DarkSeaGreen'; // DarkSeaGreen

exports.cDarkSeaGreen = cDarkSeaGreen;
var cDarkSienna = 'DarkSienna'; // DarkSienna

exports.cDarkSienna = cDarkSienna;
var cDarkSkyBlue = 'DarkSkyBlue'; // DarkSkyBlue

exports.cDarkSkyBlue = cDarkSkyBlue;
var cDarkSlateBlue = 'DarkSlateBlue'; // DarkSlateBlue

exports.cDarkSlateBlue = cDarkSlateBlue;
var cDarkSlateGray = 'DarkSlateGray'; // DarkSlateGray

exports.cDarkSlateGray = cDarkSlateGray;
var cDarkSpringGreen = 'DarkSpringGreen'; // DarkSpringGreen

exports.cDarkSpringGreen = cDarkSpringGreen;
var cDarkTurquoise = 'DarkTurquoise'; // DarkTurquoise

exports.cDarkTurquoise = cDarkTurquoise;
var cDarkViolet = 'DarkViolet'; // DarkViolet

exports.cDarkViolet = cDarkViolet;
var cDartmouthGreen = 'DartmouthGreen'; // DartmouthGreen

exports.cDartmouthGreen = cDartmouthGreen;
var cDavysGrey = 'DavysGrey'; // DavysGrey

exports.cDavysGrey = cDavysGrey;
var cDeepCerise = 'DeepCerise'; // DeepCerise

exports.cDeepCerise = cDeepCerise;
var cDeepChampagne = 'DeepChampagne'; // DeepChampagne

exports.cDeepChampagne = cDeepChampagne;
var cDeepChestnut = 'DeepChestnut'; // DeepChestnut

exports.cDeepChestnut = cDeepChestnut;
var cDeepJungleGreen = 'DeepJungleGreen'; // DeepJungleGreen

exports.cDeepJungleGreen = cDeepJungleGreen;
var cDeepPink = 'DeepPink'; // DeepPink

exports.cDeepPink = cDeepPink;
var cDeepSaffron = 'DeepSaffron'; // DeepSaffron

exports.cDeepSaffron = cDeepSaffron;
var cDeepSkyBlue = 'DeepSkyBlue'; // DeepSkyBlue

exports.cDeepSkyBlue = cDeepSkyBlue;
var cDeepSpaceSparkle = 'DeepSpaceSparkle'; // DeepSpaceSparkle

exports.cDeepSpaceSparkle = cDeepSpaceSparkle;
var cDeepTaupe = 'DeepTaupe'; // DeepTaupe

exports.cDeepTaupe = cDeepTaupe;
var cDenim = 'Denim'; // Denim

exports.cDenim = cDenim;
var cDenimBlue = 'DenimBlue'; // DenimBlue

exports.cDenimBlue = cDenimBlue;
var cDesert = 'Desert'; // Desert

exports.cDesert = cDesert;
var cDesertSand = 'DesertSand'; // DesertSand

exports.cDesertSand = cDesertSand;
var cDimGray = 'DimGray'; // DimGray

exports.cDimGray = cDimGray;
var cDodgerBlue = 'DodgerBlue'; // DodgerBlue

exports.cDodgerBlue = cDodgerBlue;
var cDogwoodRose = 'DogwoodRose'; // DogwoodRose

exports.cDogwoodRose = cDogwoodRose;
var cDrab = 'Drab'; // Drab

exports.cDrab = cDrab;
var cDukeBlue = 'DukeBlue'; // DukeBlue

exports.cDukeBlue = cDukeBlue;
var cDutchWhite = 'DutchWhite'; // DutchWhite

exports.cDutchWhite = cDutchWhite;
var cEarthYellow = 'EarthYellow'; // EarthYellow

exports.cEarthYellow = cEarthYellow;
var cEbony = 'Ebony'; // Ebony

exports.cEbony = cEbony;
var cEcru = 'Ecru'; // Ecru

exports.cEcru = cEcru;
var cEerieBlack = 'EerieBlack'; // EerieBlack

exports.cEerieBlack = cEerieBlack;
var cEggplant = 'Eggplant'; // Eggplant

exports.cEggplant = cEggplant;
var cEggshell = 'Eggshell'; // Eggshell

exports.cEggshell = cEggshell;
var cEgyptianBlue = 'EgyptianBlue'; // EgyptianBlue

exports.cEgyptianBlue = cEgyptianBlue;
var cElectricBlue = 'ElectricBlue'; // ElectricBlue

exports.cElectricBlue = cElectricBlue;
var cElectricGreen = 'ElectricGreen'; // ElectricGreen

exports.cElectricGreen = cElectricGreen;
var cElectricIndigo = 'ElectricIndigo'; // ElectricIndigo

exports.cElectricIndigo = cElectricIndigo;
var cElectricLime = 'ElectricLime'; // ElectricLime

exports.cElectricLime = cElectricLime;
var cElectricPurple = 'ElectricPurple'; // ElectricPurple

exports.cElectricPurple = cElectricPurple;
var cElectricViolet = 'ElectricViolet'; // ElectricViolet

exports.cElectricViolet = cElectricViolet;
var cEmerald = 'Emerald'; // Emerald

exports.cEmerald = cEmerald;
var cEminence = 'Eminence'; // Eminence

exports.cEminence = cEminence;
var cEnglishGreen = 'EnglishGreen'; // EnglishGreen

exports.cEnglishGreen = cEnglishGreen;
var cEnglishLavender = 'EnglishLavender'; // EnglishLavender

exports.cEnglishLavender = cEnglishLavender;
var cEnglishRed = 'EnglishRed'; // EnglishRed

exports.cEnglishRed = cEnglishRed;
var cEnglishVermillion = 'EnglishVermillion'; // EnglishVermillion

exports.cEnglishVermillion = cEnglishVermillion;
var cEnglishViolet = 'EnglishViolet'; // EnglishViolet

exports.cEnglishViolet = cEnglishViolet;
var cErin = 'Erin'; // Erin

exports.cErin = cErin;
var cEtonBlue = 'EtonBlue'; // EtonBlue

exports.cEtonBlue = cEtonBlue;
var cFallow = 'Fallow'; // Fallow

exports.cFallow = cFallow;
var cFaluRed = 'FaluRed'; // FaluRed

exports.cFaluRed = cFaluRed;
var cFandango = 'Fandango'; // Fandango

exports.cFandango = cFandango;
var cFandangoPink = 'FandangoPink'; // FandangoPink

exports.cFandangoPink = cFandangoPink;
var cFashionFuchsia = 'FashionFuchsia'; // FashionFuchsia

exports.cFashionFuchsia = cFashionFuchsia;
var cFawn = 'Fawn'; // Fawn

exports.cFawn = cFawn;
var cFeldgrau = 'Feldgrau'; // Feldgrau

exports.cFeldgrau = cFeldgrau;
var cFernGreen = 'FernGreen'; // FernGreen

exports.cFernGreen = cFernGreen;
var cFieldDrab = 'FieldDrab'; // FieldDrab

exports.cFieldDrab = cFieldDrab;
var cFieryRose = 'FieryRose'; // FieryRose

exports.cFieryRose = cFieryRose;
var cFirebrick = 'Firebrick'; // Firebrick

exports.cFirebrick = cFirebrick;
var cFireEngineRed = 'FireEngineRed'; // FireEngineRed

exports.cFireEngineRed = cFireEngineRed;
var cFireOpal = 'FireOpal'; // FireOpal

exports.cFireOpal = cFireOpal;
var cFlame = 'Flame'; // Flame

exports.cFlame = cFlame;
var cFlax = 'Flax'; // Flax

exports.cFlax = cFlax;
var cFlirt = 'Flirt'; // Flirt

exports.cFlirt = cFlirt;
var cFloralWhite = 'FloralWhite'; // FloralWhite

exports.cFloralWhite = cFloralWhite;
var cFluorescentBlue = 'FluorescentBlue'; // FluorescentBlue

exports.cFluorescentBlue = cFluorescentBlue;
var cForestGreenCrayola = 'ForestGreenCrayola'; // ForestGreenCrayola

exports.cForestGreenCrayola = cForestGreenCrayola;
var cForestGreenTraditional = 'ForestGreenTraditional'; // ForestGreenTraditional

exports.cForestGreenTraditional = cForestGreenTraditional;
var cForestGreenWeb = 'ForestGreenWeb'; // ForestGreenWeb

exports.cForestGreenWeb = cForestGreenWeb;
var cFrenchBeige = 'FrenchBeige'; // FrenchBeige

exports.cFrenchBeige = cFrenchBeige;
var cFrenchBistre = 'FrenchBistre'; // FrenchBistre

exports.cFrenchBistre = cFrenchBistre;
var cFrenchBlue = 'FrenchBlue'; // FrenchBlue

exports.cFrenchBlue = cFrenchBlue;
var cFrenchFuchsia = 'FrenchFuchsia'; // FrenchFuchsia

exports.cFrenchFuchsia = cFrenchFuchsia;
var cFrenchLilac = 'FrenchLilac'; // FrenchLilac

exports.cFrenchLilac = cFrenchLilac;
var cFrenchLime = 'FrenchLime'; // FrenchLime

exports.cFrenchLime = cFrenchLime;
var cFrenchMauve = 'FrenchMauve'; // FrenchMauve

exports.cFrenchMauve = cFrenchMauve;
var cFrenchPink = 'FrenchPink'; // FrenchPink

exports.cFrenchPink = cFrenchPink;
var cFrenchRaspberry = 'FrenchRaspberry'; // FrenchRaspberry

exports.cFrenchRaspberry = cFrenchRaspberry;
var cFrenchRose = 'FrenchRose'; // FrenchRose

exports.cFrenchRose = cFrenchRose;
var cFrenchSkyBlue = 'FrenchSkyBlue'; // FrenchSkyBlue

exports.cFrenchSkyBlue = cFrenchSkyBlue;
var cFrenchViolet = 'FrenchViolet'; // FrenchViolet

exports.cFrenchViolet = cFrenchViolet;
var cFrostbite = 'Frostbite'; // Frostbite

exports.cFrostbite = cFrostbite;
var cFuchsia = 'Fuchsia'; // Fuchsia

exports.cFuchsia = cFuchsia;
var cFuchsiaCrayola = 'FuchsiaCrayola'; // FuchsiaCrayola

exports.cFuchsiaCrayola = cFuchsiaCrayola;
var cFuchsiaPurple = 'FuchsiaPurple'; // FuchsiaPurple

exports.cFuchsiaPurple = cFuchsiaPurple;
var cFuchsiaRose = 'FuchsiaRose'; // FuchsiaRose

exports.cFuchsiaRose = cFuchsiaRose;
var cFulvous = 'Fulvous'; // Fulvous

exports.cFulvous = cFulvous;
var cFuzzyWuzzy = 'FuzzyWuzzy'; // FuzzyWuzzy
// https://en.wikipedia.org/wiki/List_of_colors:_G%E2%80%93M

exports.cFuzzyWuzzy = cFuzzyWuzzy;
var cGainsboro = 'Gainsboro'; // Gainsboro

exports.cGainsboro = cGainsboro;
var cGamboge = 'Gamboge'; // Gamboge

exports.cGamboge = cGamboge;
var cGenericViridian = 'GenericViridian'; // GenericViridian

exports.cGenericViridian = cGenericViridian;
var cGhostWhite = 'GhostWhite'; // GhostWhite

exports.cGhostWhite = cGhostWhite;
var cGlaucous = 'Glaucous'; // Glaucous

exports.cGlaucous = cGlaucous;
var cGlossyGrape = 'GlossyGrape'; // GlossyGrape

exports.cGlossyGrape = cGlossyGrape;
var cGOGreen = 'GOGreen'; // GOGreen

exports.cGOGreen = cGOGreen;
var cGold = 'Gold'; // Gold

exports.cGold = cGold;
var cGoldMetallic = 'GoldMetallic'; // GoldMetallic

exports.cGoldMetallic = cGoldMetallic;
var cGoldWebGolden = 'GoldWebGolden'; // GoldWebGolden

exports.cGoldWebGolden = cGoldWebGolden;
var cGoldCrayola = 'GoldCrayola'; // GoldCrayola

exports.cGoldCrayola = cGoldCrayola;
var cGoldFusion = 'GoldFusion'; // GoldFusion

exports.cGoldFusion = cGoldFusion;
var cGoldenBrown = 'GoldenBrown'; // GoldenBrown

exports.cGoldenBrown = cGoldenBrown;
var cGoldenPoppy = 'GoldenPoppy'; // GoldenPoppy

exports.cGoldenPoppy = cGoldenPoppy;
var cGoldenYellow = 'GoldenYellow'; // GoldenYellow

exports.cGoldenYellow = cGoldenYellow;
var cGoldenrod = 'Goldenrod'; // Goldenrod

exports.cGoldenrod = cGoldenrod;
var cGraniteGray = 'GraniteGray'; // GraniteGray

exports.cGraniteGray = cGraniteGray;
var cGrannySmithApple = 'GrannySmithApple'; // GrannySmithApple

exports.cGrannySmithApple = cGrannySmithApple;
var cGrayWeb = 'GrayWeb'; // GrayWeb

exports.cGrayWeb = cGrayWeb;
var cGrayX11 = 'GrayX11'; // GrayX11

exports.cGrayX11 = cGrayX11;
var cGreenCrayola = 'GreenCrayola'; // GreenCrayola

exports.cGreenCrayola = cGreenCrayola;
var cGreenWeb = 'GreenWeb'; // GreenWeb

exports.cGreenWeb = cGreenWeb;
var cGreenMunsell = 'GreenMunsell'; // GreenMunsell

exports.cGreenMunsell = cGreenMunsell;
var cGreenNCS = 'GreenNCS'; // GreenNCS

exports.cGreenNCS = cGreenNCS;
var cGreenPantone = 'GreenPantone'; // GreenPantone

exports.cGreenPantone = cGreenPantone;
var cGreenPigment = 'GreenPigment'; // GreenPigment

exports.cGreenPigment = cGreenPigment;
var cGreenRYB = 'GreenRYB'; // GreenRYB

exports.cGreenRYB = cGreenRYB;
var cGreenBlue = 'GreenBlue'; // GreenBlue

exports.cGreenBlue = cGreenBlue;
var cGreenBlueCrayola = 'GreenBlueCrayola'; // GreenBlueCrayola

exports.cGreenBlueCrayola = cGreenBlueCrayola;
var cGreenCyan = 'GreenCyan'; // GreenCyan

exports.cGreenCyan = cGreenCyan;
var cGreenLizard = 'GreenLizard'; // GreenLizard

exports.cGreenLizard = cGreenLizard;
var cGreenSheen = 'GreenSheen'; // GreenSheen

exports.cGreenSheen = cGreenSheen;
var cGreenYellow = 'GreenYellow'; // GreenYellow

exports.cGreenYellow = cGreenYellow;
var cGreenYellowCrayola = 'GreenYellowCrayola'; // GreenYellowCrayola

exports.cGreenYellowCrayola = cGreenYellowCrayola;
var cGrullo = 'Grullo'; // Grullo

exports.cGrullo = cGrullo;
var cGunmetal = 'Gunmetal'; // Gunmetal

exports.cGunmetal = cGunmetal;
var cHanBlue = 'HanBlue'; // HanBlue

exports.cHanBlue = cHanBlue;
var cHanPurple = 'HanPurple'; // HanPurple

exports.cHanPurple = cHanPurple;
var cHansaYellow = 'HansaYellow'; // HansaYellow

exports.cHansaYellow = cHansaYellow;
var cHarlequin = 'Harlequin'; // Harlequin

exports.cHarlequin = cHarlequin;
var cHarvestGold = 'HarvestGold'; // HarvestGold

exports.cHarvestGold = cHarvestGold;
var cHeatWave = 'HeatWave'; // HeatWave

exports.cHeatWave = cHeatWave;
var cHeliotrope = 'Heliotrope'; // Heliotrope

exports.cHeliotrope = cHeliotrope;
var cHeliotropeGray = 'HeliotropeGray'; // HeliotropeGray

exports.cHeliotropeGray = cHeliotropeGray;
var cHollywoodCerise = 'HollywoodCerise'; // HollywoodCerise

exports.cHollywoodCerise = cHollywoodCerise;
var cHoneydew = 'Honeydew'; // Honeydew

exports.cHoneydew = cHoneydew;
var cHonoluluBlue = 'HonoluluBlue'; // HonoluluBlue

exports.cHonoluluBlue = cHonoluluBlue;
var cHookersGreen = 'HookersGreen'; // HookersGreen

exports.cHookersGreen = cHookersGreen;
var cHotMagenta = 'HotMagenta'; // HotMagenta

exports.cHotMagenta = cHotMagenta;
var cHotPink = 'HotPink'; // HotPink

exports.cHotPink = cHotPink;
var cHunterGreen = 'HunterGreen'; // HunterGreen

exports.cHunterGreen = cHunterGreen;
var cIceberg = 'Iceberg'; // Iceberg

exports.cIceberg = cIceberg;
var cIcterine = 'Icterine'; // Icterine

exports.cIcterine = cIcterine;
var cIlluminatingEmerald = 'IlluminatingEmerald'; // IlluminatingEmerald

exports.cIlluminatingEmerald = cIlluminatingEmerald;
var cImperialRed = 'cmperialRed'; // cmperialRed

exports.cImperialRed = cImperialRed;
var cInchworm = 'Inchworm'; // Inchworm

exports.cInchworm = cInchworm;
var cIndependence = 'Independence'; // Independence

exports.cIndependence = cIndependence;
var cIndiaGreen = 'IndiaGreen'; // IndiaGreen

exports.cIndiaGreen = cIndiaGreen;
var cIndianRed = 'IndianRed'; // IndianRed

exports.cIndianRed = cIndianRed;
var cIndianYellow = 'IndianYellow'; // IndianYellow

exports.cIndianYellow = cIndianYellow;
var cIndigo = 'Indigo'; // Indigo

exports.cIndigo = cIndigo;
var cIndigoDye = 'IndigoDye'; // IndigoDye

exports.cIndigoDye = cIndigoDye;
var cInternationalOrangeAerospace = 'InternationalOrangeAerospace'; // InternationalOrangeAerospace

exports.cInternationalOrangeAerospace = cInternationalOrangeAerospace;
var cInternationalOrangeEngineering = 'InternationalOrangeEngineering'; // InternationalOrangeEngineering

exports.cInternationalOrangeEngineering = cInternationalOrangeEngineering;
var cInternationalOrangeGoldenGateBridge = 'InternationalOrangeGoldenGateBridge'; // InternationalOrangeGoldenGateBridge

exports.cInternationalOrangeGoldenGateBridge = cInternationalOrangeGoldenGateBridge;
var cIris = 'Iris'; // Iris

exports.cIris = cIris;
var cIrresistible = 'Irresistible'; // Irresistible

exports.cIrresistible = cIrresistible;
var cIsabelline = 'Isabelline'; // Isabelline

exports.cIsabelline = cIsabelline;
var cItalianSkyBlue = 'ItalianSkyBlue'; // ItalianSkyBlue

exports.cItalianSkyBlue = cItalianSkyBlue;
var cIvory = 'Ivory'; // Ivory

exports.cIvory = cIvory;
var cJade = 'Jade'; // Jade

exports.cJade = cJade;
var cJapaneseCarmine = 'JapaneseCarmine'; // JapaneseCarmine

exports.cJapaneseCarmine = cJapaneseCarmine;
var cJapaneseViolet = 'JapaneseViolet'; // JapaneseViolet

exports.cJapaneseViolet = cJapaneseViolet;
var cJasmine = 'Jasmine'; // Jasmine

exports.cJasmine = cJasmine;
var cJazzberryJam = 'JazzberryJam'; // JazzberryJam

exports.cJazzberryJam = cJazzberryJam;
var cJet = 'Jet'; // Jet

exports.cJet = cJet;
var cJonquil = 'Jonquil'; // Jonquil

exports.cJonquil = cJonquil;
var cJuneBud = 'JuneBud'; // JuneBud

exports.cJuneBud = cJuneBud;
var cJungleGreen = 'JungleGreen'; // JungleGreen

exports.cJungleGreen = cJungleGreen;
var cKellyGreen = 'KellyGreen'; // KellyGreen

exports.cKellyGreen = cKellyGreen;
var cKeppel = 'Keppel'; // Keppel

exports.cKeppel = cKeppel;
var cKeyLime = 'KeyLime'; // KeyLime

exports.cKeyLime = cKeyLime;
var cKhakiWeb = 'KhakiWeb'; // KhakiWeb

exports.cKhakiWeb = cKhakiWeb;
var cKhakiX11 = 'KhakiX11'; // KhakiX11

exports.cKhakiX11 = cKhakiX11;
var cKobe = 'Kobe'; // Kobe

exports.cKobe = cKobe;
var cKobi = 'Kobi'; // Kobi

exports.cKobi = cKobi;
var cKobicha = 'Kobicha'; // Kobicha

exports.cKobicha = cKobicha;
var cKombuGreen = 'KombuGreen'; // KombuGreen

exports.cKombuGreen = cKombuGreen;
var cKSUPurple = 'KSUPurple'; // KSUPurple

exports.cKSUPurple = cKSUPurple;
var cLanguidLavender = 'LanguidLavender'; // LanguidLavender

exports.cLanguidLavender = cLanguidLavender;
var cLapisLazuli = 'LapisLazuli'; // LapisLazuli

exports.cLapisLazuli = cLapisLazuli;
var cLaserLemon = 'LaserLemon'; // LaserLemon

exports.cLaserLemon = cLaserLemon;
var cLaurelGreen = 'LaurelGreen'; // LaurelGreen

exports.cLaurelGreen = cLaurelGreen;
var cLava = 'Lava'; // Lava

exports.cLava = cLava;
var cLavenderFloral = 'LavenderFloral'; // LavenderFloral

exports.cLavenderFloral = cLavenderFloral;
var cLavenderWeb = 'LavenderWeb'; // LavenderWeb

exports.cLavenderWeb = cLavenderWeb;
var cLavenderBlue = 'LavenderBlue'; // LavenderBlue

exports.cLavenderBlue = cLavenderBlue;
var cLavenderBlush = 'LavenderBlush'; // LavenderBlush

exports.cLavenderBlush = cLavenderBlush;
var cLavenderGray = 'LavenderGray'; // LavenderGray

exports.cLavenderGray = cLavenderGray;
var cLawnGreen = 'LawnGreen'; // LawnGreen

exports.cLawnGreen = cLawnGreen;
var cLemon = 'Lemon'; // Lemon

exports.cLemon = cLemon;
var cLemonChiffon = 'LemonChiffon'; // LemonChiffon

exports.cLemonChiffon = cLemonChiffon;
var cLemonCurry = 'LemonCurry'; // LemonCurry

exports.cLemonCurry = cLemonCurry;
var cLemonGlacier = 'LemonGlacier'; // LemonGlacier

exports.cLemonGlacier = cLemonGlacier;
var cLemonMeringue = 'LemonMeringue'; // LemonMeringue

exports.cLemonMeringue = cLemonMeringue;
var cLemonYellow = 'LemonYellow'; // LemonYellow

exports.cLemonYellow = cLemonYellow;
var cLemonYellowCrayola = 'LemonYellowCrayola'; // LemonYellowCrayola

exports.cLemonYellowCrayola = cLemonYellowCrayola;
var cLiberty = 'Liberty'; // Liberty

exports.cLiberty = cLiberty;
var cLightBlue = 'LightBlue'; // LightBlue

exports.cLightBlue = cLightBlue;
var cLightCoral = 'LightCoral'; // LightCoral

exports.cLightCoral = cLightCoral;
var cLightCornflowerBlue = 'LightCornflowerBlue'; // LightCornflowerBlue

exports.cLightCornflowerBlue = cLightCornflowerBlue;
var cLightCyan = 'LightCyan'; // LightCyan

exports.cLightCyan = cLightCyan;
var cLightFrenchBeige = 'LightFrenchBeige'; // LightFrenchBeige

exports.cLightFrenchBeige = cLightFrenchBeige;
var cLightGoldenrodYellow = 'LightGoldenrodYellow'; // LightGoldenrodYellow

exports.cLightGoldenrodYellow = cLightGoldenrodYellow;
var cLightGray = 'LightGray'; // LightGray

exports.cLightGray = cLightGray;
var cLightGreen = 'LightGreen'; // LightGreen

exports.cLightGreen = cLightGreen;
var cLightOrange = 'LightOrange'; // LightOrange

exports.cLightOrange = cLightOrange;
var cLightPeriwinkle = 'LightPeriwinkle'; // LightPeriwinkle

exports.cLightPeriwinkle = cLightPeriwinkle;
var cLightPink = 'LightPink'; // LightPink

exports.cLightPink = cLightPink;
var cLightSalmon = 'LightSalmon'; // LightSalmon

exports.cLightSalmon = cLightSalmon;
var cLightSeaGreen = 'LightSeaGreen'; // LightSeaGreen

exports.cLightSeaGreen = cLightSeaGreen;
var cLightSkyBlue = 'LightSkyBlue'; // LightSkyBlue

exports.cLightSkyBlue = cLightSkyBlue;
var cLightSlateGray = 'LightSlateGray'; // LightSlateGray

exports.cLightSlateGray = cLightSlateGray;
var cLightSteelBlue = 'LightSteelBlue'; // LightSteelBlue

exports.cLightSteelBlue = cLightSteelBlue;
var cLightYellow = 'LightYellow'; // LightYellow

exports.cLightYellow = cLightYellow;
var cLilac = 'Lilac'; // Lilac

exports.cLilac = cLilac;
var cLilacLuster = 'LilacLuster'; // LilacLuster

exports.cLilacLuster = cLilacLuster;
var cLimeColorWheel = 'LimeColorWheel'; // LimeColorWheel

exports.cLimeColorWheel = cLimeColorWheel;
var cLimeWeb = 'LimeWeb'; // LimeWeb

exports.cLimeWeb = cLimeWeb;
var cLimeGreen = 'LimeGreen'; // LimeGreen

exports.cLimeGreen = cLimeGreen;
var cLincolnGreen = 'LincolnGreen'; // LincolnGreen

exports.cLincolnGreen = cLincolnGreen;
var cLinen = 'Linen'; // Linen

exports.cLinen = cLinen;
var cLion = 'Lion'; // Lion

exports.cLion = cLion;
var cLiseranPurple = 'LiseranPurple'; // LiseranPurple

exports.cLiseranPurple = cLiseranPurple;
var cLittleBoyBlue = 'LittleBoyBlue'; // LittleBoyBlue

exports.cLittleBoyBlue = cLittleBoyBlue;
var cLiver = 'Liver'; // Liver

exports.cLiver = cLiver;
var cLiverDogs = 'LiverDogs'; // LiverDogs

exports.cLiverDogs = cLiverDogs;
var cLiverOrgan = 'LiverOrgan'; // LiverOrgan

exports.cLiverOrgan = cLiverOrgan;
var cLiverChestnut = 'LiverChestnut'; // LiverChestnut

exports.cLiverChestnut = cLiverChestnut;
var cLivid = 'Livid'; // Livid

exports.cLivid = cLivid;
var cMacaroniAndCheese = 'MacaroniAndCheese'; // MacaroniAndCheese

exports.cMacaroniAndCheese = cMacaroniAndCheese;
var cMadderLake = 'MadderLake'; // MadderLake

exports.cMadderLake = cMadderLake;
var cMagentaCrayola = 'MagentaCrayola'; // MagentaCrayola

exports.cMagentaCrayola = cMagentaCrayola;
var cMagentaDye = 'MagentaDye'; // MagentaDye

exports.cMagentaDye = cMagentaDye;
var cMagentaPantone = 'MagentaPantone'; // MagentaPantone

exports.cMagentaPantone = cMagentaPantone;
var cMagentaProcess = 'MagentaProcess'; // MagentaProcess

exports.cMagentaProcess = cMagentaProcess;
var cMagentaHaze = 'MagentaHaze'; // MagentaHaze

exports.cMagentaHaze = cMagentaHaze;
var cMagicMint = 'MagicMint'; // MagicMint

exports.cMagicMint = cMagicMint;
var cMagnolia = 'Magnolia'; // Magnolia

exports.cMagnolia = cMagnolia;
var cMahogany = 'Mahogany'; // Mahogany

exports.cMahogany = cMahogany;
var cMaize = 'Maize'; // Maize

exports.cMaize = cMaize;
var cMaizeCrayola = 'MaizeCrayola'; // MaizeCrayola

exports.cMaizeCrayola = cMaizeCrayola;
var cMajorelleBlue = 'MajorelleBlue'; // MajorelleBlue

exports.cMajorelleBlue = cMajorelleBlue;
var cMalachite = 'Malachite'; // Malachite

exports.cMalachite = cMalachite;
var cManatee = 'Manatee'; // Manatee

exports.cManatee = cManatee;
var cMandarin = 'Mandarin'; // Mandarin

exports.cMandarin = cMandarin;
var cMango = 'Mango'; // Mango

exports.cMango = cMango;
var cMangoTango = 'MangoTango'; // MangoTango

exports.cMangoTango = cMangoTango;
var cMantis = 'Mantis'; // Mantis

exports.cMantis = cMantis;
var cMardiGras = 'MardiGras'; // MardiGras

exports.cMardiGras = cMardiGras;
var cMarigold = 'Marigold'; // Marigold

exports.cMarigold = cMarigold;
var cMaroonCrayola = 'MaroonCrayola'; // MaroonCrayola

exports.cMaroonCrayola = cMaroonCrayola;
var cMaroonWeb = 'MaroonWeb'; // MaroonWeb

exports.cMaroonWeb = cMaroonWeb;
var cMaroonX11 = 'MaroonX11'; // MaroonX11

exports.cMaroonX11 = cMaroonX11;
var cMauve = 'Mauve'; // Mauve

exports.cMauve = cMauve;
var cMauveTaupe = 'MauveTaupe'; // MauveTaupe

exports.cMauveTaupe = cMauveTaupe;
var cMauvelous = 'Mauvelous'; // Mauvelous

exports.cMauvelous = cMauvelous;
var cMaximumBlue = 'MaximumBlue'; // MaximumBlue

exports.cMaximumBlue = cMaximumBlue;
var cMaximumBlueGreen = 'MaximumBlueGreen'; // MaximumBlueGreen

exports.cMaximumBlueGreen = cMaximumBlueGreen;
var cMaximumBluePurple = 'MaximumBluePurple'; // MaximumBluePurple

exports.cMaximumBluePurple = cMaximumBluePurple;
var cMaximumGreen = 'MaximumGreen'; // MaximumGreen

exports.cMaximumGreen = cMaximumGreen;
var cMaximumGreenYellow = 'MaximumGreenYellow'; // MaximumGreenYellow

exports.cMaximumGreenYellow = cMaximumGreenYellow;
var cMaximumPurple = 'MaximumPurple'; // MaximumPurple

exports.cMaximumPurple = cMaximumPurple;
var cMaximumRed = 'MaximumRed'; // MaximumRed

exports.cMaximumRed = cMaximumRed;
var cMaximumRedPurple = 'MaximumRedPurple'; // MaximumRedPurple

exports.cMaximumRedPurple = cMaximumRedPurple;
var cMaximumYellow = 'MaximumYellow'; // MaximumYellow

exports.cMaximumYellow = cMaximumYellow;
var cMaximumYellowRed = 'MaximumYellowRed'; // MaximumYellowRed

exports.cMaximumYellowRed = cMaximumYellowRed;
var cMayGreen = 'MayGreen'; // MayGreen

exports.cMayGreen = cMayGreen;
var cMayaBlue = 'MayaBlue'; // MayaBlue

exports.cMayaBlue = cMayaBlue;
var cMediumAquamarine = 'MediumAquamarine'; // MediumAquamarine

exports.cMediumAquamarine = cMediumAquamarine;
var cMediumBlue = 'MediumBlue'; // MediumBlue

exports.cMediumBlue = cMediumBlue;
var cMediumCandyAppleRed = 'MediumCandyAppleRed'; // MediumCandyAppleRed

exports.cMediumCandyAppleRed = cMediumCandyAppleRed;
var cMediumCarmine = 'MediumCarmine'; // MediumCarmine

exports.cMediumCarmine = cMediumCarmine;
var cMediumChampagne = 'MediumChampagne'; // MediumChampagne

exports.cMediumChampagne = cMediumChampagne;
var cMediumOrchid = 'MediumOrchid'; // MediumOrchid

exports.cMediumOrchid = cMediumOrchid;
var cMediumPurple = 'MediumPurple'; // MediumPurple

exports.cMediumPurple = cMediumPurple;
var cMediumSeaGreen = 'MediumSeaGreen'; // MediumSeaGreen

exports.cMediumSeaGreen = cMediumSeaGreen;
var cMediumSlateBlue = 'MediumSlateBlue'; // MediumSlateBlue

exports.cMediumSlateBlue = cMediumSlateBlue;
var cMediumSpringGreen = 'MediumSpringGreen'; // MediumSpringGreen

exports.cMediumSpringGreen = cMediumSpringGreen;
var cMediumTurquoise = 'MediumTurquoise'; // MediumTurquoise

exports.cMediumTurquoise = cMediumTurquoise;
var cMediumVioletRed = 'MediumVioletRed'; // MediumVioletRed

exports.cMediumVioletRed = cMediumVioletRed;
var cMellowApricot = 'MellowApricot'; // MellowApricot

exports.cMellowApricot = cMellowApricot;
var cMellowYellow = 'MellowYellow'; // MellowYellow

exports.cMellowYellow = cMellowYellow;
var cMelon = 'Melon'; // Melon

exports.cMelon = cMelon;
var cMetallicGold = 'MetallicGold'; // MetallicGold

exports.cMetallicGold = cMetallicGold;
var cMetallicSeaweed = 'MetallicSeaweed'; // MetallicSeaweed

exports.cMetallicSeaweed = cMetallicSeaweed;
var cMetallicSunburst = 'MetallicSunburst'; // MetallicSunburst

exports.cMetallicSunburst = cMetallicSunburst;
var cMexicanPink = 'MexicanPink'; // MexicanPink

exports.cMexicanPink = cMexicanPink;
var cMiddleBlue = 'MiddleBlue'; // MiddleBlue

exports.cMiddleBlue = cMiddleBlue;
var cMiddleBlueGreen = 'MiddleBlueGreen'; // MiddleBlueGreen

exports.cMiddleBlueGreen = cMiddleBlueGreen;
var cMiddleBluePurple = 'MiddleBluePurple'; // MiddleBluePurple

exports.cMiddleBluePurple = cMiddleBluePurple;
var cMiddleGrey = 'MiddleGrey'; // MiddleGrey

exports.cMiddleGrey = cMiddleGrey;
var cMiddleGreen = 'MiddleGreen'; // MiddleGreen

exports.cMiddleGreen = cMiddleGreen;
var cMiddleGreenYellow = 'MiddleGreenYellow'; // MiddleGreenYellow

exports.cMiddleGreenYellow = cMiddleGreenYellow;
var cMiddlePurple = 'MiddlePurple'; // MiddlePurple

exports.cMiddlePurple = cMiddlePurple;
var cMiddleRed = 'MiddleRed'; // MiddleRed

exports.cMiddleRed = cMiddleRed;
var cMiddleRedPurple = 'MiddleRedPurple'; // MiddleRedPurple

exports.cMiddleRedPurple = cMiddleRedPurple;
var cMiddleYellow = 'MiddleYellow'; // MiddleYellow

exports.cMiddleYellow = cMiddleYellow;
var cMiddleYellowRed = 'MiddleYellowRed'; // MiddleYellowRed

exports.cMiddleYellowRed = cMiddleYellowRed;
var cMidnight = 'Midnight'; // Midnight

exports.cMidnight = cMidnight;
var cMidnightBlue = 'MidnightBlue'; // MidnightBlue

exports.cMidnightBlue = cMidnightBlue;
var cMidnightGreen = 'MidnightGreen'; // MidnightGreen

exports.cMidnightGreen = cMidnightGreen;
var cMikadoYellow = 'MikadoYellow'; // MikadoYellow

exports.cMikadoYellow = cMikadoYellow;
var cMimiPink = 'MimiPink'; // MimiPink

exports.cMimiPink = cMimiPink;
var cMindaro = 'Mindaro'; // Mindaro

exports.cMindaro = cMindaro;
var cMing = 'Ming'; // Ming

exports.cMing = cMing;
var cMinionYellow = 'MinionYellow'; // MinionYellow

exports.cMinionYellow = cMinionYellow;
var cMint = 'Mint'; // Mint

exports.cMint = cMint;
var cMintCream = 'MintCream'; // MintCream

exports.cMintCream = cMintCream;
var cMintGreen = 'MintGreen'; // MintGreen

exports.cMintGreen = cMintGreen;
var cMistyMoss = 'MistyMoss'; // MistyMoss

exports.cMistyMoss = cMistyMoss;
var cMistyRose = 'MistyRose'; // MistyRose

exports.cMistyRose = cMistyRose;
var cModeBeige = 'ModeBeige'; // ModeBeige

exports.cModeBeige = cModeBeige;
var cMorningBlue = 'MorningBlue'; // MorningBlue

exports.cMorningBlue = cMorningBlue;
var cMossGreen = 'MossGreen'; // MossGreen

exports.cMossGreen = cMossGreen;
var cMountainMeadow = 'MountainMeadow'; // MountainMeadow

exports.cMountainMeadow = cMountainMeadow;
var cMountbattenPink = 'MountbattenPink'; // MountbattenPink

exports.cMountbattenPink = cMountbattenPink;
var cMSUGreen = 'MSUGreen'; // MSUGreen

exports.cMSUGreen = cMSUGreen;
var cMulberry = 'Mulberry'; // Mulberry

exports.cMulberry = cMulberry;
var cMulberryCrayola = 'MulberryCrayola'; // MulberryCrayola

exports.cMulberryCrayola = cMulberryCrayola;
var cMustard = 'Mustard'; // Mustard

exports.cMustard = cMustard;
var cMyrtleGreen = 'MyrtleGreen'; // MyrtleGreen

exports.cMyrtleGreen = cMyrtleGreen;
var cMystic = 'Mystic'; // Mystic

exports.cMystic = cMystic;
var cMysticMaroon = 'MysticMaroon'; // MysticMaroon
// https://en.wikipedia.org/wiki/List_of_colors:_N%E2%80%93Z

exports.cMysticMaroon = cMysticMaroon;
var cNadeshikoPink = 'NadeshikoPink'; // NadeshikoPink

exports.cNadeshikoPink = cNadeshikoPink;
var cNaplesYellow = 'NaplesYellow'; // NaplesYellow

exports.cNaplesYellow = cNaplesYellow;
var cNavajoWhite = 'NavajoWhite'; // NavajoWhite

exports.cNavajoWhite = cNavajoWhite;
var cNavyBlue = 'NavyBlue'; // NavyBlue

exports.cNavyBlue = cNavyBlue;
var cNavyBlueCrayola = 'NavyBlueCrayola'; // NavyBlueCrayola

exports.cNavyBlueCrayola = cNavyBlueCrayola;
var cNeonBlue = 'NeonBlue'; // NeonBlue

exports.cNeonBlue = cNeonBlue;
var cNeonCarrot = 'NeonCarrot'; // NeonCarrot

exports.cNeonCarrot = cNeonCarrot;
var cNeonGreen = 'NeonGreen'; // NeonGreen

exports.cNeonGreen = cNeonGreen;
var cNeonFuchsia = 'NeonFuchsia'; // NeonFuchsia

exports.cNeonFuchsia = cNeonFuchsia;
var cNewYorkPink = 'NewYorkPink'; // NewYorkPink

exports.cNewYorkPink = cNewYorkPink;
var cNickel = 'Nickel'; // Nickel

exports.cNickel = cNickel;
var cNonPhotoBlue = 'NonPhotoBlue'; // NonPhotoBlue

exports.cNonPhotoBlue = cNonPhotoBlue;
var cNyanza = 'Nyanza'; // Nyanza

exports.cNyanza = cNyanza;
var cOceanBlue = 'OceanBlue'; // OceanBlue

exports.cOceanBlue = cOceanBlue;
var cOceanGreen = 'OceanGreen'; // OceanGreen

exports.cOceanGreen = cOceanGreen;
var cOchre = 'Ochre'; // Ochre

exports.cOchre = cOchre;
var cOldBurgundy = 'OldBurgundy'; // OldBurgundy

exports.cOldBurgundy = cOldBurgundy;
var cOldGold = 'OldGold'; // OldGold

exports.cOldGold = cOldGold;
var cOldLace = 'OldLace'; // OldLace

exports.cOldLace = cOldLace;
var cOldLavender = 'OldLavender'; // OldLavender

exports.cOldLavender = cOldLavender;
var cOldMauve = 'OldMauve'; // OldMauve

exports.cOldMauve = cOldMauve;
var cOldRose = 'OldRose'; // OldRose

exports.cOldRose = cOldRose;
var cOldSilver = 'OldSilver'; // OldSilver

exports.cOldSilver = cOldSilver;
var cOlive = 'Olive'; // Olive

exports.cOlive = cOlive;
var cOliveDrab3 = 'OliveDrab3'; // OliveDrab3

exports.cOliveDrab3 = cOliveDrab3;
var cOliveDrab7 = 'OliveDrab7'; // OliveDrab7

exports.cOliveDrab7 = cOliveDrab7;
var cOliveGreen = 'OliveGreen'; // OliveGreen

exports.cOliveGreen = cOliveGreen;
var cOlivine = 'Olivine'; // Olivine

exports.cOlivine = cOlivine;
var cOnyx = 'Onyx'; // Onyx

exports.cOnyx = cOnyx;
var cOpal = 'Opal'; // Opal

exports.cOpal = cOpal;
var cOperaMauve = 'OperaMauve'; // OperaMauve

exports.cOperaMauve = cOperaMauve;
var cOrangeCrayola = 'OrangeCrayola'; // OrangeCrayola

exports.cOrangeCrayola = cOrangeCrayola;
var cOrangePantone = 'OrangePantone'; // OrangePantone

exports.cOrangePantone = cOrangePantone;
var cOrangeWeb = 'OrangeWeb'; // OrangeWeb

exports.cOrangeWeb = cOrangeWeb;
var cOrangePeel = 'OrangePeel'; // OrangePeel

exports.cOrangePeel = cOrangePeel;
var cOrangeRed = 'OrangeRed'; // OrangeRed

exports.cOrangeRed = cOrangeRed;
var cOrangeRedCrayola = 'OrangeRedCrayola'; // OrangeRedCrayola

exports.cOrangeRedCrayola = cOrangeRedCrayola;
var cOrangeSoda = 'OrangeSoda'; // OrangeSoda

exports.cOrangeSoda = cOrangeSoda;
var cOrangeYellow = 'OrangeYellow'; // OrangeYellow

exports.cOrangeYellow = cOrangeYellow;
var cOrangeYellowCrayola = 'OrangeYellowCrayola'; // OrangeYellowCrayola

exports.cOrangeYellowCrayola = cOrangeYellowCrayola;
var cOrchid = 'Orchid'; // Orchid

exports.cOrchid = cOrchid;
var cOrchidPink = 'OrchidPink'; // OrchidPink

exports.cOrchidPink = cOrchidPink;
var cOrchidCrayola = 'OrchidCrayola'; // OrchidCrayola

exports.cOrchidCrayola = cOrchidCrayola;
var cOuterSpaceCrayola = 'OuterSpaceCrayola'; // OuterSpaceCrayola

exports.cOuterSpaceCrayola = cOuterSpaceCrayola;
var cOutrageousOrange = 'OutrageousOrange'; // OutrageousOrange

exports.cOutrageousOrange = cOutrageousOrange;
var cOxBlood = 'OxBlood'; // OxBlood

exports.cOxBlood = cOxBlood;
var cOxfordBlue = 'OxfordBlue'; // OxfordBlue

exports.cOxfordBlue = cOxfordBlue;
var cOUCrimsonRed = 'OUCrimsonRed'; // OUCrimsonRed

exports.cOUCrimsonRed = cOUCrimsonRed;
var cPacificBlue = 'PacificBlue'; // PacificBlue

exports.cPacificBlue = cPacificBlue;
var cPakistanGreen = 'PakistanGreen'; // PakistanGreen

exports.cPakistanGreen = cPakistanGreen;
var cPalatinatePurple = 'PalatinatePurple'; // PalatinatePurple

exports.cPalatinatePurple = cPalatinatePurple;
var cPaleAqua = 'PaleAqua'; // PaleAqua

exports.cPaleAqua = cPaleAqua;
var cPaleCerulean = 'PaleCerulean'; // PaleCerulean

exports.cPaleCerulean = cPaleCerulean;
var cPalePink = 'PalePink'; // PalePink

exports.cPalePink = cPalePink;
var cPalePurplePantone = 'PalePurplePantone'; // PalePurplePantone

exports.cPalePurplePantone = cPalePurplePantone;
var cPaleSilver = 'PaleSilver'; // PaleSilver

exports.cPaleSilver = cPaleSilver;
var cPaleSpringBud = 'PaleSpringBud'; // PaleSpringBud

exports.cPaleSpringBud = cPaleSpringBud;
var cPansyPurple = 'PansyPurple'; // PansyPurple

exports.cPansyPurple = cPansyPurple;
var cPaoloVeroneseGreen = 'PaoloVeroneseGreen'; // PaoloVeroneseGreen

exports.cPaoloVeroneseGreen = cPaoloVeroneseGreen;
var cPapayaWhip = 'PapayaWhip'; // PapayaWhip

exports.cPapayaWhip = cPapayaWhip;
var cParadisePink = 'ParadisePink'; // ParadisePink

exports.cParadisePink = cParadisePink;
var cParisGreen = 'ParisGreen'; // ParisGreen

exports.cParisGreen = cParisGreen;
var cPastelPink = 'PastelPink'; // PastelPink

exports.cPastelPink = cPastelPink;
var cPatriarch = 'Patriarch'; // Patriarch

exports.cPatriarch = cPatriarch;
var cPaynesGrey = 'PaynesGrey'; // PaynesGrey

exports.cPaynesGrey = cPaynesGrey;
var cPeach = 'Peach'; // Peach

exports.cPeach = cPeach;
var cPeachCrayola = 'PeachCrayola'; // PeachCrayola

exports.cPeachCrayola = cPeachCrayola;
var cPeachPuff = 'PeachPuff'; // PeachPuff

exports.cPeachPuff = cPeachPuff;
var cPear = 'Pear'; // Pear

exports.cPear = cPear;
var cPearlyPurple = 'PearlyPurple'; // PearlyPurple

exports.cPearlyPurple = cPearlyPurple;
var cPeriwinkle = 'Periwinkle'; // Periwinkle

exports.cPeriwinkle = cPeriwinkle;
var cPeriwinkleCrayola = 'PeriwinkleCrayola'; // PeriwinkleCrayola

exports.cPeriwinkleCrayola = cPeriwinkleCrayola;
var cPermanentGeraniumLake = 'PermanentGeraniumLake'; // PermanentGeraniumLake

exports.cPermanentGeraniumLake = cPermanentGeraniumLake;
var cPersianBlue = 'PersianBlue'; // PersianBlue

exports.cPersianBlue = cPersianBlue;
var cPersianGreen = 'PersianGreen'; // PersianGreen

exports.cPersianGreen = cPersianGreen;
var cPersianIndigo = 'PersianIndigo'; // PersianIndigo

exports.cPersianIndigo = cPersianIndigo;
var cPersianOrange = 'PersianOrange'; // PersianOrange

exports.cPersianOrange = cPersianOrange;
var cPersianPink = 'PersianPink'; // PersianPink

exports.cPersianPink = cPersianPink;
var cPersianPlum = 'PersianPlum'; // PersianPlum

exports.cPersianPlum = cPersianPlum;
var cPersianRed = 'PersianRed'; // PersianRed

exports.cPersianRed = cPersianRed;
var cPersianRose = 'PersianRose'; // PersianRose

exports.cPersianRose = cPersianRose;
var cPersimmon = 'Persimmon'; // Persimmon

exports.cPersimmon = cPersimmon;
var cPewterBlue = 'PewterBlue'; // PewterBlue

exports.cPewterBlue = cPewterBlue;
var cPhlox = 'Phlox'; // Phlox

exports.cPhlox = cPhlox;
var cPhthaloBlue = 'PhthaloBlue'; // PhthaloBlue

exports.cPhthaloBlue = cPhthaloBlue;
var cPhthaloGreen = 'PhthaloGreen'; // PhthaloGreen

exports.cPhthaloGreen = cPhthaloGreen;
var cPicoteeBlue = 'PicoteeBlue'; // PicoteeBlue

exports.cPicoteeBlue = cPicoteeBlue;
var cPictorialCarmine = 'PictorialCarmine'; // PictorialCarmine

exports.cPictorialCarmine = cPictorialCarmine;
var cPiggyPink = 'PiggyPink'; // PiggyPink

exports.cPiggyPink = cPiggyPink;
var cPineGreen = 'PineGreen'; // PineGreen

exports.cPineGreen = cPineGreen;
var cPineTree = 'PineTree'; // PineTree

exports.cPineTree = cPineTree;
var cPink = 'Pink'; // Pink

exports.cPink = cPink;
var cPinkPantone = 'PinkPantone'; // PinkPantone

exports.cPinkPantone = cPinkPantone;
var cPinkFlamingo = 'PinkFlamingo'; // PinkFlamingo

exports.cPinkFlamingo = cPinkFlamingo;
var cPinkLace = 'PinkLace'; // PinkLace

exports.cPinkLace = cPinkLace;
var cPinkLavender = 'PinkLavender'; // PinkLavender

exports.cPinkLavender = cPinkLavender;
var cPinkSherbet = 'PinkSherbet'; // PinkSherbet

exports.cPinkSherbet = cPinkSherbet;
var cPistachio = 'Pistachio'; // Pistachio

exports.cPistachio = cPistachio;
var cPlatinum = 'Platinum'; // Platinum

exports.cPlatinum = cPlatinum;
var cPlum = 'Plum'; // Plum

exports.cPlum = cPlum;
var cPlumWeb = 'PlumWeb'; // PlumWeb

exports.cPlumWeb = cPlumWeb;
var cPlumpPurple = 'PlumpPurple'; // PlumpPurple

exports.cPlumpPurple = cPlumpPurple;
var cPolishedPine = 'PolishedPine'; // PolishedPine

exports.cPolishedPine = cPolishedPine;
var cPompAndPower = 'PompAndPower'; // PompAndPower

exports.cPompAndPower = cPompAndPower;
var cPopstar = 'Popstar'; // Popstar

exports.cPopstar = cPopstar;
var cPortlandOrange = 'PortlandOrange'; // PortlandOrange

exports.cPortlandOrange = cPortlandOrange;
var cPowderBlue = 'PowderBlue'; // PowderBlue

exports.cPowderBlue = cPowderBlue;
var cPrincetonOrange = 'PrincetonOrange'; // PrincetonOrange

exports.cPrincetonOrange = cPrincetonOrange;
var cPrune = 'Prune'; // Prune

exports.cPrune = cPrune;
var cPrussianBlue = 'PrussianBlue'; // PrussianBlue

exports.cPrussianBlue = cPrussianBlue;
var cPsychedelicPurple = 'PsychedelicPurple'; // PsychedelicPurple

exports.cPsychedelicPurple = cPsychedelicPurple;
var cPuce = 'Puce'; // Puce

exports.cPuce = cPuce;
var cPullmanBrown = 'PullmanBrown'; // PullmanBrown

exports.cPullmanBrown = cPullmanBrown;
var cPumpkin = 'Pumpkin'; // Pumpkin

exports.cPumpkin = cPumpkin;
var cPurple = 'Purple'; // Purple

exports.cPurple = cPurple;
var cPurpleWeb = 'PurpleWeb'; // PurpleWeb

exports.cPurpleWeb = cPurpleWeb;
var cPurpleMunsell = 'PurpleMunsell'; // PurpleMunsell

exports.cPurpleMunsell = cPurpleMunsell;
var cPurpleX11 = 'PurpleX11'; // PurpleX11

exports.cPurpleX11 = cPurpleX11;
var cPurpleMountainMajesty = 'PurpleMountainMajesty'; // PurpleMountainMajesty

exports.cPurpleMountainMajesty = cPurpleMountainMajesty;
var cPurpleNavy = 'PurpleNavy'; // PurpleNavy

exports.cPurpleNavy = cPurpleNavy;
var cPurplePizzazz = 'PurplePizzazz'; // PurplePizzazz

exports.cPurplePizzazz = cPurplePizzazz;
var cPurplePlum = 'PurplePlum'; // PurplePlum

exports.cPurplePlum = cPurplePlum;
var cPurpureus = 'Purpureus'; // Purpureus

exports.cPurpureus = cPurpureus;
var cQueenBlue = 'QueenBlue'; // QueenBlue

exports.cQueenBlue = cQueenBlue;
var cQueenPink = 'QueenPink'; // QueenPink

exports.cQueenPink = cQueenPink;
var cQuickSilver = 'QuickSilver'; // QuickSilver

exports.cQuickSilver = cQuickSilver;
var cQuinacridoneMagenta = 'QuinacridoneMagenta'; // QuinacridoneMagenta

exports.cQuinacridoneMagenta = cQuinacridoneMagenta;
var cRadicalRed = 'RadicalRed'; // RadicalRed

exports.cRadicalRed = cRadicalRed;
var cRaisinBlack = 'RaisinBlack'; // RaisinBlack

exports.cRaisinBlack = cRaisinBlack;
var cRajah = 'Rajah'; // Rajah

exports.cRajah = cRajah;
var cRaspberry = 'Raspberry'; // Raspberry

exports.cRaspberry = cRaspberry;
var cRaspberryGlace = 'RaspberryGlace'; // RaspberryGlace

exports.cRaspberryGlace = cRaspberryGlace;
var cRaspberryRose = 'RaspberryRose'; // RaspberryRose

exports.cRaspberryRose = cRaspberryRose;
var cRawSienna = 'RawSienna'; // RawSienna

exports.cRawSienna = cRawSienna;
var cRawUmber = 'RawUmber'; // RawUmber

exports.cRawUmber = cRawUmber;
var cRazzleDazzleRose = 'RazzleDazzleRose'; // RazzleDazzleRose

exports.cRazzleDazzleRose = cRazzleDazzleRose;
var cRazzmatazz = 'Razzmatazz'; // Razzmatazz

exports.cRazzmatazz = cRazzmatazz;
var cRazzmicBerry = 'RazzmicBerry'; // RazzmicBerry

exports.cRazzmicBerry = cRazzmicBerry;
var cRebeccaPurple = 'RebeccaPurple'; // RebeccaPurple

exports.cRebeccaPurple = cRebeccaPurple;
var cRedCrayola = 'RedCrayola'; // RedCrayola

exports.cRedCrayola = cRedCrayola;
var cRedMunsell = 'RedMunsell'; // RedMunsell

exports.cRedMunsell = cRedMunsell;
var cRedNCS = 'RedNCS'; // RedNCS

exports.cRedNCS = cRedNCS;
var cRedPantone = 'RedPantone'; // RedPantone

exports.cRedPantone = cRedPantone;
var cRedPigment = 'RedPigment'; // RedPigment

exports.cRedPigment = cRedPigment;
var cRedRYB = 'RedRYB'; // RedRYB

exports.cRedRYB = cRedRYB;
var cRedOrange = 'RedOrange'; // RedOrange

exports.cRedOrange = cRedOrange;
var cRedOrangeCrayola = 'RedOrangeCrayola'; // RedOrangeCrayola

exports.cRedOrangeCrayola = cRedOrangeCrayola;
var cRedOrangeColorWheel = 'RedOrangeColorWheel'; // RedOrangeColorWheel

exports.cRedOrangeColorWheel = cRedOrangeColorWheel;
var cRedPurple = 'RedPurple'; // RedPurple

exports.cRedPurple = cRedPurple;
var cRedSalsa = 'RedSalsa'; // RedSalsa

exports.cRedSalsa = cRedSalsa;
var cRedViolet = 'RedViolet'; // RedViolet

exports.cRedViolet = cRedViolet;
var cRedVioletCrayola = 'RedVioletCrayola'; // RedVioletCrayola

exports.cRedVioletCrayola = cRedVioletCrayola;
var cRedVioletColorWheel = 'RedVioletColorWheel'; // RedVioletColorWheel

exports.cRedVioletColorWheel = cRedVioletColorWheel;
var cRedwood = 'Redwood'; // Redwood

exports.cRedwood = cRedwood;
var cResolutionBlue = 'ResolutionBlue'; // ResolutionBlue

exports.cResolutionBlue = cResolutionBlue;
var cRhythm = 'Rhythm'; // Rhythm

exports.cRhythm = cRhythm;
var cRichBlack = 'RichBlack'; // RichBlack

exports.cRichBlack = cRichBlack;
var cRichBlackFOGRA29 = 'RichBlackFOGRA29'; // RichBlackFOGRA29

exports.cRichBlackFOGRA29 = cRichBlackFOGRA29;
var cRichBlackFOGRA39 = 'RichBlackFOGRA39'; // RichBlackFOGRA39

exports.cRichBlackFOGRA39 = cRichBlackFOGRA39;
var cRifleGreen = 'RifleGreen'; // RifleGreen

exports.cRifleGreen = cRifleGreen;
var cRobinEggBlue = 'RobinEggBlue'; // RobinEggBlue

exports.cRobinEggBlue = cRobinEggBlue;
var cRocketMetallic = 'RocketMetallic'; // RocketMetallic

exports.cRocketMetallic = cRocketMetallic;
var cRomanSilver = 'RomanSilver'; // RomanSilver

exports.cRomanSilver = cRomanSilver;
var cRose = 'Rose'; // Rose

exports.cRose = cRose;
var cRoseBonbon = 'RoseBonbon'; // RoseBonbon

exports.cRoseBonbon = cRoseBonbon;
var cRoseDust = 'RoseDust'; // RoseDust

exports.cRoseDust = cRoseDust;
var cRoseEbony = 'RoseEbony'; // RoseEbony

exports.cRoseEbony = cRoseEbony;
var cRoseMadder = 'RoseMadder'; // RoseMadder

exports.cRoseMadder = cRoseMadder;
var cRosePink = 'RosePink'; // RosePink

exports.cRosePink = cRosePink;
var cRoseQuartz = 'RoseQuartz'; // RoseQuartz

exports.cRoseQuartz = cRoseQuartz;
var cRoseRed = 'RoseRed'; // RoseRed

exports.cRoseRed = cRoseRed;
var cRoseTaupe = 'RoseTaupe'; // RoseTaupe

exports.cRoseTaupe = cRoseTaupe;
var cRoseVale = 'RoseVale'; // RoseVale

exports.cRoseVale = cRoseVale;
var cRosewood = 'Rosewood'; // Rosewood

exports.cRosewood = cRosewood;
var cRossoCorsa = 'RossoCorsa'; // RossoCorsa

exports.cRossoCorsa = cRossoCorsa;
var cRosyBrown = 'RosyBrown'; // RosyBrown

exports.cRosyBrown = cRosyBrown;
var cRoyalBlueDark = 'RoyalBlueDark'; // RoyalBlueDark

exports.cRoyalBlueDark = cRoyalBlueDark;
var cRoyalBlueLight = 'RoyalBlueLight'; // RoyalBlueLight

exports.cRoyalBlueLight = cRoyalBlueLight;
var cRoyalPurple = 'RoyalPurple'; // RoyalPurple

exports.cRoyalPurple = cRoyalPurple;
var cRoyalYellow = 'RoyalYellow'; // RoyalYellow

exports.cRoyalYellow = cRoyalYellow;
var cRuber = 'Ruber'; // Ruber

exports.cRuber = cRuber;
var cRubineRed = 'RubineRed'; // RubineRed

exports.cRubineRed = cRubineRed;
var cRuby = 'Ruby'; // Ruby

exports.cRuby = cRuby;
var cRubyRed = 'RubyRed'; // RubyRed

exports.cRubyRed = cRubyRed;
var cRufous = 'Rufous'; // Rufous

exports.cRufous = cRufous;
var cRusset = 'Russet'; // Russet

exports.cRusset = cRusset;
var cRussianGreen = 'RussianGreen'; // RussianGreen

exports.cRussianGreen = cRussianGreen;
var cRussianViolet = 'RussianViolet'; // RussianViolet

exports.cRussianViolet = cRussianViolet;
var cRust = 'Rust'; // Rust

exports.cRust = cRust;
var cRustyRed = 'RustyRed'; // RustyRed

exports.cRustyRed = cRustyRed;
var cSacramentoStateGreen = 'SacramentoStateGreen'; // SacramentoStateGreen

exports.cSacramentoStateGreen = cSacramentoStateGreen;
var cSaddleBrown = 'SaddleBrown'; // SaddleBrown

exports.cSaddleBrown = cSaddleBrown;
var cSafetyOrange = 'SafetyOrange'; // SafetyOrange

exports.cSafetyOrange = cSafetyOrange;
var cBlazeOrange = 'BlazeOrange'; // BlazeOrange

exports.cBlazeOrange = cBlazeOrange;
var cSafetyYellow = 'SafetyYellow'; // SafetyYellow

exports.cSafetyYellow = cSafetyYellow;
var cSaffron = 'Saffron'; // Saffron

exports.cSaffron = cSaffron;
var cSage = 'Sage'; // Sage

exports.cSage = cSage;
var cStPatricksBlue = 'StPatricksBlue'; // StPatricksBlue

exports.cStPatricksBlue = cStPatricksBlue;
var cSalmon = 'Salmon'; // Salmon

exports.cSalmon = cSalmon;
var cSalmonPink = 'SalmonPink'; // SalmonPink

exports.cSalmonPink = cSalmonPink;
var cSand = 'Sand'; // Sand

exports.cSand = cSand;
var cSandDune = 'SandDune'; // SandDune

exports.cSandDune = cSandDune;
var cSandyBrown = 'SandyBrown'; // SandyBrown

exports.cSandyBrown = cSandyBrown;
var cSapGreen = 'SapGreen'; // SapGreen

exports.cSapGreen = cSapGreen;
var cSapphire = 'Sapphire'; // Sapphire

exports.cSapphire = cSapphire;
var cSapphireBlue = 'SapphireBlue'; // SapphireBlue

exports.cSapphireBlue = cSapphireBlue;
var cSapphireCrayola = 'SapphireCrayola'; // SapphireCrayola

exports.cSapphireCrayola = cSapphireCrayola;
var cSatinSheenGold = 'SatinSheenGold'; // SatinSheenGold

exports.cSatinSheenGold = cSatinSheenGold;
var cScarlet = 'Scarlet'; // Scarlet

exports.cScarlet = cScarlet;
var cSchaussPink = 'SchaussPink'; // SchaussPink

exports.cSchaussPink = cSchaussPink;
var cSchoolBusYellow = 'SchoolBusYellow'; // SchoolBusYellow

exports.cSchoolBusYellow = cSchoolBusYellow;
var cScreaminGreen = 'ScreaminGreen'; // ScreaminGreen

exports.cScreaminGreen = cScreaminGreen;
var cSeaGreen = 'SeaGreen'; // SeaGreen

exports.cSeaGreen = cSeaGreen;
var cSeaGreenCrayola = 'SeaGreenCrayola'; // SeaGreenCrayola

exports.cSeaGreenCrayola = cSeaGreenCrayola;
var cSealBrown = 'SealBrown'; // SealBrown

exports.cSealBrown = cSealBrown;
var cSeashell = 'Seashell'; // Seashell

exports.cSeashell = cSeashell;
var cSelectiveYellow = 'SelectiveYellow'; // SelectiveYellow

exports.cSelectiveYellow = cSelectiveYellow;
var cSepia = 'Sepia'; // Sepia

exports.cSepia = cSepia;
var cShadow = 'Shadow'; // Shadow

exports.cShadow = cShadow;
var cShadowBlue = 'ShadowBlue'; // ShadowBlue

exports.cShadowBlue = cShadowBlue;
var cShamrockGreen = 'ShamrockGreen'; // ShamrockGreen

exports.cShamrockGreen = cShamrockGreen;
var cSheenGreen = 'SheenGreen'; // SheenGreen

exports.cSheenGreen = cSheenGreen;
var cShimmeringBlush = 'ShimmeringBlush'; // ShimmeringBlush

exports.cShimmeringBlush = cShimmeringBlush;
var cShinyShamrock = 'ShinyShamrock'; // ShinyShamrock

exports.cShinyShamrock = cShinyShamrock;
var cShockingPink = 'ShockingPink'; // ShockingPink

exports.cShockingPink = cShockingPink;
var cShockingPinkCrayola = 'ShockingPinkCrayola'; // ShockingPinkCrayola

exports.cShockingPinkCrayola = cShockingPinkCrayola;
var cSienna = 'Sienna'; // Sienna

exports.cSienna = cSienna;
var cSilver = 'Silver'; // Silver

exports.cSilver = cSilver;
var cSilverCrayola = 'SilverCrayola'; // SilverCrayola

exports.cSilverCrayola = cSilverCrayola;
var cSilverMetallic = 'SilverMetallic'; // SilverMetallic

exports.cSilverMetallic = cSilverMetallic;
var cSilverChalice = 'SilverChalice'; // SilverChalice

exports.cSilverChalice = cSilverChalice;
var cSilverPink = 'SilverPink'; // SilverPink

exports.cSilverPink = cSilverPink;
var cSilverSand = 'SilverSand'; // SilverSand

exports.cSilverSand = cSilverSand;
var cSinopia = 'Sinopia'; // Sinopia

exports.cSinopia = cSinopia;
var cSizzlingRed = 'SizzlingRed'; // SizzlingRed

exports.cSizzlingRed = cSizzlingRed;
var cSizzlingSunrise = 'SizzlingSunrise'; // SizzlingSunrise

exports.cSizzlingSunrise = cSizzlingSunrise;
var cSkobeloff = 'Skobeloff'; // Skobeloff

exports.cSkobeloff = cSkobeloff;
var cSkyBlue = 'SkyBlue'; // SkyBlue

exports.cSkyBlue = cSkyBlue;
var cSkyBlueCrayola = 'SkyBlueCrayola'; // SkyBlueCrayola

exports.cSkyBlueCrayola = cSkyBlueCrayola;
var cSkyMagenta = 'SkyMagenta'; // SkyMagenta

exports.cSkyMagenta = cSkyMagenta;
var cSlateBlue = 'SlateBlue'; // SlateBlue

exports.cSlateBlue = cSlateBlue;
var cSlateGray = 'SlateGray'; // SlateGray

exports.cSlateGray = cSlateGray;
var cSlimyGreen = 'SlimyGreen'; // SlimyGreen

exports.cSlimyGreen = cSlimyGreen;
var cSmitten = 'Smitten'; // Smitten

exports.cSmitten = cSmitten;
var cSmokyBlack = 'SmokyBlack'; // SmokyBlack

exports.cSmokyBlack = cSmokyBlack;
var cSnow = 'Snow'; // Snow

exports.cSnow = cSnow;
var cSolidPink = 'SolidPink'; // SolidPink

exports.cSolidPink = cSolidPink;
var cSonicSilver = 'SonicSilver'; // SonicSilver

exports.cSonicSilver = cSonicSilver;
var cSpaceCadet = 'SpaceCadet'; // SpaceCadet

exports.cSpaceCadet = cSpaceCadet;
var cSpanishBistre = 'SpanishBistre'; // SpanishBistre

exports.cSpanishBistre = cSpanishBistre;
var cSpanishBlue = 'SpanishBlue'; // SpanishBlue

exports.cSpanishBlue = cSpanishBlue;
var cSpanishCarmine = 'SpanishCarmine'; // SpanishCarmine

exports.cSpanishCarmine = cSpanishCarmine;
var cSpanishGray = 'SpanishGray'; // SpanishGray

exports.cSpanishGray = cSpanishGray;
var cSpanishGreen = 'SpanishGreen'; // SpanishGreen

exports.cSpanishGreen = cSpanishGreen;
var cSpanishOrange = 'SpanishOrange'; // SpanishOrange

exports.cSpanishOrange = cSpanishOrange;
var cSpanishPink = 'SpanishPink'; // SpanishPink

exports.cSpanishPink = cSpanishPink;
var cSpanishRed = 'SpanishRed'; // SpanishRed

exports.cSpanishRed = cSpanishRed;
var cSpanishSkyBlue = 'SpanishSkyBlue'; // SpanishSkyBlue

exports.cSpanishSkyBlue = cSpanishSkyBlue;
var cSpanishViolet = 'SpanishViolet'; // SpanishViolet

exports.cSpanishViolet = cSpanishViolet;
var cSpanishViridian = 'SpanishViridian'; // SpanishViridian

exports.cSpanishViridian = cSpanishViridian;
var cSpringBud = 'SpringBud'; // SpringBud

exports.cSpringBud = cSpringBud;
var cSpringFrost = 'SpringFrost'; // SpringFrost

exports.cSpringFrost = cSpringFrost;
var cSpringGreen = 'SpringGreen'; // SpringGreen

exports.cSpringGreen = cSpringGreen;
var cSpringGreenCrayola = 'SpringGreenCrayola'; // SpringGreenCrayola

exports.cSpringGreenCrayola = cSpringGreenCrayola;
var cStarCommandBlue = 'StarCommandBlue'; // StarCommandBlue

exports.cStarCommandBlue = cStarCommandBlue;
var cSteelBlue = 'SteelBlue'; // SteelBlue

exports.cSteelBlue = cSteelBlue;
var cSteelPink = 'SteelPink'; // SteelPink

exports.cSteelPink = cSteelPink;
var cSteelTeal = 'SteelTeal'; // SteelTeal

exports.cSteelTeal = cSteelTeal;
var cStilDeGrainYellow = 'StilDeGrainYellow'; // StilDeGrainYellow

exports.cStilDeGrainYellow = cStilDeGrainYellow;
var cStraw = 'Straw'; // Straw

exports.cStraw = cStraw;
var cSugarPlum = 'SugarPlum'; // SugarPlum

exports.cSugarPlum = cSugarPlum;
var cSunglow = 'Sunglow'; // Sunglow

exports.cSunglow = cSunglow;
var cSunray = 'Sunray'; // Sunray

exports.cSunray = cSunray;
var cSunset = 'Sunset'; // Sunset

exports.cSunset = cSunset;
var cSuperPink = 'SuperPink'; // SuperPink

exports.cSuperPink = cSuperPink;
var cSweetBrown = 'SweetBrown'; // SweetBrown

exports.cSweetBrown = cSweetBrown;
var cTan = 'Tan'; // Tan

exports.cTan = cTan;
var cTanCrayola = 'TanCrayola'; // TanCrayola

exports.cTanCrayola = cTanCrayola;
var cTangerine = 'Tangerine'; // Tangerine

exports.cTangerine = cTangerine;
var cTangoPink = 'TangoPink'; // TangoPink

exports.cTangoPink = cTangoPink;
var cTartOrange = 'TartOrange'; // TartOrange

exports.cTartOrange = cTartOrange;
var cTaupe = 'Taupe'; // Taupe

exports.cTaupe = cTaupe;
var cTaupeGray = 'TaupeGray'; // TaupeGray

exports.cTaupeGray = cTaupeGray;
var cTeaGreen = 'TeaGreen'; // TeaGreen

exports.cTeaGreen = cTeaGreen;
var cTeaRose = 'TeaRose'; // TeaRose

exports.cTeaRose = cTeaRose;
var cTeaRoseWeb = 'TeaRoseWeb'; // TeaRoseWeb

exports.cTeaRoseWeb = cTeaRoseWeb;
var cTeal = 'Teal'; // Teal

exports.cTeal = cTeal;
var cTealBlue = 'TealBlue'; // TealBlue

exports.cTealBlue = cTealBlue;
var cTelemagenta = 'Telemagenta'; // Telemagenta

exports.cTelemagenta = cTelemagenta;
var cTawny = 'Tawny'; // Tawny

exports.cTawny = cTawny;
var cTerraCotta = 'TerraCotta'; // TerraCotta

exports.cTerraCotta = cTerraCotta;
var cThistle = 'Thistle'; // Thistle

exports.cThistle = cThistle;
var cThulianPink = 'ThulianPink'; // ThulianPink

exports.cThulianPink = cThulianPink;
var cTickleMePink = 'TickleMePink'; // TickleMePink

exports.cTickleMePink = cTickleMePink;
var cTiffanyBlue = 'TiffanyBlue'; // TiffanyBlue

exports.cTiffanyBlue = cTiffanyBlue;
var cTimberwolf = 'Timberwolf'; // Timberwolf

exports.cTimberwolf = cTimberwolf;
var cTitaniumYellow = 'TitaniumYellow'; // TitaniumYellow

exports.cTitaniumYellow = cTitaniumYellow;
var cTomato = 'Tomato'; // Tomato

exports.cTomato = cTomato;
var cTropicalRainforest = 'TropicalRainforest'; // TropicalRainforest

exports.cTropicalRainforest = cTropicalRainforest;
var cTrueBlue = 'TrueBlue'; // TrueBlue

exports.cTrueBlue = cTrueBlue;
var cTrypanBlue = 'TrypanBlue'; // TrypanBlue

exports.cTrypanBlue = cTrypanBlue;
var cTuftsBlue = 'TuftsBlue'; // TuftsBlue

exports.cTuftsBlue = cTuftsBlue;
var cTumbleweed = 'Tumbleweed'; // Tumbleweed

exports.cTumbleweed = cTumbleweed;
var cTurquoise = 'Turquoise'; // Turquoise

exports.cTurquoise = cTurquoise;
var cTurquoiseBlue = 'TurquoiseBlue'; // TurquoiseBlue

exports.cTurquoiseBlue = cTurquoiseBlue;
var cTurquoiseGreen = 'TurquoiseGreen'; // TurquoiseGreen

exports.cTurquoiseGreen = cTurquoiseGreen;
var cTurtleGreen = 'TurtleGreen'; // TurtleGreen

exports.cTurtleGreen = cTurtleGreen;
var cTuscan = 'Tuscan'; // Tuscan

exports.cTuscan = cTuscan;
var cTuscanBrown = 'TuscanBrown'; // TuscanBrown

exports.cTuscanBrown = cTuscanBrown;
var cTuscanRed = 'TuscanRed'; // TuscanRed

exports.cTuscanRed = cTuscanRed;
var cTuscanTan = 'TuscanTan'; // TuscanTan

exports.cTuscanTan = cTuscanTan;
var cTuscany = 'Tuscany'; // Tuscany

exports.cTuscany = cTuscany;
var cTwilightLavender = 'TwilightLavender'; // TwilightLavender

exports.cTwilightLavender = cTwilightLavender;
var cTyrianPurple = 'TyrianPurple'; // TyrianPurple

exports.cTyrianPurple = cTyrianPurple;
var cUABlue = 'UABlue'; // UABlue

exports.cUABlue = cUABlue;
var cUARed = 'UARed'; // UARed

exports.cUARed = cUARed;
var cUltramarine = 'Ultramarine'; // Ultramarine

exports.cUltramarine = cUltramarine;
var cUltramarineBlue = 'UltramarineBlue'; // UltramarineBlue

exports.cUltramarineBlue = cUltramarineBlue;
var cUltraPink = 'UltraPink'; // UltraPink

exports.cUltraPink = cUltraPink;
var cUltraRed = 'UltraRed'; // UltraRed

exports.cUltraRed = cUltraRed;
var cUmber = 'Umber'; // Umber

exports.cUmber = cUmber;
var cUnbleachedSilk = 'UnbleachedSilk'; // UnbleachedSilk

exports.cUnbleachedSilk = cUnbleachedSilk;
var cUnitedNationsBlue = 'UnitedNationsBlue'; // UnitedNationsBlue

exports.cUnitedNationsBlue = cUnitedNationsBlue;
var cUnmellowYellow = 'UnmellowYellow'; // UnmellowYellow

exports.cUnmellowYellow = cUnmellowYellow;
var cUPForestGreen = 'UPForestGreen'; // UPForestGreen

exports.cUPForestGreen = cUPForestGreen;
var cUPMaroon = 'UPMaroon'; // UPMaroon

exports.cUPMaroon = cUPMaroon;
var cUpsdellRed = 'UpsdellRed'; // UpsdellRed

exports.cUpsdellRed = cUpsdellRed;
var cUranianBlue = 'UranianBlue'; // UranianBlue

exports.cUranianBlue = cUranianBlue;
var cUSAFABlue = 'USAFABlue'; // USAFABlue

exports.cUSAFABlue = cUSAFABlue;
var cVanDykeBrown = 'VanDykeBrown'; // VanDykeBrown

exports.cVanDykeBrown = cVanDykeBrown;
var cVanilla = 'Vanilla'; // Vanilla

exports.cVanilla = cVanilla;
var cVanillaIce = 'VanillaIce'; // VanillaIce

exports.cVanillaIce = cVanillaIce;
var cVegasGold = 'VegasGold'; // VegasGold

exports.cVegasGold = cVegasGold;
var cVenetianRed = 'VenetianRed'; // VenetianRed

exports.cVenetianRed = cVenetianRed;
var cVerdigris = 'Verdigris'; // Verdigris

exports.cVerdigris = cVerdigris;
var cVermilion = 'Vermilion'; // Vermilion

exports.cVermilion = cVermilion;
var cVermilionWeb = 'VermilionWeb'; // VermilionWeb

exports.cVermilionWeb = cVermilionWeb;
var cVeronica = 'Veronica'; // Veronica

exports.cVeronica = cVeronica;
var cViolet = 'Violet'; // Violet

exports.cViolet = cViolet;
var cVioletColorWheel = 'VioletColorWheel'; // VioletColorWheel

exports.cVioletColorWheel = cVioletColorWheel;
var cVioletCrayola = 'VioletCrayola'; // VioletCrayola

exports.cVioletCrayola = cVioletCrayola;
var cVioletRYB = 'VioletRYB'; // VioletRYB

exports.cVioletRYB = cVioletRYB;
var cVioletWeb = 'VioletWeb'; // VioletWeb

exports.cVioletWeb = cVioletWeb;
var cVioletBlue = 'VioletBlue'; // VioletBlue

exports.cVioletBlue = cVioletBlue;
var cVioletBlueCrayola = 'VioletBlueCrayola'; // VioletBlueCrayola

exports.cVioletBlueCrayola = cVioletBlueCrayola;
var cVioletRed = 'VioletRed'; // VioletRed

exports.cVioletRed = cVioletRed;
var cViridian = 'Viridian'; // Viridian

exports.cViridian = cViridian;
var cViridianGreen = 'ViridianGreen'; // ViridianGreen

exports.cViridianGreen = cViridianGreen;
var cVividBurgundy = 'VividBurgundy'; // VividBurgundy

exports.cVividBurgundy = cVividBurgundy;
var cVividSkyBlue = 'VividSkyBlue'; // VividSkyBlue

exports.cVividSkyBlue = cVividSkyBlue;
var cVividTangerine = 'VividTangerine'; // VividTangerine

exports.cVividTangerine = cVividTangerine;
var cVividViolet = 'VividViolet'; // VividViolet

exports.cVividViolet = cVividViolet;
var cVolt = 'Volt'; // Volt

exports.cVolt = cVolt;
var cWarmBlack = 'WarmBlack'; // WarmBlack

exports.cWarmBlack = cWarmBlack;
var cWheat = 'Wheat'; // Wheat

exports.cWheat = cWheat;
var cWildBlueYonder = 'WildBlueYonder'; // WildBlueYonder

exports.cWildBlueYonder = cWildBlueYonder;
var cWildOrchid = 'WildOrchid'; // WildOrchid

exports.cWildOrchid = cWildOrchid;
var cWildStrawberry = 'WildStrawberry'; // WildStrawberry

exports.cWildStrawberry = cWildStrawberry;
var cWildWatermelon = 'WildWatermelon'; // WildWatermelon

exports.cWildWatermelon = cWildWatermelon;
var cWindsorTan = 'WindsorTan'; // WindsorTan

exports.cWindsorTan = cWindsorTan;
var cWine = 'Wine'; // Wine

exports.cWine = cWine;
var cWineDregs = 'WineDregs'; // WineDregs

exports.cWineDregs = cWineDregs;
var cWinterSky = 'WinterSky'; // WinterSky

exports.cWinterSky = cWinterSky;
var cWintergreenDream = 'WintergreenDream'; // WintergreenDream

exports.cWintergreenDream = cWintergreenDream;
var cWisteria = 'Wisteria'; // Wisteria

exports.cWisteria = cWisteria;
var cWoodBrown = 'WoodBrown'; // WoodBrown

exports.cWoodBrown = cWoodBrown;
var cXanthic = 'Xanthic'; // Xanthic

exports.cXanthic = cXanthic;
var cXanadu = 'Xanadu'; // Xanadu

exports.cXanadu = cXanadu;
var cYaleBlue = 'YaleBlue'; // YaleBlue

exports.cYaleBlue = cYaleBlue;
var cYellowCrayola = 'YellowCrayola'; //YellowCrayola

exports.cYellowCrayola = cYellowCrayola;
var cYellowMunsell = 'YellowMunsell'; // YellowMunsell

exports.cYellowMunsell = cYellowMunsell;
var cYellowNCS = 'YellowNCS'; // YellowNCS

exports.cYellowNCS = cYellowNCS;
var cYellowPantone = 'YellowPantone'; // YellowPantone

exports.cYellowPantone = cYellowPantone;
var cYellowProcess = 'YellowProcess'; // YellowProcess

exports.cYellowProcess = cYellowProcess;
var cYellowRYB = 'YellowRYB'; // YellowRYB

exports.cYellowRYB = cYellowRYB;
var cYellowGreen = 'YellowGreen'; // YellowGreen

exports.cYellowGreen = cYellowGreen;
var cYellowGreenCrayola = 'YellowGreenCrayola'; // YellowGreenCrayola

exports.cYellowGreenCrayola = cYellowGreenCrayola;
var cYellowGreenColorWheel = 'YellowGreenColorWheel'; // YellowGreenColorWheel

exports.cYellowGreenColorWheel = cYellowGreenColorWheel;
var cYellowOrange = 'YellowOrange'; // YellowOrange

exports.cYellowOrange = cYellowOrange;
var cYellowOrangeColorWheel = 'YellowOrangeColorWheel'; // YellowOrangeColorWheel

exports.cYellowOrangeColorWheel = cYellowOrangeColorWheel;
var cYellowSunshine = 'YellowSunshine'; // YellowSunshine

exports.cYellowSunshine = cYellowSunshine;
var cYInMnBlue = 'YInMnBlue'; // YInMnBlue

exports.cYInMnBlue = cYInMnBlue;
var cZaffre = 'Zaffre'; // Zaffre

exports.cZaffre = cZaffre;
var cZomp = 'Zomp'; // Zomp

exports.cZomp = cZomp;