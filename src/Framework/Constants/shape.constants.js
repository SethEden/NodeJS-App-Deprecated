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
export const cline = b.cli + b.cne;
export const cLine = b.cLi + b.cne;
export const ccircle = p.ccir + p.ccle;
export const cCircle = p.cCir + p.ccle;
export const coval = b.cov + b.cal;
export const cOval = b.cOv + b.cal;
export const csquare = b.cs + p.cquare;
export const cSquare = b.cS + p.cquare;
export const ctriangle = p.ctri + w.cangle;
export const cTriangle = p.cTri + w.cangle;
export const crectangle = p.crect + w.cangle;
export const cRectangle = p.cRect + w.cangle;
export const coctagon = p.coct + b.ca + p.cgon;
export const cOctagon = p.cOct + b.ca + p.cgon;
export const chexagon = p.chex + b.ca + p.cgon;
export const cHexagon = p.cHex + b.ca + p.cgon;
export const cheptagon = p.chep + b.ca + p.cgon;
export const cHeptagon = p.cHep + b.ca + p.cgon;
export const cnonagon = p.cnon + b.ca + p.cgon;
export const cNonagon = p.cNon + b.ca + p.cgon;
export const ctrapezoid = w.ctrap + b.ce + p.czoid;
export const cTrapezoid = w.cTrap + b.ce + p.czoid;
export const ccube = b.ccu + b.cbe;
export const cCube = b.cCu + b.cbe;
// This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes

// Miscellaneous
export const ccubic = b.cc + p.cubic;
export const cCubic = b.cC + p.cubic;
export const cplane = b.cp + w.clane;
export const cPlane = b.cP + w.clane;
export const ccurve = b.cc + p.curve;
export const cCurve = b.cC + p.curve;
export const cquartic = p.cqua + p.crtic;
export const cQuartic = p.cQua + p.crtic;
export const cconic = p.ccon + b.cic;
export const cConic = p.cCon + b.cic;

// Algebraic Curves
export const ccubicPlaneCurve = ccubic + cPlane + cCurve;
export const cCubicPlaneCurve = cCubic + cPlane + cCurve;
export const cquarticPlaneCurve = cquartic + cPlane + cCurve;
export const cQuarticPlaneCurve = cQuartic + cPlane + cCurve;

// 2nd Degree Curves
export const cconicSection = cconic + w.cSection;
export const cConicSection = cConic + w.cSection;
export const cunitCircle = w.cunit + cCircle;
export const cUnitCircle = w.cUnit + cCircle;
export const cunitHyperbola = w.cunit + p.cHyper + p.cbola;
export const cUnitHyperbola = w.cUnit + p.cHyper + p.cbola;

// 3rd Degree Curves
export const cFoliumOfDescartes = 'FoliumOfDescartes';
export const cCissoidOfDiocles = 'CissoidOfDiocles';
export const cConchoidOfDeSluze = 'ConchoidOfDeSluze';
export const cRightStrophoid = 'RightStrophoid';
export const cSemicubicalParabola = 'SemicubicalParabola';
export const cSerpentineCurve = 'SerpentineCurve';
export const cTridentCurve = 'TridentCurve';
export const cTrisectrixOfMaclaurin = 'TrisectrixOfMaclaurin';
export const cTschirnhausenCubic = 'TschirnhausenCubic';
export const cWitchOfAgnesi = 'WitchOfAgnesi';

// 4th Degree Curves
export const cAmpersandCurve = 'AmpersandCurve';
export const cBeanCurve = 'BeanCurve';
export const cBicorn = 'Bicorn';
export const cBowCurve = 'BowCurve';
export const cBulletNoseCurve = 'BulletNoseCurve';
export const cCruciformCurve = 'CruciformCurve';
export const cDeltoidCurve = 'DeltoidCurve';
export const cDevilsCurve = 'DevilsCurve';
export const cHippopede = 'Hippopede';
export const cKampyleOfEudoxus = 'KampyleOfEudoxus';
export const cKappaCurve = 'KappaCurve';
export const cLemniscateOfBooth = 'LemniscateOfBooth';
export const cLemniscateOfGerono = 'LemniscateOfGerono';
export const cLemniscateOfBernoulli = 'LemniscateOfBernoulli';
export const cLimaçon = 'Limaçon';
export const cCardioid = 'Cardioid';
export const cLimaçonTrisectrix = 'LimaçonTrisectrix';
export const cTrifoliumCurve = 'TrifoliumCurve';

// 5th Degree Curves
export const cQuinticOfLHospital = 'QuinticOfLHospital';

// 6th Degree Curves
export const cAstroid = 'Astroid';
export const cAtriphtaloid = 'Atriphtaloid';
export const cNephroid = 'Nephroid';
export const cQuadrifolium = 'Quadrifolium';

// Families of Variable Degree
export const cEpicycloid = 'Epicycloid';
export const cEpispiral = 'Epispiral';
export const cEpitrochoid = 'Epitrochoid';
export const cHypocycloid = 'Hypocycloid';
export const cLissajousCurve = 'LissajousCurve';
export const cPoinsotsSpirals = 'PoinsotsSpirals';
export const cRationalNormalCurve = 'RationalNormalCurve';
export const cRoseCurve = 'RoseCurve';

// Curves of Genus One
export const cBicuspidCurve = 'BicuspidCurve';
export const cCassiniOval = 'CassiniOval';
export const cCassinoide = 'Cassinoide';
export const cCubicCurve = 'CubicCurve';
export const cEllipticCurve = 'EllipticCurve';
export const cWattsCurve = 'WattsCurve';

// Curves with Genus Greater than One
export const cButterflyCurve = 'ButterflyCurve';
export const cElkiesTrinomialCurves = 'ElkiesTrinomialCurves';
export const cHyperellipticCurve = 'HyperellipticCurve';
export const cKleinQuartic = 'KleinQuartic';
export const cClassicalModularCurve = 'ClassicalModularCurve';
export const cBolzaSurface = 'BolzaSurface';
export const cMacbeathSurface = 'MacbeathSurface';

// Curve Families with Variable Genus
export const cPolynomialLemniscate = 'PolynomialLemniscate';
export const cFermatCurve = 'FermatCurve';
export const cSinusoidalSpiral = 'SinusoidalSpiral';
export const cSuperellipse = 'Superellipse';
export const cHurwitzSurface = 'HurwitzSurface';

// Transcendental Curves
export const cBowditchCurve = 'BowditchCurve';
export const cBrachistochrone = 'Brachistochrone';
export const cCatenary = 'Catenary';
export const cClelies = 'Clelies';
export const cCochleoid = 'Cochleoid';
export const cCycloid = 'Cycloid';
export const cHoropter = 'Horopter';
export const cIsochrone = 'Isochrone';
export const cTautochrone = 'Tautochrone';
export const cIsochroneOfLeibniz = 'IsochroneOfLeibniz';
export const cIsochroneOfVarignon = 'IsochroneOfVarignon';
export const cLameCurve = 'LameCurve';
export const cPursuitCurve = 'PursuitCurve';
export const cRhumbLine = 'RhumbLine';
export const cSpirals = 'Spirals';
export const cArchimedeanSpiral = 'ArchimedeanSpiral';
export const cCornuSpiral = 'CornuSpiral';
export const cCotesSpiral = 'CotesSpiral';
export const cFermatsSpiral = 'FermatsSpiral';
export const cGalileosSpiral = 'GalileosSpiral';
export const cHyperbolicSpiral = 'HyperbolicSpiral';
export const cLituus = 'Lituus';
export const cLogarithmicSpiral = 'LogarithmicSpiral';
export const cNielsensSpiral = 'NielsensSpiral';
export const cSyntractrix = 'Syntractrix';
export const cTractrix = 'Tractrix';
export const cTrochoid = 'Trochoid';

// Piecewise Constructions Curves
export const cBezierCurve = 'BezierCurve';
export const cSplines = 'Splines';
export const cBSpline = 'BSpline';
export const cNonuniformRationalBSpline = 'NonuniformRationalBSpline';
export const cNURBS = 'NURBS';
export const cOgee = 'Ogee';
export const cLoessCurve = 'LoessCurve';
export const cLowess = 'Lowess';
export const cPolygonalCurve = 'PolygonalCurve';
export const cMaurerRose = 'MaurerRose';
export const cReuleauxTriangle = 'ReuleauxTriangle';
export const cBezierTriangle = 'BezierTriangle';

// Curves Generated by Other Curves
export const cCaustic = 'Caustic';
export const cCatacaustic = 'Catacaustic';
export const cDiacaustic = 'Diacaustic';
export const cCissoid = 'Cissoid';
export const cConchoid = 'Conchoid';
export const cEvolute = 'Evolute';
export const cGlissette = 'Glissette';
export const cInverseCurve = 'InverseCurve';
export const cInvolute = 'Involute';
export const cIsoptic = 'Isoptic';
export const cOrthoptic = 'Orthoptic';
export const cOrthotomic = 'Orthotomic';
export const cNegativePedalCurve = 'NegativePedalCurve';
export const cPedalCurve = 'PedalCurve';
export const cParallelCurve = 'ParallelCurve';
export const cRadialCurve = 'RadialCurve';
export const cRoulette = 'Roulette';
export const cStrophoid = 'Strophoid';

// Space Curves
export const cConchospiral = 'Conchospiral';
export const cHelix = 'Helix';
export const cTendrilPerversion = 'TendrilPerversion';
export const cHemihelix = 'Hemihelix';
export const cSeiffertsSpiral = 'SeiffertsSpiral';
export const cSlinkySpiral = 'SlinkySpiral';
export const cTwistedCubic = 'TwistedCubic';
export const cVivianisCurve = 'VivianisCurve';

// Surfaces in 3D Space
export const cQuadricSurfaces = 'QuadricSurfaces';
export const cCone = 'Cone';
export const cCylinder = 'Cylinder';
export const cEllipsoid = 'Ellipsoid';
export const cSpheroid = 'Spheroid';
export const cSphere = 'Sphere';
export const cHyperboloid = 'Hyperboloid';
export const cParaboloid = 'Paraboloid';
export const cMobiusStrip = 'MobiusStrip';
export const cTorus = 'Torus';

// Minimal Surfaces
export const cCatalansMinimalSurface = 'CatalansMinimalSurface';
export const cCostasMinimalSurface = 'CostasMinimalSurface';
export const cCatenoid = 'Catenoid';
export const cEnneperSurface = 'EnneperSurface';
export const cGyroid = 'Gyroid';
export const cHelicoid = 'Helicoid';
export const cLidinoid = 'Lidinoid';
export const cRiemannsMinimalSurface = 'RiemannsMinimalSurface';
export const cSaddleTower = 'SaddleTower';
export const cScherkSurface = 'ScherkSurface';
export const cSchwarzMinimalSurface = 'SchwarzMinimalSurface';
export const cTriplyPeriodicMinimalSurface = 'TriplyPeriodicMinimalSurface';

// Non-Orientable Surfaces
export const cKleinBottle = 'KleinBottle';
export const cRealProjectivePlane = 'RealProjectivePlane';
export const cCrossCap = 'CrossCap';
export const cRomanSurface = 'RomanSurface';
export const cBoysSurface = 'BoysSurface';

// Quadrics
export const cOblateSpheroid = 'OblateSpheroid';
export const cHyperboloidOfOneSheet = 'HyperboloidOfOneSheet';
export const cHyperboloidOfTwoSheets = 'HyperboloidOfTwoSheets';
export const cHyperbolicParaboloid = 'HyperbolicParaboloid';
export const cSphericon = 'Sphericon';
export const cOloid = 'Oloid';

// Pseudospherical Surfaces
export const cDinisSurface = 'DinisSurface';
export const cPseudosphere = 'Pseudosphere';

// Algebraic Surfaces
export const cCayleyCubic = 'CayleyCubic';
export const cBarthSextic = 'BarthSextic';
export const cClebschCubic = 'ClebschCubic';
export const cMonkeySaddle = 'MonkeySaddle';
export const cDupinCyclide = 'DupinCyclide';
export const cWhitneyUmbrella = 'WhitneyUmbrella';

// Miscellaneous Surfaces
export const cRightConoid = 'RightConoid';

// Fractals
export const cApollonianGasket = 'ApollonianGasket';
export const cApollonianSpherePacking = 'ApollonianSpherePacking';
export const cBlancmangeCurve = 'BlancmangeCurve';
export const cCantorDust = 'CantorDust';
export const cCantorSet = 'CantorSet';
export const cCantorTesseract = 'CantorTesseract';
export const cCircleInversionFractal = 'CircleInversionFractal';
export const cDeRhamCurve = 'DeRhamCurve';
export const cDouadyRabbit = 'DouadyRabbit';
export const cDragonCurve = 'DragonCurve';
export const cFibonacciWordFractal = 'FibonacciWordFractal';
export const cFlameFractal = 'FlameFractal';
export const cFractalCurve = 'FractalCurve';
export const cGosperCurve = 'GosperCurve';
export const cGosperIsland = 'GosperIsland';
export const cHFractal = 'HFractal';
export const cHenonMap = 'HenonMap';
export const cHexaflake = 'Hexaflake';
export const cHilbertCurve = 'HilbertCurve';
export const cIkedaMapAttractor = 'IkedaMapAttractor';
export const cIteratedFunctionSystem = 'IteratedFunctionSystem';
export const cJerusalemCube = 'JerusalemCube';
export const cJuliaSet = 'JuliaSet';
export const cKochCurve = 'KochCurve';
export const cKochSnowflake = 'KochSnowflake';
export const cLSystem = 'LSystem';
export const cLevyCCurve = 'LevyCCurve';
export const cFeigenbaumAttractor = 'FeigenbaumAttractor';
export const cLorenzAttractor = 'LorenzAttractor';
export const cLyapunovFractal = 'LyapunovFractal';
export const cMandelbrotSet = 'MandelbrotSet';
export const cMandelbrotTree = 'MandelbrotTree';
export const cMandelbulb = 'Mandelbulb';
export const cMengerSponge = 'MengerSponge';
export const cMonkeysTree = 'MonkeysTree';
export const cMooreCurve = 'MooreCurve';
export const cNFlake = 'NFlake';
export const cPascalTriangle = 'PascalTriangle';
export const cPeanoCurve = 'PeanoCurve';
export const cPenroseTiling = 'PenroseTiling';
export const cPinwheelTiling = 'PinwheelTiling';
export const cPythagorasTree = 'PythagorasTree';
export const cRauzyFractal = 'RauzyFractal';
export const cRosslerAttractor = 'RosslerAttractor';
export const cSierpinskiArrowheadCurve = 'SierpinskiArrowheadCurve';
export const cSierpinskiCarpet = 'SierpinskiCarpet';
export const cSierpinskiCurve = 'SierpinskiCurve';
export const cSierpinskiTriangle = 'SierpinskiTriangle';
export const cSmithVolterraCantorSet = 'SmithVolterraCantorSet';
export const cTSquare = 'TSquare';
export const cTakagiCurve = 'TakagiCurve';
export const cTriflake = 'Triflake';
export const cVicsekFractal = 'VicsekFractal';
export const cVonKochCurve = 'VonKochCurve';
export const cWeierstrassFunction = 'WeierstrassFunction';
export const cZOrderCurve = 'ZOrderCurve';

// Random Fractals
export const cVonKochCurveWithRandomInterval = 'VonKochCurveWithRandomInterval';
export const cVonKochCurveWithRandomOrientation = 'VonKochCurveWithRandomOrientation';
export const cBoundaryOfBrownianMotion = 'BoundaryOfBrownianMotion';
export const c2DPolymer = '2DPolymer';
export const cPercolationFrontIn2D = 'PercolationFrontIn2D';
export const cCorrosionFrontIn2D = 'CorrosionFrontIn2D';
export const cDiffusionLimitedAggregation = 'DiffusionLimitedAggregation';
export const cRandomWalkWithNoSelfIntersection = 'RandomWalkWithNoSelfIntersection';
export const c3DPolymer = '3DPolymer';
export const c2DPercolationClusterHull = '2DPercolationClusterHull';
export const c2DPercolationCluster = '2DPercolationCluster';
export const cBrownianMotion = 'BrownianMotion';
export const cLichtenbergFigure = 'LichtenbergFigure';
export const cPercolationTheory = 'PercolationTheory';
export const cMultiplicativeCascade = 'MultiplicativeCascade';

// 2D Regular Polytopes
export const cPolygon = 'Polygon';
export const cEquilateral = 'Equilateral';
export const cCyclicPolygon = 'CyclicPolygon';
export const cConvexPolygon = 'ConvexPolygon';
export const cStarPolygon = 'StarPolygon';
export const cPentagram = 'Pentagram';

// 2D Convex Polytopes
export const cRegularPolygon = 'RegularPolygon';
export const cEquilateralTriangle = 'EquilateralTriangle';
export const cSimplex = 'Simplex';
export const cCrossPolytope = 'CrossPolytope';
export const cHypercube = 'Hypercube';
export const cPentagon = 'Pentagon';
export const cEnneagon = 'Enneagon';
export const cDecagon = 'Decagon';
export const cHendecagon = 'Hendecagon';
export const cDodecagon = 'Dodecagon';
export const cTridecagon = 'Tridecagon';
export const cTetradecagon = 'Tetradecagon';
export const cPentadecagon = 'Pentadecagon';
export const cHexadecagon = 'Hexadecagon';
export const cHeptadecagon = 'Heptadecagon';
export const cOctadecagon = 'Octadecagon';
export const cEnneadecagon = 'Enneadecagon';
export const cIcosagon = 'Icosagon';
export const cHectogon = 'Hectogon';
export const cChiliagon = 'Chiliagon';

// 2D Degenerate Spherical Polytopes
export const cMonogon = 'Monogon';
export const cDigon = 'Digon';

// 2D Non-Convex Polytopes
export const cHeptagram = 'Heptagram';
export const cOctagram = 'Octagram';
export const cEnneagram = 'Enneagram';
export const cDecagram = 'Decagram';

// 2D Tessellation Polytopes
export const cApeirogon = 'Apeirogon';

// 3D Regular Polytopes
export const cPolyhedron = 'Polyhedron';

// 3D Convex Polytopes
export const cPlatonicSolid = 'PlatonicSolid';
export const cTetrahedron = 'Tetrahedron';
export const cOctahedron = 'Octahedron';
export const cDodecahedron = 'Dodecahedron';
export const cIcosahedron = 'Icosahedron';

// 3D Degenerate Spherical Polytopes
export const cHosohedron = 'Hosohedron';
export const cDihedron = 'Dihedron';
export const cHenagon = 'Henagon';

// 3D Non-Convex Polytopes
export const cKeplerPoinsotPolyhedra = 'KeplerPoinsotPolyhedra';
export const cSmallStellatedDodecahedron = 'SmallStellatedDodecahedron';
export const cGreatDodecahedron = 'GreatDodecahedron';
export const cGreatStellatedDodecahedron = 'GreatStellatedDodecahedron';
export const cGreatIcosahedron = 'GreatIcosahedron';

// Euclidean Tilings
export const cSquareTiling = 'SquareTiling';
export const cGrid = 'Grid';
export const cTriangularTiling = 'TriangularTiling';
export const cHexagonalTiling = 'HexagonalTiling';

// Hyperbolic Tilings
export const cLobachevskiPlane = 'LobachevskiPlane';
export const cHyperbolicTiling = 'HyperbolicTiling';

// Hyperbolic Star-Tilings
export const cOrder7HeptagrammicTiling = 'Order7HeptagrammicTiling';
export const cHeptagrammicOrderHeptagonalTiling = 'HeptagrammicOrderHeptagonalTiling';
export const cOrder9EnneagrammicTiling = 'Order9EnneagrammicTiling';
export const cEnneagrammicOrderEnneagonalTiling = 'EnneagrammicOrderEnneagonalTiling';

// 4D Regular Polytopes
export const c4DSpaceSimplex = '4DSpaceSimplex';
export const c4DHypercube = '4DHypercube';
export const c4DCrossPolytope = '4DCrossPolytope';
export const c24Cell = '24Cell';
export const c120Cell = '120Cell';
export const c600Cell = '600Cell';

// 4D Degenerate Spherical Polytopes
export const cDitope = 'Ditope';
export const cHosotope = 'Hosotope';
export const c3Sphere = '3Sphere';
export const cHyperSphere = 'HyperSphere';

// 4D Non-Convex Polytopes
export const cIcosahedral120Cell = 'Icosahedral120Cell';
export const cSmallStellated120Cell = 'SmallStellated120Cell';
export const cGreat120Cell = 'Great120Cell';
export const cGrand120Cell = 'Grand120Cell';
export const cGreatStellated120Cell = 'GreatStellated120Cell';
export const cGrandStellated120Cell = 'GrandStellated120Cell';
export const cGreatGrand120Cell = 'GreatGrand120Cell';
export const cGreatIcosahedral120Cell = 'GreatIcosahedral120Cell';
export const cGrand600Cell = 'Grand600Cell';
export const cGreatGrandStellated120Cell = 'GreatGrandStellated120Cell';

// Tessellations of Euclidean 3D
export const cHoneycomb = 'Honeycomb';
export const cCubicHoneycomb = 'CubicHoneycomb';

// Degenerate tessellations of Euclidean 3D
export const cOrder2ApeirogonalTiling = 'Order2ApeirogonalTiling';
export const cApeirogonalHosohedron = 'ApeirogonalHosohedron';
export const cOrder4SquareHosohedralHoneycomb = 'Order4SquareHosohedralHoneycomb';
export const cOrder6TriangularHosohedralHoneycomb = 'Order6TriangularHosohedralHoneycomb';
export const cHexagonalHosohedralHoneycomb = 'HexagonalHosohedralHoneycomb';
export const cOrder2SquareTilingHoneycomb = 'Order2SquareTilingHoneycomb';
export const cOrder2TriangularTilingHoneycomb = 'Order2TriangularTilingHoneycomb';
export const cOrder2HexagonalTilingHoneycomb = 'Order2HexagonalTilingHoneycomb';

// Tessellations of Hyperbolic 3D
export const cOrder4DodecahedralHoneycomb = 'Order4DodecahedralHoneycomb';
export const cOrder5DodecahedralHoneycomb = 'Order5DodecahedralHoneycomb';
export const cOrder5CubicHoneycomb = 'Order5CubicHoneycomb';
export const cIcosahedralHoneycomb = 'IcosahedralHoneycomb';
export const cOrder3IcosahedralHoneycomb = 'Order3IcosahedralHoneycomb';
export const cOrder4OctahedralHoneycomb = 'Order4OctahedralHoneycomb';
export const cTriangularTilingHoneycomb = 'TriangularTilingHoneycomb';
export const cSquareTilingHoneycomb = 'SquareTilingHoneycomb';
export const cOrder4SquareTilingHoneycomb = 'Order4SquareTilingHoneycomb';
export const cOrder6TetrahedralHoneycomb = 'Order6TetrahedralHoneycomb';
export const cOrder6CubicHoneycomb = 'Order6CubicHoneycomb';
export const cOrder6DodecahedralHoneycomb = 'Order6DodecahedralHoneycomb';
export const cHexagonalTilingHoneycomb = 'HexagonalTilingHoneycomb';
export const cOrder4HexagonalTilingHoneycomb = 'Order4HexagonalTilingHoneycomb';
export const cOrder5HexagonalTilingHoneycomb = 'Order5HexagonalTilingHoneycomb';
export const cOrder6HexagonalTilingHoneycomb = 'Order6HexagonalTilingHoneycomb';

// 5D Regular Polytopes and Higher
export const c5Polytope = '5Polytope';
export const cTetracomb = 'Tetracomb';
export const cSimplexHypercubeCrossPolytope = 'SimplexHypercubeCrossPolytope';
export const c5Simplex = '5Simplex';
export const c5Cube = '5Cube';
export const c5Orthoplex = '5Orthoplex';
export const c6Simplex = '6Simplex';
export const c6Cube = '6Cube';
export const c6Orthoplex = '6Orthoplex';
export const c7Simplex = '7Simplex';
export const c7Cube = '7Cube';
export const c7Orthoplex = '7Orthoplex';
export const c8Simplex = '8Simplex';
export const c8Cube = '8Cube';
export const c8Orthoplex = '8Orthoplex';
export const c9Simplex = '9Simplex';
export const c9Cube = '9Cube';
export const c9Orthoplex = '9Orthoplex';
export const c10Simplex = '10Simplex';
export const c10Cube = '10Cube';
export const c10Orthoplex = '10Orthoplex';
export const c11Simplex = '11Simplex';
export const c11Cube = '11Cube';
export const c11Orthoplex = '11Orthoplex';

// Tessellations of Euclidean 4D
export const cHoneycombs = 'Honeycombs';
export const cTesseracticHoneycomb = 'TesseracticHoneycomb';
export const c16CellHoneycomb = '16CellHoneycomb';
export const c24CellHoneycomb = '24CellHoneycomb';

// Tessellations of Euclidean 5D and Higher
export const cHypercubicHoneycomb = 'HypercubicHoneycomb';
export const c5CubeHoneycomb = '5CubeHoneycomb';
export const c6CubeHoneycomb = '6CubeHoneycomb';
export const c7CubeHoneycomb = '7CubeHoneycomb';
export const c8CubeHoneycomb = '8CubeHoneycomb';

// Tessellations of Hyperbolic 4D
export const cOrder5_5CellHoneycomb = 'Order5_5CellHoneycomb';
export const c120CellHoneycomb = '120CellHoneycomb';
export const cOrder5TesseracticHoneycomb = 'Order5TesseracticHoneycomb';
export const cOrder4_120CellHoneycomb = 'Order4_120CellHoneycomb';
export const cOrder5_120CellHoneycomb = 'Order5_120CellHoneycomb';
export const cOrder4_24CellHoneycomb = 'Order4_24CellHoneycomb';
export const cSmallStellated120CellHoneycomb = 'SmallStellated120CellHoneycomb';
export const cPentagrammicOrder600CellHoneycomb = 'PentagrammicOrder600CellHoneycomb';
export const cOrder5Icosahedral120CellHoneycomb = 'Order5Icosahedral120CellHoneycomb';
export const cGreat120CellHoneycomb = 'Great120CellHoneycomb';

// Tessellations of Hyperbolic 5D
export const c5OrthoplexHoneycomb = '5OrthoplexHoneycomb';
export const c24CellHoneycombHoneycomb = '24CellHoneycombHoneycomb';
export const c16CellHoneycombHoneycomb = '16CellHoneycombHoneycomb';

// Apeirotopes
export const cApeirotope = 'Apeirotope';
export const cApeirohedron = 'Apeirohedron';
export const cRegularSkewPolyhedron = 'RegularSkewPolyhedron';

// Abstract Polytopes
export const cAbstractPolytope = 'AbstractPolytope';
export const c11Cell = '11Cell';
export const c57Cell = '57Cell';

// 2D with 1D Surface
export const cConcavePolygon = 'ConcavePolygon';
export const cConstructiblePolygon = 'ConstructiblePolygon';
export const cEquiangularPolygon = 'EquiangularPolygon';
export const cEquilateralPolygon = 'EquilateralPolygon';
export const cPenroseTile = 'PenroseTile';
export const cPolyform = 'Polyform';
export const cBalbis = 'Balbis';
export const cGnomon = 'Gnomon';
export const cGolygon = 'Golygon';
export const cStar = 'Star';
export const cHexagram = 'Hexagram';
export const cStarOfDavid = 'StarOfDavid';
export const cStarOfLakshmi = 'StarOfLakshmi';

// Polygons named for their number of sides
export const cAcuteTriangle = 'AcuteTriangle';
export const cIsoscelesTriangle = 'IsoscelesTriangle';
export const cObtuseTriangle = 'ObtuseTriangle';
export const cRationalTriangle = 'RationalTriangle';
export const cRightTriangle = 'RightTriangle';
export const c30_60_90Triangle = '30_60_90Triangle';
export const cIsoscelesRightTriangle = 'IsoscelesRightTriangle';
export const cKeplerTriangle = 'KeplerTriangle';
export const cScaleneTriangle = 'ScaleneTriangle';
export const cQuadrilateral = 'Quadrilateral';
export const cCyclicQuadrilateral = 'CyclicQuadrilateral';
export const cKite = 'Kite';
export const cParallelogram = 'Parallelogram';
export const cRhombus = 'Rhombus';
export const cEquilateralParallelogram = 'EquilateralParallelogram';
export const cLozenge = 'Lozenge';
export const cRhomboid = 'Rhomboid';
export const cTangentialQuadrilateral = 'TangentialQuadrilateral';
export const cTrapezium = 'Trapezium';
export const cIsoscelesTrapezoid = 'IsoscelesTrapezoid';
export const cRegularPentagon = 'RegularPentagon';
export const cLemoineHexagon = 'LemoineHexagon';
export const cRegularOctagon = 'RegularOctagon';
export const cRegularDecagon = 'RegularDecagon';
export const cTriskaidecagon = 'Triskaidecagon';
export const cTriacontagon = 'Triacontagon';
export const cTetracontagon = 'Tetracontagon';
export const cPentacontagon = 'Pentacontagon';
export const cHexacontagon = 'Hexacontagon';
export const cHeptacontagon = 'Heptacontagon';
export const cOctacontagon = 'Octacontagon';
export const cEnneacontagon = 'Enneacontagon';
export const c257Gon = '257Gon';
export const cMyriagon = 'Myriagon';
export const c65537Gon = '65537Gon';
export const cMegagon = 'Megagon';

// Tilings
export const cArchimedeanTiling = 'ArchimedeanTiling';
export const cTruncatedSquareTiling = 'TruncatedSquareTiling';
export const cSnubSquareTiling = 'SnubSquareTiling';
export const cTrihexagonalTiling = 'TrihexagonalTiling';
export const cTruncatedHexagonalTiling = 'TruncatedHexagonalTiling';
export const cRhombitriHexagonalTiling = 'RhombitriHexagonalTiling';
export const cTruncatedTriHexagonalTiling = 'TruncatedTriHexagonalTiling';
export const cSnubHexagonalTiling = 'SnubHexagonalTiling';
export const cElongatedTriangularTiling = 'ElongatedTriangularTiling';

// Uniform Polyhedra
export const cHemicube = 'Hemicube';
export const cHemiOctahedron = 'HemiOctahedron';
export const cHemiDodecahedron = 'HemiDodecahedron';
export const cHemiIcosahedron = 'HemiIcosahedron';
export const cTruncatedTetrahedron = 'TruncatedTetrahedron';
export const cCuboctahedron = 'Cuboctahedron';
export const cTruncatedCube = 'TruncatedCube';
export const cTruncatedOctahedron = 'TruncatedOctahedron';
export const cRhombicubOctahedron = 'RhombicubOctahedron';
export const cTruncatedCuboctahedron = 'TruncatedCuboctahedron';
export const cSnubCube = 'SnubCube';
export const cIcosidodecahedron = 'Icosidodecahedron';
export const cTruncatedDodecahedron = 'TruncatedDodecahedron';
export const cTruncatedIcosahedron = 'TruncatedIcosahedron';
export const cRhombicosidodecahedron = 'Rhombicosidodecahedron';
export const cTruncatedIcosidodecahedron = 'TruncatedIcosidodecahedron';
export const cSnubDodecahedron = 'SnubDodecahedron';
export const cPrism = 'Prism';
export const cAntiprism = 'Antiprism';
export const cCubitruncatedCuboctahedron = 'CubitruncatedCuboctahedron';
export const cCubohemioctahedron = 'Cubohemioctahedron';
export const cDitrigonalDodecadodecahedron = 'DitrigonalDodecadodecahedron';
export const cDodecadodecahedron = 'Dodecadodecahedron';
export const cGreatCubicuboctahedron = 'GreatCubicuboctahedron';
export const cGreatDirhombicosidodecahedron = 'GreatDirhombicosidodecahedron';
export const cGreatDisnubDirhombidodecahedron = 'GreatDisnubDirhombidodecahedron';
export const cGreatDitrigonalDodecicosidodecahedron = 'GreatDitrigonalDodecicosidodecahedron';
export const cGreatDitrigonalIcosidodecahedron = 'GreatDitrigonalIcosidodecahedron';
export const cGreatDodecahemicosahedron = 'GreatDodecahemicosahedron';
export const cGreatDodecahemidodecahedron = 'GreatDodecahemidodecahedron';
export const cGreatDodecicosahedron = 'GreatDodecicosahedron';
export const cGreatDodecicosidodecahedron = 'GreatDodecicosidodecahedron';
export const cGreatIcosicosidodecahedron = 'GreatIcosicosidodecahedron';
export const cGreatIcosidodecahedron = 'GreatIcosidodecahedron';
export const cGreatIcosihemidodecahedron = 'GreatIcosihemidodecahedron';
export const cGreatInvertedSnubIcosidodecahedron = 'GreatInvertedSnubIcosidodecahedron';
export const cGreatRetrosnubIcosidodecahedron = 'GreatRetrosnubIcosidodecahedron';
export const cGreatRhombidodecahedron = 'GreatRhombidodecahedron';
export const cGreatRhombihexahedron = 'GreatRhombihexahedron';
export const cGreatSnubDodecicosidodecahedron = 'GreatSnubDodecicosidodecahedron';
export const cGreatSnubIcosidodecahedron = 'GreatSnubIcosidodecahedron';
export const cGreatStellatedTruncatedDodecahedron = 'GreatStellatedTruncatedDodecahedron';
export const cGreatTruncatedCuboctahedron = 'GreatTruncatedCuboctahedron';
export const cGreatTruncatedIcosidodecahedron = 'GreatTruncatedIcosidodecahedron';
export const cIcosidodecadodecahedron = 'Icosidodecadodecahedron';
export const cIcositruncatedDodecadodecahedron = 'IcositruncatedDodecadodecahedron';
export const cInvertedSnubDodecadodecahedron = 'InvertedSnubDodecadodecahedron';
export const cNonconvexGreatRhombicosidodecahedron = 'NonconvexGreatRhombicosidodecahedron';
export const cNonconvexGreatRhombicuboctahedron = 'NonconvexGreatRhombicuboctahedron';
export const cOctahemioctahedron = 'Octahemioctahedron';
export const cRhombicosahedron = 'Rhombicosahedron';
export const cRhombidodecadodecahedron = 'Rhombidodecadodecahedron';
export const cSmallCubicuboctahedron = 'SmallCubicuboctahedron';
export const cSmallDitrigonalDodecicosidodecahedron = 'SmallDitrigonalDodecicosidodecahedron';
export const cSmallDitrigonalIcosidodecahedron = 'SmallDitrigonalIcosidodecahedron';
export const cSmallDodecahemicosahedron = 'SmallDodecahemicosahedron';
export const cSmallDodecahemidodecahedron = 'SmallDodecahemidodecahedron';
export const cSmallDodecicosahedron = 'SmallDodecicosahedron';
export const cSmallDodecicosidodecahedron = 'SmallDodecicosidodecahedron';
export const cSmallIcosicosidodecahedron = 'SmallIcosicosidodecahedron';
export const cSmallIcosihemidodecahedron = 'SmallIcosihemidodecahedron';
export const cSmallRetrosnubIcosicosidodecahedron = 'SmallRetrosnubIcosicosidodecahedron';
export const cSmallRhombidodecahedron = 'SmallRhombidodecahedron';
export const cSmallRhombihexahedron = 'SmallRhombihexahedron';
export const cSmallSnubIcosicosidodecahedron = 'SmallSnubIcosicosidodecahedron';
export const cSmallStellatedTruncatedDodecahedron = 'SmallStellatedTruncatedDodecahedron';
export const cSnubDodecadodecahedron = 'SnubDodecadodecahedron';
export const cSnubIcosidodecadodecahedron = 'SnubIcosidodecadodecahedron';
export const cStellatedTruncatedHexahedron = 'StellatedTruncatedHexahedron';
export const cTetrahemihexahedron = 'Tetrahemihexahedron';
export const cTruncatedDodecadodecahedron = 'TruncatedDodecadodecahedron';
export const cTruncatedGreatDodecahedron = 'TruncatedGreatDodecahedron';
export const cTruncatedGreatIcosahedron = 'TruncatedGreatIcosahedron';

// Duals of Uniform Polyhedra
export const cCatalanSolid = 'CatalanSolid';
export const cTriakisTetrahedron = 'TriakisTetrahedron';
export const cRhombicDodecahedron = 'RhombicDodecahedron';
export const cTriakisOctahedron = 'TriakisOctahedron';
export const cTetrakisHexahedron = 'TetrakisHexahedron';
export const cDeltoidalIcositetrahedron = 'DeltoidalIcositetrahedron';
export const cDisdyakisDodecahedron = 'DisdyakisDodecahedron';
export const cPentagonalIcositetrahedron = 'PentagonalIcositetrahedron';
export const cRhombicTriacontahedron = 'RhombicTriacontahedron';
export const cTriakisIcosahedron = 'TriakisIcosahedron';
export const cPentakisDodecahedron = 'PentakisDodecahedron';
export const cDeltoidalHexecontahedron = 'DeltoidalHexecontahedron';
export const cDisdyakisTriacontahedron = 'DisdyakisTriacontahedron';
export const cPentagonalHexecontahedron = 'PentagonalHexecontahedron';
export const cGreatComplexIcosidodecahedron = 'GreatComplexIcosidodecahedron';
export const cGreatDeltoidalHexecontahedron = 'GreatDeltoidalHexecontahedron';
export const cGreatDeltoidalIcositetrahedron = 'GreatDeltoidalIcositetrahedron';
export const cGreatDirhombicosidodecacron = 'GreatDirhombicosidodecacron';
export const cGreatDisdyakisDodecahedron = 'GreatDisdyakisDodecahedron';
export const cGreatDisdyakisTriacontahedron = 'GreatDisdyakisTriacontahedron';
export const cGreatDisnubDirhombidodecacron = 'GreatDisnubDirhombidodecacron';
export const cGreatDitrigonalDodecacronicHexecontahedron = 'GreatDitrigonalDodecacronicHexecontahedron';
export const cGreatDodecacronicHexecontahedron = 'GreatDodecacronicHexecontahedron';
export const cGreatDodecahemicosacron = 'GreatDodecahemicosacron';
export const cGreatDodecicosacron = 'GreatDodecicosacron';
export const cGreatHexacronicIcositetrahedron = 'GreatHexacronicIcositetrahedron';
export const cGreatHexagonalHexecontahedron = 'GreatHexagonalHexecontahedron';
export const cGreatIcosacronicHexecontahedron = 'GreatIcosacronicHexecontahedron';
export const cGreatIcosihemidodecacron = 'GreatIcosihemidodecacron';
export const cGreatInvertedPentagonalHexecontahedron = 'GreatInvertedPentagonalHexecontahedron';
export const cGreatPentagonalHexecontahedron = 'GreatPentagonalHexecontahedron';
export const cGreatPentagrammicHexecontahedron = 'GreatPentagrammicHexecontahedron';
export const cGreatPentakisDodecahedron = 'GreatPentakisDodecahedron';
export const cGreatRhombicTriacontahedron = 'GreatRhombicTriacontahedron';
export const cGreatRhombidodecacron = 'GreatRhombidodecacron';
export const cGreatRhombihexacron = 'GreatRhombihexacron';
export const cGreatStellapentakisDodecahedron = 'GreatStellapentakisDodecahedron';
export const cGreatTriakisIcosahedron = 'GreatTriakisIcosahedron';
export const cGreatTriakisOctahedron = 'GreatTriakisOctahedron';
export const cGreatTriambicIcosahedron = 'GreatTriambicIcosahedron';
export const cMedialDeltoidalHexecontahedron = 'MedialDeltoidalHexecontahedron';
export const cMedialDisdyakisTriacontahedron = 'MedialDisdyakisTriacontahedron';
export const cMedialHexagonalHexecontahedron = 'MedialHexagonalHexecontahedron';
export const cMedialIcosacronicHexecontahedron = 'MedialIcosacronicHexecontahedron';
export const cMedialInvertedPentagonalHexecontahedron = 'MedialInvertedPentagonalHexecontahedron';
export const cMedialPentagonalHexecontahedron = 'MedialPentagonalHexecontahedron';
export const cMedialRhombicTriacontahedron = 'MedialRhombicTriacontahedron';
export const cHexahemioctacron = 'Hexahemioctacron';
export const cHemipolyhedron = 'Hemipolyhedron';
export const cOctahemioctacron = 'Octahemioctacron';
export const cRhombicosacron = 'Rhombicosacron';
export const cSmallComplexIcosidodecahedron = 'SmallComplexIcosidodecahedron';
export const cSmallDitrigonalDodecacronicHexecontahedron = 'SmallDitrigonalDodecacronicHexecontahedron';
export const cSmallDodecacronicHexecontahedron = 'SmallDodecacronicHexecontahedron';
export const cSmallDodecahemicosacron = 'SmallDodecahemicosacron';
export const cSmallDodecahemidodecacron = 'SmallDodecahemidodecacron';
export const cSmallDodecicosacron = 'SmallDodecicosacron';
export const cSmallHexacronicIcositetrahedron = 'SmallHexacronicIcositetrahedron';
export const cSmallHexagonalHexecontahedron = 'SmallHexagonalHexecontahedron';
export const cSmallHexagrammicHexecontahedron = 'SmallHexagrammicHexecontahedron';
export const cSmallIcosacronicHexecontahedron = 'SmallIcosacronicHexecontahedron';
export const cSmallIcosihemidodecacron = 'SmallIcosihemidodecacron';
export const cSmallRhombidodecacron = 'SmallRhombidodecacron';
export const cSmallRhombihexacron = 'SmallRhombihexacron';
export const cSmallStellapentakisDodecahedron = 'SmallStellapentakisDodecahedron';
export const cSmallTriambicIcosahedron = 'SmallTriambicIcosahedron';
export const cTetrahemihexacron = 'Tetrahemihexacron';

// Johnson Solids
export const cAugmentedDodecahedron = 'AugmentedDodecahedron';
export const cAugmentedHexagonalPrism = 'AugmentedHexagonalPrism';
export const cAugmentedPentagonalPrism = 'AugmentedPentagonalPrism';
export const cAugmentedSphenocorona = 'AugmentedSphenocorona';
export const cAugmentedTriangularPrism = 'AugmentedTriangularPrism';
export const cAugmentedTridiminishedIcosahedron = 'AugmentedTridiminishedIcosahedron';
export const cAugmentedTruncatedCube = 'AugmentedTruncatedCube';
export const cAugmentedTruncatedDodecahedron = 'AugmentedTruncatedDodecahedron';
export const cAugmentedTruncatedTetrahedron = 'AugmentedTruncatedTetrahedron';
export const cBiaugmentedPentagonalPrism = 'BiaugmentedPentagonalPrism';
export const cBiaugmentedTriangularPrism = 'BiaugmentedTriangularPrism';
export const cBiaugmentedTruncatedCube = 'BiaugmentedTruncatedCube';
export const cBigyrateDiminishedRhombicosidodecahedron = 'BigyrateDiminishedRhombicosidodecahedron';
export const cBilunabirotunda = 'Bilunabirotunda';
export const cDiminishedRhombicosidodecahedron = 'DiminishedRhombicosidodecahedron';
export const cDisphenocingulum = 'Disphenocingulum';
export const cElongatedPentagonalBipyramid = 'ElongatedPentagonalBipyramid';
export const cElongatedPentagonalCupola = 'ElongatedPentagonalCupola';
export const cElongatedPentagonalGyrobicupola = 'ElongatedPentagonalGyrobicupola';
export const cElongatedPentagonalGyrobirotunda = 'ElongatedPentagonalGyrobirotunda';
export const cElongatedPentagonalGyrocupolarotunda = 'ElongatedPentagonalGyrocupolarotunda';
export const cElongatedPentagonalOrthobicupola = 'ElongatedPentagonalOrthobicupola';
export const cElongatedPentagonalOrthobirotunda = 'ElongatedPentagonalOrthobirotunda';
export const cElongatedPentagonalOrthocupolarotunda = 'ElongatedPentagonalOrthocupolarotunda';
export const cElongatedPentagonalPyramid = 'ElongatedPentagonalPyramid';
export const cElongatedPentagonalRotunda = 'ElongatedPentagonalRotunda';
export const cElongatedSquareBipyramid = 'ElongatedSquareBipyramid';
export const cElongatedSquareCupola = 'ElongatedSquareCupola';
export const cElongatedSquareGyrobicupola = 'ElongatedSquareGyrobicupola';
export const cElongatedSquarePyramid = 'ElongatedSquarePyramid';
export const cElongatedTriangularBipyramid = 'ElongatedTriangularBipyramid';
export const cElongatedTriangularCupola = 'ElongatedTriangularCupola';
export const cElongatedTriangularGyrobicupola = 'ElongatedTriangularGyrobicupola';
export const cElongatedTriangularOrthobicupola = 'ElongatedTriangularOrthobicupola';
export const cElongatedTriangularPyramid = 'ElongatedTriangularPyramid';
export const cGyrateBidiminishedRhombicosidodecahedron = 'GyrateBidiminishedRhombicosidodecahedron';
export const cGyrateRhombicosidodecahedron = 'GyrateRhombicosidodecahedron';
export const cGyrobifastigium = 'Gyrobifastigium';
export const cGyroelongatedPentagonalBicupola = 'GyroelongatedPentagonalBicupola';
export const cGyroelongatedPentagonalBirotunda = 'GyroelongatedPentagonalBirotunda';
export const cGyroelongatedPentagonalCupola = 'GyroelongatedPentagonalCupola';
export const cGyroelongatedPentagonalCupolarotunda = 'GyroelongatedPentagonalCupolarotunda';
export const cGyroelongatedPentagonalPyramid = 'GyroelongatedPentagonalPyramid';
export const cGyroelongatedPentagonalRotunda = 'GyroelongatedPentagonalRotunda';
export const cGyroelongatedSquareBicupola = 'GyroelongatedSquareBicupola';
export const cGyroelongatedSquareBipyramid = 'GyroelongatedSquareBipyramid';
export const cGyroelongatedSquareCupola = 'GyroelongatedSquareCupola';
export const cGyroelongatedSquarePyramid = 'GyroelongatedSquarePyramid';
export const cGyroelongatedTriangularBicupola = 'GyroelongatedTriangularBicupola';
export const cGyroelongatedTriangularCupola = 'GyroelongatedTriangularCupola';
export const cHebesphenomegacorona = 'Hebesphenomegacorona';
export const cMetabiaugmentedDodecahedron = 'MetabiaugmentedDodecahedron';
export const cMetabiaugmentedHexagonalPrism = 'MetabiaugmentedHexagonalPrism';
export const cMetabiaugmentedTruncatedDodecahedron = 'MetabiaugmentedTruncatedDodecahedron';
export const cMetabidiminishedIcosahedron = 'MetabidiminishedIcosahedron';
export const cMetabidiminishedRhombicosidodecahedron = 'MetabidiminishedRhombicosidodecahedron';
export const cMetabigyrateRhombicosidodecahedron = 'MetabigyrateRhombicosidodecahedron';
export const cMetagyrateDiminishedRhombicosidodecahedron = 'MetagyrateDiminishedRhombicosidodecahedron';
export const cParabiaugmentedDodecahedron = 'ParabiaugmentedDodecahedron';
export const cParabiaugmentedHexagonalPrism = 'ParabiaugmentedHexagonalPrism';
export const cParabiaugmentedTruncatedDodecahedron = 'ParabiaugmentedTruncatedDodecahedron';
export const cParabidiminishedRhombicosidodecahedron = 'ParabidiminishedRhombicosidodecahedron';
export const cParabigyrateRhombicosidodecahedron = 'ParabigyrateRhombicosidodecahedron';
export const cParagyrateDiminishedRhombicosidodecahedron = 'ParagyrateDiminishedRhombicosidodecahedron';
export const cPentagonalBipyramid = 'PentagonalBipyramid';
export const cPentagonalCupola = 'PentagonalCupola';
export const cPentagonalGyrobicupola = 'PentagonalGyrobicupola';
export const cPentagonalGyrocupolarotunda = 'PentagonalGyrocupolarotunda';
export const cPentagonalOrthobicupola = 'PentagonalOrthobicupola';
export const cPentagonalOrthobirotunda = 'PentagonalOrthobirotunda';
export const cPentagonalOrthocupolarotunda = 'PentagonalOrthocupolarotunda';
export const cPentagonalPyramid = 'PentagonalPyramid';
export const cPentagonalRotunda = 'PentagonalRotunda';
export const cSnubDisphenoid = 'SnubDisphenoid';
export const cSnubSquareAntiprism = 'SnubSquareAntiprism';
export const cSphenocorona = 'Sphenocorona';
export const cSphenomegacorona = 'Sphenomegacorona';
export const cSquareCupola = 'SquareCupola';
export const cSquareGyrobicupola = 'SquareGyrobicupola';
export const cSquareOrthobicupola = 'SquareOrthobicupola';
export const cSquarePyramid = 'SquarePyramid';
export const cTriangularBipyramid = 'TriangularBipyramid';
export const cTriangularCupola = 'TriangularCupola';
export const cTriangularHebesphenorotunda = 'TriangularHebesphenorotunda';
export const cTriangularOrthobicupola = 'TriangularOrthobicupola';
export const cTriaugmentedDodecahedron = 'TriaugmentedDodecahedron';
export const cTriaugmentedHexagonalPrism = 'TriaugmentedHexagonalPrism';
export const cTriaugmentedTriangularPrism = 'TriaugmentedTriangularPrism';
export const cTriaugmentedTruncatedDodecahedron = 'TriaugmentedTruncatedDodecahedron';
export const cTridiminishedIcosahedron = 'TridiminishedIcosahedron';
export const cTridiminishedRhombicosidodecahedron = 'TridiminishedRhombicosidodecahedron';
export const cTrigyrateRhombicosidodecahedron = 'TrigyrateRhombicosidodecahedron';

// Other Non-Uniform Polyhedra
export const cPyramid = 'Pyramid';
export const cBipyramid = 'Bipyramid';
export const cDisphenoid = 'Disphenoid';
export const cParallelepiped = 'Parallelepiped';
export const cCuboid = 'Cuboid';
export const cRhombohedron = 'Rhombohedron';
export const cTrapezohedron = 'Trapezohedron';
export const cFrustum = 'Frustum';
export const cTrapezoRhombicDodecahedron = 'TrapezoRhombicDodecahedron';
export const cRhomboHexagonalDodecahedron = 'RhomboHexagonalDodecahedron';
export const cTruncatedTrapezohedron = 'TruncatedTrapezohedron';
export const cDeltahedron = 'Deltahedron';
export const cZonohedron = 'Zonohedron';
export const cPrismatoid = 'Prismatoid';
export const cCupola = 'Cupola';
export const cBicupola = 'Bicupola';

// Honeycombs
export const cTruncatedCubicHoneycomb = 'TruncatedCubicHoneycomb';
export const cBitruncatedCubicHoneycomb = 'BitruncatedCubicHoneycomb';
export const cCantellatedCubicHoneycomb = 'CantellatedCubicHoneycomb';
export const cCantitruncatedCubicHoneycomb = 'CantitruncatedCubicHoneycomb';
export const cRectifiedCubicHoneycomb = 'RectifiedCubicHoneycomb';
export const cRuncitruncatedCubicHoneycomb = 'RuncitruncatedCubicHoneycomb';
export const cOmnitruncatedCubicHoneycomb = 'OmnitruncatedCubicHoneycomb';
export const cTetrahedralOctahedralHoneycomb = 'TetrahedralOctahedralHoneycomb';
export const cTruncatedAlternatedCubicHoneycomb = 'TruncatedAlternatedCubicHoneycomb';
export const cCantitruncatedAlternatedCubicHoneycomb = 'CantitruncatedAlternatedCubicHoneycomb';
export const cRuncinatedAlternatedCubicHoneycomb = 'RuncinatedAlternatedCubicHoneycomb';
export const cQuarterCubicHoneycomb = 'QuarterCubicHoneycomb';
export const cGyratedTetrahedralOctahedralHoneycomb = 'GyratedTetrahedralOctahedralHoneycomb';
export const cGyratedTriangularPrismaticHoneycomb = 'GyratedTriangularPrismaticHoneycomb';
export const cGyroelongatedAlternatedCubicHoneycomb = 'GyroelongatedAlternatedCubicHoneycomb';
export const cGyroelongatedTriangularPrismaticHoneycomb = 'GyroelongatedTriangularPrismaticHoneycomb';
export const cElongatedTriangularPrismaticHoneycomb = 'ElongatedTriangularPrismaticHoneycomb';
export const cElongatedAlternatedCubicHoneycomb = 'ElongatedAlternatedCubicHoneycomb';
export const cHexagonalPrismaticHoneycomb = 'HexagonalPrismaticHoneycomb';
export const cTriangularPrismaticHoneycomb = 'TriangularPrismaticHoneycomb';
export const cTriangularHexagonalPrismaticHoneycomb = 'TriangularHexagonalPrismaticHoneycomb';
export const cTruncatedHexagonalPrismaticHoneycomb = 'TruncatedHexagonalPrismaticHoneycomb';
export const cTruncatedSquarePrismaticHoneycomb = 'TruncatedSquarePrismaticHoneycomb';
export const cRhombitriangularHexagonalPrismaticHoneycomb = 'RhombitriangularHexagonalPrismaticHoneycomb';
export const cOmnitruncatedTriangularHexagonalPrismaticHoneycomb = 'OmnitruncatedTriangularHexagonalPrismaticHoneycomb';
export const cSnubTriangularHexagonalPrismaticHoneycomb = 'SnubTriangularHexagonalPrismaticHoneycomb';
export const cSnubSquarePrismaticHoneycomb = 'SnubSquarePrismaticHoneycomb';

// Dual Uniform Honeycomb
export const cDisphenoidTetrahedralHoneycomb = 'DisphenoidTetrahedralHoneycomb';
export const cRhombicDodecahedralHoneycomb = 'RhombicDodecahedralHoneycomb';

// Others Honeycombs
export const cTrapezoRhombicDodecahedralHoneycomb = 'TrapezoRhombicDodecahedralHoneycomb';
export const cWeairePhelanStructure = 'WeairePhelanStructure';

// Other Prismatic Geometries
export const cApeirogonalPrism = 'ApeirogonalPrism';
export const cBifrustum = 'Bifrustum';
export const cBoerdijkCoxeterHelix = 'BoerdijkCoxeterHelix';
export const cCsaszarPolyhedron = 'CsaszarPolyhedron';
export const cFlexiblePolyhedron = 'FlexiblePolyhedron';
export const cGyroelongatedSquareDipyramid = 'GyroelongatedSquareDipyramid';
export const cHeronianTetrahedron = 'HeronianTetrahedron';
export const cHexagonalBifrustum = 'HexagonalBifrustum';
export const cHexagonalTruncatedTrapezohedron = 'HexagonalTruncatedTrapezohedron';
export const cHillTetrahedron = 'HillTetrahedron';
export const cHolyhedron = 'Holyhedron';
export const cInfiniteSkewPolyhedron = 'InfiniteSkewPolyhedron';
export const cJessensIcosahedron = 'JessensIcosahedron';
export const cNearMissJohnsonSolid = 'NearMissJohnsonSolid';
export const cPentagonalBifrustum = 'PentagonalBifrustum';
export const cPolytetrahedron = 'Polytetrahedron';
export const cPyritohedron = 'Pyritohedron';
export const cRhombicEnneacontahedron = 'RhombicEnneacontahedron';
export const cRhombicIcosahedron = 'RhombicIcosahedron';
export const cScalenohedron = 'Scalenohedron';
export const cSchonhardtPolyhedron = 'SchonhardtPolyhedron';
export const cSquareBifrustum = 'SquareBifrustum';
export const cSquareTruncatedTrapezohedron = 'SquareTruncatedTrapezohedron';
export const cSzilassiPolyhedron = 'SzilassiPolyhedron';
export const cTetradecahedron = 'Tetradecahedron';
export const cTetradyakisHexahedron = 'TetradyakisHexahedron';
export const cTetratedDodecahedron = 'TetratedDodecahedron';
export const cTriangularBifrustum = 'TriangularBifrustum';
export const cTruncatedRhombicDodecahedron = 'TruncatedRhombicDodecahedron';
export const cTruncatedTriakisTetrahedron = 'TruncatedTriakisTetrahedron';
export const cTridyakisIcosahedron = 'TridyakisIcosahedron';
export const cTrigonalTrapezohedron = 'TrigonalTrapezohedron';
export const cWatermanPolyhedron = 'WatermanPolyhedron';
export const cWedge = 'Wedge';

// Regular and Uniform Compound Polyhedra
export const cCompoundOfCubeAndOctahedron = 'CompoundOfCubeAndOctahedron';
export const cCompoundOfDodecahedronAndIcosahedron = 'CompoundOfDodecahedronAndIcosahedron';
export const cCompoundOfEightOctahedraWithRotationalFreedom = 'CompoundOfEightOctahedraWithRotationalFreedom';
export const cCompoundOfEightTriangularPrisms = 'CompoundOfEightTriangularPrisms';
export const cCompoundOfFiveCubes = 'CompoundOfFiveCubes';
export const cCompoundOfFiveCuboctahedra = 'CompoundOfFiveCuboctahedra';
export const cCompoundOfFiveCubohemioctahedra = 'CompoundOfFiveCubohemioctahedra';
export const cCompoundOfFiveGreatCubicuboctahedra = 'CompoundOfFiveGreatCubicuboctahedra';
export const cCompoundOfFiveGreatDodecahedra = 'CompoundOfFiveGreatDodecahedra';
export const cCompoundOfFiveGreatIcosahedra = 'CompoundOfFiveGreatIcosahedra';
export const cCompoundOfFiveGreatRhombihexahedra = 'CompoundOfFiveGreatRhombihexahedra';
export const cCompoundOfFiveIcosahedra = 'CompoundOfFiveIcosahedra';
export const cCompoundOfFiveOctahedra = 'CompoundOfFiveOctahedra';
export const cCompoundOfFiveOctahemioctahedra = 'CompoundOfFiveOctahemioctahedra';
export const cCompoundOfFiveSmallCubicuboctahedra = 'CompoundOfFiveSmallCubicuboctahedra';
export const cCompoundOfFiveSmallRhombicuboctahedra = 'CompoundOfFiveSmallRhombicuboctahedra';
export const cCompoundOfFiveSmallRhombihexahedra = 'CompoundOfFiveSmallRhombihexahedra';
export const cCompoundOfFiveSmallStellatedDodecahedra = 'CompoundOfFiveSmallStellatedDodecahedra';
export const cCompoundOfFiveStellatedTruncatedCubes = 'CompoundOfFiveStellatedTruncatedCubes';
export const cCompoundOfFiveTetrahedra = 'CompoundOfFiveTetrahedra';
export const cCompoundOfFiveTetrahemihexahedra = 'CompoundOfFiveTetrahemihexahedra';
export const cCompoundOfFiveTruncatedCubes = 'CompoundOfFiveTruncatedCubes';
export const cCompoundOfFiveTruncatedTetrahedra = 'CompoundOfFiveTruncatedTetrahedra';
export const cCompoundOfFiveUniformGreatRhombicuboctahedra = 'CompoundOfFiveUniformGreatRhombicuboctahedra';
export const cCompoundOfFourHexagonalPrisms = 'CompoundOfFourHexagonalPrisms';
export const cCompoundOfFourOctahedra = 'CompoundOfFourOctahedra';
export const cCompoundOfFourOctahedraWithRotationalFreedom = 'CompoundOfFourOctahedraWithRotationalFreedom';
export const cCompoundOfFourTetrahedra = 'CompoundOfFourTetrahedra';
export const cCompoundOfFourTriangularPrisms = 'CompoundOfFourTriangularPrisms';
export const cCompoundOfGreatIcosahedronAndGreatStellatedDodecahedron = 'CompoundOfGreatIcosahedronAndGreatStellatedDodecahedron';
export const cCompoundOfSixCubesWithRotationalFreedom = 'CompoundOfSixCubesWithRotationalFreedom';
export const cCompoundOfSixDecagonalPrisms = 'CompoundOfSixDecagonalPrisms';
export const cCompoundOfSixDecagrammicPrisms = 'CompoundOfSixDecagrammicPrisms';
export const cCompoundOfSixPentagonalAntiprisms = 'CompoundOfSixPentagonalAntiprisms';
export const cCompoundOfSixPentagonalPrisms = 'CompoundOfSixPentagonalPrisms';
export const cCompoundOfSixPentagrammicAntiprisms = 'CompoundOfSixPentagrammicAntiprisms';
export const cCompoundOfSixPentagrammicCrossedAntiprisms = 'CompoundOfSixPentagrammicCrossedAntiprisms';
export const cCompoundOfSixPentagrammicPrisms = 'CompoundOfSixPentagrammicPrisms';
export const cCompoundOfSixSquareAntiprisms = 'CompoundOfSixSquareAntiprisms';
export const cCompoundOfSixTetrahedra = 'CompoundOfSixTetrahedra';
export const cCompoundOfSixTetrahedraWithRotationalFreedom = 'CompoundOfSixTetrahedraWithRotationalFreedom';
export const cCompoundOfSmallStellatedDodecahedronAndGreatDodecahedron = 'CompoundOfSmallStellatedDodecahedronAndGreatDodecahedron';
export const cCompoundOfTenHexagonalPrisms = 'CompoundOfTenHexagonalPrisms';
export const cCompoundOfTenOctahedra = 'CompoundOfTenOctahedra';
export const cCompoundOfTenTetrahedra = 'CompoundOfTenTetrahedra';
export const cCompoundOfTenTriangularPrisms = 'CompoundOfTenTriangularPrisms';
export const cCompoundOfTenTruncatedTetrahedra = 'CompoundOfTenTruncatedTetrahedra';
export const cCompoundOfThreeCubes = 'CompoundOfThreeCubes';
export const cCompoundOfThreeSquareAntiprisms = 'CompoundOfThreeSquareAntiprisms';
export const cCompoundOfThreeTetrahedra = 'CompoundOfThreeTetrahedra';
export const cCompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagonalAntiprismsWithRotationalFreedom';
export const cCompoundOfTwelvePentagonalPrisms = 'CompoundOfTwelvePentagonalPrisms';
export const cCompoundOfTwelvePentagrammicAntiprisms = 'CompoundOfTwelvePentagrammicAntiprisms';
export const cCompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom = 'CompoundOfTwelvePentagrammicCrossedAntiprismsWithRotationalFreedom';
export const cCompoundOfTwelvePentagrammicPrisms = 'CompoundOfTwelvePentagrammicPrisms';
export const cCompoundOfTwelveTetrahedraWithRotationalFreedom = 'CompoundOfTwelveTetrahedraWithRotationalFreedom';
export const cCompoundOfTwentyOctahedra = 'CompoundOfTwentyOctahedra';
export const cCompoundOfTwentyOctahedraWithRotationalFreedom = 'CompoundOfTwentyOctahedraWithRotationalFreedom';
export const cCompoundOfTwentyTetrahemihexahedra = 'CompoundOfTwentyTetrahemihexahedra';
export const cCompoundOfTwentyTriangularPrisms = 'CompoundOfTwentyTriangularPrisms';
export const cCompoundOfTwoGreatDodecahedra = 'CompoundOfTwoGreatDodecahedra';
export const cCompoundOfTwoGreatIcosahedra = 'CompoundOfTwoGreatIcosahedra';
export const cCompoundOfTwoGreatInvertedSnubIcosidodecahedra = 'CompoundOfTwoGreatInvertedSnubIcosidodecahedra';
export const cCompoundOfTwoGreatRetrosnubIcosidodecahedra = 'CompoundOfTwoGreatRetrosnubIcosidodecahedra';
export const cCompoundOfTwoGreatSnubIcosidodecahedra = 'CompoundOfTwoGreatSnubIcosidodecahedra';
export const cCompoundOfTwoIcosahedra = 'CompoundOfTwoIcosahedra';
export const cCompoundOfTwoInvertedSnubDodecadodecahedra = 'CompoundOfTwoInvertedSnubDodecadodecahedra';
export const cCompoundOfTwoSmallStellatedDodecahedra = 'CompoundOfTwoSmallStellatedDodecahedra';
export const cCompoundOfTwoSnubCubes = 'CompoundOfTwoSnubCubes';
export const cCompoundOfTwoSnubDodecadodecahedra = 'CompoundOfTwoSnubDodecadodecahedra';
export const cCompoundOfTwoSnubDodecahedra = 'CompoundOfTwoSnubDodecahedra';
export const cCompoundOfTwoSnubIcosidodecadodecahedra = 'CompoundOfTwoSnubIcosidodecadodecahedra';
export const cCompoundOfTwoTruncatedTetrahedra = 'CompoundOfTwoTruncatedTetrahedra';
export const cPrismaticCompoundOfAntiprisms = 'PrismaticCompoundOfAntiprisms';
export const cPrismaticCompoundOfAntiprismsWithRotationalFreedom = 'PrismaticCompoundOfAntiprismsWithRotationalFreedom';
export const cPrismaticCompoundOfPrisms = 'PrismaticCompoundOfPrisms';
export const cPrismaticCompoundOfPrismsWithRotationalFreedom = 'PrismaticCompoundOfPrismsWithRotationalFreedom';

// 4D Polytopes
export const cHecatonicosachoron = 'Hecatonicosachoron';
export const cHexacosichoron = 'Hexacosichoron';
export const cHexadecachoron = 'Hexadecachoron';
export const cPentachoron = 'Pentachoron';
export const cIcositetrachoron = 'Icositetrachoron';
export const cTesseract = 'Tesseract';

// Other Geometry
export const cSphericalCone = 'SphericalCone';

// Schläfli–Hess 4D Polytope
export const cIcosahedral_120Cell = 'Icosahedral_120Cell';
export const cSmallStellated_120Cell = 'SmallStellated_120Cell';
export const cGreat_120Cell = 'Great_120Cell';
export const cGrand_120Cell = 'Grand_120Cell';
export const cGreatStellated_120Cell = 'GreatStellated_120Cell';
export const cGrandStellated_120Cell = 'GrandStellated_120Cell';
export const cGreatGrand_120Cell = 'GreatGrand_120Cell';
export const cGreatIcosahedral_120Cell = 'GreatIcosahedral_120Cell';
export const cGrand_600Cell = 'Grand_600Cell';
export const cGreatGrandStellated_120Cell = 'GreatGrandStellated_120Cell';

// Uniform 4D Polytope
export const cRectified_5Cell = 'Rectified_5Cell';
export const cTruncated_5Cell = 'Truncated_5Cell';
export const cCantellated_5Cell = 'Cantellated_5Cell';
export const cRuncinated_5Cell = 'Runcinated_5Cell';
export const cRectifiedTesseract = 'RectifiedTesseract';
export const cTruncatedTesseract = 'TruncatedTesseract';
export const cCantellatedTesseract = 'CantellatedTesseract';
export const cRuncinatedTesseract = 'RuncinatedTesseract';
export const cRectified_16Cell = 'Rectified_16Cell';
export const cTruncated_16Cell = 'Truncated_16Cell';
export const cRectified_24Cell = 'Rectified_24Cell';
export const cTruncated_24Cell = 'Truncated_24Cell';
export const cCantellated_24Cell = 'Cantellated_24Cell';
export const cRuncinated_24Cell = 'Runcinated_24Cell';
export const cSnub_24Cell = 'Snub_24Cell';
export const cRectified_120Cell = 'Rectified_120Cell';
export const cTruncated_120Cell = 'Truncated_120Cell';
export const cCantellated_120Cell = 'Cantellated_120Cell';
export const cRuncinated_120Cell = 'Runcinated_120Cell';
export const cRectified_600Cell = 'Rectified_600Cell';
export const cTruncated_600Cell = 'Truncated_600Cell';
export const cCantellated_600Cell = 'Cantellated_600Cell';

// Prismatic Uniform Polychoron
export const cGrandAntiprism = 'GrandAntiprism';
export const cDuoprism = 'Duoprism';
export const cTetrahedralPrism = 'TetrahedralPrism';
export const cTruncatedTetrahedralPrism = 'TruncatedTetrahedralPrism';
export const cTruncatedCubicPrism = 'TruncatedCubicPrism';
export const cTruncatedOctahedralPrism = 'TruncatedOctahedralPrism';
export const cCuboctahedralPrism = 'CuboctahedralPrism';
export const cRhombicuboctahedralPrism = 'RhombicuboctahedralPrism';
export const cTruncatedCuboctahedralPrism = 'TruncatedCuboctahedralPrism';
export const cSnubCubicPrism = 'SnubCubicPrism';
export const cTruncatedDodecahedralPrism = 'TruncatedDodecahedralPrism';
export const cTruncatedIcosahedralPrism = 'TruncatedIcosahedralPrism';
export const cIcosidodecahedralPrism = 'IcosidodecahedralPrism';
export const cRhombicosidodecahedralPrism = 'RhombicosidodecahedralPrism';
export const cTruncatedIcosidodecahedralPrism = 'TruncatedIcosidodecahedralPrism';
export const cSnubDodecahedralPrism = 'SnubDodecahedralPrism';
export const cUniformAntiprismaticPrism = 'UniformAntiprismaticPrism';

// 5D Space, 5D Polytope and Uniform 5D Polytope
export const cRectified_5Simplex = 'Rectified_5Simplex';
export const cTruncated_5Simplex = 'Truncated_5Simplex';
export const cCantellated_5Simplex = 'Cantellated_5Simplex';
export const cRuncinated_5Simplex = 'Runcinated_5Simplex';
export const cStericated_5Simplex = 'Stericated_5Simplex';
export const c5Demicube = '5Demicube';
export const cTruncated_5Demicube = 'Truncated_5Demicube';
export const cCantellated_5Demicube = 'Cantellated_5Demicube';
export const cRuncinated_5Demicube = 'Runcinated_5Demicube';
export const cRectified_5Cube = 'Rectified_5Cube';
export const cTruncated_5Cube = 'Truncated_5Cube';
export const cCantellated_5Cube = 'Cantellated_5Cube';
export const cRuncinated_5Cube = 'Runcinated_5Cube';
export const cStericated_5Cube = 'Stericated_5Cube';
export const cRectified_5Orthoplex = 'Rectified_5Orthoplex';
export const cTruncated_5Orthoplex = 'Truncated_5Orthoplex';
export const cCantellated_5Orthoplex = 'Cantellated_5Orthoplex';
export const cRuncinated_5Orthoplex = 'Runcinated_5Orthoplex';

// 5D Honeycombs
export const c5CubicHoneycomb = '5CubicHoneycomb';
export const c5SimplexHoneycomb = '5SimplexHoneycomb';
export const cTruncated_5SimplexHoneycomb = 'Truncated_5SimplexHoneycomb';
export const c5DemicubicHoneycomb = '5DemicubicHoneycomb';

// 6D Space, 6D Polytope and Uniform 6D Polytope
export const cRectified_6Simplex = 'Rectified_6Simplex';
export const cTruncated_6Simplex = 'Truncated_6Simplex';
export const cCantellated_6Simplex = 'Cantellated_6Simplex';
export const cRuncinated_6Simplex = 'Runcinated_6Simplex';
export const cStericated_6Simplex = 'Stericated_6Simplex';
export const cPentellated_6Simplex = 'Pentellated_6Simplex';
export const c6Demicube = '6Demicube';
export const cTruncated_6Demicube = 'Truncated_6Demicube';
export const cCantellated_6Demicube = 'Cantellated_6Demicube';
export const cRuncinated_6Demicube = 'Runcinated_6Demicube';
export const cStericated_6Demicube = 'Stericated_6Demicube';
export const cRectified_6Cube = 'Rectified_6Cube';
export const cTruncated_6Cube = 'Truncated_6Cube';
export const cCantellated_6Cube = 'Cantellated_6Cube';
export const cRuncinated_6Cube = 'Runcinated_6Cube';
export const cStericated_6Cube = 'Stericated_6Cube';
export const cPentellated_6Cube = 'Pentellated_6Cube';
export const cRectified_6Orthoplex = 'Rectified_6Orthoplex';
export const cTruncated_6Orthoplex = 'Truncated_6Orthoplex';
export const cCantellated_6Orthoplex = 'Cantellated_6Orthoplex';
export const cRuncinated_6Orthoplex = 'Runcinated_6Orthoplex';
export const cStericated_6Orthoplex = 'Stericated_6Orthoplex';

// 6D Honeycomb
export const c6CubicHoneycomb = '6CubicHoneycomb';
export const c6SimplexHoneycomb = '6SimplexHoneycomb';
export const c6DemicubicHoneycomb = '6DemicubicHoneycomb';

// 7D Space, Uniform 7D Polytope
export const cRectified_7Simplex = 'Rectified_7Simplex';
export const cTruncated_7Simplex = 'Truncated_7Simplex';
export const cCantellated_7Simplex = 'Cantellated_7Simplex';
export const cRuncinated_7Simplex = 'Runcinated_7Simplex';
export const cStericated_7Simplex = 'Stericated_7Simplex';
export const cPentellated_7Simplex = 'Pentellated_7Simplex';
export const cHexicated_7Simplex = 'Hexicated_7Simplex';
export const c7Demicube = '7Demicube';
export const cTruncated_7Demicube = 'Truncated_7Demicube';
export const cCantellated_7Demicube = 'Cantellated_7Demicube';
export const cRuncinated_7Demicube = 'Runcinated_7Demicube';
export const cStericated_7Demicube = 'Stericated_7Demicube';
export const cPentellated_7Demicube = 'Pentellated_7Demicube';
export const cRectified_7Cube = 'Rectified_7Cube';
export const cTruncated_7Cube = 'Truncated_7Cube';
export const cCantellated_7Cube = 'Cantellated_7Cube';
export const cRuncinated_7Cube = 'Runcinated_7Cube';
export const cStericated_7Cube = 'Stericated_7Cube';
export const cPentellated_7Cube = 'Pentellated_7Cube';
export const cHexicated_7Cube = 'Hexicated_7Cube';
export const cRectified_7Orthoplex = 'Rectified_7Orthoplex';
export const cTruncated_7Orthoplex = 'Truncated_7Orthoplex';
export const cCantellated_7Orthoplex = 'Cantellated_7Orthoplex';
export const cRuncinated_7Orthoplex = 'Runcinated_7Orthoplex';
export const cStericated_7Orthoplex = 'Stericated_7Orthoplex';
export const cPentellated_7Orthoplex = 'Pentellated_7Orthoplex';

// 7D Honeycombs
export const c7CubicHoneycomb = '7CubicHoneycomb';
export const c7DemicubicHoneycomb = '7DemicubicHoneycomb';

// 8D Space, Uniform 8D Polytope
export const cRectified_8Simplex = 'Rectified_8Simplex';
export const cTruncated_8Simplex = 'Truncated_8Simplex';
export const cCantellated_8Simplex = 'Cantellated_8Simplex';
export const cRuncinated_8Simplex = 'Runcinated_8Simplex';
export const cStericated_8Simplex = 'Stericated_8Simplex';
export const cPentellated_8Simplex = 'Pentellated_8Simplex';
export const cHexicated_8Simplex = 'Hexicated_8Simplex';
export const cHeptellated_8Simplex = 'Heptellated_8Simplex';
export const cRectified_8Orthoplex = 'Rectified_8Orthoplex';
export const cTruncated_8Orthoplex = 'Truncated_8Orthoplex';
export const cCantellated_8Orthoplex = 'Cantellated_8Orthoplex';
export const cRuncinated_8Orthoplex = 'Runcinated_8Orthoplex';
export const cStericated_8Orthoplex = 'Stericated_8Orthoplex';
export const cPentellated_8Orthoplex = 'Pentellated_8Orthoplex';
export const cHexicated_8Orthoplex = 'Hexicated_8Orthoplex';
export const cRectified_8Cube = 'Rectified_8Cube';
export const cTruncated_8Cube = 'Truncated_8Cube';
export const cCantellated_8Cube = 'Cantellated_8Cube';
export const cRuncinated_8Cube = 'Runcinated_8Cube';
export const cStericated_8Cube = 'Stericated_8Cube';
export const cPentellated_8Cube = 'Pentellated_8Cube';
export const cHexicated_8Cube = 'Hexicated_8Cube';
export const cHeptellated_8Cube = 'Heptellated_8Cube';
export const c8Demicube = '8Demicube';
export const cTruncated_8Demicube = 'Truncated_8Demicube';
export const cCantellated_8Demicube = 'Cantellated_8Demicube';
export const cRuncinated_8Demicube = 'Runcinated_8Demicube';
export const cStericated_8Demicube = 'Stericated_8Demicube';
export const cPentellated_8Demicube = 'Pentellated_8Demicube';
export const cHexicated_8Demicube = 'Hexicated_8Demicube';

// 8D Honeycombs
export const c8CubicHoneycomb = '8CubicHoneycomb';
export const c8DemicubicHoneycomb = '8DemicubicHoneycomb';

// 9D Polytope
export const c9Demicube = '9Demicube';

// 10D Polytope
export const c10Demicube = '10Demicube';

// Geometry and other areas of mathematics
export const cAnnulus = 'Annulus';
export const cApollonianCircles = 'ApollonianCircles';
export const cArbelos = 'Arbelos';
export const cBorromeanRings = 'BorromeanRings';
export const cCircularSector = 'CircularSector';
export const cCircularSegment = 'CircularSegment';
export const cDeferent = 'Deferent';
export const cEpicycle = 'Epicycle';
export const cExTangentialQuadrilateral = 'ExTangentialQuadrilateral';
export const cHorocycle = 'Horocycle';
export const cHypotrochoid = 'Hypotrochoid';
export const cLune = 'Lune';
export const cPappusChain = 'PappusChain';
export const cPeaucellierLipkinLinkage = 'PeaucellierLipkinLinkage';
export const cRobbinsPentagon = 'RobbinsPentagon';
export const cSalinon = 'Salinon';
export const cSemicircle = 'Semicircle';
export const cSquircle = 'Squircle';
export const cSteinerChain = 'SteinerChain';
export const cBicentricQuadrilateral = 'BicentricQuadrilateral';

// Glyphs and Symbols
export const cCrescent = 'Crescent';
export const cVesicaPiscis = 'VesicaPiscis';
export const cArc = 'Arc';
export const cCubicHermiteCurve = 'CubicHermiteCurve';
export const cCurveOfConstantWidth = 'CurveOfConstantWidth';
export const cHedgehog = 'Hedgehog';
export const cParametricCurve = 'ParametricCurve';
export const cSpline = 'Spline';
export const cHermiteSpline = 'HermiteSpline';
export const cBetaSpline = 'BetaSpline';
export const cHigherOrderSpline = 'HigherOrderSpline';
export const cRay = 'Ray';
export const cRibaucourCurve = 'RibaucourCurve';

// Knots
export const cAdjustableGripHitch = 'AdjustableGripHitch';
export const cAdjustableSling = 'AdjustableSling';
export const cAlbrightKnot = 'AlbrightKnot';
export const cAlpineButterflyBend = 'AlpineButterflyBend';
export const cAplineButterflyLoop = 'AplineButterflyLoop';
export const cAnchorHitch = 'AnchorHitch';
export const cArborKnot = 'ArborKnot';
export const cAshleyBend = 'AshleyBend';
export const cAshleyStopper = 'AshleyStopper';
export const cAustralianBraidKnot = 'AustralianBraidKnot';
export const cBackSplice = 'BackSplice';
export const cBarrelHitch = 'BarrelHitch';
export const cBasketHitch = 'BasketHitch';
export const cBeerKnot = 'BeerKnot';
export const cBiminiTwistKnot = 'BiminiTwistKnot';
export const cBlakesHitch = 'BlakesHitch';
export const cBloodKnot = 'BloodKnot';
export const cBoomHitch = 'BoomHitch';
export const cBottleSling = 'BottleSling';
export const cBowTie = 'BowTie';
export const cBowlineKnot = 'BowlineKnot';
export const cBowlineOnABight = 'BowlineOnABight';
export const cBrummelSplice = 'BrummelSplice';
export const cBrummelSpliceDemo = 'BrummelSpliceDemo';
export const cBuntlineHitch = 'BuntlineHitch';
export const cButchersKnot = 'ButchersKnot';
export const cCarrickBend = 'CarrickBend';
export const cCarrickBendMat = 'CarrickBendMat';
export const cCelticKnot = 'CelticKnot';
export const cChainSinnet = 'ChainSinnet';
export const cChainSplice = 'ChainSplice';
export const cCleatHitch = 'CleatHitch';
export const cDockLine = 'DockLine';
export const cHalyard = 'Halyard';
export const cCloveHitch = 'CloveHitch';
export const cHitches = 'Hitches';
export const cLoops = 'Loops';
export const cRopeEnd = 'RopeEnd';
export const cCobraKnot = 'CobraKnot';
export const cCoilAttachedRope = 'CoilAttachedRope';
export const cCoilUnattachedRope = 'CoilUnattachedRope';
export const cCommonWipping = 'CommonWipping';
export const cConstrictor = 'Constrictor';
export const cConstrictorSlide = 'ConstrictorSlide';
export const cSlide = 'Slide';
export const cConstrictorHoward = 'ConstrictorHoward';
export const cHoward = 'Howard';
export const cConstrictorEnd = 'ConstrictorEnd';
export const cEnd = 'End';
export const cConstrictorFolding = 'ConstrictorFolding';
export const cFolding = 'Folding';
export const cConstrictorRopeEnd = 'ConstrictorRopeEnd';
export const cConstrictorTwist = 'ConstrictorTwist';
export const cTwist = 'Twist';
export const cCowHitch = 'CowHitch';
export const cCowHitchEnds = 'CowHitchEnds';
export const cChowHitchLoops = 'ChowHitchLoops';
export const cCrownKnot = 'CrownKnot';
export const cCrownSinnet = 'CrownSinnet';
export const cCurtainTieBack = 'CurtainTieBack';
export const cDavyKnot = 'DavyKnot';
export const cDistelHitch = 'DistelHitch';
export const cDoubleAlpineButterfly = 'DoubleAlpineButterfly';
export const cDoubleDavyKnot = 'DoubleDavyKnot';
export const cDoubleDragonLoop = 'DoubleDragonLoop';
export const cDoubleFishermans = 'DoubleFishermans';
export const cDoubleMatthewWalker = 'DoubleMatthewWalker';
export const cDoubleOverhandStopper = 'DoubleOverhandStopper';
export const cDoubleTurtleKnot = 'DoubleTurtleKnot';
export const cDropperLoopKnot = 'DropperLoopKnot';
export const cEggLoopKnot = 'EggLoopKnot';
export const cEstarStopperKnot = 'EstarStopperKnot';
export const cEyeSplice = 'EyeSplice';
export const cFarmersLoopKnot = 'FarmersLoopKnot';
export const cFarrimondHitch = 'FarrimondHitch';
export const cFgKnot = 'FgKnot';
export const cFiadorKnot = 'FiadorKnot';
export const cFigure8Bend = 'Figure8Bend';
export const cFigure8DirectionLoop = 'Figure8DirectionLoop';
export const cFigure8DoubleLoop = 'Figure8DoubleLoop';
export const cFigure8Flake = 'Figure8Flake';
export const cFigure8FollowLoop = 'Figure8FollowLoop';
export const cFigure8Loop = 'Figure8Loop';
export const cFigure9Loop = 'Figure9Loop';
export const cFlatOverhandBend = 'FlatOverhandBend';
export const cFlemishFlakeCoil = 'FlemishFlakeCoil';
export const c4StrandSinnet = '4StrandSinnet';
export const c4StrandSquareSinnet = '4StrandSquareSinnet';
export const cFourInHandNeckTie = 'FourInHandNeckTie';
export const cFrenchSinnetOne = 'FrenchSinnetOne';
export const cFrenchSinnetTwo = 'FrenchSinnetTwo';
export const cGirthHitch = 'GirthHitch';
export const cGnatHitch = 'GnatHitch';
export const cGrogSlidingSplice = 'GrogSlidingSplice';
export const cGrogSling = 'GrogSling';
export const cHalfHitch = 'HalfHitch';
export const cHalfKnot = 'HalfKnot';
export const cHalfWindsorNecktie = 'HalfWindsorNecktie';
export const cHalterHitch = 'HalterHitch';
export const cHalyardHitch = 'HalyardHitch';
export const cHandcuffKnot = 'HandcuffKnot';
export const cHastyHarness = 'HastyHarness';
export const cHeavingLineKnot = 'HeavingLineKnot';
export const cHighwaymansHitch = 'HighwaymansHitch';
export const cHondaKnot = 'HondaKnot';
export const cHuntersBend = 'HuntersBend';
export const cIcicleHitchEnd = 'IcicleHitchEnd';
export const cIcicleHitchLoop = 'IcicleHitchLoop';
export const cImproveClinchKnot = 'ImproveClinchKnot';
export const cKlemheistKnot = 'KlemheistKnot';
export const cLanyardKnot = 'LanyardKnot';
export const cLashingDiagonal = 'LashingDiagonal';
export const cLashingRound = 'LashingRound';
export const cLashingSheer = 'LashingSheer';
export const cLashingSquare = 'LashingSquare';
export const cLashingTripod = 'LashingTripod';
export const cLigatureInstrument = 'LigatureInstrument';
export const cLigatureOneHand = 'LigatureOneHand';
export const cLigatureTwoHands = 'LigatureTwoHands';
export const cLightermansHitch = 'LightermansHitch';
export const cLongBurySplice = 'LongBurySplice';
export const cManagerHitch = 'ManagerHitch';
export const cMarlinSpikeHitch = 'MarlinSpikeHitch';
export const cMastheadKnotMat = 'MastheadKnotMat';
export const cMcdonaldBrummel = 'McdonaldBrummel';
export const cMidshipmansHitch = 'MidshipmansHitch';
export const cMillersKnot = 'MillersKnot';
export const cMonkeysFistKnot = 'MonkeysFistKnot';
export const cMooringsHitch = 'MooringsHitch';
export const cMunterMuleCombo = 'MunterMuleCombo';
export const cNailKnot = 'NailKnot';
export const cNonSlipMonoKnot = 'NonSlipMonoKnot';
export const cNooseKnot = 'NooseKnot';
export const cOceanPlaitMat = 'OceanPlaitMat';
export const cOneHandedBowline = 'OneHandedBowline';
export const cOrvisKnot = 'OrvisKnot';
export const cOverhandKnot = 'OverhandKnot';
export const cPackageTyingKnot = 'PackageTyingKnot';
export const cPalomarKnot = 'PalomarKnot';
export const cPerfectionLoop = 'PerfectionLoop';
export const cPileHitch = 'PileHitch';
export const cPoachersKnot = 'PoachersKnot';
export const cPrattNecktie = 'PrattNecktie';
export const cPrusikKnot = 'PrusikKnot';
export const cPurcellPrusikKnot = 'PurcellPrusikKnot';
export const cQuickHitch = 'QuickHitch';
export const cRadiumReleaseHitch = 'RadiumReleaseHitch';
export const cRapalaKnot = 'RapalaKnot';
export const cRatTailStopperKnot = 'RatTailStopperKnot';
export const cRingHitch = 'RingHitch';
export const cRollingHitch = 'RollingHitch';
export const cRoundTurnHitches = 'RoundTurnHitches';
export const cRunningBowline = 'RunningBowline';
export const cSailmakersWhipping = 'SailmakersWhipping';
export const cSanDiegoJamKnot = 'SanDiegoJamKnot';
export const cSheepShank = 'SheepShank';
export const cSheetBend = 'SheetBend';
export const cShoelaceBow = 'ShoelaceBow';
export const cShoelaceBowFieggen = 'ShoelaceBowFieggen';
export const cShoelaceBowSurgeon = 'ShoelaceBowSurgeon';
export const cShortSplice = 'ShortSplice';
export const cSiberianHitch = 'SiberianHitch';
export const cSingleRopeBraid = 'SingleRopeBraid';
export const cSlidingDoubleFishermans = 'SlidingDoubleFishermans';
export const cSlimBeautyKnot = 'SlimBeautyKnot';
export const cSlipKnot = 'SlipKnot';
export const cSnellKnot = 'SnellKnot';
export const cSoftShackle = 'SoftShackle';
export const cSoftShackleEdwards = 'SoftShackleEdwards';
export const cSoftShackleStronger = 'SoftShackleStronger';
export const cSpanishBowline = 'SpanishBowline';
export const cSquareKnot = 'SquareKnot';
export const cStevedoreStopper = 'StevedoreStopper';
export const cStopperLoop = 'StopperLoop';
export const cStrangleKnotEnd = 'StrangleKnotEnd';
export const cStrangleKnotOverhand = 'StrangleKnotOverhand';
export const cSuperMunterHitch = 'SuperMunterHitch';
export const cSurgeonsJoinKnot = 'SurgeonsJoinKnot';
export const cSurgeonsLoopKnot = 'SurgeonsLoopKnot';
export const cSurgicalSlipTie = 'SurgicalSlipTie';
export const cSurgicalTieInsturmental = 'SurgicalTieInsturmental';
export const cSurgicalTieOneHand = 'SurgicalTieOneHand';
export const cSurgicalTieTwoHands = 'SurgicalTieTwoHands';
export const cTensionlessHitch = 'TensionlessHitch';
export const c3StrandBraid = '3StrandBraid';
export const c3StrandBraidAlternate = '3StrandBraidAlternate';
export const cTimberHitch = 'TimberHitch';
export const cTreeSwing = 'TreeSwing';
export const cTrileneKnot = 'TrileneKnot';
export const cTruckersHitch = 'TruckersHitch';
export const cTruckersHitchQuick = 'TruckersHitchQuick';
export const cTumbleHitch = 'TumbleHitch';
export const cTurksHead = 'TurksHead';
export const cTwoHalfHitches = 'TwoHalfHitches';
export const cUnderwritersKnot = 'UnderwritersKnot';
export const cUniKNot = 'UniKNot';
export const cWallCrownKnot = 'WallCrownKnot';
export const cWallKnot = 'WallKnot';
export const cWaterBowline = 'WaterBowline';
export const cWaterKnot = 'WaterKnot';
export const cWestCountryWipping = 'WestCountryWipping';
export const cWhoopieSling = 'WhoopieSling';
export const cWindsorNecktie = 'WindsorNecktie';
export const cZeppelinBend = 'ZeppelinBend';
