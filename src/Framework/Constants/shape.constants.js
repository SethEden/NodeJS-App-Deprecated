/**
 * @file shape.constants.js
 * @module shape-constants
 * @description Contains named geometric shapes & knots.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * {@link https://en.wikipedia.org/wiki/List_of_mathematical_shapes}
 */
import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as wrd from './word.constants';

// NOTE: I changed e-x-p-o-r-t c-o-n-s-t => smuggle something,
// because the constants validation system is scanning these files looking for that keyword and
// if it finds it then it will use that line for validation pruposes.
// So to reverse this, just do a find replace and change // s.muggle something back into the other e-x-p-o-r-t c-o-n-s-t string.
// The current state of the application doesn't need all of these, but future applications will most definately need them.
// So they are left here as a matter of future-proofing.

// Basic Shapes
// smuggle something cline = bas.cli + bas.cne; // line
// smuggle something cLine = bas.cLi + bas.cne; // Line
// smuggle something ccircle = phn.ccir + phn.ccle; // circle
// smuggle something cCircle = phn.cCir + phn.ccle; // Circle
// smuggle something coval = bas.cov + bas.cal; // oval
// smuggle something cOval = bas.cOv + bas.cal; // Oval
// smuggle something csquare = bas.cs + phn.cquare; // square
// smuggle something cSquare = bas.cS + phn.cquare; // Square
// smuggle something ctriangle = phn.ctri + wrd.cangle; // triangle
// smuggle something cTriangle = phn.cTri + wrd.cangle; // Triangle
// smuggle something crectangle = phn.crect + wrd.cangle; // rectangle
// smuggle something cRectangle = phn.cRect + wrd.cangle; // Rectangle
// smuggle something coctagon = phn.coct + bas.ca + phn.cgon; // octagon
// smuggle something cOctagon = phn.cOct + bas.ca + phn.cgon; // Octagon
// smuggle something chexagon = phn.chex + bas.ca + phn.cgon; // hexagon
// smuggle something cHexagon = phn.cHex + bas.ca + phn.cgon; // Hexagon
// smuggle something cheptagon = phn.chep + bas.cta + phn.cgon; // heptagon
// smuggle something cHeptagon = phn.cHep + bas.cta + phn.cgon; // Heptagon
// smuggle something cnonagon = phn.cnon + bas.ca + phn.cgon; // nonagon
// smuggle something cNonagon = phn.cNon + bas.ca + phn.cgon; // Nonagon
// smuggle something ctrapezoid = wrd.ctrap + bas.ce + phn.czoid; // trapezoid
// smuggle something cTrapezoid = wrd.cTrap + bas.ce + phn.czoid; // Trapezoid
// smuggle something ccube = bas.ccu + bas.cbe; // cube
// smuggle something cCube = bas.cCu + bas.cbe; // Cube
// // This could go on forever!!
// // https://en.wikipedia.org/wiki/List_of_mathematical_shapes
//
// // Miscellaneous
// smuggle something ccubic = bas.cc + phn.cubic; // cubic
// smuggle something cCubic = bas.cC + phn.cubic; // Cubic
// smuggle something cplane = bas.cp + wrd.clane; // plane
// smuggle something cPlane = bas.cP + wrd.clane; // Plane
// smuggle something ccurve = bas.cc + phn.curve; // curve
// smuggle something cCurve = bas.cC + phn.curve; // Curve
// smuggle something cquartic = phn.cqua + phn.crtic; // quartic
// smuggle something cQuartic = phn.cQua + phn.crtic; // Quartic
// smuggle something cconic = phn.ccon + bas.cic; // conic
// smuggle something cConic = phn.cCon + bas.cic; // Conic
//
// // Algebraic Curves
// smuggle something ccubicPlaneCurve = ccubic + cPlane + cCurve; // cubicPlaneCurve
// smuggle something cCubicPlaneCurve = cCubic + cPlane + cCurve; // CubicPlaneCurve
// smuggle something cquarticPlaneCurve = cquartic + cPlane + cCurve; // quarticPlaneCurve
// smuggle something cQuarticPlaneCurve = cQuartic + cPlane + cCurve; // QuarticPlaneCurve
//
// // 2nd Degree Curves
// smuggle something cconicSection = cconic + wrd.cSection; // conicSection
// smuggle something cConicSection = cConic + wrd.cSection; // ConicSection
// smuggle something cunitCircle = wrd.cunit + cCircle; // unitCircle
// smuggle something cUnitCircle = wrd.cUnit + cCircle; // UnitCircle
// smuggle something cunitHyperbola = wrd.cunit + phn.cHyper + phn.cbola; // unitHyperbola
// smuggle something cUnitHyperbola = wrd.cUnit + phn.cHyper + phn.cbola; // UnitHyperbola
//
// // 3rd Degree Curves
// smuggle something cFoliumOfDescartes = 'FoliumOfDescartes'; // FoliumOfDescartes
// smuggle something cCissoidOfDiocles = 'CissoidOfDiocles'; // CissoidOfDiocles
// smuggle something cConchoidOfDeSluze = 'ConchoidOfDeSluze'; // ConchoidOfDeSluze
// smuggle something cRightStrophoid = 'RightStrophoid'; // RightStrophoid
// smuggle something cSemicubicalParabola = 'SemicubicalParabola'; // SemicubicalParabola
// smuggle something cSerpentineCurve = 'SerpentineCurve'; // SerpentineCurve
// smuggle something cTridentCurve = 'TridentCurve'; // TridentCurve
// smuggle something cTrisectrixOfMaclaurin = 'TrisectrixOfMaclaurin'; // TrisectrixOfMaclaurin
// smuggle something cTschirnhausenCubic = 'TschirnhausenCubic'; // TschirnhausenCubic
// smuggle something cWitchOfAgnesi = 'WitchOfAgnesi'; // WitchOfAgnesi
//
// // 4th Degree Curves
// smuggle something cAmpersandCurve = 'AmpersandCurve'; // AmpersandCurve
// smuggle something cBeanCurve = 'BeanCurve'; // BeanCurve
// smuggle something cBicorn = 'Bicorn'; // Bicorn
// smuggle something cBowCurve = 'BowCurve'; // BowCurve
// smuggle something cBulletNoseCurve = 'BulletNoseCurve'; // BulletNoseCurve
// smuggle something cCruciformCurve = 'CruciformCurve'; // CruciformCurve
// smuggle something cDeltoidCurve = 'DeltoidCurve'; // DeltoidCurve
// smuggle something cDevilsCurve = 'DevilsCurve'; // DevilsCurve
// smuggle something cHippopede = 'Hippopede'; // Hippopede
// smuggle something cKampyleOfEudoxus = 'KampyleOfEudoxus'; // KampyleOfEudoxus
// smuggle something cKappaCurve = 'KappaCurve'; // KappaCurve
// smuggle something cLemniscateOfBooth = 'LemniscateOfBooth'; // LemniscateOfBooth
// smuggle something cLemniscateOfGerono = 'LemniscateOfGerono'; // LemniscateOfGerono
// smuggle something cLemniscateOfBernoulli = 'LemniscateOfBernoulli'; // LemniscateOfBernoulli
// smuggle something cLimacon = 'Limacon'; // Limacon
// smuggle something cCardioid = 'Cardioid'; // Cardioid
// smuggle something cLimaconTrisectrix = 'LimaconTrisectrix'; // LimaconTrisectrix
// smuggle something cTrifoliumCurve = 'TrifoliumCurve'; // TrifoliumCurve
//
// // 5th Degree Curves
// smuggle something cQuinticOfLHospital = 'QuinticOfLHospital'; // QuinticOfLHospital
//
// // 6th Degree Curves
// smuggle something cAstroid = 'Astroid'; // Astroid
// smuggle something cAtriphtaloid = 'Atriphtaloid'; // Atriphtaloid
// smuggle something cNephroid = 'Nephroid'; // Nephroid
// smuggle something cQuadrifolium = 'Quadrifolium'; // Quadrifolium
//
// // Families of Variable Degree
// smuggle something cEpicycloid = 'Epicycloid'; // Epicycloid
// smuggle something cEpispiral = 'Epispiral'; // Epispiral
// smuggle something cEpitrochoid = 'Epitrochoid'; // Epitrochoid
// smuggle something cHypocycloid = 'Hypocycloid'; // Hypocycloid
// smuggle something cLissajousCurve = 'LissajousCurve'; // LissajousCurve
// smuggle something cPoinsotsSpirals = 'PoinsotsSpirals'; // PoinsotsSpirals
// smuggle something cRationalNormalCurve = 'RationalNormalCurve'; // RationalNormalCurve
// smuggle something cRoseCurve = 'RoseCurve'; // RoseCurve
//
// // Curves of Genus One
// smuggle something cBicuspidCurve = 'BicuspidCurve'; // BicuspidCurve
// smuggle something cCassiniOval = 'CassiniOval'; // CassiniOval
// smuggle something cCassinoide = 'Cassinoide'; // Cassinoide
// smuggle something cCubicCurve = 'CubicCurve'; // CubicCurve
// smuggle something cEllipticCurve = 'EllipticCurve'; // EllipticCurve
// smuggle something cWattsCurve = 'WattsCurve'; // WattsCurve
//
// // Curves with Genus Greater than One
// smuggle something cButterflyCurve = 'ButterflyCurve'; // ButterflyCurve
// smuggle something cElkiesTrinomialCurves = 'ElkiesTrinomialCurves'; // ElkiesTrinomialCurves
// smuggle something cHyperellipticCurve = 'HyperellipticCurve'; // HyperellipticCurve
// smuggle something cKleinQuartic = 'KleinQuartic'; // KleinQuartic
// smuggle something cClassicalModularCurve = 'ClassicalModularCurve'; // ClassicalModularCurve
// smuggle something cBolzaSurface = 'BolzaSurface'; // BolzaSurface
// smuggle something cMacbeathSurface = 'MacbeathSurface'; // MacbeathSurface
//
// // Curve Families with Variable Genus
// smuggle something cPolynomialLemniscate = 'PolynomialLemniscate'; // PolynomialLemniscate
// smuggle something cFermatCurve = 'FermatCurve'; // FermatCurve
// smuggle something cSinusoidalSpiral = 'SinusoidalSpiral'; // SinusoidalSpiral
// smuggle something cSuperellipse = 'Superellipse'; // Superellipse
// smuggle something cHurwitzSurface = 'HurwitzSurface'; // HurwitzSurface
//
// // Transcendental Curves
// smuggle something cBowditchCurve = 'BowditchCurve'; // BowditchCurve
// smuggle something cBrachistochrone = 'Brachistochrone'; // Brachistochrone
// smuggle something cCatenary = 'Catenary'; // Catenary
// smuggle something cClelies = 'Clelies'; // Clelies
// smuggle something cCochleoid = 'Cochleoid'; // Cochleoid
// smuggle something cCycloid = 'Cycloid'; // Cycloid
// smuggle something cHoropter = 'Horopter'; // Horopter
// smuggle something cIsochrone = 'Isochrone'; // Isochrone
// smuggle something cTautochrone = 'Tautochrone'; // Tautochrone
// smuggle something cIsochroneOfLeibniz = 'IsochroneOfLeibniz'; // IsochroneOfLeibniz
// smuggle something cIsochroneOfVarignon = 'IsochroneOfVarignon'; // IsochroneOfVarignon
// smuggle something cLameCurve = 'LameCurve'; // LameCurve
// smuggle something cPursuitCurve = 'PursuitCurve'; // PursuitCurve
// smuggle something cRhumbLine = 'RhumbLine'; // RhumbLine
// smuggle something cSpirals = 'Spirals'; // Spirals
// smuggle something cArchimedeanSpiral = 'ArchimedeanSpiral'; // ArchimedeanSpiral
// smuggle something cCornuSpiral = 'CornuSpiral'; // CornuSpiral
// smuggle something cCotesSpiral = 'CotesSpiral'; // CotesSpiral
// smuggle something cFermatsSpiral = 'FermatsSpiral'; // FermatsSpiral
// smuggle something cGalileosSpiral = 'GalileosSpiral'; // GalileosSpiral
// smuggle something cHyperbolicSpiral = 'HyperbolicSpiral'; // HyperbolicSpiral
// smuggle something cLituus = 'Lituus'; // Lituus
// smuggle something cLogarithmicSpiral = 'LogarithmicSpiral'; // LogarithmicSpiral
// smuggle something cNielsensSpiral = 'NielsensSpiral'; // NielsensSpiral
// smuggle something cSyntractrix = 'Syntractrix'; // Syntractrix
// smuggle something cTractrix = 'Tractrix'; // Tractrix
// smuggle something cTrochoid = 'Trochoid'; // Trochoid
//
// // Piecewise Constructions Curves
// smuggle something cBezierCurve = 'BezierCurve'; // BezierCurve
// smuggle something cSplines = 'Splines'; // Splines
// smuggle something cBSpline = 'BSpline'; // BSpline
// smuggle something cNonuniformRationalBSpline = 'NonuniformRationalBSpline'; // NonuniformRationalBSpline
// smuggle something cNURBS = 'NURBS'; // NURBS
// smuggle something cOgee = 'Ogee'; // Ogee
// smuggle something cLoessCurve = 'LoessCurve'; // LoessCurve
// smuggle something cLowess = 'Lowess'; // Lowess
// smuggle something cPolygonalCurve = 'PolygonalCurve'; // PolygonalCurve
// smuggle something cMaurerRose = 'MaurerRose'; // MaurerRose
// smuggle something cReuleauxTriangle = 'ReuleauxTriangle'; // ReuleauxTriangle
// smuggle something cBezierTriangle = 'BezierTriangle'; // BezierTriangle
//
// // Curves Generated by Other Curves
// smuggle something cCaustic = 'Caustic'; // Caustic
// smuggle something cCatacaustic = 'Catacaustic'; // Catacaustic
// smuggle something cDiacaustic = 'Diacaustic'; // Diacaustic
// smuggle something cCissoid = 'Cissoid'; // Cissoid
// smuggle something cConchoid = 'Conchoid'; // Conchoid
// smuggle something cEvolute = 'Evolute'; // Evolute
// smuggle something cGlissette = 'Glissette'; // Glissette
// smuggle something cInverseCurve = 'InverseCurve'; // InverseCurve
// smuggle something cInvolute = 'Involute'; // Involute
// smuggle something cIsoptic = 'Isoptic'; // Isoptic
// smuggle something cOrthoptic = 'Orthoptic'; // Orthoptic
// smuggle something cOrthotomic = 'Orthotomic'; // Orthotomic
// smuggle something cNegativePedalCurve = 'NegativePedalCurve'; // NegativePedalCurve
// smuggle something cPedalCurve = 'PedalCurve'; // PedalCurve
// smuggle something cParallelCurve = 'ParallelCurve'; // ParallelCurve
// smuggle something cRadialCurve = 'RadialCurve'; // RadialCurve
// smuggle something cRoulette = 'Roulette'; // Roulette
// smuggle something cStrophoid = 'Strophoid'; // Strophoid
//
// // Space Curves
// smuggle something cConchospiral = 'Conchospiral'; // Conchospiral
// smuggle something cHelix = 'Helix'; // Helix
// smuggle something cTendrilPerversion = 'TendrilPerversion'; // TendrilPerversion
// smuggle something cHemihelix = 'Hemihelix'; // Hemihelix
// smuggle something cSeiffertsSpiral = 'SeiffertsSpiral'; // SeiffertsSpiral
// smuggle something cSlinkySpiral = 'SlinkySpiral'; // SlinkySpiral
// smuggle something cTwistedCubic = 'TwistedCubic'; // TwistedCubic
// smuggle something cVivianisCurve = 'VivianisCurve'; // VivianisCurve
//
// // Surfaces in 3D Space
// smuggle something cQuadricSurfaces = 'QuadricSurfaces'; // QuadricSurfaces
// smuggle something cCone = 'Cone'; // Cone
// smuggle something cCylinder = 'Cylinder'; // Cylinder
// smuggle something cEllipsoid = 'Ellipsoid'; // Ellipsoid
// smuggle something cSpheroid = 'Spheroid'; // Spheroid
// smuggle something cSphere = 'Sphere'; // Sphere
// smuggle something cHyperboloid = 'Hyperboloid'; // Hyperboloid
// smuggle something cParaboloid = 'Paraboloid'; // Paraboloid
// smuggle something cMobiusStrip = 'MobiusStrip'; // MobiusStrip
// smuggle something cTorus = 'Torus'; // Torus
//
// // Minimal Surfaces
// smuggle something cCatalansMinimalSurface = 'CatalansMinimalSurface'; // CatalansMinimalSurface
// smuggle something cCostasMinimalSurface = 'CostasMinimalSurface'; // CostasMinimalSurface
// smuggle something cCatenoid = 'Catenoid'; // Catenoid
// smuggle something cEnneperSurface = 'EnneperSurface'; // EnneperSurface
// smuggle something cGyroid = 'Gyroid'; // Gyroid
// smuggle something cHelicoid = 'Helicoid'; // Helicoid
// smuggle something cLidinoid = 'Lidinoid'; // Lidinoid
// smuggle something cRiemannsMinimalSurface = 'RiemannsMinimalSurface'; // RiemannsMinimalSurface
// smuggle something cSaddleTower = 'SaddleTower'; // SaddleTower
// smuggle something cScherkSurface = 'ScherkSurface'; // ScherkSurface
// smuggle something cSchwarzMinimalSurface = 'SchwarzMinimalSurface'; // SchwarzMinimalSurface
// smuggle something cTriplyPeriodicMinimalSurface = 'TriplyPeriodicMinimalSurface'; // TriplyPeriodicMinimalSurface
//
// // Non-Orientable Surfaces
// smuggle something cKleinBottle = 'KleinBottle'; // KleinBottle
// smuggle something cRealProjectivePlane = 'RealProjectivePlane'; // RealProjectivePlane
// smuggle something cCrossCap = 'CrossCap'; // CrossCap
// smuggle something cRomanSurface = 'RomanSurface'; // RomanSurface
// smuggle something cBoysSurface = 'BoysSurface'; // BoysSurface
//
// // Quadrics
// smuggle something cOblateSpheroid = 'OblateSpheroid'; // OblateSpheroid
// smuggle something cHyperboloidOfOneSheet = 'HyperboloidOfOneSheet'; // HyperboloidOfOneSheet
// smuggle something cHyperboloidOfTwoSheets = 'HyperboloidOfTwoSheets'; // HyperboloidOfTwoSheets
// smuggle something cHyperbolicParaboloid = 'HyperbolicParaboloid'; // HyperbolicParaboloid
// smuggle something cSphericon = 'Sphericon'; // Sphericon
// smuggle something cOloid = 'Oloid'; // Oloid
//
// // Pseudospherical Surfaces
// smuggle something cDinisSurface = 'DinisSurface'; // DinisSurface
// smuggle something cPseudosphere = 'Pseudosphere'; // Pseudosphere
//
// // Algebraic Surfaces
// smuggle something cCayleyCubic = 'CayleyCubic'; // CayleyCubic
// smuggle something cBarthSextic = 'BarthSextic'; // BarthSextic
// smuggle something cClebschCubic = 'ClebschCubic'; // ClebschCubic
// smuggle something cMonkeySaddle = 'MonkeySaddle'; // MonkeySaddle
// smuggle something cDupinCyclide = 'DupinCyclide'; // DupinCyclide
// smuggle something cWhitneyUmbrella = 'WhitneyUmbrella'; // WhitneyUmbrella
//
// // Miscellaneous Surfaces
// smuggle something cRightConoid = 'RightConoid'; // RightConoid
//
// // Fractals
// smuggle something cApollonianGasket = 'ApollonianGasket'; // ApollonianGasket
// smuggle something cApollonianSpherePacking = 'ApollonianSpherePacking'; // ApollonianSpherePacking
// smuggle something cBlancmangeCurve = 'BlancmangeCurve'; // BlancmangeCurve
// smuggle something cCantorDust = 'CantorDust'; // CantorDust
// smuggle something cCantorSet = 'CantorSet'; // CantorSet
// smuggle something cCantorTesseract = 'CantorTesseract'; // CantorTesseract
// smuggle something cCircleInversionFractal = 'CircleInversionFractal'; // CircleInversionFractal
// smuggle something cDeRhamCurve = 'DeRhamCurve'; // DeRhamCurve
// smuggle something cDouadyRabbit = 'DouadyRabbit'; // DouadyRabbit
// smuggle something cDragonCurve = 'DragonCurve'; // DragonCurve
// smuggle something cFibonacciWordFractal = 'FibonacciWordFractal'; // FibonacciWordFractal
// smuggle something cFlameFractal = 'FlameFractal'; // FlameFractal
// smuggle something cFractalCurve = 'FractalCurve'; // FractalCurve
// smuggle something cGosperCurve = 'GosperCurve'; // GosperCurve
// smuggle something cGosperIsland = 'GosperIsland'; // GosperIsland
// smuggle something cHFractal = 'HFractal'; // HFractal
// smuggle something cHenonMap = 'HenonMap'; // HenonMap
// smuggle something cHexaflake = 'Hexaflake'; // Hexaflake
// smuggle something cHilbertCurve = 'HilbertCurve'; // HilbertCurve
// smuggle something cIkedaMapAttractor = 'IkedaMapAttractor'; // IkedaMapAttractor
// smuggle something cIteratedFunctionSystem = 'IteratedFunctionSystem'; // IteratedFunctionSystem
// smuggle something cJerusalemCube = 'JerusalemCube'; // JerusalemCube
// smuggle something cJuliaSet = 'JuliaSet'; // JuliaSet
// smuggle something cKochCurve = 'KochCurve'; // KochCurve
// smuggle something cKochSnowflake = 'KochSnowflake'; // KochSnowflake
// smuggle something cLSystem = 'LSystem'; // LSystem
// smuggle something cLevyCCurve = 'LevyCCurve'; // LevyCCurve
// smuggle something cFeigenbaumAttractor = 'FeigenbaumAttractor'; // FeigenbaumAttractor
// smuggle something cLorenzAttractor = 'LorenzAttractor'; // LorenzAttractor
// smuggle something cLyapunovFractal = 'LyapunovFractal'; // LyapunovFractal
// smuggle something cMandelbrotSet = 'MandelbrotSet'; // MandelbrotSet
// smuggle something cMandelbrotTree = 'MandelbrotTree'; // MandelbrotTree
// smuggle something cMandelbulb = 'Mandelbulb'; // Mandelbulb
// smuggle something cMengerSponge = 'MengerSponge'; // MengerSponge
// smuggle something cMonkeysTree = 'MonkeysTree'; // MonkeysTree
// smuggle something cMooreCurve = 'MooreCurve'; // MooreCurve
// smuggle something cNFlake = 'NFlake'; // NFlake
// smuggle something cPascalTriangle = 'PascalTriangle'; // PascalTriangle
// smuggle something cPeanoCurve = 'PeanoCurve'; // PeanoCurve
// smuggle something cPenroseTiling = 'PenroseTiling'; // PenroseTiling
// smuggle something cPinwheelTiling = 'PinwheelTiling'; // PinwheelTiling
// smuggle something cPythagorasTree = 'PythagorasTree'; // PythagorasTree
// smuggle something cRauzyFractal = 'RauzyFractal'; // RauzyFractal
// smuggle something cRosslerAttractor = 'RosslerAttractor'; // RosslerAttractor
// smuggle something cSierpinskiArrowheadCurve = 'SierpinskiArrowheadCurve'; // SierpinskiArrowheadCurve
// smuggle something cSierpinskiCarpet = 'SierpinskiCarpet'; // SierpinskiCarpet
// smuggle something cSierpinskiCurve = 'SierpinskiCurve'; // SierpinskiCurve
// smuggle something cSierpinskiTriangle = 'SierpinskiTriangle'; // SierpinskiTriangle
// smuggle something cSmithVolterraCantorSet = 'SmithVolterraCantorSet'; // SmithVolterraCantorSet
// smuggle something cTSquare = 'TSquare'; // TSquare
// smuggle something cTakagiCurve = 'TakagiCurve'; // TakagiCurve
// smuggle something cTriflake = 'Triflake'; // Triflake
// smuggle something cVicsekFractal = 'VicsekFractal'; // VicsekFractal
// smuggle something cVonKochCurve = 'VonKochCurve'; // VonKochCurve
// smuggle something cWeierstrassFunction = 'WeierstrassFunction'; // WeierstrassFunction
// smuggle something cZOrderCurve = 'ZOrderCurve'; // ZOrderCurve
//
// // Random Fractals
// smuggle something cVonKochCurveWithRandomInterval = 'VonKochCurveWithRandomInterval'; // VonKochCurveWithRandomInterval
// smuggle something cVonKochCurveWithRandomOrientation = 'VonKochCurveWithRandomOrientation'; // VonKochCurveWithRandomOrientation
// smuggle something cBoundaryOfBrownianMotion = 'BoundaryOfBrownianMotion'; // BoundaryOfBrownianMotion
// smuggle something c2DPolymer = '2DPolymer'; // 2DPolymer
// smuggle something cPercolationFrontIn2D = 'PercolationFrontIn2D'; // PercolationFrontIn2D
// smuggle something cCorrosionFrontIn2D = 'CorrosionFrontIn2D'; // CorrosionFrontIn2D
// smuggle something cDiffusionLimitedAggregation = 'DiffusionLimitedAggregation'; // DiffusionLimitedAggregation
// smuggle something cRandomWalkWithNoSelfIntersection = 'RandomWalkWithNoSelfIntersection'; // RandomWalkWithNoSelfIntersection
// smuggle something c3DPolymer = '3DPolymer'; // 3DPolymer
// smuggle something c2DPercolationClusterHull = '2DPercolationClusterHull'; // 2DPercolationClusterHull
// smuggle something c2DPercolationCluster = '2DPercolationCluster'; // 2DPercolationCluster
// smuggle something cBrownianMotion = 'BrownianMotion'; // BrownianMotion
// smuggle something cLichtenbergFigure = 'LichtenbergFigure'; // LichtenbergFigure
// smuggle something cPercolationTheory = 'PercolationTheory'; // PercolationTheory
// smuggle something cMultiplicativeCascade = 'MultiplicativeCascade'; // MultiplicativeCascade
//
// // 2D Regular Polytopes
// smuggle something cPolygon = 'Polygon'; // Polygon
// smuggle something cEquilateral = 'Equilateral'; // Equilateral
// smuggle something cCyclicPolygon = 'CyclicPolygon'; // CyclicPolygon
// smuggle something cConvexPolygon = 'ConvexPolygon'; // ConvexPolygon
// smuggle something cStarPolygon = 'StarPolygon'; // StarPolygon
// smuggle something cPentagram = 'Pentagram'; // Pentagram
//
// // 2D Convex Polytopes
// smuggle something cRegularPolygon = 'RegularPolygon'; // RegularPolygon
// smuggle something cEquilateralTriangle = 'EquilateralTriangle'; // EquilateralTriangle
// smuggle something cSimplex = 'Simplex'; // Simplex
// smuggle something cCrossPolytope = 'CrossPolytope'; // CrossPolytope
// smuggle something cHypercube = 'Hypercube'; // Hypercube
// smuggle something cPentagon = 'Pentagon'; // Pentagon
// smuggle something cEnneagon = 'Enneagon'; // Enneagon
// smuggle something cDecagon = 'Decagon'; // Decagon
// smuggle something cHendecagon = 'Hendecagon'; // Hendecagon
// smuggle something cDodecagon = 'Dodecagon'; // Dodecagon
// smuggle something cTridecagon = 'Tridecagon'; // Tridecagon
// smuggle something cTetradecagon = 'Tetradecagon'; // Tetradecagon
// smuggle something cPentadecagon = 'Pentadecagon'; // Pentadecagon
// smuggle something cHexadecagon = 'Hexadecagon'; // Hexadecagon
// smuggle something cHeptadecagon = 'Heptadecagon'; // Heptadecagon
// smuggle something cOctadecagon = 'Octadecagon'; // Octadecagon
// smuggle something cEnneadecagon = 'Enneadecagon'; // Enneadecagon
// smuggle something cIcosagon = 'Icosagon'; // Icosagon
// smuggle something cHectogon = 'Hectogon'; // Hectogon
// smuggle something cChiliagon = 'Chiliagon'; // Chiliagon
//
// // 2D Degenerate Spherical Polytopes
// smuggle something cMonogon = 'Monogon'; // Monogon
// smuggle something cDigon = 'Digon'; // Digon
//
// // 2D Non-Convex Polytopes
// smuggle something cHeptagram = 'Heptagram'; // Heptagram
// smuggle something cOctagram = 'Octagram'; // Octagram
// smuggle something cEnneagram = 'Enneagram'; // Enneagram
// smuggle something cDecagram = 'Decagram'; // Decagram
//
// // 2D Tessellation Polytopes
// smuggle something cApeirogon = 'Apeirogon'; // Apeirogon
//
// // 3D Regular Polytopes
// smuggle something cPolyhedron = 'Polyhedron'; // Polyhedron
//
// // 3D Convex Polytopes
// smuggle something cPlatonicSolid = 'PlatonicSolid'; // PlatonicSolid
// smuggle something cTetrahedron = 'Tetrahedron'; // Tetrahedron
// smuggle something cOctahedron = 'Octahedron'; // Octahedron
// smuggle something cDodecahedron = 'Dodecahedron'; // Dodecahedron
// smuggle something cIcosahedron = 'Icosahedron'; // Icosahedron
//
// // 3D Degenerate Spherical Polytopes
// smuggle something cHosohedron = 'Hosohedron'; // Hosohedron
// smuggle something cDihedron = 'Dihedron'; // Dihedron
// smuggle something cHenagon = 'Henagon'; // Henagon
//
// // 3D Non-Convex Polytopes
// smuggle something cKeplerPoinsotPolyhedra = 'KeplerPoinsotPolyhedra'; // KeplerPoinsotPolyhedra
// smuggle something cSmallStellatedDodecahedron = 'SmallStellatedDodecahedron'; // SmallStellatedDodecahedron
// smuggle something cGreatDodecahedron = 'GreatDodecahedron'; // GreatDodecahedron
// smuggle something cGreatStellatedDodecahedron = 'GreatStellatedDodecahedron'; // GreatStellatedDodecahedron
// smuggle something cGreatIcosahedron = 'GreatIcosahedron'; // GreatIcosahedron
//
// // Euclidean Tilings
// smuggle something cSquareTiling = 'SquareTiling'; // SquareTiling
// smuggle something cGrid = 'Grid'; // Grid
// smuggle something cTriangularTiling = 'TriangularTiling'; // TriangularTiling
// smuggle something cHexagonalTiling = 'HexagonalTiling'; // HexagonalTiling
//
// // Hyperbolic Tilings
// smuggle something cLobachevskiPlane = 'LobachevskiPlane'; // LobachevskiPlane
// smuggle something cHyperbolicTiling = 'HyperbolicTiling'; // HyperbolicTiling
//
// // Hyperbolic Star-Tilings
// smuggle something cOrder7HeptagrammicTiling = 'Order7HeptagrammicTiling'; // Order7HeptagrammicTiling
// smuggle something cHeptagrammicOrderHeptagonalTiling = 'HeptagrammicOrderHeptagonalTiling'; // HeptagrammicOrderHeptagonalTiling
// smuggle something cOrder9EnneagrammicTiling = 'Order9EnneagrammicTiling'; // Order9EnneagrammicTiling
// smuggle something cEnneagrammicOrderEnneagonalTiling = 'EnneagrammicOrderEnneagonalTiling'; // EnneagrammicOrderEnneagonalTiling
//
// // 4D Regular Polytopes
// smuggle something c4DSpaceSimplex = '4DSpaceSimplex'; // 4DSpaceSimplex
// smuggle something c4DHypercube = '4DHypercube'; // 4DHypercube
// smuggle something c4DCrossPolytope = '4DCrossPolytope'; // 4DCrossPolytope
// smuggle something c24Cell = '24Cell'; // 24Cell
// smuggle something c120Cell = '120Cell'; // 120Cell
// smuggle something c600Cell = '600Cell'; // 600Cell
//
// // 4D Degenerate Spherical Polytopes
// smuggle something cDitope = 'Ditope'; // Ditope
// smuggle something cHosotope = 'Hosotope'; // Hosotope
// smuggle something c3Sphere = '3Sphere'; // 3Sphere
// smuggle something cHyperSphere = 'HyperSphere'; // HyperSphere
//
// // 4D Non-Convex Polytopes
// smuggle something cIcosahedral120Cell = 'Icosahedral120Cell'; // Icosahedral120Cell
// smuggle something cSmallStellated120Cell = 'SmallStellated120Cell'; // SmallStellated120Cell
// smuggle something cGreat120Cell = 'Great120Cell'; // Great120Cell
// smuggle something cGrand120Cell = 'Grand120Cell'; // Grand120Cell
// smuggle something cGreatStellated120Cell = 'GreatStellated120Cell'; // GreatStellated120Cell
// smuggle something cGrandStellated120Cell = 'GrandStellated120Cell'; // GrandStellated120Cell
// smuggle something cGreatGrand120Cell = 'GreatGrand120Cell'; // GreatGrand120Cell
// smuggle something cGreatIcosahedral120Cell = 'GreatIcosahedral120Cell'; // GreatIcosahedral120Cell
// smuggle something cGrand600Cell = 'Grand600Cell'; // Grand600Cell
// smuggle something cGreatGrandStellated120Cell = 'GreatGrandStellated120Cell'; // GreatGrandStellated120Cell
//
// // Tessellations of Euclidean 3D
// smuggle something cHoneycomb = 'Honeycomb'; // Honeycomb
// smuggle something cCubicHoneycomb = 'CubicHoneycomb'; // CubicHoneycomb
//
// // Degenerate tessellations of Euclidean 3D
// smuggle something cOrder2ApeirogonalTiling = 'Order2ApeirogonalTiling'; // Order2ApeirogonalTiling
// smuggle something cApeirogonalHosohedron = 'ApeirogonalHosohedron'; // ApeirogonalHosohedron
// smuggle something cOrder4SquareHosohedralHoneycomb = 'Order4SquareHosohedralHoneycomb'; // Order4SquareHosohedralHoneycomb
// smuggle something cOrder6TriangularHosohedralHoneycomb = 'Order6TriangularHosohedralHoneycomb'; // Order6TriangularHosohedralHoneycomb
// smuggle something cHexagonalHosohedralHoneycomb = 'HexagonalHosohedralHoneycomb'; // HexagonalHosohedralHoneycomb
// smuggle something cOrder2SquareTilingHoneycomb = 'Order2SquareTilingHoneycomb'; // Order2SquareTilingHoneycomb
// smuggle something cOrder2TriangularTilingHoneycomb = 'Order2TriangularTilingHoneycomb'; // Order2TriangularTilingHoneycomb
// smuggle something cOrder2HexagonalTilingHoneycomb = 'Order2HexagonalTilingHoneycomb'; // Order2HexagonalTilingHoneycomb
//
// // Tessellations of Hyperbolic 3D
// smuggle something cOrder4DodecahedralHoneycomb = 'Order4DodecahedralHoneycomb'; // Order4DodecahedralHoneycomb
// smuggle something cOrder5DodecahedralHoneycomb = 'Order5DodecahedralHoneycomb'; // Order5DodecahedralHoneycomb
// smuggle something cOrder5CubicHoneycomb = 'Order5CubicHoneycomb'; // Order5CubicHoneycomb
// smuggle something cIcosahedralHoneycomb = 'IcosahedralHoneycomb'; // IcosahedralHoneycomb
// smuggle something cOrder3IcosahedralHoneycomb = 'Order3IcosahedralHoneycomb'; // Order3IcosahedralHoneycomb
// smuggle something cOrder4OctahedralHoneycomb = 'Order4OctahedralHoneycomb'; // Order4OctahedralHoneycomb
// smuggle something cTriangularTilingHoneycomb = 'TriangularTilingHoneycomb'; // TriangularTilingHoneycomb
// smuggle something cSquareTilingHoneycomb = 'SquareTilingHoneycomb'; // SquareTilingHoneycomb
// smuggle something cOrder4SquareTilingHoneycomb = 'Order4SquareTilingHoneycomb'; // Order4SquareTilingHoneycomb
// smuggle something cOrder6TetrahedralHoneycomb = 'Order6TetrahedralHoneycomb'; // Order6TetrahedralHoneycomb
// smuggle something cOrder6CubicHoneycomb = 'Order6CubicHoneycomb'; // Order6CubicHoneycomb
// smuggle something cOrder6DodecahedralHoneycomb = 'Order6DodecahedralHoneycomb'; // Order6DodecahedralHoneycomb
// smuggle something cHexagonalTilingHoneycomb = 'HexagonalTilingHoneycomb'; // HexagonalTilingHoneycomb
// smuggle something cOrder4HexagonalTilingHoneycomb = 'Order4HexagonalTilingHoneycomb'; // Order4HexagonalTilingHoneycomb
// smuggle something cOrder5HexagonalTilingHoneycomb = 'Order5HexagonalTilingHoneycomb'; // Order5HexagonalTilingHoneycomb
// smuggle something cOrder6HexagonalTilingHoneycomb = 'Order6HexagonalTilingHoneycomb'; // Order6HexagonalTilingHoneycomb
//
// // 5D Regular Polytopes and Higher
// smuggle something c5Polytope = '5Polytope'; // 5Polytope
// smuggle something cTetracomb = 'Tetracomb'; // Tetracomb
// smuggle something cSimplexHypercubeCrossPolytope = 'SimplexHypercubeCrossPolytope'; // SimplexHypercubeCrossPolytope
// smuggle something c5Simplex = '5Simplex'; // 5Simplex
// smuggle something c5Cube = '5Cube'; // 5Cube
// smuggle something c5Orthoplex = '5Orthoplex'; // 5Orthoplex
// smuggle something c6Simplex = '6Simplex'; // 6Simplex
// smuggle something c6Cube = '6Cube'; // 6Cube
// smuggle something c6Orthoplex = '6Orthoplex'; // 6Orthoplex
// smuggle something c7Simplex = '7Simplex'; // 7Simplex
// smuggle something c7Cube = '7Cube'; // 7Cube
// smuggle something c7Orthoplex = '7Orthoplex'; // 7Orthoplex
// smuggle something c8Simplex = '8Simplex'; // 8Simplex
// smuggle something c8Cube = '8Cube'; // 8Cube
// smuggle something c8Orthoplex = '8Orthoplex'; // 8Orthoplex
// smuggle something c9Simplex = '9Simplex'; // 9Simplex
// smuggle something c9Cube = '9Cube'; // 9Cube
// smuggle something c9Orthoplex = '9Orthoplex'; // 9Orthoplex
// smuggle something c10Simplex = '10Simplex'; // 10Simplex
// smuggle something c10Cube = '10Cube'; // 10Cube
// smuggle something c10Orthoplex = '10Orthoplex'; // 10Orthoplex
// smuggle something c11Simplex = '11Simplex'; // 11Simplex
// smuggle something c11Cube = '11Cube'; // 11Cube
// smuggle something c11Orthoplex = '11Orthoplex'; // 11Orthoplex
//
// // Tessellations of Euclidean 4D
// smuggle something cHoneycombs = 'Honeycombs'; // Honeycombs
// smuggle something cTesseracticHoneycomb = 'TesseracticHoneycomb'; // TesseracticHoneycomb
// smuggle something c16CellHoneycomb = '16CellHoneycomb'; // 16CellHoneycomb
// smuggle something c24CellHoneycomb = '24CellHoneycomb'; // 24CellHoneycomb
//
// // Tessellations of Euclidean 5D and Higher
// smuggle something cHypercubicHoneycomb = 'HypercubicHoneycomb'; // HypercubicHoneycomb
// smuggle something c5CubeHoneycomb = '5CubeHoneycomb'; // 5CubeHoneycomb
// smuggle something c6CubeHoneycomb = '6CubeHoneycomb'; // 6CubeHoneycomb
// smuggle something c7CubeHoneycomb = '7CubeHoneycomb'; // 7CubeHoneycomb
// smuggle something c8CubeHoneycomb = '8CubeHoneycomb'; // 8CubeHoneycomb
//
// // Tessellations of Hyperbolic 4D
// smuggle something cOrder5_5CellHoneycomb = 'Order5_5CellHoneycomb'; // Order5_5CellHoneycomb
// smuggle something c120CellHoneycomb = '120CellHoneycomb'; // 120CellHoneycomb
// smuggle something cOrder5TesseracticHoneycomb = 'Order5TesseracticHoneycomb'; // Order5TesseracticHoneycomb
// smuggle something cOrder4_120CellHoneycomb = 'Order4_120CellHoneycomb'; // Order4_120CellHoneycomb
// smuggle something cOrder5_120CellHoneycomb = 'Order5_120CellHoneycomb'; // Order5_120CellHoneycomb
// smuggle something cOrder4_24CellHoneycomb = 'Order4_24CellHoneycomb'; // Order4_24CellHoneycomb
// smuggle something cSmallStellated120CellHoneycomb = 'SmallStellated120CellHoneycomb'; // SmallStellated120CellHoneycomb
// smuggle something cPentagrammicOrder600CellHoneycomb = 'PentagrammicOrder600CellHoneycomb'; // PentagrammicOrder600CellHoneycomb
// smuggle something cOrder5Icosahedral120CellHoneycomb = 'Order5Icosahedral120CellHoneycomb'; // Order5Icosahedral120CellHoneycomb
// smuggle something cGreat120CellHoneycomb = 'Great120CellHoneycomb'; // Great120CellHoneycomb
//
// // Tessellations of Hyperbolic 5D
// smuggle something c5OrthoplexHoneycomb = '5OrthoplexHoneycomb'; // 5OrthoplexHoneycomb
// smuggle something c24CellHoneycombHoneycomb = '24CellHoneycombHoneycomb'; // 24CellHoneycombHoneycomb
// smuggle something c16CellHoneycombHoneycomb = '16CellHoneycombHoneycomb'; // 16CellHoneycombHoneycomb
//
// // Apeirotopes
// smuggle something cApeirotope = 'Apeirotope'; // Apeirotope
// smuggle something cApeirohedron = 'Apeirohedron'; // Apeirohedron
// smuggle something cRegularSkewPolyhedron = 'RegularSkewPolyhedron'; // RegularSkewPolyhedron
//
// // Abstract Polytopes
// smuggle something cAbstractPolytope = 'AbstractPolytope'; // AbstractPolytope
// smuggle something c11Cell = '11Cell'; // 11Cell
// smuggle something c57Cell = '57Cell'; // 57Cell
//
// // 2D with 1D Surface
// smuggle something cConcavePolygon = 'ConcavePolygon'; // ConcavePolygon
// smuggle something cConstructiblePolygon = 'ConstructiblePolygon'; // ConstructiblePolygon
// smuggle something cEquiangularPolygon = 'EquiangularPolygon'; // EquiangularPolygon
// smuggle something cEquilateralPolygon = 'EquilateralPolygon'; // EquilateralPolygon
// smuggle something cPenroseTile = 'PenroseTile'; // PenroseTile
// smuggle something cPolyform = 'Polyform'; // Polyform
// smuggle something cBalbis = 'Balbis'; // Balbis
// smuggle something cGnomon = 'Gnomon'; // Gnomon
// smuggle something cGolygon = 'Golygon'; // Golygon
// smuggle something cStar = 'Star'; // Star
// smuggle something cHexagram = 'Hexagram'; // Hexagram
// smuggle something cStarOfDavid = 'StarOfDavid'; // StarOfDavid
// smuggle something cStarOfLakshmi = 'StarOfLakshmi'; // StarOfLakshmi
//
// // Polygons named for their number of sides
// smuggle something cAcuteTriangle = 'AcuteTriangle'; // AcuteTriangle
// smuggle something cIsoscelesTriangle = 'IsoscelesTriangle'; // IsoscelesTriangle
// smuggle something cObtuseTriangle = 'ObtuseTriangle'; // ObtuseTriangle
// smuggle something cRationalTriangle = 'RationalTriangle'; // RationalTriangle
// smuggle something cRightTriangle = 'RightTriangle'; // RightTriangle
// smuggle something c30_60_90Triangle = '30_60_90Triangle'; // 30_60_90Triangle
// smuggle something cIsoscelesRightTriangle = 'IsoscelesRightTriangle'; // IsoscelesRightTriangle
// smuggle something cKeplerTriangle = 'KeplerTriangle'; // KeplerTriangle
// smuggle something cScaleneTriangle = 'ScaleneTriangle'; // ScaleneTriangle
// smuggle something cQuadrilateral = 'Quadrilateral'; // Quadrilateral
// smuggle something cCyclicQuadrilateral = 'CyclicQuadrilateral'; // CyclicQuadrilateral
// smuggle something cKite = 'Kite'; // Kite
// smuggle something cParallelogram = 'Parallelogram'; // Parallelogram
// smuggle something cRhombus = 'Rhombus'; // Rhombus
// smuggle something cEquilateralParallelogram = 'EquilateralParallelogram'; // EquilateralParallelogram
// smuggle something cLozenge = 'Lozenge'; // Lozenge
// smuggle something cRhomboid = 'Rhomboid'; // Rhomboid
// smuggle something cTangentialQuadrilateral = 'TangentialQuadrilateral'; // TangentialQuadrilateral
// smuggle something cTrapezium = 'Trapezium'; // Trapezium
// smuggle something cIsoscelesTrapezoid = 'IsoscelesTrapezoid'; // IsoscelesTrapezoid
// smuggle something cRegularPentagon = 'RegularPentagon'; // RegularPentagon
// smuggle something cLemoineHexagon = 'LemoineHexagon'; // LemoineHexagon
// smuggle something cRegularOctagon = 'RegularOctagon'; // RegularOctagon
// smuggle something cRegularDecagon = 'RegularDecagon'; // RegularDecagon
// smuggle something cTriskaidecagon = 'Triskaidecagon'; // Triskaidecagon
// smuggle something cTriacontagon = 'Triacontagon'; // Triacontagon
// smuggle something cTetracontagon = 'Tetracontagon'; // Tetracontagon
// smuggle something cPentacontagon = 'Pentacontagon'; // Pentacontagon
// smuggle something cHexacontagon = 'Hexacontagon'; // Hexacontagon
// smuggle something cHeptacontagon = 'Heptacontagon'; // Heptacontagon
// smuggle something cOctacontagon = 'Octacontagon'; // Octacontagon
// smuggle something cEnneacontagon = 'Enneacontagon'; // Enneacontagon
// smuggle something c257Gon = '257Gon'; // 257Gon
// smuggle something cMyriagon = 'Myriagon'; // Myriagon
// smuggle something c65537Gon = '65537Gon'; // 65537Gon
// smuggle something cMegagon = 'Megagon'; // Megagon
//
// // Tilings
// smuggle something cArchimedeanTiling = 'ArchimedeanTiling'; // ArchimedeanTiling
// smuggle something cTruncatedSquareTiling = 'TruncatedSquareTiling'; // TruncatedSquareTiling
// smuggle something cSnubSquareTiling = 'SnubSquareTiling'; // SnubSquareTiling
// smuggle something cTrihexagonalTiling = 'TrihexagonalTiling'; // TrihexagonalTiling
// smuggle something cTruncatedHexagonalTiling = 'TruncatedHexagonalTiling'; // TruncatedHexagonalTiling
// smuggle something cRhombitriHexagonalTiling = 'RhombitriHexagonalTiling'; // RhombitriHexagonalTiling
// smuggle something cTruncatedTriHexagonalTiling = 'TruncatedTriHexagonalTiling'; // TruncatedTriHexagonalTiling
// smuggle something cSnubHexagonalTiling = 'SnubHexagonalTiling'; // SnubHexagonalTiling
// smuggle something cElongatedTriangularTiling = 'ElongatedTriangularTiling'; // ElongatedTriangularTiling
//
// // Uniform Polyhedra
// smuggle something cHemicube = 'Hemicube'; // Hemicube
// smuggle something cHemiOctahedron = 'HemiOctahedron'; // HemiOctahedron
// smuggle something cHemiDodecahedron = 'HemiDodecahedron'; // HemiDodecahedron
// smuggle something cHemiIcosahedron = 'HemiIcosahedron'; // HemiIcosahedron
// smuggle something cTruncatedTetrahedron = 'TruncatedTetrahedron'; // TruncatedTetrahedron
// smuggle something cCuboctahedron = 'Cuboctahedron'; // Cuboctahedron
// smuggle something cTruncatedCube = 'TruncatedCube'; // TruncatedCube
// smuggle something cTruncatedOctahedron = 'TruncatedOctahedron'; // TruncatedOctahedron
// smuggle something cRhombicubOctahedron = 'RhombicubOctahedron'; // RhombicubOctahedron
// smuggle something cTruncatedCuboctahedron = 'TruncatedCuboctahedron'; // TruncatedCuboctahedron
// smuggle something cSnubCube = 'SnubCube'; // SnubCube
// smuggle something cIcosidodecahedron = 'Icosidodecahedron'; // Icosidodecahedron
// smuggle something cTruncatedDodecahedron = 'TruncatedDodecahedron'; // TruncatedDodecahedron
// smuggle something cTruncatedIcosahedron = 'TruncatedIcosahedron'; // TruncatedIcosahedron
// smuggle something cRhombicosidodecahedron = 'Rhombicosidodecahedron'; // Rhombicosidodecahedron
// smuggle something cTruncatedIcosidodecahedron = 'TruncatedIcosidodecahedron'; // TruncatedIcosidodecahedron
// smuggle something cSnubDodecahedron = 'SnubDodecahedron'; // SnubDodecahedron
// smuggle something cPrism = 'Prism'; // Prism
// smuggle something cAntiprism = 'Antiprism'; // Antiprism
// smuggle something cCubitruncatedCuboctahedron = 'CubitruncatedCuboctahedron'; // CubitruncatedCuboctahedron
// smuggle something cCubohemioctahedron = 'Cubohemioctahedron'; // Cubohemioctahedron
// smuggle something cDitrigonalDodecadodecahedron = 'DitrigonalDodecadodecahedron'; // DitrigonalDodecadodecahedron
// smuggle something cDodecadodecahedron = 'Dodecadodecahedron'; // Dodecadodecahedron
// smuggle something cGreatCubicuboctahedron = 'GreatCubicuboctahedron'; // GreatCubicuboctahedron
// smuggle something cGreatDirhombicosidodecahedron = 'GreatDirhombicosidodecahedron'; // GreatDirhombicosidodecahedron
// smuggle something cGreatDisnubDirhombidodecahedron = 'GreatDisnubDirhombidodecahedron'; // GreatDisnubDirhombidodecahedron
// smuggle something cGreatDitrigonalDodecicosidodecahedron = 'GreatDitrigonalDodecicosidodecahedron'; // GreatDitrigonalDodecicosidodecahedron
// smuggle something cGreatDitrigonalIcosidodecahedron = 'GreatDitrigonalIcosidodecahedron'; // GreatDitrigonalIcosidodecahedron
// smuggle something cGreatDodecahemicosahedron = 'GreatDodecahemicosahedron'; // GreatDodecahemicosahedron
// smuggle something cGreatDodecahemidodecahedron = 'GreatDodecahemidodecahedron'; // GreatDodecahemidodecahedron
// smuggle something cGreatDodecicosahedron = 'GreatDodecicosahedron'; // GreatDodecicosahedron
// smuggle something cGreatDodecicosidodecahedron = 'GreatDodecicosidodecahedron'; // GreatDodecicosidodecahedron
// smuggle something cGreatIcosicosidodecahedron = 'GreatIcosicosidodecahedron'; // GreatIcosicosidodecahedron
// smuggle something cGreatIcosidodecahedron = 'GreatIcosidodecahedron'; // GreatIcosidodecahedron
// smuggle something cGreatIcosihemidodecahedron = 'GreatIcosihemidodecahedron'; // GreatIcosihemidodecahedron
// smuggle something cGreatInvertedSnubIcosidodecahedron = 'GreatInvertedSnubIcosidodecahedron'; // GreatInvertedSnubIcosidodecahedron
// smuggle something cGreatRetrosnubIcosidodecahedron = 'GreatRetrosnubIcosidodecahedron'; // GreatRetrosnubIcosidodecahedron
// smuggle something cGreatRhombidodecahedron = 'GreatRhombidodecahedron'; // GreatRhombidodecahedron
// smuggle something cGreatRhombihexahedron = 'GreatRhombihexahedron'; // GreatRhombihexahedron
// smuggle something cGreatSnubDodecicosidodecahedron = 'GreatSnubDodecicosidodecahedron'; // GreatSnubDodecicosidodecahedron
// smuggle something cGreatSnubIcosidodecahedron = 'GreatSnubIcosidodecahedron'; // GreatSnubIcosidodecahedron
// smuggle something cGreatStellatedTruncatedDodecahedron = 'GreatStellatedTruncatedDodecahedron'; // GreatStellatedTruncatedDodecahedron
// smuggle something cGreatTruncatedCuboctahedron = 'GreatTruncatedCuboctahedron'; // GreatTruncatedCuboctahedron
// smuggle something cGreatTruncatedIcosidodecahedron = 'GreatTruncatedIcosidodecahedron'; // GreatTruncatedIcosidodecahedron
// smuggle something cIcosidodecadodecahedron = 'Icosidodecadodecahedron'; // Icosidodecadodecahedron
// smuggle something cIcositruncatedDodecadodecahedron = 'IcositruncatedDodecadodecahedron'; // IcositruncatedDodecadodecahedron
// smuggle something cInvertedSnubDodecadodecahedron = 'InvertedSnubDodecadodecahedron'; // InvertedSnubDodecadodecahedron
// smuggle something cNonconvexGreatRhombicosidodecahedron = 'NonconvexGreatRhombicosidodecahedron'; // NonconvexGreatRhombicosidodecahedron
// smuggle something cNonconvexGreatRhombicuboctahedron = 'NonconvexGreatRhombicuboctahedron'; // NonconvexGreatRhombicuboctahedron
// smuggle something cOctahemioctahedron = 'Octahemioctahedron'; // Octahemioctahedron
// smuggle something cRhombicosahedron = 'Rhombicosahedron'; // Rhombicosahedron
// smuggle something cRhombidodecadodecahedron = 'Rhombidodecadodecahedron'; // Rhombidodecadodecahedron
// smuggle something cSmallCubicuboctahedron = 'SmallCubicuboctahedron'; // SmallCubicuboctahedron
// smuggle something cSmallDitrigonalDodecicosidodecahedron = 'SmallDitrigonalDodecicosidodecahedron'; // SmallDitrigonalDodecicosidodecahedron
// smuggle something cSmallDitrigonalIcosidodecahedron = 'SmallDitrigonalIcosidodecahedron'; // SmallDitrigonalIcosidodecahedron
// smuggle something cSmallDodecahemicosahedron = 'SmallDodecahemicosahedron'; // SmallDodecahemicosahedron
// smuggle something cSmallDodecahemidodecahedron = 'SmallDodecahemidodecahedron'; // SmallDodecahemidodecahedron
// smuggle something cSmallDodecicosahedron = 'SmallDodecicosahedron'; // SmallDodecicosahedron
// smuggle something cSmallDodecicosidodecahedron = 'SmallDodecicosidodecahedron'; // SmallDodecicosidodecahedron
// smuggle something cSmallIcosicosidodecahedron = 'SmallIcosicosidodecahedron'; // SmallIcosicosidodecahedron
// smuggle something cSmallIcosihemidodecahedron = 'SmallIcosihemidodecahedron'; // SmallIcosihemidodecahedron
// smuggle something cSmallRetrosnubIcosicosidodecahedron = 'SmallRetrosnubIcosicosidodecahedron'; // SmallRetrosnubIcosicosidodecahedron
// smuggle something cSmallRhombidodecahedron = 'SmallRhombidodecahedron'; // SmallRhombidodecahedron
// smuggle something cSmallRhombihexahedron = 'SmallRhombihexahedron'; // SmallRhombihexahedron
// smuggle something cSmallSnubIcosicosidodecahedron = 'SmallSnubIcosicosidodecahedron'; // SmallSnubIcosicosidodecahedron
// smuggle something cSmallStellatedTruncatedDodecahedron = 'SmallStellatedTruncatedDodecahedron'; // SmallStellatedTruncatedDodecahedron
// smuggle something cSnubDodecadodecahedron = 'SnubDodecadodecahedron'; // SnubDodecadodecahedron
// smuggle something cSnubIcosidodecadodecahedron = 'SnubIcosidodecadodecahedron'; // SnubIcosidodecadodecahedron
// smuggle something cStellatedTruncatedHexahedron = 'StellatedTruncatedHexahedron'; // StellatedTruncatedHexahedron
// smuggle something cTetrahemihexahedron = 'Tetrahemihexahedron'; // Tetrahemihexahedron
// smuggle something cTruncatedDodecadodecahedron = 'TruncatedDodecadodecahedron'; // TruncatedDodecadodecahedron
// smuggle something cTruncatedGreatDodecahedron = 'TruncatedGreatDodecahedron'; // TruncatedGreatDodecahedron
// smuggle something cTruncatedGreatIcosahedron = 'TruncatedGreatIcosahedron'; // TruncatedGreatIcosahedron
//
// // Duals of Uniform Polyhedra
// smuggle something cCatalanSolid = 'CatalanSolid'; // CatalanSolid
// smuggle something cTriakisTetrahedron = 'TriakisTetrahedron'; // TriakisTetrahedron
// smuggle something cRhombicDodecahedron = 'RhombicDodecahedron'; // RhombicDodecahedron
// smuggle something cTriakisOctahedron = 'TriakisOctahedron'; // TriakisOctahedron
// smuggle something cTetrakisHexahedron = 'TetrakisHexahedron'; // TetrakisHexahedron
// smuggle something cDeltoidalIcositetrahedron = 'DeltoidalIcositetrahedron'; // DeltoidalIcositetrahedron
// smuggle something cDisdyakisDodecahedron = 'DisdyakisDodecahedron'; // DisdyakisDodecahedron
// smuggle something cPentagonalIcositetrahedron = 'PentagonalIcositetrahedron'; // PentagonalIcositetrahedron
// smuggle something cRhombicTriacontahedron = 'RhombicTriacontahedron'; // RhombicTriacontahedron
// smuggle something cTriakisIcosahedron = 'TriakisIcosahedron'; // TriakisIcosahedron
// smuggle something cPentakisDodecahedron = 'PentakisDodecahedron'; // PentakisDodecahedron
// smuggle something cDeltoidalHexecontahedron = 'DeltoidalHexecontahedron'; // DeltoidalHexecontahedron
// smuggle something cDisdyakisTriacontahedron = 'DisdyakisTriacontahedron'; // DisdyakisTriacontahedron
// smuggle something cPentagonalHexecontahedron = 'PentagonalHexecontahedron'; // PentagonalHexecontahedron
// smuggle something cGreatComplexIcosidodecahedron = 'GreatComplexIcosidodecahedron'; // GreatComplexIcosidodecahedron
// smuggle something cGreatDeltoidalHexecontahedron = 'GreatDeltoidalHexecontahedron'; // GreatDeltoidalHexecontahedron
// smuggle something cGreatDeltoidalIcositetrahedron = 'GreatDeltoidalIcositetrahedron'; // GreatDeltoidalIcositetrahedron
// smuggle something cGreatDirhombicosidodecacron = 'GreatDirhombicosidodecacron'; // GreatDirhombicosidodecacron
// smuggle something cGreatDisdyakisDodecahedron = 'GreatDisdyakisDodecahedron'; // GreatDisdyakisDodecahedron
// smuggle something cGreatDisdyakisTriacontahedron = 'GreatDisdyakisTriacontahedron'; // GreatDisdyakisTriacontahedron
// smuggle something cGreatDisnubDirhombidodecacron = 'GreatDisnubDirhombidodecacron'; // GreatDisnubDirhombidodecacron
// smuggle something cGreatDitrigonalDodecacronicHexecontahedron = 'GreatDitrigonalDodecacronicHexecontahedron'; // GreatDitrigonalDodecacronicHexecontahedron
// smuggle something cGreatDodecacronicHexecontahedron = 'GreatDodecacronicHexecontahedron'; // GreatDodecacronicHexecontahedron
// smuggle something cGreatDodecahemicosacron = 'GreatDodecahemicosacron'; // GreatDodecahemicosacron
// smuggle something cGreatDodecicosacron = 'GreatDodecicosacron'; // GreatDodecicosacron
// smuggle something cGreatHexacronicIcositetrahedron = 'GreatHexacronicIcositetrahedron'; // GreatHexacronicIcositetrahedron
// smuggle something cGreatHexagonalHexecontahedron = 'GreatHexagonalHexecontahedron'; // GreatHexagonalHexecontahedron
// smuggle something cGreatIcosacronicHexecontahedron = 'GreatIcosacronicHexecontahedron'; // GreatIcosacronicHexecontahedron
// smuggle something cGreatIcosihemidodecacron = 'GreatIcosihemidodecacron'; // GreatIcosihemidodecacron
// smuggle something cGreatInvertedPentagonalHexecontahedron = 'GreatInvertedPentagonalHexecontahedron'; // GreatInvertedPentagonalHexecontahedron
// smuggle something cGreatPentagonalHexecontahedron = 'GreatPentagonalHexecontahedron'; // GreatPentagonalHexecontahedron
// smuggle something cGreatPentagrammicHexecontahedron = 'GreatPentagrammicHexecontahedron'; // GreatPentagrammicHexecontahedron
// smuggle something cGreatPentakisDodecahedron = 'GreatPentakisDodecahedron'; // GreatPentakisDodecahedron
// smuggle something cGreatRhombicTriacontahedron = 'GreatRhombicTriacontahedron'; // GreatRhombicTriacontahedron
// smuggle something cGreatRhombidodecacron = 'GreatRhombidodecacron'; // GreatRhombidodecacron
// smuggle something cGreatRhombihexacron = 'GreatRhombihexacron'; // GreatRhombihexacron
// smuggle something cGreatStellapentakisDodecahedron = 'GreatStellapentakisDodecahedron'; // GreatStellapentakisDodecahedron
// smuggle something cGreatTriakisIcosahedron = 'GreatTriakisIcosahedron'; // GreatTriakisIcosahedron
// smuggle something cGreatTriakisOctahedron = 'GreatTriakisOctahedron'; // GreatTriakisOctahedron
// smuggle something cGreatTriambicIcosahedron = 'GreatTriambicIcosahedron'; // GreatTriambicIcosahedron
// smuggle something cMedialDeltoidalHexecontahedron = 'MedialDeltoidalHexecontahedron'; // MedialDeltoidalHexecontahedron
// smuggle something cMedialDisdyakisTriacontahedron = 'MedialDisdyakisTriacontahedron'; // MedialDisdyakisTriacontahedron
// smuggle something cMedialHexagonalHexecontahedron = 'MedialHexagonalHexecontahedron'; // MedialHexagonalHexecontahedron
// smuggle something cMedialIcosacronicHexecontahedron = 'MedialIcosacronicHexecontahedron'; // MedialIcosacronicHexecontahedron
// smuggle something cMedialInvertedPentagonalHexecontahedron = 'MedialInvertedPentagonalHexecontahedron'; // MedialInvertedPentagonalHexecontahedron
// smuggle something cMedialPentagonalHexecontahedron = 'MedialPentagonalHexecontahedron'; // MedialPentagonalHexecontahedron
// smuggle something cMedialRhombicTriacontahedron = 'MedialRhombicTriacontahedron'; // MedialRhombicTriacontahedron
// smuggle something cHexahemioctacron = 'Hexahemioctacron'; // Hexahemioctacron
// smuggle something cHemipolyhedron = 'Hemipolyhedron'; // Hemipolyhedron
// smuggle something cOctahemioctacron = 'Octahemioctacron'; // Octahemioctacron
// smuggle something cRhombicosacron = 'Rhombicosacron'; // Rhombicosacron
// smuggle something cSmallComplexIcosidodecahedron = 'SmallComplexIcosidodecahedron'; // SmallComplexIcosidodecahedron
// smuggle something cSmallDitrigonalDodecacronicHexecontahedron = 'SmallDitrigonalDodecacronicHexecontahedron'; // SmallDitrigonalDodecacronicHexecontahedron
// smuggle something cSmallDodecacronicHexecontahedron = 'SmallDodecacronicHexecontahedron'; // SmallDodecacronicHexecontahedron
// smuggle something cSmallDodecahemicosacron = 'SmallDodecahemicosacron'; // SmallDodecahemicosacron
// smuggle something cSmallDodecahemidodecacron = 'SmallDodecahemidodecacron'; // SmallDodecahemidodecacron
// smuggle something cSmallDodecicosacron = 'SmallDodecicosacron'; // SmallDodecicosacron
// smuggle something cSmallHexacronicIcositetrahedron = 'SmallHexacronicIcositetrahedron'; // SmallHexacronicIcositetrahedron
// smuggle something cSmallHexagonalHexecontahedron = 'SmallHexagonalHexecontahedron'; // SmallHexagonalHexecontahedron
// smuggle something cSmallHexagrammicHexecontahedron = 'SmallHexagrammicHexecontahedron'; // SmallHexagrammicHexecontahedron
// smuggle something cSmallIcosacronicHexecontahedron = 'SmallIcosacronicHexecontahedron'; // SmallIcosacronicHexecontahedron
// smuggle something cSmallIcosihemidodecacron = 'SmallIcosihemidodecacron'; // SmallIcosihemidodecacron
// smuggle something cSmallRhombidodecacron = 'SmallRhombidodecacron'; // SmallRhombidodecacron
// smuggle something cSmallRhombihexacron = 'SmallRhombihexacron'; // SmallRhombihexacron
// smuggle something cSmallStellapentakisDodecahedron = 'SmallStellapentakisDodecahedron'; // SmallStellapentakisDodecahedron
// smuggle something cSmallTriambicIcosahedron = 'SmallTriambicIcosahedron'; // SmallTriambicIcosahedron
// smuggle something cTetrahemihexacron = 'Tetrahemihexacron'; // Tetrahemihexacron
//
// // Johnson Solids
// smuggle something cAugmentedDodecahedron = 'AugmentedDodecahedron'; // AugmentedDodecahedron
// smuggle something cAugmentedHexagonalPrism = 'AugmentedHexagonalPrism'; // AugmentedHexagonalPrism
// smuggle something cAugmentedPentagonalPrism = 'AugmentedPentagonalPrism'; // AugmentedPentagonalPrism
// smuggle something cAugmentedSphenocorona = 'AugmentedSphenocorona'; // AugmentedSphenocorona
// smuggle something cAugmentedTriangularPrism = 'AugmentedTriangularPrism'; // AugmentedTriangularPrism
// smuggle something cAugmentedTridiminishedIcosahedron = 'AugmentedTridiminishedIcosahedron'; // AugmentedTridiminishedIcosahedron
// smuggle something cAugmentedTruncatedCube = 'AugmentedTruncatedCube'; // AugmentedTruncatedCube
// smuggle something cAugmentedTruncatedDodecahedron = 'AugmentedTruncatedDodecahedron'; // AugmentedTruncatedDodecahedron
// smuggle something cAugmentedTruncatedTetrahedron = 'AugmentedTruncatedTetrahedron'; // AugmentedTruncatedTetrahedron
// smuggle something cBiaugmentedPentagonalPrism = 'BiaugmentedPentagonalPrism'; // BiaugmentedPentagonalPrism
// smuggle something cBiaugmentedTriangularPrism = 'BiaugmentedTriangularPrism'; // BiaugmentedTriangularPrism
// smuggle something cBiaugmentedTruncatedCube = 'BiaugmentedTruncatedCube'; // BiaugmentedTruncatedCube
// smuggle something cBigyrateDiminishedRhombicosidodecahedron = 'BigyrateDiminishedRhombicosidodecahedron'; // BigyrateDiminishedRhombicosidodecahedron
// smuggle something cBilunabirotunda = 'Bilunabirotunda'; // Bilunabirotunda
// smuggle something cDiminishedRhombicosidodecahedron = 'DiminishedRhombicosidodecahedron'; // DiminishedRhombicosidodecahedron
// smuggle something cDisphenocingulum = 'Disphenocingulum'; // Disphenocingulum
// smuggle something cElongatedPentagonalBipyramid = 'ElongatedPentagonalBipyramid'; // ElongatedPentagonalBipyramid
// smuggle something cElongatedPentagonalCupola = 'ElongatedPentagonalCupola'; // ElongatedPentagonalCupola
// smuggle something cElongatedPentagonalGyrobicupola = 'ElongatedPentagonalGyrobicupola'; // ElongatedPentagonalGyrobicupola
// smuggle something cElongatedPentagonalGyrobirotunda = 'ElongatedPentagonalGyrobirotunda'; // ElongatedPentagonalGyrobirotunda
// smuggle something cElongatedPentagonalGyrocupolarotunda = 'ElongatedPentagonalGyrocupolarotunda'; // ElongatedPentagonalGyrocupolarotunda
// smuggle something cElongatedPentagonalOrthobicupola = 'ElongatedPentagonalOrthobicupola'; // ElongatedPentagonalOrthobicupola
// smuggle something cElongatedPentagonalOrthobirotunda = 'ElongatedPentagonalOrthobirotunda'; // ElongatedPentagonalOrthobirotunda
// smuggle something cElongatedPentagonalOrthocupolarotunda = 'ElongatedPentagonalOrthocupolarotunda'; // ElongatedPentagonalOrthocupolarotunda
// smuggle something cElongatedPentagonalPyramid = 'ElongatedPentagonalPyramid'; // ElongatedPentagonalPyramid
// smuggle something cElongatedPentagonalRotunda = 'ElongatedPentagonalRotunda'; // ElongatedPentagonalRotunda
// smuggle something cElongatedSquareBipyramid = 'ElongatedSquareBipyramid'; // ElongatedSquareBipyramid
// smuggle something cElongatedSquareCupola = 'ElongatedSquareCupola'; // ElongatedSquareCupola
// smuggle something cElongatedSquareGyrobicupola = 'ElongatedSquareGyrobicupola'; // ElongatedSquareGyrobicupola
// smuggle something cElongatedSquarePyramid = 'ElongatedSquarePyramid'; // ElongatedSquarePyramid
// smuggle something cElongatedTriangularBipyramid = 'ElongatedTriangularBipyramid'; // ElongatedTriangularBipyramid
// smuggle something cElongatedTriangularCupola = 'ElongatedTriangularCupola'; // ElongatedTriangularCupola
// smuggle something cElongatedTriangularGyrobicupola = 'ElongatedTriangularGyrobicupola'; // ElongatedTriangularGyrobicupola
// smuggle something cElongatedTriangularOrthobicupola = 'ElongatedTriangularOrthobicupola'; // ElongatedTriangularOrthobicupola
// smuggle something cElongatedTriangularPyramid = 'ElongatedTriangularPyramid'; // ElongatedTriangularPyramid
// smuggle something cGyrateBidiminishedRhombicosidodecahedron = 'GyrateBidiminishedRhombicosidodecahedron'; // GyrateBidiminishedRhombicosidodecahedron
// smuggle something cGyrateRhombicosidodecahedron = 'GyrateRhombicosidodecahedron'; // GyrateRhombicosidodecahedron
// smuggle something cGyrobifastigium = 'Gyrobifastigium'; // Gyrobifastigium
// smuggle something cGyroelongatedPentagonalBicupola = 'GyroelongatedPentagonalBicupola'; // GyroelongatedPentagonalBicupola
// smuggle something cGyroelongatedPentagonalBirotunda = 'GyroelongatedPentagonalBirotunda'; // GyroelongatedPentagonalBirotunda
// smuggle something cGyroelongatedPentagonalCupola = 'GyroelongatedPentagonalCupola'; // GyroelongatedPentagonalCupola
// smuggle something cGyroelongatedPentagonalCupolarotunda = 'GyroelongatedPentagonalCupolarotunda'; // GyroelongatedPentagonalCupolarotunda
// smuggle something cGyroelongatedPentagonalPyramid = 'GyroelongatedPentagonalPyramid'; // GyroelongatedPentagonalPyramid
// smuggle something cGyroelongatedPentagonalRotunda = 'GyroelongatedPentagonalRotunda'; // GyroelongatedPentagonalRotunda
// smuggle something cGyroelongatedSquareBicupola = 'GyroelongatedSquareBicupola'; // GyroelongatedSquareBicupola
// smuggle something cGyroelongatedSquareBipyramid = 'GyroelongatedSquareBipyramid'; // GyroelongatedSquareBipyramid
// smuggle something cGyroelongatedSquareCupola = 'GyroelongatedSquareCupola'; // GyroelongatedSquareCupola
// smuggle something cGyroelongatedSquarePyramid = 'GyroelongatedSquarePyramid'; // GyroelongatedSquarePyramid
// smuggle something cGyroelongatedTriangularBicupola = 'GyroelongatedTriangularBicupola'; // GyroelongatedTriangularBicupola
// smuggle something cGyroelongatedTriangularCupola = 'GyroelongatedTriangularCupola'; // GyroelongatedTriangularCupola
// smuggle something cHebesphenomegacorona = 'Hebesphenomegacorona'; // Hebesphenomegacorona
// smuggle something cMetabiaugmentedDodecahedron = 'MetabiaugmentedDodecahedron'; // MetabiaugmentedDodecahedron
// smuggle something cMetabiaugmentedHexagonalPrism = 'MetabiaugmentedHexagonalPrism'; // MetabiaugmentedHexagonalPrism
// smuggle something cMetabiaugmentedTruncatedDodecahedron = 'MetabiaugmentedTruncatedDodecahedron'; // MetabiaugmentedTruncatedDodecahedron
// smuggle something cMetabidiminishedIcosahedron = 'MetabidiminishedIcosahedron'; // MetabidiminishedIcosahedron
// smuggle something cMetabidiminishedRhombicosidodecahedron = 'MetabidiminishedRhombicosidodecahedron'; // MetabidiminishedRhombicosidodecahedron
// smuggle something cMetabigyrateRhombicosidodecahedron = 'MetabigyrateRhombicosidodecahedron'; // MetabigyrateRhombicosidodecahedron
// smuggle something cMetagyrateDiminishedRhombicosidodecahedron = 'MetagyrateDiminishedRhombicosidodecahedron'; // MetagyrateDiminishedRhombicosidodecahedron
// smuggle something cParabiaugmentedDodecahedron = 'ParabiaugmentedDodecahedron'; // ParabiaugmentedDodecahedron
// smuggle something cParabiaugmentedHexagonalPrism = 'ParabiaugmentedHexagonalPrism'; // ParabiaugmentedHexagonalPrism
// smuggle something cParabiaugmentedTruncatedDodecahedron = 'ParabiaugmentedTruncatedDodecahedron'; // ParabiaugmentedTruncatedDodecahedron
// smuggle something cParabidiminishedRhombicosidodecahedron = 'ParabidiminishedRhombicosidodecahedron'; // ParabidiminishedRhombicosidodecahedron
// smuggle something cParabigyrateRhombicosidodecahedron = 'ParabigyrateRhombicosidodecahedron'; // ParabigyrateRhombicosidodecahedron
// smuggle something cParagyrateDiminishedRhombicosidodecahedron = 'ParagyrateDiminishedRhombicosidodecahedron'; // ParagyrateDiminishedRhombicosidodecahedron
// smuggle something cPentagonalBipyramid = 'PentagonalBipyramid'; // PentagonalBipyramid
// smuggle something cPentagonalCupola = 'PentagonalCupola'; // PentagonalCupola
// smuggle something cPentagonalGyrobicupola = 'PentagonalGyrobicupola'; // PentagonalGyrobicupola
// smuggle something cPentagonalGyrocupolarotunda = 'PentagonalGyrocupolarotunda'; // PentagonalGyrocupolarotunda
// smuggle something cPentagonalOrthobicupola = 'PentagonalOrthobicupola'; // PentagonalOrthobicupola
// smuggle something cPentagonalOrthobirotunda = 'PentagonalOrthobirotunda'; // PentagonalOrthobirotunda
// smuggle something cPentagonalOrthocupolarotunda = 'PentagonalOrthocupolarotunda'; // PentagonalOrthocupolarotunda
// smuggle something cPentagonalPyramid = 'PentagonalPyramid'; // PentagonalPyramid
// smuggle something cPentagonalRotunda = 'PentagonalRotunda'; // PentagonalRotunda
// smuggle something cSnubDisphenoid = 'SnubDisphenoid'; // SnubDisphenoid
// smuggle something cSnubSquareAntiprism = 'SnubSquareAntiprism'; // SnubSquareAntiprism
// smuggle something cSphenocorona = 'Sphenocorona'; // Sphenocorona
// smuggle something cSphenomegacorona = 'Sphenomegacorona'; // Sphenomegacorona
// smuggle something cSquareCupola = 'SquareCupola'; // SquareCupola
// smuggle something cSquareGyrobicupola = 'SquareGyrobicupola'; // SquareGyrobicupola
// smuggle something cSquareOrthobicupola = 'SquareOrthobicupola'; // SquareOrthobicupola
// smuggle something cSquarePyramid = 'SquarePyramid'; // SquarePyramid
// smuggle something cTriangularBipyramid = 'TriangularBipyramid'; // TriangularBipyramid
// smuggle something cTriangularCupola = 'TriangularCupola'; // TriangularCupola
// smuggle something cTriangularHebesphenorotunda = 'TriangularHebesphenorotunda'; // TriangularHebesphenorotunda
// smuggle something cTriangularOrthobicupola = 'TriangularOrthobicupola'; // TriangularOrthobicupola
// smuggle something cTriaugmentedDodecahedron = 'TriaugmentedDodecahedron'; // TriaugmentedDodecahedron
// smuggle something cTriaugmentedHexagonalPrism = 'TriaugmentedHexagonalPrism'; // TriaugmentedHexagonalPrism
// smuggle something cTriaugmentedTriangularPrism = 'TriaugmentedTriangularPrism'; // TriaugmentedTriangularPrism
// smuggle something cTriaugmentedTruncatedDodecahedron = 'TriaugmentedTruncatedDodecahedron'; // TriaugmentedTruncatedDodecahedron
// smuggle something cTridiminishedIcosahedron = 'TridiminishedIcosahedron'; // TridiminishedIcosahedron
// smuggle something cTridiminishedRhombicosidodecahedron = 'TridiminishedRhombicosidodecahedron'; // TridiminishedRhombicosidodecahedron
// smuggle something cTrigyrateRhombicosidodecahedron = 'TrigyrateRhombicosidodecahedron'; // TrigyrateRhombicosidodecahedron
//
// // Other Non-Uniform Polyhedra
// smuggle something cPyramid = 'Pyramid'; // Pyramid
// smuggle something cBipyramid = 'Bipyramid'; // Bipyramid
// smuggle something cDisphenoid = 'Disphenoid'; // Disphenoid
// smuggle something cParallelepiped = 'Parallelepiped'; // Parallelepiped
// smuggle something cCuboid = 'Cuboid'; // Cuboid
// smuggle something cRhombohedron = 'Rhombohedron'; // Rhombohedron
// smuggle something cTrapezohedron = 'Trapezohedron'; // Trapezohedron
// smuggle something cFrustum = 'Frustum'; // Frustum
// smuggle something cTrapezoRhombicDodecahedron = 'TrapezoRhombicDodecahedron'; // TrapezoRhombicDodecahedron
// smuggle something cRhomboHexagonalDodecahedron = 'RhomboHexagonalDodecahedron'; // RhomboHexagonalDodecahedron
// smuggle something cTruncatedTrapezohedron = 'TruncatedTrapezohedron'; // TruncatedTrapezohedron
// smuggle something cDeltahedron = 'Deltahedron'; // Deltahedron
// smuggle something cZonohedron = 'Zonohedron'; // Zonohedron
// smuggle something cPrismatoid = 'Prismatoid'; // Prismatoid
// smuggle something cCupola = 'Cupola'; // Cupola
// smuggle something cBicupola = 'Bicupola'; // Bicupola
//
// // Honeycombs
// smuggle something cTruncatedCubicHoneycomb = 'TruncatedCubicHoneycomb'; // TruncatedCubicHoneycomb
// smuggle something cBitruncatedCubicHoneycomb = 'BitruncatedCubicHoneycomb'; // BitruncatedCubicHoneycomb
// smuggle something cCantellatedCubicHoneycomb = 'CantellatedCubicHoneycomb'; // CantellatedCubicHoneycomb
// smuggle something cCantitruncatedCubicHoneycomb = 'CantitruncatedCubicHoneycomb'; // CantitruncatedCubicHoneycomb
// smuggle something cRectifiedCubicHoneycomb = 'RectifiedCubicHoneycomb'; // RectifiedCubicHoneycomb
// smuggle something cRuncitruncatedCubicHoneycomb = 'RuncitruncatedCubicHoneycomb'; // RuncitruncatedCubicHoneycomb
// smuggle something cOmnitruncatedCubicHoneycomb = 'OmnitruncatedCubicHoneycomb'; // OmnitruncatedCubicHoneycomb
// smuggle something cTetrahedralOctahedralHoneycomb = 'TetrahedralOctahedralHoneycomb'; // TetrahedralOctahedralHoneycomb
// smuggle something cTruncatedAlternatedCubicHoneycomb = 'TruncatedAlternatedCubicHoneycomb'; // TruncatedAlternatedCubicHoneycomb
// smuggle something cCantitruncatedAlternatedCubicHoneycomb = 'CantitruncatedAlternatedCubicHoneycomb'; // CantitruncatedAlternatedCubicHoneycomb
// smuggle something cRuncinatedAlternatedCubicHoneycomb = 'RuncinatedAlternatedCubicHoneycomb'; // RuncinatedAlternatedCubicHoneycomb
// smuggle something cQuarterCubicHoneycomb = 'QuarterCubicHoneycomb'; // QuarterCubicHoneycomb
// smuggle something cGyratedTetrahedralOctahedralHoneycomb = 'GyratedTetrahedralOctahedralHoneycomb'; // GyratedTetrahedralOctahedralHoneycomb
// smuggle something cGyratedTriangularPrismaticHoneycomb = 'GyratedTriangularPrismaticHoneycomb'; // GyratedTriangularPrismaticHoneycomb
// smuggle something cGyroelongatedAlternatedCubicHoneycomb = 'GyroelongatedAlternatedCubicHoneycomb'; // GyroelongatedAlternatedCubicHoneycomb
// smuggle something cGyroelongatedTriangularPrismaticHoneycomb = 'GyroelongatedTriangularPrismaticHoneycomb'; // GyroelongatedTriangularPrismaticHoneycomb
// smuggle something cElongatedTriangularPrismaticHoneycomb = 'ElongatedTriangularPrismaticHoneycomb'; // ElongatedTriangularPrismaticHoneycomb
// smuggle something cElongatedAlternatedCubicHoneycomb = 'ElongatedAlternatedCubicHoneycomb'; // ElongatedAlternatedCubicHoneycomb
// smuggle something cHexagonalPrismaticHoneycomb = 'HexagonalPrismaticHoneycomb'; // HexagonalPrismaticHoneycomb
// smuggle something cTriangularPrismaticHoneycomb = 'TriangularPrismaticHoneycomb'; // TriangularPrismaticHoneycomb
// smuggle something cTriangularHexagonalPrismaticHoneycomb = 'TriangularHexagonalPrismaticHoneycomb'; // TriangularHexagonalPrismaticHoneycomb
// smuggle something cTruncatedHexagonalPrismaticHoneycomb = 'TruncatedHexagonalPrismaticHoneycomb'; // TruncatedHexagonalPrismaticHoneycomb
// smuggle something cTruncatedSquarePrismaticHoneycomb = 'TruncatedSquarePrismaticHoneycomb'; // TruncatedSquarePrismaticHoneycomb
// smuggle something cRhombitriangularHexagonalPrismaticHoneycomb = 'RhombitriangularHexagonalPrismaticHoneycomb'; // RhombitriangularHexagonalPrismaticHoneycomb
// smuggle something cOmnitruncatedTriangularHexagonalPrismaticHoneycomb = 'OmnitruncatedTriangularHexagonalPrismaticHoneycomb'; // OmnitruncatedTriangularHexagonalPrismaticHoneycomb
// smuggle something cSnubTriangularHexagonalPrismaticHoneycomb = 'SnubTriangularHexagonalPrismaticHoneycomb'; // SnubTriangularHexagonalPrismaticHoneycomb
// smuggle something cSnubSquarePrismaticHoneycomb = 'SnubSquarePrismaticHoneycomb'; // SnubSquarePrismaticHoneycomb
//
// // Dual Uniform Honeycomb
// smuggle something cDisphenoidTetrahedralHoneycomb = 'DisphenoidTetrahedralHoneycomb'; // DisphenoidTetrahedralHoneycomb
// smuggle something cRhombicDodecahedralHoneycomb = 'RhombicDodecahedralHoneycomb'; // RhombicDodecahedralHoneycomb
//
// // Others Honeycombs
// smuggle something cTrapezoRhombicDodecahedralHoneycomb = 'TrapezoRhombicDodecahedralHoneycomb'; // TrapezoRhombicDodecahedralHoneycomb
// smuggle something cWeairePhelanStructure = 'WeairePhelanStructure'; // WeairePhelanStructure
//
// // Other Prismatic Geometries
// smuggle something cApeirogonalPrism = 'ApeirogonalPrism'; // ApeirogonalPrism
// smuggle something cBifrustum = 'Bifrustum'; // Bifrustum
// smuggle something cBoerdijkCoxeterHelix = 'BoerdijkCoxeterHelix'; // BoerdijkCoxeterHelix
// smuggle something cCsaszarPolyhedron = 'CsaszarPolyhedron'; // CsaszarPolyhedron
// smuggle something cFlexiblePolyhedron = 'FlexiblePolyhedron'; // FlexiblePolyhedron
// smuggle something cGyroelongatedSquareDipyramid = 'GyroelongatedSquareDipyramid'; // GyroelongatedSquareDipyramid
// smuggle something cHeronianTetrahedron = 'HeronianTetrahedron'; // HeronianTetrahedron
// smuggle something cHexagonalBifrustum = 'HexagonalBifrustum'; // HexagonalBifrustum
// smuggle something cHexagonalTruncatedTrapezohedron = 'HexagonalTruncatedTrapezohedron'; // HexagonalTruncatedTrapezohedron
// smuggle something cHillTetrahedron = 'HillTetrahedron'; // HillTetrahedron
// smuggle something cHolyhedron = 'Holyhedron'; // Holyhedron
// smuggle something cInfiniteSkewPolyhedron = 'InfiniteSkewPolyhedron'; // InfiniteSkewPolyhedron
// smuggle something cJessensIcosahedron = 'JessensIcosahedron'; // JessensIcosahedron
// smuggle something cNearMissJohnsonSolid = 'NearMissJohnsonSolid'; // NearMissJohnsonSolid
// smuggle something cPentagonalBifrustum = 'PentagonalBifrustum'; // PentagonalBifrustum
// smuggle something cPolytetrahedron = 'Polytetrahedron'; // Polytetrahedron
// smuggle something cPyritohedron = 'Pyritohedron'; // Pyritohedron
// smuggle something cRhombicEnneacontahedron = 'RhombicEnneacontahedron'; // RhombicEnneacontahedron
// smuggle something cRhombicIcosahedron = 'RhombicIcosahedron'; // RhombicIcosahedron
// smuggle something cScalenohedron = 'Scalenohedron'; // Scalenohedron
// smuggle something cSchonhardtPolyhedron = 'SchonhardtPolyhedron'; // SchonhardtPolyhedron
// smuggle something cSquareBifrustum = 'SquareBifrustum'; // SquareBifrustum
// smuggle something cSquareTruncatedTrapezohedron = 'SquareTruncatedTrapezohedron'; // SquareTruncatedTrapezohedron
// smuggle something cSzilassiPolyhedron = 'SzilassiPolyhedron'; // SzilassiPolyhedron
// smuggle something cTetradecahedron = 'Tetradecahedron'; // Tetradecahedron
// smuggle something cTetradyakisHexahedron = 'TetradyakisHexahedron'; // TetradyakisHexahedron
// smuggle something cTetratedDodecahedron = 'TetratedDodecahedron'; // TetratedDodecahedron
// smuggle something cTriangularBifrustum = 'TriangularBifrustum'; // TriangularBifrustum
// smuggle something cTruncatedRhombicDodecahedron = 'TruncatedRhombicDodecahedron'; // TruncatedRhombicDodecahedron
// smuggle something cTruncatedTriakisTetrahedron = 'TruncatedTriakisTetrahedron'; // TruncatedTriakisTetrahedron
// smuggle something cTridyakisIcosahedron = 'TridyakisIcosahedron'; // TridyakisIcosahedron
// smuggle something cTrigonalTrapezohedron = 'TrigonalTrapezohedron'; // TrigonalTrapezohedron
// smuggle something cWatermanPolyhedron = 'WatermanPolyhedron'; // WatermanPolyhedron
// smuggle something cWedge = 'Wedge'; // Wedge
//
// // Regular and Uniform Compound Polyhedra
// smuggle something cCompoundOfCubeAndOctahedron = 'CompoundOfCubeAndOctahedron'; // CompoundOfCubeAndOctahedron
// smuggle something cCompoundOfDodecahedronAndIcosahedron = 'CompoundOfDodecahedronAndIcosahedron'; // CompoundOfDodecahedronAndIcosahedron
// smuggle something cCompoundOfEightOctahedraWithRotationalFreedom = 'CompoundOfEightOctahedraWithRotationalFreedom'; // CompoundOfEightOctahedraWithRotationalFreedom
// smuggle something cCompoundOfEightTriangularPrisms = 'CompoundOfEightTriangularPrisms'; // CompoundOfEightTriangularPrisms
// smuggle something cCompoundOfFiveCubes = 'CompoundOfFiveCubes'; // CompoundOfFiveCubes
// smuggle something cCompoundOfFiveCuboctahedra = 'CompoundOfFiveCuboctahedra'; // CompoundOfFiveCuboctahedra
// smuggle something cCompoundOfFiveCubohemioctahedra = 'CompoundOfFiveCubohemioctahedra'; // CompoundOfFiveCubohemioctahedra
// smuggle something cCompoundOfFiveGreatCubicuboctahedra = 'CompoundOfFiveGreatCubicuboctahedra'; // CompoundOfFiveGreatCubicuboctahedra
// smuggle something cCompoundOfFiveGreatDodecahedra = 'CompoundOfFiveGreatDodecahedra'; // CompoundOfFiveGreatDodecahedra
// smuggle something cCompoundOfFiveGreatIcosahedra = 'CompoundOfFiveGreatIcosahedra'; // CompoundOfFiveGreatIcosahedra
// smuggle something cCompoundOfFiveGreatRhombihexahedra = 'CompoundOfFiveGreatRhombihexahedra'; // CompoundOfFiveGreatRhombihexahedra
// smuggle something cCompoundOfFiveIcosahedra = 'CompoundOfFiveIcosahedra'; // CompoundOfFiveIcosahedra
// smuggle something cCompoundOfFiveOctahedra = 'CompoundOfFiveOctahedra'; // CompoundOfFiveOctahedra
// smuggle something cCompoundOfFiveOctahemioctahedra = 'CompoundOfFiveOctahemioctahedra'; // CompoundOfFiveOctahemioctahedra
// smuggle something cCompoundOfFiveSmallCubicuboctahedra = 'CompoundOfFiveSmallCubicuboctahedra'; // CompoundOfFiveSmallCubicuboctahedra
// smuggle something cCompoundOfFiveSmallRhombicuboctahedra = 'CompoundOfFiveSmallRhombicuboctahedra'; // CompoundOfFiveSmallRhombicuboctahedra
// smuggle something cCompoundOfFiveSmallRhombihexahedra = 'CompoundOfFiveSmallRhombihexahedra'; // CompoundOfFiveSmallRhombihexahedra
// smuggle something cCompoundOfFiveSmallStellatedDodecahedra = 'CompoundOfFiveSmallStellatedDodecahedra'; // CompoundOfFiveSmallStellatedDodecahedra
// smuggle something cCompoundOfFiveStellatedTruncatedCubes = 'CompoundOfFiveStellatedTruncatedCubes'; // CompoundOfFiveStellatedTruncatedCubes
// smuggle something cCompoundOfFiveTetrahedra = 'CompoundOfFiveTetrahedra'; // CompoundOfFiveTetrahedra
// smuggle something cCompoundOfFiveTetrahemihexahedra = 'CompoundOfFiveTetrahemihexahedra'; // CompoundOfFiveTetrahemihexahedra
// smuggle something cCompoundOfFiveTruncatedCubes = 'CompoundOfFiveTruncatedCubes'; // CompoundOfFiveTruncatedCubes
// smuggle something cCompoundOfFiveTruncatedTetrahedra = 'CompoundOfFiveTruncatedTetrahedra'; // CompoundOfFiveTruncatedTetrahedra
// smuggle something cCompoundOfFiveUniformGreatRhombicuboctahedra = 'CompoundOfFiveUniformGreatRhombicuboctahedra'; // CompoundOfFiveUniformGreatRhombicuboctahedra
// smuggle something cCompoundOfFourHexagonalPrisms = 'CompoundOfFourHexagonalPrisms'; // CompoundOfFourHexagonalPrisms
// smuggle something cCompoundOfFourOctahedra = 'CompoundOfFourOctahedra'; // CompoundOfFourOctahedra
// smuggle something cCompoundOfFourOctahedraWithRotationalFreedom = 'CompoundOfFourOctahedraWithRotationalFreedom'; // CompoundOfFourOctahedraWithRotationalFreedom
// smuggle something cCompoundOfFourTetrahedra = 'CompoundOfFourTetrahedra'; // CompoundOfFourTetrahedra
// smuggle something cCompoundOfFourTriangularPrisms = 'CompoundOfFourTriangularPrisms'; // CompoundOfFourTriangularPrisms
// smuggle something cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron = 'CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron'; // CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron
// smuggle something cCompoundOfSixCubesWithRotationalFreedom = 'CompoundOfSixCubesWithRotationalFreedom'; // CompoundOfSixCubesWithRotationalFreedom
// smuggle something cCompoundOfSixDecagonalPrisms = 'CompoundOfSixDecagonalPrisms'; // CompoundOfSixDecagonalPrisms
// smuggle something cCompoundOfSixDecagrammicPrisms = 'CompoundOfSixDecagrammicPrisms'; // CompoundOfSixDecagrammicPrisms
// smuggle something cCompoundOfSixPentagonalAntiprisms = 'CompoundOfSixPentagonalAntiprisms'; // CompoundOfSixPentagonalAntiprisms
// smuggle something cCompoundOfSixPentagonalPrisms = 'CompoundOfSixPentagonalPrisms'; // CompoundOfSixPentagonalPrisms
// smuggle something cCompoundOfSixPentagrammicAntiprisms = 'CompoundOfSixPentagrammicAntiprisms'; // CompoundOfSixPentagrammicAntiprisms
// smuggle something cCompoundOfSixPentagrammicCrossedAntiprisms = 'CompoundOfSixPentagrammicCrossedAntiprisms'; // CompoundOfSixPentagrammicCrossedAntiprisms
// smuggle something cCompoundOfSixPentagrammicPrisms = 'CompoundOfSixPentagrammicPrisms'; // CompoundOfSixPentagrammicPrisms
// smuggle something cCompoundOfSixSquareAntiprisms = 'CompoundOfSixSquareAntiprisms'; // CompoundOfSixSquareAntiprisms
// smuggle something cCompoundOfSixTetrahedra = 'CompoundOfSixTetrahedra'; // CompoundOfSixTetrahedra
// smuggle something cCompoundOfSixTetrahedraWithRotationalFreedom = 'CompoundOfSixTetrahedraWithRotationalFreedom'; // CompoundOfSixTetrahedraWithRotationalFreedom
// smuggle something cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron = 'CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron'; // CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron
// smuggle something cCompoundOfTenHexagonalPrisms = 'CompoundOfTenHexagonalPrisms'; // CompoundOfTenHexagonalPrisms
// smuggle something cCompoundOfTenOctahedra = 'CompoundOfTenOctahedra'; // CompoundOfTenOctahedra
// smuggle something cCompoundOfTenTetrahedra = 'CompoundOfTenTetrahedra'; // CompoundOfTenTetrahedra
// smuggle something cCompoundOfTenTriangularPrisms = 'CompoundOfTenTriangularPrisms'; // CompoundOfTenTriangularPrisms
// smuggle something cCompoundOfTenTruncatedTetrahedra = 'CompoundOfTenTruncatedTetrahedra'; // CompoundOfTenTruncatedTetrahedra
// smuggle something cCompoundOfThreeCubes = 'CompoundOfThreeCubes'; // CompoundOfThreeCubes
// smuggle something cCompoundOfThreeSquareAntiprisms = 'CompoundOfThreeSquareAntiprisms'; // CompoundOfThreeSquareAntiprisms
// smuggle something cCompoundOfThreeTetrahedra = 'CompoundOfThreeTetrahedra'; // CompoundOfThreeTetrahedra
// smuggle something cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom'; // CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom
// smuggle something cCompoundOfTwelvePentagonalPrisms = 'CompoundOfTwelvePentagonalPrisms'; // CompoundOfTwelvePentagonalPrisms
// smuggle something cCompoundOfTwelvePentagrammicAntiprisms = 'CompoundOfTwelvePentagrammicAntiprisms'; // CompoundOfTwelvePentagrammicAntiprisms
// smuggle something cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom'; // CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom
// smuggle something cCompoundOfTwelvePentagrammicPrisms = 'CompoundOfTwelvePentagrammicPrisms'; // CompoundOfTwelvePentagrammicPrisms
// smuggle something cCompoundOfTwelveTetrahedraWithRotationalFreedom = 'CompoundOfTwelveTetrahedraWithRotationalFreedom'; // CompoundOfTwelveTetrahedraWithRotationalFreedom
// smuggle something cCompoundOfTwentyOctahedra = 'CompoundOfTwentyOctahedra'; // CompoundOfTwentyOctahedra
// smuggle something cCompoundOfTwentyOctahedraWithRotationalFreedom = 'CompoundOfTwentyOctahedraWithRotationalFreedom'; // CompoundOfTwentyOctahedraWithRotationalFreedom
// smuggle something cCompoundOfTwentyTetrahemihexahedra = 'CompoundOfTwentyTetrahemihexahedra'; // CompoundOfTwentyTetrahemihexahedra
// smuggle something cCompoundOfTwentyTriangularPrisms = 'CompoundOfTwentyTriangularPrisms'; // CompoundOfTwentyTriangularPrisms
// smuggle something cCompoundOfTwoGreatDodecahedra = 'CompoundOfTwoGreatDodecahedra'; // CompoundOfTwoGreatDodecahedra
// smuggle something cCompoundOfTwoGreatIcosahedra = 'CompoundOfTwoGreatIcosahedra'; // CompoundOfTwoGreatIcosahedra
// smuggle something cCompoundOfTwoGreatInvertedSnubIcosidodecahedra = 'CompoundOfTwoGreatInvertedSnubIcosidodecahedra'; // CompoundOfTwoGreatInvertedSnubIcosidodecahedra
// smuggle something cCompoundOfTwoGreatRetrosnubIcosidodecahedra = 'CompoundOfTwoGreatRetrosnubIcosidodecahedra'; // CompoundOfTwoGreatRetrosnubIcosidodecahedra
// smuggle something cCompoundOfTwoGreatSnubIcosidodecahedra = 'CompoundOfTwoGreatSnubIcosidodecahedra'; // CompoundOfTwoGreatSnubIcosidodecahedra
// smuggle something cCompoundOfTwoIcosahedra = 'CompoundOfTwoIcosahedra'; // CompoundOfTwoIcosahedra
// smuggle something cCompoundOfTwoInvertedSnubDodecadodecahedra = 'CompoundOfTwoInvertedSnubDodecadodecahedra'; // CompoundOfTwoInvertedSnubDodecadodecahedra
// smuggle something cCompoundOfTwoSmallStellatedDodecahedra = 'CompoundOfTwoSmallStellatedDodecahedra'; // CompoundOfTwoSmallStellatedDodecahedra
// smuggle something cCompoundOfTwoSnubCubes = 'CompoundOfTwoSnubCubes'; // CompoundOfTwoSnubCubes
// smuggle something cCompoundOfTwoSnubDodecadodecahedra = 'CompoundOfTwoSnubDodecadodecahedra'; // CompoundOfTwoSnubDodecadodecahedra
// smuggle something cCompoundOfTwoSnubDodecahedra = 'CompoundOfTwoSnubDodecahedra'; // CompoundOfTwoSnubDodecahedra
// smuggle something cCompoundOfTwoSnubIcosidodecadodecahedra = 'CompoundOfTwoSnubIcosidodecadodecahedra'; // CompoundOfTwoSnubIcosidodecadodecahedra
// smuggle something cCompoundOfTwoTruncatedTetrahedra = 'CompoundOfTwoTruncatedTetrahedra'; // CompoundOfTwoTruncatedTetrahedra
// smuggle something cPrismaticCompoundOfAntiprisms = 'PrismaticCompoundOfAntiprisms'; // PrismaticCompoundOfAntiprisms
// smuggle something cPrismaticCompoundOfAntiprismsWithRotationalFreedom = 'PrismaticCompoundOfAntiprismsWithRotationalFreedom'; // PrismaticCompoundOfAntiprismsWithRotationalFreedom
// smuggle something cPrismaticCompoundOfPrisms = 'PrismaticCompoundOfPrisms'; // PrismaticCompoundOfPrisms
// smuggle something cPrismaticCompoundOfPrismsWithRotationalFreedom = 'PrismaticCompoundOfPrismsWithRotationalFreedom'; // PrismaticCompoundOfPrismsWithRotationalFreedom
//
// // 4D Polytopes
// smuggle something cHecatonicosachoron = 'Hecatonicosachoron'; // Hecatonicosachoron
// smuggle something cHexacosichoron = 'Hexacosichoron'; // Hexacosichoron
// smuggle something cHexadecachoron = 'Hexadecachoron'; // Hexadecachoron
// smuggle something cPentachoron = 'Pentachoron'; // Pentachoron
// smuggle something cIcositetrachoron = 'Icositetrachoron'; // Icositetrachoron
// smuggle something cTesseract = 'Tesseract'; // Tesseract
//
// // Other Geometry
// smuggle something cSphericalCone = 'SphericalCone'; // SphericalCone
//
// // Schläfli–Hess 4D Polytope
// smuggle something cIcosahedral_120Cell = 'Icosahedral_120Cell'; // Icosahedral_120Cell
// smuggle something cSmallStellated_120Cell = 'SmallStellated_120Cell'; // SmallStellated_120Cell
// smuggle something cGreat_120Cell = 'Great_120Cell'; // Great_120Cell
// smuggle something cGrand_120Cell = 'Grand_120Cell'; // Grand_120Cell
// smuggle something cGreatStellated_120Cell = 'GreatStellated_120Cell'; // GreatStellated_120Cell
// smuggle something cGrandStellated_120Cell = 'GrandStellated_120Cell'; // GrandStellated_120Cell
// smuggle something cGreatGrand_120Cell = 'GreatGrand_120Cell'; // GreatGrand_120Cell
// smuggle something cGreatIcosahedral_120Cell = 'GreatIcosahedral_120Cell'; // GreatIcosahedral_120Cell
// smuggle something cGrand_600Cell = 'Grand_600Cell'; // Grand_600Cell
// smuggle something cGreatGrandStellated_120Cell = 'GreatGrandStellated_120Cell'; // GreatGrandStellated_120Cell
//
// // Uniform 4D Polytope
// smuggle something cRectified_5Cell = 'Rectified_5Cell'; // Rectified_5Cell
// smuggle something cTruncated_5Cell = 'Truncated_5Cell'; // Truncated_5Cell
// smuggle something cCantellated_5Cell = 'Cantellated_5Cell'; // Cantellated_5Cell
// smuggle something cRuncinated_5Cell = 'Runcinated_5Cell'; // Runcinated_5Cell
// smuggle something cRectifiedTesseract = 'RectifiedTesseract'; // RectifiedTesseract
// smuggle something cTruncatedTesseract = 'TruncatedTesseract'; // TruncatedTesseract
// smuggle something cCantellatedTesseract = 'CantellatedTesseract'; // CantellatedTesseract
// smuggle something cRuncinatedTesseract = 'RuncinatedTesseract'; // RuncinatedTesseract
// smuggle something cRectified_16Cell = 'Rectified_16Cell'; // Rectified_16Cell
// smuggle something cTruncated_16Cell = 'Truncated_16Cell'; // Truncated_16Cell
// smuggle something cRectified_24Cell = 'Rectified_24Cell'; // Rectified_24Cell
// smuggle something cTruncated_24Cell = 'Truncated_24Cell'; // Truncated_24Cell
// smuggle something cCantellated_24Cell = 'Cantellated_24Cell'; // Cantellated_24Cell
// smuggle something cRuncinated_24Cell = 'Runcinated_24Cell'; // Runcinated_24Cell
// smuggle something cSnub_24Cell = 'Snub_24Cell'; // Snub_24Cell
// smuggle something cRectified_120Cell = 'Rectified_120Cell'; // Rectified_120Cell
// smuggle something cTruncated_120Cell = 'Truncated_120Cell'; // Truncated_120Cell
// smuggle something cCantellated_120Cell = 'Cantellated_120Cell'; // Cantellated_120Cell
// smuggle something cRuncinated_120Cell = 'Runcinated_120Cell'; // Runcinated_120Cell
// smuggle something cRectified_600Cell = 'Rectified_600Cell'; // Rectified_600Cell
// smuggle something cTruncated_600Cell = 'Truncated_600Cell'; // Truncated_600Cell
// smuggle something cCantellated_600Cell = 'Cantellated_600Cell'; // Cantellated_600Cell
//
// // Prismatic Uniform Polychoron
// smuggle something cGrandAntiprism = 'GrandAntiprism'; // GrandAntiprism
// smuggle something cDuoprism = 'Duoprism'; // Duoprism
// smuggle something cTetrahedralPrism = 'TetrahedralPrism'; // TetrahedralPrism
// smuggle something cTruncatedTetrahedralPrism = 'TruncatedTetrahedralPrism'; // TruncatedTetrahedralPrism
// smuggle something cTruncatedCubicPrism = 'TruncatedCubicPrism'; // TruncatedCubicPrism
// smuggle something cTruncatedOctahedralPrism = 'TruncatedOctahedralPrism'; // TruncatedOctahedralPrism
// smuggle something cCuboctahedralPrism = 'CuboctahedralPrism'; // CuboctahedralPrism
// smuggle something cRhombicuboctahedralPrism = 'RhombicuboctahedralPrism'; // RhombicuboctahedralPrism
// smuggle something cTruncatedCuboctahedralPrism = 'TruncatedCuboctahedralPrism'; // TruncatedCuboctahedralPrism
// smuggle something cSnubCubicPrism = 'SnubCubicPrism'; // SnubCubicPrism
// smuggle something cTruncatedDodecahedralPrism = 'TruncatedDodecahedralPrism'; // TruncatedDodecahedralPrism
// smuggle something cTruncatedIcosahedralPrism = 'TruncatedIcosahedralPrism'; // TruncatedIcosahedralPrism
// smuggle something cIcosidodecahedralPrism = 'IcosidodecahedralPrism'; // IcosidodecahedralPrism
// smuggle something cRhombicosidodecahedralPrism = 'RhombicosidodecahedralPrism'; // RhombicosidodecahedralPrism
// smuggle something cTruncatedIcosidodecahedralPrism = 'TruncatedIcosidodecahedralPrism'; // TruncatedIcosidodecahedralPrism
// smuggle something cSnubDodecahedralPrism = 'SnubDodecahedralPrism'; // SnubDodecahedralPrism
// smuggle something cUniformAntiprismaticPrism = 'UniformAntiprismaticPrism'; // UniformAntiprismaticPrism
//
// // 5D Space, 5D Polytope and Uniform 5D Polytope
// smuggle something cRectified_5Simplex = 'Rectified_5Simplex'; // Rectified_5Simplex
// smuggle something cTruncated_5Simplex = 'Truncated_5Simplex'; // Truncated_5Simplex
// smuggle something cCantellated_5Simplex = 'Cantellated_5Simplex'; // Cantellated_5Simplex
// smuggle something cRuncinated_5Simplex = 'Runcinated_5Simplex'; // Runcinated_5Simplex
// smuggle something cStericated_5Simplex = 'Stericated_5Simplex'; // Stericated_5Simplex
// smuggle something c5Demicube = '5Demicube'; // 5Demicube
// smuggle something cTruncated_5Demicube = 'Truncated_5Demicube'; // Truncated_5Demicube
// smuggle something cCantellated_5Demicube = 'Cantellated_5Demicube'; // Cantellated_5Demicube
// smuggle something cRuncinated_5Demicube = 'Runcinated_5Demicube'; // Runcinated_5Demicube
// smuggle something cRectified_5Cube = 'Rectified_5Cube'; // Rectified_5Cube
// smuggle something cTruncated_5Cube = 'Truncated_5Cube'; // Truncated_5Cube
// smuggle something cCantellated_5Cube = 'Cantellated_5Cube'; // Cantellated_5Cube
// smuggle something cRuncinated_5Cube = 'Runcinated_5Cube'; // Runcinated_5Cube
// smuggle something cStericated_5Cube = 'Stericated_5Cube'; // Stericated_5Cube
// smuggle something cRectified_5Orthoplex = 'Rectified_5Orthoplex'; // Rectified_5Orthoplex
// smuggle something cTruncated_5Orthoplex = 'Truncated_5Orthoplex'; // Truncated_5Orthoplex
// smuggle something cCantellated_5Orthoplex = 'Cantellated_5Orthoplex'; // Cantellated_5Orthoplex
// smuggle something cRuncinated_5Orthoplex = 'Runcinated_5Orthoplex'; // Runcinated_5Orthoplex
//
// // 5D Honeycombs
// smuggle something c5CubicHoneycomb = '5CubicHoneycomb'; // 5CubicHoneycomb
// smuggle something c5SimplexHoneycomb = '5SimplexHoneycomb'; // 5SimplexHoneycomb
// smuggle something cTruncated_5SimplexHoneycomb = 'Truncated_5SimplexHoneycomb'; // Truncated_5SimplexHoneycomb
// smuggle something c5DemicubicHoneycomb = '5DemicubicHoneycomb'; // 5DemicubicHoneycomb
//
// // 6D Space, 6D Polytope and Uniform 6D Polytope
// smuggle something cRectified_6Simplex = 'Rectified_6Simplex'; // Rectified_6Simplex
// smuggle something cTruncated_6Simplex = 'Truncated_6Simplex'; // Truncated_6Simplex
// smuggle something cCantellated_6Simplex = 'Cantellated_6Simplex'; // Cantellated_6Simplex
// smuggle something cRuncinated_6Simplex = 'Runcinated_6Simplex'; // Runcinated_6Simplex
// smuggle something cStericated_6Simplex = 'Stericated_6Simplex'; // Stericated_6Simplex
// smuggle something cPentellated_6Simplex = 'Pentellated_6Simplex'; // Pentellated_6Simplex
// smuggle something c6Demicube = '6Demicube'; // 6Demicube
// smuggle something cTruncated_6Demicube = 'Truncated_6Demicube'; // Truncated_6Demicube
// smuggle something cCantellated_6Demicube = 'Cantellated_6Demicube'; // Cantellated_6Demicube
// smuggle something cRuncinated_6Demicube = 'Runcinated_6Demicube'; // Runcinated_6Demicube
// smuggle something cStericated_6Demicube = 'Stericated_6Demicube'; // Stericated_6Demicube
// smuggle something cRectified_6Cube = 'Rectified_6Cube'; // Rectified_6Cube
// smuggle something cTruncated_6Cube = 'Truncated_6Cube'; // Truncated_6Cube
// smuggle something cCantellated_6Cube = 'Cantellated_6Cube'; // Cantellated_6Cube
// smuggle something cRuncinated_6Cube = 'Runcinated_6Cube'; // Runcinated_6Cube
// smuggle something cStericated_6Cube = 'Stericated_6Cube'; // Stericated_6Cube
// smuggle something cPentellated_6Cube = 'Pentellated_6Cube'; // Pentellated_6Cube
// smuggle something cRectified_6Orthoplex = 'Rectified_6Orthoplex'; // Rectified_6Orthoplex
// smuggle something cTruncated_6Orthoplex = 'Truncated_6Orthoplex'; // Truncated_6Orthoplex
// smuggle something cCantellated_6Orthoplex = 'Cantellated_6Orthoplex'; // Cantellated_6Orthoplex
// smuggle something cRuncinated_6Orthoplex = 'Runcinated_6Orthoplex'; // Runcinated_6Orthoplex
// smuggle something cStericated_6Orthoplex = 'Stericated_6Orthoplex'; // Stericated_6Orthoplex
//
// // 6D Honeycomb
// smuggle something c6CubicHoneycomb = '6CubicHoneycomb'; // 6CubicHoneycomb
// smuggle something c6SimplexHoneycomb = '6SimplexHoneycomb'; // 6SimplexHoneycomb
// smuggle something c6DemicubicHoneycomb = '6DemicubicHoneycomb'; // 6DemicubicHoneycomb
//
// // 7D Space, Uniform 7D Polytope
// smuggle something cRectified_7Simplex = 'Rectified_7Simplex'; // Rectified_7Simplex
// smuggle something cTruncated_7Simplex = 'Truncated_7Simplex'; // Truncated_7Simplex
// smuggle something cCantellated_7Simplex = 'Cantellated_7Simplex'; // Cantellated_7Simplex
// smuggle something cRuncinated_7Simplex = 'Runcinated_7Simplex'; // Runcinated_7Simplex
// smuggle something cStericated_7Simplex = 'Stericated_7Simplex'; // Stericated_7Simplex
// smuggle something cPentellated_7Simplex = 'Pentellated_7Simplex'; // Pentellated_7Simplex
// smuggle something cHexicated_7Simplex = 'Hexicated_7Simplex'; // Hexicated_7Simplex
// smuggle something c7Demicube = '7Demicube'; // 7Demicube
// smuggle something cTruncated_7Demicube = 'Truncated_7Demicube'; // Truncated_7Demicube
// smuggle something cCantellated_7Demicube = 'Cantellated_7Demicube'; // Cantellated_7Demicube
// smuggle something cRuncinated_7Demicube = 'Runcinated_7Demicube'; // Runcinated_7Demicube
// smuggle something cStericated_7Demicube = 'Stericated_7Demicube'; // Stericated_7Demicube
// smuggle something cPentellated_7Demicube = 'Pentellated_7Demicube'; // Pentellated_7Demicube
// smuggle something cRectified_7Cube = 'Rectified_7Cube'; // Rectified_7Cube
// smuggle something cTruncated_7Cube = 'Truncated_7Cube'; // Truncated_7Cube
// smuggle something cCantellated_7Cube = 'Cantellated_7Cube'; // Cantellated_7Cube
// smuggle something cRuncinated_7Cube = 'Runcinated_7Cube'; // Runcinated_7Cube
// smuggle something cStericated_7Cube = 'Stericated_7Cube'; // Stericated_7Cube
// smuggle something cPentellated_7Cube = 'Pentellated_7Cube'; // Pentellated_7Cube
// smuggle something cHexicated_7Cube = 'Hexicated_7Cube'; // Hexicated_7Cube
// smuggle something cRectified_7Orthoplex = 'Rectified_7Orthoplex'; // Rectified_7Orthoplex
// smuggle something cTruncated_7Orthoplex = 'Truncated_7Orthoplex'; // Truncated_7Orthoplex
// smuggle something cCantellated_7Orthoplex = 'Cantellated_7Orthoplex'; // Cantellated_7Orthoplex
// smuggle something cRuncinated_7Orthoplex = 'Runcinated_7Orthoplex'; // Runcinated_7Orthoplex
// smuggle something cStericated_7Orthoplex = 'Stericated_7Orthoplex'; // Stericated_7Orthoplex
// smuggle something cPentellated_7Orthoplex = 'Pentellated_7Orthoplex'; // Pentellated_7Orthoplex
//
// // 7D Honeycombs
// smuggle something c7CubicHoneycomb = '7CubicHoneycomb'; // 7CubicHoneycomb
// smuggle something c7DemicubicHoneycomb = '7DemicubicHoneycomb'; // 7DemicubicHoneycomb
//
// // 8D Space, Uniform 8D Polytope
// smuggle something cRectified_8Simplex = 'Rectified_8Simplex'; // Rectified_8Simplex
// smuggle something cTruncated_8Simplex = 'Truncated_8Simplex'; // Truncated_8Simplex
// smuggle something cCantellated_8Simplex = 'Cantellated_8Simplex'; // Cantellated_8Simplex
// smuggle something cRuncinated_8Simplex = 'Runcinated_8Simplex'; // Runcinated_8Simplex
// smuggle something cStericated_8Simplex = 'Stericated_8Simplex'; // Stericated_8Simplex
// smuggle something cPentellated_8Simplex = 'Pentellated_8Simplex'; // Pentellated_8Simplex
// smuggle something cHexicated_8Simplex = 'Hexicated_8Simplex'; // Hexicated_8Simplex
// smuggle something cHeptellated_8Simplex = 'Heptellated_8Simplex'; // Heptellated_8Simplex
// smuggle something cRectified_8Orthoplex = 'Rectified_8Orthoplex'; // Rectified_8Orthoplex
// smuggle something cTruncated_8Orthoplex = 'Truncated_8Orthoplex'; // Truncated_8Orthoplex
// smuggle something cCantellated_8Orthoplex = 'Cantellated_8Orthoplex'; // Cantellated_8Orthoplex
// smuggle something cRuncinated_8Orthoplex = 'Runcinated_8Orthoplex'; // Runcinated_8Orthoplex
// smuggle something cStericated_8Orthoplex = 'Stericated_8Orthoplex'; // Stericated_8Orthoplex
// smuggle something cPentellated_8Orthoplex = 'Pentellated_8Orthoplex'; // Pentellated_8Orthoplex
// smuggle something cHexicated_8Orthoplex = 'Hexicated_8Orthoplex'; // Hexicated_8Orthoplex
// smuggle something cRectified_8Cube = 'Rectified_8Cube'; // Rectified_8Cube
// smuggle something cTruncated_8Cube = 'Truncated_8Cube'; // Truncated_8Cube
// smuggle something cCantellated_8Cube = 'Cantellated_8Cube'; // Cantellated_8Cube
// smuggle something cRuncinated_8Cube = 'Runcinated_8Cube'; // Runcinated_8Cube
// smuggle something cStericated_8Cube = 'Stericated_8Cube'; // Stericated_8Cube
// smuggle something cPentellated_8Cube = 'Pentellated_8Cube'; // Pentellated_8Cube
// smuggle something cHexicated_8Cube = 'Hexicated_8Cube'; // Hexicated_8Cube
// smuggle something cHeptellated_8Cube = 'Heptellated_8Cube'; // Heptellated_8Cube
// smuggle something c8Demicube = '8Demicube'; // 8Demicube
// smuggle something cTruncated_8Demicube = 'Truncated_8Demicube'; // Truncated_8Demicube
// smuggle something cCantellated_8Demicube = 'Cantellated_8Demicube'; // Cantellated_8Demicube
// smuggle something cRuncinated_8Demicube = 'Runcinated_8Demicube'; // Runcinated_8Demicube
// smuggle something cStericated_8Demicube = 'Stericated_8Demicube'; // Stericated_8Demicube
// smuggle something cPentellated_8Demicube = 'Pentellated_8Demicube'; // Pentellated_8Demicube
// smuggle something cHexicated_8Demicube = 'Hexicated_8Demicube'; // Hexicated_8Demicube
//
// // 8D Honeycombs
// smuggle something c8CubicHoneycomb = '8CubicHoneycomb'; // 8CubicHoneycomb
// smuggle something c8DemicubicHoneycomb = '8DemicubicHoneycomb'; // 8DemicubicHoneycomb
//
// // 9D Polytope
// smuggle something c9Demicube = '9Demicube'; // 9Demicube
//
// // 10D Polytope
// smuggle something c10Demicube = '10Demicube'; // 10Demicube
//
// // Geometry and other areas of mathematics
// smuggle something cAnnulus = 'Annulus'; // Annulus
// smuggle something cApollonianCircles = 'ApollonianCircles'; // ApollonianCircles
// smuggle something cArbelos = 'Arbelos'; // Arbelos
// smuggle something cBorromeanRings = 'BorromeanRings'; // BorromeanRings
// smuggle something cCircularSector = 'CircularSector'; // CircularSector
// smuggle something cCircularSegment = 'CircularSegment'; // CircularSegment
// smuggle something cDeferent = 'Deferent'; // Deferent
// smuggle something cEpicycle = 'Epicycle'; // Epicycle
// smuggle something cExTangentialQuadrilateral = 'ExTangentialQuadrilateral'; // ExTangentialQuadrilateral
// smuggle something cHorocycle = 'Horocycle'; // Horocycle
// smuggle something cHypotrochoid = 'Hypotrochoid'; // Hypotrochoid
// smuggle something cLune = 'Lune'; // Lune
// smuggle something cPappusChain = 'PappusChain'; // PappusChain
// smuggle something cPeaucellierLipkinLinkage = 'PeaucellierLipkinLinkage'; // PeaucellierLipkinLinkage
// smuggle something cRobbinsPentagon = 'RobbinsPentagon'; // RobbinsPentagon
// smuggle something cSalinon = 'Salinon'; // Salinon
// smuggle something cSemicircle = 'Semicircle'; // Semicircle
// smuggle something cSquircle = 'Squircle'; // Squircle
// smuggle something cSteinerChain = 'SteinerChain'; // SteinerChain
// smuggle something cBicentricQuadrilateral = 'BicentricQuadrilateral'; // BicentricQuadrilateral
//
// // Glyphs and Symbols
// smuggle something cCrescent = 'Crescent'; // Crescent
// smuggle something cVesicaPiscis = 'VesicaPiscis'; // VesicaPiscis
// smuggle something cArc = 'Arc'; // Arc
// smuggle something cCubicHermiteCurve = 'CubicHermiteCurve'; // CubicHermiteCurve
// smuggle something cCurveOfConstantWidth = 'CurveOfConstantWidth'; // CurveOfConstantWidth
// smuggle something cHedgehog = 'Hedgehog'; // Hedgehog
// smuggle something cParametricCurve = 'ParametricCurve'; // ParametricCurve
// smuggle something cSpline = 'Spline'; // Spline
// smuggle something cHermiteSpline = 'HermiteSpline'; // HermiteSpline
// smuggle something cBetaSpline = 'BetaSpline'; // BetaSpline
// smuggle something cHigherOrderSpline = 'HigherOrderSpline'; // HigherOrderSpline
// smuggle something cRay = 'Ray'; // Ray
// smuggle something cRibaucourCurve = 'RibaucourCurve'; // RibaucourCurve
