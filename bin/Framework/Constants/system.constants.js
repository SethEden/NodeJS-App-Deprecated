"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cTo = exports.cRight = exports.cLeft = exports.cBack = exports.cFront = exports.cDetails = exports.cDetail = exports.cWithout = exports.cwith = exports.cWith = exports.cMenu = exports.cMe = exports.cHamburger = exports.cAccount = exports.cConfirm = exports.cCancel = exports.cSelect = exports.cAt = exports.cAll = exports.cdelete = exports.cDelete = exports.cEdit = exports.cUpdate = exports.cOpen = exports.cClose = exports.cAdded = exports.cAdd = exports.c_add = exports.cSubmit = exports.cCreate = exports.ccreate = exports.cFull = exports.cfull = exports.cEmpty = exports.cempty = exports.cConfigurations = exports.cConfiguration = exports.coops = exports.cOops = exports.cOOPS = exports.cWord = exports.cword = exports.cObjects = exports.cobjects = exports.cObject = exports.cobject = exports.cBooleans = exports.cbooleans = exports.cBoolean = exports.cboolean = exports.cChars = exports.cchars = exports.cChar = exports.cchar = exports.cDoubles = exports.cdoubles = exports.cDouble = exports.cdouble = exports.cShorts = exports.cshorts = exports.cShort = exports.cshort = exports.cLongs = exports.clongs = exports.cLong = exports.clong = exports.cFloats = exports.cfloats = exports.cFloat = exports.cfloat = exports.cIntegers = exports.cintegers = exports.cInteger = exports.cinteger = exports.cStrings = exports.cstrings = exports.cstring = exports.cString = exports.cnth = exports.cNth = exports.cURL = exports.curl = exports.cnode = exports.cNode = exports.ckey = exports.cKey = exports.clogs = exports.cLogs = exports.clog = exports.cLog = exports.cOut = exports.cout = exports.c3D = exports.c3d = exports.cSTYLE = exports.cITERATION = exports.cENVIRONMENT = exports.cLOG = exports.cENV = exports.c1a1d = void 0;
exports.cRows = exports.cRun = exports.cRow = exports.cOf = exports.cHost = exports.cNumber = exports.cnumber = exports.cAutomation = exports.cActions = exports.cAction = exports.cBrowser = exports.cExhaustive = exports.cBureau = exports.cTestWorkflow = exports.cTestStatusMessage = exports.cTestStatus = exports.cStatus = exports.cTESTS = exports.ctests = exports.cTests = exports.ctest = exports.cTEST = exports.cTest = exports.cWorkflows = exports.cworkflows = exports.cworkflow = exports.cWorkflow = exports.cFlow = exports.cflow = exports.cWork = exports.cwork = exports.cResults = exports.cdata = exports.cData = exports.ckeywords = exports.cKeywords = exports.ckeyword = exports.cKeyword = exports.cScripts = exports.cScript = exports.cMessage = exports.cPages = exports.cpages = exports.cPage = exports.cpage = exports.cDebug = exports.cdebug = exports.cbug = exports.cInvalid = exports.cValidate = exports.cValidation = exports.cvalid = exports.cValid = exports.cTypes = exports.ctype = exports.cType = exports.cField = exports.cLabel = exports.cLink = exports.cInfo = exports.cinfo = exports.cEntire = exports.cPositive = exports.cNegative = exports.cDownload = exports.cSave = exports.cNavigate = exports.cnavigate = exports.cexpect = exports.cpressKey = exports.cPressKey = exports.cclick = exports.cClick = exports.cLoad = exports.cNew = exports.cView = exports.cview = exports.cUnShare = exports.cUnshare = exports.cUnshared = exports.cUnShared = exports.cshared = exports.cShared = exports.cshares = exports.cShares = exports.cshare = exports.cShare = exports.cLists = exports.cList = exports.cItems = exports.cItem = exports.cThe = exports.cEnding = exports.cEND = exports.cEnd = exports.cBeginning = exports.cBEGIN = exports.cBegin = exports.cBottom = exports.cTop = void 0;
exports.cNumerical = exports.cNumeric = exports.cRange = exports.cFindValue = exports.cFind = exports.cValue = exports.cparent = exports.cParent = exports.cGenerate = exports.cgenerate = exports.cRandomly = exports.crandomly = exports.cRandom = exports.crandom = exports.cCounter = exports.cCount = exports.cUpper = exports.cLetter = exports.cLet = exports.clet = exports.cDigit = exports.cdigit = exports.cDig = exports.cdig = exports.cExtension = exports.cRemove = exports.cremove = exports.cmove = exports.cCase = exports.cLower = exports.cLow = exports.cConvert = exports.cconvert = exports.cReturn = exports.creturn = exports.cturn = exports.cCarriage = exports.cCleaned = exports.ccleaned = exports.cClean = exports.cclean = exports.cCatagory = exports.cScore = exports.cscore = exports.cUnder = exports.cColon = exports.cPlus = exports.cSpaces = exports.cSpace = exports.cReplace = exports.creplace = exports.cFrom = exports.cput = exports.cPut = exports.cGet = exports.cget = exports.cLevel = exports.cAccess = exports.cUser = exports.cand = exports.cAnd = exports.cComplete = exports.cProcessing = exports.cProcess = exports.cGateway = exports.cWay = exports.cway = exports.cGate = exports.cLimit = exports.cPreview = exports.cSet = exports.cBug = exports.cPermission = exports.cViewer = exports.cExit = exports.cPath = exports.cpath = exports.cIntermediate = exports.cintermediate = exports.cmediate = exports.cStamp = exports.ctime = exports.cTime = exports.cDate = exports.cdate = exports.cReceived = exports.cReceive = exports.cEmails = exports.cEmail = exports.cmail = exports.cId = exports.cid = exports.cID = exports.cPageScriptName = exports.cKeywordName = exports.ckeywordName = exports.cname = exports.cName = exports.cEnvironment = exports.cMaster = void 0;
exports.cConstant = exports.cDescription = exports.cInput = exports.cinput = exports.cContext = exports.cTEXT = exports.cText = exports.ctext = exports.cAlphabetic = exports.cbetic = exports.calpha = exports.cAlpha = exports.cMixed = exports.cMix = exports.cOR = exports.cor = exports.cOr = exports.cBY = exports.cBy = exports.cby = exports.cAssertionStyle = exports.cUploadStyle = exports.cAssertionType = exports.cAssertion = exports.cAssertValueGreaterThan = exports.cAssertValueLessThan = exports.cAssertValueNotEqual = exports.cAssertValueEqual = exports.cAssertNotExists = exports.cAssertExists = exports.cThan = exports.cthan = exports.cThen = exports.cthen = exports.cgreater = exports.cGreater = exports.cgreat = exports.cGreat = exports.cless = exports.cLess = exports.cAssert = exports.cStyle = exports.cUpload = exports.cload = exports.cOnce = exports.cAfter = exports.cSwap = exports.cswap = exports.cQuote = exports.cSingle = exports.csingle = exports.cDefault = exports.cUnified = exports.cMulti = exports.cParallel = exports.cSingular = exports.cSynch = exports.cAsynch = exports.cExists = exports.cExist = exports.cIndividually = exports.cIndividual = exports.cSelectors = exports.cselector = exports.cSelector = exports.cLocatorLibrary = exports.cLocators = exports.cLocator = exports.cActionOverride = exports.cOverride = exports.cride = exports.cRide = exports.cOver = exports.cInner = exports.cinner = exports.chtml = exports.cHTML = exports.cawait = exports.cWait = exports.cwait = exports.cAbreviated = exports.cAssignment = exports.cSystem = exports.cOperating = exports.cOperation = exports.cRaw = exports.cEquals = exports.cEqual = exports.cTable = exports.cLibrary = exports.cDialog = exports.cvisibility = exports.cVisibility = exports.cVariable = exports.cDetermine = exports.cdetermine = exports.cEnabled = exports.cEither = exports.cCode = exports.cLength = void 0;
exports.cround = exports.cCamel = exports.ccamel = exports.cArray = exports.carray = exports.cDecompose = exports.cdecompose = exports.ccompose = exports.cDashboard = exports.cboard = exports.cDash = exports.cError = exports.cerror = exports.cWarnings = exports.cwarnings = exports.cWarning = exports.cwarning = exports.cWarn = exports.cwarn = exports.cConstructor = exports.cPort = exports.cport = exports.chung = exports.cHung = exports.cCell = exports.ccell = exports.cwoman = exports.cWoman = exports.cman = exports.cMan = exports.cdisabled = exports.cDisabled = exports.cattributes = exports.cAttributes = exports.cfilter = exports.cFilter = exports.cChild = exports.cchild = exports.csibling = exports.cSibling = exports.cExecute = exports.cDwell = exports.cTimeOut = exports.cTimeout = exports.cBinary = exports.csolid = exports.cSolid = exports.cWorks = exports.cEdge = exports.cCharacters = exports.cCharacter = exports.cSpecial = exports.cPublic = exports.cHome = exports.cAllowable = exports.cAllow = exports.cElementName = exports.cElement = exports.cchecked = exports.cCheck = exports.ccheck = exports.cIS = exports.cIs = exports.cis = exports.cIngestion = exports.cclass = exports.cClass = exports.cResources = exports.cresources = exports.cResource = exports.cresource = exports.cSource = exports.csource = exports.cbin = exports.csrc = exports.ccert = exports.ccafe = exports.cFolders = exports.cfolders = exports.cFolder = exports.cfolder = exports.cFold = exports.cfold = exports.cfiles = exports.cfile = exports.cFiles = exports.cFile = exports.cWebkey = exports.cPageName = exports.cTestName = exports.cPageData = exports.cpageData = exports.ctestData = exports.cCreation = exports.cAdvanced = exports.cAdvance = exports.cProjects = exports.cproject = exports.cProject = exports.cIteration = void 0;
exports.cFunctions = exports.cfunctions = exports.cFunction = exports.cfunction = exports.cCommon = exports.ccommon = exports.cDemo = exports.cdemo = exports.cReload = exports.creload = exports.cEval = exports.ceval = exports.cRefresh = exports.crefresh = exports.cfresh = exports.cRule = exports.crule = exports.cBusiness = exports.cbusiness = exports.cMetaData = exports.cMeta = exports.cmeta = exports.cSlash = exports.cslash = exports.cForward = exports.cforward = exports.cParse = exports.cparse = exports.cRoot = exports.croot = exports.cRelease = exports.crelease = exports.clease = exports.cDeploy = exports.cdeploy = exports.cApplication = exports.capplication = exports.cDoes = exports.cdoes = exports.cMatching = exports.cmatching = exports.cMatch = exports.cmatch = exports.cAscertain = exports.cascertain = exports.ccertain = exports.cBetween = exports.cbetween = exports.cBet = exports.cbet = exports.cDifference = exports.cAggregate = exports.caggregate = exports.cProduct = exports.cVideo = exports.cvideo = exports.cContains = exports.ccontains = exports.cContain = exports.ccontain = exports.cCompare = exports.ccompare = exports.cConsolidated = exports.cConsolidate = exports.cconsolidate = exports.cSimplify = exports.csimplify = exports.csort = exports.cSort = exports.cLocation = exports.clocation = exports.cPoint = exports.cpoint = exports.cTransform = exports.ctransform = exports.cform = exports.cVector = exports.cvector = exports.cFraction = exports.cTrap = exports.ctrap = exports.cAngle = exports.cangle = exports.cDegrees = exports.cdegrees = exports.cDegree = exports.cdegree = exports.cNormalize = exports.cnormalize = exports.cNormal = exports.cnormal = exports.cQuaternion = exports.cquaternion = exports.cQuarter = exports.cquarter = exports.cQuart = exports.cquart = exports.cRounded = exports.crounded = exports.cRound = void 0;
exports.cFilenames = exports.cFileNames = exports.cfilename = exports.cFilename = exports.cFileName = exports.cFileTypes = exports.cfilesLists = exports.cTestRunID = exports.cHostName = exports.cBrowserName = exports.cRuntime = exports.cRunTime = exports.cEndKeywordTimeStamp = exports.cBeginKeywordTimeStamp = exports.cEndPageScriptTimeStamp = exports.cBeginPageScriptTimeStamp = exports.cEndTestTimeStamp = exports.cBeginTestTimeStamp = exports.cEndScriptTimeStamp = exports.cBeginScriptTimeStamp = exports.cScriptDateTimeStamp = exports.cTestTimeStamp = exports.cKeywordTimeStamp = exports.cScriptTimeStamp = exports.cScriptDateStamp = exports.cDateTimeStamp = exports.cPageScriptTimeStamp = exports.cTimeStamp = exports.cIntermediatePath = exports.cPageScript = exports.cEnvironmentRowNumber = exports.cEnvironmentRow = exports.cMasterRowNumber = exports.cNumberOfRows = exports.cTestAutomation = exports.cDebugFiles = exports.cDebugFunctions = exports.cDebugSelectors = exports.cDebugBrowserActions = exports.cJournalBrowserActions = exports.cLogBrowserActions = exports.cDebugKeywords = exports.cDebugPageData = exports.cDebugPageScripts = exports.cDebugTestData = exports.cDebugTestExhaustive = exports.cDebugPage = exports.cDebugTest = exports.cwithText = exports.cWithText = exports.cCube = exports.ccube = exports.cTrapezoid = exports.ctrapezoid = exports.cNonagon = exports.cnonagon = exports.cHeptagon = exports.cheptagon = exports.cHexagon = exports.chexagon = exports.cOctagon = exports.coctagon = exports.cRectangle = exports.crectangle = exports.cTriangle = exports.ctriangle = exports.cSquare = exports.csquare = exports.cOval = exports.coval = exports.cCircle = exports.ccircle = exports.cFont = exports.cfont = exports.cFiglet = exports.cfiglet = exports.cFig = exports.cfig = exports.cInterface = exports.cinterface = exports.cDriven = exports.cdriven = exports.cDrive = exports.cdrive = exports.cArgument = exports.cargument = exports.cFace = exports.cface = exports.cEvents = exports.cevents = exports.cEvent = exports.cevent = exports.cBasic = exports.cbasic = exports.cPercent = exports.cpercent = exports.cExecution = exports.cJournal = exports.cMultiple = exports.cmultiple = void 0;
exports.cSpaceIsColonSpace = exports.cBrowserRefresh = exports.cNavigateTo = exports.cnavigateTo = exports.cPage_Keywords = exports.cBackSlash = exports.cForwardSlash = exports.cVideoLogs = exports.cDashboardLogs = exports.cCarriageReturn = exports.cAlphabeticCharacter = exports.cBooleanValue = exports.cNumberInRange = exports.cNumericCharacter = exports.cAlphaNumericCharacter = exports.cLetterOrNumberOrSpecialCharacter = exports.cLetterOrSpecialCharacter = exports.cLetterOr = exports.cInvalidEmail = exports.cvalidEmail = exports.cValidEmail = exports.cSpecialCharacterCodeByLength = exports.cAlphaNumericCodeWithSpecialCharactersByLength = exports.cAlphaNumericCodeWithSpecialCharacters = exports.cNumericCodeByLength = exports.cNumericCode = exports.cAlphaNumericCodeByLength = exports.cAlphaNumericCode = exports.cAlphaNumeric = exports.cTextWithSpecialCharactersByLength = exports.cTextWithSpecialCharacters = exports.cTextByLength = exports.cWithSpecialCharacters = exports.cSpecialCharacter = exports.cByLength = exports.cLowerCase = exports.cUpperCase = exports.cMixedCase = exports.crandomlyGenerate = exports.cgenerateRandom = exports.caddFilter = exports.caddSibling = exports.caddNth = exports.caddFindValue = exports.caddParent = exports.caddTimeout = exports.caddWithText = exports.cTestBureau = exports.cUnderscore = exports.cchildElementCount = exports.cselectorTimeout = exports.cAbreviatedSelectorsInLogs = exports.cAbreviatedSelectors = exports.ctypeText = exports.cTypeText = exports.cTestRunTime = exports.cScriptRunTime = exports.cPerformance = exports.cVersionControl = exports.cControl = exports.cVersion = exports.cConfigurationElements = exports.cConfigurationElement = exports.cConfigurationName = exports.cFileNumber = exports.cAccessLevel = exports.cShareEmail = exports.cTestDataFileName = exports.cProjectDescription = exports.cProjectName = exports.cPassword = exports.cUsername = exports.cRowNumber = exports.cIngestionCompleteDwellTime = exports.cProcessingTimeout = exports.cTestData = exports.cinnerHTML = exports.cInnerHTML = exports.cinnerText = exports.cInnerText = exports.cOperatingSystem = exports.cvisibilityCheck = exports.cVisibilityCheck = exports.cDeltaT = exports.cFileCounter = exports.cLogFileEnabled = exports.cTestDataPath = exports.cResultsLogFilePathAndName = exports.cExecutionJournalFilePathAndName = exports.cDataLogFilePathAndName = exports.cLogFilePathAndName = exports.cDwellTime = exports.cTimeoutOverride = exports.cSpecialCharacters = exports.cAllowableCharacters = exports.cParallelMultiUnified = exports.cSynchSingular = exports.cAsynchSingular = exports.cPreValidateFileName = exports.cfilenames = void 0;
exports.cGuatemala = exports.cGrenada = exports.cGreece = exports.cGhana = exports.cGermany = exports.cGerman = exports.cGeorgia = exports.cGambia = exports.cGabon = exports.cFrance = exports.cFinland = exports.cFiji = exports.cEthiopia = exports.cEswatini = exports.cEstonia = exports.cEritrea = exports.cEquatorialGuinea = exports.cElSalvador = exports.cEgypt = exports.cEcuador = exports.cDominicanRepublic = exports.cDominica = exports.cDjibouti = exports.cDenmark = exports.cDemocraticRepublicOfTheCongo = exports.cCzechia = exports.cCyprus = exports.cCuba = exports.cCroatia = exports.cCostaRica = exports.cCongo = exports.cComoros = exports.cColombia = exports.cChina = exports.cChile = exports.cChad = exports.cCentralAfricanRepublic = exports.cCanada = exports.cCameroon = exports.cCambodia = exports.cCaboVerde = exports.cCotedlvoire = exports.cBurundi = exports.cBurkinaFaso = exports.cBulgaria = exports.cBrunei = exports.cBrazil = exports.cBotswana = exports.cBosnia = exports.cBolivia = exports.cBhutan = exports.cBenin = exports.cBelize = exports.cBelgium = exports.cBelarus = exports.cBarbuda = exports.cBarbados = exports.cBangladesh = exports.cBahrain = exports.cBahamas = exports.cAzerbaijan = exports.cAustria = exports.cAustralia = exports.cArmenia = exports.cArgentina = exports.cAntigua = exports.cAngola = exports.cAndorra = exports.cAlgeria = exports.cAlbania = exports.cAfghanistan = exports.cvrml = exports.cVrml = exports.cVRML = exports.cSolidWorks = exports.cSolidEdge = exports.cRhino = exports.cProE = exports.cParasolid = exports.cNX = exports.cNeutral = exports.cInventor = exports.cImages = exports.cImage = exports.cHOOPS = exports.cHoops = exports.cDWG = exports.cDraft = exports.cDocuments = exports.cDocument = exports.cCatia = exports.cLogWarnings = exports.cLogBasicSystemEvents = exports.creturnDataIs = exports.cinputMetaDataIs = exports.cinputDataIs = exports.cEND_Function = exports.cBEGIN_Function = exports.creleaseApplication = exports.cdeployApplication = void 0;
exports.cSriLanka = exports.cSpain = exports.cSouthSudan = exports.cSouthKorea = exports.cSouthAfrica = exports.cSomalia = exports.cSolomonIslands = exports.cSlovenia = exports.cSlovakia = exports.cSingapore = exports.cSierraLeone = exports.cSeychelles = exports.cSerbia = exports.cSenegal = exports.cSaudiArabia = exports.cSaoTome = exports.cSanMarino = exports.cSomoa = exports.cSaintVincent = exports.cSaintLucia = exports.cSaintKitts = exports.cRwanda = exports.cRussia = exports.cRomania = exports.cQatar = exports.cPrincipe = exports.cPortugal = exports.cPoland = exports.cPhilippines = exports.cPeru = exports.cParaguay = exports.cPapuaNewGuinea = exports.cPanama = exports.cPalestine = exports.cPalau = exports.cPakistan = exports.cOman = exports.cNorway = exports.cNorthMacedonia = exports.cNorthKorea = exports.cNigeria = exports.cNiger = exports.cNicaragua = exports.cNevis = exports.cNewZealand = exports.cNetherlands = exports.cNepal = exports.cNauru = exports.cNamibia = exports.cMyanmar = exports.cMozambique = exports.cMorocco = exports.cMontenegro = exports.cMongolia = exports.cMonaco = exports.cMoldova = exports.cMicronesia = exports.cMexico = exports.cMauritius = exports.cMauritania = exports.cMarshallIslands = exports.cMalta = exports.cMali = exports.cMaldives = exports.cMalaysia = exports.cMalawi = exports.cMadagascar = exports.cLuxembourg = exports.cLithuania = exports.cLiechtenstein = exports.cLibya = exports.cLiberia = exports.cLesotho = exports.cLebanon = exports.cLatvia = exports.cLaos = exports.cKyrgyzstan = exports.cKuwait = exports.cKiribati = exports.cKenya = exports.cKazakhstan = exports.cJordan = exports.cJapan = exports.cJamaica = exports.cItaly = exports.cIsrael = exports.cIreland = exports.cIraq = exports.cIran = exports.cIndonesia = exports.cIndia = exports.cIceland = exports.cHungary = exports.cHonduras = exports.cHolySee = exports.cHerzegovina = exports.cHaiti = exports.cGuyana = exports.cGuineaBissau = exports.cGuinea = void 0;
exports.cEndTimeStampVariableName = exports.cBeginTimeStampVariableName = exports.cTimeStampVariableName = exports.cItemsIndividuallySynch = exports.cEndDateTimeStamp = exports.cBeginDateTimeStamp = exports.cFigletFont = exports.cArgumentDrivenInterface = exports.cLocatorsDataPath = exports.cKeywordsDataPath = exports.cWorkflowDataPath = exports.cPageDataPath = exports.cCtempPath = exports.cDataPath = exports.cApplicationVersionNumber = exports.cConfigurationPath = exports.cApplicationCleanedRootPath = exports.cApplicationRootPath = exports.cApplicationName = exports.cctrl_z = exports.cctrl_y = exports.cctrl_x = exports.cctrl_w = exports.cctrl_v = exports.cctrl_u = exports.cctrl_t = exports.cctrl_s = exports.cctrl_r = exports.cctrl_q = exports.cctrl_p = exports.cctrl_o = exports.cctrl_n = exports.cctrl_m = exports.cctrl_l = exports.cctrl_k = exports.cctrl_j = exports.cctrl_i = exports.cctrl_h = exports.cctrl_g = exports.cctrl_f = exports.cctrl_e = exports.cctrl_d = exports.cctrl_c = exports.cctrl_b = exports.cctrl_a = exports.cPREPROD = exports.cPreProd = exports.cPRE = exports.cPre = exports.cProd = exports.cPROD = exports.cDEV = exports.cQA = exports.cButton = exports.cSpanish = exports.cRussian = exports.cPortuguese = exports.cPolish = exports.cMiscellaneous = exports.cKorean = exports.cJapanese = exports.cItalian = exports.cHungarian = exports.cFrench = exports.cEnglish = exports.cCzech = exports.cChineseTraditional = exports.cChineseSimplified = exports.cChinese = exports.cTraditional = exports.cSimplified = exports.cZimbabwe = exports.cZambia = exports.cYemen = exports.cVietnam = exports.cVenezuela = exports.cVanuatu = exports.cUzbekistan = exports.cUruguay = exports.cUnitedStatesOfAmerica = exports.cUnitedKingdom = exports.cUnitedArabEmirates = exports.cUkraine = exports.cUganda = exports.cTuvalu = exports.cTurkmenistan = exports.cTurkey = exports.cTunisia = exports.cTrinidadAndTabago = exports.cTonga = exports.cTogo = exports.cTimorLeste = exports.cThailand = exports.cTanzania = exports.cTajikistan = exports.cSyria = exports.cSwitzerland = exports.cSweden = exports.cSuriname = exports.cSudan = void 0;
exports.crandomlyGenerateLowerCaseLetter1 = exports.crandomlyGenerateMixedCaseAlphabeticCharacter2 = exports.crandomlyGenerateMixedCaseAlphabeticCharacter1 = exports.crandomlyGenerateBooleanValue2 = exports.crandomlyGenerateBooleanValue1 = exports.crandomlyGenerateNumberInRange2 = exports.crandomlyGenerateNumberInRange1 = exports.crandomlyGenerateSpecialCharacter2 = exports.crandomlyGenerateSpecialCharacter1 = exports.crandomlyGenerateNumericCharacter2 = exports.crandomlyGenerateNumericCharacter1 = exports.crandomlyGenerateLowerCaseAlphaNumericCharacter2 = exports.crandomlyGenerateLowerCaseAlphaNumericCharacter1 = exports.crandomlyGenerateUpperCaseAlphaNumericCharacter2 = exports.crandomlyGenerateUpperCaseAlphaNumericCharacter1 = exports.crandomlyGenerateMixedCaseAlphaNumericCharacter2 = exports.crandomlyGenerateMixedCaseAlphaNumericCharacter1 = exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = exports.cgenerateInvalidEmail2 = exports.cgenerateInvalidEmail1 = exports.cgenerateValidEmail2 = exports.cgenerateValidEmail1 = exports.cgenerateRandomSpecialCharacterCodeByLength2 = exports.cgenerateRandomSpecialCharacterCodeByLength1 = exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomNumericCodeByLength2 = exports.cgenerateRandomNumericCodeByLength1 = exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomLowerCaseTextByLength2 = exports.cgenerateRandomLowerCaseTextByLength1 = exports.cgenerateRandomUpperCaseTextByLength2 = exports.cgenerateRandomUpperCaseTextByLength1 = exports.cgenerateRandomMixedCaseTextByLength2 = exports.cgenerateRandomMixedCaseTextByLength1 = exports.ccreateNdigitStringFromNumber = exports.cgetFirstTopLevelFolderFromPath = exports.cremoveXnumberOfFoldersFromEndOfPath = exports.creplaceDoublePercentWithMessage = exports.cparseSystemRootPath = exports.cgetKeywordNameFromDataContextName = exports.cgetDataCatagoryDetailNameFromDataContextName = exports.cgetDataCatagoryFromDataContextName = exports.cdoesArrayContainFilename = exports.cascertainMatchingFilenames = exports.cdoesArrayContainLowerCaseConsolidatedString = exports.ccompareSimplifiedAndConsolidatedStrings = exports.csimplifyAndConsolidateString = exports.cmapWordToCamelCase = exports.cconvertArrayToCamelCaseString = exports.cconvertCamelCaseStringToArray = exports.caggregateNumericalDifferenceBetweenTwoStrings = exports.cgetValueFromAssignmentOperationString = exports.cremoveFileExtensionFromFileName = exports.cgetFileNameFromPath = exports.cconvertStringToUpperCase = exports.cconvertStringToLowerCase = exports.ccleanCarriageReturnFromString = exports.creplaceCharacterWithCharacter = exports.creplaceColonWithUnderscore = exports.creplaceSpacesWithPlus = exports.cgetUserNameFromEmail = exports.cswapDoubleBackSlashToSingleBackSlash = exports.cswapDoubleForwardSlashToSingleForwardSlash = exports.cswapBackSlashToForwardSlash = exports.cswapForwardSlashToBackSlash = exports.csingleQuoteSwapAfterEquals = exports.cisString = exports.cisFloat = exports.cisInteger = exports.cisBoolean = exports.cdetermineObjectDataType = exports.cstringToDataType = exports.cstringToBoolean = void 0;
exports.cconvertNumberToLowerCaseLetter = exports.cconvertNumberToUpperCaseLetter = exports.crandomlyGenerateUpperCaseLetter2 = exports.crandomlyGenerateUpperCaseLetter1 = exports.crandomlyGenerateLowerCaseLetter2 = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @module system-constants
 * @description Contains many re-usable word constants and compound words,
 * system defined acronyms, many of them derived from the basic-constants.
 * Also included are other constants like countries, named spoken languages, named geometric shapes.
 * Also included are common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 */
// Miscelaneious
var c1a1d = 'a' + 'd'; // 'ca' & 'cd' is some how a reserved word.

exports.c1a1d = c1a1d;
var cENV = b.cEN + b.cV;
exports.cENV = cENV;
var cLOG = b.cLO + b.cG;
exports.cLOG = cLOG;
var cENVIRONMENT = g.cENV + b.cIR + b.cON + g.cMENT;
exports.cENVIRONMENT = cENVIRONMENT;
var cITERATION = b.cIT + b.cER + b.cAT + b.cIO + b.cN;
exports.cITERATION = cITERATION;
var cSTYLE = b.cST + b.cYL + b.cE;
exports.cSTYLE = cSTYLE;
var c3d = b.c3 + b.cd;
exports.c3d = c3d;
var c3D = b.c3 + b.cD;
exports.c3D = c3D;
var cout = b.co + b.cut;
exports.cout = cout;
var cOut = b.cO + b.cut;
exports.cOut = cOut;
var cLog = b.cL + b.cog;
exports.cLog = cLog;
var clog = b.cl + b.cog;
exports.clog = clog;
var cLogs = cLog + b.cs;
exports.cLogs = cLogs;
var clogs = clog + b.cs;
exports.clogs = clogs;
var cKey = b.cK + b.cey;
exports.cKey = cKey;
var ckey = b.ck + b.cey;
exports.ckey = ckey;
var cNode = b.cN + g.code;
exports.cNode = cNode;
var cnode = b.cn + g.code;
exports.cnode = cnode;
var curl = b.cur + b.cl; // 'url';

exports.curl = curl;
var cURL = b.cUR + b.cL;
exports.cURL = cURL;
var cNth = b.cN + b.cth;
exports.cNth = cNth;
var cnth = b.cn + b.cth; // Data Types

exports.cnth = cnth;
var cString = b.cS + g.ctring;
exports.cString = cString;
var cstring = b.cs + g.ctring;
exports.cstring = cstring;
var cstrings = cstring + b.cs;
exports.cstrings = cstrings;
var cStrings = cString + b.cs;
exports.cStrings = cStrings;
var cinteger = b.ci + g.cnteger;
exports.cinteger = cinteger;
var cInteger = b.cI + g.cnteger; // 'Integer';

exports.cInteger = cInteger;
var cintegers = cinteger + b.cs;
exports.cintegers = cintegers;
var cIntegers = cInteger + b.cs;
exports.cIntegers = cIntegers;
var cfloat = b.cf + g.cloat;
exports.cfloat = cfloat;
var cFloat = b.cF + g.cloat; // 'Float';

exports.cFloat = cFloat;
var cfloats = cfloat + b.cs;
exports.cfloats = cfloats;
var cFloats = cFloat + b.cs;
exports.cFloats = cFloats;
var clong = b.cl + g.cong;
exports.clong = clong;
var cLong = b.cL + g.cong; // 'Long';

exports.cLong = cLong;
var clongs = clong + b.cs;
exports.clongs = clongs;
var cLongs = cLong + b.cs;
exports.cLongs = cLongs;
var cshort = b.cs + g.chort;
exports.cshort = cshort;
var cShort = b.cS + g.chort; // 'Short';

exports.cShort = cShort;
var cshorts = cshort + b.cs;
exports.cshorts = cshorts;
var cShorts = cShort + b.cs;
exports.cShorts = cShorts;
var cdouble = b.cd + g.couble;
exports.cdouble = cdouble;
var cDouble = b.cD + g.couble; // 'Double';

exports.cDouble = cDouble;
var cdoubles = cdouble + b.cs;
exports.cdoubles = cdoubles;
var cDoubles = cDouble + b.cs;
exports.cDoubles = cDoubles;
var cchar = b.cch + b.car;
exports.cchar = cchar;
var cChar = b.cCh + b.car; // 'Char';

exports.cChar = cChar;
var cchars = cchar + b.cs;
exports.cchars = cchars;
var cChars = cChar + b.cs;
exports.cChars = cChars;
var cboolean = b.cb + g.coolean;
exports.cboolean = cboolean;
var cBoolean = b.cB + g.coolean;
exports.cBoolean = cBoolean;
var cbooleans = cboolean + b.cs;
exports.cbooleans = cbooleans;
var cBooleans = cBoolean + b.cs;
exports.cBooleans = cBooleans;
var cobject = b.co + g.cbject;
exports.cobject = cobject;
var cObject = b.cO + g.cbject;
exports.cObject = cObject;
var cobjects = cobject + b.cs;
exports.cobjects = cobjects;
var cObjects = cObject + b.cs; // General Use Words

exports.cObjects = cObjects;
var cword = b.cw + g.cord; // 'word';

exports.cword = cword;
var cWord = b.cW + g.cord;
exports.cWord = cWord;
var cOOPS = b.cO + g.cOPS;
exports.cOOPS = cOOPS;
var cOops = b.cO + g.cops; // 'Oops';

exports.cOops = cOops;
var coops = b.co + g.cops;
exports.coops = coops;
var cConfiguration = b.cCo + b.cnf + b.cig + b.cur + b.ca + g.ction; // 'Configura' + b.ction;

exports.cConfiguration = cConfiguration;
var cConfigurations = cConfiguration + b.cs;
exports.cConfigurations = cConfigurations;
var cempty = b.cem + b.cpt + b.cy;
exports.cempty = cempty;
var cEmpty = b.cEm + b.cpt + b.cy; // 'Empty';

exports.cEmpty = cEmpty;
var cfull = b.cf + g.cull;
exports.cfull = cfull;
var cFull = b.cF + g.cull;
exports.cFull = cFull;
var ccreate = b.cc + g.create;
exports.ccreate = ccreate;
var cCreate = b.cC + g.create; // 'Create';

exports.cCreate = cCreate;
var cSubmit = b.cSu + b.cbm + b.cit; // 'Submit';

exports.cSubmit = cSubmit;
var c_add = c1a1d + b.cd;
exports.c_add = c_add;
var cAdd = b.cAd + b.cd; // 'Add';

exports.cAdd = cAdd;
var cAdded = cAdd + b.ced;
exports.cAdded = cAdded;
var cClose = b.cCl + b.cos + b.ce; // 'Close';

exports.cClose = cClose;
var cOpen = b.cOp + b.cen; // 'Open';

exports.cOpen = cOpen;
var cUpdate = b.cUp + g.cdate; // 'Update';

exports.cUpdate = cUpdate;
var cEdit = b.cEd + b.cit; // 'Edit';

exports.cEdit = cEdit;
var cDelete = b.cD + g.celete;
exports.cDelete = cDelete;
var cdelete = b.cd + g.celete;
exports.cdelete = cdelete;
var cAll = b.cAll; // 'All';

exports.cAll = cAll;
var cAt = b.cAt; // 'At'; // Not to be confused with the b.cAt = '@'!!!

exports.cAt = cAt;
var cSelect = b.cSe + b.cle + b.cct; // 'Select';

exports.cSelect = cSelect;
var cCancel = b.cCa + b.cnc + b.cel; // 'Cancel';

exports.cCancel = cCancel;
var cConfirm = b.cCo + b.cnf + b.cir + b.cm; // 'Confirm';

exports.cConfirm = cConfirm;
var cAccount = b.cAc + b.cco + b.cun + b.ct; // 'Account';

exports.cAccount = cAccount;
var cHamburger = b.cHa + b.cmb + b.cur + b.cge + b.cr; // 'Hamburger';

exports.cHamburger = cHamburger;
var cMe = b.cM + b.ce;
exports.cMe = cMe;
var cMenu = cMe + b.cnu; // 'nu';

exports.cMenu = cMenu;
var cWith = b.cW + g.cith;
exports.cWith = cWith;
var cwith = b.cw + g.cith;
exports.cwith = cwith;
var cWithout = cWith + cout;
exports.cWithout = cWithout;
var cDetail = b.cDe + b.cta + b.cil; // 'Detail';

exports.cDetail = cDetail;
var cDetails = cDetail + b.cs;
exports.cDetails = cDetails;
var cFront = b.cFr + b.con + b.ct; // 'Front';

exports.cFront = cFront;
var cBack = b.cBa + b.cck; // 'Back';

exports.cBack = cBack;
var cLeft = b.cLe + b.cft; // 'Left';

exports.cLeft = cLeft;
var cRight = b.cRi + b.cgh + b.ct; // 'Right';

exports.cRight = cRight;
var cTo = b.cTo; // 'To';

exports.cTo = cTo;
var cTop = cTo + b.cp;
exports.cTop = cTop;
var cBottom = b.cBo + b.ctt + b.com; // 'Bottom';

exports.cBottom = cBottom;
var cBegin = b.cBe + b.cgi + b.cn; // 'Begin';

exports.cBegin = cBegin;
var cBEGIN = b.cBE + b.cGI + b.cN;
exports.cBEGIN = cBEGIN;
var cBeginning = cBegin + b.cn + g.cing;
exports.cBeginning = cBeginning;
var cEnd = b.cEn + b.cd; // 'End';

exports.cEnd = cEnd;
var cEND = b.cEN + b.cD;
exports.cEND = cEND;
var cEnding = cEnd + g.cing;
exports.cEnding = cEnding;
var cThe = b.cTh + b.ce; // 'The';

exports.cThe = cThe;
var cItem = b.cIt + b.cem; // 'Item';

exports.cItem = cItem;
var cItems = cItem + b.cs;
exports.cItems = cItems;
var cList = b.cLi + b.cst; // 'List';

exports.cList = cList;
var cLists = cList + b.cs;
exports.cLists = cLists;
var cShare = b.cS + g.chare;
exports.cShare = cShare;
var cshare = b.cs + g.chare;
exports.cshare = cshare;
var cShares = cShare + b.cs;
exports.cShares = cShares;
var cshares = cshare + b.cs;
exports.cshares = cshares;
var cShared = cShare + b.cd;
exports.cShared = cShared;
var cshared = cshare + b.cd;
exports.cshared = cshared;
var cUnShared = b.cUn + cShared;
exports.cUnShared = cUnShared;
var cUnshared = b.cUn + cshared;
exports.cUnshared = cUnshared;
var cUnshare = b.cUn + cshare;
exports.cUnshare = cUnshare;
var cUnShare = b.cUn + cShare;
exports.cUnShare = cUnShare;
var cview = b.cv + g.ciew;
exports.cview = cview;
var cView = b.cV + g.ciew; // 'View';

exports.cView = cView;
var cNew = b.cNe + b.cw; // 'New';

exports.cNew = cNew;
var cLoad = b.cLo + 'ad'; // b.cad; // 'Load'; // NOTE: Apparently 'cad' is also a reserved word.

exports.cLoad = cLoad;
var cClick = b.cC + g.click;
exports.cClick = cClick;
var cclick = b.cc + g.click;
exports.cclick = cclick;
var cPressKey = b.cP + g.cress + cKey;
exports.cPressKey = cPressKey;
var cpressKey = b.cp + g.cress + cKey;
exports.cpressKey = cpressKey;
var cexpect = b.cex + b.cpe + b.cct; // 'expect';

exports.cexpect = cexpect;
var cnavigate = b.cn + g.cavigate;
exports.cnavigate = cnavigate;
var cNavigate = b.cN + g.cavigate; // 'Navigate';

exports.cNavigate = cNavigate;
var cSave = b.cSa + b.cve; // 'Save';

exports.cSave = cSave;
var cDownload = b.cDo + b.cwn + b.clo + b.cad; // 'Download';

exports.cDownload = cDownload;
var cNegative = b.cNe + b.cga + g.ctive; // 'Negative';

exports.cNegative = cNegative;
var cPositive = b.cPo + b.csi + g.ctive;
exports.cPositive = cPositive;
var cEntire = b.cEn + b.cti + b.cre; // 'Entire';

exports.cEntire = cEntire;
var cinfo = b.cin + b.cfo;
exports.cinfo = cinfo;
var cInfo = b.cIn + b.cfo; // 'Info';

exports.cInfo = cInfo;
var cLink = b.cLi + b.cnk; // 'Link';

exports.cLink = cLink;
var cLabel = b.cLa + b.cbe + b.cl; // 'Label';

exports.cLabel = cLabel;
var cField = b.cFi + b.cel + b.cd; // 'Field';

exports.cField = cField;
var cType = b.cT + g.cype;
exports.cType = cType;
var ctype = b.ct + g.cype;
exports.ctype = ctype;
var cTypes = cType + b.cs;
exports.cTypes = cTypes;
var cValid = b.cV + g.calid;
exports.cValid = cValid;
var cvalid = b.cv + g.calid;
exports.cvalid = cvalid;
var cValidation = cValid + b.ca + g.ction;
exports.cValidation = cValidation;
var cValidate = b.cVa + b.cli + g.cdate; // 'Validate';

exports.cValidate = cValidate;
var cInvalid = b.cIn + cvalid;
exports.cInvalid = cInvalid;
var cbug = b.cbu + b.cg;
exports.cbug = cbug;
var cdebug = b.cde + cbug;
exports.cdebug = cdebug;
var cDebug = b.cDe + cbug; // 'Debug';

exports.cDebug = cDebug;
var cpage = b.cp + g.cage;
exports.cpage = cpage;
var cPage = b.cP + g.cage;
exports.cPage = cPage;
var cpages = cpage + b.cs;
exports.cpages = cpages;
var cPages = cPage + b.cs;
exports.cPages = cPages;
var cMessage = cMe + b.css + g.cage;
exports.cMessage = cMessage;
var cScript = b.cSc + b.cri + b.cpt; // 'Script';

exports.cScript = cScript;
var cScripts = cScript + b.cs;
exports.cScripts = cScripts;
var cKeyword = cKey + cword;
exports.cKeyword = cKeyword;
var ckeyword = ckey + cword;
exports.ckeyword = ckeyword;
var cKeywords = cKeyword + b.cs;
exports.cKeywords = cKeywords;
var ckeywords = ckeyword + b.cs;
exports.ckeywords = ckeywords;
var cData = b.cD + g.cata;
exports.cData = cData;
var cdata = b.cd + g.cata;
exports.cdata = cdata;
var cResults = b.cRe + b.csu + b.clt + b.cs; // 'Results';

exports.cResults = cResults;
var cwork = b.cwo + b.crk;
exports.cwork = cwork;
var cWork = b.cWo + b.crk;
exports.cWork = cWork;
var cflow = b.cfl + b.cow;
exports.cflow = cflow;
var cFlow = b.cFl + b.cow;
exports.cFlow = cFlow;
var cWorkflow = cWork + cflow; // 'Workflow';

exports.cWorkflow = cWorkflow;
var cworkflow = cwork + cflow;
exports.cworkflow = cworkflow;
var cworkflows = cworkflow + b.cs;
exports.cworkflows = cworkflows;
var cWorkflows = cWorkflow + b.cs;
exports.cWorkflows = cWorkflows;
var cTest = b.cT + g.cest;
exports.cTest = cTest;
var cTEST = b.cTE + b.cST; // 'TEST';

exports.cTEST = cTEST;
var ctest = b.ct + g.cest;
exports.ctest = ctest;
var cTests = cTest + b.cs;
exports.cTests = cTests;
var ctests = ctest + b.cs;
exports.ctests = ctests;
var cTESTS = cTEST + b.cS;
exports.cTESTS = cTESTS;
var cStatus = b.cSt + b.cat + b.cus;
exports.cStatus = cStatus;
var cTestStatus = cTest + cStatus;
exports.cTestStatus = cTestStatus;
var cTestStatusMessage = cTest + cStatus + cMessage;
exports.cTestStatusMessage = cTestStatusMessage;
var cTestWorkflow = cTest + cWorkflow;
exports.cTestWorkflow = cTestWorkflow;
var cBureau = b.cBu + b.cre + b.cau;
exports.cBureau = cBureau;
var cExhaustive = b.cEx + b.cha + b.cus + b.cti + b.cve; // 'Exhaustive';

exports.cExhaustive = cExhaustive;
var cBrowser = b.cBr + b.cow + b.cse + b.cr; // 'Browser';

exports.cBrowser = cBrowser;
var cAction = b.cAc + g.ction; // 'Action';

exports.cAction = cAction;
var cActions = cAction + b.cs;
exports.cActions = cActions;
var cAutomation = b.cAu + b.cto + b.cma + g.ction; // 'Automation';

exports.cAutomation = cAutomation;
var cnumber = b.cn + g.cumber;
exports.cnumber = cnumber;
var cNumber = b.cN + g.cumber; // 'Number';

exports.cNumber = cNumber;
var cHost = b.cHo + b.cst; // 'Host';

exports.cHost = cHost;
var cOf = b.cOf;
exports.cOf = cOf;
var cRow = b.cRo + b.cw; // 'Row';

exports.cRow = cRow;
var cRun = b.cRu + b.cn; // 'Run';

exports.cRun = cRun;
var cRows = cRow + b.cs;
exports.cRows = cRows;
var cMaster = b.cMa + b.cst + b.cer; // 'Master';

exports.cMaster = cMaster;
var cEnvironment = b.cEn + b.cvi + b.cro + b.cn + g.cment; // 'Environment';

exports.cEnvironment = cEnvironment;
var cName = b.cN + g.came;
exports.cName = cName;
var cname = b.cn + g.came;
exports.cname = cname;
var ckeywordName = ckeyword + cName;
exports.ckeywordName = ckeywordName;
var cKeywordName = cKeyword + cName;
exports.cKeywordName = cKeywordName;
var cPageScriptName = cPage + cScript + cName;
exports.cPageScriptName = cPageScriptName;
var cID = b.cID;
exports.cID = cID;
var cid = b.cid;
exports.cid = cid;
var cId = b.cId;
exports.cId = cId;
var cmail = b.cma + b.cil; // 'mail';

exports.cmail = cmail;
var cEmail = b.cE + cmail;
exports.cEmail = cEmail;
var cEmails = cEmail + b.cs;
exports.cEmails = cEmails;
var cReceive = b.cRe + b.cce + b.civ + b.ce; // 'Receive';

exports.cReceive = cReceive;
var cReceived = cReceive + b.cd;
exports.cReceived = cReceived;
var cdate = g.cdate;
exports.cdate = cdate;
var cDate = b.cD + g.cate; // 'Date';

exports.cDate = cDate;
var cTime = b.cT + g.cime; // 'Time';

exports.cTime = cTime;
var ctime = b.ct + g.cime; // 'time';

exports.ctime = ctime;
var cStamp = b.cSt + b.cam + b.cp; // 'Stamp';

exports.cStamp = cStamp;
var cmediate = g.cmed + b.ci + g.cate;
exports.cmediate = cmediate;
var cintermediate = g.cinter + cmediate;
exports.cintermediate = cintermediate;
var cIntermediate = g.cInter + cmediate; // 'Intermediate';

exports.cIntermediate = cIntermediate;
var cpath = b.cp + g.cath;
exports.cpath = cpath;
var cPath = b.cP + g.cath; // 'Path';

exports.cPath = cPath;
var cExit = b.cEx + b.cit; // 'Exit';

exports.cExit = cExit;
var cViewer = b.cVi + b.cew + b.cer; // 'Viewer';

exports.cViewer = cViewer;
var cPermission = b.cPe + b.crm + b.cis + b.csi + b.con; // 'Permission';

exports.cPermission = cPermission;
var cBug = b.cBu + b.cg; // 'Bug';

exports.cBug = cBug;
var cSet = b.cSe + b.ct; // 'Set';

exports.cSet = cSet;
var cPreview = g.cPre + cview; // 'Preview';

exports.cPreview = cPreview;
var cLimit = b.cLi + b.cmi + b.ct; // 'Limit';

exports.cLimit = cLimit;
var cGate = b.cGa + b.cte;
exports.cGate = cGate;
var cway = b.cwa + b.cy;
exports.cway = cway;
var cWay = b.cWa + b.cy;
exports.cWay = cWay;
var cGateway = cGate + cway; // 'Gateway';

exports.cGateway = cGateway;
var cProcess = g.cPro + b.cce + b.css;
exports.cProcess = cProcess;
var cProcessing = cProcess + g.cing; // 'Processing';

exports.cProcessing = cProcessing;
var cComplete = b.cCo + b.cmp + b.cl + g.cete; // 'Complete';

exports.cComplete = cComplete;
var cAnd = b.cAn + b.cd; // 'And';

exports.cAnd = cAnd;
var cand = b.can + b.cd; // 'and';

exports.cand = cand;
var cUser = b.cUs + b.cer; // 'User';

exports.cUser = cUser;
var cAccess = b.cAc + b.cce + b.css; // 'Access';

exports.cAccess = cAccess;
var cLevel = b.cLe + b.cve + b.cl; // 'Level';

exports.cLevel = cLevel;
var cget = b.cge + b.ct;
exports.cget = cget;
var cGet = b.cGe + b.ct; // 'Get';

exports.cGet = cGet;
var cPut = b.cP + b.cut;
exports.cPut = cPut;
var cput = b.cp + b.cut;
exports.cput = cput;
var cFrom = b.cFr + b.com; // 'From';

exports.cFrom = cFrom;
var creplace = b.cr + g.ceplace;
exports.creplace = creplace;
var cReplace = b.cR + g.ceplace; // 'Replace';

exports.cReplace = cReplace;
var cSpace = b.cSp + g.cace; // 'Space';

exports.cSpace = cSpace;
var cSpaces = cSpace + g.cs; // 'Spaces';

exports.cSpaces = cSpaces;
var cPlus = b.cPl + b.cus; // 'Plus';

exports.cPlus = cPlus;
var cColon = b.cCo + b.clo + b.cn; // 'Colon';

exports.cColon = cColon;
var cUnder = b.cUn + g.cder;
exports.cUnder = cUnder;
var cscore = b.cs + g.ccore;
exports.cscore = cscore;
var cScore = b.cS + g.ccore;
exports.cScore = cScore;
var cCatagory = b.cCa + b.cta + b.cgo + b.cry; // 'Catagory';

exports.cCatagory = cCatagory;
var cclean = b.cc + g.clean;
exports.cclean = cclean;
var cClean = b.cC + g.clean; // 'Clean';

exports.cClean = cClean;
var ccleaned = cclean + b.ced;
exports.ccleaned = ccleaned;
var cCleaned = cClean + b.ced;
exports.cCleaned = cCleaned;
var cCarriage = b.cCa + b.crr + b.ci + g.cage; // 'Carriage';

exports.cCarriage = cCarriage;
var cturn = b.ctu + b.crn;
exports.cturn = cturn;
var creturn = b.cre + cturn;
exports.creturn = creturn;
var cReturn = b.cRe + cturn; // 'Return';

exports.cReturn = cReturn;
var cconvert = b.cc + g.convert;
exports.cconvert = cconvert;
var cConvert = b.cC + g.convert; // 'Convert';

exports.cConvert = cConvert;
var cLow = b.cLo + b.cw;
exports.cLow = cLow;
var cLower = cLow + b.cer; // 'Lower';

exports.cLower = cLower;
var cCase = b.cC + g["case"]; // 'Case';

exports.cCase = cCase;
var cmove = b.cmo + b.cve;
exports.cmove = cmove;
var cremove = b.cre + cmove;
exports.cremove = cremove;
var cRemove = b.cRe + cmove; // 'Remove';

exports.cRemove = cRemove;
var cExtension = g.cExt + b.cen + b.cs + g.cion; // 'Extension';

exports.cExtension = cExtension;
var cdig = b.cdi + b.cg;
exports.cdig = cdig;
var cDig = b.cDi + b.cg;
exports.cDig = cDig;
var cdigit = cdig + b.cit;
exports.cdigit = cdigit;
var cDigit = cDig + b.cit; // 'Digit';

exports.cDigit = cDigit;
var clet = b.cle + b.ct;
exports.clet = clet;
var cLet = b.cLe + b.ct;
exports.cLet = cLet;
var cLetter = cLet + b.ct + b.cer; // 'Letter';

exports.cLetter = cLetter;
var cUpper = b.cUp + b.cp + b.cer; // 'Upper';

exports.cUpper = cUpper;
var cCount = b.cCo + g.cunt; // 'Count';

exports.cCount = cCount;
var cCounter = cCount + b.cer;
exports.cCounter = cCounter;
var crandom = b.cr + g.candom;
exports.crandom = crandom;
var cRandom = b.cR + g.candom; // 'Random';

exports.cRandom = cRandom;
var crandomly = crandom + b.cly;
exports.crandomly = crandomly;
var cRandomly = cRandom + b.cly;
exports.cRandomly = cRandomly;
var cgenerate = b.cg + g.cenerate;
exports.cgenerate = cgenerate;
var cGenerate = b.cG + g.cenerate; // 'Generate';

exports.cGenerate = cGenerate;
var cParent = b.cP + g.carent;
exports.cParent = cParent;
var cparent = b.cp + g.carent;
exports.cparent = cparent;
var cValue = b.cVa + b.clu + b.ce; // 'Value';

exports.cValue = cValue;
var cFind = b.cFi + b.cnd; // 'Find';

exports.cFind = cFind;
var cFindValue = cFind + cValue;
exports.cFindValue = cFindValue;
var cRange = b.cRa + b.cng + b.ce; // 'Range';

exports.cRange = cRange;
var cNumeric = b.cNu + b.cme + b.cri + b.cc; // 'Numeric';

exports.cNumeric = cNumeric;
var cNumerical = cNumeric + b.cal;
exports.cNumerical = cNumerical;
var cLength = b.cLe + b.cng + b.cth; // 'Length';

exports.cLength = cLength;
var cCode = b.cCo + b.cde; // 'Code';

exports.cCode = cCode;
var cEither = b.cEi + b.cth + b.cer; // 'Either';

exports.cEither = cEither;
var cEnabled = b.cEn + b.cab + b.cle + b.cd; // 'Enabled';

exports.cEnabled = cEnabled;
var cdetermine = b.cd + g.cetermine;
exports.cdetermine = cdetermine;
var cDetermine = b.cD + g.cetermine; // 'Determine';

exports.cDetermine = cDetermine;
var cVariable = g.cVar + g.ci + g.cable; // 'Variable';

exports.cVariable = cVariable;
var cVisibility = b.cV + g.cisibility;
exports.cVisibility = cVisibility;
var cvisibility = b.cv + g.cisibility;
exports.cvisibility = cvisibility;
var cDialog = b.cDi + b.ca + clog; // 'Dia' + clog;

exports.cDialog = cDialog;
var cLibrary = b.cLi + b.cbr + b.car + b.cy; // 'Library';

exports.cLibrary = cLibrary;
var cTable = b.cTa + b.cbl + b.ce; // 'Table';

exports.cTable = cTable;
var cEqual = b.cEq + b.cua + b.cl; // 'Equal';

exports.cEqual = cEqual;
var cEquals = cEqual + b.cs;
exports.cEquals = cEquals;
var cRaw = b.cRa + b.cw; // 'Raw';

exports.cRaw = cRaw;
var cOperation = g.cOperat + b.cion;
exports.cOperation = cOperation;
var cOperating = g.cOperat + b.cing;
exports.cOperating = cOperating;
var cSystem = b.cSy + b.cst + b.cem; // 'System';

exports.cSystem = cSystem;
var cAssignment = b.cAs + b.si + b.cgn + g.cment; // 'Assignment';

exports.cAssignment = cAssignment;
var cAbreviated = b.cAb + b.cre + b.cvi + b.cat + b.ced; // 'Abreviated';

exports.cAbreviated = cAbreviated;
var cwait = b.cw + g.cait;
exports.cwait = cwait;
var cWait = b.cW + g.cait;
exports.cWait = cWait;
var cawait = b.ca + cwait; // 'await';

exports.cawait = cawait;
var cHTML = b.cHT + b.cML;
exports.cHTML = cHTML;
var chtml = b.cht + b.cml;
exports.chtml = chtml;
var cinner = b.ci + g.cnner;
exports.cinner = cinner;
var cInner = b.cI + g.cnner;
exports.cInner = cInner;
var cOver = b.cOv + b.cer; // 'Over';

exports.cOver = cOver;
var cRide = b.cR + g.cide;
exports.cRide = cRide;
var cride = b.cr + g.cide;
exports.cride = cride;
var cOverride = cOver + cride;
exports.cOverride = cOverride;
var cActionOverride = cAction + cOverride;
exports.cActionOverride = cActionOverride;
var cLocator = b.cLo + b.cca + b.cto + b.cr; // 'Locator';

exports.cLocator = cLocator;
var cLocators = cLocator + b.cs;
exports.cLocators = cLocators;
var cLocatorLibrary = cLocator + cLibrary;
exports.cLocatorLibrary = cLocatorLibrary;
var cSelector = b.cS + g.celector;
exports.cSelector = cSelector;
var cselector = b.cs + g.celector;
exports.cselector = cselector;
var cSelectors = cSelector + b.cs;
exports.cSelectors = cSelectors;
var cIndividual = b.cIn + b.cdi + b.cvi + b.cdu + b.cal; // 'Individual';

exports.cIndividual = cIndividual;
var cIndividually = cIndividual + b.cly;
exports.cIndividually = cIndividually;
var cExist = b.cEx + b.cis + b.ct; // 'Exist';

exports.cExist = cExist;
var cExists = cExist + b.cs;
exports.cExists = cExists;
var cAsynch = b.cAs + g.cynch;
exports.cAsynch = cAsynch;
var cSynch = b.cS + b.cynch;
exports.cSynch = cSynch;
var cSingular = b.cSi + b.cng + b.cul + b.car; // 'Singular';

exports.cSingular = cSingular;
var cParallel = b.cPa + b.cra + b.cll + b.cel; // 'Parallel';

exports.cParallel = cParallel;
var cMulti = b.cMu + b.clt + b.ci; // 'Multi';

exports.cMulti = cMulti;
var cUnified = b.cUn + b.cif + b.cie + b.cd; // 'Unified';

exports.cUnified = cUnified;
var cDefault = b.cDe + b.cfa + b.cul + b.ct; // 'Default';

exports.cDefault = cDefault;
var csingle = b.cs + g.cingle;
exports.csingle = csingle;
var cSingle = b.cS + g.cingle; // 'Single';

exports.cSingle = cSingle;
var cQuote = b.cQu + b.cot + b.ce; // 'Quote';

exports.cQuote = cQuote;
var cswap = b.cs + g.cwap;
exports.cswap = cswap;
var cSwap = b.cS + g.cwap; // 'Swap';

exports.cSwap = cSwap;
var cAfter = b.cAf + b.ct + b.cer; // 'After';

exports.cAfter = cAfter;
var cOnce = b.cOn + b.cce;
exports.cOnce = cOnce;
var cload = b.clo + 'ad'; // b.cad; // 'load'; // NOTE: Apparently 'cad' is also a reserved word.

exports.cload = cload;
var cUpload = b.cUp + cload;
exports.cUpload = cUpload;
var cStyle = b.cSt + b.cyl + b.ce; // 'Style';

exports.cStyle = cStyle;
var cAssert = b.cAs + b.cse + b.crt; // 'Assert';

exports.cAssert = cAssert;
var cLess = b.cL + g.cess;
exports.cLess = cLess;
var cless = b.cl + g.cess;
exports.cless = cless;
var cGreat = b.cGr + g.ceat;
exports.cGreat = cGreat;
var cgreat = b.cgr + g.ceat;
exports.cgreat = cgreat;
var cGreater = cGreat + b.cer;
exports.cGreater = cGreater;
var cgreater = cgreat + b.cer;
exports.cgreater = cgreater;
var cthen = b.ct + g.chen;
exports.cthen = cthen;
var cThen = b.cT + g.chen;
exports.cThen = cThen;
var cthan = b.ct + g.chan;
exports.cthan = cthan;
var cThan = b.cT + g.chan;
exports.cThan = cThan;
var cAssertExists = cAssert + cExists;
exports.cAssertExists = cAssertExists;
var cAssertNotExists = cAssert + b.cNot + cExists;
exports.cAssertNotExists = cAssertNotExists;
var cAssertValueEqual = cAssert + cValue + cEqual;
exports.cAssertValueEqual = cAssertValueEqual;
var cAssertValueNotEqual = cAssert + cValue + b.cNot + cEqual;
exports.cAssertValueNotEqual = cAssertValueNotEqual;
var cAssertValueLessThan = cAssert + cValue + cLess + cThan;
exports.cAssertValueLessThan = cAssertValueLessThan;
var cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan;
exports.cAssertValueGreaterThan = cAssertValueGreaterThan;
var cAssertion = cAssert + b.cion;
exports.cAssertion = cAssertion;
var cAssertionType = cAssertion + cType;
exports.cAssertionType = cAssertionType;
var cUploadStyle = cUpload + cStyle;
exports.cUploadStyle = cUploadStyle;
var cAssertionStyle = cAssertion + cStyle;
exports.cAssertionStyle = cAssertionStyle;
var cby = b.cby;
exports.cby = cby;
var cBy = b.cBy;
exports.cBy = cBy;
var cBY = b.cBY;
exports.cBY = cBY;
var cOr = b.cOr;
exports.cOr = cOr;
var cor = b.cor;
exports.cor = cor;
var cOR = b.cOR;
exports.cOR = cOR;
var cMix = b.cMi + b.cx; // 'Mix';

exports.cMix = cMix;
var cMixed = cMix + b.ced;
exports.cMixed = cMixed;
var cAlpha = b.cA + g.clpha;
exports.cAlpha = cAlpha;
var calpha = b.ca + g.clpha;
exports.calpha = calpha;
var cbetic = b.cbe + b.cti + b.cc; // 'betic';

exports.cbetic = cbetic;
var cAlphabetic = cAlpha + cbetic;
exports.cAlphabetic = cAlphabetic;
var ctext = b.ct + g.cext;
exports.ctext = ctext;
var cText = b.cT + g.cext;
exports.cText = cText;
var cTEXT = b.cTE + b.cXT; // 'TEXT';

exports.cTEXT = cTEXT;
var cContext = g.cCon + ctext;
exports.cContext = cContext;
var cinput = b.cin + cput;
exports.cinput = cinput;
var cInput = b.cIn + cput;
exports.cInput = cInput;
var cDescription = b.cDe + b.csc + b.cri + b.cp + g.ction; // 'Descrip' + b.ction;

exports.cDescription = cDescription;
var cConstant = g.cCon + b.cst + b.can + b.ct; // 'stant';

exports.cConstant = cConstant;
var cIteration = b.cIt + b.cer + b.ca + g.ction; // 'Itera' + b.ction;

exports.cIteration = cIteration;
var cProject = b.cP + g.croject;
exports.cProject = cProject;
var cproject = b.cp + g.croject;
exports.cproject = cproject;
var cProjects = cProject + b.cs;
exports.cProjects = cProjects;
var cAdvance = b.cAd + b.cva + b.cnc + b.ce; // 'Advance';

exports.cAdvance = cAdvance;
var cAdvanced = cAdvance + b.cd;
exports.cAdvanced = cAdvanced;
var cCreation = b.cCr + b.cea + g.ction; // 'Crea' + b.ction;

exports.cCreation = cCreation;
var ctestData = ctest + cData;
exports.ctestData = ctestData;
var cpageData = cpage + cData;
exports.cpageData = cpageData;
var cPageData = cPage + cData;
exports.cPageData = cPageData;
var cTestName = cTest + cName;
exports.cTestName = cTestName;
var cPageName = cPage + cName;
exports.cPageName = cPageName;
var cWebkey = b.cWe + b.cb + ckey; // 'Web' + ckey;

exports.cWebkey = cWebkey;
var cFile = b.cF + g.cile;
exports.cFile = cFile;
var cFiles = cFile + b.cs;
exports.cFiles = cFiles;
var cfile = b.cf + b.cile;
exports.cfile = cfile;
var cfiles = cfile + b.cs;
exports.cfiles = cfiles;
var cfold = b.cfo + b.cld;
exports.cfold = cfold;
var cFold = b.cFo + b.cld;
exports.cFold = cFold;
var cfolder = cfold + b.cer;
exports.cfolder = cfolder;
var cFolder = cFold + b.cer;
exports.cFolder = cFolder;
var cfolders = cfolder + b.cs;
exports.cfolders = cfolders;
var cFolders = cFolder + b.cs;
exports.cFolders = cFolders;
var ccafe = b.ca + b.cfe; // 'cafe';

exports.ccafe = ccafe;
var ccert = b.cce + b.crt; // 'cert';

exports.ccert = ccert;
var csrc = b.csr + b.cc;
exports.csrc = csrc;
var cbin = b.cbi + b.cn;
exports.cbin = cbin;
var csource = b.cs + g.cource;
exports.csource = csource;
var cSource = b.cS + g.cource;
exports.cSource = cSource;
var cresource = b.cre + csource;
exports.cresource = cresource;
var cResource = b.cRe + csource;
exports.cResource = cResource;
var cresources = cresource + b.cs; // 'resource' + b.cs;

exports.cresources = cresources;
var cResources = cResource + b.cs;
exports.cResources = cResources;
var cClass = b.cC + g.c_lass;
exports.cClass = cClass;
var cclass = b.cc + g.c_lass;
exports.cclass = cclass;
var cIngestion = b.cIn + b.cge + b.cs + g.ction; // 'Inges' + b.ction;

exports.cIngestion = cIngestion;
var cis = b.cis;
exports.cis = cis;
var cIs = b.cIs;
exports.cIs = cIs;
var cIS = b.cIS;
exports.cIS = cIS;
var ccheck = b.cc + g.check;
exports.ccheck = ccheck;
var cCheck = b.cC + g.check;
exports.cCheck = cCheck;
var cchecked = ccheck + b.ced;
exports.cchecked = cchecked;
var cElement = b.cEl + b.ce + g.cment; // 'Element';

exports.cElement = cElement;
var cElementName = cElement + cName;
exports.cElementName = cElementName;
var cAllow = cAll + b.cow;
exports.cAllow = cAllow;
var cAllowable = cAllow + g.cable;
exports.cAllowable = cAllowable;
var cHome = b.cHo + b.cme; // 'Home';

exports.cHome = cHome;
var cPublic = b.cPu + b.cbl + b.cic; // 'Public';

exports.cPublic = cPublic;
var cSpecial = b.cSp + b.cec + b.cia + b.cal; // 'Special';

exports.cSpecial = cSpecial;
var cCharacter = cChar + b.cac + g.cter; // 'Character';

exports.cCharacter = cCharacter;
var cCharacters = cCharacter + b.cs;
exports.cCharacters = cCharacters;
var cEdge = b.cEd + b.cge; // 'Edge';

exports.cEdge = cEdge;
var cWorks = cWork + b.cs;
exports.cWorks = cWorks;
var cSolid = b.cS + g.colid;
exports.cSolid = cSolid;
var csolid = b.cs + g.colid;
exports.csolid = csolid;
var cBinary = b.cBi + b.cna + b.cry; // 'Binary';

exports.cBinary = cBinary;
var cTimeout = cTime + cout;
exports.cTimeout = cTimeout;
var cTimeOut = cTime + cOut;
exports.cTimeOut = cTimeOut;
var cDwell = b.cDw + b.cel + b.cl; // 'Dwell';

exports.cDwell = cDwell;
var cExecute = b.cEx + b.cec + b.cut + b.ce; // 'Execute';

exports.cExecute = cExecute;
var cSibling = b.cS + g.cibling;
exports.cSibling = cSibling;
var csibling = b.cs + g.cibling;
exports.csibling = csibling;
var cchild = b.cc + g.child;
exports.cchild = cchild;
var cChild = b.cC + g.child;
exports.cChild = cChild;
var cFilter = b.cF + g.cilter;
exports.cFilter = cFilter;
var cfilter = b.cf + g.cilter;
exports.cfilter = cfilter;
var cAttributes = b.cA + g.cttributes;
exports.cAttributes = cAttributes;
var cattributes = b.ca + g.cttributes;
exports.cattributes = cattributes;
var cDisabled = b.cD + g.cisabled;
exports.cDisabled = cDisabled;
var cdisabled = b.cd + g.cisabled;
exports.cdisabled = cdisabled;
var cMan = b.cMa + b.cn;
exports.cMan = cMan;
var cman = b.cma + b.cn;
exports.cman = cman;
var cWoman = b.cWo + cman;
exports.cWoman = cWoman;
var cwoman = b.cwo + cman;
exports.cwoman = cwoman;
var ccell = g.cel + b.cl;
exports.ccell = ccell;
var cCell = g.Cel + b.cl;
exports.cCell = cCell;
var cHung = b.cH + g.cung;
exports.cHung = cHung;
var chung = b.ch + g.cung;
exports.chung = chung;
var cport = b.cpo + b.crt;
exports.cport = cport;
var cPort = b.cPo + b.crt;
exports.cPort = cPort;
var cConstructor = b.cCo + b.cns + b.ctr + b.cu + g.cctor;
exports.cConstructor = cConstructor;
var cwarn = b.cw + g.carn;
exports.cwarn = cwarn;
var cWarn = b.cW + g.carn;
exports.cWarn = cWarn;
var cwarning = cwarn + g.cing; //b.cw + g.carning;

exports.cwarning = cwarning;
var cWarning = cWarn + g.cing; //b.cW + g.carning;

exports.cWarning = cWarning;
var cwarnings = cwarning + b.cs;
exports.cwarnings = cwarnings;
var cWarnings = cWarning + b.cs;
exports.cWarnings = cWarnings;
var cerror = b.ce + g.crror;
exports.cerror = cerror;
var cError = b.cE + g.crror;
exports.cError = cError;
var cDash = b.cDa + b.csh;
exports.cDash = cDash;
var cboard = b.cbo + g.card;
exports.cboard = cboard;
var cDashboard = cDash + cboard;
exports.cDashboard = cDashboard;
var ccompose = b.co + b.cmp + g.cose;
exports.ccompose = ccompose;
var cdecompose = b.cde + ccompose;
exports.cdecompose = cdecompose;
var cDecompose = b.cDe + ccompose;
exports.cDecompose = cDecompose;
var carray = b.car + g.cray;
exports.carray = carray;
var cArray = b.cAr + g.cray;
exports.cArray = cArray;
var ccamel = b.ca + g.cmel;
exports.ccamel = ccamel;
var cCamel = b.Ca + g.cmel;
exports.cCamel = cCamel;
var cround = b.cr + g.cound;
exports.cround = cround;
var cRound = b.cR + g.cound;
exports.cRound = cRound;
var crounded = cround + b.ced;
exports.crounded = crounded;
var cRounded = cRound + b.ced;
exports.cRounded = cRounded;
var cquart = b.cqu + g.cart;
exports.cquart = cquart;
var cQuart = b.cQu + g.cart;
exports.cQuart = cQuart;
var cquarter = cquart + b.cer;
exports.cquarter = cquarter;
var cQuarter = cQuart + b.cer;
exports.cQuarter = cQuarter;
var cquaternion = b.cqu + b.cat + b.cer + g.cnion;
exports.cquaternion = cquaternion;
var cQuaternion = b.cQu + b.cat + b.cer + g.cnion;
exports.cQuaternion = cQuaternion;
var cnormal = b.cn + g.cormal;
exports.cnormal = cnormal;
var cNormal = b.cN + g.cormal;
exports.cNormal = cNormal;
var cnormalize = cnormal + g.cize;
exports.cnormalize = cnormalize;
var cNormalize = cNormal + g.cize;
exports.cNormalize = cNormalize;
var cdegree = b.cd + g.cegree;
exports.cdegree = cdegree;
var cDegree = b.cD + g.cegree;
exports.cDegree = cDegree;
var cdegrees = cdegree + b.cs;
exports.cdegrees = cdegrees;
var cDegrees = cDegree + b.cs;
exports.cDegrees = cDegrees;
var cangle = b.can + g.cgle;
exports.cangle = cangle;
var cAngle = b.cAn + g.cgle;
exports.cAngle = cAngle;
var ctrap = b.ct + g.crap;
exports.ctrap = ctrap;
var cTrap = b.cT + g.crap;
exports.cTrap = cTrap;
var cFraction = g.cFra + g.cction;
exports.cFraction = cFraction;
var cvector = b.cve + g.cctor;
exports.cvector = cvector;
var cVector = b.cVe + g.cctor;
exports.cVector = cVector;
var cform = b.cfo + b.crm;
exports.cform = cform;
var ctransform = g.ctrans + cform;
exports.ctransform = ctransform;
var cTransform = g.cTrans + cform;
exports.cTransform = cTransform;
var cpoint = b.cpo + g.cint;
exports.cpoint = cpoint;
var cPoint = b.cPo + g.cint;
exports.cPoint = cPoint;
var clocation = g.cloc + g.cation;
exports.clocation = clocation;
var cLocation = g.cLoc + g.cation;
exports.cLocation = cLocation;
var cSort = b.cS + g.cort;
exports.cSort = cSort;
var csort = b.cs + g.cort;
exports.csort = csort;
var csimplify = g.csim + g.cplify;
exports.csimplify = csimplify;
var cSimplify = g.cSim + g.cplify;
exports.cSimplify = cSimplify;
var cconsolidate = g.ccon + g.csol + b.ci + cdate;
exports.cconsolidate = cconsolidate;
var cConsolidate = g.cCon + g.csol + b.ci + cdate;
exports.cConsolidate = cConsolidate;
var cConsolidated = cConsolidate + b.cd;
exports.cConsolidated = cConsolidated;
var ccompare = g.ccomp + g.care;
exports.ccompare = ccompare;
var cCompare = g.cComp + g.care;
exports.cCompare = cCompare;
var ccontain = g.ccon + g.ctain;
exports.ccontain = ccontain;
var cContain = g.cCon + g.ctain;
exports.cContain = cContain;
var ccontains = ccontain + b.cs;
exports.ccontains = ccontains;
var cContains = cContain + b.cs;
exports.cContains = cContains;
var cvideo = b.cv + g.cideo;
exports.cvideo = cvideo;
var cVideo = b.cV + g.cideo;
exports.cVideo = cVideo;
var cProduct = g.cPro + g.cduct;
exports.cProduct = cProduct;
var caggregate = b.ca + g.cggregate;
exports.caggregate = caggregate;
var cAggregate = b.cA + g.cggregate;
exports.cAggregate = cAggregate;
var cDifference = g.cDiff + b.cer + g.cence;
exports.cDifference = cDifference;
var cbet = b.cbe + b.ct;
exports.cbet = cbet;
var cBet = b.cBe + b.ct;
exports.cBet = cBet;
var cbetween = cbet + g.cween;
exports.cbetween = cbetween;
var cBetween = cBet + g.cween;
exports.cBetween = cBetween;
var ccertain = b.cce + b.crt + g.cain;
exports.ccertain = ccertain;
var cascertain = b.cas + ccertain;
exports.cascertain = cascertain;
var cAscertain = b.cAs + ccertain;
exports.cAscertain = cAscertain;
var cmatch = b.cma + g.ctch;
exports.cmatch = cmatch;
var cMatch = b.cMa + g.ctch;
exports.cMatch = cMatch;
var cmatching = cmatch + g.cing;
exports.cmatching = cmatching;
var cMatching = cMatch + g.cing;
exports.cMatching = cMatching;
var cdoes = b.cdo + b.ces;
exports.cdoes = cdoes;
var cDoes = b.cDo + b.ces;
exports.cDoes = cDoes;
var capplication = g.capp + g.clica + g.ction;
exports.capplication = capplication;
var cApplication = g.cApp + g.clica + g.ction;
exports.cApplication = cApplication;
var cdeploy = b.cd + b.cep + g.cloy;
exports.cdeploy = cdeploy;
var cDeploy = b.cD + b.cep + g.cloy;
exports.cDeploy = cDeploy;
var clease = b.cle + g.c_ase;
exports.clease = clease;
var crelease = b.cre + clease;
exports.crelease = crelease;
var cRelease = b.cRe + clease;
exports.cRelease = cRelease;
var croot = b.cr + g.coot;
exports.croot = croot;
var cRoot = b.cR + g.coot;
exports.cRoot = cRoot;
var cparse = b.cp + g.carse;
exports.cparse = cparse;
var cParse = b.cP + g.carse;
exports.cParse = cParse;
var cforward = b.cf + b.cor + g.cward;
exports.cforward = cforward;
var cForward = b.cF + b.cor + g.cward;
exports.cForward = cForward;
var cslash = b.cs + g.clash;
exports.cslash = cslash;
var cSlash = b.cS + g.clash;
exports.cSlash = cSlash;
var cmeta = b.cm + g.ceta;
exports.cmeta = cmeta;
var cMeta = b.cM + g.ceta;
exports.cMeta = cMeta;
var cMetaData = cMeta + cData;
exports.cMetaData = cMetaData;
var cbusiness = b.cb + g.cusiness;
exports.cbusiness = cbusiness;
var cBusiness = b.cB + g.cusiness;
exports.cBusiness = cBusiness;
var crule = b.cr + g.cule;
exports.crule = crule;
var cRule = b.cR + g.cule;
exports.cRule = cRule;
var cfresh = b.cfr + g.cesh;
exports.cfresh = cfresh;
var crefresh = b.cre + cfresh;
exports.crefresh = crefresh;
var cRefresh = b.cRe + cfresh;
exports.cRefresh = cRefresh;
var ceval = b.ce + g.cval;
exports.ceval = ceval;
var cEval = b.cE + g.cval;
exports.cEval = cEval;
var creload = b.cre + cload;
exports.creload = creload;
var cReload = b.cRe + cload;
exports.cReload = cReload;
var cdemo = b.cd + g.cemo;
exports.cdemo = cdemo;
var cDemo = b.cD + g.cemo;
exports.cDemo = cDemo;
var ccommon = b.cc + g.common;
exports.ccommon = ccommon;
var cCommon = b.cC + g.common;
exports.cCommon = cCommon;
var cfunction = b.cf + b.cun + g.cction;
exports.cfunction = cfunction;
var cFunction = b.cF + b.cun + g.cction;
exports.cFunction = cFunction;
var cfunctions = cfunction + b.cs;
exports.cfunctions = cfunctions;
var cFunctions = cFunction + b.cs;
exports.cFunctions = cFunctions;
var cmultiple = g.cmulti + g.cple;
exports.cmultiple = cmultiple;
var cMultiple = g.cMulti + g.cple;
exports.cMultiple = cMultiple;
var cJournal = b.cJo + b.cur + g.cnal;
exports.cJournal = cJournal;
var cExecution = g.cExe + b.ccu + g.ction;
exports.cExecution = cExecution;
var cpercent = g.cper + g.ccent;
exports.cpercent = cpercent;
var cPercent = g.cPer + g.ccent;
exports.cPercent = cPercent;
var cbasic = b.cb + g.casic;
exports.cbasic = cbasic;
var cBasic = b.cB + g.casic;
exports.cBasic = cBasic;
var cevent = b.ce + g.cvent;
exports.cevent = cevent;
var cEvent = b.cE + g.cvent;
exports.cEvent = cEvent;
var cevents = cevent + b.cs;
exports.cevents = cevents;
var cEvents = cEvent + b.cs;
exports.cEvents = cEvents;
var cface = b.cfa + b.cce;
exports.cface = cface;
var cFace = b.cFa + b.cce;
exports.cFace = cFace;
var cargument = g.carg + b.cu + g.cment;
exports.cargument = cargument;
var cArgument = g.cArg + b.cu + g.cment;
exports.cArgument = cArgument;
var cdrive = b.cd + g.crive;
exports.cdrive = cdrive;
var cDrive = b.cD + g.crive;
exports.cDrive = cDrive;
var cdriven = cdrive + b.cn;
exports.cdriven = cdriven;
var cDriven = cDrive + b.cn;
exports.cDriven = cDriven;
var cinterface = g.cinter + cface;
exports.cinterface = cinterface;
var cInterface = g.cInter + cface;
exports.cInterface = cInterface;
var cfig = b.cf + b.cig;
exports.cfig = cfig;
var cFig = b.cF + b.cig;
exports.cFig = cFig;
var cfiglet = cfig + clet;
exports.cfiglet = cfiglet;
var cFiglet = cFig + clet;
exports.cFiglet = cFiglet;
var cfont = b.cf + g.cont;
exports.cfont = cfont;
var cFont = b.cF + g.cont; // Shapes

exports.cFont = cFont;
var ccircle = g.ccir + g.ccle;
exports.ccircle = ccircle;
var cCircle = g.cCir + g.ccle;
exports.cCircle = cCircle;
var coval = b.cov + b.cal;
exports.coval = coval;
var cOval = b.cOv + b.cal;
exports.cOval = cOval;
var csquare = b.cs + g.cquare;
exports.csquare = csquare;
var cSquare = b.cS + g.cquare;
exports.cSquare = cSquare;
var ctriangle = g.ctri + cangle;
exports.ctriangle = ctriangle;
var cTriangle = g.cTri + cangle;
exports.cTriangle = cTriangle;
var crectangle = g.crect + cangle;
exports.crectangle = crectangle;
var cRectangle = g.cRect + cangle;
exports.cRectangle = cRectangle;
var coctagon = g.coct + b.ca + g.cgon;
exports.coctagon = coctagon;
var cOctagon = g.cOct + b.ca + g.cgon;
exports.cOctagon = cOctagon;
var chexagon = g.chex + b.ca + g.cgon;
exports.chexagon = chexagon;
var cHexagon = g.cHex + b.ca + g.cgon;
exports.cHexagon = cHexagon;
var cheptagon = g.chep + b.ca + g.cgon;
exports.cheptagon = cheptagon;
var cHeptagon = g.cHep + b.ca + g.cgon;
exports.cHeptagon = cHeptagon;
var cnonagon = g.cnon + b.ca + g.cgon;
exports.cnonagon = cnonagon;
var cNonagon = g.cNon + b.ca + g.cgon;
exports.cNonagon = cNonagon;
var ctrapezoid = ctrap + b.ce + g.czoid;
exports.ctrapezoid = ctrapezoid;
var cTrapezoid = cTrap + b.ce + g.czoid;
exports.cTrapezoid = cTrapezoid;
var ccube = b.ccu + b.cbe;
exports.ccube = ccube;
var cCube = b.cCu + b.cbe; // This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes
// Compound System Words

exports.cCube = cCube;
var cWithText = cWith + cText;
exports.cWithText = cWithText;
var cwithText = cwith + cText;
exports.cwithText = cwithText;
var cDebugTest = cDebug + cTest;
exports.cDebugTest = cDebugTest;
var cDebugPage = cDebug + cPage;
exports.cDebugPage = cDebugPage;
var cDebugTestExhaustive = cDebugTest + cExhaustive;
exports.cDebugTestExhaustive = cDebugTestExhaustive;
var cDebugTestData = cDebugTest + cData;
exports.cDebugTestData = cDebugTestData;
var cDebugPageScripts = cDebugPage + cScripts;
exports.cDebugPageScripts = cDebugPageScripts;
var cDebugPageData = cDebugPage + cData;
exports.cDebugPageData = cDebugPageData;
var cDebugKeywords = cDebug + cKeywords;
exports.cDebugKeywords = cDebugKeywords;
var cLogBrowserActions = cLog + cBrowser + cActions;
exports.cLogBrowserActions = cLogBrowserActions;
var cJournalBrowserActions = cJournal + cBrowser + cActions;
exports.cJournalBrowserActions = cJournalBrowserActions;
var cDebugBrowserActions = cDebug + cBrowser + cActions;
exports.cDebugBrowserActions = cDebugBrowserActions;
var cDebugSelectors = cDebug + cSelectors;
exports.cDebugSelectors = cDebugSelectors;
var cDebugFunctions = cDebug + cFunctions;
exports.cDebugFunctions = cDebugFunctions;
var cDebugFiles = cDebug + cFiles;
exports.cDebugFiles = cDebugFiles;
var cTestAutomation = cTest + cAutomation;
exports.cTestAutomation = cTestAutomation;
var cNumberOfRows = cNumber + cOf + cRows;
exports.cNumberOfRows = cNumberOfRows;
var cMasterRowNumber = cMaster + cRow + cNumber;
exports.cMasterRowNumber = cMasterRowNumber;
var cEnvironmentRow = cEnvironment + cRow;
exports.cEnvironmentRow = cEnvironmentRow;
var cEnvironmentRowNumber = cEnvironmentRow + cNumber;
exports.cEnvironmentRowNumber = cEnvironmentRowNumber;
var cPageScript = cPage + cScript;
exports.cPageScript = cPageScript;
var cIntermediatePath = cIntermediate + cPath;
exports.cIntermediatePath = cIntermediatePath;
var cTimeStamp = cTime + cStamp;
exports.cTimeStamp = cTimeStamp;
var cPageScriptTimeStamp = cPageScript + cTimeStamp;
exports.cPageScriptTimeStamp = cPageScriptTimeStamp;
var cDateTimeStamp = cDate + cTimeStamp;
exports.cDateTimeStamp = cDateTimeStamp;
var cScriptDateStamp = cScript + cDate + cStamp;
exports.cScriptDateStamp = cScriptDateStamp;
var cScriptTimeStamp = cScript + cTimeStamp;
exports.cScriptTimeStamp = cScriptTimeStamp;
var cKeywordTimeStamp = cKeyword + cTimeStamp;
exports.cKeywordTimeStamp = cKeywordTimeStamp;
var cTestTimeStamp = cTest + cTimeStamp;
exports.cTestTimeStamp = cTestTimeStamp;
var cScriptDateTimeStamp = cScript + cDateTimeStamp;
exports.cScriptDateTimeStamp = cScriptDateTimeStamp;
var cBeginScriptTimeStamp = cBegin + cScriptTimeStamp;
exports.cBeginScriptTimeStamp = cBeginScriptTimeStamp;
var cEndScriptTimeStamp = cEnd + cScriptTimeStamp;
exports.cEndScriptTimeStamp = cEndScriptTimeStamp;
var cBeginTestTimeStamp = cBegin + cTestTimeStamp;
exports.cBeginTestTimeStamp = cBeginTestTimeStamp;
var cEndTestTimeStamp = cEnd + cTestTimeStamp;
exports.cEndTestTimeStamp = cEndTestTimeStamp;
var cBeginPageScriptTimeStamp = cBegin + cPageScriptTimeStamp;
exports.cBeginPageScriptTimeStamp = cBeginPageScriptTimeStamp;
var cEndPageScriptTimeStamp = cEnd + cPageScriptTimeStamp;
exports.cEndPageScriptTimeStamp = cEndPageScriptTimeStamp;
var cBeginKeywordTimeStamp = cBegin + cKeywordTimeStamp;
exports.cBeginKeywordTimeStamp = cBeginKeywordTimeStamp;
var cEndKeywordTimeStamp = cEnd + cKeywordTimeStamp;
exports.cEndKeywordTimeStamp = cEndKeywordTimeStamp;
var cRunTime = cRun + cTime;
exports.cRunTime = cRunTime;
var cRuntime = cRun + ctime;
exports.cRuntime = cRuntime;
var cBrowserName = cBrowser + cName;
exports.cBrowserName = cBrowserName;
var cHostName = cHost + cName;
exports.cHostName = cHostName;
var cTestRunID = cTest + cRun + cID;
exports.cTestRunID = cTestRunID;
var cfilesLists = cfiles + cLists;
exports.cfilesLists = cfilesLists;
var cFileTypes = cFile + cTypes;
exports.cFileTypes = cFileTypes;
var cFileName = cFile + cName;
exports.cFileName = cFileName;
var cFilename = cFile + cname;
exports.cFilename = cFilename;
var cfilename = cfile + cname;
exports.cfilename = cfilename;
var cFileNames = cFileName + b.cs;
exports.cFileNames = cFileNames;
var cFilenames = cFilename + b.cs;
exports.cFilenames = cFilenames;
var cfilenames = cfilename + b.cs;
exports.cfilenames = cfilenames;
var cPreValidateFileName = b.cPre + cValidate + cFile + cName;
exports.cPreValidateFileName = cPreValidateFileName;
var cAsynchSingular = cAsynch + cSingular;
exports.cAsynchSingular = cAsynchSingular;
var cSynchSingular = cSynch + cSingular;
exports.cSynchSingular = cSynchSingular;
var cParallelMultiUnified = cParallel + cMulti + cUnified;
exports.cParallelMultiUnified = cParallelMultiUnified;
var cAllowableCharacters = cAllowable + cCharacters;
exports.cAllowableCharacters = cAllowableCharacters;
var cSpecialCharacters = cSpecial + cCharacters;
exports.cSpecialCharacters = cSpecialCharacters;
var cTimeoutOverride = cTimeout + cOverride;
exports.cTimeoutOverride = cTimeoutOverride;
var cDwellTime = cDwell + cTime;
exports.cDwellTime = cDwellTime;
var cLogFilePathAndName = cLog + cFile + cPath + cAnd + cName;
exports.cLogFilePathAndName = cLogFilePathAndName;
var cDataLogFilePathAndName = cData + cLog + cFile + cPath + cAnd + cName;
exports.cDataLogFilePathAndName = cDataLogFilePathAndName;
var cExecutionJournalFilePathAndName = cExecution + cJournal + cFile + cPath + cAnd + cName;
exports.cExecutionJournalFilePathAndName = cExecutionJournalFilePathAndName;
var cResultsLogFilePathAndName = cResults + cLog + cFile + cPath + cAnd + cName;
exports.cResultsLogFilePathAndName = cResultsLogFilePathAndName;
var cTestDataPath = cTest + cData + cPath;
exports.cTestDataPath = cTestDataPath;
var cLogFileEnabled = cLog + cFile + cEnabled;
exports.cLogFileEnabled = cLogFileEnabled;
var cFileCounter = cFile + cCounter;
exports.cFileCounter = cFileCounter;
var cDeltaT = g.cDelta + b.cT;
exports.cDeltaT = cDeltaT;
var cVisibilityCheck = cVisibility + cCheck;
exports.cVisibilityCheck = cVisibilityCheck;
var cvisibilityCheck = cvisibility + cCheck;
exports.cvisibilityCheck = cvisibilityCheck;
var cOperatingSystem = cOperating + cSystem;
exports.cOperatingSystem = cOperatingSystem;
var cInnerText = cInner + cText;
exports.cInnerText = cInnerText;
var cinnerText = cinner + cText;
exports.cinnerText = cinnerText;
var cInnerHTML = cInner + cHTML;
exports.cInnerHTML = cInnerHTML;
var cinnerHTML = cInner + cHTML;
exports.cinnerHTML = cinnerHTML;
var cTestData = cTest + cData;
exports.cTestData = cTestData;
var cProcessingTimeout = cProcessing + cTimeout;
exports.cProcessingTimeout = cProcessingTimeout;
var cIngestionCompleteDwellTime = cIngestion + cComplete + cDwellTime;
exports.cIngestionCompleteDwellTime = cIngestionCompleteDwellTime;
var cRowNumber = cRow + cNumber;
exports.cRowNumber = cRowNumber;
var cUsername = cUser + cname;
exports.cUsername = cUsername;
var cPassword = b.cPa + b.css + b.cwo + b.crd; // 'Password';

exports.cPassword = cPassword;
var cProjectName = cProject + cName;
exports.cProjectName = cProjectName;
var cProjectDescription = cProject + cDescription;
exports.cProjectDescription = cProjectDescription;
var cTestDataFileName = cTest + cData + cFileName;
exports.cTestDataFileName = cTestDataFileName;
var cShareEmail = cShare + cEmail;
exports.cShareEmail = cShareEmail;
var cAccessLevel = cAccess + cLevel;
exports.cAccessLevel = cAccessLevel;
var cFileNumber = cFile + cNumber;
exports.cFileNumber = cFileNumber;
var cConfigurationName = cConfiguration + cName;
exports.cConfigurationName = cConfigurationName;
var cConfigurationElement = cConfiguration + cElement;
exports.cConfigurationElement = cConfigurationElement;
var cConfigurationElements = cConfigurationElement + b.cs;
exports.cConfigurationElements = cConfigurationElements;
var cVersion = b.cVe + b.crs + b.cio + b.cn; // 'Version';

exports.cVersion = cVersion;
var cControl = b.cCo + b.cnt + b.cro + b.cl; // 'Control';

exports.cControl = cControl;
var cVersionControl = cVersion + cControl;
exports.cVersionControl = cVersionControl;
var cPerformance = b.cPe + b.crf + b.cor + b.cma + b.cnc + b.ce; // 'Performance';

exports.cPerformance = cPerformance;
var cScriptRunTime = cScript + cRuntime;
exports.cScriptRunTime = cScriptRunTime;
var cTestRunTime = cTest + cRuntime;
exports.cTestRunTime = cTestRunTime;
var cTypeText = cType + cText;
exports.cTypeText = cTypeText;
var ctypeText = ctype + cText;
exports.ctypeText = ctypeText;
var cAbreviatedSelectors = cAbreviated + cSelectors;
exports.cAbreviatedSelectors = cAbreviatedSelectors;
var cAbreviatedSelectorsInLogs = cAbreviatedSelectors + b.cIn + cLogs;
exports.cAbreviatedSelectorsInLogs = cAbreviatedSelectorsInLogs;
var cselectorTimeout = cselector + cTimeout;
exports.cselectorTimeout = cselectorTimeout;
var cchildElementCount = cchild + cElement + cCount;
exports.cchildElementCount = cchildElementCount;
var cUnderscore = cUnder + cscore; // 'Underscore'

exports.cUnderscore = cUnderscore;
var cTestBureau = cTest + cBureau;
exports.cTestBureau = cTestBureau;
var caddWithText = c_add + cWith + cText;
exports.caddWithText = caddWithText;
var caddTimeout = c_add + cTimeout;
exports.caddTimeout = caddTimeout;
var caddParent = c_add + cParent;
exports.caddParent = caddParent;
var caddFindValue = c_add + cFind + cValue;
exports.caddFindValue = caddFindValue;
var caddNth = c_add + cNth;
exports.caddNth = caddNth;
var caddSibling = c_add + cSibling;
exports.caddSibling = caddSibling;
var caddFilter = c_add + cFilter;
exports.caddFilter = caddFilter;
var cgenerateRandom = cGenerate + cRandom;
exports.cgenerateRandom = cgenerateRandom;
var crandomlyGenerate = cRandom + cGenerate;
exports.crandomlyGenerate = crandomlyGenerate;
var cMixedCase = cMixed + cCase;
exports.cMixedCase = cMixedCase;
var cUpperCase = cUpper + cCase;
exports.cUpperCase = cUpperCase;
var cLowerCase = cLower + cCase;
exports.cLowerCase = cLowerCase;
var cByLength = cBy + cLength;
exports.cByLength = cByLength;
var cSpecialCharacter = cSpecial + cCharacter;
exports.cSpecialCharacter = cSpecialCharacter;
var cWithSpecialCharacters = cWith + cSpecialCharacters;
exports.cWithSpecialCharacters = cWithSpecialCharacters;
var cTextByLength = cText + cByLength;
exports.cTextByLength = cTextByLength;
var cTextWithSpecialCharacters = cText + cWithSpecialCharacters;
exports.cTextWithSpecialCharacters = cTextWithSpecialCharacters;
var cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength;
exports.cTextWithSpecialCharactersByLength = cTextWithSpecialCharactersByLength;
var cAlphaNumeric = cAlpha + cNumeric;
exports.cAlphaNumeric = cAlphaNumeric;
var cAlphaNumericCode = cAlphaNumeric + cCode;
exports.cAlphaNumericCode = cAlphaNumericCode;
var cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength;
exports.cAlphaNumericCodeByLength = cAlphaNumericCodeByLength;
var cNumericCode = cNumeric + cCode;
exports.cNumericCode = cNumericCode;
var cNumericCodeByLength = cNumericCode + cByLength;
exports.cNumericCodeByLength = cNumericCodeByLength;
var cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters;
exports.cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCodeWithSpecialCharacters;
var cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength;
exports.cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharactersByLength;
var cSpecialCharacterCodeByLength = cSpecialCharacter + cCode + cByLength;
exports.cSpecialCharacterCodeByLength = cSpecialCharacterCodeByLength;
var cValidEmail = cValid + cEmail;
exports.cValidEmail = cValidEmail;
var cvalidEmail = cvalid + cEmail;
exports.cvalidEmail = cvalidEmail;
var cInvalidEmail = b.cIn + cvalidEmail;
exports.cInvalidEmail = cInvalidEmail;
var cLetterOr = cLetter + b.cOr;
exports.cLetterOr = cLetterOr;
var cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter;
exports.cLetterOrSpecialCharacter = cLetterOrSpecialCharacter;
var cLetterOrNumberOrSpecialCharacter = cLetterOr + cNumber + cOr + cSpecialCharacter;
exports.cLetterOrNumberOrSpecialCharacter = cLetterOrNumberOrSpecialCharacter;
var cAlphaNumericCharacter = cAlphaNumeric + cCharacter;
exports.cAlphaNumericCharacter = cAlphaNumericCharacter;
var cNumericCharacter = cNumeric + cCharacter;
exports.cNumericCharacter = cNumericCharacter;
var cNumberInRange = cNumber + b.cIn + cRange;
exports.cNumberInRange = cNumberInRange;
var cBooleanValue = cBoolean + cValue;
exports.cBooleanValue = cBooleanValue;
var cAlphabeticCharacter = cAlphabetic + cCharacter;
exports.cAlphabeticCharacter = cAlphabeticCharacter;
var cCarriageReturn = cCarriage + cReturn;
exports.cCarriageReturn = cCarriageReturn;
var cDashboardLogs = cDashboard + cLogs;
exports.cDashboardLogs = cDashboardLogs;
var cVideoLogs = cVideo + cLogs;
exports.cVideoLogs = cVideoLogs;
var cForwardSlash = cForward + cSlash;
exports.cForwardSlash = cForwardSlash;
var cBackSlash = cBack + cSlash;
exports.cBackSlash = cBackSlash;
var cPage_Keywords = cPage + b.cUnderscore + cKeywords;
exports.cPage_Keywords = cPage_Keywords;
var cnavigateTo = cnavigate + b.cTo;
exports.cnavigateTo = cnavigateTo;
var cNavigateTo = cNavigate + b.cTo;
exports.cNavigateTo = cNavigateTo;
var cBrowserRefresh = cBrowser + cRefresh;
exports.cBrowserRefresh = cBrowserRefresh;
var cSpaceIsColonSpace = b.cSpace + b.cIs + b.cColon + b.cSpace;
exports.cSpaceIsColonSpace = cSpaceIsColonSpace;
var cdeployApplication = cdeploy + cApplication;
exports.cdeployApplication = cdeployApplication;
var creleaseApplication = crelease + cApplication; // Logging Constants

exports.creleaseApplication = creleaseApplication;
var cBEGIN_Function = cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + cFunction;
exports.cBEGIN_Function = cBEGIN_Function;
var cEND_Function = cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + cFunction;
exports.cEND_Function = cEND_Function;
var cinputDataIs = cinput + cData + cSpaceIsColonSpace;
exports.cinputDataIs = cinputDataIs;
var cinputMetaDataIs = cinput + cMetaData + cSpaceIsColonSpace;
exports.cinputMetaDataIs = cinputMetaDataIs;
var creturnDataIs = creturn + cData + cSpaceIsColonSpace;
exports.creturnDataIs = creturnDataIs;
var cLogBasicSystemEvents = cLog + cBasic + cSystem + cEvents;
exports.cLogBasicSystemEvents = cLogBasicSystemEvents;
var cLogWarnings = cLog + cWarnings; // File Types

exports.cLogWarnings = cLogWarnings;
var cCatia = b.cCa + b.cti + b.ca; // 'Catia';

exports.cCatia = cCatia;
var cDocument = g.cDoc + b.cu + g.cment; // 'Document';

exports.cDocument = cDocument;
var cDocuments = cDocument + b.cs;
exports.cDocuments = cDocuments;
var cDraft = b.cDr + g.caft; // 'Draft';

exports.cDraft = cDraft;
var cDWG = b.cDW + b.cG; // 'DWG';

exports.cDWG = cDWG;
var cHoops = b.cH + coops; // 'Hoops';

exports.cHoops = cHoops;
var cHOOPS = b.cH + cOOPS; // 'HOOPS';

exports.cHOOPS = cHOOPS;
var cImage = b.cIm + g.cage; // 'Image';

exports.cImage = cImage;
var cImages = cImage + b.cs;
exports.cImages = cImages;
var cInventor = g.cInv + b.cen + g.ctor; // 'Inventor';

exports.cInventor = cInventor;
var cNeutral = b.cNe + b.cut + g.cral; // 'Neutral';

exports.cNeutral = cNeutral;
var cNX = b.cNX; // 'NX';

exports.cNX = cNX;
var cParasolid = b.cP + g.cara + csolid; // 'Para' + csolid;

exports.cParasolid = cParasolid;
var cProE = g.cPro + b.cE; // 'ProE';

exports.cProE = cProE;
var cRhino = b.cRh + g.cino; // 'Rhino';

exports.cRhino = cRhino;
var cSolidEdge = cSolid + cEdge;
exports.cSolidEdge = cSolidEdge;
var cSolidWorks = cSolid + cWorks;
exports.cSolidWorks = cSolidWorks;
var cVRML = b.cVR + b.cML; // 'VRML';

exports.cVRML = cVRML;
var cVrml = b.cVr + b.cml;
exports.cVrml = cVrml;
var cvrml = b.cvr + b.cml; // Countires
// TODO: Need to come back and generalize thse with constants re-use.

exports.cvrml = cvrml;
var cAfghanistan = 'Afghanistan';
exports.cAfghanistan = cAfghanistan;
var cAlbania = 'Albania';
exports.cAlbania = cAlbania;
var cAlgeria = 'Algeria';
exports.cAlgeria = cAlgeria;
var cAndorra = 'Andorra';
exports.cAndorra = cAndorra;
var cAngola = 'Angola';
exports.cAngola = cAngola;
var cAntigua = 'Antigua';
exports.cAntigua = cAntigua;
var cArgentina = 'Argentina';
exports.cArgentina = cArgentina;
var cArmenia = 'Armenia';
exports.cArmenia = cArmenia;
var cAustralia = 'Australia';
exports.cAustralia = cAustralia;
var cAustria = 'Austria';
exports.cAustria = cAustria;
var cAzerbaijan = 'Axerbaijan';
exports.cAzerbaijan = cAzerbaijan;
var cBahamas = 'Bahamas';
exports.cBahamas = cBahamas;
var cBahrain = 'Bahrain';
exports.cBahrain = cBahrain;
var cBangladesh = 'Bangladesh';
exports.cBangladesh = cBangladesh;
var cBarbados = 'Barbados';
exports.cBarbados = cBarbados;
var cBarbuda = 'Barbuda';
exports.cBarbuda = cBarbuda;
var cBelarus = 'Belarus';
exports.cBelarus = cBelarus;
var cBelgium = 'Belgium';
exports.cBelgium = cBelgium;
var cBelize = 'Belize';
exports.cBelize = cBelize;
var cBenin = 'Benin';
exports.cBenin = cBenin;
var cBhutan = 'Bhutan';
exports.cBhutan = cBhutan;
var cBolivia = 'Bolivia';
exports.cBolivia = cBolivia;
var cBosnia = 'Bosnia';
exports.cBosnia = cBosnia;
var cBotswana = 'Botswana';
exports.cBotswana = cBotswana;
var cBrazil = 'Brazil';
exports.cBrazil = cBrazil;
var cBrunei = 'Brunei';
exports.cBrunei = cBrunei;
var cBulgaria = 'Bulgaria';
exports.cBulgaria = cBulgaria;
var cBurkinaFaso = 'BurkinaFaso';
exports.cBurkinaFaso = cBurkinaFaso;
var cBurundi = 'Burundi';
exports.cBurundi = cBurundi;
var cCotedlvoire = 'Cote dlvoire';
exports.cCotedlvoire = cCotedlvoire;
var cCaboVerde = 'Cabo Verde';
exports.cCaboVerde = cCaboVerde;
var cCambodia = 'Cambodia';
exports.cCambodia = cCambodia;
var cCameroon = 'Cameroon';
exports.cCameroon = cCameroon;
var cCanada = 'Canada';
exports.cCanada = cCanada;
var cCentralAfricanRepublic = 'Central African Republic';
exports.cCentralAfricanRepublic = cCentralAfricanRepublic;
var cChad = 'Chad';
exports.cChad = cChad;
var cChile = 'Chile';
exports.cChile = cChile;
var cChina = 'China';
exports.cChina = cChina;
var cColombia = 'Colombia';
exports.cColombia = cColombia;
var cComoros = 'Comoros';
exports.cComoros = cComoros;
var cCongo = 'Congo';
exports.cCongo = cCongo;
var cCostaRica = 'Costa Rica';
exports.cCostaRica = cCostaRica;
var cCroatia = 'Croatia';
exports.cCroatia = cCroatia;
var cCuba = 'Cuba';
exports.cCuba = cCuba;
var cCyprus = 'Cyprus';
exports.cCyprus = cCyprus;
var cCzechia = 'Czechia';
exports.cCzechia = cCzechia;
var cDemocraticRepublicOfTheCongo = 'Democratic Republic of the Congo';
exports.cDemocraticRepublicOfTheCongo = cDemocraticRepublicOfTheCongo;
var cDenmark = 'Denmark';
exports.cDenmark = cDenmark;
var cDjibouti = 'Djibouti';
exports.cDjibouti = cDjibouti;
var cDominica = 'Dominica';
exports.cDominica = cDominica;
var cDominicanRepublic = 'Dominican Republic';
exports.cDominicanRepublic = cDominicanRepublic;
var cEcuador = 'Ecuador';
exports.cEcuador = cEcuador;
var cEgypt = 'Egypt';
exports.cEgypt = cEgypt;
var cElSalvador = 'El Salvador';
exports.cElSalvador = cElSalvador;
var cEquatorialGuinea = 'Equatorial Guinea';
exports.cEquatorialGuinea = cEquatorialGuinea;
var cEritrea = 'Eritrea';
exports.cEritrea = cEritrea;
var cEstonia = 'Estonia';
exports.cEstonia = cEstonia;
var cEswatini = 'Eswatini'; // Formerly Swaziland

exports.cEswatini = cEswatini;
var cEthiopia = 'Ethiopia';
exports.cEthiopia = cEthiopia;
var cFiji = 'Fiji';
exports.cFiji = cFiji;
var cFinland = 'Finland';
exports.cFinland = cFinland;
var cFrance = 'France';
exports.cFrance = cFrance;
var cGabon = 'Gabon';
exports.cGabon = cGabon;
var cGambia = 'Gambia';
exports.cGambia = cGambia;
var cGeorgia = 'Georgia';
exports.cGeorgia = cGeorgia;
var cGerman = b.cGe + b.cr + cman; // 'German';

exports.cGerman = cGerman;
var cGermany = cGerman + b.cy; // 'Germany';

exports.cGermany = cGermany;
var cGhana = 'Ghana';
exports.cGhana = cGhana;
var cGreece = 'Greece';
exports.cGreece = cGreece;
var cGrenada = 'Grenada';
exports.cGrenada = cGrenada;
var cGuatemala = 'Guatemala';
exports.cGuatemala = cGuatemala;
var cGuinea = 'Guinea';
exports.cGuinea = cGuinea;
var cGuineaBissau = 'Guinea-Bissau';
exports.cGuineaBissau = cGuineaBissau;
var cGuyana = 'Guyana';
exports.cGuyana = cGuyana;
var cHaiti = 'Haiti';
exports.cHaiti = cHaiti;
var cHerzegovina = 'Herzegovina';
exports.cHerzegovina = cHerzegovina;
var cHolySee = 'Holy See';
exports.cHolySee = cHolySee;
var cHonduras = 'Honduras';
exports.cHonduras = cHonduras;
var cHungary = cHung + g.cary; // 'Hungary';

exports.cHungary = cHungary;
var cIceland = 'Iceland';
exports.cIceland = cIceland;
var cIndia = 'India';
exports.cIndia = cIndia;
var cIndonesia = 'Indonesia';
exports.cIndonesia = cIndonesia;
var cIran = 'Iran';
exports.cIran = cIran;
var cIraq = 'Iraq';
exports.cIraq = cIraq;
var cIreland = 'Ireland';
exports.cIreland = cIreland;
var cIsrael = 'Israel';
exports.cIsrael = cIsrael;
var cItaly = 'Italy';
exports.cItaly = cItaly;
var cJamaica = 'Jamaica';
exports.cJamaica = cJamaica;
var cJapan = 'Japan';
exports.cJapan = cJapan;
var cJordan = 'Jordan';
exports.cJordan = cJordan;
var cKazakhstan = 'Kazakhstan';
exports.cKazakhstan = cKazakhstan;
var cKenya = 'Kenya';
exports.cKenya = cKenya;
var cKiribati = 'Kiribati';
exports.cKiribati = cKiribati;
var cKuwait = 'Kuwait';
exports.cKuwait = cKuwait;
var cKyrgyzstan = 'Kyrgyzstan';
exports.cKyrgyzstan = cKyrgyzstan;
var cLaos = 'Laos';
exports.cLaos = cLaos;
var cLatvia = 'Latvia';
exports.cLatvia = cLatvia;
var cLebanon = 'Lebanon';
exports.cLebanon = cLebanon;
var cLesotho = 'Lesotho';
exports.cLesotho = cLesotho;
var cLiberia = 'Liberia';
exports.cLiberia = cLiberia;
var cLibya = 'Libya';
exports.cLibya = cLibya;
var cLiechtenstein = 'Liechtenstein';
exports.cLiechtenstein = cLiechtenstein;
var cLithuania = 'Lithuania';
exports.cLithuania = cLithuania;
var cLuxembourg = 'Luxembourg';
exports.cLuxembourg = cLuxembourg;
var cMadagascar = 'Madagascar';
exports.cMadagascar = cMadagascar;
var cMalawi = 'Malawi';
exports.cMalawi = cMalawi;
var cMalaysia = 'Malaysia';
exports.cMalaysia = cMalaysia;
var cMaldives = 'Maldives';
exports.cMaldives = cMaldives;
var cMali = 'Mali';
exports.cMali = cMali;
var cMalta = 'Malta';
exports.cMalta = cMalta;
var cMarshallIslands = 'Marshall Islands';
exports.cMarshallIslands = cMarshallIslands;
var cMauritania = 'Mauritania';
exports.cMauritania = cMauritania;
var cMauritius = 'Mauritius';
exports.cMauritius = cMauritius;
var cMexico = 'Mexico';
exports.cMexico = cMexico;
var cMicronesia = 'Micronesia';
exports.cMicronesia = cMicronesia;
var cMoldova = 'Moldova';
exports.cMoldova = cMoldova;
var cMonaco = 'Monaco';
exports.cMonaco = cMonaco;
var cMongolia = 'Mongolia';
exports.cMongolia = cMongolia;
var cMontenegro = 'Montenegro';
exports.cMontenegro = cMontenegro;
var cMorocco = 'Morocco';
exports.cMorocco = cMorocco;
var cMozambique = 'Mozambique';
exports.cMozambique = cMozambique;
var cMyanmar = 'Myanmar';
exports.cMyanmar = cMyanmar;
var cNamibia = 'Namibia';
exports.cNamibia = cNamibia;
var cNauru = 'Nauru';
exports.cNauru = cNauru;
var cNepal = 'Nepal';
exports.cNepal = cNepal;
var cNetherlands = 'Netherlands';
exports.cNetherlands = cNetherlands;
var cNewZealand = 'New Zealand';
exports.cNewZealand = cNewZealand;
var cNevis = 'Nevis';
exports.cNevis = cNevis;
var cNicaragua = 'Nicaragua';
exports.cNicaragua = cNicaragua;
var cNiger = 'Niger';
exports.cNiger = cNiger;
var cNigeria = 'Nigeria';
exports.cNigeria = cNigeria;
var cNorthKorea = 'North Korea';
exports.cNorthKorea = cNorthKorea;
var cNorthMacedonia = 'North Macedonia';
exports.cNorthMacedonia = cNorthMacedonia;
var cNorway = 'Norway';
exports.cNorway = cNorway;
var cOman = 'Oman';
exports.cOman = cOman;
var cPakistan = 'Pakistan';
exports.cPakistan = cPakistan;
var cPalau = 'Palau';
exports.cPalau = cPalau;
var cPalestine = 'Palestine';
exports.cPalestine = cPalestine;
var cPanama = 'Panama';
exports.cPanama = cPanama;
var cPapuaNewGuinea = 'Papua New Guinea';
exports.cPapuaNewGuinea = cPapuaNewGuinea;
var cParaguay = 'Paraguay';
exports.cParaguay = cParaguay;
var cPeru = 'Peru';
exports.cPeru = cPeru;
var cPhilippines = 'Philippines';
exports.cPhilippines = cPhilippines;
var cPoland = 'Poland';
exports.cPoland = cPoland;
var cPortugal = 'Portugal';
exports.cPortugal = cPortugal;
var cPrincipe = 'Principe';
exports.cPrincipe = cPrincipe;
var cQatar = 'Qatar';
exports.cQatar = cQatar;
var cRomania = 'Romania';
exports.cRomania = cRomania;
var cRussia = 'Russia';
exports.cRussia = cRussia;
var cRwanda = 'Rwanda';
exports.cRwanda = cRwanda;
var cSaintKitts = 'Saint Kitts';
exports.cSaintKitts = cSaintKitts;
var cSaintLucia = 'Saint Lucia';
exports.cSaintLucia = cSaintLucia;
var cSaintVincent = 'Saint Vincent';
exports.cSaintVincent = cSaintVincent;
var cSomoa = 'Somoa';
exports.cSomoa = cSomoa;
var cSanMarino = 'San Marino';
exports.cSanMarino = cSanMarino;
var cSaoTome = 'Sao Tome';
exports.cSaoTome = cSaoTome;
var cSaudiArabia = 'Saudi Arabia';
exports.cSaudiArabia = cSaudiArabia;
var cSenegal = 'Senegal';
exports.cSenegal = cSenegal;
var cSerbia = 'Serbia';
exports.cSerbia = cSerbia;
var cSeychelles = 'Seychelles';
exports.cSeychelles = cSeychelles;
var cSierraLeone = 'Sierra Leone';
exports.cSierraLeone = cSierraLeone;
var cSingapore = 'Singapore';
exports.cSingapore = cSingapore;
var cSlovakia = 'Slovakia';
exports.cSlovakia = cSlovakia;
var cSlovenia = 'Slovenia';
exports.cSlovenia = cSlovenia;
var cSolomonIslands = 'Solomon Islands';
exports.cSolomonIslands = cSolomonIslands;
var cSomalia = 'Somalia';
exports.cSomalia = cSomalia;
var cSouthAfrica = 'South Africa';
exports.cSouthAfrica = cSouthAfrica;
var cSouthKorea = 'South Korea';
exports.cSouthKorea = cSouthKorea;
var cSouthSudan = 'South Sudan';
exports.cSouthSudan = cSouthSudan;
var cSpain = 'Spain';
exports.cSpain = cSpain;
var cSriLanka = 'Sri Lanka';
exports.cSriLanka = cSriLanka;
var cSudan = 'Sudan';
exports.cSudan = cSudan;
var cSuriname = 'Suriname';
exports.cSuriname = cSuriname;
var cSweden = 'Sweden';
exports.cSweden = cSweden;
var cSwitzerland = 'Switzerland';
exports.cSwitzerland = cSwitzerland;
var cSyria = 'Syria';
exports.cSyria = cSyria;
var cTajikistan = 'Tajikistan';
exports.cTajikistan = cTajikistan;
var cTanzania = 'Tanzania';
exports.cTanzania = cTanzania;
var cThailand = 'Thailand';
exports.cThailand = cThailand;
var cTimorLeste = 'Timor-Leste';
exports.cTimorLeste = cTimorLeste;
var cTogo = 'Togo';
exports.cTogo = cTogo;
var cTonga = 'Tonga';
exports.cTonga = cTonga;
var cTrinidadAndTabago = 'Trinidad and Tabago';
exports.cTrinidadAndTabago = cTrinidadAndTabago;
var cTunisia = 'Tunisia';
exports.cTunisia = cTunisia;
var cTurkey = 'Turkey';
exports.cTurkey = cTurkey;
var cTurkmenistan = 'Turkmenistan';
exports.cTurkmenistan = cTurkmenistan;
var cTuvalu = 'Tuvalu';
exports.cTuvalu = cTuvalu;
var cUganda = 'Uganda';
exports.cUganda = cUganda;
var cUkraine = 'Ukraine';
exports.cUkraine = cUkraine;
var cUnitedArabEmirates = 'United Arab Emirates';
exports.cUnitedArabEmirates = cUnitedArabEmirates;
var cUnitedKingdom = 'United Kingdom';
exports.cUnitedKingdom = cUnitedKingdom;
var cUnitedStatesOfAmerica = 'United States of America';
exports.cUnitedStatesOfAmerica = cUnitedStatesOfAmerica;
var cUruguay = 'Uruguay';
exports.cUruguay = cUruguay;
var cUzbekistan = 'Uzbekistan';
exports.cUzbekistan = cUzbekistan;
var cVanuatu = 'Vanuatu';
exports.cVanuatu = cVanuatu;
var cVenezuela = 'Venezuela';
exports.cVenezuela = cVenezuela;
var cVietnam = 'Vietnam';
exports.cVietnam = cVietnam;
var cYemen = 'Yemen';
exports.cYemen = cYemen;
var cZambia = 'Zambia';
exports.cZambia = cZambia;
var cZimbabwe = 'Zimbabwe'; // Languages

exports.cZimbabwe = cZimbabwe;
var cSimplified = b.cSi + b.cmp + b.cli + b.cfi + b.ced; // 'Simplifi' + b.ced;

exports.cSimplified = cSimplified;
var cTraditional = b.cTr + b.cad + b.ci + g.ction + b.cal; // 'Traditional';

exports.cTraditional = cTraditional;
var cChinese = g.cChi + b.cn + g.cese; // 'Chinese';

exports.cChinese = cChinese;
var cChineseSimplified = cChinese + cSimplified;
exports.cChineseSimplified = cChineseSimplified;
var cChineseTraditional = cChinese + cTraditional;
exports.cChineseTraditional = cChineseTraditional;
var cCzech = b.cCz + b.ce + b.cch; // 'Czech';

exports.cCzech = cCzech;
var cEnglish = b.cEn + b.cgl + g.cish; // 'English';

exports.cEnglish = cEnglish;
var cFrench = b.cFr + b.cen + b.cch; // 'French';
// export const cGerman = b.cGe + b.cr + cman; // 'German'; // Defined above in the countries section

exports.cFrench = cFrench;
var cHungarian = cHung + b.car + g.cian; // 'Hungarian';

exports.cHungarian = cHungarian;
var cItalian = b.cIt + b.cal + g.cian; // 'Italian';

exports.cItalian = cItalian;
var cJapanese = cJapan + g.cese; // 'Japanese';

exports.cJapanese = cJapanese;
var cKorean = b.cKo + b.cre + b.can; // 'Korean';

exports.cKorean = cKorean;
var cMiscellaneous = g.cMis + ccell + b.can + g.ceous; // 'Miscellaneous';

exports.cMiscellaneous = cMiscellaneous;
var cPolish = b.cPo + b.cl + g.cish; // 'Polish';

exports.cPolish = cPolish;
var cPortuguese = cPort + b.cug + b.cu + g.cese; // 'Portuguese';

exports.cPortuguese = cPortuguese;
var cRussian = b.cRu + b.css + g.cian; // 'Russian';

exports.cRussian = cRussian;
var cSpanish = b.cSp + b.can + g.cish; // 'Spanish';
// UI Element Types

exports.cSpanish = cSpanish;
var cButton = b.cBu + b.ctt + b.con; // 'Button';
// Environment Variables

exports.cButton = cButton;
var cQA = b.cQA;
exports.cQA = cQA;
var cDEV = b.cDE + b.cV;
exports.cDEV = cDEV;
var cPROD = g.cPRO + b.cD; // 'PROD';

exports.cPROD = cPROD;
var cProd = g.cPro + b.cd; // 'Prod';

exports.cProd = cProd;
var cPre = g.cPre;
exports.cPre = cPre;
var cPRE = g.cPRE;
exports.cPRE = cPRE;
var cPreProd = cPre + cProd;
exports.cPreProd = cPreProd;
var cPREPROD = cPRE + cPROD; // Key Combinations

exports.cPREPROD = cPREPROD;
var cctrl_a = g.cctrl + b.cPlus + b.ca;
exports.cctrl_a = cctrl_a;
var cctrl_b = g.cctrl + b.cPlus + b.cb;
exports.cctrl_b = cctrl_b;
var cctrl_c = g.cctrl + b.cPlus + b.cc;
exports.cctrl_c = cctrl_c;
var cctrl_d = g.cctrl + b.cPlus + b.cd;
exports.cctrl_d = cctrl_d;
var cctrl_e = g.cctrl + b.cPlus + b.ce;
exports.cctrl_e = cctrl_e;
var cctrl_f = g.cctrl + b.cPlus + b.cf;
exports.cctrl_f = cctrl_f;
var cctrl_g = g.cctrl + b.cPlus + b.cg;
exports.cctrl_g = cctrl_g;
var cctrl_h = g.cctrl + b.cPlus + b.ch;
exports.cctrl_h = cctrl_h;
var cctrl_i = g.cctrl + b.cPlus + b.ci;
exports.cctrl_i = cctrl_i;
var cctrl_j = g.cctrl + b.cPlus + b.cj;
exports.cctrl_j = cctrl_j;
var cctrl_k = g.cctrl + b.cPlus + b.ck;
exports.cctrl_k = cctrl_k;
var cctrl_l = g.cctrl + b.cPlus + b.cl;
exports.cctrl_l = cctrl_l;
var cctrl_m = g.cctrl + b.cPlus + b.cm;
exports.cctrl_m = cctrl_m;
var cctrl_n = g.cctrl + b.cPlus + b.cn;
exports.cctrl_n = cctrl_n;
var cctrl_o = g.cctrl + b.cPlus + b.co;
exports.cctrl_o = cctrl_o;
var cctrl_p = g.cctrl + b.cPlus + b.cp;
exports.cctrl_p = cctrl_p;
var cctrl_q = g.cctrl + b.cPlus + b.cq;
exports.cctrl_q = cctrl_q;
var cctrl_r = g.cctrl + b.cPlus + b.cr;
exports.cctrl_r = cctrl_r;
var cctrl_s = g.cctrl + b.cPlus + b.cs;
exports.cctrl_s = cctrl_s;
var cctrl_t = g.cctrl + b.cPlus + b.ct;
exports.cctrl_t = cctrl_t;
var cctrl_u = g.cctrl + b.cPlus + b.cu;
exports.cctrl_u = cctrl_u;
var cctrl_v = g.cctrl + b.cPlus + b.cv;
exports.cctrl_v = cctrl_v;
var cctrl_w = g.cctrl + b.cPlus + b.cw;
exports.cctrl_w = cctrl_w;
var cctrl_x = g.cctrl + b.cPlus + b.cx;
exports.cctrl_x = cctrl_x;
var cctrl_y = g.cctrl + b.cPlus + b.cy;
exports.cctrl_y = cctrl_y;
var cctrl_z = g.cctrl + b.cPlus + b.cz;
exports.cctrl_z = cctrl_z;
var cApplicationName = cApplication + cName;
exports.cApplicationName = cApplicationName;
var cApplicationRootPath = cApplication + cRoot + cPath;
exports.cApplicationRootPath = cApplicationRootPath;
var cApplicationCleanedRootPath = cApplication + cCleaned + cRoot + cPath;
exports.cApplicationCleanedRootPath = cApplicationCleanedRootPath;
var cConfigurationPath = cConfiguration + cPath;
exports.cConfigurationPath = cConfigurationPath;
var cApplicationVersionNumber = cApplication + cVersion + cNumber;
exports.cApplicationVersionNumber = cApplicationVersionNumber;
var cDataPath = cData + cPath;
exports.cDataPath = cDataPath;
var cCtempPath = b.cc + b.cColon + b.cForwardSlash + b.ctemp + b.cForwardSlash;
exports.cCtempPath = cCtempPath;
var cPageDataPath = cPage + cDataPath;
exports.cPageDataPath = cPageDataPath;
var cWorkflowDataPath = cWorkflow + cDataPath;
exports.cWorkflowDataPath = cWorkflowDataPath;
var cKeywordsDataPath = cKeywords + cDataPath;
exports.cKeywordsDataPath = cKeywordsDataPath;
var cLocatorsDataPath = cLocators + cDataPath;
exports.cLocatorsDataPath = cLocatorsDataPath;
var cArgumentDrivenInterface = cArgument + cDriven + cInterface;
exports.cArgumentDrivenInterface = cArgumentDrivenInterface;
var cFigletFont = cFiglet + cFont; // Test Time Tracking

exports.cFigletFont = cFigletFont;
var cBeginDateTimeStamp = cBegin + cDateTimeStamp;
exports.cBeginDateTimeStamp = cBeginDateTimeStamp;
var cEndDateTimeStamp = cEnd + cDateTimeStamp;
exports.cEndDateTimeStamp = cEndDateTimeStamp;
var cItemsIndividuallySynch = cItems + cIndividually + cSynch;
exports.cItemsIndividuallySynch = cItemsIndividuallySynch;
var cTimeStampVariableName = cTimeStamp + cVariable + cName;
exports.cTimeStampVariableName = cTimeStampVariableName;
var cBeginTimeStampVariableName = cBegin + cTimeStampVariableName;
exports.cBeginTimeStampVariableName = cBeginTimeStampVariableName;
var cEndTimeStampVariableName = cEnd + cTimeStampVariableName; // Business Rules
// ********************************
// StringParsing rules in order
// ********************************

exports.cEndTimeStampVariableName = cEndTimeStampVariableName;
var cstringToBoolean = cstring + cTo + cBoolean;
exports.cstringToBoolean = cstringToBoolean;
var cstringToDataType = cstring + cTo + cData + cType;
exports.cstringToDataType = cstringToDataType;
var cdetermineObjectDataType = cdetermine + cObject + cData + cType;
exports.cdetermineObjectDataType = cdetermineObjectDataType;
var cisBoolean = cis + cBoolean;
exports.cisBoolean = cisBoolean;
var cisInteger = cis + cInteger;
exports.cisInteger = cisInteger;
var cisFloat = cis + cFloat;
exports.cisFloat = cisFloat;
var cisString = cis + cString;
exports.cisString = cisString;
var csingleQuoteSwapAfterEquals = csingle + cQuote + cSwap + cAfter + cEquals;
exports.csingleQuoteSwapAfterEquals = csingleQuoteSwapAfterEquals;
var cswapForwardSlashToBackSlash = cswap + cForwardSlash + b.cTo + cBackSlash;
exports.cswapForwardSlashToBackSlash = cswapForwardSlashToBackSlash;
var cswapBackSlashToForwardSlash = cswap + cBackSlash + b.cTo + cForwardSlash;
exports.cswapBackSlashToForwardSlash = cswapBackSlashToForwardSlash;
var cswapDoubleForwardSlashToSingleForwardSlash = cswap + cDouble + cForwardSlash + b.cTo + cSingle + cForwardSlash;
exports.cswapDoubleForwardSlashToSingleForwardSlash = cswapDoubleForwardSlashToSingleForwardSlash;
var cswapDoubleBackSlashToSingleBackSlash = cswap + cDouble + cBackSlash + b.cTo + cSingle + cBackSlash;
exports.cswapDoubleBackSlashToSingleBackSlash = cswapDoubleBackSlashToSingleBackSlash;
var cgetUserNameFromEmail = cget + cUser + cName + cFrom + cEmail;
exports.cgetUserNameFromEmail = cgetUserNameFromEmail;
var creplaceSpacesWithPlus = creplace + cSpaces + cWith + cPlus;
exports.creplaceSpacesWithPlus = creplaceSpacesWithPlus;
var creplaceColonWithUnderscore = creplace + cColon + cWith + cUnderscore;
exports.creplaceColonWithUnderscore = creplaceColonWithUnderscore;
var creplaceCharacterWithCharacter = creplace + cCharacter + cWith + cCharacter;
exports.creplaceCharacterWithCharacter = creplaceCharacterWithCharacter;
var ccleanCarriageReturnFromString = cclean + cCarriageReturn + cFrom + cString;
exports.ccleanCarriageReturnFromString = ccleanCarriageReturnFromString;
var cconvertStringToLowerCase = cconvert + cString + cTo + cLower + cCase;
exports.cconvertStringToLowerCase = cconvertStringToLowerCase;
var cconvertStringToUpperCase = cconvert + cString + cTo + cUpper + cCase;
exports.cconvertStringToUpperCase = cconvertStringToUpperCase;
var cgetFileNameFromPath = cget + cFileName + cFrom + cPath;
exports.cgetFileNameFromPath = cgetFileNameFromPath;
var cremoveFileExtensionFromFileName = cremove + cFile + cExtension + cFrom + cFileName;
exports.cremoveFileExtensionFromFileName = cremoveFileExtensionFromFileName;
var cgetValueFromAssignmentOperationString = cget + cValue + cFrom + cAssignment + cOperation + cString;
exports.cgetValueFromAssignmentOperationString = cgetValueFromAssignmentOperationString;
var caggregateNumericalDifferenceBetweenTwoStrings = caggregate + cNumerical + cDifference + cBetween + g.cTwo + cStrings;
exports.caggregateNumericalDifferenceBetweenTwoStrings = caggregateNumericalDifferenceBetweenTwoStrings;
var cconvertCamelCaseStringToArray = cconvert + cCamel + cCase + cString + b.cTo + cArray;
exports.cconvertCamelCaseStringToArray = cconvertCamelCaseStringToArray;
var cconvertArrayToCamelCaseString = cconvert + cArray + b.cTo + cCamel + cCase + cString;
exports.cconvertArrayToCamelCaseString = cconvertArrayToCamelCaseString;
var cmapWordToCamelCase = g.cmap + cWord + b.cTo + cCamel + cCase;
exports.cmapWordToCamelCase = cmapWordToCamelCase;
var csimplifyAndConsolidateString = csimplify + cAnd + cConsolidate + cString;
exports.csimplifyAndConsolidateString = csimplifyAndConsolidateString;
var ccompareSimplifiedAndConsolidatedStrings = ccompare + cSimplified + cAnd + cConsolidated + cStrings;
exports.ccompareSimplifiedAndConsolidatedStrings = ccompareSimplifiedAndConsolidatedStrings;
var cdoesArrayContainLowerCaseConsolidatedString = cdoes + cArray + cContain + cLower + cCase + cConsolidated + cString;
exports.cdoesArrayContainLowerCaseConsolidatedString = cdoesArrayContainLowerCaseConsolidatedString;
var cascertainMatchingFilenames = cascertain + cMatching + cFilenames;
exports.cascertainMatchingFilenames = cascertainMatchingFilenames;
var cdoesArrayContainFilename = cdoes + cArray + cContain + cFilename;
exports.cdoesArrayContainFilename = cdoesArrayContainFilename;
var cgetDataCatagoryFromDataContextName = cget + cData + cCatagory + cFrom + cData + cContext + cName;
exports.cgetDataCatagoryFromDataContextName = cgetDataCatagoryFromDataContextName;
var cgetDataCatagoryDetailNameFromDataContextName = cget + cData + cCatagory + cDetail + cName + cFrom + cData + cContext + cName;
exports.cgetDataCatagoryDetailNameFromDataContextName = cgetDataCatagoryDetailNameFromDataContextName;
var cgetKeywordNameFromDataContextName = cget + cKeyword + cName + cFrom + cData + cContext + cName;
exports.cgetKeywordNameFromDataContextName = cgetKeywordNameFromDataContextName;
var cparseSystemRootPath = cparse + cSystem + cRoot + cPath;
exports.cparseSystemRootPath = cparseSystemRootPath;
var creplaceDoublePercentWithMessage = creplace + cDouble + cPercent + cWith + cMessage;
exports.creplaceDoublePercentWithMessage = creplaceDoublePercentWithMessage;
var cremoveXnumberOfFoldersFromEndOfPath = cremove + b.cX + cnumber + b.cOf + cFolders + cFrom + cEnd + b.cOf + cPath;
exports.cremoveXnumberOfFoldersFromEndOfPath = cremoveXnumberOfFoldersFromEndOfPath;
var cgetFirstTopLevelFolderFromPath = cget + g.cFirst + cTop + cLevel + cFolder + cFrom + cPath; // *********************************
// StringGeneration rules in order
// *********************************

exports.cgetFirstTopLevelFolderFromPath = cgetFirstTopLevelFolderFromPath;
var ccreateNdigitStringFromNumber = ccreate + b.cN + cdigit + cString + cFrom + cNumber;
exports.ccreateNdigitStringFromNumber = ccreateNdigitStringFromNumber;
var cgenerateRandomMixedCaseTextByLength1 = cgenerateRandom + cMixedCase + cTextByLength + b.c1;
exports.cgenerateRandomMixedCaseTextByLength1 = cgenerateRandomMixedCaseTextByLength1;
var cgenerateRandomMixedCaseTextByLength2 = cgenerateRandom + cMixedCase + cTextByLength + b.c2;
exports.cgenerateRandomMixedCaseTextByLength2 = cgenerateRandomMixedCaseTextByLength2;
var cgenerateRandomUpperCaseTextByLength1 = cgenerateRandom + cUpperCase + cTextByLength + b.c1;
exports.cgenerateRandomUpperCaseTextByLength1 = cgenerateRandomUpperCaseTextByLength1;
var cgenerateRandomUpperCaseTextByLength2 = cgenerateRandom + cUpperCase + cTextByLength + b.c2;
exports.cgenerateRandomUpperCaseTextByLength2 = cgenerateRandomUpperCaseTextByLength2;
var cgenerateRandomLowerCaseTextByLength1 = cgenerateRandom + cLowerCase + cTextByLength + b.c1;
exports.cgenerateRandomLowerCaseTextByLength1 = cgenerateRandomLowerCaseTextByLength1;
var cgenerateRandomLowerCaseTextByLength2 = cgenerateRandom + cLowerCase + cTextByLength + b.c2;
exports.cgenerateRandomLowerCaseTextByLength2 = cgenerateRandomLowerCaseTextByLength2;
var cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + b.c1;
exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1;
var cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + b.c2;
exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2;
var cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + b.c1;
exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1;
var cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + b.c2;
exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2;
var cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + b.c1;
exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1;
var cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + b.c2;
exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2;
var cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + b.c1;
exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandomMixedCaseAlphaNumericCodeByLength1;
var cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + b.c2;
exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandomMixedCaseAlphaNumericCodeByLength2;
var cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + b.c1;
exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandomUpperCaseAlphaNumericCodeByLength1;
var cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + b.c2;
exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandomUpperCaseAlphaNumericCodeByLength2;
var cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + b.c1;
exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandomLowerCaseAlphaNumericCodeByLength1;
var cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + b.c2;
exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandomLowerCaseAlphaNumericCodeByLength2;
var cgenerateRandomNumericCodeByLength1 = cgenerateRandom + cNumericCodeByLength + b.c1;
exports.cgenerateRandomNumericCodeByLength1 = cgenerateRandomNumericCodeByLength1;
var cgenerateRandomNumericCodeByLength2 = cgenerateRandom + cNumericCodeByLength + b.c2;
exports.cgenerateRandomNumericCodeByLength2 = cgenerateRandomNumericCodeByLength2;
var cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1;
var cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2;
var cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1;
var cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2;
var cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1;
var cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2;
var cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandom + cSpecialCharacterCodeByLength + b.c1;
exports.cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandomSpecialCharacterCodeByLength1;
var cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandom + cSpecialCharacterCodeByLength + b.c2;
exports.cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandomSpecialCharacterCodeByLength2;
var cgenerateValidEmail1 = cgenerate + cValidEmail + b.c1;
exports.cgenerateValidEmail1 = cgenerateValidEmail1;
var cgenerateValidEmail2 = cgenerate + cValidEmail + b.c2;
exports.cgenerateValidEmail2 = cgenerateValidEmail2;
var cgenerateInvalidEmail1 = cgenerate + cInvalidEmail + b.c1;
exports.cgenerateInvalidEmail1 = cgenerateInvalidEmail1;
var cgenerateInvalidEmail2 = cgenerate + cInvalidEmail + b.c2; // *********************************
// CharacterGeneration rules in order
// *********************************

exports.cgenerateInvalidEmail2 = cgenerateInvalidEmail2;
var crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + b.c1;
exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerateMixedCaseLetterOrSpecialCharacter1;
var crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + b.c2;
exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerateMixedCaseLetterOrSpecialCharacter2;
var crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + b.c1;
exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerateUpperCaseLetterOrSpecialCharacter1;
var crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + b.c2;
exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerateUpperCaseLetterOrSpecialCharacter2;
var crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + b.c1;
exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerateLowerCaseLetterOrSpecialCharacter1;
var crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + b.c2;
exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerateLowerCaseLetterOrSpecialCharacter2;
var crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + b.c1;
exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1;
var crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + b.c2;
exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2;
var crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + b.c1;
exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1;
var crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + b.c2;
exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2;
var crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + b.c1;
exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1;
var crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + b.c2;
exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2;
var crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + b.c1;
exports.crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerateMixedCaseAlphaNumericCharacter1;
var crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + b.c2;
exports.crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerateMixedCaseAlphaNumericCharacter2;
var crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + b.c1;
exports.crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerateUpperCaseAlphaNumericCharacter1;
var crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + b.c2;
exports.crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerateUpperCaseAlphaNumericCharacter2;
var crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + b.c1;
exports.crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerateLowerCaseAlphaNumericCharacter1;
var crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + b.c2;
exports.crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerateLowerCaseAlphaNumericCharacter2;
var crandomlyGenerateNumericCharacter1 = crandomlyGenerate + cNumericCharacter + b.c1;
exports.crandomlyGenerateNumericCharacter1 = crandomlyGenerateNumericCharacter1;
var crandomlyGenerateNumericCharacter2 = crandomlyGenerate + cNumericCharacter + b.c2;
exports.crandomlyGenerateNumericCharacter2 = crandomlyGenerateNumericCharacter2;
var crandomlyGenerateSpecialCharacter1 = crandomlyGenerate + cSpecialCharacter + b.c1;
exports.crandomlyGenerateSpecialCharacter1 = crandomlyGenerateSpecialCharacter1;
var crandomlyGenerateSpecialCharacter2 = crandomlyGenerate + cSpecialCharacter + b.c2;
exports.crandomlyGenerateSpecialCharacter2 = crandomlyGenerateSpecialCharacter2;
var crandomlyGenerateNumberInRange1 = crandomlyGenerate + cNumberInRange + b.c1;
exports.crandomlyGenerateNumberInRange1 = crandomlyGenerateNumberInRange1;
var crandomlyGenerateNumberInRange2 = crandomlyGenerate + cNumberInRange + b.c2;
exports.crandomlyGenerateNumberInRange2 = crandomlyGenerateNumberInRange2;
var crandomlyGenerateBooleanValue1 = crandomlyGenerate + cBooleanValue + b.c1;
exports.crandomlyGenerateBooleanValue1 = crandomlyGenerateBooleanValue1;
var crandomlyGenerateBooleanValue2 = crandomlyGenerate + cBooleanValue + b.c2;
exports.crandomlyGenerateBooleanValue2 = crandomlyGenerateBooleanValue2;
var crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + b.c1;
exports.crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerateMixedCaseAlphabeticCharacter1;
var crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + b.c2;
exports.crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerateMixedCaseAlphabeticCharacter2;
var crandomlyGenerateLowerCaseLetter1 = crandomlyGenerate + cLowerCase + cLetter + b.c1;
exports.crandomlyGenerateLowerCaseLetter1 = crandomlyGenerateLowerCaseLetter1;
var crandomlyGenerateLowerCaseLetter2 = crandomlyGenerate + cLowerCase + cLetter + b.c2;
exports.crandomlyGenerateLowerCaseLetter2 = crandomlyGenerateLowerCaseLetter2;
var crandomlyGenerateUpperCaseLetter1 = crandomlyGenerate + cUpperCase + cLetter + b.c1;
exports.crandomlyGenerateUpperCaseLetter1 = crandomlyGenerateUpperCaseLetter1;
var crandomlyGenerateUpperCaseLetter2 = crandomlyGenerate + cUpperCase + cLetter + b.c2;
exports.crandomlyGenerateUpperCaseLetter2 = crandomlyGenerateUpperCaseLetter2;
var cconvertNumberToUpperCaseLetter = cconvert + cNumber + cTo + cUpperCase + cLetter;
exports.cconvertNumberToUpperCaseLetter = cconvertNumberToUpperCaseLetter;
var cconvertNumberToLowerCaseLetter = cconvert + cNumber + cTo + cLowerCase + cLetter;
exports.cconvertNumberToLowerCaseLetter = cconvertNumberToLowerCaseLetter;