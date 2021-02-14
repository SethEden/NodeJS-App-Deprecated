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
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as g from './generic.constants';
import * as w from './word.constants';

// Basic Shapes
export const cline = b.cli + b.cne; // line
export const cLine = b.cLi + b.cne; // Line
export const ccircle = p.ccir + p.ccle; // circle
export const cCircle = p.cCir + p.ccle; // Circle
export const coval = b.cov + b.cal; // oval
export const cOval = b.cOv + b.cal; // Oval
export const csquare = b.cs + p.cquare; // square
export const cSquare = b.cS + p.cquare; // Square
export const ctriangle = p.ctri + w.cangle; // triangle
export const cTriangle = p.cTri + w.cangle; // Triangle
export const crectangle = p.crect + w.cangle; // rectangle
export const cRectangle = p.cRect + w.cangle; // Rectangle
export const coctagon = p.coct + b.ca + p.cgon; // octagon
export const cOctagon = p.cOct + b.ca + p.cgon; // Octagon
export const chexagon = p.chex + b.ca + p.cgon; // hexagon
export const cHexagon = p.cHex + b.ca + p.cgon; // Hexagon
export const cheptagon = p.chep + b.cta + p.cgon; // heptagon
export const cHeptagon = p.cHep + b.cta + p.cgon; // Heptagon
export const cnonagon = p.cnon + b.ca + p.cgon; // nonagon
export const cNonagon = p.cNon + b.ca + p.cgon; // Nonagon
export const ctrapezoid = w.ctrap + b.ce + p.czoid; // trapezoid
export const cTrapezoid = w.cTrap + b.ce + p.czoid; // Trapezoid
export const ccube = b.ccu + b.cbe; // cube
export const cCube = b.cCu + b.cbe; // Cube
// This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes

// Miscellaneous
export const ccubic = b.cc + p.cubic; // cubic
export const cCubic = b.cC + p.cubic; // Cubic
export const cplane = b.cp + w.clane; // plane
export const cPlane = b.cP + w.clane; // Plane
export const ccurve = b.cc + p.curve; // curve
export const cCurve = b.cC + p.curve; // Curve
export const cquartic = p.cqua + p.crtic; // quartic
export const cQuartic = p.cQua + p.crtic; // Quartic
export const cconic = p.ccon + b.cic; // conic
export const cConic = p.cCon + b.cic; // Conic

// Algebraic Curves
export const ccubicPlaneCurve = ccubic + cPlane + cCurve; // cubicPlaneCurve
export const cCubicPlaneCurve = cCubic + cPlane + cCurve; // CubicPlaneCurve
export const cquarticPlaneCurve = cquartic + cPlane + cCurve; // quarticPlaneCurve
export const cQuarticPlaneCurve = cQuartic + cPlane + cCurve; // QuarticPlaneCurve

// 2nd Degree Curves
export const cconicSection = cconic + w.cSection; // conicSection
export const cConicSection = cConic + w.cSection; // ConicSection
export const cunitCircle = w.cunit + cCircle; // unitCircle
export const cUnitCircle = w.cUnit + cCircle; // UnitCircle
export const cunitHyperbola = w.cunit + p.cHyper + p.cbola; // unitHyperbola
export const cUnitHyperbola = w.cUnit + p.cHyper + p.cbola; // UnitHyperbola

// 3rd Degree Curves
export const cFoliumOfDescartes = 'FoliumOfDescartes'; // FoliumOfDescartes
export const cCissoidOfDiocles = 'CissoidOfDiocles'; // CissoidOfDiocles
export const cConchoidOfDeSluze = 'ConchoidOfDeSluze'; // ConchoidOfDeSluze
export const cRightStrophoid = 'RightStrophoid'; // RightStrophoid
export const cSemicubicalParabola = 'SemicubicalParabola'; // SemicubicalParabola
export const cSerpentineCurve = 'SerpentineCurve'; // SerpentineCurve
export const cTridentCurve = 'TridentCurve'; // TridentCurve
export const cTrisectrixOfMaclaurin = 'TrisectrixOfMaclaurin'; // TrisectrixOfMaclaurin
export const cTschirnhausenCubic = 'TschirnhausenCubic'; // TschirnhausenCubic
export const cWitchOfAgnesi = 'WitchOfAgnesi'; // WitchOfAgnesi

// 4th Degree Curves
export const cAmpersandCurve = 'AmpersandCurve'; // AmpersandCurve
export const cBeanCurve = 'BeanCurve'; // BeanCurve
export const cBicorn = 'Bicorn'; // Bicorn
export const cBowCurve = 'BowCurve'; // BowCurve
export const cBulletNoseCurve = 'BulletNoseCurve'; // BulletNoseCurve
export const cCruciformCurve = 'CruciformCurve'; // CruciformCurve
export const cDeltoidCurve = 'DeltoidCurve'; // DeltoidCurve
export const cDevilsCurve = 'DevilsCurve'; // DevilsCurve
export const cHippopede = 'Hippopede'; // Hippopede
export const cKampyleOfEudoxus = 'KampyleOfEudoxus'; // KampyleOfEudoxus
export const cKappaCurve = 'KappaCurve'; // KappaCurve
export const cLemniscateOfBooth = 'LemniscateOfBooth'; // LemniscateOfBooth
export const cLemniscateOfGerono = 'LemniscateOfGerono'; // LemniscateOfGerono
export const cLemniscateOfBernoulli = 'LemniscateOfBernoulli'; // LemniscateOfBernoulli
export const cLimacon = 'Limacon'; // Limacon
export const cCardioid = 'Cardioid'; // Cardioid
export const cLimaconTrisectrix = 'LimaconTrisectrix'; // LimaconTrisectrix
export const cTrifoliumCurve = 'TrifoliumCurve'; // TrifoliumCurve

// 5th Degree Curves
export const cQuinticOfLHospital = 'QuinticOfLHospital'; // QuinticOfLHospital

// 6th Degree Curves
export const cAstroid = 'Astroid'; // Astroid
export const cAtriphtaloid = 'Atriphtaloid'; // Atriphtaloid
export const cNephroid = 'Nephroid'; // Nephroid
export const cQuadrifolium = 'Quadrifolium'; // Quadrifolium

// Families of Variable Degree
export const cEpicycloid = 'Epicycloid'; // Epicycloid
export const cEpispiral = 'Epispiral'; // Epispiral
export const cEpitrochoid = 'Epitrochoid'; // Epitrochoid
export const cHypocycloid = 'Hypocycloid'; // Hypocycloid
export const cLissajousCurve = 'LissajousCurve'; // LissajousCurve
export const cPoinsotsSpirals = 'PoinsotsSpirals'; // PoinsotsSpirals
export const cRationalNormalCurve = 'RationalNormalCurve'; // RationalNormalCurve
export const cRoseCurve = 'RoseCurve'; // RoseCurve

// Curves of Genus One
export const cBicuspidCurve = 'BicuspidCurve'; // BicuspidCurve
export const cCassiniOval = 'CassiniOval'; // CassiniOval
export const cCassinoide = 'Cassinoide'; // Cassinoide
export const cCubicCurve = 'CubicCurve'; // CubicCurve
export const cEllipticCurve = 'EllipticCurve'; // EllipticCurve
export const cWattsCurve = 'WattsCurve'; // WattsCurve

// Curves with Genus Greater than One
export const cButterflyCurve = 'ButterflyCurve'; // ButterflyCurve
export const cElkiesTrinomialCurves = 'ElkiesTrinomialCurves'; // ElkiesTrinomialCurves
export const cHyperellipticCurve = 'HyperellipticCurve'; // HyperellipticCurve
export const cKleinQuartic = 'KleinQuartic'; // KleinQuartic
export const cClassicalModularCurve = 'ClassicalModularCurve'; // ClassicalModularCurve
export const cBolzaSurface = 'BolzaSurface'; // BolzaSurface
export const cMacbeathSurface = 'MacbeathSurface'; // MacbeathSurface

// Curve Families with Variable Genus
export const cPolynomialLemniscate = 'PolynomialLemniscate'; // PolynomialLemniscate
export const cFermatCurve = 'FermatCurve'; // FermatCurve
export const cSinusoidalSpiral = 'SinusoidalSpiral'; // SinusoidalSpiral
export const cSuperellipse = 'Superellipse'; // Superellipse
export const cHurwitzSurface = 'HurwitzSurface'; // HurwitzSurface

// Transcendental Curves
export const cBowditchCurve = 'BowditchCurve'; // BowditchCurve
export const cBrachistochrone = 'Brachistochrone'; // Brachistochrone
export const cCatenary = 'Catenary'; // Catenary
export const cClelies = 'Clelies'; // Clelies
export const cCochleoid = 'Cochleoid'; // Cochleoid
export const cCycloid = 'Cycloid'; // Cycloid
export const cHoropter = 'Horopter'; // Horopter
export const cIsochrone = 'Isochrone'; // Isochrone
export const cTautochrone = 'Tautochrone'; // Tautochrone
export const cIsochroneOfLeibniz = 'IsochroneOfLeibniz'; // IsochroneOfLeibniz
export const cIsochroneOfVarignon = 'IsochroneOfVarignon'; // IsochroneOfVarignon
export const cLameCurve = 'LameCurve'; // LameCurve
export const cPursuitCurve = 'PursuitCurve'; // PursuitCurve
export const cRhumbLine = 'RhumbLine'; // RhumbLine
export const cSpirals = 'Spirals'; // Spirals
export const cArchimedeanSpiral = 'ArchimedeanSpiral'; // ArchimedeanSpiral
export const cCornuSpiral = 'CornuSpiral'; // CornuSpiral
export const cCotesSpiral = 'CotesSpiral'; // CotesSpiral
export const cFermatsSpiral = 'FermatsSpiral'; // FermatsSpiral
export const cGalileosSpiral = 'GalileosSpiral'; // GalileosSpiral
export const cHyperbolicSpiral = 'HyperbolicSpiral'; // HyperbolicSpiral
export const cLituus = 'Lituus'; // Lituus
export const cLogarithmicSpiral = 'LogarithmicSpiral'; // LogarithmicSpiral
export const cNielsensSpiral = 'NielsensSpiral'; // NielsensSpiral
export const cSyntractrix = 'Syntractrix'; // Syntractrix
export const cTractrix = 'Tractrix'; // Tractrix
export const cTrochoid = 'Trochoid'; // Trochoid

// Piecewise Constructions Curves
export const cBezierCurve = 'BezierCurve'; // BezierCurve
export const cSplines = 'Splines'; // Splines
export const cBSpline = 'BSpline'; // BSpline
export const cNonuniformRationalBSpline = 'NonuniformRationalBSpline'; // NonuniformRationalBSpline
export const cNURBS = 'NURBS'; // NURBS
export const cOgee = 'Ogee'; // Ogee
export const cLoessCurve = 'LoessCurve'; // LoessCurve
export const cLowess = 'Lowess'; // Lowess
export const cPolygonalCurve = 'PolygonalCurve'; // PolygonalCurve
export const cMaurerRose = 'MaurerRose'; // MaurerRose
export const cReuleauxTriangle = 'ReuleauxTriangle'; // ReuleauxTriangle
export const cBezierTriangle = 'BezierTriangle'; // BezierTriangle

// Curves Generated by Other Curves
export const cCaustic = 'Caustic'; // Caustic
export const cCatacaustic = 'Catacaustic'; // Catacaustic
export const cDiacaustic = 'Diacaustic'; // Diacaustic
export const cCissoid = 'Cissoid'; // Cissoid
export const cConchoid = 'Conchoid'; // Conchoid
export const cEvolute = 'Evolute'; // Evolute
export const cGlissette = 'Glissette'; // Glissette
export const cInverseCurve = 'InverseCurve'; // InverseCurve
export const cInvolute = 'Involute'; // Involute
export const cIsoptic = 'Isoptic'; // Isoptic
export const cOrthoptic = 'Orthoptic'; // Orthoptic
export const cOrthotomic = 'Orthotomic'; // Orthotomic
export const cNegativePedalCurve = 'NegativePedalCurve'; // NegativePedalCurve
export const cPedalCurve = 'PedalCurve'; // PedalCurve
export const cParallelCurve = 'ParallelCurve'; // ParallelCurve
export const cRadialCurve = 'RadialCurve'; // RadialCurve
export const cRoulette = 'Roulette'; // Roulette
export const cStrophoid = 'Strophoid'; // Strophoid

// Space Curves
export const cConchospiral = 'Conchospiral'; // Conchospiral
export const cHelix = 'Helix'; // Helix
export const cTendrilPerversion = 'TendrilPerversion'; // TendrilPerversion
export const cHemihelix = 'Hemihelix'; // Hemihelix
export const cSeiffertsSpiral = 'SeiffertsSpiral'; // SeiffertsSpiral
export const cSlinkySpiral = 'SlinkySpiral'; // SlinkySpiral
export const cTwistedCubic = 'TwistedCubic'; // TwistedCubic
export const cVivianisCurve = 'VivianisCurve'; // VivianisCurve

// Surfaces in 3D Space
export const cQuadricSurfaces = 'QuadricSurfaces'; // QuadricSurfaces
export const cCone = 'Cone'; // Cone
export const cCylinder = 'Cylinder'; // Cylinder
export const cEllipsoid = 'Ellipsoid'; // Ellipsoid
export const cSpheroid = 'Spheroid'; // Spheroid
export const cSphere = 'Sphere'; // Sphere
export const cHyperboloid = 'Hyperboloid'; // Hyperboloid
export const cParaboloid = 'Paraboloid'; // Paraboloid
export const cMobiusStrip = 'MobiusStrip'; // MobiusStrip
export const cTorus = 'Torus'; // Torus

// Minimal Surfaces
export const cCatalansMinimalSurface = 'CatalansMinimalSurface'; // CatalansMinimalSurface
export const cCostasMinimalSurface = 'CostasMinimalSurface'; // CostasMinimalSurface
export const cCatenoid = 'Catenoid'; // Catenoid
export const cEnneperSurface = 'EnneperSurface'; // EnneperSurface
export const cGyroid = 'Gyroid'; // Gyroid
export const cHelicoid = 'Helicoid'; // Helicoid
export const cLidinoid = 'Lidinoid'; // Lidinoid
export const cRiemannsMinimalSurface = 'RiemannsMinimalSurface'; // RiemannsMinimalSurface
export const cSaddleTower = 'SaddleTower'; // SaddleTower
export const cScherkSurface = 'ScherkSurface'; // ScherkSurface
export const cSchwarzMinimalSurface = 'SchwarzMinimalSurface'; // SchwarzMinimalSurface
export const cTriplyPeriodicMinimalSurface = 'TriplyPeriodicMinimalSurface'; // TriplyPeriodicMinimalSurface

// Non-Orientable Surfaces
export const cKleinBottle = 'KleinBottle'; // KleinBottle
export const cRealProjectivePlane = 'RealProjectivePlane'; // RealProjectivePlane
export const cCrossCap = 'CrossCap'; // CrossCap
export const cRomanSurface = 'RomanSurface'; // RomanSurface
export const cBoysSurface = 'BoysSurface'; // BoysSurface

// Quadrics
export const cOblateSpheroid = 'OblateSpheroid'; // OblateSpheroid
export const cHyperboloidOfOneSheet = 'HyperboloidOfOneSheet'; // HyperboloidOfOneSheet
export const cHyperboloidOfTwoSheets = 'HyperboloidOfTwoSheets'; // HyperboloidOfTwoSheets
export const cHyperbolicParaboloid = 'HyperbolicParaboloid'; // HyperbolicParaboloid
export const cSphericon = 'Sphericon'; // Sphericon
export const cOloid = 'Oloid'; // Oloid

// Pseudospherical Surfaces
export const cDinisSurface = 'DinisSurface'; // DinisSurface
export const cPseudosphere = 'Pseudosphere'; // Pseudosphere

// Algebraic Surfaces
export const cCayleyCubic = 'CayleyCubic'; // CayleyCubic
export const cBarthSextic = 'BarthSextic'; // BarthSextic
export const cClebschCubic = 'ClebschCubic'; // ClebschCubic
export const cMonkeySaddle = 'MonkeySaddle'; // MonkeySaddle
export const cDupinCyclide = 'DupinCyclide'; // DupinCyclide
export const cWhitneyUmbrella = 'WhitneyUmbrella'; // WhitneyUmbrella

// Miscellaneous Surfaces
export const cRightConoid = 'RightConoid'; // RightConoid

// Fractals
export const cApollonianGasket = 'ApollonianGasket'; // ApollonianGasket
export const cApollonianSpherePacking = 'ApollonianSpherePacking'; // ApollonianSpherePacking
export const cBlancmangeCurve = 'BlancmangeCurve'; // BlancmangeCurve
export const cCantorDust = 'CantorDust'; // CantorDust
export const cCantorSet = 'CantorSet'; // CantorSet
export const cCantorTesseract = 'CantorTesseract'; // CantorTesseract
export const cCircleInversionFractal = 'CircleInversionFractal'; // CircleInversionFractal
export const cDeRhamCurve = 'DeRhamCurve'; // DeRhamCurve
export const cDouadyRabbit = 'DouadyRabbit'; // DouadyRabbit
export const cDragonCurve = 'DragonCurve'; // DragonCurve
export const cFibonacciWordFractal = 'FibonacciWordFractal'; // FibonacciWordFractal
export const cFlameFractal = 'FlameFractal'; // FlameFractal
export const cFractalCurve = 'FractalCurve'; // FractalCurve
export const cGosperCurve = 'GosperCurve'; // GosperCurve
export const cGosperIsland = 'GosperIsland'; // GosperIsland
export const cHFractal = 'HFractal'; // HFractal
export const cHenonMap = 'HenonMap'; // HenonMap
export const cHexaflake = 'Hexaflake'; // Hexaflake
export const cHilbertCurve = 'HilbertCurve'; // HilbertCurve
export const cIkedaMapAttractor = 'IkedaMapAttractor'; // IkedaMapAttractor
export const cIteratedFunctionSystem = 'IteratedFunctionSystem'; // IteratedFunctionSystem
export const cJerusalemCube = 'JerusalemCube'; // JerusalemCube
export const cJuliaSet = 'JuliaSet'; // JuliaSet
export const cKochCurve = 'KochCurve'; // KochCurve
export const cKochSnowflake = 'KochSnowflake'; // KochSnowflake
export const cLSystem = 'LSystem'; // LSystem
export const cLevyCCurve = 'LevyCCurve'; // LevyCCurve
export const cFeigenbaumAttractor = 'FeigenbaumAttractor'; // FeigenbaumAttractor
export const cLorenzAttractor = 'LorenzAttractor'; // LorenzAttractor
export const cLyapunovFractal = 'LyapunovFractal'; // LyapunovFractal
export const cMandelbrotSet = 'MandelbrotSet'; // MandelbrotSet
export const cMandelbrotTree = 'MandelbrotTree'; // MandelbrotTree
export const cMandelbulb = 'Mandelbulb'; // Mandelbulb
export const cMengerSponge = 'MengerSponge'; // MengerSponge
export const cMonkeysTree = 'MonkeysTree'; // MonkeysTree
export const cMooreCurve = 'MooreCurve'; // MooreCurve
export const cNFlake = 'NFlake'; // NFlake
export const cPascalTriangle = 'PascalTriangle'; // PascalTriangle
export const cPeanoCurve = 'PeanoCurve'; // PeanoCurve
export const cPenroseTiling = 'PenroseTiling'; // PenroseTiling
export const cPinwheelTiling = 'PinwheelTiling'; // PinwheelTiling
export const cPythagorasTree = 'PythagorasTree'; // PythagorasTree
export const cRauzyFractal = 'RauzyFractal'; // RauzyFractal
export const cRosslerAttractor = 'RosslerAttractor'; // RosslerAttractor
export const cSierpinskiArrowheadCurve = 'SierpinskiArrowheadCurve'; // SierpinskiArrowheadCurve
export const cSierpinskiCarpet = 'SierpinskiCarpet'; // SierpinskiCarpet
export const cSierpinskiCurve = 'SierpinskiCurve'; // SierpinskiCurve
export const cSierpinskiTriangle = 'SierpinskiTriangle'; // SierpinskiTriangle
export const cSmithVolterraCantorSet = 'SmithVolterraCantorSet'; // SmithVolterraCantorSet
export const cTSquare = 'TSquare'; // TSquare
export const cTakagiCurve = 'TakagiCurve'; // TakagiCurve
export const cTriflake = 'Triflake'; // Triflake
export const cVicsekFractal = 'VicsekFractal'; // VicsekFractal
export const cVonKochCurve = 'VonKochCurve'; // VonKochCurve
export const cWeierstrassFunction = 'WeierstrassFunction'; // WeierstrassFunction
export const cZOrderCurve = 'ZOrderCurve'; // ZOrderCurve

// Random Fractals
export const cVonKochCurveWithRandomInterval = 'VonKochCurveWithRandomInterval'; // VonKochCurveWithRandomInterval
export const cVonKochCurveWithRandomOrientation = 'VonKochCurveWithRandomOrientation'; // VonKochCurveWithRandomOrientation
export const cBoundaryOfBrownianMotion = 'BoundaryOfBrownianMotion'; // BoundaryOfBrownianMotion
export const c2DPolymer = '2DPolymer'; // 2DPolymer
export const cPercolationFrontIn2D = 'PercolationFrontIn2D'; // PercolationFrontIn2D
export const cCorrosionFrontIn2D = 'CorrosionFrontIn2D'; // CorrosionFrontIn2D
export const cDiffusionLimitedAggregation = 'DiffusionLimitedAggregation'; // DiffusionLimitedAggregation
export const cRandomWalkWithNoSelfIntersection = 'RandomWalkWithNoSelfIntersection'; // RandomWalkWithNoSelfIntersection
export const c3DPolymer = '3DPolymer'; // 3DPolymer
export const c2DPercolationClusterHull = '2DPercolationClusterHull'; // 2DPercolationClusterHull
export const c2DPercolationCluster = '2DPercolationCluster'; // 2DPercolationCluster
export const cBrownianMotion = 'BrownianMotion'; // BrownianMotion
export const cLichtenbergFigure = 'LichtenbergFigure'; // LichtenbergFigure
export const cPercolationTheory = 'PercolationTheory'; // PercolationTheory
export const cMultiplicativeCascade = 'MultiplicativeCascade'; // MultiplicativeCascade

// 2D Regular Polytopes
export const cPolygon = 'Polygon'; // Polygon
export const cEquilateral = 'Equilateral'; // Equilateral
export const cCyclicPolygon = 'CyclicPolygon'; // CyclicPolygon
export const cConvexPolygon = 'ConvexPolygon'; // ConvexPolygon
export const cStarPolygon = 'StarPolygon'; // StarPolygon
export const cPentagram = 'Pentagram'; // Pentagram

// 2D Convex Polytopes
export const cRegularPolygon = 'RegularPolygon'; // RegularPolygon
export const cEquilateralTriangle = 'EquilateralTriangle'; // EquilateralTriangle
export const cSimplex = 'Simplex'; // Simplex
export const cCrossPolytope = 'CrossPolytope'; // CrossPolytope
export const cHypercube = 'Hypercube'; // Hypercube
export const cPentagon = 'Pentagon'; // Pentagon
export const cEnneagon = 'Enneagon'; // Enneagon
export const cDecagon = 'Decagon'; // Decagon
export const cHendecagon = 'Hendecagon'; // Hendecagon
export const cDodecagon = 'Dodecagon'; // Dodecagon
export const cTridecagon = 'Tridecagon'; // Tridecagon
export const cTetradecagon = 'Tetradecagon'; // Tetradecagon
export const cPentadecagon = 'Pentadecagon'; // Pentadecagon
export const cHexadecagon = 'Hexadecagon'; // Hexadecagon
export const cHeptadecagon = 'Heptadecagon'; // Heptadecagon
export const cOctadecagon = 'Octadecagon'; // Octadecagon
export const cEnneadecagon = 'Enneadecagon'; // Enneadecagon
export const cIcosagon = 'Icosagon'; // Icosagon
export const cHectogon = 'Hectogon'; // Hectogon
export const cChiliagon = 'Chiliagon'; // Chiliagon

// 2D Degenerate Spherical Polytopes
export const cMonogon = 'Monogon'; // Monogon
export const cDigon = 'Digon'; // Digon

// 2D Non-Convex Polytopes
export const cHeptagram = 'Heptagram'; // Heptagram
export const cOctagram = 'Octagram'; // Octagram
export const cEnneagram = 'Enneagram'; // Enneagram
export const cDecagram = 'Decagram'; // Decagram

// 2D Tessellation Polytopes
export const cApeirogon = 'Apeirogon'; // Apeirogon

// 3D Regular Polytopes
export const cPolyhedron = 'Polyhedron'; // Polyhedron

// 3D Convex Polytopes
export const cPlatonicSolid = 'PlatonicSolid'; // PlatonicSolid
export const cTetrahedron = 'Tetrahedron'; // Tetrahedron
export const cOctahedron = 'Octahedron'; // Octahedron
export const cDodecahedron = 'Dodecahedron'; // Dodecahedron
export const cIcosahedron = 'Icosahedron'; // Icosahedron

// 3D Degenerate Spherical Polytopes
export const cHosohedron = 'Hosohedron'; // Hosohedron
export const cDihedron = 'Dihedron'; // Dihedron
export const cHenagon = 'Henagon'; // Henagon

// 3D Non-Convex Polytopes
export const cKeplerPoinsotPolyhedra = 'KeplerPoinsotPolyhedra'; // KeplerPoinsotPolyhedra
export const cSmallStellatedDodecahedron = 'SmallStellatedDodecahedron'; // SmallStellatedDodecahedron
export const cGreatDodecahedron = 'GreatDodecahedron'; // GreatDodecahedron
export const cGreatStellatedDodecahedron = 'GreatStellatedDodecahedron'; // GreatStellatedDodecahedron
export const cGreatIcosahedron = 'GreatIcosahedron'; // GreatIcosahedron

// Euclidean Tilings
export const cSquareTiling = 'SquareTiling'; // SquareTiling
export const cGrid = 'Grid'; // Grid
export const cTriangularTiling = 'TriangularTiling'; // TriangularTiling
export const cHexagonalTiling = 'HexagonalTiling'; // HexagonalTiling

// Hyperbolic Tilings
export const cLobachevskiPlane = 'LobachevskiPlane'; // LobachevskiPlane
export const cHyperbolicTiling = 'HyperbolicTiling'; // HyperbolicTiling

// Hyperbolic Star-Tilings
export const cOrder7HeptagrammicTiling = 'Order7HeptagrammicTiling'; // Order7HeptagrammicTiling
export const cHeptagrammicOrderHeptagonalTiling = 'HeptagrammicOrderHeptagonalTiling'; // HeptagrammicOrderHeptagonalTiling
export const cOrder9EnneagrammicTiling = 'Order9EnneagrammicTiling'; // Order9EnneagrammicTiling
export const cEnneagrammicOrderEnneagonalTiling = 'EnneagrammicOrderEnneagonalTiling'; // EnneagrammicOrderEnneagonalTiling

// 4D Regular Polytopes
export const c4DSpaceSimplex = '4DSpaceSimplex'; // 4DSpaceSimplex
export const c4DHypercube = '4DHypercube'; // 4DHypercube
export const c4DCrossPolytope = '4DCrossPolytope'; // 4DCrossPolytope
export const c24Cell = '24Cell'; // 24Cell
export const c120Cell = '120Cell'; // 120Cell
export const c600Cell = '600Cell'; // 600Cell

// 4D Degenerate Spherical Polytopes
export const cDitope = 'Ditope'; // Ditope
export const cHosotope = 'Hosotope'; // Hosotope
export const c3Sphere = '3Sphere'; // 3Sphere
export const cHyperSphere = 'HyperSphere'; // HyperSphere

// 4D Non-Convex Polytopes
export const cIcosahedral120Cell = 'Icosahedral120Cell'; // Icosahedral120Cell
export const cSmallStellated120Cell = 'SmallStellated120Cell'; // SmallStellated120Cell
export const cGreat120Cell = 'Great120Cell'; // Great120Cell
export const cGrand120Cell = 'Grand120Cell'; // Grand120Cell
export const cGreatStellated120Cell = 'GreatStellated120Cell'; // GreatStellated120Cell
export const cGrandStellated120Cell = 'GrandStellated120Cell'; // GrandStellated120Cell
export const cGreatGrand120Cell = 'GreatGrand120Cell'; // GreatGrand120Cell
export const cGreatIcosahedral120Cell = 'GreatIcosahedral120Cell'; // GreatIcosahedral120Cell
export const cGrand600Cell = 'Grand600Cell'; // Grand600Cell
export const cGreatGrandStellated120Cell = 'GreatGrandStellated120Cell'; // GreatGrandStellated120Cell

// Tessellations of Euclidean 3D
export const cHoneycomb = 'Honeycomb'; // Honeycomb
export const cCubicHoneycomb = 'CubicHoneycomb'; // CubicHoneycomb

// Degenerate tessellations of Euclidean 3D
export const cOrder2ApeirogonalTiling = 'Order2ApeirogonalTiling'; // Order2ApeirogonalTiling
export const cApeirogonalHosohedron = 'ApeirogonalHosohedron'; // ApeirogonalHosohedron
export const cOrder4SquareHosohedralHoneycomb = 'Order4SquareHosohedralHoneycomb'; // Order4SquareHosohedralHoneycomb
export const cOrder6TriangularHosohedralHoneycomb = 'Order6TriangularHosohedralHoneycomb'; // Order6TriangularHosohedralHoneycomb
export const cHexagonalHosohedralHoneycomb = 'HexagonalHosohedralHoneycomb'; // HexagonalHosohedralHoneycomb
export const cOrder2SquareTilingHoneycomb = 'Order2SquareTilingHoneycomb'; // Order2SquareTilingHoneycomb
export const cOrder2TriangularTilingHoneycomb = 'Order2TriangularTilingHoneycomb'; // Order2TriangularTilingHoneycomb
export const cOrder2HexagonalTilingHoneycomb = 'Order2HexagonalTilingHoneycomb'; // Order2HexagonalTilingHoneycomb

// Tessellations of Hyperbolic 3D
export const cOrder4DodecahedralHoneycomb = 'Order4DodecahedralHoneycomb'; // Order4DodecahedralHoneycomb
export const cOrder5DodecahedralHoneycomb = 'Order5DodecahedralHoneycomb'; // Order5DodecahedralHoneycomb
export const cOrder5CubicHoneycomb = 'Order5CubicHoneycomb'; // Order5CubicHoneycomb
export const cIcosahedralHoneycomb = 'IcosahedralHoneycomb'; // IcosahedralHoneycomb
export const cOrder3IcosahedralHoneycomb = 'Order3IcosahedralHoneycomb'; // Order3IcosahedralHoneycomb
export const cOrder4OctahedralHoneycomb = 'Order4OctahedralHoneycomb'; // Order4OctahedralHoneycomb
export const cTriangularTilingHoneycomb = 'TriangularTilingHoneycomb'; // TriangularTilingHoneycomb
export const cSquareTilingHoneycomb = 'SquareTilingHoneycomb'; // SquareTilingHoneycomb
export const cOrder4SquareTilingHoneycomb = 'Order4SquareTilingHoneycomb'; // Order4SquareTilingHoneycomb
export const cOrder6TetrahedralHoneycomb = 'Order6TetrahedralHoneycomb'; // Order6TetrahedralHoneycomb
export const cOrder6CubicHoneycomb = 'Order6CubicHoneycomb'; // Order6CubicHoneycomb
export const cOrder6DodecahedralHoneycomb = 'Order6DodecahedralHoneycomb'; // Order6DodecahedralHoneycomb
export const cHexagonalTilingHoneycomb = 'HexagonalTilingHoneycomb'; // HexagonalTilingHoneycomb
export const cOrder4HexagonalTilingHoneycomb = 'Order4HexagonalTilingHoneycomb'; // Order4HexagonalTilingHoneycomb
export const cOrder5HexagonalTilingHoneycomb = 'Order5HexagonalTilingHoneycomb'; // Order5HexagonalTilingHoneycomb
export const cOrder6HexagonalTilingHoneycomb = 'Order6HexagonalTilingHoneycomb'; // Order6HexagonalTilingHoneycomb

// 5D Regular Polytopes and Higher
export const c5Polytope = '5Polytope'; // 5Polytope
export const cTetracomb = 'Tetracomb'; // Tetracomb
export const cSimplexHypercubeCrossPolytope = 'SimplexHypercubeCrossPolytope'; // SimplexHypercubeCrossPolytope
export const c5Simplex = '5Simplex'; // 5Simplex
export const c5Cube = '5Cube'; // 5Cube
export const c5Orthoplex = '5Orthoplex'; // 5Orthoplex
export const c6Simplex = '6Simplex'; // 6Simplex
export const c6Cube = '6Cube'; // 6Cube
export const c6Orthoplex = '6Orthoplex'; // 6Orthoplex
export const c7Simplex = '7Simplex'; // 7Simplex
export const c7Cube = '7Cube'; // 7Cube
export const c7Orthoplex = '7Orthoplex'; // 7Orthoplex
export const c8Simplex = '8Simplex'; // 8Simplex
export const c8Cube = '8Cube'; // 8Cube
export const c8Orthoplex = '8Orthoplex'; // 8Orthoplex
export const c9Simplex = '9Simplex'; // 9Simplex
export const c9Cube = '9Cube'; // 9Cube
export const c9Orthoplex = '9Orthoplex'; // 9Orthoplex
export const c10Simplex = '10Simplex'; // 10Simplex
export const c10Cube = '10Cube'; // 10Cube
export const c10Orthoplex = '10Orthoplex'; // 10Orthoplex
export const c11Simplex = '11Simplex'; // 11Simplex
export const c11Cube = '11Cube'; // 11Cube
export const c11Orthoplex = '11Orthoplex'; // 11Orthoplex

// Tessellations of Euclidean 4D
export const cHoneycombs = 'Honeycombs'; // Honeycombs
export const cTesseracticHoneycomb = 'TesseracticHoneycomb'; // TesseracticHoneycomb
export const c16CellHoneycomb = '16CellHoneycomb'; // 16CellHoneycomb
export const c24CellHoneycomb = '24CellHoneycomb'; // 24CellHoneycomb

// Tessellations of Euclidean 5D and Higher
export const cHypercubicHoneycomb = 'HypercubicHoneycomb'; // HypercubicHoneycomb
export const c5CubeHoneycomb = '5CubeHoneycomb'; // 5CubeHoneycomb
export const c6CubeHoneycomb = '6CubeHoneycomb'; // 6CubeHoneycomb
export const c7CubeHoneycomb = '7CubeHoneycomb'; // 7CubeHoneycomb
export const c8CubeHoneycomb = '8CubeHoneycomb'; // 8CubeHoneycomb

// Tessellations of Hyperbolic 4D
export const cOrder5_5CellHoneycomb = 'Order5_5CellHoneycomb'; // Order5_5CellHoneycomb
export const c120CellHoneycomb = '120CellHoneycomb'; // 120CellHoneycomb
export const cOrder5TesseracticHoneycomb = 'Order5TesseracticHoneycomb'; // Order5TesseracticHoneycomb
export const cOrder4_120CellHoneycomb = 'Order4_120CellHoneycomb'; // Order4_120CellHoneycomb
export const cOrder5_120CellHoneycomb = 'Order5_120CellHoneycomb'; // Order5_120CellHoneycomb
export const cOrder4_24CellHoneycomb = 'Order4_24CellHoneycomb'; // Order4_24CellHoneycomb
export const cSmallStellated120CellHoneycomb = 'SmallStellated120CellHoneycomb'; // SmallStellated120CellHoneycomb
export const cPentagrammicOrder600CellHoneycomb = 'PentagrammicOrder600CellHoneycomb'; // PentagrammicOrder600CellHoneycomb
export const cOrder5Icosahedral120CellHoneycomb = 'Order5Icosahedral120CellHoneycomb'; // Order5Icosahedral120CellHoneycomb
export const cGreat120CellHoneycomb = 'Great120CellHoneycomb'; // Great120CellHoneycomb

// Tessellations of Hyperbolic 5D
export const c5OrthoplexHoneycomb = '5OrthoplexHoneycomb'; // 5OrthoplexHoneycomb
export const c24CellHoneycombHoneycomb = '24CellHoneycombHoneycomb'; // 24CellHoneycombHoneycomb
export const c16CellHoneycombHoneycomb = '16CellHoneycombHoneycomb'; // 16CellHoneycombHoneycomb

// Apeirotopes
export const cApeirotope = 'Apeirotope'; // Apeirotope
export const cApeirohedron = 'Apeirohedron'; // Apeirohedron
export const cRegularSkewPolyhedron = 'RegularSkewPolyhedron'; // RegularSkewPolyhedron

// Abstract Polytopes
export const cAbstractPolytope = 'AbstractPolytope'; // AbstractPolytope
export const c11Cell = '11Cell'; // 11Cell
export const c57Cell = '57Cell'; // 57Cell

// 2D with 1D Surface
export const cConcavePolygon = 'ConcavePolygon'; // ConcavePolygon
export const cConstructiblePolygon = 'ConstructiblePolygon'; // ConstructiblePolygon
export const cEquiangularPolygon = 'EquiangularPolygon'; // EquiangularPolygon
export const cEquilateralPolygon = 'EquilateralPolygon'; // EquilateralPolygon
export const cPenroseTile = 'PenroseTile'; // PenroseTile
export const cPolyform = 'Polyform'; // Polyform
export const cBalbis = 'Balbis'; // Balbis
export const cGnomon = 'Gnomon'; // Gnomon
export const cGolygon = 'Golygon'; // Golygon
export const cStar = 'Star'; // Star
export const cHexagram = 'Hexagram'; // Hexagram
export const cStarOfDavid = 'StarOfDavid'; // StarOfDavid
export const cStarOfLakshmi = 'StarOfLakshmi'; // StarOfLakshmi

// Polygons named for their number of sides
export const cAcuteTriangle = 'AcuteTriangle'; // AcuteTriangle
export const cIsoscelesTriangle = 'IsoscelesTriangle'; // IsoscelesTriangle
export const cObtuseTriangle = 'ObtuseTriangle'; // ObtuseTriangle
export const cRationalTriangle = 'RationalTriangle'; // RationalTriangle
export const cRightTriangle = 'RightTriangle'; // RightTriangle
export const c30_60_90Triangle = '30_60_90Triangle'; // 30_60_90Triangle
export const cIsoscelesRightTriangle = 'IsoscelesRightTriangle'; // IsoscelesRightTriangle
export const cKeplerTriangle = 'KeplerTriangle'; // KeplerTriangle
export const cScaleneTriangle = 'ScaleneTriangle'; // ScaleneTriangle
export const cQuadrilateral = 'Quadrilateral'; // Quadrilateral
export const cCyclicQuadrilateral = 'CyclicQuadrilateral'; // CyclicQuadrilateral
export const cKite = 'Kite'; // Kite
export const cParallelogram = 'Parallelogram'; // Parallelogram
export const cRhombus = 'Rhombus'; // Rhombus
export const cEquilateralParallelogram = 'EquilateralParallelogram'; // EquilateralParallelogram
export const cLozenge = 'Lozenge'; // Lozenge
export const cRhomboid = 'Rhomboid'; // Rhomboid
export const cTangentialQuadrilateral = 'TangentialQuadrilateral'; // TangentialQuadrilateral
export const cTrapezium = 'Trapezium'; // Trapezium
export const cIsoscelesTrapezoid = 'IsoscelesTrapezoid'; // IsoscelesTrapezoid
export const cRegularPentagon = 'RegularPentagon'; // RegularPentagon
export const cLemoineHexagon = 'LemoineHexagon'; // LemoineHexagon
export const cRegularOctagon = 'RegularOctagon'; // RegularOctagon
export const cRegularDecagon = 'RegularDecagon'; // RegularDecagon
export const cTriskaidecagon = 'Triskaidecagon'; // Triskaidecagon
export const cTriacontagon = 'Triacontagon'; // Triacontagon
export const cTetracontagon = 'Tetracontagon'; // Tetracontagon
export const cPentacontagon = 'Pentacontagon'; // Pentacontagon
export const cHexacontagon = 'Hexacontagon'; // Hexacontagon
export const cHeptacontagon = 'Heptacontagon'; // Heptacontagon
export const cOctacontagon = 'Octacontagon'; // Octacontagon
export const cEnneacontagon = 'Enneacontagon'; // Enneacontagon
export const c257Gon = '257Gon'; // 257Gon
export const cMyriagon = 'Myriagon'; // Myriagon
export const c65537Gon = '65537Gon'; // 65537Gon
export const cMegagon = 'Megagon'; // Megagon

// Tilings
export const cArchimedeanTiling = 'ArchimedeanTiling'; // ArchimedeanTiling
export const cTruncatedSquareTiling = 'TruncatedSquareTiling'; // TruncatedSquareTiling
export const cSnubSquareTiling = 'SnubSquareTiling'; // SnubSquareTiling
export const cTrihexagonalTiling = 'TrihexagonalTiling'; // TrihexagonalTiling
export const cTruncatedHexagonalTiling = 'TruncatedHexagonalTiling'; // TruncatedHexagonalTiling
export const cRhombitriHexagonalTiling = 'RhombitriHexagonalTiling'; // RhombitriHexagonalTiling
export const cTruncatedTriHexagonalTiling = 'TruncatedTriHexagonalTiling'; // TruncatedTriHexagonalTiling
export const cSnubHexagonalTiling = 'SnubHexagonalTiling'; // SnubHexagonalTiling
export const cElongatedTriangularTiling = 'ElongatedTriangularTiling'; // ElongatedTriangularTiling

// Uniform Polyhedra
export const cHemicube = 'Hemicube'; // Hemicube
export const cHemiOctahedron = 'HemiOctahedron'; // HemiOctahedron
export const cHemiDodecahedron = 'HemiDodecahedron'; // HemiDodecahedron
export const cHemiIcosahedron = 'HemiIcosahedron'; // HemiIcosahedron
export const cTruncatedTetrahedron = 'TruncatedTetrahedron'; // TruncatedTetrahedron
export const cCuboctahedron = 'Cuboctahedron'; // Cuboctahedron
export const cTruncatedCube = 'TruncatedCube'; // TruncatedCube
export const cTruncatedOctahedron = 'TruncatedOctahedron'; // TruncatedOctahedron
export const cRhombicubOctahedron = 'RhombicubOctahedron'; // RhombicubOctahedron
export const cTruncatedCuboctahedron = 'TruncatedCuboctahedron'; // TruncatedCuboctahedron
export const cSnubCube = 'SnubCube'; // SnubCube
export const cIcosidodecahedron = 'Icosidodecahedron'; // Icosidodecahedron
export const cTruncatedDodecahedron = 'TruncatedDodecahedron'; // TruncatedDodecahedron
export const cTruncatedIcosahedron = 'TruncatedIcosahedron'; // TruncatedIcosahedron
export const cRhombicosidodecahedron = 'Rhombicosidodecahedron'; // Rhombicosidodecahedron
export const cTruncatedIcosidodecahedron = 'TruncatedIcosidodecahedron'; // TruncatedIcosidodecahedron
export const cSnubDodecahedron = 'SnubDodecahedron'; // SnubDodecahedron
export const cPrism = 'Prism'; // Prism
export const cAntiprism = 'Antiprism'; // Antiprism
export const cCubitruncatedCuboctahedron = 'CubitruncatedCuboctahedron'; // CubitruncatedCuboctahedron
export const cCubohemioctahedron = 'Cubohemioctahedron'; // Cubohemioctahedron
export const cDitrigonalDodecadodecahedron = 'DitrigonalDodecadodecahedron'; // DitrigonalDodecadodecahedron
export const cDodecadodecahedron = 'Dodecadodecahedron'; // Dodecadodecahedron
export const cGreatCubicuboctahedron = 'GreatCubicuboctahedron'; // GreatCubicuboctahedron
export const cGreatDirhombicosidodecahedron = 'GreatDirhombicosidodecahedron'; // GreatDirhombicosidodecahedron
export const cGreatDisnubDirhombidodecahedron = 'GreatDisnubDirhombidodecahedron'; // GreatDisnubDirhombidodecahedron
export const cGreatDitrigonalDodecicosidodecahedron = 'GreatDitrigonalDodecicosidodecahedron'; // GreatDitrigonalDodecicosidodecahedron
export const cGreatDitrigonalIcosidodecahedron = 'GreatDitrigonalIcosidodecahedron'; // GreatDitrigonalIcosidodecahedron
export const cGreatDodecahemicosahedron = 'GreatDodecahemicosahedron'; // GreatDodecahemicosahedron
export const cGreatDodecahemidodecahedron = 'GreatDodecahemidodecahedron'; // GreatDodecahemidodecahedron
export const cGreatDodecicosahedron = 'GreatDodecicosahedron'; // GreatDodecicosahedron
export const cGreatDodecicosidodecahedron = 'GreatDodecicosidodecahedron'; // GreatDodecicosidodecahedron
export const cGreatIcosicosidodecahedron = 'GreatIcosicosidodecahedron'; // GreatIcosicosidodecahedron
export const cGreatIcosidodecahedron = 'GreatIcosidodecahedron'; // GreatIcosidodecahedron
export const cGreatIcosihemidodecahedron = 'GreatIcosihemidodecahedron'; // GreatIcosihemidodecahedron
export const cGreatInvertedSnubIcosidodecahedron = 'GreatInvertedSnubIcosidodecahedron'; // GreatInvertedSnubIcosidodecahedron
export const cGreatRetrosnubIcosidodecahedron = 'GreatRetrosnubIcosidodecahedron'; // GreatRetrosnubIcosidodecahedron
export const cGreatRhombidodecahedron = 'GreatRhombidodecahedron'; // GreatRhombidodecahedron
export const cGreatRhombihexahedron = 'GreatRhombihexahedron'; // GreatRhombihexahedron
export const cGreatSnubDodecicosidodecahedron = 'GreatSnubDodecicosidodecahedron'; // GreatSnubDodecicosidodecahedron
export const cGreatSnubIcosidodecahedron = 'GreatSnubIcosidodecahedron'; // GreatSnubIcosidodecahedron
export const cGreatStellatedTruncatedDodecahedron = 'GreatStellatedTruncatedDodecahedron'; // GreatStellatedTruncatedDodecahedron
export const cGreatTruncatedCuboctahedron = 'GreatTruncatedCuboctahedron'; // GreatTruncatedCuboctahedron
export const cGreatTruncatedIcosidodecahedron = 'GreatTruncatedIcosidodecahedron'; // GreatTruncatedIcosidodecahedron
export const cIcosidodecadodecahedron = 'Icosidodecadodecahedron'; // Icosidodecadodecahedron
export const cIcositruncatedDodecadodecahedron = 'IcositruncatedDodecadodecahedron'; // IcositruncatedDodecadodecahedron
export const cInvertedSnubDodecadodecahedron = 'InvertedSnubDodecadodecahedron'; // InvertedSnubDodecadodecahedron
export const cNonconvexGreatRhombicosidodecahedron = 'NonconvexGreatRhombicosidodecahedron'; // NonconvexGreatRhombicosidodecahedron
export const cNonconvexGreatRhombicuboctahedron = 'NonconvexGreatRhombicuboctahedron'; // NonconvexGreatRhombicuboctahedron
export const cOctahemioctahedron = 'Octahemioctahedron'; // Octahemioctahedron
export const cRhombicosahedron = 'Rhombicosahedron'; // Rhombicosahedron
export const cRhombidodecadodecahedron = 'Rhombidodecadodecahedron'; // Rhombidodecadodecahedron
export const cSmallCubicuboctahedron = 'SmallCubicuboctahedron'; // SmallCubicuboctahedron
export const cSmallDitrigonalDodecicosidodecahedron = 'SmallDitrigonalDodecicosidodecahedron'; // SmallDitrigonalDodecicosidodecahedron
export const cSmallDitrigonalIcosidodecahedron = 'SmallDitrigonalIcosidodecahedron'; // SmallDitrigonalIcosidodecahedron
export const cSmallDodecahemicosahedron = 'SmallDodecahemicosahedron'; // SmallDodecahemicosahedron
export const cSmallDodecahemidodecahedron = 'SmallDodecahemidodecahedron'; // SmallDodecahemidodecahedron
export const cSmallDodecicosahedron = 'SmallDodecicosahedron'; // SmallDodecicosahedron
export const cSmallDodecicosidodecahedron = 'SmallDodecicosidodecahedron'; // SmallDodecicosidodecahedron
export const cSmallIcosicosidodecahedron = 'SmallIcosicosidodecahedron'; // SmallIcosicosidodecahedron
export const cSmallIcosihemidodecahedron = 'SmallIcosihemidodecahedron'; // SmallIcosihemidodecahedron
export const cSmallRetrosnubIcosicosidodecahedron = 'SmallRetrosnubIcosicosidodecahedron'; // SmallRetrosnubIcosicosidodecahedron
export const cSmallRhombidodecahedron = 'SmallRhombidodecahedron'; // SmallRhombidodecahedron
export const cSmallRhombihexahedron = 'SmallRhombihexahedron'; // SmallRhombihexahedron
export const cSmallSnubIcosicosidodecahedron = 'SmallSnubIcosicosidodecahedron'; // SmallSnubIcosicosidodecahedron
export const cSmallStellatedTruncatedDodecahedron = 'SmallStellatedTruncatedDodecahedron'; // SmallStellatedTruncatedDodecahedron
export const cSnubDodecadodecahedron = 'SnubDodecadodecahedron'; // SnubDodecadodecahedron
export const cSnubIcosidodecadodecahedron = 'SnubIcosidodecadodecahedron'; // SnubIcosidodecadodecahedron
export const cStellatedTruncatedHexahedron = 'StellatedTruncatedHexahedron'; // StellatedTruncatedHexahedron
export const cTetrahemihexahedron = 'Tetrahemihexahedron'; // Tetrahemihexahedron
export const cTruncatedDodecadodecahedron = 'TruncatedDodecadodecahedron'; // TruncatedDodecadodecahedron
export const cTruncatedGreatDodecahedron = 'TruncatedGreatDodecahedron'; // TruncatedGreatDodecahedron
export const cTruncatedGreatIcosahedron = 'TruncatedGreatIcosahedron'; // TruncatedGreatIcosahedron

// Duals of Uniform Polyhedra
export const cCatalanSolid = 'CatalanSolid'; // CatalanSolid
export const cTriakisTetrahedron = 'TriakisTetrahedron'; // TriakisTetrahedron
export const cRhombicDodecahedron = 'RhombicDodecahedron'; // RhombicDodecahedron
export const cTriakisOctahedron = 'TriakisOctahedron'; // TriakisOctahedron
export const cTetrakisHexahedron = 'TetrakisHexahedron'; // TetrakisHexahedron
export const cDeltoidalIcositetrahedron = 'DeltoidalIcositetrahedron'; // DeltoidalIcositetrahedron
export const cDisdyakisDodecahedron = 'DisdyakisDodecahedron'; // DisdyakisDodecahedron
export const cPentagonalIcositetrahedron = 'PentagonalIcositetrahedron'; // PentagonalIcositetrahedron
export const cRhombicTriacontahedron = 'RhombicTriacontahedron'; // RhombicTriacontahedron
export const cTriakisIcosahedron = 'TriakisIcosahedron'; // TriakisIcosahedron
export const cPentakisDodecahedron = 'PentakisDodecahedron'; // PentakisDodecahedron
export const cDeltoidalHexecontahedron = 'DeltoidalHexecontahedron'; // DeltoidalHexecontahedron
export const cDisdyakisTriacontahedron = 'DisdyakisTriacontahedron'; // DisdyakisTriacontahedron
export const cPentagonalHexecontahedron = 'PentagonalHexecontahedron'; // PentagonalHexecontahedron
export const cGreatComplexIcosidodecahedron = 'GreatComplexIcosidodecahedron'; // GreatComplexIcosidodecahedron
export const cGreatDeltoidalHexecontahedron = 'GreatDeltoidalHexecontahedron'; // GreatDeltoidalHexecontahedron
export const cGreatDeltoidalIcositetrahedron = 'GreatDeltoidalIcositetrahedron'; // GreatDeltoidalIcositetrahedron
export const cGreatDirhombicosidodecacron = 'GreatDirhombicosidodecacron'; // GreatDirhombicosidodecacron
export const cGreatDisdyakisDodecahedron = 'GreatDisdyakisDodecahedron'; // GreatDisdyakisDodecahedron
export const cGreatDisdyakisTriacontahedron = 'GreatDisdyakisTriacontahedron'; // GreatDisdyakisTriacontahedron
export const cGreatDisnubDirhombidodecacron = 'GreatDisnubDirhombidodecacron'; // GreatDisnubDirhombidodecacron
export const cGreatDitrigonalDodecacronicHexecontahedron = 'GreatDitrigonalDodecacronicHexecontahedron'; // GreatDitrigonalDodecacronicHexecontahedron
export const cGreatDodecacronicHexecontahedron = 'GreatDodecacronicHexecontahedron'; // GreatDodecacronicHexecontahedron
export const cGreatDodecahemicosacron = 'GreatDodecahemicosacron'; // GreatDodecahemicosacron
export const cGreatDodecicosacron = 'GreatDodecicosacron'; // GreatDodecicosacron
export const cGreatHexacronicIcositetrahedron = 'GreatHexacronicIcositetrahedron'; // GreatHexacronicIcositetrahedron
export const cGreatHexagonalHexecontahedron = 'GreatHexagonalHexecontahedron'; // GreatHexagonalHexecontahedron
export const cGreatIcosacronicHexecontahedron = 'GreatIcosacronicHexecontahedron'; // GreatIcosacronicHexecontahedron
export const cGreatIcosihemidodecacron = 'GreatIcosihemidodecacron'; // GreatIcosihemidodecacron
export const cGreatInvertedPentagonalHexecontahedron = 'GreatInvertedPentagonalHexecontahedron'; // GreatInvertedPentagonalHexecontahedron
export const cGreatPentagonalHexecontahedron = 'GreatPentagonalHexecontahedron'; // GreatPentagonalHexecontahedron
export const cGreatPentagrammicHexecontahedron = 'GreatPentagrammicHexecontahedron'; // GreatPentagrammicHexecontahedron
export const cGreatPentakisDodecahedron = 'GreatPentakisDodecahedron'; // GreatPentakisDodecahedron
export const cGreatRhombicTriacontahedron = 'GreatRhombicTriacontahedron'; // GreatRhombicTriacontahedron
export const cGreatRhombidodecacron = 'GreatRhombidodecacron'; // GreatRhombidodecacron
export const cGreatRhombihexacron = 'GreatRhombihexacron'; // GreatRhombihexacron
export const cGreatStellapentakisDodecahedron = 'GreatStellapentakisDodecahedron'; // GreatStellapentakisDodecahedron
export const cGreatTriakisIcosahedron = 'GreatTriakisIcosahedron'; // GreatTriakisIcosahedron
export const cGreatTriakisOctahedron = 'GreatTriakisOctahedron'; // GreatTriakisOctahedron
export const cGreatTriambicIcosahedron = 'GreatTriambicIcosahedron'; // GreatTriambicIcosahedron
export const cMedialDeltoidalHexecontahedron = 'MedialDeltoidalHexecontahedron'; // MedialDeltoidalHexecontahedron
export const cMedialDisdyakisTriacontahedron = 'MedialDisdyakisTriacontahedron'; // MedialDisdyakisTriacontahedron
export const cMedialHexagonalHexecontahedron = 'MedialHexagonalHexecontahedron'; // MedialHexagonalHexecontahedron
export const cMedialIcosacronicHexecontahedron = 'MedialIcosacronicHexecontahedron'; // MedialIcosacronicHexecontahedron
export const cMedialInvertedPentagonalHexecontahedron = 'MedialInvertedPentagonalHexecontahedron'; // MedialInvertedPentagonalHexecontahedron
export const cMedialPentagonalHexecontahedron = 'MedialPentagonalHexecontahedron'; // MedialPentagonalHexecontahedron
export const cMedialRhombicTriacontahedron = 'MedialRhombicTriacontahedron'; // MedialRhombicTriacontahedron
export const cHexahemioctacron = 'Hexahemioctacron'; // Hexahemioctacron
export const cHemipolyhedron = 'Hemipolyhedron'; // Hemipolyhedron
export const cOctahemioctacron = 'Octahemioctacron'; // Octahemioctacron
export const cRhombicosacron = 'Rhombicosacron'; // Rhombicosacron
export const cSmallComplexIcosidodecahedron = 'SmallComplexIcosidodecahedron'; // SmallComplexIcosidodecahedron
export const cSmallDitrigonalDodecacronicHexecontahedron = 'SmallDitrigonalDodecacronicHexecontahedron'; // SmallDitrigonalDodecacronicHexecontahedron
export const cSmallDodecacronicHexecontahedron = 'SmallDodecacronicHexecontahedron'; // SmallDodecacronicHexecontahedron
export const cSmallDodecahemicosacron = 'SmallDodecahemicosacron'; // SmallDodecahemicosacron
export const cSmallDodecahemidodecacron = 'SmallDodecahemidodecacron'; // SmallDodecahemidodecacron
export const cSmallDodecicosacron = 'SmallDodecicosacron'; // SmallDodecicosacron
export const cSmallHexacronicIcositetrahedron = 'SmallHexacronicIcositetrahedron'; // SmallHexacronicIcositetrahedron
export const cSmallHexagonalHexecontahedron = 'SmallHexagonalHexecontahedron'; // SmallHexagonalHexecontahedron
export const cSmallHexagrammicHexecontahedron = 'SmallHexagrammicHexecontahedron'; // SmallHexagrammicHexecontahedron
export const cSmallIcosacronicHexecontahedron = 'SmallIcosacronicHexecontahedron'; // SmallIcosacronicHexecontahedron
export const cSmallIcosihemidodecacron = 'SmallIcosihemidodecacron'; // SmallIcosihemidodecacron
export const cSmallRhombidodecacron = 'SmallRhombidodecacron'; // SmallRhombidodecacron
export const cSmallRhombihexacron = 'SmallRhombihexacron'; // SmallRhombihexacron
export const cSmallStellapentakisDodecahedron = 'SmallStellapentakisDodecahedron'; // SmallStellapentakisDodecahedron
export const cSmallTriambicIcosahedron = 'SmallTriambicIcosahedron'; // SmallTriambicIcosahedron
export const cTetrahemihexacron = 'Tetrahemihexacron'; // Tetrahemihexacron

// Johnson Solids
export const cAugmentedDodecahedron = 'AugmentedDodecahedron'; // AugmentedDodecahedron
export const cAugmentedHexagonalPrism = 'AugmentedHexagonalPrism'; // AugmentedHexagonalPrism
export const cAugmentedPentagonalPrism = 'AugmentedPentagonalPrism'; // AugmentedPentagonalPrism
export const cAugmentedSphenocorona = 'AugmentedSphenocorona'; // AugmentedSphenocorona
export const cAugmentedTriangularPrism = 'AugmentedTriangularPrism'; // AugmentedTriangularPrism
export const cAugmentedTridiminishedIcosahedron = 'AugmentedTridiminishedIcosahedron'; // AugmentedTridiminishedIcosahedron
export const cAugmentedTruncatedCube = 'AugmentedTruncatedCube'; // AugmentedTruncatedCube
export const cAugmentedTruncatedDodecahedron = 'AugmentedTruncatedDodecahedron'; // AugmentedTruncatedDodecahedron
export const cAugmentedTruncatedTetrahedron = 'AugmentedTruncatedTetrahedron'; // AugmentedTruncatedTetrahedron
export const cBiaugmentedPentagonalPrism = 'BiaugmentedPentagonalPrism'; // BiaugmentedPentagonalPrism
export const cBiaugmentedTriangularPrism = 'BiaugmentedTriangularPrism'; // BiaugmentedTriangularPrism
export const cBiaugmentedTruncatedCube = 'BiaugmentedTruncatedCube'; // BiaugmentedTruncatedCube
export const cBigyrateDiminishedRhombicosidodecahedron = 'BigyrateDiminishedRhombicosidodecahedron'; // BigyrateDiminishedRhombicosidodecahedron
export const cBilunabirotunda = 'Bilunabirotunda'; // Bilunabirotunda
export const cDiminishedRhombicosidodecahedron = 'DiminishedRhombicosidodecahedron'; // DiminishedRhombicosidodecahedron
export const cDisphenocingulum = 'Disphenocingulum'; // Disphenocingulum
export const cElongatedPentagonalBipyramid = 'ElongatedPentagonalBipyramid'; // ElongatedPentagonalBipyramid
export const cElongatedPentagonalCupola = 'ElongatedPentagonalCupola'; // ElongatedPentagonalCupola
export const cElongatedPentagonalGyrobicupola = 'ElongatedPentagonalGyrobicupola'; // ElongatedPentagonalGyrobicupola
export const cElongatedPentagonalGyrobirotunda = 'ElongatedPentagonalGyrobirotunda'; // ElongatedPentagonalGyrobirotunda
export const cElongatedPentagonalGyrocupolarotunda = 'ElongatedPentagonalGyrocupolarotunda'; // ElongatedPentagonalGyrocupolarotunda
export const cElongatedPentagonalOrthobicupola = 'ElongatedPentagonalOrthobicupola'; // ElongatedPentagonalOrthobicupola
export const cElongatedPentagonalOrthobirotunda = 'ElongatedPentagonalOrthobirotunda'; // ElongatedPentagonalOrthobirotunda
export const cElongatedPentagonalOrthocupolarotunda = 'ElongatedPentagonalOrthocupolarotunda'; // ElongatedPentagonalOrthocupolarotunda
export const cElongatedPentagonalPyramid = 'ElongatedPentagonalPyramid'; // ElongatedPentagonalPyramid
export const cElongatedPentagonalRotunda = 'ElongatedPentagonalRotunda'; // ElongatedPentagonalRotunda
export const cElongatedSquareBipyramid = 'ElongatedSquareBipyramid'; // ElongatedSquareBipyramid
export const cElongatedSquareCupola = 'ElongatedSquareCupola'; // ElongatedSquareCupola
export const cElongatedSquareGyrobicupola = 'ElongatedSquareGyrobicupola'; // ElongatedSquareGyrobicupola
export const cElongatedSquarePyramid = 'ElongatedSquarePyramid'; // ElongatedSquarePyramid
export const cElongatedTriangularBipyramid = 'ElongatedTriangularBipyramid'; // ElongatedTriangularBipyramid
export const cElongatedTriangularCupola = 'ElongatedTriangularCupola'; // ElongatedTriangularCupola
export const cElongatedTriangularGyrobicupola = 'ElongatedTriangularGyrobicupola'; // ElongatedTriangularGyrobicupola
export const cElongatedTriangularOrthobicupola = 'ElongatedTriangularOrthobicupola'; // ElongatedTriangularOrthobicupola
export const cElongatedTriangularPyramid = 'ElongatedTriangularPyramid'; // ElongatedTriangularPyramid
export const cGyrateBidiminishedRhombicosidodecahedron = 'GyrateBidiminishedRhombicosidodecahedron'; // GyrateBidiminishedRhombicosidodecahedron
export const cGyrateRhombicosidodecahedron = 'GyrateRhombicosidodecahedron'; // GyrateRhombicosidodecahedron
export const cGyrobifastigium = 'Gyrobifastigium'; // Gyrobifastigium
export const cGyroelongatedPentagonalBicupola = 'GyroelongatedPentagonalBicupola'; // GyroelongatedPentagonalBicupola
export const cGyroelongatedPentagonalBirotunda = 'GyroelongatedPentagonalBirotunda'; // GyroelongatedPentagonalBirotunda
export const cGyroelongatedPentagonalCupola = 'GyroelongatedPentagonalCupola'; // GyroelongatedPentagonalCupola
export const cGyroelongatedPentagonalCupolarotunda = 'GyroelongatedPentagonalCupolarotunda'; // GyroelongatedPentagonalCupolarotunda
export const cGyroelongatedPentagonalPyramid = 'GyroelongatedPentagonalPyramid'; // GyroelongatedPentagonalPyramid
export const cGyroelongatedPentagonalRotunda = 'GyroelongatedPentagonalRotunda'; // GyroelongatedPentagonalRotunda
export const cGyroelongatedSquareBicupola = 'GyroelongatedSquareBicupola'; // GyroelongatedSquareBicupola
export const cGyroelongatedSquareBipyramid = 'GyroelongatedSquareBipyramid'; // GyroelongatedSquareBipyramid
export const cGyroelongatedSquareCupola = 'GyroelongatedSquareCupola'; // GyroelongatedSquareCupola
export const cGyroelongatedSquarePyramid = 'GyroelongatedSquarePyramid'; // GyroelongatedSquarePyramid
export const cGyroelongatedTriangularBicupola = 'GyroelongatedTriangularBicupola'; // GyroelongatedTriangularBicupola
export const cGyroelongatedTriangularCupola = 'GyroelongatedTriangularCupola'; // GyroelongatedTriangularCupola
export const cHebesphenomegacorona = 'Hebesphenomegacorona'; // Hebesphenomegacorona
export const cMetabiaugmentedDodecahedron = 'MetabiaugmentedDodecahedron'; // MetabiaugmentedDodecahedron
export const cMetabiaugmentedHexagonalPrism = 'MetabiaugmentedHexagonalPrism'; // MetabiaugmentedHexagonalPrism
export const cMetabiaugmentedTruncatedDodecahedron = 'MetabiaugmentedTruncatedDodecahedron'; // MetabiaugmentedTruncatedDodecahedron
export const cMetabidiminishedIcosahedron = 'MetabidiminishedIcosahedron'; // MetabidiminishedIcosahedron
export const cMetabidiminishedRhombicosidodecahedron = 'MetabidiminishedRhombicosidodecahedron'; // MetabidiminishedRhombicosidodecahedron
export const cMetabigyrateRhombicosidodecahedron = 'MetabigyrateRhombicosidodecahedron'; // MetabigyrateRhombicosidodecahedron
export const cMetagyrateDiminishedRhombicosidodecahedron = 'MetagyrateDiminishedRhombicosidodecahedron'; // MetagyrateDiminishedRhombicosidodecahedron
export const cParabiaugmentedDodecahedron = 'ParabiaugmentedDodecahedron'; // ParabiaugmentedDodecahedron
export const cParabiaugmentedHexagonalPrism = 'ParabiaugmentedHexagonalPrism'; // ParabiaugmentedHexagonalPrism
export const cParabiaugmentedTruncatedDodecahedron = 'ParabiaugmentedTruncatedDodecahedron'; // ParabiaugmentedTruncatedDodecahedron
export const cParabidiminishedRhombicosidodecahedron = 'ParabidiminishedRhombicosidodecahedron'; // ParabidiminishedRhombicosidodecahedron
export const cParabigyrateRhombicosidodecahedron = 'ParabigyrateRhombicosidodecahedron'; // ParabigyrateRhombicosidodecahedron
export const cParagyrateDiminishedRhombicosidodecahedron = 'ParagyrateDiminishedRhombicosidodecahedron'; // ParagyrateDiminishedRhombicosidodecahedron
export const cPentagonalBipyramid = 'PentagonalBipyramid'; // PentagonalBipyramid
export const cPentagonalCupola = 'PentagonalCupola'; // PentagonalCupola
export const cPentagonalGyrobicupola = 'PentagonalGyrobicupola'; // PentagonalGyrobicupola
export const cPentagonalGyrocupolarotunda = 'PentagonalGyrocupolarotunda'; // PentagonalGyrocupolarotunda
export const cPentagonalOrthobicupola = 'PentagonalOrthobicupola'; // PentagonalOrthobicupola
export const cPentagonalOrthobirotunda = 'PentagonalOrthobirotunda'; // PentagonalOrthobirotunda
export const cPentagonalOrthocupolarotunda = 'PentagonalOrthocupolarotunda'; // PentagonalOrthocupolarotunda
export const cPentagonalPyramid = 'PentagonalPyramid'; // PentagonalPyramid
export const cPentagonalRotunda = 'PentagonalRotunda'; // PentagonalRotunda
export const cSnubDisphenoid = 'SnubDisphenoid'; // SnubDisphenoid
export const cSnubSquareAntiprism = 'SnubSquareAntiprism'; // SnubSquareAntiprism
export const cSphenocorona = 'Sphenocorona'; // Sphenocorona
export const cSphenomegacorona = 'Sphenomegacorona'; // Sphenomegacorona
export const cSquareCupola = 'SquareCupola'; // SquareCupola
export const cSquareGyrobicupola = 'SquareGyrobicupola'; // SquareGyrobicupola
export const cSquareOrthobicupola = 'SquareOrthobicupola'; // SquareOrthobicupola
export const cSquarePyramid = 'SquarePyramid'; // SquarePyramid
export const cTriangularBipyramid = 'TriangularBipyramid'; // TriangularBipyramid
export const cTriangularCupola = 'TriangularCupola'; // TriangularCupola
export const cTriangularHebesphenorotunda = 'TriangularHebesphenorotunda'; // TriangularHebesphenorotunda
export const cTriangularOrthobicupola = 'TriangularOrthobicupola'; // TriangularOrthobicupola
export const cTriaugmentedDodecahedron = 'TriaugmentedDodecahedron'; // TriaugmentedDodecahedron
export const cTriaugmentedHexagonalPrism = 'TriaugmentedHexagonalPrism'; // TriaugmentedHexagonalPrism
export const cTriaugmentedTriangularPrism = 'TriaugmentedTriangularPrism'; // TriaugmentedTriangularPrism
export const cTriaugmentedTruncatedDodecahedron = 'TriaugmentedTruncatedDodecahedron'; // TriaugmentedTruncatedDodecahedron
export const cTridiminishedIcosahedron = 'TridiminishedIcosahedron'; // TridiminishedIcosahedron
export const cTridiminishedRhombicosidodecahedron = 'TridiminishedRhombicosidodecahedron'; // TridiminishedRhombicosidodecahedron
export const cTrigyrateRhombicosidodecahedron = 'TrigyrateRhombicosidodecahedron'; // TrigyrateRhombicosidodecahedron

// Other Non-Uniform Polyhedra
export const cPyramid = 'Pyramid'; // Pyramid
export const cBipyramid = 'Bipyramid'; // Bipyramid
export const cDisphenoid = 'Disphenoid'; // Disphenoid
export const cParallelepiped = 'Parallelepiped'; // Parallelepiped
export const cCuboid = 'Cuboid'; // Cuboid
export const cRhombohedron = 'Rhombohedron'; // Rhombohedron
export const cTrapezohedron = 'Trapezohedron'; // Trapezohedron
export const cFrustum = 'Frustum'; // Frustum
export const cTrapezoRhombicDodecahedron = 'TrapezoRhombicDodecahedron'; // TrapezoRhombicDodecahedron
export const cRhomboHexagonalDodecahedron = 'RhomboHexagonalDodecahedron'; // RhomboHexagonalDodecahedron
export const cTruncatedTrapezohedron = 'TruncatedTrapezohedron'; // TruncatedTrapezohedron
export const cDeltahedron = 'Deltahedron'; // Deltahedron
export const cZonohedron = 'Zonohedron'; // Zonohedron
export const cPrismatoid = 'Prismatoid'; // Prismatoid
export const cCupola = 'Cupola'; // Cupola
export const cBicupola = 'Bicupola'; // Bicupola

// Honeycombs
export const cTruncatedCubicHoneycomb = 'TruncatedCubicHoneycomb'; // TruncatedCubicHoneycomb
export const cBitruncatedCubicHoneycomb = 'BitruncatedCubicHoneycomb'; // BitruncatedCubicHoneycomb
export const cCantellatedCubicHoneycomb = 'CantellatedCubicHoneycomb'; // CantellatedCubicHoneycomb
export const cCantitruncatedCubicHoneycomb = 'CantitruncatedCubicHoneycomb'; // CantitruncatedCubicHoneycomb
export const cRectifiedCubicHoneycomb = 'RectifiedCubicHoneycomb'; // RectifiedCubicHoneycomb
export const cRuncitruncatedCubicHoneycomb = 'RuncitruncatedCubicHoneycomb'; // RuncitruncatedCubicHoneycomb
export const cOmnitruncatedCubicHoneycomb = 'OmnitruncatedCubicHoneycomb'; // OmnitruncatedCubicHoneycomb
export const cTetrahedralOctahedralHoneycomb = 'TetrahedralOctahedralHoneycomb'; // TetrahedralOctahedralHoneycomb
export const cTruncatedAlternatedCubicHoneycomb = 'TruncatedAlternatedCubicHoneycomb'; // TruncatedAlternatedCubicHoneycomb
export const cCantitruncatedAlternatedCubicHoneycomb = 'CantitruncatedAlternatedCubicHoneycomb'; // CantitruncatedAlternatedCubicHoneycomb
export const cRuncinatedAlternatedCubicHoneycomb = 'RuncinatedAlternatedCubicHoneycomb'; // RuncinatedAlternatedCubicHoneycomb
export const cQuarterCubicHoneycomb = 'QuarterCubicHoneycomb'; // QuarterCubicHoneycomb
export const cGyratedTetrahedralOctahedralHoneycomb = 'GyratedTetrahedralOctahedralHoneycomb'; // GyratedTetrahedralOctahedralHoneycomb
export const cGyratedTriangularPrismaticHoneycomb = 'GyratedTriangularPrismaticHoneycomb'; // GyratedTriangularPrismaticHoneycomb
export const cGyroelongatedAlternatedCubicHoneycomb = 'GyroelongatedAlternatedCubicHoneycomb'; // GyroelongatedAlternatedCubicHoneycomb
export const cGyroelongatedTriangularPrismaticHoneycomb = 'GyroelongatedTriangularPrismaticHoneycomb'; // GyroelongatedTriangularPrismaticHoneycomb
export const cElongatedTriangularPrismaticHoneycomb = 'ElongatedTriangularPrismaticHoneycomb'; // ElongatedTriangularPrismaticHoneycomb
export const cElongatedAlternatedCubicHoneycomb = 'ElongatedAlternatedCubicHoneycomb'; // ElongatedAlternatedCubicHoneycomb
export const cHexagonalPrismaticHoneycomb = 'HexagonalPrismaticHoneycomb'; // HexagonalPrismaticHoneycomb
export const cTriangularPrismaticHoneycomb = 'TriangularPrismaticHoneycomb'; // TriangularPrismaticHoneycomb
export const cTriangularHexagonalPrismaticHoneycomb = 'TriangularHexagonalPrismaticHoneycomb'; // TriangularHexagonalPrismaticHoneycomb
export const cTruncatedHexagonalPrismaticHoneycomb = 'TruncatedHexagonalPrismaticHoneycomb'; // TruncatedHexagonalPrismaticHoneycomb
export const cTruncatedSquarePrismaticHoneycomb = 'TruncatedSquarePrismaticHoneycomb'; // TruncatedSquarePrismaticHoneycomb
export const cRhombitriangularHexagonalPrismaticHoneycomb = 'RhombitriangularHexagonalPrismaticHoneycomb'; // RhombitriangularHexagonalPrismaticHoneycomb
export const cOmnitruncatedTriangularHexagonalPrismaticHoneycomb = 'OmnitruncatedTriangularHexagonalPrismaticHoneycomb'; // OmnitruncatedTriangularHexagonalPrismaticHoneycomb
export const cSnubTriangularHexagonalPrismaticHoneycomb = 'SnubTriangularHexagonalPrismaticHoneycomb'; // SnubTriangularHexagonalPrismaticHoneycomb
export const cSnubSquarePrismaticHoneycomb = 'SnubSquarePrismaticHoneycomb'; // SnubSquarePrismaticHoneycomb

// Dual Uniform Honeycomb
export const cDisphenoidTetrahedralHoneycomb = 'DisphenoidTetrahedralHoneycomb'; // DisphenoidTetrahedralHoneycomb
export const cRhombicDodecahedralHoneycomb = 'RhombicDodecahedralHoneycomb'; // RhombicDodecahedralHoneycomb

// Others Honeycombs
export const cTrapezoRhombicDodecahedralHoneycomb = 'TrapezoRhombicDodecahedralHoneycomb'; // TrapezoRhombicDodecahedralHoneycomb
export const cWeairePhelanStructure = 'WeairePhelanStructure'; // WeairePhelanStructure

// Other Prismatic Geometries
export const cApeirogonalPrism = 'ApeirogonalPrism'; // ApeirogonalPrism
export const cBifrustum = 'Bifrustum'; // Bifrustum
export const cBoerdijkCoxeterHelix = 'BoerdijkCoxeterHelix'; // BoerdijkCoxeterHelix
export const cCsaszarPolyhedron = 'CsaszarPolyhedron'; // CsaszarPolyhedron
export const cFlexiblePolyhedron = 'FlexiblePolyhedron'; // FlexiblePolyhedron
export const cGyroelongatedSquareDipyramid = 'GyroelongatedSquareDipyramid'; // GyroelongatedSquareDipyramid
export const cHeronianTetrahedron = 'HeronianTetrahedron'; // HeronianTetrahedron
export const cHexagonalBifrustum = 'HexagonalBifrustum'; // HexagonalBifrustum
export const cHexagonalTruncatedTrapezohedron = 'HexagonalTruncatedTrapezohedron'; // HexagonalTruncatedTrapezohedron
export const cHillTetrahedron = 'HillTetrahedron'; // HillTetrahedron
export const cHolyhedron = 'Holyhedron'; // Holyhedron
export const cInfiniteSkewPolyhedron = 'InfiniteSkewPolyhedron'; // InfiniteSkewPolyhedron
export const cJessensIcosahedron = 'JessensIcosahedron'; // JessensIcosahedron
export const cNearMissJohnsonSolid = 'NearMissJohnsonSolid'; // NearMissJohnsonSolid
export const cPentagonalBifrustum = 'PentagonalBifrustum'; // PentagonalBifrustum
export const cPolytetrahedron = 'Polytetrahedron'; // Polytetrahedron
export const cPyritohedron = 'Pyritohedron'; // Pyritohedron
export const cRhombicEnneacontahedron = 'RhombicEnneacontahedron'; // RhombicEnneacontahedron
export const cRhombicIcosahedron = 'RhombicIcosahedron'; // RhombicIcosahedron
export const cScalenohedron = 'Scalenohedron'; // Scalenohedron
export const cSchonhardtPolyhedron = 'SchonhardtPolyhedron'; // SchonhardtPolyhedron
export const cSquareBifrustum = 'SquareBifrustum'; // SquareBifrustum
export const cSquareTruncatedTrapezohedron = 'SquareTruncatedTrapezohedron'; // SquareTruncatedTrapezohedron
export const cSzilassiPolyhedron = 'SzilassiPolyhedron'; // SzilassiPolyhedron
export const cTetradecahedron = 'Tetradecahedron'; // Tetradecahedron
export const cTetradyakisHexahedron = 'TetradyakisHexahedron'; // TetradyakisHexahedron
export const cTetratedDodecahedron = 'TetratedDodecahedron'; // TetratedDodecahedron
export const cTriangularBifrustum = 'TriangularBifrustum'; // TriangularBifrustum
export const cTruncatedRhombicDodecahedron = 'TruncatedRhombicDodecahedron'; // TruncatedRhombicDodecahedron
export const cTruncatedTriakisTetrahedron = 'TruncatedTriakisTetrahedron'; // TruncatedTriakisTetrahedron
export const cTridyakisIcosahedron = 'TridyakisIcosahedron'; // TridyakisIcosahedron
export const cTrigonalTrapezohedron = 'TrigonalTrapezohedron'; // TrigonalTrapezohedron
export const cWatermanPolyhedron = 'WatermanPolyhedron'; // WatermanPolyhedron
export const cWedge = 'Wedge'; // Wedge

// Regular and Uniform Compound Polyhedra
export const cCompoundOfCubeAndOctahedron = 'CompoundOfCubeAndOctahedron'; // CompoundOfCubeAndOctahedron
export const cCompoundOfDodecahedronAndIcosahedron = 'CompoundOfDodecahedronAndIcosahedron'; // CompoundOfDodecahedronAndIcosahedron
export const cCompoundOfEightOctahedraWithRotationalFreedom = 'CompoundOfEightOctahedraWithRotationalFreedom'; // CompoundOfEightOctahedraWithRotationalFreedom
export const cCompoundOfEightTriangularPrisms = 'CompoundOfEightTriangularPrisms'; // CompoundOfEightTriangularPrisms
export const cCompoundOfFiveCubes = 'CompoundOfFiveCubes'; // CompoundOfFiveCubes
export const cCompoundOfFiveCuboctahedra = 'CompoundOfFiveCuboctahedra'; // CompoundOfFiveCuboctahedra
export const cCompoundOfFiveCubohemioctahedra = 'CompoundOfFiveCubohemioctahedra'; // CompoundOfFiveCubohemioctahedra
export const cCompoundOfFiveGreatCubicuboctahedra = 'CompoundOfFiveGreatCubicuboctahedra'; // CompoundOfFiveGreatCubicuboctahedra
export const cCompoundOfFiveGreatDodecahedra = 'CompoundOfFiveGreatDodecahedra'; // CompoundOfFiveGreatDodecahedra
export const cCompoundOfFiveGreatIcosahedra = 'CompoundOfFiveGreatIcosahedra'; // CompoundOfFiveGreatIcosahedra
export const cCompoundOfFiveGreatRhombihexahedra = 'CompoundOfFiveGreatRhombihexahedra'; // CompoundOfFiveGreatRhombihexahedra
export const cCompoundOfFiveIcosahedra = 'CompoundOfFiveIcosahedra'; // CompoundOfFiveIcosahedra
export const cCompoundOfFiveOctahedra = 'CompoundOfFiveOctahedra'; // CompoundOfFiveOctahedra
export const cCompoundOfFiveOctahemioctahedra = 'CompoundOfFiveOctahemioctahedra'; // CompoundOfFiveOctahemioctahedra
export const cCompoundOfFiveSmallCubicuboctahedra = 'CompoundOfFiveSmallCubicuboctahedra'; // CompoundOfFiveSmallCubicuboctahedra
export const cCompoundOfFiveSmallRhombicuboctahedra = 'CompoundOfFiveSmallRhombicuboctahedra'; // CompoundOfFiveSmallRhombicuboctahedra
export const cCompoundOfFiveSmallRhombihexahedra = 'CompoundOfFiveSmallRhombihexahedra'; // CompoundOfFiveSmallRhombihexahedra
export const cCompoundOfFiveSmallStellatedDodecahedra = 'CompoundOfFiveSmallStellatedDodecahedra'; // CompoundOfFiveSmallStellatedDodecahedra
export const cCompoundOfFiveStellatedTruncatedCubes = 'CompoundOfFiveStellatedTruncatedCubes'; // CompoundOfFiveStellatedTruncatedCubes
export const cCompoundOfFiveTetrahedra = 'CompoundOfFiveTetrahedra'; // CompoundOfFiveTetrahedra
export const cCompoundOfFiveTetrahemihexahedra = 'CompoundOfFiveTetrahemihexahedra'; // CompoundOfFiveTetrahemihexahedra
export const cCompoundOfFiveTruncatedCubes = 'CompoundOfFiveTruncatedCubes'; // CompoundOfFiveTruncatedCubes
export const cCompoundOfFiveTruncatedTetrahedra = 'CompoundOfFiveTruncatedTetrahedra'; // CompoundOfFiveTruncatedTetrahedra
export const cCompoundOfFiveUniformGreatRhombicuboctahedra = 'CompoundOfFiveUniformGreatRhombicuboctahedra'; // CompoundOfFiveUniformGreatRhombicuboctahedra
export const cCompoundOfFourHexagonalPrisms = 'CompoundOfFourHexagonalPrisms'; // CompoundOfFourHexagonalPrisms
export const cCompoundOfFourOctahedra = 'CompoundOfFourOctahedra'; // CompoundOfFourOctahedra
export const cCompoundOfFourOctahedraWithRotationalFreedom = 'CompoundOfFourOctahedraWithRotationalFreedom'; // CompoundOfFourOctahedraWithRotationalFreedom
export const cCompoundOfFourTetrahedra = 'CompoundOfFourTetrahedra'; // CompoundOfFourTetrahedra
export const cCompoundOfFourTriangularPrisms = 'CompoundOfFourTriangularPrisms'; // CompoundOfFourTriangularPrisms
export const cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron = 'CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron'; // CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron
export const cCompoundOfSixCubesWithRotationalFreedom = 'CompoundOfSixCubesWithRotationalFreedom'; // CompoundOfSixCubesWithRotationalFreedom
export const cCompoundOfSixDecagonalPrisms = 'CompoundOfSixDecagonalPrisms'; // CompoundOfSixDecagonalPrisms
export const cCompoundOfSixDecagrammicPrisms = 'CompoundOfSixDecagrammicPrisms'; // CompoundOfSixDecagrammicPrisms
export const cCompoundOfSixPentagonalAntiprisms = 'CompoundOfSixPentagonalAntiprisms'; // CompoundOfSixPentagonalAntiprisms
export const cCompoundOfSixPentagonalPrisms = 'CompoundOfSixPentagonalPrisms'; // CompoundOfSixPentagonalPrisms
export const cCompoundOfSixPentagrammicAntiprisms = 'CompoundOfSixPentagrammicAntiprisms'; // CompoundOfSixPentagrammicAntiprisms
export const cCompoundOfSixPentagrammicCrossedAntiprisms = 'CompoundOfSixPentagrammicCrossedAntiprisms'; // CompoundOfSixPentagrammicCrossedAntiprisms
export const cCompoundOfSixPentagrammicPrisms = 'CompoundOfSixPentagrammicPrisms'; // CompoundOfSixPentagrammicPrisms
export const cCompoundOfSixSquareAntiprisms = 'CompoundOfSixSquareAntiprisms'; // CompoundOfSixSquareAntiprisms
export const cCompoundOfSixTetrahedra = 'CompoundOfSixTetrahedra'; // CompoundOfSixTetrahedra
export const cCompoundOfSixTetrahedraWithRotationalFreedom = 'CompoundOfSixTetrahedraWithRotationalFreedom'; // CompoundOfSixTetrahedraWithRotationalFreedom
export const cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron = 'CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron'; // CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron
export const cCompoundOfTenHexagonalPrisms = 'CompoundOfTenHexagonalPrisms'; // CompoundOfTenHexagonalPrisms
export const cCompoundOfTenOctahedra = 'CompoundOfTenOctahedra'; // CompoundOfTenOctahedra
export const cCompoundOfTenTetrahedra = 'CompoundOfTenTetrahedra'; // CompoundOfTenTetrahedra
export const cCompoundOfTenTriangularPrisms = 'CompoundOfTenTriangularPrisms'; // CompoundOfTenTriangularPrisms
export const cCompoundOfTenTruncatedTetrahedra = 'CompoundOfTenTruncatedTetrahedra'; // CompoundOfTenTruncatedTetrahedra
export const cCompoundOfThreeCubes = 'CompoundOfThreeCubes'; // CompoundOfThreeCubes
export const cCompoundOfThreeSquareAntiprisms = 'CompoundOfThreeSquareAntiprisms'; // CompoundOfThreeSquareAntiprisms
export const cCompoundOfThreeTetrahedra = 'CompoundOfThreeTetrahedra'; // CompoundOfThreeTetrahedra
export const cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom'; // CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom
export const cCompoundOfTwelvePentagonalPrisms = 'CompoundOfTwelvePentagonalPrisms'; // CompoundOfTwelvePentagonalPrisms
export const cCompoundOfTwelvePentagrammicAntiprisms = 'CompoundOfTwelvePentagrammicAntiprisms'; // CompoundOfTwelvePentagrammicAntiprisms
export const cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom'; // CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom
export const cCompoundOfTwelvePentagrammicPrisms = 'CompoundOfTwelvePentagrammicPrisms'; // CompoundOfTwelvePentagrammicPrisms
export const cCompoundOfTwelveTetrahedraWithRotationalFreedom = 'CompoundOfTwelveTetrahedraWithRotationalFreedom'; // CompoundOfTwelveTetrahedraWithRotationalFreedom
export const cCompoundOfTwentyOctahedra = 'CompoundOfTwentyOctahedra'; // CompoundOfTwentyOctahedra
export const cCompoundOfTwentyOctahedraWithRotationalFreedom = 'CompoundOfTwentyOctahedraWithRotationalFreedom'; // CompoundOfTwentyOctahedraWithRotationalFreedom
export const cCompoundOfTwentyTetrahemihexahedra = 'CompoundOfTwentyTetrahemihexahedra'; // CompoundOfTwentyTetrahemihexahedra
export const cCompoundOfTwentyTriangularPrisms = 'CompoundOfTwentyTriangularPrisms'; // CompoundOfTwentyTriangularPrisms
export const cCompoundOfTwoGreatDodecahedra = 'CompoundOfTwoGreatDodecahedra'; // CompoundOfTwoGreatDodecahedra
export const cCompoundOfTwoGreatIcosahedra = 'CompoundOfTwoGreatIcosahedra'; // CompoundOfTwoGreatIcosahedra
export const cCompoundOfTwoGreatInvertedSnubIcosidodecahedra = 'CompoundOfTwoGreatInvertedSnubIcosidodecahedra'; // CompoundOfTwoGreatInvertedSnubIcosidodecahedra
export const cCompoundOfTwoGreatRetrosnubIcosidodecahedra = 'CompoundOfTwoGreatRetrosnubIcosidodecahedra'; // CompoundOfTwoGreatRetrosnubIcosidodecahedra
export const cCompoundOfTwoGreatSnubIcosidodecahedra = 'CompoundOfTwoGreatSnubIcosidodecahedra'; // CompoundOfTwoGreatSnubIcosidodecahedra
export const cCompoundOfTwoIcosahedra = 'CompoundOfTwoIcosahedra'; // CompoundOfTwoIcosahedra
export const cCompoundOfTwoInvertedSnubDodecadodecahedra = 'CompoundOfTwoInvertedSnubDodecadodecahedra'; // CompoundOfTwoInvertedSnubDodecadodecahedra
export const cCompoundOfTwoSmallStellatedDodecahedra = 'CompoundOfTwoSmallStellatedDodecahedra'; // CompoundOfTwoSmallStellatedDodecahedra
export const cCompoundOfTwoSnubCubes = 'CompoundOfTwoSnubCubes'; // CompoundOfTwoSnubCubes
export const cCompoundOfTwoSnubDodecadodecahedra = 'CompoundOfTwoSnubDodecadodecahedra'; // CompoundOfTwoSnubDodecadodecahedra
export const cCompoundOfTwoSnubDodecahedra = 'CompoundOfTwoSnubDodecahedra'; // CompoundOfTwoSnubDodecahedra
export const cCompoundOfTwoSnubIcosidodecadodecahedra = 'CompoundOfTwoSnubIcosidodecadodecahedra'; // CompoundOfTwoSnubIcosidodecadodecahedra
export const cCompoundOfTwoTruncatedTetrahedra = 'CompoundOfTwoTruncatedTetrahedra'; // CompoundOfTwoTruncatedTetrahedra
export const cPrismaticCompoundOfAntiprisms = 'PrismaticCompoundOfAntiprisms'; // PrismaticCompoundOfAntiprisms
export const cPrismaticCompoundOfAntiprismsWithRotationalFreedom = 'PrismaticCompoundOfAntiprismsWithRotationalFreedom'; // PrismaticCompoundOfAntiprismsWithRotationalFreedom
export const cPrismaticCompoundOfPrisms = 'PrismaticCompoundOfPrisms'; // PrismaticCompoundOfPrisms
export const cPrismaticCompoundOfPrismsWithRotationalFreedom = 'PrismaticCompoundOfPrismsWithRotationalFreedom'; // PrismaticCompoundOfPrismsWithRotationalFreedom

// 4D Polytopes
export const cHecatonicosachoron = 'Hecatonicosachoron'; // Hecatonicosachoron
export const cHexacosichoron = 'Hexacosichoron'; // Hexacosichoron
export const cHexadecachoron = 'Hexadecachoron'; // Hexadecachoron
export const cPentachoron = 'Pentachoron'; // Pentachoron
export const cIcositetrachoron = 'Icositetrachoron'; // Icositetrachoron
export const cTesseract = 'Tesseract'; // Tesseract

// Other Geometry
export const cSphericalCone = 'SphericalCone'; // SphericalCone

// Schläfli–Hess 4D Polytope
export const cIcosahedral_120Cell = 'Icosahedral_120Cell'; // Icosahedral_120Cell
export const cSmallStellated_120Cell = 'SmallStellated_120Cell'; // SmallStellated_120Cell
export const cGreat_120Cell = 'Great_120Cell'; // Great_120Cell
export const cGrand_120Cell = 'Grand_120Cell'; // Grand_120Cell
export const cGreatStellated_120Cell = 'GreatStellated_120Cell'; // GreatStellated_120Cell
export const cGrandStellated_120Cell = 'GrandStellated_120Cell'; // GrandStellated_120Cell
export const cGreatGrand_120Cell = 'GreatGrand_120Cell'; // GreatGrand_120Cell
export const cGreatIcosahedral_120Cell = 'GreatIcosahedral_120Cell'; // GreatIcosahedral_120Cell
export const cGrand_600Cell = 'Grand_600Cell'; // Grand_600Cell
export const cGreatGrandStellated_120Cell = 'GreatGrandStellated_120Cell'; // GreatGrandStellated_120Cell

// Uniform 4D Polytope
export const cRectified_5Cell = 'Rectified_5Cell'; // Rectified_5Cell
export const cTruncated_5Cell = 'Truncated_5Cell'; // Truncated_5Cell
export const cCantellated_5Cell = 'Cantellated_5Cell'; // Cantellated_5Cell
export const cRuncinated_5Cell = 'Runcinated_5Cell'; // Runcinated_5Cell
export const cRectifiedTesseract = 'RectifiedTesseract'; // RectifiedTesseract
export const cTruncatedTesseract = 'TruncatedTesseract'; // TruncatedTesseract
export const cCantellatedTesseract = 'CantellatedTesseract'; // CantellatedTesseract
export const cRuncinatedTesseract = 'RuncinatedTesseract'; // RuncinatedTesseract
export const cRectified_16Cell = 'Rectified_16Cell'; // Rectified_16Cell
export const cTruncated_16Cell = 'Truncated_16Cell'; // Truncated_16Cell
export const cRectified_24Cell = 'Rectified_24Cell'; // Rectified_24Cell
export const cTruncated_24Cell = 'Truncated_24Cell'; // Truncated_24Cell
export const cCantellated_24Cell = 'Cantellated_24Cell'; // Cantellated_24Cell
export const cRuncinated_24Cell = 'Runcinated_24Cell'; // Runcinated_24Cell
export const cSnub_24Cell = 'Snub_24Cell'; // Snub_24Cell
export const cRectified_120Cell = 'Rectified_120Cell'; // Rectified_120Cell
export const cTruncated_120Cell = 'Truncated_120Cell'; // Truncated_120Cell
export const cCantellated_120Cell = 'Cantellated_120Cell'; // Cantellated_120Cell
export const cRuncinated_120Cell = 'Runcinated_120Cell'; // Runcinated_120Cell
export const cRectified_600Cell = 'Rectified_600Cell'; // Rectified_600Cell
export const cTruncated_600Cell = 'Truncated_600Cell'; // Truncated_600Cell
export const cCantellated_600Cell = 'Cantellated_600Cell'; // Cantellated_600Cell

// Prismatic Uniform Polychoron
export const cGrandAntiprism = 'GrandAntiprism'; // GrandAntiprism
export const cDuoprism = 'Duoprism'; // Duoprism
export const cTetrahedralPrism = 'TetrahedralPrism'; // TetrahedralPrism
export const cTruncatedTetrahedralPrism = 'TruncatedTetrahedralPrism'; // TruncatedTetrahedralPrism
export const cTruncatedCubicPrism = 'TruncatedCubicPrism'; // TruncatedCubicPrism
export const cTruncatedOctahedralPrism = 'TruncatedOctahedralPrism'; // TruncatedOctahedralPrism
export const cCuboctahedralPrism = 'CuboctahedralPrism'; // CuboctahedralPrism
export const cRhombicuboctahedralPrism = 'RhombicuboctahedralPrism'; // RhombicuboctahedralPrism
export const cTruncatedCuboctahedralPrism = 'TruncatedCuboctahedralPrism'; // TruncatedCuboctahedralPrism
export const cSnubCubicPrism = 'SnubCubicPrism'; // SnubCubicPrism
export const cTruncatedDodecahedralPrism = 'TruncatedDodecahedralPrism'; // TruncatedDodecahedralPrism
export const cTruncatedIcosahedralPrism = 'TruncatedIcosahedralPrism'; // TruncatedIcosahedralPrism
export const cIcosidodecahedralPrism = 'IcosidodecahedralPrism'; // IcosidodecahedralPrism
export const cRhombicosidodecahedralPrism = 'RhombicosidodecahedralPrism'; // RhombicosidodecahedralPrism
export const cTruncatedIcosidodecahedralPrism = 'TruncatedIcosidodecahedralPrism'; // TruncatedIcosidodecahedralPrism
export const cSnubDodecahedralPrism = 'SnubDodecahedralPrism'; // SnubDodecahedralPrism
export const cUniformAntiprismaticPrism = 'UniformAntiprismaticPrism'; // UniformAntiprismaticPrism

// 5D Space, 5D Polytope and Uniform 5D Polytope
export const cRectified_5Simplex = 'Rectified_5Simplex'; // Rectified_5Simplex
export const cTruncated_5Simplex = 'Truncated_5Simplex'; // Truncated_5Simplex
export const cCantellated_5Simplex = 'Cantellated_5Simplex'; // Cantellated_5Simplex
export const cRuncinated_5Simplex = 'Runcinated_5Simplex'; // Runcinated_5Simplex
export const cStericated_5Simplex = 'Stericated_5Simplex'; // Stericated_5Simplex
export const c5Demicube = '5Demicube'; // 5Demicube
export const cTruncated_5Demicube = 'Truncated_5Demicube'; // Truncated_5Demicube
export const cCantellated_5Demicube = 'Cantellated_5Demicube'; // Cantellated_5Demicube
export const cRuncinated_5Demicube = 'Runcinated_5Demicube'; // Runcinated_5Demicube
export const cRectified_5Cube = 'Rectified_5Cube'; // Rectified_5Cube
export const cTruncated_5Cube = 'Truncated_5Cube'; // Truncated_5Cube
export const cCantellated_5Cube = 'Cantellated_5Cube'; // Cantellated_5Cube
export const cRuncinated_5Cube = 'Runcinated_5Cube'; // Runcinated_5Cube
export const cStericated_5Cube = 'Stericated_5Cube'; // Stericated_5Cube
export const cRectified_5Orthoplex = 'Rectified_5Orthoplex'; // Rectified_5Orthoplex
export const cTruncated_5Orthoplex = 'Truncated_5Orthoplex'; // Truncated_5Orthoplex
export const cCantellated_5Orthoplex = 'Cantellated_5Orthoplex'; // Cantellated_5Orthoplex
export const cRuncinated_5Orthoplex = 'Runcinated_5Orthoplex'; // Runcinated_5Orthoplex

// 5D Honeycombs
export const c5CubicHoneycomb = '5CubicHoneycomb'; // 5CubicHoneycomb
export const c5SimplexHoneycomb = '5SimplexHoneycomb'; // 5SimplexHoneycomb
export const cTruncated_5SimplexHoneycomb = 'Truncated_5SimplexHoneycomb'; // Truncated_5SimplexHoneycomb
export const c5DemicubicHoneycomb = '5DemicubicHoneycomb'; // 5DemicubicHoneycomb

// 6D Space, 6D Polytope and Uniform 6D Polytope
export const cRectified_6Simplex = 'Rectified_6Simplex'; // Rectified_6Simplex
export const cTruncated_6Simplex = 'Truncated_6Simplex'; // Truncated_6Simplex
export const cCantellated_6Simplex = 'Cantellated_6Simplex'; // Cantellated_6Simplex
export const cRuncinated_6Simplex = 'Runcinated_6Simplex'; // Runcinated_6Simplex
export const cStericated_6Simplex = 'Stericated_6Simplex'; // Stericated_6Simplex
export const cPentellated_6Simplex = 'Pentellated_6Simplex'; // Pentellated_6Simplex
export const c6Demicube = '6Demicube'; // 6Demicube
export const cTruncated_6Demicube = 'Truncated_6Demicube'; // Truncated_6Demicube
export const cCantellated_6Demicube = 'Cantellated_6Demicube'; // Cantellated_6Demicube
export const cRuncinated_6Demicube = 'Runcinated_6Demicube'; // Runcinated_6Demicube
export const cStericated_6Demicube = 'Stericated_6Demicube'; // Stericated_6Demicube
export const cRectified_6Cube = 'Rectified_6Cube'; // Rectified_6Cube
export const cTruncated_6Cube = 'Truncated_6Cube'; // Truncated_6Cube
export const cCantellated_6Cube = 'Cantellated_6Cube'; // Cantellated_6Cube
export const cRuncinated_6Cube = 'Runcinated_6Cube'; // Runcinated_6Cube
export const cStericated_6Cube = 'Stericated_6Cube'; // Stericated_6Cube
export const cPentellated_6Cube = 'Pentellated_6Cube'; // Pentellated_6Cube
export const cRectified_6Orthoplex = 'Rectified_6Orthoplex'; // Rectified_6Orthoplex
export const cTruncated_6Orthoplex = 'Truncated_6Orthoplex'; // Truncated_6Orthoplex
export const cCantellated_6Orthoplex = 'Cantellated_6Orthoplex'; // Cantellated_6Orthoplex
export const cRuncinated_6Orthoplex = 'Runcinated_6Orthoplex'; // Runcinated_6Orthoplex
export const cStericated_6Orthoplex = 'Stericated_6Orthoplex'; // Stericated_6Orthoplex

// 6D Honeycomb
export const c6CubicHoneycomb = '6CubicHoneycomb'; // 6CubicHoneycomb
export const c6SimplexHoneycomb = '6SimplexHoneycomb'; // 6SimplexHoneycomb
export const c6DemicubicHoneycomb = '6DemicubicHoneycomb'; // 6DemicubicHoneycomb

// 7D Space, Uniform 7D Polytope
export const cRectified_7Simplex = 'Rectified_7Simplex'; // Rectified_7Simplex
export const cTruncated_7Simplex = 'Truncated_7Simplex'; // Truncated_7Simplex
export const cCantellated_7Simplex = 'Cantellated_7Simplex'; // Cantellated_7Simplex
export const cRuncinated_7Simplex = 'Runcinated_7Simplex'; // Runcinated_7Simplex
export const cStericated_7Simplex = 'Stericated_7Simplex'; // Stericated_7Simplex
export const cPentellated_7Simplex = 'Pentellated_7Simplex'; // Pentellated_7Simplex
export const cHexicated_7Simplex = 'Hexicated_7Simplex'; // Hexicated_7Simplex
export const c7Demicube = '7Demicube'; // 7Demicube
export const cTruncated_7Demicube = 'Truncated_7Demicube'; // Truncated_7Demicube
export const cCantellated_7Demicube = 'Cantellated_7Demicube'; // Cantellated_7Demicube
export const cRuncinated_7Demicube = 'Runcinated_7Demicube'; // Runcinated_7Demicube
export const cStericated_7Demicube = 'Stericated_7Demicube'; // Stericated_7Demicube
export const cPentellated_7Demicube = 'Pentellated_7Demicube'; // Pentellated_7Demicube
export const cRectified_7Cube = 'Rectified_7Cube'; // Rectified_7Cube
export const cTruncated_7Cube = 'Truncated_7Cube'; // Truncated_7Cube
export const cCantellated_7Cube = 'Cantellated_7Cube'; // Cantellated_7Cube
export const cRuncinated_7Cube = 'Runcinated_7Cube'; // Runcinated_7Cube
export const cStericated_7Cube = 'Stericated_7Cube'; // Stericated_7Cube
export const cPentellated_7Cube = 'Pentellated_7Cube'; // Pentellated_7Cube
export const cHexicated_7Cube = 'Hexicated_7Cube'; // Hexicated_7Cube
export const cRectified_7Orthoplex = 'Rectified_7Orthoplex'; // Rectified_7Orthoplex
export const cTruncated_7Orthoplex = 'Truncated_7Orthoplex'; // Truncated_7Orthoplex
export const cCantellated_7Orthoplex = 'Cantellated_7Orthoplex'; // Cantellated_7Orthoplex
export const cRuncinated_7Orthoplex = 'Runcinated_7Orthoplex'; // Runcinated_7Orthoplex
export const cStericated_7Orthoplex = 'Stericated_7Orthoplex'; // Stericated_7Orthoplex
export const cPentellated_7Orthoplex = 'Pentellated_7Orthoplex'; // Pentellated_7Orthoplex

// 7D Honeycombs
export const c7CubicHoneycomb = '7CubicHoneycomb'; // 7CubicHoneycomb
export const c7DemicubicHoneycomb = '7DemicubicHoneycomb'; // 7DemicubicHoneycomb

// 8D Space, Uniform 8D Polytope
export const cRectified_8Simplex = 'Rectified_8Simplex'; // Rectified_8Simplex
export const cTruncated_8Simplex = 'Truncated_8Simplex'; // Truncated_8Simplex
export const cCantellated_8Simplex = 'Cantellated_8Simplex'; // Cantellated_8Simplex
export const cRuncinated_8Simplex = 'Runcinated_8Simplex'; // Runcinated_8Simplex
export const cStericated_8Simplex = 'Stericated_8Simplex'; // Stericated_8Simplex
export const cPentellated_8Simplex = 'Pentellated_8Simplex'; // Pentellated_8Simplex
export const cHexicated_8Simplex = 'Hexicated_8Simplex'; // Hexicated_8Simplex
export const cHeptellated_8Simplex = 'Heptellated_8Simplex'; // Heptellated_8Simplex
export const cRectified_8Orthoplex = 'Rectified_8Orthoplex'; // Rectified_8Orthoplex
export const cTruncated_8Orthoplex = 'Truncated_8Orthoplex'; // Truncated_8Orthoplex
export const cCantellated_8Orthoplex = 'Cantellated_8Orthoplex'; // Cantellated_8Orthoplex
export const cRuncinated_8Orthoplex = 'Runcinated_8Orthoplex'; // Runcinated_8Orthoplex
export const cStericated_8Orthoplex = 'Stericated_8Orthoplex'; // Stericated_8Orthoplex
export const cPentellated_8Orthoplex = 'Pentellated_8Orthoplex'; // Pentellated_8Orthoplex
export const cHexicated_8Orthoplex = 'Hexicated_8Orthoplex'; // Hexicated_8Orthoplex
export const cRectified_8Cube = 'Rectified_8Cube'; // Rectified_8Cube
export const cTruncated_8Cube = 'Truncated_8Cube'; // Truncated_8Cube
export const cCantellated_8Cube = 'Cantellated_8Cube'; // Cantellated_8Cube
export const cRuncinated_8Cube = 'Runcinated_8Cube'; // Runcinated_8Cube
export const cStericated_8Cube = 'Stericated_8Cube'; // Stericated_8Cube
export const cPentellated_8Cube = 'Pentellated_8Cube'; // Pentellated_8Cube
export const cHexicated_8Cube = 'Hexicated_8Cube'; // Hexicated_8Cube
export const cHeptellated_8Cube = 'Heptellated_8Cube'; // Heptellated_8Cube
export const c8Demicube = '8Demicube'; // 8Demicube
export const cTruncated_8Demicube = 'Truncated_8Demicube'; // Truncated_8Demicube
export const cCantellated_8Demicube = 'Cantellated_8Demicube'; // Cantellated_8Demicube
export const cRuncinated_8Demicube = 'Runcinated_8Demicube'; // Runcinated_8Demicube
export const cStericated_8Demicube = 'Stericated_8Demicube'; // Stericated_8Demicube
export const cPentellated_8Demicube = 'Pentellated_8Demicube'; // Pentellated_8Demicube
export const cHexicated_8Demicube = 'Hexicated_8Demicube'; // Hexicated_8Demicube

// 8D Honeycombs
export const c8CubicHoneycomb = '8CubicHoneycomb'; // 8CubicHoneycomb
export const c8DemicubicHoneycomb = '8DemicubicHoneycomb'; // 8DemicubicHoneycomb

// 9D Polytope
export const c9Demicube = '9Demicube'; // 9Demicube

// 10D Polytope
export const c10Demicube = '10Demicube'; // 10Demicube

// Geometry and other areas of mathematics
export const cAnnulus = 'Annulus'; // Annulus
export const cApollonianCircles = 'ApollonianCircles'; // ApollonianCircles
export const cArbelos = 'Arbelos'; // Arbelos
export const cBorromeanRings = 'BorromeanRings'; // BorromeanRings
export const cCircularSector = 'CircularSector'; // CircularSector
export const cCircularSegment = 'CircularSegment'; // CircularSegment
export const cDeferent = 'Deferent'; // Deferent
export const cEpicycle = 'Epicycle'; // Epicycle
export const cExTangentialQuadrilateral = 'ExTangentialQuadrilateral'; // ExTangentialQuadrilateral
export const cHorocycle = 'Horocycle'; // Horocycle
export const cHypotrochoid = 'Hypotrochoid'; // Hypotrochoid
export const cLune = 'Lune'; // Lune
export const cPappusChain = 'PappusChain'; // PappusChain
export const cPeaucellierLipkinLinkage = 'PeaucellierLipkinLinkage'; // PeaucellierLipkinLinkage
export const cRobbinsPentagon = 'RobbinsPentagon'; // RobbinsPentagon
export const cSalinon = 'Salinon'; // Salinon
export const cSemicircle = 'Semicircle'; // Semicircle
export const cSquircle = 'Squircle'; // Squircle
export const cSteinerChain = 'SteinerChain'; // SteinerChain
export const cBicentricQuadrilateral = 'BicentricQuadrilateral'; // BicentricQuadrilateral

// Glyphs and Symbols
export const cCrescent = 'Crescent'; // Crescent
export const cVesicaPiscis = 'VesicaPiscis'; // VesicaPiscis
export const cArc = 'Arc'; // Arc
export const cCubicHermiteCurve = 'CubicHermiteCurve'; // CubicHermiteCurve
export const cCurveOfConstantWidth = 'CurveOfConstantWidth'; // CurveOfConstantWidth
export const cHedgehog = 'Hedgehog'; // Hedgehog
export const cParametricCurve = 'ParametricCurve'; // ParametricCurve
export const cSpline = 'Spline'; // Spline
export const cHermiteSpline = 'HermiteSpline'; // HermiteSpline
export const cBetaSpline = 'BetaSpline'; // BetaSpline
export const cHigherOrderSpline = 'HigherOrderSpline'; // HigherOrderSpline
export const cRay = 'Ray'; // Ray
export const cRibaucourCurve = 'RibaucourCurve'; // RibaucourCurve

// Knots
export const cAdjustableGripHitch = 'AdjustableGripHitch'; // AdjustableGripHitch
export const cAdjustableSling = 'AdjustableSling'; // AdjustableSling
export const cAlbrightKnot = 'AlbrightKnot'; // AlbrightKnot
export const cAlpineButterflyBend = 'AlpineButterflyBend'; // AlpineButterflyBend
export const cAplineButterflyLoop = 'AplineButterflyLoop'; // AplineButterflyLoop
export const cAnchorHitch = 'AnchorHitch'; // AnchorHitch
export const cArborKnot = 'ArborKnot'; // ArborKnot
export const cAshleyBend = 'AshleyBend'; // AshleyBend
export const cAshleyStopper = 'AshleyStopper'; // AshleyStopper
export const cAustralianBraidKnot = 'AustralianBraidKnot'; // AustralianBraidKnot
export const cBackSplice = 'BackSplice'; // BackSplice
export const cBarrelHitch = 'BarrelHitch'; // BarrelHitch
export const cBasketHitch = 'BasketHitch'; // BasketHitch
export const cBeerKnot = 'BeerKnot'; // BeerKnot
export const cBiminiTwistKnot = 'BiminiTwistKnot'; // BiminiTwistKnot
export const cBlakesHitch = 'BlakesHitch'; // BlakesHitch
export const cBloodKnot = 'BloodKnot'; // BloodKnot
export const cBoomHitch = 'BoomHitch'; // BoomHitch
export const cBottleSling = 'BottleSling'; // BottleSling
export const cBowTie = 'BowTie'; // BowTie
export const cBowlineKnot = 'BowlineKnot'; // BowlineKnot
export const cBowlineOnABight = 'BowlineOnABight'; // BowlineOnABight
export const cBrummelSplice = 'BrummelSplice'; // BrummelSplice
export const cBrummelSpliceDemo = 'BrummelSpliceDemo'; // BrummelSpliceDemo
export const cBuntlineHitch = 'BuntlineHitch'; // BuntlineHitch
export const cButchersKnot = 'ButchersKnot'; // ButchersKnot
export const cCarrickBend = 'CarrickBend'; // CarrickBend
export const cCarrickBendMat = 'CarrickBendMat'; // CarrickBendMat
export const cCelticKnot = 'CelticKnot'; // CelticKnot
export const cChainSinnet = 'ChainSinnet'; // ChainSinnet
export const cChainSplice = 'ChainSplice'; // ChainSplice
export const cCleatHitch = 'CleatHitch'; // CleatHitch
export const cDockLine = 'DockLine'; // DockLine
export const cHalyard = 'Halyard'; // Halyard
export const cCloveHitch = 'CloveHitch'; // CloveHitch
export const cHitches = 'Hitches'; // Hitches
export const cLoops = 'Loops'; // Loops
export const cRopeEnd = 'RopeEnd'; // RopeEnd
export const cCobraKnot = 'CobraKnot'; // CobraKnot
export const cCoilAttachedRope = 'CoilAttachedRope'; // CoilAttachedRope
export const cCoilUnattachedRope = 'CoilUnattachedRope'; // CoilUnattachedRope
export const cCommonWipping = 'CommonWipping'; // CommonWipping
export const cConstrictor = 'Constrictor'; // Constrictor
export const cConstrictorSlide = 'ConstrictorSlide'; // ConstrictorSlide
export const cSlide = 'Slide'; // Slide
export const cConstrictorHoward = 'ConstrictorHoward'; // ConstrictorHoward
export const cHoward = 'Howard'; // Howard
export const cConstrictorEnd = 'ConstrictorEnd'; // ConstrictorEnd
export const cEnd = 'End'; // End
export const cConstrictorFolding = 'ConstrictorFolding'; // ConstrictorFolding
export const cFolding = 'Folding'; // Folding
export const cConstrictorRopeEnd = 'ConstrictorRopeEnd'; // ConstrictorRopeEnd
export const cConstrictorTwist = 'ConstrictorTwist'; // ConstrictorTwist
export const cTwist = 'Twist'; // Twist
export const cCowHitch = 'CowHitch'; // CowHitch
export const cCowHitchEnds = 'CowHitchEnds'; // CowHitchEnds
export const cChowHitchLoops = 'ChowHitchLoops'; // ChowHitchLoops
export const cCrownKnot = 'CrownKnot'; // CrownKnot
export const cCrownSinnet = 'CrownSinnet'; // CrownSinnet
export const cCurtainTieBack = 'CurtainTieBack'; // CurtainTieBack
export const cDavyKnot = 'DavyKnot'; // DavyKnot
export const cDistelHitch = 'DistelHitch'; // DistelHitch
export const cDoubleAlpineButterfly = 'DoubleAlpineButterfly'; // DoubleAlpineButterfly
export const cDoubleDavyKnot = 'DoubleDavyKnot'; // DoubleDavyKnot
export const cDoubleDragonLoop = 'DoubleDragonLoop'; // DoubleDragonLoop
export const cDoubleFishermans = 'DoubleFishermans'; // DoubleFishermans
export const cDoubleMatthewWalker = 'DoubleMatthewWalker'; // DoubleMatthewWalker
export const cDoubleOverhandStopper = 'DoubleOverhandStopper'; // DoubleOverhandStopper
export const cDoubleTurtleKnot = 'DoubleTurtleKnot'; // DoubleTurtleKnot
export const cDropperLoopKnot = 'DropperLoopKnot'; // DropperLoopKnot
export const cEggLoopKnot = 'EggLoopKnot'; // EggLoopKnot
export const cEstarStopperKnot = 'EstarStopperKnot'; // EstarStopperKnot
export const cEyeSplice = 'EyeSplice'; // EyeSplice
export const cFarmersLoopKnot = 'FarmersLoopKnot'; // FarmersLoopKnot
export const cFarrimondHitch = 'FarrimondHitch'; // FarrimondHitch
export const cFgKnot = 'FgKnot'; // FgKnot
export const cFiadorKnot = 'FiadorKnot'; // FiadorKnot
export const cFigure8Bend = 'Figure8Bend'; // Figure8Bend
export const cFigure8DirectionLoop = 'Figure8DirectionLoop'; // Figure8DirectionLoop
export const cFigure8DoubleLoop = 'Figure8DoubleLoop'; // Figure8DoubleLoop
export const cFigure8Flake = 'Figure8Flake'; // Figure8Flake
export const cFigure8FollowLoop = 'Figure8FollowLoop'; // Figure8FollowLoop
export const cFigure8Loop = 'Figure8Loop'; // Figure8Loop
export const cFigure9Loop = 'Figure9Loop'; // Figure9Loop
export const cFlatOverhandBend = 'FlatOverhandBend'; // FlatOverhandBend
export const cFlemishFlakeCoil = 'FlemishFlakeCoil'; // FlemishFlakeCoil
export const c4StrandSinnet = '4StrandSinnet'; // 4StrandSinnet
export const c4StrandSquareSinnet = '4StrandSquareSinnet'; // 4StrandSquareSinnet
export const cFourInHandNeckTie = 'FourInHandNeckTie'; // FourInHandNeckTie
export const cFrenchSinnetOne = 'FrenchSinnetOne'; // FrenchSinnetOne
export const cFrenchSinnetTwo = 'FrenchSinnetTwo'; // FrenchSinnetTwo
export const cGirthHitch = 'GirthHitch'; // GirthHitch
export const cGnatHitch = 'GnatHitch'; // GnatHitch
export const cGrogSlidingSplice = 'GrogSlidingSplice'; // GrogSlidingSplice
export const cGrogSling = 'GrogSling'; // GrogSling
export const cHalfHitch = 'HalfHitch'; // HalfHitch
export const cHalfKnot = 'HalfKnot'; // HalfKnot
export const cHalfWindsorNecktie = 'HalfWindsorNecktie'; // HalfWindsorNecktie
export const cHalterHitch = 'HalterHitch'; // HalterHitch
export const cHalyardHitch = 'HalyardHitch'; // HalyardHitch
export const cHandcuffKnot = 'HandcuffKnot'; // HandcuffKnot
export const cHastyHarness = 'HastyHarness'; // HastyHarness
export const cHeavingLineKnot = 'HeavingLineKnot'; // HeavingLineKnot
export const cHighwaymansHitch = 'HighwaymansHitch'; // HighwaymansHitch
export const cHondaKnot = 'HondaKnot'; // HondaKnot
export const cHuntersBend = 'HuntersBend'; // HuntersBend
export const cIcicleHitchEnd = 'IcicleHitchEnd'; // IcicleHitchEnd
export const cIcicleHitchLoop = 'IcicleHitchLoop'; // IcicleHitchLoop
export const cImproveClinchKnot = 'ImproveClinchKnot'; // ImproveClinchKnot
export const cKlemheistKnot = 'KlemheistKnot'; // KlemheistKnot
export const cLanyardKnot = 'LanyardKnot'; // LanyardKnot
export const cLashingDiagonal = 'LashingDiagonal'; // LashingDiagonal
export const cLashingRound = 'LashingRound'; // LashingRound
export const cLashingSheer = 'LashingSheer'; // LashingSheer
export const cLashingSquare = 'LashingSquare'; // LashingSquare
export const cLashingTripod = 'LashingTripod'; // LashingTripod
export const cLigatureInstrument = 'LigatureInstrument'; // LigatureInstrument
export const cLigatureOneHand = 'LigatureOneHand'; // LigatureOneHand
export const cLigatureTwoHands = 'LigatureTwoHands'; // LigatureTwoHands
export const cLightermansHitch = 'LightermansHitch'; // LightermansHitch
export const cLongBurySplice = 'LongBurySplice'; // LongBurySplice
export const cManagerHitch = 'ManagerHitch'; // ManagerHitch
export const cMarlinSpikeHitch = 'MarlinSpikeHitch'; // MarlinSpikeHitch
export const cMastheadKnotMat = 'MastheadKnotMat'; // MastheadKnotMat
export const cMcdonaldBrummel = 'McdonaldBrummel'; // McdonaldBrummel
export const cMidshipmansHitch = 'MidshipmansHitch'; // MidshipmansHitch
export const cMillersKnot = 'MillersKnot'; // MillersKnot
export const cMonkeysFistKnot = 'MonkeysFistKnot'; // MonkeysFistKnot
export const cMooringsHitch = 'MooringsHitch'; // MooringsHitch
export const cMunterMuleCombo = 'MunterMuleCombo'; // MunterMuleCombo
export const cNailKnot = 'NailKnot'; // NailKnot
export const cNonSlipMonoKnot = 'NonSlipMonoKnot'; // NonSlipMonoKnot
export const cNooseKnot = 'NooseKnot'; // NooseKnot
export const cOceanPlaitMat = 'OceanPlaitMat'; // OceanPlaitMat
export const cOneHandedBowline = 'OneHandedBowline'; // OneHandedBowline
export const cOrvisKnot = 'OrvisKnot'; // OrvisKnot
export const cOverhandKnot = 'OverhandKnot'; // OverhandKnot
export const cPackageTyingKnot = 'PackageTyingKnot'; // PackageTyingKnot
export const cPalomarKnot = 'PalomarKnot'; // PalomarKnot
export const cPerfectionLoop = 'PerfectionLoop'; // PerfectionLoop
export const cPileHitch = 'PileHitch'; // PileHitch
export const cPoachersKnot = 'PoachersKnot'; // PoachersKnot
export const cPrattNecktie = 'PrattNecktie'; // PrattNecktie
export const cPrusikKnot = 'PrusikKnot'; // PrusikKnot
export const cPurcellPrusikKnot = 'PurcellPrusikKnot'; // PurcellPrusikKnot
export const cQuickHitch = 'QuickHitch'; // QuickHitch
export const cRadiumReleaseHitch = 'RadiumReleaseHitch'; // RadiumReleaseHitch
export const cRapalaKnot = 'RapalaKnot'; // RapalaKnot
export const cRatTailStopperKnot = 'RatTailStopperKnot'; // RatTailStopperKnot
export const cRingHitch = 'RingHitch'; // RingHitch
export const cRollingHitch = 'RollingHitch'; // RollingHitch
export const cRoundTurnHitches = 'RoundTurnHitches'; // RoundTurnHitches
export const cRunningBowline = 'RunningBowline'; // RunningBowline
export const cSailmakersWhipping = 'SailmakersWhipping'; // SailmakersWhipping
export const cSanDiegoJamKnot = 'SanDiegoJamKnot'; // SanDiegoJamKnot
export const cSheepShank = 'SheepShank'; // SheepShank
export const cSheetBend = 'SheetBend'; // SheetBend
export const cShoelaceBow = 'ShoelaceBow'; // ShoelaceBow
export const cShoelaceBowFieggen = 'ShoelaceBowFieggen'; // ShoelaceBowFieggen
export const cShoelaceBowSurgeon = 'ShoelaceBowSurgeon'; // ShoelaceBowSurgeon
export const cShortSplice = 'ShortSplice'; // ShortSplice
export const cSiberianHitch = 'SiberianHitch'; // SiberianHitch
export const cSingleRopeBraid = 'SingleRopeBraid'; // SingleRopeBraid
export const cSlidingDoubleFishermans = 'SlidingDoubleFishermans'; // SlidingDoubleFishermans
export const cSlimBeautyKnot = 'SlimBeautyKnot'; // SlimBeautyKnot
export const cSlipKnot = 'SlipKnot'; // SlipKnot
export const cSnellKnot = 'SnellKnot'; // SnellKnot
export const cSoftShackle = 'SoftShackle'; // SoftShackle
export const cSoftShackleEdwards = 'SoftShackleEdwards'; // SoftShackleEdwards
export const cSoftShackleStronger = 'SoftShackleStronger'; // SoftShackleStronger
export const cSpanishBowline = 'SpanishBowline'; // SpanishBowline
export const cSquareKnot = 'SquareKnot'; // SquareKnot
export const cStevedoreStopper = 'StevedoreStopper'; // StevedoreStopper
export const cStopperLoop = 'StopperLoop'; // StopperLoop
export const cStrangleKnotEnd = 'StrangleKnotEnd'; // StrangleKnotEnd
export const cStrangleKnotOverhand = 'StrangleKnotOverhand'; // StrangleKnotOverhand
export const cSuperMunterHitch = 'SuperMunterHitch'; // SuperMunterHitch
export const cSurgeonsJoinKnot = 'SurgeonsJoinKnot'; // SurgeonsJoinKnot
export const cSurgeonsLoopKnot = 'SurgeonsLoopKnot'; // SurgeonsLoopKnot
export const cSurgicalSlipTie = 'SurgicalSlipTie'; // SurgicalSlipTie
export const cSurgicalTieInsturmental = 'SurgicalTieInsturmental'; // SurgicalTieInsturmental
export const cSurgicalTieOneHand = 'SurgicalTieOneHand'; // SurgicalTieOneHand
export const cSurgicalTieTwoHands = 'SurgicalTieTwoHands'; // SurgicalTieTwoHands
export const cTensionlessHitch = 'TensionlessHitch'; // TensionlessHitch
export const c3StrandBraid = '3StrandBraid'; // 3StrandBraid
export const c3StrandBraidAlternate = '3StrandBraidAlternate'; // 3StrandBraidAlternate
export const cTimberHitch = 'TimberHitch'; // TimberHitch
export const cTreeSwing = 'TreeSwing'; // TreeSwing
export const cTrileneKnot = 'TrileneKnot'; // TrileneKnot
export const cTruckersHitch = 'TruckersHitch'; // TruckersHitch
export const cTruckersHitchQuick = 'TruckersHitchQuick'; // TruckersHitchQuick
export const cTumbleHitch = 'TumbleHitch'; // TumbleHitch
export const cTurksHead = 'TurksHead'; // TurksHead
export const cTwoHalfHitches = 'TwoHalfHitches'; // TwoHalfHitches
export const cUnderwritersKnot = 'UnderwritersKnot'; // UnderwritersKnot
export const cUniKNot = 'UniKNot'; // UniKNot
export const cWallCrownKnot = 'WallCrownKnot'; // WallCrownKnot
export const cWallKnot = 'WallKnot'; // WallKnot
export const cWaterBowline = 'WaterBowline'; // WaterBowline
export const cWaterKnot = 'WaterKnot'; // WaterKnot
export const cWestCountryWipping = 'WestCountryWipping'; // WestCountryWipping
export const cWhoopieSling = 'WhoopieSling'; // WhoopieSling
export const cWindsorNecktie = 'WindsorNecktie'; // WindsorNecktie
export const cZeppelinBend = 'ZeppelinBend'; // ZeppelinBend
