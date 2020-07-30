"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cFermatCurve = exports.cPolynomialLemniscate = exports.cMacbeathSurface = exports.cBolzaSurface = exports.cClassicalModularCurve = exports.cKleinQuartic = exports.cHyperellipticCurve = exports.cElkiesTrinomialCurves = exports.cButterflyCurve = exports.cWattsCurve = exports.cEllipticCurve = exports.cCubicCurve = exports.cCassinoide = exports.cCassiniOval = exports.cBicuspidCurve = exports.cRoseCurve = exports.cRationalNormalCurve = exports.cPoinsotsSpirals = exports.cLissajousCurve = exports.cHypocycloid = exports.cEpitrochoid = exports.cEpispiral = exports.cEpicycloid = exports.cQuadrifolium = exports.cNephroid = exports.cAtriphtaloid = exports.cAstroid = exports.cQuinticOfLHospital = exports.cTrifoliumCurve = exports.cLimaconTrisectrix = exports.cCardioid = exports.cLimacon = exports.cLemniscateOfBernoulli = exports.cLemniscateOfGerono = exports.cLemniscateOfBooth = exports.cKappaCurve = exports.cKampyleOfEudoxus = exports.cHippopede = exports.cDevilsCurve = exports.cDeltoidCurve = exports.cCruciformCurve = exports.cBulletNoseCurve = exports.cBowCurve = exports.cBicorn = exports.cBeanCurve = exports.cAmpersandCurve = exports.cWitchOfAgnesi = exports.cTschirnhausenCubic = exports.cTrisectrixOfMaclaurin = exports.cTridentCurve = exports.cSerpentineCurve = exports.cSemicubicalParabola = exports.cRightStrophoid = exports.cConchoidOfDeSluze = exports.cCissoidOfDiocles = exports.cFoliumOfDescartes = exports.cUnitHyperbola = exports.cunitHyperbola = exports.cUnitCircle = exports.cunitCircle = exports.cConicSection = exports.cconicSection = exports.cQuarticPlaneCurve = exports.cquarticPlaneCurve = exports.cCubicPlaneCurve = exports.ccubicPlaneCurve = exports.cConic = exports.cconic = exports.cQuartic = exports.cquartic = exports.cCurve = exports.ccurve = exports.cPlane = exports.cplane = exports.cCubic = exports.ccubic = exports.cCube = exports.ccube = exports.cTrapezoid = exports.ctrapezoid = exports.cNonagon = exports.cnonagon = exports.cHeptagon = exports.cheptagon = exports.cHexagon = exports.chexagon = exports.cOctagon = exports.coctagon = exports.cRectangle = exports.crectangle = exports.cTriangle = exports.ctriangle = exports.cSquare = exports.csquare = exports.cOval = exports.coval = exports.cCircle = exports.ccircle = exports.cLine = exports.cline = void 0;
exports.cSphericon = exports.cHyperbolicParaboloid = exports.cHyperboloidOfTwoSheets = exports.cHyperboloidOfOneSheet = exports.cOblateSpheroid = exports.cBoysSurface = exports.cRomanSurface = exports.cCrossCap = exports.cRealProjectivePlane = exports.cKleinBottle = exports.cTriplyPeriodicMinimalSurface = exports.cSchwarzMinimalSurface = exports.cScherkSurface = exports.cSaddleTower = exports.cRiemannsMinimalSurface = exports.cLidinoid = exports.cHelicoid = exports.cGyroid = exports.cEnneperSurface = exports.cCatenoid = exports.cCostasMinimalSurface = exports.cCatalansMinimalSurface = exports.cTorus = exports.cMobiusStrip = exports.cParaboloid = exports.cHyperboloid = exports.cSphere = exports.cSpheroid = exports.cEllipsoid = exports.cCylinder = exports.cCone = exports.cQuadricSurfaces = exports.cVivianisCurve = exports.cTwistedCubic = exports.cSlinkySpiral = exports.cSeiffertsSpiral = exports.cHemihelix = exports.cTendrilPerversion = exports.cHelix = exports.cConchospiral = exports.cStrophoid = exports.cRoulette = exports.cRadialCurve = exports.cParallelCurve = exports.cPedalCurve = exports.cNegativePedalCurve = exports.cOrthotomic = exports.cOrthoptic = exports.cIsoptic = exports.cInvolute = exports.cInverseCurve = exports.cGlissette = exports.cEvolute = exports.cConchoid = exports.cCissoid = exports.cDiacaustic = exports.cCatacaustic = exports.cCaustic = exports.cBezierTriangle = exports.cReuleauxTriangle = exports.cMaurerRose = exports.cPolygonalCurve = exports.cLowess = exports.cLoessCurve = exports.cOgee = exports.cNURBS = exports.cNonuniformRationalBSpline = exports.cBSpline = exports.cSplines = exports.cBezierCurve = exports.cTrochoid = exports.cTractrix = exports.cSyntractrix = exports.cNielsensSpiral = exports.cLogarithmicSpiral = exports.cLituus = exports.cHyperbolicSpiral = exports.cGalileosSpiral = exports.cFermatsSpiral = exports.cCotesSpiral = exports.cCornuSpiral = exports.cArchimedeanSpiral = exports.cSpirals = exports.cRhumbLine = exports.cPursuitCurve = exports.cLameCurve = exports.cIsochroneOfVarignon = exports.cIsochroneOfLeibniz = exports.cTautochrone = exports.cIsochrone = exports.cHoropter = exports.cCycloid = exports.cCochleoid = exports.cClelies = exports.cCatenary = exports.cBrachistochrone = exports.cBowditchCurve = exports.cHurwitzSurface = exports.cSuperellipse = exports.cSinusoidalSpiral = void 0;
exports.cPentadecagon = exports.cTetradecagon = exports.cTridecagon = exports.cDodecagon = exports.cHendecagon = exports.cDecagon = exports.cEnneagon = exports.cPentagon = exports.cHypercube = exports.cCrossPolytope = exports.cSimplex = exports.cEquilateralTriangle = exports.cRegularPolygon = exports.cPentagram = exports.cStarPolygon = exports.cConvexPolygon = exports.cCyclicPolygon = exports.cEquilateral = exports.cPolygon = exports.cMultiplicativeCascade = exports.cPercolationTheory = exports.cLichtenbergFigure = exports.cBrownianMotion = exports.c2DPercolationCluster = exports.c2DPercolationClusterHull = exports.c3DPolymer = exports.cRandomWalkWithNoSelfIntersection = exports.cDiffusionLimitedAggregation = exports.cCorrosionFrontIn2D = exports.cPercolationFrontIn2D = exports.c2DPolymer = exports.cBoundaryOfBrownianMotion = exports.cVonKochCurveWithRandomOrientation = exports.cVonKochCurveWithRandomInterval = exports.cZOrderCurve = exports.cWeierstrassFunction = exports.cVonKochCurve = exports.cVicsekFractal = exports.cTriflake = exports.cTakagiCurve = exports.cTSquare = exports.cSmithVolterraCantorSet = exports.cSierpinskiTriangle = exports.cSierpinskiCurve = exports.cSierpinskiCarpet = exports.cSierpinskiArrowheadCurve = exports.cRosslerAttractor = exports.cRauzyFractal = exports.cPythagorasTree = exports.cPinwheelTiling = exports.cPenroseTiling = exports.cPeanoCurve = exports.cPascalTriangle = exports.cNFlake = exports.cMooreCurve = exports.cMonkeysTree = exports.cMengerSponge = exports.cMandelbulb = exports.cMandelbrotTree = exports.cMandelbrotSet = exports.cLyapunovFractal = exports.cLorenzAttractor = exports.cFeigenbaumAttractor = exports.cLevyCCurve = exports.cLSystem = exports.cKochSnowflake = exports.cKochCurve = exports.cJuliaSet = exports.cJerusalemCube = exports.cIteratedFunctionSystem = exports.cIkedaMapAttractor = exports.cHilbertCurve = exports.cHexaflake = exports.cHenonMap = exports.cHFractal = exports.cGosperIsland = exports.cGosperCurve = exports.cFractalCurve = exports.cFlameFractal = exports.cFibonacciWordFractal = exports.cDragonCurve = exports.cDouadyRabbit = exports.cDeRhamCurve = exports.cCircleInversionFractal = exports.cCantorTesseract = exports.cCantorSet = exports.cCantorDust = exports.cBlancmangeCurve = exports.cApollonianSpherePacking = exports.cApollonianGasket = exports.cRightConoid = exports.cWhitneyUmbrella = exports.cDupinCyclide = exports.cMonkeySaddle = exports.cClebschCubic = exports.cBarthSextic = exports.cCayleyCubic = exports.cPseudosphere = exports.cDinisSurface = exports.cOloid = void 0;
exports.c9Simplex = exports.c8Orthoplex = exports.c8Cube = exports.c8Simplex = exports.c7Orthoplex = exports.c7Cube = exports.c7Simplex = exports.c6Orthoplex = exports.c6Cube = exports.c6Simplex = exports.c5Orthoplex = exports.c5Cube = exports.c5Simplex = exports.cSimplexHypercubeCrossPolytope = exports.cTetracomb = exports.c5Polytope = exports.cOrder6HexagonalTilingHoneycomb = exports.cOrder5HexagonalTilingHoneycomb = exports.cOrder4HexagonalTilingHoneycomb = exports.cHexagonalTilingHoneycomb = exports.cOrder6DodecahedralHoneycomb = exports.cOrder6CubicHoneycomb = exports.cOrder6TetrahedralHoneycomb = exports.cOrder4SquareTilingHoneycomb = exports.cSquareTilingHoneycomb = exports.cTriangularTilingHoneycomb = exports.cOrder4OctahedralHoneycomb = exports.cOrder3IcosahedralHoneycomb = exports.cIcosahedralHoneycomb = exports.cOrder5CubicHoneycomb = exports.cOrder5DodecahedralHoneycomb = exports.cOrder4DodecahedralHoneycomb = exports.cOrder2HexagonalTilingHoneycomb = exports.cOrder2TriangularTilingHoneycomb = exports.cOrder2SquareTilingHoneycomb = exports.cHexagonalHosohedralHoneycomb = exports.cOrder6TriangularHosohedralHoneycomb = exports.cOrder4SquareHosohedralHoneycomb = exports.cApeirogonalHosohedron = exports.cOrder2ApeirogonalTiling = exports.cCubicHoneycomb = exports.cHoneycomb = exports.cGreatGrandStellated120Cell = exports.cGrand600Cell = exports.cGreatIcosahedral120Cell = exports.cGreatGrand120Cell = exports.cGrandStellated120Cell = exports.cGreatStellated120Cell = exports.cGrand120Cell = exports.cGreat120Cell = exports.cSmallStellated120Cell = exports.cIcosahedral120Cell = exports.cHyperSphere = exports.c3Sphere = exports.cHosotope = exports.cDitope = exports.c600Cell = exports.c120Cell = exports.c24Cell = exports.c4DCrossPolytope = exports.c4DHypercube = exports.c4DSpaceSimplex = exports.cEnneagrammicOrderEnneagonalTiling = exports.cOrder9EnneagrammicTiling = exports.cHeptagrammicOrderHeptagonalTiling = exports.cOrder7HeptagrammicTiling = exports.cHyperbolicTiling = exports.cLobachevskiPlane = exports.cHexagonalTiling = exports.cTriangularTiling = exports.cGrid = exports.cSquareTiling = exports.cGreatIcosahedron = exports.cGreatStellatedDodecahedron = exports.cGreatDodecahedron = exports.cSmallStellatedDodecahedron = exports.cKeplerPoinsotPolyhedra = exports.cHenagon = exports.cDihedron = exports.cHosohedron = exports.cIcosahedron = exports.cDodecahedron = exports.cOctahedron = exports.cTetrahedron = exports.cPlatonicSolid = exports.cPolyhedron = exports.cApeirogon = exports.cDecagram = exports.cEnneagram = exports.cOctagram = exports.cHeptagram = exports.cDigon = exports.cMonogon = exports.cChiliagon = exports.cHectogon = exports.cIcosagon = exports.cEnneadecagon = exports.cOctadecagon = exports.cHeptadecagon = exports.cHexadecagon = void 0;
exports.cCuboctahedron = exports.cTruncatedTetrahedron = exports.cHemiIcosahedron = exports.cHemiDodecahedron = exports.cHemiOctahedron = exports.cHemicube = exports.cElongatedTriangularTiling = exports.cSnubHexagonalTiling = exports.cTruncatedTriHexagonalTiling = exports.cRhombitriHexagonalTiling = exports.cTruncatedHexagonalTiling = exports.cTrihexagonalTiling = exports.cSnubSquareTiling = exports.cTruncatedSquareTiling = exports.cArchimedeanTiling = exports.cMegagon = exports.c65537Gon = exports.cMyriagon = exports.c257Gon = exports.cEnneacontagon = exports.cOctacontagon = exports.cHeptacontagon = exports.cHexacontagon = exports.cPentacontagon = exports.cTetracontagon = exports.cTriacontagon = exports.cTriskaidecagon = exports.cRegularDecagon = exports.cRegularOctagon = exports.cLemoineHexagon = exports.cRegularPentagon = exports.cIsoscelesTrapezoid = exports.cTrapezium = exports.cTangentialQuadrilateral = exports.cRhomboid = exports.cLozenge = exports.cEquilateralParallelogram = exports.cRhombus = exports.cParallelogram = exports.cKite = exports.cCyclicQuadrilateral = exports.cQuadrilateral = exports.cScaleneTriangle = exports.cKeplerTriangle = exports.cIsoscelesRightTriangle = exports.c30_60_90Triangle = exports.cRightTriangle = exports.cRationalTriangle = exports.cObtuseTriangle = exports.cIsoscelesTriangle = exports.cAcuteTriangle = exports.cStarOfLakshmi = exports.cStarOfDavid = exports.cHexagram = exports.cStar = exports.cGolygon = exports.cGnomon = exports.cBalbis = exports.cPolyform = exports.cPenroseTile = exports.cEquilateralPolygon = exports.cEquiangularPolygon = exports.cConstructiblePolygon = exports.cConcavePolygon = exports.c57Cell = exports.c11Cell = exports.cAbstractPolytope = exports.cRegularSkewPolyhedron = exports.cApeirohedron = exports.cApeirotope = exports.c16CellHoneycombHoneycomb = exports.c24CellHoneycombHoneycomb = exports.c5OrthoplexHoneycomb = exports.cGreat120CellHoneycomb = exports.cOrder5Icosahedral120CellHoneycomb = exports.cPentagrammicOrder600CellHoneycomb = exports.cSmallStellated120CellHoneycomb = exports.cOrder4_24CellHoneycomb = exports.cOrder5_120CellHoneycomb = exports.cOrder4_120CellHoneycomb = exports.cOrder5TesseracticHoneycomb = exports.c120CellHoneycomb = exports.cOrder5_5CellHoneycomb = exports.c8CubeHoneycomb = exports.c7CubeHoneycomb = exports.c6CubeHoneycomb = exports.c5CubeHoneycomb = exports.cHypercubicHoneycomb = exports.c24CellHoneycomb = exports.c16CellHoneycomb = exports.cTesseracticHoneycomb = exports.cHoneycombs = exports.c11Orthoplex = exports.c11Cube = exports.c11Simplex = exports.c10Orthoplex = exports.c10Cube = exports.c10Simplex = exports.c9Orthoplex = exports.c9Cube = void 0;
exports.cGreatPentakisDodecahedron = exports.cGreatPentagrammicHexecontahedron = exports.cGreatPentagonalHexecontahedron = exports.cGreatInvertedPentagonalHexecontahedron = exports.cGreatIcosihemidodecacron = exports.cGreatIcosacronicHexecontahedron = exports.cGreatHexagonalHexecontahedron = exports.cGreatHexacronicIcositetrahedron = exports.cGreatDodecicosacron = exports.cGreatDodecahemicosacron = exports.cGreatDodecacronicHexecontahedron = exports.cGreatDitrigonalDodecacronicHexecontahedron = exports.cGreatDisnubDirhombidodecacron = exports.cGreatDisdyakisTriacontahedron = exports.cGreatDisdyakisDodecahedron = exports.cGreatDirhombicosidodecacron = exports.cGreatDeltoidalIcositetrahedron = exports.cGreatDeltoidalHexecontahedron = exports.cGreatComplexIcosidodecahedron = exports.cPentagonalHexecontahedron = exports.cDisdyakisTriacontahedron = exports.cDeltoidalHexecontahedron = exports.cPentakisDodecahedron = exports.cTriakisIcosahedron = exports.cRhombicTriacontahedron = exports.cPentagonalIcositetrahedron = exports.cDisdyakisDodecahedron = exports.cDeltoidalIcositetrahedron = exports.cTetrakisHexahedron = exports.cTriakisOctahedron = exports.cRhombicDodecahedron = exports.cTriakisTetrahedron = exports.cCatalanSolid = exports.cTruncatedGreatIcosahedron = exports.cTruncatedGreatDodecahedron = exports.cTruncatedDodecadodecahedron = exports.cTetrahemihexahedron = exports.cStellatedTruncatedHexahedron = exports.cSnubIcosidodecadodecahedron = exports.cSnubDodecadodecahedron = exports.cSmallStellatedTruncatedDodecahedron = exports.cSmallSnubIcosicosidodecahedron = exports.cSmallRhombihexahedron = exports.cSmallRhombidodecahedron = exports.cSmallRetrosnubIcosicosidodecahedron = exports.cSmallIcosihemidodecahedron = exports.cSmallIcosicosidodecahedron = exports.cSmallDodecicosidodecahedron = exports.cSmallDodecicosahedron = exports.cSmallDodecahemidodecahedron = exports.cSmallDodecahemicosahedron = exports.cSmallDitrigonalIcosidodecahedron = exports.cSmallDitrigonalDodecicosidodecahedron = exports.cSmallCubicuboctahedron = exports.cRhombidodecadodecahedron = exports.cRhombicosahedron = exports.cOctahemioctahedron = exports.cNonconvexGreatRhombicuboctahedron = exports.cNonconvexGreatRhombicosidodecahedron = exports.cInvertedSnubDodecadodecahedron = exports.cIcositruncatedDodecadodecahedron = exports.cIcosidodecadodecahedron = exports.cGreatTruncatedIcosidodecahedron = exports.cGreatTruncatedCuboctahedron = exports.cGreatStellatedTruncatedDodecahedron = exports.cGreatSnubIcosidodecahedron = exports.cGreatSnubDodecicosidodecahedron = exports.cGreatRhombihexahedron = exports.cGreatRhombidodecahedron = exports.cGreatRetrosnubIcosidodecahedron = exports.cGreatInvertedSnubIcosidodecahedron = exports.cGreatIcosihemidodecahedron = exports.cGreatIcosidodecahedron = exports.cGreatIcosicosidodecahedron = exports.cGreatDodecicosidodecahedron = exports.cGreatDodecicosahedron = exports.cGreatDodecahemidodecahedron = exports.cGreatDodecahemicosahedron = exports.cGreatDitrigonalIcosidodecahedron = exports.cGreatDitrigonalDodecicosidodecahedron = exports.cGreatDisnubDirhombidodecahedron = exports.cGreatDirhombicosidodecahedron = exports.cGreatCubicuboctahedron = exports.cDodecadodecahedron = exports.cDitrigonalDodecadodecahedron = exports.cCubohemioctahedron = exports.cCubitruncatedCuboctahedron = exports.cAntiprism = exports.cPrism = exports.cSnubDodecahedron = exports.cTruncatedIcosidodecahedron = exports.cRhombicosidodecahedron = exports.cTruncatedIcosahedron = exports.cTruncatedDodecahedron = exports.cIcosidodecahedron = exports.cSnubCube = exports.cTruncatedCuboctahedron = exports.cRhombicubOctahedron = exports.cTruncatedOctahedron = exports.cTruncatedCube = void 0;
exports.cPentagonalCupola = exports.cPentagonalBipyramid = exports.cParagyrateDiminishedRhombicosidodecahedron = exports.cParabigyrateRhombicosidodecahedron = exports.cParabidiminishedRhombicosidodecahedron = exports.cParabiaugmentedTruncatedDodecahedron = exports.cParabiaugmentedHexagonalPrism = exports.cParabiaugmentedDodecahedron = exports.cMetagyrateDiminishedRhombicosidodecahedron = exports.cMetabigyrateRhombicosidodecahedron = exports.cMetabidiminishedRhombicosidodecahedron = exports.cMetabidiminishedIcosahedron = exports.cMetabiaugmentedTruncatedDodecahedron = exports.cMetabiaugmentedHexagonalPrism = exports.cMetabiaugmentedDodecahedron = exports.cHebesphenomegacorona = exports.cGyroelongatedTriangularCupola = exports.cGyroelongatedTriangularBicupola = exports.cGyroelongatedSquarePyramid = exports.cGyroelongatedSquareCupola = exports.cGyroelongatedSquareBipyramid = exports.cGyroelongatedSquareBicupola = exports.cGyroelongatedPentagonalRotunda = exports.cGyroelongatedPentagonalPyramid = exports.cGyroelongatedPentagonalCupolarotunda = exports.cGyroelongatedPentagonalCupola = exports.cGyroelongatedPentagonalBirotunda = exports.cGyroelongatedPentagonalBicupola = exports.cGyrobifastigium = exports.cGyrateRhombicosidodecahedron = exports.cGyrateBidiminishedRhombicosidodecahedron = exports.cElongatedTriangularPyramid = exports.cElongatedTriangularOrthobicupola = exports.cElongatedTriangularGyrobicupola = exports.cElongatedTriangularCupola = exports.cElongatedTriangularBipyramid = exports.cElongatedSquarePyramid = exports.cElongatedSquareGyrobicupola = exports.cElongatedSquareCupola = exports.cElongatedSquareBipyramid = exports.cElongatedPentagonalRotunda = exports.cElongatedPentagonalPyramid = exports.cElongatedPentagonalOrthocupolarotunda = exports.cElongatedPentagonalOrthobirotunda = exports.cElongatedPentagonalOrthobicupola = exports.cElongatedPentagonalGyrocupolarotunda = exports.cElongatedPentagonalGyrobirotunda = exports.cElongatedPentagonalGyrobicupola = exports.cElongatedPentagonalCupola = exports.cElongatedPentagonalBipyramid = exports.cDisphenocingulum = exports.cDiminishedRhombicosidodecahedron = exports.cBilunabirotunda = exports.cBigyrateDiminishedRhombicosidodecahedron = exports.cBiaugmentedTruncatedCube = exports.cBiaugmentedTriangularPrism = exports.cBiaugmentedPentagonalPrism = exports.cAugmentedTruncatedTetrahedron = exports.cAugmentedTruncatedDodecahedron = exports.cAugmentedTruncatedCube = exports.cAugmentedTridiminishedIcosahedron = exports.cAugmentedTriangularPrism = exports.cAugmentedSphenocorona = exports.cAugmentedPentagonalPrism = exports.cAugmentedHexagonalPrism = exports.cAugmentedDodecahedron = exports.cTetrahemihexacron = exports.cSmallTriambicIcosahedron = exports.cSmallStellapentakisDodecahedron = exports.cSmallRhombihexacron = exports.cSmallRhombidodecacron = exports.cSmallIcosihemidodecacron = exports.cSmallIcosacronicHexecontahedron = exports.cSmallHexagrammicHexecontahedron = exports.cSmallHexagonalHexecontahedron = exports.cSmallHexacronicIcositetrahedron = exports.cSmallDodecicosacron = exports.cSmallDodecahemidodecacron = exports.cSmallDodecahemicosacron = exports.cSmallDodecacronicHexecontahedron = exports.cSmallDitrigonalDodecacronicHexecontahedron = exports.cSmallComplexIcosidodecahedron = exports.cRhombicosacron = exports.cOctahemioctacron = exports.cHemipolyhedron = exports.cHexahemioctacron = exports.cMedialRhombicTriacontahedron = exports.cMedialPentagonalHexecontahedron = exports.cMedialInvertedPentagonalHexecontahedron = exports.cMedialIcosacronicHexecontahedron = exports.cMedialHexagonalHexecontahedron = exports.cMedialDisdyakisTriacontahedron = exports.cMedialDeltoidalHexecontahedron = exports.cGreatTriambicIcosahedron = exports.cGreatTriakisOctahedron = exports.cGreatTriakisIcosahedron = exports.cGreatStellapentakisDodecahedron = exports.cGreatRhombihexacron = exports.cGreatRhombidodecacron = exports.cGreatRhombicTriacontahedron = void 0;
exports.cTetratedDodecahedron = exports.cTetradyakisHexahedron = exports.cTetradecahedron = exports.cSzilassiPolyhedron = exports.cSquareTruncatedTrapezohedron = exports.cSquareBifrustum = exports.cSchonhardtPolyhedron = exports.cScalenohedron = exports.cRhombicIcosahedron = exports.cRhombicEnneacontahedron = exports.cPyritohedron = exports.cPolytetrahedron = exports.cPentagonalBifrustum = exports.cNearMissJohnsonSolid = exports.cJessensIcosahedron = exports.cInfiniteSkewPolyhedron = exports.cHolyhedron = exports.cHillTetrahedron = exports.cHexagonalTruncatedTrapezohedron = exports.cHexagonalBifrustum = exports.cHeronianTetrahedron = exports.cGyroelongatedSquareDipyramid = exports.cFlexiblePolyhedron = exports.cCsaszarPolyhedron = exports.cBoerdijkCoxeterHelix = exports.cBifrustum = exports.cApeirogonalPrism = exports.cWeairePhelanStructure = exports.cTrapezoRhombicDodecahedralHoneycomb = exports.cRhombicDodecahedralHoneycomb = exports.cDisphenoidTetrahedralHoneycomb = exports.cSnubSquarePrismaticHoneycomb = exports.cSnubTriangularHexagonalPrismaticHoneycomb = exports.cOmnitruncatedTriangularHexagonalPrismaticHoneycomb = exports.cRhombitriangularHexagonalPrismaticHoneycomb = exports.cTruncatedSquarePrismaticHoneycomb = exports.cTruncatedHexagonalPrismaticHoneycomb = exports.cTriangularHexagonalPrismaticHoneycomb = exports.cTriangularPrismaticHoneycomb = exports.cHexagonalPrismaticHoneycomb = exports.cElongatedAlternatedCubicHoneycomb = exports.cElongatedTriangularPrismaticHoneycomb = exports.cGyroelongatedTriangularPrismaticHoneycomb = exports.cGyroelongatedAlternatedCubicHoneycomb = exports.cGyratedTriangularPrismaticHoneycomb = exports.cGyratedTetrahedralOctahedralHoneycomb = exports.cQuarterCubicHoneycomb = exports.cRuncinatedAlternatedCubicHoneycomb = exports.cCantitruncatedAlternatedCubicHoneycomb = exports.cTruncatedAlternatedCubicHoneycomb = exports.cTetrahedralOctahedralHoneycomb = exports.cOmnitruncatedCubicHoneycomb = exports.cRuncitruncatedCubicHoneycomb = exports.cRectifiedCubicHoneycomb = exports.cCantitruncatedCubicHoneycomb = exports.cCantellatedCubicHoneycomb = exports.cBitruncatedCubicHoneycomb = exports.cTruncatedCubicHoneycomb = exports.cBicupola = exports.cCupola = exports.cPrismatoid = exports.cZonohedron = exports.cDeltahedron = exports.cTruncatedTrapezohedron = exports.cRhomboHexagonalDodecahedron = exports.cTrapezoRhombicDodecahedron = exports.cFrustum = exports.cTrapezohedron = exports.cRhombohedron = exports.cCuboid = exports.cParallelepiped = exports.cDisphenoid = exports.cBipyramid = exports.cPyramid = exports.cTrigyrateRhombicosidodecahedron = exports.cTridiminishedRhombicosidodecahedron = exports.cTridiminishedIcosahedron = exports.cTriaugmentedTruncatedDodecahedron = exports.cTriaugmentedTriangularPrism = exports.cTriaugmentedHexagonalPrism = exports.cTriaugmentedDodecahedron = exports.cTriangularOrthobicupola = exports.cTriangularHebesphenorotunda = exports.cTriangularCupola = exports.cTriangularBipyramid = exports.cSquarePyramid = exports.cSquareOrthobicupola = exports.cSquareGyrobicupola = exports.cSquareCupola = exports.cSphenomegacorona = exports.cSphenocorona = exports.cSnubSquareAntiprism = exports.cSnubDisphenoid = exports.cPentagonalRotunda = exports.cPentagonalPyramid = exports.cPentagonalOrthocupolarotunda = exports.cPentagonalOrthobirotunda = exports.cPentagonalOrthobicupola = exports.cPentagonalGyrocupolarotunda = exports.cPentagonalGyrobicupola = void 0;
exports.cGrand_600Cell = exports.cGreatIcosahedral_120Cell = exports.cGreatGrand_120Cell = exports.cGrandStellated_120Cell = exports.cGreatStellated_120Cell = exports.cGrand_120Cell = exports.cGreat_120Cell = exports.cSmallStellated_120Cell = exports.cIcosahedral_120Cell = exports.cSphericalCone = exports.cTesseract = exports.cIcositetrachoron = exports.cPentachoron = exports.cHexadecachoron = exports.cHexacosichoron = exports.cHecatonicosachoron = exports.cPrismaticCompoundOfPrismsWithRotationalFreedom = exports.cPrismaticCompoundOfPrisms = exports.cPrismaticCompoundOfAntiprismsWithRotationalFreedom = exports.cPrismaticCompoundOfAntiprisms = exports.cCompoundOfTwoTruncatedTetrahedra = exports.cCompoundOfTwoSnubIcosidodecadodecahedra = exports.cCompoundOfTwoSnubDodecahedra = exports.cCompoundOfTwoSnubDodecadodecahedra = exports.cCompoundOfTwoSnubCubes = exports.cCompoundOfTwoSmallStellatedDodecahedra = exports.cCompoundOfTwoInvertedSnubDodecadodecahedra = exports.cCompoundOfTwoIcosahedra = exports.cCompoundOfTwoGreatSnubIcosidodecahedra = exports.cCompoundOfTwoGreatRetrosnubIcosidodecahedra = exports.cCompoundOfTwoGreatInvertedSnubIcosidodecahedra = exports.cCompoundOfTwoGreatIcosahedra = exports.cCompoundOfTwoGreatDodecahedra = exports.cCompoundOfTwentyTriangularPrisms = exports.cCompoundOfTwentyTetrahemihexahedra = exports.cCompoundOfTwentyOctahedraWithRotationalFreedom = exports.cCompoundOfTwentyOctahedra = exports.cCompoundOfTwelveTetrahedraWithRotationalFreedom = exports.cCompoundOfTwelvePentagrammicPrisms = exports.cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom = exports.cCompoundOfTwelvePentagrammicAntiprisms = exports.cCompoundOfTwelvePentagonalPrisms = exports.cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom = exports.cCompoundOfThreeTetrahedra = exports.cCompoundOfThreeSquareAntiprisms = exports.cCompoundOfThreeCubes = exports.cCompoundOfTenTruncatedTetrahedra = exports.cCompoundOfTenTriangularPrisms = exports.cCompoundOfTenTetrahedra = exports.cCompoundOfTenOctahedra = exports.cCompoundOfTenHexagonalPrisms = exports.cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron = exports.cCompoundOfSixTetrahedraWithRotationalFreedom = exports.cCompoundOfSixTetrahedra = exports.cCompoundOfSixSquareAntiprisms = exports.cCompoundOfSixPentagrammicPrisms = exports.cCompoundOfSixPentagrammicCrossedAntiprisms = exports.cCompoundOfSixPentagrammicAntiprisms = exports.cCompoundOfSixPentagonalPrisms = exports.cCompoundOfSixPentagonalAntiprisms = exports.cCompoundOfSixDecagrammicPrisms = exports.cCompoundOfSixDecagonalPrisms = exports.cCompoundOfSixCubesWithRotationalFreedom = exports.cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron = exports.cCompoundOfFourTriangularPrisms = exports.cCompoundOfFourTetrahedra = exports.cCompoundOfFourOctahedraWithRotationalFreedom = exports.cCompoundOfFourOctahedra = exports.cCompoundOfFourHexagonalPrisms = exports.cCompoundOfFiveUniformGreatRhombicuboctahedra = exports.cCompoundOfFiveTruncatedTetrahedra = exports.cCompoundOfFiveTruncatedCubes = exports.cCompoundOfFiveTetrahemihexahedra = exports.cCompoundOfFiveTetrahedra = exports.cCompoundOfFiveStellatedTruncatedCubes = exports.cCompoundOfFiveSmallStellatedDodecahedra = exports.cCompoundOfFiveSmallRhombihexahedra = exports.cCompoundOfFiveSmallRhombicuboctahedra = exports.cCompoundOfFiveSmallCubicuboctahedra = exports.cCompoundOfFiveOctahemioctahedra = exports.cCompoundOfFiveOctahedra = exports.cCompoundOfFiveIcosahedra = exports.cCompoundOfFiveGreatRhombihexahedra = exports.cCompoundOfFiveGreatIcosahedra = exports.cCompoundOfFiveGreatDodecahedra = exports.cCompoundOfFiveGreatCubicuboctahedra = exports.cCompoundOfFiveCubohemioctahedra = exports.cCompoundOfFiveCuboctahedra = exports.cCompoundOfFiveCubes = exports.cCompoundOfEightTriangularPrisms = exports.cCompoundOfEightOctahedraWithRotationalFreedom = exports.cCompoundOfDodecahedronAndIcosahedron = exports.cCompoundOfCubeAndOctahedron = exports.cWedge = exports.cWatermanPolyhedron = exports.cTrigonalTrapezohedron = exports.cTridyakisIcosahedron = exports.cTruncatedTriakisTetrahedron = exports.cTruncatedRhombicDodecahedron = exports.cTriangularBifrustum = void 0;
exports.cPentellated_7Demicube = exports.cStericated_7Demicube = exports.cRuncinated_7Demicube = exports.cCantellated_7Demicube = exports.cTruncated_7Demicube = exports.c7Demicube = exports.cHexicated_7Simplex = exports.cPentellated_7Simplex = exports.cStericated_7Simplex = exports.cRuncinated_7Simplex = exports.cCantellated_7Simplex = exports.cTruncated_7Simplex = exports.cRectified_7Simplex = exports.c6DemicubicHoneycomb = exports.c6SimplexHoneycomb = exports.c6CubicHoneycomb = exports.cStericated_6Orthoplex = exports.cRuncinated_6Orthoplex = exports.cCantellated_6Orthoplex = exports.cTruncated_6Orthoplex = exports.cRectified_6Orthoplex = exports.cPentellated_6Cube = exports.cStericated_6Cube = exports.cRuncinated_6Cube = exports.cCantellated_6Cube = exports.cTruncated_6Cube = exports.cRectified_6Cube = exports.cStericated_6Demicube = exports.cRuncinated_6Demicube = exports.cCantellated_6Demicube = exports.cTruncated_6Demicube = exports.c6Demicube = exports.cPentellated_6Simplex = exports.cStericated_6Simplex = exports.cRuncinated_6Simplex = exports.cCantellated_6Simplex = exports.cTruncated_6Simplex = exports.cRectified_6Simplex = exports.c5DemicubicHoneycomb = exports.cTruncated_5SimplexHoneycomb = exports.c5SimplexHoneycomb = exports.c5CubicHoneycomb = exports.cRuncinated_5Orthoplex = exports.cCantellated_5Orthoplex = exports.cTruncated_5Orthoplex = exports.cRectified_5Orthoplex = exports.cStericated_5Cube = exports.cRuncinated_5Cube = exports.cCantellated_5Cube = exports.cTruncated_5Cube = exports.cRectified_5Cube = exports.cRuncinated_5Demicube = exports.cCantellated_5Demicube = exports.cTruncated_5Demicube = exports.c5Demicube = exports.cStericated_5Simplex = exports.cRuncinated_5Simplex = exports.cCantellated_5Simplex = exports.cTruncated_5Simplex = exports.cRectified_5Simplex = exports.cUniformAntiprismaticPrism = exports.cSnubDodecahedralPrism = exports.cTruncatedIcosidodecahedralPrism = exports.cRhombicosidodecahedralPrism = exports.cIcosidodecahedralPrism = exports.cTruncatedIcosahedralPrism = exports.cTruncatedDodecahedralPrism = exports.cSnubCubicPrism = exports.cTruncatedCuboctahedralPrism = exports.cRhombicuboctahedralPrism = exports.cCuboctahedralPrism = exports.cTruncatedOctahedralPrism = exports.cTruncatedCubicPrism = exports.cTruncatedTetrahedralPrism = exports.cTetrahedralPrism = exports.cDuoprism = exports.cGrandAntiprism = exports.cCantellated_600Cell = exports.cTruncated_600Cell = exports.cRectified_600Cell = exports.cRuncinated_120Cell = exports.cCantellated_120Cell = exports.cTruncated_120Cell = exports.cRectified_120Cell = exports.cSnub_24Cell = exports.cRuncinated_24Cell = exports.cCantellated_24Cell = exports.cTruncated_24Cell = exports.cRectified_24Cell = exports.cTruncated_16Cell = exports.cRectified_16Cell = exports.cRuncinatedTesseract = exports.cCantellatedTesseract = exports.cTruncatedTesseract = exports.cRectifiedTesseract = exports.cRuncinated_5Cell = exports.cCantellated_5Cell = exports.cTruncated_5Cell = exports.cRectified_5Cell = exports.cGreatGrandStellated_120Cell = void 0;
exports.cBoomHitch = exports.cBloodKnot = exports.cBlakesHitch = exports.cBiminiTwistKnot = exports.cBeerKnot = exports.cBasketHitch = exports.cBarrelHitch = exports.cBackSplice = exports.cAustralianBraidKnot = exports.cAshleyStopper = exports.cAshleyBend = exports.cArborKnot = exports.cAnchorHitch = exports.cAplineButterflyLoop = exports.cAlpineButterflyBend = exports.cAlbrightKnot = exports.cAdjustableSling = exports.cAdjustableGripHitch = exports.cRibaucourCurve = exports.cRay = exports.cHigherOrderSpline = exports.cBetaSpline = exports.cHermiteSpline = exports.cSpline = exports.cParametricCurve = exports.cHedgehog = exports.cCurveOfConstantWidth = exports.cCubicHermiteCurve = exports.cArc = exports.cVesicaPiscis = exports.cCrescent = exports.cBicentricQuadrilateral = exports.cSteinerChain = exports.cSquircle = exports.cSemicircle = exports.cSalinon = exports.cRobbinsPentagon = exports.cPeaucellierLipkinLinkage = exports.cPappusChain = exports.cLune = exports.cHypotrochoid = exports.cHorocycle = exports.cExTangentialQuadrilateral = exports.cEpicycle = exports.cDeferent = exports.cCircularSegment = exports.cCircularSector = exports.cBorromeanRings = exports.cArbelos = exports.cApollonianCircles = exports.cAnnulus = exports.c10Demicube = exports.c9Demicube = exports.c8DemicubicHoneycomb = exports.c8CubicHoneycomb = exports.cHexicated_8Demicube = exports.cPentellated_8Demicube = exports.cStericated_8Demicube = exports.cRuncinated_8Demicube = exports.cCantellated_8Demicube = exports.cTruncated_8Demicube = exports.c8Demicube = exports.cHeptellated_8Cube = exports.cHexicated_8Cube = exports.cPentellated_8Cube = exports.cStericated_8Cube = exports.cRuncinated_8Cube = exports.cCantellated_8Cube = exports.cTruncated_8Cube = exports.cRectified_8Cube = exports.cHexicated_8Orthoplex = exports.cPentellated_8Orthoplex = exports.cStericated_8Orthoplex = exports.cRuncinated_8Orthoplex = exports.cCantellated_8Orthoplex = exports.cTruncated_8Orthoplex = exports.cRectified_8Orthoplex = exports.cHeptellated_8Simplex = exports.cHexicated_8Simplex = exports.cPentellated_8Simplex = exports.cStericated_8Simplex = exports.cRuncinated_8Simplex = exports.cCantellated_8Simplex = exports.cTruncated_8Simplex = exports.cRectified_8Simplex = exports.c7DemicubicHoneycomb = exports.c7CubicHoneycomb = exports.cPentellated_7Orthoplex = exports.cStericated_7Orthoplex = exports.cRuncinated_7Orthoplex = exports.cCantellated_7Orthoplex = exports.cTruncated_7Orthoplex = exports.cRectified_7Orthoplex = exports.cHexicated_7Cube = exports.cPentellated_7Cube = exports.cStericated_7Cube = exports.cRuncinated_7Cube = exports.cCantellated_7Cube = exports.cTruncated_7Cube = exports.cRectified_7Cube = void 0;
exports.cLigatureOneHand = exports.cLigatureInstrument = exports.cLashingTripod = exports.cLashingSquare = exports.cLashingSheer = exports.cLashingRound = exports.cLashingDiagonal = exports.cLanyardKnot = exports.cKlemheistKnot = exports.cImproveClinchKnot = exports.cIcicleHitchLoop = exports.cIcicleHitchEnd = exports.cHuntersBend = exports.cHondaKnot = exports.cHighwaymansHitch = exports.cHeavingLineKnot = exports.cHastyHarness = exports.cHandcuffKnot = exports.cHalyardHitch = exports.cHalterHitch = exports.cHalfWindsorNecktie = exports.cHalfKnot = exports.cHalfHitch = exports.cGrogSling = exports.cGrogSlidingSplice = exports.cGnatHitch = exports.cGirthHitch = exports.cFrenchSinnetTwo = exports.cFrenchSinnetOne = exports.cFourInHandNeckTie = exports.c4StrandSquareSinnet = exports.c4StrandSinnet = exports.cFlemishFlakeCoil = exports.cFlatOverhandBend = exports.cFigure9Loop = exports.cFigure8Loop = exports.cFigure8FollowLoop = exports.cFigure8Flake = exports.cFigure8DoubleLoop = exports.cFigure8DirectionLoop = exports.cFigure8Bend = exports.cFiadorKnot = exports.cFgKnot = exports.cFarrimondHitch = exports.cFarmersLoopKnot = exports.cEyeSplice = exports.cEstarStopperKnot = exports.cEggLoopKnot = exports.cDropperLoopKnot = exports.cDoubleTurtleKnot = exports.cDoubleOverhandStopper = exports.cDoubleMatthewWalker = exports.cDoubleFishermans = exports.cDoubleDragonLoop = exports.cDoubleDavyKnot = exports.cDoubleAlpineButterfly = exports.cDistelHitch = exports.cDavyKnot = exports.cCurtainTieBack = exports.cCrownSinnet = exports.cCrownKnot = exports.cChowHitchLoops = exports.cCowHitchEnds = exports.cCowHitch = exports.cTwist = exports.cConstrictorTwist = exports.cConstrictorRopeEnd = exports.cFolding = exports.cConstrictorFolding = exports.cEnd = exports.cConstrictorEnd = exports.cHoward = exports.cConstrictorHoward = exports.cSlide = exports.cConstrictorSlide = exports.cConstrictor = exports.cCommonWipping = exports.cCoilUnattachedRope = exports.cCoilAttachedRope = exports.cCobraKnot = exports.cRopeEnd = exports.cLoops = exports.cHitches = exports.cCloveHitch = exports.cHalyard = exports.cDockLine = exports.cCleatHitch = exports.cChainSplice = exports.cChainSinnet = exports.cCelticKnot = exports.cCarrickBendMat = exports.cCarrickBend = exports.cButchersKnot = exports.cBuntlineHitch = exports.cBrummelSpliceDemo = exports.cBrummelSplice = exports.cBowlineOnABight = exports.cBowlineKnot = exports.cBowTie = exports.cBottleSling = void 0;
exports.cZeppelinBend = exports.cWindsorNecktie = exports.cWhoopieSling = exports.cWestCountryWipping = exports.cWaterKnot = exports.cWaterBowline = exports.cWallKnot = exports.cWallCrownKnot = exports.cUniKNot = exports.cUnderwritersKnot = exports.cTwoHalfHitches = exports.cTurksHead = exports.cTumbleHitch = exports.cTruckersHitchQuick = exports.cTruckersHitch = exports.cTrileneKnot = exports.cTreeSwing = exports.cTimberHitch = exports.c3StrandBraidAlternate = exports.c3StrandBraid = exports.cTensionlessHitch = exports.cSurgicalTieTwoHands = exports.cSurgicalTieOneHand = exports.cSurgicalTieInsturmental = exports.cSurgicalSlipTie = exports.cSurgeonsLoopKnot = exports.cSurgeonsJoinKnot = exports.cSuperMunterHitch = exports.cStrangleKnotOverhand = exports.cStrangleKnotEnd = exports.cStopperLoop = exports.cStevedoreStopper = exports.cSquareKnot = exports.cSpanishBowline = exports.cSoftShackleStronger = exports.cSoftShackleEdwards = exports.cSoftShackle = exports.cSnellKnot = exports.cSlipKnot = exports.cSlimBeautyKnot = exports.cSlidingDoubleFishermans = exports.cSingleRopeBraid = exports.cSiberianHitch = exports.cShortSplice = exports.cShoelaceBowSurgeon = exports.cShoelaceBowFieggen = exports.cShoelaceBow = exports.cSheetBend = exports.cSheepShank = exports.cSanDiegoJamKnot = exports.cSailmakersWhipping = exports.cRunningBowline = exports.cRoundTurnHitches = exports.cRollingHitch = exports.cRingHitch = exports.cRatTailStopperKnot = exports.cRapalaKnot = exports.cRadiumReleaseHitch = exports.cQuickHitch = exports.cPurcellPrusikKnot = exports.cPrusikKnot = exports.cPrattNecktie = exports.cPoachersKnot = exports.cPileHitch = exports.cPerfectionLoop = exports.cPalomarKnot = exports.cPackageTyingKnot = exports.cOverhandKnot = exports.cOrvisKnot = exports.cOneHandedBowline = exports.cOceanPlaitMat = exports.cNooseKnot = exports.cNonSlipMonoKnot = exports.cNailKnot = exports.cMunterMuleCombo = exports.cMooringsHitch = exports.cMonkeysFistKnot = exports.cMillersKnot = exports.cMidshipmansHitch = exports.cMcdonaldBrummel = exports.cMastheadKnotMat = exports.cMarlinSpikeHitch = exports.cManagerHitch = exports.cLongBurySplice = exports.cLightermansHitch = exports.cLigatureTwoHands = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var w = _interopRequireWildcard(require("./word.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file shape.constants.js
 * @module shape-constants
 * @description Contains named geometric shapes & knots.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * {@link https://en.wikipedia.org/wiki/List_of_mathematical_shapes}
 */
// Basic Shapes
var cline = b.cli + b.cne; // line

exports.cline = cline;
var cLine = b.cLi + b.cne; // Line

exports.cLine = cLine;
var ccircle = p.ccir + p.ccle; // circle

exports.ccircle = ccircle;
var cCircle = p.cCir + p.ccle; // Circle

exports.cCircle = cCircle;
var coval = b.cov + b.cal; // oval

exports.coval = coval;
var cOval = b.cOv + b.cal; // Oval

exports.cOval = cOval;
var csquare = b.cs + p.cquare; // square

exports.csquare = csquare;
var cSquare = b.cS + p.cquare; // Square

exports.cSquare = cSquare;
var ctriangle = p.ctri + w.cangle; // triangle

exports.ctriangle = ctriangle;
var cTriangle = p.cTri + w.cangle; // Triangle

exports.cTriangle = cTriangle;
var crectangle = p.crect + w.cangle; // rectangle

exports.crectangle = crectangle;
var cRectangle = p.cRect + w.cangle; // Rectangle

exports.cRectangle = cRectangle;
var coctagon = p.coct + b.ca + p.cgon; // octagon

exports.coctagon = coctagon;
var cOctagon = p.cOct + b.ca + p.cgon; // Octagon

exports.cOctagon = cOctagon;
var chexagon = p.chex + b.ca + p.cgon; // hexagon

exports.chexagon = chexagon;
var cHexagon = p.cHex + b.ca + p.cgon; // Hexagon

exports.cHexagon = cHexagon;
var cheptagon = p.chep + b.cta + p.cgon; // heptagon

exports.cheptagon = cheptagon;
var cHeptagon = p.cHep + b.cta + p.cgon; // Heptagon

exports.cHeptagon = cHeptagon;
var cnonagon = p.cnon + b.ca + p.cgon; // nonagon

exports.cnonagon = cnonagon;
var cNonagon = p.cNon + b.ca + p.cgon; // Nonagon

exports.cNonagon = cNonagon;
var ctrapezoid = w.ctrap + b.ce + p.czoid; // trapezoid

exports.ctrapezoid = ctrapezoid;
var cTrapezoid = w.cTrap + b.ce + p.czoid; // Trapezoid

exports.cTrapezoid = cTrapezoid;
var ccube = b.ccu + b.cbe; // cube

exports.ccube = ccube;
var cCube = b.cCu + b.cbe; // Cube
// This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes
// Miscellaneous

exports.cCube = cCube;
var ccubic = b.cc + p.cubic; // cubic

exports.ccubic = ccubic;
var cCubic = b.cC + p.cubic; // Cubic

exports.cCubic = cCubic;
var cplane = b.cp + w.clane; // plane

exports.cplane = cplane;
var cPlane = b.cP + w.clane; // Plane

exports.cPlane = cPlane;
var ccurve = b.cc + p.curve; // curve

exports.ccurve = ccurve;
var cCurve = b.cC + p.curve; // Curve

exports.cCurve = cCurve;
var cquartic = p.cqua + p.crtic; // quartic

exports.cquartic = cquartic;
var cQuartic = p.cQua + p.crtic; // Quartic

exports.cQuartic = cQuartic;
var cconic = p.ccon + b.cic; // conic

exports.cconic = cconic;
var cConic = p.cCon + b.cic; // Conic
// Algebraic Curves

exports.cConic = cConic;
var ccubicPlaneCurve = ccubic + cPlane + cCurve; // cubicPlaneCurve

exports.ccubicPlaneCurve = ccubicPlaneCurve;
var cCubicPlaneCurve = cCubic + cPlane + cCurve; // CubicPlaneCurve

exports.cCubicPlaneCurve = cCubicPlaneCurve;
var cquarticPlaneCurve = cquartic + cPlane + cCurve; // quarticPlaneCurve

exports.cquarticPlaneCurve = cquarticPlaneCurve;
var cQuarticPlaneCurve = cQuartic + cPlane + cCurve; // QuarticPlaneCurve
// 2nd Degree Curves

exports.cQuarticPlaneCurve = cQuarticPlaneCurve;
var cconicSection = cconic + w.cSection; // conicSection

exports.cconicSection = cconicSection;
var cConicSection = cConic + w.cSection; // ConicSection

exports.cConicSection = cConicSection;
var cunitCircle = w.cunit + cCircle; // unitCircle

exports.cunitCircle = cunitCircle;
var cUnitCircle = w.cUnit + cCircle; // UnitCircle

exports.cUnitCircle = cUnitCircle;
var cunitHyperbola = w.cunit + p.cHyper + p.cbola; // unitHyperbola

exports.cunitHyperbola = cunitHyperbola;
var cUnitHyperbola = w.cUnit + p.cHyper + p.cbola; // UnitHyperbola
// 3rd Degree Curves

exports.cUnitHyperbola = cUnitHyperbola;
var cFoliumOfDescartes = 'FoliumOfDescartes'; // FoliumOfDescartes

exports.cFoliumOfDescartes = cFoliumOfDescartes;
var cCissoidOfDiocles = 'CissoidOfDiocles'; // CissoidOfDiocles

exports.cCissoidOfDiocles = cCissoidOfDiocles;
var cConchoidOfDeSluze = 'ConchoidOfDeSluze'; // ConchoidOfDeSluze

exports.cConchoidOfDeSluze = cConchoidOfDeSluze;
var cRightStrophoid = 'RightStrophoid'; // RightStrophoid

exports.cRightStrophoid = cRightStrophoid;
var cSemicubicalParabola = 'SemicubicalParabola'; // SemicubicalParabola

exports.cSemicubicalParabola = cSemicubicalParabola;
var cSerpentineCurve = 'SerpentineCurve'; // SerpentineCurve

exports.cSerpentineCurve = cSerpentineCurve;
var cTridentCurve = 'TridentCurve'; // TridentCurve

exports.cTridentCurve = cTridentCurve;
var cTrisectrixOfMaclaurin = 'TrisectrixOfMaclaurin'; // TrisectrixOfMaclaurin

exports.cTrisectrixOfMaclaurin = cTrisectrixOfMaclaurin;
var cTschirnhausenCubic = 'TschirnhausenCubic'; // TschirnhausenCubic

exports.cTschirnhausenCubic = cTschirnhausenCubic;
var cWitchOfAgnesi = 'WitchOfAgnesi'; // WitchOfAgnesi
// 4th Degree Curves

exports.cWitchOfAgnesi = cWitchOfAgnesi;
var cAmpersandCurve = 'AmpersandCurve'; // AmpersandCurve

exports.cAmpersandCurve = cAmpersandCurve;
var cBeanCurve = 'BeanCurve'; // BeanCurve

exports.cBeanCurve = cBeanCurve;
var cBicorn = 'Bicorn'; // Bicorn

exports.cBicorn = cBicorn;
var cBowCurve = 'BowCurve'; // BowCurve

exports.cBowCurve = cBowCurve;
var cBulletNoseCurve = 'BulletNoseCurve'; // BulletNoseCurve

exports.cBulletNoseCurve = cBulletNoseCurve;
var cCruciformCurve = 'CruciformCurve'; // CruciformCurve

exports.cCruciformCurve = cCruciformCurve;
var cDeltoidCurve = 'DeltoidCurve'; // DeltoidCurve

exports.cDeltoidCurve = cDeltoidCurve;
var cDevilsCurve = 'DevilsCurve'; // DevilsCurve

exports.cDevilsCurve = cDevilsCurve;
var cHippopede = 'Hippopede'; // Hippopede

exports.cHippopede = cHippopede;
var cKampyleOfEudoxus = 'KampyleOfEudoxus'; // KampyleOfEudoxus

exports.cKampyleOfEudoxus = cKampyleOfEudoxus;
var cKappaCurve = 'KappaCurve'; // KappaCurve

exports.cKappaCurve = cKappaCurve;
var cLemniscateOfBooth = 'LemniscateOfBooth'; // LemniscateOfBooth

exports.cLemniscateOfBooth = cLemniscateOfBooth;
var cLemniscateOfGerono = 'LemniscateOfGerono'; // LemniscateOfGerono

exports.cLemniscateOfGerono = cLemniscateOfGerono;
var cLemniscateOfBernoulli = 'LemniscateOfBernoulli'; // LemniscateOfBernoulli

exports.cLemniscateOfBernoulli = cLemniscateOfBernoulli;
var cLimacon = 'Limacon'; // Limacon

exports.cLimacon = cLimacon;
var cCardioid = 'Cardioid'; // Cardioid

exports.cCardioid = cCardioid;
var cLimaconTrisectrix = 'LimaconTrisectrix'; // LimaconTrisectrix

exports.cLimaconTrisectrix = cLimaconTrisectrix;
var cTrifoliumCurve = 'TrifoliumCurve'; // TrifoliumCurve
// 5th Degree Curves

exports.cTrifoliumCurve = cTrifoliumCurve;
var cQuinticOfLHospital = 'QuinticOfLHospital'; // QuinticOfLHospital
// 6th Degree Curves

exports.cQuinticOfLHospital = cQuinticOfLHospital;
var cAstroid = 'Astroid'; // Astroid

exports.cAstroid = cAstroid;
var cAtriphtaloid = 'Atriphtaloid'; // Atriphtaloid

exports.cAtriphtaloid = cAtriphtaloid;
var cNephroid = 'Nephroid'; // Nephroid

exports.cNephroid = cNephroid;
var cQuadrifolium = 'Quadrifolium'; // Quadrifolium
// Families of Variable Degree

exports.cQuadrifolium = cQuadrifolium;
var cEpicycloid = 'Epicycloid'; // Epicycloid

exports.cEpicycloid = cEpicycloid;
var cEpispiral = 'Epispiral'; // Epispiral

exports.cEpispiral = cEpispiral;
var cEpitrochoid = 'Epitrochoid'; // Epitrochoid

exports.cEpitrochoid = cEpitrochoid;
var cHypocycloid = 'Hypocycloid'; // Hypocycloid

exports.cHypocycloid = cHypocycloid;
var cLissajousCurve = 'LissajousCurve'; // LissajousCurve

exports.cLissajousCurve = cLissajousCurve;
var cPoinsotsSpirals = 'PoinsotsSpirals'; // PoinsotsSpirals

exports.cPoinsotsSpirals = cPoinsotsSpirals;
var cRationalNormalCurve = 'RationalNormalCurve'; // RationalNormalCurve

exports.cRationalNormalCurve = cRationalNormalCurve;
var cRoseCurve = 'RoseCurve'; // RoseCurve
// Curves of Genus One

exports.cRoseCurve = cRoseCurve;
var cBicuspidCurve = 'BicuspidCurve'; // BicuspidCurve

exports.cBicuspidCurve = cBicuspidCurve;
var cCassiniOval = 'CassiniOval'; // CassiniOval

exports.cCassiniOval = cCassiniOval;
var cCassinoide = 'Cassinoide'; // Cassinoide

exports.cCassinoide = cCassinoide;
var cCubicCurve = 'CubicCurve'; // CubicCurve

exports.cCubicCurve = cCubicCurve;
var cEllipticCurve = 'EllipticCurve'; // EllipticCurve

exports.cEllipticCurve = cEllipticCurve;
var cWattsCurve = 'WattsCurve'; // WattsCurve
// Curves with Genus Greater than One

exports.cWattsCurve = cWattsCurve;
var cButterflyCurve = 'ButterflyCurve'; // ButterflyCurve

exports.cButterflyCurve = cButterflyCurve;
var cElkiesTrinomialCurves = 'ElkiesTrinomialCurves'; // ElkiesTrinomialCurves

exports.cElkiesTrinomialCurves = cElkiesTrinomialCurves;
var cHyperellipticCurve = 'HyperellipticCurve'; // HyperellipticCurve

exports.cHyperellipticCurve = cHyperellipticCurve;
var cKleinQuartic = 'KleinQuartic'; // KleinQuartic

exports.cKleinQuartic = cKleinQuartic;
var cClassicalModularCurve = 'ClassicalModularCurve'; // ClassicalModularCurve

exports.cClassicalModularCurve = cClassicalModularCurve;
var cBolzaSurface = 'BolzaSurface'; // BolzaSurface

exports.cBolzaSurface = cBolzaSurface;
var cMacbeathSurface = 'MacbeathSurface'; // MacbeathSurface
// Curve Families with Variable Genus

exports.cMacbeathSurface = cMacbeathSurface;
var cPolynomialLemniscate = 'PolynomialLemniscate'; // PolynomialLemniscate

exports.cPolynomialLemniscate = cPolynomialLemniscate;
var cFermatCurve = 'FermatCurve'; // FermatCurve

exports.cFermatCurve = cFermatCurve;
var cSinusoidalSpiral = 'SinusoidalSpiral'; // SinusoidalSpiral

exports.cSinusoidalSpiral = cSinusoidalSpiral;
var cSuperellipse = 'Superellipse'; // Superellipse

exports.cSuperellipse = cSuperellipse;
var cHurwitzSurface = 'HurwitzSurface'; // HurwitzSurface
// Transcendental Curves

exports.cHurwitzSurface = cHurwitzSurface;
var cBowditchCurve = 'BowditchCurve'; // BowditchCurve

exports.cBowditchCurve = cBowditchCurve;
var cBrachistochrone = 'Brachistochrone'; // Brachistochrone

exports.cBrachistochrone = cBrachistochrone;
var cCatenary = 'Catenary'; // Catenary

exports.cCatenary = cCatenary;
var cClelies = 'Clelies'; // Clelies

exports.cClelies = cClelies;
var cCochleoid = 'Cochleoid'; // Cochleoid

exports.cCochleoid = cCochleoid;
var cCycloid = 'Cycloid'; // Cycloid

exports.cCycloid = cCycloid;
var cHoropter = 'Horopter'; // Horopter

exports.cHoropter = cHoropter;
var cIsochrone = 'Isochrone'; // Isochrone

exports.cIsochrone = cIsochrone;
var cTautochrone = 'Tautochrone'; // Tautochrone

exports.cTautochrone = cTautochrone;
var cIsochroneOfLeibniz = 'IsochroneOfLeibniz'; // IsochroneOfLeibniz

exports.cIsochroneOfLeibniz = cIsochroneOfLeibniz;
var cIsochroneOfVarignon = 'IsochroneOfVarignon'; // IsochroneOfVarignon

exports.cIsochroneOfVarignon = cIsochroneOfVarignon;
var cLameCurve = 'LameCurve'; // LameCurve

exports.cLameCurve = cLameCurve;
var cPursuitCurve = 'PursuitCurve'; // PursuitCurve

exports.cPursuitCurve = cPursuitCurve;
var cRhumbLine = 'RhumbLine'; // RhumbLine

exports.cRhumbLine = cRhumbLine;
var cSpirals = 'Spirals'; // Spirals

exports.cSpirals = cSpirals;
var cArchimedeanSpiral = 'ArchimedeanSpiral'; // ArchimedeanSpiral

exports.cArchimedeanSpiral = cArchimedeanSpiral;
var cCornuSpiral = 'CornuSpiral'; // CornuSpiral

exports.cCornuSpiral = cCornuSpiral;
var cCotesSpiral = 'CotesSpiral'; // CotesSpiral

exports.cCotesSpiral = cCotesSpiral;
var cFermatsSpiral = 'FermatsSpiral'; // FermatsSpiral

exports.cFermatsSpiral = cFermatsSpiral;
var cGalileosSpiral = 'GalileosSpiral'; // GalileosSpiral

exports.cGalileosSpiral = cGalileosSpiral;
var cHyperbolicSpiral = 'HyperbolicSpiral'; // HyperbolicSpiral

exports.cHyperbolicSpiral = cHyperbolicSpiral;
var cLituus = 'Lituus'; // Lituus

exports.cLituus = cLituus;
var cLogarithmicSpiral = 'LogarithmicSpiral'; // LogarithmicSpiral

exports.cLogarithmicSpiral = cLogarithmicSpiral;
var cNielsensSpiral = 'NielsensSpiral'; // NielsensSpiral

exports.cNielsensSpiral = cNielsensSpiral;
var cSyntractrix = 'Syntractrix'; // Syntractrix

exports.cSyntractrix = cSyntractrix;
var cTractrix = 'Tractrix'; // Tractrix

exports.cTractrix = cTractrix;
var cTrochoid = 'Trochoid'; // Trochoid
// Piecewise Constructions Curves

exports.cTrochoid = cTrochoid;
var cBezierCurve = 'BezierCurve'; // BezierCurve

exports.cBezierCurve = cBezierCurve;
var cSplines = 'Splines'; // Splines

exports.cSplines = cSplines;
var cBSpline = 'BSpline'; // BSpline

exports.cBSpline = cBSpline;
var cNonuniformRationalBSpline = 'NonuniformRationalBSpline'; // NonuniformRationalBSpline

exports.cNonuniformRationalBSpline = cNonuniformRationalBSpline;
var cNURBS = 'NURBS'; // NURBS

exports.cNURBS = cNURBS;
var cOgee = 'Ogee'; // Ogee

exports.cOgee = cOgee;
var cLoessCurve = 'LoessCurve'; // LoessCurve

exports.cLoessCurve = cLoessCurve;
var cLowess = 'Lowess'; // Lowess

exports.cLowess = cLowess;
var cPolygonalCurve = 'PolygonalCurve'; // PolygonalCurve

exports.cPolygonalCurve = cPolygonalCurve;
var cMaurerRose = 'MaurerRose'; // MaurerRose

exports.cMaurerRose = cMaurerRose;
var cReuleauxTriangle = 'ReuleauxTriangle'; // ReuleauxTriangle

exports.cReuleauxTriangle = cReuleauxTriangle;
var cBezierTriangle = 'BezierTriangle'; // BezierTriangle
// Curves Generated by Other Curves

exports.cBezierTriangle = cBezierTriangle;
var cCaustic = 'Caustic'; // Caustic

exports.cCaustic = cCaustic;
var cCatacaustic = 'Catacaustic'; // Catacaustic

exports.cCatacaustic = cCatacaustic;
var cDiacaustic = 'Diacaustic'; // Diacaustic

exports.cDiacaustic = cDiacaustic;
var cCissoid = 'Cissoid'; // Cissoid

exports.cCissoid = cCissoid;
var cConchoid = 'Conchoid'; // Conchoid

exports.cConchoid = cConchoid;
var cEvolute = 'Evolute'; // Evolute

exports.cEvolute = cEvolute;
var cGlissette = 'Glissette'; // Glissette

exports.cGlissette = cGlissette;
var cInverseCurve = 'InverseCurve'; // InverseCurve

exports.cInverseCurve = cInverseCurve;
var cInvolute = 'Involute'; // Involute

exports.cInvolute = cInvolute;
var cIsoptic = 'Isoptic'; // Isoptic

exports.cIsoptic = cIsoptic;
var cOrthoptic = 'Orthoptic'; // Orthoptic

exports.cOrthoptic = cOrthoptic;
var cOrthotomic = 'Orthotomic'; // Orthotomic

exports.cOrthotomic = cOrthotomic;
var cNegativePedalCurve = 'NegativePedalCurve'; // NegativePedalCurve

exports.cNegativePedalCurve = cNegativePedalCurve;
var cPedalCurve = 'PedalCurve'; // PedalCurve

exports.cPedalCurve = cPedalCurve;
var cParallelCurve = 'ParallelCurve'; // ParallelCurve

exports.cParallelCurve = cParallelCurve;
var cRadialCurve = 'RadialCurve'; // RadialCurve

exports.cRadialCurve = cRadialCurve;
var cRoulette = 'Roulette'; // Roulette

exports.cRoulette = cRoulette;
var cStrophoid = 'Strophoid'; // Strophoid
// Space Curves

exports.cStrophoid = cStrophoid;
var cConchospiral = 'Conchospiral'; // Conchospiral

exports.cConchospiral = cConchospiral;
var cHelix = 'Helix'; // Helix

exports.cHelix = cHelix;
var cTendrilPerversion = 'TendrilPerversion'; // TendrilPerversion

exports.cTendrilPerversion = cTendrilPerversion;
var cHemihelix = 'Hemihelix'; // Hemihelix

exports.cHemihelix = cHemihelix;
var cSeiffertsSpiral = 'SeiffertsSpiral'; // SeiffertsSpiral

exports.cSeiffertsSpiral = cSeiffertsSpiral;
var cSlinkySpiral = 'SlinkySpiral'; // SlinkySpiral

exports.cSlinkySpiral = cSlinkySpiral;
var cTwistedCubic = 'TwistedCubic'; // TwistedCubic

exports.cTwistedCubic = cTwistedCubic;
var cVivianisCurve = 'VivianisCurve'; // VivianisCurve
// Surfaces in 3D Space

exports.cVivianisCurve = cVivianisCurve;
var cQuadricSurfaces = 'QuadricSurfaces'; // QuadricSurfaces

exports.cQuadricSurfaces = cQuadricSurfaces;
var cCone = 'Cone'; // Cone

exports.cCone = cCone;
var cCylinder = 'Cylinder'; // Cylinder

exports.cCylinder = cCylinder;
var cEllipsoid = 'Ellipsoid'; // Ellipsoid

exports.cEllipsoid = cEllipsoid;
var cSpheroid = 'Spheroid'; // Spheroid

exports.cSpheroid = cSpheroid;
var cSphere = 'Sphere'; // Sphere

exports.cSphere = cSphere;
var cHyperboloid = 'Hyperboloid'; // Hyperboloid

exports.cHyperboloid = cHyperboloid;
var cParaboloid = 'Paraboloid'; // Paraboloid

exports.cParaboloid = cParaboloid;
var cMobiusStrip = 'MobiusStrip'; // MobiusStrip

exports.cMobiusStrip = cMobiusStrip;
var cTorus = 'Torus'; // Torus
// Minimal Surfaces

exports.cTorus = cTorus;
var cCatalansMinimalSurface = 'CatalansMinimalSurface'; // CatalansMinimalSurface

exports.cCatalansMinimalSurface = cCatalansMinimalSurface;
var cCostasMinimalSurface = 'CostasMinimalSurface'; // CostasMinimalSurface

exports.cCostasMinimalSurface = cCostasMinimalSurface;
var cCatenoid = 'Catenoid'; // Catenoid

exports.cCatenoid = cCatenoid;
var cEnneperSurface = 'EnneperSurface'; // EnneperSurface

exports.cEnneperSurface = cEnneperSurface;
var cGyroid = 'Gyroid'; // Gyroid

exports.cGyroid = cGyroid;
var cHelicoid = 'Helicoid'; // Helicoid

exports.cHelicoid = cHelicoid;
var cLidinoid = 'Lidinoid'; // Lidinoid

exports.cLidinoid = cLidinoid;
var cRiemannsMinimalSurface = 'RiemannsMinimalSurface'; // RiemannsMinimalSurface

exports.cRiemannsMinimalSurface = cRiemannsMinimalSurface;
var cSaddleTower = 'SaddleTower'; // SaddleTower

exports.cSaddleTower = cSaddleTower;
var cScherkSurface = 'ScherkSurface'; // ScherkSurface

exports.cScherkSurface = cScherkSurface;
var cSchwarzMinimalSurface = 'SchwarzMinimalSurface'; // SchwarzMinimalSurface

exports.cSchwarzMinimalSurface = cSchwarzMinimalSurface;
var cTriplyPeriodicMinimalSurface = 'TriplyPeriodicMinimalSurface'; // TriplyPeriodicMinimalSurface
// Non-Orientable Surfaces

exports.cTriplyPeriodicMinimalSurface = cTriplyPeriodicMinimalSurface;
var cKleinBottle = 'KleinBottle'; // KleinBottle

exports.cKleinBottle = cKleinBottle;
var cRealProjectivePlane = 'RealProjectivePlane'; // RealProjectivePlane

exports.cRealProjectivePlane = cRealProjectivePlane;
var cCrossCap = 'CrossCap'; // CrossCap

exports.cCrossCap = cCrossCap;
var cRomanSurface = 'RomanSurface'; // RomanSurface

exports.cRomanSurface = cRomanSurface;
var cBoysSurface = 'BoysSurface'; // BoysSurface
// Quadrics

exports.cBoysSurface = cBoysSurface;
var cOblateSpheroid = 'OblateSpheroid'; // OblateSpheroid

exports.cOblateSpheroid = cOblateSpheroid;
var cHyperboloidOfOneSheet = 'HyperboloidOfOneSheet'; // HyperboloidOfOneSheet

exports.cHyperboloidOfOneSheet = cHyperboloidOfOneSheet;
var cHyperboloidOfTwoSheets = 'HyperboloidOfTwoSheets'; // HyperboloidOfTwoSheets

exports.cHyperboloidOfTwoSheets = cHyperboloidOfTwoSheets;
var cHyperbolicParaboloid = 'HyperbolicParaboloid'; // HyperbolicParaboloid

exports.cHyperbolicParaboloid = cHyperbolicParaboloid;
var cSphericon = 'Sphericon'; // Sphericon

exports.cSphericon = cSphericon;
var cOloid = 'Oloid'; // Oloid
// Pseudospherical Surfaces

exports.cOloid = cOloid;
var cDinisSurface = 'DinisSurface'; // DinisSurface

exports.cDinisSurface = cDinisSurface;
var cPseudosphere = 'Pseudosphere'; // Pseudosphere
// Algebraic Surfaces

exports.cPseudosphere = cPseudosphere;
var cCayleyCubic = 'CayleyCubic'; // CayleyCubic

exports.cCayleyCubic = cCayleyCubic;
var cBarthSextic = 'BarthSextic'; // BarthSextic

exports.cBarthSextic = cBarthSextic;
var cClebschCubic = 'ClebschCubic'; // ClebschCubic

exports.cClebschCubic = cClebschCubic;
var cMonkeySaddle = 'MonkeySaddle'; // MonkeySaddle

exports.cMonkeySaddle = cMonkeySaddle;
var cDupinCyclide = 'DupinCyclide'; // DupinCyclide

exports.cDupinCyclide = cDupinCyclide;
var cWhitneyUmbrella = 'WhitneyUmbrella'; // WhitneyUmbrella
// Miscellaneous Surfaces

exports.cWhitneyUmbrella = cWhitneyUmbrella;
var cRightConoid = 'RightConoid'; // RightConoid
// Fractals

exports.cRightConoid = cRightConoid;
var cApollonianGasket = 'ApollonianGasket'; // ApollonianGasket

exports.cApollonianGasket = cApollonianGasket;
var cApollonianSpherePacking = 'ApollonianSpherePacking'; // ApollonianSpherePacking

exports.cApollonianSpherePacking = cApollonianSpherePacking;
var cBlancmangeCurve = 'BlancmangeCurve'; // BlancmangeCurve

exports.cBlancmangeCurve = cBlancmangeCurve;
var cCantorDust = 'CantorDust'; // CantorDust

exports.cCantorDust = cCantorDust;
var cCantorSet = 'CantorSet'; // CantorSet

exports.cCantorSet = cCantorSet;
var cCantorTesseract = 'CantorTesseract'; // CantorTesseract

exports.cCantorTesseract = cCantorTesseract;
var cCircleInversionFractal = 'CircleInversionFractal'; // CircleInversionFractal

exports.cCircleInversionFractal = cCircleInversionFractal;
var cDeRhamCurve = 'DeRhamCurve'; // DeRhamCurve

exports.cDeRhamCurve = cDeRhamCurve;
var cDouadyRabbit = 'DouadyRabbit'; // DouadyRabbit

exports.cDouadyRabbit = cDouadyRabbit;
var cDragonCurve = 'DragonCurve'; // DragonCurve

exports.cDragonCurve = cDragonCurve;
var cFibonacciWordFractal = 'FibonacciWordFractal'; // FibonacciWordFractal

exports.cFibonacciWordFractal = cFibonacciWordFractal;
var cFlameFractal = 'FlameFractal'; // FlameFractal

exports.cFlameFractal = cFlameFractal;
var cFractalCurve = 'FractalCurve'; // FractalCurve

exports.cFractalCurve = cFractalCurve;
var cGosperCurve = 'GosperCurve'; // GosperCurve

exports.cGosperCurve = cGosperCurve;
var cGosperIsland = 'GosperIsland'; // GosperIsland

exports.cGosperIsland = cGosperIsland;
var cHFractal = 'HFractal'; // HFractal

exports.cHFractal = cHFractal;
var cHenonMap = 'HenonMap'; // HenonMap

exports.cHenonMap = cHenonMap;
var cHexaflake = 'Hexaflake'; // Hexaflake

exports.cHexaflake = cHexaflake;
var cHilbertCurve = 'HilbertCurve'; // HilbertCurve

exports.cHilbertCurve = cHilbertCurve;
var cIkedaMapAttractor = 'IkedaMapAttractor'; // IkedaMapAttractor

exports.cIkedaMapAttractor = cIkedaMapAttractor;
var cIteratedFunctionSystem = 'IteratedFunctionSystem'; // IteratedFunctionSystem

exports.cIteratedFunctionSystem = cIteratedFunctionSystem;
var cJerusalemCube = 'JerusalemCube'; // JerusalemCube

exports.cJerusalemCube = cJerusalemCube;
var cJuliaSet = 'JuliaSet'; // JuliaSet

exports.cJuliaSet = cJuliaSet;
var cKochCurve = 'KochCurve'; // KochCurve

exports.cKochCurve = cKochCurve;
var cKochSnowflake = 'KochSnowflake'; // KochSnowflake

exports.cKochSnowflake = cKochSnowflake;
var cLSystem = 'LSystem'; // LSystem

exports.cLSystem = cLSystem;
var cLevyCCurve = 'LevyCCurve'; // LevyCCurve

exports.cLevyCCurve = cLevyCCurve;
var cFeigenbaumAttractor = 'FeigenbaumAttractor'; // FeigenbaumAttractor

exports.cFeigenbaumAttractor = cFeigenbaumAttractor;
var cLorenzAttractor = 'LorenzAttractor'; // LorenzAttractor

exports.cLorenzAttractor = cLorenzAttractor;
var cLyapunovFractal = 'LyapunovFractal'; // LyapunovFractal

exports.cLyapunovFractal = cLyapunovFractal;
var cMandelbrotSet = 'MandelbrotSet'; // MandelbrotSet

exports.cMandelbrotSet = cMandelbrotSet;
var cMandelbrotTree = 'MandelbrotTree'; // MandelbrotTree

exports.cMandelbrotTree = cMandelbrotTree;
var cMandelbulb = 'Mandelbulb'; // Mandelbulb

exports.cMandelbulb = cMandelbulb;
var cMengerSponge = 'MengerSponge'; // MengerSponge

exports.cMengerSponge = cMengerSponge;
var cMonkeysTree = 'MonkeysTree'; // MonkeysTree

exports.cMonkeysTree = cMonkeysTree;
var cMooreCurve = 'MooreCurve'; // MooreCurve

exports.cMooreCurve = cMooreCurve;
var cNFlake = 'NFlake'; // NFlake

exports.cNFlake = cNFlake;
var cPascalTriangle = 'PascalTriangle'; // PascalTriangle

exports.cPascalTriangle = cPascalTriangle;
var cPeanoCurve = 'PeanoCurve'; // PeanoCurve

exports.cPeanoCurve = cPeanoCurve;
var cPenroseTiling = 'PenroseTiling'; // PenroseTiling

exports.cPenroseTiling = cPenroseTiling;
var cPinwheelTiling = 'PinwheelTiling'; // PinwheelTiling

exports.cPinwheelTiling = cPinwheelTiling;
var cPythagorasTree = 'PythagorasTree'; // PythagorasTree

exports.cPythagorasTree = cPythagorasTree;
var cRauzyFractal = 'RauzyFractal'; // RauzyFractal

exports.cRauzyFractal = cRauzyFractal;
var cRosslerAttractor = 'RosslerAttractor'; // RosslerAttractor

exports.cRosslerAttractor = cRosslerAttractor;
var cSierpinskiArrowheadCurve = 'SierpinskiArrowheadCurve'; // SierpinskiArrowheadCurve

exports.cSierpinskiArrowheadCurve = cSierpinskiArrowheadCurve;
var cSierpinskiCarpet = 'SierpinskiCarpet'; // SierpinskiCarpet

exports.cSierpinskiCarpet = cSierpinskiCarpet;
var cSierpinskiCurve = 'SierpinskiCurve'; // SierpinskiCurve

exports.cSierpinskiCurve = cSierpinskiCurve;
var cSierpinskiTriangle = 'SierpinskiTriangle'; // SierpinskiTriangle

exports.cSierpinskiTriangle = cSierpinskiTriangle;
var cSmithVolterraCantorSet = 'SmithVolterraCantorSet'; // SmithVolterraCantorSet

exports.cSmithVolterraCantorSet = cSmithVolterraCantorSet;
var cTSquare = 'TSquare'; // TSquare

exports.cTSquare = cTSquare;
var cTakagiCurve = 'TakagiCurve'; // TakagiCurve

exports.cTakagiCurve = cTakagiCurve;
var cTriflake = 'Triflake'; // Triflake

exports.cTriflake = cTriflake;
var cVicsekFractal = 'VicsekFractal'; // VicsekFractal

exports.cVicsekFractal = cVicsekFractal;
var cVonKochCurve = 'VonKochCurve'; // VonKochCurve

exports.cVonKochCurve = cVonKochCurve;
var cWeierstrassFunction = 'WeierstrassFunction'; // WeierstrassFunction

exports.cWeierstrassFunction = cWeierstrassFunction;
var cZOrderCurve = 'ZOrderCurve'; // ZOrderCurve
// Random Fractals

exports.cZOrderCurve = cZOrderCurve;
var cVonKochCurveWithRandomInterval = 'VonKochCurveWithRandomInterval'; // VonKochCurveWithRandomInterval

exports.cVonKochCurveWithRandomInterval = cVonKochCurveWithRandomInterval;
var cVonKochCurveWithRandomOrientation = 'VonKochCurveWithRandomOrientation'; // VonKochCurveWithRandomOrientation

exports.cVonKochCurveWithRandomOrientation = cVonKochCurveWithRandomOrientation;
var cBoundaryOfBrownianMotion = 'BoundaryOfBrownianMotion'; // BoundaryOfBrownianMotion

exports.cBoundaryOfBrownianMotion = cBoundaryOfBrownianMotion;
var c2DPolymer = '2DPolymer'; // 2DPolymer

exports.c2DPolymer = c2DPolymer;
var cPercolationFrontIn2D = 'PercolationFrontIn2D'; // PercolationFrontIn2D

exports.cPercolationFrontIn2D = cPercolationFrontIn2D;
var cCorrosionFrontIn2D = 'CorrosionFrontIn2D'; // CorrosionFrontIn2D

exports.cCorrosionFrontIn2D = cCorrosionFrontIn2D;
var cDiffusionLimitedAggregation = 'DiffusionLimitedAggregation'; // DiffusionLimitedAggregation

exports.cDiffusionLimitedAggregation = cDiffusionLimitedAggregation;
var cRandomWalkWithNoSelfIntersection = 'RandomWalkWithNoSelfIntersection'; // RandomWalkWithNoSelfIntersection

exports.cRandomWalkWithNoSelfIntersection = cRandomWalkWithNoSelfIntersection;
var c3DPolymer = '3DPolymer'; // 3DPolymer

exports.c3DPolymer = c3DPolymer;
var c2DPercolationClusterHull = '2DPercolationClusterHull'; // 2DPercolationClusterHull

exports.c2DPercolationClusterHull = c2DPercolationClusterHull;
var c2DPercolationCluster = '2DPercolationCluster'; // 2DPercolationCluster

exports.c2DPercolationCluster = c2DPercolationCluster;
var cBrownianMotion = 'BrownianMotion'; // BrownianMotion

exports.cBrownianMotion = cBrownianMotion;
var cLichtenbergFigure = 'LichtenbergFigure'; // LichtenbergFigure

exports.cLichtenbergFigure = cLichtenbergFigure;
var cPercolationTheory = 'PercolationTheory'; // PercolationTheory

exports.cPercolationTheory = cPercolationTheory;
var cMultiplicativeCascade = 'MultiplicativeCascade'; // MultiplicativeCascade
// 2D Regular Polytopes

exports.cMultiplicativeCascade = cMultiplicativeCascade;
var cPolygon = 'Polygon'; // Polygon

exports.cPolygon = cPolygon;
var cEquilateral = 'Equilateral'; // Equilateral

exports.cEquilateral = cEquilateral;
var cCyclicPolygon = 'CyclicPolygon'; // CyclicPolygon

exports.cCyclicPolygon = cCyclicPolygon;
var cConvexPolygon = 'ConvexPolygon'; // ConvexPolygon

exports.cConvexPolygon = cConvexPolygon;
var cStarPolygon = 'StarPolygon'; // StarPolygon

exports.cStarPolygon = cStarPolygon;
var cPentagram = 'Pentagram'; // Pentagram
// 2D Convex Polytopes

exports.cPentagram = cPentagram;
var cRegularPolygon = 'RegularPolygon'; // RegularPolygon

exports.cRegularPolygon = cRegularPolygon;
var cEquilateralTriangle = 'EquilateralTriangle'; // EquilateralTriangle

exports.cEquilateralTriangle = cEquilateralTriangle;
var cSimplex = 'Simplex'; // Simplex

exports.cSimplex = cSimplex;
var cCrossPolytope = 'CrossPolytope'; // CrossPolytope

exports.cCrossPolytope = cCrossPolytope;
var cHypercube = 'Hypercube'; // Hypercube

exports.cHypercube = cHypercube;
var cPentagon = 'Pentagon'; // Pentagon

exports.cPentagon = cPentagon;
var cEnneagon = 'Enneagon'; // Enneagon

exports.cEnneagon = cEnneagon;
var cDecagon = 'Decagon'; // Decagon

exports.cDecagon = cDecagon;
var cHendecagon = 'Hendecagon'; // Hendecagon

exports.cHendecagon = cHendecagon;
var cDodecagon = 'Dodecagon'; // Dodecagon

exports.cDodecagon = cDodecagon;
var cTridecagon = 'Tridecagon'; // Tridecagon

exports.cTridecagon = cTridecagon;
var cTetradecagon = 'Tetradecagon'; // Tetradecagon

exports.cTetradecagon = cTetradecagon;
var cPentadecagon = 'Pentadecagon'; // Pentadecagon

exports.cPentadecagon = cPentadecagon;
var cHexadecagon = 'Hexadecagon'; // Hexadecagon

exports.cHexadecagon = cHexadecagon;
var cHeptadecagon = 'Heptadecagon'; // Heptadecagon

exports.cHeptadecagon = cHeptadecagon;
var cOctadecagon = 'Octadecagon'; // Octadecagon

exports.cOctadecagon = cOctadecagon;
var cEnneadecagon = 'Enneadecagon'; // Enneadecagon

exports.cEnneadecagon = cEnneadecagon;
var cIcosagon = 'Icosagon'; // Icosagon

exports.cIcosagon = cIcosagon;
var cHectogon = 'Hectogon'; // Hectogon

exports.cHectogon = cHectogon;
var cChiliagon = 'Chiliagon'; // Chiliagon
// 2D Degenerate Spherical Polytopes

exports.cChiliagon = cChiliagon;
var cMonogon = 'Monogon'; // Monogon

exports.cMonogon = cMonogon;
var cDigon = 'Digon'; // Digon
// 2D Non-Convex Polytopes

exports.cDigon = cDigon;
var cHeptagram = 'Heptagram'; // Heptagram

exports.cHeptagram = cHeptagram;
var cOctagram = 'Octagram'; // Octagram

exports.cOctagram = cOctagram;
var cEnneagram = 'Enneagram'; // Enneagram

exports.cEnneagram = cEnneagram;
var cDecagram = 'Decagram'; // Decagram
// 2D Tessellation Polytopes

exports.cDecagram = cDecagram;
var cApeirogon = 'Apeirogon'; // Apeirogon
// 3D Regular Polytopes

exports.cApeirogon = cApeirogon;
var cPolyhedron = 'Polyhedron'; // Polyhedron
// 3D Convex Polytopes

exports.cPolyhedron = cPolyhedron;
var cPlatonicSolid = 'PlatonicSolid'; // PlatonicSolid

exports.cPlatonicSolid = cPlatonicSolid;
var cTetrahedron = 'Tetrahedron'; // Tetrahedron

exports.cTetrahedron = cTetrahedron;
var cOctahedron = 'Octahedron'; // Octahedron

exports.cOctahedron = cOctahedron;
var cDodecahedron = 'Dodecahedron'; // Dodecahedron

exports.cDodecahedron = cDodecahedron;
var cIcosahedron = 'Icosahedron'; // Icosahedron
// 3D Degenerate Spherical Polytopes

exports.cIcosahedron = cIcosahedron;
var cHosohedron = 'Hosohedron'; // Hosohedron

exports.cHosohedron = cHosohedron;
var cDihedron = 'Dihedron'; // Dihedron

exports.cDihedron = cDihedron;
var cHenagon = 'Henagon'; // Henagon
// 3D Non-Convex Polytopes

exports.cHenagon = cHenagon;
var cKeplerPoinsotPolyhedra = 'KeplerPoinsotPolyhedra'; // KeplerPoinsotPolyhedra

exports.cKeplerPoinsotPolyhedra = cKeplerPoinsotPolyhedra;
var cSmallStellatedDodecahedron = 'SmallStellatedDodecahedron'; // SmallStellatedDodecahedron

exports.cSmallStellatedDodecahedron = cSmallStellatedDodecahedron;
var cGreatDodecahedron = 'GreatDodecahedron'; // GreatDodecahedron

exports.cGreatDodecahedron = cGreatDodecahedron;
var cGreatStellatedDodecahedron = 'GreatStellatedDodecahedron'; // GreatStellatedDodecahedron

exports.cGreatStellatedDodecahedron = cGreatStellatedDodecahedron;
var cGreatIcosahedron = 'GreatIcosahedron'; // GreatIcosahedron
// Euclidean Tilings

exports.cGreatIcosahedron = cGreatIcosahedron;
var cSquareTiling = 'SquareTiling'; // SquareTiling

exports.cSquareTiling = cSquareTiling;
var cGrid = 'Grid'; // Grid

exports.cGrid = cGrid;
var cTriangularTiling = 'TriangularTiling'; // TriangularTiling

exports.cTriangularTiling = cTriangularTiling;
var cHexagonalTiling = 'HexagonalTiling'; // HexagonalTiling
// Hyperbolic Tilings

exports.cHexagonalTiling = cHexagonalTiling;
var cLobachevskiPlane = 'LobachevskiPlane'; // LobachevskiPlane

exports.cLobachevskiPlane = cLobachevskiPlane;
var cHyperbolicTiling = 'HyperbolicTiling'; // HyperbolicTiling
// Hyperbolic Star-Tilings

exports.cHyperbolicTiling = cHyperbolicTiling;
var cOrder7HeptagrammicTiling = 'Order7HeptagrammicTiling'; // Order7HeptagrammicTiling

exports.cOrder7HeptagrammicTiling = cOrder7HeptagrammicTiling;
var cHeptagrammicOrderHeptagonalTiling = 'HeptagrammicOrderHeptagonalTiling'; // HeptagrammicOrderHeptagonalTiling

exports.cHeptagrammicOrderHeptagonalTiling = cHeptagrammicOrderHeptagonalTiling;
var cOrder9EnneagrammicTiling = 'Order9EnneagrammicTiling'; // Order9EnneagrammicTiling

exports.cOrder9EnneagrammicTiling = cOrder9EnneagrammicTiling;
var cEnneagrammicOrderEnneagonalTiling = 'EnneagrammicOrderEnneagonalTiling'; // EnneagrammicOrderEnneagonalTiling
// 4D Regular Polytopes

exports.cEnneagrammicOrderEnneagonalTiling = cEnneagrammicOrderEnneagonalTiling;
var c4DSpaceSimplex = '4DSpaceSimplex'; // 4DSpaceSimplex

exports.c4DSpaceSimplex = c4DSpaceSimplex;
var c4DHypercube = '4DHypercube'; // 4DHypercube

exports.c4DHypercube = c4DHypercube;
var c4DCrossPolytope = '4DCrossPolytope'; // 4DCrossPolytope

exports.c4DCrossPolytope = c4DCrossPolytope;
var c24Cell = '24Cell'; // 24Cell

exports.c24Cell = c24Cell;
var c120Cell = '120Cell'; // 120Cell

exports.c120Cell = c120Cell;
var c600Cell = '600Cell'; // 600Cell
// 4D Degenerate Spherical Polytopes

exports.c600Cell = c600Cell;
var cDitope = 'Ditope'; // Ditope

exports.cDitope = cDitope;
var cHosotope = 'Hosotope'; // Hosotope

exports.cHosotope = cHosotope;
var c3Sphere = '3Sphere'; // 3Sphere

exports.c3Sphere = c3Sphere;
var cHyperSphere = 'HyperSphere'; // HyperSphere
// 4D Non-Convex Polytopes

exports.cHyperSphere = cHyperSphere;
var cIcosahedral120Cell = 'Icosahedral120Cell'; // Icosahedral120Cell

exports.cIcosahedral120Cell = cIcosahedral120Cell;
var cSmallStellated120Cell = 'SmallStellated120Cell'; // SmallStellated120Cell

exports.cSmallStellated120Cell = cSmallStellated120Cell;
var cGreat120Cell = 'Great120Cell'; // Great120Cell

exports.cGreat120Cell = cGreat120Cell;
var cGrand120Cell = 'Grand120Cell'; // Grand120Cell

exports.cGrand120Cell = cGrand120Cell;
var cGreatStellated120Cell = 'GreatStellated120Cell'; // GreatStellated120Cell

exports.cGreatStellated120Cell = cGreatStellated120Cell;
var cGrandStellated120Cell = 'GrandStellated120Cell'; // GrandStellated120Cell

exports.cGrandStellated120Cell = cGrandStellated120Cell;
var cGreatGrand120Cell = 'GreatGrand120Cell'; // GreatGrand120Cell

exports.cGreatGrand120Cell = cGreatGrand120Cell;
var cGreatIcosahedral120Cell = 'GreatIcosahedral120Cell'; // GreatIcosahedral120Cell

exports.cGreatIcosahedral120Cell = cGreatIcosahedral120Cell;
var cGrand600Cell = 'Grand600Cell'; // Grand600Cell

exports.cGrand600Cell = cGrand600Cell;
var cGreatGrandStellated120Cell = 'GreatGrandStellated120Cell'; // GreatGrandStellated120Cell
// Tessellations of Euclidean 3D

exports.cGreatGrandStellated120Cell = cGreatGrandStellated120Cell;
var cHoneycomb = 'Honeycomb'; // Honeycomb

exports.cHoneycomb = cHoneycomb;
var cCubicHoneycomb = 'CubicHoneycomb'; // CubicHoneycomb
// Degenerate tessellations of Euclidean 3D

exports.cCubicHoneycomb = cCubicHoneycomb;
var cOrder2ApeirogonalTiling = 'Order2ApeirogonalTiling'; // Order2ApeirogonalTiling

exports.cOrder2ApeirogonalTiling = cOrder2ApeirogonalTiling;
var cApeirogonalHosohedron = 'ApeirogonalHosohedron'; // ApeirogonalHosohedron

exports.cApeirogonalHosohedron = cApeirogonalHosohedron;
var cOrder4SquareHosohedralHoneycomb = 'Order4SquareHosohedralHoneycomb'; // Order4SquareHosohedralHoneycomb

exports.cOrder4SquareHosohedralHoneycomb = cOrder4SquareHosohedralHoneycomb;
var cOrder6TriangularHosohedralHoneycomb = 'Order6TriangularHosohedralHoneycomb'; // Order6TriangularHosohedralHoneycomb

exports.cOrder6TriangularHosohedralHoneycomb = cOrder6TriangularHosohedralHoneycomb;
var cHexagonalHosohedralHoneycomb = 'HexagonalHosohedralHoneycomb'; // HexagonalHosohedralHoneycomb

exports.cHexagonalHosohedralHoneycomb = cHexagonalHosohedralHoneycomb;
var cOrder2SquareTilingHoneycomb = 'Order2SquareTilingHoneycomb'; // Order2SquareTilingHoneycomb

exports.cOrder2SquareTilingHoneycomb = cOrder2SquareTilingHoneycomb;
var cOrder2TriangularTilingHoneycomb = 'Order2TriangularTilingHoneycomb'; // Order2TriangularTilingHoneycomb

exports.cOrder2TriangularTilingHoneycomb = cOrder2TriangularTilingHoneycomb;
var cOrder2HexagonalTilingHoneycomb = 'Order2HexagonalTilingHoneycomb'; // Order2HexagonalTilingHoneycomb
// Tessellations of Hyperbolic 3D

exports.cOrder2HexagonalTilingHoneycomb = cOrder2HexagonalTilingHoneycomb;
var cOrder4DodecahedralHoneycomb = 'Order4DodecahedralHoneycomb'; // Order4DodecahedralHoneycomb

exports.cOrder4DodecahedralHoneycomb = cOrder4DodecahedralHoneycomb;
var cOrder5DodecahedralHoneycomb = 'Order5DodecahedralHoneycomb'; // Order5DodecahedralHoneycomb

exports.cOrder5DodecahedralHoneycomb = cOrder5DodecahedralHoneycomb;
var cOrder5CubicHoneycomb = 'Order5CubicHoneycomb'; // Order5CubicHoneycomb

exports.cOrder5CubicHoneycomb = cOrder5CubicHoneycomb;
var cIcosahedralHoneycomb = 'IcosahedralHoneycomb'; // IcosahedralHoneycomb

exports.cIcosahedralHoneycomb = cIcosahedralHoneycomb;
var cOrder3IcosahedralHoneycomb = 'Order3IcosahedralHoneycomb'; // Order3IcosahedralHoneycomb

exports.cOrder3IcosahedralHoneycomb = cOrder3IcosahedralHoneycomb;
var cOrder4OctahedralHoneycomb = 'Order4OctahedralHoneycomb'; // Order4OctahedralHoneycomb

exports.cOrder4OctahedralHoneycomb = cOrder4OctahedralHoneycomb;
var cTriangularTilingHoneycomb = 'TriangularTilingHoneycomb'; // TriangularTilingHoneycomb

exports.cTriangularTilingHoneycomb = cTriangularTilingHoneycomb;
var cSquareTilingHoneycomb = 'SquareTilingHoneycomb'; // SquareTilingHoneycomb

exports.cSquareTilingHoneycomb = cSquareTilingHoneycomb;
var cOrder4SquareTilingHoneycomb = 'Order4SquareTilingHoneycomb'; // Order4SquareTilingHoneycomb

exports.cOrder4SquareTilingHoneycomb = cOrder4SquareTilingHoneycomb;
var cOrder6TetrahedralHoneycomb = 'Order6TetrahedralHoneycomb'; // Order6TetrahedralHoneycomb

exports.cOrder6TetrahedralHoneycomb = cOrder6TetrahedralHoneycomb;
var cOrder6CubicHoneycomb = 'Order6CubicHoneycomb'; // Order6CubicHoneycomb

exports.cOrder6CubicHoneycomb = cOrder6CubicHoneycomb;
var cOrder6DodecahedralHoneycomb = 'Order6DodecahedralHoneycomb'; // Order6DodecahedralHoneycomb

exports.cOrder6DodecahedralHoneycomb = cOrder6DodecahedralHoneycomb;
var cHexagonalTilingHoneycomb = 'HexagonalTilingHoneycomb'; // HexagonalTilingHoneycomb

exports.cHexagonalTilingHoneycomb = cHexagonalTilingHoneycomb;
var cOrder4HexagonalTilingHoneycomb = 'Order4HexagonalTilingHoneycomb'; // Order4HexagonalTilingHoneycomb

exports.cOrder4HexagonalTilingHoneycomb = cOrder4HexagonalTilingHoneycomb;
var cOrder5HexagonalTilingHoneycomb = 'Order5HexagonalTilingHoneycomb'; // Order5HexagonalTilingHoneycomb

exports.cOrder5HexagonalTilingHoneycomb = cOrder5HexagonalTilingHoneycomb;
var cOrder6HexagonalTilingHoneycomb = 'Order6HexagonalTilingHoneycomb'; // Order6HexagonalTilingHoneycomb
// 5D Regular Polytopes and Higher

exports.cOrder6HexagonalTilingHoneycomb = cOrder6HexagonalTilingHoneycomb;
var c5Polytope = '5Polytope'; // 5Polytope

exports.c5Polytope = c5Polytope;
var cTetracomb = 'Tetracomb'; // Tetracomb

exports.cTetracomb = cTetracomb;
var cSimplexHypercubeCrossPolytope = 'SimplexHypercubeCrossPolytope'; // SimplexHypercubeCrossPolytope

exports.cSimplexHypercubeCrossPolytope = cSimplexHypercubeCrossPolytope;
var c5Simplex = '5Simplex'; // 5Simplex

exports.c5Simplex = c5Simplex;
var c5Cube = '5Cube'; // 5Cube

exports.c5Cube = c5Cube;
var c5Orthoplex = '5Orthoplex'; // 5Orthoplex

exports.c5Orthoplex = c5Orthoplex;
var c6Simplex = '6Simplex'; // 6Simplex

exports.c6Simplex = c6Simplex;
var c6Cube = '6Cube'; // 6Cube

exports.c6Cube = c6Cube;
var c6Orthoplex = '6Orthoplex'; // 6Orthoplex

exports.c6Orthoplex = c6Orthoplex;
var c7Simplex = '7Simplex'; // 7Simplex

exports.c7Simplex = c7Simplex;
var c7Cube = '7Cube'; // 7Cube

exports.c7Cube = c7Cube;
var c7Orthoplex = '7Orthoplex'; // 7Orthoplex

exports.c7Orthoplex = c7Orthoplex;
var c8Simplex = '8Simplex'; // 8Simplex

exports.c8Simplex = c8Simplex;
var c8Cube = '8Cube'; // 8Cube

exports.c8Cube = c8Cube;
var c8Orthoplex = '8Orthoplex'; // 8Orthoplex

exports.c8Orthoplex = c8Orthoplex;
var c9Simplex = '9Simplex'; // 9Simplex

exports.c9Simplex = c9Simplex;
var c9Cube = '9Cube'; // 9Cube

exports.c9Cube = c9Cube;
var c9Orthoplex = '9Orthoplex'; // 9Orthoplex

exports.c9Orthoplex = c9Orthoplex;
var c10Simplex = '10Simplex'; // 10Simplex

exports.c10Simplex = c10Simplex;
var c10Cube = '10Cube'; // 10Cube

exports.c10Cube = c10Cube;
var c10Orthoplex = '10Orthoplex'; // 10Orthoplex

exports.c10Orthoplex = c10Orthoplex;
var c11Simplex = '11Simplex'; // 11Simplex

exports.c11Simplex = c11Simplex;
var c11Cube = '11Cube'; // 11Cube

exports.c11Cube = c11Cube;
var c11Orthoplex = '11Orthoplex'; // 11Orthoplex
// Tessellations of Euclidean 4D

exports.c11Orthoplex = c11Orthoplex;
var cHoneycombs = 'Honeycombs'; // Honeycombs

exports.cHoneycombs = cHoneycombs;
var cTesseracticHoneycomb = 'TesseracticHoneycomb'; // TesseracticHoneycomb

exports.cTesseracticHoneycomb = cTesseracticHoneycomb;
var c16CellHoneycomb = '16CellHoneycomb'; // 16CellHoneycomb

exports.c16CellHoneycomb = c16CellHoneycomb;
var c24CellHoneycomb = '24CellHoneycomb'; // 24CellHoneycomb
// Tessellations of Euclidean 5D and Higher

exports.c24CellHoneycomb = c24CellHoneycomb;
var cHypercubicHoneycomb = 'HypercubicHoneycomb'; // HypercubicHoneycomb

exports.cHypercubicHoneycomb = cHypercubicHoneycomb;
var c5CubeHoneycomb = '5CubeHoneycomb'; // 5CubeHoneycomb

exports.c5CubeHoneycomb = c5CubeHoneycomb;
var c6CubeHoneycomb = '6CubeHoneycomb'; // 6CubeHoneycomb

exports.c6CubeHoneycomb = c6CubeHoneycomb;
var c7CubeHoneycomb = '7CubeHoneycomb'; // 7CubeHoneycomb

exports.c7CubeHoneycomb = c7CubeHoneycomb;
var c8CubeHoneycomb = '8CubeHoneycomb'; // 8CubeHoneycomb
// Tessellations of Hyperbolic 4D

exports.c8CubeHoneycomb = c8CubeHoneycomb;
var cOrder5_5CellHoneycomb = 'Order5_5CellHoneycomb'; // Order5_5CellHoneycomb

exports.cOrder5_5CellHoneycomb = cOrder5_5CellHoneycomb;
var c120CellHoneycomb = '120CellHoneycomb'; // 120CellHoneycomb

exports.c120CellHoneycomb = c120CellHoneycomb;
var cOrder5TesseracticHoneycomb = 'Order5TesseracticHoneycomb'; // Order5TesseracticHoneycomb

exports.cOrder5TesseracticHoneycomb = cOrder5TesseracticHoneycomb;
var cOrder4_120CellHoneycomb = 'Order4_120CellHoneycomb'; // Order4_120CellHoneycomb

exports.cOrder4_120CellHoneycomb = cOrder4_120CellHoneycomb;
var cOrder5_120CellHoneycomb = 'Order5_120CellHoneycomb'; // Order5_120CellHoneycomb

exports.cOrder5_120CellHoneycomb = cOrder5_120CellHoneycomb;
var cOrder4_24CellHoneycomb = 'Order4_24CellHoneycomb'; // Order4_24CellHoneycomb

exports.cOrder4_24CellHoneycomb = cOrder4_24CellHoneycomb;
var cSmallStellated120CellHoneycomb = 'SmallStellated120CellHoneycomb'; // SmallStellated120CellHoneycomb

exports.cSmallStellated120CellHoneycomb = cSmallStellated120CellHoneycomb;
var cPentagrammicOrder600CellHoneycomb = 'PentagrammicOrder600CellHoneycomb'; // PentagrammicOrder600CellHoneycomb

exports.cPentagrammicOrder600CellHoneycomb = cPentagrammicOrder600CellHoneycomb;
var cOrder5Icosahedral120CellHoneycomb = 'Order5Icosahedral120CellHoneycomb'; // Order5Icosahedral120CellHoneycomb

exports.cOrder5Icosahedral120CellHoneycomb = cOrder5Icosahedral120CellHoneycomb;
var cGreat120CellHoneycomb = 'Great120CellHoneycomb'; // Great120CellHoneycomb
// Tessellations of Hyperbolic 5D

exports.cGreat120CellHoneycomb = cGreat120CellHoneycomb;
var c5OrthoplexHoneycomb = '5OrthoplexHoneycomb'; // 5OrthoplexHoneycomb

exports.c5OrthoplexHoneycomb = c5OrthoplexHoneycomb;
var c24CellHoneycombHoneycomb = '24CellHoneycombHoneycomb'; // 24CellHoneycombHoneycomb

exports.c24CellHoneycombHoneycomb = c24CellHoneycombHoneycomb;
var c16CellHoneycombHoneycomb = '16CellHoneycombHoneycomb'; // 16CellHoneycombHoneycomb
// Apeirotopes

exports.c16CellHoneycombHoneycomb = c16CellHoneycombHoneycomb;
var cApeirotope = 'Apeirotope'; // Apeirotope

exports.cApeirotope = cApeirotope;
var cApeirohedron = 'Apeirohedron'; // Apeirohedron

exports.cApeirohedron = cApeirohedron;
var cRegularSkewPolyhedron = 'RegularSkewPolyhedron'; // RegularSkewPolyhedron
// Abstract Polytopes

exports.cRegularSkewPolyhedron = cRegularSkewPolyhedron;
var cAbstractPolytope = 'AbstractPolytope'; // AbstractPolytope

exports.cAbstractPolytope = cAbstractPolytope;
var c11Cell = '11Cell'; // 11Cell

exports.c11Cell = c11Cell;
var c57Cell = '57Cell'; // 57Cell
// 2D with 1D Surface

exports.c57Cell = c57Cell;
var cConcavePolygon = 'ConcavePolygon'; // ConcavePolygon

exports.cConcavePolygon = cConcavePolygon;
var cConstructiblePolygon = 'ConstructiblePolygon'; // ConstructiblePolygon

exports.cConstructiblePolygon = cConstructiblePolygon;
var cEquiangularPolygon = 'EquiangularPolygon'; // EquiangularPolygon

exports.cEquiangularPolygon = cEquiangularPolygon;
var cEquilateralPolygon = 'EquilateralPolygon'; // EquilateralPolygon

exports.cEquilateralPolygon = cEquilateralPolygon;
var cPenroseTile = 'PenroseTile'; // PenroseTile

exports.cPenroseTile = cPenroseTile;
var cPolyform = 'Polyform'; // Polyform

exports.cPolyform = cPolyform;
var cBalbis = 'Balbis'; // Balbis

exports.cBalbis = cBalbis;
var cGnomon = 'Gnomon'; // Gnomon

exports.cGnomon = cGnomon;
var cGolygon = 'Golygon'; // Golygon

exports.cGolygon = cGolygon;
var cStar = 'Star'; // Star

exports.cStar = cStar;
var cHexagram = 'Hexagram'; // Hexagram

exports.cHexagram = cHexagram;
var cStarOfDavid = 'StarOfDavid'; // StarOfDavid

exports.cStarOfDavid = cStarOfDavid;
var cStarOfLakshmi = 'StarOfLakshmi'; // StarOfLakshmi
// Polygons named for their number of sides

exports.cStarOfLakshmi = cStarOfLakshmi;
var cAcuteTriangle = 'AcuteTriangle'; // AcuteTriangle

exports.cAcuteTriangle = cAcuteTriangle;
var cIsoscelesTriangle = 'IsoscelesTriangle'; // IsoscelesTriangle

exports.cIsoscelesTriangle = cIsoscelesTriangle;
var cObtuseTriangle = 'ObtuseTriangle'; // ObtuseTriangle

exports.cObtuseTriangle = cObtuseTriangle;
var cRationalTriangle = 'RationalTriangle'; // RationalTriangle

exports.cRationalTriangle = cRationalTriangle;
var cRightTriangle = 'RightTriangle'; // RightTriangle

exports.cRightTriangle = cRightTriangle;
var c30_60_90Triangle = '30_60_90Triangle'; // 30_60_90Triangle

exports.c30_60_90Triangle = c30_60_90Triangle;
var cIsoscelesRightTriangle = 'IsoscelesRightTriangle'; // IsoscelesRightTriangle

exports.cIsoscelesRightTriangle = cIsoscelesRightTriangle;
var cKeplerTriangle = 'KeplerTriangle'; // KeplerTriangle

exports.cKeplerTriangle = cKeplerTriangle;
var cScaleneTriangle = 'ScaleneTriangle'; // ScaleneTriangle

exports.cScaleneTriangle = cScaleneTriangle;
var cQuadrilateral = 'Quadrilateral'; // Quadrilateral

exports.cQuadrilateral = cQuadrilateral;
var cCyclicQuadrilateral = 'CyclicQuadrilateral'; // CyclicQuadrilateral

exports.cCyclicQuadrilateral = cCyclicQuadrilateral;
var cKite = 'Kite'; // Kite

exports.cKite = cKite;
var cParallelogram = 'Parallelogram'; // Parallelogram

exports.cParallelogram = cParallelogram;
var cRhombus = 'Rhombus'; // Rhombus

exports.cRhombus = cRhombus;
var cEquilateralParallelogram = 'EquilateralParallelogram'; // EquilateralParallelogram

exports.cEquilateralParallelogram = cEquilateralParallelogram;
var cLozenge = 'Lozenge'; // Lozenge

exports.cLozenge = cLozenge;
var cRhomboid = 'Rhomboid'; // Rhomboid

exports.cRhomboid = cRhomboid;
var cTangentialQuadrilateral = 'TangentialQuadrilateral'; // TangentialQuadrilateral

exports.cTangentialQuadrilateral = cTangentialQuadrilateral;
var cTrapezium = 'Trapezium'; // Trapezium

exports.cTrapezium = cTrapezium;
var cIsoscelesTrapezoid = 'IsoscelesTrapezoid'; // IsoscelesTrapezoid

exports.cIsoscelesTrapezoid = cIsoscelesTrapezoid;
var cRegularPentagon = 'RegularPentagon'; // RegularPentagon

exports.cRegularPentagon = cRegularPentagon;
var cLemoineHexagon = 'LemoineHexagon'; // LemoineHexagon

exports.cLemoineHexagon = cLemoineHexagon;
var cRegularOctagon = 'RegularOctagon'; // RegularOctagon

exports.cRegularOctagon = cRegularOctagon;
var cRegularDecagon = 'RegularDecagon'; // RegularDecagon

exports.cRegularDecagon = cRegularDecagon;
var cTriskaidecagon = 'Triskaidecagon'; // Triskaidecagon

exports.cTriskaidecagon = cTriskaidecagon;
var cTriacontagon = 'Triacontagon'; // Triacontagon

exports.cTriacontagon = cTriacontagon;
var cTetracontagon = 'Tetracontagon'; // Tetracontagon

exports.cTetracontagon = cTetracontagon;
var cPentacontagon = 'Pentacontagon'; // Pentacontagon

exports.cPentacontagon = cPentacontagon;
var cHexacontagon = 'Hexacontagon'; // Hexacontagon

exports.cHexacontagon = cHexacontagon;
var cHeptacontagon = 'Heptacontagon'; // Heptacontagon

exports.cHeptacontagon = cHeptacontagon;
var cOctacontagon = 'Octacontagon'; // Octacontagon

exports.cOctacontagon = cOctacontagon;
var cEnneacontagon = 'Enneacontagon'; // Enneacontagon

exports.cEnneacontagon = cEnneacontagon;
var c257Gon = '257Gon'; // 257Gon

exports.c257Gon = c257Gon;
var cMyriagon = 'Myriagon'; // Myriagon

exports.cMyriagon = cMyriagon;
var c65537Gon = '65537Gon'; // 65537Gon

exports.c65537Gon = c65537Gon;
var cMegagon = 'Megagon'; // Megagon
// Tilings

exports.cMegagon = cMegagon;
var cArchimedeanTiling = 'ArchimedeanTiling'; // ArchimedeanTiling

exports.cArchimedeanTiling = cArchimedeanTiling;
var cTruncatedSquareTiling = 'TruncatedSquareTiling'; // TruncatedSquareTiling

exports.cTruncatedSquareTiling = cTruncatedSquareTiling;
var cSnubSquareTiling = 'SnubSquareTiling'; // SnubSquareTiling

exports.cSnubSquareTiling = cSnubSquareTiling;
var cTrihexagonalTiling = 'TrihexagonalTiling'; // TrihexagonalTiling

exports.cTrihexagonalTiling = cTrihexagonalTiling;
var cTruncatedHexagonalTiling = 'TruncatedHexagonalTiling'; // TruncatedHexagonalTiling

exports.cTruncatedHexagonalTiling = cTruncatedHexagonalTiling;
var cRhombitriHexagonalTiling = 'RhombitriHexagonalTiling'; // RhombitriHexagonalTiling

exports.cRhombitriHexagonalTiling = cRhombitriHexagonalTiling;
var cTruncatedTriHexagonalTiling = 'TruncatedTriHexagonalTiling'; // TruncatedTriHexagonalTiling

exports.cTruncatedTriHexagonalTiling = cTruncatedTriHexagonalTiling;
var cSnubHexagonalTiling = 'SnubHexagonalTiling'; // SnubHexagonalTiling

exports.cSnubHexagonalTiling = cSnubHexagonalTiling;
var cElongatedTriangularTiling = 'ElongatedTriangularTiling'; // ElongatedTriangularTiling
// Uniform Polyhedra

exports.cElongatedTriangularTiling = cElongatedTriangularTiling;
var cHemicube = 'Hemicube'; // Hemicube

exports.cHemicube = cHemicube;
var cHemiOctahedron = 'HemiOctahedron'; // HemiOctahedron

exports.cHemiOctahedron = cHemiOctahedron;
var cHemiDodecahedron = 'HemiDodecahedron'; // HemiDodecahedron

exports.cHemiDodecahedron = cHemiDodecahedron;
var cHemiIcosahedron = 'HemiIcosahedron'; // HemiIcosahedron

exports.cHemiIcosahedron = cHemiIcosahedron;
var cTruncatedTetrahedron = 'TruncatedTetrahedron'; // TruncatedTetrahedron

exports.cTruncatedTetrahedron = cTruncatedTetrahedron;
var cCuboctahedron = 'Cuboctahedron'; // Cuboctahedron

exports.cCuboctahedron = cCuboctahedron;
var cTruncatedCube = 'TruncatedCube'; // TruncatedCube

exports.cTruncatedCube = cTruncatedCube;
var cTruncatedOctahedron = 'TruncatedOctahedron'; // TruncatedOctahedron

exports.cTruncatedOctahedron = cTruncatedOctahedron;
var cRhombicubOctahedron = 'RhombicubOctahedron'; // RhombicubOctahedron

exports.cRhombicubOctahedron = cRhombicubOctahedron;
var cTruncatedCuboctahedron = 'TruncatedCuboctahedron'; // TruncatedCuboctahedron

exports.cTruncatedCuboctahedron = cTruncatedCuboctahedron;
var cSnubCube = 'SnubCube'; // SnubCube

exports.cSnubCube = cSnubCube;
var cIcosidodecahedron = 'Icosidodecahedron'; // Icosidodecahedron

exports.cIcosidodecahedron = cIcosidodecahedron;
var cTruncatedDodecahedron = 'TruncatedDodecahedron'; // TruncatedDodecahedron

exports.cTruncatedDodecahedron = cTruncatedDodecahedron;
var cTruncatedIcosahedron = 'TruncatedIcosahedron'; // TruncatedIcosahedron

exports.cTruncatedIcosahedron = cTruncatedIcosahedron;
var cRhombicosidodecahedron = 'Rhombicosidodecahedron'; // Rhombicosidodecahedron

exports.cRhombicosidodecahedron = cRhombicosidodecahedron;
var cTruncatedIcosidodecahedron = 'TruncatedIcosidodecahedron'; // TruncatedIcosidodecahedron

exports.cTruncatedIcosidodecahedron = cTruncatedIcosidodecahedron;
var cSnubDodecahedron = 'SnubDodecahedron'; // SnubDodecahedron

exports.cSnubDodecahedron = cSnubDodecahedron;
var cPrism = 'Prism'; // Prism

exports.cPrism = cPrism;
var cAntiprism = 'Antiprism'; // Antiprism

exports.cAntiprism = cAntiprism;
var cCubitruncatedCuboctahedron = 'CubitruncatedCuboctahedron'; // CubitruncatedCuboctahedron

exports.cCubitruncatedCuboctahedron = cCubitruncatedCuboctahedron;
var cCubohemioctahedron = 'Cubohemioctahedron'; // Cubohemioctahedron

exports.cCubohemioctahedron = cCubohemioctahedron;
var cDitrigonalDodecadodecahedron = 'DitrigonalDodecadodecahedron'; // DitrigonalDodecadodecahedron

exports.cDitrigonalDodecadodecahedron = cDitrigonalDodecadodecahedron;
var cDodecadodecahedron = 'Dodecadodecahedron'; // Dodecadodecahedron

exports.cDodecadodecahedron = cDodecadodecahedron;
var cGreatCubicuboctahedron = 'GreatCubicuboctahedron'; // GreatCubicuboctahedron

exports.cGreatCubicuboctahedron = cGreatCubicuboctahedron;
var cGreatDirhombicosidodecahedron = 'GreatDirhombicosidodecahedron'; // GreatDirhombicosidodecahedron

exports.cGreatDirhombicosidodecahedron = cGreatDirhombicosidodecahedron;
var cGreatDisnubDirhombidodecahedron = 'GreatDisnubDirhombidodecahedron'; // GreatDisnubDirhombidodecahedron

exports.cGreatDisnubDirhombidodecahedron = cGreatDisnubDirhombidodecahedron;
var cGreatDitrigonalDodecicosidodecahedron = 'GreatDitrigonalDodecicosidodecahedron'; // GreatDitrigonalDodecicosidodecahedron

exports.cGreatDitrigonalDodecicosidodecahedron = cGreatDitrigonalDodecicosidodecahedron;
var cGreatDitrigonalIcosidodecahedron = 'GreatDitrigonalIcosidodecahedron'; // GreatDitrigonalIcosidodecahedron

exports.cGreatDitrigonalIcosidodecahedron = cGreatDitrigonalIcosidodecahedron;
var cGreatDodecahemicosahedron = 'GreatDodecahemicosahedron'; // GreatDodecahemicosahedron

exports.cGreatDodecahemicosahedron = cGreatDodecahemicosahedron;
var cGreatDodecahemidodecahedron = 'GreatDodecahemidodecahedron'; // GreatDodecahemidodecahedron

exports.cGreatDodecahemidodecahedron = cGreatDodecahemidodecahedron;
var cGreatDodecicosahedron = 'GreatDodecicosahedron'; // GreatDodecicosahedron

exports.cGreatDodecicosahedron = cGreatDodecicosahedron;
var cGreatDodecicosidodecahedron = 'GreatDodecicosidodecahedron'; // GreatDodecicosidodecahedron

exports.cGreatDodecicosidodecahedron = cGreatDodecicosidodecahedron;
var cGreatIcosicosidodecahedron = 'GreatIcosicosidodecahedron'; // GreatIcosicosidodecahedron

exports.cGreatIcosicosidodecahedron = cGreatIcosicosidodecahedron;
var cGreatIcosidodecahedron = 'GreatIcosidodecahedron'; // GreatIcosidodecahedron

exports.cGreatIcosidodecahedron = cGreatIcosidodecahedron;
var cGreatIcosihemidodecahedron = 'GreatIcosihemidodecahedron'; // GreatIcosihemidodecahedron

exports.cGreatIcosihemidodecahedron = cGreatIcosihemidodecahedron;
var cGreatInvertedSnubIcosidodecahedron = 'GreatInvertedSnubIcosidodecahedron'; // GreatInvertedSnubIcosidodecahedron

exports.cGreatInvertedSnubIcosidodecahedron = cGreatInvertedSnubIcosidodecahedron;
var cGreatRetrosnubIcosidodecahedron = 'GreatRetrosnubIcosidodecahedron'; // GreatRetrosnubIcosidodecahedron

exports.cGreatRetrosnubIcosidodecahedron = cGreatRetrosnubIcosidodecahedron;
var cGreatRhombidodecahedron = 'GreatRhombidodecahedron'; // GreatRhombidodecahedron

exports.cGreatRhombidodecahedron = cGreatRhombidodecahedron;
var cGreatRhombihexahedron = 'GreatRhombihexahedron'; // GreatRhombihexahedron

exports.cGreatRhombihexahedron = cGreatRhombihexahedron;
var cGreatSnubDodecicosidodecahedron = 'GreatSnubDodecicosidodecahedron'; // GreatSnubDodecicosidodecahedron

exports.cGreatSnubDodecicosidodecahedron = cGreatSnubDodecicosidodecahedron;
var cGreatSnubIcosidodecahedron = 'GreatSnubIcosidodecahedron'; // GreatSnubIcosidodecahedron

exports.cGreatSnubIcosidodecahedron = cGreatSnubIcosidodecahedron;
var cGreatStellatedTruncatedDodecahedron = 'GreatStellatedTruncatedDodecahedron'; // GreatStellatedTruncatedDodecahedron

exports.cGreatStellatedTruncatedDodecahedron = cGreatStellatedTruncatedDodecahedron;
var cGreatTruncatedCuboctahedron = 'GreatTruncatedCuboctahedron'; // GreatTruncatedCuboctahedron

exports.cGreatTruncatedCuboctahedron = cGreatTruncatedCuboctahedron;
var cGreatTruncatedIcosidodecahedron = 'GreatTruncatedIcosidodecahedron'; // GreatTruncatedIcosidodecahedron

exports.cGreatTruncatedIcosidodecahedron = cGreatTruncatedIcosidodecahedron;
var cIcosidodecadodecahedron = 'Icosidodecadodecahedron'; // Icosidodecadodecahedron

exports.cIcosidodecadodecahedron = cIcosidodecadodecahedron;
var cIcositruncatedDodecadodecahedron = 'IcositruncatedDodecadodecahedron'; // IcositruncatedDodecadodecahedron

exports.cIcositruncatedDodecadodecahedron = cIcositruncatedDodecadodecahedron;
var cInvertedSnubDodecadodecahedron = 'InvertedSnubDodecadodecahedron'; // InvertedSnubDodecadodecahedron

exports.cInvertedSnubDodecadodecahedron = cInvertedSnubDodecadodecahedron;
var cNonconvexGreatRhombicosidodecahedron = 'NonconvexGreatRhombicosidodecahedron'; // NonconvexGreatRhombicosidodecahedron

exports.cNonconvexGreatRhombicosidodecahedron = cNonconvexGreatRhombicosidodecahedron;
var cNonconvexGreatRhombicuboctahedron = 'NonconvexGreatRhombicuboctahedron'; // NonconvexGreatRhombicuboctahedron

exports.cNonconvexGreatRhombicuboctahedron = cNonconvexGreatRhombicuboctahedron;
var cOctahemioctahedron = 'Octahemioctahedron'; // Octahemioctahedron

exports.cOctahemioctahedron = cOctahemioctahedron;
var cRhombicosahedron = 'Rhombicosahedron'; // Rhombicosahedron

exports.cRhombicosahedron = cRhombicosahedron;
var cRhombidodecadodecahedron = 'Rhombidodecadodecahedron'; // Rhombidodecadodecahedron

exports.cRhombidodecadodecahedron = cRhombidodecadodecahedron;
var cSmallCubicuboctahedron = 'SmallCubicuboctahedron'; // SmallCubicuboctahedron

exports.cSmallCubicuboctahedron = cSmallCubicuboctahedron;
var cSmallDitrigonalDodecicosidodecahedron = 'SmallDitrigonalDodecicosidodecahedron'; // SmallDitrigonalDodecicosidodecahedron

exports.cSmallDitrigonalDodecicosidodecahedron = cSmallDitrigonalDodecicosidodecahedron;
var cSmallDitrigonalIcosidodecahedron = 'SmallDitrigonalIcosidodecahedron'; // SmallDitrigonalIcosidodecahedron

exports.cSmallDitrigonalIcosidodecahedron = cSmallDitrigonalIcosidodecahedron;
var cSmallDodecahemicosahedron = 'SmallDodecahemicosahedron'; // SmallDodecahemicosahedron

exports.cSmallDodecahemicosahedron = cSmallDodecahemicosahedron;
var cSmallDodecahemidodecahedron = 'SmallDodecahemidodecahedron'; // SmallDodecahemidodecahedron

exports.cSmallDodecahemidodecahedron = cSmallDodecahemidodecahedron;
var cSmallDodecicosahedron = 'SmallDodecicosahedron'; // SmallDodecicosahedron

exports.cSmallDodecicosahedron = cSmallDodecicosahedron;
var cSmallDodecicosidodecahedron = 'SmallDodecicosidodecahedron'; // SmallDodecicosidodecahedron

exports.cSmallDodecicosidodecahedron = cSmallDodecicosidodecahedron;
var cSmallIcosicosidodecahedron = 'SmallIcosicosidodecahedron'; // SmallIcosicosidodecahedron

exports.cSmallIcosicosidodecahedron = cSmallIcosicosidodecahedron;
var cSmallIcosihemidodecahedron = 'SmallIcosihemidodecahedron'; // SmallIcosihemidodecahedron

exports.cSmallIcosihemidodecahedron = cSmallIcosihemidodecahedron;
var cSmallRetrosnubIcosicosidodecahedron = 'SmallRetrosnubIcosicosidodecahedron'; // SmallRetrosnubIcosicosidodecahedron

exports.cSmallRetrosnubIcosicosidodecahedron = cSmallRetrosnubIcosicosidodecahedron;
var cSmallRhombidodecahedron = 'SmallRhombidodecahedron'; // SmallRhombidodecahedron

exports.cSmallRhombidodecahedron = cSmallRhombidodecahedron;
var cSmallRhombihexahedron = 'SmallRhombihexahedron'; // SmallRhombihexahedron

exports.cSmallRhombihexahedron = cSmallRhombihexahedron;
var cSmallSnubIcosicosidodecahedron = 'SmallSnubIcosicosidodecahedron'; // SmallSnubIcosicosidodecahedron

exports.cSmallSnubIcosicosidodecahedron = cSmallSnubIcosicosidodecahedron;
var cSmallStellatedTruncatedDodecahedron = 'SmallStellatedTruncatedDodecahedron'; // SmallStellatedTruncatedDodecahedron

exports.cSmallStellatedTruncatedDodecahedron = cSmallStellatedTruncatedDodecahedron;
var cSnubDodecadodecahedron = 'SnubDodecadodecahedron'; // SnubDodecadodecahedron

exports.cSnubDodecadodecahedron = cSnubDodecadodecahedron;
var cSnubIcosidodecadodecahedron = 'SnubIcosidodecadodecahedron'; // SnubIcosidodecadodecahedron

exports.cSnubIcosidodecadodecahedron = cSnubIcosidodecadodecahedron;
var cStellatedTruncatedHexahedron = 'StellatedTruncatedHexahedron'; // StellatedTruncatedHexahedron

exports.cStellatedTruncatedHexahedron = cStellatedTruncatedHexahedron;
var cTetrahemihexahedron = 'Tetrahemihexahedron'; // Tetrahemihexahedron

exports.cTetrahemihexahedron = cTetrahemihexahedron;
var cTruncatedDodecadodecahedron = 'TruncatedDodecadodecahedron'; // TruncatedDodecadodecahedron

exports.cTruncatedDodecadodecahedron = cTruncatedDodecadodecahedron;
var cTruncatedGreatDodecahedron = 'TruncatedGreatDodecahedron'; // TruncatedGreatDodecahedron

exports.cTruncatedGreatDodecahedron = cTruncatedGreatDodecahedron;
var cTruncatedGreatIcosahedron = 'TruncatedGreatIcosahedron'; // TruncatedGreatIcosahedron
// Duals of Uniform Polyhedra

exports.cTruncatedGreatIcosahedron = cTruncatedGreatIcosahedron;
var cCatalanSolid = 'CatalanSolid'; // CatalanSolid

exports.cCatalanSolid = cCatalanSolid;
var cTriakisTetrahedron = 'TriakisTetrahedron'; // TriakisTetrahedron

exports.cTriakisTetrahedron = cTriakisTetrahedron;
var cRhombicDodecahedron = 'RhombicDodecahedron'; // RhombicDodecahedron

exports.cRhombicDodecahedron = cRhombicDodecahedron;
var cTriakisOctahedron = 'TriakisOctahedron'; // TriakisOctahedron

exports.cTriakisOctahedron = cTriakisOctahedron;
var cTetrakisHexahedron = 'TetrakisHexahedron'; // TetrakisHexahedron

exports.cTetrakisHexahedron = cTetrakisHexahedron;
var cDeltoidalIcositetrahedron = 'DeltoidalIcositetrahedron'; // DeltoidalIcositetrahedron

exports.cDeltoidalIcositetrahedron = cDeltoidalIcositetrahedron;
var cDisdyakisDodecahedron = 'DisdyakisDodecahedron'; // DisdyakisDodecahedron

exports.cDisdyakisDodecahedron = cDisdyakisDodecahedron;
var cPentagonalIcositetrahedron = 'PentagonalIcositetrahedron'; // PentagonalIcositetrahedron

exports.cPentagonalIcositetrahedron = cPentagonalIcositetrahedron;
var cRhombicTriacontahedron = 'RhombicTriacontahedron'; // RhombicTriacontahedron

exports.cRhombicTriacontahedron = cRhombicTriacontahedron;
var cTriakisIcosahedron = 'TriakisIcosahedron'; // TriakisIcosahedron

exports.cTriakisIcosahedron = cTriakisIcosahedron;
var cPentakisDodecahedron = 'PentakisDodecahedron'; // PentakisDodecahedron

exports.cPentakisDodecahedron = cPentakisDodecahedron;
var cDeltoidalHexecontahedron = 'DeltoidalHexecontahedron'; // DeltoidalHexecontahedron

exports.cDeltoidalHexecontahedron = cDeltoidalHexecontahedron;
var cDisdyakisTriacontahedron = 'DisdyakisTriacontahedron'; // DisdyakisTriacontahedron

exports.cDisdyakisTriacontahedron = cDisdyakisTriacontahedron;
var cPentagonalHexecontahedron = 'PentagonalHexecontahedron'; // PentagonalHexecontahedron

exports.cPentagonalHexecontahedron = cPentagonalHexecontahedron;
var cGreatComplexIcosidodecahedron = 'GreatComplexIcosidodecahedron'; // GreatComplexIcosidodecahedron

exports.cGreatComplexIcosidodecahedron = cGreatComplexIcosidodecahedron;
var cGreatDeltoidalHexecontahedron = 'GreatDeltoidalHexecontahedron'; // GreatDeltoidalHexecontahedron

exports.cGreatDeltoidalHexecontahedron = cGreatDeltoidalHexecontahedron;
var cGreatDeltoidalIcositetrahedron = 'GreatDeltoidalIcositetrahedron'; // GreatDeltoidalIcositetrahedron

exports.cGreatDeltoidalIcositetrahedron = cGreatDeltoidalIcositetrahedron;
var cGreatDirhombicosidodecacron = 'GreatDirhombicosidodecacron'; // GreatDirhombicosidodecacron

exports.cGreatDirhombicosidodecacron = cGreatDirhombicosidodecacron;
var cGreatDisdyakisDodecahedron = 'GreatDisdyakisDodecahedron'; // GreatDisdyakisDodecahedron

exports.cGreatDisdyakisDodecahedron = cGreatDisdyakisDodecahedron;
var cGreatDisdyakisTriacontahedron = 'GreatDisdyakisTriacontahedron'; // GreatDisdyakisTriacontahedron

exports.cGreatDisdyakisTriacontahedron = cGreatDisdyakisTriacontahedron;
var cGreatDisnubDirhombidodecacron = 'GreatDisnubDirhombidodecacron'; // GreatDisnubDirhombidodecacron

exports.cGreatDisnubDirhombidodecacron = cGreatDisnubDirhombidodecacron;
var cGreatDitrigonalDodecacronicHexecontahedron = 'GreatDitrigonalDodecacronicHexecontahedron'; // GreatDitrigonalDodecacronicHexecontahedron

exports.cGreatDitrigonalDodecacronicHexecontahedron = cGreatDitrigonalDodecacronicHexecontahedron;
var cGreatDodecacronicHexecontahedron = 'GreatDodecacronicHexecontahedron'; // GreatDodecacronicHexecontahedron

exports.cGreatDodecacronicHexecontahedron = cGreatDodecacronicHexecontahedron;
var cGreatDodecahemicosacron = 'GreatDodecahemicosacron'; // GreatDodecahemicosacron

exports.cGreatDodecahemicosacron = cGreatDodecahemicosacron;
var cGreatDodecicosacron = 'GreatDodecicosacron'; // GreatDodecicosacron

exports.cGreatDodecicosacron = cGreatDodecicosacron;
var cGreatHexacronicIcositetrahedron = 'GreatHexacronicIcositetrahedron'; // GreatHexacronicIcositetrahedron

exports.cGreatHexacronicIcositetrahedron = cGreatHexacronicIcositetrahedron;
var cGreatHexagonalHexecontahedron = 'GreatHexagonalHexecontahedron'; // GreatHexagonalHexecontahedron

exports.cGreatHexagonalHexecontahedron = cGreatHexagonalHexecontahedron;
var cGreatIcosacronicHexecontahedron = 'GreatIcosacronicHexecontahedron'; // GreatIcosacronicHexecontahedron

exports.cGreatIcosacronicHexecontahedron = cGreatIcosacronicHexecontahedron;
var cGreatIcosihemidodecacron = 'GreatIcosihemidodecacron'; // GreatIcosihemidodecacron

exports.cGreatIcosihemidodecacron = cGreatIcosihemidodecacron;
var cGreatInvertedPentagonalHexecontahedron = 'GreatInvertedPentagonalHexecontahedron'; // GreatInvertedPentagonalHexecontahedron

exports.cGreatInvertedPentagonalHexecontahedron = cGreatInvertedPentagonalHexecontahedron;
var cGreatPentagonalHexecontahedron = 'GreatPentagonalHexecontahedron'; // GreatPentagonalHexecontahedron

exports.cGreatPentagonalHexecontahedron = cGreatPentagonalHexecontahedron;
var cGreatPentagrammicHexecontahedron = 'GreatPentagrammicHexecontahedron'; // GreatPentagrammicHexecontahedron

exports.cGreatPentagrammicHexecontahedron = cGreatPentagrammicHexecontahedron;
var cGreatPentakisDodecahedron = 'GreatPentakisDodecahedron'; // GreatPentakisDodecahedron

exports.cGreatPentakisDodecahedron = cGreatPentakisDodecahedron;
var cGreatRhombicTriacontahedron = 'GreatRhombicTriacontahedron'; // GreatRhombicTriacontahedron

exports.cGreatRhombicTriacontahedron = cGreatRhombicTriacontahedron;
var cGreatRhombidodecacron = 'GreatRhombidodecacron'; // GreatRhombidodecacron

exports.cGreatRhombidodecacron = cGreatRhombidodecacron;
var cGreatRhombihexacron = 'GreatRhombihexacron'; // GreatRhombihexacron

exports.cGreatRhombihexacron = cGreatRhombihexacron;
var cGreatStellapentakisDodecahedron = 'GreatStellapentakisDodecahedron'; // GreatStellapentakisDodecahedron

exports.cGreatStellapentakisDodecahedron = cGreatStellapentakisDodecahedron;
var cGreatTriakisIcosahedron = 'GreatTriakisIcosahedron'; // GreatTriakisIcosahedron

exports.cGreatTriakisIcosahedron = cGreatTriakisIcosahedron;
var cGreatTriakisOctahedron = 'GreatTriakisOctahedron'; // GreatTriakisOctahedron

exports.cGreatTriakisOctahedron = cGreatTriakisOctahedron;
var cGreatTriambicIcosahedron = 'GreatTriambicIcosahedron'; // GreatTriambicIcosahedron

exports.cGreatTriambicIcosahedron = cGreatTriambicIcosahedron;
var cMedialDeltoidalHexecontahedron = 'MedialDeltoidalHexecontahedron'; // MedialDeltoidalHexecontahedron

exports.cMedialDeltoidalHexecontahedron = cMedialDeltoidalHexecontahedron;
var cMedialDisdyakisTriacontahedron = 'MedialDisdyakisTriacontahedron'; // MedialDisdyakisTriacontahedron

exports.cMedialDisdyakisTriacontahedron = cMedialDisdyakisTriacontahedron;
var cMedialHexagonalHexecontahedron = 'MedialHexagonalHexecontahedron'; // MedialHexagonalHexecontahedron

exports.cMedialHexagonalHexecontahedron = cMedialHexagonalHexecontahedron;
var cMedialIcosacronicHexecontahedron = 'MedialIcosacronicHexecontahedron'; // MedialIcosacronicHexecontahedron

exports.cMedialIcosacronicHexecontahedron = cMedialIcosacronicHexecontahedron;
var cMedialInvertedPentagonalHexecontahedron = 'MedialInvertedPentagonalHexecontahedron'; // MedialInvertedPentagonalHexecontahedron

exports.cMedialInvertedPentagonalHexecontahedron = cMedialInvertedPentagonalHexecontahedron;
var cMedialPentagonalHexecontahedron = 'MedialPentagonalHexecontahedron'; // MedialPentagonalHexecontahedron

exports.cMedialPentagonalHexecontahedron = cMedialPentagonalHexecontahedron;
var cMedialRhombicTriacontahedron = 'MedialRhombicTriacontahedron'; // MedialRhombicTriacontahedron

exports.cMedialRhombicTriacontahedron = cMedialRhombicTriacontahedron;
var cHexahemioctacron = 'Hexahemioctacron'; // Hexahemioctacron

exports.cHexahemioctacron = cHexahemioctacron;
var cHemipolyhedron = 'Hemipolyhedron'; // Hemipolyhedron

exports.cHemipolyhedron = cHemipolyhedron;
var cOctahemioctacron = 'Octahemioctacron'; // Octahemioctacron

exports.cOctahemioctacron = cOctahemioctacron;
var cRhombicosacron = 'Rhombicosacron'; // Rhombicosacron

exports.cRhombicosacron = cRhombicosacron;
var cSmallComplexIcosidodecahedron = 'SmallComplexIcosidodecahedron'; // SmallComplexIcosidodecahedron

exports.cSmallComplexIcosidodecahedron = cSmallComplexIcosidodecahedron;
var cSmallDitrigonalDodecacronicHexecontahedron = 'SmallDitrigonalDodecacronicHexecontahedron'; // SmallDitrigonalDodecacronicHexecontahedron

exports.cSmallDitrigonalDodecacronicHexecontahedron = cSmallDitrigonalDodecacronicHexecontahedron;
var cSmallDodecacronicHexecontahedron = 'SmallDodecacronicHexecontahedron'; // SmallDodecacronicHexecontahedron

exports.cSmallDodecacronicHexecontahedron = cSmallDodecacronicHexecontahedron;
var cSmallDodecahemicosacron = 'SmallDodecahemicosacron'; // SmallDodecahemicosacron

exports.cSmallDodecahemicosacron = cSmallDodecahemicosacron;
var cSmallDodecahemidodecacron = 'SmallDodecahemidodecacron'; // SmallDodecahemidodecacron

exports.cSmallDodecahemidodecacron = cSmallDodecahemidodecacron;
var cSmallDodecicosacron = 'SmallDodecicosacron'; // SmallDodecicosacron

exports.cSmallDodecicosacron = cSmallDodecicosacron;
var cSmallHexacronicIcositetrahedron = 'SmallHexacronicIcositetrahedron'; // SmallHexacronicIcositetrahedron

exports.cSmallHexacronicIcositetrahedron = cSmallHexacronicIcositetrahedron;
var cSmallHexagonalHexecontahedron = 'SmallHexagonalHexecontahedron'; // SmallHexagonalHexecontahedron

exports.cSmallHexagonalHexecontahedron = cSmallHexagonalHexecontahedron;
var cSmallHexagrammicHexecontahedron = 'SmallHexagrammicHexecontahedron'; // SmallHexagrammicHexecontahedron

exports.cSmallHexagrammicHexecontahedron = cSmallHexagrammicHexecontahedron;
var cSmallIcosacronicHexecontahedron = 'SmallIcosacronicHexecontahedron'; // SmallIcosacronicHexecontahedron

exports.cSmallIcosacronicHexecontahedron = cSmallIcosacronicHexecontahedron;
var cSmallIcosihemidodecacron = 'SmallIcosihemidodecacron'; // SmallIcosihemidodecacron

exports.cSmallIcosihemidodecacron = cSmallIcosihemidodecacron;
var cSmallRhombidodecacron = 'SmallRhombidodecacron'; // SmallRhombidodecacron

exports.cSmallRhombidodecacron = cSmallRhombidodecacron;
var cSmallRhombihexacron = 'SmallRhombihexacron'; // SmallRhombihexacron

exports.cSmallRhombihexacron = cSmallRhombihexacron;
var cSmallStellapentakisDodecahedron = 'SmallStellapentakisDodecahedron'; // SmallStellapentakisDodecahedron

exports.cSmallStellapentakisDodecahedron = cSmallStellapentakisDodecahedron;
var cSmallTriambicIcosahedron = 'SmallTriambicIcosahedron'; // SmallTriambicIcosahedron

exports.cSmallTriambicIcosahedron = cSmallTriambicIcosahedron;
var cTetrahemihexacron = 'Tetrahemihexacron'; // Tetrahemihexacron
// Johnson Solids

exports.cTetrahemihexacron = cTetrahemihexacron;
var cAugmentedDodecahedron = 'AugmentedDodecahedron'; // AugmentedDodecahedron

exports.cAugmentedDodecahedron = cAugmentedDodecahedron;
var cAugmentedHexagonalPrism = 'AugmentedHexagonalPrism'; // AugmentedHexagonalPrism

exports.cAugmentedHexagonalPrism = cAugmentedHexagonalPrism;
var cAugmentedPentagonalPrism = 'AugmentedPentagonalPrism'; // AugmentedPentagonalPrism

exports.cAugmentedPentagonalPrism = cAugmentedPentagonalPrism;
var cAugmentedSphenocorona = 'AugmentedSphenocorona'; // AugmentedSphenocorona

exports.cAugmentedSphenocorona = cAugmentedSphenocorona;
var cAugmentedTriangularPrism = 'AugmentedTriangularPrism'; // AugmentedTriangularPrism

exports.cAugmentedTriangularPrism = cAugmentedTriangularPrism;
var cAugmentedTridiminishedIcosahedron = 'AugmentedTridiminishedIcosahedron'; // AugmentedTridiminishedIcosahedron

exports.cAugmentedTridiminishedIcosahedron = cAugmentedTridiminishedIcosahedron;
var cAugmentedTruncatedCube = 'AugmentedTruncatedCube'; // AugmentedTruncatedCube

exports.cAugmentedTruncatedCube = cAugmentedTruncatedCube;
var cAugmentedTruncatedDodecahedron = 'AugmentedTruncatedDodecahedron'; // AugmentedTruncatedDodecahedron

exports.cAugmentedTruncatedDodecahedron = cAugmentedTruncatedDodecahedron;
var cAugmentedTruncatedTetrahedron = 'AugmentedTruncatedTetrahedron'; // AugmentedTruncatedTetrahedron

exports.cAugmentedTruncatedTetrahedron = cAugmentedTruncatedTetrahedron;
var cBiaugmentedPentagonalPrism = 'BiaugmentedPentagonalPrism'; // BiaugmentedPentagonalPrism

exports.cBiaugmentedPentagonalPrism = cBiaugmentedPentagonalPrism;
var cBiaugmentedTriangularPrism = 'BiaugmentedTriangularPrism'; // BiaugmentedTriangularPrism

exports.cBiaugmentedTriangularPrism = cBiaugmentedTriangularPrism;
var cBiaugmentedTruncatedCube = 'BiaugmentedTruncatedCube'; // BiaugmentedTruncatedCube

exports.cBiaugmentedTruncatedCube = cBiaugmentedTruncatedCube;
var cBigyrateDiminishedRhombicosidodecahedron = 'BigyrateDiminishedRhombicosidodecahedron'; // BigyrateDiminishedRhombicosidodecahedron

exports.cBigyrateDiminishedRhombicosidodecahedron = cBigyrateDiminishedRhombicosidodecahedron;
var cBilunabirotunda = 'Bilunabirotunda'; // Bilunabirotunda

exports.cBilunabirotunda = cBilunabirotunda;
var cDiminishedRhombicosidodecahedron = 'DiminishedRhombicosidodecahedron'; // DiminishedRhombicosidodecahedron

exports.cDiminishedRhombicosidodecahedron = cDiminishedRhombicosidodecahedron;
var cDisphenocingulum = 'Disphenocingulum'; // Disphenocingulum

exports.cDisphenocingulum = cDisphenocingulum;
var cElongatedPentagonalBipyramid = 'ElongatedPentagonalBipyramid'; // ElongatedPentagonalBipyramid

exports.cElongatedPentagonalBipyramid = cElongatedPentagonalBipyramid;
var cElongatedPentagonalCupola = 'ElongatedPentagonalCupola'; // ElongatedPentagonalCupola

exports.cElongatedPentagonalCupola = cElongatedPentagonalCupola;
var cElongatedPentagonalGyrobicupola = 'ElongatedPentagonalGyrobicupola'; // ElongatedPentagonalGyrobicupola

exports.cElongatedPentagonalGyrobicupola = cElongatedPentagonalGyrobicupola;
var cElongatedPentagonalGyrobirotunda = 'ElongatedPentagonalGyrobirotunda'; // ElongatedPentagonalGyrobirotunda

exports.cElongatedPentagonalGyrobirotunda = cElongatedPentagonalGyrobirotunda;
var cElongatedPentagonalGyrocupolarotunda = 'ElongatedPentagonalGyrocupolarotunda'; // ElongatedPentagonalGyrocupolarotunda

exports.cElongatedPentagonalGyrocupolarotunda = cElongatedPentagonalGyrocupolarotunda;
var cElongatedPentagonalOrthobicupola = 'ElongatedPentagonalOrthobicupola'; // ElongatedPentagonalOrthobicupola

exports.cElongatedPentagonalOrthobicupola = cElongatedPentagonalOrthobicupola;
var cElongatedPentagonalOrthobirotunda = 'ElongatedPentagonalOrthobirotunda'; // ElongatedPentagonalOrthobirotunda

exports.cElongatedPentagonalOrthobirotunda = cElongatedPentagonalOrthobirotunda;
var cElongatedPentagonalOrthocupolarotunda = 'ElongatedPentagonalOrthocupolarotunda'; // ElongatedPentagonalOrthocupolarotunda

exports.cElongatedPentagonalOrthocupolarotunda = cElongatedPentagonalOrthocupolarotunda;
var cElongatedPentagonalPyramid = 'ElongatedPentagonalPyramid'; // ElongatedPentagonalPyramid

exports.cElongatedPentagonalPyramid = cElongatedPentagonalPyramid;
var cElongatedPentagonalRotunda = 'ElongatedPentagonalRotunda'; // ElongatedPentagonalRotunda

exports.cElongatedPentagonalRotunda = cElongatedPentagonalRotunda;
var cElongatedSquareBipyramid = 'ElongatedSquareBipyramid'; // ElongatedSquareBipyramid

exports.cElongatedSquareBipyramid = cElongatedSquareBipyramid;
var cElongatedSquareCupola = 'ElongatedSquareCupola'; // ElongatedSquareCupola

exports.cElongatedSquareCupola = cElongatedSquareCupola;
var cElongatedSquareGyrobicupola = 'ElongatedSquareGyrobicupola'; // ElongatedSquareGyrobicupola

exports.cElongatedSquareGyrobicupola = cElongatedSquareGyrobicupola;
var cElongatedSquarePyramid = 'ElongatedSquarePyramid'; // ElongatedSquarePyramid

exports.cElongatedSquarePyramid = cElongatedSquarePyramid;
var cElongatedTriangularBipyramid = 'ElongatedTriangularBipyramid'; // ElongatedTriangularBipyramid

exports.cElongatedTriangularBipyramid = cElongatedTriangularBipyramid;
var cElongatedTriangularCupola = 'ElongatedTriangularCupola'; // ElongatedTriangularCupola

exports.cElongatedTriangularCupola = cElongatedTriangularCupola;
var cElongatedTriangularGyrobicupola = 'ElongatedTriangularGyrobicupola'; // ElongatedTriangularGyrobicupola

exports.cElongatedTriangularGyrobicupola = cElongatedTriangularGyrobicupola;
var cElongatedTriangularOrthobicupola = 'ElongatedTriangularOrthobicupola'; // ElongatedTriangularOrthobicupola

exports.cElongatedTriangularOrthobicupola = cElongatedTriangularOrthobicupola;
var cElongatedTriangularPyramid = 'ElongatedTriangularPyramid'; // ElongatedTriangularPyramid

exports.cElongatedTriangularPyramid = cElongatedTriangularPyramid;
var cGyrateBidiminishedRhombicosidodecahedron = 'GyrateBidiminishedRhombicosidodecahedron'; // GyrateBidiminishedRhombicosidodecahedron

exports.cGyrateBidiminishedRhombicosidodecahedron = cGyrateBidiminishedRhombicosidodecahedron;
var cGyrateRhombicosidodecahedron = 'GyrateRhombicosidodecahedron'; // GyrateRhombicosidodecahedron

exports.cGyrateRhombicosidodecahedron = cGyrateRhombicosidodecahedron;
var cGyrobifastigium = 'Gyrobifastigium'; // Gyrobifastigium

exports.cGyrobifastigium = cGyrobifastigium;
var cGyroelongatedPentagonalBicupola = 'GyroelongatedPentagonalBicupola'; // GyroelongatedPentagonalBicupola

exports.cGyroelongatedPentagonalBicupola = cGyroelongatedPentagonalBicupola;
var cGyroelongatedPentagonalBirotunda = 'GyroelongatedPentagonalBirotunda'; // GyroelongatedPentagonalBirotunda

exports.cGyroelongatedPentagonalBirotunda = cGyroelongatedPentagonalBirotunda;
var cGyroelongatedPentagonalCupola = 'GyroelongatedPentagonalCupola'; // GyroelongatedPentagonalCupola

exports.cGyroelongatedPentagonalCupola = cGyroelongatedPentagonalCupola;
var cGyroelongatedPentagonalCupolarotunda = 'GyroelongatedPentagonalCupolarotunda'; // GyroelongatedPentagonalCupolarotunda

exports.cGyroelongatedPentagonalCupolarotunda = cGyroelongatedPentagonalCupolarotunda;
var cGyroelongatedPentagonalPyramid = 'GyroelongatedPentagonalPyramid'; // GyroelongatedPentagonalPyramid

exports.cGyroelongatedPentagonalPyramid = cGyroelongatedPentagonalPyramid;
var cGyroelongatedPentagonalRotunda = 'GyroelongatedPentagonalRotunda'; // GyroelongatedPentagonalRotunda

exports.cGyroelongatedPentagonalRotunda = cGyroelongatedPentagonalRotunda;
var cGyroelongatedSquareBicupola = 'GyroelongatedSquareBicupola'; // GyroelongatedSquareBicupola

exports.cGyroelongatedSquareBicupola = cGyroelongatedSquareBicupola;
var cGyroelongatedSquareBipyramid = 'GyroelongatedSquareBipyramid'; // GyroelongatedSquareBipyramid

exports.cGyroelongatedSquareBipyramid = cGyroelongatedSquareBipyramid;
var cGyroelongatedSquareCupola = 'GyroelongatedSquareCupola'; // GyroelongatedSquareCupola

exports.cGyroelongatedSquareCupola = cGyroelongatedSquareCupola;
var cGyroelongatedSquarePyramid = 'GyroelongatedSquarePyramid'; // GyroelongatedSquarePyramid

exports.cGyroelongatedSquarePyramid = cGyroelongatedSquarePyramid;
var cGyroelongatedTriangularBicupola = 'GyroelongatedTriangularBicupola'; // GyroelongatedTriangularBicupola

exports.cGyroelongatedTriangularBicupola = cGyroelongatedTriangularBicupola;
var cGyroelongatedTriangularCupola = 'GyroelongatedTriangularCupola'; // GyroelongatedTriangularCupola

exports.cGyroelongatedTriangularCupola = cGyroelongatedTriangularCupola;
var cHebesphenomegacorona = 'Hebesphenomegacorona'; // Hebesphenomegacorona

exports.cHebesphenomegacorona = cHebesphenomegacorona;
var cMetabiaugmentedDodecahedron = 'MetabiaugmentedDodecahedron'; // MetabiaugmentedDodecahedron

exports.cMetabiaugmentedDodecahedron = cMetabiaugmentedDodecahedron;
var cMetabiaugmentedHexagonalPrism = 'MetabiaugmentedHexagonalPrism'; // MetabiaugmentedHexagonalPrism

exports.cMetabiaugmentedHexagonalPrism = cMetabiaugmentedHexagonalPrism;
var cMetabiaugmentedTruncatedDodecahedron = 'MetabiaugmentedTruncatedDodecahedron'; // MetabiaugmentedTruncatedDodecahedron

exports.cMetabiaugmentedTruncatedDodecahedron = cMetabiaugmentedTruncatedDodecahedron;
var cMetabidiminishedIcosahedron = 'MetabidiminishedIcosahedron'; // MetabidiminishedIcosahedron

exports.cMetabidiminishedIcosahedron = cMetabidiminishedIcosahedron;
var cMetabidiminishedRhombicosidodecahedron = 'MetabidiminishedRhombicosidodecahedron'; // MetabidiminishedRhombicosidodecahedron

exports.cMetabidiminishedRhombicosidodecahedron = cMetabidiminishedRhombicosidodecahedron;
var cMetabigyrateRhombicosidodecahedron = 'MetabigyrateRhombicosidodecahedron'; // MetabigyrateRhombicosidodecahedron

exports.cMetabigyrateRhombicosidodecahedron = cMetabigyrateRhombicosidodecahedron;
var cMetagyrateDiminishedRhombicosidodecahedron = 'MetagyrateDiminishedRhombicosidodecahedron'; // MetagyrateDiminishedRhombicosidodecahedron

exports.cMetagyrateDiminishedRhombicosidodecahedron = cMetagyrateDiminishedRhombicosidodecahedron;
var cParabiaugmentedDodecahedron = 'ParabiaugmentedDodecahedron'; // ParabiaugmentedDodecahedron

exports.cParabiaugmentedDodecahedron = cParabiaugmentedDodecahedron;
var cParabiaugmentedHexagonalPrism = 'ParabiaugmentedHexagonalPrism'; // ParabiaugmentedHexagonalPrism

exports.cParabiaugmentedHexagonalPrism = cParabiaugmentedHexagonalPrism;
var cParabiaugmentedTruncatedDodecahedron = 'ParabiaugmentedTruncatedDodecahedron'; // ParabiaugmentedTruncatedDodecahedron

exports.cParabiaugmentedTruncatedDodecahedron = cParabiaugmentedTruncatedDodecahedron;
var cParabidiminishedRhombicosidodecahedron = 'ParabidiminishedRhombicosidodecahedron'; // ParabidiminishedRhombicosidodecahedron

exports.cParabidiminishedRhombicosidodecahedron = cParabidiminishedRhombicosidodecahedron;
var cParabigyrateRhombicosidodecahedron = 'ParabigyrateRhombicosidodecahedron'; // ParabigyrateRhombicosidodecahedron

exports.cParabigyrateRhombicosidodecahedron = cParabigyrateRhombicosidodecahedron;
var cParagyrateDiminishedRhombicosidodecahedron = 'ParagyrateDiminishedRhombicosidodecahedron'; // ParagyrateDiminishedRhombicosidodecahedron

exports.cParagyrateDiminishedRhombicosidodecahedron = cParagyrateDiminishedRhombicosidodecahedron;
var cPentagonalBipyramid = 'PentagonalBipyramid'; // PentagonalBipyramid

exports.cPentagonalBipyramid = cPentagonalBipyramid;
var cPentagonalCupola = 'PentagonalCupola'; // PentagonalCupola

exports.cPentagonalCupola = cPentagonalCupola;
var cPentagonalGyrobicupola = 'PentagonalGyrobicupola'; // PentagonalGyrobicupola

exports.cPentagonalGyrobicupola = cPentagonalGyrobicupola;
var cPentagonalGyrocupolarotunda = 'PentagonalGyrocupolarotunda'; // PentagonalGyrocupolarotunda

exports.cPentagonalGyrocupolarotunda = cPentagonalGyrocupolarotunda;
var cPentagonalOrthobicupola = 'PentagonalOrthobicupola'; // PentagonalOrthobicupola

exports.cPentagonalOrthobicupola = cPentagonalOrthobicupola;
var cPentagonalOrthobirotunda = 'PentagonalOrthobirotunda'; // PentagonalOrthobirotunda

exports.cPentagonalOrthobirotunda = cPentagonalOrthobirotunda;
var cPentagonalOrthocupolarotunda = 'PentagonalOrthocupolarotunda'; // PentagonalOrthocupolarotunda

exports.cPentagonalOrthocupolarotunda = cPentagonalOrthocupolarotunda;
var cPentagonalPyramid = 'PentagonalPyramid'; // PentagonalPyramid

exports.cPentagonalPyramid = cPentagonalPyramid;
var cPentagonalRotunda = 'PentagonalRotunda'; // PentagonalRotunda

exports.cPentagonalRotunda = cPentagonalRotunda;
var cSnubDisphenoid = 'SnubDisphenoid'; // SnubDisphenoid

exports.cSnubDisphenoid = cSnubDisphenoid;
var cSnubSquareAntiprism = 'SnubSquareAntiprism'; // SnubSquareAntiprism

exports.cSnubSquareAntiprism = cSnubSquareAntiprism;
var cSphenocorona = 'Sphenocorona'; // Sphenocorona

exports.cSphenocorona = cSphenocorona;
var cSphenomegacorona = 'Sphenomegacorona'; // Sphenomegacorona

exports.cSphenomegacorona = cSphenomegacorona;
var cSquareCupola = 'SquareCupola'; // SquareCupola

exports.cSquareCupola = cSquareCupola;
var cSquareGyrobicupola = 'SquareGyrobicupola'; // SquareGyrobicupola

exports.cSquareGyrobicupola = cSquareGyrobicupola;
var cSquareOrthobicupola = 'SquareOrthobicupola'; // SquareOrthobicupola

exports.cSquareOrthobicupola = cSquareOrthobicupola;
var cSquarePyramid = 'SquarePyramid'; // SquarePyramid

exports.cSquarePyramid = cSquarePyramid;
var cTriangularBipyramid = 'TriangularBipyramid'; // TriangularBipyramid

exports.cTriangularBipyramid = cTriangularBipyramid;
var cTriangularCupola = 'TriangularCupola'; // TriangularCupola

exports.cTriangularCupola = cTriangularCupola;
var cTriangularHebesphenorotunda = 'TriangularHebesphenorotunda'; // TriangularHebesphenorotunda

exports.cTriangularHebesphenorotunda = cTriangularHebesphenorotunda;
var cTriangularOrthobicupola = 'TriangularOrthobicupola'; // TriangularOrthobicupola

exports.cTriangularOrthobicupola = cTriangularOrthobicupola;
var cTriaugmentedDodecahedron = 'TriaugmentedDodecahedron'; // TriaugmentedDodecahedron

exports.cTriaugmentedDodecahedron = cTriaugmentedDodecahedron;
var cTriaugmentedHexagonalPrism = 'TriaugmentedHexagonalPrism'; // TriaugmentedHexagonalPrism

exports.cTriaugmentedHexagonalPrism = cTriaugmentedHexagonalPrism;
var cTriaugmentedTriangularPrism = 'TriaugmentedTriangularPrism'; // TriaugmentedTriangularPrism

exports.cTriaugmentedTriangularPrism = cTriaugmentedTriangularPrism;
var cTriaugmentedTruncatedDodecahedron = 'TriaugmentedTruncatedDodecahedron'; // TriaugmentedTruncatedDodecahedron

exports.cTriaugmentedTruncatedDodecahedron = cTriaugmentedTruncatedDodecahedron;
var cTridiminishedIcosahedron = 'TridiminishedIcosahedron'; // TridiminishedIcosahedron

exports.cTridiminishedIcosahedron = cTridiminishedIcosahedron;
var cTridiminishedRhombicosidodecahedron = 'TridiminishedRhombicosidodecahedron'; // TridiminishedRhombicosidodecahedron

exports.cTridiminishedRhombicosidodecahedron = cTridiminishedRhombicosidodecahedron;
var cTrigyrateRhombicosidodecahedron = 'TrigyrateRhombicosidodecahedron'; // TrigyrateRhombicosidodecahedron
// Other Non-Uniform Polyhedra

exports.cTrigyrateRhombicosidodecahedron = cTrigyrateRhombicosidodecahedron;
var cPyramid = 'Pyramid'; // Pyramid

exports.cPyramid = cPyramid;
var cBipyramid = 'Bipyramid'; // Bipyramid

exports.cBipyramid = cBipyramid;
var cDisphenoid = 'Disphenoid'; // Disphenoid

exports.cDisphenoid = cDisphenoid;
var cParallelepiped = 'Parallelepiped'; // Parallelepiped

exports.cParallelepiped = cParallelepiped;
var cCuboid = 'Cuboid'; // Cuboid

exports.cCuboid = cCuboid;
var cRhombohedron = 'Rhombohedron'; // Rhombohedron

exports.cRhombohedron = cRhombohedron;
var cTrapezohedron = 'Trapezohedron'; // Trapezohedron

exports.cTrapezohedron = cTrapezohedron;
var cFrustum = 'Frustum'; // Frustum

exports.cFrustum = cFrustum;
var cTrapezoRhombicDodecahedron = 'TrapezoRhombicDodecahedron'; // TrapezoRhombicDodecahedron

exports.cTrapezoRhombicDodecahedron = cTrapezoRhombicDodecahedron;
var cRhomboHexagonalDodecahedron = 'RhomboHexagonalDodecahedron'; // RhomboHexagonalDodecahedron

exports.cRhomboHexagonalDodecahedron = cRhomboHexagonalDodecahedron;
var cTruncatedTrapezohedron = 'TruncatedTrapezohedron'; // TruncatedTrapezohedron

exports.cTruncatedTrapezohedron = cTruncatedTrapezohedron;
var cDeltahedron = 'Deltahedron'; // Deltahedron

exports.cDeltahedron = cDeltahedron;
var cZonohedron = 'Zonohedron'; // Zonohedron

exports.cZonohedron = cZonohedron;
var cPrismatoid = 'Prismatoid'; // Prismatoid

exports.cPrismatoid = cPrismatoid;
var cCupola = 'Cupola'; // Cupola

exports.cCupola = cCupola;
var cBicupola = 'Bicupola'; // Bicupola
// Honeycombs

exports.cBicupola = cBicupola;
var cTruncatedCubicHoneycomb = 'TruncatedCubicHoneycomb'; // TruncatedCubicHoneycomb

exports.cTruncatedCubicHoneycomb = cTruncatedCubicHoneycomb;
var cBitruncatedCubicHoneycomb = 'BitruncatedCubicHoneycomb'; // BitruncatedCubicHoneycomb

exports.cBitruncatedCubicHoneycomb = cBitruncatedCubicHoneycomb;
var cCantellatedCubicHoneycomb = 'CantellatedCubicHoneycomb'; // CantellatedCubicHoneycomb

exports.cCantellatedCubicHoneycomb = cCantellatedCubicHoneycomb;
var cCantitruncatedCubicHoneycomb = 'CantitruncatedCubicHoneycomb'; // CantitruncatedCubicHoneycomb

exports.cCantitruncatedCubicHoneycomb = cCantitruncatedCubicHoneycomb;
var cRectifiedCubicHoneycomb = 'RectifiedCubicHoneycomb'; // RectifiedCubicHoneycomb

exports.cRectifiedCubicHoneycomb = cRectifiedCubicHoneycomb;
var cRuncitruncatedCubicHoneycomb = 'RuncitruncatedCubicHoneycomb'; // RuncitruncatedCubicHoneycomb

exports.cRuncitruncatedCubicHoneycomb = cRuncitruncatedCubicHoneycomb;
var cOmnitruncatedCubicHoneycomb = 'OmnitruncatedCubicHoneycomb'; // OmnitruncatedCubicHoneycomb

exports.cOmnitruncatedCubicHoneycomb = cOmnitruncatedCubicHoneycomb;
var cTetrahedralOctahedralHoneycomb = 'TetrahedralOctahedralHoneycomb'; // TetrahedralOctahedralHoneycomb

exports.cTetrahedralOctahedralHoneycomb = cTetrahedralOctahedralHoneycomb;
var cTruncatedAlternatedCubicHoneycomb = 'TruncatedAlternatedCubicHoneycomb'; // TruncatedAlternatedCubicHoneycomb

exports.cTruncatedAlternatedCubicHoneycomb = cTruncatedAlternatedCubicHoneycomb;
var cCantitruncatedAlternatedCubicHoneycomb = 'CantitruncatedAlternatedCubicHoneycomb'; // CantitruncatedAlternatedCubicHoneycomb

exports.cCantitruncatedAlternatedCubicHoneycomb = cCantitruncatedAlternatedCubicHoneycomb;
var cRuncinatedAlternatedCubicHoneycomb = 'RuncinatedAlternatedCubicHoneycomb'; // RuncinatedAlternatedCubicHoneycomb

exports.cRuncinatedAlternatedCubicHoneycomb = cRuncinatedAlternatedCubicHoneycomb;
var cQuarterCubicHoneycomb = 'QuarterCubicHoneycomb'; // QuarterCubicHoneycomb

exports.cQuarterCubicHoneycomb = cQuarterCubicHoneycomb;
var cGyratedTetrahedralOctahedralHoneycomb = 'GyratedTetrahedralOctahedralHoneycomb'; // GyratedTetrahedralOctahedralHoneycomb

exports.cGyratedTetrahedralOctahedralHoneycomb = cGyratedTetrahedralOctahedralHoneycomb;
var cGyratedTriangularPrismaticHoneycomb = 'GyratedTriangularPrismaticHoneycomb'; // GyratedTriangularPrismaticHoneycomb

exports.cGyratedTriangularPrismaticHoneycomb = cGyratedTriangularPrismaticHoneycomb;
var cGyroelongatedAlternatedCubicHoneycomb = 'GyroelongatedAlternatedCubicHoneycomb'; // GyroelongatedAlternatedCubicHoneycomb

exports.cGyroelongatedAlternatedCubicHoneycomb = cGyroelongatedAlternatedCubicHoneycomb;
var cGyroelongatedTriangularPrismaticHoneycomb = 'GyroelongatedTriangularPrismaticHoneycomb'; // GyroelongatedTriangularPrismaticHoneycomb

exports.cGyroelongatedTriangularPrismaticHoneycomb = cGyroelongatedTriangularPrismaticHoneycomb;
var cElongatedTriangularPrismaticHoneycomb = 'ElongatedTriangularPrismaticHoneycomb'; // ElongatedTriangularPrismaticHoneycomb

exports.cElongatedTriangularPrismaticHoneycomb = cElongatedTriangularPrismaticHoneycomb;
var cElongatedAlternatedCubicHoneycomb = 'ElongatedAlternatedCubicHoneycomb'; // ElongatedAlternatedCubicHoneycomb

exports.cElongatedAlternatedCubicHoneycomb = cElongatedAlternatedCubicHoneycomb;
var cHexagonalPrismaticHoneycomb = 'HexagonalPrismaticHoneycomb'; // HexagonalPrismaticHoneycomb

exports.cHexagonalPrismaticHoneycomb = cHexagonalPrismaticHoneycomb;
var cTriangularPrismaticHoneycomb = 'TriangularPrismaticHoneycomb'; // TriangularPrismaticHoneycomb

exports.cTriangularPrismaticHoneycomb = cTriangularPrismaticHoneycomb;
var cTriangularHexagonalPrismaticHoneycomb = 'TriangularHexagonalPrismaticHoneycomb'; // TriangularHexagonalPrismaticHoneycomb

exports.cTriangularHexagonalPrismaticHoneycomb = cTriangularHexagonalPrismaticHoneycomb;
var cTruncatedHexagonalPrismaticHoneycomb = 'TruncatedHexagonalPrismaticHoneycomb'; // TruncatedHexagonalPrismaticHoneycomb

exports.cTruncatedHexagonalPrismaticHoneycomb = cTruncatedHexagonalPrismaticHoneycomb;
var cTruncatedSquarePrismaticHoneycomb = 'TruncatedSquarePrismaticHoneycomb'; // TruncatedSquarePrismaticHoneycomb

exports.cTruncatedSquarePrismaticHoneycomb = cTruncatedSquarePrismaticHoneycomb;
var cRhombitriangularHexagonalPrismaticHoneycomb = 'RhombitriangularHexagonalPrismaticHoneycomb'; // RhombitriangularHexagonalPrismaticHoneycomb

exports.cRhombitriangularHexagonalPrismaticHoneycomb = cRhombitriangularHexagonalPrismaticHoneycomb;
var cOmnitruncatedTriangularHexagonalPrismaticHoneycomb = 'OmnitruncatedTriangularHexagonalPrismaticHoneycomb'; // OmnitruncatedTriangularHexagonalPrismaticHoneycomb

exports.cOmnitruncatedTriangularHexagonalPrismaticHoneycomb = cOmnitruncatedTriangularHexagonalPrismaticHoneycomb;
var cSnubTriangularHexagonalPrismaticHoneycomb = 'SnubTriangularHexagonalPrismaticHoneycomb'; // SnubTriangularHexagonalPrismaticHoneycomb

exports.cSnubTriangularHexagonalPrismaticHoneycomb = cSnubTriangularHexagonalPrismaticHoneycomb;
var cSnubSquarePrismaticHoneycomb = 'SnubSquarePrismaticHoneycomb'; // SnubSquarePrismaticHoneycomb
// Dual Uniform Honeycomb

exports.cSnubSquarePrismaticHoneycomb = cSnubSquarePrismaticHoneycomb;
var cDisphenoidTetrahedralHoneycomb = 'DisphenoidTetrahedralHoneycomb'; // DisphenoidTetrahedralHoneycomb

exports.cDisphenoidTetrahedralHoneycomb = cDisphenoidTetrahedralHoneycomb;
var cRhombicDodecahedralHoneycomb = 'RhombicDodecahedralHoneycomb'; // RhombicDodecahedralHoneycomb
// Others Honeycombs

exports.cRhombicDodecahedralHoneycomb = cRhombicDodecahedralHoneycomb;
var cTrapezoRhombicDodecahedralHoneycomb = 'TrapezoRhombicDodecahedralHoneycomb'; // TrapezoRhombicDodecahedralHoneycomb

exports.cTrapezoRhombicDodecahedralHoneycomb = cTrapezoRhombicDodecahedralHoneycomb;
var cWeairePhelanStructure = 'WeairePhelanStructure'; // WeairePhelanStructure
// Other Prismatic Geometries

exports.cWeairePhelanStructure = cWeairePhelanStructure;
var cApeirogonalPrism = 'ApeirogonalPrism'; // ApeirogonalPrism

exports.cApeirogonalPrism = cApeirogonalPrism;
var cBifrustum = 'Bifrustum'; // Bifrustum

exports.cBifrustum = cBifrustum;
var cBoerdijkCoxeterHelix = 'BoerdijkCoxeterHelix'; // BoerdijkCoxeterHelix

exports.cBoerdijkCoxeterHelix = cBoerdijkCoxeterHelix;
var cCsaszarPolyhedron = 'CsaszarPolyhedron'; // CsaszarPolyhedron

exports.cCsaszarPolyhedron = cCsaszarPolyhedron;
var cFlexiblePolyhedron = 'FlexiblePolyhedron'; // FlexiblePolyhedron

exports.cFlexiblePolyhedron = cFlexiblePolyhedron;
var cGyroelongatedSquareDipyramid = 'GyroelongatedSquareDipyramid'; // GyroelongatedSquareDipyramid

exports.cGyroelongatedSquareDipyramid = cGyroelongatedSquareDipyramid;
var cHeronianTetrahedron = 'HeronianTetrahedron'; // HeronianTetrahedron

exports.cHeronianTetrahedron = cHeronianTetrahedron;
var cHexagonalBifrustum = 'HexagonalBifrustum'; // HexagonalBifrustum

exports.cHexagonalBifrustum = cHexagonalBifrustum;
var cHexagonalTruncatedTrapezohedron = 'HexagonalTruncatedTrapezohedron'; // HexagonalTruncatedTrapezohedron

exports.cHexagonalTruncatedTrapezohedron = cHexagonalTruncatedTrapezohedron;
var cHillTetrahedron = 'HillTetrahedron'; // HillTetrahedron

exports.cHillTetrahedron = cHillTetrahedron;
var cHolyhedron = 'Holyhedron'; // Holyhedron

exports.cHolyhedron = cHolyhedron;
var cInfiniteSkewPolyhedron = 'InfiniteSkewPolyhedron'; // InfiniteSkewPolyhedron

exports.cInfiniteSkewPolyhedron = cInfiniteSkewPolyhedron;
var cJessensIcosahedron = 'JessensIcosahedron'; // JessensIcosahedron

exports.cJessensIcosahedron = cJessensIcosahedron;
var cNearMissJohnsonSolid = 'NearMissJohnsonSolid'; // NearMissJohnsonSolid

exports.cNearMissJohnsonSolid = cNearMissJohnsonSolid;
var cPentagonalBifrustum = 'PentagonalBifrustum'; // PentagonalBifrustum

exports.cPentagonalBifrustum = cPentagonalBifrustum;
var cPolytetrahedron = 'Polytetrahedron'; // Polytetrahedron

exports.cPolytetrahedron = cPolytetrahedron;
var cPyritohedron = 'Pyritohedron'; // Pyritohedron

exports.cPyritohedron = cPyritohedron;
var cRhombicEnneacontahedron = 'RhombicEnneacontahedron'; // RhombicEnneacontahedron

exports.cRhombicEnneacontahedron = cRhombicEnneacontahedron;
var cRhombicIcosahedron = 'RhombicIcosahedron'; // RhombicIcosahedron

exports.cRhombicIcosahedron = cRhombicIcosahedron;
var cScalenohedron = 'Scalenohedron'; // Scalenohedron

exports.cScalenohedron = cScalenohedron;
var cSchonhardtPolyhedron = 'SchonhardtPolyhedron'; // SchonhardtPolyhedron

exports.cSchonhardtPolyhedron = cSchonhardtPolyhedron;
var cSquareBifrustum = 'SquareBifrustum'; // SquareBifrustum

exports.cSquareBifrustum = cSquareBifrustum;
var cSquareTruncatedTrapezohedron = 'SquareTruncatedTrapezohedron'; // SquareTruncatedTrapezohedron

exports.cSquareTruncatedTrapezohedron = cSquareTruncatedTrapezohedron;
var cSzilassiPolyhedron = 'SzilassiPolyhedron'; // SzilassiPolyhedron

exports.cSzilassiPolyhedron = cSzilassiPolyhedron;
var cTetradecahedron = 'Tetradecahedron'; // Tetradecahedron

exports.cTetradecahedron = cTetradecahedron;
var cTetradyakisHexahedron = 'TetradyakisHexahedron'; // TetradyakisHexahedron

exports.cTetradyakisHexahedron = cTetradyakisHexahedron;
var cTetratedDodecahedron = 'TetratedDodecahedron'; // TetratedDodecahedron

exports.cTetratedDodecahedron = cTetratedDodecahedron;
var cTriangularBifrustum = 'TriangularBifrustum'; // TriangularBifrustum

exports.cTriangularBifrustum = cTriangularBifrustum;
var cTruncatedRhombicDodecahedron = 'TruncatedRhombicDodecahedron'; // TruncatedRhombicDodecahedron

exports.cTruncatedRhombicDodecahedron = cTruncatedRhombicDodecahedron;
var cTruncatedTriakisTetrahedron = 'TruncatedTriakisTetrahedron'; // TruncatedTriakisTetrahedron

exports.cTruncatedTriakisTetrahedron = cTruncatedTriakisTetrahedron;
var cTridyakisIcosahedron = 'TridyakisIcosahedron'; // TridyakisIcosahedron

exports.cTridyakisIcosahedron = cTridyakisIcosahedron;
var cTrigonalTrapezohedron = 'TrigonalTrapezohedron'; // TrigonalTrapezohedron

exports.cTrigonalTrapezohedron = cTrigonalTrapezohedron;
var cWatermanPolyhedron = 'WatermanPolyhedron'; // WatermanPolyhedron

exports.cWatermanPolyhedron = cWatermanPolyhedron;
var cWedge = 'Wedge'; // Wedge
// Regular and Uniform Compound Polyhedra

exports.cWedge = cWedge;
var cCompoundOfCubeAndOctahedron = 'CompoundOfCubeAndOctahedron'; // CompoundOfCubeAndOctahedron

exports.cCompoundOfCubeAndOctahedron = cCompoundOfCubeAndOctahedron;
var cCompoundOfDodecahedronAndIcosahedron = 'CompoundOfDodecahedronAndIcosahedron'; // CompoundOfDodecahedronAndIcosahedron

exports.cCompoundOfDodecahedronAndIcosahedron = cCompoundOfDodecahedronAndIcosahedron;
var cCompoundOfEightOctahedraWithRotationalFreedom = 'CompoundOfEightOctahedraWithRotationalFreedom'; // CompoundOfEightOctahedraWithRotationalFreedom

exports.cCompoundOfEightOctahedraWithRotationalFreedom = cCompoundOfEightOctahedraWithRotationalFreedom;
var cCompoundOfEightTriangularPrisms = 'CompoundOfEightTriangularPrisms'; // CompoundOfEightTriangularPrisms

exports.cCompoundOfEightTriangularPrisms = cCompoundOfEightTriangularPrisms;
var cCompoundOfFiveCubes = 'CompoundOfFiveCubes'; // CompoundOfFiveCubes

exports.cCompoundOfFiveCubes = cCompoundOfFiveCubes;
var cCompoundOfFiveCuboctahedra = 'CompoundOfFiveCuboctahedra'; // CompoundOfFiveCuboctahedra

exports.cCompoundOfFiveCuboctahedra = cCompoundOfFiveCuboctahedra;
var cCompoundOfFiveCubohemioctahedra = 'CompoundOfFiveCubohemioctahedra'; // CompoundOfFiveCubohemioctahedra

exports.cCompoundOfFiveCubohemioctahedra = cCompoundOfFiveCubohemioctahedra;
var cCompoundOfFiveGreatCubicuboctahedra = 'CompoundOfFiveGreatCubicuboctahedra'; // CompoundOfFiveGreatCubicuboctahedra

exports.cCompoundOfFiveGreatCubicuboctahedra = cCompoundOfFiveGreatCubicuboctahedra;
var cCompoundOfFiveGreatDodecahedra = 'CompoundOfFiveGreatDodecahedra'; // CompoundOfFiveGreatDodecahedra

exports.cCompoundOfFiveGreatDodecahedra = cCompoundOfFiveGreatDodecahedra;
var cCompoundOfFiveGreatIcosahedra = 'CompoundOfFiveGreatIcosahedra'; // CompoundOfFiveGreatIcosahedra

exports.cCompoundOfFiveGreatIcosahedra = cCompoundOfFiveGreatIcosahedra;
var cCompoundOfFiveGreatRhombihexahedra = 'CompoundOfFiveGreatRhombihexahedra'; // CompoundOfFiveGreatRhombihexahedra

exports.cCompoundOfFiveGreatRhombihexahedra = cCompoundOfFiveGreatRhombihexahedra;
var cCompoundOfFiveIcosahedra = 'CompoundOfFiveIcosahedra'; // CompoundOfFiveIcosahedra

exports.cCompoundOfFiveIcosahedra = cCompoundOfFiveIcosahedra;
var cCompoundOfFiveOctahedra = 'CompoundOfFiveOctahedra'; // CompoundOfFiveOctahedra

exports.cCompoundOfFiveOctahedra = cCompoundOfFiveOctahedra;
var cCompoundOfFiveOctahemioctahedra = 'CompoundOfFiveOctahemioctahedra'; // CompoundOfFiveOctahemioctahedra

exports.cCompoundOfFiveOctahemioctahedra = cCompoundOfFiveOctahemioctahedra;
var cCompoundOfFiveSmallCubicuboctahedra = 'CompoundOfFiveSmallCubicuboctahedra'; // CompoundOfFiveSmallCubicuboctahedra

exports.cCompoundOfFiveSmallCubicuboctahedra = cCompoundOfFiveSmallCubicuboctahedra;
var cCompoundOfFiveSmallRhombicuboctahedra = 'CompoundOfFiveSmallRhombicuboctahedra'; // CompoundOfFiveSmallRhombicuboctahedra

exports.cCompoundOfFiveSmallRhombicuboctahedra = cCompoundOfFiveSmallRhombicuboctahedra;
var cCompoundOfFiveSmallRhombihexahedra = 'CompoundOfFiveSmallRhombihexahedra'; // CompoundOfFiveSmallRhombihexahedra

exports.cCompoundOfFiveSmallRhombihexahedra = cCompoundOfFiveSmallRhombihexahedra;
var cCompoundOfFiveSmallStellatedDodecahedra = 'CompoundOfFiveSmallStellatedDodecahedra'; // CompoundOfFiveSmallStellatedDodecahedra

exports.cCompoundOfFiveSmallStellatedDodecahedra = cCompoundOfFiveSmallStellatedDodecahedra;
var cCompoundOfFiveStellatedTruncatedCubes = 'CompoundOfFiveStellatedTruncatedCubes'; // CompoundOfFiveStellatedTruncatedCubes

exports.cCompoundOfFiveStellatedTruncatedCubes = cCompoundOfFiveStellatedTruncatedCubes;
var cCompoundOfFiveTetrahedra = 'CompoundOfFiveTetrahedra'; // CompoundOfFiveTetrahedra

exports.cCompoundOfFiveTetrahedra = cCompoundOfFiveTetrahedra;
var cCompoundOfFiveTetrahemihexahedra = 'CompoundOfFiveTetrahemihexahedra'; // CompoundOfFiveTetrahemihexahedra

exports.cCompoundOfFiveTetrahemihexahedra = cCompoundOfFiveTetrahemihexahedra;
var cCompoundOfFiveTruncatedCubes = 'CompoundOfFiveTruncatedCubes'; // CompoundOfFiveTruncatedCubes

exports.cCompoundOfFiveTruncatedCubes = cCompoundOfFiveTruncatedCubes;
var cCompoundOfFiveTruncatedTetrahedra = 'CompoundOfFiveTruncatedTetrahedra'; // CompoundOfFiveTruncatedTetrahedra

exports.cCompoundOfFiveTruncatedTetrahedra = cCompoundOfFiveTruncatedTetrahedra;
var cCompoundOfFiveUniformGreatRhombicuboctahedra = 'CompoundOfFiveUniformGreatRhombicuboctahedra'; // CompoundOfFiveUniformGreatRhombicuboctahedra

exports.cCompoundOfFiveUniformGreatRhombicuboctahedra = cCompoundOfFiveUniformGreatRhombicuboctahedra;
var cCompoundOfFourHexagonalPrisms = 'CompoundOfFourHexagonalPrisms'; // CompoundOfFourHexagonalPrisms

exports.cCompoundOfFourHexagonalPrisms = cCompoundOfFourHexagonalPrisms;
var cCompoundOfFourOctahedra = 'CompoundOfFourOctahedra'; // CompoundOfFourOctahedra

exports.cCompoundOfFourOctahedra = cCompoundOfFourOctahedra;
var cCompoundOfFourOctahedraWithRotationalFreedom = 'CompoundOfFourOctahedraWithRotationalFreedom'; // CompoundOfFourOctahedraWithRotationalFreedom

exports.cCompoundOfFourOctahedraWithRotationalFreedom = cCompoundOfFourOctahedraWithRotationalFreedom;
var cCompoundOfFourTetrahedra = 'CompoundOfFourTetrahedra'; // CompoundOfFourTetrahedra

exports.cCompoundOfFourTetrahedra = cCompoundOfFourTetrahedra;
var cCompoundOfFourTriangularPrisms = 'CompoundOfFourTriangularPrisms'; // CompoundOfFourTriangularPrisms

exports.cCompoundOfFourTriangularPrisms = cCompoundOfFourTriangularPrisms;
var cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron = 'CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron'; // CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron

exports.cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron = cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron;
var cCompoundOfSixCubesWithRotationalFreedom = 'CompoundOfSixCubesWithRotationalFreedom'; // CompoundOfSixCubesWithRotationalFreedom

exports.cCompoundOfSixCubesWithRotationalFreedom = cCompoundOfSixCubesWithRotationalFreedom;
var cCompoundOfSixDecagonalPrisms = 'CompoundOfSixDecagonalPrisms'; // CompoundOfSixDecagonalPrisms

exports.cCompoundOfSixDecagonalPrisms = cCompoundOfSixDecagonalPrisms;
var cCompoundOfSixDecagrammicPrisms = 'CompoundOfSixDecagrammicPrisms'; // CompoundOfSixDecagrammicPrisms

exports.cCompoundOfSixDecagrammicPrisms = cCompoundOfSixDecagrammicPrisms;
var cCompoundOfSixPentagonalAntiprisms = 'CompoundOfSixPentagonalAntiprisms'; // CompoundOfSixPentagonalAntiprisms

exports.cCompoundOfSixPentagonalAntiprisms = cCompoundOfSixPentagonalAntiprisms;
var cCompoundOfSixPentagonalPrisms = 'CompoundOfSixPentagonalPrisms'; // CompoundOfSixPentagonalPrisms

exports.cCompoundOfSixPentagonalPrisms = cCompoundOfSixPentagonalPrisms;
var cCompoundOfSixPentagrammicAntiprisms = 'CompoundOfSixPentagrammicAntiprisms'; // CompoundOfSixPentagrammicAntiprisms

exports.cCompoundOfSixPentagrammicAntiprisms = cCompoundOfSixPentagrammicAntiprisms;
var cCompoundOfSixPentagrammicCrossedAntiprisms = 'CompoundOfSixPentagrammicCrossedAntiprisms'; // CompoundOfSixPentagrammicCrossedAntiprisms

exports.cCompoundOfSixPentagrammicCrossedAntiprisms = cCompoundOfSixPentagrammicCrossedAntiprisms;
var cCompoundOfSixPentagrammicPrisms = 'CompoundOfSixPentagrammicPrisms'; // CompoundOfSixPentagrammicPrisms

exports.cCompoundOfSixPentagrammicPrisms = cCompoundOfSixPentagrammicPrisms;
var cCompoundOfSixSquareAntiprisms = 'CompoundOfSixSquareAntiprisms'; // CompoundOfSixSquareAntiprisms

exports.cCompoundOfSixSquareAntiprisms = cCompoundOfSixSquareAntiprisms;
var cCompoundOfSixTetrahedra = 'CompoundOfSixTetrahedra'; // CompoundOfSixTetrahedra

exports.cCompoundOfSixTetrahedra = cCompoundOfSixTetrahedra;
var cCompoundOfSixTetrahedraWithRotationalFreedom = 'CompoundOfSixTetrahedraWithRotationalFreedom'; // CompoundOfSixTetrahedraWithRotationalFreedom

exports.cCompoundOfSixTetrahedraWithRotationalFreedom = cCompoundOfSixTetrahedraWithRotationalFreedom;
var cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron = 'CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron'; // CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron

exports.cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron = cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron;
var cCompoundOfTenHexagonalPrisms = 'CompoundOfTenHexagonalPrisms'; // CompoundOfTenHexagonalPrisms

exports.cCompoundOfTenHexagonalPrisms = cCompoundOfTenHexagonalPrisms;
var cCompoundOfTenOctahedra = 'CompoundOfTenOctahedra'; // CompoundOfTenOctahedra

exports.cCompoundOfTenOctahedra = cCompoundOfTenOctahedra;
var cCompoundOfTenTetrahedra = 'CompoundOfTenTetrahedra'; // CompoundOfTenTetrahedra

exports.cCompoundOfTenTetrahedra = cCompoundOfTenTetrahedra;
var cCompoundOfTenTriangularPrisms = 'CompoundOfTenTriangularPrisms'; // CompoundOfTenTriangularPrisms

exports.cCompoundOfTenTriangularPrisms = cCompoundOfTenTriangularPrisms;
var cCompoundOfTenTruncatedTetrahedra = 'CompoundOfTenTruncatedTetrahedra'; // CompoundOfTenTruncatedTetrahedra

exports.cCompoundOfTenTruncatedTetrahedra = cCompoundOfTenTruncatedTetrahedra;
var cCompoundOfThreeCubes = 'CompoundOfThreeCubes'; // CompoundOfThreeCubes

exports.cCompoundOfThreeCubes = cCompoundOfThreeCubes;
var cCompoundOfThreeSquareAntiprisms = 'CompoundOfThreeSquareAntiprisms'; // CompoundOfThreeSquareAntiprisms

exports.cCompoundOfThreeSquareAntiprisms = cCompoundOfThreeSquareAntiprisms;
var cCompoundOfThreeTetrahedra = 'CompoundOfThreeTetrahedra'; // CompoundOfThreeTetrahedra

exports.cCompoundOfThreeTetrahedra = cCompoundOfThreeTetrahedra;
var cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom'; // CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom

exports.cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom = cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom;
var cCompoundOfTwelvePentagonalPrisms = 'CompoundOfTwelvePentagonalPrisms'; // CompoundOfTwelvePentagonalPrisms

exports.cCompoundOfTwelvePentagonalPrisms = cCompoundOfTwelvePentagonalPrisms;
var cCompoundOfTwelvePentagrammicAntiprisms = 'CompoundOfTwelvePentagrammicAntiprisms'; // CompoundOfTwelvePentagrammicAntiprisms

exports.cCompoundOfTwelvePentagrammicAntiprisms = cCompoundOfTwelvePentagrammicAntiprisms;
var cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom'; // CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom

exports.cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom = cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom;
var cCompoundOfTwelvePentagrammicPrisms = 'CompoundOfTwelvePentagrammicPrisms'; // CompoundOfTwelvePentagrammicPrisms

exports.cCompoundOfTwelvePentagrammicPrisms = cCompoundOfTwelvePentagrammicPrisms;
var cCompoundOfTwelveTetrahedraWithRotationalFreedom = 'CompoundOfTwelveTetrahedraWithRotationalFreedom'; // CompoundOfTwelveTetrahedraWithRotationalFreedom

exports.cCompoundOfTwelveTetrahedraWithRotationalFreedom = cCompoundOfTwelveTetrahedraWithRotationalFreedom;
var cCompoundOfTwentyOctahedra = 'CompoundOfTwentyOctahedra'; // CompoundOfTwentyOctahedra

exports.cCompoundOfTwentyOctahedra = cCompoundOfTwentyOctahedra;
var cCompoundOfTwentyOctahedraWithRotationalFreedom = 'CompoundOfTwentyOctahedraWithRotationalFreedom'; // CompoundOfTwentyOctahedraWithRotationalFreedom

exports.cCompoundOfTwentyOctahedraWithRotationalFreedom = cCompoundOfTwentyOctahedraWithRotationalFreedom;
var cCompoundOfTwentyTetrahemihexahedra = 'CompoundOfTwentyTetrahemihexahedra'; // CompoundOfTwentyTetrahemihexahedra

exports.cCompoundOfTwentyTetrahemihexahedra = cCompoundOfTwentyTetrahemihexahedra;
var cCompoundOfTwentyTriangularPrisms = 'CompoundOfTwentyTriangularPrisms'; // CompoundOfTwentyTriangularPrisms

exports.cCompoundOfTwentyTriangularPrisms = cCompoundOfTwentyTriangularPrisms;
var cCompoundOfTwoGreatDodecahedra = 'CompoundOfTwoGreatDodecahedra'; // CompoundOfTwoGreatDodecahedra

exports.cCompoundOfTwoGreatDodecahedra = cCompoundOfTwoGreatDodecahedra;
var cCompoundOfTwoGreatIcosahedra = 'CompoundOfTwoGreatIcosahedra'; // CompoundOfTwoGreatIcosahedra

exports.cCompoundOfTwoGreatIcosahedra = cCompoundOfTwoGreatIcosahedra;
var cCompoundOfTwoGreatInvertedSnubIcosidodecahedra = 'CompoundOfTwoGreatInvertedSnubIcosidodecahedra'; // CompoundOfTwoGreatInvertedSnubIcosidodecahedra

exports.cCompoundOfTwoGreatInvertedSnubIcosidodecahedra = cCompoundOfTwoGreatInvertedSnubIcosidodecahedra;
var cCompoundOfTwoGreatRetrosnubIcosidodecahedra = 'CompoundOfTwoGreatRetrosnubIcosidodecahedra'; // CompoundOfTwoGreatRetrosnubIcosidodecahedra

exports.cCompoundOfTwoGreatRetrosnubIcosidodecahedra = cCompoundOfTwoGreatRetrosnubIcosidodecahedra;
var cCompoundOfTwoGreatSnubIcosidodecahedra = 'CompoundOfTwoGreatSnubIcosidodecahedra'; // CompoundOfTwoGreatSnubIcosidodecahedra

exports.cCompoundOfTwoGreatSnubIcosidodecahedra = cCompoundOfTwoGreatSnubIcosidodecahedra;
var cCompoundOfTwoIcosahedra = 'CompoundOfTwoIcosahedra'; // CompoundOfTwoIcosahedra

exports.cCompoundOfTwoIcosahedra = cCompoundOfTwoIcosahedra;
var cCompoundOfTwoInvertedSnubDodecadodecahedra = 'CompoundOfTwoInvertedSnubDodecadodecahedra'; // CompoundOfTwoInvertedSnubDodecadodecahedra

exports.cCompoundOfTwoInvertedSnubDodecadodecahedra = cCompoundOfTwoInvertedSnubDodecadodecahedra;
var cCompoundOfTwoSmallStellatedDodecahedra = 'CompoundOfTwoSmallStellatedDodecahedra'; // CompoundOfTwoSmallStellatedDodecahedra

exports.cCompoundOfTwoSmallStellatedDodecahedra = cCompoundOfTwoSmallStellatedDodecahedra;
var cCompoundOfTwoSnubCubes = 'CompoundOfTwoSnubCubes'; // CompoundOfTwoSnubCubes

exports.cCompoundOfTwoSnubCubes = cCompoundOfTwoSnubCubes;
var cCompoundOfTwoSnubDodecadodecahedra = 'CompoundOfTwoSnubDodecadodecahedra'; // CompoundOfTwoSnubDodecadodecahedra

exports.cCompoundOfTwoSnubDodecadodecahedra = cCompoundOfTwoSnubDodecadodecahedra;
var cCompoundOfTwoSnubDodecahedra = 'CompoundOfTwoSnubDodecahedra'; // CompoundOfTwoSnubDodecahedra

exports.cCompoundOfTwoSnubDodecahedra = cCompoundOfTwoSnubDodecahedra;
var cCompoundOfTwoSnubIcosidodecadodecahedra = 'CompoundOfTwoSnubIcosidodecadodecahedra'; // CompoundOfTwoSnubIcosidodecadodecahedra

exports.cCompoundOfTwoSnubIcosidodecadodecahedra = cCompoundOfTwoSnubIcosidodecadodecahedra;
var cCompoundOfTwoTruncatedTetrahedra = 'CompoundOfTwoTruncatedTetrahedra'; // CompoundOfTwoTruncatedTetrahedra

exports.cCompoundOfTwoTruncatedTetrahedra = cCompoundOfTwoTruncatedTetrahedra;
var cPrismaticCompoundOfAntiprisms = 'PrismaticCompoundOfAntiprisms'; // PrismaticCompoundOfAntiprisms

exports.cPrismaticCompoundOfAntiprisms = cPrismaticCompoundOfAntiprisms;
var cPrismaticCompoundOfAntiprismsWithRotationalFreedom = 'PrismaticCompoundOfAntiprismsWithRotationalFreedom'; // PrismaticCompoundOfAntiprismsWithRotationalFreedom

exports.cPrismaticCompoundOfAntiprismsWithRotationalFreedom = cPrismaticCompoundOfAntiprismsWithRotationalFreedom;
var cPrismaticCompoundOfPrisms = 'PrismaticCompoundOfPrisms'; // PrismaticCompoundOfPrisms

exports.cPrismaticCompoundOfPrisms = cPrismaticCompoundOfPrisms;
var cPrismaticCompoundOfPrismsWithRotationalFreedom = 'PrismaticCompoundOfPrismsWithRotationalFreedom'; // PrismaticCompoundOfPrismsWithRotationalFreedom
// 4D Polytopes

exports.cPrismaticCompoundOfPrismsWithRotationalFreedom = cPrismaticCompoundOfPrismsWithRotationalFreedom;
var cHecatonicosachoron = 'Hecatonicosachoron'; // Hecatonicosachoron

exports.cHecatonicosachoron = cHecatonicosachoron;
var cHexacosichoron = 'Hexacosichoron'; // Hexacosichoron

exports.cHexacosichoron = cHexacosichoron;
var cHexadecachoron = 'Hexadecachoron'; // Hexadecachoron

exports.cHexadecachoron = cHexadecachoron;
var cPentachoron = 'Pentachoron'; // Pentachoron

exports.cPentachoron = cPentachoron;
var cIcositetrachoron = 'Icositetrachoron'; // Icositetrachoron

exports.cIcositetrachoron = cIcositetrachoron;
var cTesseract = 'Tesseract'; // Tesseract
// Other Geometry

exports.cTesseract = cTesseract;
var cSphericalCone = 'SphericalCone'; // SphericalCone
// Schläfli–Hess 4D Polytope

exports.cSphericalCone = cSphericalCone;
var cIcosahedral_120Cell = 'Icosahedral_120Cell'; // Icosahedral_120Cell

exports.cIcosahedral_120Cell = cIcosahedral_120Cell;
var cSmallStellated_120Cell = 'SmallStellated_120Cell'; // SmallStellated_120Cell

exports.cSmallStellated_120Cell = cSmallStellated_120Cell;
var cGreat_120Cell = 'Great_120Cell'; // Great_120Cell

exports.cGreat_120Cell = cGreat_120Cell;
var cGrand_120Cell = 'Grand_120Cell'; // Grand_120Cell

exports.cGrand_120Cell = cGrand_120Cell;
var cGreatStellated_120Cell = 'GreatStellated_120Cell'; // GreatStellated_120Cell

exports.cGreatStellated_120Cell = cGreatStellated_120Cell;
var cGrandStellated_120Cell = 'GrandStellated_120Cell'; // GrandStellated_120Cell

exports.cGrandStellated_120Cell = cGrandStellated_120Cell;
var cGreatGrand_120Cell = 'GreatGrand_120Cell'; // GreatGrand_120Cell

exports.cGreatGrand_120Cell = cGreatGrand_120Cell;
var cGreatIcosahedral_120Cell = 'GreatIcosahedral_120Cell'; // GreatIcosahedral_120Cell

exports.cGreatIcosahedral_120Cell = cGreatIcosahedral_120Cell;
var cGrand_600Cell = 'Grand_600Cell'; // Grand_600Cell

exports.cGrand_600Cell = cGrand_600Cell;
var cGreatGrandStellated_120Cell = 'GreatGrandStellated_120Cell'; // GreatGrandStellated_120Cell
// Uniform 4D Polytope

exports.cGreatGrandStellated_120Cell = cGreatGrandStellated_120Cell;
var cRectified_5Cell = 'Rectified_5Cell'; // Rectified_5Cell

exports.cRectified_5Cell = cRectified_5Cell;
var cTruncated_5Cell = 'Truncated_5Cell'; // Truncated_5Cell

exports.cTruncated_5Cell = cTruncated_5Cell;
var cCantellated_5Cell = 'Cantellated_5Cell'; // Cantellated_5Cell

exports.cCantellated_5Cell = cCantellated_5Cell;
var cRuncinated_5Cell = 'Runcinated_5Cell'; // Runcinated_5Cell

exports.cRuncinated_5Cell = cRuncinated_5Cell;
var cRectifiedTesseract = 'RectifiedTesseract'; // RectifiedTesseract

exports.cRectifiedTesseract = cRectifiedTesseract;
var cTruncatedTesseract = 'TruncatedTesseract'; // TruncatedTesseract

exports.cTruncatedTesseract = cTruncatedTesseract;
var cCantellatedTesseract = 'CantellatedTesseract'; // CantellatedTesseract

exports.cCantellatedTesseract = cCantellatedTesseract;
var cRuncinatedTesseract = 'RuncinatedTesseract'; // RuncinatedTesseract

exports.cRuncinatedTesseract = cRuncinatedTesseract;
var cRectified_16Cell = 'Rectified_16Cell'; // Rectified_16Cell

exports.cRectified_16Cell = cRectified_16Cell;
var cTruncated_16Cell = 'Truncated_16Cell'; // Truncated_16Cell

exports.cTruncated_16Cell = cTruncated_16Cell;
var cRectified_24Cell = 'Rectified_24Cell'; // Rectified_24Cell

exports.cRectified_24Cell = cRectified_24Cell;
var cTruncated_24Cell = 'Truncated_24Cell'; // Truncated_24Cell

exports.cTruncated_24Cell = cTruncated_24Cell;
var cCantellated_24Cell = 'Cantellated_24Cell'; // Cantellated_24Cell

exports.cCantellated_24Cell = cCantellated_24Cell;
var cRuncinated_24Cell = 'Runcinated_24Cell'; // Runcinated_24Cell

exports.cRuncinated_24Cell = cRuncinated_24Cell;
var cSnub_24Cell = 'Snub_24Cell'; // Snub_24Cell

exports.cSnub_24Cell = cSnub_24Cell;
var cRectified_120Cell = 'Rectified_120Cell'; // Rectified_120Cell

exports.cRectified_120Cell = cRectified_120Cell;
var cTruncated_120Cell = 'Truncated_120Cell'; // Truncated_120Cell

exports.cTruncated_120Cell = cTruncated_120Cell;
var cCantellated_120Cell = 'Cantellated_120Cell'; // Cantellated_120Cell

exports.cCantellated_120Cell = cCantellated_120Cell;
var cRuncinated_120Cell = 'Runcinated_120Cell'; // Runcinated_120Cell

exports.cRuncinated_120Cell = cRuncinated_120Cell;
var cRectified_600Cell = 'Rectified_600Cell'; // Rectified_600Cell

exports.cRectified_600Cell = cRectified_600Cell;
var cTruncated_600Cell = 'Truncated_600Cell'; // Truncated_600Cell

exports.cTruncated_600Cell = cTruncated_600Cell;
var cCantellated_600Cell = 'Cantellated_600Cell'; // Cantellated_600Cell
// Prismatic Uniform Polychoron

exports.cCantellated_600Cell = cCantellated_600Cell;
var cGrandAntiprism = 'GrandAntiprism'; // GrandAntiprism

exports.cGrandAntiprism = cGrandAntiprism;
var cDuoprism = 'Duoprism'; // Duoprism

exports.cDuoprism = cDuoprism;
var cTetrahedralPrism = 'TetrahedralPrism'; // TetrahedralPrism

exports.cTetrahedralPrism = cTetrahedralPrism;
var cTruncatedTetrahedralPrism = 'TruncatedTetrahedralPrism'; // TruncatedTetrahedralPrism

exports.cTruncatedTetrahedralPrism = cTruncatedTetrahedralPrism;
var cTruncatedCubicPrism = 'TruncatedCubicPrism'; // TruncatedCubicPrism

exports.cTruncatedCubicPrism = cTruncatedCubicPrism;
var cTruncatedOctahedralPrism = 'TruncatedOctahedralPrism'; // TruncatedOctahedralPrism

exports.cTruncatedOctahedralPrism = cTruncatedOctahedralPrism;
var cCuboctahedralPrism = 'CuboctahedralPrism'; // CuboctahedralPrism

exports.cCuboctahedralPrism = cCuboctahedralPrism;
var cRhombicuboctahedralPrism = 'RhombicuboctahedralPrism'; // RhombicuboctahedralPrism

exports.cRhombicuboctahedralPrism = cRhombicuboctahedralPrism;
var cTruncatedCuboctahedralPrism = 'TruncatedCuboctahedralPrism'; // TruncatedCuboctahedralPrism

exports.cTruncatedCuboctahedralPrism = cTruncatedCuboctahedralPrism;
var cSnubCubicPrism = 'SnubCubicPrism'; // SnubCubicPrism

exports.cSnubCubicPrism = cSnubCubicPrism;
var cTruncatedDodecahedralPrism = 'TruncatedDodecahedralPrism'; // TruncatedDodecahedralPrism

exports.cTruncatedDodecahedralPrism = cTruncatedDodecahedralPrism;
var cTruncatedIcosahedralPrism = 'TruncatedIcosahedralPrism'; // TruncatedIcosahedralPrism

exports.cTruncatedIcosahedralPrism = cTruncatedIcosahedralPrism;
var cIcosidodecahedralPrism = 'IcosidodecahedralPrism'; // IcosidodecahedralPrism

exports.cIcosidodecahedralPrism = cIcosidodecahedralPrism;
var cRhombicosidodecahedralPrism = 'RhombicosidodecahedralPrism'; // RhombicosidodecahedralPrism

exports.cRhombicosidodecahedralPrism = cRhombicosidodecahedralPrism;
var cTruncatedIcosidodecahedralPrism = 'TruncatedIcosidodecahedralPrism'; // TruncatedIcosidodecahedralPrism

exports.cTruncatedIcosidodecahedralPrism = cTruncatedIcosidodecahedralPrism;
var cSnubDodecahedralPrism = 'SnubDodecahedralPrism'; // SnubDodecahedralPrism

exports.cSnubDodecahedralPrism = cSnubDodecahedralPrism;
var cUniformAntiprismaticPrism = 'UniformAntiprismaticPrism'; // UniformAntiprismaticPrism
// 5D Space, 5D Polytope and Uniform 5D Polytope

exports.cUniformAntiprismaticPrism = cUniformAntiprismaticPrism;
var cRectified_5Simplex = 'Rectified_5Simplex'; // Rectified_5Simplex

exports.cRectified_5Simplex = cRectified_5Simplex;
var cTruncated_5Simplex = 'Truncated_5Simplex'; // Truncated_5Simplex

exports.cTruncated_5Simplex = cTruncated_5Simplex;
var cCantellated_5Simplex = 'Cantellated_5Simplex'; // Cantellated_5Simplex

exports.cCantellated_5Simplex = cCantellated_5Simplex;
var cRuncinated_5Simplex = 'Runcinated_5Simplex'; // Runcinated_5Simplex

exports.cRuncinated_5Simplex = cRuncinated_5Simplex;
var cStericated_5Simplex = 'Stericated_5Simplex'; // Stericated_5Simplex

exports.cStericated_5Simplex = cStericated_5Simplex;
var c5Demicube = '5Demicube'; // 5Demicube

exports.c5Demicube = c5Demicube;
var cTruncated_5Demicube = 'Truncated_5Demicube'; // Truncated_5Demicube

exports.cTruncated_5Demicube = cTruncated_5Demicube;
var cCantellated_5Demicube = 'Cantellated_5Demicube'; // Cantellated_5Demicube

exports.cCantellated_5Demicube = cCantellated_5Demicube;
var cRuncinated_5Demicube = 'Runcinated_5Demicube'; // Runcinated_5Demicube

exports.cRuncinated_5Demicube = cRuncinated_5Demicube;
var cRectified_5Cube = 'Rectified_5Cube'; // Rectified_5Cube

exports.cRectified_5Cube = cRectified_5Cube;
var cTruncated_5Cube = 'Truncated_5Cube'; // Truncated_5Cube

exports.cTruncated_5Cube = cTruncated_5Cube;
var cCantellated_5Cube = 'Cantellated_5Cube'; // Cantellated_5Cube

exports.cCantellated_5Cube = cCantellated_5Cube;
var cRuncinated_5Cube = 'Runcinated_5Cube'; // Runcinated_5Cube

exports.cRuncinated_5Cube = cRuncinated_5Cube;
var cStericated_5Cube = 'Stericated_5Cube'; // Stericated_5Cube

exports.cStericated_5Cube = cStericated_5Cube;
var cRectified_5Orthoplex = 'Rectified_5Orthoplex'; // Rectified_5Orthoplex

exports.cRectified_5Orthoplex = cRectified_5Orthoplex;
var cTruncated_5Orthoplex = 'Truncated_5Orthoplex'; // Truncated_5Orthoplex

exports.cTruncated_5Orthoplex = cTruncated_5Orthoplex;
var cCantellated_5Orthoplex = 'Cantellated_5Orthoplex'; // Cantellated_5Orthoplex

exports.cCantellated_5Orthoplex = cCantellated_5Orthoplex;
var cRuncinated_5Orthoplex = 'Runcinated_5Orthoplex'; // Runcinated_5Orthoplex
// 5D Honeycombs

exports.cRuncinated_5Orthoplex = cRuncinated_5Orthoplex;
var c5CubicHoneycomb = '5CubicHoneycomb'; // 5CubicHoneycomb

exports.c5CubicHoneycomb = c5CubicHoneycomb;
var c5SimplexHoneycomb = '5SimplexHoneycomb'; // 5SimplexHoneycomb

exports.c5SimplexHoneycomb = c5SimplexHoneycomb;
var cTruncated_5SimplexHoneycomb = 'Truncated_5SimplexHoneycomb'; // Truncated_5SimplexHoneycomb

exports.cTruncated_5SimplexHoneycomb = cTruncated_5SimplexHoneycomb;
var c5DemicubicHoneycomb = '5DemicubicHoneycomb'; // 5DemicubicHoneycomb
// 6D Space, 6D Polytope and Uniform 6D Polytope

exports.c5DemicubicHoneycomb = c5DemicubicHoneycomb;
var cRectified_6Simplex = 'Rectified_6Simplex'; // Rectified_6Simplex

exports.cRectified_6Simplex = cRectified_6Simplex;
var cTruncated_6Simplex = 'Truncated_6Simplex'; // Truncated_6Simplex

exports.cTruncated_6Simplex = cTruncated_6Simplex;
var cCantellated_6Simplex = 'Cantellated_6Simplex'; // Cantellated_6Simplex

exports.cCantellated_6Simplex = cCantellated_6Simplex;
var cRuncinated_6Simplex = 'Runcinated_6Simplex'; // Runcinated_6Simplex

exports.cRuncinated_6Simplex = cRuncinated_6Simplex;
var cStericated_6Simplex = 'Stericated_6Simplex'; // Stericated_6Simplex

exports.cStericated_6Simplex = cStericated_6Simplex;
var cPentellated_6Simplex = 'Pentellated_6Simplex'; // Pentellated_6Simplex

exports.cPentellated_6Simplex = cPentellated_6Simplex;
var c6Demicube = '6Demicube'; // 6Demicube

exports.c6Demicube = c6Demicube;
var cTruncated_6Demicube = 'Truncated_6Demicube'; // Truncated_6Demicube

exports.cTruncated_6Demicube = cTruncated_6Demicube;
var cCantellated_6Demicube = 'Cantellated_6Demicube'; // Cantellated_6Demicube

exports.cCantellated_6Demicube = cCantellated_6Demicube;
var cRuncinated_6Demicube = 'Runcinated_6Demicube'; // Runcinated_6Demicube

exports.cRuncinated_6Demicube = cRuncinated_6Demicube;
var cStericated_6Demicube = 'Stericated_6Demicube'; // Stericated_6Demicube

exports.cStericated_6Demicube = cStericated_6Demicube;
var cRectified_6Cube = 'Rectified_6Cube'; // Rectified_6Cube

exports.cRectified_6Cube = cRectified_6Cube;
var cTruncated_6Cube = 'Truncated_6Cube'; // Truncated_6Cube

exports.cTruncated_6Cube = cTruncated_6Cube;
var cCantellated_6Cube = 'Cantellated_6Cube'; // Cantellated_6Cube

exports.cCantellated_6Cube = cCantellated_6Cube;
var cRuncinated_6Cube = 'Runcinated_6Cube'; // Runcinated_6Cube

exports.cRuncinated_6Cube = cRuncinated_6Cube;
var cStericated_6Cube = 'Stericated_6Cube'; // Stericated_6Cube

exports.cStericated_6Cube = cStericated_6Cube;
var cPentellated_6Cube = 'Pentellated_6Cube'; // Pentellated_6Cube

exports.cPentellated_6Cube = cPentellated_6Cube;
var cRectified_6Orthoplex = 'Rectified_6Orthoplex'; // Rectified_6Orthoplex

exports.cRectified_6Orthoplex = cRectified_6Orthoplex;
var cTruncated_6Orthoplex = 'Truncated_6Orthoplex'; // Truncated_6Orthoplex

exports.cTruncated_6Orthoplex = cTruncated_6Orthoplex;
var cCantellated_6Orthoplex = 'Cantellated_6Orthoplex'; // Cantellated_6Orthoplex

exports.cCantellated_6Orthoplex = cCantellated_6Orthoplex;
var cRuncinated_6Orthoplex = 'Runcinated_6Orthoplex'; // Runcinated_6Orthoplex

exports.cRuncinated_6Orthoplex = cRuncinated_6Orthoplex;
var cStericated_6Orthoplex = 'Stericated_6Orthoplex'; // Stericated_6Orthoplex
// 6D Honeycomb

exports.cStericated_6Orthoplex = cStericated_6Orthoplex;
var c6CubicHoneycomb = '6CubicHoneycomb'; // 6CubicHoneycomb

exports.c6CubicHoneycomb = c6CubicHoneycomb;
var c6SimplexHoneycomb = '6SimplexHoneycomb'; // 6SimplexHoneycomb

exports.c6SimplexHoneycomb = c6SimplexHoneycomb;
var c6DemicubicHoneycomb = '6DemicubicHoneycomb'; // 6DemicubicHoneycomb
// 7D Space, Uniform 7D Polytope

exports.c6DemicubicHoneycomb = c6DemicubicHoneycomb;
var cRectified_7Simplex = 'Rectified_7Simplex'; // Rectified_7Simplex

exports.cRectified_7Simplex = cRectified_7Simplex;
var cTruncated_7Simplex = 'Truncated_7Simplex'; // Truncated_7Simplex

exports.cTruncated_7Simplex = cTruncated_7Simplex;
var cCantellated_7Simplex = 'Cantellated_7Simplex'; // Cantellated_7Simplex

exports.cCantellated_7Simplex = cCantellated_7Simplex;
var cRuncinated_7Simplex = 'Runcinated_7Simplex'; // Runcinated_7Simplex

exports.cRuncinated_7Simplex = cRuncinated_7Simplex;
var cStericated_7Simplex = 'Stericated_7Simplex'; // Stericated_7Simplex

exports.cStericated_7Simplex = cStericated_7Simplex;
var cPentellated_7Simplex = 'Pentellated_7Simplex'; // Pentellated_7Simplex

exports.cPentellated_7Simplex = cPentellated_7Simplex;
var cHexicated_7Simplex = 'Hexicated_7Simplex'; // Hexicated_7Simplex

exports.cHexicated_7Simplex = cHexicated_7Simplex;
var c7Demicube = '7Demicube'; // 7Demicube

exports.c7Demicube = c7Demicube;
var cTruncated_7Demicube = 'Truncated_7Demicube'; // Truncated_7Demicube

exports.cTruncated_7Demicube = cTruncated_7Demicube;
var cCantellated_7Demicube = 'Cantellated_7Demicube'; // Cantellated_7Demicube

exports.cCantellated_7Demicube = cCantellated_7Demicube;
var cRuncinated_7Demicube = 'Runcinated_7Demicube'; // Runcinated_7Demicube

exports.cRuncinated_7Demicube = cRuncinated_7Demicube;
var cStericated_7Demicube = 'Stericated_7Demicube'; // Stericated_7Demicube

exports.cStericated_7Demicube = cStericated_7Demicube;
var cPentellated_7Demicube = 'Pentellated_7Demicube'; // Pentellated_7Demicube

exports.cPentellated_7Demicube = cPentellated_7Demicube;
var cRectified_7Cube = 'Rectified_7Cube'; // Rectified_7Cube

exports.cRectified_7Cube = cRectified_7Cube;
var cTruncated_7Cube = 'Truncated_7Cube'; // Truncated_7Cube

exports.cTruncated_7Cube = cTruncated_7Cube;
var cCantellated_7Cube = 'Cantellated_7Cube'; // Cantellated_7Cube

exports.cCantellated_7Cube = cCantellated_7Cube;
var cRuncinated_7Cube = 'Runcinated_7Cube'; // Runcinated_7Cube

exports.cRuncinated_7Cube = cRuncinated_7Cube;
var cStericated_7Cube = 'Stericated_7Cube'; // Stericated_7Cube

exports.cStericated_7Cube = cStericated_7Cube;
var cPentellated_7Cube = 'Pentellated_7Cube'; // Pentellated_7Cube

exports.cPentellated_7Cube = cPentellated_7Cube;
var cHexicated_7Cube = 'Hexicated_7Cube'; // Hexicated_7Cube

exports.cHexicated_7Cube = cHexicated_7Cube;
var cRectified_7Orthoplex = 'Rectified_7Orthoplex'; // Rectified_7Orthoplex

exports.cRectified_7Orthoplex = cRectified_7Orthoplex;
var cTruncated_7Orthoplex = 'Truncated_7Orthoplex'; // Truncated_7Orthoplex

exports.cTruncated_7Orthoplex = cTruncated_7Orthoplex;
var cCantellated_7Orthoplex = 'Cantellated_7Orthoplex'; // Cantellated_7Orthoplex

exports.cCantellated_7Orthoplex = cCantellated_7Orthoplex;
var cRuncinated_7Orthoplex = 'Runcinated_7Orthoplex'; // Runcinated_7Orthoplex

exports.cRuncinated_7Orthoplex = cRuncinated_7Orthoplex;
var cStericated_7Orthoplex = 'Stericated_7Orthoplex'; // Stericated_7Orthoplex

exports.cStericated_7Orthoplex = cStericated_7Orthoplex;
var cPentellated_7Orthoplex = 'Pentellated_7Orthoplex'; // Pentellated_7Orthoplex
// 7D Honeycombs

exports.cPentellated_7Orthoplex = cPentellated_7Orthoplex;
var c7CubicHoneycomb = '7CubicHoneycomb'; // 7CubicHoneycomb

exports.c7CubicHoneycomb = c7CubicHoneycomb;
var c7DemicubicHoneycomb = '7DemicubicHoneycomb'; // 7DemicubicHoneycomb
// 8D Space, Uniform 8D Polytope

exports.c7DemicubicHoneycomb = c7DemicubicHoneycomb;
var cRectified_8Simplex = 'Rectified_8Simplex'; // Rectified_8Simplex

exports.cRectified_8Simplex = cRectified_8Simplex;
var cTruncated_8Simplex = 'Truncated_8Simplex'; // Truncated_8Simplex

exports.cTruncated_8Simplex = cTruncated_8Simplex;
var cCantellated_8Simplex = 'Cantellated_8Simplex'; // Cantellated_8Simplex

exports.cCantellated_8Simplex = cCantellated_8Simplex;
var cRuncinated_8Simplex = 'Runcinated_8Simplex'; // Runcinated_8Simplex

exports.cRuncinated_8Simplex = cRuncinated_8Simplex;
var cStericated_8Simplex = 'Stericated_8Simplex'; // Stericated_8Simplex

exports.cStericated_8Simplex = cStericated_8Simplex;
var cPentellated_8Simplex = 'Pentellated_8Simplex'; // Pentellated_8Simplex

exports.cPentellated_8Simplex = cPentellated_8Simplex;
var cHexicated_8Simplex = 'Hexicated_8Simplex'; // Hexicated_8Simplex

exports.cHexicated_8Simplex = cHexicated_8Simplex;
var cHeptellated_8Simplex = 'Heptellated_8Simplex'; // Heptellated_8Simplex

exports.cHeptellated_8Simplex = cHeptellated_8Simplex;
var cRectified_8Orthoplex = 'Rectified_8Orthoplex'; // Rectified_8Orthoplex

exports.cRectified_8Orthoplex = cRectified_8Orthoplex;
var cTruncated_8Orthoplex = 'Truncated_8Orthoplex'; // Truncated_8Orthoplex

exports.cTruncated_8Orthoplex = cTruncated_8Orthoplex;
var cCantellated_8Orthoplex = 'Cantellated_8Orthoplex'; // Cantellated_8Orthoplex

exports.cCantellated_8Orthoplex = cCantellated_8Orthoplex;
var cRuncinated_8Orthoplex = 'Runcinated_8Orthoplex'; // Runcinated_8Orthoplex

exports.cRuncinated_8Orthoplex = cRuncinated_8Orthoplex;
var cStericated_8Orthoplex = 'Stericated_8Orthoplex'; // Stericated_8Orthoplex

exports.cStericated_8Orthoplex = cStericated_8Orthoplex;
var cPentellated_8Orthoplex = 'Pentellated_8Orthoplex'; // Pentellated_8Orthoplex

exports.cPentellated_8Orthoplex = cPentellated_8Orthoplex;
var cHexicated_8Orthoplex = 'Hexicated_8Orthoplex'; // Hexicated_8Orthoplex

exports.cHexicated_8Orthoplex = cHexicated_8Orthoplex;
var cRectified_8Cube = 'Rectified_8Cube'; // Rectified_8Cube

exports.cRectified_8Cube = cRectified_8Cube;
var cTruncated_8Cube = 'Truncated_8Cube'; // Truncated_8Cube

exports.cTruncated_8Cube = cTruncated_8Cube;
var cCantellated_8Cube = 'Cantellated_8Cube'; // Cantellated_8Cube

exports.cCantellated_8Cube = cCantellated_8Cube;
var cRuncinated_8Cube = 'Runcinated_8Cube'; // Runcinated_8Cube

exports.cRuncinated_8Cube = cRuncinated_8Cube;
var cStericated_8Cube = 'Stericated_8Cube'; // Stericated_8Cube

exports.cStericated_8Cube = cStericated_8Cube;
var cPentellated_8Cube = 'Pentellated_8Cube'; // Pentellated_8Cube

exports.cPentellated_8Cube = cPentellated_8Cube;
var cHexicated_8Cube = 'Hexicated_8Cube'; // Hexicated_8Cube

exports.cHexicated_8Cube = cHexicated_8Cube;
var cHeptellated_8Cube = 'Heptellated_8Cube'; // Heptellated_8Cube

exports.cHeptellated_8Cube = cHeptellated_8Cube;
var c8Demicube = '8Demicube'; // 8Demicube

exports.c8Demicube = c8Demicube;
var cTruncated_8Demicube = 'Truncated_8Demicube'; // Truncated_8Demicube

exports.cTruncated_8Demicube = cTruncated_8Demicube;
var cCantellated_8Demicube = 'Cantellated_8Demicube'; // Cantellated_8Demicube

exports.cCantellated_8Demicube = cCantellated_8Demicube;
var cRuncinated_8Demicube = 'Runcinated_8Demicube'; // Runcinated_8Demicube

exports.cRuncinated_8Demicube = cRuncinated_8Demicube;
var cStericated_8Demicube = 'Stericated_8Demicube'; // Stericated_8Demicube

exports.cStericated_8Demicube = cStericated_8Demicube;
var cPentellated_8Demicube = 'Pentellated_8Demicube'; // Pentellated_8Demicube

exports.cPentellated_8Demicube = cPentellated_8Demicube;
var cHexicated_8Demicube = 'Hexicated_8Demicube'; // Hexicated_8Demicube
// 8D Honeycombs

exports.cHexicated_8Demicube = cHexicated_8Demicube;
var c8CubicHoneycomb = '8CubicHoneycomb'; // 8CubicHoneycomb

exports.c8CubicHoneycomb = c8CubicHoneycomb;
var c8DemicubicHoneycomb = '8DemicubicHoneycomb'; // 8DemicubicHoneycomb
// 9D Polytope

exports.c8DemicubicHoneycomb = c8DemicubicHoneycomb;
var c9Demicube = '9Demicube'; // 9Demicube
// 10D Polytope

exports.c9Demicube = c9Demicube;
var c10Demicube = '10Demicube'; // 10Demicube
// Geometry and other areas of mathematics

exports.c10Demicube = c10Demicube;
var cAnnulus = 'Annulus'; // Annulus

exports.cAnnulus = cAnnulus;
var cApollonianCircles = 'ApollonianCircles'; // ApollonianCircles

exports.cApollonianCircles = cApollonianCircles;
var cArbelos = 'Arbelos'; // Arbelos

exports.cArbelos = cArbelos;
var cBorromeanRings = 'BorromeanRings'; // BorromeanRings

exports.cBorromeanRings = cBorromeanRings;
var cCircularSector = 'CircularSector'; // CircularSector

exports.cCircularSector = cCircularSector;
var cCircularSegment = 'CircularSegment'; // CircularSegment

exports.cCircularSegment = cCircularSegment;
var cDeferent = 'Deferent'; // Deferent

exports.cDeferent = cDeferent;
var cEpicycle = 'Epicycle'; // Epicycle

exports.cEpicycle = cEpicycle;
var cExTangentialQuadrilateral = 'ExTangentialQuadrilateral'; // ExTangentialQuadrilateral

exports.cExTangentialQuadrilateral = cExTangentialQuadrilateral;
var cHorocycle = 'Horocycle'; // Horocycle

exports.cHorocycle = cHorocycle;
var cHypotrochoid = 'Hypotrochoid'; // Hypotrochoid

exports.cHypotrochoid = cHypotrochoid;
var cLune = 'Lune'; // Lune

exports.cLune = cLune;
var cPappusChain = 'PappusChain'; // PappusChain

exports.cPappusChain = cPappusChain;
var cPeaucellierLipkinLinkage = 'PeaucellierLipkinLinkage'; // PeaucellierLipkinLinkage

exports.cPeaucellierLipkinLinkage = cPeaucellierLipkinLinkage;
var cRobbinsPentagon = 'RobbinsPentagon'; // RobbinsPentagon

exports.cRobbinsPentagon = cRobbinsPentagon;
var cSalinon = 'Salinon'; // Salinon

exports.cSalinon = cSalinon;
var cSemicircle = 'Semicircle'; // Semicircle

exports.cSemicircle = cSemicircle;
var cSquircle = 'Squircle'; // Squircle

exports.cSquircle = cSquircle;
var cSteinerChain = 'SteinerChain'; // SteinerChain

exports.cSteinerChain = cSteinerChain;
var cBicentricQuadrilateral = 'BicentricQuadrilateral'; // BicentricQuadrilateral
// Glyphs and Symbols

exports.cBicentricQuadrilateral = cBicentricQuadrilateral;
var cCrescent = 'Crescent'; // Crescent

exports.cCrescent = cCrescent;
var cVesicaPiscis = 'VesicaPiscis'; // VesicaPiscis

exports.cVesicaPiscis = cVesicaPiscis;
var cArc = 'Arc'; // Arc

exports.cArc = cArc;
var cCubicHermiteCurve = 'CubicHermiteCurve'; // CubicHermiteCurve

exports.cCubicHermiteCurve = cCubicHermiteCurve;
var cCurveOfConstantWidth = 'CurveOfConstantWidth'; // CurveOfConstantWidth

exports.cCurveOfConstantWidth = cCurveOfConstantWidth;
var cHedgehog = 'Hedgehog'; // Hedgehog

exports.cHedgehog = cHedgehog;
var cParametricCurve = 'ParametricCurve'; // ParametricCurve

exports.cParametricCurve = cParametricCurve;
var cSpline = 'Spline'; // Spline

exports.cSpline = cSpline;
var cHermiteSpline = 'HermiteSpline'; // HermiteSpline

exports.cHermiteSpline = cHermiteSpline;
var cBetaSpline = 'BetaSpline'; // BetaSpline

exports.cBetaSpline = cBetaSpline;
var cHigherOrderSpline = 'HigherOrderSpline'; // HigherOrderSpline

exports.cHigherOrderSpline = cHigherOrderSpline;
var cRay = 'Ray'; // Ray

exports.cRay = cRay;
var cRibaucourCurve = 'RibaucourCurve'; // RibaucourCurve
// Knots

exports.cRibaucourCurve = cRibaucourCurve;
var cAdjustableGripHitch = 'AdjustableGripHitch'; // AdjustableGripHitch

exports.cAdjustableGripHitch = cAdjustableGripHitch;
var cAdjustableSling = 'AdjustableSling'; // AdjustableSling

exports.cAdjustableSling = cAdjustableSling;
var cAlbrightKnot = 'AlbrightKnot'; // AlbrightKnot

exports.cAlbrightKnot = cAlbrightKnot;
var cAlpineButterflyBend = 'AlpineButterflyBend'; // AlpineButterflyBend

exports.cAlpineButterflyBend = cAlpineButterflyBend;
var cAplineButterflyLoop = 'AplineButterflyLoop'; // AplineButterflyLoop

exports.cAplineButterflyLoop = cAplineButterflyLoop;
var cAnchorHitch = 'AnchorHitch'; // AnchorHitch

exports.cAnchorHitch = cAnchorHitch;
var cArborKnot = 'ArborKnot'; // ArborKnot

exports.cArborKnot = cArborKnot;
var cAshleyBend = 'AshleyBend'; // AshleyBend

exports.cAshleyBend = cAshleyBend;
var cAshleyStopper = 'AshleyStopper'; // AshleyStopper

exports.cAshleyStopper = cAshleyStopper;
var cAustralianBraidKnot = 'AustralianBraidKnot'; // AustralianBraidKnot

exports.cAustralianBraidKnot = cAustralianBraidKnot;
var cBackSplice = 'BackSplice'; // BackSplice

exports.cBackSplice = cBackSplice;
var cBarrelHitch = 'BarrelHitch'; // BarrelHitch

exports.cBarrelHitch = cBarrelHitch;
var cBasketHitch = 'BasketHitch'; // BasketHitch

exports.cBasketHitch = cBasketHitch;
var cBeerKnot = 'BeerKnot'; // BeerKnot

exports.cBeerKnot = cBeerKnot;
var cBiminiTwistKnot = 'BiminiTwistKnot'; // BiminiTwistKnot

exports.cBiminiTwistKnot = cBiminiTwistKnot;
var cBlakesHitch = 'BlakesHitch'; // BlakesHitch

exports.cBlakesHitch = cBlakesHitch;
var cBloodKnot = 'BloodKnot'; // BloodKnot

exports.cBloodKnot = cBloodKnot;
var cBoomHitch = 'BoomHitch'; // BoomHitch

exports.cBoomHitch = cBoomHitch;
var cBottleSling = 'BottleSling'; // BottleSling

exports.cBottleSling = cBottleSling;
var cBowTie = 'BowTie'; // BowTie

exports.cBowTie = cBowTie;
var cBowlineKnot = 'BowlineKnot'; // BowlineKnot

exports.cBowlineKnot = cBowlineKnot;
var cBowlineOnABight = 'BowlineOnABight'; // BowlineOnABight

exports.cBowlineOnABight = cBowlineOnABight;
var cBrummelSplice = 'BrummelSplice'; // BrummelSplice

exports.cBrummelSplice = cBrummelSplice;
var cBrummelSpliceDemo = 'BrummelSpliceDemo'; // BrummelSpliceDemo

exports.cBrummelSpliceDemo = cBrummelSpliceDemo;
var cBuntlineHitch = 'BuntlineHitch'; // BuntlineHitch

exports.cBuntlineHitch = cBuntlineHitch;
var cButchersKnot = 'ButchersKnot'; // ButchersKnot

exports.cButchersKnot = cButchersKnot;
var cCarrickBend = 'CarrickBend'; // CarrickBend

exports.cCarrickBend = cCarrickBend;
var cCarrickBendMat = 'CarrickBendMat'; // CarrickBendMat

exports.cCarrickBendMat = cCarrickBendMat;
var cCelticKnot = 'CelticKnot'; // CelticKnot

exports.cCelticKnot = cCelticKnot;
var cChainSinnet = 'ChainSinnet'; // ChainSinnet

exports.cChainSinnet = cChainSinnet;
var cChainSplice = 'ChainSplice'; // ChainSplice

exports.cChainSplice = cChainSplice;
var cCleatHitch = 'CleatHitch'; // CleatHitch

exports.cCleatHitch = cCleatHitch;
var cDockLine = 'DockLine'; // DockLine

exports.cDockLine = cDockLine;
var cHalyard = 'Halyard'; // Halyard

exports.cHalyard = cHalyard;
var cCloveHitch = 'CloveHitch'; // CloveHitch

exports.cCloveHitch = cCloveHitch;
var cHitches = 'Hitches'; // Hitches

exports.cHitches = cHitches;
var cLoops = 'Loops'; // Loops

exports.cLoops = cLoops;
var cRopeEnd = 'RopeEnd'; // RopeEnd

exports.cRopeEnd = cRopeEnd;
var cCobraKnot = 'CobraKnot'; // CobraKnot

exports.cCobraKnot = cCobraKnot;
var cCoilAttachedRope = 'CoilAttachedRope'; // CoilAttachedRope

exports.cCoilAttachedRope = cCoilAttachedRope;
var cCoilUnattachedRope = 'CoilUnattachedRope'; // CoilUnattachedRope

exports.cCoilUnattachedRope = cCoilUnattachedRope;
var cCommonWipping = 'CommonWipping'; // CommonWipping

exports.cCommonWipping = cCommonWipping;
var cConstrictor = 'Constrictor'; // Constrictor

exports.cConstrictor = cConstrictor;
var cConstrictorSlide = 'ConstrictorSlide'; // ConstrictorSlide

exports.cConstrictorSlide = cConstrictorSlide;
var cSlide = 'Slide'; // Slide

exports.cSlide = cSlide;
var cConstrictorHoward = 'ConstrictorHoward'; // ConstrictorHoward

exports.cConstrictorHoward = cConstrictorHoward;
var cHoward = 'Howard'; // Howard

exports.cHoward = cHoward;
var cConstrictorEnd = 'ConstrictorEnd'; // ConstrictorEnd

exports.cConstrictorEnd = cConstrictorEnd;
var cEnd = 'End'; // End

exports.cEnd = cEnd;
var cConstrictorFolding = 'ConstrictorFolding'; // ConstrictorFolding

exports.cConstrictorFolding = cConstrictorFolding;
var cFolding = 'Folding'; // Folding

exports.cFolding = cFolding;
var cConstrictorRopeEnd = 'ConstrictorRopeEnd'; // ConstrictorRopeEnd

exports.cConstrictorRopeEnd = cConstrictorRopeEnd;
var cConstrictorTwist = 'ConstrictorTwist'; // ConstrictorTwist

exports.cConstrictorTwist = cConstrictorTwist;
var cTwist = 'Twist'; // Twist

exports.cTwist = cTwist;
var cCowHitch = 'CowHitch'; // CowHitch

exports.cCowHitch = cCowHitch;
var cCowHitchEnds = 'CowHitchEnds'; // CowHitchEnds

exports.cCowHitchEnds = cCowHitchEnds;
var cChowHitchLoops = 'ChowHitchLoops'; // ChowHitchLoops

exports.cChowHitchLoops = cChowHitchLoops;
var cCrownKnot = 'CrownKnot'; // CrownKnot

exports.cCrownKnot = cCrownKnot;
var cCrownSinnet = 'CrownSinnet'; // CrownSinnet

exports.cCrownSinnet = cCrownSinnet;
var cCurtainTieBack = 'CurtainTieBack'; // CurtainTieBack

exports.cCurtainTieBack = cCurtainTieBack;
var cDavyKnot = 'DavyKnot'; // DavyKnot

exports.cDavyKnot = cDavyKnot;
var cDistelHitch = 'DistelHitch'; // DistelHitch

exports.cDistelHitch = cDistelHitch;
var cDoubleAlpineButterfly = 'DoubleAlpineButterfly'; // DoubleAlpineButterfly

exports.cDoubleAlpineButterfly = cDoubleAlpineButterfly;
var cDoubleDavyKnot = 'DoubleDavyKnot'; // DoubleDavyKnot

exports.cDoubleDavyKnot = cDoubleDavyKnot;
var cDoubleDragonLoop = 'DoubleDragonLoop'; // DoubleDragonLoop

exports.cDoubleDragonLoop = cDoubleDragonLoop;
var cDoubleFishermans = 'DoubleFishermans'; // DoubleFishermans

exports.cDoubleFishermans = cDoubleFishermans;
var cDoubleMatthewWalker = 'DoubleMatthewWalker'; // DoubleMatthewWalker

exports.cDoubleMatthewWalker = cDoubleMatthewWalker;
var cDoubleOverhandStopper = 'DoubleOverhandStopper'; // DoubleOverhandStopper

exports.cDoubleOverhandStopper = cDoubleOverhandStopper;
var cDoubleTurtleKnot = 'DoubleTurtleKnot'; // DoubleTurtleKnot

exports.cDoubleTurtleKnot = cDoubleTurtleKnot;
var cDropperLoopKnot = 'DropperLoopKnot'; // DropperLoopKnot

exports.cDropperLoopKnot = cDropperLoopKnot;
var cEggLoopKnot = 'EggLoopKnot'; // EggLoopKnot

exports.cEggLoopKnot = cEggLoopKnot;
var cEstarStopperKnot = 'EstarStopperKnot'; // EstarStopperKnot

exports.cEstarStopperKnot = cEstarStopperKnot;
var cEyeSplice = 'EyeSplice'; // EyeSplice

exports.cEyeSplice = cEyeSplice;
var cFarmersLoopKnot = 'FarmersLoopKnot'; // FarmersLoopKnot

exports.cFarmersLoopKnot = cFarmersLoopKnot;
var cFarrimondHitch = 'FarrimondHitch'; // FarrimondHitch

exports.cFarrimondHitch = cFarrimondHitch;
var cFgKnot = 'FgKnot'; // FgKnot

exports.cFgKnot = cFgKnot;
var cFiadorKnot = 'FiadorKnot'; // FiadorKnot

exports.cFiadorKnot = cFiadorKnot;
var cFigure8Bend = 'Figure8Bend'; // Figure8Bend

exports.cFigure8Bend = cFigure8Bend;
var cFigure8DirectionLoop = 'Figure8DirectionLoop'; // Figure8DirectionLoop

exports.cFigure8DirectionLoop = cFigure8DirectionLoop;
var cFigure8DoubleLoop = 'Figure8DoubleLoop'; // Figure8DoubleLoop

exports.cFigure8DoubleLoop = cFigure8DoubleLoop;
var cFigure8Flake = 'Figure8Flake'; // Figure8Flake

exports.cFigure8Flake = cFigure8Flake;
var cFigure8FollowLoop = 'Figure8FollowLoop'; // Figure8FollowLoop

exports.cFigure8FollowLoop = cFigure8FollowLoop;
var cFigure8Loop = 'Figure8Loop'; // Figure8Loop

exports.cFigure8Loop = cFigure8Loop;
var cFigure9Loop = 'Figure9Loop'; // Figure9Loop

exports.cFigure9Loop = cFigure9Loop;
var cFlatOverhandBend = 'FlatOverhandBend'; // FlatOverhandBend

exports.cFlatOverhandBend = cFlatOverhandBend;
var cFlemishFlakeCoil = 'FlemishFlakeCoil'; // FlemishFlakeCoil

exports.cFlemishFlakeCoil = cFlemishFlakeCoil;
var c4StrandSinnet = '4StrandSinnet'; // 4StrandSinnet

exports.c4StrandSinnet = c4StrandSinnet;
var c4StrandSquareSinnet = '4StrandSquareSinnet'; // 4StrandSquareSinnet

exports.c4StrandSquareSinnet = c4StrandSquareSinnet;
var cFourInHandNeckTie = 'FourInHandNeckTie'; // FourInHandNeckTie

exports.cFourInHandNeckTie = cFourInHandNeckTie;
var cFrenchSinnetOne = 'FrenchSinnetOne'; // FrenchSinnetOne

exports.cFrenchSinnetOne = cFrenchSinnetOne;
var cFrenchSinnetTwo = 'FrenchSinnetTwo'; // FrenchSinnetTwo

exports.cFrenchSinnetTwo = cFrenchSinnetTwo;
var cGirthHitch = 'GirthHitch'; // GirthHitch

exports.cGirthHitch = cGirthHitch;
var cGnatHitch = 'GnatHitch'; // GnatHitch

exports.cGnatHitch = cGnatHitch;
var cGrogSlidingSplice = 'GrogSlidingSplice'; // GrogSlidingSplice

exports.cGrogSlidingSplice = cGrogSlidingSplice;
var cGrogSling = 'GrogSling'; // GrogSling

exports.cGrogSling = cGrogSling;
var cHalfHitch = 'HalfHitch'; // HalfHitch

exports.cHalfHitch = cHalfHitch;
var cHalfKnot = 'HalfKnot'; // HalfKnot

exports.cHalfKnot = cHalfKnot;
var cHalfWindsorNecktie = 'HalfWindsorNecktie'; // HalfWindsorNecktie

exports.cHalfWindsorNecktie = cHalfWindsorNecktie;
var cHalterHitch = 'HalterHitch'; // HalterHitch

exports.cHalterHitch = cHalterHitch;
var cHalyardHitch = 'HalyardHitch'; // HalyardHitch

exports.cHalyardHitch = cHalyardHitch;
var cHandcuffKnot = 'HandcuffKnot'; // HandcuffKnot

exports.cHandcuffKnot = cHandcuffKnot;
var cHastyHarness = 'HastyHarness'; // HastyHarness

exports.cHastyHarness = cHastyHarness;
var cHeavingLineKnot = 'HeavingLineKnot'; // HeavingLineKnot

exports.cHeavingLineKnot = cHeavingLineKnot;
var cHighwaymansHitch = 'HighwaymansHitch'; // HighwaymansHitch

exports.cHighwaymansHitch = cHighwaymansHitch;
var cHondaKnot = 'HondaKnot'; // HondaKnot

exports.cHondaKnot = cHondaKnot;
var cHuntersBend = 'HuntersBend'; // HuntersBend

exports.cHuntersBend = cHuntersBend;
var cIcicleHitchEnd = 'IcicleHitchEnd'; // IcicleHitchEnd

exports.cIcicleHitchEnd = cIcicleHitchEnd;
var cIcicleHitchLoop = 'IcicleHitchLoop'; // IcicleHitchLoop

exports.cIcicleHitchLoop = cIcicleHitchLoop;
var cImproveClinchKnot = 'ImproveClinchKnot'; // ImproveClinchKnot

exports.cImproveClinchKnot = cImproveClinchKnot;
var cKlemheistKnot = 'KlemheistKnot'; // KlemheistKnot

exports.cKlemheistKnot = cKlemheistKnot;
var cLanyardKnot = 'LanyardKnot'; // LanyardKnot

exports.cLanyardKnot = cLanyardKnot;
var cLashingDiagonal = 'LashingDiagonal'; // LashingDiagonal

exports.cLashingDiagonal = cLashingDiagonal;
var cLashingRound = 'LashingRound'; // LashingRound

exports.cLashingRound = cLashingRound;
var cLashingSheer = 'LashingSheer'; // LashingSheer

exports.cLashingSheer = cLashingSheer;
var cLashingSquare = 'LashingSquare'; // LashingSquare

exports.cLashingSquare = cLashingSquare;
var cLashingTripod = 'LashingTripod'; // LashingTripod

exports.cLashingTripod = cLashingTripod;
var cLigatureInstrument = 'LigatureInstrument'; // LigatureInstrument

exports.cLigatureInstrument = cLigatureInstrument;
var cLigatureOneHand = 'LigatureOneHand'; // LigatureOneHand

exports.cLigatureOneHand = cLigatureOneHand;
var cLigatureTwoHands = 'LigatureTwoHands'; // LigatureTwoHands

exports.cLigatureTwoHands = cLigatureTwoHands;
var cLightermansHitch = 'LightermansHitch'; // LightermansHitch

exports.cLightermansHitch = cLightermansHitch;
var cLongBurySplice = 'LongBurySplice'; // LongBurySplice

exports.cLongBurySplice = cLongBurySplice;
var cManagerHitch = 'ManagerHitch'; // ManagerHitch

exports.cManagerHitch = cManagerHitch;
var cMarlinSpikeHitch = 'MarlinSpikeHitch'; // MarlinSpikeHitch

exports.cMarlinSpikeHitch = cMarlinSpikeHitch;
var cMastheadKnotMat = 'MastheadKnotMat'; // MastheadKnotMat

exports.cMastheadKnotMat = cMastheadKnotMat;
var cMcdonaldBrummel = 'McdonaldBrummel'; // McdonaldBrummel

exports.cMcdonaldBrummel = cMcdonaldBrummel;
var cMidshipmansHitch = 'MidshipmansHitch'; // MidshipmansHitch

exports.cMidshipmansHitch = cMidshipmansHitch;
var cMillersKnot = 'MillersKnot'; // MillersKnot

exports.cMillersKnot = cMillersKnot;
var cMonkeysFistKnot = 'MonkeysFistKnot'; // MonkeysFistKnot

exports.cMonkeysFistKnot = cMonkeysFistKnot;
var cMooringsHitch = 'MooringsHitch'; // MooringsHitch

exports.cMooringsHitch = cMooringsHitch;
var cMunterMuleCombo = 'MunterMuleCombo'; // MunterMuleCombo

exports.cMunterMuleCombo = cMunterMuleCombo;
var cNailKnot = 'NailKnot'; // NailKnot

exports.cNailKnot = cNailKnot;
var cNonSlipMonoKnot = 'NonSlipMonoKnot'; // NonSlipMonoKnot

exports.cNonSlipMonoKnot = cNonSlipMonoKnot;
var cNooseKnot = 'NooseKnot'; // NooseKnot

exports.cNooseKnot = cNooseKnot;
var cOceanPlaitMat = 'OceanPlaitMat'; // OceanPlaitMat

exports.cOceanPlaitMat = cOceanPlaitMat;
var cOneHandedBowline = 'OneHandedBowline'; // OneHandedBowline

exports.cOneHandedBowline = cOneHandedBowline;
var cOrvisKnot = 'OrvisKnot'; // OrvisKnot

exports.cOrvisKnot = cOrvisKnot;
var cOverhandKnot = 'OverhandKnot'; // OverhandKnot

exports.cOverhandKnot = cOverhandKnot;
var cPackageTyingKnot = 'PackageTyingKnot'; // PackageTyingKnot

exports.cPackageTyingKnot = cPackageTyingKnot;
var cPalomarKnot = 'PalomarKnot'; // PalomarKnot

exports.cPalomarKnot = cPalomarKnot;
var cPerfectionLoop = 'PerfectionLoop'; // PerfectionLoop

exports.cPerfectionLoop = cPerfectionLoop;
var cPileHitch = 'PileHitch'; // PileHitch

exports.cPileHitch = cPileHitch;
var cPoachersKnot = 'PoachersKnot'; // PoachersKnot

exports.cPoachersKnot = cPoachersKnot;
var cPrattNecktie = 'PrattNecktie'; // PrattNecktie

exports.cPrattNecktie = cPrattNecktie;
var cPrusikKnot = 'PrusikKnot'; // PrusikKnot

exports.cPrusikKnot = cPrusikKnot;
var cPurcellPrusikKnot = 'PurcellPrusikKnot'; // PurcellPrusikKnot

exports.cPurcellPrusikKnot = cPurcellPrusikKnot;
var cQuickHitch = 'QuickHitch'; // QuickHitch

exports.cQuickHitch = cQuickHitch;
var cRadiumReleaseHitch = 'RadiumReleaseHitch'; // RadiumReleaseHitch

exports.cRadiumReleaseHitch = cRadiumReleaseHitch;
var cRapalaKnot = 'RapalaKnot'; // RapalaKnot

exports.cRapalaKnot = cRapalaKnot;
var cRatTailStopperKnot = 'RatTailStopperKnot'; // RatTailStopperKnot

exports.cRatTailStopperKnot = cRatTailStopperKnot;
var cRingHitch = 'RingHitch'; // RingHitch

exports.cRingHitch = cRingHitch;
var cRollingHitch = 'RollingHitch'; // RollingHitch

exports.cRollingHitch = cRollingHitch;
var cRoundTurnHitches = 'RoundTurnHitches'; // RoundTurnHitches

exports.cRoundTurnHitches = cRoundTurnHitches;
var cRunningBowline = 'RunningBowline'; // RunningBowline

exports.cRunningBowline = cRunningBowline;
var cSailmakersWhipping = 'SailmakersWhipping'; // SailmakersWhipping

exports.cSailmakersWhipping = cSailmakersWhipping;
var cSanDiegoJamKnot = 'SanDiegoJamKnot'; // SanDiegoJamKnot

exports.cSanDiegoJamKnot = cSanDiegoJamKnot;
var cSheepShank = 'SheepShank'; // SheepShank

exports.cSheepShank = cSheepShank;
var cSheetBend = 'SheetBend'; // SheetBend

exports.cSheetBend = cSheetBend;
var cShoelaceBow = 'ShoelaceBow'; // ShoelaceBow

exports.cShoelaceBow = cShoelaceBow;
var cShoelaceBowFieggen = 'ShoelaceBowFieggen'; // ShoelaceBowFieggen

exports.cShoelaceBowFieggen = cShoelaceBowFieggen;
var cShoelaceBowSurgeon = 'ShoelaceBowSurgeon'; // ShoelaceBowSurgeon

exports.cShoelaceBowSurgeon = cShoelaceBowSurgeon;
var cShortSplice = 'ShortSplice'; // ShortSplice

exports.cShortSplice = cShortSplice;
var cSiberianHitch = 'SiberianHitch'; // SiberianHitch

exports.cSiberianHitch = cSiberianHitch;
var cSingleRopeBraid = 'SingleRopeBraid'; // SingleRopeBraid

exports.cSingleRopeBraid = cSingleRopeBraid;
var cSlidingDoubleFishermans = 'SlidingDoubleFishermans'; // SlidingDoubleFishermans

exports.cSlidingDoubleFishermans = cSlidingDoubleFishermans;
var cSlimBeautyKnot = 'SlimBeautyKnot'; // SlimBeautyKnot

exports.cSlimBeautyKnot = cSlimBeautyKnot;
var cSlipKnot = 'SlipKnot'; // SlipKnot

exports.cSlipKnot = cSlipKnot;
var cSnellKnot = 'SnellKnot'; // SnellKnot

exports.cSnellKnot = cSnellKnot;
var cSoftShackle = 'SoftShackle'; // SoftShackle

exports.cSoftShackle = cSoftShackle;
var cSoftShackleEdwards = 'SoftShackleEdwards'; // SoftShackleEdwards

exports.cSoftShackleEdwards = cSoftShackleEdwards;
var cSoftShackleStronger = 'SoftShackleStronger'; // SoftShackleStronger

exports.cSoftShackleStronger = cSoftShackleStronger;
var cSpanishBowline = 'SpanishBowline'; // SpanishBowline

exports.cSpanishBowline = cSpanishBowline;
var cSquareKnot = 'SquareKnot'; // SquareKnot

exports.cSquareKnot = cSquareKnot;
var cStevedoreStopper = 'StevedoreStopper'; // StevedoreStopper

exports.cStevedoreStopper = cStevedoreStopper;
var cStopperLoop = 'StopperLoop'; // StopperLoop

exports.cStopperLoop = cStopperLoop;
var cStrangleKnotEnd = 'StrangleKnotEnd'; // StrangleKnotEnd

exports.cStrangleKnotEnd = cStrangleKnotEnd;
var cStrangleKnotOverhand = 'StrangleKnotOverhand'; // StrangleKnotOverhand

exports.cStrangleKnotOverhand = cStrangleKnotOverhand;
var cSuperMunterHitch = 'SuperMunterHitch'; // SuperMunterHitch

exports.cSuperMunterHitch = cSuperMunterHitch;
var cSurgeonsJoinKnot = 'SurgeonsJoinKnot'; // SurgeonsJoinKnot

exports.cSurgeonsJoinKnot = cSurgeonsJoinKnot;
var cSurgeonsLoopKnot = 'SurgeonsLoopKnot'; // SurgeonsLoopKnot

exports.cSurgeonsLoopKnot = cSurgeonsLoopKnot;
var cSurgicalSlipTie = 'SurgicalSlipTie'; // SurgicalSlipTie

exports.cSurgicalSlipTie = cSurgicalSlipTie;
var cSurgicalTieInsturmental = 'SurgicalTieInsturmental'; // SurgicalTieInsturmental

exports.cSurgicalTieInsturmental = cSurgicalTieInsturmental;
var cSurgicalTieOneHand = 'SurgicalTieOneHand'; // SurgicalTieOneHand

exports.cSurgicalTieOneHand = cSurgicalTieOneHand;
var cSurgicalTieTwoHands = 'SurgicalTieTwoHands'; // SurgicalTieTwoHands

exports.cSurgicalTieTwoHands = cSurgicalTieTwoHands;
var cTensionlessHitch = 'TensionlessHitch'; // TensionlessHitch

exports.cTensionlessHitch = cTensionlessHitch;
var c3StrandBraid = '3StrandBraid'; // 3StrandBraid

exports.c3StrandBraid = c3StrandBraid;
var c3StrandBraidAlternate = '3StrandBraidAlternate'; // 3StrandBraidAlternate

exports.c3StrandBraidAlternate = c3StrandBraidAlternate;
var cTimberHitch = 'TimberHitch'; // TimberHitch

exports.cTimberHitch = cTimberHitch;
var cTreeSwing = 'TreeSwing'; // TreeSwing

exports.cTreeSwing = cTreeSwing;
var cTrileneKnot = 'TrileneKnot'; // TrileneKnot

exports.cTrileneKnot = cTrileneKnot;
var cTruckersHitch = 'TruckersHitch'; // TruckersHitch

exports.cTruckersHitch = cTruckersHitch;
var cTruckersHitchQuick = 'TruckersHitchQuick'; // TruckersHitchQuick

exports.cTruckersHitchQuick = cTruckersHitchQuick;
var cTumbleHitch = 'TumbleHitch'; // TumbleHitch

exports.cTumbleHitch = cTumbleHitch;
var cTurksHead = 'TurksHead'; // TurksHead

exports.cTurksHead = cTurksHead;
var cTwoHalfHitches = 'TwoHalfHitches'; // TwoHalfHitches

exports.cTwoHalfHitches = cTwoHalfHitches;
var cUnderwritersKnot = 'UnderwritersKnot'; // UnderwritersKnot

exports.cUnderwritersKnot = cUnderwritersKnot;
var cUniKNot = 'UniKNot'; // UniKNot

exports.cUniKNot = cUniKNot;
var cWallCrownKnot = 'WallCrownKnot'; // WallCrownKnot

exports.cWallCrownKnot = cWallCrownKnot;
var cWallKnot = 'WallKnot'; // WallKnot

exports.cWallKnot = cWallKnot;
var cWaterBowline = 'WaterBowline'; // WaterBowline

exports.cWaterBowline = cWaterBowline;
var cWaterKnot = 'WaterKnot'; // WaterKnot

exports.cWaterKnot = cWaterKnot;
var cWestCountryWipping = 'WestCountryWipping'; // WestCountryWipping

exports.cWestCountryWipping = cWestCountryWipping;
var cWhoopieSling = 'WhoopieSling'; // WhoopieSling

exports.cWhoopieSling = cWhoopieSling;
var cWindsorNecktie = 'WindsorNecktie'; // WindsorNecktie

exports.cWindsorNecktie = cWindsorNecktie;
var cZeppelinBend = 'ZeppelinBend'; // ZeppelinBend

exports.cZeppelinBend = cZeppelinBend;