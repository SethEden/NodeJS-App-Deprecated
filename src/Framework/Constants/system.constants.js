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
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as g from './generic.constants';
import * as n from './numeric.constants';
import * as w from './word.constants';

// Miscelaneious
export const cENV = b.cEN + b.cV; // ENV
export const cLOG = b.cLO + b.cG; // LOG
export const cENVIRONMENT = p.cENV + b.cIR + b.cON + p.cMENT; // ENVIRONMENT
export const cITERATION = b.cIT + b.cER + b.cAT + b.cIO + b.cN; // ITERATION
export const cSTYLE = b.cST + b.cYL + b.cE; // STYLE

// Compound System Words
export const cunderline = w.cunder + w.cline; // underline
export const cUnderline = w.cUnder + w.cline; // Underline
export const cwithText = w.cwith + w.cText; // withText
export const cWithText = w.cWith + w.cText; // WithText
export const cDebugTest = w.cDebug + w.cTest; // DebugTest
export const cDebugPage = w.cDebug + w.cPage; // DebugPage
export const cDebugTestExhaustive = cDebugTest + w.cExhaustive; // DebugTestExhaustive
export const cDebugTestData = cDebugTest + w.cData; // DebugTestData
export const cDebugPageScripts = cDebugPage + w.cScripts; // DebugPageScripts
export const cDebugPageData = cDebugPage + w.cData; // DebugPageData
export const cDebugKeywords = w.cDebug + w.cKeywords; // DebugKeywords
export const cLogBrowserActions = w.cLog + w.cBrowser + w.cActions; // LogBrowserActions
export const cJournalBrowserActions = w.cJournal + w.cBrowser + w.cActions; // JournalBrowserActions
export const cDebugBrowserActions = w.cDebug + w.cBrowser + w.cActions; // DebugBrowserActions
export const cDebugSelectors = w.cDebug + w.cSelectors; // DebugSelectors
export const cDebugFunctions = w.cDebug + w.cFunctions; // DebugFunctions
export const cDebugFiles = w.cDebug + w.cFiles; // DebugFiles
export const cTestAutomation = w.cTest + w.cAutomation; // TestAutomation
export const cNumberOfRows = w.cNumber + w.cOf + w.cRows; // NumberOfRows
export const cMasterRowNumber = w.cMaster + w.cRow + w.cNumber; // MasterRowNumber
export const cEnvironmentRow = w.cEnvironment + w.cRow; // EnvironmentRow
export const cEnvironmentRowNumber = cEnvironmentRow + w.cNumber; // EnvironmentRowNumber
export const cPageScript = w.cPage + w.cScript; // PageScript
export const cIntermediatePath = w.cIntermediate + w.cPath; // IntermediatePath
export const cTimeStamp = w.cTime + w.cStamp; // TimeStamp
export const cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp
export const cDateTimeStamp = w.cDate + cTimeStamp; // DateTimeStamp
export const cScriptDateStamp = w.cScript + w.cDate + w.cStamp; // ScriptDateStamp
export const cScriptTimeStamp = w.cScript + cTimeStamp; // ScriptTimeStamp
export const cKeywordTimeStamp = w.cKeyword + cTimeStamp; // KeywordTimeStamp
export const cTestTimeStamp = w.cTest + cTimeStamp; // TestTimeStamp
export const cScriptDateTimeStamp = w.cScript + cDateTimeStamp; // ScriptDateTimeStamp
export const cBeginScriptTimeStamp = w.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp
export const cEndScriptTimeStamp = w.cEnd + cScriptTimeStamp; // EndScriptTimeStamp
export const cBeginTestTimeStamp = w.cBegin + cTestTimeStamp; // BeginTestTimeStamp
export const cEndTestTimeStamp = w.cEnd + cTestTimeStamp; // EndTestTimeStamp
export const cBeginPageScriptTimeStamp = w.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp
export const cEndPageScriptTimeStamp = w.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp
export const cBeginKeywordTimeStamp = w.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp
export const cEndKeywordTimeStamp = w.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp
export const cRuntime = w.cRun + w.ctime; // Runtime
export const cRunTime = w.cRun + w.cTime; // RunTime
export const cBrowserName = w.cBrowser + w.cName; // BrowserName
export const cHostName = w.cHost + w.cName; // HostName
export const cTestRunID = w.cTest + w.cRun + w.cID; // TestRunID
export const cfilesLists = w.cfiles + w.cLists; // filesLists
export const cFileTypes = w.cFile + w.cTypes; // FileTypes
export const cfilename = w.cfile + w.cname; // filename
export const cFilename = w.cFile + w.cname; // Filename
export const cFileName = w.cFile + w.cName; // FileName
export const cfilenames = cfilename + b.cs; // filenames
export const cFilenames = cFilename + b.cs; // Filenames
export const cFileNames = cFileName + b.cs; // FileNames
export const cPreValidateFileName = p.cPre + w.cValidate + cFileName; // PreValidateFileName
export const cAsynchSingular = w.cAsynch + w.cSingular; // AsynchSingular
export const cSynchSingular = w.cSynch + w.cSingular; // SynchSingular
export const cParallelMultiUnified = w.cParallel + w.cMulti + w.cUnified; // ParallelMultiUnified
export const cAllowableCharacters = w.cAllowable + w.cCharacters; // AllowableCharacters
export const cSpecialCharacters = w.cSpecial + w.cCharacters; // SpecialCharacters
export const cTimeoutOverride = w.cTimeout + w.cOverride; // TimeoutOverride
export const cDwellTime = w.cDwell + w.cTime; // DwellTime
export const cLogFilePathAndName = w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // LogFilePathAndName
export const cDataLogFilePathAndName = w.cData + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // DataLogFilePathAndName
export const cExecutionJournalFilePathAndName = w.cExecution + w.cJournal + w.cFile + w.cPath + w.cAnd + w.cName; // ExecutionJournalFilePathAndName
export const cResultsLogFilePathAndName = w.cResults + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // ResultsLogFilePathAndName
export const cTestDataPath = w.cTest + w.cData + w.cPath; // TestDataPath
export const cLogFileEnabled = w.cLog + w.cFile + w.cEnabled; // LogFileEnabled
export const cFileCounter = w.cFile + w.cCounter; // FileCounter
export const cDeltaT = g.cDelta + b.cT; // DeltaT
export const cvisibilityCheck = w.cvisibility + w.cCheck; // visibilityCheck
export const cVisibilityCheck = w.cVisibility + w.cCheck; // VisibilityCheck
export const cOperatingSystem = w.cOperating + w.cSystem; // OperatingSystem
export const cinnerText = w.cinner + w.cText; // innerText
export const cInnerText = w.cInner + w.cText; // InnerText
export const cinnerHTML = w.cinner + w.cHTML; // innerHTML
export const cInnerHTML = w.cInner + w.cHTML; // InnerHTML
export const cTestData = w.cTest + w.cData; // TestData
export const cProcessingTimeout = w.cProcessing + w.cTimeout; // ProcessingTimeout
export const cIngestionCompleteDwellTime = w.cIngestion + w.cComplete + cDwellTime; // IngestionCompleteDwellTime
export const cRowNumber = w.cRow + w.cNumber; // RowNumber
export const cUsername = w.cUser + w.cname; // Username
export const cPassword = w.cPass + w.cword; // Password
export const cProjectName = w.cProject + w.cName; // ProjectName
export const cProjectDescription = w.cProject + w.cDescription; // ProjectDescription
export const cTestDataFileName = w.cTest + w.cData + cFileName; // TestDataFileName
export const cShareEmail = w.cShare + w.cEmail; // ShareEmail
export const cAccessLevel = w.cAccess + w.cLevel; // AccessLevel
export const cFileNumber = w.cFile + w.cNumber; // FileNumber
export const cConfigurationName = w.cConfiguration + w.cName; // ConfigurationName
export const cConfigurationElement = w.cConfiguration + w.cElement; // ConfigurationElement
export const cConfigurationElements = cConfigurationElement + b.cs; // ConfigurationElements
export const cVersionControl = w.cVersion + w.cControl; // VersionControl
export const cScriptRunTime = w.cScript + cRunTime; // ScriptRunTime
export const cTestRunTime = w.cTest + cRunTime; // TestRunTime
export const ctypeText = w.ctype + w.cText; // typeText
export const cTypeText = w.cType + w.cText; // TypeText
export const cAbreviatedSelectors = w.cAbreviated + w.cSelectors; // AbreviatedSelectors
export const cAbreviatedSelectorsInLogs = cAbreviatedSelectors + b.cIn + w.cLogs; // AbreviatedSelectorsInLogs
export const cselectorTimeout = w.cselector + w.cTimeout; // selectorTimeout
export const cchildElementCount = w.cchild + w.cElement + w.cCount; // childElementCount
export const cUnderscore = w.cUnder + w.cscore; // Underscore
export const cTestBureau = w.cTest + w.cBureau; // TestBureau
export const caddWithText = w.c_add + w.cWith + w.cText; // addWithText
export const caddTimeout = w.c_add + w.cTimeout; // addTimeout
export const caddParent = w.c_add + w.cParent; // addParent
export const caddFindValue = w.c_add + w.cFind + w.cValue; // addFindValue
export const caddNth = w.c_add + w.cNth; // addNth
export const caddSibling = w.c_add + w.cSibling; // addSibling
export const caddFilter = w.c_add + w.cFilter; // addFilter
export const cgenerateRandom = w.cgenerate + w.cRandom; // generateRandom
export const crandomlyGenerate = w.crandomly + w.cGenerate; // randomlyGenerate
export const cMixedCase = w.cMixed + w.cCase; // MixedCase
export const cUpperCase = w.cUpper + w.cCase; // UpperCase
export const cLowerCase = w.cLower + w.cCase; // LowerCase
export const cByLength = w.cBy + w.cLength; // ByLength
export const cSpecialCharacter = w.cSpecial + w.cCharacter; // SpecialCharacter
export const cWithSpecialCharacters = w.cWith + cSpecialCharacters; // WithSpecialCharacters
export const cTextByLength = w.cText + cByLength; // TextByLength
export const cTextWithSpecialCharacters = w.cText + cWithSpecialCharacters; // TextWithSpecialCharacters
export const cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength
export const cAlphaNumeric = w.cAlpha + w.cNumeric; // AlphaNumeric
export const cAlphaNumericCode = cAlphaNumeric + w.cCode; // AlphaNumericCode
export const cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength
export const cNumericCode = w.cNumeric + w.cCode; // NumericCode
export const cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength
export const cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters
export const cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength
export const cSpecialCharacterCodeByLength = cSpecialCharacter + w.cCode + cByLength; // SpecialCharacterCodeByLength
export const cvalidEmail = w.cvalid + w.cEmail; // validEmail
export const cValidEmail = w.cValid + w.cEmail; // ValidEmail
export const cInvalidEmail = b.cIn + cvalidEmail; // InvalidEmail
export const cLetterOr = w.cLetter + b.cOr; // LetterOr
export const cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter
export const cLetterOrNumberOrSpecialCharacter = cLetterOr + w.cNumber + w.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter
export const cAlphaNumericCharacter = cAlphaNumeric + w.cCharacter; // AlphaNumericCharacter
export const cNumericCharacter = w.cNumeric + w.cCharacter; // NumericCharacter
export const cNumberInRange = w.cNumber + b.cIn + w.cRange; // NumberInRange
export const cBooleanValue = w.cBoolean + w.cValue; // BooleanValue
export const cAlphabeticCharacter = w.cAlphabetic + w.cCharacter; // AlphabeticCharacter
export const cCarriageReturn = w.cCarriage + w.cReturn; // CarriageReturn
export const cDashboardLogs = w.cDashboard + w.cLogs; // DashboardLogs
export const cVideoLogs = w.cVideo + w.cLogs; // VideoLogs
export const cForwardSlash = w.cForward + w.cSlash; // ForwardSlash
export const cBackSlash = w.cBack + w.cSlash; // BackSlash
export const cPage_Keywords = w.cPage + b.cUnderscore + w.cKeywords; // Page_Keywords
export const cnavigateTo = w.cnavigate + b.cTo; // navigateTo
export const cNavigateTo = w.cNavigate + b.cTo; // NavigateTo
export const cBrowserRefresh = w.cBrowser + w.cRefresh; // BrowserRefresh
export const cSpaceIsColonSpace = b.cSpace + b.cIs + b.cColon + b.cSpace; // Is:
export const cdeployApplication = w.cdeploy + w.cApplication; // deployApplication
export const creleaseApplication = w.crelease + w.cApplication; // releaseApplication
export const cbackground = w.cback + w.cground; // background
export const cBackground = w.cBack + w.cground; // Background
export const cConfiguration_Colors = w.cConfiguration + b.cUnderscore + w.cColors; // Configuration_Colors
export const cColorData = w.cColor + w.cData; // ColorData
export const cColorName = w.cColor + w.cName; // ColorName
export const cbusinessRule = w.cbusiness + w.cRule; // businessRule
export const cBusinessRule = w.cBusiness + w.cRule; // BusinessRule
export const cbusinessRules = w.cbusiness + w.cRules; // businessRules
export const cBusinessRules = w.cBusiness + w.cRules; // BusinessRules
export const crulesLibrary = w.crules + w.cLibrary; // rulesLibrary
export const cframework = w.cframe + w.cwork; // framework
export const cFramework = w.cFrame + w.cwork; // Framework
export const cCommandsAliases = w.cCommands + w.cAliases; // CommandsAliases
export const cCommandWorkflows = w.cCommand + w.cWorkflows; // CommandWorkflows
export const cStandardDeviation = w.cStandard + w.cDeviation; // StandardDeviation
export const cHexValue = p.cHex + w.cValue; // HexValue
export const cexportconst = w.cexport + b.cSpace + g.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.
export const cExportConst = w.cExport + b.cSpace + g.cConst; // Export Const

// Logging Constants
export const cBEGIN_Function = w.cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // BEGIN %% Function
export const cEND_Function = w.cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // END %% Function
export const cinputDataIs = w.cinput + w.cData + cSpaceIsColonSpace; // input Data is:
export const cinputMetaDataIs = w.cinput + w.cMetaData + cSpaceIsColonSpace; // input MetaData is:
export const creturnDataIs = w.creturn + w.cData + cSpaceIsColonSpace; // return Data is:
export const cLogBasicSystemEvents = w.cLog + w.cBasic + w.cSystem + w.cEvents; // LogBasicSystemEvents
export const cLogWarnings = w.cLog + w.cWarnings; // LogWarnings
// Logging Styles Constants
export const cModuleFontStyle = w.cModule + w.cFont + w.cStyle; // ModuleFontStyle
export const cFunctionFontStyle = w.cFunction + w.cFont + w.cStyle; // FunctionFontStyle
export const cMessageFontStyle = w.cMessage + w.cFont + w.cStyle; // MessageFontStyle
export const cDataFontStyle = w.cData + w.cFont + w.cStyle; // DataFontStyle
export const cModuleFontColor = w.cModule + w.cFont + w.cColor; // ModuleFontColor
export const cFunctionFontColor = w.cFunction + w.cFont + w.cColor; // FunctionFontColor
export const cMessageFontColor = w.cMessage + w.cFont + w.cColor; // MessageFontColor
export const cDataFontColor = w.cData + w.cFont + w.cColor; // DataFontColor
export const cModuleFontBackgroundColor = w.cModule + w.cFont + cBackground + w.cColor; // ModuleFontBackgroundColor
export const cFunctionFontBackgroundColor = w.cFunction + w.cFont + cBackground + w.cColor; // FunctionFontBackgroundColor
export const cMessageFontBackgroundColor = w.cMessage + w.cFont + cBackground + w.cColor; // MessageFontBackgroundColor
export const cDataFontBackgroundColor = w.cData + w.cFont + cBackground + w.cColor; // DataFontBackgroundColor

// File Types
export const cCatia = b.cCa + b.cti + b.ca; // Catia
export const cDocument = w.cDocument; // Document
export const cDocuments = cDocument + b.cs; // Documents
export const cDraft = b.cDr + p.caft; // Draft
export const cDWG = b.cDW + b.cG; // DWG
export const cHoops = b.cH + w.coops; // Hoops
export const cHOOPS = b.cH + w.cOOPS; // HOOPS
export const cImage = b.cIm + p.cage; // Image
export const cImages = cImage + b.cs; // Images
export const cInventor = p.cInv + b.cen + p.ctor; // Inventor
export const cNeutral = b.cNe + b.cut + p.cral; // Neutral
export const cNX = b.cNX; // NX
export const cParasolid = b.cP + p.cara + w.csolid; // Parasolid
export const cProE = p.cPro + b.cE; // ProE
export const cRhino = b.cRh + p.cino; // Rhino
export const cSolidEdge = w.cSolid + w.cEdge; // SolidEdge
export const cSolidWorks = w.cSolid + w.cWorks; // SolidWorks
export const cvrml = b.cvr + b.cml; // vrml
export const cVrml = b.cVr + b.cml; // Vrml
export const cVRML = b.cVR + b.cML; // VRML

// Countires
// TODO: Need to come back and generalize thse with constants re-use.
export const cAfghanistan = 'Afghanistan'; // Afghanistan
export const cAlbania = 'Albania'; // Albania
export const cAlgeria = 'Algeria'; // Algeria
export const cAndorra = 'Andorra'; // Andorra
export const cAngola = 'Angola'; // Angola
export const cAntigua = 'Antigua'; // Antigua
export const cArgentina = 'Argentina'; // Argentina
export const cArmenia = 'Armenia'; // Armenia
export const cAustralia = 'Australia'; // Australia
export const cAustria = 'Austria'; // Austria
export const cAzerbaijan = 'Azerbaijan'; // Azerbaijan
export const cBahamas = 'Bahamas'; // Bahamas
export const cBahrain = 'Bahrain'; // Bahrain
export const cBangladesh = 'Bangladesh'; // Bangladesh
export const cBarbados = 'Barbados'; // Barbados
export const cBarbuda = 'Barbuda'; // Barbuda
export const cBelarus = 'Belarus'; // Belarus
export const cBelgium = 'Belgium'; // Belgium
export const cBelize = 'Belize'; // Belize
export const cBenin = 'Benin'; // Benin
export const cBhutan = 'Bhutan'; // Bhutan
export const cBolivia = 'Bolivia'; // Bolivia
export const cBosnia = 'Bosnia'; // Bosnia
export const cBotswana = 'Botswana'; // Botswana
export const cBrazil = 'Brazil'; // Brazil
export const cBrunei = 'Brunei'; // Brunei
export const cBulgaria = 'Bulgaria'; // Bulgaria
export const cBurkinaFaso = 'BurkinaFaso'; // BurkinaFaso
export const cBurundi = 'Burundi'; // Burundi
export const cCotedlvoire = 'Cote dlvoire'; // Cote dlvoire
export const cCaboVerde = 'Cabo Verde'; // Cabo Verde
export const cCambodia = 'Cambodia'; // Cambodia
export const cCameroon = 'Cameroon'; // Cameroon
export const cCanada = 'Canada'; // Canada
export const cCentralAfricanRepublic = 'Central African Republic'; // Central African Republic
export const cChad = 'Chad'; // Chad
export const cChile = 'Chile'; // Chile
export const cChina = 'China'; // China
export const cColombia = 'Colombia'; // Colombia
export const cComoros = 'Comoros'; // Comoros
export const cCongo = 'Congo'; // Congo
export const cCostaRica = 'Costa Rica'; // Costa Rica
export const cCroatia = 'Croatia'; // Croatia
export const cCuba = 'Cuba'; // Cuba
export const cCyprus = 'Cyprus'; // Cyprus
export const cCzechia = 'Czechia'; // Czechia
export const cDemocraticRepublicOfTheCongo = 'Democratic Republic of the Congo'; // Democratic Republic of the Congo
export const cDenmark = 'Denmark'; // Denmark
export const cDjibouti = 'Djibouti'; // Djibouti
export const cDominica = 'Dominica'; // Dominica
export const cDominicanRepublic = 'Dominican Republic'; // Dominican Republic
export const cEcuador = 'Ecuador'; // Ecuador
export const cEgypt = 'Egypt'; // Egypt
export const cElSalvador = 'El Salvador'; // El Salvador
export const cEquatorialGuinea = 'Equatorial Guinea'; // Equatorial Guinea
export const cEritrea = 'Eritrea'; // Eritrea
export const cEstonia = 'Estonia'; // Estonia
export const cEswatini = 'Eswatini'; // Eswatini -- Formerly Swaziland
export const cEthiopia = 'Ethiopia'; // Ethiopia
export const cFiji = 'Fiji';  // Fiji
export const cFinland = 'Finland'; // Finland
export const cFrance = 'France'; // France
export const cGabon = 'Gabon'; // Gabon
export const cGambia = 'Gambia'; // Gambia
export const cGeorgia = 'Georgia'; // Georgia
export const cGerman = b.cGe + b.cr + w.cman; // German
export const cGermany = cGerman + b.cy; // Germany
export const cGhana = 'Ghana'; // Ghana
export const cGreece = 'Greece'; // Greece
export const cGrenada = 'Grenada'; // Grenada
export const cGuatemala = 'Guatemala'; // Guatemala
export const cGuinea = 'Guinea'; // Guinea
export const cGuineaBissau = 'Guinea-Bissau'; // Guinea-Bissau
export const cGuyana = 'Guyana'; // Guyana
export const cHaiti = 'Haiti'; // Haiti
export const cHerzegovina = 'Herzegovina'; // Herzegovina
export const cHolySee = 'Holy See'; // Holy See
export const cHonduras = 'Honduras'; // Honduras
export const cHungary = w.cHung + p.cary; // Hungary
export const cIceland = 'Iceland'; // Iceland
export const cIndia = 'India'; // India
export const cIndonesia = 'Indonesia'; // Indonesia
export const cIran = 'Iran'; // Iran
export const cIraq = 'Iraq'; // Iraq
export const cIreland = 'Ireland'; // Ireland
export const cIsrael = 'Israel'; // Israel
export const cItaly = 'Italy'; // Italy
export const cJamaica = 'Jamaica'; // Jamaica
export const cJapan = 'Japan'; // Japan
export const cJordan = 'Jordan'; // Jordan
export const cKazakhstan = 'Kazakhstan'; // Kazakhstan
export const cKenya = 'Kenya'; // Kenya
export const cKiribati = 'Kiribati'; // Kiribati
export const cKuwait = 'Kuwait'; // Kuwait
export const cKyrgyzstan = 'Kyrgyzstan'; // Kyrgyzstan
export const cLaos = 'Laos'; // Laos
export const cLatvia = 'Latvia'; // Latvia
export const cLebanon = 'Lebanon'; // Lebanon
export const cLesotho = 'Lesotho'; // Lesotho
export const cLiberia = 'Liberia'; // Liberia
export const cLibya = 'Libya'; // Libya
export const cLiechtenstein = 'Liechtenstein'; // Liechtenstein
export const cLithuania = 'Lithuania'; // Lithuania
export const cLuxembourg = 'Luxembourg'; // Luxembourg
export const cMadagascar = 'Madagascar'; // Madagascar
export const cMalawi = 'Malawi'; // Malawi
export const cMalaysia = 'Malaysia'; // Malaysia
export const cMaldives = 'Maldives'; // Maldives
export const cMali = 'Mali'; // Mali
export const cMalta = 'Malta'; // Malta
export const cMarshallIslands = 'Marshall Islands'; // Marshall Islands
export const cMauritania = 'Mauritania'; // Mauritania
export const cMauritius = 'Mauritius'; // Mauritius
export const cMexico = 'Mexico'; // Mexico
export const cMicronesia = 'Micronesia'; // Micronesia
export const cMoldova = 'Moldova'; // Moldova
export const cMonaco = 'Monaco'; // Monaco
export const cMongolia = 'Mongolia'; // Mongolia
export const cMontenegro = 'Montenegro'; // Montenegro
export const cMorocco = 'Morocco'; // Morocco
export const cMozambique = 'Mozambique'; // Mozambique
export const cMyanmar = 'Myanmar'; // Myanmar
export const cNamibia = 'Namibia'; // Namibia
export const cNauru = 'Nauru'; // Nauru
export const cNepal = 'Nepal'; // Nepal
export const cNetherlands = 'Netherlands'; // Netherlands
export const cNewZealand = 'New Zealand'; // New Zealand
export const cNevis = 'Nevis'; // Nevis
export const cNicaragua = 'Nicaragua'; // Nicaragua
export const cNiger = 'Niger'; // Niger
export const cNigeria = 'Nigeria'; // Nigeria
export const cNorthKorea = 'North Korea'; // North Korea
export const cNorthMacedonia = 'North Macedonia'; // North Macedonia
export const cNorway = 'Norway'; // Norway
export const cOman = 'Oman'; // Oman
export const cPakistan = 'Pakistan'; // Pakistan
export const cPalau = 'Palau'; // Palau
export const cPalestine = 'Palestine'; // Palestine
export const cPanama = 'Panama'; // Panama
export const cPapuaNewGuinea = 'Papua New Guinea'; // Papua New Guinea
export const cParaguay = 'Paraguay'; // Paraguay
export const cPeru = 'Peru'; // Peru
export const cPhilippines = 'Philippines'; // Philippines
export const cPoland = 'Poland'; // Poland
export const cPortugal = 'Portugal'; // Portugal
export const cPrincipe = 'Principe'; // Principe
export const cQatar = 'Qatar'; // Qatar
export const cRomania = 'Romania'; // Romania
export const cRussia = 'Russia'; // Russia
export const cRwanda = 'Rwanda'; // Rwanda
export const cSaintKitts = 'Saint Kitts'; // Saint Kitts
export const cSaintLucia = 'Saint Lucia'; // Saint Lucia
export const cSaintVincent = 'Saint Vincent'; // Saint Vincent
export const cSomoa = 'Somoa'; // Somoa
export const cSanMarino = 'San Marino'; // San Marino
export const cSaoTome = 'Sao Tome'; // Sao Tome
export const cSaudiArabia = 'Saudi Arabia'; // Saudi Arabia
export const cSenegal = 'Senegal'; // Senegal
export const cSerbia = 'Serbia'; // Serbia
export const cSeychelles = 'Seychelles'; // Seychelles
export const cSierraLeone = 'Sierra Leone'; // Sierra Leone
export const cSingapore = 'Singapore'; // Singapore
export const cSlovakia = 'Slovakia'; // Slovakia
export const cSlovenia = 'Slovenia'; // Slovenia
export const cSolomonIslands = 'Solomon Islands'; // Solomon Islands
export const cSomalia = 'Somalia'; // Somalia
export const cSouthAfrica = 'South Africa'; // South Africa
export const cSouthKorea = 'South Korea'; // South Korea
export const cSouthSudan = 'South Sudan'; // South Sudan
export const cSpain = 'Spain'; // Spain
export const cSriLanka = 'Sri Lanka'; // Sri Lanka
export const cSudan = 'Sudan'; // Sudan
export const cSuriname = 'Suriname'; // Suriname
export const cSweden = 'Sweden'; // Sweden
export const cSwitzerland = 'Switzerland'; // Switzerland
export const cSyria = 'Syria'; // Syria
export const cTajikistan = 'Tajikistan'; // Tajikistan
export const cTanzania = 'Tanzania'; // Tanzania
export const cThailand = 'Thailand'; // Thailand
export const cTimorLeste = 'Timor-Leste'; // Timor-Leste
export const cTogo = 'Togo'; // Togo
export const cTonga = 'Tonga'; // Tonga
export const cTrinidadAndTabago = 'Trinidad and Tabago'; // Trinidad and Tabago
export const cTunisia = 'Tunisia'; // Tunisia
export const cTurkey = 'Turkey'; // Turkey
export const cTurkmenistan = 'Turkmenistan'; // Turkmenistan
export const cTuvalu = 'Tuvalu'; // Tuvalu
export const cUganda = 'Uganda'; // Uganda
export const cUkraine = 'Ukraine'; // Ukraine
export const cUnitedArabEmirates = 'United Arab Emirates'; // United Arab Emirates
export const cUnitedKingdom = 'United Kingdom'; // United Kingdom
export const cUnitedStatesOfAmerica = 'United States of America'; // United States of America
export const cUruguay = 'Uruguay'; // Uruguay
export const cUzbekistan = 'Uzbekistan'; // Uzbekistan
export const cVanuatu = 'Vanuatu'; // Vanuatu
export const cVenezuela = 'Venezuela'; // Venezuela
export const cVietnam = 'Vietnam'; // Vietnam
export const cYemen = 'Yemen'; // Yemen
export const cZambia = 'Zambia'; // Zambia
export const cZimbabwe = 'Zimbabwe'; // Zimbabwe

// Languages
export const cChinese = p.cChi + b.cn + p.cese; // Chinese
export const cChineseSimplified = cChinese + w.cSimplified; // ChineseSimplified
export const cChineseTraditional = cChinese + w.cTraditional; // ChineseTraditional
export const cCzech = b.cCz + b.ce + b.cch; // Czech
export const cEnglish = b.cEn + b.cgl + p.cish; // English
export const cFrench = b.cFr + b.cen + b.cch; // French
// cGerman = b.cGe + b.cr + cman; // German // Defined above in the countries section
export const cHungarian = w.cHung + b.car + p.cian; // Hungarian
export const cItalian = b.cIt + b.cal + p.cian; // Italian
export const cJapanese = cJapan + p.cese; // Japanese
export const cKorean = b.cKo + b.cre + b.can; // Korean
export const cMiscellaneous = p.cMis + w.ccell + b.can + p.ceous; // Miscellaneous
export const cPolish = b.cPo + b.cl + p.cish; // Polish
export const cPortuguese = w.cPort + b.cug + b.cu + p.cese; // Portuguese
export const cRussian = b.cRu + b.css + p.cian; // Russian
export const cSpanish = b.cSp + b.can + p.cish; // Spanish

// UI Element Types
export const cButton = b.cBu + b.ctt + b.con; // Button

// Environment Variables
export const cQA = b.cQA; // QA
export const cDEV = b.cDE + b.cV; // DEV
export const cProd = p.cPro + b.cd; // Prod
export const cPROD = p.cPRO + b.cD; // PROD
export const cPre = p.cPre; // Pre
export const cPRE = p.cPRE; // PRE
export const cPreProd = p.cPre + cProd; // PreProd
export const cPREPROD = p.cPRE + cPROD; // PREPROD

// Key Combinations
export const cctrl_a = p.cctrl + b.cPlus + b.ca; // ctrl+a
export const cctrl_b = p.cctrl + b.cPlus + b.cb; // ctrl+b
export const cctrl_c = p.cctrl + b.cPlus + b.cc; // ctrl+c
export const cctrl_d = p.cctrl + b.cPlus + b.cd; // ctrl+d
export const cctrl_e = p.cctrl + b.cPlus + b.ce; // ctrl+e
export const cctrl_f = p.cctrl + b.cPlus + b.cf; // ctrl+f
export const cctrl_g = p.cctrl + b.cPlus + b.cg; // ctrl+g
export const cctrl_h = p.cctrl + b.cPlus + b.ch; // ctrl+h
export const cctrl_i = p.cctrl + b.cPlus + b.ci; // ctrl+i
export const cctrl_j = p.cctrl + b.cPlus + b.cj; // ctrl+j
export const cctrl_k = p.cctrl + b.cPlus + b.ck; // ctrl+k
export const cctrl_l = p.cctrl + b.cPlus + b.cl; // ctrl+l
export const cctrl_m = p.cctrl + b.cPlus + b.cm; // ctrl+m
export const cctrl_n = p.cctrl + b.cPlus + b.cn; // ctrl+n
export const cctrl_o = p.cctrl + b.cPlus + b.co; // ctrl+o
export const cctrl_p = p.cctrl + b.cPlus + b.cp; // ctrl+p
export const cctrl_q = p.cctrl + b.cPlus + b.cq; // ctrl+q
export const cctrl_r = p.cctrl + b.cPlus + b.cr; // ctrl+r
export const cctrl_s = p.cctrl + b.cPlus + b.cs; // ctrl+s
export const cctrl_t = p.cctrl + b.cPlus + b.ct; // ctrl+t
export const cctrl_u = p.cctrl + b.cPlus + b.cu; // ctrl+u
export const cctrl_v = p.cctrl + b.cPlus + b.cv; // ctrl+v
export const cctrl_w = p.cctrl + b.cPlus + b.cw; // ctrl+w
export const cctrl_x = p.cctrl + b.cPlus + b.cx; // ctrl+x
export const cctrl_y = p.cctrl + b.cPlus + b.cy; // ctrl+y
export const cctrl_z = p.cctrl + b.cPlus + b.cz; // ctrl+z

export const cApplicationName = w.cApplication + w.cName; // ApplicationName
export const cApplicationRootPath = w.cApplication + w.cRoot + w.cPath; // ApplicationRootPath
export const cApplicationCleanedRootPath = w.cApplication + w.cCleaned + w.cRoot + w.cPath; // ApplicationCleanedRootPath
export const cConfigurationPath = w.cConfiguration + w.cPath; // ConfigurationPath
export const cApplicationVersionNumber = w.cApplication + w.cVersion + w.cNumber; // ApplicationVersionNumber
export const cApplicationDescription = w.cApplication + w.cDescription; // ApplicationDescription
export const cDataPath = w.cData + w.cPath; // DataPath
export const cCtempPath = b.cc + b.cColon + b.cForwardSlash + p.ctemp + b.cForwardSlash; // CtempPath
export const cPageDataPath = w.cPage + cDataPath; // PageDataPath
export const cWorkflowDataPath = w.cWorkflow + cDataPath; // WorkflowDataPath
export const cKeywordsDataPath = w.cKeywords + cDataPath; // KeywordsDataPath
export const cLocatorsDataPath = w.cLocators + cDataPath; // LocatorsDataPath
export const cConstantsPathActual = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cConstants + b.cForwardSlash; // src/Framework/Constants/
export const cclientRulesLibrary = w.cclient + w.cRules + w.cLibrary; // clientRulesLibrary
export const cCommandQueue = w.cCommand + w.cQueue; // CommandQueue
export const cConstantsValidationData = w.cConstants + w.cValidation + w.cData; // ConstantsValidationData
export const cBasicConstantsValidation = w.cBasic + w.cConstants + w.cValidation; // BasicConstantsValidation
export const cColorConstantsValidation = w.cColor + w.cConstants + w.cValidation; // ColorConstantsValidation
export const cElementConstantsValidation = w.cElement + w.cConstants + w.cValidation; // ElementConstantsValidation
export const cGenericConstantsValidation = w.cGeneric + w.cConstants + w.cValidation; // GenericConstantsValidation
export const cIsotopeConstantsValidation = w.cIsotope + w.cConstants + w.cValidation; // IsotopeConstantsValidation
export const cNumericConstantsValidation = w.cNumeric + w.cConstants + w.cValidation; // NumericConstantsValidation
export const cPhonicsConstantsValidation = w.cPhonics + w.cConstants + w.cValidation; // PhonicsConstantsValidation
export const cShapeConstantsValidation = w.cShape + w.cConstants + w.cValidation; // ShapeConstantsValidation
export const cSystemConstantsValidation = w.cSystem + w.cConstants + w.cValidation; // SystemConstantsValidation
export const cUnitsConstantsValidation = w.cUnits + w.cConstants + w.cValidation; // UnitsConstantsValidation
export const cWordConstantsValidation = w.cWord + w.cConstants + w.cValidation; // WordConstantsValidation
export const cSourceResourcesPath = w.cSource + w.cResources + w.cPath; // SourceResourcesPath
export const cBinaryResourcesPath = w.cBinary + w.cResources + w.cPath; // BinaryResourcesPath
export const cBinaryRootPath = w.cBinary + w.cRoot + w.cPath; // BinaryRootPath
export const cBinaryReleasePath = w.cBinary + w.cRelease + w.cPath; // BinaryReleasePath

// Constants Filenames
export const cbasic_constants_js = w.cbasic + b.cDot + w.cconstants + b.cDot + b.cjs; // basic.constants.js
export const ccolor_constants_js = w.ccolor + b.cDot + w.cconstants + b.cDot + b.cjs; // color.constants.js
export const celement_constants_js = w.celement + b.cDot + w.cconstants + b.cDot + b.cjs; // element.constants.js
export const cgeneric_constants_js = w.cgeneric + b.cDot + w.cconstants + b.cDot + b.cjs; // generic.constants.js
export const cisotope_constants_js = w.cisotope + b.cDot + w.cconstants + b.cDot + b.cjs; // isotope.constants.js
export const cnumeric_constants_js = w.cnumeric + b.cDot + w.cconstants + b.cDot + b.cjs; // numeric.constants.js
export const cphonics_constants_js = w.cphonics + b.cDot + w.cconstants + b.cDot + b.cjs; // phonics.constants.js
export const cshape_constants_js = w.cshape + b.cDot + w.cconstants + b.cDot + b.cjs; // shape.constants.js
export const csystem_constants_js = w.csystem + b.cDot + w.cconstants + b.cDot + b.cjs; // system.constants.js
export const cunits_constants_js = w.cunits + b.cDot + w.cconstants + b.cDot + b.cjs; // units.constants.js
export const cword_constants_js = w.cword + b.cDot + w.cconstants + b.cDot + b.cjs; // word.constants.js

// Configuration Settings
export const cArgumentDrivenInterface = w.cArgument + w.cDriven + w.cInterface; // ArgumentDrivenInterface
export const cFigletFont = w.cFiglet + w.cFont; // FigletFont
export const cPrimaryCommandDelimiter = w.cPrimary + w.cCommand + w.cDelimiter; // PrimaryCommandDelimiter
export const cSecondaryCommandDelimiter = w.cSecondary + w.cCommand + w.cDelimiter; // SecondaryCommandDelimiter
export const cTertiaryCommandDelimiter = w.cTertiary + w.cCommand + w.cDelimiter; // TertiaryCommandDelimiter
export const cEnableBusinessRuleOutput = w.cEnable + w.cBusiness + w.cRule + w.cOutput; // EnableBusinessRuleOutput
export const cEnableBusinessRulePerformanceMetrics = w.cEnable + w.cBusiness + w.cRule + w.cPerformance + w.cMetrics; // EnableBusinessRulePerformanceMetrics
export const cEnableCommandPerformanceMetrics = w.cEnable + w.cCommand + w.cPerformance + w.cMetrics; // EnableCommandPerformanceMetrics
export const cEnableConstantsValidation = w.cEnable + w.cConstants + w.cValidation; // EnableConstantsValidation
export const cDisplayIndividualConstantsValidationPassMessages = w.cDisplay + w.cIndividual + w.cConstants + w.cValidation + w.cPass + w.cMessages; // DisplayIndividualConstantsValidationPassMessages
export const cDisplayIndividualConstantsValidationFailMessages = w.cDisplay + w.cIndividual + w.cConstants + w.cValidation + w.cFail + w.cMessages; // DisplayIndividualConstantsValidationFailMessages
export const cDisplaySummaryConstantsValidationPassMessages = w.cDisplay + w.cSummary + w.cConstants + w.cValidation + w.cPass + w.cMessages; // DisplaySummaryConstantsValidationPassMessages
export const cDisplaySummaryConstantsValidationFailMessages = w.cDisplay + w.cSummary + w.cConstants + w.cValidation + w.cFail + w.cMessages; // DisplaySummaryConstantsValidationFailMessages
export const cPassAllConstantsValidations = w.cPass + w.cAll + w.cConstants + w.cValidations; // PassAllConstantsValidations
export const cdeploymentCompleted = w.cdeployment + w.cCompleted; // deploymentCompleted
export const creleaseCompleted = w.crelease + w.cCompleted; // releaseCompleted

// Test Time Tracking
export const cBeginDateTimeStamp = w.cBegin + cDateTimeStamp; // BeginDateTimeStamp
export const cEndDateTimeStamp = w.cEnd + cDateTimeStamp; // EndDateTimeStamp
export const cItemsIndividuallySynch = w.cItems + w.cIndividually + w.cSynch; // ItemsIndividuallySynch
export const cTimeStampVariableName = cTimeStamp + w.cVariable + w.cName; // TimeStampVariableName
export const cBeginTimeStampVariableName = w.cBegin + cTimeStampVariableName; // BeginTimeStampVariableName
export const cEndTimeStampVariableName = w.cEnd + cTimeStampVariableName; // EndTimeStampVariableName
export const cBusinessRulePerformanceTrackingStack = w.cBusiness + w.cRule + w.cPerformance + w.cTracking + w.cStack; // BusinessRulePerformanceTrackingStack
export const cBusinessRuleNamesPerformanceTrackingStack = w.cBusiness + w.cRule + w.cNames + w.cPerformance + w.cTracking + w.cStack; // BusinessRuleNamesPerformanceTrackingStack
export const cBusinessRulesPerformanceAnalysisStack = w.cBusiness + w.cRules + w.cPerformance + w.cAnalysis + w.cStack; // BusinessRulesPerformanceAnalysisStack
export const cClearBusinessRulesPerformanceDataAfterAnalysis = w.cClear + w.cBusiness + w.cRules + w.cPerformance + w.cData + w.cAfter + w.cAnalysis; // ClearBusinessRulesPerformanceDataAfterAnalysis
export const cCommandPerformanceTrackingStack = w.cCommand + w.cPerformance + w.cTracking + w.cStack; // CommandPerformanceTrackingStack
export const cCommandNamesPerformanceTrackingStack = w.cCommand + w.cNames + w.cPerformance + w.cTracking + w.cStack; // CommandNamesPerformanceTrackingStack
export const cCommandsPerformanceAnalysisStack = w.cCommands + w.cPerformance + w.cAnalysis + w.cStack; // CommandsPerformanceAnalysisStack
export const cClearCommandPerformanceDataAfterAnalysis = w.cClear + w.cCommand + w.cPerformance + w.cData + w.cAfter + w.cAnalysis; // ClearCommandPerformanceDataAfterAnalysis

// Business Rules
export const cecho = b.cec + b.cho; // echo
export const cEcho = b.cEc + b.cho; // Echo
// ********************************
// StringParsing rules in order
// ********************************
export const cstringToBoolean = w.cstring + w.cTo + w.cBoolean; // stringToBoolean
export const cstringToDataType = w.cstring + w.cTo + w.cData + w.cType; // stringToDataType
export const cdetermineObjectDataType = w.cdetermine + w.cObject + w.cData + w.cType; // determineObjectDataType
export const cisBoolean = w.cis + w.cBoolean; // isBoolean
export const cisInteger = w.cis + w.cInteger; // isInteger
export const cisFloat = w.cis + w.cFloat; // isFloat
export const cisString = w.cis + w.cString; // isString
export const csingleQuoteSwapAfterEquals = w.csingle + w.cQuote + w.cSwap + w.cAfter + w.cEquals; // singleQuoteSwapAfterEquals
export const cswapForwardSlashToBackSlash = w.cswap + cForwardSlash + b.cTo + cBackSlash; // swapForwadSlashToBackSlash
export const cswapBackSlashToForwardSlash = w.cswap + cBackSlash + b.cTo + cForwardSlash; // swapBackSlashToForwardSlash
export const cswapDoubleForwardSlashToSingleForwardSlash = w.cswap + w.cDouble + cForwardSlash + b.cTo + w.cSingle + cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
export const cswapDoubleBackSlashToSingleBackSlash = w.cswap + w.cDouble + cBackSlash + b.cTo + w.cSingle + cBackSlash; // swapDoubleBackSlashToSingleBackSlash
export const cgetUserNameFromEmail = w.cget + w.cUser + w.cName + w.cFrom + w.cEmail; // getUserNameFromEmail
export const creplaceSpacesWithPlus = w.creplace + w.cSpaces + w.cWith + w.cPlus; // replaceSpacesWithPlus
export const creplaceColonWithUnderscore = w.creplace + w.cColon + w.cWith + cUnderscore; // replaceColonWithUnderscore
export const creplaceCharacterWithCharacter = w.creplace + w.cCharacter + w.cWith + w.cCharacter; // replaceCharacterWithCharacter
export const ccleanCarriageReturnFromString = w.cclean + cCarriageReturn + w.cFrom + w.cString; // cleanCarriageReturnFromString
export const cconvertStringToLowerCase = w.cconvert + w.cString + w.cTo + w.cLower + w.cCase; // convertStringToLowerCase
export const cconvertStringToUpperCase = w.cconvert + w.cString + w.cTo + w.cUpper + w.cCase; // convertStringToUpperCase
export const cgetFileNameFromPath = w.cget + cFileName + w.cFrom + w.cPath; // getFileNameFromPath
export const cgetFileExtension = w.cget + w.cFile + w.cExtension; // getFileExtension
export const cremoveDotFromFileExtension = w.cremove + p.cDot + w.cFrom + w.cFile + w.cExtension; // removeDotFromFileExtension
export const cremoveFileExtensionFromFileName = w.cremove + w.cFile + w.cExtension + w.cFrom + cFileName; // removeFileExtensionFromFileName
export const cgetValueFromAssignmentOperationString = w.cget + w.cValue + w.cFrom + w.cAssignment + w.cOperation + w.cString; // getValueFromAssignmentOperationString
export const caggregateNumericalDifferenceBetweenTwoStrings = w.caggregate + w.cNumerical + w.cDifference + w.cBetween + n.cTwo + w.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings
export const cconvertCamelCaseStringToArray = w.cconvert + w.cCamel + w.cCase + w.cString + b.cTo + w.cArray; // convertCamelCaseStringToArray
export const cconvertArrayToCamelCaseString = w.cconvert + w.cArray + b.cTo + w.cCamel + w.cCase + w.cString; // convertArrayToCamelCaseString
export const cmapWordToCamelCaseWord = p.cmap + w.cWord + b.cTo + w.cCamel + w.cCase + w.cWord; // mapWordToCamelCaseWord
export const csimplifyAndConsolidateString = w.csimplify + w.cAnd + w.cConsolidate + w.cString; // simplifyAndConsolidateString
export const ccompareSimplifiedAndConsolidatedStrings = w.ccompare + w.cSimplified + w.cAnd + w.cConsolidated + w.cStrings; // compareSimplifiedAndConsolidatedStrings
export const cdoesArrayContainLowerCaseConsolidatedString = w.cdoes + w.cArray + w.cContain + w.cLower + w.cCase + w.cConsolidated + w.cString; // doesArrayContainLowerCaseConsolidatedString
export const cdoesArrayContainCharacter = w.cdoes + w.cArray + w.cContain + w.cCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = w.cremove + w.cCharacter + w.cFrom + w.cArray; // removeCharacterFromArray
export const cascertainMatchingFilenames = w.cascertain + w.cMatching + cFilenames; // ascertainMatchingFilenames
export const cdoesArrayContainFilename = w.cdoes + w.cArray + w.cContain + cFilename; // doesArrayContainFilename
export const cvalidateConstantsDataValidation = w.cvalidate + w.cConstants + w.cData + w.cValidation; // validateConstantsDataValidation
export const cdetermineSuggestedConstantsValidationLineOfCode = w.cdetermine + w.cSuggested + w.cConstants + w.cValidation + w.cLine + b.cOf + w.cCode; // determineSuggestedConstantsValidationLineOfCode
export const cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidation + w.cLine + w.cItem + w.cName; // validateConstantsDataValidationLineItemName
export const cvalidateConstantsDataValues = w.cvalidate + w.cConstants + w.cData + w.cValues; // validateConstantsDataValues
export const cgetDataCatagoryFromDataContextName = w.cget + w.cData + w.cCatagory + w.cFrom + w.cData + w.cContext + w.cName; // getDataCatagoryFromDataContextName
export const cgetDataCatagoryDetailNameFromDataContextName = w.cget + w.cData + w.cCatagory + w.cDetail + w.cName + w.cFrom + w.cData + w.cContext + w.cName; // getDataCatagoryDetailNameFromDataContextName
export const cgetKeywordNameFromDataContextName = w.cget + w.cKeyword + w.cName + w.cFrom + w.cData + w.cContext + w.cName; // getKeywordNameFromDataContextName
export const cparseSystemRootPath = w.cparse + w.cSystem + w.cRoot + w.cPath; // parseSystemRootPath
export const creplaceDoublePercentWithMessage = w.creplace + w.cDouble + w.cPercent + w.cWith + w.cMessage; // replaceDoublePercentWithMessage
export const cremoveXnumberOfFoldersFromEndOfPath = w.cremove + b.cX + w.cnumber + b.cOf + w.cFolders + w.cFrom + w.cEnd + b.cOf + w.cPath; // removeXnumberOfFoldersFromEndOfPath
export const cgetFirstTopLevelFolderFromPath = w.cget + n.cFirst + w.cTop + w.cLevel + w.cFolder + w.cFrom + w.cPath; // getFirstTopLevelFolderFromPath
export const cisOdd = b.cis + w.cOdd; // isOdd
export const cisEven = b.cis + w.cEven; // isEven
export const creplaceCharacterAtIndex = w.creplace  + w.cCharacter + w.cAt + w.cIndex; // replaceCharacterAtIndex

// *********************************
// StringGeneration rules in order
// *********************************
export const cgenerateRandomMixedCaseTextByLength1 = cgenerateRandom + cMixedCase + cTextByLength + n.c1; // generateRandomMixedCaseTextByLength1
export const cgenerateRandomMixedCaseTextByLength2 = cgenerateRandom + cMixedCase + cTextByLength + n.c2; // generateRandomMixedCaseTextByLength2
export const cgenerateRandomUpperCaseTextByLength1 = cgenerateRandom + cUpperCase + cTextByLength + n.c1; // generateRandomUpperCaseTextByLength1
export const cgenerateRandomUpperCaseTextByLength2 = cgenerateRandom + cUpperCase + cTextByLength + n.c2; // generateRandomUpperCaseTextByLength2
export const cgenerateRandomLowerCaseTextByLength1 = cgenerateRandom + cLowerCase + cTextByLength + n.c1; // generateRandomLowerCaseTextByLength1
export const cgenerateRandomLowerCaseTextByLength2 = cgenerateRandom + cLowerCase + cTextByLength + n.c2; // generateRandomLowerCaseTextByLength2
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomMixedCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomMixedCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomUpperCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomUpperCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomLowerCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomLowerCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + n.c1; // generateRandomMixedCaseAlphaNumericCodeByLength1
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + n.c2; // generateRandomMixedCaseAlphaNumericCodeByLength2
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + n.c1; // generateRandomUpperCaseAlphaNumericCodeByLength1
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + n.c2; // generateRandomUpperCaseAlphaNumericCodeByLength2
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + n.c1; // generateRandomLowerCaseAlphaNumericCodeByLength1
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + n.c2; // generateRandomLowerCaseAlphaNumericCodeByLength2
export const cgenerateRandomNumericCodeByLength1 = cgenerateRandom + cNumericCodeByLength + n.c1; // generateRandomNumericCodeByLength1
export const cgenerateRandomNumericCodeByLength2 = cgenerateRandom + cNumericCodeByLength + n.c2; // generateRandomNumericCodeByLength2
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandom + cSpecialCharacterCodeByLength + n.c1; // generateRandomSpecialCharacterCodeByLength1
export const cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandom + cSpecialCharacterCodeByLength + n.c2; // generateRandomSpecialCharacterCodeByLength2
export const cgenerateValidEmail1 = w.cgenerate + cValidEmail + n.c1; // generateValidEmail1
export const cgenerateValidEmail2 = w.cgenerate + cValidEmail + n.c2; // generateValidEmail2
export const cgenerateInvalidEmail1 = w.cgenerate + cInvalidEmail + n.c1; // generateInvalidEmail1
export const cgenerateInvalidEmail2 = w.cgenerate + cInvalidEmail + n.c2; // generateInvalidEmail2

// *********************************
// CharacterGeneration rules in order
// *********************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateMixedCaseLetterOrSpecialCharacter1
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateMixedCaseLetterOrSpecialCharacter2
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateUpperCaseLetterOrSpecialCharacter1
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateUpperCaseLetterOrSpecialCharacter2
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateLowerCaseLetterOrSpecialCharacter1
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateLowerCaseLetterOrSpecialCharacter2
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateMixedCaseAlphaNumericCharacter1
export const crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateMixedCaseAlphaNumericCharacter2
export const crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateUpperCaseAlphaNumericCharacter1
export const crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateUpperCaseAlphaNumericCharacter2
export const crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateLowerCaseAlphaNumericCharacter1
export const crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateLowerCaseAlphaNumericCharacter2
export const crandomlyGenerateNumericCharacter1 = crandomlyGenerate + cNumericCharacter + n.c1; // randomlyGenerateNumericCharacter1
export const crandomlyGenerateNumericCharacter2 = crandomlyGenerate + cNumericCharacter + n.c2; // randomlyGenerateNumericCharacter2
export const crandomlyGenerateSpecialCharacter1 = crandomlyGenerate + cSpecialCharacter + n.c1; // randomlyGenerateSpecialCharacter1
export const crandomlyGenerateSpecialCharacter2 = crandomlyGenerate + cSpecialCharacter + n.c2; // randomlyGenerateSpecialCharacter2
export const crandomlyGenerateNumberInRange1 = crandomlyGenerate + cNumberInRange + n.c1; // randomlyGenerateNumberInRange1
export const crandomlyGenerateNumberInRange2 = crandomlyGenerate + cNumberInRange + n.c2; // randomlyGenerateNumberInRange2
export const crandomlyGenerateBooleanValue1 = crandomlyGenerate + cBooleanValue + n.c1; // randomlyGenerateBooleanValue1
export const crandomlyGenerateBooleanValue2 = crandomlyGenerate + cBooleanValue + n.c2; // randomlyGenerateBooleanValue2
export const crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + n.c1; // randomlyGenerateMixedCaseAlphabeticCharacter1
export const crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + n.c2; // randomlyGenerateMixedCaseAlphabeticCharacter2
export const crandomlyGenerateLowerCaseLetter1 = crandomlyGenerate + cLowerCase + w.cLetter + n.c1; // randomlyGenerateLowerCaseLetter1
export const crandomlyGenerateLowerCaseLetter2 = crandomlyGenerate + cLowerCase + w.cLetter + n.c2; // randomlyGenerateLowerCaseLetter2
export const crandomlyGenerateUpperCaseLetter1 = crandomlyGenerate + cUpperCase + w.cLetter + n.c1; // randomlyGenerateUpperCaseLetter1
export const crandomlyGenerateUpperCaseLetter2 = crandomlyGenerate + cUpperCase + w.cLetter + n.c2; // randomlyGenerateUpperCaseLetter2
export const cconvertNumberToUpperCaseLetter = w.cconvert + w.cNumber + w.cTo + cUpperCase + w.cLetter; // convertNumberToUpperCaseLetter
export const cconvertNumberToLowerCaseLetter = w.cconvert + w.cNumber + w.cTo + cLowerCase + w.cLetter; // convertNumberToLowerCaseLetter

// *********************************
// mathOperations rules in order
// *********************************
export const chex2rgbConversion = p.chex + n.c2 + p.crgb + w.cConversion; // hex2rgbConversion

// Commands
export const cSystemCommandsAliasesActualPath = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cCommands + w.cBlob + b.cForwardSlash; // SystemCommandsAliasesActualPath
export const cSystemWorkflowsActualPath = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cWorkflows + b.cForwardSlash; // SystemWorkflowsActualPath
export const cSystemCommandsAliasesPath = w.cSystem + w.cCommands + w.cAliases + w.cPath; // SystemCommandsAliasesPath
export const cClientCommandsAliasesPath = w.cClient + w.cCommands + w.cAliases + w.cPath; // ClientCommandsAliasesPath
export const cSystemWorkflowsPath = w.cSystem + w.cWorkflows + w.cPath; // SystemWorkflowsPath
export const cClientWorkflowsPath = w.cClient + w.cWorkflows + w.cPath; // ClientWorkflowsPath
// ********************************
// Nominal Commands in order
// ********************************
export const cechoCommand = cecho + w.cCommand; // echoCommand
export const cEchoCommand = cEcho + w.cCommand; // EchoCommand
export const cworkflowHelp = w.cworkflow + w.cHelp; // workflowHelp
export const ccommandSequencer = w.ccommand + w.cSequencer; // commandSequencer
export const cprintDataHive = w.cprint + w.cData + w.cHive; // printDataHive
export const ccommandGenerator = w.ccommand + w.cGenerator; // commandGenerator
export const cbusinessRulesMetrics = w.cbusiness + w.cRules + w.cMetrics; // businessRulesMetrics
export const ccommandMetrics = w.ccommand + w.cMetrics; // commandMetrics
export const cconvertColors = w.cconvert + w.cColors; // convertColors
// ********************************
// Unit Test Constants commands in order
// ********************************
export const cvalidateConstants = w.cvalidate + w.cConstants; // validateConstants

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = w.cWorkflow + b.cSpace + w.cstartup; // Workflow startup
export const cBuildWorkflow = w.cWorkflow + b.cSpace + w.cbuild; // Workflow build
export const cReleaseWorkflow = w.cWorkflow + b.cSpace + w.crelease; // Workflow release
