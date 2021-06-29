"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cVersionControl = exports.cConfigurationElements = exports.cConfigurationElement = exports.cConfigurationName = exports.cFileNumber = exports.cAccessLevel = exports.cShareEmail = exports.cTestDataFileName = exports.cProjectDescription = exports.cProjectName = exports.cPassword = exports.cUsername = exports.cRowNumber = exports.cIngestionCompleteDwellTime = exports.cProcessingTimeout = exports.cTestData = exports.cInnerHTML = exports.cinnerHTML = exports.cInnerText = exports.cinnerText = exports.cOperatingSystem = exports.cVisibilityCheck = exports.cvisibilityCheck = exports.cDeltaT = exports.cFileCounter = exports.cIncludeDateTimeStampInLogFiles = exports.cLogFileEnabled = exports.cConsoleLogEnabled = exports.cTestDataPath = exports.cResultsLogFilePathAndName = exports.cExecutionJournalFilePathAndName = exports.cDataLogFilePathAndName = exports.cLogFilePathAndName = exports.cDwellTime = exports.cTimeoutOverride = exports.cSpecialCharacters = exports.cAllowableCharacters = exports.cParallelMultiUnified = exports.cSynchSingular = exports.cAsynchSingular = exports.cPreValidateFileName = exports.cFileNames = exports.cFilenames = exports.cfilenames = exports.cFileName = exports.cFilename = exports.cfilename = exports.cFileTypes = exports.cfilesLists = exports.cTestRunID = exports.cHostName = exports.cBrowserName = exports.cRunTime = exports.cRuntime = exports.cEndKeywordTimeStamp = exports.cBeginKeywordTimeStamp = exports.cEndPageScriptTimeStamp = exports.cBeginPageScriptTimeStamp = exports.cEndTestTimeStamp = exports.cBeginTestTimeStamp = exports.cEndScriptTimeStamp = exports.cBeginScriptTimeStamp = exports.cScriptDateTimeStamp = exports.cTestTimeStamp = exports.cKeywordTimeStamp = exports.cScriptTimeStamp = exports.cScriptDateStamp = exports.cDateTimeStamp = exports.cPageScriptTimeStamp = exports.cTimeStamp = exports.cIntermediatePath = exports.cPageScript = exports.cEnvironmentRowNumber = exports.cEnvironmentRow = exports.cMasterRowNumber = exports.cNumberOfRows = exports.cTestAutomation = exports.cDebugFiles = exports.cDebugFunctions = exports.cDebugSelectors = exports.cDebugBrowserActions = exports.cJournalBrowserActions = exports.cLogBrowserActions = exports.cDebugKeywords = exports.cDebugPageData = exports.cDebugPageScripts = exports.cDebugTestData = exports.cDebugForceMessageToLogFile = exports.cDebugTestExhaustive = exports.cDebugPage = exports.cDebugTest = exports.cWithText = exports.cwithText = exports.cUnderline = exports.cunderline = exports.cSTYLE = exports.cITERATION = exports.cENVIRONMENT = exports.cLOG = exports.cENV = void 0;
exports.cdomainSpaceName = exports.candSuffix = exports.candPrefix = exports.cprogramLoop = exports.cGenerateA = exports.cwasCompleted = exports.cWithoutThe = exports.cfailureMode = exports.cspecifiedSuffixAndDomain = exports.callowableSpecialCharacters = exports.cgenerateSpecialCharacters = exports.cnumberOfCharactersToGenerate = exports.cbigInteger = exports.cSource2 = exports.cSource1 = exports.cDataStorage = exports.cExportConst = exports.cexportconst = exports.cHexValue = exports.cStandardDeviation = exports.cCommandWorkflows = exports.cCommandsAliases = exports.cFramework = exports.cframework = exports.crulesLibrary = exports.cBusinessRules = exports.cbusinessRules = exports.cBusinessRule = exports.cbusinessRule = exports.cColorName = exports.cColorData = exports.cConfiguration_Colors = exports.cBackground = exports.cbackground = exports.creleaseApplication = exports.cdeployMetaData = exports.cdeployApplication = exports.cSpaceIsColonSpace = exports.cBrowserRefresh = exports.cNavigateTo = exports.cnavigateTo = exports.cPage_Keywords = exports.cBackSlash = exports.cForwardSlash = exports.cVideoLogs = exports.cDashboardLogs = exports.cCarriageReturn = exports.cAlphabeticCharacter = exports.cBooleanValue = exports.cNumberInRange = exports.cNumericCharacter = exports.cWithSpecificSuffixAndDomainName = exports.cSuffixAndDomain = exports.cAlphaNumericCharacter = exports.cLetterOrNumberOrSpecialCharacter = exports.cLetterOrSpecialCharacter = exports.cLetterOr = exports.cRandomInvalidEmail = exports.cRandomValidEmail = exports.cgenerateInvalidEmail = exports.cgenerateValidEmail = exports.cInvalidEmail = exports.cValidEmail = exports.cvalidEmail = exports.cSpecialCharacterCodeByLength = exports.cAlphaNumericCodeWithSpecialCharactersByLength = exports.cAlphaNumericCodeWithSpecialCharacters = exports.cNumericCodeByLength = exports.cNumericCode = exports.cAlphaNumericCodeByLength = exports.cAlphaNumericCode = exports.cAlphaNumeric = exports.cTextWithSpecialCharactersByLength = exports.cTextWithSpecialCharacters = exports.cTextByLength = exports.cWithSpecialCharacters = exports.cSpecialCharacter = exports.cByLength = exports.cLowerCase = exports.cUpperCase = exports.cMixedCase = exports.crandomlyGenerate = exports.cgenerateRandom = exports.caddFilter = exports.caddSibling = exports.caddNth = exports.caddFindValue = exports.caddParent = exports.caddTimeout = exports.caddWithText = exports.cTestBureau = exports.cUnderscore = exports.cchildElementCount = exports.cselectorTimeout = exports.cAbreviatedSelectorsInLogs = exports.cAbreviatedSelectors = exports.cTypeText = exports.ctypeText = exports.cTestRunTime = exports.cScriptRunTime = void 0;
exports.cCommandConstantsValidation = exports.cColorConstantsValidation = exports.cBusinessConstantsValidation = exports.cBasicConstantsValidation = exports.cConstantsPhase2ValidationMessages = exports.cConstantsPhase1ValidationMessages = exports.cConstantsFilePaths = exports.cConstantsPrefix = exports.cConstantsFileNames = exports.cConstantsShortNames = exports.cConstantsValidationData = exports.cCommandQueue = exports.cclientRulesLibrary = exports.cSystemConstantsPathActual = exports.cSystemConstantsPath = exports.cClientConstantsPath = exports.cLocatorsDataPath = exports.cKeywordsDataPath = exports.cWorkflowDataPath = exports.cPageDataPath = exports.cCtempPath = exports.cDataPath = exports.cApplicationDescription = exports.cApplicationVersionNumber = exports.cConfigurationPath = exports.cApplicationCleanedRootPath = exports.cApplicationRootPath = exports.cApplicationName = exports.cctrl_z = exports.cctrl_y = exports.cctrl_x = exports.cctrl_w = exports.cctrl_v = exports.cctrl_u = exports.cctrl_t = exports.cctrl_s = exports.cctrl_r = exports.cctrl_q = exports.cctrl_p = exports.cctrl_o = exports.cctrl_n = exports.cctrl_m = exports.cctrl_l = exports.cctrl_k = exports.cctrl_j = exports.cctrl_i = exports.cctrl_h = exports.cctrl_g = exports.cctrl_f = exports.cctrl_e = exports.cctrl_d = exports.cctrl_c = exports.cctrl_b = exports.cctrl_a = exports.cPREPROD = exports.cPreProd = exports.cPRE = exports.cPre = exports.cPROD = exports.cProd = exports.cDEV = exports.cQA = exports.cButton = exports.cVRML = exports.cVrml = exports.cvrml = exports.cSolidWorks = exports.cSolidEdge = exports.cRhino = exports.cProE = exports.cParasolid = exports.cNX = exports.cNeutral = exports.cInventor = exports.cImages = exports.cImage = exports.cHOOPS = exports.cHoops = exports.cDWG = exports.cDraft = exports.cDocuments = exports.cDocument = exports.cCatia = exports.cDataFontBackgroundColor = exports.cMessageFontBackgroundColor = exports.cFunctionFontBackgroundColor = exports.cModuleFontBackgroundColor = exports.cDataFontColor = exports.cMessageFontColor = exports.cFunctionFontColor = exports.cModuleFontColor = exports.cDataFontStyle = exports.cMessageFontStyle = exports.cFunctionFontStyle = exports.cModuleFontStyle = exports.cCamelCase = exports.creturnData = exports.cLehmerCodeArray = exports.ccurrentMasterStringArrayElement = exports.candSpaceDomainSpaceName = void 0;
exports.cword_constants_js = exports.cunit_constants_js = exports.csystem_constants_js = exports.cshape_constants_js = exports.cphonic_constants_js = exports.cnumeric_constants_js = exports.cmessage_constants_js = exports.clanguage_constants_js = exports.cknot_constants_js = exports.cisotope_constants_js = exports.cgeneric_constants_js = exports.celement_constants_js = exports.ccountry_constants_js = exports.cconfiguration_constants_js = exports.ccommand_constants_js = exports.ccolor_constants_js = exports.cbusiness_constants_js = exports.cbasic_constants_js = exports.cBinaryReleasePath = exports.cBinaryRootPath = exports.cDestinationResourcesPath = exports.cSourceResourcesPath = exports.cWordConstantsValidation = exports.cUnitConstantsValidation = exports.cSystemConstantsValidation = exports.cShapeConstantsValidation = exports.cPhonicConstantsValidation = exports.cNumericConstantsValidation = exports.cMessageConstantsValidation = exports.cLanguageConstantsValidation = exports.cKnotConstantsValidation = exports.cIsotopeConstantsValidation = exports.cGenericConstantsValidation = exports.cElementConstantsValidation = exports.cCountryConstantsValidation = exports.cConfigurationConstantsValidation = void 0;

var bas = _interopRequireWildcard(require("./basic.constants"));

var phn = _interopRequireWildcard(require("./phonic.constants"));

var gen = _interopRequireWildcard(require("./generic.constants"));

var num = _interopRequireWildcard(require("./numeric.constants"));

var wrd = _interopRequireWildcard(require("./word.constants"));

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
 * @requires module:phonic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Miscelaneious
var cENV = bas.cEN + bas.cV; // ENV

exports.cENV = cENV;
var cLOG = bas.cLO + bas.cG; // LOG

exports.cLOG = cLOG;
var cENVIRONMENT = phn.cENV + bas.cIR + bas.cON + phn.cMENT; // ENVIRONMENT

exports.cENVIRONMENT = cENVIRONMENT;
var cITERATION = bas.cIT + bas.cER + bas.cAT + bas.cIO + bas.cN; // ITERATION

exports.cITERATION = cITERATION;
var cSTYLE = bas.cST + bas.cYL + bas.cE; // STYLE
// Compound System Words

exports.cSTYLE = cSTYLE;
var cunderline = wrd.cunder + wrd.cline; // underline

exports.cunderline = cunderline;
var cUnderline = wrd.cUnder + wrd.cline; // Underline

exports.cUnderline = cUnderline;
var cwithText = wrd.cwith + wrd.cText; // withText

exports.cwithText = cwithText;
var cWithText = wrd.cWith + wrd.cText; // WithText

exports.cWithText = cWithText;
var cDebugTest = wrd.cDebug + wrd.cTest; // DebugTest

exports.cDebugTest = cDebugTest;
var cDebugPage = wrd.cDebug + wrd.cPage; // DebugPage

exports.cDebugPage = cDebugPage;
var cDebugTestExhaustive = cDebugTest + wrd.cExhaustive; // DebugTestExhaustive

exports.cDebugTestExhaustive = cDebugTestExhaustive;
var cDebugForceMessageToLogFile = wrd.cDebug + wrd.cForce + wrd.cMessage + bas.cTo + wrd.cLog + wrd.cFile; // DebugForceMessageToLogFile

exports.cDebugForceMessageToLogFile = cDebugForceMessageToLogFile;
var cDebugTestData = cDebugTest + wrd.cData; // DebugTestData

exports.cDebugTestData = cDebugTestData;
var cDebugPageScripts = cDebugPage + wrd.cScripts; // DebugPageScripts

exports.cDebugPageScripts = cDebugPageScripts;
var cDebugPageData = cDebugPage + wrd.cData; // DebugPageData

exports.cDebugPageData = cDebugPageData;
var cDebugKeywords = wrd.cDebug + wrd.cKeywords; // DebugKeywords

exports.cDebugKeywords = cDebugKeywords;
var cLogBrowserActions = wrd.cLog + wrd.cBrowser + wrd.cActions; // LogBrowserActions

exports.cLogBrowserActions = cLogBrowserActions;
var cJournalBrowserActions = wrd.cJournal + wrd.cBrowser + wrd.cActions; // JournalBrowserActions

exports.cJournalBrowserActions = cJournalBrowserActions;
var cDebugBrowserActions = wrd.cDebug + wrd.cBrowser + wrd.cActions; // DebugBrowserActions

exports.cDebugBrowserActions = cDebugBrowserActions;
var cDebugSelectors = wrd.cDebug + wrd.cSelectors; // DebugSelectors

exports.cDebugSelectors = cDebugSelectors;
var cDebugFunctions = wrd.cDebug + wrd.cFunctions; // DebugFunctions

exports.cDebugFunctions = cDebugFunctions;
var cDebugFiles = wrd.cDebug + wrd.cFiles; // DebugFiles

exports.cDebugFiles = cDebugFiles;
var cTestAutomation = wrd.cTest + wrd.cAutomation; // TestAutomation

exports.cTestAutomation = cTestAutomation;
var cNumberOfRows = wrd.cNumber + wrd.cOf + wrd.cRows; // NumberOfRows

exports.cNumberOfRows = cNumberOfRows;
var cMasterRowNumber = wrd.cMaster + wrd.cRow + wrd.cNumber; // MasterRowNumber

exports.cMasterRowNumber = cMasterRowNumber;
var cEnvironmentRow = wrd.cEnvironment + wrd.cRow; // EnvironmentRow

exports.cEnvironmentRow = cEnvironmentRow;
var cEnvironmentRowNumber = cEnvironmentRow + wrd.cNumber; // EnvironmentRowNumber

exports.cEnvironmentRowNumber = cEnvironmentRowNumber;
var cPageScript = wrd.cPage + wrd.cScript; // PageScript

exports.cPageScript = cPageScript;
var cIntermediatePath = wrd.cIntermediate + wrd.cPath; // IntermediatePath

exports.cIntermediatePath = cIntermediatePath;
var cTimeStamp = wrd.cTime + wrd.cStamp; // TimeStamp

exports.cTimeStamp = cTimeStamp;
var cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp

exports.cPageScriptTimeStamp = cPageScriptTimeStamp;
var cDateTimeStamp = wrd.cDate + cTimeStamp; // DateTimeStamp

exports.cDateTimeStamp = cDateTimeStamp;
var cScriptDateStamp = wrd.cScript + wrd.cDate + wrd.cStamp; // ScriptDateStamp

exports.cScriptDateStamp = cScriptDateStamp;
var cScriptTimeStamp = wrd.cScript + cTimeStamp; // ScriptTimeStamp

exports.cScriptTimeStamp = cScriptTimeStamp;
var cKeywordTimeStamp = wrd.cKeyword + cTimeStamp; // KeywordTimeStamp

exports.cKeywordTimeStamp = cKeywordTimeStamp;
var cTestTimeStamp = wrd.cTest + cTimeStamp; // TestTimeStamp

exports.cTestTimeStamp = cTestTimeStamp;
var cScriptDateTimeStamp = wrd.cScript + cDateTimeStamp; // ScriptDateTimeStamp

exports.cScriptDateTimeStamp = cScriptDateTimeStamp;
var cBeginScriptTimeStamp = wrd.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp

exports.cBeginScriptTimeStamp = cBeginScriptTimeStamp;
var cEndScriptTimeStamp = wrd.cEnd + cScriptTimeStamp; // EndScriptTimeStamp

exports.cEndScriptTimeStamp = cEndScriptTimeStamp;
var cBeginTestTimeStamp = wrd.cBegin + cTestTimeStamp; // BeginTestTimeStamp

exports.cBeginTestTimeStamp = cBeginTestTimeStamp;
var cEndTestTimeStamp = wrd.cEnd + cTestTimeStamp; // EndTestTimeStamp

exports.cEndTestTimeStamp = cEndTestTimeStamp;
var cBeginPageScriptTimeStamp = wrd.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp

exports.cBeginPageScriptTimeStamp = cBeginPageScriptTimeStamp;
var cEndPageScriptTimeStamp = wrd.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp

exports.cEndPageScriptTimeStamp = cEndPageScriptTimeStamp;
var cBeginKeywordTimeStamp = wrd.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp

exports.cBeginKeywordTimeStamp = cBeginKeywordTimeStamp;
var cEndKeywordTimeStamp = wrd.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp

exports.cEndKeywordTimeStamp = cEndKeywordTimeStamp;
var cRuntime = wrd.cRun + wrd.ctime; // Runtime

exports.cRuntime = cRuntime;
var cRunTime = wrd.cRun + wrd.cTime; // RunTime

exports.cRunTime = cRunTime;
var cBrowserName = wrd.cBrowser + wrd.cName; // BrowserName

exports.cBrowserName = cBrowserName;
var cHostName = wrd.cHost + wrd.cName; // HostName

exports.cHostName = cHostName;
var cTestRunID = wrd.cTest + wrd.cRun + wrd.cID; // TestRunID

exports.cTestRunID = cTestRunID;
var cfilesLists = wrd.cfiles + wrd.cLists; // filesLists

exports.cfilesLists = cfilesLists;
var cFileTypes = wrd.cFile + wrd.cTypes; // FileTypes

exports.cFileTypes = cFileTypes;
var cfilename = wrd.cfile + wrd.cname; // filename

exports.cfilename = cfilename;
var cFilename = wrd.cFile + wrd.cname; // Filename

exports.cFilename = cFilename;
var cFileName = wrd.cFile + wrd.cName; // FileName

exports.cFileName = cFileName;
var cfilenames = cfilename + bas.cs; // filenames

exports.cfilenames = cfilenames;
var cFilenames = cFilename + bas.cs; // Filenames

exports.cFilenames = cFilenames;
var cFileNames = cFileName + bas.cs; // FileNames

exports.cFileNames = cFileNames;
var cPreValidateFileName = phn.cPre + wrd.cValidate + cFileName; // PreValidateFileName

exports.cPreValidateFileName = cPreValidateFileName;
var cAsynchSingular = wrd.cAsynch + wrd.cSingular; // AsynchSingular

exports.cAsynchSingular = cAsynchSingular;
var cSynchSingular = wrd.cSynch + wrd.cSingular; // SynchSingular

exports.cSynchSingular = cSynchSingular;
var cParallelMultiUnified = wrd.cParallel + wrd.cMulti + wrd.cUnified; // ParallelMultiUnified

exports.cParallelMultiUnified = cParallelMultiUnified;
var cAllowableCharacters = wrd.cAllowable + wrd.cCharacters; // AllowableCharacters

exports.cAllowableCharacters = cAllowableCharacters;
var cSpecialCharacters = wrd.cSpecial + wrd.cCharacters; // SpecialCharacters

exports.cSpecialCharacters = cSpecialCharacters;
var cTimeoutOverride = wrd.cTimeout + wrd.cOverride; // TimeoutOverride

exports.cTimeoutOverride = cTimeoutOverride;
var cDwellTime = wrd.cDwell + wrd.cTime; // DwellTime

exports.cDwellTime = cDwellTime;
var cLogFilePathAndName = wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // LogFilePathAndName

exports.cLogFilePathAndName = cLogFilePathAndName;
var cDataLogFilePathAndName = wrd.cData + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // DataLogFilePathAndName

exports.cDataLogFilePathAndName = cDataLogFilePathAndName;
var cExecutionJournalFilePathAndName = wrd.cExecution + wrd.cJournal + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ExecutionJournalFilePathAndName

exports.cExecutionJournalFilePathAndName = cExecutionJournalFilePathAndName;
var cResultsLogFilePathAndName = wrd.cResults + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ResultsLogFilePathAndName

exports.cResultsLogFilePathAndName = cResultsLogFilePathAndName;
var cTestDataPath = wrd.cTest + wrd.cData + wrd.cPath; // TestDataPath

exports.cTestDataPath = cTestDataPath;
var cConsoleLogEnabled = wrd.cConsole + wrd.cLog + wrd.cEnabled; // ConsoleLogEnabled

exports.cConsoleLogEnabled = cConsoleLogEnabled;
var cLogFileEnabled = wrd.cLog + wrd.cFile + wrd.cEnabled; // LogFileEnabled

exports.cLogFileEnabled = cLogFileEnabled;
var cIncludeDateTimeStampInLogFiles = wrd.cInclude + wrd.cDate + wrd.cTime + wrd.cStamp + bas.cIn + gen.cLog + wrd.cFiles; // IncludeDateTimeStampInLogFiles

exports.cIncludeDateTimeStampInLogFiles = cIncludeDateTimeStampInLogFiles;
var cFileCounter = wrd.cFile + wrd.cCounter; // FileCounter

exports.cFileCounter = cFileCounter;
var cDeltaT = gen.cDelta + bas.cT; // DeltaT

exports.cDeltaT = cDeltaT;
var cvisibilityCheck = wrd.cvisibility + wrd.cCheck; // visibilityCheck

exports.cvisibilityCheck = cvisibilityCheck;
var cVisibilityCheck = wrd.cVisibility + wrd.cCheck; // VisibilityCheck

exports.cVisibilityCheck = cVisibilityCheck;
var cOperatingSystem = wrd.cOperating + wrd.cSystem; // OperatingSystem

exports.cOperatingSystem = cOperatingSystem;
var cinnerText = wrd.cinner + wrd.cText; // innerText

exports.cinnerText = cinnerText;
var cInnerText = wrd.cInner + wrd.cText; // InnerText

exports.cInnerText = cInnerText;
var cinnerHTML = wrd.cinner + wrd.cHTML; // innerHTML

exports.cinnerHTML = cinnerHTML;
var cInnerHTML = wrd.cInner + wrd.cHTML; // InnerHTML

exports.cInnerHTML = cInnerHTML;
var cTestData = wrd.cTest + wrd.cData; // TestData

exports.cTestData = cTestData;
var cProcessingTimeout = wrd.cProcessing + wrd.cTimeout; // ProcessingTimeout

exports.cProcessingTimeout = cProcessingTimeout;
var cIngestionCompleteDwellTime = wrd.cIngestion + wrd.cComplete + cDwellTime; // IngestionCompleteDwellTime

exports.cIngestionCompleteDwellTime = cIngestionCompleteDwellTime;
var cRowNumber = wrd.cRow + wrd.cNumber; // RowNumber

exports.cRowNumber = cRowNumber;
var cUsername = wrd.cUser + wrd.cname; // Username

exports.cUsername = cUsername;
var cPassword = wrd.cPass + wrd.cword; // Password

exports.cPassword = cPassword;
var cProjectName = wrd.cProject + wrd.cName; // ProjectName

exports.cProjectName = cProjectName;
var cProjectDescription = wrd.cProject + wrd.cDescription; // ProjectDescription

exports.cProjectDescription = cProjectDescription;
var cTestDataFileName = wrd.cTest + wrd.cData + cFileName; // TestDataFileName

exports.cTestDataFileName = cTestDataFileName;
var cShareEmail = wrd.cShare + wrd.cEmail; // ShareEmail

exports.cShareEmail = cShareEmail;
var cAccessLevel = wrd.cAccess + wrd.cLevel; // AccessLevel

exports.cAccessLevel = cAccessLevel;
var cFileNumber = wrd.cFile + wrd.cNumber; // FileNumber

exports.cFileNumber = cFileNumber;
var cConfigurationName = wrd.cConfiguration + wrd.cName; // ConfigurationName

exports.cConfigurationName = cConfigurationName;
var cConfigurationElement = wrd.cConfiguration + wrd.cElement; // ConfigurationElement

exports.cConfigurationElement = cConfigurationElement;
var cConfigurationElements = cConfigurationElement + bas.cs; // ConfigurationElements

exports.cConfigurationElements = cConfigurationElements;
var cVersionControl = wrd.cVersion + wrd.cControl; // VersionControl

exports.cVersionControl = cVersionControl;
var cScriptRunTime = wrd.cScript + cRunTime; // ScriptRunTime

exports.cScriptRunTime = cScriptRunTime;
var cTestRunTime = wrd.cTest + cRunTime; // TestRunTime

exports.cTestRunTime = cTestRunTime;
var ctypeText = wrd.ctype + wrd.cText; // typeText

exports.ctypeText = ctypeText;
var cTypeText = wrd.cType + wrd.cText; // TypeText

exports.cTypeText = cTypeText;
var cAbreviatedSelectors = wrd.cAbreviated + wrd.cSelectors; // AbreviatedSelectors

exports.cAbreviatedSelectors = cAbreviatedSelectors;
var cAbreviatedSelectorsInLogs = cAbreviatedSelectors + bas.cIn + wrd.cLogs; // AbreviatedSelectorsInLogs

exports.cAbreviatedSelectorsInLogs = cAbreviatedSelectorsInLogs;
var cselectorTimeout = wrd.cselector + wrd.cTimeout; // selectorTimeout

exports.cselectorTimeout = cselectorTimeout;
var cchildElementCount = wrd.cchild + wrd.cElement + wrd.cCount; // childElementCount

exports.cchildElementCount = cchildElementCount;
var cUnderscore = wrd.cUnder + wrd.cscore; // Underscore

exports.cUnderscore = cUnderscore;
var cTestBureau = wrd.cTest + wrd.cBureau; // TestBureau

exports.cTestBureau = cTestBureau;
var caddWithText = wrd.c_add + wrd.cWith + wrd.cText; // addWithText

exports.caddWithText = caddWithText;
var caddTimeout = wrd.c_add + wrd.cTimeout; // addTimeout

exports.caddTimeout = caddTimeout;
var caddParent = wrd.c_add + wrd.cParent; // addParent

exports.caddParent = caddParent;
var caddFindValue = wrd.c_add + wrd.cFind + wrd.cValue; // addFindValue

exports.caddFindValue = caddFindValue;
var caddNth = wrd.c_add + wrd.cNth; // addNth

exports.caddNth = caddNth;
var caddSibling = wrd.c_add + wrd.cSibling; // addSibling

exports.caddSibling = caddSibling;
var caddFilter = wrd.c_add + wrd.cFilter; // addFilter

exports.caddFilter = caddFilter;
var cgenerateRandom = wrd.cgenerate + wrd.cRandom; // generateRandom

exports.cgenerateRandom = cgenerateRandom;
var crandomlyGenerate = wrd.crandomly + wrd.cGenerate; // randomlyGenerate

exports.crandomlyGenerate = crandomlyGenerate;
var cMixedCase = wrd.cMixed + wrd.cCase; // MixedCase

exports.cMixedCase = cMixedCase;
var cUpperCase = wrd.cUpper + wrd.cCase; // UpperCase

exports.cUpperCase = cUpperCase;
var cLowerCase = wrd.cLower + wrd.cCase; // LowerCase

exports.cLowerCase = cLowerCase;
var cByLength = wrd.cBy + wrd.cLength; // ByLength

exports.cByLength = cByLength;
var cSpecialCharacter = wrd.cSpecial + wrd.cCharacter; // SpecialCharacter

exports.cSpecialCharacter = cSpecialCharacter;
var cWithSpecialCharacters = wrd.cWith + cSpecialCharacters; // WithSpecialCharacters

exports.cWithSpecialCharacters = cWithSpecialCharacters;
var cTextByLength = wrd.cText + cByLength; // TextByLength

exports.cTextByLength = cTextByLength;
var cTextWithSpecialCharacters = wrd.cText + cWithSpecialCharacters; // TextWithSpecialCharacters

exports.cTextWithSpecialCharacters = cTextWithSpecialCharacters;
var cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength

exports.cTextWithSpecialCharactersByLength = cTextWithSpecialCharactersByLength;
var cAlphaNumeric = wrd.cAlpha + wrd.cNumeric; // AlphaNumeric

exports.cAlphaNumeric = cAlphaNumeric;
var cAlphaNumericCode = cAlphaNumeric + wrd.cCode; // AlphaNumericCode

exports.cAlphaNumericCode = cAlphaNumericCode;
var cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength

exports.cAlphaNumericCodeByLength = cAlphaNumericCodeByLength;
var cNumericCode = wrd.cNumeric + wrd.cCode; // NumericCode

exports.cNumericCode = cNumericCode;
var cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength

exports.cNumericCodeByLength = cNumericCodeByLength;
var cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters

exports.cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCodeWithSpecialCharacters;
var cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength

exports.cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharactersByLength;
var cSpecialCharacterCodeByLength = cSpecialCharacter + wrd.cCode + cByLength; // SpecialCharacterCodeByLength

exports.cSpecialCharacterCodeByLength = cSpecialCharacterCodeByLength;
var cvalidEmail = wrd.cvalid + wrd.cEmail; // validEmail

exports.cvalidEmail = cvalidEmail;
var cValidEmail = wrd.cValid + wrd.cEmail; // ValidEmail

exports.cValidEmail = cValidEmail;
var cInvalidEmail = bas.cIn + cvalidEmail; // InvalidEmail

exports.cInvalidEmail = cInvalidEmail;
var cgenerateValidEmail = wrd.cgenerate + cValidEmail; // generateValidEmail

exports.cgenerateValidEmail = cgenerateValidEmail;
var cgenerateInvalidEmail = wrd.cgenerate + cInvalidEmail; // generateInvalidEmail

exports.cgenerateInvalidEmail = cgenerateInvalidEmail;
var cRandomValidEmail = wrd.cRandom + cValidEmail; // RandomValidEmail

exports.cRandomValidEmail = cRandomValidEmail;
var cRandomInvalidEmail = wrd.cRandom + cInvalidEmail; // RandomInvalidEmail

exports.cRandomInvalidEmail = cRandomInvalidEmail;
var cLetterOr = wrd.cLetter + bas.cOr; // LetterOr

exports.cLetterOr = cLetterOr;
var cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter

exports.cLetterOrSpecialCharacter = cLetterOrSpecialCharacter;
var cLetterOrNumberOrSpecialCharacter = cLetterOr + wrd.cNumber + wrd.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter

exports.cLetterOrNumberOrSpecialCharacter = cLetterOrNumberOrSpecialCharacter;
var cAlphaNumericCharacter = cAlphaNumeric + wrd.cCharacter; // AlphaNumericCharacter

exports.cAlphaNumericCharacter = cAlphaNumericCharacter;
var cSuffixAndDomain = wrd.cSuffix + wrd.cAnd + wrd.cDomain; // SuffixAndDomain

exports.cSuffixAndDomain = cSuffixAndDomain;
var cWithSpecificSuffixAndDomainName = wrd.cWith + wrd.cSpecific + wrd.cSuffix + wrd.cAnd + wrd.cDomain + wrd.cName; // WithSpecificSuffixAndDomainName

exports.cWithSpecificSuffixAndDomainName = cWithSpecificSuffixAndDomainName;
var cNumericCharacter = wrd.cNumeric + wrd.cCharacter; // NumericCharacter

exports.cNumericCharacter = cNumericCharacter;
var cNumberInRange = wrd.cNumber + bas.cIn + wrd.cRange; // NumberInRange

exports.cNumberInRange = cNumberInRange;
var cBooleanValue = wrd.cBoolean + wrd.cValue; // BooleanValue

exports.cBooleanValue = cBooleanValue;
var cAlphabeticCharacter = wrd.cAlphabetic + wrd.cCharacter; // AlphabeticCharacter

exports.cAlphabeticCharacter = cAlphabeticCharacter;
var cCarriageReturn = wrd.cCarriage + wrd.cReturn; // CarriageReturn

exports.cCarriageReturn = cCarriageReturn;
var cDashboardLogs = wrd.cDashboard + wrd.cLogs; // DashboardLogs

exports.cDashboardLogs = cDashboardLogs;
var cVideoLogs = wrd.cVideo + wrd.cLogs; // VideoLogs

exports.cVideoLogs = cVideoLogs;
var cForwardSlash = wrd.cForward + wrd.cSlash; // ForwardSlash

exports.cForwardSlash = cForwardSlash;
var cBackSlash = wrd.cBack + wrd.cSlash; // BackSlash

exports.cBackSlash = cBackSlash;
var cPage_Keywords = wrd.cPage + bas.cUnderscore + wrd.cKeywords; // Page_Keywords

exports.cPage_Keywords = cPage_Keywords;
var cnavigateTo = wrd.cnavigate + bas.cTo; // navigateTo

exports.cnavigateTo = cnavigateTo;
var cNavigateTo = wrd.cNavigate + bas.cTo; // NavigateTo

exports.cNavigateTo = cNavigateTo;
var cBrowserRefresh = wrd.cBrowser + wrd.cRefresh; // BrowserRefresh

exports.cBrowserRefresh = cBrowserRefresh;
var cSpaceIsColonSpace = bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // is:

exports.cSpaceIsColonSpace = cSpaceIsColonSpace;
var cdeployApplication = wrd.cdeploy + wrd.cApplication; // deployApplication

exports.cdeployApplication = cdeployApplication;
var cdeployMetaData = wrd.cdeploy + wrd.cMetaData; // deployMetaData

exports.cdeployMetaData = cdeployMetaData;
var creleaseApplication = wrd.crelease + wrd.cApplication; // releaseApplication

exports.creleaseApplication = creleaseApplication;
var cbackground = wrd.cback + wrd.cground; // background

exports.cbackground = cbackground;
var cBackground = wrd.cBack + wrd.cground; // Background

exports.cBackground = cBackground;
var cConfiguration_Colors = wrd.cConfiguration + bas.cUnderscore + wrd.cColors; // Configuration_Colors

exports.cConfiguration_Colors = cConfiguration_Colors;
var cColorData = wrd.cColor + wrd.cData; // ColorData

exports.cColorData = cColorData;
var cColorName = wrd.cColor + wrd.cName; // ColorName

exports.cColorName = cColorName;
var cbusinessRule = wrd.cbusiness + wrd.cRule; // businessRule

exports.cbusinessRule = cbusinessRule;
var cBusinessRule = wrd.cBusiness + wrd.cRule; // BusinessRule

exports.cBusinessRule = cBusinessRule;
var cbusinessRules = wrd.cbusiness + wrd.cRules; // businessRules

exports.cbusinessRules = cbusinessRules;
var cBusinessRules = wrd.cBusiness + wrd.cRules; // BusinessRules

exports.cBusinessRules = cBusinessRules;
var crulesLibrary = wrd.crules + wrd.cLibrary; // rulesLibrary

exports.crulesLibrary = crulesLibrary;
var cframework = wrd.cframe + wrd.cwork; // framework

exports.cframework = cframework;
var cFramework = wrd.cFrame + wrd.cwork; // Framework

exports.cFramework = cFramework;
var cCommandsAliases = wrd.cCommands + wrd.cAliases; // CommandsAliases

exports.cCommandsAliases = cCommandsAliases;
var cCommandWorkflows = wrd.cCommand + wrd.cWorkflows; // CommandWorkflows

exports.cCommandWorkflows = cCommandWorkflows;
var cStandardDeviation = wrd.cStandard + wrd.cDeviation; // StandardDeviation

exports.cStandardDeviation = cStandardDeviation;
var cHexValue = phn.cHex + wrd.cValue; // HexValue

exports.cHexValue = cHexValue;
var cexportconst = wrd.cexport + bas.cSpace + gen.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.

exports.cexportconst = cexportconst;
var cExportConst = wrd.cExport + bas.cSpace + gen.cConst; // smuggle something

exports.cExportConst = cExportConst;
var cDataStorage = wrd.cData + wrd.cStorage; // DataStorage

exports.cDataStorage = cDataStorage;
var cSource1 = wrd.cSource + num.c1; // Source1

exports.cSource1 = cSource1;
var cSource2 = wrd.cSource + num.c2; // Source2

exports.cSource2 = cSource2;
var cbigInteger = wrd.cbig + wrd.cInteger; // bigInteger

exports.cbigInteger = cbigInteger;
var cnumberOfCharactersToGenerate = wrd.cnumber + bas.cOf + wrd.cCharacters + bas.cTo + wrd.cGenerate; // numberOfCharactersToGenerate

exports.cnumberOfCharactersToGenerate = cnumberOfCharactersToGenerate;
var cgenerateSpecialCharacters = wrd.cgenerate + cSpecialCharacters; // generateSpecialCharacters

exports.cgenerateSpecialCharacters = cgenerateSpecialCharacters;
var callowableSpecialCharacters = wrd.callowable + cSpecialCharacters; // allowableSpecialCharacters

exports.callowableSpecialCharacters = callowableSpecialCharacters;
var cspecifiedSuffixAndDomain = wrd.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain

exports.cspecifiedSuffixAndDomain = cspecifiedSuffixAndDomain;
var cfailureMode = wrd.cfailure + wrd.cMode; // failureMode

exports.cfailureMode = cfailureMode;
var cWithoutThe = wrd.cWithout + bas.cSpace + wrd.cthe; // Without the

exports.cWithoutThe = cWithoutThe;
var cwasCompleted = wrd.cwas + bas.cSpace + wrd.ccompleted; // was completed

exports.cwasCompleted = cwasCompleted;
var cGenerateA = wrd.cGenerate + bas.cSpace + bas.ca; // Generate a

exports.cGenerateA = cGenerateA;
var cprogramLoop = wrd.cprogram + bas.cSpace + wrd.cloop; // program loop

exports.cprogramLoop = cprogramLoop;
var candPrefix = wrd.cand + bas.cSpace + wrd.cprefix; // and prefix

exports.candPrefix = candPrefix;
var candSuffix = wrd.cand + bas.cSpace + wrd.csuffix; // and suffix

exports.candSuffix = candSuffix;
var cdomainSpaceName = wrd.cdomain + bas.cSpace + wrd.cname; // domain name

exports.cdomainSpaceName = cdomainSpaceName;
var candSpaceDomainSpaceName = wrd.cand + bas.cSpace + cdomainSpaceName; // and domain name

exports.candSpaceDomainSpaceName = candSpaceDomainSpaceName;
var ccurrentMasterStringArrayElement = wrd.ccurrent + wrd.cMaster + wrd.cString + wrd.cArray + wrd.cElement; // currentMasterStringArrayElement

exports.ccurrentMasterStringArrayElement = ccurrentMasterStringArrayElement;
var cLehmerCodeArray = wrd.cLehmer + wrd.cCode + wrd.cArray; // LehmerCodeArray

exports.cLehmerCodeArray = cLehmerCodeArray;
var creturnData = wrd.creturn + wrd.cData; // returnData

exports.creturnData = creturnData;
var cCamelCase = wrd.cCamel + wrd.cCase; // CamelCase
// Logging Styles Constants

exports.cCamelCase = cCamelCase;
var cModuleFontStyle = wrd.cModule + wrd.cFont + wrd.cStyle; // ModuleFontStyle

exports.cModuleFontStyle = cModuleFontStyle;
var cFunctionFontStyle = wrd.cFunction + wrd.cFont + wrd.cStyle; // FunctionFontStyle

exports.cFunctionFontStyle = cFunctionFontStyle;
var cMessageFontStyle = wrd.cMessage + wrd.cFont + wrd.cStyle; // MessageFontStyle

exports.cMessageFontStyle = cMessageFontStyle;
var cDataFontStyle = wrd.cData + wrd.cFont + wrd.cStyle; // DataFontStyle

exports.cDataFontStyle = cDataFontStyle;
var cModuleFontColor = wrd.cModule + wrd.cFont + wrd.cColor; // ModuleFontColor

exports.cModuleFontColor = cModuleFontColor;
var cFunctionFontColor = wrd.cFunction + wrd.cFont + wrd.cColor; // FunctionFontColor

exports.cFunctionFontColor = cFunctionFontColor;
var cMessageFontColor = wrd.cMessage + wrd.cFont + wrd.cColor; // MessageFontColor

exports.cMessageFontColor = cMessageFontColor;
var cDataFontColor = wrd.cData + wrd.cFont + wrd.cColor; // DataFontColor

exports.cDataFontColor = cDataFontColor;
var cModuleFontBackgroundColor = wrd.cModule + wrd.cFont + cBackground + wrd.cColor; // ModuleFontBackgroundColor

exports.cModuleFontBackgroundColor = cModuleFontBackgroundColor;
var cFunctionFontBackgroundColor = wrd.cFunction + wrd.cFont + cBackground + wrd.cColor; // FunctionFontBackgroundColor

exports.cFunctionFontBackgroundColor = cFunctionFontBackgroundColor;
var cMessageFontBackgroundColor = wrd.cMessage + wrd.cFont + cBackground + wrd.cColor; // MessageFontBackgroundColor

exports.cMessageFontBackgroundColor = cMessageFontBackgroundColor;
var cDataFontBackgroundColor = wrd.cData + wrd.cFont + cBackground + wrd.cColor; // DataFontBackgroundColor
// File Types

exports.cDataFontBackgroundColor = cDataFontBackgroundColor;
var cCatia = bas.cCa + bas.cti + bas.ca; // Catia

exports.cCatia = cCatia;
var cDocument = wrd.cDocument; // Document

exports.cDocument = cDocument;
var cDocuments = cDocument + bas.cs; // Documents

exports.cDocuments = cDocuments;
var cDraft = bas.cDr + phn.caft; // Draft

exports.cDraft = cDraft;
var cDWG = bas.cDW + bas.cG; // DWG

exports.cDWG = cDWG;
var cHoops = bas.cH + wrd.coops; // Hoops

exports.cHoops = cHoops;
var cHOOPS = bas.cH + wrd.cOOPS; // HOOPS

exports.cHOOPS = cHOOPS;
var cImage = bas.cIm + phn.cage; // Image

exports.cImage = cImage;
var cImages = cImage + bas.cs; // Images

exports.cImages = cImages;
var cInventor = phn.cInv + bas.cen + phn.ctor; // Inventor

exports.cInventor = cInventor;
var cNeutral = bas.cNe + bas.cut + phn.cral; // Neutral

exports.cNeutral = cNeutral;
var cNX = bas.cNX; // NX

exports.cNX = cNX;
var cParasolid = bas.cP + phn.cara + wrd.csolid; // Parasolid

exports.cParasolid = cParasolid;
var cProE = phn.cPro + bas.cE; // ProE

exports.cProE = cProE;
var cRhino = bas.cRh + phn.cino; // Rhino

exports.cRhino = cRhino;
var cSolidEdge = wrd.cSolid + wrd.cEdge; // SolidEdge

exports.cSolidEdge = cSolidEdge;
var cSolidWorks = wrd.cSolid + wrd.cWorks; // SolidWorks

exports.cSolidWorks = cSolidWorks;
var cvrml = bas.cvr + bas.cml; // vrml

exports.cvrml = cvrml;
var cVrml = bas.cVr + bas.cml; // Vrml

exports.cVrml = cVrml;
var cVRML = bas.cVR + bas.cML; // VRML
// UI Element Types

exports.cVRML = cVRML;
var cButton = bas.cBu + bas.ctt + bas.con; // Button
// Environment Variables

exports.cButton = cButton;
var cQA = bas.cQA; // QA

exports.cQA = cQA;
var cDEV = bas.cDE + bas.cV; // DEV

exports.cDEV = cDEV;
var cProd = phn.cPro + bas.cd; // Prod

exports.cProd = cProd;
var cPROD = phn.cPRO + bas.cD; // PROD

exports.cPROD = cPROD;
var cPre = phn.cPre; // Pre

exports.cPre = cPre;
var cPRE = phn.cPRE; // PRE

exports.cPRE = cPRE;
var cPreProd = phn.cPre + cProd; // PreProd

exports.cPreProd = cPreProd;
var cPREPROD = phn.cPRE + cPROD; // PREPROD
// Key Combinations

exports.cPREPROD = cPREPROD;
var cctrl_a = phn.cctrl + bas.cPlus + bas.ca; // ctrl+a

exports.cctrl_a = cctrl_a;
var cctrl_b = phn.cctrl + bas.cPlus + bas.cb; // ctrl+b

exports.cctrl_b = cctrl_b;
var cctrl_c = phn.cctrl + bas.cPlus + bas.cc; // ctrl+c

exports.cctrl_c = cctrl_c;
var cctrl_d = phn.cctrl + bas.cPlus + bas.cd; // ctrl+d

exports.cctrl_d = cctrl_d;
var cctrl_e = phn.cctrl + bas.cPlus + bas.ce; // ctrl+e

exports.cctrl_e = cctrl_e;
var cctrl_f = phn.cctrl + bas.cPlus + bas.cf; // ctrl+f

exports.cctrl_f = cctrl_f;
var cctrl_g = phn.cctrl + bas.cPlus + bas.cg; // ctrl+g

exports.cctrl_g = cctrl_g;
var cctrl_h = phn.cctrl + bas.cPlus + bas.ch; // ctrl+h

exports.cctrl_h = cctrl_h;
var cctrl_i = phn.cctrl + bas.cPlus + bas.ci; // ctrl+i

exports.cctrl_i = cctrl_i;
var cctrl_j = phn.cctrl + bas.cPlus + bas.cj; // ctrl+j

exports.cctrl_j = cctrl_j;
var cctrl_k = phn.cctrl + bas.cPlus + bas.ck; // ctrl+k

exports.cctrl_k = cctrl_k;
var cctrl_l = phn.cctrl + bas.cPlus + bas.cl; // ctrl+l

exports.cctrl_l = cctrl_l;
var cctrl_m = phn.cctrl + bas.cPlus + bas.cm; // ctrl+m

exports.cctrl_m = cctrl_m;
var cctrl_n = phn.cctrl + bas.cPlus + bas.cn; // ctrl+n

exports.cctrl_n = cctrl_n;
var cctrl_o = phn.cctrl + bas.cPlus + bas.co; // ctrl+o

exports.cctrl_o = cctrl_o;
var cctrl_p = phn.cctrl + bas.cPlus + bas.cp; // ctrl+p

exports.cctrl_p = cctrl_p;
var cctrl_q = phn.cctrl + bas.cPlus + bas.cq; // ctrl+q

exports.cctrl_q = cctrl_q;
var cctrl_r = phn.cctrl + bas.cPlus + bas.cr; // ctrl+r

exports.cctrl_r = cctrl_r;
var cctrl_s = phn.cctrl + bas.cPlus + bas.cs; // ctrl+s

exports.cctrl_s = cctrl_s;
var cctrl_t = phn.cctrl + bas.cPlus + bas.ct; // ctrl+t

exports.cctrl_t = cctrl_t;
var cctrl_u = phn.cctrl + bas.cPlus + bas.cu; // ctrl+u

exports.cctrl_u = cctrl_u;
var cctrl_v = phn.cctrl + bas.cPlus + bas.cv; // ctrl+v

exports.cctrl_v = cctrl_v;
var cctrl_w = phn.cctrl + bas.cPlus + bas.cw; // ctrl+w

exports.cctrl_w = cctrl_w;
var cctrl_x = phn.cctrl + bas.cPlus + bas.cx; // ctrl+x

exports.cctrl_x = cctrl_x;
var cctrl_y = phn.cctrl + bas.cPlus + bas.cy; // ctrl+y

exports.cctrl_y = cctrl_y;
var cctrl_z = phn.cctrl + bas.cPlus + bas.cz; // ctrl+z

exports.cctrl_z = cctrl_z;
var cApplicationName = wrd.cApplication + wrd.cName; // ApplicationName

exports.cApplicationName = cApplicationName;
var cApplicationRootPath = wrd.cApplication + wrd.cRoot + wrd.cPath; // ApplicationRootPath

exports.cApplicationRootPath = cApplicationRootPath;
var cApplicationCleanedRootPath = wrd.cApplication + wrd.cCleaned + wrd.cRoot + wrd.cPath; // ApplicationCleanedRootPath

exports.cApplicationCleanedRootPath = cApplicationCleanedRootPath;
var cConfigurationPath = wrd.cConfiguration + wrd.cPath; // ConfigurationPath

exports.cConfigurationPath = cConfigurationPath;
var cApplicationVersionNumber = wrd.cApplication + wrd.cVersion + wrd.cNumber; // ApplicationVersionNumber

exports.cApplicationVersionNumber = cApplicationVersionNumber;
var cApplicationDescription = wrd.cApplication + wrd.cDescription; // ApplicationDescription

exports.cApplicationDescription = cApplicationDescription;
var cDataPath = wrd.cData + wrd.cPath; // DataPath

exports.cDataPath = cDataPath;
var cCtempPath = bas.cc + bas.cColon + bas.cForwardSlash + phn.ctemp + bas.cForwardSlash; // CtempPath

exports.cCtempPath = cCtempPath;
var cPageDataPath = wrd.cPage + cDataPath; // PageDataPath

exports.cPageDataPath = cPageDataPath;
var cWorkflowDataPath = wrd.cWorkflow + cDataPath; // WorkflowDataPath

exports.cWorkflowDataPath = cWorkflowDataPath;
var cKeywordsDataPath = wrd.cKeywords + cDataPath; // KeywordsDataPath

exports.cKeywordsDataPath = cKeywordsDataPath;
var cLocatorsDataPath = wrd.cLocators + cDataPath; // LocatorsDataPath

exports.cLocatorsDataPath = cLocatorsDataPath;
var cClientConstantsPath = wrd.cClient + wrd.cConstants + wrd.cPath; // ClientConstantsPath

exports.cClientConstantsPath = cClientConstantsPath;
var cSystemConstantsPath = wrd.cSystem + wrd.cConstants + wrd.cPath; // SystemConstantsPath

exports.cSystemConstantsPath = cSystemConstantsPath;
var cSystemConstantsPathActual = wrd.csrc + bas.cForwardSlash + cFramework + bas.cForwardSlash + wrd.cConstants + bas.cForwardSlash; // src/Framework/Constants/

exports.cSystemConstantsPathActual = cSystemConstantsPathActual;
var cclientRulesLibrary = wrd.cclient + wrd.cRules + wrd.cLibrary; // clientRulesLibrary

exports.cclientRulesLibrary = cclientRulesLibrary;
var cCommandQueue = wrd.cCommand + wrd.cQueue; // CommandQueue

exports.cCommandQueue = cCommandQueue;
var cConstantsValidationData = wrd.cConstants + wrd.cValidation + wrd.cData; // ConstantsValidationData

exports.cConstantsValidationData = cConstantsValidationData;
var cConstantsShortNames = wrd.cConstants + wrd.cShort + wrd.cNames; // ConstantsShortNames

exports.cConstantsShortNames = cConstantsShortNames;
var cConstantsFileNames = wrd.cConstants + wrd.cFile + wrd.cNames; // ConstantsFileNames

exports.cConstantsFileNames = cConstantsFileNames;
var cConstantsPrefix = wrd.cConstants + wrd.cPrefix; // ConstantsPrefix

exports.cConstantsPrefix = cConstantsPrefix;
var cConstantsFilePaths = wrd.cConstants + wrd.cFile + wrd.cPaths; // ConstantsFilePaths

exports.cConstantsFilePaths = cConstantsFilePaths;
var cConstantsPhase1ValidationMessages = wrd.cConstants + wrd.cPhase + num.c1 + wrd.cValidation + wrd.cMessages; // ConstantsPhase1ValidationMessages

exports.cConstantsPhase1ValidationMessages = cConstantsPhase1ValidationMessages;
var cConstantsPhase2ValidationMessages = wrd.cConstants + wrd.cPhase + num.c2 + wrd.cValidation + wrd.cMessages; // ConstantsPhase2ValidationMessages

exports.cConstantsPhase2ValidationMessages = cConstantsPhase2ValidationMessages;
var cBasicConstantsValidation = wrd.cBasic + wrd.cConstants + wrd.cValidation; // BasicConstantsValidation

exports.cBasicConstantsValidation = cBasicConstantsValidation;
var cBusinessConstantsValidation = wrd.cBusiness + wrd.cConstants + wrd.cValidation; // BusinessConstantsValidation

exports.cBusinessConstantsValidation = cBusinessConstantsValidation;
var cColorConstantsValidation = wrd.cColor + wrd.cConstants + wrd.cValidation; // ColorConstantsValidation

exports.cColorConstantsValidation = cColorConstantsValidation;
var cCommandConstantsValidation = wrd.cCommand + wrd.cConstants + wrd.cValidation; // CommandConstantsValidation

exports.cCommandConstantsValidation = cCommandConstantsValidation;
var cConfigurationConstantsValidation = wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // ConfigurationConstantsValidation

exports.cConfigurationConstantsValidation = cConfigurationConstantsValidation;
var cCountryConstantsValidation = wrd.cCountry + wrd.cConstants + wrd.cValidation; // CountryConstantsValidation

exports.cCountryConstantsValidation = cCountryConstantsValidation;
var cElementConstantsValidation = wrd.cElement + wrd.cConstants + wrd.cValidation; // ElementConstantsValidation

exports.cElementConstantsValidation = cElementConstantsValidation;
var cGenericConstantsValidation = wrd.cGeneric + wrd.cConstants + wrd.cValidation; // GenericConstantsValidation

exports.cGenericConstantsValidation = cGenericConstantsValidation;
var cIsotopeConstantsValidation = wrd.cIsotope + wrd.cConstants + wrd.cValidation; // IsotopeConstantsValidation

exports.cIsotopeConstantsValidation = cIsotopeConstantsValidation;
var cKnotConstantsValidation = wrd.cKnot + wrd.cConstants + wrd.cValidation; // KnotConstantsValidation

exports.cKnotConstantsValidation = cKnotConstantsValidation;
var cLanguageConstantsValidation = wrd.cLanguage + wrd.cConstants + wrd.cValidation; // LanguageConstantsValidation

exports.cLanguageConstantsValidation = cLanguageConstantsValidation;
var cMessageConstantsValidation = wrd.cMessage + wrd.cConstants + wrd.cValidation; // MessageConstantsValidation

exports.cMessageConstantsValidation = cMessageConstantsValidation;
var cNumericConstantsValidation = wrd.cNumeric + wrd.cConstants + wrd.cValidation; // NumericConstantsValidation

exports.cNumericConstantsValidation = cNumericConstantsValidation;
var cPhonicConstantsValidation = wrd.cPhonic + wrd.cConstants + wrd.cValidation; // PhonicConstantsValidation

exports.cPhonicConstantsValidation = cPhonicConstantsValidation;
var cShapeConstantsValidation = wrd.cShape + wrd.cConstants + wrd.cValidation; // ShapeConstantsValidation

exports.cShapeConstantsValidation = cShapeConstantsValidation;
var cSystemConstantsValidation = wrd.cSystem + wrd.cConstants + wrd.cValidation; // SystemConstantsValidation

exports.cSystemConstantsValidation = cSystemConstantsValidation;
var cUnitConstantsValidation = wrd.cUnit + wrd.cConstants + wrd.cValidation; // UnitConstantsValidation

exports.cUnitConstantsValidation = cUnitConstantsValidation;
var cWordConstantsValidation = wrd.cWord + wrd.cConstants + wrd.cValidation; // WordConstantsValidation

exports.cWordConstantsValidation = cWordConstantsValidation;
var cSourceResourcesPath = wrd.cSource + wrd.cResources + wrd.cPath; // SourceResourcesPath

exports.cSourceResourcesPath = cSourceResourcesPath;
var cDestinationResourcesPath = wrd.cDestination + wrd.cResources + wrd.cPath; // BinaryResourcesPath

exports.cDestinationResourcesPath = cDestinationResourcesPath;
var cBinaryRootPath = wrd.cBinary + wrd.cRoot + wrd.cPath; // BinaryRootPath

exports.cBinaryRootPath = cBinaryRootPath;
var cBinaryReleasePath = wrd.cBinary + wrd.cRelease + wrd.cPath; // BinaryReleasePath
// Constants Filenames

exports.cBinaryReleasePath = cBinaryReleasePath;
var cbasic_constants_js = wrd.cbasic + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // basic.constants.js

exports.cbasic_constants_js = cbasic_constants_js;
var cbusiness_constants_js = wrd.cbusiness + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // business.constants.js

exports.cbusiness_constants_js = cbusiness_constants_js;
var ccolor_constants_js = wrd.ccolor + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // color.constants.js

exports.ccolor_constants_js = ccolor_constants_js;
var ccommand_constants_js = wrd.ccommand + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // command.constants.js

exports.ccommand_constants_js = ccommand_constants_js;
var cconfiguration_constants_js = wrd.cconfiguration + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // configuration.constants.js

exports.cconfiguration_constants_js = cconfiguration_constants_js;
var ccountry_constants_js = wrd.ccountry + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // country.constants

exports.ccountry_constants_js = ccountry_constants_js;
var celement_constants_js = wrd.celement + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // element.constants.js

exports.celement_constants_js = celement_constants_js;
var cgeneric_constants_js = wrd.cgeneric + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // generic.constants.js

exports.cgeneric_constants_js = cgeneric_constants_js;
var cisotope_constants_js = wrd.cisotope + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // isotope.constants.js

exports.cisotope_constants_js = cisotope_constants_js;
var cknot_constants_js = wrd.cknot + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // knot.constants.js

exports.cknot_constants_js = cknot_constants_js;
var clanguage_constants_js = wrd.clanguage + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // language.constants.js

exports.clanguage_constants_js = clanguage_constants_js;
var cmessage_constants_js = wrd.cmessage + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // message.constants.js

exports.cmessage_constants_js = cmessage_constants_js;
var cnumeric_constants_js = wrd.cnumeric + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // numeric.constants.js

exports.cnumeric_constants_js = cnumeric_constants_js;
var cphonic_constants_js = wrd.cphonic + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // phonic.constants.js

exports.cphonic_constants_js = cphonic_constants_js;
var cshape_constants_js = wrd.cshape + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // shape.constants.js

exports.cshape_constants_js = cshape_constants_js;
var csystem_constants_js = wrd.csystem + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // system.constants.js

exports.csystem_constants_js = csystem_constants_js;
var cunit_constants_js = wrd.cunit + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // unit.constants.js

exports.cunit_constants_js = cunit_constants_js;
var cword_constants_js = wrd.cword + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // word.constants.js

exports.cword_constants_js = cword_constants_js;