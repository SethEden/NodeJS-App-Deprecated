"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cconfig = exports.cFiglet = exports.cfiglet = exports.cFig = exports.cfig = exports.cLets = exports.clets = exports.cLet = exports.clet = exports.cOOPS = exports.cOops = exports.coops = exports.cWords = exports.cwords = exports.cWord = exports.cword = exports.cLinux = exports.clinux = exports.cWindows = exports.cwindows = exports.cWindow = exports.cwindow = exports.cWind = exports.cwind = exports.cSubString = exports.csubString = exports.csubstring = exports.cObjects = exports.cobjects = exports.cObject = exports.cobject = exports.cBooleans = exports.cbooleans = exports.cBoolean = exports.cboolean = exports.cChars = exports.cchars = exports.cChar = exports.cchar = exports.cDoubles = exports.cdoubles = exports.cDouble = exports.cdouble = exports.cShortest = exports.cshortest = exports.cShorter = exports.cshorter = exports.cShorts = exports.cshorts = exports.cShort = exports.cshort = exports.cLongest = exports.clongest = exports.cLonger = exports.clonger = exports.cLongs = exports.clongs = exports.cLong = exports.clong = exports.cFloats = exports.cfloats = exports.cFloat = exports.cfloat = exports.cIntegers = exports.cintegers = exports.cInteger = exports.cinteger = exports.cStrings = exports.cstrings = exports.cString = exports.cstring = exports.cFlags = exports.cflags = exports.cFlag = exports.cflag = exports.cRegEx = exports.cregEx = exports.cNth = exports.cnth = exports.cURL = exports.curl = exports.cNode = exports.cnode = exports.cKeying = exports.ckeying = exports.cKeyed = exports.ckeyed = exports.cKeys = exports.ckeys = exports.cKey = exports.ckey = exports.clogs = exports.cLogs = exports.clog = exports.cLog = exports.cOut = exports.cout = exports.c3D = exports.c3d = exports.c1a1d = void 0;
exports.ctop = exports.cTo = exports.cRight = exports.cright = exports.cLeft = exports.cleft = exports.cBack = exports.cback = exports.cFront = exports.cfront = exports.cDetails = exports.cdetails = exports.cDetail = exports.cdetail = exports.cWithout = exports.cwithout = exports.cWith = exports.cwith = exports.cMenu = exports.cMe = exports.cHamburger = exports.cAccount = exports.cCounter = exports.ccounter = exports.cCount = exports.ccount = exports.cConfirm = exports.cconfirm = exports.cCancel = exports.ccancel = exports.cCan = exports.ccan = exports.cSelect = exports.cselect = exports.cAt = exports.cat = exports.cAll = exports.call = exports.cSubstitution = exports.csubstitution = exports.cSubstitute = exports.csubstitute = exports.cInsertion = exports.cinsertion = exports.cInsert = exports.cinsert = exports.cDeletion = exports.cdeletion = exports.cDelete = exports.cdelete = exports.cEdit = exports.cUpdate = exports.cOpening = exports.copening = exports.cOpened = exports.copened = exports.cOpens = exports.copens = exports.cOpen = exports.copen = exports.cClosing = exports.cclosing = exports.cClosed = exports.cclosed = exports.cClose = exports.cclose = exports.cPens = exports.cpens = exports.cPen = exports.cpen = exports.cAdditionals = exports.cadditionals = exports.cADDITIONAL = exports.cAdditional = exports.cadditional = exports.cAdding = exports.cadding = exports.cAdded = exports.cadded = exports.cADD = exports.cAdd = exports.c_add = exports.cSubmit = exports.cCreate = exports.ccreate = exports.cFully = exports.cfully = exports.cFull = exports.cfull = exports.cEmpty = exports.cempty = exports.cConfiguring = exports.cconfiguring = exports.cConfigured = exports.cconfigured = exports.cConfigurations = exports.cconfigurations = exports.cConfiguration = exports.cconfiguration = exports.cConfig = void 0;
exports.cpages = exports.cPage = exports.cpage = exports.cDebug = exports.cdebug = exports.cbug = exports.cINVALID = exports.cInvalid = exports.cinvalid = exports.cValidate = exports.cvalidate = exports.cValidations = exports.cvalidations = exports.cValidation = exports.cvalidation = exports.cVALID = exports.cValid = exports.cvalid = exports.cTypes = exports.cType = exports.ctype = exports.cField = exports.cLabel = exports.cLink = exports.cInfo = exports.cinfo = exports.cEntire = exports.cPositive = exports.cNegative = exports.cDownload = exports.cSave = exports.csave = exports.cNavigate = exports.cnavigate = exports.cExpecting = exports.cexpecting = exports.cExpected = exports.cexpected = exports.cExpects = exports.cexpects = exports.cExpect = exports.cexpect = exports.cPressKey = exports.cpressKey = exports.cPressing = exports.cpressing = exports.cPressed = exports.cpressed = exports.cPresses = exports.cpresses = exports.cPress = exports.cpress = exports.cClick = exports.cclick = exports.cLoading = exports.cloading = exports.cLoaded = exports.cloaded = exports.cLoads = exports.cloads = exports.cLoad = exports.cload = exports.cNew = exports.cView = exports.cview = exports.cUnShare = exports.cUnshare = exports.cUnshared = exports.cUnShared = exports.cShared = exports.cshared = exports.cshares = exports.cShares = exports.cShare = exports.cshare = exports.cListed = exports.clisted = exports.cLists = exports.clists = exports.cList = exports.clist = exports.cItems = exports.citems = exports.cItem = exports.citem = exports.cThe = exports.cthe = exports.cEnding = exports.cending = exports.cEND = exports.cEnd = exports.cend = exports.cBeginning = exports.cbeginning = exports.cBEGIN = exports.cBegin = exports.cbegin = exports.cBottom = exports.cbottom = exports.cTop = void 0;
exports.cRunTime = exports.cRuntime = exports.cruntime = exports.cTime = exports.ctime = exports.cDate = exports.cdate = exports.cReceived = exports.cReceive = exports.cEmails = exports.cEmail = exports.cmail = exports.cID = exports.cId = exports.cid = exports.cPageScriptName = exports.cKeywordName = exports.ckeywordName = exports.cNamed = exports.cnamed = exports.cNames = exports.cnames = exports.cName = exports.cname = exports.cEnvironment = exports.cMaster = exports.cmaster = exports.cRunning = exports.crunning = exports.cRuns = exports.cruns = exports.cRun = exports.crun = exports.cRowing = exports.crowing = exports.cRowed = exports.crowed = exports.cRows = exports.crows = exports.cRow = exports.crow = exports.cOf = exports.cHost = exports.cNumber = exports.cnumber = exports.cAutomation = exports.cautomation = exports.cAuto = exports.cauto = exports.cActual = exports.cactual = exports.cActions = exports.cactions = exports.cAction = exports.caction = exports.cAct = exports.cact = exports.cBrowser = exports.cExhaustive = exports.cBureau = exports.cTestWorkflow = exports.cTestStatusMessage = exports.cTestStatus = exports.cStatus = exports.cTESTS = exports.cTests = exports.ctests = exports.cTEST = exports.cTest = exports.ctest = exports.cWorkflows = exports.cworkflows = exports.cWorkflow = exports.cworkflow = exports.cFlow = exports.cflow = exports.cWork = exports.cwork = exports.cResulting = exports.cresulting = exports.cResulted = exports.cresulted = exports.cResults = exports.cresults = exports.cResult = exports.cresult = exports.cDATA = exports.cData = exports.cdata = exports.cKeywords = exports.ckeywords = exports.cKeyword = exports.ckeyword = exports.cScripts = exports.cScript = exports.cMessages = exports.cmessages = exports.cMessage = exports.cmessage = exports.cPages = void 0;
exports.cClean = exports.cclean = exports.cCatagory = exports.cUnderscore = exports.cunderscore = exports.cScore = exports.cscore = exports.cUnder = exports.cunder = exports.cColon = exports.ccolon = exports.cPlus = exports.cplus = exports.cSpaced = exports.cspaced = exports.cSpaces = exports.cspaces = exports.cSpace = exports.cspace = exports.cReplacement = exports.creplacement = exports.cReplacing = exports.creplacing = exports.cReplaced = exports.creplaced = exports.cReplaces = exports.creplaces = exports.cReplace = exports.creplace = exports.cPlacement = exports.cplacement = exports.cPlacing = exports.cplacing = exports.cPlaced = exports.cplaced = exports.cPlaces = exports.cplaces = exports.cPlace = exports.cplace = exports.cFrom = exports.cfrom = exports.cPUT = exports.cPut = exports.cput = exports.cGet = exports.cget = exports.cLevel = exports.clevel = exports.cAccess = exports.cUser = exports.cuser = exports.cUse = exports.cuse = exports.cAnd = exports.cand = exports.cCompleted = exports.ccompleted = exports.cComplete = exports.ccomplete = exports.cPROCESSING = exports.cProcessing = exports.cprocessing = exports.cProcesses = exports.cprocesses = exports.cProcessed = exports.cprocessed = exports.cPROCESS = exports.cProcess = exports.cprocess = exports.cGateway = exports.cWay = exports.cway = exports.cGate = exports.cLimit = exports.climit = exports.cPreview = exports.cSetting = exports.csetting = exports.cSet = exports.cset = exports.cBug = exports.cPermission = exports.cViewer = exports.cExiting = exports.cexiting = exports.cExit = exports.cexit = exports.cPath = exports.cpath = exports.cIntermediate = exports.cintermediate = exports.cmediate = exports.cStamping = exports.cstamping = exports.cStamped = exports.cstamped = exports.cStamps = exports.cstamps = exports.cStamp = exports.cstamp = void 0;
exports.cwait = exports.cAbreviated = exports.cAssignment = exports.cassignment = exports.cAssign = exports.cassign = exports.cSign = exports.csign = exports.cSystem = exports.csystem = exports.cOperating = exports.cOperation = exports.cRaw = exports.cEquivalence = exports.cequivalence = exports.cEquals = exports.cequals = exports.cEqual = exports.cequal = exports.cTable = exports.ctable = exports.cLibrary = exports.clibrary = exports.cDialog = exports.cVisibility = exports.cvisibility = exports.cVariability = exports.cvariability = exports.cVariables = exports.cvariables = exports.cVariable = exports.cvariable = exports.cAbilities = exports.cabilities = exports.cAbility = exports.cability = exports.cTies = exports.cties = exports.cDetermine = exports.cdetermine = exports.cEnabled = exports.cenabled = exports.cEnable = exports.cenable = exports.cEither = exports.ceither = exports.cCode = exports.ccode = exports.cLength = exports.clength = exports.cNumerical = exports.cNumeric = exports.cnumeric = exports.cRange = exports.crange = exports.cFindValue = exports.cfindValue = exports.cfindvalue = exports.cFind = exports.cfind = exports.cValues = exports.cvalues = exports.cValue = exports.cvalue = exports.cParent = exports.cparent = exports.cGenerated = exports.cgenerated = exports.cGenerate = exports.cgenerate = exports.cRandomly = exports.crandomly = exports.cRandom = exports.crandom = exports.cUpper = exports.cupper = exports.cLetter = exports.cletter = exports.cDigit = exports.cdigit = exports.cDig = exports.cdig = exports.cExtension = exports.cRemove = exports.cremove = exports.cmove = exports.cCase = exports.ccase = exports.cLower = exports.clower = exports.cLow = exports.clow = exports.cConvert = exports.cconvert = exports.cReturn = exports.creturn = exports.cturn = exports.cCarriage = exports.cCleaned = exports.ccleaned = void 0;
exports.cinput = exports.cContext = exports.ccontext = exports.cTEXT = exports.cText = exports.ctext = exports.cAlphabetic = exports.cbetic = exports.cAlpha = exports.calpha = exports.cMixed = exports.cmixed = exports.cMix = exports.cmix = exports.cOR = exports.cor = exports.cOr = exports.cBY = exports.cBy = exports.cby = exports.cAssertionStyle = exports.cUploadStyle = exports.cAssertionType = exports.cAssertion = exports.cAssertValueGreaterThan = exports.cAssertValueLessThan = exports.cAssertValueNotEqual = exports.cAssertValueEqual = exports.cAssertNotExists = exports.cAssertExists = exports.cThan = exports.cthan = exports.cThen = exports.cthen = exports.cGreater = exports.cgreater = exports.cGreat = exports.cgreat = exports.cLess = exports.cless = exports.cAssert = exports.cassert = exports.cStyle = exports.cUpload = exports.cOnce = exports.cAFTER = exports.cAfter = exports.cafter = exports.cBEFORE = exports.cBefore = exports.cbefore = exports.cSwap = exports.cswap = exports.cQuoted = exports.cquoted = exports.cQuotes = exports.cquotes = exports.cQuote = exports.cquote = exports.cSingle = exports.csingle = exports.cDEFAULT = exports.cDefault = exports.cdefault = exports.cFAULT = exports.cFault = exports.cfault = exports.cUnified = exports.cMulti = exports.cParallel = exports.cSingular = exports.cSynch = exports.cAsynch = exports.cExisting = exports.cexisting = exports.cExisted = exports.cexisted = exports.cExists = exports.cexists = exports.cExist = exports.cexist = exports.cIndividually = exports.cIndividual = exports.cSelectors = exports.cSelector = exports.cselector = exports.cLocatorLibrary = exports.cLocators = exports.cLocator = exports.cActionOverride = exports.cOverride = exports.cRide = exports.cride = exports.cOver = exports.cInner = exports.cinner = exports.chtml = exports.cHTML = exports.cawait = exports.cWait = void 0;
exports.ccharacters = exports.cCharacter = exports.ccharacter = exports.cSpecial = exports.cspecial = exports.cPublic = exports.cpublic = exports.cHome = exports.chome = exports.cAllowable = exports.callowable = exports.cAllow = exports.callow = exports.cElementName = exports.cElements = exports.celements = exports.cElement = exports.celement = exports.cChecked = exports.cchecked = exports.cChecks = exports.cchecks = exports.cCheck = exports.ccheck = exports.cIS = exports.cIs = exports.cis = exports.cIngestion = exports.cClass = exports.cclass = exports.cResources = exports.cresources = exports.cResource = exports.cresource = exports.cDestination = exports.cdestination = exports.cSource = exports.csource = exports.cNation = exports.cnation = exports.cbin = exports.csrc = exports.ccert = exports.ccafe = exports.cFolders = exports.cfolders = exports.cfolder = exports.cFolder = exports.cFold = exports.cfold = exports.cFilenames = exports.cfilenames = exports.cFilename = exports.cfilename = exports.cFiles = exports.cfiles = exports.cFile = exports.cfile = exports.cWebkey = exports.cWebbing = exports.cwebbing = exports.cWebbed = exports.cwebbed = exports.cWebs = exports.cwebs = exports.cWeb = exports.cweb = exports.cBedding = exports.cbedding = exports.cBedded = exports.cbedded = exports.cBeds = exports.cbeds = exports.cBed = exports.cbed = exports.cPageName = exports.cTestName = exports.cPageData = exports.cpageData = exports.ctestData = exports.cCreation = exports.cAdvanced = exports.cAdvance = exports.cProjects = exports.cProject = exports.cproject = exports.cIteration = exports.citeration = exports.cConstants = exports.cconstants = exports.cConstant = exports.cconstant = exports.cDescription = exports.cdescription = exports.cInputting = exports.cinputting = exports.cInputs = exports.cinputs = exports.cINPUT = exports.cInput = void 0;
exports.cFraction = exports.cTrap = exports.ctrap = exports.cAngle = exports.cangle = exports.cDegrees = exports.cdegrees = exports.cDegree = exports.cdegree = exports.cNominal = exports.cnominal = exports.cNormalize = exports.cnormalize = exports.cNormal = exports.cnormal = exports.cQuaternion = exports.cquaternion = exports.cQuarter = exports.cquarter = exports.cQuart = exports.cquart = exports.cRounded = exports.crounded = exports.cRound = exports.cround = exports.cCamel = exports.ccamel = exports.cArrays = exports.carrays = exports.cArray = exports.carray = exports.cDecompose = exports.cdecompose = exports.ccompose = exports.cDashboard = exports.cboard = exports.cDash = exports.cdash = exports.cAsh = exports.cash = exports.cERROR = exports.cError = exports.cerror = exports.cWarnings = exports.cwarnings = exports.cWARNING = exports.cWarning = exports.cwarning = exports.cWARN = exports.cWarn = exports.cwarn = exports.cConstructor = exports.cPort = exports.cport = exports.cHung = exports.chung = exports.cCell = exports.ccell = exports.cWoman = exports.cwoman = exports.cMan = exports.cman = exports.cDisabled = exports.cdisabled = exports.cAttributes = exports.cattributes = exports.cAttribute = exports.cattribute = exports.cFilter = exports.cfilter = exports.cChild = exports.cchild = exports.cSibling = exports.csibling = exports.cExecuting = exports.cexecuting = exports.cExecuted = exports.cexecuted = exports.cExecutes = exports.cexecutes = exports.cExecute = exports.cexecute = exports.cCute = exports.ccute = exports.cCutting = exports.ccutting = exports.cCuts = exports.ccuts = exports.cCut = exports.ccut = exports.cDwell = exports.cTimeOut = exports.cTimeout = exports.cBinary = exports.cSolid = exports.csolid = exports.cWorks = exports.cEdge = exports.cedge = exports.cCharacters = void 0;
exports.cParsed = exports.cparsed = exports.cPARSER = exports.cParser = exports.cparser = exports.cPARSE = exports.cParse = exports.cparse = exports.cRoot = exports.croot = exports.cReleasing = exports.creleasing = exports.cReleased = exports.creleased = exports.cReleases = exports.creleases = exports.cRELEASE = exports.cRelease = exports.crelease = exports.cLEASE = exports.clease = exports.cDeployment = exports.cdeployment = exports.cDEPLOY = exports.cDeploy = exports.cdeploy = exports.cBuild = exports.cbuild = exports.cAPPLICATION = exports.cApplication = exports.capplication = exports.cDOES = exports.cDoes = exports.cdoes = exports.cMatching = exports.cmatching = exports.cMatch = exports.cmatch = exports.cAscertain = exports.cascertain = exports.ccertain = exports.cBetween = exports.cbetween = exports.cBet = exports.cbet = exports.cDifference = exports.cArguments = exports.carguments = exports.cAggregate = exports.caggregate = exports.cProduct = exports.cVideo = exports.cvideo = exports.cContaining = exports.ccontaining = exports.cContained = exports.ccontained = exports.cContains = exports.ccontains = exports.cContain = exports.ccontain = exports.cComparisons = exports.ccomparisons = exports.cComparison = exports.ccomparison = exports.cComparing = exports.ccomparing = exports.cCompared = exports.ccompared = exports.cCompares = exports.ccompares = exports.cCompare = exports.ccompare = exports.cARE = exports.cAre = exports.care = exports.cConsolidating = exports.cconsolidating = exports.cConsolidates = exports.cconsolidates = exports.cConsolidated = exports.cconsolidated = exports.cConsolidate = exports.cconsolidate = exports.cSimplify = exports.csimplify = exports.cSort = exports.csort = exports.cLocation = exports.clocation = exports.cPoint = exports.cpoint = exports.cTransform = exports.ctransform = exports.cForm = exports.cform = exports.cFor = exports.cfor = exports.cVector = exports.cvector = void 0;
exports.cCommands = exports.ccommands = exports.cCOMMAND = exports.cCommand = exports.ccommand = exports.cCustom = exports.ccustom = exports.cRules = exports.crules = exports.cClient = exports.cclient = exports.cAverage = exports.caverage = exports.cPalindrom = exports.cpalindrom = exports.cPal = exports.cpal = exports.cAlmost = exports.calmost = exports.cPopular = exports.cpopular = exports.cPOP = exports.cPop = exports.cpop = exports.cMost = exports.cmost = exports.cBold = exports.cbold = exports.cOld = exports.cold = exports.cColorized = exports.ccolorized = exports.cColorize = exports.ccolorize = exports.cColored = exports.ccolored = exports.cColors = exports.ccolors = exports.cColor = exports.ccolor = exports.cModule = exports.cmodule = exports.cFont = exports.cfont = exports.cInterface = exports.cinterface = exports.cDriven = exports.cdriven = exports.cDrive = exports.cdrive = exports.cArgument = exports.cargument = exports.cFace = exports.cface = exports.cEvents = exports.cevents = exports.cEvent = exports.cevent = exports.cEVEN = exports.cEven = exports.ceven = exports.cOdd = exports.codd = exports.cBasic = exports.cbasic = exports.cPercent = exports.cpercent = exports.cExecution = exports.cJournal = exports.cMultiple = exports.cmultiple = exports.cFunctions = exports.cfunctions = exports.cFunction = exports.cfunction = exports.cCommon = exports.ccommon = exports.cDemo = exports.cdemo = exports.cReload = exports.creload = exports.cEval = exports.ceval = exports.cRefresh = exports.crefresh = exports.cfresh = exports.cRule = exports.crule = exports.cBusiness = exports.cbusiness = exports.cMetaData = exports.cmetaData = exports.cMeta = exports.cmeta = exports.cSlash = exports.cslash = exports.cForward = exports.cforward = exports.cParsing = exports.cparsing = void 0;
exports.cFAIL = exports.cFail = exports.cfail = exports.cBypassing = exports.cbypassing = exports.cBypassed = exports.cbypassed = exports.cBypasses = exports.cbypasses = exports.cBypass = exports.cbypass = exports.cPassing = exports.cpassing = exports.cPASSED = exports.cPassed = exports.cpassed = exports.cPASS = exports.cPass = exports.cpass = exports.cConversion = exports.cconversion = exports.cPerformance = exports.cperformance = exports.cPerform = exports.cperform = exports.cControl = exports.ccontrol = exports.cVersion = exports.cversion = exports.cClear = exports.cclear = exports.cAnalysis = exports.canalysis = exports.cDeviation = exports.cdeviation = exports.cStandard = exports.cstandard = exports.cStack = exports.cstack = exports.cTracking = exports.ctracking = exports.cTrack = exports.ctrack = exports.cRack = exports.crack = exports.cMetrics = exports.cmetrics = exports.cMetric = exports.cmetric = exports.cOutput = exports.coutput = exports.cStarting = exports.cstarting = exports.cstartup = exports.cStarted = exports.cstarted = exports.cStarts = exports.cstarts = exports.cStart = exports.cstart = exports.cAbout = exports.cabout = exports.cIndex = exports.cindex = exports.cGenerator = exports.cgenerator = exports.cHive = exports.chive = exports.cPrint = exports.cprint = exports.cHelp = exports.chelp = exports.cDelimiting = exports.cdelimiting = exports.cDelimited = exports.cdelimited = exports.cDelimiters = exports.cdelimiters = exports.cDelimiter = exports.cdelimiter = exports.cDelimit = exports.cdelimit = exports.cTertiary = exports.ctertiary = exports.cSecondary = exports.csecondary = exports.cPrimary = exports.cprimary = exports.cSequencer = exports.csequencer = exports.cAliases = exports.caliases = exports.cAlias = exports.calias = exports.cFrame = exports.cframe = exports.cBlob = exports.cblob = exports.cQueue = exports.cqueue = void 0;
exports.cHers = exports.chers = exports.cHim = exports.chim = exports.cHer = exports.cher = exports.cWhere = exports.cwhere = exports.cWere = exports.cwere = exports.cEntering = exports.centering = exports.cEntered = exports.centered = exports.cEnters = exports.centers = exports.cEnter = exports.center = exports.cPlease = exports.cplease = exports.cDuplicate = exports.cduplicate = exports.cUnique = exports.cunique = exports.cStored = exports.cstored = exports.cStore = exports.cstore = exports.cStorage = exports.cstorage = exports.cPRODUCTION = exports.cProduction = exports.cproduction = exports.cDEVELOPMENT = exports.cDevelopment = exports.cdevelopment = exports.cDEVELOP = exports.cDevelop = exports.cdevelop = exports.cSuffix = exports.csuffix = exports.cPrefix = exports.cprefix = exports.cFix = exports.cfix = exports.cQualified = exports.cqualified = exports.cDocument = exports.cdocument = exports.cLine = exports.cline = exports.cSuggested = exports.csuggested = exports.cSuggest = exports.csuggest = exports.cSummary = exports.csummary = exports.cSum = exports.csum = exports.cDisplay = exports.cdisplay = exports.cPlay = exports.cplay = exports.cExport = exports.cexport = exports.cShape = exports.cshape = exports.cPhonics = exports.cphonics = exports.cPhonic = exports.cphonic = exports.cIsotope = exports.cisotope = exports.cGeneric = exports.cgeneric = exports.cUnits = exports.cunits = exports.cUnit = exports.cunit = exports.cSections = exports.csections = exports.cSection = exports.csection = exports.cLane = exports.clane = exports.cLack = exports.clack = exports.cYell = exports.cyell = exports.cGround = exports.cground = exports.cTraditional = exports.ctraditional = exports.cSimplified = exports.csimplified = exports.cFailure = exports.cfailure = exports.cFAILED = exports.cFailed = exports.cfailed = void 0;
exports.ccomas = exports.cComa = exports.ccoma = exports.cPatterns = exports.cpatterns = exports.cPattern = exports.cpattern = exports.cPatt = exports.cpatt = exports.cPat = exports.cpat = exports.cRecognizer = exports.crecognizer = exports.cCombinations = exports.ccombinations = exports.cCombination = exports.ccombination = exports.cRecombine = exports.crecombine = exports.cCombining = exports.ccombining = exports.cCombined = exports.ccombined = exports.cCombines = exports.ccombines = exports.cCombine = exports.ccombine = exports.cComb = exports.ccomb = exports.cSome = exports.csome = exports.cOptimized = exports.coptimized = exports.cFulfillment = exports.cfulfillment = exports.cFill = exports.cfill = exports.cDefining = exports.cdefining = exports.cDefines = exports.cdefines = exports.cDefined = exports.cdefined = exports.cDefine = exports.cdefine = exports.cFine = exports.cfine = exports.cLike = exports.clike = exports.cCould = exports.ccould = exports.cShould = exports.cshould = exports.cWould = exports.cwould = exports.cYou = exports.cyou = exports.cScreen = exports.cscreen = exports.cExpansion = exports.cexpansion = exports.cRecursive = exports.crecursive = exports.cCursive = exports.ccursive = exports.cClone = exports.cclone = exports.cDeep = exports.cdeep = exports.cLehmer = exports.cSolve = exports.csolve = exports.cAcronyms = exports.cacronyms = exports.cAcronym = exports.cacronym = exports.cAbreviations = exports.cabreviations = exports.cAbreviation = exports.cabreviation = exports.cOther = exports.cother = exports.cWhy = exports.cwhy = exports.cHow = exports.chow = exports.cWhat = exports.cwhat = exports.cWhen = exports.cwhen = exports.cThis = exports.cthis = exports.cThat = exports.cthat = exports.cThose = exports.cthose = exports.cThem = exports.cthem = exports.cHis = exports.chis = void 0;
exports.ctemp = exports.cUnknown = exports.cunknown = exports.cKnown = exports.cknown = exports.cKnow = exports.cknow = exports.cNow = exports.cnow = exports.cUnable = exports.cunable = exports.cInto = exports.cinto = exports.cBreak = exports.cbreak = exports.cUsing = exports.cusing = exports.cUsed = exports.cused = exports.cCannot = exports.ccannot = exports.cPeriod = exports.cperiod = exports.cCost = exports.ccost = exports.cTerm = exports.cterm = exports.cVariation = exports.cvariation = exports.cResolving = exports.cresolving = exports.cResolved = exports.cresolved = exports.cResolve = exports.cresolve = exports.cSymbols = exports.csymbols = exports.cSymbol = exports.csymbol = exports.cMode = exports.cmode = exports.cDomain = exports.cdomain = exports.cSpecified = exports.cspecified = exports.cSpecific = exports.cspecific = exports.cBiggest = exports.cbiggest = exports.cBigger = exports.cbigger = exports.cBig = exports.cbig = exports.cWas = exports.cwas = exports.cSafe = exports.csafe = exports.cStay = exports.cstay = exports.cDay = exports.cday = exports.cNice = exports.cnice = exports.cHave = exports.chave = exports.cBye = exports.cbye = exports.cGood = exports.cgood = exports.cLoop = exports.cloop = exports.cProgram = exports.cprogram = exports.cMain = exports.cmain = exports.cGoing = exports.cgoing = exports.cImplementation = exports.cimplementation = exports.cImplements = exports.cimplements = exports.cImplement = exports.cimplement = exports.cNeed = exports.cneed = exports.cSearching = exports.csearching = exports.cSearched = exports.csearched = exports.cSearches = exports.csearches = exports.cSearch = exports.csearch = exports.cSea = exports.csea = exports.cSeparated = exports.cseparated = exports.cSeparate = exports.cseparate = exports.cComas = void 0;
exports.cfar = exports.cElse = exports.celse = exports.cLookup = exports.clookup = exports.cLooking = exports.clooking = exports.cLooked = exports.clooked = exports.cLooks = exports.clooks = exports.cLook = exports.clook = exports.cCalling = exports.ccalling = exports.cCalled = exports.ccalled = exports.cCalls = exports.ccalls = exports.cCall = exports.ccall = exports.cExpanding = exports.cexpanding = exports.cExpanded = exports.cexpanded = exports.cExpands = exports.cexpands = exports.cExpand = exports.cexpand = exports.cPushing = exports.cpushing = exports.cPushed = exports.cpushed = exports.cPushes = exports.cpushes = exports.cPUSH = exports.cPush = exports.cpush = exports.cCHANGE = exports.cChange = exports.cchange = exports.cHad = exports.chad = exports.cSkiping = exports.cskiping = exports.cSkiped = exports.cskiped = exports.cSkips = exports.cskips = exports.cSkip = exports.cskip = exports.cBeing = exports.cbeing = exports.cDelta = exports.cdelta = exports.cCurrent = exports.ccurrent = exports.cRent = exports.crent = exports.cBut = exports.cbut = exports.cCorrecting = exports.ccorrecting = exports.cCorrectly = exports.ccorrectly = exports.cCorrected = exports.ccorrected = exports.cCorrects = exports.ccorrects = exports.cCorrect = exports.ccorrect = exports.cReformating = exports.creformating = exports.cReformated = exports.creformated = exports.cReformats = exports.creformats = exports.cReformat = exports.creformat = exports.cFormatting = exports.cformatting = exports.cFormatted = exports.cformatted = exports.cFormats = exports.cformats = exports.cFormat = exports.cformat = exports.cMat = exports.cmat = exports.cAttempting = exports.cattempting = exports.cAttempted = exports.cattempted = exports.cAttempts = exports.cattempts = exports.cAttempt = exports.cattempt = exports.cTempt = exports.ctempt = exports.cTemp = void 0;
exports.ctick = exports.cPhasing = exports.cphasing = exports.cPhased = exports.cphased = exports.cPhases = exports.cphases = exports.cPhase = exports.cphase = exports.cDONE = exports.cDone = exports.cdone = exports.cDefinitions = exports.cdefinitions = exports.cDefinition = exports.cdefinition = exports.cFollowing = exports.cfollowing = exports.cFollowed = exports.cfollowed = exports.cFollowes = exports.cfollowes = exports.cFollow = exports.cfollow = exports.cBeen = exports.cbeen = exports.cALREADY = exports.cAlready = exports.calready = exports.cREADY = exports.cReady = exports.cready = exports.cHas = exports.chas = exports.cMore = exports.cmore = exports.cStructures = exports.cstructures = exports.cStructured = exports.cstructured = exports.cStructure = exports.cstructure = exports.cEXAMPLE = exports.cExample = exports.cexample = exports.cPrompt = exports.cprompt = exports.cMust = exports.cmust = exports.cContents = exports.ccontents = exports.cContent = exports.ccontent = exports.cTenting = exports.ctenting = exports.cTents = exports.ctents = exports.cTent = exports.ctent = exports.cAgain = exports.cagain = exports.cGain = exports.cgain = exports.cTrying = exports.ctrying = exports.cTried = exports.ctried = exports.cTry = exports.ctry = exports.cParameters = exports.cparameters = exports.cParameter = exports.cparameter = exports.cAnother = exports.canother = exports.cBecause = exports.cbecause = exports.cCause = exports.ccause = exports.cOriginals = exports.coriginals = exports.cOriginal = exports.coriginal = exports.cUnfounded = exports.cunfounded = exports.cFounded = exports.cfounded = exports.cFound = exports.cfound = exports.cSupporting = exports.csupporting = exports.cSupported = exports.csupported = exports.cSupports = exports.csupports = exports.cSupport = exports.csupport = exports.cSpecify = exports.cspecify = exports.cFar = void 0;
exports.cReferences = exports.creferences = exports.cReference = exports.creference = exports.cModifying = exports.cmodifying = exports.cModifies = exports.cmodifies = exports.cModified = exports.cmodified = exports.cModify = exports.cmodify = exports.cTargeting = exports.ctargeting = exports.cTargeted = exports.ctargeted = exports.cTargets = exports.ctargets = exports.cTarget = exports.ctarget = exports.cInside = exports.cinside = exports.cSiding = exports.csiding = exports.cSided = exports.csided = exports.cSides = exports.csides = exports.cSide = exports.cside = exports.cFlattening = exports.cflattening = exports.cFlattened = exports.cflattened = exports.cFlatten = exports.cflatten = exports.cFlats = exports.cflats = exports.cFlat = exports.cflat = exports.cCaught = exports.ccaught = exports.cFinally = exports.cfinally = exports.cFinals = exports.cfinals = exports.cFinal = exports.cfinal = exports.cIncluding = exports.cincluding = exports.cIncluded = exports.cincluded = exports.cIncludes = exports.cincludes = exports.cInclude = exports.cinclude = exports.cMerging = exports.cmerging = exports.cMERGED = exports.cMerged = exports.cmerged = exports.cMerges = exports.cmerges = exports.cMERGE = exports.cMerge = exports.cmerge = exports.cPosting = exports.cposting = exports.cPosted = exports.cposted = exports.cPosts = exports.cposts = exports.cPost = exports.cpost = exports.cBroker = exports.cbroker = exports.cStraight = exports.cstraight = exports.cDoing = exports.cdoing = exports.cSplitting = exports.csplitting = exports.cSplits = exports.csplits = exports.cSplit = exports.csplit = exports.cLit = exports.clit = exports.cTagging = exports.ctagging = exports.cTagged = exports.ctagged = exports.cTags = exports.ctags = exports.cTag = exports.ctag = exports.cYAY = exports.cYay = exports.cyay = exports.cTick = void 0;
exports.cBracketed = exports.cbracketed = exports.cBrackets = exports.cbrackets = exports.cBracket = exports.cbracket = exports.cThere = exports.cthere = exports.cSame = exports.csame = exports.cAnalyzing = exports.canalyzing = exports.cAnalyzed = exports.canalyzed = exports.cAnalyzes = exports.canalyzes = exports.cAnalyze = exports.canalyze = exports.cPackaging = exports.cpackaging = exports.cPackaged = exports.cpackaged = exports.cPackages = exports.cpackages = exports.cPackage = exports.cpackage = exports.cPacking = exports.cpacking = exports.cPacked = exports.cpacked = exports.cPacks = exports.cpacks = exports.cPack = exports.cpack = exports.cSuccessful = exports.csuccessful = exports.cSuccesses = exports.csuccesses = exports.cSuccess = exports.csuccess = exports.cCopying = exports.ccopying = exports.cCopied = exports.ccopied = exports.cCopies = exports.ccopies = exports.cCopy = exports.ccopy = exports.cCops = exports.ccops = exports.cCop = exports.ccop = exports.cArchiving = exports.carchiving = exports.cArchives = exports.carchives = exports.cArchived = exports.carchived = exports.cArchive = exports.carchive = exports.cChives = exports.cchives = exports.cChive = exports.cchive = exports.cDirectories = exports.cdirectories = exports.cDirectory = exports.cdirectory = exports.cDirectors = exports.cdirectors = exports.cDirecting = exports.cdirecting = exports.cDirector = exports.cdirector = exports.cDirected = exports.cdirected = exports.cDirects = exports.cdirects = exports.cDirect = exports.cdirect = exports.cScanning = exports.cscanning = exports.cScanned = exports.cscanned = exports.cScans = exports.cscans = exports.cScan = exports.cscan = exports.cWriting = exports.cwriting = exports.cWritten = exports.cwritten = exports.cWrites = exports.cwrites = exports.cWrite = exports.cwrite = exports.cReferencing = exports.creferencing = exports.cReferenced = exports.creferenced = void 0;
exports.cIncremented = exports.cincremented = exports.cIncrements = exports.cincrements = exports.cIncrement = exports.cincrement = exports.cEcho = exports.cecho = exports.cMiss = exports.cmiss = exports.cGot = exports.cgot = exports.cSlow = exports.cslow = exports.cPanic = exports.cpanic = exports.cBoss = exports.cboss = exports.cConsole = exports.cconsole = exports.cSole = exports.csole = exports.cLanguages = exports.clanguages = exports.cLanguage = exports.clanguage = exports.cKnots = exports.cknots = exports.cKnot = exports.cknot = exports.cCountries = exports.ccountries = exports.cCountry = exports.ccountry = exports.cLiver = exports.cliver = exports.cAmerica = exports.cStates = exports.cEmirates = exports.cArab = exports.cUnited = exports.cTabago = exports.cTrinidad = exports.cPapua = exports.cAfrican = exports.cCentral = exports.cRepublic = exports.cDemocratic = exports.cGeneration = exports.cgeneration = exports.cSuch = exports.csuch = exports.cOnly = exports.conly = exports.cMay = exports.cmay = exports.cEntity = exports.centity = exports.cEntries = exports.centries = exports.cEntry = exports.centry = exports.cLeaf = exports.cleaf = exports.cSleeping = exports.csleeping = exports.cSleeped = exports.csleeped = exports.cSleeps = exports.csleeps = exports.cSleep = exports.csleep = exports.cAdjusting = exports.cadjusting = exports.cAdjusted = exports.cadjusted = exports.cAdjusts = exports.cadjusts = exports.cAdjust = exports.cadjust = exports.cJustified = exports.cjustified = exports.cJustice = exports.cjustice = exports.cJust = exports.cjust = exports.cLexicons = exports.clexicons = exports.cLexicon = exports.clexicon = exports.cLexical = exports.clexical = exports.cExpressions = exports.cexpressions = exports.cExpression = exports.cexpression = exports.cRegular = exports.cregular = exports.cBracketing = exports.cbracketing = void 0;
exports.csilk = exports.cFlowers = exports.cflowers = exports.cFlower = exports.cflower = exports.cCool = exports.cColumbia = exports.cCoffee = exports.cCocoa = exports.cCinnamon = exports.cChrome = exports.cChestnut = exports.cBlossom = exports.cCherry = exports.cChartreuse = exports.cCharm = exports.cCharleston = exports.cCeltic = exports.cCeladon = exports.cChest = exports.cCedar = exports.cCastleton = exports.cCarrot = exports.cCarnation = exports.cCaribbean = exports.cMortuum = exports.cCaput = exports.cCameo = exports.cCambridge = exports.cCafe = exports.cCadet = exports.cBurnt = exports.cBurnished = exports.cBurly = exports.cBud = exports.cBrunswick = exports.cSugar = exports.cRacing = exports.cBrilliant = exports.cBright = exports.cBricks = exports.cbricks = exports.cBrick = exports.cbrick = exports.cBottle = exports.cYonder = exports.cJeans = exports.cWheels = exports.cwheels = exports.cWheel = exports.cwheel = exports.cBell = exports.cPigment = exports.cPantone = exports.cMunsell = exports.cCrayola = exports.cBlood = exports.cBlizzard = exports.cBlast = exports.cBlanched = exports.cShadows = exports.cChocolate = exports.cBean = exports.cShimmer = exports.cBittersweet = exports.cSweet = exports.csweet = exports.cBitter = exports.cDazzled = exports.cBeau = exports.cBattleship = exports.cBarn = exports.cBarbie = exports.cMania = exports.cBanana = exports.cMiller = exports.cBaker = exports.cPowder = exports.cEyes = exports.cBaby = exports.cAtomic = exports.cArylide = exports.cArmy = exports.cArctic = exports.cApricot = exports.cApple = exports.cBronze = exports.cBrass = exports.cAntique = exports.cAndroid = exports.cAmaranth = exports.cAlloy = exports.cAlice = exports.cAlabaster = exports.cSuperiority = exports.cAir = exports.cAcid = exports.cAbsolute = exports.cIncrementing = exports.cincrementing = void 0;
exports.cLuster = exports.cSteel = exports.cCoral = exports.cLight = exports.cMeringue = exports.cGlacier = exports.cCurry = exports.cLawn = exports.cLaurel = exports.cLaser = exports.cLazuli = exports.cLapis = exports.cLanguid = exports.cKombu = exports.cKelly = exports.cJam = exports.cjam = exports.cBerry = exports.cberry = exports.cJazz = exports.cjazz = exports.cCarmine = exports.cBridge = exports.cEngineering = exports.cAerospace = exports.cInternational = exports.cNationals = exports.cnationals = exports.cNational = exports.cnational = exports.cDye = exports.cIndian = exports.cIndependence = exports.cworm = exports.cImperial = exports.cIlluminating = exports.cIce = exports.cHunter = exports.cHot = exports.cHookers = exports.cHonolulu = exports.cdew = exports.cHoney = exports.cHollywood = exports.cWave = exports.cHeat = exports.cHarvest = exports.cGun = exports.cLizard = exports.cSmith = exports.cGranny = exports.cGranite = exports.cPoppy = exports.cFusion = exports.cMetallic = exports.cMetal = exports.cGlossy = exports.cGhost = exports.cWuzzy = exports.cFuzzy = exports.cbite = exports.cFrost = exports.cForest = exports.cFluorescent = exports.cFloral = exports.cEngine = exports.cFire = exports.cFiery = exports.cFern = exports.cFashion = exports.cFalu = exports.cEton = exports.cEerie = exports.cEarth = exports.cDutch = exports.cDuke = exports.cDogwood = exports.cDodger = exports.cDim = exports.cSparkle = exports.cCerise = exports.cDavys = exports.cDartmouth = exports.cSpring = exports.cSlate = exports.cSky = exports.cPastel = exports.cMoss = exports.cHorses = exports.cHorse = exports.cKhaki = exports.cElectric = exports.cByzantium = exports.cDark = exports.cCyber = exports.cCotton = exports.cCoyote = exports.cLatte = exports.cCosmic = exports.cSilk = void 0;
exports.cPullman = exports.cPsychedelic = exports.cPrussian = exports.cPrinceton = exports.cPortland = exports.cPower = exports.cPomp = exports.cPolished = exports.cpolished = exports.cPolish = exports.cpolish = exports.cPlump = exports.cSherbet = exports.cFlamingo = exports.cTree = exports.cPine = exports.cPiggy = exports.cPictorial = exports.cPicotee = exports.cPhthalo = exports.cPewter = exports.cPersian = exports.cLake = exports.cGeranium = exports.cPermanent = exports.cPearly = exports.cPuff = exports.cPaynes = exports.cParis = exports.cParadise = exports.cWhip = exports.cPapaya = exports.cVeronese = exports.cPaolo = exports.cPansy = exports.cPale = exports.cPalatinate = exports.cPacific = exports.cOxford = exports.cOutrageous = exports.cOuter = exports.cSoda = exports.cPeel = exports.cOpera = exports.cLace = exports.cOcean = exports.cPhoto = exports.cYork = exports.cNeon = exports.cNavy = exports.cNavajo = exports.cNaples = exports.cNadeshiko = exports.cMyrtle = exports.cMulberry = exports.cbatten = exports.cMount = exports.cMeadow = exports.cMorning = exports.cMisty = exports.cMinion = exports.cMimi = exports.cMikado = exports.cMiddle = exports.cMexican = exports.cSunburst = exports.cSuns = exports.csuns = exports.cSun = exports.csun = exports.cSeaweed = exports.cWeeded = exports.cweeded = exports.cWeeds = exports.cweeds = exports.cWeed = exports.cweed = exports.cMellow = exports.cMedium = exports.cMaya = exports.cMaximums = exports.cmaximums = exports.cMaximum = exports.cmaximum = exports.cMinimums = exports.cminimums = exports.cMinimum = exports.cminimum = exports.cMajorelle = exports.cMagic = exports.cHaze = exports.cMadder = exports.cCheese = exports.cMacaroni = exports.cOrgan = exports.cDogs = exports.cBoy = exports.cLittle = exports.cLiseran = exports.cLincoln = void 0;
exports.cDyke = exports.cVan = exports.cvan = exports.cUranian = exports.cUpsdell = exports.cNations = exports.cUnbleached = exports.cUltra = exports.cTyrian = exports.cTwilight = exports.cTumble = exports.cTufts = exports.cTrypan = exports.cRain = exports.cTropical = exports.cwolf = exports.cTimber = exports.cTiffany = exports.cTickle = exports.cThulian = exports.cCotta = exports.cTerra = exports.cTea = exports.cTart = exports.cTango = exports.cSuper = exports.cglow = exports.cGrain = exports.cStil = exports.cStar = exports.cBistre = exports.cSonic = exports.cSmoky = exports.cSlimy = exports.cSunrise = exports.cSizzling = exports.cChalice = exports.cShocking = exports.cShiny = exports.cBlush = exports.cShimmering = exports.cShamrock = exports.cSelective = exports.cshell = exports.cSeal = exports.cScreamin = exports.cBus = exports.cSchool = exports.cSchauss = exports.cSheen = exports.cSatin = exports.cSap = exports.csap = exports.cSandy = exports.cPatricks = exports.cBlaze = exports.cSafety = exports.cSaddle = exports.cState = exports.cSacramento = exports.cRubine = exports.cRubbing = exports.crubbing = exports.cRubbed = exports.crubbed = exports.cRubs = exports.crubs = exports.cRub = exports.crub = exports.cRoyal = exports.cRosy = exports.cCorsa = exports.cRosso = exports.cwood = exports.cVale = exports.cQuartz = exports.cEbony = exports.cDust = exports.cBonbon = exports.cRoman = exports.cRocket = exports.cEgg = exports.cRobin = exports.cRifle = exports.cRich = exports.cResolution = exports.cSalsa = exports.cRebecca = exports.cRazzmic = exports.cDazzle = exports.cRazzle = exports.cGlace = exports.cRaisin = exports.cRadical = exports.cQuinacridone = exports.cQuick = exports.cQueen = exports.cPizzazz = exports.cMajesty = exports.cMountain = void 0;
exports.cYale = exports.cDream = exports.cWinter = exports.cDregs = exports.cWindsor = exports.cWild = exports.cWarm = exports.cVivid = exports.cVenetian = exports.cVegas = void 0;

var bas = _interopRequireWildcard(require("./basic.constants"));

var phn = _interopRequireWildcard(require("./phonic.constants"));

var num = _interopRequireWildcard(require("./numeric.constants"));

var gen = _interopRequireWildcard(require("./generic.constants"));

var unt = _interopRequireWildcard(require("./unit.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file word.constants.js
 * @module word-constants
 * @description Contains many re-usable word constants.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:numeric-constants
 * @requires module:generic-constants
 * @requires module:unit-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Miscelaneious Words
var c1a1d = 'a' + 'd'; // ad // 'ca' & 'cd' is some how a reserved word.

exports.c1a1d = c1a1d;
var c3d = num.c3 + bas.cd; // 3d

exports.c3d = c3d;
var c3D = num.c3 + bas.cD; // 3D

exports.c3D = c3D;
var cout = bas.co + bas.cut; // out

exports.cout = cout;
var cOut = bas.cO + bas.cut; // Out

exports.cOut = cOut;
var cLog = bas.cL + bas.cog; // Log

exports.cLog = cLog;
var clog = bas.cl + bas.cog; // log

exports.clog = clog;
var cLogs = cLog + bas.cs; // Logs

exports.cLogs = cLogs;
var clogs = clog + bas.cs; // logs

exports.clogs = clogs;
var ckey = bas.ck + bas.cey; // key

exports.ckey = ckey;
var cKey = bas.cK + bas.cey; // Key

exports.cKey = cKey;
var ckeys = ckey + bas.cs; // keys

exports.ckeys = ckeys;
var cKeys = cKey + bas.cs; // Keys

exports.cKeys = cKeys;
var ckeyed = ckey + bas.ced; // keyed

exports.ckeyed = ckeyed;
var cKeyed = cKey + bas.ced; // Keyed

exports.cKeyed = cKeyed;
var ckeying = ckey + phn.cing; // keying

exports.ckeying = ckeying;
var cKeying = cKey + phn.cing; // Keying

exports.cKeying = cKeying;
var cnode = bas.cn + phn.code; // node

exports.cnode = cnode;
var cNode = bas.cN + phn.code; // Node

exports.cNode = cNode;
var curl = bas.cur + bas.cl; // url

exports.curl = curl;
var cURL = bas.cUR + bas.cL; // URL

exports.cURL = cURL;
var cnth = bas.cn + bas.cth; // nth

exports.cnth = cnth;
var cNth = bas.cN + bas.cth; // Nth

exports.cNth = cNth;
var cregEx = phn.creg + bas.cEx; // regEx

exports.cregEx = cregEx;
var cRegEx = phn.cReg + bas.cEx; // RegEx

exports.cRegEx = cRegEx;
var cflag = bas.cfl + bas.cag; // flag

exports.cflag = cflag;
var cFlag = bas.cFl + bas.cag; // Flag

exports.cFlag = cFlag;
var cflags = cflag + bas.cs; // flags

exports.cflags = cflags;
var cFlags = cFlag + bas.cs; // Flags
// Data Types

exports.cFlags = cFlags;
var cstring = bas.cs + phn.ctring; // string

exports.cstring = cstring;
var cString = bas.cS + phn.ctring; // String

exports.cString = cString;
var cstrings = cstring + bas.cs; // strings

exports.cstrings = cstrings;
var cStrings = cString + bas.cs; // Strings

exports.cStrings = cStrings;
var cinteger = bas.ci + phn.cnteger; // integer

exports.cinteger = cinteger;
var cInteger = bas.cI + phn.cnteger; // Integer

exports.cInteger = cInteger;
var cintegers = cinteger + bas.cs; // integers

exports.cintegers = cintegers;
var cIntegers = cInteger + bas.cs; // Integers

exports.cIntegers = cIntegers;
var cfloat = bas.cf + phn.cloat; // float

exports.cfloat = cfloat;
var cFloat = bas.cF + phn.cloat; // Float

exports.cFloat = cFloat;
var cfloats = cfloat + bas.cs; // floats

exports.cfloats = cfloats;
var cFloats = cFloat + bas.cs; // Floats

exports.cFloats = cFloats;
var clong = bas.cl + phn.cong; // long

exports.clong = clong;
var cLong = bas.cL + phn.cong; // Long

exports.cLong = cLong;
var clongs = clong + bas.cs; // longs

exports.clongs = clongs;
var cLongs = cLong + bas.cs; // Longs

exports.cLongs = cLongs;
var clonger = clong + bas.cer; // longer

exports.clonger = clonger;
var cLonger = cLong + bas.cer; // Longer

exports.cLonger = cLonger;
var clongest = clong + phn.cest; // longest

exports.clongest = clongest;
var cLongest = cLong + phn.cest; // Longest

exports.cLongest = cLongest;
var cshort = bas.cs + phn.chort; // short

exports.cshort = cshort;
var cShort = bas.cS + phn.chort; // Short

exports.cShort = cShort;
var cshorts = cshort + bas.cs; // shorts

exports.cshorts = cshorts;
var cShorts = cShort + bas.cs; // Shorts

exports.cShorts = cShorts;
var cshorter = cshort + bas.cer; // shorter

exports.cshorter = cshorter;
var cShorter = cShort + bas.cer; // Shorter

exports.cShorter = cShorter;
var cshortest = cshort + phn.cest; // shortest

exports.cshortest = cshortest;
var cShortest = cShort + phn.cest; // Shortest

exports.cShortest = cShortest;
var cdouble = bas.cd + phn.couble; // double

exports.cdouble = cdouble;
var cDouble = bas.cD + phn.couble; // Double

exports.cDouble = cDouble;
var cdoubles = cdouble + bas.cs; // doubles

exports.cdoubles = cdoubles;
var cDoubles = cDouble + bas.cs; // Doubles

exports.cDoubles = cDoubles;
var cchar = bas.cch + bas.car; // char

exports.cchar = cchar;
var cChar = bas.cCh + bas.car; // Char

exports.cChar = cChar;
var cchars = cchar + bas.cs; // chars

exports.cchars = cchars;
var cChars = cChar + bas.cs; // Chars

exports.cChars = cChars;
var cboolean = bas.cb + phn.coolean; // boolean

exports.cboolean = cboolean;
var cBoolean = bas.cB + phn.coolean; // Boolean

exports.cBoolean = cBoolean;
var cbooleans = cboolean + bas.cs; // booleans

exports.cbooleans = cbooleans;
var cBooleans = cBoolean + bas.cs; // Booleans

exports.cBooleans = cBooleans;
var cobject = bas.co + phn.cbject; // object

exports.cobject = cobject;
var cObject = bas.cO + phn.cbject; // Object

exports.cObject = cObject;
var cobjects = cobject + bas.cs; // objects

exports.cobjects = cobjects;
var cObjects = cObject + bas.cs; // Objects
// General Use Words

exports.cObjects = cObjects;
var csubstring = phn.csub + cstring; // substring

exports.csubstring = csubstring;
var csubString = phn.csub + cString; // subString

exports.csubString = csubString;
var cSubString = phn.cSub + cString; // SubString

exports.cSubString = cSubString;
var cwind = bas.cw + phn.cind; // wind

exports.cwind = cwind;
var cWind = bas.cW + phn.cind; // Wind

exports.cWind = cWind;
var cwindow = cwind + bas.cow; // window

exports.cwindow = cwindow;
var cWindow = cWind + bas.cow; // Window

exports.cWindow = cWindow;
var cwindows = cwindow + bas.cs; // windows

exports.cwindows = cwindows;
var cWindows = cWindow + bas.cs; // Windows

exports.cWindows = cWindows;
var clinux = phn.clin + bas.cux; // linux

exports.clinux = clinux;
var cLinux = phn.cLin + bas.cux; // Linux

exports.cLinux = cLinux;
var cword = bas.cw + phn.cord; // word

exports.cword = cword;
var cWord = bas.cW + phn.cord; // Word

exports.cWord = cWord;
var cwords = cword + bas.cs; // words

exports.cwords = cwords;
var cWords = cWord + bas.cs; // Words

exports.cWords = cWords;
var coops = bas.co + phn.cops; // oops

exports.coops = coops;
var cOops = bas.cO + phn.cops; // Oops

exports.cOops = cOops;
var cOOPS = bas.cO + phn.cOPS; // OOPS

exports.cOOPS = cOOPS;
var clet = bas.cle + bas.ct; // let

exports.clet = clet;
var cLet = bas.cLe + bas.ct; // Let

exports.cLet = cLet;
var clets = clet + bas.cs; // lets

exports.clets = clets;
var cLets = cLet + bas.cs; // Lets

exports.cLets = cLets;
var cfig = bas.cf + bas.cig; // fig

exports.cfig = cfig;
var cFig = bas.cF + bas.cig; // Fig

exports.cFig = cFig;
var cfiglet = cfig + clet; // figlet

exports.cfiglet = cfiglet;
var cFiglet = cFig + clet; // Figlet

exports.cFiglet = cFiglet;
var cconfig = phn.ccon + cfig; // config

exports.cconfig = cconfig;
var cConfig = phn.cCon + cfig; // Config

exports.cConfig = cConfig;
var cconfiguration = cconfig + bas.cur + phn.cation; // configuration

exports.cconfiguration = cconfiguration;
var cConfiguration = cConfig + bas.cur + phn.cation; // Configuration

exports.cConfiguration = cConfiguration;
var cconfigurations = cconfiguration + bas.cs; // configurations

exports.cconfigurations = cconfigurations;
var cConfigurations = cConfiguration + bas.cs; // Configurations

exports.cConfigurations = cConfigurations;
var cconfigured = cconfig + phn.cured; // configured

exports.cconfigured = cconfigured;
var cConfigured = cConfig + phn.cured; // Configured

exports.cConfigured = cConfigured;
var cconfiguring = cconfig + bas.cur + phn.cing; // configuring

exports.cconfiguring = cconfiguring;
var cConfiguring = cConfig + bas.cur + phn.cing; // Configuring

exports.cConfiguring = cConfiguring;
var cempty = bas.cem + bas.cpt + bas.cy; // empty

exports.cempty = cempty;
var cEmpty = bas.cEm + bas.cpt + bas.cy; // Empty

exports.cEmpty = cEmpty;
var cfull = bas.cf + phn.cull; // full

exports.cfull = cfull;
var cFull = bas.cF + phn.cull; // Full

exports.cFull = cFull;
var cfully = cfull + bas.cy; // fully

exports.cfully = cfully;
var cFully = cFull + bas.cy; // Fully

exports.cFully = cFully;
var ccreate = bas.cc + phn.create; // create

exports.ccreate = ccreate;
var cCreate = bas.cC + phn.create; // Create

exports.cCreate = cCreate;
var cSubmit = bas.cSu + bas.cbm + bas.cit; // Submit

exports.cSubmit = cSubmit;
var c_add = c1a1d + bas.cd; // add

exports.c_add = c_add;
var cAdd = bas.cAd + bas.cd; // Add

exports.cAdd = cAdd;
var cADD = bas.cAD + bas.cD; // ADD

exports.cADD = cADD;
var cadded = c_add + bas.ced; // added

exports.cadded = cadded;
var cAdded = cAdd + bas.ced; // Added

exports.cAdded = cAdded;
var cadding = c_add + phn.cing; // adding

exports.cadding = cadding;
var cAdding = cAdd + phn.cing; // Adding

exports.cAdding = cAdding;
var cadditional = c_add + phn.cition + bas.cal; // additional

exports.cadditional = cadditional;
var cAdditional = cAdd + phn.cition + bas.cal; // Additional

exports.cAdditional = cAdditional;
var cADDITIONAL = cADD + phn.cITION + bas.cAL; // ADDITIONAL

exports.cADDITIONAL = cADDITIONAL;
var cadditionals = cadditional + bas.cs; // additionals

exports.cadditionals = cadditionals;
var cAdditionals = cAdditional + bas.cs; // Additionals

exports.cAdditionals = cAdditionals;
var cpen = bas.cpe + bas.cn; // pen

exports.cpen = cpen;
var cPen = bas.cPe + bas.cn; // Pen

exports.cPen = cPen;
var cpens = cpen + bas.cs; // pens

exports.cpens = cpens;
var cPens = cPen + bas.cs; // Pens

exports.cPens = cPens;
var cclose = bas.ccl + phn.cose; // close

exports.cclose = cclose;
var cClose = bas.cCl + phn.cose; // Close

exports.cClose = cClose;
var cclosed = cclose + bas.cd; // closed

exports.cclosed = cclosed;
var cClosed = cClose + bas.cd; // Closed

exports.cClosed = cClosed;
var cclosing = bas.ccl + bas.cos + phn.cing; // closing

exports.cclosing = cclosing;
var cClosing = bas.cCl + bas.cos + phn.cing; // Closing

exports.cClosing = cClosing;
var copen = bas.co + cpen; // open

exports.copen = copen;
var cOpen = bas.cO + cpen; // Open

exports.cOpen = cOpen;
var copens = copen + bas.cs; // opens

exports.copens = copens;
var cOpens = cOpen + bas.cs; // Opens

exports.cOpens = cOpens;
var copened = copen + bas.ced; // opened

exports.copened = copened;
var cOpened = cOpen + bas.ced; // Opened

exports.cOpened = cOpened;
var copening = copen + phn.cing; // opening

exports.copening = copening;
var cOpening = cOpen + phn.cing; // Opening

exports.cOpening = cOpening;
var cUpdate = bas.cUp + phn.cdate; // Update

exports.cUpdate = cUpdate;
var cEdit = bas.cEd + bas.cit; // Edit

exports.cEdit = cEdit;
var cdelete = bas.cd + phn.celete; // delete

exports.cdelete = cdelete;
var cDelete = bas.cD + phn.celete; // Delete

exports.cDelete = cDelete;
var cdeletion = phn.cdel + bas.ce + phn.ction; // deletion

exports.cdeletion = cdeletion;
var cDeletion = phn.cDel + bas.ce + phn.ction; // Deletion

exports.cDeletion = cDeletion;
var cinsert = bas.cin + phn.csert; // insert

exports.cinsert = cinsert;
var cInsert = bas.cIn + phn.csert; // Insert

exports.cInsert = cInsert;
var cinsertion = cinsert + phn.cion; // insertion

exports.cinsertion = cinsertion;
var cInsertion = cInsert + phn.cion; // Insertion

exports.cInsertion = cInsertion;
var csubstitute = phn.csub + bas.cs + phn.ctit + phn.cute; // substitute

exports.csubstitute = csubstitute;
var cSubstitute = phn.cSub + bas.cs + phn.ctit + phn.cute; // Substitute

exports.cSubstitute = cSubstitute;
var csubstitution = phn.csub + bas.cs + phn.ctit + bas.cu + phn.ction; // substitution

exports.csubstitution = csubstitution;
var cSubstitution = phn.cSub + bas.cs + phn.ctit + bas.cu + phn.ction; // Substitution

exports.cSubstitution = cSubstitution;
var call = phn.call; // all

exports.call = call;
var cAll = phn.cAll; // All

exports.cAll = cAll;
var cat = bas.ca + bas.ct; // at

exports.cat = cat;
var cAt = bas.cA + bas.ct; // At // Not to be confused with the bas.cAt = '@'!!!

exports.cAt = cAt;
var cselect = bas.cse + bas.cle + bas.cct; // select

exports.cselect = cselect;
var cSelect = bas.cSe + bas.cle + bas.cct; // Select

exports.cSelect = cSelect;
var ccan = bas.cca + bas.cn; // can

exports.ccan = ccan;
var cCan = bas.cCa + bas.cn; // Can

exports.cCan = cCan;
var ccancel = ccan + phn.ccel; // cancel

exports.ccancel = ccancel;
var cCancel = cCan + phn.ccel; // Cancel

exports.cCancel = cCancel;
var cconfirm = bas.cco + bas.cnf + bas.cir + bas.cm; // confirm

exports.cconfirm = cconfirm;
var cConfirm = bas.cCo + bas.cnf + bas.cir + bas.cm; // Confirm

exports.cConfirm = cConfirm;
var ccount = bas.cco + phn.cunt; // count

exports.ccount = ccount;
var cCount = bas.cCo + phn.cunt; // Count

exports.cCount = cCount;
var ccounter = ccount + bas.cer; // counter

exports.ccounter = ccounter;
var cCounter = cCount + bas.cer; // Counter

exports.cCounter = cCounter;
var cAccount = bas.cAc + ccount; // Account

exports.cAccount = cAccount;
var cHamburger = bas.cHa + bas.cmb + bas.cur + bas.cge + bas.cr; // Hamburger

exports.cHamburger = cHamburger;
var cMe = bas.cM + bas.ce; // Me

exports.cMe = cMe;
var cMenu = cMe + bas.cnu; // Menu

exports.cMenu = cMenu;
var cwith = bas.cw + phn.cith; // with

exports.cwith = cwith;
var cWith = bas.cW + phn.cith; // With

exports.cWith = cWith;
var cwithout = cwith + cout; // without

exports.cwithout = cwithout;
var cWithout = cWith + cout; // Without

exports.cWithout = cWithout;
var cdetail = bas.cde + bas.cta + bas.cil; // detail

exports.cdetail = cdetail;
var cDetail = bas.cDe + bas.cta + bas.cil; // Detail

exports.cDetail = cDetail;
var cdetails = cdetail + bas.cs; // details

exports.cdetails = cdetails;
var cDetails = cDetail + bas.cs; // Details

exports.cDetails = cDetails;
var cfront = bas.cfr + bas.con + bas.ct; // front

exports.cfront = cfront;
var cFront = bas.cFr + bas.con + bas.ct; // Front

exports.cFront = cFront;
var cback = bas.cba + bas.cck; // back

exports.cback = cback;
var cBack = bas.cBa + bas.cck; // Back

exports.cBack = cBack;
var cleft = bas.cle + bas.cft; // left

exports.cleft = cleft;
var cLeft = bas.cLe + bas.cft; // Left

exports.cLeft = cLeft;
var cright = bas.cri + bas.cgh + bas.ct; // right

exports.cright = cright;
var cRight = bas.cRi + bas.cgh + bas.ct; // Right

exports.cRight = cRight;
var cTo = bas.cTo; // To

exports.cTo = cTo;
var ctop = bas.cto + bas.cp; // top

exports.ctop = ctop;
var cTop = cTo + bas.cp; // Top

exports.cTop = cTop;
var cbottom = bas.cbo + bas.ctt + bas.com; // bottom

exports.cbottom = cbottom;
var cBottom = bas.cBo + bas.ctt + bas.com; // Bottom

exports.cBottom = cBottom;
var cbegin = bas.cbe + bas.cgi + bas.cn; // begin

exports.cbegin = cbegin;
var cBegin = bas.cBe + bas.cgi + bas.cn; // Begin

exports.cBegin = cBegin;
var cBEGIN = bas.cBE + bas.cGI + bas.cN; // BEGIN

exports.cBEGIN = cBEGIN;
var cbeginning = cbegin + bas.cn + phn.cing; // beginning

exports.cbeginning = cbeginning;
var cBeginning = cBegin + bas.cn + phn.cing; // Beginning

exports.cBeginning = cBeginning;
var cend = bas.cen + bas.cd; // end

exports.cend = cend;
var cEnd = bas.cEn + bas.cd; // End

exports.cEnd = cEnd;
var cEND = bas.cEN + bas.cD; // END

exports.cEND = cEND;
var cending = cend + phn.cing; // ending

exports.cending = cending;
var cEnding = cEnd + phn.cing; // Ending

exports.cEnding = cEnding;
var cthe = bas.cth + bas.ce; // the

exports.cthe = cthe;
var cThe = bas.cTh + bas.ce; // The

exports.cThe = cThe;
var citem = bas.cit + bas.cem; // item

exports.citem = citem;
var cItem = bas.cIt + bas.cem; // Item

exports.cItem = cItem;
var citems = citem + bas.cs; // items

exports.citems = citems;
var cItems = cItem + bas.cs; // Items

exports.cItems = cItems;
var clist = bas.cli + bas.cst; // list

exports.clist = clist;
var cList = bas.cLi + bas.cst; // List

exports.cList = cList;
var clists = clist + bas.cs; // lists

exports.clists = clists;
var cLists = cList + bas.cs; // Lists

exports.cLists = cLists;
var clisted = clist + bas.ced; // listed

exports.clisted = clisted;
var cListed = cList + bas.ced; // Listed

exports.cListed = cListed;
var cshare = bas.cs + phn.chare; // share

exports.cshare = cshare;
var cShare = bas.cS + phn.chare; // Share

exports.cShare = cShare;
var cShares = cShare + bas.cs; // Shares

exports.cShares = cShares;
var cshares = cshare + bas.cs; // shares

exports.cshares = cshares;
var cshared = cshare + bas.cd; // shared

exports.cshared = cshared;
var cShared = cShare + bas.cd; // Shared

exports.cShared = cShared;
var cUnShared = bas.cUn + cShared; // UnShared

exports.cUnShared = cUnShared;
var cUnshared = bas.cUn + cshared; // Unshared

exports.cUnshared = cUnshared;
var cUnshare = bas.cUn + cshare; // Unshare

exports.cUnshare = cUnshare;
var cUnShare = bas.cUn + cShare; // UnShare

exports.cUnShare = cUnShare;
var cview = bas.cv + phn.ciew; // view

exports.cview = cview;
var cView = bas.cV + phn.ciew; // View

exports.cView = cView;
var cNew = bas.cNe + bas.cw; // New

exports.cNew = cNew;
var cload = bas.clo + 'ad'; // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.

exports.cload = cload;
var cLoad = bas.cLo + 'ad'; // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.

exports.cLoad = cLoad;
var cloads = cload + bas.cs; // loads

exports.cloads = cloads;
var cLoads = cLoad + bas.cs; // Loads

exports.cLoads = cLoads;
var cloaded = cload + bas.ced; // loaded

exports.cloaded = cloaded;
var cLoaded = cLoad + bas.ced; // Loaded

exports.cLoaded = cLoaded;
var cloading = cload + phn.cing; // loading

exports.cloading = cloading;
var cLoading = cLoad + phn.cing; // Loading

exports.cLoading = cLoading;
var cclick = bas.cc + phn.click; // click

exports.cclick = cclick;
var cClick = bas.cC + phn.click; // Click

exports.cClick = cClick;
var cpress = bas.cp + phn.cress; // press

exports.cpress = cpress;
var cPress = bas.cP + phn.cress; // Press

exports.cPress = cPress;
var cpresses = cpress + bas.ces; // presses

exports.cpresses = cpresses;
var cPresses = cPress + bas.ces; // Presses

exports.cPresses = cPresses;
var cpressed = cpress + bas.ced; // pressed

exports.cpressed = cpressed;
var cPressed = cPress + bas.ced; // Pressed

exports.cPressed = cPressed;
var cpressing = cpress + phn.cing; // pressing

exports.cpressing = cpressing;
var cPressing = cPress + phn.cing; // Pressing

exports.cPressing = cPressing;
var cpressKey = cpress + cKey; // pressKey

exports.cpressKey = cpressKey;
var cPressKey = cPress + cKey; // PressKey

exports.cPressKey = cPressKey;
var cexpect = phn.cexp + phn.cect; // expect

exports.cexpect = cexpect;
var cExpect = phn.cExp + phn.cect; // Expect

exports.cExpect = cExpect;
var cexpects = cexpect + bas.cs; // expects

exports.cexpects = cexpects;
var cExpects = cExpect + bas.cs; // Expects

exports.cExpects = cExpects;
var cexpected = cexpect + bas.ced; // expected

exports.cexpected = cexpected;
var cExpected = cExpect + bas.ced; // Expected

exports.cExpected = cExpected;
var cexpecting = cexpect + phn.cing; // expecting

exports.cexpecting = cexpecting;
var cExpecting = cExpect + phn.cing; // Expecting

exports.cExpecting = cExpecting;
var cnavigate = bas.cn + phn.cavigate; // navigate

exports.cnavigate = cnavigate;
var cNavigate = bas.cN + phn.cavigate; // Navigate

exports.cNavigate = cNavigate;
var csave = bas.cs + phn.cave; // Save

exports.csave = csave;
var cSave = bas.cS + phn.cave; // Save

exports.cSave = cSave;
var cDownload = bas.cDo + bas.cwn + bas.clo + 'ad'; // Download

exports.cDownload = cDownload;
var cNegative = bas.cNe + bas.cga + phn.ctive; // Negative

exports.cNegative = cNegative;
var cPositive = bas.cPo + bas.csi + phn.ctive; // Positive

exports.cPositive = cPositive;
var cEntire = bas.cEn + bas.cti + bas.cre; // Entire

exports.cEntire = cEntire;
var cinfo = bas.cin + bas.cfo; // info

exports.cinfo = cinfo;
var cInfo = bas.cIn + bas.cfo; // Info

exports.cInfo = cInfo;
var cLink = bas.cLi + bas.cnk; // Link

exports.cLink = cLink;
var cLabel = bas.cLa + bas.cbe + bas.cl; // Label

exports.cLabel = cLabel;
var cField = bas.cFi + bas.cel + bas.cd; // Field

exports.cField = cField;
var ctype = bas.ct + phn.cype; // type

exports.ctype = ctype;
var cType = bas.cT + phn.cype; // Type

exports.cType = cType;
var cTypes = cType + bas.cs; // Types

exports.cTypes = cTypes;
var cvalid = bas.cv + phn.calid; // valid

exports.cvalid = cvalid;
var cValid = bas.cV + phn.calid; // Valid

exports.cValid = cValid;
var cVALID = bas.cV + phn.cALID; // VALID

exports.cVALID = cVALID;
var cvalidation = cvalid + bas.ca + phn.ction; // validation

exports.cvalidation = cvalidation;
var cValidation = cValid + bas.ca + phn.ction; // Validation

exports.cValidation = cValidation;
var cvalidations = cvalidation + bas.cs; // validations

exports.cvalidations = cvalidations;
var cValidations = cValidation + bas.cs; // Validations

exports.cValidations = cValidations;
var cvalidate = bas.cva + bas.cli + phn.cdate; // validate

exports.cvalidate = cvalidate;
var cValidate = bas.cVa + bas.cli + phn.cdate; // Validate

exports.cValidate = cValidate;
var cinvalid = bas.cin + cvalid; // invalid

exports.cinvalid = cinvalid;
var cInvalid = bas.cIn + cvalid; // Invalid

exports.cInvalid = cInvalid;
var cINVALID = bas.cIN + cVALID; // INVALID

exports.cINVALID = cINVALID;
var cbug = bas.cbu + bas.cg; // bug

exports.cbug = cbug;
var cdebug = bas.cde + cbug; // debug

exports.cdebug = cdebug;
var cDebug = bas.cDe + cbug; // Debug

exports.cDebug = cDebug;
var cpage = bas.cp + phn.cage; // page

exports.cpage = cpage;
var cPage = bas.cP + phn.cage; // Page

exports.cPage = cPage;
var cpages = cpage + bas.cs; // pages

exports.cpages = cpages;
var cPages = cPage + bas.cs; // Pages

exports.cPages = cPages;
var cmessage = bas.cme + bas.css + phn.cage; // message

exports.cmessage = cmessage;
var cMessage = cMe + bas.css + phn.cage; // Message

exports.cMessage = cMessage;
var cmessages = cmessage + bas.cs; // messages

exports.cmessages = cmessages;
var cMessages = cMessage + bas.cs; // Messages

exports.cMessages = cMessages;
var cScript = bas.cSc + bas.cri + bas.cpt; // Script

exports.cScript = cScript;
var cScripts = cScript + bas.cs; // Scripts

exports.cScripts = cScripts;
var ckeyword = ckey + cword; // keyword

exports.ckeyword = ckeyword;
var cKeyword = cKey + cword; // Keyword

exports.cKeyword = cKeyword;
var ckeywords = ckeyword + bas.cs; // keywords

exports.ckeywords = ckeywords;
var cKeywords = cKeyword + bas.cs; // Keywords

exports.cKeywords = cKeywords;
var cdata = bas.cd + phn.cata; // data

exports.cdata = cdata;
var cData = bas.cD + phn.cata; // Data

exports.cData = cData;
var cDATA = bas.cD + phn.cATA; // DATA

exports.cDATA = cDATA;
var cresult = phn.cres + phn.cult; // result

exports.cresult = cresult;
var cResult = phn.cRes + phn.cult; // Result

exports.cResult = cResult;
var cresults = cresult + bas.cs; // results

exports.cresults = cresults;
var cResults = cResult + bas.cs; // Results

exports.cResults = cResults;
var cresulted = cresult + bas.ced; // resulted

exports.cresulted = cresulted;
var cResulted = cResult + bas.ced; // Resulted

exports.cResulted = cResulted;
var cresulting = cresult + phn.cing; // resulting

exports.cresulting = cresulting;
var cResulting = cResult + phn.cing; // Resulting

exports.cResulting = cResulting;
var cwork = bas.cwo + bas.crk; // work

exports.cwork = cwork;
var cWork = bas.cWo + bas.crk; // Work

exports.cWork = cWork;
var cflow = bas.cfl + bas.cow; // flow

exports.cflow = cflow;
var cFlow = bas.cFl + bas.cow; // Flow

exports.cFlow = cFlow;
var cworkflow = cwork + cflow; // workflow

exports.cworkflow = cworkflow;
var cWorkflow = cWork + cflow; // Workflow

exports.cWorkflow = cWorkflow;
var cworkflows = cworkflow + bas.cs; // workflows

exports.cworkflows = cworkflows;
var cWorkflows = cWorkflow + bas.cs; // Workflows

exports.cWorkflows = cWorkflows;
var ctest = bas.ct + phn.cest; // test

exports.ctest = ctest;
var cTest = bas.cT + phn.cest; // Test

exports.cTest = cTest;
var cTEST = bas.cTE + bas.cST; // TEST

exports.cTEST = cTEST;
var ctests = ctest + bas.cs; // tests

exports.ctests = ctests;
var cTests = cTest + bas.cs; // Tests

exports.cTests = cTests;
var cTESTS = cTEST + bas.cS; // TESTS

exports.cTESTS = cTESTS;
var cStatus = bas.cSt + bas.cat + bas.cus; // Status

exports.cStatus = cStatus;
var cTestStatus = cTest + cStatus; // TestStatus

exports.cTestStatus = cTestStatus;
var cTestStatusMessage = cTest + cStatus + cMessage; // TestStatusMessage

exports.cTestStatusMessage = cTestStatusMessage;
var cTestWorkflow = cTest + cWorkflow; // TestWorkflow

exports.cTestWorkflow = cTestWorkflow;
var cBureau = bas.cBu + bas.cre + bas.cau; // Bureau

exports.cBureau = cBureau;
var cExhaustive = bas.cEx + bas.cha + bas.cus + bas.cti + bas.cve; // Exhaustive

exports.cExhaustive = cExhaustive;
var cBrowser = bas.cBr + bas.cow + bas.cse + bas.cr; // Browser

exports.cBrowser = cBrowser;
var cact = bas.cac + bas.ct; // act

exports.cact = cact;
var cAct = bas.cAc + bas.ct; // Act

exports.cAct = cAct;
var caction = cact + phn.cion; // action

exports.caction = caction;
var cAction = cAct + phn.cion; // Action

exports.cAction = cAction;
var cactions = caction + bas.cs; // actions

exports.cactions = cactions;
var cActions = cAction + bas.cs; // Actions

exports.cActions = cActions;
var cactual = cact + phn.cual; // actual

exports.cactual = cactual;
var cActual = cAct + phn.cual; // Actual

exports.cActual = cActual;
var cauto = bas.ca + phn.cuto; // auto

exports.cauto = cauto;
var cAuto = bas.cA + phn.cuto; // Auto

exports.cAuto = cAuto;
var cautomation = cauto + phn.cmation; // automation

exports.cautomation = cautomation;
var cAutomation = cAuto + phn.cmation; // Automation

exports.cAutomation = cAutomation;
var cnumber = bas.cn + phn.cumber; // number

exports.cnumber = cnumber;
var cNumber = bas.cN + phn.cumber; // Number

exports.cNumber = cNumber;
var cHost = bas.cHo + bas.cst; // Host

exports.cHost = cHost;
var cOf = bas.cOf; // Of

exports.cOf = cOf;
var crow = bas.cro + bas.cw; // row

exports.crow = crow;
var cRow = bas.cRo + bas.cw; // Row

exports.cRow = cRow;
var crows = crow + bas.cs; // rows

exports.crows = crows;
var cRows = cRow + bas.cs; // Rows

exports.cRows = cRows;
var crowed = crow + bas.ced; // rowed

exports.crowed = crowed;
var cRowed = cRow + bas.ced; // Rowed

exports.cRowed = cRowed;
var crowing = crow + phn.cing; // rowing

exports.crowing = crowing;
var cRowing = cRow + phn.cing; // Rowing

exports.cRowing = cRowing;
var crun = bas.cru + bas.cn; // run

exports.crun = crun;
var cRun = bas.cRu + bas.cn; // Run

exports.cRun = cRun;
var cruns = crun + bas.cs; // runs

exports.cruns = cruns;
var cRuns = cRun + bas.cs; // Runs

exports.cRuns = cRuns;
var crunning = crun + bas.cn + phn.cing; // running

exports.crunning = crunning;
var cRunning = cRun + bas.cn + phn.cing; // Running

exports.cRunning = cRunning;
var cmaster = phn.cmas + phn.cter; // master

exports.cmaster = cmaster;
var cMaster = phn.cMas + phn.cter; // Master

exports.cMaster = cMaster;
var cEnvironment = bas.cEn + bas.cvi + bas.cro + bas.cn + phn.cment; // Environment

exports.cEnvironment = cEnvironment;
var cname = bas.cn + phn.came; // name

exports.cname = cname;
var cName = bas.cN + phn.came; // Name

exports.cName = cName;
var cnames = cname + bas.cs; // names

exports.cnames = cnames;
var cNames = cName + bas.cs; // Names

exports.cNames = cNames;
var cnamed = cname + bas.cd; // named

exports.cnamed = cnamed;
var cNamed = cName + bas.cd; // Named

exports.cNamed = cNamed;
var ckeywordName = ckeyword + cName; // keywordName

exports.ckeywordName = ckeywordName;
var cKeywordName = cKeyword + cName; // KeywordName

exports.cKeywordName = cKeywordName;
var cPageScriptName = cPage + cScript + cName; // PageScriptName

exports.cPageScriptName = cPageScriptName;
var cid = bas.cid; // id

exports.cid = cid;
var cId = bas.cId; // Id

exports.cId = cId;
var cID = bas.cID; // ID

exports.cID = cID;
var cmail = bas.cma + bas.cil; // mail

exports.cmail = cmail;
var cEmail = bas.cE + cmail; // Email

exports.cEmail = cEmail;
var cEmails = cEmail + bas.cs; // Emails

exports.cEmails = cEmails;
var cReceive = bas.cRe + bas.cce + bas.civ + bas.ce; // Receive

exports.cReceive = cReceive;
var cReceived = cReceive + bas.cd; // Received

exports.cReceived = cReceived;
var cdate = phn.cdate; // date

exports.cdate = cdate;
var cDate = bas.cD + phn.cate; // Date

exports.cDate = cDate;
var ctime = bas.ct + phn.cime; // time

exports.ctime = ctime;
var cTime = bas.cT + phn.cime; // Time

exports.cTime = cTime;
var cruntime = crun + ctime; // runtime

exports.cruntime = cruntime;
var cRuntime = cRun + ctime; // Runtime

exports.cRuntime = cRuntime;
var cRunTime = cRun + cTime; // RunTime

exports.cRunTime = cRunTime;
var cstamp = bas.cst + phn.camp; // stamp

exports.cstamp = cstamp;
var cStamp = bas.cSt + phn.camp; // Stamp

exports.cStamp = cStamp;
var cstamps = cstamp + bas.cs; // stamps

exports.cstamps = cstamps;
var cStamps = cStamp + bas.cs; // Stamps

exports.cStamps = cStamps;
var cstamped = cstamp + bas.ced; // stamped

exports.cstamped = cstamped;
var cStamped = cStamp + bas.ced; // Stamped

exports.cStamped = cStamped;
var cstamping = cstamp + phn.cing; // stamping

exports.cstamping = cstamping;
var cStamping = cStamp + phn.cing; // Stamping

exports.cStamping = cStamping;
var cmediate = phn.cmed + bas.ci + phn.cate; // mediate

exports.cmediate = cmediate;
var cintermediate = phn.cinter + cmediate; // intermediate

exports.cintermediate = cintermediate;
var cIntermediate = phn.cInter + cmediate; // Intermediate

exports.cIntermediate = cIntermediate;
var cpath = bas.cp + phn.cath; // path

exports.cpath = cpath;
var cPath = bas.cP + phn.cath; // Path

exports.cPath = cPath;
var cexit = bas.cex + bas.cit; // exit

exports.cexit = cexit;
var cExit = bas.cEx + bas.cit; // Exit

exports.cExit = cExit;
var cexiting = cexit + phn.cing; // exiting

exports.cexiting = cexiting;
var cExiting = cExit + phn.cing; // Exiting

exports.cExiting = cExiting;
var cViewer = bas.cVi + bas.cew + bas.cer; // Viewer

exports.cViewer = cViewer;
var cPermission = bas.cPe + bas.crm + bas.cis + bas.csi + bas.con; // Permission

exports.cPermission = cPermission;
var cBug = bas.cBu + bas.cg; // Bug

exports.cBug = cBug;
var cset = bas.cse + bas.ct; // set

exports.cset = cset;
var cSet = bas.cSe + bas.ct; // Set

exports.cSet = cSet;
var csetting = cset + bas.ct + phn.cing; // setting

exports.csetting = csetting;
var cSetting = cSet + bas.ct + phn.cing; // Setting

exports.cSetting = cSetting;
var cPreview = phn.cPre + cview; // Preview

exports.cPreview = cPreview;
var climit = bas.cli + phn.cmit; // limit // NOTE: bas.cmi resolves as "s"

exports.climit = climit;
var cLimit = bas.cLi + phn.cmit; // Limit // NOTE: bas.cmi resolves as "s"

exports.cLimit = cLimit;
var cGate = bas.cGa + bas.cte; // Gate

exports.cGate = cGate;
var cway = bas.cwa + bas.cy; // way

exports.cway = cway;
var cWay = bas.cWa + bas.cy; // Way

exports.cWay = cWay;
var cGateway = cGate + cway; // Gateway

exports.cGateway = cGateway;
var cprocess = phn.cpro + phn.ccess; // process

exports.cprocess = cprocess;
var cProcess = phn.cPro + phn.ccess; // Process

exports.cProcess = cProcess;
var cPROCESS = phn.cPRO + phn.cCESS; // PROCESS

exports.cPROCESS = cPROCESS;
var cprocessed = cprocess + bas.ced; // processed

exports.cprocessed = cprocessed;
var cProcessed = cProcess + bas.ced; // Processed

exports.cProcessed = cProcessed;
var cprocesses = cprocess + bas.ces; // processes

exports.cprocesses = cprocesses;
var cProcesses = cProcess + bas.ces; // Processes

exports.cProcesses = cProcesses;
var cprocessing = cprocess + phn.cing; // processing

exports.cprocessing = cprocessing;
var cProcessing = cProcess + phn.cing; // Processing

exports.cProcessing = cProcessing;
var cPROCESSING = cPROCESS + phn.cING; // PROCESSING

exports.cPROCESSING = cPROCESSING;
var ccomplete = gen.ccom + bas.cp + phn.clete; // complete

exports.ccomplete = ccomplete;
var cComplete = gen.cCom + bas.cp + phn.clete; // Complete

exports.cComplete = cComplete;
var ccompleted = ccomplete + bas.cd; // completed

exports.ccompleted = ccompleted;
var cCompleted = cComplete + bas.cd; // Completed

exports.cCompleted = cCompleted;
var cand = bas.can + bas.cd; // and

exports.cand = cand;
var cAnd = bas.cAn + bas.cd; // And

exports.cAnd = cAnd;
var cuse = bas.cus + bas.ce; // use

exports.cuse = cuse;
var cUse = bas.cUs + bas.ce; // Use

exports.cUse = cUse;
var cuser = cuse + bas.cr; // user

exports.cuser = cuser;
var cUser = cUse + bas.cr; // User

exports.cUser = cUser;
var cAccess = bas.cAc + phn.ccess; // Access

exports.cAccess = cAccess;
var clevel = bas.cle + phn.cvel; // level

exports.clevel = clevel;
var cLevel = bas.cLe + phn.cvel; // Level

exports.cLevel = cLevel;
var cget = bas.cge + bas.ct; // get

exports.cget = cget;
var cGet = bas.cGe + bas.ct; // Get

exports.cGet = cGet;
var cput = bas.cp + bas.cut; // put

exports.cput = cput;
var cPut = bas.cP + bas.cut; // Put

exports.cPut = cPut;
var cPUT = bas.cP + bas.cUT; // PUT

exports.cPUT = cPUT;
var cfrom = bas.cfr + bas.com; // from

exports.cfrom = cfrom;
var cFrom = bas.cFr + bas.com; // From

exports.cFrom = cFrom;
var cplace = phn.cplac + bas.ce; // place

exports.cplace = cplace;
var cPlace = bas.cPl + phn.cace; // Place

exports.cPlace = cPlace;
var cplaces = cplace + bas.cs; // places

exports.cplaces = cplaces;
var cPlaces = cPlace + bas.cs; // Places

exports.cPlaces = cPlaces;
var cplaced = cplace + bas.cd; // placed

exports.cplaced = cplaced;
var cPlaced = cPlace + bas.cd; // Placed

exports.cPlaced = cPlaced;
var cplacing = phn.cplac + phn.cing; // placing

exports.cplacing = cplacing;
var cPlacing = bas.cPl + bas.cac + phn.cing; // Placing

exports.cPlacing = cPlacing;
var cplacement = cplace + phn.cment; // placement

exports.cplacement = cplacement;
var cPlacement = cPlace + phn.cment; // Placement

exports.cPlacement = cPlacement;
var creplace = bas.cre + cplace; // replace

exports.creplace = creplace;
var cReplace = bas.cRe + cplace; // Replace

exports.cReplace = cReplace;
var creplaces = creplace + bas.cs; // replaces

exports.creplaces = creplaces;
var cReplaces = cReplace + bas.cs; // Replaces

exports.cReplaces = cReplaces;
var creplaced = creplace + bas.cd; // replaced

exports.creplaced = creplaced;
var cReplaced = cReplace + bas.cd; // Replaced

exports.cReplaced = cReplaced;
var creplacing = bas.cre + cplacing; // replacing

exports.creplacing = creplacing;
var cReplacing = bas.cRe + cplacing; // Replacing

exports.cReplacing = cReplacing;
var creplacement = creplace + phn.cment; // replacement

exports.creplacement = creplacement;
var cReplacement = cReplace + phn.cment; // Replacement

exports.cReplacement = cReplacement;
var cspace = bas.csp + phn.cace; // space

exports.cspace = cspace;
var cSpace = bas.cSp + phn.cace; // Space

exports.cSpace = cSpace;
var cspaces = cspace + bas.cs; // spaces

exports.cspaces = cspaces;
var cSpaces = cSpace + bas.cs; // Spaces

exports.cSpaces = cSpaces;
var cspaced = cspace + bas.cd; // spaced

exports.cspaced = cspaced;
var cSpaced = cSpace + bas.cd; // Spaced

exports.cSpaced = cSpaced;
var cplus = bas.cp + phn.clus; // plus

exports.cplus = cplus;
var cPlus = bas.cP + phn.clus; // Plus

exports.cPlus = cPlus;
var ccolon = bas.cco + phn.clon; // colon

exports.ccolon = ccolon;
var cColon = bas.cCo + phn.clon; // Colon

exports.cColon = cColon;
var cunder = bas.cun + phn.cder; // under

exports.cunder = cunder;
var cUnder = bas.cUn + phn.cder; // Under

exports.cUnder = cUnder;
var cscore = bas.cs + phn.ccore; // score

exports.cscore = cscore;
var cScore = bas.cS + phn.ccore; // Score

exports.cScore = cScore;
var cunderscore = cunder + cscore; // underscore

exports.cunderscore = cunderscore;
var cUnderscore = cUnder + cscore; // Underscore

exports.cUnderscore = cUnderscore;
var cCatagory = bas.cCa + bas.cta + bas.cgo + bas.cry; // Catagory

exports.cCatagory = cCatagory;
var cclean = bas.cc + phn.clean; // clean

exports.cclean = cclean;
var cClean = bas.cC + phn.clean; // Clean

exports.cClean = cClean;
var ccleaned = cclean + bas.ced; // cleaned

exports.ccleaned = ccleaned;
var cCleaned = cClean + bas.ced; // Cleaned

exports.cCleaned = cCleaned;
var cCarriage = bas.cCa + bas.crr + bas.ci + phn.cage; // Carriage

exports.cCarriage = cCarriage;
var cturn = bas.ctu + bas.crn; // turn

exports.cturn = cturn;
var creturn = bas.cre + cturn; // return

exports.creturn = creturn;
var cReturn = bas.cRe + cturn; // Return

exports.cReturn = cReturn;
var cconvert = bas.cc + phn.convert; // convert

exports.cconvert = cconvert;
var cConvert = bas.cC + phn.convert; // Convert

exports.cConvert = cConvert;
var clow = bas.clo + bas.cw; // low

exports.clow = clow;
var cLow = bas.cLo + bas.cw; // Low

exports.cLow = cLow;
var clower = clow + bas.cer; // lower

exports.clower = clower;
var cLower = cLow + bas.cer; // Lower

exports.cLower = cLower;
var ccase = bas.cc + phn.c_ase; // case

exports.ccase = ccase;
var cCase = bas.cC + phn.c_ase; // Case

exports.cCase = cCase;
var cmove = bas.cmo + bas.cve; // move

exports.cmove = cmove;
var cremove = bas.cre + cmove; // remove

exports.cremove = cremove;
var cRemove = bas.cRe + cmove; // Remove

exports.cRemove = cRemove;
var cExtension = phn.cExt + bas.cen + bas.cs + phn.cion; // Extension

exports.cExtension = cExtension;
var cdig = bas.cdi + bas.cg; // dig

exports.cdig = cdig;
var cDig = bas.cDi + bas.cg; // Dig

exports.cDig = cDig;
var cdigit = cdig + bas.cit; // digit

exports.cdigit = cdigit;
var cDigit = cDig + bas.cit; // Digit

exports.cDigit = cDigit;
var cletter = clet + bas.ct + bas.cer; // letter

exports.cletter = cletter;
var cLetter = cLet + bas.ct + bas.cer; // Letter

exports.cLetter = cLetter;
var cupper = bas.cup + bas.cp + bas.cer; // upper

exports.cupper = cupper;
var cUpper = bas.cUp + bas.cp + bas.cer; // Upper

exports.cUpper = cUpper;
var crandom = bas.cr + phn.candom; // random

exports.crandom = crandom;
var cRandom = bas.cR + phn.candom; // Random

exports.cRandom = cRandom;
var crandomly = crandom + bas.cly; // randomly

exports.crandomly = crandomly;
var cRandomly = cRandom + bas.cly; // Randomly

exports.cRandomly = cRandomly;
var cgenerate = bas.cg + phn.cenerate; // generate

exports.cgenerate = cgenerate;
var cGenerate = bas.cG + phn.cenerate; // Generate

exports.cGenerate = cGenerate;
var cgenerated = cgenerate + bas.cd; // generated

exports.cgenerated = cgenerated;
var cGenerated = cGenerate + bas.cd; // Generated

exports.cGenerated = cGenerated;
var cparent = bas.cp + phn.carent; // parent

exports.cparent = cparent;
var cParent = bas.cP + phn.carent; // Parent

exports.cParent = cParent;
var cvalue = bas.cva + bas.clu + bas.ce; // value

exports.cvalue = cvalue;
var cValue = bas.cVa + bas.clu + bas.ce; // Value

exports.cValue = cValue;
var cvalues = cvalue + bas.cs; // values

exports.cvalues = cvalues;
var cValues = cValue + bas.cs; // Values

exports.cValues = cValues;
var cfind = bas.cfi + bas.cnd; // find

exports.cfind = cfind;
var cFind = bas.cFi + bas.cnd; // Find

exports.cFind = cFind;
var cfindvalue = cfind + cvalue; // findvalue

exports.cfindvalue = cfindvalue;
var cfindValue = cfind + cValue; // findValue

exports.cfindValue = cfindValue;
var cFindValue = cFind + cValue; // FindValue

exports.cFindValue = cFindValue;
var crange = bas.cra + bas.cng + bas.ce; // range

exports.crange = crange;
var cRange = bas.cRa + bas.cng + bas.ce; // Range

exports.cRange = cRange;
var cnumeric = bas.cnu + bas.cme + bas.cri + bas.cc; // numeric

exports.cnumeric = cnumeric;
var cNumeric = bas.cNu + bas.cme + bas.cri + bas.cc; // Numeric

exports.cNumeric = cNumeric;
var cNumerical = cNumeric + bas.cal; // Numerical

exports.cNumerical = cNumerical;
var clength = bas.cle + bas.cng + bas.cth; // length

exports.clength = clength;
var cLength = bas.cLe + bas.cng + bas.cth; // Length

exports.cLength = cLength;
var ccode = bas.cco + bas.cde; // code

exports.ccode = ccode;
var cCode = bas.cCo + bas.cde; // Code

exports.cCode = cCode;
var ceither = bas.cei + phn.cther; // either

exports.ceither = ceither;
var cEither = bas.cEi + phn.cther; // Either

exports.cEither = cEither;
var cenable = bas.cen + phn.cable; // enable

exports.cenable = cenable;
var cEnable = bas.cEn + phn.cable; // Enable

exports.cEnable = cEnable;
var cenabled = cenable + bas.cd; // enabled

exports.cenabled = cenabled;
var cEnabled = cEnable + bas.cd; // Enabled

exports.cEnabled = cEnabled;
var cdetermine = bas.cd + phn.cetermine; // determine

exports.cdetermine = cdetermine;
var cDetermine = bas.cD + phn.cetermine; // Determine

exports.cDetermine = cDetermine;
var cties = bas.ct + phn.cies; // ties

exports.cties = cties;
var cTies = bas.cT + phn.cies; // Ties

exports.cTies = cTies;
var cability = bas.cab + phn.cility; // ability

exports.cability = cability;
var cAbility = bas.cAb + phn.cility; // Ability

exports.cAbility = cAbility;
var cabilities = bas.cab + phn.cili + cties; // abilities

exports.cabilities = cabilities;
var cAbilities = bas.cAb + phn.cili + cties; // Abilities

exports.cAbilities = cAbilities;
var cvariable = phn.cvar + bas.ci + phn.cable; // variable

exports.cvariable = cvariable;
var cVariable = phn.cVar + bas.ci + phn.cable; // Variable

exports.cVariable = cVariable;
var cvariables = cvariable + bas.cs; // variables

exports.cvariables = cvariables;
var cVariables = cVariable + bas.cs; // Variables

exports.cVariables = cVariables;
var cvariability = phn.cvar + bas.ci + cability; // variability

exports.cvariability = cvariability;
var cVariability = phn.cVar + bas.ci + cability; // Variability

exports.cVariability = cVariability;
var cvisibility = bas.cv + phn.cisibility; // visibility

exports.cvisibility = cvisibility;
var cVisibility = bas.cV + phn.cisibility; // Visibility

exports.cVisibility = cVisibility;
var cDialog = bas.cDi + bas.ca + clog; // Dialog

exports.cDialog = cDialog;
var clibrary = bas.cli + bas.cbr + bas.car + bas.cy; // library

exports.clibrary = clibrary;
var cLibrary = bas.cLi + bas.cbr + bas.car + bas.cy; // Library

exports.cLibrary = cLibrary;
var ctable = bas.cta + bas.cbl + bas.ce; // table

exports.ctable = ctable;
var cTable = bas.cTa + bas.cbl + bas.ce; // Table

exports.cTable = cTable;
var cequal = phn.cequ + bas.cal; // equal

exports.cequal = cequal;
var cEqual = phn.cEqu + bas.cal; // Equal

exports.cEqual = cEqual;
var cequals = cequal + bas.cs; // equals

exports.cequals = cequals;
var cEquals = cEqual + bas.cs; // Equals

exports.cEquals = cEquals;
var cequivalence = phn.cequ + bas.ci + phn.cval + phn.cence; // equivalence

exports.cequivalence = cequivalence;
var cEquivalence = phn.cEqu + bas.ci + phn.cval + phn.cence; // Equivalence

exports.cEquivalence = cEquivalence;
var cRaw = bas.cRa + bas.cw; // Raw

exports.cRaw = cRaw;
var cOperation = phn.cOperat + phn.cion; // Operation

exports.cOperation = cOperation;
var cOperating = phn.cOperat + phn.cing; // Operating

exports.cOperating = cOperating;
var csystem = bas.csy + bas.cst + bas.cem; // system

exports.csystem = csystem;
var cSystem = bas.cSy + bas.cst + bas.cem; // System

exports.cSystem = cSystem;
var csign = bas.csi + bas.cgn; // sign

exports.csign = csign;
var cSign = bas.cSi + bas.cgn; // Sign

exports.cSign = cSign;
var cassign = bas.cas + csign; // assign

exports.cassign = cassign;
var cAssign = bas.cAs + csign; // Assign

exports.cAssign = cAssign;
var cassignment = cassign + phn.cment; // assignment

exports.cassignment = cassignment;
var cAssignment = cAssign + phn.cment; // Assignment

exports.cAssignment = cAssignment;
var cAbreviated = bas.cAb + bas.cre + bas.cvi + bas.cat + bas.ced; // Abreviated

exports.cAbreviated = cAbreviated;
var cwait = bas.cw + phn.cait; // wait

exports.cwait = cwait;
var cWait = bas.cW + phn.cait; // Wait

exports.cWait = cWait;
var cawait = bas.ca + cwait; // await

exports.cawait = cawait;
var cHTML = bas.cHT + bas.cML; // HTML

exports.cHTML = cHTML;
var chtml = bas.cht + bas.cml; // html

exports.chtml = chtml;
var cinner = bas.ci + phn.cnner; // inner

exports.cinner = cinner;
var cInner = bas.cI + phn.cnner; // Inner

exports.cInner = cInner;
var cOver = bas.cOv + bas.cer; // Over

exports.cOver = cOver;
var cride = bas.cr + phn.cide; // ride

exports.cride = cride;
var cRide = bas.cR + phn.cide; // Ride

exports.cRide = cRide;
var cOverride = cOver + cride; // Override

exports.cOverride = cOverride;
var cActionOverride = cAction + cOverride; // ActionOverride

exports.cActionOverride = cActionOverride;
var cLocator = bas.cLo + bas.cca + bas.cto + bas.cr; // Locator

exports.cLocator = cLocator;
var cLocators = cLocator + bas.cs; // Locators

exports.cLocators = cLocators;
var cLocatorLibrary = cLocator + cLibrary; // LocatorLibrary

exports.cLocatorLibrary = cLocatorLibrary;
var cselector = bas.cs + phn.celector; // selector

exports.cselector = cselector;
var cSelector = bas.cS + phn.celector; // Selector

exports.cSelector = cSelector;
var cSelectors = cSelector + bas.cs; // Selectors

exports.cSelectors = cSelectors;
var cIndividual = bas.cIn + bas.cdi + bas.cvi + bas.cdu + bas.cal; // Individual

exports.cIndividual = cIndividual;
var cIndividually = cIndividual + bas.cly; // Individually

exports.cIndividually = cIndividually;
var cexist = bas.cex + phn.cist; // exist

exports.cexist = cexist;
var cExist = bas.cEx + phn.cist;
exports.cExist = cExist;
; // Exist

var cexists = cexist + bas.cs; // exists

exports.cexists = cexists;
var cExists = cExist + bas.cs; // Exists

exports.cExists = cExists;
var cexisted = cexist + bas.ced; // existed

exports.cexisted = cexisted;
var cExisted = cExist + bas.ced; // Existed

exports.cExisted = cExisted;
var cexisting = cexist + phn.cing; // existing

exports.cexisting = cexisting;
var cExisting = cExist + phn.cing; // Existing

exports.cExisting = cExisting;
var cAsynch = bas.cAs + phn.cynch; // Asynch

exports.cAsynch = cAsynch;
var cSynch = bas.cS + phn.cynch; // Synch

exports.cSynch = cSynch;
var cSingular = bas.cSi + bas.cng + bas.cul + bas.car; // Singular

exports.cSingular = cSingular;
var cParallel = bas.cPa + bas.cra + bas.cll + bas.cel; // Parallel

exports.cParallel = cParallel;
var cMulti = bas.cMu + bas.clt + bas.ci; // Multi

exports.cMulti = cMulti;
var cUnified = bas.cUn + bas.cif + bas.cie + bas.cd; // Unified

exports.cUnified = cUnified;
var cfault = bas.cf + phn.cault; // fault

exports.cfault = cfault;
var cFault = bas.cF + phn.cault; // Fault

exports.cFault = cFault;
var cFAULT = bas.cF + phn.cAULT; // FAULT

exports.cFAULT = cFAULT;
var cdefault = bas.cde + cfault; // default

exports.cdefault = cdefault;
var cDefault = bas.cDe + cfault; // Default

exports.cDefault = cDefault;
var cDEFAULT = bas.cDE + cFAULT; // DEFAULT

exports.cDEFAULT = cDEFAULT;
var csingle = bas.cs + phn.cingle; // single

exports.csingle = csingle;
var cSingle = bas.cS + phn.cingle; // Single

exports.cSingle = cSingle;
var cquote = bas.cqu + phn.cote; // quote

exports.cquote = cquote;
var cQuote = bas.cQu + phn.cote; // Quote

exports.cQuote = cQuote;
var cquotes = cquote + bas.cs; // quotes

exports.cquotes = cquotes;
var cQuotes = cQuote + bas.cs; // Quotes

exports.cQuotes = cQuotes;
var cquoted = cquote + bas.cd; // quoted

exports.cquoted = cquoted;
var cQuoted = cQuote + bas.cd; // Quoted

exports.cQuoted = cQuoted;
var cswap = bas.cs + phn.cwap; // swap

exports.cswap = cswap;
var cSwap = bas.cS + phn.cwap; // Swap

exports.cSwap = cSwap;
var cbefore = bas.cbe + phn.cfore; // before

exports.cbefore = cbefore;
var cBefore = bas.cBe + phn.cfore; // Before

exports.cBefore = cBefore;
var cBEFORE = bas.cBE + phn.cFORE; // BEFORE

exports.cBEFORE = cBEFORE;
var cafter = bas.caf + phn.cter; // after

exports.cafter = cafter;
var cAfter = bas.cAf + phn.cter; // After

exports.cAfter = cAfter;
var cAFTER = bas.cAF + phn.cTER; // AFTER

exports.cAFTER = cAFTER;
var cOnce = bas.cOn + bas.cce; // Once

exports.cOnce = cOnce;
var cUpload = bas.cUp + cload; // Upload

exports.cUpload = cUpload;
var cStyle = bas.cSt + bas.cyl + bas.ce; // Style

exports.cStyle = cStyle;
var cassert = bas.cas + bas.cse + bas.crt; // assert

exports.cassert = cassert;
var cAssert = bas.cAs + bas.cse + bas.crt; // Assert

exports.cAssert = cAssert;
var cless = bas.cl + phn.cess; // less

exports.cless = cless;
var cLess = bas.cL + phn.cess; // Less

exports.cLess = cLess;
var cgreat = bas.cgr + phn.ceat; // great

exports.cgreat = cgreat;
var cGreat = bas.cGr + phn.ceat; // Great

exports.cGreat = cGreat;
var cgreater = cgreat + bas.cer; // greater

exports.cgreater = cgreater;
var cGreater = cGreat + bas.cer; // Greater

exports.cGreater = cGreater;
var cthen = bas.ct + phn.chen; // then

exports.cthen = cthen;
var cThen = bas.cT + phn.chen; // Then

exports.cThen = cThen;
var cthan = bas.ct + phn.chan; // than

exports.cthan = cthan;
var cThan = bas.cT + phn.chan; // Than

exports.cThan = cThan;
var cAssertExists = cAssert + cExists; // AssertExists

exports.cAssertExists = cAssertExists;
var cAssertNotExists = cAssert + gen.cNot + cExists; // AssertNotExists

exports.cAssertNotExists = cAssertNotExists;
var cAssertValueEqual = cAssert + cValue + cEqual; // AssertValueEqual

exports.cAssertValueEqual = cAssertValueEqual;
var cAssertValueNotEqual = cAssert + cValue + gen.cNot + cEqual; // AssertValueNotEqual

exports.cAssertValueNotEqual = cAssertValueNotEqual;
var cAssertValueLessThan = cAssert + cValue + cLess + cThan; // AssertValueLessThan

exports.cAssertValueLessThan = cAssertValueLessThan;
var cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan; // AssertValueGreaterThan

exports.cAssertValueGreaterThan = cAssertValueGreaterThan;
var cAssertion = cAssert + phn.cion; // Assertion

exports.cAssertion = cAssertion;
var cAssertionType = cAssertion + cType; // AssertionType

exports.cAssertionType = cAssertionType;
var cUploadStyle = cUpload + cStyle; // UploadStyle

exports.cUploadStyle = cUploadStyle;
var cAssertionStyle = cAssertion + cStyle; // AssertionStyle

exports.cAssertionStyle = cAssertionStyle;
var cby = bas.cby; // by

exports.cby = cby;
var cBy = bas.cBy; // By

exports.cBy = cBy;
var cBY = bas.cBY; // BY

exports.cBY = cBY;
var cOr = bas.cOr; // Or

exports.cOr = cOr;
var cor = bas.cor; // or

exports.cor = cor;
var cOR = bas.cOR; // OR

exports.cOR = cOR;
var cmix = bas.camai + bas.cx; // mix // For some reason JavaScript doesn't like cmi.

exports.cmix = cmix;
var cMix = bas.cMi + bas.cx; // Mix

exports.cMix = cMix;
var cmixed = cmix + bas.ced; // mixed

exports.cmixed = cmixed;
var cMixed = cMix + bas.ced; // Mixed

exports.cMixed = cMixed;
var calpha = bas.ca + phn.clpha; // alpha

exports.calpha = calpha;
var cAlpha = bas.cA + phn.clpha; // Alpha

exports.cAlpha = cAlpha;
var cbetic = bas.cbe + bas.cti + bas.cc; // betic

exports.cbetic = cbetic;
var cAlphabetic = cAlpha + cbetic; // Alphabetic

exports.cAlphabetic = cAlphabetic;
var ctext = bas.ct + phn.cext; // text

exports.ctext = ctext;
var cText = bas.cT + phn.cext; // Text

exports.cText = cText;
var cTEXT = bas.cTE + bas.cXT; // TEXT

exports.cTEXT = cTEXT;
var ccontext = phn.ccon + ctext; // context

exports.ccontext = ccontext;
var cContext = phn.cCon + ctext; // Context

exports.cContext = cContext;
var cinput = bas.cin + cput; // input

exports.cinput = cinput;
var cInput = bas.cIn + cput; // Input

exports.cInput = cInput;
var cINPUT = bas.cIN + cPUT; // INPUT

exports.cINPUT = cINPUT;
var cinputs = cinput + bas.cs; // inputs

exports.cinputs = cinputs;
var cInputs = cInput + bas.cs; // Inputs

exports.cInputs = cInputs;
var cinputting = cinput + bas.ct + phn.cing; // inputting

exports.cinputting = cinputting;
var cInputting = cInput + bas.ct + phn.cing; // Inputting

exports.cInputting = cInputting;
var cdescription = bas.cde + bas.csc + bas.cri + bas.cp + phn.ction; // description

exports.cdescription = cdescription;
var cDescription = bas.cDe + bas.csc + bas.cri + bas.cp + phn.ction; // Description

exports.cDescription = cDescription;
var cconstant = phn.ccon + phn.cstant; //constant

exports.cconstant = cconstant;
var cConstant = phn.cCon + bas.cst + bas.can + bas.ct; // Constant

exports.cConstant = cConstant;
var cconstants = cconstant + bas.cs; // constants

exports.cconstants = cconstants;
var cConstants = cConstant + bas.cs; // Constants

exports.cConstants = cConstants;
var citeration = bas.cit + phn.cera + phn.ction; // iteration

exports.citeration = citeration;
var cIteration = bas.cIt + phn.cera + phn.ction; // Iteration

exports.cIteration = cIteration;
var cproject = bas.cp + phn.croject; // project

exports.cproject = cproject;
var cProject = bas.cP + phn.croject; // Project

exports.cProject = cProject;
var cProjects = cProject + bas.cs; // Projects

exports.cProjects = cProjects;
var cAdvance = bas.cAd + bas.cva + bas.cnc + bas.ce; // Advance

exports.cAdvance = cAdvance;
var cAdvanced = cAdvance + bas.cd; // Advanced

exports.cAdvanced = cAdvanced;
var cCreation = bas.cCr + bas.cea + phn.ction; // Creation

exports.cCreation = cCreation;
var ctestData = ctest + cData; // testData

exports.ctestData = ctestData;
var cpageData = cpage + cData; // pageData

exports.cpageData = cpageData;
var cPageData = cPage + cData; // PageData

exports.cPageData = cPageData;
var cTestName = cTest + cName; // TestName

exports.cTestName = cTestName;
var cPageName = cPage + cName; // PageName

exports.cPageName = cPageName;
var cbed = bas.cbe + bas.cd; // bed

exports.cbed = cbed;
var cBed = bas.cBe + bas.cd; // Bed

exports.cBed = cBed;
var cbeds = cbed + bas.cs; // beds

exports.cbeds = cbeds;
var cBeds = cBed + bas.cs; // Beds

exports.cBeds = cBeds;
var cbedded = cbed + phn.cded; // bedded

exports.cbedded = cbedded;
var cBedded = cBed + phn.cded; // Bedded

exports.cBedded = cBedded;
var cbedding = cbed + bas.cd + phn.cing; // bedding

exports.cbedding = cbedding;
var cBedding = cBed + bas.cd + phn.cing; // Bedding

exports.cBedding = cBedding;
var cweb = bas.cwe + bas.cb; // web

exports.cweb = cweb;
var cWeb = bas.cWe + bas.cb; // Web

exports.cWeb = cWeb;
var cwebs = cweb + bas.cs; // webs

exports.cwebs = cwebs;
var cWebs = cWeb + bas.cs; // Webs

exports.cWebs = cWebs;
var cwebbed = cweb + cbed; // webbed

exports.cwebbed = cwebbed;
var cWebbed = cWeb + cbed; // webbed

exports.cWebbed = cWebbed;
var cwebbing = cweb + phn.cbing; // webbing

exports.cwebbing = cwebbing;
var cWebbing = cWeb + phn.cbing; // Webbing

exports.cWebbing = cWebbing;
var cWebkey = bas.cWe + bas.cb + ckey; // Webkey

exports.cWebkey = cWebkey;
var cfile = bas.cf + phn.cile; // file

exports.cfile = cfile;
var cFile = bas.cF + phn.cile; // File

exports.cFile = cFile;
var cfiles = cfile + bas.cs; // files

exports.cfiles = cfiles;
var cFiles = cFile + bas.cs; // Files

exports.cFiles = cFiles;
var cfilename = cfile + cname; // filename

exports.cfilename = cfilename;
var cFilename = cFile + cname; // Filename

exports.cFilename = cFilename;
var cfilenames = cfilename + bas.cs; // filenames

exports.cfilenames = cfilenames;
var cFilenames = cFilename + bas.cs; // Filenames

exports.cFilenames = cFilenames;
var cfold = bas.cfo + bas.cld; // fold

exports.cfold = cfold;
var cFold = bas.cFo + bas.cld; // Fold

exports.cFold = cFold;
var cFolder = cFold + bas.cer; // Folder

exports.cFolder = cFolder;
var cfolder = cfold + bas.cer; // folder

exports.cfolder = cfolder;
var cfolders = cfolder + bas.cs; // folders

exports.cfolders = cfolders;
var cFolders = cFolder + bas.cs; // Folders

exports.cFolders = cFolders;
var ccafe = bas.cca + bas.cfe; // cafe

exports.ccafe = ccafe;
var ccert = bas.cce + bas.crt; // cert

exports.ccert = ccert;
var csrc = bas.csr + bas.cc; // src

exports.csrc = csrc;
var cbin = bas.cbi + bas.cn; // bin

exports.cbin = cbin;
var cnation = bas.cn + phn.cation; // nation

exports.cnation = cnation;
var cNation = bas.cN + phn.cation; // Nation

exports.cNation = cNation;
var csource = bas.cs + phn.cource; // source

exports.csource = csource;
var cSource = bas.cS + phn.cource; // Source

exports.cSource = cSource;
var cdestination = phn.cdest + bas.ci + cnation; // destination

exports.cdestination = cdestination;
var cDestination = phn.cDest + bas.ci + cnation; // Destination

exports.cDestination = cDestination;
var cresource = bas.cre + csource; // resource

exports.cresource = cresource;
var cResource = bas.cRe + csource; // Resource

exports.cResource = cResource;
var cresources = cresource + bas.cs; // resources

exports.cresources = cresources;
var cResources = cResource + bas.cs; // Resources

exports.cResources = cResources;
var cclass = bas.cc + phn.c_lass; // class

exports.cclass = cclass;
var cClass = bas.cC + phn.c_lass; // Class

exports.cClass = cClass;
var cIngestion = bas.cIn + bas.cge + bas.cs + phn.ction; // Ingestion

exports.cIngestion = cIngestion;
var cis = bas.cis; // is

exports.cis = cis;
var cIs = bas.cIs; // Is

exports.cIs = cIs;
var cIS = bas.cIS; // IS

exports.cIS = cIS;
var ccheck = bas.cc + phn.check; // check

exports.ccheck = ccheck;
var cCheck = bas.cC + phn.check; // Check

exports.cCheck = cCheck;
var cchecks = ccheck + bas.cs; // checks

exports.cchecks = cchecks;
var cChecks = cCheck + bas.cs; // Checks

exports.cChecks = cChecks;
var cchecked = ccheck + bas.ced; // checked

exports.cchecked = cchecked;
var cChecked = cCheck + bas.ced; // Checked

exports.cChecked = cChecked;
var celement = bas.cel + bas.ce + phn.cment; // element

exports.celement = celement;
var cElement = bas.cEl + bas.ce + phn.cment; // Element

exports.cElement = cElement;
var celements = celement + bas.cs; // elements

exports.celements = celements;
var cElements = cElement + bas.cs; // Elements

exports.cElements = cElements;
var cElementName = cElement + cName; // ElementName

exports.cElementName = cElementName;
var callow = call + bas.cow; // allow

exports.callow = callow;
var cAllow = cAll + bas.cow; // Allow

exports.cAllow = cAllow;
var callowable = callow + phn.cable; // allowable

exports.callowable = callowable;
var cAllowable = cAllow + phn.cable; // Allowable

exports.cAllowable = cAllowable;
var chome = bas.cho + bas.cme; // home

exports.chome = chome;
var cHome = bas.cHo + bas.cme; // Home

exports.cHome = cHome;
var cpublic = bas.cpu + bas.cbl + bas.cic; // public

exports.cpublic = cpublic;
var cPublic = bas.cPu + bas.cbl + bas.cic; // Public

exports.cPublic = cPublic;
var cspecial = bas.csp + bas.cec + bas.cia + bas.cl; // special

exports.cspecial = cspecial;
var cSpecial = bas.cSp + bas.cec + bas.cia + bas.cl; // Special

exports.cSpecial = cSpecial;
var ccharacter = cchar + bas.cac + phn.cter; // character

exports.ccharacter = ccharacter;
var cCharacter = cChar + bas.cac + phn.cter; // Character

exports.cCharacter = cCharacter;
var ccharacters = ccharacter + bas.cs; // characters

exports.ccharacters = ccharacters;
var cCharacters = cCharacter + bas.cs; // Characters

exports.cCharacters = cCharacters;
var cedge = bas.ced + bas.cge; // edge

exports.cedge = cedge;
var cEdge = bas.cEd + bas.cge; // Edge

exports.cEdge = cEdge;
var cWorks = cWork + bas.cs; // Works

exports.cWorks = cWorks;
var csolid = bas.cs + phn.colid; // solid

exports.csolid = csolid;
var cSolid = bas.cS + phn.colid; // Solid

exports.cSolid = cSolid;
var cBinary = bas.cBi + bas.cna + bas.cry; // Binary

exports.cBinary = cBinary;
var cTimeout = cTime + cout; // Timeout

exports.cTimeout = cTimeout;
var cTimeOut = cTime + cOut; // TimeOut

exports.cTimeOut = cTimeOut;
var cDwell = bas.cDw + bas.cel + bas.cl; // Dwell

exports.cDwell = cDwell;
var ccut = bas.ccu + bas.ct; // cut

exports.ccut = ccut;
var cCut = bas.cCu + bas.ct; // Cut

exports.cCut = cCut;
var ccuts = ccut + bas.cs; // cuts

exports.ccuts = ccuts;
var cCuts = cCut + bas.cs; // Cuts

exports.cCuts = cCuts;
var ccutting = ccut + bas.ct + phn.cing; // cutting

exports.ccutting = ccutting;
var cCutting = cCut + bas.ct + phn.cing; // Cutting

exports.cCutting = cCutting;
var ccute = bas.cc + phn.cute; // cute

exports.ccute = ccute;
var cCute = bas.cC + phn.cute; // Cute

exports.cCute = cCute;
var cexecute = gen.cexe + ccute; // execute

exports.cexecute = cexecute;
var cExecute = gen.cExe + ccute; // Execute

exports.cExecute = cExecute;
var cexecutes = cexecute + bas.cs; // executes

exports.cexecutes = cexecutes;
var cExecutes = cExecute + bas.cs; // Executes

exports.cExecutes = cExecutes;
var cexecuted = cexecute + bas.cd; // executed

exports.cexecuted = cexecuted;
var cExecuted = cExecute + bas.cd; // Executed

exports.cExecuted = cExecuted;
var cexecuting = gen.cexe + ccut + phn.cing; // executing

exports.cexecuting = cexecuting;
var cExecuting = gen.cExe + ccut + phn.cing; // Executing

exports.cExecuting = cExecuting;
var csibling = bas.cs + phn.cibling; // sibling

exports.csibling = csibling;
var cSibling = bas.cS + phn.cibling; // Sibling

exports.cSibling = cSibling;
var cchild = bas.cc + phn.child; // child

exports.cchild = cchild;
var cChild = bas.cC + phn.child; // Child

exports.cChild = cChild;
var cfilter = bas.cf + phn.cilter; // filter

exports.cfilter = cfilter;
var cFilter = bas.cF + phn.cilter; // Filter

exports.cFilter = cFilter;
var cattribute = bas.ca + phn.cttribute; // attribute

exports.cattribute = cattribute;
var cAttribute = bas.cA + phn.cttribute; // Attribute

exports.cAttribute = cAttribute;
var cattributes = bas.ca + phn.cttributes; // attributes

exports.cattributes = cattributes;
var cAttributes = bas.cA + phn.cttributes; // Attributes

exports.cAttributes = cAttributes;
var cdisabled = bas.cd + phn.cisabled; // disabled

exports.cdisabled = cdisabled;
var cDisabled = bas.cD + phn.cisabled; // Disabled

exports.cDisabled = cDisabled;
var cman = bas.cma + bas.cn; // man

exports.cman = cman;
var cMan = bas.cMa + bas.cn; // Man

exports.cMan = cMan;
var cwoman = bas.cwo + cman; // woman

exports.cwoman = cwoman;
var cWoman = bas.cWo + cman; // Woman

exports.cWoman = cWoman;
var ccell = bas.cc + phn.cell; // cell

exports.ccell = ccell;
var cCell = bas.cC + phn.cell; // Cell

exports.cCell = cCell;
var chung = bas.ch + phn.cung; // hung

exports.chung = chung;
var cHung = bas.cH + phn.cung; // Hung

exports.cHung = cHung;
var cport = bas.cpo + bas.crt; // port

exports.cport = cport;
var cPort = bas.cPo + bas.crt; // Port

exports.cPort = cPort;
var cConstructor = bas.cCo + bas.cns + bas.ctr + bas.cu + phn.cctor; // Constructor

exports.cConstructor = cConstructor;
var cwarn = bas.cw + phn.carn; // warn

exports.cwarn = cwarn;
var cWarn = bas.cW + phn.carn; // Warn

exports.cWarn = cWarn;
var cWARN = bas.cW + bas.cAR + bas.cN; // WARN

exports.cWARN = cWARN;
var cwarning = cwarn + phn.cing; // warning

exports.cwarning = cwarning;
var cWarning = cWarn + phn.cing; // Warning

exports.cWarning = cWarning;
var cWARNING = cWARN + phn.cING; // WARNING

exports.cWARNING = cWARNING;
var cwarnings = cwarning + bas.cs; // warnings

exports.cwarnings = cwarnings;
var cWarnings = cWarning + bas.cs; // Warnings

exports.cWarnings = cWarnings;
var cerror = bas.ce + phn.crror; // error

exports.cerror = cerror;
var cError = bas.cE + phn.crror; // Error

exports.cError = cError;
var cERROR = bas.cE + phn.cRROR; // ERROR

exports.cERROR = cERROR;
var cash = bas.cas + bas.ch; // ash

exports.cash = cash;
var cAsh = bas.cAs + bas.ch; // Ash

exports.cAsh = cAsh;
var cdash = bas.cd + cash; // dash

exports.cdash = cdash;
var cDash = bas.cD + cash; // Dash

exports.cDash = cDash;
var cboard = bas.cbo + phn.card; // board

exports.cboard = cboard;
var cDashboard = cDash + cboard; // Dashboard

exports.cDashboard = cDashboard;
var ccompose = bas.cco + bas.cmp + phn.cose; // compose

exports.ccompose = ccompose;
var cdecompose = bas.cde + ccompose; // decompose

exports.cdecompose = cdecompose;
var cDecompose = bas.cDe + ccompose; // Decompose

exports.cDecompose = cDecompose;
var carray = bas.car + phn.cray; // array

exports.carray = carray;
var cArray = bas.cAr + phn.cray; // Array

exports.cArray = cArray;
var carrays = carray + bas.cs; // arrays

exports.carrays = carrays;
var cArrays = cArray + bas.cs; // Arrays

exports.cArrays = cArrays;
var ccamel = bas.cca + phn.cmel; // camel

exports.ccamel = ccamel;
var cCamel = bas.cCa + phn.cmel; // Camel

exports.cCamel = cCamel;
var cround = bas.cr + phn.cound; // round

exports.cround = cround;
var cRound = bas.cR + phn.cound; // Round

exports.cRound = cRound;
var crounded = cround + bas.ced; // rounded

exports.crounded = crounded;
var cRounded = cRound + bas.ced; // Rounded

exports.cRounded = cRounded;
var cquart = bas.cqu + phn.cart; // quart

exports.cquart = cquart;
var cQuart = bas.cQu + phn.cart; // Quart

exports.cQuart = cQuart;
var cquarter = cquart + bas.cer; // quarter

exports.cquarter = cquarter;
var cQuarter = cQuart + bas.cer; // Quarter

exports.cQuarter = cQuarter;
var cquaternion = bas.cqu + bas.cat + bas.cer + phn.cnion; // quaternion

exports.cquaternion = cquaternion;
var cQuaternion = bas.cQu + bas.cat + bas.cer + phn.cnion; // Quaternion

exports.cQuaternion = cQuaternion;
var cnormal = bas.cn + phn.cormal; // normal

exports.cnormal = cnormal;
var cNormal = bas.cN + phn.cormal; // Normal

exports.cNormal = cNormal;
var cnormalize = cnormal + phn.cize; // normalize

exports.cnormalize = cnormalize;
var cNormalize = cNormal + phn.cize; // Normalize

exports.cNormalize = cNormalize;
var cnominal = phn.cnom + phn.cinal; // nominal

exports.cnominal = cnominal;
var cNominal = phn.cNom + phn.cinal; // Nominal

exports.cNominal = cNominal;
var cdegree = bas.cd + phn.cegree; // degree

exports.cdegree = cdegree;
var cDegree = bas.cD + phn.cegree; // Degree

exports.cDegree = cDegree;
var cdegrees = cdegree + bas.cs; // degrees

exports.cdegrees = cdegrees;
var cDegrees = cDegree + bas.cs; // Degrees

exports.cDegrees = cDegrees;
var cangle = bas.can + phn.cgle; // angle

exports.cangle = cangle;
var cAngle = bas.cAn + phn.cgle; // Angle

exports.cAngle = cAngle;
var ctrap = bas.ct + phn.crap; // trap

exports.ctrap = ctrap;
var cTrap = bas.cT + phn.crap; // Trap

exports.cTrap = cTrap;
var cFraction = phn.cFra + phn.cction; // Fraction

exports.cFraction = cFraction;
var cvector = bas.cve + phn.cctor; // vector

exports.cvector = cvector;
var cVector = bas.cVe + phn.cctor; // Vector

exports.cVector = cVector;
var cfor = bas.cfo + bas.cr; // for

exports.cfor = cfor;
var cFor = bas.cFo + bas.cr; // For

exports.cFor = cFor;
var cform = cfor + bas.cm; // form

exports.cform = cform;
var cForm = cFor + bas.cm; // Form

exports.cForm = cForm;
var ctransform = phn.ctrans + cform; // transform

exports.ctransform = ctransform;
var cTransform = phn.cTrans + cform; // Transform

exports.cTransform = cTransform;
var cpoint = bas.cpo + phn.cint; // point

exports.cpoint = cpoint;
var cPoint = bas.cPo + phn.cint; // Point

exports.cPoint = cPoint;
var clocation = phn.cloc + phn.cation; // location

exports.clocation = clocation;
var cLocation = phn.cLoc + phn.cation; // Location

exports.cLocation = cLocation;
var csort = bas.cs + phn.cort; // sort

exports.csort = csort;
var cSort = bas.cS + phn.cort; // Sort

exports.cSort = cSort;
var csimplify = phn.csim + phn.cplify; // simplify

exports.csimplify = csimplify;
var cSimplify = phn.cSim + phn.cplify; // Simplify

exports.cSimplify = cSimplify;
var cconsolidate = phn.ccon + phn.csol + bas.ci + cdate; // consolidate

exports.cconsolidate = cconsolidate;
var cConsolidate = phn.cCon + phn.csol + bas.ci + cdate; // Consolidate

exports.cConsolidate = cConsolidate;
var cconsolidated = cconsolidate + bas.cd; // consolidated

exports.cconsolidated = cconsolidated;
var cConsolidated = cConsolidate + bas.cd; // Consolidated

exports.cConsolidated = cConsolidated;
var cconsolidates = cconsolidate + bas.cs; // consolidates

exports.cconsolidates = cconsolidates;
var cConsolidates = cConsolidate + bas.cs; // Consolidates

exports.cConsolidates = cConsolidates;
var cconsolidating = phn.ccon + csolid + bas.cat + phn.cing; // consolidating

exports.cconsolidating = cconsolidating;
var cConsolidating = phn.cCon + csolid + bas.cat + phn.cing; // Consolidating

exports.cConsolidating = cConsolidating;
var care = phn.care; // are

exports.care = care;
var cAre = bas.cAr + bas.ce; // Are

exports.cAre = cAre;
var cARE = bas.cAR + bas.cE; // ARE

exports.cARE = cARE;
var ccompare = phn.ccomp + phn.care; // compare

exports.ccompare = ccompare;
var cCompare = phn.cComp + phn.care; // Compare

exports.cCompare = cCompare;
var ccompares = ccompare + bas.cs; // compares

exports.ccompares = ccompares;
var cCompares = cCompare + bas.cs; // Compares

exports.cCompares = cCompares;
var ccompared = ccompare + bas.cd; // compared

exports.ccompared = ccompared;
var cCompared = cCompare + bas.cd; // Compared

exports.cCompared = cCompared;
var ccomparing = phn.ccomp + bas.car + phn.cing; // comparing

exports.ccomparing = ccomparing;
var cComparing = phn.cComp + bas.car + phn.cing; // Comparing

exports.cComparing = cComparing;
var ccomparison = phn.ccomp + bas.car + phn.cison; // comparison

exports.ccomparison = ccomparison;
var cComparison = phn.cComp + bas.car + phn.cison; // Comparison

exports.cComparison = cComparison;
var ccomparisons = ccomparison + bas.cs; // comparisons

exports.ccomparisons = ccomparisons;
var cComparisons = cComparison + bas.cs; // Comparisons

exports.cComparisons = cComparisons;
var ccontain = phn.ccon + phn.ctain; // contain

exports.ccontain = ccontain;
var cContain = phn.cCon + phn.ctain; // Contain

exports.cContain = cContain;
var ccontains = ccontain + bas.cs; // contains

exports.ccontains = ccontains;
var cContains = cContain + bas.cs; // Contains

exports.cContains = cContains;
var ccontained = ccontain + bas.ced; // contained

exports.ccontained = ccontained;
var cContained = cContain + bas.ced; // Contained

exports.cContained = cContained;
var ccontaining = ccontain + phn.cing; // containing

exports.ccontaining = ccontaining;
var cContaining = cContain + phn.cing; // Containing

exports.cContaining = cContaining;
var cvideo = bas.cv + phn.cideo; // video

exports.cvideo = cvideo;
var cVideo = bas.cV + phn.cideo; // Video

exports.cVideo = cVideo;
var cProduct = phn.cPro + phn.cduct; // Product

exports.cProduct = cProduct;
var caggregate = bas.ca + phn.cggregate; // aggregate

exports.caggregate = caggregate;
var cAggregate = bas.cA + phn.cggregate; // Aggregate

exports.cAggregate = cAggregate;
var carguments = bas.ca + bas.crg + bas.cu + phn.cments; // arguments

exports.carguments = carguments;
var cArguments = bas.cA + bas.crg + bas.cu + phn.cments; // Arguments

exports.cArguments = cArguments;
var cDifference = phn.cDiff + bas.cer + phn.cence; // Difference

exports.cDifference = cDifference;
var cbet = bas.cbe + bas.ct; // bet

exports.cbet = cbet;
var cBet = bas.cBe + bas.ct; // Bet

exports.cBet = cBet;
var cbetween = cbet + phn.cween; // between

exports.cbetween = cbetween;
var cBetween = cBet + phn.cween; // Between

exports.cBetween = cBetween;
var ccertain = bas.cce + bas.crt + phn.cain; // certain

exports.ccertain = ccertain;
var cascertain = bas.cas + ccertain; // ascertain

exports.cascertain = cascertain;
var cAscertain = bas.cAs + ccertain; // Ascertain

exports.cAscertain = cAscertain;
var cmatch = bas.cma + phn.ctch; // match

exports.cmatch = cmatch;
var cMatch = bas.cMa + phn.ctch; // Match

exports.cMatch = cMatch;
var cmatching = cmatch + phn.cing; // matching

exports.cmatching = cmatching;
var cMatching = cMatch + phn.cing; // Matching

exports.cMatching = cMatching;
var cdoes = bas.cdo + bas.ces; // does

exports.cdoes = cdoes;
var cDoes = bas.cDo + bas.ces; // Does

exports.cDoes = cDoes;
var cDOES = bas.cDO + bas.cES; // DOES

exports.cDOES = cDOES;
var capplication = phn.capp + phn.clica + phn.ction; // application

exports.capplication = capplication;
var cApplication = phn.cApp + phn.clica + phn.ction; // Application

exports.cApplication = cApplication;
var cAPPLICATION = phn.cAPP + phn.cLICA + phn.cTION; // APPLICATION

exports.cAPPLICATION = cAPPLICATION;
var cbuild = bas.cbu + phn.cild; // build

exports.cbuild = cbuild;
var cBuild = bas.cBu + phn.cild; // Build

exports.cBuild = cBuild;
var cdeploy = bas.cd + bas.cep + phn.cloy; // deploy

exports.cdeploy = cdeploy;
var cDeploy = bas.cD + bas.cep + phn.cloy; // Deploy

exports.cDeploy = cDeploy;
var cDEPLOY = bas.cD + bas.cEP + phn.cLOY; // DEPLOY

exports.cDEPLOY = cDEPLOY;
var cdeployment = cdeploy + phn.cment; // deployment

exports.cdeployment = cdeployment;
var cDeployment = cDeploy + phn.cment; // Deployment

exports.cDeployment = cDeployment;
var clease = bas.cle + phn.c_ase; // lease

exports.clease = clease;
var cLEASE = bas.cLE + phn.c_ASE; // LEASE

exports.cLEASE = cLEASE;
var crelease = bas.cre + clease; // release

exports.crelease = crelease;
var cRelease = bas.cRe + clease; // Release

exports.cRelease = cRelease;
var cRELEASE = bas.cRE + cLEASE; // RELEASE

exports.cRELEASE = cRELEASE;
var creleases = crelease + bas.cs; // releases

exports.creleases = creleases;
var cReleases = cRelease + bas.cs; // Releases

exports.cReleases = cReleases;
var creleased = crelease + bas.cd; // released

exports.creleased = creleased;
var cReleased = cRelease + bas.cd; // Released

exports.cReleased = cReleased;
var creleasing = bas.cre + phn.cleas + phn.cing; // releasing

exports.creleasing = creleasing;
var cReleasing = bas.cRe + phn.cleas + phn.cing; // Releasing

exports.cReleasing = cReleasing;
var croot = bas.cr + phn.coot; // root

exports.croot = croot;
var cRoot = bas.cR + phn.coot; // Root

exports.cRoot = cRoot;
var cparse = bas.cp + phn.carse; // parse

exports.cparse = cparse;
var cParse = bas.cP + phn.carse; // Parse

exports.cParse = cParse;
var cPARSE = bas.cP + phn.cARSE; // PARSE

exports.cPARSE = cPARSE;
var cparser = cparse + bas.cr; // parser

exports.cparser = cparser;
var cParser = cParse + bas.cr; // Parser

exports.cParser = cParser;
var cPARSER = cPARSE + bas.cR; // PARSER

exports.cPARSER = cPARSER;
var cparsed = cparse + bas.cd; // parsed

exports.cparsed = cparsed;
var cParsed = cParse + bas.cd; // Parsed

exports.cParsed = cParsed;
var cparsing = bas.cp + phn.cars + phn.cing; // parsing

exports.cparsing = cparsing;
var cParsing = bas.cP + phn.cars + phn.cing; // Parsing

exports.cParsing = cParsing;
var cforward = cfor + phn.cward; // forward

exports.cforward = cforward;
var cForward = cFor + phn.cward; // Forward

exports.cForward = cForward;
var cslash = bas.cs + phn.clash; // slash

exports.cslash = cslash;
var cSlash = bas.cS + phn.clash; // Slash

exports.cSlash = cSlash;
var cmeta = bas.cm + phn.ceta; // meta

exports.cmeta = cmeta;
var cMeta = bas.cM + phn.ceta; // Meta

exports.cMeta = cMeta;
var cmetaData = cmeta + cData; // metaData

exports.cmetaData = cmetaData;
var cMetaData = cMeta + cData; // MetaData

exports.cMetaData = cMetaData;
var cbusiness = bas.cb + phn.cusiness; // business

exports.cbusiness = cbusiness;
var cBusiness = bas.cB + phn.cusiness; // Business

exports.cBusiness = cBusiness;
var crule = bas.cr + phn.cule; // rule

exports.crule = crule;
var cRule = bas.cR + phn.cule; // Rule

exports.cRule = cRule;
var cfresh = bas.cfr + phn.cesh; // fresh

exports.cfresh = cfresh;
var crefresh = bas.cre + cfresh; // refresh

exports.crefresh = crefresh;
var cRefresh = bas.cRe + cfresh; // Refresh

exports.cRefresh = cRefresh;
var ceval = bas.ce + phn.cval; // eval

exports.ceval = ceval;
var cEval = bas.cE + phn.cval; // Eval

exports.cEval = cEval;
var creload = bas.cre + cload; // reload

exports.creload = creload;
var cReload = bas.cRe + cload; // Reload

exports.cReload = cReload;
var cdemo = bas.cd + phn.cemo; // demo

exports.cdemo = cdemo;
var cDemo = bas.cD + phn.cemo; // Demo

exports.cDemo = cDemo;
var ccommon = bas.cc + phn.common; // common

exports.ccommon = ccommon;
var cCommon = bas.cC + phn.common; // Common

exports.cCommon = cCommon;
var cfunction = bas.cf + bas.cun + phn.cction; // function

exports.cfunction = cfunction;
var cFunction = bas.cF + bas.cun + phn.cction; // Function

exports.cFunction = cFunction;
var cfunctions = cfunction + bas.cs; // functions

exports.cfunctions = cfunctions;
var cFunctions = cFunction + bas.cs; // Functions

exports.cFunctions = cFunctions;
var cmultiple = phn.cmulti + phn.cple; // multiple

exports.cmultiple = cmultiple;
var cMultiple = phn.cMulti + phn.cple; // Multiple

exports.cMultiple = cMultiple;
var cJournal = bas.cJo + bas.cur + phn.cnal; // Journal

exports.cJournal = cJournal;
var cExecution = phn.cExe + bas.ccu + phn.ction; // Execution

exports.cExecution = cExecution;
var cpercent = phn.cper + phn.ccent; // percent

exports.cpercent = cpercent;
var cPercent = phn.cPer + phn.ccent; // Percent

exports.cPercent = cPercent;
var cbasic = bas.cb + phn.casic; // basic

exports.cbasic = cbasic;
var cBasic = bas.cB + phn.casic; // Basic

exports.cBasic = cBasic;
var codd = bas.cod + bas.cd; // odd

exports.codd = codd;
var cOdd = bas.cOd + bas.cd; // Odd

exports.cOdd = cOdd;
var ceven = bas.ce + phn.cven; // even

exports.ceven = ceven;
var cEven = bas.cE + phn.cven; // Even

exports.cEven = cEven;
var cEVEN = bas.cE + phn.cVEN; // EVEN

exports.cEVEN = cEVEN;
var cevent = bas.ce + phn.cvent; // event

exports.cevent = cevent;
var cEvent = bas.cE + phn.cvent; // Event

exports.cEvent = cEvent;
var cevents = cevent + bas.cs; // events

exports.cevents = cevents;
var cEvents = cEvent + bas.cs; // Events

exports.cEvents = cEvents;
var cface = bas.cfa + bas.cce; // face

exports.cface = cface;
var cFace = bas.cFa + bas.cce; // Face

exports.cFace = cFace;
var cargument = phn.carg + bas.cu + phn.cment; // argument

exports.cargument = cargument;
var cArgument = phn.cArg + bas.cu + phn.cment; // Argument

exports.cArgument = cArgument;
var cdrive = bas.cd + phn.crive; // drive

exports.cdrive = cdrive;
var cDrive = bas.cD + phn.crive; // Drive

exports.cDrive = cDrive;
var cdriven = cdrive + bas.cn; // driven

exports.cdriven = cdriven;
var cDriven = cDrive + bas.cn; // Driven

exports.cDriven = cDriven;
var cinterface = phn.cinter + cface; // interface

exports.cinterface = cinterface;
var cInterface = phn.cInter + cface; // Interface

exports.cInterface = cInterface;
var cfont = bas.cf + phn.cont; // font

exports.cfont = cfont;
var cFont = bas.cF + phn.cont; // Font

exports.cFont = cFont;
var cmodule = phn.cmod + phn.cule; // module

exports.cmodule = cmodule;
var cModule = phn.cMod + phn.cule; // Module

exports.cModule = cModule;
var ccolor = phn.ccol + bas.cor; // color

exports.ccolor = ccolor;
var cColor = phn.cCol + bas.cor; // Color

exports.cColor = cColor;
var ccolors = ccolor + bas.cs; // colors

exports.ccolors = ccolors;
var cColors = cColor + bas.cs; // Colors

exports.cColors = cColors;
var ccolored = ccolor + bas.ced; // colored

exports.ccolored = ccolored;
var cColored = cColor + bas.ced; // Colored

exports.cColored = cColored;
var ccolorize = ccolor + phn.cize; // colorize

exports.ccolorize = ccolorize;
var cColorize = cColor + phn.cize; // Colorize

exports.cColorize = cColorize;
var ccolorized = ccolorize + bas.cd; // colorized

exports.ccolorized = ccolorized;
var cColorized = cColorize + bas.cd; // Colorized

exports.cColorized = cColorized;
var cold = bas.col + bas.cd; // old

exports.cold = cold;
var cOld = bas.cOl + bas.cd; // Old

exports.cOld = cOld;
var cbold = bas.cb + cold; // bold

exports.cbold = cbold;
var cBold = bas.cB + cold; // Bold

exports.cBold = cBold;
var cmost = bas.cm + phn.cost; // most

exports.cmost = cmost;
var cMost = bas.cM + phn.cost; // Most

exports.cMost = cMost;
var cpop = bas.cpo + bas.cp; // pop

exports.cpop = cpop;
var cPop = bas.cPo + bas.cp; // Pop

exports.cPop = cPop;
var cPOP = bas.cPO + bas.cP; // POP

exports.cPOP = cPOP;
var cpopular = cpop + phn.cular; // popular

exports.cpopular = cpopular;
var cPopular = cPop + phn.cular; // Popular

exports.cPopular = cPopular;
var calmost = bas.cal + cmost; // almost

exports.calmost = calmost;
var cAlmost = bas.cAl + cmost; // Almost

exports.cAlmost = cAlmost;
var cpal = bas.cpa + bas.cl; // pal

exports.cpal = cpal;
var cPal = bas.cPa + bas.cl; // Pal

exports.cPal = cPal;
var cpalindrom = cpal + bas.cin + phn.cdrom; // palindrom

exports.cpalindrom = cpalindrom;
var cPalindrom = cPal + bas.cin + phn.cdrom; // Palindrom

exports.cPalindrom = cPalindrom;
var caverage = phn.cave + phn.crage; // average

exports.caverage = caverage;
var cAverage = phn.cAve + phn.crage; // Average

exports.cAverage = cAverage;
var cclient = phn.ccli + phn.cent; // client

exports.cclient = cclient;
var cClient = phn.cCli + phn.cent; // Client

exports.cClient = cClient;
var crules = bas.cr + phn.cules; // rules

exports.crules = crules;
var cRules = bas.cR + phn.cules; // Rules

exports.cRules = cRules;
var ccustom = phn.ccust + bas.com; // custom

exports.ccustom = ccustom;
var cCustom = phn.cCust + bas.com; // Custom

exports.cCustom = cCustom;
var ccommand = phn.ccom + phn.cmand; // command

exports.ccommand = ccommand;
var cCommand = phn.cCom + phn.cmand; // Command

exports.cCommand = cCommand;
var cCOMMAND = phn.cCOM + phn.cMAND; // COMMAND

exports.cCOMMAND = cCOMMAND;
var ccommands = ccommand + bas.cs; // commands

exports.ccommands = ccommands;
var cCommands = cCommand + bas.cs; // Commands

exports.cCommands = cCommands;
var cqueue = bas.cqu + bas.ceu + bas.ce; // queue

exports.cqueue = cqueue;
var cQueue = bas.cQu + bas.ceu + bas.ce; // Queue

exports.cQueue = cQueue;
var cblob = bas.cb + phn.clob; // blob

exports.cblob = cblob;
var cBlob = bas.cB + phn.clob; // Blob

exports.cBlob = cBlob;
var cframe = bas.cf + phn.crame; // frame

exports.cframe = cframe;
var cFrame = bas.cF + phn.crame; // Frame

exports.cFrame = cFrame;
var calias = bas.cal + phn.cias; // alias

exports.calias = calias;
var cAlias = bas.cAl + phn.cias; // Alias

exports.cAlias = cAlias;
var caliases = calias + bas.ces; // aliases

exports.caliases = caliases;
var cAliases = cAlias + bas.ces; // Aliases

exports.cAliases = cAliases;
var csequencer = phn.cseq + bas.cue + phn.cncer; // sequencer

exports.csequencer = csequencer;
var cSequencer = phn.cSeq + bas.cue + phn.cncer; // Sequencer

exports.cSequencer = cSequencer;
var cprimary = phn.cpri + phn.cmary; // primary

exports.cprimary = cprimary;
var cPrimary = phn.cPri + phn.cmary; // Primary

exports.cPrimary = cPrimary;
var csecondary = unt.csecond + phn.cary; // secondary

exports.csecondary = csecondary;
var cSecondary = unt.cSecond + phn.cary; // Secondary

exports.cSecondary = cSecondary;
var ctertiary = phn.ctert + phn.ciary; // tertiary

exports.ctertiary = ctertiary;
var cTertiary = phn.cTert + phn.ciary; // Tertiary

exports.cTertiary = cTertiary;
var cdelimit = bas.cde + climit; // delimit

exports.cdelimit = cdelimit;
var cDelimit = bas.cDe + climit; // Delimit

exports.cDelimit = cDelimit;
var cdelimiter = cdelimit + bas.cer; // delimiter

exports.cdelimiter = cdelimiter;
var cDelimiter = cDelimit + bas.cer; // Delimiter

exports.cDelimiter = cDelimiter;
var cdelimiters = cdelimiter + bas.cs; // delimiters

exports.cdelimiters = cdelimiters;
var cDelimiters = cDelimiter + bas.cs; // Delimiters

exports.cDelimiters = cDelimiters;
var cdelimited = cdelimit + bas.ced; // delimited

exports.cdelimited = cdelimited;
var cDelimited = cDelimit + bas.ced; // Delimited

exports.cDelimited = cDelimited;
var cdelimiting = cdelimit + phn.cing; // delimiting

exports.cdelimiting = cdelimiting;
var cDelimiting = cDelimit + phn.cing; // Delimiting

exports.cDelimiting = cDelimiting;
var chelp = bas.che + bas.clp; // help

exports.chelp = chelp;
var cHelp = bas.cHe + bas.clp; // Help

exports.cHelp = cHelp;
var cprint = bas.cp + phn.crint; // print

exports.cprint = cprint;
var cPrint = bas.cP + phn.crint; // Print

exports.cPrint = cPrint;
var chive = bas.ch + phn.cive; // hive

exports.chive = chive;
var cHive = bas.cH + phn.cive; // Hive

exports.cHive = cHive;
var cgenerator = phn.cgen + bas.cer + phn.cator; // generator

exports.cgenerator = cgenerator;
var cGenerator = phn.cGen + bas.cer + phn.cator; // Generator

exports.cGenerator = cGenerator;
var cindex = bas.cin + phn.cdex; // index

exports.cindex = cindex;
var cIndex = bas.cIn + phn.cdex; // Index

exports.cIndex = cIndex;
var cabout = bas.ca + phn.cbout; // about

exports.cabout = cabout;
var cAbout = bas.cA + phn.cbout; // About

exports.cAbout = cAbout;
var cstart = bas.cs + phn.ctart; // start

exports.cstart = cstart;
var cStart = bas.cS + phn.ctart; // Start

exports.cStart = cStart;
var cstarts = cstart + bas.cs; // starts

exports.cstarts = cstarts;
var cStarts = cStart + bas.cs; // Starts

exports.cStarts = cStarts;
var cstarted = cstart + bas.ced; // started

exports.cstarted = cstarted;
var cStarted = cStart + bas.ced; // Started

exports.cStarted = cStarted;
var cstartup = cstart + bas.cup; // startup

exports.cstartup = cstartup;
var cstarting = cstart + phn.cing; // starting

exports.cstarting = cstarting;
var cStarting = cStart + phn.cing; // Starting

exports.cStarting = cStarting;
var coutput = cout + cput; // output

exports.coutput = coutput;
var cOutput = cOut + cput; // Output

exports.cOutput = cOutput;
var cmetric = phn.cmet + phn.cric; // metric

exports.cmetric = cmetric;
var cMetric = phn.cMet + phn.cric; // Metric

exports.cMetric = cMetric;
var cmetrics = cmetric + bas.cs; // metrics

exports.cmetrics = cmetrics;
var cMetrics = cMetric + bas.cs; // Metrics

exports.cMetrics = cMetrics;
var crack = bas.cr + phn.cack; // rack

exports.crack = crack;
var cRack = bas.cR + phn.cack; // Rack

exports.cRack = cRack;
var ctrack = bas.ct + crack; // track

exports.ctrack = ctrack;
var cTrack = bas.cT + crack; // Track

exports.cTrack = cTrack;
var ctracking = ctrack + phn.cing; // tracking

exports.ctracking = ctracking;
var cTracking = cTrack + phn.cing; // Tracking

exports.cTracking = cTracking;
var cstack = bas.cst + phn.cack; // stack

exports.cstack = cstack;
var cStack = bas.cSt + phn.cack; // Stack

exports.cStack = cStack;
var cstandard = bas.cst + cand + phn.card; // standard

exports.cstandard = cstandard;
var cStandard = bas.cSt + cand + phn.card; // Standard

exports.cStandard = cStandard;
var cdeviation = phn.cdev + bas.cia + phn.ction; // deviation

exports.cdeviation = cdeviation;
var cDeviation = phn.cDev + bas.cia + phn.ction; // Deviation

exports.cDeviation = cDeviation;
var canalysis = phn.cana + bas.cly + phn.csis; // analysis

exports.canalysis = canalysis;
var cAnalysis = phn.cAna + bas.cly + phn.csis; // Analysis

exports.cAnalysis = cAnalysis;
var cclear = bas.ccl + phn.cear; // clear

exports.cclear = cclear;
var cClear = bas.cCl + phn.cear; // Clear

exports.cClear = cClear;
var cversion = phn.cver + phn.csion; // version

exports.cversion = cversion;
var cVersion = phn.cVer + phn.csion; // Version

exports.cVersion = cVersion;
var ccontrol = phn.ccon + phn.ctrol; // control

exports.ccontrol = ccontrol;
var cControl = phn.cCon + phn.ctrol; // Control

exports.cControl = cControl;
var cperform = phn.cper + cform; // perform

exports.cperform = cperform;
var cPerform = phn.cPer + cform; // Perform

exports.cPerform = cPerform;
var cperformance = cperform + phn.cance; // performance

exports.cperformance = cperformance;
var cPerformance = cPerform + phn.cance; // Performance

exports.cPerformance = cPerformance;
var cconversion = phn.ccon + cversion; // conversion

exports.cconversion = cconversion;
var cConversion = phn.cCon + cversion; // Conversion

exports.cConversion = cConversion;
var cpass = bas.cp + phn.cass; // pass

exports.cpass = cpass;
var cPass = bas.cP + phn.cass; // Pass

exports.cPass = cPass;
var cPASS = bas.cP + phn.cASS; // PASS

exports.cPASS = cPASS;
var cpassed = cpass + bas.ced; // passed

exports.cpassed = cpassed;
var cPassed = cPass + bas.ced; // Passed

exports.cPassed = cPassed;
var cPASSED = cPASS + bas.cED; // PASSED

exports.cPASSED = cPASSED;
var cpassing = cpass + phn.cing; // passing

exports.cpassing = cpassing;
var cPassing = cPass + phn.cing; // Passing

exports.cPassing = cPassing;
var cbypass = bas.cby + cpass; // bypass

exports.cbypass = cbypass;
var cBypass = bas.cBy + cpass; // Bypass

exports.cBypass = cBypass;
var cbypasses = cbypass + bas.ces; // bypasses

exports.cbypasses = cbypasses;
var cBypasses = cBypass + bas.ces; // Bypasses

exports.cBypasses = cBypasses;
var cbypassed = cbypass + bas.ced; // bypassed

exports.cbypassed = cbypassed;
var cBypassed = cBypass + bas.ced; // Bypassed

exports.cBypassed = cBypassed;
var cbypassing = cbypass + phn.cing; // bypassing

exports.cbypassing = cbypassing;
var cBypassing = cBypass + phn.cing; // Bypassing

exports.cBypassing = cBypassing;
var cfail = bas.cf + phn.cail; // fail

exports.cfail = cfail;
var cFail = bas.cF + phn.cail; // Fail

exports.cFail = cFail;
var cFAIL = bas.cF + phn.cAIL; // FAIL

exports.cFAIL = cFAIL;
var cfailed = cfail + bas.ced; // failed

exports.cfailed = cfailed;
var cFailed = cFail + bas.ced; // Failed

exports.cFailed = cFailed;
var cFAILED = cFAIL + bas.cED; // FAILED

exports.cFAILED = cFAILED;
var cfailure = cfail + phn.cure; // failure

exports.cfailure = cfailure;
var cFailure = cFail + phn.cure; // Failure

exports.cFailure = cFailure;
var csimplified = phn.csim + bas.cpl + phn.cified; // simplified

exports.csimplified = csimplified;
var cSimplified = phn.cSim + bas.cpl + phn.cified; // Simplified

exports.cSimplified = cSimplified;
var ctraditional = phn.ctrad + bas.ci + phn.ctional; // traditional

exports.ctraditional = ctraditional;
var cTraditional = phn.cTrad + bas.ci + phn.ctional; // Traditional

exports.cTraditional = cTraditional;
var cground = bas.cgr + phn.cound; // ground

exports.cground = cground;
var cGround = bas.cGr + phn.cound; // Ground

exports.cGround = cGround;
var cyell = bas.cye + bas.cll; // yell

exports.cyell = cyell;
var cYell = bas.cYe + bas.cll; // Yell

exports.cYell = cYell;
var clack = bas.cla + bas.cck; // lack

exports.clack = clack;
var cLack = bas.cLa + bas.cck; // Lack

exports.cLack = cLack;
var clane = bas.cl + phn.cane; // lane

exports.clane = clane;
var cLane = bas.cL + phn.cane; // Lane

exports.cLane = cLane;
var csection = phn.csec + phn.ction; // section

exports.csection = csection;
var cSection = phn.cSec + phn.ction; // Section

exports.cSection = cSection;
var csections = csection + bas.cs; // sections

exports.csections = csections;
var cSections = cSection + bas.cs; // Sections

exports.cSections = cSections;
var cunit = phn.cuni + bas.ct; // unit

exports.cunit = cunit;
var cUnit = phn.cUni + bas.ct; // Unit

exports.cUnit = cUnit;
var cunits = cunit + bas.cs;
exports.cunits = cunits;
var cUnits = cUnit + bas.cs;
exports.cUnits = cUnits;
var cgeneric = phn.cgen + bas.ce + phn.cric; // generic

exports.cgeneric = cgeneric;
var cGeneric = phn.cGen + bas.ce + phn.cric; // Generic

exports.cGeneric = cGeneric;
var cisotope = phn.ciso + phn.ctope; // isotope

exports.cisotope = cisotope;
var cIsotope = phn.cIso + phn.ctope; // Isotope

exports.cIsotope = cIsotope;
var cphonic = phn.cphon + bas.cic; // phonic

exports.cphonic = cphonic;
var cPhonic = phn.cPhon + bas.cic; // Phonic

exports.cPhonic = cPhonic;
var cphonics = cphonic + bas.cs; // phonics

exports.cphonics = cphonics;
var cPhonics = cPhonic + bas.cs; // Phonics

exports.cPhonics = cPhonics;
var cshape = phn.csha + bas.cpe; // shape

exports.cshape = cshape;
var cShape = phn.cSha + bas.cpe; // Shape

exports.cShape = cShape;
var cexport = bas.cex + cport; // export

exports.cexport = cexport;
var cExport = bas.cEx + cport; // Export

exports.cExport = cExport;
var cplay = bas.cp + phn.clay; // play

exports.cplay = cplay;
var cPlay = bas.cP + phn.clay; // Play

exports.cPlay = cPlay;
var cdisplay = bas.cd + bas.cis + cplay; // display

exports.cdisplay = cdisplay;
var cDisplay = bas.cD + bas.cis + cplay; // Display

exports.cDisplay = cDisplay;
var csum = bas.csu + bas.cm; // sum

exports.csum = csum;
var cSum = bas.cSu + bas.cm; // Sum

exports.cSum = cSum;
var csummary = csum + phn.cmary; // summary

exports.csummary = csummary;
var cSummary = cSum + phn.cmary; // Summary

exports.cSummary = cSummary;
var csuggest = phn.csug + phn.cgest; // suggest

exports.csuggest = csuggest;
var cSuggest = phn.cSug + phn.cgest; // Suggest

exports.cSuggest = cSuggest;
var csuggested = csuggest + bas.ced; // suggested

exports.csuggested = csuggested;
var cSuggested = cSuggest + bas.ced; // Suggested

exports.cSuggested = cSuggested;
var cline = bas.cli + bas.cne; // line

exports.cline = cline;
var cLine = bas.cLi + bas.cne; // Line

exports.cLine = cLine;
var cdocument = gen.cdoc + bas.cu + phn.cment; // document

exports.cdocument = cdocument;
var cDocument = gen.cDoc + bas.cu + phn.cment; // Document

exports.cDocument = cDocument;
var cqualified = bas.cq + phn.cual + phn.cified; // qualified

exports.cqualified = cqualified;
var cQualified = bas.cQ + phn.cual + phn.cified; // Qualified

exports.cQualified = cQualified;
var cfix = bas.cf + bas.cix; // fix

exports.cfix = cfix;
var cFix = bas.cF + bas.cix; // Fix

exports.cFix = cFix;
var cprefix = phn.cpre + cfix; // prefix

exports.cprefix = cprefix;
var cPrefix = phn.cPre + cfix; // Prefix

exports.cPrefix = cPrefix;
var csuffix = phn.csuf + cfix; // suffix

exports.csuffix = csuffix;
var cSuffix = phn.cSuf + cfix; // Suffix

exports.cSuffix = cSuffix;
var cdevelop = phn.cdev + bas.ce + phn.clop; // develop

exports.cdevelop = cdevelop;
var cDevelop = phn.cDev + bas.ce + phn.clop; // Develop

exports.cDevelop = cDevelop;
var cDEVELOP = phn.cDEV + bas.cE + phn.cLOP; // DEVELOP

exports.cDEVELOP = cDEVELOP;
var cdevelopment = cdevelop + phn.cment; // development

exports.cdevelopment = cdevelopment;
var cDevelopment = cDevelop + phn.cment; // Development

exports.cDevelopment = cDevelopment;
var cDEVELOPMENT = cDEVELOP + phn.cMENT; // DEVELOPMENT

exports.cDEVELOPMENT = cDEVELOPMENT;
var cproduction = phn.cprod + bas.cuc + phn.ction; // production

exports.cproduction = cproduction;
var cProduction = phn.cProd + bas.cuc + phn.ction; // Production

exports.cProduction = cProduction;
var cPRODUCTION = phn.cPROD + bas.cUC + phn.cTION; // PRODUCTION

exports.cPRODUCTION = cPRODUCTION;
var cstorage = phn.cstor + phn.cage; // storage

exports.cstorage = cstorage;
var cStorage = phn.cStor + phn.cage; // Storage

exports.cStorage = cStorage;
var cstore = phn.cstor + bas.ce; // store

exports.cstore = cstore;
var cStore = phn.cStor + bas.ce; // Store

exports.cStore = cStore;
var cstored = phn.cstor + bas.ced; // stored

exports.cstored = cstored;
var cStored = phn.cStor + bas.ced; // Stored

exports.cStored = cStored;
var cunique = phn.cuni + phn.cque; // unique

exports.cunique = cunique;
var cUnique = phn.cUni + phn.cque; // Unique

exports.cUnique = cUnique;
var cduplicate = phn.cdup + bas.cli + phn.ccate; // duplicate

exports.cduplicate = cduplicate;
var cDuplicate = phn.cDup + bas.cli + phn.ccate; // Duplicate

exports.cDuplicate = cDuplicate;
var cplease = bas.cpl + phn.cease; // please

exports.cplease = cplease;
var cPlease = bas.cPl + phn.cease; // Please

exports.cPlease = cPlease;
var center = bas.cen + phn.cter; // enter

exports.center = center;
var cEnter = bas.cEn + phn.cter; // Enter

exports.cEnter = cEnter;
var centers = center + bas.cs; // enters

exports.centers = centers;
var cEnters = cEnter + bas.cs; // Enters

exports.cEnters = cEnters;
var centered = center + bas.ced; // entered

exports.centered = centered;
var cEntered = cEnter + bas.ced; // Entered

exports.cEntered = cEntered;
var centering = center + phn.cing; // entering

exports.centering = centering;
var cEntering = cEnter + phn.cing; // Entering

exports.cEntering = cEntering;
var cwere = bas.cw + phn.cere; // were

exports.cwere = cwere;
var cWere = bas.cW + phn.cere; // Were

exports.cWere = cWere;
var cwhere = bas.cwh + phn.cere; // where

exports.cwhere = cwhere;
var cWhere = bas.cWh + phn.cere; // Where

exports.cWhere = cWhere;
var cher = bas.che + bas.cr; // her

exports.cher = cher;
var cHer = bas.cHe + bas.cr; // Her

exports.cHer = cHer;
var chim = bas.chi + bas.cm; // him

exports.chim = chim;
var cHim = bas.cHi + bas.cm; // Him

exports.cHim = cHim;
var chers = cher + bas.cs; // hers

exports.chers = chers;
var cHers = cHer + bas.cs; // Hers

exports.cHers = cHers;
var chis = bas.chi + bas.cs; // his

exports.chis = chis;
var cHis = bas.cHi + bas.cs; // His

exports.cHis = cHis;
var cthem = bas.cth + bas.cem; // them

exports.cthem = cthem;
var cThem = bas.cTh + bas.cem; // Them

exports.cThem = cThem;
var cthose = bas.cth + phn.cose; // those

exports.cthose = cthose;
var cThose = bas.cTh + phn.cose; // Those

exports.cThose = cThose;
var cthat = bas.cth + bas.cat; // that

exports.cthat = cthat;
var cThat = bas.cTh + bas.cat; // That

exports.cThat = cThat;
var cthis = bas.ct + chis; // this

exports.cthis = cthis;
var cThis = bas.cT + chis; // This

exports.cThis = cThis;
var cwhen = bas.cwh + bas.cen; // when

exports.cwhen = cwhen;
var cWhen = bas.cWh + bas.cen; // When

exports.cWhen = cWhen;
var cwhat = bas.cwh + bas.cat; // what

exports.cwhat = cwhat;
var cWhat = bas.cWh + bas.cat; // What

exports.cWhat = cWhat;
var chow = bas.cho + bas.cw; // how

exports.chow = chow;
var cHow = bas.cHo + bas.cw; // How

exports.cHow = cHow;
var cwhy = bas.cwh + bas.cy; // why

exports.cwhy = cwhy;
var cWhy = bas.cWh + bas.cy; // Why

exports.cWhy = cWhy;
var cother = bas.cot + cher; // other

exports.cother = cother;
var cOther = bas.cOt + cher; // Other

exports.cOther = cOther;
var cabreviation = bas.cab + phn.crev + bas.cia + phn.ction; // abreviation

exports.cabreviation = cabreviation;
var cAbreviation = bas.cAb + phn.crev + bas.cia + phn.ction; // Abreviation

exports.cAbreviation = cAbreviation;
var cabreviations = cabreviation + bas.cs; // abreviations

exports.cabreviations = cabreviations;
var cAbreviations = cAbreviation + bas.cs; // Abreviations

exports.cAbreviations = cAbreviations;
var cacronym = bas.cac + phn.cron + bas.cym; // acronym

exports.cacronym = cacronym;
var cAcronym = bas.cAc + phn.cron + bas.cym; // Acronym

exports.cAcronym = cAcronym;
var cacronyms = cacronym + bas.cs; // acronyms

exports.cacronyms = cacronyms;
var cAcronyms = cAcronym + bas.cs; // Acronyms

exports.cAcronyms = cAcronyms;
var csolve = bas.cs + phn.colve; // solve

exports.csolve = csolve;
var cSolve = bas.cS + phn.colve; // Solve

exports.cSolve = cSolve;
var cLehmer = bas.cLe + bas.chm + bas.cer; // Lehmer

exports.cLehmer = cLehmer;
var cdeep = bas.cd + phn.ceep; // deep

exports.cdeep = cdeep;
var cDeep = bas.cD + phn.ceep; // Deep

exports.cDeep = cDeep;
var cclone = bas.ccl + num.cone; // clone

exports.cclone = cclone;
var cClone = bas.cCl + num.cone; // Clone

exports.cClone = cClone;
var ccursive = phn.ccur + phn.csive; // cursive

exports.ccursive = ccursive;
var cCursive = phn.cCur + phn.csive; // Cursive

exports.cCursive = cCursive;
var crecursive = bas.cre + ccursive; // recursive

exports.crecursive = crecursive;
var cRecursive = bas.cRe + ccursive; // Recursive

exports.cRecursive = cRecursive;
var cexpansion = phn.cexp + bas.can + phn.csion; // expansion

exports.cexpansion = cexpansion;
var cExpansion = phn.cExp + bas.can + phn.csion; // Expansion

exports.cExpansion = cExpansion;
var cscreen = bas.csc + phn.creen; // screen

exports.cscreen = cscreen;
var cScreen = bas.cSc + phn.creen; // Screen

exports.cScreen = cScreen;
var cyou = bas.cyo + bas.cu; // you

exports.cyou = cyou;
var cYou = bas.cYo + bas.cu; // You

exports.cYou = cYou;
var cwould = bas.cw + phn.could; // would

exports.cwould = cwould;
var cWould = bas.cW + phn.could; // Would

exports.cWould = cWould;
var cshould = bas.csh + phn.could; // should

exports.cshould = cshould;
var cShould = bas.cSh + phn.could; // Should

exports.cShould = cShould;
var ccould = bas.cc + phn.could; // could

exports.ccould = ccould;
var cCould = bas.cC + phn.could; // Could

exports.cCould = cCould;
var clike = bas.cl + phn.cike; // like

exports.clike = clike;
var cLike = bas.cL + phn.cike; // Like

exports.cLike = cLike;
var cfine = bas.cf + phn.cine; // fine

exports.cfine = cfine;
var cFine = bas.cF + phn.cine; // Fine

exports.cFine = cFine;
var cdefine = bas.cde + cfine; // define

exports.cdefine = cdefine;
var cDefine = bas.cDe + cfine; // Define

exports.cDefine = cDefine;
var cdefined = cdefine + bas.cd; // defined

exports.cdefined = cdefined;
var cDefined = cDefine + bas.cd; // Defined

exports.cDefined = cDefined;
var cdefines = cdefine + bas.cs; // defines

exports.cdefines = cdefines;
var cDefines = cDefine + bas.cs; // Defines

exports.cDefines = cDefines;
var cdefining = bas.cde + phn.cfin + phn.cing; // defining

exports.cdefining = cdefining;
var cDefining = bas.cDe + phn.cfin + phn.cing; // Defining

exports.cDefining = cDefining;
var cfill = bas.cf + phn.cill; // fill

exports.cfill = cfill;
var cFill = bas.cF + phn.cill; // Fill

exports.cFill = cFill;
var cfulfillment = phn.cful + cfill + phn.cment; // fulfillment

exports.cfulfillment = cfulfillment;
var cFulfillment = phn.cFul + cfill + phn.cment; // Fulfillment

exports.cFulfillment = cFulfillment;
var coptimized = phn.copt + bas.cim + phn.cized; // optimized

exports.coptimized = coptimized;
var cOptimized = phn.cOpt + bas.cim + phn.cized; // Optimized

exports.cOptimized = cOptimized;
var csome = bas.cs + phn.come; // some

exports.csome = csome;
var cSome = bas.cS + phn.come; // Some

exports.cSome = cSome;
var ccomb = bas.cc + phn.comb; // comb

exports.ccomb = ccomb;
var cComb = bas.cC + phn.comb; // Comb

exports.cComb = cComb;
var ccombine = ccomb + phn.cine; // combine

exports.ccombine = ccombine;
var cCombine = cComb + phn.cine; // Combine

exports.cCombine = cCombine;
var ccombines = ccombine + bas.cs; // combines

exports.ccombines = ccombines;
var cCombines = cCombine + bas.cs; // Combines

exports.cCombines = cCombines;
var ccombined = ccombine + bas.cd; // combined

exports.ccombined = ccombined;
var cCombined = cCombine + bas.cd; // Combined

exports.cCombined = cCombined;
var ccombining = ccomb + bas.cin + phn.cing; // combining

exports.ccombining = ccombining;
var cCombining = cComb + bas.cin + phn.cing; // Combining

exports.cCombining = cCombining;
var crecombine = bas.cre + ccombine; // recombine

exports.crecombine = crecombine;
var cRecombine = bas.cRe + ccombine; // Recombine

exports.cRecombine = cRecombine;
var ccombination = ccomb + bas.cin + phn.cation; // combination

exports.ccombination = ccombination;
var cCombination = cComb + bas.cin + phn.cation; // Combination

exports.cCombination = cCombination;
var ccombinations = ccombination + bas.cs; // combinations

exports.ccombinations = ccombinations;
var cCombinations = cCombination + bas.cs; // Combinations

exports.cCombinations = cCombinations;
var crecognizer = phn.crec + bas.cog + bas.cn + phn.cizer; // recognizer

exports.crecognizer = crecognizer;
var cRecognizer = phn.cRec + bas.cog + bas.cn + phn.cizer; // Recognizer

exports.cRecognizer = cRecognizer;
var cpat = bas.cpa + bas.ct; // pat

exports.cpat = cpat;
var cPat = bas.cPa + bas.ct; // Pat

exports.cPat = cPat;
var cpatt = cpat + bas.ct; // patt

exports.cpatt = cpatt;
var cPatt = cPat + bas.ct; // Patt

exports.cPatt = cPatt;
var cpattern = cpatt + phn.cern; // pattern

exports.cpattern = cpattern;
var cPattern = cPatt + phn.cern; // Pattern

exports.cPattern = cPattern;
var cpatterns = cpattern + bas.cs; // patterns

exports.cpatterns = cpatterns;
var cPatterns = cPattern + bas.cs; // Patterns

exports.cPatterns = cPatterns;
var ccoma = gen.ccom + bas.ca; // coma

exports.ccoma = ccoma;
var cComa = gen.cCom + bas.ca; // Coma

exports.cComa = cComa;
var ccomas = ccoma + bas.cs; // comas

exports.ccomas = ccomas;
var cComas = cComa + bas.cs; // Comas

exports.cComas = cComas;
var cseparate = bas.cse + bas.cpa + phn.crate; // separate

exports.cseparate = cseparate;
var cSeparate = bas.cSe + bas.cpa + phn.crate; // Separate

exports.cSeparate = cSeparate;
var cseparated = cseparate + bas.cd; // separated

exports.cseparated = cseparated;
var cSeparated = cSeparate + bas.cd; // Separated

exports.cSeparated = cSeparated;
var csea = bas.cse + bas.ca; // sea

exports.csea = csea;
var cSea = bas.cSe + bas.ca; // Sea

exports.cSea = cSea;
var csearch = csea + phn.crch; // search

exports.csearch = csearch;
var cSearch = cSea + phn.crch; // Search

exports.cSearch = cSearch;
var csearches = csearch + bas.ces; // searches

exports.csearches = csearches;
var cSearches = cSearch + bas.ces; // Searches

exports.cSearches = cSearches;
var csearched = csearch + bas.ced; // searched

exports.csearched = csearched;
var cSearched = cSearch + bas.ced; // Searched

exports.cSearched = cSearched;
var csearching = csearch + phn.cing; // searching

exports.csearching = csearching;
var cSearching = cSearch + phn.cing; // Searching

exports.cSearching = cSearching;
var cneed = bas.cn + phn.ceed; // need

exports.cneed = cneed;
var cNeed = bas.cN + phn.ceed; // Need

exports.cNeed = cNeed;
var cimplement = bas.cim + phn.cple + phn.cment; // implement

exports.cimplement = cimplement;
var cImplement = bas.cIm + phn.cple + phn.cment; // Implement

exports.cImplement = cImplement;
var cimplements = cimplement + bas.cs; // implements

exports.cimplements = cimplements;
var cImplements = cImplement + bas.cs; // Implements

exports.cImplements = cImplements;
var cimplementation = cimplement + phn.cation; // implementation

exports.cimplementation = cimplementation;
var cImplementation = cImplement + phn.cation; // Implementation

exports.cImplementation = cImplementation;
var cgoing = bas.cgo + phn.cing; // going

exports.cgoing = cgoing;
var cGoing = bas.cGo + phn.cing; // Going

exports.cGoing = cGoing;
var cmain = bas.cm + phn.cain; // main

exports.cmain = cmain;
var cMain = bas.cM + phn.cain; // Main

exports.cMain = cMain;
var cprogram = phn.cpro + bas.cg + phn.cram; // program

exports.cprogram = cprogram;
var cProgram = phn.cPro + bas.cg + phn.cram; // Program

exports.cProgram = cProgram;
var cloop = bas.cl + phn.coop; // loop

exports.cloop = cloop;
var cLoop = bas.cL + phn.coop; // Loop

exports.cLoop = cLoop;
var cgood = bas.cg + phn.cood; // good

exports.cgood = cgood;
var cGood = bas.cG + phn.cood; // Good

exports.cGood = cGood;
var cbye = bas.cby + bas.ce; // bye

exports.cbye = cbye;
var cBye = bas.cBy + bas.ce; // Bye

exports.cBye = cBye;
var chave = bas.ch + phn.cave; // have

exports.chave = chave;
var cHave = bas.cH + phn.cave; // Have

exports.cHave = cHave;
var cnice = bas.cn + phn.cice; // nice

exports.cnice = cnice;
var cNice = bas.cN + phn.cice; // Nice

exports.cNice = cNice;
var cday = bas.cda + bas.cy; // day

exports.cday = cday;
var cDay = bas.cDa + bas.cy; // Day

exports.cDay = cDay;
var cstay = bas.cs + phn.ctay; // stay

exports.cstay = cstay;
var cStay = bas.cS + phn.ctay; // Stay

exports.cStay = cStay;
var csafe = bas.cs + phn.cafe; // safe

exports.csafe = csafe;
var cSafe = bas.cS + phn.cafe; // Safe

exports.cSafe = cSafe;
var cwas = bas.cwa + bas.cs; // was

exports.cwas = cwas;
var cWas = bas.cWa + bas.cs; // Was

exports.cWas = cWas;
var cbig = bas.cbi + bas.cg; // big

exports.cbig = cbig;
var cBig = bas.cBi + bas.cg; // Big

exports.cBig = cBig;
var cbigger = cbig + phn.cger; // bigger

exports.cbigger = cbigger;
var cBigger = cBig + phn.cger; // Bigger

exports.cBigger = cBigger;
var cbiggest = cbig + phn.cgest; // biggest

exports.cbiggest = cbiggest;
var cBiggest = cBig + phn.cgest; // Biggest

exports.cBiggest = cBiggest;
var cspecific = phn.cspec + phn.cific; // specific

exports.cspecific = cspecific;
var cSpecific = phn.cSpec + phn.cific; // Specific

exports.cSpecific = cSpecific;
var cspecified = phn.cspec + phn.cified; // specified

exports.cspecified = cspecified;
var cSpecified = phn.cSpec + phn.cified; // Specified

exports.cSpecified = cSpecified;
var cdomain = bas.cdo + cmain; // domain

exports.cdomain = cdomain;
var cDomain = bas.cDo + cmain; // Domain

exports.cDomain = cDomain;
var cmode = bas.cm + phn.code; // mode

exports.cmode = cmode;
var cMode = bas.cM + phn.code; // Mode

exports.cMode = cMode;
var csymbol = phn.csym + phn.cbol; // symbol

exports.csymbol = csymbol;
var cSymbol = phn.cSym + phn.cbol; // Symbol

exports.cSymbol = cSymbol;
var csymbols = csymbol + bas.cs; // symbols

exports.csymbols = csymbols;
var cSymbols = cSymbol + bas.cs; // Symbols

exports.cSymbols = cSymbols;
var cresolve = phn.cres + phn.colv + bas.ce; // resolve

exports.cresolve = cresolve;
var cResolve = phn.cRes + phn.colv + bas.ce; // Resolve

exports.cResolve = cResolve;
var cresolved = cresolve + bas.cd; // resolved

exports.cresolved = cresolved;
var cResolved = cResolve + bas.cd; // Resolved

exports.cResolved = cResolved;
var cresolving = phn.cres + phn.colv + phn.cing; // resolving

exports.cresolving = cresolving;
var cResolving = phn.cRes + phn.colv + phn.cing; // Resolving

exports.cResolving = cResolving;
var cvariation = phn.cvar + bas.cia + phn.ction; // variation

exports.cvariation = cvariation;
var cVariation = phn.cVar + bas.cia + phn.ction; // Variation

exports.cVariation = cVariation;
var cterm = bas.ct + phn.cerm; // term

exports.cterm = cterm;
var cTerm = bas.cT + phn.cerm; // Term

exports.cTerm = cTerm;
var ccost = bas.cc + phn.cost; // cost

exports.ccost = ccost;
var cCost = bas.cC + phn.cost; // Cost

exports.cCost = cCost;
var cperiod = phn.cper + phn.ciod; // period

exports.cperiod = cperiod;
var cPeriod = phn.cPer + phn.ciod; // Period

exports.cPeriod = cPeriod;
var ccannot = ccan + gen.cnot; // cannot

exports.ccannot = ccannot;
var cCannot = cCan + gen.cnot; // Cannot

exports.cCannot = cCannot;
var cused = cuse + bas.cd; // used

exports.cused = cused;
var cUsed = cUse + bas.cd; // Used

exports.cUsed = cUsed;
var cusing = bas.cus + phn.cing; // using

exports.cusing = cusing;
var cUsing = bas.cUs + phn.cing; // Using

exports.cUsing = cUsing;
var cbreak = bas.cbr + phn.ceak; // break

exports.cbreak = cbreak;
var cBreak = bas.cBr + phn.ceak; // Break

exports.cBreak = cBreak;
var cinto = bas.ci + phn.cnto; // into

exports.cinto = cinto;
var cInto = bas.cI + phn.cnto; // Into

exports.cInto = cInto;
var cunable = bas.cun + phn.cable; // unable

exports.cunable = cunable;
var cUnable = bas.cUn + phn.cable; // Unable

exports.cUnable = cUnable;
var cnow = bas.cno + bas.cw; // now

exports.cnow = cnow;
var cNow = bas.cNo + bas.cw; // Now

exports.cNow = cNow;
var cknow = bas.ck + cnow; // know

exports.cknow = cknow;
var cKnow = bas.cK + cnow; // Know

exports.cKnow = cKnow;
var cknown = cknow + bas.cn; // known

exports.cknown = cknown;
var cKnown = cKnow + bas.cn; // Known

exports.cKnown = cKnown;
var cunknown = bas.cun + cknown; // unknown

exports.cunknown = cunknown;
var cUnknown = bas.cUn + cknown; // Unknown

exports.cUnknown = cUnknown;
var ctemp = bas.ct + phn.cemp; // temp

exports.ctemp = ctemp;
var cTemp = bas.cT + phn.cemp; // Temp

exports.cTemp = cTemp;
var ctempt = ctemp + bas.ct; // tempt

exports.ctempt = ctempt;
var cTempt = cTemp + bas.ct; // Tempt

exports.cTempt = cTempt;
var cattempt = bas.cat + ctempt; // attempt

exports.cattempt = cattempt;
var cAttempt = bas.cA + bas.ct + ctempt; // Attempt

exports.cAttempt = cAttempt;
var cattempts = cattempt + bas.cs; // attempts

exports.cattempts = cattempts;
var cAttempts = cAttempt + bas.cs; // Attempts

exports.cAttempts = cAttempts;
var cattempted = cattempt + bas.ced; // attempted

exports.cattempted = cattempted;
var cAttempted = cAttempt + bas.ced; // Attempted

exports.cAttempted = cAttempted;
var cattempting = cattempt + phn.cing; // attempting

exports.cattempting = cattempting;
var cAttempting = cAttempt + phn.cing; // Attempting

exports.cAttempting = cAttempting;
var cmat = bas.cma + bas.ct; // mat

exports.cmat = cmat;
var cMat = bas.cMa + bas.ct; // Mat

exports.cMat = cMat;
var cformat = cfor + cmat; // format

exports.cformat = cformat;
var cFormat = cFor + cmat; // Format

exports.cFormat = cFormat;
var cformats = cformat + bas.cs; // formats

exports.cformats = cformats;
var cFormats = cFormat + bas.cs; // Formats

exports.cFormats = cFormats;
var cformatted = cformat + phn.cted; // formatted

exports.cformatted = cformatted;
var cFormatted = cFormat + phn.cted; // Formatted

exports.cFormatted = cFormatted;
var cformatting = cformat + bas.ct + phn.cing; // formatting

exports.cformatting = cformatting;
var cFormatting = cFormat + bas.ct + phn.cing; // Formatting

exports.cFormatting = cFormatting;
var creformat = bas.cre + cformat; // reformat

exports.creformat = creformat;
var cReformat = bas.cRe + cformat; // Reformat

exports.cReformat = cReformat;
var creformats = creformat + bas.cs; // reformats

exports.creformats = creformats;
var cReformats = cReformat + bas.cs; // Reformats

exports.cReformats = cReformats;
var creformated = creformat + bas.ced; // reformatted

exports.creformated = creformated;
var cReformated = cReformat + bas.ced; // Reformatted

exports.cReformated = cReformated;
var creformating = creformat + phn.cing; // reformatting

exports.creformating = creformating;
var cReformating = cReformat + phn.cing; // Reformatting

exports.cReformating = cReformating;
var ccorrect = phn.ccor + phn.crect; // correct

exports.ccorrect = ccorrect;
var cCorrect = phn.cCor + phn.crect; // Correct

exports.cCorrect = cCorrect;
var ccorrects = ccorrect + bas.cs; // corrects

exports.ccorrects = ccorrects;
var cCorrects = cCorrect + bas.cs; // Corrects

exports.cCorrects = cCorrects;
var ccorrected = ccorrect + bas.ced; // corrected

exports.ccorrected = ccorrected;
var cCorrected = cCorrect + bas.ced; // Corrected

exports.cCorrected = cCorrected;
var ccorrectly = ccorrect + bas.cly; // correctly

exports.ccorrectly = ccorrectly;
var cCorrectly = cCorrect + bas.cly; // Correctly

exports.cCorrectly = cCorrectly;
var ccorrecting = ccorrect + phn.cing; // correcting

exports.ccorrecting = ccorrecting;
var cCorrecting = cCorrect + phn.cing; // Correcting

exports.cCorrecting = cCorrecting;
var cbut = bas.cbu + bas.ct; // but

exports.cbut = cbut;
var cBut = bas.cBu + bas.ct; // But

exports.cBut = cBut;
var crent = bas.cr + phn.cent; // rent

exports.crent = crent;
var cRent = bas.cR + phn.cent; // Rent

exports.cRent = cRent;
var ccurrent = phn.ccur + crent; // current

exports.ccurrent = ccurrent;
var cCurrent = phn.cCur + crent; // Current

exports.cCurrent = cCurrent;
var cdelta = bas.cde + phn.clta; // delta

exports.cdelta = cdelta;
var cDelta = bas.cDe + phn.clta; // Delta

exports.cDelta = cDelta;
var cbeing = bas.cbe + phn.cing; // being

exports.cbeing = cbeing;
var cBeing = bas.cBe + phn.cing; // Being

exports.cBeing = cBeing;
var cskip = bas.csk + bas.cip; // skip

exports.cskip = cskip;
var cSkip = bas.cSk + bas.cip; // Skip

exports.cSkip = cSkip;
var cskips = cskip + bas.cs; // skips

exports.cskips = cskips;
var cSkips = cSkip + bas.cs; // Skips

exports.cSkips = cSkips;
var cskiped = cskip + bas.ced; // skiped

exports.cskiped = cskiped;
var cSkiped = cSkip + bas.ced; // Skiped

exports.cSkiped = cSkiped;
var cskiping = cskip + phn.cing; // skiping

exports.cskiping = cskiping;
var cSkiping = cSkip + phn.cing; // Skiping

exports.cSkiping = cSkiping;
var chad = bas.cha + bas.cd; // had

exports.chad = chad;
var cHad = bas.cHa + bas.cd; // Had

exports.cHad = cHad;
var cchange = bas.cch + phn.cange; // change

exports.cchange = cchange;
var cChange = bas.cCh + phn.cange; // Change

exports.cChange = cChange;
var cCHANGE = bas.cCH + phn.cANGE; // CHANGE

exports.cCHANGE = cCHANGE;
var cpush = bas.cp + phn.cush; // push

exports.cpush = cpush;
var cPush = bas.cP + phn.cush; // Push

exports.cPush = cPush;
var cPUSH = bas.cP + phn.cUSH; // PUSH

exports.cPUSH = cPUSH;
var cpushes = cpush + bas.ces; // pushes

exports.cpushes = cpushes;
var cPushes = cPush + bas.ces; // Pushes

exports.cPushes = cPushes;
var cpushed = cpush + bas.ced; // pushed

exports.cpushed = cpushed;
var cPushed = cPush + bas.ced; // Pushed

exports.cPushed = cPushed;
var cpushing = cpush + phn.cing; // pushing

exports.cpushing = cpushing;
var cPushing = cPush + phn.cing; // Pushing

exports.cPushing = cPushing;
var cexpand = bas.cex + phn.cpand; // expand

exports.cexpand = cexpand;
var cExpand = bas.cEx + phn.cpand; // Expand

exports.cExpand = cExpand;
var cexpands = cexpand + bas.cs; // expands

exports.cexpands = cexpands;
var cExpands = cExpand + bas.cs; // Expands

exports.cExpands = cExpands;
var cexpanded = cexpand + bas.ced; // expanded

exports.cexpanded = cexpanded;
var cExpanded = cExpand + bas.ced; // Expanded

exports.cExpanded = cExpanded;
var cexpanding = cexpand + phn.cing; // expanding

exports.cexpanding = cexpanding;
var cExpanding = cExpand + phn.cing; // Expanding

exports.cExpanding = cExpanding;
var ccall = bas.cc + call; // call

exports.ccall = ccall;
var cCall = bas.cC + call; // Call

exports.cCall = cCall;
var ccalls = ccall + bas.cs; // calls

exports.ccalls = ccalls;
var cCalls = cCall + bas.cs; // Calls

exports.cCalls = cCalls;
var ccalled = ccall + bas.ced; // called

exports.ccalled = ccalled;
var cCalled = cCall + bas.ced; // Called

exports.cCalled = cCalled;
var ccalling = ccall + phn.cing; // calling

exports.ccalling = ccalling;
var cCalling = cCall + phn.cing; // Calling

exports.cCalling = cCalling;
var clook = bas.cl + phn.cook; // look

exports.clook = clook;
var cLook = bas.cL + phn.cook; // Look

exports.cLook = cLook;
var clooks = clook + bas.cs; // looks

exports.clooks = clooks;
var cLooks = cLook + bas.cs; // Looks

exports.cLooks = cLooks;
var clooked = clook + bas.ced; // looked

exports.clooked = clooked;
var cLooked = cLook + bas.ced; // Looked

exports.cLooked = cLooked;
var clooking = clook + phn.cing; // looking

exports.clooking = clooking;
var cLooking = cLook + phn.cing; // Looking

exports.cLooking = cLooking;
var clookup = clook + bas.cup; // lookup

exports.clookup = clookup;
var cLookup = cLook + bas.cup; // Lookup

exports.cLookup = cLookup;
var celse = bas.ce + phn.clse; // else

exports.celse = celse;
var cElse = bas.cE + phn.clse; // Else

exports.cElse = cElse;
var cfar = bas.cfa + bas.cr; // far

exports.cfar = cfar;
var cFar = bas.cFa + bas.cr; // Far

exports.cFar = cFar;
var cspecify = phn.cspec + phn.cify; // specify

exports.cspecify = cspecify;
var cSpecify = phn.cSpec + phn.cify; // Specify

exports.cSpecify = cSpecify;
var csupport = phn.csup + cport; // support

exports.csupport = csupport;
var cSupport = phn.cSup + cport; // Support

exports.cSupport = cSupport;
var csupports = csupport + bas.cs; // supports

exports.csupports = csupports;
var cSupports = cSupport + bas.cs; // Supports

exports.cSupports = cSupports;
var csupported = csupport + bas.ced; // supported

exports.csupported = csupported;
var cSupported = cSupport + bas.ced; // Supported

exports.cSupported = cSupported;
var csupporting = csupport + phn.cing; // supporting

exports.csupporting = csupporting;
var cSupporting = cSupport + phn.cing; // Supporting

exports.cSupporting = cSupporting;
var cfound = bas.cfo + phn.cund; // found

exports.cfound = cfound;
var cFound = bas.cFo + phn.cund; // Found

exports.cFound = cFound;
var cfounded = cfound + bas.ced; // founded

exports.cfounded = cfounded;
var cFounded = cFound + bas.ced; // Founded

exports.cFounded = cFounded;
var cunfounded = bas.cun + cfounded; // unfounded

exports.cunfounded = cunfounded;
var cUnfounded = bas.cUn + cfounded; // Unfounded

exports.cUnfounded = cUnfounded;
var coriginal = phn.cori + bas.cg + phn.cinal; // original

exports.coriginal = coriginal;
var cOriginal = phn.cOri + bas.cg + phn.cinal; // Original

exports.cOriginal = cOriginal;
var coriginals = coriginal + bas.cs; // originals

exports.coriginals = coriginals;
var cOriginals = cOriginal + bas.cs; // Originals

exports.cOriginals = cOriginals;
var ccause = bas.cca + cuse; // cause

exports.ccause = ccause;
var cCause = bas.cCa + cuse; // Cause

exports.cCause = cCause;
var cbecause = bas.cbe + ccause; // because

exports.cbecause = cbecause;
var cBecause = bas.cBe + ccause; // Because

exports.cBecause = cBecause;
var canother = bas.can + cother; // another

exports.canother = canother;
var cAnother = bas.cAn + cother; // Another

exports.cAnother = cAnother;
var cparameter = phn.cpara + phn.cmet + bas.cer; // parameter

exports.cparameter = cparameter;
var cParameter = phn.cPara + phn.cmet + bas.cer; // Parameter

exports.cParameter = cParameter;
var cparameters = cparameter + bas.cs; // parameters

exports.cparameters = cparameters;
var cParameters = cParameter + bas.cs; // Parameters

exports.cParameters = cParameters;
var ctry = bas.ctr + bas.cy; // try

exports.ctry = ctry;
var cTry = bas.cTr + bas.cy; // Try

exports.cTry = cTry;
var ctried = bas.ctr + phn.cied; // tried

exports.ctried = ctried;
var cTried = bas.cTr + phn.cied; // Tried

exports.cTried = cTried;
var ctrying = ctry + phn.cing; // trying

exports.ctrying = ctrying;
var cTrying = cTry + phn.cing; // Trying

exports.cTrying = cTrying;
var cgain = bas.cg + phn.cain; // gain

exports.cgain = cgain;
var cGain = bas.cG + phn.cain; // Gain

exports.cGain = cGain;
var cagain = bas.ca + cgain; // again

exports.cagain = cagain;
var cAgain = bas.cA + cgain; // Again

exports.cAgain = cAgain;
var ctent = bas.ct + phn.cent; // tent

exports.ctent = ctent;
var cTent = bas.cT + phn.cent; // Tent

exports.cTent = cTent;
var ctents = ctent + bas.cs; // tents

exports.ctents = ctents;
var cTents = cTent + bas.cs; // Tents

exports.cTents = cTents;
var ctenting = ctent + phn.cing; // tenting

exports.ctenting = ctenting;
var cTenting = cTent + phn.cing; // Tenting

exports.cTenting = cTenting;
var ccontent = phn.ccon + ctent; // content

exports.ccontent = ccontent;
var cContent = phn.cCon + ctent; // Content

exports.cContent = cContent;
var ccontents = ccontent + bas.cs; // contents

exports.ccontents = ccontents;
var cContents = cContent + bas.cs; // Contents

exports.cContents = cContents;
var cmust = bas.cm + phn.cust; // must

exports.cmust = cmust;
var cMust = bas.cM + phn.cust; // Must

exports.cMust = cMust;
var cprompt = phn.cpro + phn.cmpt; // prompt

exports.cprompt = cprompt;
var cPrompt = phn.cPro + phn.cmpt; // Prompt

exports.cPrompt = cPrompt;
var cexample = bas.cex + phn.cample; // example

exports.cexample = cexample;
var cExample = bas.cEx + phn.cample; // Example

exports.cExample = cExample;
var cEXAMPLE = bas.cEX + phn.cAMPLE; // EXAMPLE

exports.cEXAMPLE = cEXAMPLE;
var cstructure = bas.cst + phn.cruc + phn.cture; // structure

exports.cstructure = cstructure;
var cStructure = bas.cSt + phn.cruc + phn.cture; // Structure

exports.cStructure = cStructure;
var cstructured = cstructure + bas.cd; // structured

exports.cstructured = cstructured;
var cStructured = cStructure + bas.cd; // Structured

exports.cStructured = cStructured;
var cstructures = cstructure + bas.cs; // structures

exports.cstructures = cstructures;
var cStructures = cStructure + bas.cs; // Structures

exports.cStructures = cStructures;
var cmore = bas.cm + phn.core; // more

exports.cmore = cmore;
var cMore = bas.cM + phn.core; // More

exports.cMore = cMore;
var chas = bas.cha + bas.cs; // has

exports.chas = chas;
var cHas = bas.cHa + bas.cs; // Has

exports.cHas = cHas;
var cready = phn.crea + bas.cdy; // ready

exports.cready = cready;
var cReady = phn.cRea + bas.cdy; // Ready

exports.cReady = cReady;
var cREADY = phn.cREA + bas.cDY; // READY

exports.cREADY = cREADY;
var calready = bas.cal + cready; // already

exports.calready = calready;
var cAlready = bas.cAl + cready; // Already

exports.cAlready = cAlready;
var cALREADY = bas.cAL + cREADY; // ALREADY

exports.cALREADY = cALREADY;
var cbeen = bas.cb + phn.ceen; // been

exports.cbeen = cbeen;
var cBeen = bas.cB + phn.ceen; // Been

exports.cBeen = cBeen;
var cfollow = bas.cf + bas.col + clow; // follow

exports.cfollow = cfollow;
var cFollow = bas.cF + bas.col + clow; // Follow

exports.cFollow = cFollow;
var cfollowes = cfollow + bas.ces; // followes

exports.cfollowes = cfollowes;
var cFollowes = cFollow + bas.ces; // Followes

exports.cFollowes = cFollowes;
var cfollowed = cfollow + bas.ced; // followed

exports.cfollowed = cfollowed;
var cFollowed = cFollow + bas.ced; // Followed

exports.cFollowed = cFollowed;
var cfollowing = cfollow + phn.cing; // following

exports.cfollowing = cfollowing;
var cFollowing = cFollow + phn.cing; // Following

exports.cFollowing = cFollowing;
var cdefinition = bas.cde + phn.cfin + phn.cition; // definition

exports.cdefinition = cdefinition;
var cDefinition = bas.cDe + phn.cfin + phn.cition; // Definition

exports.cDefinition = cDefinition;
var cdefinitions = cdefinition + bas.cs; // definitions

exports.cdefinitions = cdefinitions;
var cDefinitions = cDefinition + bas.cs; // Definitions

exports.cDefinitions = cDefinitions;
var cdone = bas.cdo + bas.cne; // done

exports.cdone = cdone;
var cDone = bas.cDo + bas.cne; // Done

exports.cDone = cDone;
var cDONE = bas.cDO + bas.cNE; // DONE

exports.cDONE = cDONE;
var cphase = bas.cph + phn.c_ase; // phase

exports.cphase = cphase;
var cPhase = bas.cPh + phn.c_ase; // Phase

exports.cPhase = cPhase;
var cphases = cphase + bas.cs; // phases

exports.cphases = cphases;
var cPhases = cPhase + bas.cs; // Phases

exports.cPhases = cPhases;
var cphased = cphase + bas.cd; // phased

exports.cphased = cphased;
var cPhased = cPhase + bas.cd; // Phased

exports.cPhased = cPhased;
var cphasing = bas.cph + bas.cas + phn.cing; // phasing

exports.cphasing = cphasing;
var cPhasing = bas.cPh + bas.cas + phn.cing; // Phasing

exports.cPhasing = cPhasing;
var ctick = bas.ct + phn.cick; // tick

exports.ctick = ctick;
var cTick = bas.cT + phn.cick; // Tick

exports.cTick = cTick;
var cyay = bas.cya + bas.cy; // yay

exports.cyay = cyay;
var cYay = bas.cYa + bas.cy; // Yay

exports.cYay = cYay;
var cYAY = bas.cYA + bas.cY; // YAY

exports.cYAY = cYAY;
var ctag = bas.cta + bas.cg; // tag

exports.ctag = ctag;
var cTag = bas.cTa + bas.cg; // Tag

exports.cTag = cTag;
var ctags = ctag + bas.cs; // tags

exports.ctags = ctags;
var cTags = cTag + bas.cs; // Tags

exports.cTags = cTags;
var ctagged = ctag + bas.cg + bas.ced; // tagged

exports.ctagged = ctagged;
var cTagged = cTag + bas.cg + bas.ced; // Tagged

exports.cTagged = cTagged;
var ctagging = ctag + bas.cg + phn.cing; // tagging

exports.ctagging = ctagging;
var cTagging = cTag + bas.cg + phn.cing; // Tagging

exports.cTagging = cTagging;
var clit = bas.cli + bas.ct; // lit

exports.clit = clit;
var cLit = bas.cLi + bas.ct; // Lit

exports.cLit = cLit;
var csplit = bas.csp + clit; // split

exports.csplit = csplit;
var cSplit = bas.cSp + clit; // Split

exports.cSplit = cSplit;
var csplits = csplit + bas.cs; // splits

exports.csplits = csplits;
var cSplits = cSplit + bas.cs; // Splits

exports.cSplits = cSplits;
var csplitting = csplit + bas.ct + phn.cing; // splitting

exports.csplitting = csplitting;
var cSplitting = cSplit + bas.ct + phn.cing; // Splitting

exports.cSplitting = cSplitting;
var cdoing = bas.cdo + phn.cing; // doing

exports.cdoing = cdoing;
var cDoing = bas.cDo + phn.cing; // Doing

exports.cDoing = cDoing;
var cstraight = bas.cs + phn.ctra + phn.cight; // straight

exports.cstraight = cstraight;
var cStraight = bas.cS + phn.ctra + phn.cight; // Straight

exports.cStraight = cStraight;
var cbroker = bas.cbr + phn.coker; // broker

exports.cbroker = cbroker;
var cBroker = bas.cBr + phn.coker; // Broker

exports.cBroker = cBroker;
var cpost = bas.cp + phn.cost; // post

exports.cpost = cpost;
var cPost = bas.cP + phn.cost; // Post

exports.cPost = cPost;
var cposts = cpost + bas.cs; // posts

exports.cposts = cposts;
var cPosts = cPost + bas.cs; // Posts

exports.cPosts = cPosts;
var cposted = cpost + bas.ced; // posted

exports.cposted = cposted;
var cPosted = cPost + bas.ced; // Posted

exports.cPosted = cPosted;
var cposting = cpost + phn.cing; // posting

exports.cposting = cposting;
var cPosting = cPost + phn.cing; // Posting

exports.cPosting = cPosting;
var cmerge = bas.cm + phn.cerge; // merge

exports.cmerge = cmerge;
var cMerge = bas.cM + phn.cerge; // Merge

exports.cMerge = cMerge;
var cMERGE = bas.cM + phn.cERGE; // MERGE

exports.cMERGE = cMERGE;
var cmerges = cmerge + bas.cs; // merges

exports.cmerges = cmerges;
var cMerges = cMerge + bas.cs; // Merges

exports.cMerges = cMerges;
var cmerged = cmerge + bas.cd; // merged

exports.cmerged = cmerged;
var cMerged = cMerge + bas.cd; // Merged

exports.cMerged = cMerged;
var cMERGED = cMERGE + bas.cD; // MERGED

exports.cMERGED = cMERGED;
var cmerging = bas.cm + phn.cerg + phn.cing; // merging

exports.cmerging = cmerging;
var cMerging = bas.cM + phn.cerg + phn.cing; // Merging

exports.cMerging = cMerging;
var cinclude = bas.cin + bas.cc + phn.clude; // include

exports.cinclude = cinclude;
var cInclude = bas.cIn + bas.cc + phn.clude; // Include

exports.cInclude = cInclude;
var cincludes = cinclude + bas.cs; // includes

exports.cincludes = cincludes;
var cIncludes = cInclude + bas.cs; // Includes

exports.cIncludes = cIncludes;
var cincluded = cinclude + bas.cd; // included

exports.cincluded = cincluded;
var cIncluded = cInclude + bas.cd; // Included

exports.cIncluded = cIncluded;
var cincluding = bas.cin + bas.cc + phn.clud + phn.cing; // including

exports.cincluding = cincluding;
var cIncluding = bas.cIn + bas.cc + phn.clud + phn.cing; // Including

exports.cIncluding = cIncluding;
var cfinal = phn.cfin + bas.cal; // final

exports.cfinal = cfinal;
var cFinal = phn.cFin + bas.cal; // Final

exports.cFinal = cFinal;
var cfinals = cfinal + bas.cs; // finals

exports.cfinals = cfinals;
var cFinals = cFinal + bas.cs; // Finals

exports.cFinals = cFinals;
var cfinally = cfinal + bas.cly; // finally

exports.cfinally = cfinally;
var cFinally = cFinal + bas.cly; // Finally

exports.cFinally = cFinally;
var ccaught = phn.ccau + phn.cght; // caught

exports.ccaught = ccaught;
var cCaught = phn.cCau + phn.cght; // Caught

exports.cCaught = cCaught;
var cflat = bas.cf + phn.clat; // flat

exports.cflat = cflat;
var cFlat = bas.cF + phn.clat; // Flat

exports.cFlat = cFlat;
var cflats = cflat + bas.cs; // flats

exports.cflats = cflats;
var cFlats = cFlat + bas.cs; // Flats

exports.cFlats = cFlats;
var cflatten = cflat + phn.cten; // flatten

exports.cflatten = cflatten;
var cFlatten = cFlat + phn.cten; // Flatten

exports.cFlatten = cFlatten;
var cflattened = cflat + bas.cte + phn.cned; // flattened

exports.cflattened = cflattened;
var cFlattened = cFlat + bas.cte + phn.cned; // Flattened

exports.cFlattened = cFlattened;
var cflattening = cflatten + phn.cing; // flattening

exports.cflattening = cflattening;
var cFlattening = cFlatten + phn.cing; // Flattening

exports.cFlattening = cFlattening;
var cside = bas.cs + phn.cide; // side

exports.cside = cside;
var cSide = bas.cS + phn.cide; // Side

exports.cSide = cSide;
var csides = cside + bas.cs; // sides

exports.csides = csides;
var cSides = cSide + bas.cs; // Sides

exports.cSides = cSides;
var csided = cside + bas.cd; // sided

exports.csided = csided;
var cSided = cSide + bas.cd; // Sided

exports.cSided = cSided;
var csiding = phn.csid + phn.cing; // siding

exports.csiding = csiding;
var cSiding = phn.cSid + phn.cing; // Siding

exports.cSiding = cSiding;
var cinside = bas.cin + cside; // inside

exports.cinside = cinside;
var cInside = bas.cIn + cside; // Inside

exports.cInside = cInside;
var ctarget = phn.ctar + cget; // target

exports.ctarget = ctarget;
var cTarget = phn.cTar + cget; // Target

exports.cTarget = cTarget;
var ctargets = ctarget + bas.cs; // targets

exports.ctargets = ctargets;
var cTargets = cTarget + bas.cs; // Targets

exports.cTargets = cTargets;
var ctargeted = ctarget + bas.ced; // targeted

exports.ctargeted = ctargeted;
var cTargeted = cTarget + bas.ced; // Targeted

exports.cTargeted = cTargeted;
var ctargeting = ctarget + phn.cing; // targeting

exports.ctargeting = ctargeting;
var cTargeting = cTarget + phn.cing; // Targeting

exports.cTargeting = cTargeting;
var cmodify = phn.cmod + phn.cify; // modify

exports.cmodify = cmodify;
var cModify = phn.cMod + phn.cify; // Modify

exports.cModify = cModify;
var cmodified = phn.cmod + phn.cified; // modified

exports.cmodified = cmodified;
var cModified = phn.cMod + phn.cified; // Modified

exports.cModified = cModified;
var cmodifies = phn.cmod + phn.cifies; // modifies

exports.cmodifies = cmodifies;
var cModifies = phn.cMod + phn.cifies; // Modifies

exports.cModifies = cModifies;
var cmodifying = cmodify + phn.cing; // modifying

exports.cmodifying = cmodifying;
var cModifying = cModify + phn.cing; // Modifying

exports.cModifying = cModifying;
var creference = phn.cref + bas.cer + phn.cence; // reference

exports.creference = creference;
var cReference = phn.cRef + bas.cer + phn.cence; // Reference

exports.cReference = cReference;
var creferences = creference + bas.cs; // references

exports.creferences = creferences;
var cReferences = cReference + bas.cs; // References

exports.cReferences = cReferences;
var creferenced = creference + bas.cd; // referenced

exports.creferenced = creferenced;
var cReferenced = cReference + bas.cd; // Referenced

exports.cReferenced = cReferenced;
var creferencing = phn.cref + bas.cer + phn.cenc + phn.cing; // referencing

exports.creferencing = creferencing;
var cReferencing = phn.cRef + bas.cer + phn.cenc + phn.cing; // Referencing

exports.cReferencing = cReferencing;
var cwrite = bas.cwr + phn.cite; // write

exports.cwrite = cwrite;
var cWrite = bas.cWr + phn.cite; // Write

exports.cWrite = cWrite;
var cwrites = cwrite + bas.cs; // writes

exports.cwrites = cwrites;
var cWrites = cWrite + bas.cs; // Writes

exports.cWrites = cWrites;
var cwritten = bas.cw + phn.crit + phn.cten; // written

exports.cwritten = cwritten;
var cWritten = bas.cW + phn.crit + phn.cten; // Written

exports.cWritten = cWritten;
var cwriting = bas.cw + phn.crit + phn.cing; // writing

exports.cwriting = cwriting;
var cWriting = bas.cW + phn.crit + phn.cing; // Writing

exports.cWriting = cWriting;
var cscan = bas.cs + ccan; // scan

exports.cscan = cscan;
var cScan = bas.cS + ccan; // Scan

exports.cScan = cScan;
var cscans = cscan + bas.cs; // scans

exports.cscans = cscans;
var cScans = cScan + bas.cs; // Scans

exports.cScans = cScans;
var cscanned = cscan + phn.cned; // scanned

exports.cscanned = cscanned;
var cScanned = cScan + phn.cned; // Scanned

exports.cScanned = cScanned;
var cscanning = cscan + bas.cn + phn.cing; // scanning

exports.cscanning = cscanning;
var cScanning = cScan + bas.cn + phn.cing; // Scanning

exports.cScanning = cScanning;
var cdirect = bas.cdi + phn.crect; // direct

exports.cdirect = cdirect;
var cDirect = bas.cDi + phn.crect; // Direct

exports.cDirect = cDirect;
var cdirects = cdirect + bas.cs; // directs

exports.cdirects = cdirects;
var cDirects = cDirect + bas.cs; // Directs

exports.cDirects = cDirects;
var cdirected = cdirect + bas.ced; // directed

exports.cdirected = cdirected;
var cDirected = cDirect + bas.ced; // Directed

exports.cDirected = cDirected;
var cdirector = cdirect + bas.cor; // director

exports.cdirector = cdirector;
var cDirector = cDirect + bas.cor; // Director

exports.cDirector = cDirector;
var cdirecting = cdirect + phn.cing; // directing

exports.cdirecting = cdirecting;
var cDirecting = cDirect + phn.cing; // Directing

exports.cDirecting = cDirecting;
var cdirectors = cdirector + bas.cs; // directors

exports.cdirectors = cdirectors;
var cDirectors = cDirector + bas.cs; // Directors

exports.cDirectors = cDirectors;
var cdirectory = cdirector + bas.cy; // directory

exports.cdirectory = cdirectory;
var cDirectory = cDirector + bas.cy; // Directory

exports.cDirectory = cDirectory;
var cdirectories = cdirector + phn.cies; // directories

exports.cdirectories = cdirectories;
var cDirectories = cDirector + phn.cies; // Directories

exports.cDirectories = cDirectories;
var cchive = bas.cc + chive; // chive

exports.cchive = cchive;
var cChive = bas.cC + chive; // Chive

exports.cChive = cChive;
var cchives = cchive + bas.cs; // chives

exports.cchives = cchives;
var cChives = cChive + bas.cs; // Chives

exports.cChives = cChives;
var carchive = bas.car + cchive; // archive

exports.carchive = carchive;
var cArchive = bas.cAr + cchive; // Archive

exports.cArchive = cArchive;
var carchived = carchive + bas.cd; // archived

exports.carchived = carchived;
var cArchived = cArchive + bas.cd; // Archived

exports.cArchived = cArchived;
var carchives = carchive + bas.cs; // archives

exports.carchives = carchives;
var cArchives = cArchive + bas.cs; // Archives

exports.cArchives = cArchives;
var carchiving = bas.car + phn.cchiv + phn.cing; // archiving

exports.carchiving = carchiving;
var cArchiving = bas.cAr + phn.cchiv + phn.cing; // Archiving

exports.cArchiving = cArchiving;
var ccop = bas.cco + bas.cp; // cop

exports.ccop = ccop;
var cCop = bas.cCo + bas.cp; // Cop

exports.cCop = cCop;
var ccops = ccop + bas.cs; // cops

exports.ccops = ccops;
var cCops = cCop + bas.cs; // Cops

exports.cCops = cCops;
var ccopy = bas.cc + phn.copy; // copy

exports.ccopy = ccopy;
var cCopy = bas.cC + phn.copy; // Copy

exports.cCopy = cCopy;
var ccopies = ccop + phn.cies; // copies

exports.ccopies = ccopies;
var cCopies = cCop + phn.cies; // Copies

exports.cCopies = cCopies;
var ccopied = ccop + phn.cied; // copied

exports.ccopied = ccopied;
var cCopied = cCop + phn.cied; // Copied

exports.cCopied = cCopied;
var ccopying = ccopy + phn.cing; // copying

exports.ccopying = ccopying;
var cCopying = cCopy + phn.cing; // Copying

exports.cCopying = cCopying;
var csuccess = bas.csu + phn.cccess; // success

exports.csuccess = csuccess;
var cSuccess = bas.cSu + phn.cccess; // Success

exports.cSuccess = cSuccess;
var csuccesses = csuccess + bas.ces; // successes

exports.csuccesses = csuccesses;
var cSuccesses = cSuccess + bas.ces; // Successes

exports.cSuccesses = cSuccesses;
var csuccessful = csuccess + phn.cful; // successful

exports.csuccessful = csuccessful;
var cSuccessful = cSuccess + phn.cful; // Successful

exports.cSuccessful = cSuccessful;
var cpack = bas.cp + phn.cack; // pack

exports.cpack = cpack;
var cPack = bas.cP + phn.cack; // Pack

exports.cPack = cPack;
var cpacks = cpack + bas.cs; // packs

exports.cpacks = cpacks;
var cPacks = cPack + bas.cs; // Packs

exports.cPacks = cPacks;
var cpacked = cpack + bas.ced; // packed

exports.cpacked = cpacked;
var cPacked = cPack + bas.ced; // Packed

exports.cPacked = cPacked;
var cpacking = cpack + phn.cing; // packing

exports.cpacking = cpacking;
var cPacking = cPack + phn.cing; // Packing

exports.cPacking = cPacking;
var cpackage = cpack + phn.cage; // package

exports.cpackage = cpackage;
var cPackage = cPack + phn.cage; // Package

exports.cPackage = cPackage;
var cpackages = cpackage + bas.cs; // packages

exports.cpackages = cpackages;
var cPackages = cPackage + bas.cs; // Packages

exports.cPackages = cPackages;
var cpackaged = cpackage + bas.cd; // packaged

exports.cpackaged = cpackaged;
var cPackaged = cPackage + bas.cd; // Packaged

exports.cPackaged = cPackaged;
var cpackaging = cpack + bas.cag + phn.cing; // packaging

exports.cpackaging = cpackaging;
var cPackaging = cPack + bas.cag + phn.cing; // Packaging

exports.cPackaging = cPackaging;
var canalyze = phn.cana + phn.clyze; // analyze

exports.canalyze = canalyze;
var cAnalyze = phn.cAna + phn.clyze; // Analyze

exports.cAnalyze = cAnalyze;
var canalyzes = canalyze + bas.cs; // analyzes

exports.canalyzes = canalyzes;
var cAnalyzes = cAnalyze + bas.cs; // Analyzes

exports.cAnalyzes = cAnalyzes;
var canalyzed = canalyze + bas.cd; // analyzed

exports.canalyzed = canalyzed;
var cAnalyzed = cAnalyze + bas.cd; // Analyzed

exports.cAnalyzed = cAnalyzed;
var canalyzing = phn.cana + phn.clyz + phn.cing; // analyzing

exports.canalyzing = canalyzing;
var cAnalyzing = phn.cAna + phn.clyz + phn.cing; // Analyzing

exports.cAnalyzing = cAnalyzing;
var csame = bas.cs + phn.came; // same

exports.csame = csame;
var cSame = bas.cS + phn.came; // Same

exports.cSame = cSame;
var cthere = cthe + bas.cre; // there

exports.cthere = cthere;
var cThere = cThe + bas.cre; // There

exports.cThere = cThere;
var cbracket = phn.cbra + bas.cc + phn.cket; // bracket

exports.cbracket = cbracket;
var cBracket = phn.cBra + bas.cc + phn.cket; // Bracket

exports.cBracket = cBracket;
var cbrackets = cbracket + bas.cs; // brackets

exports.cbrackets = cbrackets;
var cBrackets = cBracket + bas.cs; // Brackets

exports.cBrackets = cBrackets;
var cbracketed = cbracket + bas.ced; // bracketed

exports.cbracketed = cbracketed;
var cBracketed = cBracket + bas.ced; // Bracketed

exports.cBracketed = cBracketed;
var cbracketing = cbracket + phn.cing; // bracketing

exports.cbracketing = cbracketing;
var cBracketing = cBracket + phn.cing; // Bracketing

exports.cBracketing = cBracketing;
var cregular = phn.creg + phn.cular; // regular

exports.cregular = cregular;
var cRegular = phn.cReg + phn.cular; // Regular

exports.cRegular = cRegular;
var cexpression = bas.cex + cpress + phn.cion; // expression

exports.cexpression = cexpression;
var cExpression = bas.cEx + cpress + phn.cion; // Expression

exports.cExpression = cExpression;
var cexpressions = cexpression + bas.cs; // expressions

exports.cexpressions = cexpressions;
var cExpressions = cExpression + bas.cs; // Expressions

exports.cExpressions = cExpressions;
var clexical = phn.clex + phn.cical; // lexical

exports.clexical = clexical;
var cLexical = phn.cLex + phn.cical; // Lexical

exports.cLexical = cLexical;
var clexicon = phn.clex + phn.cicon; // lexicon

exports.clexicon = clexicon;
var cLexicon = phn.cLex + phn.cicon; // Lexicon

exports.cLexicon = cLexicon;
var clexicons = clexicon + bas.cs; // lexicons

exports.clexicons = clexicons;
var cLexicons = cLexicon + bas.cs; // Lexicons

exports.cLexicons = cLexicons;
var cjust = bas.cj + phn.cust; // just

exports.cjust = cjust;
var cJust = bas.cJ + phn.cust; // Just

exports.cJust = cJust;
var cjustice = cjust + phn.cice; // justice

exports.cjustice = cjustice;
var cJustice = cJust + phn.cice; // Justice

exports.cJustice = cJustice;
var cjustified = cjust + phn.cified; // justified

exports.cjustified = cjustified;
var cJustified = cJust + phn.cified; // Justified

exports.cJustified = cJustified;
var cadjust = bas.ca + bas.cd + cjust; // adjust

exports.cadjust = cadjust;
var cAdjust = bas.cAd + cjust; // Adjust

exports.cAdjust = cAdjust;
var cadjusts = cadjust + bas.cs; // adjusts

exports.cadjusts = cadjusts;
var cAdjusts = cAdjust + bas.cs; // Adjusts

exports.cAdjusts = cAdjusts;
var cadjusted = cadjust + bas.ced; // adjusted

exports.cadjusted = cadjusted;
var cAdjusted = cAdjust + bas.ced; // Adjusted

exports.cAdjusted = cAdjusted;
var cadjusting = cadjust + phn.cing; // adjusting

exports.cadjusting = cadjusting;
var cAdjusting = cAdjust + phn.cing; // Adjusting

exports.cAdjusting = cAdjusting;
var csleep = bas.csl + phn.ceep; // sleep

exports.csleep = csleep;
var cSleep = bas.cSl + phn.ceep; // Sleep

exports.cSleep = cSleep;
var csleeps = csleep + bas.cs; // sleeps

exports.csleeps = csleeps;
var cSleeps = cSleep + bas.cs; // Sleeps

exports.cSleeps = cSleeps;
var csleeped = csleep + bas.ced; // sleeped

exports.csleeped = csleeped;
var cSleeped = cSleep + bas.ced; // Sleeped

exports.cSleeped = cSleeped;
var csleeping = csleep + phn.cing; // sleeping

exports.csleeping = csleeping;
var cSleeping = cSleep + phn.cing; // Sleeping

exports.cSleeping = cSleeping;
var cleaf = bas.cl + phn.ceaf; // leaf

exports.cleaf = cleaf;
var cLeaf = bas.cL + phn.ceaf; // Leaf

exports.cLeaf = cLeaf;
var centry = bas.cen + ctry; // entry

exports.centry = centry;
var cEntry = bas.cEn + ctry; // Entry

exports.cEntry = cEntry;
var centries = bas.cen + bas.ctr + phn.cies; // entries

exports.centries = centries;
var cEntries = bas.cEn + bas.ctr + phn.cies; // Entries

exports.cEntries = cEntries;
var centity = bas.cen + phn.ctity; // entity

exports.centity = centity;
var cEntity = bas.cEn + phn.ctity; // Entity

exports.cEntity = cEntity;
var cmay = bas.cma + bas.cy; // may

exports.cmay = cmay;
var cMay = bas.cMa + bas.cy; // May

exports.cMay = cMay;
var conly = bas.co + phn.cnly; // only

exports.conly = conly;
var cOnly = bas.cO + phn.cnly; // Only

exports.cOnly = cOnly;
var csuch = bas.cs + phn.cuch; // such

exports.csuch = csuch;
var cSuch = bas.cS + phn.cuch; // Such

exports.cSuch = cSuch;
var cgeneration = phn.cgen + bas.cer + phn.cation; // generation

exports.cgeneration = cgeneration;
var cGeneration = phn.cGen + bas.cer + phn.cation; // Generation

exports.cGeneration = cGeneration;
var cDemocratic = cDemo + bas.ccr + phn.cati + bas.cc; // Democratic

exports.cDemocratic = cDemocratic;
var cRepublic = bas.cRe + cpublic; // Republic

exports.cRepublic = cRepublic;
var cCentral = unt.cCent + phn.cral; // Central

exports.cCentral = cCentral;
var cAfrican = bas.cAf + phn.crica + bas.cn; // African

exports.cAfrican = cAfrican;
var cPapua = bas.cPa + bas.cpu + bas.ca; // Papua

exports.cPapua = cPapua;
var cTrinidad = phn.cTri + bas.cni + bas.cda + bas.cd; // Trinidad

exports.cTrinidad = cTrinidad;
var cTabago = bas.cTa + bas.cba + bas.cgo; // Tabago

exports.cTabago = cTabago;
var cUnited = cUnit + bas.ced; // United

exports.cUnited = cUnited;
var cArab = bas.cAr + bas.cab; // Arab

exports.cArab = cArab;
var cEmirates = bas.cEm + bas.cir + phn.cates; // Emirates

exports.cEmirates = cEmirates;
var cStates = bas.cSt + phn.cates; // States

exports.cStates = cStates;
var cAmerica = bas.cAm + bas.cer + phn.cica; // America

exports.cAmerica = cAmerica;
var cliver = bas.cli + phn.cver; // liver

exports.cliver = cliver;
var cLiver = bas.cLi + phn.cver; // Liver

exports.cLiver = cLiver;
var ccountry = ccount + bas.cry; // country

exports.ccountry = ccountry;
var cCountry = cCount + bas.cry; // Country

exports.cCountry = cCountry;
var ccountries = ccount + phn.cries; // countries

exports.ccountries = ccountries;
var cCountries = cCount + phn.cries; // Countries

exports.cCountries = cCountries;
var cknot = bas.ck + gen.cnot; // knot

exports.cknot = cknot;
var cKnot = bas.cK + gen.cnot; // Knot

exports.cKnot = cKnot;
var cknots = cknot + bas.cs; // knots

exports.cknots = cknots;
var cKnots = cKnot + bas.cs; // Knots

exports.cKnots = cKnots;
var clanguage = phn.clang + phn.cuage; // language

exports.clanguage = clanguage;
var cLanguage = phn.cLang + phn.cuage; // Language

exports.cLanguage = cLanguage;
var clanguages = clanguage + bas.cs; // languages

exports.clanguages = clanguages;
var cLanguages = cLanguage + bas.cs; // Languages

exports.cLanguages = cLanguages;
var csole = bas.cs + phn.cole; // sole

exports.csole = csole;
var cSole = bas.cS + phn.cole; // Sole

exports.cSole = cSole;
var cconsole = phn.ccon + csole; // console

exports.cconsole = cconsole;
var cConsole = phn.cCon + csole; // Console

exports.cConsole = cConsole;
var cboss = bas.cb + phn.coss; // boss

exports.cboss = cboss;
var cBoss = bas.cB + phn.coss; // Boss

exports.cBoss = cBoss;
var cpanic = bas.cpa + phn.cnic; // panic

exports.cpanic = cpanic;
var cPanic = bas.cPa + phn.cnic; // Panic

exports.cPanic = cPanic;
var cslow = bas.cs + clow; // slow

exports.cslow = cslow;
var cSlow = bas.cS + clow; // Slow

exports.cSlow = cSlow;
var cgot = bas.cgo + bas.ct; // got

exports.cgot = cgot;
var cGot = bas.cGo + bas.ct; // Got

exports.cGot = cGot;
var cmiss = bas.cm + phn.ciss; // miss

exports.cmiss = cmiss;
var cMiss = bas.cM + phn.ciss; // Miss

exports.cMiss = cMiss;
var cecho = bas.cec + bas.cho; // echo

exports.cecho = cecho;
var cEcho = bas.cEc + bas.cho; // Echo

exports.cEcho = cEcho;
var cincrement = phn.cinc + bas.cre + phn.cment; // increment

exports.cincrement = cincrement;
var cIncrement = phn.cInc + bas.cre + phn.cment; // Increment

exports.cIncrement = cIncrement;
var cincrements = cincrement + bas.cs; // increments

exports.cincrements = cincrements;
var cIncrements = cIncrement + bas.cs; // Increments

exports.cIncrements = cIncrements;
var cincremented = cincrement + bas.ced; // incremented

exports.cincremented = cincremented;
var cIncremented = cIncrement + bas.ced; // Incremented

exports.cIncremented = cIncremented;
var cincrementing = cincrement + phn.cing; // incrementing

exports.cincrementing = cincrementing;
var cIncrementing = cIncrement + phn.cing; // Incrementing
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

exports.cIncrementing = cIncrementing;
var cAbsolute = bas.cAb + phn.csol + phn.cute; // Absolute

exports.cAbsolute = cAbsolute;
var cAcid = bas.cAc + bas.cid; // Acid

exports.cAcid = cAcid;
var cAir = bas.cAi + bas.cr; // Air

exports.cAir = cAir;
var cSuperiority = phn.cSup + bas.cer + bas.cio + phn.crit + bas.cy; // Superiority

exports.cSuperiority = cSuperiority;
var cAlabaster = bas.cAl + bas.cab + bas.cas + phn.cter; // Alabaster

exports.cAlabaster = cAlabaster;
var cAlice = bas.cAl + phn.cice; // Alice

exports.cAlice = cAlice;
var cAlloy = phn.cAll + bas.coy; // Alloy

exports.cAlloy = cAlloy;
var cAmaranth = bas.cAm + phn.caranth; // Amaranth

exports.cAmaranth = cAmaranth;
var cAndroid = cAnd + bas.cro + bas.cid; // Android

exports.cAndroid = cAndroid;
var cAntique = bas.cAn + bas.cti + phn.cque; // Antique

exports.cAntique = cAntique;
var cBrass = phn.cBra + bas.css; // Brass

exports.cBrass = cBrass;
var cBronze = bas.cBr + phn.conze; // Bronze

exports.cBronze = cBronze;
var cApple = gen.cApp + bas.cle; // Apple

exports.cApple = cApple;
var cApricot = bas.cAp + phn.cricot; // Apricot

exports.cApricot = cApricot;
var cArctic = bas.cAr + bas.cct + bas.cic; // Arctic

exports.cArctic = cArctic;
var cArmy = bas.cAr + bas.cmy; // Army

exports.cArmy = cArmy;
var cArylide = bas.cAr + bas.cyl + phn.cide; // Arylide

exports.cArylide = cArylide;
var cAtomic = bas.cA + bas.ct + bas.com + bas.cic; // Atomic

exports.cAtomic = cAtomic;
var cBaby = bas.cBa + bas.cby; // Baby

exports.cBaby = cBaby;
var cEyes = bas.cEy + bas.ces; // Eyes

exports.cEyes = cEyes;
var cPowder = bas.cPo + phn.cwder; // Powder

exports.cPowder = cPowder;
var cBaker = bas.cBa + bas.cke + bas.cr; // Baker

exports.cBaker = cBaker;
var cMiller = unt.cMill + bas.cer; // Miller

exports.cMiller = cMiller;
var cBanana = bas.cBa + bas.cna + bas.cna; // Banana

exports.cBanana = cBanana;
var cMania = cMan + bas.cia; // Mania

exports.cMania = cMania;
var cBarbie = bas.cBa + bas.crb + bas.cie; // Barbie

exports.cBarbie = cBarbie;
var cBarn = bas.cBa + bas.crn; // Barn

exports.cBarn = cBarn;
var cBattleship = bas.cBa + bas.ctt + phn.cles + phn.chip; // Battleship

exports.cBattleship = cBattleship;
var cBeau = bas.cBe + bas.cau; // Beau

exports.cBeau = cBeau;
var cDazzled = bas.cDa + bas.czz + bas.cle + bas.cd; // Dazzled

exports.cDazzled = cDazzled;
var cBitter = bas.cBi + phn.ctte + bas.cr; // Bitter

exports.cBitter = cBitter;
var csweet = bas.cs + phn.cweet; // sweet

exports.csweet = csweet;
var cSweet = bas.cS + phn.cweet; // Sweet

exports.cSweet = cSweet;
var cBittersweet = bas.cBi + phn.ctte + bas.crs + phn.cweet; // Bittersweet

exports.cBittersweet = cBittersweet;
var cShimmer = bas.cSh + phn.cimmer; // Shimmer

exports.cShimmer = cShimmer;
var cBean = bas.cBe + bas.can; // Bean

exports.cBean = cBean;
var cChocolate = bas.cCh + phn.cocolate; // Chocolate

exports.cChocolate = cChocolate;
var cShadows = phn.cSha + phn.cdow + bas.cs; // Shadows

exports.cShadows = cShadows;
var cBlanched = bas.cBl + bas.can + bas.cch + bas.ced; // Blanched

exports.cBlanched = cBlanched;
var cBlast = bas.cBl + bas.cas + bas.ct; // Blast

exports.cBlast = cBlast;
var cBlizzard = bas.cBl + bas.ciz + phn.czard; // Blizzard

exports.cBlizzard = cBlizzard;
var cBlood = bas.cBl + phn.cood; // Blood

exports.cBlood = cBlood;
var cCrayola = bas.cCr + phn.cayola; // Crayola

exports.cCrayola = cCrayola;
var cMunsell = bas.cMu + phn.cnsell; // Munsell

exports.cMunsell = cMunsell;
var cPantone = bas.cPa + phn.cntone; // Pantone

exports.cPantone = cPantone;
var cPigment = bas.cPi + phn.cgment; // Pigment

exports.cPigment = cPigment;
var cBell = bas.cBe + bas.cll; // Bell

exports.cBell = cBell;
var cwheel = bas.cwh + phn.ceel; // wheel

exports.cwheel = cwheel;
var cWheel = bas.cWh + phn.ceel; // Wheel

exports.cWheel = cWheel;
var cwheels = cwheel + bas.cs; // wheels

exports.cwheels = cwheels;
var cWheels = cWheel + bas.cs; // Wheels

exports.cWheels = cWheels;
var cJeans = bas.cJe + phn.cans; // Jeans

exports.cJeans = cJeans;
var cYonder = bas.cYo + phn.cnder; // Yonder

exports.cYonder = cYonder;
var cBottle = bas.cBo + bas.ctt + bas.cle; // Bottle

exports.cBottle = cBottle;
var cbrick = bas.cbr + phn.cick; // brick

exports.cbrick = cbrick;
var cBrick = bas.cBr + phn.cick; // Brick

exports.cBrick = cBrick;
var cbricks = cbrick + bas.cs; // bricks

exports.cbricks = cbricks;
var cBricks = cBrick + bas.cs; // Bricks

exports.cBricks = cBricks;
var cBright = bas.cBr + phn.cight; // Bright

exports.cBright = cBright;
var cBrilliant = bas.cBr + phn.cill + phn.cian + bas.ct; // Brilliant

exports.cBrilliant = cBrilliant;
var cRacing = bas.cRa + bas.cci + bas.cng; // Racing

exports.cRacing = cRacing;
var cSugar = phn.cSug + bas.car; // Sugar

exports.cSugar = cSugar;
var cBrunswick = bas.cBr + bas.cun + bas.csw + phn.cick; // Brunswick

exports.cBrunswick = cBrunswick;
var cBud = bas.cBu + bas.cd; // Bud

exports.cBud = cBud;
var cBurly = bas.cBu + bas.crl + bas.cy; // Burly

exports.cBurly = cBurly;
var cBurnished = bas.cBu + bas.crn + phn.cish + bas.ced; // Burnished

exports.cBurnished = cBurnished;
var cBurnt = bas.cBu + bas.crn + bas.ct; // Burnt

exports.cBurnt = cBurnt;
var cCadet = bas.cCa + phn.cdet; // Cadet

exports.cCadet = cCadet;
var cCafe = bas.cCa + bas.cfe; // Cafe

exports.cCafe = cCafe;
var cCambridge = bas.cCa + bas.cmb + bas.cri + bas.cdg + bas.ce; // Cambridge

exports.cCambridge = cCambridge;
var cCameo = bas.cCa + bas.cme + bas.co; // Cameo

exports.cCameo = cCameo;
var cCaput = bas.cCa + cput; // Caput

exports.cCaput = cCaput;
var cMortuum = bas.cMo + bas.crt + bas.cuu + bas.cm; // Mortuum

exports.cMortuum = cMortuum;
var cCaribbean = bas.cCa + bas.cri + bas.cbb + phn.cean; // Caribbean

exports.cCaribbean = cCaribbean;
var cCarnation = bas.cCa + bas.crn + phn.cation; // Carnation

exports.cCarnation = cCarnation;
var cCarrot = bas.cCa + phn.crrot; // Carrot

exports.cCarrot = cCarrot;
var cCastleton = bas.cCa + phn.cstle + phn.cton; // Castleton

exports.cCastleton = cCastleton;
var cCedar = bas.cCe + bas.cda + bas.cr; // Cedar

exports.cCedar = cCedar;
var cChest = bas.cC + phn.chest; // Chest

exports.cChest = cChest;
var cCeladon = phn.cCel + phn.cadon; // Celadon

exports.cCeladon = cCeladon;
var cCeltic = phn.cCel + phn.ctic; // Celtic

exports.cCeltic = cCeltic;
var cCharleston = cChar + phn.cles + phn.cton; // Charleston

exports.cCharleston = cCharleston;
var cCharm = cChar + bas.cm; // Charm

exports.cCharm = cCharm;
var cChartreuse = cChar + phn.ctre + cuse; // Chartreuse

exports.cChartreuse = cChartreuse;
var cCherry = bas.cCh + phn.cerry; // Cherry

exports.cCherry = cCherry;
var cBlossom = bas.cBl + phn.coss + bas.com; // Blossom

exports.cBlossom = cBlossom;
var cChestnut = cChest + bas.cnu + bas.ct; // Chestnut

exports.cChestnut = cChestnut;
var cChrome = bas.cCh + bas.cro + bas.cme; // Chrome

exports.cChrome = cChrome;
var cCinnamon = bas.cCi + phn.cnna + phn.cmon; // Cinnamon

exports.cCinnamon = cCinnamon;
var cCocoa = bas.cCo + bas.cco + bas.ca; // Cocoa

exports.cCocoa = cCocoa;
var cCoffee = bas.cCo + phn.cffee; // Coffee

exports.cCoffee = cCoffee;
var cColumbia = phn.cCol + bas.cum + phn.cbia; // Columbia

exports.cColumbia = cColumbia;
var cCool = bas.cCo + bas.col; // Cool

exports.cCool = cCool;
var cflower = bas.cf + clower; // flower

exports.cflower = cflower;
var cFlower = bas.cF + clower; // Flower

exports.cFlower = cFlower;
var cflowers = cflower + bas.cs; // flowers

exports.cflowers = cflowers;
var cFlowers = cFlower + bas.cs; // Flowers

exports.cFlowers = cFlowers;
var csilk = bas.cs + phn.cilk; // silk

exports.csilk = csilk;
var cSilk = bas.cS + phn.cilk; // Silk

exports.cSilk = cSilk;
var cCosmic = bas.cCo + bas.csm + bas.cic; // Cosmic

exports.cCosmic = cCosmic;
var cLatte = bas.cLa + phn.ctte; // Latte

exports.cLatte = cLatte;
var cCoyote = bas.cCo + bas.cyo + bas.cte; // Coyote

exports.cCoyote = cCoyote;
var cCotton = bas.cCo + bas.ctt + bas.con; // Cotton

exports.cCotton = cCotton;
var cCyber = bas.cCy + phn.cber; // Cyber

exports.cCyber = cCyber;
var cDark = bas.cDa + bas.crk; // Dark

exports.cDark = cDark;
var cByzantium = bas.cBy + phn.czantium; // Byzantium

exports.cByzantium = cByzantium;
var cElectric = bas.cEl + phn.cect + phn.cric; // Electric

exports.cElectric = cElectric;
var cKhaki = bas.cKh + phn.caki; // Khaki

exports.cKhaki = cKhaki;
var cHorse = bas.cHo + phn.crse; // Horse

exports.cHorse = cHorse;
var cHorses = cHorse + bas.cs; // Horses

exports.cHorses = cHorses;
var cMoss = bas.cMo + bas.css; // Moss

exports.cMoss = cMoss;
var cPastel = bas.cPa + phn.cste + bas.cl; // Pastel

exports.cPastel = cPastel;
var cSky = bas.cSk + bas.cy; // Sky

exports.cSky = cSky;
var cSlate = bas.cSl + phn.cate; // Slate

exports.cSlate = cSlate;
var cSpring = bas.cSp + phn.crin + bas.cg; // Spring

exports.cSpring = cSpring;
var cDartmouth = bas.cDa + bas.crt + bas.cmo + phn.cuth; // Dartmouth

exports.cDartmouth = cDartmouth;
var cDavys = bas.cDa + bas.cvy + bas.cs; // Davys

exports.cDavys = cDavys;
var cCerise = bas.cCe + phn.crise; // Cerise

exports.cCerise = cCerise;
var cSparkle = bas.cSp + phn.cark + bas.cle; // Sparkle

exports.cSparkle = cSparkle;
var cDim = bas.cDi + bas.cm; // Dim

exports.cDim = cDim;
var cDodger = bas.cDo + bas.cdg + bas.cer; // Dodger

exports.cDodger = cDodger;
var cDogwood = bas.cDo + bas.cgw + phn.cood; // Dogwood

exports.cDogwood = cDogwood;
var cDuke = bas.cDu + bas.cke; // Duke

exports.cDuke = cDuke;
var cDutch = bas.cDu + phn.ctch; // Dutch

exports.cDutch = cDutch;
var cEarth = bas.cEa + bas.crt + bas.ch; // Earth

exports.cEarth = cEarth;
var cEerie = bas.cEe + bas.cri + bas.ce; // Eerie

exports.cEerie = cEerie;
var cEton = bas.cEt + bas.con; // Eton

exports.cEton = cEton;
var cFalu = bas.cFa + bas.clu; // Falu

exports.cFalu = cFalu;
var cFashion = bas.cFa + bas.csh + phn.cion; // Fashion

exports.cFashion = cFashion;
var cFern = bas.cFe + bas.crn; // Fern

exports.cFern = cFern;
var cFiery = bas.cFi + bas.cer + bas.cy; // Fiery

exports.cFiery = cFiery;
var cFire = bas.cFi + bas.cre; // Fire

exports.cFire = cFire;
var cEngine = bas.cEn + bas.cgi + bas.cne; // Engine

exports.cEngine = cEngine;
var cFloral = bas.cFl + phn.coral; // Floral

exports.cFloral = cFloral;
var cFluorescent = bas.cFl + bas.cuo + phn.cres + phn.ccent; // Fluorescent

exports.cFluorescent = cFluorescent;
var cForest = cFor + phn.cest; // Forest

exports.cForest = cForest;
var cFrost = bas.cFr + phn.cost; // Frost

exports.cFrost = cFrost;
var cbite = bas.cbi + bas.cte; // bite

exports.cbite = cbite;
var cFuzzy = bas.cFu + bas.czz + bas.cy; // Fuzzy

exports.cFuzzy = cFuzzy;
var cWuzzy = bas.cW + bas.cuz + bas.czy; // Wuzzy

exports.cWuzzy = cWuzzy;
var cGhost = bas.cGh + phn.cost; // Ghost

exports.cGhost = cGhost;
var cGlossy = bas.cGl + phn.coss + bas.cy; // Glossy

exports.cGlossy = cGlossy;
var cMetal = cMeta + bas.cl; // Metal

exports.cMetal = cMetal;
var cMetallic = cMeta + phn.cllic; // Metallic

exports.cMetallic = cMetallic;
var cFusion = bas.cFu + phn.csion; // Fusion

exports.cFusion = cFusion;
var cPoppy = cPop + bas.cpy; // Poppy

exports.cPoppy = cPoppy;
var cGranite = bas.cGr + bas.can + phn.cite; // Granite

exports.cGranite = cGranite;
var cGranny = bas.cGr + bas.can + bas.cny; // Granny

exports.cGranny = cGranny;
var cSmith = bas.cSm + phn.cith; // Smith

exports.cSmith = cSmith;
var cLizard = bas.cLi + phn.czard; // Lizard

exports.cLizard = cLizard;
var cGun = bas.cGu + bas.cn; // Gun

exports.cGun = cGun;
var cHarvest = bas.cHa + bas.crv + phn.cest; // Harvest

exports.cHarvest = cHarvest;
var cHeat = bas.cHe + bas.cat; // Heat

exports.cHeat = cHeat;
var cWave = bas.cWa + bas.cve; // Wave

exports.cWave = cWave;
var cHollywood = bas.cHo + bas.cll + bas.cyw + phn.cood; // Hollywood

exports.cHollywood = cHollywood;
var cHoney = bas.cHo + bas.cne + bas.cy; // Honey

exports.cHoney = cHoney;
var cdew = bas.cd + bas.cew; // dew

exports.cdew = cdew;
var cHonolulu = bas.cHo + bas.cno + bas.clu + bas.clu; // Honolulu

exports.cHonolulu = cHonolulu;
var cHookers = bas.cHo + phn.coker + bas.cs; // Hookers

exports.cHookers = cHookers;
var cHot = bas.cHo + bas.ct; // Hot

exports.cHot = cHot;
var cHunter = bas.cHu + bas.cnt + bas.cer; // Hunter

exports.cHunter = cHunter;
var cIce = bas.cIc + bas.ce; // Ice

exports.cIce = cIce;
var cIlluminating = bas.cIl + phn.clum + phn.cina + phn.ctin + bas.cg; // Illuminating

exports.cIlluminating = cIlluminating;
var cImperial = bas.cIm + phn.cper + bas.cia + bas.cl; // Imperial

exports.cImperial = cImperial;
var cworm = bas.cwo + bas.crm; // worm

exports.cworm = cworm;
var cIndependence = bas.cIn + bas.cde + cpen + phn.cden + bas.cce; // Independence

exports.cIndependence = cIndependence;
var cIndian = gen.cIndia + bas.cn; // Indian

exports.cIndian = cIndian;
var cDye = bas.cDy + bas.ce; // Dye

exports.cDye = cDye;
var cnational = cnation + bas.cal; // national

exports.cnational = cnational;
var cNational = cNation + bas.cal; // National

exports.cNational = cNational;
var cnationals = cnational + bas.cs; // nationals

exports.cnationals = cnationals;
var cNationals = cNational + bas.cs; // Nationals

exports.cNationals = cNationals;
var cInternational = phn.cInter + cnation + bas.cal; // International

exports.cInternational = cInternational;
var cAerospace = bas.cAe + bas.cro + cspace; // Aerospace

exports.cAerospace = cAerospace;
var cEngineering = bas.cEn + bas.cgi + bas.cne + bas.cer + phn.cing; // Engineering

exports.cEngineering = cEngineering;
var cBridge = bas.cBr + bas.cid + bas.cge; // Bridge

exports.cBridge = cBridge;
var cCarmine = bas.cCa + phn.crmine; // Carmine

exports.cCarmine = cCarmine;
var cjazz = bas.cja + bas.czz; // jazz

exports.cjazz = cjazz;
var cJazz = bas.cJa + bas.czz; // Jazz

exports.cJazz = cJazz;
var cberry = phn.cber + bas.cry; // berry

exports.cberry = cberry;
var cBerry = phn.cBer + bas.cry; // Berry

exports.cBerry = cBerry;
var cjam = bas.cja + bas.cm; // jam

exports.cjam = cjam;
var cJam = bas.cJa + bas.cm; // Jam

exports.cJam = cJam;
var cKelly = bas.cKe + bas.cll + bas.cy; // Kelly

exports.cKelly = cKelly;
var cKombu = bas.cKo + bas.cmb + bas.cu; // Kombu

exports.cKombu = cKombu;
var cLanguid = bas.cLa + bas.cng + bas.cui + bas.cd; // Languid

exports.cLanguid = cLanguid;
var cLapis = bas.cLa + bas.cpi + bas.cs; // Lapis

exports.cLapis = cLapis;
var cLazuli = bas.cL + bas.caz + phn.culi; // Lazuli

exports.cLazuli = cLazuli;
var cLaser = bas.cLa + bas.cse + bas.cr; // Laser

exports.cLaser = cLaser;
var cLaurel = bas.cLa + phn.cure + bas.cl; // Laurel

exports.cLaurel = cLaurel;
var cLawn = bas.cLa + bas.cwn; // Lawn

exports.cLawn = cLawn;
var cCurry = phn.cCur + bas.cry; // Curry

exports.cCurry = cCurry;
var cGlacier = bas.cGl + bas.cac + phn.cier; // Glacier

exports.cGlacier = cGlacier;
var cMeringue = bas.cMe + phn.crin + bas.cgu + bas.ce; // Meringue

exports.cMeringue = cMeringue;
var cLight = bas.cLi + phn.cght; // Light

exports.cLight = cLight;
var cCoral = phn.cCor + bas.cal; // Coral

exports.cCoral = cCoral;
var cSteel = bas.cSt + phn.ceel; // Steel

exports.cSteel = cSteel;
var cLuster = bas.cLu + phn.cster; // Luster

exports.cLuster = cLuster;
var cLincoln = phn.cLin + phn.ccol + bas.cn; // Lincoln

exports.cLincoln = cLincoln;
var cLiseran = bas.cLi + bas.cse + phn.cran; // Liseran

exports.cLiseran = cLiseran;
var cLittle = cLit + phn.ctle; // Little

exports.cLittle = cLittle;
var cBoy = bas.cBo + bas.cy; // Boy

exports.cBoy = cBoy;
var cDogs = bas.cDo + bas.cgs; // Dogs

exports.cDogs = cDogs;
var cOrgan = bas.cOr + phn.cgan; // Organ

exports.cOrgan = cOrgan;
var cMacaroni = phn.cMac + phn.caro + bas.cni; // Macaroni

exports.cMacaroni = cMacaroni;
var cCheese = bas.cCh + bas.cee + bas.cse; // Cheese

exports.cCheese = cCheese;
var cMadder = bas.cMa + phn.cdder; // Madder

exports.cMadder = cMadder;
var cHaze = bas.cHa + bas.cze; // Haze

exports.cHaze = cHaze;
var cMagic = bas.cMa + bas.cgi + bas.cc; // Magic

exports.cMagic = cMagic;
var cMajorelle = bas.cMa + bas.cjo + bas.cre + bas.cll + bas.ce; // Majorelle

exports.cMajorelle = cMajorelle;
var cminimum = gen.cmin + phn.cimum; // minimum

exports.cminimum = cminimum;
var cMinimum = gen.cMin + phn.cimum; // Minimum

exports.cMinimum = cMinimum;
var cminimums = cminimum + bas.cs; // minimums

exports.cminimums = cminimums;
var cMinimums = cMinimum + bas.cs; // Minimums

exports.cMinimums = cMinimums;
var cmaximum = gen.cmax + phn.cimum; // maximum

exports.cmaximum = cmaximum;
var cMaximum = gen.cMax + phn.cimum; // Maximum

exports.cMaximum = cMaximum;
var cmaximums = cmaximum + bas.cs; // maximums

exports.cmaximums = cmaximums;
var cMaximums = cMaximum + bas.cs; // Maximums

exports.cMaximums = cMaximums;
var cMaya = gen.cMay + bas.ca; // Maya

exports.cMaya = cMaya;
var cMedium = bas.cMe + phn.cdium; // Medium

exports.cMedium = cMedium;
var cMellow = bas.cMe + phn.cllow; // Mellow

exports.cMellow = cMellow;
var cweed = bas.cwe + bas.ced; // weed

exports.cweed = cweed;
var cWeed = bas.cWe + bas.ced; // Weed

exports.cWeed = cWeed;
var cweeds = cweed + bas.cs; // weeds

exports.cweeds = cweeds;
var cWeeds = cWeed + bas.cs; // Weeds

exports.cWeeds = cWeeds;
var cweeded = cweed + bas.ced; // weeded

exports.cweeded = cweeded;
var cWeeded = cWeed + bas.ced; // Weeded

exports.cWeeded = cWeeded;
var cSeaweed = cSea + cweed; // Seaweed

exports.cSeaweed = cSeaweed;
var csun = bas.csu + bas.cn; // sun

exports.csun = csun;
var cSun = bas.cSu + bas.cn; // Sun

exports.cSun = cSun;
var csuns = csun + bas.cs; // suns

exports.csuns = csuns;
var cSuns = cSun + bas.cs; // Suns

exports.cSuns = cSuns;
var cSunburst = bas.cSu + bas.cnb + bas.cur + bas.cst; // Sunburst

exports.cSunburst = cSunburst;
var cMexican = bas.cMe + bas.cxi + phn.ccan; // Mexican

exports.cMexican = cMexican;
var cMiddle = bas.cMi + bas.cdd + bas.cle; // Middle

exports.cMiddle = cMiddle;
var cMikado = bas.cMi + bas.cka + bas.cdo; // Mikado

exports.cMikado = cMikado;
var cMimi = bas.cMi + bas.cm + bas.ci; // Mimi

exports.cMimi = cMimi;
var cMinion = gen.cMin + phn.cion; // Minion

exports.cMinion = cMinion;
var cMisty = phn.cMis + bas.cty; // Misty

exports.cMisty = cMisty;
var cMorning = bas.cMo + bas.crn + phn.cing; // Morning

exports.cMorning = cMorning;
var cMeadow = bas.cMe + phn.cadow; // Meadow

exports.cMeadow = cMeadow;
var cMount = bas.cMo + phn.cunt; // Mount

exports.cMount = cMount;
var cbatten = bas.cba + phn.ctten; // batten

exports.cbatten = cbatten;
var cMulberry = bas.cMu + bas.clb + phn.cerry; // Mulberry

exports.cMulberry = cMulberry;
var cMyrtle = bas.cMy + bas.crt + bas.cle; // Myrtle

exports.cMyrtle = cMyrtle;
var cNadeshiko = bas.cNa + bas.cde + bas.csh + bas.cik + bas.co; // Nadeshiko

exports.cNadeshiko = cNadeshiko;
var cNaples = bas.cNa + phn.cple + bas.cs; // Naples

exports.cNaples = cNaples;
var cNavajo = bas.cNa + bas.cva + bas.cjo; // Navajo

exports.cNavajo = cNavajo;
var cNavy = bas.cNa + bas.cvy; // Navy

exports.cNavy = cNavy;
var cNeon = bas.cNe + bas.con; // Neon

exports.cNeon = cNeon;
var cYork = bas.cYo + bas.crk; // York

exports.cYork = cYork;
var cPhoto = bas.cPh + bas.cot + bas.co; // Photo

exports.cPhoto = cPhoto;
var cOcean = bas.cOc + phn.cean; // Ocean

exports.cOcean = cOcean;
var cLace = bas.cLa + bas.cce; // Lace

exports.cLace = cLace;
var cOpera = bas.cOp + phn.cera; // Opera

exports.cOpera = cOpera;
var cPeel = bas.cPe + bas.cel; // Peel

exports.cPeel = cPeel;
var cSoda = bas.cSo + bas.cda; // Soda

exports.cSoda = cSoda;
var cOuter = cOut + bas.cer; // Outer

exports.cOuter = cOuter;
var cOutrageous = cOut + phn.crage + phn.cous; // Outrageous

exports.cOutrageous = cOutrageous;
var cOxford = bas.cOx + cfor + bas.cd; // Oxford

exports.cOxford = cOxford;
var cPacific = bas.cPa + bas.cci + phn.cfic; // Pacific

exports.cPacific = cPacific;
var cPalatinate = cPal + phn.catin + phn.cate; // Palatinate

exports.cPalatinate = cPalatinate;
var cPale = cPal + bas.ce; // Pale

exports.cPale = cPale;
var cPansy = bas.cPa + bas.cns + bas.cy; // Pansy

exports.cPansy = cPansy;
var cPaolo = bas.cPa + bas.col + bas.co; // Paolo

exports.cPaolo = cPaolo;
var cVeronese = phn.cVer + num.cone + bas.cse; // Veronese

exports.cVeronese = cVeronese;
var cPapaya = gen.cPapa + bas.cya; // Papaya

exports.cPapaya = cPapaya;
var cWhip = bas.cWh + bas.cip; // Whip

exports.cWhip = cWhip;
var cParadise = phn.cPara + bas.cdi + bas.cse; // Paradise

exports.cParadise = cParadise;
var cParis = bas.cPa + phn.cris; // Paris

exports.cParis = cParis;
var cPaynes = bas.cPa + bas.cyn + bas.ces; // Paynes

exports.cPaynes = cPaynes;
var cPuff = bas.cPu + bas.cff; // Puff

exports.cPuff = cPuff;
var cPearly = bas.cPe + bas.car + bas.cly; // Pearly

exports.cPearly = cPearly;
var cPermanent = phn.cPer + cman + phn.cent; // Permanent

exports.cPermanent = cPermanent;
var cGeranium = bas.cGe + phn.cran + phn.cium; // Geranium

exports.cGeranium = cGeranium;
var cLake = bas.cLa + bas.cke; // Lake

exports.cLake = cLake;
var cPersian = phn.cPer + phn.csia + bas.cn; // Persian

exports.cPersian = cPersian;
var cPewter = bas.cPe + bas.cwt + bas.cer; // Pewter

exports.cPewter = cPewter;
var cPhthalo = bas.cPh + bas.cth + bas.cal + bas.co; // Phthalo

exports.cPhthalo = cPhthalo;
var cPicotee = unt.cPico + phn.ctee; // Picotee

exports.cPicotee = cPicotee;
var cPictorial = bas.cPi + phn.cctor + bas.cia + bas.cl; // Pictorial

exports.cPictorial = cPictorial;
var cPiggy = bas.cPi + bas.cgg + bas.cy; // Piggy

exports.cPiggy = cPiggy;
var cPine = bas.cPi + bas.cne; // Pine

exports.cPine = cPine;
var cTree = bas.cTr + bas.cee; // Tree

exports.cTree = cTree;
var cFlamingo = bas.cFl + bas.cam + phn.cing + bas.co; // Flamingo

exports.cFlamingo = cFlamingo;
var cSherbet = bas.cSh + bas.cer + cbet; // Sherbet

exports.cSherbet = cSherbet;
var cPlump = bas.cPl + bas.cum + bas.cp; // Plump

exports.cPlump = cPlump;
var cpolish = bas.cpo + phn.clish; // polish

exports.cpolish = cpolish;
var cPolish = bas.cPo + phn.clish; // Polish

exports.cPolish = cPolish;
var cpolished = cpolish + bas.ced; // polished

exports.cpolished = cpolished;
var cPolished = cPolish + bas.ced; // Polished

exports.cPolished = cPolished;
var cPomp = bas.cPo + bas.cmp; // Pomp

exports.cPomp = cPomp;
var cPower = bas.cPo + phn.cwer; // Power

exports.cPower = cPower;
var cPortland = cPort + bas.cla + bas.cnd; // Portland

exports.cPortland = cPortland;
var cPrinceton = phn.cPri + phn.cnce + phn.cton; // Princeton

exports.cPrinceton = cPrinceton;
var cPrussian = bas.cPr + bas.cus + phn.csia + bas.cn; // Prussian

exports.cPrussian = cPrussian;
var cPsychedelic = bas.cPs + bas.cyc + bas.che + phn.cdel + bas.cic; // Psychedelic

exports.cPsychedelic = cPsychedelic;
var cPullman = bas.cPu + bas.cll + cman; // Pullman

exports.cPullman = cPullman;
var cMountain = bas.cMo + phn.cunt + phn.cain; // Mountain

exports.cMountain = cMountain;
var cMajesty = bas.cMa + bas.cje + phn.csty; // Majesty

exports.cMajesty = cMajesty;
var cPizzazz = bas.cPi + bas.czz + phn.cazz; // Pizzazz

exports.cPizzazz = cPizzazz;
var cQueen = phn.cQue + bas.cen; // Queen

exports.cQueen = cQueen;
var cQuick = bas.cQu + phn.cick; // Quick

exports.cQuick = cQuick;
var cQuinacridone = bas.cQu + phn.cina + bas.ccr + bas.cid + num.cone; // Quinacridone

exports.cQuinacridone = cQuinacridone;
var cRadical = bas.cRa + bas.cdi + phn.ccal; // Radical

exports.cRadical = cRadical;
var cRaisin = bas.cRa + bas.cis + bas.cin; // Raisin

exports.cRaisin = cRaisin;
var cGlace = bas.cGl + phn.cace; // Glace

exports.cGlace = cGlace;
var cRazzle = bas.cRa + bas.czz + bas.cle; // Razzle

exports.cRazzle = cRazzle;
var cDazzle = bas.cDa + bas.czz + bas.cle; // Dazzle

exports.cDazzle = cDazzle;
var cRazzmic = bas.cRa + bas.czz + bas.camai + bas.cc; // Razzmic

exports.cRazzmic = cRazzmic;
var cRebecca = bas.cRe + bas.cbe + bas.ccc + bas.ca; // Rebecca

exports.cRebecca = cRebecca;
var cSalsa = bas.cSa + bas.cls + bas.ca; // Salsa

exports.cSalsa = cSalsa;
var cResolution = phn.cRes + bas.col + bas.cut + phn.cion; // Resolution

exports.cResolution = cResolution;
var cRich = bas.cRi + bas.cch; // Rich

exports.cRich = cRich;
var cRifle = bas.cRi + bas.cfl + bas.ce; // Rifle

exports.cRifle = cRifle;
var cRobin = bas.cRo + gen.cbin; // Robin

exports.cRobin = cRobin;
var cEgg = bas.cEg + bas.cg; // Egg

exports.cEgg = cEgg;
var cRocket = bas.cRo + bas.cck + bas.cet; // Rocket

exports.cRocket = cRocket;
var cRoman = bas.cRo + cman; // Roman

exports.cRoman = cRoman;
var cBonbon = bas.cBo + bas.cnb + bas.con; // Bonbon

exports.cBonbon = cBonbon;
var cDust = bas.cDu + bas.cst; // Dust

exports.cDust = cDust;
var cEbony = bas.cEb + phn.cony; // Ebony

exports.cEbony = cEbony;
var cQuartz = cQuart + bas.cz; // Quartz

exports.cQuartz = cQuartz;
var cVale = bas.cVa + bas.cle; // Vale

exports.cVale = cVale;
var cwood = bas.cwo + bas.cod; // wood

exports.cwood = cwood;
var cRosso = bas.cRo + bas.css + bas.co; // Rosso

exports.cRosso = cRosso;
var cCorsa = bas.cC + bas.cor + bas.csa; // Corsa

exports.cCorsa = cCorsa;
var cRosy = bas.cRo + bas.csy; // Rosy

exports.cRosy = cRosy;
var cRoyal = bas.cRo + bas.cya + bas.cl; // Royal

exports.cRoyal = cRoyal;
var crub = bas.cru + bas.cb; // rub

exports.crub = crub;
var cRub = bas.cRu + bas.cb; // Rub

exports.cRub = cRub;
var crubs = crub + bas.cs; // rubs

exports.crubs = crubs;
var cRubs = cRub + bas.cs; // Rubs

exports.cRubs = cRubs;
var crubbed = crub + cbed; // rubbed

exports.crubbed = crubbed;
var cRubbed = cRub + cbed; // Rubbed

exports.cRubbed = cRubbed;
var crubbing = crub + phn.cbing; // rubbing

exports.crubbing = crubbing;
var cRubbing = cRub + phn.cbing; // Rubbing

exports.cRubbing = cRubbing;
var cRubine = cRub + phn.cine; // Rubine

exports.cRubine = cRubine;
var cSacramento = bas.cSa + bas.ccr + phn.camen + bas.cto; // Sacramento

exports.cSacramento = cSacramento;
var cState = bas.cSt + phn.cate; // State

exports.cState = cState;
var cSaddle = bas.cSa + bas.cdd + bas.cle; // Saddle

exports.cSaddle = cSaddle;
var cSafety = cSafe + bas.cty; // Safety

exports.cSafety = cSafety;
var cBlaze = bas.cBl + phn.caze; // Blaze

exports.cBlaze = cBlaze;
var cPatricks = cPat + phn.crick + bas.cs; // Patricks

exports.cPatricks = cPatricks;
var cSandy = gen.cSan + bas.cdy; // Sandy

exports.cSandy = cSandy;
var csap = bas.csa + bas.cp; // sap

exports.csap = csap;
var cSap = bas.cSa + bas.cp; // Sap

exports.cSap = cSap;
var cSatin = bas.cSa + phn.ctin; // Satin

exports.cSatin = cSatin;
var cSheen = bas.cSh + phn.ceen; // Sheen

exports.cSheen = cSheen;
var cSchauss = bas.cSc + bas.cha + bas.cus + bas.cs; // Schauss

exports.cSchauss = cSchauss;
var cSchool = bas.cSc + bas.cho + bas.col; // School

exports.cSchool = cSchool;
var cBus = bas.cBu + bas.cs; // Bus

exports.cBus = cBus;
var cScreamin = bas.cSc + phn.cream + bas.cin; // Screamin

exports.cScreamin = cScreamin;
var cSeal = cSea + bas.cl; // Seal

exports.cSeal = cSeal;
var cshell = bas.csh + phn.cell; // shell

exports.cshell = cshell;
var cSelective = cSelect + phn.cive; // Selective

exports.cSelective = cSelective;
var cShamrock = phn.cSha + bas.cmr + phn.cock; // Shamrock

exports.cShamrock = cShamrock;
var cShimmering = cShimmer + phn.cing; // Shimmering

exports.cShimmering = cShimmering;
var cBlush = bas.cBl + phn.cush; // Blush

exports.cBlush = cBlush;
var cShiny = bas.cSh + bas.cin + bas.cy; // Shiny

exports.cShiny = cShiny;
var cShocking = bas.cSh + phn.cock + phn.cing; // Shocking

exports.cShocking = cShocking;
var cChalice = bas.cCh + phn.cali + bas.cce; // Chalice

exports.cChalice = cChalice;
var cSizzling = bas.cSi + bas.czz + phn.clin + bas.cg; // Sizzling

exports.cSizzling = cSizzling;
var cSunrise = bas.cS + bas.cun + phn.crise; // Sunrise

exports.cSunrise = cSunrise;
var cSlimy = bas.cSl + bas.cim + bas.cy; // Slimy

exports.cSlimy = cSlimy;
var cSmoky = bas.cSm + bas.cok + bas.cy; // Smoky

exports.cSmoky = cSmoky;
var cSonic = bas.cSo + phn.cnic; // Sonic

exports.cSonic = cSonic;
var cBistre = bas.cBi + phn.cstre; // Bistre

exports.cBistre = cBistre;
var cStar = bas.cSt + bas.car; // Star

exports.cStar = cStar;
var cStil = bas.cSt + bas.cil; // Stil

exports.cStil = cStil;
var cGrain = bas.cGr + phn.cain; // Grain

exports.cGrain = cGrain;
var cglow = bas.cg + clow; // glow

exports.cglow = cglow;
var cSuper = phn.cSup + bas.cer; // Super

exports.cSuper = cSuper;
var cTango = gen.cTango; // Tango

exports.cTango = cTango;
var cTart = phn.cTart; // Tart

exports.cTart = cTart;
var cTea = bas.cTe + bas.ca; // Tea

exports.cTea = cTea;
var cTerra = bas.cTe + phn.crra; // Terra

exports.cTerra = cTerra;
var cCotta = bas.cCo + bas.ctt + bas.ca; // Cotta

exports.cCotta = cCotta;
var cThulian = bas.cTh + phn.culi + bas.can; // Thulian

exports.cThulian = cThulian;
var cTickle = cTick + bas.cle; // Tickle

exports.cTickle = cTickle;
var cTiffany = bas.cTi + bas.cff + phn.cany; // Tiffany

exports.cTiffany = cTiffany;
var cTimber = bas.cTi + phn.cmber; // Timber

exports.cTimber = cTimber;
var cwolf = bas.cwo + bas.clf; // wolf

exports.cwolf = cwolf;
var cTropical = bas.cTr + bas.cop + phn.cical; // Tropical

exports.cTropical = cTropical;
var cRain = bas.cR + phn.cain; // Rain

exports.cRain = cRain;
var cTrypan = cTry + bas.cpa + bas.cn; // Trypan

exports.cTrypan = cTrypan;
var cTufts = bas.cTu + bas.cft + bas.cs; // Tufts

exports.cTufts = cTufts;
var cTumble = bas.cTu + bas.cmb + bas.cle; // Tumble

exports.cTumble = cTumble;
var cTwilight = bas.cTw + phn.cili + phn.cght; // Twilight

exports.cTwilight = cTwilight;
var cTyrian = bas.cTy + phn.cria + bas.cn; // Tyrian

exports.cTyrian = cTyrian;
var cUltra = bas.cUl + phn.ctra; // Ultra

exports.cUltra = cUltra;
var cUnbleached = bas.cUn + phn.cble + phn.cach + bas.ced; // Unbleached

exports.cUnbleached = cUnbleached;
var cNations = cNation + bas.cs; // Nations

exports.cNations = cNations;
var cUpsdell = bas.cUp + bas.csd + phn.cell; // Upsdell

exports.cUpsdell = cUpsdell;
var cUranian = bas.cUr + phn.cania + bas.cn; // Uranian

exports.cUranian = cUranian;
var cvan = bas.cva + bas.cn; // van

exports.cvan = cvan;
var cVan = bas.cVa + bas.cn; // Van

exports.cVan = cVan;
var cDyke = bas.cDy + bas.cke; // Dyke

exports.cDyke = cDyke;
var cVegas = bas.cVe + bas.cga + bas.cs; // Vegas

exports.cVegas = cVegas;
var cVenetian = bas.cVe + bas.cne + bas.cti + bas.can; // Venetian

exports.cVenetian = cVenetian;
var cVivid = bas.cVi + phn.cvid; // Vivid

exports.cVivid = cVivid;
var cWarm = bas.cWa + bas.crm; // Warm

exports.cWarm = cWarm;
var cWild = bas.cWi + bas.cld; // Wild

exports.cWild = cWild;
var cWindsor = cWind + bas.cso + bas.cr; // Windsor

exports.cWindsor = cWindsor;
var cDregs = bas.cDr + bas.ceg + bas.cs; // Dregs

exports.cDregs = cDregs;
var cWinter = bas.cWi + bas.cnt + bas.cer; // Winter

exports.cWinter = cWinter;
var cDream = bas.cDr + phn.ceam; // Dream

exports.cDream = cDream;
var cYale = bas.cYa + bas.cle; // Yale

exports.cYale = cYale;