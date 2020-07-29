"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctypeText = exports.cTestRunTime = exports.cScriptRunTime = exports.cVersionControl = exports.cConfigurationElements = exports.cConfigurationElement = exports.cConfigurationName = exports.cFileNumber = exports.cAccessLevel = exports.cShareEmail = exports.cTestDataFileName = exports.cProjectDescription = exports.cProjectName = exports.cPassword = exports.cUsername = exports.cRowNumber = exports.cIngestionCompleteDwellTime = exports.cProcessingTimeout = exports.cTestData = exports.cInnerHTML = exports.cinnerHTML = exports.cInnerText = exports.cinnerText = exports.cOperatingSystem = exports.cVisibilityCheck = exports.cvisibilityCheck = exports.cDeltaT = exports.cFileCounter = exports.cLogFileEnabled = exports.cTestDataPath = exports.cResultsLogFilePathAndName = exports.cExecutionJournalFilePathAndName = exports.cDataLogFilePathAndName = exports.cLogFilePathAndName = exports.cDwellTime = exports.cTimeoutOverride = exports.cSpecialCharacters = exports.cAllowableCharacters = exports.cParallelMultiUnified = exports.cSynchSingular = exports.cAsynchSingular = exports.cPreValidateFileName = exports.cFileNames = exports.cFilenames = exports.cfilenames = exports.cFileName = exports.cFilename = exports.cfilename = exports.cFileTypes = exports.cfilesLists = exports.cTestRunID = exports.cHostName = exports.cBrowserName = exports.cRunTime = exports.cRuntime = exports.cEndKeywordTimeStamp = exports.cBeginKeywordTimeStamp = exports.cEndPageScriptTimeStamp = exports.cBeginPageScriptTimeStamp = exports.cEndTestTimeStamp = exports.cBeginTestTimeStamp = exports.cEndScriptTimeStamp = exports.cBeginScriptTimeStamp = exports.cScriptDateTimeStamp = exports.cTestTimeStamp = exports.cKeywordTimeStamp = exports.cScriptTimeStamp = exports.cScriptDateStamp = exports.cDateTimeStamp = exports.cPageScriptTimeStamp = exports.cTimeStamp = exports.cIntermediatePath = exports.cPageScript = exports.cEnvironmentRowNumber = exports.cEnvironmentRow = exports.cMasterRowNumber = exports.cNumberOfRows = exports.cTestAutomation = exports.cDebugFiles = exports.cDebugFunctions = exports.cDebugSelectors = exports.cDebugBrowserActions = exports.cJournalBrowserActions = exports.cLogBrowserActions = exports.cDebugKeywords = exports.cDebugPageData = exports.cDebugPageScripts = exports.cDebugTestData = exports.cDebugTestExhaustive = exports.cDebugPage = exports.cDebugTest = exports.cWithText = exports.cwithText = exports.cUnderline = exports.cunderline = exports.cSTYLE = exports.cITERATION = exports.cENVIRONMENT = exports.cLOG = exports.cENV = void 0;
exports.cHOOPS = exports.cHoops = exports.cDWG = exports.cDraft = exports.cDocuments = exports.cDocument = exports.cCatia = exports.cDataFontBackgroundColor = exports.cMessageFontBackgroundColor = exports.cFunctionFontBackgroundColor = exports.cModuleFontBackgroundColor = exports.cDataFontColor = exports.cMessageFontColor = exports.cFunctionFontColor = exports.cModuleFontColor = exports.cDataFontStyle = exports.cMessageFontStyle = exports.cFunctionFontStyle = exports.cModuleFontStyle = exports.cLogWarnings = exports.cLogBasicSystemEvents = exports.creturnDataIs = exports.cinputMetaDataIs = exports.cinputDataIs = exports.cEND_Function = exports.cBEGIN_Function = exports.cExportConst = exports.cexportconst = exports.cHexValue = exports.cStandardDeviation = exports.cCommandWorkflows = exports.cCommandsAliases = exports.cFramework = exports.cframework = exports.crulesLibrary = exports.cBusinessRules = exports.cbusinessRules = exports.cBusinessRule = exports.cbusinessRule = exports.cColorName = exports.cColorData = exports.cConfiguration_Colors = exports.cBackground = exports.cbackground = exports.creleaseApplication = exports.cdeployApplication = exports.cSpaceIsColonSpace = exports.cBrowserRefresh = exports.cNavigateTo = exports.cnavigateTo = exports.cPage_Keywords = exports.cBackSlash = exports.cForwardSlash = exports.cVideoLogs = exports.cDashboardLogs = exports.cCarriageReturn = exports.cAlphabeticCharacter = exports.cBooleanValue = exports.cNumberInRange = exports.cNumericCharacter = exports.cAlphaNumericCharacter = exports.cLetterOrNumberOrSpecialCharacter = exports.cLetterOrSpecialCharacter = exports.cLetterOr = exports.cInvalidEmail = exports.cValidEmail = exports.cvalidEmail = exports.cSpecialCharacterCodeByLength = exports.cAlphaNumericCodeWithSpecialCharactersByLength = exports.cAlphaNumericCodeWithSpecialCharacters = exports.cNumericCodeByLength = exports.cNumericCode = exports.cAlphaNumericCodeByLength = exports.cAlphaNumericCode = exports.cAlphaNumeric = exports.cTextWithSpecialCharactersByLength = exports.cTextWithSpecialCharacters = exports.cTextByLength = exports.cWithSpecialCharacters = exports.cSpecialCharacter = exports.cByLength = exports.cLowerCase = exports.cUpperCase = exports.cMixedCase = exports.crandomlyGenerate = exports.cgenerateRandom = exports.caddFilter = exports.caddSibling = exports.caddNth = exports.caddFindValue = exports.caddParent = exports.caddTimeout = exports.caddWithText = exports.cTestBureau = exports.cUnderscore = exports.cchildElementCount = exports.cselectorTimeout = exports.cAbreviatedSelectorsInLogs = exports.cAbreviatedSelectors = exports.cTypeText = void 0;
exports.cItaly = exports.cIsrael = exports.cIreland = exports.cIraq = exports.cIran = exports.cIndonesia = exports.cIndia = exports.cIceland = exports.cHungary = exports.cHonduras = exports.cHolySee = exports.cHerzegovina = exports.cHaiti = exports.cGuyana = exports.cGuineaBissau = exports.cGuinea = exports.cGuatemala = exports.cGrenada = exports.cGreece = exports.cGhana = exports.cGermany = exports.cGerman = exports.cGeorgia = exports.cGambia = exports.cGabon = exports.cFrance = exports.cFinland = exports.cFiji = exports.cEthiopia = exports.cEswatini = exports.cEstonia = exports.cEritrea = exports.cEquatorialGuinea = exports.cElSalvador = exports.cEgypt = exports.cEcuador = exports.cDominicanRepublic = exports.cDominica = exports.cDjibouti = exports.cDenmark = exports.cDemocraticRepublicOfTheCongo = exports.cCzechia = exports.cCyprus = exports.cCuba = exports.cCroatia = exports.cCostaRica = exports.cCongo = exports.cComoros = exports.cColombia = exports.cChina = exports.cChile = exports.cChad = exports.cCentralAfricanRepublic = exports.cCanada = exports.cCameroon = exports.cCambodia = exports.cCaboVerde = exports.cCotedlvoire = exports.cBurundi = exports.cBurkinaFaso = exports.cBulgaria = exports.cBrunei = exports.cBrazil = exports.cBotswana = exports.cBosnia = exports.cBolivia = exports.cBhutan = exports.cBenin = exports.cBelize = exports.cBelgium = exports.cBelarus = exports.cBarbuda = exports.cBarbados = exports.cBangladesh = exports.cBahrain = exports.cBahamas = exports.cAzerbaijan = exports.cAustria = exports.cAustralia = exports.cArmenia = exports.cArgentina = exports.cAntigua = exports.cAngola = exports.cAndorra = exports.cAlgeria = exports.cAlbania = exports.cAfghanistan = exports.cVRML = exports.cVrml = exports.cvrml = exports.cSolidWorks = exports.cSolidEdge = exports.cRhino = exports.cProE = exports.cParasolid = exports.cNX = exports.cNeutral = exports.cInventor = exports.cImages = exports.cImage = void 0;
exports.cTuvalu = exports.cTurkmenistan = exports.cTurkey = exports.cTunisia = exports.cTrinidadAndTabago = exports.cTonga = exports.cTogo = exports.cTimorLeste = exports.cThailand = exports.cTanzania = exports.cTajikistan = exports.cSyria = exports.cSwitzerland = exports.cSweden = exports.cSuriname = exports.cSudan = exports.cSriLanka = exports.cSpain = exports.cSouthSudan = exports.cSouthKorea = exports.cSouthAfrica = exports.cSomalia = exports.cSolomonIslands = exports.cSlovenia = exports.cSlovakia = exports.cSingapore = exports.cSierraLeone = exports.cSeychelles = exports.cSerbia = exports.cSenegal = exports.cSaudiArabia = exports.cSaoTome = exports.cSanMarino = exports.cSomoa = exports.cSaintVincent = exports.cSaintLucia = exports.cSaintKitts = exports.cRwanda = exports.cRussia = exports.cRomania = exports.cQatar = exports.cPrincipe = exports.cPortugal = exports.cPoland = exports.cPhilippines = exports.cPeru = exports.cParaguay = exports.cPapuaNewGuinea = exports.cPanama = exports.cPalestine = exports.cPalau = exports.cPakistan = exports.cOman = exports.cNorway = exports.cNorthMacedonia = exports.cNorthKorea = exports.cNigeria = exports.cNiger = exports.cNicaragua = exports.cNevis = exports.cNewZealand = exports.cNetherlands = exports.cNepal = exports.cNauru = exports.cNamibia = exports.cMyanmar = exports.cMozambique = exports.cMorocco = exports.cMontenegro = exports.cMongolia = exports.cMonaco = exports.cMoldova = exports.cMicronesia = exports.cMexico = exports.cMauritius = exports.cMauritania = exports.cMarshallIslands = exports.cMalta = exports.cMali = exports.cMaldives = exports.cMalaysia = exports.cMalawi = exports.cMadagascar = exports.cLuxembourg = exports.cLithuania = exports.cLiechtenstein = exports.cLibya = exports.cLiberia = exports.cLesotho = exports.cLebanon = exports.cLatvia = exports.cLaos = exports.cKyrgyzstan = exports.cKuwait = exports.cKiribati = exports.cKenya = exports.cKazakhstan = exports.cJordan = exports.cJapan = exports.cJamaica = void 0;
exports.cunits_constants_js = exports.csystem_constants_js = exports.cshape_constants_js = exports.cphonics_constants_js = exports.cnumeric_constants_js = exports.cisotope_constants_js = exports.cgeneric_constants_js = exports.celement_constants_js = exports.ccolor_constants_js = exports.cbasic_constants_js = exports.cWordConstantsValidation = exports.cUnitsConstantsValidation = exports.cSystemConstantsValidation = exports.cShapeConstantsValidation = exports.cPhonicsConstantsValidation = exports.cNumericConstantsValidation = exports.cIsotopeConstantsValidation = exports.cGenericConstantsValidation = exports.cElementConstantsValidation = exports.cColorConstantsValidation = exports.cBasicConstantsValidation = exports.cConstantsValidationData = exports.cCommandQueue = exports.cclientRulesLibrary = exports.cConstantsPathActual = exports.cLocatorsDataPath = exports.cKeywordsDataPath = exports.cWorkflowDataPath = exports.cPageDataPath = exports.cCtempPath = exports.cDataPath = exports.cApplicationDescription = exports.cApplicationVersionNumber = exports.cConfigurationPath = exports.cApplicationCleanedRootPath = exports.cApplicationRootPath = exports.cApplicationName = exports.cctrl_z = exports.cctrl_y = exports.cctrl_x = exports.cctrl_w = exports.cctrl_v = exports.cctrl_u = exports.cctrl_t = exports.cctrl_s = exports.cctrl_r = exports.cctrl_q = exports.cctrl_p = exports.cctrl_o = exports.cctrl_n = exports.cctrl_m = exports.cctrl_l = exports.cctrl_k = exports.cctrl_j = exports.cctrl_i = exports.cctrl_h = exports.cctrl_g = exports.cctrl_f = exports.cctrl_e = exports.cctrl_d = exports.cctrl_c = exports.cctrl_b = exports.cctrl_a = exports.cPREPROD = exports.cPreProd = exports.cPRE = exports.cPre = exports.cPROD = exports.cProd = exports.cDEV = exports.cQA = exports.cButton = exports.cSpanish = exports.cRussian = exports.cPortuguese = exports.cPolish = exports.cMiscellaneous = exports.cKorean = exports.cJapanese = exports.cItalian = exports.cHungarian = exports.cFrench = exports.cEnglish = exports.cCzech = exports.cChineseTraditional = exports.cChineseSimplified = exports.cChinese = exports.cZimbabwe = exports.cZambia = exports.cYemen = exports.cVietnam = exports.cVenezuela = exports.cVanuatu = exports.cUzbekistan = exports.cUruguay = exports.cUnitedStatesOfAmerica = exports.cUnitedKingdom = exports.cUnitedArabEmirates = exports.cUkraine = exports.cUganda = void 0;
exports.cgenerateRandomSpecialCharacterCodeByLength1 = exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomNumericCodeByLength2 = exports.cgenerateRandomNumericCodeByLength1 = exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomLowerCaseTextByLength2 = exports.cgenerateRandomLowerCaseTextByLength1 = exports.cgenerateRandomUpperCaseTextByLength2 = exports.cgenerateRandomUpperCaseTextByLength1 = exports.cgenerateRandomMixedCaseTextByLength2 = exports.cgenerateRandomMixedCaseTextByLength1 = exports.creplaceCharacterAtIndex = exports.cisEven = exports.cisOdd = exports.cgetFirstTopLevelFolderFromPath = exports.cremoveXnumberOfFoldersFromEndOfPath = exports.creplaceDoublePercentWithMessage = exports.cparseSystemRootPath = exports.cgetKeywordNameFromDataContextName = exports.cgetDataCatagoryDetailNameFromDataContextName = exports.cgetDataCatagoryFromDataContextName = exports.cvalidateConstantsDataValidationLineItemName = exports.cvalidateConstantsDataValidation = exports.cdoesArrayContainFilename = exports.cascertainMatchingFilenames = exports.cremoveCharacterFromArray = exports.cdoesArrayContainCharacter = exports.cdoesArrayContainLowerCaseConsolidatedString = exports.ccompareSimplifiedAndConsolidatedStrings = exports.csimplifyAndConsolidateString = exports.cmapWordToCamelCaseWord = exports.cconvertArrayToCamelCaseString = exports.cconvertCamelCaseStringToArray = exports.caggregateNumericalDifferenceBetweenTwoStrings = exports.cgetValueFromAssignmentOperationString = exports.cremoveFileExtensionFromFileName = exports.cremoveDotFromFileExtension = exports.cgetFileExtension = exports.cgetFileNameFromPath = exports.cconvertStringToUpperCase = exports.cconvertStringToLowerCase = exports.ccleanCarriageReturnFromString = exports.creplaceCharacterWithCharacter = exports.creplaceColonWithUnderscore = exports.creplaceSpacesWithPlus = exports.cgetUserNameFromEmail = exports.cswapDoubleBackSlashToSingleBackSlash = exports.cswapDoubleForwardSlashToSingleForwardSlash = exports.cswapBackSlashToForwardSlash = exports.cswapForwardSlashToBackSlash = exports.csingleQuoteSwapAfterEquals = exports.cisString = exports.cisFloat = exports.cisInteger = exports.cisBoolean = exports.cdetermineObjectDataType = exports.cstringToDataType = exports.cstringToBoolean = exports.cEcho = exports.cecho = exports.cClearCommandPerformanceDataAfterAnalysis = exports.cCommandsPerformanceAnalysisStack = exports.cCommandNamesPerformanceTrackingStack = exports.cCommandPerformanceTrackingStack = exports.cClearBusinessRulesPerformanceDataAfterAnalysis = exports.cBusinessRulesPerformanceAnalysisStack = exports.cBusinessRuleNamesPerformanceTrackingStack = exports.cBusinessRulePerformanceTrackingStack = exports.cEndTimeStampVariableName = exports.cBeginTimeStampVariableName = exports.cTimeStampVariableName = exports.cItemsIndividuallySynch = exports.cEndDateTimeStamp = exports.cBeginDateTimeStamp = exports.cEnableConstantsValidation = exports.cEnableCommandPerformanceMetrics = exports.cEnableBusinessRulePerformanceMetrics = exports.cEnableBusinessRuleOutput = exports.cTertiaryCommandDelimiter = exports.cSecondaryCommandDelimiter = exports.cPrimaryCommandDelimiter = exports.cFigletFont = exports.cArgumentDrivenInterface = exports.cword_constants_js = void 0;
exports.cStartupWorkflow = exports.cvalidateConstants = exports.cconvertColors = exports.ccommandMetrics = exports.cbusinessRulesMetrics = exports.ccommandGenerator = exports.cprintDataHive = exports.ccommandSequencer = exports.cworkflowHelp = exports.cEchoCommand = exports.cechoCommand = exports.cClientWorkflowsPath = exports.cSystemWorkflowsPath = exports.cClientCommandsAliasesPath = exports.cSystemCommandsAliasesPath = exports.cSystemWorkflowsActualPath = exports.cSystemCommandsAliasesActualPath = exports.chex2rgbConversion = exports.cconvertNumberToLowerCaseLetter = exports.cconvertNumberToUpperCaseLetter = exports.crandomlyGenerateUpperCaseLetter2 = exports.crandomlyGenerateUpperCaseLetter1 = exports.crandomlyGenerateLowerCaseLetter2 = exports.crandomlyGenerateLowerCaseLetter1 = exports.crandomlyGenerateMixedCaseAlphabeticCharacter2 = exports.crandomlyGenerateMixedCaseAlphabeticCharacter1 = exports.crandomlyGenerateBooleanValue2 = exports.crandomlyGenerateBooleanValue1 = exports.crandomlyGenerateNumberInRange2 = exports.crandomlyGenerateNumberInRange1 = exports.crandomlyGenerateSpecialCharacter2 = exports.crandomlyGenerateSpecialCharacter1 = exports.crandomlyGenerateNumericCharacter2 = exports.crandomlyGenerateNumericCharacter1 = exports.crandomlyGenerateLowerCaseAlphaNumericCharacter2 = exports.crandomlyGenerateLowerCaseAlphaNumericCharacter1 = exports.crandomlyGenerateUpperCaseAlphaNumericCharacter2 = exports.crandomlyGenerateUpperCaseAlphaNumericCharacter1 = exports.crandomlyGenerateMixedCaseAlphaNumericCharacter2 = exports.crandomlyGenerateMixedCaseAlphaNumericCharacter1 = exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = exports.cgenerateInvalidEmail2 = exports.cgenerateInvalidEmail1 = exports.cgenerateValidEmail2 = exports.cgenerateValidEmail1 = exports.cgenerateRandomSpecialCharacterCodeByLength2 = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var n = _interopRequireWildcard(require("./numeric.constants"));

var w = _interopRequireWildcard(require("./word.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file system.constants.js
 * @module system-constants
 * @description Contains system defined acronyms, many of them derived from the basic-constants.
 * Also included are other constants like countries, named spoken languages.
 * Also included are common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Miscelaneious
var cENV = b.cEN + b.cV; // ENV

exports.cENV = cENV;
var cLOG = b.cLO + b.cG; // LOG

exports.cLOG = cLOG;
var cENVIRONMENT = p.cENV + b.cIR + b.cON + p.cMENT; // ENVIRONMENT

exports.cENVIRONMENT = cENVIRONMENT;
var cITERATION = b.cIT + b.cER + b.cAT + b.cIO + b.cN; // ITERATION

exports.cITERATION = cITERATION;
var cSTYLE = b.cST + b.cYL + b.cE; // STYLE
// Compound System Words

exports.cSTYLE = cSTYLE;
var cunderline = w.cunder + w.cline; // underline

exports.cunderline = cunderline;
var cUnderline = w.cUnder + w.cline; // Underline

exports.cUnderline = cUnderline;
var cwithText = w.cwith + w.cText; // withText

exports.cwithText = cwithText;
var cWithText = w.cWith + w.cText; // WithText

exports.cWithText = cWithText;
var cDebugTest = w.cDebug + w.cTest; // DebugTest

exports.cDebugTest = cDebugTest;
var cDebugPage = w.cDebug + w.cPage; // DebugPage

exports.cDebugPage = cDebugPage;
var cDebugTestExhaustive = cDebugTest + w.cExhaustive; // DebugTestExhaustive

exports.cDebugTestExhaustive = cDebugTestExhaustive;
var cDebugTestData = cDebugTest + w.cData; // DebugTestData

exports.cDebugTestData = cDebugTestData;
var cDebugPageScripts = cDebugPage + w.cScripts; // DebugPageScripts

exports.cDebugPageScripts = cDebugPageScripts;
var cDebugPageData = cDebugPage + w.cData; // DebugPageData

exports.cDebugPageData = cDebugPageData;
var cDebugKeywords = w.cDebug + w.cKeywords; // DebugKeywords

exports.cDebugKeywords = cDebugKeywords;
var cLogBrowserActions = w.cLog + w.cBrowser + w.cActions; // LogBrowserActions

exports.cLogBrowserActions = cLogBrowserActions;
var cJournalBrowserActions = w.cJournal + w.cBrowser + w.cActions; // JournalBrowserActions

exports.cJournalBrowserActions = cJournalBrowserActions;
var cDebugBrowserActions = w.cDebug + w.cBrowser + w.cActions; // DebugBrowserActions

exports.cDebugBrowserActions = cDebugBrowserActions;
var cDebugSelectors = w.cDebug + w.cSelectors; // DebugSelectors

exports.cDebugSelectors = cDebugSelectors;
var cDebugFunctions = w.cDebug + w.cFunctions; // DebugFunctions

exports.cDebugFunctions = cDebugFunctions;
var cDebugFiles = w.cDebug + w.cFiles; // DebugFiles

exports.cDebugFiles = cDebugFiles;
var cTestAutomation = w.cTest + w.cAutomation; // TestAutomation

exports.cTestAutomation = cTestAutomation;
var cNumberOfRows = w.cNumber + w.cOf + w.cRows; // NumberOfRows

exports.cNumberOfRows = cNumberOfRows;
var cMasterRowNumber = w.cMaster + w.cRow + w.cNumber; // MasterRowNumber

exports.cMasterRowNumber = cMasterRowNumber;
var cEnvironmentRow = w.cEnvironment + w.cRow; // EnvironmentRow

exports.cEnvironmentRow = cEnvironmentRow;
var cEnvironmentRowNumber = cEnvironmentRow + w.cNumber; // EnvironmentRowNumber

exports.cEnvironmentRowNumber = cEnvironmentRowNumber;
var cPageScript = w.cPage + w.cScript; // PageScript

exports.cPageScript = cPageScript;
var cIntermediatePath = w.cIntermediate + w.cPath; // IntermediatePath

exports.cIntermediatePath = cIntermediatePath;
var cTimeStamp = w.cTime + w.cStamp; // TimeStamp

exports.cTimeStamp = cTimeStamp;
var cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp

exports.cPageScriptTimeStamp = cPageScriptTimeStamp;
var cDateTimeStamp = w.cDate + cTimeStamp; // DateTimeStamp

exports.cDateTimeStamp = cDateTimeStamp;
var cScriptDateStamp = w.cScript + w.cDate + w.cStamp; // ScriptDateStamp

exports.cScriptDateStamp = cScriptDateStamp;
var cScriptTimeStamp = w.cScript + cTimeStamp; // ScriptTimeStamp

exports.cScriptTimeStamp = cScriptTimeStamp;
var cKeywordTimeStamp = w.cKeyword + cTimeStamp; // KeywordTimeStamp

exports.cKeywordTimeStamp = cKeywordTimeStamp;
var cTestTimeStamp = w.cTest + cTimeStamp; // TestTimeStamp

exports.cTestTimeStamp = cTestTimeStamp;
var cScriptDateTimeStamp = w.cScript + cDateTimeStamp; // ScriptDateTimeStamp

exports.cScriptDateTimeStamp = cScriptDateTimeStamp;
var cBeginScriptTimeStamp = w.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp

exports.cBeginScriptTimeStamp = cBeginScriptTimeStamp;
var cEndScriptTimeStamp = w.cEnd + cScriptTimeStamp; // EndScriptTimeStamp

exports.cEndScriptTimeStamp = cEndScriptTimeStamp;
var cBeginTestTimeStamp = w.cBegin + cTestTimeStamp; // BeginTestTimeStamp

exports.cBeginTestTimeStamp = cBeginTestTimeStamp;
var cEndTestTimeStamp = w.cEnd + cTestTimeStamp; // EndTestTimeStamp

exports.cEndTestTimeStamp = cEndTestTimeStamp;
var cBeginPageScriptTimeStamp = w.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp

exports.cBeginPageScriptTimeStamp = cBeginPageScriptTimeStamp;
var cEndPageScriptTimeStamp = w.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp

exports.cEndPageScriptTimeStamp = cEndPageScriptTimeStamp;
var cBeginKeywordTimeStamp = w.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp

exports.cBeginKeywordTimeStamp = cBeginKeywordTimeStamp;
var cEndKeywordTimeStamp = w.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp

exports.cEndKeywordTimeStamp = cEndKeywordTimeStamp;
var cRuntime = w.cRun + w.ctime; // Runtime

exports.cRuntime = cRuntime;
var cRunTime = w.cRun + w.cTime; // RunTime

exports.cRunTime = cRunTime;
var cBrowserName = w.cBrowser + w.cName; // BrowserName

exports.cBrowserName = cBrowserName;
var cHostName = w.cHost + w.cName; // HostName

exports.cHostName = cHostName;
var cTestRunID = w.cTest + w.cRun + w.cID; // TestRunID

exports.cTestRunID = cTestRunID;
var cfilesLists = w.cfiles + w.cLists; // filesLists

exports.cfilesLists = cfilesLists;
var cFileTypes = w.cFile + w.cTypes; // FileTypes

exports.cFileTypes = cFileTypes;
var cfilename = w.cfile + w.cname; // filename

exports.cfilename = cfilename;
var cFilename = w.cFile + w.cname; // Filename

exports.cFilename = cFilename;
var cFileName = w.cFile + w.cName; // FileName

exports.cFileName = cFileName;
var cfilenames = cfilename + b.cs; // filenames

exports.cfilenames = cfilenames;
var cFilenames = cFilename + b.cs; // Filenames

exports.cFilenames = cFilenames;
var cFileNames = cFileName + b.cs; // FileNames

exports.cFileNames = cFileNames;
var cPreValidateFileName = p.cPre + w.cValidate + cFileName; // PreValidateFileName

exports.cPreValidateFileName = cPreValidateFileName;
var cAsynchSingular = w.cAsynch + w.cSingular; // AsynchSingular

exports.cAsynchSingular = cAsynchSingular;
var cSynchSingular = w.cSynch + w.cSingular; // SynchSingular

exports.cSynchSingular = cSynchSingular;
var cParallelMultiUnified = w.cParallel + w.cMulti + w.cUnified; // ParallelMultiUnified

exports.cParallelMultiUnified = cParallelMultiUnified;
var cAllowableCharacters = w.cAllowable + w.cCharacters; // AllowableCharacters

exports.cAllowableCharacters = cAllowableCharacters;
var cSpecialCharacters = w.cSpecial + w.cCharacters; // SpecialCharacters

exports.cSpecialCharacters = cSpecialCharacters;
var cTimeoutOverride = w.cTimeout + w.cOverride; // TimeoutOverride

exports.cTimeoutOverride = cTimeoutOverride;
var cDwellTime = w.cDwell + w.cTime; // DwellTime

exports.cDwellTime = cDwellTime;
var cLogFilePathAndName = w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // LogFilePathAndName

exports.cLogFilePathAndName = cLogFilePathAndName;
var cDataLogFilePathAndName = w.cData + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // DataLogFilePathAndName

exports.cDataLogFilePathAndName = cDataLogFilePathAndName;
var cExecutionJournalFilePathAndName = w.cExecution + w.cJournal + w.cFile + w.cPath + w.cAnd + w.cName; // ExecutionJournalFilePathAndName

exports.cExecutionJournalFilePathAndName = cExecutionJournalFilePathAndName;
var cResultsLogFilePathAndName = w.cResults + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // ResultsLogFilePathAndName

exports.cResultsLogFilePathAndName = cResultsLogFilePathAndName;
var cTestDataPath = w.cTest + w.cData + w.cPath; // TestDataPath

exports.cTestDataPath = cTestDataPath;
var cLogFileEnabled = w.cLog + w.cFile + w.cEnabled; // LogFileEnabled

exports.cLogFileEnabled = cLogFileEnabled;
var cFileCounter = w.cFile + w.cCounter; // FileCounter

exports.cFileCounter = cFileCounter;
var cDeltaT = g.cDelta + b.cT; // DeltaT

exports.cDeltaT = cDeltaT;
var cvisibilityCheck = w.cvisibility + w.cCheck; // visibilityCheck

exports.cvisibilityCheck = cvisibilityCheck;
var cVisibilityCheck = w.cVisibility + w.cCheck; // VisibilityCheck

exports.cVisibilityCheck = cVisibilityCheck;
var cOperatingSystem = w.cOperating + w.cSystem; // OperatingSystem

exports.cOperatingSystem = cOperatingSystem;
var cinnerText = w.cinner + w.cText; // innerText

exports.cinnerText = cinnerText;
var cInnerText = w.cInner + w.cText; // InnerText

exports.cInnerText = cInnerText;
var cinnerHTML = w.cinner + w.cHTML; // innerHTML

exports.cinnerHTML = cinnerHTML;
var cInnerHTML = w.cInner + w.cHTML; // InnerHTML

exports.cInnerHTML = cInnerHTML;
var cTestData = w.cTest + w.cData; // TestData

exports.cTestData = cTestData;
var cProcessingTimeout = w.cProcessing + w.cTimeout; // ProcessingTimeout

exports.cProcessingTimeout = cProcessingTimeout;
var cIngestionCompleteDwellTime = w.cIngestion + w.cComplete + w.cDwellTime; // IngestionCompleteDwellTime

exports.cIngestionCompleteDwellTime = cIngestionCompleteDwellTime;
var cRowNumber = w.cRow + w.cNumber; // RowNumber

exports.cRowNumber = cRowNumber;
var cUsername = w.cUser + w.cname; // Username

exports.cUsername = cUsername;
var cPassword = w.cPass + w.cword; // Password

exports.cPassword = cPassword;
var cProjectName = w.cProject + w.cName; // ProjectName

exports.cProjectName = cProjectName;
var cProjectDescription = w.cProject + w.cDescription; // ProjectDescription

exports.cProjectDescription = cProjectDescription;
var cTestDataFileName = w.cTest + w.cData + cFileName; // TestDataFileName

exports.cTestDataFileName = cTestDataFileName;
var cShareEmail = w.cShare + w.cEmail; // ShareEmail

exports.cShareEmail = cShareEmail;
var cAccessLevel = w.cAccess + w.cLevel; // AccessLevel

exports.cAccessLevel = cAccessLevel;
var cFileNumber = w.cFile + w.cNumber; // FileNumber

exports.cFileNumber = cFileNumber;
var cConfigurationName = w.cConfiguration + w.cName; // ConfigurationName

exports.cConfigurationName = cConfigurationName;
var cConfigurationElement = w.cConfiguration + w.cElement; // ConfigurationElement

exports.cConfigurationElement = cConfigurationElement;
var cConfigurationElements = cConfigurationElement + b.cs; // ConfigurationElements

exports.cConfigurationElements = cConfigurationElements;
var cVersionControl = w.cVersion + w.cControl; // VersionControl

exports.cVersionControl = cVersionControl;
var cScriptRunTime = w.cScript + cRuntime; // ScriptRunTime

exports.cScriptRunTime = cScriptRunTime;
var cTestRunTime = w.cTest + cRuntime; // TestRunTime

exports.cTestRunTime = cTestRunTime;
var ctypeText = w.ctype + w.cText; // typeText

exports.ctypeText = ctypeText;
var cTypeText = w.cType + w.cText; // TypeText

exports.cTypeText = cTypeText;
var cAbreviatedSelectors = w.cAbreviated + w.cSelectors; // AbreviatedSelectors

exports.cAbreviatedSelectors = cAbreviatedSelectors;
var cAbreviatedSelectorsInLogs = cAbreviatedSelectors + b.cIn + w.cLogs; // AbreviatedSelectorsInLogs

exports.cAbreviatedSelectorsInLogs = cAbreviatedSelectorsInLogs;
var cselectorTimeout = w.cselector + w.cTimeout; // selectorTimeout

exports.cselectorTimeout = cselectorTimeout;
var cchildElementCount = w.cchild + w.cElement + w.cCount; // childElementCount

exports.cchildElementCount = cchildElementCount;
var cUnderscore = w.cUnder + w.cscore; // Underscore

exports.cUnderscore = cUnderscore;
var cTestBureau = w.cTest + w.cBureau; // TestBureau

exports.cTestBureau = cTestBureau;
var caddWithText = w.c_add + w.cWith + w.cText; // addWithText

exports.caddWithText = caddWithText;
var caddTimeout = w.c_add + w.cTimeout; // addTimeout

exports.caddTimeout = caddTimeout;
var caddParent = w.c_add + w.cParent; // addParent

exports.caddParent = caddParent;
var caddFindValue = w.c_add + w.cFind + w.cValue; // addFindValue

exports.caddFindValue = caddFindValue;
var caddNth = w.c_add + w.cNth; // addNth

exports.caddNth = caddNth;
var caddSibling = w.c_add + w.cSibling; // addSibling

exports.caddSibling = caddSibling;
var caddFilter = w.c_add + w.cFilter; // addFilter

exports.caddFilter = caddFilter;
var cgenerateRandom = w.cgenerate + w.cRandom; // generateRandom

exports.cgenerateRandom = cgenerateRandom;
var crandomlyGenerate = w.crandomly + w.cGenerate; // randomlyGenerate

exports.crandomlyGenerate = crandomlyGenerate;
var cMixedCase = w.cMixed + w.cCase; // MixedCase

exports.cMixedCase = cMixedCase;
var cUpperCase = w.cUpper + w.cCase; // UpperCase

exports.cUpperCase = cUpperCase;
var cLowerCase = w.cLower + w.cCase; // LowerCase

exports.cLowerCase = cLowerCase;
var cByLength = w.cBy + w.cLength; // ByLength

exports.cByLength = cByLength;
var cSpecialCharacter = w.cSpecial + w.cCharacter; // SpecialCharacter

exports.cSpecialCharacter = cSpecialCharacter;
var cWithSpecialCharacters = w.cWith + cSpecialCharacters; // WithSpecialCharacters

exports.cWithSpecialCharacters = cWithSpecialCharacters;
var cTextByLength = w.cText + cByLength; // TextByLength

exports.cTextByLength = cTextByLength;
var cTextWithSpecialCharacters = w.cText + cWithSpecialCharacters; // TextWithSpecialCharacters

exports.cTextWithSpecialCharacters = cTextWithSpecialCharacters;
var cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength

exports.cTextWithSpecialCharactersByLength = cTextWithSpecialCharactersByLength;
var cAlphaNumeric = w.cAlpha + w.cNumeric; // AlphaNumeric

exports.cAlphaNumeric = cAlphaNumeric;
var cAlphaNumericCode = cAlphaNumeric + w.cCode; // AlphaNumericCode

exports.cAlphaNumericCode = cAlphaNumericCode;
var cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength

exports.cAlphaNumericCodeByLength = cAlphaNumericCodeByLength;
var cNumericCode = w.cNumeric + w.cCode; // NumericCode

exports.cNumericCode = cNumericCode;
var cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength

exports.cNumericCodeByLength = cNumericCodeByLength;
var cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters

exports.cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCodeWithSpecialCharacters;
var cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength

exports.cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharactersByLength;
var cSpecialCharacterCodeByLength = cSpecialCharacter + w.cCode + cByLength; // SpecialCharacterCodeByLength

exports.cSpecialCharacterCodeByLength = cSpecialCharacterCodeByLength;
var cvalidEmail = w.cvalid + w.cEmail; // validEmail

exports.cvalidEmail = cvalidEmail;
var cValidEmail = w.cValid + w.cEmail; // ValidEmail

exports.cValidEmail = cValidEmail;
var cInvalidEmail = b.cIn + cvalidEmail; // InvalidEmail

exports.cInvalidEmail = cInvalidEmail;
var cLetterOr = w.cLetter + b.cOr; // LetterOr

exports.cLetterOr = cLetterOr;
var cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter

exports.cLetterOrSpecialCharacter = cLetterOrSpecialCharacter;
var cLetterOrNumberOrSpecialCharacter = cLetterOr + w.cNumber + w.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter

exports.cLetterOrNumberOrSpecialCharacter = cLetterOrNumberOrSpecialCharacter;
var cAlphaNumericCharacter = cAlphaNumeric + w.cCharacter; // AlphaNumericCharacter

exports.cAlphaNumericCharacter = cAlphaNumericCharacter;
var cNumericCharacter = w.cNumeric + w.cCharacter; // NumericCharacter

exports.cNumericCharacter = cNumericCharacter;
var cNumberInRange = w.cNumber + b.cIn + w.cRange; // NumberInRange

exports.cNumberInRange = cNumberInRange;
var cBooleanValue = w.cBoolean + w.cValue; // BooleanValue

exports.cBooleanValue = cBooleanValue;
var cAlphabeticCharacter = w.cAlphabetic + w.cCharacter; // AlphabeticCharacter

exports.cAlphabeticCharacter = cAlphabeticCharacter;
var cCarriageReturn = w.cCarriage + w.cReturn; // CarriageReturn

exports.cCarriageReturn = cCarriageReturn;
var cDashboardLogs = w.cDashboard + w.cLogs; // DashboardLogs

exports.cDashboardLogs = cDashboardLogs;
var cVideoLogs = w.cVideo + w.cLogs; // VideoLogs

exports.cVideoLogs = cVideoLogs;
var cForwardSlash = w.cForward + w.cSlash; // ForwardSlash

exports.cForwardSlash = cForwardSlash;
var cBackSlash = w.cBack + w.cSlash; // BackSlash

exports.cBackSlash = cBackSlash;
var cPage_Keywords = w.cPage + b.cUnderscore + w.cKeywords; // Page_Keywords

exports.cPage_Keywords = cPage_Keywords;
var cnavigateTo = w.cnavigate + b.cTo; // navigateTo

exports.cnavigateTo = cnavigateTo;
var cNavigateTo = w.cNavigate + b.cTo; // NavigateTo

exports.cNavigateTo = cNavigateTo;
var cBrowserRefresh = w.cBrowser + w.cRefresh; // BrowserRefresh

exports.cBrowserRefresh = cBrowserRefresh;
var cSpaceIsColonSpace = b.cSpace + b.cIs + b.cColon + b.cSpace; // Is:

exports.cSpaceIsColonSpace = cSpaceIsColonSpace;
var cdeployApplication = w.cdeploy + w.cApplication; // deployApplication

exports.cdeployApplication = cdeployApplication;
var creleaseApplication = w.crelease + w.cApplication; // releaseApplication

exports.creleaseApplication = creleaseApplication;
var cbackground = w.cback + w.cground; // background

exports.cbackground = cbackground;
var cBackground = w.cBack + w.cground; // Background

exports.cBackground = cBackground;
var cConfiguration_Colors = w.cConfiguration + b.cUnderscore + w.cColors; // Configuration_Colors

exports.cConfiguration_Colors = cConfiguration_Colors;
var cColorData = w.cColor + w.cData; // ColorData

exports.cColorData = cColorData;
var cColorName = w.cColor + w.cName; // ColorName

exports.cColorName = cColorName;
var cbusinessRule = w.cbusiness + w.cRule; // businessRule

exports.cbusinessRule = cbusinessRule;
var cBusinessRule = w.cBusiness + w.cRule; // BusinessRule

exports.cBusinessRule = cBusinessRule;
var cbusinessRules = w.cbusiness + w.cRules; // businessRules

exports.cbusinessRules = cbusinessRules;
var cBusinessRules = w.cBusiness + w.cRules; // BusinessRules

exports.cBusinessRules = cBusinessRules;
var crulesLibrary = w.crules + w.cLibrary; // rulesLibrary

exports.crulesLibrary = crulesLibrary;
var cframework = w.cframe + w.cwork; // framework

exports.cframework = cframework;
var cFramework = w.cFrame + w.cwork; // Framework

exports.cFramework = cFramework;
var cCommandsAliases = w.cCommands + w.cAliases; // CommandsAliases

exports.cCommandsAliases = cCommandsAliases;
var cCommandWorkflows = w.cCommand + w.cWorkflows; // CommandWorkflows

exports.cCommandWorkflows = cCommandWorkflows;
var cStandardDeviation = w.cStandard + w.cDeviation; // StandardDeviation

exports.cStandardDeviation = cStandardDeviation;
var cHexValue = g.cHex + w.cValue; // HexValue

exports.cHexValue = cHexValue;
var cexportconst = w.cexport + b.cSpace + g.cconst; // export const

exports.cexportconst = cexportconst;
var cExportConst = w.cExport + b.cSpace + g.cConst; // Export Const
// Logging Constants

exports.cExportConst = cExportConst;
var cBEGIN_Function = w.cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // BEGIN %% Function

exports.cBEGIN_Function = cBEGIN_Function;
var cEND_Function = w.cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // END %% Function

exports.cEND_Function = cEND_Function;
var cinputDataIs = w.cinput + w.cData + cSpaceIsColonSpace; // input Data is:

exports.cinputDataIs = cinputDataIs;
var cinputMetaDataIs = w.cinput + w.cMetaData + cSpaceIsColonSpace; // input MetaData is:

exports.cinputMetaDataIs = cinputMetaDataIs;
var creturnDataIs = w.creturn + w.cData + cSpaceIsColonSpace; // return Data is:

exports.creturnDataIs = creturnDataIs;
var cLogBasicSystemEvents = w.cLog + w.cBasic + w.cSystem + w.cEvents; // LogBasicSystemEvents

exports.cLogBasicSystemEvents = cLogBasicSystemEvents;
var cLogWarnings = w.cLog + w.cWarnings; // LogWarnings
// Logging Styles Constants

exports.cLogWarnings = cLogWarnings;
var cModuleFontStyle = w.cModule + w.cFont + w.cStyle; // ModuleFontStyle

exports.cModuleFontStyle = cModuleFontStyle;
var cFunctionFontStyle = w.cFunction + w.cFont + w.cStyle; // FunctionFontStyle

exports.cFunctionFontStyle = cFunctionFontStyle;
var cMessageFontStyle = w.cMessage + w.cFont + w.cStyle; // MessageFontStyle

exports.cMessageFontStyle = cMessageFontStyle;
var cDataFontStyle = w.cData + w.cFont + w.cStyle; // DataFontStyle

exports.cDataFontStyle = cDataFontStyle;
var cModuleFontColor = w.cModule + w.cFont + w.cColor; // ModuleFontColor

exports.cModuleFontColor = cModuleFontColor;
var cFunctionFontColor = w.cFunction + w.cFont + w.cColor; // FunctionFontColor

exports.cFunctionFontColor = cFunctionFontColor;
var cMessageFontColor = w.cMessage + w.cFont + w.cColor; // MessageFontColor

exports.cMessageFontColor = cMessageFontColor;
var cDataFontColor = w.cData + w.cFont + w.cColor; // DataFontColor

exports.cDataFontColor = cDataFontColor;
var cModuleFontBackgroundColor = w.cModule + w.cFont + cBackground + w.cColor; // ModuleFontBackgroundColor

exports.cModuleFontBackgroundColor = cModuleFontBackgroundColor;
var cFunctionFontBackgroundColor = w.cFunction + w.cFont + cBackground + w.cColor; // FunctionFontBackgroundColor

exports.cFunctionFontBackgroundColor = cFunctionFontBackgroundColor;
var cMessageFontBackgroundColor = w.cMessage + w.cFont + cBackground + w.cColor; // MessageFontBackgroundColor

exports.cMessageFontBackgroundColor = cMessageFontBackgroundColor;
var cDataFontBackgroundColor = w.cData + w.cFont + cBackground + w.cColor; // DataFontBackgroundColor
// File Types

exports.cDataFontBackgroundColor = cDataFontBackgroundColor;
var cCatia = b.cCa + b.cti + b.ca; // Catia

exports.cCatia = cCatia;
var cDocument = g.cDoc + b.cu + p.cment; // Document

exports.cDocument = cDocument;
var cDocuments = w.cDocument + b.cs; // Documents

exports.cDocuments = cDocuments;
var cDraft = b.cDr + p.caft; // Draft

exports.cDraft = cDraft;
var cDWG = b.cDW + b.cG; // DWG

exports.cDWG = cDWG;
var cHoops = b.cH + w.coops; // Hoops

exports.cHoops = cHoops;
var cHOOPS = b.cH + w.cOOPS; // HOOPS

exports.cHOOPS = cHOOPS;
var cImage = b.cIm + p.cage; // Image

exports.cImage = cImage;
var cImages = w.cImage + b.cs; // Images

exports.cImages = cImages;
var cInventor = p.cInv + b.cen + p.ctor; // Inventor

exports.cInventor = cInventor;
var cNeutral = b.cNe + b.cut + p.cral; // Neutral

exports.cNeutral = cNeutral;
var cNX = b.cNX; // NX

exports.cNX = cNX;
var cParasolid = b.cP + p.cara + w.csolid; // Parasolid

exports.cParasolid = cParasolid;
var cProE = p.cPro + b.cE; // ProE

exports.cProE = cProE;
var cRhino = b.cRh + p.cino; // Rhino

exports.cRhino = cRhino;
var cSolidEdge = w.cSolid + w.cEdge; // SolidEdge

exports.cSolidEdge = cSolidEdge;
var cSolidWorks = w.cSolid + w.cWorks; // SolidWorks

exports.cSolidWorks = cSolidWorks;
var cvrml = b.cvr + b.cml; // vrml

exports.cvrml = cvrml;
var cVrml = b.cVr + b.cml; // Vrml

exports.cVrml = cVrml;
var cVRML = b.cVR + b.cML; // VRML
// Countires
// TODO: Need to come back and generalize thse with constants re-use.

exports.cVRML = cVRML;
var cAfghanistan = 'Afghanistan'; // Afghanistan

exports.cAfghanistan = cAfghanistan;
var cAlbania = 'Albania'; // Albania

exports.cAlbania = cAlbania;
var cAlgeria = 'Algeria'; // Algeria

exports.cAlgeria = cAlgeria;
var cAndorra = 'Andorra'; // Andorra

exports.cAndorra = cAndorra;
var cAngola = 'Angola'; // Angola

exports.cAngola = cAngola;
var cAntigua = 'Antigua'; // Antigua

exports.cAntigua = cAntigua;
var cArgentina = 'Argentina'; // Argentina

exports.cArgentina = cArgentina;
var cArmenia = 'Armenia'; // Armenia

exports.cArmenia = cArmenia;
var cAustralia = 'Australia'; // Australia

exports.cAustralia = cAustralia;
var cAustria = 'Austria'; // Austria

exports.cAustria = cAustria;
var cAzerbaijan = 'Axerbaijan'; // Axerbaijan

exports.cAzerbaijan = cAzerbaijan;
var cBahamas = 'Bahamas'; // Bahamas

exports.cBahamas = cBahamas;
var cBahrain = 'Bahrain'; // Bahrain

exports.cBahrain = cBahrain;
var cBangladesh = 'Bangladesh'; // Bangladesh

exports.cBangladesh = cBangladesh;
var cBarbados = 'Barbados'; // Barbados

exports.cBarbados = cBarbados;
var cBarbuda = 'Barbuda'; // Barbuda

exports.cBarbuda = cBarbuda;
var cBelarus = 'Belarus'; // Belarus

exports.cBelarus = cBelarus;
var cBelgium = 'Belgium'; // Belgium

exports.cBelgium = cBelgium;
var cBelize = 'Belize'; // Belize

exports.cBelize = cBelize;
var cBenin = 'Benin'; // Benin

exports.cBenin = cBenin;
var cBhutan = 'Bhutan'; // Bhutan

exports.cBhutan = cBhutan;
var cBolivia = 'Bolivia'; // Bolivia

exports.cBolivia = cBolivia;
var cBosnia = 'Bosnia'; // Bosnia

exports.cBosnia = cBosnia;
var cBotswana = 'Botswana'; // Botswana

exports.cBotswana = cBotswana;
var cBrazil = 'Brazil'; // Brazil

exports.cBrazil = cBrazil;
var cBrunei = 'Brunei'; // Brunei

exports.cBrunei = cBrunei;
var cBulgaria = 'Bulgaria'; // Bulgaria

exports.cBulgaria = cBulgaria;
var cBurkinaFaso = 'BurkinaFaso'; // BurkinaFaso

exports.cBurkinaFaso = cBurkinaFaso;
var cBurundi = 'Burundi'; // Burundi

exports.cBurundi = cBurundi;
var cCotedlvoire = 'Cote dlvoire'; // Cote dlvoire

exports.cCotedlvoire = cCotedlvoire;
var cCaboVerde = 'Cabo Verde'; // Cabo Verde

exports.cCaboVerde = cCaboVerde;
var cCambodia = 'Cambodia'; // Cambodia

exports.cCambodia = cCambodia;
var cCameroon = 'Cameroon'; // Cameroon

exports.cCameroon = cCameroon;
var cCanada = 'Canada'; // Canada

exports.cCanada = cCanada;
var cCentralAfricanRepublic = 'Central African Republic'; // Central African Republic

exports.cCentralAfricanRepublic = cCentralAfricanRepublic;
var cChad = 'Chad'; // Chad

exports.cChad = cChad;
var cChile = 'Chile'; // Chile

exports.cChile = cChile;
var cChina = 'China'; // China

exports.cChina = cChina;
var cColombia = 'Colombia'; // Colombia

exports.cColombia = cColombia;
var cComoros = 'Comoros'; // Comoros

exports.cComoros = cComoros;
var cCongo = 'Congo'; // Congo

exports.cCongo = cCongo;
var cCostaRica = 'Costa Rica'; // Costa Rica

exports.cCostaRica = cCostaRica;
var cCroatia = 'Croatia'; // Croatia

exports.cCroatia = cCroatia;
var cCuba = 'Cuba'; // Cuba

exports.cCuba = cCuba;
var cCyprus = 'Cyprus'; // Cyprus

exports.cCyprus = cCyprus;
var cCzechia = 'Czechia'; // Czechia

exports.cCzechia = cCzechia;
var cDemocraticRepublicOfTheCongo = 'Democratic Republic of the Congo'; // Democratic Republic of the Congo

exports.cDemocraticRepublicOfTheCongo = cDemocraticRepublicOfTheCongo;
var cDenmark = 'Denmark'; // Denmark

exports.cDenmark = cDenmark;
var cDjibouti = 'Djibouti'; // Djibouti

exports.cDjibouti = cDjibouti;
var cDominica = 'Dominica'; // Dominica

exports.cDominica = cDominica;
var cDominicanRepublic = 'Dominican Republic'; // Dominican Republic

exports.cDominicanRepublic = cDominicanRepublic;
var cEcuador = 'Ecuador'; // Ecuador

exports.cEcuador = cEcuador;
var cEgypt = 'Egypt'; // Egypt

exports.cEgypt = cEgypt;
var cElSalvador = 'El Salvador'; // El Salvador

exports.cElSalvador = cElSalvador;
var cEquatorialGuinea = 'Equatorial Guinea'; // Equatorial Guinea

exports.cEquatorialGuinea = cEquatorialGuinea;
var cEritrea = 'Eritrea'; // Eritrea

exports.cEritrea = cEritrea;
var cEstonia = 'Estonia'; // Estonia

exports.cEstonia = cEstonia;
var cEswatini = 'Eswatini'; // Eswatini -- Formerly Swaziland

exports.cEswatini = cEswatini;
var cEthiopia = 'Ethiopia'; // Ethiopia

exports.cEthiopia = cEthiopia;
var cFiji = 'Fiji'; // Fiji

exports.cFiji = cFiji;
var cFinland = 'Finland'; // Finland

exports.cFinland = cFinland;
var cFrance = 'France'; // France

exports.cFrance = cFrance;
var cGabon = 'Gabon'; // Gabon

exports.cGabon = cGabon;
var cGambia = 'Gambia'; // Gambia

exports.cGambia = cGambia;
var cGeorgia = 'Georgia'; // Georgia

exports.cGeorgia = cGeorgia;
var cGerman = b.cGe + b.cr + w.cman; // German

exports.cGerman = cGerman;
var cGermany = cGerman + b.cy; // Germany

exports.cGermany = cGermany;
var cGhana = 'Ghana'; // Ghana

exports.cGhana = cGhana;
var cGreece = 'Greece'; // Greece

exports.cGreece = cGreece;
var cGrenada = 'Grenada'; // Grenada

exports.cGrenada = cGrenada;
var cGuatemala = 'Guatemala'; // Guatemala

exports.cGuatemala = cGuatemala;
var cGuinea = 'Guinea'; // Guinea

exports.cGuinea = cGuinea;
var cGuineaBissau = 'Guinea-Bissau'; // Guinea-Bissau

exports.cGuineaBissau = cGuineaBissau;
var cGuyana = 'Guyana'; // Guyana

exports.cGuyana = cGuyana;
var cHaiti = 'Haiti'; // Haiti

exports.cHaiti = cHaiti;
var cHerzegovina = 'Herzegovina'; // Herzegovina

exports.cHerzegovina = cHerzegovina;
var cHolySee = 'Holy See'; // Holy See

exports.cHolySee = cHolySee;
var cHonduras = 'Honduras'; // Honduras

exports.cHonduras = cHonduras;
var cHungary = w.cHung + p.cary; // Hungary

exports.cHungary = cHungary;
var cIceland = 'Iceland'; // Iceland

exports.cIceland = cIceland;
var cIndia = 'India'; // India

exports.cIndia = cIndia;
var cIndonesia = 'Indonesia'; // Indonesia

exports.cIndonesia = cIndonesia;
var cIran = 'Iran'; // Iran

exports.cIran = cIran;
var cIraq = 'Iraq'; // Iraq

exports.cIraq = cIraq;
var cIreland = 'Ireland'; // Ireland

exports.cIreland = cIreland;
var cIsrael = 'Israel'; // Israel

exports.cIsrael = cIsrael;
var cItaly = 'Italy'; // Italy

exports.cItaly = cItaly;
var cJamaica = 'Jamaica'; // Jamaica

exports.cJamaica = cJamaica;
var cJapan = 'Japan'; // Japan

exports.cJapan = cJapan;
var cJordan = 'Jordan'; // Jordan

exports.cJordan = cJordan;
var cKazakhstan = 'Kazakhstan'; // Kazakhstan

exports.cKazakhstan = cKazakhstan;
var cKenya = 'Kenya'; // Kenya

exports.cKenya = cKenya;
var cKiribati = 'Kiribati'; // Kiribati

exports.cKiribati = cKiribati;
var cKuwait = 'Kuwait'; // Kuwait

exports.cKuwait = cKuwait;
var cKyrgyzstan = 'Kyrgyzstan'; // Kyrgyzstan

exports.cKyrgyzstan = cKyrgyzstan;
var cLaos = 'Laos'; // Laos

exports.cLaos = cLaos;
var cLatvia = 'Latvia'; // Latvia

exports.cLatvia = cLatvia;
var cLebanon = 'Lebanon'; // Lebanon

exports.cLebanon = cLebanon;
var cLesotho = 'Lesotho'; // Lesotho

exports.cLesotho = cLesotho;
var cLiberia = 'Liberia'; // Liberia

exports.cLiberia = cLiberia;
var cLibya = 'Libya'; // Libya

exports.cLibya = cLibya;
var cLiechtenstein = 'Liechtenstein'; // Liechtenstein

exports.cLiechtenstein = cLiechtenstein;
var cLithuania = 'Lithuania'; // Lithuania

exports.cLithuania = cLithuania;
var cLuxembourg = 'Luxembourg'; // Luxembourg

exports.cLuxembourg = cLuxembourg;
var cMadagascar = 'Madagascar'; // Madagascar

exports.cMadagascar = cMadagascar;
var cMalawi = 'Malawi'; // Malawi

exports.cMalawi = cMalawi;
var cMalaysia = 'Malaysia'; // Malaysia

exports.cMalaysia = cMalaysia;
var cMaldives = 'Maldives'; // Maldives

exports.cMaldives = cMaldives;
var cMali = 'Mali'; // Mali

exports.cMali = cMali;
var cMalta = 'Malta'; // Malta

exports.cMalta = cMalta;
var cMarshallIslands = 'Marshall Islands'; // Marshall Islands

exports.cMarshallIslands = cMarshallIslands;
var cMauritania = 'Mauritania'; // Mauritania

exports.cMauritania = cMauritania;
var cMauritius = 'Mauritius'; // Mauritius

exports.cMauritius = cMauritius;
var cMexico = 'Mexico'; // Mexico

exports.cMexico = cMexico;
var cMicronesia = 'Micronesia'; // Micronesia

exports.cMicronesia = cMicronesia;
var cMoldova = 'Moldova'; // Moldova

exports.cMoldova = cMoldova;
var cMonaco = 'Monaco'; // Monaco

exports.cMonaco = cMonaco;
var cMongolia = 'Mongolia'; // Mongolia

exports.cMongolia = cMongolia;
var cMontenegro = 'Montenegro'; // Montenegro

exports.cMontenegro = cMontenegro;
var cMorocco = 'Morocco'; // Morocco

exports.cMorocco = cMorocco;
var cMozambique = 'Mozambique'; // Mozambique

exports.cMozambique = cMozambique;
var cMyanmar = 'Myanmar'; // Myanmar

exports.cMyanmar = cMyanmar;
var cNamibia = 'Namibia'; // Namibia

exports.cNamibia = cNamibia;
var cNauru = 'Nauru'; // Nauru

exports.cNauru = cNauru;
var cNepal = 'Nepal'; // Nepal

exports.cNepal = cNepal;
var cNetherlands = 'Netherlands'; // Netherlands

exports.cNetherlands = cNetherlands;
var cNewZealand = 'New Zealand'; // New Zealand

exports.cNewZealand = cNewZealand;
var cNevis = 'Nevis'; // Nevis

exports.cNevis = cNevis;
var cNicaragua = 'Nicaragua'; // Nicaragua

exports.cNicaragua = cNicaragua;
var cNiger = 'Niger'; // Niger

exports.cNiger = cNiger;
var cNigeria = 'Nigeria'; // Nigeria

exports.cNigeria = cNigeria;
var cNorthKorea = 'North Korea'; // North Korea

exports.cNorthKorea = cNorthKorea;
var cNorthMacedonia = 'North Macedonia'; // North Macedonia

exports.cNorthMacedonia = cNorthMacedonia;
var cNorway = 'Norway'; // Norway

exports.cNorway = cNorway;
var cOman = 'Oman'; // Oman

exports.cOman = cOman;
var cPakistan = 'Pakistan'; // Pakistan

exports.cPakistan = cPakistan;
var cPalau = 'Palau'; // Palau

exports.cPalau = cPalau;
var cPalestine = 'Palestine'; // Palestine

exports.cPalestine = cPalestine;
var cPanama = 'Panama'; // Panama

exports.cPanama = cPanama;
var cPapuaNewGuinea = 'Papua New Guinea'; // Papua New Guinea

exports.cPapuaNewGuinea = cPapuaNewGuinea;
var cParaguay = 'Paraguay'; // Paraguay

exports.cParaguay = cParaguay;
var cPeru = 'Peru'; // Peru

exports.cPeru = cPeru;
var cPhilippines = 'Philippines'; // Philippines

exports.cPhilippines = cPhilippines;
var cPoland = 'Poland'; // Poland

exports.cPoland = cPoland;
var cPortugal = 'Portugal'; // Portugal

exports.cPortugal = cPortugal;
var cPrincipe = 'Principe'; // Principe

exports.cPrincipe = cPrincipe;
var cQatar = 'Qatar'; // Qatar

exports.cQatar = cQatar;
var cRomania = 'Romania'; // Romania

exports.cRomania = cRomania;
var cRussia = 'Russia'; // Russia

exports.cRussia = cRussia;
var cRwanda = 'Rwanda'; // Rwanda

exports.cRwanda = cRwanda;
var cSaintKitts = 'Saint Kitts'; // Saint Kitts

exports.cSaintKitts = cSaintKitts;
var cSaintLucia = 'Saint Lucia'; // Saint Lucia

exports.cSaintLucia = cSaintLucia;
var cSaintVincent = 'Saint Vincent'; // Saint Vincent

exports.cSaintVincent = cSaintVincent;
var cSomoa = 'Somoa'; // Somoa

exports.cSomoa = cSomoa;
var cSanMarino = 'San Marino'; // San Marino

exports.cSanMarino = cSanMarino;
var cSaoTome = 'Sao Tome'; // Sao Tome

exports.cSaoTome = cSaoTome;
var cSaudiArabia = 'Saudi Arabia'; // Saudi Arabia

exports.cSaudiArabia = cSaudiArabia;
var cSenegal = 'Senegal'; // Senegal

exports.cSenegal = cSenegal;
var cSerbia = 'Serbia'; // Serbia

exports.cSerbia = cSerbia;
var cSeychelles = 'Seychelles'; // Seychelles

exports.cSeychelles = cSeychelles;
var cSierraLeone = 'Sierra Leone'; // Sierra Leone

exports.cSierraLeone = cSierraLeone;
var cSingapore = 'Singapore'; // Singapore

exports.cSingapore = cSingapore;
var cSlovakia = 'Slovakia'; // Slovakia

exports.cSlovakia = cSlovakia;
var cSlovenia = 'Slovenia'; // Slovenia

exports.cSlovenia = cSlovenia;
var cSolomonIslands = 'Solomon Islands'; // Solomon Islands

exports.cSolomonIslands = cSolomonIslands;
var cSomalia = 'Somalia'; // Somalia

exports.cSomalia = cSomalia;
var cSouthAfrica = 'South Africa'; // South Africa

exports.cSouthAfrica = cSouthAfrica;
var cSouthKorea = 'South Korea'; // South Korea

exports.cSouthKorea = cSouthKorea;
var cSouthSudan = 'South Sudan'; // South Sudan

exports.cSouthSudan = cSouthSudan;
var cSpain = 'Spain'; // Spain

exports.cSpain = cSpain;
var cSriLanka = 'Sri Lanka'; // Sri Lanka

exports.cSriLanka = cSriLanka;
var cSudan = 'Sudan'; // Sudan

exports.cSudan = cSudan;
var cSuriname = 'Suriname'; // Suriname

exports.cSuriname = cSuriname;
var cSweden = 'Sweden'; // Sweden

exports.cSweden = cSweden;
var cSwitzerland = 'Switzerland'; // Switzerland

exports.cSwitzerland = cSwitzerland;
var cSyria = 'Syria'; // Syria

exports.cSyria = cSyria;
var cTajikistan = 'Tajikistan'; // Tajikistan

exports.cTajikistan = cTajikistan;
var cTanzania = 'Tanzania'; // Tanzania

exports.cTanzania = cTanzania;
var cThailand = 'Thailand'; // Thailand

exports.cThailand = cThailand;
var cTimorLeste = 'Timor-Leste'; // Timor-Leste

exports.cTimorLeste = cTimorLeste;
var cTogo = 'Togo'; // Togo

exports.cTogo = cTogo;
var cTonga = 'Tonga'; // Tonga

exports.cTonga = cTonga;
var cTrinidadAndTabago = 'Trinidad and Tabago'; // Trinidad and Tabago

exports.cTrinidadAndTabago = cTrinidadAndTabago;
var cTunisia = 'Tunisia'; // Tunisia

exports.cTunisia = cTunisia;
var cTurkey = 'Turkey'; // Turkey

exports.cTurkey = cTurkey;
var cTurkmenistan = 'Turkmenistan'; // Turkmenistan

exports.cTurkmenistan = cTurkmenistan;
var cTuvalu = 'Tuvalu'; // Tuvalu

exports.cTuvalu = cTuvalu;
var cUganda = 'Uganda'; // Uganda

exports.cUganda = cUganda;
var cUkraine = 'Ukraine'; // Ukraine

exports.cUkraine = cUkraine;
var cUnitedArabEmirates = 'United Arab Emirates'; // United Arab Emirates

exports.cUnitedArabEmirates = cUnitedArabEmirates;
var cUnitedKingdom = 'United Kingdom'; // United Kingdom

exports.cUnitedKingdom = cUnitedKingdom;
var cUnitedStatesOfAmerica = 'United States of America'; // United States of America

exports.cUnitedStatesOfAmerica = cUnitedStatesOfAmerica;
var cUruguay = 'Uruguay'; // Uruguay

exports.cUruguay = cUruguay;
var cUzbekistan = 'Uzbekistan'; // Uzbekistan

exports.cUzbekistan = cUzbekistan;
var cVanuatu = 'Vanuatu'; // Vanuatu

exports.cVanuatu = cVanuatu;
var cVenezuela = 'Venezuela'; // Venezuela

exports.cVenezuela = cVenezuela;
var cVietnam = 'Vietnam'; // Vietnam

exports.cVietnam = cVietnam;
var cYemen = 'Yemen'; // Yemen

exports.cYemen = cYemen;
var cZambia = 'Zambia'; // Zambia

exports.cZambia = cZambia;
var cZimbabwe = 'Zimbabwe'; // Zimbabwe
// Languages

exports.cZimbabwe = cZimbabwe;
var cChinese = p.cChi + b.cn + p.cese; // Chinese

exports.cChinese = cChinese;
var cChineseSimplified = cChinese + w.cSimplified; // ChineseSimplified

exports.cChineseSimplified = cChineseSimplified;
var cChineseTraditional = cChinese + w.cTraditional; // ChineseTraditional

exports.cChineseTraditional = cChineseTraditional;
var cCzech = b.cCz + b.ce + b.cch; // Czech

exports.cCzech = cCzech;
var cEnglish = b.cEn + b.cgl + p.cish; // English

exports.cEnglish = cEnglish;
var cFrench = b.cFr + b.cen + b.cch; // French
// export const cGerman = b.cGe + b.cr + cman; // German // Defined above in the countries section

exports.cFrench = cFrench;
var cHungarian = w.cHung + b.car + p.cian; // Hungarian

exports.cHungarian = cHungarian;
var cItalian = b.cIt + b.cal + p.cian; // Italian

exports.cItalian = cItalian;
var cJapanese = cJapan + p.cese; // Japanese

exports.cJapanese = cJapanese;
var cKorean = b.cKo + b.cre + b.can; // Korean

exports.cKorean = cKorean;
var cMiscellaneous = p.cMis + w.ccell + b.can + p.ceous; // Miscellaneous

exports.cMiscellaneous = cMiscellaneous;
var cPolish = b.cPo + b.cl + p.cish; // Polish

exports.cPolish = cPolish;
var cPortuguese = w.cPort + b.cug + b.cu + p.cese; // Portuguese

exports.cPortuguese = cPortuguese;
var cRussian = b.cRu + b.css + p.cian; // Russian

exports.cRussian = cRussian;
var cSpanish = b.cSp + b.can + p.cish; // Spanish
// UI Element Types

exports.cSpanish = cSpanish;
var cButton = b.cBu + b.ctt + b.con; // Button
// Environment Variables

exports.cButton = cButton;
var cQA = b.cQA; // QA

exports.cQA = cQA;
var cDEV = b.cDE + b.cV; // DEV

exports.cDEV = cDEV;
var cProd = p.cPro + b.cd; // Prod

exports.cProd = cProd;
var cPROD = p.cPRO + b.cD; // PROD

exports.cPROD = cPROD;
var cPre = p.cPre; // Pre

exports.cPre = cPre;
var cPRE = p.cPRE; // PRE

exports.cPRE = cPRE;
var cPreProd = p.cPre + p.cProd; // PreProd

exports.cPreProd = cPreProd;
var cPREPROD = p.cPRE + p.cPROD; // PREPROD
// Key Combinations

exports.cPREPROD = cPREPROD;
var cctrl_a = p.cctrl + b.cPlus + b.ca; // ctrl+a

exports.cctrl_a = cctrl_a;
var cctrl_b = p.cctrl + b.cPlus + b.cb; // ctrl+b

exports.cctrl_b = cctrl_b;
var cctrl_c = p.cctrl + b.cPlus + b.cc; // ctrl+c

exports.cctrl_c = cctrl_c;
var cctrl_d = p.cctrl + b.cPlus + b.cd; // ctrl+d

exports.cctrl_d = cctrl_d;
var cctrl_e = p.cctrl + b.cPlus + b.ce; // ctrl+e

exports.cctrl_e = cctrl_e;
var cctrl_f = p.cctrl + b.cPlus + b.cf; // ctrl+f

exports.cctrl_f = cctrl_f;
var cctrl_g = p.cctrl + b.cPlus + b.cg; // ctrl+g

exports.cctrl_g = cctrl_g;
var cctrl_h = p.cctrl + b.cPlus + b.ch; // ctrl+h

exports.cctrl_h = cctrl_h;
var cctrl_i = p.cctrl + b.cPlus + b.ci; // ctrl+i

exports.cctrl_i = cctrl_i;
var cctrl_j = p.cctrl + b.cPlus + b.cj; // ctrl+j

exports.cctrl_j = cctrl_j;
var cctrl_k = p.cctrl + b.cPlus + b.ck; // ctrl+k

exports.cctrl_k = cctrl_k;
var cctrl_l = p.cctrl + b.cPlus + b.cl; // ctrl+l

exports.cctrl_l = cctrl_l;
var cctrl_m = p.cctrl + b.cPlus + b.cm; // ctrl+m

exports.cctrl_m = cctrl_m;
var cctrl_n = p.cctrl + b.cPlus + b.cn; // ctrl+n

exports.cctrl_n = cctrl_n;
var cctrl_o = p.cctrl + b.cPlus + b.co; // ctrl+o

exports.cctrl_o = cctrl_o;
var cctrl_p = p.cctrl + b.cPlus + b.cp; // ctrl+p

exports.cctrl_p = cctrl_p;
var cctrl_q = p.cctrl + b.cPlus + b.cq; // ctrl+q

exports.cctrl_q = cctrl_q;
var cctrl_r = p.cctrl + b.cPlus + b.cr; // ctrl+r

exports.cctrl_r = cctrl_r;
var cctrl_s = p.cctrl + b.cPlus + b.cs; // ctrl+s

exports.cctrl_s = cctrl_s;
var cctrl_t = p.cctrl + b.cPlus + b.ct; // ctrl+t

exports.cctrl_t = cctrl_t;
var cctrl_u = p.cctrl + b.cPlus + b.cu; // ctrl+u

exports.cctrl_u = cctrl_u;
var cctrl_v = p.cctrl + b.cPlus + b.cv; // ctrl+v

exports.cctrl_v = cctrl_v;
var cctrl_w = p.cctrl + b.cPlus + b.cw; // ctrl+w

exports.cctrl_w = cctrl_w;
var cctrl_x = p.cctrl + b.cPlus + b.cx; // ctrl+x

exports.cctrl_x = cctrl_x;
var cctrl_y = p.cctrl + b.cPlus + b.cy; // ctrl+y

exports.cctrl_y = cctrl_y;
var cctrl_z = p.cctrl + b.cPlus + b.cz; // ctrl+z

exports.cctrl_z = cctrl_z;
var cApplicationName = w.cApplication + w.cName; // ApplicationName

exports.cApplicationName = cApplicationName;
var cApplicationRootPath = w.cApplication + w.cRoot + w.cPath; // ApplicationRootPath

exports.cApplicationRootPath = cApplicationRootPath;
var cApplicationCleanedRootPath = w.cApplication + w.cCleaned + w.cRoot + w.cPath; // ApplicationCleanedRootPath

exports.cApplicationCleanedRootPath = cApplicationCleanedRootPath;
var cConfigurationPath = w.cConfiguration + w.cPath; // ConfigurationPath

exports.cConfigurationPath = cConfigurationPath;
var cApplicationVersionNumber = w.cApplication + w.cVersion + w.cNumber; // ApplicationVersionNumber

exports.cApplicationVersionNumber = cApplicationVersionNumber;
var cApplicationDescription = w.cApplication + w.cDescription; // ApplicationDescription

exports.cApplicationDescription = cApplicationDescription;
var cDataPath = w.cData + w.cPath; // DataPath

exports.cDataPath = cDataPath;
var cCtempPath = b.cc + b.cColon + b.cForwardSlash + p.ctemp + b.cForwardSlash; // CtempPath

exports.cCtempPath = cCtempPath;
var cPageDataPath = w.cPage + w.cDataPath; // PageDataPath

exports.cPageDataPath = cPageDataPath;
var cWorkflowDataPath = w.cWorkflow + w.cDataPath; // WorkflowDataPath

exports.cWorkflowDataPath = cWorkflowDataPath;
var cKeywordsDataPath = w.cKeywords + w.cDataPath; // KeywordsDataPath

exports.cKeywordsDataPath = cKeywordsDataPath;
var cLocatorsDataPath = w.cLocators + w.cDataPath; // LocatorsDataPath

exports.cLocatorsDataPath = cLocatorsDataPath;
var cConstantsPathActual = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cConstants + b.cForwardSlash; // src/Framework/Constants/

exports.cConstantsPathActual = cConstantsPathActual;
var cclientRulesLibrary = w.cclient + w.cRules + w.cLibrary; // clientRulesLibrary

exports.cclientRulesLibrary = cclientRulesLibrary;
var cCommandQueue = w.cCommand + w.cQueue; // CommandQueue

exports.cCommandQueue = cCommandQueue;
var cConstantsValidationData = w.cConstants + w.cValidation + w.cData; // ConstantsValidationData

exports.cConstantsValidationData = cConstantsValidationData;
var cBasicConstantsValidation = w.cBasic + w.cConstants + w.cValidation; // BasicConstantsValidation

exports.cBasicConstantsValidation = cBasicConstantsValidation;
var cColorConstantsValidation = w.cColor + w.cConstants + w.cValidation; // ColorConstantsValidation

exports.cColorConstantsValidation = cColorConstantsValidation;
var cElementConstantsValidation = w.cElement + w.cConstants + w.cValidation; // ElementConstantsValidation

exports.cElementConstantsValidation = cElementConstantsValidation;
var cGenericConstantsValidation = w.cGeneric + w.cConstants + w.cValidation; // GenericConstantsValidation

exports.cGenericConstantsValidation = cGenericConstantsValidation;
var cIsotopeConstantsValidation = w.cIsotope + w.cConstants + w.cValidation; // IsotopeConstantsValidation

exports.cIsotopeConstantsValidation = cIsotopeConstantsValidation;
var cNumericConstantsValidation = w.cNumeric + w.cConstants + w.cValidation; // NumericConstantsValidation

exports.cNumericConstantsValidation = cNumericConstantsValidation;
var cPhonicsConstantsValidation = w.cPhonics + w.cConstants + w.cValidation; // PhonicsConstantsValidation

exports.cPhonicsConstantsValidation = cPhonicsConstantsValidation;
var cShapeConstantsValidation = w.cShape + w.cConstants + w.cValidation; // ShapeConstantsValidation

exports.cShapeConstantsValidation = cShapeConstantsValidation;
var cSystemConstantsValidation = w.cSystem + w.cConstants + w.cValidation; // SystemConstantsValidation

exports.cSystemConstantsValidation = cSystemConstantsValidation;
var cUnitsConstantsValidation = w.cUnits + w.cConstants + w.cValidation; // UnitsConstantsValidation

exports.cUnitsConstantsValidation = cUnitsConstantsValidation;
var cWordConstantsValidation = w.cWord + w.cConstants + w.cValidation; // WordConstantsValidation
// Constants Filenames

exports.cWordConstantsValidation = cWordConstantsValidation;
var cbasic_constants_js = w.cbasic + b.cDot + w.cconstants + b.cDot + b.cjs; // basic.constants.js

exports.cbasic_constants_js = cbasic_constants_js;
var ccolor_constants_js = w.ccolor + b.cDot + w.cconstants + b.cDot + b.cjs; // color.constants.js

exports.ccolor_constants_js = ccolor_constants_js;
var celement_constants_js = w.celement + b.cDot + w.cconstants + b.cDot + b.cjs; // element.constants.js

exports.celement_constants_js = celement_constants_js;
var cgeneric_constants_js = w.cgeneric + b.cDot + w.cconstants + b.cDot + b.cjs; // generic.constants.js

exports.cgeneric_constants_js = cgeneric_constants_js;
var cisotope_constants_js = w.cisotope + b.cDot + w.cconstants + b.cDot + b.cjs; // isotope.constants.js

exports.cisotope_constants_js = cisotope_constants_js;
var cnumeric_constants_js = w.cnumeric + b.cDot + w.cconstants + b.cDot + b.cjs; // numeric.constants.js

exports.cnumeric_constants_js = cnumeric_constants_js;
var cphonics_constants_js = w.cphonics + b.cDot + w.cconstants + b.cDot + b.cjs; // phonics.constants.js

exports.cphonics_constants_js = cphonics_constants_js;
var cshape_constants_js = w.cshape + b.cDot + w.cconstants + b.cDot + b.cjs; // shape.constants.js

exports.cshape_constants_js = cshape_constants_js;
var csystem_constants_js = w.csystem + b.cDot + w.cconstants + b.cDot + b.cjs; // system.constants.js

exports.csystem_constants_js = csystem_constants_js;
var cunits_constants_js = w.cunits + b.cDot + w.cconstants + b.cDot + b.cjs; // units.constants.js

exports.cunits_constants_js = cunits_constants_js;
var cword_constants_js = w.cword + b.cDot + w.cconstants + b.cDot + b.cjs; // word.constants.js
// Configuration Settings

exports.cword_constants_js = cword_constants_js;
var cArgumentDrivenInterface = w.cArgument + w.cDriven + w.cInterface; // ArgumentDrivenInterface

exports.cArgumentDrivenInterface = cArgumentDrivenInterface;
var cFigletFont = w.cFiglet + w.cFont; // FigletFont

exports.cFigletFont = cFigletFont;
var cPrimaryCommandDelimiter = w.cPrimary + w.cCommand + w.cDelimiter; // PrimaryCommandDelimiter

exports.cPrimaryCommandDelimiter = cPrimaryCommandDelimiter;
var cSecondaryCommandDelimiter = w.cSecondary + w.cCommand + w.cDelimiter; // SecondaryCommandDelimiter

exports.cSecondaryCommandDelimiter = cSecondaryCommandDelimiter;
var cTertiaryCommandDelimiter = w.cTertiary + w.cCommand + w.cDelimiter; // TertiaryCommandDelimiter

exports.cTertiaryCommandDelimiter = cTertiaryCommandDelimiter;
var cEnableBusinessRuleOutput = w.cEnable + w.cBusiness + w.cRule + w.cOutput; // EnableBusinessRuleOutput

exports.cEnableBusinessRuleOutput = cEnableBusinessRuleOutput;
var cEnableBusinessRulePerformanceMetrics = w.cEnable + w.cBusiness + w.cRule + w.cPerformance + w.cMetrics; // EnableBusinessRulePerformanceMetrics

exports.cEnableBusinessRulePerformanceMetrics = cEnableBusinessRulePerformanceMetrics;
var cEnableCommandPerformanceMetrics = w.cEnable + w.cCommand + w.cPerformance + w.cMetrics; // EnableCommandPerformanceMetrics

exports.cEnableCommandPerformanceMetrics = cEnableCommandPerformanceMetrics;
var cEnableConstantsValidation = w.cEnable + w.cConstants + w.cValidation; // EnableConstantsValidation
// Test Time Tracking

exports.cEnableConstantsValidation = cEnableConstantsValidation;
var cBeginDateTimeStamp = w.cBegin + cDateTimeStamp; // BeginDateTimeStamp

exports.cBeginDateTimeStamp = cBeginDateTimeStamp;
var cEndDateTimeStamp = w.cEnd + cDateTimeStamp; // EndDateTimeStamp

exports.cEndDateTimeStamp = cEndDateTimeStamp;
var cItemsIndividuallySynch = w.cItems + w.cIndividually + w.cSynch; // ItemsIndividuallySynch

exports.cItemsIndividuallySynch = cItemsIndividuallySynch;
var cTimeStampVariableName = cTimeStamp + w.cVariable + w.cName; // TimeStampVariableName

exports.cTimeStampVariableName = cTimeStampVariableName;
var cBeginTimeStampVariableName = w.cBegin + cTimeStampVariableName; // BeginTimeStampVariableName

exports.cBeginTimeStampVariableName = cBeginTimeStampVariableName;
var cEndTimeStampVariableName = w.cEnd + cTimeStampVariableName; // EndTimeStampVariableName

exports.cEndTimeStampVariableName = cEndTimeStampVariableName;
var cBusinessRulePerformanceTrackingStack = w.cBusiness + w.cRule + w.cPerformance + w.cTracking + w.cStack; // BusinessRulePerformanceTrackingStack

exports.cBusinessRulePerformanceTrackingStack = cBusinessRulePerformanceTrackingStack;
var cBusinessRuleNamesPerformanceTrackingStack = w.cBusiness + w.cRule + w.cNames + w.cPerformance + w.cTracking + w.cStack; // BusinessRuleNamesPerformanceTrackingStack

exports.cBusinessRuleNamesPerformanceTrackingStack = cBusinessRuleNamesPerformanceTrackingStack;
var cBusinessRulesPerformanceAnalysisStack = w.cBusiness + w.cRules + w.cPerformance + w.cAnalysis + w.cStack; // BusinessRulesPerformanceAnalysisStack

exports.cBusinessRulesPerformanceAnalysisStack = cBusinessRulesPerformanceAnalysisStack;
var cClearBusinessRulesPerformanceDataAfterAnalysis = w.cClear + w.cBusiness + w.cRules + w.cPerformance + w.cData + w.cAfter + w.cAnalysis; // ClearBusinessRulesPerformanceDataAfterAnalysis

exports.cClearBusinessRulesPerformanceDataAfterAnalysis = cClearBusinessRulesPerformanceDataAfterAnalysis;
var cCommandPerformanceTrackingStack = w.cCommand + w.cPerformance + w.cTracking + w.cStack; // CommandPerformanceTrackingStack

exports.cCommandPerformanceTrackingStack = cCommandPerformanceTrackingStack;
var cCommandNamesPerformanceTrackingStack = w.cCommand + w.cNames + w.cPerformance + w.cTracking + w.cStack; // CommandNamesPerformanceTrackingStack

exports.cCommandNamesPerformanceTrackingStack = cCommandNamesPerformanceTrackingStack;
var cCommandsPerformanceAnalysisStack = w.cCommands + w.cPerformance + w.cAnalysis + w.cStack; // CommandsPerformanceAnalysisStack

exports.cCommandsPerformanceAnalysisStack = cCommandsPerformanceAnalysisStack;
var cClearCommandPerformanceDataAfterAnalysis = w.cClear + w.cCommand + w.cPerformance + w.cData + w.cAfter + w.cAnalysis; // ClearCommandPerformanceDataAfterAnalysis
// Business Rules

exports.cClearCommandPerformanceDataAfterAnalysis = cClearCommandPerformanceDataAfterAnalysis;
var cecho = b.cec + b.cho; // echo

exports.cecho = cecho;
var cEcho = b.cEc + b.cho; // Echo
// ********************************
// StringParsing rules in order
// ********************************

exports.cEcho = cEcho;
var cstringToBoolean = w.cstring + w.cTo + w.cBoolean; // stringToBoolean

exports.cstringToBoolean = cstringToBoolean;
var cstringToDataType = w.cstring + w.cTo + w.cData + w.cType; // stringToDataType

exports.cstringToDataType = cstringToDataType;
var cdetermineObjectDataType = w.cdetermine + w.cObject + w.cData + w.cType; // determineObjectDataType

exports.cdetermineObjectDataType = cdetermineObjectDataType;
var cisBoolean = w.cis + w.cBoolean; // isBoolean

exports.cisBoolean = cisBoolean;
var cisInteger = w.cis + w.cInteger; // isInteger

exports.cisInteger = cisInteger;
var cisFloat = w.cis + w.cFloat; // isFloat

exports.cisFloat = cisFloat;
var cisString = w.cis + w.cString; // isString

exports.cisString = cisString;
var csingleQuoteSwapAfterEquals = w.csingle + w.cQuote + w.cSwap + w.cAfter + w.cEquals; // singleQuoteSwapAfterEquals

exports.csingleQuoteSwapAfterEquals = csingleQuoteSwapAfterEquals;
var cswapForwardSlashToBackSlash = w.cswap + cForwardSlash + b.cTo + cBackSlash; // swapForwadSlashToBackSlash

exports.cswapForwardSlashToBackSlash = cswapForwardSlashToBackSlash;
var cswapBackSlashToForwardSlash = w.cswap + cBackSlash + b.cTo + cForwardSlash; // swapBackSlashToForwardSlash

exports.cswapBackSlashToForwardSlash = cswapBackSlashToForwardSlash;
var cswapDoubleForwardSlashToSingleForwardSlash = w.cswap + w.cDouble + cForwardSlash + b.cTo + w.cSingle + cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash

exports.cswapDoubleForwardSlashToSingleForwardSlash = cswapDoubleForwardSlashToSingleForwardSlash;
var cswapDoubleBackSlashToSingleBackSlash = w.cswap + w.cDouble + cBackSlash + b.cTo + w.cSingle + cBackSlash; // swapDoubleBackSlashToSingleBackSlash

exports.cswapDoubleBackSlashToSingleBackSlash = cswapDoubleBackSlashToSingleBackSlash;
var cgetUserNameFromEmail = w.cget + w.cUser + w.cName + w.cFrom + w.cEmail; // getUserNameFromEmail

exports.cgetUserNameFromEmail = cgetUserNameFromEmail;
var creplaceSpacesWithPlus = w.creplace + w.cSpaces + w.cWith + w.cPlus; // replaceSpacesWithPlus

exports.creplaceSpacesWithPlus = creplaceSpacesWithPlus;
var creplaceColonWithUnderscore = w.creplace + w.cColon + w.cWith + cUnderscore; // replaceColonWithUnderscore

exports.creplaceColonWithUnderscore = creplaceColonWithUnderscore;
var creplaceCharacterWithCharacter = w.creplace + w.cCharacter + w.cWith + w.cCharacter; // replaceCharacterWithCharacter

exports.creplaceCharacterWithCharacter = creplaceCharacterWithCharacter;
var ccleanCarriageReturnFromString = w.cclean + cCarriageReturn + w.cFrom + w.cString; // cleanCarriageReturnFromString

exports.ccleanCarriageReturnFromString = ccleanCarriageReturnFromString;
var cconvertStringToLowerCase = w.cconvert + w.cString + w.cTo + w.cLower + w.cCase; // convertStringToLowerCase

exports.cconvertStringToLowerCase = cconvertStringToLowerCase;
var cconvertStringToUpperCase = w.cconvert + w.cString + w.cTo + w.cUpper + w.cCase; // convertStringToUpperCase

exports.cconvertStringToUpperCase = cconvertStringToUpperCase;
var cgetFileNameFromPath = w.cget + cFileName + w.cFrom + w.cPath; // getFileNameFromPath

exports.cgetFileNameFromPath = cgetFileNameFromPath;
var cgetFileExtension = w.cget + w.cFile + w.cExtension; // getFileExtension

exports.cgetFileExtension = cgetFileExtension;
var cremoveDotFromFileExtension = w.cremove + p.cDot + w.cFrom + w.cFile + w.cExtension; // removeDotFromFileExtension

exports.cremoveDotFromFileExtension = cremoveDotFromFileExtension;
var cremoveFileExtensionFromFileName = w.cremove + w.cFile + w.cExtension + w.cFrom + cFileName; // removeFileExtensionFromFileName

exports.cremoveFileExtensionFromFileName = cremoveFileExtensionFromFileName;
var cgetValueFromAssignmentOperationString = w.cget + w.cValue + w.cFrom + w.cAssignment + w.cOperation + w.cString; // getValueFromAssignmentOperationString

exports.cgetValueFromAssignmentOperationString = cgetValueFromAssignmentOperationString;
var caggregateNumericalDifferenceBetweenTwoStrings = w.caggregate + w.cNumerical + w.cDifference + w.cBetween + n.cTwo + w.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings

exports.caggregateNumericalDifferenceBetweenTwoStrings = caggregateNumericalDifferenceBetweenTwoStrings;
var cconvertCamelCaseStringToArray = w.cconvert + w.cCamel + w.cCase + w.cString + b.cTo + w.cArray; // convertCamelCaseStringToArray

exports.cconvertCamelCaseStringToArray = cconvertCamelCaseStringToArray;
var cconvertArrayToCamelCaseString = w.cconvert + w.cArray + b.cTo + w.cCamel + w.cCase + w.cString; // convertArrayToCamelCaseString

exports.cconvertArrayToCamelCaseString = cconvertArrayToCamelCaseString;
var cmapWordToCamelCaseWord = p.cmap + w.cWord + b.cTo + w.cCamel + w.cCase + w.cWord; // mapWordToCamelCaseWord

exports.cmapWordToCamelCaseWord = cmapWordToCamelCaseWord;
var csimplifyAndConsolidateString = w.csimplify + w.cAnd + w.cConsolidate + w.cString; // simplifyAndConsolidateString

exports.csimplifyAndConsolidateString = csimplifyAndConsolidateString;
var ccompareSimplifiedAndConsolidatedStrings = w.ccompare + w.cSimplified + w.cAnd + w.cConsolidated + w.cStrings; // compareSimplifiedAndConsolidatedStrings

exports.ccompareSimplifiedAndConsolidatedStrings = ccompareSimplifiedAndConsolidatedStrings;
var cdoesArrayContainLowerCaseConsolidatedString = w.cdoes + w.cArray + w.cContain + w.cLower + w.cCase + w.cConsolidated + w.cString; // doesArrayContainLowerCaseConsolidatedString

exports.cdoesArrayContainLowerCaseConsolidatedString = cdoesArrayContainLowerCaseConsolidatedString;
var cdoesArrayContainCharacter = w.cdoes + w.cArray + w.cContain + w.cCharacter; // doesArrayContainCharacter

exports.cdoesArrayContainCharacter = cdoesArrayContainCharacter;
var cremoveCharacterFromArray = w.cremove + w.cCharacter + w.cFrom + w.cArray; // removeCharacterFromArray

exports.cremoveCharacterFromArray = cremoveCharacterFromArray;
var cascertainMatchingFilenames = w.cascertain + w.cMatching + cFilenames; // ascertainMatchingFilenames

exports.cascertainMatchingFilenames = cascertainMatchingFilenames;
var cdoesArrayContainFilename = w.cdoes + w.cArray + w.cContain + cFilename; // doesArrayContainFilename

exports.cdoesArrayContainFilename = cdoesArrayContainFilename;
var cvalidateConstantsDataValidation = w.cvalidate + w.cConstants + w.cData + w.cValidation; // validateConstantsDataValidation

exports.cvalidateConstantsDataValidation = cvalidateConstantsDataValidation;
var cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidation + w.cLine + w.cItem + w.cName; // validateConstantsDataValidationLineItemName

exports.cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidationLineItemName;
var cgetDataCatagoryFromDataContextName = w.cget + w.cData + w.cCatagory + w.cFrom + w.cData + w.cContext + w.cName; // getDataCatagoryFromDataContextName

exports.cgetDataCatagoryFromDataContextName = cgetDataCatagoryFromDataContextName;
var cgetDataCatagoryDetailNameFromDataContextName = w.cget + w.cData + w.cCatagory + w.cDetail + w.cName + w.cFrom + w.cData + w.cContext + w.cName; // getDataCatagoryDetailNameFromDataContextName

exports.cgetDataCatagoryDetailNameFromDataContextName = cgetDataCatagoryDetailNameFromDataContextName;
var cgetKeywordNameFromDataContextName = w.cget + w.cKeyword + w.cName + w.cFrom + w.cData + w.cContext + w.cName; // getKeywordNameFromDataContextName

exports.cgetKeywordNameFromDataContextName = cgetKeywordNameFromDataContextName;
var cparseSystemRootPath = w.cparse + w.cSystem + w.cRoot + w.cPath; // parseSystemRootPath

exports.cparseSystemRootPath = cparseSystemRootPath;
var creplaceDoublePercentWithMessage = w.creplace + w.cDouble + w.cPercent + w.cWith + w.cMessage; // replaceDoublePercentWithMessage

exports.creplaceDoublePercentWithMessage = creplaceDoublePercentWithMessage;
var cremoveXnumberOfFoldersFromEndOfPath = w.cremove + b.cX + w.cnumber + b.cOf + w.cFolders + w.cFrom + w.cEnd + b.cOf + w.cPath; // removeXnumberOfFoldersFromEndOfPath

exports.cremoveXnumberOfFoldersFromEndOfPath = cremoveXnumberOfFoldersFromEndOfPath;
var cgetFirstTopLevelFolderFromPath = w.cget + n.cFirst + w.cTop + w.cLevel + w.cFolder + w.cFrom + w.cPath; // getFirstTopLevelFolderFromPath

exports.cgetFirstTopLevelFolderFromPath = cgetFirstTopLevelFolderFromPath;
var cisOdd = b.cis + w.cOdd; // isOdd

exports.cisOdd = cisOdd;
var cisEven = b.cis + w.cEven; // isEven

exports.cisEven = cisEven;
var creplaceCharacterAtIndex = w.creplace + w.cCharacter + w.cAt + w.cIndex; // replaceCharacterAtIndex
// *********************************
// StringGeneration rules in order
// *********************************

exports.creplaceCharacterAtIndex = creplaceCharacterAtIndex;
var cgenerateRandomMixedCaseTextByLength1 = cgenerateRandom + cMixedCase + cTextByLength + n.c1; // generateRandomMixedCaseTextByLength1

exports.cgenerateRandomMixedCaseTextByLength1 = cgenerateRandomMixedCaseTextByLength1;
var cgenerateRandomMixedCaseTextByLength2 = cgenerateRandom + cMixedCase + cTextByLength + n.c2; // generateRandomMixedCaseTextByLength2

exports.cgenerateRandomMixedCaseTextByLength2 = cgenerateRandomMixedCaseTextByLength2;
var cgenerateRandomUpperCaseTextByLength1 = cgenerateRandom + cUpperCase + cTextByLength + n.c1; // generateRandomUpperCaseTextByLength1

exports.cgenerateRandomUpperCaseTextByLength1 = cgenerateRandomUpperCaseTextByLength1;
var cgenerateRandomUpperCaseTextByLength2 = cgenerateRandom + cUpperCase + cTextByLength + n.c2; // generateRandomUpperCaseTextByLength2

exports.cgenerateRandomUpperCaseTextByLength2 = cgenerateRandomUpperCaseTextByLength2;
var cgenerateRandomLowerCaseTextByLength1 = cgenerateRandom + cLowerCase + cTextByLength + n.c1; // generateRandomLowerCaseTextByLength1

exports.cgenerateRandomLowerCaseTextByLength1 = cgenerateRandomLowerCaseTextByLength1;
var cgenerateRandomLowerCaseTextByLength2 = cgenerateRandom + cLowerCase + cTextByLength + n.c2; // generateRandomLowerCaseTextByLength2

exports.cgenerateRandomLowerCaseTextByLength2 = cgenerateRandomLowerCaseTextByLength2;
var cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomMixedCaseTextWithSpecialCharactersByLength1

exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1;
var cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomMixedCaseTextWithSpecialCharactersByLength2

exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2;
var cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomUpperCaseTextWithSpecialCharactersByLength1

exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1;
var cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomUpperCaseTextWithSpecialCharactersByLength2

exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2;
var cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomLowerCaseTextWithSpecialCharactersByLength1

exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1;
var cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomLowerCaseTextWithSpecialCharactersByLength2

exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2;
var cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + n.c1; // generateRandomMixedCaseAlphaNumericCodeByLength1

exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandomMixedCaseAlphaNumericCodeByLength1;
var cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + n.c2; // generateRandomMixedCaseAlphaNumericCodeByLength2

exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandomMixedCaseAlphaNumericCodeByLength2;
var cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + n.c1; // generateRandomUpperCaseAlphaNumericCodeByLength1

exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandomUpperCaseAlphaNumericCodeByLength1;
var cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + n.c2; // generateRandomUpperCaseAlphaNumericCodeByLength2

exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandomUpperCaseAlphaNumericCodeByLength2;
var cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + n.c1; // generateRandomLowerCaseAlphaNumericCodeByLength1

exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandomLowerCaseAlphaNumericCodeByLength1;
var cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + n.c2; // generateRandomLowerCaseAlphaNumericCodeByLength2

exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandomLowerCaseAlphaNumericCodeByLength2;
var cgenerateRandomNumericCodeByLength1 = cgenerateRandom + cNumericCodeByLength + n.c1; // generateRandomNumericCodeByLength1

exports.cgenerateRandomNumericCodeByLength1 = cgenerateRandomNumericCodeByLength1;
var cgenerateRandomNumericCodeByLength2 = cgenerateRandom + cNumericCodeByLength + n.c2; // generateRandomNumericCodeByLength2

exports.cgenerateRandomNumericCodeByLength2 = cgenerateRandomNumericCodeByLength2;
var cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1

exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1;
var cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2

exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2;
var cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1

exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1;
var cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2

exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2;
var cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1

exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1;
var cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2

exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2;
var cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandom + cSpecialCharacterCodeByLength + n.c1; // generateRandomSpecialCharacterCodeByLength1

exports.cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandomSpecialCharacterCodeByLength1;
var cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandom + cSpecialCharacterCodeByLength + n.c2; // generateRandomSpecialCharacterCodeByLength2

exports.cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandomSpecialCharacterCodeByLength2;
var cgenerateValidEmail1 = w.cgenerate + cValidEmail + n.c1; // generateValidEmail1

exports.cgenerateValidEmail1 = cgenerateValidEmail1;
var cgenerateValidEmail2 = w.cgenerate + cValidEmail + n.c2; // generateValidEmail2

exports.cgenerateValidEmail2 = cgenerateValidEmail2;
var cgenerateInvalidEmail1 = w.cgenerate + cInvalidEmail + n.c1; // generateInvalidEmail1

exports.cgenerateInvalidEmail1 = cgenerateInvalidEmail1;
var cgenerateInvalidEmail2 = w.cgenerate + cInvalidEmail + n.c2; // generateInvalidEmail2
// *********************************
// CharacterGeneration rules in order
// *********************************

exports.cgenerateInvalidEmail2 = cgenerateInvalidEmail2;
var crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateMixedCaseLetterOrSpecialCharacter1

exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerateMixedCaseLetterOrSpecialCharacter1;
var crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateMixedCaseLetterOrSpecialCharacter2

exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerateMixedCaseLetterOrSpecialCharacter2;
var crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateUpperCaseLetterOrSpecialCharacter1

exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerateUpperCaseLetterOrSpecialCharacter1;
var crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateUpperCaseLetterOrSpecialCharacter2

exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerateUpperCaseLetterOrSpecialCharacter2;
var crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateLowerCaseLetterOrSpecialCharacter1

exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerateLowerCaseLetterOrSpecialCharacter1;
var crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateLowerCaseLetterOrSpecialCharacter2

exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerateLowerCaseLetterOrSpecialCharacter2;
var crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1

exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;
var crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2

exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;
var crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1

exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;
var crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2

exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;
var crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1

exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;
var crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2

exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;
var crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateMixedCaseAlphaNumericCharacter1

exports.crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerateMixedCaseAlphaNumericCharacter1;
var crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateMixedCaseAlphaNumericCharacter2

exports.crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerateMixedCaseAlphaNumericCharacter2;
var crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateUpperCaseAlphaNumericCharacter1

exports.crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerateUpperCaseAlphaNumericCharacter1;
var crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateUpperCaseAlphaNumericCharacter2

exports.crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerateUpperCaseAlphaNumericCharacter2;
var crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateLowerCaseAlphaNumericCharacter1

exports.crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerateLowerCaseAlphaNumericCharacter1;
var crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateLowerCaseAlphaNumericCharacter2

exports.crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerateLowerCaseAlphaNumericCharacter2;
var crandomlyGenerateNumericCharacter1 = crandomlyGenerate + cNumericCharacter + n.c1; // randomlyGenerateNumericCharacter1

exports.crandomlyGenerateNumericCharacter1 = crandomlyGenerateNumericCharacter1;
var crandomlyGenerateNumericCharacter2 = crandomlyGenerate + cNumericCharacter + n.c2; // randomlyGenerateNumericCharacter2

exports.crandomlyGenerateNumericCharacter2 = crandomlyGenerateNumericCharacter2;
var crandomlyGenerateSpecialCharacter1 = crandomlyGenerate + cSpecialCharacter + n.c1; // randomlyGenerateSpecialCharacter1

exports.crandomlyGenerateSpecialCharacter1 = crandomlyGenerateSpecialCharacter1;
var crandomlyGenerateSpecialCharacter2 = crandomlyGenerate + cSpecialCharacter + n.c2; // randomlyGenerateSpecialCharacter2

exports.crandomlyGenerateSpecialCharacter2 = crandomlyGenerateSpecialCharacter2;
var crandomlyGenerateNumberInRange1 = crandomlyGenerate + cNumberInRange + n.c1; // randomlyGenerateNumberInRange1

exports.crandomlyGenerateNumberInRange1 = crandomlyGenerateNumberInRange1;
var crandomlyGenerateNumberInRange2 = crandomlyGenerate + cNumberInRange + n.c2; // randomlyGenerateNumberInRange2

exports.crandomlyGenerateNumberInRange2 = crandomlyGenerateNumberInRange2;
var crandomlyGenerateBooleanValue1 = crandomlyGenerate + cBooleanValue + n.c1; // randomlyGenerateBooleanValue1

exports.crandomlyGenerateBooleanValue1 = crandomlyGenerateBooleanValue1;
var crandomlyGenerateBooleanValue2 = crandomlyGenerate + cBooleanValue + n.c2; // randomlyGenerateBooleanValue2

exports.crandomlyGenerateBooleanValue2 = crandomlyGenerateBooleanValue2;
var crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + n.c1; // randomlyGenerateMixedCaseAlphabeticCharacter1

exports.crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerateMixedCaseAlphabeticCharacter1;
var crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + n.c2; // randomlyGenerateMixedCaseAlphabeticCharacter2

exports.crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerateMixedCaseAlphabeticCharacter2;
var crandomlyGenerateLowerCaseLetter1 = crandomlyGenerate + cLowerCase + w.cLetter + n.c1; // randomlyGenerateLowerCaseLetter1

exports.crandomlyGenerateLowerCaseLetter1 = crandomlyGenerateLowerCaseLetter1;
var crandomlyGenerateLowerCaseLetter2 = crandomlyGenerate + cLowerCase + w.cLetter + n.c2; // randomlyGenerateLowerCaseLetter2

exports.crandomlyGenerateLowerCaseLetter2 = crandomlyGenerateLowerCaseLetter2;
var crandomlyGenerateUpperCaseLetter1 = crandomlyGenerate + cUpperCase + w.cLetter + n.c1; // randomlyGenerateUpperCaseLetter1

exports.crandomlyGenerateUpperCaseLetter1 = crandomlyGenerateUpperCaseLetter1;
var crandomlyGenerateUpperCaseLetter2 = crandomlyGenerate + cUpperCase + w.cLetter + n.c2; // randomlyGenerateUpperCaseLetter2

exports.crandomlyGenerateUpperCaseLetter2 = crandomlyGenerateUpperCaseLetter2;
var cconvertNumberToUpperCaseLetter = w.cconvert + w.cNumber + w.cTo + cUpperCase + w.cLetter; // convertNumberToUpperCaseLetter

exports.cconvertNumberToUpperCaseLetter = cconvertNumberToUpperCaseLetter;
var cconvertNumberToLowerCaseLetter = w.cconvert + w.cNumber + w.cTo + cLowerCase + w.cLetter; // convertNumberToLowerCaseLetter
// *********************************
// mathOperations rules in order
// *********************************

exports.cconvertNumberToLowerCaseLetter = cconvertNumberToLowerCaseLetter;
var chex2rgbConversion = p.chex + b.c2 + p.crgb + w.cConversion; // hex2rgbConversion
// Commands

exports.chex2rgbConversion = chex2rgbConversion;
var cSystemCommandsAliasesActualPath = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cCommands + w.cBlob + b.cForwardSlash; // SystemCommandsAliasesActualPath

exports.cSystemCommandsAliasesActualPath = cSystemCommandsAliasesActualPath;
var cSystemWorkflowsActualPath = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cWorkflows + b.cForwardSlash; // SystemWorkflowsActualPath

exports.cSystemWorkflowsActualPath = cSystemWorkflowsActualPath;
var cSystemCommandsAliasesPath = w.cSystem + w.cCommands + w.cAliases + w.cPath; // SystemCommandsAliasesPath

exports.cSystemCommandsAliasesPath = cSystemCommandsAliasesPath;
var cClientCommandsAliasesPath = w.cClient + w.cCommands + w.cAliases + w.cPath; // ClientCommandsAliasesPath

exports.cClientCommandsAliasesPath = cClientCommandsAliasesPath;
var cSystemWorkflowsPath = w.cSystem + w.cWorkflows + w.cPath; // SystemWorkflowsPath

exports.cSystemWorkflowsPath = cSystemWorkflowsPath;
var cClientWorkflowsPath = w.cClient + w.cWorkflows + w.cPath; // ClientWorkflowsPath
// ********************************
// Nominal Commands in order
// ********************************

exports.cClientWorkflowsPath = cClientWorkflowsPath;
var cechoCommand = w.cecho + w.cCommand; // echoCommand

exports.cechoCommand = cechoCommand;
var cEchoCommand = w.cEcho + w.cCommand; // EchoCommand

exports.cEchoCommand = cEchoCommand;
var cworkflowHelp = w.cworkflow + w.cHelp; // workflowHelp

exports.cworkflowHelp = cworkflowHelp;
var ccommandSequencer = w.ccommand + w.cSequencer; // commandSequencer

exports.ccommandSequencer = ccommandSequencer;
var cprintDataHive = w.cprint + w.cData + w.cHive; // printDataHive

exports.cprintDataHive = cprintDataHive;
var ccommandGenerator = w.ccommand + w.cGenerator; // commandGenerator

exports.ccommandGenerator = ccommandGenerator;
var cbusinessRulesMetrics = w.cbusiness + w.cRules + w.cMetrics; // businessRulesMetrics

exports.cbusinessRulesMetrics = cbusinessRulesMetrics;
var ccommandMetrics = w.ccommand + w.cMetrics; // commandMetrics

exports.ccommandMetrics = ccommandMetrics;
var cconvertColors = w.cconvert + w.cColors; // convertColors
// ********************************
// Unit Test Constants commands in order
// ********************************

exports.cconvertColors = cconvertColors;
var cvalidateConstants = w.cvalidate + w.cConstants; // validateConstants
// ********************************
// System defined workflows
// ********************************

exports.cvalidateConstants = cvalidateConstants;
var cStartupWorkflow = w.cWorkflow + b.cSpace + w.cstartup; // StartupWorkflow

exports.cStartupWorkflow = cStartupWorkflow;